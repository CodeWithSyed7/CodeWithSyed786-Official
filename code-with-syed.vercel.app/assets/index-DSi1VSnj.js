(function() {
    const l = document.createElement("link").relList;
    if (l && l.supports && l.supports("modulepreload")) return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]')) r(c);
    new MutationObserver(c => {
        for (const h of c)
            if (h.type === "childList")
                for (const f of h.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && r(f)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function o(c) {
        const h = {};
        return c.integrity && (h.integrity = c.integrity), c.referrerPolicy && (h.referrerPolicy = c.referrerPolicy), c.crossOrigin === "use-credentials" ? h.credentials = "include" : c.crossOrigin === "anonymous" ? h.credentials = "omit" : h.credentials = "same-origin", h
    }

    function r(c) {
        if (c.ep) return;
        c.ep = !0;
        const h = o(c);
        fetch(c.href, h)
    }
})();

function ty(a) {
    return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a
}
var Hu = {
        exports: {}
    },
    dl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xm;

function gb() {
    if (xm) return dl;
    xm = 1;
    var a = Symbol.for("react.transitional.element"),
        l = Symbol.for("react.fragment");

    function o(r, c, h) {
        var f = null;
        if (h !== void 0 && (f = "" + h), c.key !== void 0 && (f = "" + c.key), "key" in c) {
            h = {};
            for (var p in c) p !== "key" && (h[p] = c[p])
        } else h = c;
        return c = h.ref, {
            $$typeof: a,
            type: r,
            key: f,
            ref: c !== void 0 ? c : null,
            props: h
        }
    }
    return dl.Fragment = l, dl.jsx = o, dl.jsxs = o, dl
}
var Sm;

function vb() {
    return Sm || (Sm = 1, Hu.exports = gb()), Hu.exports
}
var m = vb(),
    qu = {
        exports: {}
    },
    it = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tm;

function bb() {
    if (Tm) return it;
    Tm = 1;
    var a = Symbol.for("react.transitional.element"),
        l = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        r = Symbol.for("react.strict_mode"),
        c = Symbol.for("react.profiler"),
        h = Symbol.for("react.consumer"),
        f = Symbol.for("react.context"),
        p = Symbol.for("react.forward_ref"),
        g = Symbol.for("react.suspense"),
        y = Symbol.for("react.memo"),
        b = Symbol.for("react.lazy"),
        x = Symbol.for("react.activity"),
        S = Symbol.iterator;

    function M(w) {
        return w === null || typeof w != "object" ? null : (w = S && w[S] || w["@@iterator"], typeof w == "function" ? w : null)
    }
    var k = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        U = Object.assign,
        H = {};

    function L(w, B, K) {
        this.props = w, this.context = B, this.refs = H, this.updater = K || k
    }
    L.prototype.isReactComponent = {}, L.prototype.setState = function(w, B) {
        if (typeof w != "object" && typeof w != "function" && w != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, w, B, "setState")
    }, L.prototype.forceUpdate = function(w) {
        this.updater.enqueueForceUpdate(this, w, "forceUpdate")
    };

    function Z() {}
    Z.prototype = L.prototype;

    function O(w, B, K) {
        this.props = w, this.context = B, this.refs = H, this.updater = K || k
    }
    var G = O.prototype = new Z;
    G.constructor = O, U(G, L.prototype), G.isPureReactComponent = !0;
    var Q = Array.isArray;

    function $() {}
    var J = {
            H: null,
            A: null,
            T: null,
            S: null
        },
        q = Object.prototype.hasOwnProperty;

    function nt(w, B, K) {
        var P = K.ref;
        return {
            $$typeof: a,
            type: w,
            key: B,
            ref: P !== void 0 ? P : null,
            props: K
        }
    }

    function At(w, B) {
        return nt(w.type, B, w.props)
    }

    function Bt(w) {
        return typeof w == "object" && w !== null && w.$$typeof === a
    }

    function qt(w) {
        var B = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + w.replace(/[=:]/g, function(K) {
            return B[K]
        })
    }
    var He = /\/+/g;

    function Ee(w, B) {
        return typeof w == "object" && w !== null && w.key != null ? qt("" + w.key) : B.toString(36)
    }

    function ue(w) {
        switch (w.status) {
            case "fulfilled":
                return w.value;
            case "rejected":
                throw w.reason;
            default:
                switch (typeof w.status == "string" ? w.then($, $) : (w.status = "pending", w.then(function(B) {
                    w.status === "pending" && (w.status = "fulfilled", w.value = B)
                }, function(B) {
                    w.status === "pending" && (w.status = "rejected", w.reason = B)
                })), w.status) {
                    case "fulfilled":
                        return w.value;
                    case "rejected":
                        throw w.reason
                }
        }
        throw w
    }

    function z(w, B, K, P, lt) {
        var ut = typeof w;
        (ut === "undefined" || ut === "boolean") && (w = null);
        var xt = !1;
        if (w === null) xt = !0;
        else switch (ut) {
            case "bigint":
            case "string":
            case "number":
                xt = !0;
                break;
            case "object":
                switch (w.$$typeof) {
                    case a:
                    case l:
                        xt = !0;
                        break;
                    case b:
                        return xt = w._init, z(xt(w._payload), B, K, P, lt)
                }
        }
        if (xt) return lt = lt(w), xt = P === "" ? "." + Ee(w, 0) : P, Q(lt) ? (K = "", xt != null && (K = xt.replace(He, "$&/") + "/"), z(lt, B, K, "", function(bi) {
            return bi
        })) : lt != null && (Bt(lt) && (lt = At(lt, K + (lt.key == null || w && w.key === lt.key ? "" : ("" + lt.key).replace(He, "$&/") + "/") + xt)), B.push(lt)), 1;
        xt = 0;
        var le = P === "" ? "." : P + ":";
        if (Q(w))
            for (var Ut = 0; Ut < w.length; Ut++) P = w[Ut], ut = le + Ee(P, Ut), xt += z(P, B, K, ut, lt);
        else if (Ut = M(w), typeof Ut == "function")
            for (w = Ut.call(w), Ut = 0; !(P = w.next()).done;) P = P.value, ut = le + Ee(P, Ut++), xt += z(P, B, K, ut, lt);
        else if (ut === "object") {
            if (typeof w.then == "function") return z(ue(w), B, K, P, lt);
            throw B = String(w), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.")
        }
        return xt
    }

    function X(w, B, K) {
        if (w == null) return w;
        var P = [],
            lt = 0;
        return z(w, P, "", "", function(ut) {
            return B.call(K, ut, lt++)
        }), P
    }

    function I(w) {
        if (w._status === -1) {
            var B = w._result;
            B = B(), B.then(function(K) {
                (w._status === 0 || w._status === -1) && (w._status = 1, w._result = K)
            }, function(K) {
                (w._status === 0 || w._status === -1) && (w._status = 2, w._result = K)
            }), w._status === -1 && (w._status = 0, w._result = B)
        }
        if (w._status === 1) return w._result.default;
        throw w._result
    }
    var dt = typeof reportError == "function" ? reportError : function(w) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var B = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof w == "object" && w !== null && typeof w.message == "string" ? String(w.message) : String(w),
                    error: w
                });
                if (!window.dispatchEvent(B)) return
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", w);
                return
            }
            console.error(w)
        },
        yt = {
            map: X,
            forEach: function(w, B, K) {
                X(w, function() {
                    B.apply(this, arguments)
                }, K)
            },
            count: function(w) {
                var B = 0;
                return X(w, function() {
                    B++
                }), B
            },
            toArray: function(w) {
                return X(w, function(B) {
                    return B
                }) || []
            },
            only: function(w) {
                if (!Bt(w)) throw Error("React.Children.only expected to receive a single React element child.");
                return w
            }
        };
    return it.Activity = x, it.Children = yt, it.Component = L, it.Fragment = o, it.Profiler = c, it.PureComponent = O, it.StrictMode = r, it.Suspense = g, it.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J, it.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(w) {
            return J.H.useMemoCache(w)
        }
    }, it.cache = function(w) {
        return function() {
            return w.apply(null, arguments)
        }
    }, it.cacheSignal = function() {
        return null
    }, it.cloneElement = function(w, B, K) {
        if (w == null) throw Error("The argument must be a React element, but you passed " + w + ".");
        var P = U({}, w.props),
            lt = w.key;
        if (B != null)
            for (ut in B.key !== void 0 && (lt = "" + B.key), B) !q.call(B, ut) || ut === "key" || ut === "__self" || ut === "__source" || ut === "ref" && B.ref === void 0 || (P[ut] = B[ut]);
        var ut = arguments.length - 2;
        if (ut === 1) P.children = K;
        else if (1 < ut) {
            for (var xt = Array(ut), le = 0; le < ut; le++) xt[le] = arguments[le + 2];
            P.children = xt
        }
        return nt(w.type, lt, P)
    }, it.createContext = function(w) {
        return w = {
            $$typeof: f,
            _currentValue: w,
            _currentValue2: w,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, w.Provider = w, w.Consumer = {
            $$typeof: h,
            _context: w
        }, w
    }, it.createElement = function(w, B, K) {
        var P, lt = {},
            ut = null;
        if (B != null)
            for (P in B.key !== void 0 && (ut = "" + B.key), B) q.call(B, P) && P !== "key" && P !== "__self" && P !== "__source" && (lt[P] = B[P]);
        var xt = arguments.length - 2;
        if (xt === 1) lt.children = K;
        else if (1 < xt) {
            for (var le = Array(xt), Ut = 0; Ut < xt; Ut++) le[Ut] = arguments[Ut + 2];
            lt.children = le
        }
        if (w && w.defaultProps)
            for (P in xt = w.defaultProps, xt) lt[P] === void 0 && (lt[P] = xt[P]);
        return nt(w, ut, lt)
    }, it.createRef = function() {
        return {
            current: null
        }
    }, it.forwardRef = function(w) {
        return {
            $$typeof: p,
            render: w
        }
    }, it.isValidElement = Bt, it.lazy = function(w) {
        return {
            $$typeof: b,
            _payload: {
                _status: -1,
                _result: w
            },
            _init: I
        }
    }, it.memo = function(w, B) {
        return {
            $$typeof: y,
            type: w,
            compare: B === void 0 ? null : B
        }
    }, it.startTransition = function(w) {
        var B = J.T,
            K = {};
        J.T = K;
        try {
            var P = w(),
                lt = J.S;
            lt !== null && lt(K, P), typeof P == "object" && P !== null && typeof P.then == "function" && P.then($, dt)
        } catch (ut) {
            dt(ut)
        } finally {
            B !== null && K.types !== null && (B.types = K.types), J.T = B
        }
    }, it.unstable_useCacheRefresh = function() {
        return J.H.useCacheRefresh()
    }, it.use = function(w) {
        return J.H.use(w)
    }, it.useActionState = function(w, B, K) {
        return J.H.useActionState(w, B, K)
    }, it.useCallback = function(w, B) {
        return J.H.useCallback(w, B)
    }, it.useContext = function(w) {
        return J.H.useContext(w)
    }, it.useDebugValue = function() {}, it.useDeferredValue = function(w, B) {
        return J.H.useDeferredValue(w, B)
    }, it.useEffect = function(w, B) {
        return J.H.useEffect(w, B)
    }, it.useEffectEvent = function(w) {
        return J.H.useEffectEvent(w)
    }, it.useId = function() {
        return J.H.useId()
    }, it.useImperativeHandle = function(w, B, K) {
        return J.H.useImperativeHandle(w, B, K)
    }, it.useInsertionEffect = function(w, B) {
        return J.H.useInsertionEffect(w, B)
    }, it.useLayoutEffect = function(w, B) {
        return J.H.useLayoutEffect(w, B)
    }, it.useMemo = function(w, B) {
        return J.H.useMemo(w, B)
    }, it.useOptimistic = function(w, B) {
        return J.H.useOptimistic(w, B)
    }, it.useReducer = function(w, B, K) {
        return J.H.useReducer(w, B, K)
    }, it.useRef = function(w) {
        return J.H.useRef(w)
    }, it.useState = function(w) {
        return J.H.useState(w)
    }, it.useSyncExternalStore = function(w, B, K) {
        return J.H.useSyncExternalStore(w, B, K)
    }, it.useTransition = function() {
        return J.H.useTransition()
    }, it.version = "19.2.4", it
}
var Am;

function Bc() {
    return Am || (Am = 1, qu.exports = bb()), qu.exports
}
var Y = Bc();
const yo = ty(Y);
var Yu = {
        exports: {}
    },
    hl = {},
    Gu = {
        exports: {}
    },
    Xu = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wm;

function xb() {
    return wm || (wm = 1, (function(a) {
        function l(z, X) {
            var I = z.length;
            z.push(X);
            t: for (; 0 < I;) {
                var dt = I - 1 >>> 1,
                    yt = z[dt];
                if (0 < c(yt, X)) z[dt] = X, z[I] = yt, I = dt;
                else break t
            }
        }

        function o(z) {
            return z.length === 0 ? null : z[0]
        }

        function r(z) {
            if (z.length === 0) return null;
            var X = z[0],
                I = z.pop();
            if (I !== X) {
                z[0] = I;
                t: for (var dt = 0, yt = z.length, w = yt >>> 1; dt < w;) {
                    var B = 2 * (dt + 1) - 1,
                        K = z[B],
                        P = B + 1,
                        lt = z[P];
                    if (0 > c(K, I)) P < yt && 0 > c(lt, K) ? (z[dt] = lt, z[P] = I, dt = P) : (z[dt] = K, z[B] = I, dt = B);
                    else if (P < yt && 0 > c(lt, I)) z[dt] = lt, z[P] = I, dt = P;
                    else break t
                }
            }
            return X
        }

        function c(z, X) {
            var I = z.sortIndex - X.sortIndex;
            return I !== 0 ? I : z.id - X.id
        }
        if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var h = performance;
            a.unstable_now = function() {
                return h.now()
            }
        } else {
            var f = Date,
                p = f.now();
            a.unstable_now = function() {
                return f.now() - p
            }
        }
        var g = [],
            y = [],
            b = 1,
            x = null,
            S = 3,
            M = !1,
            k = !1,
            U = !1,
            H = !1,
            L = typeof setTimeout == "function" ? setTimeout : null,
            Z = typeof clearTimeout == "function" ? clearTimeout : null,
            O = typeof setImmediate < "u" ? setImmediate : null;

        function G(z) {
            for (var X = o(y); X !== null;) {
                if (X.callback === null) r(y);
                else if (X.startTime <= z) r(y), X.sortIndex = X.expirationTime, l(g, X);
                else break;
                X = o(y)
            }
        }

        function Q(z) {
            if (U = !1, G(z), !k)
                if (o(g) !== null) k = !0, $ || ($ = !0, qt());
                else {
                    var X = o(y);
                    X !== null && ue(Q, X.startTime - z)
                }
        }
        var $ = !1,
            J = -1,
            q = 5,
            nt = -1;

        function At() {
            return H ? !0 : !(a.unstable_now() - nt < q)
        }

        function Bt() {
            if (H = !1, $) {
                var z = a.unstable_now();
                nt = z;
                var X = !0;
                try {
                    t: {
                        k = !1,
                        U && (U = !1, Z(J), J = -1),
                        M = !0;
                        var I = S;
                        try {
                            e: {
                                for (G(z), x = o(g); x !== null && !(x.expirationTime > z && At());) {
                                    var dt = x.callback;
                                    if (typeof dt == "function") {
                                        x.callback = null, S = x.priorityLevel;
                                        var yt = dt(x.expirationTime <= z);
                                        if (z = a.unstable_now(), typeof yt == "function") {
                                            x.callback = yt, G(z), X = !0;
                                            break e
                                        }
                                        x === o(g) && r(g), G(z)
                                    } else r(g);
                                    x = o(g)
                                }
                                if (x !== null) X = !0;
                                else {
                                    var w = o(y);
                                    w !== null && ue(Q, w.startTime - z), X = !1
                                }
                            }
                            break t
                        }
                        finally {
                            x = null, S = I, M = !1
                        }
                        X = void 0
                    }
                }
                finally {
                    X ? qt() : $ = !1
                }
            }
        }
        var qt;
        if (typeof O == "function") qt = function() {
            O(Bt)
        };
        else if (typeof MessageChannel < "u") {
            var He = new MessageChannel,
                Ee = He.port2;
            He.port1.onmessage = Bt, qt = function() {
                Ee.postMessage(null)
            }
        } else qt = function() {
            L(Bt, 0)
        };

        function ue(z, X) {
            J = L(function() {
                z(a.unstable_now())
            }, X)
        }
        a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(z) {
            z.callback = null
        }, a.unstable_forceFrameRate = function(z) {
            0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : q = 0 < z ? Math.floor(1e3 / z) : 5
        }, a.unstable_getCurrentPriorityLevel = function() {
            return S
        }, a.unstable_next = function(z) {
            switch (S) {
                case 1:
                case 2:
                case 3:
                    var X = 3;
                    break;
                default:
                    X = S
            }
            var I = S;
            S = X;
            try {
                return z()
            } finally {
                S = I
            }
        }, a.unstable_requestPaint = function() {
            H = !0
        }, a.unstable_runWithPriority = function(z, X) {
            switch (z) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    z = 3
            }
            var I = S;
            S = z;
            try {
                return X()
            } finally {
                S = I
            }
        }, a.unstable_scheduleCallback = function(z, X, I) {
            var dt = a.unstable_now();
            switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? dt + I : dt) : I = dt, z) {
                case 1:
                    var yt = -1;
                    break;
                case 2:
                    yt = 250;
                    break;
                case 5:
                    yt = 1073741823;
                    break;
                case 4:
                    yt = 1e4;
                    break;
                default:
                    yt = 5e3
            }
            return yt = I + yt, z = {
                id: b++,
                callback: X,
                priorityLevel: z,
                startTime: I,
                expirationTime: yt,
                sortIndex: -1
            }, I > dt ? (z.sortIndex = I, l(y, z), o(g) === null && z === o(y) && (U ? (Z(J), J = -1) : U = !0, ue(Q, I - dt))) : (z.sortIndex = yt, l(g, z), k || M || (k = !0, $ || ($ = !0, qt()))), z
        }, a.unstable_shouldYield = At, a.unstable_wrapCallback = function(z) {
            var X = S;
            return function() {
                var I = S;
                S = X;
                try {
                    return z.apply(this, arguments)
                } finally {
                    S = I
                }
            }
        }
    })(Xu)), Xu
}
var jm;

function Sb() {
    return jm || (jm = 1, Gu.exports = xb()), Gu.exports
}
var Qu = {
        exports: {}
    },
    ie = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mm;

function Tb() {
    if (Mm) return ie;
    Mm = 1;
    var a = Bc();

    function l(g) {
        var y = "https://react.dev/errors/" + g;
        if (1 < arguments.length) {
            y += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var b = 2; b < arguments.length; b++) y += "&args[]=" + encodeURIComponent(arguments[b])
        }
        return "Minified React error #" + g + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function o() {}
    var r = {
            d: {
                f: o,
                r: function() {
                    throw Error(l(522))
                },
                D: o,
                C: o,
                L: o,
                m: o,
                X: o,
                S: o,
                M: o
            },
            p: 0,
            findDOMNode: null
        },
        c = Symbol.for("react.portal");

    function h(g, y, b) {
        var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: c,
            key: x == null ? null : "" + x,
            children: g,
            containerInfo: y,
            implementation: b
        }
    }
    var f = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function p(g, y) {
        if (g === "font") return "";
        if (typeof y == "string") return y === "use-credentials" ? y : ""
    }
    return ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, ie.createPortal = function(g, y) {
        var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11) throw Error(l(299));
        return h(g, y, null, b)
    }, ie.flushSync = function(g) {
        var y = f.T,
            b = r.p;
        try {
            if (f.T = null, r.p = 2, g) return g()
        } finally {
            f.T = y, r.p = b, r.d.f()
        }
    }, ie.preconnect = function(g, y) {
        typeof g == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, r.d.C(g, y))
    }, ie.prefetchDNS = function(g) {
        typeof g == "string" && r.d.D(g)
    }, ie.preinit = function(g, y) {
        if (typeof g == "string" && y && typeof y.as == "string") {
            var b = y.as,
                x = p(b, y.crossOrigin),
                S = typeof y.integrity == "string" ? y.integrity : void 0,
                M = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
            b === "style" ? r.d.S(g, typeof y.precedence == "string" ? y.precedence : void 0, {
                crossOrigin: x,
                integrity: S,
                fetchPriority: M
            }) : b === "script" && r.d.X(g, {
                crossOrigin: x,
                integrity: S,
                fetchPriority: M,
                nonce: typeof y.nonce == "string" ? y.nonce : void 0
            })
        }
    }, ie.preinitModule = function(g, y) {
        if (typeof g == "string")
            if (typeof y == "object" && y !== null) {
                if (y.as == null || y.as === "script") {
                    var b = p(y.as, y.crossOrigin);
                    r.d.M(g, {
                        crossOrigin: b,
                        integrity: typeof y.integrity == "string" ? y.integrity : void 0,
                        nonce: typeof y.nonce == "string" ? y.nonce : void 0
                    })
                }
            } else y == null && r.d.M(g)
    }, ie.preload = function(g, y) {
        if (typeof g == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
            var b = y.as,
                x = p(b, y.crossOrigin);
            r.d.L(g, b, {
                crossOrigin: x,
                integrity: typeof y.integrity == "string" ? y.integrity : void 0,
                nonce: typeof y.nonce == "string" ? y.nonce : void 0,
                type: typeof y.type == "string" ? y.type : void 0,
                fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
                referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
                imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
                imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
                media: typeof y.media == "string" ? y.media : void 0
            })
        }
    }, ie.preloadModule = function(g, y) {
        if (typeof g == "string")
            if (y) {
                var b = p(y.as, y.crossOrigin);
                r.d.m(g, {
                    as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
                    crossOrigin: b,
                    integrity: typeof y.integrity == "string" ? y.integrity : void 0
                })
            } else r.d.m(g)
    }, ie.requestFormReset = function(g) {
        r.d.r(g)
    }, ie.unstable_batchedUpdates = function(g, y) {
        return g(y)
    }, ie.useFormState = function(g, y, b) {
        return f.H.useFormState(g, y, b)
    }, ie.useFormStatus = function() {
        return f.H.useHostTransitionStatus()
    }, ie.version = "19.2.4", ie
}
var Em;

function Ab() {
    if (Em) return Qu.exports;
    Em = 1;

    function a() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)
        } catch (l) {
            console.error(l)
        }
    }
    return a(), Qu.exports = Tb(), Qu.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nm;

function wb() {
    if (Nm) return hl;
    Nm = 1;
    var a = Sb(),
        l = Bc(),
        o = Ab();

    function r(t) {
        var e = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n])
        }
        return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function c(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }

    function h(t) {
        var e = t,
            n = t;
        if (t.alternate)
            for (; e.return;) e = e.return;
        else {
            t = e;
            do e = t, (e.flags & 4098) !== 0 && (n = e.return), t = e.return; while (t)
        }
        return e.tag === 3 ? n : null
    }

    function f(t) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
        }
        return null
    }

    function p(t) {
        if (t.tag === 31) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
        }
        return null
    }

    function g(t) {
        if (h(t) !== t) throw Error(r(188))
    }

    function y(t) {
        var e = t.alternate;
        if (!e) {
            if (e = h(t), e === null) throw Error(r(188));
            return e !== t ? null : t
        }
        for (var n = t, i = e;;) {
            var s = n.return;
            if (s === null) break;
            var u = s.alternate;
            if (u === null) {
                if (i = s.return, i !== null) {
                    n = i;
                    continue
                }
                break
            }
            if (s.child === u.child) {
                for (u = s.child; u;) {
                    if (u === n) return g(s), t;
                    if (u === i) return g(s), e;
                    u = u.sibling
                }
                throw Error(r(188))
            }
            if (n.return !== i.return) n = s, i = u;
            else {
                for (var d = !1, v = s.child; v;) {
                    if (v === n) {
                        d = !0, n = s, i = u;
                        break
                    }
                    if (v === i) {
                        d = !0, i = s, n = u;
                        break
                    }
                    v = v.sibling
                }
                if (!d) {
                    for (v = u.child; v;) {
                        if (v === n) {
                            d = !0, n = u, i = s;
                            break
                        }
                        if (v === i) {
                            d = !0, i = u, n = s;
                            break
                        }
                        v = v.sibling
                    }
                    if (!d) throw Error(r(189))
                }
            }
            if (n.alternate !== i) throw Error(r(190))
        }
        if (n.tag !== 3) throw Error(r(188));
        return n.stateNode.current === n ? t : e
    }

    function b(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6) return t;
        for (t = t.child; t !== null;) {
            if (e = b(t), e !== null) return e;
            t = t.sibling
        }
        return null
    }
    var x = Object.assign,
        S = Symbol.for("react.element"),
        M = Symbol.for("react.transitional.element"),
        k = Symbol.for("react.portal"),
        U = Symbol.for("react.fragment"),
        H = Symbol.for("react.strict_mode"),
        L = Symbol.for("react.profiler"),
        Z = Symbol.for("react.consumer"),
        O = Symbol.for("react.context"),
        G = Symbol.for("react.forward_ref"),
        Q = Symbol.for("react.suspense"),
        $ = Symbol.for("react.suspense_list"),
        J = Symbol.for("react.memo"),
        q = Symbol.for("react.lazy"),
        nt = Symbol.for("react.activity"),
        At = Symbol.for("react.memo_cache_sentinel"),
        Bt = Symbol.iterator;

    function qt(t) {
        return t === null || typeof t != "object" ? null : (t = Bt && t[Bt] || t["@@iterator"], typeof t == "function" ? t : null)
    }
    var He = Symbol.for("react.client.reference");

    function Ee(t) {
        if (t == null) return null;
        if (typeof t == "function") return t.$$typeof === He ? null : t.displayName || t.name || null;
        if (typeof t == "string") return t;
        switch (t) {
            case U:
                return "Fragment";
            case L:
                return "Profiler";
            case H:
                return "StrictMode";
            case Q:
                return "Suspense";
            case $:
                return "SuspenseList";
            case nt:
                return "Activity"
        }
        if (typeof t == "object") switch (t.$$typeof) {
            case k:
                return "Portal";
            case O:
                return t.displayName || "Context";
            case Z:
                return (t._context.displayName || "Context") + ".Consumer";
            case G:
                var e = t.render;
                return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
            case J:
                return e = t.displayName || null, e !== null ? e : Ee(t.type) || "Memo";
            case q:
                e = t._payload, t = t._init;
                try {
                    return Ee(t(e))
                } catch {}
        }
        return null
    }
    var ue = Array.isArray,
        z = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        X = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        I = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        dt = [],
        yt = -1;

    function w(t) {
        return {
            current: t
        }
    }

    function B(t) {
        0 > yt || (t.current = dt[yt], dt[yt] = null, yt--)
    }

    function K(t, e) {
        yt++, dt[yt] = t.current, t.current = e
    }
    var P = w(null),
        lt = w(null),
        ut = w(null),
        xt = w(null);

    function le(t, e) {
        switch (K(ut, e), K(lt, t), K(P, null), e.nodeType) {
            case 9:
            case 11:
                t = (t = e.documentElement) && (t = t.namespaceURI) ? G0(t) : 0;
                break;
            default:
                if (t = e.tagName, e = e.namespaceURI) e = G0(e), t = X0(e, t);
                else switch (t) {
                    case "svg":
                        t = 1;
                        break;
                    case "math":
                        t = 2;
                        break;
                    default:
                        t = 0
                }
        }
        B(P), K(P, t)
    }

    function Ut() {
        B(P), B(lt), B(ut)
    }

    function bi(t) {
        t.memoizedState !== null && K(xt, t);
        var e = P.current,
            n = X0(e, t.type);
        e !== n && (K(lt, t), K(P, n))
    }

    function Dl(t) {
        lt.current === t && (B(P), B(lt)), xt.current === t && (B(xt), rl._currentValue = I)
    }
    var To, bf;

    function Pn(t) {
        if (To === void 0) try {
            throw Error()
        } catch (n) {
            var e = n.stack.trim().match(/\n( *(at )?)/);
            To = e && e[1] || "", bf = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + To + t + bf
    }
    var Ao = !1;

    function wo(t, e) {
        if (!t || Ao) return "";
        Ao = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var i = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (e) {
                            var V = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(V.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(V, [])
                                } catch (_) {
                                    var C = _
                                }
                                Reflect.construct(t, [], V)
                            } else {
                                try {
                                    V.call()
                                } catch (_) {
                                    C = _
                                }
                                t.call(V.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (_) {
                                C = _
                            }(V = t()) && typeof V.catch == "function" && V.catch(function() {})
                        }
                    } catch (_) {
                        if (_ && C && typeof _.stack == "string") return [_.stack, C.stack]
                    }
                    return [null, null]
                }
            };
            i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var s = Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot, "name");
            s && s.configurable && Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var u = i.DetermineComponentFrameRoot(),
                d = u[0],
                v = u[1];
            if (d && v) {
                var T = d.split(`
`),
                    N = v.split(`
`);
                for (s = i = 0; i < T.length && !T[i].includes("DetermineComponentFrameRoot");) i++;
                for (; s < N.length && !N[s].includes("DetermineComponentFrameRoot");) s++;
                if (i === T.length || s === N.length)
                    for (i = T.length - 1, s = N.length - 1; 1 <= i && 0 <= s && T[i] !== N[s];) s--;
                for (; 1 <= i && 0 <= s; i--, s--)
                    if (T[i] !== N[s]) {
                        if (i !== 1 || s !== 1)
                            do
                                if (i--, s--, 0 > s || T[i] !== N[s]) {
                                    var D = `
` + T[i].replace(" at new ", " at ");
                                    return t.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", t.displayName)), D
                                }
                        while (1 <= i && 0 <= s);
                        break
                    }
            }
        } finally {
            Ao = !1, Error.prepareStackTrace = n
        }
        return (n = t ? t.displayName || t.name : "") ? Pn(n) : ""
    }

    function Jg(t, e) {
        switch (t.tag) {
            case 26:
            case 27:
            case 5:
                return Pn(t.type);
            case 16:
                return Pn("Lazy");
            case 13:
                return t.child !== e && e !== null ? Pn("Suspense Fallback") : Pn("Suspense");
            case 19:
                return Pn("SuspenseList");
            case 0:
            case 15:
                return wo(t.type, !1);
            case 11:
                return wo(t.type.render, !1);
            case 1:
                return wo(t.type, !0);
            case 31:
                return Pn("Activity");
            default:
                return ""
        }
    }

    function xf(t) {
        try {
            var e = "",
                n = null;
            do e += Jg(t, n), n = t, t = t.return; while (t);
            return e
        } catch (i) {
            return `
Error generating stack: ` + i.message + `
` + i.stack
        }
    }
    var jo = Object.prototype.hasOwnProperty,
        Mo = a.unstable_scheduleCallback,
        Eo = a.unstable_cancelCallback,
        Fg = a.unstable_shouldYield,
        Wg = a.unstable_requestPaint,
        ge = a.unstable_now,
        $g = a.unstable_getCurrentPriorityLevel,
        Sf = a.unstable_ImmediatePriority,
        Tf = a.unstable_UserBlockingPriority,
        zl = a.unstable_NormalPriority,
        Pg = a.unstable_LowPriority,
        Af = a.unstable_IdlePriority,
        Ig = a.log,
        t1 = a.unstable_setDisableYieldValue,
        xi = null,
        ve = null;

    function Sn(t) {
        if (typeof Ig == "function" && t1(t), ve && typeof ve.setStrictMode == "function") try {
            ve.setStrictMode(xi, t)
        } catch {}
    }
    var be = Math.clz32 ? Math.clz32 : a1,
        e1 = Math.log,
        n1 = Math.LN2;

    function a1(t) {
        return t >>>= 0, t === 0 ? 32 : 31 - (e1(t) / n1 | 0) | 0
    }
    var Rl = 256,
        Ol = 262144,
        Vl = 4194304;

    function In(t) {
        var e = t & 42;
        if (e !== 0) return e;
        switch (t & -t) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
                return t & 261888;
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t & 3932160;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return t & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return t
        }
    }

    function Bl(t, e, n) {
        var i = t.pendingLanes;
        if (i === 0) return 0;
        var s = 0,
            u = t.suspendedLanes,
            d = t.pingedLanes;
        t = t.warmLanes;
        var v = i & 134217727;
        return v !== 0 ? (i = v & ~u, i !== 0 ? s = In(i) : (d &= v, d !== 0 ? s = In(d) : n || (n = v & ~t, n !== 0 && (s = In(n))))) : (v = i & ~u, v !== 0 ? s = In(v) : d !== 0 ? s = In(d) : n || (n = i & ~t, n !== 0 && (s = In(n)))), s === 0 ? 0 : e !== 0 && e !== s && (e & u) === 0 && (u = s & -s, n = e & -e, u >= n || u === 32 && (n & 4194048) !== 0) ? e : s
    }

    function Si(t, e) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
    }

    function i1(t, e) {
        switch (t) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return e + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function wf() {
        var t = Vl;
        return Vl <<= 1, (Vl & 62914560) === 0 && (Vl = 4194304), t
    }

    function No(t) {
        for (var e = [], n = 0; 31 > n; n++) e.push(t);
        return e
    }

    function Ti(t, e) {
        t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0)
    }

    function l1(t, e, n, i, s, u) {
        var d = t.pendingLanes;
        t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
        var v = t.entanglements,
            T = t.expirationTimes,
            N = t.hiddenUpdates;
        for (n = d & ~n; 0 < n;) {
            var D = 31 - be(n),
                V = 1 << D;
            v[D] = 0, T[D] = -1;
            var C = N[D];
            if (C !== null)
                for (N[D] = null, D = 0; D < C.length; D++) {
                    var _ = C[D];
                    _ !== null && (_.lane &= -536870913)
                }
            n &= ~V
        }
        i !== 0 && jf(t, i, 0), u !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(d & ~e))
    }

    function jf(t, e, n) {
        t.pendingLanes |= e, t.suspendedLanes &= ~e;
        var i = 31 - be(e);
        t.entangledLanes |= e, t.entanglements[i] = t.entanglements[i] | 1073741824 | n & 261930
    }

    function Mf(t, e) {
        var n = t.entangledLanes |= e;
        for (t = t.entanglements; n;) {
            var i = 31 - be(n),
                s = 1 << i;
            s & e | t[i] & e && (t[i] |= e), n &= ~s
        }
    }

    function Ef(t, e) {
        var n = e & -e;
        return n = (n & 42) !== 0 ? 1 : Co(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n
    }

    function Co(t) {
        switch (t) {
            case 2:
                t = 1;
                break;
            case 8:
                t = 4;
                break;
            case 32:
                t = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                t = 128;
                break;
            case 268435456:
                t = 134217728;
                break;
            default:
                t = 0
        }
        return t
    }

    function _o(t) {
        return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function Nf() {
        var t = X.p;
        return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : hm(t.type))
    }

    function Cf(t, e) {
        var n = X.p;
        try {
            return X.p = t, e()
        } finally {
            X.p = n
        }
    }
    var Tn = Math.random().toString(36).slice(2),
        Pt = "__reactFiber$" + Tn,
        ce = "__reactProps$" + Tn,
        ja = "__reactContainer$" + Tn,
        ko = "__reactEvents$" + Tn,
        s1 = "__reactListeners$" + Tn,
        o1 = "__reactHandles$" + Tn,
        _f = "__reactResources$" + Tn,
        Ai = "__reactMarker$" + Tn;

    function Do(t) {
        delete t[Pt], delete t[ce], delete t[ko], delete t[s1], delete t[o1]
    }

    function Ma(t) {
        var e = t[Pt];
        if (e) return e;
        for (var n = t.parentNode; n;) {
            if (e = n[ja] || n[Pt]) {
                if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
                    for (t = $0(t); t !== null;) {
                        if (n = t[Pt]) return n;
                        t = $0(t)
                    }
                return e
            }
            t = n, n = t.parentNode
        }
        return null
    }

    function Ea(t) {
        if (t = t[Pt] || t[ja]) {
            var e = t.tag;
            if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t
        }
        return null
    }

    function wi(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
        throw Error(r(33))
    }

    function Na(t) {
        var e = t[_f];
        return e || (e = t[_f] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), e
    }

    function Wt(t) {
        t[Ai] = !0
    }
    var kf = new Set,
        Df = {};

    function ta(t, e) {
        Ca(t, e), Ca(t + "Capture", e)
    }

    function Ca(t, e) {
        for (Df[t] = e, t = 0; t < e.length; t++) kf.add(e[t])
    }
    var r1 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        zf = {},
        Rf = {};

    function u1(t) {
        return jo.call(Rf, t) ? !0 : jo.call(zf, t) ? !1 : r1.test(t) ? Rf[t] = !0 : (zf[t] = !0, !1)
    }

    function Ul(t, e, n) {
        if (u1(e))
            if (n === null) t.removeAttribute(e);
            else {
                switch (typeof n) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        t.removeAttribute(e);
                        return;
                    case "boolean":
                        var i = e.toLowerCase().slice(0, 5);
                        if (i !== "data-" && i !== "aria-") {
                            t.removeAttribute(e);
                            return
                        }
                }
                t.setAttribute(e, "" + n)
            }
    }

    function Ll(t, e, n) {
        if (n === null) t.removeAttribute(e);
        else {
            switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(e);
                    return
            }
            t.setAttribute(e, "" + n)
        }
    }

    function tn(t, e, n, i) {
        if (i === null) t.removeAttribute(n);
        else {
            switch (typeof i) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(n);
                    return
            }
            t.setAttributeNS(e, n, "" + i)
        }
    }

    function Ne(t) {
        switch (typeof t) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return t;
            case "object":
                return t;
            default:
                return ""
        }
    }

    function Of(t) {
        var e = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
    }

    function c1(t, e, n) {
        var i = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
        if (!t.hasOwnProperty(e) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
            var s = i.get,
                u = i.set;
            return Object.defineProperty(t, e, {
                configurable: !0,
                get: function() {
                    return s.call(this)
                },
                set: function(d) {
                    n = "" + d, u.call(this, d)
                }
            }), Object.defineProperty(t, e, {
                enumerable: i.enumerable
            }), {
                getValue: function() {
                    return n
                },
                setValue: function(d) {
                    n = "" + d
                },
                stopTracking: function() {
                    t._valueTracker = null, delete t[e]
                }
            }
        }
    }

    function zo(t) {
        if (!t._valueTracker) {
            var e = Of(t) ? "checked" : "value";
            t._valueTracker = c1(t, e, "" + t[e])
        }
    }

    function Vf(t) {
        if (!t) return !1;
        var e = t._valueTracker;
        if (!e) return !0;
        var n = e.getValue(),
            i = "";
        return t && (i = Of(t) ? t.checked ? "true" : "false" : t.value), t = i, t !== n ? (e.setValue(t), !0) : !1
    }

    function Hl(t) {
        if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var f1 = /[\n"\\]/g;

    function Ce(t) {
        return t.replace(f1, function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        })
    }

    function Ro(t, e, n, i, s, u, d, v) {
        t.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? t.type = d : t.removeAttribute("type"), e != null ? d === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ne(e)) : t.value !== "" + Ne(e) && (t.value = "" + Ne(e)) : d !== "submit" && d !== "reset" || t.removeAttribute("value"), e != null ? Oo(t, d, Ne(e)) : n != null ? Oo(t, d, Ne(n)) : i != null && t.removeAttribute("value"), s == null && u != null && (t.defaultChecked = !!u), s != null && (t.checked = s && typeof s != "function" && typeof s != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? t.name = "" + Ne(v) : t.removeAttribute("name")
    }

    function Bf(t, e, n, i, s, u, d, v) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || n != null) {
            if (!(u !== "submit" && u !== "reset" || e != null)) {
                zo(t);
                return
            }
            n = n != null ? "" + Ne(n) : "", e = e != null ? "" + Ne(e) : n, v || e === t.value || (t.value = e), t.defaultValue = e
        }
        i = i ?? s, i = typeof i != "function" && typeof i != "symbol" && !!i, t.checked = v ? t.checked : !!i, t.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (t.name = d), zo(t)
    }

    function Oo(t, e, n) {
        e === "number" && Hl(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n)
    }

    function _a(t, e, n, i) {
        if (t = t.options, e) {
            e = {};
            for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
            for (n = 0; n < t.length; n++) s = e.hasOwnProperty("$" + t[n].value), t[n].selected !== s && (t[n].selected = s), s && i && (t[n].defaultSelected = !0)
        } else {
            for (n = "" + Ne(n), e = null, s = 0; s < t.length; s++) {
                if (t[s].value === n) {
                    t[s].selected = !0, i && (t[s].defaultSelected = !0);
                    return
                }
                e !== null || t[s].disabled || (e = t[s])
            }
            e !== null && (e.selected = !0)
        }
    }

    function Uf(t, e, n) {
        if (e != null && (e = "" + Ne(e), e !== t.value && (t.value = e), n == null)) {
            t.defaultValue !== e && (t.defaultValue = e);
            return
        }
        t.defaultValue = n != null ? "" + Ne(n) : ""
    }

    function Lf(t, e, n, i) {
        if (e == null) {
            if (i != null) {
                if (n != null) throw Error(r(92));
                if (ue(i)) {
                    if (1 < i.length) throw Error(r(93));
                    i = i[0]
                }
                n = i
            }
            n == null && (n = ""), e = n
        }
        n = Ne(e), t.defaultValue = n, i = t.textContent, i === n && i !== "" && i !== null && (t.value = i), zo(t)
    }

    function ka(t, e) {
        if (e) {
            var n = t.firstChild;
            if (n && n === t.lastChild && n.nodeType === 3) {
                n.nodeValue = e;
                return
            }
        }
        t.textContent = e
    }
    var d1 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function Hf(t, e, n) {
        var i = e.indexOf("--") === 0;
        n == null || typeof n == "boolean" || n === "" ? i ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : i ? t.setProperty(e, n) : typeof n != "number" || n === 0 || d1.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px"
    }

    function qf(t, e, n) {
        if (e != null && typeof e != "object") throw Error(r(62));
        if (t = t.style, n != null) {
            for (var i in n) !n.hasOwnProperty(i) || e != null && e.hasOwnProperty(i) || (i.indexOf("--") === 0 ? t.setProperty(i, "") : i === "float" ? t.cssFloat = "" : t[i] = "");
            for (var s in e) i = e[s], e.hasOwnProperty(s) && n[s] !== i && Hf(t, s, i)
        } else
            for (var u in e) e.hasOwnProperty(u) && Hf(t, u, e[u])
    }

    function Vo(t) {
        if (t.indexOf("-") === -1) return !1;
        switch (t) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var h1 = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        m1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function ql(t) {
        return m1.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }

    function en() {}
    var Bo = null;

    function Uo(t) {
        return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
    }
    var Da = null,
        za = null;

    function Yf(t) {
        var e = Ea(t);
        if (e && (t = e.stateNode)) {
            var n = t[ce] || null;
            t: switch (t = e.stateNode, e.type) {
                case "input":
                    if (Ro(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), e = n.name, n.type === "radio" && e != null) {
                        for (n = t; n.parentNode;) n = n.parentNode;
                        for (n = n.querySelectorAll('input[name="' + Ce("" + e) + '"][type="radio"]'), e = 0; e < n.length; e++) {
                            var i = n[e];
                            if (i !== t && i.form === t.form) {
                                var s = i[ce] || null;
                                if (!s) throw Error(r(90));
                                Ro(i, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name)
                            }
                        }
                        for (e = 0; e < n.length; e++) i = n[e], i.form === t.form && Vf(i)
                    }
                    break t;
                case "textarea":
                    Uf(t, n.value, n.defaultValue);
                    break t;
                case "select":
                    e = n.value, e != null && _a(t, !!n.multiple, e, !1)
            }
        }
    }
    var Lo = !1;

    function Gf(t, e, n) {
        if (Lo) return t(e, n);
        Lo = !0;
        try {
            var i = t(e);
            return i
        } finally {
            if (Lo = !1, (Da !== null || za !== null) && (Ns(), Da && (e = Da, t = za, za = Da = null, Yf(e), t)))
                for (e = 0; e < t.length; e++) Yf(t[e])
        }
    }

    function ji(t, e) {
        var n = t.stateNode;
        if (n === null) return null;
        var i = n[ce] || null;
        if (i === null) return null;
        n = i[e];
        t: switch (e) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (i = !i.disabled) || (t = t.type, i = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !i;
                break t;
            default:
                t = !1
        }
        if (t) return null;
        if (n && typeof n != "function") throw Error(r(231, e, typeof n));
        return n
    }
    var nn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        Ho = !1;
    if (nn) try {
        var Mi = {};
        Object.defineProperty(Mi, "passive", {
            get: function() {
                Ho = !0
            }
        }), window.addEventListener("test", Mi, Mi), window.removeEventListener("test", Mi, Mi)
    } catch {
        Ho = !1
    }
    var An = null,
        qo = null,
        Yl = null;

    function Xf() {
        if (Yl) return Yl;
        var t, e = qo,
            n = e.length,
            i, s = "value" in An ? An.value : An.textContent,
            u = s.length;
        for (t = 0; t < n && e[t] === s[t]; t++);
        var d = n - t;
        for (i = 1; i <= d && e[n - i] === s[u - i]; i++);
        return Yl = s.slice(t, 1 < i ? 1 - i : void 0)
    }

    function Gl(t) {
        var e = t.keyCode;
        return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
    }

    function Xl() {
        return !0
    }

    function Qf() {
        return !1
    }

    function fe(t) {
        function e(n, i, s, u, d) {
            this._reactName = n, this._targetInst = s, this.type = i, this.nativeEvent = u, this.target = d, this.currentTarget = null;
            for (var v in t) t.hasOwnProperty(v) && (n = t[v], this[v] = n ? n(u) : u[v]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Xl : Qf, this.isPropagationStopped = Qf, this
        }
        return x(e.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Xl)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Xl)
            },
            persist: function() {},
            isPersistent: Xl
        }), e
    }
    var ea = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(t) {
                return t.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        Ql = fe(ea),
        Ei = x({}, ea, {
            view: 0,
            detail: 0
        }),
        p1 = fe(Ei),
        Yo, Go, Ni, Zl = x({}, Ei, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Qo,
            button: 0,
            buttons: 0,
            relatedTarget: function(t) {
                return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
            },
            movementX: function(t) {
                return "movementX" in t ? t.movementX : (t !== Ni && (Ni && t.type === "mousemove" ? (Yo = t.screenX - Ni.screenX, Go = t.screenY - Ni.screenY) : Go = Yo = 0, Ni = t), Yo)
            },
            movementY: function(t) {
                return "movementY" in t ? t.movementY : Go
            }
        }),
        Zf = fe(Zl),
        y1 = x({}, Zl, {
            dataTransfer: 0
        }),
        g1 = fe(y1),
        v1 = x({}, Ei, {
            relatedTarget: 0
        }),
        Xo = fe(v1),
        b1 = x({}, ea, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        x1 = fe(b1),
        S1 = x({}, ea, {
            clipboardData: function(t) {
                return "clipboardData" in t ? t.clipboardData : window.clipboardData
            }
        }),
        T1 = fe(S1),
        A1 = x({}, ea, {
            data: 0
        }),
        Kf = fe(A1),
        w1 = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        j1 = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        M1 = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function E1(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : (t = M1[t]) ? !!e[t] : !1
    }

    function Qo() {
        return E1
    }
    var N1 = x({}, Ei, {
            key: function(t) {
                if (t.key) {
                    var e = w1[t.key] || t.key;
                    if (e !== "Unidentified") return e
                }
                return t.type === "keypress" ? (t = Gl(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? j1[t.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Qo,
            charCode: function(t) {
                return t.type === "keypress" ? Gl(t) : 0
            },
            keyCode: function(t) {
                return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            },
            which: function(t) {
                return t.type === "keypress" ? Gl(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            }
        }),
        C1 = fe(N1),
        _1 = x({}, Zl, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        Jf = fe(_1),
        k1 = x({}, Ei, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Qo
        }),
        D1 = fe(k1),
        z1 = x({}, ea, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        R1 = fe(z1),
        O1 = x({}, Zl, {
            deltaX: function(t) {
                return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
            },
            deltaY: function(t) {
                return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        V1 = fe(O1),
        B1 = x({}, ea, {
            newState: 0,
            oldState: 0
        }),
        U1 = fe(B1),
        L1 = [9, 13, 27, 32],
        Zo = nn && "CompositionEvent" in window,
        Ci = null;
    nn && "documentMode" in document && (Ci = document.documentMode);
    var H1 = nn && "TextEvent" in window && !Ci,
        Ff = nn && (!Zo || Ci && 8 < Ci && 11 >= Ci),
        Wf = " ",
        $f = !1;

    function Pf(t, e) {
        switch (t) {
            case "keyup":
                return L1.indexOf(e.keyCode) !== -1;
            case "keydown":
                return e.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function If(t) {
        return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
    }
    var Ra = !1;

    function q1(t, e) {
        switch (t) {
            case "compositionend":
                return If(e);
            case "keypress":
                return e.which !== 32 ? null : ($f = !0, Wf);
            case "textInput":
                return t = e.data, t === Wf && $f ? null : t;
            default:
                return null
        }
    }

    function Y1(t, e) {
        if (Ra) return t === "compositionend" || !Zo && Pf(t, e) ? (t = Xf(), Yl = qo = An = null, Ra = !1, t) : null;
        switch (t) {
            case "paste":
                return null;
            case "keypress":
                if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                    if (e.char && 1 < e.char.length) return e.char;
                    if (e.which) return String.fromCharCode(e.which)
                }
                return null;
            case "compositionend":
                return Ff && e.locale !== "ko" ? null : e.data;
            default:
                return null
        }
    }
    var G1 = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function td(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e === "input" ? !!G1[t.type] : e === "textarea"
    }

    function ed(t, e, n, i) {
        Da ? za ? za.push(i) : za = [i] : Da = i, e = Os(e, "onChange"), 0 < e.length && (n = new Ql("onChange", "change", null, n, i), t.push({
            event: n,
            listeners: e
        }))
    }
    var _i = null,
        ki = null;

    function X1(t) {
        B0(t, 0)
    }

    function Kl(t) {
        var e = wi(t);
        if (Vf(e)) return t
    }

    function nd(t, e) {
        if (t === "change") return e
    }
    var ad = !1;
    if (nn) {
        var Ko;
        if (nn) {
            var Jo = "oninput" in document;
            if (!Jo) {
                var id = document.createElement("div");
                id.setAttribute("oninput", "return;"), Jo = typeof id.oninput == "function"
            }
            Ko = Jo
        } else Ko = !1;
        ad = Ko && (!document.documentMode || 9 < document.documentMode)
    }

    function ld() {
        _i && (_i.detachEvent("onpropertychange", sd), ki = _i = null)
    }

    function sd(t) {
        if (t.propertyName === "value" && Kl(ki)) {
            var e = [];
            ed(e, ki, t, Uo(t)), Gf(X1, e)
        }
    }

    function Q1(t, e, n) {
        t === "focusin" ? (ld(), _i = e, ki = n, _i.attachEvent("onpropertychange", sd)) : t === "focusout" && ld()
    }

    function Z1(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown") return Kl(ki)
    }

    function K1(t, e) {
        if (t === "click") return Kl(e)
    }

    function J1(t, e) {
        if (t === "input" || t === "change") return Kl(e)
    }

    function F1(t, e) {
        return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
    }
    var xe = typeof Object.is == "function" ? Object.is : F1;

    function Di(t, e) {
        if (xe(t, e)) return !0;
        if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
        var n = Object.keys(t),
            i = Object.keys(e);
        if (n.length !== i.length) return !1;
        for (i = 0; i < n.length; i++) {
            var s = n[i];
            if (!jo.call(e, s) || !xe(t[s], e[s])) return !1
        }
        return !0
    }

    function od(t) {
        for (; t && t.firstChild;) t = t.firstChild;
        return t
    }

    function rd(t, e) {
        var n = od(t);
        t = 0;
        for (var i; n;) {
            if (n.nodeType === 3) {
                if (i = t + n.textContent.length, t <= e && i >= e) return {
                    node: n,
                    offset: e - t
                };
                t = i
            }
            t: {
                for (; n;) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break t
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = od(n)
        }
    }

    function ud(t, e) {
        return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? ud(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
    }

    function cd(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var e = Hl(t.document); e instanceof t.HTMLIFrameElement;) {
            try {
                var n = typeof e.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n) t = e.contentWindow;
            else break;
            e = Hl(t.document)
        }
        return e
    }

    function Fo(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
    }
    var W1 = nn && "documentMode" in document && 11 >= document.documentMode,
        Oa = null,
        Wo = null,
        zi = null,
        $o = !1;

    function fd(t, e, n) {
        var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        $o || Oa == null || Oa !== Hl(i) || (i = Oa, "selectionStart" in i && Fo(i) ? i = {
            start: i.selectionStart,
            end: i.selectionEnd
        } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset
        }), zi && Di(zi, i) || (zi = i, i = Os(Wo, "onSelect"), 0 < i.length && (e = new Ql("onSelect", "select", null, e, n), t.push({
            event: e,
            listeners: i
        }), e.target = Oa)))
    }

    function na(t, e) {
        var n = {};
        return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n
    }
    var Va = {
            animationend: na("Animation", "AnimationEnd"),
            animationiteration: na("Animation", "AnimationIteration"),
            animationstart: na("Animation", "AnimationStart"),
            transitionrun: na("Transition", "TransitionRun"),
            transitionstart: na("Transition", "TransitionStart"),
            transitioncancel: na("Transition", "TransitionCancel"),
            transitionend: na("Transition", "TransitionEnd")
        },
        Po = {},
        dd = {};
    nn && (dd = document.createElement("div").style, "AnimationEvent" in window || (delete Va.animationend.animation, delete Va.animationiteration.animation, delete Va.animationstart.animation), "TransitionEvent" in window || delete Va.transitionend.transition);

    function aa(t) {
        if (Po[t]) return Po[t];
        if (!Va[t]) return t;
        var e = Va[t],
            n;
        for (n in e)
            if (e.hasOwnProperty(n) && n in dd) return Po[t] = e[n];
        return t
    }
    var hd = aa("animationend"),
        md = aa("animationiteration"),
        pd = aa("animationstart"),
        $1 = aa("transitionrun"),
        P1 = aa("transitionstart"),
        I1 = aa("transitioncancel"),
        yd = aa("transitionend"),
        gd = new Map,
        Io = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Io.push("scrollEnd");

    function qe(t, e) {
        gd.set(t, e), ta(e, [t])
    }
    var Jl = typeof reportError == "function" ? reportError : function(t) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var e = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                    error: t
                });
                if (!window.dispatchEvent(e)) return
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", t);
                return
            }
            console.error(t)
        },
        _e = [],
        Ba = 0,
        tr = 0;

    function Fl() {
        for (var t = Ba, e = tr = Ba = 0; e < t;) {
            var n = _e[e];
            _e[e++] = null;
            var i = _e[e];
            _e[e++] = null;
            var s = _e[e];
            _e[e++] = null;
            var u = _e[e];
            if (_e[e++] = null, i !== null && s !== null) {
                var d = i.pending;
                d === null ? s.next = s : (s.next = d.next, d.next = s), i.pending = s
            }
            u !== 0 && vd(n, s, u)
        }
    }

    function Wl(t, e, n, i) {
        _e[Ba++] = t, _e[Ba++] = e, _e[Ba++] = n, _e[Ba++] = i, tr |= i, t.lanes |= i, t = t.alternate, t !== null && (t.lanes |= i)
    }

    function er(t, e, n, i) {
        return Wl(t, e, n, i), $l(t)
    }

    function ia(t, e) {
        return Wl(t, null, null, e), $l(t)
    }

    function vd(t, e, n) {
        t.lanes |= n;
        var i = t.alternate;
        i !== null && (i.lanes |= n);
        for (var s = !1, u = t.return; u !== null;) u.childLanes |= n, i = u.alternate, i !== null && (i.childLanes |= n), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (s = !0)), t = u, u = u.return;
        return t.tag === 3 ? (u = t.stateNode, s && e !== null && (s = 31 - be(n), t = u.hiddenUpdates, i = t[s], i === null ? t[s] = [e] : i.push(e), e.lane = n | 536870912), u) : null
    }

    function $l(t) {
        if (50 < el) throw el = 0, cu = null, Error(r(185));
        for (var e = t.return; e !== null;) t = e, e = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var Ua = {};

    function tv(t, e, n, i) {
        this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function Se(t, e, n, i) {
        return new tv(t, e, n, i)
    }

    function nr(t) {
        return t = t.prototype, !(!t || !t.isReactComponent)
    }

    function an(t, e) {
        var n = t.alternate;
        return n === null ? (n = Se(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 65011712, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n
    }

    function bd(t, e) {
        t.flags &= 65011714;
        var n = t.alternate;
        return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }), t
    }

    function Pl(t, e, n, i, s, u) {
        var d = 0;
        if (i = t, typeof t == "function") nr(t) && (d = 1);
        else if (typeof t == "string") d = lb(t, n, P.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else t: switch (t) {
            case nt:
                return t = Se(31, n, e, s), t.elementType = nt, t.lanes = u, t;
            case U:
                return la(n.children, s, u, e);
            case H:
                d = 8, s |= 24;
                break;
            case L:
                return t = Se(12, n, e, s | 2), t.elementType = L, t.lanes = u, t;
            case Q:
                return t = Se(13, n, e, s), t.elementType = Q, t.lanes = u, t;
            case $:
                return t = Se(19, n, e, s), t.elementType = $, t.lanes = u, t;
            default:
                if (typeof t == "object" && t !== null) switch (t.$$typeof) {
                    case O:
                        d = 10;
                        break t;
                    case Z:
                        d = 9;
                        break t;
                    case G:
                        d = 11;
                        break t;
                    case J:
                        d = 14;
                        break t;
                    case q:
                        d = 16, i = null;
                        break t
                }
                d = 29, n = Error(r(130, t === null ? "null" : typeof t, "")), i = null
        }
        return e = Se(d, n, e, s), e.elementType = t, e.type = i, e.lanes = u, e
    }

    function la(t, e, n, i) {
        return t = Se(7, t, i, e), t.lanes = n, t
    }

    function ar(t, e, n) {
        return t = Se(6, t, null, e), t.lanes = n, t
    }

    function xd(t) {
        var e = Se(18, null, null, 0);
        return e.stateNode = t, e
    }

    function ir(t, e, n) {
        return e = Se(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        }, e
    }
    var Sd = new WeakMap;

    function ke(t, e) {
        if (typeof t == "object" && t !== null) {
            var n = Sd.get(t);
            return n !== void 0 ? n : (e = {
                value: t,
                source: e,
                stack: xf(e)
            }, Sd.set(t, e), e)
        }
        return {
            value: t,
            source: e,
            stack: xf(e)
        }
    }
    var La = [],
        Ha = 0,
        Il = null,
        Ri = 0,
        De = [],
        ze = 0,
        wn = null,
        Ze = 1,
        Ke = "";

    function ln(t, e) {
        La[Ha++] = Ri, La[Ha++] = Il, Il = t, Ri = e
    }

    function Td(t, e, n) {
        De[ze++] = Ze, De[ze++] = Ke, De[ze++] = wn, wn = t;
        var i = Ze;
        t = Ke;
        var s = 32 - be(i) - 1;
        i &= ~(1 << s), n += 1;
        var u = 32 - be(e) + s;
        if (30 < u) {
            var d = s - s % 5;
            u = (i & (1 << d) - 1).toString(32), i >>= d, s -= d, Ze = 1 << 32 - be(e) + s | n << s | i, Ke = u + t
        } else Ze = 1 << u | n << s | i, Ke = t
    }

    function lr(t) {
        t.return !== null && (ln(t, 1), Td(t, 1, 0))
    }

    function sr(t) {
        for (; t === Il;) Il = La[--Ha], La[Ha] = null, Ri = La[--Ha], La[Ha] = null;
        for (; t === wn;) wn = De[--ze], De[ze] = null, Ke = De[--ze], De[ze] = null, Ze = De[--ze], De[ze] = null
    }

    function Ad(t, e) {
        De[ze++] = Ze, De[ze++] = Ke, De[ze++] = wn, Ze = e.id, Ke = e.overflow, wn = t
    }
    var It = null,
        _t = null,
        pt = !1,
        jn = null,
        Re = !1,
        or = Error(r(519));

    function Mn(t) {
        var e = Error(r(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw Oi(ke(e, t)), or
    }

    function wd(t) {
        var e = t.stateNode,
            n = t.type,
            i = t.memoizedProps;
        switch (e[Pt] = t, e[ce] = i, n) {
            case "dialog":
                ft("cancel", e), ft("close", e);
                break;
            case "iframe":
            case "object":
            case "embed":
                ft("load", e);
                break;
            case "video":
            case "audio":
                for (n = 0; n < al.length; n++) ft(al[n], e);
                break;
            case "source":
                ft("error", e);
                break;
            case "img":
            case "image":
            case "link":
                ft("error", e), ft("load", e);
                break;
            case "details":
                ft("toggle", e);
                break;
            case "input":
                ft("invalid", e), Bf(e, i.value, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name, !0);
                break;
            case "select":
                ft("invalid", e);
                break;
            case "textarea":
                ft("invalid", e), Lf(e, i.value, i.defaultValue, i.children)
        }
        n = i.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || i.suppressHydrationWarning === !0 || q0(e.textContent, n) ? (i.popover != null && (ft("beforetoggle", e), ft("toggle", e)), i.onScroll != null && ft("scroll", e), i.onScrollEnd != null && ft("scrollend", e), i.onClick != null && (e.onclick = en), e = !0) : e = !1, e || Mn(t, !0)
    }

    function jd(t) {
        for (It = t.return; It;) switch (It.tag) {
            case 5:
            case 31:
            case 13:
                Re = !1;
                return;
            case 27:
            case 3:
                Re = !0;
                return;
            default:
                It = It.return
        }
    }

    function qa(t) {
        if (t !== It) return !1;
        if (!pt) return jd(t), pt = !0, !1;
        var e = t.tag,
            n;
        if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || ju(t.type, t.memoizedProps)), n = !n), n && _t && Mn(t), jd(t), e === 13) {
            if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
            _t = W0(t)
        } else if (e === 31) {
            if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
            _t = W0(t)
        } else e === 27 ? (e = _t, Hn(t.type) ? (t = _u, _u = null, _t = t) : _t = e) : _t = It ? Ve(t.stateNode.nextSibling) : null;
        return !0
    }

    function sa() {
        _t = It = null, pt = !1
    }

    function rr() {
        var t = jn;
        return t !== null && (pe === null ? pe = t : pe.push.apply(pe, t), jn = null), t
    }

    function Oi(t) {
        jn === null ? jn = [t] : jn.push(t)
    }
    var ur = w(null),
        oa = null,
        sn = null;

    function En(t, e, n) {
        K(ur, e._currentValue), e._currentValue = n
    }

    function on(t) {
        t._currentValue = ur.current, B(ur)
    }

    function cr(t, e, n) {
        for (; t !== null;) {
            var i = t.alternate;
            if ((t.childLanes & e) !== e ? (t.childLanes |= e, i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e), t === n) break;
            t = t.return
        }
    }

    function fr(t, e, n, i) {
        var s = t.child;
        for (s !== null && (s.return = t); s !== null;) {
            var u = s.dependencies;
            if (u !== null) {
                var d = s.child;
                u = u.firstContext;
                t: for (; u !== null;) {
                    var v = u;
                    u = s;
                    for (var T = 0; T < e.length; T++)
                        if (v.context === e[T]) {
                            u.lanes |= n, v = u.alternate, v !== null && (v.lanes |= n), cr(u.return, n, t), i || (d = null);
                            break t
                        }
                    u = v.next
                }
            } else if (s.tag === 18) {
                if (d = s.return, d === null) throw Error(r(341));
                d.lanes |= n, u = d.alternate, u !== null && (u.lanes |= n), cr(d, n, t), d = null
            } else d = s.child;
            if (d !== null) d.return = s;
            else
                for (d = s; d !== null;) {
                    if (d === t) {
                        d = null;
                        break
                    }
                    if (s = d.sibling, s !== null) {
                        s.return = d.return, d = s;
                        break
                    }
                    d = d.return
                }
            s = d
        }
    }

    function Ya(t, e, n, i) {
        t = null;
        for (var s = e, u = !1; s !== null;) {
            if (!u) {
                if ((s.flags & 524288) !== 0) u = !0;
                else if ((s.flags & 262144) !== 0) break
            }
            if (s.tag === 10) {
                var d = s.alternate;
                if (d === null) throw Error(r(387));
                if (d = d.memoizedProps, d !== null) {
                    var v = s.type;
                    xe(s.pendingProps.value, d.value) || (t !== null ? t.push(v) : t = [v])
                }
            } else if (s === xt.current) {
                if (d = s.alternate, d === null) throw Error(r(387));
                d.memoizedState.memoizedState !== s.memoizedState.memoizedState && (t !== null ? t.push(rl) : t = [rl])
            }
            s = s.return
        }
        t !== null && fr(e, t, n, i), e.flags |= 262144
    }

    function ts(t) {
        for (t = t.firstContext; t !== null;) {
            if (!xe(t.context._currentValue, t.memoizedValue)) return !0;
            t = t.next
        }
        return !1
    }

    function ra(t) {
        oa = t, sn = null, t = t.dependencies, t !== null && (t.firstContext = null)
    }

    function te(t) {
        return Md(oa, t)
    }

    function es(t, e) {
        return oa === null && ra(t), Md(t, e)
    }

    function Md(t, e) {
        var n = e._currentValue;
        if (e = {
                context: e,
                memoizedValue: n,
                next: null
            }, sn === null) {
            if (t === null) throw Error(r(308));
            sn = e, t.dependencies = {
                lanes: 0,
                firstContext: e
            }, t.flags |= 524288
        } else sn = sn.next = e;
        return n
    }
    var ev = typeof AbortController < "u" ? AbortController : function() {
            var t = [],
                e = this.signal = {
                    aborted: !1,
                    addEventListener: function(n, i) {
                        t.push(i)
                    }
                };
            this.abort = function() {
                e.aborted = !0, t.forEach(function(n) {
                    return n()
                })
            }
        },
        nv = a.unstable_scheduleCallback,
        av = a.unstable_NormalPriority,
        Yt = {
            $$typeof: O,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function dr() {
        return {
            controller: new ev,
            data: new Map,
            refCount: 0
        }
    }

    function Vi(t) {
        t.refCount--, t.refCount === 0 && nv(av, function() {
            t.controller.abort()
        })
    }
    var Bi = null,
        hr = 0,
        Ga = 0,
        Xa = null;

    function iv(t, e) {
        if (Bi === null) {
            var n = Bi = [];
            hr = 0, Ga = yu(), Xa = {
                status: "pending",
                value: void 0,
                then: function(i) {
                    n.push(i)
                }
            }
        }
        return hr++, e.then(Ed, Ed), e
    }

    function Ed() {
        if (--hr === 0 && Bi !== null) {
            Xa !== null && (Xa.status = "fulfilled");
            var t = Bi;
            Bi = null, Ga = 0, Xa = null;
            for (var e = 0; e < t.length; e++)(0, t[e])()
        }
    }

    function lv(t, e) {
        var n = [],
            i = {
                status: "pending",
                value: null,
                reason: null,
                then: function(s) {
                    n.push(s)
                }
            };
        return t.then(function() {
            i.status = "fulfilled", i.value = e;
            for (var s = 0; s < n.length; s++)(0, n[s])(e)
        }, function(s) {
            for (i.status = "rejected", i.reason = s, s = 0; s < n.length; s++)(0, n[s])(void 0)
        }), i
    }
    var Nd = z.S;
    z.S = function(t, e) {
        f0 = ge(), typeof e == "object" && e !== null && typeof e.then == "function" && iv(t, e), Nd !== null && Nd(t, e)
    };
    var ua = w(null);

    function mr() {
        var t = ua.current;
        return t !== null ? t : Nt.pooledCache
    }

    function ns(t, e) {
        e === null ? K(ua, ua.current) : K(ua, e.pool)
    }

    function Cd() {
        var t = mr();
        return t === null ? null : {
            parent: Yt._currentValue,
            pool: t
        }
    }
    var Qa = Error(r(460)),
        pr = Error(r(474)),
        as = Error(r(542)),
        is = {
            then: function() {}
        };

    function _d(t) {
        return t = t.status, t === "fulfilled" || t === "rejected"
    }

    function kd(t, e, n) {
        switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(en, en), e = n), e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw t = e.reason, zd(t), t;
            default:
                if (typeof e.status == "string") e.then(en, en);
                else {
                    if (t = Nt, t !== null && 100 < t.shellSuspendCounter) throw Error(r(482));
                    t = e, t.status = "pending", t.then(function(i) {
                        if (e.status === "pending") {
                            var s = e;
                            s.status = "fulfilled", s.value = i
                        }
                    }, function(i) {
                        if (e.status === "pending") {
                            var s = e;
                            s.status = "rejected", s.reason = i
                        }
                    })
                }
                switch (e.status) {
                    case "fulfilled":
                        return e.value;
                    case "rejected":
                        throw t = e.reason, zd(t), t
                }
                throw fa = e, Qa
        }
    }

    function ca(t) {
        try {
            var e = t._init;
            return e(t._payload)
        } catch (n) {
            throw n !== null && typeof n == "object" && typeof n.then == "function" ? (fa = n, Qa) : n
        }
    }
    var fa = null;

    function Dd() {
        if (fa === null) throw Error(r(459));
        var t = fa;
        return fa = null, t
    }

    function zd(t) {
        if (t === Qa || t === as) throw Error(r(483))
    }
    var Za = null,
        Ui = 0;

    function ls(t) {
        var e = Ui;
        return Ui += 1, Za === null && (Za = []), kd(Za, t, e)
    }

    function Li(t, e) {
        e = e.props.ref, t.ref = e !== void 0 ? e : null
    }

    function ss(t, e) {
        throw e.$$typeof === S ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(r(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
    }

    function Rd(t) {
        function e(j, A) {
            if (t) {
                var E = j.deletions;
                E === null ? (j.deletions = [A], j.flags |= 16) : E.push(A)
            }
        }

        function n(j, A) {
            if (!t) return null;
            for (; A !== null;) e(j, A), A = A.sibling;
            return null
        }

        function i(j) {
            for (var A = new Map; j !== null;) j.key !== null ? A.set(j.key, j) : A.set(j.index, j), j = j.sibling;
            return A
        }

        function s(j, A) {
            return j = an(j, A), j.index = 0, j.sibling = null, j
        }

        function u(j, A, E) {
            return j.index = E, t ? (E = j.alternate, E !== null ? (E = E.index, E < A ? (j.flags |= 67108866, A) : E) : (j.flags |= 67108866, A)) : (j.flags |= 1048576, A)
        }

        function d(j) {
            return t && j.alternate === null && (j.flags |= 67108866), j
        }

        function v(j, A, E, R) {
            return A === null || A.tag !== 6 ? (A = ar(E, j.mode, R), A.return = j, A) : (A = s(A, E), A.return = j, A)
        }

        function T(j, A, E, R) {
            var et = E.type;
            return et === U ? D(j, A, E.props.children, R, E.key) : A !== null && (A.elementType === et || typeof et == "object" && et !== null && et.$$typeof === q && ca(et) === A.type) ? (A = s(A, E.props), Li(A, E), A.return = j, A) : (A = Pl(E.type, E.key, E.props, null, j.mode, R), Li(A, E), A.return = j, A)
        }

        function N(j, A, E, R) {
            return A === null || A.tag !== 4 || A.stateNode.containerInfo !== E.containerInfo || A.stateNode.implementation !== E.implementation ? (A = ir(E, j.mode, R), A.return = j, A) : (A = s(A, E.children || []), A.return = j, A)
        }

        function D(j, A, E, R, et) {
            return A === null || A.tag !== 7 ? (A = la(E, j.mode, R, et), A.return = j, A) : (A = s(A, E), A.return = j, A)
        }

        function V(j, A, E) {
            if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint") return A = ar("" + A, j.mode, E), A.return = j, A;
            if (typeof A == "object" && A !== null) {
                switch (A.$$typeof) {
                    case M:
                        return E = Pl(A.type, A.key, A.props, null, j.mode, E), Li(E, A), E.return = j, E;
                    case k:
                        return A = ir(A, j.mode, E), A.return = j, A;
                    case q:
                        return A = ca(A), V(j, A, E)
                }
                if (ue(A) || qt(A)) return A = la(A, j.mode, E, null), A.return = j, A;
                if (typeof A.then == "function") return V(j, ls(A), E);
                if (A.$$typeof === O) return V(j, es(j, A), E);
                ss(j, A)
            }
            return null
        }

        function C(j, A, E, R) {
            var et = A !== null ? A.key : null;
            if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint") return et !== null ? null : v(j, A, "" + E, R);
            if (typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                    case M:
                        return E.key === et ? T(j, A, E, R) : null;
                    case k:
                        return E.key === et ? N(j, A, E, R) : null;
                    case q:
                        return E = ca(E), C(j, A, E, R)
                }
                if (ue(E) || qt(E)) return et !== null ? null : D(j, A, E, R, null);
                if (typeof E.then == "function") return C(j, A, ls(E), R);
                if (E.$$typeof === O) return C(j, A, es(j, E), R);
                ss(j, E)
            }
            return null
        }

        function _(j, A, E, R, et) {
            if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint") return j = j.get(E) || null, v(A, j, "" + R, et);
            if (typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                    case M:
                        return j = j.get(R.key === null ? E : R.key) || null, T(A, j, R, et);
                    case k:
                        return j = j.get(R.key === null ? E : R.key) || null, N(A, j, R, et);
                    case q:
                        return R = ca(R), _(j, A, E, R, et)
                }
                if (ue(R) || qt(R)) return j = j.get(E) || null, D(A, j, R, et, null);
                if (typeof R.then == "function") return _(j, A, E, ls(R), et);
                if (R.$$typeof === O) return _(j, A, E, es(A, R), et);
                ss(A, R)
            }
            return null
        }

        function F(j, A, E, R) {
            for (var et = null, gt = null, tt = A, rt = A = 0, mt = null; tt !== null && rt < E.length; rt++) {
                tt.index > rt ? (mt = tt, tt = null) : mt = tt.sibling;
                var vt = C(j, tt, E[rt], R);
                if (vt === null) {
                    tt === null && (tt = mt);
                    break
                }
                t && tt && vt.alternate === null && e(j, tt), A = u(vt, A, rt), gt === null ? et = vt : gt.sibling = vt, gt = vt, tt = mt
            }
            if (rt === E.length) return n(j, tt), pt && ln(j, rt), et;
            if (tt === null) {
                for (; rt < E.length; rt++) tt = V(j, E[rt], R), tt !== null && (A = u(tt, A, rt), gt === null ? et = tt : gt.sibling = tt, gt = tt);
                return pt && ln(j, rt), et
            }
            for (tt = i(tt); rt < E.length; rt++) mt = _(tt, j, rt, E[rt], R), mt !== null && (t && mt.alternate !== null && tt.delete(mt.key === null ? rt : mt.key), A = u(mt, A, rt), gt === null ? et = mt : gt.sibling = mt, gt = mt);
            return t && tt.forEach(function(Qn) {
                return e(j, Qn)
            }), pt && ln(j, rt), et
        }

        function at(j, A, E, R) {
            if (E == null) throw Error(r(151));
            for (var et = null, gt = null, tt = A, rt = A = 0, mt = null, vt = E.next(); tt !== null && !vt.done; rt++, vt = E.next()) {
                tt.index > rt ? (mt = tt, tt = null) : mt = tt.sibling;
                var Qn = C(j, tt, vt.value, R);
                if (Qn === null) {
                    tt === null && (tt = mt);
                    break
                }
                t && tt && Qn.alternate === null && e(j, tt), A = u(Qn, A, rt), gt === null ? et = Qn : gt.sibling = Qn, gt = Qn, tt = mt
            }
            if (vt.done) return n(j, tt), pt && ln(j, rt), et;
            if (tt === null) {
                for (; !vt.done; rt++, vt = E.next()) vt = V(j, vt.value, R), vt !== null && (A = u(vt, A, rt), gt === null ? et = vt : gt.sibling = vt, gt = vt);
                return pt && ln(j, rt), et
            }
            for (tt = i(tt); !vt.done; rt++, vt = E.next()) vt = _(tt, j, rt, vt.value, R), vt !== null && (t && vt.alternate !== null && tt.delete(vt.key === null ? rt : vt.key), A = u(vt, A, rt), gt === null ? et = vt : gt.sibling = vt, gt = vt);
            return t && tt.forEach(function(yb) {
                return e(j, yb)
            }), pt && ln(j, rt), et
        }

        function Mt(j, A, E, R) {
            if (typeof E == "object" && E !== null && E.type === U && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                    case M:
                        t: {
                            for (var et = E.key; A !== null;) {
                                if (A.key === et) {
                                    if (et = E.type, et === U) {
                                        if (A.tag === 7) {
                                            n(j, A.sibling), R = s(A, E.props.children), R.return = j, j = R;
                                            break t
                                        }
                                    } else if (A.elementType === et || typeof et == "object" && et !== null && et.$$typeof === q && ca(et) === A.type) {
                                        n(j, A.sibling), R = s(A, E.props), Li(R, E), R.return = j, j = R;
                                        break t
                                    }
                                    n(j, A);
                                    break
                                } else e(j, A);
                                A = A.sibling
                            }
                            E.type === U ? (R = la(E.props.children, j.mode, R, E.key), R.return = j, j = R) : (R = Pl(E.type, E.key, E.props, null, j.mode, R), Li(R, E), R.return = j, j = R)
                        }
                        return d(j);
                    case k:
                        t: {
                            for (et = E.key; A !== null;) {
                                if (A.key === et)
                                    if (A.tag === 4 && A.stateNode.containerInfo === E.containerInfo && A.stateNode.implementation === E.implementation) {
                                        n(j, A.sibling), R = s(A, E.children || []), R.return = j, j = R;
                                        break t
                                    } else {
                                        n(j, A);
                                        break
                                    }
                                else e(j, A);
                                A = A.sibling
                            }
                            R = ir(E, j.mode, R),
                            R.return = j,
                            j = R
                        }
                        return d(j);
                    case q:
                        return E = ca(E), Mt(j, A, E, R)
                }
                if (ue(E)) return F(j, A, E, R);
                if (qt(E)) {
                    if (et = qt(E), typeof et != "function") throw Error(r(150));
                    return E = et.call(E), at(j, A, E, R)
                }
                if (typeof E.then == "function") return Mt(j, A, ls(E), R);
                if (E.$$typeof === O) return Mt(j, A, es(j, E), R);
                ss(j, E)
            }
            return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E, A !== null && A.tag === 6 ? (n(j, A.sibling), R = s(A, E), R.return = j, j = R) : (n(j, A), R = ar(E, j.mode, R), R.return = j, j = R), d(j)) : n(j, A)
        }
        return function(j, A, E, R) {
            try {
                Ui = 0;
                var et = Mt(j, A, E, R);
                return Za = null, et
            } catch (tt) {
                if (tt === Qa || tt === as) throw tt;
                var gt = Se(29, tt, null, j.mode);
                return gt.lanes = R, gt.return = j, gt
            } finally {}
        }
    }
    var da = Rd(!0),
        Od = Rd(!1),
        Nn = !1;

    function yr(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }

    function gr(t, e) {
        t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }

    function Cn(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function _n(t, e, n) {
        var i = t.updateQueue;
        if (i === null) return null;
        if (i = i.shared, (bt & 2) !== 0) {
            var s = i.pending;
            return s === null ? e.next = e : (e.next = s.next, s.next = e), i.pending = e, e = $l(t), vd(t, null, n), e
        }
        return Wl(t, i, e, n), $l(t)
    }

    function Hi(t, e, n) {
        if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
            var i = e.lanes;
            i &= t.pendingLanes, n |= i, e.lanes = n, Mf(t, n)
        }
    }

    function vr(t, e) {
        var n = t.updateQueue,
            i = t.alternate;
        if (i !== null && (i = i.updateQueue, n === i)) {
            var s = null,
                u = null;
            if (n = n.firstBaseUpdate, n !== null) {
                do {
                    var d = {
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: null,
                        next: null
                    };
                    u === null ? s = u = d : u = u.next = d, n = n.next
                } while (n !== null);
                u === null ? s = u = e : u = u.next = e
            } else s = u = e;
            n = {
                baseState: i.baseState,
                firstBaseUpdate: s,
                lastBaseUpdate: u,
                shared: i.shared,
                callbacks: i.callbacks
            }, t.updateQueue = n;
            return
        }
        t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e
    }
    var br = !1;

    function qi() {
        if (br) {
            var t = Xa;
            if (t !== null) throw t
        }
    }

    function Yi(t, e, n, i) {
        br = !1;
        var s = t.updateQueue;
        Nn = !1;
        var u = s.firstBaseUpdate,
            d = s.lastBaseUpdate,
            v = s.shared.pending;
        if (v !== null) {
            s.shared.pending = null;
            var T = v,
                N = T.next;
            T.next = null, d === null ? u = N : d.next = N, d = T;
            var D = t.alternate;
            D !== null && (D = D.updateQueue, v = D.lastBaseUpdate, v !== d && (v === null ? D.firstBaseUpdate = N : v.next = N, D.lastBaseUpdate = T))
        }
        if (u !== null) {
            var V = s.baseState;
            d = 0, D = N = T = null, v = u;
            do {
                var C = v.lane & -536870913,
                    _ = C !== v.lane;
                if (_ ? (ht & C) === C : (i & C) === C) {
                    C !== 0 && C === Ga && (br = !0), D !== null && (D = D.next = {
                        lane: 0,
                        tag: v.tag,
                        payload: v.payload,
                        callback: null,
                        next: null
                    });
                    t: {
                        var F = t,
                            at = v;C = e;
                        var Mt = n;
                        switch (at.tag) {
                            case 1:
                                if (F = at.payload, typeof F == "function") {
                                    V = F.call(Mt, V, C);
                                    break t
                                }
                                V = F;
                                break t;
                            case 3:
                                F.flags = F.flags & -65537 | 128;
                            case 0:
                                if (F = at.payload, C = typeof F == "function" ? F.call(Mt, V, C) : F, C == null) break t;
                                V = x({}, V, C);
                                break t;
                            case 2:
                                Nn = !0
                        }
                    }
                    C = v.callback, C !== null && (t.flags |= 64, _ && (t.flags |= 8192), _ = s.callbacks, _ === null ? s.callbacks = [C] : _.push(C))
                } else _ = {
                    lane: C,
                    tag: v.tag,
                    payload: v.payload,
                    callback: v.callback,
                    next: null
                }, D === null ? (N = D = _, T = V) : D = D.next = _, d |= C;
                if (v = v.next, v === null) {
                    if (v = s.shared.pending, v === null) break;
                    _ = v, v = _.next, _.next = null, s.lastBaseUpdate = _, s.shared.pending = null
                }
            } while (!0);
            D === null && (T = V), s.baseState = T, s.firstBaseUpdate = N, s.lastBaseUpdate = D, u === null && (s.shared.lanes = 0), On |= d, t.lanes = d, t.memoizedState = V
        }
    }

    function Vd(t, e) {
        if (typeof t != "function") throw Error(r(191, t));
        t.call(e)
    }

    function Bd(t, e) {
        var n = t.callbacks;
        if (n !== null)
            for (t.callbacks = null, t = 0; t < n.length; t++) Vd(n[t], e)
    }
    var Ka = w(null),
        os = w(0);

    function Ud(t, e) {
        t = yn, K(os, t), K(Ka, e), yn = t | e.baseLanes
    }

    function xr() {
        K(os, yn), K(Ka, Ka.current)
    }

    function Sr() {
        yn = os.current, B(Ka), B(os)
    }
    var Te = w(null),
        Oe = null;

    function kn(t) {
        var e = t.alternate;
        K(Lt, Lt.current & 1), K(Te, t), Oe === null && (e === null || Ka.current !== null || e.memoizedState !== null) && (Oe = t)
    }

    function Tr(t) {
        K(Lt, Lt.current), K(Te, t), Oe === null && (Oe = t)
    }

    function Ld(t) {
        t.tag === 22 ? (K(Lt, Lt.current), K(Te, t), Oe === null && (Oe = t)) : Dn()
    }

    function Dn() {
        K(Lt, Lt.current), K(Te, Te.current)
    }

    function Ae(t) {
        B(Te), Oe === t && (Oe = null), B(Lt)
    }
    var Lt = w(0);

    function rs(t) {
        for (var e = t; e !== null;) {
            if (e.tag === 13) {
                var n = e.memoizedState;
                if (n !== null && (n = n.dehydrated, n === null || Nu(n) || Cu(n))) return e
            } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
                if ((e.flags & 128) !== 0) return e
            } else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) return null;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        return null
    }
    var rn = 0,
        st = null,
        wt = null,
        Gt = null,
        us = !1,
        Ja = !1,
        ha = !1,
        cs = 0,
        Gi = 0,
        Fa = null,
        sv = 0;

    function Rt() {
        throw Error(r(321))
    }

    function Ar(t, e) {
        if (e === null) return !1;
        for (var n = 0; n < e.length && n < t.length; n++)
            if (!xe(t[n], e[n])) return !1;
        return !0
    }

    function wr(t, e, n, i, s, u) {
        return rn = u, st = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, z.H = t === null || t.memoizedState === null ? Th : Lr, ha = !1, u = n(i, s), ha = !1, Ja && (u = qd(e, n, i, s)), Hd(t), u
    }

    function Hd(t) {
        z.H = Zi;
        var e = wt !== null && wt.next !== null;
        if (rn = 0, Gt = wt = st = null, us = !1, Gi = 0, Fa = null, e) throw Error(r(300));
        t === null || Xt || (t = t.dependencies, t !== null && ts(t) && (Xt = !0))
    }

    function qd(t, e, n, i) {
        st = t;
        var s = 0;
        do {
            if (Ja && (Fa = null), Gi = 0, Ja = !1, 25 <= s) throw Error(r(301));
            if (s += 1, Gt = wt = null, t.updateQueue != null) {
                var u = t.updateQueue;
                u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0)
            }
            z.H = Ah, u = e(n, i)
        } while (Ja);
        return u
    }

    function ov() {
        var t = z.H,
            e = t.useState()[0];
        return e = typeof e.then == "function" ? Xi(e) : e, t = t.useState()[0], (wt !== null ? wt.memoizedState : null) !== t && (st.flags |= 1024), e
    }

    function jr() {
        var t = cs !== 0;
        return cs = 0, t
    }

    function Mr(t, e, n) {
        e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n
    }

    function Er(t) {
        if (us) {
            for (t = t.memoizedState; t !== null;) {
                var e = t.queue;
                e !== null && (e.pending = null), t = t.next
            }
            us = !1
        }
        rn = 0, Gt = wt = st = null, Ja = !1, Gi = cs = 0, Fa = null
    }

    function se() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Gt === null ? st.memoizedState = Gt = t : Gt = Gt.next = t, Gt
    }

    function Ht() {
        if (wt === null) {
            var t = st.alternate;
            t = t !== null ? t.memoizedState : null
        } else t = wt.next;
        var e = Gt === null ? st.memoizedState : Gt.next;
        if (e !== null) Gt = e, wt = t;
        else {
            if (t === null) throw st.alternate === null ? Error(r(467)) : Error(r(310));
            wt = t, t = {
                memoizedState: wt.memoizedState,
                baseState: wt.baseState,
                baseQueue: wt.baseQueue,
                queue: wt.queue,
                next: null
            }, Gt === null ? st.memoizedState = Gt = t : Gt = Gt.next = t
        }
        return Gt
    }

    function fs() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }

    function Xi(t) {
        var e = Gi;
        return Gi += 1, Fa === null && (Fa = []), t = kd(Fa, t, e), e = st, (Gt === null ? e.memoizedState : Gt.next) === null && (e = e.alternate, z.H = e === null || e.memoizedState === null ? Th : Lr), t
    }

    function ds(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function") return Xi(t);
            if (t.$$typeof === O) return te(t)
        }
        throw Error(r(438, String(t)))
    }

    function Nr(t) {
        var e = null,
            n = st.updateQueue;
        if (n !== null && (e = n.memoCache), e == null) {
            var i = st.alternate;
            i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (e = {
                data: i.data.map(function(s) {
                    return s.slice()
                }),
                index: 0
            })))
        }
        if (e == null && (e = {
                data: [],
                index: 0
            }), n === null && (n = fs(), st.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
            for (n = e.data[e.index] = Array(t), i = 0; i < t; i++) n[i] = At;
        return e.index++, n
    }

    function un(t, e) {
        return typeof e == "function" ? e(t) : e
    }

    function hs(t) {
        var e = Ht();
        return Cr(e, wt, t)
    }

    function Cr(t, e, n) {
        var i = t.queue;
        if (i === null) throw Error(r(311));
        i.lastRenderedReducer = n;
        var s = t.baseQueue,
            u = i.pending;
        if (u !== null) {
            if (s !== null) {
                var d = s.next;
                s.next = u.next, u.next = d
            }
            e.baseQueue = s = u, i.pending = null
        }
        if (u = t.baseState, s === null) t.memoizedState = u;
        else {
            e = s.next;
            var v = d = null,
                T = null,
                N = e,
                D = !1;
            do {
                var V = N.lane & -536870913;
                if (V !== N.lane ? (ht & V) === V : (rn & V) === V) {
                    var C = N.revertLane;
                    if (C === 0) T !== null && (T = T.next = {
                        lane: 0,
                        revertLane: 0,
                        gesture: null,
                        action: N.action,
                        hasEagerState: N.hasEagerState,
                        eagerState: N.eagerState,
                        next: null
                    }), V === Ga && (D = !0);
                    else if ((rn & C) === C) {
                        N = N.next, C === Ga && (D = !0);
                        continue
                    } else V = {
                        lane: 0,
                        revertLane: N.revertLane,
                        gesture: null,
                        action: N.action,
                        hasEagerState: N.hasEagerState,
                        eagerState: N.eagerState,
                        next: null
                    }, T === null ? (v = T = V, d = u) : T = T.next = V, st.lanes |= C, On |= C;
                    V = N.action, ha && n(u, V), u = N.hasEagerState ? N.eagerState : n(u, V)
                } else C = {
                    lane: V,
                    revertLane: N.revertLane,
                    gesture: N.gesture,
                    action: N.action,
                    hasEagerState: N.hasEagerState,
                    eagerState: N.eagerState,
                    next: null
                }, T === null ? (v = T = C, d = u) : T = T.next = C, st.lanes |= V, On |= V;
                N = N.next
            } while (N !== null && N !== e);
            if (T === null ? d = u : T.next = v, !xe(u, t.memoizedState) && (Xt = !0, D && (n = Xa, n !== null))) throw n;
            t.memoizedState = u, t.baseState = d, t.baseQueue = T, i.lastRenderedState = u
        }
        return s === null && (i.lanes = 0), [t.memoizedState, i.dispatch]
    }

    function _r(t) {
        var e = Ht(),
            n = e.queue;
        if (n === null) throw Error(r(311));
        n.lastRenderedReducer = t;
        var i = n.dispatch,
            s = n.pending,
            u = e.memoizedState;
        if (s !== null) {
            n.pending = null;
            var d = s = s.next;
            do u = t(u, d.action), d = d.next; while (d !== s);
            xe(u, e.memoizedState) || (Xt = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), n.lastRenderedState = u
        }
        return [u, i]
    }

    function Yd(t, e, n) {
        var i = st,
            s = Ht(),
            u = pt;
        if (u) {
            if (n === void 0) throw Error(r(407));
            n = n()
        } else n = e();
        var d = !xe((wt || s).memoizedState, n);
        if (d && (s.memoizedState = n, Xt = !0), s = s.queue, zr(Qd.bind(null, i, s, t), [t]), s.getSnapshot !== e || d || Gt !== null && Gt.memoizedState.tag & 1) {
            if (i.flags |= 2048, Wa(9, {
                    destroy: void 0
                }, Xd.bind(null, i, s, n, e), null), Nt === null) throw Error(r(349));
            u || (rn & 127) !== 0 || Gd(i, e, n)
        }
        return n
    }

    function Gd(t, e, n) {
        t.flags |= 16384, t = {
            getSnapshot: e,
            value: n
        }, e = st.updateQueue, e === null ? (e = fs(), st.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t))
    }

    function Xd(t, e, n, i) {
        e.value = n, e.getSnapshot = i, Zd(e) && Kd(t)
    }

    function Qd(t, e, n) {
        return n(function() {
            Zd(e) && Kd(t)
        })
    }

    function Zd(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var n = e();
            return !xe(t, n)
        } catch {
            return !0
        }
    }

    function Kd(t) {
        var e = ia(t, 2);
        e !== null && ye(e, t, 2)
    }

    function kr(t) {
        var e = se();
        if (typeof t == "function") {
            var n = t;
            if (t = n(), ha) {
                Sn(!0);
                try {
                    n()
                } finally {
                    Sn(!1)
                }
            }
        }
        return e.memoizedState = e.baseState = t, e.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: un,
            lastRenderedState: t
        }, e
    }

    function Jd(t, e, n, i) {
        return t.baseState = n, Cr(t, wt, typeof i == "function" ? i : un)
    }

    function rv(t, e, n, i, s) {
        if (ys(t)) throw Error(r(485));
        if (t = e.action, t !== null) {
            var u = {
                payload: s,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(d) {
                    u.listeners.push(d)
                }
            };
            z.T !== null ? n(!0) : u.isTransition = !1, i(u), n = e.pending, n === null ? (u.next = e.pending = u, Fd(e, u)) : (u.next = n.next, e.pending = n.next = u)
        }
    }

    function Fd(t, e) {
        var n = e.action,
            i = e.payload,
            s = t.state;
        if (e.isTransition) {
            var u = z.T,
                d = {};
            z.T = d;
            try {
                var v = n(s, i),
                    T = z.S;
                T !== null && T(d, v), Wd(t, e, v)
            } catch (N) {
                Dr(t, e, N)
            } finally {
                u !== null && d.types !== null && (u.types = d.types), z.T = u
            }
        } else try {
            u = n(s, i), Wd(t, e, u)
        } catch (N) {
            Dr(t, e, N)
        }
    }

    function Wd(t, e, n) {
        n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(i) {
            $d(t, e, i)
        }, function(i) {
            return Dr(t, e, i)
        }) : $d(t, e, n)
    }

    function $d(t, e, n) {
        e.status = "fulfilled", e.value = n, Pd(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, Fd(t, n)))
    }

    function Dr(t, e, n) {
        var i = t.pending;
        if (t.pending = null, i !== null) {
            i = i.next;
            do e.status = "rejected", e.reason = n, Pd(e), e = e.next; while (e !== i)
        }
        t.action = null
    }

    function Pd(t) {
        t = t.listeners;
        for (var e = 0; e < t.length; e++)(0, t[e])()
    }

    function Id(t, e) {
        return e
    }

    function th(t, e) {
        if (pt) {
            var n = Nt.formState;
            if (n !== null) {
                t: {
                    var i = st;
                    if (pt) {
                        if (_t) {
                            e: {
                                for (var s = _t, u = Re; s.nodeType !== 8;) {
                                    if (!u) {
                                        s = null;
                                        break e
                                    }
                                    if (s = Ve(s.nextSibling), s === null) {
                                        s = null;
                                        break e
                                    }
                                }
                                u = s.data,
                                s = u === "F!" || u === "F" ? s : null
                            }
                            if (s) {
                                _t = Ve(s.nextSibling), i = s.data === "F!";
                                break t
                            }
                        }
                        Mn(i)
                    }
                    i = !1
                }
                i && (e = n[0])
            }
        }
        return n = se(), n.memoizedState = n.baseState = e, i = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Id,
            lastRenderedState: e
        }, n.queue = i, n = bh.bind(null, st, i), i.dispatch = n, i = kr(!1), u = Ur.bind(null, st, !1, i.queue), i = se(), s = {
            state: e,
            dispatch: null,
            action: t,
            pending: null
        }, i.queue = s, n = rv.bind(null, st, s, u, n), s.dispatch = n, i.memoizedState = t, [e, n, !1]
    }

    function eh(t) {
        var e = Ht();
        return nh(e, wt, t)
    }

    function nh(t, e, n) {
        if (e = Cr(t, e, Id)[0], t = hs(un)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
            var i = Xi(e)
        } catch (d) {
            throw d === Qa ? as : d
        } else i = e;
        e = Ht();
        var s = e.queue,
            u = s.dispatch;
        return n !== e.memoizedState && (st.flags |= 2048, Wa(9, {
            destroy: void 0
        }, uv.bind(null, s, n), null)), [i, u, t]
    }

    function uv(t, e) {
        t.action = e
    }

    function ah(t) {
        var e = Ht(),
            n = wt;
        if (n !== null) return nh(e, n, t);
        Ht(), e = e.memoizedState, n = Ht();
        var i = n.queue.dispatch;
        return n.memoizedState = t, [e, i, !1]
    }

    function Wa(t, e, n, i) {
        return t = {
            tag: t,
            create: n,
            deps: i,
            inst: e,
            next: null
        }, e = st.updateQueue, e === null && (e = fs(), st.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (i = n.next, n.next = t, t.next = i, e.lastEffect = t), t
    }

    function ih() {
        return Ht().memoizedState
    }

    function ms(t, e, n, i) {
        var s = se();
        st.flags |= t, s.memoizedState = Wa(1 | e, {
            destroy: void 0
        }, n, i === void 0 ? null : i)
    }

    function ps(t, e, n, i) {
        var s = Ht();
        i = i === void 0 ? null : i;
        var u = s.memoizedState.inst;
        wt !== null && i !== null && Ar(i, wt.memoizedState.deps) ? s.memoizedState = Wa(e, u, n, i) : (st.flags |= t, s.memoizedState = Wa(1 | e, u, n, i))
    }

    function lh(t, e) {
        ms(8390656, 8, t, e)
    }

    function zr(t, e) {
        ps(2048, 8, t, e)
    }

    function cv(t) {
        st.flags |= 4;
        var e = st.updateQueue;
        if (e === null) e = fs(), st.updateQueue = e, e.events = [t];
        else {
            var n = e.events;
            n === null ? e.events = [t] : n.push(t)
        }
    }

    function sh(t) {
        var e = Ht().memoizedState;
        return cv({
                ref: e,
                nextImpl: t
            }),
            function() {
                if ((bt & 2) !== 0) throw Error(r(440));
                return e.impl.apply(void 0, arguments)
            }
    }

    function oh(t, e) {
        return ps(4, 2, t, e)
    }

    function rh(t, e) {
        return ps(4, 4, t, e)
    }

    function uh(t, e) {
        if (typeof e == "function") {
            t = t();
            var n = e(t);
            return function() {
                typeof n == "function" ? n() : e(null)
            }
        }
        if (e != null) return t = t(), e.current = t,
            function() {
                e.current = null
            }
    }

    function ch(t, e, n) {
        n = n != null ? n.concat([t]) : null, ps(4, 4, uh.bind(null, e, t), n)
    }

    function Rr() {}

    function fh(t, e) {
        var n = Ht();
        e = e === void 0 ? null : e;
        var i = n.memoizedState;
        return e !== null && Ar(e, i[1]) ? i[0] : (n.memoizedState = [t, e], t)
    }

    function dh(t, e) {
        var n = Ht();
        e = e === void 0 ? null : e;
        var i = n.memoizedState;
        if (e !== null && Ar(e, i[1])) return i[0];
        if (i = t(), ha) {
            Sn(!0);
            try {
                t()
            } finally {
                Sn(!1)
            }
        }
        return n.memoizedState = [i, e], i
    }

    function Or(t, e, n) {
        return n === void 0 || (rn & 1073741824) !== 0 && (ht & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = h0(), st.lanes |= t, On |= t, n)
    }

    function hh(t, e, n, i) {
        return xe(n, e) ? n : Ka.current !== null ? (t = Or(t, n, i), xe(t, e) || (Xt = !0), t) : (rn & 42) === 0 || (rn & 1073741824) !== 0 && (ht & 261930) === 0 ? (Xt = !0, t.memoizedState = n) : (t = h0(), st.lanes |= t, On |= t, e)
    }

    function mh(t, e, n, i, s) {
        var u = X.p;
        X.p = u !== 0 && 8 > u ? u : 8;
        var d = z.T,
            v = {};
        z.T = v, Ur(t, !1, e, n);
        try {
            var T = s(),
                N = z.S;
            if (N !== null && N(v, T), T !== null && typeof T == "object" && typeof T.then == "function") {
                var D = lv(T, i);
                Qi(t, e, D, Me(t))
            } else Qi(t, e, i, Me(t))
        } catch (V) {
            Qi(t, e, {
                then: function() {},
                status: "rejected",
                reason: V
            }, Me())
        } finally {
            X.p = u, d !== null && v.types !== null && (d.types = v.types), z.T = d
        }
    }

    function fv() {}

    function Vr(t, e, n, i) {
        if (t.tag !== 5) throw Error(r(476));
        var s = ph(t).queue;
        mh(t, s, e, I, n === null ? fv : function() {
            return yh(t), n(i)
        })
    }

    function ph(t) {
        var e = t.memoizedState;
        if (e !== null) return e;
        e = {
            memoizedState: I,
            baseState: I,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: un,
                lastRenderedState: I
            },
            next: null
        };
        var n = {};
        return e.next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: un,
                lastRenderedState: n
            },
            next: null
        }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e
    }

    function yh(t) {
        var e = ph(t);
        e.next === null && (e = t.alternate.memoizedState), Qi(t, e.next.queue, {}, Me())
    }

    function Br() {
        return te(rl)
    }

    function gh() {
        return Ht().memoizedState
    }

    function vh() {
        return Ht().memoizedState
    }

    function dv(t) {
        for (var e = t.return; e !== null;) {
            switch (e.tag) {
                case 24:
                case 3:
                    var n = Me();
                    t = Cn(n);
                    var i = _n(e, t, n);
                    i !== null && (ye(i, e, n), Hi(i, e, n)), e = {
                        cache: dr()
                    }, t.payload = e;
                    return
            }
            e = e.return
        }
    }

    function hv(t, e, n) {
        var i = Me();
        n = {
            lane: i,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, ys(t) ? xh(e, n) : (n = er(t, e, n, i), n !== null && (ye(n, t, i), Sh(n, e, i)))
    }

    function bh(t, e, n) {
        var i = Me();
        Qi(t, e, n, i)
    }

    function Qi(t, e, n, i) {
        var s = {
            lane: i,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (ys(t)) xh(e, s);
        else {
            var u = t.alternate;
            if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null)) try {
                var d = e.lastRenderedState,
                    v = u(d, n);
                if (s.hasEagerState = !0, s.eagerState = v, xe(v, d)) return Wl(t, e, s, 0), Nt === null && Fl(), !1
            } catch {} finally {}
            if (n = er(t, e, s, i), n !== null) return ye(n, t, i), Sh(n, e, i), !0
        }
        return !1
    }

    function Ur(t, e, n, i) {
        if (i = {
                lane: 2,
                revertLane: yu(),
                gesture: null,
                action: i,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, ys(t)) {
            if (e) throw Error(r(479))
        } else e = er(t, n, i, 2), e !== null && ye(e, t, 2)
    }

    function ys(t) {
        var e = t.alternate;
        return t === st || e !== null && e === st
    }

    function xh(t, e) {
        Ja = us = !0;
        var n = t.pending;
        n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e
    }

    function Sh(t, e, n) {
        if ((n & 4194048) !== 0) {
            var i = e.lanes;
            i &= t.pendingLanes, n |= i, e.lanes = n, Mf(t, n)
        }
    }
    var Zi = {
        readContext: te,
        use: ds,
        useCallback: Rt,
        useContext: Rt,
        useEffect: Rt,
        useImperativeHandle: Rt,
        useLayoutEffect: Rt,
        useInsertionEffect: Rt,
        useMemo: Rt,
        useReducer: Rt,
        useRef: Rt,
        useState: Rt,
        useDebugValue: Rt,
        useDeferredValue: Rt,
        useTransition: Rt,
        useSyncExternalStore: Rt,
        useId: Rt,
        useHostTransitionStatus: Rt,
        useFormState: Rt,
        useActionState: Rt,
        useOptimistic: Rt,
        useMemoCache: Rt,
        useCacheRefresh: Rt
    };
    Zi.useEffectEvent = Rt;
    var Th = {
            readContext: te,
            use: ds,
            useCallback: function(t, e) {
                return se().memoizedState = [t, e === void 0 ? null : e], t
            },
            useContext: te,
            useEffect: lh,
            useImperativeHandle: function(t, e, n) {
                n = n != null ? n.concat([t]) : null, ms(4194308, 4, uh.bind(null, e, t), n)
            },
            useLayoutEffect: function(t, e) {
                return ms(4194308, 4, t, e)
            },
            useInsertionEffect: function(t, e) {
                ms(4, 2, t, e)
            },
            useMemo: function(t, e) {
                var n = se();
                e = e === void 0 ? null : e;
                var i = t();
                if (ha) {
                    Sn(!0);
                    try {
                        t()
                    } finally {
                        Sn(!1)
                    }
                }
                return n.memoizedState = [i, e], i
            },
            useReducer: function(t, e, n) {
                var i = se();
                if (n !== void 0) {
                    var s = n(e);
                    if (ha) {
                        Sn(!0);
                        try {
                            n(e)
                        } finally {
                            Sn(!1)
                        }
                    }
                } else s = e;
                return i.memoizedState = i.baseState = s, t = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: t,
                    lastRenderedState: s
                }, i.queue = t, t = t.dispatch = hv.bind(null, st, t), [i.memoizedState, t]
            },
            useRef: function(t) {
                var e = se();
                return t = {
                    current: t
                }, e.memoizedState = t
            },
            useState: function(t) {
                t = kr(t);
                var e = t.queue,
                    n = bh.bind(null, st, e);
                return e.dispatch = n, [t.memoizedState, n]
            },
            useDebugValue: Rr,
            useDeferredValue: function(t, e) {
                var n = se();
                return Or(n, t, e)
            },
            useTransition: function() {
                var t = kr(!1);
                return t = mh.bind(null, st, t.queue, !0, !1), se().memoizedState = t, [!1, t]
            },
            useSyncExternalStore: function(t, e, n) {
                var i = st,
                    s = se();
                if (pt) {
                    if (n === void 0) throw Error(r(407));
                    n = n()
                } else {
                    if (n = e(), Nt === null) throw Error(r(349));
                    (ht & 127) !== 0 || Gd(i, e, n)
                }
                s.memoizedState = n;
                var u = {
                    value: n,
                    getSnapshot: e
                };
                return s.queue = u, lh(Qd.bind(null, i, u, t), [t]), i.flags |= 2048, Wa(9, {
                    destroy: void 0
                }, Xd.bind(null, i, u, n, e), null), n
            },
            useId: function() {
                var t = se(),
                    e = Nt.identifierPrefix;
                if (pt) {
                    var n = Ke,
                        i = Ze;
                    n = (i & ~(1 << 32 - be(i) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = cs++, 0 < n && (e += "H" + n.toString(32)), e += "_"
                } else n = sv++, e = "_" + e + "r_" + n.toString(32) + "_";
                return t.memoizedState = e
            },
            useHostTransitionStatus: Br,
            useFormState: th,
            useActionState: th,
            useOptimistic: function(t) {
                var e = se();
                e.memoizedState = e.baseState = t;
                var n = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return e.queue = n, e = Ur.bind(null, st, !0, n), n.dispatch = e, [t, e]
            },
            useMemoCache: Nr,
            useCacheRefresh: function() {
                return se().memoizedState = dv.bind(null, st)
            },
            useEffectEvent: function(t) {
                var e = se(),
                    n = {
                        impl: t
                    };
                return e.memoizedState = n,
                    function() {
                        if ((bt & 2) !== 0) throw Error(r(440));
                        return n.impl.apply(void 0, arguments)
                    }
            }
        },
        Lr = {
            readContext: te,
            use: ds,
            useCallback: fh,
            useContext: te,
            useEffect: zr,
            useImperativeHandle: ch,
            useInsertionEffect: oh,
            useLayoutEffect: rh,
            useMemo: dh,
            useReducer: hs,
            useRef: ih,
            useState: function() {
                return hs(un)
            },
            useDebugValue: Rr,
            useDeferredValue: function(t, e) {
                var n = Ht();
                return hh(n, wt.memoizedState, t, e)
            },
            useTransition: function() {
                var t = hs(un)[0],
                    e = Ht().memoizedState;
                return [typeof t == "boolean" ? t : Xi(t), e]
            },
            useSyncExternalStore: Yd,
            useId: gh,
            useHostTransitionStatus: Br,
            useFormState: eh,
            useActionState: eh,
            useOptimistic: function(t, e) {
                var n = Ht();
                return Jd(n, wt, t, e)
            },
            useMemoCache: Nr,
            useCacheRefresh: vh
        };
    Lr.useEffectEvent = sh;
    var Ah = {
        readContext: te,
        use: ds,
        useCallback: fh,
        useContext: te,
        useEffect: zr,
        useImperativeHandle: ch,
        useInsertionEffect: oh,
        useLayoutEffect: rh,
        useMemo: dh,
        useReducer: _r,
        useRef: ih,
        useState: function() {
            return _r(un)
        },
        useDebugValue: Rr,
        useDeferredValue: function(t, e) {
            var n = Ht();
            return wt === null ? Or(n, t, e) : hh(n, wt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = _r(un)[0],
                e = Ht().memoizedState;
            return [typeof t == "boolean" ? t : Xi(t), e]
        },
        useSyncExternalStore: Yd,
        useId: gh,
        useHostTransitionStatus: Br,
        useFormState: ah,
        useActionState: ah,
        useOptimistic: function(t, e) {
            var n = Ht();
            return wt !== null ? Jd(n, wt, t, e) : (n.baseState = t, [t, n.queue.dispatch])
        },
        useMemoCache: Nr,
        useCacheRefresh: vh
    };
    Ah.useEffectEvent = sh;

    function Hr(t, e, n, i) {
        e = t.memoizedState, n = n(i, e), n = n == null ? e : x({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n)
    }
    var qr = {
        enqueueSetState: function(t, e, n) {
            t = t._reactInternals;
            var i = Me(),
                s = Cn(i);
            s.payload = e, n != null && (s.callback = n), e = _n(t, s, i), e !== null && (ye(e, t, i), Hi(e, t, i))
        },
        enqueueReplaceState: function(t, e, n) {
            t = t._reactInternals;
            var i = Me(),
                s = Cn(i);
            s.tag = 1, s.payload = e, n != null && (s.callback = n), e = _n(t, s, i), e !== null && (ye(e, t, i), Hi(e, t, i))
        },
        enqueueForceUpdate: function(t, e) {
            t = t._reactInternals;
            var n = Me(),
                i = Cn(n);
            i.tag = 2, e != null && (i.callback = e), e = _n(t, i, n), e !== null && (ye(e, t, n), Hi(e, t, n))
        }
    };

    function wh(t, e, n, i, s, u, d) {
        return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(i, u, d) : e.prototype && e.prototype.isPureReactComponent ? !Di(n, i) || !Di(s, u) : !0
    }

    function jh(t, e, n, i) {
        t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, i), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, i), e.state !== t && qr.enqueueReplaceState(e, e.state, null)
    }

    function ma(t, e) {
        var n = e;
        if ("ref" in e) {
            n = {};
            for (var i in e) i !== "ref" && (n[i] = e[i])
        }
        if (t = t.defaultProps) {
            n === e && (n = x({}, n));
            for (var s in t) n[s] === void 0 && (n[s] = t[s])
        }
        return n
    }

    function Mh(t) {
        Jl(t)
    }

    function Eh(t) {
        console.error(t)
    }

    function Nh(t) {
        Jl(t)
    }

    function gs(t, e) {
        try {
            var n = t.onUncaughtError;
            n(e.value, {
                componentStack: e.stack
            })
        } catch (i) {
            setTimeout(function() {
                throw i
            })
        }
    }

    function Ch(t, e, n) {
        try {
            var i = t.onCaughtError;
            i(n.value, {
                componentStack: n.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null
            })
        } catch (s) {
            setTimeout(function() {
                throw s
            })
        }
    }

    function Yr(t, e, n) {
        return n = Cn(n), n.tag = 3, n.payload = {
            element: null
        }, n.callback = function() {
            gs(t, e)
        }, n
    }

    function _h(t) {
        return t = Cn(t), t.tag = 3, t
    }

    function kh(t, e, n, i) {
        var s = n.type.getDerivedStateFromError;
        if (typeof s == "function") {
            var u = i.value;
            t.payload = function() {
                return s(u)
            }, t.callback = function() {
                Ch(e, n, i)
            }
        }
        var d = n.stateNode;
        d !== null && typeof d.componentDidCatch == "function" && (t.callback = function() {
            Ch(e, n, i), typeof s != "function" && (Vn === null ? Vn = new Set([this]) : Vn.add(this));
            var v = i.stack;
            this.componentDidCatch(i.value, {
                componentStack: v !== null ? v : ""
            })
        })
    }

    function mv(t, e, n, i, s) {
        if (n.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
            if (e = n.alternate, e !== null && Ya(e, n, s, !0), n = Te.current, n !== null) {
                switch (n.tag) {
                    case 31:
                    case 13:
                        return Oe === null ? Cs() : n.alternate === null && Ot === 0 && (Ot = 3), n.flags &= -257, n.flags |= 65536, n.lanes = s, i === is ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = new Set([i]) : e.add(i), hu(t, i, s)), !1;
                    case 22:
                        return n.flags |= 65536, i === is ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([i])
                        }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = new Set([i]) : n.add(i)), hu(t, i, s)), !1
                }
                throw Error(r(435, n.tag))
            }
            return hu(t, i, s), Cs(), !1
        }
        if (pt) return e = Te.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = s, i !== or && (t = Error(r(422), {
            cause: i
        }), Oi(ke(t, n)))) : (i !== or && (e = Error(r(423), {
            cause: i
        }), Oi(ke(e, n))), t = t.current.alternate, t.flags |= 65536, s &= -s, t.lanes |= s, i = ke(i, n), s = Yr(t.stateNode, i, s), vr(t, s), Ot !== 4 && (Ot = 2)), !1;
        var u = Error(r(520), {
            cause: i
        });
        if (u = ke(u, n), tl === null ? tl = [u] : tl.push(u), Ot !== 4 && (Ot = 2), e === null) return !0;
        i = ke(i, n), n = e;
        do {
            switch (n.tag) {
                case 3:
                    return n.flags |= 65536, t = s & -s, n.lanes |= t, t = Yr(n.stateNode, i, t), vr(n, t), !1;
                case 1:
                    if (e = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Vn === null || !Vn.has(u)))) return n.flags |= 65536, s &= -s, n.lanes |= s, s = _h(s), kh(s, t, n, i), vr(n, s), !1
            }
            n = n.return
        } while (n !== null);
        return !1
    }
    var Gr = Error(r(461)),
        Xt = !1;

    function ee(t, e, n, i) {
        e.child = t === null ? Od(e, null, n, i) : da(e, t.child, n, i)
    }

    function Dh(t, e, n, i, s) {
        n = n.render;
        var u = e.ref;
        if ("ref" in i) {
            var d = {};
            for (var v in i) v !== "ref" && (d[v] = i[v])
        } else d = i;
        return ra(e), i = wr(t, e, n, d, u, s), v = jr(), t !== null && !Xt ? (Mr(t, e, s), cn(t, e, s)) : (pt && v && lr(e), e.flags |= 1, ee(t, e, i, s), e.child)
    }

    function zh(t, e, n, i, s) {
        if (t === null) {
            var u = n.type;
            return typeof u == "function" && !nr(u) && u.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = u, Rh(t, e, u, i, s)) : (t = Pl(n.type, null, i, e, e.mode, s), t.ref = e.ref, t.return = e, e.child = t)
        }
        if (u = t.child, !$r(t, s)) {
            var d = u.memoizedProps;
            if (n = n.compare, n = n !== null ? n : Di, n(d, i) && t.ref === e.ref) return cn(t, e, s)
        }
        return e.flags |= 1, t = an(u, i), t.ref = e.ref, t.return = e, e.child = t
    }

    function Rh(t, e, n, i, s) {
        if (t !== null) {
            var u = t.memoizedProps;
            if (Di(u, i) && t.ref === e.ref)
                if (Xt = !1, e.pendingProps = i = u, $r(t, s))(t.flags & 131072) !== 0 && (Xt = !0);
                else return e.lanes = t.lanes, cn(t, e, s)
        }
        return Xr(t, e, n, i, s)
    }

    function Oh(t, e, n, i) {
        var s = i.children,
            u = t !== null ? t.memoizedState : null;
        if (t === null && e.stateNode === null && (e.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }), i.mode === "hidden") {
            if ((e.flags & 128) !== 0) {
                if (u = u !== null ? u.baseLanes | n : n, t !== null) {
                    for (i = e.child = t.child, s = 0; i !== null;) s = s | i.lanes | i.childLanes, i = i.sibling;
                    i = s & ~u
                } else i = 0, e.child = null;
                return Vh(t, e, u, n, i)
            }
            if ((n & 536870912) !== 0) e.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, t !== null && ns(e, u !== null ? u.cachePool : null), u !== null ? Ud(e, u) : xr(), Ld(e);
            else return i = e.lanes = 536870912, Vh(t, e, u !== null ? u.baseLanes | n : n, n, i)
        } else u !== null ? (ns(e, u.cachePool), Ud(e, u), Dn(), e.memoizedState = null) : (t !== null && ns(e, null), xr(), Dn());
        return ee(t, e, s, n), e.child
    }

    function Ki(t, e) {
        return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }), e.sibling
    }

    function Vh(t, e, n, i, s) {
        var u = mr();
        return u = u === null ? null : {
            parent: Yt._currentValue,
            pool: u
        }, e.memoizedState = {
            baseLanes: n,
            cachePool: u
        }, t !== null && ns(e, null), xr(), Ld(e), t !== null && Ya(t, e, i, !0), e.childLanes = s, null
    }

    function vs(t, e) {
        return e = xs({
            mode: e.mode,
            children: e.children
        }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e
    }

    function Bh(t, e, n) {
        return da(e, t.child, null, n), t = vs(e, e.pendingProps), t.flags |= 2, Ae(e), e.memoizedState = null, t
    }

    function pv(t, e, n) {
        var i = e.pendingProps,
            s = (e.flags & 128) !== 0;
        if (e.flags &= -129, t === null) {
            if (pt) {
                if (i.mode === "hidden") return t = vs(e, i), e.lanes = 536870912, Ki(null, t);
                if (Tr(e), (t = _t) ? (t = F0(t, Re), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
                        dehydrated: t,
                        treeContext: wn !== null ? {
                            id: Ze,
                            overflow: Ke
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, n = xd(t), n.return = e, e.child = n, It = e, _t = null)) : t = null, t === null) throw Mn(e);
                return e.lanes = 536870912, null
            }
            return vs(e, i)
        }
        var u = t.memoizedState;
        if (u !== null) {
            var d = u.dehydrated;
            if (Tr(e), s)
                if (e.flags & 256) e.flags &= -257, e = Bh(t, e, n);
                else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
            else throw Error(r(558));
            else if (Xt || Ya(t, e, n, !1), s = (n & t.childLanes) !== 0, Xt || s) {
                if (i = Nt, i !== null && (d = Ef(i, n), d !== 0 && d !== u.retryLane)) throw u.retryLane = d, ia(t, d), ye(i, t, d), Gr;
                Cs(), e = Bh(t, e, n)
            } else t = u.treeContext, _t = Ve(d.nextSibling), It = e, pt = !0, jn = null, Re = !1, t !== null && Ad(e, t), e = vs(e, i), e.flags |= 4096;
            return e
        }
        return t = an(t.child, {
            mode: i.mode,
            children: i.children
        }), t.ref = e.ref, e.child = t, t.return = e, t
    }

    function bs(t, e) {
        var n = e.ref;
        if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
        else {
            if (typeof n != "function" && typeof n != "object") throw Error(r(284));
            (t === null || t.ref !== n) && (e.flags |= 4194816)
        }
    }

    function Xr(t, e, n, i, s) {
        return ra(e), n = wr(t, e, n, i, void 0, s), i = jr(), t !== null && !Xt ? (Mr(t, e, s), cn(t, e, s)) : (pt && i && lr(e), e.flags |= 1, ee(t, e, n, s), e.child)
    }

    function Uh(t, e, n, i, s, u) {
        return ra(e), e.updateQueue = null, n = qd(e, i, n, s), Hd(t), i = jr(), t !== null && !Xt ? (Mr(t, e, u), cn(t, e, u)) : (pt && i && lr(e), e.flags |= 1, ee(t, e, n, u), e.child)
    }

    function Lh(t, e, n, i, s) {
        if (ra(e), e.stateNode === null) {
            var u = Ua,
                d = n.contextType;
            typeof d == "object" && d !== null && (u = te(d)), u = new n(i, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = qr, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = i, u.state = e.memoizedState, u.refs = {}, yr(e), d = n.contextType, u.context = typeof d == "object" && d !== null ? te(d) : Ua, u.state = e.memoizedState, d = n.getDerivedStateFromProps, typeof d == "function" && (Hr(e, n, d, i), u.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (d = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), d !== u.state && qr.enqueueReplaceState(u, u.state, null), Yi(e, i, u, s), qi(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), i = !0
        } else if (t === null) {
            u = e.stateNode;
            var v = e.memoizedProps,
                T = ma(n, v);
            u.props = T;
            var N = u.context,
                D = n.contextType;
            d = Ua, typeof D == "object" && D !== null && (d = te(D));
            var V = n.getDerivedStateFromProps;
            D = typeof V == "function" || typeof u.getSnapshotBeforeUpdate == "function", v = e.pendingProps !== v, D || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (v || N !== d) && jh(e, u, i, d), Nn = !1;
            var C = e.memoizedState;
            u.state = C, Yi(e, i, u, s), qi(), N = e.memoizedState, v || C !== N || Nn ? (typeof V == "function" && (Hr(e, n, V, i), N = e.memoizedState), (T = Nn || wh(e, n, T, i, C, N, d)) ? (D || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = i, e.memoizedState = N), u.props = i, u.state = N, u.context = d, i = T) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), i = !1)
        } else {
            u = e.stateNode, gr(t, e), d = e.memoizedProps, D = ma(n, d), u.props = D, V = e.pendingProps, C = u.context, N = n.contextType, T = Ua, typeof N == "object" && N !== null && (T = te(N)), v = n.getDerivedStateFromProps, (N = typeof v == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (d !== V || C !== T) && jh(e, u, i, T), Nn = !1, C = e.memoizedState, u.state = C, Yi(e, i, u, s), qi();
            var _ = e.memoizedState;
            d !== V || C !== _ || Nn || t !== null && t.dependencies !== null && ts(t.dependencies) ? (typeof v == "function" && (Hr(e, n, v, i), _ = e.memoizedState), (D = Nn || wh(e, n, D, i, C, _, T) || t !== null && t.dependencies !== null && ts(t.dependencies)) ? (N || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(i, _, T), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(i, _, T)), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || d === t.memoizedProps && C === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && C === t.memoizedState || (e.flags |= 1024), e.memoizedProps = i, e.memoizedState = _), u.props = i, u.state = _, u.context = T, i = D) : (typeof u.componentDidUpdate != "function" || d === t.memoizedProps && C === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && C === t.memoizedState || (e.flags |= 1024), i = !1)
        }
        return u = i, bs(t, e), i = (e.flags & 128) !== 0, u || i ? (u = e.stateNode, n = i && typeof n.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && i ? (e.child = da(e, t.child, null, s), e.child = da(e, null, n, s)) : ee(t, e, n, s), e.memoizedState = u.state, t = e.child) : t = cn(t, e, s), t
    }

    function Hh(t, e, n, i) {
        return sa(), e.flags |= 256, ee(t, e, n, i), e.child
    }
    var Qr = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function Zr(t) {
        return {
            baseLanes: t,
            cachePool: Cd()
        }
    }

    function Kr(t, e, n) {
        return t = t !== null ? t.childLanes & ~n : 0, e && (t |= je), t
    }

    function qh(t, e, n) {
        var i = e.pendingProps,
            s = !1,
            u = (e.flags & 128) !== 0,
            d;
        if ((d = u) || (d = t !== null && t.memoizedState === null ? !1 : (Lt.current & 2) !== 0), d && (s = !0, e.flags &= -129), d = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
            if (pt) {
                if (s ? kn(e) : Dn(), (t = _t) ? (t = F0(t, Re), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
                        dehydrated: t,
                        treeContext: wn !== null ? {
                            id: Ze,
                            overflow: Ke
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, n = xd(t), n.return = e, e.child = n, It = e, _t = null)) : t = null, t === null) throw Mn(e);
                return Cu(t) ? e.lanes = 32 : e.lanes = 536870912, null
            }
            var v = i.children;
            return i = i.fallback, s ? (Dn(), s = e.mode, v = xs({
                mode: "hidden",
                children: v
            }, s), i = la(i, s, n, null), v.return = e, i.return = e, v.sibling = i, e.child = v, i = e.child, i.memoizedState = Zr(n), i.childLanes = Kr(t, d, n), e.memoizedState = Qr, Ki(null, i)) : (kn(e), Jr(e, v))
        }
        var T = t.memoizedState;
        if (T !== null && (v = T.dehydrated, v !== null)) {
            if (u) e.flags & 256 ? (kn(e), e.flags &= -257, e = Fr(t, e, n)) : e.memoizedState !== null ? (Dn(), e.child = t.child, e.flags |= 128, e = null) : (Dn(), v = i.fallback, s = e.mode, i = xs({
                mode: "visible",
                children: i.children
            }, s), v = la(v, s, n, null), v.flags |= 2, i.return = e, v.return = e, i.sibling = v, e.child = i, da(e, t.child, null, n), i = e.child, i.memoizedState = Zr(n), i.childLanes = Kr(t, d, n), e.memoizedState = Qr, e = Ki(null, i));
            else if (kn(e), Cu(v)) {
                if (d = v.nextSibling && v.nextSibling.dataset, d) var N = d.dgst;
                d = N, i = Error(r(419)), i.stack = "", i.digest = d, Oi({
                    value: i,
                    source: null,
                    stack: null
                }), e = Fr(t, e, n)
            } else if (Xt || Ya(t, e, n, !1), d = (n & t.childLanes) !== 0, Xt || d) {
                if (d = Nt, d !== null && (i = Ef(d, n), i !== 0 && i !== T.retryLane)) throw T.retryLane = i, ia(t, i), ye(d, t, i), Gr;
                Nu(v) || Cs(), e = Fr(t, e, n)
            } else Nu(v) ? (e.flags |= 192, e.child = t.child, e = null) : (t = T.treeContext, _t = Ve(v.nextSibling), It = e, pt = !0, jn = null, Re = !1, t !== null && Ad(e, t), e = Jr(e, i.children), e.flags |= 4096);
            return e
        }
        return s ? (Dn(), v = i.fallback, s = e.mode, T = t.child, N = T.sibling, i = an(T, {
            mode: "hidden",
            children: i.children
        }), i.subtreeFlags = T.subtreeFlags & 65011712, N !== null ? v = an(N, v) : (v = la(v, s, n, null), v.flags |= 2), v.return = e, i.return = e, i.sibling = v, e.child = i, Ki(null, i), i = e.child, v = t.child.memoizedState, v === null ? v = Zr(n) : (s = v.cachePool, s !== null ? (T = Yt._currentValue, s = s.parent !== T ? {
            parent: T,
            pool: T
        } : s) : s = Cd(), v = {
            baseLanes: v.baseLanes | n,
            cachePool: s
        }), i.memoizedState = v, i.childLanes = Kr(t, d, n), e.memoizedState = Qr, Ki(t.child, i)) : (kn(e), n = t.child, t = n.sibling, n = an(n, {
            mode: "visible",
            children: i.children
        }), n.return = e, n.sibling = null, t !== null && (d = e.deletions, d === null ? (e.deletions = [t], e.flags |= 16) : d.push(t)), e.child = n, e.memoizedState = null, n)
    }

    function Jr(t, e) {
        return e = xs({
            mode: "visible",
            children: e
        }, t.mode), e.return = t, t.child = e
    }

    function xs(t, e) {
        return t = Se(22, t, null, e), t.lanes = 0, t
    }

    function Fr(t, e, n) {
        return da(e, t.child, null, n), t = Jr(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t
    }

    function Yh(t, e, n) {
        t.lanes |= e;
        var i = t.alternate;
        i !== null && (i.lanes |= e), cr(t.return, e, n)
    }

    function Wr(t, e, n, i, s, u) {
        var d = t.memoizedState;
        d === null ? t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: i,
            tail: n,
            tailMode: s,
            treeForkCount: u
        } : (d.isBackwards = e, d.rendering = null, d.renderingStartTime = 0, d.last = i, d.tail = n, d.tailMode = s, d.treeForkCount = u)
    }

    function Gh(t, e, n) {
        var i = e.pendingProps,
            s = i.revealOrder,
            u = i.tail;
        i = i.children;
        var d = Lt.current,
            v = (d & 2) !== 0;
        if (v ? (d = d & 1 | 2, e.flags |= 128) : d &= 1, K(Lt, d), ee(t, e, i, n), i = pt ? Ri : 0, !v && t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null;) {
            if (t.tag === 13) t.memoizedState !== null && Yh(t, n, e);
            else if (t.tag === 19) Yh(t, n, e);
            else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break t;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) break t;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        switch (s) {
            case "forwards":
                for (n = e.child, s = null; n !== null;) t = n.alternate, t !== null && rs(t) === null && (s = n), n = n.sibling;
                n = s, n === null ? (s = e.child, e.child = null) : (s = n.sibling, n.sibling = null), Wr(e, !1, s, n, u, i);
                break;
            case "backwards":
            case "unstable_legacy-backwards":
                for (n = null, s = e.child, e.child = null; s !== null;) {
                    if (t = s.alternate, t !== null && rs(t) === null) {
                        e.child = s;
                        break
                    }
                    t = s.sibling, s.sibling = n, n = s, s = t
                }
                Wr(e, !0, n, null, u, i);
                break;
            case "together":
                Wr(e, !1, null, null, void 0, i);
                break;
            default:
                e.memoizedState = null
        }
        return e.child
    }

    function cn(t, e, n) {
        if (t !== null && (e.dependencies = t.dependencies), On |= e.lanes, (n & e.childLanes) === 0)
            if (t !== null) {
                if (Ya(t, e, n, !1), (n & e.childLanes) === 0) return null
            } else return null;
        if (t !== null && e.child !== t.child) throw Error(r(153));
        if (e.child !== null) {
            for (t = e.child, n = an(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null;) t = t.sibling, n = n.sibling = an(t, t.pendingProps), n.return = e;
            n.sibling = null
        }
        return e.child
    }

    function $r(t, e) {
        return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && ts(t)))
    }

    function yv(t, e, n) {
        switch (e.tag) {
            case 3:
                le(e, e.stateNode.containerInfo), En(e, Yt, t.memoizedState.cache), sa();
                break;
            case 27:
            case 5:
                bi(e);
                break;
            case 4:
                le(e, e.stateNode.containerInfo);
                break;
            case 10:
                En(e, e.type, e.memoizedProps.value);
                break;
            case 31:
                if (e.memoizedState !== null) return e.flags |= 128, Tr(e), null;
                break;
            case 13:
                var i = e.memoizedState;
                if (i !== null) return i.dehydrated !== null ? (kn(e), e.flags |= 128, null) : (n & e.child.childLanes) !== 0 ? qh(t, e, n) : (kn(e), t = cn(t, e, n), t !== null ? t.sibling : null);
                kn(e);
                break;
            case 19:
                var s = (t.flags & 128) !== 0;
                if (i = (n & e.childLanes) !== 0, i || (Ya(t, e, n, !1), i = (n & e.childLanes) !== 0), s) {
                    if (i) return Gh(t, e, n);
                    e.flags |= 128
                }
                if (s = e.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), K(Lt, Lt.current), i) break;
                return null;
            case 22:
                return e.lanes = 0, Oh(t, e, n, e.pendingProps);
            case 24:
                En(e, Yt, t.memoizedState.cache)
        }
        return cn(t, e, n)
    }

    function Xh(t, e, n) {
        if (t !== null)
            if (t.memoizedProps !== e.pendingProps) Xt = !0;
            else {
                if (!$r(t, n) && (e.flags & 128) === 0) return Xt = !1, yv(t, e, n);
                Xt = (t.flags & 131072) !== 0
            }
        else Xt = !1, pt && (e.flags & 1048576) !== 0 && Td(e, Ri, e.index);
        switch (e.lanes = 0, e.tag) {
            case 16:
                t: {
                    var i = e.pendingProps;
                    if (t = ca(e.elementType), e.type = t, typeof t == "function") nr(t) ? (i = ma(t, i), e.tag = 1, e = Lh(null, e, t, i, n)) : (e.tag = 0, e = Xr(null, e, t, i, n));
                    else {
                        if (t != null) {
                            var s = t.$$typeof;
                            if (s === G) {
                                e.tag = 11, e = Dh(null, e, t, i, n);
                                break t
                            } else if (s === J) {
                                e.tag = 14, e = zh(null, e, t, i, n);
                                break t
                            }
                        }
                        throw e = Ee(t) || t, Error(r(306, e, ""))
                    }
                }
                return e;
            case 0:
                return Xr(t, e, e.type, e.pendingProps, n);
            case 1:
                return i = e.type, s = ma(i, e.pendingProps), Lh(t, e, i, s, n);
            case 3:
                t: {
                    if (le(e, e.stateNode.containerInfo), t === null) throw Error(r(387));i = e.pendingProps;
                    var u = e.memoizedState;s = u.element,
                    gr(t, e),
                    Yi(e, i, null, n);
                    var d = e.memoizedState;
                    if (i = d.cache, En(e, Yt, i), i !== u.cache && fr(e, [Yt], n, !0), qi(), i = d.element, u.isDehydrated)
                        if (u = {
                                element: i,
                                isDehydrated: !1,
                                cache: d.cache
                            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
                            e = Hh(t, e, i, n);
                            break t
                        } else if (i !== s) {
                        s = ke(Error(r(424)), e), Oi(s), e = Hh(t, e, i, n);
                        break t
                    } else {
                        switch (t = e.stateNode.containerInfo, t.nodeType) {
                            case 9:
                                t = t.body;
                                break;
                            default:
                                t = t.nodeName === "HTML" ? t.ownerDocument.body : t
                        }
                        for (_t = Ve(t.firstChild), It = e, pt = !0, jn = null, Re = !0, n = Od(e, null, i, n), e.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling
                    } else {
                        if (sa(), i === s) {
                            e = cn(t, e, n);
                            break t
                        }
                        ee(t, e, i, n)
                    }
                    e = e.child
                }
                return e;
            case 26:
                return bs(t, e), t === null ? (n = em(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : pt || (n = e.type, t = e.pendingProps, i = Vs(ut.current).createElement(n), i[Pt] = e, i[ce] = t, ne(i, n, t), Wt(i), e.stateNode = i) : e.memoizedState = em(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
            case 27:
                return bi(e), t === null && pt && (i = e.stateNode = P0(e.type, e.pendingProps, ut.current), It = e, Re = !0, s = _t, Hn(e.type) ? (_u = s, _t = Ve(i.firstChild)) : _t = s), ee(t, e, e.pendingProps.children, n), bs(t, e), t === null && (e.flags |= 4194304), e.child;
            case 5:
                return t === null && pt && ((s = i = _t) && (i = Zv(i, e.type, e.pendingProps, Re), i !== null ? (e.stateNode = i, It = e, _t = Ve(i.firstChild), Re = !1, s = !0) : s = !1), s || Mn(e)), bi(e), s = e.type, u = e.pendingProps, d = t !== null ? t.memoizedProps : null, i = u.children, ju(s, u) ? i = null : d !== null && ju(s, d) && (e.flags |= 32), e.memoizedState !== null && (s = wr(t, e, ov, null, null, n), rl._currentValue = s), bs(t, e), ee(t, e, i, n), e.child;
            case 6:
                return t === null && pt && ((t = n = _t) && (n = Kv(n, e.pendingProps, Re), n !== null ? (e.stateNode = n, It = e, _t = null, t = !0) : t = !1), t || Mn(e)), null;
            case 13:
                return qh(t, e, n);
            case 4:
                return le(e, e.stateNode.containerInfo), i = e.pendingProps, t === null ? e.child = da(e, null, i, n) : ee(t, e, i, n), e.child;
            case 11:
                return Dh(t, e, e.type, e.pendingProps, n);
            case 7:
                return ee(t, e, e.pendingProps, n), e.child;
            case 8:
                return ee(t, e, e.pendingProps.children, n), e.child;
            case 12:
                return ee(t, e, e.pendingProps.children, n), e.child;
            case 10:
                return i = e.pendingProps, En(e, e.type, i.value), ee(t, e, i.children, n), e.child;
            case 9:
                return s = e.type._context, i = e.pendingProps.children, ra(e), s = te(s), i = i(s), e.flags |= 1, ee(t, e, i, n), e.child;
            case 14:
                return zh(t, e, e.type, e.pendingProps, n);
            case 15:
                return Rh(t, e, e.type, e.pendingProps, n);
            case 19:
                return Gh(t, e, n);
            case 31:
                return pv(t, e, n);
            case 22:
                return Oh(t, e, n, e.pendingProps);
            case 24:
                return ra(e), i = te(Yt), t === null ? (s = mr(), s === null && (s = Nt, u = dr(), s.pooledCache = u, u.refCount++, u !== null && (s.pooledCacheLanes |= n), s = u), e.memoizedState = {
                    parent: i,
                    cache: s
                }, yr(e), En(e, Yt, s)) : ((t.lanes & n) !== 0 && (gr(t, e), Yi(e, null, null, n), qi()), s = t.memoizedState, u = e.memoizedState, s.parent !== i ? (s = {
                    parent: i,
                    cache: i
                }, e.memoizedState = s, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = s), En(e, Yt, i)) : (i = u.cache, En(e, Yt, i), i !== s.cache && fr(e, [Yt], n, !0))), ee(t, e, e.pendingProps.children, n), e.child;
            case 29:
                throw e.pendingProps
        }
        throw Error(r(156, e.tag))
    }

    function fn(t) {
        t.flags |= 4
    }

    function Pr(t, e, n, i, s) {
        if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
            if (t.flags |= 16777216, (s & 335544128) === s)
                if (t.stateNode.complete) t.flags |= 8192;
                else if (g0()) t.flags |= 8192;
            else throw fa = is, pr
        } else t.flags &= -16777217
    }

    function Qh(t, e) {
        if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
        else if (t.flags |= 16777216, !sm(e))
            if (g0()) t.flags |= 8192;
            else throw fa = is, pr
    }

    function Ss(t, e) {
        e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? wf() : 536870912, t.lanes |= e, ti |= e)
    }

    function Ji(t, e) {
        if (!pt) switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var n = null; e !== null;) e.alternate !== null && (n = e), e = e.sibling;
                n === null ? t.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = t.tail;
                for (var i = null; n !== null;) n.alternate !== null && (i = n), n = n.sibling;
                i === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : i.sibling = null
        }
    }

    function kt(t) {
        var e = t.alternate !== null && t.alternate.child === t.child,
            n = 0,
            i = 0;
        if (e)
            for (var s = t.child; s !== null;) n |= s.lanes | s.childLanes, i |= s.subtreeFlags & 65011712, i |= s.flags & 65011712, s.return = t, s = s.sibling;
        else
            for (s = t.child; s !== null;) n |= s.lanes | s.childLanes, i |= s.subtreeFlags, i |= s.flags, s.return = t, s = s.sibling;
        return t.subtreeFlags |= i, t.childLanes = n, e
    }

    function gv(t, e, n) {
        var i = e.pendingProps;
        switch (sr(e), e.tag) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return kt(e), null;
            case 1:
                return kt(e), null;
            case 3:
                return n = e.stateNode, i = null, t !== null && (i = t.memoizedState.cache), e.memoizedState.cache !== i && (e.flags |= 2048), on(Yt), Ut(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (qa(e) ? fn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, rr())), kt(e), null;
            case 26:
                var s = e.type,
                    u = e.memoizedState;
                return t === null ? (fn(e), u !== null ? (kt(e), Qh(e, u)) : (kt(e), Pr(e, s, null, i, n))) : u ? u !== t.memoizedState ? (fn(e), kt(e), Qh(e, u)) : (kt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== i && fn(e), kt(e), Pr(e, s, t, i, n)), null;
            case 27:
                if (Dl(e), n = ut.current, s = e.type, t !== null && e.stateNode != null) t.memoizedProps !== i && fn(e);
                else {
                    if (!i) {
                        if (e.stateNode === null) throw Error(r(166));
                        return kt(e), null
                    }
                    t = P.current, qa(e) ? wd(e) : (t = P0(s, i, n), e.stateNode = t, fn(e))
                }
                return kt(e), null;
            case 5:
                if (Dl(e), s = e.type, t !== null && e.stateNode != null) t.memoizedProps !== i && fn(e);
                else {
                    if (!i) {
                        if (e.stateNode === null) throw Error(r(166));
                        return kt(e), null
                    }
                    if (u = P.current, qa(e)) wd(e);
                    else {
                        var d = Vs(ut.current);
                        switch (u) {
                            case 1:
                                u = d.createElementNS("http://www.w3.org/2000/svg", s);
                                break;
                            case 2:
                                u = d.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                                break;
                            default:
                                switch (s) {
                                    case "svg":
                                        u = d.createElementNS("http://www.w3.org/2000/svg", s);
                                        break;
                                    case "math":
                                        u = d.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                                        break;
                                    case "script":
                                        u = d.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(u.firstChild);
                                        break;
                                    case "select":
                                        u = typeof i.is == "string" ? d.createElement("select", {
                                            is: i.is
                                        }) : d.createElement("select"), i.multiple ? u.multiple = !0 : i.size && (u.size = i.size);
                                        break;
                                    default:
                                        u = typeof i.is == "string" ? d.createElement(s, {
                                            is: i.is
                                        }) : d.createElement(s)
                                }
                        }
                        u[Pt] = e, u[ce] = i;
                        t: for (d = e.child; d !== null;) {
                            if (d.tag === 5 || d.tag === 6) u.appendChild(d.stateNode);
                            else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                                d.child.return = d, d = d.child;
                                continue
                            }
                            if (d === e) break t;
                            for (; d.sibling === null;) {
                                if (d.return === null || d.return === e) break t;
                                d = d.return
                            }
                            d.sibling.return = d.return, d = d.sibling
                        }
                        e.stateNode = u;
                        t: switch (ne(u, s, i), s) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                i = !!i.autoFocus;
                                break t;
                            case "img":
                                i = !0;
                                break t;
                            default:
                                i = !1
                        }
                        i && fn(e)
                    }
                }
                return kt(e), Pr(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n), null;
            case 6:
                if (t && e.stateNode != null) t.memoizedProps !== i && fn(e);
                else {
                    if (typeof i != "string" && e.stateNode === null) throw Error(r(166));
                    if (t = ut.current, qa(e)) {
                        if (t = e.stateNode, n = e.memoizedProps, i = null, s = It, s !== null) switch (s.tag) {
                            case 27:
                            case 5:
                                i = s.memoizedProps
                        }
                        t[Pt] = e, t = !!(t.nodeValue === n || i !== null && i.suppressHydrationWarning === !0 || q0(t.nodeValue, n)), t || Mn(e, !0)
                    } else t = Vs(t).createTextNode(i), t[Pt] = e, e.stateNode = t
                }
                return kt(e), null;
            case 31:
                if (n = e.memoizedState, t === null || t.memoizedState !== null) {
                    if (i = qa(e), n !== null) {
                        if (t === null) {
                            if (!i) throw Error(r(318));
                            if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
                            t[Pt] = e
                        } else sa(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
                        kt(e), t = !1
                    } else n = rr(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
                    if (!t) return e.flags & 256 ? (Ae(e), e) : (Ae(e), null);
                    if ((e.flags & 128) !== 0) throw Error(r(558))
                }
                return kt(e), null;
            case 13:
                if (i = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                    if (s = qa(e), i !== null && i.dehydrated !== null) {
                        if (t === null) {
                            if (!s) throw Error(r(318));
                            if (s = e.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(r(317));
                            s[Pt] = e
                        } else sa(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
                        kt(e), s = !1
                    } else s = rr(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s), s = !0;
                    if (!s) return e.flags & 256 ? (Ae(e), e) : (Ae(e), null)
                }
                return Ae(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = i !== null, t = t !== null && t.memoizedState !== null, n && (i = e.child, s = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (s = i.alternate.memoizedState.cachePool.pool), u = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (u = i.memoizedState.cachePool.pool), u !== s && (i.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), Ss(e, e.updateQueue), kt(e), null);
            case 4:
                return Ut(), t === null && xu(e.stateNode.containerInfo), kt(e), null;
            case 10:
                return on(e.type), kt(e), null;
            case 19:
                if (B(Lt), i = e.memoizedState, i === null) return kt(e), null;
                if (s = (e.flags & 128) !== 0, u = i.rendering, u === null)
                    if (s) Ji(i, !1);
                    else {
                        if (Ot !== 0 || t !== null && (t.flags & 128) !== 0)
                            for (t = e.child; t !== null;) {
                                if (u = rs(t), u !== null) {
                                    for (e.flags |= 128, Ji(i, !1), t = u.updateQueue, e.updateQueue = t, Ss(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null;) bd(n, t), n = n.sibling;
                                    return K(Lt, Lt.current & 1 | 2), pt && ln(e, i.treeForkCount), e.child
                                }
                                t = t.sibling
                            }
                        i.tail !== null && ge() > Ms && (e.flags |= 128, s = !0, Ji(i, !1), e.lanes = 4194304)
                    }
                else {
                    if (!s)
                        if (t = rs(u), t !== null) {
                            if (e.flags |= 128, s = !0, t = t.updateQueue, e.updateQueue = t, Ss(e, t), Ji(i, !0), i.tail === null && i.tailMode === "hidden" && !u.alternate && !pt) return kt(e), null
                        } else 2 * ge() - i.renderingStartTime > Ms && n !== 536870912 && (e.flags |= 128, s = !0, Ji(i, !1), e.lanes = 4194304);
                    i.isBackwards ? (u.sibling = e.child, e.child = u) : (t = i.last, t !== null ? t.sibling = u : e.child = u, i.last = u)
                }
                return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ge(), t.sibling = null, n = Lt.current, K(Lt, s ? n & 1 | 2 : n & 1), pt && ln(e, i.treeForkCount), t) : (kt(e), null);
            case 22:
            case 23:
                return Ae(e), Sr(), i = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== i && (e.flags |= 8192) : i && (e.flags |= 8192), i ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (kt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : kt(e), n = e.updateQueue, n !== null && Ss(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), i = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), i !== n && (e.flags |= 2048), t !== null && B(ua), null;
            case 24:
                return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), on(Yt), kt(e), null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(r(156, e.tag))
    }

    function vv(t, e) {
        switch (sr(e), e.tag) {
            case 1:
                return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 3:
                return on(Yt), Ut(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
            case 26:
            case 27:
            case 5:
                return Dl(e), null;
            case 31:
                if (e.memoizedState !== null) {
                    if (Ae(e), e.alternate === null) throw Error(r(340));
                    sa()
                }
                return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 13:
                if (Ae(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
                    if (e.alternate === null) throw Error(r(340));
                    sa()
                }
                return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 19:
                return B(Lt), null;
            case 4:
                return Ut(), null;
            case 10:
                return on(e.type), null;
            case 22:
            case 23:
                return Ae(e), Sr(), t !== null && B(ua), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 24:
                return on(Yt), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function Zh(t, e) {
        switch (sr(e), e.tag) {
            case 3:
                on(Yt), Ut();
                break;
            case 26:
            case 27:
            case 5:
                Dl(e);
                break;
            case 4:
                Ut();
                break;
            case 31:
                e.memoizedState !== null && Ae(e);
                break;
            case 13:
                Ae(e);
                break;
            case 19:
                B(Lt);
                break;
            case 10:
                on(e.type);
                break;
            case 22:
            case 23:
                Ae(e), Sr(), t !== null && B(ua);
                break;
            case 24:
                on(Yt)
        }
    }

    function Fi(t, e) {
        try {
            var n = e.updateQueue,
                i = n !== null ? n.lastEffect : null;
            if (i !== null) {
                var s = i.next;
                n = s;
                do {
                    if ((n.tag & t) === t) {
                        i = void 0;
                        var u = n.create,
                            d = n.inst;
                        i = u(), d.destroy = i
                    }
                    n = n.next
                } while (n !== s)
            }
        } catch (v) {
            Tt(e, e.return, v)
        }
    }

    function zn(t, e, n) {
        try {
            var i = e.updateQueue,
                s = i !== null ? i.lastEffect : null;
            if (s !== null) {
                var u = s.next;
                i = u;
                do {
                    if ((i.tag & t) === t) {
                        var d = i.inst,
                            v = d.destroy;
                        if (v !== void 0) {
                            d.destroy = void 0, s = e;
                            var T = n,
                                N = v;
                            try {
                                N()
                            } catch (D) {
                                Tt(s, T, D)
                            }
                        }
                    }
                    i = i.next
                } while (i !== u)
            }
        } catch (D) {
            Tt(e, e.return, D)
        }
    }

    function Kh(t) {
        var e = t.updateQueue;
        if (e !== null) {
            var n = t.stateNode;
            try {
                Bd(e, n)
            } catch (i) {
                Tt(t, t.return, i)
            }
        }
    }

    function Jh(t, e, n) {
        n.props = ma(t.type, t.memoizedProps), n.state = t.memoizedState;
        try {
            n.componentWillUnmount()
        } catch (i) {
            Tt(t, e, i)
        }
    }

    function Wi(t, e) {
        try {
            var n = t.ref;
            if (n !== null) {
                switch (t.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var i = t.stateNode;
                        break;
                    case 30:
                        i = t.stateNode;
                        break;
                    default:
                        i = t.stateNode
                }
                typeof n == "function" ? t.refCleanup = n(i) : n.current = i
            }
        } catch (s) {
            Tt(t, e, s)
        }
    }

    function Je(t, e) {
        var n = t.ref,
            i = t.refCleanup;
        if (n !== null)
            if (typeof i == "function") try {
                i()
            } catch (s) {
                Tt(t, e, s)
            } finally {
                t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null)
            } else if (typeof n == "function") try {
                n(null)
            } catch (s) {
                Tt(t, e, s)
            } else n.current = null
    }

    function Fh(t) {
        var e = t.type,
            n = t.memoizedProps,
            i = t.stateNode;
        try {
            t: switch (e) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    n.autoFocus && i.focus();
                    break t;
                case "img":
                    n.src ? i.src = n.src : n.srcSet && (i.srcset = n.srcSet)
            }
        }
        catch (s) {
            Tt(t, t.return, s)
        }
    }

    function Ir(t, e, n) {
        try {
            var i = t.stateNode;
            Hv(i, t.type, n, e), i[ce] = e
        } catch (s) {
            Tt(t, t.return, s)
        }
    }

    function Wh(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Hn(t.type) || t.tag === 4
    }

    function tu(t) {
        t: for (;;) {
            for (; t.sibling === null;) {
                if (t.return === null || Wh(t.return)) return null;
                t = t.return
            }
            for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
                if (t.tag === 27 && Hn(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
                t.child.return = t, t = t.child
            }
            if (!(t.flags & 2)) return t.stateNode
        }
    }

    function eu(t, e, n) {
        var i = t.tag;
        if (i === 5 || i === 6) t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = en));
        else if (i !== 4 && (i === 27 && Hn(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null))
            for (eu(t, e, n), t = t.sibling; t !== null;) eu(t, e, n), t = t.sibling
    }

    function Ts(t, e, n) {
        var i = t.tag;
        if (i === 5 || i === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
        else if (i !== 4 && (i === 27 && Hn(t.type) && (n = t.stateNode), t = t.child, t !== null))
            for (Ts(t, e, n), t = t.sibling; t !== null;) Ts(t, e, n), t = t.sibling
    }

    function $h(t) {
        var e = t.stateNode,
            n = t.memoizedProps;
        try {
            for (var i = t.type, s = e.attributes; s.length;) e.removeAttributeNode(s[0]);
            ne(e, i, n), e[Pt] = t, e[ce] = n
        } catch (u) {
            Tt(t, t.return, u)
        }
    }
    var dn = !1,
        Qt = !1,
        nu = !1,
        Ph = typeof WeakSet == "function" ? WeakSet : Set,
        $t = null;

    function bv(t, e) {
        if (t = t.containerInfo, Au = Gs, t = cd(t), Fo(t)) {
            if ("selectionStart" in t) var n = {
                start: t.selectionStart,
                end: t.selectionEnd
            };
            else t: {
                n = (n = t.ownerDocument) && n.defaultView || window;
                var i = n.getSelection && n.getSelection();
                if (i && i.rangeCount !== 0) {
                    n = i.anchorNode;
                    var s = i.anchorOffset,
                        u = i.focusNode;
                    i = i.focusOffset;
                    try {
                        n.nodeType, u.nodeType
                    } catch {
                        n = null;
                        break t
                    }
                    var d = 0,
                        v = -1,
                        T = -1,
                        N = 0,
                        D = 0,
                        V = t,
                        C = null;
                    e: for (;;) {
                        for (var _; V !== n || s !== 0 && V.nodeType !== 3 || (v = d + s), V !== u || i !== 0 && V.nodeType !== 3 || (T = d + i), V.nodeType === 3 && (d += V.nodeValue.length), (_ = V.firstChild) !== null;) C = V, V = _;
                        for (;;) {
                            if (V === t) break e;
                            if (C === n && ++N === s && (v = d), C === u && ++D === i && (T = d), (_ = V.nextSibling) !== null) break;
                            V = C, C = V.parentNode
                        }
                        V = _
                    }
                    n = v === -1 || T === -1 ? null : {
                        start: v,
                        end: T
                    }
                } else n = null
            }
            n = n || {
                start: 0,
                end: 0
            }
        } else n = null;
        for (wu = {
                focusedElem: t,
                selectionRange: n
            }, Gs = !1, $t = e; $t !== null;)
            if (e = $t, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, $t = t;
            else
                for (; $t !== null;) {
                    switch (e = $t, u = e.alternate, t = e.flags, e.tag) {
                        case 0:
                            if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                                for (n = 0; n < t.length; n++) s = t[n], s.ref.impl = s.nextImpl;
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((t & 1024) !== 0 && u !== null) {
                                t = void 0, n = e, s = u.memoizedProps, u = u.memoizedState, i = n.stateNode;
                                try {
                                    var F = ma(n.type, s);
                                    t = i.getSnapshotBeforeUpdate(F, u), i.__reactInternalSnapshotBeforeUpdate = t
                                } catch (at) {
                                    Tt(n, n.return, at)
                                }
                            }
                            break;
                        case 3:
                            if ((t & 1024) !== 0) {
                                if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9) Eu(t);
                                else if (n === 1) switch (t.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        Eu(t);
                                        break;
                                    default:
                                        t.textContent = ""
                                }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((t & 1024) !== 0) throw Error(r(163))
                    }
                    if (t = e.sibling, t !== null) {
                        t.return = e.return, $t = t;
                        break
                    }
                    $t = e.return
                }
    }

    function Ih(t, e, n) {
        var i = n.flags;
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
                mn(t, n), i & 4 && Fi(5, n);
                break;
            case 1:
                if (mn(t, n), i & 4)
                    if (t = n.stateNode, e === null) try {
                        t.componentDidMount()
                    } catch (d) {
                        Tt(n, n.return, d)
                    } else {
                        var s = ma(n.type, e.memoizedProps);
                        e = e.memoizedState;
                        try {
                            t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate)
                        } catch (d) {
                            Tt(n, n.return, d)
                        }
                    }
                i & 64 && Kh(n), i & 512 && Wi(n, n.return);
                break;
            case 3:
                if (mn(t, n), i & 64 && (t = n.updateQueue, t !== null)) {
                    if (e = null, n.child !== null) switch (n.child.tag) {
                        case 27:
                        case 5:
                            e = n.child.stateNode;
                            break;
                        case 1:
                            e = n.child.stateNode
                    }
                    try {
                        Bd(t, e)
                    } catch (d) {
                        Tt(n, n.return, d)
                    }
                }
                break;
            case 27:
                e === null && i & 4 && $h(n);
            case 26:
            case 5:
                mn(t, n), e === null && i & 4 && Fh(n), i & 512 && Wi(n, n.return);
                break;
            case 12:
                mn(t, n);
                break;
            case 31:
                mn(t, n), i & 4 && n0(t, n);
                break;
            case 13:
                mn(t, n), i & 4 && a0(t, n), i & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = Nv.bind(null, n), Jv(t, n))));
                break;
            case 22:
                if (i = n.memoizedState !== null || dn, !i) {
                    e = e !== null && e.memoizedState !== null || Qt, s = dn;
                    var u = Qt;
                    dn = i, (Qt = e) && !u ? pn(t, n, (n.subtreeFlags & 8772) !== 0) : mn(t, n), dn = s, Qt = u
                }
                break;
            case 30:
                break;
            default:
                mn(t, n)
        }
    }

    function t0(t) {
        var e = t.alternate;
        e !== null && (t.alternate = null, t0(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Do(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
    }
    var Dt = null,
        de = !1;

    function hn(t, e, n) {
        for (n = n.child; n !== null;) e0(t, e, n), n = n.sibling
    }

    function e0(t, e, n) {
        if (ve && typeof ve.onCommitFiberUnmount == "function") try {
            ve.onCommitFiberUnmount(xi, n)
        } catch {}
        switch (n.tag) {
            case 26:
                Qt || Je(n, e), hn(t, e, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
                break;
            case 27:
                Qt || Je(n, e);
                var i = Dt,
                    s = de;
                Hn(n.type) && (Dt = n.stateNode, de = !1), hn(t, e, n), ll(n.stateNode), Dt = i, de = s;
                break;
            case 5:
                Qt || Je(n, e);
            case 6:
                if (i = Dt, s = de, Dt = null, hn(t, e, n), Dt = i, de = s, Dt !== null)
                    if (de) try {
                        (Dt.nodeType === 9 ? Dt.body : Dt.nodeName === "HTML" ? Dt.ownerDocument.body : Dt).removeChild(n.stateNode)
                    } catch (u) {
                        Tt(n, e, u)
                    } else try {
                        Dt.removeChild(n.stateNode)
                    } catch (u) {
                        Tt(n, e, u)
                    }
                break;
            case 18:
                Dt !== null && (de ? (t = Dt, K0(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, n.stateNode), ri(t)) : K0(Dt, n.stateNode));
                break;
            case 4:
                i = Dt, s = de, Dt = n.stateNode.containerInfo, de = !0, hn(t, e, n), Dt = i, de = s;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                zn(2, n, e), Qt || zn(4, n, e), hn(t, e, n);
                break;
            case 1:
                Qt || (Je(n, e), i = n.stateNode, typeof i.componentWillUnmount == "function" && Jh(n, e, i)), hn(t, e, n);
                break;
            case 21:
                hn(t, e, n);
                break;
            case 22:
                Qt = (i = Qt) || n.memoizedState !== null, hn(t, e, n), Qt = i;
                break;
            default:
                hn(t, e, n)
        }
    }

    function n0(t, e) {
        if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
            t = t.dehydrated;
            try {
                ri(t)
            } catch (n) {
                Tt(e, e.return, n)
            }
        }
    }

    function a0(t, e) {
        if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
            ri(t)
        } catch (n) {
            Tt(e, e.return, n)
        }
    }

    function xv(t) {
        switch (t.tag) {
            case 31:
            case 13:
            case 19:
                var e = t.stateNode;
                return e === null && (e = t.stateNode = new Ph), e;
            case 22:
                return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Ph), e;
            default:
                throw Error(r(435, t.tag))
        }
    }

    function As(t, e) {
        var n = xv(t);
        e.forEach(function(i) {
            if (!n.has(i)) {
                n.add(i);
                var s = Cv.bind(null, t, i);
                i.then(s, s)
            }
        })
    }

    function he(t, e) {
        var n = e.deletions;
        if (n !== null)
            for (var i = 0; i < n.length; i++) {
                var s = n[i],
                    u = t,
                    d = e,
                    v = d;
                t: for (; v !== null;) {
                    switch (v.tag) {
                        case 27:
                            if (Hn(v.type)) {
                                Dt = v.stateNode, de = !1;
                                break t
                            }
                            break;
                        case 5:
                            Dt = v.stateNode, de = !1;
                            break t;
                        case 3:
                        case 4:
                            Dt = v.stateNode.containerInfo, de = !0;
                            break t
                    }
                    v = v.return
                }
                if (Dt === null) throw Error(r(160));
                e0(u, d, s), Dt = null, de = !1, u = s.alternate, u !== null && (u.return = null), s.return = null
            }
        if (e.subtreeFlags & 13886)
            for (e = e.child; e !== null;) i0(e, t), e = e.sibling
    }
    var Ye = null;

    function i0(t, e) {
        var n = t.alternate,
            i = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                he(e, t), me(t), i & 4 && (zn(3, t, t.return), Fi(3, t), zn(5, t, t.return));
                break;
            case 1:
                he(e, t), me(t), i & 512 && (Qt || n === null || Je(n, n.return)), i & 64 && dn && (t = t.updateQueue, t !== null && (i = t.callbacks, i !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? i : n.concat(i))));
                break;
            case 26:
                var s = Ye;
                if (he(e, t), me(t), i & 512 && (Qt || n === null || Je(n, n.return)), i & 4) {
                    var u = n !== null ? n.memoizedState : null;
                    if (i = t.memoizedState, n === null)
                        if (i === null)
                            if (t.stateNode === null) {
                                t: {
                                    i = t.type,
                                    n = t.memoizedProps,
                                    s = s.ownerDocument || s;e: switch (i) {
                                        case "title":
                                            u = s.getElementsByTagName("title")[0], (!u || u[Ai] || u[Pt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = s.createElement(i), s.head.insertBefore(u, s.querySelector("head > title"))), ne(u, i, n), u[Pt] = t, Wt(u), i = u;
                                            break t;
                                        case "link":
                                            var d = im("link", "href", s).get(i + (n.href || ""));
                                            if (d) {
                                                for (var v = 0; v < d.length; v++)
                                                    if (u = d[v], u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                                        d.splice(v, 1);
                                                        break e
                                                    }
                                            }
                                            u = s.createElement(i), ne(u, i, n), s.head.appendChild(u);
                                            break;
                                        case "meta":
                                            if (d = im("meta", "content", s).get(i + (n.content || ""))) {
                                                for (v = 0; v < d.length; v++)
                                                    if (u = d[v], u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                                        d.splice(v, 1);
                                                        break e
                                                    }
                                            }
                                            u = s.createElement(i), ne(u, i, n), s.head.appendChild(u);
                                            break;
                                        default:
                                            throw Error(r(468, i))
                                    }
                                    u[Pt] = t,
                                    Wt(u),
                                    i = u
                                }
                                t.stateNode = i
                            }
                    else lm(s, t.type, t.stateNode);
                    else t.stateNode = am(s, i, t.memoizedProps);
                    else u !== i ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, i === null ? lm(s, t.type, t.stateNode) : am(s, i, t.memoizedProps)) : i === null && t.stateNode !== null && Ir(t, t.memoizedProps, n.memoizedProps)
                }
                break;
            case 27:
                he(e, t), me(t), i & 512 && (Qt || n === null || Je(n, n.return)), n !== null && i & 4 && Ir(t, t.memoizedProps, n.memoizedProps);
                break;
            case 5:
                if (he(e, t), me(t), i & 512 && (Qt || n === null || Je(n, n.return)), t.flags & 32) {
                    s = t.stateNode;
                    try {
                        ka(s, "")
                    } catch (F) {
                        Tt(t, t.return, F)
                    }
                }
                i & 4 && t.stateNode != null && (s = t.memoizedProps, Ir(t, s, n !== null ? n.memoizedProps : s)), i & 1024 && (nu = !0);
                break;
            case 6:
                if (he(e, t), me(t), i & 4) {
                    if (t.stateNode === null) throw Error(r(162));
                    i = t.memoizedProps, n = t.stateNode;
                    try {
                        n.nodeValue = i
                    } catch (F) {
                        Tt(t, t.return, F)
                    }
                }
                break;
            case 3:
                if (Ls = null, s = Ye, Ye = Bs(e.containerInfo), he(e, t), Ye = s, me(t), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    ri(e.containerInfo)
                } catch (F) {
                    Tt(t, t.return, F)
                }
                nu && (nu = !1, l0(t));
                break;
            case 4:
                i = Ye, Ye = Bs(t.stateNode.containerInfo), he(e, t), me(t), Ye = i;
                break;
            case 12:
                he(e, t), me(t);
                break;
            case 31:
                he(e, t), me(t), i & 4 && (i = t.updateQueue, i !== null && (t.updateQueue = null, As(t, i)));
                break;
            case 13:
                he(e, t), me(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (js = ge()), i & 4 && (i = t.updateQueue, i !== null && (t.updateQueue = null, As(t, i)));
                break;
            case 22:
                s = t.memoizedState !== null;
                var T = n !== null && n.memoizedState !== null,
                    N = dn,
                    D = Qt;
                if (dn = N || s, Qt = D || T, he(e, t), Qt = D, dn = N, me(t), i & 8192) t: for (e = t.stateNode, e._visibility = s ? e._visibility & -2 : e._visibility | 1, s && (n === null || T || dn || Qt || pa(t)), n = null, e = t;;) {
                    if (e.tag === 5 || e.tag === 26) {
                        if (n === null) {
                            T = n = e;
                            try {
                                if (u = T.stateNode, s) d = u.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none";
                                else {
                                    v = T.stateNode;
                                    var V = T.memoizedProps.style,
                                        C = V != null && V.hasOwnProperty("display") ? V.display : null;
                                    v.style.display = C == null || typeof C == "boolean" ? "" : ("" + C).trim()
                                }
                            } catch (F) {
                                Tt(T, T.return, F)
                            }
                        }
                    } else if (e.tag === 6) {
                        if (n === null) {
                            T = e;
                            try {
                                T.stateNode.nodeValue = s ? "" : T.memoizedProps
                            } catch (F) {
                                Tt(T, T.return, F)
                            }
                        }
                    } else if (e.tag === 18) {
                        if (n === null) {
                            T = e;
                            try {
                                var _ = T.stateNode;
                                s ? J0(_, !0) : J0(T.stateNode, !1)
                            } catch (F) {
                                Tt(T, T.return, F)
                            }
                        }
                    } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                        e.child.return = e, e = e.child;
                        continue
                    }
                    if (e === t) break t;
                    for (; e.sibling === null;) {
                        if (e.return === null || e.return === t) break t;
                        n === e && (n = null), e = e.return
                    }
                    n === e && (n = null), e.sibling.return = e.return, e = e.sibling
                }
                i & 4 && (i = t.updateQueue, i !== null && (n = i.retryQueue, n !== null && (i.retryQueue = null, As(t, n))));
                break;
            case 19:
                he(e, t), me(t), i & 4 && (i = t.updateQueue, i !== null && (t.updateQueue = null, As(t, i)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                he(e, t), me(t)
        }
    }

    function me(t) {
        var e = t.flags;
        if (e & 2) {
            try {
                for (var n, i = t.return; i !== null;) {
                    if (Wh(i)) {
                        n = i;
                        break
                    }
                    i = i.return
                }
                if (n == null) throw Error(r(160));
                switch (n.tag) {
                    case 27:
                        var s = n.stateNode,
                            u = tu(t);
                        Ts(t, u, s);
                        break;
                    case 5:
                        var d = n.stateNode;
                        n.flags & 32 && (ka(d, ""), n.flags &= -33);
                        var v = tu(t);
                        Ts(t, v, d);
                        break;
                    case 3:
                    case 4:
                        var T = n.stateNode.containerInfo,
                            N = tu(t);
                        eu(t, N, T);
                        break;
                    default:
                        throw Error(r(161))
                }
            } catch (D) {
                Tt(t, t.return, D)
            }
            t.flags &= -3
        }
        e & 4096 && (t.flags &= -4097)
    }

    function l0(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null;) {
                var e = t;
                l0(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling
            }
    }

    function mn(t, e) {
        if (e.subtreeFlags & 8772)
            for (e = e.child; e !== null;) Ih(t, e.alternate, e), e = e.sibling
    }

    function pa(t) {
        for (t = t.child; t !== null;) {
            var e = t;
            switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    zn(4, e, e.return), pa(e);
                    break;
                case 1:
                    Je(e, e.return);
                    var n = e.stateNode;
                    typeof n.componentWillUnmount == "function" && Jh(e, e.return, n), pa(e);
                    break;
                case 27:
                    ll(e.stateNode);
                case 26:
                case 5:
                    Je(e, e.return), pa(e);
                    break;
                case 22:
                    e.memoizedState === null && pa(e);
                    break;
                case 30:
                    pa(e);
                    break;
                default:
                    pa(e)
            }
            t = t.sibling
        }
    }

    function pn(t, e, n) {
        for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null;) {
            var i = e.alternate,
                s = t,
                u = e,
                d = u.flags;
            switch (u.tag) {
                case 0:
                case 11:
                case 15:
                    pn(s, u, n), Fi(4, u);
                    break;
                case 1:
                    if (pn(s, u, n), i = u, s = i.stateNode, typeof s.componentDidMount == "function") try {
                        s.componentDidMount()
                    } catch (N) {
                        Tt(i, i.return, N)
                    }
                    if (i = u, s = i.updateQueue, s !== null) {
                        var v = i.stateNode;
                        try {
                            var T = s.shared.hiddenCallbacks;
                            if (T !== null)
                                for (s.shared.hiddenCallbacks = null, s = 0; s < T.length; s++) Vd(T[s], v)
                        } catch (N) {
                            Tt(i, i.return, N)
                        }
                    }
                    n && d & 64 && Kh(u), Wi(u, u.return);
                    break;
                case 27:
                    $h(u);
                case 26:
                case 5:
                    pn(s, u, n), n && i === null && d & 4 && Fh(u), Wi(u, u.return);
                    break;
                case 12:
                    pn(s, u, n);
                    break;
                case 31:
                    pn(s, u, n), n && d & 4 && n0(s, u);
                    break;
                case 13:
                    pn(s, u, n), n && d & 4 && a0(s, u);
                    break;
                case 22:
                    u.memoizedState === null && pn(s, u, n), Wi(u, u.return);
                    break;
                case 30:
                    break;
                default:
                    pn(s, u, n)
            }
            e = e.sibling
        }
    }

    function au(t, e) {
        var n = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Vi(n))
    }

    function iu(t, e) {
        t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Vi(t))
    }

    function Ge(t, e, n, i) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;) s0(t, e, n, i), e = e.sibling
    }

    function s0(t, e, n, i) {
        var s = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                Ge(t, e, n, i), s & 2048 && Fi(9, e);
                break;
            case 1:
                Ge(t, e, n, i);
                break;
            case 3:
                Ge(t, e, n, i), s & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Vi(t)));
                break;
            case 12:
                if (s & 2048) {
                    Ge(t, e, n, i), t = e.stateNode;
                    try {
                        var u = e.memoizedProps,
                            d = u.id,
                            v = u.onPostCommit;
                        typeof v == "function" && v(d, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                    } catch (T) {
                        Tt(e, e.return, T)
                    }
                } else Ge(t, e, n, i);
                break;
            case 31:
                Ge(t, e, n, i);
                break;
            case 13:
                Ge(t, e, n, i);
                break;
            case 23:
                break;
            case 22:
                u = e.stateNode, d = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? Ge(t, e, n, i) : $i(t, e) : u._visibility & 2 ? Ge(t, e, n, i) : (u._visibility |= 2, $a(t, e, n, i, (e.subtreeFlags & 10256) !== 0 || !1)), s & 2048 && au(d, e);
                break;
            case 24:
                Ge(t, e, n, i), s & 2048 && iu(e.alternate, e);
                break;
            default:
                Ge(t, e, n, i)
        }
    }

    function $a(t, e, n, i, s) {
        for (s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null;) {
            var u = t,
                d = e,
                v = n,
                T = i,
                N = d.flags;
            switch (d.tag) {
                case 0:
                case 11:
                case 15:
                    $a(u, d, v, T, s), Fi(8, d);
                    break;
                case 23:
                    break;
                case 22:
                    var D = d.stateNode;
                    d.memoizedState !== null ? D._visibility & 2 ? $a(u, d, v, T, s) : $i(u, d) : (D._visibility |= 2, $a(u, d, v, T, s)), s && N & 2048 && au(d.alternate, d);
                    break;
                case 24:
                    $a(u, d, v, T, s), s && N & 2048 && iu(d.alternate, d);
                    break;
                default:
                    $a(u, d, v, T, s)
            }
            e = e.sibling
        }
    }

    function $i(t, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;) {
                var n = t,
                    i = e,
                    s = i.flags;
                switch (i.tag) {
                    case 22:
                        $i(n, i), s & 2048 && au(i.alternate, i);
                        break;
                    case 24:
                        $i(n, i), s & 2048 && iu(i.alternate, i);
                        break;
                    default:
                        $i(n, i)
                }
                e = e.sibling
            }
    }
    var Pi = 8192;

    function Pa(t, e, n) {
        if (t.subtreeFlags & Pi)
            for (t = t.child; t !== null;) o0(t, e, n), t = t.sibling
    }

    function o0(t, e, n) {
        switch (t.tag) {
            case 26:
                Pa(t, e, n), t.flags & Pi && t.memoizedState !== null && sb(n, Ye, t.memoizedState, t.memoizedProps);
                break;
            case 5:
                Pa(t, e, n);
                break;
            case 3:
            case 4:
                var i = Ye;
                Ye = Bs(t.stateNode.containerInfo), Pa(t, e, n), Ye = i;
                break;
            case 22:
                t.memoizedState === null && (i = t.alternate, i !== null && i.memoizedState !== null ? (i = Pi, Pi = 16777216, Pa(t, e, n), Pi = i) : Pa(t, e, n));
                break;
            default:
                Pa(t, e, n)
        }
    }

    function r0(t) {
        var e = t.alternate;
        if (e !== null && (t = e.child, t !== null)) {
            e.child = null;
            do e = t.sibling, t.sibling = null, t = e; while (t !== null)
        }
    }

    function Ii(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    $t = i, c0(i, t)
                }
            r0(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) u0(t), t = t.sibling
    }

    function u0(t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                Ii(t), t.flags & 2048 && zn(9, t, t.return);
                break;
            case 3:
                Ii(t);
                break;
            case 12:
                Ii(t);
                break;
            case 22:
                var e = t.stateNode;
                t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, ws(t)) : Ii(t);
                break;
            default:
                Ii(t)
        }
    }

    function ws(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    $t = i, c0(i, t)
                }
            r0(t)
        }
        for (t = t.child; t !== null;) {
            switch (e = t, e.tag) {
                case 0:
                case 11:
                case 15:
                    zn(8, e, e.return), ws(e);
                    break;
                case 22:
                    n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, ws(e));
                    break;
                default:
                    ws(e)
            }
            t = t.sibling
        }
    }

    function c0(t, e) {
        for (; $t !== null;) {
            var n = $t;
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    zn(8, n, e);
                    break;
                case 23:
                case 22:
                    if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                        var i = n.memoizedState.cachePool.pool;
                        i != null && i.refCount++
                    }
                    break;
                case 24:
                    Vi(n.memoizedState.cache)
            }
            if (i = n.child, i !== null) i.return = n, $t = i;
            else t: for (n = t; $t !== null;) {
                i = $t;
                var s = i.sibling,
                    u = i.return;
                if (t0(i), i === n) {
                    $t = null;
                    break t
                }
                if (s !== null) {
                    s.return = u, $t = s;
                    break t
                }
                $t = u
            }
        }
    }
    var Sv = {
            getCacheForType: function(t) {
                var e = te(Yt),
                    n = e.data.get(t);
                return n === void 0 && (n = t(), e.data.set(t, n)), n
            },
            cacheSignal: function() {
                return te(Yt).controller.signal
            }
        },
        Tv = typeof WeakMap == "function" ? WeakMap : Map,
        bt = 0,
        Nt = null,
        ct = null,
        ht = 0,
        St = 0,
        we = null,
        Rn = !1,
        Ia = !1,
        lu = !1,
        yn = 0,
        Ot = 0,
        On = 0,
        ya = 0,
        su = 0,
        je = 0,
        ti = 0,
        tl = null,
        pe = null,
        ou = !1,
        js = 0,
        f0 = 0,
        Ms = 1 / 0,
        Es = null,
        Vn = null,
        Jt = 0,
        Bn = null,
        ei = null,
        gn = 0,
        ru = 0,
        uu = null,
        d0 = null,
        el = 0,
        cu = null;

    function Me() {
        return (bt & 2) !== 0 && ht !== 0 ? ht & -ht : z.T !== null ? yu() : Nf()
    }

    function h0() {
        if (je === 0)
            if ((ht & 536870912) === 0 || pt) {
                var t = Ol;
                Ol <<= 1, (Ol & 3932160) === 0 && (Ol = 262144), je = t
            } else je = 536870912;
        return t = Te.current, t !== null && (t.flags |= 32), je
    }

    function ye(t, e, n) {
        (t === Nt && (St === 2 || St === 9) || t.cancelPendingCommit !== null) && (ni(t, 0), Un(t, ht, je, !1)), Ti(t, n), ((bt & 2) === 0 || t !== Nt) && (t === Nt && ((bt & 2) === 0 && (ya |= n), Ot === 4 && Un(t, ht, je, !1)), Fe(t))
    }

    function m0(t, e, n) {
        if ((bt & 6) !== 0) throw Error(r(327));
        var i = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Si(t, e),
            s = i ? jv(t, e) : du(t, e, !0),
            u = i;
        do {
            if (s === 0) {
                Ia && !i && Un(t, e, 0, !1);
                break
            } else {
                if (n = t.current.alternate, u && !Av(n)) {
                    s = du(t, e, !1), u = !1;
                    continue
                }
                if (s === 2) {
                    if (u = e, t.errorRecoveryDisabledLanes & u) var d = 0;
                    else d = t.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
                    if (d !== 0) {
                        e = d;
                        t: {
                            var v = t;s = tl;
                            var T = v.current.memoizedState.isDehydrated;
                            if (T && (ni(v, d).flags |= 256), d = du(v, d, !1), d !== 2) {
                                if (lu && !T) {
                                    v.errorRecoveryDisabledLanes |= u, ya |= u, s = 4;
                                    break t
                                }
                                u = pe, pe = s, u !== null && (pe === null ? pe = u : pe.push.apply(pe, u))
                            }
                            s = d
                        }
                        if (u = !1, s !== 2) continue
                    }
                }
                if (s === 1) {
                    ni(t, 0), Un(t, e, 0, !0);
                    break
                }
                t: {
                    switch (i = t, u = s, u) {
                        case 0:
                        case 1:
                            throw Error(r(345));
                        case 4:
                            if ((e & 4194048) !== e) break;
                        case 6:
                            Un(i, e, je, !Rn);
                            break t;
                        case 2:
                            pe = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(r(329))
                    }
                    if ((e & 62914560) === e && (s = js + 300 - ge(), 10 < s)) {
                        if (Un(i, e, je, !Rn), Bl(i, 0, !0) !== 0) break t;
                        gn = e, i.timeoutHandle = Q0(p0.bind(null, i, n, pe, Es, ou, e, je, ya, ti, Rn, u, "Throttled", -0, 0), s);
                        break t
                    }
                    p0(i, n, pe, Es, ou, e, je, ya, ti, Rn, u, null, -0, 0)
                }
            }
            break
        } while (!0);
        Fe(t)
    }

    function p0(t, e, n, i, s, u, d, v, T, N, D, V, C, _) {
        if (t.timeoutHandle = -1, V = e.subtreeFlags, V & 8192 || (V & 16785408) === 16785408) {
            V = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: en
            }, o0(e, u, V);
            var F = (u & 62914560) === u ? js - ge() : (u & 4194048) === u ? f0 - ge() : 0;
            if (F = ob(V, F), F !== null) {
                gn = u, t.cancelPendingCommit = F(A0.bind(null, t, e, u, n, i, s, d, v, T, D, V, null, C, _)), Un(t, u, d, !N);
                return
            }
        }
        A0(t, e, u, n, i, s, d, v, T)
    }

    function Av(t) {
        for (var e = t;;) {
            var n = e.tag;
            if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
                for (var i = 0; i < n.length; i++) {
                    var s = n[i],
                        u = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!xe(u(), s)) return !1
                    } catch {
                        return !1
                    }
                }
            if (n = e.child, e.subtreeFlags & 16384 && n !== null) n.return = e, e = n;
            else {
                if (e === t) break;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) return !0;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
        }
        return !0
    }

    function Un(t, e, n, i) {
        e &= ~su, e &= ~ya, t.suspendedLanes |= e, t.pingedLanes &= ~e, i && (t.warmLanes |= e), i = t.expirationTimes;
        for (var s = e; 0 < s;) {
            var u = 31 - be(s),
                d = 1 << u;
            i[u] = -1, s &= ~d
        }
        n !== 0 && jf(t, n, e)
    }

    function Ns() {
        return (bt & 6) === 0 ? (nl(0), !1) : !0
    }

    function fu() {
        if (ct !== null) {
            if (St === 0) var t = ct.return;
            else t = ct, sn = oa = null, Er(t), Za = null, Ui = 0, t = ct;
            for (; t !== null;) Zh(t.alternate, t), t = t.return;
            ct = null
        }
    }

    function ni(t, e) {
        var n = t.timeoutHandle;
        n !== -1 && (t.timeoutHandle = -1, Gv(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), gn = 0, fu(), Nt = t, ct = n = an(t.current, null), ht = e, St = 0, we = null, Rn = !1, Ia = Si(t, e), lu = !1, ti = je = su = ya = On = Ot = 0, pe = tl = null, ou = !1, (e & 8) !== 0 && (e |= e & 32);
        var i = t.entangledLanes;
        if (i !== 0)
            for (t = t.entanglements, i &= e; 0 < i;) {
                var s = 31 - be(i),
                    u = 1 << s;
                e |= t[s], i &= ~u
            }
        return yn = e, Fl(), n
    }

    function y0(t, e) {
        st = null, z.H = Zi, e === Qa || e === as ? (e = Dd(), St = 3) : e === pr ? (e = Dd(), St = 4) : St = e === Gr ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, we = e, ct === null && (Ot = 1, gs(t, ke(e, t.current)))
    }

    function g0() {
        var t = Te.current;
        return t === null ? !0 : (ht & 4194048) === ht ? Oe === null : (ht & 62914560) === ht || (ht & 536870912) !== 0 ? t === Oe : !1
    }

    function v0() {
        var t = z.H;
        return z.H = Zi, t === null ? Zi : t
    }

    function b0() {
        var t = z.A;
        return z.A = Sv, t
    }

    function Cs() {
        Ot = 4, Rn || (ht & 4194048) !== ht && Te.current !== null || (Ia = !0), (On & 134217727) === 0 && (ya & 134217727) === 0 || Nt === null || Un(Nt, ht, je, !1)
    }

    function du(t, e, n) {
        var i = bt;
        bt |= 2;
        var s = v0(),
            u = b0();
        (Nt !== t || ht !== e) && (Es = null, ni(t, e)), e = !1;
        var d = Ot;
        t: do try {
                if (St !== 0 && ct !== null) {
                    var v = ct,
                        T = we;
                    switch (St) {
                        case 8:
                            fu(), d = 6;
                            break t;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Te.current === null && (e = !0);
                            var N = St;
                            if (St = 0, we = null, ai(t, v, T, N), n && Ia) {
                                d = 0;
                                break t
                            }
                            break;
                        default:
                            N = St, St = 0, we = null, ai(t, v, T, N)
                    }
                }
                wv(), d = Ot;
                break
            } catch (D) {
                y0(t, D)
            }
            while (!0);
            return e && t.shellSuspendCounter++, sn = oa = null, bt = i, z.H = s, z.A = u, ct === null && (Nt = null, ht = 0, Fl()), d
    }

    function wv() {
        for (; ct !== null;) x0(ct)
    }

    function jv(t, e) {
        var n = bt;
        bt |= 2;
        var i = v0(),
            s = b0();
        Nt !== t || ht !== e ? (Es = null, Ms = ge() + 500, ni(t, e)) : Ia = Si(t, e);
        t: do try {
                if (St !== 0 && ct !== null) {
                    e = ct;
                    var u = we;
                    e: switch (St) {
                        case 1:
                            St = 0, we = null, ai(t, e, u, 1);
                            break;
                        case 2:
                        case 9:
                            if (_d(u)) {
                                St = 0, we = null, S0(e);
                                break
                            }
                            e = function() {
                                St !== 2 && St !== 9 || Nt !== t || (St = 7), Fe(t)
                            }, u.then(e, e);
                            break t;
                        case 3:
                            St = 7;
                            break t;
                        case 4:
                            St = 5;
                            break t;
                        case 7:
                            _d(u) ? (St = 0, we = null, S0(e)) : (St = 0, we = null, ai(t, e, u, 7));
                            break;
                        case 5:
                            var d = null;
                            switch (ct.tag) {
                                case 26:
                                    d = ct.memoizedState;
                                case 5:
                                case 27:
                                    var v = ct;
                                    if (d ? sm(d) : v.stateNode.complete) {
                                        St = 0, we = null;
                                        var T = v.sibling;
                                        if (T !== null) ct = T;
                                        else {
                                            var N = v.return;
                                            N !== null ? (ct = N, _s(N)) : ct = null
                                        }
                                        break e
                                    }
                            }
                            St = 0, we = null, ai(t, e, u, 5);
                            break;
                        case 6:
                            St = 0, we = null, ai(t, e, u, 6);
                            break;
                        case 8:
                            fu(), Ot = 6;
                            break t;
                        default:
                            throw Error(r(462))
                    }
                }
                Mv();
                break
            } catch (D) {
                y0(t, D)
            }
            while (!0);
            return sn = oa = null, z.H = i, z.A = s, bt = n, ct !== null ? 0 : (Nt = null, ht = 0, Fl(), Ot)
    }

    function Mv() {
        for (; ct !== null && !Fg();) x0(ct)
    }

    function x0(t) {
        var e = Xh(t.alternate, t, yn);
        t.memoizedProps = t.pendingProps, e === null ? _s(t) : ct = e
    }

    function S0(t) {
        var e = t,
            n = e.alternate;
        switch (e.tag) {
            case 15:
            case 0:
                e = Uh(n, e, e.pendingProps, e.type, void 0, ht);
                break;
            case 11:
                e = Uh(n, e, e.pendingProps, e.type.render, e.ref, ht);
                break;
            case 5:
                Er(e);
            default:
                Zh(n, e), e = ct = bd(e, yn), e = Xh(n, e, yn)
        }
        t.memoizedProps = t.pendingProps, e === null ? _s(t) : ct = e
    }

    function ai(t, e, n, i) {
        sn = oa = null, Er(e), Za = null, Ui = 0;
        var s = e.return;
        try {
            if (mv(t, s, e, n, ht)) {
                Ot = 1, gs(t, ke(n, t.current)), ct = null;
                return
            }
        } catch (u) {
            if (s !== null) throw ct = s, u;
            Ot = 1, gs(t, ke(n, t.current)), ct = null;
            return
        }
        e.flags & 32768 ? (pt || i === 1 ? t = !0 : Ia || (ht & 536870912) !== 0 ? t = !1 : (Rn = t = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = Te.current, i !== null && i.tag === 13 && (i.flags |= 16384))), T0(e, t)) : _s(e)
    }

    function _s(t) {
        var e = t;
        do {
            if ((e.flags & 32768) !== 0) {
                T0(e, Rn);
                return
            }
            t = e.return;
            var n = gv(e.alternate, e, yn);
            if (n !== null) {
                ct = n;
                return
            }
            if (e = e.sibling, e !== null) {
                ct = e;
                return
            }
            ct = e = t
        } while (e !== null);
        Ot === 0 && (Ot = 5)
    }

    function T0(t, e) {
        do {
            var n = vv(t.alternate, t);
            if (n !== null) {
                n.flags &= 32767, ct = n;
                return
            }
            if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
                ct = t;
                return
            }
            ct = t = n
        } while (t !== null);
        Ot = 6, ct = null
    }

    function A0(t, e, n, i, s, u, d, v, T) {
        t.cancelPendingCommit = null;
        do ks(); while (Jt !== 0);
        if ((bt & 6) !== 0) throw Error(r(327));
        if (e !== null) {
            if (e === t.current) throw Error(r(177));
            if (u = e.lanes | e.childLanes, u |= tr, l1(t, n, u, d, v, T), t === Nt && (ct = Nt = null, ht = 0), ei = e, Bn = t, gn = n, ru = u, uu = s, d0 = i, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, _v(zl, function() {
                    return N0(), null
                })) : (t.callbackNode = null, t.callbackPriority = 0), i = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || i) {
                i = z.T, z.T = null, s = X.p, X.p = 2, d = bt, bt |= 4;
                try {
                    bv(t, e, n)
                } finally {
                    bt = d, X.p = s, z.T = i
                }
            }
            Jt = 1, w0(), j0(), M0()
        }
    }

    function w0() {
        if (Jt === 1) {
            Jt = 0;
            var t = Bn,
                e = ei,
                n = (e.flags & 13878) !== 0;
            if ((e.subtreeFlags & 13878) !== 0 || n) {
                n = z.T, z.T = null;
                var i = X.p;
                X.p = 2;
                var s = bt;
                bt |= 4;
                try {
                    i0(e, t);
                    var u = wu,
                        d = cd(t.containerInfo),
                        v = u.focusedElem,
                        T = u.selectionRange;
                    if (d !== v && v && v.ownerDocument && ud(v.ownerDocument.documentElement, v)) {
                        if (T !== null && Fo(v)) {
                            var N = T.start,
                                D = T.end;
                            if (D === void 0 && (D = N), "selectionStart" in v) v.selectionStart = N, v.selectionEnd = Math.min(D, v.value.length);
                            else {
                                var V = v.ownerDocument || document,
                                    C = V && V.defaultView || window;
                                if (C.getSelection) {
                                    var _ = C.getSelection(),
                                        F = v.textContent.length,
                                        at = Math.min(T.start, F),
                                        Mt = T.end === void 0 ? at : Math.min(T.end, F);
                                    !_.extend && at > Mt && (d = Mt, Mt = at, at = d);
                                    var j = rd(v, at),
                                        A = rd(v, Mt);
                                    if (j && A && (_.rangeCount !== 1 || _.anchorNode !== j.node || _.anchorOffset !== j.offset || _.focusNode !== A.node || _.focusOffset !== A.offset)) {
                                        var E = V.createRange();
                                        E.setStart(j.node, j.offset), _.removeAllRanges(), at > Mt ? (_.addRange(E), _.extend(A.node, A.offset)) : (E.setEnd(A.node, A.offset), _.addRange(E))
                                    }
                                }
                            }
                        }
                        for (V = [], _ = v; _ = _.parentNode;) _.nodeType === 1 && V.push({
                            element: _,
                            left: _.scrollLeft,
                            top: _.scrollTop
                        });
                        for (typeof v.focus == "function" && v.focus(), v = 0; v < V.length; v++) {
                            var R = V[v];
                            R.element.scrollLeft = R.left, R.element.scrollTop = R.top
                        }
                    }
                    Gs = !!Au, wu = Au = null
                } finally {
                    bt = s, X.p = i, z.T = n
                }
            }
            t.current = e, Jt = 2
        }
    }

    function j0() {
        if (Jt === 2) {
            Jt = 0;
            var t = Bn,
                e = ei,
                n = (e.flags & 8772) !== 0;
            if ((e.subtreeFlags & 8772) !== 0 || n) {
                n = z.T, z.T = null;
                var i = X.p;
                X.p = 2;
                var s = bt;
                bt |= 4;
                try {
                    Ih(t, e.alternate, e)
                } finally {
                    bt = s, X.p = i, z.T = n
                }
            }
            Jt = 3
        }
    }

    function M0() {
        if (Jt === 4 || Jt === 3) {
            Jt = 0, Wg();
            var t = Bn,
                e = ei,
                n = gn,
                i = d0;
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Jt = 5 : (Jt = 0, ei = Bn = null, E0(t, t.pendingLanes));
            var s = t.pendingLanes;
            if (s === 0 && (Vn = null), _o(n), e = e.stateNode, ve && typeof ve.onCommitFiberRoot == "function") try {
                ve.onCommitFiberRoot(xi, e, void 0, (e.current.flags & 128) === 128)
            } catch {}
            if (i !== null) {
                e = z.T, s = X.p, X.p = 2, z.T = null;
                try {
                    for (var u = t.onRecoverableError, d = 0; d < i.length; d++) {
                        var v = i[d];
                        u(v.value, {
                            componentStack: v.stack
                        })
                    }
                } finally {
                    z.T = e, X.p = s
                }
            }(gn & 3) !== 0 && ks(), Fe(t), s = t.pendingLanes, (n & 261930) !== 0 && (s & 42) !== 0 ? t === cu ? el++ : (el = 0, cu = t) : el = 0, nl(0)
        }
    }

    function E0(t, e) {
        (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Vi(e)))
    }

    function ks() {
        return w0(), j0(), M0(), N0()
    }

    function N0() {
        if (Jt !== 5) return !1;
        var t = Bn,
            e = ru;
        ru = 0;
        var n = _o(gn),
            i = z.T,
            s = X.p;
        try {
            X.p = 32 > n ? 32 : n, z.T = null, n = uu, uu = null;
            var u = Bn,
                d = gn;
            if (Jt = 0, ei = Bn = null, gn = 0, (bt & 6) !== 0) throw Error(r(331));
            var v = bt;
            if (bt |= 4, u0(u.current), s0(u, u.current, d, n), bt = v, nl(0, !1), ve && typeof ve.onPostCommitFiberRoot == "function") try {
                ve.onPostCommitFiberRoot(xi, u)
            } catch {}
            return !0
        } finally {
            X.p = s, z.T = i, E0(t, e)
        }
    }

    function C0(t, e, n) {
        e = ke(n, e), e = Yr(t.stateNode, e, 2), t = _n(t, e, 2), t !== null && (Ti(t, 2), Fe(t))
    }

    function Tt(t, e, n) {
        if (t.tag === 3) C0(t, t, n);
        else
            for (; e !== null;) {
                if (e.tag === 3) {
                    C0(e, t, n);
                    break
                } else if (e.tag === 1) {
                    var i = e.stateNode;
                    if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Vn === null || !Vn.has(i))) {
                        t = ke(n, t), n = _h(2), i = _n(e, n, 2), i !== null && (kh(n, i, e, t), Ti(i, 2), Fe(i));
                        break
                    }
                }
                e = e.return
            }
    }

    function hu(t, e, n) {
        var i = t.pingCache;
        if (i === null) {
            i = t.pingCache = new Tv;
            var s = new Set;
            i.set(e, s)
        } else s = i.get(e), s === void 0 && (s = new Set, i.set(e, s));
        s.has(n) || (lu = !0, s.add(n), t = Ev.bind(null, t, e, n), e.then(t, t))
    }

    function Ev(t, e, n) {
        var i = t.pingCache;
        i !== null && i.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Nt === t && (ht & n) === n && (Ot === 4 || Ot === 3 && (ht & 62914560) === ht && 300 > ge() - js ? (bt & 2) === 0 && ni(t, 0) : su |= n, ti === ht && (ti = 0)), Fe(t)
    }

    function _0(t, e) {
        e === 0 && (e = wf()), t = ia(t, e), t !== null && (Ti(t, e), Fe(t))
    }

    function Nv(t) {
        var e = t.memoizedState,
            n = 0;
        e !== null && (n = e.retryLane), _0(t, n)
    }

    function Cv(t, e) {
        var n = 0;
        switch (t.tag) {
            case 31:
            case 13:
                var i = t.stateNode,
                    s = t.memoizedState;
                s !== null && (n = s.retryLane);
                break;
            case 19:
                i = t.stateNode;
                break;
            case 22:
                i = t.stateNode._retryCache;
                break;
            default:
                throw Error(r(314))
        }
        i !== null && i.delete(e), _0(t, n)
    }

    function _v(t, e) {
        return Mo(t, e)
    }
    var Ds = null,
        ii = null,
        mu = !1,
        zs = !1,
        pu = !1,
        Ln = 0;

    function Fe(t) {
        t !== ii && t.next === null && (ii === null ? Ds = ii = t : ii = ii.next = t), zs = !0, mu || (mu = !0, Dv())
    }

    function nl(t, e) {
        if (!pu && zs) {
            pu = !0;
            do
                for (var n = !1, i = Ds; i !== null;) {
                    if (t !== 0) {
                        var s = i.pendingLanes;
                        if (s === 0) var u = 0;
                        else {
                            var d = i.suspendedLanes,
                                v = i.pingedLanes;
                            u = (1 << 31 - be(42 | t) + 1) - 1, u &= s & ~(d & ~v), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                        }
                        u !== 0 && (n = !0, R0(i, u))
                    } else u = ht, u = Bl(i, i === Nt ? u : 0, i.cancelPendingCommit !== null || i.timeoutHandle !== -1), (u & 3) === 0 || Si(i, u) || (n = !0, R0(i, u));
                    i = i.next
                }
            while (n);
            pu = !1
        }
    }

    function kv() {
        k0()
    }

    function k0() {
        zs = mu = !1;
        var t = 0;
        Ln !== 0 && Yv() && (t = Ln);
        for (var e = ge(), n = null, i = Ds; i !== null;) {
            var s = i.next,
                u = D0(i, e);
            u === 0 ? (i.next = null, n === null ? Ds = s : n.next = s, s === null && (ii = n)) : (n = i, (t !== 0 || (u & 3) !== 0) && (zs = !0)), i = s
        }
        Jt !== 0 && Jt !== 5 || nl(t), Ln !== 0 && (Ln = 0)
    }

    function D0(t, e) {
        for (var n = t.suspendedLanes, i = t.pingedLanes, s = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u;) {
            var d = 31 - be(u),
                v = 1 << d,
                T = s[d];
            T === -1 ? ((v & n) === 0 || (v & i) !== 0) && (s[d] = i1(v, e)) : T <= e && (t.expiredLanes |= v), u &= ~v
        }
        if (e = Nt, n = ht, n = Bl(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), i = t.callbackNode, n === 0 || t === e && (St === 2 || St === 9) || t.cancelPendingCommit !== null) return i !== null && i !== null && Eo(i), t.callbackNode = null, t.callbackPriority = 0;
        if ((n & 3) === 0 || Si(t, n)) {
            if (e = n & -n, e === t.callbackPriority) return e;
            switch (i !== null && Eo(i), _o(n)) {
                case 2:
                case 8:
                    n = Tf;
                    break;
                case 32:
                    n = zl;
                    break;
                case 268435456:
                    n = Af;
                    break;
                default:
                    n = zl
            }
            return i = z0.bind(null, t), n = Mo(n, i), t.callbackPriority = e, t.callbackNode = n, e
        }
        return i !== null && i !== null && Eo(i), t.callbackPriority = 2, t.callbackNode = null, 2
    }

    function z0(t, e) {
        if (Jt !== 0 && Jt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
        var n = t.callbackNode;
        if (ks() && t.callbackNode !== n) return null;
        var i = ht;
        return i = Bl(t, t === Nt ? i : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), i === 0 ? null : (m0(t, i, e), D0(t, ge()), t.callbackNode != null && t.callbackNode === n ? z0.bind(null, t) : null)
    }

    function R0(t, e) {
        if (ks()) return null;
        m0(t, e, !0)
    }

    function Dv() {
        Xv(function() {
            (bt & 6) !== 0 ? Mo(Sf, kv) : k0()
        })
    }

    function yu() {
        if (Ln === 0) {
            var t = Ga;
            t === 0 && (t = Rl, Rl <<= 1, (Rl & 261888) === 0 && (Rl = 256)), Ln = t
        }
        return Ln
    }

    function O0(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : ql("" + t)
    }

    function V0(t, e) {
        var n = e.ownerDocument.createElement("input");
        return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t
    }

    function zv(t, e, n, i, s) {
        if (e === "submit" && n && n.stateNode === s) {
            var u = O0((s[ce] || null).action),
                d = i.submitter;
            d && (e = (e = d[ce] || null) ? O0(e.formAction) : d.getAttribute("formAction"), e !== null && (u = e, d = null));
            var v = new Ql("action", "action", null, i, s);
            t.push({
                event: v,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (i.defaultPrevented) {
                            if (Ln !== 0) {
                                var T = d ? V0(s, d) : new FormData(s);
                                Vr(n, {
                                    pending: !0,
                                    data: T,
                                    method: s.method,
                                    action: u
                                }, null, T)
                            }
                        } else typeof u == "function" && (v.preventDefault(), T = d ? V0(s, d) : new FormData(s), Vr(n, {
                            pending: !0,
                            data: T,
                            method: s.method,
                            action: u
                        }, u, T))
                    },
                    currentTarget: s
                }]
            })
        }
    }
    for (var gu = 0; gu < Io.length; gu++) {
        var vu = Io[gu],
            Rv = vu.toLowerCase(),
            Ov = vu[0].toUpperCase() + vu.slice(1);
        qe(Rv, "on" + Ov)
    }
    qe(hd, "onAnimationEnd"), qe(md, "onAnimationIteration"), qe(pd, "onAnimationStart"), qe("dblclick", "onDoubleClick"), qe("focusin", "onFocus"), qe("focusout", "onBlur"), qe($1, "onTransitionRun"), qe(P1, "onTransitionStart"), qe(I1, "onTransitionCancel"), qe(yd, "onTransitionEnd"), Ca("onMouseEnter", ["mouseout", "mouseover"]), Ca("onMouseLeave", ["mouseout", "mouseover"]), Ca("onPointerEnter", ["pointerout", "pointerover"]), Ca("onPointerLeave", ["pointerout", "pointerover"]), ta("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ta("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ta("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ta("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ta("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ta("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var al = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        Vv = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(al));

    function B0(t, e) {
        e = (e & 4) !== 0;
        for (var n = 0; n < t.length; n++) {
            var i = t[n],
                s = i.event;
            i = i.listeners;
            t: {
                var u = void 0;
                if (e)
                    for (var d = i.length - 1; 0 <= d; d--) {
                        var v = i[d],
                            T = v.instance,
                            N = v.currentTarget;
                        if (v = v.listener, T !== u && s.isPropagationStopped()) break t;
                        u = v, s.currentTarget = N;
                        try {
                            u(s)
                        } catch (D) {
                            Jl(D)
                        }
                        s.currentTarget = null, u = T
                    } else
                        for (d = 0; d < i.length; d++) {
                            if (v = i[d], T = v.instance, N = v.currentTarget, v = v.listener, T !== u && s.isPropagationStopped()) break t;
                            u = v, s.currentTarget = N;
                            try {
                                u(s)
                            } catch (D) {
                                Jl(D)
                            }
                            s.currentTarget = null, u = T
                        }
            }
        }
    }

    function ft(t, e) {
        var n = e[ko];
        n === void 0 && (n = e[ko] = new Set);
        var i = t + "__bubble";
        n.has(i) || (U0(e, t, 2, !1), n.add(i))
    }

    function bu(t, e, n) {
        var i = 0;
        e && (i |= 4), U0(n, t, i, e)
    }
    var Rs = "_reactListening" + Math.random().toString(36).slice(2);

    function xu(t) {
        if (!t[Rs]) {
            t[Rs] = !0, kf.forEach(function(n) {
                n !== "selectionchange" && (Vv.has(n) || bu(n, !1, t), bu(n, !0, t))
            });
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[Rs] || (e[Rs] = !0, bu("selectionchange", !1, e))
        }
    }

    function U0(t, e, n, i) {
        switch (hm(e)) {
            case 2:
                var s = cb;
                break;
            case 8:
                s = fb;
                break;
            default:
                s = Ou
        }
        n = s.bind(null, e, n, t), s = void 0, !Ho || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0), i ? s !== void 0 ? t.addEventListener(e, n, {
            capture: !0,
            passive: s
        }) : t.addEventListener(e, n, !0) : s !== void 0 ? t.addEventListener(e, n, {
            passive: s
        }) : t.addEventListener(e, n, !1)
    }

    function Su(t, e, n, i, s) {
        var u = i;
        if ((e & 1) === 0 && (e & 2) === 0 && i !== null) t: for (;;) {
            if (i === null) return;
            var d = i.tag;
            if (d === 3 || d === 4) {
                var v = i.stateNode.containerInfo;
                if (v === s) break;
                if (d === 4)
                    for (d = i.return; d !== null;) {
                        var T = d.tag;
                        if ((T === 3 || T === 4) && d.stateNode.containerInfo === s) return;
                        d = d.return
                    }
                for (; v !== null;) {
                    if (d = Ma(v), d === null) return;
                    if (T = d.tag, T === 5 || T === 6 || T === 26 || T === 27) {
                        i = u = d;
                        continue t
                    }
                    v = v.parentNode
                }
            }
            i = i.return
        }
        Gf(function() {
            var N = u,
                D = Uo(n),
                V = [];
            t: {
                var C = gd.get(t);
                if (C !== void 0) {
                    var _ = Ql,
                        F = t;
                    switch (t) {
                        case "keypress":
                            if (Gl(n) === 0) break t;
                        case "keydown":
                        case "keyup":
                            _ = C1;
                            break;
                        case "focusin":
                            F = "focus", _ = Xo;
                            break;
                        case "focusout":
                            F = "blur", _ = Xo;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            _ = Xo;
                            break;
                        case "click":
                            if (n.button === 2) break t;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            _ = Zf;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            _ = g1;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            _ = D1;
                            break;
                        case hd:
                        case md:
                        case pd:
                            _ = x1;
                            break;
                        case yd:
                            _ = R1;
                            break;
                        case "scroll":
                        case "scrollend":
                            _ = p1;
                            break;
                        case "wheel":
                            _ = V1;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            _ = T1;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            _ = Jf;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            _ = U1
                    }
                    var at = (e & 4) !== 0,
                        Mt = !at && (t === "scroll" || t === "scrollend"),
                        j = at ? C !== null ? C + "Capture" : null : C;
                    at = [];
                    for (var A = N, E; A !== null;) {
                        var R = A;
                        if (E = R.stateNode, R = R.tag, R !== 5 && R !== 26 && R !== 27 || E === null || j === null || (R = ji(A, j), R != null && at.push(il(A, R, E))), Mt) break;
                        A = A.return
                    }
                    0 < at.length && (C = new _(C, F, null, n, D), V.push({
                        event: C,
                        listeners: at
                    }))
                }
            }
            if ((e & 7) === 0) {
                t: {
                    if (C = t === "mouseover" || t === "pointerover", _ = t === "mouseout" || t === "pointerout", C && n !== Bo && (F = n.relatedTarget || n.fromElement) && (Ma(F) || F[ja])) break t;
                    if ((_ || C) && (C = D.window === D ? D : (C = D.ownerDocument) ? C.defaultView || C.parentWindow : window, _ ? (F = n.relatedTarget || n.toElement, _ = N, F = F ? Ma(F) : null, F !== null && (Mt = h(F), at = F.tag, F !== Mt || at !== 5 && at !== 27 && at !== 6) && (F = null)) : (_ = null, F = N), _ !== F)) {
                        if (at = Zf, R = "onMouseLeave", j = "onMouseEnter", A = "mouse", (t === "pointerout" || t === "pointerover") && (at = Jf, R = "onPointerLeave", j = "onPointerEnter", A = "pointer"), Mt = _ == null ? C : wi(_), E = F == null ? C : wi(F), C = new at(R, A + "leave", _, n, D), C.target = Mt, C.relatedTarget = E, R = null, Ma(D) === N && (at = new at(j, A + "enter", F, n, D), at.target = E, at.relatedTarget = Mt, R = at), Mt = R, _ && F) e: {
                            for (at = Bv, j = _, A = F, E = 0, R = j; R; R = at(R)) E++;R = 0;
                            for (var et = A; et; et = at(et)) R++;
                            for (; 0 < E - R;) j = at(j),
                            E--;
                            for (; 0 < R - E;) A = at(A),
                            R--;
                            for (; E--;) {
                                if (j === A || A !== null && j === A.alternate) {
                                    at = j;
                                    break e
                                }
                                j = at(j), A = at(A)
                            }
                            at = null
                        }
                        else at = null;
                        _ !== null && L0(V, C, _, at, !1), F !== null && Mt !== null && L0(V, Mt, F, at, !0)
                    }
                }
                t: {
                    if (C = N ? wi(N) : window, _ = C.nodeName && C.nodeName.toLowerCase(), _ === "select" || _ === "input" && C.type === "file") var gt = nd;
                    else if (td(C))
                        if (ad) gt = J1;
                        else {
                            gt = Z1;
                            var tt = Q1
                        }
                    else _ = C.nodeName,
                    !_ || _.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? N && Vo(N.elementType) && (gt = nd) : gt = K1;
                    if (gt && (gt = gt(t, N))) {
                        ed(V, gt, n, D);
                        break t
                    }
                    tt && tt(t, C, N),
                    t === "focusout" && N && C.type === "number" && N.memoizedProps.value != null && Oo(C, "number", C.value)
                }
                switch (tt = N ? wi(N) : window, t) {
                    case "focusin":
                        (td(tt) || tt.contentEditable === "true") && (Oa = tt, Wo = N, zi = null);
                        break;
                    case "focusout":
                        zi = Wo = Oa = null;
                        break;
                    case "mousedown":
                        $o = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        $o = !1, fd(V, n, D);
                        break;
                    case "selectionchange":
                        if (W1) break;
                    case "keydown":
                    case "keyup":
                        fd(V, n, D)
                }
                var rt;
                if (Zo) t: {
                    switch (t) {
                        case "compositionstart":
                            var mt = "onCompositionStart";
                            break t;
                        case "compositionend":
                            mt = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            mt = "onCompositionUpdate";
                            break t
                    }
                    mt = void 0
                }
                else Ra ? Pf(t, n) && (mt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (mt = "onCompositionStart");mt && (Ff && n.locale !== "ko" && (Ra || mt !== "onCompositionStart" ? mt === "onCompositionEnd" && Ra && (rt = Xf()) : (An = D, qo = "value" in An ? An.value : An.textContent, Ra = !0)), tt = Os(N, mt), 0 < tt.length && (mt = new Kf(mt, t, null, n, D), V.push({
                    event: mt,
                    listeners: tt
                }), rt ? mt.data = rt : (rt = If(n), rt !== null && (mt.data = rt)))),
                (rt = H1 ? q1(t, n) : Y1(t, n)) && (mt = Os(N, "onBeforeInput"), 0 < mt.length && (tt = new Kf("onBeforeInput", "beforeinput", null, n, D), V.push({
                    event: tt,
                    listeners: mt
                }), tt.data = rt)),
                zv(V, t, N, n, D)
            }
            B0(V, e)
        })
    }

    function il(t, e, n) {
        return {
            instance: t,
            listener: e,
            currentTarget: n
        }
    }

    function Os(t, e) {
        for (var n = e + "Capture", i = []; t !== null;) {
            var s = t,
                u = s.stateNode;
            if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || u === null || (s = ji(t, n), s != null && i.unshift(il(t, s, u)), s = ji(t, e), s != null && i.push(il(t, s, u))), t.tag === 3) return i;
            t = t.return
        }
        return []
    }

    function Bv(t) {
        if (t === null) return null;
        do t = t.return; while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }

    function L0(t, e, n, i, s) {
        for (var u = e._reactName, d = []; n !== null && n !== i;) {
            var v = n,
                T = v.alternate,
                N = v.stateNode;
            if (v = v.tag, T !== null && T === i) break;
            v !== 5 && v !== 26 && v !== 27 || N === null || (T = N, s ? (N = ji(n, u), N != null && d.unshift(il(n, N, T))) : s || (N = ji(n, u), N != null && d.push(il(n, N, T)))), n = n.return
        }
        d.length !== 0 && t.push({
            event: e,
            listeners: d
        })
    }
    var Uv = /\r\n?/g,
        Lv = /\u0000|\uFFFD/g;

    function H0(t) {
        return (typeof t == "string" ? t : "" + t).replace(Uv, `
`).replace(Lv, "")
    }

    function q0(t, e) {
        return e = H0(e), H0(t) === e
    }

    function jt(t, e, n, i, s, u) {
        switch (n) {
            case "children":
                typeof i == "string" ? e === "body" || e === "textarea" && i === "" || ka(t, i) : (typeof i == "number" || typeof i == "bigint") && e !== "body" && ka(t, "" + i);
                break;
            case "className":
                Ll(t, "class", i);
                break;
            case "tabIndex":
                Ll(t, "tabindex", i);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                Ll(t, n, i);
                break;
            case "style":
                qf(t, i, u);
                break;
            case "data":
                if (e !== "object") {
                    Ll(t, "data", i);
                    break
                }
            case "src":
            case "href":
                if (i === "" && (e !== "a" || n !== "href")) {
                    t.removeAttribute(n);
                    break
                }
                if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
                    t.removeAttribute(n);
                    break
                }
                i = ql("" + i), t.setAttribute(n, i);
                break;
            case "action":
            case "formAction":
                if (typeof i == "function") {
                    t.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof u == "function" && (n === "formAction" ? (e !== "input" && jt(t, e, "name", s.name, s, null), jt(t, e, "formEncType", s.formEncType, s, null), jt(t, e, "formMethod", s.formMethod, s, null), jt(t, e, "formTarget", s.formTarget, s, null)) : (jt(t, e, "encType", s.encType, s, null), jt(t, e, "method", s.method, s, null), jt(t, e, "target", s.target, s, null)));
                if (i == null || typeof i == "symbol" || typeof i == "boolean") {
                    t.removeAttribute(n);
                    break
                }
                i = ql("" + i), t.setAttribute(n, i);
                break;
            case "onClick":
                i != null && (t.onclick = en);
                break;
            case "onScroll":
                i != null && ft("scroll", t);
                break;
            case "onScrollEnd":
                i != null && ft("scrollend", t);
                break;
            case "dangerouslySetInnerHTML":
                if (i != null) {
                    if (typeof i != "object" || !("__html" in i)) throw Error(r(61));
                    if (n = i.__html, n != null) {
                        if (s.children != null) throw Error(r(60));
                        t.innerHTML = n
                    }
                }
                break;
            case "multiple":
                t.multiple = i && typeof i != "function" && typeof i != "symbol";
                break;
            case "muted":
                t.muted = i && typeof i != "function" && typeof i != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
                    t.removeAttribute("xlink:href");
                    break
                }
                n = ql("" + i), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, "" + i) : t.removeAttribute(n);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                i && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
                break;
            case "capture":
            case "download":
                i === !0 ? t.setAttribute(n, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, i) : t.removeAttribute(n);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? t.setAttribute(n, i) : t.removeAttribute(n);
                break;
            case "rowSpan":
            case "start":
                i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? t.removeAttribute(n) : t.setAttribute(n, i);
                break;
            case "popover":
                ft("beforetoggle", t), ft("toggle", t), Ul(t, "popover", i);
                break;
            case "xlinkActuate":
                tn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
                break;
            case "xlinkArcrole":
                tn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
                break;
            case "xlinkRole":
                tn(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
                break;
            case "xlinkShow":
                tn(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
                break;
            case "xlinkTitle":
                tn(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
                break;
            case "xlinkType":
                tn(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
                break;
            case "xmlBase":
                tn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
                break;
            case "xmlLang":
                tn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
                break;
            case "xmlSpace":
                tn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
                break;
            case "is":
                Ul(t, "is", i);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = h1.get(n) || n, Ul(t, n, i))
        }
    }

    function Tu(t, e, n, i, s, u) {
        switch (n) {
            case "style":
                qf(t, i, u);
                break;
            case "dangerouslySetInnerHTML":
                if (i != null) {
                    if (typeof i != "object" || !("__html" in i)) throw Error(r(61));
                    if (n = i.__html, n != null) {
                        if (s.children != null) throw Error(r(60));
                        t.innerHTML = n
                    }
                }
                break;
            case "children":
                typeof i == "string" ? ka(t, i) : (typeof i == "number" || typeof i == "bigint") && ka(t, "" + i);
                break;
            case "onScroll":
                i != null && ft("scroll", t);
                break;
            case "onScrollEnd":
                i != null && ft("scrollend", t);
                break;
            case "onClick":
                i != null && (t.onclick = en);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!Df.hasOwnProperty(n)) t: {
                    if (n[0] === "o" && n[1] === "n" && (s = n.endsWith("Capture"), e = n.slice(2, s ? n.length - 7 : void 0), u = t[ce] || null, u = u != null ? u[n] : null, typeof u == "function" && t.removeEventListener(e, u, s), typeof i == "function")) {
                        typeof u != "function" && u !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, i, s);
                        break t
                    }
                    n in t ? t[n] = i : i === !0 ? t.setAttribute(n, "") : Ul(t, n, i)
                }
        }
    }

    function ne(t, e, n) {
        switch (e) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                ft("error", t), ft("load", t);
                var i = !1,
                    s = !1,
                    u;
                for (u in n)
                    if (n.hasOwnProperty(u)) {
                        var d = n[u];
                        if (d != null) switch (u) {
                            case "src":
                                i = !0;
                                break;
                            case "srcSet":
                                s = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(r(137, e));
                            default:
                                jt(t, e, u, d, n, null)
                        }
                    }
                s && jt(t, e, "srcSet", n.srcSet, n, null), i && jt(t, e, "src", n.src, n, null);
                return;
            case "input":
                ft("invalid", t);
                var v = u = d = s = null,
                    T = null,
                    N = null;
                for (i in n)
                    if (n.hasOwnProperty(i)) {
                        var D = n[i];
                        if (D != null) switch (i) {
                            case "name":
                                s = D;
                                break;
                            case "type":
                                d = D;
                                break;
                            case "checked":
                                T = D;
                                break;
                            case "defaultChecked":
                                N = D;
                                break;
                            case "value":
                                u = D;
                                break;
                            case "defaultValue":
                                v = D;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (D != null) throw Error(r(137, e));
                                break;
                            default:
                                jt(t, e, i, D, n, null)
                        }
                    }
                Bf(t, u, v, T, N, d, s, !1);
                return;
            case "select":
                ft("invalid", t), i = d = u = null;
                for (s in n)
                    if (n.hasOwnProperty(s) && (v = n[s], v != null)) switch (s) {
                        case "value":
                            u = v;
                            break;
                        case "defaultValue":
                            d = v;
                            break;
                        case "multiple":
                            i = v;
                        default:
                            jt(t, e, s, v, n, null)
                    }
                e = u, n = d, t.multiple = !!i, e != null ? _a(t, !!i, e, !1) : n != null && _a(t, !!i, n, !0);
                return;
            case "textarea":
                ft("invalid", t), u = s = i = null;
                for (d in n)
                    if (n.hasOwnProperty(d) && (v = n[d], v != null)) switch (d) {
                        case "value":
                            i = v;
                            break;
                        case "defaultValue":
                            s = v;
                            break;
                        case "children":
                            u = v;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (v != null) throw Error(r(91));
                            break;
                        default:
                            jt(t, e, d, v, n, null)
                    }
                Lf(t, i, s, u);
                return;
            case "option":
                for (T in n)
                    if (n.hasOwnProperty(T) && (i = n[T], i != null)) switch (T) {
                        case "selected":
                            t.selected = i && typeof i != "function" && typeof i != "symbol";
                            break;
                        default:
                            jt(t, e, T, i, n, null)
                    }
                return;
            case "dialog":
                ft("beforetoggle", t), ft("toggle", t), ft("cancel", t), ft("close", t);
                break;
            case "iframe":
            case "object":
                ft("load", t);
                break;
            case "video":
            case "audio":
                for (i = 0; i < al.length; i++) ft(al[i], t);
                break;
            case "image":
                ft("error", t), ft("load", t);
                break;
            case "details":
                ft("toggle", t);
                break;
            case "embed":
            case "source":
            case "link":
                ft("error", t), ft("load", t);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (N in n)
                    if (n.hasOwnProperty(N) && (i = n[N], i != null)) switch (N) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(r(137, e));
                        default:
                            jt(t, e, N, i, n, null)
                    }
                return;
            default:
                if (Vo(e)) {
                    for (D in n) n.hasOwnProperty(D) && (i = n[D], i !== void 0 && Tu(t, e, D, i, n, void 0));
                    return
                }
        }
        for (v in n) n.hasOwnProperty(v) && (i = n[v], i != null && jt(t, e, v, i, n, null))
    }

    function Hv(t, e, n, i) {
        switch (e) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var s = null,
                    u = null,
                    d = null,
                    v = null,
                    T = null,
                    N = null,
                    D = null;
                for (_ in n) {
                    var V = n[_];
                    if (n.hasOwnProperty(_) && V != null) switch (_) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            T = V;
                        default:
                            i.hasOwnProperty(_) || jt(t, e, _, null, i, V)
                    }
                }
                for (var C in i) {
                    var _ = i[C];
                    if (V = n[C], i.hasOwnProperty(C) && (_ != null || V != null)) switch (C) {
                        case "type":
                            u = _;
                            break;
                        case "name":
                            s = _;
                            break;
                        case "checked":
                            N = _;
                            break;
                        case "defaultChecked":
                            D = _;
                            break;
                        case "value":
                            d = _;
                            break;
                        case "defaultValue":
                            v = _;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (_ != null) throw Error(r(137, e));
                            break;
                        default:
                            _ !== V && jt(t, e, C, _, i, V)
                    }
                }
                Ro(t, d, v, T, N, D, u, s);
                return;
            case "select":
                _ = d = v = C = null;
                for (u in n)
                    if (T = n[u], n.hasOwnProperty(u) && T != null) switch (u) {
                        case "value":
                            break;
                        case "multiple":
                            _ = T;
                        default:
                            i.hasOwnProperty(u) || jt(t, e, u, null, i, T)
                    }
                for (s in i)
                    if (u = i[s], T = n[s], i.hasOwnProperty(s) && (u != null || T != null)) switch (s) {
                        case "value":
                            C = u;
                            break;
                        case "defaultValue":
                            v = u;
                            break;
                        case "multiple":
                            d = u;
                        default:
                            u !== T && jt(t, e, s, u, i, T)
                    }
                e = v, n = d, i = _, C != null ? _a(t, !!n, C, !1) : !!i != !!n && (e != null ? _a(t, !!n, e, !0) : _a(t, !!n, n ? [] : "", !1));
                return;
            case "textarea":
                _ = C = null;
                for (v in n)
                    if (s = n[v], n.hasOwnProperty(v) && s != null && !i.hasOwnProperty(v)) switch (v) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            jt(t, e, v, null, i, s)
                    }
                for (d in i)
                    if (s = i[d], u = n[d], i.hasOwnProperty(d) && (s != null || u != null)) switch (d) {
                        case "value":
                            C = s;
                            break;
                        case "defaultValue":
                            _ = s;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (s != null) throw Error(r(91));
                            break;
                        default:
                            s !== u && jt(t, e, d, s, i, u)
                    }
                Uf(t, C, _);
                return;
            case "option":
                for (var F in n)
                    if (C = n[F], n.hasOwnProperty(F) && C != null && !i.hasOwnProperty(F)) switch (F) {
                        case "selected":
                            t.selected = !1;
                            break;
                        default:
                            jt(t, e, F, null, i, C)
                    }
                for (T in i)
                    if (C = i[T], _ = n[T], i.hasOwnProperty(T) && C !== _ && (C != null || _ != null)) switch (T) {
                        case "selected":
                            t.selected = C && typeof C != "function" && typeof C != "symbol";
                            break;
                        default:
                            jt(t, e, T, C, i, _)
                    }
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var at in n) C = n[at], n.hasOwnProperty(at) && C != null && !i.hasOwnProperty(at) && jt(t, e, at, null, i, C);
                for (N in i)
                    if (C = i[N], _ = n[N], i.hasOwnProperty(N) && C !== _ && (C != null || _ != null)) switch (N) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (C != null) throw Error(r(137, e));
                            break;
                        default:
                            jt(t, e, N, C, i, _)
                    }
                return;
            default:
                if (Vo(e)) {
                    for (var Mt in n) C = n[Mt], n.hasOwnProperty(Mt) && C !== void 0 && !i.hasOwnProperty(Mt) && Tu(t, e, Mt, void 0, i, C);
                    for (D in i) C = i[D], _ = n[D], !i.hasOwnProperty(D) || C === _ || C === void 0 && _ === void 0 || Tu(t, e, D, C, i, _);
                    return
                }
        }
        for (var j in n) C = n[j], n.hasOwnProperty(j) && C != null && !i.hasOwnProperty(j) && jt(t, e, j, null, i, C);
        for (V in i) C = i[V], _ = n[V], !i.hasOwnProperty(V) || C === _ || C == null && _ == null || jt(t, e, V, C, i, _)
    }

    function Y0(t) {
        switch (t) {
            case "css":
            case "script":
            case "font":
            case "img":
            case "image":
            case "input":
            case "link":
                return !0;
            default:
                return !1
        }
    }

    function qv() {
        if (typeof performance.getEntriesByType == "function") {
            for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), i = 0; i < n.length; i++) {
                var s = n[i],
                    u = s.transferSize,
                    d = s.initiatorType,
                    v = s.duration;
                if (u && v && Y0(d)) {
                    for (d = 0, v = s.responseEnd, i += 1; i < n.length; i++) {
                        var T = n[i],
                            N = T.startTime;
                        if (N > v) break;
                        var D = T.transferSize,
                            V = T.initiatorType;
                        D && Y0(V) && (T = T.responseEnd, d += D * (T < v ? 1 : (v - N) / (T - N)))
                    }
                    if (--i, e += 8 * (u + d) / (s.duration / 1e3), t++, 10 < t) break
                }
            }
            if (0 < t) return e / t / 1e6
        }
        return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5
    }
    var Au = null,
        wu = null;

    function Vs(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }

    function G0(t) {
        switch (t) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function X0(t, e) {
        if (t === 0) switch (e) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
        }
        return t === 1 && e === "foreignObject" ? 0 : t
    }

    function ju(t, e) {
        return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
    }
    var Mu = null;

    function Yv() {
        var t = window.event;
        return t && t.type === "popstate" ? t === Mu ? !1 : (Mu = t, !0) : (Mu = null, !1)
    }
    var Q0 = typeof setTimeout == "function" ? setTimeout : void 0,
        Gv = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Z0 = typeof Promise == "function" ? Promise : void 0,
        Xv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Z0 < "u" ? function(t) {
            return Z0.resolve(null).then(t).catch(Qv)
        } : Q0;

    function Qv(t) {
        setTimeout(function() {
            throw t
        })
    }

    function Hn(t) {
        return t === "head"
    }

    function K0(t, e) {
        var n = e,
            i = 0;
        do {
            var s = n.nextSibling;
            if (t.removeChild(n), s && s.nodeType === 8)
                if (n = s.data, n === "/$" || n === "/&") {
                    if (i === 0) {
                        t.removeChild(s), ri(e);
                        return
                    }
                    i--
                } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") i++;
            else if (n === "html") ll(t.ownerDocument.documentElement);
            else if (n === "head") {
                n = t.ownerDocument.head, ll(n);
                for (var u = n.firstChild; u;) {
                    var d = u.nextSibling,
                        v = u.nodeName;
                    u[Ai] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = d
                }
            } else n === "body" && ll(t.ownerDocument.body);
            n = s
        } while (n);
        ri(e)
    }

    function J0(t, e) {
        var n = t;
        t = 0;
        do {
            var i = n.nextSibling;
            if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), i && i.nodeType === 8)
                if (n = i.data, n === "/$") {
                    if (t === 0) break;
                    t--
                } else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
            n = i
        } while (n)
    }

    function Eu(t) {
        var e = t.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e;) {
            var n = e;
            switch (e = e.nextSibling, n.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    Eu(n), Do(n);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (n.rel.toLowerCase() === "stylesheet") continue
            }
            t.removeChild(n)
        }
    }

    function Zv(t, e, n, i) {
        for (; t.nodeType === 1;) {
            var s = n;
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden")) break
            } else if (i) {
                if (!t[Ai]) switch (e) {
                    case "meta":
                        if (!t.hasAttribute("itemprop")) break;
                        return t;
                    case "link":
                        if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence")) break;
                        if (u !== s.rel || t.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || t.getAttribute("title") !== (s.title == null ? null : s.title)) break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence")) break;
                        return t;
                    case "script":
                        if (u = t.getAttribute("src"), (u !== (s.src == null ? null : s.src) || t.getAttribute("type") !== (s.type == null ? null : s.type) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
                        return t;
                    default:
                        return t
                }
            } else if (e === "input" && t.type === "hidden") {
                var u = s.name == null ? null : "" + s.name;
                if (s.type === "hidden" && t.getAttribute("name") === u) return t
            } else return t;
            if (t = Ve(t.nextSibling), t === null) break
        }
        return null
    }

    function Kv(t, e, n) {
        if (e === "") return null;
        for (; t.nodeType !== 3;)
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Ve(t.nextSibling), t === null)) return null;
        return t
    }

    function F0(t, e) {
        for (; t.nodeType !== 8;)
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ve(t.nextSibling), t === null)) return null;
        return t
    }

    function Nu(t) {
        return t.data === "$?" || t.data === "$~"
    }

    function Cu(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading"
    }

    function Jv(t, e) {
        var n = t.ownerDocument;
        if (t.data === "$~") t._reactRetry = e;
        else if (t.data !== "$?" || n.readyState !== "loading") e();
        else {
            var i = function() {
                e(), n.removeEventListener("DOMContentLoaded", i)
            };
            n.addEventListener("DOMContentLoaded", i), t._reactRetry = i
        }
    }

    function Ve(t) {
        for (; t != null; t = t.nextSibling) {
            var e = t.nodeType;
            if (e === 1 || e === 3) break;
            if (e === 8) {
                if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F") break;
                if (e === "/$" || e === "/&") return null
            }
        }
        return t
    }
    var _u = null;

    function W0(t) {
        t = t.nextSibling;
        for (var e = 0; t;) {
            if (t.nodeType === 8) {
                var n = t.data;
                if (n === "/$" || n === "/&") {
                    if (e === 0) return Ve(t.nextSibling);
                    e--
                } else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++
            }
            t = t.nextSibling
        }
        return null
    }

    function $0(t) {
        t = t.previousSibling;
        for (var e = 0; t;) {
            if (t.nodeType === 8) {
                var n = t.data;
                if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
                    if (e === 0) return t;
                    e--
                } else n !== "/$" && n !== "/&" || e++
            }
            t = t.previousSibling
        }
        return null
    }

    function P0(t, e, n) {
        switch (e = Vs(n), t) {
            case "html":
                if (t = e.documentElement, !t) throw Error(r(452));
                return t;
            case "head":
                if (t = e.head, !t) throw Error(r(453));
                return t;
            case "body":
                if (t = e.body, !t) throw Error(r(454));
                return t;
            default:
                throw Error(r(451))
        }
    }

    function ll(t) {
        for (var e = t.attributes; e.length;) t.removeAttributeNode(e[0]);
        Do(t)
    }
    var Be = new Map,
        I0 = new Set;

    function Bs(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var vn = X.d;
    X.d = {
        f: Fv,
        r: Wv,
        D: $v,
        C: Pv,
        L: Iv,
        m: tb,
        X: nb,
        S: eb,
        M: ab
    };

    function Fv() {
        var t = vn.f(),
            e = Ns();
        return t || e
    }

    function Wv(t) {
        var e = Ea(t);
        e !== null && e.tag === 5 && e.type === "form" ? yh(e) : vn.r(t)
    }
    var li = typeof document > "u" ? null : document;

    function tm(t, e, n) {
        var i = li;
        if (i && typeof e == "string" && e) {
            var s = Ce(e);
            s = 'link[rel="' + t + '"][href="' + s + '"]', typeof n == "string" && (s += '[crossorigin="' + n + '"]'), I0.has(s) || (I0.add(s), t = {
                rel: t,
                crossOrigin: n,
                href: e
            }, i.querySelector(s) === null && (e = i.createElement("link"), ne(e, "link", t), Wt(e), i.head.appendChild(e)))
        }
    }

    function $v(t) {
        vn.D(t), tm("dns-prefetch", t, null)
    }

    function Pv(t, e) {
        vn.C(t, e), tm("preconnect", t, e)
    }

    function Iv(t, e, n) {
        vn.L(t, e, n);
        var i = li;
        if (i && t && e) {
            var s = 'link[rel="preload"][as="' + Ce(e) + '"]';
            e === "image" && n && n.imageSrcSet ? (s += '[imagesrcset="' + Ce(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (s += '[imagesizes="' + Ce(n.imageSizes) + '"]')) : s += '[href="' + Ce(t) + '"]';
            var u = s;
            switch (e) {
                case "style":
                    u = si(t);
                    break;
                case "script":
                    u = oi(t)
            }
            Be.has(u) || (t = x({
                rel: "preload",
                href: e === "image" && n && n.imageSrcSet ? void 0 : t,
                as: e
            }, n), Be.set(u, t), i.querySelector(s) !== null || e === "style" && i.querySelector(sl(u)) || e === "script" && i.querySelector(ol(u)) || (e = i.createElement("link"), ne(e, "link", t), Wt(e), i.head.appendChild(e)))
        }
    }

    function tb(t, e) {
        vn.m(t, e);
        var n = li;
        if (n && t) {
            var i = e && typeof e.as == "string" ? e.as : "script",
                s = 'link[rel="modulepreload"][as="' + Ce(i) + '"][href="' + Ce(t) + '"]',
                u = s;
            switch (i) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    u = oi(t)
            }
            if (!Be.has(u) && (t = x({
                    rel: "modulepreload",
                    href: t
                }, e), Be.set(u, t), n.querySelector(s) === null)) {
                switch (i) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (n.querySelector(ol(u))) return
                }
                i = n.createElement("link"), ne(i, "link", t), Wt(i), n.head.appendChild(i)
            }
        }
    }

    function eb(t, e, n) {
        vn.S(t, e, n);
        var i = li;
        if (i && t) {
            var s = Na(i).hoistableStyles,
                u = si(t);
            e = e || "default";
            var d = s.get(u);
            if (!d) {
                var v = {
                    loading: 0,
                    preload: null
                };
                if (d = i.querySelector(sl(u))) v.loading = 5;
                else {
                    t = x({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": e
                    }, n), (n = Be.get(u)) && ku(t, n);
                    var T = d = i.createElement("link");
                    Wt(T), ne(T, "link", t), T._p = new Promise(function(N, D) {
                        T.onload = N, T.onerror = D
                    }), T.addEventListener("load", function() {
                        v.loading |= 1
                    }), T.addEventListener("error", function() {
                        v.loading |= 2
                    }), v.loading |= 4, Us(d, e, i)
                }
                d = {
                    type: "stylesheet",
                    instance: d,
                    count: 1,
                    state: v
                }, s.set(u, d)
            }
        }
    }

    function nb(t, e) {
        vn.X(t, e);
        var n = li;
        if (n && t) {
            var i = Na(n).hoistableScripts,
                s = oi(t),
                u = i.get(s);
            u || (u = n.querySelector(ol(s)), u || (t = x({
                src: t,
                async: !0
            }, e), (e = Be.get(s)) && Du(t, e), u = n.createElement("script"), Wt(u), ne(u, "link", t), n.head.appendChild(u)), u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            }, i.set(s, u))
        }
    }

    function ab(t, e) {
        vn.M(t, e);
        var n = li;
        if (n && t) {
            var i = Na(n).hoistableScripts,
                s = oi(t),
                u = i.get(s);
            u || (u = n.querySelector(ol(s)), u || (t = x({
                src: t,
                async: !0,
                type: "module"
            }, e), (e = Be.get(s)) && Du(t, e), u = n.createElement("script"), Wt(u), ne(u, "link", t), n.head.appendChild(u)), u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            }, i.set(s, u))
        }
    }

    function em(t, e, n, i) {
        var s = (s = ut.current) ? Bs(s) : null;
        if (!s) throw Error(r(446));
        switch (t) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof n.precedence == "string" && typeof n.href == "string" ? (e = si(n.href), n = Na(s).hoistableStyles, i = n.get(e), i || (i = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, n.set(e, i)), i) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
                    t = si(n.href);
                    var u = Na(s).hoistableStyles,
                        d = u.get(t);
                    if (d || (s = s.ownerDocument || s, d = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, u.set(t, d), (u = s.querySelector(sl(t))) && !u._p && (d.instance = u, d.state.loading = 5), Be.has(t) || (n = {
                            rel: "preload",
                            as: "style",
                            href: n.href,
                            crossOrigin: n.crossOrigin,
                            integrity: n.integrity,
                            media: n.media,
                            hrefLang: n.hrefLang,
                            referrerPolicy: n.referrerPolicy
                        }, Be.set(t, n), u || ib(s, t, n, d.state))), e && i === null) throw Error(r(528, ""));
                    return d
                }
                if (e && i !== null) throw Error(r(529, ""));
                return null;
            case "script":
                return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = oi(n), n = Na(s).hoistableScripts, i = n.get(e), i || (i = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, n.set(e, i)), i) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(r(444, t))
        }
    }

    function si(t) {
        return 'href="' + Ce(t) + '"'
    }

    function sl(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }

    function nm(t) {
        return x({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }

    function ib(t, e, n, i) {
        t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? i.loading = 1 : (e = t.createElement("link"), i.preload = e, e.addEventListener("load", function() {
            return i.loading |= 1
        }), e.addEventListener("error", function() {
            return i.loading |= 2
        }), ne(e, "link", n), Wt(e), t.head.appendChild(e))
    }

    function oi(t) {
        return '[src="' + Ce(t) + '"]'
    }

    function ol(t) {
        return "script[async]" + t
    }

    function am(t, e, n) {
        if (e.count++, e.instance === null) switch (e.type) {
            case "style":
                var i = t.querySelector('style[data-href~="' + Ce(n.href) + '"]');
                if (i) return e.instance = i, Wt(i), i;
                var s = x({}, n, {
                    "data-href": n.href,
                    "data-precedence": n.precedence,
                    href: null,
                    precedence: null
                });
                return i = (t.ownerDocument || t).createElement("style"), Wt(i), ne(i, "style", s), Us(i, n.precedence, t), e.instance = i;
            case "stylesheet":
                s = si(n.href);
                var u = t.querySelector(sl(s));
                if (u) return e.state.loading |= 4, e.instance = u, Wt(u), u;
                i = nm(n), (s = Be.get(s)) && ku(i, s), u = (t.ownerDocument || t).createElement("link"), Wt(u);
                var d = u;
                return d._p = new Promise(function(v, T) {
                    d.onload = v, d.onerror = T
                }), ne(u, "link", i), e.state.loading |= 4, Us(u, n.precedence, t), e.instance = u;
            case "script":
                return u = oi(n.src), (s = t.querySelector(ol(u))) ? (e.instance = s, Wt(s), s) : (i = n, (s = Be.get(u)) && (i = x({}, n), Du(i, s)), t = t.ownerDocument || t, s = t.createElement("script"), Wt(s), ne(s, "link", i), t.head.appendChild(s), e.instance = s);
            case "void":
                return null;
            default:
                throw Error(r(443, e.type))
        } else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (i = e.instance, e.state.loading |= 4, Us(i, n.precedence, t));
        return e.instance
    }

    function Us(t, e, n) {
        for (var i = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), s = i.length ? i[i.length - 1] : null, u = s, d = 0; d < i.length; d++) {
            var v = i[d];
            if (v.dataset.precedence === e) u = v;
            else if (u !== s) break
        }
        u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild))
    }

    function ku(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title)
    }

    function Du(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity)
    }
    var Ls = null;

    function im(t, e, n) {
        if (Ls === null) {
            var i = new Map,
                s = Ls = new Map;
            s.set(n, i)
        } else s = Ls, i = s.get(n), i || (i = new Map, s.set(n, i));
        if (i.has(t)) return i;
        for (i.set(t, null), n = n.getElementsByTagName(t), s = 0; s < n.length; s++) {
            var u = n[s];
            if (!(u[Ai] || u[Pt] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var d = u.getAttribute(e) || "";
                d = t + d;
                var v = i.get(d);
                v ? v.push(u) : i.set(d, [u])
            }
        }
        return i
    }

    function lm(t, e, n) {
        t = t.ownerDocument || t, t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null)
    }

    function lb(t, e, n) {
        if (n === 1 || e.itemProp != null) return !1;
        switch (t) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
                return !0;
            case "link":
                if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
                switch (e.rel) {
                    case "stylesheet":
                        return t = e.disabled, typeof e.precedence == "string" && t == null;
                    default:
                        return !0
                }
            case "script":
                if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return !0
        }
        return !1
    }

    function sm(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }

    function sb(t, e, n, i) {
        if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (n.state.loading & 4) === 0) {
            if (n.instance === null) {
                var s = si(i.href),
                    u = e.querySelector(sl(s));
                if (u) {
                    e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Hs.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = u, Wt(u);
                    return
                }
                u = e.ownerDocument || e, i = nm(i), (s = Be.get(s)) && ku(i, s), u = u.createElement("link"), Wt(u);
                var d = u;
                d._p = new Promise(function(v, T) {
                    d.onload = v, d.onerror = T
                }), ne(u, "link", i), n.instance = u
            }
            t.stylesheets === null && (t.stylesheets = new Map), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = Hs.bind(t), e.addEventListener("load", n), e.addEventListener("error", n))
        }
    }
    var zu = 0;

    function ob(t, e) {
        return t.stylesheets && t.count === 0 && Ys(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
            var i = setTimeout(function() {
                if (t.stylesheets && Ys(t, t.stylesheets), t.unsuspend) {
                    var u = t.unsuspend;
                    t.unsuspend = null, u()
                }
            }, 6e4 + e);
            0 < t.imgBytes && zu === 0 && (zu = 62500 * qv());
            var s = setTimeout(function() {
                if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Ys(t, t.stylesheets), t.unsuspend)) {
                    var u = t.unsuspend;
                    t.unsuspend = null, u()
                }
            }, (t.imgBytes > zu ? 50 : 800) + e);
            return t.unsuspend = n,
                function() {
                    t.unsuspend = null, clearTimeout(i), clearTimeout(s)
                }
        } : null
    }

    function Hs() {
        if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets) Ys(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null, t()
            }
        }
    }
    var qs = null;

    function Ys(t, e) {
        t.stylesheets = null, t.unsuspend !== null && (t.count++, qs = new Map, e.forEach(rb, t), qs = null, Hs.call(t))
    }

    function rb(t, e) {
        if (!(e.state.loading & 4)) {
            var n = qs.get(t);
            if (n) var i = n.get(null);
            else {
                n = new Map, qs.set(t, n);
                for (var s = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < s.length; u++) {
                    var d = s[u];
                    (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (n.set(d.dataset.precedence, d), i = d)
                }
                i && n.set(null, i)
            }
            s = e.instance, d = s.getAttribute("data-precedence"), u = n.get(d) || i, u === i && n.set(null, s), n.set(d, s), this.count++, i = Hs.bind(this), s.addEventListener("load", i), s.addEventListener("error", i), u ? u.parentNode.insertBefore(s, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(s, t.firstChild)), e.state.loading |= 4
        }
    }
    var rl = {
        $$typeof: O,
        Provider: null,
        Consumer: null,
        _currentValue: I,
        _currentValue2: I,
        _threadCount: 0
    };

    function ub(t, e, n, i, s, u, d, v, T) {
        this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = No(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = No(0), this.hiddenUpdates = No(null), this.identifierPrefix = i, this.onUncaughtError = s, this.onCaughtError = u, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = new Map
    }

    function om(t, e, n, i, s, u, d, v, T, N, D, V) {
        return t = new ub(t, e, n, d, T, N, D, V, v), e = 1, u === !0 && (e |= 24), u = Se(3, null, null, e), t.current = u, u.stateNode = t, e = dr(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
            element: i,
            isDehydrated: n,
            cache: e
        }, yr(u), t
    }

    function rm(t) {
        return t ? (t = Ua, t) : Ua
    }

    function um(t, e, n, i, s, u) {
        s = rm(s), i.context === null ? i.context = s : i.pendingContext = s, i = Cn(e), i.payload = {
            element: n
        }, u = u === void 0 ? null : u, u !== null && (i.callback = u), n = _n(t, i, e), n !== null && (ye(n, t, e), Hi(n, t, e))
    }

    function cm(t, e) {
        if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
            var n = t.retryLane;
            t.retryLane = n !== 0 && n < e ? n : e
        }
    }

    function Ru(t, e) {
        cm(t, e), (t = t.alternate) && cm(t, e)
    }

    function fm(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = ia(t, 67108864);
            e !== null && ye(e, t, 67108864), Ru(t, 67108864)
        }
    }

    function dm(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = Me();
            e = Co(e);
            var n = ia(t, e);
            n !== null && ye(n, t, e), Ru(t, e)
        }
    }
    var Gs = !0;

    function cb(t, e, n, i) {
        var s = z.T;
        z.T = null;
        var u = X.p;
        try {
            X.p = 2, Ou(t, e, n, i)
        } finally {
            X.p = u, z.T = s
        }
    }

    function fb(t, e, n, i) {
        var s = z.T;
        z.T = null;
        var u = X.p;
        try {
            X.p = 8, Ou(t, e, n, i)
        } finally {
            X.p = u, z.T = s
        }
    }

    function Ou(t, e, n, i) {
        if (Gs) {
            var s = Vu(i);
            if (s === null) Su(t, e, i, Xs, n), mm(t, i);
            else if (hb(s, t, e, n, i)) i.stopPropagation();
            else if (mm(t, i), e & 4 && -1 < db.indexOf(t)) {
                for (; s !== null;) {
                    var u = Ea(s);
                    if (u !== null) switch (u.tag) {
                        case 3:
                            if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                                var d = In(u.pendingLanes);
                                if (d !== 0) {
                                    var v = u;
                                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; d;) {
                                        var T = 1 << 31 - be(d);
                                        v.entanglements[1] |= T, d &= ~T
                                    }
                                    Fe(u), (bt & 6) === 0 && (Ms = ge() + 500, nl(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            v = ia(u, 2), v !== null && ye(v, u, 2), Ns(), Ru(u, 2)
                    }
                    if (u = Vu(i), u === null && Su(t, e, i, Xs, n), u === s) break;
                    s = u
                }
                s !== null && i.stopPropagation()
            } else Su(t, e, i, null, n)
        }
    }

    function Vu(t) {
        return t = Uo(t), Bu(t)
    }
    var Xs = null;

    function Bu(t) {
        if (Xs = null, t = Ma(t), t !== null) {
            var e = h(t);
            if (e === null) t = null;
            else {
                var n = e.tag;
                if (n === 13) {
                    if (t = f(e), t !== null) return t;
                    t = null
                } else if (n === 31) {
                    if (t = p(e), t !== null) return t;
                    t = null
                } else if (n === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
                    t = null
                } else e !== t && (t = null)
            }
        }
        return Xs = t, null
    }

    function hm(t) {
        switch (t) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch ($g()) {
                    case Sf:
                        return 2;
                    case Tf:
                        return 8;
                    case zl:
                    case Pg:
                        return 32;
                    case Af:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var Uu = !1,
        qn = null,
        Yn = null,
        Gn = null,
        ul = new Map,
        cl = new Map,
        Xn = [],
        db = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function mm(t, e) {
        switch (t) {
            case "focusin":
            case "focusout":
                qn = null;
                break;
            case "dragenter":
            case "dragleave":
                Yn = null;
                break;
            case "mouseover":
            case "mouseout":
                Gn = null;
                break;
            case "pointerover":
            case "pointerout":
                ul.delete(e.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                cl.delete(e.pointerId)
        }
    }

    function fl(t, e, n, i, s, u) {
        return t === null || t.nativeEvent !== u ? (t = {
            blockedOn: e,
            domEventName: n,
            eventSystemFlags: i,
            nativeEvent: u,
            targetContainers: [s]
        }, e !== null && (e = Ea(e), e !== null && fm(e)), t) : (t.eventSystemFlags |= i, e = t.targetContainers, s !== null && e.indexOf(s) === -1 && e.push(s), t)
    }

    function hb(t, e, n, i, s) {
        switch (e) {
            case "focusin":
                return qn = fl(qn, t, e, n, i, s), !0;
            case "dragenter":
                return Yn = fl(Yn, t, e, n, i, s), !0;
            case "mouseover":
                return Gn = fl(Gn, t, e, n, i, s), !0;
            case "pointerover":
                var u = s.pointerId;
                return ul.set(u, fl(ul.get(u) || null, t, e, n, i, s)), !0;
            case "gotpointercapture":
                return u = s.pointerId, cl.set(u, fl(cl.get(u) || null, t, e, n, i, s)), !0
        }
        return !1
    }

    function pm(t) {
        var e = Ma(t.target);
        if (e !== null) {
            var n = h(e);
            if (n !== null) {
                if (e = n.tag, e === 13) {
                    if (e = f(n), e !== null) {
                        t.blockedOn = e, Cf(t.priority, function() {
                            dm(n)
                        });
                        return
                    }
                } else if (e === 31) {
                    if (e = p(n), e !== null) {
                        t.blockedOn = e, Cf(t.priority, function() {
                            dm(n)
                        });
                        return
                    }
                } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }

    function Qs(t) {
        if (t.blockedOn !== null) return !1;
        for (var e = t.targetContainers; 0 < e.length;) {
            var n = Vu(t.nativeEvent);
            if (n === null) {
                n = t.nativeEvent;
                var i = new n.constructor(n.type, n);
                Bo = i, n.target.dispatchEvent(i), Bo = null
            } else return e = Ea(n), e !== null && fm(e), t.blockedOn = n, !1;
            e.shift()
        }
        return !0
    }

    function ym(t, e, n) {
        Qs(t) && n.delete(e)
    }

    function mb() {
        Uu = !1, qn !== null && Qs(qn) && (qn = null), Yn !== null && Qs(Yn) && (Yn = null), Gn !== null && Qs(Gn) && (Gn = null), ul.forEach(ym), cl.forEach(ym)
    }

    function Zs(t, e) {
        t.blockedOn === e && (t.blockedOn = null, Uu || (Uu = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, mb)))
    }
    var Ks = null;

    function gm(t) {
        Ks !== t && (Ks = t, a.unstable_scheduleCallback(a.unstable_NormalPriority, function() {
            Ks === t && (Ks = null);
            for (var e = 0; e < t.length; e += 3) {
                var n = t[e],
                    i = t[e + 1],
                    s = t[e + 2];
                if (typeof i != "function") {
                    if (Bu(i || n) === null) continue;
                    break
                }
                var u = Ea(n);
                u !== null && (t.splice(e, 3), e -= 3, Vr(u, {
                    pending: !0,
                    data: s,
                    method: n.method,
                    action: i
                }, i, s))
            }
        }))
    }

    function ri(t) {
        function e(T) {
            return Zs(T, t)
        }
        qn !== null && Zs(qn, t), Yn !== null && Zs(Yn, t), Gn !== null && Zs(Gn, t), ul.forEach(e), cl.forEach(e);
        for (var n = 0; n < Xn.length; n++) {
            var i = Xn[n];
            i.blockedOn === t && (i.blockedOn = null)
        }
        for (; 0 < Xn.length && (n = Xn[0], n.blockedOn === null);) pm(n), n.blockedOn === null && Xn.shift();
        if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
            for (i = 0; i < n.length; i += 3) {
                var s = n[i],
                    u = n[i + 1],
                    d = s[ce] || null;
                if (typeof u == "function") d || gm(n);
                else if (d) {
                    var v = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (s = u, d = u[ce] || null) v = d.formAction;
                        else if (Bu(s) !== null) continue
                    } else v = d.action;
                    typeof v == "function" ? n[i + 1] = v : (n.splice(i, 3), i -= 3), gm(n)
                }
            }
    }

    function vm() {
        function t(u) {
            u.canIntercept && u.info === "react-transition" && u.intercept({
                handler: function() {
                    return new Promise(function(d) {
                        return s = d
                    })
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }

        function e() {
            s !== null && (s(), s = null), i || setTimeout(n, 20)
        }

        function n() {
            if (!i && !navigation.transition) {
                var u = navigation.currentEntry;
                u && u.url != null && navigation.navigate(u.url, {
                    state: u.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var i = !1,
                s = null;
            return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100),
                function() {
                    i = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), s !== null && (s(), s = null)
                }
        }
    }

    function Lu(t) {
        this._internalRoot = t
    }
    Js.prototype.render = Lu.prototype.render = function(t) {
        var e = this._internalRoot;
        if (e === null) throw Error(r(409));
        var n = e.current,
            i = Me();
        um(n, i, t, e, null, null)
    }, Js.prototype.unmount = Lu.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var e = t.containerInfo;
            um(t.current, 2, null, t, null, null), Ns(), e[ja] = null
        }
    };

    function Js(t) {
        this._internalRoot = t
    }
    Js.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var e = Nf();
            t = {
                blockedOn: null,
                target: t,
                priority: e
            };
            for (var n = 0; n < Xn.length && e !== 0 && e < Xn[n].priority; n++);
            Xn.splice(n, 0, t), n === 0 && pm(t)
        }
    };
    var bm = l.version;
    if (bm !== "19.2.4") throw Error(r(527, bm, "19.2.4"));
    X.findDOMNode = function(t) {
        var e = t._reactInternals;
        if (e === void 0) throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
        return t = y(e), t = t !== null ? b(t) : null, t = t === null ? null : t.stateNode, t
    };
    var pb = {
        bundleType: 0,
        version: "19.2.4",
        rendererPackageName: "react-dom",
        currentDispatcherRef: z,
        reconcilerVersion: "19.2.4"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Fs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Fs.isDisabled && Fs.supportsFiber) try {
            xi = Fs.inject(pb), ve = Fs
        } catch {}
    }
    return hl.createRoot = function(t, e) {
        if (!c(t)) throw Error(r(299));
        var n = !1,
            i = "",
            s = Mh,
            u = Eh,
            d = Nh;
        return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (i = e.identifierPrefix), e.onUncaughtError !== void 0 && (s = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (d = e.onRecoverableError)), e = om(t, 1, !1, null, null, n, i, null, s, u, d, vm), t[ja] = e.current, xu(t), new Lu(e)
    }, hl.hydrateRoot = function(t, e, n) {
        if (!c(t)) throw Error(r(299));
        var i = !1,
            s = "",
            u = Mh,
            d = Eh,
            v = Nh,
            T = null;
        return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (d = n.onCaughtError), n.onRecoverableError !== void 0 && (v = n.onRecoverableError), n.formState !== void 0 && (T = n.formState)), e = om(t, 1, !0, e, n ?? null, i, s, T, u, d, v, vm), e.context = rm(null), n = e.current, i = Me(), i = Co(i), s = Cn(i), s.callback = null, _n(n, s, i), n = i, e.current.lanes = n, Ti(e, n), Fe(e), t[ja] = e.current, xu(t), new Js(e)
    }, hl.version = "19.2.4", hl
}
var Cm;

function jb() {
    if (Cm) return Yu.exports;
    Cm = 1;

    function a() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)
        } catch (l) {
            console.error(l)
        }
    }
    return a(), Yu.exports = wb(), Yu.exports
}
var Mb = jb();
const Eb = ty(Mb),
    _m = () => m.jsxs("div", {
        className: "absolute inset-0 pointer-events-none overflow-hidden",
        "aria-hidden": "true",
        children: [m.jsx("div", {
            className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,.16),transparent_32%),radial-gradient(circle_at_15%_55%,rgba(6,182,212,.10),transparent_28%),radial-gradient(circle_at_85%_65%,rgba(99,102,241,.10),transparent_30%)]"
        }), m.jsx("div", {
            className: "absolute inset-0 opacity-40 dark:opacity-25 hero-tech-grid"
        }), m.jsx("div", {
            className: "absolute left-[12%] top-[27%] h-px w-[28%] bg-gradient-to-r from-transparent via-blue-400/35 to-transparent animate-[signalSweep_6s_ease-in-out_infinite]"
        }), m.jsx("div", {
            className: "absolute right-[12%] top-[56%] h-px w-[24%] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-[signalSweep_8s_ease-in-out_infinite_reverse]"
        }), m.jsx("div", {
            className: "absolute left-[14%] right-[14%] bottom-[13%] h-px rounded-full bg-blue-500/10 dark:bg-cyan-400/10"
        }), m.jsx("div", {
            className: "absolute left-[14%] bottom-[13%] h-px w-1/4 overflow-hidden rounded-full bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent animate-[signalLine_4.8s_ease-in-out_infinite]"
        }), m.jsx("div", {
            className: "absolute left-[14%] top-[30%] h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_18px_5px_rgba(34,211,238,.5)] animate-[signalPulse_3s_ease-in-out_infinite]"
        }), m.jsx("div", {
            className: "absolute right-[17%] top-[38%] h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_20px_6px_rgba(59,130,246,.45)] animate-[signalPulse_4s_ease-in-out_infinite_reverse]"
        }), m.jsx("div", {
            className: "absolute left-1/2 top-[42%] h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/5 shadow-[0_0_120px_rgba(37,99,235,.08)]"
        })]
    }),
    Nb = () => m.jsxs("div", {
        className: "absolute inset-0 pointer-events-none overflow-hidden",
        "aria-hidden": "true",
        children: [m.jsx("div", {
            className: "absolute right-10 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
        }), m.jsx("div", {
            className: "absolute left-10 bottom-10 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl"
        }), m.jsx("div", {
            className: "absolute inset-0 rounded-[inherit] hero-tech-grid opacity-25"
        })]
    });
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cb = a => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    _b = a => a.replace(/^([A-Z])|[\s-_]+(\w)/g, (l, o, r) => r ? r.toUpperCase() : o.toLowerCase()),
    km = a => {
        const l = _b(a);
        return l.charAt(0).toUpperCase() + l.slice(1)
    },
    ey = (...a) => a.filter((l, o, r) => !!l && l.trim() !== "" && r.indexOf(l) === o).join(" ").trim(),
    kb = a => {
        for (const l in a)
            if (l.startsWith("aria-") || l === "role" || l === "title") return !0
    };
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Db = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zb = Y.forwardRef(({
    color: a = "currentColor",
    size: l = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: r,
    className: c = "",
    children: h,
    iconNode: f,
    ...p
}, g) => Y.createElement("svg", {
    ref: g,
    ...Db,
    width: l,
    height: l,
    stroke: a,
    strokeWidth: r ? Number(o) * 24 / Number(l) : o,
    className: ey("lucide", c),
    ...!h && !kb(p) && {
        "aria-hidden": "true"
    },
    ...p
}, [...f.map(([y, b]) => Y.createElement(y, b)), ...Array.isArray(h) ? h : [h]]));
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ot = (a, l) => {
    const o = Y.forwardRef(({
        className: r,
        ...c
    }, h) => Y.createElement(zb, {
        ref: h,
        iconNode: l,
        className: ey(`lucide-${Cb(km(a))}`, `lucide-${a}`, r),
        ...c
    }));
    return o.displayName = km(a), o
};
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rb = [
        ["path", {
            d: "M12 5v14",
            key: "s699le"
        }],
        ["path", {
            d: "m19 12-7 7-7-7",
            key: "1idqje"
        }]
    ],
    Dm = ot("arrow-down", Rb);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ob = [
        ["path", {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }],
        ["path", {
            d: "M19 12H5",
            key: "x3x0zl"
        }]
    ],
    Uc = ot("arrow-left", Ob);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vb = [
        ["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }],
        ["path", {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }]
    ],
    Bb = ot("arrow-right", Vb);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ub = [
        ["path", {
            d: "M7 7h10v10",
            key: "1tivn9"
        }],
        ["path", {
            d: "M7 17 17 7",
            key: "1vkiza"
        }]
    ],
    Ta = ot("arrow-up-right", Ub);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lb = [
        ["path", {
            d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
            key: "1yiouv"
        }],
        ["circle", {
            cx: "12",
            cy: "8",
            r: "6",
            key: "1vp47v"
        }]
    ],
    ny = ot("award", Lb);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hb = [
        ["path", {
            d: "M12 7v14",
            key: "1akyts"
        }],
        ["path", {
            d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
            key: "ruj8y"
        }]
    ],
    ay = ot("book-open", Hb);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qb = [
        ["path", {
            d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",
            key: "ezmyqa"
        }],
        ["path", {
            d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",
            key: "e1hn23"
        }]
    ],
    iy = ot("braces", qb);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yb = [
        ["path", {
            d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
            key: "l5xja"
        }],
        ["path", {
            d: "M9 13a4.5 4.5 0 0 0 3-4",
            key: "10igwf"
        }],
        ["path", {
            d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
            key: "105sqy"
        }],
        ["path", {
            d: "M3.477 10.896a4 4 0 0 1 .585-.396",
            key: "ql3yin"
        }],
        ["path", {
            d: "M6 18a4 4 0 0 1-1.967-.516",
            key: "2e4loj"
        }],
        ["path", {
            d: "M12 13h4",
            key: "1ku699"
        }],
        ["path", {
            d: "M12 18h6a2 2 0 0 1 2 2v1",
            key: "105ag5"
        }],
        ["path", {
            d: "M12 8h8",
            key: "1lhi5i"
        }],
        ["path", {
            d: "M16 8V5a2 2 0 0 1 2-2",
            key: "u6izg6"
        }],
        ["circle", {
            cx: "16",
            cy: "13",
            r: ".5",
            key: "ry7gng"
        }],
        ["circle", {
            cx: "18",
            cy: "3",
            r: ".5",
            key: "1aiba7"
        }],
        ["circle", {
            cx: "20",
            cy: "21",
            r: ".5",
            key: "yhc1fs"
        }],
        ["circle", {
            cx: "20",
            cy: "8",
            r: ".5",
            key: "1e43v0"
        }]
    ],
    ly = ot("brain-circuit", Yb);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gb = [
        ["path", {
            d: "M12 18V5",
            key: "adv99a"
        }],
        ["path", {
            d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",
            key: "1e3is1"
        }],
        ["path", {
            d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",
            key: "1gqd8o"
        }],
        ["path", {
            d: "M17.997 5.125a4 4 0 0 1 2.526 5.77",
            key: "iwvgf7"
        }],
        ["path", {
            d: "M18 18a4 4 0 0 0 2-7.464",
            key: "efp6ie"
        }],
        ["path", {
            d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",
            key: "1gq6am"
        }],
        ["path", {
            d: "M6 18a4 4 0 0 1-2-7.464",
            key: "k1g0md"
        }],
        ["path", {
            d: "M6.003 5.125a4 4 0 0 0-2.526 5.77",
            key: "q97ue3"
        }]
    ],
    Xb = ot("brain", Gb);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qb = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }]
    ],
    Zb = ot("circle-check", Qb);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kb = [
        ["path", {
            d: "m18 16 4-4-4-4",
            key: "1inbqp"
        }],
        ["path", {
            d: "m6 8-4 4 4 4",
            key: "15zrgr"
        }],
        ["path", {
            d: "m14.5 4-5 16",
            key: "e7oirm"
        }]
    ],
    Lc = ot("code-xml", Kb);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jb = [
        ["path", {
            d: "m16 18 6-6-6-6",
            key: "eg8j8"
        }],
        ["path", {
            d: "m8 6-6 6 6 6",
            key: "ppft3o"
        }]
    ],
    Fb = ot("code", Jb);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wb = [
        ["path", {
            d: "M12 20v2",
            key: "1lh1kg"
        }],
        ["path", {
            d: "M12 2v2",
            key: "tus03m"
        }],
        ["path", {
            d: "M17 20v2",
            key: "1rnc9c"
        }],
        ["path", {
            d: "M17 2v2",
            key: "11trls"
        }],
        ["path", {
            d: "M2 12h2",
            key: "1t8f8n"
        }],
        ["path", {
            d: "M2 17h2",
            key: "7oei6x"
        }],
        ["path", {
            d: "M2 7h2",
            key: "asdhe0"
        }],
        ["path", {
            d: "M20 12h2",
            key: "1q8mjw"
        }],
        ["path", {
            d: "M20 17h2",
            key: "1fpfkl"
        }],
        ["path", {
            d: "M20 7h2",
            key: "1o8tra"
        }],
        ["path", {
            d: "M7 20v2",
            key: "4gnj0m"
        }],
        ["path", {
            d: "M7 2v2",
            key: "1i4yhu"
        }],
        ["rect", {
            x: "4",
            y: "4",
            width: "16",
            height: "16",
            rx: "2",
            key: "1vbyd7"
        }],
        ["rect", {
            x: "8",
            y: "8",
            width: "8",
            height: "8",
            rx: "1",
            key: "z9xiuo"
        }]
    ],
    $b = ot("cpu", Wb);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pb = [
        ["path", {
            d: "M12 15V3",
            key: "m9g1x1"
        }],
        ["path", {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }],
        ["path", {
            d: "m7 10 5 5 5-5",
            key: "brsn70"
        }]
    ],
    Ib = ot("download", Pb);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tx = [
        ["path", {
            d: "M21.54 15H17a2 2 0 0 0-2 2v4.54",
            key: "1djwo0"
        }],
        ["path", {
            d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
            key: "1tzkfa"
        }],
        ["path", {
            d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",
            key: "14pb5j"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }]
    ],
    ex = ot("earth", tx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nx = [
        ["path", {
            d: "M15 3h6v6",
            key: "1q9fwt"
        }],
        ["path", {
            d: "M10 14 21 3",
            key: "gplh6r"
        }],
        ["path", {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp"
        }]
    ],
    ax = ot("external-link", nx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ix = [
        ["path", {
            d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
            key: "1jg4f8"
        }]
    ],
    lx = ot("facebook", ix);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sx = [
        ["path", {
            d: "M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",
            key: "1wthlu"
        }],
        ["path", {
            d: "M14 2v5a1 1 0 0 0 1 1h5",
            key: "wfsgrz"
        }],
        ["path", {
            d: "m5 16-3 3 3 3",
            key: "331omg"
        }],
        ["path", {
            d: "m9 22 3-3-3-3",
            key: "lsp7cz"
        }]
    ],
    ox = ot("file-code-corner", sx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rx = [
        ["path", {
            d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
            key: "1oefj6"
        }],
        ["path", {
            d: "M14 2v5a1 1 0 0 0 1 1h5",
            key: "wfsgrz"
        }],
        ["path", {
            d: "M10 9H8",
            key: "b1mrlr"
        }],
        ["path", {
            d: "M16 13H8",
            key: "t4e002"
        }],
        ["path", {
            d: "M16 17H8",
            key: "z1uh3a"
        }]
    ],
    ux = ot("file-text", rx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cx = [
        ["path", {
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
            key: "tonef"
        }],
        ["path", {
            d: "M9 18c-4.51 2-5-2-7-2",
            key: "9comsn"
        }]
    ],
    to = ot("github", cx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fx = [
        ["path", {
            d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
            key: "j76jl0"
        }],
        ["path", {
            d: "M22 10v6",
            key: "1lu8f3"
        }],
        ["path", {
            d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
            key: "1r8lef"
        }]
    ],
    dx = ot("graduation-cap", fx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hx = [
        ["rect", {
            width: "20",
            height: "20",
            x: "2",
            y: "2",
            rx: "5",
            ry: "5",
            key: "2e1cvw"
        }],
        ["path", {
            d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
            key: "9exkf1"
        }],
        ["line", {
            x1: "17.5",
            x2: "17.51",
            y1: "6.5",
            y2: "6.5",
            key: "r4j83e"
        }]
    ],
    mx = ot("instagram", hx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const px = [
        ["path", {
            d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
            key: "zw3jo"
        }],
        ["path", {
            d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
            key: "1wduqc"
        }],
        ["path", {
            d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
            key: "kqbvx6"
        }]
    ],
    yx = ot("layers", px);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gx = [
        ["path", {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
            key: "c2jq9f"
        }],
        ["rect", {
            width: "4",
            height: "12",
            x: "2",
            y: "9",
            key: "mk3on5"
        }],
        ["circle", {
            cx: "4",
            cy: "4",
            r: "2",
            key: "bt5ra8"
        }]
    ],
    vx = ot("linkedin", gx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bx = [
        ["path", {
            d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
            key: "132q7q"
        }],
        ["rect", {
            x: "2",
            y: "4",
            width: "20",
            height: "16",
            rx: "2",
            key: "izxlao"
        }]
    ],
    xx = ot("mail", bx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sx = [
        ["path", {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }],
        ["circle", {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }]
    ],
    sy = ot("map-pin", Sx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tx = [
        ["path", {
            d: "M4 5h16",
            key: "1tepv9"
        }],
        ["path", {
            d: "M4 12h16",
            key: "1lakjw"
        }],
        ["path", {
            d: "M4 19h16",
            key: "1djgab"
        }]
    ],
    Ax = ot("menu", Tx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wx = [
        ["path", {
            d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
            key: "1sd12s"
        }]
    ],
    jx = ot("message-circle", wx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mx = [
        ["path", {
            d: "M12 19v3",
            key: "npa21l"
        }],
        ["path", {
            d: "M19 10v2a7 7 0 0 1-14 0v-2",
            key: "1vc78b"
        }],
        ["rect", {
            x: "9",
            y: "2",
            width: "6",
            height: "13",
            rx: "3",
            key: "s6n7sd"
        }]
    ],
    Ex = ot("mic", Mx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nx = [
        ["path", {
            d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",
            key: "10dyio"
        }],
        ["path", {
            d: "M10 19v-3.96 3.15",
            key: "1irgej"
        }],
        ["path", {
            d: "M7 19h5",
            key: "qswx4l"
        }],
        ["rect", {
            width: "6",
            height: "10",
            x: "16",
            y: "12",
            rx: "2",
            key: "1egngj"
        }]
    ],
    Cx = ot("monitor-smartphone", Nx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _x = [
        ["path", {
            d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
            key: "kfwtm"
        }]
    ],
    kx = ot("moon", _x);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dx = [
        ["path", {
            d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",
            key: "edeuup"
        }]
    ],
    zx = ot("mouse-pointer-2", Dx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rx = [
        ["path", {
            d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
            key: "e79jfc"
        }],
        ["circle", {
            cx: "13.5",
            cy: "6.5",
            r: ".5",
            fill: "currentColor",
            key: "1okk4w"
        }],
        ["circle", {
            cx: "17.5",
            cy: "10.5",
            r: ".5",
            fill: "currentColor",
            key: "f64h9f"
        }],
        ["circle", {
            cx: "6.5",
            cy: "12.5",
            r: ".5",
            fill: "currentColor",
            key: "qy21gx"
        }],
        ["circle", {
            cx: "8.5",
            cy: "7.5",
            r: ".5",
            fill: "currentColor",
            key: "fotxhn"
        }]
    ],
    Ox = ot("palette", Rx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vx = [
        ["path", {
            d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
            key: "m3kijz"
        }],
        ["path", {
            d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
            key: "1fmvmk"
        }],
        ["path", {
            d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
            key: "1f8sc4"
        }],
        ["path", {
            d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
            key: "qeys4"
        }]
    ],
    Bx = ot("rocket", Vx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ux = [
        ["path", {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3"
        }],
        ["path", {
            d: "m21.854 2.147-10.94 10.939",
            key: "12cjpa"
        }]
    ],
    Lx = ot("send", Ux);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hx = [
        ["path", {
            d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
            key: "1s2grr"
        }],
        ["path", {
            d: "M20 2v4",
            key: "1rf3ol"
        }],
        ["path", {
            d: "M22 4h-4",
            key: "gwowj6"
        }],
        ["circle", {
            cx: "4",
            cy: "20",
            r: "2",
            key: "6kqj1y"
        }]
    ],
    oy = ot("sparkles", Hx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qx = [
        ["path", {
            d: "M11 2v2",
            key: "1539x4"
        }],
        ["path", {
            d: "M5 2v2",
            key: "1yf1q8"
        }],
        ["path", {
            d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",
            key: "rb5t3r"
        }],
        ["path", {
            d: "M8 15a6 6 0 0 0 12 0v-3",
            key: "x18d4x"
        }],
        ["circle", {
            cx: "20",
            cy: "10",
            r: "2",
            key: "ts1r5v"
        }]
    ],
    Yx = ot("stethoscope", qx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gx = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "4",
            key: "4exip2"
        }],
        ["path", {
            d: "M12 2v2",
            key: "tus03m"
        }],
        ["path", {
            d: "M12 20v2",
            key: "1lh1kg"
        }],
        ["path", {
            d: "m4.93 4.93 1.41 1.41",
            key: "149t6j"
        }],
        ["path", {
            d: "m17.66 17.66 1.41 1.41",
            key: "ptbguv"
        }],
        ["path", {
            d: "M2 12h2",
            key: "1t8f8n"
        }],
        ["path", {
            d: "M20 12h2",
            key: "1q8mjw"
        }],
        ["path", {
            d: "m6.34 17.66-1.41 1.41",
            key: "1m8zz5"
        }],
        ["path", {
            d: "m19.07 4.93-1.41 1.41",
            key: "1shlcs"
        }]
    ],
    Xx = ot("sun", Gx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qx = [
        ["path", {
            d: "M12 19h8",
            key: "baeox8"
        }],
        ["path", {
            d: "m4 17 6-6-6-6",
            key: "1yngyt"
        }]
    ],
    ry = ot("terminal", Qx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zx = [
        ["path", {
            d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
            key: "uqj9uw"
        }],
        ["path", {
            d: "M16 9a5 5 0 0 1 0 6",
            key: "1q6k2b"
        }],
        ["path", {
            d: "M19.364 18.364a9 9 0 0 0 0-12.728",
            key: "ijwkga"
        }]
    ],
    Kx = ot("volume-2", Zx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jx = [
        ["path", {
            d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
            key: "uqj9uw"
        }],
        ["line", {
            x1: "22",
            x2: "16",
            y1: "9",
            y2: "15",
            key: "1ewh16"
        }],
        ["line", {
            x1: "16",
            x2: "22",
            y1: "9",
            y2: "15",
            key: "5ykzw1"
        }]
    ],
    Fx = ot("volume-x", Jx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wx = [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ],
    uy = ot("x", Wx),
    $x = [{
        name: "React",
        level: "Building real interfaces",
        icon: Lc,
        tone: "from-cyan-400 to-blue-600"
    }, {
        name: "JavaScript",
        level: "Actively learning",
        icon: ox,
        tone: "from-amber-400 to-orange-500"
    }, {
        name: "TypeScript",
        level: "Learning + using",
        icon: iy,
        tone: "from-blue-500 to-indigo-600"
    }, {
        name: "CSS",
        level: "Building responsive UI",
        icon: Ox,
        tone: "from-sky-400 to-blue-600"
    }, {
        name: "Responsive UI",
        level: "Practical focus",
        icon: Cx,
        tone: "from-violet-500 to-indigo-600"
    }, {
        name: "AI Tools",
        level: "Practical workflow",
        icon: ly,
        tone: "from-cyan-400 to-violet-600"
    }, {
        name: "C++",
        level: "Learning fundamentals",
        icon: ry,
        tone: "from-slate-500 to-blue-600"
    }, {
        name: "MS Office",
        level: "Completed course",
        icon: ny,
        tone: "from-blue-500 to-cyan-500"
    }],
    Px = () => m.jsxs("div", {
        className: "relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/70 p-5 shadow-[0_24px_80px_rgba(15,23,42,.07)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/55 md:p-7",
        children: [m.jsx("div", {
            className: "absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl"
        }), m.jsxs("div", {
            className: "relative mb-6 flex items-center justify-between gap-4",
            children: [m.jsxs("div", {
                children: [m.jsxs("div", {
                    className: "mb-1 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.24em] text-blue-600 dark:text-cyan-400",
                    children: [m.jsx(oy, {
                        size: 13
                    }), " Technologies I Use"]
                }), m.jsx("p", {
                    className: "text-sm text-slate-500 dark:text-slate-400",
                    children: "Tools I am actively learning, practicing, and building with."
                })]
            }), m.jsx("div", {
                className: "hidden rounded-2xl border border-slate-200 bg-white/80 p-3 text-blue-600 shadow-sm dark:border-slate-700 dark:bg-slate-950/70 dark:text-cyan-400 sm:block",
                children: m.jsx(ry, {
                    size: 20
                })
            })]
        }), m.jsx("div", {
            className: "grid gap-3 sm:grid-cols-2",
            children: $x.map(({
                name: a,
                level: l,
                icon: o,
                tone: r
            }, c) => m.jsxs("div", {
                className: "group relative overflow-hidden flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/75 p-3.5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_16px_35px_rgba(37,99,235,.10)] dark:border-slate-800 dark:bg-slate-950/45",
                children: [m.jsx("div", {
                    className: "pointer-events-none absolute inset-y-0 -left-16 w-16 -skew-x-12 bg-white/25 blur-md transition-all duration-700 group-hover:left-[110%]"
                }), m.jsx("div", {
                    className: `relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${r} text-white shadow-md`,
                    children: m.jsx(o, {
                        size: 18
                    })
                }), m.jsxs("div", {
                    className: "relative min-w-0",
                    children: [m.jsx("div", {
                        className: "font-bold text-slate-800 dark:text-white",
                        children: a
                    }), m.jsx("div", {
                        className: "text-[11px] font-medium text-slate-500 dark:text-slate-400",
                        children: l
                    })]
                }), m.jsxs("span", {
                    className: "relative ml-auto text-[10px] font-black tabular-nums text-slate-400 dark:text-slate-500",
                    children: ["0", c + 1]
                })]
            }, a))
        })]
    }),
    Ix = ({
        onJourney: a
    }) => {
        const l = [
            ["Current focus", "React + JavaScript", "Building stronger component logic, interactions, and responsive interfaces.", Lc],
            ["Learning next", "TypeScript", "Improving types, structure, and maintainability while working on React projects.", iy],
            ["Practice style", "Build → debug → improve", "I learn through real projects, testing changes, reading errors, and iterating.", Bx]
        ];
        return m.jsxs("div", {
            className: "relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-950/[.03] p-5 dark:border-slate-800/80 dark:bg-white/[.025] md:p-7",
            children: [m.jsx("div", {
                className: "absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl"
            }), m.jsxs("div", {
                className: "relative mb-6 flex items-end justify-between gap-4",
                children: [m.jsxs("div", {
                    children: [m.jsxs("div", {
                        className: "mb-1 flex items-center gap-2 text-[10px] font-black uppercase tracking-[.24em] text-blue-600 dark:text-cyan-400",
                        children: [m.jsx(zx, {
                            size: 13
                        }), " Learning Focus"]
                    }), m.jsx("h3", {
                        className: "text-2xl font-black tracking-tight text-slate-900 dark:text-white",
                        children: "What I’m improving now."
                    })]
                }), m.jsxs("button", {
                    onClick: a,
                    className: "hidden rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-black text-blue-600 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-500 dark:border-slate-700 dark:bg-slate-900 dark:text-cyan-400 sm:inline-flex",
                    children: ["My Journey ", m.jsx(Ta, {
                        size: 14,
                        className: "ml-1"
                    })]
                })]
            }), m.jsx("div", {
                className: "grid gap-3",
                children: l.map(([o, r, c, h]) => m.jsxs("div", {
                    className: "group flex gap-4 rounded-2xl border border-slate-200/70 bg-white/70 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-white dark:border-slate-800 dark:bg-slate-950/45 dark:hover:bg-slate-900",
                    children: [m.jsx("div", {
                        className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/15 transition duration-300 group-hover:scale-105 group-hover:bg-cyan-500",
                        children: yo.createElement(h, {
                            size: 18
                        })
                    }), m.jsxs("div", {
                        children: [m.jsx("div", {
                            className: "text-[10px] font-black uppercase tracking-[.18em] text-blue-600 dark:text-cyan-400",
                            children: o
                        }), m.jsx("div", {
                            className: "mt-1 font-bold text-slate-900 dark:text-white",
                            children: r
                        }), m.jsx("p", {
                            className: "mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400",
                            children: c
                        })]
                    })]
                }, r))
            }), m.jsxs("button", {
                onClick: a,
                className: "mt-5 inline-flex items-center gap-2 text-sm font-black text-blue-600 transition hover:gap-3 dark:text-cyan-400 sm:hidden",
                children: ["Open My Journey ", m.jsx(Ta, {
                    size: 15
                })]
            })]
        })
    },
    t2 = () => m.jsxs("div", {
        className: "relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/70 p-6 shadow-[0_24px_80px_rgba(15,23,42,.07)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/55 md:p-8",
        children: [m.jsx("div", {
            className: "absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl"
        }), m.jsxs("div", {
            className: "relative mb-8",
            children: [m.jsxs("div", {
                className: "mb-1 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.24em] text-blue-600 dark:text-cyan-400",
                children: [m.jsx(sy, {
                    size: 13
                }), " Developer Journey"]
            }), m.jsx("h3", {
                className: "text-2xl font-bold text-slate-900 dark:text-white",
                children: "Learning by building real things."
            }), m.jsx("p", {
                className: "mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400",
                children: "A practical path from computer fundamentals to frontend development, with every project adding a new layer."
            })]
        }), m.jsx("div", {
            className: "relative space-y-5 before:absolute before:bottom-5 before:left-[19px] before:top-5 before:w-px before:bg-gradient-to-b before:from-blue-500 before:via-cyan-400 before:to-transparent",
            children: [
                ["01", "Foundation", "Computer and programming fundamentals became the base for my web development learning.", dx],
                ["02", "DAE CIT — Rasul", "Diploma in Computer Information Technology with study around programming, web development, networks, graphics and computer applications.", yx],
                ["03", "MS Office Course", "Completed an MS Office course and added practical office productivity skills alongside development learning.", ny],
                ["04", "Builder", "Started turning learning into real work: Eman AI, AstraFlow AI, portfolio work and a client website.", Lc],
                ["05", "Next Chapter", "Deepening JavaScript, React, TypeScript and responsive UI through practical projects.", Ta]
            ].map(([a, l, o, r]) => m.jsxs("div", {
                className: "group relative flex gap-4",
                children: [m.jsx("div", {
                    className: "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/30 bg-white text-blue-600 shadow-md transition duration-300 group-hover:scale-110 group-hover:border-cyan-400 group-hover:text-cyan-500 dark:bg-slate-950 dark:text-cyan-400",
                    children: yo.createElement(r, {
                        size: 17
                    })
                }), m.jsxs("div", {
                    className: "flex-1 rounded-2xl border border-slate-200/80 bg-white/65 p-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:border-cyan-400/45 group-hover:shadow-lg dark:border-slate-800 dark:bg-slate-950/45",
                    children: [m.jsxs("div", {
                        className: "mb-1 flex flex-wrap items-center gap-2",
                        children: [m.jsx("span", {
                            className: "text-[10px] font-black tracking-[0.18em] text-blue-600 dark:text-cyan-400",
                            children: a
                        }), m.jsx("h4", {
                            className: "font-bold text-slate-900 dark:text-white",
                            children: l
                        })]
                    }), m.jsx("p", {
                        className: "text-sm leading-6 text-slate-600 dark:text-slate-400",
                        children: o
                    })]
                })]
            }, a))
        })]
    }),
    yl = [{
        title: "Eman AI Islamic Assistant",
        desc: "AI-assisted Islamic Q&A web application with a conversational interface and modern web UI.",
        icon: ly,
        link: "https://github.com/CodeWithSyed786/EmanAi-Islamic-Assistant",
        live: "https://eman-ai-b85da.web.app",
        tone: "from-rose-500 to-pink-600",
        tech: ["React", "AI", "Web"]
    }, {
        title: "AstraFlow AI",
        desc: "AI developer workspace concept focused on practical development workflows and automation.",
        icon: oy,
        link: "https://github.com/CodeWithSyed786/AstraFlow-AI",
        live: "https://github.com/CodeWithSyed786/AstraFlow-AI",
        tone: "from-blue-600 to-cyan-500",
        tech: ["React", "AI", "Workflow"]
    }, {
        title: "Dr. Kinza Saleem",
        desc: "Professional portfolio website built for a real client with a clean responsive presentation.",
        icon: Yx,
        link: "https://github.com/CodeWithSyed786/Dr-Kinza-Saleem",
        live: "https://dr-kinza-portfolio.web.app",
        tone: "from-violet-600 to-indigo-600",
        tech: ["React", "CSS", "Responsive UI"]
    }],
    e2 = () => {
        const a = [...yl, ...yl];
        return m.jsx("div", {
            className: "premium-marquee overflow-hidden py-4",
            "aria-label": "Featured projects",
            children: m.jsx("div", {
                className: "project-marquee-track flex w-max gap-6 will-change-transform",
                children: a.map((l, o) => {
                    const r = l.icon,
                        c = o % yl.length + 1;
                    return m.jsxs("article", {
                        className: "project-card group relative w-[min(84vw,370px)] shrink-0 overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 text-left shadow-[0_18px_55px_rgba(15,23,42,.07)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/70 hover:shadow-[0_28px_80px_rgba(37,99,235,.18)] dark:border-slate-800/90 dark:bg-slate-900/75",
                        children: [m.jsx("div", {
                            className: `absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${l.tone} opacity-10 blur-3xl transition duration-500 group-hover:scale-125 group-hover:opacity-25`
                        }), m.jsx("div", {
                            className: "project-card-shine pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                        }), m.jsxs("div", {
                            className: "relative mb-7 flex items-start justify-between",
                            children: [m.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [m.jsx("div", {
                                    className: `flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${l.tone} text-white shadow-lg shadow-blue-500/10 transition duration-500 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-cyan-500/20`,
                                    children: m.jsx(r, {
                                        size: 24
                                    })
                                }), m.jsxs("div", {
                                    children: [m.jsx("span", {
                                        className: "block text-[10px] font-black uppercase tracking-[.2em] text-slate-400",
                                        children: "Project"
                                    }), m.jsxs("span", {
                                        className: "text-xs font-bold text-blue-600 dark:text-cyan-400",
                                        children: ["0", c]
                                    })]
                                })]
                            }), m.jsx("span", {
                                className: "flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/70 text-slate-400 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-cyan-400/60 group-hover:text-cyan-500 dark:border-slate-700 dark:bg-slate-950/60",
                                children: m.jsx(Ta, {
                                    size: 18
                                })
                            })]
                        }), m.jsxs("div", {
                            className: "relative",
                            children: [m.jsx("h3", {
                                className: "mb-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white",
                                children: l.title
                            }), m.jsx("p", {
                                className: "mb-5 min-h-[72px] text-sm leading-6 text-slate-600 dark:text-slate-400",
                                children: l.desc
                            }), m.jsx("div", {
                                className: "mb-6 flex flex-wrap gap-1.5",
                                children: l.tech.map(h => m.jsx("span", {
                                    className: "rounded-full border border-blue-100 bg-blue-50/90 px-2.5 py-1 text-[10px] font-bold text-blue-700 transition group-hover:border-cyan-200 dark:border-cyan-400/15 dark:bg-cyan-400/5 dark:text-cyan-300",
                                    children: h
                                }, h))
                            }), m.jsxs("div", {
                                className: "flex flex-wrap gap-2",
                                children: [m.jsxs("a", {
                                    href: l.live,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-3.5 py-2 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md hover:shadow-blue-500/25",
                                    children: [m.jsx(ex, {
                                        size: 13
                                    }), " Live"]
                                }), m.jsxs("a", {
                                    href: l.link,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white/80 px-3.5 py-2 text-xs font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-200 dark:hover:text-cyan-400",
                                    children: [m.jsx(to, {
                                        size: 13
                                    }), " GitHub"]
                                })]
                            })]
                        })]
                    }, `${l.title}-${o}`)
                })
            })
        })
    },
    fc = [{
        title: "Building with AI",
        summary: "How I use AI as a development partner while keeping the coding, testing, and decisions in my hands.",
        content: "AI has become part of my development workflow. I use it to explore ideas, understand unfamiliar code, debug problems, and move faster when building real projects. The important part for me is not simply generating code—it is understanding what the code does, testing it, and learning from every change."
    }, {
        title: "What I Learned from Debugging",
        summary: "Real bugs taught me to read errors carefully, trace the problem, and fix the cause instead of guessing.",
        content: "Debugging has taught me that errors are part of the development process, not a reason to stop. I am learning to read the error message first, find where the problem starts, make one focused change, and test again. Each bug I fix gives me a better understanding of how my projects actually work."
    }, {
        title: "My Developer Journey",
        summary: "From learning the fundamentals to building real projects, one practical step at a time.",
        content: "My journey is built around learning by doing. I started with programming and web fundamentals, then moved into React, CSS, TypeScript, JavaScript, and real project development. I am still learning, but every project, bug, and improvement is helping me become a more confident frontend developer."
    }],
    n2 = ({
        onRead: a
    }) => m.jsx("div", {
        className: "grid gap-5 md:grid-cols-3",
        children: fc.map((l, o) => m.jsxs("button", {
            onClick: () => a(o),
            className: "group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/70 p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60",
            children: [m.jsx("div", {
                className: "absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-blue-500/15"
            }), m.jsx(ay, {
                className: "relative mb-5 text-indigo-600 dark:text-cyan-400"
            }), m.jsx("h3", {
                className: "relative font-bold text-slate-900 dark:text-white",
                children: l.title
            }), m.jsx("p", {
                className: "relative mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400",
                children: l.summary
            }), m.jsxs("span", {
                className: "relative mt-5 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-cyan-400",
                children: ["Read Note ", m.jsx(Ta, {
                    size: 15
                })]
            })]
        }, l.title))
    }),
    a2 = ({
        projectId: a,
        onBack: l
    }) => {
        const o = yl[a] ?? yl[0];
        return m.jsxs("div", {
            className: "mx-auto max-w-5xl px-6 pb-24 pt-32",
            children: [m.jsxs("button", {
                onClick: l,
                className: "mb-10 flex items-center gap-2 font-semibold",
                children: [m.jsx(Uc, {
                    size: 18
                }), " Back"]
            }), m.jsxs("div", {
                className: "premium-glass relative overflow-hidden rounded-[2rem] p-8 md:p-12",
                children: [m.jsx("div", {
                    className: `absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br ${o.tone} opacity-10 blur-3xl`
                }), (() => {
                    const r = o.icon;
                    return m.jsx(r, {
                        className: "relative mb-5 text-indigo-600 dark:text-cyan-400",
                        size: 30
                    })
                })(), m.jsx("h1", {
                    className: "relative mb-4 text-4xl font-bold",
                    children: o.title
                }), m.jsx("p", {
                    className: "relative mb-8 text-lg leading-8 text-slate-600 dark:text-slate-400",
                    children: o.desc
                }), m.jsxs("a", {
                    href: o.link,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "relative inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-cyan-500",
                    children: ["Open GitHub Repository ", m.jsx(ax, {
                        size: 16
                    })]
                })]
            })]
        })
    },
    i2 = ({
        blogId: a,
        onBack: l
    }) => {
        const o = fc[a] ?? fc[0];
        return m.jsxs("div", {
            className: "mx-auto max-w-4xl px-6 pb-24 pt-32",
            children: [m.jsxs("button", {
                onClick: l,
                className: "mb-10 flex items-center gap-2 font-semibold",
                children: [m.jsx(Uc, {
                    size: 18
                }), " Back"]
            }), m.jsxs("article", {
                className: "premium-glass rounded-[2rem] p-8 md:p-12",
                children: [m.jsx(ay, {
                    className: "mb-5 text-indigo-600 dark:text-cyan-400"
                }), m.jsx("div", {
                    className: "mb-3 text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-cyan-400",
                    children: "Developer Note"
                }), m.jsx("h1", {
                    className: "mb-5 text-4xl font-bold",
                    children: o.title
                }), m.jsx("p", {
                    className: "mb-8 text-lg leading-8 text-slate-600 dark:text-slate-400",
                    children: o.summary
                }), m.jsx("div", {
                    className: "border-t border-slate-200 pt-8 dark:border-slate-800",
                    children: m.jsx("p", {
                        className: "text-base leading-8 text-slate-700 dark:text-slate-300",
                        children: o.content
                    })
                })]
            })]
        })
    },
    Hc = Y.createContext({});

function Aa(a) {
    const l = Y.useRef(null);
    return l.current === null && (l.current = a()), l.current
}
const cy = typeof window < "u",
    qc = cy ? Y.useLayoutEffect : Y.useEffect,
    go = Y.createContext(null);

function Yc(a, l) {
    a.indexOf(l) === -1 && a.push(l)
}

function Gc(a, l) {
    const o = a.indexOf(l);
    o > -1 && a.splice(o, 1)
}
const Ie = (a, l, o) => o > l ? l : o < a ? a : o;
let Xc = () => {};
const bn = {},
    fy = a => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a);

function dy(a) {
    return typeof a == "object" && a !== null
}
const hy = a => /^0[^.\s]+$/u.test(a);

function Qc(a) {
    let l;
    return () => (l === void 0 && (l = a()), l)
}
const Le = a => a,
    l2 = (a, l) => o => l(a(o)),
    El = (...a) => a.reduce(l2),
    Tl = (a, l, o) => {
        const r = l - a;
        return r === 0 ? 1 : (o - a) / r
    };
class Zc {
    constructor() {
        this.subscriptions = []
    }
    add(l) {
        return Yc(this.subscriptions, l), () => Gc(this.subscriptions, l)
    }
    notify(l, o, r) {
        const c = this.subscriptions.length;
        if (c)
            if (c === 1) this.subscriptions[0](l, o, r);
            else
                for (let h = 0; h < c; h++) {
                    const f = this.subscriptions[h];
                    f && f(l, o, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const $e = a => a * 1e3,
    Ue = a => a / 1e3;

function my(a, l) {
    return l ? a * (1e3 / l) : 0
}
const py = (a, l, o) => (((1 - 3 * o + 3 * l) * a + (3 * o - 6 * l)) * a + 3 * l) * a,
    s2 = 1e-7,
    o2 = 12;

function r2(a, l, o, r, c) {
    let h, f, p = 0;
    do f = l + (o - l) / 2, h = py(f, r, c) - a, h > 0 ? o = f : l = f; while (Math.abs(h) > s2 && ++p < o2);
    return f
}

function Nl(a, l, o, r) {
    if (a === l && o === r) return Le;
    const c = h => r2(h, 0, 1, a, o);
    return h => h === 0 || h === 1 ? h : py(c(h), l, r)
}
const yy = a => l => l <= .5 ? a(2 * l) / 2 : (2 - a(2 * (1 - l))) / 2,
    gy = a => l => 1 - a(1 - l),
    vy = Nl(.33, 1.53, .69, .99),
    Kc = gy(vy),
    by = yy(Kc),
    xy = a => (a *= 2) < 1 ? .5 * Kc(a) : .5 * (2 - Math.pow(2, -10 * (a - 1))),
    Jc = a => 1 - Math.sin(Math.acos(a)),
    Sy = gy(Jc),
    Ty = yy(Jc),
    u2 = Nl(.42, 0, 1, 1),
    c2 = Nl(0, 0, .58, 1),
    Ay = Nl(.42, 0, .58, 1),
    f2 = a => Array.isArray(a) && typeof a[0] != "number",
    wy = a => Array.isArray(a) && typeof a[0] == "number",
    d2 = {
        linear: Le,
        easeIn: u2,
        easeInOut: Ay,
        easeOut: c2,
        circIn: Jc,
        circInOut: Ty,
        circOut: Sy,
        backIn: Kc,
        backInOut: by,
        backOut: vy,
        anticipate: xy
    },
    h2 = a => typeof a == "string",
    zm = a => {
        if (wy(a)) {
            Xc(a.length === 4);
            const [l, o, r, c] = a;
            return Nl(l, o, r, c)
        } else if (h2(a)) return d2[a];
        return a
    },
    Ws = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];

function m2(a, l) {
    let o = new Set,
        r = new Set,
        c = !1,
        h = !1;
    const f = new WeakSet;
    let p = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function g(b) {
        f.has(b) && (y.schedule(b), a()), b(p)
    }
    const y = {
        schedule: (b, x = !1, S = !1) => {
            const k = S && c ? o : r;
            return x && f.add(b), k.has(b) || k.add(b), b
        },
        cancel: b => {
            r.delete(b), f.delete(b)
        },
        process: b => {
            if (p = b, c) {
                h = !0;
                return
            }
            c = !0, [o, r] = [r, o], o.forEach(g), o.clear(), c = !1, h && (h = !1, y.process(b))
        }
    };
    return y
}
const p2 = 40;

function jy(a, l) {
    let o = !1,
        r = !0;
    const c = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        h = () => o = !0,
        f = Ws.reduce((O, G) => (O[G] = m2(h), O), {}),
        {
            setup: p,
            read: g,
            resolveKeyframes: y,
            preUpdate: b,
            update: x,
            preRender: S,
            render: M,
            postRender: k
        } = f,
        U = () => {
            const O = bn.useManualTiming ? c.timestamp : performance.now();
            o = !1, bn.useManualTiming || (c.delta = r ? 1e3 / 60 : Math.max(Math.min(O - c.timestamp, p2), 1)), c.timestamp = O, c.isProcessing = !0, p.process(c), g.process(c), y.process(c), b.process(c), x.process(c), S.process(c), M.process(c), k.process(c), c.isProcessing = !1, o && l && (r = !1, a(U))
        },
        H = () => {
            o = !0, r = !0, c.isProcessing || a(U)
        };
    return {
        schedule: Ws.reduce((O, G) => {
            const Q = f[G];
            return O[G] = ($, J = !1, q = !1) => (o || H(), Q.schedule($, J, q)), O
        }, {}),
        cancel: O => {
            for (let G = 0; G < Ws.length; G++) f[Ws[G]].cancel(O)
        },
        state: c,
        steps: f
    }
}
const {
    schedule: Et,
    cancel: xn,
    state: ae,
    steps: Zu
} = jy(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Le, !0);
let eo;

function y2() {
    eo = void 0
}
const oe = {
        now: () => (eo === void 0 && oe.set(ae.isProcessing || bn.useManualTiming ? ae.timestamp : performance.now()), eo),
        set: a => {
            eo = a, queueMicrotask(y2)
        }
    },
    My = a => l => typeof l == "string" && l.startsWith(a),
    Ey = My("--"),
    g2 = My("var(--"),
    Fc = a => g2(a) ? v2.test(a.split("/*")[0].trim()) : !1,
    v2 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

function Rm(a) {
    return typeof a != "string" ? !1 : a.split("/*")[0].includes("var(--")
}
const yi = {
        test: a => typeof a == "number",
        parse: parseFloat,
        transform: a => a
    },
    Al = { ...yi,
        transform: a => Ie(0, 1, a)
    },
    $s = { ...yi,
        default: 1
    },
    gl = a => Math.round(a * 1e5) / 1e5,
    Wc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function b2(a) {
    return a == null
}
const x2 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    $c = (a, l) => o => !!(typeof o == "string" && x2.test(o) && o.startsWith(a) || l && !b2(o) && Object.prototype.hasOwnProperty.call(o, l)),
    Ny = (a, l, o) => r => {
        if (typeof r != "string") return r;
        const [c, h, f, p] = r.match(Wc);
        return {
            [a]: parseFloat(c),
            [l]: parseFloat(h),
            [o]: parseFloat(f),
            alpha: p !== void 0 ? parseFloat(p) : 1
        }
    },
    S2 = a => Ie(0, 255, a),
    Ku = { ...yi,
        transform: a => Math.round(S2(a))
    },
    ba = {
        test: $c("rgb", "red"),
        parse: Ny("red", "green", "blue"),
        transform: ({
            red: a,
            green: l,
            blue: o,
            alpha: r = 1
        }) => "rgba(" + Ku.transform(a) + ", " + Ku.transform(l) + ", " + Ku.transform(o) + ", " + gl(Al.transform(r)) + ")"
    };

function T2(a) {
    let l = "",
        o = "",
        r = "",
        c = "";
    return a.length > 5 ? (l = a.substring(1, 3), o = a.substring(3, 5), r = a.substring(5, 7), c = a.substring(7, 9)) : (l = a.substring(1, 2), o = a.substring(2, 3), r = a.substring(3, 4), c = a.substring(4, 5), l += l, o += o, r += r, c += c), {
        red: parseInt(l, 16),
        green: parseInt(o, 16),
        blue: parseInt(r, 16),
        alpha: c ? parseInt(c, 16) / 255 : 1
    }
}
const dc = {
        test: $c("#"),
        parse: T2,
        transform: ba.transform
    },
    Cl = a => ({
        test: l => typeof l == "string" && l.endsWith(a) && l.split(" ").length === 1,
        parse: parseFloat,
        transform: l => `${l}${a}`
    }),
    Zn = Cl("deg"),
    Pe = Cl("%"),
    W = Cl("px"),
    A2 = Cl("vh"),
    w2 = Cl("vw"),
    Om = { ...Pe,
        parse: a => Pe.parse(a) / 100,
        transform: a => Pe.transform(a * 100)
    },
    ci = {
        test: $c("hsl", "hue"),
        parse: Ny("hue", "saturation", "lightness"),
        transform: ({
            hue: a,
            saturation: l,
            lightness: o,
            alpha: r = 1
        }) => "hsla(" + Math.round(a) + ", " + Pe.transform(gl(l)) + ", " + Pe.transform(gl(o)) + ", " + gl(Al.transform(r)) + ")"
    },
    Zt = {
        test: a => ba.test(a) || dc.test(a) || ci.test(a),
        parse: a => ba.test(a) ? ba.parse(a) : ci.test(a) ? ci.parse(a) : dc.parse(a),
        transform: a => typeof a == "string" ? a : a.hasOwnProperty("red") ? ba.transform(a) : ci.transform(a),
        getAnimatableNone: a => {
            const l = Zt.parse(a);
            return l.alpha = 0, Zt.transform(l)
        }
    },
    j2 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function M2(a) {
    var l, o;
    return isNaN(a) && typeof a == "string" && (((l = a.match(Wc)) == null ? void 0 : l.length) || 0) + (((o = a.match(j2)) == null ? void 0 : o.length) || 0) > 0
}
const Cy = "number",
    _y = "color",
    E2 = "var",
    N2 = "var(",
    Vm = "${}",
    C2 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function wl(a) {
    const l = a.toString(),
        o = [],
        r = {
            color: [],
            number: [],
            var: []
        },
        c = [];
    let h = 0;
    const p = l.replace(C2, g => (Zt.test(g) ? (r.color.push(h), c.push(_y), o.push(Zt.parse(g))) : g.startsWith(N2) ? (r.var.push(h), c.push(E2), o.push(g)) : (r.number.push(h), c.push(Cy), o.push(parseFloat(g))), ++h, Vm)).split(Vm);
    return {
        values: o,
        split: p,
        indexes: r,
        types: c
    }
}

function ky(a) {
    return wl(a).values
}

function Dy(a) {
    const {
        split: l,
        types: o
    } = wl(a), r = l.length;
    return c => {
        let h = "";
        for (let f = 0; f < r; f++)
            if (h += l[f], c[f] !== void 0) {
                const p = o[f];
                p === Cy ? h += gl(c[f]) : p === _y ? h += Zt.transform(c[f]) : h += c[f]
            }
        return h
    }
}
const _2 = a => typeof a == "number" ? 0 : Zt.test(a) ? Zt.getAnimatableNone(a) : a;

function k2(a) {
    const l = ky(a);
    return Dy(a)(l.map(_2))
}
const Wn = {
    test: M2,
    parse: ky,
    createTransformer: Dy,
    getAnimatableNone: k2
};

function Ju(a, l, o) {
    return o < 0 && (o += 1), o > 1 && (o -= 1), o < 1 / 6 ? a + (l - a) * 6 * o : o < 1 / 2 ? l : o < 2 / 3 ? a + (l - a) * (2 / 3 - o) * 6 : a
}

function D2({
    hue: a,
    saturation: l,
    lightness: o,
    alpha: r
}) {
    a /= 360, l /= 100, o /= 100;
    let c = 0,
        h = 0,
        f = 0;
    if (!l) c = h = f = o;
    else {
        const p = o < .5 ? o * (1 + l) : o + l - o * l,
            g = 2 * o - p;
        c = Ju(g, p, a + 1 / 3), h = Ju(g, p, a), f = Ju(g, p, a - 1 / 3)
    }
    return {
        red: Math.round(c * 255),
        green: Math.round(h * 255),
        blue: Math.round(f * 255),
        alpha: r
    }
}

function oo(a, l) {
    return o => o > 0 ? l : a
}
const zt = (a, l, o) => a + (l - a) * o,
    Fu = (a, l, o) => {
        const r = a * a,
            c = o * (l * l - r) + r;
        return c < 0 ? 0 : Math.sqrt(c)
    },
    z2 = [dc, ba, ci],
    R2 = a => z2.find(l => l.test(a));

function Bm(a) {
    const l = R2(a);
    if (!l) return !1;
    let o = l.parse(a);
    return l === ci && (o = D2(o)), o
}
const Um = (a, l) => {
        const o = Bm(a),
            r = Bm(l);
        if (!o || !r) return oo(a, l);
        const c = { ...o
        };
        return h => (c.red = Fu(o.red, r.red, h), c.green = Fu(o.green, r.green, h), c.blue = Fu(o.blue, r.blue, h), c.alpha = zt(o.alpha, r.alpha, h), ba.transform(c))
    },
    hc = new Set(["none", "hidden"]);

function O2(a, l) {
    return hc.has(a) ? o => o <= 0 ? a : l : o => o >= 1 ? l : a
}

function V2(a, l) {
    return o => zt(a, l, o)
}

function Pc(a) {
    return typeof a == "number" ? V2 : typeof a == "string" ? Fc(a) ? oo : Zt.test(a) ? Um : L2 : Array.isArray(a) ? zy : typeof a == "object" ? Zt.test(a) ? Um : B2 : oo
}

function zy(a, l) {
    const o = [...a],
        r = o.length,
        c = a.map((h, f) => Pc(h)(h, l[f]));
    return h => {
        for (let f = 0; f < r; f++) o[f] = c[f](h);
        return o
    }
}

function B2(a, l) {
    const o = { ...a,
            ...l
        },
        r = {};
    for (const c in o) a[c] !== void 0 && l[c] !== void 0 && (r[c] = Pc(a[c])(a[c], l[c]));
    return c => {
        for (const h in r) o[h] = r[h](c);
        return o
    }
}

function U2(a, l) {
    const o = [],
        r = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let c = 0; c < l.values.length; c++) {
        const h = l.types[c],
            f = a.indexes[h][r[h]],
            p = a.values[f] ?? 0;
        o[c] = p, r[h]++
    }
    return o
}
const L2 = (a, l) => {
    const o = Wn.createTransformer(l),
        r = wl(a),
        c = wl(l);
    return r.indexes.var.length === c.indexes.var.length && r.indexes.color.length === c.indexes.color.length && r.indexes.number.length >= c.indexes.number.length ? hc.has(a) && !c.values.length || hc.has(l) && !r.values.length ? O2(a, l) : El(zy(U2(r, c), c.values), o) : oo(a, l)
};

function Ry(a, l, o) {
    return typeof a == "number" && typeof l == "number" && typeof o == "number" ? zt(a, l, o) : Pc(a)(a, l)
}
const H2 = a => {
        const l = ({
            timestamp: o
        }) => a(o);
        return {
            start: (o = !0) => Et.update(l, o),
            stop: () => xn(l),
            now: () => ae.isProcessing ? ae.timestamp : oe.now()
        }
    },
    Oy = (a, l, o = 10) => {
        let r = "";
        const c = Math.max(Math.round(l / o), 2);
        for (let h = 0; h < c; h++) r += Math.round(a(h / (c - 1)) * 1e4) / 1e4 + ", ";
        return `linear(${r.substring(0,r.length-2)})`
    },
    ro = 2e4;

function Ic(a) {
    let l = 0;
    const o = 50;
    let r = a.next(l);
    for (; !r.done && l < ro;) l += o, r = a.next(l);
    return l >= ro ? 1 / 0 : l
}

function q2(a, l = 100, o) {
    const r = o({ ...a,
            keyframes: [0, l]
        }),
        c = Math.min(Ic(r), ro);
    return {
        type: "keyframes",
        ease: h => r.next(c * h).value / l,
        duration: Ue(c)
    }
}
const Y2 = 5;

function Vy(a, l, o) {
    const r = Math.max(l - Y2, 0);
    return my(o - a(r), l - r)
}
const Vt = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: .3,
        visualDuration: .3,
        restSpeed: {
            granular: .01,
            default: 2
        },
        restDelta: {
            granular: .005,
            default: .5
        },
        minDuration: .01,
        maxDuration: 10,
        minDamping: .05,
        maxDamping: 1
    },
    Wu = .001;

function G2({
    duration: a = Vt.duration,
    bounce: l = Vt.bounce,
    velocity: o = Vt.velocity,
    mass: r = Vt.mass
}) {
    let c, h, f = 1 - l;
    f = Ie(Vt.minDamping, Vt.maxDamping, f), a = Ie(Vt.minDuration, Vt.maxDuration, Ue(a)), f < 1 ? (c = y => {
        const b = y * f,
            x = b * a,
            S = b - o,
            M = mc(y, f),
            k = Math.exp(-x);
        return Wu - S / M * k
    }, h = y => {
        const x = y * f * a,
            S = x * o + o,
            M = Math.pow(f, 2) * Math.pow(y, 2) * a,
            k = Math.exp(-x),
            U = mc(Math.pow(y, 2), f);
        return (-c(y) + Wu > 0 ? -1 : 1) * ((S - M) * k) / U
    }) : (c = y => {
        const b = Math.exp(-y * a),
            x = (y - o) * a + 1;
        return -Wu + b * x
    }, h = y => {
        const b = Math.exp(-y * a),
            x = (o - y) * (a * a);
        return b * x
    });
    const p = 5 / a,
        g = Q2(c, h, p);
    if (a = $e(a), isNaN(g)) return {
        stiffness: Vt.stiffness,
        damping: Vt.damping,
        duration: a
    }; {
        const y = Math.pow(g, 2) * r;
        return {
            stiffness: y,
            damping: f * 2 * Math.sqrt(r * y),
            duration: a
        }
    }
}
const X2 = 12;

function Q2(a, l, o) {
    let r = o;
    for (let c = 1; c < X2; c++) r = r - a(r) / l(r);
    return r
}

function mc(a, l) {
    return a * Math.sqrt(1 - l * l)
}
const Z2 = ["duration", "bounce"],
    K2 = ["stiffness", "damping", "mass"];

function Lm(a, l) {
    return l.some(o => a[o] !== void 0)
}

function J2(a) {
    let l = {
        velocity: Vt.velocity,
        stiffness: Vt.stiffness,
        damping: Vt.damping,
        mass: Vt.mass,
        isResolvedFromDuration: !1,
        ...a
    };
    if (!Lm(a, K2) && Lm(a, Z2))
        if (a.visualDuration) {
            const o = a.visualDuration,
                r = 2 * Math.PI / (o * 1.2),
                c = r * r,
                h = 2 * Ie(.05, 1, 1 - (a.bounce || 0)) * Math.sqrt(c);
            l = { ...l,
                mass: Vt.mass,
                stiffness: c,
                damping: h
            }
        } else {
            const o = G2(a);
            l = { ...l,
                ...o,
                mass: Vt.mass
            }, l.isResolvedFromDuration = !0
        }
    return l
}

function uo(a = Vt.visualDuration, l = Vt.bounce) {
    const o = typeof a != "object" ? {
        visualDuration: a,
        keyframes: [0, 1],
        bounce: l
    } : a;
    let {
        restSpeed: r,
        restDelta: c
    } = o;
    const h = o.keyframes[0],
        f = o.keyframes[o.keyframes.length - 1],
        p = {
            done: !1,
            value: h
        },
        {
            stiffness: g,
            damping: y,
            mass: b,
            duration: x,
            velocity: S,
            isResolvedFromDuration: M
        } = J2({ ...o,
            velocity: -Ue(o.velocity || 0)
        }),
        k = S || 0,
        U = y / (2 * Math.sqrt(g * b)),
        H = f - h,
        L = Ue(Math.sqrt(g / b)),
        Z = Math.abs(H) < 5;
    r || (r = Z ? Vt.restSpeed.granular : Vt.restSpeed.default), c || (c = Z ? Vt.restDelta.granular : Vt.restDelta.default);
    let O;
    if (U < 1) {
        const Q = mc(L, U);
        O = $ => {
            const J = Math.exp(-U * L * $);
            return f - J * ((k + U * L * H) / Q * Math.sin(Q * $) + H * Math.cos(Q * $))
        }
    } else if (U === 1) O = Q => f - Math.exp(-L * Q) * (H + (k + L * H) * Q);
    else {
        const Q = L * Math.sqrt(U * U - 1);
        O = $ => {
            const J = Math.exp(-U * L * $),
                q = Math.min(Q * $, 300);
            return f - J * ((k + U * L * H) * Math.sinh(q) + Q * H * Math.cosh(q)) / Q
        }
    }
    const G = {
        calculatedDuration: M && x || null,
        next: Q => {
            const $ = O(Q);
            if (M) p.done = Q >= x;
            else {
                let J = Q === 0 ? k : 0;
                U < 1 && (J = Q === 0 ? $e(k) : Vy(O, Q, $));
                const q = Math.abs(J) <= r,
                    nt = Math.abs(f - $) <= c;
                p.done = q && nt
            }
            return p.value = p.done ? f : $, p
        },
        toString: () => {
            const Q = Math.min(Ic(G), ro),
                $ = Oy(J => G.next(Q * J).value, Q, 30);
            return Q + "ms " + $
        },
        toTransition: () => {}
    };
    return G
}
uo.applyToOptions = a => {
    const l = q2(a, 100, uo);
    return a.ease = l.ease, a.duration = $e(l.duration), a.type = "keyframes", a
};

function pc({
    keyframes: a,
    velocity: l = 0,
    power: o = .8,
    timeConstant: r = 325,
    bounceDamping: c = 10,
    bounceStiffness: h = 500,
    modifyTarget: f,
    min: p,
    max: g,
    restDelta: y = .5,
    restSpeed: b
}) {
    const x = a[0],
        S = {
            done: !1,
            value: x
        },
        M = q => p !== void 0 && q < p || g !== void 0 && q > g,
        k = q => p === void 0 ? g : g === void 0 || Math.abs(p - q) < Math.abs(g - q) ? p : g;
    let U = o * l;
    const H = x + U,
        L = f === void 0 ? H : f(H);
    L !== H && (U = L - x);
    const Z = q => -U * Math.exp(-q / r),
        O = q => L + Z(q),
        G = q => {
            const nt = Z(q),
                At = O(q);
            S.done = Math.abs(nt) <= y, S.value = S.done ? L : At
        };
    let Q, $;
    const J = q => {
        M(S.value) && (Q = q, $ = uo({
            keyframes: [S.value, k(S.value)],
            velocity: Vy(O, q, S.value),
            damping: c,
            stiffness: h,
            restDelta: y,
            restSpeed: b
        }))
    };
    return J(0), {
        calculatedDuration: null,
        next: q => {
            let nt = !1;
            return !$ && Q === void 0 && (nt = !0, G(q), J(q)), Q !== void 0 && q >= Q ? $.next(q - Q) : (!nt && G(q), S)
        }
    }
}

function F2(a, l, o) {
    const r = [],
        c = o || bn.mix || Ry,
        h = a.length - 1;
    for (let f = 0; f < h; f++) {
        let p = c(a[f], a[f + 1]);
        if (l) {
            const g = Array.isArray(l) ? l[f] || Le : l;
            p = El(g, p)
        }
        r.push(p)
    }
    return r
}

function By(a, l, {
    clamp: o = !0,
    ease: r,
    mixer: c
} = {}) {
    const h = a.length;
    if (Xc(h === l.length), h === 1) return () => l[0];
    if (h === 2 && l[0] === l[1]) return () => l[1];
    const f = a[0] === a[1];
    a[0] > a[h - 1] && (a = [...a].reverse(), l = [...l].reverse());
    const p = F2(l, r, c),
        g = p.length,
        y = b => {
            if (f && b < a[0]) return l[0];
            let x = 0;
            if (g > 1)
                for (; x < a.length - 2 && !(b < a[x + 1]); x++);
            const S = Tl(a[x], a[x + 1], b);
            return p[x](S)
        };
    return o ? b => y(Ie(a[0], a[h - 1], b)) : y
}

function W2(a, l) {
    const o = a[a.length - 1];
    for (let r = 1; r <= l; r++) {
        const c = Tl(0, l, r);
        a.push(zt(o, 1, c))
    }
}

function $2(a) {
    const l = [0];
    return W2(l, a.length - 1), l
}

function P2(a, l) {
    return a.map(o => o * l)
}

function I2(a, l) {
    return a.map(() => l || Ay).splice(0, a.length - 1)
}

function vl({
    duration: a = 300,
    keyframes: l,
    times: o,
    ease: r = "easeInOut"
}) {
    const c = f2(r) ? r.map(zm) : zm(r),
        h = {
            done: !1,
            value: l[0]
        },
        f = P2(o && o.length === l.length ? o : $2(l), a),
        p = By(f, l, {
            ease: Array.isArray(c) ? c : I2(l, c)
        });
    return {
        calculatedDuration: a,
        next: g => (h.value = p(g), h.done = g >= a, h)
    }
}
const tS = a => a !== null;

function tf(a, {
    repeat: l,
    repeatType: o = "loop"
}, r, c = 1) {
    const h = a.filter(tS),
        p = c < 0 || l && o !== "loop" && l % 2 === 1 ? 0 : h.length - 1;
    return !p || r === void 0 ? h[p] : r
}
const eS = {
    decay: pc,
    inertia: pc,
    tween: vl,
    keyframes: vl,
    spring: uo
};

function Uy(a) {
    typeof a.type == "string" && (a.type = eS[a.type])
}
class ef {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(l => {
            this.resolve = l
        })
    }
    notifyFinished() {
        this.resolve()
    }
    then(l, o) {
        return this.finished.then(l, o)
    }
}
const nS = a => a / 100;
class vo extends ef {
    constructor(l) {
        super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
            var r, c;
            const {
                motionValue: o
            } = this.options;
            o && o.updatedAt !== oe.now() && this.tick(oe.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (c = (r = this.options).onStop) == null || c.call(r))
        }, this.options = l, this.initAnimation(), this.play(), l.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {
            options: l
        } = this;
        Uy(l);
        const {
            type: o = vl,
            repeat: r = 0,
            repeatDelay: c = 0,
            repeatType: h,
            velocity: f = 0
        } = l;
        let {
            keyframes: p
        } = l;
        const g = o || vl;
        g !== vl && typeof p[0] != "number" && (this.mixKeyframes = El(nS, Ry(p[0], p[1])), p = [0, 100]);
        const y = g({ ...l,
            keyframes: p
        });
        h === "mirror" && (this.mirroredGenerator = g({ ...l,
            keyframes: [...p].reverse(),
            velocity: -f
        })), y.calculatedDuration === null && (y.calculatedDuration = Ic(y));
        const {
            calculatedDuration: b
        } = y;
        this.calculatedDuration = b, this.resolvedDuration = b + c, this.totalDuration = this.resolvedDuration * (r + 1) - c, this.generator = y
    }
    updateTime(l) {
        const o = Math.round(l - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = o
    }
    tick(l, o = !1) {
        const {
            generator: r,
            totalDuration: c,
            mixKeyframes: h,
            mirroredGenerator: f,
            resolvedDuration: p,
            calculatedDuration: g
        } = this;
        if (this.startTime === null) return r.next(0);
        const {
            delay: y = 0,
            keyframes: b,
            repeat: x,
            repeatType: S,
            repeatDelay: M,
            type: k,
            onUpdate: U,
            finalKeyframe: H
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)), o ? this.currentTime = l : this.updateTime(l);
        const L = this.currentTime - y * (this.playbackSpeed >= 0 ? 1 : -1),
            Z = this.playbackSpeed >= 0 ? L < 0 : L > c;
        this.currentTime = Math.max(L, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let O = this.currentTime,
            G = r;
        if (x) {
            const q = Math.min(this.currentTime, c) / p;
            let nt = Math.floor(q),
                At = q % 1;
            !At && q >= 1 && (At = 1), At === 1 && nt--, nt = Math.min(nt, x + 1), !!(nt % 2) && (S === "reverse" ? (At = 1 - At, M && (At -= M / p)) : S === "mirror" && (G = f)), O = Ie(0, 1, At) * p
        }
        const Q = Z ? {
            done: !1,
            value: b[0]
        } : G.next(O);
        h && (Q.value = h(Q.value));
        let {
            done: $
        } = Q;
        !Z && g !== null && ($ = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const J = this.holdTime === null && (this.state === "finished" || this.state === "running" && $);
        return J && k !== pc && (Q.value = tf(b, this.options, H, this.speed)), U && U(Q.value), J && this.finish(), Q
    }
    then(l, o) {
        return this.finished.then(l, o)
    }
    get duration() {
        return Ue(this.calculatedDuration)
    }
    get iterationDuration() {
        const {
            delay: l = 0
        } = this.options || {};
        return this.duration + Ue(l)
    }
    get time() {
        return Ue(this.currentTime)
    }
    set time(l) {
        var o;
        l = $e(l), this.currentTime = l, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = l : this.driver && (this.startTime = this.driver.now() - l / this.playbackSpeed), (o = this.driver) == null || o.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(l) {
        this.updateTime(oe.now());
        const o = this.playbackSpeed !== l;
        this.playbackSpeed = l, o && (this.time = Ue(this.currentTime))
    }
    play() {
        var c, h;
        if (this.isStopped) return;
        const {
            driver: l = H2,
            startTime: o
        } = this.options;
        this.driver || (this.driver = l(f => this.tick(f))), (h = (c = this.options).onPlay) == null || h.call(c);
        const r = this.driver.now();
        this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = o ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        this.state = "paused", this.updateTime(oe.now()), this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null
    }
    finish() {
        var l, o;
        this.notifyFinished(), this.teardown(), this.state = "finished", (o = (l = this.options).onComplete) == null || o.call(l)
    }
    cancel() {
        var l, o;
        this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (o = (l = this.options).onCancel) == null || o.call(l)
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(l) {
        return this.startTime = 0, this.tick(l, !0)
    }
    attachTimeline(l) {
        var o;
        return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (o = this.driver) == null || o.stop(), l.observe(this)
    }
}

function aS(a) {
    for (let l = 1; l < a.length; l++) a[l] ?? (a[l] = a[l - 1])
}
const xa = a => a * 180 / Math.PI,
    yc = a => {
        const l = xa(Math.atan2(a[1], a[0]));
        return gc(l)
    },
    iS = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: a => (Math.abs(a[0]) + Math.abs(a[3])) / 2,
        rotate: yc,
        rotateZ: yc,
        skewX: a => xa(Math.atan(a[1])),
        skewY: a => xa(Math.atan(a[2])),
        skew: a => (Math.abs(a[1]) + Math.abs(a[2])) / 2
    },
    gc = a => (a = a % 360, a < 0 && (a += 360), a),
    Hm = yc,
    qm = a => Math.sqrt(a[0] * a[0] + a[1] * a[1]),
    Ym = a => Math.sqrt(a[4] * a[4] + a[5] * a[5]),
    lS = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: qm,
        scaleY: Ym,
        scale: a => (qm(a) + Ym(a)) / 2,
        rotateX: a => gc(xa(Math.atan2(a[6], a[5]))),
        rotateY: a => gc(xa(Math.atan2(-a[2], a[0]))),
        rotateZ: Hm,
        rotate: Hm,
        skewX: a => xa(Math.atan(a[4])),
        skewY: a => xa(Math.atan(a[1])),
        skew: a => (Math.abs(a[1]) + Math.abs(a[4])) / 2
    };

function vc(a) {
    return a.includes("scale") ? 1 : 0
}

function bc(a, l) {
    if (!a || a === "none") return vc(l);
    const o = a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let r, c;
    if (o) r = lS, c = o;
    else {
        const p = a.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        r = iS, c = p
    }
    if (!c) return vc(l);
    const h = r[l],
        f = c[1].split(",").map(oS);
    return typeof h == "function" ? h(f) : f[h]
}
const sS = (a, l) => {
    const {
        transform: o = "none"
    } = getComputedStyle(a);
    return bc(o, l)
};

function oS(a) {
    return parseFloat(a.trim())
}
const gi = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    vi = new Set(gi),
    Gm = a => a === yi || a === W,
    rS = new Set(["x", "y", "z"]),
    uS = gi.filter(a => !rS.has(a));

function cS(a) {
    const l = [];
    return uS.forEach(o => {
        const r = a.getValue(o);
        r !== void 0 && (l.push([o, r.get()]), r.set(o.startsWith("scale") ? 1 : 0))
    }), l
}
const Fn = {
    width: ({
        x: a
    }, {
        paddingLeft: l = "0",
        paddingRight: o = "0"
    }) => a.max - a.min - parseFloat(l) - parseFloat(o),
    height: ({
        y: a
    }, {
        paddingTop: l = "0",
        paddingBottom: o = "0"
    }) => a.max - a.min - parseFloat(l) - parseFloat(o),
    top: (a, {
        top: l
    }) => parseFloat(l),
    left: (a, {
        left: l
    }) => parseFloat(l),
    bottom: ({
        y: a
    }, {
        top: l
    }) => parseFloat(l) + (a.max - a.min),
    right: ({
        x: a
    }, {
        left: l
    }) => parseFloat(l) + (a.max - a.min),
    x: (a, {
        transform: l
    }) => bc(l, "x"),
    y: (a, {
        transform: l
    }) => bc(l, "y")
};
Fn.translateX = Fn.x;
Fn.translateY = Fn.y;
const Sa = new Set;
let xc = !1,
    Sc = !1,
    Tc = !1;

function Ly() {
    if (Sc) {
        const a = Array.from(Sa).filter(r => r.needsMeasurement),
            l = new Set(a.map(r => r.element)),
            o = new Map;
        l.forEach(r => {
            const c = cS(r);
            c.length && (o.set(r, c), r.render())
        }), a.forEach(r => r.measureInitialState()), l.forEach(r => {
            r.render();
            const c = o.get(r);
            c && c.forEach(([h, f]) => {
                var p;
                (p = r.getValue(h)) == null || p.set(f)
            })
        }), a.forEach(r => r.measureEndState()), a.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        })
    }
    Sc = !1, xc = !1, Sa.forEach(a => a.complete(Tc)), Sa.clear()
}

function Hy() {
    Sa.forEach(a => {
        a.readKeyframes(), a.needsMeasurement && (Sc = !0)
    })
}

function fS() {
    Tc = !0, Hy(), Ly(), Tc = !1
}
class nf {
    constructor(l, o, r, c, h, f = !1) {
        this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...l], this.onComplete = o, this.name = r, this.motionValue = c, this.element = h, this.isAsync = f
    }
    scheduleResolve() {
        this.state = "scheduled", this.isAsync ? (Sa.add(this), xc || (xc = !0, Et.read(Hy), Et.resolveKeyframes(Ly))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: l,
            name: o,
            element: r,
            motionValue: c
        } = this;
        if (l[0] === null) {
            const h = c == null ? void 0 : c.get(),
                f = l[l.length - 1];
            if (h !== void 0) l[0] = h;
            else if (r && o) {
                const p = r.readValue(o, f);
                p != null && (l[0] = p)
            }
            l[0] === void 0 && (l[0] = f), c && h === void 0 && c.set(l[0])
        }
        aS(l)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(l = !1) {
        this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l), Sa.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (Sa.delete(this), this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const dS = a => a.startsWith("--");

function hS(a, l, o) {
    dS(l) ? a.style.setProperty(l, o) : a.style[l] = o
}
const mS = Qc(() => window.ScrollTimeline !== void 0),
    pS = {};

function yS(a, l) {
    const o = Qc(a);
    return () => pS[l] ?? o()
}
const qy = yS(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }, "linearEasing"),
    pl = ([a, l, o, r]) => `cubic-bezier(${a}, ${l}, ${o}, ${r})`,
    Xm = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: pl([0, .65, .55, 1]),
        circOut: pl([.55, 0, 1, .45]),
        backIn: pl([.31, .01, .66, -.59]),
        backOut: pl([.33, 1.53, .69, .99])
    };

function Yy(a, l) {
    if (a) return typeof a == "function" ? qy() ? Oy(a, l) : "ease-out" : wy(a) ? pl(a) : Array.isArray(a) ? a.map(o => Yy(o, l) || Xm.easeOut) : Xm[a]
}

function gS(a, l, o, {
    delay: r = 0,
    duration: c = 300,
    repeat: h = 0,
    repeatType: f = "loop",
    ease: p = "easeOut",
    times: g
} = {}, y = void 0) {
    const b = {
        [l]: o
    };
    g && (b.offset = g);
    const x = Yy(p, c);
    Array.isArray(x) && (b.easing = x);
    const S = {
        delay: r,
        duration: c,
        easing: Array.isArray(x) ? "linear" : x,
        fill: "both",
        iterations: h + 1,
        direction: f === "reverse" ? "alternate" : "normal"
    };
    return y && (S.pseudoElement = y), a.animate(b, S)
}

function Gy(a) {
    return typeof a == "function" && "applyToOptions" in a
}

function vS({
    type: a,
    ...l
}) {
    return Gy(a) && qy() ? a.applyToOptions(l) : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l)
}
class bS extends ef {
    constructor(l) {
        if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !l) return;
        const {
            element: o,
            name: r,
            keyframes: c,
            pseudoElement: h,
            allowFlatten: f = !1,
            finalKeyframe: p,
            onComplete: g
        } = l;
        this.isPseudoElement = !!h, this.allowFlatten = f, this.options = l, Xc(typeof l.type != "string");
        const y = vS(l);
        this.animation = gS(o, r, c, y, h), y.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
            if (this.finishedTime = this.time, !h) {
                const b = tf(c, this.options, p, this.speed);
                this.updateMotionValue ? this.updateMotionValue(b) : hS(o, r, b), this.animation.cancel()
            }
            g == null || g(), this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var l, o;
        (o = (l = this.animation).finish) == null || o.call(l)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped) return;
        this.isStopped = !0;
        const {
            state: l
        } = this;
        l === "idle" || l === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var o, r, c;
        const l = (o = this.options) == null ? void 0 : o.element;
        !this.isPseudoElement && (l != null && l.isConnected) && ((c = (r = this.animation).commitStyles) == null || c.call(r))
    }
    get duration() {
        var o, r;
        const l = ((r = (o = this.animation.effect) == null ? void 0 : o.getComputedTiming) == null ? void 0 : r.call(o).duration) || 0;
        return Ue(Number(l))
    }
    get iterationDuration() {
        const {
            delay: l = 0
        } = this.options || {};
        return this.duration + Ue(l)
    }
    get time() {
        return Ue(Number(this.animation.currentTime) || 0)
    }
    set time(l) {
        this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = $e(l)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(l) {
        l < 0 && (this.finishedTime = null), this.animation.playbackRate = l
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime)
    }
    set startTime(l) {
        this.manualStartTime = this.animation.startTime = l
    }
    attachTimeline({
        timeline: l,
        observe: o
    }) {
        var r;
        return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({
            easing: "linear"
        })), this.animation.onfinish = null, l && mS() ? (this.animation.timeline = l, Le) : o(this)
    }
}
const Xy = {
    anticipate: xy,
    backInOut: by,
    circInOut: Ty
};

function xS(a) {
    return a in Xy
}

function SS(a) {
    typeof a.ease == "string" && xS(a.ease) && (a.ease = Xy[a.ease])
}
const $u = 10;
class TS extends bS {
    constructor(l) {
        SS(l), Uy(l), super(l), l.startTime !== void 0 && (this.startTime = l.startTime), this.options = l
    }
    updateMotionValue(l) {
        const {
            motionValue: o,
            onUpdate: r,
            onComplete: c,
            element: h,
            ...f
        } = this.options;
        if (!o) return;
        if (l !== void 0) {
            o.set(l);
            return
        }
        const p = new vo({ ...f,
                autoplay: !1
            }),
            g = Math.max($u, oe.now() - this.startTime),
            y = Ie(0, $u, g - $u);
        o.setWithVelocity(p.sample(Math.max(0, g - y)).value, p.sample(g).value, y), p.stop()
    }
}
const Qm = (a, l) => l === "zIndex" ? !1 : !!(typeof a == "number" || Array.isArray(a) || typeof a == "string" && (Wn.test(a) || a === "0") && !a.startsWith("url("));

function AS(a) {
    const l = a[0];
    if (a.length === 1) return !0;
    for (let o = 0; o < a.length; o++)
        if (a[o] !== l) return !0
}

function wS(a, l, o, r) {
    const c = a[0];
    if (c === null) return !1;
    if (l === "display" || l === "visibility") return !0;
    const h = a[a.length - 1],
        f = Qm(c, l),
        p = Qm(h, l);
    return !f || !p ? !1 : AS(a) || (o === "spring" || Gy(o)) && r
}

function Ac(a) {
    a.duration = 0, a.type = "keyframes"
}
const jS = new Set(["opacity", "clipPath", "filter", "transform"]),
    MS = Qc(() => Object.hasOwnProperty.call(Element.prototype, "animate"));

function ES(a) {
    var b;
    const {
        motionValue: l,
        name: o,
        repeatDelay: r,
        repeatType: c,
        damping: h,
        type: f
    } = a;
    if (!(((b = l == null ? void 0 : l.owner) == null ? void 0 : b.current) instanceof HTMLElement)) return !1;
    const {
        onUpdate: g,
        transformTemplate: y
    } = l.owner.getProps();
    return MS() && o && jS.has(o) && (o !== "transform" || !y) && !g && !r && c !== "mirror" && h !== 0 && f !== "inertia"
}
const NS = 40;
class CS extends ef {
    constructor({
        autoplay: l = !0,
        delay: o = 0,
        type: r = "keyframes",
        repeat: c = 0,
        repeatDelay: h = 0,
        repeatType: f = "loop",
        keyframes: p,
        name: g,
        motionValue: y,
        element: b,
        ...x
    }) {
        var k;
        super(), this.stop = () => {
            var U, H;
            this._animation && (this._animation.stop(), (U = this.stopTimeline) == null || U.call(this)), (H = this.keyframeResolver) == null || H.cancel()
        }, this.createdAt = oe.now();
        const S = {
                autoplay: l,
                delay: o,
                type: r,
                repeat: c,
                repeatDelay: h,
                repeatType: f,
                name: g,
                motionValue: y,
                element: b,
                ...x
            },
            M = (b == null ? void 0 : b.KeyframeResolver) || nf;
        this.keyframeResolver = new M(p, (U, H, L) => this.onKeyframesResolved(U, H, S, !L), g, y, b), (k = this.keyframeResolver) == null || k.scheduleResolve()
    }
    onKeyframesResolved(l, o, r, c) {
        var H, L;
        this.keyframeResolver = void 0;
        const {
            name: h,
            type: f,
            velocity: p,
            delay: g,
            isHandoff: y,
            onUpdate: b
        } = r;
        this.resolvedAt = oe.now(), wS(l, h, f, p) || ((bn.instantAnimations || !g) && (b == null || b(tf(l, r, o))), l[0] = l[l.length - 1], Ac(r), r.repeat = 0);
        const S = {
                startTime: c ? this.resolvedAt ? this.resolvedAt - this.createdAt > NS ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
                finalKeyframe: o,
                ...r,
                keyframes: l
            },
            M = !y && ES(S),
            k = (L = (H = S.motionValue) == null ? void 0 : H.owner) == null ? void 0 : L.current,
            U = M ? new TS({ ...S,
                element: k
            }) : new vo(S);
        U.finished.then(() => {
            this.notifyFinished()
        }).catch(Le), this.pendingTimeline && (this.stopTimeline = U.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = U
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(l, o) {
        return this.finished.finally(l).then(() => {})
    }
    get animation() {
        var l;
        return this._animation || ((l = this.keyframeResolver) == null || l.resume(), fS()), this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(l) {
        this.animation.time = l
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(l) {
        this.animation.speed = l
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(l) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(l) : this.pendingTimeline = l, () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var l;
        this._animation && this.animation.cancel(), (l = this.keyframeResolver) == null || l.cancel()
    }
}

function Qy(a, l, o, r = 0, c = 1) {
    const h = Array.from(a).sort((y, b) => y.sortNodePosition(b)).indexOf(l),
        f = a.size,
        p = (f - 1) * r;
    return typeof o == "function" ? o(h, f) : c === 1 ? h * r : p - h * r
}
const _S = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function kS(a) {
    const l = _S.exec(a);
    if (!l) return [, ];
    const [, o, r, c] = l;
    return [`--${o??r}`, c]
}

function Zy(a, l, o = 1) {
    const [r, c] = kS(a);
    if (!r) return;
    const h = window.getComputedStyle(l).getPropertyValue(r);
    if (h) {
        const f = h.trim();
        return fy(f) ? parseFloat(f) : f
    }
    return Fc(c) ? Zy(c, l, o + 1) : c
}
const DS = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    zS = a => ({
        type: "spring",
        stiffness: 550,
        damping: a === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    RS = {
        type: "keyframes",
        duration: .8
    },
    OS = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    VS = (a, {
        keyframes: l
    }) => l.length > 2 ? RS : vi.has(a) ? a.startsWith("scale") ? zS(l[1]) : DS : OS,
    BS = a => a !== null;

function US(a, {
    repeat: l,
    repeatType: o = "loop"
}, r) {
    const c = a.filter(BS),
        h = l && o !== "loop" && l % 2 === 1 ? 0 : c.length - 1;
    return c[h]
}

function Ky(a, l) {
    if (a != null && a.inherit && l) {
        const {
            inherit: o,
            ...r
        } = a;
        return { ...l,
            ...r
        }
    }
    return a
}

function af(a, l) {
    const o = (a == null ? void 0 : a[l]) ?? (a == null ? void 0 : a.default) ?? a;
    return o !== a ? Ky(o, a) : o
}

function LS({
    when: a,
    delay: l,
    delayChildren: o,
    staggerChildren: r,
    staggerDirection: c,
    repeat: h,
    repeatType: f,
    repeatDelay: p,
    from: g,
    elapsed: y,
    ...b
}) {
    return !!Object.keys(b).length
}
const lf = (a, l, o, r = {}, c, h) => f => {
    const p = af(r, a) || {},
        g = p.delay || r.delay || 0;
    let {
        elapsed: y = 0
    } = r;
    y = y - $e(g);
    const b = {
        keyframes: Array.isArray(o) ? o : [null, o],
        ease: "easeOut",
        velocity: l.getVelocity(),
        ...p,
        delay: -y,
        onUpdate: S => {
            l.set(S), p.onUpdate && p.onUpdate(S)
        },
        onComplete: () => {
            f(), p.onComplete && p.onComplete()
        },
        name: a,
        motionValue: l,
        element: h ? void 0 : c
    };
    LS(p) || Object.assign(b, VS(a, b)), b.duration && (b.duration = $e(b.duration)), b.repeatDelay && (b.repeatDelay = $e(b.repeatDelay)), b.from !== void 0 && (b.keyframes[0] = b.from);
    let x = !1;
    if ((b.type === !1 || b.duration === 0 && !b.repeatDelay) && (Ac(b), b.delay === 0 && (x = !0)), (bn.instantAnimations || bn.skipAnimations || c != null && c.shouldSkipAnimations) && (x = !0, Ac(b), b.delay = 0), b.allowFlatten = !p.type && !p.ease, x && !h && l.get() !== void 0) {
        const S = US(b.keyframes, p);
        if (S !== void 0) {
            Et.update(() => {
                b.onUpdate(S), b.onComplete()
            });
            return
        }
    }
    return p.isSync ? new vo(b) : new CS(b)
};

function Zm(a) {
    const l = [{}, {}];
    return a == null || a.values.forEach((o, r) => {
        l[0][r] = o.get(), l[1][r] = o.getVelocity()
    }), l
}

function sf(a, l, o, r) {
    if (typeof l == "function") {
        const [c, h] = Zm(r);
        l = l(o !== void 0 ? o : a.custom, c, h)
    }
    if (typeof l == "string" && (l = a.variants && a.variants[l]), typeof l == "function") {
        const [c, h] = Zm(r);
        l = l(o !== void 0 ? o : a.custom, c, h)
    }
    return l
}

function pi(a, l, o) {
    const r = a.getProps();
    return sf(r, l, o !== void 0 ? o : r.custom, a)
}
const Jy = new Set(["width", "height", "top", "left", "right", "bottom", ...gi]),
    Km = 30,
    HS = a => !isNaN(parseFloat(a)),
    bl = {
        current: void 0
    };
class qS {
    constructor(l, o = {}) {
        this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = r => {
            var h;
            const c = oe.now();
            if (this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && ((h = this.events.change) == null || h.notify(this.current), this.dependents))
                for (const f of this.dependents) f.dirty()
        }, this.hasAnimated = !1, this.setCurrent(l), this.owner = o.owner
    }
    setCurrent(l) {
        this.current = l, this.updatedAt = oe.now(), this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = HS(this.current))
    }
    setPrevFrameValue(l = this.current) {
        this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt
    }
    onChange(l) {
        return this.on("change", l)
    }
    on(l, o) {
        this.events[l] || (this.events[l] = new Zc);
        const r = this.events[l].add(o);
        return l === "change" ? () => {
            r(), Et.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : r
    }
    clearListeners() {
        for (const l in this.events) this.events[l].clear()
    }
    attach(l, o) {
        this.passiveEffect = l, this.stopPassiveEffect = o
    }
    set(l) {
        this.passiveEffect ? this.passiveEffect(l, this.updateAndNotify) : this.updateAndNotify(l)
    }
    setWithVelocity(l, o, r) {
        this.set(o), this.prev = void 0, this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt - r
    }
    jump(l, o = !0) {
        this.updateAndNotify(l), this.prev = l, this.prevUpdatedAt = this.prevFrameValue = void 0, o && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var l;
        (l = this.events.change) == null || l.notify(this.current)
    }
    addDependent(l) {
        this.dependents || (this.dependents = new Set), this.dependents.add(l)
    }
    removeDependent(l) {
        this.dependents && this.dependents.delete(l)
    }
    get() {
        return bl.current && bl.current.push(this), this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const l = oe.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > Km) return 0;
        const o = Math.min(this.updatedAt - this.prevUpdatedAt, Km);
        return my(parseFloat(this.current) - parseFloat(this.prevFrameValue), o)
    }
    start(l) {
        return this.stop(), new Promise(o => {
            this.hasAnimated = !0, this.animation = l(o), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var l, o;
        (l = this.dependents) == null || l.clear(), (o = this.events.destroy) == null || o.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function wa(a, l) {
    return new qS(a, l)
}
const wc = a => Array.isArray(a);

function YS(a, l, o) {
    a.hasValue(l) ? a.getValue(l).set(o) : a.addValue(l, wa(o))
}

function GS(a) {
    return wc(a) ? a[a.length - 1] || 0 : a
}

function XS(a, l) {
    const o = pi(a, l);
    let {
        transitionEnd: r = {},
        transition: c = {},
        ...h
    } = o || {};
    h = { ...h,
        ...r
    };
    for (const f in h) {
        const p = GS(h[f]);
        YS(a, f, p)
    }
}
const Kt = a => !!(a && a.getVelocity);

function QS(a) {
    return !!(Kt(a) && a.add)
}

function jc(a, l) {
    const o = a.getValue("willChange");
    if (QS(o)) return o.add(l);
    if (!o && bn.WillChange) {
        const r = new bn.WillChange("auto");
        a.addValue("willChange", r), r.add(l)
    }
}

function of (a) {
    return a.replace(/([A-Z])/g, l => `-${l.toLowerCase()}`)
}
const ZS = "framerAppearId",
    Fy = "data-" + of (ZS);

function Wy(a) {
    return a.props[Fy]
}

function KS({
    protectedKeys: a,
    needsAnimating: l
}, o) {
    const r = a.hasOwnProperty(o) && l[o] !== !0;
    return l[o] = !1, r
}

function $y(a, l, {
    delay: o = 0,
    transitionOverride: r,
    type: c
} = {}) {
    let {
        transition: h,
        transitionEnd: f,
        ...p
    } = l;
    const g = a.getDefaultTransition();
    h = h ? Ky(h, g) : g;
    const y = h == null ? void 0 : h.reduceMotion;
    r && (h = r);
    const b = [],
        x = c && a.animationState && a.animationState.getState()[c];
    for (const S in p) {
        const M = a.getValue(S, a.latestValues[S] ?? null),
            k = p[S];
        if (k === void 0 || x && KS(x, S)) continue;
        const U = {
                delay: o,
                ...af(h || {}, S)
            },
            H = M.get();
        if (H !== void 0 && !M.isAnimating && !Array.isArray(k) && k === H && !U.velocity) continue;
        let L = !1;
        if (window.MotionHandoffAnimation) {
            const G = Wy(a);
            if (G) {
                const Q = window.MotionHandoffAnimation(G, S, Et);
                Q !== null && (U.startTime = Q, L = !0)
            }
        }
        jc(a, S);
        const Z = y ?? a.shouldReduceMotion;
        M.start(lf(S, M, k, Z && Jy.has(S) ? {
            type: !1
        } : U, a, L));
        const O = M.animation;
        O && b.push(O)
    }
    if (f) {
        const S = () => Et.update(() => {
            f && XS(a, f)
        });
        b.length ? Promise.all(b).then(S) : S()
    }
    return b
}

function Mc(a, l, o = {}) {
    var g;
    const r = pi(a, l, o.type === "exit" ? (g = a.presenceContext) == null ? void 0 : g.custom : void 0);
    let {
        transition: c = a.getDefaultTransition() || {}
    } = r || {};
    o.transitionOverride && (c = o.transitionOverride);
    const h = r ? () => Promise.all($y(a, r, o)) : () => Promise.resolve(),
        f = a.variantChildren && a.variantChildren.size ? (y = 0) => {
            const {
                delayChildren: b = 0,
                staggerChildren: x,
                staggerDirection: S
            } = c;
            return JS(a, l, y, b, x, S, o)
        } : () => Promise.resolve(),
        {
            when: p
        } = c;
    if (p) {
        const [y, b] = p === "beforeChildren" ? [h, f] : [f, h];
        return y().then(() => b())
    } else return Promise.all([h(), f(o.delay)])
}

function JS(a, l, o = 0, r = 0, c = 0, h = 1, f) {
    const p = [];
    for (const g of a.variantChildren) g.notify("AnimationStart", l), p.push(Mc(g, l, { ...f,
        delay: o + (typeof r == "function" ? 0 : r) + Qy(a.variantChildren, g, r, c, h)
    }).then(() => g.notify("AnimationComplete", l)));
    return Promise.all(p)
}

function FS(a, l, o = {}) {
    a.notify("AnimationStart", l);
    let r;
    if (Array.isArray(l)) {
        const c = l.map(h => Mc(a, h, o));
        r = Promise.all(c)
    } else if (typeof l == "string") r = Mc(a, l, o);
    else {
        const c = typeof l == "function" ? pi(a, l, o.custom) : l;
        r = Promise.all($y(a, c, o))
    }
    return r.then(() => {
        a.notify("AnimationComplete", l)
    })
}
const WS = {
        test: a => a === "auto",
        parse: a => a
    },
    Py = a => l => l.test(a),
    Iy = [yi, W, Pe, Zn, w2, A2, WS],
    Jm = a => Iy.find(Py(a));

function $S(a) {
    return typeof a == "number" ? a === 0 : a !== null ? a === "none" || a === "0" || hy(a) : !0
}
const PS = new Set(["brightness", "contrast", "saturate", "opacity"]);

function IS(a) {
    const [l, o] = a.slice(0, -1).split("(");
    if (l === "drop-shadow") return a;
    const [r] = o.match(Wc) || [];
    if (!r) return a;
    const c = o.replace(r, "");
    let h = PS.has(l) ? 1 : 0;
    return r !== o && (h *= 100), l + "(" + h + c + ")"
}
const t5 = /\b([a-z-]*)\(.*?\)/gu,
    Ec = { ...Wn,
        getAnimatableNone: a => {
            const l = a.match(t5);
            return l ? l.map(IS).join(" ") : a
        }
    },
    Fm = { ...yi,
        transform: Math.round
    },
    e5 = {
        rotate: Zn,
        rotateX: Zn,
        rotateY: Zn,
        rotateZ: Zn,
        scale: $s,
        scaleX: $s,
        scaleY: $s,
        scaleZ: $s,
        skew: Zn,
        skewX: Zn,
        skewY: Zn,
        distance: W,
        translateX: W,
        translateY: W,
        translateZ: W,
        x: W,
        y: W,
        z: W,
        perspective: W,
        transformPerspective: W,
        opacity: Al,
        originX: Om,
        originY: Om,
        originZ: W
    },
    rf = {
        borderWidth: W,
        borderTopWidth: W,
        borderRightWidth: W,
        borderBottomWidth: W,
        borderLeftWidth: W,
        borderRadius: W,
        borderTopLeftRadius: W,
        borderTopRightRadius: W,
        borderBottomRightRadius: W,
        borderBottomLeftRadius: W,
        width: W,
        maxWidth: W,
        height: W,
        maxHeight: W,
        top: W,
        right: W,
        bottom: W,
        left: W,
        inset: W,
        insetBlock: W,
        insetBlockStart: W,
        insetBlockEnd: W,
        insetInline: W,
        insetInlineStart: W,
        insetInlineEnd: W,
        padding: W,
        paddingTop: W,
        paddingRight: W,
        paddingBottom: W,
        paddingLeft: W,
        paddingBlock: W,
        paddingBlockStart: W,
        paddingBlockEnd: W,
        paddingInline: W,
        paddingInlineStart: W,
        paddingInlineEnd: W,
        margin: W,
        marginTop: W,
        marginRight: W,
        marginBottom: W,
        marginLeft: W,
        marginBlock: W,
        marginBlockStart: W,
        marginBlockEnd: W,
        marginInline: W,
        marginInlineStart: W,
        marginInlineEnd: W,
        fontSize: W,
        backgroundPositionX: W,
        backgroundPositionY: W,
        ...e5,
        zIndex: Fm,
        fillOpacity: Al,
        strokeOpacity: Al,
        numOctaves: Fm
    },
    n5 = { ...rf,
        color: Zt,
        backgroundColor: Zt,
        outlineColor: Zt,
        fill: Zt,
        stroke: Zt,
        borderColor: Zt,
        borderTopColor: Zt,
        borderRightColor: Zt,
        borderBottomColor: Zt,
        borderLeftColor: Zt,
        filter: Ec,
        WebkitFilter: Ec
    },
    tg = a => n5[a];

function eg(a, l) {
    let o = tg(a);
    return o !== Ec && (o = Wn), o.getAnimatableNone ? o.getAnimatableNone(l) : void 0
}
const a5 = new Set(["auto", "none", "0"]);

function i5(a, l, o) {
    let r = 0,
        c;
    for (; r < a.length && !c;) {
        const h = a[r];
        typeof h == "string" && !a5.has(h) && wl(h).values.length && (c = a[r]), r++
    }
    if (c && o)
        for (const h of l) a[h] = eg(o, c)
}
class l5 extends nf {
    constructor(l, o, r, c, h) {
        super(l, o, r, c, h, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: l,
            element: o,
            name: r
        } = this;
        if (!o || !o.current) return;
        super.readKeyframes();
        for (let b = 0; b < l.length; b++) {
            let x = l[b];
            if (typeof x == "string" && (x = x.trim(), Fc(x))) {
                const S = Zy(x, o.current);
                S !== void 0 && (l[b] = S), b === l.length - 1 && (this.finalKeyframe = x)
            }
        }
        if (this.resolveNoneKeyframes(), !Jy.has(r) || l.length !== 2) return;
        const [c, h] = l, f = Jm(c), p = Jm(h), g = Rm(c), y = Rm(h);
        if (g !== y && Fn[r]) {
            this.needsMeasurement = !0;
            return
        }
        if (f !== p)
            if (Gm(f) && Gm(p))
                for (let b = 0; b < l.length; b++) {
                    const x = l[b];
                    typeof x == "string" && (l[b] = parseFloat(x))
                } else Fn[r] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: l,
            name: o
        } = this, r = [];
        for (let c = 0; c < l.length; c++)(l[c] === null || $S(l[c])) && r.push(c);
        r.length && i5(l, r, o)
    }
    measureInitialState() {
        const {
            element: l,
            unresolvedKeyframes: o,
            name: r
        } = this;
        if (!l || !l.current) return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Fn[r](l.measureViewportBox(), window.getComputedStyle(l.current)), o[0] = this.measuredOrigin;
        const c = o[o.length - 1];
        c !== void 0 && l.getValue(r, c).jump(c, !1)
    }
    measureEndState() {
        var p;
        const {
            element: l,
            name: o,
            unresolvedKeyframes: r
        } = this;
        if (!l || !l.current) return;
        const c = l.getValue(o);
        c && c.jump(this.measuredOrigin, !1);
        const h = r.length - 1,
            f = r[h];
        r[h] = Fn[o](l.measureViewportBox(), window.getComputedStyle(l.current)), f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f), (p = this.removedTransforms) != null && p.length && this.removedTransforms.forEach(([g, y]) => {
            l.getValue(g).set(y)
        }), this.resolveNoneKeyframes()
    }
}

function ng(a, l, o) {
    if (a == null) return [];
    if (a instanceof EventTarget) return [a];
    if (typeof a == "string") {
        let r = document;
        const c = (o == null ? void 0 : o[a]) ?? r.querySelectorAll(a);
        return c ? Array.from(c) : []
    }
    return Array.from(a).filter(r => r != null)
}
const ag = (a, l) => l && typeof a == "number" ? l.transform(a) : a;

function Nc(a) {
    return dy(a) && "offsetHeight" in a
}
const {
    schedule: uf
} = jy(queueMicrotask, !1), Qe = {
    x: !1,
    y: !1
};

function ig() {
    return Qe.x || Qe.y
}

function s5(a) {
    return a === "x" || a === "y" ? Qe[a] ? null : (Qe[a] = !0, () => {
        Qe[a] = !1
    }) : Qe.x || Qe.y ? null : (Qe.x = Qe.y = !0, () => {
        Qe.x = Qe.y = !1
    })
}

function lg(a, l) {
    const o = ng(a),
        r = new AbortController,
        c = {
            passive: !0,
            ...l,
            signal: r.signal
        };
    return [o, c, () => r.abort()]
}

function o5(a) {
    return !(a.pointerType === "touch" || ig())
}

function r5(a, l, o = {}) {
    const [r, c, h] = lg(a, o);
    return r.forEach(f => {
        let p = !1,
            g = !1,
            y;
        const b = () => {
                f.removeEventListener("pointerleave", k)
            },
            x = H => {
                y && (y(H), y = void 0), b()
            },
            S = H => {
                p = !1, window.removeEventListener("pointerup", S), window.removeEventListener("pointercancel", S), g && (g = !1, x(H))
            },
            M = () => {
                p = !0, window.addEventListener("pointerup", S, c), window.addEventListener("pointercancel", S, c)
            },
            k = H => {
                if (H.pointerType !== "touch") {
                    if (p) {
                        g = !0;
                        return
                    }
                    x(H)
                }
            },
            U = H => {
                if (!o5(H)) return;
                g = !1;
                const L = l(f, H);
                typeof L == "function" && (y = L, f.addEventListener("pointerleave", k, c))
            };
        f.addEventListener("pointerenter", U, c), f.addEventListener("pointerdown", M, c)
    }), h
}
const sg = (a, l) => l ? a === l ? !0 : sg(a, l.parentElement) : !1,
    cf = a => a.pointerType === "mouse" ? typeof a.button != "number" || a.button <= 0 : a.isPrimary !== !1,
    u5 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function c5(a) {
    return u5.has(a.tagName) || a.isContentEditable === !0
}
const f5 = new Set(["INPUT", "SELECT", "TEXTAREA"]);

function d5(a) {
    return f5.has(a.tagName) || a.isContentEditable === !0
}
const no = new WeakSet;

function Wm(a) {
    return l => {
        l.key === "Enter" && a(l)
    }
}

function Pu(a, l) {
    a.dispatchEvent(new PointerEvent("pointer" + l, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const h5 = (a, l) => {
    const o = a.currentTarget;
    if (!o) return;
    const r = Wm(() => {
        if (no.has(o)) return;
        Pu(o, "down");
        const c = Wm(() => {
                Pu(o, "up")
            }),
            h = () => Pu(o, "cancel");
        o.addEventListener("keyup", c, l), o.addEventListener("blur", h, l)
    });
    o.addEventListener("keydown", r, l), o.addEventListener("blur", () => o.removeEventListener("keydown", r), l)
};

function $m(a) {
    return cf(a) && !ig()
}
const Pm = new WeakSet;

function m5(a, l, o = {}) {
    const [r, c, h] = lg(a, o), f = p => {
        const g = p.currentTarget;
        if (!$m(p) || Pm.has(p)) return;
        no.add(g), o.stopPropagation && Pm.add(p);
        const y = l(g, p),
            b = (M, k) => {
                window.removeEventListener("pointerup", x), window.removeEventListener("pointercancel", S), no.has(g) && no.delete(g), $m(M) && typeof y == "function" && y(M, {
                    success: k
                })
            },
            x = M => {
                b(M, g === window || g === document || o.useGlobalTarget || sg(g, M.target))
            },
            S = M => {
                b(M, !1)
            };
        window.addEventListener("pointerup", x, c), window.addEventListener("pointercancel", S, c)
    };
    return r.forEach(p => {
        (o.useGlobalTarget ? window : p).addEventListener("pointerdown", f, c), Nc(p) && (p.addEventListener("focus", y => h5(y, c)), !c5(p) && !p.hasAttribute("tabindex") && (p.tabIndex = 0))
    }), h
}

function ff(a) {
    return dy(a) && "ownerSVGElement" in a
}
const ao = new WeakMap;
let Kn;
const og = (a, l, o) => (r, c) => c && c[0] ? c[0][a + "Size"] : ff(r) && "getBBox" in r ? r.getBBox()[l] : r[o],
    p5 = og("inline", "width", "offsetWidth"),
    y5 = og("block", "height", "offsetHeight");

function g5({
    target: a,
    borderBoxSize: l
}) {
    var o;
    (o = ao.get(a)) == null || o.forEach(r => {
        r(a, {
            get width() {
                return p5(a, l)
            },
            get height() {
                return y5(a, l)
            }
        })
    })
}

function v5(a) {
    a.forEach(g5)
}

function b5() {
    typeof ResizeObserver > "u" || (Kn = new ResizeObserver(v5))
}

function x5(a, l) {
    Kn || b5();
    const o = ng(a);
    return o.forEach(r => {
        let c = ao.get(r);
        c || (c = new Set, ao.set(r, c)), c.add(l), Kn == null || Kn.observe(r)
    }), () => {
        o.forEach(r => {
            const c = ao.get(r);
            c == null || c.delete(l), c != null && c.size || Kn == null || Kn.unobserve(r)
        })
    }
}
const io = new Set;
let fi;

function S5() {
    fi = () => {
        const a = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        io.forEach(l => l(a))
    }, window.addEventListener("resize", fi)
}

function T5(a) {
    return io.add(a), fi || S5(), () => {
        io.delete(a), !io.size && typeof fi == "function" && (window.removeEventListener("resize", fi), fi = void 0)
    }
}

function Im(a, l) {
    return typeof a == "function" ? T5(a) : x5(a, l)
}

function A5(a) {
    return ff(a) && a.tagName === "svg"
}

function w5(...a) {
    const l = !Array.isArray(a[0]),
        o = l ? 0 : -1,
        r = a[0 + o],
        c = a[1 + o],
        h = a[2 + o],
        f = a[3 + o],
        p = By(c, h, f);
    return l ? p(r) : p
}

function j5(a, l, o = {}) {
    const r = a.get();
    let c = null,
        h = r,
        f;
    const p = typeof r == "string" ? r.replace(/[\d.-]/g, "") : void 0,
        g = () => {
            c && (c.stop(), c = null)
        },
        y = () => {
            g();
            const b = ep(a.get()),
                x = ep(h);
            b !== x && (c = new vo({
                keyframes: [b, x],
                velocity: a.getVelocity(),
                type: "spring",
                restDelta: .001,
                restSpeed: .01,
                ...o,
                onUpdate: f
            }))
        };
    if (a.attach((b, x) => {
            h = b, f = S => x(tp(S, p)), Et.postRender(() => {
                var S;
                y(), (S = a.events.animationStart) == null || S.notify(), c == null || c.then(() => {
                    var M;
                    (M = a.events.animationComplete) == null || M.notify()
                })
            })
        }, g), Kt(l)) {
        const b = l.on("change", S => a.set(tp(S, p))),
            x = a.on("destroy", b);
        return () => {
            b(), x()
        }
    }
    return g
}

function tp(a, l) {
    return l ? a + l : a
}

function ep(a) {
    return typeof a == "number" ? a : parseFloat(a)
}
const M5 = [...Iy, Zt, Wn],
    E5 = a => M5.find(Py(a)),
    np = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    di = () => ({
        x: np(),
        y: np()
    }),
    ap = () => ({
        min: 0,
        max: 0
    }),
    Ft = () => ({
        x: ap(),
        y: ap()
    }),
    Cc = {
        current: null
    },
    rg = {
        current: !1
    },
    N5 = typeof window < "u";

function C5() {
    if (rg.current = !0, !!N5)
        if (window.matchMedia) {
            const a = window.matchMedia("(prefers-reduced-motion)"),
                l = () => Cc.current = a.matches;
            a.addEventListener("change", l), l()
        } else Cc.current = !1
}
const _5 = new WeakMap;

function bo(a) {
    return a !== null && typeof a == "object" && typeof a.start == "function"
}

function jl(a) {
    return typeof a == "string" || Array.isArray(a)
}
const df = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    hf = ["initial", ...df];

function xo(a) {
    return bo(a.animate) || hf.some(l => jl(a[l]))
}

function ug(a) {
    return !!(xo(a) || a.variants)
}

function k5(a, l, o) {
    for (const r in l) {
        const c = l[r],
            h = o[r];
        if (Kt(c)) a.addValue(r, c);
        else if (Kt(h)) a.addValue(r, wa(c, {
            owner: a
        }));
        else if (h !== c)
            if (a.hasValue(r)) {
                const f = a.getValue(r);
                f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c)
            } else {
                const f = a.getStaticValue(r);
                a.addValue(r, wa(f !== void 0 ? f : c, {
                    owner: a
                }))
            }
    }
    for (const r in o) l[r] === void 0 && a.removeValue(r);
    return l
}
const ip = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let co = {};

function cg(a) {
    co = a
}

function D5() {
    return co
}
class z5 {
    scrapeMotionValuesFromProps(l, o, r) {
        return {}
    }
    constructor({
        parent: l,
        props: o,
        presenceContext: r,
        reducedMotionConfig: c,
        skipAnimations: h,
        blockInitialAnimation: f,
        visualState: p
    }, g = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = new Map, this.KeyframeResolver = nf, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const M = oe.now();
            this.renderScheduledAt < M && (this.renderScheduledAt = M, Et.render(this.render, !1, !0))
        };
        const {
            latestValues: y,
            renderState: b
        } = p;
        this.latestValues = y, this.baseTarget = { ...y
        }, this.initialValues = o.initial ? { ...y
        } : {}, this.renderState = b, this.parent = l, this.props = o, this.presenceContext = r, this.depth = l ? l.depth + 1 : 0, this.reducedMotionConfig = c, this.skipAnimationsConfig = h, this.options = g, this.blockInitialAnimation = !!f, this.isControllingVariants = xo(o), this.isVariantNode = ug(o), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(l && l.current);
        const {
            willChange: x,
            ...S
        } = this.scrapeMotionValuesFromProps(o, {}, this);
        for (const M in S) {
            const k = S[M];
            y[M] !== void 0 && Kt(k) && k.set(y[M])
        }
    }
    mount(l) {
        var o, r;
        if (this.hasBeenMounted)
            for (const c in this.initialValues)(o = this.values.get(c)) == null || o.jump(this.initialValues[c]), this.latestValues[c] = this.initialValues[c];
        this.current = l, _5.set(l, this), this.projection && !this.projection.instance && this.projection.mount(l), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((c, h) => this.bindToMotionValue(h, c)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (rg.current || C5(), this.shouldReduceMotion = Cc.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, (r = this.parent) == null || r.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0
    }
    unmount() {
        var l;
        this.projection && this.projection.unmount(), xn(this.notifyUpdate), xn(this.render), this.valueSubscriptions.forEach(o => o()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (l = this.parent) == null || l.removeChild(this);
        for (const o in this.events) this.events[o].clear();
        for (const o in this.features) {
            const r = this.features[o];
            r && (r.unmount(), r.isMounted = !1)
        }
        this.current = null
    }
    addChild(l) {
        this.children.add(l), this.enteringChildren ?? (this.enteringChildren = new Set), this.enteringChildren.add(l)
    }
    removeChild(l) {
        this.children.delete(l), this.enteringChildren && this.enteringChildren.delete(l)
    }
    bindToMotionValue(l, o) {
        this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)();
        const r = vi.has(l);
        r && this.onBindTransform && this.onBindTransform();
        const c = o.on("change", f => {
            this.latestValues[l] = f, this.props.onUpdate && Et.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
        });
        let h;
        typeof window < "u" && window.MotionCheckAppearSync && (h = window.MotionCheckAppearSync(this, l, o)), this.valueSubscriptions.set(l, () => {
            c(), h && h(), o.owner && o.stop()
        })
    }
    sortNodePosition(l) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== l.type ? 0 : this.sortInstanceNodePosition(this.current, l.current)
    }
    updateFeatures() {
        let l = "animation";
        for (l in co) {
            const o = co[l];
            if (!o) continue;
            const {
                isEnabled: r,
                Feature: c
            } = o;
            if (!this.features[l] && c && r(this.props) && (this.features[l] = new c(this)), this.features[l]) {
                const h = this.features[l];
                h.isMounted ? h.update() : (h.mount(), h.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ft()
    }
    getStaticValue(l) {
        return this.latestValues[l]
    }
    setStaticValue(l, o) {
        this.latestValues[l] = o
    }
    update(l, o) {
        (l.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = l, this.prevPresenceContext = this.presenceContext, this.presenceContext = o;
        for (let r = 0; r < ip.length; r++) {
            const c = ip[r];
            this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
            const h = "on" + c,
                f = l[h];
            f && (this.propEventSubscriptions[c] = this.on(c, f))
        }
        this.prevMotionValues = k5(this, this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(l) {
        return this.props.variants ? this.props.variants[l] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(l) {
        const o = this.getClosestVariantNode();
        if (o) return o.variantChildren && o.variantChildren.add(l), () => o.variantChildren.delete(l)
    }
    addValue(l, o) {
        const r = this.values.get(l);
        o !== r && (r && this.removeValue(l), this.bindToMotionValue(l, o), this.values.set(l, o), this.latestValues[l] = o.get())
    }
    removeValue(l) {
        this.values.delete(l);
        const o = this.valueSubscriptions.get(l);
        o && (o(), this.valueSubscriptions.delete(l)), delete this.latestValues[l], this.removeValueFromRenderState(l, this.renderState)
    }
    hasValue(l) {
        return this.values.has(l)
    }
    getValue(l, o) {
        if (this.props.values && this.props.values[l]) return this.props.values[l];
        let r = this.values.get(l);
        return r === void 0 && o !== void 0 && (r = wa(o === null ? void 0 : o, {
            owner: this
        }), this.addValue(l, r)), r
    }
    readValue(l, o) {
        let r = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : this.getBaseTargetFromProps(this.props, l) ?? this.readValueFromInstance(this.current, l, this.options);
        return r != null && (typeof r == "string" && (fy(r) || hy(r)) ? r = parseFloat(r) : !E5(r) && Wn.test(o) && (r = eg(l, o)), this.setBaseTarget(l, Kt(r) ? r.get() : r)), Kt(r) ? r.get() : r
    }
    setBaseTarget(l, o) {
        this.baseTarget[l] = o
    }
    getBaseTarget(l) {
        var h;
        const {
            initial: o
        } = this.props;
        let r;
        if (typeof o == "string" || typeof o == "object") {
            const f = sf(this.props, o, (h = this.presenceContext) == null ? void 0 : h.custom);
            f && (r = f[l])
        }
        if (o && r !== void 0) return r;
        const c = this.getBaseTargetFromProps(this.props, l);
        return c !== void 0 && !Kt(c) ? c : this.initialValues[l] !== void 0 && r === void 0 ? void 0 : this.baseTarget[l]
    }
    on(l, o) {
        return this.events[l] || (this.events[l] = new Zc), this.events[l].add(o)
    }
    notify(l, ...o) {
        this.events[l] && this.events[l].notify(...o)
    }
    scheduleRenderMicrotask() {
        uf.render(this.render)
    }
}
class fg extends z5 {
    constructor() {
        super(...arguments), this.KeyframeResolver = l5
    }
    sortInstanceNodePosition(l, o) {
        return l.compareDocumentPosition(o) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(l, o) {
        const r = l.style;
        return r ? r[o] : void 0
    }
    removeValueFromRenderState(l, {
        vars: o,
        style: r
    }) {
        delete o[l], delete r[l]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: l
        } = this.props;
        Kt(l) && (this.childSubscription = l.on("change", o => {
            this.current && (this.current.textContent = `${o}`)
        }))
    }
}
class $n {
    constructor(l) {
        this.isMounted = !1, this.node = l
    }
    update() {}
}

function dg({
    top: a,
    left: l,
    right: o,
    bottom: r
}) {
    return {
        x: {
            min: l,
            max: o
        },
        y: {
            min: a,
            max: r
        }
    }
}

function R5({
    x: a,
    y: l
}) {
    return {
        top: l.min,
        right: a.max,
        bottom: l.max,
        left: a.min
    }
}

function O5(a, l) {
    if (!l) return a;
    const o = l({
            x: a.left,
            y: a.top
        }),
        r = l({
            x: a.right,
            y: a.bottom
        });
    return {
        top: o.y,
        left: o.x,
        bottom: r.y,
        right: r.x
    }
}

function Iu(a) {
    return a === void 0 || a === 1
}

function _c({
    scale: a,
    scaleX: l,
    scaleY: o
}) {
    return !Iu(a) || !Iu(l) || !Iu(o)
}

function va(a) {
    return _c(a) || hg(a) || a.z || a.rotate || a.rotateX || a.rotateY || a.skewX || a.skewY
}

function hg(a) {
    return lp(a.x) || lp(a.y)
}

function lp(a) {
    return a && a !== "0%"
}

function fo(a, l, o) {
    const r = a - o,
        c = l * r;
    return o + c
}

function sp(a, l, o, r, c) {
    return c !== void 0 && (a = fo(a, c, r)), fo(a, o, r) + l
}

function kc(a, l = 0, o = 1, r, c) {
    a.min = sp(a.min, l, o, r, c), a.max = sp(a.max, l, o, r, c)
}

function mg(a, {
    x: l,
    y: o
}) {
    kc(a.x, l.translate, l.scale, l.originPoint), kc(a.y, o.translate, o.scale, o.originPoint)
}
const op = .999999999999,
    rp = 1.0000000000001;

function V5(a, l, o, r = !1) {
    const c = o.length;
    if (!c) return;
    l.x = l.y = 1;
    let h, f;
    for (let p = 0; p < c; p++) {
        h = o[p], f = h.projectionDelta;
        const {
            visualElement: g
        } = h.options;
        g && g.props.style && g.props.style.display === "contents" || (r && h.options.layoutScroll && h.scroll && h !== h.root && mi(a, {
            x: -h.scroll.offset.x,
            y: -h.scroll.offset.y
        }), f && (l.x *= f.x.scale, l.y *= f.y.scale, mg(a, f)), r && va(h.latestValues) && mi(a, h.latestValues))
    }
    l.x < rp && l.x > op && (l.x = 1), l.y < rp && l.y > op && (l.y = 1)
}

function hi(a, l) {
    a.min = a.min + l, a.max = a.max + l
}

function up(a, l, o, r, c = .5) {
    const h = zt(a.min, a.max, c);
    kc(a, l, o, h, r)
}

function mi(a, l) {
    up(a.x, l.x, l.scaleX, l.scale, l.originX), up(a.y, l.y, l.scaleY, l.scale, l.originY)
}

function pg(a, l) {
    return dg(O5(a.getBoundingClientRect(), l))
}

function B5(a, l, o) {
    const r = pg(a, o),
        {
            scroll: c
        } = l;
    return c && (hi(r.x, c.offset.x), hi(r.y, c.offset.y)), r
}
const U5 = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    L5 = gi.length;

function H5(a, l, o) {
    let r = "",
        c = !0;
    for (let h = 0; h < L5; h++) {
        const f = gi[h],
            p = a[f];
        if (p === void 0) continue;
        let g = !0;
        if (typeof p == "number") g = p === (f.startsWith("scale") ? 1 : 0);
        else {
            const y = parseFloat(p);
            g = f.startsWith("scale") ? y === 1 : y === 0
        }
        if (!g || o) {
            const y = ag(p, rf[f]);
            if (!g) {
                c = !1;
                const b = U5[f] || f;
                r += `${b}(${y}) `
            }
            o && (l[f] = y)
        }
    }
    return r = r.trim(), o ? r = o(l, c ? "" : r) : c && (r = "none"), r
}

function mf(a, l, o) {
    const {
        style: r,
        vars: c,
        transformOrigin: h
    } = a;
    let f = !1,
        p = !1;
    for (const g in l) {
        const y = l[g];
        if (vi.has(g)) {
            f = !0;
            continue
        } else if (Ey(g)) {
            c[g] = y;
            continue
        } else {
            const b = ag(y, rf[g]);
            g.startsWith("origin") ? (p = !0, h[g] = b) : r[g] = b
        }
    }
    if (l.transform || (f || o ? r.transform = H5(l, a.transform, o) : r.transform && (r.transform = "none")), p) {
        const {
            originX: g = "50%",
            originY: y = "50%",
            originZ: b = 0
        } = h;
        r.transformOrigin = `${g} ${y} ${b}`
    }
}

function yg(a, {
    style: l,
    vars: o
}, r, c) {
    const h = a.style;
    let f;
    for (f in l) h[f] = l[f];
    c == null || c.applyProjectionStyles(h, r);
    for (f in o) h.setProperty(f, o[f])
}

function cp(a, l) {
    return l.max === l.min ? 0 : a / (l.max - l.min) * 100
}
const ml = {
        correct: (a, l) => {
            if (!l.target) return a;
            if (typeof a == "string")
                if (W.test(a)) a = parseFloat(a);
                else return a;
            const o = cp(a, l.target.x),
                r = cp(a, l.target.y);
            return `${o}% ${r}%`
        }
    },
    q5 = {
        correct: (a, {
            treeScale: l,
            projectionDelta: o
        }) => {
            const r = a,
                c = Wn.parse(a);
            if (c.length > 5) return r;
            const h = Wn.createTransformer(a),
                f = typeof c[0] != "number" ? 1 : 0,
                p = o.x.scale * l.x,
                g = o.y.scale * l.y;
            c[0 + f] /= p, c[1 + f] /= g;
            const y = zt(p, g, .5);
            return typeof c[2 + f] == "number" && (c[2 + f] /= y), typeof c[3 + f] == "number" && (c[3 + f] /= y), h(c)
        }
    },
    Dc = {
        borderRadius: { ...ml,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: ml,
        borderTopRightRadius: ml,
        borderBottomLeftRadius: ml,
        borderBottomRightRadius: ml,
        boxShadow: q5
    };

function gg(a, {
    layout: l,
    layoutId: o
}) {
    return vi.has(a) || a.startsWith("origin") || (l || o !== void 0) && (!!Dc[a] || a === "opacity")
}

function pf(a, l, o) {
    var f;
    const r = a.style,
        c = l == null ? void 0 : l.style,
        h = {};
    if (!r) return h;
    for (const p in r)(Kt(r[p]) || c && Kt(c[p]) || gg(p, a) || ((f = o == null ? void 0 : o.getValue(p)) == null ? void 0 : f.liveStyle) !== void 0) && (h[p] = r[p]);
    return h
}

function Y5(a) {
    return window.getComputedStyle(a)
}
class G5 extends fg {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = yg
    }
    readValueFromInstance(l, o) {
        var r;
        if (vi.has(o)) return (r = this.projection) != null && r.isProjecting ? vc(o) : sS(l, o); {
            const c = Y5(l),
                h = (Ey(o) ? c.getPropertyValue(o) : c[o]) || 0;
            return typeof h == "string" ? h.trim() : h
        }
    }
    measureInstanceViewportBox(l, {
        transformPagePoint: o
    }) {
        return pg(l, o)
    }
    build(l, o, r) {
        mf(l, o, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(l, o, r) {
        return pf(l, o, r)
    }
}
const X5 = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    Q5 = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function Z5(a, l, o = 1, r = 0, c = !0) {
    a.pathLength = 1;
    const h = c ? X5 : Q5;
    a[h.offset] = `${-r}`, a[h.array] = `${l} ${o}`
}
const K5 = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];

function vg(a, {
    attrX: l,
    attrY: o,
    attrScale: r,
    pathLength: c,
    pathSpacing: h = 1,
    pathOffset: f = 0,
    ...p
}, g, y, b) {
    if (mf(a, p, y), g) {
        a.style.viewBox && (a.attrs.viewBox = a.style.viewBox);
        return
    }
    a.attrs = a.style, a.style = {};
    const {
        attrs: x,
        style: S
    } = a;
    x.transform && (S.transform = x.transform, delete x.transform), (S.transform || x.transformOrigin) && (S.transformOrigin = x.transformOrigin ?? "50% 50%", delete x.transformOrigin), S.transform && (S.transformBox = (b == null ? void 0 : b.transformBox) ?? "fill-box", delete x.transformBox);
    for (const M of K5) x[M] !== void 0 && (S[M] = x[M], delete x[M]);
    l !== void 0 && (x.x = l), o !== void 0 && (x.y = o), r !== void 0 && (x.scale = r), c !== void 0 && Z5(x, c, h, f, !1)
}
const bg = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]),
    xg = a => typeof a == "string" && a.toLowerCase() === "svg";

function J5(a, l, o, r) {
    yg(a, l, void 0, r);
    for (const c in l.attrs) a.setAttribute(bg.has(c) ? c : of (c), l.attrs[c])
}

function Sg(a, l, o) {
    const r = pf(a, l, o);
    for (const c in a)
        if (Kt(a[c]) || Kt(l[c])) {
            const h = gi.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
            r[h] = a[c]
        }
    return r
}
class F5 extends fg {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Ft
    }
    getBaseTargetFromProps(l, o) {
        return l[o]
    }
    readValueFromInstance(l, o) {
        if (vi.has(o)) {
            const r = tg(o);
            return r && r.default || 0
        }
        return o = bg.has(o) ? o : of (o), l.getAttribute(o)
    }
    scrapeMotionValuesFromProps(l, o, r) {
        return Sg(l, o, r)
    }
    build(l, o, r) {
        vg(l, o, this.isSVGTag, r.transformTemplate, r.style)
    }
    renderInstance(l, o, r, c) {
        J5(l, o, r, c)
    }
    mount(l) {
        this.isSVGTag = xg(l.tagName), super.mount(l)
    }
}
const W5 = hf.length;

function Tg(a) {
    if (!a) return;
    if (!a.isControllingVariants) {
        const o = a.parent ? Tg(a.parent) || {} : {};
        return a.props.initial !== void 0 && (o.initial = a.props.initial), o
    }
    const l = {};
    for (let o = 0; o < W5; o++) {
        const r = hf[o],
            c = a.props[r];
        (jl(c) || c === !1) && (l[r] = c)
    }
    return l
}

function Ag(a, l) {
    if (!Array.isArray(l)) return !1;
    const o = l.length;
    if (o !== a.length) return !1;
    for (let r = 0; r < o; r++)
        if (l[r] !== a[r]) return !1;
    return !0
}
const $5 = [...df].reverse(),
    P5 = df.length;

function I5(a) {
    return l => Promise.all(l.map(({
        animation: o,
        options: r
    }) => FS(a, o, r)))
}

function t4(a) {
    let l = I5(a),
        o = fp(),
        r = !0;
    const c = g => (y, b) => {
        var S;
        const x = pi(a, b, g === "exit" ? (S = a.presenceContext) == null ? void 0 : S.custom : void 0);
        if (x) {
            const {
                transition: M,
                transitionEnd: k,
                ...U
            } = x;
            y = { ...y,
                ...U,
                ...k
            }
        }
        return y
    };

    function h(g) {
        l = g(a)
    }

    function f(g) {
        const {
            props: y
        } = a, b = Tg(a.parent) || {}, x = [], S = new Set;
        let M = {},
            k = 1 / 0;
        for (let H = 0; H < P5; H++) {
            const L = $5[H],
                Z = o[L],
                O = y[L] !== void 0 ? y[L] : b[L],
                G = jl(O),
                Q = L === g ? Z.isActive : null;
            Q === !1 && (k = H);
            let $ = O === b[L] && O !== y[L] && G;
            if ($ && r && a.manuallyAnimateOnMount && ($ = !1), Z.protectedKeys = { ...M
                }, !Z.isActive && Q === null || !O && !Z.prevProp || bo(O) || typeof O == "boolean") continue;
            const J = e4(Z.prevProp, O);
            let q = J || L === g && Z.isActive && !$ && G || H > k && G,
                nt = !1;
            const At = Array.isArray(O) ? O : [O];
            let Bt = At.reduce(c(L), {});
            Q === !1 && (Bt = {});
            const {
                prevResolvedValues: qt = {}
            } = Z, He = { ...qt,
                ...Bt
            }, Ee = X => {
                q = !0, S.has(X) && (nt = !0, S.delete(X)), Z.needsAnimating[X] = !0;
                const I = a.getValue(X);
                I && (I.liveStyle = !1)
            };
            for (const X in He) {
                const I = Bt[X],
                    dt = qt[X];
                if (M.hasOwnProperty(X)) continue;
                let yt = !1;
                wc(I) && wc(dt) ? yt = !Ag(I, dt) : yt = I !== dt, yt ? I != null ? Ee(X) : S.add(X) : I !== void 0 && S.has(X) ? Ee(X) : Z.protectedKeys[X] = !0
            }
            Z.prevProp = O, Z.prevResolvedValues = Bt, Z.isActive && (M = { ...M,
                ...Bt
            }), r && a.blockInitialAnimation && (q = !1);
            const ue = $ && J;
            q && (!ue || nt) && x.push(...At.map(X => {
                const I = {
                    type: L
                };
                if (typeof X == "string" && r && !ue && a.manuallyAnimateOnMount && a.parent) {
                    const {
                        parent: dt
                    } = a, yt = pi(dt, X);
                    if (dt.enteringChildren && yt) {
                        const {
                            delayChildren: w
                        } = yt.transition || {};
                        I.delay = Qy(dt.enteringChildren, a, w)
                    }
                }
                return {
                    animation: X,
                    options: I
                }
            }))
        }
        if (S.size) {
            const H = {};
            if (typeof y.initial != "boolean") {
                const L = pi(a, Array.isArray(y.initial) ? y.initial[0] : y.initial);
                L && L.transition && (H.transition = L.transition)
            }
            S.forEach(L => {
                const Z = a.getBaseTarget(L),
                    O = a.getValue(L);
                O && (O.liveStyle = !0), H[L] = Z ?? null
            }), x.push({
                animation: H
            })
        }
        let U = !!x.length;
        return r && (y.initial === !1 || y.initial === y.animate) && !a.manuallyAnimateOnMount && (U = !1), r = !1, U ? l(x) : Promise.resolve()
    }

    function p(g, y) {
        var x;
        if (o[g].isActive === y) return Promise.resolve();
        (x = a.variantChildren) == null || x.forEach(S => {
            var M;
            return (M = S.animationState) == null ? void 0 : M.setActive(g, y)
        }), o[g].isActive = y;
        const b = f(g);
        for (const S in o) o[S].protectedKeys = {};
        return b
    }
    return {
        animateChanges: f,
        setActive: p,
        setAnimateFunction: h,
        getState: () => o,
        reset: () => {
            o = fp()
        }
    }
}

function e4(a, l) {
    return typeof l == "string" ? l !== a : Array.isArray(l) ? !Ag(l, a) : !1
}

function ga(a = !1) {
    return {
        isActive: a,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function fp() {
    return {
        animate: ga(!0),
        whileInView: ga(),
        whileHover: ga(),
        whileTap: ga(),
        whileDrag: ga(),
        whileFocus: ga(),
        exit: ga()
    }
}

function dp(a, l) {
    a.min = l.min, a.max = l.max
}

function Xe(a, l) {
    dp(a.x, l.x), dp(a.y, l.y)
}

function hp(a, l) {
    a.translate = l.translate, a.scale = l.scale, a.originPoint = l.originPoint, a.origin = l.origin
}
const wg = 1e-4,
    n4 = 1 - wg,
    a4 = 1 + wg,
    jg = .01,
    i4 = 0 - jg,
    l4 = 0 + jg;

function re(a) {
    return a.max - a.min
}

function s4(a, l, o) {
    return Math.abs(a - l) <= o
}

function mp(a, l, o, r = .5) {
    a.origin = r, a.originPoint = zt(l.min, l.max, a.origin), a.scale = re(o) / re(l), a.translate = zt(o.min, o.max, a.origin) - a.originPoint, (a.scale >= n4 && a.scale <= a4 || isNaN(a.scale)) && (a.scale = 1), (a.translate >= i4 && a.translate <= l4 || isNaN(a.translate)) && (a.translate = 0)
}

function xl(a, l, o, r) {
    mp(a.x, l.x, o.x, r ? r.originX : void 0), mp(a.y, l.y, o.y, r ? r.originY : void 0)
}

function pp(a, l, o) {
    a.min = o.min + l.min, a.max = a.min + re(l)
}

function o4(a, l, o) {
    pp(a.x, l.x, o.x), pp(a.y, l.y, o.y)
}

function yp(a, l, o) {
    a.min = l.min - o.min, a.max = a.min + re(l)
}

function ho(a, l, o) {
    yp(a.x, l.x, o.x), yp(a.y, l.y, o.y)
}

function gp(a, l, o, r, c) {
    return a -= l, a = fo(a, 1 / o, r), c !== void 0 && (a = fo(a, 1 / c, r)), a
}

function r4(a, l = 0, o = 1, r = .5, c, h = a, f = a) {
    if (Pe.test(l) && (l = parseFloat(l), l = zt(f.min, f.max, l / 100) - f.min), typeof l != "number") return;
    let p = zt(h.min, h.max, r);
    a === h && (p -= l), a.min = gp(a.min, l, o, p, c), a.max = gp(a.max, l, o, p, c)
}

function vp(a, l, [o, r, c], h, f) {
    r4(a, l[o], l[r], l[c], l.scale, h, f)
}
const u4 = ["x", "scaleX", "originX"],
    c4 = ["y", "scaleY", "originY"];

function bp(a, l, o, r) {
    vp(a.x, l, u4, o ? o.x : void 0, r ? r.x : void 0), vp(a.y, l, c4, o ? o.y : void 0, r ? r.y : void 0)
}

function xp(a) {
    return a.translate === 0 && a.scale === 1
}

function Mg(a) {
    return xp(a.x) && xp(a.y)
}

function Sp(a, l) {
    return a.min === l.min && a.max === l.max
}

function f4(a, l) {
    return Sp(a.x, l.x) && Sp(a.y, l.y)
}

function Tp(a, l) {
    return Math.round(a.min) === Math.round(l.min) && Math.round(a.max) === Math.round(l.max)
}

function Eg(a, l) {
    return Tp(a.x, l.x) && Tp(a.y, l.y)
}

function Ap(a) {
    return re(a.x) / re(a.y)
}

function wp(a, l) {
    return a.translate === l.translate && a.scale === l.scale && a.originPoint === l.originPoint
}

function We(a) {
    return [a("x"), a("y")]
}

function d4(a, l, o) {
    let r = "";
    const c = a.x.translate / l.x,
        h = a.y.translate / l.y,
        f = (o == null ? void 0 : o.z) || 0;
    if ((c || h || f) && (r = `translate3d(${c}px, ${h}px, ${f}px) `), (l.x !== 1 || l.y !== 1) && (r += `scale(${1/l.x}, ${1/l.y}) `), o) {
        const {
            transformPerspective: y,
            rotate: b,
            rotateX: x,
            rotateY: S,
            skewX: M,
            skewY: k
        } = o;
        y && (r = `perspective(${y}px) ${r}`), b && (r += `rotate(${b}deg) `), x && (r += `rotateX(${x}deg) `), S && (r += `rotateY(${S}deg) `), M && (r += `skewX(${M}deg) `), k && (r += `skewY(${k}deg) `)
    }
    const p = a.x.scale * l.x,
        g = a.y.scale * l.y;
    return (p !== 1 || g !== 1) && (r += `scale(${p}, ${g})`), r || "none"
}
const Ng = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    h4 = Ng.length,
    jp = a => typeof a == "string" ? parseFloat(a) : a,
    Mp = a => typeof a == "number" || W.test(a);

function m4(a, l, o, r, c, h) {
    c ? (a.opacity = zt(0, o.opacity ?? 1, p4(r)), a.opacityExit = zt(l.opacity ?? 1, 0, y4(r))) : h && (a.opacity = zt(l.opacity ?? 1, o.opacity ?? 1, r));
    for (let f = 0; f < h4; f++) {
        const p = `border${Ng[f]}Radius`;
        let g = Ep(l, p),
            y = Ep(o, p);
        if (g === void 0 && y === void 0) continue;
        g || (g = 0), y || (y = 0), g === 0 || y === 0 || Mp(g) === Mp(y) ? (a[p] = Math.max(zt(jp(g), jp(y), r), 0), (Pe.test(y) || Pe.test(g)) && (a[p] += "%")) : a[p] = y
    }(l.rotate || o.rotate) && (a.rotate = zt(l.rotate || 0, o.rotate || 0, r))
}

function Ep(a, l) {
    return a[l] !== void 0 ? a[l] : a.borderRadius
}
const p4 = Cg(0, .5, Sy),
    y4 = Cg(.5, .95, Le);

function Cg(a, l, o) {
    return r => r < a ? 0 : r > l ? 1 : o(Tl(a, l, r))
}

function g4(a, l, o) {
    const r = Kt(a) ? a : wa(a);
    return r.start(lf("", r, l, o)), r.animation
}

function Ml(a, l, o, r = {
    passive: !0
}) {
    return a.addEventListener(l, o, r), () => a.removeEventListener(l, o)
}
const v4 = (a, l) => a.depth - l.depth;
class b4 {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(l) {
        Yc(this.children, l), this.isDirty = !0
    }
    remove(l) {
        Gc(this.children, l), this.isDirty = !0
    }
    forEach(l) {
        this.isDirty && this.children.sort(v4), this.isDirty = !1, this.children.forEach(l)
    }
}

function x4(a, l) {
    const o = oe.now(),
        r = ({
            timestamp: c
        }) => {
            const h = c - o;
            h >= l && (xn(r), a(h - l))
        };
    return Et.setup(r, !0), () => xn(r)
}

function lo(a) {
    return Kt(a) ? a.get() : a
}
class S4 {
    constructor() {
        this.members = []
    }
    add(l) {
        Yc(this.members, l), l.scheduleRender()
    }
    remove(l) {
        if (Gc(this.members, l), l === this.prevLead && (this.prevLead = void 0), l === this.lead) {
            const o = this.members[this.members.length - 1];
            o && this.promote(o)
        }
    }
    relegate(l) {
        const o = this.members.findIndex(c => l === c);
        if (o === 0) return !1;
        let r;
        for (let c = o; c >= 0; c--) {
            const h = this.members[c];
            if (h.isPresent !== !1) {
                r = h;
                break
            }
        }
        return r ? (this.promote(r), !0) : !1
    }
    promote(l, o) {
        const r = this.lead;
        if (l !== r && (this.prevLead = r, this.lead = l, l.show(), r)) {
            r.instance && r.scheduleRender(), l.scheduleRender();
            const c = r.options.layoutDependency,
                h = l.options.layoutDependency;
            c !== void 0 && h !== void 0 && c === h || (l.resumeFrom = r, o && (l.resumeFrom.preserveOpacity = !0), r.snapshot && (l.snapshot = r.snapshot, l.snapshot.latestValues = r.animationValues || r.latestValues), l.root && l.root.isUpdating && (l.isLayoutDirty = !0));
            const {
                crossfade: p
            } = l.options;
            p === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(l => {
            const {
                options: o,
                resumingFrom: r
            } = l;
            o.onExitComplete && o.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(l => {
            l.instance && l.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
const so = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    },
    tc = ["", "X", "Y", "Z"],
    T4 = 1e3;
let A4 = 0;

function ec(a, l, o, r) {
    const {
        latestValues: c
    } = l;
    c[a] && (o[a] = c[a], l.setStaticValue(a, 0), r && (r[a] = 0))
}

function _g(a) {
    if (a.hasCheckedOptimisedAppear = !0, a.root === a) return;
    const {
        visualElement: l
    } = a.options;
    if (!l) return;
    const o = Wy(l);
    if (window.MotionHasOptimisedAnimation(o, "transform")) {
        const {
            layout: c,
            layoutId: h
        } = a.options;
        window.MotionCancelOptimisedAnimation(o, "transform", Et, !(c || h))
    }
    const {
        parent: r
    } = a;
    r && !r.hasCheckedOptimisedAppear && _g(r)
}

function kg({
    attachResizeListener: a,
    defaultParent: l,
    measureScroll: o,
    checkIsScrollRoot: r,
    resetTransform: c
}) {
    return class {
        constructor(f = {}, p = l == null ? void 0 : l()) {
            this.id = A4++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, this.nodes.forEach(M4), this.nodes.forEach(_4), this.nodes.forEach(k4), this.nodes.forEach(E4)
            }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = f, this.root = p ? p.root || p : this, this.path = p ? [...p.path, p] : [], this.parent = p, this.depth = p ? p.depth + 1 : 0;
            for (let g = 0; g < this.path.length; g++) this.path[g].shouldResetTransform = !0;
            this.root === this && (this.nodes = new b4)
        }
        addEventListener(f, p) {
            return this.eventHandlers.has(f) || this.eventHandlers.set(f, new Zc), this.eventHandlers.get(f).add(p)
        }
        notifyListeners(f, ...p) {
            const g = this.eventHandlers.get(f);
            g && g.notify(...p)
        }
        hasListeners(f) {
            return this.eventHandlers.has(f)
        }
        mount(f) {
            if (this.instance) return;
            this.isSVG = ff(f) && !A5(f), this.instance = f;
            const {
                layoutId: p,
                layout: g,
                visualElement: y
            } = this.options;
            if (y && !y.current && y.mount(f), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (g || p) && (this.isLayoutDirty = !0), a) {
                let b, x = 0;
                const S = () => this.root.updateBlockedByResize = !1;
                Et.read(() => {
                    x = window.innerWidth
                }), a(f, () => {
                    const M = window.innerWidth;
                    M !== x && (x = M, this.root.updateBlockedByResize = !0, b && b(), b = x4(S, 250), so.hasAnimatedSinceResize && (so.hasAnimatedSinceResize = !1, this.nodes.forEach(_p)))
                })
            }
            p && this.root.registerSharedNode(p, this), this.options.animate !== !1 && y && (p || g) && this.addEventListener("didUpdate", ({
                delta: b,
                hasLayoutChanged: x,
                hasRelativeLayoutChanged: S,
                layout: M
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const k = this.options.transition || y.getDefaultTransition() || V4,
                    {
                        onLayoutAnimationStart: U,
                        onLayoutAnimationComplete: H
                    } = y.getProps(),
                    L = !this.targetLayout || !Eg(this.targetLayout, M),
                    Z = !x && S;
                if (this.options.layoutRoot || this.resumeFrom || Z || x && (L || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                    const O = { ...af(k, "layout"),
                        onPlay: U,
                        onComplete: H
                    };
                    (y.shouldReduceMotion || this.options.layoutRoot) && (O.delay = 0, O.type = !1), this.startAnimation(O), this.setAnimationOrigin(b, Z)
                } else x || _p(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = M
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const f = this.getStack();
            f && f.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), xn(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(D4), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: f
            } = this.options;
            return f && f.getProps().transformTemplate
        }
        willUpdate(f = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && _g(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let b = 0; b < this.path.length; b++) {
                const x = this.path[b];
                x.shouldResetTransform = !0, x.updateScroll("snapshot"), x.options.layoutRoot && x.willUpdate(!1)
            }
            const {
                layoutId: p,
                layout: g
            } = this.options;
            if (p === void 0 && !g) return;
            const y = this.getTransformTemplate();
            this.prevTransformTemplateValue = y ? y(this.latestValues, "") : void 0, this.updateSnapshot(), f && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Np);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(Cp);
                return
            }
            this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(C4), this.nodes.forEach(w4), this.nodes.forEach(j4)) : this.nodes.forEach(Cp), this.clearAllSnapshots();
            const p = oe.now();
            ae.delta = Ie(0, 1e3 / 60, p - ae.timestamp), ae.timestamp = p, ae.isProcessing = !0, Zu.update.process(ae), Zu.preRender.process(ae), Zu.render.process(ae), ae.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, uf.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(N4), this.sharedNodes.forEach(z4)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Et.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Et.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !re(this.snapshot.measuredBox.x) && !re(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let g = 0; g < this.path.length; g++) this.path[g].updateScroll();
            const f = this.layout;
            this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected = Ft(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: p
            } = this.options;
            p && p.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : void 0)
        }
        updateScroll(f = "measure") {
            let p = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === f && (p = !1), p && this.instance) {
                const g = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: f,
                    isRoot: g,
                    offset: o(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : g
                }
            }
        }
        resetTransform() {
            if (!c) return;
            const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                p = this.projectionDelta && !Mg(this.projectionDelta),
                g = this.getTransformTemplate(),
                y = g ? g(this.latestValues, "") : void 0,
                b = y !== this.prevTransformTemplateValue;
            f && this.instance && (p || va(this.latestValues) || b) && (c(this.instance, y), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(f = !0) {
            const p = this.measurePageBox();
            let g = this.removeElementScroll(p);
            return f && (g = this.removeTransform(g)), B4(g), {
                animationId: this.root.animationId,
                measuredBox: p,
                layoutBox: g,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var y;
            const {
                visualElement: f
            } = this.options;
            if (!f) return Ft();
            const p = f.measureViewportBox();
            if (!(((y = this.scroll) == null ? void 0 : y.wasRoot) || this.path.some(U4))) {
                const {
                    scroll: b
                } = this.root;
                b && (hi(p.x, b.offset.x), hi(p.y, b.offset.y))
            }
            return p
        }
        removeElementScroll(f) {
            var g;
            const p = Ft();
            if (Xe(p, f), (g = this.scroll) != null && g.wasRoot) return p;
            for (let y = 0; y < this.path.length; y++) {
                const b = this.path[y],
                    {
                        scroll: x,
                        options: S
                    } = b;
                b !== this.root && x && S.layoutScroll && (x.wasRoot && Xe(p, f), hi(p.x, x.offset.x), hi(p.y, x.offset.y))
            }
            return p
        }
        applyTransform(f, p = !1) {
            const g = Ft();
            Xe(g, f);
            for (let y = 0; y < this.path.length; y++) {
                const b = this.path[y];
                !p && b.options.layoutScroll && b.scroll && b !== b.root && mi(g, {
                    x: -b.scroll.offset.x,
                    y: -b.scroll.offset.y
                }), va(b.latestValues) && mi(g, b.latestValues)
            }
            return va(this.latestValues) && mi(g, this.latestValues), g
        }
        removeTransform(f) {
            const p = Ft();
            Xe(p, f);
            for (let g = 0; g < this.path.length; g++) {
                const y = this.path[g];
                if (!y.instance || !va(y.latestValues)) continue;
                _c(y.latestValues) && y.updateSnapshot();
                const b = Ft(),
                    x = y.measurePageBox();
                Xe(b, x), bp(p, y.latestValues, y.snapshot ? y.snapshot.layoutBox : void 0, b)
            }
            return va(this.latestValues) && bp(p, this.latestValues), p
        }
        setTargetDelta(f) {
            this.targetDelta = f, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(f) {
            this.options = { ...this.options,
                ...f,
                crossfade: f.crossfade !== void 0 ? f.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ae.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(f = !1) {
            var M;
            const p = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
            const g = !!this.resumingFrom || this !== p;
            if (!(f || g && this.isSharedProjectionDirty || this.isProjectionDirty || (M = this.parent) != null && M.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: b,
                layoutId: x
            } = this.options;
            if (!this.layout || !(b || x)) return;
            this.resolvedRelativeTargetAt = ae.timestamp;
            const S = this.getClosestProjectingParent();
            S && this.linkedParentVersion !== S.layoutVersion && !S.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (S && S.layout ? this.createRelativeTarget(S, this.layout.layoutBox, S.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Ft(), this.targetWithTransforms = Ft()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), o4(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Xe(this.target, this.layout.layoutBox), mg(this.target, this.targetDelta)) : Xe(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, S && !!S.resumingFrom == !!this.resumingFrom && !S.options.layoutScroll && S.target && this.animationProgress !== 1 ? this.createRelativeTarget(S, this.target, S.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || _c(this.parent.latestValues) || hg(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(f, p, g) {
            this.relativeParent = f, this.linkedParentVersion = f.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ft(), this.relativeTargetOrigin = Ft(), ho(this.relativeTargetOrigin, p, g), Xe(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            var k;
            const f = this.getLead(),
                p = !!this.resumingFrom || this !== f;
            let g = !0;
            if ((this.isProjectionDirty || (k = this.parent) != null && k.isProjectionDirty) && (g = !1), p && (this.isSharedProjectionDirty || this.isTransformDirty) && (g = !1), this.resolvedRelativeTargetAt === ae.timestamp && (g = !1), g) return;
            const {
                layout: y,
                layoutId: b
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(y || b)) return;
            Xe(this.layoutCorrected, this.layout.layoutBox);
            const x = this.treeScale.x,
                S = this.treeScale.y;
            V5(this.layoutCorrected, this.treeScale, this.path, p), f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox, f.targetWithTransforms = Ft());
            const {
                target: M
            } = f;
            if (!M) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (hp(this.prevProjectionDelta.x, this.projectionDelta.x), hp(this.prevProjectionDelta.y, this.projectionDelta.y)), xl(this.projectionDelta, this.layoutCorrected, M, this.latestValues), (this.treeScale.x !== x || this.treeScale.y !== S || !wp(this.projectionDelta.x, this.prevProjectionDelta.x) || !wp(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", M))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(f = !0) {
            var p;
            if ((p = this.options.visualElement) == null || p.scheduleRender(), f) {
                const g = this.getStack();
                g && g.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = di(), this.projectionDelta = di(), this.projectionDeltaWithTransform = di()
        }
        setAnimationOrigin(f, p = !1) {
            const g = this.snapshot,
                y = g ? g.latestValues : {},
                b = { ...this.latestValues
                },
                x = di();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !p;
            const S = Ft(),
                M = g ? g.source : void 0,
                k = this.layout ? this.layout.source : void 0,
                U = M !== k,
                H = this.getStack(),
                L = !H || H.members.length <= 1,
                Z = !!(U && !L && this.options.crossfade === !0 && !this.path.some(O4));
            this.animationProgress = 0;
            let O;
            this.mixTargetDelta = G => {
                const Q = G / 1e3;
                kp(x.x, f.x, Q), kp(x.y, f.y, Q), this.setTargetDelta(x), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ho(S, this.layout.layoutBox, this.relativeParent.layout.layoutBox), R4(this.relativeTarget, this.relativeTargetOrigin, S, Q), O && f4(this.relativeTarget, O) && (this.isProjectionDirty = !1), O || (O = Ft()), Xe(O, this.relativeTarget)), U && (this.animationValues = b, m4(b, y, this.latestValues, Q, Z, L)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = Q
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(f) {
            var p, g, y;
            this.notifyListeners("animationStart"), (p = this.currentAnimation) == null || p.stop(), (y = (g = this.resumingFrom) == null ? void 0 : g.currentAnimation) == null || y.stop(), this.pendingAnimation && (xn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Et.update(() => {
                so.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = wa(0)), this.currentAnimation = g4(this.motionValue, [0, 1e3], { ...f,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: b => {
                        this.mixTargetDelta(b), f.onUpdate && f.onUpdate(b)
                    },
                    onStop: () => {},
                    onComplete: () => {
                        f.onComplete && f.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const f = this.getStack();
            f && f.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(T4), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const f = this.getLead();
            let {
                targetWithTransforms: p,
                target: g,
                layout: y,
                latestValues: b
            } = f;
            if (!(!p || !g || !y)) {
                if (this !== f && this.layout && y && Dg(this.options.animationType, this.layout.layoutBox, y.layoutBox)) {
                    g = this.target || Ft();
                    const x = re(this.layout.layoutBox.x);
                    g.x.min = f.target.x.min, g.x.max = g.x.min + x;
                    const S = re(this.layout.layoutBox.y);
                    g.y.min = f.target.y.min, g.y.max = g.y.min + S
                }
                Xe(p, g), mi(p, b), xl(this.projectionDeltaWithTransform, this.layoutCorrected, p, b)
            }
        }
        registerSharedNode(f, p) {
            this.sharedNodes.has(f) || this.sharedNodes.set(f, new S4), this.sharedNodes.get(f).add(p);
            const y = p.options.initialPromotionConfig;
            p.promote({
                transition: y ? y.transition : void 0,
                preserveFollowOpacity: y && y.shouldPreserveFollowOpacity ? y.shouldPreserveFollowOpacity(p) : void 0
            })
        }
        isLead() {
            const f = this.getStack();
            return f ? f.lead === this : !0
        }
        getLead() {
            var p;
            const {
                layoutId: f
            } = this.options;
            return f ? ((p = this.getStack()) == null ? void 0 : p.lead) || this : this
        }
        getPrevLead() {
            var p;
            const {
                layoutId: f
            } = this.options;
            return f ? (p = this.getStack()) == null ? void 0 : p.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: f
            } = this.options;
            if (f) return this.root.sharedNodes.get(f)
        }
        promote({
            needsReset: f,
            transition: p,
            preserveFollowOpacity: g
        } = {}) {
            const y = this.getStack();
            y && y.promote(this, g), f && (this.projectionDelta = void 0, this.needsReset = !0), p && this.setOptions({
                transition: p
            })
        }
        relegate() {
            const f = this.getStack();
            return f ? f.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: f
            } = this.options;
            if (!f) return;
            let p = !1;
            const {
                latestValues: g
            } = f;
            if ((g.z || g.rotate || g.rotateX || g.rotateY || g.rotateZ || g.skewX || g.skewY) && (p = !0), !p) return;
            const y = {};
            g.z && ec("z", f, y, this.animationValues);
            for (let b = 0; b < tc.length; b++) ec(`rotate${tc[b]}`, f, y, this.animationValues), ec(`skew${tc[b]}`, f, y, this.animationValues);
            f.render();
            for (const b in y) f.setStaticValue(b, y[b]), this.animationValues && (this.animationValues[b] = y[b]);
            f.scheduleRender()
        }
        applyProjectionStyles(f, p) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
                f.visibility = "hidden";
                return
            }
            const g = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1, f.visibility = "", f.opacity = "", f.pointerEvents = lo(p == null ? void 0 : p.pointerEvents) || "", f.transform = g ? g(this.latestValues, "") : "none";
                return
            }
            const y = this.getLead();
            if (!this.projectionDelta || !this.layout || !y.target) {
                this.options.layoutId && (f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, f.pointerEvents = lo(p == null ? void 0 : p.pointerEvents) || ""), this.hasProjected && !va(this.latestValues) && (f.transform = g ? g({}, "") : "none", this.hasProjected = !1);
                return
            }
            f.visibility = "";
            const b = y.animationValues || y.latestValues;
            this.applyTransformsToTarget();
            let x = d4(this.projectionDeltaWithTransform, this.treeScale, b);
            g && (x = g(b, x)), f.transform = x;
            const {
                x: S,
                y: M
            } = this.projectionDelta;
            f.transformOrigin = `${S.origin*100}% ${M.origin*100}% 0`, y.animationValues ? f.opacity = y === this ? b.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : b.opacityExit : f.opacity = y === this ? b.opacity !== void 0 ? b.opacity : "" : b.opacityExit !== void 0 ? b.opacityExit : 0;
            for (const k in Dc) {
                if (b[k] === void 0) continue;
                const {
                    correct: U,
                    applyTo: H,
                    isCSSVariable: L
                } = Dc[k], Z = x === "none" ? b[k] : U(b[k], y);
                if (H) {
                    const O = H.length;
                    for (let G = 0; G < O; G++) f[H[G]] = Z
                } else L ? this.options.visualElement.renderState.vars[k] = Z : f[k] = Z
            }
            this.options.layoutId && (f.pointerEvents = y === this ? lo(p == null ? void 0 : p.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(f => {
                var p;
                return (p = f.currentAnimation) == null ? void 0 : p.stop()
            }), this.root.nodes.forEach(Np), this.root.sharedNodes.clear()
        }
    }
}

function w4(a) {
    a.updateLayout()
}

function j4(a) {
    var o;
    const l = ((o = a.resumeFrom) == null ? void 0 : o.snapshot) || a.snapshot;
    if (a.isLead() && a.layout && l && a.hasListeners("didUpdate")) {
        const {
            layoutBox: r,
            measuredBox: c
        } = a.layout, {
            animationType: h
        } = a.options, f = l.source !== a.layout.source;
        h === "size" ? We(x => {
            const S = f ? l.measuredBox[x] : l.layoutBox[x],
                M = re(S);
            S.min = r[x].min, S.max = S.min + M
        }) : Dg(h, l.layoutBox, r) && We(x => {
            const S = f ? l.measuredBox[x] : l.layoutBox[x],
                M = re(r[x]);
            S.max = S.min + M, a.relativeTarget && !a.currentAnimation && (a.isProjectionDirty = !0, a.relativeTarget[x].max = a.relativeTarget[x].min + M)
        });
        const p = di();
        xl(p, r, l.layoutBox);
        const g = di();
        f ? xl(g, a.applyTransform(c, !0), l.measuredBox) : xl(g, r, l.layoutBox);
        const y = !Mg(p);
        let b = !1;
        if (!a.resumeFrom) {
            const x = a.getClosestProjectingParent();
            if (x && !x.resumeFrom) {
                const {
                    snapshot: S,
                    layout: M
                } = x;
                if (S && M) {
                    const k = Ft();
                    ho(k, l.layoutBox, S.layoutBox);
                    const U = Ft();
                    ho(U, r, M.layoutBox), Eg(k, U) || (b = !0), x.options.layoutRoot && (a.relativeTarget = U, a.relativeTargetOrigin = k, a.relativeParent = x)
                }
            }
        }
        a.notifyListeners("didUpdate", {
            layout: r,
            snapshot: l,
            delta: g,
            layoutDelta: p,
            hasLayoutChanged: y,
            hasRelativeLayoutChanged: b
        })
    } else if (a.isLead()) {
        const {
            onExitComplete: r
        } = a.options;
        r && r()
    }
    a.options.transition = void 0
}

function M4(a) {
    a.parent && (a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty), a.isSharedProjectionDirty || (a.isSharedProjectionDirty = !!(a.isProjectionDirty || a.parent.isProjectionDirty || a.parent.isSharedProjectionDirty)), a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty))
}

function E4(a) {
    a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1
}

function N4(a) {
    a.clearSnapshot()
}

function Np(a) {
    a.clearMeasurements()
}

function Cp(a) {
    a.isLayoutDirty = !1
}

function C4(a) {
    const {
        visualElement: l
    } = a.options;
    l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), a.resetTransform()
}

function _p(a) {
    a.finishAnimation(), a.targetDelta = a.relativeTarget = a.target = void 0, a.isProjectionDirty = !0
}

function _4(a) {
    a.resolveTargetDelta()
}

function k4(a) {
    a.calcProjection()
}

function D4(a) {
    a.resetSkewAndRotation()
}

function z4(a) {
    a.removeLeadSnapshot()
}

function kp(a, l, o) {
    a.translate = zt(l.translate, 0, o), a.scale = zt(l.scale, 1, o), a.origin = l.origin, a.originPoint = l.originPoint
}

function Dp(a, l, o, r) {
    a.min = zt(l.min, o.min, r), a.max = zt(l.max, o.max, r)
}

function R4(a, l, o, r) {
    Dp(a.x, l.x, o.x, r), Dp(a.y, l.y, o.y, r)
}

function O4(a) {
    return a.animationValues && a.animationValues.opacityExit !== void 0
}
const V4 = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    zp = a => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(a),
    Rp = zp("applewebkit/") && !zp("chrome/") ? Math.round : Le;

function Op(a) {
    a.min = Rp(a.min), a.max = Rp(a.max)
}

function B4(a) {
    Op(a.x), Op(a.y)
}

function Dg(a, l, o) {
    return a === "position" || a === "preserve-aspect" && !s4(Ap(l), Ap(o), .2)
}

function U4(a) {
    var l;
    return a !== a.root && ((l = a.scroll) == null ? void 0 : l.wasRoot)
}
const L4 = kg({
        attachResizeListener: (a, l) => Ml(a, "resize", l),
        measureScroll: () => {
            var a, l;
            return {
                x: document.documentElement.scrollLeft || ((a = document.body) == null ? void 0 : a.scrollLeft) || 0,
                y: document.documentElement.scrollTop || ((l = document.body) == null ? void 0 : l.scrollTop) || 0
            }
        },
        checkIsScrollRoot: () => !0
    }),
    nc = {
        current: void 0
    },
    zg = kg({
        measureScroll: a => ({
            x: a.scrollLeft,
            y: a.scrollTop
        }),
        defaultParent: () => {
            if (!nc.current) {
                const a = new L4({});
                a.mount(window), a.setOptions({
                    layoutScroll: !0
                }), nc.current = a
            }
            return nc.current
        },
        resetTransform: (a, l) => {
            a.style.transform = l !== void 0 ? l : "none"
        },
        checkIsScrollRoot: a => window.getComputedStyle(a).position === "fixed"
    }),
    _l = Y.createContext({
        transformPagePoint: a => a,
        isStatic: !1,
        reducedMotion: "never"
    });

function Vp(a, l) {
    if (typeof a == "function") return a(l);
    a != null && (a.current = l)
}

function H4(...a) {
    return l => {
        let o = !1;
        const r = a.map(c => {
            const h = Vp(c, l);
            return !o && typeof h == "function" && (o = !0), h
        });
        if (o) return () => {
            for (let c = 0; c < r.length; c++) {
                const h = r[c];
                typeof h == "function" ? h() : Vp(a[c], null)
            }
        }
    }
}

function q4(...a) {
    return Y.useCallback(H4(...a), a)
}
class Y4 extends Y.Component {
    getSnapshotBeforeUpdate(l) {
        const o = this.props.childRef.current;
        if (o && l.isPresent && !this.props.isPresent && this.props.pop !== !1) {
            const r = o.offsetParent,
                c = Nc(r) && r.offsetWidth || 0,
                h = Nc(r) && r.offsetHeight || 0,
                f = this.props.sizeRef.current;
            f.height = o.offsetHeight || 0, f.width = o.offsetWidth || 0, f.top = o.offsetTop, f.left = o.offsetLeft, f.right = c - f.width - f.left, f.bottom = h - f.height - f.top
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function G4({
    children: a,
    isPresent: l,
    anchorX: o,
    anchorY: r,
    root: c,
    pop: h
}) {
    var S;
    const f = Y.useId(),
        p = Y.useRef(null),
        g = Y.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        }),
        {
            nonce: y
        } = Y.useContext(_l),
        b = ((S = a.props) == null ? void 0 : S.ref) ?? (a == null ? void 0 : a.ref),
        x = q4(p, b);
    return Y.useInsertionEffect(() => {
        const {
            width: M,
            height: k,
            top: U,
            left: H,
            right: L,
            bottom: Z
        } = g.current;
        if (l || h === !1 || !p.current || !M || !k) return;
        const O = o === "left" ? `left: ${H}` : `right: ${L}`,
            G = r === "bottom" ? `bottom: ${Z}` : `top: ${U}`;
        p.current.dataset.motionPopId = f;
        const Q = document.createElement("style");
        y && (Q.nonce = y);
        const $ = c ?? document.head;
        return $.appendChild(Q), Q.sheet && Q.sheet.insertRule(`
          [data-motion-pop-id="${f}"] {
            position: absolute !important;
            width: ${M}px !important;
            height: ${k}px !important;
            ${O}px !important;
            ${G}px !important;
          }
        `), () => {
            $.contains(Q) && $.removeChild(Q)
        }
    }, [l]), m.jsx(Y4, {
        isPresent: l,
        childRef: p,
        sizeRef: g,
        pop: h,
        children: h === !1 ? a : Y.cloneElement(a, {
            ref: x
        })
    })
}
const X4 = ({
    children: a,
    initial: l,
    isPresent: o,
    onExitComplete: r,
    custom: c,
    presenceAffectsLayout: h,
    mode: f,
    anchorX: p,
    anchorY: g,
    root: y
}) => {
    const b = Aa(Q4),
        x = Y.useId();
    let S = !0,
        M = Y.useMemo(() => (S = !1, {
            id: x,
            initial: l,
            isPresent: o,
            custom: c,
            onExitComplete: k => {
                b.set(k, !0);
                for (const U of b.values())
                    if (!U) return;
                r && r()
            },
            register: k => (b.set(k, !1), () => b.delete(k))
        }), [o, b, r]);
    return h && S && (M = { ...M
    }), Y.useMemo(() => {
        b.forEach((k, U) => b.set(U, !1))
    }, [o]), Y.useEffect(() => {
        !o && !b.size && r && r()
    }, [o]), a = m.jsx(G4, {
        pop: f === "popLayout",
        isPresent: o,
        anchorX: p,
        anchorY: g,
        root: y,
        children: a
    }), m.jsx(go.Provider, {
        value: M,
        children: a
    })
};

function Q4() {
    return new Map
}

function Rg(a = !0) {
    const l = Y.useContext(go);
    if (l === null) return [!0, null];
    const {
        isPresent: o,
        onExitComplete: r,
        register: c
    } = l, h = Y.useId();
    Y.useEffect(() => {
        if (a) return c(h)
    }, [a]);
    const f = Y.useCallback(() => a && r && r(h), [h, r, a]);
    return !o && r ? [!1, f] : [!0]
}
const Ps = a => a.key || "";

function Bp(a) {
    const l = [];
    return Y.Children.forEach(a, o => {
        Y.isValidElement(o) && l.push(o)
    }), l
}
const ac = ({
        children: a,
        custom: l,
        initial: o = !0,
        onExitComplete: r,
        presenceAffectsLayout: c = !0,
        mode: h = "sync",
        propagate: f = !1,
        anchorX: p = "left",
        anchorY: g = "top",
        root: y
    }) => {
        const [b, x] = Rg(f), S = Y.useMemo(() => Bp(a), [a]), M = f && !b ? [] : S.map(Ps), k = Y.useRef(!0), U = Y.useRef(S), H = Aa(() => new Map), L = Y.useRef(new Set), [Z, O] = Y.useState(S), [G, Q] = Y.useState(S);
        qc(() => {
            k.current = !1, U.current = S;
            for (let q = 0; q < G.length; q++) {
                const nt = Ps(G[q]);
                M.includes(nt) ? (H.delete(nt), L.current.delete(nt)) : H.get(nt) !== !0 && H.set(nt, !1)
            }
        }, [G, M.length, M.join("-")]);
        const $ = [];
        if (S !== Z) {
            let q = [...S];
            for (let nt = 0; nt < G.length; nt++) {
                const At = G[nt],
                    Bt = Ps(At);
                M.includes(Bt) || (q.splice(nt, 0, At), $.push(At))
            }
            return h === "wait" && $.length && (q = $), Q(Bp(q)), O(S), null
        }
        const {
            forceRender: J
        } = Y.useContext(Hc);
        return m.jsx(m.Fragment, {
            children: G.map(q => {
                const nt = Ps(q),
                    At = f && !b ? !1 : S === G || M.includes(nt),
                    Bt = () => {
                        if (L.current.has(nt)) return;
                        if (L.current.add(nt), H.has(nt)) H.set(nt, !0);
                        else return;
                        let qt = !0;
                        H.forEach(He => {
                            He || (qt = !1)
                        }), qt && (J == null || J(), Q(U.current), f && (x == null || x()), r && r())
                    };
                return m.jsx(X4, {
                    isPresent: At,
                    initial: !k.current || o ? void 0 : !1,
                    custom: l,
                    presenceAffectsLayout: c,
                    mode: h,
                    root: y,
                    onExitComplete: At ? void 0 : Bt,
                    anchorX: p,
                    anchorY: g,
                    children: q
                }, nt)
            })
        })
    },
    Og = Y.createContext({
        strict: !1
    }),
    Up = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    };
let Lp = !1;

function Z4() {
    if (Lp) return;
    const a = {};
    for (const l in Up) a[l] = {
        isEnabled: o => Up[l].some(r => !!o[r])
    };
    cg(a), Lp = !0
}

function Vg() {
    return Z4(), D5()
}

function K4(a) {
    const l = Vg();
    for (const o in a) l[o] = { ...l[o],
        ...a[o]
    };
    cg(l)
}
const J4 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);

function mo(a) {
    return a.startsWith("while") || a.startsWith("drag") && a !== "draggable" || a.startsWith("layout") || a.startsWith("onTap") || a.startsWith("onPan") || a.startsWith("onLayout") || J4.has(a)
}
let Bg = a => !mo(a);

function F4(a) {
    typeof a == "function" && (Bg = l => l.startsWith("on") ? !mo(l) : a(l))
}
try {
    F4(require("@emotion/is-prop-valid").default)
} catch {}

function W4(a, l, o) {
    const r = {};
    for (const c in a) c === "values" && typeof a.values == "object" || (Bg(c) || o === !0 && mo(c) || !l && !mo(c) || a.draggable && c.startsWith("onDrag")) && (r[c] = a[c]);
    return r
}
const So = Y.createContext({});

function $4(a, l) {
    if (xo(a)) {
        const {
            initial: o,
            animate: r
        } = a;
        return {
            initial: o === !1 || jl(o) ? o : void 0,
            animate: jl(r) ? r : void 0
        }
    }
    return a.inherit !== !1 ? l : {}
}

function P4(a) {
    const {
        initial: l,
        animate: o
    } = $4(a, Y.useContext(So));
    return Y.useMemo(() => ({
        initial: l,
        animate: o
    }), [Hp(l), Hp(o)])
}

function Hp(a) {
    return Array.isArray(a) ? a.join(" ") : a
}
const yf = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function Ug(a, l, o) {
    for (const r in l) !Kt(l[r]) && !gg(r, o) && (a[r] = l[r])
}

function I4({
    transformTemplate: a
}, l) {
    return Y.useMemo(() => {
        const o = yf();
        return mf(o, l, a), Object.assign({}, o.vars, o.style)
    }, [l])
}

function t3(a, l) {
    const o = a.style || {},
        r = {};
    return Ug(r, o, a), Object.assign(r, I4(a, l)), r
}

function e3(a, l) {
    const o = {},
        r = t3(a, l);
    return a.drag && a.dragListener !== !1 && (o.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = a.drag === !0 ? "none" : `pan-${a.drag==="x"?"y":"x"}`), a.tabIndex === void 0 && (a.onTap || a.onTapStart || a.whileTap) && (o.tabIndex = 0), o.style = r, o
}
const Lg = () => ({ ...yf(),
    attrs: {}
});

function n3(a, l, o, r) {
    const c = Y.useMemo(() => {
        const h = Lg();
        return vg(h, l, xg(r), a.transformTemplate, a.style), { ...h.attrs,
            style: { ...h.style
            }
        }
    }, [l]);
    if (a.style) {
        const h = {};
        Ug(h, a.style, a), c.style = { ...h,
            ...c.style
        }
    }
    return c
}
const a3 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function gf(a) {
    return typeof a != "string" || a.includes("-") ? !1 : !!(a3.indexOf(a) > -1 || /[A-Z]/u.test(a))
}

function i3(a, l, o, {
    latestValues: r
}, c, h = !1, f) {
    const g = (f ?? gf(a) ? n3 : e3)(l, r, c, a),
        y = W4(l, typeof a == "string", h),
        b = a !== Y.Fragment ? { ...y,
            ...g,
            ref: o
        } : {},
        {
            children: x
        } = l,
        S = Y.useMemo(() => Kt(x) ? x.get() : x, [x]);
    return Y.createElement(a, { ...b,
        children: S
    })
}

function l3({
    scrapeMotionValuesFromProps: a,
    createRenderState: l
}, o, r, c) {
    return {
        latestValues: s3(o, r, c, a),
        renderState: l()
    }
}

function s3(a, l, o, r) {
    const c = {},
        h = r(a, {});
    for (const S in h) c[S] = lo(h[S]);
    let {
        initial: f,
        animate: p
    } = a;
    const g = xo(a),
        y = ug(a);
    l && y && !g && a.inherit !== !1 && (f === void 0 && (f = l.initial), p === void 0 && (p = l.animate));
    let b = o ? o.initial === !1 : !1;
    b = b || f === !1;
    const x = b ? p : f;
    if (x && typeof x != "boolean" && !bo(x)) {
        const S = Array.isArray(x) ? x : [x];
        for (let M = 0; M < S.length; M++) {
            const k = sf(a, S[M]);
            if (k) {
                const {
                    transitionEnd: U,
                    transition: H,
                    ...L
                } = k;
                for (const Z in L) {
                    let O = L[Z];
                    if (Array.isArray(O)) {
                        const G = b ? O.length - 1 : 0;
                        O = O[G]
                    }
                    O !== null && (c[Z] = O)
                }
                for (const Z in U) c[Z] = U[Z]
            }
        }
    }
    return c
}
const Hg = a => (l, o) => {
        const r = Y.useContext(So),
            c = Y.useContext(go),
            h = () => l3(a, l, r, c);
        return o ? h() : Aa(h)
    },
    o3 = Hg({
        scrapeMotionValuesFromProps: pf,
        createRenderState: yf
    }),
    r3 = Hg({
        scrapeMotionValuesFromProps: Sg,
        createRenderState: Lg
    }),
    u3 = Symbol.for("motionComponentSymbol");

function c3(a, l, o) {
    const r = Y.useRef(o);
    Y.useInsertionEffect(() => {
        r.current = o
    });
    const c = Y.useRef(null);
    return Y.useCallback(h => {
        var p;
        h && ((p = a.onMount) == null || p.call(a, h)), l && (h ? l.mount(h) : l.unmount());
        const f = r.current;
        if (typeof f == "function")
            if (h) {
                const g = f(h);
                typeof g == "function" && (c.current = g)
            } else c.current ? (c.current(), c.current = null) : f(h);
        else f && (f.current = h)
    }, [l])
}
const qg = Y.createContext({});

function ui(a) {
    return a && typeof a == "object" && Object.prototype.hasOwnProperty.call(a, "current")
}

function f3(a, l, o, r, c, h) {
    var O, G;
    const {
        visualElement: f
    } = Y.useContext(So), p = Y.useContext(Og), g = Y.useContext(go), y = Y.useContext(_l), b = y.reducedMotion, x = y.skipAnimations, S = Y.useRef(null), M = Y.useRef(!1);
    r = r || p.renderer, !S.current && r && (S.current = r(a, {
        visualState: l,
        parent: f,
        props: o,
        presenceContext: g,
        blockInitialAnimation: g ? g.initial === !1 : !1,
        reducedMotionConfig: b,
        skipAnimations: x,
        isSVG: h
    }), M.current && S.current && (S.current.manuallyAnimateOnMount = !0));
    const k = S.current,
        U = Y.useContext(qg);
    k && !k.projection && c && (k.type === "html" || k.type === "svg") && d3(S.current, o, c, U);
    const H = Y.useRef(!1);
    Y.useInsertionEffect(() => {
        k && H.current && k.update(o, g)
    });
    const L = o[Fy],
        Z = Y.useRef(!!L && !((O = window.MotionHandoffIsComplete) != null && O.call(window, L)) && ((G = window.MotionHasOptimisedAnimation) == null ? void 0 : G.call(window, L)));
    return qc(() => {
        M.current = !0, k && (H.current = !0, window.MotionIsMounted = !0, k.updateFeatures(), k.scheduleRenderMicrotask(), Z.current && k.animationState && k.animationState.animateChanges())
    }), Y.useEffect(() => {
        k && (!Z.current && k.animationState && k.animationState.animateChanges(), Z.current && (queueMicrotask(() => {
            var Q;
            (Q = window.MotionHandoffMarkAsComplete) == null || Q.call(window, L)
        }), Z.current = !1), k.enteringChildren = void 0)
    }), k
}

function d3(a, l, o, r) {
    const {
        layoutId: c,
        layout: h,
        drag: f,
        dragConstraints: p,
        layoutScroll: g,
        layoutRoot: y,
        layoutCrossfade: b
    } = l;
    a.projection = new o(a.latestValues, l["data-framer-portal-id"] ? void 0 : Yg(a.parent)), a.projection.setOptions({
        layoutId: c,
        layout: h,
        alwaysMeasureLayout: !!f || p && ui(p),
        visualElement: a,
        animationType: typeof h == "string" ? h : "both",
        initialPromotionConfig: r,
        crossfade: b,
        layoutScroll: g,
        layoutRoot: y
    })
}

function Yg(a) {
    if (a) return a.options.allowProjection !== !1 ? a.projection : Yg(a.parent)
}

function ic(a, {
    forwardMotionProps: l = !1,
    type: o
} = {}, r, c) {
    r && K4(r);
    const h = o ? o === "svg" : gf(a),
        f = h ? r3 : o3;

    function p(y, b) {
        let x;
        const S = { ...Y.useContext(_l),
                ...y,
                layoutId: h3(y)
            },
            {
                isStatic: M
            } = S,
            k = P4(y),
            U = f(y, M);
        if (!M && cy) {
            m3();
            const H = p3(S);
            x = H.MeasureLayout, k.visualElement = f3(a, U, S, c, H.ProjectionNode, h)
        }
        return m.jsxs(So.Provider, {
            value: k,
            children: [x && k.visualElement ? m.jsx(x, {
                visualElement: k.visualElement,
                ...S
            }) : null, i3(a, y, c3(U, k.visualElement, b), U, M, l, h)]
        })
    }
    p.displayName = `motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;
    const g = Y.forwardRef(p);
    return g[u3] = a, g
}

function h3({
    layoutId: a
}) {
    const l = Y.useContext(Hc).id;
    return l && a !== void 0 ? l + "-" + a : a
}

function m3(a, l) {
    Y.useContext(Og).strict
}

function p3(a) {
    const l = Vg(),
        {
            drag: o,
            layout: r
        } = l;
    if (!o && !r) return {};
    const c = { ...o,
        ...r
    };
    return {
        MeasureLayout: o != null && o.isEnabled(a) || r != null && r.isEnabled(a) ? c.MeasureLayout : void 0,
        ProjectionNode: c.ProjectionNode
    }
}

function y3(a, l) {
    if (typeof Proxy > "u") return ic;
    const o = new Map,
        r = (h, f) => ic(h, f, a, l),
        c = (h, f) => r(h, f);
    return new Proxy(c, {
        get: (h, f) => f === "create" ? r : (o.has(f) || o.set(f, ic(f, void 0, a, l)), o.get(f))
    })
}
const g3 = (a, l) => l.isSVG ?? gf(a) ? new F5(l) : new G5(l, {
    allowProjection: a !== Y.Fragment
});
class v3 extends $n {
    constructor(l) {
        super(l), l.animationState || (l.animationState = t4(l))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: l
        } = this.node.getProps();
        bo(l) && (this.unmountControls = l.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: l
        } = this.node.getProps(), {
            animate: o
        } = this.node.prevProps || {};
        l !== o && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var l;
        this.node.animationState.reset(), (l = this.unmountControls) == null || l.call(this)
    }
}
let b3 = 0;
class x3 extends $n {
    constructor() {
        super(...arguments), this.id = b3++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: l,
            onExitComplete: o
        } = this.node.presenceContext, {
            isPresent: r
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || l === r) return;
        const c = this.node.animationState.setActive("exit", !l);
        o && !l && c.then(() => {
            o(this.id)
        })
    }
    mount() {
        const {
            register: l,
            onExitComplete: o
        } = this.node.presenceContext || {};
        o && o(this.id), l && (this.unmount = l(this.id))
    }
    unmount() {}
}
const S3 = {
    animation: {
        Feature: v3
    },
    exit: {
        Feature: x3
    }
};

function kl(a) {
    return {
        point: {
            x: a.pageX,
            y: a.pageY
        }
    }
}
const T3 = a => l => cf(l) && a(l, kl(l));

function Sl(a, l, o, r) {
    return Ml(a, l, T3(o), r)
}
const Gg = ({
        current: a
    }) => a ? a.ownerDocument.defaultView : null,
    qp = (a, l) => Math.abs(a - l);

function A3(a, l) {
    const o = qp(a.x, l.x),
        r = qp(a.y, l.y);
    return Math.sqrt(o ** 2 + r ** 2)
}
const Yp = new Set(["auto", "scroll"]);
class Xg {
    constructor(l, o, {
        transformPagePoint: r,
        contextWindow: c = window,
        dragSnapToOrigin: h = !1,
        distanceThreshold: f = 3,
        element: p
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map, this.removeScrollListeners = null, this.onElementScroll = M => {
                this.handleScroll(M.target)
            }, this.onWindowScroll = () => {
                this.handleScroll(window)
            }, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const M = sc(this.lastMoveEventInfo, this.history),
                    k = this.startEvent !== null,
                    U = A3(M.offset, {
                        x: 0,
                        y: 0
                    }) >= this.distanceThreshold;
                if (!k && !U) return;
                const {
                    point: H
                } = M, {
                    timestamp: L
                } = ae;
                this.history.push({ ...H,
                    timestamp: L
                });
                const {
                    onStart: Z,
                    onMove: O
                } = this.handlers;
                k || (Z && Z(this.lastMoveEvent, M), this.startEvent = this.lastMoveEvent), O && O(this.lastMoveEvent, M)
            }, this.handlePointerMove = (M, k) => {
                this.lastMoveEvent = M, this.lastMoveEventInfo = lc(k, this.transformPagePoint), Et.update(this.updatePoint, !0)
            }, this.handlePointerUp = (M, k) => {
                this.end();
                const {
                    onEnd: U,
                    onSessionEnd: H,
                    resumeAnimation: L
                } = this.handlers;
                if ((this.dragSnapToOrigin || !this.startEvent) && L && L(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const Z = sc(M.type === "pointercancel" ? this.lastMoveEventInfo : lc(k, this.transformPagePoint), this.history);
                this.startEvent && U && U(M, Z), H && H(M, Z)
            }, !cf(l)) return;
        this.dragSnapToOrigin = h, this.handlers = o, this.transformPagePoint = r, this.distanceThreshold = f, this.contextWindow = c || window;
        const g = kl(l),
            y = lc(g, this.transformPagePoint),
            {
                point: b
            } = y,
            {
                timestamp: x
            } = ae;
        this.history = [{ ...b,
            timestamp: x
        }];
        const {
            onSessionStart: S
        } = o;
        S && S(l, sc(y, this.history)), this.removeListeners = El(Sl(this.contextWindow, "pointermove", this.handlePointerMove), Sl(this.contextWindow, "pointerup", this.handlePointerUp), Sl(this.contextWindow, "pointercancel", this.handlePointerUp)), p && this.startScrollTracking(p)
    }
    startScrollTracking(l) {
        let o = l.parentElement;
        for (; o;) {
            const r = getComputedStyle(o);
            (Yp.has(r.overflowX) || Yp.has(r.overflowY)) && this.scrollPositions.set(o, {
                x: o.scrollLeft,
                y: o.scrollTop
            }), o = o.parentElement
        }
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        }), window.addEventListener("scroll", this.onElementScroll, {
            capture: !0,
            passive: !0
        }), window.addEventListener("scroll", this.onWindowScroll, {
            passive: !0
        }), this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0
            }), window.removeEventListener("scroll", this.onWindowScroll)
        }
    }
    handleScroll(l) {
        const o = this.scrollPositions.get(l);
        if (!o) return;
        const r = l === window,
            c = r ? {
                x: window.scrollX,
                y: window.scrollY
            } : {
                x: l.scrollLeft,
                y: l.scrollTop
            },
            h = {
                x: c.x - o.x,
                y: c.y - o.y
            };
        h.x === 0 && h.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += h.x, this.lastMoveEventInfo.point.y += h.y) : this.history.length > 0 && (this.history[0].x -= h.x, this.history[0].y -= h.y), this.scrollPositions.set(l, c), Et.update(this.updatePoint, !0))
    }
    updateHandlers(l) {
        this.handlers = l
    }
    end() {
        this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), xn(this.updatePoint)
    }
}

function lc(a, l) {
    return l ? {
        point: l(a.point)
    } : a
}

function Gp(a, l) {
    return {
        x: a.x - l.x,
        y: a.y - l.y
    }
}

function sc({
    point: a
}, l) {
    return {
        point: a,
        delta: Gp(a, Qg(l)),
        offset: Gp(a, w3(l)),
        velocity: j3(l, .1)
    }
}

function w3(a) {
    return a[0]
}

function Qg(a) {
    return a[a.length - 1]
}

function j3(a, l) {
    if (a.length < 2) return {
        x: 0,
        y: 0
    };
    let o = a.length - 1,
        r = null;
    const c = Qg(a);
    for (; o >= 0 && (r = a[o], !(c.timestamp - r.timestamp > $e(l)));) o--;
    if (!r) return {
        x: 0,
        y: 0
    };
    r === a[0] && a.length > 2 && c.timestamp - r.timestamp > $e(l) * 2 && (r = a[1]);
    const h = Ue(c.timestamp - r.timestamp);
    if (h === 0) return {
        x: 0,
        y: 0
    };
    const f = {
        x: (c.x - r.x) / h,
        y: (c.y - r.y) / h
    };
    return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f
}

function M3(a, {
    min: l,
    max: o
}, r) {
    return l !== void 0 && a < l ? a = r ? zt(l, a, r.min) : Math.max(a, l) : o !== void 0 && a > o && (a = r ? zt(o, a, r.max) : Math.min(a, o)), a
}

function Xp(a, l, o) {
    return {
        min: l !== void 0 ? a.min + l : void 0,
        max: o !== void 0 ? a.max + o - (a.max - a.min) : void 0
    }
}

function E3(a, {
    top: l,
    left: o,
    bottom: r,
    right: c
}) {
    return {
        x: Xp(a.x, o, c),
        y: Xp(a.y, l, r)
    }
}

function Qp(a, l) {
    let o = l.min - a.min,
        r = l.max - a.max;
    return l.max - l.min < a.max - a.min && ([o, r] = [r, o]), {
        min: o,
        max: r
    }
}

function N3(a, l) {
    return {
        x: Qp(a.x, l.x),
        y: Qp(a.y, l.y)
    }
}

function C3(a, l) {
    let o = .5;
    const r = re(a),
        c = re(l);
    return c > r ? o = Tl(l.min, l.max - r, a.min) : r > c && (o = Tl(a.min, a.max - c, l.min)), Ie(0, 1, o)
}

function _3(a, l) {
    const o = {};
    return l.min !== void 0 && (o.min = l.min - a.min), l.max !== void 0 && (o.max = l.max - a.min), o
}
const zc = .35;

function k3(a = zc) {
    return a === !1 ? a = 0 : a === !0 && (a = zc), {
        x: Zp(a, "left", "right"),
        y: Zp(a, "top", "bottom")
    }
}

function Zp(a, l, o) {
    return {
        min: Kp(a, l),
        max: Kp(a, o)
    }
}

function Kp(a, l) {
    return typeof a == "number" ? a : a[l] || 0
}
const D3 = new WeakMap;
class z3 {
    constructor(l) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ft(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = l
    }
    start(l, {
        snapToCursor: o = !1,
        distanceThreshold: r
    } = {}) {
        const {
            presenceContext: c
        } = this.visualElement;
        if (c && c.isPresent === !1) return;
        const h = x => {
                o && this.snapToCursor(kl(x).point), this.stopAnimation()
            },
            f = (x, S) => {
                const {
                    drag: M,
                    dragPropagation: k,
                    onDragStart: U
                } = this.getProps();
                if (M && !k && (this.openDragLock && this.openDragLock(), this.openDragLock = s5(M), !this.openDragLock)) return;
                this.latestPointerEvent = x, this.latestPanInfo = S, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), We(L => {
                    let Z = this.getAxisMotionValue(L).get() || 0;
                    if (Pe.test(Z)) {
                        const {
                            projection: O
                        } = this.visualElement;
                        if (O && O.layout) {
                            const G = O.layout.layoutBox[L];
                            G && (Z = re(G) * (parseFloat(Z) / 100))
                        }
                    }
                    this.originPoint[L] = Z
                }), U && Et.update(() => U(x, S), !1, !0), jc(this.visualElement, "transform");
                const {
                    animationState: H
                } = this.visualElement;
                H && H.setActive("whileDrag", !0)
            },
            p = (x, S) => {
                this.latestPointerEvent = x, this.latestPanInfo = S;
                const {
                    dragPropagation: M,
                    dragDirectionLock: k,
                    onDirectionLock: U,
                    onDrag: H
                } = this.getProps();
                if (!M && !this.openDragLock) return;
                const {
                    offset: L
                } = S;
                if (k && this.currentDirection === null) {
                    this.currentDirection = O3(L), this.currentDirection !== null && U && U(this.currentDirection);
                    return
                }
                this.updateAxis("x", S.point, L), this.updateAxis("y", S.point, L), this.visualElement.render(), H && Et.update(() => H(x, S), !1, !0)
            },
            g = (x, S) => {
                this.latestPointerEvent = x, this.latestPanInfo = S, this.stop(x, S), this.latestPointerEvent = null, this.latestPanInfo = null
            },
            y = () => {
                const {
                    dragSnapToOrigin: x
                } = this.getProps();
                (x || this.constraints) && this.startAnimation({
                    x: 0,
                    y: 0
                })
            },
            {
                dragSnapToOrigin: b
            } = this.getProps();
        this.panSession = new Xg(l, {
            onSessionStart: h,
            onStart: f,
            onMove: p,
            onSessionEnd: g,
            resumeAnimation: y
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: b,
            distanceThreshold: r,
            contextWindow: Gg(this.visualElement),
            element: this.visualElement.current
        })
    }
    stop(l, o) {
        const r = l || this.latestPointerEvent,
            c = o || this.latestPanInfo,
            h = this.isDragging;
        if (this.cancel(), !h || !c || !r) return;
        const {
            velocity: f
        } = c;
        this.startAnimation(f);
        const {
            onDragEnd: p
        } = this.getProps();
        p && Et.postRender(() => p(r, c))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: l,
            animationState: o
        } = this.visualElement;
        l && (l.isAnimationBlocked = !1), this.endPanSession();
        const {
            dragPropagation: r
        } = this.getProps();
        !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), o && o.setActive("whileDrag", !1)
    }
    endPanSession() {
        this.panSession && this.panSession.end(), this.panSession = void 0
    }
    updateAxis(l, o, r) {
        const {
            drag: c
        } = this.getProps();
        if (!r || !Is(l, c, this.currentDirection)) return;
        const h = this.getAxisMotionValue(l);
        let f = this.originPoint[l] + r[l];
        this.constraints && this.constraints[l] && (f = M3(f, this.constraints[l], this.elastic[l])), h.set(f)
    }
    resolveConstraints() {
        var h;
        const {
            dragConstraints: l,
            dragElastic: o
        } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (h = this.visualElement.projection) == null ? void 0 : h.layout, c = this.constraints;
        l && ui(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && r ? this.constraints = E3(r.layoutBox, l) : this.constraints = !1, this.elastic = k3(o), c !== this.constraints && !ui(l) && r && this.constraints && !this.hasMutatedConstraints && We(f => {
            this.constraints !== !1 && this.getAxisMotionValue(f) && (this.constraints[f] = _3(r.layoutBox[f], this.constraints[f]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: l,
            onMeasureDragConstraints: o
        } = this.getProps();
        if (!l || !ui(l)) return !1;
        const r = l.current,
            {
                projection: c
            } = this.visualElement;
        if (!c || !c.layout) return !1;
        const h = B5(r, c.root, this.visualElement.getTransformPagePoint());
        let f = N3(c.layout.layoutBox, h);
        if (o) {
            const p = o(R5(f));
            this.hasMutatedConstraints = !!p, p && (f = dg(p))
        }
        return f
    }
    startAnimation(l) {
        const {
            drag: o,
            dragMomentum: r,
            dragElastic: c,
            dragTransition: h,
            dragSnapToOrigin: f,
            onDragTransitionEnd: p
        } = this.getProps(), g = this.constraints || {}, y = We(b => {
            if (!Is(b, o, this.currentDirection)) return;
            let x = g && g[b] || {};
            f && (x = {
                min: 0,
                max: 0
            });
            const S = c ? 200 : 1e6,
                M = c ? 40 : 1e7,
                k = {
                    type: "inertia",
                    velocity: r ? l[b] : 0,
                    bounceStiffness: S,
                    bounceDamping: M,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...h,
                    ...x
                };
            return this.startAxisValueAnimation(b, k)
        });
        return Promise.all(y).then(p)
    }
    startAxisValueAnimation(l, o) {
        const r = this.getAxisMotionValue(l);
        return jc(this.visualElement, l), r.start(lf(l, r, 0, o, this.visualElement, !1))
    }
    stopAnimation() {
        We(l => this.getAxisMotionValue(l).stop())
    }
    getAxisMotionValue(l) {
        const o = `_drag${l.toUpperCase()}`,
            r = this.visualElement.getProps(),
            c = r[o];
        return c || this.visualElement.getValue(l, (r.initial ? r.initial[l] : void 0) || 0)
    }
    snapToCursor(l) {
        We(o => {
            const {
                drag: r
            } = this.getProps();
            if (!Is(o, r, this.currentDirection)) return;
            const {
                projection: c
            } = this.visualElement, h = this.getAxisMotionValue(o);
            if (c && c.layout) {
                const {
                    min: f,
                    max: p
                } = c.layout.layoutBox[o], g = h.get() || 0;
                h.set(l[o] - zt(f, p, .5) + g)
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: l,
            dragConstraints: o
        } = this.getProps(), {
            projection: r
        } = this.visualElement;
        if (!ui(o) || !r || !this.constraints) return;
        this.stopAnimation();
        const c = {
            x: 0,
            y: 0
        };
        We(f => {
            const p = this.getAxisMotionValue(f);
            if (p && this.constraints !== !1) {
                const g = p.get();
                c[f] = C3({
                    min: g,
                    max: g
                }, this.constraints[f])
            }
        });
        const {
            transformTemplate: h
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = h ? h({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.constraints = !1, this.resolveConstraints(), We(f => {
            if (!Is(f, l, null)) return;
            const p = this.getAxisMotionValue(f),
                {
                    min: g,
                    max: y
                } = this.constraints[f];
            p.set(zt(g, y, c[f]))
        }), this.visualElement.render()
    }
    addListeners() {
        if (!this.visualElement.current) return;
        D3.set(this.visualElement, this);
        const l = this.visualElement.current,
            o = Sl(l, "pointerdown", y => {
                const {
                    drag: b,
                    dragListener: x = !0
                } = this.getProps(), S = y.target, M = S !== l && d5(S);
                b && x && !M && this.start(y)
            });
        let r;
        const c = () => {
                const {
                    dragConstraints: y
                } = this.getProps();
                ui(y) && y.current && (this.constraints = this.resolveRefConstraints(), r || (r = R3(l, y.current, () => this.scalePositionWithinConstraints())))
            },
            {
                projection: h
            } = this.visualElement,
            f = h.addEventListener("measure", c);
        h && !h.layout && (h.root && h.root.updateScroll(), h.updateLayout()), Et.read(c);
        const p = Ml(window, "resize", () => this.scalePositionWithinConstraints()),
            g = h.addEventListener("didUpdate", (({
                delta: y,
                hasLayoutChanged: b
            }) => {
                this.isDragging && b && (We(x => {
                    const S = this.getAxisMotionValue(x);
                    S && (this.originPoint[x] += y[x].translate, S.set(S.get() + y[x].translate))
                }), this.visualElement.render())
            }));
        return () => {
            p(), o(), f(), g && g(), r && r()
        }
    }
    getProps() {
        const l = this.visualElement.getProps(),
            {
                drag: o = !1,
                dragDirectionLock: r = !1,
                dragPropagation: c = !1,
                dragConstraints: h = !1,
                dragElastic: f = zc,
                dragMomentum: p = !0
            } = l;
        return { ...l,
            drag: o,
            dragDirectionLock: r,
            dragPropagation: c,
            dragConstraints: h,
            dragElastic: f,
            dragMomentum: p
        }
    }
}

function Jp(a) {
    let l = !0;
    return () => {
        if (l) {
            l = !1;
            return
        }
        a()
    }
}

function R3(a, l, o) {
    const r = Im(a, Jp(o)),
        c = Im(l, Jp(o));
    return () => {
        r(), c()
    }
}

function Is(a, l, o) {
    return (l === !0 || l === a) && (o === null || o === a)
}

function O3(a, l = 10) {
    let o = null;
    return Math.abs(a.y) > l ? o = "y" : Math.abs(a.x) > l && (o = "x"), o
}
class V3 extends $n {
    constructor(l) {
        super(l), this.removeGroupControls = Le, this.removeListeners = Le, this.controls = new z3(l)
    }
    mount() {
        const {
            dragControls: l
        } = this.node.getProps();
        l && (this.removeGroupControls = l.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Le
    }
    update() {
        const {
            dragControls: l
        } = this.node.getProps(), {
            dragControls: o
        } = this.node.prevProps || {};
        l !== o && (this.removeGroupControls(), l && (this.removeGroupControls = l.subscribe(this.controls)))
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession()
    }
}
const oc = a => (l, o) => {
    a && Et.update(() => a(l, o), !1, !0)
};
class B3 extends $n {
    constructor() {
        super(...arguments), this.removePointerDownListener = Le
    }
    onPointerDown(l) {
        this.session = new Xg(l, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Gg(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: l,
            onPanStart: o,
            onPan: r,
            onPanEnd: c
        } = this.node.getProps();
        return {
            onSessionStart: oc(l),
            onStart: oc(o),
            onMove: oc(r),
            onEnd: (h, f) => {
                delete this.session, c && Et.postRender(() => c(h, f))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Sl(this.node.current, "pointerdown", l => this.onPointerDown(l))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
let rc = !1;
class U3 extends Y.Component {
    componentDidMount() {
        const {
            visualElement: l,
            layoutGroup: o,
            switchLayoutGroup: r,
            layoutId: c
        } = this.props, {
            projection: h
        } = l;
        h && (o.group && o.group.add(h), r && r.register && c && r.register(h), rc && h.root.didUpdate(), h.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), h.setOptions({ ...h.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
        })), so.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(l) {
        const {
            layoutDependency: o,
            visualElement: r,
            drag: c,
            isPresent: h
        } = this.props, {
            projection: f
        } = r;
        return f && (f.isPresent = h, l.layoutDependency !== o && f.setOptions({ ...f.options,
            layoutDependency: o
        }), rc = !0, c || l.layoutDependency !== o || o === void 0 || l.isPresent !== h ? f.willUpdate() : this.safeToRemove(), l.isPresent !== h && (h ? f.promote() : f.relegate() || Et.postRender(() => {
            const p = f.getStack();
            (!p || !p.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: l
        } = this.props.visualElement;
        l && (l.root.didUpdate(), uf.postRender(() => {
            !l.currentAnimation && l.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: l,
            layoutGroup: o,
            switchLayoutGroup: r
        } = this.props, {
            projection: c
        } = l;
        rc = !0, c && (c.scheduleCheckAfterUnmount(), o && o.group && o.group.remove(c), r && r.deregister && r.deregister(c))
    }
    safeToRemove() {
        const {
            safeToRemove: l
        } = this.props;
        l && l()
    }
    render() {
        return null
    }
}

function Zg(a) {
    const [l, o] = Rg(), r = Y.useContext(Hc);
    return m.jsx(U3, { ...a,
        layoutGroup: r,
        switchLayoutGroup: Y.useContext(qg),
        isPresent: l,
        safeToRemove: o
    })
}
const L3 = {
    pan: {
        Feature: B3
    },
    drag: {
        Feature: V3,
        ProjectionNode: zg,
        MeasureLayout: Zg
    }
};

function Fp(a, l, o) {
    const {
        props: r
    } = a;
    a.animationState && r.whileHover && a.animationState.setActive("whileHover", o === "Start");
    const c = "onHover" + o,
        h = r[c];
    h && Et.postRender(() => h(l, kl(l)))
}
class H3 extends $n {
    mount() {
        const {
            current: l
        } = this.node;
        l && (this.unmount = r5(l, (o, r) => (Fp(this.node, r, "Start"), c => Fp(this.node, c, "End"))))
    }
    unmount() {}
}
class q3 extends $n {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let l = !1;
        try {
            l = this.node.current.matches(":focus-visible")
        } catch {
            l = !0
        }!l || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = El(Ml(this.node.current, "focus", () => this.onFocus()), Ml(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}

function Wp(a, l, o) {
    const {
        props: r
    } = a;
    if (a.current instanceof HTMLButtonElement && a.current.disabled) return;
    a.animationState && r.whileTap && a.animationState.setActive("whileTap", o === "Start");
    const c = "onTap" + (o === "End" ? "" : o),
        h = r[c];
    h && Et.postRender(() => h(l, kl(l)))
}
class Y3 extends $n {
    mount() {
        const {
            current: l
        } = this.node;
        if (!l) return;
        const {
            globalTapTarget: o,
            propagate: r
        } = this.node.props;
        this.unmount = m5(l, (c, h) => (Wp(this.node, h, "Start"), (f, {
            success: p
        }) => Wp(this.node, f, p ? "End" : "Cancel")), {
            useGlobalTarget: o,
            stopPropagation: (r == null ? void 0 : r.tap) === !1
        })
    }
    unmount() {}
}
const Rc = new WeakMap,
    uc = new WeakMap,
    G3 = a => {
        const l = Rc.get(a.target);
        l && l(a)
    },
    X3 = a => {
        a.forEach(G3)
    };

function Q3({
    root: a,
    ...l
}) {
    const o = a || document;
    uc.has(o) || uc.set(o, {});
    const r = uc.get(o),
        c = JSON.stringify(l);
    return r[c] || (r[c] = new IntersectionObserver(X3, {
        root: a,
        ...l
    })), r[c]
}

function Z3(a, l, o) {
    const r = Q3(l);
    return Rc.set(a, o), r.observe(a), () => {
        Rc.delete(a), r.unobserve(a)
    }
}
const K3 = {
    some: 0,
    all: 1
};
class J3 extends $n {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: l = {}
        } = this.node.getProps(), {
            root: o,
            margin: r,
            amount: c = "some",
            once: h
        } = l, f = {
            root: o ? o.current : void 0,
            rootMargin: r,
            threshold: typeof c == "number" ? c : K3[c]
        }, p = g => {
            const {
                isIntersecting: y
            } = g;
            if (this.isInView === y || (this.isInView = y, h && !y && this.hasEnteredView)) return;
            y && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", y);
            const {
                onViewportEnter: b,
                onViewportLeave: x
            } = this.node.getProps(), S = y ? b : x;
            S && S(g)
        };
        return Z3(this.node.current, f, p)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: l,
            prevProps: o
        } = this.node;
        ["amount", "margin", "root"].some(F3(l, o)) && this.startObserver()
    }
    unmount() {}
}

function F3({
    viewport: a = {}
}, {
    viewport: l = {}
} = {}) {
    return o => a[o] !== l[o]
}
const W3 = {
        inView: {
            Feature: J3
        },
        tap: {
            Feature: Y3
        },
        focus: {
            Feature: q3
        },
        hover: {
            Feature: H3
        }
    },
    $3 = {
        layout: {
            ProjectionNode: zg,
            MeasureLayout: Zg
        }
    },
    P3 = { ...S3,
        ...W3,
        ...L3,
        ...$3
    },
    Ct = y3(P3, g3);

function po(a) {
    const l = Aa(() => wa(a)),
        {
            isStatic: o
        } = Y.useContext(_l);
    if (o) {
        const [, r] = Y.useState(a);
        Y.useEffect(() => l.on("change", r), [])
    }
    return l
}

function vf(a, l) {
    const o = po(l()),
        r = () => o.set(l());
    return r(), qc(() => {
        const c = () => Et.preRender(r, !1, !0),
            h = a.map(f => f.on("change", c));
        return () => {
            h.forEach(f => f()), xn(r)
        }
    }), o
}

function I3(a, ...l) {
    const o = a.length;

    function r() {
        let c = "";
        for (let h = 0; h < o; h++) {
            c += a[h];
            const f = l[h];
            f && (c += Kt(f) ? f.get() : f)
        }
        return c
    }
    return vf(l.filter(Kt), r)
}

function tT(a) {
    bl.current = [], a();
    const l = vf(bl.current, a);
    return bl.current = void 0, l
}

function Jn(a, l, o, r) {
    if (typeof a == "function") return tT(a);
    if (o !== void 0 && !Array.isArray(o) && typeof l != "function") return eT(a, l, o, r);
    const f = typeof l == "function" ? l : w5(l, o, r);
    return Array.isArray(a) ? $p(a, f) : $p([a], ([p]) => f(p))
}

function $p(a, l) {
    const o = Aa(() => []);
    return vf(a, () => {
        o.length = 0;
        const r = a.length;
        for (let c = 0; c < r; c++) o[c] = a[c].get();
        return l(o)
    })
}

function eT(a, l, o, r) {
    const c = Aa(() => Object.keys(o)),
        h = Aa(() => ({}));
    for (const f of c) h[f] = Jn(a, l, o[f], r);
    return h
}

function nT(a, l = {}) {
    const {
        isStatic: o
    } = Y.useContext(_l), r = () => Kt(a) ? a.get() : a;
    if (o) return Jn(r);
    const c = po(r());
    return Y.useInsertionEffect(() => j5(c, a, l), [c, JSON.stringify(l)]), c
}

function Pp(a, l = {}) {
    return nT(a, {
        type: "spring",
        ...l
    })
}
const aT = {
        none: "",
        open_resume: "Open / download resume",
        show_projects: "Show projects",
        show_about: "Show about",
        show_skills: "Show skills",
        show_contact: "Show contact",
        open_github: "Open GitHub",
        open_linkedin: "Open LinkedIn",
        open_instagram: "Open Instagram",
        open_facebook: "Open Facebook",
        open_youtube: "Open YouTube",
        open_whatsapp: "Open WhatsApp"
    },
    Ip = typeof window < "u" ? window.SpeechRecognition || window.webkitSpeechRecognition : null,
    cc = (a, l) => {
        if (l || typeof window > "u" || !("speechSynthesis" in window)) return;
        window.speechSynthesis.cancel();
        const o = new SpeechSynthesisUtterance(a);
        o.lang = /[\u0600-\u06FF]/.test(a) ? "ur-PK" : "en-US", o.rate = .96, o.pitch = .92, window.speechSynthesis.speak(o)
    },
    iT = ({
        onClose: a,
        onNavigate: l
    }) => {
        const [o, r] = Y.useState(!1), [c, h] = Y.useState(!1), [f, p] = Y.useState(!1), [g, y] = Y.useState("Tap the orb to speak"), [b, x] = Y.useState(""), [S, M] = Y.useState(null), k = Y.useRef(null);
        Y.useEffect(() => () => {
            var G, Q, $;
            (Q = (G = k.current) == null ? void 0 : G.stop) == null || Q.call(G), typeof window < "u" && (($ = window.speechSynthesis) == null || $.cancel())
        }, []);
        const U = G => {
                switch (G) {
                    case "open_resume":
                        window.open("/resume.html", "_blank", "noopener,noreferrer");
                        break;
                    case "show_projects":
                        a(), l("projects");
                        break;
                    case "show_about":
                        a(), l("about");
                        break;
                    case "show_skills":
                        a(), l("skills");
                        break;
                    case "show_contact":
                        a(), l("contact");
                        break;
                    case "open_github":
                        window.open("https://github.com/CodeWithSyed786", "_blank", "noopener,noreferrer");
                        break;
                    case "open_linkedin":
                        window.open("https://www.linkedin.com/in/CodeWithSyed786", "_blank", "noopener,noreferrer");
                        break;
                    case "open_instagram":
                        window.open("https://www.instagram.com/CodeWithSyed786", "_blank", "noopener,noreferrer");
                        break;
                    case "open_facebook":
                        window.open("https://www.facebook.com/CodeWithSyed786", "_blank", "noopener,noreferrer");
                        break;
                    case "open_youtube":
                        window.open("https://www.youtube.com/@CodeWithSyed786", "_blank", "noopener,noreferrer");
                        break;
                    case "open_whatsapp":
                        window.open("https://wa.me/923416130231", "_blank", "noopener,noreferrer");
                        break
                }
            },
            H = async G => {
                const Q = G.trim();
                if (!(!Q || f)) {
                    p(!0), y("Thinking…");
                    try {
                        const $ = await fetch("/api/assistant", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                message: Q,
                                history: []
                            })
                        });
                        if (!$.ok) throw new Error("Assistant request failed");
                        const J = await $.json();
                        x(J.reply), y(J.action !== "none" ? "Permission required" : "Tap the orb to speak again"), J.action !== "none" && J.requiresConfirmation && M(J), cc(J.reply, o)
                    } catch {
                        const $ = "I cannot reach my AI service right now. Please try again in a moment.";
                        x($), y("Tap the orb to try again"), cc($, o)
                    } finally {
                        p(!1)
                    }
                }
            },
            L = () => {
                var G, Q;
                (Q = (G = k.current) == null ? void 0 : G.stop) == null || Q.call(G), h(!1), y("Processing…")
            },
            Z = () => {
                if (f) return;
                if (c) {
                    L();
                    return
                }
                if (!Ip) {
                    const Q = "Voice input is not supported in this browser.";
                    x(Q), cc(Q, o);
                    return
                }
                x(""), M(null);
                const G = new Ip;
                G.lang = navigator.language || "en-US", G.interimResults = !1, G.continuous = !1, G.onstart = () => {
                    h(!0), y("Listening… tap again to stop")
                }, G.onend = () => {
                    h(!1), f || y("Processing…")
                }, G.onerror = () => {
                    h(!1), y("Voice input failed — tap to try again")
                }, G.onresult = Q => {
                    const $ = Array.from(Q.results).map(J => {
                        var q;
                        return ((q = J[0]) == null ? void 0 : q.transcript) || ""
                    }).join("");
                    H($)
                }, k.current = G, G.start()
            },
            O = () => {
                S && (U(S.action), M(null), y("Done"))
            };
        return m.jsxs(Ct.div, {
            initial: {
                opacity: 0,
                scale: .92,
                y: 20
            },
            animate: {
                opacity: 1,
                scale: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                scale: .96,
                y: 12
            },
            transition: {
                type: "spring",
                stiffness: 280,
                damping: 25
            },
            className: "fixed bottom-5 right-5 z-50 w-[min(460px,calc(100vw-2rem))] overflow-hidden rounded-[32px] border border-cyan-300/25 bg-slate-950/95 shadow-[0_30px_100px_rgba(6,182,212,.22)] backdrop-blur-2xl",
            role: "dialog",
            "aria-label": "JARVIS voice assistant",
            children: [m.jsxs("div", {
                className: "relative flex items-center justify-between px-5 py-4",
                children: [m.jsxs("div", {
                    children: [m.jsx("div", {
                        className: "text-[11px] font-black uppercase tracking-[0.28em] text-cyan-300",
                        children: "JARVIS"
                    }), m.jsx("div", {
                        className: "mt-1 text-xs text-slate-400",
                        children: g
                    })]
                }), m.jsxs("div", {
                    className: "flex items-center gap-1",
                    children: [m.jsx("button", {
                        onClick: () => {
                            var G;
                            r(Q => !Q), (G = window.speechSynthesis) == null || G.cancel()
                        },
                        className: "rounded-full p-2 text-slate-400 transition hover:bg-white/10 hover:text-white",
                        "aria-label": o ? "Unmute JARVIS" : "Mute JARVIS",
                        children: o ? m.jsx(Fx, {
                            size: 18
                        }) : m.jsx(Kx, {
                            size: 18
                        })
                    }), m.jsx("button", {
                        onClick: a,
                        className: "rounded-full p-2 text-slate-400 transition hover:bg-white/10 hover:text-white",
                        "aria-label": "Close JARVIS",
                        children: m.jsx(uy, {
                            size: 18
                        })
                    })]
                })]
            }), m.jsxs("div", {
                className: "relative flex min-h-[500px] flex-col items-center justify-center px-6 pb-8",
                children: [m.jsx("div", {
                    className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.16),transparent_58%)]"
                }), m.jsx(Ct.div, {
                    animate: c || f ? {
                        scale: [1, 1.08, 1],
                        opacity: [.65, 1, .65]
                    } : {
                        scale: 1,
                        opacity: .55
                    },
                    transition: {
                        duration: 1.5,
                        repeat: c || f ? 1 / 0 : 0
                    },
                    className: "absolute h-80 w-80 rounded-full border border-cyan-400/20"
                }), m.jsx(Ct.div, {
                    animate: c ? {
                        rotate: 360
                    } : f ? {
                        rotate: -360
                    } : {
                        rotate: 0
                    },
                    transition: {
                        duration: c ? 3 : 6,
                        repeat: c || f ? 1 / 0 : 0,
                        ease: "linear"
                    },
                    className: "absolute h-64 w-64 rounded-full border border-dashed border-cyan-300/20"
                }), m.jsxs("button", {
                    type: "button",
                    onClick: Z,
                    disabled: f,
                    className: "group relative z-10 flex h-56 w-56 items-center justify-center rounded-full border border-cyan-300/40 bg-slate-900 shadow-[0_0_70px_rgba(34,211,238,.25)] transition hover:scale-[1.03] hover:shadow-[0_0_90px_rgba(34,211,238,.38)] disabled:cursor-wait",
                    "aria-label": c ? "Stop listening" : "Start speaking with JARVIS",
                    children: [m.jsx("span", {
                        className: "absolute inset-3 rounded-full border border-cyan-300/20"
                    }), m.jsx("span", {
                        className: "absolute inset-5 rounded-full bg-cyan-300/5 shadow-[inset_0_0_40px_rgba(34,211,238,.08)]"
                    }), m.jsx("img", {
                        src: "https://raw.githubusercontent.com/CodeWithSyed786/test/main/Ai%20logo/13b99a7d-207d-48ce-8dd4-915391d614d5.png",
                        alt: "EMAN AI assistant logo",
                        className: "relative z-10 h-44 w-44 rounded-full object-contain drop-shadow-[0_0_28px_rgba(34,211,238,.5)]",
                        draggable: "false",
                        loading: "eager"
                    }), m.jsx(Ex, {
                        className: `absolute bottom-7 transition ${c?"scale-110 text-white":"text-cyan-300 group-hover:text-white"}`,
                        size: 22
                    }), c && m.jsx("span", {
                        className: "absolute inset-0 rounded-full border-2 border-cyan-300/70 animate-ping"
                    })]
                }), m.jsxs("div", {
                    className: "relative z-10 mt-9 text-center",
                    children: [m.jsx("div", {
                        className: "text-sm font-semibold text-white",
                        children: c ? "I’m listening…" : f ? "Processing your voice…" : "Tap to talk"
                    }), m.jsx("div", {
                        className: "mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-500",
                        children: "Voice to voice · permission based"
                    })]
                }), b && !S && m.jsx("div", {
                    className: "relative z-10 mt-5 max-w-[290px] text-center text-xs leading-5 text-slate-400",
                    children: b
                }), S && m.jsxs("div", {
                    className: "relative z-10 mt-5 w-full rounded-2xl border border-cyan-300/25 bg-cyan-300/5 p-4 text-center",
                    children: [m.jsx("div", {
                        className: "text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300",
                        children: "Permission required"
                    }), m.jsxs("div", {
                        className: "mt-2 text-sm text-white",
                        children: [aT[S.action], "?"]
                    }), m.jsxs("div", {
                        className: "mt-3 flex justify-center gap-2",
                        children: [m.jsx("button", {
                            onClick: O,
                            className: "rounded-full bg-cyan-300 px-5 py-2 text-xs font-black text-slate-950 transition hover:bg-white",
                            children: "Allow"
                        }), m.jsx("button", {
                            onClick: () => M(null),
                            className: "rounded-full border border-white/15 px-5 py-2 text-xs font-bold text-slate-300 transition hover:bg-white/10",
                            children: "Cancel"
                        })]
                    })]
                })]
            })]
        })
    },
    lT = ({
        rotateDepth: a = 7,
        translateDepth: l = 6,
        className: o = "",
        children: r
    }) => {
        const c = Y.useRef(null),
            h = po(0),
            f = po(0),
            p = Pp(h, {
                stiffness: 180,
                damping: 24
            }),
            g = Pp(f, {
                stiffness: 180,
                damping: 24
            }),
            y = Jn(g, [-.5, .5], [`-${a}deg`, `${a}deg`]),
            b = Jn(p, [-.5, .5], [`${a}deg`, `-${a}deg`]),
            x = Jn(p, [-.5, .5], [`-${l}px`, `${l}px`]),
            S = Jn(g, [-.5, .5], [`${l}px`, `-${l}px`]),
            M = Jn(p, [-.5, .5], [10, 90]),
            k = Jn(g, [-.5, .5], [10, 90]),
            U = I3 `radial-gradient(circle at ${M}% ${k}%, rgba(255,255,255,.42) 0%, rgba(6,182,212,.12) 24%, rgba(255,255,255,0) 68%)`,
            H = L => {
                if (!c.current) return;
                const Z = c.current.getBoundingClientRect();
                h.set((L.clientX - Z.left) / Z.width - .5), f.set((L.clientY - Z.top) / Z.height - .5)
            };
        return m.jsx("div", {
            className: `perspective-[1200px] transform-3d overflow-hidden rounded-full ${o}`,
            children: m.jsxs(Ct.div, {
                ref: c,
                onMouseMove: H,
                onMouseLeave: () => {
                    h.set(0), f.set(0)
                },
                style: {
                    rotateX: y,
                    rotateY: b,
                    translateX: x,
                    translateY: S,
                    transformStyle: "preserve-3d"
                },
                className: "relative h-full w-full rounded-full",
                children: [r, m.jsx(Ct.div, {
                    "aria-hidden": "true",
                    className: "pointer-events-none absolute inset-0 z-50 rounded-full mix-blend-overlay",
                    style: {
                        background: U,
                        opacity: .5
                    }
                })]
            })
        })
    };

function Oc(...a) {
    return a.filter(Boolean).join(" ")
}
const Vc = yo.forwardRef(({
    text: a = "Button",
    className: l,
    ...o
}, r) => m.jsxs("button", {
    ref: r,
    className: Oc("group relative inline-flex h-14 min-w-44 items-center justify-center gap-3 rounded-2xl border border-blue-600 bg-blue-600 px-6 font-semibold text-white shadow-[0_12px_32px_rgba(37,99,235,.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-[0_18px_42px_rgba(37,99,235,.28)] active:translate-y-0", l),
    ...o,
    children: [m.jsx("span", {
        children: a
    }), m.jsx(Bb, {
        size: 18,
        className: "transition-transform duration-300 group-hover:translate-x-1"
    })]
}));
Vc.displayName = "InteractiveHoverButton";

function sT({
    children: a,
    pauseOnHover: l = !1,
    direction: o = "left",
    speed: r = 30,
    className: c,
    ...h
}) {
    return m.jsx("div", {
        className: Oc("premium-marquee w-full overflow-hidden", c),
        ...h,
        children: m.jsx("div", {
            className: "relative mx-auto max-w-[96vw] overflow-hidden py-3",
            children: m.jsxs("div", {
                className: Oc("flex w-max items-center animate-marquee", l && "hover:[animation-play-state:paused]", o === "right" && "[animation-direction:reverse]"),
                style: {
                    "--duration": `${r}s`
                },
                children: [m.jsx("div", {
                    className: "flex items-center",
                    children: a
                }), m.jsx("div", {
                    className: "flex items-center",
                    "aria-hidden": "true",
                    children: a
                })]
            })
        })
    })
}
const oT = () => {
        const [a, l] = Y.useState(!1), [o, r] = Y.useState(!1), [c, h] = Y.useState(!1), [f, p] = Y.useState(!1), [g, y] = Y.useState("idle"), [b, x] = Y.useState({
            name: "",
            email: "",
            message: ""
        }), [S, M] = Y.useState("home"), [k, U] = Y.useState(0);
        Y.useEffect(() => {
            const q = () => l(window.scrollY > 50);
            return window.addEventListener("scroll", q), () => window.removeEventListener("scroll", q)
        }, []), Y.useEffect(() => {
            c ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
        }, [c]);
        const H = () => h(!c),
            L = () => p(!0),
            Z = q => {
                p(!1), O(q)
            },
            O = q => {
                M("home"), r(!1), setTimeout(() => {
                    const nt = document.getElementById(q);
                    nt && nt.scrollIntoView({
                        behavior: "smooth"
                    })
                }, 100)
            },
            G = () => {
                M("journey"), r(!1), window.scrollTo(0, 0)
            },
            Q = async q => {
                q.preventDefault(), y("sending");
                try {
                    if (!(await fetch("https://formsubmit.co/ajax/sg541914@gmail.com", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json"
                            },
                            body: JSON.stringify({
                                name: b.name,
                                email: b.email,
                                message: b.message,
                                _subject: `Portfolio message from ${b.name}`,
                                _replyto: b.email,
                                _captcha: "true"
                            })
                        })).ok) throw new Error("Form submission failed");
                    y("sent"), x({
                        name: "",
                        email: "",
                        message: ""
                    })
                } catch (nt) {
                    console.error("Contact form submission failed:", nt), y("error")
                }
            },
            $ = q => {
                U(q), M("blog"), window.scrollTo(0, 0)
            },
            J = () => {
                M("home"), window.scrollTo(0, 0)
            };
        return m.jsxs("div", {
            className: "min-h-screen bg-gradient-to-br from-indigo-50 via-slate-50 to-cyan-50 dark:bg-[#020617] text-slate-800 dark:text-slate-100 selection:bg-cyan-400 selection:text-white font-sans overflow-x-hidden transition-colors duration-500",
            children: [m.jsx("div", {
                className: "pointer-events-none fixed inset-0 z-0 opacity-[0.035] dark:opacity-[0.08] bg-[radial-gradient(circle_at_20%_10%,#2563eb_0,transparent_28%),radial-gradient(circle_at_80%_60%,#06b6d4_0,transparent_28%)]",
                "aria-hidden": "true"
            }), m.jsx("nav", {
                className: `fixed left-0 right-0 top-0 z-40 transition-all duration-500 ${a?"py-3":"py-5"}`,
                children: m.jsxs("div", {
                    className: "mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 md:px-6",
                    children: [m.jsx("button", {
                        type: "button",
                        onClick: () => O("top"),
                        className: "group justify-self-start inline-flex items-center rounded-full border border-slate-200/70 bg-white/75 px-4 py-2.5 shadow-sm backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-blue-400/60 hover:shadow-lg dark:border-slate-800/70 dark:bg-slate-950/75",
                        "aria-label": "Go to home",
                        children: m.jsxs("span", {
                            className: "font-bold tracking-tight text-slate-900 dark:text-white",
                            children: [m.jsx("span", {
                                className: "text-blue-600 dark:text-cyan-400",
                                children: "<\\>"
                            }), m.jsx("span", {
                                className: "ml-1",
                                children: "CodeWithSyed"
                            })]
                        })
                    }), m.jsxs("div", {
                        className: "hidden items-center gap-1 rounded-full border border-slate-200/70 bg-white/80 p-1.5 shadow-lg shadow-slate-900/5 backdrop-blur-xl md:flex dark:border-slate-800/70 dark:bg-slate-950/80",
                        children: [m.jsx("button", {
                            onClick: () => O("top"),
                            className: "nav-item rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-cyan-400",
                            children: "Home"
                        }), m.jsxs("div", {
                            className: "group relative",
                            children: [m.jsx("button", {
                                className: "nav-item rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-cyan-400",
                                children: "Explore"
                            }), m.jsx("div", {
                                className: "pointer-events-none absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100",
                                children: m.jsxs("div", {
                                    className: "rounded-2xl border border-slate-200/80 bg-white/95 p-2 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95",
                                    children: [m.jsx("button", {
                                        onClick: () => O("about"),
                                        className: "block w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-cyan-400",
                                        children: "About Me"
                                    }), m.jsx("button", {
                                        onClick: () => O("skills"),
                                        className: "block w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-cyan-400",
                                        children: "Technologies"
                                    }), m.jsx("button", {
                                        onClick: () => O("projects"),
                                        className: "block w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-cyan-400",
                                        children: "Projects"
                                    }), m.jsx("button", {
                                        onClick: () => O("blog"),
                                        className: "block w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-cyan-400",
                                        children: "Developer Notes"
                                    }), m.jsx("button", {
                                        onClick: G,
                                        className: "block w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-cyan-400",
                                        children: "My Journey"
                                    })]
                                })
                            })]
                        }), m.jsx("button", {
                            onClick: () => O("projects"),
                            className: "nav-item rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-cyan-400",
                            children: "Projects"
                        }), m.jsx("button", {
                            onClick: G,
                            className: "nav-item rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-cyan-400",
                            children: "Journey"
                        }), m.jsx("button", {
                            onClick: () => O("contact"),
                            className: "rounded-full bg-slate-900 px-5 py-2 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-blue-500/30 dark:bg-white dark:text-slate-900 dark:hover:bg-cyan-400",
                            children: "Connect"
                        })]
                    }), m.jsxs("div", {
                        className: "flex items-center justify-self-end gap-2",
                        children: [m.jsxs("a", {
                            href: "/resume.html",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "hidden items-center gap-2 rounded-full border border-blue-200/80 bg-white/75 px-4 py-2.5 text-xs font-black text-blue-700 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-500 dark:border-slate-800 dark:bg-slate-950/75 dark:text-cyan-400 sm:inline-flex",
                            "aria-label": "Open resume",
                            children: [m.jsx(ux, {
                                size: 15
                            }), " Resume"]
                        }), m.jsx("button", {
                            onClick: H,
                            className: "rounded-full border border-slate-200/70 bg-white/75 p-2.5 text-slate-700 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600 dark:border-slate-800/70 dark:bg-slate-950/75 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400",
                            "aria-label": "Toggle theme",
                            children: c ? m.jsx(Xx, {
                                size: 18
                            }) : m.jsx(kx, {
                                size: 18
                            })
                        }), m.jsx("button", {
                            className: "rounded-full border border-slate-200/70 bg-white/75 p-2.5 text-slate-900 shadow-sm backdrop-blur-xl transition md:hidden dark:border-slate-800/70 dark:bg-slate-950/75 dark:text-white",
                            onClick: () => r(!o),
                            "aria-label": "Toggle menu",
                            children: o ? m.jsx(uy, {
                                size: 20
                            }) : m.jsx(Ax, {
                                size: 20
                            })
                        })]
                    })]
                })
            }), m.jsxs(ac, {
                mode: "wait",
                children: [S === "home" && m.jsxs(Ct.main, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0,
                        x: -50
                    },
                    transition: {
                        duration: .5
                    },
                    children: [m.jsxs("header", {
                        id: "top",
                        className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent dark:bg-[#020617]",
                        children: [m.jsx(_m, {}), m.jsx("div", {
                            className: "absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-indigo-50/90 to-transparent dark:from-[#020617] dark:to-transparent pointer-events-none"
                        }), m.jsxs("div", {
                            className: "relative z-10 container mx-auto px-6 pt-24 pb-20 text-center",
                            children: [m.jsxs(Ct.div, {
                                initial: {
                                    opacity: 0,
                                    y: 18
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: .7
                                },
                                className: "mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/75 px-4 py-2 text-[11px] font-black uppercase tracking-[.2em] text-blue-600 shadow-lg shadow-blue-500/10 backdrop-blur-xl dark:border-cyan-400/20 dark:bg-slate-950/65 dark:text-cyan-400",
                                children: [m.jsx("span", {
                                    className: "h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,.8)] animate-pulse"
                                }), " Frontend Developer · Open to Opportunities"]
                            }), m.jsxs(Ct.div, {
                                initial: {
                                    opacity: 0,
                                    y: 26
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: .8,
                                    delay: .08
                                },
                                children: [m.jsxs("h1", {
                                    className: "text-6xl font-black tracking-[-0.055em] text-slate-950 dark:text-white sm:text-7xl md:text-8xl lg:text-[7.2rem]",
                                    children: ["Syed ", m.jsx("span", {
                                        className: "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-400 bg-clip-text text-transparent",
                                        children: "Eman"
                                    })]
                                }), m.jsx("div", {
                                    className: "mx-auto mt-5 h-px w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_16px_rgba(34,211,238,.6)]"
                                })]
                            }), m.jsxs(Ct.p, {
                                initial: {
                                    opacity: 0,
                                    y: 18
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: .8,
                                    delay: .2
                                },
                                className: "mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg",
                                children: ["I build clean, responsive interfaces with ", m.jsx("span", {
                                    className: "font-bold text-blue-600 dark:text-cyan-400",
                                    children: "React"
                                }), ", modern CSS and practical AI-assisted workflows — one real project at a time."]
                            }), m.jsxs(Ct.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: .8,
                                    delay: .32
                                },
                                className: "mt-9 flex flex-wrap justify-center gap-3",
                                children: [m.jsx(Vc, {
                                    text: "View Projects",
                                    onClick: () => O("projects")
                                }), m.jsx(Vc, {
                                    text: "Contact Me",
                                    onClick: () => O("contact"),
                                    className: "bg-blue-600 text-white border-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:text-white dark:border-blue-600 dark:hover:bg-blue-700"
                                }), m.jsxs("a", {
                                    href: "/resume.html",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "group inline-flex h-14 min-w-44 items-center justify-center gap-3 rounded-2xl border border-slate-300 bg-white/80 px-6 font-semibold text-slate-900 shadow-[0_12px_35px_rgba(15,23,42,.08)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-blue-700 hover:shadow-[0_18px_45px_rgba(6,182,212,.16)] dark:border-slate-700 dark:bg-slate-900/80 dark:text-white dark:hover:text-cyan-300",
                                    children: [m.jsx(Ib, {
                                        size: 18,
                                        className: "transition-transform duration-300 group-hover:-translate-y-0.5"
                                    }), " Resume"]
                                })]
                            }), m.jsx(Ct.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: .8,
                                    delay: .44
                                },
                                className: "mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-3 text-left",
                                children: [
                                    ["03+", "Real projects"],
                                    ["React", "Current focus"],
                                    ["AI + Web", "What I build"]
                                ].map(([q, nt]) => m.jsxs("div", {
                                    className: "rounded-2xl border border-white/70 bg-white/60 px-4 py-4 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/55",
                                    children: [m.jsx("div", {
                                        className: "text-lg font-black text-slate-900 dark:text-white",
                                        children: q
                                    }), m.jsx("div", {
                                        className: "mt-1 text-[10px] font-bold uppercase tracking-[.16em] text-slate-500 dark:text-slate-400",
                                        children: nt
                                    })]
                                }, nt))
                            }), m.jsxs(Ct.button, {
                                onClick: () => O("about"),
                                animate: {
                                    y: [0, 8, 0]
                                },
                                transition: {
                                    repeat: 1 / 0,
                                    duration: 2.2
                                },
                                className: "mx-auto mt-12 flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-slate-400 dark:text-slate-500",
                                "aria-label": "Scroll to about",
                                children: ["Explore ", m.jsx(Dm, {
                                    size: 16
                                })]
                            })]
                        })]
                    }), m.jsx("section", {
                        "aria-label": "Projects and technology logos",
                        className: "project-rail relative border-y border-slate-200/70 bg-white/70 py-4 backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-950/75",
                        children: m.jsx(sT, {
                            speed: 12,
                            direction: "right",
                            pauseOnHover: !0,
                            children: [{
                                src: "https://raw.githubusercontent.com/CodeWithSyed786/test/main/Icons/02d8ac344042438f03d4d6860475fddd.jpg",
                                alt: "Technology and social icon 1"
                            }, {
                                src: "https://raw.githubusercontent.com/CodeWithSyed786/test/main/Icons/176e07a5cd42bc0765062d16eea24c48.jpg",
                                alt: "Technology and social icon 2"
                            }, {
                                src: "https://raw.githubusercontent.com/CodeWithSyed786/test/main/Icons/1b515abfffdfd78f9f2fdb73d2b12226.jpg",
                                alt: "Technology and social icon 3"
                            }, {
                                src: "https://raw.githubusercontent.com/CodeWithSyed786/test/main/Icons/2176d0b83b7e7317fc8db2f64eab5f46.jpg",
                                alt: "Technology and social icon 4"
                            }, {
                                src: "https://raw.githubusercontent.com/CodeWithSyed786/test/main/Icons/24e78ee626aa80d6ff51a3b117dc1609.jpg",
                                alt: "Technology and social icon 5"
                            }, {
                                src: "https://raw.githubusercontent.com/CodeWithSyed786/test/main/Icons/2beb978648a6c369964817db87bebb30.jpg",
                                alt: "Technology and social icon 6"
                            }, {
                                src: "https://raw.githubusercontent.com/CodeWithSyed786/test/main/Icons/32972237ec8afd353a2b1ce7349d46a4.jpg",
                                alt: "Technology and social icon 7"
                            }, {
                                src: "https://raw.githubusercontent.com/CodeWithSyed786/test/main/Icons/3b5d653109a9b36198537eb57d1400ca.jpg",
                                alt: "Technology and social icon 8"
                            }, {
                                src: "https://raw.githubusercontent.com/CodeWithSyed786/test/main/Icons/43ad39a977665ece2f8066f61d8ded45.jpg",
                                alt: "Technology and social icon 9"
                            }, {
                                src: "https://raw.githubusercontent.com/CodeWithSyed786/test/main/Icons/521843744a6b97eb7083216a3c2e895b.jpg",
                                alt: "Technology and social icon 10"
                            }, {
                                src: "https://raw.githubusercontent.com/CodeWithSyed786/test/main/Icons/5f2951065f54f6a905274fd4003320ae.jpg",
                                alt: "Technology and social icon 11"
                            }, {
                                src: "https://raw.githubusercontent.com/CodeWithSyed786/test/main/Icons/63de5479e8eb4676570c49e2579cab01.jpg",
                                alt: "Technology and social icon 12"
                            }, {
                                src: "https://raw.githubusercontent.com/CodeWithSyed786/test/main/Icons/73ff18e01100e2fb408c1baa7640d519.jpg",
                                alt: "Technology and social icon 13"
                            }, {
                                src: "https://raw.githubusercontent.com/CodeWithSyed786/test/main/Icons/795ebb5f4a470cd7242136237f61fc53.jpg",
                                alt: "Technology and social icon 14"
                            }, {
                                src: "https://raw.githubusercontent.com/CodeWithSyed786/test/main/Icons/7a218c4415cdf102ec8e9612f17abfa4.jpg",
                                alt: "Technology and social icon 15"
                            }, {
                                src: "https://raw.githubusercontent.com/CodeWithSyed786/test/main/Icons/ae8d4529dd2751d973ea24d25313ab2f.jpg",
                                alt: "Technology and social icon 16"
                            }].map(q => m.jsx("div", {
                                className: "project-rail-item mx-2 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-2.5 shadow-sm dark:border-slate-800 dark:bg-slate-900",
                                title: q.alt,
                                children: m.jsx("img", {
                                    src: q.src,
                                    alt: q.alt,
                                    loading: "lazy",
                                    decoding: "async",
                                    className: "max-h-full max-w-full rounded-xl object-contain"
                                })
                            }, q.src))
                        })
                    }), m.jsx(Ct.section, {
                        id: "about",
                        className: "premium-section py-32 relative",
                        initial: {
                            opacity: 0,
                            y: 55
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0,
                            amount: .16
                        },
                        transition: {
                            duration: .75,
                            ease: "easeOut"
                        },
                        children: m.jsx("div", {
                            className: "container mx-auto px-6",
                            children: m.jsxs("div", {
                                className: "flex flex-col lg:flex-row items-center gap-16",
                                children: [m.jsx("div", {
                                    className: "lg:w-1/2 flex justify-center",
                                    children: m.jsxs("div", {
                                        className: "relative w-80 h-80 md:w-[450px] md:h-[450px] group",
                                        children: [m.jsx("div", {
                                            className: "absolute inset-[-12px] rounded-full border border-cyan-500/20"
                                        }), m.jsx(lT, {
                                            className: "absolute inset-0 z-10 h-full w-full",
                                            children: m.jsxs("div", {
                                                className: "relative w-full h-full rounded-full overflow-hidden border-[6px] border-white/40 dark:border-slate-800/60 shadow-[0_0_40px_rgba(79,70,229,0.3)] bg-slate-100 dark:bg-slate-900 flex items-center justify-center",
                                                children: [m.jsx("div", {
                                                    className: "absolute inset-0 bg-indigo-500/5 mix-blend-overlay z-10"
                                                }), m.jsx("img", {
                                                    src: "https://avatars.githubusercontent.com/u/235278155?v=4",
                                                    alt: "Syed Eman Ali Shah",
                                                    className: "w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 animate-fade-in"
                                                }), m.jsx("div", {
                                                    className: "absolute inset-x-10 top-1/2 h-px bg-cyan-400/20 z-20"
                                                })]
                                            })
                                        }), m.jsxs("div", {
                                            className: "absolute -right-6 top-20 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl border border-indigo-100 dark:border-cyan-500/30 z-30",
                                            children: ["                                                ", m.jsxs("span", {
                                                className: "text-sm font-bold text-indigo-600 dark:text-cyan-400 flex items-center gap-2",
                                                children: [m.jsx(Xb, {
                                                    size: 16
                                                }), " Frontend Developer"]
                                            })]
                                        }), m.jsx("div", {
                                            className: "absolute -left-6 bottom-20 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl border border-indigo-100 dark:border-indigo-500/30 z-30",
                                            children: m.jsxs("span", {
                                                className: "text-sm font-bold text-indigo-600 dark:text-cyan-400 flex items-center gap-2",
                                                children: [m.jsx(Fb, {
                                                    size: 16
                                                }), " React Developer"]
                                            })
                                        })]
                                    })
                                }), m.jsxs("div", {
                                    className: "lg:w-1/2",
                                    children: [m.jsxs("h2", {
                                        className: "text-4xl font-serif font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3",
                                        children: [m.jsx("span", {
                                            className: "w-12 h-1 bg-indigo-600 dark:bg-cyan-500"
                                        }), " About Me"]
                                    }), m.jsxs("p", {
                                        className: "text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6",
                                        children: ["I'm ", m.jsx("strong", {
                                            className: "text-indigo-600 dark:text-cyan-400 text-xl",
                                            children: "Syed Eman Ali Shah"
                                        }), ", an ", m.jsx("strong", {
                                            children: "18-year-old Computer Information Technology student"
                                        }), " focused on frontend development and modern web interfaces."]
                                    }), m.jsxs("p", {
                                        className: "text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6",
                                        children: ["I build responsive web interfaces with ", m.jsx("strong", {
                                            children: "HTML, CSS, JavaScript, React, and TypeScript"
                                        }), ". I’m improving my skills through real projects, practical debugging, and consistent practice."]
                                    }), m.jsxs("p", {
                                        className: "text-lg text-slate-600 dark:text-slate-300 leading-relaxed",
                                        children: ["My focus is simple: write clean code, create useful user experiences, and keep learning through real-world ", m.jsx("strong", {
                                            children: "web development"
                                        }), "."]
                                    })]
                                })]
                            })
                        })
                    }), m.jsx(Ct.section, {
                        id: "skills",
                        className: "premium-section py-28 relative bg-indigo-50/35 dark:bg-slate-950/45 transition-colors duration-500",
                        initial: {
                            opacity: 0,
                            y: 24
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0,
                            amount: .08
                        },
                        transition: {
                            duration: .6,
                            ease: "easeOut"
                        },
                        children: m.jsxs("div", {
                            className: "container mx-auto px-6 relative z-10",
                            children: [m.jsxs("div", {
                                className: "mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
                                children: [m.jsxs("div", {
                                    children: [m.jsx("p", {
                                        className: "mb-2 text-[10px] font-black uppercase tracking-[.24em] text-blue-600 dark:text-cyan-400",
                                        children: "Skills & Learning"
                                    }), m.jsx("h2", {
                                        className: "text-4xl font-serif font-bold text-slate-900 dark:text-white md:text-5xl",
                                        children: "Growing through practical work."
                                    }), m.jsx("p", {
                                        className: "mt-4 max-w-2xl text-slate-600 dark:text-slate-400",
                                        children: "A realistic snapshot of what I use today and what I’m actively improving."
                                    })]
                                }), m.jsxs("button", {
                                    onClick: G,
                                    className: "hidden items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-3 text-sm font-black text-blue-700 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-500 dark:border-slate-700 dark:bg-slate-900 dark:text-cyan-400 md:inline-flex",
                                    children: ["Open My Journey ", m.jsx(Ta, {
                                        size: 16
                                    })]
                                })]
                            }), m.jsxs("div", {
                                className: "grid gap-7 lg:grid-cols-[1.15fr_.85fr]",
                                children: [m.jsxs("div", {
                                    children: [m.jsx(Px, {}), m.jsxs("div", {
                                        className: "mt-6 rounded-3xl border border-slate-200 bg-white/65 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/55",
                                        children: [m.jsxs("div", {
                                            className: "mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[.18em] text-blue-600 dark:text-cyan-400",
                                            children: [m.jsx($b, {
                                                size: 15
                                            }), " Practical stack"]
                                        }), m.jsx("div", {
                                            className: "flex flex-wrap gap-2.5",
                                            children: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS", "GitHub", "Firebase", "C++", "AI Tools"].map(q => m.jsx("span", {
                                                className: "rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300 dark:hover:text-cyan-400",
                                                children: q
                                            }, q))
                                        })]
                                    })]
                                }), m.jsx(Ix, {
                                    onJourney: G
                                })]
                            })]
                        })
                    }), m.jsxs(Ct.section, {
                        id: "projects",
                        className: "premium-section py-32 relative overflow-hidden",
                        initial: {
                            opacity: 0,
                            scale: .97,
                            y: 35
                        },
                        whileInView: {
                            opacity: 1,
                            scale: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0,
                            amount: .1
                        },
                        transition: {
                            duration: .8,
                            ease: "easeOut"
                        },
                        children: [m.jsx("div", {
                            className: "absolute inset-0 opacity-20 dark:opacity-40",
                            children: m.jsx(Nb, {
                                isDark: c
                            })
                        }), m.jsxs("div", {
                            className: "container mx-auto px-6 relative z-10",
                            children: [m.jsxs("div", {
                                className: "text-center mb-16",
                                children: [m.jsx("h2", {
                                    className: "text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4",
                                    children: "Featured Projects"
                                }), m.jsx("p", {
                                    className: "text-slate-600 dark:text-slate-400 max-w-2xl mx-auto",
                                    children: "A few real projects I’ve built and worked on."
                                })]
                            }), m.jsx(e2, {})]
                        })]
                    }), m.jsx(Ct.section, {
                        id: "blog",
                        className: "premium-section py-32 bg-white/65 dark:bg-slate-900/45 transition-colors duration-500",
                        initial: {
                            opacity: 0,
                            y: 45
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0,
                            amount: .1
                        },
                        transition: {
                            duration: .7,
                            ease: "easeOut"
                        },
                        children: m.jsxs("div", {
                            className: "container mx-auto px-6",
                            children: [m.jsxs("div", {
                                className: "flex justify-between items-end mb-16",
                                children: [m.jsxs("div", {
                                    children: [m.jsx("h2", {
                                        className: "text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4",
                                        children: "Developer Notes"
                                    }), m.jsx("p", {
                                        className: "text-slate-600 dark:text-slate-400",
                                        children: "Short notes from my learning and development journey."
                                    })]
                                }), m.jsxs("button", {
                                    className: "hidden md:flex items-center gap-2 text-indigo-600 dark:text-cyan-400 font-bold hover:gap-4 transition-all",
                                    children: ["View Notes ", m.jsx(Dm, {
                                        className: "-rotate-90",
                                        size: 16
                                    })]
                                })]
                            }), m.jsx(n2, {
                                onRead: $
                            })]
                        })
                    }), m.jsxs(Ct.section, {
                        id: "contact",
                        className: "premium-section py-28 relative overflow-hidden",
                        initial: {
                            opacity: 0,
                            y: 22
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0,
                            amount: .08
                        },
                        transition: {
                            duration: .6,
                            ease: "easeOut"
                        },
                        children: [m.jsx("div", {
                            className: "absolute inset-0 bg-[radial-gradient(circle_at_15%_35%,rgba(37,99,235,.10),transparent_30%),radial-gradient(circle_at_85%_65%,rgba(6,182,212,.10),transparent_30%)]"
                        }), m.jsx("div", {
                            className: "container mx-auto px-6 relative z-10",
                            children: m.jsx("div", {
                                className: "premium-glass mx-auto max-w-5xl overflow-hidden rounded-[2.25rem] p-2 md:p-3",
                                children: m.jsxs("div", {
                                    className: "grid md:grid-cols-[.82fr_1.18fr]",
                                    children: [m.jsxs("div", {
                                        className: "relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white p-7 text-slate-900 shadow-sm md:p-9 dark:border-slate-800 dark:bg-slate-900 dark:text-white",
                                        children: [m.jsx("div", {
                                            className: "absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/12 blur-3xl"
                                        }), m.jsx("div", {
                                            className: "absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl"
                                        }), m.jsxs("div", {
                                            className: "relative",
                                            children: [m.jsxs("div", {
                                                className: "mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-2 text-[10px] font-black uppercase tracking-[.2em] text-blue-600 dark:border-cyan-400/20 dark:bg-cyan-400/5 dark:text-cyan-300",
                                                children: [m.jsx("span", {
                                                    className: "h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-500"
                                                }), " Open to conversations"]
                                            }), m.jsxs("h2", {
                                                className: "text-4xl font-black tracking-tight text-slate-900 dark:text-white md:text-5xl",
                                                children: ["Let’s ", m.jsx("span", {
                                                    className: "text-blue-600 dark:text-cyan-300",
                                                    children: "Connect."
                                                })]
                                            }), m.jsx("p", {
                                                className: "mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300",
                                                children: "Have a project, idea, freelance task, or developer opportunity? Send the details and I’ll get back to you."
                                            }), m.jsxs("div", {
                                                className: "mt-9 space-y-4",
                                                children: [m.jsxs("a", {
                                                    href: "mailto:sg541914@gmail.com",
                                                    className: "contact-line contact-line-light",
                                                    children: [m.jsx("span", {
                                                        className: "contact-icon",
                                                        children: m.jsx(xx, {
                                                            size: 17
                                                        })
                                                    }), m.jsxs("span", {
                                                        children: [m.jsx("small", {
                                                            children: "Email"
                                                        }), m.jsx("b", {
                                                            children: "sg541914@gmail.com"
                                                        })]
                                                    })]
                                                }), m.jsxs("a", {
                                                    href: "https://github.com/CodeWithSyed786",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "contact-line",
                                                    children: [m.jsx("span", {
                                                        className: "contact-icon",
                                                        children: m.jsx(to, {
                                                            size: 17
                                                        })
                                                    }), m.jsxs("span", {
                                                        children: [m.jsx("small", {
                                                            children: "GitHub"
                                                        }), m.jsx("b", {
                                                            children: "CodeWithSyed786"
                                                        })]
                                                    })]
                                                }), m.jsxs("a", {
                                                    href: "https://wa.me/923416130231",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "contact-line",
                                                    children: [m.jsx("span", {
                                                        className: "contact-icon",
                                                        children: m.jsx(jx, {
                                                            size: 17
                                                        })
                                                    }), m.jsxs("span", {
                                                        children: [m.jsx("small", {
                                                            children: "WhatsApp"
                                                        }), m.jsx("b", {
                                                            children: "+92 341 6130231"
                                                        })]
                                                    })]
                                                })]
                                            })]
                                        })]
                                    }), m.jsxs("form", {
                                        className: "relative space-y-4 p-5 md:p-8",
                                        onSubmit: Q,
                                        children: [m.jsxs("div", {
                                            className: "mb-2",
                                            children: [m.jsx("p", {
                                                className: "text-xs font-black uppercase tracking-[.2em] text-blue-600 dark:text-cyan-400",
                                                children: "Start a conversation"
                                            }), m.jsx("h3", {
                                                className: "mt-1 text-2xl font-black text-slate-900 dark:text-white",
                                                children: "Tell me what you’re building."
                                            })]
                                        }), m.jsxs("label", {
                                            className: "contact-field",
                                            children: [m.jsx("span", {
                                                children: "Name"
                                            }), m.jsx("input", {
                                                required: !0,
                                                type: "text",
                                                value: b.name,
                                                onChange: q => x({ ...b,
                                                    name: q.target.value
                                                }),
                                                placeholder: "Your name"
                                            })]
                                        }), m.jsxs("label", {
                                            className: "contact-field",
                                            children: [m.jsx("span", {
                                                children: "Email"
                                            }), m.jsx("input", {
                                                required: !0,
                                                type: "email",
                                                value: b.email,
                                                onChange: q => x({ ...b,
                                                    email: q.target.value
                                                }),
                                                placeholder: "you@example.com"
                                            })]
                                        }), m.jsxs("label", {
                                            className: "contact-field",
                                            children: [m.jsx("span", {
                                                children: "Message"
                                            }), m.jsx("textarea", {
                                                required: !0,
                                                rows: 5,
                                                value: b.message,
                                                onChange: q => x({ ...b,
                                                    message: q.target.value
                                                }),
                                                placeholder: "Tell me about the project or opportunity..."
                                            })]
                                        }), m.jsxs("button", {
                                            type: "submit",
                                            className: "contact-submit group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-blue-600 py-4 font-black text-white shadow-[0_14px_35px_rgba(37,99,235,.20)] transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-[0_18px_45px_rgba(37,99,235,.28)]",
                                            children: [g === "sent" ? m.jsx(Zb, {
                                                size: 18
                                            }) : m.jsx(Lx, {
                                                size: 18,
                                                className: "transition group-hover:translate-x-1 group-hover:-translate-y-1"
                                            }), m.jsx("span", {
                                                children: g === "sending" ? "Sending..." : g === "sent" ? "Message Sent" : g === "error" ? "Try Again" : "Send Message"
                                            })]
                                        }), m.jsx("p", {
                                            className: "text-center text-[11px] text-slate-400",
                                            children: g === "error" ? "Could not send the message. Please try again." : "Your message is securely forwarded to my email. No email app is required."
                                        })]
                                    })]
                                })
                            })
                        })]
                    }), m.jsxs("section", {
                        className: "premium-section py-24 bg-gradient-to-br from-indigo-50/80 via-white/80 to-cyan-50/80 dark:from-slate-900/70 dark:via-slate-950 dark:to-slate-900/70 transition-colors duration-500 relative overflow-hidden",
                        children: [m.jsxs("div", {
                            className: "absolute inset-0 opacity-10 dark:opacity-5",
                            children: [m.jsx("div", {
                                className: "absolute top-10 right-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
                            }), m.jsx("div", {
                                className: "absolute bottom-10 left-20 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
                            })]
                        }), m.jsx("div", {
                            className: "container mx-auto px-6 relative z-10",
                            children: m.jsxs("div", {
                                className: "max-w-2xl mx-auto text-center",
                                children: [m.jsxs(Ct.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: !0
                                    },
                                    transition: {
                                        duration: .8
                                    },
                                    className: "mb-8",
                                    children: [m.jsxs("div", {
                                        className: "inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-full border border-slate-200 dark:border-slate-700 mb-6",
                                        children: [m.jsx("span", {
                                            className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                                        }), m.jsx("span", {
                                            className: "text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest",
                                            children: "Frontend Developer"
                                        })]
                                    }), m.jsxs("h2", {
                                        className: "text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6 leading-tight",
                                        children: ["Let's Build Something ", m.jsx("span", {
                                            className: "bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent",
                                            children: "Great"
                                        })]
                                    }), m.jsx("p", {
                                        className: "text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed",
                                        children: "I’m Syed Eman Ali Shah, a frontend developer focused on React, responsive design, and clean user experiences. Let’s build something useful together."
                                    })]
                                }), m.jsxs(Ct.div, {
                                    initial: {
                                        opacity: 0,
                                        scale: .9
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    viewport: {
                                        once: !0
                                    },
                                    transition: {
                                        duration: .8,
                                        delay: .2
                                    },
                                    className: "flex flex-col sm:flex-row justify-center gap-4 mb-12",
                                    children: [m.jsxs("button", {
                                        onClick: () => O("contact"),
                                        className: "clean-blue-cta w-52",
                                        children: [m.jsx("span", {
                                            children: "Collaborate"
                                        }), m.jsx(Ta, {
                                            size: 17
                                        })]
                                    }), m.jsxs("a", {
                                        href: "https://github.com/CodeWithSyed786",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "clean-blue-cta w-52",
                                        "aria-label": "View GitHub profile",
                                        children: [m.jsx("span", {
                                            children: "View GitHub"
                                        }), m.jsx(to, {
                                            size: 17
                                        })]
                                    })]
                                }), "                                    ", m.jsxs(Ct.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: !0
                                    },
                                    transition: {
                                        duration: .8,
                                        delay: .4
                                    },
                                    className: "grid grid-cols-3 gap-4 md:gap-8 mb-8",
                                    children: [m.jsxs("div", {
                                        className: "p-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-xl border border-slate-200 dark:border-slate-700",
                                        children: [m.jsx("p", {
                                            className: "text-2xl md:text-3xl font-bold text-indigo-600 dark:text-cyan-400 mb-1",
                                            children: "3+"
                                        }), m.jsx("p", {
                                            className: "text-xs text-slate-600 dark:text-slate-400 uppercase tracking-widest font-bold",
                                            children: "Real Projects"
                                        })]
                                    }), m.jsxs("div", {
                                        className: "p-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-xl border border-slate-200 dark:border-slate-700",
                                        children: [m.jsx("p", {
                                            className: "text-2xl md:text-3xl font-bold text-indigo-600 dark:text-cyan-400 mb-1",
                                            children: "3"
                                        }), m.jsx("p", {
                                            className: "text-xs text-slate-600 dark:text-slate-400 uppercase tracking-widest font-bold",
                                            children: "Developer Notes"
                                        })]
                                    }), m.jsxs("div", {
                                        className: "p-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-xl border border-slate-200 dark:border-slate-700",
                                        children: [m.jsx("p", {
                                            className: "text-2xl md:text-3xl font-bold text-indigo-600 dark:text-cyan-400 mb-1",
                                            children: "∞"
                                        }), m.jsx("p", {
                                            className: "text-xs text-slate-600 dark:text-slate-400 uppercase tracking-widest font-bold",
                                            children: "Always Learning"
                                        })]
                                    })]
                                }), m.jsx(Ct.p, {
                                    initial: {
                                        opacity: 0
                                    },
                                    whileInView: {
                                        opacity: 1
                                    },
                                    viewport: {
                                        once: !0
                                    },
                                    transition: {
                                        duration: .8,
                                        delay: .6
                                    },
                                    className: "text-sm text-slate-500 dark:text-slate-400 italic",
                                    children: `"The best way to predict the future is to invent it." – Let's innovate together.`
                                })]
                            })
                        })]
                    }), m.jsx("footer", {
                        className: "relative z-10 border-t border-slate-200 bg-white/90 transition-colors duration-500 dark:border-slate-900 dark:bg-slate-950",
                        children: m.jsxs("div", {
                            className: "container mx-auto px-6 py-14",
                            children: [m.jsxs("div", {
                                className: "grid gap-10 md:grid-cols-4",
                                children: [m.jsxs("div", {
                                    className: "md:col-span-2",
                                    children: [m.jsxs("div", {
                                        className: "mb-4 text-2xl font-bold text-slate-900 dark:text-white",
                                        children: [m.jsx("span", {
                                            className: "text-blue-600 dark:text-cyan-400",
                                            children: "<\\>"
                                        }), m.jsx("span", {
                                            className: "ml-1",
                                            children: "CodeWithSyed"
                                        })]
                                    }), m.jsx("p", {
                                        className: "max-w-md text-sm leading-6 text-slate-600 dark:text-slate-400",
                                        children: "Frontend Developer building clean, responsive interfaces with React and modern web technologies — learning by building real projects."
                                    }), m.jsxs("div", {
                                        className: "mt-6 flex gap-3",
                                        children: [m.jsx("a", {
                                            href: "https://github.com/CodeWithSyed786",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            "aria-label": "GitHub",
                                            className: "rounded-full border border-slate-200 p-3 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-800 dark:hover:border-cyan-400 dark:hover:text-cyan-400",
                                            children: m.jsx(to, {
                                                size: 18
                                            })
                                        }), m.jsx("a", {
                                            href: "https://www.linkedin.com/in/CodeWithSyed786",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            "aria-label": "LinkedIn",
                                            className: "rounded-full border border-slate-200 p-3 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-800 dark:hover:border-cyan-400 dark:hover:text-cyan-400",
                                            children: m.jsx(vx, {
                                                size: 18
                                            })
                                        }), m.jsx("a", {
                                            href: "https://www.facebook.com/CodeWithSyed786",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            "aria-label": "Facebook",
                                            className: "rounded-full border border-slate-200 p-3 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-800 dark:hover:border-cyan-400 dark:hover:text-cyan-400",
                                            children: m.jsx(lx, {
                                                size: 18
                                            })
                                        }), m.jsx("a", {
                                            href: "https://www.instagram.com/CodeWithSyed786",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            "aria-label": "Instagram",
                                            className: "rounded-full border border-slate-200 p-3 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-800 dark:hover:border-cyan-400 dark:hover:text-cyan-400",
                                            children: m.jsx(mx, {
                                                size: 18
                                            })
                                        }), m.jsx("a", {
                                            href: "https://www.youtube.com/@CodeWithSyed786",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            "aria-label": "YouTube",
                                            className: "rounded-full border border-slate-200 p-3 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-800 dark:hover:border-cyan-400 dark:hover:text-cyan-400",
                                            children: m.jsx("span", {
                                                className: "text-xs font-black",
                                                children: "YT"
                                            })
                                        })]
                                    })]
                                }), m.jsxs("div", {
                                    children: [m.jsx("h3", {
                                        className: "mb-4 font-bold text-slate-900 dark:text-white",
                                        children: "Quick Links"
                                    }), m.jsxs("div", {
                                        className: "space-y-3 text-sm text-slate-600 dark:text-slate-400",
                                        children: [m.jsx("button", {
                                            onClick: () => O("top"),
                                            className: "block hover:text-indigo-600 dark:hover:text-cyan-400",
                                            children: "Home"
                                        }), m.jsx("button", {
                                            onClick: () => O("about"),
                                            className: "block hover:text-indigo-600 dark:hover:text-cyan-400",
                                            children: "About Me"
                                        }), m.jsx("button", {
                                            onClick: () => O("skills"),
                                            className: "block hover:text-indigo-600 dark:hover:text-cyan-400",
                                            children: "Technologies"
                                        }), m.jsx("button", {
                                            onClick: () => O("projects"),
                                            className: "block hover:text-indigo-600 dark:hover:text-cyan-400",
                                            children: "Projects"
                                        }), m.jsx("button", {
                                            onClick: () => O("contact"),
                                            className: "block hover:text-indigo-600 dark:hover:text-cyan-400",
                                            children: "Contact"
                                        }), m.jsx("a", {
                                            href: "/resume.html",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "block hover:text-indigo-600 dark:hover:text-cyan-400",
                                            children: "Resume"
                                        })]
                                    })]
                                }), m.jsxs("div", {
                                    children: [m.jsx("h3", {
                                        className: "mb-4 font-bold text-slate-900 dark:text-white",
                                        children: "Technologies"
                                    }), m.jsx("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: ["React", "TypeScript", "JavaScript", "CSS", "C++", "GitHub", "Firebase", "n8n"].map(q => m.jsx("span", {
                                            className: "rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:bg-slate-900 dark:text-slate-400",
                                            children: q
                                        }, q))
                                    })]
                                })]
                            }), m.jsxs("div", {
                                className: "mt-10 flex flex-col justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-900 dark:text-slate-500 sm:flex-row",
                                children: [m.jsx("p", {
                                    children: "© 2026 Syed Eman Ali Shah. All rights reserved."
                                }), m.jsx("p", {
                                    children: "Frontend Developer • Building & Learning."
                                })]
                            })]
                        })
                    })]
                }, "home"), S === "journey" && m.jsx(Ct.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: .35
                    },
                    className: "min-h-screen bg-slate-50 dark:bg-[#020617]",
                    children: m.jsxs("div", {
                        className: "relative overflow-hidden pt-32 pb-24",
                        children: [m.jsx(_m, {}), m.jsx("div", {
                            className: "absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-blue-500/10 to-transparent"
                        }), m.jsxs("div", {
                            className: "container relative mx-auto px-6",
                            children: [m.jsxs("button", {
                                onClick: J,
                                className: "mb-10 flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:-translate-x-1 hover:text-blue-600 dark:text-slate-400 dark:hover:text-cyan-400",
                                children: [m.jsx(Uc, {
                                    size: 17
                                }), " Back home"]
                            }), m.jsxs("div", {
                                className: "mx-auto max-w-4xl text-center",
                                children: [m.jsxs("div", {
                                    className: "mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-2 text-[10px] font-black uppercase tracking-[.22em] text-blue-600 backdrop-blur dark:border-cyan-400/20 dark:bg-slate-950/60 dark:text-cyan-400",
                                    children: [m.jsx(sy, {
                                        size: 13
                                    }), " Developer Journey"]
                                }), m.jsxs("h1", {
                                    className: "text-5xl font-black tracking-tight text-slate-950 dark:text-white md:text-7xl",
                                    children: ["From learning ", m.jsx("span", {
                                        className: "gradient-text",
                                        children: "to building."
                                    })]
                                }), m.jsx("p", {
                                    className: "mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400",
                                    children: "A separate timeline of my education, extra learning, real projects, and current frontend focus."
                                })]
                            }), m.jsx("div", {
                                className: "mx-auto mt-16 max-w-5xl",
                                children: m.jsx(t2, {})
                            }), m.jsx("div", {
                                className: "mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3",
                                children: [
                                    ["Education", "DAE Computer Information Technology", "Programming · Web Development · Networks"],
                                    ["Extra learning", "MS Office course", "Practical office productivity skills"],
                                    ["Current focus", "React · JavaScript · TypeScript", "Responsive UI · Real projects"]
                                ].map(([q, nt, At]) => m.jsxs("div", {
                                    className: "group premium-glass rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50",
                                    children: [m.jsx("div", {
                                        className: "text-xs font-black uppercase tracking-[.18em] text-blue-600 dark:text-cyan-400",
                                        children: q
                                    }), m.jsx("div", {
                                        className: "mt-3 font-bold text-slate-900 dark:text-white",
                                        children: nt
                                    }), m.jsx("div", {
                                        className: "mt-2 text-sm text-slate-500 dark:text-slate-400",
                                        children: At
                                    })]
                                }, q))
                            })]
                        })]
                    })
                }, "journey"), "                ", S === "protocol" && m.jsx(Ct.div, {
                    initial: {
                        opacity: 0,
                        x: 50
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    exit: {
                        opacity: 0,
                        x: 50
                    },
                    transition: {
                        duration: .5
                    },
                    className: "bg-slate-50 dark:bg-[#020617] min-h-screen",
                    children: m.jsx(a2, {
                        projectId: k,
                        onBack: J
                    })
                }, "protocol"), S === "blog" && m.jsx(Ct.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: 50
                    },
                    transition: {
                        duration: .5
                    },
                    className: "bg-slate-50 dark:bg-[#020617] min-h-screen",
                    children: m.jsx(i2, {
                        blogId: k,
                        onBack: J
                    })
                }, "blog")]
            }), m.jsx(ac, {
                children: f && m.jsx(iT, {
                    onClose: () => p(!1),
                    onNavigate: Z
                })
            }), !f && m.jsxs(Ct.button, {
                type: "button",
                onClick: L,
                initial: {
                    opacity: 0,
                    scale: .8,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    scale: 1,
                    y: 0
                },
                whileHover: {
                    scale: 1.06
                },
                whileTap: {
                    scale: .94
                },
                className: "group fixed bottom-6 right-5 z-50 h-[72px] w-[72px] rounded-[24px] border border-cyan-300/40 bg-slate-950/95 shadow-[0_12px_45px_rgba(6,182,212,.28)] backdrop-blur-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:right-6",
                "aria-label": "Open JARVIS AI assistant",
                title: "Talk to JARVIS",
                children: [m.jsx("span", {
                    className: "absolute inset-2 rounded-[18px] border border-cyan-400/20"
                }), m.jsx("span", {
                    className: "absolute left-1/2 top-2 h-1 w-9 -translate-x-1/2 rounded-full bg-cyan-300/70 shadow-[0_0_14px_rgba(34,211,238,.9)] animate-pulse"
                }), m.jsx("span", {
                    className: "absolute left-[19px] top-[25px] h-3.5 w-3.5 rounded-full bg-cyan-200 shadow-[0_0_13px_rgba(34,211,238,1)] transition group-hover:shadow-[0_0_20px_rgba(34,211,238,1)]"
                }), m.jsx("span", {
                    className: "absolute right-[19px] top-[25px] h-3.5 w-3.5 rounded-full bg-cyan-200 shadow-[0_0_13px_rgba(34,211,238,1)] transition group-hover:shadow-[0_0_20px_rgba(34,211,238,1)]"
                }), m.jsx("span", {
                    className: "absolute left-1/2 top-[48px] h-1.5 w-8 -translate-x-1/2 rounded-full bg-cyan-400/60 shadow-[0_0_10px_rgba(34,211,238,.65)]"
                }), m.jsx("span", {
                    className: "absolute -right-1 -top-1 h-4 w-4 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,.95)]"
                }), m.jsx("span", {
                    className: "absolute -right-5 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-cyan-400/20 bg-slate-950 px-3 py-1.5 text-[10px] font-black tracking-[.16em] text-cyan-300 shadow-xl group-hover:block",
                    children: "TALK TO JARVIS"
                })]
            }), m.jsx(ac, {
                children: o && m.jsxs(Ct.div, {
                    initial: {
                        opacity: 0,
                        x: "100%"
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    exit: {
                        opacity: 0,
                        x: "100%"
                    },
                    transition: {
                        type: "spring",
                        damping: 25,
                        stiffness: 200
                    },
                    className: "fixed inset-0 z-30 bg-white dark:bg-slate-950 flex flex-col justify-center items-center gap-8 md:hidden",
                    children: [m.jsx("button", {
                        onClick: () => O("about"),
                        className: "text-2xl font-bold text-slate-800 dark:text-white",
                        children: "ABOUT"
                    }), m.jsx("button", {
                        onClick: () => O("skills"),
                        className: "text-2xl font-bold text-slate-800 dark:text-white",
                        children: "SKILLS"
                    }), m.jsx("button", {
                        onClick: () => O("projects"),
                        className: "text-2xl font-bold text-slate-800 dark:text-white",
                        children: "PROJECTS"
                    }), m.jsx("button", {
                        onClick: () => O("blog"),
                        className: "text-2xl font-bold text-slate-800 dark:text-white",
                        children: "NOTES"
                    }), m.jsx("button", {
                        onClick: G,
                        className: "text-2xl font-bold text-slate-800 dark:text-white",
                        children: "JOURNEY"
                    }), m.jsx("a", {
                        href: "/resume.html",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "text-2xl font-bold text-blue-600 dark:text-cyan-400",
                        children: "RESUME"
                    }), m.jsx("button", {
                        onClick: () => O("contact"),
                        className: "text-2xl font-bold text-indigo-600 dark:text-cyan-400",
                        children: "CONNECT"
                    })]
                })
            })]
        })
    },
    Kg = document.getElementById("root");
if (!Kg) throw new Error("Could not find root element to mount to");
const rT = Eb.createRoot(Kg);
rT.render(m.jsx(yo.StrictMode, {
    children: m.jsx(oT, {})
}));