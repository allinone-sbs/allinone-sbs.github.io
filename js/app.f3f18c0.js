!function(t) {
    var e = {};
    function n(i) {
        if (e[i])
            return e[i].exports;
        var o = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var i = Object.create(null);
        if (n.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var o in t)
                n.d(i, o, function(e) {
                    return t[e]
                }
                .bind(null, o));
        return i
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "",
    n(n.s = 35)
}([function(t, e) {
    t.exports = function(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }
}
, function(t, e) {
    t.exports = function(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
}
, function(t, e) {
    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    t.exports = function(t, e, i) {
        return e && n(t.prototype, e),
        i && n(t, i),
        t
    }
}
, function(t, e, n) {
    t.exports = n(10)
}
, function(t, e, n) {
    var i = n(19)
      , o = n(20)
      , s = n(21);
    t.exports = function(t) {
        return i(t) || o(t) || s()
    }
}
, function(t, e) {
    function n(t, e, n, i, o, s, a) {
        try {
            var r = t[s](a)
              , l = r.value
        } catch (t) {
            return void n(t)
        }
        r.done ? e(l) : Promise.resolve(l).then(i, o)
    }
    t.exports = function(t) {
        return function() {
            var e = this
              , i = arguments;
            return new Promise(function(o, s) {
                var a = t.apply(e, i);
                function r(t) {
                    n(a, o, s, r, l, "next", t)
                }
                function l(t) {
                    n(a, o, s, r, l, "throw", t)
                }
                r(void 0)
            }
            )
        }
    }
}
, function(t, e, n) {
    var i = n(16)
      , o = n(17)
      , s = n(18);
    t.exports = function(t, e) {
        return i(t) || o(t, e) || s()
    }
}
, function(t, e, n) {
    var i, o, s = {}, a = (i = function() {
        return window && document && document.all && !window.atob
    }
    ,
    function() {
        return void 0 === o && (o = i.apply(this, arguments)),
        o
    }
    ), r = function(t) {
        var e = {};
        return function(t, n) {
            if ("function" == typeof t)
                return t();
            if (void 0 === e[t]) {
                var i = function(t, e) {
                    return e ? e.querySelector(t) : document.querySelector(t)
                }
                .call(this, t, n);
                if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement)
                    try {
                        i = i.contentDocument.head
                    } catch (t) {
                        i = null
                    }
                e[t] = i
            }
            return e[t]
        }
    }(), l = null, u = 0, c = [], h = n(15);
    function d(t, e) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n]
              , o = s[i.id];
            if (o) {
                o.refs++;
                for (var a = 0; a < o.parts.length; a++)
                    o.parts[a](i.parts[a]);
                for (; a < i.parts.length; a++)
                    o.parts.push(y(i.parts[a], e))
            } else {
                var r = [];
                for (a = 0; a < i.parts.length; a++)
                    r.push(y(i.parts[a], e));
                s[i.id] = {
                    id: i.id,
                    refs: 1,
                    parts: r
                }
            }
        }
    }
    function p(t, e) {
        for (var n = [], i = {}, o = 0; o < t.length; o++) {
            var s = t[o]
              , a = e.base ? s[0] + e.base : s[0]
              , r = {
                css: s[1],
                media: s[2],
                sourceMap: s[3]
            };
            i[a] ? i[a].parts.push(r) : n.push(i[a] = {
                id: a,
                parts: [r]
            })
        }
        return n
    }
    function f(t, e) {
        var n = r(t.insertInto);
        if (!n)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var i = c[c.length - 1];
        if ("top" === t.insertAt)
            i ? i.nextSibling ? n.insertBefore(e, i.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild),
            c.push(e);
        else if ("bottom" === t.insertAt)
            n.appendChild(e);
        else {
            if ("object" != typeof t.insertAt || !t.insertAt.before)
                throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var o = r(t.insertAt.before, n);
            n.insertBefore(e, o)
        }
    }
    function v(t) {
        if (null === t.parentNode)
            return !1;
        t.parentNode.removeChild(t);
        var e = c.indexOf(t);
        e >= 0 && c.splice(e, 1)
    }
    function g(t) {
        var e = document.createElement("style");
        if (void 0 === t.attrs.type && (t.attrs.type = "text/css"),
        void 0 === t.attrs.nonce) {
            var i = function() {
                0;
                return n.nc
            }();
            i && (t.attrs.nonce = i)
        }
        return m(e, t.attrs),
        f(t, e),
        e
    }
    function m(t, e) {
        Object.keys(e).forEach(function(n) {
            t.setAttribute(n, e[n])
        })
    }
    function y(t, e) {
        var n, i, o, s;
        if (e.transform && t.css) {
            if (!(s = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css)))
                return function() {}
                ;
            t.css = s
        }
        if (e.singleton) {
            var a = u++;
            n = l || (l = g(e)),
            i = k.bind(null, n, a, !1),
            o = k.bind(null, n, a, !0)
        } else
            t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(t) {
                var e = document.createElement("link");
                return void 0 === t.attrs.type && (t.attrs.type = "text/css"),
                t.attrs.rel = "stylesheet",
                m(e, t.attrs),
                f(t, e),
                e
            }(e),
            i = function(t, e, n) {
                var i = n.css
                  , o = n.sourceMap
                  , s = void 0 === e.convertToAbsoluteUrls && o;
                (e.convertToAbsoluteUrls || s) && (i = h(i));
                o && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                var a = new Blob([i],{
                    type: "text/css"
                })
                  , r = t.href;
                t.href = URL.createObjectURL(a),
                r && URL.revokeObjectURL(r)
            }
            .bind(null, n, e),
            o = function() {
                v(n),
                n.href && URL.revokeObjectURL(n.href)
            }
            ) : (n = g(e),
            i = function(t, e) {
                var n = e.css
                  , i = e.media;
                i && t.setAttribute("media", i);
                if (t.styleSheet)
                    t.styleSheet.cssText = n;
                else {
                    for (; t.firstChild; )
                        t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(n))
                }
            }
            .bind(null, n),
            o = function() {
                v(n)
            }
            );
        return i(t),
        function(e) {
            if (e) {
                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)
                    return;
                i(t = e)
            } else
                o()
        }
    }
    t.exports = function(t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
            throw new Error("The style-loader cannot be used in a non-browser environment");
        (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {},
        e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()),
        e.insertInto || (e.insertInto = "head"),
        e.insertAt || (e.insertAt = "bottom");
        var n = p(t, e);
        return d(n, e),
        function(t) {
            for (var i = [], o = 0; o < n.length; o++) {
                var a = n[o];
                (r = s[a.id]).refs--,
                i.push(r)
            }
            t && d(p(t, e), e);
            for (o = 0; o < i.length; o++) {
                var r;
                if (0 === (r = i[o]).refs) {
                    for (var l = 0; l < r.parts.length; l++)
                        r.parts[l]();
                    delete s[r.id]
                }
            }
        }
    }
    ;
    var _, b = (_ = [],
    function(t, e) {
        return _[t] = e,
        _.filter(Boolean).join("\n")
    }
    );
    function k(t, e, n, i) {
        var o = n ? "" : i.css;
        if (t.styleSheet)
            t.styleSheet.cssText = b(e, o);
        else {
            var s = document.createTextNode(o)
              , a = t.childNodes;
            a[e] && t.removeChild(a[e]),
            a.length ? t.insertBefore(s, a[e]) : t.appendChild(s)
        }
    }
}
, function(t, e, n) {
    var i = n(22).default;
    t.exports = i,
    t.exports.default = i
}
, function(t, e, n) {
    var i = n(31);
    t.exports = function(t, e) {
        if (null == t)
            return {};
        var n, o, s = i(t, e);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(t);
            for (o = 0; o < a.length; o++)
                n = a[o],
                e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n])
        }
        return s
    }
}
, function(t, e, n) {
    var i = function(t) {
        "use strict";
        var e, n = Object.prototype, i = n.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, s = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", r = o.toStringTag || "@@toStringTag";
        function l(t, e, n, i) {
            var o = e && e.prototype instanceof v ? e : v
              , s = Object.create(o.prototype)
              , a = new O(i || []);
            return s._invoke = function(t, e, n) {
                var i = c;
                return function(o, s) {
                    if (i === d)
                        throw new Error("Generator is already running");
                    if (i === p) {
                        if ("throw" === o)
                            throw s;
                        return S()
                    }
                    for (n.method = o,
                    n.arg = s; ; ) {
                        var a = n.delegate;
                        if (a) {
                            var r = E(a, n);
                            if (r) {
                                if (r === f)
                                    continue;
                                return r
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (i === c)
                                throw i = p,
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        i = d;
                        var l = u(t, e, n);
                        if ("normal" === l.type) {
                            if (i = n.done ? p : h,
                            l.arg === f)
                                continue;
                            return {
                                value: l.arg,
                                done: n.done
                            }
                        }
                        "throw" === l.type && (i = p,
                        n.method = "throw",
                        n.arg = l.arg)
                    }
                }
            }(t, n, a),
            s
        }
        function u(t, e, n) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, n)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }
        t.wrap = l;
        var c = "suspendedStart"
          , h = "suspendedYield"
          , d = "executing"
          , p = "completed"
          , f = {};
        function v() {}
        function g() {}
        function m() {}
        var y = {};
        y[s] = function() {
            return this
        }
        ;
        var _ = Object.getPrototypeOf
          , b = _ && _(_(L([])));
        b && b !== n && i.call(b, s) && (y = b);
        var k = m.prototype = v.prototype = Object.create(y);
        function w(t) {
            ["next", "throw", "return"].forEach(function(e) {
                t[e] = function(t) {
                    return this._invoke(e, t)
                }
            })
        }
        function C(t) {
            var e;
            this._invoke = function(n, o) {
                function s() {
                    return new Promise(function(e, s) {
                        !function e(n, o, s, a) {
                            var r = u(t[n], t, o);
                            if ("throw" !== r.type) {
                                var l = r.arg
                                  , c = l.value;
                                return c && "object" == typeof c && i.call(c, "__await") ? Promise.resolve(c.__await).then(function(t) {
                                    e("next", t, s, a)
                                }, function(t) {
                                    e("throw", t, s, a)
                                }) : Promise.resolve(c).then(function(t) {
                                    l.value = t,
                                    s(l)
                                }, function(t) {
                                    return e("throw", t, s, a)
                                })
                            }
                            a(r.arg)
                        }(n, o, e, s)
                    }
                    )
                }
                return e = e ? e.then(s, s) : s()
            }
        }
        function E(t, n) {
            var i = t.iterator[n.method];
            if (i === e) {
                if (n.delegate = null,
                "throw" === n.method) {
                    if (t.iterator.return && (n.method = "return",
                    n.arg = e,
                    E(t, n),
                    "throw" === n.method))
                        return f;
                    n.method = "throw",
                    n.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return f
            }
            var o = u(i, t.iterator, n.arg);
            if ("throw" === o.type)
                return n.method = "throw",
                n.arg = o.arg,
                n.delegate = null,
                f;
            var s = o.arg;
            return s ? s.done ? (n[t.resultName] = s.value,
            n.next = t.nextLoc,
            "return" !== n.method && (n.method = "next",
            n.arg = e),
            n.delegate = null,
            f) : s : (n.method = "throw",
            n.arg = new TypeError("iterator result is not an object"),
            n.delegate = null,
            f)
        }
        function x(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]),
            2 in t && (e.finallyLoc = t[2],
            e.afterLoc = t[3]),
            this.tryEntries.push(e)
        }
        function M(t) {
            var e = t.completion || {};
            e.type = "normal",
            delete e.arg,
            t.completion = e
        }
        function O(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            t.forEach(x, this),
            this.reset(!0)
        }
        function L(t) {
            if (t) {
                var n = t[s];
                if (n)
                    return n.call(t);
                if ("function" == typeof t.next)
                    return t;
                if (!isNaN(t.length)) {
                    var o = -1
                      , a = function n() {
                        for (; ++o < t.length; )
                            if (i.call(t, o))
                                return n.value = t[o],
                                n.done = !1,
                                n;
                        return n.value = e,
                        n.done = !0,
                        n
                    };
                    return a.next = a
                }
            }
            return {
                next: S
            }
        }
        function S() {
            return {
                value: e,
                done: !0
            }
        }
        return g.prototype = k.constructor = m,
        m.constructor = g,
        m[r] = g.displayName = "GeneratorFunction",
        t.isGeneratorFunction = function(t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name))
        }
        ,
        t.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m,
            r in t || (t[r] = "GeneratorFunction")),
            t.prototype = Object.create(k),
            t
        }
        ,
        t.awrap = function(t) {
            return {
                __await: t
            }
        }
        ,
        w(C.prototype),
        C.prototype[a] = function() {
            return this
        }
        ,
        t.AsyncIterator = C,
        t.async = function(e, n, i, o) {
            var s = new C(l(e, n, i, o));
            return t.isGeneratorFunction(n) ? s : s.next().then(function(t) {
                return t.done ? t.value : s.next()
            })
        }
        ,
        w(k),
        k[r] = "Generator",
        k[s] = function() {
            return this
        }
        ,
        k.toString = function() {
            return "[object Generator]"
        }
        ,
        t.keys = function(t) {
            var e = [];
            for (var n in t)
                e.push(n);
            return e.reverse(),
            function n() {
                for (; e.length; ) {
                    var i = e.pop();
                    if (i in t)
                        return n.value = i,
                        n.done = !1,
                        n
                }
                return n.done = !0,
                n
            }
        }
        ,
        t.values = L,
        O.prototype = {
            constructor: O,
            reset: function(t) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = e,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = e,
                this.tryEntries.forEach(M),
                !t)
                    for (var n in this)
                        "t" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type)
                    throw t.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done)
                    throw t;
                var n = this;
                function o(i, o) {
                    return r.type = "throw",
                    r.arg = t,
                    n.next = i,
                    o && (n.method = "next",
                    n.arg = e),
                    !!o
                }
                for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                    var a = this.tryEntries[s]
                      , r = a.completion;
                    if ("root" === a.tryLoc)
                        return o("end");
                    if (a.tryLoc <= this.prev) {
                        var l = i.call(a, "catchLoc")
                          , u = i.call(a, "finallyLoc");
                        if (l && u) {
                            if (this.prev < a.catchLoc)
                                return o(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc)
                                return o(a.finallyLoc)
                        } else if (l) {
                            if (this.prev < a.catchLoc)
                                return o(a.catchLoc, !0)
                        } else {
                            if (!u)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < a.finallyLoc)
                                return o(a.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n];
                    if (o.tryLoc <= this.prev && i.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var s = o;
                        break
                    }
                }
                s && ("break" === t || "continue" === t) && s.tryLoc <= e && e <= s.finallyLoc && (s = null);
                var a = s ? s.completion : {};
                return a.type = t,
                a.arg = e,
                s ? (this.method = "next",
                this.next = s.finallyLoc,
                f) : this.complete(a)
            },
            complete: function(t, e) {
                if ("throw" === t.type)
                    throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                this.method = "return",
                this.next = "end") : "normal" === t.type && e && (this.next = e),
                f
            },
            finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.finallyLoc === t)
                        return this.complete(n.completion, n.afterLoc),
                        M(n),
                        f
                }
            },
            catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.tryLoc === t) {
                        var i = n.completion;
                        if ("throw" === i.type) {
                            var o = i.arg;
                            M(n)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, n, i) {
                return this.delegate = {
                    iterator: L(t),
                    resultName: n,
                    nextLoc: i
                },
                "next" === this.method && (this.arg = e),
                f
            }
        },
        t
    }(t.exports);
    try {
        regeneratorRuntime = i
    } catch (t) {
        Function("r", "regeneratorRuntime = r")(i)
    }
}
, function(t, e, n) {
    (function(n) {
        var i, o = function t(e, n, i) {
            null === e && (e = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(e, n);
            if (void 0 === o) {
                var s = Object.getPrototypeOf(e);
                return null === s ? void 0 : t(s, n, i)
            }
            if ("value"in o)
                return o.value;
            var a = o.get;
            return void 0 !== a ? a.call(i) : void 0
        }, s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n),
                i && t(e, i),
                e
            }
        }();
        /*!
 * Materialize v1.0.0-rc.2 (http://materializecss.com)
 * Copyright 2014-2017 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
        function a(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function r(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        function l(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        /*! cash-dom 1.3.5, https://github.com/kenwheeler/cash @license MIT */
        window.cash = function() {
            var t, e = document, n = window, i = Array.prototype, o = i.slice, s = i.filter, a = i.push, r = function() {}, l = function(t) {
                return "function" == typeof t && t.call
            }, u = function(t) {
                return "string" == typeof t
            }, c = /^#[\w-]*$/, h = /^\.[\w-]*$/, d = /<.+>/, p = /^\w+$/;
            function f(t, n) {
                return n = n || e,
                h.test(t) ? n.getElementsByClassName(t.slice(1)) : p.test(t) ? n.getElementsByTagName(t) : n.querySelectorAll(t)
            }
            function v(n) {
                if (!t) {
                    var i = (t = e.implementation.createHTMLDocument(null)).createElement("base");
                    i.href = e.location.href,
                    t.head.appendChild(i)
                }
                return t.body.innerHTML = n,
                t.body.childNodes
            }
            function g(t) {
                "loading" !== e.readyState ? t() : e.addEventListener("DOMContentLoaded", t)
            }
            function m(t, i) {
                if (!t)
                    return this;
                if (t.cash && t !== n)
                    return t;
                var o, s = t, a = 0;
                if (u(t))
                    s = c.test(t) ? e.getElementById(t.slice(1)) : d.test(t) ? v(t) : f(t, i);
                else if (l(t))
                    return g(t),
                    this;
                if (!s)
                    return this;
                if (s.nodeType || s === n)
                    this[0] = s,
                    this.length = 1;
                else
                    for (o = this.length = s.length; a < o; a++)
                        this[a] = s[a];
                return this
            }
            function y(t, e) {
                return new m(t,e)
            }
            var _ = y.fn = y.prototype = m.prototype = {
                cash: !0,
                length: 0,
                push: a,
                splice: i.splice,
                map: i.map,
                init: m
            };
            function b(t, e) {
                for (var n = t.length, i = 0; i < n && !1 !== e.call(t[i], t[i], i, t); i++)
                    ;
            }
            function k(t, e) {
                var n = t && (t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector);
                return !!n && n.call(t, e)
            }
            function w(t) {
                return u(t) ? k : t.cash ? function(e) {
                    return t.is(e)
                }
                : function(t, e) {
                    return t === e
                }
            }
            function C(t) {
                return y(o.call(t).filter(function(t, e, n) {
                    return n.indexOf(t) === e
                }))
            }
            Object.defineProperty(_, "constructor", {
                value: y
            }),
            y.parseHTML = v,
            y.noop = r,
            y.isFunction = l,
            y.isString = u,
            y.extend = _.extend = function(t) {
                t = t || {};
                var e = o.call(arguments)
                  , n = e.length
                  , i = 1;
                for (1 === e.length && (t = this,
                i = 0); i < n; i++)
                    if (e[i])
                        for (var s in e[i])
                            e[i].hasOwnProperty(s) && (t[s] = e[i][s]);
                return t
            }
            ,
            y.extend({
                merge: function(t, e) {
                    for (var n = +e.length, i = t.length, o = 0; o < n; i++,
                    o++)
                        t[i] = e[o];
                    return t.length = i,
                    t
                },
                each: b,
                matches: k,
                unique: C,
                isArray: Array.isArray,
                isNumeric: function(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                }
            });
            var E = y.uid = "_cash" + Date.now();
            function x(t) {
                return t[E] = t[E] || {}
            }
            function M(t, e, n) {
                return x(t)[e] = n
            }
            function O(t, e) {
                var n = x(t);
                return void 0 === n[e] && (n[e] = t.dataset ? t.dataset[e] : y(t).attr("data-" + e)),
                n[e]
            }
            _.extend({
                data: function(t, e) {
                    if (u(t))
                        return void 0 === e ? O(this[0], t) : this.each(function(n) {
                            return M(n, t, e)
                        });
                    for (var n in t)
                        this.data(n, t[n]);
                    return this
                },
                removeData: function(t) {
                    return this.each(function(e) {
                        return function(t, e) {
                            var n = x(t);
                            n ? delete n[e] : t.dataset ? delete t.dataset[e] : y(t).removeAttr("data-" + name)
                        }(e, t)
                    })
                }
            });
            var L = /\S+/g;
            function S(t) {
                return u(t) && t.match(L)
            }
            function T(t, e) {
                return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)","gi").test(t.className)
            }
            function B(t, e, n) {
                t.classList ? t.classList.add(e) : n.indexOf(" " + e + " ") && (t.className += " " + e)
            }
            function D(t, e) {
                t.classList ? t.classList.remove(e) : t.className = t.className.replace(e, "")
            }
            _.extend({
                addClass: function(t) {
                    var e = S(t);
                    return e ? this.each(function(t) {
                        var n = " " + t.className + " ";
                        b(e, function(e) {
                            B(t, e, n)
                        })
                    }) : this
                },
                attr: function(t, e) {
                    if (t) {
                        if (u(t))
                            return void 0 === e ? this[0] ? this[0].getAttribute ? this[0].getAttribute(t) : this[0][t] : void 0 : this.each(function(n) {
                                n.setAttribute ? n.setAttribute(t, e) : n[t] = e
                            });
                        for (var n in t)
                            this.attr(n, t[n]);
                        return this
                    }
                },
                hasClass: function(t) {
                    var e = !1
                      , n = S(t);
                    return n && n.length && this.each(function(t) {
                        return !(e = T(t, n[0]))
                    }),
                    e
                },
                prop: function(t, e) {
                    if (u(t))
                        return void 0 === e ? this[0][t] : this.each(function(n) {
                            n[t] = e
                        });
                    for (var n in t)
                        this.prop(n, t[n]);
                    return this
                },
                removeAttr: function(t) {
                    return this.each(function(e) {
                        e.removeAttribute ? e.removeAttribute(t) : delete e[t]
                    })
                },
                removeClass: function(t) {
                    if (!arguments.length)
                        return this.attr("class", "");
                    var e = S(t);
                    return e ? this.each(function(t) {
                        b(e, function(e) {
                            D(t, e)
                        })
                    }) : this
                },
                removeProp: function(t) {
                    return this.each(function(e) {
                        delete e[t]
                    })
                },
                toggleClass: function(t, e) {
                    if (void 0 !== e)
                        return this[e ? "addClass" : "removeClass"](t);
                    var n = S(t);
                    return n ? this.each(function(t) {
                        var e = " " + t.className + " ";
                        b(n, function(n) {
                            T(t, n) ? D(t, n) : B(t, n, e)
                        })
                    }) : this
                }
            }),
            _.extend({
                add: function(t, e) {
                    return C(y.merge(this, y(t, e)))
                },
                each: function(t) {
                    return b(this, t),
                    this
                },
                eq: function(t) {
                    return y(this.get(t))
                },
                filter: function(t) {
                    if (!t)
                        return this;
                    var e = l(t) ? t : w(t);
                    return y(s.call(this, function(n) {
                        return e(n, t)
                    }))
                },
                first: function() {
                    return this.eq(0)
                },
                get: function(t) {
                    return void 0 === t ? o.call(this) : t < 0 ? this[t + this.length] : this[t]
                },
                index: function(t) {
                    var e = t ? y(t)[0] : this[0]
                      , n = t ? this : y(e).parent().children();
                    return o.call(n).indexOf(e)
                },
                last: function() {
                    return this.eq(-1)
                }
            });
            var I, $, A, R, P = (A = /(?:^\w|[A-Z]|\b\w)/g,
            R = /[\s-_]+/g,
            function(t) {
                return t.replace(A, function(t, e) {
                    return t[0 === e ? "toLowerCase" : "toUpperCase"]()
                }).replace(R, "")
            }
            ), j = (I = {},
            $ = document.createElement("div").style,
            function(t) {
                if (t = P(t),
                I[t])
                    return I[t];
                var e = t.charAt(0).toUpperCase() + t.slice(1);
                return b((t + " " + ["webkit", "moz", "ms", "o"].join(e + " ") + e).split(" "), function(e) {
                    if (e in $)
                        return I[e] = t = I[t] = e,
                        !1
                }),
                I[t]
            }
            );
            function H(t, e) {
                return parseInt(n.getComputedStyle(t[0], null)[e], 10) || 0
            }
            function N(t, e, n) {
                var i, o = O(t, "_cashEvents"), s = o && o[e];
                s && (n ? (t.removeEventListener(e, n),
                (i = s.indexOf(n)) >= 0 && s.splice(i, 1)) : (b(s, function(n) {
                    t.removeEventListener(e, n)
                }),
                s = []))
            }
            function W(t, e) {
                return "&" + encodeURIComponent(t) + "=" + encodeURIComponent(e).replace(/%20/g, "+")
            }
            function F(t) {
                var e = t.type;
                if (!e)
                    return null;
                switch (e.toLowerCase()) {
                case "select-one":
                    return function(t) {
                        var e = t.selectedIndex;
                        return e >= 0 ? t.options[e].value : null
                    }(t);
                case "select-multiple":
                    return function(t) {
                        var e = [];
                        return b(t.options, function(t) {
                            t.selected && e.push(t.value)
                        }),
                        e.length ? e : null
                    }(t);
                case "radio":
                case "checkbox":
                    return t.checked ? t.value : null;
                default:
                    return t.value ? t.value : null
                }
            }
            function q(t, e, n) {
                var i = u(e);
                i || !e.length ? b(t, i ? function(t) {
                    return t.insertAdjacentHTML(n ? "afterbegin" : "beforeend", e)
                }
                : function(t, i) {
                    return function(t, e, n) {
                        if (n) {
                            var i = t.childNodes[0];
                            t.insertBefore(e, i)
                        } else
                            t.appendChild(e)
                    }(t, 0 === i ? e : e.cloneNode(!0), n)
                }
                ) : b(e, function(e) {
                    return q(t, e, n)
                })
            }
            y.prefixedProp = j,
            y.camelCase = P,
            _.extend({
                css: function(t, e) {
                    if (u(t))
                        return t = j(t),
                        arguments.length > 1 ? this.each(function(n) {
                            return n.style[t] = e
                        }) : n.getComputedStyle(this[0])[t];
                    for (var i in t)
                        this.css(i, t[i]);
                    return this
                }
            }),
            b(["Width", "Height"], function(t) {
                var e = t.toLowerCase();
                _[e] = function() {
                    return this[0].getBoundingClientRect()[e]
                }
                ,
                _["inner" + t] = function() {
                    return this[0]["client" + t]
                }
                ,
                _["outer" + t] = function(e) {
                    return this[0]["offset" + t] + (e ? H(this, "margin" + ("Width" === t ? "Left" : "Top")) + H(this, "margin" + ("Width" === t ? "Right" : "Bottom")) : 0)
                }
            }),
            _.extend({
                off: function(t, e) {
                    return this.each(function(n) {
                        return N(n, t, e)
                    })
                },
                on: function(t, e, n, i) {
                    var o;
                    if (!u(t)) {
                        for (var s in t)
                            this.on(s, e, t[s]);
                        return this
                    }
                    return l(e) && (n = e,
                    e = null),
                    "ready" === t ? (g(n),
                    this) : (e && (o = n,
                    n = function(t) {
                        for (var n = t.target; !k(n, e); ) {
                            if (n === this || null === n)
                                return !1;
                            n = n.parentNode
                        }
                        n && o.call(n, t)
                    }
                    ),
                    this.each(function(e) {
                        var o = n;
                        i && (o = function() {
                            n.apply(this, arguments),
                            N(e, t, o)
                        }
                        ),
                        function(t, e, n) {
                            var i = O(t, "_cashEvents") || M(t, "_cashEvents", {});
                            i[e] = i[e] || [],
                            i[e].push(n),
                            t.addEventListener(e, n)
                        }(e, t, o)
                    }))
                },
                one: function(t, e, n) {
                    return this.on(t, e, n, !0)
                },
                ready: g,
                trigger: function(t, e) {
                    if (document.createEvent) {
                        var n = document.createEvent("HTMLEvents");
                        return n.initEvent(t, !0, !1),
                        n = this.extend(n, e),
                        this.each(function(t) {
                            return t.dispatchEvent(n)
                        })
                    }
                }
            }),
            _.extend({
                serialize: function() {
                    var t = "";
                    return b(this[0].elements || this, function(e) {
                        if (!e.disabled && "FIELDSET" !== e.tagName) {
                            var n = e.name;
                            switch (e.type.toLowerCase()) {
                            case "file":
                            case "reset":
                            case "submit":
                            case "button":
                                break;
                            case "select-multiple":
                                var i = F(e);
                                null !== i && b(i, function(e) {
                                    t += W(n, e)
                                });
                                break;
                            default:
                                var o = F(e);
                                null !== o && (t += W(n, o))
                            }
                        }
                    }),
                    t.substr(1)
                },
                val: function(t) {
                    return void 0 === t ? F(this[0]) : this.each(function(e) {
                        return e.value = t
                    })
                }
            }),
            _.extend({
                after: function(t) {
                    return y(t).insertAfter(this),
                    this
                },
                append: function(t) {
                    return q(this, t),
                    this
                },
                appendTo: function(t) {
                    return q(y(t), this),
                    this
                },
                before: function(t) {
                    return y(t).insertBefore(this),
                    this
                },
                clone: function() {
                    return y(this.map(function(t) {
                        return t.cloneNode(!0)
                    }))
                },
                empty: function() {
                    return this.html(""),
                    this
                },
                html: function(t) {
                    if (void 0 === t)
                        return this[0].innerHTML;
                    var e = t.nodeType ? t[0].outerHTML : t;
                    return this.each(function(t) {
                        return t.innerHTML = e
                    })
                },
                insertAfter: function(t) {
                    var e = this;
                    return y(t).each(function(t, n) {
                        var i = t.parentNode
                          , o = t.nextSibling;
                        e.each(function(t) {
                            i.insertBefore(0 === n ? t : t.cloneNode(!0), o)
                        })
                    }),
                    this
                },
                insertBefore: function(t) {
                    var e = this;
                    return y(t).each(function(t, n) {
                        var i = t.parentNode;
                        e.each(function(e) {
                            i.insertBefore(0 === n ? e : e.cloneNode(!0), t)
                        })
                    }),
                    this
                },
                prepend: function(t) {
                    return q(this, t, !0),
                    this
                },
                prependTo: function(t) {
                    return q(y(t), this, !0),
                    this
                },
                remove: function() {
                    return this.each(function(t) {
                        if (t.parentNode)
                            return t.parentNode.removeChild(t)
                    })
                },
                text: function(t) {
                    return void 0 === t ? this[0].textContent : this.each(function(e) {
                        return e.textContent = t
                    })
                }
            });
            var V = e.documentElement;
            return _.extend({
                position: function() {
                    var t = this[0];
                    return {
                        left: t.offsetLeft,
                        top: t.offsetTop
                    }
                },
                offset: function() {
                    var t = this[0].getBoundingClientRect();
                    return {
                        top: t.top + n.pageYOffset - V.clientTop,
                        left: t.left + n.pageXOffset - V.clientLeft
                    }
                },
                offsetParent: function() {
                    return y(this[0].offsetParent)
                }
            }),
            _.extend({
                children: function(t) {
                    var e = [];
                    return this.each(function(t) {
                        a.apply(e, t.children)
                    }),
                    e = C(e),
                    t ? e.filter(function(e) {
                        return k(e, t)
                    }) : e
                },
                closest: function(t) {
                    return !t || this.length < 1 ? y() : this.is(t) ? this.filter(t) : this.parent().closest(t)
                },
                is: function(t) {
                    if (!t)
                        return !1;
                    var e = !1
                      , n = w(t);
                    return this.each(function(i) {
                        return !(e = n(i, t))
                    }),
                    e
                },
                find: function(t) {
                    if (!t || t.nodeType)
                        return y(t && this.has(t).length ? t : null);
                    var e = [];
                    return this.each(function(n) {
                        a.apply(e, f(t, n))
                    }),
                    C(e)
                },
                has: function(t) {
                    var e = u(t) ? function(e) {
                        return 0 !== f(t, e).length
                    }
                    : function(e) {
                        return e.contains(t)
                    }
                    ;
                    return this.filter(e)
                },
                next: function() {
                    return y(this[0].nextElementSibling)
                },
                not: function(t) {
                    if (!t)
                        return this;
                    var e = w(t);
                    return this.filter(function(n) {
                        return !e(n, t)
                    })
                },
                parent: function() {
                    var t = [];
                    return this.each(function(e) {
                        e && e.parentNode && t.push(e.parentNode)
                    }),
                    C(t)
                },
                parents: function(t) {
                    var n, i = [];
                    return this.each(function(o) {
                        for (n = o; n && n.parentNode && n !== e.body.parentNode; )
                            n = n.parentNode,
                            (!t || t && k(n, t)) && i.push(n)
                    }),
                    C(i)
                },
                prev: function() {
                    return y(this[0].previousElementSibling)
                },
                siblings: function(t) {
                    var e = this.parent().children(t)
                      , n = this[0];
                    return e.filter(function(t) {
                        return t !== n
                    })
                }
            }),
            y
        }();
        var u = function() {
            function t(e, n, i) {
                l(this, t),
                n instanceof Element || console.error(Error(n + " is not an HTML Element"));
                var o = e.getInstance(n);
                o && o.destroy(),
                this.el = n,
                this.$el = cash(n)
            }
            return s(t, null, [{
                key: "init",
                value: function(t, e, n) {
                    var i = null;
                    if (e instanceof Element)
                        i = new t(e,n);
                    else if (e && (e.jquery || e.cash || e instanceof NodeList)) {
                        for (var o = [], s = 0; s < e.length; s++)
                            o.push(new t(e[s],n));
                        i = o
                    }
                    return i
                }
            }]),
            t
        }();
        !function(t) {
            t.Package ? M = {} : t.M = {},
            M.jQueryLoaded = !!t.jQuery
        }(window),
        void 0 === (i = function() {
            return M
        }
        .apply(e, [])) || (t.exports = i),
        M.keys = {
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            ARROW_UP: 38,
            ARROW_DOWN: 40
        },
        M.tabPressed = !1,
        M.keyDown = !1;
        document.addEventListener("keydown", function(t) {
            M.keyDown = !0,
            t.which !== M.keys.TAB && t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ARROW_UP || (M.tabPressed = !0)
        }, !0),
        document.addEventListener("keyup", function(t) {
            M.keyDown = !1,
            t.which !== M.keys.TAB && t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ARROW_UP || (M.tabPressed = !1)
        }, !0),
        document.addEventListener("focus", function(t) {
            M.keyDown && document.body.classList.add("keyboard-focused")
        }, !0),
        document.addEventListener("blur", function(t) {
            document.body.classList.remove("keyboard-focused")
        }, !0),
        M.initializeJqueryWrapper = function(t, e, n) {
            jQuery.fn[e] = function(i) {
                if (t.prototype[i]) {
                    var o = Array.prototype.slice.call(arguments, 1);
                    if ("get" === i.slice(0, 3)) {
                        var s = this.first()[0][n];
                        return s[i].apply(s, o)
                    }
                    return this.each(function() {
                        var t = this[n];
                        t[i].apply(t, o)
                    })
                }
                if ("object" == typeof i || !i)
                    return t.init(this, arguments[0]),
                    this;
                jQuery.error("Method " + i + " does not exist on jQuery." + e)
            }
        }
        ,
        M.AutoInit = function(t) {
            var e = t || document.body
              , n = {
                Autocomplete: e.querySelectorAll(".autocomplete:not(.no-autoinit)"),
                Carousel: e.querySelectorAll(".carousel:not(.no-autoinit)"),
                Chips: e.querySelectorAll(".chips:not(.no-autoinit)"),
                Collapsible: e.querySelectorAll(".collapsible:not(.no-autoinit)"),
                Datepicker: e.querySelectorAll(".datepicker:not(.no-autoinit)"),
                Dropdown: e.querySelectorAll(".dropdown-trigger:not(.no-autoinit)"),
                Materialbox: e.querySelectorAll(".materialboxed:not(.no-autoinit)"),
                Modal: e.querySelectorAll(".modal:not(.no-autoinit)"),
                Parallax: e.querySelectorAll(".parallax:not(.no-autoinit)"),
                Pushpin: e.querySelectorAll(".pushpin:not(.no-autoinit)"),
                ScrollSpy: e.querySelectorAll(".scrollspy:not(.no-autoinit)"),
                FormSelect: e.querySelectorAll("select:not(.no-autoinit)"),
                Sidenav: e.querySelectorAll(".sidenav:not(.no-autoinit)"),
                Tabs: e.querySelectorAll(".tabs:not(.no-autoinit)"),
                TapTarget: e.querySelectorAll(".tap-target:not(.no-autoinit)"),
                Timepicker: e.querySelectorAll(".timepicker:not(.no-autoinit)"),
                Tooltip: e.querySelectorAll(".tooltipped:not(.no-autoinit)"),
                FloatingActionButton: e.querySelectorAll(".fixed-action-btn:not(.no-autoinit)")
            };
            for (var i in n) {
                M[i].init(n[i])
            }
        }
        ,
        M.objectSelectorString = function(t) {
            return ((t.prop("tagName") || "") + (t.attr("id") || "") + (t.attr("class") || "")).replace(/\s/g, "")
        }
        ,
        M.guid = function() {
            function t() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }
            return function() {
                return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
            }
        }(),
        M.escapeHash = function(t) {
            return t.replace(/(:|\.|\[|\]|,|=|\/)/g, "\\$1")
        }
        ,
        M.elementOrParentIsFixed = function(t) {
            var e = $(t)
              , n = e.add(e.parents())
              , i = !1;
            return n.each(function() {
                if ("fixed" === $(this).css("position"))
                    return i = !0,
                    !1
            }),
            i
        }
        ,
        M.checkWithinContainer = function(t, e, n) {
            var i = {
                top: !1,
                right: !1,
                bottom: !1,
                left: !1
            }
              , o = t.getBoundingClientRect()
              , s = t === document.body ? Math.max(o.bottom, window.innerHeight) : o.bottom
              , a = t.scrollLeft
              , r = t.scrollTop
              , l = e.left - a
              , u = e.top - r;
            return (l < o.left + n || l < n) && (i.left = !0),
            (l + e.width > o.right - n || l + e.width > window.innerWidth - n) && (i.right = !0),
            (u < o.top + n || u < n) && (i.top = !0),
            (u + e.height > s - n || u + e.height > window.innerHeight - n) && (i.bottom = !0),
            i
        }
        ,
        M.checkPossibleAlignments = function(t, e, n, i) {
            var o = {
                top: !0,
                right: !0,
                bottom: !0,
                left: !0,
                spaceOnTop: null,
                spaceOnRight: null,
                spaceOnBottom: null,
                spaceOnLeft: null
            }
              , s = "visible" === getComputedStyle(e).overflow
              , a = e.getBoundingClientRect()
              , r = Math.min(a.height, window.innerHeight)
              , l = Math.min(a.width, window.innerWidth)
              , u = t.getBoundingClientRect()
              , c = e.scrollLeft
              , h = e.scrollTop
              , d = n.left - c
              , p = n.top - h
              , f = n.top + u.height - h;
            return o.spaceOnRight = s ? window.innerWidth - (u.left + n.width) : l - (d + n.width),
            o.spaceOnRight < 0 && (o.left = !1),
            o.spaceOnLeft = s ? u.right - n.width : d - n.width + u.width,
            o.spaceOnLeft < 0 && (o.right = !1),
            o.spaceOnBottom = s ? window.innerHeight - (u.top + n.height + i) : r - (p + n.height + i),
            o.spaceOnBottom < 0 && (o.top = !1),
            o.spaceOnTop = s ? u.bottom - (n.height + i) : f - (n.height - i),
            o.spaceOnTop < 0 && (o.bottom = !1),
            o
        }
        ,
        M.getOverflowParent = function(t) {
            return null == t ? null : t === document.body || "visible" !== getComputedStyle(t).overflow ? t : M.getOverflowParent(t.parentElement)
        }
        ,
        M.getIdFromTrigger = function(t) {
            var e = t.getAttribute("data-target");
            return e || (e = (e = t.getAttribute("href")) ? e.slice(1) : ""),
            e
        }
        ,
        M.getDocumentScrollTop = function() {
            return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        }
        ,
        M.getDocumentScrollLeft = function() {
            return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        }
        ;
        /**
 * Get time in ms
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @type {function}
 * @return {number}
 */
        var c = Date.now || function() {
            return (new Date).getTime()
        }
        ;
        /**
 * Returns a function, that, when invoked, will only be triggered at most once
 * during a given window of time. Normally, the throttled function will run
 * as much as it can, without ever going more than once per `wait` duration;
 * but if you'd like to disable the execution on the leading edge, pass
 * `{leading: false}`. To disable execution on the trailing edge, ditto.
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @param {function} func
 * @param {number} wait
 * @param {Object=} options
 * @returns {Function}
 */
        M.throttle = function(t, e, n) {
            var i = void 0
              , o = void 0
              , s = void 0
              , a = null
              , r = 0;
            n || (n = {});
            var l = function() {
                r = !1 === n.leading ? 0 : c(),
                a = null,
                s = t.apply(i, o),
                i = o = null
            };
            return function() {
                var u = c();
                r || !1 !== n.leading || (r = u);
                var h = e - (u - r);
                return i = this,
                o = arguments,
                h <= 0 ? (clearTimeout(a),
                a = null,
                r = u,
                s = t.apply(i, o),
                i = o = null) : a || !1 === n.trailing || (a = setTimeout(l, h)),
                s
            }
        }
        ;
        var h = {
            scope: {}
        };
        h.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, n) {
            if (n.get || n.set)
                throw new TypeError("ES3 does not support getters and setters.");
            t != Array.prototype && t != Object.prototype && (t[e] = n.value)
        }
        ,
        h.getGlobal = function(t) {
            return "undefined" != typeof window && window === t ? t : void 0 !== n && null != n ? n : t
        }
        ,
        h.global = h.getGlobal(this),
        h.SYMBOL_PREFIX = "jscomp_symbol_",
        h.initSymbol = function() {
            h.initSymbol = function() {}
            ,
            h.global.Symbol || (h.global.Symbol = h.Symbol)
        }
        ,
        h.symbolCounter_ = 0,
        h.Symbol = function(t) {
            return h.SYMBOL_PREFIX + (t || "") + h.symbolCounter_++
        }
        ,
        h.initSymbolIterator = function() {
            h.initSymbol();
            var t = h.global.Symbol.iterator;
            t || (t = h.global.Symbol.iterator = h.global.Symbol("iterator")),
            "function" != typeof Array.prototype[t] && h.defineProperty(Array.prototype, t, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return h.arrayIterator(this)
                }
            }),
            h.initSymbolIterator = function() {}
        }
        ,
        h.arrayIterator = function(t) {
            var e = 0;
            return h.iteratorPrototype(function() {
                return e < t.length ? {
                    done: !1,
                    value: t[e++]
                } : {
                    done: !0
                }
            })
        }
        ,
        h.iteratorPrototype = function(t) {
            return h.initSymbolIterator(),
            (t = {
                next: t
            })[h.global.Symbol.iterator] = function() {
                return this
            }
            ,
            t
        }
        ,
        h.array = h.array || {},
        h.iteratorFromArray = function(t, e) {
            h.initSymbolIterator(),
            t instanceof String && (t += "");
            var n = 0
              , i = {
                next: function() {
                    if (n < t.length) {
                        var o = n++;
                        return {
                            value: e(o, t[o]),
                            done: !1
                        }
                    }
                    return i.next = function() {
                        return {
                            done: !0,
                            value: void 0
                        }
                    }
                    ,
                    i.next()
                }
            };
            return i[Symbol.iterator] = function() {
                return i
            }
            ,
            i
        }
        ,
        h.polyfill = function(t, e, n, i) {
            if (e) {
                for (n = h.global,
                t = t.split("."),
                i = 0; i < t.length - 1; i++) {
                    var o = t[i];
                    o in n || (n[o] = {}),
                    n = n[o]
                }
                (e = e(i = n[t = t[t.length - 1]])) != i && null != e && h.defineProperty(n, t, {
                    configurable: !0,
                    writable: !0,
                    value: e
                })
            }
        }
        ,
        h.polyfill("Array.prototype.keys", function(t) {
            return t || function() {
                return h.iteratorFromArray(this, function(t) {
                    return t
                })
            }
        }, "es6-impl", "es3");
        var d = this;
        M.anime = function() {
            function t(t) {
                if (!T.col(t))
                    try {
                        return document.querySelectorAll(t)
                    } catch (t) {}
            }
            function e(t, e) {
                for (var n = t.length, i = 2 <= arguments.length ? arguments[1] : void 0, o = [], s = 0; s < n; s++)
                    if (s in t) {
                        var a = t[s];
                        e.call(i, a, s, t) && o.push(a)
                    }
                return o
            }
            function n(t) {
                return t.reduce(function(t, e) {
                    return t.concat(T.arr(e) ? n(e) : e)
                }, [])
            }
            function i(e) {
                return T.arr(e) ? e : (T.str(e) && (e = t(e) || e),
                e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e])
            }
            function o(t, e) {
                return t.some(function(t) {
                    return t === e
                })
            }
            function s(t) {
                var e, n = {};
                for (e in t)
                    n[e] = t[e];
                return n
            }
            function a(t, e) {
                var n, i = s(t);
                for (n in t)
                    i[n] = e.hasOwnProperty(n) ? e[n] : t[n];
                return i
            }
            function r(t, e) {
                var n, i = s(t);
                for (n in e)
                    i[n] = T.und(t[n]) ? e[n] : t[n];
                return i
            }
            function l(t) {
                if (t = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t))
                    return t[2]
            }
            function u(t, e) {
                return T.fnc(t) ? t(e.target, e.id, e.total) : t
            }
            function c(t, e) {
                if (e in t.style)
                    return getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0"
            }
            function h(t, e) {
                return T.dom(t) && o(S, e) ? "transform" : T.dom(t) && (t.getAttribute(e) || T.svg(t) && t[e]) ? "attribute" : T.dom(t) && "transform" !== e && c(t, e) ? "css" : null != t[e] ? "object" : void 0
            }
            function p(t, n) {
                switch (h(t, n)) {
                case "transform":
                    return function(t, n) {
                        var i = function(t) {
                            return -1 < t.indexOf("translate") || "perspective" === t ? "px" : -1 < t.indexOf("rotate") || -1 < t.indexOf("skew") ? "deg" : void 0
                        }(n);
                        if (i = -1 < n.indexOf("scale") ? 1 : 0 + i,
                        !(t = t.style.transform))
                            return i;
                        for (var o = [], s = [], a = [], r = /(\w+)\((.+?)\)/g; o = r.exec(t); )
                            s.push(o[1]),
                            a.push(o[2]);
                        return (t = e(a, function(t, e) {
                            return s[e] === n
                        })).length ? t[0] : i
                    }(t, n);
                case "css":
                    return c(t, n);
                case "attribute":
                    return t.getAttribute(n)
                }
                return t[n] || 0
            }
            function f(t, e) {
                var n = /^(\*=|\+=|-=)/.exec(t);
                if (!n)
                    return t;
                var i = l(t) || 0;
                switch (e = parseFloat(e),
                t = parseFloat(t.replace(n[0], "")),
                n[0][0]) {
                case "+":
                    return e + t + i;
                case "-":
                    return e - t + i;
                case "*":
                    return e * t + i
                }
            }
            function v(t, e) {
                return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
            }
            function g(t) {
                t = t.points;
                for (var e, n = 0, i = 0; i < t.numberOfItems; i++) {
                    var o = t.getItem(i);
                    0 < i && (n += v(e, o)),
                    e = o
                }
                return n
            }
            function m(t) {
                if (t.getTotalLength)
                    return t.getTotalLength();
                switch (t.tagName.toLowerCase()) {
                case "circle":
                    return 2 * Math.PI * t.getAttribute("r");
                case "rect":
                    return 2 * t.getAttribute("width") + 2 * t.getAttribute("height");
                case "line":
                    return v({
                        x: t.getAttribute("x1"),
                        y: t.getAttribute("y1")
                    }, {
                        x: t.getAttribute("x2"),
                        y: t.getAttribute("y2")
                    });
                case "polyline":
                    return g(t);
                case "polygon":
                    var e = t.points;
                    return g(t) + v(e.getItem(e.numberOfItems - 1), e.getItem(0))
                }
            }
            function y(t, e) {
                function n(n) {
                    return n = void 0 === n ? 0 : n,
                    t.el.getPointAtLength(1 <= e + n ? e + n : 0)
                }
                var i = n()
                  , o = n(-1)
                  , s = n(1);
                switch (t.property) {
                case "x":
                    return i.x;
                case "y":
                    return i.y;
                case "angle":
                    return 180 * Math.atan2(s.y - o.y, s.x - o.x) / Math.PI
                }
            }
            function _(t, e) {
                var n, i = /-?\d*\.?\d+/g;
                if (n = T.pth(t) ? t.totalLength : t,
                T.col(n))
                    if (T.rgb(n)) {
                        var o = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);
                        n = o ? "rgba(" + o[1] + ",1)" : n
                    } else
                        n = T.hex(n) ? function(t) {
                            t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, n, i) {
                                return e + e + n + n + i + i
                            });
                            var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                            return "rgba(" + (t = parseInt(e[1], 16)) + "," + parseInt(e[2], 16) + "," + (e = parseInt(e[3], 16)) + ",1)"
                        }(n) : T.hsl(n) ? function(t) {
                            function e(t, e, n) {
                                return 0 > n && (n += 1),
                                1 < n && --n,
                                n < 1 / 6 ? t + 6 * (e - t) * n : .5 > n ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
                            }
                            var n = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);
                            t = parseInt(n[1]) / 360;
                            var i = parseInt(n[2]) / 100
                              , o = parseInt(n[3]) / 100;
                            if (n = n[4] || 1,
                            0 == i)
                                o = i = t = o;
                            else {
                                var s = .5 > o ? o * (1 + i) : o + i - o * i
                                  , a = 2 * o - s;
                                o = e(a, s, t + 1 / 3),
                                i = e(a, s, t),
                                t = e(a, s, t - 1 / 3)
                            }
                            return "rgba(" + 255 * o + "," + 255 * i + "," + 255 * t + "," + n + ")"
                        }(n) : void 0;
                else
                    o = (o = l(n)) ? n.substr(0, n.length - o.length) : n,
                    n = e && !/\s/g.test(n) ? o + e : o;
                return {
                    original: n += "",
                    numbers: n.match(i) ? n.match(i).map(Number) : [0],
                    strings: T.str(t) || e ? n.split(i) : []
                }
            }
            function b(t) {
                return e(t = t ? n(T.arr(t) ? t.map(i) : i(t)) : [], function(t, e, n) {
                    return n.indexOf(t) === e
                })
            }
            function k(t, e) {
                var n = s(e);
                if (T.arr(t)) {
                    var o = t.length;
                    2 !== o || T.obj(t[0]) ? T.fnc(e.duration) || (n.duration = e.duration / o) : t = {
                        value: t
                    }
                }
                return i(t).map(function(t, n) {
                    return n = n ? 0 : e.delay,
                    t = T.obj(t) && !T.pth(t) ? t : {
                        value: t
                    },
                    T.und(t.delay) && (t.delay = n),
                    t
                }).map(function(t) {
                    return r(t, n)
                })
            }
            function w(t, e) {
                var n;
                return t.tweens.map(function(i) {
                    var o = (i = function(t, e) {
                        var n, i = {};
                        for (n in t) {
                            var o = u(t[n], e);
                            T.arr(o) && 1 === (o = o.map(function(t) {
                                return u(t, e)
                            })).length && (o = o[0]),
                            i[n] = o
                        }
                        return i.duration = parseFloat(i.duration),
                        i.delay = parseFloat(i.delay),
                        i
                    }(i, e)).value
                      , s = p(e.target, t.name)
                      , a = n ? n.to.original : s
                      , r = (a = T.arr(o) ? o[0] : a,
                    f(T.arr(o) ? o[1] : o, a));
                    return s = l(r) || l(a) || l(s),
                    i.from = _(a, s),
                    i.to = _(r, s),
                    i.start = n ? n.end : t.offset,
                    i.end = i.start + i.delay + i.duration,
                    i.easing = function(t) {
                        return T.arr(t) ? B.apply(this, t) : D[t]
                    }(i.easing),
                    i.elasticity = (1e3 - Math.min(Math.max(i.elasticity, 1), 999)) / 1e3,
                    i.isPath = T.pth(o),
                    i.isColor = T.col(i.from.original),
                    i.isColor && (i.round = 1),
                    n = i
                })
            }
            function C(t, e, n, i) {
                var o = "delay" === t;
                return e.length ? (o ? Math.min : Math.max).apply(Math, e.map(function(e) {
                    return e[t]
                })) : o ? i.delay : n.offset + i.delay + i.duration
            }
            function E(t) {
                var i, o = a(O, t), s = a(L, t), l = function(t) {
                    var e = b(t);
                    return e.map(function(t, n) {
                        return {
                            target: t,
                            id: n,
                            total: e.length
                        }
                    })
                }(t.targets), u = [], c = r(o, s);
                for (i in t)
                    c.hasOwnProperty(i) || "targets" === i || u.push({
                        name: i,
                        offset: c.offset,
                        tweens: k(t[i], s)
                    });
                return t = function(t, i) {
                    return e(n(t.map(function(t) {
                        return i.map(function(e) {
                            var n = h(t.target, e.name);
                            if (n) {
                                var i = w(e, t);
                                e = {
                                    type: n,
                                    property: e.name,
                                    animatable: t,
                                    tweens: i,
                                    duration: i[i.length - 1].end,
                                    delay: i[0].delay
                                }
                            } else
                                e = void 0;
                            return e
                        })
                    })), function(t) {
                        return !T.und(t)
                    })
                }(l, u),
                r(o, {
                    children: [],
                    animatables: l,
                    animations: t,
                    duration: C("duration", t, o, s),
                    delay: C("delay", t, o, s)
                })
            }
            function x(t) {
                function n() {
                    return window.Promise && new Promise(function(t) {
                        return d = t
                    }
                    )
                }
                function i(t) {
                    return f.reversed ? f.duration - t : t
                }
                function o(t) {
                    for (var n = 0, i = {}, o = f.animations, s = o.length; n < s; ) {
                        var a = o[n]
                          , r = a.animatable
                          , l = (u = a.tweens)[p = u.length - 1];
                        p && (l = e(u, function(e) {
                            return t < e.end
                        })[0] || l);
                        for (var u = Math.min(Math.max(t - l.start - l.delay, 0), l.duration) / l.duration, h = isNaN(u) ? 1 : l.easing(u, l.elasticity), d = (u = l.to.strings,
                        l.round), p = [], v = void 0, g = (v = l.to.numbers.length,
                        0); g < v; g++) {
                            var m = void 0
                              , _ = (m = l.to.numbers[g],
                            l.from.numbers[g]);
                            m = l.isPath ? y(l.value, h * m) : _ + h * (m - _),
                            d && (l.isColor && 2 < g || (m = Math.round(m * d) / d)),
                            p.push(m)
                        }
                        if (l = u.length)
                            for (v = u[0],
                            h = 0; h < l; h++)
                                d = u[h + 1],
                                g = p[h],
                                isNaN(g) || (v = d ? v + (g + d) : v + (g + " "));
                        else
                            v = p[0];
                        I[a.type](r.target, a.property, v, i, r.id),
                        a.currentValue = v,
                        n++
                    }
                    if (n = Object.keys(i).length)
                        for (o = 0; o < n; o++)
                            M || (M = c(document.body, "transform") ? "transform" : "-webkit-transform"),
                            f.animatables[o].target.style[M] = i[o].join(" ");
                    f.currentTime = t,
                    f.progress = t / f.duration * 100
                }
                function s(t) {
                    f[t] && f[t](f)
                }
                function a() {
                    f.remaining && !0 !== f.remaining && f.remaining--
                }
                function r(t) {
                    var e = f.duration
                      , r = f.offset
                      , c = r + f.delay
                      , v = f.currentTime
                      , g = f.reversed
                      , m = i(t);
                    if (f.children.length) {
                        var y = f.children
                          , _ = y.length;
                        if (m >= f.currentTime)
                            for (var b = 0; b < _; b++)
                                y[b].seek(m);
                        else
                            for (; _--; )
                                y[_].seek(m)
                    }
                    (m >= c || !e) && (f.began || (f.began = !0,
                    s("begin")),
                    s("run")),
                    m > r && m < e ? o(m) : (m <= r && 0 !== v && (o(0),
                    g && a()),
                    (m >= e && v !== e || !e) && (o(e),
                    g || a())),
                    s("update"),
                    t >= e && (f.remaining ? (u = l,
                    "alternate" === f.direction && (f.reversed = !f.reversed)) : (f.pause(),
                    f.completed || (f.completed = !0,
                    s("complete"),
                    "Promise"in window && (d(),
                    p = n()))),
                    h = 0)
                }
                t = void 0 === t ? {} : t;
                var l, u, h = 0, d = null, p = n(), f = E(t);
                return f.reset = function() {
                    var t = f.direction
                      , e = f.loop;
                    for (f.currentTime = 0,
                    f.progress = 0,
                    f.paused = !0,
                    f.began = !1,
                    f.completed = !1,
                    f.reversed = "reverse" === t,
                    f.remaining = "alternate" === t && 1 === e ? 2 : e,
                    o(0),
                    t = f.children.length; t--; )
                        f.children[t].reset()
                }
                ,
                f.tick = function(t) {
                    l = t,
                    u || (u = l),
                    r((h + l - u) * x.speed)
                }
                ,
                f.seek = function(t) {
                    r(i(t))
                }
                ,
                f.pause = function() {
                    var t = $.indexOf(f);
                    -1 < t && $.splice(t, 1),
                    f.paused = !0
                }
                ,
                f.play = function() {
                    f.paused && (f.paused = !1,
                    u = 0,
                    h = i(f.currentTime),
                    $.push(f),
                    A || R())
                }
                ,
                f.reverse = function() {
                    f.reversed = !f.reversed,
                    u = 0,
                    h = i(f.currentTime)
                }
                ,
                f.restart = function() {
                    f.pause(),
                    f.reset(),
                    f.play()
                }
                ,
                f.finished = p,
                f.reset(),
                f.autoplay && f.play(),
                f
            }
            var M, O = {
                update: void 0,
                begin: void 0,
                run: void 0,
                complete: void 0,
                loop: 1,
                direction: "normal",
                autoplay: !0,
                offset: 0
            }, L = {
                duration: 1e3,
                delay: 0,
                easing: "easeOutElastic",
                elasticity: 500,
                round: 0
            }, S = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "), T = {
                arr: function(t) {
                    return Array.isArray(t)
                },
                obj: function(t) {
                    return -1 < Object.prototype.toString.call(t).indexOf("Object")
                },
                pth: function(t) {
                    return T.obj(t) && t.hasOwnProperty("totalLength")
                },
                svg: function(t) {
                    return t instanceof SVGElement
                },
                dom: function(t) {
                    return t.nodeType || T.svg(t)
                },
                str: function(t) {
                    return "string" == typeof t
                },
                fnc: function(t) {
                    return "function" == typeof t
                },
                und: function(t) {
                    return void 0 === t
                },
                hex: function(t) {
                    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
                },
                rgb: function(t) {
                    return /^rgb/.test(t)
                },
                hsl: function(t) {
                    return /^hsl/.test(t)
                },
                col: function(t) {
                    return T.hex(t) || T.rgb(t) || T.hsl(t)
                }
            }, B = function() {
                function t(t, e, n) {
                    return (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t
                }
                return function(e, n, i, o) {
                    if (0 <= e && 1 >= e && 0 <= i && 1 >= i) {
                        var s = new Float32Array(11);
                        if (e !== n || i !== o)
                            for (var a = 0; 11 > a; ++a)
                                s[a] = t(.1 * a, e, i);
                        return function(a) {
                            if (e === n && i === o)
                                return a;
                            if (0 === a)
                                return 0;
                            if (1 === a)
                                return 1;
                            for (var r = 0, l = 1; 10 !== l && s[l] <= a; ++l)
                                r += .1;
                            l = r + (a - s[--l]) / (s[l + 1] - s[l]) * .1;
                            var u = 3 * (1 - 3 * i + 3 * e) * l * l + 2 * (3 * i - 6 * e) * l + 3 * e;
                            if (.001 <= u) {
                                for (r = 0; 4 > r && 0 != (u = 3 * (1 - 3 * i + 3 * e) * l * l + 2 * (3 * i - 6 * e) * l + 3 * e); ++r) {
                                    var c = t(l, e, i) - a;
                                    l -= c / u
                                }
                                a = l
                            } else if (0 === u)
                                a = l;
                            else {
                                l = r,
                                r += .1;
                                var h = 0;
                                do {
                                    0 < (u = t(c = l + (r - l) / 2, e, i) - a) ? r = c : l = c
                                } while (1e-7 < Math.abs(u) && 10 > ++h);
                                a = c
                            }
                            return t(a, n, o)
                        }
                    }
                }
            }(), D = function() {
                function t(t, e) {
                    return 0 === t || 1 === t ? t : -Math.pow(2, 10 * (t - 1)) * Math.sin(2 * (t - 1 - e / (2 * Math.PI) * Math.asin(1)) * Math.PI / e)
                }
                var e, n = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "), i = {
                    In: [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], t],
                    Out: [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275], function(e, n) {
                        return 1 - t(1 - e, n)
                    }
                    ],
                    InOut: [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55], function(e, n) {
                        return .5 > e ? t(2 * e, n) / 2 : 1 - t(-2 * e + 2, n) / 2
                    }
                    ]
                }, o = {
                    linear: B(.25, .25, .75, .75)
                }, s = {};
                for (e in i)
                    s.type = e,
                    i[s.type].forEach(function(t) {
                        return function(e, i) {
                            o["ease" + t.type + n[i]] = T.fnc(e) ? e : B.apply(d, e)
                        }
                    }(s)),
                    s = {
                        type: s.type
                    };
                return o
            }(), I = {
                css: function(t, e, n) {
                    return t.style[e] = n
                },
                attribute: function(t, e, n) {
                    return t.setAttribute(e, n)
                },
                object: function(t, e, n) {
                    return t[e] = n
                },
                transform: function(t, e, n, i, o) {
                    i[o] || (i[o] = []),
                    i[o].push(e + "(" + n + ")")
                }
            }, $ = [], A = 0, R = function() {
                function t() {
                    A = requestAnimationFrame(e)
                }
                function e(e) {
                    var n = $.length;
                    if (n) {
                        for (var i = 0; i < n; )
                            $[i] && $[i].tick(e),
                            i++;
                        t()
                    } else
                        cancelAnimationFrame(A),
                        A = 0
                }
                return t
            }();
            return x.version = "2.2.0",
            x.speed = 1,
            x.running = $,
            x.remove = function(t) {
                t = b(t);
                for (var e = $.length; e--; )
                    for (var n = $[e], i = n.animations, s = i.length; s--; )
                        o(t, i[s].animatable.target) && (i.splice(s, 1),
                        i.length || n.pause())
            }
            ,
            x.getValue = p,
            x.path = function(e, n) {
                var i = T.str(e) ? t(e)[0] : e
                  , o = n || 100;
                return function(t) {
                    return {
                        el: i,
                        property: t,
                        totalLength: m(i) * (o / 100)
                    }
                }
            }
            ,
            x.setDashoffset = function(t) {
                var e = m(t);
                return t.setAttribute("stroke-dasharray", e),
                e
            }
            ,
            x.bezier = B,
            x.easings = D,
            x.timeline = function(t) {
                var e = x(t);
                return e.pause(),
                e.duration = 0,
                e.add = function(n) {
                    return e.children.forEach(function(t) {
                        t.began = !0,
                        t.completed = !0
                    }),
                    i(n).forEach(function(n) {
                        var i = r(n, a(L, t || {}));
                        i.targets = i.targets || t.targets,
                        n = e.duration;
                        var o = i.offset;
                        i.autoplay = !1,
                        i.direction = e.direction,
                        i.offset = T.und(o) ? n : f(o, n),
                        e.began = !0,
                        e.completed = !0,
                        e.seek(i.offset),
                        (i = x(i)).began = !0,
                        i.completed = !0,
                        i.duration > n && (e.duration = i.duration),
                        e.children.push(i)
                    }),
                    e.seek(0),
                    e.reset(),
                    e.autoplay && e.restart(),
                    e
                }
                ,
                e
            }
            ,
            x.random = function(t, e) {
                return Math.floor(Math.random() * (e - t + 1)) + t
            }
            ,
            x
        }(),
        function(t, e) {
            "use strict";
            var n = {
                accordion: !0,
                onOpenStart: void 0,
                onOpenEnd: void 0,
                onCloseStart: void 0,
                onCloseEnd: void 0,
                inDuration: 300,
                outDuration: 300
            }
              , i = function(i) {
                function c(e, n) {
                    l(this, c);
                    var i = a(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, c, e, n));
                    i.el.M_Collapsible = i,
                    i.options = t.extend({}, c.defaults, n),
                    i.$headers = i.$el.children("li").children(".collapsible-header"),
                    i.$headers.attr("tabindex", 0),
                    i._setupEventHandlers();
                    var o = i.$el.children("li.active").children(".collapsible-body");
                    return i.options.accordion ? o.first().css("display", "block") : o.css("display", "block"),
                    i
                }
                return r(c, u),
                s(c, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this.el.M_Collapsible = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        var t = this;
                        this._handleCollapsibleClickBound = this._handleCollapsibleClick.bind(this),
                        this._handleCollapsibleKeydownBound = this._handleCollapsibleKeydown.bind(this),
                        this.el.addEventListener("click", this._handleCollapsibleClickBound),
                        this.$headers.each(function(e) {
                            e.addEventListener("keydown", t._handleCollapsibleKeydownBound)
                        })
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        var t = this;
                        this.el.removeEventListener("click", this._handleCollapsibleClickBound),
                        this.$headers.each(function(e) {
                            e.removeEventListener("keydown", t._handleCollapsibleKeydownBound)
                        })
                    }
                }, {
                    key: "_handleCollapsibleClick",
                    value: function(e) {
                        var n = t(e.target).closest(".collapsible-header");
                        if (e.target && n.length) {
                            var i = n.closest(".collapsible");
                            if (i[0] === this.el) {
                                var o = n.closest("li")
                                  , s = i.children("li")
                                  , a = o[0].classList.contains("active")
                                  , r = s.index(o);
                                a ? this.close(r) : this.open(r)
                            }
                        }
                    }
                }, {
                    key: "_handleCollapsibleKeydown",
                    value: function(t) {
                        13 === t.keyCode && this._handleCollapsibleClickBound(t)
                    }
                }, {
                    key: "_animateIn",
                    value: function(t) {
                        var n = this
                          , i = this.$el.children("li").eq(t);
                        if (i.length) {
                            var o = i.children(".collapsible-body");
                            e.remove(o[0]),
                            o.css({
                                display: "block",
                                overflow: "hidden",
                                height: 0,
                                paddingTop: "",
                                paddingBottom: ""
                            });
                            var s = o.css("padding-top")
                              , a = o.css("padding-bottom")
                              , r = o[0].scrollHeight;
                            o.css({
                                paddingTop: 0,
                                paddingBottom: 0
                            }),
                            e({
                                targets: o[0],
                                height: r,
                                paddingTop: s,
                                paddingBottom: a,
                                duration: this.options.inDuration,
                                easing: "easeInOutCubic",
                                complete: function(t) {
                                    o.css({
                                        overflow: "",
                                        paddingTop: "",
                                        paddingBottom: "",
                                        height: ""
                                    }),
                                    "function" == typeof n.options.onOpenEnd && n.options.onOpenEnd.call(n, i[0])
                                }
                            })
                        }
                    }
                }, {
                    key: "_animateOut",
                    value: function(t) {
                        var n = this
                          , i = this.$el.children("li").eq(t);
                        if (i.length) {
                            var o = i.children(".collapsible-body");
                            e.remove(o[0]),
                            o.css("overflow", "hidden"),
                            e({
                                targets: o[0],
                                height: 0,
                                paddingTop: 0,
                                paddingBottom: 0,
                                duration: this.options.outDuration,
                                easing: "easeInOutCubic",
                                complete: function() {
                                    o.css({
                                        height: "",
                                        overflow: "",
                                        padding: "",
                                        display: ""
                                    }),
                                    "function" == typeof n.options.onCloseEnd && n.options.onCloseEnd.call(n, i[0])
                                }
                            })
                        }
                    }
                }, {
                    key: "open",
                    value: function(e) {
                        var n = this
                          , i = this.$el.children("li").eq(e);
                        if (i.length && !i[0].classList.contains("active")) {
                            if ("function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, i[0]),
                            this.options.accordion) {
                                var o = this.$el.children("li");
                                this.$el.children("li.active").each(function(e) {
                                    var i = o.index(t(e));
                                    n.close(i)
                                })
                            }
                            i[0].classList.add("active"),
                            this._animateIn(e)
                        }
                    }
                }, {
                    key: "close",
                    value: function(t) {
                        var e = this.$el.children("li").eq(t);
                        e.length && e[0].classList.contains("active") && ("function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, e[0]),
                        e[0].classList.remove("active"),
                        this._animateOut(t))
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return o(c.__proto__ || Object.getPrototypeOf(c), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Collapsible
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return n
                    }
                }]),
                c
            }();
            M.Collapsible = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "collapsible", "M_Collapsible")
        }(cash, M.anime),
        function(t, e) {
            "use strict";
            var n = {
                alignment: "left",
                autoFocus: !0,
                constrainWidth: !0,
                container: null,
                coverTrigger: !0,
                closeOnClick: !0,
                hover: !1,
                inDuration: 150,
                outDuration: 250,
                onOpenStart: null,
                onOpenEnd: null,
                onCloseStart: null,
                onCloseEnd: null,
                onItemClick: null
            }
              , i = function(i) {
                function c(e, n) {
                    l(this, c);
                    var i = a(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, c, e, n));
                    return i.el.M_Dropdown = i,
                    c._dropdowns.push(i),
                    i.id = M.getIdFromTrigger(e),
                    i.dropdownEl = document.getElementById(i.id),
                    i.$dropdownEl = t(i.dropdownEl),
                    i.options = t.extend({}, c.defaults, n),
                    i.isOpen = !1,
                    i.isScrollable = !1,
                    i.isTouchMoving = !1,
                    i.focusedIndex = -1,
                    i.filterQuery = [],
                    i.options.container ? t(i.options.container).append(i.dropdownEl) : i.$el.after(i.dropdownEl),
                    i._makeDropdownFocusable(),
                    i._resetFilterQueryBound = i._resetFilterQuery.bind(i),
                    i._handleDocumentClickBound = i._handleDocumentClick.bind(i),
                    i._handleDocumentTouchmoveBound = i._handleDocumentTouchmove.bind(i),
                    i._handleDropdownClickBound = i._handleDropdownClick.bind(i),
                    i._handleDropdownKeydownBound = i._handleDropdownKeydown.bind(i),
                    i._handleTriggerKeydownBound = i._handleTriggerKeydown.bind(i),
                    i._setupEventHandlers(),
                    i
                }
                return r(c, u),
                s(c, [{
                    key: "destroy",
                    value: function() {
                        this._resetDropdownStyles(),
                        this._removeEventHandlers(),
                        c._dropdowns.splice(c._dropdowns.indexOf(this), 1),
                        this.el.M_Dropdown = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this.el.addEventListener("keydown", this._handleTriggerKeydownBound),
                        this.dropdownEl.addEventListener("click", this._handleDropdownClickBound),
                        this.options.hover ? (this._handleMouseEnterBound = this._handleMouseEnter.bind(this),
                        this.el.addEventListener("mouseenter", this._handleMouseEnterBound),
                        this._handleMouseLeaveBound = this._handleMouseLeave.bind(this),
                        this.el.addEventListener("mouseleave", this._handleMouseLeaveBound),
                        this.dropdownEl.addEventListener("mouseleave", this._handleMouseLeaveBound)) : (this._handleClickBound = this._handleClick.bind(this),
                        this.el.addEventListener("click", this._handleClickBound))
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        this.el.removeEventListener("keydown", this._handleTriggerKeydownBound),
                        this.dropdownEl.removeEventListener("click", this._handleDropdownClickBound),
                        this.options.hover ? (this.el.removeEventListener("mouseenter", this._handleMouseEnterBound),
                        this.el.removeEventListener("mouseleave", this._handleMouseLeaveBound),
                        this.dropdownEl.removeEventListener("mouseleave", this._handleMouseLeaveBound)) : this.el.removeEventListener("click", this._handleClickBound)
                    }
                }, {
                    key: "_setupTemporaryEventHandlers",
                    value: function() {
                        document.body.addEventListener("click", this._handleDocumentClickBound, !0),
                        document.body.addEventListener("touchend", this._handleDocumentClickBound),
                        document.body.addEventListener("touchmove", this._handleDocumentTouchmoveBound),
                        this.dropdownEl.addEventListener("keydown", this._handleDropdownKeydownBound)
                    }
                }, {
                    key: "_removeTemporaryEventHandlers",
                    value: function() {
                        document.body.removeEventListener("click", this._handleDocumentClickBound, !0),
                        document.body.removeEventListener("touchend", this._handleDocumentClickBound),
                        document.body.removeEventListener("touchmove", this._handleDocumentTouchmoveBound),
                        this.dropdownEl.removeEventListener("keydown", this._handleDropdownKeydownBound)
                    }
                }, {
                    key: "_handleClick",
                    value: function(t) {
                        t.preventDefault(),
                        this.open()
                    }
                }, {
                    key: "_handleMouseEnter",
                    value: function() {
                        this.open()
                    }
                }, {
                    key: "_handleMouseLeave",
                    value: function(e) {
                        var n = e.toElement || e.relatedTarget
                          , i = !!t(n).closest(".dropdown-content").length
                          , o = !1
                          , s = t(n).closest(".dropdown-trigger");
                        s.length && s[0].M_Dropdown && s[0].M_Dropdown.isOpen && (o = !0),
                        o || i || this.close()
                    }
                }, {
                    key: "_handleDocumentClick",
                    value: function(e) {
                        var n = this
                          , i = t(e.target);
                        this.options.closeOnClick && i.closest(".dropdown-content").length && !this.isTouchMoving ? setTimeout(function() {
                            n.close()
                        }, 0) : !i.closest(".dropdown-trigger").length && i.closest(".dropdown-content").length || setTimeout(function() {
                            n.close()
                        }, 0),
                        this.isTouchMoving = !1
                    }
                }, {
                    key: "_handleTriggerKeydown",
                    value: function(t) {
                        t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ENTER || this.isOpen || (t.preventDefault(),
                        this.open())
                    }
                }, {
                    key: "_handleDocumentTouchmove",
                    value: function(e) {
                        t(e.target).closest(".dropdown-content").length && (this.isTouchMoving = !0)
                    }
                }, {
                    key: "_handleDropdownClick",
                    value: function(e) {
                        if ("function" == typeof this.options.onItemClick) {
                            var n = t(e.target).closest("li")[0];
                            this.options.onItemClick.call(this, n)
                        }
                    }
                }, {
                    key: "_handleDropdownKeydown",
                    value: function(e) {
                        if (e.which === M.keys.TAB)
                            e.preventDefault(),
                            this.close();
                        else if (e.which !== M.keys.ARROW_DOWN && e.which !== M.keys.ARROW_UP || !this.isOpen)
                            if (e.which === M.keys.ENTER && this.isOpen) {
                                var n = this.dropdownEl.children[this.focusedIndex]
                                  , i = t(n).find("a, button").first();
                                i.length ? i[0].click() : n.click()
                            } else
                                e.which === M.keys.ESC && this.isOpen && (e.preventDefault(),
                                this.close());
                        else {
                            e.preventDefault();
                            var o = e.which === M.keys.ARROW_DOWN ? 1 : -1
                              , s = this.focusedIndex
                              , a = !1;
                            do {
                                if (s += o,
                                this.dropdownEl.children[s] && -1 !== this.dropdownEl.children[s].tabIndex) {
                                    a = !0;
                                    break
                                }
                            } while (s < this.dropdownEl.children.length && s >= 0);
                            a && (this.focusedIndex = s,
                            this._focusFocusedItem())
                        }
                        var r = String.fromCharCode(e.which).toLowerCase();
                        if (r && -1 === [9, 13, 27, 38, 40].indexOf(e.which)) {
                            this.filterQuery.push(r);
                            var l = this.filterQuery.join("")
                              , u = t(this.dropdownEl).find("li").filter(function(e) {
                                return 0 === t(e).text().toLowerCase().indexOf(l)
                            })[0];
                            u && (this.focusedIndex = t(u).index(),
                            this._focusFocusedItem())
                        }
                        this.filterTimeout = setTimeout(this._resetFilterQueryBound, 1e3)
                    }
                }, {
                    key: "_resetFilterQuery",
                    value: function() {
                        this.filterQuery = []
                    }
                }, {
                    key: "_resetDropdownStyles",
                    value: function() {
                        this.$dropdownEl.css({
                            display: "",
                            width: "",
                            height: "",
                            left: "",
                            top: "",
                            "transform-origin": "",
                            transform: "",
                            opacity: ""
                        })
                    }
                }, {
                    key: "_makeDropdownFocusable",
                    value: function() {
                        this.dropdownEl.tabIndex = 0,
                        t(this.dropdownEl).children().each(function(t) {
                            t.getAttribute("tabindex") || t.setAttribute("tabindex", 0)
                        })
                    }
                }, {
                    key: "_focusFocusedItem",
                    value: function() {
                        this.focusedIndex >= 0 && this.focusedIndex < this.dropdownEl.children.length && this.options.autoFocus && this.dropdownEl.children[this.focusedIndex].focus()
                    }
                }, {
                    key: "_getDropdownPosition",
                    value: function() {
                        this.el.offsetParent.getBoundingClientRect();
                        var t = this.el.getBoundingClientRect()
                          , e = this.dropdownEl.getBoundingClientRect()
                          , n = e.height
                          , i = e.width
                          , o = t.left - e.left
                          , s = t.top - e.top
                          , a = {
                            left: o,
                            top: s,
                            height: n,
                            width: i
                        }
                          , r = this.dropdownEl.offsetParent ? this.dropdownEl.offsetParent : this.dropdownEl.parentNode
                          , l = M.checkPossibleAlignments(this.el, r, a, this.options.coverTrigger ? 0 : t.height)
                          , u = "top"
                          , c = this.options.alignment;
                        if (s += this.options.coverTrigger ? 0 : t.height,
                        this.isScrollable = !1,
                        l.top || (l.bottom ? u = "bottom" : (this.isScrollable = !0,
                        l.spaceOnTop > l.spaceOnBottom ? (u = "bottom",
                        n += l.spaceOnTop,
                        s -= l.spaceOnTop) : n += l.spaceOnBottom)),
                        !l[c]) {
                            var h = "left" === c ? "right" : "left";
                            l[h] ? c = h : l.spaceOnLeft > l.spaceOnRight ? (c = "right",
                            i += l.spaceOnLeft,
                            o -= l.spaceOnLeft) : (c = "left",
                            i += l.spaceOnRight)
                        }
                        return "bottom" === u && (s = s - e.height + (this.options.coverTrigger ? t.height : 0)),
                        "right" === c && (o = o - e.width + t.width),
                        {
                            x: o,
                            y: s,
                            verticalAlignment: u,
                            horizontalAlignment: c,
                            height: n,
                            width: i
                        }
                    }
                }, {
                    key: "_animateIn",
                    value: function() {
                        var t = this;
                        e.remove(this.dropdownEl),
                        e({
                            targets: this.dropdownEl,
                            opacity: {
                                value: [0, 1],
                                easing: "easeOutQuad"
                            },
                            scaleX: [.3, 1],
                            scaleY: [.3, 1],
                            duration: this.options.inDuration,
                            easing: "easeOutQuint",
                            complete: function(e) {
                                if (t.options.autoFocus && t.dropdownEl.focus(),
                                "function" == typeof t.options.onOpenEnd) {
                                    var n = e.animatables[0].target;
                                    t.options.onOpenEnd.call(n, t.el)
                                }
                            }
                        })
                    }
                }, {
                    key: "_animateOut",
                    value: function() {
                        var t = this;
                        e.remove(this.dropdownEl),
                        e({
                            targets: this.dropdownEl,
                            opacity: {
                                value: 0,
                                easing: "easeOutQuint"
                            },
                            scaleX: .3,
                            scaleY: .3,
                            duration: this.options.outDuration,
                            easing: "easeOutQuint",
                            complete: function(e) {
                                if (t._resetDropdownStyles(),
                                "function" == typeof t.options.onCloseEnd) {
                                    e.animatables[0].target;
                                    t.options.onCloseEnd.call(t, t.el)
                                }
                            }
                        })
                    }
                }, {
                    key: "_placeDropdown",
                    value: function() {
                        var t = this.options.constrainWidth ? this.el.getBoundingClientRect().width : this.dropdownEl.getBoundingClientRect().width;
                        this.dropdownEl.style.width = t + "px";
                        var e = this._getDropdownPosition();
                        this.dropdownEl.style.left = e.x + "px",
                        this.dropdownEl.style.top = e.y + "px",
                        this.dropdownEl.style.height = e.height + "px",
                        this.dropdownEl.style.width = e.width + "px",
                        this.dropdownEl.style.transformOrigin = ("left" === e.horizontalAlignment ? "0" : "100%") + " " + ("top" === e.verticalAlignment ? "0" : "100%")
                    }
                }, {
                    key: "open",
                    value: function() {
                        this.isOpen || (this.isOpen = !0,
                        "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el),
                        this._resetDropdownStyles(),
                        this.dropdownEl.style.display = "block",
                        this._placeDropdown(),
                        this._animateIn(),
                        this._setupTemporaryEventHandlers())
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.isOpen && (this.isOpen = !1,
                        this.focusedIndex = -1,
                        "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el),
                        this._animateOut(),
                        this._removeTemporaryEventHandlers(),
                        this.options.autoFocus && this.el.focus())
                    }
                }, {
                    key: "recalculateDimensions",
                    value: function() {
                        this.isOpen && (this.$dropdownEl.css({
                            width: "",
                            height: "",
                            left: "",
                            top: "",
                            "transform-origin": ""
                        }),
                        this._placeDropdown())
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return o(c.__proto__ || Object.getPrototypeOf(c), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Dropdown
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return n
                    }
                }]),
                c
            }();
            i._dropdowns = [],
            window.M.Dropdown = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "dropdown", "M_Dropdown")
        }(cash, M.anime),
        function(t, e) {
            "use strict";
            var n = {
                opacity: .5,
                inDuration: 250,
                outDuration: 250,
                onOpenStart: null,
                onOpenEnd: null,
                onCloseStart: null,
                onCloseEnd: null,
                preventScrolling: !0,
                dismissible: !0,
                startingTop: "4%",
                endingTop: "10%"
            }
              , i = function(i) {
                function c(e, n) {
                    l(this, c);
                    var i = a(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, c, e, n));
                    return i.el.M_Modal = i,
                    i.options = t.extend({}, c.defaults, n),
                    i.isOpen = !1,
                    i.id = i.$el.attr("id"),
                    i._openingTrigger = void 0,
                    i.$overlay = t('<div class="modal-overlay"></div>'),
                    i.el.tabIndex = 0,
                    i._nthModalOpened = 0,
                    c._count++,
                    i._setupEventHandlers(),
                    i
                }
                return r(c, u),
                s(c, [{
                    key: "destroy",
                    value: function() {
                        c._count--,
                        this._removeEventHandlers(),
                        this.el.removeAttribute("style"),
                        this.$overlay.remove(),
                        this.el.M_Modal = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleOverlayClickBound = this._handleOverlayClick.bind(this),
                        this._handleModalCloseClickBound = this._handleModalCloseClick.bind(this),
                        1 === c._count && document.body.addEventListener("click", this._handleTriggerClick),
                        this.$overlay[0].addEventListener("click", this._handleOverlayClickBound),
                        this.el.addEventListener("click", this._handleModalCloseClickBound)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        0 === c._count && document.body.removeEventListener("click", this._handleTriggerClick),
                        this.$overlay[0].removeEventListener("click", this._handleOverlayClickBound),
                        this.el.removeEventListener("click", this._handleModalCloseClickBound)
                    }
                }, {
                    key: "_handleTriggerClick",
                    value: function(e) {
                        var n = t(e.target).closest(".modal-trigger");
                        if (n.length) {
                            var i = M.getIdFromTrigger(n[0])
                              , o = document.getElementById(i).M_Modal;
                            o && o.open(n),
                            e.preventDefault()
                        }
                    }
                }, {
                    key: "_handleOverlayClick",
                    value: function() {
                        this.options.dismissible && this.close()
                    }
                }, {
                    key: "_handleModalCloseClick",
                    value: function(e) {
                        t(e.target).closest(".modal-close").length && this.close()
                    }
                }, {
                    key: "_handleKeydown",
                    value: function(t) {
                        27 === t.keyCode && this.options.dismissible && this.close()
                    }
                }, {
                    key: "_handleFocus",
                    value: function(t) {
                        this.el.contains(t.target) || this._nthModalOpened !== c._modalsOpen || this.el.focus()
                    }
                }, {
                    key: "_animateIn",
                    value: function() {
                        var n = this;
                        t.extend(this.el.style, {
                            display: "block",
                            opacity: 0
                        }),
                        t.extend(this.$overlay[0].style, {
                            display: "block",
                            opacity: 0
                        }),
                        e({
                            targets: this.$overlay[0],
                            opacity: this.options.opacity,
                            duration: this.options.inDuration,
                            easing: "easeOutQuad"
                        });
                        var i = {
                            targets: this.el,
                            duration: this.options.inDuration,
                            easing: "easeOutCubic",
                            complete: function() {
                                "function" == typeof n.options.onOpenEnd && n.options.onOpenEnd.call(n, n.el, n._openingTrigger)
                            }
                        };
                        this.el.classList.contains("bottom-sheet") ? (t.extend(i, {
                            bottom: 0,
                            opacity: 1
                        }),
                        e(i)) : (t.extend(i, {
                            top: [this.options.startingTop, this.options.endingTop],
                            opacity: 1,
                            scaleX: [.8, 1],
                            scaleY: [.8, 1]
                        }),
                        e(i))
                    }
                }, {
                    key: "_animateOut",
                    value: function() {
                        var n = this;
                        e({
                            targets: this.$overlay[0],
                            opacity: 0,
                            duration: this.options.outDuration,
                            easing: "easeOutQuart"
                        });
                        var i = {
                            targets: this.el,
                            duration: this.options.outDuration,
                            easing: "easeOutCubic",
                            complete: function() {
                                n.el.style.display = "none",
                                n.$overlay.remove(),
                                "function" == typeof n.options.onCloseEnd && n.options.onCloseEnd.call(n, n.el)
                            }
                        };
                        this.el.classList.contains("bottom-sheet") ? (t.extend(i, {
                            bottom: "-100%",
                            opacity: 0
                        }),
                        e(i)) : (t.extend(i, {
                            top: [this.options.endingTop, this.options.startingTop],
                            opacity: 0,
                            scaleX: .8,
                            scaleY: .8
                        }),
                        e(i))
                    }
                }, {
                    key: "open",
                    value: function(t) {
                        if (!this.isOpen)
                            return this.isOpen = !0,
                            c._modalsOpen++,
                            this._nthModalOpened = c._modalsOpen,
                            this.$overlay[0].style.zIndex = 1e3 + 2 * c._modalsOpen,
                            this.el.style.zIndex = 1e3 + 2 * c._modalsOpen + 1,
                            this._openingTrigger = t ? t[0] : void 0,
                            "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el, this._openingTrigger),
                            this.options.preventScrolling && (document.body.style.overflow = "hidden"),
                            this.el.classList.add("open"),
                            this.el.insertAdjacentElement("afterend", this.$overlay[0]),
                            this.options.dismissible && (this._handleKeydownBound = this._handleKeydown.bind(this),
                            this._handleFocusBound = this._handleFocus.bind(this),
                            document.addEventListener("keydown", this._handleKeydownBound),
                            document.addEventListener("focus", this._handleFocusBound, !0)),
                            e.remove(this.el),
                            e.remove(this.$overlay[0]),
                            this._animateIn(),
                            this.el.focus(),
                            this
                    }
                }, {
                    key: "close",
                    value: function() {
                        if (this.isOpen)
                            return this.isOpen = !1,
                            c._modalsOpen--,
                            this._nthModalOpened = 0,
                            "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el),
                            this.el.classList.remove("open"),
                            0 === c._modalsOpen && (document.body.style.overflow = ""),
                            this.options.dismissible && (document.removeEventListener("keydown", this._handleKeydownBound),
                            document.removeEventListener("focus", this._handleFocusBound, !0)),
                            e.remove(this.el),
                            e.remove(this.$overlay[0]),
                            this._animateOut(),
                            this
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return o(c.__proto__ || Object.getPrototypeOf(c), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Modal
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return n
                    }
                }]),
                c
            }();
            i._modalsOpen = 0,
            i._count = 0,
            M.Modal = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "modal", "M_Modal")
        }(cash, M.anime),
        function(t, e) {
            "use strict";
            var n = {
                inDuration: 275,
                outDuration: 200,
                onOpenStart: null,
                onOpenEnd: null,
                onCloseStart: null,
                onCloseEnd: null
            }
              , i = function(i) {
                function c(e, n) {
                    l(this, c);
                    var i = a(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, c, e, n));
                    return i.el.M_Materialbox = i,
                    i.options = t.extend({}, c.defaults, n),
                    i.overlayActive = !1,
                    i.doneAnimating = !0,
                    i.placeholder = t("<div></div>").addClass("material-placeholder"),
                    i.originalWidth = 0,
                    i.originalHeight = 0,
                    i.originInlineStyles = i.$el.attr("style"),
                    i.caption = i.el.getAttribute("data-caption") || "",
                    i.$el.before(i.placeholder),
                    i.placeholder.append(i.$el),
                    i._setupEventHandlers(),
                    i
                }
                return r(c, u),
                s(c, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this.el.M_Materialbox = void 0,
                        t(this.placeholder).after(this.el).remove(),
                        this.$el.removeAttr("style")
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleMaterialboxClickBound = this._handleMaterialboxClick.bind(this),
                        this.el.addEventListener("click", this._handleMaterialboxClickBound)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        this.el.removeEventListener("click", this._handleMaterialboxClickBound)
                    }
                }, {
                    key: "_handleMaterialboxClick",
                    value: function(t) {
                        !1 === this.doneAnimating || this.overlayActive && this.doneAnimating ? this.close() : this.open()
                    }
                }, {
                    key: "_handleWindowScroll",
                    value: function() {
                        this.overlayActive && this.close()
                    }
                }, {
                    key: "_handleWindowResize",
                    value: function() {
                        this.overlayActive && this.close()
                    }
                }, {
                    key: "_handleWindowEscape",
                    value: function(t) {
                        27 === t.keyCode && this.doneAnimating && this.overlayActive && this.close()
                    }
                }, {
                    key: "_makeAncestorsOverflowVisible",
                    value: function() {
                        this.ancestorsChanged = t();
                        for (var e = this.placeholder[0].parentNode; null !== e && !t(e).is(document); ) {
                            var n = t(e);
                            "visible" !== n.css("overflow") && (n.css("overflow", "visible"),
                            void 0 === this.ancestorsChanged ? this.ancestorsChanged = n : this.ancestorsChanged = this.ancestorsChanged.add(n)),
                            e = e.parentNode
                        }
                    }
                }, {
                    key: "_animateImageIn",
                    value: function() {
                        var t = this
                          , n = {
                            targets: this.el,
                            height: [this.originalHeight, this.newHeight],
                            width: [this.originalWidth, this.newWidth],
                            left: M.getDocumentScrollLeft() + this.windowWidth / 2 - this.placeholder.offset().left - this.newWidth / 2,
                            top: M.getDocumentScrollTop() + this.windowHeight / 2 - this.placeholder.offset().top - this.newHeight / 2,
                            duration: this.options.inDuration,
                            easing: "easeOutQuad",
                            complete: function() {
                                t.doneAnimating = !0,
                                "function" == typeof t.options.onOpenEnd && t.options.onOpenEnd.call(t, t.el)
                            }
                        };
                        this.maxWidth = this.$el.css("max-width"),
                        this.maxHeight = this.$el.css("max-height"),
                        "none" !== this.maxWidth && (n.maxWidth = this.newWidth),
                        "none" !== this.maxHeight && (n.maxHeight = this.newHeight),
                        e(n)
                    }
                }, {
                    key: "_animateImageOut",
                    value: function() {
                        var t = this
                          , n = {
                            targets: this.el,
                            width: this.originalWidth,
                            height: this.originalHeight,
                            left: 0,
                            top: 0,
                            duration: this.options.outDuration,
                            easing: "easeOutQuad",
                            complete: function() {
                                t.placeholder.css({
                                    height: "",
                                    width: "",
                                    position: "",
                                    top: "",
                                    left: ""
                                }),
                                t.attrWidth && t.$el.attr("width", t.attrWidth),
                                t.attrHeight && t.$el.attr("height", t.attrHeight),
                                t.$el.removeAttr("style"),
                                t.originInlineStyles && t.$el.attr("style", t.originInlineStyles),
                                t.$el.removeClass("active"),
                                t.doneAnimating = !0,
                                t.ancestorsChanged.length && t.ancestorsChanged.css("overflow", ""),
                                "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t, t.el)
                            }
                        };
                        e(n)
                    }
                }, {
                    key: "_updateVars",
                    value: function() {
                        this.windowWidth = window.innerWidth,
                        this.windowHeight = window.innerHeight,
                        this.caption = this.el.getAttribute("data-caption") || ""
                    }
                }, {
                    key: "open",
                    value: function() {
                        var n = this;
                        this._updateVars(),
                        this.originalWidth = this.el.getBoundingClientRect().width,
                        this.originalHeight = this.el.getBoundingClientRect().height,
                        this.doneAnimating = !1,
                        this.$el.addClass("active"),
                        this.overlayActive = !0,
                        "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el),
                        this.placeholder.css({
                            width: this.placeholder[0].getBoundingClientRect().width + "px",
                            height: this.placeholder[0].getBoundingClientRect().height + "px",
                            position: "relative",
                            top: 0,
                            left: 0
                        }),
                        this._makeAncestorsOverflowVisible(),
                        this.$el.css({
                            position: "absolute",
                            "z-index": 1e3,
                            "will-change": "left, top, width, height"
                        }),
                        this.attrWidth = this.$el.attr("width"),
                        this.attrHeight = this.$el.attr("height"),
                        this.attrWidth && (this.$el.css("width", this.attrWidth + "px"),
                        this.$el.removeAttr("width")),
                        this.attrHeight && (this.$el.css("width", this.attrHeight + "px"),
                        this.$el.removeAttr("height")),
                        this.$overlay = t('<div id="materialbox-overlay"></div>').css({
                            opacity: 0
                        }).one("click", function() {
                            n.doneAnimating && n.close()
                        }),
                        this.$el.before(this.$overlay);
                        var i = this.$overlay[0].getBoundingClientRect();
                        this.$overlay.css({
                            width: this.windowWidth + "px",
                            height: this.windowHeight + "px",
                            left: -1 * i.left + "px",
                            top: -1 * i.top + "px"
                        }),
                        e.remove(this.el),
                        e.remove(this.$overlay[0]),
                        e({
                            targets: this.$overlay[0],
                            opacity: 1,
                            duration: this.options.inDuration,
                            easing: "easeOutQuad"
                        }),
                        "" !== this.caption && (this.$photocaption && e.remove(this.$photoCaption[0]),
                        this.$photoCaption = t('<div class="materialbox-caption"></div>'),
                        this.$photoCaption.text(this.caption),
                        t("body").append(this.$photoCaption),
                        this.$photoCaption.css({
                            display: "inline"
                        }),
                        e({
                            targets: this.$photoCaption[0],
                            opacity: 1,
                            duration: this.options.inDuration,
                            easing: "easeOutQuad"
                        }));
                        var o = 0
                          , s = this.originalWidth / this.windowWidth
                          , a = this.originalHeight / this.windowHeight;
                        this.newWidth = 0,
                        this.newHeight = 0,
                        s > a ? (o = this.originalHeight / this.originalWidth,
                        this.newWidth = .9 * this.windowWidth,
                        this.newHeight = .9 * this.windowWidth * o) : (o = this.originalWidth / this.originalHeight,
                        this.newWidth = .9 * this.windowHeight * o,
                        this.newHeight = .9 * this.windowHeight),
                        this._animateImageIn(),
                        this._handleWindowScrollBound = this._handleWindowScroll.bind(this),
                        this._handleWindowResizeBound = this._handleWindowResize.bind(this),
                        this._handleWindowEscapeBound = this._handleWindowEscape.bind(this),
                        window.addEventListener("scroll", this._handleWindowScrollBound),
                        window.addEventListener("resize", this._handleWindowResizeBound),
                        window.addEventListener("keyup", this._handleWindowEscapeBound)
                    }
                }, {
                    key: "close",
                    value: function() {
                        var t = this;
                        this._updateVars(),
                        this.doneAnimating = !1,
                        "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el),
                        e.remove(this.el),
                        e.remove(this.$overlay[0]),
                        "" !== this.caption && e.remove(this.$photoCaption[0]),
                        window.removeEventListener("scroll", this._handleWindowScrollBound),
                        window.removeEventListener("resize", this._handleWindowResizeBound),
                        window.removeEventListener("keyup", this._handleWindowEscapeBound),
                        e({
                            targets: this.$overlay[0],
                            opacity: 0,
                            duration: this.options.outDuration,
                            easing: "easeOutQuad",
                            complete: function() {
                                t.overlayActive = !1,
                                t.$overlay.remove()
                            }
                        }),
                        this._animateImageOut(),
                        "" !== this.caption && e({
                            targets: this.$photoCaption[0],
                            opacity: 0,
                            duration: this.options.outDuration,
                            easing: "easeOutQuad",
                            complete: function() {
                                t.$photoCaption.remove()
                            }
                        })
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return o(c.__proto__ || Object.getPrototypeOf(c), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Materialbox
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return n
                    }
                }]),
                c
            }();
            M.Materialbox = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "materialbox", "M_Materialbox")
        }(cash, M.anime),
        function(t) {
            "use strict";
            var e = {
                responsiveThreshold: 0
            }
              , n = function(n) {
                function i(e, n) {
                    l(this, i);
                    var o = a(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, e, n));
                    return o.el.M_Parallax = o,
                    o.options = t.extend({}, i.defaults, n),
                    o._enabled = window.innerWidth > o.options.responsiveThreshold,
                    o.$img = o.$el.find("img").first(),
                    o.$img.each(function() {
                        this.complete && t(this).trigger("load")
                    }),
                    o._updateParallax(),
                    o._setupEventHandlers(),
                    o._setupStyles(),
                    i._parallaxes.push(o),
                    o
                }
                return r(i, u),
                s(i, [{
                    key: "destroy",
                    value: function() {
                        i._parallaxes.splice(i._parallaxes.indexOf(this), 1),
                        this.$img[0].style.transform = "",
                        this._removeEventHandlers(),
                        this.$el[0].M_Parallax = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleImageLoadBound = this._handleImageLoad.bind(this),
                        this.$img[0].addEventListener("load", this._handleImageLoadBound),
                        0 === i._parallaxes.length && (i._handleScrollThrottled = M.throttle(i._handleScroll, 5),
                        window.addEventListener("scroll", i._handleScrollThrottled),
                        i._handleWindowResizeThrottled = M.throttle(i._handleWindowResize, 5),
                        window.addEventListener("resize", i._handleWindowResizeThrottled))
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        this.$img[0].removeEventListener("load", this._handleImageLoadBound),
                        0 === i._parallaxes.length && (window.removeEventListener("scroll", i._handleScrollThrottled),
                        window.removeEventListener("resize", i._handleWindowResizeThrottled))
                    }
                }, {
                    key: "_setupStyles",
                    value: function() {
                        this.$img[0].style.opacity = 1
                    }
                }, {
                    key: "_handleImageLoad",
                    value: function() {
                        this._updateParallax()
                    }
                }, {
                    key: "_updateParallax",
                    value: function() {
                        var t = this.$el.height() > 0 ? this.el.parentNode.offsetHeight : 500
                          , e = this.$img[0].offsetHeight - t
                          , n = this.$el.offset().top + t
                          , i = this.$el.offset().top
                          , o = M.getDocumentScrollTop()
                          , s = window.innerHeight
                          , a = e * ((o + s - i) / (t + s));
                        this._enabled ? n > o && i < o + s && (this.$img[0].style.transform = "translate3D(-50%, " + a + "px, 0)") : this.$img[0].style.transform = ""
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return o(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Parallax
                    }
                }, {
                    key: "_handleScroll",
                    value: function() {
                        for (var t = 0; t < i._parallaxes.length; t++) {
                            var e = i._parallaxes[t];
                            e._updateParallax.call(e)
                        }
                    }
                }, {
                    key: "_handleWindowResize",
                    value: function() {
                        for (var t = 0; t < i._parallaxes.length; t++) {
                            var e = i._parallaxes[t];
                            e._enabled = window.innerWidth > e.options.responsiveThreshold
                        }
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return e
                    }
                }]),
                i
            }();
            n._parallaxes = [],
            M.Parallax = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "parallax", "M_Parallax")
        }(cash),
        function(t, e) {
            "use strict";
            var n = {
                duration: 300,
                onShow: null,
                swipeable: !1,
                responsiveThreshold: 1 / 0
            }
              , i = function(i) {
                function c(e, n) {
                    l(this, c);
                    var i = a(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, c, e, n));
                    return i.el.M_Tabs = i,
                    i.options = t.extend({}, c.defaults, n),
                    i.$tabLinks = i.$el.children("li.tab").children("a"),
                    i.index = 0,
                    i._setupActiveTabLink(),
                    i.options.swipeable ? i._setupSwipeableTabs() : i._setupNormalTabs(),
                    i._setTabsAndTabWidth(),
                    i._createIndicator(),
                    i._setupEventHandlers(),
                    i
                }
                return r(c, u),
                s(c, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this._indicator.parentNode.removeChild(this._indicator),
                        this.options.swipeable ? this._teardownSwipeableTabs() : this._teardownNormalTabs(),
                        this.$el[0].M_Tabs = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleWindowResizeBound = this._handleWindowResize.bind(this),
                        window.addEventListener("resize", this._handleWindowResizeBound),
                        this._handleTabClickBound = this._handleTabClick.bind(this),
                        this.el.addEventListener("click", this._handleTabClickBound)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        window.removeEventListener("resize", this._handleWindowResizeBound),
                        this.el.removeEventListener("click", this._handleTabClickBound)
                    }
                }, {
                    key: "_handleWindowResize",
                    value: function() {
                        this._setTabsAndTabWidth(),
                        0 !== this.tabWidth && 0 !== this.tabsWidth && (this._indicator.style.left = this._calcLeftPos(this.$activeTabLink) + "px",
                        this._indicator.style.right = this._calcRightPos(this.$activeTabLink) + "px")
                    }
                }, {
                    key: "_handleTabClick",
                    value: function(e) {
                        var n = this
                          , i = t(e.target).closest("li.tab")
                          , o = t(e.target).closest("a");
                        if (o.length && o.parent().hasClass("tab"))
                            if (i.hasClass("disabled"))
                                e.preventDefault();
                            else if (!o.attr("target")) {
                                this.$activeTabLink.removeClass("active");
                                var s = this.$content;
                                this.$activeTabLink = o,
                                this.$content = t(M.escapeHash(o[0].hash)),
                                this.$tabLinks = this.$el.children("li.tab").children("a"),
                                this.$activeTabLink.addClass("active");
                                var a = this.index;
                                this.index = Math.max(this.$tabLinks.index(o), 0),
                                this.options.swipeable ? this._tabsCarousel && this._tabsCarousel.set(this.index, function() {
                                    "function" == typeof n.options.onShow && n.options.onShow.call(n, n.$content[0])
                                }) : this.$content.length && (this.$content[0].style.display = "block",
                                this.$content.addClass("active"),
                                "function" == typeof this.options.onShow && this.options.onShow.call(this, this.$content[0]),
                                s.length && !s.is(this.$content) && (s[0].style.display = "none",
                                s.removeClass("active"))),
                                this._setTabsAndTabWidth(),
                                this._animateIndicator(a),
                                e.preventDefault()
                            }
                    }
                }, {
                    key: "_createIndicator",
                    value: function() {
                        var t = this
                          , e = document.createElement("li");
                        e.classList.add("indicator"),
                        this.el.appendChild(e),
                        this._indicator = e,
                        setTimeout(function() {
                            t._indicator.style.left = t._calcLeftPos(t.$activeTabLink) + "px",
                            t._indicator.style.right = t._calcRightPos(t.$activeTabLink) + "px"
                        }, 0)
                    }
                }, {
                    key: "_setupActiveTabLink",
                    value: function() {
                        this.$activeTabLink = t(this.$tabLinks.filter('[href="' + location.hash + '"]')),
                        0 === this.$activeTabLink.length && (this.$activeTabLink = this.$el.children("li.tab").children("a.active").first()),
                        0 === this.$activeTabLink.length && (this.$activeTabLink = this.$el.children("li.tab").children("a").first()),
                        this.$tabLinks.removeClass("active"),
                        this.$activeTabLink[0].classList.add("active"),
                        this.index = Math.max(this.$tabLinks.index(this.$activeTabLink), 0),
                        this.$activeTabLink.length && (this.$content = t(M.escapeHash(this.$activeTabLink[0].hash)),
                        this.$content.addClass("active"))
                    }
                }, {
                    key: "_setupSwipeableTabs",
                    value: function() {
                        var e = this;
                        window.innerWidth > this.options.responsiveThreshold && (this.options.swipeable = !1);
                        var n = t();
                        this.$tabLinks.each(function(e) {
                            var i = t(M.escapeHash(e.hash));
                            i.addClass("carousel-item"),
                            n = n.add(i)
                        });
                        var i = t('<div class="tabs-content carousel carousel-slider"></div>');
                        n.first().before(i),
                        i.append(n),
                        n[0].style.display = "";
                        var o = this.$activeTabLink.closest(".tab").index();
                        this._tabsCarousel = M.Carousel.init(i[0], {
                            fullWidth: !0,
                            noWrap: !0,
                            onCycleTo: function(n) {
                                var i = e.index;
                                e.index = t(n).index(),
                                e.$activeTabLink.removeClass("active"),
                                e.$activeTabLink = e.$tabLinks.eq(e.index),
                                e.$activeTabLink.addClass("active"),
                                e._animateIndicator(i),
                                "function" == typeof e.options.onShow && e.options.onShow.call(e, e.$content[0])
                            }
                        }),
                        this._tabsCarousel.set(o)
                    }
                }, {
                    key: "_teardownSwipeableTabs",
                    value: function() {
                        var t = this._tabsCarousel.$el;
                        this._tabsCarousel.destroy(),
                        t.after(t.children()),
                        t.remove()
                    }
                }, {
                    key: "_setupNormalTabs",
                    value: function() {
                        this.$tabLinks.not(this.$activeTabLink).each(function(e) {
                            if (e.hash) {
                                var n = t(M.escapeHash(e.hash));
                                n.length && (n[0].style.display = "none")
                            }
                        })
                    }
                }, {
                    key: "_teardownNormalTabs",
                    value: function() {
                        this.$tabLinks.each(function(e) {
                            if (e.hash) {
                                var n = t(M.escapeHash(e.hash));
                                n.length && (n[0].style.display = "")
                            }
                        })
                    }
                }, {
                    key: "_setTabsAndTabWidth",
                    value: function() {
                        this.tabsWidth = this.$el.width(),
                        this.tabWidth = Math.max(this.tabsWidth, this.el.scrollWidth) / this.$tabLinks.length
                    }
                }, {
                    key: "_calcRightPos",
                    value: function(t) {
                        return Math.ceil(this.tabsWidth - t.position().left - t[0].getBoundingClientRect().width)
                    }
                }, {
                    key: "_calcLeftPos",
                    value: function(t) {
                        return Math.floor(t.position().left)
                    }
                }, {
                    key: "updateTabIndicator",
                    value: function() {
                        this._setTabsAndTabWidth(),
                        this._animateIndicator(this.index)
                    }
                }, {
                    key: "_animateIndicator",
                    value: function(t) {
                        var n = 0
                          , i = 0;
                        this.index - t >= 0 ? n = 90 : i = 90;
                        var o = {
                            targets: this._indicator,
                            left: {
                                value: this._calcLeftPos(this.$activeTabLink),
                                delay: n
                            },
                            right: {
                                value: this._calcRightPos(this.$activeTabLink),
                                delay: i
                            },
                            duration: this.options.duration,
                            easing: "easeOutQuad"
                        };
                        e.remove(this._indicator),
                        e(o)
                    }
                }, {
                    key: "select",
                    value: function(t) {
                        var e = this.$tabLinks.filter('[href="#' + t + '"]');
                        e.length && e.trigger("click")
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return o(c.__proto__ || Object.getPrototypeOf(c), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Tabs
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return n
                    }
                }]),
                c
            }();
            window.M.Tabs = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "tabs", "M_Tabs")
        }(cash, M.anime),
        function(t, e) {
            "use strict";
            var n = {
                exitDelay: 200,
                enterDelay: 0,
                html: null,
                margin: 5,
                inDuration: 250,
                outDuration: 200,
                position: "bottom",
                transitionMovement: 10
            }
              , i = function(i) {
                function c(e, n) {
                    l(this, c);
                    var i = a(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, c, e, n));
                    return i.el.M_Tooltip = i,
                    i.options = t.extend({}, c.defaults, n),
                    i.isOpen = !1,
                    i.isHovered = !1,
                    i.isFocused = !1,
                    i._appendTooltipEl(),
                    i._setupEventHandlers(),
                    i
                }
                return r(c, u),
                s(c, [{
                    key: "destroy",
                    value: function() {
                        t(this.tooltipEl).remove(),
                        this._removeEventHandlers(),
                        this.el.M_Tooltip = void 0
                    }
                }, {
                    key: "_appendTooltipEl",
                    value: function() {
                        var t = document.createElement("div");
                        t.classList.add("material-tooltip"),
                        this.tooltipEl = t;
                        var e = document.createElement("div");
                        e.classList.add("tooltip-content"),
                        e.innerHTML = this.options.html,
                        t.appendChild(e),
                        document.body.appendChild(t)
                    }
                }, {
                    key: "_updateTooltipContent",
                    value: function() {
                        this.tooltipEl.querySelector(".tooltip-content").innerHTML = this.options.html
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleMouseEnterBound = this._handleMouseEnter.bind(this),
                        this._handleMouseLeaveBound = this._handleMouseLeave.bind(this),
                        this._handleFocusBound = this._handleFocus.bind(this),
                        this._handleBlurBound = this._handleBlur.bind(this),
                        this.el.addEventListener("mouseenter", this._handleMouseEnterBound),
                        this.el.addEventListener("mouseleave", this._handleMouseLeaveBound),
                        this.el.addEventListener("focus", this._handleFocusBound, !0),
                        this.el.addEventListener("blur", this._handleBlurBound, !0)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        this.el.removeEventListener("mouseenter", this._handleMouseEnterBound),
                        this.el.removeEventListener("mouseleave", this._handleMouseLeaveBound),
                        this.el.removeEventListener("focus", this._handleFocusBound, !0),
                        this.el.removeEventListener("blur", this._handleBlurBound, !0)
                    }
                }, {
                    key: "open",
                    value: function(e) {
                        this.isOpen || (e = void 0 === e || void 0,
                        this.isOpen = !0,
                        this.options = t.extend({}, this.options, this._getAttributeOptions()),
                        this._updateTooltipContent(),
                        this._setEnterDelayTimeout(e))
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.isOpen && (this.isHovered = !1,
                        this.isFocused = !1,
                        this.isOpen = !1,
                        this._setExitDelayTimeout())
                    }
                }, {
                    key: "_setExitDelayTimeout",
                    value: function() {
                        var t = this;
                        clearTimeout(this._exitDelayTimeout),
                        this._exitDelayTimeout = setTimeout(function() {
                            t.isHovered || t.isFocused || t._animateOut()
                        }, this.options.exitDelay)
                    }
                }, {
                    key: "_setEnterDelayTimeout",
                    value: function(t) {
                        var e = this;
                        clearTimeout(this._enterDelayTimeout),
                        this._enterDelayTimeout = setTimeout(function() {
                            (e.isHovered || e.isFocused || t) && e._animateIn()
                        }, this.options.enterDelay)
                    }
                }, {
                    key: "_positionTooltip",
                    value: function() {
                        var e, n = this.el, i = this.tooltipEl, o = n.offsetHeight, s = n.offsetWidth, a = i.offsetHeight, r = i.offsetWidth, l = this.options.margin, u = void 0, c = void 0;
                        this.xMovement = 0,
                        this.yMovement = 0,
                        u = n.getBoundingClientRect().top + M.getDocumentScrollTop(),
                        c = n.getBoundingClientRect().left + M.getDocumentScrollLeft(),
                        "top" === this.options.position ? (u += -a - l,
                        c += s / 2 - r / 2,
                        this.yMovement = -this.options.transitionMovement) : "right" === this.options.position ? (u += o / 2 - a / 2,
                        c += s + l,
                        this.xMovement = this.options.transitionMovement) : "left" === this.options.position ? (u += o / 2 - a / 2,
                        c += -r - l,
                        this.xMovement = -this.options.transitionMovement) : (u += o + l,
                        c += s / 2 - r / 2,
                        this.yMovement = this.options.transitionMovement),
                        e = this._repositionWithinScreen(c, u, r, a),
                        t(i).css({
                            top: e.y + "px",
                            left: e.x + "px"
                        })
                    }
                }, {
                    key: "_repositionWithinScreen",
                    value: function(t, e, n, i) {
                        var o = M.getDocumentScrollLeft()
                          , s = M.getDocumentScrollTop()
                          , a = t - o
                          , r = e - s
                          , l = {
                            left: a,
                            top: r,
                            width: n,
                            height: i
                        }
                          , u = this.options.margin + this.options.transitionMovement
                          , c = M.checkWithinContainer(document.body, l, u);
                        return c.left ? a = u : c.right && (a -= a + n - window.innerWidth),
                        c.top ? r = u : c.bottom && (r -= r + i - window.innerHeight),
                        {
                            x: a + o,
                            y: r + s
                        }
                    }
                }, {
                    key: "_animateIn",
                    value: function() {
                        this._positionTooltip(),
                        this.tooltipEl.style.visibility = "visible",
                        e.remove(this.tooltipEl),
                        e({
                            targets: this.tooltipEl,
                            opacity: 1,
                            translateX: this.xMovement,
                            translateY: this.yMovement,
                            duration: this.options.inDuration,
                            easing: "easeOutCubic"
                        })
                    }
                }, {
                    key: "_animateOut",
                    value: function() {
                        e.remove(this.tooltipEl),
                        e({
                            targets: this.tooltipEl,
                            opacity: 0,
                            translateX: 0,
                            translateY: 0,
                            duration: this.options.outDuration,
                            easing: "easeOutCubic"
                        })
                    }
                }, {
                    key: "_handleMouseEnter",
                    value: function() {
                        this.isHovered = !0,
                        this.isFocused = !1,
                        this.open(!1)
                    }
                }, {
                    key: "_handleMouseLeave",
                    value: function() {
                        this.isHovered = !1,
                        this.isFocused = !1,
                        this.close()
                    }
                }, {
                    key: "_handleFocus",
                    value: function() {
                        M.tabPressed && (this.isFocused = !0,
                        this.open(!1))
                    }
                }, {
                    key: "_handleBlur",
                    value: function() {
                        this.isFocused = !1,
                        this.close()
                    }
                }, {
                    key: "_getAttributeOptions",
                    value: function() {
                        var t = {}
                          , e = this.el.getAttribute("data-tooltip")
                          , n = this.el.getAttribute("data-position");
                        return e && (t.html = e),
                        n && (t.position = n),
                        t
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return o(c.__proto__ || Object.getPrototypeOf(c), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Tooltip
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return n
                    }
                }]),
                c
            }();
            M.Tooltip = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "tooltip", "M_Tooltip")
        }(cash, M.anime),
        function(t) {
            "use strict";
            var e = e || {}
              , n = document.querySelectorAll.bind(document);
            function i(t) {
                var e = "";
                for (var n in t)
                    t.hasOwnProperty(n) && (e += n + ":" + t[n] + ";");
                return e
            }
            var o = {
                duration: 750,
                show: function(t, e) {
                    if (2 === t.button)
                        return !1;
                    var n = e || this
                      , s = document.createElement("div");
                    s.className = "waves-ripple",
                    n.appendChild(s);
                    var a, r, l, u, c, h = (u = {
                        top: 0,
                        left: 0
                    },
                    c = (a = n) && a.ownerDocument,
                    r = c.documentElement,
                    void 0 !== a.getBoundingClientRect && (u = a.getBoundingClientRect()),
                    l = function(t) {
                        return null !== (e = t) && e === e.window ? t : 9 === t.nodeType && t.defaultView;
                        var e
                    }(c),
                    {
                        top: u.top + l.pageYOffset - r.clientTop,
                        left: u.left + l.pageXOffset - r.clientLeft
                    }), d = t.pageY - h.top, p = t.pageX - h.left, f = "scale(" + n.clientWidth / 100 * 10 + ")";
                    "touches"in t && (d = t.touches[0].pageY - h.top,
                    p = t.touches[0].pageX - h.left),
                    s.setAttribute("data-hold", Date.now()),
                    s.setAttribute("data-scale", f),
                    s.setAttribute("data-x", p),
                    s.setAttribute("data-y", d);
                    var v = {
                        top: d + "px",
                        left: p + "px"
                    };
                    s.className = s.className + " waves-notransition",
                    s.setAttribute("style", i(v)),
                    s.className = s.className.replace("waves-notransition", ""),
                    v["-webkit-transform"] = f,
                    v["-moz-transform"] = f,
                    v["-ms-transform"] = f,
                    v["-o-transform"] = f,
                    v.transform = f,
                    v.opacity = "1",
                    v["-webkit-transition-duration"] = o.duration + "ms",
                    v["-moz-transition-duration"] = o.duration + "ms",
                    v["-o-transition-duration"] = o.duration + "ms",
                    v["transition-duration"] = o.duration + "ms",
                    v["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                    v["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                    v["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                    v["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                    s.setAttribute("style", i(v))
                },
                hide: function(t) {
                    s.touchup(t);
                    var e = this
                      , n = (e.clientWidth,
                    null)
                      , a = e.getElementsByClassName("waves-ripple");
                    if (!(a.length > 0))
                        return !1;
                    var r = (n = a[a.length - 1]).getAttribute("data-x")
                      , l = n.getAttribute("data-y")
                      , u = n.getAttribute("data-scale")
                      , c = 350 - (Date.now() - Number(n.getAttribute("data-hold")));
                    c < 0 && (c = 0),
                    setTimeout(function() {
                        var t = {
                            top: l + "px",
                            left: r + "px",
                            opacity: "0",
                            "-webkit-transition-duration": o.duration + "ms",
                            "-moz-transition-duration": o.duration + "ms",
                            "-o-transition-duration": o.duration + "ms",
                            "transition-duration": o.duration + "ms",
                            "-webkit-transform": u,
                            "-moz-transform": u,
                            "-ms-transform": u,
                            "-o-transform": u,
                            transform: u
                        };
                        n.setAttribute("style", i(t)),
                        setTimeout(function() {
                            try {
                                e.removeChild(n)
                            } catch (t) {
                                return !1
                            }
                        }, o.duration)
                    }, c)
                },
                wrapInput: function(t) {
                    for (var e = 0; e < t.length; e++) {
                        var n = t[e];
                        if ("input" === n.tagName.toLowerCase()) {
                            var i = n.parentNode;
                            if ("i" === i.tagName.toLowerCase() && -1 !== i.className.indexOf("waves-effect"))
                                continue;
                            var o = document.createElement("i");
                            o.className = n.className + " waves-input-wrapper";
                            var s = n.getAttribute("style");
                            s || (s = ""),
                            o.setAttribute("style", s),
                            n.className = "waves-button-input",
                            n.removeAttribute("style"),
                            i.replaceChild(o, n),
                            o.appendChild(n)
                        }
                    }
                }
            }
              , s = {
                touches: 0,
                allowEvent: function(t) {
                    var e = !0;
                    return "touchstart" === t.type ? s.touches += 1 : "touchend" === t.type || "touchcancel" === t.type ? setTimeout(function() {
                        s.touches > 0 && (s.touches -= 1)
                    }, 500) : "mousedown" === t.type && s.touches > 0 && (e = !1),
                    e
                },
                touchup: function(t) {
                    s.allowEvent(t)
                }
            };
            function a(e) {
                var n = function(t) {
                    if (!1 === s.allowEvent(t))
                        return null;
                    for (var e = null, n = t.target || t.srcElement; null !== n.parentNode; ) {
                        if (!(n instanceof SVGElement) && -1 !== n.className.indexOf("waves-effect")) {
                            e = n;
                            break
                        }
                        n = n.parentNode
                    }
                    return e
                }(e);
                null !== n && (o.show(e, n),
                "ontouchstart"in t && (n.addEventListener("touchend", o.hide, !1),
                n.addEventListener("touchcancel", o.hide, !1)),
                n.addEventListener("mouseup", o.hide, !1),
                n.addEventListener("mouseleave", o.hide, !1),
                n.addEventListener("dragend", o.hide, !1))
            }
            e.displayEffect = function(e) {
                "duration"in (e = e || {}) && (o.duration = e.duration),
                o.wrapInput(n(".waves-effect")),
                "ontouchstart"in t && document.body.addEventListener("touchstart", a, !1),
                document.body.addEventListener("mousedown", a, !1)
            }
            ,
            e.attach = function(e) {
                "input" === e.tagName.toLowerCase() && (o.wrapInput([e]),
                e = e.parentNode),
                "ontouchstart"in t && e.addEventListener("touchstart", a, !1),
                e.addEventListener("mousedown", a, !1)
            }
            ,
            t.Waves = e,
            document.addEventListener("DOMContentLoaded", function() {
                e.displayEffect()
            }, !1)
        }(window),
        function(t, e) {
            "use strict";
            var n = {
                html: "",
                displayLength: 4e3,
                inDuration: 300,
                outDuration: 375,
                classes: "",
                completeCallback: null,
                activationPercent: .8
            }
              , i = function() {
                function i(e) {
                    l(this, i),
                    this.options = t.extend({}, i.defaults, e),
                    this.message = this.options.html,
                    this.panning = !1,
                    this.timeRemaining = this.options.displayLength,
                    0 === i._toasts.length && i._createContainer(),
                    i._toasts.push(this);
                    var n = this._createToast();
                    n.M_Toast = this,
                    this.el = n,
                    this.$el = t(n),
                    this._animateIn(),
                    this._setTimer()
                }
                return s(i, [{
                    key: "_createToast",
                    value: function() {
                        var e = document.createElement("div");
                        return e.classList.add("toast"),
                        this.options.classes.length && t(e).addClass(this.options.classes),
                        ("object" == typeof HTMLElement ? this.message instanceof HTMLElement : this.message && "object" == typeof this.message && null !== this.message && 1 === this.message.nodeType && "string" == typeof this.message.nodeName) ? e.appendChild(this.message) : this.message.jquery ? t(e).append(this.message[0]) : e.innerHTML = this.message,
                        i._container.appendChild(e),
                        e
                    }
                }, {
                    key: "_animateIn",
                    value: function() {
                        e({
                            targets: this.el,
                            top: 0,
                            opacity: 1,
                            duration: this.options.inDuration,
                            easing: "easeOutCubic"
                        })
                    }
                }, {
                    key: "_setTimer",
                    value: function() {
                        var t = this;
                        this.timeRemaining !== 1 / 0 && (this.counterInterval = setInterval(function() {
                            t.panning || (t.timeRemaining -= 20),
                            t.timeRemaining <= 0 && t.dismiss()
                        }, 20))
                    }
                }, {
                    key: "dismiss",
                    value: function() {
                        var t = this;
                        window.clearInterval(this.counterInterval);
                        var n = this.el.offsetWidth * this.options.activationPercent;
                        this.wasSwiped && (this.el.style.transition = "transform .05s, opacity .05s",
                        this.el.style.transform = "translateX(" + n + "px)",
                        this.el.style.opacity = 0),
                        e({
                            targets: this.el,
                            opacity: 0,
                            marginTop: -40,
                            duration: this.options.outDuration,
                            easing: "easeOutExpo",
                            complete: function() {
                                "function" == typeof t.options.completeCallback && t.options.completeCallback(),
                                t.$el.remove(),
                                i._toasts.splice(i._toasts.indexOf(t), 1),
                                0 === i._toasts.length && i._removeContainer()
                            }
                        })
                    }
                }], [{
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Toast
                    }
                }, {
                    key: "_createContainer",
                    value: function() {
                        var t = document.createElement("div");
                        t.setAttribute("id", "toast-container"),
                        t.addEventListener("touchstart", i._onDragStart),
                        t.addEventListener("touchmove", i._onDragMove),
                        t.addEventListener("touchend", i._onDragEnd),
                        t.addEventListener("mousedown", i._onDragStart),
                        document.addEventListener("mousemove", i._onDragMove),
                        document.addEventListener("mouseup", i._onDragEnd),
                        document.body.appendChild(t),
                        i._container = t
                    }
                }, {
                    key: "_removeContainer",
                    value: function() {
                        document.removeEventListener("mousemove", i._onDragMove),
                        document.removeEventListener("mouseup", i._onDragEnd),
                        t(i._container).remove(),
                        i._container = null
                    }
                }, {
                    key: "_onDragStart",
                    value: function(e) {
                        if (e.target && t(e.target).closest(".toast").length) {
                            var n = t(e.target).closest(".toast")[0].M_Toast;
                            n.panning = !0,
                            i._draggedToast = n,
                            n.el.classList.add("panning"),
                            n.el.style.transition = "",
                            n.startingXPos = i._xPos(e),
                            n.time = Date.now(),
                            n.xPos = i._xPos(e)
                        }
                    }
                }, {
                    key: "_onDragMove",
                    value: function(t) {
                        if (i._draggedToast) {
                            t.preventDefault();
                            var e = i._draggedToast;
                            e.deltaX = Math.abs(e.xPos - i._xPos(t)),
                            e.xPos = i._xPos(t),
                            e.velocityX = e.deltaX / (Date.now() - e.time),
                            e.time = Date.now();
                            var n = e.xPos - e.startingXPos
                              , o = e.el.offsetWidth * e.options.activationPercent;
                            e.el.style.transform = "translateX(" + n + "px)",
                            e.el.style.opacity = 1 - Math.abs(n / o)
                        }
                    }
                }, {
                    key: "_onDragEnd",
                    value: function() {
                        if (i._draggedToast) {
                            var t = i._draggedToast;
                            t.panning = !1,
                            t.el.classList.remove("panning");
                            var e = t.xPos - t.startingXPos
                              , n = t.el.offsetWidth * t.options.activationPercent;
                            Math.abs(e) > n || t.velocityX > 1 ? (t.wasSwiped = !0,
                            t.dismiss()) : (t.el.style.transition = "transform .2s, opacity .2s",
                            t.el.style.transform = "",
                            t.el.style.opacity = ""),
                            i._draggedToast = null
                        }
                    }
                }, {
                    key: "_xPos",
                    value: function(t) {
                        return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientX : t.clientX
                    }
                }, {
                    key: "dismissAll",
                    value: function() {
                        for (var t in i._toasts)
                            i._toasts[t].dismiss()
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return n
                    }
                }]),
                i
            }();
            i._toasts = [],
            i._container = null,
            i._draggedToast = null,
            M.Toast = i,
            M.toast = function(t) {
                return new i(t)
            }
        }(cash, M.anime),
        function(t, e) {
            "use strict";
            var n = {
                edge: "left",
                draggable: !0,
                inDuration: 250,
                outDuration: 200,
                onOpenStart: null,
                onOpenEnd: null,
                onCloseStart: null,
                onCloseEnd: null,
                preventScrolling: !0
            }
              , i = function(i) {
                function c(e, n) {
                    l(this, c);
                    var i = a(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, c, e, n));
                    return i.el.M_Sidenav = i,
                    i.id = i.$el.attr("id"),
                    i.options = t.extend({}, c.defaults, n),
                    i.isOpen = !1,
                    i.isFixed = i.el.classList.contains("sidenav-fixed"),
                    i.isDragged = !1,
                    i.lastWindowWidth = window.innerWidth,
                    i.lastWindowHeight = window.innerHeight,
                    i._createOverlay(),
                    i._createDragTarget(),
                    i._setupEventHandlers(),
                    i._setupClasses(),
                    i._setupFixed(),
                    c._sidenavs.push(i),
                    i
                }
                return r(c, u),
                s(c, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this._enableBodyScrolling(),
                        this._overlay.parentNode.removeChild(this._overlay),
                        this.dragTarget.parentNode.removeChild(this.dragTarget),
                        this.el.M_Sidenav = void 0,
                        this.el.style.transform = "";
                        var t = c._sidenavs.indexOf(this);
                        t >= 0 && c._sidenavs.splice(t, 1)
                    }
                }, {
                    key: "_createOverlay",
                    value: function() {
                        var t = document.createElement("div");
                        this._closeBound = this.close.bind(this),
                        t.classList.add("sidenav-overlay"),
                        t.addEventListener("click", this._closeBound),
                        document.body.appendChild(t),
                        this._overlay = t
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        0 === c._sidenavs.length && document.body.addEventListener("click", this._handleTriggerClick),
                        this._handleDragTargetDragBound = this._handleDragTargetDrag.bind(this),
                        this._handleDragTargetReleaseBound = this._handleDragTargetRelease.bind(this),
                        this._handleCloseDragBound = this._handleCloseDrag.bind(this),
                        this._handleCloseReleaseBound = this._handleCloseRelease.bind(this),
                        this._handleCloseTriggerClickBound = this._handleCloseTriggerClick.bind(this),
                        this.dragTarget.addEventListener("touchmove", this._handleDragTargetDragBound),
                        this.dragTarget.addEventListener("touchend", this._handleDragTargetReleaseBound),
                        this._overlay.addEventListener("touchmove", this._handleCloseDragBound),
                        this._overlay.addEventListener("touchend", this._handleCloseReleaseBound),
                        this.el.addEventListener("touchmove", this._handleCloseDragBound),
                        this.el.addEventListener("touchend", this._handleCloseReleaseBound),
                        this.el.addEventListener("click", this._handleCloseTriggerClickBound),
                        this.isFixed && (this._handleWindowResizeBound = this._handleWindowResize.bind(this),
                        window.addEventListener("resize", this._handleWindowResizeBound))
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        1 === c._sidenavs.length && document.body.removeEventListener("click", this._handleTriggerClick),
                        this.dragTarget.removeEventListener("touchmove", this._handleDragTargetDragBound),
                        this.dragTarget.removeEventListener("touchend", this._handleDragTargetReleaseBound),
                        this._overlay.removeEventListener("touchmove", this._handleCloseDragBound),
                        this._overlay.removeEventListener("touchend", this._handleCloseReleaseBound),
                        this.el.removeEventListener("touchmove", this._handleCloseDragBound),
                        this.el.removeEventListener("touchend", this._handleCloseReleaseBound),
                        this.el.removeEventListener("click", this._handleCloseTriggerClickBound),
                        this.isFixed && window.removeEventListener("resize", this._handleWindowResizeBound)
                    }
                }, {
                    key: "_handleTriggerClick",
                    value: function(e) {
                        var n = t(e.target).closest(".sidenav-trigger");
                        if (e.target && n.length) {
                            var i = M.getIdFromTrigger(n[0])
                              , o = document.getElementById(i).M_Sidenav;
                            o && o.open(n),
                            e.preventDefault()
                        }
                    }
                }, {
                    key: "_startDrag",
                    value: function(t) {
                        var n = t.targetTouches[0].clientX;
                        this.isDragged = !0,
                        this._startingXpos = n,
                        this._xPos = this._startingXpos,
                        this._time = Date.now(),
                        this._width = this.el.getBoundingClientRect().width,
                        this._overlay.style.display = "block",
                        this._initialScrollTop = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop(),
                        this._verticallyScrolling = !1,
                        e.remove(this.el),
                        e.remove(this._overlay)
                    }
                }, {
                    key: "_dragMoveUpdate",
                    value: function(t) {
                        var e = t.targetTouches[0].clientX
                          , n = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop();
                        this.deltaX = Math.abs(this._xPos - e),
                        this._xPos = e,
                        this.velocityX = this.deltaX / (Date.now() - this._time),
                        this._time = Date.now(),
                        this._initialScrollTop !== n && (this._verticallyScrolling = !0)
                    }
                }, {
                    key: "_handleDragTargetDrag",
                    value: function(t) {
                        if (this.options.draggable && !this._isCurrentlyFixed() && !this._verticallyScrolling) {
                            this.isDragged || this._startDrag(t),
                            this._dragMoveUpdate(t);
                            var e = this._xPos - this._startingXpos
                              , n = e > 0 ? "right" : "left";
                            e = Math.min(this._width, Math.abs(e)),
                            this.options.edge === n && (e = 0);
                            var i = e
                              , o = "translateX(-100%)";
                            "right" === this.options.edge && (o = "translateX(100%)",
                            i = -i),
                            this.percentOpen = Math.min(1, e / this._width),
                            this.el.style.transform = o + " translateX(" + i + "px)",
                            this._overlay.style.opacity = this.percentOpen
                        }
                    }
                }, {
                    key: "_handleDragTargetRelease",
                    value: function() {
                        this.isDragged && (this.percentOpen > .2 ? this.open() : this._animateOut(),
                        this.isDragged = !1,
                        this._verticallyScrolling = !1)
                    }
                }, {
                    key: "_handleCloseDrag",
                    value: function(t) {
                        if (this.isOpen) {
                            if (!this.options.draggable || this._isCurrentlyFixed() || this._verticallyScrolling)
                                return;
                            this.isDragged || this._startDrag(t),
                            this._dragMoveUpdate(t);
                            var e = this._xPos - this._startingXpos
                              , n = e > 0 ? "right" : "left";
                            e = Math.min(this._width, Math.abs(e)),
                            this.options.edge !== n && (e = 0);
                            var i = -e;
                            "right" === this.options.edge && (i = -i),
                            this.percentOpen = Math.min(1, 1 - e / this._width),
                            this.el.style.transform = "translateX(" + i + "px)",
                            this._overlay.style.opacity = this.percentOpen
                        }
                    }
                }, {
                    key: "_handleCloseRelease",
                    value: function() {
                        this.isOpen && this.isDragged && (this.percentOpen > .8 ? this._animateIn() : this.close(),
                        this.isDragged = !1,
                        this._verticallyScrolling = !1)
                    }
                }, {
                    key: "_handleCloseTriggerClick",
                    value: function(e) {
                        t(e.target).closest(".sidenav-close").length && !this._isCurrentlyFixed() && this.close()
                    }
                }, {
                    key: "_handleWindowResize",
                    value: function() {
                        this.lastWindowWidth !== window.innerWidth && (window.innerWidth > 992 ? this.open() : this.close()),
                        this.lastWindowWidth = window.innerWidth,
                        this.lastWindowHeight = window.innerHeight
                    }
                }, {
                    key: "_setupClasses",
                    value: function() {
                        "right" === this.options.edge && (this.el.classList.add("right-aligned"),
                        this.dragTarget.classList.add("right-aligned"))
                    }
                }, {
                    key: "_removeClasses",
                    value: function() {
                        this.el.classList.remove("right-aligned"),
                        this.dragTarget.classList.remove("right-aligned")
                    }
                }, {
                    key: "_setupFixed",
                    value: function() {
                        this._isCurrentlyFixed() && this.open()
                    }
                }, {
                    key: "_isCurrentlyFixed",
                    value: function() {
                        return this.isFixed && window.innerWidth > 992
                    }
                }, {
                    key: "_createDragTarget",
                    value: function() {
                        var t = document.createElement("div");
                        t.classList.add("drag-target"),
                        document.body.appendChild(t),
                        this.dragTarget = t
                    }
                }, {
                    key: "_preventBodyScrolling",
                    value: function() {
                        document.body.style.overflow = "hidden"
                    }
                }, {
                    key: "_enableBodyScrolling",
                    value: function() {
                        document.body.style.overflow = ""
                    }
                }, {
                    key: "open",
                    value: function() {
                        !0 !== this.isOpen && (this.isOpen = !0,
                        "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el),
                        this._isCurrentlyFixed() ? (e.remove(this.el),
                        e({
                            targets: this.el,
                            translateX: 0,
                            duration: 0,
                            easing: "easeOutQuad"
                        }),
                        this._enableBodyScrolling(),
                        this._overlay.style.display = "none") : (this.options.preventScrolling && this._preventBodyScrolling(),
                        this.isDragged && 1 == this.percentOpen || this._animateIn()))
                    }
                }, {
                    key: "close",
                    value: function() {
                        if (!1 !== this.isOpen)
                            if (this.isOpen = !1,
                            "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el),
                            this._isCurrentlyFixed()) {
                                var t = "left" === this.options.edge ? "-105%" : "105%";
                                this.el.style.transform = "translateX(" + t + ")"
                            } else
                                this._enableBodyScrolling(),
                                this.isDragged && 0 == this.percentOpen ? this._overlay.style.display = "none" : this._animateOut()
                    }
                }, {
                    key: "_animateIn",
                    value: function() {
                        this._animateSidenavIn(),
                        this._animateOverlayIn()
                    }
                }, {
                    key: "_animateSidenavIn",
                    value: function() {
                        var t = this
                          , n = "left" === this.options.edge ? -1 : 1;
                        this.isDragged && (n = "left" === this.options.edge ? n + this.percentOpen : n - this.percentOpen),
                        e.remove(this.el),
                        e({
                            targets: this.el,
                            translateX: [100 * n + "%", 0],
                            duration: this.options.inDuration,
                            easing: "easeOutQuad",
                            complete: function() {
                                "function" == typeof t.options.onOpenEnd && t.options.onOpenEnd.call(t, t.el)
                            }
                        })
                    }
                }, {
                    key: "_animateOverlayIn",
                    value: function() {
                        var n = 0;
                        this.isDragged ? n = this.percentOpen : t(this._overlay).css({
                            display: "block"
                        }),
                        e.remove(this._overlay),
                        e({
                            targets: this._overlay,
                            opacity: [n, 1],
                            duration: this.options.inDuration,
                            easing: "easeOutQuad"
                        })
                    }
                }, {
                    key: "_animateOut",
                    value: function() {
                        this._animateSidenavOut(),
                        this._animateOverlayOut()
                    }
                }, {
                    key: "_animateSidenavOut",
                    value: function() {
                        var t = this
                          , n = "left" === this.options.edge ? -1 : 1
                          , i = 0;
                        this.isDragged && (i = "left" === this.options.edge ? n + this.percentOpen : n - this.percentOpen),
                        e.remove(this.el),
                        e({
                            targets: this.el,
                            translateX: [100 * i + "%", 105 * n + "%"],
                            duration: this.options.outDuration,
                            easing: "easeOutQuad",
                            complete: function() {
                                "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t, t.el)
                            }
                        })
                    }
                }, {
                    key: "_animateOverlayOut",
                    value: function() {
                        var n = this;
                        e.remove(this._overlay),
                        e({
                            targets: this._overlay,
                            opacity: 0,
                            duration: this.options.outDuration,
                            easing: "easeOutQuad",
                            complete: function() {
                                t(n._overlay).css("display", "none")
                            }
                        })
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return o(c.__proto__ || Object.getPrototypeOf(c), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Sidenav
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return n
                    }
                }]),
                c
            }();
            i._sidenavs = [],
            window.M.Sidenav = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "sidenav", "M_Sidenav")
        }(cash, M.anime),
        function(t, e) {
            "use strict";
            var n = {
                throttle: 100,
                scrollOffset: 200,
                activeClass: "active",
                getActiveElement: function(t) {
                    return 'a[href="#' + t + '"]'
                }
            }
              , i = function(i) {
                function c(e, n) {
                    l(this, c);
                    var i = a(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, c, e, n));
                    return i.el.M_ScrollSpy = i,
                    i.options = t.extend({}, c.defaults, n),
                    c._elements.push(i),
                    c._count++,
                    c._increment++,
                    i.tickId = -1,
                    i.id = c._increment,
                    i._setupEventHandlers(),
                    i._handleWindowScroll(),
                    i
                }
                return r(c, u),
                s(c, [{
                    key: "destroy",
                    value: function() {
                        c._elements.splice(c._elements.indexOf(this), 1),
                        c._elementsInView.splice(c._elementsInView.indexOf(this), 1),
                        c._visibleElements.splice(c._visibleElements.indexOf(this.$el), 1),
                        c._count--,
                        this._removeEventHandlers(),
                        t(this.options.getActiveElement(this.$el.attr("id"))).removeClass(this.options.activeClass),
                        this.el.M_ScrollSpy = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        var t = M.throttle(this._handleWindowScroll, 200);
                        this._handleThrottledResizeBound = t.bind(this),
                        this._handleWindowScrollBound = this._handleWindowScroll.bind(this),
                        1 === c._count && (window.addEventListener("scroll", this._handleWindowScrollBound),
                        window.addEventListener("resize", this._handleThrottledResizeBound),
                        document.body.addEventListener("click", this._handleTriggerClick))
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        0 === c._count && (window.removeEventListener("scroll", this._handleWindowScrollBound),
                        window.removeEventListener("resize", this._handleThrottledResizeBound),
                        document.body.removeEventListener("click", this._handleTriggerClick))
                    }
                }, {
                    key: "_handleTriggerClick",
                    value: function(n) {
                        for (var i = t(n.target), o = c._elements.length - 1; o >= 0; o--) {
                            var s = c._elements[o];
                            if (i.is('a[href="#' + s.$el.attr("id") + '"]')) {
                                n.preventDefault();
                                var a = s.$el.offset().top + 1;
                                e({
                                    targets: [document.documentElement, document.body],
                                    scrollTop: a - s.options.scrollOffset,
                                    duration: 400,
                                    easing: "easeOutCubic"
                                });
                                break
                            }
                        }
                    }
                }, {
                    key: "_handleWindowScroll",
                    value: function() {
                        c._ticks++;
                        for (var t = M.getDocumentScrollTop(), e = M.getDocumentScrollLeft(), n = e + window.innerWidth, i = t + window.innerHeight, o = c._findElements(t, n, i, e), s = 0; s < o.length; s++) {
                            var a = o[s];
                            a.tickId < 0 && a._enter(),
                            a.tickId = c._ticks
                        }
                        for (var r = 0; r < c._elementsInView.length; r++) {
                            var l = c._elementsInView[r]
                              , u = l.tickId;
                            u >= 0 && u !== c._ticks && (l._exit(),
                            l.tickId = -1)
                        }
                        c._elementsInView = o
                    }
                }, {
                    key: "_enter",
                    value: function() {
                        c._visibleElements = c._visibleElements.filter(function(t) {
                            return 0 != t.height()
                        }),
                        c._visibleElements[0] ? (t(this.options.getActiveElement(c._visibleElements[0].attr("id"))).removeClass(this.options.activeClass),
                        c._visibleElements[0][0].M_ScrollSpy && this.id < c._visibleElements[0][0].M_ScrollSpy.id ? c._visibleElements.unshift(this.$el) : c._visibleElements.push(this.$el)) : c._visibleElements.push(this.$el),
                        t(this.options.getActiveElement(c._visibleElements[0].attr("id"))).addClass(this.options.activeClass)
                    }
                }, {
                    key: "_exit",
                    value: function() {
                        var e = this;
                        c._visibleElements = c._visibleElements.filter(function(t) {
                            return 0 != t.height()
                        }),
                        c._visibleElements[0] && (t(this.options.getActiveElement(c._visibleElements[0].attr("id"))).removeClass(this.options.activeClass),
                        c._visibleElements = c._visibleElements.filter(function(t) {
                            return t.attr("id") != e.$el.attr("id")
                        }),
                        c._visibleElements[0] && t(this.options.getActiveElement(c._visibleElements[0].attr("id"))).addClass(this.options.activeClass))
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return o(c.__proto__ || Object.getPrototypeOf(c), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_ScrollSpy
                    }
                }, {
                    key: "_findElements",
                    value: function(t, e, n, i) {
                        for (var o = [], s = 0; s < c._elements.length; s++) {
                            var a = c._elements[s]
                              , r = t + a.options.scrollOffset || 200;
                            if (a.$el.height() > 0) {
                                var l = a.$el.offset().top
                                  , u = a.$el.offset().left
                                  , h = u + a.$el.width()
                                  , d = l + a.$el.height();
                                !(u > e || h < i || l > n || d < r) && o.push(a)
                            }
                        }
                        return o
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return n
                    }
                }]),
                c
            }();
            i._elements = [],
            i._elementsInView = [],
            i._visibleElements = [],
            i._count = 0,
            i._increment = 0,
            i._ticks = 0,
            M.ScrollSpy = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "scrollSpy", "M_ScrollSpy")
        }(cash, M.anime),
        function(t) {
            "use strict";
            var e = {
                data: {},
                limit: 1 / 0,
                onAutocomplete: null,
                minLength: 1,
                sortFunction: function(t, e, n) {
                    return t.indexOf(n) - e.indexOf(n)
                }
            }
              , n = function(n) {
                function i(e, n) {
                    l(this, i);
                    var o = a(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, e, n));
                    return o.el.M_Autocomplete = o,
                    o.options = t.extend({}, i.defaults, n),
                    o.isOpen = !1,
                    o.count = 0,
                    o.activeIndex = -1,
                    o.oldVal,
                    o.$inputField = o.$el.closest(".input-field"),
                    o.$active = t(),
                    o._mousedown = !1,
                    o._setupDropdown(),
                    o._setupEventHandlers(),
                    o
                }
                return r(i, u),
                s(i, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this._removeDropdown(),
                        this.el.M_Autocomplete = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleInputBlurBound = this._handleInputBlur.bind(this),
                        this._handleInputKeyupAndFocusBound = this._handleInputKeyupAndFocus.bind(this),
                        this._handleInputKeydownBound = this._handleInputKeydown.bind(this),
                        this._handleInputClickBound = this._handleInputClick.bind(this),
                        this._handleContainerMousedownAndTouchstartBound = this._handleContainerMousedownAndTouchstart.bind(this),
                        this._handleContainerMouseupAndTouchendBound = this._handleContainerMouseupAndTouchend.bind(this),
                        this.el.addEventListener("blur", this._handleInputBlurBound),
                        this.el.addEventListener("keyup", this._handleInputKeyupAndFocusBound),
                        this.el.addEventListener("focus", this._handleInputKeyupAndFocusBound),
                        this.el.addEventListener("keydown", this._handleInputKeydownBound),
                        this.el.addEventListener("click", this._handleInputClickBound),
                        this.container.addEventListener("mousedown", this._handleContainerMousedownAndTouchstartBound),
                        this.container.addEventListener("mouseup", this._handleContainerMouseupAndTouchendBound),
                        void 0 !== window.ontouchstart && (this.container.addEventListener("touchstart", this._handleContainerMousedownAndTouchstartBound),
                        this.container.addEventListener("touchend", this._handleContainerMouseupAndTouchendBound))
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        this.el.removeEventListener("blur", this._handleInputBlurBound),
                        this.el.removeEventListener("keyup", this._handleInputKeyupAndFocusBound),
                        this.el.removeEventListener("focus", this._handleInputKeyupAndFocusBound),
                        this.el.removeEventListener("keydown", this._handleInputKeydownBound),
                        this.el.removeEventListener("click", this._handleInputClickBound),
                        this.container.removeEventListener("mousedown", this._handleContainerMousedownAndTouchstartBound),
                        this.container.removeEventListener("mouseup", this._handleContainerMouseupAndTouchendBound),
                        void 0 !== window.ontouchstart && (this.container.removeEventListener("touchstart", this._handleContainerMousedownAndTouchstartBound),
                        this.container.removeEventListener("touchend", this._handleContainerMouseupAndTouchendBound))
                    }
                }, {
                    key: "_setupDropdown",
                    value: function() {
                        var e = this;
                        this.container = document.createElement("ul"),
                        this.container.id = "autocomplete-options-" + M.guid(),
                        t(this.container).addClass("autocomplete-content dropdown-content"),
                        this.$inputField.append(this.container),
                        this.el.setAttribute("data-target", this.container.id),
                        this.dropdown = M.Dropdown.init(this.el, {
                            autoFocus: !1,
                            closeOnClick: !1,
                            coverTrigger: !1,
                            onItemClick: function(n) {
                                e.selectOption(t(n))
                            }
                        }),
                        this.el.removeEventListener("click", this.dropdown._handleClickBound)
                    }
                }, {
                    key: "_removeDropdown",
                    value: function() {
                        this.container.parentNode.removeChild(this.container)
                    }
                }, {
                    key: "_handleInputBlur",
                    value: function() {
                        this._mousedown || (this.close(),
                        this._resetAutocomplete())
                    }
                }, {
                    key: "_handleInputKeyupAndFocus",
                    value: function(t) {
                        "keyup" === t.type && (i._keydown = !1),
                        this.count = 0;
                        var e = this.el.value.toLowerCase();
                        13 !== t.keyCode && 38 !== t.keyCode && 40 !== t.keyCode && (this.oldVal === e || !M.tabPressed && "focus" === t.type || this.open(),
                        this.oldVal = e)
                    }
                }, {
                    key: "_handleInputKeydown",
                    value: function(e) {
                        i._keydown = !0;
                        var n = e.keyCode
                          , o = void 0
                          , s = t(this.container).children("li").length;
                        n === M.keys.ENTER && this.activeIndex >= 0 ? (o = t(this.container).children("li").eq(this.activeIndex)).length && (this.selectOption(o),
                        e.preventDefault()) : n !== M.keys.ARROW_UP && n !== M.keys.ARROW_DOWN || (e.preventDefault(),
                        n === M.keys.ARROW_UP && this.activeIndex > 0 && this.activeIndex--,
                        n === M.keys.ARROW_DOWN && this.activeIndex < s - 1 && this.activeIndex++,
                        this.$active.removeClass("active"),
                        this.activeIndex >= 0 && (this.$active = t(this.container).children("li").eq(this.activeIndex),
                        this.$active.addClass("active")))
                    }
                }, {
                    key: "_handleInputClick",
                    value: function(t) {
                        this.open()
                    }
                }, {
                    key: "_handleContainerMousedownAndTouchstart",
                    value: function(t) {
                        this._mousedown = !0
                    }
                }, {
                    key: "_handleContainerMouseupAndTouchend",
                    value: function(t) {
                        this._mousedown = !1
                    }
                }, {
                    key: "_highlight",
                    value: function(t, e) {
                        var n = e.find("img")
                          , i = e.text().toLowerCase().indexOf("" + t.toLowerCase())
                          , o = i + t.length - 1
                          , s = e.text().slice(0, i)
                          , a = e.text().slice(i, o + 1)
                          , r = e.text().slice(o + 1);
                        e.html("<span>" + s + "<span class='highlight'>" + a + "</span>" + r + "</span>"),
                        n.length && e.prepend(n)
                    }
                }, {
                    key: "_resetCurrentElement",
                    value: function() {
                        this.activeIndex = -1,
                        this.$active.removeClass("active")
                    }
                }, {
                    key: "_resetAutocomplete",
                    value: function() {
                        t(this.container).empty(),
                        this._resetCurrentElement(),
                        this.oldVal = null,
                        this.isOpen = !1,
                        this._mousedown = !1
                    }
                }, {
                    key: "selectOption",
                    value: function(t) {
                        var e = t.text().trim();
                        this.el.value = e,
                        this.$el.trigger("change"),
                        this._resetAutocomplete(),
                        this.close(),
                        "function" == typeof this.options.onAutocomplete && this.options.onAutocomplete.call(this, e)
                    }
                }, {
                    key: "_renderDropdown",
                    value: function(e, n) {
                        var i = this;
                        this._resetAutocomplete();
                        var o = [];
                        for (var s in e)
                            if (e.hasOwnProperty(s) && -1 !== s.toLowerCase().indexOf(n)) {
                                if (this.count >= this.options.limit)
                                    break;
                                var a = {
                                    data: e[s],
                                    key: s
                                };
                                o.push(a),
                                this.count++
                            }
                        if (this.options.sortFunction) {
                            o.sort(function(t, e) {
                                return i.options.sortFunction(t.key.toLowerCase(), e.key.toLowerCase(), n.toLowerCase())
                            })
                        }
                        for (var r = 0; r < o.length; r++) {
                            var l = o[r]
                              , u = t("<li></li>");
                            l.data ? u.append('<img src="' + l.data + '" class="right circle"><span>' + l.key + "</span>") : u.append("<span>" + l.key + "</span>"),
                            t(this.container).append(u),
                            this._highlight(n, u)
                        }
                    }
                }, {
                    key: "open",
                    value: function() {
                        var t = this.el.value.toLowerCase();
                        this._resetAutocomplete(),
                        t.length >= this.options.minLength && (this.isOpen = !0,
                        this._renderDropdown(this.options.data, t)),
                        this.dropdown.isOpen ? this.dropdown.recalculateDimensions() : this.dropdown.open()
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.dropdown.close()
                    }
                }, {
                    key: "updateData",
                    value: function(t) {
                        var e = this.el.value.toLowerCase();
                        this.options.data = t,
                        this.isOpen && this._renderDropdown(t, e)
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return o(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Autocomplete
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return e
                    }
                }]),
                i
            }();
            n._keydown = !1,
            M.Autocomplete = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "autocomplete", "M_Autocomplete")
        }(cash),
        function(t) {
            M.updateTextFields = function() {
                t("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea").each(function(e, n) {
                    var i = t(this);
                    e.value.length > 0 || t(e).is(":focus") || e.autofocus || null !== i.attr("placeholder") ? i.siblings("label").addClass("active") : e.validity ? i.siblings("label").toggleClass("active", !0 === e.validity.badInput) : i.siblings("label").removeClass("active")
                })
            }
            ,
            M.validate_field = function(t) {
                var e = null !== t.attr("data-length")
                  , n = parseInt(t.attr("data-length"))
                  , i = t[0].value.length;
                0 !== i || !1 !== t[0].validity.badInput || t.is(":required") ? t.hasClass("validate") && (t.is(":valid") && e && i <= n || t.is(":valid") && !e ? (t.removeClass("invalid"),
                t.addClass("valid")) : (t.removeClass("valid"),
                t.addClass("invalid"))) : t.hasClass("validate") && (t.removeClass("valid"),
                t.removeClass("invalid"))
            }
            ,
            M.textareaAutoResize = function(e) {
                if (e instanceof Element && (e = t(e)),
                e.length) {
                    var n = t(".hiddendiv").first();
                    n.length || (n = t('<div class="hiddendiv common"></div>'),
                    t("body").append(n));
                    var i = e.css("font-family")
                      , o = e.css("font-size")
                      , s = e.css("line-height")
                      , a = e.css("padding-top")
                      , r = e.css("padding-right")
                      , l = e.css("padding-bottom")
                      , u = e.css("padding-left");
                    o && n.css("font-size", o),
                    i && n.css("font-family", i),
                    s && n.css("line-height", s),
                    a && n.css("padding-top", a),
                    r && n.css("padding-right", r),
                    l && n.css("padding-bottom", l),
                    u && n.css("padding-left", u),
                    e.data("original-height") || e.data("original-height", e.height()),
                    "off" === e.attr("wrap") && n.css("overflow-wrap", "normal").css("white-space", "pre"),
                    n.text(e[0].value + "\n");
                    var c = n.html().replace(/\n/g, "<br>");
                    n.html(c),
                    e[0].offsetWidth > 0 && e[0].offsetHeight > 0 ? n.css("width", e.width() + "px") : n.css("width", window.innerWidth / 2 + "px"),
                    e.data("original-height") <= n.innerHeight() ? e.css("height", n.innerHeight() + "px") : e[0].value.length < e.data("previous-length") && e.css("height", e.data("original-height") + "px"),
                    e.data("previous-length", e[0].value.length)
                } else
                    console.error("No textarea element found")
            }
            ,
            t(document).ready(function() {
                var e = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea";
                t(document).on("change", e, function() {
                    0 === this.value.length && null === t(this).attr("placeholder") || t(this).siblings("label").addClass("active"),
                    M.validate_field(t(this))
                }),
                t(document).ready(function() {
                    M.updateTextFields()
                }),
                t(document).on("reset", function(n) {
                    var i = t(n.target);
                    i.is("form") && (i.find(e).removeClass("valid").removeClass("invalid"),
                    i.find(e).each(function(e) {
                        this.value.length && t(this).siblings("label").removeClass("active")
                    }),
                    setTimeout(function() {
                        i.find("select").each(function() {
                            this.M_FormSelect && t(this).trigger("change")
                        })
                    }, 0))
                }),
                document.addEventListener("focus", function(n) {
                    t(n.target).is(e) && t(n.target).siblings("label, .prefix").addClass("active")
                }, !0),
                document.addEventListener("blur", function(n) {
                    var i = t(n.target);
                    if (i.is(e)) {
                        var o = ".prefix";
                        0 === i[0].value.length && !0 !== i[0].validity.badInput && null === i.attr("placeholder") && (o += ", label"),
                        i.siblings(o).removeClass("active"),
                        M.validate_field(i)
                    }
                }, !0);
                t(document).on("keyup", "input[type=radio], input[type=checkbox]", function(e) {
                    if (e.which === M.keys.TAB)
                        return t(this).addClass("tabbed"),
                        void t(this).one("blur", function(e) {
                            t(this).removeClass("tabbed")
                        })
                });
                t(".materialize-textarea").each(function() {
                    var e = t(this);
                    e.data("original-height", e.height()),
                    e.data("previous-length", this.value.length),
                    M.textareaAutoResize(e)
                }),
                t(document).on("keyup", ".materialize-textarea", function() {
                    M.textareaAutoResize(t(this))
                }),
                t(document).on("keydown", ".materialize-textarea", function() {
                    M.textareaAutoResize(t(this))
                }),
                t(document).on("change", '.file-field input[type="file"]', function() {
                    for (var e = t(this).closest(".file-field").find("input.file-path"), n = t(this)[0].files, i = [], o = 0; o < n.length; o++)
                        i.push(n[o].name);
                    e[0].value = i.join(", "),
                    e.trigger("change")
                })
            })
        }(cash),
        function(t, e) {
            "use strict";
            var n = {
                indicators: !0,
                height: 400,
                duration: 500,
                interval: 6e3
            }
              , i = function(i) {
                function c(n, i) {
                    l(this, c);
                    var o = a(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, c, n, i));
                    return o.el.M_Slider = o,
                    o.options = t.extend({}, c.defaults, i),
                    o.$slider = o.$el.find(".slides"),
                    o.$slides = o.$slider.children("li"),
                    o.activeIndex = o.$slides.filter(function(e) {
                        return t(e).hasClass("active")
                    }).first().index(),
                    -1 != o.activeIndex && (o.$active = o.$slides.eq(o.activeIndex)),
                    o._setSliderHeight(),
                    o.$slides.find(".caption").each(function(t) {
                        o._animateCaptionIn(t, 0)
                    }),
                    o.$slides.find("img").each(function(e) {
                        var n = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
                        t(e).attr("src") !== n && (t(e).css("background-image", 'url("' + t(e).attr("src") + '")'),
                        t(e).attr("src", n))
                    }),
                    o._setupIndicators(),
                    o.$active ? o.$active.css("display", "block") : (o.$slides.first().addClass("active"),
                    e({
                        targets: o.$slides.first()[0],
                        opacity: 1,
                        duration: o.options.duration,
                        easing: "easeOutQuad"
                    }),
                    o.activeIndex = 0,
                    o.$active = o.$slides.eq(o.activeIndex),
                    o.options.indicators && o.$indicators.eq(o.activeIndex).addClass("active")),
                    o.$active.find("img").each(function(t) {
                        e({
                            targets: o.$active.find(".caption")[0],
                            opacity: 1,
                            translateX: 0,
                            translateY: 0,
                            duration: o.options.duration,
                            easing: "easeOutQuad"
                        })
                    }),
                    o._setupEventHandlers(),
                    o.start(),
                    o
                }
                return r(c, u),
                s(c, [{
                    key: "destroy",
                    value: function() {
                        this.pause(),
                        this._removeIndicators(),
                        this._removeEventHandlers(),
                        this.el.M_Slider = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        var t = this;
                        this._handleIntervalBound = this._handleInterval.bind(this),
                        this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this),
                        this.options.indicators && this.$indicators.each(function(e) {
                            e.addEventListener("click", t._handleIndicatorClickBound)
                        })
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        var t = this;
                        this.options.indicators && this.$indicators.each(function(e) {
                            e.removeEventListener("click", t._handleIndicatorClickBound)
                        })
                    }
                }, {
                    key: "_handleIndicatorClick",
                    value: function(e) {
                        var n = t(e.target).index();
                        this.set(n)
                    }
                }, {
                    key: "_handleInterval",
                    value: function() {
                        var t = this.$slider.find(".active").index();
                        this.$slides.length === t + 1 ? t = 0 : t += 1,
                        this.set(t)
                    }
                }, {
                    key: "_animateCaptionIn",
                    value: function(n, i) {
                        var o = {
                            targets: n,
                            opacity: 0,
                            duration: i,
                            easing: "easeOutQuad"
                        };
                        t(n).hasClass("center-align") ? o.translateY = -100 : t(n).hasClass("right-align") ? o.translateX = 100 : t(n).hasClass("left-align") && (o.translateX = -100),
                        e(o)
                    }
                }, {
                    key: "_setSliderHeight",
                    value: function() {
                        this.$el.hasClass("fullscreen") || (this.options.indicators ? this.$el.css("height", this.options.height + 40 + "px") : this.$el.css("height", this.options.height + "px"),
                        this.$slider.css("height", this.options.height + "px"))
                    }
                }, {
                    key: "_setupIndicators",
                    value: function() {
                        var e = this;
                        this.options.indicators && (this.$indicators = t('<ul class="indicators"></ul>'),
                        this.$slides.each(function(n, i) {
                            var o = t('<li class="indicator-item"></li>');
                            e.$indicators.append(o[0])
                        }),
                        this.$el.append(this.$indicators[0]),
                        this.$indicators = this.$indicators.children("li.indicator-item"))
                    }
                }, {
                    key: "_removeIndicators",
                    value: function() {
                        this.$el.find("ul.indicators").remove()
                    }
                }, {
                    key: "set",
                    value: function(t) {
                        var n = this;
                        if (t >= this.$slides.length ? t = 0 : t < 0 && (t = this.$slides.length - 1),
                        this.activeIndex != t) {
                            this.$active = this.$slides.eq(this.activeIndex);
                            var i = this.$active.find(".caption");
                            this.$active.removeClass("active"),
                            e({
                                targets: this.$active[0],
                                opacity: 0,
                                duration: this.options.duration,
                                easing: "easeOutQuad",
                                complete: function() {
                                    n.$slides.not(".active").each(function(t) {
                                        e({
                                            targets: t,
                                            opacity: 0,
                                            translateX: 0,
                                            translateY: 0,
                                            duration: 0,
                                            easing: "easeOutQuad"
                                        })
                                    })
                                }
                            }),
                            this._animateCaptionIn(i[0], this.options.duration),
                            this.options.indicators && (this.$indicators.eq(this.activeIndex).removeClass("active"),
                            this.$indicators.eq(t).addClass("active")),
                            e({
                                targets: this.$slides.eq(t)[0],
                                opacity: 1,
                                duration: this.options.duration,
                                easing: "easeOutQuad"
                            }),
                            e({
                                targets: this.$slides.eq(t).find(".caption")[0],
                                opacity: 1,
                                translateX: 0,
                                translateY: 0,
                                duration: this.options.duration,
                                delay: this.options.duration,
                                easing: "easeOutQuad"
                            }),
                            this.$slides.eq(t).addClass("active"),
                            this.activeIndex = t,
                            this.start()
                        }
                    }
                }, {
                    key: "pause",
                    value: function() {
                        clearInterval(this.interval)
                    }
                }, {
                    key: "start",
                    value: function() {
                        clearInterval(this.interval),
                        this.interval = setInterval(this._handleIntervalBound, this.options.duration + this.options.interval)
                    }
                }, {
                    key: "next",
                    value: function() {
                        var t = this.activeIndex + 1;
                        t >= this.$slides.length ? t = 0 : t < 0 && (t = this.$slides.length - 1),
                        this.set(t)
                    }
                }, {
                    key: "prev",
                    value: function() {
                        var t = this.activeIndex - 1;
                        t >= this.$slides.length ? t = 0 : t < 0 && (t = this.$slides.length - 1),
                        this.set(t)
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return o(c.__proto__ || Object.getPrototypeOf(c), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Slider
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return n
                    }
                }]),
                c
            }();
            M.Slider = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "slider", "M_Slider")
        }(cash, M.anime),
        function(t, e) {
            t(document).on("click", ".card", function(n) {
                if (t(this).children(".card-reveal").length) {
                    var i = t(n.target).closest(".card");
                    void 0 === i.data("initialOverflow") && i.data("initialOverflow", void 0 === i.css("overflow") ? "" : i.css("overflow"));
                    var o = t(this).find(".card-reveal");
                    t(n.target).is(t(".card-reveal .card-title")) || t(n.target).is(t(".card-reveal .card-title i")) ? e({
                        targets: o[0],
                        translateY: 0,
                        duration: 225,
                        easing: "easeInOutQuad",
                        complete: function(e) {
                            var n = e.animatables[0].target;
                            t(n).css({
                                display: "none"
                            }),
                            i.css("overflow", i.data("initialOverflow"))
                        }
                    }) : (t(n.target).is(t(".card .activator")) || t(n.target).is(t(".card .activator i"))) && (i.css("overflow", "hidden"),
                    o.css({
                        display: "block"
                    }),
                    e({
                        targets: o[0],
                        translateY: "-100%",
                        duration: 300,
                        easing: "easeInOutQuad"
                    }))
                }
            })
        }(cash, M.anime),
        function(t) {
            "use strict";
            var e = {
                data: [],
                placeholder: "",
                secondaryPlaceholder: "",
                autocompleteOptions: {},
                limit: 1 / 0,
                onChipAdd: null,
                onChipSelect: null,
                onChipDelete: null
            }
              , n = function(n) {
                function i(e, n) {
                    l(this, i);
                    var o = a(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, e, n));
                    return o.el.M_Chips = o,
                    o.options = t.extend({}, i.defaults, n),
                    o.$el.addClass("chips input-field"),
                    o.chipsData = [],
                    o.$chips = t(),
                    o._setupInput(),
                    o.hasAutocomplete = Object.keys(o.options.autocompleteOptions).length > 0,
                    o.$input.attr("id") || o.$input.attr("id", M.guid()),
                    o.options.data.length && (o.chipsData = o.options.data,
                    o._renderChips(o.chipsData)),
                    o.hasAutocomplete && o._setupAutocomplete(),
                    o._setPlaceholder(),
                    o._setupLabel(),
                    o._setupEventHandlers(),
                    o
                }
                return r(i, u),
                s(i, [{
                    key: "getData",
                    value: function() {
                        return this.chipsData
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this.$chips.remove(),
                        this.el.M_Chips = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleChipClickBound = this._handleChipClick.bind(this),
                        this._handleInputKeydownBound = this._handleInputKeydown.bind(this),
                        this._handleInputFocusBound = this._handleInputFocus.bind(this),
                        this._handleInputBlurBound = this._handleInputBlur.bind(this),
                        this.el.addEventListener("click", this._handleChipClickBound),
                        document.addEventListener("keydown", i._handleChipsKeydown),
                        document.addEventListener("keyup", i._handleChipsKeyup),
                        this.el.addEventListener("blur", i._handleChipsBlur, !0),
                        this.$input[0].addEventListener("focus", this._handleInputFocusBound),
                        this.$input[0].addEventListener("blur", this._handleInputBlurBound),
                        this.$input[0].addEventListener("keydown", this._handleInputKeydownBound)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        this.el.removeEventListener("click", this._handleChipClickBound),
                        document.removeEventListener("keydown", i._handleChipsKeydown),
                        document.removeEventListener("keyup", i._handleChipsKeyup),
                        this.el.removeEventListener("blur", i._handleChipsBlur, !0),
                        this.$input[0].removeEventListener("focus", this._handleInputFocusBound),
                        this.$input[0].removeEventListener("blur", this._handleInputBlurBound),
                        this.$input[0].removeEventListener("keydown", this._handleInputKeydownBound)
                    }
                }, {
                    key: "_handleChipClick",
                    value: function(e) {
                        var n = t(e.target).closest(".chip")
                          , i = t(e.target).is(".close");
                        if (n.length) {
                            var o = n.index();
                            i ? (this.deleteChip(o),
                            this.$input[0].focus()) : this.selectChip(o)
                        } else
                            this.$input[0].focus()
                    }
                }, {
                    key: "_handleInputFocus",
                    value: function() {
                        this.$el.addClass("focus")
                    }
                }, {
                    key: "_handleInputBlur",
                    value: function() {
                        this.$el.removeClass("focus")
                    }
                }, {
                    key: "_handleInputKeydown",
                    value: function(t) {
                        if (i._keydown = !0,
                        13 === t.keyCode) {
                            if (this.hasAutocomplete && this.autocomplete && this.autocomplete.isOpen)
                                return;
                            t.preventDefault(),
                            this.addChip({
                                tag: this.$input[0].value
                            }),
                            this.$input[0].value = ""
                        } else
                            8 !== t.keyCode && 37 !== t.keyCode || "" !== this.$input[0].value || !this.chipsData.length || (t.preventDefault(),
                            this.selectChip(this.chipsData.length - 1))
                    }
                }, {
                    key: "_renderChip",
                    value: function(e) {
                        if (e.tag) {
                            var n = document.createElement("div")
                              , i = document.createElement("i");
                            if (n.classList.add("chip"),
                            n.textContent = e.tag,
                            n.setAttribute("tabindex", 0),
                            t(i).addClass("material-icons close"),
                            i.textContent = "close",
                            e.image) {
                                var o = document.createElement("img");
                                o.setAttribute("src", e.image),
                                n.insertBefore(o, n.firstChild)
                            }
                            return n.appendChild(i),
                            n
                        }
                    }
                }, {
                    key: "_renderChips",
                    value: function() {
                        this.$chips.remove();
                        for (var t = 0; t < this.chipsData.length; t++) {
                            var e = this._renderChip(this.chipsData[t]);
                            this.$el.append(e),
                            this.$chips.add(e)
                        }
                        this.$el.append(this.$input[0])
                    }
                }, {
                    key: "_setupAutocomplete",
                    value: function() {
                        var t = this;
                        this.options.autocompleteOptions.onAutocomplete = function(e) {
                            t.addChip({
                                tag: e
                            }),
                            t.$input[0].value = "",
                            t.$input[0].focus()
                        }
                        ,
                        this.autocomplete = M.Autocomplete.init(this.$input[0], this.options.autocompleteOptions)
                    }
                }, {
                    key: "_setupInput",
                    value: function() {
                        this.$input = this.$el.find("input"),
                        this.$input.length || (this.$input = t("<input></input>"),
                        this.$el.append(this.$input)),
                        this.$input.addClass("input")
                    }
                }, {
                    key: "_setupLabel",
                    value: function() {
                        this.$label = this.$el.find("label"),
                        this.$label.length && this.$label.setAttribute("for", this.$input.attr("id"))
                    }
                }, {
                    key: "_setPlaceholder",
                    value: function() {
                        void 0 !== this.chipsData && !this.chipsData.length && this.options.placeholder ? t(this.$input).prop("placeholder", this.options.placeholder) : (void 0 === this.chipsData || this.chipsData.length) && this.options.secondaryPlaceholder && t(this.$input).prop("placeholder", this.options.secondaryPlaceholder)
                    }
                }, {
                    key: "_isValid",
                    value: function(t) {
                        if (t.hasOwnProperty("tag") && "" !== t.tag) {
                            for (var e = !1, n = 0; n < this.chipsData.length; n++)
                                if (this.chipsData[n].tag === t.tag) {
                                    e = !0;
                                    break
                                }
                            return !e
                        }
                        return !1
                    }
                }, {
                    key: "addChip",
                    value: function(e) {
                        if (this._isValid(e) && !(this.chipsData.length >= this.options.limit)) {
                            var n = this._renderChip(e);
                            this.$chips.add(n),
                            this.chipsData.push(e),
                            t(this.$input).before(n),
                            this._setPlaceholder(),
                            "function" == typeof this.options.onChipAdd && this.options.onChipAdd.call(this, this.$el, n)
                        }
                    }
                }, {
                    key: "deleteChip",
                    value: function(e) {
                        var n = this.$chips.eq(e);
                        this.$chips.eq(e).remove(),
                        this.$chips = this.$chips.filter(function(e) {
                            return t(e).index() >= 0
                        }),
                        this.chipsData.splice(e, 1),
                        this._setPlaceholder(),
                        "function" == typeof this.options.onChipDelete && this.options.onChipDelete.call(this, this.$el, n[0])
                    }
                }, {
                    key: "selectChip",
                    value: function(t) {
                        var e = this.$chips.eq(t);
                        this._selectedChip = e,
                        e[0].focus(),
                        "function" == typeof this.options.onChipSelect && this.options.onChipSelect.call(this, this.$el, e[0])
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return o(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Chips
                    }
                }, {
                    key: "_handleChipsKeydown",
                    value: function(e) {
                        i._keydown = !0;
                        var n = t(e.target).closest(".chips")
                          , o = e.target && n.length;
                        if (!t(e.target).is("input, textarea") && o) {
                            var s = n[0].M_Chips;
                            if (8 === e.keyCode || 46 === e.keyCode) {
                                e.preventDefault();
                                var a = s.chipsData.length;
                                if (s._selectedChip) {
                                    var r = s._selectedChip.index();
                                    s.deleteChip(r),
                                    s._selectedChip = null,
                                    a = Math.max(r - 1, 0)
                                }
                                s.chipsData.length && s.selectChip(a)
                            } else if (37 === e.keyCode) {
                                if (s._selectedChip) {
                                    var l = s._selectedChip.index() - 1;
                                    if (l < 0)
                                        return;
                                    s.selectChip(l)
                                }
                            } else if (39 === e.keyCode && s._selectedChip) {
                                var u = s._selectedChip.index() + 1;
                                u >= s.chipsData.length ? s.$input[0].focus() : s.selectChip(u)
                            }
                        }
                    }
                }, {
                    key: "_handleChipsKeyup",
                    value: function(t) {
                        i._keydown = !1
                    }
                }, {
                    key: "_handleChipsBlur",
                    value: function(e) {
                        i._keydown || (t(e.target).closest(".chips")[0].M_Chips._selectedChip = null)
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return e
                    }
                }]),
                i
            }();
            n._keydown = !1,
            M.Chips = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "chips", "M_Chips"),
            t(document).ready(function() {
                t(document.body).on("click", ".chip .close", function() {
                    var e = t(this).closest(".chips");
                    e.length && e[0].M_Chips || t(this).closest(".chip").remove()
                })
            })
        }(cash),
        function(t) {
            "use strict";
            var e = {
                top: 0,
                bottom: 1 / 0,
                offset: 0,
                onPositionChange: null
            }
              , n = function(n) {
                function i(e, n) {
                    l(this, i);
                    var o = a(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, e, n));
                    return o.el.M_Pushpin = o,
                    o.options = t.extend({}, i.defaults, n),
                    o.originalOffset = o.el.offsetTop,
                    i._pushpins.push(o),
                    o._setupEventHandlers(),
                    o._updatePosition(),
                    o
                }
                return r(i, u),
                s(i, [{
                    key: "destroy",
                    value: function() {
                        this.el.style.top = null,
                        this._removePinClasses(),
                        this._removeEventHandlers();
                        var t = i._pushpins.indexOf(this);
                        i._pushpins.splice(t, 1)
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        document.addEventListener("scroll", i._updateElements)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        document.removeEventListener("scroll", i._updateElements)
                    }
                }, {
                    key: "_updatePosition",
                    value: function() {
                        var t = M.getDocumentScrollTop() + this.options.offset;
                        this.options.top <= t && this.options.bottom >= t && !this.el.classList.contains("pinned") && (this._removePinClasses(),
                        this.el.style.top = this.options.offset + "px",
                        this.el.classList.add("pinned"),
                        "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pinned")),
                        t < this.options.top && !this.el.classList.contains("pin-top") && (this._removePinClasses(),
                        this.el.style.top = 0,
                        this.el.classList.add("pin-top"),
                        "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pin-top")),
                        t > this.options.bottom && !this.el.classList.contains("pin-bottom") && (this._removePinClasses(),
                        this.el.classList.add("pin-bottom"),
                        this.el.style.top = this.options.bottom - this.originalOffset + "px",
                        "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pin-bottom"))
                    }
                }, {
                    key: "_removePinClasses",
                    value: function() {
                        this.el.classList.remove("pin-top"),
                        this.el.classList.remove("pinned"),
                        this.el.classList.remove("pin-bottom")
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return o(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Pushpin
                    }
                }, {
                    key: "_updateElements",
                    value: function() {
                        for (var t in i._pushpins) {
                            i._pushpins[t]._updatePosition()
                        }
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return e
                    }
                }]),
                i
            }();
            n._pushpins = [],
            M.Pushpin = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "pushpin", "M_Pushpin")
        }(cash),
        function(t, e) {
            "use strict";
            var n = {
                direction: "top",
                hoverEnabled: !0,
                toolbarEnabled: !1
            };
            t.fn.reverse = [].reverse;
            var i = function(i) {
                function c(e, n) {
                    l(this, c);
                    var i = a(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, c, e, n));
                    return i.el.M_FloatingActionButton = i,
                    i.options = t.extend({}, c.defaults, n),
                    i.isOpen = !1,
                    i.$anchor = i.$el.children("a").first(),
                    i.$menu = i.$el.children("ul").first(),
                    i.$floatingBtns = i.$el.find("ul .btn-floating"),
                    i.$floatingBtnsReverse = i.$el.find("ul .btn-floating").reverse(),
                    i.offsetY = 0,
                    i.offsetX = 0,
                    i.$el.addClass("direction-" + i.options.direction),
                    "top" === i.options.direction ? i.offsetY = 40 : "right" === i.options.direction ? i.offsetX = -40 : "bottom" === i.options.direction ? i.offsetY = -40 : i.offsetX = 40,
                    i._setupEventHandlers(),
                    i
                }
                return r(c, u),
                s(c, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this.el.M_FloatingActionButton = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleFABClickBound = this._handleFABClick.bind(this),
                        this._handleOpenBound = this.open.bind(this),
                        this._handleCloseBound = this.close.bind(this),
                        this.options.hoverEnabled && !this.options.toolbarEnabled ? (this.el.addEventListener("mouseenter", this._handleOpenBound),
                        this.el.addEventListener("mouseleave", this._handleCloseBound)) : this.el.addEventListener("click", this._handleFABClickBound)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        this.options.hoverEnabled && !this.options.toolbarEnabled ? (this.el.removeEventListener("mouseenter", this._handleOpenBound),
                        this.el.removeEventListener("mouseleave", this._handleCloseBound)) : this.el.removeEventListener("click", this._handleFABClickBound)
                    }
                }, {
                    key: "_handleFABClick",
                    value: function() {
                        this.isOpen ? this.close() : this.open()
                    }
                }, {
                    key: "_handleDocumentClick",
                    value: function(e) {
                        t(e.target).closest(this.$menu).length || this.close()
                    }
                }, {
                    key: "open",
                    value: function() {
                        this.isOpen || (this.options.toolbarEnabled ? this._animateInToolbar() : this._animateInFAB(),
                        this.isOpen = !0)
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.isOpen && (this.options.toolbarEnabled ? (window.removeEventListener("scroll", this._handleCloseBound, !0),
                        document.body.removeEventListener("click", this._handleDocumentClickBound, !0),
                        this._animateOutToolbar()) : this._animateOutFAB(),
                        this.isOpen = !1)
                    }
                }, {
                    key: "_animateInFAB",
                    value: function() {
                        var t = this;
                        this.$el.addClass("active");
                        var n = 0;
                        this.$floatingBtnsReverse.each(function(i) {
                            e({
                                targets: i,
                                opacity: 1,
                                scale: [.4, 1],
                                translateY: [t.offsetY, 0],
                                translateX: [t.offsetX, 0],
                                duration: 275,
                                delay: n,
                                easing: "easeInOutQuad"
                            }),
                            n += 40
                        })
                    }
                }, {
                    key: "_animateOutFAB",
                    value: function() {
                        var t = this;
                        this.$floatingBtnsReverse.each(function(n) {
                            e.remove(n),
                            e({
                                targets: n,
                                opacity: 0,
                                scale: .4,
                                translateY: t.offsetY,
                                translateX: t.offsetX,
                                duration: 175,
                                easing: "easeOutQuad",
                                complete: function() {
                                    t.$el.removeClass("active")
                                }
                            })
                        })
                    }
                }, {
                    key: "_animateInToolbar",
                    value: function() {
                        var e, n = this, i = window.innerWidth, o = window.innerHeight, s = this.el.getBoundingClientRect(), a = t('<div class="fab-backdrop"></div>'), r = this.$anchor.css("background-color");
                        this.$anchor.append(a),
                        this.offsetX = s.left - i / 2 + s.width / 2,
                        this.offsetY = o - s.bottom,
                        e = i / a[0].clientWidth,
                        this.btnBottom = s.bottom,
                        this.btnLeft = s.left,
                        this.btnWidth = s.width,
                        this.$el.addClass("active"),
                        this.$el.css({
                            "text-align": "center",
                            width: "100%",
                            bottom: 0,
                            left: 0,
                            transform: "translateX(" + this.offsetX + "px)",
                            transition: "none"
                        }),
                        this.$anchor.css({
                            transform: "translateY(" + -this.offsetY + "px)",
                            transition: "none"
                        }),
                        a.css({
                            "background-color": r
                        }),
                        setTimeout(function() {
                            n.$el.css({
                                transform: "",
                                transition: "transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"
                            }),
                            n.$anchor.css({
                                overflow: "visible",
                                transform: "",
                                transition: "transform .2s"
                            }),
                            setTimeout(function() {
                                n.$el.css({
                                    overflow: "hidden",
                                    "background-color": r
                                }),
                                a.css({
                                    transform: "scale(" + e + ")",
                                    transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                                }),
                                n.$menu.children("li").children("a").css({
                                    opacity: 1
                                }),
                                n._handleDocumentClickBound = n._handleDocumentClick.bind(n),
                                window.addEventListener("scroll", n._handleCloseBound, !0),
                                document.body.addEventListener("click", n._handleDocumentClickBound, !0)
                            }, 100)
                        }, 0)
                    }
                }, {
                    key: "_animateOutToolbar",
                    value: function() {
                        var t = this
                          , e = window.innerWidth
                          , n = window.innerHeight
                          , i = this.$el.find(".fab-backdrop")
                          , o = this.$anchor.css("background-color");
                        this.offsetX = this.btnLeft - e / 2 + this.btnWidth / 2,
                        this.offsetY = n - this.btnBottom,
                        this.$el.removeClass("active"),
                        this.$el.css({
                            "background-color": "transparent",
                            transition: "none"
                        }),
                        this.$anchor.css({
                            transition: "none"
                        }),
                        i.css({
                            transform: "scale(0)",
                            "background-color": o
                        }),
                        this.$menu.children("li").children("a").css({
                            opacity: ""
                        }),
                        setTimeout(function() {
                            i.remove(),
                            t.$el.css({
                                "text-align": "",
                                width: "",
                                bottom: "",
                                left: "",
                                overflow: "",
                                "background-color": "",
                                transform: "translate3d(" + -t.offsetX + "px,0,0)"
                            }),
                            t.$anchor.css({
                                overflow: "",
                                transform: "translate3d(0," + t.offsetY + "px,0)"
                            }),
                            setTimeout(function() {
                                t.$el.css({
                                    transform: "translate3d(0,0,0)",
                                    transition: "transform .2s"
                                }),
                                t.$anchor.css({
                                    transform: "translate3d(0,0,0)",
                                    transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                                })
                            }, 20)
                        }, 200)
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return o(c.__proto__ || Object.getPrototypeOf(c), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_FloatingActionButton
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return n
                    }
                }]),
                c
            }();
            M.FloatingActionButton = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "floatingActionButton", "M_FloatingActionButton")
        }(cash, M.anime),
        function(t) {
            "use strict";
            var e = {
                autoClose: !1,
                format: "mmm dd, yyyy",
                parse: null,
                defaultDate: null,
                setDefaultDate: !1,
                disableWeekends: !1,
                disableDayFn: null,
                firstDay: 0,
                minDate: null,
                maxDate: null,
                yearRange: 10,
                minYear: 0,
                maxYear: 9999,
                minMonth: void 0,
                maxMonth: void 0,
                startRange: null,
                endRange: null,
                isRTL: !1,
                showMonthAfterYear: !1,
                showDaysInNextAndPreviousMonths: !1,
                container: null,
                showClearBtn: !1,
                i18n: {
                    cancel: "Cancel",
                    clear: "Clear",
                    done: "Ok",
                    previousMonth: "‹",
                    nextMonth: "›",
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    weekdaysAbbrev: ["S", "M", "T", "W", "T", "F", "S"]
                },
                events: [],
                onSelect: null,
                onOpen: null,
                onClose: null,
                onDraw: null
            }
              , n = function(n) {
                function i(e, n) {
                    l(this, i);
                    var o = a(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, e, n));
                    o.el.M_Datepicker = o,
                    o.options = t.extend({}, i.defaults, n),
                    n && n.hasOwnProperty("i18n") && "object" == typeof n.i18n && (o.options.i18n = t.extend({}, i.defaults.i18n, n.i18n)),
                    o.options.minDate && o.options.minDate.setHours(0, 0, 0, 0),
                    o.options.maxDate && o.options.maxDate.setHours(0, 0, 0, 0),
                    o.id = M.guid(),
                    o._setupVariables(),
                    o._insertHTMLIntoDOM(),
                    o._setupModal(),
                    o._setupEventHandlers(),
                    o.options.defaultDate || (o.options.defaultDate = new Date(Date.parse(o.el.value)));
                    var s = o.options.defaultDate;
                    return i._isDate(s) ? o.options.setDefaultDate ? (o.setDate(s, !0),
                    o.setInputValue()) : o.gotoDate(s) : o.gotoDate(new Date),
                    o.isOpen = !1,
                    o
                }
                return r(i, u),
                s(i, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this.modal.destroy(),
                        t(this.modalEl).remove(),
                        this.destroySelects(),
                        this.el.M_Datepicker = void 0
                    }
                }, {
                    key: "destroySelects",
                    value: function() {
                        var t = this.calendarEl.querySelector(".orig-select-year");
                        t && M.FormSelect.getInstance(t).destroy();
                        var e = this.calendarEl.querySelector(".orig-select-month");
                        e && M.FormSelect.getInstance(e).destroy()
                    }
                }, {
                    key: "_insertHTMLIntoDOM",
                    value: function() {
                        this.options.showClearBtn && (t(this.clearBtn).css({
                            visibility: ""
                        }),
                        this.clearBtn.innerHTML = this.options.i18n.clear),
                        this.doneBtn.innerHTML = this.options.i18n.done,
                        this.cancelBtn.innerHTML = this.options.i18n.cancel,
                        this.options.container ? this.$modalEl.appendTo(this.options.container) : this.$modalEl.insertBefore(this.el)
                    }
                }, {
                    key: "_setupModal",
                    value: function() {
                        var t = this;
                        this.modalEl.id = "modal-" + this.id,
                        this.modal = M.Modal.init(this.modalEl, {
                            onCloseEnd: function() {
                                t.isOpen = !1
                            }
                        })
                    }
                }, {
                    key: "toString",
                    value: function(t) {
                        var e = this;
                        return t = t || this.options.format,
                        i._isDate(this.date) ? t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g).map(function(t) {
                            return e.formats[t] ? e.formats[t]() : t
                        }).join("") : ""
                    }
                }, {
                    key: "setDate",
                    value: function(t, e) {
                        if (!t)
                            return this.date = null,
                            this._renderDateDisplay(),
                            this.draw();
                        if ("string" == typeof t && (t = new Date(Date.parse(t))),
                        i._isDate(t)) {
                            var n = this.options.minDate
                              , o = this.options.maxDate;
                            i._isDate(n) && t < n ? t = n : i._isDate(o) && t > o && (t = o),
                            this.date = new Date(t.getTime()),
                            this._renderDateDisplay(),
                            i._setToStartOfDay(this.date),
                            this.gotoDate(this.date),
                            e || "function" != typeof this.options.onSelect || this.options.onSelect.call(this, this.date)
                        }
                    }
                }, {
                    key: "setInputValue",
                    value: function() {
                        this.el.value = this.toString(),
                        this.$el.trigger("change", {
                            firedBy: this
                        })
                    }
                }, {
                    key: "_renderDateDisplay",
                    value: function() {
                        var t = i._isDate(this.date) ? this.date : new Date
                          , e = this.options.i18n
                          , n = e.weekdaysShort[t.getDay()]
                          , o = e.monthsShort[t.getMonth()]
                          , s = t.getDate();
                        this.yearTextEl.innerHTML = t.getFullYear(),
                        this.dateTextEl.innerHTML = n + ", " + o + " " + s
                    }
                }, {
                    key: "gotoDate",
                    value: function(t) {
                        var e = !0;
                        if (i._isDate(t)) {
                            if (this.calendars) {
                                var n = new Date(this.calendars[0].year,this.calendars[0].month,1)
                                  , o = new Date(this.calendars[this.calendars.length - 1].year,this.calendars[this.calendars.length - 1].month,1)
                                  , s = t.getTime();
                                o.setMonth(o.getMonth() + 1),
                                o.setDate(o.getDate() - 1),
                                e = s < n.getTime() || o.getTime() < s
                            }
                            e && (this.calendars = [{
                                month: t.getMonth(),
                                year: t.getFullYear()
                            }]),
                            this.adjustCalendars()
                        }
                    }
                }, {
                    key: "adjustCalendars",
                    value: function() {
                        this.calendars[0] = this.adjustCalendar(this.calendars[0]),
                        this.draw()
                    }
                }, {
                    key: "adjustCalendar",
                    value: function(t) {
                        return t.month < 0 && (t.year -= Math.ceil(Math.abs(t.month) / 12),
                        t.month += 12),
                        t.month > 11 && (t.year += Math.floor(Math.abs(t.month) / 12),
                        t.month -= 12),
                        t
                    }
                }, {
                    key: "nextMonth",
                    value: function() {
                        this.calendars[0].month++,
                        this.adjustCalendars()
                    }
                }, {
                    key: "prevMonth",
                    value: function() {
                        this.calendars[0].month--,
                        this.adjustCalendars()
                    }
                }, {
                    key: "render",
                    value: function(t, e, n) {
                        var o = this.options
                          , s = new Date
                          , a = i._getDaysInMonth(t, e)
                          , r = new Date(t,e,1).getDay()
                          , l = []
                          , u = [];
                        i._setToStartOfDay(s),
                        o.firstDay > 0 && (r -= o.firstDay) < 0 && (r += 7);
                        for (var c = 0 === e ? 11 : e - 1, h = 11 === e ? 0 : e + 1, d = 0 === e ? t - 1 : t, p = 11 === e ? t + 1 : t, f = i._getDaysInMonth(d, c), v = a + r, g = v; g > 7; )
                            g -= 7;
                        v += 7 - g;
                        for (var m = !1, y = 0, _ = 0; y < v; y++) {
                            var b = new Date(t,e,y - r + 1)
                              , k = !!i._isDate(this.date) && i._compareDates(b, this.date)
                              , w = i._compareDates(b, s)
                              , C = -1 !== o.events.indexOf(b.toDateString())
                              , E = y < r || y >= a + r
                              , x = y - r + 1
                              , M = e
                              , O = t
                              , L = o.startRange && i._compareDates(o.startRange, b)
                              , S = o.endRange && i._compareDates(o.endRange, b)
                              , T = o.startRange && o.endRange && o.startRange < b && b < o.endRange;
                            E && (y < r ? (x = f + x,
                            M = c,
                            O = d) : (x -= a,
                            M = h,
                            O = p));
                            var B = {
                                day: x,
                                month: M,
                                year: O,
                                hasEvent: C,
                                isSelected: k,
                                isToday: w,
                                isDisabled: o.minDate && b < o.minDate || o.maxDate && b > o.maxDate || o.disableWeekends && i._isWeekend(b) || o.disableDayFn && o.disableDayFn(b),
                                isEmpty: E,
                                isStartRange: L,
                                isEndRange: S,
                                isInRange: T,
                                showDaysInNextAndPreviousMonths: o.showDaysInNextAndPreviousMonths
                            };
                            u.push(this.renderDay(B)),
                            7 == ++_ && (l.push(this.renderRow(u, o.isRTL, m)),
                            u = [],
                            _ = 0,
                            m = !1)
                        }
                        return this.renderTable(o, l, n)
                    }
                }, {
                    key: "renderDay",
                    value: function(t) {
                        var e = []
                          , n = "false";
                        if (t.isEmpty) {
                            if (!t.showDaysInNextAndPreviousMonths)
                                return '<td class="is-empty"></td>';
                            e.push("is-outside-current-month"),
                            e.push("is-selection-disabled")
                        }
                        return t.isDisabled && e.push("is-disabled"),
                        t.isToday && e.push("is-today"),
                        t.isSelected && (e.push("is-selected"),
                        n = "true"),
                        t.hasEvent && e.push("has-event"),
                        t.isInRange && e.push("is-inrange"),
                        t.isStartRange && e.push("is-startrange"),
                        t.isEndRange && e.push("is-endrange"),
                        '<td data-day="' + t.day + '" class="' + e.join(" ") + '" aria-selected="' + n + '"><button class="datepicker-day-button" type="button" data-year="' + t.year + '" data-month="' + t.month + '" data-day="' + t.day + '">' + t.day + "</button></td>"
                    }
                }, {
                    key: "renderRow",
                    value: function(t, e, n) {
                        return '<tr class="datepicker-row' + (n ? " is-selected" : "") + '">' + (e ? t.reverse() : t).join("") + "</tr>"
                    }
                }, {
                    key: "renderTable",
                    value: function(t, e, n) {
                        return '<div class="datepicker-table-wrapper"><table cellpadding="0" cellspacing="0" class="datepicker-table" role="grid" aria-labelledby="' + n + '">' + this.renderHead(t) + this.renderBody(e) + "</table></div>"
                    }
                }, {
                    key: "renderHead",
                    value: function(t) {
                        var e = void 0
                          , n = [];
                        for (e = 0; e < 7; e++)
                            n.push('<th scope="col"><abbr title="' + this.renderDayName(t, e) + '">' + this.renderDayName(t, e, !0) + "</abbr></th>");
                        return "<thead><tr>" + (t.isRTL ? n.reverse() : n).join("") + "</tr></thead>"
                    }
                }, {
                    key: "renderBody",
                    value: function(t) {
                        return "<tbody>" + t.join("") + "</tbody>"
                    }
                }, {
                    key: "renderTitle",
                    value: function(e, n, i, o, s, a) {
                        var r, l, u = void 0, c = void 0, h = void 0, d = this.options, p = i === d.minYear, f = i === d.maxYear, v = '<div id="' + a + '" class="datepicker-controls" role="heading" aria-live="assertive">', g = !0, m = !0;
                        for (h = [],
                        u = 0; u < 12; u++)
                            h.push('<option value="' + (i === s ? u - n : 12 + u - n) + '"' + (u === o ? ' selected="selected"' : "") + (p && u < d.minMonth || f && u > d.maxMonth ? 'disabled="disabled"' : "") + ">" + d.i18n.months[u] + "</option>");
                        for (r = '<select class="datepicker-select orig-select-month" tabindex="-1">' + h.join("") + "</select>",
                        t.isArray(d.yearRange) ? (u = d.yearRange[0],
                        c = d.yearRange[1] + 1) : (u = i - d.yearRange,
                        c = 1 + i + d.yearRange),
                        h = []; u < c && u <= d.maxYear; u++)
                            u >= d.minYear && h.push('<option value="' + u + '" ' + (u === i ? 'selected="selected"' : "") + ">" + u + "</option>");
                        l = '<select class="datepicker-select orig-select-year" tabindex="-1">' + h.join("") + "</select>";
                        v += '<button class="month-prev' + (g ? "" : " is-disabled") + '" type="button"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/><path d="M0-.5h24v24H0z" fill="none"/></svg></button>',
                        v += '<div class="selects-container">',
                        d.showMonthAfterYear ? v += l + r : v += r + l,
                        v += "</div>",
                        p && (0 === o || d.minMonth >= o) && (g = !1),
                        f && (11 === o || d.maxMonth <= o) && (m = !1);
                        return (v += '<button class="month-next' + (m ? "" : " is-disabled") + '" type="button"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg></button>') + "</div>"
                    }
                }, {
                    key: "draw",
                    value: function(t) {
                        if (this.isOpen || t) {
                            var e, n = this.options, i = n.minYear, o = n.maxYear, s = n.minMonth, a = n.maxMonth, r = "";
                            this._y <= i && (this._y = i,
                            !isNaN(s) && this._m < s && (this._m = s)),
                            this._y >= o && (this._y = o,
                            !isNaN(a) && this._m > a && (this._m = a)),
                            e = "datepicker-title-" + Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 2);
                            for (var l = 0; l < 1; l++)
                                this._renderDateDisplay(),
                                r += this.renderTitle(this, l, this.calendars[l].year, this.calendars[l].month, this.calendars[0].year, e) + this.render(this.calendars[l].year, this.calendars[l].month, e);
                            this.destroySelects(),
                            this.calendarEl.innerHTML = r;
                            var u = this.calendarEl.querySelector(".orig-select-year")
                              , c = this.calendarEl.querySelector(".orig-select-month");
                            M.FormSelect.init(u, {
                                classes: "select-year",
                                dropdownOptions: {
                                    container: document.body,
                                    constrainWidth: !1
                                }
                            }),
                            M.FormSelect.init(c, {
                                classes: "select-month",
                                dropdownOptions: {
                                    container: document.body,
                                    constrainWidth: !1
                                }
                            }),
                            u.addEventListener("change", this._handleYearChange.bind(this)),
                            c.addEventListener("change", this._handleMonthChange.bind(this)),
                            "function" == typeof this.options.onDraw && this.options.onDraw(this)
                        }
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleInputKeydownBound = this._handleInputKeydown.bind(this),
                        this._handleInputClickBound = this._handleInputClick.bind(this),
                        this._handleInputChangeBound = this._handleInputChange.bind(this),
                        this._handleCalendarClickBound = this._handleCalendarClick.bind(this),
                        this._finishSelectionBound = this._finishSelection.bind(this),
                        this._handleMonthChange = this._handleMonthChange.bind(this),
                        this._closeBound = this.close.bind(this),
                        this.el.addEventListener("click", this._handleInputClickBound),
                        this.el.addEventListener("keydown", this._handleInputKeydownBound),
                        this.el.addEventListener("change", this._handleInputChangeBound),
                        this.calendarEl.addEventListener("click", this._handleCalendarClickBound),
                        this.doneBtn.addEventListener("click", this._finishSelectionBound),
                        this.cancelBtn.addEventListener("click", this._closeBound),
                        this.options.showClearBtn && (this._handleClearClickBound = this._handleClearClick.bind(this),
                        this.clearBtn.addEventListener("click", this._handleClearClickBound))
                    }
                }, {
                    key: "_setupVariables",
                    value: function() {
                        var e = this;
                        this.$modalEl = t(i._template),
                        this.modalEl = this.$modalEl[0],
                        this.calendarEl = this.modalEl.querySelector(".datepicker-calendar"),
                        this.yearTextEl = this.modalEl.querySelector(".year-text"),
                        this.dateTextEl = this.modalEl.querySelector(".date-text"),
                        this.options.showClearBtn && (this.clearBtn = this.modalEl.querySelector(".datepicker-clear")),
                        this.doneBtn = this.modalEl.querySelector(".datepicker-done"),
                        this.cancelBtn = this.modalEl.querySelector(".datepicker-cancel"),
                        this.formats = {
                            d: function() {
                                return e.date.getDate()
                            },
                            dd: function() {
                                var t = e.date.getDate();
                                return (t < 10 ? "0" : "") + t
                            },
                            ddd: function() {
                                return e.options.i18n.weekdaysShort[e.date.getDay()]
                            },
                            dddd: function() {
                                return e.options.i18n.weekdays[e.date.getDay()]
                            },
                            m: function() {
                                return e.date.getMonth() + 1
                            },
                            mm: function() {
                                var t = e.date.getMonth() + 1;
                                return (t < 10 ? "0" : "") + t
                            },
                            mmm: function() {
                                return e.options.i18n.monthsShort[e.date.getMonth()]
                            },
                            mmmm: function() {
                                return e.options.i18n.months[e.date.getMonth()]
                            },
                            yy: function() {
                                return ("" + e.date.getFullYear()).slice(2)
                            },
                            yyyy: function() {
                                return e.date.getFullYear()
                            }
                        }
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        this.el.removeEventListener("click", this._handleInputClickBound),
                        this.el.removeEventListener("keydown", this._handleInputKeydownBound),
                        this.el.removeEventListener("change", this._handleInputChangeBound),
                        this.calendarEl.removeEventListener("click", this._handleCalendarClickBound)
                    }
                }, {
                    key: "_handleInputClick",
                    value: function() {
                        this.open()
                    }
                }, {
                    key: "_handleInputKeydown",
                    value: function(t) {
                        t.which === M.keys.ENTER && (t.preventDefault(),
                        this.open())
                    }
                }, {
                    key: "_handleCalendarClick",
                    value: function(e) {
                        if (this.isOpen) {
                            var n = t(e.target);
                            n.hasClass("is-disabled") || (!n.hasClass("datepicker-day-button") || n.hasClass("is-empty") || n.parent().hasClass("is-disabled") ? n.closest(".month-prev").length ? this.prevMonth() : n.closest(".month-next").length && this.nextMonth() : (this.setDate(new Date(e.target.getAttribute("data-year"),e.target.getAttribute("data-month"),e.target.getAttribute("data-day"))),
                            this.options.autoClose && this._finishSelection()))
                        }
                    }
                }, {
                    key: "_handleClearClick",
                    value: function() {
                        this.date = null,
                        this.setInputValue(),
                        this.close()
                    }
                }, {
                    key: "_handleMonthChange",
                    value: function(t) {
                        this.gotoMonth(t.target.value)
                    }
                }, {
                    key: "_handleYearChange",
                    value: function(t) {
                        this.gotoYear(t.target.value)
                    }
                }, {
                    key: "gotoMonth",
                    value: function(t) {
                        isNaN(t) || (this.calendars[0].month = parseInt(t, 10),
                        this.adjustCalendars())
                    }
                }, {
                    key: "gotoYear",
                    value: function(t) {
                        isNaN(t) || (this.calendars[0].year = parseInt(t, 10),
                        this.adjustCalendars())
                    }
                }, {
                    key: "_handleInputChange",
                    value: function(t) {
                        var e = void 0;
                        t.firedBy !== this && (e = this.options.parse ? this.options.parse(this.el.value, this.options.format) : new Date(Date.parse(this.el.value)),
                        i._isDate(e) && this.setDate(e))
                    }
                }, {
                    key: "renderDayName",
                    value: function(t, e, n) {
                        for (e += t.firstDay; e >= 7; )
                            e -= 7;
                        return n ? t.i18n.weekdaysAbbrev[e] : t.i18n.weekdays[e]
                    }
                }, {
                    key: "_finishSelection",
                    value: function() {
                        this.setInputValue(),
                        this.close()
                    }
                }, {
                    key: "open",
                    value: function() {
                        if (!this.isOpen)
                            return this.isOpen = !0,
                            "function" == typeof this.options.onOpen && this.options.onOpen.call(this),
                            this.draw(),
                            this.modal.open(),
                            this
                    }
                }, {
                    key: "close",
                    value: function() {
                        if (this.isOpen)
                            return this.isOpen = !1,
                            "function" == typeof this.options.onClose && this.options.onClose.call(this),
                            this.modal.close(),
                            this
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return o(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "_isDate",
                    value: function(t) {
                        return /Date/.test(Object.prototype.toString.call(t)) && !isNaN(t.getTime())
                    }
                }, {
                    key: "_isWeekend",
                    value: function(t) {
                        var e = t.getDay();
                        return 0 === e || 6 === e
                    }
                }, {
                    key: "_setToStartOfDay",
                    value: function(t) {
                        i._isDate(t) && t.setHours(0, 0, 0, 0)
                    }
                }, {
                    key: "_getDaysInMonth",
                    value: function(t, e) {
                        return [31, i._isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
                    }
                }, {
                    key: "_isLeapYear",
                    value: function(t) {
                        return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
                    }
                }, {
                    key: "_compareDates",
                    value: function(t, e) {
                        return t.getTime() === e.getTime()
                    }
                }, {
                    key: "_setToStartOfDay",
                    value: function(t) {
                        i._isDate(t) && t.setHours(0, 0, 0, 0)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Datepicker
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return e
                    }
                }]),
                i
            }();
            n._template = ['<div class= "modal datepicker-modal">', '<div class="modal-content datepicker-container">', '<div class="datepicker-date-display">', '<span class="year-text"></span>', '<span class="date-text"></span>', "</div>", '<div class="datepicker-calendar-container">', '<div class="datepicker-calendar"></div>', '<div class="datepicker-footer">', '<button class="btn-flat datepicker-clear waves-effect" style="visibility: hidden;" type="button"></button>', '<div class="confirmation-btns">', '<button class="btn-flat datepicker-cancel waves-effect" type="button"></button>', '<button class="btn-flat datepicker-done waves-effect" type="button"></button>', "</div>", "</div>", "</div>", "</div>", "</div>"].join(""),
            M.Datepicker = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "datepicker", "M_Datepicker")
        }(cash),
        function(t) {
            "use strict";
            var e = {
                dialRadius: 135,
                outerRadius: 105,
                innerRadius: 70,
                tickRadius: 20,
                duration: 350,
                container: null,
                defaultTime: "now",
                fromNow: 0,
                showClearBtn: !1,
                i18n: {
                    cancel: "Cancel",
                    clear: "Clear",
                    done: "Ok"
                },
                autoClose: !1,
                twelveHour: !0,
                vibrate: !0,
                onOpenStart: null,
                onOpenEnd: null,
                onCloseStart: null,
                onCloseEnd: null,
                onSelect: null
            }
              , n = function(n) {
                function i(e, n) {
                    l(this, i);
                    var o = a(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, e, n));
                    return o.el.M_Timepicker = o,
                    o.options = t.extend({}, i.defaults, n),
                    o.id = M.guid(),
                    o._insertHTMLIntoDOM(),
                    o._setupModal(),
                    o._setupVariables(),
                    o._setupEventHandlers(),
                    o._clockSetup(),
                    o._pickerSetup(),
                    o
                }
                return r(i, u),
                s(i, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this.modal.destroy(),
                        t(this.modalEl).remove(),
                        this.el.M_Timepicker = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleInputKeydownBound = this._handleInputKeydown.bind(this),
                        this._handleInputClickBound = this._handleInputClick.bind(this),
                        this._handleClockClickStartBound = this._handleClockClickStart.bind(this),
                        this._handleDocumentClickMoveBound = this._handleDocumentClickMove.bind(this),
                        this._handleDocumentClickEndBound = this._handleDocumentClickEnd.bind(this),
                        this.el.addEventListener("click", this._handleInputClickBound),
                        this.el.addEventListener("keydown", this._handleInputKeydownBound),
                        this.plate.addEventListener("mousedown", this._handleClockClickStartBound),
                        this.plate.addEventListener("touchstart", this._handleClockClickStartBound),
                        t(this.spanHours).on("click", this.showView.bind(this, "hours")),
                        t(this.spanMinutes).on("click", this.showView.bind(this, "minutes"))
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        this.el.removeEventListener("click", this._handleInputClickBound),
                        this.el.removeEventListener("keydown", this._handleInputKeydownBound)
                    }
                }, {
                    key: "_handleInputClick",
                    value: function() {
                        this.open()
                    }
                }, {
                    key: "_handleInputKeydown",
                    value: function(t) {
                        t.which === M.keys.ENTER && (t.preventDefault(),
                        this.open())
                    }
                }, {
                    key: "_handleClockClickStart",
                    value: function(t) {
                        t.preventDefault();
                        var e = this.plate.getBoundingClientRect()
                          , n = e.left
                          , o = e.top;
                        this.x0 = n + this.options.dialRadius,
                        this.y0 = o + this.options.dialRadius,
                        this.moved = !1;
                        var s = i._Pos(t);
                        this.dx = s.x - this.x0,
                        this.dy = s.y - this.y0,
                        this.setHand(this.dx, this.dy, !1),
                        document.addEventListener("mousemove", this._handleDocumentClickMoveBound),
                        document.addEventListener("touchmove", this._handleDocumentClickMoveBound),
                        document.addEventListener("mouseup", this._handleDocumentClickEndBound),
                        document.addEventListener("touchend", this._handleDocumentClickEndBound)
                    }
                }, {
                    key: "_handleDocumentClickMove",
                    value: function(t) {
                        t.preventDefault();
                        var e = i._Pos(t)
                          , n = e.x - this.x0
                          , o = e.y - this.y0;
                        this.moved = !0,
                        this.setHand(n, o, !1, !0)
                    }
                }, {
                    key: "_handleDocumentClickEnd",
                    value: function(e) {
                        var n = this;
                        e.preventDefault(),
                        document.removeEventListener("mouseup", this._handleDocumentClickEndBound),
                        document.removeEventListener("touchend", this._handleDocumentClickEndBound);
                        var o = i._Pos(e)
                          , s = o.x - this.x0
                          , a = o.y - this.y0;
                        this.moved && s === this.dx && a === this.dy && this.setHand(s, a),
                        "hours" === this.currentView ? this.showView("minutes", this.options.duration / 2) : this.options.autoClose && (t(this.minutesView).addClass("timepicker-dial-out"),
                        setTimeout(function() {
                            n.done()
                        }, this.options.duration / 2)),
                        "function" == typeof this.options.onSelect && this.options.onSelect.call(this, this.hours, this.minutes),
                        document.removeEventListener("mousemove", this._handleDocumentClickMoveBound),
                        document.removeEventListener("touchmove", this._handleDocumentClickMoveBound)
                    }
                }, {
                    key: "_insertHTMLIntoDOM",
                    value: function() {
                        this.$modalEl = t(i._template),
                        this.modalEl = this.$modalEl[0],
                        this.modalEl.id = "modal-" + this.id;
                        var e = document.querySelector(this.options.container);
                        this.options.container && e ? this.$modalEl.appendTo(e) : this.$modalEl.insertBefore(this.el)
                    }
                }, {
                    key: "_setupModal",
                    value: function() {
                        var t = this;
                        this.modal = M.Modal.init(this.modalEl, {
                            onOpenStart: this.options.onOpenStart,
                            onOpenEnd: this.options.onOpenEnd,
                            onCloseStart: this.options.onCloseStart,
                            onCloseEnd: function() {
                                "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t),
                                t.isOpen = !1
                            }
                        })
                    }
                }, {
                    key: "_setupVariables",
                    value: function() {
                        this.currentView = "hours",
                        this.vibrate = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null,
                        this._canvas = this.modalEl.querySelector(".timepicker-canvas"),
                        this.plate = this.modalEl.querySelector(".timepicker-plate"),
                        this.hoursView = this.modalEl.querySelector(".timepicker-hours"),
                        this.minutesView = this.modalEl.querySelector(".timepicker-minutes"),
                        this.spanHours = this.modalEl.querySelector(".timepicker-span-hours"),
                        this.spanMinutes = this.modalEl.querySelector(".timepicker-span-minutes"),
                        this.spanAmPm = this.modalEl.querySelector(".timepicker-span-am-pm"),
                        this.footer = this.modalEl.querySelector(".timepicker-footer"),
                        this.amOrPm = "PM"
                    }
                }, {
                    key: "_pickerSetup",
                    value: function() {
                        var e = t('<button class="btn-flat timepicker-clear waves-effect" style="visibility: hidden;" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.clear + "</button>").appendTo(this.footer).on("click", this.clear.bind(this));
                        this.options.showClearBtn && e.css({
                            visibility: ""
                        });
                        var n = t('<div class="confirmation-btns"></div>');
                        t('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.cancel + "</button>").appendTo(n).on("click", this.close.bind(this)),
                        t('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.done + "</button>").appendTo(n).on("click", this.done.bind(this)),
                        n.appendTo(this.footer)
                    }
                }, {
                    key: "_clockSetup",
                    value: function() {
                        this.options.twelveHour && (this.$amBtn = t('<div class="am-btn">AM</div>'),
                        this.$pmBtn = t('<div class="pm-btn">PM</div>'),
                        this.$amBtn.on("click", this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm),
                        this.$pmBtn.on("click", this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm)),
                        this._buildHoursView(),
                        this._buildMinutesView(),
                        this._buildSVGClock()
                    }
                }, {
                    key: "_buildSVGClock",
                    value: function() {
                        var t = this.options.dialRadius
                          , e = this.options.tickRadius
                          , n = 2 * t
                          , o = i._createSVGEl("svg");
                        o.setAttribute("class", "timepicker-svg"),
                        o.setAttribute("width", n),
                        o.setAttribute("height", n);
                        var s = i._createSVGEl("g");
                        s.setAttribute("transform", "translate(" + t + "," + t + ")");
                        var a = i._createSVGEl("circle");
                        a.setAttribute("class", "timepicker-canvas-bearing"),
                        a.setAttribute("cx", 0),
                        a.setAttribute("cy", 0),
                        a.setAttribute("r", 4);
                        var r = i._createSVGEl("line");
                        r.setAttribute("x1", 0),
                        r.setAttribute("y1", 0);
                        var l = i._createSVGEl("circle");
                        l.setAttribute("class", "timepicker-canvas-bg"),
                        l.setAttribute("r", e),
                        s.appendChild(r),
                        s.appendChild(l),
                        s.appendChild(a),
                        o.appendChild(s),
                        this._canvas.appendChild(o),
                        this.hand = r,
                        this.bg = l,
                        this.bearing = a,
                        this.g = s
                    }
                }, {
                    key: "_buildHoursView",
                    value: function() {
                        var e = t('<div class="timepicker-tick"></div>');
                        if (this.options.twelveHour)
                            for (var n = 1; n < 13; n += 1) {
                                var i = e.clone()
                                  , o = n / 6 * Math.PI
                                  , s = this.options.outerRadius;
                                i.css({
                                    left: this.options.dialRadius + Math.sin(o) * s - this.options.tickRadius + "px",
                                    top: this.options.dialRadius - Math.cos(o) * s - this.options.tickRadius + "px"
                                }),
                                i.html(0 === n ? "00" : n),
                                this.hoursView.appendChild(i[0])
                            }
                        else
                            for (var a = 0; a < 24; a += 1) {
                                var r = e.clone()
                                  , l = a / 6 * Math.PI
                                  , u = a > 0 && a < 13 ? this.options.innerRadius : this.options.outerRadius;
                                r.css({
                                    left: this.options.dialRadius + Math.sin(l) * u - this.options.tickRadius + "px",
                                    top: this.options.dialRadius - Math.cos(l) * u - this.options.tickRadius + "px"
                                }),
                                r.html(0 === a ? "00" : a),
                                this.hoursView.appendChild(r[0])
                            }
                    }
                }, {
                    key: "_buildMinutesView",
                    value: function() {
                        for (var e = t('<div class="timepicker-tick"></div>'), n = 0; n < 60; n += 5) {
                            var o = e.clone()
                              , s = n / 30 * Math.PI;
                            o.css({
                                left: this.options.dialRadius + Math.sin(s) * this.options.outerRadius - this.options.tickRadius + "px",
                                top: this.options.dialRadius - Math.cos(s) * this.options.outerRadius - this.options.tickRadius + "px"
                            }),
                            o.html(i._addLeadingZero(n)),
                            this.minutesView.appendChild(o[0])
                        }
                    }
                }, {
                    key: "_handleAmPmClick",
                    value: function(e) {
                        var n = t(e.target);
                        this.amOrPm = n.hasClass("am-btn") ? "AM" : "PM",
                        this._updateAmPmView()
                    }
                }, {
                    key: "_updateAmPmView",
                    value: function() {
                        this.options.twelveHour && (this.$amBtn.toggleClass("text-primary", "AM" === this.amOrPm),
                        this.$pmBtn.toggleClass("text-primary", "PM" === this.amOrPm))
                    }
                }, {
                    key: "_updateTimeFromInput",
                    value: function() {
                        var t = ((this.el.value || this.options.defaultTime || "") + "").split(":");
                        if (this.options.twelveHour && void 0 !== t[1] && (t[1].toUpperCase().indexOf("AM") > 0 ? this.amOrPm = "AM" : this.amOrPm = "PM",
                        t[1] = t[1].replace("AM", "").replace("PM", "")),
                        "now" === t[0]) {
                            var e = new Date(+new Date + this.options.fromNow);
                            t = [e.getHours(), e.getMinutes()],
                            this.options.twelveHour && (this.amOrPm = t[0] >= 12 && t[0] < 24 ? "PM" : "AM")
                        }
                        this.hours = +t[0] || 0,
                        this.minutes = +t[1] || 0,
                        this.spanHours.innerHTML = this.hours,
                        this.spanMinutes.innerHTML = i._addLeadingZero(this.minutes),
                        this._updateAmPmView()
                    }
                }, {
                    key: "showView",
                    value: function(e, n) {
                        "minutes" === e && t(this.hoursView).css("visibility");
                        var i = "hours" === e
                          , o = i ? this.hoursView : this.minutesView
                          , s = i ? this.minutesView : this.hoursView;
                        this.currentView = e,
                        t(this.spanHours).toggleClass("text-primary", i),
                        t(this.spanMinutes).toggleClass("text-primary", !i),
                        s.classList.add("timepicker-dial-out"),
                        t(o).css("visibility", "visible").removeClass("timepicker-dial-out"),
                        this.resetClock(n),
                        clearTimeout(this.toggleViewTimer),
                        this.toggleViewTimer = setTimeout(function() {
                            t(s).css("visibility", "hidden")
                        }, this.options.duration)
                    }
                }, {
                    key: "resetClock",
                    value: function(e) {
                        var n = this.currentView
                          , i = this[n]
                          , o = "hours" === n
                          , s = i * (Math.PI / (o ? 6 : 30))
                          , a = o && i > 0 && i < 13 ? this.options.innerRadius : this.options.outerRadius
                          , r = Math.sin(s) * a
                          , l = -Math.cos(s) * a
                          , u = this;
                        e ? (t(this.canvas).addClass("timepicker-canvas-out"),
                        setTimeout(function() {
                            t(u.canvas).removeClass("timepicker-canvas-out"),
                            u.setHand(r, l)
                        }, e)) : this.setHand(r, l)
                    }
                }, {
                    key: "setHand",
                    value: function(t, e, n) {
                        var o = this
                          , s = Math.atan2(t, -e)
                          , a = "hours" === this.currentView
                          , r = Math.PI / (a || n ? 6 : 30)
                          , l = Math.sqrt(t * t + e * e)
                          , u = a && l < (this.options.outerRadius + this.options.innerRadius) / 2
                          , c = u ? this.options.innerRadius : this.options.outerRadius;
                        this.options.twelveHour && (c = this.options.outerRadius),
                        s < 0 && (s = 2 * Math.PI + s);
                        var h = Math.round(s / r);
                        s = h * r,
                        this.options.twelveHour ? a ? 0 === h && (h = 12) : (n && (h *= 5),
                        60 === h && (h = 0)) : a ? (12 === h && (h = 0),
                        h = u ? 0 === h ? 12 : h : 0 === h ? 0 : h + 12) : (n && (h *= 5),
                        60 === h && (h = 0)),
                        this[this.currentView] !== h && this.vibrate && this.options.vibrate && (this.vibrateTimer || (navigator[this.vibrate](10),
                        this.vibrateTimer = setTimeout(function() {
                            o.vibrateTimer = null
                        }, 100))),
                        this[this.currentView] = h,
                        a ? this.spanHours.innerHTML = h : this.spanMinutes.innerHTML = i._addLeadingZero(h);
                        var d = Math.sin(s) * (c - this.options.tickRadius)
                          , p = -Math.cos(s) * (c - this.options.tickRadius)
                          , f = Math.sin(s) * c
                          , v = -Math.cos(s) * c;
                        this.hand.setAttribute("x2", d),
                        this.hand.setAttribute("y2", p),
                        this.bg.setAttribute("cx", f),
                        this.bg.setAttribute("cy", v)
                    }
                }, {
                    key: "open",
                    value: function() {
                        this.isOpen || (this.isOpen = !0,
                        this._updateTimeFromInput(),
                        this.showView("hours"),
                        this.modal.open())
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.isOpen && (this.isOpen = !1,
                        this.modal.close())
                    }
                }, {
                    key: "done",
                    value: function(t, e) {
                        var n = this.el.value
                          , o = e ? "" : i._addLeadingZero(this.hours) + ":" + i._addLeadingZero(this.minutes);
                        this.time = o,
                        !e && this.options.twelveHour && (o = o + " " + this.amOrPm),
                        this.el.value = o,
                        o !== n && this.$el.trigger("change"),
                        this.close(),
                        this.el.focus()
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.done(null, !0)
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return o(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "_addLeadingZero",
                    value: function(t) {
                        return (t < 10 ? "0" : "") + t
                    }
                }, {
                    key: "_createSVGEl",
                    value: function(t) {
                        return document.createElementNS("http://www.w3.org/2000/svg", t)
                    }
                }, {
                    key: "_Pos",
                    value: function(t) {
                        return t.targetTouches && t.targetTouches.length >= 1 ? {
                            x: t.targetTouches[0].clientX,
                            y: t.targetTouches[0].clientY
                        } : {
                            x: t.clientX,
                            y: t.clientY
                        }
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Timepicker
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return e
                    }
                }]),
                i
            }();
            n._template = ['<div class= "modal timepicker-modal">', '<div class="modal-content timepicker-container">', '<div class="timepicker-digital-display">', '<div class="timepicker-text-container">', '<div class="timepicker-display-column">', '<span class="timepicker-span-hours text-primary"></span>', ":", '<span class="timepicker-span-minutes"></span>', "</div>", '<div class="timepicker-display-column timepicker-display-am-pm">', '<div class="timepicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="timepicker-analog-display">', '<div class="timepicker-plate">', '<div class="timepicker-canvas"></div>', '<div class="timepicker-dial timepicker-hours"></div>', '<div class="timepicker-dial timepicker-minutes timepicker-dial-out"></div>', "</div>", '<div class="timepicker-footer"></div>', "</div>", "</div>", "</div>"].join(""),
            M.Timepicker = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "timepicker", "M_Timepicker")
        }(cash),
        function(t) {
            "use strict";
            var e = {}
              , n = function(n) {
                function i(e, n) {
                    l(this, i);
                    var o = a(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, e, n));
                    return o.el.M_CharacterCounter = o,
                    o.options = t.extend({}, i.defaults, n),
                    o.isInvalid = !1,
                    o.isValidLength = !1,
                    o._setupCounter(),
                    o._setupEventHandlers(),
                    o
                }
                return r(i, u),
                s(i, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this.el.CharacterCounter = void 0,
                        this._removeCounter()
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleUpdateCounterBound = this.updateCounter.bind(this),
                        this.el.addEventListener("focus", this._handleUpdateCounterBound, !0),
                        this.el.addEventListener("input", this._handleUpdateCounterBound, !0)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        this.el.removeEventListener("focus", this._handleUpdateCounterBound, !0),
                        this.el.removeEventListener("input", this._handleUpdateCounterBound, !0)
                    }
                }, {
                    key: "_setupCounter",
                    value: function() {
                        this.counterEl = document.createElement("span"),
                        t(this.counterEl).addClass("character-counter").css({
                            float: "right",
                            "font-size": "12px",
                            height: 1
                        }),
                        this.$el.parent().append(this.counterEl)
                    }
                }, {
                    key: "_removeCounter",
                    value: function() {
                        t(this.counterEl).remove()
                    }
                }, {
                    key: "updateCounter",
                    value: function() {
                        var e = +this.$el.attr("data-length")
                          , n = this.el.value.length;
                        this.isValidLength = n <= e;
                        var i = n;
                        e && (i += "/" + e,
                        this._validateInput()),
                        t(this.counterEl).html(i)
                    }
                }, {
                    key: "_validateInput",
                    value: function() {
                        this.isValidLength && this.isInvalid ? (this.isInvalid = !1,
                        this.$el.removeClass("invalid")) : this.isValidLength || this.isInvalid || (this.isInvalid = !0,
                        this.$el.removeClass("valid"),
                        this.$el.addClass("invalid"))
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return o(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_CharacterCounter
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return e
                    }
                }]),
                i
            }();
            M.CharacterCounter = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "characterCounter", "M_CharacterCounter")
        }(cash),
        function(t) {
            "use strict";
            var e = {
                duration: 200,
                dist: -100,
                shift: 0,
                padding: 0,
                numVisible: 5,
                fullWidth: !1,
                indicators: !1,
                noWrap: !1,
                onCycleTo: null
            }
              , n = function(n) {
                function i(e, n) {
                    l(this, i);
                    var o = a(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, e, n));
                    return o.el.M_Carousel = o,
                    o.options = t.extend({}, i.defaults, n),
                    o.hasMultipleSlides = o.$el.find(".carousel-item").length > 1,
                    o.showIndicators = o.options.indicators && o.hasMultipleSlides,
                    o.noWrap = o.options.noWrap || !o.hasMultipleSlides,
                    o.pressed = !1,
                    o.dragged = !1,
                    o.offset = o.target = 0,
                    o.images = [],
                    o.itemWidth = o.$el.find(".carousel-item").first().innerWidth(),
                    o.itemHeight = o.$el.find(".carousel-item").first().innerHeight(),
                    o.dim = 2 * o.itemWidth + o.options.padding || 1,
                    o._autoScrollBound = o._autoScroll.bind(o),
                    o._trackBound = o._track.bind(o),
                    o.options.fullWidth && (o.options.dist = 0,
                    o._setCarouselHeight(),
                    o.showIndicators && o.$el.find(".carousel-fixed-item").addClass("with-indicators")),
                    o.$indicators = t('<ul class="indicators"></ul>'),
                    o.$el.find(".carousel-item").each(function(e, n) {
                        if (o.images.push(e),
                        o.showIndicators) {
                            var i = t('<li class="indicator-item"></li>');
                            0 === n && i[0].classList.add("active"),
                            o.$indicators.append(i)
                        }
                    }),
                    o.showIndicators && o.$el.append(o.$indicators),
                    o.count = o.images.length,
                    o.options.numVisible = Math.min(o.count, o.options.numVisible),
                    o.xform = "transform",
                    ["webkit", "Moz", "O", "ms"].every(function(t) {
                        var e = t + "Transform";
                        return void 0 === document.body.style[e] || (o.xform = e,
                        !1)
                    }),
                    o._setupEventHandlers(),
                    o._scroll(o.offset),
                    o
                }
                return r(i, u),
                s(i, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this.el.M_Carousel = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        var t = this;
                        this._handleCarouselTapBound = this._handleCarouselTap.bind(this),
                        this._handleCarouselDragBound = this._handleCarouselDrag.bind(this),
                        this._handleCarouselReleaseBound = this._handleCarouselRelease.bind(this),
                        this._handleCarouselClickBound = this._handleCarouselClick.bind(this),
                        void 0 !== window.ontouchstart && (this.el.addEventListener("touchstart", this._handleCarouselTapBound),
                        this.el.addEventListener("touchmove", this._handleCarouselDragBound),
                        this.el.addEventListener("touchend", this._handleCarouselReleaseBound)),
                        this.el.addEventListener("mousedown", this._handleCarouselTapBound),
                        this.el.addEventListener("mousemove", this._handleCarouselDragBound),
                        this.el.addEventListener("mouseup", this._handleCarouselReleaseBound),
                        this.el.addEventListener("mouseleave", this._handleCarouselReleaseBound),
                        this.el.addEventListener("click", this._handleCarouselClickBound),
                        this.showIndicators && this.$indicators && (this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this),
                        this.$indicators.find(".indicator-item").each(function(e, n) {
                            e.addEventListener("click", t._handleIndicatorClickBound)
                        }));
                        var e = M.throttle(this._handleResize, 200);
                        this._handleThrottledResizeBound = e.bind(this),
                        window.addEventListener("resize", this._handleThrottledResizeBound)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        var t = this;
                        void 0 !== window.ontouchstart && (this.el.removeEventListener("touchstart", this._handleCarouselTapBound),
                        this.el.removeEventListener("touchmove", this._handleCarouselDragBound),
                        this.el.removeEventListener("touchend", this._handleCarouselReleaseBound)),
                        this.el.removeEventListener("mousedown", this._handleCarouselTapBound),
                        this.el.removeEventListener("mousemove", this._handleCarouselDragBound),
                        this.el.removeEventListener("mouseup", this._handleCarouselReleaseBound),
                        this.el.removeEventListener("mouseleave", this._handleCarouselReleaseBound),
                        this.el.removeEventListener("click", this._handleCarouselClickBound),
                        this.showIndicators && this.$indicators && this.$indicators.find(".indicator-item").each(function(e, n) {
                            e.removeEventListener("click", t._handleIndicatorClickBound)
                        }),
                        window.removeEventListener("resize", this._handleThrottledResizeBound)
                    }
                }, {
                    key: "_handleCarouselTap",
                    value: function(e) {
                        "mousedown" === e.type && t(e.target).is("img") && e.preventDefault(),
                        this.pressed = !0,
                        this.dragged = !1,
                        this.verticalDragged = !1,
                        this.reference = this._xpos(e),
                        this.referenceY = this._ypos(e),
                        this.velocity = this.amplitude = 0,
                        this.frame = this.offset,
                        this.timestamp = Date.now(),
                        clearInterval(this.ticker),
                        this.ticker = setInterval(this._trackBound, 100)
                    }
                }, {
                    key: "_handleCarouselDrag",
                    value: function(t) {
                        var e = void 0
                          , n = void 0
                          , i = void 0;
                        if (this.pressed)
                            if (e = this._xpos(t),
                            n = this._ypos(t),
                            i = this.reference - e,
                            Math.abs(this.referenceY - n) < 30 && !this.verticalDragged)
                                (i > 2 || i < -2) && (this.dragged = !0,
                                this.reference = e,
                                this._scroll(this.offset + i));
                            else {
                                if (this.dragged)
                                    return t.preventDefault(),
                                    t.stopPropagation(),
                                    !1;
                                this.verticalDragged = !0
                            }
                        if (this.dragged)
                            return t.preventDefault(),
                            t.stopPropagation(),
                            !1
                    }
                }, {
                    key: "_handleCarouselRelease",
                    value: function(t) {
                        if (this.pressed)
                            return this.pressed = !1,
                            clearInterval(this.ticker),
                            this.target = this.offset,
                            (this.velocity > 10 || this.velocity < -10) && (this.amplitude = .9 * this.velocity,
                            this.target = this.offset + this.amplitude),
                            this.target = Math.round(this.target / this.dim) * this.dim,
                            this.noWrap && (this.target >= this.dim * (this.count - 1) ? this.target = this.dim * (this.count - 1) : this.target < 0 && (this.target = 0)),
                            this.amplitude = this.target - this.offset,
                            this.timestamp = Date.now(),
                            requestAnimationFrame(this._autoScrollBound),
                            this.dragged && (t.preventDefault(),
                            t.stopPropagation()),
                            !1
                    }
                }, {
                    key: "_handleCarouselClick",
                    value: function(e) {
                        if (this.dragged)
                            return e.preventDefault(),
                            e.stopPropagation(),
                            !1;
                        if (!this.options.fullWidth) {
                            var n = t(e.target).closest(".carousel-item").index();
                            0 !== this._wrap(this.center) - n && (e.preventDefault(),
                            e.stopPropagation()),
                            this._cycleTo(n)
                        }
                    }
                }, {
                    key: "_handleIndicatorClick",
                    value: function(e) {
                        e.stopPropagation();
                        var n = t(e.target).closest(".indicator-item");
                        n.length && this._cycleTo(n.index())
                    }
                }, {
                    key: "_handleResize",
                    value: function(t) {
                        this.options.fullWidth ? (this.itemWidth = this.$el.find(".carousel-item").first().innerWidth(),
                        this.imageHeight = this.$el.find(".carousel-item.active").height(),
                        this.dim = 2 * this.itemWidth + this.options.padding,
                        this.offset = 2 * this.center * this.itemWidth,
                        this.target = this.offset,
                        this._setCarouselHeight(!0)) : this._scroll()
                    }
                }, {
                    key: "_setCarouselHeight",
                    value: function(t) {
                        var e = this
                          , n = this.$el.find(".carousel-item.active").length ? this.$el.find(".carousel-item.active").first() : this.$el.find(".carousel-item").first()
                          , i = n.find("img").first();
                        if (i.length)
                            if (i[0].complete) {
                                var o = i.height();
                                if (o > 0)
                                    this.$el.css("height", o + "px");
                                else {
                                    var s = i[0].naturalWidth
                                      , a = i[0].naturalHeight
                                      , r = this.$el.width() / s * a;
                                    this.$el.css("height", r + "px")
                                }
                            } else
                                i.one("load", function(t, n) {
                                    e.$el.css("height", t.offsetHeight + "px")
                                });
                        else if (!t) {
                            var l = n.height();
                            this.$el.css("height", l + "px")
                        }
                    }
                }, {
                    key: "_xpos",
                    value: function(t) {
                        return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientX : t.clientX
                    }
                }, {
                    key: "_ypos",
                    value: function(t) {
                        return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientY : t.clientY
                    }
                }, {
                    key: "_wrap",
                    value: function(t) {
                        return t >= this.count ? t % this.count : t < 0 ? this._wrap(this.count + t % this.count) : t
                    }
                }, {
                    key: "_track",
                    value: function() {
                        var t, e, n, i;
                        e = (t = Date.now()) - this.timestamp,
                        this.timestamp = t,
                        n = this.offset - this.frame,
                        this.frame = this.offset,
                        i = 1e3 * n / (1 + e),
                        this.velocity = .8 * i + .2 * this.velocity
                    }
                }, {
                    key: "_autoScroll",
                    value: function() {
                        var t = void 0
                          , e = void 0;
                        this.amplitude && (t = Date.now() - this.timestamp,
                        (e = this.amplitude * Math.exp(-t / this.options.duration)) > 2 || e < -2 ? (this._scroll(this.target - e),
                        requestAnimationFrame(this._autoScrollBound)) : this._scroll(this.target))
                    }
                }, {
                    key: "_scroll",
                    value: function(e) {
                        var n = this;
                        this.$el.hasClass("scrolling") || this.el.classList.add("scrolling"),
                        null != this.scrollingTimeout && window.clearTimeout(this.scrollingTimeout),
                        this.scrollingTimeout = window.setTimeout(function() {
                            n.$el.removeClass("scrolling")
                        }, this.options.duration);
                        var i, o, s, a, r = void 0, l = void 0, u = void 0, c = void 0, h = void 0, d = void 0, p = this.center, f = 1 / this.options.numVisible;
                        if (this.offset = "number" == typeof e ? e : this.offset,
                        this.center = Math.floor((this.offset + this.dim / 2) / this.dim),
                        a = -(s = (o = this.offset - this.center * this.dim) < 0 ? 1 : -1) * o * 2 / this.dim,
                        i = this.count >> 1,
                        this.options.fullWidth ? (u = "translateX(0)",
                        d = 1) : (u = "translateX(" + (this.el.clientWidth - this.itemWidth) / 2 + "px) ",
                        u += "translateY(" + (this.el.clientHeight - this.itemHeight) / 2 + "px)",
                        d = 1 - f * a),
                        this.showIndicators) {
                            var v = this.center % this.count
                              , g = this.$indicators.find(".indicator-item.active");
                            g.index() !== v && (g.removeClass("active"),
                            this.$indicators.find(".indicator-item").eq(v)[0].classList.add("active"))
                        }
                        if (!this.noWrap || this.center >= 0 && this.center < this.count) {
                            l = this.images[this._wrap(this.center)],
                            t(l).hasClass("active") || (this.$el.find(".carousel-item").removeClass("active"),
                            l.classList.add("active"));
                            var m = u + " translateX(" + -o / 2 + "px) translateX(" + s * this.options.shift * a * r + "px) translateZ(" + this.options.dist * a + "px)";
                            this._updateItemStyle(l, d, 0, m)
                        }
                        for (r = 1; r <= i; ++r) {
                            if (this.options.fullWidth ? (c = this.options.dist,
                            h = r === i && o < 0 ? 1 - a : 1) : (c = this.options.dist * (2 * r + a * s),
                            h = 1 - f * (2 * r + a * s)),
                            !this.noWrap || this.center + r < this.count) {
                                l = this.images[this._wrap(this.center + r)];
                                var y = u + " translateX(" + (this.options.shift + (this.dim * r - o) / 2) + "px) translateZ(" + c + "px)";
                                this._updateItemStyle(l, h, -r, y)
                            }
                            if (this.options.fullWidth ? (c = this.options.dist,
                            h = r === i && o > 0 ? 1 - a : 1) : (c = this.options.dist * (2 * r - a * s),
                            h = 1 - f * (2 * r - a * s)),
                            !this.noWrap || this.center - r >= 0) {
                                l = this.images[this._wrap(this.center - r)];
                                var _ = u + " translateX(" + (-this.options.shift + (-this.dim * r - o) / 2) + "px) translateZ(" + c + "px)";
                                this._updateItemStyle(l, h, -r, _)
                            }
                        }
                        if (!this.noWrap || this.center >= 0 && this.center < this.count) {
                            l = this.images[this._wrap(this.center)];
                            var b = u + " translateX(" + -o / 2 + "px) translateX(" + s * this.options.shift * a + "px) translateZ(" + this.options.dist * a + "px)";
                            this._updateItemStyle(l, d, 0, b)
                        }
                        var k = this.$el.find(".carousel-item").eq(this._wrap(this.center));
                        p !== this.center && "function" == typeof this.options.onCycleTo && this.options.onCycleTo.call(this, k[0], this.dragged),
                        "function" == typeof this.oneTimeCallback && (this.oneTimeCallback.call(this, k[0], this.dragged),
                        this.oneTimeCallback = null)
                    }
                }, {
                    key: "_updateItemStyle",
                    value: function(t, e, n, i) {
                        t.style[this.xform] = i,
                        t.style.zIndex = n,
                        t.style.opacity = e,
                        t.style.visibility = "visible"
                    }
                }, {
                    key: "_cycleTo",
                    value: function(t, e) {
                        var n = this.center % this.count - t;
                        this.noWrap || (n < 0 ? Math.abs(n + this.count) < Math.abs(n) && (n += this.count) : n > 0 && Math.abs(n - this.count) < n && (n -= this.count)),
                        this.target = this.dim * Math.round(this.offset / this.dim),
                        n < 0 ? this.target += this.dim * Math.abs(n) : n > 0 && (this.target -= this.dim * n),
                        "function" == typeof e && (this.oneTimeCallback = e),
                        this.offset !== this.target && (this.amplitude = this.target - this.offset,
                        this.timestamp = Date.now(),
                        requestAnimationFrame(this._autoScrollBound))
                    }
                }, {
                    key: "next",
                    value: function(t) {
                        (void 0 === t || isNaN(t)) && (t = 1);
                        var e = this.center + t;
                        if (e >= this.count || e < 0) {
                            if (this.noWrap)
                                return;
                            e = this._wrap(e)
                        }
                        this._cycleTo(e)
                    }
                }, {
                    key: "prev",
                    value: function(t) {
                        (void 0 === t || isNaN(t)) && (t = 1);
                        var e = this.center - t;
                        if (e >= this.count || e < 0) {
                            if (this.noWrap)
                                return;
                            e = this._wrap(e)
                        }
                        this._cycleTo(e)
                    }
                }, {
                    key: "set",
                    value: function(t, e) {
                        if ((void 0 === t || isNaN(t)) && (t = 0),
                        t > this.count || t < 0) {
                            if (this.noWrap)
                                return;
                            t = this._wrap(t)
                        }
                        this._cycleTo(t, e)
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return o(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Carousel
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return e
                    }
                }]),
                i
            }();
            M.Carousel = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "carousel", "M_Carousel")
        }(cash),
        function(t) {
            "use strict";
            var e = {
                onOpen: void 0,
                onClose: void 0
            }
              , n = function(n) {
                function i(e, n) {
                    l(this, i);
                    var o = a(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, e, n));
                    return o.el.M_TapTarget = o,
                    o.options = t.extend({}, i.defaults, n),
                    o.isOpen = !1,
                    o.$origin = t("#" + o.$el.attr("data-target")),
                    o._setup(),
                    o._calculatePositioning(),
                    o._setupEventHandlers(),
                    o
                }
                return r(i, u),
                s(i, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this.el.TapTarget = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleDocumentClickBound = this._handleDocumentClick.bind(this),
                        this._handleTargetClickBound = this._handleTargetClick.bind(this),
                        this._handleOriginClickBound = this._handleOriginClick.bind(this),
                        this.el.addEventListener("click", this._handleTargetClickBound),
                        this.originEl.addEventListener("click", this._handleOriginClickBound);
                        var t = M.throttle(this._handleResize, 200);
                        this._handleThrottledResizeBound = t.bind(this),
                        window.addEventListener("resize", this._handleThrottledResizeBound)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        this.el.removeEventListener("click", this._handleTargetClickBound),
                        this.originEl.removeEventListener("click", this._handleOriginClickBound),
                        window.removeEventListener("resize", this._handleThrottledResizeBound)
                    }
                }, {
                    key: "_handleTargetClick",
                    value: function(t) {
                        this.open()
                    }
                }, {
                    key: "_handleOriginClick",
                    value: function(t) {
                        this.close()
                    }
                }, {
                    key: "_handleResize",
                    value: function(t) {
                        this._calculatePositioning()
                    }
                }, {
                    key: "_handleDocumentClick",
                    value: function(e) {
                        t(e.target).closest(".tap-target-wrapper").length || (this.close(),
                        e.preventDefault(),
                        e.stopPropagation())
                    }
                }, {
                    key: "_setup",
                    value: function() {
                        this.wrapper = this.$el.parent()[0],
                        this.waveEl = t(this.wrapper).find(".tap-target-wave")[0],
                        this.originEl = t(this.wrapper).find(".tap-target-origin")[0],
                        this.contentEl = this.$el.find(".tap-target-content")[0],
                        t(this.wrapper).hasClass(".tap-target-wrapper") || (this.wrapper = document.createElement("div"),
                        this.wrapper.classList.add("tap-target-wrapper"),
                        this.$el.before(t(this.wrapper)),
                        this.wrapper.append(this.el)),
                        this.contentEl || (this.contentEl = document.createElement("div"),
                        this.contentEl.classList.add("tap-target-content"),
                        this.$el.append(this.contentEl)),
                        this.waveEl || (this.waveEl = document.createElement("div"),
                        this.waveEl.classList.add("tap-target-wave"),
                        this.originEl || (this.originEl = this.$origin.clone(!0, !0),
                        this.originEl.addClass("tap-target-origin"),
                        this.originEl.removeAttr("id"),
                        this.originEl.removeAttr("style"),
                        this.originEl = this.originEl[0],
                        this.waveEl.append(this.originEl)),
                        this.wrapper.append(this.waveEl))
                    }
                }, {
                    key: "_calculatePositioning",
                    value: function() {
                        var e = "fixed" === this.$origin.css("position");
                        if (!e)
                            for (var n = this.$origin.parents(), i = 0; i < n.length && !(e = "fixed" == t(n[i]).css("position")); i++)
                                ;
                        var o = this.$origin.outerWidth()
                          , s = this.$origin.outerHeight()
                          , a = e ? this.$origin.offset().top - M.getDocumentScrollTop() : this.$origin.offset().top
                          , r = e ? this.$origin.offset().left - M.getDocumentScrollLeft() : this.$origin.offset().left
                          , l = window.innerWidth
                          , u = window.innerHeight
                          , c = l / 2
                          , h = u / 2
                          , d = r <= c
                          , p = r > c
                          , f = a <= h
                          , v = a > h
                          , g = r >= .25 * l && r <= .75 * l
                          , m = this.$el.outerWidth()
                          , y = this.$el.outerHeight()
                          , _ = a + s / 2 - y / 2
                          , b = r + o / 2 - m / 2
                          , k = e ? "fixed" : "absolute"
                          , w = g ? m : m / 2 + o
                          , C = y / 2
                          , E = f ? y / 2 : 0
                          , x = d && !g ? m / 2 - o : 0
                          , O = o
                          , L = v ? "bottom" : "top"
                          , S = 2 * o
                          , T = S
                          , B = y / 2 - T / 2
                          , D = m / 2 - S / 2
                          , I = {};
                        I.top = f ? _ + "px" : "",
                        I.right = p ? l - b - m + "px" : "",
                        I.bottom = v ? u - _ - y + "px" : "",
                        I.left = d ? b + "px" : "",
                        I.position = k,
                        t(this.wrapper).css(I),
                        t(this.contentEl).css({
                            width: w + "px",
                            height: C + "px",
                            top: E + "px",
                            right: "0px",
                            bottom: "0px",
                            left: x + "px",
                            padding: O + "px",
                            verticalAlign: L
                        }),
                        t(this.waveEl).css({
                            top: B + "px",
                            left: D + "px",
                            width: S + "px",
                            height: T + "px"
                        })
                    }
                }, {
                    key: "open",
                    value: function() {
                        this.isOpen || ("function" == typeof this.options.onOpen && this.options.onOpen.call(this, this.$origin[0]),
                        this.isOpen = !0,
                        this.wrapper.classList.add("open"),
                        document.body.addEventListener("click", this._handleDocumentClickBound, !0),
                        document.body.addEventListener("touchend", this._handleDocumentClickBound))
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.isOpen && ("function" == typeof this.options.onClose && this.options.onClose.call(this, this.$origin[0]),
                        this.isOpen = !1,
                        this.wrapper.classList.remove("open"),
                        document.body.removeEventListener("click", this._handleDocumentClickBound, !0),
                        document.body.removeEventListener("touchend", this._handleDocumentClickBound))
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return o(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_TapTarget
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return e
                    }
                }]),
                i
            }();
            M.TapTarget = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "tapTarget", "M_TapTarget")
        }(cash),
        function(t) {
            "use strict";
            var e = {
                classes: "",
                dropdownOptions: {}
            }
              , n = function(n) {
                function i(e, n) {
                    l(this, i);
                    var o = a(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, e, n));
                    return o.$el.hasClass("browser-default") ? a(o) : (o.el.M_FormSelect = o,
                    o.options = t.extend({}, i.defaults, n),
                    o.isMultiple = o.$el.prop("multiple"),
                    o.el.tabIndex = -1,
                    o._keysSelected = {},
                    o._valueDict = {},
                    o._setupDropdown(),
                    o._setupEventHandlers(),
                    o)
                }
                return r(i, u),
                s(i, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this._removeDropdown(),
                        this.el.M_FormSelect = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        var e = this;
                        this._handleSelectChangeBound = this._handleSelectChange.bind(this),
                        this._handleOptionClickBound = this._handleOptionClick.bind(this),
                        this._handleInputClickBound = this._handleInputClick.bind(this),
                        t(this.dropdownOptions).find("li:not(.optgroup)").each(function(t) {
                            t.addEventListener("click", e._handleOptionClickBound)
                        }),
                        this.el.addEventListener("change", this._handleSelectChangeBound),
                        this.input.addEventListener("click", this._handleInputClickBound)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        var e = this;
                        t(this.dropdownOptions).find("li:not(.optgroup)").each(function(t) {
                            t.removeEventListener("click", e._handleOptionClickBound)
                        }),
                        this.el.removeEventListener("change", this._handleSelectChangeBound),
                        this.input.removeEventListener("click", this._handleInputClickBound)
                    }
                }, {
                    key: "_handleSelectChange",
                    value: function(t) {
                        this._setValueToInput()
                    }
                }, {
                    key: "_handleOptionClick",
                    value: function(e) {
                        e.preventDefault();
                        var n = t(e.target).closest("li")[0]
                          , i = n.id;
                        if (!t(n).hasClass("disabled") && !t(n).hasClass("optgroup") && i.length) {
                            var o = !0;
                            if (this.isMultiple) {
                                var s = t(this.dropdownOptions).find("li.disabled.selected");
                                s.length && (s.removeClass("selected"),
                                s.find('input[type="checkbox"]').prop("checked", !1),
                                this._toggleEntryFromArray(s[0].id)),
                                o = this._toggleEntryFromArray(i)
                            } else
                                t(this.dropdownOptions).find("li").removeClass("selected"),
                                t(n).toggleClass("selected", o);
                            t(this._valueDict[i].el).prop("selected") !== o && (t(this._valueDict[i].el).prop("selected", o),
                            this.$el.trigger("change"))
                        }
                        e.stopPropagation()
                    }
                }, {
                    key: "_handleInputClick",
                    value: function() {
                        this.dropdown && this.dropdown.isOpen && (this._setValueToInput(),
                        this._setSelectedStates())
                    }
                }, {
                    key: "_setupDropdown",
                    value: function() {
                        var e = this;
                        this.wrapper = document.createElement("div"),
                        t(this.wrapper).addClass("select-wrapper " + this.options.classes),
                        this.$el.before(t(this.wrapper)),
                        this.wrapper.appendChild(this.el),
                        this.el.disabled && this.wrapper.classList.add("disabled"),
                        this.$selectOptions = this.$el.children("option, optgroup"),
                        this.dropdownOptions = document.createElement("ul"),
                        this.dropdownOptions.id = "select-options-" + M.guid(),
                        t(this.dropdownOptions).addClass("dropdown-content select-dropdown " + (this.isMultiple ? "multiple-select-dropdown" : "")),
                        this.$selectOptions.length && this.$selectOptions.each(function(n) {
                            if (t(n).is("option")) {
                                var i = void 0;
                                i = e.isMultiple ? e._appendOptionWithIcon(e.$el, n, "multiple") : e._appendOptionWithIcon(e.$el, n),
                                e._addOptionToValueDict(n, i)
                            } else if (t(n).is("optgroup")) {
                                var o = t(n).children("option");
                                t(e.dropdownOptions).append(t('<li class="optgroup"><span>' + n.getAttribute("label") + "</span></li>")[0]),
                                o.each(function(t) {
                                    var n = e._appendOptionWithIcon(e.$el, t, "optgroup-option");
                                    e._addOptionToValueDict(t, n)
                                })
                            }
                        }),
                        this.$el.after(this.dropdownOptions),
                        this.input = document.createElement("input"),
                        t(this.input).addClass("select-dropdown dropdown-trigger"),
                        this.input.setAttribute("type", "text"),
                        this.input.setAttribute("readonly", "true"),
                        this.input.setAttribute("data-target", this.dropdownOptions.id),
                        this.el.disabled && t(this.input).prop("disabled", "true"),
                        this.$el.before(this.input),
                        this._setValueToInput();
                        var n = t('<svg class="caret" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
                        if (this.$el.before(n[0]),
                        !this.el.disabled) {
                            var i = t.extend({}, this.options.dropdownOptions);
                            i.onOpenEnd = function(n) {
                                var i = t(e.dropdownOptions).find(".selected").first();
                                if (e.dropdown.isScrollable && i.length) {
                                    var o = i[0].getBoundingClientRect().top - e.dropdownOptions.getBoundingClientRect().top;
                                    o -= e.dropdownOptions.clientHeight / 2,
                                    e.dropdownOptions.scrollTop = o
                                }
                            }
                            ,
                            this.isMultiple && (i.closeOnClick = !1),
                            this.dropdown = M.Dropdown.init(this.input, i)
                        }
                        this._setSelectedStates()
                    }
                }, {
                    key: "_addOptionToValueDict",
                    value: function(t, e) {
                        var n = Object.keys(this._valueDict).length
                          , i = this.dropdownOptions.id + n
                          , o = {};
                        e.id = i,
                        o.el = t,
                        o.optionEl = e,
                        this._valueDict[i] = o
                    }
                }, {
                    key: "_removeDropdown",
                    value: function() {
                        t(this.wrapper).find(".caret").remove(),
                        t(this.input).remove(),
                        t(this.dropdownOptions).remove(),
                        t(this.wrapper).before(this.$el),
                        t(this.wrapper).remove()
                    }
                }, {
                    key: "_appendOptionWithIcon",
                    value: function(e, n, i) {
                        var o = n.disabled ? "disabled " : ""
                          , s = "optgroup-option" === i ? "optgroup-option " : ""
                          , a = this.isMultiple ? '<label><input type="checkbox"' + o + '"/><span>' + n.innerHTML + "</span></label>" : n.innerHTML
                          , r = t("<li></li>")
                          , l = t("<span></span>");
                        l.html(a),
                        r.addClass(o + " " + s),
                        r.append(l);
                        var u = n.getAttribute("data-icon");
                        if (u) {
                            var c = t('<img alt="" src="' + u + '">');
                            r.prepend(c)
                        }
                        return t(this.dropdownOptions).append(r[0]),
                        r[0]
                    }
                }, {
                    key: "_toggleEntryFromArray",
                    value: function(e) {
                        var n = !this._keysSelected.hasOwnProperty(e)
                          , i = t(this._valueDict[e].optionEl);
                        return n ? this._keysSelected[e] = !0 : delete this._keysSelected[e],
                        i.toggleClass("selected", n),
                        i.find('input[type="checkbox"]').prop("checked", n),
                        i.prop("selected", n),
                        n
                    }
                }, {
                    key: "_setValueToInput",
                    value: function() {
                        var e = [];
                        if (this.$el.find("option").each(function(n) {
                            if (t(n).prop("selected")) {
                                var i = t(n).text();
                                e.push(i)
                            }
                        }),
                        !e.length) {
                            var n = this.$el.find("option:disabled").eq(0);
                            n.length && "" === n[0].value && e.push(n.text())
                        }
                        this.input.value = e.join(", ")
                    }
                }, {
                    key: "_setSelectedStates",
                    value: function() {
                        for (var e in this._keysSelected = {},
                        this._valueDict) {
                            var n = this._valueDict[e]
                              , i = t(n.el).prop("selected");
                            t(n.optionEl).find('input[type="checkbox"]').prop("checked", i),
                            i ? (this._activateOption(t(this.dropdownOptions), t(n.optionEl)),
                            this._keysSelected[e] = !0) : t(n.optionEl).removeClass("selected")
                        }
                    }
                }, {
                    key: "_activateOption",
                    value: function(e, n) {
                        n && (this.isMultiple || e.find("li.selected").removeClass("selected"),
                        t(n).addClass("selected"))
                    }
                }, {
                    key: "getSelectedValues",
                    value: function() {
                        var t = [];
                        for (var e in this._keysSelected)
                            t.push(this._valueDict[e].el.value);
                        return t
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return o(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_FormSelect
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return e
                    }
                }]),
                i
            }();
            M.FormSelect = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "formSelect", "M_FormSelect")
        }(cash),
        function(t, e) {
            "use strict";
            var n = {}
              , i = function(i) {
                function c(e, n) {
                    l(this, c);
                    var i = a(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, c, e, n));
                    return i.el.M_Range = i,
                    i.options = t.extend({}, c.defaults, n),
                    i._mousedown = !1,
                    i._setupThumb(),
                    i._setupEventHandlers(),
                    i
                }
                return r(c, u),
                s(c, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this._removeThumb(),
                        this.el.M_Range = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleRangeChangeBound = this._handleRangeChange.bind(this),
                        this._handleRangeMousedownTouchstartBound = this._handleRangeMousedownTouchstart.bind(this),
                        this._handleRangeInputMousemoveTouchmoveBound = this._handleRangeInputMousemoveTouchmove.bind(this),
                        this._handleRangeMouseupTouchendBound = this._handleRangeMouseupTouchend.bind(this),
                        this._handleRangeBlurMouseoutTouchleaveBound = this._handleRangeBlurMouseoutTouchleave.bind(this),
                        this.el.addEventListener("change", this._handleRangeChangeBound),
                        this.el.addEventListener("mousedown", this._handleRangeMousedownTouchstartBound),
                        this.el.addEventListener("touchstart", this._handleRangeMousedownTouchstartBound),
                        this.el.addEventListener("input", this._handleRangeInputMousemoveTouchmoveBound),
                        this.el.addEventListener("mousemove", this._handleRangeInputMousemoveTouchmoveBound),
                        this.el.addEventListener("touchmove", this._handleRangeInputMousemoveTouchmoveBound),
                        this.el.addEventListener("mouseup", this._handleRangeMouseupTouchendBound),
                        this.el.addEventListener("touchend", this._handleRangeMouseupTouchendBound),
                        this.el.addEventListener("blur", this._handleRangeBlurMouseoutTouchleaveBound),
                        this.el.addEventListener("mouseout", this._handleRangeBlurMouseoutTouchleaveBound),
                        this.el.addEventListener("touchleave", this._handleRangeBlurMouseoutTouchleaveBound)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        this.el.removeEventListener("change", this._handleRangeChangeBound),
                        this.el.removeEventListener("mousedown", this._handleRangeMousedownTouchstartBound),
                        this.el.removeEventListener("touchstart", this._handleRangeMousedownTouchstartBound),
                        this.el.removeEventListener("input", this._handleRangeInputMousemoveTouchmoveBound),
                        this.el.removeEventListener("mousemove", this._handleRangeInputMousemoveTouchmoveBound),
                        this.el.removeEventListener("touchmove", this._handleRangeInputMousemoveTouchmoveBound),
                        this.el.removeEventListener("mouseup", this._handleRangeMouseupTouchendBound),
                        this.el.removeEventListener("touchend", this._handleRangeMouseupTouchendBound),
                        this.el.removeEventListener("blur", this._handleRangeBlurMouseoutTouchleaveBound),
                        this.el.removeEventListener("mouseout", this._handleRangeBlurMouseoutTouchleaveBound),
                        this.el.removeEventListener("touchleave", this._handleRangeBlurMouseoutTouchleaveBound)
                    }
                }, {
                    key: "_handleRangeChange",
                    value: function() {
                        t(this.value).html(this.$el.val()),
                        t(this.thumb).hasClass("active") || this._showRangeBubble();
                        var e = this._calcRangeOffset();
                        t(this.thumb).addClass("active").css("left", e + "px")
                    }
                }, {
                    key: "_handleRangeMousedownTouchstart",
                    value: function(e) {
                        if (t(this.value).html(this.$el.val()),
                        this._mousedown = !0,
                        this.$el.addClass("active"),
                        t(this.thumb).hasClass("active") || this._showRangeBubble(),
                        "input" !== e.type) {
                            var n = this._calcRangeOffset();
                            t(this.thumb).addClass("active").css("left", n + "px")
                        }
                    }
                }, {
                    key: "_handleRangeInputMousemoveTouchmove",
                    value: function() {
                        if (this._mousedown) {
                            t(this.thumb).hasClass("active") || this._showRangeBubble();
                            var e = this._calcRangeOffset();
                            t(this.thumb).addClass("active").css("left", e + "px"),
                            t(this.value).html(this.$el.val())
                        }
                    }
                }, {
                    key: "_handleRangeMouseupTouchend",
                    value: function() {
                        this._mousedown = !1,
                        this.$el.removeClass("active")
                    }
                }, {
                    key: "_handleRangeBlurMouseoutTouchleave",
                    value: function() {
                        if (!this._mousedown) {
                            var n = 7 + parseInt(this.$el.css("padding-left")) + "px";
                            t(this.thumb).hasClass("active") && (e.remove(this.thumb),
                            e({
                                targets: this.thumb,
                                height: 0,
                                width: 0,
                                top: 10,
                                easing: "easeOutQuad",
                                marginLeft: n,
                                duration: 100
                            })),
                            t(this.thumb).removeClass("active")
                        }
                    }
                }, {
                    key: "_setupThumb",
                    value: function() {
                        this.thumb = document.createElement("span"),
                        this.value = document.createElement("span"),
                        t(this.thumb).addClass("thumb"),
                        t(this.value).addClass("value"),
                        t(this.thumb).append(this.value),
                        this.$el.after(this.thumb)
                    }
                }, {
                    key: "_removeThumb",
                    value: function() {
                        t(this.thumb).remove()
                    }
                }, {
                    key: "_showRangeBubble",
                    value: function() {
                        var n = -7 + parseInt(t(this.thumb).parent().css("padding-left")) + "px";
                        e.remove(this.thumb),
                        e({
                            targets: this.thumb,
                            height: 30,
                            width: 30,
                            top: -30,
                            marginLeft: n,
                            duration: 300,
                            easing: "easeOutQuint"
                        })
                    }
                }, {
                    key: "_calcRangeOffset",
                    value: function() {
                        var t = this.$el.width() - 15
                          , e = parseFloat(this.$el.attr("max")) || 100
                          , n = parseFloat(this.$el.attr("min")) || 0;
                        return (parseFloat(this.$el.val()) - n) / (e - n) * t
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return o(c.__proto__ || Object.getPrototypeOf(c), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Range
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return n
                    }
                }]),
                c
            }();
            M.Range = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "range", "M_Range"),
            i.init(t("input[type=range]"))
        }(cash, M.anime)
    }
    ).call(this, n(12))
}
, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}
, function(t, e, n) {
    var i = n(14);
    "string" == typeof i && (i = [[t.i, i, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(7)(i, o);
    i.locals && (t.exports = i.locals)
}
, function(t, e, n) {}
, function(t, e) {
    t.exports = function(t) {
        var e = "undefined" != typeof window && window.location;
        if (!e)
            throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t)
            return t;
        var n = e.protocol + "//" + e.host
          , i = n + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
            var o, s = e.trim().replace(/^"(.*)"$/, function(t, e) {
                return e
            }).replace(/^'(.*)'$/, function(t, e) {
                return e
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s) ? t : (o = 0 === s.indexOf("//") ? s : 0 === s.indexOf("/") ? n + s : i + s.replace(/^\.\//, ""),
            "url(" + JSON.stringify(o) + ")")
        })
    }
}
, function(t, e) {
    t.exports = function(t) {
        if (Array.isArray(t))
            return t
    }
}
, function(t, e) {
    t.exports = function(t, e) {
        var n = []
          , i = !0
          , o = !1
          , s = void 0;
        try {
            for (var a, r = t[Symbol.iterator](); !(i = (a = r.next()).done) && (n.push(a.value),
            !e || n.length !== e); i = !0)
                ;
        } catch (t) {
            o = !0,
            s = t
        } finally {
            try {
                i || null == r.return || r.return()
            } finally {
                if (o)
                    throw s
            }
        }
        return n
    }
}
, function(t, e) {
    t.exports = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}
, function(t, e) {
    t.exports = function(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = new Array(t.length); e < t.length; e++)
                n[e] = t[e];
            return n
        }
    }
}
, function(t, e) {
    t.exports = function(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))
            return Array.from(t)
    }
}
, function(t, e) {
    t.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        return function(e, n, i) {
            return n && t(e.prototype, n),
            i && t(e, i),
            e
        }
    }()
      , o = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t,
        e
    }(n(23))
      , s = d(n(24))
      , a = d(n(25))
      , r = d(n(26))
      , l = d(n(27))
      , u = d(n(28))
      , c = d(n(29))
      , h = d(n(30));
    function d(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var p = function() {
        function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.type = "languageDetector",
            this.detectors = {},
            this.init(e, n)
        }
        return i(t, [{
            key: "init",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                this.services = t,
                this.options = o.defaults(e, this.options || {}, {
                    order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
                    lookupQuerystring: "lng",
                    lookupCookie: "i18next",
                    lookupLocalStorage: "i18nextLng",
                    caches: ["localStorage"],
                    excludeCacheFor: ["cimode"]
                }),
                this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
                this.i18nOptions = n,
                this.addDetector(s.default),
                this.addDetector(a.default),
                this.addDetector(r.default),
                this.addDetector(l.default),
                this.addDetector(u.default),
                this.addDetector(c.default),
                this.addDetector(h.default)
            }
        }, {
            key: "addDetector",
            value: function(t) {
                this.detectors[t.name] = t
            }
        }, {
            key: "detect",
            value: function(t) {
                var e = this;
                t || (t = this.options.order);
                var n = [];
                t.forEach(function(t) {
                    if (e.detectors[t]) {
                        var i = e.detectors[t].lookup(e.options);
                        i && "string" == typeof i && (i = [i]),
                        i && (n = n.concat(i))
                    }
                });
                var i = void 0;
                if (n.forEach(function(t) {
                    if (!i) {
                        var n = e.services.languageUtils.formatLanguageCode(t);
                        e.services.languageUtils.isWhitelisted(n) && (i = n)
                    }
                }),
                !i) {
                    var o = this.i18nOptions.fallbackLng;
                    "string" == typeof o && (o = [o]),
                    o || (o = []),
                    i = "[object Array]" === Object.prototype.toString.apply(o) ? o[0] : o[0] || o.default && o.default[0]
                }
                return i
            }
        }, {
            key: "cacheUserLanguage",
            value: function(t, e) {
                var n = this;
                e || (e = this.options.caches),
                e && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(t) > -1 || e.forEach(function(e) {
                    n.detectors[e] && n.detectors[e].cacheUserLanguage(t, n.options)
                }))
            }
        }]),
        t
    }();
    p.type = "languageDetector",
    e.default = p
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.defaults = function(t) {
        return o.call(s.call(arguments, 1), function(e) {
            if (e)
                for (var n in e)
                    void 0 === t[n] && (t[n] = e[n])
        }),
        t
    }
    ,
    e.extend = function(t) {
        return o.call(s.call(arguments, 1), function(e) {
            if (e)
                for (var n in e)
                    t[n] = e[n]
        }),
        t
    }
    ;
    var i = []
      , o = i.forEach
      , s = i.slice
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function(t, e, n, i) {
        var o = void 0;
        if (n) {
            var s = new Date;
            s.setTime(s.getTime() + 60 * n * 1e3),
            o = "; expires=" + s.toGMTString()
        } else
            o = "";
        i = i ? "domain=" + i + ";" : "",
        document.cookie = t + "=" + e + o + ";" + i + "path=/"
    }
      , o = function(t) {
        for (var e = t + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
            for (var o = n[i]; " " === o.charAt(0); )
                o = o.substring(1, o.length);
            if (0 === o.indexOf(e))
                return o.substring(e.length, o.length)
        }
        return null
    };
    e.default = {
        name: "cookie",
        lookup: function(t) {
            var e = void 0;
            if (t.lookupCookie && "undefined" != typeof document) {
                var n = o(t.lookupCookie);
                n && (e = n)
            }
            return e
        },
        cacheUserLanguage: function(t, e) {
            e.lookupCookie && "undefined" != typeof document && i(e.lookupCookie, t, e.cookieMinutes, e.cookieDomain)
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        name: "querystring",
        lookup: function(t) {
            var e = void 0;
            if ("undefined" != typeof window)
                for (var n = window.location.search.substring(1).split("&"), i = 0; i < n.length; i++) {
                    var o = n[i].indexOf("=");
                    if (o > 0)
                        n[i].substring(0, o) === t.lookupQuerystring && (e = n[i].substring(o + 1))
                }
            return e
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = void 0;
    try {
        i = "undefined" !== window && null !== window.localStorage;
        window.localStorage.setItem("i18next.translate.boo", "foo"),
        window.localStorage.removeItem("i18next.translate.boo")
    } catch (t) {
        i = !1
    }
    e.default = {
        name: "localStorage",
        lookup: function(t) {
            var e = void 0;
            if (t.lookupLocalStorage && i) {
                var n = window.localStorage.getItem(t.lookupLocalStorage);
                n && (e = n)
            }
            return e
        },
        cacheUserLanguage: function(t, e) {
            e.lookupLocalStorage && i && window.localStorage.setItem(e.lookupLocalStorage, t)
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        name: "navigator",
        lookup: function(t) {
            var e = [];
            if ("undefined" != typeof navigator) {
                if (navigator.languages)
                    for (var n = 0; n < navigator.languages.length; n++)
                        e.push(navigator.languages[n]);
                navigator.userLanguage && e.push(navigator.userLanguage),
                navigator.language && e.push(navigator.language)
            }
            return e.length > 0 ? e : void 0
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        name: "htmlTag",
        lookup: function(t) {
            var e = void 0
              , n = t.htmlTag || ("undefined" != typeof document ? document.documentElement : null);
            return n && "function" == typeof n.getAttribute && (e = n.getAttribute("lang")),
            e
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        name: "path",
        lookup: function(t) {
            var e = void 0;
            if ("undefined" != typeof window) {
                var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
                if (n instanceof Array)
                    if ("number" == typeof t.lookupFromPathIndex) {
                        if ("string" != typeof n[t.lookupFromPathIndex])
                            return;
                        e = n[t.lookupFromPathIndex].replace("/", "")
                    } else
                        e = n[0].replace("/", "")
            }
            return e
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        name: "subdomain",
        lookup: function(t) {
            var e = void 0;
            if ("undefined" != typeof window) {
                var n = window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);
                n instanceof Array && (e = "number" == typeof t.lookupFromSubdomainIndex ? n[t.lookupFromSubdomainIndex].replace("http://", "").replace("https://", "").replace(".", "") : n[0].replace("http://", "").replace("https://", "").replace(".", ""))
            }
            return e
        }
    }
}
, function(t, e) {
    t.exports = function(t, e) {
        if (null == t)
            return {};
        var n, i, o = {}, s = Object.keys(t);
        for (i = 0; i < s.length; i++)
            n = s[i],
            e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o
    }
}
, function(t, e, n) {
    var i = n(33);
    "string" == typeof i && (i = [[t.i, i, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(7)(i, o);
    i.locals && (t.exports = i.locals)
}
, function(t, e, n) {}
, , function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(3)
      , o = n.n(i)
      , s = n(5)
      , a = n.n(s)
      , r = (n(11),
    n(13),
    n(6))
      , l = n.n(r)
      , u = n(4)
      , c = n.n(u)
      , h = n(1)
      , d = n.n(h)
      , p = n(2)
      , f = n.n(p)
      , v = n(0)
      , g = n.n(v);
    function m(t) {
        return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function y(t) {
        return (y = "function" == typeof Symbol && "symbol" === m(Symbol.iterator) ? function(t) {
            return m(t)
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : m(t)
        }
        )(t)
    }
    function _(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }
    function b(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {}
              , i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
            }))),
            i.forEach(function(e) {
                _(t, e, n[e])
            })
        }
        return t
    }
    function k(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function w(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    function C(t, e, n) {
        return e && w(t.prototype, e),
        n && w(t, n),
        t
    }
    function E(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function x(t, e) {
        return !e || "object" !== y(e) && "function" != typeof e ? E(t) : e
    }
    function O(t) {
        return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        )(t)
    }
    function L(t, e) {
        return (L = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function S(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        e && L(t, e)
    }
    function T(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++)
                    n[e] = t[e];
                return n
            }
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))
                return Array.from(t)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    function B(t, e) {
        return function(t) {
            if (Array.isArray(t))
                return t
        }(t) || function(t, e) {
            var n = []
              , i = !0
              , o = !1
              , s = void 0;
            try {
                for (var a, r = t[Symbol.iterator](); !(i = (a = r.next()).done) && (n.push(a.value),
                !e || n.length !== e); i = !0)
                    ;
            } catch (t) {
                o = !0,
                s = t
            } finally {
                try {
                    i || null == r.return || r.return()
                } finally {
                    if (o)
                        throw s
                }
            }
            return n
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    var D = {
        type: "logger",
        log: function(t) {
            this.output("log", t)
        },
        warn: function(t) {
            this.output("warn", t)
        },
        error: function(t) {
            this.output("error", t)
        },
        output: function(t, e) {
            var n;
            console && console[t] && (n = console)[t].apply(n, T(e))
        }
    }
      , I = new (function() {
        function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            k(this, t),
            this.init(e, n)
        }
        return C(t, [{
            key: "init",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.prefix = e.prefix || "i18next:",
                this.logger = t || D,
                this.options = e,
                this.debug = e.debug
            }
        }, {
            key: "setDebug",
            value: function(t) {
                this.debug = t
            }
        }, {
            key: "log",
            value: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                return this.forward(e, "log", "", !0)
            }
        }, {
            key: "warn",
            value: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                return this.forward(e, "warn", "", !0)
            }
        }, {
            key: "error",
            value: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                return this.forward(e, "error", "")
            }
        }, {
            key: "deprecate",
            value: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                return this.forward(e, "warn", "WARNING DEPRECATED: ", !0)
            }
        }, {
            key: "forward",
            value: function(t, e, n, i) {
                return i && !this.debug ? null : ("string" == typeof t[0] && (t[0] = "".concat(n).concat(this.prefix, " ").concat(t[0])),
                this.logger[e](t))
            }
        }, {
            key: "create",
            value: function(e) {
                return new t(this.logger,b({}, {
                    prefix: "".concat(this.prefix, ":").concat(e, ":")
                }, this.options))
            }
        }]),
        t
    }())
      , $ = function() {
        function t() {
            k(this, t),
            this.observers = {}
        }
        return C(t, [{
            key: "on",
            value: function(t, e) {
                var n = this;
                return t.split(" ").forEach(function(t) {
                    n.observers[t] = n.observers[t] || [],
                    n.observers[t].push(e)
                }),
                this
            }
        }, {
            key: "off",
            value: function(t, e) {
                var n = this;
                this.observers[t] && this.observers[t].forEach(function() {
                    if (e) {
                        var i = n.observers[t].indexOf(e);
                        i > -1 && n.observers[t].splice(i, 1)
                    } else
                        delete n.observers[t]
                })
            }
        }, {
            key: "emit",
            value: function(t) {
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                    n[i - 1] = arguments[i];
                if (this.observers[t]) {
                    var o = [].concat(this.observers[t]);
                    o.forEach(function(t) {
                        t.apply(void 0, n)
                    })
                }
                if (this.observers["*"]) {
                    var s = [].concat(this.observers["*"]);
                    s.forEach(function(e) {
                        e.apply(e, [t].concat(n))
                    })
                }
            }
        }]),
        t
    }();
    function A() {
        var t, e, n = new Promise(function(n, i) {
            t = n,
            e = i
        }
        );
        return n.resolve = t,
        n.reject = e,
        n
    }
    function R(t) {
        return null == t ? "" : "" + t
    }
    function P(t, e, n) {
        function i(t) {
            return t && t.indexOf("###") > -1 ? t.replace(/###/g, ".") : t
        }
        function o() {
            return !t || "string" == typeof t
        }
        for (var s = "string" != typeof e ? [].concat(e) : e.split("."); s.length > 1; ) {
            if (o())
                return {};
            var a = i(s.shift());
            !t[a] && n && (t[a] = new n),
            t = t[a]
        }
        return o() ? {} : {
            obj: t,
            k: i(s.shift())
        }
    }
    function j(t, e, n) {
        var i = P(t, e, Object);
        i.obj[i.k] = n
    }
    function H(t, e) {
        var n = P(t, e)
          , i = n.obj
          , o = n.k;
        if (i)
            return i[o]
    }
    function N(t, e, n) {
        for (var i in e)
            i in t ? "string" == typeof t[i] || t[i]instanceof String || "string" == typeof e[i] || e[i]instanceof String ? n && (t[i] = e[i]) : N(t[i], e[i], n) : t[i] = e[i];
        return t
    }
    function W(t) {
        return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
    }
    var F = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;"
    };
    function q(t) {
        return "string" == typeof t ? t.replace(/[&<>"'\/]/g, function(t) {
            return F[t]
        }) : t
    }
    var V = function(t) {
        function e(t) {
            var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                ns: ["translation"],
                defaultNS: "translation"
            };
            return k(this, e),
            n = x(this, O(e).call(this)),
            $.call(E(n)),
            n.data = t || {},
            n.options = i,
            void 0 === n.options.keySeparator && (n.options.keySeparator = "."),
            n
        }
        return S(e, $),
        C(e, [{
            key: "addNamespaces",
            value: function(t) {
                this.options.ns.indexOf(t) < 0 && this.options.ns.push(t)
            }
        }, {
            key: "removeNamespaces",
            value: function(t) {
                var e = this.options.ns.indexOf(t);
                e > -1 && this.options.ns.splice(e, 1)
            }
        }, {
            key: "getResource",
            value: function(t, e, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                  , o = void 0 !== i.keySeparator ? i.keySeparator : this.options.keySeparator
                  , s = [t, e];
                return n && "string" != typeof n && (s = s.concat(n)),
                n && "string" == typeof n && (s = s.concat(o ? n.split(o) : n)),
                t.indexOf(".") > -1 && (s = t.split(".")),
                H(this.data, s)
            }
        }, {
            key: "addResource",
            value: function(t, e, n, i) {
                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                    silent: !1
                }
                  , s = this.options.keySeparator;
                void 0 === s && (s = ".");
                var a = [t, e];
                n && (a = a.concat(s ? n.split(s) : n)),
                t.indexOf(".") > -1 && (i = e,
                e = (a = t.split("."))[1]),
                this.addNamespaces(e),
                j(this.data, a, i),
                o.silent || this.emit("added", t, e, n, i)
            }
        }, {
            key: "addResources",
            value: function(t, e, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                    silent: !1
                };
                for (var o in n)
                    "string" != typeof n[o] && "[object Array]" !== Object.prototype.toString.apply(n[o]) || this.addResource(t, e, o, n[o], {
                        silent: !0
                    });
                i.silent || this.emit("added", t, e, n)
            }
        }, {
            key: "addResourceBundle",
            value: function(t, e, n, i, o) {
                var s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                    silent: !1
                }
                  , a = [t, e];
                t.indexOf(".") > -1 && (i = n,
                n = e,
                e = (a = t.split("."))[1]),
                this.addNamespaces(e);
                var r = H(this.data, a) || {};
                i ? N(r, n, o) : r = b({}, r, n),
                j(this.data, a, r),
                s.silent || this.emit("added", t, e, n)
            }
        }, {
            key: "removeResourceBundle",
            value: function(t, e) {
                this.hasResourceBundle(t, e) && delete this.data[t][e],
                this.removeNamespaces(e),
                this.emit("removed", t, e)
            }
        }, {
            key: "hasResourceBundle",
            value: function(t, e) {
                return void 0 !== this.getResource(t, e)
            }
        }, {
            key: "getResourceBundle",
            value: function(t, e) {
                return e || (e = this.options.defaultNS),
                "v1" === this.options.compatibilityAPI ? b({}, {}, this.getResource(t, e)) : this.getResource(t, e)
            }
        }, {
            key: "getDataByLanguage",
            value: function(t) {
                return this.data[t]
            }
        }, {
            key: "toJSON",
            value: function() {
                return this.data
            }
        }]),
        e
    }()
      , z = {
        processors: {},
        addPostProcessor: function(t) {
            this.processors[t.name] = t
        },
        handle: function(t, e, n, i, o) {
            var s = this;
            return t.forEach(function(t) {
                s.processors[t] && (e = s.processors[t].process(e, n, i, o))
            }),
            e
        }
    }
      , Q = function(t) {
        function e(t) {
            var n, i, o, s, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return k(this, e),
            n = x(this, O(e).call(this)),
            $.call(E(n)),
            i = ["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat"],
            o = t,
            s = E(n),
            i.forEach(function(t) {
                o[t] && (s[t] = o[t])
            }),
            n.options = a,
            void 0 === n.options.keySeparator && (n.options.keySeparator = "."),
            n.logger = I.create("translator"),
            n
        }
        return S(e, $),
        C(e, [{
            key: "changeLanguage",
            value: function(t) {
                t && (this.language = t)
            }
        }, {
            key: "exists",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    interpolation: {}
                }
                  , n = this.resolve(t, e);
                return n && void 0 !== n.res
            }
        }, {
            key: "extractFromKey",
            value: function(t, e) {
                var n = e.nsSeparator || this.options.nsSeparator;
                void 0 === n && (n = ":");
                var i = void 0 !== e.keySeparator ? e.keySeparator : this.options.keySeparator
                  , o = e.ns || this.options.defaultNS;
                if (n && t.indexOf(n) > -1) {
                    var s = t.split(n);
                    (n !== i || n === i && this.options.ns.indexOf(s[0]) > -1) && (o = s.shift()),
                    t = s.join(i)
                }
                return "string" == typeof o && (o = [o]),
                {
                    key: t,
                    namespaces: o
                }
            }
        }, {
            key: "translate",
            value: function(t, e) {
                var n = this;
                if ("object" !== y(e) && this.options.overloadTranslationOptionHandler && (e = this.options.overloadTranslationOptionHandler(arguments)),
                e || (e = {}),
                null == t)
                    return "";
                Array.isArray(t) || (t = [String(t)]);
                var i = void 0 !== e.keySeparator ? e.keySeparator : this.options.keySeparator
                  , o = this.extractFromKey(t[t.length - 1], e)
                  , s = o.key
                  , a = o.namespaces
                  , r = a[a.length - 1]
                  , l = e.lng || this.language
                  , u = e.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                if (l && "cimode" === l.toLowerCase()) {
                    if (u) {
                        var c = e.nsSeparator || this.options.nsSeparator;
                        return r + c + s
                    }
                    return s
                }
                var h = this.resolve(t, e)
                  , d = h && h.res
                  , p = h && h.usedKey || s
                  , f = h && h.exactUsedKey || s
                  , v = Object.prototype.toString.apply(d)
                  , g = ["[object Number]", "[object Function]", "[object RegExp]"]
                  , m = void 0 !== e.joinArrays ? e.joinArrays : this.options.joinArrays
                  , _ = !this.i18nFormat || this.i18nFormat.handleAsObject
                  , k = "string" != typeof d && "boolean" != typeof d && "number" != typeof d;
                if (_ && d && k && g.indexOf(v) < 0 && ("string" != typeof m || "[object Array]" !== v)) {
                    if (!e.returnObjects && !this.options.returnObjects)
                        return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),
                        this.options.returnedObjectHandler ? this.options.returnedObjectHandler(p, d, e) : "key '".concat(s, " (").concat(this.language, ")' returned an object instead of string.");
                    if (i) {
                        var w = "[object Array]" === v
                          , C = w ? [] : {}
                          , E = w ? f : p;
                        for (var x in d)
                            if (Object.prototype.hasOwnProperty.call(d, x)) {
                                var M = "".concat(E).concat(i).concat(x);
                                C[x] = this.translate(M, b({}, e, {
                                    joinArrays: !1,
                                    ns: a
                                })),
                                C[x] === M && (C[x] = d[x])
                            }
                        d = C
                    }
                } else if (_ && "string" == typeof m && "[object Array]" === v)
                    (d = d.join(m)) && (d = this.extendTranslation(d, t, e));
                else {
                    var O = !1
                      , L = !1;
                    if (!this.isValidLookup(d) && void 0 !== e.defaultValue) {
                        if (O = !0,
                        void 0 !== e.count) {
                            var S = this.pluralResolver.getSuffix(l, e.count);
                            d = e["defaultValue".concat(S)]
                        }
                        d || (d = e.defaultValue)
                    }
                    this.isValidLookup(d) || (L = !0,
                    d = s);
                    var T = e.defaultValue && e.defaultValue !== d && this.options.updateMissing;
                    if (L || O || T) {
                        this.logger.log(T ? "updateKey" : "missingKey", l, r, s, T ? e.defaultValue : d);
                        var B = []
                          , D = this.languageUtils.getFallbackCodes(this.options.fallbackLng, e.lng || this.language);
                        if ("fallback" === this.options.saveMissingTo && D && D[0])
                            for (var I = 0; I < D.length; I++)
                                B.push(D[I]);
                        else
                            "all" === this.options.saveMissingTo ? B = this.languageUtils.toResolveHierarchy(e.lng || this.language) : B.push(e.lng || this.language);
                        var $ = function(t, i) {
                            n.options.missingKeyHandler ? n.options.missingKeyHandler(t, r, i, T ? e.defaultValue : d, T, e) : n.backendConnector && n.backendConnector.saveMissing && n.backendConnector.saveMissing(t, r, i, T ? e.defaultValue : d, T, e),
                            n.emit("missingKey", t, r, i, d)
                        };
                        if (this.options.saveMissing) {
                            var A = void 0 !== e.count && "string" != typeof e.count;
                            this.options.saveMissingPlurals && A ? B.forEach(function(t) {
                                n.pluralResolver.getPluralFormsOfKey(t, s).forEach(function(e) {
                                    return $([t], e)
                                })
                            }) : $(B, s)
                        }
                    }
                    d = this.extendTranslation(d, t, e, h),
                    L && d === s && this.options.appendNamespaceToMissingKey && (d = "".concat(r, ":").concat(s)),
                    L && this.options.parseMissingKeyHandler && (d = this.options.parseMissingKeyHandler(d))
                }
                return d
            }
        }, {
            key: "extendTranslation",
            value: function(t, e, n, i) {
                var o = this;
                if (this.i18nFormat && this.i18nFormat.parse)
                    t = this.i18nFormat.parse(t, n, i.usedLng, i.usedNS, i.usedKey, {
                        resolved: i
                    });
                else if (!n.skipInterpolation) {
                    n.interpolation && this.interpolator.init(b({}, n, {
                        interpolation: b({}, this.options.interpolation, n.interpolation)
                    }));
                    var s = n.replace && "string" != typeof n.replace ? n.replace : n;
                    this.options.interpolation.defaultVariables && (s = b({}, this.options.interpolation.defaultVariables, s)),
                    t = this.interpolator.interpolate(t, s, n.lng || this.language, n),
                    !1 !== n.nest && (t = this.interpolator.nest(t, function() {
                        return o.translate.apply(o, arguments)
                    }, n)),
                    n.interpolation && this.interpolator.reset()
                }
                var a = n.postProcess || this.options.postProcess
                  , r = "string" == typeof a ? [a] : a;
                return null != t && r && r.length && !1 !== n.applyPostProcessor && (t = z.handle(r, t, e, n, this)),
                t
            }
        }, {
            key: "resolve",
            value: function(t) {
                var e, n, i, o, s, a = this, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return "string" == typeof t && (t = [t]),
                t.forEach(function(t) {
                    if (!a.isValidLookup(e)) {
                        var l = a.extractFromKey(t, r)
                          , u = l.key;
                        n = u;
                        var c = l.namespaces;
                        a.options.fallbackNS && (c = c.concat(a.options.fallbackNS));
                        var h = void 0 !== r.count && "string" != typeof r.count
                          , d = void 0 !== r.context && "string" == typeof r.context && "" !== r.context
                          , p = r.lngs ? r.lngs : a.languageUtils.toResolveHierarchy(r.lng || a.language, r.fallbackLng);
                        c.forEach(function(t) {
                            a.isValidLookup(e) || (s = t,
                            p.forEach(function(n) {
                                if (!a.isValidLookup(e)) {
                                    o = n;
                                    var s, l, c = u, p = [c];
                                    if (a.i18nFormat && a.i18nFormat.addLookupKeys)
                                        a.i18nFormat.addLookupKeys(p, u, n, t, r);
                                    else
                                        h && (s = a.pluralResolver.getSuffix(n, r.count)),
                                        h && d && p.push(c + s),
                                        d && p.push(c += "".concat(a.options.contextSeparator).concat(r.context)),
                                        h && p.push(c += s);
                                    for (; l = p.pop(); )
                                        a.isValidLookup(e) || (i = l,
                                        e = a.getResource(n, t, l, r))
                                }
                            }))
                        })
                    }
                }),
                {
                    res: e,
                    usedKey: n,
                    exactUsedKey: i,
                    usedLng: o,
                    usedNS: s
                }
            }
        }, {
            key: "isValidLookup",
            value: function(t) {
                return !(void 0 === t || !this.options.returnNull && null === t || !this.options.returnEmptyString && "" === t)
            }
        }, {
            key: "getResource",
            value: function(t, e, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(t, e, n, i) : this.resourceStore.getResource(t, e, n, i)
            }
        }]),
        e
    }();
    function U(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }
    var X = function() {
        function t(e) {
            k(this, t),
            this.options = e,
            this.whitelist = this.options.whitelist || !1,
            this.logger = I.create("languageUtils")
        }
        return C(t, [{
            key: "getScriptPartFromCode",
            value: function(t) {
                if (!t || t.indexOf("-") < 0)
                    return null;
                var e = t.split("-");
                return 2 === e.length ? null : (e.pop(),
                this.formatLanguageCode(e.join("-")))
            }
        }, {
            key: "getLanguagePartFromCode",
            value: function(t) {
                if (!t || t.indexOf("-") < 0)
                    return t;
                var e = t.split("-");
                return this.formatLanguageCode(e[0])
            }
        }, {
            key: "formatLanguageCode",
            value: function(t) {
                if ("string" == typeof t && t.indexOf("-") > -1) {
                    var e = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"]
                      , n = t.split("-");
                    return this.options.lowerCaseLng ? n = n.map(function(t) {
                        return t.toLowerCase()
                    }) : 2 === n.length ? (n[0] = n[0].toLowerCase(),
                    n[1] = n[1].toUpperCase(),
                    e.indexOf(n[1].toLowerCase()) > -1 && (n[1] = U(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(),
                    2 === n[1].length && (n[1] = n[1].toUpperCase()),
                    "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()),
                    e.indexOf(n[1].toLowerCase()) > -1 && (n[1] = U(n[1].toLowerCase())),
                    e.indexOf(n[2].toLowerCase()) > -1 && (n[2] = U(n[2].toLowerCase()))),
                    n.join("-")
                }
                return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t
            }
        }, {
            key: "isWhitelisted",
            value: function(t) {
                return ("languageOnly" === this.options.load || this.options.nonExplicitWhitelist) && (t = this.getLanguagePartFromCode(t)),
                !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(t) > -1
            }
        }, {
            key: "getFallbackCodes",
            value: function(t, e) {
                if (!t)
                    return [];
                if ("string" == typeof t && (t = [t]),
                "[object Array]" === Object.prototype.toString.apply(t))
                    return t;
                if (!e)
                    return t.default || [];
                var n = t[e];
                return n || (n = t[this.getScriptPartFromCode(e)]),
                n || (n = t[this.formatLanguageCode(e)]),
                n || (n = t.default),
                n || []
            }
        }, {
            key: "toResolveHierarchy",
            value: function(t, e) {
                var n = this
                  , i = this.getFallbackCodes(e || this.options.fallbackLng || [], t)
                  , o = []
                  , s = function(t) {
                    t && (n.isWhitelisted(t) ? o.push(t) : n.logger.warn("rejecting non-whitelisted language code: ".concat(t)))
                };
                return "string" == typeof t && t.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && s(this.formatLanguageCode(t)),
                "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && s(this.getScriptPartFromCode(t)),
                "currentOnly" !== this.options.load && s(this.getLanguagePartFromCode(t))) : "string" == typeof t && s(this.formatLanguageCode(t)),
                i.forEach(function(t) {
                    o.indexOf(t) < 0 && s(n.formatLanguageCode(t))
                }),
                o
            }
        }]),
        t
    }()
      , K = [{
        lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "ti", "tr", "uz", "wa"],
        nr: [1, 2],
        fc: 1
    }, {
        lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
        nr: [1, 2],
        fc: 2
    }, {
        lngs: ["ay", "bo", "cgg", "fa", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
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
        lngs: ["he"],
        nr: [1, 2, 20, 21],
        fc: 22
    }]
      , Y = {
        1: function(t) {
            return Number(t > 1)
        },
        2: function(t) {
            return Number(1 != t)
        },
        3: function(t) {
            return 0
        },
        4: function(t) {
            return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
        },
        5: function(t) {
            return Number(0 === t ? 0 : 1 == t ? 1 : 2 == t ? 2 : t % 100 >= 3 && t % 100 <= 10 ? 3 : t % 100 >= 11 ? 4 : 5)
        },
        6: function(t) {
            return Number(1 == t ? 0 : t >= 2 && t <= 4 ? 1 : 2)
        },
        7: function(t) {
            return Number(1 == t ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
        },
        8: function(t) {
            return Number(1 == t ? 0 : 2 == t ? 1 : 8 != t && 11 != t ? 2 : 3)
        },
        9: function(t) {
            return Number(t >= 2)
        },
        10: function(t) {
            return Number(1 == t ? 0 : 2 == t ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4)
        },
        11: function(t) {
            return Number(1 == t || 11 == t ? 0 : 2 == t || 12 == t ? 1 : t > 2 && t < 20 ? 2 : 3)
        },
        12: function(t) {
            return Number(t % 10 != 1 || t % 100 == 11)
        },
        13: function(t) {
            return Number(0 !== t)
        },
        14: function(t) {
            return Number(1 == t ? 0 : 2 == t ? 1 : 3 == t ? 2 : 3)
        },
        15: function(t) {
            return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
        },
        16: function(t) {
            return Number(t % 10 == 1 && t % 100 != 11 ? 0 : 0 !== t ? 1 : 2)
        },
        17: function(t) {
            return Number(1 == t || t % 10 == 1 ? 0 : 1)
        },
        18: function(t) {
            return Number(0 == t ? 0 : 1 == t ? 1 : 2)
        },
        19: function(t) {
            return Number(1 == t ? 0 : 0 === t || t % 100 > 1 && t % 100 < 11 ? 1 : t % 100 > 10 && t % 100 < 20 ? 2 : 3)
        },
        20: function(t) {
            return Number(1 == t ? 0 : 0 === t || t % 100 > 0 && t % 100 < 20 ? 1 : 2)
        },
        21: function(t) {
            return Number(t % 100 == 1 ? 1 : t % 100 == 2 ? 2 : t % 100 == 3 || t % 100 == 4 ? 3 : 0)
        },
        22: function(t) {
            return Number(1 === t ? 0 : 2 === t ? 1 : (t < 0 || t > 10) && t % 10 == 0 ? 2 : 3)
        }
    };
    var J = function() {
        function t(e) {
            var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            k(this, t),
            this.languageUtils = e,
            this.options = i,
            this.logger = I.create("pluralResolver"),
            this.rules = (n = {},
            K.forEach(function(t) {
                t.lngs.forEach(function(e) {
                    n[e] = {
                        numbers: t.nr,
                        plurals: Y[t.fc]
                    }
                })
            }),
            n)
        }
        return C(t, [{
            key: "addRule",
            value: function(t, e) {
                this.rules[t] = e
            }
        }, {
            key: "getRule",
            value: function(t) {
                return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
            }
        }, {
            key: "needsPlural",
            value: function(t) {
                var e = this.getRule(t);
                return e && e.numbers.length > 1
            }
        }, {
            key: "getPluralFormsOfKey",
            value: function(t, e) {
                var n = this
                  , i = []
                  , o = this.getRule(t);
                return o ? (o.numbers.forEach(function(o) {
                    var s = n.getSuffix(t, o);
                    i.push("".concat(e).concat(s))
                }),
                i) : i
            }
        }, {
            key: "getSuffix",
            value: function(t, e) {
                var n = this
                  , i = this.getRule(t);
                if (i) {
                    var o = i.noAbs ? i.plurals(e) : i.plurals(Math.abs(e))
                      , s = i.numbers[o];
                    this.options.simplifyPluralSuffix && 2 === i.numbers.length && 1 === i.numbers[0] && (2 === s ? s = "plural" : 1 === s && (s = ""));
                    var a = function() {
                        return n.options.prepend && s.toString() ? n.options.prepend + s.toString() : s.toString()
                    };
                    return "v1" === this.options.compatibilityJSON ? 1 === s ? "" : "number" == typeof s ? "_plural_".concat(s.toString()) : a() : "v2" === this.options.compatibilityJSON ? a() : this.options.simplifyPluralSuffix && 2 === i.numbers.length && 1 === i.numbers[0] ? a() : this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString()
                }
                return this.logger.warn("no plural rule found for: ".concat(t)),
                ""
            }
        }]),
        t
    }()
      , G = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            k(this, t),
            this.logger = I.create("interpolator"),
            this.options = e,
            this.format = e.interpolation && e.interpolation.format || function(t) {
                return t
            }
            ,
            this.init(e)
        }
        return C(t, [{
            key: "init",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                t.interpolation || (t.interpolation = {
                    escapeValue: !0
                });
                var e = t.interpolation;
                this.escape = void 0 !== e.escape ? e.escape : q,
                this.escapeValue = void 0 === e.escapeValue || e.escapeValue,
                this.useRawValueToEscape = void 0 !== e.useRawValueToEscape && e.useRawValueToEscape,
                this.prefix = e.prefix ? W(e.prefix) : e.prefixEscaped || "{{",
                this.suffix = e.suffix ? W(e.suffix) : e.suffixEscaped || "}}",
                this.formatSeparator = e.formatSeparator ? e.formatSeparator : e.formatSeparator || ",",
                this.unescapePrefix = e.unescapeSuffix ? "" : e.unescapePrefix || "-",
                this.unescapeSuffix = this.unescapePrefix ? "" : e.unescapeSuffix || "",
                this.nestingPrefix = e.nestingPrefix ? W(e.nestingPrefix) : e.nestingPrefixEscaped || W("$t("),
                this.nestingSuffix = e.nestingSuffix ? W(e.nestingSuffix) : e.nestingSuffixEscaped || W(")"),
                this.maxReplaces = e.maxReplaces ? e.maxReplaces : 1e3,
                this.resetRegExp()
            }
        }, {
            key: "reset",
            value: function() {
                this.options && this.init(this.options)
            }
        }, {
            key: "resetRegExp",
            value: function() {
                var t = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                this.regexp = new RegExp(t,"g");
                var e = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                this.regexpUnescape = new RegExp(e,"g");
                var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                this.nestingRegexp = new RegExp(n,"g")
            }
        }, {
            key: "interpolate",
            value: function(t, e, n, i) {
                var o, s, a, r = this;
                function l(t) {
                    return t.replace(/\$/g, "$$$$")
                }
                var u = function(t) {
                    if (t.indexOf(r.formatSeparator) < 0)
                        return H(e, t);
                    var i = t.split(r.formatSeparator)
                      , o = i.shift().trim()
                      , s = i.join(r.formatSeparator).trim();
                    return r.format(H(e, o), s, n)
                };
                this.resetRegExp();
                var c = i && i.missingInterpolationHandler || this.options.missingInterpolationHandler;
                for (a = 0; o = this.regexpUnescape.exec(t); ) {
                    if (void 0 === (s = u(o[1].trim())))
                        if ("function" == typeof c) {
                            var h = c(t, o, i);
                            s = "string" == typeof h ? h : ""
                        } else
                            this.logger.warn("missed to pass in variable ".concat(o[1], " for interpolating ").concat(t)),
                            s = "";
                    else
                        "string" == typeof s || this.useRawValueToEscape || (s = R(s));
                    if (t = t.replace(o[0], l(s)),
                    this.regexpUnescape.lastIndex = 0,
                    ++a >= this.maxReplaces)
                        break
                }
                for (a = 0; o = this.regexp.exec(t); ) {
                    if (void 0 === (s = u(o[1].trim())))
                        if ("function" == typeof c) {
                            var d = c(t, o, i);
                            s = "string" == typeof d ? d : ""
                        } else
                            this.logger.warn("missed to pass in variable ".concat(o[1], " for interpolating ").concat(t)),
                            s = "";
                    else
                        "string" == typeof s || this.useRawValueToEscape || (s = R(s));
                    if (s = this.escapeValue ? l(this.escape(s)) : l(s),
                    t = t.replace(o[0], s),
                    this.regexp.lastIndex = 0,
                    ++a >= this.maxReplaces)
                        break
                }
                return t
            }
        }, {
            key: "nest",
            value: function(t, e) {
                var n, i, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = b({}, o);
                function a(t, e) {
                    if (t.indexOf(",") < 0)
                        return t;
                    var n = t.split(",");
                    t = n.shift();
                    var i = n.join(",");
                    i = (i = this.interpolate(i, s)).replace(/'/g, '"');
                    try {
                        s = JSON.parse(i),
                        e && (s = b({}, e, s))
                    } catch (e) {
                        this.logger.error("failed parsing options string in nesting for key ".concat(t), e)
                    }
                    return t
                }
                for (s.applyPostProcessor = !1; n = this.nestingRegexp.exec(t); ) {
                    if ((i = e(a.call(this, n[1].trim(), s), s)) && n[0] === t && "string" != typeof i)
                        return i;
                    "string" != typeof i && (i = R(i)),
                    i || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(t)),
                    i = ""),
                    t = t.replace(n[0], i),
                    this.regexp.lastIndex = 0
                }
                return t
            }
        }]),
        t
    }();
    var Z = function(t) {
        function e(t, n, i) {
            var o, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return k(this, e),
            o = x(this, O(e).call(this)),
            $.call(E(o)),
            o.backend = t,
            o.store = n,
            o.languageUtils = i.languageUtils,
            o.options = s,
            o.logger = I.create("backendConnector"),
            o.state = {},
            o.queue = [],
            o.backend && o.backend.init && o.backend.init(i, s.backend, s),
            o
        }
        return S(e, $),
        C(e, [{
            key: "queueLoad",
            value: function(t, e, n, i) {
                var o = this
                  , s = []
                  , a = []
                  , r = []
                  , l = [];
                return t.forEach(function(t) {
                    var i = !0;
                    e.forEach(function(e) {
                        var r = "".concat(t, "|").concat(e);
                        !n.reload && o.store.hasResourceBundle(t, e) ? o.state[r] = 2 : o.state[r] < 0 || (1 === o.state[r] ? a.indexOf(r) < 0 && a.push(r) : (o.state[r] = 1,
                        i = !1,
                        a.indexOf(r) < 0 && a.push(r),
                        s.indexOf(r) < 0 && s.push(r),
                        l.indexOf(e) < 0 && l.push(e)))
                    }),
                    i || r.push(t)
                }),
                (s.length || a.length) && this.queue.push({
                    pending: a,
                    loaded: {},
                    errors: [],
                    callback: i
                }),
                {
                    toLoad: s,
                    pending: a,
                    toLoadLanguages: r,
                    toLoadNamespaces: l
                }
            }
        }, {
            key: "loaded",
            value: function(t, e, n) {
                var i = B(t.split("|"), 2)
                  , o = i[0]
                  , s = i[1];
                e && this.emit("failedLoading", o, s, e),
                n && this.store.addResourceBundle(o, s, n),
                this.state[t] = e ? -1 : 2;
                var a = {};
                this.queue.forEach(function(n) {
                    var i, r, l, u, c, h;
                    i = n.loaded,
                    r = s,
                    u = P(i, [o], Object),
                    c = u.obj,
                    h = u.k,
                    c[h] = c[h] || [],
                    l && (c[h] = c[h].concat(r)),
                    l || c[h].push(r),
                    function(t, e) {
                        for (var n = t.indexOf(e); -1 !== n; )
                            t.splice(n, 1),
                            n = t.indexOf(e)
                    }(n.pending, t),
                    e && n.errors.push(e),
                    0 !== n.pending.length || n.done || (Object.keys(n.loaded).forEach(function(t) {
                        a[t] || (a[t] = []),
                        n.loaded[t].length && n.loaded[t].forEach(function(e) {
                            a[t].indexOf(e) < 0 && a[t].push(e)
                        })
                    }),
                    n.done = !0,
                    n.errors.length ? n.callback(n.errors) : n.callback())
                }),
                this.emit("loaded", a),
                this.queue = this.queue.filter(function(t) {
                    return !t.done
                })
            }
        }, {
            key: "read",
            value: function(t, e, n) {
                var i = this
                  , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                  , s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 250
                  , a = arguments.length > 5 ? arguments[5] : void 0;
                return t.length ? this.backend[n](t, e, function(r, l) {
                    r && l && o < 5 ? setTimeout(function() {
                        i.read.call(i, t, e, n, o + 1, 2 * s, a)
                    }, s) : a(r, l)
                }) : a(null, {})
            }
        }, {
            key: "prepareLoading",
            value: function(t, e) {
                var n = this
                  , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , o = arguments.length > 3 ? arguments[3] : void 0;
                if (!this.backend)
                    return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
                    o && o();
                "string" == typeof t && (t = this.languageUtils.toResolveHierarchy(t)),
                "string" == typeof e && (e = [e]);
                var s = this.queueLoad(t, e, i, o);
                if (!s.toLoad.length)
                    return s.pending.length || o(),
                    null;
                s.toLoad.forEach(function(t) {
                    n.loadOne(t)
                })
            }
        }, {
            key: "load",
            value: function(t, e, n) {
                this.prepareLoading(t, e, {}, n)
            }
        }, {
            key: "reload",
            value: function(t, e, n) {
                this.prepareLoading(t, e, {
                    reload: !0
                }, n)
            }
        }, {
            key: "loadOne",
            value: function(t) {
                var e = this
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                  , i = t.split("|")
                  , o = B(i, 2)
                  , s = o[0]
                  , a = o[1];
                this.read(s, a, "read", null, null, function(i, o) {
                    i && e.logger.warn("".concat(n, "loading namespace ").concat(a, " for language ").concat(s, " failed"), i),
                    !i && o && e.logger.log("".concat(n, "loaded namespace ").concat(a, " for language ").concat(s), o),
                    e.loaded(t, i, o)
                })
            }
        }, {
            key: "saveMissing",
            value: function(t, e, n, i, o) {
                var s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                this.backend && this.backend.create && this.backend.create(t, e, n, i, null, b({}, s, {
                    isUpdate: o
                })),
                t && t[0] && this.store.addResource(t[0], e, n, i)
            }
        }]),
        e
    }();
    function tt() {
        return {
            debug: !1,
            initImmediate: !0,
            ns: ["translation"],
            defaultNS: ["translation"],
            fallbackLng: ["dev"],
            fallbackNS: !1,
            whitelist: !1,
            nonExplicitWhitelist: !1,
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
            returnNull: !0,
            returnEmptyString: !0,
            returnObjects: !1,
            joinArrays: !1,
            returnedObjectHandler: !1,
            parseMissingKeyHandler: !1,
            appendNamespaceToMissingKey: !1,
            appendNamespaceToCIMode: !1,
            overloadTranslationOptionHandler: function(t) {
                var e = {};
                if ("object" === y(t[1]) && (e = t[1]),
                "string" == typeof t[1] && (e.defaultValue = t[1]),
                "string" == typeof t[2] && (e.tDescription = t[2]),
                "object" === y(t[2]) || "object" === y(t[3])) {
                    var n = t[3] || t[2];
                    Object.keys(n).forEach(function(t) {
                        e[t] = n[t]
                    })
                }
                return e
            },
            interpolation: {
                escapeValue: !0,
                format: function(t, e, n) {
                    return t
                },
                prefix: "{{",
                suffix: "}}",
                formatSeparator: ",",
                unescapePrefix: "-",
                nestingPrefix: "$t(",
                nestingSuffix: ")",
                maxReplaces: 1e3
            }
        }
    }
    function et(t) {
        return "string" == typeof t.ns && (t.ns = [t.ns]),
        "string" == typeof t.fallbackLng && (t.fallbackLng = [t.fallbackLng]),
        "string" == typeof t.fallbackNS && (t.fallbackNS = [t.fallbackNS]),
        t.whitelist && t.whitelist.indexOf("cimode") < 0 && (t.whitelist = t.whitelist.concat(["cimode"])),
        t
    }
    function nt() {}
    var it = new (function(t) {
        function e() {
            var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
            if (k(this, e),
            t = x(this, O(e).call(this)),
            $.call(E(t)),
            t.options = et(n),
            t.services = {},
            t.logger = I,
            t.modules = {
                external: []
            },
            i && !t.isInitialized && !n.isClone) {
                if (!t.options.initImmediate)
                    return t.init(n, i),
                    x(t, E(t));
                setTimeout(function() {
                    t.init(n, i)
                }, 0)
            }
            return t
        }
        return S(e, $),
        C(e, [{
            key: "init",
            value: function() {
                var t = this
                  , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , n = arguments.length > 1 ? arguments[1] : void 0;
                function i(t) {
                    return t ? "function" == typeof t ? new t : t : null
                }
                if ("function" == typeof e && (n = e,
                e = {}),
                this.options = b({}, tt(), this.options, et(e)),
                this.format = this.options.interpolation.format,
                n || (n = nt),
                !this.options.isClone) {
                    this.modules.logger ? I.init(i(this.modules.logger), this.options) : I.init(null, this.options);
                    var o = new X(this.options);
                    this.store = new V(this.options.resources,this.options);
                    var s = this.services;
                    s.logger = I,
                    s.resourceStore = this.store,
                    s.languageUtils = o,
                    s.pluralResolver = new J(o,{
                        prepend: this.options.pluralSeparator,
                        compatibilityJSON: this.options.compatibilityJSON,
                        simplifyPluralSuffix: this.options.simplifyPluralSuffix
                    }),
                    s.interpolator = new G(this.options),
                    s.backendConnector = new Z(i(this.modules.backend),s.resourceStore,s,this.options),
                    s.backendConnector.on("*", function(e) {
                        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                            i[o - 1] = arguments[o];
                        t.emit.apply(t, [e].concat(i))
                    }),
                    this.modules.languageDetector && (s.languageDetector = i(this.modules.languageDetector),
                    s.languageDetector.init(s, this.options.detection, this.options)),
                    this.modules.i18nFormat && (s.i18nFormat = i(this.modules.i18nFormat),
                    s.i18nFormat.init && s.i18nFormat.init(this)),
                    this.translator = new Q(this.services,this.options),
                    this.translator.on("*", function(e) {
                        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                            i[o - 1] = arguments[o];
                        t.emit.apply(t, [e].concat(i))
                    }),
                    this.modules.external.forEach(function(e) {
                        e.init && e.init(t)
                    })
                }
                var a = ["getResource", "addResource", "addResources", "addResourceBundle", "removeResourceBundle", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
                a.forEach(function(e) {
                    t[e] = function() {
                        var n;
                        return (n = t.store)[e].apply(n, arguments)
                    }
                });
                var r = A()
                  , l = function() {
                    t.changeLanguage(t.options.lng, function(e, i) {
                        t.isInitialized = !0,
                        t.logger.log("initialized", t.options),
                        t.emit("initialized", t.options),
                        r.resolve(i),
                        n(e, i)
                    })
                };
                return this.options.resources || !this.options.initImmediate ? l() : setTimeout(l, 0),
                r
            }
        }, {
            key: "loadResources",
            value: function() {
                var t = this
                  , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nt;
                if (!this.options.resources || this.options.partialBundledLanguages) {
                    if (this.language && "cimode" === this.language.toLowerCase())
                        return e();
                    var n = []
                      , i = function(e) {
                        e && t.services.languageUtils.toResolveHierarchy(e).forEach(function(t) {
                            n.indexOf(t) < 0 && n.push(t)
                        })
                    };
                    if (this.language)
                        i(this.language);
                    else {
                        var o = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                        o.forEach(function(t) {
                            return i(t)
                        })
                    }
                    this.options.preload && this.options.preload.forEach(function(t) {
                        return i(t)
                    }),
                    this.services.backendConnector.load(n, this.options.ns, e)
                } else
                    e(null)
            }
        }, {
            key: "reloadResources",
            value: function(t, e, n) {
                var i = A();
                return t || (t = this.languages),
                e || (e = this.options.ns),
                n || (n = nt),
                this.services.backendConnector.reload(t, e, function(t) {
                    i.resolve(),
                    n(t)
                }),
                i
            }
        }, {
            key: "use",
            value: function(t) {
                return "backend" === t.type && (this.modules.backend = t),
                ("logger" === t.type || t.log && t.warn && t.error) && (this.modules.logger = t),
                "languageDetector" === t.type && (this.modules.languageDetector = t),
                "i18nFormat" === t.type && (this.modules.i18nFormat = t),
                "postProcessor" === t.type && z.addPostProcessor(t),
                "3rdParty" === t.type && this.modules.external.push(t),
                this
            }
        }, {
            key: "changeLanguage",
            value: function(t, e) {
                var n = this
                  , i = A();
                this.emit("languageChanging", t);
                var o = function(t) {
                    t && (n.language = t,
                    n.languages = n.services.languageUtils.toResolveHierarchy(t),
                    n.translator.language || n.translator.changeLanguage(t),
                    n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(t)),
                    n.loadResources(function(o) {
                        !function(t, o) {
                            n.translator.changeLanguage(o),
                            o && (n.emit("languageChanged", o),
                            n.logger.log("languageChanged", o)),
                            i.resolve(function() {
                                return n.t.apply(n, arguments)
                            }),
                            e && e(t, function() {
                                return n.t.apply(n, arguments)
                            })
                        }(o, t)
                    })
                };
                return t || !this.services.languageDetector || this.services.languageDetector.async ? !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(o) : o(t) : o(this.services.languageDetector.detect()),
                i
            }
        }, {
            key: "getFixedT",
            value: function(t, e) {
                var n = this
                  , i = function t(e, i) {
                    var o = b({}, i);
                    if ("object" !== y(i)) {
                        for (var s = arguments.length, a = new Array(s > 2 ? s - 2 : 0), r = 2; r < s; r++)
                            a[r - 2] = arguments[r];
                        o = n.options.overloadTranslationOptionHandler([e, i].concat(a))
                    }
                    return o.lng = o.lng || t.lng,
                    o.lngs = o.lngs || t.lngs,
                    o.ns = o.ns || t.ns,
                    n.t(e, o)
                };
                return "string" == typeof t ? i.lng = t : i.lngs = t,
                i.ns = e,
                i
            }
        }, {
            key: "t",
            value: function() {
                var t;
                return this.translator && (t = this.translator).translate.apply(t, arguments)
            }
        }, {
            key: "exists",
            value: function() {
                var t;
                return this.translator && (t = this.translator).exists.apply(t, arguments)
            }
        }, {
            key: "setDefaultNamespace",
            value: function(t) {
                this.options.defaultNS = t
            }
        }, {
            key: "loadNamespaces",
            value: function(t, e) {
                var n = this
                  , i = A();
                return this.options.ns ? ("string" == typeof t && (t = [t]),
                t.forEach(function(t) {
                    n.options.ns.indexOf(t) < 0 && n.options.ns.push(t)
                }),
                this.loadResources(function(t) {
                    i.resolve(),
                    e && e(t)
                }),
                i) : (e && e(),
                Promise.resolve())
            }
        }, {
            key: "loadLanguages",
            value: function(t, e) {
                var n = A();
                "string" == typeof t && (t = [t]);
                var i = this.options.preload || []
                  , o = t.filter(function(t) {
                    return i.indexOf(t) < 0
                });
                return o.length ? (this.options.preload = i.concat(o),
                this.loadResources(function(t) {
                    n.resolve(),
                    e && e(t)
                }),
                n) : (e && e(),
                Promise.resolve())
            }
        }, {
            key: "dir",
            value: function(t) {
                if (t || (t = this.languages && this.languages.length > 0 ? this.languages[0] : this.language),
                !t)
                    return "rtl";
                return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(t)) >= 0 ? "rtl" : "ltr"
            }
        }, {
            key: "createInstance",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , n = arguments.length > 1 ? arguments[1] : void 0;
                return new e(t,n)
            }
        }, {
            key: "cloneInstance",
            value: function() {
                var t = this
                  , n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nt
                  , o = b({}, this.options, n, {
                    isClone: !0
                })
                  , s = new e(o)
                  , a = ["store", "services", "language"];
                return a.forEach(function(e) {
                    s[e] = t[e]
                }),
                s.translator = new Q(s.services,s.options),
                s.translator.on("*", function(t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                        n[i - 1] = arguments[i];
                    s.emit.apply(s, [t].concat(n))
                }),
                s.init(o, i),
                s.translator.options = s.options,
                s
            }
        }]),
        e
    }())
      , ot = []
      , st = ot.forEach
      , at = ot.slice;
    function rt(t) {
        return st.call(at.call(arguments, 1), function(e) {
            if (e)
                for (var n in e)
                    void 0 === t[n] && (t[n] = e[n])
        }),
        t
    }
    function lt(t) {
        return t ? "function" == typeof t ? new t : t : null
    }
    var ut = function() {
        function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            k(this, t),
            this.backends = [],
            this.type = "backend",
            this.init(e, n)
        }
        return C(t, [{
            key: "init",
            value: function(t) {
                var e = this
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , i = arguments.length > 2 ? arguments[2] : void 0;
                this.services = t,
                this.options = rt(n, this.options || {}, {}),
                this.options.backends && this.options.backends.forEach(function(n, o) {
                    e.backends[o] = e.backends[o] || lt(n),
                    e.backends[o].init(t, e.options.backendOptions[o], i)
                })
            }
        }, {
            key: "read",
            value: function(t, e, n) {
                var i = this
                  , o = this.backends.length
                  , s = function n(o, s) {
                    if (!(o < 0)) {
                        var a = i.backends[o];
                        a.save ? (a.save(t, e, s),
                        n(o - 1, s)) : n(o - 1, s)
                    }
                };
                !function a(r) {
                    if (r >= o)
                        return n(new Error("non of the backend loaded data;",!0));
                    var l = i.backends[r];
                    l.read ? l.read(t, e, function(t, e) {
                        e && Object.keys(e).length > -1 ? (n(null, e, r),
                        s(r - 1, e)) : a(r + 1)
                    }) : a(r + 1)
                }(0)
            }
        }, {
            key: "create",
            value: function(t, e, n, i) {
                this.backends.forEach(function(o) {
                    o.create && o.create(t, e, n, i)
                })
            }
        }]),
        t
    }();
    ut.type = "backend";
    var ct = ut
      , ht = function() {
        function t(e) {
            k(this, t),
            this.store = e.store
        }
        return C(t, [{
            key: "setItem",
            value: function(t, e) {
                if (this.store)
                    try {
                        this.store.setItem(t, e)
                    } catch (t) {}
            }
        }, {
            key: "getItem",
            value: function(t, e) {
                if (this.store)
                    try {
                        return this.store.getItem(t, e)
                    } catch (t) {}
            }
        }]),
        t
    }();
    function dt() {
        return {
            prefix: "i18next_res_",
            expirationTime: 6048e5,
            versions: {},
            store: window.localStorage
        }
    }
    var pt = function() {
        function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            k(this, t),
            this.init(e, n),
            this.type = "backend"
        }
        return C(t, [{
            key: "init",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.services = t,
                this.options = b({}, dt(), this.options, e),
                this.storage = new ht(this.options)
            }
        }, {
            key: "read",
            value: function(t, e, n) {
                var i = (new Date).getTime();
                if (!this.storage.store)
                    return n(null, null);
                var o = this.storage.getItem("".concat(this.options.prefix).concat(t, "-").concat(e));
                return o && (o = JSON.parse(o)).i18nStamp && o.i18nStamp + this.options.expirationTime > i && this.options.versions[t] === o.i18nVersion ? (delete o.i18nVersion,
                delete o.i18nStamp,
                n(null, o)) : n(null, null)
            }
        }, {
            key: "save",
            value: function(t, e, n) {
                this.storage.store && (n.i18nStamp = (new Date).getTime(),
                this.options.versions[t] && (n.i18nVersion = this.options.versions[t]),
                this.storage.setItem("".concat(this.options.prefix).concat(t, "-").concat(e), JSON.stringify(n)))
            }
        }]),
        t
    }();
    pt.type = "backend";
    var ft = []
      , vt = ft.forEach
      , gt = ft.slice;
    function mt(t) {
        return vt.call(gt.call(arguments, 1), function(e) {
            if (e)
                for (var n in e)
                    void 0 === t[n] && (t[n] = e[n])
        }),
        t
    }
    function yt(t, e) {
        if (e && "object" === y(e)) {
            var n = ""
              , i = encodeURIComponent;
            for (var o in e)
                n += "&" + i(o) + "=" + i(e[o]);
            if (!n)
                return t;
            t = t + (-1 !== t.indexOf("?") ? "&" : "?") + n.slice(1)
        }
        return t
    }
    function _t(t, e, n, i, o) {
        i && "object" === y(i) && (o || (i._t = new Date),
        i = yt("", i).slice(1)),
        e.queryStringParams && (t = yt(t, e.queryStringParams));
        try {
            var s;
            (s = XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP.3.0")).open(i ? "POST" : "GET", t, 1),
            e.crossDomain || s.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
            s.withCredentials = !!e.withCredentials,
            i && s.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
            s.overrideMimeType && s.overrideMimeType("application/json");
            var a = e.customHeaders;
            if (a = "function" == typeof a ? a() : a)
                for (var r in a)
                    s.setRequestHeader(r, a[r]);
            s.onreadystatechange = function() {
                s.readyState > 3 && n && n(s.responseText, s)
            }
            ,
            s.send(i)
        } catch (t) {
            console && console.log(t)
        }
    }
    function bt() {
        return {
            loadPath: "/locales/{{lng}}/{{ns}}.json",
            addPath: "/locales/add/{{lng}}/{{ns}}",
            allowMultiLoading: !1,
            parse: JSON.parse,
            crossDomain: !1,
            ajax: _t
        }
    }
    var kt = function() {
        function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            k(this, t),
            this.init(e, n),
            this.type = "backend"
        }
        return C(t, [{
            key: "init",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.services = t,
                this.options = mt(e, this.options || {}, bt())
            }
        }, {
            key: "readMulti",
            value: function(t, e, n) {
                var i = this.options.loadPath;
                "function" == typeof this.options.loadPath && (i = this.options.loadPath(t, e));
                var o = this.services.interpolator.interpolate(i, {
                    lng: t.join("+"),
                    ns: e.join("+")
                });
                this.loadUrl(o, n)
            }
        }, {
            key: "read",
            value: function(t, e, n) {
                var i = this.options.loadPath;
                "function" == typeof this.options.loadPath && (i = this.options.loadPath([t], [e]));
                var o = this.services.interpolator.interpolate(i, {
                    lng: t,
                    ns: e
                });
                this.loadUrl(o, n)
            }
        }, {
            key: "loadUrl",
            value: function(t, e) {
                var n = this;
                this.options.ajax(t, this.options, function(i, o) {
                    if (o.status >= 500 && o.status < 600)
                        return e("failed loading " + t, !0);
                    if (o.status >= 400 && o.status < 500)
                        return e("failed loading " + t, !1);
                    var s, a;
                    try {
                        s = n.options.parse(i, t)
                    } catch (e) {
                        a = "failed parsing " + t + " to json"
                    }
                    if (a)
                        return e(a, !1);
                    e(null, s)
                })
            }
        }, {
            key: "create",
            value: function(t, e, n, i) {
                var o = this;
                "string" == typeof t && (t = [t]);
                var s = {};
                s[n] = i || "",
                t.forEach(function(t) {
                    var n = o.services.interpolator.interpolate(o.options.addPath, {
                        lng: t,
                        ns: e
                    });
                    o.options.ajax(n, o.options, function(t, e) {}, s)
                })
            }
        }]),
        t
    }();
    kt.type = "backend";
    var wt = kt
      , Ct = n(8)
      , Et = n.n(Ct)
      , xt = function() {
        function t() {
            d()(this, t)
        }
        var e;
        return f()(t, null, [{
            key: "init",
            value: (e = a()(o.a.mark(function e() {
                return o.a.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            it.use(ct).use(Et.a).init({
                                fallbackLng: "en-US",
                                debug: !1,
                                ns: ["common", "tasks", "functionality", "techinfo"],
                                defaultNS: "common",
                                backend: {
                                    backends: [wt],
                                    backendOptions: [{
                                        loadPath: "/i18n/{{lng}}/{{ns}}.json?t=" + Math.random(),
                                        crossDomain: !1
                                    }]
                                }
                            });
                        case 2:
                            t.setInterpolationDefaults();
                        case 3:
                        case "end":
                            return e.stop()
                        }
                }, e)
            })),
            function() {
                return e.apply(this, arguments)
            }
            )
        }, {
            key: "setInterpolationDefaults",
            value: function() {
                it.options.interpolation.defaultVariables = {
                    screenName: it.t("common:screenNameDefault")
                }
            }
        }, {
            key: "changeLng",
            value: function(t) {
                it.changeLanguage(t)
            }
        }, {
            key: "getSingleValue",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return it.t(t, e)
            }
        }, {
            key: "updateElements",
            value: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                e.forEach(function(t) {
                    t.innerHTML = it.t(t.dataset.i18n)
                })
            }
        }, {
            key: "updateWithInterpolation",
            value: function(t, e) {
                t.innerHTML = it.t(t.dataset.i18n, e)
            }
        }, {
            key: "resetElements",
            value: function() {
                t.updateElements.apply(t, c()(Array.from(document.querySelectorAll("[data-i18n]"))));
                var e = function t(e) {
                    var n = e.target;
                    n.classList.remove("loadable"),
                    n.removeEventListener("transitionend", t)
                };
                Array.from(document.querySelectorAll(".loadable.loading")).forEach(function(t) {
                    t.addEventListener("transitionend", e),
                    t.classList.remove("loading")
                })
            }
        }]),
        t
    }()
      , Mt = function() {
        function t() {
            d()(this, t)
        }
        return f()(t, null, [{
            key: "makeSearchLink",
            value: function(e, n, i) {
                var o = "https://".concat(t.isMobile ? "mobile." : "", "twitter.com/search?f=").concat(t.isMobile ? "live" : "tweets", "&src=typd&vertical=default&lang=en&q=").concat(encodeURIComponent(e), "&qf=").concat(n ? "on" : "off");
                return '<a href="'.concat(o, '" rel="noopener noreferrer">').concat(i || e, "</a>")
            }
        }, {
            key: "updateSearch",
            value: function(e) {
                if (e.tests.search || !1 === e.tests.search) {
                    document.querySelector("#searchFAQ").classList.remove("hide");
                    var n = document.querySelector("#searchFAQ .techContent");
                    if ("_implied_good" !== e.tests.search) {
                        var i = t.makeSearchLink("from:@".concat(e.profile.screen_name));
                        n.innerHTML = xt.getSingleValue("techinfo:search.text", {
                            foundOrNot: xt.getSingleValue(e.tests.search ? "techinfo:search.found" : "techinfo:search.notFound", {
                                tweetId: e.tests.search,
                                interpolation: {
                                    escapeValue: !0
                                }
                            }),
                            searchLink: i,
                            interpolation: {
                                escapeValue: !1
                            }
                        })
                    } else
                        n.innerHTML = xt.getSingleValue("techinfo:search.impliedGood")
                }
            }
        }, {
            key: "updateBarrier",
            value: function(t) {
                if (t.tests.more_replies) {
                    document.querySelector("#barrierFAQ").classList.remove("hide");
                    var e, n = document.querySelector("#barrierFAQ .techContent");
                    e = t.tests.more_replies.ban ? xt.getSingleValue("techinfo:barrier.lowQuality", {
                        abuse: 1 === t.tests.more_replies.stage ? xt.getSingleValue("techinfo:barrier.abuseQuality") : ""
                    }) : xt.getSingleValue("techinfo:barrier.highQuality"),
                    n.innerHTML = xt.getSingleValue("techinfo:barrier.text", {
                        replyToId: t.tests.more_replies.in_reply_to,
                        tweetId: t.tests.more_replies.tweet,
                        explanation: e
                    })
                }
            }
        }, {
            key: "updateThread",
            value: function(t) {
                if (t.tests.ghost) {
                    document.querySelector("#threadFAQ").classList.remove("hide");
                    var e = document.querySelector("#threadFAQ .techContent");
                    t.tests.search && t.tests.ghost && !1 === t.tests.ghost.ban ? e.innerHTML = xt.getSingleValue("techinfo:thread.searchBanned") : e.innerHTML = xt.getSingleValue("techinfo:thread.text", {
                        tweetId: t.tests.ghost.tweet,
                        replyId: t.tests.ghost.in_reply_to,
                        detached: t.tests.ghost.ban ? "" : "not "
                    })
                }
            }
        }, {
            key: "reset",
            value: function() {
                document.querySelectorAll("#threadFAQ, #searchFAQ, #barrierFAQ").forEach(function(t) {
                    return t.classList.add("hide")
                })
            }
        }]),
        t
    }();
    g()(Mt, "isMobile", !!("ontouchstart"in window || window.navigator && window.navigator.msPointerEnabled && window.MSGesture || window.DocumentTouch && document instanceof DocumentTouch)),
    window.TechInfo = Mt;
    var Ot = function(t, e) {
        var n = document.getElementById("qf-setting-toast-template")
          , i = M.toast({
            html: n.innerHTML,
            displayLength: 1 / 0,
            classes: "qf-setting-toast",
            completeCallback: e
        });
        return i.el.querySelector("button.toast-action").addEventListener("click", t),
        i
    }
      , Lt = n(9)
      , St = n.n(Lt)
      , Tt = function() {
        function t(e) {
            d()(this, t);
            var n = t.createTaskElement(e)
              , i = n.listItem
              , o = St()(n, ["listItem"]);
            this.taskData = e,
            this.id = e.id,
            this.listItem = i,
            this.components = o,
            t.container.insertAdjacentElement("beforeend", this.listItem)
        }
        return f()(t, [{
            key: "update",
            value: function(t, e) {
                var n = this.components.icon;
                switch (t) {
                case "running":
                    n.classList.add("gears"),
                    n.innerText = "";
                    break;
                case "pending":
                    n.classList.remove("gears"),
                    n.innerText = "access_time";
                    break;
                case "ok":
                    n.classList.remove("gears"),
                    n.innerText = "check";
                    break;
                case "ban":
                    n.classList.remove("gears"),
                    n.innerText = "error_outline";
                    break;
                case "reset":
                case "warn":
                    n.classList.remove("gears"),
                    n.innerText = "contact_support"
                }
                if (e) {
                    var i = "<span>".concat(e, "</span>");
                    this.components.message.innerHTML = i
                }
                this.listItem.dataset.taskStatus = t
            }
        }], [{
            key: "createTaskElement",
            value: function(e) {
                var n = t.template.firstElementChild.cloneNode(!0)
                  , i = n.querySelector('[data-task-component="header"]')
                  , o = n.querySelector('[data-task-component="message"]')
                  , s = n.querySelector('[data-task-component="description"]')
                  , a = n.querySelector('[data-task-component="faq"]')
                  , r = n.querySelector('[data-task-component="icon"]')
                  , l = n.querySelector('[data-task-component="hint"]');
                return n.dataset.taskId = e.id,
                e.nonInteractive && i.setAttribute("collapsible-non-interactive", ""),
                o.innerHTML = "<span>".concat(e.message, "</span>"),
                r.innerText = e.icon || "",
                e.description ? (s.querySelector("h5").innerText = e.description.title,
                s.querySelector("p").innerHTML = e.description.text,
                e.faq && e.faq.id ? (a.id = e.faq.id,
                {
                    listItem: n,
                    header: i,
                    message: o,
                    description: s,
                    icon: r,
                    faq: a,
                    hint: l
                }) : (a.remove(),
                {
                    listItem: n,
                    header: i,
                    message: o,
                    icon: r,
                    hint: l
                })) : (s.remove(),
                l.remove(),
                {
                    listItem: n,
                    header: i,
                    message: o,
                    icon: r
                })
            }
        }]),
        t
    }();
    g()(Tt, "container", document.querySelector("#tasks")),
    g()(Tt, "template", document.getElementById("task-item-template"));
    var Bt = function() {
        return [{
            id: "checkUser",
            idx: 0,
            message: it.t("tasks:checkUser.message"),
            icon: "",
            nonInteractive: !0
        }, {
            id: "checkBarrier",
            idx: 4,
            message: it.t("tasks:checkBarrier.message"),
            icon: "contact_support",
            nonInteractive: !1,
            description: {
                title: it.t("tasks:checkBarrier.description.title"),
                text: it.t("tasks:checkBarrier.description.text")
            },
            faq: {
                id: "barrierFAQ"
            }
        }, {
            id: "checkSuggest",
            idx: 1,
            message: it.t("tasks:checkSuggest.message"),
            icon: "contact_support",
            nonInteractive: !1,
            description: {
                title: it.t("tasks:checkSuggest.description.title"),
                text: it.t("tasks:checkSuggest.description.text")
            }
        }, {
            id: "checkSearch",
            idx: 2,
            message: it.t("tasks:checkSearch.message"),
            icon: "contact_support",
            nonInteractive: !1,
            description: {
                title: it.t("tasks:checkSearch.description.title"),
                text: it.t("tasks:checkSearch.description.text")
            },
            faq: {
                id: "searchFAQ"
            }
        }, {
            id: "checkConventional",
            idx: 3,
            message: it.t("tasks:checkConventional.message"),
            icon: "contact_support",
            nonInteractive: !1,
            description: {
                title: it.t("tasks:checkConventional.description.title"),
                text: it.t("tasks:checkConventional.description.text")
            },
            faq: {
                id: "threadFAQ"
            }
        }]
    };
    function Dt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
    }
    var It, $t = function() {
        function t(e) {
            var n = this;
            d()(this, t),
            g()(this, "updateHeaderScreenName", function(t) {
                if (t.stopPropagation(),
                13 === t.which)
                    return n.handleCheckClick(t);
                var e = n.screenNamePrefix.classList;
                return n.screenName.value ? (xt.updateWithInterpolation(n.headerScreenName, {
                    screenName: n.screenName.value.replace("@", "").trim()
                }),
                n.screenName.validity.patternMismatch ? (e.remove("valid"),
                e.add("invalid")) : (e.remove("invalid"),
                e.add("valid")),
                xt.updateWithInterpolation(n.headerScreenName, {
                    screenName: n.screenName.value
                }),
                !1) : (e.remove("invalid"),
                e.remove("valid"),
                xt.updateWithInterpolation(n.headerScreenName, {
                    screenName: xt.getSingleValue("common:screenNameDefault")
                }),
                !1)
            }),
            g()(this, "handleCheckClick", function(t) {
                if (t.stopPropagation(),
                !n.checkButton.disabled)
                    if (n.screenName.validity.valid)
                        n.runTest();
                    else {
                        var e = M.Tooltip.init(n.screenName);
                        e.isHovered = !0,
                        e.open(),
                        window.setTimeout(function() {
                            e.close(),
                            e.destroy()
                        }, 5e3)
                    }
            }),
            g()(this, "handleInstallClick", function() {
                n.deferredPrompt.prompt(),
                n.deferredPrompt.userChoice.then(function(t) {
                    "accepted" === t.outcome ? n.installButton.classList.add("hiddendiv") : n.installButton.classList.remove("hiddendiv"),
                    n.deferredPrompt = null
                })
            }),
            g()(this, "unhandledError", function() {
                var t = Array.from(document.querySelectorAll('[data-task-status="pending"],[data-task-status="running"]')).map(function(t) {
                    return {
                        id: t.dataset.taskId,
                        status: "warn",
                        msg: "A server error occured. Failed to test. Please try again later."
                    }
                });
                n.updateTask.apply(n, c()(t))
            }),
            g()(this, "initFromLocation", function(t) {
                var e, i = new URL(t);
                if ("/share" === i.pathname && i.search) {
                    var o = i.searchParams.get("text").match(/https:\/\/twitter.com\/([A-Za-z0-9_]{1,15})/);
                    if (o)
                        e = l()(o, 2)[1]
                }
                var s, a = i.pathname.match(/^\/(?:@|%40)?([A-Za-z0-9_]{1,15})$/);
                a && !e && (e = l()(a, 2)[1]);
                e && (n.screenName.value = e,
                n.screenNameLabel.classList.add("active"),
                n.updateHeaderScreenName({
                    stopPropagation: function() {},
                    which: 20
                }),
                (s = window.history).replaceState.apply(s, c()(n.screenNameHistoryState)),
                n.runTest())
            }),
            g()(this, "setLocationForScreenName", function() {
                var t;
                (t = window.history).replaceState.apply(t, c()(n.screenNameHistoryState))
            }),
            g()(this, "updateTask", function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                e.forEach(function(t) {
                    n.tasksById[t.id] ? n.tasksById[t.id].update(t.status, t.msg) : console.warn("Omitting unknown task id on update: ".concat(t.id))
                })
            }),
            g()(this, "reset", function(t) {
                n.updateTask({
                    id: "checkUser",
                    status: "running",
                    msg: "Running test for @".concat(t, ".")
                }, {
                    id: "checkSearch",
                    status: "reset",
                    msg: "Search Ban"
                }, {
                    id: "checkSuggest",
                    status: "reset",
                    msg: "Search Suggestion Ban"
                }, {
                    id: "checkConventional",
                    status: "reset",
                    msg: "Thread Ban"
                }, {
                    id: "checkBarrier",
                    status: "reset",
                    msg: "Reply Deboosting"
                }),
                Mt.reset()
            }),
            g()(this, "lock", function() {
                n.checkButton.disabled = !0
            }),
            g()(this, "release", function() {
                n.checkButton.disabled = !1
            }),
            this.tasks = Bt().sort(function(t, e) {
                return t.idx - e.idx
            }).map(function(t) {
                return new Tt(t)
            }),
            this.tasksById = this.tasks.reduce(function(t, e) {
                return function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Dt(n, !0).forEach(function(e) {
                            g()(t, e, n[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Dt(n).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        })
                    }
                    return t
                }(g()({}, e.id, e), t)
            }, {}),
            this.screenName = document.getElementById("screenName"),
            this.screenNameLabel = document.querySelector('label[for="screenName"]'),
            this.screenNamePrefix = document.querySelector("#controls .input-field .prefix"),
            this.headerScreenName = document.getElementById("headerScreenName"),
            this.screenName.addEventListener("keyup", this.updateHeaderScreenName, !0),
            this.checkButton = document.getElementById("check"),
            this.checkButton.addEventListener("click", this.handleCheckClick),
            this.deferredPrompt = null,
            this.installButton = document.querySelector(".install-trigger"),
            window.addEventListener("beforeinstallprompt", function(t) {
                t.preventDefault(),
                n.deferredPrompt = t,
                n.installButton.addEventListener("click", n.handleInstallClick),
                n.installButton.parentElement.parentElement.classList.remove("hiddendiv")
            });
            var i = M.Collapsible.prototype._handleCollapsibleClick;
            M.Collapsible.prototype._handleCollapsibleClick = function(t) {
                if (t.stopPropagation(),
                "A" !== t.target.tagName) {
                    var e = cash(t.target).closest(".collapsible").attr("collapsible-non-interactive")
                      , n = cash(t.target).closest(".collapsible-header").attr("collapsible-non-interactive");
                    null === e && null === n && i.call(this, t)
                }
            }
            ,
            M.Collapsible.prototype._handleCollapsibleKeydown = function() {}
            ,
            localStorage.getItem("testing-toast") || (this.qfSettingToastInstance = Ot(function() {
                return n.qfSettingToastDimsmiss()
            }, function() {
                return n.qfSettingToastDimsmiss(!0)
            })),
            this.test = e;
            var o = document.getElementById("donate-modal");
            this.donateModal = M.Modal.init(o),
            o.querySelector("[href]").addEventListener("click", function() {
                document.getElementById("donate-thanks").classList.remove("hide")
            }),
            xt.resetElements(),
            M.Collapsible.init(document.getElementById("tasks")),
            M.Collapsible.init(document.getElementById("searchFAQ")),
            M.Collapsible.init(document.getElementById("threadFAQ")),
            M.Collapsible.init(document.getElementById("barrierFAQ")),
            M.Collapsible.init(document.getElementById("qfdFAQ")),
            M.Collapsible.init(document.getElementById("functionality")),
            M.Materialbox.init(document.querySelector(".noban-claim ~ .materialboxed"))
        }
        return f()(t, [{
            key: "runTest",
            value: function() {
                this.checkButton.focus(),
                this.showDonateModal(),
                this.reset(this.screenName.value),
                this.setLocationForScreenName(),
                this.lock(),
                this.test(this.screenName.value).then(this.release).catch(this.release)
            }
        }, {
            key: "qfSettingToastDimsmiss",
            value: function(t) {
                localStorage.setItem("testing-toast", !0),
                t || this.qfSettingToastInstance.dismiss()
            }
        }, {
            key: "showDonateModal",
            value: function() {
                var t = parseInt(localStorage.getItem("tested") || "0", 10) + 1;
                localStorage.setItem("tested", t),
                !localStorage.getItem("donate-cta-1") && t >= 5 && (localStorage.setItem("donate-cta-1", !0),
                this.donateModal.open())
            }
        }, {
            key: "screenNameHistoryState",
            get: function() {
                var t = this.screenName.value;
                return [{
                    screenName: t
                }, "Testing ".concat(t), "/".concat(t)]
            }
        }]),
        t
    }(), At = (n(32),
    function() {
        var t = a()(o.a.mark(function t(e) {
            var n, i, s, a, r, l, u, c, h, d, p;
            return o.a.wrap(function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        return t.prev = 0,
                        t.next = 3,
                        fetch("https://shadowban-api.yuzurisa.com:444/".concat(e));
                    case 3:
                        n = t.sent,
                        t.next = 10;
                        break;
                    case 6:
                        return t.prev = 6,
                        t.t0 = t.catch(0),
                        It.updateTask({
                            id: "checkUser",
                            status: "warn",
                            msg: "You are offline."
                        }),
                        t.abrupt("return");
                    case 10:
                        if (429 !== n.status) {
                            t.next = 13;
                            break
                        }
                        return It.updateTask({
                            id: "checkUser",
                            status: "warn",
                            msg: "Rate limit exceeded. Please try again in a minute!"
                        }),
                        t.abrupt("return");
                    case 13:
                        if (n.ok) {
                            t.next = 16;
                            break
                        }
                        return It.updateTask({
                            id: "checkUser",
                            status: "warn",
                            msg: "Server error. Please try again later."
                        }),
                        t.abrupt("return");
                    case 16:
                        return t.next = 18,
                        n.json();
                    case 18:
                        if (i = t.sent,
                        s = i.profile.screen_name,
                        a = '<a href="https://twitter.com/'.concat(s, '" rel="noopener noreferrer">@').concat(s, "</a>"),
                        i.profile.exists ? i.profile.protected ? r = "is protected" : i.profile.suspended ? r = "has been suspended" : i.profile.has_tweets || (r = "has no tweets") : r = "does not exist or doesn't have any tweets. Try again after sending a tweet",
                        !r) {
                            t.next = 25;
                            break
                        }
                        return It.updateTask({
                            id: "checkUser",
                            status: "warn",
                            msg: "".concat(a, " ").concat(r, ".")
                        }),
                        t.abrupt("return");
                    case 25:
                        It.updateTask({
                            id: "checkUser",
                            status: "ok",
                            msg: "".concat(a, " exists.")
                        }),
                        u = l = ["warn", "We were unable to test for technical reasons."],
                        !0 === i.tests.typeahead && (u = ["ok", "No search suggestion ban."]),
                        !1 === i.tests.typeahead && (u = ["ban", "Search suggestion ban."]),
                        It.updateTask({
                            id: "checkSuggest",
                            status: u[0],
                            msg: u[1]
                        }),
                        c = l,
                        i.tests.search && "_error" !== i.tests.search ? c = ["ok", "No search ban."] : !1 === i.tests.search && (c = ["ban", "Search ban."]),
                        It.updateTask({
                            id: "checkSearch",
                            status: c[0],
                            msg: c[1]
                        }),
                        Mt.updateSearch(i),
                        h = l,
                        !1 === i.tests.ghost.ban ? h = ["ok", "No ghost ban."] : !0 === i.tests.ghost.ban && (h = ["ban", "Ghost ban."]),
                        It.updateTask({
                            id: "checkConventional",
                            status: h[0],
                            msg: h[1]
                        }),
                        Mt.updateThread(i),
                        d = l,
                        i.tests.more_replies && ("ENOREPLIES" === i.tests.more_replies.error ? d = ["warn", "".concat(e, " has not made any reply tweets.")] : !1 === i.tests.more_replies.ban ? d = ["ok", "No reply deboosting detected."] : !0 === i.tests.more_replies.ban && (p = i.tests.more_replies.stage <= 0 ? "" : " The tweet we found was in the section for offensive tweets.",
                        d = ["ban", "Reply deboosting detected.".concat(p)])),
                        "more_replies"in i.tests && (It.updateTask({
                            id: "checkBarrier",
                            status: d[0],
                            msg: d[1]
                        }),
                        Mt.updateBarrier(i));
                    case 42:
                    case "end":
                        return t.stop()
                    }
            }, t, null, [[0, 6]])
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }());
    "serviceWorker"in navigator && navigator.serviceWorker.register("worker.js").then(function() {
        return console.log("Service worker registered.")
    }).catch(function(t) {
        return console.log("Service worker not registered. This happened:", t)
    }),
    xt.init().then(function() {
        (It = new $t).test = At,
        It.initFromLocation(window.location)
    })
}
]);
