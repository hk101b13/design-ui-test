import * as c from "react";
import be, { forwardRef as aa, useContext as en, createContext as Ga, useMemo as Zt, createElement as sy, useRef as De, useState as Ut, useEffect as Dt, useLayoutEffect as ly, useCallback as pn, useImperativeHandle as ho, Component as uy, cloneElement as xr, isValidElement as fc } from "react";
import $a, { unstable_batchedUpdates as cy, flushSync as Ws } from "react-dom";
var di = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function qa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Gs = { exports: {} }, ma = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vc;
function dy() {
  return vc || (vc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = be, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h = Symbol.iterator, g = "@@iterator";
    function m(L) {
      if (L === null || typeof L != "object")
        return null;
      var le = h && L[h] || L[g];
      return typeof le == "function" ? le : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(L) {
      {
        for (var le = arguments.length, he = new Array(le > 1 ? le - 1 : 0), Pe = 1; Pe < le; Pe++)
          he[Pe - 1] = arguments[Pe];
        x("error", L, he);
      }
    }
    function x(L, le, he) {
      {
        var Pe = y.ReactDebugCurrentFrame, ze = Pe.getStackAddendum();
        ze !== "" && (le += "%s", he = he.concat([ze]));
        var ge = he.map(function(ye) {
          return String(ye);
        });
        ge.unshift("Warning: " + le), Function.prototype.apply.call(console[L], console, ge);
      }
    }
    var C = !1, E = !1, S = !1, w = !1, N = !1, O;
    O = Symbol.for("react.module.reference");
    function _(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === r || L === i || N || L === a || L === u || L === d || w || L === p || C || E || S || typeof L == "object" && L !== null && (L.$$typeof === v || L.$$typeof === f || L.$$typeof === o || L.$$typeof === s || L.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === O || L.getModuleId !== void 0));
    }
    function $(L, le, he) {
      var Pe = L.displayName;
      if (Pe)
        return Pe;
      var ze = le.displayName || le.name || "";
      return ze !== "" ? he + "(" + ze + ")" : he;
    }
    function I(L) {
      return L.displayName || "Context";
    }
    function F(L) {
      if (L == null)
        return null;
      if (typeof L.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof L == "function")
        return L.displayName || L.name || null;
      if (typeof L == "string")
        return L;
      switch (L) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof L == "object")
        switch (L.$$typeof) {
          case s:
            var le = L;
            return I(le) + ".Consumer";
          case o:
            var he = L;
            return I(he._context) + ".Provider";
          case l:
            return $(L, L.render, "ForwardRef");
          case f:
            var Pe = L.displayName || null;
            return Pe !== null ? Pe : F(L.type) || "Memo";
          case v: {
            var ze = L, ge = ze._payload, ye = ze._init;
            try {
              return F(ye(ge));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, V = 0, T, R, k, A, U, z, B;
    function G() {
    }
    G.__reactDisabledLog = !0;
    function W() {
      {
        if (V === 0) {
          T = console.log, R = console.info, k = console.warn, A = console.error, U = console.group, z = console.groupCollapsed, B = console.groupEnd;
          var L = {
            configurable: !0,
            enumerable: !0,
            value: G,
            writable: !0
          };
          Object.defineProperties(console, {
            info: L,
            log: L,
            warn: L,
            error: L,
            group: L,
            groupCollapsed: L,
            groupEnd: L
          });
        }
        V++;
      }
    }
    function j() {
      {
        if (V--, V === 0) {
          var L = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, L, {
              value: T
            }),
            info: M({}, L, {
              value: R
            }),
            warn: M({}, L, {
              value: k
            }),
            error: M({}, L, {
              value: A
            }),
            group: M({}, L, {
              value: U
            }),
            groupCollapsed: M({}, L, {
              value: z
            }),
            groupEnd: M({}, L, {
              value: B
            })
          });
        }
        V < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var H = y.ReactCurrentDispatcher, q;
    function Y(L, le, he) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (ze) {
            var Pe = ze.stack.trim().match(/\n( *(at )?)/);
            q = Pe && Pe[1] || "";
          }
        return `
` + q + L;
      }
    }
    var J = !1, oe;
    {
      var re = typeof WeakMap == "function" ? WeakMap : Map;
      oe = new re();
    }
    function de(L, le) {
      if (!L || J)
        return "";
      {
        var he = oe.get(L);
        if (he !== void 0)
          return he;
      }
      var Pe;
      J = !0;
      var ze = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ge;
      ge = H.current, H.current = null, W();
      try {
        if (le) {
          var ye = function() {
            throw Error();
          };
          if (Object.defineProperty(ye.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ye, []);
            } catch (xt) {
              Pe = xt;
            }
            Reflect.construct(L, [], ye);
          } else {
            try {
              ye.call();
            } catch (xt) {
              Pe = xt;
            }
            L.call(ye.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xt) {
            Pe = xt;
          }
          L();
        }
      } catch (xt) {
        if (xt && Pe && typeof xt.stack == "string") {
          for (var Ee = xt.stack.split(`
`), Ye = Pe.stack.split(`
`), Re = Ee.length - 1, Ie = Ye.length - 1; Re >= 1 && Ie >= 0 && Ee[Re] !== Ye[Ie]; )
            Ie--;
          for (; Re >= 1 && Ie >= 0; Re--, Ie--)
            if (Ee[Re] !== Ye[Ie]) {
              if (Re !== 1 || Ie !== 1)
                do
                  if (Re--, Ie--, Ie < 0 || Ee[Re] !== Ye[Ie]) {
                    var Be = `
` + Ee[Re].replace(" at new ", " at ");
                    return L.displayName && Be.includes("<anonymous>") && (Be = Be.replace("<anonymous>", L.displayName)), typeof L == "function" && oe.set(L, Be), Be;
                  }
                while (Re >= 1 && Ie >= 0);
              break;
            }
        }
      } finally {
        J = !1, H.current = ge, j(), Error.prepareStackTrace = ze;
      }
      var Pt = L ? L.displayName || L.name : "", ut = Pt ? Y(Pt) : "";
      return typeof L == "function" && oe.set(L, ut), ut;
    }
    function Z(L, le, he) {
      return de(L, !1);
    }
    function Q(L) {
      var le = L.prototype;
      return !!(le && le.isReactComponent);
    }
    function ce(L, le, he) {
      if (L == null)
        return "";
      if (typeof L == "function")
        return de(L, Q(L));
      if (typeof L == "string")
        return Y(L);
      switch (L) {
        case u:
          return Y("Suspense");
        case d:
          return Y("SuspenseList");
      }
      if (typeof L == "object")
        switch (L.$$typeof) {
          case l:
            return Z(L.render);
          case f:
            return ce(L.type, le, he);
          case v: {
            var Pe = L, ze = Pe._payload, ge = Pe._init;
            try {
              return ce(ge(ze), le, he);
            } catch {
            }
          }
        }
      return "";
    }
    var Ce = Object.prototype.hasOwnProperty, we = {}, ke = y.ReactDebugCurrentFrame;
    function ve(L) {
      if (L) {
        var le = L._owner, he = ce(L.type, L._source, le ? le.type : null);
        ke.setExtraStackFrame(he);
      } else
        ke.setExtraStackFrame(null);
    }
    function ae(L, le, he, Pe, ze) {
      {
        var ge = Function.call.bind(Ce);
        for (var ye in L)
          if (ge(L, ye)) {
            var Ee = void 0;
            try {
              if (typeof L[ye] != "function") {
                var Ye = Error((Pe || "React class") + ": " + he + " type `" + ye + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof L[ye] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ye.name = "Invariant Violation", Ye;
              }
              Ee = L[ye](le, ye, Pe, he, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Re) {
              Ee = Re;
            }
            Ee && !(Ee instanceof Error) && (ve(ze), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Pe || "React class", he, ye, typeof Ee), ve(null)), Ee instanceof Error && !(Ee.message in we) && (we[Ee.message] = !0, ve(ze), b("Failed %s type: %s", he, Ee.message), ve(null));
          }
      }
    }
    var ie = Array.isArray;
    function ee(L) {
      return ie(L);
    }
    function te(L) {
      {
        var le = typeof Symbol == "function" && Symbol.toStringTag, he = le && L[Symbol.toStringTag] || L.constructor.name || "Object";
        return he;
      }
    }
    function xe(L) {
      try {
        return Me(L), !1;
      } catch {
        return !0;
      }
    }
    function Me(L) {
      return "" + L;
    }
    function Te(L) {
      if (xe(L))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", te(L)), Me(L);
    }
    var Ve = y.ReactCurrentOwner, Ae = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ne, $e, je;
    je = {};
    function lt(L) {
      if (Ce.call(L, "ref")) {
        var le = Object.getOwnPropertyDescriptor(L, "ref").get;
        if (le && le.isReactWarning)
          return !1;
      }
      return L.ref !== void 0;
    }
    function tt(L) {
      if (Ce.call(L, "key")) {
        var le = Object.getOwnPropertyDescriptor(L, "key").get;
        if (le && le.isReactWarning)
          return !1;
      }
      return L.key !== void 0;
    }
    function ot(L, le) {
      if (typeof L.ref == "string" && Ve.current && le && Ve.current.stateNode !== le) {
        var he = F(Ve.current.type);
        je[he] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(Ve.current.type), L.ref), je[he] = !0);
      }
    }
    function ft(L, le) {
      {
        var he = function() {
          Ne || (Ne = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", le));
        };
        he.isReactWarning = !0, Object.defineProperty(L, "key", {
          get: he,
          configurable: !0
        });
      }
    }
    function nt(L, le) {
      {
        var he = function() {
          $e || ($e = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", le));
        };
        he.isReactWarning = !0, Object.defineProperty(L, "ref", {
          get: he,
          configurable: !0
        });
      }
    }
    var Et = function(L, le, he, Pe, ze, ge, ye) {
      var Ee = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: L,
        key: le,
        ref: he,
        props: ye,
        // Record the component responsible for creating this element.
        _owner: ge
      };
      return Ee._store = {}, Object.defineProperty(Ee._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ee, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Pe
      }), Object.defineProperty(Ee, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ze
      }), Object.freeze && (Object.freeze(Ee.props), Object.freeze(Ee)), Ee;
    };
    function at(L, le, he, Pe, ze) {
      {
        var ge, ye = {}, Ee = null, Ye = null;
        he !== void 0 && (Te(he), Ee = "" + he), tt(le) && (Te(le.key), Ee = "" + le.key), lt(le) && (Ye = le.ref, ot(le, ze));
        for (ge in le)
          Ce.call(le, ge) && !Ae.hasOwnProperty(ge) && (ye[ge] = le[ge]);
        if (L && L.defaultProps) {
          var Re = L.defaultProps;
          for (ge in Re)
            ye[ge] === void 0 && (ye[ge] = Re[ge]);
        }
        if (Ee || Ye) {
          var Ie = typeof L == "function" ? L.displayName || L.name || "Unknown" : L;
          Ee && ft(ye, Ie), Ye && nt(ye, Ie);
        }
        return Et(L, Ee, Ye, ze, Pe, Ve.current, ye);
      }
    }
    var Ft = y.ReactCurrentOwner, Mt = y.ReactDebugCurrentFrame;
    function rt(L) {
      if (L) {
        var le = L._owner, he = ce(L.type, L._source, le ? le.type : null);
        Mt.setExtraStackFrame(he);
      } else
        Mt.setExtraStackFrame(null);
    }
    var Ot;
    Ot = !1;
    function vt(L) {
      return typeof L == "object" && L !== null && L.$$typeof === t;
    }
    function Ze() {
      {
        if (Ft.current) {
          var L = F(Ft.current.type);
          if (L)
            return `

Check the render method of \`` + L + "`.";
        }
        return "";
      }
    }
    function Ke(L) {
      {
        if (L !== void 0) {
          var le = L.fileName.replace(/^.*[\\\/]/, ""), he = L.lineNumber;
          return `

Check your code at ` + le + ":" + he + ".";
        }
        return "";
      }
    }
    var Oe = {};
    function se(L) {
      {
        var le = Ze();
        if (!le) {
          var he = typeof L == "string" ? L : L.displayName || L.name;
          he && (le = `

Check the top-level render call using <` + he + ">.");
        }
        return le;
      }
    }
    function ue(L, le) {
      {
        if (!L._store || L._store.validated || L.key != null)
          return;
        L._store.validated = !0;
        var he = se(le);
        if (Oe[he])
          return;
        Oe[he] = !0;
        var Pe = "";
        L && L._owner && L._owner !== Ft.current && (Pe = " It was passed a child from " + F(L._owner.type) + "."), rt(L), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', he, Pe), rt(null);
      }
    }
    function me(L, le) {
      {
        if (typeof L != "object")
          return;
        if (ee(L))
          for (var he = 0; he < L.length; he++) {
            var Pe = L[he];
            vt(Pe) && ue(Pe, le);
          }
        else if (vt(L))
          L._store && (L._store.validated = !0);
        else if (L) {
          var ze = m(L);
          if (typeof ze == "function" && ze !== L.entries)
            for (var ge = ze.call(L), ye; !(ye = ge.next()).done; )
              vt(ye.value) && ue(ye.value, le);
        }
      }
    }
    function Se(L) {
      {
        var le = L.type;
        if (le == null || typeof le == "string")
          return;
        var he;
        if (typeof le == "function")
          he = le.propTypes;
        else if (typeof le == "object" && (le.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        le.$$typeof === f))
          he = le.propTypes;
        else
          return;
        if (he) {
          var Pe = F(le);
          ae(he, L.props, "prop", Pe, L);
        } else if (le.PropTypes !== void 0 && !Ot) {
          Ot = !0;
          var ze = F(le);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ze || "Unknown");
        }
        typeof le.getDefaultProps == "function" && !le.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _e(L) {
      {
        for (var le = Object.keys(L.props), he = 0; he < le.length; he++) {
          var Pe = le[he];
          if (Pe !== "children" && Pe !== "key") {
            rt(L), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Pe), rt(null);
            break;
          }
        }
        L.ref !== null && (rt(L), b("Invalid attribute `ref` supplied to `React.Fragment`."), rt(null));
      }
    }
    function Je(L, le, he, Pe, ze, ge) {
      {
        var ye = _(L);
        if (!ye) {
          var Ee = "";
          (L === void 0 || typeof L == "object" && L !== null && Object.keys(L).length === 0) && (Ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ye = Ke(ze);
          Ye ? Ee += Ye : Ee += Ze();
          var Re;
          L === null ? Re = "null" : ee(L) ? Re = "array" : L !== void 0 && L.$$typeof === t ? (Re = "<" + (F(L.type) || "Unknown") + " />", Ee = " Did you accidentally export a JSX literal instead of a component?") : Re = typeof L, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Re, Ee);
        }
        var Ie = at(L, le, he, ze, ge);
        if (Ie == null)
          return Ie;
        if (ye) {
          var Be = le.children;
          if (Be !== void 0)
            if (Pe)
              if (ee(Be)) {
                for (var Pt = 0; Pt < Be.length; Pt++)
                  me(Be[Pt], L);
                Object.freeze && Object.freeze(Be);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              me(Be, L);
        }
        return L === r ? _e(Ie) : Se(Ie), Ie;
      }
    }
    function Ct(L, le, he) {
      return Je(L, le, he, !0);
    }
    function Rt(L, le, he) {
      return Je(L, le, he, !1);
    }
    var At = Rt, Qe = Ct;
    ma.Fragment = r, ma.jsx = At, ma.jsxs = Qe;
  }()), ma;
}
var ha = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pc;
function fy() {
  if (pc)
    return ha;
  pc = 1;
  var e = be, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, l, u) {
    var d, f = {}, v = null, p = null;
    u !== void 0 && (v = "" + u), l.key !== void 0 && (v = "" + l.key), l.ref !== void 0 && (p = l.ref);
    for (d in l)
      r.call(l, d) && !i.hasOwnProperty(d) && (f[d] = l[d]);
    if (s && s.defaultProps)
      for (d in l = s.defaultProps, l)
        f[d] === void 0 && (f[d] = l[d]);
    return { $$typeof: t, type: s, key: v, ref: p, props: f, _owner: a.current };
  }
  return ha.Fragment = n, ha.jsx = o, ha.jsxs = o, ha;
}
process.env.NODE_ENV === "production" ? Gs.exports = fy() : Gs.exports = dy();
var Qt = Gs.exports;
function K() {
  return K = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, K.apply(this, arguments);
}
function Ev(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var vy = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, py = /* @__PURE__ */ Ev(
  function(e) {
    return vy.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function my(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function hy(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var gy = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(a) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(a, i), r.tags.push(a);
    }, this.isSpeedy = n.speedy === void 0 ? process.env.NODE_ENV === "production" : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(hy(this));
    var a = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = r.charCodeAt(0) === 64 && r.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + r + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var o = my(a);
      try {
        o.insertRule(r, o.cssRules.length);
      } catch (s) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(r) && console.error('There was a problem inserting the following rule: "' + r + '"', s);
      }
    } else
      a.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      return r.parentNode && r.parentNode.removeChild(r);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), an = "-ms-", Hi = "-moz-", ht = "-webkit-", au = "comm", iu = "rule", ou = "decl", yy = "@import", wv = "@keyframes", by = "@layer", Cy = Math.abs, go = String.fromCharCode, xy = Object.assign;
function Sy(e, t) {
  return nn(e, 0) ^ 45 ? (((t << 2 ^ nn(e, 0)) << 2 ^ nn(e, 1)) << 2 ^ nn(e, 2)) << 2 ^ nn(e, 3) : 0;
}
function Nv(e) {
  return e.trim();
}
function Ey(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function gt(e, t, n) {
  return e.replace(t, n);
}
function qs(e, t) {
  return e.indexOf(t);
}
function nn(e, t) {
  return e.charCodeAt(t) | 0;
}
function Da(e, t, n) {
  return e.slice(t, n);
}
function Dn(e) {
  return e.length;
}
function su(e) {
  return e.length;
}
function fi(e, t) {
  return t.push(e), e;
}
function wy(e, t) {
  return e.map(t).join("");
}
var yo = 1, Jr = 1, Ov = 0, cn = 0, Bt = 0, ia = "";
function bo(e, t, n, r, a, i, o) {
  return { value: e, root: t, parent: n, type: r, props: a, children: i, line: yo, column: Jr, length: o, return: "" };
}
function ga(e, t) {
  return xy(bo("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Ny() {
  return Bt;
}
function Oy() {
  return Bt = cn > 0 ? nn(ia, --cn) : 0, Jr--, Bt === 10 && (Jr = 1, yo--), Bt;
}
function gn() {
  return Bt = cn < Ov ? nn(ia, cn++) : 0, Jr++, Bt === 10 && (Jr = 1, yo++), Bt;
}
function Kn() {
  return nn(ia, cn);
}
function Ii() {
  return cn;
}
function Ya(e, t) {
  return Da(ia, e, t);
}
function Aa(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Pv(e) {
  return yo = Jr = 1, Ov = Dn(ia = e), cn = 0, [];
}
function Rv(e) {
  return ia = "", e;
}
function Fi(e) {
  return Nv(Ya(cn - 1, Ys(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Py(e) {
  for (; (Bt = Kn()) && Bt < 33; )
    gn();
  return Aa(e) > 2 || Aa(Bt) > 3 ? "" : " ";
}
function Ry(e, t) {
  for (; --t && gn() && !(Bt < 48 || Bt > 102 || Bt > 57 && Bt < 65 || Bt > 70 && Bt < 97); )
    ;
  return Ya(e, Ii() + (t < 6 && Kn() == 32 && gn() == 32));
}
function Ys(e) {
  for (; gn(); )
    switch (Bt) {
      case e:
        return cn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ys(Bt);
        break;
      case 40:
        e === 41 && Ys(e);
        break;
      case 92:
        gn();
        break;
    }
  return cn;
}
function ky(e, t) {
  for (; gn() && e + Bt !== 57; )
    if (e + Bt === 84 && Kn() === 47)
      break;
  return "/*" + Ya(t, cn - 1) + "*" + go(e === 47 ? e : gn());
}
function Ty(e) {
  for (; !Aa(Kn()); )
    gn();
  return Ya(e, cn);
}
function _y(e) {
  return Rv(Mi("", null, null, null, [""], e = Pv(e), 0, [0], e));
}
function Mi(e, t, n, r, a, i, o, s, l) {
  for (var u = 0, d = 0, f = o, v = 0, p = 0, h = 0, g = 1, m = 1, y = 1, b = 0, x = "", C = a, E = i, S = r, w = x; m; )
    switch (h = b, b = gn()) {
      case 40:
        if (h != 108 && nn(w, f - 1) == 58) {
          qs(w += gt(Fi(b), "&", "&\f"), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        w += Fi(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += Py(h);
        break;
      case 92:
        w += Ry(Ii() - 1, 7);
        continue;
      case 47:
        switch (Kn()) {
          case 42:
          case 47:
            fi(Iy(ky(gn(), Ii()), t, n), l);
            break;
          default:
            w += "/";
        }
        break;
      case 123 * g:
        s[u++] = Dn(w) * y;
      case 125 * g:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            m = 0;
          case 59 + d:
            y == -1 && (w = gt(w, /\f/g, "")), p > 0 && Dn(w) - f && fi(p > 32 ? hc(w + ";", r, n, f - 1) : hc(gt(w, " ", "") + ";", r, n, f - 2), l);
            break;
          case 59:
            w += ";";
          default:
            if (fi(S = mc(w, t, n, u, d, a, s, x, C = [], E = [], f), i), b === 123)
              if (d === 0)
                Mi(w, t, S, S, C, i, f, s, E);
              else
                switch (v === 99 && nn(w, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Mi(e, S, S, r && fi(mc(e, S, S, 0, 0, a, s, x, a, C = [], f), E), a, E, f, s, r ? C : E);
                    break;
                  default:
                    Mi(w, S, S, S, [""], E, 0, s, E);
                }
        }
        u = d = p = 0, g = y = 1, x = w = "", f = o;
        break;
      case 58:
        f = 1 + Dn(w), p = h;
      default:
        if (g < 1) {
          if (b == 123)
            --g;
          else if (b == 125 && g++ == 0 && Oy() == 125)
            continue;
        }
        switch (w += go(b), b * g) {
          case 38:
            y = d > 0 ? 1 : (w += "\f", -1);
            break;
          case 44:
            s[u++] = (Dn(w) - 1) * y, y = 1;
            break;
          case 64:
            Kn() === 45 && (w += Fi(gn())), v = Kn(), d = f = Dn(x = w += Ty(Ii())), b++;
            break;
          case 45:
            h === 45 && Dn(w) == 2 && (g = 0);
        }
    }
  return i;
}
function mc(e, t, n, r, a, i, o, s, l, u, d) {
  for (var f = a - 1, v = a === 0 ? i : [""], p = su(v), h = 0, g = 0, m = 0; h < r; ++h)
    for (var y = 0, b = Da(e, f + 1, f = Cy(g = o[h])), x = e; y < p; ++y)
      (x = Nv(g > 0 ? v[y] + " " + b : gt(b, /&\f/g, v[y]))) && (l[m++] = x);
  return bo(e, t, n, a === 0 ? iu : s, l, u, d);
}
function Iy(e, t, n) {
  return bo(e, t, n, au, go(Ny()), Da(e, 2, -2), 0);
}
function hc(e, t, n, r) {
  return bo(e, t, n, ou, Da(e, 0, r), Da(e, r + 1, -1), r);
}
function Ur(e, t) {
  for (var n = "", r = su(e), a = 0; a < r; a++)
    n += t(e[a], a, e, t) || "";
  return n;
}
function Fy(e, t, n, r) {
  switch (e.type) {
    case by:
      if (e.children.length)
        break;
    case yy:
    case ou:
      return e.return = e.return || e.value;
    case au:
      return "";
    case wv:
      return e.return = e.value + "{" + Ur(e.children, r) + "}";
    case iu:
      e.value = e.props.join(",");
  }
  return Dn(n = Ur(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function My(e) {
  var t = su(e);
  return function(n, r, a, i) {
    for (var o = "", s = 0; s < t; s++)
      o += e[s](n, r, a, i) || "";
    return o;
  };
}
function $y(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Dy = function(t, n, r) {
  for (var a = 0, i = 0; a = i, i = Kn(), a === 38 && i === 12 && (n[r] = 1), !Aa(i); )
    gn();
  return Ya(t, cn);
}, Ay = function(t, n) {
  var r = -1, a = 44;
  do
    switch (Aa(a)) {
      case 0:
        a === 38 && Kn() === 12 && (n[r] = 1), t[r] += Dy(cn - 1, n, r);
        break;
      case 2:
        t[r] += Fi(a);
        break;
      case 4:
        if (a === 44) {
          t[++r] = Kn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += go(a);
    }
  while (a = gn());
  return t;
}, Ly = function(t, n) {
  return Rv(Ay(Pv(t), n));
}, gc = /* @__PURE__ */ new WeakMap(), Ky = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, a = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !gc.get(r)) && !a) {
      gc.set(t, !0);
      for (var i = [], o = Ly(n, i), s = r.props, l = 0, u = 0; l < o.length; l++)
        for (var d = 0; d < s.length; d++, u++)
          t.props[u] = i[l] ? o[l].replace(/&\f/g, s[d]) : s[d] + " " + o[l];
    }
  }
}, Vy = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, zy = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", jy = function(t) {
  return t.type === "comm" && t.children.indexOf(zy) > -1;
}, Hy = function(t) {
  return function(n, r, a) {
    if (!(n.type !== "rule" || t.compat)) {
      var i = n.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var o = !!n.parent, s = o ? n.parent.children : (
          // global rule at the root level
          a
        ), l = s.length - 1; l >= 0; l--) {
          var u = s[l];
          if (u.line < n.line)
            break;
          if (u.column < n.column) {
            if (jy(u))
              return;
            break;
          }
        }
        i.forEach(function(d) {
          console.error('The pseudo class "' + d + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + d.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, kv = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, By = function(t, n) {
  for (var r = t - 1; r >= 0; r--)
    if (!kv(n[r]))
      return !0;
  return !1;
}, yc = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, Uy = function(t, n, r) {
  kv(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), yc(t)) : By(n, r) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), yc(t)));
};
function Tv(e, t) {
  switch (Sy(e, t)) {
    case 5103:
      return ht + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ht + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ht + e + Hi + e + an + e + e;
    case 6828:
    case 4268:
      return ht + e + an + e + e;
    case 6165:
      return ht + e + an + "flex-" + e + e;
    case 5187:
      return ht + e + gt(e, /(\w+).+(:[^]+)/, ht + "box-$1$2" + an + "flex-$1$2") + e;
    case 5443:
      return ht + e + an + "flex-item-" + gt(e, /flex-|-self/, "") + e;
    case 4675:
      return ht + e + an + "flex-line-pack" + gt(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ht + e + an + gt(e, "shrink", "negative") + e;
    case 5292:
      return ht + e + an + gt(e, "basis", "preferred-size") + e;
    case 6060:
      return ht + "box-" + gt(e, "-grow", "") + ht + e + an + gt(e, "grow", "positive") + e;
    case 4554:
      return ht + gt(e, /([^-])(transform)/g, "$1" + ht + "$2") + e;
    case 6187:
      return gt(gt(gt(e, /(zoom-|grab)/, ht + "$1"), /(image-set)/, ht + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return gt(e, /(image-set\([^]*)/, ht + "$1$`$1");
    case 4968:
      return gt(gt(e, /(.+:)(flex-)?(.*)/, ht + "box-pack:$3" + an + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ht + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return gt(e, /(.+)-inline(.+)/, ht + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Dn(e) - 1 - t > 6)
        switch (nn(e, t + 1)) {
          case 109:
            if (nn(e, t + 4) !== 45)
              break;
          case 102:
            return gt(e, /(.+:)(.+)-([^]+)/, "$1" + ht + "$2-$3$1" + Hi + (nn(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~qs(e, "stretch") ? Tv(gt(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (nn(e, t + 1) !== 115)
        break;
    case 6444:
      switch (nn(e, Dn(e) - 3 - (~qs(e, "!important") && 10))) {
        case 107:
          return gt(e, ":", ":" + ht) + e;
        case 101:
          return gt(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ht + (nn(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ht + "$2$3$1" + an + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (nn(e, t + 11)) {
        case 114:
          return ht + e + an + gt(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ht + e + an + gt(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ht + e + an + gt(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ht + e + an + e + e;
  }
  return e;
}
var Wy = function(t, n, r, a) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case ou:
        t.return = Tv(t.value, t.length);
        break;
      case wv:
        return Ur([ga(t, {
          value: gt(t.value, "@", "@" + ht)
        })], a);
      case iu:
        if (t.length)
          return wy(t.props, function(i) {
            switch (Ey(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Ur([ga(t, {
                  props: [gt(i, /:(read-\w+)/, ":" + Hi + "$1")]
                })], a);
              case "::placeholder":
                return Ur([ga(t, {
                  props: [gt(i, /:(plac\w+)/, ":" + ht + "input-$1")]
                }), ga(t, {
                  props: [gt(i, /:(plac\w+)/, ":" + Hi + "$1")]
                }), ga(t, {
                  props: [gt(i, /:(plac\w+)/, an + "input-$1")]
                })], a);
            }
            return "";
          });
    }
}, Gy = [Wy], qy = function(t) {
  var n = t.key;
  if (process.env.NODE_ENV !== "production" && !n)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(g) {
      var m = g.getAttribute("data-emotion");
      m.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var a = t.stylisPlugins || Gy;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(n))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + n + '" was passed');
  var i = {}, o, s = [];
  o = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(g) {
      for (var m = g.getAttribute("data-emotion").split(" "), y = 1; y < m.length; y++)
        i[m[y]] = !0;
      s.push(g);
    }
  );
  var l, u = [Ky, Vy];
  process.env.NODE_ENV !== "production" && u.push(Hy({
    get compat() {
      return h.compat;
    }
  }), Uy);
  {
    var d, f = [Fy, process.env.NODE_ENV !== "production" ? function(g) {
      g.root || (g.return ? d.insert(g.return) : g.value && g.type !== au && d.insert(g.value + "{}"));
    } : $y(function(g) {
      d.insert(g);
    })], v = My(u.concat(a, f)), p = function(m) {
      return Ur(_y(m), v);
    };
    l = function(m, y, b, x) {
      d = b, process.env.NODE_ENV !== "production" && y.map !== void 0 && (d = {
        insert: function(E) {
          b.insert(E + y.map);
        }
      }), p(m ? m + "{" + y.styles + "}" : y.styles), x && (h.inserted[y.name] = !0);
    };
  }
  var h = {
    key: n,
    sheet: new gy({
      key: n,
      container: o,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return h.sheet.hydrate(s), h;
}, Yy = !0;
function _v(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(a) {
    e[a] !== void 0 ? t.push(e[a] + ";") : r += a + " ";
  }), r;
}
var lu = function(t, n, r) {
  var a = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Yy === !1) && t.registered[a] === void 0 && (t.registered[a] = n.styles);
}, Iv = function(t, n, r) {
  lu(t, n, r);
  var a = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + a : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Xy(e) {
  for (var t = 0, n, r = 0, a = e.length; a >= 4; ++r, a -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Jy = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, bc = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Qy = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Zy = /[A-Z]|^ms/g, Fv = /_EMO_([^_]+?)_([^]*?)_EMO_/g, uu = function(t) {
  return t.charCodeAt(1) === 45;
}, Cc = function(t) {
  return t != null && typeof t != "boolean";
}, os = /* @__PURE__ */ Ev(function(e) {
  return uu(e) ? e : e.replace(Zy, "-$&").toLowerCase();
}), Bi = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Fv, function(r, a, i) {
          return Rn = {
            name: a,
            styles: i,
            next: Rn
          }, a;
        });
  }
  return Jy[t] !== 1 && !uu(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
if (process.env.NODE_ENV !== "production") {
  var e0 = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, t0 = ["normal", "none", "initial", "inherit", "unset"], n0 = Bi, r0 = /^-ms-/, a0 = /-(.)/g, xc = {};
  Bi = function(t, n) {
    if (t === "content" && (typeof n != "string" || t0.indexOf(n) === -1 && !e0.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + n + "\"'`");
    var r = n0(t, n);
    return r !== "" && !uu(t) && t.indexOf("-") !== -1 && xc[t] === void 0 && (xc[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(r0, "ms-").replace(a0, function(a, i) {
      return i.toUpperCase();
    }) + "?")), r;
  };
}
var Mv = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function La(e, t, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && n.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Mv);
    return n;
  }
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return Rn = {
          name: n.name,
          styles: n.styles,
          next: Rn
        }, n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            Rn = {
              name: r.name,
              styles: r.styles,
              next: Rn
            }, r = r.next;
        var a = n.styles + ";";
        return process.env.NODE_ENV !== "production" && n.map !== void 0 && (a += n.map), a;
      }
      return i0(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Rn, o = n(e);
        return Rn = i, La(e, t, o);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var s = [], l = n.replace(Fv, function(d, f, v) {
          var p = "animation" + s.length;
          return s.push("const " + p + " = keyframes`" + v.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + p + "}";
        });
        s.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(s, ["`" + l + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + l + "`"));
      }
      break;
  }
  if (t == null)
    return n;
  var u = t[n];
  return u !== void 0 ? u : n;
}
function i0(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var a = 0; a < n.length; a++)
      r += La(e, t, n[a]) + ";";
  else
    for (var i in n) {
      var o = n[i];
      if (typeof o != "object")
        t != null && t[o] !== void 0 ? r += i + "{" + t[o] + "}" : Cc(o) && (r += os(i) + ":" + Bi(i, o) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Mv);
        if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0))
          for (var s = 0; s < o.length; s++)
            Cc(o[s]) && (r += os(i) + ":" + Bi(i, o[s]) + ";");
        else {
          var l = La(e, t, o);
          switch (i) {
            case "animation":
            case "animationName": {
              r += os(i) + ":" + l + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(Qy), r += i + "{" + l + "}";
          }
        }
      }
    }
  return r;
}
var Sc = /label:\s*([^\s;\n{]+)\s*(;|$)/g, $v;
process.env.NODE_ENV !== "production" && ($v = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var Rn, Xs = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var a = !0, i = "";
  Rn = void 0;
  var o = t[0];
  o == null || o.raw === void 0 ? (a = !1, i += La(r, n, o)) : (process.env.NODE_ENV !== "production" && o[0] === void 0 && console.error(bc), i += o[0]);
  for (var s = 1; s < t.length; s++)
    i += La(r, n, t[s]), a && (process.env.NODE_ENV !== "production" && o[s] === void 0 && console.error(bc), i += o[s]);
  var l;
  process.env.NODE_ENV !== "production" && (i = i.replace($v, function(v) {
    return l = v, "";
  })), Sc.lastIndex = 0;
  for (var u = "", d; (d = Sc.exec(i)) !== null; )
    u += "-" + // $FlowFixMe we know it's not null
    d[1];
  var f = Xy(i) + u;
  return process.env.NODE_ENV !== "production" ? {
    name: f,
    styles: i,
    map: l,
    next: Rn,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: f,
    styles: i,
    next: Rn
  };
}, o0 = function(t) {
  return t();
}, s0 = c.useInsertionEffect ? c.useInsertionEffect : !1, Dv = s0 || o0, l0 = {}.hasOwnProperty, cu = /* @__PURE__ */ c.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ qy({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (cu.displayName = "EmotionCacheContext");
cu.Provider;
var Av = function(t) {
  return /* @__PURE__ */ aa(function(n, r) {
    var a = en(cu);
    return t(n, a, r);
  });
}, du = /* @__PURE__ */ c.createContext({});
process.env.NODE_ENV !== "production" && (du.displayName = "EmotionThemeContext");
var Ec = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", wc = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", u0 = function(t) {
  var n = t.cache, r = t.serialized, a = t.isStringTag;
  return lu(n, r, a), Dv(function() {
    return Iv(n, r, a);
  }), null;
}, c0 = /* @__PURE__ */ Av(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var a = e[Ec], i = [r], o = "";
  typeof e.className == "string" ? o = _v(t.registered, i, e.className) : e.className != null && (o = e.className + " ");
  var s = Xs(i, void 0, c.useContext(du));
  if (process.env.NODE_ENV !== "production" && s.name.indexOf("-") === -1) {
    var l = e[wc];
    l && (s = Xs([s, "label:" + l + ";"]));
  }
  o += t.key + "-" + s.name;
  var u = {};
  for (var d in e)
    l0.call(e, d) && d !== "css" && d !== Ec && (process.env.NODE_ENV === "production" || d !== wc) && (u[d] = e[d]);
  return u.ref = n, u.className = o, /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(u0, {
    cache: t,
    serialized: s,
    isStringTag: typeof a == "string"
  }), /* @__PURE__ */ c.createElement(a, u));
});
process.env.NODE_ENV !== "production" && (c0.displayName = "EmotionCssPropInternal");
var d0 = py, f0 = function(t) {
  return t !== "theme";
}, Nc = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? d0 : f0;
}, Oc = function(t, n, r) {
  var a;
  if (n) {
    var i = n.shouldForwardProp;
    a = t.__emotion_forwardProp && i ? function(o) {
      return t.__emotion_forwardProp(o) && i(o);
    } : i;
  }
  return typeof a != "function" && r && (a = t.__emotion_forwardProp), a;
}, Pc = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, v0 = function(t) {
  var n = t.cache, r = t.serialized, a = t.isStringTag;
  return lu(n, r, a), Dv(function() {
    return Iv(n, r, a);
  }), null;
}, p0 = function e(t, n) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var r = t.__emotion_real === t, a = r && t.__emotion_base || t, i, o;
  n !== void 0 && (i = n.label, o = n.target);
  var s = Oc(t, n, r), l = s || Nc(a), u = !l("as");
  return function() {
    var d = arguments, f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && f.push("label:" + i + ";"), d[0] == null || d[0].raw === void 0)
      f.push.apply(f, d);
    else {
      process.env.NODE_ENV !== "production" && d[0][0] === void 0 && console.error(Pc), f.push(d[0][0]);
      for (var v = d.length, p = 1; p < v; p++)
        process.env.NODE_ENV !== "production" && d[0][p] === void 0 && console.error(Pc), f.push(d[p], d[0][p]);
    }
    var h = Av(function(g, m, y) {
      var b = u && g.as || a, x = "", C = [], E = g;
      if (g.theme == null) {
        E = {};
        for (var S in g)
          E[S] = g[S];
        E.theme = c.useContext(du);
      }
      typeof g.className == "string" ? x = _v(m.registered, C, g.className) : g.className != null && (x = g.className + " ");
      var w = Xs(f.concat(C), m.registered, E);
      x += m.key + "-" + w.name, o !== void 0 && (x += " " + o);
      var N = u && s === void 0 ? Nc(b) : l, O = {};
      for (var _ in g)
        u && _ === "as" || // $FlowFixMe
        N(_) && (O[_] = g[_]);
      return O.className = x, O.ref = y, /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(v0, {
        cache: m,
        serialized: w,
        isStringTag: typeof b == "string"
      }), /* @__PURE__ */ c.createElement(b, O));
    });
    return h.displayName = i !== void 0 ? i : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", h.defaultProps = t.defaultProps, h.__emotion_real = h, h.__emotion_base = a, h.__emotion_styles = f, h.__emotion_forwardProp = s, Object.defineProperty(h, "toString", {
      value: function() {
        return o === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + o;
      }
    }), h.withComponent = function(g, m) {
      return e(g, K({}, n, m, {
        shouldForwardProp: Oc(h, m, !0)
      })).apply(void 0, f);
    }, h;
  };
}, m0 = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Ka = p0.bind();
m0.forEach(function(e) {
  Ka[e] = Ka(e);
});
const h0 = {
  type: "logger",
  log(e) {
    this.output("log", e);
  },
  warn(e) {
    this.output("warn", e);
  },
  error(e) {
    this.output("error", e);
  },
  output(e, t) {
    console && console[e] && console[e].apply(console, t);
  }
};
class Ui {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = n.prefix || "i18next:", this.logger = t || h0, this.options = n, this.debug = n.debug;
  }
  log() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "log", "", !0);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "", !0);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "error", "");
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, n, r, a) {
    return a && !this.debug ? null : (typeof t[0] == "string" && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new Ui(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options
    });
  }
  clone(t) {
    return t = t || this.options, t.prefix = t.prefix || this.prefix, new Ui(this.logger, t);
  }
}
var An = new Ui();
class Co {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return t.split(" ").forEach((r) => {
      this.observers[r] = this.observers[r] || [], this.observers[r].push(n);
    }), this;
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t] = this.observers[t].filter((r) => r !== n);
    }
  }
  emit(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      r[a - 1] = arguments[a];
    this.observers[t] && [].concat(this.observers[t]).forEach((o) => {
      o(...r);
    }), this.observers["*"] && [].concat(this.observers["*"]).forEach((o) => {
      o.apply(o, [t, ...r]);
    });
  }
}
function ya() {
  let e, t;
  const n = new Promise((r, a) => {
    e = r, t = a;
  });
  return n.resolve = e, n.reject = t, n;
}
function Rc(e) {
  return e == null ? "" : "" + e;
}
function g0(e, t, n) {
  e.forEach((r) => {
    t[r] && (n[r] = t[r]);
  });
}
function fu(e, t, n) {
  function r(o) {
    return o && o.indexOf("###") > -1 ? o.replace(/###/g, ".") : o;
  }
  function a() {
    return !e || typeof e == "string";
  }
  const i = typeof t != "string" ? [].concat(t) : t.split(".");
  for (; i.length > 1; ) {
    if (a())
      return {};
    const o = r(i.shift());
    !e[o] && n && (e[o] = new n()), Object.prototype.hasOwnProperty.call(e, o) ? e = e[o] : e = {};
  }
  return a() ? {} : {
    obj: e,
    k: r(i.shift())
  };
}
function kc(e, t, n) {
  const {
    obj: r,
    k: a
  } = fu(e, t, Object);
  r[a] = n;
}
function y0(e, t, n, r) {
  const {
    obj: a,
    k: i
  } = fu(e, t, Object);
  a[i] = a[i] || [], r && (a[i] = a[i].concat(n)), r || a[i].push(n);
}
function Wi(e, t) {
  const {
    obj: n,
    k: r
  } = fu(e, t);
  if (n)
    return n[r];
}
function b0(e, t, n) {
  const r = Wi(e, n);
  return r !== void 0 ? r : Wi(t, n);
}
function Lv(e, t, n) {
  for (const r in t)
    r !== "__proto__" && r !== "constructor" && (r in e ? typeof e[r] == "string" || e[r] instanceof String || typeof t[r] == "string" || t[r] instanceof String ? n && (e[r] = t[r]) : Lv(e[r], t[r], n) : e[r] = t[r]);
  return e;
}
function Ir(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var C0 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function x0(e) {
  return typeof e == "string" ? e.replace(/[&<>"'\/]/g, (t) => C0[t]) : e;
}
const S0 = [" ", ",", "?", "!", ";"];
function E0(e, t, n) {
  t = t || "", n = n || "";
  const r = S0.filter((o) => t.indexOf(o) < 0 && n.indexOf(o) < 0);
  if (r.length === 0)
    return !0;
  const a = new RegExp(`(${r.map((o) => o === "?" ? "\\?" : o).join("|")})`);
  let i = !a.test(e);
  if (!i) {
    const o = e.indexOf(n);
    o > 0 && !a.test(e.substring(0, o)) && (i = !0);
  }
  return i;
}
function Gi(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!e)
    return;
  if (e[t])
    return e[t];
  const r = t.split(n);
  let a = e;
  for (let i = 0; i < r.length; ++i) {
    if (!a || typeof a[r[i]] == "string" && i + 1 < r.length)
      return;
    if (a[r[i]] === void 0) {
      let o = 2, s = r.slice(i, i + o).join(n), l = a[s];
      for (; l === void 0 && r.length > i + o; )
        o++, s = r.slice(i, i + o).join(n), l = a[s];
      if (l === void 0)
        return;
      if (l === null)
        return null;
      if (t.endsWith(s)) {
        if (typeof l == "string")
          return l;
        if (s && typeof l[s] == "string")
          return l[s];
      }
      const u = r.slice(i + o).join(n);
      return u ? Gi(l, u, n) : void 0;
    }
    a = a[r[i]];
  }
  return a;
}
function qi(e) {
  return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
}
class Tc extends Co {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = t || {}, this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator, o = a.ignoreJSONStructure !== void 0 ? a.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let s = [t, n];
    r && typeof r != "string" && (s = s.concat(r)), r && typeof r == "string" && (s = s.concat(i ? r.split(i) : r)), t.indexOf(".") > -1 && (s = t.split("."));
    const l = Wi(this.data, s);
    return l || !o || typeof r != "string" ? l : Gi(this.data && this.data[t] && this.data[t][n], r, i);
  }
  addResource(t, n, r, a) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let s = [t, n];
    r && (s = s.concat(o ? r.split(o) : r)), t.indexOf(".") > -1 && (s = t.split("."), a = n, n = s[1]), this.addNamespaces(n), kc(this.data, s, a), i.silent || this.emit("added", t, n, r, a);
  }
  addResources(t, n, r) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const i in r)
      (typeof r[i] == "string" || Object.prototype.toString.apply(r[i]) === "[object Array]") && this.addResource(t, n, i, r[i], {
        silent: !0
      });
    a.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, a, i) {
    let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1
    }, s = [t, n];
    t.indexOf(".") > -1 && (s = t.split("."), a = r, r = n, n = s[1]), this.addNamespaces(n);
    let l = Wi(this.data, s) || {};
    a ? Lv(l, r, i) : l = {
      ...l,
      ...r
    }, kc(this.data, s, l), o.silent || this.emit("added", t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n], this.removeNamespaces(n), this.emit("removed", t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return n || (n = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(t, n)
    } : this.getResource(t, n);
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!(n && Object.keys(n) || []).find((a) => n[a] && Object.keys(n[a]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Kv = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, a) {
    return e.forEach((i) => {
      this.processors[i] && (t = this.processors[i].process(t, n, r, a));
    }), t;
  }
};
const _c = {};
class Yi extends Co {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), g0(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = An.create("translator");
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (t == null)
      return !1;
    const r = this.resolve(t, n);
    return r && r.res !== void 0;
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const a = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let i = n.ns || this.options.defaultNS || [];
    const o = r && t.indexOf(r) > -1, s = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !E0(t, r, a);
    if (o && !s) {
      const l = t.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: t,
          namespaces: i
        };
      const u = t.split(r);
      (r !== a || r === a && this.options.ns.indexOf(u[0]) > -1) && (i = u.shift()), t = u.join(a);
    }
    return typeof i == "string" && (i = [i]), {
      key: t,
      namespaces: i
    };
  }
  translate(t, n, r) {
    if (typeof n != "object" && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), typeof n == "object" && (n = {
      ...n
    }), n || (n = {}), t == null)
      return "";
    Array.isArray(t) || (t = [String(t)]);
    const a = n.returnDetails !== void 0 ? n.returnDetails : this.options.returnDetails, i = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator, {
      key: o,
      namespaces: s
    } = this.extractFromKey(t[t.length - 1], n), l = s[s.length - 1], u = n.lng || this.language, d = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (u && u.toLowerCase() === "cimode") {
      if (d) {
        const C = n.nsSeparator || this.options.nsSeparator;
        return a ? {
          res: `${l}${C}${o}`,
          usedKey: o,
          exactUsedKey: o,
          usedLng: u,
          usedNS: l,
          usedParams: this.getUsedParamsDetails(n)
        } : `${l}${C}${o}`;
      }
      return a ? {
        res: o,
        usedKey: o,
        exactUsedKey: o,
        usedLng: u,
        usedNS: l,
        usedParams: this.getUsedParamsDetails(n)
      } : o;
    }
    const f = this.resolve(t, n);
    let v = f && f.res;
    const p = f && f.usedKey || o, h = f && f.exactUsedKey || o, g = Object.prototype.toString.apply(v), m = ["[object Number]", "[object Function]", "[object RegExp]"], y = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays, b = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (b && v && (typeof v != "string" && typeof v != "boolean" && typeof v != "number") && m.indexOf(g) < 0 && !(typeof y == "string" && g === "[object Array]")) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const C = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(p, v, {
          ...n,
          ns: s
        }) : `key '${o} (${this.language})' returned an object instead of string.`;
        return a ? (f.res = C, f.usedParams = this.getUsedParamsDetails(n), f) : C;
      }
      if (i) {
        const C = g === "[object Array]", E = C ? [] : {}, S = C ? h : p;
        for (const w in v)
          if (Object.prototype.hasOwnProperty.call(v, w)) {
            const N = `${S}${i}${w}`;
            E[w] = this.translate(N, {
              ...n,
              joinArrays: !1,
              ns: s
            }), E[w] === N && (E[w] = v[w]);
          }
        v = E;
      }
    } else if (b && typeof y == "string" && g === "[object Array]")
      v = v.join(y), v && (v = this.extendTranslation(v, t, n, r));
    else {
      let C = !1, E = !1;
      const S = n.count !== void 0 && typeof n.count != "string", w = Yi.hasDefaultValue(n), N = S ? this.pluralResolver.getSuffix(u, n.count, n) : "", O = n.ordinal && S ? this.pluralResolver.getSuffix(u, n.count, {
        ordinal: !1
      }) : "", _ = n[`defaultValue${N}`] || n[`defaultValue${O}`] || n.defaultValue;
      !this.isValidLookup(v) && w && (C = !0, v = _), this.isValidLookup(v) || (E = !0, v = o);
      const I = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && E ? void 0 : v, F = w && _ !== v && this.options.updateMissing;
      if (E || C || F) {
        if (this.logger.log(F ? "updateKey" : "missingKey", u, l, o, F ? _ : v), i) {
          const R = this.resolve(o, {
            ...n,
            keySeparator: !1
          });
          R && R.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let M = [];
        const V = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && V && V[0])
          for (let R = 0; R < V.length; R++)
            M.push(V[R]);
        else
          this.options.saveMissingTo === "all" ? M = this.languageUtils.toResolveHierarchy(n.lng || this.language) : M.push(n.lng || this.language);
        const T = (R, k, A) => {
          const U = w && A !== v ? A : I;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(R, l, k, U, F, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(R, l, k, U, F, n), this.emit("missingKey", R, l, k, v);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && S ? M.forEach((R) => {
          this.pluralResolver.getSuffixes(R, n).forEach((k) => {
            T([R], o + k, n[`defaultValue${k}`] || _);
          });
        }) : T(M, o, _));
      }
      v = this.extendTranslation(v, t, n, f, r), E && v === o && this.options.appendNamespaceToMissingKey && (v = `${l}:${o}`), (E || C) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? v = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${o}` : o, C ? v : void 0) : v = this.options.parseMissingKeyHandler(v));
    }
    return a ? (f.res = v, f.usedParams = this.getUsedParamsDetails(n), f) : v;
  }
  extendTranslation(t, n, r, a, i) {
    var o = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(t, {
        ...this.options.interpolation.defaultVariables,
        ...r
      }, r.lng || this.language || a.usedLng, a.usedNS, a.usedKey, {
        resolved: a
      });
    else if (!r.skipInterpolation) {
      r.interpolation && this.interpolator.init({
        ...r,
        interpolation: {
          ...this.options.interpolation,
          ...r.interpolation
        }
      });
      const u = typeof t == "string" && (r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let d;
      if (u) {
        const v = t.match(this.interpolator.nestingRegexp);
        d = v && v.length;
      }
      let f = r.replace && typeof r.replace != "string" ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (f = {
        ...this.options.interpolation.defaultVariables,
        ...f
      }), t = this.interpolator.interpolate(t, f, r.lng || this.language, r), u) {
        const v = t.match(this.interpolator.nestingRegexp), p = v && v.length;
        d < p && (r.nest = !1);
      }
      !r.lng && this.options.compatibilityAPI !== "v1" && a && a.res && (r.lng = a.usedLng), r.nest !== !1 && (t = this.interpolator.nest(t, function() {
        for (var v = arguments.length, p = new Array(v), h = 0; h < v; h++)
          p[h] = arguments[h];
        return i && i[0] === p[0] && !r.context ? (o.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${n[0]}`), null) : o.translate(...p, n);
      }, r)), r.interpolation && this.interpolator.reset();
    }
    const s = r.postProcess || this.options.postProcess, l = typeof s == "string" ? [s] : s;
    return t != null && l && l.length && r.applyPostProcessor !== !1 && (t = Kv.handle(l, t, n, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...a,
        usedParams: this.getUsedParamsDetails(r)
      },
      ...r
    } : r, this)), t;
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, a, i, o, s;
    return typeof t == "string" && (t = [t]), t.forEach((l) => {
      if (this.isValidLookup(r))
        return;
      const u = this.extractFromKey(l, n), d = u.key;
      a = d;
      let f = u.namespaces;
      this.options.fallbackNS && (f = f.concat(this.options.fallbackNS));
      const v = n.count !== void 0 && typeof n.count != "string", p = v && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), h = n.context !== void 0 && (typeof n.context == "string" || typeof n.context == "number") && n.context !== "", g = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
      f.forEach((m) => {
        this.isValidLookup(r) || (s = m, !_c[`${g[0]}-${m}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(s) && (_c[`${g[0]}-${m}`] = !0, this.logger.warn(`key "${a}" for languages "${g.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach((y) => {
          if (this.isValidLookup(r))
            return;
          o = y;
          const b = [d];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(b, d, y, m, n);
          else {
            let C;
            v && (C = this.pluralResolver.getSuffix(y, n.count, n));
            const E = `${this.options.pluralSeparator}zero`, S = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (v && (b.push(d + C), n.ordinal && C.indexOf(S) === 0 && b.push(d + C.replace(S, this.options.pluralSeparator)), p && b.push(d + E)), h) {
              const w = `${d}${this.options.contextSeparator}${n.context}`;
              b.push(w), v && (b.push(w + C), n.ordinal && C.indexOf(S) === 0 && b.push(w + C.replace(S, this.options.pluralSeparator)), p && b.push(w + E));
            }
          }
          let x;
          for (; x = b.pop(); )
            this.isValidLookup(r) || (i = x, r = this.getResource(y, m, x, n));
        }));
      });
    }), {
      res: r,
      usedKey: a,
      exactUsedKey: i,
      usedLng: o,
      usedNS: s
    };
  }
  isValidLookup(t) {
    return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "");
  }
  getResource(t, n, r) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(t, n, r, a) : this.resourceStore.getResource(t, n, r, a);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], r = t.replace && typeof t.replace != "string";
    let a = r ? t.replace : t;
    if (r && typeof t.count < "u" && (a.count = t.count), this.options.interpolation.defaultVariables && (a = {
      ...this.options.interpolation.defaultVariables,
      ...a
    }), !r) {
      a = {
        ...a
      };
      for (const i of n)
        delete a[i];
    }
    return a;
  }
  static hasDefaultValue(t) {
    const n = "defaultValue";
    for (const r in t)
      if (Object.prototype.hasOwnProperty.call(t, r) && n === r.substring(0, n.length) && t[r] !== void 0)
        return !0;
    return !1;
  }
}
function ss(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
class Ic {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = An.create("languageUtils");
  }
  getScriptPartFromCode(t) {
    if (t = qi(t), !t || t.indexOf("-") < 0)
      return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (t = qi(t), !t || t.indexOf("-") < 0)
      return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (typeof t == "string" && t.indexOf("-") > -1) {
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = t.split("-");
      return this.options.lowerCaseLng ? r = r.map((a) => a.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = ss(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(), r[1].length === 2 && (r[1] = r[1].toUpperCase()), r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = ss(r[1].toLowerCase())), n.indexOf(r[2].toLowerCase()) > -1 && (r[2] = ss(r[2].toLowerCase()))), r.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
  }
  isSupportedCode(t) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1;
  }
  getBestMatchFromCodes(t) {
    if (!t)
      return null;
    let n;
    return t.forEach((r) => {
      if (n)
        return;
      const a = this.formatLanguageCode(r);
      (!this.options.supportedLngs || this.isSupportedCode(a)) && (n = a);
    }), !n && this.options.supportedLngs && t.forEach((r) => {
      if (n)
        return;
      const a = this.getLanguagePartFromCode(r);
      if (this.isSupportedCode(a))
        return n = a;
      n = this.options.supportedLngs.find((i) => {
        if (i === a)
          return i;
        if (!(i.indexOf("-") < 0 && a.indexOf("-") < 0) && i.indexOf(a) === 0)
          return i;
      });
    }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n;
  }
  getFallbackCodes(t, n) {
    if (!t)
      return [];
    if (typeof t == "function" && (t = t(n)), typeof t == "string" && (t = [t]), Object.prototype.toString.apply(t) === "[object Array]")
      return t;
    if (!n)
      return t.default || [];
    let r = t[n];
    return r || (r = t[this.getScriptPartFromCode(n)]), r || (r = t[this.formatLanguageCode(n)]), r || (r = t[this.getLanguagePartFromCode(n)]), r || (r = t.default), r || [];
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t), a = [], i = (o) => {
      o && (this.isSupportedCode(o) ? a.push(o) : this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`));
    };
    return typeof t == "string" && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(t))) : typeof t == "string" && i(this.formatLanguageCode(t)), r.forEach((o) => {
      a.indexOf(o) < 0 && i(this.formatLanguageCode(o));
    }), a;
  }
}
let w0 = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}], N0 = {
  1: function(e) {
    return +(e > 1);
  },
  2: function(e) {
    return +(e != 1);
  },
  3: function(e) {
    return 0;
  },
  4: function(e) {
    return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
  },
  5: function(e) {
    return e == 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
  },
  6: function(e) {
    return e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2;
  },
  7: function(e) {
    return e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
  },
  8: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3;
  },
  9: function(e) {
    return +(e >= 2);
  },
  10: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4;
  },
  11: function(e) {
    return e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3;
  },
  12: function(e) {
    return +(e % 10 != 1 || e % 100 == 11);
  },
  13: function(e) {
    return +(e !== 0);
  },
  14: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3;
  },
  15: function(e) {
    return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
  },
  16: function(e) {
    return e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2;
  },
  17: function(e) {
    return e == 1 || e % 10 == 1 && e % 100 != 11 ? 0 : 1;
  },
  18: function(e) {
    return e == 0 ? 0 : e == 1 ? 1 : 2;
  },
  19: function(e) {
    return e == 1 ? 0 : e == 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3;
  },
  20: function(e) {
    return e == 1 ? 0 : e == 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2;
  },
  21: function(e) {
    return e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0;
  },
  22: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3;
  }
};
const O0 = ["v1", "v2", "v3"], P0 = ["v4"], Fc = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function R0() {
  const e = {};
  return w0.forEach((t) => {
    t.lngs.forEach((n) => {
      e[n] = {
        numbers: t.nr,
        plurals: N0[t.fc]
      };
    });
  }), e;
}
class k0 {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = t, this.options = n, this.logger = An.create("pluralResolver"), (!this.options.compatibilityJSON || P0.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = R0();
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(qi(t), {
          type: n.ordinal ? "ordinal" : "cardinal"
        });
      } catch {
        return;
      }
    return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)];
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return this.shouldUseIntlApi() ? r && r.resolvedOptions().pluralCategories.length > 1 : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, r).map((a) => `${n}${a}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((a, i) => Fc[a] - Fc[i]).map((a) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${a}`) : r.numbers.map((a) => this.getSuffix(t, a, n)) : [];
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const a = this.getRule(t, r);
    return a ? this.shouldUseIntlApi() ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${a.select(n)}` : this.getSuffixRetroCompatible(a, n) : (this.logger.warn(`no plural rule found for: ${t}`), "");
  }
  getSuffixRetroCompatible(t, n) {
    const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
    let a = t.numbers[r];
    this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 && (a === 2 ? a = "plural" : a === 1 && (a = ""));
    const i = () => this.options.prepend && a.toString() ? this.options.prepend + a.toString() : a.toString();
    return this.options.compatibilityJSON === "v1" ? a === 1 ? "" : typeof a == "number" ? `_plural_${a.toString()}` : i() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 ? i() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString();
  }
  shouldUseIntlApi() {
    return !O0.includes(this.options.compatibilityJSON);
  }
}
function Mc(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = b0(e, t, n);
  return !i && a && typeof n == "string" && (i = Gi(e, n, r), i === void 0 && (i = Gi(t, n, r))), i;
}
class T0 {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = An.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || ((n) => n), this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = {
      escapeValue: !0
    });
    const n = t.interpolation;
    this.escape = n.escape !== void 0 ? n.escape : x0, this.escapeValue = n.escapeValue !== void 0 ? n.escapeValue : !0, this.useRawValueToEscape = n.useRawValueToEscape !== void 0 ? n.useRawValueToEscape : !1, this.prefix = n.prefix ? Ir(n.prefix) : n.prefixEscaped || "{{", this.suffix = n.suffix ? Ir(n.suffix) : n.suffixEscaped || "}}", this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",", this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || "", this.nestingPrefix = n.nestingPrefix ? Ir(n.nestingPrefix) : n.nestingPrefixEscaped || Ir("$t("), this.nestingSuffix = n.nestingSuffix ? Ir(n.nestingSuffix) : n.nestingSuffixEscaped || Ir(")"), this.nestingOptionsSeparator = n.nestingOptionsSeparator ? n.nestingOptionsSeparator : n.nestingOptionsSeparator || ",", this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3, this.alwaysFormat = n.alwaysFormat !== void 0 ? n.alwaysFormat : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = `${this.prefix}(.+?)${this.suffix}`;
    this.regexp = new RegExp(t, "g");
    const n = `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;
    this.regexpUnescape = new RegExp(n, "g");
    const r = `${this.nestingPrefix}(.+?)${this.nestingSuffix}`;
    this.nestingRegexp = new RegExp(r, "g");
  }
  interpolate(t, n, r, a) {
    let i, o, s;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function u(h) {
      return h.replace(/\$/g, "$$$$");
    }
    const d = (h) => {
      if (h.indexOf(this.formatSeparator) < 0) {
        const b = Mc(n, l, h, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(b, void 0, r, {
          ...a,
          ...n,
          interpolationkey: h
        }) : b;
      }
      const g = h.split(this.formatSeparator), m = g.shift().trim(), y = g.join(this.formatSeparator).trim();
      return this.format(Mc(n, l, m, this.options.keySeparator, this.options.ignoreJSONStructure), y, r, {
        ...a,
        ...n,
        interpolationkey: m
      });
    };
    this.resetRegExp();
    const f = a && a.missingInterpolationHandler || this.options.missingInterpolationHandler, v = a && a.interpolation && a.interpolation.skipOnVariables !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (h) => u(h)
    }, {
      regex: this.regexp,
      safeValue: (h) => this.escapeValue ? u(this.escape(h)) : u(h)
    }].forEach((h) => {
      for (s = 0; i = h.regex.exec(t); ) {
        const g = i[1].trim();
        if (o = d(g), o === void 0)
          if (typeof f == "function") {
            const y = f(t, i, a);
            o = typeof y == "string" ? y : "";
          } else if (a && Object.prototype.hasOwnProperty.call(a, g))
            o = "";
          else if (v) {
            o = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${g} for interpolating ${t}`), o = "";
        else
          typeof o != "string" && !this.useRawValueToEscape && (o = Rc(o));
        const m = h.safeValue(o);
        if (t = t.replace(i[0], m), v ? (h.regex.lastIndex += o.length, h.regex.lastIndex -= i[0].length) : h.regex.lastIndex = 0, s++, s >= this.maxReplaces)
          break;
      }
    }), t;
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a, i, o;
    function s(l, u) {
      const d = this.nestingOptionsSeparator;
      if (l.indexOf(d) < 0)
        return l;
      const f = l.split(new RegExp(`${d}[ ]*{`));
      let v = `{${f[1]}`;
      l = f[0], v = this.interpolate(v, o);
      const p = v.match(/'/g), h = v.match(/"/g);
      (p && p.length % 2 === 0 && !h || h.length % 2 !== 0) && (v = v.replace(/'/g, '"'));
      try {
        o = JSON.parse(v), u && (o = {
          ...u,
          ...o
        });
      } catch (g) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, g), `${l}${d}${v}`;
      }
      return delete o.defaultValue, l;
    }
    for (; a = this.nestingRegexp.exec(t); ) {
      let l = [];
      o = {
        ...r
      }, o = o.replace && typeof o.replace != "string" ? o.replace : o, o.applyPostProcessor = !1, delete o.defaultValue;
      let u = !1;
      if (a[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(a[1])) {
        const d = a[1].split(this.formatSeparator).map((f) => f.trim());
        a[1] = d.shift(), l = d, u = !0;
      }
      if (i = n(s.call(this, a[1].trim(), o), o), i && a[0] === t && typeof i != "string")
        return i;
      typeof i != "string" && (i = Rc(i)), i || (this.logger.warn(`missed to resolve ${a[1]} for nesting ${t}`), i = ""), u && (i = l.reduce((d, f) => this.format(d, f, r.lng, {
        ...r,
        interpolationkey: a[1].trim()
      }), i.trim())), t = t.replace(a[0], i), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
function _0(e) {
  let t = e.toLowerCase().trim();
  const n = {};
  if (e.indexOf("(") > -1) {
    const r = e.split("(");
    t = r[0].toLowerCase().trim();
    const a = r[1].substring(0, r[1].length - 1);
    t === "currency" && a.indexOf(":") < 0 ? n.currency || (n.currency = a.trim()) : t === "relativetime" && a.indexOf(":") < 0 ? n.range || (n.range = a.trim()) : a.split(";").forEach((o) => {
      if (!o)
        return;
      const [s, ...l] = o.split(":"), u = l.join(":").trim().replace(/^'+|'+$/g, "");
      n[s.trim()] || (n[s.trim()] = u), u === "false" && (n[s.trim()] = !1), u === "true" && (n[s.trim()] = !0), isNaN(u) || (n[s.trim()] = parseInt(u, 10));
    });
  }
  return {
    formatName: t,
    formatOptions: n
  };
}
function Fr(e) {
  const t = {};
  return function(r, a, i) {
    const o = a + JSON.stringify(i);
    let s = t[o];
    return s || (s = e(qi(a), i), t[o] = s), s(r);
  };
}
class I0 {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = An.create("formatter"), this.options = t, this.formats = {
      number: Fr((n, r) => {
        const a = new Intl.NumberFormat(n, {
          ...r
        });
        return (i) => a.format(i);
      }),
      currency: Fr((n, r) => {
        const a = new Intl.NumberFormat(n, {
          ...r,
          style: "currency"
        });
        return (i) => a.format(i);
      }),
      datetime: Fr((n, r) => {
        const a = new Intl.DateTimeFormat(n, {
          ...r
        });
        return (i) => a.format(i);
      }),
      relativetime: Fr((n, r) => {
        const a = new Intl.RelativeTimeFormat(n, {
          ...r
        });
        return (i) => a.format(i, r.range || "day");
      }),
      list: Fr((n, r) => {
        const a = new Intl.ListFormat(n, {
          ...r
        });
        return (i) => a.format(i);
      })
    }, this.init(t);
  }
  init(t) {
    const r = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    }).interpolation;
    this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ",";
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = Fr(n);
  }
  format(t, n, r) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return n.split(this.formatSeparator).reduce((s, l) => {
      const {
        formatName: u,
        formatOptions: d
      } = _0(l);
      if (this.formats[u]) {
        let f = s;
        try {
          const v = a && a.formatParams && a.formatParams[a.interpolationkey] || {}, p = v.locale || v.lng || a.locale || a.lng || r;
          f = this.formats[u](s, p, {
            ...d,
            ...a,
            ...v
          });
        } catch (v) {
          this.logger.warn(v);
        }
        return f;
      } else
        this.logger.warn(`there was no format function for ${u}`);
      return s;
    }, t);
  }
}
function F0(e, t) {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}
class M0 extends Co {
  constructor(t, n, r) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = t, this.store = n, this.services = r, this.languageUtils = r.languageUtils, this.options = a, this.logger = An.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = a.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = a.maxRetries >= 0 ? a.maxRetries : 5, this.retryTimeout = a.retryTimeout >= 1 ? a.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(r, a.backend, a);
  }
  queueLoad(t, n, r, a) {
    const i = {}, o = {}, s = {}, l = {};
    return t.forEach((u) => {
      let d = !0;
      n.forEach((f) => {
        const v = `${u}|${f}`;
        !r.reload && this.store.hasResourceBundle(u, f) ? this.state[v] = 2 : this.state[v] < 0 || (this.state[v] === 1 ? o[v] === void 0 && (o[v] = !0) : (this.state[v] = 1, d = !1, o[v] === void 0 && (o[v] = !0), i[v] === void 0 && (i[v] = !0), l[f] === void 0 && (l[f] = !0)));
      }), d || (s[u] = !0);
    }), (Object.keys(i).length || Object.keys(o).length) && this.queue.push({
      pending: o,
      pendingCount: Object.keys(o).length,
      loaded: {},
      errors: [],
      callback: a
    }), {
      toLoad: Object.keys(i),
      pending: Object.keys(o),
      toLoadLanguages: Object.keys(s),
      toLoadNamespaces: Object.keys(l)
    };
  }
  loaded(t, n, r) {
    const a = t.split("|"), i = a[0], o = a[1];
    n && this.emit("failedLoading", i, o, n), r && this.store.addResourceBundle(i, o, r), this.state[t] = n ? -1 : 2;
    const s = {};
    this.queue.forEach((l) => {
      y0(l.loaded, [i], o), F0(l, t), n && l.errors.push(n), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((u) => {
        s[u] || (s[u] = {});
        const d = l.loaded[u];
        d.length && d.forEach((f) => {
          s[u][f] === void 0 && (s[u][f] = !0);
        });
      }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
    }), this.emit("loaded", s), this.queue = this.queue.filter((l) => !l.done);
  }
  read(t, n, r) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, o = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length)
      return o(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: a,
        wait: i,
        callback: o
      });
      return;
    }
    this.readingCalls++;
    const s = (u, d) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const f = this.waitingReads.shift();
        this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback);
      }
      if (u && d && a < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, t, n, r, a + 1, i * 2, o);
        }, i);
        return;
      }
      o(u, d);
    }, l = this.backend[r].bind(this.backend);
    if (l.length === 2) {
      try {
        const u = l(t, n);
        u && typeof u.then == "function" ? u.then((d) => s(null, d)).catch(s) : s(null, u);
      } catch (u) {
        s(u);
      }
      return;
    }
    return l(t, n, s);
  }
  prepareLoading(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), a && a();
    typeof t == "string" && (t = this.languageUtils.toResolveHierarchy(t)), typeof n == "string" && (n = [n]);
    const i = this.queueLoad(t, n, r, a);
    if (!i.toLoad.length)
      return i.pending.length || a(), null;
    i.toLoad.forEach((o) => {
      this.loadOne(o);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, {
      reload: !0
    }, r);
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const r = t.split("|"), a = r[0], i = r[1];
    this.read(a, i, "read", void 0, void 0, (o, s) => {
      o && this.logger.warn(`${n}loading namespace ${i} for language ${a} failed`, o), !o && s && this.logger.log(`${n}loaded namespace ${i} for language ${a}`, s), this.loaded(t, o, s);
    });
  }
  saveMissing(t, n, r, a, i) {
    let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(n)) {
      this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend && this.backend.create) {
        const l = {
          ...o,
          isUpdate: i
        }, u = this.backend.create.bind(this.backend);
        if (u.length < 6)
          try {
            let d;
            u.length === 5 ? d = u(t, n, r, a, l) : d = u(t, n, r, a), d && typeof d.then == "function" ? d.then((f) => s(null, f)).catch(s) : s(null, d);
          } catch (d) {
            s(d);
          }
        else
          u(t, n, r, a, s, l);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, a);
    }
  }
}
function $c() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function(t) {
      let n = {};
      if (typeof t[1] == "object" && (n = t[1]), typeof t[1] == "string" && (n.defaultValue = t[1]), typeof t[2] == "string" && (n.tDescription = t[2]), typeof t[2] == "object" || typeof t[3] == "object") {
        const r = t[3] || t[2];
        Object.keys(r).forEach((a) => {
          n[a] = r[a];
        });
      }
      return n;
    },
    interpolation: {
      escapeValue: !0,
      format: (e, t, n, r) => e,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0
    }
  };
}
function Dc(e) {
  return typeof e.ns == "string" && (e.ns = [e.ns]), typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]), typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e;
}
function vi() {
}
function $0(e) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == "function" && (e[n] = e[n].bind(e));
  });
}
class Va extends Co {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Dc(t), this.services = {}, this.logger = An, this.modules = {
      external: []
    }, $0(this), n && !this.isInitialized && !t.isClone) {
      if (!this.options.initImmediate)
        return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    typeof n == "function" && (r = n, n = {}), !n.defaultNS && n.defaultNS !== !1 && n.ns && (typeof n.ns == "string" ? n.defaultNS = n.ns : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
    const a = $c();
    this.options = {
      ...a,
      ...this.options,
      ...Dc(n)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...a.interpolation,
      ...this.options.interpolation
    }), n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator), n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);
    function i(d) {
      return d ? typeof d == "function" ? new d() : d : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? An.init(i(this.modules.logger), this.options) : An.init(null, this.options);
      let d;
      this.modules.formatter ? d = this.modules.formatter : typeof Intl < "u" && (d = I0);
      const f = new Ic(this.options);
      this.store = new Tc(this.options.resources, this.options);
      const v = this.services;
      v.logger = An, v.resourceStore = this.store, v.languageUtils = f, v.pluralResolver = new k0(f, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), d && (!this.options.interpolation.format || this.options.interpolation.format === a.interpolation.format) && (v.formatter = i(d), v.formatter.init(v, this.options), this.options.interpolation.format = v.formatter.format.bind(v.formatter)), v.interpolator = new T0(this.options), v.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, v.backendConnector = new M0(i(this.modules.backend), v.resourceStore, v, this.options), v.backendConnector.on("*", function(p) {
        for (var h = arguments.length, g = new Array(h > 1 ? h - 1 : 0), m = 1; m < h; m++)
          g[m - 1] = arguments[m];
        t.emit(p, ...g);
      }), this.modules.languageDetector && (v.languageDetector = i(this.modules.languageDetector), v.languageDetector.init && v.languageDetector.init(v, this.options.detection, this.options)), this.modules.i18nFormat && (v.i18nFormat = i(this.modules.i18nFormat), v.i18nFormat.init && v.i18nFormat.init(this)), this.translator = new Yi(this.services, this.options), this.translator.on("*", function(p) {
        for (var h = arguments.length, g = new Array(h > 1 ? h - 1 : 0), m = 1; m < h; m++)
          g[m - 1] = arguments[m];
        t.emit(p, ...g);
      }), this.modules.external.forEach((p) => {
        p.init && p.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = vi), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const d = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      d.length > 0 && d[0] !== "dev" && (this.options.lng = d[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((d) => {
      this[d] = function() {
        return t.store[d](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((d) => {
      this[d] = function() {
        return t.store[d](...arguments), t;
      };
    });
    const l = ya(), u = () => {
      const d = (f, v) => {
        this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(v), r(f, v);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
        return d(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, d);
    };
    return this.options.resources || !this.options.initImmediate ? u() : setTimeout(u, 0), l;
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : vi;
    const a = typeof t == "string" ? t : this.language;
    if (typeof t == "function" && (r = t), !this.options.resources || this.options.partialBundledLanguages) {
      if (a && a.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
        return r();
      const i = [], o = (s) => {
        if (!s || s === "cimode")
          return;
        this.services.languageUtils.toResolveHierarchy(s).forEach((u) => {
          u !== "cimode" && i.indexOf(u) < 0 && i.push(u);
        });
      };
      a ? o(a) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => o(l)), this.options.preload && this.options.preload.forEach((s) => o(s)), this.services.backendConnector.load(i, this.options.ns, (s) => {
        !s && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(s);
      });
    } else
      r(null);
  }
  reloadResources(t, n, r) {
    const a = ya();
    return t || (t = this.languages), n || (n = this.options.ns), r || (r = vi), this.services.backendConnector.reload(t, n, (i) => {
      a.resolve(), r(i);
    }), a;
  }
  use(t) {
    if (!t)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && Kv.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(t, n) {
    var r = this;
    this.isLanguageChangingTo = t;
    const a = ya();
    this.emit("languageChanging", t);
    const i = (l) => {
      this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
    }, o = (l, u) => {
      u ? (i(u), this.translator.changeLanguage(u), this.isLanguageChangingTo = void 0, this.emit("languageChanged", u), this.logger.log("languageChanged", u)) : this.isLanguageChangingTo = void 0, a.resolve(function() {
        return r.t(...arguments);
      }), n && n(l, function() {
        return r.t(...arguments);
      });
    }, s = (l) => {
      !t && !l && this.services.languageDetector && (l = []);
      const u = typeof l == "string" ? l : this.services.languageUtils.getBestMatchFromCodes(l);
      u && (this.language || i(u), this.translator.language || this.translator.changeLanguage(u), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(u)), this.loadResources(u, (d) => {
        o(d, u);
      });
    };
    return !t && this.services.languageDetector && !this.services.languageDetector.async ? s(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(s) : this.services.languageDetector.detect(s) : s(t), a;
  }
  getFixedT(t, n, r) {
    var a = this;
    const i = function(o, s) {
      let l;
      if (typeof s != "object") {
        for (var u = arguments.length, d = new Array(u > 2 ? u - 2 : 0), f = 2; f < u; f++)
          d[f - 2] = arguments[f];
        l = a.options.overloadTranslationOptionHandler([o, s].concat(d));
      } else
        l = {
          ...s
        };
      l.lng = l.lng || i.lng, l.lngs = l.lngs || i.lngs, l.ns = l.ns || i.ns, l.keyPrefix = l.keyPrefix || r || i.keyPrefix;
      const v = a.options.keySeparator || ".";
      let p;
      return l.keyPrefix && Array.isArray(o) ? p = o.map((h) => `${l.keyPrefix}${v}${h}`) : p = l.keyPrefix ? `${l.keyPrefix}${v}${o}` : o, a.t(p, l);
    };
    return typeof t == "string" ? i.lng = t : i.lngs = t, i.ns = n, i.keyPrefix = r, i;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const r = n.lng || this.resolvedLanguage || this.languages[0], a = this.options ? this.options.fallbackLng : !1, i = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode")
      return !0;
    const o = (s, l) => {
      const u = this.services.backendConnector.state[`${s}|${l}`];
      return u === -1 || u === 2;
    };
    if (n.precheck) {
      const s = n.precheck(this, o);
      if (s !== void 0)
        return s;
    }
    return !!(this.hasResourceBundle(r, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || o(r, t) && (!a || o(i, t)));
  }
  loadNamespaces(t, n) {
    const r = ya();
    return this.options.ns ? (typeof t == "string" && (t = [t]), t.forEach((a) => {
      this.options.ns.indexOf(a) < 0 && this.options.ns.push(a);
    }), this.loadResources((a) => {
      r.resolve(), n && n(a);
    }), r) : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = ya();
    typeof t == "string" && (t = [t]);
    const a = this.options.preload || [], i = t.filter((o) => a.indexOf(o) < 0);
    return i.length ? (this.options.preload = a.concat(i), this.loadResources((o) => {
      r.resolve(), n && n(o);
    }), r) : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !t)
      return "rtl";
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = this.services && this.services.languageUtils || new Ic($c());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    return new Va(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : vi;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const a = {
      ...this.options,
      ...t,
      isClone: !0
    }, i = new Va(a);
    return (t.debug !== void 0 || t.prefix !== void 0) && (i.logger = i.logger.clone(t)), ["store", "services", "language"].forEach((s) => {
      i[s] = this[s];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, r && (i.store = new Tc(this.store.data, a), i.services.resourceStore = i.store), i.translator = new Yi(i.services, a), i.translator.on("*", function(s) {
      for (var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), d = 1; d < l; d++)
        u[d - 1] = arguments[d];
      i.emit(s, ...u);
    }), i.init(a, n), i.translator.options = a, i.translator.backendConnector.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, i;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const sn = Va.createInstance();
sn.createInstance = Va.createInstance;
sn.createInstance;
sn.dir;
sn.init;
sn.loadResources;
sn.reloadResources;
sn.use;
sn.changeLanguage;
sn.getFixedT;
sn.t;
sn.exists;
sn.setDefaultNamespace;
sn.hasLoadedNamespace;
sn.loadNamespaces;
sn.loadLanguages;
const D0 = Ga();
function A0(e) {
  let {
    i18n: t,
    defaultNS: n,
    children: r
  } = e;
  const a = Zt(() => ({
    i18n: t,
    defaultNS: n
  }), [t, n]);
  return sy(D0.Provider, {
    value: a
  }, r);
}
const xo = (e) => {
  if (!e)
    return {};
  const t = {};
  return Object.keys(e).forEach((n) => {
    if (typeof e[n] == "object") {
      t[n] = xo(e[n]);
      return;
    }
    e[n].includes("!important") ? t[n] = e[n] : t[n] = `${e[n]} !important`;
  }), t;
}, oa = Ga({
  colorScheme: {},
  locale: "",
  size: "middle",
  fontSize: {},
  fontFamily: ""
}), kA = (e) => {
  const t = {
    colorScheme: e.colorScheme,
    locale: e.locale,
    size: e.size,
    fontSize: e.fontSize,
    fontFamily: e.fontFamily
  }, { children: n, localeBundle: r, locale: a } = e, i = sn.createInstance();
  let o = {};
  return r && r.length > 0 && r.forEach((s) => {
    o[s.lng] = { [s.ns]: s.resources };
  }), i.init({
    resources: o,
    lng: a,
    fallbackLng: a,
    interpolation: {
      escapeValue: !1
    }
  }), /* @__PURE__ */ Qt.jsx("div", { children: /* @__PURE__ */ Qt.jsx(oa.Provider, { value: t, children: /* @__PURE__ */ Qt.jsx(A0, { i18n: i, children: n }) }) });
};
function Le(e) {
  "@babel/helpers - typeof";
  return Le = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Le(e);
}
function L0(e, t) {
  if (Le(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Le(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Vv(e) {
  var t = L0(e, "string");
  return Le(t) == "symbol" ? t : String(t);
}
function P(e, t, n) {
  return t = Vv(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Kt(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ac(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Vv(r.key), r);
  }
}
function Vt(e, t, n) {
  return t && Ac(e.prototype, t), n && Ac(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Js(e, t) {
  return Js = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, Js(e, t);
}
function Gt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Js(e, t);
}
function Xi(e) {
  return Xi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Xi(e);
}
function K0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ue(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function V0(e, t) {
  if (t && (Le(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ue(e);
}
function qt(e) {
  var t = K0();
  return function() {
    var r = Xi(e), a;
    if (t) {
      var i = Xi(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return V0(this, a);
  };
}
var zv = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], a = 0; a < arguments.length; a++) {
        var i = arguments[a];
        if (i) {
          var o = typeof i;
          if (o === "string" || o === "number")
            r.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var s = n.apply(null, i);
              s && r.push(s);
            }
          } else if (o === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              r.push(i.toString());
              continue;
            }
            for (var l in i)
              t.call(i, l) && i[l] && r.push(l);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(zv);
var z0 = zv.exports;
const ne = /* @__PURE__ */ qa(z0);
var Qs = { exports: {} }, yt = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lc;
function j0() {
  return Lc || (Lc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h = !1, g = !1, m = !1, y = !1, b = !1, x;
    x = Symbol.for("react.module.reference");
    function C(Q) {
      return !!(typeof Q == "string" || typeof Q == "function" || Q === n || Q === a || b || Q === r || Q === u || Q === d || y || Q === p || h || g || m || typeof Q == "object" && Q !== null && (Q.$$typeof === v || Q.$$typeof === f || Q.$$typeof === i || Q.$$typeof === o || Q.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Q.$$typeof === x || Q.getModuleId !== void 0));
    }
    function E(Q) {
      if (typeof Q == "object" && Q !== null) {
        var ce = Q.$$typeof;
        switch (ce) {
          case e:
            var Ce = Q.type;
            switch (Ce) {
              case n:
              case a:
              case r:
              case u:
              case d:
                return Ce;
              default:
                var we = Ce && Ce.$$typeof;
                switch (we) {
                  case s:
                  case o:
                  case l:
                  case v:
                  case f:
                  case i:
                    return we;
                  default:
                    return ce;
                }
            }
          case t:
            return ce;
        }
      }
    }
    var S = o, w = i, N = e, O = l, _ = n, $ = v, I = f, F = t, M = a, V = r, T = u, R = d, k = !1, A = !1;
    function U(Q) {
      return k || (k = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function z(Q) {
      return A || (A = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(Q) {
      return E(Q) === o;
    }
    function G(Q) {
      return E(Q) === i;
    }
    function W(Q) {
      return typeof Q == "object" && Q !== null && Q.$$typeof === e;
    }
    function j(Q) {
      return E(Q) === l;
    }
    function H(Q) {
      return E(Q) === n;
    }
    function q(Q) {
      return E(Q) === v;
    }
    function Y(Q) {
      return E(Q) === f;
    }
    function J(Q) {
      return E(Q) === t;
    }
    function oe(Q) {
      return E(Q) === a;
    }
    function re(Q) {
      return E(Q) === r;
    }
    function de(Q) {
      return E(Q) === u;
    }
    function Z(Q) {
      return E(Q) === d;
    }
    yt.ContextConsumer = S, yt.ContextProvider = w, yt.Element = N, yt.ForwardRef = O, yt.Fragment = _, yt.Lazy = $, yt.Memo = I, yt.Portal = F, yt.Profiler = M, yt.StrictMode = V, yt.Suspense = T, yt.SuspenseList = R, yt.isAsyncMode = U, yt.isConcurrentMode = z, yt.isContextConsumer = B, yt.isContextProvider = G, yt.isElement = W, yt.isForwardRef = j, yt.isFragment = H, yt.isLazy = q, yt.isMemo = Y, yt.isPortal = J, yt.isProfiler = oe, yt.isStrictMode = re, yt.isSuspense = de, yt.isSuspenseList = Z, yt.isValidElementType = C, yt.typeOf = E;
  }()), yt;
}
var bt = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kc;
function H0() {
  if (Kc)
    return bt;
  Kc = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function g(m) {
    if (typeof m == "object" && m !== null) {
      var y = m.$$typeof;
      switch (y) {
        case e:
          switch (m = m.type, m) {
            case n:
            case a:
            case r:
            case u:
            case d:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case o:
                case l:
                case v:
                case f:
                case i:
                  return m;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return bt.ContextConsumer = o, bt.ContextProvider = i, bt.Element = e, bt.ForwardRef = l, bt.Fragment = n, bt.Lazy = v, bt.Memo = f, bt.Portal = t, bt.Profiler = a, bt.StrictMode = r, bt.Suspense = u, bt.SuspenseList = d, bt.isAsyncMode = function() {
    return !1;
  }, bt.isConcurrentMode = function() {
    return !1;
  }, bt.isContextConsumer = function(m) {
    return g(m) === o;
  }, bt.isContextProvider = function(m) {
    return g(m) === i;
  }, bt.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, bt.isForwardRef = function(m) {
    return g(m) === l;
  }, bt.isFragment = function(m) {
    return g(m) === n;
  }, bt.isLazy = function(m) {
    return g(m) === v;
  }, bt.isMemo = function(m) {
    return g(m) === f;
  }, bt.isPortal = function(m) {
    return g(m) === t;
  }, bt.isProfiler = function(m) {
    return g(m) === a;
  }, bt.isStrictMode = function(m) {
    return g(m) === r;
  }, bt.isSuspense = function(m) {
    return g(m) === u;
  }, bt.isSuspenseList = function(m) {
    return g(m) === d;
  }, bt.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === a || m === r || m === u || m === d || m === p || typeof m == "object" && m !== null && (m.$$typeof === v || m.$$typeof === f || m.$$typeof === i || m.$$typeof === o || m.$$typeof === l || m.$$typeof === h || m.getModuleId !== void 0);
  }, bt.typeOf = g, bt;
}
process.env.NODE_ENV === "production" ? Qs.exports = H0() : Qs.exports = j0();
var jv = Qs.exports;
function yn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [];
  return be.Children.forEach(e, function(r) {
    r == null && !t.keepEmpty || (Array.isArray(r) ? n = n.concat(yn(r)) : jv.isFragment(r) && r.props ? n = n.concat(yn(r.props.children, t)) : n.push(r));
  }), n;
}
var Zs = {}, vu = [], B0 = function(t) {
  vu.push(t);
};
function Ji(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = vu.reduce(function(r, a) {
      return a(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function U0(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = vu.reduce(function(r, a) {
      return a(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function Hv() {
  Zs = {};
}
function Bv(e, t, n) {
  !t && !Zs[n] && (e(!1, n), Zs[n] = !0);
}
function Fe(e, t) {
  Bv(Ji, e, t);
}
function el(e, t) {
  Bv(U0, e, t);
}
Fe.preMessage = B0;
Fe.resetWarned = Hv;
Fe.noteOnce = el;
function Vc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vc(Object(n), !0).forEach(function(r) {
      P(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vc(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function W0(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Wr(e) {
  return W0(e) ? e : e instanceof be.Component ? $a.findDOMNode(e) : null;
}
function pu(e, t, n) {
  var r = c.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
function Qi(e, t) {
  typeof e == "function" ? e(t) : Le(e) === "object" && e && "current" in e && (e.current = t);
}
function er() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t.filter(function(a) {
    return a;
  });
  return r.length <= 1 ? r[0] : function(a) {
    t.forEach(function(i) {
      Qi(i, a);
    });
  };
}
function mu() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return pu(function() {
    return er.apply(void 0, t);
  }, t, function(r, a) {
    return r.length !== a.length || r.every(function(i, o) {
      return i !== a[o];
    });
  });
}
function Xa(e) {
  var t, n, r = jv.isMemo(e) ? e.type.type : e.type;
  return !(typeof r == "function" && !((t = r.prototype) !== null && t !== void 0 && t.render) || typeof e == "function" && !((n = e.prototype) !== null && n !== void 0 && n.render));
}
var tl = /* @__PURE__ */ c.createContext(null);
function G0(e) {
  var t = e.children, n = e.onBatchResize, r = c.useRef(0), a = c.useRef([]), i = c.useContext(tl), o = c.useCallback(function(s, l, u) {
    r.current += 1;
    var d = r.current;
    a.current.push({
      size: s,
      element: l,
      data: u
    }), Promise.resolve().then(function() {
      d === r.current && (n == null || n(a.current), a.current = []);
    }), i == null || i(s, l, u);
  }, [n, i]);
  return /* @__PURE__ */ c.createElement(tl.Provider, {
    value: o
  }, t);
}
var Uv = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var r = -1;
    return t.some(function(a, i) {
      return a[0] === n ? (r = i, !0) : !1;
    }), r;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(n) {
        var r = e(this.__entries__, n), a = this.__entries__[r];
        return a && a[1];
      }, t.prototype.set = function(n, r) {
        var a = e(this.__entries__, n);
        ~a ? this.__entries__[a][1] = r : this.__entries__.push([n, r]);
      }, t.prototype.delete = function(n) {
        var r = this.__entries__, a = e(r, n);
        ~a && r.splice(a, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, r) {
        r === void 0 && (r = null);
        for (var a = 0, i = this.__entries__; a < i.length; a++) {
          var o = i[a];
          n.call(r, o[1], o[0]);
        }
      }, t;
    }()
  );
}(), nl = typeof window < "u" && typeof document < "u" && window.document === document, Zi = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), q0 = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Zi) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Y0 = 2;
function X0(e, t) {
  var n = !1, r = !1, a = 0;
  function i() {
    n && (n = !1, e()), r && s();
  }
  function o() {
    q0(i);
  }
  function s() {
    var l = Date.now();
    if (n) {
      if (l - a < Y0)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(o, t);
    a = l;
  }
  return s;
}
var J0 = 20, Q0 = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Z0 = typeof MutationObserver < "u", eb = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = X0(this.refresh.bind(this), J0);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_, r = n.indexOf(t);
      ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return t.forEach(function(n) {
        return n.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !nl || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Z0 ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !nl || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, r = n === void 0 ? "" : n, a = Q0.some(function(i) {
        return !!~r.indexOf(i);
      });
      a && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Wv = function(e, t) {
  for (var n = 0, r = Object.keys(t); n < r.length; n++) {
    var a = r[n];
    Object.defineProperty(e, a, {
      value: t[a],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, Qr = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Zi;
}, Gv = So(0, 0, 0, 0);
function eo(e) {
  return parseFloat(e) || 0;
}
function zc(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(r, a) {
    var i = e["border-" + a + "-width"];
    return r + eo(i);
  }, 0);
}
function tb(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, a = t; r < a.length; r++) {
    var i = a[r], o = e["padding-" + i];
    n[i] = eo(o);
  }
  return n;
}
function nb(e) {
  var t = e.getBBox();
  return So(0, 0, t.width, t.height);
}
function rb(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return Gv;
  var r = Qr(e).getComputedStyle(e), a = tb(r), i = a.left + a.right, o = a.top + a.bottom, s = eo(r.width), l = eo(r.height);
  if (r.boxSizing === "border-box" && (Math.round(s + i) !== t && (s -= zc(r, "left", "right") + i), Math.round(l + o) !== n && (l -= zc(r, "top", "bottom") + o)), !ib(e)) {
    var u = Math.round(s + i) - t, d = Math.round(l + o) - n;
    Math.abs(u) !== 1 && (s -= u), Math.abs(d) !== 1 && (l -= d);
  }
  return So(a.left, a.top, s, l);
}
var ab = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Qr(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Qr(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function ib(e) {
  return e === Qr(e).document.documentElement;
}
function ob(e) {
  return nl ? ab(e) ? nb(e) : rb(e) : Gv;
}
function sb(e) {
  var t = e.x, n = e.y, r = e.width, a = e.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, o = Object.create(i.prototype);
  return Wv(o, {
    x: t,
    y: n,
    width: r,
    height: a,
    top: n,
    right: t + r,
    bottom: a + n,
    left: t
  }), o;
}
function So(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var lb = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = So(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = ob(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), ub = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n) {
      var r = sb(n);
      Wv(this, { target: t, contentRect: r });
    }
    return e;
  }()
), cb = (
  /** @class */
  function() {
    function e(t, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new Uv(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Qr(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new lb(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Qr(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && t.activeObservations_.push(n);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(r) {
          return new ub(r.target, r.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), qv = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Uv(), Yv = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = eb.getInstance(), r = new cb(t, n, this);
      qv.set(this, r);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  Yv.prototype[e] = function() {
    var t;
    return (t = qv.get(this))[e].apply(t, arguments);
  };
});
var Xv = function() {
  return typeof Zi.ResizeObserver < "u" ? Zi.ResizeObserver : Yv;
}(), Qn = /* @__PURE__ */ new Map();
function Jv(e) {
  e.forEach(function(t) {
    var n, r = t.target;
    (n = Qn.get(r)) === null || n === void 0 || n.forEach(function(a) {
      return a(r);
    });
  });
}
var Qv = new Xv(Jv);
process.env.NODE_ENV;
process.env.NODE_ENV;
function db(e, t) {
  Qn.has(e) || (Qn.set(e, /* @__PURE__ */ new Set()), Qv.observe(e)), Qn.get(e).add(t);
}
function fb(e, t) {
  Qn.has(e) && (Qn.get(e).delete(t), Qn.get(e).size || (Qv.unobserve(e), Qn.delete(e)));
}
var vb = /* @__PURE__ */ function(e) {
  Gt(n, e);
  var t = qt(n);
  function n() {
    return Kt(this, n), t.apply(this, arguments);
  }
  return Vt(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(c.Component);
function pb(e, t) {
  var n = e.children, r = e.disabled, a = c.useRef(null), i = c.useRef(null), o = c.useContext(tl), s = typeof n == "function", l = s ? n(a) : n, u = c.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), d = !s && /* @__PURE__ */ c.isValidElement(l) && Xa(l), f = d ? l.ref : null, v = mu(f, a), p = function() {
    var y;
    return Wr(a.current) || // Support `nativeElement` format
    (a.current && Le(a.current) === "object" ? Wr((y = a.current) === null || y === void 0 ? void 0 : y.nativeElement) : null) || Wr(i.current);
  };
  c.useImperativeHandle(t, function() {
    return p();
  });
  var h = c.useRef(e);
  h.current = e;
  var g = c.useCallback(function(m) {
    var y = h.current, b = y.onResize, x = y.data, C = m.getBoundingClientRect(), E = C.width, S = C.height, w = m.offsetWidth, N = m.offsetHeight, O = Math.floor(E), _ = Math.floor(S);
    if (u.current.width !== O || u.current.height !== _ || u.current.offsetWidth !== w || u.current.offsetHeight !== N) {
      var $ = {
        width: O,
        height: _,
        offsetWidth: w,
        offsetHeight: N
      };
      u.current = $;
      var I = w === Math.round(E) ? E : w, F = N === Math.round(S) ? S : N, M = D(D({}, $), {}, {
        offsetWidth: I,
        offsetHeight: F
      });
      o == null || o(M, m, x), b && Promise.resolve().then(function() {
        b(M, m);
      });
    }
  }, []);
  return c.useEffect(function() {
    var m = p();
    return m && !r && db(m, g), function() {
      return fb(m, g);
    };
  }, [a.current, r]), /* @__PURE__ */ c.createElement(vb, {
    ref: i
  }, d ? /* @__PURE__ */ c.cloneElement(l, {
    ref: v
  }) : l);
}
var Zv = /* @__PURE__ */ c.forwardRef(pb);
process.env.NODE_ENV !== "production" && (Zv.displayName = "SingleObserver");
var mb = "rc-observer-key";
function hb(e, t) {
  var n = e.children, r = typeof n == "function" ? [n] : yn(n);
  return process.env.NODE_ENV !== "production" && (r.length > 1 ? Ji(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : r.length === 0 && Ji(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), r.map(function(a, i) {
    var o = (a == null ? void 0 : a.key) || "".concat(mb, "-").concat(i);
    return /* @__PURE__ */ c.createElement(Zv, K({}, e, {
      key: o,
      ref: i === 0 ? t : void 0
    }), a);
  });
}
var zn = /* @__PURE__ */ c.forwardRef(hb);
process.env.NODE_ENV !== "production" && (zn.displayName = "ResizeObserver");
zn.Collection = G0;
function ln(e, t) {
  var n = D({}, e);
  return Array.isArray(t) && t.forEach(function(r) {
    delete n[r];
  }), n;
}
var gb = /* @__PURE__ */ Ga({});
const ep = gb;
function yb(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function We(e, t) {
  if (e == null)
    return {};
  var n = yb(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function rl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function bb(e) {
  if (Array.isArray(e))
    return rl(e);
}
function tp(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function hu(e, t) {
  if (e) {
    if (typeof e == "string")
      return rl(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return rl(e, t);
  }
}
function Cb() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pe(e) {
  return bb(e) || tp(e) || hu(e) || Cb();
}
var Sr = "RC_FORM_INTERNAL_HOOKS", St = function() {
  Fe(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, Zr = /* @__PURE__ */ c.createContext({
  getFieldValue: St,
  getFieldsValue: St,
  getFieldError: St,
  getFieldWarning: St,
  getFieldsError: St,
  isFieldsTouched: St,
  isFieldTouched: St,
  isFieldValidating: St,
  isFieldsValidating: St,
  resetFields: St,
  setFields: St,
  setFieldValue: St,
  setFieldsValue: St,
  validateFields: St,
  submit: St,
  getInternalHooks: function() {
    return St(), {
      dispatch: St,
      initEntityValue: St,
      registerField: St,
      useSubscribe: St,
      setInitialValues: St,
      destroyForm: St,
      setCallbacks: St,
      registerWatch: St,
      getFields: St,
      setValidateMessages: St,
      setPreserve: St,
      getInitialValue: St
    };
  }
});
function al(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function kn() {
  kn = function() {
    return t;
  };
  var e, t = {}, n = Object.prototype, r = n.hasOwnProperty, a = Object.defineProperty || function(T, R, k) {
    T[R] = k.value;
  }, i = typeof Symbol == "function" ? Symbol : {}, o = i.iterator || "@@iterator", s = i.asyncIterator || "@@asyncIterator", l = i.toStringTag || "@@toStringTag";
  function u(T, R, k) {
    return Object.defineProperty(T, R, {
      value: k,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), T[R];
  }
  try {
    u({}, "");
  } catch {
    u = function(k, A, U) {
      return k[A] = U;
    };
  }
  function d(T, R, k, A) {
    var U = R && R.prototype instanceof y ? R : y, z = Object.create(U.prototype), B = new M(A || []);
    return a(z, "_invoke", {
      value: _(T, k, B)
    }), z;
  }
  function f(T, R, k) {
    try {
      return {
        type: "normal",
        arg: T.call(R, k)
      };
    } catch (A) {
      return {
        type: "throw",
        arg: A
      };
    }
  }
  t.wrap = d;
  var v = "suspendedStart", p = "suspendedYield", h = "executing", g = "completed", m = {};
  function y() {
  }
  function b() {
  }
  function x() {
  }
  var C = {};
  u(C, o, function() {
    return this;
  });
  var E = Object.getPrototypeOf, S = E && E(E(V([])));
  S && S !== n && r.call(S, o) && (C = S);
  var w = x.prototype = y.prototype = Object.create(C);
  function N(T) {
    ["next", "throw", "return"].forEach(function(R) {
      u(T, R, function(k) {
        return this._invoke(R, k);
      });
    });
  }
  function O(T, R) {
    function k(U, z, B, G) {
      var W = f(T[U], T, z);
      if (W.type !== "throw") {
        var j = W.arg, H = j.value;
        return H && Le(H) == "object" && r.call(H, "__await") ? R.resolve(H.__await).then(function(q) {
          k("next", q, B, G);
        }, function(q) {
          k("throw", q, B, G);
        }) : R.resolve(H).then(function(q) {
          j.value = q, B(j);
        }, function(q) {
          return k("throw", q, B, G);
        });
      }
      G(W.arg);
    }
    var A;
    a(this, "_invoke", {
      value: function(z, B) {
        function G() {
          return new R(function(W, j) {
            k(z, B, W, j);
          });
        }
        return A = A ? A.then(G, G) : G();
      }
    });
  }
  function _(T, R, k) {
    var A = v;
    return function(U, z) {
      if (A === h)
        throw new Error("Generator is already running");
      if (A === g) {
        if (U === "throw")
          throw z;
        return {
          value: e,
          done: !0
        };
      }
      for (k.method = U, k.arg = z; ; ) {
        var B = k.delegate;
        if (B) {
          var G = $(B, k);
          if (G) {
            if (G === m)
              continue;
            return G;
          }
        }
        if (k.method === "next")
          k.sent = k._sent = k.arg;
        else if (k.method === "throw") {
          if (A === v)
            throw A = g, k.arg;
          k.dispatchException(k.arg);
        } else
          k.method === "return" && k.abrupt("return", k.arg);
        A = h;
        var W = f(T, R, k);
        if (W.type === "normal") {
          if (A = k.done ? g : p, W.arg === m)
            continue;
          return {
            value: W.arg,
            done: k.done
          };
        }
        W.type === "throw" && (A = g, k.method = "throw", k.arg = W.arg);
      }
    };
  }
  function $(T, R) {
    var k = R.method, A = T.iterator[k];
    if (A === e)
      return R.delegate = null, k === "throw" && T.iterator.return && (R.method = "return", R.arg = e, $(T, R), R.method === "throw") || k !== "return" && (R.method = "throw", R.arg = new TypeError("The iterator does not provide a '" + k + "' method")), m;
    var U = f(A, T.iterator, R.arg);
    if (U.type === "throw")
      return R.method = "throw", R.arg = U.arg, R.delegate = null, m;
    var z = U.arg;
    return z ? z.done ? (R[T.resultName] = z.value, R.next = T.nextLoc, R.method !== "return" && (R.method = "next", R.arg = e), R.delegate = null, m) : z : (R.method = "throw", R.arg = new TypeError("iterator result is not an object"), R.delegate = null, m);
  }
  function I(T) {
    var R = {
      tryLoc: T[0]
    };
    1 in T && (R.catchLoc = T[1]), 2 in T && (R.finallyLoc = T[2], R.afterLoc = T[3]), this.tryEntries.push(R);
  }
  function F(T) {
    var R = T.completion || {};
    R.type = "normal", delete R.arg, T.completion = R;
  }
  function M(T) {
    this.tryEntries = [{
      tryLoc: "root"
    }], T.forEach(I, this), this.reset(!0);
  }
  function V(T) {
    if (T || T === "") {
      var R = T[o];
      if (R)
        return R.call(T);
      if (typeof T.next == "function")
        return T;
      if (!isNaN(T.length)) {
        var k = -1, A = function U() {
          for (; ++k < T.length; )
            if (r.call(T, k))
              return U.value = T[k], U.done = !1, U;
          return U.value = e, U.done = !0, U;
        };
        return A.next = A;
      }
    }
    throw new TypeError(Le(T) + " is not iterable");
  }
  return b.prototype = x, a(w, "constructor", {
    value: x,
    configurable: !0
  }), a(x, "constructor", {
    value: b,
    configurable: !0
  }), b.displayName = u(x, l, "GeneratorFunction"), t.isGeneratorFunction = function(T) {
    var R = typeof T == "function" && T.constructor;
    return !!R && (R === b || (R.displayName || R.name) === "GeneratorFunction");
  }, t.mark = function(T) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(T, x) : (T.__proto__ = x, u(T, l, "GeneratorFunction")), T.prototype = Object.create(w), T;
  }, t.awrap = function(T) {
    return {
      __await: T
    };
  }, N(O.prototype), u(O.prototype, s, function() {
    return this;
  }), t.AsyncIterator = O, t.async = function(T, R, k, A, U) {
    U === void 0 && (U = Promise);
    var z = new O(d(T, R, k, A), U);
    return t.isGeneratorFunction(R) ? z : z.next().then(function(B) {
      return B.done ? B.value : z.next();
    });
  }, N(w), u(w, l, "Generator"), u(w, o, function() {
    return this;
  }), u(w, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(T) {
    var R = Object(T), k = [];
    for (var A in R)
      k.push(A);
    return k.reverse(), function U() {
      for (; k.length; ) {
        var z = k.pop();
        if (z in R)
          return U.value = z, U.done = !1, U;
      }
      return U.done = !0, U;
    };
  }, t.values = V, M.prototype = {
    constructor: M,
    reset: function(R) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(F), !R)
        for (var k in this)
          k.charAt(0) === "t" && r.call(this, k) && !isNaN(+k.slice(1)) && (this[k] = e);
    },
    stop: function() {
      this.done = !0;
      var R = this.tryEntries[0].completion;
      if (R.type === "throw")
        throw R.arg;
      return this.rval;
    },
    dispatchException: function(R) {
      if (this.done)
        throw R;
      var k = this;
      function A(j, H) {
        return B.type = "throw", B.arg = R, k.next = j, H && (k.method = "next", k.arg = e), !!H;
      }
      for (var U = this.tryEntries.length - 1; U >= 0; --U) {
        var z = this.tryEntries[U], B = z.completion;
        if (z.tryLoc === "root")
          return A("end");
        if (z.tryLoc <= this.prev) {
          var G = r.call(z, "catchLoc"), W = r.call(z, "finallyLoc");
          if (G && W) {
            if (this.prev < z.catchLoc)
              return A(z.catchLoc, !0);
            if (this.prev < z.finallyLoc)
              return A(z.finallyLoc);
          } else if (G) {
            if (this.prev < z.catchLoc)
              return A(z.catchLoc, !0);
          } else {
            if (!W)
              throw new Error("try statement without catch or finally");
            if (this.prev < z.finallyLoc)
              return A(z.finallyLoc);
          }
        }
      }
    },
    abrupt: function(R, k) {
      for (var A = this.tryEntries.length - 1; A >= 0; --A) {
        var U = this.tryEntries[A];
        if (U.tryLoc <= this.prev && r.call(U, "finallyLoc") && this.prev < U.finallyLoc) {
          var z = U;
          break;
        }
      }
      z && (R === "break" || R === "continue") && z.tryLoc <= k && k <= z.finallyLoc && (z = null);
      var B = z ? z.completion : {};
      return B.type = R, B.arg = k, z ? (this.method = "next", this.next = z.finallyLoc, m) : this.complete(B);
    },
    complete: function(R, k) {
      if (R.type === "throw")
        throw R.arg;
      return R.type === "break" || R.type === "continue" ? this.next = R.arg : R.type === "return" ? (this.rval = this.arg = R.arg, this.method = "return", this.next = "end") : R.type === "normal" && k && (this.next = k), m;
    },
    finish: function(R) {
      for (var k = this.tryEntries.length - 1; k >= 0; --k) {
        var A = this.tryEntries[k];
        if (A.finallyLoc === R)
          return this.complete(A.completion, A.afterLoc), F(A), m;
      }
    },
    catch: function(R) {
      for (var k = this.tryEntries.length - 1; k >= 0; --k) {
        var A = this.tryEntries[k];
        if (A.tryLoc === R) {
          var U = A.completion;
          if (U.type === "throw") {
            var z = U.arg;
            F(A);
          }
          return z;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(R, k, A) {
      return this.delegate = {
        iterator: V(R),
        resultName: k,
        nextLoc: A
      }, this.method === "next" && (this.arg = e), m;
    }
  }, t;
}
function jc(e, t, n, r, a, i, o) {
  try {
    var s = e[i](o), l = s.value;
  } catch (u) {
    n(u);
    return;
  }
  s.done ? t(l) : Promise.resolve(l).then(r, a);
}
function Ja(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, a) {
      var i = e.apply(t, n);
      function o(l) {
        jc(i, r, a, o, s, "next", l);
      }
      function s(l) {
        jc(i, r, a, o, s, "throw", l);
      }
      o(void 0);
    });
  };
}
function Er() {
  return Er = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Er.apply(this, arguments);
}
function xb(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, za(e, t);
}
function il(e) {
  return il = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, il(e);
}
function za(e, t) {
  return za = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, za(e, t);
}
function Sb() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function $i(e, t, n) {
  return Sb() ? $i = Reflect.construct.bind() : $i = function(a, i, o) {
    var s = [null];
    s.push.apply(s, i);
    var l = Function.bind.apply(a, s), u = new l();
    return o && za(u, o.prototype), u;
  }, $i.apply(null, arguments);
}
function Eb(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function ol(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return ol = function(r) {
    if (r === null || !Eb(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, a);
    }
    function a() {
      return $i(r, arguments, il(this).constructor);
    }
    return a.prototype = Object.create(r.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), za(a, r);
  }, ol(e);
}
var wb = /%[sdj%]/g, np = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (np = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function sl(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function hn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var a = 0, i = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var o = e.replace(wb, function(s) {
      if (s === "%%")
        return "%";
      if (a >= i)
        return s;
      switch (s) {
        case "%s":
          return String(n[a++]);
        case "%d":
          return Number(n[a++]);
        case "%j":
          try {
            return JSON.stringify(n[a++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return o;
  }
  return e;
}
function Nb(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Wt(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || Nb(t) && typeof e == "string" && !e);
}
function Ob(e, t, n) {
  var r = [], a = 0, i = e.length;
  function o(s) {
    r.push.apply(r, s || []), a++, a === i && n(r);
  }
  e.forEach(function(s) {
    t(s, o);
  });
}
function Hc(e, t, n) {
  var r = 0, a = e.length;
  function i(o) {
    if (o && o.length) {
      n(o);
      return;
    }
    var s = r;
    r = r + 1, s < a ? t(e[s], i) : n([]);
  }
  i([]);
}
function Pb(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, e[n] || []);
  }), t;
}
var Bc = /* @__PURE__ */ function(e) {
  xb(t, e);
  function t(n, r) {
    var a;
    return a = e.call(this, "Async Validation Error") || this, a.errors = n, a.fields = r, a;
  }
  return t;
}(/* @__PURE__ */ ol(Error));
function Rb(e, t, n, r, a) {
  if (t.first) {
    var i = new Promise(function(v, p) {
      var h = function(y) {
        return r(y), y.length ? p(new Bc(y, sl(y))) : v(a);
      }, g = Pb(e);
      Hc(g, n, h);
    });
    return i.catch(function(v) {
      return v;
    }), i;
  }
  var o = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), l = s.length, u = 0, d = [], f = new Promise(function(v, p) {
    var h = function(m) {
      if (d.push.apply(d, m), u++, u === l)
        return r(d), d.length ? p(new Bc(d, sl(d))) : v(a);
    };
    s.length || (r(d), v(a)), s.forEach(function(g) {
      var m = e[g];
      o.indexOf(g) !== -1 ? Hc(m, n, h) : Ob(m, n, h);
    });
  });
  return f.catch(function(v) {
    return v;
  }), f;
}
function kb(e) {
  return !!(e && e.message !== void 0);
}
function Tb(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function Uc(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = Tb(t, e.fullFields) : r = t[n.field || e.fullField], kb(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function Wc(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        typeof r == "object" && typeof e[n] == "object" ? e[n] = Er({}, e[n], r) : e[n] = r;
      }
  }
  return e;
}
var rp = function(t, n, r, a, i, o) {
  t.required && (!r.hasOwnProperty(t.field) || Wt(n, o || t.type)) && a.push(hn(i.messages.required, t.fullField));
}, _b = function(t, n, r, a, i) {
  (/^\s+$/.test(n) || n === "") && a.push(hn(i.messages.whitespace, t.fullField));
}, pi, Ib = function() {
  if (pi)
    return pi;
  var e = "[a-fA-F\\d:]", t = function(C) {
    return C && C.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", a = (`
(?:
(?:` + r + ":){7}(?:" + r + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + r + ":){6}(?:" + n + "|:" + r + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + r + ":){5}(?::" + n + "|(?::" + r + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + r + ":){4}(?:(?::" + r + "){0,1}:" + n + "|(?::" + r + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + r + ":){3}(?:(?::" + r + "){0,2}:" + n + "|(?::" + r + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + r + ":){2}(?:(?::" + r + "){0,3}:" + n + "|(?::" + r + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + r + ":){1}(?:(?::" + r + "){0,4}:" + n + "|(?::" + r + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + r + "){0,5}:" + n + "|(?::" + r + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), i = new RegExp("(?:^" + n + "$)|(?:^" + a + "$)"), o = new RegExp("^" + n + "$"), s = new RegExp("^" + a + "$"), l = function(C) {
    return C && C.exact ? i : new RegExp("(?:" + t(C) + n + t(C) + ")|(?:" + t(C) + a + t(C) + ")", "g");
  };
  l.v4 = function(x) {
    return x && x.exact ? o : new RegExp("" + t(x) + n + t(x), "g");
  }, l.v6 = function(x) {
    return x && x.exact ? s : new RegExp("" + t(x) + a + t(x), "g");
  };
  var u = "(?:(?:[a-z]+:)?//)", d = "(?:\\S+(?::\\S*)?@)?", f = l.v4().source, v = l.v6().source, p = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", h = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", g = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", m = "(?::\\d{2,5})?", y = '(?:[/?#][^\\s"]*)?', b = "(?:" + u + "|www\\.)" + d + "(?:localhost|" + f + "|" + v + "|" + p + h + g + ")" + m + y;
  return pi = new RegExp("(?:^" + b + "$)", "i"), pi;
}, Gc = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Oa = {
  integer: function(t) {
    return Oa.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Oa.number(t) && !Oa.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return typeof t == "object" && !Oa.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Gc.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(Ib());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Gc.hex);
  }
}, Fb = function(t, n, r, a, i) {
  if (t.required && n === void 0) {
    rp(t, n, r, a, i);
    return;
  }
  var o = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  o.indexOf(s) > -1 ? Oa[s](n) || a.push(hn(i.messages.types[s], t.fullField, t.type)) : s && typeof n !== t.type && a.push(hn(i.messages.types[s], t.fullField, t.type));
}, Mb = function(t, n, r, a, i) {
  var o = typeof t.len == "number", s = typeof t.min == "number", l = typeof t.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, d = n, f = null, v = typeof n == "number", p = typeof n == "string", h = Array.isArray(n);
  if (v ? f = "number" : p ? f = "string" : h && (f = "array"), !f)
    return !1;
  h && (d = n.length), p && (d = n.replace(u, "_").length), o ? d !== t.len && a.push(hn(i.messages[f].len, t.fullField, t.len)) : s && !l && d < t.min ? a.push(hn(i.messages[f].min, t.fullField, t.min)) : l && !s && d > t.max ? a.push(hn(i.messages[f].max, t.fullField, t.max)) : s && l && (d < t.min || d > t.max) && a.push(hn(i.messages[f].range, t.fullField, t.min, t.max));
}, Mr = "enum", $b = function(t, n, r, a, i) {
  t[Mr] = Array.isArray(t[Mr]) ? t[Mr] : [], t[Mr].indexOf(n) === -1 && a.push(hn(i.messages[Mr], t.fullField, t[Mr].join(", ")));
}, Db = function(t, n, r, a, i) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || a.push(hn(i.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var o = new RegExp(t.pattern);
      o.test(n) || a.push(hn(i.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, it = {
  required: rp,
  whitespace: _b,
  type: Fb,
  range: Mb,
  enum: $b,
  pattern: Db
}, Ab = function(t, n, r, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Wt(n, "string") && !t.required)
      return r();
    it.required(t, n, a, o, i, "string"), Wt(n, "string") || (it.type(t, n, a, o, i), it.range(t, n, a, o, i), it.pattern(t, n, a, o, i), t.whitespace === !0 && it.whitespace(t, n, a, o, i));
  }
  r(o);
}, Lb = function(t, n, r, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Wt(n) && !t.required)
      return r();
    it.required(t, n, a, o, i), n !== void 0 && it.type(t, n, a, o, i);
  }
  r(o);
}, Kb = function(t, n, r, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (n === "" && (n = void 0), Wt(n) && !t.required)
      return r();
    it.required(t, n, a, o, i), n !== void 0 && (it.type(t, n, a, o, i), it.range(t, n, a, o, i));
  }
  r(o);
}, Vb = function(t, n, r, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Wt(n) && !t.required)
      return r();
    it.required(t, n, a, o, i), n !== void 0 && it.type(t, n, a, o, i);
  }
  r(o);
}, zb = function(t, n, r, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Wt(n) && !t.required)
      return r();
    it.required(t, n, a, o, i), Wt(n) || it.type(t, n, a, o, i);
  }
  r(o);
}, jb = function(t, n, r, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Wt(n) && !t.required)
      return r();
    it.required(t, n, a, o, i), n !== void 0 && (it.type(t, n, a, o, i), it.range(t, n, a, o, i));
  }
  r(o);
}, Hb = function(t, n, r, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Wt(n) && !t.required)
      return r();
    it.required(t, n, a, o, i), n !== void 0 && (it.type(t, n, a, o, i), it.range(t, n, a, o, i));
  }
  r(o);
}, Bb = function(t, n, r, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (n == null && !t.required)
      return r();
    it.required(t, n, a, o, i, "array"), n != null && (it.type(t, n, a, o, i), it.range(t, n, a, o, i));
  }
  r(o);
}, Ub = function(t, n, r, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Wt(n) && !t.required)
      return r();
    it.required(t, n, a, o, i), n !== void 0 && it.type(t, n, a, o, i);
  }
  r(o);
}, Wb = "enum", Gb = function(t, n, r, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Wt(n) && !t.required)
      return r();
    it.required(t, n, a, o, i), n !== void 0 && it[Wb](t, n, a, o, i);
  }
  r(o);
}, qb = function(t, n, r, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Wt(n, "string") && !t.required)
      return r();
    it.required(t, n, a, o, i), Wt(n, "string") || it.pattern(t, n, a, o, i);
  }
  r(o);
}, Yb = function(t, n, r, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Wt(n, "date") && !t.required)
      return r();
    if (it.required(t, n, a, o, i), !Wt(n, "date")) {
      var l;
      n instanceof Date ? l = n : l = new Date(n), it.type(t, l, a, o, i), l && it.range(t, l.getTime(), a, o, i);
    }
  }
  r(o);
}, Xb = function(t, n, r, a, i) {
  var o = [], s = Array.isArray(n) ? "array" : typeof n;
  it.required(t, n, a, o, i, s), r(o);
}, ls = function(t, n, r, a, i) {
  var o = t.type, s = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Wt(n, o) && !t.required)
      return r();
    it.required(t, n, a, s, i, o), Wt(n, o) || it.type(t, n, a, s, i);
  }
  r(s);
}, Jb = function(t, n, r, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Wt(n) && !t.required)
      return r();
    it.required(t, n, a, o, i);
  }
  r(o);
}, Ra = {
  string: Ab,
  method: Lb,
  number: Kb,
  boolean: Vb,
  regexp: zb,
  integer: jb,
  float: Hb,
  array: Bb,
  object: Ub,
  enum: Gb,
  pattern: qb,
  date: Yb,
  url: ls,
  hex: ls,
  email: ls,
  required: Xb,
  any: Jb
};
function ll() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var ul = ll(), Qa = /* @__PURE__ */ function() {
  function e(n) {
    this.rules = null, this._messages = ul, this.define(n);
  }
  var t = e.prototype;
  return t.define = function(r) {
    var a = this;
    if (!r)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof r != "object" || Array.isArray(r))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(r).forEach(function(i) {
      var o = r[i];
      a.rules[i] = Array.isArray(o) ? o : [o];
    });
  }, t.messages = function(r) {
    return r && (this._messages = Wc(ll(), r)), this._messages;
  }, t.validate = function(r, a, i) {
    var o = this;
    a === void 0 && (a = {}), i === void 0 && (i = function() {
    });
    var s = r, l = a, u = i;
    if (typeof l == "function" && (u = l, l = {}), !this.rules || Object.keys(this.rules).length === 0)
      return u && u(null, s), Promise.resolve(s);
    function d(g) {
      var m = [], y = {};
      function b(C) {
        if (Array.isArray(C)) {
          var E;
          m = (E = m).concat.apply(E, C);
        } else
          m.push(C);
      }
      for (var x = 0; x < g.length; x++)
        b(g[x]);
      m.length ? (y = sl(m), u(m, y)) : u(null, s);
    }
    if (l.messages) {
      var f = this.messages();
      f === ul && (f = ll()), Wc(f, l.messages), l.messages = f;
    } else
      l.messages = this.messages();
    var v = {}, p = l.keys || Object.keys(this.rules);
    p.forEach(function(g) {
      var m = o.rules[g], y = s[g];
      m.forEach(function(b) {
        var x = b;
        typeof x.transform == "function" && (s === r && (s = Er({}, s)), y = s[g] = x.transform(y)), typeof x == "function" ? x = {
          validator: x
        } : x = Er({}, x), x.validator = o.getValidationMethod(x), x.validator && (x.field = g, x.fullField = x.fullField || g, x.type = o.getType(x), v[g] = v[g] || [], v[g].push({
          rule: x,
          value: y,
          source: s,
          field: g
        }));
      });
    });
    var h = {};
    return Rb(v, l, function(g, m) {
      var y = g.rule, b = (y.type === "object" || y.type === "array") && (typeof y.fields == "object" || typeof y.defaultField == "object");
      b = b && (y.required || !y.required && g.value), y.field = g.field;
      function x(S, w) {
        return Er({}, w, {
          fullField: y.fullField + "." + S,
          fullFields: y.fullFields ? [].concat(y.fullFields, [S]) : [S]
        });
      }
      function C(S) {
        S === void 0 && (S = []);
        var w = Array.isArray(S) ? S : [S];
        !l.suppressWarning && w.length && e.warning("async-validator:", w), w.length && y.message !== void 0 && (w = [].concat(y.message));
        var N = w.map(Uc(y, s));
        if (l.first && N.length)
          return h[y.field] = 1, m(N);
        if (!b)
          m(N);
        else {
          if (y.required && !g.value)
            return y.message !== void 0 ? N = [].concat(y.message).map(Uc(y, s)) : l.error && (N = [l.error(y, hn(l.messages.required, y.field))]), m(N);
          var O = {};
          y.defaultField && Object.keys(g.value).map(function(I) {
            O[I] = y.defaultField;
          }), O = Er({}, O, g.rule.fields);
          var _ = {};
          Object.keys(O).forEach(function(I) {
            var F = O[I], M = Array.isArray(F) ? F : [F];
            _[I] = M.map(x.bind(null, I));
          });
          var $ = new e(_);
          $.messages(l.messages), g.rule.options && (g.rule.options.messages = l.messages, g.rule.options.error = l.error), $.validate(g.value, g.rule.options || l, function(I) {
            var F = [];
            N && N.length && F.push.apply(F, N), I && I.length && F.push.apply(F, I), m(F.length ? F : null);
          });
        }
      }
      var E;
      if (y.asyncValidator)
        E = y.asyncValidator(y, g.value, C, g.source, l);
      else if (y.validator) {
        try {
          E = y.validator(y, g.value, C, g.source, l);
        } catch (S) {
          console.error == null || console.error(S), l.suppressValidatorError || setTimeout(function() {
            throw S;
          }, 0), C(S.message);
        }
        E === !0 ? C() : E === !1 ? C(typeof y.message == "function" ? y.message(y.fullField || y.field) : y.message || (y.fullField || y.field) + " fails") : E instanceof Array ? C(E) : E instanceof Error && C(E.message);
      }
      E && E.then && E.then(function() {
        return C();
      }, function(S) {
        return C(S);
      });
    }, function(g) {
      d(g);
    }, s);
  }, t.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !Ra.hasOwnProperty(r.type))
      throw new Error(hn("Unknown rule type %s", r.type));
    return r.type || "string";
  }, t.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var a = Object.keys(r), i = a.indexOf("message");
    return i !== -1 && a.splice(i, 1), a.length === 1 && a[0] === "required" ? Ra.required : Ra[this.getType(r)] || void 0;
  }, e;
}();
Qa.register = function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Ra[t] = n;
};
Qa.warning = np;
Qa.messages = ul;
Qa.validators = Ra;
var dn = "'${name}' is not a valid ${type}", ap = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: dn,
    method: dn,
    array: dn,
    object: dn,
    number: dn,
    date: dn,
    boolean: dn,
    integer: dn,
    float: dn,
    regexp: dn,
    email: dn,
    url: dn,
    hex: dn
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
};
function ip(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function op(e) {
  if (Array.isArray(e))
    return e;
}
function sp() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gu(e) {
  return op(e) || tp(e) || hu(e) || sp();
}
function lp(e, t, n, r) {
  if (!t.length)
    return n;
  var a = gu(t), i = a[0], o = a.slice(1), s;
  return !e && typeof i == "number" ? s = [] : Array.isArray(e) ? s = pe(e) : s = D({}, e), r && n === void 0 && o.length === 1 ? delete s[i][o[0]] : s[i] = lp(s[i], o, n, r), s;
}
function Qb(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !ip(e, t.slice(0, -1)) ? e : lp(e, t, n, r);
}
function Eo(e) {
  return Array.isArray(e) ? eC(e) : Le(e) === "object" && e !== null ? Zb(e) : e;
}
function Zb(e) {
  if (Object.getPrototypeOf(e) === Object.prototype) {
    var t = {};
    for (var n in e)
      t[n] = Eo(e[n]);
    return t;
  }
  return e;
}
function eC(e) {
  return e.map(function(t) {
    return Eo(t);
  });
}
function zt(e) {
  return al(e);
}
function or(e, t) {
  var n = ip(e, t);
  return n;
}
function ir(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, a = Qb(e, t, n, r);
  return a;
}
function qc(e, t) {
  var n = {};
  return t.forEach(function(r) {
    var a = or(e, r);
    n = ir(n, r, a);
  }), n;
}
function ka(e, t) {
  return e && e.some(function(n) {
    return cp(n, t);
  });
}
function Yc(e) {
  return Le(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function up(e, t) {
  var n = Array.isArray(e) ? pe(e) : D({}, e);
  return t && Object.keys(t).forEach(function(r) {
    var a = n[r], i = t[r], o = Yc(a) && Yc(i);
    n[r] = o ? up(a, i || {}) : Eo(i);
  }), n;
}
function Di(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return n.reduce(function(a, i) {
    return up(a, i);
  }, e);
}
function cp(e, t) {
  return !e || !t || e.length !== t.length ? !1 : e.every(function(n, r) {
    return t[r] === n;
  });
}
function tC(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || Le(e) !== "object" || Le(t) !== "object")
    return !1;
  var n = Object.keys(e), r = Object.keys(t), a = new Set([].concat(n, r));
  return pe(a).every(function(i) {
    var o = e[i], s = t[i];
    return typeof o == "function" && typeof s == "function" ? !0 : o === s;
  });
}
function nC(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && Le(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function Xc(e, t, n) {
  var r = e.length;
  if (t < 0 || t >= r || n < 0 || n >= r)
    return e;
  var a = e[t], i = t - n;
  return i > 0 ? [].concat(pe(e.slice(0, n)), [a], pe(e.slice(n, t)), pe(e.slice(t + 1, r))) : i < 0 ? [].concat(pe(e.slice(0, t)), pe(e.slice(t + 1, n + 1)), [a], pe(e.slice(n + 1, r))) : e;
}
var rC = Qa;
function aC(e, t) {
  return e.replace(/\$\{\w+\}/g, function(n) {
    var r = n.slice(2, -1);
    return t[r];
  });
}
var Jc = "CODE_LOGIC_ERROR";
function cl(e, t, n, r, a) {
  return dl.apply(this, arguments);
}
function dl() {
  return dl = Ja(/* @__PURE__ */ kn().mark(function e(t, n, r, a, i) {
    var o, s, l, u, d, f, v, p, h;
    return kn().wrap(function(m) {
      for (; ; )
        switch (m.prev = m.next) {
          case 0:
            return o = D({}, r), delete o.ruleIndex, o.validator && (s = o.validator, o.validator = function() {
              try {
                return s.apply(void 0, arguments);
              } catch (y) {
                return console.error(y), Promise.reject(Jc);
              }
            }), l = null, o && o.type === "array" && o.defaultField && (l = o.defaultField, delete o.defaultField), u = new rC(P({}, t, [o])), d = Di({}, ap, a.validateMessages), u.messages(d), f = [], m.prev = 9, m.next = 12, Promise.resolve(u.validate(P({}, t, n), D({}, a)));
          case 12:
            m.next = 17;
            break;
          case 14:
            m.prev = 14, m.t0 = m.catch(9), m.t0.errors && (f = m.t0.errors.map(function(y, b) {
              var x = y.message, C = x === Jc ? d.default : x;
              return /* @__PURE__ */ c.isValidElement(C) ? (
                // Wrap ReactNode with `key`
                c.cloneElement(C, {
                  key: "error_".concat(b)
                })
              ) : C;
            }));
          case 17:
            if (!(!f.length && l)) {
              m.next = 22;
              break;
            }
            return m.next = 20, Promise.all(n.map(function(y, b) {
              return cl("".concat(t, ".").concat(b), y, l, a, i);
            }));
          case 20:
            return v = m.sent, m.abrupt("return", v.reduce(function(y, b) {
              return [].concat(pe(y), pe(b));
            }, []));
          case 22:
            return p = D(D({}, r), {}, {
              name: t,
              enum: (r.enum || []).join(", ")
            }, i), h = f.map(function(y) {
              return typeof y == "string" ? aC(y, p) : y;
            }), m.abrupt("return", h);
          case 25:
          case "end":
            return m.stop();
        }
    }, e, null, [[9, 14]]);
  })), dl.apply(this, arguments);
}
function iC(e, t, n, r, a, i) {
  var o = e.join("."), s = n.map(function(d, f) {
    var v = d.validator, p = D(D({}, d), {}, {
      ruleIndex: f
    });
    return v && (p.validator = function(h, g, m) {
      var y = !1, b = function() {
        for (var E = arguments.length, S = new Array(E), w = 0; w < E; w++)
          S[w] = arguments[w];
        Promise.resolve().then(function() {
          Fe(!y, "Your validator function has already return a promise. `callback` will be ignored."), y || m.apply(void 0, S);
        });
      }, x = v(h, g, b);
      y = x && typeof x.then == "function" && typeof x.catch == "function", Fe(y, "`callback` is deprecated. Please return a promise instead."), y && x.then(function() {
        m();
      }).catch(function(C) {
        m(C || " ");
      });
    }), p;
  }).sort(function(d, f) {
    var v = d.warningOnly, p = d.ruleIndex, h = f.warningOnly, g = f.ruleIndex;
    return !!v == !!h ? p - g : v ? 1 : -1;
  }), l;
  if (a === !0)
    l = new Promise(/* @__PURE__ */ function() {
      var d = Ja(/* @__PURE__ */ kn().mark(function f(v, p) {
        var h, g, m;
        return kn().wrap(function(b) {
          for (; ; )
            switch (b.prev = b.next) {
              case 0:
                h = 0;
              case 1:
                if (!(h < s.length)) {
                  b.next = 12;
                  break;
                }
                return g = s[h], b.next = 5, cl(o, t, g, r, i);
              case 5:
                if (m = b.sent, !m.length) {
                  b.next = 9;
                  break;
                }
                return p([{
                  errors: m,
                  rule: g
                }]), b.abrupt("return");
              case 9:
                h += 1, b.next = 1;
                break;
              case 12:
                v([]);
              case 13:
              case "end":
                return b.stop();
            }
        }, f);
      }));
      return function(f, v) {
        return d.apply(this, arguments);
      };
    }());
  else {
    var u = s.map(function(d) {
      return cl(o, t, d, r, i).then(function(f) {
        return {
          errors: f,
          rule: d
        };
      });
    });
    l = (a ? sC(u) : oC(u)).then(function(d) {
      return Promise.reject(d);
    });
  }
  return l.catch(function(d) {
    return d;
  }), l;
}
function oC(e) {
  return fl.apply(this, arguments);
}
function fl() {
  return fl = Ja(/* @__PURE__ */ kn().mark(function e(t) {
    return kn().wrap(function(r) {
      for (; ; )
        switch (r.prev = r.next) {
          case 0:
            return r.abrupt("return", Promise.all(t).then(function(a) {
              var i, o = (i = []).concat.apply(i, pe(a));
              return o;
            }));
          case 1:
          case "end":
            return r.stop();
        }
    }, e);
  })), fl.apply(this, arguments);
}
function sC(e) {
  return vl.apply(this, arguments);
}
function vl() {
  return vl = Ja(/* @__PURE__ */ kn().mark(function e(t) {
    var n;
    return kn().wrap(function(a) {
      for (; ; )
        switch (a.prev = a.next) {
          case 0:
            return n = 0, a.abrupt("return", new Promise(function(i) {
              t.forEach(function(o) {
                o.then(function(s) {
                  s.errors.length && i([s]), n += 1, n === t.length && i([]);
                });
              });
            }));
          case 2:
          case "end":
            return a.stop();
        }
    }, e);
  })), vl.apply(this, arguments);
}
var lC = ["name"], Cn = [];
function Qc(e, t, n, r, a, i) {
  return typeof e == "function" ? e(t, n, "source" in i ? {
    source: i.source
  } : {}) : r !== a;
}
var yu = /* @__PURE__ */ function(e) {
  Gt(n, e);
  var t = qt(n);
  function n(r) {
    var a;
    if (Kt(this, n), a = t.call(this, r), a.state = {
      resetCount: 0
    }, a.cancelRegisterFunc = null, a.mounted = !1, a.touched = !1, a.dirty = !1, a.validatePromise = null, a.prevValidating = void 0, a.errors = Cn, a.warnings = Cn, a.cancelRegister = function() {
      var l = a.props, u = l.preserve, d = l.isListField, f = l.name;
      a.cancelRegisterFunc && a.cancelRegisterFunc(d, u, zt(f)), a.cancelRegisterFunc = null;
    }, a.getNamePath = function() {
      var l = a.props, u = l.name, d = l.fieldContext, f = d.prefixName, v = f === void 0 ? [] : f;
      return u !== void 0 ? [].concat(pe(v), pe(u)) : [];
    }, a.getRules = function() {
      var l = a.props, u = l.rules, d = u === void 0 ? [] : u, f = l.fieldContext;
      return d.map(function(v) {
        return typeof v == "function" ? v(f) : v;
      });
    }, a.refresh = function() {
      a.mounted && a.setState(function(l) {
        var u = l.resetCount;
        return {
          resetCount: u + 1
        };
      });
    }, a.triggerMetaEvent = function(l) {
      var u = a.props.onMetaChange;
      u == null || u(D(D({}, a.getMeta()), {}, {
        destroy: l
      }));
    }, a.onStoreChange = function(l, u, d) {
      var f = a.props, v = f.shouldUpdate, p = f.dependencies, h = p === void 0 ? [] : p, g = f.onReset, m = d.store, y = a.getNamePath(), b = a.getValue(l), x = a.getValue(m), C = u && ka(u, y);
      switch (d.type === "valueUpdate" && d.source === "external" && b !== x && (a.touched = !0, a.dirty = !0, a.validatePromise = null, a.errors = Cn, a.warnings = Cn, a.triggerMetaEvent()), d.type) {
        case "reset":
          if (!u || C) {
            a.touched = !1, a.dirty = !1, a.validatePromise = null, a.errors = Cn, a.warnings = Cn, a.triggerMetaEvent(), g == null || g(), a.refresh();
            return;
          }
          break;
        case "remove": {
          if (v) {
            a.reRender();
            return;
          }
          break;
        }
        case "setField": {
          if (C) {
            var E = d.data;
            "touched" in E && (a.touched = E.touched), "validating" in E && !("originRCField" in E) && (a.validatePromise = E.validating ? Promise.resolve([]) : null), "errors" in E && (a.errors = E.errors || Cn), "warnings" in E && (a.warnings = E.warnings || Cn), a.dirty = !0, a.triggerMetaEvent(), a.reRender();
            return;
          }
          if (v && !y.length && Qc(v, l, m, b, x, d)) {
            a.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var S = h.map(zt);
          if (S.some(function(w) {
            return ka(d.relatedFields, w);
          })) {
            a.reRender();
            return;
          }
          break;
        }
        default:
          if (C || (!h.length || y.length || v) && Qc(v, l, m, b, x, d)) {
            a.reRender();
            return;
          }
          break;
      }
      v === !0 && a.reRender();
    }, a.validateRules = function(l) {
      var u = a.getNamePath(), d = a.getValue(), f = Promise.resolve().then(function() {
        if (!a.mounted)
          return [];
        var v = a.props, p = v.validateFirst, h = p === void 0 ? !1 : p, g = v.messageVariables, m = l || {}, y = m.triggerName, b = a.getRules();
        y && (b = b.filter(function(C) {
          return C;
        }).filter(function(C) {
          var E = C.validateTrigger;
          if (!E)
            return !0;
          var S = al(E);
          return S.includes(y);
        }));
        var x = iC(u, d, b, l, h, g);
        return x.catch(function(C) {
          return C;
        }).then(function() {
          var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Cn;
          if (a.validatePromise === f) {
            var E;
            a.validatePromise = null;
            var S = [], w = [];
            (E = C.forEach) === null || E === void 0 || E.call(C, function(N) {
              var O = N.rule.warningOnly, _ = N.errors, $ = _ === void 0 ? Cn : _;
              O ? w.push.apply(w, pe($)) : S.push.apply(S, pe($));
            }), a.errors = S, a.warnings = w, a.triggerMetaEvent(), a.reRender();
          }
        }), x;
      });
      return a.validatePromise = f, a.dirty = !0, a.errors = Cn, a.warnings = Cn, a.triggerMetaEvent(), a.reRender(), f;
    }, a.isFieldValidating = function() {
      return !!a.validatePromise;
    }, a.isFieldTouched = function() {
      return a.touched;
    }, a.isFieldDirty = function() {
      if (a.dirty || a.props.initialValue !== void 0)
        return !0;
      var l = a.props.fieldContext, u = l.getInternalHooks(Sr), d = u.getInitialValue;
      return d(a.getNamePath()) !== void 0;
    }, a.getErrors = function() {
      return a.errors;
    }, a.getWarnings = function() {
      return a.warnings;
    }, a.isListField = function() {
      return a.props.isListField;
    }, a.isList = function() {
      return a.props.isList;
    }, a.isPreserve = function() {
      return a.props.preserve;
    }, a.getMeta = function() {
      a.prevValidating = a.isFieldValidating();
      var l = {
        touched: a.isFieldTouched(),
        validating: a.prevValidating,
        errors: a.errors,
        warnings: a.warnings,
        name: a.getNamePath()
      };
      return l;
    }, a.getOnlyChild = function(l) {
      if (typeof l == "function") {
        var u = a.getMeta();
        return D(D({}, a.getOnlyChild(l(a.getControlled(), u, a.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var d = yn(l);
      return d.length !== 1 || !/* @__PURE__ */ c.isValidElement(d[0]) ? {
        child: d,
        isFunction: !1
      } : {
        child: d[0],
        isFunction: !1
      };
    }, a.getValue = function(l) {
      var u = a.props.fieldContext.getFieldsValue, d = a.getNamePath();
      return or(l || u(!0), d);
    }, a.getControlled = function() {
      var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = a.props, d = u.trigger, f = u.validateTrigger, v = u.getValueFromEvent, p = u.normalize, h = u.valuePropName, g = u.getValueProps, m = u.fieldContext, y = f !== void 0 ? f : m.validateTrigger, b = a.getNamePath(), x = m.getInternalHooks, C = m.getFieldsValue, E = x(Sr), S = E.dispatch, w = a.getValue(), N = g || function(I) {
        return P({}, h, I);
      }, O = l[d], _ = D(D({}, l), N(w));
      _[d] = function() {
        a.touched = !0, a.dirty = !0, a.triggerMetaEvent();
        for (var I, F = arguments.length, M = new Array(F), V = 0; V < F; V++)
          M[V] = arguments[V];
        v ? I = v.apply(void 0, M) : I = nC.apply(void 0, [h].concat(M)), p && (I = p(I, w, C(!0))), S({
          type: "updateValue",
          namePath: b,
          value: I
        }), O && O.apply(void 0, M);
      };
      var $ = al(y || []);
      return $.forEach(function(I) {
        var F = _[I];
        _[I] = function() {
          F && F.apply(void 0, arguments);
          var M = a.props.rules;
          M && M.length && S({
            type: "validateField",
            namePath: b,
            triggerName: I
          });
        };
      }), _;
    }, r.fieldContext) {
      var i = r.fieldContext.getInternalHooks, o = i(Sr), s = o.initEntityValue;
      s(Ue(a));
    }
    return a;
  }
  return Vt(n, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, i = a.shouldUpdate, o = a.fieldContext;
      if (this.mounted = !0, o) {
        var s = o.getInternalHooks, l = s(Sr), u = l.registerField;
        this.cancelRegisterFunc = u(this);
      }
      i === !0 && this.reRender();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1;
    }
  }, {
    key: "reRender",
    value: function() {
      this.mounted && this.forceUpdate();
    }
  }, {
    key: "render",
    value: function() {
      var a = this.state.resetCount, i = this.props.children, o = this.getOnlyChild(i), s = o.child, l = o.isFunction, u;
      return l ? u = s : /* @__PURE__ */ c.isValidElement(s) ? u = /* @__PURE__ */ c.cloneElement(s, this.getControlled(s.props)) : (Fe(!s, "`children` of Field is not validate ReactElement."), u = s), /* @__PURE__ */ c.createElement(c.Fragment, {
        key: a
      }, u);
    }
  }]), n;
}(c.Component);
yu.contextType = Zr;
yu.defaultProps = {
  trigger: "onChange",
  valuePropName: "value"
};
function dp(e) {
  var t = e.name, n = We(e, lC), r = c.useContext(Zr), a = t !== void 0 ? zt(t) : void 0, i = "keep";
  return n.isListField || (i = "_".concat((a || []).join("_"))), process.env.NODE_ENV !== "production" && n.preserve === !1 && n.isListField && a.length <= 1 && Fe(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ c.createElement(yu, K({
    key: i,
    name: a
  }, n, {
    fieldContext: r
  }));
}
var uC = /* @__PURE__ */ c.createContext(null), cC = function(t) {
  var n = t.name, r = t.initialValue, a = t.children, i = t.rules, o = t.validateTrigger, s = c.useContext(Zr), l = c.useRef({
    keys: [],
    id: 0
  }), u = l.current, d = c.useMemo(function() {
    var h = zt(s.prefixName) || [];
    return [].concat(pe(h), pe(zt(n)));
  }, [s.prefixName, n]), f = c.useMemo(function() {
    return D(D({}, s), {}, {
      prefixName: d
    });
  }, [s, d]), v = c.useMemo(function() {
    return {
      getKey: function(g) {
        var m = d.length, y = g[m];
        return [u.keys[y], g.slice(m + 1)];
      }
    };
  }, [d]);
  if (typeof a != "function")
    return Fe(!1, "Form.List only accepts function as children."), null;
  var p = function(g, m, y) {
    var b = y.source;
    return b === "internal" ? !1 : g !== m;
  };
  return /* @__PURE__ */ c.createElement(uC.Provider, {
    value: v
  }, /* @__PURE__ */ c.createElement(Zr.Provider, {
    value: f
  }, /* @__PURE__ */ c.createElement(dp, {
    name: [],
    shouldUpdate: p,
    rules: i,
    validateTrigger: o,
    initialValue: r,
    isList: !0
  }, function(h, g) {
    var m = h.value, y = m === void 0 ? [] : m, b = h.onChange, x = s.getFieldValue, C = function() {
      var N = x(d || []);
      return N || [];
    }, E = {
      add: function(N, O) {
        var _ = C();
        O >= 0 && O <= _.length ? (u.keys = [].concat(pe(u.keys.slice(0, O)), [u.id], pe(u.keys.slice(O))), b([].concat(pe(_.slice(0, O)), [N], pe(_.slice(O))))) : (process.env.NODE_ENV !== "production" && (O < 0 || O > _.length) && Fe(!1, "The second parameter of the add function should be a valid positive number."), u.keys = [].concat(pe(u.keys), [u.id]), b([].concat(pe(_), [N]))), u.id += 1;
      },
      remove: function(N) {
        var O = C(), _ = new Set(Array.isArray(N) ? N : [N]);
        _.size <= 0 || (u.keys = u.keys.filter(function($, I) {
          return !_.has(I);
        }), b(O.filter(function($, I) {
          return !_.has(I);
        })));
      },
      move: function(N, O) {
        if (N !== O) {
          var _ = C();
          N < 0 || N >= _.length || O < 0 || O >= _.length || (u.keys = Xc(u.keys, N, O), b(Xc(_, N, O)));
        }
      }
    }, S = y || [];
    return Array.isArray(S) || (S = [], process.env.NODE_ENV !== "production" && Fe(!1, "Current value of '".concat(d.join(" > "), "' is not an array type."))), a(S.map(function(w, N) {
      var O = u.keys[N];
      return O === void 0 && (u.keys[N] = u.id, O = u.keys[N], u.id += 1), {
        name: N,
        key: O,
        isListField: !0
      };
    }), E, g);
  })));
};
function dC(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, i, o, s = [], l = !0, u = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n)
          return;
        l = !1;
      } else
        for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0)
          ;
    } catch (d) {
      u = !0, a = d;
    } finally {
      try {
        if (!l && n.return != null && (o = n.return(), Object(o) !== o))
          return;
      } finally {
        if (u)
          throw a;
      }
    }
    return s;
  }
}
function X(e, t) {
  return op(e) || dC(e, t) || hu(e, t) || sp();
}
function fC(e) {
  var t = !1, n = e.length, r = [];
  return e.length ? new Promise(function(a, i) {
    e.forEach(function(o, s) {
      o.catch(function(l) {
        return t = !0, l;
      }).then(function(l) {
        n -= 1, r[s] = l, !(n > 0) && (t && i(r), a(r));
      });
    });
  }) : Promise.resolve([]);
}
var fp = "__@field_split__";
function us(e) {
  return e.map(function(t) {
    return "".concat(Le(t), ":").concat(t);
  }).join(fp);
}
var $r = /* @__PURE__ */ function() {
  function e() {
    Kt(this, e), this.kvs = /* @__PURE__ */ new Map();
  }
  return Vt(e, [{
    key: "set",
    value: function(n, r) {
      this.kvs.set(us(n), r);
    }
  }, {
    key: "get",
    value: function(n) {
      return this.kvs.get(us(n));
    }
  }, {
    key: "update",
    value: function(n, r) {
      var a = this.get(n), i = r(a);
      i ? this.set(n, i) : this.delete(n);
    }
  }, {
    key: "delete",
    value: function(n) {
      this.kvs.delete(us(n));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(n) {
      return pe(this.kvs.entries()).map(function(r) {
        var a = X(r, 2), i = a[0], o = a[1], s = i.split(fp);
        return n({
          key: s.map(function(l) {
            var u = l.match(/^([^:]*):(.*)$/), d = X(u, 3), f = d[1], v = d[2];
            return f === "number" ? Number(v) : v;
          }),
          value: o
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var n = {};
      return this.map(function(r) {
        var a = r.key, i = r.value;
        return n[a.join(".")] = i, null;
      }), n;
    }
  }]), e;
}(), vC = ["name", "errors"], pC = /* @__PURE__ */ Vt(function e(t) {
  var n = this;
  Kt(this, e), this.formHooked = !1, this.forceRootUpdate = void 0, this.subscribable = !0, this.store = {}, this.fieldEntities = [], this.initialValues = {}, this.callbacks = {}, this.validateMessages = null, this.preserve = null, this.lastValidatePromise = null, this.getForm = function() {
    return {
      getFieldValue: n.getFieldValue,
      getFieldsValue: n.getFieldsValue,
      getFieldError: n.getFieldError,
      getFieldWarning: n.getFieldWarning,
      getFieldsError: n.getFieldsError,
      isFieldsTouched: n.isFieldsTouched,
      isFieldTouched: n.isFieldTouched,
      isFieldValidating: n.isFieldValidating,
      isFieldsValidating: n.isFieldsValidating,
      resetFields: n.resetFields,
      setFields: n.setFields,
      setFieldValue: n.setFieldValue,
      setFieldsValue: n.setFieldsValue,
      validateFields: n.validateFields,
      submit: n.submit,
      _init: !0,
      getInternalHooks: n.getInternalHooks
    };
  }, this.getInternalHooks = function(r) {
    return r === Sr ? (n.formHooked = !0, {
      dispatch: n.dispatch,
      initEntityValue: n.initEntityValue,
      registerField: n.registerField,
      useSubscribe: n.useSubscribe,
      setInitialValues: n.setInitialValues,
      destroyForm: n.destroyForm,
      setCallbacks: n.setCallbacks,
      setValidateMessages: n.setValidateMessages,
      getFields: n.getFields,
      setPreserve: n.setPreserve,
      getInitialValue: n.getInitialValue,
      registerWatch: n.registerWatch
    }) : (Fe(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }, this.useSubscribe = function(r) {
    n.subscribable = r;
  }, this.prevWithoutPreserves = null, this.setInitialValues = function(r, a) {
    if (n.initialValues = r || {}, a) {
      var i, o = Di({}, r, n.store);
      (i = n.prevWithoutPreserves) === null || i === void 0 || i.map(function(s) {
        var l = s.key;
        o = ir(o, l, or(r, l));
      }), n.prevWithoutPreserves = null, n.updateStore(o);
    }
  }, this.destroyForm = function() {
    var r = new $r();
    n.getFieldEntities(!0).forEach(function(a) {
      n.isMergedPreserve(a.isPreserve()) || r.set(a.getNamePath(), !0);
    }), n.prevWithoutPreserves = r;
  }, this.getInitialValue = function(r) {
    var a = or(n.initialValues, r);
    return r.length ? Eo(a) : a;
  }, this.setCallbacks = function(r) {
    n.callbacks = r;
  }, this.setValidateMessages = function(r) {
    n.validateMessages = r;
  }, this.setPreserve = function(r) {
    n.preserve = r;
  }, this.watchList = [], this.registerWatch = function(r) {
    return n.watchList.push(r), function() {
      n.watchList = n.watchList.filter(function(a) {
        return a !== r;
      });
    };
  }, this.notifyWatch = function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (n.watchList.length) {
      var a = n.getFieldsValue();
      n.watchList.forEach(function(i) {
        i(a, r);
      });
    }
  }, this.timeoutId = null, this.warningUnhooked = function() {
    process.env.NODE_ENV !== "production" && !n.timeoutId && typeof window < "u" && (n.timeoutId = setTimeout(function() {
      n.timeoutId = null, n.formHooked || Fe(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }, this.updateStore = function(r) {
    n.store = r;
  }, this.getFieldEntities = function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return r ? n.fieldEntities.filter(function(a) {
      return a.getNamePath().length;
    }) : n.fieldEntities;
  }, this.getFieldsMap = function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, a = new $r();
    return n.getFieldEntities(r).forEach(function(i) {
      var o = i.getNamePath();
      a.set(o, i);
    }), a;
  }, this.getFieldEntitiesForNamePathList = function(r) {
    if (!r)
      return n.getFieldEntities(!0);
    var a = n.getFieldsMap(!0);
    return r.map(function(i) {
      var o = zt(i);
      return a.get(o) || {
        INVALIDATE_NAME_PATH: zt(i)
      };
    });
  }, this.getFieldsValue = function(r, a) {
    if (n.warningUnhooked(), r === !0 && !a)
      return n.store;
    var i = n.getFieldEntitiesForNamePathList(Array.isArray(r) ? r : null), o = [];
    return i.forEach(function(s) {
      var l, u = "INVALIDATE_NAME_PATH" in s ? s.INVALIDATE_NAME_PATH : s.getNamePath();
      if (!(!r && (!((l = s.isListField) === null || l === void 0) && l.call(s))))
        if (!a)
          o.push(u);
        else {
          var d = "getMeta" in s ? s.getMeta() : null;
          a(d) && o.push(u);
        }
    }), qc(n.store, o.map(zt));
  }, this.getFieldValue = function(r) {
    n.warningUnhooked();
    var a = zt(r);
    return or(n.store, a);
  }, this.getFieldsError = function(r) {
    n.warningUnhooked();
    var a = n.getFieldEntitiesForNamePathList(r);
    return a.map(function(i, o) {
      return i && !("INVALIDATE_NAME_PATH" in i) ? {
        name: i.getNamePath(),
        errors: i.getErrors(),
        warnings: i.getWarnings()
      } : {
        name: zt(r[o]),
        errors: [],
        warnings: []
      };
    });
  }, this.getFieldError = function(r) {
    n.warningUnhooked();
    var a = zt(r), i = n.getFieldsError([a])[0];
    return i.errors;
  }, this.getFieldWarning = function(r) {
    n.warningUnhooked();
    var a = zt(r), i = n.getFieldsError([a])[0];
    return i.warnings;
  }, this.isFieldsTouched = function() {
    n.warningUnhooked();
    for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
      a[i] = arguments[i];
    var o = a[0], s = a[1], l, u = !1;
    a.length === 0 ? l = null : a.length === 1 ? Array.isArray(o) ? (l = o.map(zt), u = !1) : (l = null, u = o) : (l = o.map(zt), u = s);
    var d = n.getFieldEntities(!0), f = function(m) {
      return m.isFieldTouched();
    };
    if (!l)
      return u ? d.every(f) : d.some(f);
    var v = new $r();
    l.forEach(function(g) {
      v.set(g, []);
    }), d.forEach(function(g) {
      var m = g.getNamePath();
      l.forEach(function(y) {
        y.every(function(b, x) {
          return m[x] === b;
        }) && v.update(y, function(b) {
          return [].concat(pe(b), [g]);
        });
      });
    });
    var p = function(m) {
      return m.some(f);
    }, h = v.map(function(g) {
      var m = g.value;
      return m;
    });
    return u ? h.every(p) : h.some(p);
  }, this.isFieldTouched = function(r) {
    return n.warningUnhooked(), n.isFieldsTouched([r]);
  }, this.isFieldsValidating = function(r) {
    n.warningUnhooked();
    var a = n.getFieldEntities();
    if (!r)
      return a.some(function(o) {
        return o.isFieldValidating();
      });
    var i = r.map(zt);
    return a.some(function(o) {
      var s = o.getNamePath();
      return ka(i, s) && o.isFieldValidating();
    });
  }, this.isFieldValidating = function(r) {
    return n.warningUnhooked(), n.isFieldsValidating([r]);
  }, this.resetWithFieldInitialValue = function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = new $r(), i = n.getFieldEntities(!0);
    i.forEach(function(l) {
      var u = l.props.initialValue, d = l.getNamePath();
      if (u !== void 0) {
        var f = a.get(d) || /* @__PURE__ */ new Set();
        f.add({
          entity: l,
          value: u
        }), a.set(d, f);
      }
    });
    var o = function(u) {
      u.forEach(function(d) {
        var f = d.props.initialValue;
        if (f !== void 0) {
          var v = d.getNamePath(), p = n.getInitialValue(v);
          if (p !== void 0)
            Fe(!1, "Form already set 'initialValues' with path '".concat(v.join("."), "'. Field can not overwrite it."));
          else {
            var h = a.get(v);
            if (h && h.size > 1)
              Fe(!1, "Multiple Field with path '".concat(v.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (h) {
              var g = n.getFieldValue(v);
              (!r.skipExist || g === void 0) && n.updateStore(ir(n.store, v, pe(h)[0].value));
            }
          }
        }
      });
    }, s;
    r.entities ? s = r.entities : r.namePathList ? (s = [], r.namePathList.forEach(function(l) {
      var u = a.get(l);
      if (u) {
        var d;
        (d = s).push.apply(d, pe(pe(u).map(function(f) {
          return f.entity;
        })));
      }
    })) : s = i, o(s);
  }, this.resetFields = function(r) {
    n.warningUnhooked();
    var a = n.store;
    if (!r) {
      n.updateStore(Di({}, n.initialValues)), n.resetWithFieldInitialValue(), n.notifyObservers(a, null, {
        type: "reset"
      }), n.notifyWatch();
      return;
    }
    var i = r.map(zt);
    i.forEach(function(o) {
      var s = n.getInitialValue(o);
      n.updateStore(ir(n.store, o, s));
    }), n.resetWithFieldInitialValue({
      namePathList: i
    }), n.notifyObservers(a, i, {
      type: "reset"
    }), n.notifyWatch(i);
  }, this.setFields = function(r) {
    n.warningUnhooked();
    var a = n.store, i = [];
    r.forEach(function(o) {
      var s = o.name;
      o.errors;
      var l = We(o, vC), u = zt(s);
      i.push(u), "value" in l && n.updateStore(ir(n.store, u, l.value)), n.notifyObservers(a, [u], {
        type: "setField",
        data: o
      });
    }), n.notifyWatch(i);
  }, this.getFields = function() {
    var r = n.getFieldEntities(!0), a = r.map(function(i) {
      var o = i.getNamePath(), s = i.getMeta(), l = D(D({}, s), {}, {
        name: o,
        value: n.getFieldValue(o)
      });
      return Object.defineProperty(l, "originRCField", {
        value: !0
      }), l;
    });
    return a;
  }, this.initEntityValue = function(r) {
    var a = r.props.initialValue;
    if (a !== void 0) {
      var i = r.getNamePath(), o = or(n.store, i);
      o === void 0 && n.updateStore(ir(n.store, i, a));
    }
  }, this.isMergedPreserve = function(r) {
    var a = r !== void 0 ? r : n.preserve;
    return a ?? !0;
  }, this.registerField = function(r) {
    n.fieldEntities.push(r);
    var a = r.getNamePath();
    if (n.notifyWatch([a]), r.props.initialValue !== void 0) {
      var i = n.store;
      n.resetWithFieldInitialValue({
        entities: [r],
        skipExist: !0
      }), n.notifyObservers(i, [r.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(o, s) {
      var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (n.fieldEntities = n.fieldEntities.filter(function(f) {
        return f !== r;
      }), !n.isMergedPreserve(s) && (!o || l.length > 1)) {
        var u = o ? void 0 : n.getInitialValue(a);
        if (a.length && n.getFieldValue(a) !== u && n.fieldEntities.every(function(f) {
          return (
            // Only reset when no namePath exist
            !cp(f.getNamePath(), a)
          );
        })) {
          var d = n.store;
          n.updateStore(ir(d, a, u, !0)), n.notifyObservers(d, [a], {
            type: "remove"
          }), n.triggerDependenciesUpdate(d, a);
        }
      }
      n.notifyWatch([a]);
    };
  }, this.dispatch = function(r) {
    switch (r.type) {
      case "updateValue": {
        var a = r.namePath, i = r.value;
        n.updateValue(a, i);
        break;
      }
      case "validateField": {
        var o = r.namePath, s = r.triggerName;
        n.validateFields([o], {
          triggerName: s
        });
        break;
      }
    }
  }, this.notifyObservers = function(r, a, i) {
    if (n.subscribable) {
      var o = D(D({}, i), {}, {
        store: n.getFieldsValue(!0)
      });
      n.getFieldEntities().forEach(function(s) {
        var l = s.onStoreChange;
        l(r, a, o);
      });
    } else
      n.forceRootUpdate();
  }, this.triggerDependenciesUpdate = function(r, a) {
    var i = n.getDependencyChildrenFields(a);
    return i.length && n.validateFields(i), n.notifyObservers(r, i, {
      type: "dependenciesUpdate",
      relatedFields: [a].concat(pe(i))
    }), i;
  }, this.updateValue = function(r, a) {
    var i = zt(r), o = n.store;
    n.updateStore(ir(n.store, i, a)), n.notifyObservers(o, [i], {
      type: "valueUpdate",
      source: "internal"
    }), n.notifyWatch([i]);
    var s = n.triggerDependenciesUpdate(o, i), l = n.callbacks.onValuesChange;
    if (l) {
      var u = qc(n.store, [i]);
      l(u, n.getFieldsValue());
    }
    n.triggerOnFieldsChange([i].concat(pe(s)));
  }, this.setFieldsValue = function(r) {
    n.warningUnhooked();
    var a = n.store;
    if (r) {
      var i = Di(n.store, r);
      n.updateStore(i);
    }
    n.notifyObservers(a, null, {
      type: "valueUpdate",
      source: "external"
    }), n.notifyWatch();
  }, this.setFieldValue = function(r, a) {
    n.setFields([{
      name: r,
      value: a
    }]);
  }, this.getDependencyChildrenFields = function(r) {
    var a = /* @__PURE__ */ new Set(), i = [], o = new $r();
    n.getFieldEntities().forEach(function(l) {
      var u = l.props.dependencies;
      (u || []).forEach(function(d) {
        var f = zt(d);
        o.update(f, function() {
          var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return v.add(l), v;
        });
      });
    });
    var s = function l(u) {
      var d = o.get(u) || /* @__PURE__ */ new Set();
      d.forEach(function(f) {
        if (!a.has(f)) {
          a.add(f);
          var v = f.getNamePath();
          f.isFieldDirty() && v.length && (i.push(v), l(v));
        }
      });
    };
    return s(r), i;
  }, this.triggerOnFieldsChange = function(r, a) {
    var i = n.callbacks.onFieldsChange;
    if (i) {
      var o = n.getFields();
      if (a) {
        var s = new $r();
        a.forEach(function(u) {
          var d = u.name, f = u.errors;
          s.set(d, f);
        }), o.forEach(function(u) {
          u.errors = s.get(u.name) || u.errors;
        });
      }
      var l = o.filter(function(u) {
        var d = u.name;
        return ka(r, d);
      });
      i(l, o);
    }
  }, this.validateFields = function(r, a) {
    n.warningUnhooked();
    var i = !!r, o = i ? r.map(zt) : [], s = [];
    n.getFieldEntities(!0).forEach(function(d) {
      if (i || o.push(d.getNamePath()), a != null && a.recursive && i) {
        var f = d.getNamePath();
        // nameList[i] === undefined 说明是以 nameList 开头的
        // ['name'] -> ['name','list']
        f.every(function(h, g) {
          return r[g] === h || r[g] === void 0;
        }) && o.push(f);
      }
      if (!(!d.props.rules || !d.props.rules.length)) {
        var v = d.getNamePath();
        if (!i || ka(o, v)) {
          var p = d.validateRules(D({
            validateMessages: D(D({}, ap), n.validateMessages)
          }, a));
          s.push(p.then(function() {
            return {
              name: v,
              errors: [],
              warnings: []
            };
          }).catch(function(h) {
            var g, m = [], y = [];
            return (g = h.forEach) === null || g === void 0 || g.call(h, function(b) {
              var x = b.rule.warningOnly, C = b.errors;
              x ? y.push.apply(y, pe(C)) : m.push.apply(m, pe(C));
            }), m.length ? Promise.reject({
              name: v,
              errors: m,
              warnings: y
            }) : {
              name: v,
              errors: m,
              warnings: y
            };
          }));
        }
      }
    });
    var l = fC(s);
    n.lastValidatePromise = l, l.catch(function(d) {
      return d;
    }).then(function(d) {
      var f = d.map(function(v) {
        var p = v.name;
        return p;
      });
      n.notifyObservers(n.store, f, {
        type: "validateFinish"
      }), n.triggerOnFieldsChange(f, d);
    });
    var u = l.then(function() {
      return n.lastValidatePromise === l ? Promise.resolve(n.getFieldsValue(o)) : Promise.reject([]);
    }).catch(function(d) {
      var f = d.filter(function(v) {
        return v && v.errors.length;
      });
      return Promise.reject({
        values: n.getFieldsValue(o),
        errorFields: f,
        outOfDate: n.lastValidatePromise !== l
      });
    });
    return u.catch(function(d) {
      return d;
    }), u;
  }, this.submit = function() {
    n.warningUnhooked(), n.validateFields().then(function(r) {
      var a = n.callbacks.onFinish;
      if (a)
        try {
          a(r);
        } catch (i) {
          console.error(i);
        }
    }).catch(function(r) {
      var a = n.callbacks.onFinishFailed;
      a && a(r);
    });
  }, this.forceRootUpdate = t;
});
function vp(e) {
  var t = c.useRef(), n = c.useState({}), r = X(n, 2), a = r[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var i = function() {
        a({});
      }, o = new pC(i);
      t.current = o.getForm();
    }
  return [t.current];
}
var pl = /* @__PURE__ */ c.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), mC = function(t) {
  var n = t.validateMessages, r = t.onFormChange, a = t.onFormFinish, i = t.children, o = c.useContext(pl), s = c.useRef({});
  return /* @__PURE__ */ c.createElement(pl.Provider, {
    value: D(D({}, o), {}, {
      validateMessages: D(D({}, o.validateMessages), n),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(u, d) {
        r && r(u, {
          changedFields: d,
          forms: s.current
        }), o.triggerFormChange(u, d);
      },
      triggerFormFinish: function(u, d) {
        a && a(u, {
          values: d,
          forms: s.current
        }), o.triggerFormFinish(u, d);
      },
      registerForm: function(u, d) {
        u && (s.current = D(D({}, s.current), {}, P({}, u, d))), o.registerForm(u, d);
      },
      unregisterForm: function(u) {
        var d = D({}, s.current);
        delete d[u], s.current = d, o.unregisterForm(u);
      }
    })
  }, i);
}, hC = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"], gC = function(t, n) {
  var r = t.name, a = t.initialValues, i = t.fields, o = t.form, s = t.preserve, l = t.children, u = t.component, d = u === void 0 ? "form" : u, f = t.validateMessages, v = t.validateTrigger, p = v === void 0 ? "onChange" : v, h = t.onValuesChange, g = t.onFieldsChange, m = t.onFinish, y = t.onFinishFailed, b = We(t, hC), x = c.useContext(pl), C = vp(o), E = X(C, 1), S = E[0], w = S.getInternalHooks(Sr), N = w.useSubscribe, O = w.setInitialValues, _ = w.setCallbacks, $ = w.setValidateMessages, I = w.setPreserve, F = w.destroyForm;
  c.useImperativeHandle(n, function() {
    return S;
  }), c.useEffect(function() {
    return x.registerForm(r, S), function() {
      x.unregisterForm(r);
    };
  }, [x, S, r]), $(D(D({}, x.validateMessages), f)), _({
    onValuesChange: h,
    onFieldsChange: function(B) {
      if (x.triggerFormChange(r, B), g) {
        for (var G = arguments.length, W = new Array(G > 1 ? G - 1 : 0), j = 1; j < G; j++)
          W[j - 1] = arguments[j];
        g.apply(void 0, [B].concat(W));
      }
    },
    onFinish: function(B) {
      x.triggerFormFinish(r, B), m && m(B);
    },
    onFinishFailed: y
  }), I(s);
  var M = c.useRef(null);
  O(a, !M.current), M.current || (M.current = !0), c.useEffect(
    function() {
      return F;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var V, T = typeof l == "function";
  if (T) {
    var R = S.getFieldsValue(!0);
    V = l(R, S);
  } else
    V = l;
  N(!T);
  var k = c.useRef();
  c.useEffect(function() {
    tC(k.current || [], i || []) || S.setFields(i || []), k.current = i;
  }, [i, S]);
  var A = c.useMemo(function() {
    return D(D({}, S), {}, {
      validateTrigger: p
    });
  }, [S, p]), U = /* @__PURE__ */ c.createElement(Zr.Provider, {
    value: A
  }, V);
  return d === !1 ? U : /* @__PURE__ */ c.createElement(d, K({}, b, {
    onSubmit: function(B) {
      B.preventDefault(), B.stopPropagation(), S.submit();
    },
    onReset: function(B) {
      var G;
      B.preventDefault(), S.resetFields(), (G = b.onReset) === null || G === void 0 || G.call(b, B);
    }
  }), U);
};
function Zc(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var yC = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), n = De(t);
  Fe(n.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function bC() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0], a = r === void 0 ? [] : r, i = t[1], o = Ut(), s = X(o, 2), l = s[0], u = s[1], d = Zt(function() {
    return Zc(l);
  }, [l]), f = De(d);
  f.current = d;
  var v = en(Zr), p = i || v, h = p && p._init;
  process.env.NODE_ENV !== "production" && Fe(t.length === 2 ? i ? h : !0 : h, "useWatch requires a form instance since it can not auto detect from context.");
  var g = zt(a), m = De(g);
  return m.current = g, yC(g), Dt(
    function() {
      if (h) {
        var y = p.getFieldsValue, b = p.getInternalHooks, x = b(Sr), C = x.registerWatch, E = C(function(w) {
          var N = or(w, m.current), O = Zc(N);
          f.current !== O && (f.current = O, u(N));
        }), S = or(y(), m.current);
        return u(S), E;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [h]
  ), l;
}
var CC = /* @__PURE__ */ c.forwardRef(gC), Za = CC;
Za.FormProvider = mC;
Za.Field = dp;
Za.List = cC;
Za.useForm = vp;
Za.useWatch = bC;
function xC() {
}
var pp = xC;
process.env.NODE_ENV !== "production" && (pp = function(t, n, r) {
  Fe(t, "[antd: ".concat(n, "] ").concat(r)), process.env.NODE_ENV === "test" && Hv();
});
const Nt = pp, mp = {
  // Options.jsx
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination.jsx
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
};
var SC = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
}, EC = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
};
const hp = EC;
var wC = {
  lang: K({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, SC),
  timePickerLocale: K({}, hp)
};
const ed = wC;
var fn = "${label} is not a valid ${type}", NC = {
  locale: "en",
  Pagination: mp,
  DatePicker: ed,
  TimePicker: hp,
  Calendar: ed,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: fn,
        method: fn,
        array: fn,
        object: fn,
        number: fn,
        date: fn,
        boolean: fn,
        integer: fn,
        float: fn,
        regexp: fn,
        email: fn,
        url: fn,
        hex: fn
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  }
};
const ja = NC;
var OC = /* @__PURE__ */ Ga(void 0);
const PC = OC;
var RC = function(t) {
  var n = t.componentName, r = n === void 0 ? "global" : n, a = t.defaultLocale, i = t.children, o = c.useContext(PC), s = c.useMemo(function() {
    var u, d = a || ja[r], f = (u = o == null ? void 0 : o[r]) !== null && u !== void 0 ? u : {};
    return K(K({}, d instanceof Function ? d() : d), f || {});
  }, [r, a, o]), l = c.useMemo(function() {
    var u = o && o.locale;
    return o && o.exist && !u ? ja.locale : u;
  }, [o]);
  return i(s, l, o);
};
const wo = RC;
function wn(e, t) {
  kC(e) && (e = "100%");
  var n = TC(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function kC(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function TC(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function _C(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function mi(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function cs(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function IC(e, t, n) {
  return {
    r: wn(e, 255) * 255,
    g: wn(t, 255) * 255,
    b: wn(n, 255) * 255
  };
}
function ds(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function FC(e, t, n) {
  var r, a, i;
  if (e = wn(e, 360), t = wn(t, 100), n = wn(n, 100), t === 0)
    a = n, i = n, r = n;
  else {
    var o = n < 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - o;
    r = ds(s, o, e + 1 / 3), a = ds(s, o, e), i = ds(s, o, e - 1 / 3);
  }
  return { r: r * 255, g: a * 255, b: i * 255 };
}
function MC(e, t, n) {
  e = wn(e, 255), t = wn(t, 255), n = wn(n, 255);
  var r = Math.max(e, t, n), a = Math.min(e, t, n), i = 0, o = r, s = r - a, l = r === 0 ? 0 : s / r;
  if (r === a)
    i = 0;
  else {
    switch (r) {
      case e:
        i = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / s + 2;
        break;
      case n:
        i = (e - t) / s + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: l, v: o };
}
function $C(e, t, n) {
  e = wn(e, 360) * 6, t = wn(t, 100), n = wn(n, 100);
  var r = Math.floor(e), a = e - r, i = n * (1 - t), o = n * (1 - a * t), s = n * (1 - (1 - a) * t), l = r % 6, u = [n, o, i, i, s, n][l], d = [s, n, n, o, i, i][l], f = [i, i, s, n, n, o][l];
  return { r: u * 255, g: d * 255, b: f * 255 };
}
function DC(e, t, n, r) {
  var a = [
    cs(Math.round(e).toString(16)),
    cs(Math.round(t).toString(16)),
    cs(Math.round(n).toString(16))
  ];
  return r && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function td(e) {
  return vn(e) / 255;
}
function vn(e) {
  return parseInt(e, 16);
}
var nd = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function ba(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, a = null, i = null, o = !1, s = !1;
  return typeof e == "string" && (e = KC(e)), typeof e == "object" && (qn(e.r) && qn(e.g) && qn(e.b) ? (t = IC(e.r, e.g, e.b), o = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : qn(e.h) && qn(e.s) && qn(e.v) ? (r = mi(e.s), a = mi(e.v), t = $C(e.h, r, a), o = !0, s = "hsv") : qn(e.h) && qn(e.s) && qn(e.l) && (r = mi(e.s), i = mi(e.l), t = FC(e.h, r, i), o = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = _C(n), {
    ok: o,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var AC = "[-\\+]?\\d+%?", LC = "[-\\+]?\\d*\\.\\d+%?", sr = "(?:".concat(LC, ")|(?:").concat(AC, ")"), fs = "[\\s|\\(]+(".concat(sr, ")[,|\\s]+(").concat(sr, ")[,|\\s]+(").concat(sr, ")\\s*\\)?"), vs = "[\\s|\\(]+(".concat(sr, ")[,|\\s]+(").concat(sr, ")[,|\\s]+(").concat(sr, ")[,|\\s]+(").concat(sr, ")\\s*\\)?"), On = {
  CSS_UNIT: new RegExp(sr),
  rgb: new RegExp("rgb" + fs),
  rgba: new RegExp("rgba" + vs),
  hsl: new RegExp("hsl" + fs),
  hsla: new RegExp("hsla" + vs),
  hsv: new RegExp("hsv" + fs),
  hsva: new RegExp("hsva" + vs),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function KC(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (nd[e])
    e = nd[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = On.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = On.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = On.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = On.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = On.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = On.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = On.hex8.exec(e), n ? {
    r: vn(n[1]),
    g: vn(n[2]),
    b: vn(n[3]),
    a: td(n[4]),
    format: t ? "name" : "hex8"
  } : (n = On.hex6.exec(e), n ? {
    r: vn(n[1]),
    g: vn(n[2]),
    b: vn(n[3]),
    format: t ? "name" : "hex"
  } : (n = On.hex4.exec(e), n ? {
    r: vn(n[1] + n[1]),
    g: vn(n[2] + n[2]),
    b: vn(n[3] + n[3]),
    a: td(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = On.hex3.exec(e), n ? {
    r: vn(n[1] + n[1]),
    g: vn(n[2] + n[2]),
    b: vn(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function qn(e) {
  return !!On.CSS_UNIT.exec(String(e));
}
var hi = 2, rd = 0.16, VC = 0.05, zC = 0.05, jC = 0.15, gp = 5, yp = 4, HC = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function ad(e) {
  var t = e.r, n = e.g, r = e.b, a = MC(t, n, r);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function gi(e) {
  var t = e.r, n = e.g, r = e.b;
  return "#".concat(DC(t, n, r, !1));
}
function BC(e, t, n) {
  var r = n / 100, a = {
    r: (t.r - e.r) * r + e.r,
    g: (t.g - e.g) * r + e.g,
    b: (t.b - e.b) * r + e.b
  };
  return a;
}
function id(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - hi * t : Math.round(e.h) + hi * t : r = n ? Math.round(e.h) + hi * t : Math.round(e.h) - hi * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function od(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - rd * t : t === yp ? r = e.s + rd : r = e.s + VC * t, r > 1 && (r = 1), n && t === gp && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function sd(e, t, n) {
  var r;
  return n ? r = e.v + zC * t : r = e.v - jC * t, r > 1 && (r = 1), Number(r.toFixed(2));
}
function ml(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = ba(e), a = gp; a > 0; a -= 1) {
    var i = ad(r), o = gi(ba({
      h: id(i, a, !0),
      s: od(i, a, !0),
      v: sd(i, a, !0)
    }));
    n.push(o);
  }
  n.push(gi(r));
  for (var s = 1; s <= yp; s += 1) {
    var l = ad(r), u = gi(ba({
      h: id(l, s),
      s: od(l, s),
      v: sd(l, s)
    }));
    n.push(u);
  }
  return t.theme === "dark" ? HC.map(function(d) {
    var f = d.index, v = d.opacity, p = gi(BC(ba(t.backgroundColor || "#141414"), ba(n[f]), v * 100));
    return p;
  }) : n;
}
var ps = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, ms = {}, hs = {};
Object.keys(ps).forEach(function(e) {
  ms[e] = ml(ps[e]), ms[e].primary = ms[e][5], hs[e] = ml(ps[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), hs[e].primary = hs[e][5];
});
function jn() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Ta(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var n = t; n; ) {
    if (n === e)
      return !0;
    n = n.parentNode;
  }
  return !1;
}
var ld = "data-rc-order", ud = "data-rc-priority", UC = "rc-util-key", hl = /* @__PURE__ */ new Map();
function bp() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : UC;
}
function bu(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function WC(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Cp(e) {
  return Array.from((hl.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function xp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!jn())
    return null;
  var n = t.csp, r = t.prepend, a = t.priority, i = a === void 0 ? 0 : a, o = WC(r), s = o === "prependQueue", l = document.createElement("style");
  l.setAttribute(ld, o), s && i && l.setAttribute(ud, "".concat(i)), n != null && n.nonce && (l.nonce = n == null ? void 0 : n.nonce), l.innerHTML = e;
  var u = bu(t), d = u.firstChild;
  if (r) {
    if (s) {
      var f = Cp(u).filter(function(v) {
        if (!["prepend", "prependQueue"].includes(v.getAttribute(ld)))
          return !1;
        var p = Number(v.getAttribute(ud) || 0);
        return i >= p;
      });
      if (f.length)
        return u.insertBefore(l, f[f.length - 1].nextSibling), l;
    }
    u.insertBefore(l, d);
  } else
    u.appendChild(l);
  return l;
}
function GC(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = bu(t);
  return Cp(n).find(function(r) {
    return r.getAttribute(bp(t)) === e;
  });
}
function qC(e, t) {
  var n = hl.get(e);
  if (!n || !Ta(document, n)) {
    var r = xp("", t), a = r.parentNode;
    hl.set(e, a), e.removeChild(r);
  }
}
function Sp(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = bu(n);
  qC(r, n);
  var a = GC(t, n);
  if (a) {
    var i, o;
    if ((i = n.csp) !== null && i !== void 0 && i.nonce && a.nonce !== ((o = n.csp) === null || o === void 0 ? void 0 : o.nonce)) {
      var s;
      a.nonce = (s = n.csp) === null || s === void 0 ? void 0 : s.nonce;
    }
    return a.innerHTML !== e && (a.innerHTML = e), a;
  }
  var l = xp(e, n);
  return l.setAttribute(bp(n), t), l;
}
var YC = typeof di == "object" && di && di.Object === Object && di, Ep = YC, XC = Ep, JC = typeof self == "object" && self && self.Object === Object && self, QC = XC || JC || Function("return this")(), Hn = QC, ZC = Hn, ex = ZC.Symbol, No = ex;
function tx(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var nx = tx, rx = Array.isArray, Oo = rx, cd = No, wp = Object.prototype, ax = wp.hasOwnProperty, ix = wp.toString, Ca = cd ? cd.toStringTag : void 0;
function ox(e) {
  var t = ax.call(e, Ca), n = e[Ca];
  try {
    e[Ca] = void 0;
    var r = !0;
  } catch {
  }
  var a = ix.call(e);
  return r && (t ? e[Ca] = n : delete e[Ca]), a;
}
var sx = ox, lx = Object.prototype, ux = lx.toString;
function cx(e) {
  return ux.call(e);
}
var dx = cx, dd = No, fx = sx, vx = dx, px = "[object Null]", mx = "[object Undefined]", fd = dd ? dd.toStringTag : void 0;
function hx(e) {
  return e == null ? e === void 0 ? mx : px : fd && fd in Object(e) ? fx(e) : vx(e);
}
var ei = hx;
function gx(e) {
  return e != null && typeof e == "object";
}
var ti = gx, yx = ei, bx = ti, Cx = "[object Symbol]";
function xx(e) {
  return typeof e == "symbol" || bx(e) && yx(e) == Cx;
}
var Np = xx, vd = No, Sx = nx, Ex = Oo, wx = Np, Nx = 1 / 0, pd = vd ? vd.prototype : void 0, md = pd ? pd.toString : void 0;
function Op(e) {
  if (typeof e == "string")
    return e;
  if (Ex(e))
    return Sx(e, Op) + "";
  if (wx(e))
    return md ? md.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Nx ? "-0" : t;
}
var Ox = Op, Px = Ox;
function Rx(e) {
  return e == null ? "" : Px(e);
}
var Po = Rx;
function kx(e, t, n) {
  var r = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), n = n > a ? a : n, n < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var i = Array(a); ++r < a; )
    i[r] = e[r + t];
  return i;
}
var Tx = kx, _x = Tx;
function Ix(e, t, n) {
  var r = e.length;
  return n = n === void 0 ? r : n, !t && n >= r ? e : _x(e, t, n);
}
var Fx = Ix, Mx = "\\ud800-\\udfff", $x = "\\u0300-\\u036f", Dx = "\\ufe20-\\ufe2f", Ax = "\\u20d0-\\u20ff", Lx = $x + Dx + Ax, Kx = "\\ufe0e\\ufe0f", Vx = "\\u200d", zx = RegExp("[" + Vx + Mx + Lx + Kx + "]");
function jx(e) {
  return zx.test(e);
}
var Pp = jx;
function Hx(e) {
  return e.split("");
}
var Bx = Hx, Rp = "\\ud800-\\udfff", Ux = "\\u0300-\\u036f", Wx = "\\ufe20-\\ufe2f", Gx = "\\u20d0-\\u20ff", qx = Ux + Wx + Gx, Yx = "\\ufe0e\\ufe0f", Xx = "[" + Rp + "]", gl = "[" + qx + "]", yl = "\\ud83c[\\udffb-\\udfff]", Jx = "(?:" + gl + "|" + yl + ")", kp = "[^" + Rp + "]", Tp = "(?:\\ud83c[\\udde6-\\uddff]){2}", _p = "[\\ud800-\\udbff][\\udc00-\\udfff]", Qx = "\\u200d", Ip = Jx + "?", Fp = "[" + Yx + "]?", Zx = "(?:" + Qx + "(?:" + [kp, Tp, _p].join("|") + ")" + Fp + Ip + ")*", e1 = Fp + Ip + Zx, t1 = "(?:" + [kp + gl + "?", gl, Tp, _p, Xx].join("|") + ")", n1 = RegExp(yl + "(?=" + yl + ")|" + t1 + e1, "g");
function r1(e) {
  return e.match(n1) || [];
}
var a1 = r1, i1 = Bx, o1 = Pp, s1 = a1;
function l1(e) {
  return o1(e) ? s1(e) : i1(e);
}
var u1 = l1, c1 = Fx, d1 = Pp, f1 = u1, v1 = Po;
function p1(e) {
  return function(t) {
    t = v1(t);
    var n = d1(t) ? f1(t) : void 0, r = n ? n[0] : t.charAt(0), a = n ? c1(n, 1).join("") : t.slice(1);
    return r[e]() + a;
  };
}
var m1 = p1, h1 = m1, g1 = h1("toUpperCase"), y1 = g1, b1 = Po, C1 = y1;
function x1(e) {
  return C1(b1(e).toLowerCase());
}
var S1 = x1;
function E1(e, t, n, r) {
  var a = -1, i = e == null ? 0 : e.length;
  for (r && i && (n = e[++a]); ++a < i; )
    n = t(n, e[a], a, e);
  return n;
}
var w1 = E1;
function N1(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var O1 = N1, P1 = O1, R1 = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "s"
}, k1 = P1(R1), T1 = k1, _1 = T1, I1 = Po, F1 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, M1 = "\\u0300-\\u036f", $1 = "\\ufe20-\\ufe2f", D1 = "\\u20d0-\\u20ff", A1 = M1 + $1 + D1, L1 = "[" + A1 + "]", K1 = RegExp(L1, "g");
function V1(e) {
  return e = I1(e), e && e.replace(F1, _1).replace(K1, "");
}
var z1 = V1, j1 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function H1(e) {
  return e.match(j1) || [];
}
var B1 = H1, U1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function W1(e) {
  return U1.test(e);
}
var G1 = W1, Mp = "\\ud800-\\udfff", q1 = "\\u0300-\\u036f", Y1 = "\\ufe20-\\ufe2f", X1 = "\\u20d0-\\u20ff", J1 = q1 + Y1 + X1, $p = "\\u2700-\\u27bf", Dp = "a-z\\xdf-\\xf6\\xf8-\\xff", Q1 = "\\xac\\xb1\\xd7\\xf7", Z1 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", eS = "\\u2000-\\u206f", tS = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ap = "A-Z\\xc0-\\xd6\\xd8-\\xde", nS = "\\ufe0e\\ufe0f", Lp = Q1 + Z1 + eS + tS, Kp = "['’]", hd = "[" + Lp + "]", rS = "[" + J1 + "]", Vp = "\\d+", aS = "[" + $p + "]", zp = "[" + Dp + "]", jp = "[^" + Mp + Lp + Vp + $p + Dp + Ap + "]", iS = "\\ud83c[\\udffb-\\udfff]", oS = "(?:" + rS + "|" + iS + ")", sS = "[^" + Mp + "]", Hp = "(?:\\ud83c[\\udde6-\\uddff]){2}", Bp = "[\\ud800-\\udbff][\\udc00-\\udfff]", zr = "[" + Ap + "]", lS = "\\u200d", gd = "(?:" + zp + "|" + jp + ")", uS = "(?:" + zr + "|" + jp + ")", yd = "(?:" + Kp + "(?:d|ll|m|re|s|t|ve))?", bd = "(?:" + Kp + "(?:D|LL|M|RE|S|T|VE))?", Up = oS + "?", Wp = "[" + nS + "]?", cS = "(?:" + lS + "(?:" + [sS, Hp, Bp].join("|") + ")" + Wp + Up + ")*", dS = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", fS = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", vS = Wp + Up + cS, pS = "(?:" + [aS, Hp, Bp].join("|") + ")" + vS, mS = RegExp([
  zr + "?" + zp + "+" + yd + "(?=" + [hd, zr, "$"].join("|") + ")",
  uS + "+" + bd + "(?=" + [hd, zr + gd, "$"].join("|") + ")",
  zr + "?" + gd + "+" + yd,
  zr + "+" + bd,
  fS,
  dS,
  Vp,
  pS
].join("|"), "g");
function hS(e) {
  return e.match(mS) || [];
}
var gS = hS, yS = B1, bS = G1, CS = Po, xS = gS;
function SS(e, t, n) {
  return e = CS(e), t = n ? void 0 : t, t === void 0 ? bS(e) ? xS(e) : yS(e) : e.match(t) || [];
}
var ES = SS, wS = w1, NS = z1, OS = ES, PS = "['’]", RS = RegExp(PS, "g");
function kS(e) {
  return function(t) {
    return wS(OS(NS(t).replace(RS, "")), e, "");
  };
}
var TS = kS, _S = S1, IS = TS, FS = IS(function(e, t, n) {
  return t = t.toLowerCase(), e + (n ? _S(t) : t);
}), MS = FS;
const $S = /* @__PURE__ */ qa(MS);
function DS(e, t) {
  Fe(e, "[@ant-design/icons] ".concat(t));
}
function Cd(e) {
  return Le(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (Le(e.icon) === "object" || typeof e.icon == "function");
}
function xd() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[$S(n)] = r;
    }
    return t;
  }, {});
}
function bl(e, t, n) {
  return n ? /* @__PURE__ */ be.createElement(e.tag, D(D({
    key: t
  }, xd(e.attrs)), n), (e.children || []).map(function(r, a) {
    return bl(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : /* @__PURE__ */ be.createElement(e.tag, D({
    key: t
  }, xd(e.attrs)), (e.children || []).map(function(r, a) {
    return bl(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function Gp(e) {
  return ml(e)[0];
}
function qp(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var AS = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, LS = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : AS, n = en(ep), r = n.csp;
  Dt(function() {
    Sp(t, "@ant-design-icons", {
      prepend: !0,
      csp: r
    });
  }, []);
}, KS = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], _a = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function VS(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  _a.primaryColor = t, _a.secondaryColor = n || Gp(t), _a.calculated = !!n;
}
function zS() {
  return D({}, _a);
}
var Ro = function(t) {
  var n = t.icon, r = t.className, a = t.onClick, i = t.style, o = t.primaryColor, s = t.secondaryColor, l = We(t, KS), u = _a;
  if (o && (u = {
    primaryColor: o,
    secondaryColor: s || Gp(o)
  }), LS(), DS(Cd(n), "icon should be icon definiton, but got ".concat(n)), !Cd(n))
    return null;
  var d = n;
  return d && typeof d.icon == "function" && (d = D(D({}, d), {}, {
    icon: d.icon(u.primaryColor, u.secondaryColor)
  })), bl(d.icon, "svg-".concat(d.name), D({
    className: r,
    onClick: a,
    style: i,
    "data-icon": d.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, l));
};
Ro.displayName = "IconReact";
Ro.getTwoToneColors = zS;
Ro.setTwoToneColors = VS;
const Cu = Ro;
function Yp(e) {
  var t = qp(e), n = X(t, 2), r = n[0], a = n[1];
  return Cu.setTwoToneColors({
    primaryColor: r,
    secondaryColor: a
  });
}
function jS() {
  var e = Cu.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var HS = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Yp("#1890ff");
var ko = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var n, r = e.className, a = e.icon, i = e.spin, o = e.rotate, s = e.tabIndex, l = e.onClick, u = e.twoToneColor, d = We(e, HS), f = c.useContext(ep), v = f.prefixCls, p = v === void 0 ? "anticon" : v, h = f.rootClassName, g = ne(h, p, (n = {}, P(n, "".concat(p, "-").concat(a.name), !!a.name), P(n, "".concat(p, "-spin"), !!i || a.name === "loading"), n), r), m = s;
  m === void 0 && l && (m = -1);
  var y = o ? {
    msTransform: "rotate(".concat(o, "deg)"),
    transform: "rotate(".concat(o, "deg)")
  } : void 0, b = qp(u), x = X(b, 2), C = x[0], E = x[1];
  return /* @__PURE__ */ c.createElement("span", D(D({
    role: "img",
    "aria-label": a.name
  }, d), {}, {
    ref: t,
    tabIndex: m,
    onClick: l,
    className: g
  }), /* @__PURE__ */ c.createElement(Cu, {
    icon: a,
    primaryColor: C,
    secondaryColor: E,
    style: y
  }));
});
ko.displayName = "AntdIcon";
ko.getTwoToneColor = jS;
ko.setTwoToneColor = Yp;
const It = ko;
var BS = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" };
const US = BS;
var Xp = function(t, n) {
  return /* @__PURE__ */ c.createElement(It, D(D({}, t), {}, {
    ref: n,
    icon: US
  }));
};
Xp.displayName = "CloseCircleFilled";
const xu = /* @__PURE__ */ c.forwardRef(Xp);
var WS = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const GS = WS;
var Jp = function(t, n) {
  return /* @__PURE__ */ c.createElement(It, D(D({}, t), {}, {
    ref: n,
    icon: GS
  }));
};
Jp.displayName = "LoadingOutlined";
const Ha = /* @__PURE__ */ c.forwardRef(Jp);
var qS = /* @__PURE__ */ c.createContext({}), YS = /* @__PURE__ */ function(e) {
  Gt(n, e);
  var t = qt(n);
  function n() {
    return Kt(this, n), t.apply(this, arguments);
  }
  return Vt(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(c.Component);
function wr(e) {
  var t = c.useRef(!1), n = c.useState(e), r = X(n, 2), a = r[0], i = r[1];
  c.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function o(s, l) {
    l && t.current || i(s);
  }
  return [a, o];
}
var gr = "none", yi = "appear", bi = "enter", Ci = "leave", Sd = "none", Pn = "prepare", Hr = "start", Br = "active", Su = "end", Qp = "prepared";
function Ed(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function XS(e, t) {
  var n = {
    animationend: Ed("Animation", "AnimationEnd"),
    transitionend: Ed("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var JS = XS(jn(), typeof window < "u" ? window : {}), Zp = {};
if (jn()) {
  var QS = document.createElement("div");
  Zp = QS.style;
}
var xi = {};
function em(e) {
  if (xi[e])
    return xi[e];
  var t = JS[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, a = 0; a < r; a += 1) {
      var i = n[a];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in Zp)
        return xi[e] = t[i], xi[e];
    }
  return "";
}
var tm = em("animationend"), nm = em("transitionend"), rm = !!(tm && nm), wd = tm || "animationend", Nd = nm || "transitionend";
function Od(e, t) {
  if (!e)
    return null;
  if (Le(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const ZS = function(e) {
  var t = De(), n = De(e);
  n.current = e;
  var r = c.useCallback(function(o) {
    n.current(o);
  }, []);
  function a(o) {
    o && (o.removeEventListener(Nd, r), o.removeEventListener(wd, r));
  }
  function i(o) {
    t.current && t.current !== o && a(t.current), o && o !== t.current && (o.addEventListener(Nd, r), o.addEventListener(wd, r), t.current = o);
  }
  return c.useEffect(function() {
    return function() {
      a(t.current);
    };
  }, []), [i, a];
};
var am = jn() ? ly : Dt, im = function(t) {
  return +setTimeout(t, 16);
}, om = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (im = function(t) {
  return window.requestAnimationFrame(t);
}, om = function(t) {
  return window.cancelAnimationFrame(t);
});
var Pd = 0, To = /* @__PURE__ */ new Map();
function sm(e) {
  To.delete(e);
}
var Eu = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Pd += 1;
  var r = Pd;
  function a(i) {
    if (i === 0)
      sm(r), t();
    else {
      var o = im(function() {
        a(i - 1);
      });
      To.set(r, o);
    }
  }
  return a(n), r;
};
Eu.cancel = function(e) {
  var t = To.get(e);
  return sm(e), om(t);
};
process.env.NODE_ENV !== "production" && (Eu.ids = function() {
  return To;
});
const mt = Eu, eE = function() {
  var e = c.useRef(null);
  function t() {
    mt.cancel(e.current);
  }
  function n(r) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = mt(function() {
      a <= 1 ? r({
        isCanceled: function() {
          return i !== e.current;
        }
      }) : n(r, a - 1);
    });
    e.current = i;
  }
  return c.useEffect(function() {
    return function() {
      t();
    };
  }, []), [n, t];
};
var tE = [Pn, Hr, Br, Su], nE = [Pn, Qp], lm = !1, rE = !0;
function um(e) {
  return e === Br || e === Su;
}
const aE = function(e, t, n) {
  var r = wr(Sd), a = X(r, 2), i = a[0], o = a[1], s = eE(), l = X(s, 2), u = l[0], d = l[1];
  function f() {
    o(Pn, !0);
  }
  var v = t ? nE : tE;
  return am(function() {
    if (i !== Sd && i !== Su) {
      var p = v.indexOf(i), h = v[p + 1], g = n(i);
      g === lm ? o(h, !0) : h && u(function(m) {
        function y() {
          m.isCanceled() || o(h, !0);
        }
        g === !0 ? y() : Promise.resolve(g).then(y);
      });
    }
  }, [e, i]), c.useEffect(function() {
    return function() {
      d();
    };
  }, []), [f, i];
};
function iE(e, t, n, r) {
  var a = r.motionEnter, i = a === void 0 ? !0 : a, o = r.motionAppear, s = o === void 0 ? !0 : o, l = r.motionLeave, u = l === void 0 ? !0 : l, d = r.motionDeadline, f = r.motionLeaveImmediately, v = r.onAppearPrepare, p = r.onEnterPrepare, h = r.onLeavePrepare, g = r.onAppearStart, m = r.onEnterStart, y = r.onLeaveStart, b = r.onAppearActive, x = r.onEnterActive, C = r.onLeaveActive, E = r.onAppearEnd, S = r.onEnterEnd, w = r.onLeaveEnd, N = r.onVisibleChanged, O = wr(), _ = X(O, 2), $ = _[0], I = _[1], F = wr(gr), M = X(F, 2), V = M[0], T = M[1], R = wr(null), k = X(R, 2), A = k[0], U = k[1], z = De(!1), B = De(null);
  function G() {
    return n();
  }
  var W = De(!1);
  function j() {
    T(gr, !0), U(null, !0);
  }
  function H(ve) {
    var ae = G();
    if (!(ve && !ve.deadline && ve.target !== ae)) {
      var ie = W.current, ee;
      V === yi && ie ? ee = E == null ? void 0 : E(ae, ve) : V === bi && ie ? ee = S == null ? void 0 : S(ae, ve) : V === Ci && ie && (ee = w == null ? void 0 : w(ae, ve)), V !== gr && ie && ee !== !1 && j();
    }
  }
  var q = ZS(H), Y = X(q, 1), J = Y[0], oe = function(ae) {
    var ie, ee, te;
    switch (ae) {
      case yi:
        return ie = {}, P(ie, Pn, v), P(ie, Hr, g), P(ie, Br, b), ie;
      case bi:
        return ee = {}, P(ee, Pn, p), P(ee, Hr, m), P(ee, Br, x), ee;
      case Ci:
        return te = {}, P(te, Pn, h), P(te, Hr, y), P(te, Br, C), te;
      default:
        return {};
    }
  }, re = c.useMemo(function() {
    return oe(V);
  }, [V]), de = aE(V, !e, function(ve) {
    if (ve === Pn) {
      var ae = re[Pn];
      return ae ? ae(G()) : lm;
    }
    if (ce in re) {
      var ie;
      U(((ie = re[ce]) === null || ie === void 0 ? void 0 : ie.call(re, G(), null)) || null);
    }
    return ce === Br && (J(G()), d > 0 && (clearTimeout(B.current), B.current = setTimeout(function() {
      H({
        deadline: !0
      });
    }, d))), ce === Qp && j(), rE;
  }), Z = X(de, 2), Q = Z[0], ce = Z[1], Ce = um(ce);
  W.current = Ce, am(function() {
    I(t);
    var ve = z.current;
    z.current = !0;
    var ae;
    !ve && t && s && (ae = yi), ve && t && i && (ae = bi), (ve && !t && u || !ve && f && !t && u) && (ae = Ci);
    var ie = oe(ae);
    ae && (e || ie[Pn]) ? (T(ae), Q()) : T(gr);
  }, [t]), Dt(function() {
    // Cancel appear
    (V === yi && !s || // Cancel enter
    V === bi && !i || // Cancel leave
    V === Ci && !u) && T(gr);
  }, [s, i, u]), Dt(function() {
    return function() {
      z.current = !1, clearTimeout(B.current);
    };
  }, []);
  var we = c.useRef(!1);
  Dt(function() {
    $ && (we.current = !0), $ !== void 0 && V === gr && ((we.current || $) && (N == null || N($)), we.current = !0);
  }, [$, V]);
  var ke = A;
  return re[Pn] && ce === Hr && (ke = D({
    transition: "none"
  }, ke)), [V, ce, ke, $ ?? t];
}
function oE(e) {
  var t = e;
  Le(e) === "object" && (t = e.transitionSupport);
  function n(a, i) {
    return !!(a.motionName && t && i !== !1);
  }
  var r = /* @__PURE__ */ c.forwardRef(function(a, i) {
    var o = a.visible, s = o === void 0 ? !0 : o, l = a.removeOnLeave, u = l === void 0 ? !0 : l, d = a.forceRender, f = a.children, v = a.motionName, p = a.leavedClassName, h = a.eventProps, g = c.useContext(qS), m = g.motion, y = n(a, m), b = De(), x = De();
    function C() {
      try {
        return b.current instanceof HTMLElement ? b.current : Wr(x.current);
      } catch {
        return null;
      }
    }
    var E = iE(y, s, C, a), S = X(E, 4), w = S[0], N = S[1], O = S[2], _ = S[3], $ = c.useRef(_);
    _ && ($.current = !0);
    var I = c.useCallback(function(U) {
      b.current = U, Qi(i, U);
    }, [i]), F, M = D(D({}, h), {}, {
      visible: s
    });
    if (!f)
      F = null;
    else if (w === gr)
      _ ? F = f(D({}, M), I) : !u && $.current && p ? F = f(D(D({}, M), {}, {
        className: p
      }), I) : d || !u && !p ? F = f(D(D({}, M), {}, {
        style: {
          display: "none"
        }
      }), I) : F = null;
    else {
      var V, T;
      N === Pn ? T = "prepare" : um(N) ? T = "active" : N === Hr && (T = "start");
      var R = Od(v, "".concat(w, "-").concat(T));
      F = f(D(D({}, M), {}, {
        className: ne(Od(v, w), (V = {}, P(V, R, R && T), P(V, v, typeof v == "string"), V)),
        style: O
      }), I);
    }
    if (/* @__PURE__ */ c.isValidElement(F) && Xa(F)) {
      var k = F, A = k.ref;
      A || (F = /* @__PURE__ */ c.cloneElement(F, {
        ref: I
      }));
    }
    return /* @__PURE__ */ c.createElement(YS, {
      ref: x
    }, F);
  });
  return r.displayName = "CSSMotion", r;
}
const Pr = oE(rm);
var Cl = "add", xl = "keep", Sl = "remove", gs = "removed";
function sE(e) {
  var t;
  return e && Le(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, D(D({}, t), {}, {
    key: String(t.key)
  });
}
function El() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(sE);
}
function lE() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, a = t.length, i = El(e), o = El(t);
  i.forEach(function(u) {
    for (var d = !1, f = r; f < a; f += 1) {
      var v = o[f];
      if (v.key === u.key) {
        r < f && (n = n.concat(o.slice(r, f).map(function(p) {
          return D(D({}, p), {}, {
            status: Cl
          });
        })), r = f), n.push(D(D({}, v), {}, {
          status: xl
        })), r += 1, d = !0;
        break;
      }
    }
    d || n.push(D(D({}, u), {}, {
      status: Sl
    }));
  }), r < a && (n = n.concat(o.slice(r).map(function(u) {
    return D(D({}, u), {}, {
      status: Cl
    });
  })));
  var s = {};
  n.forEach(function(u) {
    var d = u.key;
    s[d] = (s[d] || 0) + 1;
  });
  var l = Object.keys(s).filter(function(u) {
    return s[u] > 1;
  });
  return l.forEach(function(u) {
    n = n.filter(function(d) {
      var f = d.key, v = d.status;
      return f !== u || v !== Sl;
    }), n.forEach(function(d) {
      d.key === u && (d.status = xl);
    });
  }), n;
}
var uE = ["component", "children", "onVisibleChanged", "onAllRemoved"], cE = ["status"], dE = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function fE(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Pr, n = /* @__PURE__ */ function(r) {
    Gt(i, r);
    var a = qt(i);
    function i() {
      var o;
      Kt(this, i);
      for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++)
        l[u] = arguments[u];
      return o = a.call.apply(a, [this].concat(l)), P(Ue(o), "state", {
        keyEntities: []
      }), P(Ue(o), "removeKey", function(d) {
        var f = o.state.keyEntities, v = f.map(function(p) {
          return p.key !== d ? p : D(D({}, p), {}, {
            status: gs
          });
        });
        return o.setState({
          keyEntities: v
        }), v.filter(function(p) {
          var h = p.status;
          return h !== gs;
        }).length;
      }), o;
    }
    return Vt(i, [{
      key: "render",
      value: function() {
        var s = this, l = this.state.keyEntities, u = this.props, d = u.component, f = u.children, v = u.onVisibleChanged, p = u.onAllRemoved, h = We(u, uE), g = d || c.Fragment, m = {};
        return dE.forEach(function(y) {
          m[y] = h[y], delete h[y];
        }), delete h.keys, /* @__PURE__ */ c.createElement(g, h, l.map(function(y, b) {
          var x = y.status, C = We(y, cE), E = x === Cl || x === xl;
          return /* @__PURE__ */ c.createElement(t, K({}, m, {
            key: C.key,
            visible: E,
            eventProps: C,
            onVisibleChanged: function(w) {
              if (v == null || v(w, {
                key: C.key
              }), !w) {
                var N = s.removeKey(C.key);
                N === 0 && p && p();
              }
            }
          }), function(S, w) {
            return f(D(D({}, S), {}, {
              index: b
            }), w);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, l) {
        var u = s.keys, d = l.keyEntities, f = El(u), v = lE(d, f);
        return {
          keyEntities: v.filter(function(p) {
            var h = d.find(function(g) {
              var m = g.key;
              return p.key === m;
            });
            return !(h && h.status === gs && p.status === Sl);
          })
        };
      }
    }]), i;
  }(c.Component);
  return P(n, "defaultProps", {
    component: "div"
  }), n;
}
fE(rm);
var vE = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" };
const pE = vE;
var cm = function(t, n) {
  return /* @__PURE__ */ c.createElement(It, D(D({}, t), {}, {
    ref: n,
    icon: pE
  }));
};
cm.displayName = "CloseOutlined";
const mE = /* @__PURE__ */ c.forwardRef(cm);
var hE = function(t, n) {
  return n || (t ? "ant-".concat(t) : "ant");
}, st = /* @__PURE__ */ c.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: hE
}), ni = st.Consumer, gE = /* @__PURE__ */ c.createContext(!1);
const Rr = gE;
var yE = /* @__PURE__ */ c.createContext(void 0);
const fr = yE;
function Zn(e, t, n, r) {
  var a = $a.unstable_batchedUpdates ? function(o) {
    $a.unstable_batchedUpdates(n, o);
  } : n;
  return e != null && e.addEventListener && e.addEventListener(t, a, r), {
    remove: function() {
      e != null && e.removeEventListener && e.removeEventListener(t, a, r);
    }
  };
}
function bE(e) {
  return Object.keys(e).reduce(function(t, n) {
    return (n.startsWith("data-") || n.startsWith("aria-") || n === "role") && !n.startsWith("data-__") && (t[n] = e[n]), t;
  }, {});
}
var Nn = c.isValidElement;
function dm(e) {
  return e && Nn(e) && e.type === c.Fragment;
}
function CE(e, t, n) {
  return Nn(e) ? /* @__PURE__ */ c.cloneElement(e, typeof n == "function" ? n(e.props || {}) : n) : t;
}
function on(e, t) {
  return CE(e, e, t);
}
function wl(e) {
  return e != null && e === e.window;
}
function xE(e, t) {
  var n, r;
  if (typeof window > "u")
    return 0;
  var a = t ? "scrollTop" : "scrollLeft", i = 0;
  return wl(e) ? i = e[t ? "pageYOffset" : "pageXOffset"] : e instanceof Document ? i = e.documentElement[a] : (e instanceof HTMLElement || e) && (i = e[a]), e && !wl(e) && typeof i != "number" && (i = (r = ((n = e.ownerDocument) !== null && n !== void 0 ? n : e).documentElement) === null || r === void 0 ? void 0 : r[a]), i;
}
function SE(e, t, n, r) {
  var a = n - t;
  return e /= r / 2, e < 1 ? a / 2 * e * e * e + t : a / 2 * ((e -= 2) * e * e + 2) + t;
}
function EE(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.getContainer, r = n === void 0 ? function() {
    return window;
  } : n, a = t.callback, i = t.duration, o = i === void 0 ? 450 : i, s = r(), l = xE(s, !0), u = Date.now(), d = function f() {
    var v = Date.now(), p = v - u, h = SE(p > o ? o : p, l, e, o);
    wl(s) ? s.scrollTo(window.pageXOffset, h) : s instanceof Document || s.constructor.name === "HTMLDocument" ? s.documentElement.scrollTop = h : s.scrollTop = h, p < o ? mt(f) : typeof a == "function" && a();
  };
  mt(d);
}
function cr(e) {
  var t = c.useRef();
  t.current = e;
  var n = c.useCallback(function() {
    for (var r, a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(i));
  }, []);
  return n;
}
var Rd = process.env.NODE_ENV !== "test" && jn() ? c.useLayoutEffect : c.useEffect, rn = function(t, n) {
  var r = c.useRef(!0);
  Rd(function() {
    return t(r.current);
  }, n), Rd(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, kd = function(t, n) {
  rn(function(r) {
    if (!r)
      return t();
  }, n);
};
function ys(e) {
  return e !== void 0;
}
function un(e, t) {
  var n = t || {}, r = n.defaultValue, a = n.value, i = n.onChange, o = n.postState, s = wr(function() {
    return ys(a) ? a : ys(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
  }), l = X(s, 2), u = l[0], d = l[1], f = a !== void 0 ? a : u, v = o ? o(f) : f, p = cr(i), h = wr([f]), g = X(h, 2), m = g[0], y = g[1];
  kd(function() {
    var x = m[0];
    u !== x && p(u, x);
  }, [m]), kd(function() {
    ys(a) || d(a);
  }, [a]);
  var b = cr(function(x, C) {
    d(x, C), y([f], C);
  });
  return [v, b];
}
const fm = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substr(0, 4));
};
var fe = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function(t) {
    var n = t.keyCode;
    if (t.altKey && !t.ctrlKey || t.metaKey || // Function keys don't generate text
    n >= fe.F1 && n <= fe.F12)
      return !1;
    switch (n) {
      case fe.ALT:
      case fe.CAPS_LOCK:
      case fe.CONTEXT_MENU:
      case fe.CTRL:
      case fe.DOWN:
      case fe.END:
      case fe.ESC:
      case fe.HOME:
      case fe.INSERT:
      case fe.LEFT:
      case fe.MAC_FF_META:
      case fe.META:
      case fe.NUMLOCK:
      case fe.NUM_CENTER:
      case fe.PAGE_DOWN:
      case fe.PAGE_UP:
      case fe.PAUSE:
      case fe.PRINT_SCREEN:
      case fe.RIGHT:
      case fe.SHIFT:
      case fe.UP:
      case fe.WIN_KEY:
      case fe.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= fe.ZERO && t <= fe.NINE || t >= fe.NUM_ZERO && t <= fe.NUM_MULTIPLY || t >= fe.A && t <= fe.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case fe.SPACE:
      case fe.QUESTION_MARK:
      case fe.NUM_PLUS:
      case fe.NUM_MINUS:
      case fe.NUM_PERIOD:
      case fe.NUM_DIVISION:
      case fe.SEMICOLON:
      case fe.DASH:
      case fe.EQUALS:
      case fe.COMMA:
      case fe.PERIOD:
      case fe.SLASH:
      case fe.APOSTROPHE:
      case fe.SINGLE_QUOTE:
      case fe.OPEN_SQUARE_BRACKET:
      case fe.BACKSLASH:
      case fe.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
}, vm = /* @__PURE__ */ c.createContext(null);
function wE() {
  return c.useContext(vm);
}
function NE() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10, t = c.useState(!1), n = X(t, 2), r = n[0], a = n[1], i = c.useRef(null), o = function() {
    window.clearTimeout(i.current);
  };
  c.useEffect(function() {
    return o;
  }, []);
  var s = function(u, d) {
    o(), i.current = window.setTimeout(function() {
      a(u), d && d();
    }, e);
  };
  return [r, s, o];
}
function pm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250, t = c.useRef(null), n = c.useRef(null);
  c.useEffect(function() {
    return function() {
      window.clearTimeout(n.current);
    };
  }, []);
  function r(a) {
    (a || t.current === null) && (t.current = a), window.clearTimeout(n.current), n.current = window.setTimeout(function() {
      t.current = null;
    }, e);
  }
  return [function() {
    return t.current;
  }, r];
}
function OE(e, t, n, r) {
  var a = c.useRef(null);
  a.current = {
    open: t,
    triggerOpen: n,
    customizedTrigger: r
  }, c.useEffect(function() {
    function i(o) {
      var s;
      if (!((s = a.current) !== null && s !== void 0 && s.customizedTrigger)) {
        var l = o.target;
        l.shadowRoot && o.composed && (l = o.composedPath()[0] || l), a.current.open && e().filter(function(u) {
          return u;
        }).every(function(u) {
          return !u.contains(l) && u !== l;
        }) && a.current.triggerOpen(!1);
      }
    }
    return window.addEventListener("mousedown", i), function() {
      return window.removeEventListener("mousedown", i);
    };
  }, []);
}
var PE = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`, RE = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, kE = "".concat(PE, " ").concat(RE).split(/[\s\n]+/), TE = "aria-", _E = "data-";
function Td(e, t) {
  return e.indexOf(t) === 0;
}
function Nr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = D({}, t);
  var r = {};
  return Object.keys(e).forEach(function(a) {
    // Aria
    (n.aria && (a === "role" || Td(a, TE)) || // Data
    n.data && Td(a, _E) || // Attr
    n.attr && kE.includes(a)) && (r[a] = e[a]);
  }), r;
}
var IE = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], Dr = void 0;
function FE(e, t) {
  var n = e.prefixCls, r = e.invalidate, a = e.item, i = e.renderItem, o = e.responsive, s = e.responsiveDisabled, l = e.registerSize, u = e.itemKey, d = e.className, f = e.style, v = e.children, p = e.display, h = e.order, g = e.component, m = g === void 0 ? "div" : g, y = We(e, IE), b = o && !p;
  function x(N) {
    l(u, N);
  }
  c.useEffect(function() {
    return function() {
      x(null);
    };
  }, []);
  var C = i && a !== Dr ? i(a) : v, E;
  r || (E = {
    opacity: b ? 0 : 1,
    height: b ? 0 : Dr,
    overflowY: b ? "hidden" : Dr,
    order: o ? h : Dr,
    pointerEvents: b ? "none" : Dr,
    position: b ? "absolute" : Dr
  });
  var S = {};
  b && (S["aria-hidden"] = !0);
  var w = /* @__PURE__ */ c.createElement(m, K({
    className: ne(!r && n, d),
    style: D(D({}, E), f)
  }, S, y, {
    ref: t
  }), C);
  return o && (w = /* @__PURE__ */ c.createElement(zn, {
    onResize: function(O) {
      var _ = O.offsetWidth;
      x(_);
    },
    disabled: s
  }, w)), w;
}
var Ia = /* @__PURE__ */ c.forwardRef(FE);
Ia.displayName = "Item";
function ME(e) {
  if (typeof MessageChannel > "u")
    mt(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function $E() {
  var e = c.useRef(null), t = function(r) {
    e.current || (e.current = [], ME(function() {
      cy(function() {
        e.current.forEach(function(a) {
          a();
        }), e.current = null;
      });
    })), e.current.push(r);
  };
  return t;
}
function xa(e, t) {
  var n = c.useState(t), r = X(n, 2), a = r[0], i = r[1], o = cr(function(s) {
    e(function() {
      i(s);
    });
  });
  return [a, o];
}
var to = /* @__PURE__ */ be.createContext(null), DE = ["component"], AE = ["className"], LE = ["className"], KE = function(t, n) {
  var r = c.useContext(to);
  if (!r) {
    var a = t.component, i = a === void 0 ? "div" : a, o = We(t, DE);
    return /* @__PURE__ */ c.createElement(i, K({}, o, {
      ref: n
    }));
  }
  var s = r.className, l = We(r, AE), u = t.className, d = We(t, LE);
  return /* @__PURE__ */ c.createElement(to.Provider, {
    value: null
  }, /* @__PURE__ */ c.createElement(Ia, K({
    ref: n,
    className: ne(s, u)
  }, l, d)));
}, mm = /* @__PURE__ */ c.forwardRef(KE);
mm.displayName = "RawItem";
var VE = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], hm = "responsive", gm = "invalidate";
function zE(e) {
  return "+ ".concat(e.length, " ...");
}
function jE(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-overflow" : n, a = e.data, i = a === void 0 ? [] : a, o = e.renderItem, s = e.renderRawItem, l = e.itemKey, u = e.itemWidth, d = u === void 0 ? 10 : u, f = e.ssr, v = e.style, p = e.className, h = e.maxCount, g = e.renderRest, m = e.renderRawRest, y = e.suffix, b = e.component, x = b === void 0 ? "div" : b, C = e.itemComponent, E = e.onVisibleChange, S = We(e, VE), w = f === "full", N = $E(), O = xa(N, null), _ = X(O, 2), $ = _[0], I = _[1], F = $ || 0, M = xa(N, /* @__PURE__ */ new Map()), V = X(M, 2), T = V[0], R = V[1], k = xa(N, 0), A = X(k, 2), U = A[0], z = A[1], B = xa(N, 0), G = X(B, 2), W = G[0], j = G[1], H = xa(N, 0), q = X(H, 2), Y = q[0], J = q[1], oe = Ut(null), re = X(oe, 2), de = re[0], Z = re[1], Q = Ut(null), ce = X(Q, 2), Ce = ce[0], we = ce[1], ke = c.useMemo(function() {
    return Ce === null && w ? Number.MAX_SAFE_INTEGER : Ce || 0;
  }, [Ce, $]), ve = Ut(!1), ae = X(ve, 2), ie = ae[0], ee = ae[1], te = "".concat(r, "-item"), xe = Math.max(U, W), Me = h === hm, Te = i.length && Me, Ve = h === gm, Ae = Te || typeof h == "number" && i.length > h, Ne = Zt(function() {
    var se = i;
    return Te ? $ === null && w ? se = i : se = i.slice(0, Math.min(i.length, F / d)) : typeof h == "number" && (se = i.slice(0, h)), se;
  }, [i, d, $, h, Te]), $e = Zt(function() {
    return Te ? i.slice(ke + 1) : i.slice(Ne.length);
  }, [i, Ne, Te, ke]), je = pn(function(se, ue) {
    var me;
    return typeof l == "function" ? l(se) : (me = l && (se == null ? void 0 : se[l])) !== null && me !== void 0 ? me : ue;
  }, [l]), lt = pn(o || function(se) {
    return se;
  }, [o]);
  function tt(se, ue, me) {
    Ce === se && (ue === void 0 || ue === de) || (we(se), me || (ee(se < i.length - 1), E == null || E(se)), ue !== void 0 && Z(ue));
  }
  function ot(se, ue) {
    I(ue.clientWidth);
  }
  function ft(se, ue) {
    R(function(me) {
      var Se = new Map(me);
      return ue === null ? Se.delete(se) : Se.set(se, ue), Se;
    });
  }
  function nt(se, ue) {
    j(ue), z(W);
  }
  function Et(se, ue) {
    J(ue);
  }
  function at(se) {
    return T.get(je(Ne[se], se));
  }
  rn(function() {
    if (F && typeof xe == "number" && Ne) {
      var se = Y, ue = Ne.length, me = ue - 1;
      if (!ue) {
        tt(0, null);
        return;
      }
      for (var Se = 0; Se < ue; Se += 1) {
        var _e = at(Se);
        if (w && (_e = _e || 0), _e === void 0) {
          tt(Se - 1, void 0, !0);
          break;
        }
        if (se += _e, // Only one means `totalWidth` is the final width
        me === 0 && se <= F || // Last two width will be the final width
        Se === me - 1 && se + at(me) <= F) {
          tt(me, null);
          break;
        } else if (se + xe > F) {
          tt(Se - 1, se - _e - Y + W);
          break;
        }
      }
      y && at(0) + Y > F && Z(null);
    }
  }, [F, T, W, Y, je, Ne]);
  var Ft = ie && !!$e.length, Mt = {};
  de !== null && Te && (Mt = {
    position: "absolute",
    left: de,
    top: 0
  });
  var rt = {
    prefixCls: te,
    responsive: Te,
    component: C,
    invalidate: Ve
  }, Ot = s ? function(se, ue) {
    var me = je(se, ue);
    return /* @__PURE__ */ c.createElement(to.Provider, {
      key: me,
      value: D(D({}, rt), {}, {
        order: ue,
        item: se,
        itemKey: me,
        registerSize: ft,
        display: ue <= ke
      })
    }, s(se, ue));
  } : function(se, ue) {
    var me = je(se, ue);
    return /* @__PURE__ */ c.createElement(Ia, K({}, rt, {
      order: ue,
      key: me,
      item: se,
      renderItem: lt,
      itemKey: me,
      registerSize: ft,
      display: ue <= ke
    }));
  }, vt, Ze = {
    order: Ft ? ke : Number.MAX_SAFE_INTEGER,
    className: "".concat(te, "-rest"),
    registerSize: nt,
    display: Ft
  };
  if (m)
    m && (vt = /* @__PURE__ */ c.createElement(to.Provider, {
      value: D(D({}, rt), Ze)
    }, m($e)));
  else {
    var Ke = g || zE;
    vt = /* @__PURE__ */ c.createElement(Ia, K({}, rt, Ze), typeof Ke == "function" ? Ke($e) : Ke);
  }
  var Oe = /* @__PURE__ */ c.createElement(x, K({
    className: ne(!Ve && r, p),
    style: v,
    ref: t
  }, S), Ne.map(Ot), Ae ? vt : null, y && /* @__PURE__ */ c.createElement(Ia, K({}, rt, {
    responsive: Me,
    responsiveDisabled: !Te,
    order: ke,
    className: "".concat(te, "-suffix"),
    registerSize: Et,
    display: !0,
    style: Mt
  }), y));
  return Me && (Oe = /* @__PURE__ */ c.createElement(zn, {
    onResize: ot,
    disabled: !Te
  }, Oe)), Oe;
}
var Vn = /* @__PURE__ */ c.forwardRef(jE);
Vn.displayName = "Overflow";
Vn.Item = mm;
Vn.RESPONSIVE = hm;
Vn.INVALIDATE = gm;
var no = function(t) {
  var n = t.className, r = t.customizeIcon, a = t.customizeIconProps, i = t.onMouseDown, o = t.onClick, s = t.children, l;
  return typeof r == "function" ? l = r(a) : l = r, /* @__PURE__ */ c.createElement("span", {
    className: n,
    onMouseDown: function(d) {
      d.preventDefault(), i && i(d);
    },
    style: {
      userSelect: "none",
      WebkitUserSelect: "none"
    },
    unselectable: "on",
    onClick: o,
    "aria-hidden": !0
  }, l !== void 0 ? l : /* @__PURE__ */ c.createElement("span", {
    className: ne(n.split(/\s+/).map(function(u) {
      return "".concat(u, "-icon");
    }))
  }, s));
}, HE = function(t, n) {
  var r, a, i = t.prefixCls, o = t.id, s = t.inputElement, l = t.disabled, u = t.tabIndex, d = t.autoFocus, f = t.autoComplete, v = t.editable, p = t.activeDescendantId, h = t.value, g = t.maxLength, m = t.onKeyDown, y = t.onMouseDown, b = t.onChange, x = t.onPaste, C = t.onCompositionStart, E = t.onCompositionEnd, S = t.open, w = t.attrs, N = s || /* @__PURE__ */ c.createElement("input", null), O = N, _ = O.ref, $ = O.props, I = $.onKeyDown, F = $.onChange, M = $.onMouseDown, V = $.onCompositionStart, T = $.onCompositionEnd, R = $.style;
  return Ji(!("maxLength" in N.props), "Passing 'maxLength' to input element directly may not work because input in BaseSelect is controlled."), N = /* @__PURE__ */ c.cloneElement(N, D(D(D({
    type: "search"
  }, $), {}, {
    // Override over origin props
    id: o,
    ref: er(n, _),
    disabled: l,
    tabIndex: u,
    autoComplete: f || "off",
    autoFocus: d,
    className: ne("".concat(i, "-selection-search-input"), (r = N) === null || r === void 0 || (a = r.props) === null || a === void 0 ? void 0 : a.className),
    role: "combobox",
    "aria-expanded": S,
    "aria-haspopup": "listbox",
    "aria-owns": "".concat(o, "_list"),
    "aria-autocomplete": "list",
    "aria-controls": "".concat(o, "_list"),
    "aria-activedescendant": p
  }, w), {}, {
    value: v ? h : "",
    maxLength: g,
    readOnly: !v,
    unselectable: v ? null : "on",
    style: D(D({}, R), {}, {
      opacity: v ? null : 0
    }),
    onKeyDown: function(A) {
      m(A), I && I(A);
    },
    onMouseDown: function(A) {
      y(A), M && M(A);
    },
    onChange: function(A) {
      b(A), F && F(A);
    },
    onCompositionStart: function(A) {
      C(A), V && V(A);
    },
    onCompositionEnd: function(A) {
      E(A), T && T(A);
    },
    onPaste: x
  })), N;
}, wu = /* @__PURE__ */ c.forwardRef(HE);
wu.displayName = "Input";
function Nu(e) {
  return Array.isArray(e) ? e : e !== void 0 ? [e] : [];
}
var BE = typeof window < "u" && window.document && window.document.documentElement, UE = process.env.NODE_ENV !== "test" && BE;
function WE(e) {
  return e != null;
}
function _d(e) {
  return ["string", "number"].includes(Le(e));
}
function ym(e) {
  var t = void 0;
  return e && (_d(e.title) ? t = e.title.toString() : _d(e.label) && (t = e.label.toString())), t;
}
function GE(e, t) {
  UE ? c.useLayoutEffect(e, t) : c.useEffect(e, t);
}
function qE(e) {
  var t;
  return (t = e.key) !== null && t !== void 0 ? t : e.value;
}
var Id = function(t) {
  t.preventDefault(), t.stopPropagation();
}, YE = function(t) {
  var n = t.id, r = t.prefixCls, a = t.values, i = t.open, o = t.searchValue, s = t.autoClearSearchValue, l = t.inputRef, u = t.placeholder, d = t.disabled, f = t.mode, v = t.showSearch, p = t.autoFocus, h = t.autoComplete, g = t.activeDescendantId, m = t.tabIndex, y = t.removeIcon, b = t.maxTagCount, x = t.maxTagTextLength, C = t.maxTagPlaceholder, E = C === void 0 ? function(Z) {
    return "+ ".concat(Z.length, " ...");
  } : C, S = t.tagRender, w = t.onToggleOpen, N = t.onRemove, O = t.onInputChange, _ = t.onInputPaste, $ = t.onInputKeyDown, I = t.onInputMouseDown, F = t.onInputCompositionStart, M = t.onInputCompositionEnd, V = c.useRef(null), T = Ut(0), R = X(T, 2), k = R[0], A = R[1], U = Ut(!1), z = X(U, 2), B = z[0], G = z[1], W = "".concat(r, "-selection"), j = i || f === "multiple" && s === !1 || f === "tags" ? o : "", H = f === "tags" || f === "multiple" && s === !1 || v && (i || B);
  GE(function() {
    A(V.current.scrollWidth);
  }, [j]);
  function q(Z, Q, ce, Ce, we) {
    return /* @__PURE__ */ c.createElement("span", {
      className: ne("".concat(W, "-item"), P({}, "".concat(W, "-item-disabled"), ce)),
      title: ym(Z)
    }, /* @__PURE__ */ c.createElement("span", {
      className: "".concat(W, "-item-content")
    }, Q), Ce && /* @__PURE__ */ c.createElement(no, {
      className: "".concat(W, "-item-remove"),
      onMouseDown: Id,
      onClick: we,
      customizeIcon: y
    }, "×"));
  }
  function Y(Z, Q, ce, Ce, we) {
    var ke = function(ae) {
      Id(ae), w(!i);
    };
    return /* @__PURE__ */ c.createElement("span", {
      onMouseDown: ke
    }, S({
      label: Q,
      value: Z,
      disabled: ce,
      closable: Ce,
      onClose: we
    }));
  }
  function J(Z) {
    var Q = Z.disabled, ce = Z.label, Ce = Z.value, we = !d && !Q, ke = ce;
    if (typeof x == "number" && (typeof ce == "string" || typeof ce == "number")) {
      var ve = String(ke);
      ve.length > x && (ke = "".concat(ve.slice(0, x), "..."));
    }
    var ae = function(ee) {
      ee && ee.stopPropagation(), N(Z);
    };
    return typeof S == "function" ? Y(Ce, ke, Q, we, ae) : q(Z, ke, Q, we, ae);
  }
  function oe(Z) {
    var Q = typeof E == "function" ? E(Z) : E;
    return q({
      title: Q
    }, Q, !1);
  }
  var re = /* @__PURE__ */ c.createElement("div", {
    className: "".concat(W, "-search"),
    style: {
      width: k
    },
    onFocus: function() {
      G(!0);
    },
    onBlur: function() {
      G(!1);
    }
  }, /* @__PURE__ */ c.createElement(wu, {
    ref: l,
    open: i,
    prefixCls: r,
    id: n,
    inputElement: null,
    disabled: d,
    autoFocus: p,
    autoComplete: h,
    editable: H,
    activeDescendantId: g,
    value: j,
    onKeyDown: $,
    onMouseDown: I,
    onChange: O,
    onPaste: _,
    onCompositionStart: F,
    onCompositionEnd: M,
    tabIndex: m,
    attrs: Nr(t, !0)
  }), /* @__PURE__ */ c.createElement("span", {
    ref: V,
    className: "".concat(W, "-search-mirror"),
    "aria-hidden": !0
  }, j, " ")), de = /* @__PURE__ */ c.createElement(Vn, {
    prefixCls: "".concat(W, "-overflow"),
    data: a,
    renderItem: J,
    renderRest: oe,
    suffix: re,
    itemKey: qE,
    maxCount: b
  });
  return /* @__PURE__ */ c.createElement(c.Fragment, null, de, !a.length && !j && /* @__PURE__ */ c.createElement("span", {
    className: "".concat(W, "-placeholder")
  }, u));
}, XE = function(t) {
  var n = t.inputElement, r = t.prefixCls, a = t.id, i = t.inputRef, o = t.disabled, s = t.autoFocus, l = t.autoComplete, u = t.activeDescendantId, d = t.mode, f = t.open, v = t.values, p = t.placeholder, h = t.tabIndex, g = t.showSearch, m = t.searchValue, y = t.activeValue, b = t.maxLength, x = t.onInputKeyDown, C = t.onInputMouseDown, E = t.onInputChange, S = t.onInputPaste, w = t.onInputCompositionStart, N = t.onInputCompositionEnd, O = c.useState(!1), _ = X(O, 2), $ = _[0], I = _[1], F = d === "combobox", M = F || g, V = v[0], T = m || "";
  F && y && !$ && (T = y), c.useEffect(function() {
    F && I(!1);
  }, [F, y]);
  var R = d !== "combobox" && !f && !g ? !1 : !!T, k = ym(V), A = function() {
    if (V)
      return null;
    var z = R ? {
      visibility: "hidden"
    } : void 0;
    return /* @__PURE__ */ c.createElement("span", {
      className: "".concat(r, "-selection-placeholder"),
      style: z
    }, p);
  };
  return /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement("span", {
    className: "".concat(r, "-selection-search")
  }, /* @__PURE__ */ c.createElement(wu, {
    ref: i,
    prefixCls: r,
    id: a,
    open: f,
    inputElement: n,
    disabled: o,
    autoFocus: s,
    autoComplete: l,
    editable: M,
    activeDescendantId: u,
    value: T,
    onKeyDown: x,
    onMouseDown: C,
    onChange: function(z) {
      I(!0), E(z);
    },
    onPaste: S,
    onCompositionStart: w,
    onCompositionEnd: N,
    tabIndex: h,
    attrs: Nr(t, !0),
    maxLength: F ? b : void 0
  })), !F && V ? /* @__PURE__ */ c.createElement("span", {
    className: "".concat(r, "-selection-item"),
    title: k,
    style: R ? {
      visibility: "hidden"
    } : void 0
  }, V.label) : null, A());
};
function JE(e) {
  return ![
    // System function button
    fe.ESC,
    fe.SHIFT,
    fe.BACKSPACE,
    fe.TAB,
    fe.WIN_KEY,
    fe.ALT,
    fe.META,
    fe.WIN_KEY_RIGHT,
    fe.CTRL,
    fe.SEMICOLON,
    fe.EQUALS,
    fe.CAPS_LOCK,
    fe.CONTEXT_MENU,
    // F1-F12
    fe.F1,
    fe.F2,
    fe.F3,
    fe.F4,
    fe.F5,
    fe.F6,
    fe.F7,
    fe.F8,
    fe.F9,
    fe.F10,
    fe.F11,
    fe.F12
  ].includes(e);
}
var QE = function(t, n) {
  var r = De(null), a = De(!1), i = t.prefixCls, o = t.open, s = t.mode, l = t.showSearch, u = t.tokenWithEnter, d = t.autoClearSearchValue, f = t.onSearch, v = t.onSearchSubmit, p = t.onToggleOpen, h = t.onInputKeyDown, g = t.domRef;
  c.useImperativeHandle(n, function() {
    return {
      focus: function() {
        r.current.focus();
      },
      blur: function() {
        r.current.blur();
      }
    };
  });
  var m = pm(0), y = X(m, 2), b = y[0], x = y[1], C = function(R) {
    var k = R.which;
    (k === fe.UP || k === fe.DOWN) && R.preventDefault(), h && h(R), k === fe.ENTER && s === "tags" && !a.current && !o && (v == null || v(R.target.value)), JE(k) && p(!0);
  }, E = function() {
    x(!0);
  }, S = De(null), w = function(R) {
    f(R, !0, a.current) !== !1 && p(!0);
  }, N = function() {
    a.current = !0;
  }, O = function(R) {
    a.current = !1, s !== "combobox" && w(R.target.value);
  }, _ = function(R) {
    var k = R.target.value;
    if (u && S.current && /[\r\n]/.test(S.current)) {
      var A = S.current.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
      k = k.replace(A, S.current);
    }
    S.current = null, w(k);
  }, $ = function(R) {
    var k = R.clipboardData, A = k.getData("text");
    S.current = A;
  }, I = function(R) {
    var k = R.target;
    if (k !== r.current) {
      var A = document.body.style.msTouchAction !== void 0;
      A ? setTimeout(function() {
        r.current.focus();
      }) : r.current.focus();
    }
  }, F = function(R) {
    var k = b();
    R.target !== r.current && !k && s !== "combobox" && R.preventDefault(), (s !== "combobox" && (!l || !k) || !o) && (o && d !== !1 && f("", !0, !1), p());
  }, M = {
    inputRef: r,
    onInputKeyDown: C,
    onInputMouseDown: E,
    onInputChange: _,
    onInputPaste: $,
    onInputCompositionStart: N,
    onInputCompositionEnd: O
  }, V = s === "multiple" || s === "tags" ? /* @__PURE__ */ c.createElement(YE, K({}, t, M)) : /* @__PURE__ */ c.createElement(XE, K({}, t, M));
  return /* @__PURE__ */ c.createElement("div", {
    ref: g,
    className: "".concat(i, "-selector"),
    onClick: I,
    onMouseDown: F
  }, V);
}, bm = /* @__PURE__ */ c.forwardRef(QE);
bm.displayName = "Selector";
var ZE = /* @__PURE__ */ aa(function(e, t) {
  var n = e.didUpdate, r = e.getContainer, a = e.children, i = De(), o = De();
  ho(t, function() {
    return {};
  });
  var s = De(!1);
  return !s.current && jn() && (o.current = r(), i.current = o.current.parentNode, s.current = !0), Dt(function() {
    n == null || n(e);
  }), Dt(function() {
    return o.current.parentNode === null && i.current !== null && i.current.appendChild(o.current), function() {
      var l;
      (l = o.current) === null || l === void 0 || (l = l.parentNode) === null || l === void 0 || l.removeChild(o.current);
    };
  }, []), o.current ? /* @__PURE__ */ $a.createPortal(a, o.current) : null;
});
function ew(e, t, n) {
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function tw(e, t, n) {
  var r = e[t] || {};
  return D(D({}, r), n);
}
function nw(e, t, n, r) {
  for (var a = n.points, i = Object.keys(e), o = 0; o < i.length; o += 1) {
    var s = i[o];
    if (ew(e[s].points, a, r))
      return "".concat(t, "-placement-").concat(s);
  }
  return "";
}
function Cm(e) {
  var t = e.prefixCls, n = e.motion, r = e.animation, a = e.transitionName;
  return n || (r ? {
    motionName: "".concat(t, "-").concat(r)
  } : a ? {
    motionName: a
  } : null);
}
function rw(e) {
  var t = e.prefixCls, n = e.visible, r = e.zIndex, a = e.mask, i = e.maskMotion, o = e.maskAnimation, s = e.maskTransitionName;
  if (!a)
    return null;
  var l = {};
  return (i || s || o) && (l = D({
    motionAppear: !0
  }, Cm({
    motion: i,
    prefixCls: t,
    transitionName: s,
    animation: o
  }))), /* @__PURE__ */ c.createElement(Pr, K({}, l, {
    visible: n,
    removeOnLeave: !0
  }), function(u) {
    var d = u.className;
    return /* @__PURE__ */ c.createElement("div", {
      style: {
        zIndex: r
      },
      className: ne("".concat(t, "-mask"), d)
    });
  });
}
function Fd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Md(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fd(Object(n), !0).forEach(function(r) {
      aw(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fd(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Nl(e) {
  "@babel/helpers - typeof";
  return Nl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nl(e);
}
function aw(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
var Sa, iw = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  // IE did it wrong again ...
  ms: "-ms-",
  O: "-o-"
};
function ro() {
  if (Sa !== void 0)
    return Sa;
  Sa = "";
  var e = document.createElement("p").style, t = "Transform";
  for (var n in iw)
    n + t in e && (Sa = n);
  return Sa;
}
function xm() {
  return ro() ? "".concat(ro(), "TransitionProperty") : "transitionProperty";
}
function _o() {
  return ro() ? "".concat(ro(), "Transform") : "transform";
}
function $d(e, t) {
  var n = xm();
  n && (e.style[n] = t, n !== "transitionProperty" && (e.style.transitionProperty = t));
}
function bs(e, t) {
  var n = _o();
  n && (e.style[n] = t, n !== "transform" && (e.style.transform = t));
}
function ow(e) {
  return e.style.transitionProperty || e.style[xm()];
}
function sw(e) {
  var t = window.getComputedStyle(e, null), n = t.getPropertyValue("transform") || t.getPropertyValue(_o());
  if (n && n !== "none") {
    var r = n.replace(/[^0-9\-.,]/g, "").split(",");
    return {
      x: parseFloat(r[12] || r[4], 0),
      y: parseFloat(r[13] || r[5], 0)
    };
  }
  return {
    x: 0,
    y: 0
  };
}
var lw = /matrix\((.*)\)/, uw = /matrix3d\((.*)\)/;
function cw(e, t) {
  var n = window.getComputedStyle(e, null), r = n.getPropertyValue("transform") || n.getPropertyValue(_o());
  if (r && r !== "none") {
    var a, i = r.match(lw);
    if (i)
      i = i[1], a = i.split(",").map(function(s) {
        return parseFloat(s, 10);
      }), a[4] = t.x, a[5] = t.y, bs(e, "matrix(".concat(a.join(","), ")"));
    else {
      var o = r.match(uw)[1];
      a = o.split(",").map(function(s) {
        return parseFloat(s, 10);
      }), a[12] = t.x, a[13] = t.y, bs(e, "matrix3d(".concat(a.join(","), ")"));
    }
  } else
    bs(e, "translateX(".concat(t.x, "px) translateY(").concat(t.y, "px) translateZ(0)"));
}
var dw = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, ri;
function Dd(e) {
  var t = e.style.display;
  e.style.display = "none", e.offsetHeight, e.style.display = t;
}
function Gr(e, t, n) {
  var r = n;
  if (Nl(t) === "object") {
    for (var a in t)
      t.hasOwnProperty(a) && Gr(e, a, t[a]);
    return;
  }
  if (typeof r < "u") {
    typeof r == "number" && (r = "".concat(r, "px")), e.style[t] = r;
    return;
  }
  return ri(e, t);
}
function fw(e) {
  var t, n, r, a = e.ownerDocument, i = a.body, o = a && a.documentElement;
  return t = e.getBoundingClientRect(), n = Math.floor(t.left), r = Math.floor(t.top), n -= o.clientLeft || i.clientLeft || 0, r -= o.clientTop || i.clientTop || 0, {
    left: n,
    top: r
  };
}
function Sm(e, t) {
  var n = e["page".concat(t ? "Y" : "X", "Offset")], r = "scroll".concat(t ? "Top" : "Left");
  if (typeof n != "number") {
    var a = e.document;
    n = a.documentElement[r], typeof n != "number" && (n = a.body[r]);
  }
  return n;
}
function Em(e) {
  return Sm(e);
}
function wm(e) {
  return Sm(e, !0);
}
function Ba(e) {
  var t = fw(e), n = e.ownerDocument, r = n.defaultView || n.parentWindow;
  return t.left += Em(r), t.top += wm(r), t;
}
function Ou(e) {
  return e != null && e == e.window;
}
function Nm(e) {
  return Ou(e) ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
}
function vw(e, t, n) {
  var r = n, a = "", i = Nm(e);
  return r = r || i.defaultView.getComputedStyle(e, null), r && (a = r.getPropertyValue(t) || r[t]), a;
}
var pw = new RegExp("^(".concat(dw, ")(?!px)[a-z%]+$"), "i"), mw = /^(top|right|bottom|left)$/, Cs = "currentStyle", xs = "runtimeStyle", mr = "left", hw = "px";
function gw(e, t) {
  var n = e[Cs] && e[Cs][t];
  if (pw.test(n) && !mw.test(t)) {
    var r = e.style, a = r[mr], i = e[xs][mr];
    e[xs][mr] = e[Cs][mr], r[mr] = t === "fontSize" ? "1em" : n || 0, n = r.pixelLeft + hw, r[mr] = a, e[xs][mr] = i;
  }
  return n === "" ? "auto" : n;
}
typeof window < "u" && (ri = window.getComputedStyle ? vw : gw);
function Si(e, t) {
  return e === "left" ? t.useCssRight ? "right" : e : t.useCssBottom ? "bottom" : e;
}
function Ad(e) {
  if (e === "left")
    return "right";
  if (e === "right")
    return "left";
  if (e === "top")
    return "bottom";
  if (e === "bottom")
    return "top";
}
function Ld(e, t, n) {
  Gr(e, "position") === "static" && (e.style.position = "relative");
  var r = -999, a = -999, i = Si("left", n), o = Si("top", n), s = Ad(i), l = Ad(o);
  i !== "left" && (r = 999), o !== "top" && (a = 999);
  var u = "", d = Ba(e);
  ("left" in t || "top" in t) && (u = ow(e) || "", $d(e, "none")), "left" in t && (e.style[s] = "", e.style[i] = "".concat(r, "px")), "top" in t && (e.style[l] = "", e.style[o] = "".concat(a, "px")), Dd(e);
  var f = Ba(e), v = {};
  for (var p in t)
    if (t.hasOwnProperty(p)) {
      var h = Si(p, n), g = p === "left" ? r : a, m = d[p] - f[p];
      h === p ? v[h] = g + m : v[h] = g - m;
    }
  Gr(e, v), Dd(e), ("left" in t || "top" in t) && $d(e, u);
  var y = {};
  for (var b in t)
    if (t.hasOwnProperty(b)) {
      var x = Si(b, n), C = t[b] - d[b];
      b === x ? y[x] = v[x] + C : y[x] = v[x] - C;
    }
  Gr(e, y);
}
function yw(e, t) {
  var n = Ba(e), r = sw(e), a = {
    x: r.x,
    y: r.y
  };
  "left" in t && (a.x = r.x + t.left - n.left), "top" in t && (a.y = r.y + t.top - n.top), cw(e, a);
}
function bw(e, t, n) {
  if (n.ignoreShake) {
    var r = Ba(e), a = r.left.toFixed(0), i = r.top.toFixed(0), o = t.left.toFixed(0), s = t.top.toFixed(0);
    if (a === o && i === s)
      return;
  }
  n.useCssRight || n.useCssBottom ? Ld(e, t, n) : n.useCssTransform && _o() in document.body.style ? yw(e, t) : Ld(e, t, n);
}
function Pu(e, t) {
  for (var n = 0; n < e.length; n++)
    t(e[n]);
}
function Om(e) {
  return ri(e, "boxSizing") === "border-box";
}
var Cw = ["margin", "border", "padding"], Ol = -1, xw = 2, Pl = 1, Sw = 0;
function Ew(e, t, n) {
  var r = {}, a = e.style, i;
  for (i in t)
    t.hasOwnProperty(i) && (r[i] = a[i], a[i] = t[i]);
  n.call(e);
  for (i in t)
    t.hasOwnProperty(i) && (a[i] = r[i]);
}
function Pa(e, t, n) {
  var r = 0, a, i, o;
  for (i = 0; i < t.length; i++)
    if (a = t[i], a)
      for (o = 0; o < n.length; o++) {
        var s = void 0;
        a === "border" ? s = "".concat(a).concat(n[o], "Width") : s = a + n[o], r += parseFloat(ri(e, s)) || 0;
      }
  return r;
}
var Ln = {
  getParent: function(t) {
    var n = t;
    do
      n.nodeType === 11 && n.host ? n = n.host : n = n.parentNode;
    while (n && n.nodeType !== 1 && n.nodeType !== 9);
    return n;
  }
};
Pu(["Width", "Height"], function(e) {
  Ln["doc".concat(e)] = function(t) {
    var n = t.document;
    return Math.max(
      // firefox chrome documentElement.scrollHeight< body.scrollHeight
      // ie standard mode : documentElement.scrollHeight> body.scrollHeight
      n.documentElement["scroll".concat(e)],
      // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
      n.body["scroll".concat(e)],
      Ln["viewport".concat(e)](n)
    );
  }, Ln["viewport".concat(e)] = function(t) {
    var n = "client".concat(e), r = t.document, a = r.body, i = r.documentElement, o = i[n];
    return r.compatMode === "CSS1Compat" && o || a && a[n] || o;
  };
});
function Kd(e, t, n) {
  var r = n;
  if (Ou(e))
    return t === "width" ? Ln.viewportWidth(e) : Ln.viewportHeight(e);
  if (e.nodeType === 9)
    return t === "width" ? Ln.docWidth(e) : Ln.docHeight(e);
  var a = t === "width" ? ["Left", "Right"] : ["Top", "Bottom"], i = Math.floor(t === "width" ? e.getBoundingClientRect().width : e.getBoundingClientRect().height), o = Om(e), s = 0;
  (i == null || i <= 0) && (i = void 0, s = ri(e, t), (s == null || Number(s) < 0) && (s = e.style[t] || 0), s = Math.floor(parseFloat(s)) || 0), r === void 0 && (r = o ? Pl : Ol);
  var l = i !== void 0 || o, u = i || s;
  return r === Ol ? l ? u - Pa(e, ["border", "padding"], a) : s : l ? r === Pl ? u : u + (r === xw ? -Pa(e, ["border"], a) : Pa(e, ["margin"], a)) : s + Pa(e, Cw.slice(r), a);
}
var ww = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
};
function Vd() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, a = t[0];
  return a.offsetWidth !== 0 ? r = Kd.apply(void 0, t) : Ew(a, ww, function() {
    r = Kd.apply(void 0, t);
  }), r;
}
Pu(["width", "height"], function(e) {
  var t = e.charAt(0).toUpperCase() + e.slice(1);
  Ln["outer".concat(t)] = function(r, a) {
    return r && Vd(r, e, a ? Sw : Pl);
  };
  var n = e === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  Ln[e] = function(r, a) {
    var i = a;
    if (i !== void 0) {
      if (r) {
        var o = Om(r);
        return o && (i += Pa(r, ["padding", "border"], n)), Gr(r, e, i);
      }
      return;
    }
    return r && Vd(r, e, Ol);
  };
});
function Pm(e, t) {
  for (var n in t)
    t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
var Xe = {
  getWindow: function(t) {
    if (t && t.document && t.setTimeout)
      return t;
    var n = t.ownerDocument || t;
    return n.defaultView || n.parentWindow;
  },
  getDocument: Nm,
  offset: function(t, n, r) {
    if (typeof n < "u")
      bw(t, n, r || {});
    else
      return Ba(t);
  },
  isWindow: Ou,
  each: Pu,
  css: Gr,
  clone: function(t) {
    var n, r = {};
    for (n in t)
      t.hasOwnProperty(n) && (r[n] = t[n]);
    var a = t.overflow;
    if (a)
      for (n in t)
        t.hasOwnProperty(n) && (r.overflow[n] = t.overflow[n]);
    return r;
  },
  mix: Pm,
  getWindowScrollLeft: function(t) {
    return Em(t);
  },
  getWindowScrollTop: function(t) {
    return wm(t);
  },
  merge: function() {
    for (var t = {}, n = 0; n < arguments.length; n++)
      Xe.mix(t, n < 0 || arguments.length <= n ? void 0 : arguments[n]);
    return t;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
Pm(Xe, Ln);
var Ss = Xe.getParent;
function Rl(e) {
  if (Xe.isWindow(e) || e.nodeType === 9)
    return null;
  var t = Xe.getDocument(e), n = t.body, r, a = Xe.css(e, "position"), i = a === "fixed" || a === "absolute";
  if (!i)
    return e.nodeName.toLowerCase() === "html" ? null : Ss(e);
  for (r = Ss(e); r && r !== n && r.nodeType !== 9; r = Ss(r))
    if (a = Xe.css(r, "position"), a !== "static")
      return r;
  return null;
}
var zd = Xe.getParent;
function Nw(e) {
  if (Xe.isWindow(e) || e.nodeType === 9)
    return !1;
  var t = Xe.getDocument(e), n = t.body, r = null;
  for (
    r = zd(e);
    // 修复元素位于 document.documentElement 下导致崩溃问题
    r && r !== n && r !== t;
    r = zd(r)
  ) {
    var a = Xe.css(r, "position");
    if (a === "fixed")
      return !0;
  }
  return !1;
}
function Ru(e, t) {
  for (var n = {
    left: 0,
    right: 1 / 0,
    top: 0,
    bottom: 1 / 0
  }, r = Rl(e), a = Xe.getDocument(e), i = a.defaultView || a.parentWindow, o = a.body, s = a.documentElement; r; ) {
    if ((navigator.userAgent.indexOf("MSIE") === -1 || r.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    r !== o && r !== s && Xe.css(r, "overflow") !== "visible") {
      var l = Xe.offset(r);
      l.left += r.clientLeft, l.top += r.clientTop, n.top = Math.max(n.top, l.top), n.right = Math.min(
        n.right,
        // consider area without scrollBar
        l.left + r.clientWidth
      ), n.bottom = Math.min(n.bottom, l.top + r.clientHeight), n.left = Math.max(n.left, l.left);
    } else if (r === o || r === s)
      break;
    r = Rl(r);
  }
  var u = null;
  if (!Xe.isWindow(e) && e.nodeType !== 9) {
    u = e.style.position;
    var d = Xe.css(e, "position");
    d === "absolute" && (e.style.position = "fixed");
  }
  var f = Xe.getWindowScrollLeft(i), v = Xe.getWindowScrollTop(i), p = Xe.viewportWidth(i), h = Xe.viewportHeight(i), g = s.scrollWidth, m = s.scrollHeight, y = window.getComputedStyle(o);
  if (y.overflowX === "hidden" && (g = i.innerWidth), y.overflowY === "hidden" && (m = i.innerHeight), e.style && (e.style.position = u), t || Nw(e))
    n.left = Math.max(n.left, f), n.top = Math.max(n.top, v), n.right = Math.min(n.right, f + p), n.bottom = Math.min(n.bottom, v + h);
  else {
    var b = Math.max(g, f + p);
    n.right = Math.min(n.right, b);
    var x = Math.max(m, v + h);
    n.bottom = Math.min(n.bottom, x);
  }
  return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left ? n : null;
}
function Ow(e, t, n, r) {
  var a = Xe.clone(e), i = {
    width: t.width,
    height: t.height
  };
  return r.adjustX && a.left < n.left && (a.left = n.left), r.resizeWidth && a.left >= n.left && a.left + i.width > n.right && (i.width -= a.left + i.width - n.right), r.adjustX && a.left + i.width > n.right && (a.left = Math.max(n.right - i.width, n.left)), r.adjustY && a.top < n.top && (a.top = n.top), r.resizeHeight && a.top >= n.top && a.top + i.height > n.bottom && (i.height -= a.top + i.height - n.bottom), r.adjustY && a.top + i.height > n.bottom && (a.top = Math.max(n.bottom - i.height, n.top)), Xe.mix(a, i);
}
function ku(e) {
  var t, n, r;
  if (!Xe.isWindow(e) && e.nodeType !== 9)
    t = Xe.offset(e), n = Xe.outerWidth(e), r = Xe.outerHeight(e);
  else {
    var a = Xe.getWindow(e);
    t = {
      left: Xe.getWindowScrollLeft(a),
      top: Xe.getWindowScrollTop(a)
    }, n = Xe.viewportWidth(a), r = Xe.viewportHeight(a);
  }
  return t.width = n, t.height = r, t;
}
function jd(e, t) {
  var n = t.charAt(0), r = t.charAt(1), a = e.width, i = e.height, o = e.left, s = e.top;
  return n === "c" ? s += i / 2 : n === "b" && (s += i), r === "c" ? o += a / 2 : r === "r" && (o += a), {
    left: o,
    top: s
  };
}
function Ei(e, t, n, r, a) {
  var i = jd(t, n[1]), o = jd(e, n[0]), s = [o.left - i.left, o.top - i.top];
  return {
    left: Math.round(e.left - s[0] + r[0] - a[0]),
    top: Math.round(e.top - s[1] + r[1] - a[1])
  };
}
function Hd(e, t, n) {
  return e.left < n.left || e.left + t.width > n.right;
}
function Bd(e, t, n) {
  return e.top < n.top || e.top + t.height > n.bottom;
}
function Pw(e, t, n) {
  return e.left > n.right || e.left + t.width < n.left;
}
function Rw(e, t, n) {
  return e.top > n.bottom || e.top + t.height < n.top;
}
function wi(e, t, n) {
  var r = [];
  return Xe.each(e, function(a) {
    r.push(a.replace(t, function(i) {
      return n[i];
    }));
  }), r;
}
function Ni(e, t) {
  return e[t] = -e[t], e;
}
function Ud(e, t) {
  var n;
  return /%$/.test(e) ? n = parseInt(e.substring(0, e.length - 1), 10) / 100 * t : n = parseInt(e, 10), n || 0;
}
function Wd(e, t) {
  e[0] = Ud(e[0], t.width), e[1] = Ud(e[1], t.height);
}
function Rm(e, t, n, r) {
  var a = n.points, i = n.offset || [0, 0], o = n.targetOffset || [0, 0], s = n.overflow, l = n.source || e;
  i = [].concat(i), o = [].concat(o), s = s || {};
  var u = {}, d = 0, f = !!(s && s.alwaysByViewport), v = Ru(l, f), p = ku(l);
  Wd(i, p), Wd(o, t);
  var h = Ei(p, t, a, i, o), g = Xe.merge(p, h);
  if (v && (s.adjustX || s.adjustY) && r) {
    if (s.adjustX && Hd(h, p, v)) {
      var m = wi(a, /[lr]/gi, {
        l: "r",
        r: "l"
      }), y = Ni(i, 0), b = Ni(o, 0), x = Ei(p, t, m, y, b);
      Pw(x, p, v) || (d = 1, a = m, i = y, o = b);
    }
    if (s.adjustY && Bd(h, p, v)) {
      var C = wi(a, /[tb]/gi, {
        t: "b",
        b: "t"
      }), E = Ni(i, 1), S = Ni(o, 1), w = Ei(p, t, C, E, S);
      Rw(w, p, v) || (d = 1, a = C, i = E, o = S);
    }
    d && (h = Ei(p, t, a, i, o), Xe.mix(g, h));
    var N = Hd(h, p, v), O = Bd(h, p, v);
    if (N || O) {
      var _ = a;
      N && (_ = wi(a, /[lr]/gi, {
        l: "r",
        r: "l"
      })), O && (_ = wi(a, /[tb]/gi, {
        t: "b",
        b: "t"
      })), a = _, i = n.offset || [0, 0], o = n.targetOffset || [0, 0];
    }
    u.adjustX = s.adjustX && N, u.adjustY = s.adjustY && O, (u.adjustX || u.adjustY) && (g = Ow(h, p, v, u));
  }
  return g.width !== p.width && Xe.css(l, "width", Xe.width(l) + g.width - p.width), g.height !== p.height && Xe.css(l, "height", Xe.height(l) + g.height - p.height), Xe.offset(l, {
    left: g.left,
    top: g.top
  }, {
    useCssRight: n.useCssRight,
    useCssBottom: n.useCssBottom,
    useCssTransform: n.useCssTransform,
    ignoreShake: n.ignoreShake
  }), {
    points: a,
    offset: i,
    targetOffset: o,
    overflow: u
  };
}
function kw(e, t) {
  var n = Ru(e, t), r = ku(e);
  return !n || r.left + r.width <= n.left || r.top + r.height <= n.top || r.left >= n.right || r.top >= n.bottom;
}
function Tu(e, t, n) {
  var r = n.target || t, a = ku(r), i = !kw(r, n.overflow && n.overflow.alwaysByViewport);
  return Rm(e, a, n, i);
}
Tu.__getOffsetParent = Rl;
Tu.__getVisibleRectForElement = Ru;
function Tw(e, t, n) {
  var r, a, i = Xe.getDocument(e), o = i.defaultView || i.parentWindow, s = Xe.getWindowScrollLeft(o), l = Xe.getWindowScrollTop(o), u = Xe.viewportWidth(o), d = Xe.viewportHeight(o);
  "pageX" in t ? r = t.pageX : r = s + t.clientX, "pageY" in t ? a = t.pageY : a = l + t.clientY;
  var f = {
    left: r,
    top: a,
    width: 0,
    height: 0
  }, v = r >= 0 && r <= s + u && a >= 0 && a <= l + d, p = [n.points[0], "cc"];
  return Rm(e, f, Md(Md({}, n), {}, {
    points: p
  }), v);
}
function _u(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function a(i, o) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, l = r.has(i);
    if (Fe(!l, "Warning: There may be circular references"), l)
      return !1;
    if (i === o)
      return !0;
    if (n && s > 1)
      return !1;
    r.add(i);
    var u = s + 1;
    if (Array.isArray(i)) {
      if (!Array.isArray(o) || i.length !== o.length)
        return !1;
      for (var d = 0; d < i.length; d++)
        if (!a(i[d], o[d], u))
          return !1;
      return !0;
    }
    if (i && o && Le(i) === "object" && Le(o) === "object") {
      var f = Object.keys(i);
      return f.length !== Object.keys(o).length ? !1 : f.every(function(v) {
        return a(i[v], o[v], u);
      });
    }
    return !1;
  }
  return a(e, t);
}
const Iu = function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), n = t.width, r = t.height;
      if (n || r)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var a = e.getBoundingClientRect(), i = a.width, o = a.height;
      if (i || o)
        return !0;
    }
  }
  return !1;
}, _w = function(e, t) {
  var n = be.useRef(!1), r = be.useRef(null);
  function a() {
    window.clearTimeout(r.current);
  }
  function i(o) {
    if (a(), !n.current || o === !0) {
      if (e(o) === !1)
        return;
      n.current = !0, r.current = window.setTimeout(function() {
        n.current = !1;
      }, t);
    } else
      r.current = window.setTimeout(function() {
        n.current = !1, i();
      }, t);
  }
  return [i, function() {
    n.current = !1, a();
  }];
};
function Iw(e, t) {
  return e === t ? !0 : !e || !t ? !1 : "pageX" in t && "pageY" in t ? e.pageX === t.pageX && e.pageY === t.pageY : "clientX" in t && "clientY" in t ? e.clientX === t.clientX && e.clientY === t.clientY : !1;
}
function Fw(e, t) {
  e !== document.activeElement && Ta(t, e) && typeof e.focus == "function" && e.focus();
}
function Gd(e, t) {
  var n = null, r = null;
  function a(o) {
    var s = X(o, 1), l = s[0].target;
    if (document.documentElement.contains(l)) {
      var u = l.getBoundingClientRect(), d = u.width, f = u.height, v = Math.floor(d), p = Math.floor(f);
      (n !== v || r !== p) && Promise.resolve().then(function() {
        t({
          width: v,
          height: p
        });
      }), n = v, r = p;
    }
  }
  var i = new Xv(a);
  return e && i.observe(e), function() {
    i.disconnect();
  };
}
function qd(e) {
  return typeof e != "function" ? null : e();
}
function Yd(e) {
  return Le(e) !== "object" || !e ? null : e;
}
var Mw = function(t, n) {
  var r = t.children, a = t.disabled, i = t.target, o = t.align, s = t.onAlign, l = t.monitorWindowResize, u = t.monitorBufferTime, d = u === void 0 ? 0 : u, f = be.useRef({}), v = be.useRef(), p = be.Children.only(r), h = be.useRef({});
  h.current.disabled = a, h.current.target = i, h.current.align = o, h.current.onAlign = s;
  var g = _w(function() {
    var $ = h.current, I = $.disabled, F = $.target, M = $.align, V = $.onAlign, T = v.current;
    if (!I && F && T) {
      var R, k = qd(F), A = Yd(F);
      f.current.element = k, f.current.point = A, f.current.align = M;
      var U = document, z = U.activeElement;
      return k && Iu(k) ? R = Tu(T, k, M) : A && (R = Tw(T, A, M)), Fw(z, T), V && R && V(T, R), !0;
    }
    return !1;
  }, d), m = X(g, 2), y = m[0], b = m[1], x = be.useState(), C = X(x, 2), E = C[0], S = C[1], w = be.useState(), N = X(w, 2), O = N[0], _ = N[1];
  return rn(function() {
    S(qd(i)), _(Yd(i));
  }), be.useEffect(function() {
    (f.current.element !== E || !Iw(f.current.point, O) || !_u(f.current.align, o)) && y();
  }), be.useEffect(function() {
    var $ = Gd(v.current, y);
    return $;
  }, [v.current]), be.useEffect(function() {
    var $ = Gd(E, y);
    return $;
  }, [E]), be.useEffect(function() {
    a ? b() : y();
  }, [a]), be.useEffect(function() {
    if (l) {
      var $ = Zn(window, "resize", y);
      return $.remove;
    }
  }, [l]), be.useEffect(function() {
    return function() {
      b();
    };
  }, []), be.useImperativeHandle(n, function() {
    return {
      forceAlign: function() {
        return y(!0);
      }
    };
  }), /* @__PURE__ */ be.isValidElement(p) && (p = /* @__PURE__ */ be.cloneElement(p, {
    ref: er(p.ref, v)
  })), p;
}, km = /* @__PURE__ */ be.forwardRef(Mw);
km.displayName = "Align";
var Xd = ["measure", "alignPre", "align", null, "motion"];
const $w = function(e, t) {
  var n = wr(null), r = X(n, 2), a = r[0], i = r[1], o = De();
  function s(d) {
    i(d, !0);
  }
  function l() {
    mt.cancel(o.current);
  }
  function u(d) {
    l(), o.current = mt(function() {
      s(function(f) {
        switch (a) {
          case "align":
            return "motion";
          case "motion":
            return "stable";
        }
        return f;
      }), d == null || d();
    });
  }
  return Dt(function() {
    s("measure");
  }, [e]), Dt(function() {
    switch (a) {
      case "measure":
        t();
        break;
    }
    a && (o.current = mt(/* @__PURE__ */ Ja(/* @__PURE__ */ kn().mark(function d() {
      var f, v;
      return kn().wrap(function(h) {
        for (; ; )
          switch (h.prev = h.next) {
            case 0:
              f = Xd.indexOf(a), v = Xd[f + 1], v && f !== -1 && s(v);
            case 3:
            case "end":
              return h.stop();
          }
      }, d);
    }))));
  }, [a]), Dt(function() {
    return function() {
      l();
    };
  }, []), [a, u];
}, Dw = function(e) {
  var t = c.useState({
    width: 0,
    height: 0
  }), n = X(t, 2), r = n[0], a = n[1];
  function i(s) {
    var l = s.offsetWidth, u = s.offsetHeight, d = s.getBoundingClientRect(), f = d.width, v = d.height;
    Math.abs(l - f) < 1 && Math.abs(u - v) < 1 && (l = f, u = v), a({
      width: l,
      height: u
    });
  }
  var o = c.useMemo(function() {
    var s = {};
    if (e) {
      var l = r.width, u = r.height;
      e.indexOf("height") !== -1 && u ? s.height = u : e.indexOf("minHeight") !== -1 && u && (s.minHeight = u), e.indexOf("width") !== -1 && l ? s.width = l : e.indexOf("minWidth") !== -1 && l && (s.minWidth = l);
    }
    return s;
  }, [e, r]);
  return [o, i];
};
var Tm = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var n = e.visible, r = e.prefixCls, a = e.className, i = e.style, o = e.children, s = e.zIndex, l = e.stretch, u = e.destroyPopupOnHide, d = e.forceRender, f = e.align, v = e.point, p = e.getRootDomNode, h = e.getClassNameFromAlign, g = e.onAlign, m = e.onMouseEnter, y = e.onMouseLeave, b = e.onMouseDown, x = e.onTouchStart, C = e.onClick, E = De(), S = De(), w = Ut(), N = X(w, 2), O = N[0], _ = N[1], $ = Dw(l), I = X($, 2), F = I[0], M = I[1];
  function V() {
    l && M(p());
  }
  var T = $w(n, V), R = X(T, 2), k = R[0], A = R[1], U = Ut(0), z = X(U, 2), B = z[0], G = z[1], W = De();
  rn(function() {
    k === "alignPre" && G(0);
  }, [k]);
  function j() {
    return v || p;
  }
  function H() {
    var Z;
    (Z = E.current) === null || Z === void 0 || Z.forceAlign();
  }
  function q(Z, Q) {
    var ce = h(Q);
    O !== ce && _(ce), G(function(Ce) {
      return Ce + 1;
    }), k === "align" && (g == null || g(Z, Q));
  }
  rn(function() {
    k === "align" && (B < 3 ? H() : A(function() {
      var Z;
      (Z = W.current) === null || Z === void 0 || Z.call(W);
    }));
  }, [B]);
  var Y = D({}, Cm(e));
  ["onAppearEnd", "onEnterEnd", "onLeaveEnd"].forEach(function(Z) {
    var Q = Y[Z];
    Y[Z] = function(ce, Ce) {
      return A(), Q == null ? void 0 : Q(ce, Ce);
    };
  });
  function J() {
    return new Promise(function(Z) {
      W.current = Z;
    });
  }
  c.useEffect(function() {
    !Y.motionName && k === "motion" && A();
  }, [Y.motionName, k]), c.useImperativeHandle(t, function() {
    return {
      forceAlign: H,
      getElement: function() {
        return S.current;
      }
    };
  });
  var oe = D(D({}, F), {}, {
    zIndex: s,
    opacity: k === "motion" || k === "stable" || !n ? void 0 : 0,
    // Cannot interact with disappearing elements
    // https://github.com/ant-design/ant-design/issues/35051#issuecomment-1101340714
    pointerEvents: !n && k !== "stable" ? "none" : void 0
  }, i), re = !0;
  f != null && f.points && (k === "align" || k === "stable") && (re = !1);
  var de = o;
  return c.Children.count(o) > 1 && (de = /* @__PURE__ */ c.createElement("div", {
    className: "".concat(r, "-content")
  }, o)), /* @__PURE__ */ c.createElement(Pr, K({
    visible: n,
    ref: S,
    leavedClassName: "".concat(r, "-hidden")
  }, Y, {
    onAppearPrepare: J,
    onEnterPrepare: J,
    removeOnLeave: u,
    forceRender: d
  }), function(Z, Q) {
    var ce = Z.className, Ce = Z.style, we = ne(r, a, O, ce);
    return /* @__PURE__ */ c.createElement(km, {
      target: j(),
      key: "popup",
      ref: E,
      monitorWindowResize: !0,
      disabled: re,
      align: f,
      onAlign: q
    }, /* @__PURE__ */ c.createElement("div", {
      ref: Q,
      className: we,
      onMouseEnter: m,
      onMouseLeave: y,
      onMouseDownCapture: b,
      onTouchStartCapture: x,
      onClick: C,
      style: D(D({}, Ce), oe)
    }, de));
  });
});
Tm.displayName = "PopupInner";
var _m = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.visible, a = e.zIndex, i = e.children, o = e.mobile;
  o = o === void 0 ? {} : o;
  var s = o.popupClassName, l = o.popupStyle, u = o.popupMotion, d = u === void 0 ? {} : u, f = o.popupRender, v = e.onClick, p = c.useRef();
  c.useImperativeHandle(t, function() {
    return {
      forceAlign: function() {
      },
      getElement: function() {
        return p.current;
      }
    };
  });
  var h = D({
    zIndex: a
  }, l), g = i;
  return c.Children.count(i) > 1 && (g = /* @__PURE__ */ c.createElement("div", {
    className: "".concat(n, "-content")
  }, i)), f && (g = f(g)), /* @__PURE__ */ c.createElement(Pr, K({
    visible: r,
    ref: p,
    removeOnLeave: !0
  }, d), function(m, y) {
    var b = m.className, x = m.style, C = ne(n, s, b);
    return /* @__PURE__ */ c.createElement("div", {
      ref: y,
      className: C,
      onClick: v,
      style: D(D({}, x), h)
    }, g);
  });
});
_m.displayName = "MobilePopupInner";
var Aw = ["visible", "mobile"], Im = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var n = e.visible, r = e.mobile, a = We(e, Aw), i = Ut(n), o = X(i, 2), s = o[0], l = o[1], u = Ut(!1), d = X(u, 2), f = d[0], v = d[1], p = D(D({}, a), {}, {
    visible: s
  });
  Dt(function() {
    l(n), n && r && v(fm());
  }, [n, r]);
  var h = f ? /* @__PURE__ */ c.createElement(_m, K({}, p, {
    mobile: r,
    ref: t
  })) : /* @__PURE__ */ c.createElement(Tm, K({}, p, {
    ref: t
  }));
  return /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(rw, p), h);
});
Im.displayName = "Popup";
var Jd = /* @__PURE__ */ c.createContext(null);
function Es() {
}
function Lw() {
  return "";
}
function Kw(e) {
  return e ? e.ownerDocument : window.document;
}
var Vw = ["onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur", "onContextMenu"];
function zw(e) {
  var t = /* @__PURE__ */ function(n) {
    Gt(a, n);
    var r = qt(a);
    function a(i) {
      var o;
      Kt(this, a), o = r.call(this, i), P(Ue(o), "popupRef", /* @__PURE__ */ c.createRef()), P(Ue(o), "triggerRef", /* @__PURE__ */ c.createRef()), P(Ue(o), "portalContainer", void 0), P(Ue(o), "attachId", void 0), P(Ue(o), "clickOutsideHandler", void 0), P(Ue(o), "touchOutsideHandler", void 0), P(Ue(o), "contextMenuOutsideHandler1", void 0), P(Ue(o), "contextMenuOutsideHandler2", void 0), P(Ue(o), "mouseDownTimeout", void 0), P(Ue(o), "focusTime", void 0), P(Ue(o), "preClickTime", void 0), P(Ue(o), "preTouchTime", void 0), P(Ue(o), "delayTimer", void 0), P(Ue(o), "hasPopupMouseDown", void 0), P(Ue(o), "onMouseEnter", function(l) {
        var u = o.props.mouseEnterDelay;
        o.fireEvents("onMouseEnter", l), o.delaySetPopupVisible(!0, u, u ? null : l);
      }), P(Ue(o), "onMouseMove", function(l) {
        o.fireEvents("onMouseMove", l), o.setPoint(l);
      }), P(Ue(o), "onMouseLeave", function(l) {
        o.fireEvents("onMouseLeave", l), o.delaySetPopupVisible(!1, o.props.mouseLeaveDelay);
      }), P(Ue(o), "onPopupMouseEnter", function() {
        o.clearDelayTimer();
      }), P(Ue(o), "onPopupMouseLeave", function(l) {
        var u;
        l.relatedTarget && !l.relatedTarget.setTimeout && Ta((u = o.popupRef.current) === null || u === void 0 ? void 0 : u.getElement(), l.relatedTarget) || o.delaySetPopupVisible(!1, o.props.mouseLeaveDelay);
      }), P(Ue(o), "onFocus", function(l) {
        o.fireEvents("onFocus", l), o.clearDelayTimer(), o.isFocusToShow() && (o.focusTime = Date.now(), o.delaySetPopupVisible(!0, o.props.focusDelay));
      }), P(Ue(o), "onMouseDown", function(l) {
        o.fireEvents("onMouseDown", l), o.preClickTime = Date.now();
      }), P(Ue(o), "onTouchStart", function(l) {
        o.fireEvents("onTouchStart", l), o.preTouchTime = Date.now();
      }), P(Ue(o), "onBlur", function(l) {
        o.fireEvents("onBlur", l), o.clearDelayTimer(), o.isBlurToHide() && o.delaySetPopupVisible(!1, o.props.blurDelay);
      }), P(Ue(o), "onContextMenu", function(l) {
        l.preventDefault(), o.fireEvents("onContextMenu", l), o.setPopupVisible(!0, l);
      }), P(Ue(o), "onContextMenuClose", function() {
        o.isContextMenuToShow() && o.close();
      }), P(Ue(o), "onClick", function(l) {
        if (o.fireEvents("onClick", l), o.focusTime) {
          var u;
          if (o.preClickTime && o.preTouchTime ? u = Math.min(o.preClickTime, o.preTouchTime) : o.preClickTime ? u = o.preClickTime : o.preTouchTime && (u = o.preTouchTime), Math.abs(u - o.focusTime) < 20)
            return;
          o.focusTime = 0;
        }
        o.preClickTime = 0, o.preTouchTime = 0, o.isClickToShow() && (o.isClickToHide() || o.isBlurToHide()) && l && l.preventDefault && l.preventDefault();
        var d = !o.state.popupVisible;
        (o.isClickToHide() && !d || d && o.isClickToShow()) && o.setPopupVisible(!o.state.popupVisible, l);
      }), P(Ue(o), "onPopupMouseDown", function() {
        if (o.hasPopupMouseDown = !0, clearTimeout(o.mouseDownTimeout), o.mouseDownTimeout = window.setTimeout(function() {
          o.hasPopupMouseDown = !1;
        }, 0), o.context) {
          var l;
          (l = o.context).onPopupMouseDown.apply(l, arguments);
        }
      }), P(Ue(o), "onDocumentClick", function(l) {
        if (!(o.props.mask && !o.props.maskClosable)) {
          var u = l.target, d = o.getRootDomNode(), f = o.getPopupDomNode();
          // mousedown on the target should also close popup when action is contextMenu.
          // https://github.com/ant-design/ant-design/issues/29853
          (!Ta(d, u) || o.isContextMenuOnly()) && !Ta(f, u) && !o.hasPopupMouseDown && o.close();
        }
      }), P(Ue(o), "getRootDomNode", function() {
        var l = o.props.getTriggerDOMNode;
        if (l)
          return l(o.triggerRef.current);
        try {
          var u = Wr(o.triggerRef.current);
          if (u)
            return u;
        } catch {
        }
        return $a.findDOMNode(Ue(o));
      }), P(Ue(o), "getPopupClassNameFromAlign", function(l) {
        var u = [], d = o.props, f = d.popupPlacement, v = d.builtinPlacements, p = d.prefixCls, h = d.alignPoint, g = d.getPopupClassNameFromAlign;
        return f && v && u.push(nw(v, p, l, h)), g && u.push(g(l)), u.join(" ");
      }), P(Ue(o), "getComponent", function() {
        var l = o.props, u = l.prefixCls, d = l.destroyPopupOnHide, f = l.popupClassName, v = l.onPopupAlign, p = l.popupMotion, h = l.popupAnimation, g = l.popupTransitionName, m = l.popupStyle, y = l.mask, b = l.maskAnimation, x = l.maskTransitionName, C = l.maskMotion, E = l.zIndex, S = l.popup, w = l.stretch, N = l.alignPoint, O = l.mobile, _ = l.forceRender, $ = l.onPopupClick, I = o.state, F = I.popupVisible, M = I.point, V = o.getPopupAlign(), T = {};
        return o.isMouseEnterToShow() && (T.onMouseEnter = o.onPopupMouseEnter), o.isMouseLeaveToHide() && (T.onMouseLeave = o.onPopupMouseLeave), T.onMouseDown = o.onPopupMouseDown, T.onTouchStart = o.onPopupMouseDown, /* @__PURE__ */ c.createElement(Im, K({
          prefixCls: u,
          destroyPopupOnHide: d,
          visible: F,
          point: N && M,
          className: f,
          align: V,
          onAlign: v,
          animation: h,
          getClassNameFromAlign: o.getPopupClassNameFromAlign
        }, T, {
          stretch: w,
          getRootDomNode: o.getRootDomNode,
          style: m,
          mask: y,
          zIndex: E,
          transitionName: g,
          maskAnimation: b,
          maskTransitionName: x,
          maskMotion: C,
          ref: o.popupRef,
          motion: p,
          mobile: O,
          forceRender: _,
          onClick: $
        }), typeof S == "function" ? S() : S);
      }), P(Ue(o), "attachParent", function(l) {
        mt.cancel(o.attachId);
        var u = o.props, d = u.getPopupContainer, f = u.getDocument, v = o.getRootDomNode(), p;
        d ? (v || d.length === 0) && (p = d(v)) : p = f(o.getRootDomNode()).body, p ? p.appendChild(l) : o.attachId = mt(function() {
          o.attachParent(l);
        });
      }), P(Ue(o), "getContainer", function() {
        if (!o.portalContainer) {
          var l = o.props.getDocument, u = l(o.getRootDomNode()).createElement("div");
          u.style.position = "absolute", u.style.top = "0", u.style.left = "0", u.style.width = "100%", o.portalContainer = u;
        }
        return o.attachParent(o.portalContainer), o.portalContainer;
      }), P(Ue(o), "setPoint", function(l) {
        var u = o.props.alignPoint;
        !u || !l || o.setState({
          point: {
            pageX: l.pageX,
            pageY: l.pageY
          }
        });
      }), P(Ue(o), "handlePortalUpdate", function() {
        o.state.prevPopupVisible !== o.state.popupVisible && o.props.afterPopupVisibleChange(o.state.popupVisible);
      }), P(Ue(o), "triggerContextValue", {
        onPopupMouseDown: o.onPopupMouseDown
      });
      var s;
      return "popupVisible" in i ? s = !!i.popupVisible : s = !!i.defaultPopupVisible, o.state = {
        prevPopupVisible: s,
        popupVisible: s
      }, Vw.forEach(function(l) {
        o["fire".concat(l)] = function(u) {
          o.fireEvents(l, u);
        };
      }), o;
    }
    return Vt(a, [{
      key: "componentDidMount",
      value: function() {
        this.componentDidUpdate();
      }
    }, {
      key: "componentDidUpdate",
      value: function() {
        var o = this.props, s = this.state;
        if (s.popupVisible) {
          var l;
          !this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow()) && (l = o.getDocument(this.getRootDomNode()), this.clickOutsideHandler = Zn(l, "mousedown", this.onDocumentClick)), this.touchOutsideHandler || (l = l || o.getDocument(this.getRootDomNode()), this.touchOutsideHandler = Zn(l, "touchstart", this.onDocumentClick)), !this.contextMenuOutsideHandler1 && this.isContextMenuToShow() && (l = l || o.getDocument(this.getRootDomNode()), this.contextMenuOutsideHandler1 = Zn(l, "scroll", this.onContextMenuClose)), !this.contextMenuOutsideHandler2 && this.isContextMenuToShow() && (this.contextMenuOutsideHandler2 = Zn(window, "blur", this.onContextMenuClose));
          return;
        }
        this.clearOutsideHandler();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.clearDelayTimer(), this.clearOutsideHandler(), clearTimeout(this.mouseDownTimeout), mt.cancel(this.attachId);
      }
    }, {
      key: "getPopupDomNode",
      value: function() {
        var o;
        return ((o = this.popupRef.current) === null || o === void 0 ? void 0 : o.getElement()) || null;
      }
    }, {
      key: "getPopupAlign",
      value: function() {
        var o = this.props, s = o.popupPlacement, l = o.popupAlign, u = o.builtinPlacements;
        return s && u ? tw(u, s, l) : l;
      }
    }, {
      key: "setPopupVisible",
      value: (
        /**
         * @param popupVisible    Show or not the popup element
         * @param event           SyntheticEvent, used for `pointAlign`
         */
        function(o, s) {
          var l = this.props.alignPoint, u = this.state.popupVisible;
          this.clearDelayTimer(), u !== o && ("popupVisible" in this.props || this.setState({
            popupVisible: o,
            prevPopupVisible: u
          }), this.props.onPopupVisibleChange(o)), l && s && o && this.setPoint(s);
        }
      )
    }, {
      key: "delaySetPopupVisible",
      value: function(o, s, l) {
        var u = this, d = s * 1e3;
        if (this.clearDelayTimer(), d) {
          var f = l ? {
            pageX: l.pageX,
            pageY: l.pageY
          } : null;
          this.delayTimer = window.setTimeout(function() {
            u.setPopupVisible(o, f), u.clearDelayTimer();
          }, d);
        } else
          this.setPopupVisible(o, l);
      }
    }, {
      key: "clearDelayTimer",
      value: function() {
        this.delayTimer && (clearTimeout(this.delayTimer), this.delayTimer = null);
      }
    }, {
      key: "clearOutsideHandler",
      value: function() {
        this.clickOutsideHandler && (this.clickOutsideHandler.remove(), this.clickOutsideHandler = null), this.contextMenuOutsideHandler1 && (this.contextMenuOutsideHandler1.remove(), this.contextMenuOutsideHandler1 = null), this.contextMenuOutsideHandler2 && (this.contextMenuOutsideHandler2.remove(), this.contextMenuOutsideHandler2 = null), this.touchOutsideHandler && (this.touchOutsideHandler.remove(), this.touchOutsideHandler = null);
      }
    }, {
      key: "createTwoChains",
      value: function(o) {
        var s = this.props.children.props, l = this.props;
        return s[o] && l[o] ? this["fire".concat(o)] : s[o] || l[o];
      }
    }, {
      key: "isClickToShow",
      value: function() {
        var o = this.props, s = o.action, l = o.showAction;
        return s.indexOf("click") !== -1 || l.indexOf("click") !== -1;
      }
    }, {
      key: "isContextMenuOnly",
      value: function() {
        var o = this.props.action;
        return o === "contextMenu" || o.length === 1 && o[0] === "contextMenu";
      }
    }, {
      key: "isContextMenuToShow",
      value: function() {
        var o = this.props, s = o.action, l = o.showAction;
        return s.indexOf("contextMenu") !== -1 || l.indexOf("contextMenu") !== -1;
      }
    }, {
      key: "isClickToHide",
      value: function() {
        var o = this.props, s = o.action, l = o.hideAction;
        return s.indexOf("click") !== -1 || l.indexOf("click") !== -1;
      }
    }, {
      key: "isMouseEnterToShow",
      value: function() {
        var o = this.props, s = o.action, l = o.showAction;
        return s.indexOf("hover") !== -1 || l.indexOf("mouseEnter") !== -1;
      }
    }, {
      key: "isMouseLeaveToHide",
      value: function() {
        var o = this.props, s = o.action, l = o.hideAction;
        return s.indexOf("hover") !== -1 || l.indexOf("mouseLeave") !== -1;
      }
    }, {
      key: "isFocusToShow",
      value: function() {
        var o = this.props, s = o.action, l = o.showAction;
        return s.indexOf("focus") !== -1 || l.indexOf("focus") !== -1;
      }
    }, {
      key: "isBlurToHide",
      value: function() {
        var o = this.props, s = o.action, l = o.hideAction;
        return s.indexOf("focus") !== -1 || l.indexOf("blur") !== -1;
      }
    }, {
      key: "forcePopupAlign",
      value: function() {
        if (this.state.popupVisible) {
          var o;
          (o = this.popupRef.current) === null || o === void 0 || o.forceAlign();
        }
      }
    }, {
      key: "fireEvents",
      value: function(o, s) {
        var l = this.props.children.props[o];
        l && l(s);
        var u = this.props[o];
        u && u(s);
      }
    }, {
      key: "close",
      value: function() {
        this.setPopupVisible(!1);
      }
    }, {
      key: "render",
      value: function() {
        var o = this.state.popupVisible, s = this.props, l = s.children, u = s.forceRender, d = s.alignPoint, f = s.className, v = s.autoDestroy, p = c.Children.only(l), h = {
          key: "trigger"
        };
        this.isContextMenuToShow() ? h.onContextMenu = this.onContextMenu : h.onContextMenu = this.createTwoChains("onContextMenu"), this.isClickToHide() || this.isClickToShow() ? (h.onClick = this.onClick, h.onMouseDown = this.onMouseDown, h.onTouchStart = this.onTouchStart) : (h.onClick = this.createTwoChains("onClick"), h.onMouseDown = this.createTwoChains("onMouseDown"), h.onTouchStart = this.createTwoChains("onTouchStart")), this.isMouseEnterToShow() ? (h.onMouseEnter = this.onMouseEnter, d && (h.onMouseMove = this.onMouseMove)) : h.onMouseEnter = this.createTwoChains("onMouseEnter"), this.isMouseLeaveToHide() ? h.onMouseLeave = this.onMouseLeave : h.onMouseLeave = this.createTwoChains("onMouseLeave"), this.isFocusToShow() || this.isBlurToHide() ? (h.onFocus = this.onFocus, h.onBlur = this.onBlur) : (h.onFocus = this.createTwoChains("onFocus"), h.onBlur = this.createTwoChains("onBlur"));
        var g = ne(p && p.props && p.props.className, f);
        g && (h.className = g);
        var m = D({}, h);
        Xa(p) && (m.ref = er(this.triggerRef, p.ref));
        var y = /* @__PURE__ */ c.cloneElement(p, m), b;
        return (o || this.popupRef.current || u) && (b = /* @__PURE__ */ c.createElement(e, {
          key: "portal",
          getContainer: this.getContainer,
          didUpdate: this.handlePortalUpdate
        }, this.getComponent())), !o && v && (b = null), /* @__PURE__ */ c.createElement(Jd.Provider, {
          value: this.triggerContextValue
        }, y, b);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(o, s) {
        var l = o.popupVisible, u = {};
        return l !== void 0 && s.popupVisible !== l && (u.popupVisible = l, u.prevPopupVisible = s.popupVisible), u;
      }
    }]), a;
  }(c.Component);
  return P(t, "contextType", Jd), P(t, "defaultProps", {
    prefixCls: "rc-trigger-popup",
    getPopupClassNameFromAlign: Lw,
    getDocument: Kw,
    onPopupVisibleChange: Es,
    afterPopupVisibleChange: Es,
    onPopupAlign: Es,
    popupClassName: "",
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.1,
    focusDelay: 0,
    blurDelay: 0.15,
    popupStyle: {},
    destroyPopupOnHide: !1,
    popupAlign: {},
    defaultPopupVisible: !1,
    mask: !1,
    maskClosable: !0,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: !1
  }), t;
}
const Io = zw(ZE);
var jw = ["prefixCls", "disabled", "visible", "children", "popupElement", "containerWidth", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"], Hw = function(t) {
  var n = t === !0 ? 0 : 1;
  return {
    bottomLeft: {
      points: ["tl", "bl"],
      offset: [0, 4],
      overflow: {
        adjustX: n,
        adjustY: 1
      }
    },
    bottomRight: {
      points: ["tr", "br"],
      offset: [0, 4],
      overflow: {
        adjustX: n,
        adjustY: 1
      }
    },
    topLeft: {
      points: ["bl", "tl"],
      offset: [0, -4],
      overflow: {
        adjustX: n,
        adjustY: 1
      }
    },
    topRight: {
      points: ["br", "tr"],
      offset: [0, -4],
      overflow: {
        adjustX: n,
        adjustY: 1
      }
    }
  };
}, Bw = function(t, n) {
  var r = t.prefixCls;
  t.disabled;
  var a = t.visible, i = t.children, o = t.popupElement, s = t.containerWidth, l = t.animation, u = t.transitionName, d = t.dropdownStyle, f = t.dropdownClassName, v = t.direction, p = v === void 0 ? "ltr" : v, h = t.placement, g = t.dropdownMatchSelectWidth, m = t.dropdownRender, y = t.dropdownAlign, b = t.getPopupContainer, x = t.empty, C = t.getTriggerDOMNode, E = t.onPopupVisibleChange, S = t.onPopupMouseEnter, w = We(t, jw), N = "".concat(r, "-dropdown"), O = o;
  m && (O = m(o));
  var _ = c.useMemo(function() {
    return Hw(g);
  }, [g]), $ = l ? "".concat(N, "-").concat(l) : u, I = c.useRef(null);
  c.useImperativeHandle(n, function() {
    return {
      getPopupElement: function() {
        return I.current;
      }
    };
  });
  var F = D({
    minWidth: s
  }, d);
  return typeof g == "number" ? F.width = g : g && (F.width = s), /* @__PURE__ */ c.createElement(Io, K({}, w, {
    showAction: E ? ["click"] : [],
    hideAction: E ? ["click"] : [],
    popupPlacement: h || (p === "rtl" ? "bottomRight" : "bottomLeft"),
    builtinPlacements: _,
    prefixCls: N,
    popupTransitionName: $,
    popup: /* @__PURE__ */ c.createElement("div", {
      ref: I,
      onMouseEnter: S
    }, O),
    popupAlign: y,
    popupVisible: a,
    getPopupContainer: b,
    popupClassName: ne(f, P({}, "".concat(N, "-empty"), x)),
    popupStyle: F,
    getTriggerDOMNode: C,
    onPopupVisibleChange: E
  }), i);
}, Fm = /* @__PURE__ */ c.forwardRef(Bw);
Fm.displayName = "SelectTrigger";
function Qd(e, t) {
  var n = e.key, r;
  return "value" in e && (r = e.value), n ?? (r !== void 0 ? r : "rc-index-key-".concat(t));
}
function Mm(e, t) {
  var n = e || {}, r = n.label, a = n.value, i = n.options;
  return {
    label: r || (t ? "children" : "label"),
    value: a || "value",
    options: i || "options"
  };
}
function Uw(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.fieldNames, r = t.childrenAsData, a = [], i = Mm(n, !1), o = i.label, s = i.value, l = i.options;
  function u(d, f) {
    d.forEach(function(v) {
      var p = v[o];
      if (f || !(l in v)) {
        var h = v[s];
        a.push({
          key: Qd(v, a.length),
          groupOption: f,
          data: v,
          label: p,
          value: h
        });
      } else {
        var g = p;
        g === void 0 && r && (g = v.label), a.push({
          key: Qd(v, a.length),
          group: !0,
          data: v,
          label: g
        }), u(v[l], !0);
      }
    });
  }
  return u(e, !1), a;
}
function kl(e) {
  var t = D({}, e);
  return "props" in t || Object.defineProperty(t, "props", {
    get: function() {
      return Fe(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), t;
    }
  }), t;
}
function Ww(e, t) {
  if (!t || !t.length)
    return null;
  var n = !1;
  function r(i, o) {
    var s = gu(o), l = s[0], u = s.slice(1);
    if (!l)
      return [i];
    var d = i.split(l);
    return n = n || d.length > 1, d.reduce(function(f, v) {
      return [].concat(pe(f), pe(r(v, u)));
    }, []).filter(function(f) {
      return f;
    });
  }
  var a = r(e, t);
  return n ? a : null;
}
var Gw = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "autoClearSearchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "showArrow", "inputIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"], qw = ["value", "onChange", "removeIcon", "placeholder", "autoFocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabIndex"];
function ao(e) {
  return e === "tags" || e === "multiple";
}
var $m = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var n, r, a = e.id, i = e.prefixCls, o = e.className, s = e.showSearch, l = e.tagRender, u = e.direction, d = e.omitDomProps, f = e.displayValues, v = e.onDisplayValuesChange, p = e.emptyOptions, h = e.notFoundContent, g = h === void 0 ? "Not Found" : h, m = e.onClear, y = e.mode, b = e.disabled, x = e.loading, C = e.getInputElement, E = e.getRawInputElement, S = e.open, w = e.defaultOpen, N = e.onDropdownVisibleChange, O = e.activeValue, _ = e.onActiveValueChange, $ = e.activeDescendantId, I = e.searchValue, F = e.autoClearSearchValue, M = e.onSearch, V = e.onSearchSplit, T = e.tokenSeparators, R = e.allowClear, k = e.showArrow, A = e.inputIcon, U = e.clearIcon, z = e.OptionList, B = e.animation, G = e.transitionName, W = e.dropdownStyle, j = e.dropdownClassName, H = e.dropdownMatchSelectWidth, q = e.dropdownRender, Y = e.dropdownAlign, J = e.placement, oe = e.getPopupContainer, re = e.showAction, de = re === void 0 ? [] : re, Z = e.onFocus, Q = e.onBlur, ce = e.onKeyUp, Ce = e.onKeyDown, we = e.onMouseDown, ke = We(e, Gw), ve = ao(y), ae = (s !== void 0 ? s : ve) || y === "combobox", ie = D({}, ke);
  qw.forEach(function(Ge) {
    delete ie[Ge];
  }), d == null || d.forEach(function(Ge) {
    delete ie[Ge];
  });
  var ee = c.useState(!1), te = X(ee, 2), xe = te[0], Me = te[1];
  c.useEffect(function() {
    Me(fm());
  }, []);
  var Te = c.useRef(null), Ve = c.useRef(null), Ae = c.useRef(null), Ne = c.useRef(null), $e = c.useRef(null), je = NE(), lt = X(je, 3), tt = lt[0], ot = lt[1], ft = lt[2];
  c.useImperativeHandle(t, function() {
    var Ge, He;
    return {
      focus: (Ge = Ne.current) === null || Ge === void 0 ? void 0 : Ge.focus,
      blur: (He = Ne.current) === null || He === void 0 ? void 0 : He.blur,
      scrollTo: function(Yt) {
        var Tt;
        return (Tt = $e.current) === null || Tt === void 0 ? void 0 : Tt.scrollTo(Yt);
      }
    };
  });
  var nt = c.useMemo(function() {
    var Ge;
    if (y !== "combobox")
      return I;
    var He = (Ge = f[0]) === null || Ge === void 0 ? void 0 : Ge.value;
    return typeof He == "string" || typeof He == "number" ? String(He) : "";
  }, [I, y, f]), Et = y === "combobox" && typeof C == "function" && C() || null, at = typeof E == "function" && E(), Ft = mu(Ve, at == null || (n = at.props) === null || n === void 0 ? void 0 : n.ref), Mt = un(void 0, {
    defaultValue: w,
    value: S
  }), rt = X(Mt, 2), Ot = rt[0], vt = rt[1], Ze = Ot, Ke = !g && p;
  (b || Ke && Ze && y === "combobox") && (Ze = !1);
  var Oe = Ke ? !1 : Ze, se = c.useCallback(function(Ge) {
    var He = Ge !== void 0 ? Ge : !Ze;
    b || (vt(He), Ze !== He && (N == null || N(He)));
  }, [b, Ze, vt, N]), ue = c.useMemo(function() {
    return (T || []).some(function(Ge) {
      return [`
`, `\r
`].includes(Ge);
    });
  }, [T]), me = function(He, Lt, Yt) {
    var Tt = !0, Xt = He;
    _ == null || _(null);
    var tn = Yt ? null : Ww(He, T);
    return y !== "combobox" && tn && (Xt = "", V == null || V(tn), se(!1), Tt = !1), M && nt !== Xt && M(Xt, {
      source: Lt ? "typing" : "effect"
    }), Tt;
  }, Se = function(He) {
    !He || !He.trim() || M(He, {
      source: "submit"
    });
  };
  c.useEffect(function() {
    !Ze && !ve && y !== "combobox" && me("", !1, !1);
  }, [Ze]), c.useEffect(function() {
    Ot && b && vt(!1), b && ot(!1);
  }, [b]);
  var _e = pm(), Je = X(_e, 2), Ct = Je[0], Rt = Je[1], At = function(He) {
    var Lt = Ct(), Yt = He.which;
    if (Yt === fe.ENTER && (y !== "combobox" && He.preventDefault(), Ze || se(!0)), Rt(!!nt), Yt === fe.BACKSPACE && !Lt && ve && !nt && f.length) {
      for (var Tt = pe(f), Xt = null, tn = Tt.length - 1; tn >= 0; tn -= 1) {
        var pt = Tt[tn];
        if (!pt.disabled) {
          Tt.splice(tn, 1), Xt = pt;
          break;
        }
      }
      Xt && v(Tt, {
        type: "remove",
        values: [Xt]
      });
    }
    for (var et = arguments.length, ct = new Array(et > 1 ? et - 1 : 0), wt = 1; wt < et; wt++)
      ct[wt - 1] = arguments[wt];
    if (Ze && $e.current) {
      var Jt;
      (Jt = $e.current).onKeyDown.apply(Jt, [He].concat(ct));
    }
    Ce == null || Ce.apply(void 0, [He].concat(ct));
  }, Qe = function(He) {
    for (var Lt = arguments.length, Yt = new Array(Lt > 1 ? Lt - 1 : 0), Tt = 1; Tt < Lt; Tt++)
      Yt[Tt - 1] = arguments[Tt];
    if (Ze && $e.current) {
      var Xt;
      (Xt = $e.current).onKeyUp.apply(Xt, [He].concat(Yt));
    }
    ce == null || ce.apply(void 0, [He].concat(Yt));
  }, L = function(He) {
    var Lt = f.filter(function(Yt) {
      return Yt !== He;
    });
    v(Lt, {
      type: "remove",
      values: [He]
    });
  }, le = c.useRef(!1), he = function() {
    ot(!0), b || (Z && !le.current && Z.apply(void 0, arguments), de.includes("focus") && se(!0)), le.current = !0;
  }, Pe = function() {
    ot(!1, function() {
      le.current = !1, se(!1);
    }), !b && (nt && (y === "tags" ? M(nt, {
      source: "submit"
    }) : y === "multiple" && M("", {
      source: "blur"
    })), Q && Q.apply(void 0, arguments));
  }, ze = [];
  c.useEffect(function() {
    return function() {
      ze.forEach(function(Ge) {
        return clearTimeout(Ge);
      }), ze.splice(0, ze.length);
    };
  }, []);
  var ge = function(He) {
    var Lt, Yt = He.target, Tt = (Lt = Ae.current) === null || Lt === void 0 ? void 0 : Lt.getPopupElement();
    if (Tt && Tt.contains(Yt)) {
      var Xt = setTimeout(function() {
        var ct = ze.indexOf(Xt);
        if (ct !== -1 && ze.splice(ct, 1), ft(), !xe && !Tt.contains(document.activeElement)) {
          var wt;
          (wt = Ne.current) === null || wt === void 0 || wt.focus();
        }
      });
      ze.push(Xt);
    }
    for (var tn = arguments.length, pt = new Array(tn > 1 ? tn - 1 : 0), et = 1; et < tn; et++)
      pt[et - 1] = arguments[et];
    we == null || we.apply(void 0, [He].concat(pt));
  }, ye = c.useState(null), Ee = X(ye, 2), Ye = Ee[0], Re = Ee[1], Ie = c.useState({}), Be = X(Ie, 2), Pt = Be[1];
  function ut() {
    Pt({});
  }
  rn(function() {
    if (Oe) {
      var Ge, He = Math.ceil((Ge = Te.current) === null || Ge === void 0 ? void 0 : Ge.offsetWidth);
      Ye !== He && !Number.isNaN(He) && Re(He);
    }
  }, [Oe]);
  var xt;
  at && (xt = function(He) {
    se(He);
  }), OE(function() {
    var Ge;
    return [Te.current, (Ge = Ae.current) === null || Ge === void 0 ? void 0 : Ge.getPopupElement()];
  }, Oe, se, !!at);
  var kt = c.useMemo(function() {
    return D(D({}, e), {}, {
      notFoundContent: g,
      open: Ze,
      triggerOpen: Oe,
      id: a,
      showSearch: ae,
      multiple: ve,
      toggleOpen: se
    });
  }, [e, g, Oe, Ze, a, ae, ve, se]), Fn = k !== void 0 ? k : x || !ve && y !== "combobox", Un;
  Fn && (Un = /* @__PURE__ */ c.createElement(no, {
    className: ne("".concat(i, "-arrow"), P({}, "".concat(i, "-arrow-loading"), x)),
    customizeIcon: A,
    customizeIconProps: {
      loading: x,
      searchValue: nt,
      open: Ze,
      focused: tt,
      showSearch: ae
    }
  }));
  var vr, Tr = function() {
    var He;
    m == null || m(), (He = Ne.current) === null || He === void 0 || He.focus(), v([], {
      type: "clear",
      values: f
    }), me("", !1, !1);
  };
  !b && R && (f.length || nt) && !(y === "combobox" && nt === "") && (vr = /* @__PURE__ */ c.createElement(no, {
    className: "".concat(i, "-clear"),
    onMouseDown: Tr,
    customizeIcon: U
  }, "×"));
  var Wn = /* @__PURE__ */ c.createElement(z, {
    ref: $e
  }), pa = ne(i, o, (r = {}, P(r, "".concat(i, "-focused"), tt), P(r, "".concat(i, "-multiple"), ve), P(r, "".concat(i, "-single"), !ve), P(r, "".concat(i, "-allow-clear"), R), P(r, "".concat(i, "-show-arrow"), Fn), P(r, "".concat(i, "-disabled"), b), P(r, "".concat(i, "-loading"), x), P(r, "".concat(i, "-open"), Ze), P(r, "".concat(i, "-customize-input"), Et), P(r, "".concat(i, "-show-search"), ae), r)), _r = /* @__PURE__ */ c.createElement(Fm, {
    ref: Ae,
    disabled: b,
    prefixCls: i,
    visible: Oe,
    popupElement: Wn,
    containerWidth: Ye,
    animation: B,
    transitionName: G,
    dropdownStyle: W,
    dropdownClassName: j,
    direction: u,
    dropdownMatchSelectWidth: H,
    dropdownRender: q,
    dropdownAlign: Y,
    placement: J,
    getPopupContainer: oe,
    empty: p,
    getTriggerDOMNode: function() {
      return Ve.current;
    },
    onPopupVisibleChange: xt,
    onPopupMouseEnter: ut
  }, at ? /* @__PURE__ */ c.cloneElement(at, {
    ref: Ft
  }) : /* @__PURE__ */ c.createElement(bm, K({}, e, {
    domRef: Ve,
    prefixCls: i,
    inputElement: Et,
    ref: Ne,
    id: a,
    showSearch: ae,
    autoClearSearchValue: F,
    mode: y,
    activeDescendantId: $,
    tagRender: l,
    values: f,
    open: Ze,
    onToggleOpen: se,
    activeValue: O,
    searchValue: nt,
    onSearch: me,
    onSearchSubmit: Se,
    onRemove: L,
    tokenWithEnter: ue
  }))), nr;
  return at ? nr = _r : nr = /* @__PURE__ */ c.createElement("div", K({
    className: pa
  }, ie, {
    ref: Te,
    onMouseDown: ge,
    onKeyDown: At,
    onKeyUp: Qe,
    onFocus: he,
    onBlur: Pe
  }), tt && !Ze && /* @__PURE__ */ c.createElement("span", {
    style: {
      width: 0,
      height: 0,
      position: "absolute",
      overflow: "hidden",
      opacity: 0
    },
    "aria-live": "polite"
  }, "".concat(f.map(function(Ge) {
    var He = Ge.label, Lt = Ge.value;
    return ["number", "string"].includes(Le(He)) ? He : Lt;
  }).join(", "))), _r, Un, vr), /* @__PURE__ */ c.createElement(vm.Provider, {
    value: kt
  }, nr);
});
process.env.NODE_ENV !== "production" && ($m.displayName = "BaseSelect");
const Yw = function(e, t) {
  var n = c.useRef({
    values: /* @__PURE__ */ new Map(),
    options: /* @__PURE__ */ new Map()
  }), r = c.useMemo(function() {
    var i = n.current, o = i.values, s = i.options, l = e.map(function(f) {
      if (f.label === void 0) {
        var v;
        return D(D({}, f), {}, {
          label: (v = o.get(f.value)) === null || v === void 0 ? void 0 : v.label
        });
      }
      return f;
    }), u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
    return l.forEach(function(f) {
      u.set(f.value, f), d.set(f.value, t.get(f.value) || s.get(f.value));
    }), n.current.values = u, n.current.options = d, l;
  }, [e, t]), a = c.useCallback(function(i) {
    return t.get(i) || n.current.options.get(i);
  }, [t]);
  return [r, a];
};
function ws(e, t) {
  return Nu(e).join("").toUpperCase().includes(t);
}
const Xw = function(e, t, n, r, a) {
  return c.useMemo(function() {
    if (!n || r === !1)
      return e;
    var i = t.options, o = t.label, s = t.value, l = [], u = typeof r == "function", d = n.toUpperCase(), f = u ? r : function(p, h) {
      return a ? ws(h[a], d) : h[i] ? ws(h[o !== "children" ? o : "label"], d) : ws(h[s], d);
    }, v = u ? function(p) {
      return kl(p);
    } : function(p) {
      return p;
    };
    return e.forEach(function(p) {
      if (p[i]) {
        var h = f(n, v(p));
        if (h)
          l.push(p);
        else {
          var g = p[i].filter(function(m) {
            return f(n, v(m));
          });
          g.length && l.push(D(D({}, p), {}, P({}, i, g)));
        }
        return;
      }
      f(n, v(p)) && l.push(p);
    }), l;
  }, [e, r, a, n, t]);
};
var Zd = 0, Jw = process.env.NODE_ENV !== "test" && jn();
function Qw() {
  var e;
  return Jw ? (e = Zd, Zd += 1) : e = "TEST_OR_SSR", e;
}
function Zw(e) {
  var t = c.useState(), n = X(t, 2), r = n[0], a = n[1];
  return c.useEffect(function() {
    a("rc_select_".concat(Qw()));
  }, []), e || r;
}
var eN = ["children", "value"], tN = ["children"];
function nN(e) {
  var t = e, n = t.key, r = t.props, a = r.children, i = r.value, o = We(r, eN);
  return D({
    key: n,
    value: i !== void 0 ? i : n,
    children: a
  }, o);
}
function Fu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return yn(e).map(function(n, r) {
    if (!/* @__PURE__ */ c.isValidElement(n) || !n.type)
      return null;
    var a = n, i = a.type.isSelectOptGroup, o = a.key, s = a.props, l = s.children, u = We(s, tN);
    return t || !i ? nN(n) : D(D({
      key: "__RC_SELECT_GRP__".concat(o === null ? r : o, "__"),
      label: o
    }, u), {}, {
      options: Fu(l)
    });
  }).filter(function(n) {
    return n;
  });
}
function rN(e, t, n, r, a) {
  return c.useMemo(function() {
    var i = e, o = !e;
    o && (i = Fu(t));
    var s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = function(v, p, h) {
      h && typeof h == "string" && v.set(p[h], p);
    };
    function d(f) {
      for (var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, p = 0; p < f.length; p += 1) {
        var h = f[p];
        !h[n.options] || v ? (s.set(h[n.value], h), u(l, h, n.label), u(l, h, r), u(l, h, a)) : d(h[n.options], !0);
      }
    }
    return d(i), {
      options: i,
      valueOptions: s,
      labelOptions: l
    };
  }, [e, t, n, r, a]);
}
function ef(e) {
  var t = c.useRef();
  t.current = e;
  var n = c.useCallback(function() {
    return t.current.apply(t, arguments);
  }, []);
  return n;
}
var Mu = function() {
  return null;
};
Mu.isSelectOptGroup = !0;
var $u = function() {
  return null;
};
$u.isSelectOption = !0;
var Dm = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var n = e.height, r = e.offsetY, a = e.offsetX, i = e.children, o = e.prefixCls, s = e.onInnerResize, l = e.innerProps, u = e.rtl, d = e.extra, f = {}, v = {
    display: "flex",
    flexDirection: "column"
  };
  if (r !== void 0) {
    var p;
    f = {
      height: n,
      position: "relative",
      overflow: "hidden"
    }, v = D(D({}, v), {}, (p = {
      transform: "translateY(".concat(r, "px)")
    }, P(p, u ? "marginRight" : "marginLeft", -a), P(p, "position", "absolute"), P(p, "left", 0), P(p, "right", 0), P(p, "top", 0), p));
  }
  return /* @__PURE__ */ c.createElement("div", {
    style: f
  }, /* @__PURE__ */ c.createElement(zn, {
    onResize: function(g) {
      var m = g.offsetHeight;
      m && s && s();
    }
  }, /* @__PURE__ */ c.createElement("div", K({
    style: v,
    className: ne(P({}, "".concat(o, "-holder-inner"), o)),
    ref: t
  }, l), i, d)));
});
Dm.displayName = "Filler";
function tf(e, t) {
  var n = "touches" in e ? e.touches[0] : e;
  return n[t ? "pageX" : "pageY"];
}
var Tl = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var n, r = e.prefixCls, a = e.rtl, i = e.scrollOffset, o = e.scrollRange, s = e.onStartMove, l = e.onStopMove, u = e.onScroll, d = e.horizontal, f = e.spinSize, v = e.containerSize, p = e.style, h = e.thumbStyle, g = c.useState(!1), m = X(g, 2), y = m[0], b = m[1], x = c.useState(null), C = X(x, 2), E = C[0], S = C[1], w = c.useState(null), N = X(w, 2), O = N[0], _ = N[1], $ = !a, I = c.useRef(), F = c.useRef(), M = c.useState(!1), V = X(M, 2), T = V[0], R = V[1], k = c.useRef(), A = function() {
    clearTimeout(k.current), R(!0), k.current = setTimeout(function() {
      R(!1);
    }, 3e3);
  }, U = o - v || 0, z = v - f || 0, B = U > 0, G = c.useMemo(function() {
    if (i === 0 || U === 0)
      return 0;
    var de = i / U;
    return de * z;
  }, [i, U, z]), W = function(Z) {
    Z.stopPropagation(), Z.preventDefault();
  }, j = c.useRef({
    top: G,
    dragging: y,
    pageY: E,
    startTop: O
  });
  j.current = {
    top: G,
    dragging: y,
    pageY: E,
    startTop: O
  };
  var H = function(Z) {
    b(!0), S(tf(Z, d)), _(j.current.top), s(), Z.stopPropagation(), Z.preventDefault();
  };
  c.useEffect(function() {
    var de = function(Ce) {
      Ce.preventDefault();
    }, Z = I.current, Q = F.current;
    return Z.addEventListener("touchstart", de), Q.addEventListener("touchstart", H), function() {
      Z.removeEventListener("touchstart", de), Q.removeEventListener("touchstart", H);
    };
  }, []);
  var q = c.useRef();
  q.current = U;
  var Y = c.useRef();
  Y.current = z, c.useEffect(function() {
    if (y) {
      var de, Z = function(Ce) {
        var we = j.current, ke = we.dragging, ve = we.pageY, ae = we.startTop;
        if (mt.cancel(de), ke) {
          var ie = tf(Ce, d) - ve, ee = ae;
          !$ && d ? ee -= ie : ee += ie;
          var te = q.current, xe = Y.current, Me = xe ? ee / xe : 0, Te = Math.ceil(Me * te);
          Te = Math.max(Te, 0), Te = Math.min(Te, te), de = mt(function() {
            u(Te, d);
          });
        }
      }, Q = function() {
        b(!1), l();
      };
      return window.addEventListener("mousemove", Z), window.addEventListener("touchmove", Z), window.addEventListener("mouseup", Q), window.addEventListener("touchend", Q), function() {
        window.removeEventListener("mousemove", Z), window.removeEventListener("touchmove", Z), window.removeEventListener("mouseup", Q), window.removeEventListener("touchend", Q), mt.cancel(de);
      };
    }
  }, [y]), c.useEffect(function() {
    A();
  }, [i]), c.useImperativeHandle(t, function() {
    return {
      delayHidden: A
    };
  });
  var J = "".concat(r, "-scrollbar"), oe = {
    position: "absolute",
    visibility: T && B ? null : "hidden"
  }, re = {
    position: "absolute",
    background: "rgba(0, 0, 0, 0.5)",
    borderRadius: 99,
    cursor: "pointer",
    userSelect: "none"
  };
  return d ? (oe.height = 8, oe.left = 0, oe.right = 0, oe.bottom = 0, re.height = "100%", re.width = f, $ ? re.left = G : re.right = G) : (oe.width = 8, oe.top = 0, oe.bottom = 0, $ ? oe.right = 0 : oe.left = 0, re.width = "100%", re.height = f, re.top = G), /* @__PURE__ */ c.createElement("div", {
    ref: I,
    className: ne(J, (n = {}, P(n, "".concat(J, "-horizontal"), d), P(n, "".concat(J, "-vertical"), !d), P(n, "".concat(J, "-visible"), T), n)),
    style: D(D({}, oe), p),
    onMouseDown: W,
    onMouseMove: A
  }, /* @__PURE__ */ c.createElement("div", {
    ref: F,
    className: ne("".concat(J, "-thumb"), P({}, "".concat(J, "-thumb-moving"), y)),
    style: D(D({}, re), h),
    onMouseDown: H
  }));
});
process.env.NODE_ENV !== "production" && (Tl.displayName = "ScrollBar");
function aN(e) {
  var t = e.children, n = e.setRef, r = c.useCallback(function(a) {
    n(a);
  }, []);
  return /* @__PURE__ */ c.cloneElement(t, {
    ref: r
  });
}
function iN(e, t, n, r, a, i, o) {
  var s = o.getKey;
  return e.slice(t, n + 1).map(function(l, u) {
    var d = t + u, f = i(l, d, {
      style: {
        width: r
      }
    }), v = s(l);
    return /* @__PURE__ */ c.createElement(aN, {
      key: v,
      setRef: function(h) {
        return a(l, h);
      }
    }, f);
  });
}
var oN = /* @__PURE__ */ function() {
  function e() {
    Kt(this, e), this.maps = void 0, this.id = 0, this.maps = /* @__PURE__ */ Object.create(null);
  }
  return Vt(e, [{
    key: "set",
    value: function(n, r) {
      this.maps[n] = r, this.id += 1;
    }
  }, {
    key: "get",
    value: function(n) {
      return this.maps[n];
    }
  }]), e;
}();
function sN(e, t, n) {
  var r = c.useState(0), a = X(r, 2), i = a[0], o = a[1], s = De(/* @__PURE__ */ new Map()), l = De(new oN()), u = De();
  function d() {
    mt.cancel(u.current);
  }
  function f() {
    var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    d();
    var h = function() {
      s.current.forEach(function(m, y) {
        if (m && m.offsetParent) {
          var b = Wr(m), x = b.offsetHeight;
          l.current.get(y) !== x && l.current.set(y, b.offsetHeight);
        }
      }), o(function(m) {
        return m + 1;
      });
    };
    p ? h() : u.current = mt(h);
  }
  function v(p, h) {
    var g = e(p), m = s.current.get(g);
    h ? (s.current.set(g, h), f()) : s.current.delete(g), !m != !h && (h ? t == null || t(p) : n == null || n(p));
  }
  return Dt(function() {
    return d;
  }, []), [v, f, l.current, i];
}
var nf = 10;
function lN(e, t, n, r, a, i, o, s) {
  var l = c.useRef(), u = c.useState(null), d = X(u, 2), f = d[0], v = d[1];
  return rn(function() {
    if (f && f.times < nf) {
      if (!e.current) {
        v(function(A) {
          return D({}, A);
        });
        return;
      }
      i();
      var p = f.targetAlign, h = f.originAlign, g = f.index, m = f.offset, y = e.current.clientHeight, b = !1, x = p, C = null;
      if (y) {
        for (var E = p || h, S = 0, w = 0, N = 0, O = Math.min(t.length - 1, g), _ = 0; _ <= O; _ += 1) {
          var $ = a(t[_]);
          w = S;
          var I = n.get($);
          N = w + (I === void 0 ? r : I), S = N;
        }
        for (var F = E === "top" ? m : y - m, M = O; M >= 0; M -= 1) {
          var V = a(t[M]), T = n.get(V);
          if (T === void 0) {
            b = !0;
            break;
          }
          if (F -= T, F <= 0)
            break;
        }
        switch (E) {
          case "top":
            C = w - m;
            break;
          case "bottom":
            C = N - y + m;
            break;
          default: {
            var R = e.current.scrollTop, k = R + y;
            w < R ? x = "top" : N > k && (x = "bottom");
          }
        }
        C !== null && o(C), C !== f.lastTop && (b = !0);
      }
      b && v(D(D({}, f), {}, {
        times: f.times + 1,
        targetAlign: x,
        lastTop: C
      }));
    } else
      process.env.NODE_ENV !== "production" && (f == null ? void 0 : f.times) === nf && Fe(!1, "Seems `scrollTo` with `rc-virtual-list` reach the max limitation. Please fire issue for us. Thanks.");
  }, [f, e.current]), function(p) {
    if (p == null) {
      s();
      return;
    }
    if (mt.cancel(l.current), typeof p == "number")
      o(p);
    else if (p && Le(p) === "object") {
      var h, g = p.align;
      "index" in p ? h = p.index : h = t.findIndex(function(b) {
        return a(b) === p.key;
      });
      var m = p.offset, y = m === void 0 ? 0 : m;
      v({
        times: 0,
        index: h,
        offset: y,
        originAlign: g
      });
    }
  };
}
function uN(e, t, n) {
  var r = e.length, a = t.length, i, o;
  if (r === 0 && a === 0)
    return null;
  r < a ? (i = e, o = t) : (i = t, o = e);
  var s = {
    __EMPTY_ITEM__: !0
  };
  function l(h) {
    return h !== void 0 ? n(h) : s;
  }
  for (var u = null, d = Math.abs(r - a) !== 1, f = 0; f < o.length; f += 1) {
    var v = l(i[f]), p = l(o[f]);
    if (v !== p) {
      u = f, d = d || v !== l(o[f + 1]);
      break;
    }
  }
  return u === null ? null : {
    index: u,
    multiple: d
  };
}
function cN(e, t, n) {
  var r = c.useState(e), a = X(r, 2), i = a[0], o = a[1], s = c.useState(null), l = X(s, 2), u = l[0], d = l[1];
  return c.useEffect(function() {
    var f = uN(i || [], e || [], t);
    (f == null ? void 0 : f.index) !== void 0 && (n == null || n(f.index), d(e[f.index])), o(e);
  }, [e]), [u];
}
var rf = (typeof navigator > "u" ? "undefined" : Le(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
const Am = function(e, t) {
  var n = De(!1), r = De(null);
  function a() {
    clearTimeout(r.current), n.current = !0, r.current = setTimeout(function() {
      n.current = !1;
    }, 50);
  }
  var i = De({
    top: e,
    bottom: t
  });
  return i.current.top = e, i.current.bottom = t, function(o) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, l = (
      // Pass origin wheel when on the top
      o < 0 && i.current.top || // Pass origin wheel when on the bottom
      o > 0 && i.current.bottom
    );
    return s && l ? (clearTimeout(r.current), n.current = !1) : (!l || n.current) && a(), !n.current && l;
  };
};
function dN(e, t, n, r, a) {
  var i = De(0), o = De(null), s = De(null), l = De(!1), u = Am(t, n);
  function d(m, y) {
    mt.cancel(o.current), i.current += y, s.current = y, !u(y) && (rf || m.preventDefault(), o.current = mt(function() {
      var b = l.current ? 10 : 1;
      a(i.current * b), i.current = 0;
    }));
  }
  function f(m, y) {
    a(y, !0), rf || m.preventDefault();
  }
  var v = De(null), p = De(null);
  function h(m) {
    if (e) {
      mt.cancel(p.current), p.current = mt(function() {
        v.current = null;
      }, 2);
      var y = m.deltaX, b = m.deltaY, x = m.shiftKey, C = y, E = b;
      (v.current === "sx" || !v.current && x && b && !y) && (C = b, E = 0, v.current = "sx");
      var S = Math.abs(C), w = Math.abs(E);
      v.current === null && (v.current = r && S > w ? "x" : "y"), v.current === "y" ? d(m, E) : f(m, C);
    }
  }
  function g(m) {
    e && (l.current = m.detail === s.current);
  }
  return [h, g];
}
var fN = 14 / 15;
function vN(e, t, n) {
  var r = De(!1), a = De(0), i = De(null), o = De(null), s, l = function(v) {
    if (r.current) {
      var p = Math.ceil(v.touches[0].pageY), h = a.current - p;
      a.current = p, n(h) && v.preventDefault(), clearInterval(o.current), o.current = setInterval(function() {
        h *= fN, (!n(h, !0) || Math.abs(h) <= 0.1) && clearInterval(o.current);
      }, 16);
    }
  }, u = function() {
    r.current = !1, s();
  }, d = function(v) {
    s(), v.touches.length === 1 && !r.current && (r.current = !0, a.current = Math.ceil(v.touches[0].pageY), i.current = v.target, i.current.addEventListener("touchmove", l), i.current.addEventListener("touchend", u));
  };
  s = function() {
    i.current && (i.current.removeEventListener("touchmove", l), i.current.removeEventListener("touchend", u));
  }, rn(function() {
    return e && t.current.addEventListener("touchstart", d), function() {
      var f;
      (f = t.current) === null || f === void 0 || f.removeEventListener("touchstart", d), s(), clearInterval(o.current);
    };
  }, [e]);
}
var pN = 20;
function af() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = e / t * 100;
  return isNaN(n) && (n = 0), n = Math.max(n, pN), n = Math.min(n, e / 2), Math.floor(n);
}
function mN(e, t, n, r) {
  var a = c.useMemo(function() {
    return [/* @__PURE__ */ new Map(), []];
  }, [e, n.id, r]), i = X(a, 2), o = i[0], s = i[1], l = function(d) {
    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : d, v = o.get(d), p = o.get(f);
    if (v === void 0 || p === void 0)
      for (var h = e.length, g = s.length; g < h; g += 1) {
        var m, y = e[g], b = t(y);
        o.set(b, g);
        var x = (m = n.get(b)) !== null && m !== void 0 ? m : r;
        if (s[g] = (s[g - 1] || 0) + x, b === d && (v = g), b === f && (p = g), v !== void 0 && p !== void 0)
          break;
      }
    return {
      top: s[v - 1] || 0,
      bottom: s[p]
    };
  };
  return l;
}
var hN = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "scrollWidth", "component", "onScroll", "onVirtualScroll", "onVisibleChange", "innerProps", "extraRender", "styles"], gN = [], yN = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function bN(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-virtual-list" : n, a = e.className, i = e.height, o = e.itemHeight, s = e.fullHeight, l = s === void 0 ? !0 : s, u = e.style, d = e.data, f = e.children, v = e.itemKey, p = e.virtual, h = e.direction, g = e.scrollWidth, m = e.component, y = m === void 0 ? "div" : m, b = e.onScroll, x = e.onVirtualScroll, C = e.onVisibleChange, E = e.innerProps, S = e.extraRender, w = e.styles, N = We(e, hN), O = !!(p !== !1 && i && o), _ = O && d && (o * d.length > i || !!g), $ = h === "rtl", I = ne(r, P({}, "".concat(r, "-rtl"), $), a), F = d || gN, M = De(), V = De(), T = Ut(0), R = X(T, 2), k = R[0], A = R[1], U = Ut(0), z = X(U, 2), B = z[0], G = z[1], W = Ut(!1), j = X(W, 2), H = j[0], q = j[1], Y = function() {
    q(!0);
  }, J = function() {
    q(!1);
  }, oe = c.useCallback(function(ge) {
    return typeof v == "function" ? v(ge) : ge == null ? void 0 : ge[v];
  }, [v]), re = {
    getKey: oe
  };
  function de(ge) {
    A(function(ye) {
      var Ee;
      typeof ge == "function" ? Ee = ge(ye) : Ee = ge;
      var Ye = Mt(Ee);
      return M.current.scrollTop = Ye, Ye;
    });
  }
  var Z = De({
    start: 0,
    end: F.length
  }), Q = De(), ce = cN(F, oe), Ce = X(ce, 1), we = Ce[0];
  Q.current = we;
  var ke = sN(oe, null, null), ve = X(ke, 4), ae = ve[0], ie = ve[1], ee = ve[2], te = ve[3], xe = c.useMemo(function() {
    if (!O)
      return {
        scrollHeight: void 0,
        start: 0,
        end: F.length - 1,
        offset: void 0
      };
    if (!_) {
      var ge;
      return {
        scrollHeight: ((ge = V.current) === null || ge === void 0 ? void 0 : ge.offsetHeight) || 0,
        start: 0,
        end: F.length - 1,
        offset: void 0
      };
    }
    for (var ye = 0, Ee, Ye, Re, Ie = F.length, Be = 0; Be < Ie; Be += 1) {
      var Pt = F[Be], ut = oe(Pt), xt = ee.get(ut), kt = ye + (xt === void 0 ? o : xt);
      kt >= k && Ee === void 0 && (Ee = Be, Ye = ye), kt > k + i && Re === void 0 && (Re = Be), ye = kt;
    }
    return Ee === void 0 && (Ee = 0, Ye = 0, Re = Math.ceil(i / o)), Re === void 0 && (Re = F.length - 1), Re = Math.min(Re + 1, F.length - 1), {
      scrollHeight: ye,
      start: Ee,
      end: Re,
      offset: Ye
    };
  }, [_, O, k, F, te, i]), Me = xe.scrollHeight, Te = xe.start, Ve = xe.end, Ae = xe.offset;
  Z.current.start = Te, Z.current.end = Ve;
  var Ne = c.useState({
    width: 0,
    height: i
  }), $e = X(Ne, 2), je = $e[0], lt = $e[1], tt = function(ye) {
    lt({
      width: ye.width || ye.offsetWidth,
      height: ye.height || ye.offsetHeight
    });
  }, ot = De(), ft = De(), nt = c.useMemo(function() {
    return af(je.width, g);
  }, [je.width, g]), Et = c.useMemo(function() {
    return af(je.height, Me);
  }, [je.height, Me]), at = Me - i, Ft = De(at);
  Ft.current = at;
  function Mt(ge) {
    var ye = ge;
    return Number.isNaN(Ft.current) || (ye = Math.min(ye, Ft.current)), ye = Math.max(ye, 0), ye;
  }
  var rt = k <= 0, Ot = k >= at, vt = Am(rt, Ot), Ze = function() {
    return {
      x: $ ? -B : B,
      y: k
    };
  }, Ke = De(Ze()), Oe = cr(function() {
    if (x) {
      var ge = Ze();
      (Ke.current.x !== ge.x || Ke.current.y !== ge.y) && (x(ge), Ke.current = ge);
    }
  });
  function se(ge, ye) {
    var Ee = ge;
    ye ? (Ws(function() {
      G(Ee);
    }), Oe()) : de(Ee);
  }
  function ue(ge) {
    var ye = ge.currentTarget.scrollTop;
    ye !== k && de(ye), b == null || b(ge), Oe();
  }
  var me = function(ye) {
    var Ee = ye, Ye = g - je.width;
    return Ee = Math.max(Ee, 0), Ee = Math.min(Ee, Ye), Ee;
  }, Se = cr(function(ge, ye) {
    ye ? (Ws(function() {
      G(function(Ee) {
        var Ye = Ee + ($ ? -ge : ge);
        return me(Ye);
      });
    }), Oe()) : de(function(Ee) {
      var Ye = Ee + ge;
      return Ye;
    });
  }), _e = dN(O, rt, Ot, !!g, Se), Je = X(_e, 2), Ct = Je[0], Rt = Je[1];
  vN(O, M, function(ge, ye) {
    return vt(ge, ye) ? !1 : (Ct({
      preventDefault: function() {
      },
      deltaY: ge
    }), !0);
  }), rn(function() {
    function ge(Ee) {
      O && Ee.preventDefault();
    }
    var ye = M.current;
    return ye.addEventListener("wheel", Ct), ye.addEventListener("DOMMouseScroll", Rt), ye.addEventListener("MozMousePixelScroll", ge), function() {
      ye.removeEventListener("wheel", Ct), ye.removeEventListener("DOMMouseScroll", Rt), ye.removeEventListener("MozMousePixelScroll", ge);
    };
  }, [O]), rn(function() {
    g && G(function(ge) {
      return me(ge);
    });
  }, [je.width, g]);
  var At = function() {
    var ye, Ee;
    (ye = ot.current) === null || ye === void 0 || ye.delayHidden(), (Ee = ft.current) === null || Ee === void 0 || Ee.delayHidden();
  }, Qe = lN(M, F, ee, o, oe, function() {
    return ie(!0);
  }, de, At);
  c.useImperativeHandle(t, function() {
    return {
      getScrollInfo: Ze,
      scrollTo: function(ye) {
        function Ee(Ye) {
          return Ye && Le(Ye) === "object" && ("left" in Ye || "top" in Ye);
        }
        Ee(ye) ? (ye.left !== void 0 && G(me(ye.left)), Qe(ye.top)) : Qe(ye);
      }
    };
  }), rn(function() {
    if (C) {
      var ge = F.slice(Te, Ve + 1);
      C(ge, F);
    }
  }, [Te, Ve, F]);
  var L = mN(F, oe, ee, o), le = S == null ? void 0 : S({
    start: Te,
    end: Ve,
    virtual: _,
    offsetX: B,
    offsetY: Ae,
    rtl: $,
    getSize: L
  }), he = iN(F, Te, Ve, g, ae, f, re), Pe = null;
  i && (Pe = D(P({}, l ? "height" : "maxHeight", i), yN), O && (Pe.overflowY = "hidden", g && (Pe.overflowX = "hidden"), H && (Pe.pointerEvents = "none")));
  var ze = {};
  return $ && (ze.dir = "rtl"), /* @__PURE__ */ c.createElement("div", K({
    style: D(D({}, u), {}, {
      position: "relative"
    }),
    className: I
  }, ze, N), /* @__PURE__ */ c.createElement(zn, {
    onResize: tt
  }, /* @__PURE__ */ c.createElement(y, {
    className: "".concat(r, "-holder"),
    style: Pe,
    ref: M,
    onScroll: ue,
    onMouseEnter: At
  }, /* @__PURE__ */ c.createElement(Dm, {
    prefixCls: r,
    height: Me,
    offsetX: B,
    offsetY: Ae,
    scrollWidth: g,
    onInnerResize: ie,
    ref: V,
    innerProps: E,
    rtl: $,
    extra: le
  }, he))), _ && Me > i && /* @__PURE__ */ c.createElement(Tl, {
    ref: ot,
    prefixCls: r,
    scrollOffset: k,
    scrollRange: Me,
    rtl: $,
    onScroll: se,
    onStartMove: Y,
    onStopMove: J,
    spinSize: Et,
    containerSize: je.height,
    style: w == null ? void 0 : w.verticalScrollBar,
    thumbStyle: w == null ? void 0 : w.verticalScrollBarThumb
  }), _ && g && /* @__PURE__ */ c.createElement(Tl, {
    ref: ft,
    prefixCls: r,
    scrollOffset: B,
    scrollRange: g,
    rtl: $,
    onScroll: se,
    onStartMove: Y,
    onStopMove: J,
    spinSize: nt,
    containerSize: je.width,
    horizontal: !0,
    style: w == null ? void 0 : w.horizontalScrollBar,
    thumbStyle: w == null ? void 0 : w.horizontalScrollBarThumb
  }));
}
var Du = /* @__PURE__ */ c.forwardRef(bN);
Du.displayName = "List";
function CN() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
var Lm = /* @__PURE__ */ c.createContext(null), xN = ["disabled", "title", "children", "style", "className"];
function of(e) {
  return typeof e == "string" || typeof e == "number";
}
var SN = function(t, n) {
  var r = wE(), a = r.prefixCls, i = r.id, o = r.open, s = r.multiple, l = r.mode, u = r.searchValue, d = r.toggleOpen, f = r.notFoundContent, v = r.onPopupScroll, p = c.useContext(Lm), h = p.flattenOptions, g = p.onActiveValue, m = p.defaultActiveFirstOption, y = p.onSelect, b = p.menuItemSelectedIcon, x = p.rawValues, C = p.fieldNames, E = p.virtual, S = p.listHeight, w = p.listItemHeight, N = "".concat(a, "-item"), O = pu(function() {
    return h;
  }, [o, h], function(W, j) {
    return j[0] && W[1] !== j[1];
  }), _ = c.useRef(null), $ = function(j) {
    j.preventDefault();
  }, I = function(j) {
    _.current && _.current.scrollTo(typeof j == "number" ? {
      index: j
    } : j);
  }, F = function(j) {
    for (var H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, q = O.length, Y = 0; Y < q; Y += 1) {
      var J = (j + Y * H + q) % q, oe = O[J], re = oe.group, de = oe.data;
      if (!re && !de.disabled)
        return J;
    }
    return -1;
  }, M = c.useState(function() {
    return F(0);
  }), V = X(M, 2), T = V[0], R = V[1], k = function(j) {
    var H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    R(j);
    var q = {
      source: H ? "keyboard" : "mouse"
    }, Y = O[j];
    if (!Y) {
      g(null, -1, q);
      return;
    }
    g(Y.value, j, q);
  };
  Dt(function() {
    k(m !== !1 ? F(0) : -1);
  }, [O.length, u]);
  var A = c.useCallback(function(W) {
    return x.has(W) && l !== "combobox";
  }, [l, pe(x).toString(), x.size]);
  Dt(function() {
    var W = setTimeout(function() {
      if (!s && o && x.size === 1) {
        var H = Array.from(x)[0], q = O.findIndex(function(Y) {
          var J = Y.data;
          return J.value === H;
        });
        q !== -1 && (k(q), I(q));
      }
    });
    if (o) {
      var j;
      (j = _.current) === null || j === void 0 || j.scrollTo(void 0);
    }
    return function() {
      return clearTimeout(W);
    };
  }, [o, u]);
  var U = function(j) {
    j !== void 0 && y(j, {
      selected: !x.has(j)
    }), s || d(!1);
  };
  if (c.useImperativeHandle(n, function() {
    return {
      onKeyDown: function(j) {
        var H = j.which, q = j.ctrlKey;
        switch (H) {
          case fe.N:
          case fe.P:
          case fe.UP:
          case fe.DOWN: {
            var Y = 0;
            if (H === fe.UP ? Y = -1 : H === fe.DOWN ? Y = 1 : CN() && q && (H === fe.N ? Y = 1 : H === fe.P && (Y = -1)), Y !== 0) {
              var J = F(T + Y, Y);
              I(J), k(J, !0);
            }
            break;
          }
          case fe.ENTER: {
            var oe = O[T];
            oe && !oe.data.disabled ? U(oe.value) : U(void 0), o && j.preventDefault();
            break;
          }
          case fe.ESC:
            d(!1), o && j.stopPropagation();
        }
      },
      onKeyUp: function() {
      },
      scrollTo: function(j) {
        I(j);
      }
    };
  }), O.length === 0)
    return /* @__PURE__ */ c.createElement("div", {
      role: "listbox",
      id: "".concat(i, "_list"),
      className: "".concat(N, "-empty"),
      onMouseDown: $
    }, f);
  var z = Object.keys(C).map(function(W) {
    return C[W];
  }), B = function(j) {
    return j.label;
  }, G = function(j) {
    var H = O[j];
    if (!H)
      return null;
    var q = H.data || {}, Y = q.value, J = H.group, oe = Nr(q, !0), re = B(H);
    return H ? /* @__PURE__ */ c.createElement("div", K({
      "aria-label": typeof re == "string" && !J ? re : null
    }, oe, {
      key: j,
      role: J ? "presentation" : "option",
      id: "".concat(i, "_list_").concat(j),
      "aria-selected": A(Y)
    }), Y) : null;
  };
  return /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement("div", {
    role: "listbox",
    id: "".concat(i, "_list"),
    style: {
      height: 0,
      width: 0,
      overflow: "hidden"
    }
  }, G(T - 1), G(T), G(T + 1)), /* @__PURE__ */ c.createElement(Du, {
    itemKey: "key",
    ref: _,
    data: O,
    height: S,
    itemHeight: w,
    fullHeight: !1,
    onMouseDown: $,
    onScroll: v,
    virtual: E
  }, function(W, j) {
    var H, q = W.group, Y = W.groupOption, J = W.data, oe = W.label, re = W.value, de = J.key;
    if (q) {
      var Z, Q = (Z = J.title) !== null && Z !== void 0 ? Z : of(oe) ? oe.toString() : void 0;
      return /* @__PURE__ */ c.createElement("div", {
        className: ne(N, "".concat(N, "-group")),
        title: Q
      }, oe !== void 0 ? oe : de);
    }
    var ce = J.disabled, Ce = J.title;
    J.children;
    var we = J.style, ke = J.className, ve = We(J, xN), ae = ln(ve, z), ie = A(re), ee = "".concat(N, "-option"), te = ne(N, ee, ke, (H = {}, P(H, "".concat(ee, "-grouped"), Y), P(H, "".concat(ee, "-active"), T === j && !ce), P(H, "".concat(ee, "-disabled"), ce), P(H, "".concat(ee, "-selected"), ie), H)), xe = B(W), Me = !b || typeof b == "function" || ie, Te = typeof xe == "number" ? xe : xe || re, Ve = of(Te) ? Te.toString() : void 0;
    return Ce !== void 0 && (Ve = Ce), /* @__PURE__ */ c.createElement("div", K({}, Nr(ae), {
      "aria-selected": ie,
      className: te,
      title: Ve,
      onMouseMove: function() {
        T === j || ce || k(j);
      },
      onClick: function() {
        ce || U(re);
      },
      style: we
    }), /* @__PURE__ */ c.createElement("div", {
      className: "".concat(ee, "-content")
    }, Te), /* @__PURE__ */ c.isValidElement(b) || ie, Me && /* @__PURE__ */ c.createElement(no, {
      className: "".concat(N, "-option-state"),
      customizeIcon: b,
      customizeIconProps: {
        isSelected: ie
      }
    }, ie ? "✓" : null));
  }));
}, Km = /* @__PURE__ */ c.forwardRef(SN);
Km.displayName = "OptionList";
function EN(e) {
  var t = e.mode, n = e.options, r = e.children, a = e.backfill, i = e.allowClear, o = e.placeholder, s = e.getInputElement, l = e.showSearch, u = e.onSearch, d = e.defaultOpen, f = e.autoFocus, v = e.labelInValue, p = e.value, h = e.inputValue, g = e.optionLabelProp, m = ao(t), y = l !== void 0 ? l : m || t === "combobox", b = n || Fu(r);
  if (Fe(t !== "tags" || b.every(function(S) {
    return !S.disabled;
  }), "Please avoid setting option to disabled in tags mode since user can always type text as tag."), t === "tags" || t === "combobox") {
    var x = b.some(function(S) {
      return S.options ? S.options.some(function(w) {
        return typeof ("value" in w ? w.value : w.key) == "number";
      }) : typeof ("value" in S ? S.value : S.key) == "number";
    });
    Fe(!x, "`value` of Option should not use number type when `mode` is `tags` or `combobox`.");
  }
  if (Fe(t !== "combobox" || !g, "`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly."), Fe(t === "combobox" || !a, "`backfill` only works with `combobox` mode."), Fe(t === "combobox" || !s, "`getInputElement` only work with `combobox` mode."), el(t !== "combobox" || !s || !i || !o, "Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`."), u && !y && t !== "combobox" && t !== "tags" && Fe(!1, "`onSearch` should work with `showSearch` instead of use alone."), el(!d || f, "`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed."), p != null) {
    var C = Nu(p);
    Fe(!v || C.every(function(S) {
      return Le(S) === "object" && ("key" in S || "value" in S);
    }), "`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`"), Fe(!m || Array.isArray(p), "`value` should be array when `mode` is `multiple` or `tags`");
  }
  if (r) {
    var E = null;
    yn(r).some(function(S) {
      if (!/* @__PURE__ */ c.isValidElement(S) || !S.type)
        return !1;
      var w = S, N = w.type;
      if (N.isSelectOption)
        return !1;
      if (N.isSelectOptGroup) {
        var O = yn(S.props.children).every(function(_) {
          return !/* @__PURE__ */ c.isValidElement(_) || !S.type || _.type.isSelectOption ? !0 : (E = _.type, !1);
        });
        return !O;
      }
      return E = N, !0;
    }), E && Fe(!1, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(E.displayName || E.name || E, "`.")), Fe(h === void 0, "`inputValue` is deprecated, please use `searchValue` instead.");
  }
}
function wN(e, t) {
  if (e) {
    var n = function r(a) {
      for (var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = 0; o < a.length; o++) {
        var s = a[o];
        if (s[t == null ? void 0 : t.value] === null)
          return Fe(!1, "`value` in Select options should not be `null`."), !0;
        if (!i && Array.isArray(s[t == null ? void 0 : t.options]) && r(s[t == null ? void 0 : t.options], !0))
          break;
      }
    };
    n(e);
  }
}
var NN = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "listHeight", "listItemHeight", "value", "defaultValue", "labelInValue", "onChange"], ON = ["inputValue"];
function PN(e) {
  return !e || Le(e) !== "object";
}
var Vm = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var n = e.id, r = e.mode, a = e.prefixCls, i = a === void 0 ? "rc-select" : a, o = e.backfill, s = e.fieldNames, l = e.inputValue, u = e.searchValue, d = e.onSearch, f = e.autoClearSearchValue, v = f === void 0 ? !0 : f, p = e.onSelect, h = e.onDeselect, g = e.dropdownMatchSelectWidth, m = g === void 0 ? !0 : g, y = e.filterOption, b = e.filterSort, x = e.optionFilterProp, C = e.optionLabelProp, E = e.options, S = e.children, w = e.defaultActiveFirstOption, N = e.menuItemSelectedIcon, O = e.virtual, _ = e.listHeight, $ = _ === void 0 ? 200 : _, I = e.listItemHeight, F = I === void 0 ? 20 : I, M = e.value, V = e.defaultValue, T = e.labelInValue, R = e.onChange, k = We(e, NN), A = Zw(n), U = ao(r), z = !!(!E && S), B = c.useMemo(function() {
    return y === void 0 && r === "combobox" ? !1 : y;
  }, [y, r]), G = c.useMemo(
    function() {
      return Mm(s, z);
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [
      // We stringify fieldNames to avoid unnecessary re-renders.
      JSON.stringify(s),
      z
    ]
    /* eslint-enable react-hooks/exhaustive-deps */
  ), W = un("", {
    value: u !== void 0 ? u : l,
    postState: function(ue) {
      return ue || "";
    }
  }), j = X(W, 2), H = j[0], q = j[1], Y = rN(E, S, G, x, C), J = Y.valueOptions, oe = Y.labelOptions, re = Y.options, de = c.useCallback(function(se) {
    var ue = Nu(se);
    return ue.map(function(me) {
      var Se, _e, Je, Ct, Rt;
      if (PN(me))
        Se = me;
      else {
        var At;
        Je = me.key, _e = me.label, Se = (At = me.value) !== null && At !== void 0 ? At : Je;
      }
      var Qe = J.get(Se);
      if (Qe) {
        var L;
        if (_e === void 0 && (_e = Qe == null ? void 0 : Qe[C || G.label]), Je === void 0 && (Je = (L = Qe == null ? void 0 : Qe.key) !== null && L !== void 0 ? L : Se), Ct = Qe == null ? void 0 : Qe.disabled, Rt = Qe == null ? void 0 : Qe.title, process.env.NODE_ENV !== "production" && !C) {
          var le = Qe == null ? void 0 : Qe[G.label];
          le !== void 0 && !/* @__PURE__ */ c.isValidElement(le) && !/* @__PURE__ */ c.isValidElement(_e) && le !== _e && Fe(!1, "`label` of `value` is not same as `label` in Select options.");
        }
      }
      return {
        label: _e,
        value: Se,
        key: Je,
        disabled: Ct,
        title: Rt
      };
    });
  }, [G, C, J]), Z = un(V, {
    value: M
  }), Q = X(Z, 2), ce = Q[0], Ce = Q[1], we = c.useMemo(function() {
    var se, ue = de(ce);
    return r === "combobox" && !((se = ue[0]) !== null && se !== void 0 && se.value) ? [] : ue;
  }, [ce, de, r]), ke = Yw(we, J), ve = X(ke, 2), ae = ve[0], ie = ve[1], ee = c.useMemo(function() {
    if (!r && ae.length === 1) {
      var se = ae[0];
      if (se.value === null && (se.label === null || se.label === void 0))
        return [];
    }
    return ae.map(function(ue) {
      var me;
      return D(D({}, ue), {}, {
        label: (me = ue.label) !== null && me !== void 0 ? me : ue.value
      });
    });
  }, [r, ae]), te = c.useMemo(function() {
    return new Set(ae.map(function(se) {
      return se.value;
    }));
  }, [ae]);
  c.useEffect(function() {
    if (r === "combobox") {
      var se, ue = (se = ae[0]) === null || se === void 0 ? void 0 : se.value;
      q(WE(ue) ? String(ue) : "");
    }
  }, [ae]);
  var xe = ef(function(se, ue) {
    var me, Se = ue ?? se;
    return me = {}, P(me, G.value, se), P(me, G.label, Se), me;
  }), Me = c.useMemo(function() {
    if (r !== "tags")
      return re;
    var se = pe(re), ue = function(Se) {
      return J.has(Se);
    };
    return pe(ae).sort(function(me, Se) {
      return me.value < Se.value ? -1 : 1;
    }).forEach(function(me) {
      var Se = me.value;
      ue(Se) || se.push(xe(Se, me.label));
    }), se;
  }, [xe, re, J, ae, r]), Te = Xw(Me, G, H, B, x), Ve = c.useMemo(function() {
    return r !== "tags" || !H || Te.some(function(se) {
      return se[x || "value"] === H;
    }) ? Te : [xe(H)].concat(pe(Te));
  }, [xe, x, r, Te, H]), Ae = c.useMemo(function() {
    return b ? pe(Ve).sort(function(se, ue) {
      return b(se, ue);
    }) : Ve;
  }, [Ve, b]), Ne = c.useMemo(function() {
    return Uw(Ae, {
      fieldNames: G,
      childrenAsData: z
    });
  }, [Ae, G, z]), $e = function(ue) {
    var me = de(ue);
    if (Ce(me), R && // Trigger event only when value changed
    (me.length !== ae.length || me.some(function(Je, Ct) {
      var Rt;
      return ((Rt = ae[Ct]) === null || Rt === void 0 ? void 0 : Rt.value) !== (Je == null ? void 0 : Je.value);
    }))) {
      var Se = T ? me : me.map(function(Je) {
        return Je.value;
      }), _e = me.map(function(Je) {
        return kl(ie(Je.value));
      });
      R(
        // Value
        U ? Se : Se[0],
        // Option
        U ? _e : _e[0]
      );
    }
  }, je = c.useState(null), lt = X(je, 2), tt = lt[0], ot = lt[1], ft = c.useState(0), nt = X(ft, 2), Et = nt[0], at = nt[1], Ft = w !== void 0 ? w : r !== "combobox", Mt = c.useCallback(function(se, ue) {
    var me = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, Se = me.source, _e = Se === void 0 ? "keyboard" : Se;
    at(ue), o && r === "combobox" && se !== null && _e === "keyboard" && ot(String(se));
  }, [o, r]), rt = function(ue, me, Se) {
    var _e = function() {
      var ze, ge = ie(ue);
      return [T ? {
        label: ge == null ? void 0 : ge[G.label],
        value: ue,
        key: (ze = ge == null ? void 0 : ge.key) !== null && ze !== void 0 ? ze : ue
      } : ue, kl(ge)];
    };
    if (me && p) {
      var Je = _e(), Ct = X(Je, 2), Rt = Ct[0], At = Ct[1];
      p(Rt, At);
    } else if (!me && h && Se !== "clear") {
      var Qe = _e(), L = X(Qe, 2), le = L[0], he = L[1];
      h(le, he);
    }
  }, Ot = ef(function(se, ue) {
    var me, Se = U ? ue.selected : !0;
    Se ? me = U ? [].concat(pe(ae), [se]) : [se] : me = ae.filter(function(_e) {
      return _e.value !== se;
    }), $e(me), rt(se, Se), r === "combobox" ? ot("") : (!ao || v) && (q(""), ot(""));
  }), vt = function(ue, me) {
    $e(ue);
    var Se = me.type, _e = me.values;
    (Se === "remove" || Se === "clear") && _e.forEach(function(Je) {
      rt(Je.value, !1, Se);
    });
  }, Ze = function(ue, me) {
    if (q(ue), ot(null), me.source === "submit") {
      var Se = (ue || "").trim();
      if (Se) {
        var _e = Array.from(new Set([].concat(pe(te), [Se])));
        $e(_e), rt(Se, !0), q("");
      }
      return;
    }
    me.source !== "blur" && (r === "combobox" && $e(ue), d == null || d(ue));
  }, Ke = function(ue) {
    var me = ue;
    r !== "tags" && (me = ue.map(function(_e) {
      var Je = oe.get(_e);
      return Je == null ? void 0 : Je.value;
    }).filter(function(_e) {
      return _e !== void 0;
    }));
    var Se = Array.from(new Set([].concat(pe(te), pe(me))));
    $e(Se), Se.forEach(function(_e) {
      rt(_e, !0);
    });
  }, Oe = c.useMemo(function() {
    var se = O !== !1 && m !== !1;
    return D(D({}, Y), {}, {
      flattenOptions: Ne,
      onActiveValue: Mt,
      defaultActiveFirstOption: Ft,
      onSelect: Ot,
      menuItemSelectedIcon: N,
      rawValues: te,
      fieldNames: G,
      virtual: se,
      listHeight: $,
      listItemHeight: F,
      childrenAsData: z
    });
  }, [Y, Ne, Mt, Ft, Ot, N, te, G, O, m, $, F, z]);
  return process.env.NODE_ENV !== "production" && (EN(e), wN(re, G)), /* @__PURE__ */ c.createElement(Lm.Provider, {
    value: Oe
  }, /* @__PURE__ */ c.createElement($m, K({}, k, {
    // >>> MISC
    id: A,
    prefixCls: i,
    ref: t,
    omitDomProps: ON,
    mode: r,
    displayValues: ee,
    onDisplayValuesChange: vt,
    searchValue: H,
    onSearch: Ze,
    autoClearSearchValue: v,
    onSearchSplit: Ke,
    dropdownMatchSelectWidth: m,
    OptionList: Km,
    emptyOptions: !Ne.length,
    activeValue: tt,
    activeDescendantId: "".concat(A, "_list_").concat(Et)
  })));
});
process.env.NODE_ENV !== "production" && (Vm.displayName = "Select");
var Au = Vm;
Au.Option = $u;
Au.OptGroup = Mu;
var RN = function() {
  var t = c.useContext(st), n = t.getPrefixCls, r = n("empty-img-default");
  return /* @__PURE__ */ c.createElement("svg", {
    className: r,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ c.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ c.createElement("g", {
    transform: "translate(24 31.67)"
  }, /* @__PURE__ */ c.createElement("ellipse", {
    className: "".concat(r, "-ellipse"),
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /* @__PURE__ */ c.createElement("path", {
    className: "".concat(r, "-path-1"),
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
  }), /* @__PURE__ */ c.createElement("path", {
    className: "".concat(r, "-path-2"),
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    transform: "translate(13.56)"
  }), /* @__PURE__ */ c.createElement("path", {
    className: "".concat(r, "-path-3"),
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
  }), /* @__PURE__ */ c.createElement("path", {
    className: "".concat(r, "-path-4"),
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
  })), /* @__PURE__ */ c.createElement("path", {
    className: "".concat(r, "-path-5"),
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
  }), /* @__PURE__ */ c.createElement("g", {
    className: "".concat(r, "-g"),
    transform: "translate(149.65 15.383)"
  }, /* @__PURE__ */ c.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /* @__PURE__ */ c.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};
const kN = RN;
var TN = function() {
  var t = c.useContext(st), n = t.getPrefixCls, r = n("empty-img-simple");
  return /* @__PURE__ */ c.createElement("svg", {
    className: r,
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ c.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ c.createElement("ellipse", {
    className: "".concat(r, "-ellipse"),
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /* @__PURE__ */ c.createElement("g", {
    className: "".concat(r, "-g"),
    fillRule: "nonzero"
  }, /* @__PURE__ */ c.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /* @__PURE__ */ c.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    className: "".concat(r, "-path")
  }))));
};
const _N = TN;
var IN = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, zm = /* @__PURE__ */ c.createElement(kN, null), jm = /* @__PURE__ */ c.createElement(_N, null), Lu = function(t) {
  var n = t.className, r = t.prefixCls, a = t.image, i = a === void 0 ? zm : a, o = t.description, s = t.children, l = t.imageStyle, u = IN(t, ["className", "prefixCls", "image", "description", "children", "imageStyle"]), d = c.useContext(st), f = d.getPrefixCls, v = d.direction;
  return /* @__PURE__ */ c.createElement(wo, {
    componentName: "Empty"
  }, function(p) {
    var h, g = f("empty", r), m = typeof o < "u" ? o : p.description, y = typeof m == "string" ? m : "empty", b = null;
    return typeof i == "string" ? b = /* @__PURE__ */ c.createElement("img", {
      alt: y,
      src: i
    }) : b = i, /* @__PURE__ */ c.createElement("div", K({
      className: ne(g, (h = {}, P(h, "".concat(g, "-normal"), i === jm), P(h, "".concat(g, "-rtl"), v === "rtl"), h), n)
    }, u), /* @__PURE__ */ c.createElement("div", {
      className: "".concat(g, "-image"),
      style: l
    }, b), m && /* @__PURE__ */ c.createElement("div", {
      className: "".concat(g, "-description")
    }, m), s && /* @__PURE__ */ c.createElement("div", {
      className: "".concat(g, "-footer")
    }, s));
  });
};
Lu.PRESENTED_IMAGE_DEFAULT = zm;
Lu.PRESENTED_IMAGE_SIMPLE = jm;
const Cr = Lu;
var FN = function(t) {
  return /* @__PURE__ */ c.createElement(ni, null, function(n) {
    var r = n.getPrefixCls, a = r("empty");
    switch (t) {
      case "Table":
      case "List":
        return /* @__PURE__ */ c.createElement(Cr, {
          image: Cr.PRESENTED_IMAGE_SIMPLE
        });
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return /* @__PURE__ */ c.createElement(Cr, {
          image: Cr.PRESENTED_IMAGE_SIMPLE,
          className: "".concat(a, "-small")
        });
      default:
        return /* @__PURE__ */ c.createElement(Cr, null);
    }
  });
};
const Ku = FN;
var Tn = /* @__PURE__ */ c.createContext({}), sf = function(t) {
  var n = t.children, r = t.status, a = t.override, i = en(Tn), o = Zt(function() {
    var s = K({}, i);
    return a && delete s.isFormItemInput, r && (delete s.status, delete s.hasFeedback, delete s.feedbackIcon), s;
  }, [r, a, i]);
  return /* @__PURE__ */ c.createElement(Tn.Provider, {
    value: o
  }, n);
}, In = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return n;
}, Ns = function() {
  return {
    height: 0,
    opacity: 0
  };
}, lf = function(t) {
  var n = t.scrollHeight;
  return {
    height: n,
    opacity: 1
  };
}, MN = function(t) {
  return {
    height: t ? t.offsetHeight : 0
  };
}, Os = function(t, n) {
  return (n == null ? void 0 : n.deadline) === !0 || n.propertyName === "height";
}, Hm = {
  motionName: "ant-motion-collapse",
  onAppearStart: Ns,
  onEnterStart: Ns,
  onAppearActive: lf,
  onEnterActive: lf,
  onLeaveStart: MN,
  onLeaveActive: Ns,
  onAppearEnd: Os,
  onEnterEnd: Os,
  onLeaveEnd: Os,
  motionDeadline: 500
};
In("bottomLeft", "bottomRight", "topLeft", "topRight");
var $N = function(t) {
  return t !== void 0 && (t === "topLeft" || t === "topRight") ? "slide-down" : "slide-up";
}, Bm = function(t, n, r) {
  return r !== void 0 ? r : "".concat(t, "-").concat(n);
};
In("warning", "error", "");
function ur(e, t, n) {
  var r;
  return ne((r = {}, P(r, "".concat(e, "-status-success"), t === "success"), P(r, "".concat(e, "-status-warning"), t === "warning"), P(r, "".concat(e, "-status-error"), t === "error"), P(r, "".concat(e, "-status-validating"), t === "validating"), P(r, "".concat(e, "-has-feedback"), n), r));
}
var ai = function(t, n) {
  return n || t;
}, DN = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" };
const AN = DN;
var Um = function(t, n) {
  return /* @__PURE__ */ c.createElement(It, D(D({}, t), {}, {
    ref: n,
    icon: AN
  }));
};
Um.displayName = "CheckOutlined";
const LN = /* @__PURE__ */ c.forwardRef(Um);
var KN = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" };
const VN = KN;
var Wm = function(t, n) {
  return /* @__PURE__ */ c.createElement(It, D(D({}, t), {}, {
    ref: n,
    icon: VN
  }));
};
Wm.displayName = "DownOutlined";
const Vu = /* @__PURE__ */ c.forwardRef(Wm);
var zN = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" };
const jN = zN;
var Gm = function(t, n) {
  return /* @__PURE__ */ c.createElement(It, D(D({}, t), {}, {
    ref: n,
    icon: jN
  }));
};
Gm.displayName = "SearchOutlined";
const Fo = /* @__PURE__ */ c.forwardRef(Gm);
function HN(e) {
  var t = e.suffixIcon, n = e.clearIcon, r = e.menuItemSelectedIcon, a = e.removeIcon, i = e.loading, o = e.multiple, s = e.hasFeedback, l = e.prefixCls, u = e.showArrow, d = e.feedbackIcon, f = n ?? /* @__PURE__ */ c.createElement(xu, null), v = function(b) {
    return /* @__PURE__ */ c.createElement(c.Fragment, null, u !== !1 && b, s && d);
  }, p = null;
  if (t !== void 0)
    p = v(t);
  else if (i)
    p = v(/* @__PURE__ */ c.createElement(Ha, {
      spin: !0
    }));
  else {
    var h = "".concat(l, "-suffix");
    p = function(b) {
      var x = b.open, C = b.showSearch;
      return v(x && C ? /* @__PURE__ */ c.createElement(Fo, {
        className: h
      }) : /* @__PURE__ */ c.createElement(Vu, {
        className: h
      }));
    };
  }
  var g = null;
  r !== void 0 ? g = r : o ? g = /* @__PURE__ */ c.createElement(LN, null) : g = null;
  var m = null;
  return a !== void 0 ? m = a : m = /* @__PURE__ */ c.createElement(mE, null), {
    clearIcon: f,
    suffixIcon: p,
    itemIcon: g,
    removeIcon: m
  };
}
var qm = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, Mo = /* @__PURE__ */ c.createContext(null), ii = function(t, n) {
  var r = c.useContext(Mo), a = c.useMemo(function() {
    var i;
    if (!r)
      return "";
    var o = r.compactDirection, s = r.isFirstItem, l = r.isLastItem, u = o === "vertical" ? "-vertical-" : "-";
    return ne((i = {}, P(i, "".concat(t, "-compact").concat(u, "item"), !0), P(i, "".concat(t, "-compact").concat(u, "first-item"), s), P(i, "".concat(t, "-compact").concat(u, "last-item"), l), P(i, "".concat(t, "-compact").concat(u, "item-rtl"), n === "rtl"), i));
  }, [t, n, r]);
  return {
    compactSize: r == null ? void 0 : r.compactSize,
    compactDirection: r == null ? void 0 : r.compactDirection,
    compactItemClassnames: a
  };
}, _l = function(t) {
  var n = t.children;
  return /* @__PURE__ */ c.createElement(Mo.Provider, {
    value: null
  }, n);
}, BN = function(t) {
  var n = t.children, r = qm(t, ["children"]);
  return /* @__PURE__ */ c.createElement(Mo.Provider, {
    value: r
  }, n);
}, UN = function(t) {
  var n, r = c.useContext(st), a = r.getPrefixCls, i = r.direction, o = t.size, s = o === void 0 ? "middle" : o, l = t.direction, u = t.block, d = t.prefixCls, f = t.className, v = t.children, p = qm(t, ["size", "direction", "block", "prefixCls", "className", "children"]), h = a("space-compact", d), g = ne(h, (n = {}, P(n, "".concat(h, "-rtl"), i === "rtl"), P(n, "".concat(h, "-block"), u), P(n, "".concat(h, "-vertical"), l === "vertical"), n), f), m = c.useContext(Mo), y = yn(v), b = c.useMemo(function() {
    return y.map(function(x, C) {
      var E = x && x.key || "".concat(h, "-item-").concat(C);
      return /* @__PURE__ */ c.createElement(BN, {
        key: E,
        compactSize: s,
        compactDirection: l,
        isFirstItem: C === 0 && (!m || (m == null ? void 0 : m.isFirstItem)),
        isLastItem: C === y.length - 1 && (!m || (m == null ? void 0 : m.isLastItem))
      }, x);
    });
  }, [s, y, m]);
  return y.length === 0 ? null : /* @__PURE__ */ c.createElement("div", K({
    className: g
  }, p), b);
}, WN = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, Ym = "SECRET_COMBOBOX_MODE_DO_NOT_USE", GN = function(t, n) {
  var r, a = t.prefixCls, i = t.bordered, o = i === void 0 ? !0 : i, s = t.className, l = t.getPopupContainer, u = t.dropdownClassName, d = t.popupClassName, f = t.listHeight, v = f === void 0 ? 256 : f, p = t.placement, h = t.listItemHeight, g = h === void 0 ? 24 : h, m = t.size, y = t.disabled, b = t.notFoundContent, x = t.status, C = t.showArrow, E = WN(t, ["prefixCls", "bordered", "className", "getPopupContainer", "dropdownClassName", "popupClassName", "listHeight", "placement", "listItemHeight", "size", "disabled", "notFoundContent", "status", "showArrow"]), S = c.useContext(st), w = S.getPopupContainer, N = S.getPrefixCls, O = S.renderEmpty, _ = S.direction, $ = S.virtual, I = S.dropdownMatchSelectWidth, F = c.useContext(fr), M = N("select", a), V = N(), T = ii(M, _), R = T.compactSize, k = T.compactItemClassnames, A = c.useMemo(function() {
    var ie = E.mode;
    if (ie !== "combobox")
      return ie === Ym ? "combobox" : ie;
  }, [E.mode]), U = A === "multiple" || A === "tags", z = C !== void 0 ? C : E.loading || !(U || A === "combobox");
  process.env.NODE_ENV !== "production" && Nt(!u, "Select", "`dropdownClassName` is deprecated which will be removed in next major version. Please use `popupClassName` instead.");
  var B = en(Tn), G = B.status, W = B.hasFeedback, j = B.isFormItemInput, H = B.feedbackIcon, q = ai(G, x), Y;
  b !== void 0 ? Y = b : A === "combobox" ? Y = null : Y = (O || Ku)("Select");
  var J = HN(K(K({}, E), {
    multiple: U,
    hasFeedback: W,
    feedbackIcon: H,
    showArrow: z,
    prefixCls: M
  })), oe = J.suffixIcon, re = J.itemIcon, de = J.removeIcon, Z = J.clearIcon, Q = ln(E, ["suffixIcon", "itemIcon"]), ce = ne(d || u, P({}, "".concat(M, "-dropdown-").concat(_), _ === "rtl")), Ce = R || m || F, we = c.useContext(Rr), ke = y ?? we, ve = ne((r = {}, P(r, "".concat(M, "-lg"), Ce === "large"), P(r, "".concat(M, "-sm"), Ce === "small"), P(r, "".concat(M, "-rtl"), _ === "rtl"), P(r, "".concat(M, "-borderless"), !o), P(r, "".concat(M, "-in-form-item"), j), r), ur(M, q, W), k, s), ae = function() {
    return p !== void 0 ? p : _ === "rtl" ? "bottomRight" : "bottomLeft";
  };
  return /* @__PURE__ */ c.createElement(Au, K({
    ref: n,
    virtual: $,
    dropdownMatchSelectWidth: I
  }, Q, {
    transitionName: Bm(V, $N(p), E.transitionName),
    listHeight: v,
    listItemHeight: g,
    mode: A,
    prefixCls: M,
    placement: ae(),
    direction: _,
    inputIcon: oe,
    menuItemSelectedIcon: re,
    removeIcon: de,
    clearIcon: Z,
    notFoundContent: Y,
    className: ve,
    getPopupContainer: l || w,
    dropdownClassName: ce,
    showArrow: W || C,
    disabled: ke
  }));
}, $o = /* @__PURE__ */ c.forwardRef(GN);
$o.SECRET_COMBOBOX_MODE_DO_NOT_USE = Ym;
$o.Option = $u;
$o.OptGroup = Mu;
const Do = $o;
function Xm() {
  var e = c.useReducer(function(r) {
    return r + 1;
  }, 0), t = X(e, 2), n = t[1];
  return n;
}
var Oi = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)"
}, hr = /* @__PURE__ */ new Map(), Ps = -1, Pi = {}, qN = {
  matchHandlers: {},
  dispatch: function(t) {
    return Pi = t, hr.forEach(function(n) {
      return n(Pi);
    }), hr.size >= 1;
  },
  subscribe: function(t) {
    return hr.size || this.register(), Ps += 1, hr.set(Ps, t), t(Pi), Ps;
  },
  unsubscribe: function(t) {
    hr.delete(t), hr.size || this.unregister();
  },
  unregister: function() {
    var t = this;
    Object.keys(Oi).forEach(function(n) {
      var r = Oi[n], a = t.matchHandlers[r];
      a == null || a.mql.removeListener(a == null ? void 0 : a.listener);
    }), hr.clear();
  },
  register: function() {
    var t = this;
    Object.keys(Oi).forEach(function(n) {
      var r = Oi[n], a = function(s) {
        var l = s.matches;
        t.dispatch(K(K({}, Pi), P({}, n, l)));
      }, i = window.matchMedia(r);
      i.addListener(a), t.matchHandlers[r] = {
        mql: i,
        listener: a
      }, a(i);
    });
  }
};
const uf = qN;
function Jm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, t = De({}), n = Xm();
  return Dt(function() {
    var r = uf.subscribe(function(a) {
      t.current = a, e && n();
    });
    return function() {
      return uf.unsubscribe(r);
    };
  }, []), t.current;
}
var xn = {
  adjustX: 1,
  adjustY: 1
}, Sn = [0, 0], Qm = {
  left: {
    points: ["cr", "cl"],
    overflow: xn,
    offset: [-4, 0],
    targetOffset: Sn
  },
  right: {
    points: ["cl", "cr"],
    overflow: xn,
    offset: [4, 0],
    targetOffset: Sn
  },
  top: {
    points: ["bc", "tc"],
    overflow: xn,
    offset: [0, -4],
    targetOffset: Sn
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: xn,
    offset: [0, 4],
    targetOffset: Sn
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: xn,
    offset: [0, -4],
    targetOffset: Sn
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: xn,
    offset: [-4, 0],
    targetOffset: Sn
  },
  topRight: {
    points: ["br", "tr"],
    overflow: xn,
    offset: [0, -4],
    targetOffset: Sn
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: xn,
    offset: [4, 0],
    targetOffset: Sn
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: xn,
    offset: [0, 4],
    targetOffset: Sn
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: xn,
    offset: [4, 0],
    targetOffset: Sn
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: xn,
    offset: [0, 4],
    targetOffset: Sn
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: xn,
    offset: [-4, 0],
    targetOffset: Sn
  }
};
function YN(e) {
  var t = e.showArrow, n = e.arrowContent, r = e.children, a = e.prefixCls, i = e.id, o = e.overlayInnerStyle, s = e.className, l = e.style;
  return /* @__PURE__ */ c.createElement("div", {
    className: ne("".concat(a, "-content"), s),
    style: l
  }, t !== !1 && /* @__PURE__ */ c.createElement("div", {
    className: "".concat(a, "-arrow"),
    key: "arrow"
  }, n), /* @__PURE__ */ c.createElement("div", {
    className: "".concat(a, "-inner"),
    id: i,
    role: "tooltip",
    style: o
  }, typeof r == "function" ? r() : r));
}
var XN = function(t, n) {
  var r = t.overlayClassName, a = t.trigger, i = a === void 0 ? ["hover"] : a, o = t.mouseEnterDelay, s = o === void 0 ? 0 : o, l = t.mouseLeaveDelay, u = l === void 0 ? 0.1 : l, d = t.overlayStyle, f = t.prefixCls, v = f === void 0 ? "rc-tooltip" : f, p = t.children, h = t.onVisibleChange, g = t.afterVisibleChange, m = t.transitionName, y = t.animation, b = t.motion, x = t.placement, C = x === void 0 ? "right" : x, E = t.align, S = E === void 0 ? {} : E, w = t.destroyTooltipOnHide, N = w === void 0 ? !1 : w, O = t.defaultVisible, _ = t.getTooltipContainer, $ = t.overlayInnerStyle, I = t.arrowContent, F = t.overlay, M = t.id, V = t.showArrow, T = We(t, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"]), R = De(null);
  ho(n, function() {
    return R.current;
  });
  var k = D({}, T);
  "visible" in t && (k.popupVisible = t.visible);
  var A = function() {
    return /* @__PURE__ */ c.createElement(YN, {
      showArrow: V,
      arrowContent: I,
      key: "content",
      prefixCls: v,
      id: M,
      overlayInnerStyle: $
    }, F);
  }, U = !1, z = !1;
  if (typeof N == "boolean")
    U = N;
  else if (N && Le(N) === "object") {
    var B = N.keepParent;
    U = B === !0, z = B === !1;
  }
  return /* @__PURE__ */ c.createElement(Io, K({
    popupClassName: r,
    prefixCls: v,
    popup: A,
    action: i,
    builtinPlacements: Qm,
    popupPlacement: C,
    ref: R,
    popupAlign: S,
    getPopupContainer: _,
    onPopupVisibleChange: h,
    afterPopupVisibleChange: g,
    popupTransitionName: m,
    popupAnimation: y,
    popupMotion: b,
    defaultPopupVisible: O,
    destroyPopupOnHide: U,
    autoDestroy: z,
    mouseLeaveDelay: u,
    popupStyle: d,
    mouseEnterDelay: s
  }, k), p);
};
const JN = /* @__PURE__ */ aa(XN);
In("success", "processing", "error", "default", "warning");
var QN = In("pink", "red", "yellow", "orange", "cyan", "green", "blue", "purple", "geekblue", "magenta", "volcano", "gold", "lime"), ZN = {
  adjustX: 1,
  adjustY: 1
}, cf = {
  adjustX: 0,
  adjustY: 0
}, eO = [0, 0];
function df(e) {
  return typeof e == "boolean" ? e ? ZN : cf : K(K({}, cf), e);
}
function Zm(e) {
  var t = e.arrowWidth, n = t === void 0 ? 4 : t, r = e.horizontalArrowShift, a = r === void 0 ? 16 : r, i = e.verticalArrowShift, o = i === void 0 ? 8 : i, s = e.autoAdjustOverflow, l = e.arrowPointAtCenter, u = {
    left: {
      points: ["cr", "cl"],
      offset: [-4, 0]
    },
    right: {
      points: ["cl", "cr"],
      offset: [4, 0]
    },
    top: {
      points: ["bc", "tc"],
      offset: [0, -4]
    },
    bottom: {
      points: ["tc", "bc"],
      offset: [0, 4]
    },
    topLeft: {
      points: ["bl", "tc"],
      offset: [-(a + n), -4]
    },
    leftTop: {
      points: ["tr", "cl"],
      offset: [-4, -(o + n)]
    },
    topRight: {
      points: ["br", "tc"],
      offset: [a + n, -4]
    },
    rightTop: {
      points: ["tl", "cr"],
      offset: [4, -(o + n)]
    },
    bottomRight: {
      points: ["tr", "bc"],
      offset: [a + n, 4]
    },
    rightBottom: {
      points: ["bl", "cr"],
      offset: [4, o + n]
    },
    bottomLeft: {
      points: ["tl", "bc"],
      offset: [-(a + n), 4]
    },
    leftBottom: {
      points: ["br", "cl"],
      offset: [-4, o + n]
    }
  };
  return Object.keys(u).forEach(function(d) {
    u[d] = l ? K(K({}, u[d]), {
      overflow: df(s),
      targetOffset: eO
    }) : K(K({}, Qm[d]), {
      overflow: df(s)
    }), u[d].ignoreShake = !0;
  }), u;
}
var tO = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, nO = function(t, n) {
  var r = {}, a = K({}, t);
  return n.forEach(function(i) {
    t && i in t && (r[i] = t[i], delete a[i]);
  }), {
    picked: r,
    omitted: a
  };
}, ff = new RegExp("^(".concat(QN.join("|"), ")(-inverse)?$"));
function rO(e, t) {
  var n = e.type;
  if ((n.__ANT_BUTTON === !0 || e.type === "button") && e.props.disabled || n.__ANT_SWITCH === !0 && (e.props.disabled || e.props.loading) || n.__ANT_RADIO === !0 && e.props.disabled) {
    var r = nO(e.props.style, ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]), a = r.picked, i = r.omitted, o = K(K({
      display: "inline-block"
    }, a), {
      cursor: "not-allowed",
      width: e.props.block ? "100%" : void 0
    }), s = K(K({}, i), {
      pointerEvents: "none"
    }), l = on(e, {
      style: s,
      className: null
    });
    return /* @__PURE__ */ c.createElement("span", {
      style: o,
      className: ne(e.props.className, "".concat(t, "-disabled-compatible-wrapper"))
    }, l);
  }
  return e;
}
var eh = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var n, r = c.useContext(st), a = r.getPopupContainer, i = r.getPrefixCls, o = r.direction;
  process.env.NODE_ENV !== "production" && [["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"]].forEach(function(W) {
    var j = X(W, 2), H = j[0], q = j[1];
    process.env.NODE_ENV !== "production" && Nt(!(H in e), "Tooltip", "`".concat(H, "` is deprecated which will be removed in next major version, please use `").concat(q, "` instead."));
  });
  var s = un(!1, {
    value: e.open !== void 0 ? e.open : e.visible,
    defaultValue: e.defaultOpen !== void 0 ? e.defaultOpen : e.defaultVisible
  }), l = X(s, 2), u = l[0], d = l[1], f = function() {
    var j = e.title, H = e.overlay;
    return !j && !H && j !== 0;
  }, v = function(j) {
    var H, q;
    d(f() ? !1 : j), f() || ((H = e.onOpenChange) === null || H === void 0 || H.call(e, j), (q = e.onVisibleChange) === null || q === void 0 || q.call(e, j));
  }, p = function() {
    var j = e.builtinPlacements, H = e.arrowPointAtCenter, q = H === void 0 ? !1 : H, Y = e.autoAdjustOverflow, J = Y === void 0 ? !0 : Y;
    return j || Zm({
      arrowPointAtCenter: q,
      autoAdjustOverflow: J
    });
  }, h = function(j, H) {
    var q = p(), Y = Object.keys(q).find(function(re) {
      var de, Z;
      return q[re].points[0] === ((de = H.points) === null || de === void 0 ? void 0 : de[0]) && q[re].points[1] === ((Z = H.points) === null || Z === void 0 ? void 0 : Z[1]);
    });
    if (Y) {
      var J = j.getBoundingClientRect(), oe = {
        top: "50%",
        left: "50%"
      };
      /top|Bottom/.test(Y) ? oe.top = "".concat(J.height - H.offset[1], "px") : /Top|bottom/.test(Y) && (oe.top = "".concat(-H.offset[1], "px")), /left|Right/.test(Y) ? oe.left = "".concat(J.width - H.offset[0], "px") : /right|Left/.test(Y) && (oe.left = "".concat(-H.offset[0], "px")), j.style.transformOrigin = "".concat(oe.left, " ").concat(oe.top);
    }
  }, g = function() {
    var j = e.title, H = e.overlay;
    return j === 0 ? j : H || j || "";
  }, m = e.getPopupContainer, y = e.placement, b = y === void 0 ? "top" : y, x = e.mouseEnterDelay, C = x === void 0 ? 0.1 : x, E = e.mouseLeaveDelay, S = E === void 0 ? 0.1 : E, w = tO(e, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay"]), N = e.prefixCls, O = e.openClassName, _ = e.getTooltipContainer, $ = e.overlayClassName, I = e.color, F = e.overlayInnerStyle, M = e.children, V = i("tooltip", N), T = i(), R = u;
  !("open" in e) && !("visible" in e) && f() && (R = !1);
  var k = rO(Nn(M) && !dm(M) ? M : /* @__PURE__ */ c.createElement("span", null, M), V), A = k.props, U = !A.className || typeof A.className == "string" ? ne(A.className, P({}, O || "".concat(V, "-open"), !0)) : A.className, z = ne($, (n = {}, P(n, "".concat(V, "-rtl"), o === "rtl"), P(n, "".concat(V, "-").concat(I), I && ff.test(I)), n)), B = F, G = {};
  return I && !ff.test(I) && (B = K(K({}, F), {
    background: I
  }), G = {
    "--antd-arrow-background-color": I
  }), /* @__PURE__ */ c.createElement(JN, K({}, w, {
    placement: b,
    mouseEnterDelay: C,
    mouseLeaveDelay: S,
    prefixCls: V,
    overlayClassName: z,
    getTooltipContainer: m || _ || a,
    ref: t,
    builtinPlacements: p(),
    overlay: g(),
    visible: R,
    onVisibleChange: v,
    onPopupAlign: h,
    overlayInnerStyle: B,
    arrowContent: /* @__PURE__ */ c.createElement("span", {
      className: "".concat(V, "-arrow-content"),
      style: G
    }),
    motion: {
      motionName: Bm(T, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    }
  }), R ? on(k, {
    className: U
  }) : k);
});
process.env.NODE_ENV !== "production" && (eh.displayName = "Tooltip");
const th = eh;
var aO = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "ellipsis", theme: "outlined" };
const iO = aO;
var nh = function(t, n) {
  return /* @__PURE__ */ c.createElement(It, D(D({}, t), {}, {
    ref: n,
    icon: iO
  }));
};
nh.displayName = "EllipsisOutlined";
const rh = /* @__PURE__ */ c.forwardRef(nh);
var ah = /* @__PURE__ */ c.createContext(null);
function zu(e, t) {
  return e === void 0 ? null : "".concat(e, "-").concat(t);
}
function ih(e) {
  var t = c.useContext(ah);
  return zu(t, e);
}
var oO = ["children", "locked"], _n = /* @__PURE__ */ c.createContext(null);
function sO(e, t) {
  var n = D({}, e);
  return Object.keys(t).forEach(function(r) {
    var a = t[r];
    a !== void 0 && (n[r] = a);
  }), n;
}
function Ua(e) {
  var t = e.children, n = e.locked, r = We(e, oO), a = c.useContext(_n), i = pu(function() {
    return sO(a, r);
  }, [a, r], function(o, s) {
    return !n && (o[0] !== s[0] || !_u(o[1], s[1], !0));
  });
  return /* @__PURE__ */ c.createElement(_n.Provider, {
    value: i
  }, t);
}
var lO = [], oh = /* @__PURE__ */ c.createContext(null);
function Ao() {
  return c.useContext(oh);
}
var sh = /* @__PURE__ */ c.createContext(lO);
function sa(e) {
  var t = c.useContext(sh);
  return c.useMemo(function() {
    return e !== void 0 ? [].concat(pe(t), [e]) : t;
  }, [t, e]);
}
var lh = /* @__PURE__ */ c.createContext(null), ju = /* @__PURE__ */ c.createContext({});
function vf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (Iu(e)) {
    var n = e.nodeName.toLowerCase(), r = (
      // Focusable element
      ["input", "select", "textarea", "button"].includes(n) || // Editable element
      e.isContentEditable || // Anchor with href element
      n === "a" && !!e.getAttribute("href")
    ), a = e.getAttribute("tabindex"), i = Number(a), o = null;
    return a && !Number.isNaN(i) ? o = i : r && o === null && (o = 0), r && e.disabled && (o = null), o !== null && (o >= 0 || t && o < 0);
  }
  return !1;
}
function uh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = pe(e.querySelectorAll("*")).filter(function(r) {
    return vf(r, t);
  });
  return vf(e, t) && n.unshift(e), n;
}
var Il = fe.LEFT, Fl = fe.RIGHT, Ml = fe.UP, Ai = fe.DOWN, Li = fe.ENTER, ch = fe.ESC, Ea = fe.HOME, wa = fe.END, pf = [Ml, Ai, Il, Fl];
function uO(e, t, n, r) {
  var a, i, o, s, l = "prev", u = "next", d = "children", f = "parent";
  if (e === "inline" && r === Li)
    return {
      inlineTrigger: !0
    };
  var v = (a = {}, P(a, Ml, l), P(a, Ai, u), a), p = (i = {}, P(i, Il, n ? u : l), P(i, Fl, n ? l : u), P(i, Ai, d), P(i, Li, d), i), h = (o = {}, P(o, Ml, l), P(o, Ai, u), P(o, Li, d), P(o, ch, f), P(o, Il, n ? d : f), P(o, Fl, n ? f : d), o), g = {
    inline: v,
    horizontal: p,
    vertical: h,
    inlineSub: v,
    horizontalSub: h,
    verticalSub: h
  }, m = (s = g["".concat(e).concat(t ? "" : "Sub")]) === null || s === void 0 ? void 0 : s[r];
  switch (m) {
    case l:
      return {
        offset: -1,
        sibling: !0
      };
    case u:
      return {
        offset: 1,
        sibling: !0
      };
    case f:
      return {
        offset: -1,
        sibling: !1
      };
    case d:
      return {
        offset: 1,
        sibling: !1
      };
    default:
      return null;
  }
}
function cO(e) {
  for (var t = e; t; ) {
    if (t.getAttribute("data-menu-list"))
      return t;
    t = t.parentElement;
  }
  return null;
}
function dO(e, t) {
  for (var n = e || document.activeElement; n; ) {
    if (t.has(n))
      return n;
    n = n.parentElement;
  }
  return null;
}
function dh(e, t) {
  var n = uh(e, !0);
  return n.filter(function(r) {
    return t.has(r);
  });
}
function mf(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (!e)
    return null;
  var a = dh(e, t), i = a.length, o = a.findIndex(function(s) {
    return n === s;
  });
  return r < 0 ? o === -1 ? o = i - 1 : o -= 1 : r > 0 && (o += 1), o = (o + i) % i, a[o];
}
function fO(e, t, n, r, a, i, o, s, l, u) {
  var d = c.useRef(), f = c.useRef();
  f.current = t;
  var v = function() {
    mt.cancel(d.current);
  };
  return c.useEffect(function() {
    return function() {
      v();
    };
  }, []), function(p) {
    var h = p.which;
    if ([].concat(pf, [Li, ch, Ea, wa]).includes(h)) {
      var g, m, y, b = function() {
        g = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
        var V = i();
        return V.forEach(function(T) {
          var R = document.querySelector("[data-menu-id='".concat(zu(r, T), "']"));
          R && (g.add(R), y.set(R, T), m.set(T, R));
        }), g;
      };
      b();
      var x = m.get(t), C = dO(x, g), E = y.get(C), S = uO(e, o(E, !0).length === 1, n, h);
      if (!S && h !== Ea && h !== wa)
        return;
      (pf.includes(h) || [Ea, wa].includes(h)) && p.preventDefault();
      var w = function(V) {
        if (V) {
          var T = V, R = V.querySelector("a");
          R != null && R.getAttribute("href") && (T = R);
          var k = y.get(V);
          s(k), v(), d.current = mt(function() {
            f.current === k && T.focus();
          });
        }
      };
      if ([Ea, wa].includes(h) || S.sibling || !C) {
        var N;
        !C || e === "inline" ? N = a.current : N = cO(C);
        var O, _ = dh(N, g);
        h === Ea ? O = _[0] : h === wa ? O = _[_.length - 1] : O = mf(N, g, C, S.offset), w(O);
      } else if (S.inlineTrigger)
        l(E);
      else if (S.offset > 0)
        l(E, !0), v(), d.current = mt(function() {
          b();
          var M = C.getAttribute("aria-controls"), V = document.getElementById(M), T = mf(V, g);
          w(T);
        }, 5);
      else if (S.offset < 0) {
        var $ = o(E, !0), I = $[$.length - 2], F = m.get(I);
        l(I, !1), w(F);
      }
    }
    u == null || u(p);
  };
}
function vO(e) {
  Promise.resolve().then(e);
}
var Hu = "__RC_UTIL_PATH_SPLIT__", hf = function(t) {
  return t.join(Hu);
}, pO = function(t) {
  return t.split(Hu);
}, $l = "rc-menu-more";
function mO() {
  var e = c.useState({}), t = X(e, 2), n = t[1], r = De(/* @__PURE__ */ new Map()), a = De(/* @__PURE__ */ new Map()), i = c.useState([]), o = X(i, 2), s = o[0], l = o[1], u = De(0), d = De(!1), f = function() {
    d.current || n({});
  }, v = pn(function(x, C) {
    process.env.NODE_ENV !== "production" && Fe(!r.current.has(x), "Duplicated key '".concat(x, "' used in Menu by path [").concat(C.join(" > "), "]"));
    var E = hf(C);
    a.current.set(E, x), r.current.set(x, E), u.current += 1;
    var S = u.current;
    vO(function() {
      S === u.current && f();
    });
  }, []), p = pn(function(x, C) {
    var E = hf(C);
    a.current.delete(E), r.current.delete(x);
  }, []), h = pn(function(x) {
    l(x);
  }, []), g = pn(function(x, C) {
    var E = r.current.get(x) || "", S = pO(E);
    return C && s.includes(S[0]) && S.unshift($l), S;
  }, [s]), m = pn(function(x, C) {
    return x.some(function(E) {
      var S = g(E, !0);
      return S.includes(C);
    });
  }, [g]), y = function() {
    var C = pe(r.current.keys());
    return s.length && C.push($l), C;
  }, b = pn(function(x) {
    var C = "".concat(r.current.get(x)).concat(Hu), E = /* @__PURE__ */ new Set();
    return pe(a.current.keys()).forEach(function(S) {
      S.startsWith(C) && E.add(a.current.get(S));
    }), E;
  }, []);
  return c.useEffect(function() {
    return function() {
      d.current = !0;
    };
  }, []), {
    // Register
    registerPath: v,
    unregisterPath: p,
    refreshOverflowKeys: h,
    // Util
    isSubPathKey: m,
    getKeyPath: g,
    getKeys: y,
    getSubPathKeys: b
  };
}
function jr(e) {
  var t = c.useRef(e);
  t.current = e;
  var n = c.useCallback(function() {
    for (var r, a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(i));
  }, []);
  return e ? n : void 0;
}
var hO = Math.random().toFixed(5).toString().slice(2), gf = 0;
function gO(e) {
  var t = un(e, {
    value: e
  }), n = X(t, 2), r = n[0], a = n[1];
  return c.useEffect(function() {
    gf += 1;
    var i = process.env.NODE_ENV === "test" ? "test" : "".concat(hO, "-").concat(gf);
    a("rc-menu-uuid-".concat(i));
  }, []), r;
}
function fh(e, t, n, r) {
  var a = c.useContext(_n), i = a.activeKey, o = a.onActive, s = a.onInactive, l = {
    active: i === e
  };
  return t || (l.onMouseEnter = function(u) {
    n == null || n({
      key: e,
      domEvent: u
    }), o(e);
  }, l.onMouseLeave = function(u) {
    r == null || r({
      key: e,
      domEvent: u
    }), s(e);
  }), l;
}
function vh(e) {
  var t = c.useContext(_n), n = t.mode, r = t.rtl, a = t.inlineIndent;
  if (n !== "inline")
    return null;
  var i = e;
  return r ? {
    paddingRight: i * a
  } : {
    paddingLeft: i * a
  };
}
function ph(e) {
  var t = e.icon, n = e.props, r = e.children, a;
  return typeof t == "function" ? a = /* @__PURE__ */ c.createElement(t, D({}, n)) : a = t, a || r || null;
}
var yO = ["item"];
function io(e) {
  var t = e.item, n = We(e, yO);
  return Object.defineProperty(n, "item", {
    get: function() {
      return Fe(!1, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."), t;
    }
  }), n;
}
var bO = ["title", "attribute", "elementRef"], CO = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"], xO = ["active"], SO = /* @__PURE__ */ function(e) {
  Gt(n, e);
  var t = qt(n);
  function n() {
    return Kt(this, n), t.apply(this, arguments);
  }
  return Vt(n, [{
    key: "render",
    value: function() {
      var a = this.props, i = a.title, o = a.attribute, s = a.elementRef, l = We(a, bO), u = ln(l, ["eventKey", "popupClassName", "popupOffset", "onTitleClick"]);
      return Fe(!o, "`attribute` of Menu.Item is deprecated. Please pass attribute directly."), /* @__PURE__ */ c.createElement(Vn.Item, K({}, o, {
        title: typeof i == "string" ? i : void 0
      }, u, {
        ref: s
      }));
    }
  }]), n;
}(c.Component), EO = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var n, r = e.style, a = e.className, i = e.eventKey, o = e.warnKey, s = e.disabled, l = e.itemIcon, u = e.children, d = e.role, f = e.onMouseEnter, v = e.onMouseLeave, p = e.onClick, h = e.onKeyDown, g = e.onFocus, m = We(e, CO), y = ih(i), b = c.useContext(_n), x = b.prefixCls, C = b.onItemClick, E = b.disabled, S = b.overflowDisabled, w = b.itemIcon, N = b.selectedKeys, O = b.onActive, _ = c.useContext(ju), $ = _._internalRenderMenuItem, I = "".concat(x, "-item"), F = c.useRef(), M = c.useRef(), V = E || s, T = mu(t, M), R = sa(i);
  process.env.NODE_ENV !== "production" && o && Fe(!1, "MenuItem should not leave undefined `key`.");
  var k = function(re) {
    return {
      key: i,
      // Note: For legacy code is reversed which not like other antd component
      keyPath: pe(R).reverse(),
      item: F.current,
      domEvent: re
    };
  }, A = l || w, U = fh(i, V, f, v), z = U.active, B = We(U, xO), G = N.includes(i), W = vh(R.length), j = function(re) {
    if (!V) {
      var de = k(re);
      p == null || p(io(de)), C(de);
    }
  }, H = function(re) {
    if (h == null || h(re), re.which === fe.ENTER) {
      var de = k(re);
      p == null || p(io(de)), C(de);
    }
  }, q = function(re) {
    O(i), g == null || g(re);
  }, Y = {};
  e.role === "option" && (Y["aria-selected"] = G);
  var J = /* @__PURE__ */ c.createElement(SO, K({
    ref: F,
    elementRef: T,
    role: d === null ? "none" : d || "menuitem",
    tabIndex: s ? null : -1,
    "data-menu-id": S && y ? null : y
  }, m, B, Y, {
    component: "li",
    "aria-disabled": s,
    style: D(D({}, W), r),
    className: ne(I, (n = {}, P(n, "".concat(I, "-active"), z), P(n, "".concat(I, "-selected"), G), P(n, "".concat(I, "-disabled"), V), n), a),
    onClick: j,
    onKeyDown: H,
    onFocus: q
  }), u, /* @__PURE__ */ c.createElement(ph, {
    props: D(D({}, e), {}, {
      isSelected: G
    }),
    icon: A
  }));
  return $ && (J = $(J, e, {
    selected: G
  })), J;
});
function wO(e, t) {
  var n = e.eventKey, r = Ao(), a = sa(n);
  return c.useEffect(function() {
    if (r)
      return r.registerPath(n, a), function() {
        r.unregisterPath(n, a);
      };
  }, [a]), r ? null : /* @__PURE__ */ c.createElement(EO, K({}, e, {
    ref: t
  }));
}
const Lo = /* @__PURE__ */ c.forwardRef(wO);
var NO = ["className", "children"], OO = function(t, n) {
  var r = t.className, a = t.children, i = We(t, NO), o = c.useContext(_n), s = o.prefixCls, l = o.mode, u = o.rtl;
  return /* @__PURE__ */ c.createElement("ul", K({
    className: ne(s, u && "".concat(s, "-rtl"), "".concat(s, "-sub"), "".concat(s, "-").concat(l === "inline" ? "inline" : "vertical"), r),
    role: "menu"
  }, i, {
    "data-menu-list": !0,
    ref: n
  }), a);
}, Bu = /* @__PURE__ */ c.forwardRef(OO);
Bu.displayName = "SubMenuList";
var PO = ["label", "children", "key", "type"];
function Uu(e, t) {
  return yn(e).map(function(n, r) {
    if (/* @__PURE__ */ c.isValidElement(n)) {
      var a, i, o = n.key, s = (a = (i = n.props) === null || i === void 0 ? void 0 : i.eventKey) !== null && a !== void 0 ? a : o, l = s == null;
      l && (s = "tmp_key-".concat([].concat(pe(t), [r]).join("-")));
      var u = {
        key: s,
        eventKey: s
      };
      return process.env.NODE_ENV !== "production" && l && (u.warnKey = !0), /* @__PURE__ */ c.cloneElement(n, u);
    }
    return n;
  });
}
function Dl(e) {
  return (e || []).map(function(t, n) {
    if (t && Le(t) === "object") {
      var r = t, a = r.label, i = r.children, o = r.key, s = r.type, l = We(r, PO), u = o ?? "tmp-".concat(n);
      return i || s === "group" ? s === "group" ? /* @__PURE__ */ c.createElement(Vo, K({
        key: u
      }, l, {
        title: a
      }), Dl(i)) : /* @__PURE__ */ c.createElement(Ko, K({
        key: u
      }, l, {
        title: a
      }), Dl(i)) : s === "divider" ? /* @__PURE__ */ c.createElement(Wu, K({
        key: u
      }, l)) : /* @__PURE__ */ c.createElement(Lo, K({
        key: u
      }, l), a);
    }
    return null;
  }).filter(function(t) {
    return t;
  });
}
function RO(e, t, n) {
  var r = e;
  return t && (r = Dl(t)), Uu(r, n);
}
var lr = {
  adjustX: 1,
  adjustY: 1
}, kO = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: lr,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: lr,
    offset: [0, 7]
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: lr,
    offset: [-4, 0]
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: lr,
    offset: [4, 0]
  }
}, TO = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: lr,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: lr,
    offset: [0, 7]
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: lr,
    offset: [-4, 0]
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: lr,
    offset: [4, 0]
  }
};
function mh(e, t, n) {
  if (t)
    return t;
  if (n)
    return n[e] || n.other;
}
var _O = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
function IO(e) {
  var t = e.prefixCls, n = e.visible, r = e.children, a = e.popup, i = e.popupClassName, o = e.popupOffset, s = e.disabled, l = e.mode, u = e.onVisibleChange, d = c.useContext(_n), f = d.getPopupContainer, v = d.rtl, p = d.subMenuOpenDelay, h = d.subMenuCloseDelay, g = d.builtinPlacements, m = d.triggerSubMenuAction, y = d.forceSubMenuRender, b = d.rootClassName, x = d.motion, C = d.defaultMotions, E = c.useState(!1), S = X(E, 2), w = S[0], N = S[1], O = D(v ? D({}, TO) : D({}, kO), g), _ = _O[l], $ = mh(l, x, C), I = c.useRef($);
  l !== "inline" && (I.current = $);
  var F = D(D({}, I.current), {}, {
    leavedClassName: "".concat(t, "-hidden"),
    removeOnLeave: !1,
    motionAppear: !0
  }), M = c.useRef();
  return c.useEffect(function() {
    return M.current = mt(function() {
      N(n);
    }), function() {
      mt.cancel(M.current);
    };
  }, [n]), /* @__PURE__ */ c.createElement(Io, {
    prefixCls: t,
    popupClassName: ne("".concat(t, "-popup"), P({}, "".concat(t, "-rtl"), v), i, b),
    stretch: l === "horizontal" ? "minWidth" : null,
    getPopupContainer: f,
    builtinPlacements: O,
    popupPlacement: _,
    popupVisible: w,
    popup: a,
    popupAlign: o && {
      offset: o
    },
    action: s ? [] : [m],
    mouseEnterDelay: p,
    mouseLeaveDelay: h,
    onPopupVisibleChange: u,
    forceRender: y,
    popupMotion: F
  }, r);
}
function FO(e) {
  var t = e.id, n = e.open, r = e.keyPath, a = e.children, i = "inline", o = c.useContext(_n), s = o.prefixCls, l = o.forceSubMenuRender, u = o.motion, d = o.defaultMotions, f = o.mode, v = c.useRef(!1);
  v.current = f === i;
  var p = c.useState(!v.current), h = X(p, 2), g = h[0], m = h[1], y = v.current ? n : !1;
  c.useEffect(function() {
    v.current && m(!1);
  }, [f]);
  var b = D({}, mh(i, u, d));
  r.length > 1 && (b.motionAppear = !1);
  var x = b.onVisibleChanged;
  return b.onVisibleChanged = function(C) {
    return !v.current && !C && m(!0), x == null ? void 0 : x(C);
  }, g ? null : /* @__PURE__ */ c.createElement(Ua, {
    mode: i,
    locked: !v.current
  }, /* @__PURE__ */ c.createElement(Pr, K({
    visible: y
  }, b, {
    forceRender: l,
    removeOnLeave: !1,
    leavedClassName: "".concat(s, "-hidden")
  }), function(C) {
    var E = C.className, S = C.style;
    return /* @__PURE__ */ c.createElement(Bu, {
      id: t,
      className: E,
      style: S
    }, a);
  }));
}
var MO = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"], $O = ["active"], DO = function(t) {
  var n, r = t.style, a = t.className, i = t.title, o = t.eventKey, s = t.warnKey, l = t.disabled, u = t.internalPopupClose, d = t.children, f = t.itemIcon, v = t.expandIcon, p = t.popupClassName, h = t.popupOffset, g = t.onClick, m = t.onMouseEnter, y = t.onMouseLeave, b = t.onTitleClick, x = t.onTitleMouseEnter, C = t.onTitleMouseLeave, E = We(t, MO), S = ih(o), w = c.useContext(_n), N = w.prefixCls, O = w.mode, _ = w.openKeys, $ = w.disabled, I = w.overflowDisabled, F = w.activeKey, M = w.selectedKeys, V = w.itemIcon, T = w.expandIcon, R = w.onItemClick, k = w.onOpenChange, A = w.onActive, U = c.useContext(ju), z = U._internalRenderSubMenuItem, B = c.useContext(lh), G = B.isSubPathKey, W = sa(), j = "".concat(N, "-submenu"), H = $ || l, q = c.useRef(), Y = c.useRef();
  process.env.NODE_ENV !== "production" && s && Fe(!1, "SubMenu should not leave undefined `key`.");
  var J = f || V, oe = v || T, re = _.includes(o), de = !I && re, Z = G(M, o), Q = fh(o, H, x, C), ce = Q.active, Ce = We(Q, $O), we = c.useState(!1), ke = X(we, 2), ve = ke[0], ae = ke[1], ie = function(nt) {
    H || ae(nt);
  }, ee = function(nt) {
    ie(!0), m == null || m({
      key: o,
      domEvent: nt
    });
  }, te = function(nt) {
    ie(!1), y == null || y({
      key: o,
      domEvent: nt
    });
  }, xe = c.useMemo(function() {
    return ce || (O !== "inline" ? ve || G([F], o) : !1);
  }, [O, ce, F, ve, o, G]), Me = vh(W.length), Te = function(nt) {
    H || (b == null || b({
      key: o,
      domEvent: nt
    }), O === "inline" && k(o, !re));
  }, Ve = jr(function(ft) {
    g == null || g(io(ft)), R(ft);
  }), Ae = function(nt) {
    O !== "inline" && k(o, nt);
  }, Ne = function() {
    A(o);
  }, $e = S && "".concat(S, "-popup"), je = /* @__PURE__ */ c.createElement("div", K({
    role: "menuitem",
    style: Me,
    className: "".concat(j, "-title"),
    tabIndex: H ? null : -1,
    ref: q,
    title: typeof i == "string" ? i : null,
    "data-menu-id": I && S ? null : S,
    "aria-expanded": de,
    "aria-haspopup": !0,
    "aria-controls": $e,
    "aria-disabled": H,
    onClick: Te,
    onFocus: Ne
  }, Ce), i, /* @__PURE__ */ c.createElement(ph, {
    icon: O !== "horizontal" ? oe : null,
    props: D(D({}, t), {}, {
      isOpen: de,
      // [Legacy] Not sure why need this mark
      isSubMenu: !0
    })
  }, /* @__PURE__ */ c.createElement("i", {
    className: "".concat(j, "-arrow")
  }))), lt = c.useRef(O);
  if (O !== "inline" && W.length > 1 ? lt.current = "vertical" : lt.current = O, !I) {
    var tt = lt.current;
    je = /* @__PURE__ */ c.createElement(IO, {
      mode: tt,
      prefixCls: j,
      visible: !u && de && O !== "inline",
      popupClassName: p,
      popupOffset: h,
      popup: /* @__PURE__ */ c.createElement(
        Ua,
        {
          mode: tt === "horizontal" ? "vertical" : tt
        },
        /* @__PURE__ */ c.createElement(Bu, {
          id: $e,
          ref: Y
        }, d)
      ),
      disabled: H,
      onVisibleChange: Ae
    }, je);
  }
  var ot = /* @__PURE__ */ c.createElement(Vn.Item, K({
    role: "none"
  }, E, {
    component: "li",
    style: r,
    className: ne(j, "".concat(j, "-").concat(O), a, (n = {}, P(n, "".concat(j, "-open"), de), P(n, "".concat(j, "-active"), xe), P(n, "".concat(j, "-selected"), Z), P(n, "".concat(j, "-disabled"), H), n)),
    onMouseEnter: ee,
    onMouseLeave: te
  }), je, !I && /* @__PURE__ */ c.createElement(FO, {
    id: $e,
    open: de,
    keyPath: W
  }, d));
  return z && (ot = z(ot, t, {
    selected: Z,
    active: xe,
    open: de,
    disabled: H
  })), /* @__PURE__ */ c.createElement(Ua, {
    onItemClick: Ve,
    mode: O === "horizontal" ? "vertical" : O,
    itemIcon: J,
    expandIcon: oe
  }, ot);
};
function Ko(e) {
  var t = e.eventKey, n = e.children, r = sa(t), a = Uu(n, r), i = Ao();
  c.useEffect(function() {
    if (i)
      return i.registerPath(t, r), function() {
        i.unregisterPath(t, r);
      };
  }, [r]);
  var o;
  return i ? o = a : o = /* @__PURE__ */ c.createElement(DO, e, a), /* @__PURE__ */ c.createElement(sh.Provider, {
    value: r
  }, o);
}
var AO = ["prefixCls", "rootClassName", "style", "className", "tabIndex", "items", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName", "_internalRenderMenuItem", "_internalRenderSubMenuItem"], Ar = [], LO = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var n, r, a = e, i = a.prefixCls, o = i === void 0 ? "rc-menu" : i, s = a.rootClassName, l = a.style, u = a.className, d = a.tabIndex, f = d === void 0 ? 0 : d, v = a.items, p = a.children, h = a.direction, g = a.id, m = a.mode, y = m === void 0 ? "vertical" : m, b = a.inlineCollapsed, x = a.disabled, C = a.disabledOverflow, E = a.subMenuOpenDelay, S = E === void 0 ? 0.1 : E, w = a.subMenuCloseDelay, N = w === void 0 ? 0.1 : w, O = a.forceSubMenuRender, _ = a.defaultOpenKeys, $ = a.openKeys, I = a.activeKey, F = a.defaultActiveFirst, M = a.selectable, V = M === void 0 ? !0 : M, T = a.multiple, R = T === void 0 ? !1 : T, k = a.defaultSelectedKeys, A = a.selectedKeys, U = a.onSelect, z = a.onDeselect, B = a.inlineIndent, G = B === void 0 ? 24 : B, W = a.motion, j = a.defaultMotions, H = a.triggerSubMenuAction, q = H === void 0 ? "hover" : H, Y = a.builtinPlacements, J = a.itemIcon, oe = a.expandIcon, re = a.overflowedIndicator, de = re === void 0 ? "..." : re, Z = a.overflowedIndicatorPopupClassName, Q = a.getPopupContainer, ce = a.onClick, Ce = a.onOpenChange, we = a.onKeyDown, ke = a.openAnimation, ve = a.openTransitionName, ae = a._internalRenderMenuItem, ie = a._internalRenderSubMenuItem, ee = We(a, AO), te = c.useMemo(function() {
    return RO(p, v, Ar);
  }, [p, v]), xe = c.useState(!1), Me = X(xe, 2), Te = Me[0], Ve = Me[1], Ae = c.useRef(), Ne = gO(g), $e = h === "rtl";
  process.env.NODE_ENV !== "production" && Fe(!ke && !ve, "`openAnimation` and `openTransitionName` is removed. Please use `motion` or `defaultMotion` instead.");
  var je = un(_, {
    value: $,
    postState: function(et) {
      return et || Ar;
    }
  }), lt = X(je, 2), tt = lt[0], ot = lt[1], ft = function(et) {
    var ct = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    function wt() {
      ot(et), Ce == null || Ce(et);
    }
    ct ? Ws(wt) : wt();
  }, nt = c.useState(tt), Et = X(nt, 2), at = Et[0], Ft = Et[1], Mt = c.useRef(!1), rt = c.useMemo(function() {
    return (y === "inline" || y === "vertical") && b ? ["vertical", b] : [y, !1];
  }, [y, b]), Ot = X(rt, 2), vt = Ot[0], Ze = Ot[1], Ke = vt === "inline", Oe = c.useState(vt), se = X(Oe, 2), ue = se[0], me = se[1], Se = c.useState(Ze), _e = X(Se, 2), Je = _e[0], Ct = _e[1];
  c.useEffect(function() {
    me(vt), Ct(Ze), Mt.current && (Ke ? ot(at) : ft(Ar));
  }, [vt, Ze]);
  var Rt = c.useState(0), At = X(Rt, 2), Qe = At[0], L = At[1], le = Qe >= te.length - 1 || ue !== "horizontal" || C;
  c.useEffect(function() {
    Ke && Ft(tt);
  }, [tt]), c.useEffect(function() {
    return Mt.current = !0, function() {
      Mt.current = !1;
    };
  }, []);
  var he = mO(), Pe = he.registerPath, ze = he.unregisterPath, ge = he.refreshOverflowKeys, ye = he.isSubPathKey, Ee = he.getKeyPath, Ye = he.getKeys, Re = he.getSubPathKeys, Ie = c.useMemo(function() {
    return {
      registerPath: Pe,
      unregisterPath: ze
    };
  }, [Pe, ze]), Be = c.useMemo(function() {
    return {
      isSubPathKey: ye
    };
  }, [ye]);
  c.useEffect(function() {
    ge(le ? Ar : te.slice(Qe + 1).map(function(pt) {
      return pt.key;
    }));
  }, [Qe, le]);
  var Pt = un(I || F && ((n = te[0]) === null || n === void 0 ? void 0 : n.key), {
    value: I
  }), ut = X(Pt, 2), xt = ut[0], kt = ut[1], Fn = jr(function(pt) {
    kt(pt);
  }), Un = jr(function() {
    kt(void 0);
  });
  ho(t, function() {
    return {
      list: Ae.current,
      focus: function(et) {
        var ct, wt = xt ?? ((ct = te.find(function(ns) {
          return !ns.props.disabled;
        })) === null || ct === void 0 ? void 0 : ct.key);
        if (wt) {
          var Jt, Gn, pr;
          (Jt = Ae.current) === null || Jt === void 0 || (Gn = Jt.querySelector("li[data-menu-id='".concat(zu(Ne, wt), "']"))) === null || Gn === void 0 || (pr = Gn.focus) === null || pr === void 0 || pr.call(Gn, et);
        }
      }
    };
  });
  var vr = un(k || [], {
    value: A,
    // Legacy convert key to array
    postState: function(et) {
      return Array.isArray(et) ? et : et == null ? Ar : [et];
    }
  }), Tr = X(vr, 2), Wn = Tr[0], pa = Tr[1], _r = function(et) {
    if (V) {
      var ct = et.key, wt = Wn.includes(ct), Jt;
      R ? wt ? Jt = Wn.filter(function(pr) {
        return pr !== ct;
      }) : Jt = [].concat(pe(Wn), [ct]) : Jt = [ct], pa(Jt);
      var Gn = D(D({}, et), {}, {
        selectedKeys: Jt
      });
      wt ? z == null || z(Gn) : U == null || U(Gn);
    }
    !R && tt.length && ue !== "inline" && ft(Ar);
  }, nr = jr(function(pt) {
    ce == null || ce(io(pt)), _r(pt);
  }), Ge = jr(function(pt, et) {
    var ct = tt.filter(function(Jt) {
      return Jt !== pt;
    });
    if (et)
      ct.push(pt);
    else if (ue !== "inline") {
      var wt = Re(pt);
      ct = ct.filter(function(Jt) {
        return !wt.has(Jt);
      });
    }
    _u(tt, ct, !0) || ft(ct, !0);
  }), He = jr(Q), Lt = function(et, ct) {
    var wt = ct ?? !tt.includes(et);
    Ge(et, wt);
  }, Yt = fO(ue, xt, $e, Ne, Ae, Ye, Ee, kt, Lt, we);
  c.useEffect(function() {
    Ve(!0);
  }, []);
  var Tt = c.useMemo(function() {
    return {
      _internalRenderMenuItem: ae,
      _internalRenderSubMenuItem: ie
    };
  }, [ae, ie]), Xt = ue !== "horizontal" || C ? te : (
    // Need wrap for overflow dropdown that do not response for open
    te.map(function(pt, et) {
      return (
        // Always wrap provider to avoid sub node re-mount
        /* @__PURE__ */ c.createElement(Ua, {
          key: pt.key,
          overflowDisabled: et > Qe
        }, pt)
      );
    })
  ), tn = /* @__PURE__ */ c.createElement(Vn, K({
    id: g,
    ref: Ae,
    prefixCls: "".concat(o, "-overflow"),
    component: "ul",
    itemComponent: Lo,
    className: ne(o, "".concat(o, "-root"), "".concat(o, "-").concat(ue), u, (r = {}, P(r, "".concat(o, "-inline-collapsed"), Je), P(r, "".concat(o, "-rtl"), $e), r), s),
    dir: h,
    style: l,
    role: "menu",
    tabIndex: f,
    data: Xt,
    renderRawItem: function(et) {
      return et;
    },
    renderRawRest: function(et) {
      var ct = et.length, wt = ct ? te.slice(-ct) : null;
      return /* @__PURE__ */ c.createElement(Ko, {
        eventKey: $l,
        title: de,
        disabled: le,
        internalPopupClose: ct === 0,
        popupClassName: Z
      }, wt);
    },
    maxCount: ue !== "horizontal" || C ? Vn.INVALIDATE : Vn.RESPONSIVE,
    ssr: "full",
    "data-menu-list": !0,
    onVisibleChange: function(et) {
      L(et);
    },
    onKeyDown: Yt
  }, ee));
  return /* @__PURE__ */ c.createElement(ju.Provider, {
    value: Tt
  }, /* @__PURE__ */ c.createElement(ah.Provider, {
    value: Ne
  }, /* @__PURE__ */ c.createElement(Ua, {
    prefixCls: o,
    rootClassName: s,
    mode: ue,
    openKeys: tt,
    rtl: $e,
    disabled: x,
    motion: Te ? W : null,
    defaultMotions: Te ? j : null,
    activeKey: xt,
    onActive: Fn,
    onInactive: Un,
    selectedKeys: Wn,
    inlineIndent: G,
    subMenuOpenDelay: S,
    subMenuCloseDelay: N,
    forceSubMenuRender: O,
    builtinPlacements: Y,
    triggerSubMenuAction: q,
    getPopupContainer: He,
    itemIcon: J,
    expandIcon: oe,
    onItemClick: nr,
    onOpenChange: Ge
  }, /* @__PURE__ */ c.createElement(lh.Provider, {
    value: Be
  }, tn), /* @__PURE__ */ c.createElement("div", {
    style: {
      display: "none"
    },
    "aria-hidden": !0
  }, /* @__PURE__ */ c.createElement(oh.Provider, {
    value: Ie
  }, te)))));
}), KO = ["className", "title", "eventKey", "children"], VO = ["children"], zO = function(t) {
  var n = t.className, r = t.title;
  t.eventKey;
  var a = t.children, i = We(t, KO), o = c.useContext(_n), s = o.prefixCls, l = "".concat(s, "-item-group");
  return /* @__PURE__ */ c.createElement("li", K({
    role: "presentation"
  }, i, {
    onClick: function(d) {
      return d.stopPropagation();
    },
    className: ne(l, n)
  }), /* @__PURE__ */ c.createElement("div", {
    role: "presentation",
    className: "".concat(l, "-title"),
    title: typeof r == "string" ? r : void 0
  }, r), /* @__PURE__ */ c.createElement("ul", {
    role: "group",
    className: "".concat(l, "-list")
  }, a));
};
function Vo(e) {
  var t = e.children, n = We(e, VO), r = sa(n.eventKey), a = Uu(t, r), i = Ao();
  return i ? a : /* @__PURE__ */ c.createElement(zO, ln(n, ["warnKey"]), a);
}
function Wu(e) {
  var t = e.className, n = e.style, r = c.useContext(_n), a = r.prefixCls, i = Ao();
  return i ? null : /* @__PURE__ */ c.createElement("li", {
    className: ne("".concat(a, "-item-divider"), t),
    style: n
  });
}
var oi = LO;
oi.Item = Lo;
oi.SubMenu = Ko;
oi.ItemGroup = Vo;
oi.Divider = Wu;
var jO = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "bars", theme: "outlined" };
const HO = jO;
var hh = function(t, n) {
  return /* @__PURE__ */ c.createElement(It, D(D({}, t), {}, {
    ref: n,
    icon: HO
  }));
};
hh.displayName = "BarsOutlined";
const BO = /* @__PURE__ */ c.forwardRef(hh);
var UO = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, name: "left", theme: "outlined" };
const WO = UO;
var gh = function(t, n) {
  return /* @__PURE__ */ c.createElement(It, D(D({}, t), {}, {
    ref: n,
    icon: WO
  }));
};
gh.displayName = "LeftOutlined";
const Wa = /* @__PURE__ */ c.forwardRef(gh);
var GO = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" };
const qO = GO;
var yh = function(t, n) {
  return /* @__PURE__ */ c.createElement(It, D(D({}, t), {}, {
    ref: n,
    icon: qO
  }));
};
yh.displayName = "RightOutlined";
const ea = /* @__PURE__ */ c.forwardRef(yh);
var YO = function(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
};
const XO = YO;
var bh = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, Ch = /* @__PURE__ */ c.createContext({
  siderHook: {
    addSider: function() {
      return null;
    },
    removeSider: function() {
      return null;
    }
  }
});
function zo(e) {
  var t = e.suffixCls, n = e.tagName, r = e.displayName;
  return function(a) {
    var i = /* @__PURE__ */ c.forwardRef(function(o, s) {
      var l = c.useContext(st), u = l.getPrefixCls, d = o.prefixCls, f = u(t, d);
      return /* @__PURE__ */ c.createElement(a, K({
        ref: s,
        prefixCls: f,
        tagName: n
      }, o));
    });
    return process.env.NODE_ENV !== "production" && (i.displayName = r), i;
  };
}
var Gu = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.className, a = e.children, i = e.tagName, o = bh(e, ["prefixCls", "className", "children", "tagName"]), s = ne(n, r);
  return /* @__PURE__ */ c.createElement(i, K(K({
    className: s
  }, o), {
    ref: t
  }), a);
}), JO = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var n, r = c.useContext(st), a = r.direction, i = c.useState([]), o = X(i, 2), s = o[0], l = o[1], u = e.prefixCls, d = e.className, f = e.children, v = e.hasSider, p = e.tagName, h = bh(e, ["prefixCls", "className", "children", "hasSider", "tagName"]), g = ne(u, (n = {}, P(n, "".concat(u, "-has-sider"), typeof v == "boolean" ? v : s.length > 0), P(n, "".concat(u, "-rtl"), a === "rtl"), n), d), m = c.useMemo(function() {
    return {
      siderHook: {
        addSider: function(b) {
          l(function(x) {
            return [].concat(pe(x), [b]);
          });
        },
        removeSider: function(b) {
          l(function(x) {
            return x.filter(function(C) {
              return C !== b;
            });
          });
        }
      }
    };
  }, []);
  return /* @__PURE__ */ c.createElement(Ch.Provider, {
    value: m
  }, /* @__PURE__ */ c.createElement(p, K({
    ref: t,
    className: g
  }, h), f));
});
zo({
  suffixCls: "layout",
  tagName: "section",
  displayName: "Layout"
})(JO);
zo({
  suffixCls: "layout-header",
  tagName: "header",
  displayName: "Header"
})(Gu);
zo({
  suffixCls: "layout-footer",
  tagName: "footer",
  displayName: "Footer"
})(Gu);
zo({
  suffixCls: "layout-content",
  tagName: "main",
  displayName: "Content"
})(Gu);
var QO = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, yf = {
  xs: "479.98px",
  sm: "575.98px",
  md: "767.98px",
  lg: "991.98px",
  xl: "1199.98px",
  xxl: "1599.98px"
}, qu = /* @__PURE__ */ c.createContext({}), ZO = /* @__PURE__ */ function() {
  var e = 0;
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return e += 1, "".concat(t).concat(e);
  };
}(), eP = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.className, a = e.trigger, i = e.children, o = e.defaultCollapsed, s = o === void 0 ? !1 : o, l = e.theme, u = l === void 0 ? "dark" : l, d = e.style, f = d === void 0 ? {} : d, v = e.collapsible, p = v === void 0 ? !1 : v, h = e.reverseArrow, g = h === void 0 ? !1 : h, m = e.width, y = m === void 0 ? 200 : m, b = e.collapsedWidth, x = b === void 0 ? 80 : b, C = e.zeroWidthTriggerStyle, E = e.breakpoint, S = e.onCollapse, w = e.onBreakpoint, N = QO(e, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]), O = en(Ch), _ = O.siderHook, $ = Ut("collapsed" in N ? N.collapsed : s), I = X($, 2), F = I[0], M = I[1], V = Ut(!1), T = X(V, 2), R = T[0], k = T[1];
  Dt(function() {
    "collapsed" in N && M(N.collapsed);
  }, [N.collapsed]);
  var A = function(q, Y) {
    "collapsed" in N || M(q), S == null || S(q, Y);
  }, U = De();
  U.current = function(H) {
    k(H.matches), w == null || w(H.matches), F !== H.matches && A(H.matches, "responsive");
  }, Dt(function() {
    function H(oe) {
      return U.current(oe);
    }
    var q;
    if (typeof window < "u") {
      var Y = window, J = Y.matchMedia;
      if (J && E && E in yf) {
        q = J("(max-width: ".concat(yf[E], ")"));
        try {
          q.addEventListener("change", H);
        } catch {
          q.addListener(H);
        }
        H(q);
      }
    }
    return function() {
      try {
        q == null || q.removeEventListener("change", H);
      } catch {
        q == null || q.removeListener(H);
      }
    };
  }, [E]), Dt(function() {
    var H = ZO("ant-sider-");
    return _.addSider(H), function() {
      return _.removeSider(H);
    };
  }, []);
  var z = function() {
    A(!F, "clickTrigger");
  }, B = en(st), G = B.getPrefixCls, W = function() {
    var q, Y = G("layout-sider", n), J = ln(N, ["collapsed"]), oe = F ? x : y, re = XO(oe) ? "".concat(oe, "px") : String(oe), de = parseFloat(String(x || 0)) === 0 ? /* @__PURE__ */ c.createElement("span", {
      onClick: z,
      className: ne("".concat(Y, "-zero-width-trigger"), "".concat(Y, "-zero-width-trigger-").concat(g ? "right" : "left")),
      style: C
    }, a || /* @__PURE__ */ c.createElement(BO, null)) : null, Z = {
      expanded: g ? /* @__PURE__ */ c.createElement(ea, null) : /* @__PURE__ */ c.createElement(Wa, null),
      collapsed: g ? /* @__PURE__ */ c.createElement(Wa, null) : /* @__PURE__ */ c.createElement(ea, null)
    }, Q = F ? "collapsed" : "expanded", ce = Z[Q], Ce = a !== null ? de || /* @__PURE__ */ c.createElement("div", {
      className: "".concat(Y, "-trigger"),
      onClick: z,
      style: {
        width: re
      }
    }, a || ce) : null, we = K(K({}, f), {
      flex: "0 0 ".concat(re),
      maxWidth: re,
      minWidth: re,
      width: re
    }), ke = ne(Y, "".concat(Y, "-").concat(u), (q = {}, P(q, "".concat(Y, "-collapsed"), !!F), P(q, "".concat(Y, "-has-trigger"), p && a !== null && !de), P(q, "".concat(Y, "-below"), !!R), P(q, "".concat(Y, "-zero-width"), parseFloat(re) === 0), q), r);
    return /* @__PURE__ */ c.createElement("aside", K({
      className: ke
    }, J, {
      style: we,
      ref: t
    }), /* @__PURE__ */ c.createElement("div", {
      className: "".concat(Y, "-children")
    }, i), p || R && de ? Ce : null);
  }, j = c.useMemo(function() {
    return {
      siderCollapsed: F
    };
  }, [F]);
  return /* @__PURE__ */ c.createElement(qu.Provider, {
    value: j
  }, W());
});
process.env.NODE_ENV !== "production" && (eP.displayName = "Sider");
var tP = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, nP = function(t) {
  var n = t.prefixCls, r = t.className, a = t.dashed, i = tP(t, ["prefixCls", "className", "dashed"]), o = c.useContext(st), s = o.getPrefixCls, l = s("menu", n), u = ne(P({}, "".concat(l, "-item-divider-dashed"), !!a), r);
  return /* @__PURE__ */ c.createElement(Wu, K({
    className: u
  }, i));
};
const xh = nP;
var rP = /* @__PURE__ */ Ga({
  prefixCls: "",
  firstLevel: !0,
  inlineCollapsed: !1
});
const oo = rP;
var aP = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, Yu = /* @__PURE__ */ function(e) {
  Gt(n, e);
  var t = qt(n);
  function n() {
    var r;
    return Kt(this, n), r = t.apply(this, arguments), r.renderItem = function(a) {
      var i, o = a.siderCollapsed, s, l = r.context, u = l.prefixCls, d = l.firstLevel, f = l.inlineCollapsed, v = l.direction, p = l.disableMenuItemTitleTooltip, h = r.props, g = h.className, m = h.children, y = r.props, b = y.title, x = y.icon, C = y.danger, E = aP(y, ["title", "icon", "danger"]), S = b;
      typeof b > "u" ? S = d ? m : "" : b === !1 && (S = "");
      var w = {
        title: S
      };
      !o && !f && (w.title = null, w.open = !1);
      var N = yn(m).length, O = /* @__PURE__ */ c.createElement(Lo, K({}, E, {
        className: ne((i = {}, P(i, "".concat(u, "-item-danger"), C), P(i, "".concat(u, "-item-only-child"), (x ? N + 1 : N) === 1), i), g),
        title: typeof b == "string" ? b : void 0
      }), on(x, {
        className: ne(Nn(x) ? (s = x.props) === null || s === void 0 ? void 0 : s.className : "", "".concat(u, "-item-icon"))
      }), r.renderItemChildren(f));
      return p || (O = /* @__PURE__ */ c.createElement(th, K({}, w, {
        placement: v === "rtl" ? "left" : "right",
        overlayClassName: "".concat(u, "-inline-collapsed-tooltip")
      }), O)), O;
    }, r;
  }
  return Vt(n, [{
    key: "renderItemChildren",
    value: function(a) {
      var i = this.context, o = i.prefixCls, s = i.firstLevel, l = this.props, u = l.icon, d = l.children, f = /* @__PURE__ */ c.createElement("span", {
        className: "".concat(o, "-title-content")
      }, d);
      return (!u || Nn(d) && d.type === "span") && d && a && s && typeof d == "string" ? /* @__PURE__ */ c.createElement("div", {
        className: "".concat(o, "-inline-collapsed-noicon")
      }, d.charAt(0)) : f;
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ c.createElement(qu.Consumer, null, this.renderItem);
    }
  }]), n;
}(c.Component);
Yu.contextType = oo;
function Sh(e) {
  var t, n = e.popupClassName, r = e.icon, a = e.title, i = e.theme, o = c.useContext(oo), s = o.prefixCls, l = o.inlineCollapsed, u = o.antdMenuTheme, d = sa(), f;
  if (!r)
    f = l && !d.length && a && typeof a == "string" ? /* @__PURE__ */ c.createElement("div", {
      className: "".concat(s, "-inline-collapsed-noicon")
    }, a.charAt(0)) : /* @__PURE__ */ c.createElement("span", {
      className: "".concat(s, "-title-content")
    }, a);
  else {
    var v = Nn(a) && a.type === "span";
    f = /* @__PURE__ */ c.createElement(c.Fragment, null, on(r, {
      className: ne(Nn(r) ? (t = r.props) === null || t === void 0 ? void 0 : t.className : "", "".concat(s, "-item-icon"))
    }), v ? a : /* @__PURE__ */ c.createElement("span", {
      className: "".concat(s, "-title-content")
    }, a));
  }
  var p = c.useMemo(function() {
    return K(K({}, o), {
      firstLevel: !1
    });
  }, [o]);
  return /* @__PURE__ */ c.createElement(oo.Provider, {
    value: p
  }, /* @__PURE__ */ c.createElement(Ko, K({}, ln(e, ["icon"]), {
    title: f,
    popupClassName: ne(s, "".concat(s, "-").concat(i || u), n)
  })));
}
var iP = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function Al(e) {
  return (e || []).map(function(t, n) {
    if (t && Le(t) === "object") {
      var r = t, a = r.label, i = r.children, o = r.key, s = r.type, l = iP(r, ["label", "children", "key", "type"]), u = o ?? "tmp-".concat(n);
      return i || s === "group" ? s === "group" ? /* @__PURE__ */ c.createElement(Vo, K({
        key: u
      }, l, {
        title: a
      }), Al(i)) : /* @__PURE__ */ c.createElement(Sh, K({
        key: u
      }, l, {
        title: a
      }), Al(i)) : s === "divider" ? /* @__PURE__ */ c.createElement(xh, K({
        key: u
      }, l)) : /* @__PURE__ */ c.createElement(Yu, K({
        key: u
      }, l), a);
    }
    return null;
  }).filter(function(t) {
    return t;
  });
}
function oP(e) {
  return c.useMemo(function() {
    return e && Al(e);
  }, [e]);
}
var sP = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, so = /* @__PURE__ */ c.createContext(null), Eh = function(t) {
  var n = t.children, r = sP(t, ["children"]), a = c.useContext(so), i = c.useMemo(function() {
    return K(K({}, a), r);
  }, [
    a,
    r.prefixCls,
    // restProps.expandIcon, Not mark as deps since this is a ReactNode
    r.mode,
    r.selectable
    // restProps.validator, Not mark as deps since this is a function
  ]);
  return /* @__PURE__ */ c.createElement(so.Provider, {
    value: i
  }, n);
}, lP = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, uP = /* @__PURE__ */ aa(function(e, t) {
  var n, r = c.useContext(so) || {}, a = c.useContext(st), i = a.getPrefixCls, o = a.getPopupContainer, s = a.direction, l = i(), u = e.prefixCls, d = e.className, f = e.theme, v = f === void 0 ? "light" : f, p = e.expandIcon, h = e._internalDisableMenuItemTitleTooltip, g = e.inlineCollapsed, m = e.siderCollapsed, y = e.items, b = e.children, x = e.mode, C = e.selectable, E = e.onClick, S = lP(e, ["prefixCls", "className", "theme", "expandIcon", "_internalDisableMenuItemTitleTooltip", "inlineCollapsed", "siderCollapsed", "items", "children", "mode", "selectable", "onClick"]), w = ln(S, ["collapsedWidth"]), N = oP(y) || b;
  process.env.NODE_ENV !== "production" && Nt(!("inlineCollapsed" in e && x !== "inline"), "Menu", "`inlineCollapsed` should only be used when `mode` is inline."), process.env.NODE_ENV !== "production" && Nt(!(e.siderCollapsed !== void 0 && "inlineCollapsed" in e), "Menu", "`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead."), process.env.NODE_ENV !== "production" && Nt("items" in e && !b, "Menu", "`children` will be removed in next major version. Please use `items` instead."), (n = r.validator) === null || n === void 0 || n.call(r, {
    mode: x
  });
  var O = cr(function() {
    var k;
    E == null || E.apply(void 0, arguments), (k = r == null ? void 0 : r.onClick) === null || k === void 0 || k.call(r);
  }), _ = r.mode || x, $ = C ?? r.selectable, I = c.useMemo(function() {
    return m !== void 0 ? m : g;
  }, [g, m]), F = {
    horizontal: {
      motionName: "".concat(l, "-slide-up")
    },
    inline: Hm,
    other: {
      motionName: "".concat(l, "-zoom-big")
    }
  }, M = i("menu", u || r.prefixCls), V = ne("".concat(M, "-").concat(v), d), T;
  typeof p == "function" ? T = p : T = on(p || r.expandIcon, {
    className: "".concat(M, "-submenu-expand-icon")
  });
  var R = c.useMemo(function() {
    return {
      prefixCls: M,
      inlineCollapsed: I || !1,
      antdMenuTheme: v,
      direction: s,
      firstLevel: !0,
      disableMenuItemTitleTooltip: h
    };
  }, [M, I, v, s, h]);
  return /* @__PURE__ */ c.createElement(so.Provider, {
    value: null
  }, /* @__PURE__ */ c.createElement(oo.Provider, {
    value: R
  }, /* @__PURE__ */ c.createElement(oi, K({
    getPopupContainer: o,
    overflowedIndicator: /* @__PURE__ */ c.createElement(rh, null),
    overflowedIndicatorPopupClassName: "".concat(M, "-").concat(v),
    mode: _,
    selectable: $,
    onClick: O
  }, w, {
    inlineCollapsed: I,
    className: V,
    prefixCls: M,
    direction: s,
    defaultMotions: F,
    expandIcon: T,
    ref: t
  }), N)));
}), si = /* @__PURE__ */ function(e) {
  Gt(n, e);
  var t = qt(n);
  function n() {
    var r;
    return Kt(this, n), r = t.apply(this, arguments), r.focus = function(a) {
      var i;
      (i = r.menu) === null || i === void 0 || i.focus(a);
    }, r;
  }
  return Vt(n, [{
    key: "render",
    value: function() {
      var a = this;
      return /* @__PURE__ */ c.createElement(qu.Consumer, null, function(i) {
        return /* @__PURE__ */ c.createElement(uP, K({
          ref: function(s) {
            a.menu = s;
          }
        }, a.props, i));
      });
    }
  }]), n;
}(c.Component);
si.Divider = xh;
si.Item = Yu;
si.SubMenu = Sh;
si.ItemGroup = Vo;
const wh = si;
var Lr = {
  adjustX: 1,
  adjustY: 1
}, Kr = [0, 0], cP = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: Lr,
    offset: [0, -4],
    targetOffset: Kr
  },
  topCenter: {
    points: ["bc", "tc"],
    overflow: Lr,
    offset: [0, -4],
    targetOffset: Kr
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Lr,
    offset: [0, -4],
    targetOffset: Kr
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Lr,
    offset: [0, 4],
    targetOffset: Kr
  },
  bottomCenter: {
    points: ["tc", "bc"],
    overflow: Lr,
    offset: [0, 4],
    targetOffset: Kr
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Lr,
    offset: [0, 4],
    targetOffset: Kr
  }
}, dP = fe.ESC, fP = fe.TAB;
function vP(e) {
  var t = e.visible, n = e.setTriggerVisible, r = e.triggerRef, a = e.onVisibleChange, i = e.autoFocus, o = c.useRef(!1), s = function() {
    if (t && r.current) {
      var f, v, p, h;
      (f = r.current) === null || f === void 0 || (v = f.triggerRef) === null || v === void 0 || (p = v.current) === null || p === void 0 || (h = p.focus) === null || h === void 0 || h.call(p), n(!1), typeof a == "function" && a(!1);
    }
  }, l = function() {
    var f, v, p, h, g = uh((f = r.current) === null || f === void 0 || (v = f.popupRef) === null || v === void 0 || (p = v.current) === null || p === void 0 || (h = p.getElement) === null || h === void 0 ? void 0 : h.call(p)), m = g[0];
    return m != null && m.focus ? (m.focus(), o.current = !0, !0) : !1;
  }, u = function(f) {
    switch (f.keyCode) {
      case dP:
        s();
        break;
      case fP: {
        var v = !1;
        o.current || (v = l()), v ? f.preventDefault() : s();
        break;
      }
    }
  };
  c.useEffect(function() {
    return t ? (window.addEventListener("keydown", u), i && mt(l, 3), function() {
      window.removeEventListener("keydown", u), o.current = !1;
    }) : function() {
      o.current = !1;
    };
  }, [t]);
}
var pP = ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger", "autoFocus"];
function mP(e, t) {
  var n = e.arrow, r = n === void 0 ? !1 : n, a = e.prefixCls, i = a === void 0 ? "rc-dropdown" : a, o = e.transitionName, s = e.animation, l = e.align, u = e.placement, d = u === void 0 ? "bottomLeft" : u, f = e.placements, v = f === void 0 ? cP : f, p = e.getPopupContainer, h = e.showAction, g = e.hideAction, m = e.overlayClassName, y = e.overlayStyle, b = e.visible, x = e.trigger, C = x === void 0 ? ["hover"] : x, E = e.autoFocus, S = We(e, pP), w = c.useState(), N = X(w, 2), O = N[0], _ = N[1], $ = "visible" in e ? b : O, I = c.useRef(null);
  c.useImperativeHandle(t, function() {
    return I.current;
  }), vP({
    visible: $,
    setTriggerVisible: _,
    triggerRef: I,
    onVisibleChange: e.onVisibleChange,
    autoFocus: E
  });
  var F = function() {
    var G = e.overlay, W;
    return typeof G == "function" ? W = G() : W = G, W;
  }, M = function(G) {
    var W = e.onOverlayClick;
    _(!1), W && W(G);
  }, V = function(G) {
    var W = e.onVisibleChange;
    _(G), typeof W == "function" && W(G);
  }, T = function() {
    var G = F();
    return /* @__PURE__ */ c.createElement(c.Fragment, null, r && /* @__PURE__ */ c.createElement("div", {
      className: "".concat(i, "-arrow")
    }), G);
  }, R = function() {
    var G = e.overlay;
    return typeof G == "function" ? T : T();
  }, k = function() {
    var G = e.minOverlayWidthMatchTrigger, W = e.alignPoint;
    return "minOverlayWidthMatchTrigger" in e ? G : !W;
  }, A = function() {
    var G = e.openClassName;
    return G !== void 0 ? G : "".concat(i, "-open");
  }, U = function() {
    var G = e.children, W = G.props ? G.props : {}, j = ne(W.className, A());
    return $ && G ? /* @__PURE__ */ c.cloneElement(G, {
      className: j
    }) : G;
  }, z = g;
  return !z && C.indexOf("contextMenu") !== -1 && (z = ["click"]), /* @__PURE__ */ c.createElement(Io, D(D({
    builtinPlacements: v
  }, S), {}, {
    prefixCls: i,
    ref: I,
    popupClassName: ne(m, P({}, "".concat(i, "-show-arrow"), r)),
    popupStyle: y,
    action: C,
    showAction: h,
    hideAction: z || [],
    popupPlacement: d,
    popupAlign: l,
    popupTransitionName: o,
    popupAnimation: s,
    popupVisible: $,
    stretch: k() ? "minWidth" : "",
    popup: R(),
    onPopupVisibleChange: V,
    onPopupClick: M,
    getPopupContainer: p
  }), U());
}
const hP = /* @__PURE__ */ c.forwardRef(mP);
var gP = 0, qr = {};
function lo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, n = gP++, r = t;
  function a() {
    r -= 1, r <= 0 ? (e(), delete qr[n]) : qr[n] = mt(a);
  }
  return qr[n] = mt(a), n;
}
lo.cancel = function(t) {
  t !== void 0 && (mt.cancel(qr[t]), delete qr[t]);
};
lo.ids = qr;
var Rs;
function bf(e) {
  return process.env.NODE_ENV === "test" ? !1 : !e || e.offsetParent === null || e.hidden;
}
function yP(e) {
  return e instanceof Document ? e.body : Array.from(e.childNodes).find(function(t) {
    return (t == null ? void 0 : t.nodeType) === Node.ELEMENT_NODE;
  });
}
function bP(e) {
  var t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
var Nh = /* @__PURE__ */ function(e) {
  Gt(n, e);
  var t = qt(n);
  function n() {
    var r;
    return Kt(this, n), r = t.apply(this, arguments), r.containerRef = /* @__PURE__ */ c.createRef(), r.animationStart = !1, r.destroyed = !1, r.onClick = function(a, i) {
      var o, s, l = r.props, u = l.insertExtraNode, d = l.disabled;
      if (!(d || !a || bf(a) || a.className.includes("-leave"))) {
        r.extraNode = document.createElement("div");
        var f = Ue(r), v = f.extraNode, p = r.context.getPrefixCls;
        v.className = "".concat(p(""), "-click-animating-node");
        var h = r.getAttributeName();
        if (a.setAttribute(h, "true"), i && i !== "#fff" && i !== "#ffffff" && i !== "rgb(255, 255, 255)" && i !== "rgba(255, 255, 255, 1)" && bP(i) && !/rgba\((?:\d*, ){3}0\)/.test(i) && // any transparent rgba color
        i !== "transparent") {
          v.style.borderColor = i;
          var g = ((o = a.getRootNode) === null || o === void 0 ? void 0 : o.call(a)) || a.ownerDocument, m = (s = yP(g)) !== null && s !== void 0 ? s : g;
          Rs = Sp(`
      [`.concat(p(""), "-click-animating-without-extra-node='true']::after, .").concat(p(""), `-click-animating-node {
        --antd-wave-shadow-color: `).concat(i, `;
      }`), "antd-wave", {
            csp: r.csp,
            attachTo: m
          });
        }
        u && a.appendChild(v), ["transition", "animation"].forEach(function(y) {
          a.addEventListener("".concat(y, "start"), r.onTransitionStart), a.addEventListener("".concat(y, "end"), r.onTransitionEnd);
        });
      }
    }, r.onTransitionStart = function(a) {
      if (!r.destroyed) {
        var i = r.containerRef.current;
        !a || a.target !== i || r.animationStart || r.resetEffect(i);
      }
    }, r.onTransitionEnd = function(a) {
      !a || a.animationName !== "fadeEffect" || r.resetEffect(a.target);
    }, r.bindAnimationEvent = function(a) {
      if (!(!a || !a.getAttribute || a.getAttribute("disabled") || a.className.includes("disabled"))) {
        var i = function(s) {
          if (!(s.target.tagName === "INPUT" || bf(s.target))) {
            r.resetEffect(a);
            var l = getComputedStyle(a).getPropertyValue("border-top-color") || // Firefox Compatible
            getComputedStyle(a).getPropertyValue("border-color") || getComputedStyle(a).getPropertyValue("background-color");
            r.clickWaveTimeoutId = window.setTimeout(function() {
              return r.onClick(a, l);
            }, 0), lo.cancel(r.animationStartId), r.animationStart = !0, r.animationStartId = lo(function() {
              r.animationStart = !1;
            }, 10);
          }
        };
        return a.addEventListener("click", i, !0), {
          cancel: function() {
            a.removeEventListener("click", i, !0);
          }
        };
      }
    }, r.renderWave = function(a) {
      var i = a.csp, o = r.props.children;
      if (r.csp = i, !/* @__PURE__ */ c.isValidElement(o))
        return o;
      var s = r.containerRef;
      return Xa(o) && (s = er(o.ref, r.containerRef)), on(o, {
        ref: s
      });
    }, r;
  }
  return Vt(n, [{
    key: "componentDidMount",
    value: function() {
      this.destroyed = !1;
      var a = this.containerRef.current;
      !a || a.nodeType !== 1 || (this.instance = this.bindAnimationEvent(a));
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.instance && this.instance.cancel(), this.clickWaveTimeoutId && clearTimeout(this.clickWaveTimeoutId), this.destroyed = !0;
    }
  }, {
    key: "getAttributeName",
    value: function() {
      var a = this.context.getPrefixCls, i = this.props.insertExtraNode;
      return i ? "".concat(a(""), "-click-animating") : "".concat(a(""), "-click-animating-without-extra-node");
    }
  }, {
    key: "resetEffect",
    value: function(a) {
      var i = this;
      if (!(!a || a === this.extraNode || !(a instanceof Element))) {
        var o = this.props.insertExtraNode, s = this.getAttributeName();
        a.setAttribute(s, "false"), Rs && (Rs.innerHTML = ""), o && this.extraNode && a.contains(this.extraNode) && a.removeChild(this.extraNode), ["transition", "animation"].forEach(function(l) {
          a.removeEventListener("".concat(l, "start"), i.onTransitionStart), a.removeEventListener("".concat(l, "end"), i.onTransitionEnd);
        });
      }
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ c.createElement(ni, null, this.renderWave);
    }
  }]), n;
}(c.Component);
Nh.contextType = st;
const Oh = Nh;
var CP = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, Ph = /* @__PURE__ */ c.createContext(void 0), xP = function(t) {
  var n, r = c.useContext(st), a = r.getPrefixCls, i = r.direction, o = t.prefixCls, s = t.size, l = t.className, u = CP(t, ["prefixCls", "size", "className"]), d = a("btn-group", o), f = "";
  switch (s) {
    case "large":
      f = "lg";
      break;
    case "small":
      f = "sm";
      break;
    case "middle":
    case void 0:
      break;
    default:
      process.env.NODE_ENV !== "production" && Nt(!s, "Button.Group", "Invalid prop `size`.");
  }
  var v = ne(d, (n = {}, P(n, "".concat(d, "-").concat(f), f), P(n, "".concat(d, "-rtl"), i === "rtl"), n), l);
  return /* @__PURE__ */ c.createElement(Ph.Provider, {
    value: s
  }, /* @__PURE__ */ c.createElement("div", K({}, u, {
    className: v
  })));
};
const SP = xP;
var ks = function() {
  return {
    width: 0,
    opacity: 0,
    transform: "scale(0)"
  };
}, Ts = function(t) {
  return {
    width: t.scrollWidth,
    opacity: 1,
    transform: "scale(1)"
  };
}, EP = function(t) {
  var n = t.prefixCls, r = t.loading, a = t.existIcon, i = !!r;
  return a ? /* @__PURE__ */ be.createElement("span", {
    className: "".concat(n, "-loading-icon")
  }, /* @__PURE__ */ be.createElement(Ha, null)) : /* @__PURE__ */ be.createElement(Pr, {
    visible: i,
    // We do not really use this motionName
    motionName: "".concat(n, "-loading-icon-motion"),
    removeOnLeave: !0,
    onAppearStart: ks,
    onAppearActive: Ts,
    onEnterStart: ks,
    onEnterActive: Ts,
    onLeaveStart: Ts,
    onLeaveActive: ks
  }, function(o, s) {
    var l = o.className, u = o.style;
    return /* @__PURE__ */ be.createElement("span", {
      className: "".concat(n, "-loading-icon"),
      style: u,
      ref: s
    }, /* @__PURE__ */ be.createElement(Ha, {
      className: l
    }));
  });
};
const wP = EP;
var NP = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, Cf = /^[\u4e00-\u9fa5]{2}$/, Ll = Cf.test.bind(Cf);
function OP(e) {
  return typeof e == "string";
}
function Ri(e) {
  return e === "text" || e === "link";
}
function PP(e, t) {
  if (e != null) {
    var n = t ? " " : "";
    return typeof e != "string" && typeof e != "number" && OP(e.type) && Ll(e.props.children) ? on(e, {
      children: e.props.children.split("").join(n)
    }) : typeof e == "string" ? Ll(e) ? /* @__PURE__ */ c.createElement("span", null, e.split("").join(n)) : /* @__PURE__ */ c.createElement("span", null, e) : dm(e) ? /* @__PURE__ */ c.createElement("span", null, e) : e;
  }
}
function RP(e, t) {
  var n = !1, r = [];
  return c.Children.forEach(e, function(a) {
    var i = Le(a), o = i === "string" || i === "number";
    if (n && o) {
      var s = r.length - 1, l = r[s];
      r[s] = "".concat(l).concat(a);
    } else
      r.push(a);
    n = o;
  }), c.Children.map(r, function(a) {
    return PP(a, t);
  });
}
In("default", "primary", "ghost", "dashed", "link", "text");
In("default", "circle", "round");
In("submit", "button", "reset");
var kP = function(t, n) {
  var r, a = t.loading, i = a === void 0 ? !1 : a, o = t.prefixCls, s = t.type, l = s === void 0 ? "default" : s, u = t.danger, d = t.shape, f = d === void 0 ? "default" : d, v = t.size, p = t.disabled, h = t.className, g = t.children, m = t.icon, y = t.ghost, b = y === void 0 ? !1 : y, x = t.block, C = x === void 0 ? !1 : x, E = t.htmlType, S = E === void 0 ? "button" : E, w = NP(t, ["loading", "prefixCls", "type", "danger", "shape", "size", "disabled", "className", "children", "icon", "ghost", "block", "htmlType"]), N = c.useContext(fr), O = c.useContext(Rr), _ = p ?? O, $ = c.useContext(Ph), I = c.useState(!!i), F = X(I, 2), M = F[0], V = F[1], T = c.useState(!1), R = X(T, 2), k = R[0], A = R[1], U = c.useContext(st), z = U.getPrefixCls, B = U.autoInsertSpaceInButton, G = U.direction, W = n || /* @__PURE__ */ c.createRef(), j = function() {
    return c.Children.count(g) === 1 && !m && !Ri(l);
  }, H = function() {
    if (!(!W || !W.current || B === !1)) {
      var xe = W.current.textContent;
      j() && Ll(xe) ? k || A(!0) : k && A(!1);
    }
  }, q = typeof i == "boolean" ? i : (i == null ? void 0 : i.delay) || !0;
  c.useEffect(function() {
    var te = null;
    return typeof q == "number" ? te = window.setTimeout(function() {
      te = null, V(q);
    }, q) : V(q), function() {
      te && (window.clearTimeout(te), te = null);
    };
  }, [q]), c.useEffect(H, [W]);
  var Y = function(xe) {
    var Me = t.onClick;
    if (M || _) {
      xe.preventDefault();
      return;
    }
    Me == null || Me(xe);
  };
  process.env.NODE_ENV !== "production" && Nt(!(typeof m == "string" && m.length > 2), "Button", "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(m, "` at https://ant.design/components/icon")), process.env.NODE_ENV !== "production" && Nt(!(b && Ri(l)), "Button", "`link` or `text` button can't be a `ghost` button.");
  var J = z("btn", o), oe = B !== !1, re = ii(J, G), de = re.compactSize, Z = re.compactItemClassnames, Q = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, ce = de || $ || v || N, Ce = ce && Q[ce] || "", we = M ? "loading" : m, ke = ln(w, ["navigate"]), ve = ne(J, (r = {}, P(r, "".concat(J, "-").concat(f), f !== "default" && f), P(r, "".concat(J, "-").concat(l), l), P(r, "".concat(J, "-").concat(Ce), Ce), P(r, "".concat(J, "-icon-only"), !g && g !== 0 && !!we), P(r, "".concat(J, "-background-ghost"), b && !Ri(l)), P(r, "".concat(J, "-loading"), M), P(r, "".concat(J, "-two-chinese-chars"), k && oe && !M), P(r, "".concat(J, "-block"), C), P(r, "".concat(J, "-dangerous"), !!u), P(r, "".concat(J, "-rtl"), G === "rtl"), P(r, "".concat(J, "-disabled"), ke.href !== void 0 && _), r), Z, h), ae = m && !M ? m : /* @__PURE__ */ c.createElement(wP, {
    existIcon: !!m,
    prefixCls: J,
    loading: !!M
  }), ie = g || g === 0 ? RP(g, j() && oe) : null;
  if (ke.href !== void 0)
    return /* @__PURE__ */ c.createElement("a", K({}, ke, {
      className: ve,
      onClick: Y,
      ref: W
    }), ae, ie);
  var ee = /* @__PURE__ */ c.createElement("button", K({}, w, {
    type: S,
    className: ve,
    onClick: Y,
    disabled: _,
    ref: W
  }), ae, ie);
  return Ri(l) ? ee : /* @__PURE__ */ c.createElement(Oh, {
    disabled: !!M
  }, ee);
}, jo = /* @__PURE__ */ c.forwardRef(kP);
process.env.NODE_ENV !== "production" && (jo.displayName = "Button");
jo.Group = SP;
jo.__ANT_BUTTON = !0;
const dr = jo;
var Rh = function(t) {
  if (jn() && window.document.documentElement) {
    var n = Array.isArray(t) ? t : [t], r = window.document.documentElement;
    return n.some(function(a) {
      return a in r.style;
    });
  }
  return !1;
}, TP = function(t, n) {
  if (!Rh(t))
    return !1;
  var r = document.createElement("div"), a = r.style[t];
  return r.style[t] = n, r.style[t] !== a;
};
function _P(e, t) {
  return !Array.isArray(e) && t !== void 0 ? TP(e, t) : Rh(e);
}
var IP = function() {
  return jn() && window.document.documentElement;
}, ki, FP = function() {
  if (!IP())
    return !1;
  if (ki !== void 0)
    return ki;
  var t = document.createElement("div");
  return t.style.display = "flex", t.style.flexDirection = "column", t.style.rowGap = "1px", t.appendChild(document.createElement("div")), t.appendChild(document.createElement("div")), document.body.appendChild(t), ki = t.scrollHeight === 1, document.body.removeChild(t), ki;
};
const MP = function() {
  var e = c.useState(!1), t = X(e, 2), n = t[0], r = t[1];
  return c.useEffect(function() {
    r(FP());
  }, []), n;
};
function $P(e) {
  var t = e.className, n = e.direction, r = e.index, a = e.marginDirection, i = e.children, o = e.split, s = e.wrap, l = c.useContext(kh), u = l.horizontalSize, d = l.verticalSize, f = l.latestIndex, v = l.supportFlexGap, p = {};
  return v || (n === "vertical" ? r < f && (p = {
    marginBottom: u / (o ? 2 : 1)
  }) : p = K(K({}, r < f && P({}, a, u / (o ? 2 : 1))), s && {
    paddingBottom: d
  })), i == null ? null : /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement("div", {
    className: t,
    style: p
  }, i), r < f && o && /* @__PURE__ */ c.createElement("span", {
    className: "".concat(t, "-split"),
    style: p
  }, o));
}
var DP = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, kh = /* @__PURE__ */ c.createContext({
  latestIndex: 0,
  horizontalSize: 0,
  verticalSize: 0,
  supportFlexGap: !1
}), AP = {
  small: 8,
  middle: 16,
  large: 24
};
function LP(e) {
  return typeof e == "string" ? AP[e] : e || 0;
}
var KP = function(t) {
  var n, r = c.useContext(st), a = r.getPrefixCls, i = r.space, o = r.direction, s = t.size, l = s === void 0 ? (i == null ? void 0 : i.size) || "small" : s, u = t.align, d = t.className, f = t.children, v = t.direction, p = v === void 0 ? "horizontal" : v, h = t.prefixCls, g = t.split, m = t.style, y = t.wrap, b = y === void 0 ? !1 : y, x = DP(t, ["size", "align", "className", "children", "direction", "prefixCls", "split", "style", "wrap"]), C = MP(), E = c.useMemo(function() {
    return (Array.isArray(l) ? l : [l, l]).map(function(A) {
      return LP(A);
    });
  }, [l]), S = X(E, 2), w = S[0], N = S[1], O = yn(f, {
    keepEmpty: !0
  }), _ = u === void 0 && p === "horizontal" ? "center" : u, $ = a("space", h), I = ne($, "".concat($, "-").concat(p), (n = {}, P(n, "".concat($, "-rtl"), o === "rtl"), P(n, "".concat($, "-align-").concat(_), _), n), d), F = "".concat($, "-item"), M = o === "rtl" ? "marginLeft" : "marginRight", V = 0, T = O.map(function(A, U) {
    A != null && (V = U);
    var z = A && A.key || "".concat(F, "-").concat(U);
    return /* @__PURE__ */ c.createElement($P, {
      className: F,
      key: z,
      direction: p,
      index: U,
      marginDirection: M,
      split: g,
      wrap: b
    }, A);
  }), R = c.useMemo(function() {
    return {
      horizontalSize: w,
      verticalSize: N,
      latestIndex: V,
      supportFlexGap: C
    };
  }, [w, N, V, C]);
  if (O.length === 0)
    return null;
  var k = {};
  return b && (k.flexWrap = "wrap", C || (k.marginBottom = -N)), C && (k.columnGap = w, k.rowGap = N), /* @__PURE__ */ c.createElement("div", K({
    className: I,
    style: K(K({}, k), m)
  }, x), /* @__PURE__ */ c.createElement(kh.Provider, {
    value: R
  }, T));
}, Th = KP;
Th.Compact = UN;
const VP = Th;
var zP = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, _h = function(t) {
  var n = c.useContext(st), r = n.getPopupContainer, a = n.getPrefixCls, i = n.direction, o = t.prefixCls, s = t.type, l = s === void 0 ? "default" : s, u = t.danger, d = t.disabled, f = t.loading, v = t.onClick, p = t.htmlType, h = t.children, g = t.className, m = t.menu, y = t.arrow, b = t.autoFocus, x = t.overlay, C = t.trigger, E = t.align, S = t.visible, w = t.open, N = t.onVisibleChange, O = t.onOpenChange, _ = t.placement, $ = t.getPopupContainer, I = t.href, F = t.icon, M = F === void 0 ? /* @__PURE__ */ c.createElement(rh, null) : F, V = t.title, T = t.buttonsRender, R = T === void 0 ? function(Ce) {
    return Ce;
  } : T, k = t.mouseEnterDelay, A = t.mouseLeaveDelay, U = t.overlayClassName, z = t.overlayStyle, B = t.destroyPopupOnHide, G = zP(t, ["prefixCls", "type", "danger", "disabled", "loading", "onClick", "htmlType", "children", "className", "menu", "arrow", "autoFocus", "overlay", "trigger", "align", "visible", "open", "onVisibleChange", "onOpenChange", "placement", "getPopupContainer", "href", "icon", "title", "buttonsRender", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyPopupOnHide"]), W = a("dropdown-button", o), j = {
    menu: m,
    arrow: y,
    autoFocus: b,
    align: E,
    disabled: d,
    trigger: d ? [] : C,
    onOpenChange: O || N,
    getPopupContainer: $ || r,
    mouseEnterDelay: k,
    mouseLeaveDelay: A,
    overlayClassName: U,
    overlayStyle: z,
    destroyPopupOnHide: B
  }, H = ii(W, i), q = H.compactSize, Y = H.compactItemClassnames, J = ne(W, Y, g);
  "overlay" in t && (j.overlay = x), "open" in t ? j.open = w : "visible" in t && (j.open = S), "placement" in t ? j.placement = _ : j.placement = i === "rtl" ? "bottomLeft" : "bottomRight";
  var oe = /* @__PURE__ */ c.createElement(dr, {
    type: l,
    danger: u,
    disabled: d,
    loading: f,
    onClick: v,
    htmlType: p,
    href: I,
    title: V
  }, h), re = /* @__PURE__ */ c.createElement(dr, {
    type: l,
    danger: u,
    icon: M
  }), de = R([oe, re]), Z = X(de, 2), Q = Z[0], ce = Z[1];
  return /* @__PURE__ */ c.createElement(VP.Compact, K({
    className: J,
    size: q,
    block: !0
  }, G), Q, /* @__PURE__ */ c.createElement(Ho, K({}, j), ce));
};
_h.__ANT_BUTTON = !0;
const jP = _h;
In("topLeft", "topCenter", "topRight", "bottomLeft", "bottomCenter", "bottomRight", "top", "bottom");
var Ih = function(t) {
  var n = c.useContext(st), r = n.getPopupContainer, a = n.getPrefixCls, i = n.direction;
  process.env.NODE_ENV !== "production" && ([["visible", "open"], ["onVisibleChange", "onOpenChange"]].forEach(function(j) {
    var H = X(j, 2), q = H[0], Y = H[1];
    process.env.NODE_ENV !== "production" && Nt(!(q in t), "Dropdown", "`".concat(q, "` is deprecated which will be removed in next major version, please use `").concat(Y, "` instead."));
  }), process.env.NODE_ENV !== "production" && Nt(!("overlay" in t), "Dropdown", "`overlay` is deprecated. Please use `menu` instead."));
  var o = function() {
    var H = a(), q = t.placement, Y = q === void 0 ? "" : q, J = t.transitionName;
    return J !== void 0 ? J : Y.includes("top") ? "".concat(H, "-slide-down") : "".concat(H, "-slide-up");
  }, s = function() {
    var H = t.placement;
    if (!H)
      return i === "rtl" ? "bottomRight" : "bottomLeft";
    if (H.includes("Center")) {
      var q = H.slice(0, H.indexOf("Center"));
      return process.env.NODE_ENV !== "production" && Nt(!H.includes("Center"), "Dropdown", "You are using '".concat(H, "' placement in Dropdown, which is deprecated. Try to use '").concat(q, "' instead.")), q;
    }
    return H;
  }, l = t.menu, u = t.arrow, d = t.prefixCls, f = t.children, v = t.trigger, p = t.disabled, h = t.dropdownRender, g = t.getPopupContainer, m = t.overlayClassName, y = t.visible, b = t.open, x = t.onVisibleChange, C = t.onOpenChange, E = t.mouseEnterDelay, S = E === void 0 ? 0.15 : E, w = t.mouseLeaveDelay, N = w === void 0 ? 0.1 : w, O = t.autoAdjustOverflow, _ = O === void 0 ? !0 : O, $ = a("dropdown", d), I = c.Children.only(f), F = on(I, {
    className: ne("".concat($, "-trigger"), P({}, "".concat($, "-rtl"), i === "rtl"), I.props.className),
    disabled: p
  }), M = p ? [] : v, V;
  M && M.includes("contextMenu") && (V = !0);
  var T = un(!1, {
    value: b !== void 0 ? b : y
  }), R = X(T, 2), k = R[0], A = R[1], U = cr(function(j) {
    x == null || x(j), C == null || C(j), A(j);
  }), z = ne(m, P({}, "".concat($, "-rtl"), i === "rtl")), B = Zm({
    arrowPointAtCenter: Le(u) === "object" && u.pointAtCenter,
    autoAdjustOverflow: _
  }), G = c.useCallback(function() {
    A(!1);
  }, []), W = function() {
    var H = t.overlay, q;
    return l != null && l.items ? q = /* @__PURE__ */ c.createElement(wh, K({}, l)) : typeof H == "function" ? q = H() : q = H, h && (q = h(q)), q = c.Children.only(typeof q == "string" ? /* @__PURE__ */ c.createElement("span", null, q) : q), /* @__PURE__ */ c.createElement(Eh, {
      prefixCls: "".concat($, "-menu"),
      expandIcon: /* @__PURE__ */ c.createElement("span", {
        className: "".concat($, "-menu-submenu-arrow")
      }, /* @__PURE__ */ c.createElement(ea, {
        className: "".concat($, "-menu-submenu-arrow-icon")
      })),
      mode: "vertical",
      selectable: !1,
      onClick: G,
      validator: function(J) {
        var oe = J.mode;
        process.env.NODE_ENV !== "production" && Nt(!oe || oe === "vertical", "Dropdown", 'mode="'.concat(oe, `" is not supported for Dropdown's Menu.`));
      }
    }, /* @__PURE__ */ c.createElement(_l, null, q));
  };
  return /* @__PURE__ */ c.createElement(hP, K({
    alignPoint: V
  }, t, {
    mouseEnterDelay: S,
    mouseLeaveDelay: N,
    visible: k,
    builtinPlacements: B,
    arrow: !!u,
    overlayClassName: z,
    prefixCls: $,
    getPopupContainer: g || r,
    transitionName: o(),
    trigger: M,
    overlay: W,
    placement: s(),
    onVisibleChange: U
  }), F);
};
Ih.Button = jP;
const Ho = Ih;
var HP = /\s/;
function BP(e) {
  for (var t = e.length; t-- && HP.test(e.charAt(t)); )
    ;
  return t;
}
var UP = BP, WP = UP, GP = /^\s+/;
function qP(e) {
  return e && e.slice(0, WP(e) + 1).replace(GP, "");
}
var YP = qP;
function XP(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Bo = XP, JP = YP, xf = Bo, QP = Np, Sf = NaN, ZP = /^[-+]0x[0-9a-f]+$/i, eR = /^0b[01]+$/i, tR = /^0o[0-7]+$/i, nR = parseInt;
function rR(e) {
  if (typeof e == "number")
    return e;
  if (QP(e))
    return Sf;
  if (xf(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = xf(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = JP(e);
  var n = eR.test(e);
  return n || tR.test(e) ? nR(e.slice(2), n ? 2 : 8) : ZP.test(e) ? Sf : +e;
}
var aR = rR, Fh = /* @__PURE__ */ c.createContext(null), iR = Fh.Provider, Mh = /* @__PURE__ */ c.createContext(null), oR = Mh.Provider, Xu = /* @__PURE__ */ function(e) {
  Gt(n, e);
  var t = qt(n);
  function n(r) {
    var a;
    Kt(this, n), a = t.call(this, r), a.handleChange = function(o) {
      var s = a.props, l = s.disabled, u = s.onChange;
      l || ("checked" in a.props || a.setState({
        checked: o.target.checked
      }), u && u({
        target: D(D({}, a.props), {}, {
          checked: o.target.checked
        }),
        stopPropagation: function() {
          o.stopPropagation();
        },
        preventDefault: function() {
          o.preventDefault();
        },
        nativeEvent: o.nativeEvent
      }));
    }, a.saveInput = function(o) {
      a.input = o;
    };
    var i = "checked" in r ? r.checked : r.defaultChecked;
    return a.state = {
      checked: i
    }, a;
  }
  return Vt(n, [{
    key: "focus",
    value: function() {
      this.input.focus();
    }
  }, {
    key: "blur",
    value: function() {
      this.input.blur();
    }
  }, {
    key: "render",
    value: function() {
      var a, i = this.props, o = i.prefixCls, s = i.className, l = i.style, u = i.name, d = i.id, f = i.type, v = i.disabled, p = i.readOnly, h = i.tabIndex, g = i.onClick, m = i.onFocus, y = i.onBlur, b = i.onKeyDown, x = i.onKeyPress, C = i.onKeyUp, E = i.autoFocus, S = i.value, w = i.required, N = We(i, ["prefixCls", "className", "style", "name", "id", "type", "disabled", "readOnly", "tabIndex", "onClick", "onFocus", "onBlur", "onKeyDown", "onKeyPress", "onKeyUp", "autoFocus", "value", "required"]), O = Object.keys(N).reduce(function(I, F) {
        return (F.substr(0, 5) === "aria-" || F.substr(0, 5) === "data-" || F === "role") && (I[F] = N[F]), I;
      }, {}), _ = this.state.checked, $ = ne(o, s, (a = {}, P(a, "".concat(o, "-checked"), _), P(a, "".concat(o, "-disabled"), v), a));
      return /* @__PURE__ */ be.createElement("span", {
        className: $,
        style: l
      }, /* @__PURE__ */ be.createElement("input", K({
        name: u,
        id: d,
        type: f,
        required: w,
        readOnly: p,
        disabled: v,
        tabIndex: h,
        className: "".concat(o, "-input"),
        checked: !!_,
        onClick: g,
        onFocus: m,
        onBlur: y,
        onKeyUp: C,
        onKeyDown: b,
        onKeyPress: x,
        onChange: this.handleChange,
        autoFocus: E,
        ref: this.saveInput,
        value: S
      }, O)), /* @__PURE__ */ be.createElement("span", {
        className: "".concat(o, "-inner")
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(a, i) {
      return "checked" in a ? D(D({}, i), {}, {
        checked: a.checked
      }) : null;
    }
  }]), n;
}(uy);
Xu.defaultProps = {
  prefixCls: "rc-checkbox",
  className: "",
  style: {},
  type: "checkbox",
  defaultChecked: !1,
  onFocus: function() {
  },
  onBlur: function() {
  },
  onChange: function() {
  },
  onKeyDown: function() {
  },
  onKeyPress: function() {
  },
  onKeyUp: function() {
  }
};
var sR = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, lR = function(t, n) {
  var r, a = c.useContext(Fh), i = c.useContext(Mh), o = c.useContext(st), s = o.getPrefixCls, l = o.direction, u = c.useRef(), d = er(n, u), f = en(Tn), v = f.isFormItemInput;
  process.env.NODE_ENV !== "production" && Nt(!("optionType" in t), "Radio", "`optionType` is only support in Radio.Group.");
  var p = function(_) {
    var $, I;
    ($ = t.onChange) === null || $ === void 0 || $.call(t, _), (I = a == null ? void 0 : a.onChange) === null || I === void 0 || I.call(a, _);
  }, h = t.prefixCls, g = t.className, m = t.children, y = t.style, b = t.disabled, x = sR(t, ["prefixCls", "className", "children", "style", "disabled"]), C = s("radio", h), E = ((a == null ? void 0 : a.optionType) || i) === "button" ? "".concat(C, "-button") : C, S = K({}, x), w = c.useContext(Rr);
  S.disabled = b || w, a && (S.name = a.name, S.onChange = p, S.checked = t.value === a.value, S.disabled = S.disabled || a.disabled);
  var N = ne("".concat(E, "-wrapper"), (r = {}, P(r, "".concat(E, "-wrapper-checked"), S.checked), P(r, "".concat(E, "-wrapper-disabled"), S.disabled), P(r, "".concat(E, "-wrapper-rtl"), l === "rtl"), P(r, "".concat(E, "-wrapper-in-form-item"), v), r), g);
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    /* @__PURE__ */ c.createElement("label", {
      className: N,
      style: y,
      onMouseEnter: t.onMouseEnter,
      onMouseLeave: t.onMouseLeave
    }, /* @__PURE__ */ c.createElement(Xu, K({}, S, {
      type: "radio",
      prefixCls: E,
      ref: d
    })), m !== void 0 ? /* @__PURE__ */ c.createElement("span", null, m) : null)
  );
}, $h = /* @__PURE__ */ c.forwardRef(lR);
process.env.NODE_ENV !== "production" && ($h.displayName = "Radio");
const uo = $h;
var uR = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var n, r = c.useContext(st), a = r.getPrefixCls, i = r.direction, o = c.useContext(fr), s = un(e.defaultValue, {
    value: e.value
  }), l = X(s, 2), u = l[0], d = l[1], f = function(R) {
    var k = u, A = R.target.value;
    "value" in e || d(A);
    var U = e.onChange;
    U && A !== k && U(R);
  }, v = e.prefixCls, p = e.className, h = p === void 0 ? "" : p, g = e.options, m = e.buttonStyle, y = m === void 0 ? "outline" : m, b = e.disabled, x = e.children, C = e.size, E = e.style, S = e.id, w = e.onMouseEnter, N = e.onMouseLeave, O = e.onFocus, _ = e.onBlur, $ = a("radio", v), I = "".concat($, "-group"), F = x;
  g && g.length > 0 && (F = g.map(function(T) {
    return typeof T == "string" || typeof T == "number" ? /* @__PURE__ */ c.createElement(uo, {
      key: T.toString(),
      prefixCls: $,
      disabled: b,
      value: T,
      checked: u === T
    }, T) : /* @__PURE__ */ c.createElement(uo, {
      key: "radio-group-value-options-".concat(T.value),
      prefixCls: $,
      disabled: T.disabled || b,
      value: T.value,
      checked: u === T.value,
      style: T.style
    }, T.label);
  }));
  var M = C || o, V = ne(I, "".concat(I, "-").concat(y), (n = {}, P(n, "".concat(I, "-").concat(M), M), P(n, "".concat(I, "-rtl"), i === "rtl"), n), h);
  return /* @__PURE__ */ c.createElement("div", K({}, bE(e), {
    className: V,
    style: E,
    onMouseEnter: w,
    onMouseLeave: N,
    onFocus: O,
    onBlur: _,
    id: S,
    ref: t
  }), /* @__PURE__ */ c.createElement(iR, {
    value: {
      onChange: f,
      value: u,
      disabled: e.disabled,
      name: e.name,
      optionType: e.optionType
    }
  }, F));
});
const cR = /* @__PURE__ */ c.memo(uR);
var dR = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, fR = function(t, n) {
  var r = c.useContext(st), a = r.getPrefixCls, i = t.prefixCls, o = dR(t, ["prefixCls"]), s = a("radio", i);
  return /* @__PURE__ */ c.createElement(oR, {
    value: "button"
  }, /* @__PURE__ */ c.createElement(uo, K({
    prefixCls: s
  }, o, {
    type: "radio",
    ref: n
  })));
};
const vR = /* @__PURE__ */ c.forwardRef(fR);
var Uo = uo;
Uo.Button = vR;
Uo.Group = cR;
Uo.__ANT_RADIO = !0;
const Dh = Uo;
var pR = Hn, mR = function() {
  return pR.Date.now();
}, hR = mR, gR = Bo, _s = hR, Ef = aR, yR = "Expected a function", bR = Math.max, CR = Math.min;
function xR(e, t, n) {
  var r, a, i, o, s, l, u = 0, d = !1, f = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(yR);
  t = Ef(t) || 0, gR(n) && (d = !!n.leading, f = "maxWait" in n, i = f ? bR(Ef(n.maxWait) || 0, t) : i, v = "trailing" in n ? !!n.trailing : v);
  function p(S) {
    var w = r, N = a;
    return r = a = void 0, u = S, o = e.apply(N, w), o;
  }
  function h(S) {
    return u = S, s = setTimeout(y, t), d ? p(S) : o;
  }
  function g(S) {
    var w = S - l, N = S - u, O = t - w;
    return f ? CR(O, i - N) : O;
  }
  function m(S) {
    var w = S - l, N = S - u;
    return l === void 0 || w >= t || w < 0 || f && N >= i;
  }
  function y() {
    var S = _s();
    if (m(S))
      return b(S);
    s = setTimeout(y, g(S));
  }
  function b(S) {
    return s = void 0, v && r ? p(S) : (r = a = void 0, o);
  }
  function x() {
    s !== void 0 && clearTimeout(s), u = 0, r = l = a = s = void 0;
  }
  function C() {
    return s === void 0 ? o : b(_s());
  }
  function E() {
    var S = _s(), w = m(S);
    if (r = arguments, a = this, l = S, w) {
      if (s === void 0)
        return h(l);
      if (f)
        return clearTimeout(s), s = setTimeout(y, t), p(l);
    }
    return s === void 0 && (s = setTimeout(y, t)), o;
  }
  return E.cancel = x, E.flush = C, E;
}
var SR = xR;
const ER = /* @__PURE__ */ qa(SR);
function mn(e, t) {
  return e[t];
}
function Ah(e, t) {
  var n = /* @__PURE__ */ new Set();
  return e.forEach(function(r) {
    t.has(r) || n.add(r);
  }), n;
}
function wR(e) {
  var t = e || {}, n = t.disabled, r = t.disableCheckbox, a = t.checkable;
  return !!(n || r) || a === !1;
}
function NR(e, t, n, r) {
  for (var a = new Set(e), i = /* @__PURE__ */ new Set(), o = 0; o <= n; o += 1) {
    var s = t.get(o) || /* @__PURE__ */ new Set();
    s.forEach(function(f) {
      var v = f.key, p = f.node, h = f.children, g = h === void 0 ? [] : h;
      a.has(v) && !r(p) && g.filter(function(m) {
        return !r(m.node);
      }).forEach(function(m) {
        a.add(m.key);
      });
    });
  }
  for (var l = /* @__PURE__ */ new Set(), u = n; u >= 0; u -= 1) {
    var d = t.get(u) || /* @__PURE__ */ new Set();
    d.forEach(function(f) {
      var v = f.parent, p = f.node;
      if (!(r(p) || !f.parent || l.has(f.parent.key))) {
        if (r(f.parent.node)) {
          l.add(v.key);
          return;
        }
        var h = !0, g = !1;
        (v.children || []).filter(function(m) {
          return !r(m.node);
        }).forEach(function(m) {
          var y = m.key, b = a.has(y);
          h && !b && (h = !1), !g && (b || i.has(y)) && (g = !0);
        }), h && a.add(v.key), g && i.add(v.key), l.add(v.key);
      }
    });
  }
  return {
    checkedKeys: Array.from(a),
    halfCheckedKeys: Array.from(Ah(i, a))
  };
}
function OR(e, t, n, r, a) {
  for (var i = new Set(e), o = new Set(t), s = 0; s <= r; s += 1) {
    var l = n.get(s) || /* @__PURE__ */ new Set();
    l.forEach(function(v) {
      var p = v.key, h = v.node, g = v.children, m = g === void 0 ? [] : g;
      !i.has(p) && !o.has(p) && !a(h) && m.filter(function(y) {
        return !a(y.node);
      }).forEach(function(y) {
        i.delete(y.key);
      });
    });
  }
  o = /* @__PURE__ */ new Set();
  for (var u = /* @__PURE__ */ new Set(), d = r; d >= 0; d -= 1) {
    var f = n.get(d) || /* @__PURE__ */ new Set();
    f.forEach(function(v) {
      var p = v.parent, h = v.node;
      if (!(a(h) || !v.parent || u.has(v.parent.key))) {
        if (a(v.parent.node)) {
          u.add(p.key);
          return;
        }
        var g = !0, m = !1;
        (p.children || []).filter(function(y) {
          return !a(y.node);
        }).forEach(function(y) {
          var b = y.key, x = i.has(b);
          g && !x && (g = !1), !m && (x || o.has(b)) && (m = !0);
        }), g || i.delete(p.key), m && o.add(p.key), u.add(p.key);
      }
    });
  }
  return {
    checkedKeys: Array.from(i),
    halfCheckedKeys: Array.from(Ah(o, i))
  };
}
function Yr(e, t, n, r) {
  var a = [], i;
  r ? i = r : i = wR;
  var o = new Set(e.filter(function(d) {
    var f = !!mn(n, d);
    return f || a.push(d), f;
  })), s = /* @__PURE__ */ new Map(), l = 0;
  Object.keys(n).forEach(function(d) {
    var f = n[d], v = f.level, p = s.get(v);
    p || (p = /* @__PURE__ */ new Set(), s.set(v, p)), p.add(f), l = Math.max(l, v);
  }), Fe(!a.length, "Tree missing follow keys: ".concat(a.slice(0, 100).map(function(d) {
    return "'".concat(d, "'");
  }).join(", ")));
  var u;
  return t === !0 ? u = NR(o, s, l, i) : u = OR(o, t.halfCheckedKeys, s, l, i), u;
}
var PR = ["children"];
function Lh(e, t) {
  return "".concat(e, "-").concat(t);
}
function RR(e) {
  return e && e.type && e.type.isTreeNode;
}
function li(e, t) {
  return e ?? t;
}
function co(e) {
  var t = e || {}, n = t.title, r = t._title, a = t.key, i = t.children, o = n || "title";
  return {
    title: o,
    _title: r || [o],
    key: a || "key",
    children: i || "children"
  };
}
function kR(e, t) {
  var n = /* @__PURE__ */ new Map();
  function r(a) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    (a || []).forEach(function(o) {
      var s = o[t.key], l = o[t.children];
      Fe(s != null, "Tree node must have a certain key: [".concat(i).concat(s, "]"));
      var u = String(s);
      Fe(!n.has(u) || s === null || s === void 0, "Same 'key' exist in the Tree: ".concat(u)), n.set(u, !0), r(l, "".concat(i).concat(u, " > "));
    });
  }
  r(e);
}
function Kh(e) {
  function t(n) {
    var r = yn(n);
    return r.map(function(a) {
      if (!RR(a))
        return Fe(!a, "Tree/TreeNode can only accept TreeNode as children."), null;
      var i = a.key, o = a.props, s = o.children, l = We(o, PR), u = D({
        key: i
      }, l), d = t(s);
      return d.length && (u.children = d), u;
    }).filter(function(a) {
      return a;
    });
  }
  return t(e);
}
function Is(e, t, n) {
  var r = co(n), a = r._title, i = r.key, o = r.children, s = new Set(t === !0 ? [] : t), l = [];
  function u(d) {
    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    return d.map(function(v, p) {
      for (var h = Lh(f ? f.pos : "0", p), g = li(v[i], h), m, y = 0; y < a.length; y += 1) {
        var b = a[y];
        if (v[b] !== void 0) {
          m = v[b];
          break;
        }
      }
      var x = D(D({}, ln(v, [].concat(pe(a), [i, o]))), {}, {
        title: m,
        key: g,
        parent: f,
        pos: h,
        children: null,
        data: v,
        isStart: [].concat(pe(f ? f.isStart : []), [p === 0]),
        isEnd: [].concat(pe(f ? f.isEnd : []), [p === d.length - 1])
      });
      return l.push(x), t === !0 || s.has(g) ? x.children = u(v[o] || [], x) : x.children = [], x;
    });
  }
  return u(e), l;
}
function TR(e, t, n) {
  var r = {};
  Le(n) === "object" ? r = n : r = {
    externalGetKey: n
  }, r = r || {};
  var a = r, i = a.childrenPropName, o = a.externalGetKey, s = a.fieldNames, l = co(s), u = l.key, d = l.children, f = i || d, v;
  o ? typeof o == "string" ? v = function(g) {
    return g[o];
  } : typeof o == "function" && (v = function(g) {
    return o(g);
  }) : v = function(g, m) {
    return li(g[u], m);
  };
  function p(h, g, m, y) {
    var b = h ? h[f] : e, x = h ? Lh(m.pos, g) : "0", C = h ? [].concat(pe(y), [h]) : [];
    if (h) {
      var E = v(h, x), S = {
        node: h,
        index: g,
        pos: x,
        key: E,
        parentPos: m.node ? m.pos : null,
        level: m.level + 1,
        nodes: C
      };
      t(S);
    }
    b && b.forEach(function(w, N) {
      p(w, N, {
        node: h,
        pos: x,
        level: m ? m.level + 1 : -1
      }, C);
    });
  }
  p(null);
}
function Ju(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.initWrapper, r = t.processEntity, a = t.onProcessFinished, i = t.externalGetKey, o = t.childrenPropName, s = t.fieldNames, l = arguments.length > 2 ? arguments[2] : void 0, u = i || l, d = {}, f = {}, v = {
    posEntities: d,
    keyEntities: f
  };
  return n && (v = n(v) || v), TR(e, function(p) {
    var h = p.node, g = p.index, m = p.pos, y = p.key, b = p.parentPos, x = p.level, C = p.nodes, E = {
      node: h,
      nodes: C,
      index: g,
      key: y,
      pos: m,
      level: x
    }, S = li(y, m);
    d[m] = E, f[S] = E, E.parent = d[b], E.parent && (E.parent.children = E.parent.children || [], E.parent.children.push(E)), r && r(E, v);
  }, {
    externalGetKey: u,
    childrenPropName: o,
    fieldNames: s
  }), a && a(v), v;
}
function Fa(e, t) {
  var n = t.expandedKeys, r = t.selectedKeys, a = t.loadedKeys, i = t.loadingKeys, o = t.checkedKeys, s = t.halfCheckedKeys, l = t.dragOverNodeKey, u = t.dropPosition, d = t.keyEntities, f = mn(d, e), v = {
    eventKey: e,
    expanded: n.indexOf(e) !== -1,
    selected: r.indexOf(e) !== -1,
    loaded: a.indexOf(e) !== -1,
    loading: i.indexOf(e) !== -1,
    checked: o.indexOf(e) !== -1,
    halfChecked: s.indexOf(e) !== -1,
    pos: String(f ? f.pos : ""),
    // [Legacy] Drag props
    // Since the interaction of drag is changed, the semantic of the props are
    // not accuracy, I think it should be finally removed
    dragOver: l === e && u === 0,
    dragOverGapTop: l === e && u === -1,
    dragOverGapBottom: l === e && u === 1
  };
  return v;
}
function Ht(e) {
  var t = e.data, n = e.expanded, r = e.selected, a = e.checked, i = e.loaded, o = e.loading, s = e.halfChecked, l = e.dragOver, u = e.dragOverGapTop, d = e.dragOverGapBottom, f = e.pos, v = e.active, p = e.eventKey, h = D(D({}, t), {}, {
    expanded: n,
    selected: r,
    checked: a,
    loaded: i,
    loading: o,
    halfChecked: s,
    dragOver: l,
    dragOverGapTop: u,
    dragOverGapBottom: d,
    pos: f,
    active: v,
    key: p
  });
  return "props" in h || Object.defineProperty(h, "props", {
    get: function() {
      return Fe(!1, "Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."), e;
    }
  }), h;
}
var _R = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, Vh = /* @__PURE__ */ c.createContext(null), IR = function(t, n) {
  var r = t.defaultValue, a = t.children, i = t.options, o = i === void 0 ? [] : i, s = t.prefixCls, l = t.className, u = t.style, d = t.onChange, f = _R(t, ["defaultValue", "children", "options", "prefixCls", "className", "style", "onChange"]), v = c.useContext(st), p = v.getPrefixCls, h = v.direction, g = c.useState(f.value || r || []), m = X(g, 2), y = m[0], b = m[1], x = c.useState([]), C = X(x, 2), E = C[0], S = C[1];
  c.useEffect(function() {
    "value" in f && b(f.value || []);
  }, [f.value]);
  var w = function() {
    return o.map(function(R) {
      return typeof R == "string" || typeof R == "number" ? {
        label: R,
        value: R
      } : R;
    });
  }, N = function(R) {
    S(function(k) {
      return k.filter(function(A) {
        return A !== R;
      });
    });
  }, O = function(R) {
    S(function(k) {
      return [].concat(pe(k), [R]);
    });
  }, _ = function(R) {
    var k = y.indexOf(R.value), A = pe(y);
    k === -1 ? A.push(R.value) : A.splice(k, 1), "value" in f || b(A);
    var U = w();
    d == null || d(A.filter(function(z) {
      return E.includes(z);
    }).sort(function(z, B) {
      var G = U.findIndex(function(j) {
        return j.value === z;
      }), W = U.findIndex(function(j) {
        return j.value === B;
      });
      return G - W;
    }));
  }, $ = p("checkbox", s), I = "".concat($, "-group"), F = ln(f, ["value", "disabled"]);
  o && o.length > 0 && (a = w().map(function(T) {
    return /* @__PURE__ */ c.createElement(jh, {
      prefixCls: $,
      key: T.value.toString(),
      disabled: "disabled" in T ? T.disabled : f.disabled,
      value: T.value,
      checked: y.includes(T.value),
      onChange: T.onChange,
      className: "".concat(I, "-item"),
      style: T.style
    }, T.label);
  }));
  var M = {
    toggleOption: _,
    value: y,
    disabled: f.disabled,
    name: f.name,
    // https://github.com/ant-design/ant-design/issues/16376
    registerValue: O,
    cancelValue: N
  }, V = ne(I, P({}, "".concat(I, "-rtl"), h === "rtl"), l);
  return /* @__PURE__ */ c.createElement("div", K({
    className: V,
    style: u
  }, F, {
    ref: n
  }), /* @__PURE__ */ c.createElement(Vh.Provider, {
    value: M
  }, a));
}, FR = /* @__PURE__ */ c.forwardRef(IR);
const MR = /* @__PURE__ */ c.memo(FR);
var $R = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, DR = function(t, n) {
  var r, a, i = t.prefixCls, o = t.className, s = t.children, l = t.indeterminate, u = l === void 0 ? !1 : l, d = t.style, f = t.onMouseEnter, v = t.onMouseLeave, p = t.skipGroup, h = p === void 0 ? !1 : p, g = t.disabled, m = $R(t, ["prefixCls", "className", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave", "skipGroup", "disabled"]), y = c.useContext(st), b = y.getPrefixCls, x = y.direction, C = c.useContext(Vh), E = en(Tn), S = E.isFormItemInput, w = en(Rr), N = (a = (C == null ? void 0 : C.disabled) || g) !== null && a !== void 0 ? a : w, O = c.useRef(m.value);
  c.useEffect(function() {
    C == null || C.registerValue(m.value), process.env.NODE_ENV !== "production" && Nt("checked" in m || !!C || !("value" in m), "Checkbox", "`value` is not a valid prop, do you mean `checked`?");
  }, []), c.useEffect(function() {
    if (!h)
      return m.value !== O.current && (C == null || C.cancelValue(O.current), C == null || C.registerValue(m.value), O.current = m.value), function() {
        return C == null ? void 0 : C.cancelValue(m.value);
      };
  }, [m.value]);
  var _ = b("checkbox", i), $ = K({}, m);
  C && !h && ($.onChange = function() {
    m.onChange && m.onChange.apply(m, arguments), C.toggleOption && C.toggleOption({
      label: s,
      value: m.value
    });
  }, $.name = C.name, $.checked = C.value.includes(m.value));
  var I = ne((r = {}, P(r, "".concat(_, "-wrapper"), !0), P(r, "".concat(_, "-rtl"), x === "rtl"), P(r, "".concat(_, "-wrapper-checked"), $.checked), P(r, "".concat(_, "-wrapper-disabled"), N), P(r, "".concat(_, "-wrapper-in-form-item"), S), r), o), F = ne(P({}, "".concat(_, "-indeterminate"), u)), M = u ? "mixed" : void 0;
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    /* @__PURE__ */ c.createElement("label", {
      className: I,
      style: d,
      onMouseEnter: f,
      onMouseLeave: v
    }, /* @__PURE__ */ c.createElement(Xu, K({
      "aria-checked": M
    }, $, {
      prefixCls: _,
      className: F,
      disabled: N,
      ref: n
    })), s !== void 0 && /* @__PURE__ */ c.createElement("span", null, s))
  );
}, zh = /* @__PURE__ */ c.forwardRef(DR);
process.env.NODE_ENV !== "production" && (zh.displayName = "Checkbox");
const jh = zh;
var Qu = jh;
Qu.Group = MR;
Qu.__ANT_CHECKBOX = !0;
const ta = Qu;
var AR = function(t, n, r, a) {
  var i = r ? r.call(a, t, n) : void 0;
  if (i !== void 0)
    return !!i;
  if (t === n)
    return !0;
  if (typeof t != "object" || !t || typeof n != "object" || !n)
    return !1;
  var o = Object.keys(t), s = Object.keys(n);
  if (o.length !== s.length)
    return !1;
  for (var l = Object.prototype.hasOwnProperty.bind(n), u = 0; u < o.length; u++) {
    var d = o[u];
    if (!l(d))
      return !1;
    var f = t[d], v = n[d];
    if (i = r ? r.call(a, f, v, d) : void 0, i === !1 || i === void 0 && f !== v)
      return !1;
  }
  return !0;
};
const Zu = /* @__PURE__ */ qa(AR);
var Fs;
function Kl(e) {
  if (typeof document > "u")
    return 0;
  if (e || Fs === void 0) {
    var t = document.createElement("div");
    t.style.width = "100%", t.style.height = "200px";
    var n = document.createElement("div"), r = n.style;
    r.position = "absolute", r.top = "0", r.left = "0", r.pointerEvents = "none", r.visibility = "hidden", r.width = "200px", r.height = "150px", r.overflow = "hidden", n.appendChild(t), document.body.appendChild(n);
    var a = t.offsetWidth;
    n.style.overflow = "scroll";
    var i = t.offsetWidth;
    a === i && (i = n.clientWidth), document.body.removeChild(n), Fs = a - i;
  }
  return Fs;
}
function wf(e) {
  var t = e.match(/^(.*)px$/), n = Number(t == null ? void 0 : t[1]);
  return Number.isNaN(n) ? Kl() : n;
}
function Nf(e) {
  if (typeof document > "u" || !e || !(e instanceof Element))
    return {
      width: 0,
      height: 0
    };
  var t = getComputedStyle(e, "::-webkit-scrollbar"), n = t.width, r = t.height;
  return {
    width: wf(n),
    height: wf(r)
  };
}
var LR = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, name: "eye", theme: "outlined" };
const KR = LR;
var Hh = function(t, n) {
  return /* @__PURE__ */ c.createElement(It, D(D({}, t), {}, {
    ref: n,
    icon: KR
  }));
};
Hh.displayName = "EyeOutlined";
const VR = /* @__PURE__ */ c.forwardRef(Hh);
function Of(e) {
  var t = e.getBoundingClientRect(), n = document.documentElement;
  return {
    left: t.left + (window.pageXOffset || n.scrollLeft) - (n.clientLeft || document.body.clientLeft || 0),
    top: t.top + (window.pageYOffset || n.scrollTop) - (n.clientTop || document.body.clientTop || 0)
  };
}
var zR = function(t) {
  var n, r = en(st), a = r.getPrefixCls, i = r.direction, o = t.prefixCls, s = t.className, l = s === void 0 ? "" : s, u = a("input-group", o), d = ne(u, (n = {}, P(n, "".concat(u, "-lg"), t.size === "large"), P(n, "".concat(u, "-sm"), t.size === "small"), P(n, "".concat(u, "-compact"), t.compact), P(n, "".concat(u, "-rtl"), i === "rtl"), n), l), f = en(Tn), v = Zt(function() {
    return K(K({}, f), {
      isFormItemInput: !1
    });
  }, [f]);
  return /* @__PURE__ */ c.createElement("span", {
    className: d,
    style: t.style,
    onMouseEnter: t.onMouseEnter,
    onMouseLeave: t.onMouseLeave,
    onFocus: t.onFocus,
    onBlur: t.onBlur
  }, /* @__PURE__ */ c.createElement(Tn.Provider, {
    value: v
  }, t.children));
};
const jR = zR;
function Ki(e) {
  return !!(e.addonBefore || e.addonAfter);
}
function Bh(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
function Pf(e, t, n, r) {
  if (n) {
    var a = t;
    if (t.type === "click") {
      var i = e.cloneNode(!0);
      a = Object.create(t, {
        target: {
          value: i
        },
        currentTarget: {
          value: i
        }
      }), i.value = "", n(a);
      return;
    }
    if (r !== void 0) {
      a = Object.create(t, {
        target: {
          value: e
        },
        currentTarget: {
          value: e
        }
      }), e.value = r, n(a);
      return;
    }
    n(a);
  }
}
function HR(e, t) {
  if (e) {
    e.focus(t);
    var n = t || {}, r = n.cursor;
    if (r) {
      var a = e.value.length;
      switch (r) {
        case "start":
          e.setSelectionRange(0, 0);
          break;
        case "end":
          e.setSelectionRange(a, a);
          break;
        default:
          e.setSelectionRange(0, a);
      }
    }
  }
}
function Rf(e) {
  return typeof e > "u" || e === null ? "" : String(e);
}
var BR = function(t) {
  var n = t.inputElement, r = t.prefixCls, a = t.prefix, i = t.suffix, o = t.addonBefore, s = t.addonAfter, l = t.className, u = t.style, d = t.affixWrapperClassName, f = t.groupClassName, v = t.wrapperClassName, p = t.disabled, h = t.readOnly, g = t.focused, m = t.triggerFocus, y = t.allowClear, b = t.value, x = t.handleReset, C = t.hidden, E = De(null), S = function(k) {
    var A;
    (A = E.current) !== null && A !== void 0 && A.contains(k.target) && (m == null || m());
  }, w = function() {
    var k;
    if (!y)
      return null;
    var A = !p && !h && b, U = "".concat(r, "-clear-icon"), z = Le(y) === "object" && y !== null && y !== void 0 && y.clearIcon ? y.clearIcon : "✖";
    return /* @__PURE__ */ be.createElement("span", {
      onClick: x,
      onMouseDown: function(G) {
        return G.preventDefault();
      },
      className: ne(U, (k = {}, P(k, "".concat(U, "-hidden"), !A), P(k, "".concat(U, "-has-suffix"), !!i), k)),
      role: "button",
      tabIndex: -1
    }, z);
  }, N = /* @__PURE__ */ xr(n, {
    value: b,
    hidden: C
  });
  if (Bh(t)) {
    var O, _ = "".concat(r, "-affix-wrapper"), $ = ne(_, (O = {}, P(O, "".concat(_, "-disabled"), p), P(O, "".concat(_, "-focused"), g), P(O, "".concat(_, "-readonly"), h), P(O, "".concat(_, "-input-with-clear-btn"), i && y && b), O), !Ki(t) && l, d), I = (i || y) && /* @__PURE__ */ be.createElement("span", {
      className: "".concat(r, "-suffix")
    }, w(), i);
    N = /* @__PURE__ */ be.createElement("span", {
      className: $,
      style: u,
      hidden: !Ki(t) && C,
      onClick: S,
      ref: E
    }, a && /* @__PURE__ */ be.createElement("span", {
      className: "".concat(r, "-prefix")
    }, a), /* @__PURE__ */ xr(n, {
      style: null,
      value: b,
      hidden: null
    }), I);
  }
  if (Ki(t)) {
    var F = "".concat(r, "-group"), M = "".concat(F, "-addon"), V = ne("".concat(r, "-wrapper"), F, v), T = ne("".concat(r, "-group-wrapper"), l, f);
    return /* @__PURE__ */ be.createElement("span", {
      className: T,
      style: u,
      hidden: C
    }, /* @__PURE__ */ be.createElement("span", {
      className: V
    }, o && /* @__PURE__ */ be.createElement("span", {
      className: M
    }, o), /* @__PURE__ */ xr(N, {
      style: null,
      hidden: null
    }), s && /* @__PURE__ */ be.createElement("span", {
      className: M
    }, s)));
  }
  return N;
}, UR = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "type", "inputClassName"], WR = /* @__PURE__ */ aa(function(e, t) {
  var n = e.autoComplete, r = e.onChange, a = e.onFocus, i = e.onBlur, o = e.onPressEnter, s = e.onKeyDown, l = e.prefixCls, u = l === void 0 ? "rc-input" : l, d = e.disabled, f = e.htmlSize, v = e.className, p = e.maxLength, h = e.suffix, g = e.showCount, m = e.type, y = m === void 0 ? "text" : m, b = e.inputClassName, x = We(e, UR), C = un(e.defaultValue, {
    value: e.value
  }), E = X(C, 2), S = E[0], w = E[1], N = Ut(!1), O = X(N, 2), _ = O[0], $ = O[1], I = De(null), F = function(B) {
    I.current && HR(I.current, B);
  };
  ho(t, function() {
    return {
      focus: F,
      blur: function() {
        var B;
        (B = I.current) === null || B === void 0 || B.blur();
      },
      setSelectionRange: function(B, G, W) {
        var j;
        (j = I.current) === null || j === void 0 || j.setSelectionRange(B, G, W);
      },
      select: function() {
        var B;
        (B = I.current) === null || B === void 0 || B.select();
      },
      input: I.current
    };
  }), Dt(function() {
    $(function(z) {
      return z && d ? !1 : z;
    });
  }, [d]);
  var M = function(B) {
    e.value === void 0 && w(B.target.value), I.current && Pf(I.current, B, r);
  }, V = function(B) {
    o && B.key === "Enter" && o(B), s == null || s(B);
  }, T = function(B) {
    $(!0), a == null || a(B);
  }, R = function(B) {
    $(!1), i == null || i(B);
  }, k = function(B) {
    w(""), F(), I.current && Pf(I.current, B, r);
  }, A = function() {
    var B = ln(e, [
      "prefixCls",
      "onPressEnter",
      "addonBefore",
      "addonAfter",
      "prefix",
      "suffix",
      "allowClear",
      // Input elements must be either controlled or uncontrolled,
      // specify either the value prop, or the defaultValue prop, but not both.
      "defaultValue",
      "showCount",
      "affixWrapperClassName",
      "groupClassName",
      "inputClassName",
      "wrapperClassName",
      "htmlSize"
    ]);
    return /* @__PURE__ */ be.createElement("input", K({
      autoComplete: n
    }, B, {
      onChange: M,
      onFocus: T,
      onBlur: R,
      onKeyDown: V,
      className: ne(u, P({}, "".concat(u, "-disabled"), d), b, !Ki(e) && !Bh(e) && v),
      ref: I,
      size: f,
      type: y
    }));
  }, U = function() {
    var B = Number(p) > 0;
    if (h || g) {
      var G = Rf(S), W = pe(G).length, j = Le(g) === "object" ? g.formatter({
        value: G,
        count: W,
        maxLength: p
      }) : "".concat(W).concat(B ? " / ".concat(p) : "");
      return /* @__PURE__ */ be.createElement(be.Fragment, null, !!g && /* @__PURE__ */ be.createElement("span", {
        className: ne("".concat(u, "-show-count-suffix"), P({}, "".concat(u, "-show-count-has-suffix"), !!h))
      }, j), h);
    }
    return null;
  };
  return /* @__PURE__ */ be.createElement(BR, K({}, x, {
    prefixCls: u,
    className: v,
    inputElement: A(),
    handleReset: k,
    value: Rf(S),
    focused: _,
    triggerFocus: F,
    suffix: U(),
    disabled: d
  }));
});
function Uh(e, t) {
  var n = De([]), r = function() {
    n.current.push(setTimeout(function() {
      var i, o, s, l;
      !((i = e.current) === null || i === void 0) && i.input && ((o = e.current) === null || o === void 0 ? void 0 : o.input.getAttribute("type")) === "password" && (!((s = e.current) === null || s === void 0) && s.input.hasAttribute("value")) && ((l = e.current) === null || l === void 0 || l.input.removeAttribute("value"));
    }));
  };
  return Dt(function() {
    return t && r(), function() {
      return n.current.forEach(function(a) {
        a && clearTimeout(a);
      });
    };
  }, []), r;
}
function GR(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
var qR = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function YR(e) {
  return typeof e > "u" || e === null ? "" : String(e);
}
function Ms(e, t, n, r) {
  if (n) {
    var a = t;
    if (t.type === "click") {
      var i = e.cloneNode(!0);
      a = Object.create(t, {
        target: {
          value: i
        },
        currentTarget: {
          value: i
        }
      }), i.value = "", n(a);
      return;
    }
    if (r !== void 0) {
      a = Object.create(t, {
        target: {
          value: e
        },
        currentTarget: {
          value: e
        }
      }), e.value = r, n(a);
      return;
    }
    n(a);
  }
}
function XR(e, t) {
  if (e) {
    e.focus(t);
    var n = t || {}, r = n.cursor;
    if (r) {
      var a = e.value.length;
      switch (r) {
        case "start":
          e.setSelectionRange(0, 0);
          break;
        case "end":
          e.setSelectionRange(a, a);
          break;
        default:
          e.setSelectionRange(0, a);
          break;
      }
    }
  }
}
var JR = /* @__PURE__ */ aa(function(e, t) {
  var n, r, a, i = e.prefixCls, o = e.bordered, s = o === void 0 ? !0 : o, l = e.status, u = e.size, d = e.disabled, f = e.onBlur, v = e.onFocus, p = e.suffix, h = e.allowClear, g = e.addonAfter, m = e.addonBefore, y = e.className, b = e.onChange, x = qR(e, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "onChange"]), C = be.useContext(st), E = C.getPrefixCls, S = C.direction, w = C.input, N = E("input", i), O = De(null), _ = ii(N, S), $ = _.compactSize, I = _.compactItemClassnames, F = be.useContext(fr), M = $ || u || F, V = be.useContext(Rr), T = d ?? V, R = en(Tn), k = R.status, A = R.hasFeedback, U = R.feedbackIcon, z = ai(k, l), B = GR(e) || !!A, G = De(B);
  Dt(function() {
    var oe;
    B && !G.current && process.env.NODE_ENV !== "production" && Nt(document.activeElement === ((oe = O.current) === null || oe === void 0 ? void 0 : oe.input), "Input", "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ"), G.current = B;
  }, [B]);
  var W = Uh(O, !0), j = function(re) {
    W(), f == null || f(re);
  }, H = function(re) {
    W(), v == null || v(re);
  }, q = function(re) {
    W(), b == null || b(re);
  }, Y = (A || p) && /* @__PURE__ */ be.createElement(be.Fragment, null, p, A && U), J;
  return Le(h) === "object" && (h != null && h.clearIcon) ? J = h : h && (J = {
    clearIcon: /* @__PURE__ */ be.createElement(xu, null)
  }), /* @__PURE__ */ be.createElement(WR, K({
    ref: er(t, O),
    prefixCls: N,
    autoComplete: w == null ? void 0 : w.autoComplete
  }, x, {
    disabled: T || void 0,
    onBlur: j,
    onFocus: H,
    suffix: Y,
    allowClear: J,
    className: ne(y, I),
    onChange: q,
    addonAfter: g && /* @__PURE__ */ be.createElement(_l, null, /* @__PURE__ */ be.createElement(sf, {
      override: !0,
      status: !0
    }, g)),
    addonBefore: m && /* @__PURE__ */ be.createElement(_l, null, /* @__PURE__ */ be.createElement(sf, {
      override: !0,
      status: !0
    }, m)),
    inputClassName: ne((n = {}, P(n, "".concat(N, "-sm"), M === "small"), P(n, "".concat(N, "-lg"), M === "large"), P(n, "".concat(N, "-rtl"), S === "rtl"), P(n, "".concat(N, "-borderless"), !s), n), !B && ur(N, z)),
    affixWrapperClassName: ne((r = {}, P(r, "".concat(N, "-affix-wrapper-sm"), M === "small"), P(r, "".concat(N, "-affix-wrapper-lg"), M === "large"), P(r, "".concat(N, "-affix-wrapper-rtl"), S === "rtl"), P(r, "".concat(N, "-affix-wrapper-borderless"), !s), r), ur("".concat(N, "-affix-wrapper"), z, A)),
    wrapperClassName: ne(P({}, "".concat(N, "-group-rtl"), S === "rtl")),
    groupClassName: ne((a = {}, P(a, "".concat(N, "-group-wrapper-sm"), M === "small"), P(a, "".concat(N, "-group-wrapper-lg"), M === "large"), P(a, "".concat(N, "-group-wrapper-rtl"), S === "rtl"), a), ur("".concat(N, "-group-wrapper"), z, A))
  }));
});
const ec = JR;
var QR = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { tag: "path", attrs: { d: "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, name: "eye-invisible", theme: "outlined" };
const ZR = QR;
var Wh = function(t, n) {
  return /* @__PURE__ */ c.createElement(It, D(D({}, t), {}, {
    ref: n,
    icon: ZR
  }));
};
Wh.displayName = "EyeInvisibleOutlined";
const e2 = /* @__PURE__ */ c.forwardRef(Wh);
var t2 = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, n2 = function(t) {
  return t ? /* @__PURE__ */ c.createElement(VR, null) : /* @__PURE__ */ c.createElement(e2, null);
}, r2 = {
  click: "onClick",
  hover: "onMouseOver"
}, Gh = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var n = e.visibilityToggle, r = n === void 0 ? !0 : n, a = Le(r) === "object" && r.visible !== void 0, i = Ut(function() {
    return a ? r.visible : !1;
  }), o = X(i, 2), s = o[0], l = o[1], u = De(null);
  c.useEffect(function() {
    a && l(r.visible);
  }, [a, r]);
  var d = Uh(u), f = function() {
    var g = e.disabled;
    g || (s && d(), l(function(m) {
      var y, b = !m;
      return Le(r) === "object" && ((y = r.onVisibleChange) === null || y === void 0 || y.call(r, b)), b;
    }));
  }, v = function(g) {
    var m, y = e.action, b = y === void 0 ? "click" : y, x = e.iconRender, C = x === void 0 ? n2 : x, E = r2[b] || "", S = C(s), w = (m = {}, P(m, E, f), P(m, "className", "".concat(g, "-icon")), P(m, "key", "passwordIcon"), P(m, "onMouseDown", function(O) {
      O.preventDefault();
    }), P(m, "onMouseUp", function(O) {
      O.preventDefault();
    }), m);
    return /* @__PURE__ */ c.cloneElement(/* @__PURE__ */ c.isValidElement(S) ? S : /* @__PURE__ */ c.createElement("span", null, S), w);
  }, p = function(g) {
    var m = g.getPrefixCls, y = e.className, b = e.prefixCls, x = e.inputPrefixCls, C = e.size, E = t2(e, ["className", "prefixCls", "inputPrefixCls", "size"]), S = m("input", x), w = m("input-password", b), N = r && v(w), O = ne(w, y, P({}, "".concat(w, "-").concat(C), !!C)), _ = K(K({}, ln(E, ["suffix", "iconRender", "visibilityToggle"])), {
      type: s ? "text" : "password",
      className: O,
      prefixCls: S,
      suffix: N
    });
    return C && (_.size = C), /* @__PURE__ */ c.createElement(ec, K({
      ref: er(t, u)
    }, _));
  };
  return /* @__PURE__ */ c.createElement(ni, null, p);
});
process.env.NODE_ENV !== "production" && (Gh.displayName = "Password");
const a2 = Gh;
var i2 = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, qh = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var n, r = e.prefixCls, a = e.inputPrefixCls, i = e.className, o = e.size, s = e.suffix, l = e.enterButton, u = l === void 0 ? !1 : l, d = e.addonAfter, f = e.loading, v = e.disabled, p = e.onSearch, h = e.onChange, g = e.onCompositionStart, m = e.onCompositionEnd, y = i2(e, ["prefixCls", "inputPrefixCls", "className", "size", "suffix", "enterButton", "addonAfter", "loading", "disabled", "onSearch", "onChange", "onCompositionStart", "onCompositionEnd"]), b = c.useContext(st), x = b.getPrefixCls, C = b.direction, E = c.useContext(fr), S = c.useRef(!1), w = x("input-search", r), N = x("input", a), O = ii(w, C), _ = O.compactSize, $ = _ || o || E, I = c.useRef(null), F = function(H) {
    H && H.target && H.type === "click" && p && p(H.target.value, H), h && h(H);
  }, M = function(H) {
    var q;
    document.activeElement === ((q = I.current) === null || q === void 0 ? void 0 : q.input) && H.preventDefault();
  }, V = function(H) {
    var q, Y;
    p && p((Y = (q = I.current) === null || q === void 0 ? void 0 : q.input) === null || Y === void 0 ? void 0 : Y.value, H);
  }, T = function(H) {
    S.current || f || V(H);
  }, R = typeof u == "boolean" ? /* @__PURE__ */ c.createElement(Fo, null) : null, k = "".concat(w, "-button"), A, U = u || {}, z = U.type && U.type.__ANT_BUTTON === !0;
  z || U.type === "button" ? A = on(U, K({
    onMouseDown: M,
    onClick: function(H) {
      var q, Y;
      (Y = (q = U == null ? void 0 : U.props) === null || q === void 0 ? void 0 : q.onClick) === null || Y === void 0 || Y.call(q, H), V(H);
    },
    key: "enterButton"
  }, z ? {
    className: k,
    size: $
  } : {})) : A = /* @__PURE__ */ c.createElement(dr, {
    className: k,
    type: u ? "primary" : void 0,
    size: $,
    disabled: v,
    key: "enterButton",
    onMouseDown: M,
    onClick: V,
    loading: f,
    icon: R
  }, u), d && (A = [A, on(d, {
    key: "addonAfter"
  })]);
  var B = ne(w, (n = {}, P(n, "".concat(w, "-rtl"), C === "rtl"), P(n, "".concat(w, "-").concat($), !!$), P(n, "".concat(w, "-with-button"), !!u), n), i), G = function(H) {
    S.current = !0, g == null || g(H);
  }, W = function(H) {
    S.current = !1, m == null || m(H);
  };
  return /* @__PURE__ */ c.createElement(ec, K({
    ref: er(I, t),
    onPressEnter: T
  }, y, {
    size: $,
    onCompositionStart: G,
    onCompositionEnd: W,
    prefixCls: N,
    addonAfter: A,
    suffix: s,
    onChange: F,
    className: B,
    disabled: v
  }));
});
process.env.NODE_ENV !== "production" && (qh.displayName = "Search");
const o2 = qh;
var s2 = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`, l2 = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break"], $s = {}, En;
function u2(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
  if (t && $s[n])
    return $s[n];
  var r = window.getComputedStyle(e), a = r.getPropertyValue("box-sizing") || r.getPropertyValue("-moz-box-sizing") || r.getPropertyValue("-webkit-box-sizing"), i = parseFloat(r.getPropertyValue("padding-bottom")) + parseFloat(r.getPropertyValue("padding-top")), o = parseFloat(r.getPropertyValue("border-bottom-width")) + parseFloat(r.getPropertyValue("border-top-width")), s = l2.map(function(u) {
    return "".concat(u, ":").concat(r.getPropertyValue(u));
  }).join(";"), l = {
    sizingStyle: s,
    paddingSize: i,
    borderSize: o,
    boxSizing: a
  };
  return t && n && ($s[n] = l), l;
}
function c2(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  En || (En = document.createElement("textarea"), En.setAttribute("tab-index", "-1"), En.setAttribute("aria-hidden", "true"), document.body.appendChild(En)), e.getAttribute("wrap") ? En.setAttribute("wrap", e.getAttribute("wrap")) : En.removeAttribute("wrap");
  var a = u2(e, t), i = a.paddingSize, o = a.borderSize, s = a.boxSizing, l = a.sizingStyle;
  En.setAttribute("style", "".concat(l, ";").concat(s2)), En.value = e.value || e.placeholder || "";
  var u = void 0, d = void 0, f, v = En.scrollHeight;
  if (s === "border-box" ? v += o : s === "content-box" && (v -= i), n !== null || r !== null) {
    En.value = " ";
    var p = En.scrollHeight - i;
    n !== null && (u = p * n, s === "border-box" && (u = u + i + o), v = Math.max(u, v)), r !== null && (d = p * r, s === "border-box" && (d = d + i + o), f = v > d ? "" : "hidden", v = Math.min(d, v));
  }
  var h = {
    height: v,
    overflowY: f,
    resize: "none"
  };
  return u && (h.minHeight = u), d && (h.maxHeight = d), h;
}
var d2 = ["prefixCls", "onPressEnter", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"], Ds = 0, As = 1, Ls = 2, f2 = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-textarea" : n;
  e.onPressEnter;
  var a = e.defaultValue, i = e.value, o = e.autoSize, s = e.onResize, l = e.className, u = e.style, d = e.disabled, f = e.onChange, v = e.onInternalAutoSize, p = We(e, d2), h = un(a, {
    value: i,
    postState: function(j) {
      return j ?? "";
    }
  }), g = X(h, 2), m = g[0], y = g[1], b = function(j) {
    y(j.target.value), f == null || f(j);
  }, x = c.useRef();
  c.useImperativeHandle(t, function() {
    return {
      textArea: x.current
    };
  });
  var C = c.useMemo(function() {
    return o && Le(o) === "object" ? [o.minRows, o.maxRows] : [];
  }, [o]), E = X(C, 2), S = E[0], w = E[1], N = !!o, O = function() {
    try {
      if (document.activeElement === x.current) {
        var j = x.current, H = j.selectionStart, q = j.selectionEnd, Y = j.scrollTop;
        x.current.setSelectionRange(H, q), x.current.scrollTop = Y;
      }
    } catch {
    }
  }, _ = c.useState(Ls), $ = X(_, 2), I = $[0], F = $[1], M = c.useState(), V = X(M, 2), T = V[0], R = V[1], k = function() {
    F(Ds), process.env.NODE_ENV === "test" && (v == null || v());
  };
  rn(function() {
    N && k();
  }, [i, S, w, N]), rn(function() {
    if (I === Ds)
      F(As);
    else if (I === As) {
      var W = c2(x.current, !1, S, w);
      F(Ls), R(W);
    } else
      O();
  }, [I]);
  var A = c.useRef(), U = function() {
    mt.cancel(A.current);
  }, z = function(j) {
    I === Ls && (s == null || s(j), o && (U(), A.current = mt(function() {
      k();
    })));
  };
  c.useEffect(function() {
    return U;
  }, []);
  var B = N ? T : null, G = D(D({}, u), B);
  return (I === Ds || I === As) && (G.overflowY = "hidden", G.overflowX = "hidden"), /* @__PURE__ */ c.createElement(zn, {
    onResize: z,
    disabled: !(o || s)
  }, /* @__PURE__ */ c.createElement("textarea", K({}, p, {
    ref: x,
    style: G,
    className: ne(r, l, P({}, "".concat(r, "-disabled"), d)),
    disabled: d,
    value: m,
    onChange: b
  })));
}), v2 = /* @__PURE__ */ function(e) {
  Gt(n, e);
  var t = qt(n);
  function n(r) {
    var a;
    Kt(this, n), a = t.call(this, r), a.resizableTextArea = void 0, a.focus = function() {
      a.resizableTextArea.textArea.focus();
    }, a.saveTextArea = function(o) {
      a.resizableTextArea = o;
    }, a.handleChange = function(o) {
      var s = a.props.onChange;
      a.setValue(o.target.value), s && s(o);
    }, a.handleKeyDown = function(o) {
      var s = a.props, l = s.onPressEnter, u = s.onKeyDown;
      o.keyCode === 13 && l && l(o), u && u(o);
    };
    var i = typeof r.value > "u" || r.value === null ? r.defaultValue : r.value;
    return a.state = {
      value: i
    }, a;
  }
  return Vt(n, [{
    key: "setValue",
    value: function(a, i) {
      "value" in this.props || this.setState({
        value: a
      }, i);
    }
  }, {
    key: "blur",
    value: function() {
      this.resizableTextArea.textArea.blur();
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ c.createElement(f2, K({}, this.props, {
        value: this.state.value,
        onKeyDown: this.handleKeyDown,
        onChange: this.handleChange,
        ref: this.saveTextArea
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(a) {
      return "value" in a ? {
        value: a.value
      } : null;
    }
  }]), n;
}(c.Component), p2 = In("text", "input");
function m2(e) {
  return !!(e.addonBefore || e.addonAfter);
}
var h2 = /* @__PURE__ */ function(e) {
  Gt(n, e);
  var t = qt(n);
  function n() {
    return Kt(this, n), t.apply(this, arguments);
  }
  return Vt(n, [{
    key: "renderClearIcon",
    value: function(a) {
      var i, o = this.props, s = o.value, l = o.disabled, u = o.readOnly, d = o.handleReset, f = o.suffix, v = !l && !u && s, p = "".concat(a, "-clear-icon");
      return /* @__PURE__ */ c.createElement(xu, {
        onClick: d,
        // Do not trigger onBlur when clear input
        // https://github.com/ant-design/ant-design/issues/31200
        onMouseDown: function(g) {
          return g.preventDefault();
        },
        className: ne((i = {}, P(i, "".concat(p, "-hidden"), !v), P(i, "".concat(p, "-has-suffix"), !!f), i), p),
        role: "button"
      });
    }
  }, {
    key: "renderTextAreaWithClearIcon",
    value: function(a, i, o) {
      var s, l = this.props, u = l.value, d = l.allowClear, f = l.className, v = l.style, p = l.direction, h = l.bordered, g = l.hidden, m = l.status, y = o.status, b = o.hasFeedback;
      if (!d)
        return on(i, {
          value: u
        });
      var x = ne("".concat(a, "-affix-wrapper"), "".concat(a, "-affix-wrapper-textarea-with-clear-btn"), ur("".concat(a, "-affix-wrapper"), ai(y, m), b), (s = {}, P(s, "".concat(a, "-affix-wrapper-rtl"), p === "rtl"), P(s, "".concat(a, "-affix-wrapper-borderless"), !h), P(s, "".concat(f), !m2(this.props) && f), s));
      return /* @__PURE__ */ c.createElement("span", {
        className: x,
        style: v,
        hidden: g
      }, on(i, {
        style: null,
        value: u
      }), this.renderClearIcon(a));
    }
  }, {
    key: "render",
    value: function() {
      var a = this;
      return /* @__PURE__ */ c.createElement(Tn.Consumer, null, function(i) {
        var o = a.props, s = o.prefixCls, l = o.inputType, u = o.element;
        if (l === p2[0])
          return a.renderTextAreaWithClearIcon(s, u, i);
      });
    }
  }]), n;
}(c.Component);
const g2 = h2;
var y2 = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function Yh(e, t) {
  return pe(e || "").slice(0, t).join("");
}
function kf(e, t, n, r) {
  var a = n;
  return e ? a = Yh(n, r) : pe(t || "").length < n.length && pe(n || "").length > r && (a = t), a;
}
var b2 = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var n, r = e.prefixCls, a = e.bordered, i = a === void 0 ? !0 : a, o = e.showCount, s = o === void 0 ? !1 : o, l = e.maxLength, u = e.className, d = e.style, f = e.size, v = e.disabled, p = e.onCompositionStart, h = e.onCompositionEnd, g = e.onChange, m = e.status, y = y2(e, ["prefixCls", "bordered", "showCount", "maxLength", "className", "style", "size", "disabled", "onCompositionStart", "onCompositionEnd", "onChange", "status"]), b = c.useContext(st), x = b.getPrefixCls, C = b.direction, E = c.useContext(fr), S = c.useContext(Rr), w = v ?? S, N = c.useContext(Tn), O = N.status, _ = N.hasFeedback, $ = N.isFormItemInput, I = N.feedbackIcon, F = ai(O, m), M = c.useRef(null), V = c.useRef(null), T = c.useState(!1), R = X(T, 2), k = R[0], A = R[1], U = c.useRef(), z = c.useRef(0), B = un(y.defaultValue, {
    value: y.value
  }), G = X(B, 2), W = G[0], j = G[1], H = y.hidden, q = function(ie, ee) {
    y.value === void 0 && (j(ie), ee == null || ee());
  }, Y = Number(l) > 0, J = function(ie) {
    A(!0), U.current = W, z.current = ie.currentTarget.selectionStart, p == null || p(ie);
  }, oe = function(ie) {
    var ee;
    A(!1);
    var te = ie.currentTarget.value;
    if (Y) {
      var xe = z.current >= l + 1 || z.current === ((ee = U.current) === null || ee === void 0 ? void 0 : ee.length);
      te = kf(xe, U.current, te, l);
    }
    te !== W && (q(te), Ms(ie.currentTarget, ie, g, te)), h == null || h(ie);
  }, re = function(ie) {
    var ee = ie.target.value;
    if (!k && Y) {
      var te = ie.target.selectionStart >= l + 1 || ie.target.selectionStart === ee.length || !ie.target.selectionStart;
      ee = kf(te, W, ee, l);
    }
    q(ee), Ms(ie.currentTarget, ie, g, ee);
  }, de = function(ie) {
    var ee, te, xe;
    q(""), (ee = M.current) === null || ee === void 0 || ee.focus(), Ms((xe = (te = M.current) === null || te === void 0 ? void 0 : te.resizableTextArea) === null || xe === void 0 ? void 0 : xe.textArea, ie, g);
  }, Z = x("input", r);
  c.useImperativeHandle(t, function() {
    var ae;
    return {
      resizableTextArea: (ae = M.current) === null || ae === void 0 ? void 0 : ae.resizableTextArea,
      focus: function(ee) {
        var te, xe;
        XR((xe = (te = M.current) === null || te === void 0 ? void 0 : te.resizableTextArea) === null || xe === void 0 ? void 0 : xe.textArea, ee);
      },
      blur: function() {
        var ee;
        return (ee = M.current) === null || ee === void 0 ? void 0 : ee.blur();
      }
    };
  });
  var Q = /* @__PURE__ */ c.createElement(v2, K({}, ln(y, ["allowClear"]), {
    disabled: w,
    className: ne((n = {}, P(n, "".concat(Z, "-borderless"), !i), P(n, u, u && !s), P(n, "".concat(Z, "-sm"), E === "small" || f === "small"), P(n, "".concat(Z, "-lg"), E === "large" || f === "large"), n), ur(Z, F)),
    style: s ? {
      resize: d == null ? void 0 : d.resize
    } : d,
    prefixCls: Z,
    onCompositionStart: J,
    onChange: re,
    onCompositionEnd: oe,
    ref: M
  })), ce = YR(W);
  !k && Y && (y.value === null || y.value === void 0) && (ce = Yh(ce, l));
  var Ce = /* @__PURE__ */ c.createElement(g2, K({
    disabled: w
  }, y, {
    prefixCls: Z,
    direction: C,
    inputType: "text",
    value: ce,
    element: Q,
    handleReset: de,
    ref: V,
    bordered: i,
    status: m,
    style: s ? void 0 : d
  }));
  if (s || _) {
    var we, ke = pe(ce).length, ve = "";
    return Le(s) === "object" ? ve = s.formatter({
      value: ce,
      count: ke,
      maxLength: l
    }) : ve = "".concat(ke).concat(Y ? " / ".concat(l) : ""), /* @__PURE__ */ c.createElement("div", {
      hidden: H,
      className: ne("".concat(Z, "-textarea"), (we = {}, P(we, "".concat(Z, "-textarea-rtl"), C === "rtl"), P(we, "".concat(Z, "-textarea-show-count"), s), P(we, "".concat(Z, "-textarea-in-form-item"), $), we), ur("".concat(Z, "-textarea"), F, _), u),
      style: d,
      "data-count": ve
    }, Ce, _ && /* @__PURE__ */ c.createElement("span", {
      className: "".concat(Z, "-textarea-suffix")
    }, I));
  }
  return Ce;
});
const C2 = b2;
var ui = ec;
ui.Group = jR;
ui.Search = o2;
ui.TextArea = C2;
ui.Password = a2;
const Xh = ui;
var x2 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z" } }] }, name: "double-left", theme: "outlined" };
const S2 = x2;
var Jh = function(t, n) {
  return /* @__PURE__ */ c.createElement(It, D(D({}, t), {}, {
    ref: n,
    icon: S2
  }));
};
Jh.displayName = "DoubleLeftOutlined";
const E2 = /* @__PURE__ */ c.forwardRef(Jh);
var w2 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z" } }] }, name: "double-right", theme: "outlined" };
const N2 = w2;
var Qh = function(t, n) {
  return /* @__PURE__ */ c.createElement(It, D(D({}, t), {}, {
    ref: n,
    icon: N2
  }));
};
Qh.displayName = "DoubleRightOutlined";
const O2 = /* @__PURE__ */ c.forwardRef(Qh);
var Na = function(t) {
  var n, r = "".concat(t.rootPrefixCls, "-item"), a = ne(r, "".concat(r, "-").concat(t.page), (n = {}, P(n, "".concat(r, "-active"), t.active), P(n, "".concat(r, "-disabled"), !t.page), P(n, t.className, !!t.className), n)), i = function() {
    t.onClick(t.page);
  }, o = function(l) {
    t.onKeyPress(l, t.onClick, t.page);
  };
  return /* @__PURE__ */ be.createElement("li", {
    title: t.showTitle ? t.page : null,
    className: a,
    onClick: i,
    onKeyPress: o,
    tabIndex: "0"
  }, t.itemRender(t.page, "page", /* @__PURE__ */ be.createElement("a", {
    rel: "nofollow"
  }, t.page)));
};
const yr = {
  ZERO: 48,
  NINE: 57,
  NUMPAD_ZERO: 96,
  NUMPAD_NINE: 105,
  BACKSPACE: 8,
  DELETE: 46,
  ENTER: 13,
  ARROW_UP: 38,
  ARROW_DOWN: 40
};
var Zh = /* @__PURE__ */ function(e) {
  Gt(n, e);
  var t = qt(n);
  function n() {
    var r;
    Kt(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), r.state = {
      goInputText: ""
    }, r.buildOptionText = function(s) {
      return "".concat(s, " ").concat(r.props.locale.items_per_page);
    }, r.changeSize = function(s) {
      r.props.changeSize(Number(s));
    }, r.handleChange = function(s) {
      r.setState({
        goInputText: s.target.value
      });
    }, r.handleBlur = function(s) {
      var l = r.props, u = l.goButton, d = l.quickGo, f = l.rootPrefixCls, v = r.state.goInputText;
      u || v === "" || (r.setState({
        goInputText: ""
      }), !(s.relatedTarget && (s.relatedTarget.className.indexOf("".concat(f, "-item-link")) >= 0 || s.relatedTarget.className.indexOf("".concat(f, "-item")) >= 0)) && d(r.getValidValue()));
    }, r.go = function(s) {
      var l = r.state.goInputText;
      l !== "" && (s.keyCode === yr.ENTER || s.type === "click") && (r.setState({
        goInputText: ""
      }), r.props.quickGo(r.getValidValue()));
    }, r;
  }
  return Vt(n, [{
    key: "getValidValue",
    value: function() {
      var a = this.state.goInputText;
      return !a || isNaN(a) ? void 0 : Number(a);
    }
  }, {
    key: "getPageSizeOptions",
    value: function() {
      var a = this.props, i = a.pageSize, o = a.pageSizeOptions;
      return o.some(function(s) {
        return s.toString() === i.toString();
      }) ? o : o.concat([i.toString()]).sort(function(s, l) {
        var u = isNaN(Number(s)) ? 0 : Number(s), d = isNaN(Number(l)) ? 0 : Number(l);
        return u - d;
      });
    }
  }, {
    key: "render",
    value: function() {
      var a = this, i = this.props, o = i.pageSize, s = i.locale, l = i.rootPrefixCls, u = i.changeSize, d = i.quickGo, f = i.goButton, v = i.selectComponentClass, p = i.buildOptionText, h = i.selectPrefixCls, g = i.disabled, m = this.state.goInputText, y = "".concat(l, "-options"), b = v, x = null, C = null, E = null;
      if (!u && !d)
        return null;
      var S = this.getPageSizeOptions();
      if (u && b) {
        var w = S.map(function(N, O) {
          return /* @__PURE__ */ be.createElement(b.Option, {
            key: O,
            value: N.toString()
          }, (p || a.buildOptionText)(N));
        });
        x = /* @__PURE__ */ be.createElement(b, {
          disabled: g,
          prefixCls: h,
          showSearch: !1,
          className: "".concat(y, "-size-changer"),
          optionLabelProp: "children",
          dropdownMatchSelectWidth: !1,
          value: (o || S[0]).toString(),
          onChange: this.changeSize,
          getPopupContainer: function(O) {
            return O.parentNode;
          },
          "aria-label": s.page_size,
          defaultOpen: !1
        }, w);
      }
      return d && (f && (E = typeof f == "boolean" ? /* @__PURE__ */ be.createElement("button", {
        type: "button",
        onClick: this.go,
        onKeyUp: this.go,
        disabled: g,
        className: "".concat(y, "-quick-jumper-button")
      }, s.jump_to_confirm) : /* @__PURE__ */ be.createElement("span", {
        onClick: this.go,
        onKeyUp: this.go
      }, f)), C = /* @__PURE__ */ be.createElement("div", {
        className: "".concat(y, "-quick-jumper")
      }, s.jump_to, /* @__PURE__ */ be.createElement("input", {
        disabled: g,
        type: "text",
        value: m,
        onChange: this.handleChange,
        onKeyUp: this.go,
        onBlur: this.handleBlur,
        "aria-label": s.page
      }), s.page, E)), /* @__PURE__ */ be.createElement("li", {
        className: "".concat(y)
      }, x, C);
    }
  }]), n;
}(be.Component);
Zh.defaultProps = {
  pageSizeOptions: ["10", "20", "50", "100"]
};
const P2 = {
  // Options.jsx
  items_per_page: "条/页",
  jump_to: "跳至",
  jump_to_confirm: "确定",
  page: "页",
  // Pagination.jsx
  prev_page: "上一页",
  next_page: "下一页",
  prev_5: "向前 5 页",
  next_5: "向后 5 页",
  prev_3: "向前 3 页",
  next_3: "向后 3 页",
  page_size: "页码"
};
function Vl() {
}
function Tf(e) {
  var t = Number(e);
  return (
    // eslint-disable-next-line no-restricted-globals
    typeof t == "number" && !isNaN(t) && isFinite(t) && Math.floor(t) === t
  );
}
function R2(e, t, n) {
  return n;
}
function ar(e, t, n) {
  var r = typeof e > "u" ? t.pageSize : e;
  return Math.floor((n.total - 1) / r) + 1;
}
var eg = /* @__PURE__ */ function(e) {
  Gt(n, e);
  var t = qt(n);
  function n(r) {
    var a;
    Kt(this, n), a = t.call(this, r), a.getJumpPrevPage = function() {
      return Math.max(1, a.state.current - (a.props.showLessItems ? 3 : 5));
    }, a.getJumpNextPage = function() {
      return Math.min(ar(void 0, a.state, a.props), a.state.current + (a.props.showLessItems ? 3 : 5));
    }, a.getItemIcon = function(u, d) {
      var f = a.props.prefixCls, v = u || /* @__PURE__ */ be.createElement("button", {
        type: "button",
        "aria-label": d,
        className: "".concat(f, "-item-link")
      });
      return typeof u == "function" && (v = /* @__PURE__ */ be.createElement(u, D({}, a.props))), v;
    }, a.savePaginationNode = function(u) {
      a.paginationNode = u;
    }, a.isValid = function(u) {
      var d = a.props.total;
      return Tf(u) && u !== a.state.current && Tf(d) && d > 0;
    }, a.shouldDisplayQuickJumper = function() {
      var u = a.props, d = u.showQuickJumper, f = u.total, v = a.state.pageSize;
      return f <= v ? !1 : d;
    }, a.handleKeyDown = function(u) {
      (u.keyCode === yr.ARROW_UP || u.keyCode === yr.ARROW_DOWN) && u.preventDefault();
    }, a.handleKeyUp = function(u) {
      var d = a.getValidValue(u), f = a.state.currentInputValue;
      d !== f && a.setState({
        currentInputValue: d
      }), u.keyCode === yr.ENTER ? a.handleChange(d) : u.keyCode === yr.ARROW_UP ? a.handleChange(d - 1) : u.keyCode === yr.ARROW_DOWN && a.handleChange(d + 1);
    }, a.handleBlur = function(u) {
      var d = a.getValidValue(u);
      a.handleChange(d);
    }, a.changePageSize = function(u) {
      var d = a.state.current, f = ar(u, a.state, a.props);
      d = d > f ? f : d, f === 0 && (d = a.state.current), typeof u == "number" && ("pageSize" in a.props || a.setState({
        pageSize: u
      }), "current" in a.props || a.setState({
        current: d,
        currentInputValue: d
      })), a.props.onShowSizeChange(d, u), "onChange" in a.props && a.props.onChange && a.props.onChange(d, u);
    }, a.handleChange = function(u) {
      var d = a.props, f = d.disabled, v = d.onChange, p = a.state, h = p.pageSize, g = p.current, m = p.currentInputValue;
      if (a.isValid(u) && !f) {
        var y = ar(void 0, a.state, a.props), b = u;
        return u > y ? b = y : u < 1 && (b = 1), "current" in a.props || a.setState({
          current: b
        }), b !== m && a.setState({
          currentInputValue: b
        }), v(b, h), b;
      }
      return g;
    }, a.prev = function() {
      a.hasPrev() && a.handleChange(a.state.current - 1);
    }, a.next = function() {
      a.hasNext() && a.handleChange(a.state.current + 1);
    }, a.jumpPrev = function() {
      a.handleChange(a.getJumpPrevPage());
    }, a.jumpNext = function() {
      a.handleChange(a.getJumpNextPage());
    }, a.hasPrev = function() {
      return a.state.current > 1;
    }, a.hasNext = function() {
      return a.state.current < ar(void 0, a.state, a.props);
    }, a.runIfEnter = function(u, d) {
      if (u.key === "Enter" || u.charCode === 13) {
        for (var f = arguments.length, v = new Array(f > 2 ? f - 2 : 0), p = 2; p < f; p++)
          v[p - 2] = arguments[p];
        d.apply(void 0, v);
      }
    }, a.runIfEnterPrev = function(u) {
      a.runIfEnter(u, a.prev);
    }, a.runIfEnterNext = function(u) {
      a.runIfEnter(u, a.next);
    }, a.runIfEnterJumpPrev = function(u) {
      a.runIfEnter(u, a.jumpPrev);
    }, a.runIfEnterJumpNext = function(u) {
      a.runIfEnter(u, a.jumpNext);
    }, a.handleGoTO = function(u) {
      (u.keyCode === yr.ENTER || u.type === "click") && a.handleChange(a.state.currentInputValue);
    };
    var i = r.onChange !== Vl, o = "current" in r;
    o && !i && console.warn("Warning: You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.");
    var s = r.defaultCurrent;
    "current" in r && (s = r.current);
    var l = r.defaultPageSize;
    return "pageSize" in r && (l = r.pageSize), s = Math.min(s, ar(l, void 0, r)), a.state = {
      current: s,
      currentInputValue: s,
      pageSize: l
    }, a;
  }
  return Vt(n, [{
    key: "componentDidUpdate",
    value: function(a, i) {
      var o = this.props.prefixCls;
      if (i.current !== this.state.current && this.paginationNode) {
        var s = this.paginationNode.querySelector(".".concat(o, "-item-").concat(i.current));
        s && document.activeElement === s && s.blur();
      }
    }
  }, {
    key: "getValidValue",
    value: function(a) {
      var i = a.target.value, o = ar(void 0, this.state, this.props), s = this.state.currentInputValue, l;
      return i === "" ? l = i : isNaN(Number(i)) ? l = s : i >= o ? l = o : l = Number(i), l;
    }
  }, {
    key: "getShowSizeChanger",
    value: function() {
      var a = this.props, i = a.showSizeChanger, o = a.total, s = a.totalBoundaryShowSizeChanger;
      return typeof i < "u" ? i : o > s;
    }
  }, {
    key: "renderPrev",
    value: function(a) {
      var i = this.props, o = i.prevIcon, s = i.itemRender, l = s(a, "prev", this.getItemIcon(o, "prev page")), u = !this.hasPrev();
      return /* @__PURE__ */ fc(l) ? /* @__PURE__ */ xr(l, {
        disabled: u
      }) : l;
    }
  }, {
    key: "renderNext",
    value: function(a) {
      var i = this.props, o = i.nextIcon, s = i.itemRender, l = s(a, "next", this.getItemIcon(o, "next page")), u = !this.hasNext();
      return /* @__PURE__ */ fc(l) ? /* @__PURE__ */ xr(l, {
        disabled: u
      }) : l;
    }
  }, {
    key: "render",
    value: function() {
      var a = this, i = this.props, o = i.prefixCls, s = i.className, l = i.style, u = i.disabled, d = i.hideOnSinglePage, f = i.total, v = i.locale, p = i.showQuickJumper, h = i.showLessItems, g = i.showTitle, m = i.showTotal, y = i.simple, b = i.itemRender, x = i.showPrevNextJumpers, C = i.jumpPrevIcon, E = i.jumpNextIcon, S = i.selectComponentClass, w = i.selectPrefixCls, N = i.pageSizeOptions, O = this.state, _ = O.current, $ = O.pageSize, I = O.currentInputValue;
      if (d === !0 && f <= $)
        return null;
      var F = ar(void 0, this.state, this.props), M = [], V = null, T = null, R = null, k = null, A = null, U = p && p.goButton, z = h ? 1 : 2, B = _ - 1 > 0 ? _ - 1 : 0, G = _ + 1 < F ? _ + 1 : F, W = Object.keys(this.props).reduce(function(we, ke) {
        return (ke.substr(0, 5) === "data-" || ke.substr(0, 5) === "aria-" || ke === "role") && (we[ke] = a.props[ke]), we;
      }, {}), j = m && /* @__PURE__ */ be.createElement("li", {
        className: "".concat(o, "-total-text")
      }, m(f, [f === 0 ? 0 : (_ - 1) * $ + 1, _ * $ > f ? f : _ * $]));
      if (y)
        return U && (typeof U == "boolean" ? A = /* @__PURE__ */ be.createElement("button", {
          type: "button",
          onClick: this.handleGoTO,
          onKeyUp: this.handleGoTO
        }, v.jump_to_confirm) : A = /* @__PURE__ */ be.createElement("span", {
          onClick: this.handleGoTO,
          onKeyUp: this.handleGoTO
        }, U), A = /* @__PURE__ */ be.createElement("li", {
          title: g ? "".concat(v.jump_to).concat(_, "/").concat(F) : null,
          className: "".concat(o, "-simple-pager")
        }, A)), /* @__PURE__ */ be.createElement("ul", K({
          className: ne(o, "".concat(o, "-simple"), P({}, "".concat(o, "-disabled"), u), s),
          style: l,
          ref: this.savePaginationNode
        }, W), j, /* @__PURE__ */ be.createElement("li", {
          title: g ? v.prev_page : null,
          onClick: this.prev,
          tabIndex: this.hasPrev() ? 0 : null,
          onKeyPress: this.runIfEnterPrev,
          className: ne("".concat(o, "-prev"), P({}, "".concat(o, "-disabled"), !this.hasPrev())),
          "aria-disabled": !this.hasPrev()
        }, this.renderPrev(B)), /* @__PURE__ */ be.createElement("li", {
          title: g ? "".concat(_, "/").concat(F) : null,
          className: "".concat(o, "-simple-pager")
        }, /* @__PURE__ */ be.createElement("input", {
          type: "text",
          value: I,
          disabled: u,
          onKeyDown: this.handleKeyDown,
          onKeyUp: this.handleKeyUp,
          onChange: this.handleKeyUp,
          onBlur: this.handleBlur,
          size: "3"
        }), /* @__PURE__ */ be.createElement("span", {
          className: "".concat(o, "-slash")
        }, "/"), F), /* @__PURE__ */ be.createElement("li", {
          title: g ? v.next_page : null,
          onClick: this.next,
          tabIndex: this.hasPrev() ? 0 : null,
          onKeyPress: this.runIfEnterNext,
          className: ne("".concat(o, "-next"), P({}, "".concat(o, "-disabled"), !this.hasNext())),
          "aria-disabled": !this.hasNext()
        }, this.renderNext(G)), A);
      if (F <= 3 + z * 2) {
        var H = {
          locale: v,
          rootPrefixCls: o,
          onClick: this.handleChange,
          onKeyPress: this.runIfEnter,
          showTitle: g,
          itemRender: b
        };
        F || M.push(/* @__PURE__ */ be.createElement(Na, K({}, H, {
          key: "noPager",
          page: 1,
          className: "".concat(o, "-item-disabled")
        })));
        for (var q = 1; q <= F; q += 1) {
          var Y = _ === q;
          M.push(/* @__PURE__ */ be.createElement(Na, K({}, H, {
            key: q,
            page: q,
            active: Y
          })));
        }
      } else {
        var J = h ? v.prev_3 : v.prev_5, oe = h ? v.next_3 : v.next_5;
        x && (V = /* @__PURE__ */ be.createElement("li", {
          title: g ? J : null,
          key: "prev",
          onClick: this.jumpPrev,
          tabIndex: "0",
          onKeyPress: this.runIfEnterJumpPrev,
          className: ne("".concat(o, "-jump-prev"), P({}, "".concat(o, "-jump-prev-custom-icon"), !!C))
        }, b(this.getJumpPrevPage(), "jump-prev", this.getItemIcon(C, "prev page"))), T = /* @__PURE__ */ be.createElement("li", {
          title: g ? oe : null,
          key: "next",
          tabIndex: "0",
          onClick: this.jumpNext,
          onKeyPress: this.runIfEnterJumpNext,
          className: ne("".concat(o, "-jump-next"), P({}, "".concat(o, "-jump-next-custom-icon"), !!E))
        }, b(this.getJumpNextPage(), "jump-next", this.getItemIcon(E, "next page")))), k = /* @__PURE__ */ be.createElement(Na, {
          locale: v,
          last: !0,
          rootPrefixCls: o,
          onClick: this.handleChange,
          onKeyPress: this.runIfEnter,
          key: F,
          page: F,
          active: !1,
          showTitle: g,
          itemRender: b
        }), R = /* @__PURE__ */ be.createElement(Na, {
          locale: v,
          rootPrefixCls: o,
          onClick: this.handleChange,
          onKeyPress: this.runIfEnter,
          key: 1,
          page: 1,
          active: !1,
          showTitle: g,
          itemRender: b
        });
        var re = Math.max(1, _ - z), de = Math.min(_ + z, F);
        _ - 1 <= z && (de = 1 + z * 2), F - _ <= z && (re = F - z * 2);
        for (var Z = re; Z <= de; Z += 1) {
          var Q = _ === Z;
          M.push(/* @__PURE__ */ be.createElement(Na, {
            locale: v,
            rootPrefixCls: o,
            onClick: this.handleChange,
            onKeyPress: this.runIfEnter,
            key: Z,
            page: Z,
            active: Q,
            showTitle: g,
            itemRender: b
          }));
        }
        _ - 1 >= z * 2 && _ !== 3 && (M[0] = /* @__PURE__ */ xr(M[0], {
          className: "".concat(o, "-item-after-jump-prev")
        }), M.unshift(V)), F - _ >= z * 2 && _ !== F - 2 && (M[M.length - 1] = /* @__PURE__ */ xr(M[M.length - 1], {
          className: "".concat(o, "-item-before-jump-next")
        }), M.push(T)), re !== 1 && M.unshift(R), de !== F && M.push(k);
      }
      var ce = !this.hasPrev() || !F, Ce = !this.hasNext() || !F;
      return /* @__PURE__ */ be.createElement("ul", K({
        className: ne(o, s, P({}, "".concat(o, "-disabled"), u)),
        style: l,
        ref: this.savePaginationNode
      }, W), j, /* @__PURE__ */ be.createElement("li", {
        title: g ? v.prev_page : null,
        onClick: this.prev,
        tabIndex: ce ? null : 0,
        onKeyPress: this.runIfEnterPrev,
        className: ne("".concat(o, "-prev"), P({}, "".concat(o, "-disabled"), ce)),
        "aria-disabled": ce
      }, this.renderPrev(B)), M, /* @__PURE__ */ be.createElement("li", {
        title: g ? v.next_page : null,
        onClick: this.next,
        tabIndex: Ce ? null : 0,
        onKeyPress: this.runIfEnterNext,
        className: ne("".concat(o, "-next"), P({}, "".concat(o, "-disabled"), Ce)),
        "aria-disabled": Ce
      }, this.renderNext(G)), /* @__PURE__ */ be.createElement(Zh, {
        disabled: u,
        locale: v,
        rootPrefixCls: o,
        selectComponentClass: S,
        selectPrefixCls: w,
        changeSize: this.getShowSizeChanger() ? this.changePageSize : null,
        current: _,
        pageSize: $,
        pageSizeOptions: N,
        quickGo: this.shouldDisplayQuickJumper() ? this.handleChange : null,
        goButton: U
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(a, i) {
      var o = {};
      if ("current" in a && (o.current = a.current, a.current !== i.current && (o.currentInputValue = o.current)), "pageSize" in a && a.pageSize !== i.pageSize) {
        var s = i.current, l = ar(a.pageSize, i, a);
        s = s > l ? l : s, "current" in a || (o.current = s, o.currentInputValue = s), o.pageSize = a.pageSize;
      }
      return o;
    }
  }]), n;
}(be.Component);
eg.defaultProps = {
  defaultCurrent: 1,
  total: 0,
  defaultPageSize: 10,
  onChange: Vl,
  className: "",
  selectPrefixCls: "rc-select",
  prefixCls: "rc-pagination",
  selectComponentClass: null,
  hideOnSinglePage: !1,
  showPrevNextJumpers: !0,
  showQuickJumper: !1,
  showLessItems: !1,
  showTitle: !0,
  onShowSizeChange: Vl,
  locale: P2,
  style: {},
  itemRender: R2,
  totalBoundaryShowSizeChanger: 50
};
var tg = function(t) {
  return /* @__PURE__ */ c.createElement(Do, K({}, t, {
    size: "small"
  }));
}, ng = function(t) {
  return /* @__PURE__ */ c.createElement(Do, K({}, t, {
    size: "middle"
  }));
};
tg.Option = Do.Option;
ng.Option = Do.Option;
var k2 = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, T2 = function(t) {
  var n = t.prefixCls, r = t.selectPrefixCls, a = t.className, i = t.size, o = t.locale, s = t.selectComponentClass, l = t.responsive, u = t.showSizeChanger, d = k2(t, ["prefixCls", "selectPrefixCls", "className", "size", "locale", "selectComponentClass", "responsive", "showSizeChanger"]), f = Jm(l), v = f.xs, p = c.useContext(st), h = p.getPrefixCls, g = p.direction, m = p.pagination, y = m === void 0 ? {} : m, b = h("pagination", n), x = u ?? y.showSizeChanger, C = function() {
    var S = /* @__PURE__ */ c.createElement("span", {
      className: "".concat(b, "-item-ellipsis")
    }, "•••"), w = /* @__PURE__ */ c.createElement("button", {
      className: "".concat(b, "-item-link"),
      type: "button",
      tabIndex: -1
    }, /* @__PURE__ */ c.createElement(Wa, null)), N = /* @__PURE__ */ c.createElement("button", {
      className: "".concat(b, "-item-link"),
      type: "button",
      tabIndex: -1
    }, /* @__PURE__ */ c.createElement(ea, null)), O = /* @__PURE__ */ c.createElement("a", {
      className: "".concat(b, "-item-link")
    }, /* @__PURE__ */ c.createElement("div", {
      className: "".concat(b, "-item-container")
    }, /* @__PURE__ */ c.createElement(E2, {
      className: "".concat(b, "-item-link-icon")
    }), S)), _ = /* @__PURE__ */ c.createElement("a", {
      className: "".concat(b, "-item-link")
    }, /* @__PURE__ */ c.createElement("div", {
      className: "".concat(b, "-item-container")
    }, /* @__PURE__ */ c.createElement(O2, {
      className: "".concat(b, "-item-link-icon")
    }), S));
    if (g === "rtl") {
      var $ = [N, w];
      w = $[0], N = $[1];
      var I = [_, O];
      O = I[0], _ = I[1];
    }
    return {
      prevIcon: w,
      nextIcon: N,
      jumpPrevIcon: O,
      jumpNextIcon: _
    };
  };
  return /* @__PURE__ */ c.createElement(wo, {
    componentName: "Pagination",
    defaultLocale: mp
  }, function(E) {
    var S, w = K(K({}, E), o), N = i === "small" || !!(v && !i && l), O = h("select", r), _ = ne((S = {}, P(S, "".concat(b, "-mini"), N), P(S, "".concat(b, "-rtl"), g === "rtl"), S), a);
    return /* @__PURE__ */ c.createElement(eg, K({}, C(), d, {
      prefixCls: b,
      selectPrefixCls: O,
      className: _,
      selectComponentClass: s || (N ? tg : ng),
      locale: w,
      showSizeChanger: x
    }));
  });
};
const rg = T2;
var _2 = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
In("small", "default", "large");
var Vi = null;
function I2(e, t) {
  var n = t.indicator, r = "".concat(e, "-dot");
  return n === null ? null : Nn(n) ? on(n, {
    className: ne(n.props.className, r)
  }) : Nn(Vi) ? on(Vi, {
    className: ne(Vi.props.className, r)
  }) : /* @__PURE__ */ c.createElement("span", {
    className: ne(r, "".concat(e, "-dot-spin"))
  }, /* @__PURE__ */ c.createElement("i", {
    className: "".concat(e, "-dot-item")
  }), /* @__PURE__ */ c.createElement("i", {
    className: "".concat(e, "-dot-item")
  }), /* @__PURE__ */ c.createElement("i", {
    className: "".concat(e, "-dot-item")
  }), /* @__PURE__ */ c.createElement("i", {
    className: "".concat(e, "-dot-item")
  }));
}
function F2(e, t) {
  return !!e && !!t && !isNaN(Number(t));
}
var M2 = function(t) {
  var n = t.spinPrefixCls, r = t.spinning, a = r === void 0 ? !0 : r, i = t.delay, o = t.className, s = t.size, l = s === void 0 ? "default" : s, u = t.tip, d = t.wrapperClassName, f = t.style, v = t.children, p = _2(t, ["spinPrefixCls", "spinning", "delay", "className", "size", "tip", "wrapperClassName", "style", "children"]), h = c.useState(function() {
    return a && !F2(a, i);
  }), g = X(h, 2), m = g[0], y = g[1];
  c.useEffect(function() {
    var C = ER(function() {
      y(a);
    }, i);
    return C(), function() {
      var E;
      (E = C == null ? void 0 : C.cancel) === null || E === void 0 || E.call(C);
    };
  }, [i, a]);
  var b = function() {
    return typeof v < "u";
  }, x = function(E) {
    var S, w = E.direction, N = ne(n, (S = {}, P(S, "".concat(n, "-sm"), l === "small"), P(S, "".concat(n, "-lg"), l === "large"), P(S, "".concat(n, "-spinning"), m), P(S, "".concat(n, "-show-text"), !!u), P(S, "".concat(n, "-rtl"), w === "rtl"), S), o), O = ln(p, ["indicator", "prefixCls"]), _ = /* @__PURE__ */ c.createElement("div", K({}, O, {
      style: f,
      className: N,
      "aria-live": "polite",
      "aria-busy": m
    }), I2(n, t), u ? /* @__PURE__ */ c.createElement("div", {
      className: "".concat(n, "-text")
    }, u) : null);
    if (b()) {
      var $ = ne("".concat(n, "-container"), P({}, "".concat(n, "-blur"), m));
      return /* @__PURE__ */ c.createElement("div", K({}, O, {
        className: ne("".concat(n, "-nested-loading"), d)
      }), m && /* @__PURE__ */ c.createElement("div", {
        key: "loading"
      }, _), /* @__PURE__ */ c.createElement("div", {
        className: $,
        key: "container"
      }, v));
    }
    return _;
  };
  return /* @__PURE__ */ c.createElement(ni, null, x);
}, tc = function(t) {
  var n = t.prefixCls, r = c.useContext(st), a = r.getPrefixCls, i = a("spin", n), o = K(K({}, t), {
    spinPrefixCls: i
  });
  return /* @__PURE__ */ c.createElement(M2, K({}, o));
};
tc.setDefaultIndicator = function(e) {
  Vi = e;
};
process.env.NODE_ENV !== "production" && (tc.displayName = "Spin");
const $2 = tc;
var D2 = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, A2 = {
  border: 0,
  background: "transparent",
  padding: 0,
  lineHeight: "inherit",
  display: "inline-block"
}, L2 = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var n = function(d) {
    var f = d.keyCode;
    f === fe.ENTER && d.preventDefault();
  }, r = function(d) {
    var f = d.keyCode, v = e.onClick;
    f === fe.ENTER && v && v();
  }, a = e.style, i = e.noStyle, o = e.disabled, s = D2(e, ["style", "noStyle", "disabled"]), l = {};
  return i || (l = K({}, A2)), o && (l.pointerEvents = "none"), l = K(K({}, l), a), /* @__PURE__ */ c.createElement("div", K({
    role: "button",
    tabIndex: 0,
    ref: t
  }, s, {
    onKeyDown: n,
    onKeyUp: r,
    style: l
  }));
});
const K2 = L2;
var ag = c.forwardRef(function(e, t) {
  var n, r = e.prefixCls, a = r === void 0 ? "rc-switch" : r, i = e.className, o = e.checked, s = e.defaultChecked, l = e.disabled, u = e.loadingIcon, d = e.checkedChildren, f = e.unCheckedChildren, v = e.onClick, p = e.onChange, h = e.onKeyDown, g = We(e, ["prefixCls", "className", "checked", "defaultChecked", "disabled", "loadingIcon", "checkedChildren", "unCheckedChildren", "onClick", "onChange", "onKeyDown"]), m = un(!1, {
    value: o,
    defaultValue: s
  }), y = X(m, 2), b = y[0], x = y[1];
  function C(N, O) {
    var _ = b;
    return l || (_ = N, x(_), p == null || p(_, O)), _;
  }
  function E(N) {
    N.which === fe.LEFT ? C(!1, N) : N.which === fe.RIGHT && C(!0, N), h == null || h(N);
  }
  function S(N) {
    var O = C(!b, N);
    v == null || v(O, N);
  }
  var w = ne(a, i, (n = {}, P(n, "".concat(a, "-checked"), b), P(n, "".concat(a, "-disabled"), l), n));
  return c.createElement("button", Object.assign({}, g, {
    type: "button",
    role: "switch",
    "aria-checked": b,
    disabled: l,
    className: w,
    ref: t,
    onKeyDown: E,
    onClick: S
  }), u, c.createElement("span", {
    className: "".concat(a, "-inner")
  }, b ? d : f));
});
ag.displayName = "Switch";
var V2 = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, nc = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var n, r = e.prefixCls, a = e.size, i = e.disabled, o = e.loading, s = e.className, l = s === void 0 ? "" : s, u = V2(e, ["prefixCls", "size", "disabled", "loading", "className"]);
  process.env.NODE_ENV !== "production" && Nt("checked" in u || !("value" in u), "Switch", "`value` is not a valid prop, do you mean `checked`?");
  var d = c.useContext(st), f = d.getPrefixCls, v = d.direction, p = c.useContext(fr), h = c.useContext(Rr), g = (i ?? h) || o, m = f("switch", r), y = /* @__PURE__ */ c.createElement("div", {
    className: "".concat(m, "-handle")
  }, o && /* @__PURE__ */ c.createElement(Ha, {
    className: "".concat(m, "-loading-icon")
  })), b = ne((n = {}, P(n, "".concat(m, "-small"), (a || p) === "small"), P(n, "".concat(m, "-loading"), o), P(n, "".concat(m, "-rtl"), v === "rtl"), n), l);
  return /* @__PURE__ */ c.createElement(Oh, {
    insertExtraNode: !0
  }, /* @__PURE__ */ c.createElement(ag, K({}, u, {
    prefixCls: m,
    className: b,
    disabled: g,
    ref: t,
    loadingIcon: y
  })));
});
nc.__ANT_SWITCH = !0;
process.env.NODE_ENV !== "production" && (nc.displayName = "Switch");
const z2 = nc;
function j2(e) {
  return null;
}
function H2(e) {
  return null;
}
var B2 = "RC_TABLE_KEY";
function ig(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function og(e, t) {
  if (!t && typeof t != "number")
    return e;
  for (var n = ig(t), r = e, a = 0; a < n.length; a += 1) {
    if (!r)
      return null;
    var i = n[a];
    r = r[i];
  }
  return r;
}
function Wo(e) {
  var t = [], n = {};
  return e.forEach(function(r) {
    for (var a = r || {}, i = a.key, o = a.dataIndex, s = i || ig(o).join("-") || B2; n[s]; )
      s = "".concat(s, "_next");
    n[s] = !0, t.push(s);
  }), t;
}
function zl(e) {
  return e != null;
}
var sg = /* @__PURE__ */ c.createContext(!1);
function U2() {
  var e = /* @__PURE__ */ c.createContext(null), t = function(r) {
    var a = r.value, i = r.children, o = c.useRef(a);
    o.current = a;
    var s = c.useState(function() {
      return {
        getValue: function() {
          return o.current;
        },
        listeners: /* @__PURE__ */ new Set()
      };
    }), l = X(s, 1), u = l[0];
    return rn(function() {
      u.listeners.forEach(function(d) {
        d(a);
      });
    }, [a]), /* @__PURE__ */ c.createElement(e.Provider, {
      value: u
    }, i);
  };
  return {
    Context: e,
    Provider: t
  };
}
function W2(e, t) {
  var n = cr(t), r = c.useContext(e == null ? void 0 : e.Context), a = r || {}, i = a.listeners, o = a.getValue, s = c.useState(function() {
    return n(r ? o() : null);
  }), l = X(s, 2), u = l[0], d = l[1];
  return rn(function() {
    if (!r)
      return;
    function f(v) {
      d(function(p) {
        var h = n(v);
        return Zu(p, h) ? p : h;
      });
    }
    return i.add(f), function() {
      i.delete(f);
    };
  }, [r]), u;
}
var lg = U2(), Go = /* @__PURE__ */ c.createContext(null), ug = /* @__PURE__ */ c.createContext({
  renderWithProps: !1
}), G2 = ["colSpan", "rowSpan", "style", "className"];
function q2(e, t, n, r) {
  var a = e + t - 1;
  return e <= r && a >= n;
}
function Y2(e) {
  return e && Le(e) === "object" && !Array.isArray(e) && !/* @__PURE__ */ c.isValidElement(e);
}
function X2(e) {
  return typeof e == "string" ? !0 : Xa(e);
}
var J2 = function(t) {
  var n = t.ellipsis, r = t.rowType, a = t.children, i, o = n === !0 ? {
    showTitle: !0
  } : n;
  return o && (o.showTitle || r === "header") && (typeof a == "string" || typeof a == "number" ? i = a.toString() : /* @__PURE__ */ c.isValidElement(a) && typeof a.props.children == "string" && (i = a.props.children)), i;
};
function Q2(e, t) {
  var n, r, a, i = e.prefixCls, o = e.className, s = e.record, l = e.index, u = e.renderIndex, d = e.dataIndex, f = e.render, v = e.children, p = e.component, h = p === void 0 ? "td" : p, g = e.colSpan, m = e.rowSpan, y = e.fixLeft, b = e.fixRight, x = e.firstFixLeft, C = e.lastFixLeft, E = e.firstFixRight, S = e.lastFixRight, w = e.appendNode, N = e.additionalProps, O = N === void 0 ? {} : N, _ = e.ellipsis, $ = e.align, I = e.rowType, F = e.isSticky, M = e.hovering, V = e.onHover, T = "".concat(i, "-cell"), R = c.useContext(ug), k = c.useContext(sg), A = c.useContext(Go), U = A.allColumnsFixedLeft, z = c.useMemo(function() {
    if (zl(v))
      return [v];
    var ee = og(s, d), te = ee, xe = void 0;
    if (f) {
      var Me = f(ee, s, u);
      Y2(Me) ? (process.env.NODE_ENV !== "production" && Fe(!1, "`columns.render` return cell props is deprecated with perf issue, please use `onCell` instead."), te = Me.children, xe = Me.props, R.renderWithProps = !0) : te = Me;
    }
    return [te, xe];
  }, [
    /* eslint-disable react-hooks/exhaustive-deps */
    // Always re-render if `renderWithProps`
    R.renderWithProps ? Math.random() : 0,
    /* eslint-enable */
    v,
    d,
    R,
    s,
    f,
    u
  ]), B = X(z, 2), G = B[0], W = B[1], j = G;
  Le(j) === "object" && !Array.isArray(j) && !/* @__PURE__ */ c.isValidElement(j) && (j = null), _ && (C || E) && (j = /* @__PURE__ */ c.createElement("span", {
    className: "".concat(T, "-content")
  }, j));
  var H = W || {}, q = H.colSpan, Y = H.rowSpan, J = H.style, oe = H.className, re = We(H, G2), de = (n = q !== void 0 ? q : g) !== null && n !== void 0 ? n : 1, Z = (r = Y !== void 0 ? Y : m) !== null && r !== void 0 ? r : 1;
  if (de === 0 || Z === 0)
    return null;
  var Q = {}, ce = typeof y == "number" && k, Ce = typeof b == "number" && k;
  ce && (Q.position = "sticky", Q.left = y), Ce && (Q.position = "sticky", Q.right = b);
  var we = {};
  $ && (we.textAlign = $);
  var ke = function(te) {
    var xe;
    s && V(l, l + Z - 1), O == null || (xe = O.onMouseEnter) === null || xe === void 0 || xe.call(O, te);
  }, ve = function(te) {
    var xe;
    s && V(-1, -1), O == null || (xe = O.onMouseLeave) === null || xe === void 0 || xe.call(O, te);
  }, ae = J2({
    rowType: I,
    ellipsis: _,
    children: G
  }), ie = D(D(D({
    title: ae
  }, re), O), {}, {
    colSpan: de !== 1 ? de : null,
    rowSpan: Z !== 1 ? Z : null,
    className: ne(T, o, (a = {}, P(a, "".concat(T, "-fix-left"), ce && k), P(a, "".concat(T, "-fix-left-first"), x && k), P(a, "".concat(T, "-fix-left-last"), C && k), P(a, "".concat(T, "-fix-left-all"), C && U && k), P(a, "".concat(T, "-fix-right"), Ce && k), P(a, "".concat(T, "-fix-right-first"), E && k), P(a, "".concat(T, "-fix-right-last"), S && k), P(a, "".concat(T, "-ellipsis"), _), P(a, "".concat(T, "-with-append"), w), P(a, "".concat(T, "-fix-sticky"), (ce || Ce) && F && k), P(a, "".concat(T, "-row-hover"), !W && M), a), O.className, oe),
    style: D(D(D(D({}, O.style), we), Q), J),
    onMouseEnter: ke,
    onMouseLeave: ve,
    ref: X2(h) ? t : null
  });
  return /* @__PURE__ */ c.createElement(h, ie, w, j);
}
var cg = /* @__PURE__ */ c.forwardRef(Q2);
cg.displayName = "Cell";
var Z2 = ["expanded", "className", "hovering"], ek = /* @__PURE__ */ c.memo(cg, function(e, t) {
  return t.shouldCellUpdate ? (
    // Additional handle of expanded logic
    Z2.every(function(n) {
      return e[n] === t[n];
    }) && // User control update logic
    !t.shouldCellUpdate(t.record, e.record)
  ) : Zu(e, t);
}), ci = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var n = e.index, r = e.additionalProps, a = r === void 0 ? {} : r, i = e.colSpan, o = e.rowSpan, s = a.colSpan, l = a.rowSpan, u = i ?? s, d = o ?? l, f = W2(lg, function(h) {
    var g = q2(n, d || 1, h == null ? void 0 : h.startRow, h == null ? void 0 : h.endRow);
    return {
      onHover: h == null ? void 0 : h.onHover,
      hovering: g
    };
  }), v = f.onHover, p = f.hovering;
  return /* @__PURE__ */ c.createElement(ek, K({}, e, {
    colSpan: u,
    rowSpan: d,
    hovering: p,
    ref: t,
    onHover: v
  }));
});
ci.displayName = "WrappedCell";
var Bn = /* @__PURE__ */ c.createContext(null);
function rc(e, t, n, r, a) {
  var i = n[e] || {}, o = n[t] || {}, s, l;
  i.fixed === "left" ? s = r.left[e] : o.fixed === "right" && (l = r.right[t]);
  var u = !1, d = !1, f = !1, v = !1, p = n[t + 1], h = n[e - 1];
  if (a === "rtl") {
    if (s !== void 0) {
      var g = h && h.fixed === "left";
      v = !g;
    } else if (l !== void 0) {
      var m = p && p.fixed === "right";
      f = !m;
    }
  } else if (s !== void 0) {
    var y = p && p.fixed === "left";
    u = !y;
  } else if (l !== void 0) {
    var b = h && h.fixed === "right";
    d = !b;
  }
  return {
    fixLeft: s,
    fixRight: l,
    lastFixLeft: u,
    firstFixRight: d,
    lastFixRight: f,
    firstFixLeft: v,
    isSticky: r.isSticky
  };
}
function dg(e) {
  var t = e.cells, n = e.stickyOffsets, r = e.flattenColumns, a = e.rowComponent, i = e.cellComponent, o = e.onHeaderRow, s = e.index, l = c.useContext(Bn), u = l.prefixCls, d = l.direction, f;
  o && (f = o(t.map(function(p) {
    return p.column;
  }), s));
  var v = Wo(t.map(function(p) {
    return p.column;
  }));
  return /* @__PURE__ */ c.createElement(a, f, t.map(function(p, h) {
    var g = p.column, m = rc(p.colStart, p.colEnd, r, n, d), y;
    return g && g.onHeaderCell && (y = p.column.onHeaderCell(g)), /* @__PURE__ */ c.createElement(ci, K({}, p, {
      ellipsis: g.ellipsis,
      align: g.align,
      component: i,
      prefixCls: u,
      key: v[h]
    }, m, {
      additionalProps: y,
      rowType: "header"
    }));
  }));
}
dg.displayName = "HeaderRow";
function tk(e) {
  var t = [];
  function n(o, s) {
    var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    t[l] = t[l] || [];
    var u = s, d = o.filter(Boolean).map(function(f) {
      var v = {
        key: f.key,
        className: f.className || "",
        children: f.title,
        column: f,
        colStart: u
      }, p = 1, h = f.children;
      return h && h.length > 0 && (p = n(h, u, l + 1).reduce(function(g, m) {
        return g + m;
      }, 0), v.hasSubColumns = !0), "colSpan" in f && (p = f.colSpan), "rowSpan" in f && (v.rowSpan = f.rowSpan), v.colSpan = p, v.colEnd = v.colStart + p - 1, t[l].push(v), u += p, p;
    });
    return d;
  }
  n(e, 0);
  for (var r = t.length, a = function(s) {
    t[s].forEach(function(l) {
      !("rowSpan" in l) && !l.hasSubColumns && (l.rowSpan = r - s);
    });
  }, i = 0; i < r; i += 1)
    a(i);
  return t;
}
function _f(e) {
  var t = e.stickyOffsets, n = e.columns, r = e.flattenColumns, a = e.onHeaderRow, i = c.useContext(Bn), o = i.prefixCls, s = i.getComponent, l = c.useMemo(function() {
    return tk(n);
  }, [n]), u = s(["header", "wrapper"], "thead"), d = s(["header", "row"], "tr"), f = s(["header", "cell"], "th");
  return /* @__PURE__ */ c.createElement(u, {
    className: "".concat(o, "-thead")
  }, l.map(function(v, p) {
    var h = /* @__PURE__ */ c.createElement(dg, {
      key: p,
      flattenColumns: r,
      cells: v,
      stickyOffsets: t,
      rowComponent: d,
      cellComponent: f,
      onHeaderRow: a,
      index: p
    });
    return h;
  }));
}
var fg = /* @__PURE__ */ c.createContext(null);
function vg(e) {
  var t = e.prefixCls, n = e.children, r = e.component, a = e.cellComponent, i = e.className, o = e.expanded, s = e.colSpan, l = e.isEmpty, u = c.useContext(Bn), d = u.scrollbarSize, f = c.useContext(fg), v = f.fixHeader, p = f.fixColumn, h = f.componentWidth, g = f.horizonScroll;
  return c.useMemo(function() {
    var m = n;
    return (l ? g : p) && (m = /* @__PURE__ */ c.createElement("div", {
      style: {
        width: h - (v ? d : 0),
        position: "sticky",
        left: 0,
        overflow: "hidden"
      },
      className: "".concat(t, "-expanded-row-fixed")
    }, h !== 0 && m)), /* @__PURE__ */ c.createElement(r, {
      className: i,
      style: {
        display: o ? null : "none"
      }
    }, /* @__PURE__ */ c.createElement(ci, {
      component: a,
      prefixCls: t,
      colSpan: s
    }, m));
  }, [n, r, i, o, s, l, d, h, p, v, g]);
}
var pg = /* @__PURE__ */ c.createContext(null);
function mg(e) {
  var t = e.className, n = e.style, r = e.record, a = e.index, i = e.renderIndex, o = e.rowKey, s = e.rowExpandable, l = e.expandedKeys, u = e.onRow, d = e.indent, f = d === void 0 ? 0 : d, v = e.rowComponent, p = e.cellComponent, h = e.childrenColumnName, g = c.useContext(Bn), m = g.prefixCls, y = g.fixedInfoList, b = c.useContext(Go), x = b.flattenColumns, C = b.expandableType, E = b.expandRowByClick, S = b.onTriggerExpand, w = b.rowClassName, N = b.expandedRowClassName, O = b.indentSize, _ = b.expandIcon, $ = b.expandedRowRender, I = b.expandIconColumnIndex, F = c.useState(!1), M = X(F, 2), V = M[0], T = M[1], R = l && l.has(e.recordKey);
  c.useEffect(function() {
    R && T(!0);
  }, [R]);
  var k = C === "row" && (!s || s(r)), A = C === "nest", U = h && r && r[h], z = k || A, B = c.useRef(S);
  B.current = S;
  var G = function() {
    B.current.apply(B, arguments);
  }, W = u == null ? void 0 : u(r, a), j = function(Z) {
    var Q;
    E && z && G(r, Z);
    for (var ce = arguments.length, Ce = new Array(ce > 1 ? ce - 1 : 0), we = 1; we < ce; we++)
      Ce[we - 1] = arguments[we];
    W == null || (Q = W.onClick) === null || Q === void 0 || Q.call.apply(Q, [W, Z].concat(Ce));
  }, H;
  typeof w == "string" ? H = w : typeof w == "function" && (H = w(r, a, f));
  var q = Wo(x), Y = /* @__PURE__ */ c.createElement(v, K({}, W, {
    "data-row-key": o,
    className: ne(t, "".concat(m, "-row"), "".concat(m, "-row-level-").concat(f), H, W && W.className),
    style: D(D({}, n), W ? W.style : null),
    onClick: j
  }), x.map(function(de, Z) {
    var Q = de.render, ce = de.dataIndex, Ce = de.className, we = q[Z], ke = y[Z], ve;
    Z === (I || 0) && A && (ve = /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement("span", {
      style: {
        paddingLeft: "".concat(O * f, "px")
      },
      className: "".concat(m, "-row-indent indent-level-").concat(f)
    }), _({
      prefixCls: m,
      expanded: R,
      expandable: U,
      record: r,
      onExpand: G
    })));
    var ae;
    return de.onCell && (ae = de.onCell(r, a)), /* @__PURE__ */ c.createElement(ci, K({
      className: Ce,
      ellipsis: de.ellipsis,
      align: de.align,
      component: p,
      prefixCls: m,
      key: we,
      record: r,
      index: a,
      renderIndex: i,
      dataIndex: ce,
      render: Q,
      shouldCellUpdate: de.shouldCellUpdate,
      expanded: ve && R
    }, ke, {
      appendNode: ve,
      additionalProps: ae
    }));
  })), J;
  if (k && (V || R)) {
    var oe = $(r, a, f + 1, R), re = N && N(r, a, f);
    J = /* @__PURE__ */ c.createElement(vg, {
      expanded: R,
      className: ne("".concat(m, "-expanded-row"), "".concat(m, "-expanded-row-level-").concat(f + 1), re),
      prefixCls: m,
      component: v,
      cellComponent: p,
      colSpan: x.length,
      isEmpty: !1
    }, oe);
  }
  return /* @__PURE__ */ c.createElement(c.Fragment, null, Y, J);
}
mg.displayName = "BodyRow";
function hg(e, t, n, r, a, i) {
  var o = [];
  o.push({
    record: e,
    indent: t,
    index: i
  });
  var s = a(e), l = r == null ? void 0 : r.has(s);
  if (e && Array.isArray(e[n]) && l)
    for (var u = 0; u < e[n].length; u += 1) {
      var d = hg(e[n][u], t + 1, n, r, a, u);
      o.push.apply(o, pe(d));
    }
  return o;
}
function nk(e, t, n, r) {
  var a = c.useMemo(function() {
    if (n != null && n.size) {
      for (var i = [], o = 0; o < (e == null ? void 0 : e.length); o += 1) {
        var s = e[o];
        i.push.apply(i, pe(hg(s, 0, t, n, r, o)));
      }
      return i;
    }
    return e == null ? void 0 : e.map(function(l, u) {
      return {
        record: l,
        indent: 0,
        index: u
      };
    });
  }, [e, t, n, r]);
  return a;
}
function rk(e) {
  var t = e.columnKey, n = e.onColumnResize, r = c.useRef();
  return c.useEffect(function() {
    r.current && n(t, r.current.offsetWidth);
  }, []), /* @__PURE__ */ c.createElement(zn, {
    data: t
  }, /* @__PURE__ */ c.createElement("td", {
    ref: r,
    style: {
      padding: 0,
      border: 0,
      height: 0
    }
  }, /* @__PURE__ */ c.createElement("div", {
    style: {
      height: 0,
      overflow: "hidden"
    }
  }, " ")));
}
function ak(e) {
  var t = e.prefixCls, n = e.columnsKey, r = e.onColumnResize;
  return /* @__PURE__ */ c.createElement("tr", {
    "aria-hidden": "true",
    className: "".concat(t, "-measure-row"),
    style: {
      height: 0,
      fontSize: 0
    }
  }, /* @__PURE__ */ c.createElement(zn.Collection, {
    onBatchResize: function(i) {
      i.forEach(function(o) {
        var s = o.data, l = o.size;
        r(s, l.offsetWidth);
      });
    }
  }, n.map(function(a) {
    return /* @__PURE__ */ c.createElement(rk, {
      key: a,
      columnKey: a,
      onColumnResize: r
    });
  })));
}
function ik(e) {
  var t = e.data, n = e.getRowKey, r = e.measureColumnWidth, a = e.expandedKeys, i = e.onRow, o = e.rowExpandable, s = e.emptyNode, l = e.childrenColumnName, u = c.useContext(pg), d = u.onColumnResize, f = c.useContext(Bn), v = f.prefixCls, p = f.getComponent, h = c.useContext(Go), g = h.flattenColumns, m = nk(t, l, a, n), y = c.useRef({
    renderWithProps: !1
  }), b = c.useState(-1), x = X(b, 2), C = x[0], E = x[1], S = c.useState(-1), w = X(S, 2), N = w[0], O = w[1], _ = c.useCallback(function(I, F) {
    E(I), O(F);
  }, []), $ = c.useMemo(function() {
    var I = p(["body", "wrapper"], "tbody"), F = p(["body", "row"], "tr"), M = p(["body", "cell"], "td"), V;
    t.length ? V = m.map(function(R, k) {
      var A = R.record, U = R.indent, z = R.index, B = n(A, k);
      return /* @__PURE__ */ c.createElement(mg, {
        key: B,
        rowKey: B,
        record: A,
        recordKey: B,
        index: k,
        renderIndex: z,
        rowComponent: F,
        cellComponent: M,
        expandedKeys: a,
        onRow: i,
        getRowKey: n,
        rowExpandable: o,
        childrenColumnName: l,
        indent: U
      });
    }) : V = /* @__PURE__ */ c.createElement(vg, {
      expanded: !0,
      className: "".concat(v, "-placeholder"),
      prefixCls: v,
      component: F,
      cellComponent: M,
      colSpan: g.length,
      isEmpty: !0
    }, s);
    var T = Wo(g);
    return /* @__PURE__ */ c.createElement(I, {
      className: "".concat(v, "-tbody")
    }, r && /* @__PURE__ */ c.createElement(ak, {
      prefixCls: v,
      columnsKey: T,
      onColumnResize: d
    }), V);
  }, [t, v, i, r, a, n, p, s, g, l, d, o, m]);
  return /* @__PURE__ */ c.createElement(ug.Provider, {
    value: y.current
  }, /* @__PURE__ */ c.createElement(lg.Provider, {
    value: {
      startRow: C,
      endRow: N,
      onHover: _
    }
  }, $));
}
var gg = /* @__PURE__ */ c.memo(ik);
gg.displayName = "Body";
var ok = ["expandable"], Ma = "RC_TABLE_INTERNAL_COL_DEFINE";
function sk(e) {
  var t = e.expandable, n = We(e, ok), r;
  return "expandable" in e ? r = D(D({}, n), t) : (process.env.NODE_ENV !== "production" && ["indentSize", "expandedRowKeys", "defaultExpandedRowKeys", "defaultExpandAllRows", "expandedRowRender", "expandRowByClick", "expandIcon", "onExpand", "onExpandedRowsChange", "expandedRowClassName", "expandIconColumnIndex", "showExpandColumn"].some(function(a) {
    return a in e;
  }) && Fe(!1, "expanded related props have been moved into `expandable`."), r = n), r.showExpandColumn === !1 && (r.expandIconColumnIndex = -1), r;
}
var Yn = {}, lk = ["children"], uk = ["fixed"];
function ac(e) {
  return yn(e).filter(function(t) {
    return /* @__PURE__ */ c.isValidElement(t);
  }).map(function(t) {
    var n = t.key, r = t.props, a = r.children, i = We(r, lk), o = D({
      key: n
    }, i);
    return a && (o.children = ac(a)), o;
  });
}
function jl(e) {
  return e.reduce(function(t, n) {
    var r = n.fixed, a = r === !0 ? "left" : r, i = n.children;
    return i && i.length > 0 ? [].concat(pe(t), pe(jl(i).map(function(o) {
      return D({
        fixed: a
      }, o);
    }))) : [].concat(pe(t), [D(D({}, n), {}, {
      fixed: a
    })]);
  }, []);
}
function ck(e) {
  for (var t = !0, n = 0; n < e.length; n += 1) {
    var r = e[n];
    if (t && r.fixed !== "left")
      t = !1;
    else if (!t && r.fixed === "left") {
      Fe(!1, "Index ".concat(n - 1, " of `columns` missing `fixed='left'` prop."));
      break;
    }
  }
  for (var a = !0, i = e.length - 1; i >= 0; i -= 1) {
    var o = e[i];
    if (a && o.fixed !== "right")
      a = !1;
    else if (!a && o.fixed === "right") {
      Fe(!1, "Index ".concat(i + 1, " of `columns` missing `fixed='right'` prop."));
      break;
    }
  }
}
function dk(e) {
  return e.map(function(t) {
    var n = t.fixed, r = We(t, uk), a = n;
    return n === "left" ? a = "right" : n === "right" && (a = "left"), D({
      fixed: a
    }, r);
  });
}
function fk(e, t) {
  var n = e.prefixCls, r = e.columns, a = e.children, i = e.expandable, o = e.expandedKeys, s = e.columnTitle, l = e.getRowKey, u = e.onTriggerExpand, d = e.expandIcon, f = e.rowExpandable, v = e.expandIconColumnIndex, p = e.direction, h = e.expandRowByClick, g = e.columnWidth, m = e.fixed, y = c.useMemo(function() {
    return r || ac(a);
  }, [r, a]), b = c.useMemo(function() {
    if (i) {
      var E, S = y.slice();
      if (process.env.NODE_ENV !== "production" && v >= 0 && Fe(!1, "`expandIconColumnIndex` is deprecated. Please use `Table.EXPAND_COLUMN` in `columns` instead."), !S.includes(Yn)) {
        var w = v || 0;
        w >= 0 && S.splice(w, 0, Yn);
      }
      process.env.NODE_ENV !== "production" && S.filter(function(I) {
        return I === Yn;
      }).length > 1 && Fe(!1, "There exist more than one `EXPAND_COLUMN` in `columns`.");
      var N = S.indexOf(Yn);
      S = S.filter(function(I, F) {
        return I !== Yn || F === N;
      });
      var O = y[N], _;
      (m === "left" || m) && !v ? _ = "left" : (m === "right" || m) && v === y.length ? _ = "right" : _ = O ? O.fixed : null;
      var $ = (E = {}, P(E, Ma, {
        className: "".concat(n, "-expand-icon-col"),
        columnType: "EXPAND_COLUMN"
      }), P(E, "title", s), P(E, "fixed", _), P(E, "className", "".concat(n, "-row-expand-icon-cell")), P(E, "width", g), P(E, "render", function(F, M, V) {
        var T = l(M, V), R = o.has(T), k = f ? f(M) : !0, A = d({
          prefixCls: n,
          expanded: R,
          expandable: k,
          record: M,
          onExpand: u
        });
        return h ? /* @__PURE__ */ c.createElement("span", {
          onClick: function(z) {
            return z.stopPropagation();
          }
        }, A) : A;
      }), E);
      return S.map(function(I) {
        return I === Yn ? $ : I;
      });
    }
    return process.env.NODE_ENV !== "production" && y.includes(Yn) && Fe(!1, "`expandable` is not config but there exist `EXPAND_COLUMN` in `columns`."), y.filter(function(I) {
      return I !== Yn;
    });
  }, [i, y, l, o, d, p]), x = c.useMemo(function() {
    var E = b;
    return t && (E = t(E)), E.length || (E = [{
      render: function() {
        return null;
      }
    }]), E;
  }, [t, b, p]), C = c.useMemo(function() {
    return p === "rtl" ? dk(jl(x)) : jl(x);
  }, [x, p]);
  return process.env.NODE_ENV !== "production" && ck(p === "rtl" ? C.slice().reverse() : C), [x, C];
}
function yg(e) {
  var t = De(e), n = Ut({}), r = X(n, 2), a = r[1], i = De(null), o = De([]);
  function s(l) {
    o.current.push(l);
    var u = Promise.resolve();
    i.current = u, u.then(function() {
      if (i.current === u) {
        var d = o.current, f = t.current;
        o.current = [], d.forEach(function(v) {
          t.current = v(t.current);
        }), i.current = null, f !== t.current && a({});
      }
    });
  }
  return Dt(function() {
    return function() {
      i.current = null;
    };
  }, []), [t.current, s];
}
function vk(e) {
  var t = De(e || null), n = De();
  function r() {
    window.clearTimeout(n.current);
  }
  function a(o) {
    t.current = o, r(), n.current = window.setTimeout(function() {
      t.current = null, n.current = void 0;
    }, 100);
  }
  function i() {
    return t.current;
  }
  return Dt(function() {
    return r;
  }, []), [a, i];
}
function pk(e, t, n) {
  var r = Zt(function() {
    for (var a = [], i = [], o = 0, s = 0, l = 0; l < t; l += 1)
      if (n === "rtl") {
        i[l] = s, s += e[l] || 0;
        var u = t - l - 1;
        a[u] = o, o += e[u] || 0;
      } else {
        a[l] = o, o += e[l] || 0;
        var d = t - l - 1;
        i[d] = s, s += e[d] || 0;
      }
    return {
      left: a,
      right: i
    };
  }, [e, t, n]);
  return r;
}
var mk = ["columnType"];
function bg(e) {
  for (var t = e.colWidths, n = e.columns, r = e.columCount, a = [], i = r || n.length, o = !1, s = i - 1; s >= 0; s -= 1) {
    var l = t[s], u = n && n[s], d = u && u[Ma];
    if (l || d || o) {
      var f = d || {};
      f.columnType;
      var v = We(f, mk);
      a.unshift(/* @__PURE__ */ c.createElement("col", K({
        key: s,
        style: {
          width: l
        }
      }, v))), o = !0;
    }
  }
  return /* @__PURE__ */ c.createElement("colgroup", null, a);
}
function If(e) {
  var t = e.className, n = e.children;
  return /* @__PURE__ */ c.createElement("div", {
    className: t
  }, n);
}
var Cg = /* @__PURE__ */ c.createContext({});
function hk(e) {
  var t = e.className, n = e.index, r = e.children, a = e.colSpan, i = a === void 0 ? 1 : a, o = e.rowSpan, s = e.align, l = c.useContext(Bn), u = l.prefixCls, d = l.direction, f = c.useContext(Cg), v = f.scrollColumnIndex, p = f.stickyOffsets, h = f.flattenColumns, g = n + i - 1, m = g + 1 === v ? i + 1 : i, y = rc(n, n + m - 1, h, p, d);
  return /* @__PURE__ */ c.createElement(ci, K({
    className: t,
    index: n,
    component: "td",
    prefixCls: u,
    record: null,
    dataIndex: null,
    align: s,
    colSpan: m,
    rowSpan: o,
    render: function() {
      return r;
    }
  }, y));
}
var gk = ["children"];
function yk(e) {
  var t = e.children, n = We(e, gk);
  return /* @__PURE__ */ c.createElement("tr", n, t);
}
function qo(e) {
  var t = e.children;
  return t;
}
qo.Row = yk;
qo.Cell = hk;
function Ti(e) {
  var t = e.children, n = e.stickyOffsets, r = e.flattenColumns, a = c.useContext(Bn), i = a.prefixCls, o = r.length - 1, s = r[o], l = c.useMemo(function() {
    return {
      stickyOffsets: n,
      flattenColumns: r,
      scrollColumnIndex: s != null && s.scrollbar ? o : null
    };
  }, [s, r, o, n]);
  return /* @__PURE__ */ c.createElement(Cg.Provider, {
    value: l
  }, /* @__PURE__ */ c.createElement("tfoot", {
    className: "".concat(i, "-summary")
  }, t));
}
var xg = qo;
function bk(e) {
  var t, n = e.prefixCls, r = e.record, a = e.onExpand, i = e.expanded, o = e.expandable, s = "".concat(n, "-row-expand-icon");
  if (!o)
    return /* @__PURE__ */ c.createElement("span", {
      className: ne(s, "".concat(n, "-row-spaced"))
    });
  var l = function(d) {
    a(r, d), d.stopPropagation();
  };
  return /* @__PURE__ */ c.createElement("span", {
    className: ne(s, (t = {}, P(t, "".concat(n, "-row-expanded"), i), P(t, "".concat(n, "-row-collapsed"), !i), t)),
    onClick: l
  });
}
function Ck(e, t, n) {
  var r = [];
  function a(i) {
    (i || []).forEach(function(o, s) {
      r.push(t(o, s)), a(o[n]);
    });
  }
  return a(e), r;
}
var xk = function(t, n) {
  var r, a, i = t.scrollBodyRef, o = t.onScroll, s = t.offsetScroll, l = t.container, u = c.useContext(Bn), d = u.prefixCls, f = ((r = i.current) === null || r === void 0 ? void 0 : r.scrollWidth) || 0, v = ((a = i.current) === null || a === void 0 ? void 0 : a.clientWidth) || 0, p = f && v * (v / f), h = c.useRef(), g = yg({
    scrollLeft: 0,
    isHiddenScrollBar: !1
  }), m = X(g, 2), y = m[0], b = m[1], x = c.useRef({
    delta: 0,
    x: 0
  }), C = c.useState(!1), E = X(C, 2), S = E[0], w = E[1], N = function() {
    w(!1);
  }, O = function(M) {
    M.persist(), x.current.delta = M.pageX - y.scrollLeft, x.current.x = 0, w(!0), M.preventDefault();
  }, _ = function(M) {
    var V, T = M || ((V = window) === null || V === void 0 ? void 0 : V.event), R = T.buttons;
    if (!S || R === 0) {
      S && w(!1);
      return;
    }
    var k = x.current.x + M.pageX - x.current.x - x.current.delta;
    k <= 0 && (k = 0), k + p >= v && (k = v - p), o({
      scrollLeft: k / v * (f + 2)
    }), x.current.x = M.pageX;
  }, $ = function() {
    if (i.current) {
      var M = Of(i.current).top, V = M + i.current.offsetHeight, T = l === window ? document.documentElement.scrollTop + window.innerHeight : Of(l).top + l.clientHeight;
      V - Kl() <= T || M >= T - s ? b(function(R) {
        return D(D({}, R), {}, {
          isHiddenScrollBar: !0
        });
      }) : b(function(R) {
        return D(D({}, R), {}, {
          isHiddenScrollBar: !1
        });
      });
    }
  }, I = function(M) {
    b(function(V) {
      return D(D({}, V), {}, {
        scrollLeft: M / f * v || 0
      });
    });
  };
  return c.useImperativeHandle(n, function() {
    return {
      setScrollLeft: I
    };
  }), c.useEffect(function() {
    var F = Zn(document.body, "mouseup", N, !1), M = Zn(document.body, "mousemove", _, !1);
    return $(), function() {
      F.remove(), M.remove();
    };
  }, [p, S]), c.useEffect(function() {
    var F = Zn(l, "scroll", $, !1), M = Zn(window, "resize", $, !1);
    return function() {
      F.remove(), M.remove();
    };
  }, [l]), c.useEffect(function() {
    y.isHiddenScrollBar || b(function(F) {
      var M = i.current;
      return M ? D(D({}, F), {}, {
        scrollLeft: M.scrollLeft / M.scrollWidth * M.clientWidth
      }) : F;
    });
  }, [y.isHiddenScrollBar]), f <= v || !p || y.isHiddenScrollBar ? null : /* @__PURE__ */ c.createElement("div", {
    style: {
      height: Kl(),
      width: v,
      bottom: s
    },
    className: "".concat(d, "-sticky-scroll")
  }, /* @__PURE__ */ c.createElement("div", {
    onMouseDown: O,
    ref: h,
    className: ne("".concat(d, "-sticky-scroll-bar"), P({}, "".concat(d, "-sticky-scroll-bar-active"), S)),
    style: {
      width: "".concat(p, "px"),
      transform: "translate3d(".concat(y.scrollLeft, "px, 0, 0)")
    }
  }));
};
const Sk = /* @__PURE__ */ c.forwardRef(xk);
var Ff = jn() ? window : null;
function Ek(e, t) {
  var n = Le(e) === "object" ? e : {}, r = n.offsetHeader, a = r === void 0 ? 0 : r, i = n.offsetSummary, o = i === void 0 ? 0 : i, s = n.offsetScroll, l = s === void 0 ? 0 : s, u = n.getContainer, d = u === void 0 ? function() {
    return Ff;
  } : u, f = d() || Ff;
  return c.useMemo(function() {
    var v = !!e;
    return {
      isSticky: v,
      stickyClassName: v ? "".concat(t, "-sticky-holder") : "",
      offsetHeader: a,
      offsetSummary: o,
      offsetScroll: l,
      container: f
    };
  }, [l, a, o, t, f]);
}
var wk = ["className", "noData", "columns", "flattenColumns", "colWidths", "columCount", "stickyOffsets", "direction", "fixHeader", "stickyTopOffset", "stickyBottomOffset", "stickyClassName", "onScroll", "maxContentScroll", "children"];
function Nk(e, t) {
  return Zt(function() {
    for (var n = [], r = 0; r < t; r += 1) {
      var a = e[r];
      if (a !== void 0)
        n[r] = a;
      else
        return null;
    }
    return n;
  }, [e.join("_"), t]);
}
var Hl = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var n = e.className, r = e.noData, a = e.columns, i = e.flattenColumns, o = e.colWidths, s = e.columCount, l = e.stickyOffsets, u = e.direction, d = e.fixHeader, f = e.stickyTopOffset, v = e.stickyBottomOffset, p = e.stickyClassName, h = e.onScroll, g = e.maxContentScroll, m = e.children, y = We(e, wk), b = c.useContext(Bn), x = b.prefixCls, C = b.scrollbarSize, E = b.isSticky, S = E && !d ? 0 : C, w = c.useRef(null), N = c.useCallback(function(T) {
    Qi(t, T), Qi(w, T);
  }, []);
  c.useEffect(function() {
    var T;
    function R(k) {
      var A = k.currentTarget, U = k.deltaX;
      U && (h({
        currentTarget: A,
        scrollLeft: A.scrollLeft + U
      }), k.preventDefault());
    }
    return (T = w.current) === null || T === void 0 || T.addEventListener("wheel", R), function() {
      var k;
      (k = w.current) === null || k === void 0 || k.removeEventListener("wheel", R);
    };
  }, []);
  var O = c.useMemo(function() {
    return i.every(function(T) {
      return T.width >= 0;
    });
  }, [i]), _ = i[i.length - 1], $ = {
    fixed: _ ? _.fixed : null,
    scrollbar: !0,
    onHeaderCell: function() {
      return {
        className: "".concat(x, "-cell-scrollbar")
      };
    }
  }, I = Zt(function() {
    return S ? [].concat(pe(a), [$]) : a;
  }, [S, a]), F = Zt(function() {
    return S ? [].concat(pe(i), [$]) : i;
  }, [S, i]), M = Zt(function() {
    var T = l.right, R = l.left;
    return D(D({}, l), {}, {
      left: u === "rtl" ? [].concat(pe(R.map(function(k) {
        return k + S;
      })), [0]) : R,
      right: u === "rtl" ? T : [].concat(pe(T.map(function(k) {
        return k + S;
      })), [0]),
      isSticky: E
    });
  }, [S, l, E]), V = Nk(o, s);
  return /* @__PURE__ */ c.createElement("div", {
    style: D({
      overflow: "hidden"
    }, E ? {
      top: f,
      bottom: v
    } : {}),
    ref: N,
    className: ne(n, P({}, p, !!p))
  }, /* @__PURE__ */ c.createElement("table", {
    style: {
      tableLayout: "fixed",
      visibility: r || V ? null : "hidden"
    }
  }, (!r || !g || O) && /* @__PURE__ */ c.createElement(bg, {
    colWidths: V ? [].concat(pe(V), [S]) : [],
    columCount: s + 1,
    columns: F
  }), m(D(D({}, y), {}, {
    stickyOffsets: M,
    columns: I,
    flattenColumns: F
  }))));
});
Hl.displayName = "FixedHolder";
var Ok = [], Pk = {}, zi = "rc-table-internal-hook", Rk = /* @__PURE__ */ c.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return Zu(e.props, t.props) ? e.pingLeft !== t.pingLeft || e.pingRight !== t.pingRight : !1;
});
function kr(e) {
  var t, n = e.prefixCls, r = e.className, a = e.rowClassName, i = e.style, o = e.data, s = e.rowKey, l = e.scroll, u = e.tableLayout, d = e.direction, f = e.title, v = e.footer, p = e.summary, h = e.id, g = e.showHeader, m = e.components, y = e.emptyText, b = e.onRow, x = e.onHeaderRow, C = e.internalHooks, E = e.transformColumns, S = e.internalRefs, w = e.sticky, N = o || Ok, O = !!N.length;
  process.env.NODE_ENV !== "production" && (["onRowClick", "onRowDoubleClick", "onRowContextMenu", "onRowMouseEnter", "onRowMouseLeave"].forEach(function(qe) {
    Fe(e[qe] === void 0, "`".concat(qe, "` is removed, please use `onRow` instead."));
  }), Fe(!("getBodyWrapper" in e), "`getBodyWrapper` is deprecated, please use custom `components` instead."));
  var _ = c.useCallback(function(qe, dt) {
    return og(m || {}, qe) || dt;
  }, [m]), $ = c.useMemo(function() {
    return typeof s == "function" ? s : function(qe) {
      var dt = qe && qe[s];
      return process.env.NODE_ENV !== "production" && Fe(dt !== void 0, "Each record in table should have a unique `key` prop, or set `rowKey` to an unique primary key."), dt;
    };
  }, [s]), I = sk(e), F = I.expandIcon, M = I.expandedRowKeys, V = I.defaultExpandedRowKeys, T = I.defaultExpandAllRows, R = I.expandedRowRender, k = I.columnTitle, A = I.onExpand, U = I.onExpandedRowsChange, z = I.expandRowByClick, B = I.rowExpandable, G = I.expandIconColumnIndex, W = I.expandedRowClassName, j = I.childrenColumnName, H = I.indentSize, q = F || bk, Y = j || "children", J = c.useMemo(function() {
    return R ? "row" : e.expandable && C === zi && e.expandable.__PARENT_RENDER_ICON__ || N.some(function(qe) {
      return qe && Le(qe) === "object" && qe[Y];
    }) ? "nest" : !1;
  }, [!!R, N]), oe = c.useState(function() {
    return V || (T ? Ck(N, $, Y) : []);
  }), re = X(oe, 2), de = re[0], Z = re[1], Q = c.useMemo(function() {
    return new Set(M || de || []);
  }, [M, de]), ce = c.useCallback(function(qe) {
    var dt = $(qe, N.indexOf(qe)), jt, bn = Q.has(dt);
    bn ? (Q.delete(dt), jt = pe(Q)) : jt = [].concat(pe(Q), [dt]), Z(jt), A && A(!bn, qe), U && U(jt);
  }, [$, Q, N, A, U]);
  process.env.NODE_ENV !== "production" && R && N.some(function(qe) {
    return Array.isArray(qe == null ? void 0 : qe[Y]);
  }) && Fe(!1, "`expandedRowRender` should not use with nested Table");
  var Ce = c.useState(0), we = X(Ce, 2), ke = we[0], ve = we[1], ae = fk(D(D(D({}, e), I), {}, {
    expandable: !!R,
    columnTitle: k,
    expandedKeys: Q,
    getRowKey: $,
    // https://github.com/ant-design/ant-design/issues/23894
    onTriggerExpand: ce,
    expandIcon: q,
    expandIconColumnIndex: G,
    direction: d
  }), C === zi ? E : null), ie = X(ae, 2), ee = ie[0], te = ie[1], xe = c.useMemo(function() {
    return {
      columns: ee,
      flattenColumns: te
    };
  }, [ee, te]), Me = c.useRef(), Te = c.useRef(), Ve = c.useRef(), Ae = c.useRef(), Ne = c.useRef(), $e = c.useState(!1), je = X($e, 2), lt = je[0], tt = je[1], ot = c.useState(!1), ft = X(ot, 2), nt = ft[0], Et = ft[1], at = yg(/* @__PURE__ */ new Map()), Ft = X(at, 2), Mt = Ft[0], rt = Ft[1], Ot = Wo(te), vt = Ot.map(function(qe) {
    return Mt.get(qe);
  }), Ze = c.useMemo(function() {
    return vt;
  }, [vt.join("_")]), Ke = pk(Ze, te.length, d), Oe = l && zl(l.y), se = l && zl(l.x) || !!I.fixed, ue = se && te.some(function(qe) {
    var dt = qe.fixed;
    return dt;
  }), me = c.useRef(), Se = Ek(w, n), _e = Se.isSticky, Je = Se.offsetHeader, Ct = Se.offsetSummary, Rt = Se.offsetScroll, At = Se.stickyClassName, Qe = Se.container, L = p == null ? void 0 : p(N), le = (Oe || _e) && /* @__PURE__ */ c.isValidElement(L) && L.type === qo && L.props.fixed, he, Pe, ze;
  Oe && (Pe = {
    overflowY: "scroll",
    maxHeight: l.y
  }), se && (he = {
    overflowX: "auto"
  }, Oe || (Pe = {
    overflowY: "hidden"
  }), ze = {
    width: (l == null ? void 0 : l.x) === !0 ? "auto" : l == null ? void 0 : l.x,
    minWidth: "100%"
  });
  var ge = c.useCallback(function(qe, dt) {
    Iu(Me.current) && rt(function(jt) {
      if (jt.get(qe) !== dt) {
        var bn = new Map(jt);
        return bn.set(qe, dt), bn;
      }
      return jt;
    });
  }, []), ye = vk(null), Ee = X(ye, 2), Ye = Ee[0], Re = Ee[1];
  function Ie(qe, dt) {
    dt && (typeof dt == "function" ? dt(qe) : dt.scrollLeft !== qe && (dt.scrollLeft = qe));
  }
  var Be = function(dt) {
    var jt = dt.currentTarget, bn = dt.scrollLeft, oy = d === "rtl", rr = typeof bn == "number" ? bn : jt.scrollLeft, dc = jt || Pk;
    if (!Re() || Re() === dc) {
      var rs;
      Ye(dc), Ie(rr, Te.current), Ie(rr, Ve.current), Ie(rr, Ne.current), Ie(rr, (rs = me.current) === null || rs === void 0 ? void 0 : rs.setScrollLeft);
    }
    if (jt) {
      var as = jt.scrollWidth, is = jt.clientWidth;
      if (as === is) {
        tt(!1), Et(!1);
        return;
      }
      oy ? (tt(-rr < as - is), Et(-rr > 0)) : (tt(rr > 0), Et(rr < as - is));
    }
  }, Pt = function() {
    se && Ve.current ? Be({
      currentTarget: Ve.current
    }) : (tt(!1), Et(!1));
  }, ut = function(dt) {
    var jt = dt.width;
    jt !== ke && (Pt(), ve(Me.current ? Me.current.offsetWidth : jt));
  }, xt = c.useRef(!1);
  c.useEffect(function() {
    xt.current && Pt();
  }, [se, o, ee.length]), c.useEffect(function() {
    xt.current = !0;
  }, []);
  var kt = c.useState(0), Fn = X(kt, 2), Un = Fn[0], vr = Fn[1], Tr = c.useState(!0), Wn = X(Tr, 2), pa = Wn[0], _r = Wn[1];
  c.useEffect(function() {
    Ve.current instanceof Element ? vr(Nf(Ve.current).width) : vr(Nf(Ae.current).width), _r(_P("position", "sticky"));
  }, []), c.useEffect(function() {
    C === zi && S && (S.body.current = Ve.current);
  });
  var nr = _(["table"], "table"), Ge = c.useMemo(function() {
    return u || (ue ? (l == null ? void 0 : l.x) === "max-content" ? "auto" : "fixed" : Oe || _e || te.some(function(qe) {
      var dt = qe.ellipsis;
      return dt;
    }) ? "fixed" : "auto");
  }, [Oe, ue, te, u, _e]), He, Lt = {
    colWidths: Ze,
    columCount: te.length,
    stickyOffsets: Ke,
    onHeaderRow: x,
    fixHeader: Oe,
    scroll: l
  }, Yt = c.useMemo(function() {
    return O ? null : typeof y == "function" ? y() : y;
  }, [O, y]), Tt = /* @__PURE__ */ c.createElement(gg, {
    data: N,
    measureColumnWidth: Oe || se || _e,
    expandedKeys: Q,
    rowExpandable: B,
    getRowKey: $,
    onRow: b,
    emptyNode: Yt,
    childrenColumnName: Y
  }), Xt = /* @__PURE__ */ c.createElement(bg, {
    colWidths: te.map(function(qe) {
      var dt = qe.width;
      return dt;
    }),
    columns: te
  }), tn = _(["body"]);
  if (process.env.NODE_ENV !== "production" && typeof tn == "function" && O && !Oe && Fe(!1, "`components.body` with render props is only work on `scroll.y`."), Oe || _e) {
    var pt;
    typeof tn == "function" ? (pt = tn(N, {
      scrollbarSize: Un,
      ref: Ve,
      onScroll: Be
    }), Lt.colWidths = te.map(function(qe, dt) {
      var jt = qe.width, bn = dt === ee.length - 1 ? jt - Un : jt;
      return typeof bn == "number" && !Number.isNaN(bn) ? bn : (Fe(!1, "When use `components.body` with render props. Each column should have a fixed `width` value."), 0);
    })) : pt = /* @__PURE__ */ c.createElement("div", {
      style: D(D({}, he), Pe),
      onScroll: Be,
      ref: Ve,
      className: ne("".concat(n, "-body"))
    }, /* @__PURE__ */ c.createElement(nr, {
      style: D(D({}, ze), {}, {
        tableLayout: Ge
      })
    }, Xt, Tt, !le && L && /* @__PURE__ */ c.createElement(Ti, {
      stickyOffsets: Ke,
      flattenColumns: te
    }, L)));
    var et = D(D(D({
      noData: !N.length,
      maxContentScroll: se && l.x === "max-content"
    }, Lt), xe), {}, {
      direction: d,
      stickyClassName: At,
      onScroll: Be
    });
    He = /* @__PURE__ */ c.createElement(c.Fragment, null, g !== !1 && /* @__PURE__ */ c.createElement(Hl, K({}, et, {
      stickyTopOffset: Je,
      className: "".concat(n, "-header"),
      ref: Te
    }), function(qe) {
      return /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(_f, qe), le === "top" && /* @__PURE__ */ c.createElement(Ti, qe, L));
    }), pt, le && le !== "top" && /* @__PURE__ */ c.createElement(Hl, K({}, et, {
      stickyBottomOffset: Ct,
      className: "".concat(n, "-summary"),
      ref: Ne
    }), function(qe) {
      return /* @__PURE__ */ c.createElement(Ti, qe, L);
    }), _e && /* @__PURE__ */ c.createElement(Sk, {
      ref: me,
      offsetScroll: Rt,
      scrollBodyRef: Ve,
      onScroll: Be,
      container: Qe
    }));
  } else
    He = /* @__PURE__ */ c.createElement("div", {
      style: D(D({}, he), Pe),
      className: ne("".concat(n, "-content")),
      onScroll: Be,
      ref: Ve
    }, /* @__PURE__ */ c.createElement(nr, {
      style: D(D({}, ze), {}, {
        tableLayout: Ge
      })
    }, Xt, g !== !1 && /* @__PURE__ */ c.createElement(_f, K({}, Lt, xe)), Tt, L && /* @__PURE__ */ c.createElement(Ti, {
      stickyOffsets: Ke,
      flattenColumns: te
    }, L)));
  var ct = Nr(e, {
    aria: !0,
    data: !0
  }), wt = /* @__PURE__ */ c.createElement("div", K({
    className: ne(n, r, (t = {}, P(t, "".concat(n, "-rtl"), d === "rtl"), P(t, "".concat(n, "-ping-left"), lt), P(t, "".concat(n, "-ping-right"), nt), P(t, "".concat(n, "-layout-fixed"), u === "fixed"), P(t, "".concat(n, "-fixed-header"), Oe), P(t, "".concat(n, "-fixed-column"), ue), P(t, "".concat(n, "-scroll-horizontal"), se), P(t, "".concat(n, "-has-fix-left"), te[0] && te[0].fixed), P(t, "".concat(n, "-has-fix-right"), te[te.length - 1] && te[te.length - 1].fixed === "right"), t)),
    style: i,
    id: h,
    ref: Me
  }, ct), /* @__PURE__ */ c.createElement(Rk, {
    pingLeft: lt,
    pingRight: nt,
    props: D(D({}, e), {}, {
      stickyOffsets: Ke,
      mergedExpandedKeys: Q
    })
  }, f && /* @__PURE__ */ c.createElement(If, {
    className: "".concat(n, "-title")
  }, f(N)), /* @__PURE__ */ c.createElement("div", {
    ref: Ae,
    className: "".concat(n, "-container")
  }, He), v && /* @__PURE__ */ c.createElement(If, {
    className: "".concat(n, "-footer")
  }, v(N))));
  se && (wt = /* @__PURE__ */ c.createElement(zn, {
    onResize: ut
  }, wt));
  var Jt = c.useMemo(function() {
    return {
      prefixCls: n,
      getComponent: _,
      scrollbarSize: Un,
      direction: d,
      fixedInfoList: te.map(function(qe, dt) {
        return rc(dt, dt, te, Ke, d);
      }),
      isSticky: _e
    };
  }, [n, _, Un, d, te, Ke, _e]), Gn = c.useMemo(function() {
    return D(D({}, xe), {}, {
      tableLayout: Ge,
      rowClassName: a,
      expandedRowClassName: W,
      expandIcon: q,
      expandableType: J,
      expandRowByClick: z,
      expandedRowRender: R,
      onTriggerExpand: ce,
      expandIconColumnIndex: G,
      indentSize: H,
      allColumnsFixedLeft: xe.flattenColumns.every(function(qe) {
        return qe.fixed === "left";
      })
    });
  }, [xe, Ge, a, W, q, J, z, R, ce, G, H]), pr = c.useMemo(function() {
    return {
      componentWidth: ke,
      fixHeader: Oe,
      fixColumn: ue,
      horizonScroll: se
    };
  }, [ke, Oe, ue, se]), ns = c.useMemo(function() {
    return {
      onColumnResize: ge
    };
  }, [ge]);
  return /* @__PURE__ */ c.createElement(sg.Provider, {
    value: pa
  }, /* @__PURE__ */ c.createElement(Bn.Provider, {
    value: Jt
  }, /* @__PURE__ */ c.createElement(Go.Provider, {
    value: Gn
  }, /* @__PURE__ */ c.createElement(fg.Provider, {
    value: pr
  }, /* @__PURE__ */ c.createElement(pg.Provider, {
    value: ns
  }, wt)))));
}
kr.EXPAND_COLUMN = Yn;
kr.Column = H2;
kr.ColumnGroup = j2;
kr.Summary = xg;
kr.defaultProps = {
  rowKey: "key",
  prefixCls: "rc-table",
  emptyText: function() {
    return "No Data";
  }
};
function kk(e) {
  return null;
}
function Tk(e) {
  return null;
}
function _k(e) {
  return function(n) {
    var r, a = n.prefixCls, i = n.onExpand, o = n.record, s = n.expanded, l = n.expandable, u = "".concat(a, "-row-expand-icon");
    return /* @__PURE__ */ c.createElement("button", {
      type: "button",
      onClick: function(f) {
        i(o, f), f.stopPropagation();
      },
      className: ne(u, (r = {}, P(r, "".concat(u, "-spaced"), !l), P(r, "".concat(u, "-expanded"), l && s), P(r, "".concat(u, "-collapsed"), l && !s), r)),
      "aria-label": s ? e.collapse : e.expand,
      "aria-expanded": s
    });
  };
}
function na(e, t) {
  return "key" in e && e.key !== void 0 && e.key !== null ? e.key : e.dataIndex ? Array.isArray(e.dataIndex) ? e.dataIndex.join(".") : e.dataIndex : t;
}
function Yo(e, t) {
  return t ? "".concat(t, "-").concat(e) : "".concat(e);
}
function Xo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ik(e, t) {
  var n = Xo(e, t);
  return Object.prototype.toString.call(n) === "[object Object]" ? "" : n;
}
var Fk = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z" } }] }, name: "filter", theme: "filled" };
const Mk = Fk;
var Sg = function(t, n) {
  return /* @__PURE__ */ c.createElement(It, D(D({}, t), {}, {
    ref: n,
    icon: Mk
  }));
};
Sg.displayName = "FilterFilled";
const $k = /* @__PURE__ */ c.forwardRef(Sg);
function Dk() {
  this.__data__ = [], this.size = 0;
}
var Ak = Dk;
function Lk(e, t) {
  return e === t || e !== e && t !== t;
}
var Eg = Lk, Kk = Eg;
function Vk(e, t) {
  for (var n = e.length; n--; )
    if (Kk(e[n][0], t))
      return n;
  return -1;
}
var Jo = Vk, zk = Jo, jk = Array.prototype, Hk = jk.splice;
function Bk(e) {
  var t = this.__data__, n = zk(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Hk.call(t, n, 1), --this.size, !0;
}
var Uk = Bk, Wk = Jo;
function Gk(e) {
  var t = this.__data__, n = Wk(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var qk = Gk, Yk = Jo;
function Xk(e) {
  return Yk(this.__data__, e) > -1;
}
var Jk = Xk, Qk = Jo;
function Zk(e, t) {
  var n = this.__data__, r = Qk(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var eT = Zk, tT = Ak, nT = Uk, rT = qk, aT = Jk, iT = eT;
function la(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
la.prototype.clear = tT;
la.prototype.delete = nT;
la.prototype.get = rT;
la.prototype.has = aT;
la.prototype.set = iT;
var Qo = la, oT = Qo;
function sT() {
  this.__data__ = new oT(), this.size = 0;
}
var lT = sT;
function uT(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var cT = uT;
function dT(e) {
  return this.__data__.get(e);
}
var fT = dT;
function vT(e) {
  return this.__data__.has(e);
}
var pT = vT, mT = ei, hT = Bo, gT = "[object AsyncFunction]", yT = "[object Function]", bT = "[object GeneratorFunction]", CT = "[object Proxy]";
function xT(e) {
  if (!hT(e))
    return !1;
  var t = mT(e);
  return t == yT || t == bT || t == gT || t == CT;
}
var wg = xT, ST = Hn, ET = ST["__core-js_shared__"], wT = ET, Ks = wT, Mf = function() {
  var e = /[^.]+$/.exec(Ks && Ks.keys && Ks.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function NT(e) {
  return !!Mf && Mf in e;
}
var OT = NT, PT = Function.prototype, RT = PT.toString;
function kT(e) {
  if (e != null) {
    try {
      return RT.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ng = kT, TT = wg, _T = OT, IT = Bo, FT = Ng, MT = /[\\^$.*+?()[\]{}|]/g, $T = /^\[object .+?Constructor\]$/, DT = Function.prototype, AT = Object.prototype, LT = DT.toString, KT = AT.hasOwnProperty, VT = RegExp(
  "^" + LT.call(KT).replace(MT, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function zT(e) {
  if (!IT(e) || _T(e))
    return !1;
  var t = TT(e) ? VT : $T;
  return t.test(FT(e));
}
var jT = zT;
function HT(e, t) {
  return e == null ? void 0 : e[t];
}
var BT = HT, UT = jT, WT = BT;
function GT(e, t) {
  var n = WT(e, t);
  return UT(n) ? n : void 0;
}
var ua = GT, qT = ua, YT = Hn, XT = qT(YT, "Map"), ic = XT, JT = ua, QT = JT(Object, "create"), Zo = QT, $f = Zo;
function ZT() {
  this.__data__ = $f ? $f(null) : {}, this.size = 0;
}
var e_ = ZT;
function t_(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var n_ = t_, r_ = Zo, a_ = "__lodash_hash_undefined__", i_ = Object.prototype, o_ = i_.hasOwnProperty;
function s_(e) {
  var t = this.__data__;
  if (r_) {
    var n = t[e];
    return n === a_ ? void 0 : n;
  }
  return o_.call(t, e) ? t[e] : void 0;
}
var l_ = s_, u_ = Zo, c_ = Object.prototype, d_ = c_.hasOwnProperty;
function f_(e) {
  var t = this.__data__;
  return u_ ? t[e] !== void 0 : d_.call(t, e);
}
var v_ = f_, p_ = Zo, m_ = "__lodash_hash_undefined__";
function h_(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = p_ && t === void 0 ? m_ : t, this;
}
var g_ = h_, y_ = e_, b_ = n_, C_ = l_, x_ = v_, S_ = g_;
function ca(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ca.prototype.clear = y_;
ca.prototype.delete = b_;
ca.prototype.get = C_;
ca.prototype.has = x_;
ca.prototype.set = S_;
var E_ = ca, Df = E_, w_ = Qo, N_ = ic;
function O_() {
  this.size = 0, this.__data__ = {
    hash: new Df(),
    map: new (N_ || w_)(),
    string: new Df()
  };
}
var P_ = O_;
function R_(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var k_ = R_, T_ = k_;
function __(e, t) {
  var n = e.__data__;
  return T_(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var es = __, I_ = es;
function F_(e) {
  var t = I_(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var M_ = F_, $_ = es;
function D_(e) {
  return $_(this, e).get(e);
}
var A_ = D_, L_ = es;
function K_(e) {
  return L_(this, e).has(e);
}
var V_ = K_, z_ = es;
function j_(e, t) {
  var n = z_(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var H_ = j_, B_ = P_, U_ = M_, W_ = A_, G_ = V_, q_ = H_;
function da(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
da.prototype.clear = B_;
da.prototype.delete = U_;
da.prototype.get = W_;
da.prototype.has = G_;
da.prototype.set = q_;
var Og = da, Y_ = Qo, X_ = ic, J_ = Og, Q_ = 200;
function Z_(e, t) {
  var n = this.__data__;
  if (n instanceof Y_) {
    var r = n.__data__;
    if (!X_ || r.length < Q_ - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new J_(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var eI = Z_, tI = Qo, nI = lT, rI = cT, aI = fT, iI = pT, oI = eI;
function fa(e) {
  var t = this.__data__ = new tI(e);
  this.size = t.size;
}
fa.prototype.clear = nI;
fa.prototype.delete = rI;
fa.prototype.get = aI;
fa.prototype.has = iI;
fa.prototype.set = oI;
var sI = fa, lI = "__lodash_hash_undefined__";
function uI(e) {
  return this.__data__.set(e, lI), this;
}
var cI = uI;
function dI(e) {
  return this.__data__.has(e);
}
var fI = dI, vI = Og, pI = cI, mI = fI;
function fo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new vI(); ++t < n; )
    this.add(e[t]);
}
fo.prototype.add = fo.prototype.push = pI;
fo.prototype.has = mI;
var hI = fo;
function gI(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var yI = gI;
function bI(e, t) {
  return e.has(t);
}
var CI = bI, xI = hI, SI = yI, EI = CI, wI = 1, NI = 2;
function OI(e, t, n, r, a, i) {
  var o = n & wI, s = e.length, l = t.length;
  if (s != l && !(o && l > s))
    return !1;
  var u = i.get(e), d = i.get(t);
  if (u && d)
    return u == t && d == e;
  var f = -1, v = !0, p = n & NI ? new xI() : void 0;
  for (i.set(e, t), i.set(t, e); ++f < s; ) {
    var h = e[f], g = t[f];
    if (r)
      var m = o ? r(g, h, f, t, e, i) : r(h, g, f, e, t, i);
    if (m !== void 0) {
      if (m)
        continue;
      v = !1;
      break;
    }
    if (p) {
      if (!SI(t, function(y, b) {
        if (!EI(p, b) && (h === y || a(h, y, n, r, i)))
          return p.push(b);
      })) {
        v = !1;
        break;
      }
    } else if (!(h === g || a(h, g, n, r, i))) {
      v = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), v;
}
var Pg = OI, PI = Hn, RI = PI.Uint8Array, kI = RI;
function TI(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, a) {
    n[++t] = [a, r];
  }), n;
}
var _I = TI;
function II(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var FI = II, Af = No, Lf = kI, MI = Eg, $I = Pg, DI = _I, AI = FI, LI = 1, KI = 2, VI = "[object Boolean]", zI = "[object Date]", jI = "[object Error]", HI = "[object Map]", BI = "[object Number]", UI = "[object RegExp]", WI = "[object Set]", GI = "[object String]", qI = "[object Symbol]", YI = "[object ArrayBuffer]", XI = "[object DataView]", Kf = Af ? Af.prototype : void 0, Vs = Kf ? Kf.valueOf : void 0;
function JI(e, t, n, r, a, i, o) {
  switch (n) {
    case XI:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case YI:
      return !(e.byteLength != t.byteLength || !i(new Lf(e), new Lf(t)));
    case VI:
    case zI:
    case BI:
      return MI(+e, +t);
    case jI:
      return e.name == t.name && e.message == t.message;
    case UI:
    case GI:
      return e == t + "";
    case HI:
      var s = DI;
    case WI:
      var l = r & LI;
      if (s || (s = AI), e.size != t.size && !l)
        return !1;
      var u = o.get(e);
      if (u)
        return u == t;
      r |= KI, o.set(e, t);
      var d = $I(s(e), s(t), r, a, i, o);
      return o.delete(e), d;
    case qI:
      if (Vs)
        return Vs.call(e) == Vs.call(t);
  }
  return !1;
}
var QI = JI;
function ZI(e, t) {
  for (var n = -1, r = t.length, a = e.length; ++n < r; )
    e[a + n] = t[n];
  return e;
}
var eF = ZI, tF = eF, nF = Oo;
function rF(e, t, n) {
  var r = t(e);
  return nF(e) ? r : tF(r, n(e));
}
var aF = rF;
function iF(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = 0, i = []; ++n < r; ) {
    var o = e[n];
    t(o, n, e) && (i[a++] = o);
  }
  return i;
}
var oF = iF;
function sF() {
  return [];
}
var lF = sF, uF = oF, cF = lF, dF = Object.prototype, fF = dF.propertyIsEnumerable, Vf = Object.getOwnPropertySymbols, vF = Vf ? function(e) {
  return e == null ? [] : (e = Object(e), uF(Vf(e), function(t) {
    return fF.call(e, t);
  }));
} : cF, pF = vF;
function mF(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var hF = mF, gF = ei, yF = ti, bF = "[object Arguments]";
function CF(e) {
  return yF(e) && gF(e) == bF;
}
var xF = CF, zf = xF, SF = ti, Rg = Object.prototype, EF = Rg.hasOwnProperty, wF = Rg.propertyIsEnumerable, NF = zf(/* @__PURE__ */ function() {
  return arguments;
}()) ? zf : function(e) {
  return SF(e) && EF.call(e, "callee") && !wF.call(e, "callee");
}, OF = NF, vo = { exports: {} };
function PF() {
  return !1;
}
var RF = PF;
vo.exports;
(function(e, t) {
  var n = Hn, r = RF, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, s = o ? n.Buffer : void 0, l = s ? s.isBuffer : void 0, u = l || r;
  e.exports = u;
})(vo, vo.exports);
var kg = vo.exports, kF = 9007199254740991, TF = /^(?:0|[1-9]\d*)$/;
function _F(e, t) {
  var n = typeof e;
  return t = t ?? kF, !!t && (n == "number" || n != "symbol" && TF.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var IF = _F, FF = 9007199254740991;
function MF(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= FF;
}
var Tg = MF, $F = ei, DF = Tg, AF = ti, LF = "[object Arguments]", KF = "[object Array]", VF = "[object Boolean]", zF = "[object Date]", jF = "[object Error]", HF = "[object Function]", BF = "[object Map]", UF = "[object Number]", WF = "[object Object]", GF = "[object RegExp]", qF = "[object Set]", YF = "[object String]", XF = "[object WeakMap]", JF = "[object ArrayBuffer]", QF = "[object DataView]", ZF = "[object Float32Array]", eM = "[object Float64Array]", tM = "[object Int8Array]", nM = "[object Int16Array]", rM = "[object Int32Array]", aM = "[object Uint8Array]", iM = "[object Uint8ClampedArray]", oM = "[object Uint16Array]", sM = "[object Uint32Array]", _t = {};
_t[ZF] = _t[eM] = _t[tM] = _t[nM] = _t[rM] = _t[aM] = _t[iM] = _t[oM] = _t[sM] = !0;
_t[LF] = _t[KF] = _t[JF] = _t[VF] = _t[QF] = _t[zF] = _t[jF] = _t[HF] = _t[BF] = _t[UF] = _t[WF] = _t[GF] = _t[qF] = _t[YF] = _t[XF] = !1;
function lM(e) {
  return AF(e) && DF(e.length) && !!_t[$F(e)];
}
var uM = lM;
function cM(e) {
  return function(t) {
    return e(t);
  };
}
var dM = cM, po = { exports: {} };
po.exports;
(function(e, t) {
  var n = Ep, r = t && !t.nodeType && t, a = r && !0 && e && !e.nodeType && e, i = a && a.exports === r, o = i && n.process, s = function() {
    try {
      var l = a && a.require && a.require("util").types;
      return l || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = s;
})(po, po.exports);
var fM = po.exports, vM = uM, pM = dM, jf = fM, Hf = jf && jf.isTypedArray, mM = Hf ? pM(Hf) : vM, _g = mM, hM = hF, gM = OF, yM = Oo, bM = kg, CM = IF, xM = _g, SM = Object.prototype, EM = SM.hasOwnProperty;
function wM(e, t) {
  var n = yM(e), r = !n && gM(e), a = !n && !r && bM(e), i = !n && !r && !a && xM(e), o = n || r || a || i, s = o ? hM(e.length, String) : [], l = s.length;
  for (var u in e)
    (t || EM.call(e, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    CM(u, l))) && s.push(u);
  return s;
}
var NM = wM, OM = Object.prototype;
function PM(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || OM;
  return e === n;
}
var RM = PM;
function kM(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var TM = kM, _M = TM, IM = _M(Object.keys, Object), FM = IM, MM = RM, $M = FM, DM = Object.prototype, AM = DM.hasOwnProperty;
function LM(e) {
  if (!MM(e))
    return $M(e);
  var t = [];
  for (var n in Object(e))
    AM.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var KM = LM, VM = wg, zM = Tg;
function jM(e) {
  return e != null && zM(e.length) && !VM(e);
}
var HM = jM, BM = NM, UM = KM, WM = HM;
function GM(e) {
  return WM(e) ? BM(e) : UM(e);
}
var qM = GM, YM = aF, XM = pF, JM = qM;
function QM(e) {
  return YM(e, JM, XM);
}
var ZM = QM, Bf = ZM, e$ = 1, t$ = Object.prototype, n$ = t$.hasOwnProperty;
function r$(e, t, n, r, a, i) {
  var o = n & e$, s = Bf(e), l = s.length, u = Bf(t), d = u.length;
  if (l != d && !o)
    return !1;
  for (var f = l; f--; ) {
    var v = s[f];
    if (!(o ? v in t : n$.call(t, v)))
      return !1;
  }
  var p = i.get(e), h = i.get(t);
  if (p && h)
    return p == t && h == e;
  var g = !0;
  i.set(e, t), i.set(t, e);
  for (var m = o; ++f < l; ) {
    v = s[f];
    var y = e[v], b = t[v];
    if (r)
      var x = o ? r(b, y, v, t, e, i) : r(y, b, v, e, t, i);
    if (!(x === void 0 ? y === b || a(y, b, n, r, i) : x)) {
      g = !1;
      break;
    }
    m || (m = v == "constructor");
  }
  if (g && !m) {
    var C = e.constructor, E = t.constructor;
    C != E && "constructor" in e && "constructor" in t && !(typeof C == "function" && C instanceof C && typeof E == "function" && E instanceof E) && (g = !1);
  }
  return i.delete(e), i.delete(t), g;
}
var a$ = r$, i$ = ua, o$ = Hn, s$ = i$(o$, "DataView"), l$ = s$, u$ = ua, c$ = Hn, d$ = u$(c$, "Promise"), f$ = d$, v$ = ua, p$ = Hn, m$ = v$(p$, "Set"), h$ = m$, g$ = ua, y$ = Hn, b$ = g$(y$, "WeakMap"), C$ = b$, Bl = l$, Ul = ic, Wl = f$, Gl = h$, ql = C$, Ig = ei, va = Ng, Uf = "[object Map]", x$ = "[object Object]", Wf = "[object Promise]", Gf = "[object Set]", qf = "[object WeakMap]", Yf = "[object DataView]", S$ = va(Bl), E$ = va(Ul), w$ = va(Wl), N$ = va(Gl), O$ = va(ql), br = Ig;
(Bl && br(new Bl(new ArrayBuffer(1))) != Yf || Ul && br(new Ul()) != Uf || Wl && br(Wl.resolve()) != Wf || Gl && br(new Gl()) != Gf || ql && br(new ql()) != qf) && (br = function(e) {
  var t = Ig(e), n = t == x$ ? e.constructor : void 0, r = n ? va(n) : "";
  if (r)
    switch (r) {
      case S$:
        return Yf;
      case E$:
        return Uf;
      case w$:
        return Wf;
      case N$:
        return Gf;
      case O$:
        return qf;
    }
  return t;
});
var P$ = br, zs = sI, R$ = Pg, k$ = QI, T$ = a$, Xf = P$, Jf = Oo, Qf = kg, _$ = _g, I$ = 1, Zf = "[object Arguments]", ev = "[object Array]", _i = "[object Object]", F$ = Object.prototype, tv = F$.hasOwnProperty;
function M$(e, t, n, r, a, i) {
  var o = Jf(e), s = Jf(t), l = o ? ev : Xf(e), u = s ? ev : Xf(t);
  l = l == Zf ? _i : l, u = u == Zf ? _i : u;
  var d = l == _i, f = u == _i, v = l == u;
  if (v && Qf(e)) {
    if (!Qf(t))
      return !1;
    o = !0, d = !1;
  }
  if (v && !d)
    return i || (i = new zs()), o || _$(e) ? R$(e, t, n, r, a, i) : k$(e, t, l, n, r, a, i);
  if (!(n & I$)) {
    var p = d && tv.call(e, "__wrapped__"), h = f && tv.call(t, "__wrapped__");
    if (p || h) {
      var g = p ? e.value() : e, m = h ? t.value() : t;
      return i || (i = new zs()), a(g, m, n, r, i);
    }
  }
  return v ? (i || (i = new zs()), T$(e, t, n, r, a, i)) : !1;
}
var $$ = M$, D$ = $$, nv = ti;
function Fg(e, t, n, r, a) {
  return e === t ? !0 : e == null || t == null || !nv(e) && !nv(t) ? e !== e && t !== t : D$(e, t, n, r, Fg, a);
}
var A$ = Fg, L$ = A$;
function K$(e, t) {
  return L$(e, t);
}
var V$ = K$;
const rv = /* @__PURE__ */ qa(V$);
var oc = /* @__PURE__ */ c.createContext(null);
function z$(e) {
  var t = e.dropPosition, n = e.dropLevelOffset, r = e.indent, a = {
    pointerEvents: "none",
    position: "absolute",
    right: 0,
    backgroundColor: "red",
    height: 2
  };
  switch (t) {
    case -1:
      a.top = 0, a.left = -n * r;
      break;
    case 1:
      a.bottom = 0, a.left = -n * r;
      break;
    case 0:
      a.bottom = 0, a.left = r;
      break;
  }
  return /* @__PURE__ */ c.createElement("div", {
    style: a
  });
}
function Mg(e) {
  if (e == null)
    throw new TypeError("Cannot destructure " + e);
}
var j$ = function(t) {
  for (var n = t.prefixCls, r = t.level, a = t.isStart, i = t.isEnd, o = "".concat(n, "-indent-unit"), s = [], l = 0; l < r; l += 1) {
    var u;
    s.push(/* @__PURE__ */ c.createElement("span", {
      key: l,
      className: ne(o, (u = {}, P(u, "".concat(o, "-start"), a[l]), P(u, "".concat(o, "-end"), i[l]), u))
    }));
  }
  return /* @__PURE__ */ c.createElement("span", {
    "aria-hidden": "true",
    className: "".concat(n, "-indent")
  }, s);
};
const H$ = /* @__PURE__ */ c.memo(j$);
var B$ = ["eventKey", "className", "style", "dragOver", "dragOverGapTop", "dragOverGapBottom", "isLeaf", "isStart", "isEnd", "expanded", "selected", "checked", "halfChecked", "loading", "domRef", "active", "data", "onMouseMove", "selectable"], av = "open", iv = "close", U$ = "---", W$ = /* @__PURE__ */ function(e) {
  Gt(n, e);
  var t = qt(n);
  function n() {
    var r;
    Kt(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), r.state = {
      dragNodeHighlight: !1
    }, r.selectHandle = void 0, r.cacheIndent = void 0, r.onSelectorClick = function(s) {
      var l = r.props.context.onNodeClick;
      l(s, Ht(r.props)), r.isSelectable() ? r.onSelect(s) : r.onCheck(s);
    }, r.onSelectorDoubleClick = function(s) {
      var l = r.props.context.onNodeDoubleClick;
      l(s, Ht(r.props));
    }, r.onSelect = function(s) {
      if (!r.isDisabled()) {
        var l = r.props.context.onNodeSelect;
        l(s, Ht(r.props));
      }
    }, r.onCheck = function(s) {
      if (!r.isDisabled()) {
        var l = r.props, u = l.disableCheckbox, d = l.checked, f = r.props.context.onNodeCheck;
        if (!(!r.isCheckable() || u)) {
          var v = !d;
          f(s, Ht(r.props), v);
        }
      }
    }, r.onMouseEnter = function(s) {
      var l = r.props.context.onNodeMouseEnter;
      l(s, Ht(r.props));
    }, r.onMouseLeave = function(s) {
      var l = r.props.context.onNodeMouseLeave;
      l(s, Ht(r.props));
    }, r.onContextMenu = function(s) {
      var l = r.props.context.onNodeContextMenu;
      l(s, Ht(r.props));
    }, r.onDragStart = function(s) {
      var l = r.props.context.onNodeDragStart;
      s.stopPropagation(), r.setState({
        dragNodeHighlight: !0
      }), l(s, Ue(r));
      try {
        s.dataTransfer.setData("text/plain", "");
      } catch {
      }
    }, r.onDragEnter = function(s) {
      var l = r.props.context.onNodeDragEnter;
      s.preventDefault(), s.stopPropagation(), l(s, Ue(r));
    }, r.onDragOver = function(s) {
      var l = r.props.context.onNodeDragOver;
      s.preventDefault(), s.stopPropagation(), l(s, Ue(r));
    }, r.onDragLeave = function(s) {
      var l = r.props.context.onNodeDragLeave;
      s.stopPropagation(), l(s, Ue(r));
    }, r.onDragEnd = function(s) {
      var l = r.props.context.onNodeDragEnd;
      s.stopPropagation(), r.setState({
        dragNodeHighlight: !1
      }), l(s, Ue(r));
    }, r.onDrop = function(s) {
      var l = r.props.context.onNodeDrop;
      s.preventDefault(), s.stopPropagation(), r.setState({
        dragNodeHighlight: !1
      }), l(s, Ue(r));
    }, r.onExpand = function(s) {
      var l = r.props, u = l.loading, d = l.context.onNodeExpand;
      u || d(s, Ht(r.props));
    }, r.setSelectHandle = function(s) {
      r.selectHandle = s;
    }, r.getNodeState = function() {
      var s = r.props.expanded;
      return r.isLeaf() ? null : s ? av : iv;
    }, r.hasChildren = function() {
      var s = r.props.eventKey, l = r.props.context.keyEntities, u = mn(l, s) || {}, d = u.children;
      return !!(d || []).length;
    }, r.isLeaf = function() {
      var s = r.props, l = s.isLeaf, u = s.loaded, d = r.props.context.loadData, f = r.hasChildren();
      return l === !1 ? !1 : l || !d && !f || d && u && !f;
    }, r.isDisabled = function() {
      var s = r.props.disabled, l = r.props.context.disabled;
      return !!(l || s);
    }, r.isCheckable = function() {
      var s = r.props.checkable, l = r.props.context.checkable;
      return !l || s === !1 ? !1 : l;
    }, r.syncLoadData = function(s) {
      var l = s.expanded, u = s.loading, d = s.loaded, f = r.props.context, v = f.loadData, p = f.onNodeLoad;
      u || v && l && !r.isLeaf() && !r.hasChildren() && !d && p(Ht(r.props));
    }, r.isDraggable = function() {
      var s = r.props, l = s.data, u = s.context.draggable;
      return !!(u && (!u.nodeDraggable || u.nodeDraggable(l)));
    }, r.renderDragHandler = function() {
      var s = r.props.context, l = s.draggable, u = s.prefixCls;
      return l != null && l.icon ? /* @__PURE__ */ c.createElement("span", {
        className: "".concat(u, "-draggable-icon")
      }, l.icon) : null;
    }, r.renderSwitcherIconDom = function(s) {
      var l = r.props.switcherIcon, u = r.props.context.switcherIcon, d = l || u;
      return typeof d == "function" ? d(D(D({}, r.props), {}, {
        isLeaf: s
      })) : d;
    }, r.renderSwitcher = function() {
      var s = r.props.expanded, l = r.props.context.prefixCls;
      if (r.isLeaf()) {
        var u = r.renderSwitcherIconDom(!0);
        return u !== !1 ? /* @__PURE__ */ c.createElement("span", {
          className: ne("".concat(l, "-switcher"), "".concat(l, "-switcher-noop"))
        }, u) : null;
      }
      var d = ne("".concat(l, "-switcher"), "".concat(l, "-switcher_").concat(s ? av : iv)), f = r.renderSwitcherIconDom(!1);
      return f !== !1 ? /* @__PURE__ */ c.createElement("span", {
        onClick: r.onExpand,
        className: d
      }, f) : null;
    }, r.renderCheckbox = function() {
      var s = r.props, l = s.checked, u = s.halfChecked, d = s.disableCheckbox, f = r.props.context.prefixCls, v = r.isDisabled(), p = r.isCheckable();
      if (!p)
        return null;
      var h = typeof p != "boolean" ? p : null;
      return /* @__PURE__ */ c.createElement("span", {
        className: ne("".concat(f, "-checkbox"), l && "".concat(f, "-checkbox-checked"), !l && u && "".concat(f, "-checkbox-indeterminate"), (v || d) && "".concat(f, "-checkbox-disabled")),
        onClick: r.onCheck
      }, h);
    }, r.renderIcon = function() {
      var s = r.props.loading, l = r.props.context.prefixCls;
      return /* @__PURE__ */ c.createElement("span", {
        className: ne("".concat(l, "-iconEle"), "".concat(l, "-icon__").concat(r.getNodeState() || "docu"), s && "".concat(l, "-icon_loading"))
      });
    }, r.renderSelector = function() {
      var s = r.state.dragNodeHighlight, l = r.props, u = l.title, d = u === void 0 ? U$ : u, f = l.selected, v = l.icon, p = l.loading, h = l.data, g = r.props.context, m = g.prefixCls, y = g.showIcon, b = g.icon, x = g.loadData, C = g.titleRender, E = r.isDisabled(), S = "".concat(m, "-node-content-wrapper"), w;
      if (y) {
        var N = v || b;
        w = N ? /* @__PURE__ */ c.createElement("span", {
          className: ne("".concat(m, "-iconEle"), "".concat(m, "-icon__customize"))
        }, typeof N == "function" ? N(r.props) : N) : r.renderIcon();
      } else
        x && p && (w = r.renderIcon());
      var O;
      typeof d == "function" ? O = d(h) : C ? O = C(h) : O = d;
      var _ = /* @__PURE__ */ c.createElement("span", {
        className: "".concat(m, "-title")
      }, O);
      return /* @__PURE__ */ c.createElement("span", {
        ref: r.setSelectHandle,
        title: typeof d == "string" ? d : "",
        className: ne("".concat(S), "".concat(S, "-").concat(r.getNodeState() || "normal"), !E && (f || s) && "".concat(m, "-node-selected")),
        onMouseEnter: r.onMouseEnter,
        onMouseLeave: r.onMouseLeave,
        onContextMenu: r.onContextMenu,
        onClick: r.onSelectorClick,
        onDoubleClick: r.onSelectorDoubleClick
      }, w, _, r.renderDropIndicator());
    }, r.renderDropIndicator = function() {
      var s = r.props, l = s.disabled, u = s.eventKey, d = r.props.context, f = d.draggable, v = d.dropLevelOffset, p = d.dropPosition, h = d.prefixCls, g = d.indent, m = d.dropIndicatorRender, y = d.dragOverNodeKey, b = d.direction, x = !!f, C = !l && x && y === u, E = g ?? r.cacheIndent;
      return r.cacheIndent = g, C ? m({
        dropPosition: p,
        dropLevelOffset: v,
        indent: E,
        prefixCls: h,
        direction: b
      }) : null;
    }, r;
  }
  return Vt(n, [{
    key: "componentDidMount",
    value: (
      // Isomorphic needn't load data in server side
      function() {
        this.syncLoadData(this.props);
      }
    )
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.syncLoadData(this.props);
    }
  }, {
    key: "isSelectable",
    value: function() {
      var a = this.props.selectable, i = this.props.context.selectable;
      return typeof a == "boolean" ? a : i;
    }
  }, {
    key: "render",
    value: (
      // =========================== Render ===========================
      function() {
        var a, i = this.props, o = i.eventKey, s = i.className, l = i.style, u = i.dragOver, d = i.dragOverGapTop, f = i.dragOverGapBottom, v = i.isLeaf, p = i.isStart, h = i.isEnd, g = i.expanded, m = i.selected, y = i.checked, b = i.halfChecked, x = i.loading, C = i.domRef, E = i.active;
        i.data;
        var S = i.onMouseMove, w = i.selectable, N = We(i, B$), O = this.props.context, _ = O.prefixCls, $ = O.filterTreeNode, I = O.keyEntities, F = O.dropContainerKey, M = O.dropTargetKey, V = O.draggingNodeKey, T = this.isDisabled(), R = Nr(N, {
          aria: !0,
          data: !0
        }), k = mn(I, o) || {}, A = k.level, U = h[h.length - 1], z = this.isDraggable(), B = !T && z, G = V === o, W = w !== void 0 ? {
          "aria-selected": !!w
        } : void 0;
        return /* @__PURE__ */ c.createElement("div", K({
          ref: C,
          className: ne(s, "".concat(_, "-treenode"), (a = {}, P(a, "".concat(_, "-treenode-disabled"), T), P(a, "".concat(_, "-treenode-switcher-").concat(g ? "open" : "close"), !v), P(a, "".concat(_, "-treenode-checkbox-checked"), y), P(a, "".concat(_, "-treenode-checkbox-indeterminate"), b), P(a, "".concat(_, "-treenode-selected"), m), P(a, "".concat(_, "-treenode-loading"), x), P(a, "".concat(_, "-treenode-active"), E), P(a, "".concat(_, "-treenode-leaf-last"), U), P(a, "".concat(_, "-treenode-draggable"), z), P(a, "dragging", G), P(a, "drop-target", M === o), P(a, "drop-container", F === o), P(a, "drag-over", !T && u), P(a, "drag-over-gap-top", !T && d), P(a, "drag-over-gap-bottom", !T && f), P(a, "filter-node", $ && $(Ht(this.props))), a)),
          style: l,
          draggable: B,
          "aria-grabbed": G,
          onDragStart: B ? this.onDragStart : void 0,
          onDragEnter: z ? this.onDragEnter : void 0,
          onDragOver: z ? this.onDragOver : void 0,
          onDragLeave: z ? this.onDragLeave : void 0,
          onDrop: z ? this.onDrop : void 0,
          onDragEnd: z ? this.onDragEnd : void 0,
          onMouseMove: S
        }, W, R), /* @__PURE__ */ c.createElement(H$, {
          prefixCls: _,
          level: A,
          isStart: p,
          isEnd: h
        }), this.renderDragHandler(), this.renderSwitcher(), this.renderCheckbox(), this.renderSelector());
      }
    )
  }]), n;
}(c.Component), ra = function(t) {
  return /* @__PURE__ */ c.createElement(oc.Consumer, null, function(n) {
    return /* @__PURE__ */ c.createElement(W$, K({}, t, {
      context: n
    }));
  });
};
ra.displayName = "TreeNode";
ra.isTreeNode = 1;
function G$(e, t) {
  var n = c.useState(!1), r = X(n, 2), a = r[0], i = r[1];
  c.useLayoutEffect(function() {
    if (a)
      return e(), function() {
        t();
      };
  }, [a]), c.useLayoutEffect(function() {
    return i(!0), function() {
      i(!1);
    };
  }, []);
}
var q$ = ["className", "style", "motion", "motionNodes", "motionType", "onMotionStart", "onMotionEnd", "active", "treeNodeRequiredProps"], $g = function(t, n) {
  var r = t.className, a = t.style, i = t.motion, o = t.motionNodes, s = t.motionType, l = t.onMotionStart, u = t.onMotionEnd, d = t.active, f = t.treeNodeRequiredProps, v = We(t, q$), p = c.useState(!0), h = X(p, 2), g = h[0], m = h[1], y = c.useContext(oc), b = y.prefixCls, x = o && s !== "hide";
  rn(function() {
    o && x !== g && m(x);
  }, [o]);
  var C = function() {
    o && l();
  }, E = c.useRef(!1), S = function() {
    o && !E.current && (E.current = !0, u());
  };
  G$(C, S);
  var w = function(O) {
    x === O && S();
  };
  return o ? /* @__PURE__ */ c.createElement(Pr, K({
    ref: n,
    visible: g
  }, i, {
    motionAppear: s === "show",
    onVisibleChanged: w
  }), function(N, O) {
    var _ = N.className, $ = N.style;
    return /* @__PURE__ */ c.createElement("div", {
      ref: O,
      className: ne("".concat(b, "-treenode-motion"), _),
      style: $
    }, o.map(function(I) {
      var F = K({}, (Mg(I.data), I.data)), M = I.title, V = I.key, T = I.isStart, R = I.isEnd;
      delete F.children;
      var k = Fa(V, f);
      return /* @__PURE__ */ c.createElement(ra, K({}, F, k, {
        title: M,
        active: d,
        data: I.data,
        key: V,
        isStart: T,
        isEnd: R
      }));
    }));
  }) : /* @__PURE__ */ c.createElement(ra, K({
    domRef: n,
    className: r,
    style: a
  }, v, {
    active: d
  }));
};
$g.displayName = "MotionTreeNode";
var Y$ = /* @__PURE__ */ c.forwardRef($g);
function X$() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = e.length, r = t.length;
  if (Math.abs(n - r) !== 1)
    return {
      add: !1,
      key: null
    };
  function a(i, o) {
    var s = /* @__PURE__ */ new Map();
    i.forEach(function(u) {
      s.set(u, !0);
    });
    var l = o.filter(function(u) {
      return !s.has(u);
    });
    return l.length === 1 ? l[0] : null;
  }
  return n < r ? {
    add: !0,
    key: a(e, t)
  } : {
    add: !1,
    key: a(t, e)
  };
}
function ov(e, t, n) {
  var r = e.findIndex(function(s) {
    return s.key === n;
  }), a = e[r + 1], i = t.findIndex(function(s) {
    return s.key === n;
  });
  if (a) {
    var o = t.findIndex(function(s) {
      return s.key === a.key;
    });
    return t.slice(i + 1, o);
  }
  return t.slice(i + 1);
}
var J$ = ["prefixCls", "data", "selectable", "checkable", "expandedKeys", "selectedKeys", "checkedKeys", "loadedKeys", "loadingKeys", "halfCheckedKeys", "keyEntities", "disabled", "dragging", "dragOverNodeKey", "dropPosition", "motion", "height", "itemHeight", "virtual", "focusable", "activeItem", "focused", "tabIndex", "onKeyDown", "onFocus", "onBlur", "onActiveChange", "onListChangeStart", "onListChangeEnd"], sv = {
  width: 0,
  height: 0,
  display: "flex",
  overflow: "hidden",
  opacity: 0,
  border: 0,
  padding: 0,
  margin: 0
}, Q$ = function() {
}, Or = "RC_TREE_MOTION_".concat(Math.random()), Yl = {
  key: Or
}, Dg = {
  key: Or,
  level: 0,
  index: 0,
  pos: "0",
  node: Yl,
  nodes: [Yl]
}, lv = {
  parent: null,
  children: [],
  pos: Dg.pos,
  data: Yl,
  title: null,
  key: Or,
  /** Hold empty list here since we do not use it */
  isStart: [],
  isEnd: []
};
function uv(e, t, n, r) {
  return t === !1 || !n ? e : e.slice(0, Math.ceil(n / r) + 1);
}
function cv(e) {
  var t = e.key, n = e.pos;
  return li(t, n);
}
function Z$(e) {
  for (var t = String(e.data.key), n = e; n.parent; )
    n = n.parent, t = "".concat(n.data.key, " > ").concat(t);
  return t;
}
var Ag = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.data;
  e.selectable, e.checkable;
  var a = e.expandedKeys, i = e.selectedKeys, o = e.checkedKeys, s = e.loadedKeys, l = e.loadingKeys, u = e.halfCheckedKeys, d = e.keyEntities, f = e.disabled, v = e.dragging, p = e.dragOverNodeKey, h = e.dropPosition, g = e.motion, m = e.height, y = e.itemHeight, b = e.virtual, x = e.focusable, C = e.activeItem, E = e.focused, S = e.tabIndex, w = e.onKeyDown, N = e.onFocus, O = e.onBlur, _ = e.onActiveChange, $ = e.onListChangeStart, I = e.onListChangeEnd, F = We(e, J$), M = c.useRef(null), V = c.useRef(null);
  c.useImperativeHandle(t, function() {
    return {
      scrollTo: function(ie) {
        M.current.scrollTo(ie);
      },
      getIndentWidth: function() {
        return V.current.offsetWidth;
      }
    };
  });
  var T = c.useState(a), R = X(T, 2), k = R[0], A = R[1], U = c.useState(r), z = X(U, 2), B = z[0], G = z[1], W = c.useState(r), j = X(W, 2), H = j[0], q = j[1], Y = c.useState([]), J = X(Y, 2), oe = J[0], re = J[1], de = c.useState(null), Z = X(de, 2), Q = Z[0], ce = Z[1], Ce = c.useRef(r);
  Ce.current = r;
  function we() {
    var ae = Ce.current;
    G(ae), q(ae), re([]), ce(null), I();
  }
  rn(function() {
    A(a);
    var ae = X$(k, a);
    if (ae.key !== null)
      if (ae.add) {
        var ie = B.findIndex(function(Ve) {
          var Ae = Ve.key;
          return Ae === ae.key;
        }), ee = uv(ov(B, r, ae.key), b, m, y), te = B.slice();
        te.splice(ie + 1, 0, lv), q(te), re(ee), ce("show");
      } else {
        var xe = r.findIndex(function(Ve) {
          var Ae = Ve.key;
          return Ae === ae.key;
        }), Me = uv(ov(r, B, ae.key), b, m, y), Te = r.slice();
        Te.splice(xe + 1, 0, lv), q(Te), re(Me), ce("hide");
      }
    else
      B !== r && (G(r), q(r));
  }, [a, r]), c.useEffect(function() {
    v || we();
  }, [v]);
  var ke = g ? H : r, ve = {
    expandedKeys: a,
    selectedKeys: i,
    loadedKeys: s,
    loadingKeys: l,
    checkedKeys: o,
    halfCheckedKeys: u,
    dragOverNodeKey: p,
    dropPosition: h,
    keyEntities: d
  };
  return /* @__PURE__ */ c.createElement(c.Fragment, null, E && C && /* @__PURE__ */ c.createElement("span", {
    style: sv,
    "aria-live": "assertive"
  }, Z$(C)), /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement("input", {
    style: sv,
    disabled: x === !1 || f,
    tabIndex: x !== !1 ? S : null,
    onKeyDown: w,
    onFocus: N,
    onBlur: O,
    value: "",
    onChange: Q$,
    "aria-label": "for screen reader"
  })), /* @__PURE__ */ c.createElement("div", {
    className: "".concat(n, "-treenode"),
    "aria-hidden": !0,
    style: {
      position: "absolute",
      pointerEvents: "none",
      visibility: "hidden",
      height: 0,
      overflow: "hidden",
      border: 0,
      padding: 0
    }
  }, /* @__PURE__ */ c.createElement("div", {
    className: "".concat(n, "-indent")
  }, /* @__PURE__ */ c.createElement("div", {
    ref: V,
    className: "".concat(n, "-indent-unit")
  }))), /* @__PURE__ */ c.createElement(Du, K({}, F, {
    data: ke,
    itemKey: cv,
    height: m,
    fullHeight: !1,
    virtual: b,
    itemHeight: y,
    prefixCls: "".concat(n, "-list"),
    ref: M,
    onVisibleChange: function(ie, ee) {
      var te = new Set(ie), xe = ee.filter(function(Me) {
        return !te.has(Me);
      });
      xe.some(function(Me) {
        return cv(Me) === Or;
      }) && we();
    }
  }), function(ae) {
    var ie = ae.pos, ee = K({}, (Mg(ae.data), ae.data)), te = ae.title, xe = ae.key, Me = ae.isStart, Te = ae.isEnd, Ve = li(xe, ie);
    delete ee.key, delete ee.children;
    var Ae = Fa(Ve, ve);
    return /* @__PURE__ */ c.createElement(Y$, K({}, ee, Ae, {
      title: te,
      active: !!C && xe === C.key,
      pos: ie,
      data: ae.data,
      isStart: Me,
      isEnd: Te,
      motion: g,
      motionNodes: xe === Or ? oe : null,
      motionType: Q,
      onMotionStart: $,
      onMotionEnd: we,
      treeNodeRequiredProps: ve,
      onMouseMove: function() {
        _(null);
      }
    }));
  }));
});
Ag.displayName = "NodeList";
function Mn(e, t) {
  if (!e)
    return [];
  var n = e.slice(), r = n.indexOf(t);
  return r >= 0 && n.splice(r, 1), n;
}
function Xn(e, t) {
  var n = (e || []).slice();
  return n.indexOf(t) === -1 && n.push(t), n;
}
function sc(e) {
  return e.split("-");
}
function eD(e, t) {
  var n = [], r = mn(t, e);
  function a() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    i.forEach(function(o) {
      var s = o.key, l = o.children;
      n.push(s), a(l);
    });
  }
  return a(r.children), n;
}
function tD(e) {
  if (e.parent) {
    var t = sc(e.pos);
    return Number(t[t.length - 1]) === e.parent.children.length - 1;
  }
  return !1;
}
function nD(e) {
  var t = sc(e.pos);
  return Number(t[t.length - 1]) === 0;
}
function dv(e, t, n, r, a, i, o, s, l, u) {
  var d, f = e.clientX, v = e.clientY, p = e.target.getBoundingClientRect(), h = p.top, g = p.height, m = (u === "rtl" ? -1 : 1) * (((a == null ? void 0 : a.x) || 0) - f), y = (m - 12) / r, b = mn(s, n.props.eventKey);
  if (v < h + g / 2) {
    var x = o.findIndex(function(V) {
      return V.key === b.key;
    }), C = x <= 0 ? 0 : x - 1, E = o[C].key;
    b = mn(s, E);
  }
  var S = b.key, w = b, N = b.key, O = 0, _ = 0;
  if (!l.includes(S))
    for (var $ = 0; $ < y && tD(b); $ += 1)
      b = b.parent, _ += 1;
  var I = t.props.data, F = b.node, M = !0;
  return nD(b) && b.level === 0 && v < h + g / 2 && i({
    dragNode: I,
    dropNode: F,
    dropPosition: -1
  }) && b.key === n.props.eventKey ? O = -1 : (w.children || []).length && l.includes(N) ? i({
    dragNode: I,
    dropNode: F,
    dropPosition: 0
  }) ? O = 0 : M = !1 : _ === 0 ? y > -1.5 ? i({
    dragNode: I,
    dropNode: F,
    dropPosition: 1
  }) ? O = 1 : M = !1 : i({
    dragNode: I,
    dropNode: F,
    dropPosition: 0
  }) ? O = 0 : i({
    dragNode: I,
    dropNode: F,
    dropPosition: 1
  }) ? O = 1 : M = !1 : i({
    dragNode: I,
    dropNode: F,
    dropPosition: 1
  }) ? O = 1 : M = !1, {
    dropPosition: O,
    dropLevelOffset: _,
    dropTargetKey: b.key,
    dropTargetPos: b.pos,
    dragOverNodeKey: N,
    dropContainerKey: O === 0 ? null : ((d = b.parent) === null || d === void 0 ? void 0 : d.key) || null,
    dropAllowed: M
  };
}
function fv(e, t) {
  if (e) {
    var n = t.multiple;
    return n ? e.slice() : e.length ? [e[0]] : e;
  }
}
function js(e) {
  if (!e)
    return null;
  var t;
  if (Array.isArray(e))
    t = {
      checkedKeys: e,
      halfCheckedKeys: void 0
    };
  else if (Le(e) === "object")
    t = {
      checkedKeys: e.checked || void 0,
      halfCheckedKeys: e.halfChecked || void 0
    };
  else
    return Fe(!1, "`checkedKeys` is not an array or an object"), null;
  return t;
}
function Xl(e, t) {
  var n = /* @__PURE__ */ new Set();
  function r(a) {
    if (!n.has(a)) {
      var i = mn(t, a);
      if (i) {
        n.add(a);
        var o = i.parent, s = i.node;
        s.disabled || o && r(o.key);
      }
    }
  }
  return (e || []).forEach(function(a) {
    r(a);
  }), pe(n);
}
var rD = 10, lc = /* @__PURE__ */ function(e) {
  Gt(n, e);
  var t = qt(n);
  function n() {
    var r;
    Kt(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), r.destroyed = !1, r.delayedDragEnterLogic = void 0, r.loadingRetryTimes = {}, r.state = {
      keyEntities: {},
      indent: null,
      selectedKeys: [],
      checkedKeys: [],
      halfCheckedKeys: [],
      loadedKeys: [],
      loadingKeys: [],
      expandedKeys: [],
      draggingNodeKey: null,
      dragChildrenKeys: [],
      // dropTargetKey is the key of abstract-drop-node
      // the abstract-drop-node is the real drop node when drag and drop
      // not the DOM drag over node
      dropTargetKey: null,
      dropPosition: null,
      dropContainerKey: null,
      dropLevelOffset: null,
      dropTargetPos: null,
      dropAllowed: !0,
      // the abstract-drag-over-node
      // if mouse is on the bottom of top dom node or no the top of the bottom dom node
      // abstract-drag-over-node is the top node
      dragOverNodeKey: null,
      treeData: [],
      flattenNodes: [],
      focused: !1,
      activeKey: null,
      listChanging: !1,
      prevProps: null,
      fieldNames: co()
    }, r.dragStartMousePosition = null, r.dragNode = void 0, r.currentMouseOverDroppableNodeKey = null, r.listRef = /* @__PURE__ */ c.createRef(), r.onNodeDragStart = function(s, l) {
      var u = r.state, d = u.expandedKeys, f = u.keyEntities, v = r.props.onDragStart, p = l.props.eventKey;
      r.dragNode = l, r.dragStartMousePosition = {
        x: s.clientX,
        y: s.clientY
      };
      var h = Mn(d, p);
      r.setState({
        draggingNodeKey: p,
        dragChildrenKeys: eD(p, f),
        indent: r.listRef.current.getIndentWidth()
      }), r.setExpandedKeys(h), window.addEventListener("dragend", r.onWindowDragEnd), v == null || v({
        event: s,
        node: Ht(l.props)
      });
    }, r.onNodeDragEnter = function(s, l) {
      var u = r.state, d = u.expandedKeys, f = u.keyEntities, v = u.dragChildrenKeys, p = u.flattenNodes, h = u.indent, g = r.props, m = g.onDragEnter, y = g.onExpand, b = g.allowDrop, x = g.direction, C = l.props, E = C.pos, S = C.eventKey, w = Ue(r), N = w.dragNode;
      if (r.currentMouseOverDroppableNodeKey !== S && (r.currentMouseOverDroppableNodeKey = S), !N) {
        r.resetDragState();
        return;
      }
      var O = dv(s, N, l, h, r.dragStartMousePosition, b, p, f, d, x), _ = O.dropPosition, $ = O.dropLevelOffset, I = O.dropTargetKey, F = O.dropContainerKey, M = O.dropTargetPos, V = O.dropAllowed, T = O.dragOverNodeKey;
      if (
        // don't allow drop inside its children
        v.indexOf(I) !== -1 || // don't allow drop when drop is not allowed caculated by calcDropPosition
        !V
      ) {
        r.resetDragState();
        return;
      }
      if (r.delayedDragEnterLogic || (r.delayedDragEnterLogic = {}), Object.keys(r.delayedDragEnterLogic).forEach(function(R) {
        clearTimeout(r.delayedDragEnterLogic[R]);
      }), N.props.eventKey !== l.props.eventKey && (s.persist(), r.delayedDragEnterLogic[E] = window.setTimeout(function() {
        if (r.state.draggingNodeKey !== null) {
          var R = pe(d), k = mn(f, l.props.eventKey);
          k && (k.children || []).length && (R = Xn(d, l.props.eventKey)), "expandedKeys" in r.props || r.setExpandedKeys(R), y == null || y(R, {
            node: Ht(l.props),
            expanded: !0,
            nativeEvent: s.nativeEvent
          });
        }
      }, 800)), N.props.eventKey === I && $ === 0) {
        r.resetDragState();
        return;
      }
      r.setState({
        dragOverNodeKey: T,
        dropPosition: _,
        dropLevelOffset: $,
        dropTargetKey: I,
        dropContainerKey: F,
        dropTargetPos: M,
        dropAllowed: V
      }), m == null || m({
        event: s,
        node: Ht(l.props),
        expandedKeys: d
      });
    }, r.onNodeDragOver = function(s, l) {
      var u = r.state, d = u.dragChildrenKeys, f = u.flattenNodes, v = u.keyEntities, p = u.expandedKeys, h = u.indent, g = r.props, m = g.onDragOver, y = g.allowDrop, b = g.direction, x = Ue(r), C = x.dragNode;
      if (C) {
        var E = dv(s, C, l, h, r.dragStartMousePosition, y, f, v, p, b), S = E.dropPosition, w = E.dropLevelOffset, N = E.dropTargetKey, O = E.dropContainerKey, _ = E.dropAllowed, $ = E.dropTargetPos, I = E.dragOverNodeKey;
        d.indexOf(N) !== -1 || !_ || (C.props.eventKey === N && w === 0 ? r.state.dropPosition === null && r.state.dropLevelOffset === null && r.state.dropTargetKey === null && r.state.dropContainerKey === null && r.state.dropTargetPos === null && r.state.dropAllowed === !1 && r.state.dragOverNodeKey === null || r.resetDragState() : S === r.state.dropPosition && w === r.state.dropLevelOffset && N === r.state.dropTargetKey && O === r.state.dropContainerKey && $ === r.state.dropTargetPos && _ === r.state.dropAllowed && I === r.state.dragOverNodeKey || r.setState({
          dropPosition: S,
          dropLevelOffset: w,
          dropTargetKey: N,
          dropContainerKey: O,
          dropTargetPos: $,
          dropAllowed: _,
          dragOverNodeKey: I
        }), m == null || m({
          event: s,
          node: Ht(l.props)
        }));
      }
    }, r.onNodeDragLeave = function(s, l) {
      r.currentMouseOverDroppableNodeKey === l.props.eventKey && !s.currentTarget.contains(s.relatedTarget) && (r.resetDragState(), r.currentMouseOverDroppableNodeKey = null);
      var u = r.props.onDragLeave;
      u == null || u({
        event: s,
        node: Ht(l.props)
      });
    }, r.onWindowDragEnd = function(s) {
      r.onNodeDragEnd(s, null, !0), window.removeEventListener("dragend", r.onWindowDragEnd);
    }, r.onNodeDragEnd = function(s, l) {
      var u = r.props.onDragEnd;
      r.setState({
        dragOverNodeKey: null
      }), r.cleanDragState(), u == null || u({
        event: s,
        node: Ht(l.props)
      }), r.dragNode = null, window.removeEventListener("dragend", r.onWindowDragEnd);
    }, r.onNodeDrop = function(s, l) {
      var u, d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, f = r.state, v = f.dragChildrenKeys, p = f.dropPosition, h = f.dropTargetKey, g = f.dropTargetPos, m = f.dropAllowed;
      if (m) {
        var y = r.props.onDrop;
        if (r.setState({
          dragOverNodeKey: null
        }), r.cleanDragState(), h !== null) {
          var b = D(D({}, Fa(h, r.getTreeNodeRequiredProps())), {}, {
            active: ((u = r.getActiveItem()) === null || u === void 0 ? void 0 : u.key) === h,
            data: mn(r.state.keyEntities, h).node
          }), x = v.indexOf(h) !== -1;
          Fe(!x, "Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.");
          var C = sc(g), E = {
            event: s,
            node: Ht(b),
            dragNode: r.dragNode ? Ht(r.dragNode.props) : null,
            dragNodesKeys: [r.dragNode.props.eventKey].concat(v),
            dropToGap: p !== 0,
            dropPosition: p + Number(C[C.length - 1])
          };
          d || y == null || y(E), r.dragNode = null;
        }
      }
    }, r.cleanDragState = function() {
      var s = r.state.draggingNodeKey;
      s !== null && r.setState({
        draggingNodeKey: null,
        dropPosition: null,
        dropContainerKey: null,
        dropTargetKey: null,
        dropLevelOffset: null,
        dropAllowed: !0,
        dragOverNodeKey: null
      }), r.dragStartMousePosition = null, r.currentMouseOverDroppableNodeKey = null;
    }, r.triggerExpandActionExpand = function(s, l) {
      var u = r.state, d = u.expandedKeys, f = u.flattenNodes, v = l.expanded, p = l.key, h = l.isLeaf;
      if (!(h || s.shiftKey || s.metaKey || s.ctrlKey)) {
        var g = f.filter(function(y) {
          return y.key === p;
        })[0], m = Ht(D(D({}, Fa(p, r.getTreeNodeRequiredProps())), {}, {
          data: g.data
        }));
        r.setExpandedKeys(v ? Mn(d, p) : Xn(d, p)), r.onNodeExpand(s, m);
      }
    }, r.onNodeClick = function(s, l) {
      var u = r.props, d = u.onClick, f = u.expandAction;
      f === "click" && r.triggerExpandActionExpand(s, l), d == null || d(s, l);
    }, r.onNodeDoubleClick = function(s, l) {
      var u = r.props, d = u.onDoubleClick, f = u.expandAction;
      f === "doubleClick" && r.triggerExpandActionExpand(s, l), d == null || d(s, l);
    }, r.onNodeSelect = function(s, l) {
      var u = r.state.selectedKeys, d = r.state, f = d.keyEntities, v = d.fieldNames, p = r.props, h = p.onSelect, g = p.multiple, m = l.selected, y = l[v.key], b = !m;
      b ? g ? u = Xn(u, y) : u = [y] : u = Mn(u, y);
      var x = u.map(function(C) {
        var E = mn(f, C);
        return E ? E.node : null;
      }).filter(function(C) {
        return C;
      });
      r.setUncontrolledState({
        selectedKeys: u
      }), h == null || h(u, {
        event: "select",
        selected: b,
        node: l,
        selectedNodes: x,
        nativeEvent: s.nativeEvent
      });
    }, r.onNodeCheck = function(s, l, u) {
      var d = r.state, f = d.keyEntities, v = d.checkedKeys, p = d.halfCheckedKeys, h = r.props, g = h.checkStrictly, m = h.onCheck, y = l.key, b, x = {
        event: "check",
        node: l,
        checked: u,
        nativeEvent: s.nativeEvent
      };
      if (g) {
        var C = u ? Xn(v, y) : Mn(v, y), E = Mn(p, y);
        b = {
          checked: C,
          halfChecked: E
        }, x.checkedNodes = C.map(function($) {
          return mn(f, $);
        }).filter(function($) {
          return $;
        }).map(function($) {
          return $.node;
        }), r.setUncontrolledState({
          checkedKeys: C
        });
      } else {
        var S = Yr([].concat(pe(v), [y]), !0, f), w = S.checkedKeys, N = S.halfCheckedKeys;
        if (!u) {
          var O = new Set(w);
          O.delete(y);
          var _ = Yr(Array.from(O), {
            checked: !1,
            halfCheckedKeys: N
          }, f);
          w = _.checkedKeys, N = _.halfCheckedKeys;
        }
        b = w, x.checkedNodes = [], x.checkedNodesPositions = [], x.halfCheckedKeys = N, w.forEach(function($) {
          var I = mn(f, $);
          if (I) {
            var F = I.node, M = I.pos;
            x.checkedNodes.push(F), x.checkedNodesPositions.push({
              node: F,
              pos: M
            });
          }
        }), r.setUncontrolledState({
          checkedKeys: w
        }, !1, {
          halfCheckedKeys: N
        });
      }
      m == null || m(b, x);
    }, r.onNodeLoad = function(s) {
      var l = s.key, u = new Promise(function(d, f) {
        r.setState(function(v) {
          var p = v.loadedKeys, h = p === void 0 ? [] : p, g = v.loadingKeys, m = g === void 0 ? [] : g, y = r.props, b = y.loadData, x = y.onLoad;
          if (!b || h.indexOf(l) !== -1 || m.indexOf(l) !== -1)
            return null;
          var C = b(s);
          return C.then(function() {
            var E = r.state.loadedKeys, S = Xn(E, l);
            x == null || x(S, {
              event: "load",
              node: s
            }), r.setUncontrolledState({
              loadedKeys: S
            }), r.setState(function(w) {
              return {
                loadingKeys: Mn(w.loadingKeys, l)
              };
            }), d();
          }).catch(function(E) {
            if (r.setState(function(w) {
              return {
                loadingKeys: Mn(w.loadingKeys, l)
              };
            }), r.loadingRetryTimes[l] = (r.loadingRetryTimes[l] || 0) + 1, r.loadingRetryTimes[l] >= rD) {
              var S = r.state.loadedKeys;
              Fe(!1, "Retry for `loadData` many times but still failed. No more retry."), r.setUncontrolledState({
                loadedKeys: Xn(S, l)
              }), d();
            }
            f(E);
          }), {
            loadingKeys: Xn(m, l)
          };
        });
      });
      return u.catch(function() {
      }), u;
    }, r.onNodeMouseEnter = function(s, l) {
      var u = r.props.onMouseEnter;
      u == null || u({
        event: s,
        node: l
      });
    }, r.onNodeMouseLeave = function(s, l) {
      var u = r.props.onMouseLeave;
      u == null || u({
        event: s,
        node: l
      });
    }, r.onNodeContextMenu = function(s, l) {
      var u = r.props.onRightClick;
      u && (s.preventDefault(), u({
        event: s,
        node: l
      }));
    }, r.onFocus = function() {
      var s = r.props.onFocus;
      r.setState({
        focused: !0
      });
      for (var l = arguments.length, u = new Array(l), d = 0; d < l; d++)
        u[d] = arguments[d];
      s == null || s.apply(void 0, u);
    }, r.onBlur = function() {
      var s = r.props.onBlur;
      r.setState({
        focused: !1
      }), r.onActiveChange(null);
      for (var l = arguments.length, u = new Array(l), d = 0; d < l; d++)
        u[d] = arguments[d];
      s == null || s.apply(void 0, u);
    }, r.getTreeNodeRequiredProps = function() {
      var s = r.state, l = s.expandedKeys, u = s.selectedKeys, d = s.loadedKeys, f = s.loadingKeys, v = s.checkedKeys, p = s.halfCheckedKeys, h = s.dragOverNodeKey, g = s.dropPosition, m = s.keyEntities;
      return {
        expandedKeys: l || [],
        selectedKeys: u || [],
        loadedKeys: d || [],
        loadingKeys: f || [],
        checkedKeys: v || [],
        halfCheckedKeys: p || [],
        dragOverNodeKey: h,
        dropPosition: g,
        keyEntities: m
      };
    }, r.setExpandedKeys = function(s) {
      var l = r.state, u = l.treeData, d = l.fieldNames, f = Is(u, s, d);
      r.setUncontrolledState({
        expandedKeys: s,
        flattenNodes: f
      }, !0);
    }, r.onNodeExpand = function(s, l) {
      var u = r.state.expandedKeys, d = r.state, f = d.listChanging, v = d.fieldNames, p = r.props, h = p.onExpand, g = p.loadData, m = l.expanded, y = l[v.key];
      if (!f) {
        var b = u.indexOf(y), x = !m;
        if (Fe(m && b !== -1 || !m && b === -1, "Expand state not sync with index check"), x ? u = Xn(u, y) : u = Mn(u, y), r.setExpandedKeys(u), h == null || h(u, {
          node: l,
          expanded: x,
          nativeEvent: s.nativeEvent
        }), x && g) {
          var C = r.onNodeLoad(l);
          C && C.then(function() {
            var E = Is(r.state.treeData, u, v);
            r.setUncontrolledState({
              flattenNodes: E
            });
          }).catch(function() {
            var E = r.state.expandedKeys, S = Mn(E, y);
            r.setExpandedKeys(S);
          });
        }
      }
    }, r.onListChangeStart = function() {
      r.setUncontrolledState({
        listChanging: !0
      });
    }, r.onListChangeEnd = function() {
      setTimeout(function() {
        r.setUncontrolledState({
          listChanging: !1
        });
      });
    }, r.onActiveChange = function(s) {
      var l = r.state.activeKey, u = r.props.onActiveChange;
      l !== s && (r.setState({
        activeKey: s
      }), s !== null && r.scrollTo({
        key: s
      }), u == null || u(s));
    }, r.getActiveItem = function() {
      var s = r.state, l = s.activeKey, u = s.flattenNodes;
      return l === null ? null : u.find(function(d) {
        var f = d.key;
        return f === l;
      }) || null;
    }, r.offsetActiveKey = function(s) {
      var l = r.state, u = l.flattenNodes, d = l.activeKey, f = u.findIndex(function(h) {
        var g = h.key;
        return g === d;
      });
      f === -1 && s < 0 && (f = u.length), f = (f + s + u.length) % u.length;
      var v = u[f];
      if (v) {
        var p = v.key;
        r.onActiveChange(p);
      } else
        r.onActiveChange(null);
    }, r.onKeyDown = function(s) {
      var l = r.state, u = l.activeKey, d = l.expandedKeys, f = l.checkedKeys, v = l.fieldNames, p = r.props, h = p.onKeyDown, g = p.checkable, m = p.selectable;
      switch (s.which) {
        case fe.UP: {
          r.offsetActiveKey(-1), s.preventDefault();
          break;
        }
        case fe.DOWN: {
          r.offsetActiveKey(1), s.preventDefault();
          break;
        }
      }
      var y = r.getActiveItem();
      if (y && y.data) {
        var b = r.getTreeNodeRequiredProps(), x = y.data.isLeaf === !1 || !!(y.data[v.children] || []).length, C = Ht(D(D({}, Fa(u, b)), {}, {
          data: y.data,
          active: !0
        }));
        switch (s.which) {
          case fe.LEFT: {
            x && d.includes(u) ? r.onNodeExpand({}, C) : y.parent && r.onActiveChange(y.parent.key), s.preventDefault();
            break;
          }
          case fe.RIGHT: {
            x && !d.includes(u) ? r.onNodeExpand({}, C) : y.children && y.children.length && r.onActiveChange(y.children[0].key), s.preventDefault();
            break;
          }
          case fe.ENTER:
          case fe.SPACE: {
            g && !C.disabled && C.checkable !== !1 && !C.disableCheckbox ? r.onNodeCheck({}, C, !f.includes(u)) : !g && m && !C.disabled && C.selectable !== !1 && r.onNodeSelect({}, C);
            break;
          }
        }
      }
      h == null || h(s);
    }, r.setUncontrolledState = function(s) {
      var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!r.destroyed) {
        var d = !1, f = !0, v = {};
        Object.keys(s).forEach(function(p) {
          if (p in r.props) {
            f = !1;
            return;
          }
          d = !0, v[p] = s[p];
        }), d && (!l || f) && r.setState(D(D({}, v), u));
      }
    }, r.scrollTo = function(s) {
      r.listRef.current.scrollTo(s);
    }, r;
  }
  return Vt(n, [{
    key: "componentDidMount",
    value: function() {
      this.destroyed = !1, this.onUpdated();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.onUpdated();
    }
  }, {
    key: "onUpdated",
    value: function() {
      var a = this.props.activeKey;
      a !== void 0 && a !== this.state.activeKey && (this.setState({
        activeKey: a
      }), a !== null && this.scrollTo({
        key: a
      }));
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      window.removeEventListener("dragend", this.onWindowDragEnd), this.destroyed = !0;
    }
  }, {
    key: "resetDragState",
    value: function() {
      this.setState({
        dragOverNodeKey: null,
        dropPosition: null,
        dropLevelOffset: null,
        dropTargetKey: null,
        dropContainerKey: null,
        dropTargetPos: null,
        dropAllowed: !1
      });
    }
  }, {
    key: "render",
    value: function() {
      var a, i = this.state, o = i.focused, s = i.flattenNodes, l = i.keyEntities, u = i.draggingNodeKey, d = i.activeKey, f = i.dropLevelOffset, v = i.dropContainerKey, p = i.dropTargetKey, h = i.dropPosition, g = i.dragOverNodeKey, m = i.indent, y = this.props, b = y.prefixCls, x = y.className, C = y.style, E = y.showLine, S = y.focusable, w = y.tabIndex, N = w === void 0 ? 0 : w, O = y.selectable, _ = y.showIcon, $ = y.icon, I = y.switcherIcon, F = y.draggable, M = y.checkable, V = y.checkStrictly, T = y.disabled, R = y.motion, k = y.loadData, A = y.filterTreeNode, U = y.height, z = y.itemHeight, B = y.virtual, G = y.titleRender, W = y.dropIndicatorRender, j = y.onContextMenu, H = y.onScroll, q = y.direction, Y = y.rootClassName, J = y.rootStyle, oe = Nr(this.props, {
        aria: !0,
        data: !0
      }), re;
      return F && (Le(F) === "object" ? re = F : typeof F == "function" ? re = {
        nodeDraggable: F
      } : re = {}), /* @__PURE__ */ c.createElement(oc.Provider, {
        value: {
          prefixCls: b,
          selectable: O,
          showIcon: _,
          icon: $,
          switcherIcon: I,
          draggable: re,
          draggingNodeKey: u,
          checkable: M,
          checkStrictly: V,
          disabled: T,
          keyEntities: l,
          dropLevelOffset: f,
          dropContainerKey: v,
          dropTargetKey: p,
          dropPosition: h,
          dragOverNodeKey: g,
          indent: m,
          direction: q,
          dropIndicatorRender: W,
          loadData: k,
          filterTreeNode: A,
          titleRender: G,
          onNodeClick: this.onNodeClick,
          onNodeDoubleClick: this.onNodeDoubleClick,
          onNodeExpand: this.onNodeExpand,
          onNodeSelect: this.onNodeSelect,
          onNodeCheck: this.onNodeCheck,
          onNodeLoad: this.onNodeLoad,
          onNodeMouseEnter: this.onNodeMouseEnter,
          onNodeMouseLeave: this.onNodeMouseLeave,
          onNodeContextMenu: this.onNodeContextMenu,
          onNodeDragStart: this.onNodeDragStart,
          onNodeDragEnter: this.onNodeDragEnter,
          onNodeDragOver: this.onNodeDragOver,
          onNodeDragLeave: this.onNodeDragLeave,
          onNodeDragEnd: this.onNodeDragEnd,
          onNodeDrop: this.onNodeDrop
        }
      }, /* @__PURE__ */ c.createElement("div", {
        role: "tree",
        className: ne(b, x, Y, (a = {}, P(a, "".concat(b, "-show-line"), E), P(a, "".concat(b, "-focused"), o), P(a, "".concat(b, "-active-focused"), d !== null), a)),
        style: J
      }, /* @__PURE__ */ c.createElement(Ag, K({
        ref: this.listRef,
        prefixCls: b,
        style: C,
        data: s,
        disabled: T,
        selectable: O,
        checkable: !!M,
        motion: R,
        dragging: u !== null,
        height: U,
        itemHeight: z,
        virtual: B,
        focusable: S,
        focused: o,
        tabIndex: N,
        activeItem: this.getActiveItem(),
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onKeyDown: this.onKeyDown,
        onActiveChange: this.onActiveChange,
        onListChangeStart: this.onListChangeStart,
        onListChangeEnd: this.onListChangeEnd,
        onContextMenu: j,
        onScroll: H
      }, this.getTreeNodeRequiredProps(), oe))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(a, i) {
      var o = i.prevProps, s = {
        prevProps: a
      };
      function l(S) {
        return !o && S in a || o && o[S] !== a[S];
      }
      var u, d = i.fieldNames;
      if (l("fieldNames") && (d = co(a.fieldNames), s.fieldNames = d), l("treeData") ? u = a.treeData : l("children") && (Fe(!1, "`children` of Tree is deprecated. Please use `treeData` instead."), u = Kh(a.children)), u) {
        s.treeData = u;
        var f = Ju(u, {
          fieldNames: d
        });
        s.keyEntities = D(P({}, Or, Dg), f.keyEntities), process.env.NODE_ENV !== "production" && kR(u, d);
      }
      var v = s.keyEntities || i.keyEntities;
      if (l("expandedKeys") || o && l("autoExpandParent"))
        s.expandedKeys = a.autoExpandParent || !o && a.defaultExpandParent ? Xl(a.expandedKeys, v) : a.expandedKeys;
      else if (!o && a.defaultExpandAll) {
        var p = D({}, v);
        delete p[Or], s.expandedKeys = Object.keys(p).map(function(S) {
          return p[S].key;
        });
      } else
        !o && a.defaultExpandedKeys && (s.expandedKeys = a.autoExpandParent || a.defaultExpandParent ? Xl(a.defaultExpandedKeys, v) : a.defaultExpandedKeys);
      if (s.expandedKeys || delete s.expandedKeys, u || s.expandedKeys) {
        var h = Is(u || i.treeData, s.expandedKeys || i.expandedKeys, d);
        s.flattenNodes = h;
      }
      if (a.selectable && (l("selectedKeys") ? s.selectedKeys = fv(a.selectedKeys, a) : !o && a.defaultSelectedKeys && (s.selectedKeys = fv(a.defaultSelectedKeys, a))), a.checkable) {
        var g;
        if (l("checkedKeys") ? g = js(a.checkedKeys) || {} : !o && a.defaultCheckedKeys ? g = js(a.defaultCheckedKeys) || {} : u && (g = js(a.checkedKeys) || {
          checkedKeys: i.checkedKeys,
          halfCheckedKeys: i.halfCheckedKeys
        }), g) {
          var m = g, y = m.checkedKeys, b = y === void 0 ? [] : y, x = m.halfCheckedKeys, C = x === void 0 ? [] : x;
          if (!a.checkStrictly) {
            var E = Yr(b, !0, v);
            b = E.checkedKeys, C = E.halfCheckedKeys;
          }
          s.checkedKeys = b, s.halfCheckedKeys = C;
        }
      }
      return l("loadedKeys") && (s.loadedKeys = a.loadedKeys), s;
    }
  }]), n;
}(c.Component);
lc.defaultProps = {
  prefixCls: "rc-tree",
  showLine: !1,
  showIcon: !0,
  selectable: !0,
  multiple: !1,
  checkable: !1,
  disabled: !1,
  checkStrictly: !1,
  draggable: !1,
  defaultExpandParent: !0,
  autoExpandParent: !1,
  defaultExpandAll: !1,
  defaultExpandedKeys: [],
  defaultCheckedKeys: [],
  defaultSelectedKeys: [],
  dropIndicatorRender: z$,
  allowDrop: function() {
    return !0;
  },
  expandAction: !1
};
lc.TreeNode = ra;
var aD = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z" } }] }, name: "holder", theme: "outlined" };
const iD = aD;
var Lg = function(t, n) {
  return /* @__PURE__ */ c.createElement(It, D(D({}, t), {}, {
    ref: n,
    icon: iD
  }));
};
Lg.displayName = "HolderOutlined";
const oD = /* @__PURE__ */ c.forwardRef(Lg);
var vv = 4;
function sD(e) {
  var t, n = e.dropPosition, r = e.dropLevelOffset, a = e.prefixCls, i = e.indent, o = e.direction, s = o === void 0 ? "ltr" : o, l = s === "ltr" ? "left" : "right", u = s === "ltr" ? "right" : "left", d = (t = {}, P(t, l, -r * i + vv), P(t, u, 0), t);
  switch (n) {
    case -1:
      d.top = -3;
      break;
    case 1:
      d.bottom = -3;
      break;
    default:
      d.bottom = -3, d[l] = i + vv;
      break;
  }
  return /* @__PURE__ */ be.createElement("div", {
    style: d,
    className: "".concat(a, "-drop-indicator")
  });
}
var lD = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" } }] }, name: "caret-down", theme: "filled" };
const uD = lD;
var Kg = function(t, n) {
  return /* @__PURE__ */ c.createElement(It, D(D({}, t), {}, {
    ref: n,
    icon: uD
  }));
};
Kg.displayName = "CaretDownFilled";
const cD = /* @__PURE__ */ c.forwardRef(Kg);
var dD = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z" } }] }, name: "file", theme: "outlined" };
const fD = dD;
var Vg = function(t, n) {
  return /* @__PURE__ */ c.createElement(It, D(D({}, t), {}, {
    ref: n,
    icon: fD
  }));
};
Vg.displayName = "FileOutlined";
const zg = /* @__PURE__ */ c.forwardRef(Vg);
var vD = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" } }, { tag: "path", attrs: { d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, name: "minus-square", theme: "outlined" };
const pD = vD;
var jg = function(t, n) {
  return /* @__PURE__ */ c.createElement(It, D(D({}, t), {}, {
    ref: n,
    icon: pD
  }));
};
jg.displayName = "MinusSquareOutlined";
const mD = /* @__PURE__ */ c.forwardRef(jg);
var hD = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" } }, { tag: "path", attrs: { d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, name: "plus-square", theme: "outlined" };
const gD = hD;
var Hg = function(t, n) {
  return /* @__PURE__ */ c.createElement(It, D(D({}, t), {}, {
    ref: n,
    icon: gD
  }));
};
Hg.displayName = "PlusSquareOutlined";
const yD = /* @__PURE__ */ c.forwardRef(Hg);
function bD(e, t, n, r) {
  var a = r.isLeaf, i = r.expanded, o = r.loading;
  if (o)
    return /* @__PURE__ */ c.createElement(Ha, {
      className: "".concat(e, "-switcher-loading-icon")
    });
  var s;
  if (n && Le(n) === "object" && (s = n.showLeafIcon), a) {
    if (!n)
      return null;
    if (typeof s != "boolean" && s) {
      var l = typeof s == "function" ? s(r) : s, u = "".concat(e, "-switcher-line-custom-icon");
      return Nn(l) ? on(l, {
        className: ne(l.props.className || "", u)
      }) : l;
    }
    return s ? /* @__PURE__ */ c.createElement(zg, {
      className: "".concat(e, "-switcher-line-icon")
    }) : /* @__PURE__ */ c.createElement("span", {
      className: "".concat(e, "-switcher-leaf-line")
    });
  }
  var d = "".concat(e, "-switcher-icon"), f = typeof t == "function" ? t(r) : t;
  return Nn(f) ? on(f, {
    className: ne(f.props.className || "", d)
  }) : f || (n ? i ? /* @__PURE__ */ c.createElement(mD, {
    className: "".concat(e, "-switcher-line-icon")
  }) : /* @__PURE__ */ c.createElement(yD, {
    className: "".concat(e, "-switcher-line-icon")
  }) : /* @__PURE__ */ c.createElement(cD, {
    className: d
  }));
}
var CD = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var n, r = c.useContext(st), a = r.getPrefixCls, i = r.direction, o = r.virtual, s = e.prefixCls, l = e.className, u = e.showIcon, d = u === void 0 ? !1 : u, f = e.showLine, v = e.switcherIcon, p = e.blockNode, h = p === void 0 ? !1 : p, g = e.children, m = e.checkable, y = m === void 0 ? !1 : m, b = e.selectable, x = b === void 0 ? !0 : b, C = e.draggable, E = e.motion, S = E === void 0 ? K(K({}, Hm), {
    motionAppear: !1
  }) : E, w = a("tree", s), N = K(K({}, e), {
    checkable: y,
    selectable: x,
    showIcon: d,
    motion: S,
    blockNode: h,
    showLine: !!f,
    dropIndicatorRender: sD
  }), O = c.useMemo(function() {
    if (!C)
      return !1;
    var _ = {};
    switch (Le(C)) {
      case "function":
        _.nodeDraggable = C;
        break;
      case "object":
        _ = K({}, C);
        break;
    }
    return _.icon !== !1 && (_.icon = _.icon || /* @__PURE__ */ c.createElement(oD, null)), _;
  }, [C]);
  return /* @__PURE__ */ c.createElement(lc, K({
    itemHeight: 20,
    ref: t,
    virtual: o
  }, N, {
    prefixCls: w,
    className: ne((n = {}, P(n, "".concat(w, "-icon-hide"), !d), P(n, "".concat(w, "-block-node"), h), P(n, "".concat(w, "-unselectable"), !x), P(n, "".concat(w, "-rtl"), i === "rtl"), n), l),
    direction: i,
    checkable: y && /* @__PURE__ */ c.createElement("span", {
      className: "".concat(w, "-checkbox-inner")
    }),
    selectable: x,
    switcherIcon: function($) {
      return bD(w, v, f, $);
    },
    draggable: O
  }), g);
});
const Bg = CD;
var xD = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z" } }] }, name: "folder-open", theme: "outlined" };
const SD = xD;
var Ug = function(t, n) {
  return /* @__PURE__ */ c.createElement(It, D(D({}, t), {}, {
    ref: n,
    icon: SD
  }));
};
Ug.displayName = "FolderOpenOutlined";
const ED = /* @__PURE__ */ c.forwardRef(Ug);
var wD = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z" } }] }, name: "folder", theme: "outlined" };
const ND = wD;
var Wg = function(t, n) {
  return /* @__PURE__ */ c.createElement(It, D(D({}, t), {}, {
    ref: n,
    icon: ND
  }));
};
Wg.displayName = "FolderOutlined";
const OD = /* @__PURE__ */ c.forwardRef(Wg);
var Jn;
(function(e) {
  e[e.None = 0] = "None", e[e.Start = 1] = "Start", e[e.End = 2] = "End";
})(Jn || (Jn = {}));
function uc(e, t) {
  function n(r) {
    var a = r.key, i = r.children;
    t(a, r) !== !1 && uc(i || [], t);
  }
  e.forEach(n);
}
function PD(e) {
  var t = e.treeData, n = e.expandedKeys, r = e.startKey, a = e.endKey, i = [], o = Jn.None;
  if (r && r === a)
    return [r];
  if (!r || !a)
    return [];
  function s(l) {
    return l === r || l === a;
  }
  return uc(t, function(l) {
    if (o === Jn.End)
      return !1;
    if (s(l)) {
      if (i.push(l), o === Jn.None)
        o = Jn.Start;
      else if (o === Jn.Start)
        return o = Jn.End, !1;
    } else
      o === Jn.Start && i.push(l);
    return n.includes(l);
  }), i;
}
function Hs(e, t) {
  var n = pe(t), r = [];
  return uc(e, function(a, i) {
    var o = n.indexOf(a);
    return o !== -1 && (r.push(i), n.splice(o, 1)), !!n.length;
  }), r;
}
var pv = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function RD(e) {
  var t = e.isLeaf, n = e.expanded;
  return t ? /* @__PURE__ */ c.createElement(zg, null) : n ? /* @__PURE__ */ c.createElement(ED, null) : /* @__PURE__ */ c.createElement(OD, null);
}
function mv(e) {
  var t = e.treeData, n = e.children;
  return t || Kh(n);
}
var kD = function(t, n) {
  var r = t.defaultExpandAll, a = t.defaultExpandParent, i = t.defaultExpandedKeys, o = pv(t, ["defaultExpandAll", "defaultExpandParent", "defaultExpandedKeys"]), s = c.useRef(), l = c.useRef(), u = function() {
    var R = Ju(mv(o)), k = R.keyEntities, A;
    return r ? A = Object.keys(k) : a ? A = Xl(o.expandedKeys || i || [], k) : A = o.expandedKeys || i, A;
  }, d = c.useState(o.selectedKeys || o.defaultSelectedKeys || []), f = X(d, 2), v = f[0], p = f[1], h = c.useState(function() {
    return u();
  }), g = X(h, 2), m = g[0], y = g[1];
  c.useEffect(function() {
    "selectedKeys" in o && p(o.selectedKeys);
  }, [o.selectedKeys]), c.useEffect(function() {
    "expandedKeys" in o && y(o.expandedKeys);
  }, [o.expandedKeys]);
  var b = function(R, k) {
    var A;
    return "expandedKeys" in o || y(R), (A = o.onExpand) === null || A === void 0 ? void 0 : A.call(o, R, k);
  }, x = function(R, k) {
    var A, U = o.multiple, z = k.node, B = k.nativeEvent, G = z.key, W = G === void 0 ? "" : G, j = mv(o), H = K(K({}, k), {
      selected: !0
    }), q = (B == null ? void 0 : B.ctrlKey) || (B == null ? void 0 : B.metaKey), Y = B == null ? void 0 : B.shiftKey, J;
    U && q ? (J = R, s.current = W, l.current = J, H.selectedNodes = Hs(j, J)) : U && Y ? (J = Array.from(new Set([].concat(pe(l.current || []), pe(PD({
      treeData: j,
      expandedKeys: m,
      startKey: W,
      endKey: s.current
    }))))), H.selectedNodes = Hs(j, J)) : (J = [W], s.current = W, l.current = J, H.selectedNodes = Hs(j, J)), (A = o.onSelect) === null || A === void 0 || A.call(o, J, H), "selectedKeys" in o || p(J);
  }, C = c.useContext(st), E = C.getPrefixCls, S = C.direction, w = o.prefixCls, N = o.className, O = o.showIcon, _ = O === void 0 ? !0 : O, $ = o.expandAction, I = $ === void 0 ? "click" : $, F = pv(o, ["prefixCls", "className", "showIcon", "expandAction"]), M = E("tree", w), V = ne("".concat(M, "-directory"), P({}, "".concat(M, "-directory-rtl"), S === "rtl"), N);
  return /* @__PURE__ */ c.createElement(Bg, K({
    icon: RD,
    ref: n,
    blockNode: !0
  }, F, {
    showIcon: _,
    expandAction: I,
    prefixCls: M,
    className: V,
    expandedKeys: m,
    selectedKeys: v,
    onSelect: x,
    onExpand: b
  }));
}, Gg = /* @__PURE__ */ c.forwardRef(kD);
process.env.NODE_ENV !== "production" && (Gg.displayName = "DirectoryTree");
const TD = Gg;
var cc = Bg;
cc.DirectoryTree = TD;
cc.TreeNode = ra;
const _D = cc;
function ID(e) {
  var t = c.useRef(e), n = Xm();
  return [function() {
    return t.current;
  }, function(r) {
    t.current = r, n();
  }];
}
function hv(e) {
  var t = e.value, n = e.onChange, r = e.filterSearch, a = e.tablePrefixCls, i = e.locale;
  return r ? /* @__PURE__ */ c.createElement("div", {
    className: "".concat(a, "-filter-dropdown-search")
  }, /* @__PURE__ */ c.createElement(Xh, {
    prefix: /* @__PURE__ */ c.createElement(Fo, null),
    placeholder: i.filterSearchPlaceholder,
    onChange: n,
    value: t,
    // for skip min-width of input
    htmlSize: 1,
    className: "".concat(a, "-filter-dropdown-search-input")
  })) : null;
}
var FD = function(t) {
  var n = t.keyCode;
  n === fe.ENTER && t.stopPropagation();
}, MD = function(t) {
  return /* @__PURE__ */ c.createElement("div", {
    className: t.className,
    onClick: function(r) {
      return r.stopPropagation();
    },
    onKeyDown: FD
  }, t.children);
};
const $D = MD;
function DD(e) {
  return e.some(function(t) {
    var n = t.children;
    return n;
  });
}
function qg(e, t) {
  return typeof t == "string" || typeof t == "number" ? t == null ? void 0 : t.toString().toLowerCase().includes(e.trim().toLowerCase()) : !1;
}
function Yg(e) {
  var t = e.filters, n = e.prefixCls, r = e.filteredKeys, a = e.filterMultiple, i = e.searchValue, o = e.filterSearch;
  return t.map(function(s, l) {
    var u = String(s.value);
    if (s.children)
      return {
        key: u || l,
        label: s.text,
        popupClassName: "".concat(n, "-dropdown-submenu"),
        children: Yg({
          filters: s.children,
          prefixCls: n,
          filteredKeys: r,
          filterMultiple: a,
          searchValue: i,
          filterSearch: o
        })
      };
    var d = a ? ta : Dh, f = {
      key: s.value !== void 0 ? u : l,
      label: /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(d, {
        checked: r.includes(u)
      }), /* @__PURE__ */ c.createElement("span", null, s.text))
    };
    return i.trim() ? typeof o == "function" ? o(i, s) ? f : null : qg(i, s.text) ? f : null : f;
  });
}
function AD(e) {
  var t, n = e.tablePrefixCls, r = e.prefixCls, a = e.column, i = e.dropdownPrefixCls, o = e.columnKey, s = e.filterMultiple, l = e.filterMode, u = l === void 0 ? "menu" : l, d = e.filterSearch, f = d === void 0 ? !1 : d, v = e.filterState, p = e.triggerFilter, h = e.locale, g = e.children, m = e.getPopupContainer, y = a.filterDropdownOpen, b = a.onFilterDropdownOpenChange, x = a.filterDropdownVisible, C = a.onFilterDropdownVisibleChange, E = a.filterResetToDefaultFilteredValue, S = a.defaultFilteredValue, w = c.useState(!1), N = X(w, 2), O = N[0], _ = N[1], $ = !!(v && (!((t = v.filteredKeys) === null || t === void 0) && t.length || v.forceFiltered)), I = function(Ne) {
    _(Ne), b == null || b(Ne), C == null || C(Ne);
  }, F;
  typeof y == "boolean" ? F = y : F = typeof x == "boolean" ? x : O;
  var M = v == null ? void 0 : v.filteredKeys, V = ID(M || []), T = X(V, 2), R = T[0], k = T[1], A = function(Ne) {
    var $e = Ne.selectedKeys;
    k($e);
  }, U = function(Ne, $e) {
    var je = $e.node, lt = $e.checked;
    A(s ? {
      selectedKeys: Ne
    } : {
      selectedKeys: lt && je.key ? [je.key] : []
    });
  };
  c.useEffect(function() {
    O && A({
      selectedKeys: M || []
    });
  }, [M]);
  var z = c.useState([]), B = X(z, 2), G = B[0], W = B[1], j = function(Ne) {
    W(Ne);
  }, H = c.useState(""), q = X(H, 2), Y = q[0], J = q[1], oe = function(Ne) {
    var $e = Ne.target.value;
    J($e);
  };
  c.useEffect(function() {
    O || J("");
  }, [O]);
  var re = function(Ne) {
    var $e = Ne && Ne.length ? Ne : null;
    if ($e === null && (!v || !v.filteredKeys) || rv($e, v == null ? void 0 : v.filteredKeys))
      return null;
    p({
      column: a,
      key: o,
      filteredKeys: $e
    });
  }, de = function() {
    I(!1), re(R());
  }, Z = function() {
    var Ne = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      confirm: !1,
      closeDropdown: !1
    }, $e = Ne.confirm, je = Ne.closeDropdown;
    $e && re([]), je && I(!1), J(""), k(E ? (S || []).map(function(lt) {
      return String(lt);
    }) : []);
  }, Q = function() {
    var Ne = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      closeDropdown: !0
    }, $e = Ne.closeDropdown;
    $e && I(!1), re(R());
  }, ce = function(Ne) {
    Ne && M !== void 0 && k(M || []), I(Ne), !Ne && !a.filterDropdown && de();
  }, Ce = ne(P({}, "".concat(i, "-menu-without-submenu"), !DD(a.filters || []))), we = function(Ne) {
    if (Ne.target.checked) {
      var $e = Xr(a == null ? void 0 : a.filters).map(function(je) {
        return String(je);
      });
      k($e);
    } else
      k([]);
  }, ke = function Ae(Ne) {
    var $e = Ne.filters;
    return ($e || []).map(function(je, lt) {
      var tt = String(je.value), ot = {
        title: je.text,
        key: je.value !== void 0 ? tt : lt
      };
      return je.children && (ot.children = Ae({
        filters: je.children
      })), ot;
    });
  }, ve = function Ae(Ne) {
    var $e;
    return K(K({}, Ne), {
      text: Ne.title,
      value: Ne.key,
      children: (($e = Ne.children) === null || $e === void 0 ? void 0 : $e.map(function(je) {
        return Ae(je);
      })) || []
    });
  }, ae;
  if (typeof a.filterDropdown == "function")
    ae = a.filterDropdown({
      prefixCls: "".concat(i, "-custom"),
      setSelectedKeys: function(Ne) {
        return A({
          selectedKeys: Ne
        });
      },
      selectedKeys: R(),
      confirm: Q,
      clearFilters: Z,
      filters: a.filters,
      visible: F,
      close: function() {
        I(!1);
      }
    });
  else if (a.filterDropdown)
    ae = a.filterDropdown;
  else {
    var ie = R() || [], ee = function() {
      return (a.filters || []).length === 0 ? /* @__PURE__ */ c.createElement(Cr, {
        image: Cr.PRESENTED_IMAGE_SIMPLE,
        description: h.filterEmptyText,
        imageStyle: {
          height: 24
        },
        style: {
          margin: 0,
          padding: "16px 0"
        }
      }) : u === "tree" ? /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(hv, {
        filterSearch: f,
        value: Y,
        onChange: oe,
        tablePrefixCls: n,
        locale: h
      }), /* @__PURE__ */ c.createElement("div", {
        className: "".concat(n, "-filter-dropdown-tree")
      }, s ? /* @__PURE__ */ c.createElement(ta, {
        checked: ie.length === Xr(a.filters).length,
        indeterminate: ie.length > 0 && ie.length < Xr(a.filters).length,
        className: "".concat(n, "-filter-dropdown-checkall"),
        onChange: we
      }, h.filterCheckall) : null, /* @__PURE__ */ c.createElement(_D, {
        checkable: !0,
        selectable: !1,
        blockNode: !0,
        multiple: s,
        checkStrictly: !s,
        className: "".concat(i, "-menu"),
        onCheck: U,
        checkedKeys: ie,
        selectedKeys: ie,
        showIcon: !1,
        treeData: ke({
          filters: a.filters
        }),
        autoExpandParent: !0,
        defaultExpandAll: !0,
        filterTreeNode: Y.trim() ? function(Ne) {
          return typeof f == "function" ? f(Y, ve(Ne)) : qg(Y, Ne.title);
        } : void 0
      }))) : /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(hv, {
        filterSearch: f,
        value: Y,
        onChange: oe,
        tablePrefixCls: n,
        locale: h
      }), /* @__PURE__ */ c.createElement(wh, {
        selectable: !0,
        multiple: s,
        prefixCls: "".concat(i, "-menu"),
        className: Ce,
        onSelect: A,
        onDeselect: A,
        selectedKeys: ie,
        getPopupContainer: m,
        openKeys: G,
        onOpenChange: j,
        items: Yg({
          filters: a.filters || [],
          filterSearch: f,
          prefixCls: r,
          filteredKeys: R(),
          filterMultiple: s,
          searchValue: Y
        })
      }));
    }, te = function() {
      return E ? rv((S || []).map(function(Ne) {
        return String(Ne);
      }), ie) : ie.length === 0;
    };
    ae = /* @__PURE__ */ c.createElement(c.Fragment, null, ee(), /* @__PURE__ */ c.createElement("div", {
      className: "".concat(r, "-dropdown-btns")
    }, /* @__PURE__ */ c.createElement(dr, {
      type: "link",
      size: "small",
      disabled: te(),
      onClick: function() {
        return Z();
      }
    }, h.filterReset), /* @__PURE__ */ c.createElement(dr, {
      type: "primary",
      size: "small",
      onClick: de
    }, h.filterConfirm)));
  }
  a.filterDropdown && (ae = /* @__PURE__ */ c.createElement(Eh, {
    selectable: void 0
  }, ae));
  var xe = function() {
    return /* @__PURE__ */ c.createElement($D, {
      className: "".concat(r, "-dropdown")
    }, ae);
  }, Me;
  typeof a.filterIcon == "function" ? Me = a.filterIcon($) : a.filterIcon ? Me = a.filterIcon : Me = /* @__PURE__ */ c.createElement($k, null);
  var Te = c.useContext(st), Ve = Te.direction;
  return /* @__PURE__ */ c.createElement("div", {
    className: "".concat(r, "-column")
  }, /* @__PURE__ */ c.createElement("span", {
    className: "".concat(n, "-column-title")
  }, g), /* @__PURE__ */ c.createElement(Ho, {
    dropdownRender: xe,
    trigger: ["click"],
    open: F,
    onOpenChange: ce,
    getPopupContainer: m,
    placement: Ve === "rtl" ? "bottomLeft" : "bottomRight"
  }, /* @__PURE__ */ c.createElement("span", {
    role: "button",
    tabIndex: -1,
    className: ne("".concat(r, "-trigger"), {
      active: $
    }),
    onClick: function(Ne) {
      Ne.stopPropagation();
    }
  }, Me)));
}
function Jl(e, t, n) {
  var r = [];
  return (e || []).forEach(function(a, i) {
    var o, s = Yo(i, n);
    if (a.filters || "filterDropdown" in a || "onFilter" in a)
      if ("filteredValue" in a) {
        var l = a.filteredValue;
        "filterDropdown" in a || (l = (o = l == null ? void 0 : l.map(String)) !== null && o !== void 0 ? o : l), r.push({
          column: a,
          key: na(a, s),
          filteredKeys: l,
          forceFiltered: a.filtered
        });
      } else
        r.push({
          column: a,
          key: na(a, s),
          filteredKeys: t && a.defaultFilteredValue ? a.defaultFilteredValue : void 0,
          forceFiltered: a.filtered
        });
    "children" in a && (r = [].concat(pe(r), pe(Jl(a.children, t, s))));
  }), r;
}
function Xg(e, t, n, r, a, i, o, s) {
  return n.map(function(l, u) {
    var d = Yo(u, s), f = l.filterMultiple, v = f === void 0 ? !0 : f, p = l.filterMode, h = l.filterSearch, g = l;
    if (g.filters || g.filterDropdown) {
      var m = na(g, d), y = r.find(function(b) {
        var x = b.key;
        return m === x;
      });
      g = K(K({}, g), {
        title: function(x) {
          return /* @__PURE__ */ c.createElement(AD, {
            tablePrefixCls: e,
            prefixCls: "".concat(e, "-filter"),
            dropdownPrefixCls: t,
            column: g,
            columnKey: m,
            filterState: y,
            filterMultiple: v,
            filterMode: p,
            filterSearch: h,
            triggerFilter: a,
            locale: o,
            getPopupContainer: i
          }, Xo(l.title, x));
        }
      });
    }
    return "children" in g && (g = K(K({}, g), {
      children: Xg(e, t, g.children, r, a, i, o, d)
    })), g;
  });
}
function Xr(e) {
  var t = [];
  return (e || []).forEach(function(n) {
    var r = n.value, a = n.children;
    t.push(r), a && (t = [].concat(pe(t), pe(Xr(a))));
  }), t;
}
function gv(e) {
  var t = {};
  return e.forEach(function(n) {
    var r = n.key, a = n.filteredKeys, i = n.column, o = i.filters, s = i.filterDropdown;
    if (s)
      t[r] = a || null;
    else if (Array.isArray(a)) {
      var l = Xr(o);
      t[r] = l.filter(function(u) {
        return a.includes(String(u));
      });
    } else
      t[r] = null;
  }), t;
}
function yv(e, t) {
  return t.reduce(function(n, r) {
    var a = r.column, i = a.onFilter, o = a.filters, s = r.filteredKeys;
    return i && s && s.length ? n.filter(function(l) {
      return s.some(function(u) {
        var d = Xr(o), f = d.findIndex(function(p) {
          return String(p) === String(u);
        }), v = f !== -1 ? d[f] : u;
        return i(v, l);
      });
    }) : n;
  }, e);
}
function LD(e) {
  var t = e.prefixCls, n = e.dropdownPrefixCls, r = e.mergedColumns, a = e.onFilterChange, i = e.getPopupContainer, o = e.locale, s = c.useState(function() {
    return Jl(r, !0);
  }), l = X(s, 2), u = l[0], d = l[1], f = c.useMemo(function() {
    var g = Jl(r, !1), m = !0, y = !0;
    return g.forEach(function(b) {
      var x = b.filteredKeys;
      x !== void 0 ? m = !1 : y = !1;
    }), m ? u : (process.env.NODE_ENV !== "production" && Nt(y, "Table", "Columns should all contain `filteredValue` or not contain `filteredValue`."), g);
  }, [r, u]), v = c.useMemo(function() {
    return gv(f);
  }, [f]), p = function(m) {
    var y = f.filter(function(b) {
      var x = b.key;
      return x !== m.key;
    });
    y.push(m), d(y), a(gv(y), y);
  }, h = function(m) {
    return Xg(t, n, m, f, p, i, o);
  };
  return [h, f, v];
}
function KD(e, t, n) {
  var r = c.useRef({});
  function a(i) {
    if (!r.current || r.current.data !== e || r.current.childrenColumnName !== t || r.current.getRowKey !== n) {
      let s = function(l) {
        l.forEach(function(u, d) {
          var f = n(u, d);
          o.set(f, u), u && Le(u) === "object" && t in u && s(u[t] || []);
        });
      };
      var o = /* @__PURE__ */ new Map();
      s(e), r.current = {
        data: e,
        childrenColumnName: t,
        kvMap: o,
        getRowKey: n
      };
    }
    return r.current.kvMap.get(i);
  }
  return [a];
}
var VD = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, Jg = 10;
function zD(e, t) {
  var n = {
    current: t.current,
    pageSize: t.pageSize
  }, r = e && Le(e) === "object" ? e : {};
  return Object.keys(r).forEach(function(a) {
    var i = t[a];
    typeof i != "function" && (n[a] = i);
  }), n;
}
function jD() {
  for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return n.forEach(function(a) {
    a && Object.keys(a).forEach(function(i) {
      var o = a[i];
      o !== void 0 && (e[i] = o);
    });
  }), e;
}
function HD(e, t, n) {
  var r = t && Le(t) === "object" ? t : {}, a = r.total, i = a === void 0 ? 0 : a, o = VD(r, ["total"]), s = Ut(function() {
    return {
      current: "defaultCurrent" in o ? o.defaultCurrent : 1,
      pageSize: "defaultPageSize" in o ? o.defaultPageSize : Jg
    };
  }), l = X(s, 2), u = l[0], d = l[1], f = jD(u, o, {
    total: i > 0 ? i : e
  }), v = Math.ceil((i || e) / f.pageSize);
  f.current > v && (f.current = v || 1);
  var p = function(m, y) {
    d({
      current: m ?? 1,
      pageSize: y || f.pageSize
    });
  }, h = function(m, y) {
    var b;
    t && ((b = t.onChange) === null || b === void 0 || b.call(t, m, y)), p(m, y), n(m, y || (f == null ? void 0 : f.pageSize));
  };
  return t === !1 ? [{}, function() {
  }] : [K(K({}, f), {
    onChange: h
  }), p];
}
var $n = {}, Ql = "SELECT_ALL", Zl = "SELECT_INVERT", eu = "SELECT_NONE", bv = [];
function Qg(e, t) {
  var n = [];
  return (e || []).forEach(function(r) {
    n.push(r), r && Le(r) === "object" && t in r && (n = [].concat(pe(n), pe(Qg(r[t], t))));
  }), n;
}
function BD(e, t) {
  var n = e || {}, r = n.preserveSelectedRowKeys, a = n.selectedRowKeys, i = n.defaultSelectedRowKeys, o = n.getCheckboxProps, s = n.onChange, l = n.onSelect, u = n.onSelectAll, d = n.onSelectInvert, f = n.onSelectNone, v = n.onSelectMultiple, p = n.columnWidth, h = n.type, g = n.selections, m = n.fixed, y = n.renderCell, b = n.hideSelectAll, x = n.checkStrictly, C = x === void 0 ? !0 : x, E = t.prefixCls, S = t.data, w = t.pageData, N = t.getRecordByKey, O = t.getRowKey, _ = t.expandType, $ = t.childrenColumnName, I = t.locale, F = t.getPopupContainer, M = un(a || i || bv, {
    value: a
  }), V = X(M, 2), T = V[0], R = V[1], k = c.useRef(/* @__PURE__ */ new Map()), A = pn(function(ve) {
    if (r) {
      var ae = /* @__PURE__ */ new Map();
      ve.forEach(function(ie) {
        var ee = N(ie);
        !ee && k.current.has(ie) && (ee = k.current.get(ie)), ae.set(ie, ee);
      }), k.current = ae;
    }
  }, [N, r]);
  c.useEffect(function() {
    A(T);
  }, [T]);
  var U = Zt(function() {
    return C ? {
      keyEntities: null
    } : Ju(S, {
      externalGetKey: O,
      childrenPropName: $
    });
  }, [S, O, C, $]), z = U.keyEntities, B = Zt(function() {
    return Qg(w, $);
  }, [w, $]), G = Zt(function() {
    var ve = /* @__PURE__ */ new Map();
    return B.forEach(function(ae, ie) {
      var ee = O(ae, ie), te = (o ? o(ae) : null) || {};
      ve.set(ee, te), process.env.NODE_ENV !== "production" && Nt(!("checked" in te || "defaultChecked" in te), "Table", "Do not set `checked` or `defaultChecked` in `getCheckboxProps`. Please use `selectedRowKeys` instead.");
    }), ve;
  }, [B, O, o]), W = pn(function(ve) {
    var ae;
    return !!(!((ae = G.get(O(ve))) === null || ae === void 0) && ae.disabled);
  }, [G, O]), j = Zt(function() {
    if (C)
      return [T || [], []];
    var ve = Yr(T, !0, z, W), ae = ve.checkedKeys, ie = ve.halfCheckedKeys;
    return [ae || [], ie];
  }, [T, C, z, W]), H = X(j, 2), q = H[0], Y = H[1], J = Zt(function() {
    var ve = h === "radio" ? q.slice(0, 1) : q;
    return new Set(ve);
  }, [q, h]), oe = Zt(function() {
    return h === "radio" ? /* @__PURE__ */ new Set() : new Set(Y);
  }, [Y, h]), re = Ut(null), de = X(re, 2), Z = de[0], Q = de[1];
  c.useEffect(function() {
    e || R(bv);
  }, [!!e]);
  var ce = pn(function(ve, ae) {
    var ie, ee;
    A(ve), r ? (ie = ve, ee = ve.map(function(te) {
      return k.current.get(te);
    })) : (ie = [], ee = [], ve.forEach(function(te) {
      var xe = N(te);
      xe !== void 0 && (ie.push(te), ee.push(xe));
    })), R(ie), s == null || s(ie, ee, {
      type: ae
    });
  }, [R, N, s, r]), Ce = pn(function(ve, ae, ie, ee) {
    if (l) {
      var te = ie.map(function(xe) {
        return N(xe);
      });
      l(N(ve), ae, te, ee);
    }
    ce(ie, "single");
  }, [l, N, ce]), we = Zt(function() {
    if (!g || b)
      return null;
    var ve = g === !0 ? [Ql, Zl, eu] : g;
    return ve.map(function(ae) {
      return ae === Ql ? {
        key: "all",
        text: I.selectionAll,
        onSelect: function() {
          ce(S.map(function(ee, te) {
            return O(ee, te);
          }).filter(function(ee) {
            var te = G.get(ee);
            return !(te != null && te.disabled) || J.has(ee);
          }), "all");
        }
      } : ae === Zl ? {
        key: "invert",
        text: I.selectInvert,
        onSelect: function() {
          var ee = new Set(J);
          w.forEach(function(xe, Me) {
            var Te = O(xe, Me), Ve = G.get(Te);
            Ve != null && Ve.disabled || (ee.has(Te) ? ee.delete(Te) : ee.add(Te));
          });
          var te = Array.from(ee);
          d && (process.env.NODE_ENV !== "production" && Nt(!1, "Table", "`onSelectInvert` will be removed in future. Please use `onChange` instead."), d(te)), ce(te, "invert");
        }
      } : ae === eu ? {
        key: "none",
        text: I.selectNone,
        onSelect: function() {
          f == null || f(), ce(Array.from(J).filter(function(ee) {
            var te = G.get(ee);
            return te == null ? void 0 : te.disabled;
          }), "none");
        }
      } : ae;
    }).map(function(ae) {
      return K(K({}, ae), {
        onSelect: function() {
          for (var ee, te, xe = arguments.length, Me = new Array(xe), Te = 0; Te < xe; Te++)
            Me[Te] = arguments[Te];
          (te = ae.onSelect) === null || te === void 0 || (ee = te).call.apply(ee, [ae].concat(Me)), Q(null);
        }
      });
    });
  }, [g, J, w, O, d, ce]), ke = pn(function(ve) {
    var ae;
    if (!e)
      return process.env.NODE_ENV !== "production" && Nt(!ve.includes($n), "Table", "`rowSelection` is not config but `SELECTION_COLUMN` exists in the `columns`."), ve.filter(function(Ke) {
        return Ke !== $n;
      });
    var ie = pe(ve), ee = new Set(J), te = B.map(O).filter(function(Ke) {
      return !G.get(Ke).disabled;
    }), xe = te.every(function(Ke) {
      return ee.has(Ke);
    }), Me = te.some(function(Ke) {
      return ee.has(Ke);
    }), Te = function() {
      var Oe = [];
      xe ? te.forEach(function(ue) {
        ee.delete(ue), Oe.push(ue);
      }) : te.forEach(function(ue) {
        ee.has(ue) || (ee.add(ue), Oe.push(ue));
      });
      var se = Array.from(ee);
      u == null || u(!xe, se.map(function(ue) {
        return N(ue);
      }), Oe.map(function(ue) {
        return N(ue);
      })), ce(se, "all"), Q(null);
    }, Ve;
    if (h !== "radio") {
      var Ae;
      if (we) {
        var Ne = {
          getPopupContainer: F,
          items: we.map(function(Ke, Oe) {
            var se = Ke.key, ue = Ke.text, me = Ke.onSelect;
            return {
              key: se || Oe,
              onClick: function() {
                me == null || me(te);
              },
              label: ue
            };
          })
        };
        Ae = /* @__PURE__ */ c.createElement("div", {
          className: "".concat(E, "-selection-extra")
        }, /* @__PURE__ */ c.createElement(Ho, {
          menu: Ne,
          getPopupContainer: F
        }, /* @__PURE__ */ c.createElement("span", null, /* @__PURE__ */ c.createElement(Vu, null))));
      }
      var $e = B.map(function(Ke, Oe) {
        var se = O(Ke, Oe), ue = G.get(se) || {};
        return K({
          checked: ee.has(se)
        }, ue);
      }).filter(function(Ke) {
        var Oe = Ke.disabled;
        return Oe;
      }), je = !!$e.length && $e.length === B.length, lt = je && $e.every(function(Ke) {
        var Oe = Ke.checked;
        return Oe;
      }), tt = je && $e.some(function(Ke) {
        var Oe = Ke.checked;
        return Oe;
      });
      Ve = !b && /* @__PURE__ */ c.createElement("div", {
        className: "".concat(E, "-selection")
      }, /* @__PURE__ */ c.createElement(ta, {
        checked: je ? lt : !!B.length && xe,
        indeterminate: je ? !lt && tt : !xe && Me,
        onChange: Te,
        disabled: B.length === 0 || je,
        "aria-label": Ae ? "Custom selection" : "Select all",
        skipGroup: !0
      }), Ae);
    }
    var ot;
    h === "radio" ? ot = function(Oe, se, ue) {
      var me = O(se, ue), Se = ee.has(me);
      return {
        node: /* @__PURE__ */ c.createElement(Dh, K({}, G.get(me), {
          checked: Se,
          onClick: function(Je) {
            return Je.stopPropagation();
          },
          onChange: function(Je) {
            ee.has(me) || Ce(me, !0, [me], Je.nativeEvent);
          }
        })),
        checked: Se
      };
    } : ot = function(Oe, se, ue) {
      var me, Se = O(se, ue), _e = ee.has(Se), Je = oe.has(Se), Ct = G.get(Se), Rt;
      return _ === "nest" ? (Rt = Je, process.env.NODE_ENV !== "production" && Nt(typeof (Ct == null ? void 0 : Ct.indeterminate) != "boolean", "Table", "set `indeterminate` using `rowSelection.getCheckboxProps` is not allowed with tree structured dataSource.")) : Rt = (me = Ct == null ? void 0 : Ct.indeterminate) !== null && me !== void 0 ? me : Je, {
        node: /* @__PURE__ */ c.createElement(ta, K({}, Ct, {
          indeterminate: Rt,
          checked: _e,
          skipGroup: !0,
          onClick: function(Qe) {
            return Qe.stopPropagation();
          },
          onChange: function(Qe) {
            var L = Qe.nativeEvent, le = L.shiftKey, he = -1, Pe = -1;
            if (le && C) {
              var ze = /* @__PURE__ */ new Set([Z, Se]);
              te.some(function(kt, Fn) {
                if (ze.has(kt))
                  if (he === -1)
                    he = Fn;
                  else
                    return Pe = Fn, !0;
                return !1;
              });
            }
            if (Pe !== -1 && he !== Pe && C) {
              var ge = te.slice(he, Pe + 1), ye = [];
              _e ? ge.forEach(function(kt) {
                ee.has(kt) && (ye.push(kt), ee.delete(kt));
              }) : ge.forEach(function(kt) {
                ee.has(kt) || (ye.push(kt), ee.add(kt));
              });
              var Ee = Array.from(ee);
              v == null || v(!_e, Ee.map(function(kt) {
                return N(kt);
              }), ye.map(function(kt) {
                return N(kt);
              })), ce(Ee, "multiple");
            } else {
              var Ye = q;
              if (C) {
                var Re = _e ? Mn(Ye, Se) : Xn(Ye, Se);
                Ce(Se, !_e, Re, L);
              } else {
                var Ie = Yr([].concat(pe(Ye), [Se]), !0, z, W), Be = Ie.checkedKeys, Pt = Ie.halfCheckedKeys, ut = Be;
                if (_e) {
                  var xt = new Set(Be);
                  xt.delete(Se), ut = Yr(Array.from(xt), {
                    checked: !1,
                    halfCheckedKeys: Pt
                  }, z, W).checkedKeys;
                }
                Ce(Se, !_e, ut, L);
              }
            }
            Q(_e ? null : Se);
          }
        })),
        checked: _e
      };
    };
    var ft = function(Oe, se, ue) {
      var me = ot(Oe, se, ue), Se = me.node, _e = me.checked;
      return y ? y(_e, se, ue, Se) : Se;
    };
    if (!ie.includes($n))
      if (ie.findIndex(function(Ke) {
        var Oe;
        return ((Oe = Ke[Ma]) === null || Oe === void 0 ? void 0 : Oe.columnType) === "EXPAND_COLUMN";
      }) === 0) {
        var nt = ie, Et = gu(nt), at = Et[0], Ft = Et.slice(1);
        ie = [at, $n].concat(pe(Ft));
      } else
        ie = [$n].concat(pe(ie));
    var Mt = ie.indexOf($n);
    process.env.NODE_ENV !== "production" && Nt(ie.filter(function(Ke) {
      return Ke === $n;
    }).length <= 1, "Table", "Multiple `SELECTION_COLUMN` exist in `columns`."), ie = ie.filter(function(Ke, Oe) {
      return Ke !== $n || Oe === Mt;
    });
    var rt = ie[Mt - 1], Ot = ie[Mt + 1], vt = m;
    vt === void 0 && ((Ot == null ? void 0 : Ot.fixed) !== void 0 ? vt = Ot.fixed : (rt == null ? void 0 : rt.fixed) !== void 0 && (vt = rt.fixed)), vt && rt && ((ae = rt[Ma]) === null || ae === void 0 ? void 0 : ae.columnType) === "EXPAND_COLUMN" && rt.fixed === void 0 && (rt.fixed = vt);
    var Ze = P({
      fixed: vt,
      width: p,
      className: "".concat(E, "-selection-column"),
      title: e.columnTitle || Ve,
      render: ft
    }, Ma, {
      className: "".concat(E, "-selection-col")
    });
    return ie.map(function(Ke) {
      return Ke === $n ? Ze : Ke;
    });
  }, [O, B, e, q, J, oe, p, we, _, Z, G, v, Ce, W]);
  return [ke, J];
}
var UD = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" } }] }, name: "caret-down", theme: "outlined" };
const WD = UD;
var Zg = function(t, n) {
  return /* @__PURE__ */ c.createElement(It, D(D({}, t), {}, {
    ref: n,
    icon: WD
  }));
};
Zg.displayName = "CaretDownOutlined";
const GD = /* @__PURE__ */ c.forwardRef(Zg);
var qD = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z" } }] }, name: "caret-up", theme: "outlined" };
const YD = qD;
var ey = function(t, n) {
  return /* @__PURE__ */ c.createElement(It, D(D({}, t), {}, {
    ref: n,
    icon: YD
  }));
};
ey.displayName = "CaretUpOutlined";
const XD = /* @__PURE__ */ c.forwardRef(ey);
var ji = "ascend", Bs = "descend";
function mo(e) {
  return Le(e.sorter) === "object" && typeof e.sorter.multiple == "number" ? e.sorter.multiple : !1;
}
function Cv(e) {
  return typeof e == "function" ? e : e && Le(e) === "object" && e.compare ? e.compare : !1;
}
function JD(e, t) {
  return t ? e[e.indexOf(t) + 1] : e[0];
}
function tu(e, t, n) {
  var r = [];
  function a(i, o) {
    r.push({
      column: i,
      key: na(i, o),
      multiplePriority: mo(i),
      sortOrder: i.sortOrder
    });
  }
  return (e || []).forEach(function(i, o) {
    var s = Yo(o, n);
    i.children ? ("sortOrder" in i && a(i, s), r = [].concat(pe(r), pe(tu(i.children, t, s)))) : i.sorter && ("sortOrder" in i ? a(i, s) : t && i.defaultSortOrder && r.push({
      column: i,
      key: na(i, s),
      multiplePriority: mo(i),
      sortOrder: i.defaultSortOrder
    }));
  }), r;
}
function ty(e, t, n, r, a, i, o, s) {
  return (t || []).map(function(l, u) {
    var d = Yo(u, s), f = l;
    if (f.sorter) {
      var v = f.sortDirections || a, p = f.showSorterTooltip === void 0 ? o : f.showSorterTooltip, h = na(f, d), g = n.find(function(_) {
        var $ = _.key;
        return $ === h;
      }), m = g ? g.sortOrder : null, y = JD(v, m), b = v.includes(ji) && /* @__PURE__ */ c.createElement(XD, {
        className: ne("".concat(e, "-column-sorter-up"), {
          active: m === ji
        }),
        role: "presentation"
      }), x = v.includes(Bs) && /* @__PURE__ */ c.createElement(GD, {
        className: ne("".concat(e, "-column-sorter-down"), {
          active: m === Bs
        }),
        role: "presentation"
      }), C = i || {}, E = C.cancelSort, S = C.triggerAsc, w = C.triggerDesc, N = E;
      y === Bs ? N = w : y === ji && (N = S);
      var O = Le(p) === "object" ? p : {
        title: N
      };
      f = K(K({}, f), {
        className: ne(f.className, P({}, "".concat(e, "-column-sort"), m)),
        title: function($) {
          var I = /* @__PURE__ */ c.createElement("div", {
            className: "".concat(e, "-column-sorters")
          }, /* @__PURE__ */ c.createElement("span", {
            className: "".concat(e, "-column-title")
          }, Xo(l.title, $)), /* @__PURE__ */ c.createElement("span", {
            className: ne("".concat(e, "-column-sorter"), P({}, "".concat(e, "-column-sorter-full"), !!(b && x)))
          }, /* @__PURE__ */ c.createElement("span", {
            className: "".concat(e, "-column-sorter-inner")
          }, b, x)));
          return p ? /* @__PURE__ */ c.createElement(th, K({}, O), I) : I;
        },
        onHeaderCell: function($) {
          var I = l.onHeaderCell && l.onHeaderCell($) || {}, F = I.onClick, M = I.onKeyDown;
          I.onClick = function(R) {
            r({
              column: l,
              key: h,
              sortOrder: y,
              multiplePriority: mo(l)
            }), F == null || F(R);
          }, I.onKeyDown = function(R) {
            R.keyCode === fe.ENTER && (r({
              column: l,
              key: h,
              sortOrder: y,
              multiplePriority: mo(l)
            }), M == null || M(R));
          };
          var V = Ik(l.title, {}), T = V == null ? void 0 : V.toString();
          return m ? I["aria-sort"] = m === "ascend" ? "ascending" : "descending" : I["aria-label"] = T || "", I.className = ne(I.className, "".concat(e, "-column-has-sorters")), I.tabIndex = 0, l.ellipsis && (I.title = (V ?? "").toString()), I;
        }
      });
    }
    return "children" in f && (f = K(K({}, f), {
      children: ty(e, f.children, n, r, a, i, o, d)
    })), f;
  });
}
function xv(e) {
  var t = e.column, n = e.sortOrder;
  return {
    column: t,
    order: n,
    field: t.dataIndex,
    columnKey: t.key
  };
}
function Sv(e) {
  var t = e.filter(function(n) {
    var r = n.sortOrder;
    return r;
  }).map(xv);
  return t.length === 0 && e.length ? K(K({}, xv(e[e.length - 1])), {
    column: void 0
  }) : t.length <= 1 ? t[0] || {} : t;
}
function nu(e, t, n) {
  var r = t.slice().sort(function(o, s) {
    return s.multiplePriority - o.multiplePriority;
  }), a = e.slice(), i = r.filter(function(o) {
    var s = o.column.sorter, l = o.sortOrder;
    return Cv(s) && l;
  });
  return i.length ? a.sort(function(o, s) {
    for (var l = 0; l < i.length; l += 1) {
      var u = i[l], d = u.column.sorter, f = u.sortOrder, v = Cv(d);
      if (v && f) {
        var p = v(o, s, f);
        if (p !== 0)
          return f === ji ? p : -p;
      }
    }
    return 0;
  }).map(function(o) {
    var s = o[n];
    return s ? K(K({}, o), P({}, n, nu(s, t, n))) : o;
  }) : a;
}
function QD(e) {
  var t = e.prefixCls, n = e.mergedColumns, r = e.onSorterChange, a = e.sortDirections, i = e.tableLocale, o = e.showSorterTooltip, s = c.useState(tu(n, !0)), l = X(s, 2), u = l[0], d = l[1], f = c.useMemo(function() {
    var m = !0, y = tu(n, !1);
    if (!y.length)
      return u;
    var b = [];
    function x(E) {
      m ? b.push(E) : b.push(K(K({}, E), {
        sortOrder: null
      }));
    }
    var C = null;
    return y.forEach(function(E) {
      C === null ? (x(E), E.sortOrder && (E.multiplePriority === !1 ? m = !1 : C = !0)) : (C && E.multiplePriority !== !1 || (m = !1), x(E));
    }), b;
  }, [n, u]), v = c.useMemo(function() {
    var m = f.map(function(y) {
      var b = y.column, x = y.sortOrder;
      return {
        column: b,
        order: x
      };
    });
    return {
      sortColumns: m,
      // Legacy
      sortColumn: m[0] && m[0].column,
      sortOrder: m[0] && m[0].order
    };
  }, [f]);
  function p(m) {
    var y;
    m.multiplePriority === !1 || !f.length || f[0].multiplePriority === !1 ? y = [m] : y = [].concat(pe(f.filter(function(b) {
      var x = b.key;
      return x !== m.key;
    })), [m]), d(y), r(Sv(y), y);
  }
  var h = function(y) {
    return ty(t, y, f, p, a, i, o);
  }, g = function() {
    return Sv(f);
  };
  return [h, f, v, g];
}
function ny(e, t) {
  return e.map(function(n) {
    var r = K({}, n);
    return r.title = Xo(n.title, t), "children" in r && (r.children = ny(r.children, t)), r;
  });
}
function ZD(e) {
  var t = c.useCallback(function(n) {
    return ny(n, e);
  }, [e]);
  return [t];
}
var eA = [];
function tA(e, t) {
  var n, r = e.prefixCls, a = e.className, i = e.style, o = e.size, s = e.bordered, l = e.dropdownPrefixCls, u = e.dataSource, d = e.pagination, f = e.rowSelection, v = e.rowKey, p = v === void 0 ? "key" : v, h = e.rowClassName, g = e.columns, m = e.children, y = e.childrenColumnName, b = e.onChange, x = e.getPopupContainer, C = e.loading, E = e.expandIcon, S = e.expandable, w = e.expandedRowRender, N = e.expandIconColumnIndex, O = e.indentSize, _ = e.scroll, $ = e.sortDirections, I = e.locale, F = e.showSorterTooltip, M = F === void 0 ? !0 : F;
  process.env.NODE_ENV !== "production" && Nt(!(typeof p == "function" && p.length > 1), "Table", "`index` parameter of `rowKey` function is deprecated. There is no guarantee that it will work as expected."), [["filterDropdownVisible", "filterDropdownOpen"], ["onFilterDropdownVisibleChange", "onFilterDropdownOpenChange"]].forEach(function(Re) {
    var Ie = X(Re, 2), Be = Ie[0], Pt = Ie[1];
    process.env.NODE_ENV !== "production" && Nt(!(Be in e), "Table", "`".concat(Be, "` is deprecated which will be removed in next major version.Please use `").concat(Pt, "` instead. "));
  });
  var V = c.useMemo(function() {
    return g || ac(m);
  }, [g, m]), T = c.useMemo(function() {
    return V.some(function(Re) {
      return Re.responsive;
    });
  }, [V]), R = Jm(T), k = c.useMemo(function() {
    var Re = new Set(Object.keys(R).filter(function(Ie) {
      return R[Ie];
    }));
    return V.filter(function(Ie) {
      return !Ie.responsive || Ie.responsive.some(function(Be) {
        return Re.has(Be);
      });
    });
  }, [V, R]), A = ln(e, ["className", "style", "columns"]), U = c.useContext(fr), z = c.useContext(st), B = z.locale, G = B === void 0 ? ja : B, W = z.renderEmpty, j = z.direction, H = o || U, q = K(K({}, G.Table), I), Y = u || eA, J = c.useContext(st), oe = J.getPrefixCls, re = oe("table", r), de = oe("dropdown", l), Z = K({
    childrenColumnName: y,
    expandIconColumnIndex: N
  }, S), Q = Z.childrenColumnName, ce = Q === void 0 ? "children" : Q, Ce = c.useMemo(function() {
    return Y.some(function(Re) {
      return Re == null ? void 0 : Re[ce];
    }) ? "nest" : w || S && S.expandedRowRender ? "row" : null;
  }, [Y]), we = {
    body: c.useRef()
  }, ke = c.useMemo(function() {
    return typeof p == "function" ? p : function(Re) {
      return Re == null ? void 0 : Re[p];
    };
  }, [p]), ve = KD(Y, ce, ke), ae = X(ve, 1), ie = ae[0], ee = {}, te = function(Ie, Be) {
    var Pt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, ut = K(K({}, ee), Ie);
    Pt && (ee.resetPagination(), ut.pagination.current && (ut.pagination.current = 1), d && d.onChange && d.onChange(1, ut.pagination.pageSize)), _ && _.scrollToFirstRowOnChange !== !1 && we.body.current && EE(0, {
      getContainer: function() {
        return we.body.current;
      }
    }), b == null || b(ut.pagination, ut.filters, ut.sorter, {
      currentDataSource: yv(nu(Y, ut.sorterStates, ce), ut.filterStates),
      action: Be
    });
  }, xe = function(Ie, Be) {
    te({
      sorter: Ie,
      sorterStates: Be
    }, "sort", !1);
  }, Me = QD({
    prefixCls: re,
    mergedColumns: k,
    onSorterChange: xe,
    sortDirections: $ || ["ascend", "descend"],
    tableLocale: q,
    showSorterTooltip: M
  }), Te = X(Me, 4), Ve = Te[0], Ae = Te[1], Ne = Te[2], $e = Te[3], je = c.useMemo(function() {
    return nu(Y, Ae, ce);
  }, [Y, Ae]);
  ee.sorter = $e(), ee.sorterStates = Ae;
  var lt = function(Ie, Be) {
    te({
      filters: Ie,
      filterStates: Be
    }, "filter", !0);
  }, tt = LD({
    prefixCls: re,
    locale: q,
    dropdownPrefixCls: de,
    mergedColumns: k,
    onFilterChange: lt,
    getPopupContainer: x
  }), ot = X(tt, 3), ft = ot[0], nt = ot[1], Et = ot[2], at = yv(je, nt);
  ee.filters = Et, ee.filterStates = nt;
  var Ft = c.useMemo(function() {
    var Re = {};
    return Object.keys(Et).forEach(function(Ie) {
      Et[Ie] !== null && (Re[Ie] = Et[Ie]);
    }), K(K({}, Ne), {
      filters: Re
    });
  }, [Ne, Et]), Mt = ZD(Ft), rt = X(Mt, 1), Ot = rt[0], vt = function(Ie, Be) {
    te({
      pagination: K(K({}, ee.pagination), {
        current: Ie,
        pageSize: Be
      })
    }, "paginate");
  }, Ze = HD(at.length, d, vt), Ke = X(Ze, 2), Oe = Ke[0], se = Ke[1];
  ee.pagination = d === !1 ? {} : zD(d, Oe), ee.resetPagination = se;
  var ue = c.useMemo(function() {
    if (d === !1 || !Oe.pageSize)
      return at;
    var Re = Oe.current, Ie = Re === void 0 ? 1 : Re, Be = Oe.total, Pt = Oe.pageSize, ut = Pt === void 0 ? Jg : Pt;
    return process.env.NODE_ENV !== "production" && Nt(Ie > 0, "Table", "`current` should be positive number."), at.length < Be ? at.length > ut ? (process.env.NODE_ENV !== "production" && Nt(!1, "Table", "`dataSource` length is less than `pagination.total` but large than `pagination.pageSize`. Please make sure your config correct data with async mode."), at.slice((Ie - 1) * ut, Ie * ut)) : at : at.slice((Ie - 1) * ut, Ie * ut);
  }, [!!d, at, Oe && Oe.current, Oe && Oe.pageSize, Oe && Oe.total]), me = BD(f, {
    prefixCls: re,
    data: at,
    pageData: ue,
    getRowKey: ke,
    getRecordByKey: ie,
    expandType: Ce,
    childrenColumnName: ce,
    locale: q,
    getPopupContainer: x
  }), Se = X(me, 2), _e = Se[0], Je = Se[1], Ct = function(Ie, Be, Pt) {
    var ut;
    return typeof h == "function" ? ut = ne(h(Ie, Be, Pt)) : ut = ne(h), ne(P({}, "".concat(re, "-row-selected"), Je.has(ke(Ie, Be))), ut);
  };
  Z.__PARENT_RENDER_ICON__ = Z.expandIcon, Z.expandIcon = Z.expandIcon || E || _k(q), Ce === "nest" && Z.expandIconColumnIndex === void 0 ? Z.expandIconColumnIndex = f ? 1 : 0 : Z.expandIconColumnIndex > 0 && f && (Z.expandIconColumnIndex -= 1), typeof Z.indentSize != "number" && (Z.indentSize = typeof O == "number" ? O : 15);
  var Rt = c.useCallback(function(Re) {
    return Ot(_e(ft(Ve(Re))));
  }, [Ve, ft, _e]), At, Qe;
  if (d !== !1 && (Oe != null && Oe.total)) {
    var L;
    Oe.size ? L = Oe.size : L = H === "small" || H === "middle" ? "small" : void 0;
    var le = function(Ie) {
      return /* @__PURE__ */ c.createElement(rg, K({}, Oe, {
        className: ne("".concat(re, "-pagination ").concat(re, "-pagination-").concat(Ie), Oe.className),
        size: L
      }));
    }, he = j === "rtl" ? "left" : "right", Pe = Oe.position;
    if (Pe !== null && Array.isArray(Pe)) {
      var ze = Pe.find(function(Re) {
        return Re.includes("top");
      }), ge = Pe.find(function(Re) {
        return Re.includes("bottom");
      }), ye = Pe.every(function(Re) {
        return "".concat(Re) === "none";
      });
      !ze && !ge && !ye && (Qe = le(he)), ze && (At = le(ze.toLowerCase().replace("top", ""))), ge && (Qe = le(ge.toLowerCase().replace("bottom", "")));
    } else
      Qe = le(he);
  }
  var Ee;
  typeof C == "boolean" ? Ee = {
    spinning: C
  } : Le(C) === "object" && (Ee = K({
    spinning: !0
  }, C));
  var Ye = ne("".concat(re, "-wrapper"), P({}, "".concat(re, "-wrapper-rtl"), j === "rtl"), a);
  return /* @__PURE__ */ c.createElement("div", {
    ref: t,
    className: Ye,
    style: i
  }, /* @__PURE__ */ c.createElement($2, K({
    spinning: !1
  }, Ee), At, /* @__PURE__ */ c.createElement(kr, K({}, A, {
    columns: k,
    direction: j,
    expandable: Z,
    prefixCls: re,
    className: ne((n = {}, P(n, "".concat(re, "-middle"), H === "middle"), P(n, "".concat(re, "-small"), H === "small"), P(n, "".concat(re, "-bordered"), s), P(n, "".concat(re, "-empty"), Y.length === 0), n)),
    data: ue,
    rowKey: ke,
    rowClassName: Ct,
    emptyText: I && I.emptyText || (W || Ku)("Table"),
    // Internal
    internalHooks: zi,
    internalRefs: we,
    transformColumns: Rt
  })), Qe));
}
var nA = /* @__PURE__ */ c.forwardRef(tA), tr = nA;
tr.SELECTION_COLUMN = $n;
tr.EXPAND_COLUMN = kr.EXPAND_COLUMN;
tr.SELECTION_ALL = Ql;
tr.SELECTION_INVERT = Zl;
tr.SELECTION_NONE = eu;
tr.Column = kk;
tr.ColumnGroup = Tk;
tr.Summary = xg;
const rA = tr;
var aA = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" } }] }, name: "delete", theme: "outlined" };
const iA = aA;
var ry = function(t, n) {
  return /* @__PURE__ */ c.createElement(It, D(D({}, t), {}, {
    ref: n,
    icon: iA
  }));
};
ry.displayName = "DeleteOutlined";
const oA = /* @__PURE__ */ c.forwardRef(ry);
var sA = function(t) {
  var n, r = t.renderedText, a = t.renderedEl, i = t.item, o = t.checked, s = t.disabled, l = t.prefixCls, u = t.onClick, d = t.onRemove, f = t.showRemove, v = ne((n = {}, P(n, "".concat(l, "-content-item"), !0), P(n, "".concat(l, "-content-item-disabled"), s || i.disabled), P(n, "".concat(l, "-content-item-checked"), o), n)), p;
  return (typeof r == "string" || typeof r == "number") && (p = String(r)), /* @__PURE__ */ c.createElement(wo, {
    componentName: "Transfer",
    defaultLocale: ja.Transfer
  }, function(h) {
    var g = {
      className: v,
      title: p
    }, m = /* @__PURE__ */ c.createElement("span", {
      className: "".concat(l, "-content-item-text")
    }, a);
    return f ? /* @__PURE__ */ c.createElement("li", K({}, g), m, /* @__PURE__ */ c.createElement(K2, {
      disabled: s || i.disabled,
      className: "".concat(l, "-content-item-remove"),
      "aria-label": h.remove,
      onClick: function() {
        d == null || d(i);
      }
    }, /* @__PURE__ */ c.createElement(oA, null))) : (g.onClick = s || i.disabled ? void 0 : function() {
      return u(i);
    }, /* @__PURE__ */ c.createElement("li", K({}, g), /* @__PURE__ */ c.createElement(ta, {
      className: "".concat(l, "-checkbox"),
      checked: o,
      disabled: s || i.disabled
    }), m));
  });
};
const lA = /* @__PURE__ */ c.memo(sA);
var uA = In("handleFilter", "handleClear", "checkedKeys");
function Us(e) {
  if (!e)
    return null;
  var t = {
    pageSize: 10,
    simple: !0,
    showSizeChanger: !1,
    showLessItems: !1
  };
  return Le(e) === "object" ? K(K({}, t), e) : t;
}
var cA = /* @__PURE__ */ function(e) {
  Gt(n, e);
  var t = qt(n);
  function n() {
    var r;
    return Kt(this, n), r = t.apply(this, arguments), r.state = {
      current: 1
    }, r.onItemSelect = function(a) {
      var i = r.props, o = i.onItemSelect, s = i.selectedKeys, l = s.includes(a.key);
      o(a.key, !l);
    }, r.onItemRemove = function(a) {
      var i = r.props.onItemRemove;
      i == null || i([a.key]);
    }, r.onPageChange = function(a) {
      r.setState({
        current: a
      });
    }, r.getItems = function() {
      var a = r.state.current, i = r.props, o = i.pagination, s = i.filteredRenderItems, l = Us(o), u = s;
      return l && (u = s.slice((a - 1) * l.pageSize, a * l.pageSize)), u;
    }, r;
  }
  return Vt(n, [{
    key: "render",
    value: function() {
      var a = this, i = this.state.current, o = this.props, s = o.prefixCls, l = o.onScroll, u = o.filteredRenderItems, d = o.selectedKeys, f = o.disabled, v = o.showRemove, p = o.pagination, h = Us(p), g = null;
      return h && (g = /* @__PURE__ */ c.createElement(rg, {
        simple: h.simple,
        showSizeChanger: h.showSizeChanger,
        showLessItems: h.showLessItems,
        size: "small",
        disabled: f,
        className: "".concat(s, "-pagination"),
        total: u.length,
        pageSize: h.pageSize,
        current: i,
        onChange: this.onPageChange
      })), /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement("ul", {
        className: ne("".concat(s, "-content"), P({}, "".concat(s, "-content-show-remove"), v)),
        onScroll: l
      }, this.getItems().map(function(m) {
        var y = m.renderedEl, b = m.renderedText, x = m.item, C = x.disabled, E = d.includes(x.key);
        return /* @__PURE__ */ c.createElement(lA, {
          disabled: f || C,
          key: x.key,
          item: x,
          renderedText: b,
          renderedEl: y,
          checked: E,
          prefixCls: s,
          onClick: a.onItemSelect,
          onRemove: a.onItemRemove,
          showRemove: v
        });
      })), g);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(a, i) {
      var o = a.filteredRenderItems, s = a.pagination, l = i.current, u = Us(s);
      if (u) {
        var d = Math.ceil(o.length / u.pageSize);
        if (l > d)
          return {
            current: d
          };
      }
      return null;
    }
  }]), n;
}(c.Component);
const dA = cA;
function ay(e) {
  var t = e.placeholder, n = t === void 0 ? "" : t, r = e.value, a = e.prefixCls, i = e.disabled, o = e.onChange, s = e.handleClear, l = c.useCallback(function(u) {
    o == null || o(u), u.target.value === "" && (s == null || s());
  }, [o]);
  return /* @__PURE__ */ c.createElement(Xh, {
    placeholder: n,
    className: a,
    value: r,
    onChange: l,
    disabled: i,
    allowClear: !0,
    prefix: /* @__PURE__ */ c.createElement(Fo, null)
  });
}
var fA = function() {
  return null;
};
function vA(e) {
  return !!(e && !Nn(e) && Object.prototype.toString.call(e) === "[object Object]");
}
function Vr(e) {
  return e.filter(function(t) {
    return !t.disabled;
  }).map(function(t) {
    return t.key;
  });
}
var ru = /* @__PURE__ */ function(e) {
  Gt(n, e);
  var t = qt(n);
  function n(r) {
    var a;
    return Kt(this, n), a = t.call(this, r), a.defaultListBodyRef = /* @__PURE__ */ c.createRef(), a.handleFilter = function(i) {
      var o = a.props.handleFilter, s = i.target.value;
      a.setState({
        filterValue: s
      }), o(i);
    }, a.handleClear = function() {
      var i = a.props.handleClear;
      a.setState({
        filterValue: ""
      }), i();
    }, a.matchFilter = function(i, o) {
      var s = a.state.filterValue, l = a.props.filterOption;
      return l ? l(s, o) : i.includes(s);
    }, a.renderListBody = function(i, o) {
      var s = i ? i(o) : null, l = !!s;
      return l || (s = /* @__PURE__ */ c.createElement(dA, K({
        ref: a.defaultListBodyRef
      }, o))), {
        customize: l,
        bodyContent: s
      };
    }, a.renderItem = function(i) {
      var o = a.props.render, s = o === void 0 ? fA : o, l = s(i), u = vA(l);
      return {
        renderedText: u ? l.value : l,
        renderedEl: u ? l.label : l,
        item: i
      };
    }, a.getSelectAllLabel = function(i, o) {
      var s = a.props, l = s.itemsUnit, u = s.itemUnit, d = s.selectAllLabel;
      if (d)
        return typeof d == "function" ? d({
          selectedCount: i,
          totalCount: o
        }) : d;
      var f = o > 1 ? l : u;
      return /* @__PURE__ */ c.createElement(c.Fragment, null, (i > 0 ? "".concat(i, "/") : "") + o, " ", f);
    }, a.state = {
      filterValue: ""
    }, a;
  }
  return Vt(n, [{
    key: "componentWillUnmount",
    value: function() {
      clearTimeout(this.triggerScrollTimer);
    }
  }, {
    key: "getCheckStatus",
    value: function(a) {
      var i = this.props.checkedKeys;
      return i.length === 0 ? "none" : a.every(function(o) {
        return i.includes(o.key) || !!o.disabled;
      }) ? "all" : "part";
    }
    // ================================ Item ================================
  }, {
    key: "getFilteredItems",
    value: function(a, i) {
      var o = this, s = [], l = [];
      return a.forEach(function(u) {
        var d = o.renderItem(u), f = d.renderedText;
        if (i && !o.matchFilter(f, u))
          return null;
        s.push(u), l.push(d);
      }), {
        filteredItems: s,
        filteredRenderItems: l
      };
    }
  }, {
    key: "getListBody",
    value: function(a, i, o, s, l, u, d, f, v, p) {
      var h = this, g = v ? /* @__PURE__ */ c.createElement("div", {
        className: "".concat(a, "-body-search-wrapper")
      }, /* @__PURE__ */ c.createElement(ay, {
        prefixCls: "".concat(a, "-search"),
        onChange: this.handleFilter,
        handleClear: this.handleClear,
        placeholder: i,
        value: o,
        disabled: p
      })) : null, m = this.renderListBody(f, K(K({}, ln(this.props, uA)), {
        filteredItems: s,
        filteredRenderItems: u,
        selectedKeys: d
      })), y = m.bodyContent, b = m.customize, x = function() {
        var S = h.props.direction === "left" ? 0 : 1;
        return Array.isArray(l) ? l[S] : l;
      }, C;
      return b ? C = /* @__PURE__ */ c.createElement("div", {
        className: "".concat(a, "-body-customize-wrapper")
      }, y) : C = s.length ? y : /* @__PURE__ */ c.createElement("div", {
        className: "".concat(a, "-body-not-found")
      }, x()), /* @__PURE__ */ c.createElement("div", {
        className: ne(v ? "".concat(a, "-body ").concat(a, "-body-with-search") : "".concat(a, "-body"))
      }, g, C);
    }
  }, {
    key: "getCheckBox",
    value: function(a) {
      var i = a.filteredItems, o = a.onItemSelectAll, s = a.disabled, l = a.prefixCls, u = this.getCheckStatus(i), d = u === "all", f = /* @__PURE__ */ c.createElement(ta, {
        disabled: s,
        checked: d,
        indeterminate: u === "part",
        className: "".concat(l, "-checkbox"),
        onChange: function() {
          o(i.filter(function(p) {
            return !p.disabled;
          }).map(function(p) {
            var h = p.key;
            return h;
          }), !d);
        }
      });
      return f;
    }
  }, {
    key: "render",
    value: function() {
      var a, i = this, o = this.state.filterValue, s = this.props, l = s.prefixCls, u = s.dataSource, d = u === void 0 ? [] : u, f = s.titleText, v = f === void 0 ? "" : f, p = s.checkedKeys, h = s.disabled, g = s.footer, m = s.showSearch, y = m === void 0 ? !1 : m, b = s.style, x = s.searchPlaceholder, C = s.notFoundContent, E = s.selectAll, S = s.selectCurrent, w = s.selectInvert, N = s.removeAll, O = s.removeCurrent, _ = s.renderList, $ = s.onItemSelectAll, I = s.onItemRemove, F = s.showSelectAll, M = F === void 0 ? !0 : F, V = s.showRemove, T = s.pagination, R = s.direction, k = g && (g.length < 2 ? g(this.props) : g(this.props, {
        direction: R
      })), A = ne(l, (a = {}, P(a, "".concat(l, "-with-pagination"), !!T), P(a, "".concat(l, "-with-footer"), !!k), a)), U = this.getFilteredItems(d, o), z = U.filteredItems, B = U.filteredRenderItems, G = this.getListBody(l, x, o, z, C, B, p, _, y, h), W = k ? /* @__PURE__ */ c.createElement("div", {
        className: "".concat(l, "-footer")
      }, k) : null, j = !V && !T && this.getCheckBox({
        filteredItems: z,
        onItemSelectAll: $,
        disabled: h,
        prefixCls: l
      }), H;
      V ? H = [
        /* Remove Current Page */
        T ? {
          key: "removeCurrent",
          onClick: function() {
            var J, oe = Vr((((J = i.defaultListBodyRef.current) === null || J === void 0 ? void 0 : J.getItems()) || []).map(function(re) {
              return re.item;
            }));
            I == null || I(oe);
          },
          label: O
        } : null,
        /* Remove All */
        {
          key: "removeAll",
          onClick: function() {
            I == null || I(Vr(z));
          },
          label: N
        }
      ].filter(function(Y) {
        return Y;
      }) : H = [{
        key: "selectAll",
        onClick: function() {
          var J = Vr(z);
          $(J, J.length !== p.length);
        },
        label: E
      }, T ? {
        key: "selectCurrent",
        onClick: function() {
          var J, oe = ((J = i.defaultListBodyRef.current) === null || J === void 0 ? void 0 : J.getItems()) || [];
          $(Vr(oe.map(function(re) {
            return re.item;
          })), !0);
        },
        label: S
      } : null, {
        key: "selectInvert",
        onClick: function() {
          var J, oe;
          T ? oe = Vr((((J = i.defaultListBodyRef.current) === null || J === void 0 ? void 0 : J.getItems()) || []).map(function(Q) {
            return Q.item;
          })) : oe = Vr(z);
          var re = new Set(p), de = [], Z = [];
          oe.forEach(function(Q) {
            re.has(Q) ? Z.push(Q) : de.push(Q);
          }), $(de, !0), $(Z, !1);
        },
        label: w
      }];
      var q = /* @__PURE__ */ c.createElement(Ho, {
        className: "".concat(l, "-header-dropdown"),
        menu: {
          items: H
        },
        disabled: h
      }, /* @__PURE__ */ c.createElement(Vu, null));
      return /* @__PURE__ */ c.createElement("div", {
        className: A,
        style: b
      }, /* @__PURE__ */ c.createElement("div", {
        className: "".concat(l, "-header")
      }, M ? /* @__PURE__ */ c.createElement(c.Fragment, null, j, q) : null, /* @__PURE__ */ c.createElement("span", {
        className: "".concat(l, "-header-selected")
      }, this.getSelectAllLabel(p.length, z.length)), /* @__PURE__ */ c.createElement("span", {
        className: "".concat(l, "-header-title")
      }, v)), G, W);
    }
  }]), n;
}(c.PureComponent), pA = function(t) {
  var n = t.disabled, r = t.moveToLeft, a = t.moveToRight, i = t.leftArrowText, o = i === void 0 ? "" : i, s = t.rightArrowText, l = s === void 0 ? "" : s, u = t.leftActive, d = t.rightActive, f = t.className, v = t.style, p = t.direction, h = t.oneWay;
  return /* @__PURE__ */ c.createElement("div", {
    className: f,
    style: v
  }, /* @__PURE__ */ c.createElement(dr, {
    type: "primary",
    size: "small",
    disabled: n || !d,
    onClick: a,
    icon: p !== "rtl" ? /* @__PURE__ */ c.createElement(ea, null) : /* @__PURE__ */ c.createElement(Wa, null)
  }, l), !h && /* @__PURE__ */ c.createElement(dr, {
    type: "primary",
    size: "small",
    disabled: n || !u,
    onClick: r,
    icon: p !== "rtl" ? /* @__PURE__ */ c.createElement(Wa, null) : /* @__PURE__ */ c.createElement(ea, null)
  }, o));
};
const iy = pA;
var ts = /* @__PURE__ */ function(e) {
  Gt(n, e);
  var t = qt(n);
  function n(r) {
    var a;
    Kt(this, n), a = t.call(this, r), a.separatedDataSource = null, a.setStateKeys = function(u, d) {
      u === "left" ? a.setState(function(f) {
        var v = f.sourceSelectedKeys;
        return {
          sourceSelectedKeys: typeof d == "function" ? d(v || []) : d
        };
      }) : a.setState(function(f) {
        var v = f.targetSelectedKeys;
        return {
          targetSelectedKeys: typeof d == "function" ? d(v || []) : d
        };
      });
    }, a.getLocale = function(u, d) {
      var f = a.props.locale, v = f === void 0 ? {} : f;
      return K(K(K({}, u), {
        notFoundContent: d("Transfer")
      }), v);
    }, a.moveTo = function(u) {
      var d = a.props, f = d.targetKeys, v = f === void 0 ? [] : f, p = d.dataSource, h = p === void 0 ? [] : p, g = d.onChange, m = a.state, y = m.sourceSelectedKeys, b = m.targetSelectedKeys, x = u === "right" ? y : b, C = x.filter(function(w) {
        return !h.some(function(N) {
          return !!(w === N.key && N.disabled);
        });
      }), E = u === "right" ? C.concat(v) : v.filter(function(w) {
        return !C.includes(w);
      }), S = u === "right" ? "left" : "right";
      a.setStateKeys(S, []), a.handleSelectChange(S, []), g == null || g(E, u, C);
    }, a.moveToLeft = function() {
      return a.moveTo("left");
    }, a.moveToRight = function() {
      return a.moveTo("right");
    }, a.onItemSelectAll = function(u, d, f) {
      a.setStateKeys(u, function(v) {
        var p = [];
        return f ? p = Array.from(new Set([].concat(pe(v), pe(d)))) : p = v.filter(function(h) {
          return !d.includes(h);
        }), a.handleSelectChange(u, p), p;
      });
    }, a.onLeftItemSelectAll = function(u, d) {
      return a.onItemSelectAll("left", u, d);
    }, a.onRightItemSelectAll = function(u, d) {
      return a.onItemSelectAll("right", u, d);
    }, a.handleFilter = function(u, d) {
      var f = a.props.onSearch, v = d.target.value;
      f == null || f(u, v);
    }, a.handleLeftFilter = function(u) {
      return a.handleFilter("left", u);
    }, a.handleRightFilter = function(u) {
      return a.handleFilter("right", u);
    }, a.handleClear = function(u) {
      var d = a.props.onSearch;
      d == null || d(u, "");
    }, a.handleLeftClear = function() {
      return a.handleClear("left");
    }, a.handleRightClear = function() {
      return a.handleClear("right");
    }, a.onItemSelect = function(u, d, f) {
      var v = a.state, p = v.sourceSelectedKeys, h = v.targetSelectedKeys, g = pe(u === "left" ? p : h), m = g.indexOf(d);
      m > -1 && g.splice(m, 1), f && g.push(d), a.handleSelectChange(u, g), a.props.selectedKeys || a.setStateKeys(u, g);
    }, a.onLeftItemSelect = function(u, d) {
      return a.onItemSelect("left", u, d);
    }, a.onRightItemSelect = function(u, d) {
      return a.onItemSelect("right", u, d);
    }, a.onRightItemRemove = function(u) {
      var d = a.props, f = d.targetKeys, v = f === void 0 ? [] : f, p = d.onChange;
      a.setStateKeys("right", []), p == null || p(v.filter(function(h) {
        return !u.includes(h);
      }), "left", pe(u));
    }, a.handleScroll = function(u, d) {
      var f = a.props.onScroll;
      f == null || f(u, d);
    }, a.handleLeftScroll = function(u) {
      return a.handleScroll("left", u);
    }, a.handleRightScroll = function(u) {
      return a.handleScroll("right", u);
    }, a.handleListStyle = function(u, d) {
      return typeof u == "function" ? u({
        direction: d
      }) : u;
    };
    var i = r.selectedKeys, o = i === void 0 ? [] : i, s = r.targetKeys, l = s === void 0 ? [] : s;
    return a.state = {
      sourceSelectedKeys: o.filter(function(u) {
        return !l.includes(u);
      }),
      targetSelectedKeys: o.filter(function(u) {
        return l.includes(u);
      })
    }, a;
  }
  return Vt(n, [{
    key: "getTitles",
    value: function(a) {
      var i, o;
      return (o = (i = this.props.titles) !== null && i !== void 0 ? i : a.titles) !== null && o !== void 0 ? o : [];
    }
  }, {
    key: "handleSelectChange",
    value: function(a, i) {
      var o = this.state, s = o.sourceSelectedKeys, l = o.targetSelectedKeys, u = this.props.onSelectChange;
      u && (a === "left" ? u(i, l) : u(s, i));
    }
  }, {
    key: "separateDataSource",
    value: function() {
      var a = this.props, i = a.dataSource, o = i === void 0 ? [] : i, s = a.rowKey, l = a.targetKeys, u = l === void 0 ? [] : l, d = [], f = new Array(u.length);
      return o.forEach(function(v) {
        s && (v = K(K({}, v), {
          key: s(v)
        }));
        var p = u.indexOf(v.key);
        p !== -1 ? f[p] = v : d.push(v);
      }), {
        leftDataSource: d,
        rightDataSource: f
      };
    }
  }, {
    key: "render",
    value: function() {
      var a = this;
      return /* @__PURE__ */ c.createElement(wo, {
        componentName: "Transfer",
        defaultLocale: ja.Transfer
      }, function(i) {
        return /* @__PURE__ */ c.createElement(ni, null, function(o) {
          var s = o.getPrefixCls, l = o.renderEmpty, u = o.direction;
          return /* @__PURE__ */ c.createElement(Tn.Consumer, null, function(d) {
            var f, v = d.hasFeedback, p = d.status, h = a.props, g = h.prefixCls, m = h.className, y = h.disabled, b = h.operations, x = b === void 0 ? [] : b, C = h.showSearch, E = C === void 0 ? !1 : C, S = h.footer, w = h.style, N = h.listStyle, O = N === void 0 ? {} : N, _ = h.operationStyle, $ = h.filterOption, I = h.render, F = h.children, M = h.showSelectAll, V = h.oneWay, T = h.pagination, R = h.status, k = s("transfer", g), A = a.getLocale(i, l || Ku), U = a.state, z = U.sourceSelectedKeys, B = U.targetSelectedKeys, G = ai(p, R), W = !F && T, j = a.separateDataSource(), H = j.leftDataSource, q = j.rightDataSource, Y = B.length > 0, J = z.length > 0, oe = ne(k, (f = {}, P(f, "".concat(k, "-disabled"), y), P(f, "".concat(k, "-customize-list"), !!F), P(f, "".concat(k, "-rtl"), u === "rtl"), f), ur(k, G, v), m), re = a.getTitles(A), de = a.props.selectAllLabels || [];
            return /* @__PURE__ */ c.createElement("div", {
              className: oe,
              style: w
            }, /* @__PURE__ */ c.createElement(ru, K({
              prefixCls: "".concat(k, "-list"),
              titleText: re == null ? void 0 : re[0],
              dataSource: H,
              filterOption: $,
              style: a.handleListStyle(O, "left"),
              checkedKeys: z,
              handleFilter: a.handleLeftFilter,
              handleClear: a.handleLeftClear,
              onItemSelect: a.onLeftItemSelect,
              onItemSelectAll: a.onLeftItemSelectAll,
              render: I,
              showSearch: E,
              renderList: F,
              footer: S,
              onScroll: a.handleLeftScroll,
              disabled: y,
              direction: u === "rtl" ? "right" : "left",
              showSelectAll: M,
              selectAllLabel: de[0],
              pagination: W
            }, A)), /* @__PURE__ */ c.createElement(iy, {
              className: "".concat(k, "-operation"),
              rightActive: J,
              rightArrowText: x[0],
              moveToRight: a.moveToRight,
              leftActive: Y,
              leftArrowText: x[1],
              moveToLeft: a.moveToLeft,
              style: _,
              disabled: y,
              direction: u,
              oneWay: V
            }), /* @__PURE__ */ c.createElement(ru, K({
              prefixCls: "".concat(k, "-list"),
              titleText: re == null ? void 0 : re[1],
              dataSource: q,
              filterOption: $,
              style: a.handleListStyle(O, "right"),
              checkedKeys: B,
              handleFilter: a.handleRightFilter,
              handleClear: a.handleRightClear,
              onItemSelect: a.onRightItemSelect,
              onItemSelectAll: a.onRightItemSelectAll,
              onItemRemove: a.onRightItemRemove,
              render: I,
              showSearch: E,
              renderList: F,
              footer: S,
              onScroll: a.handleRightScroll,
              disabled: y,
              direction: u === "rtl" ? "left" : "right",
              showSelectAll: M,
              selectAllLabel: de[1],
              showRemove: V,
              pagination: W
            }, A)));
          });
        });
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(a) {
      var i = a.selectedKeys, o = a.targetKeys, s = a.pagination, l = a.children;
      if (i) {
        var u = o || [];
        return {
          sourceSelectedKeys: i.filter(function(d) {
            return !u.includes(d);
          }),
          targetSelectedKeys: i.filter(function(d) {
            return u.includes(d);
          })
        };
      }
      return process.env.NODE_ENV !== "production" && Nt(!s || !l, "Transfer", "`pagination` not support customize render list."), null;
    }
  }]), n;
}(c.Component);
ts.List = ru;
ts.Operation = iy;
ts.Search = ay;
const mA = ts, hA = {
  primary: "#1A94A3",
  secondary: "#7C959A",
  tertiary: "#8490B2",
  neutral: "#8E9192",
  neutralVariant: "#899294"
}, gA = {
  light: {
    primary: "#1A94A3",
    onPrimary: "#FFFFFF",
    primaryContainer: "#97F0FF",
    onPrimaryContainer: "#001F24",
    primaryFixed: "#97F0FF",
    onPrimaryFixed: "#001F24",
    primaryFixedDim: "#4FD8EB",
    onPrimaryFixedVariant: "#004F58",
    secondary: "#006875",
    onSecondary: "#FFFFFF",
    secondaryContainer: "#9CF0FF",
    onSecondaryContainer: "#001F24",
    secondaryFixed: "#9CF0FF",
    onSecondaryFixed: "#001F24",
    secondaryFixedDim: "#50D8ED",
    onSecondaryFixedVariant: "#004F58",
    tertiary: "#375CA9",
    onTertiary: "#FFFFFF",
    tertiaryContainer: "#D9E2FF",
    onTertiaryContainer: "#001945",
    tertiaryFixed: "#D9E2FF",
    onTertiaryFixed: "#001945",
    tertiaryFixedDim: "#B0C6FF",
    onTertiaryFixedVariant: "#1A438F",
    error: "#ba1a1a",
    onError: "#ffffff",
    errorContainer: "#ffdad5",
    onErrorContainer: "#410002",
    errorFixed: "#ffdad5",
    onErrorFixed: "#410002",
    errorFixedDim: "#ffb4ab",
    onErrorFixedVariant: "#930009",
    warning: "#805600",
    onWarning: "#FFFFFF",
    warningContainer: "#FFDDB0",
    onWarningContainer: "#281800",
    warningFixed: "#FFDDB0",
    onWarningFixed: "#281800",
    warningFixedDim: "#FFBA45",
    onWarningFixedVariant: "#614000",
    outline: "#6F797B",
    background: "#FBFCFD",
    onBackground: "#191C1D",
    surface: "#F8FAFA",
    onSurface: "#191C1D",
    surfaceVariant: "#DBE4E6",
    onSurfaceVariant: "#3F484A",
    inverseSurface: "#2E3132",
    inverseOnSurface: "#EFF1F2",
    inversePrimary: "#4FD8EB",
    shadow: "#00000019",
    surfaceTint: "#006874",
    outlineVariant: "#BFC8CA",
    scrim: "#000000",
    surfaceContainerHighest: "#E1E3E4",
    surfaceContainerHigh: "#E6E8E9",
    surfaceContainer: "#ECEEEF",
    surfaceContainerLow: "#F2F4F5",
    surfaceContainerLowest: "#FFFFFF",
    surfaceBright: "#F8FAFA",
    surfaceDim: "#D8DADB"
  },
  dark: {
    primary: "#4FD8EB",
    onPrimary: "#00363D",
    primaryContainer: "#004F58",
    onPrimaryContainer: "#97F0FF",
    primaryFixed: "#97F0FF",
    onPrimaryFixed: "#001F24",
    primaryFixedDim: "#4FD8EB",
    onPrimaryFixedVariant: "#004F58",
    secondary: "#50D8ED",
    onSecondary: "#00363D",
    secondaryContainer: "#004F58",
    onSecondaryContainer: "#9CF0FF",
    secondaryFixed: "#9CF0FF",
    onSecondaryFixed: "#001F24",
    secondaryFixedDim: "#50D8ED",
    onSecondaryFixedVariant: "#004F58",
    tertiary: "#B0C6FF",
    onTertiary: "#002D6F",
    tertiaryContainer: "#1A438F",
    onTertiaryContainer: "#D9E2FF",
    tertiaryFixed: "#D9E2FF",
    onTertiaryFixed: "#001945",
    tertiaryFixedDim: "#B0C6FF",
    onTertiaryFixedVariant: "#1A438F",
    error: "#FFB4AB",
    onError: "#690005",
    errorContainer: "#93000A",
    onErrorContainer: "#FFDAD6",
    outline: "#899294",
    background: "#191C1D",
    onBackground: "#E1E3E4",
    surface: "#111415",
    onSurface: "#C4C7C8",
    surfaceVariant: "#3F484A",
    onSurfaceVariant: "#BFC8CA",
    inverseSurface: "#E1E3E4",
    inverseOnSurface: "#191C1D",
    inversePrimary: "#006874",
    shadow: "#000000",
    surfaceTint: "#4FD8EB",
    outlineVariant: "#3F484A",
    scrim: "#000000",
    surfaceContainerHighest: "#323536",
    surfaceContainerHigh: "#272A2B",
    surfaceContainer: "#1D2021",
    surfaceContainerLow: "#191C1D",
    surfaceContainerLowest: "#0B0F10",
    surfaceBright: "#363A3B",
    surfaceDim: "#111415"
  }
}, yA = {
  primary: {
    0: "#000000",
    5: "#001417",
    10: "#001F24",
    20: "#00363D",
    25: "#00424A",
    30: "#004F58",
    35: "#005B66",
    40: "#006874",
    50: "#008392",
    60: "#00A0B0",
    70: "#22BCCF",
    80: "#4FD8EB",
    90: "#97F0FF",
    95: "#D0F8FF",
    98: "#EDFCFF",
    99: "#F6FEFF",
    100: "#FFFFFF"
  },
  secondary: {
    0: "#000000",
    5: "#001417",
    10: "#001F24",
    20: "#00363D",
    25: "#00424B",
    30: "#004F58",
    35: "#005B66",
    40: "#006875",
    50: "#008393",
    60: "#009FB2",
    70: "#24BCD0",
    80: "#50D8ED",
    90: "#9CF0FF",
    95: "#D2F7FF",
    98: "#EEFCFF",
    99: "#F6FDFF",
    100: "#FFFFFF"
  },
  tertiary: {
    0: "#000000",
    5: "#000F30",
    10: "#001945",
    20: "#002D6F",
    25: "#053783",
    30: "#1A438F",
    35: "#294F9C",
    40: "#375CA9",
    50: "#5275C3",
    60: "#6D8FDF",
    70: "#87A9FC",
    80: "#B0C6FF",
    90: "#D9E2FF",
    95: "#EEF0FF",
    98: "#FAF8FF",
    99: "#FEFBFF",
    100: "#FFFFFF"
  },
  error: {
    0: "#000000",
    5: "#2D0001",
    10: "#410002",
    20: "#690005",
    25: "#7E0007",
    30: "#93000A",
    35: "#A80710",
    40: "#BA1A1A",
    50: "#DE3730",
    60: "#FF5449",
    70: "#FF897D",
    80: "#FFB4AB",
    90: "#FFDAD6",
    95: "#FFEDEA",
    98: "#FFF8F7",
    99: "#FFFBFF",
    100: "#FFFFFF"
  },
  warning: {
    0: "#000000",
    5: "#1A0F00",
    10: "#281800",
    20: "#442C00",
    25: "#523600",
    30: "#614000",
    35: "#704B00",
    40: "#805600",
    50: "#A16D00",
    60: "#C28400",
    70: "#E59D00",
    80: "#FFBA45",
    90: "#FFDDB0",
    95: "#FFEEDB",
    98: "#FFF8F3",
    99: "#FFFBFF",
    100: "#FFFFFF"
  },
  neutral: {
    0: "#000000",
    5: "#0E1112",
    10: "#191C1D",
    20: "#2E3132",
    25: "#393C3D",
    30: "#444748",
    35: "#505354",
    40: "#5C5F60",
    50: "#757778",
    60: "#8E9192",
    70: "#A9ACAC",
    80: "#C4C7C8",
    90: "#E1E3E4",
    95: "#EFF1F2",
    98: "#F8FAFA",
    99: "#FBFCFD",
    100: "#FFFFFF"
  },
  neutralVariant: {
    0: "#000000",
    5: "#091214",
    10: "#141D1F",
    20: "#293234",
    25: "#343D3F",
    30: "#3F484A",
    35: "#4B5456",
    40: "#576062",
    50: "#6F797B",
    60: "#899294",
    70: "#A3ADAF",
    80: "#BFC8CA",
    90: "#DBE4E6",
    95: "#E9F2F5",
    98: "#F2FBFD",
    99: "#F7FDFF",
    100: "#FFFFFF"
  }
}, bA = [], CA = "QSAN Color System", $t = {
  coreColors: hA,
  schemes: gA,
  palettes: yA,
  extendedColors: bA,
  name: CA
};
function xA(e) {
  let t = { padding: "10px 20px" };
  switch (e) {
    case "large":
      t.padding = "16px 32px";
      break;
    case "middle":
      t.padding = "8px 16px";
      break;
    case "small":
      t.padding = "4px 8px";
      break;
  }
  return t;
}
function SA(e) {
  const { colorScheme: t } = en(oa);
  let n;
  switch (n = {
    background: $t.palettes.primary[50],
    onHoverBackground: $t.palettes.primary[60],
    onActiveWave: $t.schemes.light.primaryFixedDim,
    text: $t.schemes.light.onPrimary,
    shadow: $t.schemes.light.shadow
  }, t && (n = {
    background: t.main || n.background,
    onHoverBackground: t.secondary || n.onHoverBackground,
    onActiveWave: t.accent || n.onActiveWave,
    shadow: t.accent || n.shadow,
    text: t.text || n.text
  }), e) {
    case "info":
      n = {
        background: $t.palettes.primary[50],
        onHoverBackground: $t.palettes.primary[60],
        onActiveWave: $t.schemes.light.primaryFixedDim,
        text: $t.schemes.light.onPrimary,
        shadow: $t.schemes.light.shadow
      };
      break;
    case "warning":
      n = {
        background: $t.palettes.warning[50],
        onHoverBackground: $t.palettes.warning[60],
        onActiveWave: $t.schemes.light.warningFixedDim,
        text: $t.schemes.light.onWarning,
        shadow: $t.schemes.light.shadow
      };
      break;
    case "error":
      n = {
        background: $t.palettes.error[50],
        onHoverBackground: $t.palettes.error[60],
        onActiveWave: $t.schemes.light.errorFixedDim,
        text: $t.schemes.light.onError,
        shadow: $t.schemes.light.shadow
      };
      break;
  }
  return n;
}
const EA = Ka(dr)((e) => {
  const { fontSize: t, fontFamily: n, size: r } = en(oa);
  let a = SA(e.qtype);
  const o = {
    width: "auto",
    height: "auto",
    padding: xA(r || e.qsize).padding,
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    boxShadow: `2px 2px 5px 0px ${a.shadow}`,
    transition: "all 0.25s ease-in-out",
    marginLeft: "10px",
    backgroundColor: `${a.background}`,
    fontSize: `${(t == null ? void 0 : t.t3) || 14}px`,
    color: `${a.text}`,
    fontFamily: n,
    "&:not(.ant-btn-loading):hover": {
      color: "white !important",
      backgroundColor: `${a.onHoverBackground}`
    },
    "& .ant-wave": {
      "--wave-color": `${a.onActiveWave} !important`
    },
    "&.ant-btn-loading": { cursor: "not-allowed" }
  }, s = xo(e.customstyle);
  return [o, s];
}), TA = be.forwardRef((e, t) => /* @__PURE__ */ Qt.jsx("div", { children: /* @__PURE__ */ Qt.jsx(
  EA,
  {
    className: e.className,
    ref: t,
    onClick: e.onClick,
    disabled: e.disabled,
    loading: e.loading,
    style: e.style,
    qtype: e.qtype,
    customstyle: e.customstyle,
    qsize: e.qsize,
    children: e.children
  }
) }));
function _A(e) {
  return /* @__PURE__ */ Qt.jsx("div", { style: { height: "100%", width: "100%" }, children: /* @__PURE__ */ Qt.jsxs("pre", { style: { fontFamily: "Arial", height: "100%", width: "100%" }, children: [
    /* @__PURE__ */ Qt.jsx("div", { className: "MonoFont", children: `( ${e.content || "hello"} )` }),
    /* @__PURE__ */ Qt.jsx("div", { className: "MonoFont", children: "     \\" }),
    /* @__PURE__ */ Qt.jsx("div", { className: "MonoFont", children: "      ^__^" }),
    /* @__PURE__ */ Qt.jsx("div", { className: "MonoFont", children: "      (oo)\\________" }),
    /* @__PURE__ */ Qt.jsx("div", { className: "MonoFont", children: "      (__)\\         )^" }),
    /* @__PURE__ */ Qt.jsx("div", { className: "MonoFont", children: "          ||------w|" }),
    /* @__PURE__ */ Qt.jsx("div", { className: "MonoFont", children: "          ||      ||" })
  ] }) });
}
const IA = () => /* @__PURE__ */ Qt.jsx(mA, {}), wA = Ka(z2)((e) => {
  const { colorScheme: t } = en(oa), n = {
    "&.ant-switch-checked": {
      backgroundColor: `${(t == null ? void 0 : t.accent) || "pink"} !important`
    },
    "&.ant-switch-checked .ant-switch-handle::before": {
      backgroundColor: `${(t == null ? void 0 : t.main) || "#fff"}!important`
    },
    "&.ant-switch-checked .ant-switch-loading-icon": {
      color: `${(t == null ? void 0 : t.text) || "red"}!important`
    },
    "& .ant-wave": {
      "--wave-color": `${(t == null ? void 0 : t.accent) || "red"} !important`
    }
  }, r = xo(e.customStyle);
  return [n, r];
}), FA = (e) => /* @__PURE__ */ Qt.jsx(wA, { ...e });
function NA(e) {
  const { colorScheme: t } = en(oa);
  let n = {
    headerColor: $t.schemes.light.primary,
    rowColor: $t.schemes.light.onPrimaryContainer,
    hoverRowColor: $t.schemes.light.primaryContainer,
    textColor: $t.schemes.light.onPrimary
  };
  return t && (n = {
    headerColor: t.secondary || n.headerColor,
    rowColor: t.main || n.rowColor,
    hoverRowColor: t.accent || n.hoverRowColor,
    textColor: t.text || n.textColor
  }), e && (n = {
    headerColor: e.headerColor || n.headerColor,
    rowColor: e.rowColor || n.rowColor,
    hoverRowColor: e.hoverRowColor || n.hoverRowColor,
    textColor: e.textColor || n.textColor
  }), n;
}
const OA = Ka(rA)((e) => {
  const { fontSize: t, fontFamily: n } = en(oa);
  let r = NA(e.tableColor);
  const a = {
    color: "white",
    transition: "all 0.25s ease-in-out ",
    borderRadius: "8px",
    "& .ant-table-cell": {
      fontFamily: n || "",
      color: `${r.textColor}`
    },
    "& .ant-table-container": {
      backgroundColor: `${r.rowColor}`
    },
    "& .ant-table-cell-row-hover": {
      backgroundColor: `${r.hoverRowColor} !important`
    },
    "& .ant-table-thead .ant-table-cell": {
      backgroundColor: `${r.headerColor}`
    },
    "& .ant-table-thead .ant-table-cell::before": {
      backgroundColor: "black"
    },
    "&&.ant-spin &&.ant-spin-dot-item": { color: "red" },
    "& th": { fontSize: `${(t == null ? void 0 : t.t3) || 18}px !important` },
    "& td": { fontSize: `${(t == null ? void 0 : t.t4) || 18}px !important` }
  }, i = xo(e.customStyle);
  return [a, i];
}), MA = (e) => /* @__PURE__ */ Qt.jsx("div", { style: { width: "1000px" }, children: /* @__PURE__ */ Qt.jsx(
  OA,
  {
    tableColor: e.tableColor,
    pagination: !1,
    ...e
  }
) });
export {
  TA as TButton,
  _A as TCowsay,
  FA as TSwitch,
  MA as TTable,
  kA as TThemeProvider,
  IA as TTransfer
};
