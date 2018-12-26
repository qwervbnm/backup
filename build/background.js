! function(e) {
    var t = {};
    function r(a) {
        if (t[a]) return t[a].exports;
        var n = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, a) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (r.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) r.d(a, n, function(t) {
                return e[t]
            }.bind(null, n));
        return a
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 77)
}([, function(e, t, r) {
    "use strict";
    var a = r(29),
        n = r(81),
        o = Object.prototype.toString;
    function s(e) {
        return "[object Array]" === o.call(e)
    }
    function i(e) {
        return null !== e && "object" == typeof e
    }
    function c(e) {
        return "[object Function]" === o.call(e)
    }
    function u(e, t) {
        if (null !== e && void 0 !== e)
            if ("object" != typeof e && (e = [e]), s(e))
                for (var r = 0, a = e.length; r < a; r++) t.call(null, e[r], r, e);
            else
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.call(null, e[n], n, e)
    }
    e.exports = {
        isArray: s,
        isArrayBuffer: function(e) {
            return "[object ArrayBuffer]" === o.call(e)
        },
        isBuffer: n,
        isFormData: function(e) {
            return "undefined" != typeof FormData && e instanceof FormData
        },
        isArrayBufferView: function(e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        },
        isString: function(e) {
            return "string" == typeof e
        },
        isNumber: function(e) {
            return "number" == typeof e
        },
        isObject: i,
        isUndefined: function(e) {
            return void 0 === e
        },
        isDate: function(e) {
            return "[object Date]" === o.call(e)
        },
        isFile: function(e) {
            return "[object File]" === o.call(e)
        },
        isBlob: function(e) {
            return "[object Blob]" === o.call(e)
        },
        isFunction: c,
        isStream: function(e) {
            return i(e) && c(e.pipe)
        },
        isURLSearchParams: function(e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        },
        isStandardBrowserEnv: function() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
        },
        forEach: u,
        merge: function e() {
            var t = {};
            function r(r, a) {
                "object" == typeof t[a] && "object" == typeof r ? t[a] = e(t[a], r) : t[a] = r
            }
            for (var a = 0, n = arguments.length; a < n; a++) u(arguments[a], r);
            return t
        },
        extend: function(e, t, r) {
            return u(t, function(t, n) {
                e[n] = r && "function" == typeof t ? a(t, r) : t
            }), e
        },
        trim: function(e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}, function(e, t) {
    var r;
    r = function() {
        return this
    }();
    try {
        r = r || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (r = window)
    }
    e.exports = r
}, , function(e, t) {
    var r, a, n = e.exports = {};
    function o() {
        throw new Error("setTimeout has not been defined")
    }
    function s() {
        throw new Error("clearTimeout has not been defined")
    }
    function i(e) {
        if (r === setTimeout) return setTimeout(e, 0);
        if ((r === o || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
        try {
            return r(e, 0)
        } catch (t) {
            try {
                return r.call(null, e, 0)
            } catch (t) {
                return r.call(this, e, 0)
            }
        }
    }! function() {
        try {
            r = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
            r = o
        }
        try {
            a = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (e) {
            a = s
        }
    }();
    var c, u = [],
        h = !1,
        l = -1;
    function f() {
        h && c && (h = !1, c.length ? u = c.concat(u) : l = -1, u.length && p())
    }
    function p() {
        if (!h) {
            var e = i(f);
            h = !0;
            for (var t = u.length; t;) {
                for (c = u, u = []; ++l < t;) c && c[l].run();
                l = -1, t = u.length
            }
            c = null, h = !1,
                function(e) {
                    if (a === clearTimeout) return clearTimeout(e);
                    if ((a === s || !a) && clearTimeout) return a = clearTimeout, clearTimeout(e);
                    try {
                        a(e)
                    } catch (t) {
                        try {
                            return a.call(null, e)
                        } catch (t) {
                            return a.call(this, e)
                        }
                    }
                }(e)
        }
    }
    function d(e, t) {
        this.fun = e, this.array = t
    }
    function m() {}
    n.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        u.push(new d(e, t)), 1 !== u.length || h || i(p)
    }, d.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = m, n.addListener = m, n.once = m, n.off = m, n.removeListener = m, n.removeAllListeners = m, n.emit = m, n.prependListener = m, n.prependOnceListener = m, n.listeners = function(e) {
        return []
    }, n.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, n.cwd = function() {
        return "/"
    }, n.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, n.umask = function() {
        return 0
    }
}, function(e, t, r) {
    function a(e) {
        if (e) return function(e) {
            for (var t in a.prototype) e[t] = a.prototype[t];
            return e
        }(e)
    }
    e.exports = a, a.prototype.on = a.prototype.addEventListener = function(e, t) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
    }, a.prototype.once = function(e, t) {
        function r() {
            this.off(e, r), t.apply(this, arguments)
        }
        return r.fn = t, this.on(e, r), this
    }, a.prototype.off = a.prototype.removeListener = a.prototype.removeAllListeners = a.prototype.removeEventListener = function(e, t) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
        var r, a = this._callbacks["$" + e];
        if (!a) return this;
        if (1 == arguments.length) return delete this._callbacks["$" + e], this;
        for (var n = 0; n < a.length; n++)
            if ((r = a[n]) === t || r.fn === t) {
                a.splice(n, 1);
                break
            }
        return this
    }, a.prototype.emit = function(e) {
        this._callbacks = this._callbacks || {};
        var t = [].slice.call(arguments, 1),
            r = this._callbacks["$" + e];
        if (r)
            for (var a = 0, n = (r = r.slice(0)).length; a < n; ++a) r[a].apply(this, t);
        return this
    }, a.prototype.listeners = function(e) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
    }, a.prototype.hasListeners = function(e) {
        return !!this.listeners(e).length
    }
}, function(e, t, r) {
    var a, n = r(117),
        o = r(40),
        s = r(119),
        i = r(120),
        c = r(121);
    "undefined" != typeof ArrayBuffer && (a = r(122));
    var u = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
        h = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
        l = u || h;
    t.protocol = 3;
    var f = t.packets = {
            open: 0,
            close: 1,
            ping: 2,
            pong: 3,
            message: 4,
            upgrade: 5,
            noop: 6
        },
        p = n(f),
        d = {
            type: "error",
            data: "parser error"
        },
        m = r(123);
    function v(e, t, r) {
        for (var a = new Array(e.length), n = i(e.length, r), o = function(e, r, n) {
                t(r, function(t, r) {
                    a[e] = r, n(t, a)
                })
            }, s = 0; s < e.length; s++) o(s, e[s], n)
    }
    t.encodePacket = function(e, r, a, n) {
        "function" == typeof r && (n = r, r = !1), "function" == typeof a && (n = a, a = null);
        var o = void 0 === e.data ? void 0 : e.data.buffer || e.data;
        if ("undefined" != typeof ArrayBuffer && o instanceof ArrayBuffer) return function(e, r, a) {
            if (!r) return t.encodeBase64Packet(e, a);
            var n = e.data,
                o = new Uint8Array(n),
                s = new Uint8Array(1 + n.byteLength);
            s[0] = f[e.type];
            for (var i = 0; i < o.length; i++) s[i + 1] = o[i];
            return a(s.buffer)
        }(e, r, n);
        if (void 0 !== m && o instanceof m) return function(e, r, a) {
            if (!r) return t.encodeBase64Packet(e, a);
            if (l) return function(e, r, a) {
                if (!r) return t.encodeBase64Packet(e, a);
                var n = new FileReader;
                return n.onload = function() {
                    t.encodePacket({
                        type: e.type,
                        data: n.result
                    }, r, !0, a)
                }, n.readAsArrayBuffer(e.data)
            }(e, r, a);
            var n = new Uint8Array(1);
            n[0] = f[e.type];
            var o = new m([n.buffer, e.data]);
            return a(o)
        }(e, r, n);
        if (o && o.base64) return function(e, r) {
            var a = "b" + t.packets[e.type] + e.data.data;
            return r(a)
        }(e, n);
        var s = f[e.type];
        return void 0 !== e.data && (s += a ? c.encode(String(e.data), {
            strict: !1
        }) : String(e.data)), n("" + s)
    }, t.encodeBase64Packet = function(e, r) {
        var a, n = "b" + t.packets[e.type];
        if (void 0 !== m && e.data instanceof m) {
            var o = new FileReader;
            return o.onload = function() {
                var e = o.result.split(",")[1];
                r(n + e)
            }, o.readAsDataURL(e.data)
        }
        try {
            a = String.fromCharCode.apply(null, new Uint8Array(e.data))
        } catch (t) {
            for (var s = new Uint8Array(e.data), i = new Array(s.length), c = 0; c < s.length; c++) i[c] = s[c];
            a = String.fromCharCode.apply(null, i)
        }
        return n += btoa(a), r(n)
    }, t.decodePacket = function(e, r, a) {
        if (void 0 === e) return d;
        if ("string" == typeof e) {
            if ("b" === e.charAt(0)) return t.decodeBase64Packet(e.substr(1), r);
            if (a && !1 === (e = function(e) {
                    try {
                        e = c.decode(e, {
                            strict: !1
                        })
                    } catch (e) {
                        return !1
                    }
                    return e
                }(e))) return d;
            var n = e.charAt(0);
            return Number(n) == n && p[n] ? e.length > 1 ? {
                type: p[n],
                data: e.substring(1)
            } : {
                type: p[n]
            } : d
        }
        n = new Uint8Array(e)[0];
        var o = s(e, 1);
        return m && "blob" === r && (o = new m([o])), {
            type: p[n],
            data: o
        }
    }, t.decodeBase64Packet = function(e, t) {
        var r = p[e.charAt(0)];
        if (!a) return {
            type: r,
            data: {
                base64: !0,
                data: e.substr(1)
            }
        };
        var n = a.decode(e.substr(1));
        return "blob" === t && m && (n = new m([n])), {
            type: r,
            data: n
        }
    }, t.encodePayload = function(e, r, a) {
        "function" == typeof r && (a = r, r = null);
        var n = o(e);
        if (r && n) return m && !l ? t.encodePayloadAsBlob(e, a) : t.encodePayloadAsArrayBuffer(e, a);
        if (!e.length) return a("0:");
        v(e, function(e, a) {
            t.encodePacket(e, !!n && r, !1, function(e) {
                a(null, function(e) {
                    return e.length + ":" + e
                }(e))
            })
        }, function(e, t) {
            return a(t.join(""))
        })
    }, t.decodePayload = function(e, r, a) {
        if ("string" != typeof e) return t.decodePayloadAsBinary(e, r, a);
        var n;
        if ("function" == typeof r && (a = r, r = null), "" === e) return a(d, 0, 1);
        for (var o, s, i = "", c = 0, u = e.length; c < u; c++) {
            var h = e.charAt(c);
            if (":" === h) {
                if ("" === i || i != (o = Number(i))) return a(d, 0, 1);
                if (i != (s = e.substr(c + 1, o)).length) return a(d, 0, 1);
                if (s.length) {
                    if (n = t.decodePacket(s, r, !1), d.type === n.type && d.data === n.data) return a(d, 0, 1);
                    if (!1 === a(n, c + o, u)) return
                }
                c += o, i = ""
            } else i += h
        }
        return "" !== i ? a(d, 0, 1) : void 0
    }, t.encodePayloadAsArrayBuffer = function(e, r) {
        if (!e.length) return r(new ArrayBuffer(0));
        v(e, function(e, r) {
            t.encodePacket(e, !0, !0, function(e) {
                return r(null, e)
            })
        }, function(e, t) {
            var a = t.reduce(function(e, t) {
                    var r;
                    return e + (r = "string" == typeof t ? t.length : t.byteLength).toString().length + r + 2
                }, 0),
                n = new Uint8Array(a),
                o = 0;
            return t.forEach(function(e) {
                var t = "string" == typeof e,
                    r = e;
                if (t) {
                    for (var a = new Uint8Array(e.length), s = 0; s < e.length; s++) a[s] = e.charCodeAt(s);
                    r = a.buffer
                }
                n[o++] = t ? 0 : 1;
                var i = r.byteLength.toString();
                for (s = 0; s < i.length; s++) n[o++] = parseInt(i[s]);
                n[o++] = 255;
                for (a = new Uint8Array(r), s = 0; s < a.length; s++) n[o++] = a[s]
            }), r(n.buffer)
        })
    }, t.encodePayloadAsBlob = function(e, r) {
        v(e, function(e, r) {
            t.encodePacket(e, !0, !0, function(e) {
                var t = new Uint8Array(1);
                if (t[0] = 1, "string" == typeof e) {
                    for (var a = new Uint8Array(e.length), n = 0; n < e.length; n++) a[n] = e.charCodeAt(n);
                    e = a.buffer, t[0] = 0
                }
                var o = (e instanceof ArrayBuffer ? e.byteLength : e.size).toString(),
                    s = new Uint8Array(o.length + 1);
                for (n = 0; n < o.length; n++) s[n] = parseInt(o[n]);
                if (s[o.length] = 255, m) {
                    var i = new m([t.buffer, s.buffer, e]);
                    r(null, i)
                }
            })
        }, function(e, t) {
            return r(new m(t))
        })
    }, t.decodePayloadAsBinary = function(e, r, a) {
        "function" == typeof r && (a = r, r = null);
        for (var n = e, o = []; n.byteLength > 0;) {
            for (var i = new Uint8Array(n), c = 0 === i[0], u = "", h = 1; 255 !== i[h]; h++) {
                if (u.length > 310) return a(d, 0, 1);
                u += i[h]
            }
            n = s(n, 2 + u.length), u = parseInt(u);
            var l = s(n, 0, u);
            if (c) try {
                l = String.fromCharCode.apply(null, new Uint8Array(l))
            } catch (e) {
                var f = new Uint8Array(l);
                l = "";
                for (h = 0; h < f.length; h++) l += String.fromCharCode(f[h])
            }
            o.push(l), n = s(n, u)
        }
        var p = o.length;
        o.forEach(function(e, n) {
            a(t.decodePacket(e, r, !0), n, p)
        })
    }
}, function(e, t, r) {
    "use strict";
    function a(e, t, r) {
        var a = r ? " !== " : " === ",
            n = r ? " || " : " && ",
            o = r ? "!" : "",
            s = r ? "" : "!";
        switch (e) {
            case "null":
                return t + a + "null";
            case "array":
                return o + "Array.isArray(" + t + ")";
            case "object":
                return "(" + o + t + n + "typeof " + t + a + '"object"' + n + s + "Array.isArray(" + t + "))";
            case "integer":
                return "(typeof " + t + a + '"number"' + n + s + "(" + t + " % 1)" + n + t + a + t + ")";
            default:
                return "typeof " + t + a + '"' + e + '"'
        }
    }
    e.exports = {
        copy: function(e, t) {
            for (var r in t = t || {}, e) t[r] = e[r];
            return t
        },
        checkDataType: a,
        checkDataTypes: function(e, t) {
            switch (e.length) {
                case 1:
                    return a(e[0], t, !0);
                default:
                    var r = "",
                        n = o(e);
                    for (var s in n.array && n.object && (r = n.null ? "(" : "(!" + t + " || ", r += "typeof " + t + ' !== "object")', delete n.null, delete n.array, delete n.object), n.number && delete n.integer, n) r += (r ? " && " : "") + a(s, t, !0);
                    return r
            }
        },
        coerceToTypes: function(e, t) {
            if (Array.isArray(t)) {
                for (var r = [], a = 0; a < t.length; a++) {
                    var o = t[a];
                    n[o] ? r[r.length] = o : "array" === e && "array" === o && (r[r.length] = o)
                }
                if (r.length) return r
            } else {
                if (n[t]) return [t];
                if ("array" === e && "array" === t) return ["array"]
            }
        },
        toHash: o,
        getProperty: c,
        escapeQuotes: u,
        equal: r(27),
        ucs2length: r(134),
        varOccurences: function(e, t) {
            t += "[^0-9]";
            var r = e.match(new RegExp(t, "g"));
            return r ? r.length : 0
        },
        varReplace: function(e, t, r) {
            return t += "([^0-9])", r = r.replace(/\$/g, "$$$$"), e.replace(new RegExp(t, "g"), r + "$1")
        },
        cleanUpCode: function(e) {
            return e.replace(h, "").replace(l, "").replace(f, "if (!($1))")
        },
        finalCleanUpCode: function(e, t) {
            var r = e.match(p);
            r && 2 == r.length && (e = t ? e.replace(m, "").replace(g, w) : e.replace(d, "").replace(v, y));
            return (r = e.match(b)) && 3 === r.length ? e.replace(P, "") : e
        },
        schemaHasRules: function(e, t) {
            if ("boolean" == typeof e) return !e;
            for (var r in e)
                if (t[r]) return !0
        },
        schemaHasRulesExcept: function(e, t, r) {
            if ("boolean" == typeof e) return !e && "not" != r;
            for (var a in e)
                if (a != r && t[a]) return !0
        },
        toQuotedString: E,
        getPathExpr: function(e, t, r, a) {
            return x(e, r ? "'/' + " + t + (a ? "" : ".replace(/~/g, '~0').replace(/\\//g, '~1')") : a ? "'[' + " + t + " + ']'" : "'[\\'' + " + t + " + '\\']'")
        },
        getPath: function(e, t, r) {
            var a = E(r ? "/" + F(t) : c(t));
            return x(e, a)
        },
        getData: function(e, t, r) {
            var a, n, o, s;
            if ("" === e) return "rootData";
            if ("/" == e[0]) {
                if (!C.test(e)) throw new Error("Invalid JSON-pointer: " + e);
                n = e, o = "rootData"
            } else {
                if (!(s = e.match(S))) throw new Error("Invalid JSON-pointer: " + e);
                if (a = +s[1], "#" == (n = s[2])) {
                    if (a >= t) throw new Error("Cannot access property/index " + a + " levels up, current level is " + t);
                    return r[t - a]
                }
                if (a > t) throw new Error("Cannot access data " + a + " levels up, current level is " + t);
                if (o = "data" + (t - a || ""), !n) return o
            }
            for (var i = o, u = n.split("/"), h = 0; h < u.length; h++) {
                var l = u[h];
                l && (o += c(_(l)), i += " && " + o)
            }
            return i
        },
        unescapeFragment: function(e) {
            return _(decodeURIComponent(e))
        },
        unescapeJsonPointer: _,
        escapeFragment: function(e) {
            return encodeURIComponent(F(e))
        },
        escapeJsonPointer: F
    };
    var n = o(["string", "number", "integer", "boolean", "null"]);
    function o(e) {
        for (var t = {}, r = 0; r < e.length; r++) t[e[r]] = !0;
        return t
    }
    var s = /^[a-z$_][a-z$_0-9]*$/i,
        i = /'|\\/g;
    function c(e) {
        return "number" == typeof e ? "[" + e + "]" : s.test(e) ? "." + e : "['" + u(e) + "']"
    }
    function u(e) {
        return e.replace(i, "\\$&").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\f/g, "\\f").replace(/\t/g, "\\t")
    }
    var h = /else\s*{\s*}/g,
        l = /if\s*\([^)]+\)\s*\{\s*\}(?!\s*else)/g,
        f = /if\s*\(([^)]+)\)\s*\{\s*\}\s*else(?!\s*if)/g;
    var p = /[^v.]errors/g,
        d = /var errors = 0;|var vErrors = null;|validate.errors = vErrors;/g,
        m = /var errors = 0;|var vErrors = null;/g,
        v = "return errors === 0;",
        y = "validate.errors = null; return true;",
        g = /if \(errors === 0\) return data;\s*else throw new ValidationError\(vErrors\);/,
        w = "return data;",
        b = /[^A-Za-z_$]rootData[^A-Za-z0-9_$]/g,
        P = /if \(rootData === undefined\) rootData = data;/;
    function E(e) {
        return "'" + u(e) + "'"
    }
    var C = /^\/(?:[^~]|~0|~1)*$/,
        S = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
    function x(e, t) {
        return '""' == e ? t : (e + " + " + t).replace(/' \+ '/g, "")
    }
    function F(e) {
        return e.replace(/~/g, "~0").replace(/\//g, "~1")
    }
    function _(e) {
        return e.replace(/~1/g, "/").replace(/~0/g, "~")
    }
}, function(e) {
    e.exports = {
        name: "99999鎽搁噾鍔╂墜",
        short_name: "99999Helper",
        version: "0.6.0",
        description: "99999鎽搁噾鍔╂墜",
        manifest_version: 2,
        icons: {
            32: "assets/logo-32.png",
            48: "assets/logo-48.png",
            64: "assets/logo-64.png",
            128: "assets/logo-128.png"
        },
        browser_action: {
            default_icon: {
                128: "assets/logo-128.png"
            },
            default_title: "99999鎽搁噾鍔╂墜",
            default_popup: "popup.html"
        },
        content_security_policy: "script-src 'self' https://*.mllab.cn 'unsafe-eval'; object-src 'self'",
        web_accessible_resources: ["build/backend.js", "assets/*", "https://static.mllab.cn/tsbuild/*"],
        background: {
            scripts: ["build/background_inject.js"],
            persistent: !0
        },
        content_scripts: [{
            matches: ["https://www.douyu.com/*"],
            js: ["build/inject.js"],
            run_at: "document_start"
        }],
        permissions: ["tabs", "https://www.douyu.com/*", "webRequest", "webRequestBlocking", "<all_urls>"]
    }
}, , function(e, t) {
    function r() {
        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
    }
    function a(e) {
        return "function" == typeof e
    }
    function n(e) {
        return "object" == typeof e && null !== e
    }
    function o(e) {
        return void 0 === e
    }
    e.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._maxListeners = void 0, r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function(e) {
        if (! function(e) {
                return "number" == typeof e
            }(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
        return this._maxListeners = e, this
    }, r.prototype.emit = function(e) {
        var t, r, s, i, c, u;
        if (this._events || (this._events = {}), "error" === e && (!this._events.error || n(this._events.error) && !this._events.error.length)) {
            if ((t = arguments[1]) instanceof Error) throw t;
            var h = new Error('Uncaught, unspecified "error" event. (' + t + ")");
            throw h.context = t, h
        }
        if (o(r = this._events[e])) return !1;
        if (a(r)) switch (arguments.length) {
            case 1:
                r.call(this);
                break;
            case 2:
                r.call(this, arguments[1]);
                break;
            case 3:
                r.call(this, arguments[1], arguments[2]);
                break;
            default:
                i = Array.prototype.slice.call(arguments, 1), r.apply(this, i)
        } else if (n(r))
            for (i = Array.prototype.slice.call(arguments, 1), s = (u = r.slice()).length, c = 0; c < s; c++) u[c].apply(this, i);
        return !0
    }, r.prototype.addListener = function(e, t) {
        var s;
        if (!a(t)) throw TypeError("listener must be a function");
        return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, a(t.listener) ? t.listener : t), this._events[e] ? n(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, n(this._events[e]) && !this._events[e].warned && (s = o(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners) && s > 0 && this._events[e].length > s && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
    }, r.prototype.on = r.prototype.addListener, r.prototype.once = function(e, t) {
        if (!a(t)) throw TypeError("listener must be a function");
        var r = !1;
        function n() {
            this.removeListener(e, n), r || (r = !0, t.apply(this, arguments))
        }
        return n.listener = t, this.on(e, n), this
    }, r.prototype.removeListener = function(e, t) {
        var r, o, s, i;
        if (!a(t)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[e]) return this;
        if (s = (r = this._events[e]).length, o = -1, r === t || a(r.listener) && r.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
        else if (n(r)) {
            for (i = s; i-- > 0;)
                if (r[i] === t || r[i].listener && r[i].listener === t) {
                    o = i;
                    break
                }
            if (o < 0) return this;
            1 === r.length ? (r.length = 0, delete this._events[e]) : r.splice(o, 1), this._events.removeListener && this.emit("removeListener", e, t)
        }
        return this
    }, r.prototype.removeAllListeners = function(e) {
        var t, r;
        if (!this._events) return this;
        if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
        if (0 === arguments.length) {
            for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
            return this.removeAllListeners("removeListener"), this._events = {}, this
        }
        if (a(r = this._events[e])) this.removeListener(e, r);
        else if (r)
            for (; r.length;) this.removeListener(e, r[r.length - 1]);
        return delete this._events[e], this
    }, r.prototype.listeners = function(e) {
        return this._events && this._events[e] ? a(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
    }, r.prototype.listenerCount = function(e) {
        if (this._events) {
            var t = this._events[e];
            if (a(t)) return 1;
            if (t) return t.length
        }
        return 0
    }, r.listenerCount = function(e, t) {
        return e.listenerCount(t)
    }
}, function(e, t, r) {
    (function(a) {
        function n() {
            var e;
            try {
                e = t.storage.debug
            } catch (e) {}
            return !e && void 0 !== a && "env" in a && (e = a.env.DEBUG), e
        }(t = e.exports = r(104)).log = function() {
            return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }, t.formatArgs = function(e) {
            var r = this.useColors;
            if (e[0] = (r ? "%c" : "") + this.namespace + (r ? " %c" : " ") + e[0] + (r ? "%c " : " ") + "+" + t.humanize(this.diff), !r) return;
            var a = "color: " + this.color;
            e.splice(1, 0, a, "color: inherit");
            var n = 0,
                o = 0;
            e[0].replace(/%[a-zA-Z%]/g, function(e) {
                "%%" !== e && "%c" === e && (o = ++n)
            }), e.splice(o, 0, a)
        }, t.save = function(e) {
            try {
                null == e ? t.storage.removeItem("debug") : t.storage.debug = e
            } catch (e) {}
        }, t.load = n, t.useColors = function() {
            if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
            if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
            return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
            try {
                return window.localStorage
            } catch (e) {}
        }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.formatters.j = function(e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message
            }
        }, t.enable(n())
    }).call(this, r(4))
}, function(e, t) {
    t.encode = function(e) {
        var t = "";
        for (var r in e) e.hasOwnProperty(r) && (t.length && (t += "&"), t += encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
        return t
    }, t.decode = function(e) {
        for (var t = {}, r = e.split("&"), a = 0, n = r.length; a < n; a++) {
            var o = r[a].split("=");
            t[decodeURIComponent(o[0])] = decodeURIComponent(o[1])
        }
        return t
    }
}, function(e, t) {
    e.exports = function(e, t) {
        var r = function() {};
        r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
    }
}, function(e, t, r) {
    (function(a) {
        function n() {
            var e;
            try {
                e = t.storage.debug
            } catch (e) {}
            return !e && void 0 !== a && "env" in a && (e = a.env.DEBUG), e
        }(t = e.exports = r(124)).log = function() {
            return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }, t.formatArgs = function(e) {
            var r = this.useColors;
            if (e[0] = (r ? "%c" : "") + this.namespace + (r ? " %c" : " ") + e[0] + (r ? "%c " : " ") + "+" + t.humanize(this.diff), !r) return;
            var a = "color: " + this.color;
            e.splice(1, 0, a, "color: inherit");
            var n = 0,
                o = 0;
            e[0].replace(/%[a-zA-Z%]/g, function(e) {
                "%%" !== e && "%c" === e && (o = ++n)
            }), e.splice(o, 0, a)
        }, t.save = function(e) {
            try {
                null == e ? t.storage.removeItem("debug") : t.storage.debug = e
            } catch (e) {}
        }, t.load = n, t.useColors = function() {
            if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
            if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
            return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
            try {
                return window.localStorage
            } catch (e) {}
        }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.formatters.j = function(e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message
            }
        }, t.enable(n())
    }).call(this, r(4))
}, , , , , , function(e, t, r) {
    var a = r(79),
        n = "https://api.mllab.cn/dy";
    e.exports = new class {
        constructor() {
            this.dyUid = null, this.cachedGeetest = []
        }
        dyLogin(e) {
            this.dyUid = e ? e.dyUid : null, this.dyUid && (this.cachedGeetest.forEach(e => this.uploadGeetest(e)), this.cachedGeetest = [])
        }
        async uploadGeetest(e) {
            var {
                dyUid: t
            } = this;
            t ? a.post(n + "/geetest", Object.assign({}, e, {
                dyUid: t
            })) : this.cachedGeetest.push(e)
        }
        async ver(e) {
            try {
                var t = await a.get(n + "/ver", {
                    params: {
                        ver: e,
                        timestamp: Date.now()
                    }
                });
                return 200 === t.status ? t.data : null
            } catch (e) {
                return null
            }
        }
        async standardTime() {
            try {
                var e = await a.get("http://api.m.taobao.com/rest/api3.do", {
                    params: {
                        api: "mtop.common.getTimestamp",
                        timestamp: Date.now()
                    }
                });
                return 200 === e.status && e.data.data && e.data.data.t ? parseInt(e.data.data.t, 10) : null
            } catch (e) {
                return null
            }
        }
    }
}, function(e, t, r) {
    "use strict";
    (function(t) {
        var a = r(1),
            n = r(83),
            o = {
                "Content-Type": "application/x-www-form-urlencoded"
            };
        function s(e, t) {
            !a.isUndefined(e) && a.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }
        var i = {
            adapter: function() {
                var e;
                return "undefined" != typeof XMLHttpRequest ? e = r(30) : void 0 !== t && (e = r(30)), e
            }(),
            transformRequest: [function(e, t) {
                return n(t, "Content-Type"), a.isFormData(e) || a.isArrayBuffer(e) || a.isBuffer(e) || a.isStream(e) || a.isFile(e) || a.isBlob(e) ? e : a.isArrayBufferView(e) ? e.buffer : a.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : a.isObject(e) ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
            }],
            transformResponse: [function(e) {
                if ("string" == typeof e) try {
                    e = JSON.parse(e)
                } catch (e) {}
                return e
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function(e) {
                return e >= 200 && e < 300
            },
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                }
            }
        };
        a.forEach(["delete", "get", "head"], function(e) {
            i.headers[e] = {}
        }), a.forEach(["post", "put", "patch"], function(e) {
            i.headers[e] = a.merge(o)
        }), e.exports = i
    }).call(this, r(4))
}, function(e, t, r) {
    var a = r(106)("socket.io-parser"),
        n = r(5),
        o = r(109),
        s = r(35),
        i = r(36);
    function c() {}
    t.protocol = 4, t.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], t.CONNECT = 0, t.DISCONNECT = 1, t.EVENT = 2, t.ACK = 3, t.ERROR = 4, t.BINARY_EVENT = 5, t.BINARY_ACK = 6, t.Encoder = c, t.Decoder = l;
    var u = t.ERROR + '"encode error"';
    function h(e) {
        var r = "" + e.type;
        if (t.BINARY_EVENT !== e.type && t.BINARY_ACK !== e.type || (r += e.attachments + "-"), e.nsp && "/" !== e.nsp && (r += e.nsp + ","), null != e.id && (r += e.id), null != e.data) {
            var n = function(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return !1
                }
            }(e.data);
            if (!1 === n) return u;
            r += n
        }
        return a("encoded %j as %s", e, r), r
    }
    function l() {
        this.reconstructor = null
    }
    function f(e) {
        this.reconPack = e, this.buffers = []
    }
    function p(e) {
        return {
            type: t.ERROR,
            data: "parser error: " + e
        }
    }
    c.prototype.encode = function(e, r) {
        (a("encoding packet %j", e), t.BINARY_EVENT === e.type || t.BINARY_ACK === e.type) ? function(e, t) {
            o.removeBlobs(e, function(e) {
                var r = o.deconstructPacket(e),
                    a = h(r.packet),
                    n = r.buffers;
                n.unshift(a), t(n)
            })
        }(e, r) : r([h(e)])
    }, n(l.prototype), l.prototype.add = function(e) {
        var r;
        if ("string" == typeof e) r = function(e) {
            var r = 0,
                n = {
                    type: Number(e.charAt(0))
                };
            if (null == t.types[n.type]) return p("unknown packet type " + n.type);
            if (t.BINARY_EVENT === n.type || t.BINARY_ACK === n.type) {
                for (var o = "";
                    "-" !== e.charAt(++r) && (o += e.charAt(r), r != e.length););
                if (o != Number(o) || "-" !== e.charAt(r)) throw new Error("Illegal attachments");
                n.attachments = Number(o)
            }
            if ("/" === e.charAt(r + 1))
                for (n.nsp = ""; ++r;) {
                    var i = e.charAt(r);
                    if ("," === i) break;
                    if (n.nsp += i, r === e.length) break
                } else n.nsp = "/";
            var c = e.charAt(r + 1);
            if ("" !== c && Number(c) == c) {
                for (n.id = ""; ++r;) {
                    var i = e.charAt(r);
                    if (null == i || Number(i) != i) {
                        --r;
                        break
                    }
                    if (n.id += e.charAt(r), r === e.length) break
                }
                n.id = Number(n.id)
            }
            if (e.charAt(++r)) {
                var u = function(e) {
                        try {
                            return JSON.parse(e)
                        } catch (e) {
                            return !1
                        }
                    }(e.substr(r)),
                    h = !1 !== u && (n.type === t.ERROR || s(u));
                if (!h) return p("invalid payload");
                n.data = u
            }
            return a("decoded %s as %j", e, n), n
        }(e), t.BINARY_EVENT === r.type || t.BINARY_ACK === r.type ? (this.reconstructor = new f(r), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", r)) : this.emit("decoded", r);
        else {
            if (!i(e) && !e.base64) throw new Error("Unknown type: " + e);
            if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
            (r = this.reconstructor.takeBinaryData(e)) && (this.reconstructor = null, this.emit("decoded", r))
        }
    }, l.prototype.destroy = function() {
        this.reconstructor && this.reconstructor.finishedReconstruction()
    }, f.prototype.takeBinaryData = function(e) {
        if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
            var t = o.reconstructPacket(this.reconPack, this.buffers);
            return this.finishedReconstruction(), t
        }
        return null
    }, f.prototype.finishedReconstruction = function() {
        this.reconPack = null, this.buffers = []
    }
}, function(e, t, r) {
    "use strict";
    (function(e) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
         * @license  MIT
         */
        var a = r(110),
            n = r(111),
            o = r(112);
        function s() {
            return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }
        function i(e, t) {
            if (s() < t) throw new RangeError("Invalid typed array length");
            return c.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = c.prototype : (null === e && (e = new c(t)), e.length = t), e
        }
        function c(e, t, r) {
            if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(e, t, r);
            if ("number" == typeof e) {
                if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                return l(this, e)
            }
            return u(this, e, t, r)
        }
        function u(e, t, r, a) {
            if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, r, a) {
                if (t.byteLength, r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < r + (a || 0)) throw new RangeError("'length' is out of bounds");
                t = void 0 === r && void 0 === a ? new Uint8Array(t) : void 0 === a ? new Uint8Array(t, r) : new Uint8Array(t, r, a);
                c.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = c.prototype : e = f(e, t);
                return e
            }(e, t, r, a) : "string" == typeof t ? function(e, t, r) {
                "string" == typeof r && "" !== r || (r = "utf8");
                if (!c.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                var a = 0 | d(t, r),
                    n = (e = i(e, a)).write(t, r);
                n !== a && (e = e.slice(0, n));
                return e
            }(e, t, r) : function(e, t) {
                if (c.isBuffer(t)) {
                    var r = 0 | p(t.length);
                    return 0 === (e = i(e, r)).length ? e : (t.copy(e, 0, 0, r), e)
                }
                if (t) {
                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || function(e) {
                        return e != e
                    }(t.length) ? i(e, 0) : f(e, t);
                    if ("Buffer" === t.type && o(t.data)) return f(e, t.data)
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }(e, t)
        }
        function h(e) {
            if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
            if (e < 0) throw new RangeError('"size" argument must not be negative')
        }
        function l(e, t) {
            if (h(t), e = i(e, t < 0 ? 0 : 0 | p(t)), !c.TYPED_ARRAY_SUPPORT)
                for (var r = 0; r < t; ++r) e[r] = 0;
            return e
        }
        function f(e, t) {
            var r = t.length < 0 ? 0 : 0 | p(t.length);
            e = i(e, r);
            for (var a = 0; a < r; a += 1) e[a] = 255 & t[a];
            return e
        }
        function p(e) {
            if (e >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
            return 0 | e
        }
        function d(e, t) {
            if (c.isBuffer(e)) return e.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
            "string" != typeof e && (e = "" + e);
            var r = e.length;
            if (0 === r) return 0;
            for (var a = !1;;) switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return r;
                case "utf8":
                case "utf-8":
                case void 0:
                    return U(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * r;
                case "hex":
                    return r >>> 1;
                case "base64":
                    return q(e).length;
                default:
                    if (a) return U(e).length;
                    t = ("" + t).toLowerCase(), a = !0
            }
        }
        function m(e, t, r) {
            var a = e[t];
            e[t] = e[r], e[r] = a
        }
        function v(e, t, r, a, n) {
            if (0 === e.length) return -1;
            if ("string" == typeof r ? (a = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = n ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                if (n) return -1;
                r = e.length - 1
            } else if (r < 0) {
                if (!n) return -1;
                r = 0
            }
            if ("string" == typeof t && (t = c.from(t, a)), c.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, r, a, n);
            if ("number" == typeof t) return t &= 255, c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? n ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : y(e, [t], r, a, n);
            throw new TypeError("val must be string, number or Buffer")
        }
        function y(e, t, r, a, n) {
            var o, s = 1,
                i = e.length,
                c = t.length;
            if (void 0 !== a && ("ucs2" === (a = String(a).toLowerCase()) || "ucs-2" === a || "utf16le" === a || "utf-16le" === a)) {
                if (e.length < 2 || t.length < 2) return -1;
                s = 2, i /= 2, c /= 2, r /= 2
            }
            function u(e, t) {
                return 1 === s ? e[t] : e.readUInt16BE(t * s)
            }
            if (n) {
                var h = -1;
                for (o = r; o < i; o++)
                    if (u(e, o) === u(t, -1 === h ? 0 : o - h)) {
                        if (-1 === h && (h = o), o - h + 1 === c) return h * s
                    } else -1 !== h && (o -= o - h), h = -1
            } else
                for (r + c > i && (r = i - c), o = r; o >= 0; o--) {
                    for (var l = !0, f = 0; f < c; f++)
                        if (u(e, o + f) !== u(t, f)) {
                            l = !1;
                            break
                        }
                    if (l) return o
                }
            return -1
        }
        function g(e, t, r, a) {
            r = Number(r) || 0;
            var n = e.length - r;
            a ? (a = Number(a)) > n && (a = n) : a = n;
            var o = t.length;
            if (o % 2 != 0) throw new TypeError("Invalid hex string");
            a > o / 2 && (a = o / 2);
            for (var s = 0; s < a; ++s) {
                var i = parseInt(t.substr(2 * s, 2), 16);
                if (isNaN(i)) return s;
                e[r + s] = i
            }
            return s
        }
        function w(e, t, r, a) {
            return M(U(t, e.length - r), e, r, a)
        }
        function b(e, t, r, a) {
            return M(function(e) {
                for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                return t
            }(t), e, r, a)
        }
        function P(e, t, r, a) {
            return b(e, t, r, a)
        }
        function E(e, t, r, a) {
            return M(q(t), e, r, a)
        }
        function C(e, t, r, a) {
            return M(function(e, t) {
                for (var r, a, n, o = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) r = e.charCodeAt(s), a = r >> 8, n = r % 256, o.push(n), o.push(a);
                return o
            }(t, e.length - r), e, r, a)
        }
        function S(e, t, r) {
            return 0 === t && r === e.length ? a.fromByteArray(e) : a.fromByteArray(e.slice(t, r))
        }
        function x(e, t, r) {
            r = Math.min(e.length, r);
            for (var a = [], n = t; n < r;) {
                var o, s, i, c, u = e[n],
                    h = null,
                    l = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                if (n + l <= r) switch (l) {
                    case 1:
                        u < 128 && (h = u);
                        break;
                    case 2:
                        128 == (192 & (o = e[n + 1])) && (c = (31 & u) << 6 | 63 & o) > 127 && (h = c);
                        break;
                    case 3:
                        o = e[n + 1], s = e[n + 2], 128 == (192 & o) && 128 == (192 & s) && (c = (15 & u) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (c < 55296 || c > 57343) && (h = c);
                        break;
                    case 4:
                        o = e[n + 1], s = e[n + 2], i = e[n + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & i) && (c = (15 & u) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & i) > 65535 && c < 1114112 && (h = c)
                }
                null === h ? (h = 65533, l = 1) : h > 65535 && (h -= 65536, a.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), a.push(h), n += l
            }
            return function(e) {
                var t = e.length;
                if (t <= F) return String.fromCharCode.apply(String, e);
                var r = "",
                    a = 0;
                for (; a < t;) r += String.fromCharCode.apply(String, e.slice(a, a += F));
                return r
            }(a)
        }
        t.Buffer = c, t.SlowBuffer = function(e) {
            +e != e && (e = 0);
            return c.alloc(+e)
        }, t.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
            try {
                var e = new Uint8Array(1);
                return e.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42
                    }
                }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
            } catch (e) {
                return !1
            }
        }(), t.kMaxLength = s(), c.poolSize = 8192, c._augment = function(e) {
            return e.__proto__ = c.prototype, e
        }, c.from = function(e, t, r) {
            return u(null, e, t, r)
        }, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
            value: null,
            configurable: !0
        })), c.alloc = function(e, t, r) {
            return function(e, t, r, a) {
                return h(t), t <= 0 ? i(e, t) : void 0 !== r ? "string" == typeof a ? i(e, t).fill(r, a) : i(e, t).fill(r) : i(e, t)
            }(null, e, t, r)
        }, c.allocUnsafe = function(e) {
            return l(null, e)
        }, c.allocUnsafeSlow = function(e) {
            return l(null, e)
        }, c.isBuffer = function(e) {
            return !(null == e || !e._isBuffer)
        }, c.compare = function(e, t) {
            if (!c.isBuffer(e) || !c.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
            if (e === t) return 0;
            for (var r = e.length, a = t.length, n = 0, o = Math.min(r, a); n < o; ++n)
                if (e[n] !== t[n]) {
                    r = e[n], a = t[n];
                    break
                }
            return r < a ? -1 : a < r ? 1 : 0
        }, c.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, c.concat = function(e, t) {
            if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length) return c.alloc(0);
            var r;
            if (void 0 === t)
                for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
            var a = c.allocUnsafe(t),
                n = 0;
            for (r = 0; r < e.length; ++r) {
                var s = e[r];
                if (!c.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                s.copy(a, n), n += s.length
            }
            return a
        }, c.byteLength = d, c.prototype._isBuffer = !0, c.prototype.swap16 = function() {
            var e = this.length;
            if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2) m(this, t, t + 1);
            return this
        }, c.prototype.swap32 = function() {
            var e = this.length;
            if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4) m(this, t, t + 3), m(this, t + 1, t + 2);
            return this
        }, c.prototype.swap64 = function() {
            var e = this.length;
            if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8) m(this, t, t + 7), m(this, t + 1, t + 6), m(this, t + 2, t + 5), m(this, t + 3, t + 4);
            return this
        }, c.prototype.toString = function() {
            var e = 0 | this.length;
            return 0 === e ? "" : 0 === arguments.length ? x(this, 0, e) : function(e, t, r) {
                var a = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                if ((r >>>= 0) <= (t >>>= 0)) return "";
                for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return R(this, t, r);
                    case "utf8":
                    case "utf-8":
                        return x(this, t, r);
                    case "ascii":
                        return _(this, t, r);
                    case "latin1":
                    case "binary":
                        return A(this, t, r);
                    case "base64":
                        return S(this, t, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return k(this, t, r);
                    default:
                        if (a) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), a = !0
                }
            }.apply(this, arguments)
        }, c.prototype.equals = function(e) {
            if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === c.compare(this, e)
        }, c.prototype.inspect = function() {
            var e = "",
                r = t.INSPECT_MAX_BYTES;
            return this.length > 0 && (e = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (e += " ... ")), "<Buffer " + e + ">"
        }, c.prototype.compare = function(e, t, r, a, n) {
            if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === a && (a = 0), void 0 === n && (n = this.length), t < 0 || r > e.length || a < 0 || n > this.length) throw new RangeError("out of range index");
            if (a >= n && t >= r) return 0;
            if (a >= n) return -1;
            if (t >= r) return 1;
            if (t >>>= 0, r >>>= 0, a >>>= 0, n >>>= 0, this === e) return 0;
            for (var o = n - a, s = r - t, i = Math.min(o, s), u = this.slice(a, n), h = e.slice(t, r), l = 0; l < i; ++l)
                if (u[l] !== h[l]) {
                    o = u[l], s = h[l];
                    break
                }
            return o < s ? -1 : s < o ? 1 : 0
        }, c.prototype.includes = function(e, t, r) {
            return -1 !== this.indexOf(e, t, r)
        }, c.prototype.indexOf = function(e, t, r) {
            return v(this, e, t, r, !0)
        }, c.prototype.lastIndexOf = function(e, t, r) {
            return v(this, e, t, r, !1)
        }, c.prototype.write = function(e, t, r, a) {
            if (void 0 === t) a = "utf8", r = this.length, t = 0;
            else if (void 0 === r && "string" == typeof t) a = t, r = this.length, t = 0;
            else {
                if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t |= 0, isFinite(r) ? (r |= 0, void 0 === a && (a = "utf8")) : (a = r, r = void 0)
            }
            var n = this.length - t;
            if ((void 0 === r || r > n) && (r = n), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            a || (a = "utf8");
            for (var o = !1;;) switch (a) {
                case "hex":
                    return g(this, e, t, r);
                case "utf8":
                case "utf-8":
                    return w(this, e, t, r);
                case "ascii":
                    return b(this, e, t, r);
                case "latin1":
                case "binary":
                    return P(this, e, t, r);
                case "base64":
                    return E(this, e, t, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return C(this, e, t, r);
                default:
                    if (o) throw new TypeError("Unknown encoding: " + a);
                    a = ("" + a).toLowerCase(), o = !0
            }
        }, c.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        };
        var F = 4096;
        function _(e, t, r) {
            var a = "";
            r = Math.min(e.length, r);
            for (var n = t; n < r; ++n) a += String.fromCharCode(127 & e[n]);
            return a
        }
        function A(e, t, r) {
            var a = "";
            r = Math.min(e.length, r);
            for (var n = t; n < r; ++n) a += String.fromCharCode(e[n]);
            return a
        }
        function R(e, t, r) {
            var a = e.length;
            (!t || t < 0) && (t = 0), (!r || r < 0 || r > a) && (r = a);
            for (var n = "", o = t; o < r; ++o) n += N(e[o]);
            return n
        }
        function k(e, t, r) {
            for (var a = e.slice(t, r), n = "", o = 0; o < a.length; o += 2) n += String.fromCharCode(a[o] + 256 * a[o + 1]);
            return n
        }
        function D(e, t, r) {
            if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
            if (e + t > r) throw new RangeError("Trying to access beyond buffer length")
        }
        function O(e, t, r, a, n, o) {
            if (!c.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > n || t < o) throw new RangeError('"value" argument is out of bounds');
            if (r + a > e.length) throw new RangeError("Index out of range")
        }
        function T(e, t, r, a) {
            t < 0 && (t = 65535 + t + 1);
            for (var n = 0, o = Math.min(e.length - r, 2); n < o; ++n) e[r + n] = (t & 255 << 8 * (a ? n : 1 - n)) >>> 8 * (a ? n : 1 - n)
        }
        function I(e, t, r, a) {
            t < 0 && (t = 4294967295 + t + 1);
            for (var n = 0, o = Math.min(e.length - r, 4); n < o; ++n) e[r + n] = t >>> 8 * (a ? n : 3 - n) & 255
        }
        function B(e, t, r, a, n, o) {
            if (r + a > e.length) throw new RangeError("Index out of range");
            if (r < 0) throw new RangeError("Index out of range")
        }
        function j(e, t, r, a, o) {
            return o || B(e, 0, r, 4), n.write(e, t, r, a, 23, 4), r + 4
        }
        function L(e, t, r, a, o) {
            return o || B(e, 0, r, 8), n.write(e, t, r, a, 52, 8), r + 8
        }
        c.prototype.slice = function(e, t) {
            var r, a = this.length;
            if (e = ~~e, t = void 0 === t ? a : ~~t, e < 0 ? (e += a) < 0 && (e = 0) : e > a && (e = a), t < 0 ? (t += a) < 0 && (t = 0) : t > a && (t = a), t < e && (t = e), c.TYPED_ARRAY_SUPPORT)(r = this.subarray(e, t)).__proto__ = c.prototype;
            else {
                var n = t - e;
                r = new c(n, void 0);
                for (var o = 0; o < n; ++o) r[o] = this[o + e]
            }
            return r
        }, c.prototype.readUIntLE = function(e, t, r) {
            e |= 0, t |= 0, r || D(e, t, this.length);
            for (var a = this[e], n = 1, o = 0; ++o < t && (n *= 256);) a += this[e + o] * n;
            return a
        }, c.prototype.readUIntBE = function(e, t, r) {
            e |= 0, t |= 0, r || D(e, t, this.length);
            for (var a = this[e + --t], n = 1; t > 0 && (n *= 256);) a += this[e + --t] * n;
            return a
        }, c.prototype.readUInt8 = function(e, t) {
            return t || D(e, 1, this.length), this[e]
        }, c.prototype.readUInt16LE = function(e, t) {
            return t || D(e, 2, this.length), this[e] | this[e + 1] << 8
        }, c.prototype.readUInt16BE = function(e, t) {
            return t || D(e, 2, this.length), this[e] << 8 | this[e + 1]
        }, c.prototype.readUInt32LE = function(e, t) {
            return t || D(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }, c.prototype.readUInt32BE = function(e, t) {
            return t || D(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }, c.prototype.readIntLE = function(e, t, r) {
            e |= 0, t |= 0, r || D(e, t, this.length);
            for (var a = this[e], n = 1, o = 0; ++o < t && (n *= 256);) a += this[e + o] * n;
            return a >= (n *= 128) && (a -= Math.pow(2, 8 * t)), a
        }, c.prototype.readIntBE = function(e, t, r) {
            e |= 0, t |= 0, r || D(e, t, this.length);
            for (var a = t, n = 1, o = this[e + --a]; a > 0 && (n *= 256);) o += this[e + --a] * n;
            return o >= (n *= 128) && (o -= Math.pow(2, 8 * t)), o
        }, c.prototype.readInt8 = function(e, t) {
            return t || D(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }, c.prototype.readInt16LE = function(e, t) {
            t || D(e, 2, this.length);
            var r = this[e] | this[e + 1] << 8;
            return 32768 & r ? 4294901760 | r : r
        }, c.prototype.readInt16BE = function(e, t) {
            t || D(e, 2, this.length);
            var r = this[e + 1] | this[e] << 8;
            return 32768 & r ? 4294901760 | r : r
        }, c.prototype.readInt32LE = function(e, t) {
            return t || D(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }, c.prototype.readInt32BE = function(e, t) {
            return t || D(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }, c.prototype.readFloatLE = function(e, t) {
            return t || D(e, 4, this.length), n.read(this, e, !0, 23, 4)
        }, c.prototype.readFloatBE = function(e, t) {
            return t || D(e, 4, this.length), n.read(this, e, !1, 23, 4)
        }, c.prototype.readDoubleLE = function(e, t) {
            return t || D(e, 8, this.length), n.read(this, e, !0, 52, 8)
        }, c.prototype.readDoubleBE = function(e, t) {
            return t || D(e, 8, this.length), n.read(this, e, !1, 52, 8)
        }, c.prototype.writeUIntLE = function(e, t, r, a) {
            (e = +e, t |= 0, r |= 0, a) || O(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var n = 1,
                o = 0;
            for (this[t] = 255 & e; ++o < r && (n *= 256);) this[t + o] = e / n & 255;
            return t + r
        }, c.prototype.writeUIntBE = function(e, t, r, a) {
            (e = +e, t |= 0, r |= 0, a) || O(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var n = r - 1,
                o = 1;
            for (this[t + n] = 255 & e; --n >= 0 && (o *= 256);) this[t + n] = e / o & 255;
            return t + r
        }, c.prototype.writeUInt8 = function(e, t, r) {
            return e = +e, t |= 0, r || O(this, e, t, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
        }, c.prototype.writeUInt16LE = function(e, t, r) {
            return e = +e, t |= 0, r || O(this, e, t, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : T(this, e, t, !0), t + 2
        }, c.prototype.writeUInt16BE = function(e, t, r) {
            return e = +e, t |= 0, r || O(this, e, t, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : T(this, e, t, !1), t + 2
        }, c.prototype.writeUInt32LE = function(e, t, r) {
            return e = +e, t |= 0, r || O(this, e, t, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : I(this, e, t, !0), t + 4
        }, c.prototype.writeUInt32BE = function(e, t, r) {
            return e = +e, t |= 0, r || O(this, e, t, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : I(this, e, t, !1), t + 4
        }, c.prototype.writeIntLE = function(e, t, r, a) {
            if (e = +e, t |= 0, !a) {
                var n = Math.pow(2, 8 * r - 1);
                O(this, e, t, r, n - 1, -n)
            }
            var o = 0,
                s = 1,
                i = 0;
            for (this[t] = 255 & e; ++o < r && (s *= 256);) e < 0 && 0 === i && 0 !== this[t + o - 1] && (i = 1), this[t + o] = (e / s >> 0) - i & 255;
            return t + r
        }, c.prototype.writeIntBE = function(e, t, r, a) {
            if (e = +e, t |= 0, !a) {
                var n = Math.pow(2, 8 * r - 1);
                O(this, e, t, r, n - 1, -n)
            }
            var o = r - 1,
                s = 1,
                i = 0;
            for (this[t + o] = 255 & e; --o >= 0 && (s *= 256);) e < 0 && 0 === i && 0 !== this[t + o + 1] && (i = 1), this[t + o] = (e / s >> 0) - i & 255;
            return t + r
        }, c.prototype.writeInt8 = function(e, t, r) {
            return e = +e, t |= 0, r || O(this, e, t, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
        }, c.prototype.writeInt16LE = function(e, t, r) {
            return e = +e, t |= 0, r || O(this, e, t, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : T(this, e, t, !0), t + 2
        }, c.prototype.writeInt16BE = function(e, t, r) {
            return e = +e, t |= 0, r || O(this, e, t, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : T(this, e, t, !1), t + 2
        }, c.prototype.writeInt32LE = function(e, t, r) {
            return e = +e, t |= 0, r || O(this, e, t, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : I(this, e, t, !0), t + 4
        }, c.prototype.writeInt32BE = function(e, t, r) {
            return e = +e, t |= 0, r || O(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : I(this, e, t, !1), t + 4
        }, c.prototype.writeFloatLE = function(e, t, r) {
            return j(this, e, t, !0, r)
        }, c.prototype.writeFloatBE = function(e, t, r) {
            return j(this, e, t, !1, r)
        }, c.prototype.writeDoubleLE = function(e, t, r) {
            return L(this, e, t, !0, r)
        }, c.prototype.writeDoubleBE = function(e, t, r) {
            return L(this, e, t, !1, r)
        }, c.prototype.copy = function(e, t, r, a) {
            if (r || (r = 0), a || 0 === a || (a = this.length), t >= e.length && (t = e.length), t || (t = 0), a > 0 && a < r && (a = r), a === r) return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
            if (a < 0) throw new RangeError("sourceEnd out of bounds");
            a > this.length && (a = this.length), e.length - t < a - r && (a = e.length - t + r);
            var n, o = a - r;
            if (this === e && r < t && t < a)
                for (n = o - 1; n >= 0; --n) e[n + t] = this[n + r];
            else if (o < 1e3 || !c.TYPED_ARRAY_SUPPORT)
                for (n = 0; n < o; ++n) e[n + t] = this[n + r];
            else Uint8Array.prototype.set.call(e, this.subarray(r, r + o), t);
            return o
        }, c.prototype.fill = function(e, t, r, a) {
            if ("string" == typeof e) {
                if ("string" == typeof t ? (a = t, t = 0, r = this.length) : "string" == typeof r && (a = r, r = this.length), 1 === e.length) {
                    var n = e.charCodeAt(0);
                    n < 256 && (e = n)
                }
                if (void 0 !== a && "string" != typeof a) throw new TypeError("encoding must be a string");
                if ("string" == typeof a && !c.isEncoding(a)) throw new TypeError("Unknown encoding: " + a)
            } else "number" == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
            if (r <= t) return this;
            var o;
            if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
                for (o = t; o < r; ++o) this[o] = e;
            else {
                var s = c.isBuffer(e) ? e : U(new c(e, a).toString()),
                    i = s.length;
                for (o = 0; o < r - t; ++o) this[o + t] = s[o % i]
            }
            return this
        };
        var $ = /[^+\/0-9A-Za-z-_]/g;
        function N(e) {
            return e < 16 ? "0" + e.toString(16) : e.toString(16)
        }
        function U(e, t) {
            var r;
            t = t || 1 / 0;
            for (var a = e.length, n = null, o = [], s = 0; s < a; ++s) {
                if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
                    if (!n) {
                        if (r > 56319) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        if (s + 1 === a) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        n = r;
                        continue
                    }
                    if (r < 56320) {
                        (t -= 3) > -1 && o.push(239, 191, 189), n = r;
                        continue
                    }
                    r = 65536 + (n - 55296 << 10 | r - 56320)
                } else n && (t -= 3) > -1 && o.push(239, 191, 189);
                if (n = null, r < 128) {
                    if ((t -= 1) < 0) break;
                    o.push(r)
                } else if (r < 2048) {
                    if ((t -= 2) < 0) break;
                    o.push(r >> 6 | 192, 63 & r | 128)
                } else if (r < 65536) {
                    if ((t -= 3) < 0) break;
                    o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                } else {
                    if (!(r < 1114112)) throw new Error("Invalid code point");
                    if ((t -= 4) < 0) break;
                    o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                }
            }
            return o
        }
        function q(e) {
            return a.toByteArray(function(e) {
                if ((e = function(e) {
                        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                    }(e).replace($, "")).length < 2) return "";
                for (; e.length % 4 != 0;) e += "=";
                return e
            }(e))
        }
        function M(e, t, r, a) {
            for (var n = 0; n < a && !(n + r >= t.length || n >= e.length); ++n) t[n + r] = e[n];
            return n
        }
    }).call(this, r(2))
}, function(e, t, r) {
    var a = r(115);
    e.exports = function(e) {
        var t = e.xdomain,
            r = e.xscheme,
            n = e.enablesXDR;
        try {
            if ("undefined" != typeof XMLHttpRequest && (!t || a)) return new XMLHttpRequest
        } catch (e) {}
        try {
            if ("undefined" != typeof XDomainRequest && !r && n) return new XDomainRequest
        } catch (e) {}
        if (!t) try {
            return new(self[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
        } catch (e) {}
    }
}, function(e, t, r) {
    var a = r(6),
        n = r(5);
    function o(e) {
        this.path = e.path, this.hostname = e.hostname, this.port = e.port, this.secure = e.secure, this.query = e.query, this.timestampParam = e.timestampParam, this.timestampRequests = e.timestampRequests, this.readyState = "", this.agent = e.agent || !1, this.socket = e.socket, this.enablesXDR = e.enablesXDR, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.forceNode = e.forceNode, this.isReactNative = e.isReactNative, this.extraHeaders = e.extraHeaders, this.localAddress = e.localAddress
    }
    e.exports = o, n(o.prototype), o.prototype.onError = function(e, t) {
        var r = new Error(e);
        return r.type = "TransportError", r.description = t, this.emit("error", r), this
    }, o.prototype.open = function() {
        return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this
    }, o.prototype.close = function() {
        return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
    }, o.prototype.send = function(e) {
        if ("open" !== this.readyState) throw new Error("Transport not open");
        this.write(e)
    }, o.prototype.onOpen = function() {
        this.readyState = "open", this.writable = !0, this.emit("open")
    }, o.prototype.onData = function(e) {
        var t = a.decodePacket(e, this.socket.binaryType);
        this.onPacket(t)
    }, o.prototype.onPacket = function(e) {
        this.emit("packet", e)
    }, o.prototype.onClose = function() {
        this.readyState = "closed", this.emit("close")
    }
}, function(e, t, r) {
    "use strict";
    var a = r(133),
        n = r(27),
        o = r(7),
        s = r(46),
        i = r(135);
    function c(e, t, r) {
        var a = this._refs[r];
        if ("string" == typeof a) {
            if (!this._refs[a]) return c.call(this, e, t, a);
            a = this._refs[a]
        }
        if ((a = a || this._schemas[r]) instanceof s) return p(a.schema, this._opts.inlineRefs) ? a.schema : a.validate || this._compile(a);
        var n, o, i, h = u.call(this, t, r);
        return h && (n = h.schema, t = h.root, i = h.baseId), n instanceof s ? o = n.validate || e.call(this, n.schema, t, void 0, i) : void 0 !== n && (o = p(n, this._opts.inlineRefs) ? n : e.call(this, n, t, void 0, i)), o
    }
    function u(e, t) {
        var r = a.parse(t),
            n = m(r),
            o = d(this._getId(e.schema));
        if (0 === Object.keys(e.schema).length || n !== o) {
            var i = y(n),
                c = this._refs[i];
            if ("string" == typeof c) return function(e, t, r) {
                var a = u.call(this, e, t);
                if (a) {
                    var n = a.schema,
                        o = a.baseId;
                    e = a.root;
                    var s = this._getId(n);
                    return s && (o = g(o, s)), l.call(this, r, o, n, e)
                }
            }.call(this, e, c, r);
            if (c instanceof s) c.validate || this._compile(c), e = c;
            else {
                if (!((c = this._schemas[i]) instanceof s)) return;
                if (c.validate || this._compile(c), i == y(t)) return {
                    schema: c,
                    root: e,
                    baseId: o
                };
                e = c
            }
            if (!e.schema) return;
            o = d(this._getId(e.schema))
        }
        return l.call(this, r, o, e.schema, e)
    }
    e.exports = c, c.normalizeId = y, c.fullPath = d, c.url = g, c.ids = function(e) {
        var t = y(this._getId(e)),
            r = {
                "": t
            },
            s = {
                "": d(t, !1)
            },
            c = {},
            u = this;
        return i(e, {
            allKeys: !0
        }, function(e, t, i, h, l, f, p) {
            if ("" !== t) {
                var d = u._getId(e),
                    m = r[h],
                    v = s[h] + "/" + l;
                if (void 0 !== p && (v += "/" + ("number" == typeof p ? p : o.escapeFragment(p))), "string" == typeof d) {
                    d = m = y(m ? a.resolve(m, d) : d);
                    var g = u._refs[d];
                    if ("string" == typeof g && (g = u._refs[g]), g && g.schema) {
                        if (!n(e, g.schema)) throw new Error('id "' + d + '" resolves to more than one schema')
                    } else if (d != y(v))
                        if ("#" == d[0]) {
                            if (c[d] && !n(e, c[d])) throw new Error('id "' + d + '" resolves to more than one schema');
                            c[d] = e
                        } else u._refs[d] = v
                }
                r[t] = m, s[t] = v
            }
        }), c
    }, c.inlineRef = p, c.schema = u;
    var h = o.toHash(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
    function l(e, t, r, a) {
        if (e.fragment = e.fragment || "", "/" == e.fragment.slice(0, 1)) {
            for (var n = e.fragment.split("/"), s = 1; s < n.length; s++) {
                var i = n[s];
                if (i) {
                    if (void 0 === (r = r[i = o.unescapeFragment(i)])) break;
                    var c;
                    if (!h[i] && ((c = this._getId(r)) && (t = g(t, c)), r.$ref)) {
                        var l = g(t, r.$ref),
                            f = u.call(this, a, l);
                        f && (r = f.schema, a = f.root, t = f.baseId)
                    }
                }
            }
            return void 0 !== r && r !== a.schema ? {
                schema: r,
                root: a,
                baseId: t
            } : void 0
        }
    }
    var f = o.toHash(["type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum"]);
    function p(e, t) {
        return !1 !== t && (void 0 === t || !0 === t ? function e(t) {
            var r;
            if (Array.isArray(t)) {
                for (var a = 0; a < t.length; a++)
                    if ("object" == typeof(r = t[a]) && !e(r)) return !1
            } else
                for (var n in t) {
                    if ("$ref" == n) return !1;
                    if ("object" == typeof(r = t[n]) && !e(r)) return !1
                }
            return !0
        }(e) : t ? function e(t) {
            var r, a = 0;
            if (Array.isArray(t)) {
                for (var n = 0; n < t.length; n++)
                    if ("object" == typeof(r = t[n]) && (a += e(r)), a == 1 / 0) return 1 / 0
            } else
                for (var o in t) {
                    if ("$ref" == o) return 1 / 0;
                    if (f[o]) a++;
                    else if ("object" == typeof(r = t[o]) && (a += e(r) + 1), a == 1 / 0) return 1 / 0
                }
            return a
        }(e) <= t : void 0)
    }
    function d(e, t) {
        return !1 !== t && (e = y(e)), m(a.parse(e))
    }
    function m(e) {
        return a.serialize(e).split("#")[0] + "#"
    }
    var v = /#\/?$/;
    function y(e) {
        return e ? e.replace(v, "") : ""
    }
    function g(e, t) {
        return t = y(t), a.resolve(e, t)
    }
}, function(e, t, r) {
    "use strict";
    var a = Array.isArray,
        n = Object.keys,
        o = Object.prototype.hasOwnProperty;
    e.exports = function e(t, r) {
        if (t === r) return !0;
        if (t && r && "object" == typeof t && "object" == typeof r) {
            var s, i, c, u = a(t),
                h = a(r);
            if (u && h) {
                if ((i = t.length) != r.length) return !1;
                for (s = i; 0 != s--;)
                    if (!e(t[s], r[s])) return !1;
                return !0
            }
            if (u != h) return !1;
            var l = t instanceof Date,
                f = r instanceof Date;
            if (l != f) return !1;
            if (l && f) return t.getTime() == r.getTime();
            var p = t instanceof RegExp,
                d = r instanceof RegExp;
            if (p != d) return !1;
            if (p && d) return t.toString() == r.toString();
            var m = n(t);
            if ((i = m.length) !== n(r).length) return !1;
            for (s = i; 0 != s--;)
                if (!o.call(r, m[s])) return !1;
            for (s = i; 0 != s--;)
                if (!e(t[c = m[s]], r[c])) return !1;
            return !0
        }
        return t != t && r != r
    }
}, function(e, t, r) {
    "use strict";
    var a = r(26);
    function n(e, t, r) {
        this.message = r || n.message(e, t), this.missingRef = a.url(e, t), this.missingSchema = a.normalizeId(a.fullPath(this.missingRef))
    }
    function o(e) {
        return e.prototype = Object.create(Error.prototype), e.prototype.constructor = e, e
    }
    e.exports = {
        Validation: o(function(e) {
            this.message = "validation failed", this.errors = e, this.ajv = this.validation = !0
        }),
        MissingRef: o(n)
    }, n.message = function(e, t) {
        return "can't resolve reference " + t + " from id " + e
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t) {
        return function() {
            for (var r = new Array(arguments.length), a = 0; a < r.length; a++) r[a] = arguments[a];
            return e.apply(t, r)
        }
    }
}, function(e, t, r) {
    "use strict";
    var a = r(1),
        n = r(84),
        o = r(86),
        s = r(87),
        i = r(88),
        c = r(31),
        u = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || r(89);
    e.exports = function(e) {
        return new Promise(function(t, h) {
            var l = e.data,
                f = e.headers;
            a.isFormData(l) && delete f["Content-Type"];
            var p = new XMLHttpRequest,
                d = "onreadystatechange",
                m = !1;
            if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in p || i(e.url) || (p = new window.XDomainRequest, d = "onload", m = !0, p.onprogress = function() {}, p.ontimeout = function() {}), e.auth) {
                var v = e.auth.username || "",
                    y = e.auth.password || "";
                f.Authorization = "Basic " + u(v + ":" + y)
            }
            if (p.open(e.method.toUpperCase(), o(e.url, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p[d] = function() {
                    if (p && (4 === p.readyState || m) && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
                        var r = "getAllResponseHeaders" in p ? s(p.getAllResponseHeaders()) : null,
                            a = {
                                data: e.responseType && "text" !== e.responseType ? p.response : p.responseText,
                                status: 1223 === p.status ? 204 : p.status,
                                statusText: 1223 === p.status ? "No Content" : p.statusText,
                                headers: r,
                                config: e,
                                request: p
                            };
                        n(t, h, a), p = null
                    }
                }, p.onerror = function() {
                    h(c("Network Error", e, null, p)), p = null
                }, p.ontimeout = function() {
                    h(c("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", p)), p = null
                }, a.isStandardBrowserEnv()) {
                var g = r(90),
                    w = (e.withCredentials || i(e.url)) && e.xsrfCookieName ? g.read(e.xsrfCookieName) : void 0;
                w && (f[e.xsrfHeaderName] = w)
            }
            if ("setRequestHeader" in p && a.forEach(f, function(e, t) {
                    void 0 === l && "content-type" === t.toLowerCase() ? delete f[t] : p.setRequestHeader(t, e)
                }), e.withCredentials && (p.withCredentials = !0), e.responseType) try {
                p.responseType = e.responseType
            } catch (t) {
                if ("json" !== e.responseType) throw t
            }
            "function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) {
                p && (p.abort(), h(e), p = null)
            }), void 0 === l && (l = null), p.send(l)
        })
    }
}, function(e, t, r) {
    "use strict";
    var a = r(85);
    e.exports = function(e, t, r, n, o) {
        var s = new Error(e);
        return a(s, t, r, n, o)
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        return !(!e || !e.__CANCEL__)
    }
}, function(e, t, r) {
    "use strict";
    function a(e) {
        this.message = e
    }
    a.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, a.prototype.__CANCEL__ = !0, e.exports = a
}, function(e, t) {
    var r = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        a = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
    e.exports = function(e) {
        var t = e,
            n = e.indexOf("["),
            o = e.indexOf("]"); - 1 != n && -1 != o && (e = e.substring(0, n) + e.substring(n, o).replace(/:/g, ";") + e.substring(o, e.length));
        for (var s = r.exec(e || ""), i = {}, c = 14; c--;) i[a[c]] = s[c] || "";
        return -1 != n && -1 != o && (i.source = t, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i
    }
}, function(e, t) {
    var r = {}.toString;
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == r.call(e)
    }
}, function(e, t, r) {
    (function(t) {
        e.exports = function(e) {
            return r && t.isBuffer(e) || a && (e instanceof ArrayBuffer || n(e))
        };
        var r = "function" == typeof t && "function" == typeof t.isBuffer,
            a = "function" == typeof ArrayBuffer,
            n = function(e) {
                return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer
            }
    }).call(this, r(23).Buffer)
}, function(e, t, r) {
    var a = r(113),
        n = r(43),
        o = r(5),
        s = r(22),
        i = r(44),
        c = r(45),
        u = r(11)("socket.io-client:manager"),
        h = r(42),
        l = r(130),
        f = Object.prototype.hasOwnProperty;
    function p(e, t) {
        if (!(this instanceof p)) return new p(e, t);
        e && "object" == typeof e && (t = e, e = void 0), (t = t || {}).path = t.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = t, this.reconnection(!1 !== t.reconnection), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor(t.randomizationFactor || .5), this.backoff = new l({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }), this.timeout(null == t.timeout ? 2e4 : t.timeout), this.readyState = "closed", this.uri = e, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
        var r = t.parser || s;
        this.encoder = new r.Encoder, this.decoder = new r.Decoder, this.autoConnect = !1 !== t.autoConnect, this.autoConnect && this.open()
    }
    e.exports = p, p.prototype.emitAll = function() {
        for (var e in this.emit.apply(this, arguments), this.nsps) f.call(this.nsps, e) && this.nsps[e].emit.apply(this.nsps[e], arguments)
    }, p.prototype.updateSocketIds = function() {
        for (var e in this.nsps) f.call(this.nsps, e) && (this.nsps[e].id = this.generateId(e))
    }, p.prototype.generateId = function(e) {
        return ("/" === e ? "" : e + "#") + this.engine.id
    }, o(p.prototype), p.prototype.reconnection = function(e) {
        return arguments.length ? (this._reconnection = !!e, this) : this._reconnection
    }, p.prototype.reconnectionAttempts = function(e) {
        return arguments.length ? (this._reconnectionAttempts = e, this) : this._reconnectionAttempts
    }, p.prototype.reconnectionDelay = function(e) {
        return arguments.length ? (this._reconnectionDelay = e, this.backoff && this.backoff.setMin(e), this) : this._reconnectionDelay
    }, p.prototype.randomizationFactor = function(e) {
        return arguments.length ? (this._randomizationFactor = e, this.backoff && this.backoff.setJitter(e), this) : this._randomizationFactor
    }, p.prototype.reconnectionDelayMax = function(e) {
        return arguments.length ? (this._reconnectionDelayMax = e, this.backoff && this.backoff.setMax(e), this) : this._reconnectionDelayMax
    }, p.prototype.timeout = function(e) {
        return arguments.length ? (this._timeout = e, this) : this._timeout
    }, p.prototype.maybeReconnectOnOpen = function() {
        !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
    }, p.prototype.open = p.prototype.connect = function(e, t) {
        if (u("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
        u("opening %s", this.uri), this.engine = a(this.uri, this.opts);
        var r = this.engine,
            n = this;
        this.readyState = "opening", this.skipReconnect = !1;
        var o = i(r, "open", function() {
                n.onopen(), e && e()
            }),
            s = i(r, "error", function(t) {
                if (u("connect_error"), n.cleanup(), n.readyState = "closed", n.emitAll("connect_error", t), e) {
                    var r = new Error("Connection error");
                    r.data = t, e(r)
                } else n.maybeReconnectOnOpen()
            });
        if (!1 !== this._timeout) {
            var c = this._timeout;
            u("connect attempt will timeout after %d", c);
            var h = setTimeout(function() {
                u("connect attempt timed out after %d", c), o.destroy(), r.close(), r.emit("error", "timeout"), n.emitAll("connect_timeout", c)
            }, c);
            this.subs.push({
                destroy: function() {
                    clearTimeout(h)
                }
            })
        }
        return this.subs.push(o), this.subs.push(s), this
    }, p.prototype.onopen = function() {
        u("open"), this.cleanup(), this.readyState = "open", this.emit("open");
        var e = this.engine;
        this.subs.push(i(e, "data", c(this, "ondata"))), this.subs.push(i(e, "ping", c(this, "onping"))), this.subs.push(i(e, "pong", c(this, "onpong"))), this.subs.push(i(e, "error", c(this, "onerror"))), this.subs.push(i(e, "close", c(this, "onclose"))), this.subs.push(i(this.decoder, "decoded", c(this, "ondecoded")))
    }, p.prototype.onping = function() {
        this.lastPing = new Date, this.emitAll("ping")
    }, p.prototype.onpong = function() {
        this.emitAll("pong", new Date - this.lastPing)
    }, p.prototype.ondata = function(e) {
        this.decoder.add(e)
    }, p.prototype.ondecoded = function(e) {
        this.emit("packet", e)
    }, p.prototype.onerror = function(e) {
        u("error", e), this.emitAll("error", e)
    }, p.prototype.socket = function(e, t) {
        var r = this.nsps[e];
        if (!r) {
            r = new n(this, e, t), this.nsps[e] = r;
            var a = this;
            r.on("connecting", o), r.on("connect", function() {
                r.id = a.generateId(e)
            }), this.autoConnect && o()
        }
        function o() {
            ~h(a.connecting, r) || a.connecting.push(r)
        }
        return r
    }, p.prototype.destroy = function(e) {
        var t = h(this.connecting, e);
        ~t && this.connecting.splice(t, 1), this.connecting.length || this.close()
    }, p.prototype.packet = function(e) {
        u("writing packet %j", e);
        var t = this;
        e.query && 0 === e.type && (e.nsp += "?" + e.query), t.encoding ? t.packetBuffer.push(e) : (t.encoding = !0, this.encoder.encode(e, function(r) {
            for (var a = 0; a < r.length; a++) t.engine.write(r[a], e.options);
            t.encoding = !1, t.processPacketQueue()
        }))
    }, p.prototype.processPacketQueue = function() {
        if (this.packetBuffer.length > 0 && !this.encoding) {
            var e = this.packetBuffer.shift();
            this.packet(e)
        }
    }, p.prototype.cleanup = function() {
        u("cleanup");
        for (var e = this.subs.length, t = 0; t < e; t++) {
            this.subs.shift().destroy()
        }
        this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
    }, p.prototype.close = p.prototype.disconnect = function() {
        u("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close()
    }, p.prototype.onclose = function(e) {
        u("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", e), this._reconnection && !this.skipReconnect && this.reconnect()
    }, p.prototype.reconnect = function() {
        if (this.reconnecting || this.skipReconnect) return this;
        var e = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) u("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
        else {
            var t = this.backoff.duration();
            u("will wait %dms before reconnect attempt", t), this.reconnecting = !0;
            var r = setTimeout(function() {
                e.skipReconnect || (u("attempting reconnect"), e.emitAll("reconnect_attempt", e.backoff.attempts), e.emitAll("reconnecting", e.backoff.attempts), e.skipReconnect || e.open(function(t) {
                    t ? (u("reconnect attempt error"), e.reconnecting = !1, e.reconnect(), e.emitAll("reconnect_error", t.data)) : (u("reconnect success"), e.onreconnect())
                }))
            }, t);
            this.subs.push({
                destroy: function() {
                    clearTimeout(r)
                }
            })
        }
    }, p.prototype.onreconnect = function() {
        var e = this.backoff.attempts;
        this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", e)
    }
}, function(e, t, r) {
    var a = r(24),
        n = r(116),
        o = r(126),
        s = r(127);
    t.polling = function(e) {
        var t = !1,
            r = !1,
            s = !1 !== e.jsonp;
        if ("undefined" != typeof location) {
            var i = "https:" === location.protocol,
                c = location.port;
            c || (c = i ? 443 : 80), t = e.hostname !== location.hostname || c !== e.port, r = e.secure !== i
        }
        if (e.xdomain = t, e.xscheme = r, "open" in new a(e) && !e.forceJSONP) return new n(e);
        if (!s) throw new Error("JSONP disabled");
        return new o(e)
    }, t.websocket = s
}, function(e, t, r) {
    var a = r(25),
        n = r(12),
        o = r(6),
        s = r(13),
        i = r(41),
        c = r(14)("engine.io-client:polling");
    e.exports = h;
    var u = null != new(r(24))({
        xdomain: !1
    }).responseType;
    function h(e) {
        var t = e && e.forceBase64;
        u && !t || (this.supportsBinary = !1), a.call(this, e)
    }
    s(h, a), h.prototype.name = "polling", h.prototype.doOpen = function() {
        this.poll()
    }, h.prototype.pause = function(e) {
        var t = this;
        function r() {
            c("paused"), t.readyState = "paused", e()
        }
        if (this.readyState = "pausing", this.polling || !this.writable) {
            var a = 0;
            this.polling && (c("we are currently polling - waiting to pause"), a++, this.once("pollComplete", function() {
                c("pre-pause polling complete"), --a || r()
            })), this.writable || (c("we are currently writing - waiting to pause"), a++, this.once("drain", function() {
                c("pre-pause writing complete"), --a || r()
            }))
        } else r()
    }, h.prototype.poll = function() {
        c("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
    }, h.prototype.onData = function(e) {
        var t = this;
        c("polling got data %s", e);
        o.decodePayload(e, this.socket.binaryType, function(e, r, a) {
            if ("opening" === t.readyState && t.onOpen(), "close" === e.type) return t.onClose(), !1;
            t.onPacket(e)
        }), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : c('ignoring poll - transport state "%s"', this.readyState))
    }, h.prototype.doClose = function() {
        var e = this;
        function t() {
            c("writing close packet"), e.write([{
                type: "close"
            }])
        }
        "open" === this.readyState ? (c("transport open - closing"), t()) : (c("transport not open - deferring close"), this.once("open", t))
    }, h.prototype.write = function(e) {
        var t = this;
        this.writable = !1;
        var r = function() {
            t.writable = !0, t.emit("drain")
        };
        o.encodePayload(e, this.supportsBinary, function(e) {
            t.doWrite(e, r)
        })
    }, h.prototype.uri = function() {
        var e = this.query || {},
            t = this.secure ? "https" : "http",
            r = "";
        return !1 !== this.timestampRequests && (e[this.timestampParam] = i()), this.supportsBinary || e.sid || (e.b64 = 1), e = n.encode(e), this.port && ("https" === t && 443 !== Number(this.port) || "http" === t && 80 !== Number(this.port)) && (r = ":" + this.port), e.length && (e = "?" + e), t + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + r + this.path + e
    }
}, function(e, t, r) {
    (function(t) {
        var a = r(118),
            n = Object.prototype.toString,
            o = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === n.call(Blob),
            s = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === n.call(File);
        e.exports = function e(r) {
            if (!r || "object" != typeof r) return !1;
            if (a(r)) {
                for (var n = 0, i = r.length; n < i; n++)
                    if (e(r[n])) return !0;
                return !1
            }
            if ("function" == typeof t && t.isBuffer && t.isBuffer(r) || "function" == typeof ArrayBuffer && r instanceof ArrayBuffer || o && r instanceof Blob || s && r instanceof File) return !0;
            if (r.toJSON && "function" == typeof r.toJSON && 1 === arguments.length) return e(r.toJSON(), !0);
            for (var c in r)
                if (Object.prototype.hasOwnProperty.call(r, c) && e(r[c])) return !0;
            return !1
        }
    }).call(this, r(23).Buffer)
}, function(e, t, r) {
    "use strict";
    var a, n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
        o = 64,
        s = {},
        i = 0,
        c = 0;
    function u(e) {
        var t = "";
        do {
            t = n[e % o] + t, e = Math.floor(e / o)
        } while (e > 0);
        return t
    }
    function h() {
        var e = u(+new Date);
        return e !== a ? (i = 0, a = e) : e + "." + u(i++)
    }
    for (; c < o; c++) s[n[c]] = c;
    h.encode = u, h.decode = function(e) {
        var t = 0;
        for (c = 0; c < e.length; c++) t = t * o + s[e.charAt(c)];
        return t
    }, e.exports = h
}, function(e, t) {
    var r = [].indexOf;
    e.exports = function(e, t) {
        if (r) return e.indexOf(t);
        for (var a = 0; a < e.length; ++a)
            if (e[a] === t) return a;
        return -1
    }
}, function(e, t, r) {
    var a = r(22),
        n = r(5),
        o = r(129),
        s = r(44),
        i = r(45),
        c = r(11)("socket.io-client:socket"),
        u = r(12),
        h = r(40);
    e.exports = p;
    var l = {
            connect: 1,
            connect_error: 1,
            connect_timeout: 1,
            connecting: 1,
            disconnect: 1,
            error: 1,
            reconnect: 1,
            reconnect_attempt: 1,
            reconnect_failed: 1,
            reconnect_error: 1,
            reconnecting: 1,
            ping: 1,
            pong: 1
        },
        f = n.prototype.emit;
    function p(e, t, r) {
        this.io = e, this.nsp = t, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, r && r.query && (this.query = r.query), this.io.autoConnect && this.open()
    }
    n(p.prototype), p.prototype.subEvents = function() {
        if (!this.subs) {
            var e = this.io;
            this.subs = [s(e, "open", i(this, "onopen")), s(e, "packet", i(this, "onpacket")), s(e, "close", i(this, "onclose"))]
        }
    }, p.prototype.open = p.prototype.connect = function() {
        return this.connected ? this : (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting"), this)
    }, p.prototype.send = function() {
        var e = o(arguments);
        return e.unshift("message"), this.emit.apply(this, e), this
    }, p.prototype.emit = function(e) {
        if (l.hasOwnProperty(e)) return f.apply(this, arguments), this;
        var t = o(arguments),
            r = {
                type: (void 0 !== this.flags.binary ? this.flags.binary : h(t)) ? a.BINARY_EVENT : a.EVENT,
                data: t,
                options: {}
            };
        return r.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof t[t.length - 1] && (c("emitting packet with ack id %d", this.ids), this.acks[this.ids] = t.pop(), r.id = this.ids++), this.connected ? this.packet(r) : this.sendBuffer.push(r), this.flags = {}, this
    }, p.prototype.packet = function(e) {
        e.nsp = this.nsp, this.io.packet(e)
    }, p.prototype.onopen = function() {
        if (c("transport is open - connecting"), "/" !== this.nsp)
            if (this.query) {
                var e = "object" == typeof this.query ? u.encode(this.query) : this.query;
                c("sending connect packet with query %s", e), this.packet({
                    type: a.CONNECT,
                    query: e
                })
            } else this.packet({
                type: a.CONNECT
            })
    }, p.prototype.onclose = function(e) {
        c("close (%s)", e), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", e)
    }, p.prototype.onpacket = function(e) {
        var t = e.nsp === this.nsp,
            r = e.type === a.ERROR && "/" === e.nsp;
        if (t || r) switch (e.type) {
            case a.CONNECT:
                this.onconnect();
                break;
            case a.EVENT:
            case a.BINARY_EVENT:
                this.onevent(e);
                break;
            case a.ACK:
            case a.BINARY_ACK:
                this.onack(e);
                break;
            case a.DISCONNECT:
                this.ondisconnect();
                break;
            case a.ERROR:
                this.emit("error", e.data)
        }
    }, p.prototype.onevent = function(e) {
        var t = e.data || [];
        c("emitting event %j", t), null != e.id && (c("attaching ack callback to event"), t.push(this.ack(e.id))), this.connected ? f.apply(this, t) : this.receiveBuffer.push(t)
    }, p.prototype.ack = function(e) {
        var t = this,
            r = !1;
        return function() {
            if (!r) {
                r = !0;
                var n = o(arguments);
                c("sending ack %j", n), t.packet({
                    type: h(n) ? a.BINARY_ACK : a.ACK,
                    id: e,
                    data: n
                })
            }
        }
    }, p.prototype.onack = function(e) {
        var t = this.acks[e.id];
        "function" == typeof t ? (c("calling ack %s with %j", e.id, e.data), t.apply(this, e.data), delete this.acks[e.id]) : c("bad ack %s", e.id)
    }, p.prototype.onconnect = function() {
        this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered()
    }, p.prototype.emitBuffered = function() {
        var e;
        for (e = 0; e < this.receiveBuffer.length; e++) f.apply(this, this.receiveBuffer[e]);
        for (this.receiveBuffer = [], e = 0; e < this.sendBuffer.length; e++) this.packet(this.sendBuffer[e]);
        this.sendBuffer = []
    }, p.prototype.ondisconnect = function() {
        c("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
    }, p.prototype.destroy = function() {
        if (this.subs) {
            for (var e = 0; e < this.subs.length; e++) this.subs[e].destroy();
            this.subs = null
        }
        this.io.destroy(this)
    }, p.prototype.close = p.prototype.disconnect = function() {
        return this.connected && (c("performing disconnect (%s)", this.nsp), this.packet({
            type: a.DISCONNECT
        })), this.destroy(), this.connected && this.onclose("io client disconnect"), this
    }, p.prototype.compress = function(e) {
        return this.flags.compress = e, this
    }, p.prototype.binary = function(e) {
        return this.flags.binary = e, this
    }
}, function(e, t) {
    e.exports = function(e, t, r) {
        return e.on(t, r), {
            destroy: function() {
                e.removeListener(t, r)
            }
        }
    }
}, function(e, t) {
    var r = [].slice;
    e.exports = function(e, t) {
        if ("string" == typeof t && (t = e[t]), "function" != typeof t) throw new Error("bind() requires a function");
        var a = r.call(arguments, 2);
        return function() {
            return t.apply(e, a.concat(r.call(arguments)))
        }
    }
}, function(e, t, r) {
    "use strict";
    var a = r(7);
    e.exports = function(e) {
        a.copy(e, this)
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t) {
        t || (t = {}), "function" == typeof t && (t = {
            cmp: t
        });
        var r = "boolean" == typeof t.cycles && t.cycles,
            a = t.cmp && function(e) {
                return function(t) {
                    return function(r, a) {
                        var n = {
                                key: r,
                                value: t[r]
                            },
                            o = {
                                key: a,
                                value: t[a]
                            };
                        return e(n, o)
                    }
                }
            }(t.cmp),
            n = [];
        return function e(t) {
            if (t && t.toJSON && "function" == typeof t.toJSON && (t = t.toJSON()), void 0 !== t) {
                if ("number" == typeof t) return isFinite(t) ? "" + t : "null";
                if ("object" != typeof t) return JSON.stringify(t);
                var o, s;
                if (Array.isArray(t)) {
                    for (s = "[", o = 0; o < t.length; o++) o && (s += ","), s += e(t[o]) || "null";
                    return s + "]"
                }
                if (null === t) return "null";
                if (-1 !== n.indexOf(t)) {
                    if (r) return JSON.stringify("__cycle__");
                    throw new TypeError("Converting circular structure to JSON")
                }
                var i = n.push(t) - 1,
                    c = Object.keys(t).sort(a && a(t));
                for (s = "", o = 0; o < c.length; o++) {
                    var u = c[o],
                        h = e(t[u]);
                    h && (s && (s += ","), s += JSON.stringify(u) + ":" + h)
                }
                return n.splice(i, 1), "{" + s + "}"
            }
        }(e)
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r) {
        var a = "",
            n = !0 === e.schema.$async,
            o = e.util.schemaHasRulesExcept(e.schema, e.RULES.all, "$ref"),
            s = e.self._getId(e.schema);
        if (e.isTop && (a += " var validate = ", n && (e.async = !0, a += "async "), a += "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", s && (e.opts.sourceCode || e.opts.processCode) && (a += " /*# sourceURL=" + s + " */ ")), "boolean" == typeof e.schema || !o && !e.schema.$ref) {
            var i = e.level,
                c = e.dataLevel,
                u = e.schema["false schema"],
                h = e.schemaPath + e.util.getProperty("false schema"),
                l = e.errSchemaPath + "/false schema",
                f = !e.opts.allErrors,
                p = "data" + (c || ""),
                d = "valid" + i;
            if (!1 === e.schema) {
                e.isTop ? f = !0 : a += " var " + d + " = false; ", (X = X || []).push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: '" + (y || "false schema") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: {} ", !1 !== e.opts.messages && (a += " , message: 'boolean schema is false' "), e.opts.verbose && (a += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), a += " } ") : a += " {} ";
                var m = a;
                a = X.pop(), !e.compositeRule && f ? e.async ? a += " throw new ValidationError([" + m + "]); " : a += " validate.errors = [" + m + "]; return false; " : a += " var err = " + m + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
            } else e.isTop ? a += n ? " return data; " : " validate.errors = null; return true; " : a += " var " + d + " = true; ";
            return e.isTop && (a += " }; return validate; "), a
        }
        if (e.isTop) {
            var v = e.isTop;
            i = e.level = 0, c = e.dataLevel = 0, p = "data";
            e.rootId = e.resolve.fullPath(e.self._getId(e.root.schema)), e.baseId = e.baseId || e.rootId, delete e.isTop, e.dataPathArr = [void 0], a += " var vErrors = null; ", a += " var errors = 0;     ", a += " if (rootData === undefined) rootData = data; "
        } else {
            i = e.level, p = "data" + ((c = e.dataLevel) || "");
            if (s && (e.baseId = e.resolve.url(e.baseId, s)), n && !e.async) throw new Error("async schema in sync schema");
            a += " var errs_" + i + " = errors;"
        }
        d = "valid" + i, f = !e.opts.allErrors;
        var y, g = "",
            w = "",
            b = e.schema.type,
            P = Array.isArray(b);
        if (b && e.opts.nullable && !0 === e.schema.nullable && (P ? -1 == b.indexOf("null") && (b = b.concat("null")) : "null" != b && (b = [b, "null"], P = !0)), P && 1 == b.length && (b = b[0], P = !1), e.schema.$ref && o) {
            if ("fail" == e.opts.extendRefs) throw new Error('$ref: validation keywords used in schema at path "' + e.errSchemaPath + '" (see option extendRefs)');
            !0 !== e.opts.extendRefs && (o = !1, e.logger.warn('$ref: keywords ignored in schema at path "' + e.errSchemaPath + '"'))
        }
        if (e.schema.$comment && e.opts.$comment && (a += " " + e.RULES.all.$comment.code(e, "$comment")), b) {
            if (e.opts.coerceTypes) var E = e.util.coerceToTypes(e.opts.coerceTypes, b);
            var C = e.RULES.types[b];
            if (E || P || !0 === C || C && !W(C)) {
                h = e.schemaPath + ".type", l = e.errSchemaPath + "/type", h = e.schemaPath + ".type", l = e.errSchemaPath + "/type";
                var S = P ? "checkDataTypes" : "checkDataType";
                if (a += " if (" + e.util[S](b, p, !0) + ") { ", E) {
                    var x = "dataType" + i,
                        F = "coerced" + i;
                    a += " var " + x + " = typeof " + p + "; ", "array" == e.opts.coerceTypes && (a += " if (" + x + " == 'object' && Array.isArray(" + p + ")) " + x + " = 'array'; "), a += " var " + F + " = undefined; ";
                    var _ = "",
                        A = E;
                    if (A)
                        for (var R, k = -1, D = A.length - 1; k < D;) R = A[k += 1], k && (a += " if (" + F + " === undefined) { ", _ += "}"), "array" == e.opts.coerceTypes && "array" != R && (a += " if (" + x + " == 'array' && " + p + ".length == 1) { " + F + " = " + p + " = " + p + "[0]; " + x + " = typeof " + p + ";  } "), "string" == R ? a += " if (" + x + " == 'number' || " + x + " == 'boolean') " + F + " = '' + " + p + "; else if (" + p + " === null) " + F + " = ''; " : "number" == R || "integer" == R ? (a += " if (" + x + " == 'boolean' || " + p + " === null || (" + x + " == 'string' && " + p + " && " + p + " == +" + p + " ", "integer" == R && (a += " && !(" + p + " % 1)"), a += ")) " + F + " = +" + p + "; ") : "boolean" == R ? a += " if (" + p + " === 'false' || " + p + " === 0 || " + p + " === null) " + F + " = false; else if (" + p + " === 'true' || " + p + " === 1) " + F + " = true; " : "null" == R ? a += " if (" + p + " === '' || " + p + " === 0 || " + p + " === false) " + F + " = null; " : "array" == e.opts.coerceTypes && "array" == R && (a += " if (" + x + " == 'string' || " + x + " == 'number' || " + x + " == 'boolean' || " + p + " == null) " + F + " = [" + p + "]; ");
                    a += " " + _ + " if (" + F + " === undefined) {   ", (X = X || []).push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: '" + (y || "type") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { type: '", a += P ? "" + b.join(",") : "" + b, a += "' } ", !1 !== e.opts.messages && (a += " , message: 'should be ", a += P ? "" + b.join(",") : "" + b, a += "' "), e.opts.verbose && (a += " , schema: validate.schema" + h + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), a += " } ") : a += " {} ";
                    m = a;
                    a = X.pop(), !e.compositeRule && f ? e.async ? a += " throw new ValidationError([" + m + "]); " : a += " validate.errors = [" + m + "]; return false; " : a += " var err = " + m + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " } else {  ";
                    var O = c ? "data" + (c - 1 || "") : "parentData",
                        T = c ? e.dataPathArr[c] : "parentDataProperty";
                    a += " " + p + " = " + F + "; ", c || (a += "if (" + O + " !== undefined)"), a += " " + O + "[" + T + "] = " + F + "; } "
                } else {
                    (X = X || []).push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: '" + (y || "type") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { type: '", a += P ? "" + b.join(",") : "" + b, a += "' } ", !1 !== e.opts.messages && (a += " , message: 'should be ", a += P ? "" + b.join(",") : "" + b, a += "' "), e.opts.verbose && (a += " , schema: validate.schema" + h + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), a += " } ") : a += " {} ";
                    m = a;
                    a = X.pop(), !e.compositeRule && f ? e.async ? a += " throw new ValidationError([" + m + "]); " : a += " validate.errors = [" + m + "]; return false; " : a += " var err = " + m + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
                }
                a += " } "
            }
        }
        if (e.schema.$ref && !o) a += " " + e.RULES.all.$ref.code(e, "$ref") + " ", f && (a += " } if (errors === ", a += v ? "0" : "errs_" + i, a += ") { ", w += "}");
        else {
            var I = e.RULES;
            if (I)
                for (var B = -1, j = I.length - 1; B < j;)
                    if (W(C = I[B += 1])) {
                        if (C.type && (a += " if (" + e.util.checkDataType(C.type, p) + ") { "), e.opts.useDefaults && !e.compositeRule)
                            if ("object" == C.type && e.schema.properties) {
                                u = e.schema.properties;
                                var L = Object.keys(u);
                                if (L)
                                    for (var $, N = -1, U = L.length - 1; N < U;) {
                                        if (void 0 !== (M = u[$ = L[N += 1]]).default) a += "  if (" + (H = p + e.util.getProperty($)) + " === undefined) " + H + " = ", "shared" == e.opts.useDefaults ? a += " " + e.useDefault(M.default) + " " : a += " " + JSON.stringify(M.default) + " ", a += "; "
                                    }
                            } else if ("array" == C.type && Array.isArray(e.schema.items)) {
                            var q = e.schema.items;
                            if (q) {
                                k = -1;
                                for (var M, z = q.length - 1; k < z;) {
                                    var H;
                                    if (void 0 !== (M = q[k += 1]).default) a += "  if (" + (H = p + "[" + k + "]") + " === undefined) " + H + " = ", "shared" == e.opts.useDefaults ? a += " " + e.useDefault(M.default) + " " : a += " " + JSON.stringify(M.default) + " ", a += "; "
                                }
                            }
                        }
                        var V = C.rules;
                        if (V)
                            for (var Q, Y = -1, J = V.length - 1; Y < J;)
                                if (G(Q = V[Y += 1])) {
                                    var K = Q.code(e, Q.keyword, C.type);
                                    K && (a += " " + K + " ", f && (g += "}"))
                                }
                        if (f && (a += " " + g + " ", g = ""), C.type && (a += " } ", b && b === C.type && !E)) {
                            a += " else { ";
                            var X;
                            h = e.schemaPath + ".type", l = e.errSchemaPath + "/type";
                            (X = X || []).push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: '" + (y || "type") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { type: '", a += P ? "" + b.join(",") : "" + b, a += "' } ", !1 !== e.opts.messages && (a += " , message: 'should be ", a += P ? "" + b.join(",") : "" + b, a += "' "), e.opts.verbose && (a += " , schema: validate.schema" + h + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), a += " } ") : a += " {} ";
                            m = a;
                            a = X.pop(), !e.compositeRule && f ? e.async ? a += " throw new ValidationError([" + m + "]); " : a += " validate.errors = [" + m + "]; return false; " : a += " var err = " + m + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " } "
                        }
                        f && (a += " if (errors === ", a += v ? "0" : "errs_" + i, a += ") { ", w += "}")
                    }
        }
        function W(e) {
            for (var t = e.rules, r = 0; r < t.length; r++)
                if (G(t[r])) return !0
        }
        function G(t) {
            return void 0 !== e.schema[t.keyword] || t.implements && function(t) {
                for (var r = t.implements, a = 0; a < r.length; a++)
                    if (void 0 !== e.schema[r[a]]) return !0
            }(t)
        }
        return f && (a += " " + w + " "), v ? (n ? (a += " if (errors === 0) return data;           ", a += " else throw new ValidationError(vErrors); ") : (a += " validate.errors = vErrors; ", a += " return errors === 0;       "), a += " }; return validate;") : a += " var " + d + " = errors === errs_" + i + ";", a = e.util.cleanUpCode(a), v && (a = e.util.finalCleanUpCode(a, n)), a
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r) {
        var a, n = " ",
            o = e.level,
            s = e.dataLevel,
            i = e.schema[t],
            c = e.schemaPath + e.util.getProperty(t),
            u = e.errSchemaPath + "/" + t,
            h = !e.opts.allErrors,
            l = "data" + (s || ""),
            f = e.opts.$data && i && i.$data;
        f ? (n += " var schema" + o + " = " + e.util.getData(i.$data, s, e.dataPathArr) + "; ", a = "schema" + o) : a = i;
        var p = "maximum" == t,
            d = p ? "exclusiveMaximum" : "exclusiveMinimum",
            m = e.schema[d],
            v = e.opts.$data && m && m.$data,
            y = p ? "<" : ">",
            g = p ? ">" : "<",
            w = void 0;
        if (v) {
            var b = e.util.getData(m.$data, s, e.dataPathArr),
                P = "exclusive" + o,
                E = "exclType" + o,
                C = "exclIsNumber" + o,
                S = "' + " + (_ = "op" + o) + " + '";
            n += " var schemaExcl" + o + " = " + b + "; ", n += " var " + P + "; var " + E + " = typeof " + (b = "schemaExcl" + o) + "; if (" + E + " != 'boolean' && " + E + " != 'undefined' && " + E + " != 'number') { ";
            var x;
            w = d;
            (x = x || []).push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: '" + (w || "_exclusiveLimit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: {} ", !1 !== e.opts.messages && (n += " , message: '" + d + " should be boolean' "), e.opts.verbose && (n += " , schema: validate.schema" + c + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " "), n += " } ") : n += " {} ";
            var F = n;
            n = x.pop(), !e.compositeRule && h ? e.async ? n += " throw new ValidationError([" + F + "]); " : n += " validate.errors = [" + F + "]; return false; " : n += " var err = " + F + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += " } else if ( ", f && (n += " (" + a + " !== undefined && typeof " + a + " != 'number') || "), n += " " + E + " == 'number' ? ( (" + P + " = " + a + " === undefined || " + b + " " + y + "= " + a + ") ? " + l + " " + g + "= " + b + " : " + l + " " + g + " " + a + " ) : ( (" + P + " = " + b + " === true) ? " + l + " " + g + "= " + a + " : " + l + " " + g + " " + a + " ) || " + l + " !== " + l + ") { var op" + o + " = " + P + " ? '" + y + "' : '" + y + "='; ", void 0 === i && (w = d, u = e.errSchemaPath + "/" + d, a = b, f = v)
        } else {
            S = y;
            if ((C = "number" == typeof m) && f) {
                var _ = "'" + S + "'";
                n += " if ( ", f && (n += " (" + a + " !== undefined && typeof " + a + " != 'number') || "), n += " ( " + a + " === undefined || " + m + " " + y + "= " + a + " ? " + l + " " + g + "= " + m + " : " + l + " " + g + " " + a + " ) || " + l + " !== " + l + ") { "
            } else {
                C && void 0 === i ? (P = !0, w = d, u = e.errSchemaPath + "/" + d, a = m, g += "=") : (C && (a = Math[p ? "min" : "max"](m, i)), m === (!C || a) ? (P = !0, w = d, u = e.errSchemaPath + "/" + d, g += "=") : (P = !1, S += "="));
                _ = "'" + S + "'";
                n += " if ( ", f && (n += " (" + a + " !== undefined && typeof " + a + " != 'number') || "), n += " " + l + " " + g + " " + a + " || " + l + " !== " + l + ") { "
            }
        }
        w = w || t, (x = x || []).push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: '" + (w || "_limit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { comparison: " + _ + ", limit: " + a + ", exclusive: " + P + " } ", !1 !== e.opts.messages && (n += " , message: 'should be " + S + " ", n += f ? "' + " + a : a + "'"), e.opts.verbose && (n += " , schema:  ", n += f ? "validate.schema" + c : "" + i, n += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " "), n += " } ") : n += " {} ";
        F = n;
        return n = x.pop(), !e.compositeRule && h ? e.async ? n += " throw new ValidationError([" + F + "]); " : n += " validate.errors = [" + F + "]; return false; " : n += " var err = " + F + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += " } ", h && (n += " else { "), n
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r) {
        var a, n = " ",
            o = e.level,
            s = e.dataLevel,
            i = e.schema[t],
            c = e.schemaPath + e.util.getProperty(t),
            u = e.errSchemaPath + "/" + t,
            h = !e.opts.allErrors,
            l = "data" + (s || ""),
            f = e.opts.$data && i && i.$data;
        f ? (n += " var schema" + o + " = " + e.util.getData(i.$data, s, e.dataPathArr) + "; ", a = "schema" + o) : a = i, n += "if ( ", f && (n += " (" + a + " !== undefined && typeof " + a + " != 'number') || "), n += " " + l + ".length " + ("maxItems" == t ? ">" : "<") + " " + a + ") { ";
        var p = t,
            d = d || [];
        d.push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: '" + (p || "_limitItems") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { limit: " + a + " } ", !1 !== e.opts.messages && (n += " , message: 'should NOT have ", n += "maxItems" == t ? "more" : "fewer", n += " than ", n += f ? "' + " + a + " + '" : "" + i, n += " items' "), e.opts.verbose && (n += " , schema:  ", n += f ? "validate.schema" + c : "" + i, n += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " "), n += " } ") : n += " {} ";
        var m = n;
        return n = d.pop(), !e.compositeRule && h ? e.async ? n += " throw new ValidationError([" + m + "]); " : n += " validate.errors = [" + m + "]; return false; " : n += " var err = " + m + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += "} ", h && (n += " else { "), n
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r) {
        var a, n = " ",
            o = e.level,
            s = e.dataLevel,
            i = e.schema[t],
            c = e.schemaPath + e.util.getProperty(t),
            u = e.errSchemaPath + "/" + t,
            h = !e.opts.allErrors,
            l = "data" + (s || ""),
            f = e.opts.$data && i && i.$data;
        f ? (n += " var schema" + o + " = " + e.util.getData(i.$data, s, e.dataPathArr) + "; ", a = "schema" + o) : a = i;
        var p = "maxLength" == t ? ">" : "<";
        n += "if ( ", f && (n += " (" + a + " !== undefined && typeof " + a + " != 'number') || "), !1 === e.opts.unicode ? n += " " + l + ".length " : n += " ucs2length(" + l + ") ", n += " " + p + " " + a + ") { ";
        var d = t,
            m = m || [];
        m.push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: '" + (d || "_limitLength") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { limit: " + a + " } ", !1 !== e.opts.messages && (n += " , message: 'should NOT be ", n += "maxLength" == t ? "longer" : "shorter", n += " than ", n += f ? "' + " + a + " + '" : "" + i, n += " characters' "), e.opts.verbose && (n += " , schema:  ", n += f ? "validate.schema" + c : "" + i, n += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " "), n += " } ") : n += " {} ";
        var v = n;
        return n = m.pop(), !e.compositeRule && h ? e.async ? n += " throw new ValidationError([" + v + "]); " : n += " validate.errors = [" + v + "]; return false; " : n += " var err = " + v + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += "} ", h && (n += " else { "), n
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r) {
        var a, n = " ",
            o = e.level,
            s = e.dataLevel,
            i = e.schema[t],
            c = e.schemaPath + e.util.getProperty(t),
            u = e.errSchemaPath + "/" + t,
            h = !e.opts.allErrors,
            l = "data" + (s || ""),
            f = e.opts.$data && i && i.$data;
        f ? (n += " var schema" + o + " = " + e.util.getData(i.$data, s, e.dataPathArr) + "; ", a = "schema" + o) : a = i, n += "if ( ", f && (n += " (" + a + " !== undefined && typeof " + a + " != 'number') || "), n += " Object.keys(" + l + ").length " + ("maxProperties" == t ? ">" : "<") + " " + a + ") { ";
        var p = t,
            d = d || [];
        d.push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: '" + (p || "_limitProperties") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { limit: " + a + " } ", !1 !== e.opts.messages && (n += " , message: 'should NOT have ", n += "maxProperties" == t ? "more" : "fewer", n += " than ", n += f ? "' + " + a + " + '" : "" + i, n += " properties' "), e.opts.verbose && (n += " , schema:  ", n += f ? "validate.schema" + c : "" + i, n += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " "), n += " } ") : n += " {} ";
        var m = n;
        return n = d.pop(), !e.compositeRule && h ? e.async ? n += " throw new ValidationError([" + m + "]); " : n += " validate.errors = [" + m + "]; return false; " : n += " var err = " + m + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += "} ", h && (n += " else { "), n
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, r) {
    var a = r(78),
        n = r(20);
    ! function() {
        var {
            version: e
        } = r(8);
        window.localStorage.helperVer !== e && (window.localStorage.helperVer = e, window.localStorage.setting = "", window.localStorage.stat = ""), window.localStorage.setting = function() {
            if (window.localStorage.setting) {
                var e = JSON.parse(window.localStorage.setting);
                return !!(e && e.setting && e.setting.hasOwnProperty("ghoulEnabled") && e.setting.hasOwnProperty("vol") && e.setting.hasOwnProperty("blockLiveStream") && e.setting.hasOwnProperty("delayRange") && e.setting.hasOwnProperty("autoClose") && e.setting.hasOwnProperty("autoDrive") && e.setting.hasOwnProperty("minimalism") && e.setting.hasOwnProperty("autoOpenBox") && e.setting.hasOwnProperty("blockEnterEffect") && e.setting.hasOwnProperty("autoAnswerEnabled") && e.setting.hasOwnProperty("autoRefreshFreq") && e.setting.hasOwnProperty("blockEnterBarrage") && e.setting.hasOwnProperty("previewClassName") && e.setting.hasOwnProperty("rocketOnly") && e.setting.hasOwnProperty("netTimeSync") && e.setting.hasOwnProperty("showTips") && e.setting.hasOwnProperty("ghoulMode") && e.setting.hasOwnProperty("gfksax")) && window.localStorage.setting
            }
            return !1
        }() || JSON.stringify({
            setting: {
                ghoulEnabled: !0,
                vol: 60,
                blockLiveStream: !1,
                delayRange: [200, 800],
                autoClose: !1,
                autoDrive: !1,
                minimalism: !1,
                autoOpenBox: !0,
                blockEnterEffect: !1,
                autoAnswerEnabled: !1,
                autoRefreshFreq: "0",
                blockEnterBarrage: !1,
                previewClassName: "answerPreview-43abcd",
                rocketOnly: !1,
                netTimeSync: !0,
                showTips: !0,
                ghoulMode: "normal",
                gfksax: 12
            }
        }), window.localStorage.stat = function() {
            if (window.localStorage.stat) {
                var e = JSON.parse(window.localStorage.stat);
                return !!(e && e.stat && e.stat.hasOwnProperty("box") && e.stat.hasOwnProperty("zan") && e.stat.hasOwnProperty("wen") && e.stat.hasOwnProperty("song") && e.stat.hasOwnProperty("silver") && e.stat.hasOwnProperty("day")) && window.localStorage.stat
            }
            return !1
        }() || JSON.stringify({
            stat: {
                box: 0,
                zan: 0,
                wen: 0,
                song: 0,
                silver: 0,
                day: null
            }
        })
    }(), (new a).init(), window.checkUpdate = async function(e) {
        var t = await n.ver(e);
        return !(!t || 0 !== t.code) && t.data
    }, console.log("background setup")
}, function(e, t, r) {
    var a = r(20),
        n = r(98),
        o = r(99),
        s = r(100);
    e.exports = class {
        constructor() {
            this.timeDelta = null, this.ghoulProxy = new s, this.geetestAgent = new o
        }
        init() {
            chrome.runtime.onConnect.addListener(e => {
                "treasure" === e.name && this.onTreasureConnected(e)
            })
        }
        onTreasureConnected(e) {
            var {
                setting: t
            } = window.localStorage;
            t && new Promise(e => {
                this.timeDelta ? e(this.timeDelta) : a.standardTime().then(t => {
                    this.timeDelta = t - Date.now() + 20, e(this.timeDelta)
                }).catch(t => e(t))
            }).then(r => {
                var a = JSON.parse(t).setting;
                a.netTimeSync && r && (a.timeDelta = r), e.postMessage({
                    type: "setting",
                    data: a
                })
            }), e.onMessage.addListener(this.treasureMessageHandler.bind(this, e))
        }
        treasureMessageHandler(e, t) {
            var r = {
                    got: t => this.onTreasureGot(t, e),
                    got_res: t => this.onTreasureGot(t, e),
                    geetest_data: t => this.geetestAgent.update(t.data, e),
                    dy_login: t => a.dyLogin(t.data, e),
                    pro_tab: t => this.onProTab(e),
                    fans_medal_list: t => this.onFansMedalList(t.data, e)
                },
                {
                    type: n
                } = t;
            r[n] && r[n](t)
        }
        onFansMedalList(e) {
            this.ghoulProxy.setFansMedalList(e)
        }
        onProTab(e) {
            this.ghoulProxy.setTab(e.sender.tab, e)
        }
        resetStat(e, t) {
            e.day = t, e.box = 0, e.zan = 0, e.wen = 0, e.song = 0, e.silver = 0
        }
        getToday() {
            var e = new Date;
            return `${e.getFullYear()}${e.getMonth()}${e.getDate()}`
        }
        onTreasureGot(e, t) {
            var {
                type: r,
                data: a
            } = e;
            if ("got" === r) {
                var {
                    setting: o
                } = JSON.parse(window.localStorage.setting) || {};
                n.playAudio(chrome.extension.getURL("assets/ding.wav"), o.vol / 100)
            } else if ("got_res" === r) {
                this.geetestAgent.upload(a);
                var {
                    stat: s
                } = JSON.parse(window.localStorage.stat) || {}, i = this.getToday();
                s.day !== i && this.resetStat(s, i), ++s.box;
                var {
                    award_type: c,
                    silver: u,
                    prop_count: h,
                    prop_id: l,
                    prop_name: f
                } = a;
                "1" === c ? s.silver += parseInt(u, 10) : "2" === c ? "璧�" === f ? s.zan += parseInt(h, 10) : "绋�" === f ? s.wen += parseInt(h, 10) : "鎬�" === f ? s.song += parseInt(h, 10) : console.log("unknown prop_name:", a) : console.log("unknown award_type:", a), window.localStorage.stat = JSON.stringify({
                    stat: s
                }), t.postMessage({
                    type: "sync"
                })
            }
        }
    }
}, function(e, t, r) {
    e.exports = r(80)
}, function(e, t, r) {
    "use strict";
    var a = r(1),
        n = r(29),
        o = r(82),
        s = r(21);
    function i(e) {
        var t = new o(e),
            r = n(o.prototype.request, t);
        return a.extend(r, o.prototype, t), a.extend(r, t), r
    }
    var c = i(s);
    c.Axios = o, c.create = function(e) {
        return i(a.merge(s, e))
    }, c.Cancel = r(33), c.CancelToken = r(96), c.isCancel = r(32), c.all = function(e) {
        return Promise.all(e)
    }, c.spread = r(97), e.exports = c, e.exports.default = c
}, function(e, t) {
    function r(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    e.exports = function(e) {
        return null != e && (r(e) || function(e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && r(e.slice(0, 0))
        }(e) || !!e._isBuffer)
    }
}, function(e, t, r) {
    "use strict";
    var a = r(21),
        n = r(1),
        o = r(91),
        s = r(92);
    function i(e) {
        this.defaults = e, this.interceptors = {
            request: new o,
            response: new o
        }
    }
    i.prototype.request = function(e) {
        "string" == typeof e && (e = n.merge({
            url: arguments[0]
        }, arguments[1])), (e = n.merge(a, {
            method: "get"
        }, this.defaults, e)).method = e.method.toLowerCase();
        var t = [s, void 0],
            r = Promise.resolve(e);
        for (this.interceptors.request.forEach(function(e) {
                t.unshift(e.fulfilled, e.rejected)
            }), this.interceptors.response.forEach(function(e) {
                t.push(e.fulfilled, e.rejected)
            }); t.length;) r = r.then(t.shift(), t.shift());
        return r
    }, n.forEach(["delete", "get", "head", "options"], function(e) {
        i.prototype[e] = function(t, r) {
            return this.request(n.merge(r || {}, {
                method: e,
                url: t
            }))
        }
    }), n.forEach(["post", "put", "patch"], function(e) {
        i.prototype[e] = function(t, r, a) {
            return this.request(n.merge(a || {}, {
                method: e,
                url: t,
                data: r
            }))
        }
    }), e.exports = i
}, function(e, t, r) {
    "use strict";
    var a = r(1);
    e.exports = function(e, t) {
        a.forEach(e, function(r, a) {
            a !== t && a.toUpperCase() === t.toUpperCase() && (e[t] = r, delete e[a])
        })
    }
}, function(e, t, r) {
    "use strict";
    var a = r(31);
    e.exports = function(e, t, r) {
        var n = r.config.validateStatus;
        r.status && n && !n(r.status) ? t(a("Request failed with status code " + r.status, r.config, null, r.request, r)) : e(r)
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r, a, n) {
        return e.config = t, r && (e.code = r), e.request = a, e.response = n, e
    }
}, function(e, t, r) {
    "use strict";
    var a = r(1);
    function n(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    e.exports = function(e, t, r) {
        if (!t) return e;
        var o;
        if (r) o = r(t);
        else if (a.isURLSearchParams(t)) o = t.toString();
        else {
            var s = [];
            a.forEach(t, function(e, t) {
                null !== e && void 0 !== e && (a.isArray(e) ? t += "[]" : e = [e], a.forEach(e, function(e) {
                    a.isDate(e) ? e = e.toISOString() : a.isObject(e) && (e = JSON.stringify(e)), s.push(n(t) + "=" + n(e))
                }))
            }), o = s.join("&")
        }
        return o && (e += (-1 === e.indexOf("?") ? "?" : "&") + o), e
    }
}, function(e, t, r) {
    "use strict";
    var a = r(1),
        n = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function(e) {
        var t, r, o, s = {};
        return e ? (a.forEach(e.split("\n"), function(e) {
            if (o = e.indexOf(":"), t = a.trim(e.substr(0, o)).toLowerCase(), r = a.trim(e.substr(o + 1)), t) {
                if (s[t] && n.indexOf(t) >= 0) return;
                s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([r]) : s[t] ? s[t] + ", " + r : r
            }
        }), s) : s
    }
}, function(e, t, r) {
    "use strict";
    var a = r(1);
    e.exports = a.isStandardBrowserEnv() ? function() {
        var e, t = /(msie|trident)/i.test(navigator.userAgent),
            r = document.createElement("a");
        function n(e) {
            var a = e;
            return t && (r.setAttribute("href", a), a = r.href), r.setAttribute("href", a), {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
            }
        }
        return e = n(window.location.href),
            function(t) {
                var r = a.isString(t) ? n(t) : t;
                return r.protocol === e.protocol && r.host === e.host
            }
    }() : function() {
        return !0
    }
}, function(e, t, r) {
    "use strict";
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function n() {
        this.message = "String contains an invalid character"
    }
    n.prototype = new Error, n.prototype.code = 5, n.prototype.name = "InvalidCharacterError", e.exports = function(e) {
        for (var t, r, o = String(e), s = "", i = 0, c = a; o.charAt(0 | i) || (c = "=", i % 1); s += c.charAt(63 & t >> 8 - i % 1 * 8)) {
            if ((r = o.charCodeAt(i += .75)) > 255) throw new n;
            t = t << 8 | r
        }
        return s
    }
}, function(e, t, r) {
    "use strict";
    var a = r(1);
    e.exports = a.isStandardBrowserEnv() ? {
        write: function(e, t, r, n, o, s) {
            var i = [];
            i.push(e + "=" + encodeURIComponent(t)), a.isNumber(r) && i.push("expires=" + new Date(r).toGMTString()), a.isString(n) && i.push("path=" + n), a.isString(o) && i.push("domain=" + o), !0 === s && i.push("secure"), document.cookie = i.join("; ")
        },
        read: function(e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null
        },
        remove: function(e) {
            this.write(e, "", Date.now() - 864e5)
        }
    } : {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
}, function(e, t, r) {
    "use strict";
    var a = r(1);
    function n() {
        this.handlers = []
    }
    n.prototype.use = function(e, t) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t
        }), this.handlers.length - 1
    }, n.prototype.eject = function(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }, n.prototype.forEach = function(e) {
        a.forEach(this.handlers, function(t) {
            null !== t && e(t)
        })
    }, e.exports = n
}, function(e, t, r) {
    "use strict";
    var a = r(1),
        n = r(93),
        o = r(32),
        s = r(21),
        i = r(94),
        c = r(95);
    function u(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }
    e.exports = function(e) {
        return u(e), e.baseURL && !i(e.url) && (e.url = c(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = n(e.data, e.headers, e.transformRequest), e.headers = a.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), a.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
            delete e.headers[t]
        }), (e.adapter || s.adapter)(e).then(function(t) {
            return u(e), t.data = n(t.data, t.headers, e.transformResponse), t
        }, function(t) {
            return o(t) || (u(e), t && t.response && (t.response.data = n(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
        })
    }
}, function(e, t, r) {
    "use strict";
    var a = r(1);
    e.exports = function(e, t, r) {
        return a.forEach(r, function(r) {
            e = r(e, t)
        }), e
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}, function(e, t, r) {
    "use strict";
    var a = r(33);
    function n(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function(e) {
            t = e
        });
        var r = this;
        e(function(e) {
            r.reason || (r.reason = new a(e), t(r.reason))
        })
    }
    n.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason
    }, n.source = function() {
        var e;
        return {
            token: new n(function(t) {
                e = t
            }),
            cancel: e
        }
    }, e.exports = n
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        return function(t) {
            return e.apply(null, t)
        }
    }
}, function(e, t) {
    e.exports = {
        playAudio: function(e, t) {
            if (t > 0) {
                var r = new Audio;
                r.src = e, r.volume = t, r.play()
            }
        }
    }
}, function(e, t, r) {
    var a = r(20);
    e.exports = class {
        constructor() {
            this.data = null
        }
        update(e) {
            this.data = e
        }
        upload(e) {
            var t = parseInt(e.award_type, 10) || -1,
                r = parseInt(e.prop_id, 10) || -1,
                n = parseInt(e.prop_count, 10) || 0,
                o = parseInt(e.silver, 10) || -1,
                s = parseInt(e.silver_balance, 10) || -1;
            this.data && (a.uploadGeetest(Object.assign({}, this.data, {
                ts: {
                    awardType: t,
                    propId: r,
                    propCount: n,
                    silver: o,
                    silverBalance: s
                }
            })), this.data = null)
        }
    }
}, function(e, t, r) {
    var a = r(101),
        n = (new(r(131))).compile({
            type: "array",
            items: {
                type: "object",
                required: ["rpid", "rpt", "rid", "ot"]
            }
        });
    e.exports = class {
        constructor() {
            this.tab = null, this.port = null, this.lastBoxes = new Set, this.fansMedalList = null
        }
        initSocket() {
            a.socket && a.destroy();
            var e = JSON.parse(window.localStorage.setting).setting;
            this.fansMedalList.forEach(t => {
                "99999" === t.medalRid && t.medalLev >= e.gfksax && (a.connect(), a.register("tsbox", this.onTsbox.bind(this)))
            })
        }
        setFansMedalList(e) {
            this.fansMedalList = e, this.tab && this.port && this.initSocket()
        }
        boxDiff(e) {
            var t = [],
                r = new Set;
            return e.forEach(e => {
                r.add(e.rpid), this.lastBoxes.has(e.rpid) || t.push(e)
            }), this.lastBoxes.clear(), this.lastBoxes = r, t
        }
        onTsbox(e) {
            var {
                port: t
            } = this;
            n(e) ? t && !t.isDisconnected && t.postMessage({
                type: "tsbox",
                data: this.boxDiff(e).map(e => ({
                    roomId: e.rid,
                    treasureType: e.rpt,
                    treasureId: e.rpid,
                    surplusTime: parseInt(new Date(e.ot).getTime() / 1e3, 10)
                }))
            }) : console.log("invalid boxes:", e)
        }
        reset() {
            this.tab = null, this.port = null, a.destroy()
        }
        onPortDisconnected(e) {
            e.isDisconnected = !0, this.fansMedalList = null, this.lastBoxes = new Set, this.reset()
        }
        setTab(e, t) {
            this.tab && e.id !== this.tab.id && this.reset(), t.onDisconnect.addListener(() => this.onPortDisconnected(t)), this.tab = e, this.port = t, this.fansMedalList && this.initSocket()
        }
    }
}, function(e, t, r) {
    var {
        EventEmitter: a
    } = r(10), n = r(102);
    e.exports = new class extends a {
        constructor() {
            super(), this.socket = null, this.url = "https://ws1.mllab.cn/tse", this.isConnected = !1
        }
        connect() {
            this.socket || (this.socket = n(this.url), this.socket.on("connect", this.onConnected.bind(this)), this.socket.on("disconnect", this.onDisconnected.bind(this)))
        }
        destroy() {
            console.log("destroy"), this.socket && (this.socket.close(), this.socket = null), this.isConnected = !1
        }
        register(e, t) {
            this.socket.on(e, t)
        }
        onConnected() {
            this.isConnected = !0, console.log("ws connected"), this.emit("connect")
        }
        onDisconnected() {
            this.isConnected = !1, console.log("ws disconnected"), this.emit("disconnect")
        }
    }
}, function(e, t, r) {
    var a = r(103),
        n = r(22),
        o = r(37),
        s = r(11)("socket.io-client");
    e.exports = t = c;
    var i = t.managers = {};
    function c(e, t) {
        "object" == typeof e && (t = e, e = void 0), t = t || {};
        var r, n = a(e),
            c = n.source,
            u = n.id,
            h = n.path,
            l = i[u] && h in i[u].nsps;
        return t.forceNew || t["force new connection"] || !1 === t.multiplex || l ? (s("ignoring socket cache for %s", c), r = o(c, t)) : (i[u] || (s("new io instance for %s", c), i[u] = o(c, t)), r = i[u]), n.query && !t.query && (t.query = n.query), r.socket(n.path, t)
    }
    t.protocol = n.protocol, t.connect = c, t.Manager = r(37), t.Socket = r(43)
}, function(e, t, r) {
    var a = r(34),
        n = r(11)("socket.io-client:url");
    e.exports = function(e, t) {
        var r = e;
        t = t || "undefined" != typeof location && location, null == e && (e = t.protocol + "//" + t.host);
        "string" == typeof e && ("/" === e.charAt(0) && (e = "/" === e.charAt(1) ? t.protocol + e : t.host + e), /^(https?|wss?):\/\//.test(e) || (n("protocol-less url %s", e), e = void 0 !== t ? t.protocol + "//" + e : "https://" + e), n("parse %s", e), r = a(e));
        r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443"));
        r.path = r.path || "/";
        var o = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;
        return r.id = r.protocol + "://" + o + ":" + r.port, r.href = r.protocol + "://" + o + (t && t.port === r.port ? "" : ":" + r.port), r
    }
}, function(e, t, r) {
    function a(e) {
        var r;
        function a() {
            if (a.enabled) {
                var e = a,
                    n = +new Date,
                    o = n - (r || n);
                e.diff = o, e.prev = r, e.curr = n, r = n;
                for (var s = new Array(arguments.length), i = 0; i < s.length; i++) s[i] = arguments[i];
                s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
                var c = 0;
                s[0] = s[0].replace(/%([a-zA-Z%])/g, function(r, a) {
                    if ("%%" === r) return r;
                    c++;
                    var n = t.formatters[a];
                    if ("function" == typeof n) {
                        var o = s[c];
                        r = n.call(e, o), s.splice(c, 1), c--
                    }
                    return r
                }), t.formatArgs.call(e, s), (a.log || t.log || console.log.bind(console)).apply(e, s)
            }
        }
        return a.namespace = e, a.enabled = t.enabled(e), a.useColors = t.useColors(), a.color = function(e) {
            var r, a = 0;
            for (r in e) a = (a << 5) - a + e.charCodeAt(r), a |= 0;
            return t.colors[Math.abs(a) % t.colors.length]
        }(e), a.destroy = n, "function" == typeof t.init && t.init(a), t.instances.push(a), a
    }
    function n() {
        var e = t.instances.indexOf(this);
        return -1 !== e && (t.instances.splice(e, 1), !0)
    }(t = e.exports = a.debug = a.default = a).coerce = function(e) {
        return e instanceof Error ? e.stack || e.message : e
    }, t.disable = function() {
        t.enable("")
    }, t.enable = function(e) {
        var r;
        t.save(e), t.names = [], t.skips = [];
        var a = ("string" == typeof e ? e : "").split(/[\s,]+/),
            n = a.length;
        for (r = 0; r < n; r++) a[r] && ("-" === (e = a[r].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
        for (r = 0; r < t.instances.length; r++) {
            var o = t.instances[r];
            o.enabled = t.enabled(o.namespace)
        }
    }, t.enabled = function(e) {
        if ("*" === e[e.length - 1]) return !0;
        var r, a;
        for (r = 0, a = t.skips.length; r < a; r++)
            if (t.skips[r].test(e)) return !1;
        for (r = 0, a = t.names.length; r < a; r++)
            if (t.names[r].test(e)) return !0;
        return !1
    }, t.humanize = r(105), t.instances = [], t.names = [], t.skips = [], t.formatters = {}
}, function(e, t) {
    var r = 1e3,
        a = 60 * r,
        n = 60 * a,
        o = 24 * n,
        s = 365.25 * o;
    function i(e, t, r) {
        if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + r : Math.ceil(e / t) + " " + r + "s"
    }
    e.exports = function(e, t) {
        t = t || {};
        var c = typeof e;
        if ("string" === c && e.length > 0) return function(e) {
            if ((e = String(e)).length > 100) return;
            var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
            if (!t) return;
            var i = parseFloat(t[1]);
            switch ((t[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return i * s;
                case "days":
                case "day":
                case "d":
                    return i * o;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return i * n;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return i * a;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return i * r;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return i;
                default:
                    return
            }
        }(e);
        if ("number" === c && !1 === isNaN(e)) return t.long ? function(e) {
            return i(e, o, "day") || i(e, n, "hour") || i(e, a, "minute") || i(e, r, "second") || e + " ms"
        }(e) : function(e) {
            if (e >= o) return Math.round(e / o) + "d";
            if (e >= n) return Math.round(e / n) + "h";
            if (e >= a) return Math.round(e / a) + "m";
            if (e >= r) return Math.round(e / r) + "s";
            return e + "ms"
        }(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
}, function(e, t, r) {
    (function(a) {
        function n() {
            var e;
            try {
                e = t.storage.debug
            } catch (e) {}
            return !e && void 0 !== a && "env" in a && (e = a.env.DEBUG), e
        }(t = e.exports = r(107)).log = function() {
            return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }, t.formatArgs = function(e) {
            var r = this.useColors;
            if (e[0] = (r ? "%c" : "") + this.namespace + (r ? " %c" : " ") + e[0] + (r ? "%c " : " ") + "+" + t.humanize(this.diff), !r) return;
            var a = "color: " + this.color;
            e.splice(1, 0, a, "color: inherit");
            var n = 0,
                o = 0;
            e[0].replace(/%[a-zA-Z%]/g, function(e) {
                "%%" !== e && "%c" === e && (o = ++n)
            }), e.splice(o, 0, a)
        }, t.save = function(e) {
            try {
                null == e ? t.storage.removeItem("debug") : t.storage.debug = e
            } catch (e) {}
        }, t.load = n, t.useColors = function() {
            if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
            if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
            return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
            try {
                return window.localStorage
            } catch (e) {}
        }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.formatters.j = function(e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message
            }
        }, t.enable(n())
    }).call(this, r(4))
}, function(e, t, r) {
    function a(e) {
        var r;
        function a() {
            if (a.enabled) {
                var e = a,
                    n = +new Date,
                    o = n - (r || n);
                e.diff = o, e.prev = r, e.curr = n, r = n;
                for (var s = new Array(arguments.length), i = 0; i < s.length; i++) s[i] = arguments[i];
                s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
                var c = 0;
                s[0] = s[0].replace(/%([a-zA-Z%])/g, function(r, a) {
                    if ("%%" === r) return r;
                    c++;
                    var n = t.formatters[a];
                    if ("function" == typeof n) {
                        var o = s[c];
                        r = n.call(e, o), s.splice(c, 1), c--
                    }
                    return r
                }), t.formatArgs.call(e, s), (a.log || t.log || console.log.bind(console)).apply(e, s)
            }
        }
        return a.namespace = e, a.enabled = t.enabled(e), a.useColors = t.useColors(), a.color = function(e) {
            var r, a = 0;
            for (r in e) a = (a << 5) - a + e.charCodeAt(r), a |= 0;
            return t.colors[Math.abs(a) % t.colors.length]
        }(e), a.destroy = n, "function" == typeof t.init && t.init(a), t.instances.push(a), a
    }
    function n() {
        var e = t.instances.indexOf(this);
        return -1 !== e && (t.instances.splice(e, 1), !0)
    }(t = e.exports = a.debug = a.default = a).coerce = function(e) {
        return e instanceof Error ? e.stack || e.message : e
    }, t.disable = function() {
        t.enable("")
    }, t.enable = function(e) {
        var r;
        t.save(e), t.names = [], t.skips = [];
        var a = ("string" == typeof e ? e : "").split(/[\s,]+/),
            n = a.length;
        for (r = 0; r < n; r++) a[r] && ("-" === (e = a[r].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
        for (r = 0; r < t.instances.length; r++) {
            var o = t.instances[r];
            o.enabled = t.enabled(o.namespace)
        }
    }, t.enabled = function(e) {
        if ("*" === e[e.length - 1]) return !0;
        var r, a;
        for (r = 0, a = t.skips.length; r < a; r++)
            if (t.skips[r].test(e)) return !1;
        for (r = 0, a = t.names.length; r < a; r++)
            if (t.names[r].test(e)) return !0;
        return !1
    }, t.humanize = r(108), t.instances = [], t.names = [], t.skips = [], t.formatters = {}
}, function(e, t) {
    var r = 1e3,
        a = 60 * r,
        n = 60 * a,
        o = 24 * n,
        s = 365.25 * o;
    function i(e, t, r) {
        if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + r : Math.ceil(e / t) + " " + r + "s"
    }
    e.exports = function(e, t) {
        t = t || {};
        var c = typeof e;
        if ("string" === c && e.length > 0) return function(e) {
            if ((e = String(e)).length > 100) return;
            var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
            if (!t) return;
            var i = parseFloat(t[1]);
            switch ((t[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return i * s;
                case "days":
                case "day":
                case "d":
                    return i * o;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return i * n;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return i * a;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return i * r;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return i;
                default:
                    return
            }
        }(e);
        if ("number" === c && !1 === isNaN(e)) return t.long ? function(e) {
            return i(e, o, "day") || i(e, n, "hour") || i(e, a, "minute") || i(e, r, "second") || e + " ms"
        }(e) : function(e) {
            if (e >= o) return Math.round(e / o) + "d";
            if (e >= n) return Math.round(e / n) + "h";
            if (e >= a) return Math.round(e / a) + "m";
            if (e >= r) return Math.round(e / r) + "s";
            return e + "ms"
        }(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
}, function(e, t, r) {
    var a = r(35),
        n = r(36),
        o = Object.prototype.toString,
        s = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === o.call(Blob),
        i = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === o.call(File);
    t.deconstructPacket = function(e) {
        var t = [],
            r = e.data,
            o = e;
        return o.data = function e(t, r) {
            if (!t) return t;
            if (n(t)) {
                var o = {
                    _placeholder: !0,
                    num: r.length
                };
                return r.push(t), o
            }
            if (a(t)) {
                for (var s = new Array(t.length), i = 0; i < t.length; i++) s[i] = e(t[i], r);
                return s
            }
            if ("object" == typeof t && !(t instanceof Date)) {
                var s = {};
                for (var c in t) s[c] = e(t[c], r);
                return s
            }
            return t
        }(r, t), o.attachments = t.length, {
            packet: o,
            buffers: t
        }
    }, t.reconstructPacket = function(e, t) {
        return e.data = function e(t, r) {
            if (!t) return t;
            if (t && t._placeholder) return r[t.num];
            if (a(t))
                for (var n = 0; n < t.length; n++) t[n] = e(t[n], r);
            else if ("object" == typeof t)
                for (var o in t) t[o] = e(t[o], r);
            return t
        }(e.data, t), e.attachments = void 0, e
    }, t.removeBlobs = function(e, t) {
        var r = 0,
            o = e;
        ! function e(c, u, h) {
            if (!c) return c;
            if (s && c instanceof Blob || i && c instanceof File) {
                r++;
                var l = new FileReader;
                l.onload = function() {
                    h ? h[u] = this.result : o = this.result, --r || t(o)
                }, l.readAsArrayBuffer(c)
            } else if (a(c))
                for (var f = 0; f < c.length; f++) e(c[f], f, c);
            else if ("object" == typeof c && !n(c))
                for (var p in c) e(c[p], p, c)
        }(o), r || t(o)
    }
}, function(e, t, r) {
    "use strict";
    t.byteLength = function(e) {
        var t = u(e),
            r = t[0],
            a = t[1];
        return 3 * (r + a) / 4 - a
    }, t.toByteArray = function(e) {
        for (var t, r = u(e), a = r[0], s = r[1], i = new o(function(e, t, r) {
                return 3 * (t + r) / 4 - r
            }(0, a, s)), c = 0, h = s > 0 ? a - 4 : a, l = 0; l < h; l += 4) t = n[e.charCodeAt(l)] << 18 | n[e.charCodeAt(l + 1)] << 12 | n[e.charCodeAt(l + 2)] << 6 | n[e.charCodeAt(l + 3)], i[c++] = t >> 16 & 255, i[c++] = t >> 8 & 255, i[c++] = 255 & t;
        2 === s && (t = n[e.charCodeAt(l)] << 2 | n[e.charCodeAt(l + 1)] >> 4, i[c++] = 255 & t);
        1 === s && (t = n[e.charCodeAt(l)] << 10 | n[e.charCodeAt(l + 1)] << 4 | n[e.charCodeAt(l + 2)] >> 2, i[c++] = t >> 8 & 255, i[c++] = 255 & t);
        return i
    }, t.fromByteArray = function(e) {
        for (var t, r = e.length, n = r % 3, o = [], s = 0, i = r - n; s < i; s += 16383) o.push(l(e, s, s + 16383 > i ? i : s + 16383));
        1 === n ? (t = e[r - 1], o.push(a[t >> 2] + a[t << 4 & 63] + "==")) : 2 === n && (t = (e[r - 2] << 8) + e[r - 1], o.push(a[t >> 10] + a[t >> 4 & 63] + a[t << 2 & 63] + "="));
        return o.join("")
    };
    for (var a = [], n = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, c = s.length; i < c; ++i) a[i] = s[i], n[s.charCodeAt(i)] = i;
    function u(e) {
        var t = e.length;
        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var r = e.indexOf("=");
        return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4]
    }
    function h(e) {
        return a[e >> 18 & 63] + a[e >> 12 & 63] + a[e >> 6 & 63] + a[63 & e]
    }
    function l(e, t, r) {
        for (var a, n = [], o = t; o < r; o += 3) a = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]), n.push(h(a));
        return n.join("")
    }
    n["-".charCodeAt(0)] = 62, n["_".charCodeAt(0)] = 63
}, function(e, t) {
    t.read = function(e, t, r, a, n) {
        var o, s, i = 8 * n - a - 1,
            c = (1 << i) - 1,
            u = c >> 1,
            h = -7,
            l = r ? n - 1 : 0,
            f = r ? -1 : 1,
            p = e[t + l];
        for (l += f, o = p & (1 << -h) - 1, p >>= -h, h += i; h > 0; o = 256 * o + e[t + l], l += f, h -= 8);
        for (s = o & (1 << -h) - 1, o >>= -h, h += a; h > 0; s = 256 * s + e[t + l], l += f, h -= 8);
        if (0 === o) o = 1 - u;
        else {
            if (o === c) return s ? NaN : 1 / 0 * (p ? -1 : 1);
            s += Math.pow(2, a), o -= u
        }
        return (p ? -1 : 1) * s * Math.pow(2, o - a)
    }, t.write = function(e, t, r, a, n, o) {
        var s, i, c, u = 8 * o - n - 1,
            h = (1 << u) - 1,
            l = h >> 1,
            f = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            p = a ? 0 : o - 1,
            d = a ? 1 : -1,
            m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (i = isNaN(t) ? 1 : 0, s = h) : (s = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -s)) < 1 && (s--, c *= 2), (t += s + l >= 1 ? f / c : f * Math.pow(2, 1 - l)) * c >= 2 && (s++, c /= 2), s + l >= h ? (i = 0, s = h) : s + l >= 1 ? (i = (t * c - 1) * Math.pow(2, n), s += l) : (i = t * Math.pow(2, l - 1) * Math.pow(2, n), s = 0)); n >= 8; e[r + p] = 255 & i, p += d, i /= 256, n -= 8);
        for (s = s << n | i, u += n; u > 0; e[r + p] = 255 & s, p += d, s /= 256, u -= 8);
        e[r + p - d] |= 128 * m
    }
}, function(e, t) {
    var r = {}.toString;
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == r.call(e)
    }
}, function(e, t, r) {
    e.exports = r(114), e.exports.parser = r(6)
}, function(e, t, r) {
    var a = r(38),
        n = r(5),
        o = r(14)("engine.io-client:socket"),
        s = r(42),
        i = r(6),
        c = r(34),
        u = r(12);
    function h(e, t) {
        if (!(this instanceof h)) return new h(e, t);
        t = t || {}, e && "object" == typeof e && (t = e, e = null), e ? (e = c(e), t.hostname = e.host, t.secure = "https" === e.protocol || "wss" === e.protocol, t.port = e.port, e.query && (t.query = e.query)) : t.host && (t.hostname = c(t.host).host), this.secure = null != t.secure ? t.secure : "undefined" != typeof location && "https:" === location.protocol, t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.agent = t.agent || !1, this.hostname = t.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = t.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 : 80), this.query = t.query || {}, "string" == typeof this.query && (this.query = u.decode(this.query)), this.upgrade = !1 !== t.upgrade, this.path = (t.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!t.forceJSONP, this.jsonp = !1 !== t.jsonp, this.forceBase64 = !!t.forceBase64, this.enablesXDR = !!t.enablesXDR, this.timestampParam = t.timestampParam || "t", this.timestampRequests = t.timestampRequests, this.transports = t.transports || ["polling", "websocket"], this.transportOptions = t.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = t.policyPort || 843, this.rememberUpgrade = t.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = t.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== t.perMessageDeflate && (t.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = t.pfx || null, this.key = t.key || null, this.passphrase = t.passphrase || null, this.cert = t.cert || null, this.ca = t.ca || null, this.ciphers = t.ciphers || null, this.rejectUnauthorized = void 0 === t.rejectUnauthorized || t.rejectUnauthorized, this.forceNode = !!t.forceNode, this.isReactNative = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(), ("undefined" == typeof self || this.isReactNative) && (t.extraHeaders && Object.keys(t.extraHeaders).length > 0 && (this.extraHeaders = t.extraHeaders), t.localAddress && (this.localAddress = t.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open()
    }
    e.exports = h, h.priorWebsocketSuccess = !1, n(h.prototype), h.protocol = i.protocol, h.Socket = h, h.Transport = r(25), h.transports = r(38), h.parser = r(6), h.prototype.createTransport = function(e) {
        o('creating transport "%s"', e);
        var t = function(e) {
            var t = {};
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            return t
        }(this.query);
        t.EIO = i.protocol, t.transport = e;
        var r = this.transportOptions[e] || {};
        return this.id && (t.sid = this.id), new a[e]({
            query: t,
            socket: this,
            agent: r.agent || this.agent,
            hostname: r.hostname || this.hostname,
            port: r.port || this.port,
            secure: r.secure || this.secure,
            path: r.path || this.path,
            forceJSONP: r.forceJSONP || this.forceJSONP,
            jsonp: r.jsonp || this.jsonp,
            forceBase64: r.forceBase64 || this.forceBase64,
            enablesXDR: r.enablesXDR || this.enablesXDR,
            timestampRequests: r.timestampRequests || this.timestampRequests,
            timestampParam: r.timestampParam || this.timestampParam,
            policyPort: r.policyPort || this.policyPort,
            pfx: r.pfx || this.pfx,
            key: r.key || this.key,
            passphrase: r.passphrase || this.passphrase,
            cert: r.cert || this.cert,
            ca: r.ca || this.ca,
            ciphers: r.ciphers || this.ciphers,
            rejectUnauthorized: r.rejectUnauthorized || this.rejectUnauthorized,
            perMessageDeflate: r.perMessageDeflate || this.perMessageDeflate,
            extraHeaders: r.extraHeaders || this.extraHeaders,
            forceNode: r.forceNode || this.forceNode,
            localAddress: r.localAddress || this.localAddress,
            requestTimeout: r.requestTimeout || this.requestTimeout,
            protocols: r.protocols || void 0,
            isReactNative: this.isReactNative
        })
    }, h.prototype.open = function() {
        var e;
        if (this.rememberUpgrade && h.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) e = "websocket";
        else {
            if (0 === this.transports.length) {
                var t = this;
                return void setTimeout(function() {
                    t.emit("error", "No transports available")
                }, 0)
            }
            e = this.transports[0]
        }
        this.readyState = "opening";
        try {
            e = this.createTransport(e)
        } catch (e) {
            return this.transports.shift(), void this.open()
        }
        e.open(), this.setTransport(e)
    }, h.prototype.setTransport = function(e) {
        o("setting transport %s", e.name);
        var t = this;
        this.transport && (o("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = e, e.on("drain", function() {
            t.onDrain()
        }).on("packet", function(e) {
            t.onPacket(e)
        }).on("error", function(e) {
            t.onError(e)
        }).on("close", function() {
            t.onClose("transport close")
        })
    }, h.prototype.probe = function(e) {
        o('probing transport "%s"', e);
        var t = this.createTransport(e, {
                probe: 1
            }),
            r = !1,
            a = this;
        function n() {
            if (a.onlyBinaryUpgrades) {
                var n = !this.supportsBinary && a.transport.supportsBinary;
                r = r || n
            }
            r || (o('probe transport "%s" opened', e), t.send([{
                type: "ping",
                data: "probe"
            }]), t.once("packet", function(n) {
                if (!r)
                    if ("pong" === n.type && "probe" === n.data) {
                        if (o('probe transport "%s" pong', e), a.upgrading = !0, a.emit("upgrading", t), !t) return;
                        h.priorWebsocketSuccess = "websocket" === t.name, o('pausing current transport "%s"', a.transport.name), a.transport.pause(function() {
                            r || "closed" !== a.readyState && (o("changing transport and sending upgrade packet"), f(), a.setTransport(t), t.send([{
                                type: "upgrade"
                            }]), a.emit("upgrade", t), t = null, a.upgrading = !1, a.flush())
                        })
                    } else {
                        o('probe transport "%s" failed', e);
                        var s = new Error("probe error");
                        s.transport = t.name, a.emit("upgradeError", s)
                    }
            }))
        }
        function s() {
            r || (r = !0, f(), t.close(), t = null)
        }
        function i(r) {
            var n = new Error("probe error: " + r);
            n.transport = t.name, s(), o('probe transport "%s" failed because of error: %s', e, r), a.emit("upgradeError", n)
        }
        function c() {
            i("transport closed")
        }
        function u() {
            i("socket closed")
        }
        function l(e) {
            t && e.name !== t.name && (o('"%s" works - aborting "%s"', e.name, t.name), s())
        }
        function f() {
            t.removeListener("open", n), t.removeListener("error", i), t.removeListener("close", c), a.removeListener("close", u), a.removeListener("upgrading", l)
        }
        h.priorWebsocketSuccess = !1, t.once("open", n), t.once("error", i), t.once("close", c), this.once("close", u), this.once("upgrading", l), t.open()
    }, h.prototype.onOpen = function() {
        if (o("socket open"), this.readyState = "open", h.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
            o("starting upgrade probes");
            for (var e = 0, t = this.upgrades.length; e < t; e++) this.probe(this.upgrades[e])
        }
    }, h.prototype.onPacket = function(e) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (o('socket receive: type "%s", data "%s"', e.type, e.data), this.emit("packet", e), this.emit("heartbeat"), e.type) {
            case "open":
                this.onHandshake(JSON.parse(e.data));
                break;
            case "pong":
                this.setPing(), this.emit("pong");
                break;
            case "error":
                var t = new Error("server error");
                t.code = e.data, this.onError(t);
                break;
            case "message":
                this.emit("data", e.data), this.emit("message", e.data)
        } else o('packet received with socket readyState "%s"', this.readyState)
    }, h.prototype.onHandshake = function(e) {
        this.emit("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
    }, h.prototype.onHeartbeat = function(e) {
        clearTimeout(this.pingTimeoutTimer);
        var t = this;
        t.pingTimeoutTimer = setTimeout(function() {
            "closed" !== t.readyState && t.onClose("ping timeout")
        }, e || t.pingInterval + t.pingTimeout)
    }, h.prototype.setPing = function() {
        var e = this;
        clearTimeout(e.pingIntervalTimer), e.pingIntervalTimer = setTimeout(function() {
            o("writing ping packet - expecting pong within %sms", e.pingTimeout), e.ping(), e.onHeartbeat(e.pingTimeout)
        }, e.pingInterval)
    }, h.prototype.ping = function() {
        var e = this;
        this.sendPacket("ping", function() {
            e.emit("ping")
        })
    }, h.prototype.onDrain = function() {
        this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
    }, h.prototype.flush = function() {
        "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (o("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
    }, h.prototype.write = h.prototype.send = function(e, t, r) {
        return this.sendPacket("message", e, t, r), this
    }, h.prototype.sendPacket = function(e, t, r, a) {
        if ("function" == typeof t && (a = t, t = void 0), "function" == typeof r && (a = r, r = null), "closing" !== this.readyState && "closed" !== this.readyState) {
            (r = r || {}).compress = !1 !== r.compress;
            var n = {
                type: e,
                data: t,
                options: r
            };
            this.emit("packetCreate", n), this.writeBuffer.push(n), a && this.once("flush", a), this.flush()
        }
    }, h.prototype.close = function() {
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            var e = this;
            this.writeBuffer.length ? this.once("drain", function() {
                this.upgrading ? a() : t()
            }) : this.upgrading ? a() : t()
        }
        function t() {
            e.onClose("forced close"), o("socket closing - telling transport to close"), e.transport.close()
        }
        function r() {
            e.removeListener("upgrade", r), e.removeListener("upgradeError", r), t()
        }
        function a() {
            e.once("upgrade", r), e.once("upgradeError", r)
        }
        return this
    }, h.prototype.onError = function(e) {
        o("socket error %j", e), h.priorWebsocketSuccess = !1, this.emit("error", e), this.onClose("transport error", e)
    }, h.prototype.onClose = function(e, t) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            o('socket close with reason: "%s"', e);
            clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", e, t), this.writeBuffer = [], this.prevBufferLen = 0
        }
    }, h.prototype.filterUpgrades = function(e) {
        for (var t = [], r = 0, a = e.length; r < a; r++) ~s(this.transports, e[r]) && t.push(e[r]);
        return t
    }
}, function(e, t) {
    try {
        e.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
    } catch (t) {
        e.exports = !1
    }
}, function(e, t, r) {
    var a = r(24),
        n = r(39),
        o = r(5),
        s = r(13),
        i = r(14)("engine.io-client:polling-xhr");
    function c() {}
    function u(e) {
        if (n.call(this, e), this.requestTimeout = e.requestTimeout, this.extraHeaders = e.extraHeaders, "undefined" != typeof location) {
            var t = "https:" === location.protocol,
                r = location.port;
            r || (r = t ? 443 : 80), this.xd = "undefined" != typeof location && e.hostname !== location.hostname || r !== e.port, this.xs = e.secure !== t
        }
    }
    function h(e) {
        this.method = e.method || "GET", this.uri = e.uri, this.xd = !!e.xd, this.xs = !!e.xs, this.async = !1 !== e.async, this.data = void 0 !== e.data ? e.data : null, this.agent = e.agent, this.isBinary = e.isBinary, this.supportsBinary = e.supportsBinary, this.enablesXDR = e.enablesXDR, this.requestTimeout = e.requestTimeout, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.extraHeaders = e.extraHeaders, this.create()
    }
    if (e.exports = u, e.exports.Request = h, s(u, n), u.prototype.supportsBinary = !0, u.prototype.request = function(e) {
            return (e = e || {}).uri = this.uri(), e.xd = this.xd, e.xs = this.xs, e.agent = this.agent || !1, e.supportsBinary = this.supportsBinary, e.enablesXDR = this.enablesXDR, e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized, e.requestTimeout = this.requestTimeout, e.extraHeaders = this.extraHeaders, new h(e)
        }, u.prototype.doWrite = function(e, t) {
            var r = "string" != typeof e && void 0 !== e,
                a = this.request({
                    method: "POST",
                    data: e,
                    isBinary: r
                }),
                n = this;
            a.on("success", t), a.on("error", function(e) {
                n.onError("xhr post error", e)
            }), this.sendXhr = a
        }, u.prototype.doPoll = function() {
            i("xhr poll");
            var e = this.request(),
                t = this;
            e.on("data", function(e) {
                t.onData(e)
            }), e.on("error", function(e) {
                t.onError("xhr poll error", e)
            }), this.pollXhr = e
        }, o(h.prototype), h.prototype.create = function() {
            var e = {
                agent: this.agent,
                xdomain: this.xd,
                xscheme: this.xs,
                enablesXDR: this.enablesXDR
            };
            e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized;
            var t = this.xhr = new a(e),
                r = this;
            try {
                i("xhr open %s: %s", this.method, this.uri), t.open(this.method, this.uri, this.async);
                try {
                    if (this.extraHeaders)
                        for (var n in t.setDisableHeaderCheck && t.setDisableHeaderCheck(!0), this.extraHeaders) this.extraHeaders.hasOwnProperty(n) && t.setRequestHeader(n, this.extraHeaders[n])
                } catch (e) {}
                if ("POST" === this.method) try {
                    this.isBinary ? t.setRequestHeader("Content-type", "application/octet-stream") : t.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                } catch (e) {}
                try {
                    t.setRequestHeader("Accept", "*/*")
                } catch (e) {}
                "withCredentials" in t && (t.withCredentials = !0), this.requestTimeout && (t.timeout = this.requestTimeout), this.hasXDR() ? (t.onload = function() {
                    r.onLoad()
                }, t.onerror = function() {
                    r.onError(t.responseText)
                }) : t.onreadystatechange = function() {
                    if (2 === t.readyState) try {
                        var e = t.getResponseHeader("Content-Type");
                        r.supportsBinary && "application/octet-stream" === e && (t.responseType = "arraybuffer")
                    } catch (e) {}
                    4 === t.readyState && (200 === t.status || 1223 === t.status ? r.onLoad() : setTimeout(function() {
                        r.onError(t.status)
                    }, 0))
                }, i("xhr data %s", this.data), t.send(this.data)
            } catch (e) {
                return void setTimeout(function() {
                    r.onError(e)
                }, 0)
            }
            "undefined" != typeof document && (this.index = h.requestsCount++, h.requests[this.index] = this)
        }, h.prototype.onSuccess = function() {
            this.emit("success"), this.cleanup()
        }, h.prototype.onData = function(e) {
            this.emit("data", e), this.onSuccess()
        }, h.prototype.onError = function(e) {
            this.emit("error", e), this.cleanup(!0)
        }, h.prototype.cleanup = function(e) {
            if (void 0 !== this.xhr && null !== this.xhr) {
                if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = c : this.xhr.onreadystatechange = c, e) try {
                    this.xhr.abort()
                } catch (e) {}
                "undefined" != typeof document && delete h.requests[this.index], this.xhr = null
            }
        }, h.prototype.onLoad = function() {
            var e;
            try {
                var t;
                try {
                    t = this.xhr.getResponseHeader("Content-Type")
                } catch (e) {}
                e = "application/octet-stream" === t && this.xhr.response || this.xhr.responseText
            } catch (e) {
                this.onError(e)
            }
            null != e && this.onData(e)
        }, h.prototype.hasXDR = function() {
            return "undefined" != typeof XDomainRequest && !this.xs && this.enablesXDR
        }, h.prototype.abort = function() {
            this.cleanup()
        }, h.requestsCount = 0, h.requests = {}, "undefined" != typeof document)
        if ("function" == typeof attachEvent) attachEvent("onunload", f);
        else if ("function" == typeof addEventListener) {
        var l = "onpagehide" in self ? "pagehide" : "unload";
        addEventListener(l, f, !1)
    }
    function f() {
        for (var e in h.requests) h.requests.hasOwnProperty(e) && h.requests[e].abort()
    }
}, function(e, t) {
    e.exports = Object.keys || function(e) {
        var t = [],
            r = Object.prototype.hasOwnProperty;
        for (var a in e) r.call(e, a) && t.push(a);
        return t
    }
}, function(e, t) {
    var r = {}.toString;
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == r.call(e)
    }
}, function(e, t) {
    e.exports = function(e, t, r) {
        var a = e.byteLength;
        if (t = t || 0, r = r || a, e.slice) return e.slice(t, r);
        if (t < 0 && (t += a), r < 0 && (r += a), r > a && (r = a), t >= a || t >= r || 0 === a) return new ArrayBuffer(0);
        for (var n = new Uint8Array(e), o = new Uint8Array(r - t), s = t, i = 0; s < r; s++, i++) o[i] = n[s];
        return o.buffer
    }
}, function(e, t) {
    function r() {}
    e.exports = function(e, t, a) {
        var n = !1;
        return a = a || r, o.count = e, 0 === e ? t() : o;
        function o(e, r) {
            if (o.count <= 0) throw new Error("after called too many times");
            --o.count, e ? (n = !0, t(e), t = a) : 0 !== o.count || n || t(null, r)
        }
    }
}, function(e, t) {
    /*! https://mths.be/utf8js v2.1.2 by @mathias */
    var r, a, n, o = String.fromCharCode;
    function s(e) {
        for (var t, r, a = [], n = 0, o = e.length; n < o;)(t = e.charCodeAt(n++)) >= 55296 && t <= 56319 && n < o ? 56320 == (64512 & (r = e.charCodeAt(n++))) ? a.push(((1023 & t) << 10) + (1023 & r) + 65536) : (a.push(t), n--) : a.push(t);
        return a
    }
    function i(e, t) {
        if (e >= 55296 && e <= 57343) {
            if (t) throw Error("Lone surrogate U+" + e.toString(16).toUpperCase() + " is not a scalar value");
            return !1
        }
        return !0
    }
    function c(e, t) {
        return o(e >> t & 63 | 128)
    }
    function u(e, t) {
        if (0 == (4294967168 & e)) return o(e);
        var r = "";
        return 0 == (4294965248 & e) ? r = o(e >> 6 & 31 | 192) : 0 == (4294901760 & e) ? (i(e, t) || (e = 65533), r = o(e >> 12 & 15 | 224), r += c(e, 6)) : 0 == (4292870144 & e) && (r = o(e >> 18 & 7 | 240), r += c(e, 12), r += c(e, 6)), r += o(63 & e | 128)
    }
    function h() {
        if (n >= a) throw Error("Invalid byte index");
        var e = 255 & r[n];
        if (n++, 128 == (192 & e)) return 63 & e;
        throw Error("Invalid continuation byte")
    }
    function l(e) {
        var t, o;
        if (n > a) throw Error("Invalid byte index");
        if (n == a) return !1;
        if (t = 255 & r[n], n++, 0 == (128 & t)) return t;
        if (192 == (224 & t)) {
            if ((o = (31 & t) << 6 | h()) >= 128) return o;
            throw Error("Invalid continuation byte")
        }
        if (224 == (240 & t)) {
            if ((o = (15 & t) << 12 | h() << 6 | h()) >= 2048) return i(o, e) ? o : 65533;
            throw Error("Invalid continuation byte")
        }
        if (240 == (248 & t) && (o = (7 & t) << 18 | h() << 12 | h() << 6 | h()) >= 65536 && o <= 1114111) return o;
        throw Error("Invalid UTF-8 detected")
    }
    e.exports = {
        version: "2.1.2",
        encode: function(e, t) {
            for (var r = !1 !== (t = t || {}).strict, a = s(e), n = a.length, o = -1, i = ""; ++o < n;) i += u(a[o], r);
            return i
        },
        decode: function(e, t) {
            var i = !1 !== (t = t || {}).strict;
            r = s(e), a = r.length, n = 0;
            for (var c, u = []; !1 !== (c = l(i));) u.push(c);
            return function(e) {
                for (var t, r = e.length, a = -1, n = ""; ++a < r;)(t = e[a]) > 65535 && (n += o((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), n += o(t);
                return n
            }(u)
        }
    }
}, function(e, t) {
    ! function() {
        "use strict";
        for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = new Uint8Array(256), a = 0; a < e.length; a++) r[e.charCodeAt(a)] = a;
        t.encode = function(t) {
            var r, a = new Uint8Array(t),
                n = a.length,
                o = "";
            for (r = 0; r < n; r += 3) o += e[a[r] >> 2], o += e[(3 & a[r]) << 4 | a[r + 1] >> 4], o += e[(15 & a[r + 1]) << 2 | a[r + 2] >> 6], o += e[63 & a[r + 2]];
            return n % 3 == 2 ? o = o.substring(0, o.length - 1) + "=" : n % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="), o
        }, t.decode = function(e) {
            var t, a, n, o, s, i = .75 * e.length,
                c = e.length,
                u = 0;
            "=" === e[e.length - 1] && (i--, "=" === e[e.length - 2] && i--);
            var h = new ArrayBuffer(i),
                l = new Uint8Array(h);
            for (t = 0; t < c; t += 4) a = r[e.charCodeAt(t)], n = r[e.charCodeAt(t + 1)], o = r[e.charCodeAt(t + 2)], s = r[e.charCodeAt(t + 3)], l[u++] = a << 2 | n >> 4, l[u++] = (15 & n) << 4 | o >> 2, l[u++] = (3 & o) << 6 | 63 & s;
            return h
        }
    }()
}, function(e, t) {
    var r = void 0 !== r ? r : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder && MozBlobBuilder,
        a = function() {
            try {
                return 2 === new Blob(["hi"]).size
            } catch (e) {
                return !1
            }
        }(),
        n = a && function() {
            try {
                return 2 === new Blob([new Uint8Array([1, 2])]).size
            } catch (e) {
                return !1
            }
        }(),
        o = r && r.prototype.append && r.prototype.getBlob;
    function s(e) {
        return e.map(function(e) {
            if (e.buffer instanceof ArrayBuffer) {
                var t = e.buffer;
                if (e.byteLength !== t.byteLength) {
                    var r = new Uint8Array(e.byteLength);
                    r.set(new Uint8Array(t, e.byteOffset, e.byteLength)), t = r.buffer
                }
                return t
            }
            return e
        })
    }
    function i(e, t) {
        t = t || {};
        var a = new r;
        return s(e).forEach(function(e) {
            a.append(e)
        }), t.type ? a.getBlob(t.type) : a.getBlob()
    }
    function c(e, t) {
        return new Blob(s(e), t || {})
    }
    "undefined" != typeof Blob && (i.prototype = Blob.prototype, c.prototype = Blob.prototype), e.exports = a ? n ? Blob : c : o ? i : void 0
}, function(e, t, r) {
    function a(e) {
        var r;
        function a() {
            if (a.enabled) {
                var e = a,
                    n = +new Date,
                    o = n - (r || n);
                e.diff = o, e.prev = r, e.curr = n, r = n;
                for (var s = new Array(arguments.length), i = 0; i < s.length; i++) s[i] = arguments[i];
                s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
                var c = 0;
                s[0] = s[0].replace(/%([a-zA-Z%])/g, function(r, a) {
                    if ("%%" === r) return r;
                    c++;
                    var n = t.formatters[a];
                    if ("function" == typeof n) {
                        var o = s[c];
                        r = n.call(e, o), s.splice(c, 1), c--
                    }
                    return r
                }), t.formatArgs.call(e, s), (a.log || t.log || console.log.bind(console)).apply(e, s)
            }
        }
        return a.namespace = e, a.enabled = t.enabled(e), a.useColors = t.useColors(), a.color = function(e) {
            var r, a = 0;
            for (r in e) a = (a << 5) - a + e.charCodeAt(r), a |= 0;
            return t.colors[Math.abs(a) % t.colors.length]
        }(e), a.destroy = n, "function" == typeof t.init && t.init(a), t.instances.push(a), a
    }
    function n() {
        var e = t.instances.indexOf(this);
        return -1 !== e && (t.instances.splice(e, 1), !0)
    }(t = e.exports = a.debug = a.default = a).coerce = function(e) {
        return e instanceof Error ? e.stack || e.message : e
    }, t.disable = function() {
        t.enable("")
    }, t.enable = function(e) {
        var r;
        t.save(e), t.names = [], t.skips = [];
        var a = ("string" == typeof e ? e : "").split(/[\s,]+/),
            n = a.length;
        for (r = 0; r < n; r++) a[r] && ("-" === (e = a[r].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
        for (r = 0; r < t.instances.length; r++) {
            var o = t.instances[r];
            o.enabled = t.enabled(o.namespace)
        }
    }, t.enabled = function(e) {
        if ("*" === e[e.length - 1]) return !0;
        var r, a;
        for (r = 0, a = t.skips.length; r < a; r++)
            if (t.skips[r].test(e)) return !1;
        for (r = 0, a = t.names.length; r < a; r++)
            if (t.names[r].test(e)) return !0;
        return !1
    }, t.humanize = r(125), t.instances = [], t.names = [], t.skips = [], t.formatters = {}
}, function(e, t) {
    var r = 1e3,
        a = 60 * r,
        n = 60 * a,
        o = 24 * n,
        s = 365.25 * o;
    function i(e, t, r) {
        if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + r : Math.ceil(e / t) + " " + r + "s"
    }
    e.exports = function(e, t) {
        t = t || {};
        var c = typeof e;
        if ("string" === c && e.length > 0) return function(e) {
            if ((e = String(e)).length > 100) return;
            var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
            if (!t) return;
            var i = parseFloat(t[1]);
            switch ((t[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return i * s;
                case "days":
                case "day":
                case "d":
                    return i * o;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return i * n;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return i * a;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return i * r;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return i;
                default:
                    return
            }
        }(e);
        if ("number" === c && !1 === isNaN(e)) return t.long ? function(e) {
            return i(e, o, "day") || i(e, n, "hour") || i(e, a, "minute") || i(e, r, "second") || e + " ms"
        }(e) : function(e) {
            if (e >= o) return Math.round(e / o) + "d";
            if (e >= n) return Math.round(e / n) + "h";
            if (e >= a) return Math.round(e / a) + "m";
            if (e >= r) return Math.round(e / r) + "s";
            return e + "ms"
        }(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
}, function(e, t, r) {
    (function(t) {
        var a = r(39),
            n = r(13);
        e.exports = h;
        var o, s = /\n/g,
            i = /\\n/g;
        function c() {}
        function u() {
            return "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : {}
        }
        function h(e) {
            if (a.call(this, e), this.query = this.query || {}, !o) {
                var t = u();
                o = t.___eio = t.___eio || []
            }
            this.index = o.length;
            var r = this;
            o.push(function(e) {
                r.onData(e)
            }), this.query.j = this.index, "function" == typeof addEventListener && addEventListener("beforeunload", function() {
                r.script && (r.script.onerror = c)
            }, !1)
        }
        n(h, a), h.prototype.supportsBinary = !1, h.prototype.doClose = function() {
            this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), a.prototype.doClose.call(this)
        }, h.prototype.doPoll = function() {
            var e = this,
                t = document.createElement("script");
            this.script && (this.script.parentNode.removeChild(this.script), this.script = null), t.async = !0, t.src = this.uri(), t.onerror = function(t) {
                e.onError("jsonp poll error", t)
            };
            var r = document.getElementsByTagName("script")[0];
            r ? r.parentNode.insertBefore(t, r) : (document.head || document.body).appendChild(t), this.script = t, "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function() {
                var e = document.createElement("iframe");
                document.body.appendChild(e), document.body.removeChild(e)
            }, 100)
        }, h.prototype.doWrite = function(e, t) {
            var r = this;
            if (!this.form) {
                var a, n = document.createElement("form"),
                    o = document.createElement("textarea"),
                    c = this.iframeId = "eio_iframe_" + this.index;
                n.className = "socketio", n.style.position = "absolute", n.style.top = "-1000px", n.style.left = "-1000px", n.target = c, n.method = "POST", n.setAttribute("accept-charset", "utf-8"), o.name = "d", n.appendChild(o), document.body.appendChild(n), this.form = n, this.area = o
            }
            function u() {
                h(), t()
            }
            function h() {
                if (r.iframe) try {
                    r.form.removeChild(r.iframe)
                } catch (e) {
                    r.onError("jsonp polling iframe removal error", e)
                }
                try {
                    var e = '<iframe src="javascript:0" name="' + r.iframeId + '">';
                    a = document.createElement(e)
                } catch (e) {
                    (a = document.createElement("iframe")).name = r.iframeId, a.src = "javascript:0"
                }
                a.id = r.iframeId, r.form.appendChild(a), r.iframe = a
            }
            this.form.action = this.uri(), h(), e = e.replace(i, "\\\n"), this.area.value = e.replace(s, "\\n");
            try {
                this.form.submit()
            } catch (e) {}
            this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                "complete" === r.iframe.readyState && u()
            } : this.iframe.onload = u
        }
    }).call(this, r(2))
}, function(e, t, r) {
    (function(t) {
        var a, n, o = r(25),
            s = r(6),
            i = r(12),
            c = r(13),
            u = r(41),
            h = r(14)("engine.io-client:websocket");
        if ("undefined" == typeof self) try {
            n = r(128)
        } catch (e) {} else a = self.WebSocket || self.MozWebSocket;
        var l = a || n;
        function f(e) {
            e && e.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = e.perMessageDeflate, this.usingBrowserWebSocket = a && !e.forceNode, this.protocols = e.protocols, this.usingBrowserWebSocket || (l = n), o.call(this, e)
        }
        e.exports = f, c(f, o), f.prototype.name = "websocket", f.prototype.supportsBinary = !0, f.prototype.doOpen = function() {
            if (this.check()) {
                var e = this.uri(),
                    t = this.protocols,
                    r = {
                        agent: this.agent,
                        perMessageDeflate: this.perMessageDeflate
                    };
                r.pfx = this.pfx, r.key = this.key, r.passphrase = this.passphrase, r.cert = this.cert, r.ca = this.ca, r.ciphers = this.ciphers, r.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (r.headers = this.extraHeaders), this.localAddress && (r.localAddress = this.localAddress);
                try {
                    this.ws = this.usingBrowserWebSocket && !this.isReactNative ? t ? new l(e, t) : new l(e) : new l(e, t, r)
                } catch (e) {
                    return this.emit("error", e)
                }
                void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
            }
        }, f.prototype.addEventListeners = function() {
            var e = this;
            this.ws.onopen = function() {
                e.onOpen()
            }, this.ws.onclose = function() {
                e.onClose()
            }, this.ws.onmessage = function(t) {
                e.onData(t.data)
            }, this.ws.onerror = function(t) {
                e.onError("websocket error", t)
            }
        }, f.prototype.write = function(e) {
            var r = this;
            this.writable = !1;
            for (var a = e.length, n = 0, o = a; n < o; n++) ! function(e) {
                s.encodePacket(e, r.supportsBinary, function(n) {
                    if (!r.usingBrowserWebSocket) {
                        var o = {};
                        if (e.options && (o.compress = e.options.compress), r.perMessageDeflate)("string" == typeof n ? t.byteLength(n) : n.length) < r.perMessageDeflate.threshold && (o.compress = !1)
                    }
                    try {
                        r.usingBrowserWebSocket ? r.ws.send(n) : r.ws.send(n, o)
                    } catch (e) {
                        h("websocket closed before onclose event")
                    }--a || i()
                })
            }(e[n]);
            function i() {
                r.emit("flush"), setTimeout(function() {
                    r.writable = !0, r.emit("drain")
                }, 0)
            }
        }, f.prototype.onClose = function() {
            o.prototype.onClose.call(this)
        }, f.prototype.doClose = function() {
            void 0 !== this.ws && this.ws.close()
        }, f.prototype.uri = function() {
            var e = this.query || {},
                t = this.secure ? "wss" : "ws",
                r = "";
            return this.port && ("wss" === t && 443 !== Number(this.port) || "ws" === t && 80 !== Number(this.port)) && (r = ":" + this.port), this.timestampRequests && (e[this.timestampParam] = u()), this.supportsBinary || (e.b64 = 1), (e = i.encode(e)).length && (e = "?" + e), t + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + r + this.path + e
        }, f.prototype.check = function() {
            return !(!l || "__initialize" in l && this.name === f.prototype.name)
        }
    }).call(this, r(23).Buffer)
}, function(e, t) {}, function(e, t) {
    e.exports = function(e, t) {
        for (var r = [], a = (t = t || 0) || 0; a < e.length; a++) r[a - t] = e[a];
        return r
    }
}, function(e, t) {
    function r(e) {
        e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
    }
    e.exports = r, r.prototype.duration = function() {
        var e = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
            var t = Math.random(),
                r = Math.floor(t * this.jitter * e);
            e = 0 == (1 & Math.floor(10 * t)) ? e - r : e + r
        }
        return 0 | Math.min(e, this.max)
    }, r.prototype.reset = function() {
        this.attempts = 0
    }, r.prototype.setMin = function(e) {
        this.ms = e
    }, r.prototype.setMax = function(e) {
        this.max = e
    }, r.prototype.setJitter = function(e) {
        this.jitter = e
    }
}, function(e, t, r) {
    "use strict";
    var a = r(132),
        n = r(26),
        o = r(136),
        s = r(46),
        i = r(47),
        c = r(137),
        u = r(138),
        h = r(159),
        l = r(7);
    e.exports = y, y.prototype.validate = function(e, t) {
        var r;
        if ("string" == typeof e) {
            if (!(r = this.getSchema(e))) throw new Error('no schema with key or ref "' + e + '"')
        } else {
            var a = this._addSchema(e);
            r = a.validate || this._compile(a)
        }
        var n = r(t);
        !0 !== r.$async && (this.errors = r.errors);
        return n
    }, y.prototype.compile = function(e, t) {
        var r = this._addSchema(e, void 0, t);
        return r.validate || this._compile(r)
    }, y.prototype.addSchema = function(e, t, r, a) {
        if (Array.isArray(e)) {
            for (var o = 0; o < e.length; o++) this.addSchema(e[o], void 0, r, a);
            return this
        }
        var s = this._getId(e);
        if (void 0 !== s && "string" != typeof s) throw new Error("schema id must be string");
        return C(this, t = n.normalizeId(t || s)), this._schemas[t] = this._addSchema(e, r, a, !0), this
    }, y.prototype.addMetaSchema = function(e, t, r) {
        return this.addSchema(e, t, r, !0), this
    }, y.prototype.validateSchema = function(e, t) {
        var r = e.$schema;
        if (void 0 !== r && "string" != typeof r) throw new Error("$schema must be a string");
        if (!(r = r || this._opts.defaultMeta || function(e) {
                var t = e._opts.meta;
                return e._opts.defaultMeta = "object" == typeof t ? e._getId(t) || t : e.getSchema(d) ? d : void 0, e._opts.defaultMeta
            }(this))) return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        var a, n = this._formats.uri;
        this._formats.uri = "function" == typeof n ? this._schemaUriFormatFunc : this._schemaUriFormat;
        try {
            a = this.validate(r, e)
        } finally {
            this._formats.uri = n
        }
        if (!a && t) {
            var o = "schema is invalid: " + this.errorsText();
            if ("log" != this._opts.validateSchema) throw new Error(o);
            this.logger.error(o)
        }
        return a
    }, y.prototype.getSchema = function(e) {
        var t = g(this, e);
        switch (typeof t) {
            case "object":
                return t.validate || this._compile(t);
            case "string":
                return this.getSchema(t);
            case "undefined":
                return function(e, t) {
                    var r = n.schema.call(e, {
                        schema: {}
                    }, t);
                    if (r) {
                        var o = r.schema,
                            i = r.root,
                            c = r.baseId,
                            u = a.call(e, o, i, void 0, c);
                        return e._fragments[t] = new s({
                            ref: t,
                            fragment: !0,
                            schema: o,
                            root: i,
                            baseId: c,
                            validate: u
                        }), u
                    }
                }(this, e)
        }
    }, y.prototype.removeSchema = function(e) {
        if (e instanceof RegExp) return w(this, this._schemas, e), w(this, this._refs, e), this;
        switch (typeof e) {
            case "undefined":
                return w(this, this._schemas), w(this, this._refs), this._cache.clear(), this;
            case "string":
                var t = g(this, e);
                return t && this._cache.del(t.cacheKey), delete this._schemas[e], delete this._refs[e], this;
            case "object":
                var r = this._opts.serialize,
                    a = r ? r(e) : e;
                this._cache.del(a);
                var o = this._getId(e);
                o && (o = n.normalizeId(o), delete this._schemas[o], delete this._refs[o])
        }
        return this
    }, y.prototype.addFormat = function(e, t) {
        "string" == typeof t && (t = new RegExp(t));
        return this._formats[e] = t, this
    }, y.prototype.errorsText = function(e, t) {
        if (!(e = e || this.errors)) return "No errors";
        for (var r = void 0 === (t = t || {}).separator ? ", " : t.separator, a = void 0 === t.dataVar ? "data" : t.dataVar, n = "", o = 0; o < e.length; o++) {
            var s = e[o];
            s && (n += a + s.dataPath + " " + s.message + r)
        }
        return n.slice(0, -r.length)
    }, y.prototype._addSchema = function(e, t, r, a) {
        if ("object" != typeof e && "boolean" != typeof e) throw new Error("schema should be object or boolean");
        var o = this._opts.serialize,
            i = o ? o(e) : e,
            c = this._cache.get(i);
        if (c) return c;
        a = a || !1 !== this._opts.addUsedSchema;
        var u = n.normalizeId(this._getId(e));
        u && a && C(this, u);
        var h, l = !1 !== this._opts.validateSchema && !t;
        l && !(h = u && u == n.normalizeId(e.$schema)) && this.validateSchema(e, !0);
        var f = n.ids.call(this, e),
            p = new s({
                id: u,
                schema: e,
                localRefs: f,
                cacheKey: i,
                meta: r
            });
        "#" != u[0] && a && (this._refs[u] = p);
        this._cache.put(i, p), l && h && this.validateSchema(e, !0);
        return p
    }, y.prototype._compile = function(e, t) {
        if (e.compiling) return e.validate = o, o.schema = e.schema, o.errors = null, o.root = t || o, !0 === e.schema.$async && (o.$async = !0), o;
        var r, n;
        e.compiling = !0, e.meta && (r = this._opts, this._opts = this._metaOpts);
        try {
            n = a.call(this, e.schema, t, e.localRefs)
        } catch (t) {
            throw delete e.validate, t
        } finally {
            e.compiling = !1, e.meta && (this._opts = r)
        }
        return e.validate = n, e.refs = n.refs, e.refVal = n.refVal, e.root = n.root, n;
        function o() {
            var t = e.validate,
                r = t.apply(this, arguments);
            return o.errors = t.errors, r
        }
    }, y.prototype.compileAsync = r(160);
    var f = r(161);
    y.prototype.addKeyword = f.add, y.prototype.getKeyword = f.get, y.prototype.removeKeyword = f.remove;
    var p = r(28);
    y.ValidationError = p.Validation, y.MissingRefError = p.MissingRef, y.$dataMetaSchema = h;
    var d = "http://json-schema.org/draft-07/schema",
        m = ["removeAdditional", "useDefaults", "coerceTypes"],
        v = ["/properties"];
    function y(e) {
        if (!(this instanceof y)) return new y(e);
        e = this._opts = l.copy(e) || {},
            function(e) {
                var t = e._opts.logger;
                if (!1 === t) e.logger = {
                    log: S,
                    warn: S,
                    error: S
                };
                else {
                    if (void 0 === t && (t = console), !("object" == typeof t && t.log && t.warn && t.error)) throw new Error("logger must implement log, warn and error methods");
                    e.logger = t
                }
            }(this), this._schemas = {}, this._refs = {}, this._fragments = {}, this._formats = c(e.format);
        var t = this._schemaUriFormat = this._formats["uri-reference"];
        this._schemaUriFormatFunc = function(e) {
                return t.test(e)
            }, this._cache = e.cache || new o, this._loadingSchemas = {}, this._compilations = [], this.RULES = u(), this._getId = function(e) {
                switch (e.schemaId) {
                    case "auto":
                        return E;
                    case "id":
                        return b;
                    default:
                        return P
                }
            }(e), e.loopRequired = e.loopRequired || 1 / 0, "property" == e.errorDataPath && (e._errorDataPathProperty = !0), void 0 === e.serialize && (e.serialize = i), this._metaOpts = function(e) {
                for (var t = l.copy(e._opts), r = 0; r < m.length; r++) delete t[m[r]];
                return t
            }(this), e.formats && function(e) {
                for (var t in e._opts.formats) {
                    var r = e._opts.formats[t];
                    e.addFormat(t, r)
                }
            }(this),
            function(e) {
                var t;
                e._opts.$data && (t = r(163), e.addMetaSchema(t, t.$id, !0));
                if (!1 === e._opts.meta) return;
                var a = r(164);
                e._opts.$data && (a = h(a, v));
                e.addMetaSchema(a, d, !0), e._refs["http://json-schema.org/schema"] = d
            }(this), "object" == typeof e.meta && this.addMetaSchema(e.meta), e.nullable && this.addKeyword("nullable", {
                metaSchema: {
                    const: !0
                }
            }),
            function(e) {
                var t = e._opts.schemas;
                if (!t) return;
                if (Array.isArray(t)) e.addSchema(t);
                else
                    for (var r in t) e.addSchema(t[r], r)
            }(this)
    }
    function g(e, t) {
        return t = n.normalizeId(t), e._schemas[t] || e._refs[t] || e._fragments[t]
    }
    function w(e, t, r) {
        for (var a in t) {
            var n = t[a];
            n.meta || r && !r.test(a) || (e._cache.del(n.cacheKey), delete t[a])
        }
    }
    function b(e) {
        return e.$id && this.logger.warn("schema $id ignored", e.$id), e.id
    }
    function P(e) {
        return e.id && this.logger.warn("schema id ignored", e.id), e.$id
    }
    function E(e) {
        if (e.$id && e.id && e.$id != e.id) throw new Error("schema $id is different from id");
        return e.$id || e.id
    }
    function C(e, t) {
        if (e._schemas[t] || e._refs[t]) throw new Error('schema with key or id "' + t + '" already exists')
    }
    function S() {}
}, function(e, t, r) {
    "use strict";
    var a = r(26),
        n = r(7),
        o = r(28),
        s = r(47),
        i = r(48),
        c = n.ucs2length,
        u = r(27),
        h = o.Validation;
    function l(e, t, r) {
        for (var a = 0; a < this._compilations.length; a++) {
            var n = this._compilations[a];
            if (n.schema == e && n.root == t && n.baseId == r) return a
        }
        return -1
    }
    function f(e, t) {
        return "var pattern" + e + " = new RegExp(" + n.toQuotedString(t[e]) + ");"
    }
    function p(e) {
        return "var default" + e + " = defaults[" + e + "];"
    }
    function d(e, t) {
        return void 0 === t[e] ? "" : "var refVal" + e + " = refVal[" + e + "];"
    }
    function m(e) {
        return "var customRule" + e + " = customRules[" + e + "];"
    }
    function v(e, t) {
        if (!e.length) return "";
        for (var r = "", a = 0; a < e.length; a++) r += t(a, e);
        return r
    }
    e.exports = function e(t, r, y, g) {
        var w = this,
            b = this._opts,
            P = [void 0],
            E = {},
            C = [],
            S = {},
            x = [],
            F = {},
            _ = [];
        r = r || {
            schema: t,
            refVal: P,
            refs: E
        };
        var A = function(e, t, r) {
            var a = l.call(this, e, t, r);
            return a >= 0 ? {
                index: a,
                compiling: !0
            } : (a = this._compilations.length, this._compilations[a] = {
                schema: e,
                root: t,
                baseId: r
            }, {
                index: a,
                compiling: !1
            })
        }.call(this, t, r, g);
        var R = this._compilations[A.index];
        if (A.compiling) return R.callValidate = function e() {
            var t = R.validate;
            var r = t.apply(this, arguments);
            e.errors = t.errors;
            return r
        };
        var k = this._formats;
        var D = this.RULES;
        try {
            var O = I(t, r, y, g);
            R.validate = O;
            var T = R.callValidate;
            return T && (T.schema = O.schema, T.errors = null, T.refs = O.refs, T.refVal = O.refVal, T.root = O.root, T.$async = O.$async, b.sourceCode && (T.source = O.source)), O
        } finally {
            (function(e, t, r) {
                var a = l.call(this, e, t, r);
                a >= 0 && this._compilations.splice(a, 1)
            }).call(this, t, r, g)
        }
        function I(t, s, l, y) {
            var g = !s || s && s.schema == t;
            if (s.schema != r.schema) return e.call(w, t, s, l, y);
            var S, F = !0 === t.$async,
                A = i({
                    isTop: !0,
                    schema: t,
                    isRoot: g,
                    baseId: y,
                    root: s,
                    schemaPath: "",
                    errSchemaPath: "#",
                    errorPath: '""',
                    MissingRefError: o.MissingRef,
                    RULES: D,
                    validate: i,
                    util: n,
                    resolve: a,
                    resolveRef: B,
                    usePattern: $,
                    useDefault: N,
                    useCustomRule: U,
                    opts: b,
                    formats: k,
                    logger: w.logger,
                    self: w
                });
            A = v(P, d) + v(C, f) + v(x, p) + v(_, m) + A, b.processCode && (A = b.processCode(A));
            try {
                var R = new Function("self", "RULES", "formats", "root", "refVal", "defaults", "customRules", "equal", "ucs2length", "ValidationError", A);
                S = R(w, D, k, r, P, x, _, u, c, h), P[0] = S
            } catch (e) {
                throw w.logger.error("Error compiling schema, function code:", A), e
            }
            return S.schema = t, S.errors = null, S.refs = E, S.refVal = P, S.root = g ? S : s, F && (S.$async = !0), !0 === b.sourceCode && (S.source = {
                code: A,
                patterns: C,
                defaults: x
            }), S
        }
        function B(t, n, o) {
            n = a.url(t, n);
            var s, i, c = E[n];
            if (void 0 !== c) return L(s = P[c], i = "refVal[" + c + "]");
            if (!o && r.refs) {
                var u = r.refs[n];
                if (void 0 !== u) return s = r.refVal[u], i = j(n, s), L(s, i)
            }
            i = j(n);
            var h = a.call(w, I, r, n);
            if (void 0 === h) {
                var l = y && y[n];
                l && (h = a.inlineRef(l, b.inlineRefs) ? l : e.call(w, l, r, y, t))
            }
            if (void 0 !== h) return function(e, t) {
                var r = E[e];
                P[r] = t
            }(n, h), L(h, i);
            ! function(e) {
                delete E[e]
            }(n)
        }
        function j(e, t) {
            var r = P.length;
            return P[r] = t, E[e] = r, "refVal" + r
        }
        function L(e, t) {
            return "object" == typeof e || "boolean" == typeof e ? {
                code: t,
                schema: e,
                inline: !0
            } : {
                code: t,
                $async: e && !!e.$async
            }
        }
        function $(e) {
            var t = S[e];
            return void 0 === t && (t = S[e] = C.length, C[t] = e), "pattern" + t
        }
        function N(e) {
            switch (typeof e) {
                case "boolean":
                case "number":
                    return "" + e;
                case "string":
                    return n.toQuotedString(e);
                case "object":
                    if (null === e) return "null";
                    var t = s(e),
                        r = F[t];
                    return void 0 === r && (r = F[t] = x.length, x[r] = e), "default" + r
            }
        }
        function U(e, t, r, a) {
            var n = e.definition.validateSchema;
            if (n && !1 !== w._opts.validateSchema) {
                var o = n(t);
                if (!o) {
                    var s = "keyword schema is invalid: " + w.errorsText(n.errors);
                    if ("log" != w._opts.validateSchema) throw new Error(s);
                    w.logger.error(s)
                }
            }
            var i, c = e.definition.compile,
                u = e.definition.inline,
                h = e.definition.macro;
            if (c) i = c.call(w, t, r, a);
            else if (h) i = h.call(w, t, r, a), !1 !== b.validateSchema && w.validateSchema(i, !0);
            else if (u) i = u.call(w, a, e.keyword, t, r);
            else if (!(i = e.definition.validate)) return;
            if (void 0 === i) throw new Error('custom keyword "' + e.keyword + '"failed to compile');
            var l = _.length;
            return _[l] = i, {
                code: "customRule" + l,
                validate: i
            }
        }
    }
}, function(e, t, r) {
    /** @license URI.js v4.2.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */
    ! function(e) {
        "use strict";
        function t() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            if (t.length > 1) {
                t[0] = t[0].slice(0, -1);
                for (var a = t.length - 1, n = 1; n < a; ++n) t[n] = t[n].slice(1, -1);
                return t[a] = t[a].slice(1), t.join("")
            }
            return t[0]
        }
        function r(e) {
            return "(?:" + e + ")"
        }
        function a(e) {
            return void 0 === e ? "undefined" : null === e ? "null" : Object.prototype.toString.call(e).split(" ").pop().split("]").shift().toLowerCase()
        }
        function n(e) {
            return e.toUpperCase()
        }
        function o(e) {
            var a = t("[0-9]", "[A-Fa-f]"),
                n = r(r("%[EFef]" + a + "%" + a + a + "%" + a + a) + "|" + r("%[89A-Fa-f]" + a + "%" + a + a) + "|" + r("%" + a + a)),
                o = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",
                s = t("[\\:\\/\\?\\#\\[\\]\\@]", o),
                i = e ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]",
                c = e ? "[\\uE000-\\uF8FF]" : "[]",
                u = t("[A-Za-z]", "[0-9]", "[\\-\\.\\_\\~]", i),
                h = r("[A-Za-z]" + t("[A-Za-z]", "[0-9]", "[\\+\\-\\.]") + "*"),
                l = r(r(n + "|" + t(u, o, "[\\:]")) + "*"),
                f = (r(r("25[0-5]") + "|" + r("2[0-4][0-9]") + "|" + r("1[0-9][0-9]") + "|" + r("[1-9][0-9]") + "|[0-9]"), r(r("25[0-5]") + "|" + r("2[0-4][0-9]") + "|" + r("1[0-9][0-9]") + "|" + r("0?[1-9][0-9]") + "|0?0?[0-9]")),
                p = r(f + "\\." + f + "\\." + f + "\\." + f),
                d = r(a + "{1,4}"),
                m = r(r(d + "\\:" + d) + "|" + p),
                v = r(r(d + "\\:") + "{6}" + m),
                y = r("\\:\\:" + r(d + "\\:") + "{5}" + m),
                g = r(r(d) + "?\\:\\:" + r(d + "\\:") + "{4}" + m),
                w = r(r(r(d + "\\:") + "{0,1}" + d) + "?\\:\\:" + r(d + "\\:") + "{3}" + m),
                b = r(r(r(d + "\\:") + "{0,2}" + d) + "?\\:\\:" + r(d + "\\:") + "{2}" + m),
                P = r(r(r(d + "\\:") + "{0,3}" + d) + "?\\:\\:" + d + "\\:" + m),
                E = r(r(r(d + "\\:") + "{0,4}" + d) + "?\\:\\:" + m),
                C = r(r(r(d + "\\:") + "{0,5}" + d) + "?\\:\\:" + d),
                S = r(r(r(d + "\\:") + "{0,6}" + d) + "?\\:\\:"),
                x = r([v, y, g, w, b, P, E, C, S].join("|")),
                F = r(r(u + "|" + n) + "+"),
                _ = (r(x + "\\%25" + F), r(x + r("\\%25|\\%(?!" + a + "{2})") + F)),
                A = r("[vV]" + a + "+\\." + t(u, o, "[\\:]") + "+"),
                R = r("\\[" + r(_ + "|" + x + "|" + A) + "\\]"),
                k = r(r(n + "|" + t(u, o)) + "*"),
                D = r(R + "|" + p + "(?!" + k + ")|" + k),
                O = r("[0-9]*"),
                T = r(r(l + "@") + "?" + D + r("\\:" + O) + "?"),
                I = r(n + "|" + t(u, o, "[\\:\\@]")),
                B = r(I + "*"),
                j = r(I + "+"),
                L = r(r(n + "|" + t(u, o, "[\\@]")) + "+"),
                $ = r(r("\\/" + B) + "*"),
                N = r("\\/" + r(j + $) + "?"),
                U = r(L + $),
                q = r(j + $),
                M = "(?!" + I + ")",
                z = (r($ + "|" + N + "|" + U + "|" + q + "|" + M), r(r(I + "|" + t("[\\/\\?]", c)) + "*")),
                H = r(r(I + "|[\\/\\?]") + "*"),
                V = r(r("\\/\\/" + T + $) + "|" + N + "|" + q + "|" + M),
                Q = r(h + "\\:" + V + r("\\?" + z) + "?" + r("\\#" + H) + "?"),
                Y = r(r("\\/\\/" + T + $) + "|" + N + "|" + U + "|" + M),
                J = r(Y + r("\\?" + z) + "?" + r("\\#" + H) + "?");
            return r(Q + "|" + J), r(h + "\\:" + V + r("\\?" + z) + "?"), r(r("\\/\\/(" + r("(" + l + ")@") + "?(" + D + ")" + r("\\:(" + O + ")") + "?)") + "?(" + $ + "|" + N + "|" + q + "|" + M + ")"), r("\\?(" + z + ")"), r("\\#(" + H + ")"), r(r("\\/\\/(" + r("(" + l + ")@") + "?(" + D + ")" + r("\\:(" + O + ")") + "?)") + "?(" + $ + "|" + N + "|" + U + "|" + M + ")"), r("\\?(" + z + ")"), r("\\#(" + H + ")"), r(r("\\/\\/(" + r("(" + l + ")@") + "?(" + D + ")" + r("\\:(" + O + ")") + "?)") + "?(" + $ + "|" + N + "|" + q + "|" + M + ")"), r("\\?(" + z + ")"), r("\\#(" + H + ")"), r("(" + l + ")@"), r("\\:(" + O + ")"), {
                NOT_SCHEME: new RegExp(t("[^]", "[A-Za-z]", "[0-9]", "[\\+\\-\\.]"), "g"),
                NOT_USERINFO: new RegExp(t("[^\\%\\:]", u, o), "g"),
                NOT_HOST: new RegExp(t("[^\\%\\[\\]\\:]", u, o), "g"),
                NOT_PATH: new RegExp(t("[^\\%\\/\\:\\@]", u, o), "g"),
                NOT_PATH_NOSCHEME: new RegExp(t("[^\\%\\/\\@]", u, o), "g"),
                NOT_QUERY: new RegExp(t("[^\\%]", u, o, "[\\:\\@\\/\\?]", c), "g"),
                NOT_FRAGMENT: new RegExp(t("[^\\%]", u, o, "[\\:\\@\\/\\?]"), "g"),
                ESCAPE: new RegExp(t("[^]", u, o), "g"),
                UNRESERVED: new RegExp(u, "g"),
                OTHER_CHARS: new RegExp(t("[^\\%]", u, s), "g"),
                PCT_ENCODED: new RegExp(n, "g"),
                IPV4ADDRESS: new RegExp("^(" + p + ")$"),
                IPV6ADDRESS: new RegExp("^\\[?(" + x + ")" + r(r("\\%25|\\%(?!" + a + "{2})") + "(" + F + ")") + "?\\]?$")
            }
        }
        var s = o(!1),
            i = o(!0),
            c = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function(e, t) {
                    var r = [],
                        a = !0,
                        n = !1,
                        o = void 0;
                    try {
                        for (var s, i = e[Symbol.iterator](); !(a = (s = i.next()).done) && (r.push(s.value), !t || r.length !== t); a = !0);
                    } catch (e) {
                        n = !0, o = e
                    } finally {
                        try {
                            !a && i.return && i.return()
                        } finally {
                            if (n) throw o
                        }
                    }
                    return r
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            u = 2147483647,
            h = /^xn--/,
            l = /[^\0-\x7E]/,
            f = /[\x2E\u3002\uFF0E\uFF61]/g,
            p = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input"
            },
            d = Math.floor,
            m = String.fromCharCode;
        function v(e) {
            throw new RangeError(p[e])
        }
        function y(e, t) {
            var r = e.split("@"),
                a = "";
            r.length > 1 && (a = r[0] + "@", e = r[1]);
            var n = (e = e.replace(f, ".")).split("."),
                o = function(e, t) {
                    for (var r = [], a = e.length; a--;) r[a] = t(e[a]);
                    return r
                }(n, t).join(".");
            return a + o
        }
        function g(e) {
            for (var t = [], r = 0, a = e.length; r < a;) {
                var n = e.charCodeAt(r++);
                if (n >= 55296 && n <= 56319 && r < a) {
                    var o = e.charCodeAt(r++);
                    56320 == (64512 & o) ? t.push(((1023 & n) << 10) + (1023 & o) + 65536) : (t.push(n), r--)
                } else t.push(n)
            }
            return t
        }
        var w = function(e) {
                return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : 36
            },
            b = function(e, t) {
                return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
            },
            P = function(e, t, r) {
                var a = 0;
                for (e = r ? d(e / 700) : e >> 1, e += d(e / t); e > 455; a += 36) e = d(e / 35);
                return d(a + 36 * e / (e + 38))
            },
            E = function(e) {
                var t = [],
                    r = e.length,
                    a = 0,
                    n = 128,
                    o = 72,
                    s = e.lastIndexOf("-");
                s < 0 && (s = 0);
                for (var i = 0; i < s; ++i) e.charCodeAt(i) >= 128 && v("not-basic"), t.push(e.charCodeAt(i));
                for (var c = s > 0 ? s + 1 : 0; c < r;) {
                    for (var h = a, l = 1, f = 36;; f += 36) {
                        c >= r && v("invalid-input");
                        var p = w(e.charCodeAt(c++));
                        (p >= 36 || p > d((u - a) / l)) && v("overflow"), a += p * l;
                        var m = f <= o ? 1 : f >= o + 26 ? 26 : f - o;
                        if (p < m) break;
                        var y = 36 - m;
                        l > d(u / y) && v("overflow"), l *= y
                    }
                    var g = t.length + 1;
                    o = P(a - h, g, 0 == h), d(a / g) > u - n && v("overflow"), n += d(a / g), a %= g, t.splice(a++, 0, n)
                }
                return String.fromCodePoint.apply(String, t)
            },
            C = function(e) {
                var t = [],
                    r = (e = g(e)).length,
                    a = 128,
                    n = 0,
                    o = 72,
                    s = !0,
                    i = !1,
                    c = void 0;
                try {
                    for (var h, l = e[Symbol.iterator](); !(s = (h = l.next()).done); s = !0) {
                        var f = h.value;
                        f < 128 && t.push(m(f))
                    }
                } catch (e) {
                    i = !0, c = e
                } finally {
                    try {
                        !s && l.return && l.return()
                    } finally {
                        if (i) throw c
                    }
                }
                var p = t.length,
                    y = p;
                for (p && t.push("-"); y < r;) {
                    var w = u,
                        E = !0,
                        C = !1,
                        S = void 0;
                    try {
                        for (var x, F = e[Symbol.iterator](); !(E = (x = F.next()).done); E = !0) {
                            var _ = x.value;
                            _ >= a && _ < w && (w = _)
                        }
                    } catch (e) {
                        C = !0, S = e
                    } finally {
                        try {
                            !E && F.return && F.return()
                        } finally {
                            if (C) throw S
                        }
                    }
                    var A = y + 1;
                    w - a > d((u - n) / A) && v("overflow"), n += (w - a) * A, a = w;
                    var R = !0,
                        k = !1,
                        D = void 0;
                    try {
                        for (var O, T = e[Symbol.iterator](); !(R = (O = T.next()).done); R = !0) {
                            var I = O.value;
                            if (I < a && ++n > u && v("overflow"), I == a) {
                                for (var B = n, j = 36;; j += 36) {
                                    var L = j <= o ? 1 : j >= o + 26 ? 26 : j - o;
                                    if (B < L) break;
                                    var $ = B - L,
                                        N = 36 - L;
                                    t.push(m(b(L + $ % N, 0))), B = d($ / N)
                                }
                                t.push(m(b(B, 0))), o = P(n, A, y == p), n = 0, ++y
                            }
                        }
                    } catch (e) {
                        k = !0, D = e
                    } finally {
                        try {
                            !R && T.return && T.return()
                        } finally {
                            if (k) throw D
                        }
                    }++n, ++a
                }
                return t.join("")
            },
            S = {
                version: "2.1.0",
                ucs2: {
                    decode: g,
                    encode: function(e) {
                        return String.fromCodePoint.apply(String, function(e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                                return r
                            }
                            return Array.from(e)
                        }(e))
                    }
                },
                decode: E,
                encode: C,
                toASCII: function(e) {
                    return y(e, function(e) {
                        return l.test(e) ? "xn--" + C(e) : e
                    })
                },
                toUnicode: function(e) {
                    return y(e, function(e) {
                        return h.test(e) ? E(e.slice(4).toLowerCase()) : e
                    })
                }
            },
            x = {};
        function F(e) {
            var t = e.charCodeAt(0);
            return t < 16 ? "%0" + t.toString(16).toUpperCase() : t < 128 ? "%" + t.toString(16).toUpperCase() : t < 2048 ? "%" + (t >> 6 | 192).toString(16).toUpperCase() + "%" + (63 & t | 128).toString(16).toUpperCase() : "%" + (t >> 12 | 224).toString(16).toUpperCase() + "%" + (t >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (63 & t | 128).toString(16).toUpperCase()
        }
        function _(e) {
            for (var t = "", r = 0, a = e.length; r < a;) {
                var n = parseInt(e.substr(r + 1, 2), 16);
                if (n < 128) t += String.fromCharCode(n), r += 3;
                else if (n >= 194 && n < 224) {
                    if (a - r >= 6) {
                        var o = parseInt(e.substr(r + 4, 2), 16);
                        t += String.fromCharCode((31 & n) << 6 | 63 & o)
                    } else t += e.substr(r, 6);
                    r += 6
                } else if (n >= 224) {
                    if (a - r >= 9) {
                        var s = parseInt(e.substr(r + 4, 2), 16),
                            i = parseInt(e.substr(r + 7, 2), 16);
                        t += String.fromCharCode((15 & n) << 12 | (63 & s) << 6 | 63 & i)
                    } else t += e.substr(r, 9);
                    r += 9
                } else t += e.substr(r, 3), r += 3
            }
            return t
        }
        function A(e, t) {
            function r(e) {
                var r = _(e);
                return r.match(t.UNRESERVED) ? r : e
            }
            return e.scheme && (e.scheme = String(e.scheme).replace(t.PCT_ENCODED, r).toLowerCase().replace(t.NOT_SCHEME, "")), void 0 !== e.userinfo && (e.userinfo = String(e.userinfo).replace(t.PCT_ENCODED, r).replace(t.NOT_USERINFO, F).replace(t.PCT_ENCODED, n)), void 0 !== e.host && (e.host = String(e.host).replace(t.PCT_ENCODED, r).toLowerCase().replace(t.NOT_HOST, F).replace(t.PCT_ENCODED, n)), void 0 !== e.path && (e.path = String(e.path).replace(t.PCT_ENCODED, r).replace(e.scheme ? t.NOT_PATH : t.NOT_PATH_NOSCHEME, F).replace(t.PCT_ENCODED, n)), void 0 !== e.query && (e.query = String(e.query).replace(t.PCT_ENCODED, r).replace(t.NOT_QUERY, F).replace(t.PCT_ENCODED, n)), void 0 !== e.fragment && (e.fragment = String(e.fragment).replace(t.PCT_ENCODED, r).replace(t.NOT_FRAGMENT, F).replace(t.PCT_ENCODED, n)), e
        }
        function R(e) {
            return e.replace(/^0*(.*)/, "$1") || "0"
        }
        function k(e, t) {
            var r = e.match(t.IPV4ADDRESS) || [],
                a = c(r, 2),
                n = a[1];
            return n ? n.split(".").map(R).join(".") : e
        }
        function D(e, t) {
            var r = e.match(t.IPV6ADDRESS) || [],
                a = c(r, 3),
                n = a[1],
                o = a[2];
            if (n) {
                for (var s = n.toLowerCase().split("::").reverse(), i = c(s, 2), u = i[0], h = i[1], l = h ? h.split(":").map(R) : [], f = u.split(":").map(R), p = t.IPV4ADDRESS.test(f[f.length - 1]), d = p ? 7 : 8, m = f.length - d, v = Array(d), y = 0; y < d; ++y) v[y] = l[y] || f[m + y] || "";
                p && (v[d - 1] = k(v[d - 1], t));
                var g = v.reduce(function(e, t, r) {
                        if (!t || "0" === t) {
                            var a = e[e.length - 1];
                            a && a.index + a.length === r ? a.length++ : e.push({
                                index: r,
                                length: 1
                            })
                        }
                        return e
                    }, []),
                    w = g.sort(function(e, t) {
                        return t.length - e.length
                    })[0],
                    b = void 0;
                if (w && w.length > 1) {
                    var P = v.slice(0, w.index),
                        E = v.slice(w.index + w.length);
                    b = P.join(":") + "::" + E.join(":")
                } else b = v.join(":");
                return o && (b += "%" + o), b
            }
            return e
        }
        var O = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i,
            T = void 0 === "".match(/(){0}/)[1];
        function I(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = {},
                a = !1 !== t.iri ? i : s;
            "suffix" === t.reference && (e = (t.scheme ? t.scheme + ":" : "") + "//" + e);
            var n = e.match(O);
            if (n) {
                T ? (r.scheme = n[1], r.userinfo = n[3], r.host = n[4], r.port = parseInt(n[5], 10), r.path = n[6] || "", r.query = n[7], r.fragment = n[8], isNaN(r.port) && (r.port = n[5])) : (r.scheme = n[1] || void 0, r.userinfo = -1 !== e.indexOf("@") ? n[3] : void 0, r.host = -1 !== e.indexOf("//") ? n[4] : void 0, r.port = parseInt(n[5], 10), r.path = n[6] || "", r.query = -1 !== e.indexOf("?") ? n[7] : void 0, r.fragment = -1 !== e.indexOf("#") ? n[8] : void 0, isNaN(r.port) && (r.port = e.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? n[4] : void 0)), r.host && (r.host = D(k(r.host, a), a)), void 0 !== r.scheme || void 0 !== r.userinfo || void 0 !== r.host || void 0 !== r.port || r.path || void 0 !== r.query ? void 0 === r.scheme ? r.reference = "relative" : void 0 === r.fragment ? r.reference = "absolute" : r.reference = "uri" : r.reference = "same-document", t.reference && "suffix" !== t.reference && t.reference !== r.reference && (r.error = r.error || "URI is not a " + t.reference + " reference.");
                var o = x[(t.scheme || r.scheme || "").toLowerCase()];
                if (t.unicodeSupport || o && o.unicodeSupport) A(r, a);
                else {
                    if (r.host && (t.domainHost || o && o.domainHost)) try {
                        r.host = S.toASCII(r.host.replace(a.PCT_ENCODED, _).toLowerCase())
                    } catch (e) {
                        r.error = r.error || "Host's domain name can not be converted to ASCII via punycode: " + e
                    }
                    A(r, s)
                }
                o && o.parse && o.parse(r, t)
            } else r.error = r.error || "URI can not be parsed.";
            return r
        }
        var B = /^\.\.?\//,
            j = /^\/\.(\/|$)/,
            L = /^\/\.\.(\/|$)/,
            $ = /^\/?(?:.|\n)*?(?=\/|$)/;
        function N(e) {
            for (var t = []; e.length;)
                if (e.match(B)) e = e.replace(B, "");
                else if (e.match(j)) e = e.replace(j, "/");
            else if (e.match(L)) e = e.replace(L, "/"), t.pop();
            else if ("." === e || ".." === e) e = "";
            else {
                var r = e.match($);
                if (!r) throw new Error("Unexpected dot segment condition");
                var a = r[0];
                e = e.slice(a.length), t.push(a)
            }
            return t.join("")
        }
        function U(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = t.iri ? i : s,
                a = [],
                n = x[(t.scheme || e.scheme || "").toLowerCase()];
            if (n && n.serialize && n.serialize(e, t), e.host)
                if (r.IPV6ADDRESS.test(e.host));
                else if (t.domainHost || n && n.domainHost) try {
                e.host = t.iri ? S.toUnicode(e.host) : S.toASCII(e.host.replace(r.PCT_ENCODED, _).toLowerCase())
            } catch (r) {
                e.error = e.error || "Host's domain name can not be converted to " + (t.iri ? "Unicode" : "ASCII") + " via punycode: " + r
            }
            A(e, r), "suffix" !== t.reference && e.scheme && (a.push(e.scheme), a.push(":"));
            var o = function(e, t) {
                var r = !1 !== t.iri ? i : s,
                    a = [];
                return void 0 !== e.userinfo && (a.push(e.userinfo), a.push("@")), void 0 !== e.host && a.push(D(k(String(e.host), r), r).replace(r.IPV6ADDRESS, function(e, t, r) {
                    return "[" + t + (r ? "%25" + r : "") + "]"
                })), "number" == typeof e.port && (a.push(":"), a.push(e.port.toString(10))), a.length ? a.join("") : void 0
            }(e, t);
            if (void 0 !== o && ("suffix" !== t.reference && a.push("//"), a.push(o), e.path && "/" !== e.path.charAt(0) && a.push("/")), void 0 !== e.path) {
                var c = e.path;
                t.absolutePath || n && n.absolutePath || (c = N(c)), void 0 === o && (c = c.replace(/^\/\//, "/%2F")), a.push(c)
            }
            return void 0 !== e.query && (a.push("?"), a.push(e.query)), void 0 !== e.fragment && (a.push("#"), a.push(e.fragment)), a.join("")
        }
        function q(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = arguments[3],
                n = {};
            return a || (e = I(U(e, r), r), t = I(U(t, r), r)), !(r = r || {}).tolerant && t.scheme ? (n.scheme = t.scheme, n.userinfo = t.userinfo, n.host = t.host, n.port = t.port, n.path = N(t.path || ""), n.query = t.query) : (void 0 !== t.userinfo || void 0 !== t.host || void 0 !== t.port ? (n.userinfo = t.userinfo, n.host = t.host, n.port = t.port, n.path = N(t.path || ""), n.query = t.query) : (t.path ? ("/" === t.path.charAt(0) ? n.path = N(t.path) : (void 0 === e.userinfo && void 0 === e.host && void 0 === e.port || e.path ? e.path ? n.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path : n.path = t.path : n.path = "/" + t.path, n.path = N(n.path)), n.query = t.query) : (n.path = e.path, void 0 !== t.query ? n.query = t.query : n.query = e.query), n.userinfo = e.userinfo, n.host = e.host, n.port = e.port), n.scheme = e.scheme), n.fragment = t.fragment, n
        }
        function M(e, t) {
            return e && e.toString().replace(t && t.iri ? i.PCT_ENCODED : s.PCT_ENCODED, _)
        }
        var z = {
                scheme: "http",
                domainHost: !0,
                parse: function(e, t) {
                    return e.host || (e.error = e.error || "HTTP URIs must have a host."), e
                },
                serialize: function(e, t) {
                    return e.port !== ("https" !== String(e.scheme).toLowerCase() ? 80 : 443) && "" !== e.port || (e.port = void 0), e.path || (e.path = "/"), e
                }
            },
            H = {
                scheme: "https",
                domainHost: z.domainHost,
                parse: z.parse,
                serialize: z.serialize
            },
            V = {},
            Q = "[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]",
            Y = "[0-9A-Fa-f]",
            J = r(r("%[EFef][0-9A-Fa-f]%" + Y + Y + "%" + Y + Y) + "|" + r("%[89A-Fa-f][0-9A-Fa-f]%" + Y + Y) + "|" + r("%" + Y + Y)),
            K = t("[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", '[\\"\\\\]'),
            X = new RegExp(Q, "g"),
            W = new RegExp(J, "g"),
            G = new RegExp(t("[^]", "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", "[\\.]", '[\\"]', K), "g"),
            Z = new RegExp(t("[^]", Q, "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]"), "g"),
            ee = Z;
        function te(e) {
            var t = _(e);
            return t.match(X) ? t : e
        }
        var re = {
                scheme: "mailto",
                parse: function(e, t) {
                    var r = e,
                        a = r.to = r.path ? r.path.split(",") : [];
                    if (r.path = void 0, r.query) {
                        for (var n = !1, o = {}, s = r.query.split("&"), i = 0, c = s.length; i < c; ++i) {
                            var u = s[i].split("=");
                            switch (u[0]) {
                                case "to":
                                    for (var h = u[1].split(","), l = 0, f = h.length; l < f; ++l) a.push(h[l]);
                                    break;
                                case "subject":
                                    r.subject = M(u[1], t);
                                    break;
                                case "body":
                                    r.body = M(u[1], t);
                                    break;
                                default:
                                    n = !0, o[M(u[0], t)] = M(u[1], t)
                            }
                        }
                        n && (r.headers = o)
                    }
                    r.query = void 0;
                    for (var p = 0, d = a.length; p < d; ++p) {
                        var m = a[p].split("@");
                        if (m[0] = M(m[0]), t.unicodeSupport) m[1] = M(m[1], t).toLowerCase();
                        else try {
                            m[1] = S.toASCII(M(m[1], t).toLowerCase())
                        } catch (e) {
                            r.error = r.error || "Email address's domain name can not be converted to ASCII via punycode: " + e
                        }
                        a[p] = m.join("@")
                    }
                    return r
                },
                serialize: function(e, t) {
                    var r = e,
                        a = function(e) {
                            return void 0 !== e && null !== e ? e instanceof Array ? e : "number" != typeof e.length || e.split || e.setInterval || e.call ? [e] : Array.prototype.slice.call(e) : []
                        }(e.to);
                    if (a) {
                        for (var o = 0, s = a.length; o < s; ++o) {
                            var i = String(a[o]),
                                c = i.lastIndexOf("@"),
                                u = i.slice(0, c).replace(W, te).replace(W, n).replace(G, F),
                                h = i.slice(c + 1);
                            try {
                                h = t.iri ? S.toUnicode(h) : S.toASCII(M(h, t).toLowerCase())
                            } catch (e) {
                                r.error = r.error || "Email address's domain name can not be converted to " + (t.iri ? "Unicode" : "ASCII") + " via punycode: " + e
                            }
                            a[o] = u + "@" + h
                        }
                        r.path = a.join(",")
                    }
                    var l = e.headers = e.headers || {};
                    e.subject && (l.subject = e.subject), e.body && (l.body = e.body);
                    var f = [];
                    for (var p in l) l[p] !== V[p] && f.push(p.replace(W, te).replace(W, n).replace(Z, F) + "=" + l[p].replace(W, te).replace(W, n).replace(ee, F));
                    return f.length && (r.query = f.join("&")), r
                }
            },
            ae = /^([^\:]+)\:(.*)/,
            ne = {
                scheme: "urn",
                parse: function(e, t) {
                    var r = e.path && e.path.match(ae),
                        a = e;
                    if (r) {
                        var n = t.scheme || a.scheme || "urn",
                            o = r[1].toLowerCase(),
                            s = r[2],
                            i = n + ":" + (t.nid || o),
                            c = x[i];
                        a.nid = o, a.nss = s, a.path = void 0, c && (a = c.parse(a, t))
                    } else a.error = a.error || "URN can not be parsed.";
                    return a
                },
                serialize: function(e, t) {
                    var r = t.scheme || e.scheme || "urn",
                        a = e.nid,
                        n = r + ":" + (t.nid || a),
                        o = x[n];
                    o && (e = o.serialize(e, t));
                    var s = e,
                        i = e.nss;
                    return s.path = (a || t.nid) + ":" + i, s
                }
            },
            oe = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/,
            se = {
                scheme: "urn:uuid",
                parse: function(e, t) {
                    var r = e;
                    return r.uuid = r.nss, r.nss = void 0, t.tolerant || r.uuid && r.uuid.match(oe) || (r.error = r.error || "UUID is not valid."), r
                },
                serialize: function(e, t) {
                    var r = e;
                    return r.nss = (e.uuid || "").toLowerCase(), r
                }
            };
        x[z.scheme] = z, x[H.scheme] = H, x[re.scheme] = re, x[ne.scheme] = ne, x[se.scheme] = se, e.SCHEMES = x, e.pctEncChar = F, e.pctDecChars = _, e.parse = I, e.removeDotSegments = N, e.serialize = U, e.resolveComponents = q, e.resolve = function(e, t, r) {
            var a = function(e, t) {
                var r = e;
                if (t)
                    for (var a in t) r[a] = t[a];
                return r
            }({
                scheme: "null"
            }, r);
            return U(q(I(e, a), I(t, a), a, !0), a)
        }, e.normalize = function(e, t) {
            return "string" == typeof e ? e = U(I(e, t), t) : "object" === a(e) && (e = I(U(e, t), t)), e
        }, e.equal = function(e, t, r) {
            return "string" == typeof e ? e = U(I(e, r), r) : "object" === a(e) && (e = U(e, r)), "string" == typeof t ? t = U(I(t, r), r) : "object" === a(t) && (t = U(t, r)), e === t
        }, e.escapeComponent = function(e, t) {
            return e && e.toString().replace(t && t.iri ? i.ESCAPE : s.ESCAPE, F)
        }, e.unescapeComponent = M, Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }(t)
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        for (var t, r = 0, a = e.length, n = 0; n < a;) r++, (t = e.charCodeAt(n++)) >= 55296 && t <= 56319 && n < a && 56320 == (64512 & (t = e.charCodeAt(n))) && n++;
        return r
    }
}, function(e, t, r) {
    "use strict";
    var a = e.exports = function(e, t, r) {
        "function" == typeof t && (r = t, t = {}),
            function e(t, r, o, s, i, c, u, h, l, f) {
                if (s && "object" == typeof s && !Array.isArray(s)) {
                    for (var p in r(s, i, c, u, h, l, f), s) {
                        var d = s[p];
                        if (Array.isArray(d)) {
                            if (p in a.arrayKeywords)
                                for (var m = 0; m < d.length; m++) e(t, r, o, d[m], i + "/" + p + "/" + m, c, i, p, s, m)
                        } else if (p in a.propsKeywords) {
                            if (d && "object" == typeof d)
                                for (var v in d) e(t, r, o, d[v], i + "/" + p + "/" + n(v), c, i, p, s, v)
                        } else(p in a.keywords || t.allKeys && !(p in a.skipKeywords)) && e(t, r, o, d, i + "/" + p, c, i, p, s)
                    }
                    o(s, i, c, u, h, l, f)
                }
            }(t, "function" == typeof(r = t.cb || r) ? r : r.pre || function() {}, r.post || function() {}, e, "", e)
    };
    function n(e) {
        return e.replace(/~/g, "~0").replace(/\//g, "~1")
    }
    a.keywords = {
        additionalItems: !0,
        items: !0,
        contains: !0,
        additionalProperties: !0,
        propertyNames: !0,
        not: !0
    }, a.arrayKeywords = {
        items: !0,
        allOf: !0,
        anyOf: !0,
        oneOf: !0
    }, a.propsKeywords = {
        definitions: !0,
        properties: !0,
        patternProperties: !0,
        dependencies: !0
    }, a.skipKeywords = {
        default: !0,
        enum: !0,
        const: !0,
        required: !0,
        maximum: !0,
        minimum: !0,
        exclusiveMaximum: !0,
        exclusiveMinimum: !0,
        multipleOf: !0,
        maxLength: !0,
        minLength: !0,
        pattern: !0,
        format: !0,
        maxItems: !0,
        minItems: !0,
        uniqueItems: !0,
        maxProperties: !0,
        minProperties: !0
    }
}, function(e, t, r) {
    "use strict";
    var a = e.exports = function() {
        this._cache = {}
    };
    a.prototype.put = function(e, t) {
        this._cache[e] = t
    }, a.prototype.get = function(e) {
        return this._cache[e]
    }, a.prototype.del = function(e) {
        delete this._cache[e]
    }, a.prototype.clear = function() {
        this._cache = {}
    }
}, function(e, t, r) {
    "use strict";
    var a = r(7),
        n = /^(\d\d\d\d)-(\d\d)-(\d\d)$/,
        o = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        s = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d:\d\d)?$/i,
        i = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*$/i,
        c = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
        u = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
        h = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i,
        l = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
        f = /^(?:\/(?:[^~/]|~0|~1)*)*$/,
        p = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
        d = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
    function m(e) {
        return e = "full" == e ? "full" : "fast", a.copy(m[e])
    }
    function v(e) {
        var t = e.match(n);
        if (!t) return !1;
        var r = +t[1],
            a = +t[2],
            s = +t[3];
        return a >= 1 && a <= 12 && s >= 1 && s <= (2 == a && function(e) {
            return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
        }(r) ? 29 : o[a])
    }
    function y(e, t) {
        var r = e.match(s);
        if (!r) return !1;
        var a = r[1],
            n = r[2],
            o = r[3],
            i = r[5];
        return (a <= 23 && n <= 59 && o <= 59 || 23 == a && 59 == n && 60 == o) && (!t || i)
    }
    e.exports = m, m.fast = {
        date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
        time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i,
        "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d:\d\d)$/i,
        uri: /^(?:[a-z][a-z0-9+-.]*:)(?:\/?\/)?[^\s]*$/i,
        "uri-reference": /^(?:(?:[a-z][a-z0-9+-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
        "uri-template": u,
        url: h,
        email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
        hostname: i,
        ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
        ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
        regex: P,
        uuid: l,
        "json-pointer": f,
        "json-pointer-uri-fragment": p,
        "relative-json-pointer": d
    }, m.full = {
        date: v,
        time: y,
        "date-time": function(e) {
            var t = e.split(g);
            return 2 == t.length && v(t[0]) && y(t[1], !0)
        },
        uri: function(e) {
            return w.test(e) && c.test(e)
        },
        "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
        "uri-template": u,
        url: h,
        email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
        hostname: function(e) {
            return e.length <= 255 && i.test(e)
        },
        ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
        ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
        regex: P,
        uuid: l,
        "json-pointer": f,
        "json-pointer-uri-fragment": p,
        "relative-json-pointer": d
    };
    var g = /t|\s/i;
    var w = /\/|:/;
    var b = /[^\\]\\Z/;
    function P(e) {
        if (b.test(e)) return !1;
        try {
            return new RegExp(e), !0
        } catch (e) {
            return !1
        }
    }
}, function(e, t, r) {
    "use strict";
    var a = r(139),
        n = r(7).toHash;
    e.exports = function() {
        var e = [{
                type: "number",
                rules: [{
                    maximum: ["exclusiveMaximum"]
                }, {
                    minimum: ["exclusiveMinimum"]
                }, "multipleOf", "format"]
            }, {
                type: "string",
                rules: ["maxLength", "minLength", "pattern", "format"]
            }, {
                type: "array",
                rules: ["maxItems", "minItems", "items", "contains", "uniqueItems"]
            }, {
                type: "object",
                rules: ["maxProperties", "minProperties", "required", "dependencies", "propertyNames", {
                    properties: ["additionalProperties", "patternProperties"]
                }]
            }, {
                rules: ["$ref", "const", "enum", "not", "anyOf", "oneOf", "allOf", "if"]
            }],
            t = ["type", "$comment"];
        return e.all = n(t), e.types = n(["number", "integer", "string", "array", "object", "boolean", "null"]), e.forEach(function(r) {
            r.rules = r.rules.map(function(r) {
                var n;
                if ("object" == typeof r) {
                    var o = Object.keys(r)[0];
                    n = r[o], r = o, n.forEach(function(r) {
                        t.push(r), e.all[r] = !0
                    })
                }
                return t.push(r), e.all[r] = {
                    keyword: r,
                    code: a[r],
                    implements: n
                }
            }), e.all.$comment = {
                keyword: "$comment",
                code: a.$comment
            }, r.type && (e.types[r.type] = r)
        }), e.keywords = n(t.concat(["$schema", "$id", "id", "$data", "title", "description", "default", "definitions", "examples", "readOnly", "writeOnly", "contentMediaType", "contentEncoding", "additionalItems", "then", "else"])), e.custom = {}, e
    }
}, function(e, t, r) {
    "use strict";
    e.exports = {
        $ref: r(140),
        allOf: r(141),
        anyOf: r(142),
        $comment: r(143),
        const: r(144),
        contains: r(145),
        dependencies: r(146),
        enum: r(147),
        format: r(148),
        if: r(149),
        items: r(150),
        maximum: r(49),
        minimum: r(49),
        maxItems: r(50),
        minItems: r(50),
        maxLength: r(51),
        minLength: r(51),
        maxProperties: r(52),
        minProperties: r(52),
        multipleOf: r(151),
        not: r(152),
        oneOf: r(153),
        pattern: r(154),
        properties: r(155),
        propertyNames: r(156),
        required: r(157),
        uniqueItems: r(158),
        validate: r(48)
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r) {
        var a, n, o = " ",
            s = e.level,
            i = e.dataLevel,
            c = e.schema[t],
            u = e.errSchemaPath + "/" + t,
            h = !e.opts.allErrors,
            l = "data" + (i || ""),
            f = "valid" + s;
        if ("#" == c || "#/" == c) e.isRoot ? (a = e.async, n = "validate") : (a = !0 === e.root.schema.$async, n = "root.refVal[0]");
        else {
            var p = e.resolveRef(e.baseId, c, e.isRoot);
            if (void 0 === p) {
                var d = e.MissingRefError.message(e.baseId, c);
                if ("fail" == e.opts.missingRefs) {
                    e.logger.error(d), (g = g || []).push(o), o = "", !1 !== e.createErrors ? (o += " { keyword: '$ref' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { ref: '" + e.util.escapeQuotes(c) + "' } ", !1 !== e.opts.messages && (o += " , message: 'can\\'t resolve reference " + e.util.escapeQuotes(c) + "' "), e.opts.verbose && (o += " , schema: " + e.util.toQuotedString(c) + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " "), o += " } ") : o += " {} ";
                    var m = o;
                    o = g.pop(), !e.compositeRule && h ? e.async ? o += " throw new ValidationError([" + m + "]); " : o += " validate.errors = [" + m + "]; return false; " : o += " var err = " + m + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", h && (o += " if (false) { ")
                } else {
                    if ("ignore" != e.opts.missingRefs) throw new e.MissingRefError(e.baseId, c, d);
                    e.logger.warn(d), h && (o += " if (true) { ")
                }
            } else if (p.inline) {
                var v = e.util.copy(e);
                v.level++;
                var y = "valid" + v.level;
                v.schema = p.schema, v.schemaPath = "", v.errSchemaPath = c, o += " " + e.validate(v).replace(/validate\.schema/g, p.code) + " ", h && (o += " if (" + y + ") { ")
            } else a = !0 === p.$async || e.async && !1 !== p.$async, n = p.code
        }
        if (n) {
            var g;
            (g = g || []).push(o), o = "", e.opts.passContext ? o += " " + n + ".call(this, " : o += " " + n + "( ", o += " " + l + ", (dataPath || '')", '""' != e.errorPath && (o += " + " + e.errorPath);
            var w = o += " , " + (i ? "data" + (i - 1 || "") : "parentData") + " , " + (i ? e.dataPathArr[i] : "parentDataProperty") + ", rootData)  ";
            if (o = g.pop(), a) {
                if (!e.async) throw new Error("async schema referenced by sync schema");
                h && (o += " var " + f + "; "), o += " try { await " + w + "; ", h && (o += " " + f + " = true; "), o += " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", h && (o += " " + f + " = false; "), o += " } ", h && (o += " if (" + f + ") { ")
            } else o += " if (!" + w + ") { if (vErrors === null) vErrors = " + n + ".errors; else vErrors = vErrors.concat(" + n + ".errors); errors = vErrors.length; } ", h && (o += " else { ")
        }
        return o
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r) {
        var a = " ",
            n = e.schema[t],
            o = e.schemaPath + e.util.getProperty(t),
            s = e.errSchemaPath + "/" + t,
            i = !e.opts.allErrors,
            c = e.util.copy(e),
            u = "";
        c.level++;
        var h = "valid" + c.level,
            l = c.baseId,
            f = !0,
            p = n;
        if (p)
            for (var d, m = -1, v = p.length - 1; m < v;) d = p[m += 1], e.util.schemaHasRules(d, e.RULES.all) && (f = !1, c.schema = d, c.schemaPath = o + "[" + m + "]", c.errSchemaPath = s + "/" + m, a += "  " + e.validate(c) + " ", c.baseId = l, i && (a += " if (" + h + ") { ", u += "}"));
        return i && (a += f ? " if (true) { " : " " + u.slice(0, -1) + " "), a = e.util.cleanUpCode(a)
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r) {
        var a = " ",
            n = e.level,
            o = e.dataLevel,
            s = e.schema[t],
            i = e.schemaPath + e.util.getProperty(t),
            c = e.errSchemaPath + "/" + t,
            u = !e.opts.allErrors,
            h = "data" + (o || ""),
            l = "valid" + n,
            f = "errs__" + n,
            p = e.util.copy(e),
            d = "";
        p.level++;
        var m = "valid" + p.level;
        if (s.every(function(t) {
                return e.util.schemaHasRules(t, e.RULES.all)
            })) {
            var v = p.baseId;
            a += " var " + f + " = errors; var " + l + " = false;  ";
            var y = e.compositeRule;
            e.compositeRule = p.compositeRule = !0;
            var g = s;
            if (g)
                for (var w, b = -1, P = g.length - 1; b < P;) w = g[b += 1], p.schema = w, p.schemaPath = i + "[" + b + "]", p.errSchemaPath = c + "/" + b, a += "  " + e.validate(p) + " ", p.baseId = v, a += " " + l + " = " + l + " || " + m + "; if (!" + l + ") { ", d += "}";
            e.compositeRule = p.compositeRule = y, a += " " + d + " if (!" + l + ") {   var err =   ", !1 !== e.createErrors ? (a += " { keyword: 'anyOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: {} ", !1 !== e.opts.messages && (a += " , message: 'should match some schema in anyOf' "), e.opts.verbose && (a += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), a += " } ") : a += " {} ", a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && u && (e.async ? a += " throw new ValidationError(vErrors); " : a += " validate.errors = vErrors; return false; "), a += " } else {  errors = " + f + "; if (vErrors !== null) { if (" + f + ") vErrors.length = " + f + "; else vErrors = null; } ", e.opts.allErrors && (a += " } "), a = e.util.cleanUpCode(a)
        } else u && (a += " if (true) { ");
        return a
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r) {
        var a = " ",
            n = e.schema[t],
            o = e.errSchemaPath + "/" + t,
            s = (e.opts.allErrors, e.util.toQuotedString(n));
        return !0 === e.opts.$comment ? a += " console.log(" + s + ");" : "function" == typeof e.opts.$comment && (a += " self._opts.$comment(" + s + ", " + e.util.toQuotedString(o) + ", validate.root.schema);"), a
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r) {
        var a = " ",
            n = e.level,
            o = e.dataLevel,
            s = e.schema[t],
            i = e.schemaPath + e.util.getProperty(t),
            c = e.errSchemaPath + "/" + t,
            u = !e.opts.allErrors,
            h = "data" + (o || ""),
            l = "valid" + n,
            f = e.opts.$data && s && s.$data;
        f && (a += " var schema" + n + " = " + e.util.getData(s.$data, o, e.dataPathArr) + "; "), f || (a += " var schema" + n + " = validate.schema" + i + ";"), a += "var " + l + " = equal(" + h + ", schema" + n + "); if (!" + l + ") {   ";
        var p = p || [];
        p.push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: 'const' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { allowedValue: schema" + n + " } ", !1 !== e.opts.messages && (a += " , message: 'should be equal to constant' "), e.opts.verbose && (a += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), a += " } ") : a += " {} ";
        var d = a;
        return a = p.pop(), !e.compositeRule && u ? e.async ? a += " throw new ValidationError([" + d + "]); " : a += " validate.errors = [" + d + "]; return false; " : a += " var err = " + d + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " }", u && (a += " else { "), a
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r) {
        var a = " ",
            n = e.level,
            o = e.dataLevel,
            s = e.schema[t],
            i = e.schemaPath + e.util.getProperty(t),
            c = e.errSchemaPath + "/" + t,
            u = !e.opts.allErrors,
            h = "data" + (o || ""),
            l = "valid" + n,
            f = "errs__" + n,
            p = e.util.copy(e);
        p.level++;
        var d = "valid" + p.level,
            m = "i" + n,
            v = p.dataLevel = e.dataLevel + 1,
            y = "data" + v,
            g = e.baseId,
            w = e.util.schemaHasRules(s, e.RULES.all);
        if (a += "var " + f + " = errors;var " + l + ";", w) {
            var b = e.compositeRule;
            e.compositeRule = p.compositeRule = !0, p.schema = s, p.schemaPath = i, p.errSchemaPath = c, a += " var " + d + " = false; for (var " + m + " = 0; " + m + " < " + h + ".length; " + m + "++) { ", p.errorPath = e.util.getPathExpr(e.errorPath, m, e.opts.jsonPointers, !0);
            var P = h + "[" + m + "]";
            p.dataPathArr[v] = m;
            var E = e.validate(p);
            p.baseId = g, e.util.varOccurences(E, y) < 2 ? a += " " + e.util.varReplace(E, y, P) + " " : a += " var " + y + " = " + P + "; " + E + " ", a += " if (" + d + ") break; }  ", e.compositeRule = p.compositeRule = b, a += "  if (!" + d + ") {"
        } else a += " if (" + h + ".length == 0) {";
        var C = C || [];
        C.push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: 'contains' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: {} ", !1 !== e.opts.messages && (a += " , message: 'should contain a valid item' "), e.opts.verbose && (a += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), a += " } ") : a += " {} ";
        var S = a;
        return a = C.pop(), !e.compositeRule && u ? e.async ? a += " throw new ValidationError([" + S + "]); " : a += " validate.errors = [" + S + "]; return false; " : a += " var err = " + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " } else { ", w && (a += "  errors = " + f + "; if (vErrors !== null) { if (" + f + ") vErrors.length = " + f + "; else vErrors = null; } "), e.opts.allErrors && (a += " } "), a = e.util.cleanUpCode(a)
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r) {
        var a = " ",
            n = e.level,
            o = e.dataLevel,
            s = e.schema[t],
            i = e.schemaPath + e.util.getProperty(t),
            c = e.errSchemaPath + "/" + t,
            u = !e.opts.allErrors,
            h = "data" + (o || ""),
            l = "errs__" + n,
            f = e.util.copy(e),
            p = "";
        f.level++;
        var d = "valid" + f.level,
            m = {},
            v = {},
            y = e.opts.ownProperties;
        for (P in s) {
            var g = s[P],
                w = Array.isArray(g) ? v : m;
            w[P] = g
        }
        a += "var " + l + " = errors;";
        var b = e.errorPath;
        for (var P in a += "var missing" + n + ";", v)
            if ((w = v[P]).length) {
                if (a += " if ( " + h + e.util.getProperty(P) + " !== undefined ", y && (a += " && Object.prototype.hasOwnProperty.call(" + h + ", '" + e.util.escapeQuotes(P) + "') "), u) {
                    a += " && ( ";
                    var E = w;
                    if (E)
                        for (var C = -1, S = E.length - 1; C < S;) {
                            k = E[C += 1], C && (a += " || "), a += " ( ( " + (I = h + (T = e.util.getProperty(k))) + " === undefined ", y && (a += " || ! Object.prototype.hasOwnProperty.call(" + h + ", '" + e.util.escapeQuotes(k) + "') "), a += ") && (missing" + n + " = " + e.util.toQuotedString(e.opts.jsonPointers ? k : T) + ") ) "
                        }
                    a += ")) {  ";
                    var x = "missing" + n,
                        F = "' + " + x + " + '";
                    e.opts._errorDataPathProperty && (e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(b, x, !0) : b + " + " + x);
                    var _ = _ || [];
                    _.push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { property: '" + e.util.escapeQuotes(P) + "', missingProperty: '" + F + "', depsCount: " + w.length + ", deps: '" + e.util.escapeQuotes(1 == w.length ? w[0] : w.join(", ")) + "' } ", !1 !== e.opts.messages && (a += " , message: 'should have ", 1 == w.length ? a += "property " + e.util.escapeQuotes(w[0]) : a += "properties " + e.util.escapeQuotes(w.join(", ")), a += " when property " + e.util.escapeQuotes(P) + " is present' "), e.opts.verbose && (a += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), a += " } ") : a += " {} ";
                    var A = a;
                    a = _.pop(), !e.compositeRule && u ? e.async ? a += " throw new ValidationError([" + A + "]); " : a += " validate.errors = [" + A + "]; return false; " : a += " var err = " + A + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
                } else {
                    a += " ) { ";
                    var R = w;
                    if (R)
                        for (var k, D = -1, O = R.length - 1; D < O;) {
                            k = R[D += 1];
                            var T = e.util.getProperty(k),
                                I = (F = e.util.escapeQuotes(k), h + T);
                            e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(b, k, e.opts.jsonPointers)), a += " if ( " + I + " === undefined ", y && (a += " || ! Object.prototype.hasOwnProperty.call(" + h + ", '" + e.util.escapeQuotes(k) + "') "), a += ") {  var err =   ", !1 !== e.createErrors ? (a += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { property: '" + e.util.escapeQuotes(P) + "', missingProperty: '" + F + "', depsCount: " + w.length + ", deps: '" + e.util.escapeQuotes(1 == w.length ? w[0] : w.join(", ")) + "' } ", !1 !== e.opts.messages && (a += " , message: 'should have ", 1 == w.length ? a += "property " + e.util.escapeQuotes(w[0]) : a += "properties " + e.util.escapeQuotes(w.join(", ")), a += " when property " + e.util.escapeQuotes(P) + " is present' "), e.opts.verbose && (a += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), a += " } ") : a += " {} ", a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } "
                        }
                }
                a += " }   ", u && (p += "}", a += " else { ")
            }
        e.errorPath = b;
        var B = f.baseId;
        for (var P in m) {
            g = m[P];
            e.util.schemaHasRules(g, e.RULES.all) && (a += " " + d + " = true; if ( " + h + e.util.getProperty(P) + " !== undefined ", y && (a += " && Object.prototype.hasOwnProperty.call(" + h + ", '" + e.util.escapeQuotes(P) + "') "), a += ") { ", f.schema = g, f.schemaPath = i + e.util.getProperty(P), f.errSchemaPath = c + "/" + e.util.escapeFragment(P), a += "  " + e.validate(f) + " ", f.baseId = B, a += " }  ", u && (a += " if (" + d + ") { ", p += "}"))
        }
        return u && (a += "   " + p + " if (" + l + " == errors) {"), a = e.util.cleanUpCode(a)
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r) {
        var a = " ",
            n = e.level,
            o = e.dataLevel,
            s = e.schema[t],
            i = e.schemaPath + e.util.getProperty(t),
            c = e.errSchemaPath + "/" + t,
            u = !e.opts.allErrors,
            h = "data" + (o || ""),
            l = "valid" + n,
            f = e.opts.$data && s && s.$data;
        f && (a += " var schema" + n + " = " + e.util.getData(s.$data, o, e.dataPathArr) + "; ");
        var p = "i" + n,
            d = "schema" + n;
        f || (a += " var " + d + " = validate.schema" + i + ";"), a += "var " + l + ";", f && (a += " if (schema" + n + " === undefined) " + l + " = true; else if (!Array.isArray(schema" + n + ")) " + l + " = false; else {"), a += l + " = false;for (var " + p + "=0; " + p + "<" + d + ".length; " + p + "++) if (equal(" + h + ", " + d + "[" + p + "])) { " + l + " = true; break; }", f && (a += "  }  "), a += " if (!" + l + ") {   ";
        var m = m || [];
        m.push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: 'enum' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { allowedValues: schema" + n + " } ", !1 !== e.opts.messages && (a += " , message: 'should be equal to one of the allowed values' "), e.opts.verbose && (a += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), a += " } ") : a += " {} ";
        var v = a;
        return a = m.pop(), !e.compositeRule && u ? e.async ? a += " throw new ValidationError([" + v + "]); " : a += " validate.errors = [" + v + "]; return false; " : a += " var err = " + v + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " }", u && (a += " else { "), a
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r) {
        var a = " ",
            n = e.level,
            o = e.dataLevel,
            s = e.schema[t],
            i = e.schemaPath + e.util.getProperty(t),
            c = e.errSchemaPath + "/" + t,
            u = !e.opts.allErrors,
            h = "data" + (o || "");
        if (!1 === e.opts.format) return u && (a += " if (true) { "), a;
        var l, f = e.opts.$data && s && s.$data;
        f ? (a += " var schema" + n + " = " + e.util.getData(s.$data, o, e.dataPathArr) + "; ", l = "schema" + n) : l = s;
        var p = e.opts.unknownFormats,
            d = Array.isArray(p);
        if (f) {
            a += " var " + (m = "format" + n) + " = formats[" + l + "]; var " + (v = "isObject" + n) + " = typeof " + m + " == 'object' && !(" + m + " instanceof RegExp) && " + m + ".validate; var " + (y = "formatType" + n) + " = " + v + " && " + m + ".type || 'string'; if (" + v + ") { ", e.async && (a += " var async" + n + " = " + m + ".async; "), a += " " + m + " = " + m + ".validate; } if (  ", f && (a += " (" + l + " !== undefined && typeof " + l + " != 'string') || "), a += " (", "ignore" != p && (a += " (" + l + " && !" + m + " ", d && (a += " && self._opts.unknownFormats.indexOf(" + l + ") == -1 "), a += ") || "), a += " (" + m + " && " + y + " == '" + r + "' && !(typeof " + m + " == 'function' ? ", e.async ? a += " (async" + n + " ? await " + m + "(" + h + ") : " + m + "(" + h + ")) " : a += " " + m + "(" + h + ") ", a += " : " + m + ".test(" + h + "))))) {"
        } else {
            var m;
            if (!(m = e.formats[s])) {
                if ("ignore" == p) return e.logger.warn('unknown format "' + s + '" ignored in schema at path "' + e.errSchemaPath + '"'), u && (a += " if (true) { "), a;
                if (d && p.indexOf(s) >= 0) return u && (a += " if (true) { "), a;
                throw new Error('unknown format "' + s + '" is used in schema at path "' + e.errSchemaPath + '"')
            }
            var v, y = (v = "object" == typeof m && !(m instanceof RegExp) && m.validate) && m.type || "string";
            if (v) {
                var g = !0 === m.async;
                m = m.validate
            }
            if (y != r) return u && (a += " if (true) { "), a;
            if (g) {
                if (!e.async) throw new Error("async format in sync schema");
                a += " if (!(await " + (w = "formats" + e.util.getProperty(s) + ".validate") + "(" + h + "))) { "
            } else {
                a += " if (! ";
                var w = "formats" + e.util.getProperty(s);
                v && (w += ".validate"), a += "function" == typeof m ? " " + w + "(" + h + ") " : " " + w + ".test(" + h + ") ", a += ") { "
            }
        }
        var b = b || [];
        b.push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: 'format' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { format:  ", a += f ? "" + l : "" + e.util.toQuotedString(s), a += "  } ", !1 !== e.opts.messages && (a += " , message: 'should match format \"", a += f ? "' + " + l + " + '" : "" + e.util.escapeQuotes(s), a += "\"' "), e.opts.verbose && (a += " , schema:  ", a += f ? "validate.schema" + i : "" + e.util.toQuotedString(s), a += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), a += " } ") : a += " {} ";
        var P = a;
        return a = b.pop(), !e.compositeRule && u ? e.async ? a += " throw new ValidationError([" + P + "]); " : a += " validate.errors = [" + P + "]; return false; " : a += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " } ", u && (a += " else { "), a
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r) {
        var a = " ",
            n = e.level,
            o = e.dataLevel,
            s = e.schema[t],
            i = e.schemaPath + e.util.getProperty(t),
            c = e.errSchemaPath + "/" + t,
            u = !e.opts.allErrors,
            h = "data" + (o || ""),
            l = "valid" + n,
            f = "errs__" + n,
            p = e.util.copy(e);
        p.level++;
        var d = "valid" + p.level,
            m = e.schema.then,
            v = e.schema.else,
            y = void 0 !== m && e.util.schemaHasRules(m, e.RULES.all),
            g = void 0 !== v && e.util.schemaHasRules(v, e.RULES.all),
            w = p.baseId;
        if (y || g) {
            var b;
            p.createErrors = !1, p.schema = s, p.schemaPath = i, p.errSchemaPath = c, a += " var " + f + " = errors; var " + l + " = true;  ";
            var P = e.compositeRule;
            e.compositeRule = p.compositeRule = !0, a += "  " + e.validate(p) + " ", p.baseId = w, p.createErrors = !0, a += "  errors = " + f + "; if (vErrors !== null) { if (" + f + ") vErrors.length = " + f + "; else vErrors = null; }  ", e.compositeRule = p.compositeRule = P, y ? (a += " if (" + d + ") {  ", p.schema = e.schema.then, p.schemaPath = e.schemaPath + ".then", p.errSchemaPath = e.errSchemaPath + "/then", a += "  " + e.validate(p) + " ", p.baseId = w, a += " " + l + " = " + d + "; ", y && g ? a += " var " + (b = "ifClause" + n) + " = 'then'; " : b = "'then'", a += " } ", g && (a += " else { ")) : a += " if (!" + d + ") { ", g && (p.schema = e.schema.else, p.schemaPath = e.schemaPath + ".else", p.errSchemaPath = e.errSchemaPath + "/else", a += "  " + e.validate(p) + " ", p.baseId = w, a += " " + l + " = " + d + "; ", y && g ? a += " var " + (b = "ifClause" + n) + " = 'else'; " : b = "'else'", a += " } "), a += " if (!" + l + ") {   var err =   ", !1 !== e.createErrors ? (a += " { keyword: 'if' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { failingKeyword: " + b + " } ", !1 !== e.opts.messages && (a += " , message: 'should match \"' + " + b + " + '\" schema' "), e.opts.verbose && (a += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), a += " } ") : a += " {} ", a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && u && (e.async ? a += " throw new ValidationError(vErrors); " : a += " validate.errors = vErrors; return false; "), a += " }   ", u && (a += " else { "), a = e.util.cleanUpCode(a)
        } else u && (a += " if (true) { ");
        return a
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r) {
        var a = " ",
            n = e.level,
            o = e.dataLevel,
            s = e.schema[t],
            i = e.schemaPath + e.util.getProperty(t),
            c = e.errSchemaPath + "/" + t,
            u = !e.opts.allErrors,
            h = "data" + (o || ""),
            l = "valid" + n,
            f = "errs__" + n,
            p = e.util.copy(e),
            d = "";
        p.level++;
        var m = "valid" + p.level,
            v = "i" + n,
            y = p.dataLevel = e.dataLevel + 1,
            g = "data" + y,
            w = e.baseId;
        if (a += "var " + f + " = errors;var " + l + ";", Array.isArray(s)) {
            var b = e.schema.additionalItems;
            if (!1 === b) {
                a += " " + l + " = " + h + ".length <= " + s.length + "; ";
                var P = c;
                c = e.errSchemaPath + "/additionalItems", a += "  if (!" + l + ") {   ";
                var E = E || [];
                E.push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: 'additionalItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { limit: " + s.length + " } ", !1 !== e.opts.messages && (a += " , message: 'should NOT have more than " + s.length + " items' "), e.opts.verbose && (a += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), a += " } ") : a += " {} ";
                var C = a;
                a = E.pop(), !e.compositeRule && u ? e.async ? a += " throw new ValidationError([" + C + "]); " : a += " validate.errors = [" + C + "]; return false; " : a += " var err = " + C + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " } ", c = P, u && (d += "}", a += " else { ")
            }
            var S = s;
            if (S)
                for (var x, F = -1, _ = S.length - 1; F < _;)
                    if (x = S[F += 1], e.util.schemaHasRules(x, e.RULES.all)) {
                        a += " " + m + " = true; if (" + h + ".length > " + F + ") { ";
                        var A = h + "[" + F + "]";
                        p.schema = x, p.schemaPath = i + "[" + F + "]", p.errSchemaPath = c + "/" + F, p.errorPath = e.util.getPathExpr(e.errorPath, F, e.opts.jsonPointers, !0), p.dataPathArr[y] = F;
                        var R = e.validate(p);
                        p.baseId = w, e.util.varOccurences(R, g) < 2 ? a += " " + e.util.varReplace(R, g, A) + " " : a += " var " + g + " = " + A + "; " + R + " ", a += " }  ", u && (a += " if (" + m + ") { ", d += "}")
                    }
            if ("object" == typeof b && e.util.schemaHasRules(b, e.RULES.all)) {
                p.schema = b, p.schemaPath = e.schemaPath + ".additionalItems", p.errSchemaPath = e.errSchemaPath + "/additionalItems", a += " " + m + " = true; if (" + h + ".length > " + s.length + ") {  for (var " + v + " = " + s.length + "; " + v + " < " + h + ".length; " + v + "++) { ", p.errorPath = e.util.getPathExpr(e.errorPath, v, e.opts.jsonPointers, !0);
                A = h + "[" + v + "]";
                p.dataPathArr[y] = v;
                R = e.validate(p);
                p.baseId = w, e.util.varOccurences(R, g) < 2 ? a += " " + e.util.varReplace(R, g, A) + " " : a += " var " + g + " = " + A + "; " + R + " ", u && (a += " if (!" + m + ") break; "), a += " } }  ", u && (a += " if (" + m + ") { ", d += "}")
            }
        } else if (e.util.schemaHasRules(s, e.RULES.all)) {
            p.schema = s, p.schemaPath = i, p.errSchemaPath = c, a += "  for (var " + v + " = 0; " + v + " < " + h + ".length; " + v + "++) { ", p.errorPath = e.util.getPathExpr(e.errorPath, v, e.opts.jsonPointers, !0);
            A = h + "[" + v + "]";
            p.dataPathArr[y] = v;
            R = e.validate(p);
            p.baseId = w, e.util.varOccurences(R, g) < 2 ? a += " " + e.util.varReplace(R, g, A) + " " : a += " var " + g + " = " + A + "; " + R + " ", u && (a += " if (!" + m + ") break; "), a += " }"
        }
        return u && (a += " " + d + " if (" + f + " == errors) {"), a = e.util.cleanUpCode(a)
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r) {
        var a, n = " ",
            o = e.level,
            s = e.dataLevel,
            i = e.schema[t],
            c = e.schemaPath + e.util.getProperty(t),
            u = e.errSchemaPath + "/" + t,
            h = !e.opts.allErrors,
            l = "data" + (s || ""),
            f = e.opts.$data && i && i.$data;
        f ? (n += " var schema" + o + " = " + e.util.getData(i.$data, s, e.dataPathArr) + "; ", a = "schema" + o) : a = i, n += "var division" + o + ";if (", f && (n += " " + a + " !== undefined && ( typeof " + a + " != 'number' || "), n += " (division" + o + " = " + l + " / " + a + ", ", e.opts.multipleOfPrecision ? n += " Math.abs(Math.round(division" + o + ") - division" + o + ") > 1e-" + e.opts.multipleOfPrecision + " " : n += " division" + o + " !== parseInt(division" + o + ") ", n += " ) ", f && (n += "  )  "), n += " ) {   ";
        var p = p || [];
        p.push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: 'multipleOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { multipleOf: " + a + " } ", !1 !== e.opts.messages && (n += " , message: 'should be multiple of ", n += f ? "' + " + a : a + "'"), e.opts.verbose && (n += " , schema:  ", n += f ? "validate.schema" + c : "" + i, n += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " "), n += " } ") : n += " {} ";
        var d = n;
        return n = p.pop(), !e.compositeRule && h ? e.async ? n += " throw new ValidationError([" + d + "]); " : n += " validate.errors = [" + d + "]; return false; " : n += " var err = " + d + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += "} ", h && (n += " else { "), n
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r) {
        var a = " ",
            n = e.level,
            o = e.dataLevel,
            s = e.schema[t],
            i = e.schemaPath + e.util.getProperty(t),
            c = e.errSchemaPath + "/" + t,
            u = !e.opts.allErrors,
            h = "data" + (o || ""),
            l = "errs__" + n,
            f = e.util.copy(e);
        f.level++;
        var p = "valid" + f.level;
        if (e.util.schemaHasRules(s, e.RULES.all)) {
            f.schema = s, f.schemaPath = i, f.errSchemaPath = c, a += " var " + l + " = errors;  ";
            var d, m = e.compositeRule;
            e.compositeRule = f.compositeRule = !0, f.createErrors = !1, f.opts.allErrors && (d = f.opts.allErrors, f.opts.allErrors = !1), a += " " + e.validate(f) + " ", f.createErrors = !0, d && (f.opts.allErrors = d), e.compositeRule = f.compositeRule = m, a += " if (" + p + ") {   ";
            var v = v || [];
            v.push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: {} ", !1 !== e.opts.messages && (a += " , message: 'should NOT be valid' "), e.opts.verbose && (a += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), a += " } ") : a += " {} ";
            var y = a;
            a = v.pop(), !e.compositeRule && u ? e.async ? a += " throw new ValidationError([" + y + "]); " : a += " validate.errors = [" + y + "]; return false; " : a += " var err = " + y + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " } else {  errors = " + l + "; if (vErrors !== null) { if (" + l + ") vErrors.length = " + l + "; else vErrors = null; } ", e.opts.allErrors && (a += " } ")
        } else a += "  var err =   ", !1 !== e.createErrors ? (a += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: {} ", !1 !== e.opts.messages && (a += " , message: 'should NOT be valid' "), e.opts.verbose && (a += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), a += " } ") : a += " {} ", a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", u && (a += " if (false) { ");
        return a
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r) {
        var a = " ",
            n = e.level,
            o = e.dataLevel,
            s = e.schema[t],
            i = e.schemaPath + e.util.getProperty(t),
            c = e.errSchemaPath + "/" + t,
            u = !e.opts.allErrors,
            h = "data" + (o || ""),
            l = "valid" + n,
            f = "errs__" + n,
            p = e.util.copy(e),
            d = "";
        p.level++;
        var m = "valid" + p.level,
            v = p.baseId,
            y = "prevValid" + n,
            g = "passingSchemas" + n;
        a += "var " + f + " = errors , " + y + " = false , " + l + " = false , " + g + " = null; ";
        var w = e.compositeRule;
        e.compositeRule = p.compositeRule = !0;
        var b = s;
        if (b)
            for (var P, E = -1, C = b.length - 1; E < C;) P = b[E += 1], e.util.schemaHasRules(P, e.RULES.all) ? (p.schema = P, p.schemaPath = i + "[" + E + "]", p.errSchemaPath = c + "/" + E, a += "  " + e.validate(p) + " ", p.baseId = v) : a += " var " + m + " = true; ", E && (a += " if (" + m + " && " + y + ") { " + l + " = false; " + g + " = [" + g + ", " + E + "]; } else { ", d += "}"), a += " if (" + m + ") { " + l + " = " + y + " = true; " + g + " = " + E + "; }";
        return e.compositeRule = p.compositeRule = w, a += d + "if (!" + l + ") {   var err =   ", !1 !== e.createErrors ? (a += " { keyword: 'oneOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { passingSchemas: " + g + " } ", !1 !== e.opts.messages && (a += " , message: 'should match exactly one schema in oneOf' "), e.opts.verbose && (a += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), a += " } ") : a += " {} ", a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && u && (e.async ? a += " throw new ValidationError(vErrors); " : a += " validate.errors = vErrors; return false; "), a += "} else {  errors = " + f + "; if (vErrors !== null) { if (" + f + ") vErrors.length = " + f + "; else vErrors = null; }", e.opts.allErrors && (a += " } "), a
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r) {
        var a, n = " ",
            o = e.level,
            s = e.dataLevel,
            i = e.schema[t],
            c = e.schemaPath + e.util.getProperty(t),
            u = e.errSchemaPath + "/" + t,
            h = !e.opts.allErrors,
            l = "data" + (s || ""),
            f = e.opts.$data && i && i.$data;
        f ? (n += " var schema" + o + " = " + e.util.getData(i.$data, s, e.dataPathArr) + "; ", a = "schema" + o) : a = i;
        var p = f ? "(new RegExp(" + a + "))" : e.usePattern(i);
        n += "if ( ", f && (n += " (" + a + " !== undefined && typeof " + a + " != 'string') || "), n += " !" + p + ".test(" + l + ") ) {   ";
        var d = d || [];
        d.push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: 'pattern' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { pattern:  ", n += f ? "" + a : "" + e.util.toQuotedString(i), n += "  } ", !1 !== e.opts.messages && (n += " , message: 'should match pattern \"", n += f ? "' + " + a + " + '" : "" + e.util.escapeQuotes(i), n += "\"' "), e.opts.verbose && (n += " , schema:  ", n += f ? "validate.schema" + c : "" + e.util.toQuotedString(i), n += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " "), n += " } ") : n += " {} ";
        var m = n;
        return n = d.pop(), !e.compositeRule && h ? e.async ? n += " throw new ValidationError([" + m + "]); " : n += " validate.errors = [" + m + "]; return false; " : n += " var err = " + m + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += "} ", h && (n += " else { "), n
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r) {
        var a = " ",
            n = e.level,
            o = e.dataLevel,
            s = e.schema[t],
            i = e.schemaPath + e.util.getProperty(t),
            c = e.errSchemaPath + "/" + t,
            u = !e.opts.allErrors,
            h = "data" + (o || ""),
            l = "errs__" + n,
            f = e.util.copy(e),
            p = "";
        f.level++;
        var d = "valid" + f.level,
            m = "key" + n,
            v = "idx" + n,
            y = f.dataLevel = e.dataLevel + 1,
            g = "data" + y,
            w = "dataProperties" + n,
            b = Object.keys(s || {}),
            P = e.schema.patternProperties || {},
            E = Object.keys(P),
            C = e.schema.additionalProperties,
            S = b.length || E.length,
            x = !1 === C,
            F = "object" == typeof C && Object.keys(C).length,
            _ = e.opts.removeAdditional,
            A = x || F || _,
            R = e.opts.ownProperties,
            k = e.baseId,
            D = e.schema.required;
        if (D && (!e.opts.$data || !D.$data) && D.length < e.opts.loopRequired) var O = e.util.toHash(D);
        if (a += "var " + l + " = errors;var " + d + " = true;", R && (a += " var " + w + " = undefined;"), A) {
            if (a += R ? " " + w + " = " + w + " || Object.keys(" + h + "); for (var " + v + "=0; " + v + "<" + w + ".length; " + v + "++) { var " + m + " = " + w + "[" + v + "]; " : " for (var " + m + " in " + h + ") { ", S) {
                if (a += " var isAdditional" + n + " = !(false ", b.length)
                    if (b.length > 8) a += " || validate.schema" + i + ".hasOwnProperty(" + m + ") ";
                    else {
                        var T = b;
                        if (T)
                            for (var I = -1, B = T.length - 1; I < B;) J = T[I += 1], a += " || " + m + " == " + e.util.toQuotedString(J) + " "
                    }
                if (E.length) {
                    var j = E;
                    if (j)
                        for (var L = -1, $ = j.length - 1; L < $;) ne = j[L += 1], a += " || " + e.usePattern(ne) + ".test(" + m + ") "
                }
                a += " ); if (isAdditional" + n + ") { "
            }
            if ("all" == _) a += " delete " + h + "[" + m + "]; ";
            else {
                var N = e.errorPath,
                    U = "' + " + m + " + '";
                if (e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(e.errorPath, m, e.opts.jsonPointers)), x)
                    if (_) a += " delete " + h + "[" + m + "]; ";
                    else {
                        a += " " + d + " = false; ";
                        var q = c;
                        c = e.errSchemaPath + "/additionalProperties", (te = te || []).push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: 'additionalProperties' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { additionalProperty: '" + U + "' } ", !1 !== e.opts.messages && (a += " , message: '", e.opts._errorDataPathProperty ? a += "is an invalid additional property" : a += "should NOT have additional properties", a += "' "), e.opts.verbose && (a += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), a += " } ") : a += " {} ";
                        var M = a;
                        a = te.pop(), !e.compositeRule && u ? e.async ? a += " throw new ValidationError([" + M + "]); " : a += " validate.errors = [" + M + "]; return false; " : a += " var err = " + M + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", c = q, u && (a += " break; ")
                    }
                else if (F)
                    if ("failing" == _) {
                        a += " var " + l + " = errors;  ";
                        var z = e.compositeRule;
                        e.compositeRule = f.compositeRule = !0, f.schema = C, f.schemaPath = e.schemaPath + ".additionalProperties", f.errSchemaPath = e.errSchemaPath + "/additionalProperties", f.errorPath = e.opts._errorDataPathProperty ? e.errorPath : e.util.getPathExpr(e.errorPath, m, e.opts.jsonPointers);
                        var H = h + "[" + m + "]";
                        f.dataPathArr[y] = m;
                        var V = e.validate(f);
                        f.baseId = k, e.util.varOccurences(V, g) < 2 ? a += " " + e.util.varReplace(V, g, H) + " " : a += " var " + g + " = " + H + "; " + V + " ", a += " if (!" + d + ") { errors = " + l + "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete " + h + "[" + m + "]; }  ", e.compositeRule = f.compositeRule = z
                    } else {
                        f.schema = C, f.schemaPath = e.schemaPath + ".additionalProperties", f.errSchemaPath = e.errSchemaPath + "/additionalProperties", f.errorPath = e.opts._errorDataPathProperty ? e.errorPath : e.util.getPathExpr(e.errorPath, m, e.opts.jsonPointers);
                        H = h + "[" + m + "]";
                        f.dataPathArr[y] = m;
                        V = e.validate(f);
                        f.baseId = k, e.util.varOccurences(V, g) < 2 ? a += " " + e.util.varReplace(V, g, H) + " " : a += " var " + g + " = " + H + "; " + V + " ", u && (a += " if (!" + d + ") break; ")
                    }
                e.errorPath = N
            }
            S && (a += " } "), a += " }  ", u && (a += " if (" + d + ") { ", p += "}")
        }
        var Q = e.opts.useDefaults && !e.compositeRule;
        if (b.length) {
            var Y = b;
            if (Y)
                for (var J, K = -1, X = Y.length - 1; K < X;) {
                    var W = s[J = Y[K += 1]];
                    if (e.util.schemaHasRules(W, e.RULES.all)) {
                        var G = e.util.getProperty(J),
                            Z = (H = h + G, Q && void 0 !== W.default);
                        f.schema = W, f.schemaPath = i + G, f.errSchemaPath = c + "/" + e.util.escapeFragment(J), f.errorPath = e.util.getPath(e.errorPath, J, e.opts.jsonPointers), f.dataPathArr[y] = e.util.toQuotedString(J);
                        V = e.validate(f);
                        if (f.baseId = k, e.util.varOccurences(V, g) < 2) {
                            V = e.util.varReplace(V, g, H);
                            var ee = H
                        } else {
                            ee = g;
                            a += " var " + g + " = " + H + "; "
                        }
                        if (Z) a += " " + V + " ";
                        else {
                            if (O && O[J]) {
                                a += " if ( " + ee + " === undefined ", R && (a += " || ! Object.prototype.hasOwnProperty.call(" + h + ", '" + e.util.escapeQuotes(J) + "') "), a += ") { " + d + " = false; ";
                                N = e.errorPath, q = c;
                                var te, re = e.util.escapeQuotes(J);
                                e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(N, J, e.opts.jsonPointers)), c = e.errSchemaPath + "/required", (te = te || []).push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { missingProperty: '" + re + "' } ", !1 !== e.opts.messages && (a += " , message: '", e.opts._errorDataPathProperty ? a += "is a required property" : a += "should have required property \\'" + re + "\\'", a += "' "), e.opts.verbose && (a += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), a += " } ") : a += " {} ";
                                M = a;
                                a = te.pop(), !e.compositeRule && u ? e.async ? a += " throw new ValidationError([" + M + "]); " : a += " validate.errors = [" + M + "]; return false; " : a += " var err = " + M + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", c = q, e.errorPath = N, a += " } else { "
                            } else u ? (a += " if ( " + ee + " === undefined ", R && (a += " || ! Object.prototype.hasOwnProperty.call(" + h + ", '" + e.util.escapeQuotes(J) + "') "), a += ") { " + d + " = true; } else { ") : (a += " if (" + ee + " !== undefined ", R && (a += " &&   Object.prototype.hasOwnProperty.call(" + h + ", '" + e.util.escapeQuotes(J) + "') "), a += " ) { ");
                            a += " " + V + " } "
                        }
                    }
                    u && (a += " if (" + d + ") { ", p += "}")
                }
        }
        if (E.length) {
            var ae = E;
            if (ae)
                for (var ne, oe = -1, se = ae.length - 1; oe < se;) {
                    W = P[ne = ae[oe += 1]];
                    if (e.util.schemaHasRules(W, e.RULES.all)) {
                        f.schema = W, f.schemaPath = e.schemaPath + ".patternProperties" + e.util.getProperty(ne), f.errSchemaPath = e.errSchemaPath + "/patternProperties/" + e.util.escapeFragment(ne), a += R ? " " + w + " = " + w + " || Object.keys(" + h + "); for (var " + v + "=0; " + v + "<" + w + ".length; " + v + "++) { var " + m + " = " + w + "[" + v + "]; " : " for (var " + m + " in " + h + ") { ", a += " if (" + e.usePattern(ne) + ".test(" + m + ")) { ", f.errorPath = e.util.getPathExpr(e.errorPath, m, e.opts.jsonPointers);
                        H = h + "[" + m + "]";
                        f.dataPathArr[y] = m;
                        V = e.validate(f);
                        f.baseId = k, e.util.varOccurences(V, g) < 2 ? a += " " + e.util.varReplace(V, g, H) + " " : a += " var " + g + " = " + H + "; " + V + " ", u && (a += " if (!" + d + ") break; "), a += " } ", u && (a += " else " + d + " = true; "), a += " }  ", u && (a += " if (" + d + ") { ", p += "}")
                    }
                }
        }
        return u && (a += " " + p + " if (" + l + " == errors) {"), a = e.util.cleanUpCode(a)
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r) {
        var a = " ",
            n = e.level,
            o = e.dataLevel,
            s = e.schema[t],
            i = e.schemaPath + e.util.getProperty(t),
            c = e.errSchemaPath + "/" + t,
            u = !e.opts.allErrors,
            h = "data" + (o || ""),
            l = "errs__" + n,
            f = e.util.copy(e);
        f.level++;
        var p = "valid" + f.level;
        if (a += "var " + l + " = errors;", e.util.schemaHasRules(s, e.RULES.all)) {
            f.schema = s, f.schemaPath = i, f.errSchemaPath = c;
            var d = "key" + n,
                m = "idx" + n,
                v = "i" + n,
                y = "' + " + d + " + '",
                g = "data" + (f.dataLevel = e.dataLevel + 1),
                w = "dataProperties" + n,
                b = e.opts.ownProperties,
                P = e.baseId;
            b && (a += " var " + w + " = undefined; "), a += b ? " " + w + " = " + w + " || Object.keys(" + h + "); for (var " + m + "=0; " + m + "<" + w + ".length; " + m + "++) { var " + d + " = " + w + "[" + m + "]; " : " for (var " + d + " in " + h + ") { ", a += " var startErrs" + n + " = errors; ";
            var E = d,
                C = e.compositeRule;
            e.compositeRule = f.compositeRule = !0;
            var S = e.validate(f);
            f.baseId = P, e.util.varOccurences(S, g) < 2 ? a += " " + e.util.varReplace(S, g, E) + " " : a += " var " + g + " = " + E + "; " + S + " ", e.compositeRule = f.compositeRule = C, a += " if (!" + p + ") { for (var " + v + "=startErrs" + n + "; " + v + "<errors; " + v + "++) { vErrors[" + v + "].propertyName = " + d + "; }   var err =   ", !1 !== e.createErrors ? (a += " { keyword: 'propertyNames' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { propertyName: '" + y + "' } ", !1 !== e.opts.messages && (a += " , message: 'property name \\'" + y + "\\' is invalid' "), e.opts.verbose && (a += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), a += " } ") : a += " {} ", a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && u && (e.async ? a += " throw new ValidationError(vErrors); " : a += " validate.errors = vErrors; return false; "), u && (a += " break; "), a += " } }"
        }
        return u && (a += "  if (" + l + " == errors) {"), a = e.util.cleanUpCode(a)
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r) {
        var a = " ",
            n = e.level,
            o = e.dataLevel,
            s = e.schema[t],
            i = e.schemaPath + e.util.getProperty(t),
            c = e.errSchemaPath + "/" + t,
            u = !e.opts.allErrors,
            h = "data" + (o || ""),
            l = "valid" + n,
            f = e.opts.$data && s && s.$data;
        f && (a += " var schema" + n + " = " + e.util.getData(s.$data, o, e.dataPathArr) + "; ");
        var p = "schema" + n;
        if (!f)
            if (s.length < e.opts.loopRequired && e.schema.properties && Object.keys(e.schema.properties).length) {
                var d = [],
                    m = s;
                if (m)
                    for (var v, y = -1, g = m.length - 1; y < g;) {
                        v = m[y += 1];
                        var w = e.schema.properties[v];
                        w && e.util.schemaHasRules(w, e.RULES.all) || (d[d.length] = v)
                    }
            } else d = s;
        if (f || d.length) {
            var b = e.errorPath,
                P = f || d.length >= e.opts.loopRequired,
                E = e.opts.ownProperties;
            if (u)
                if (a += " var missing" + n + "; ", P) {
                    f || (a += " var " + p + " = validate.schema" + i + "; ");
                    var C = "' + " + (R = "schema" + n + "[" + (F = "i" + n) + "]") + " + '";
                    e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(b, R, e.opts.jsonPointers)), a += " var " + l + " = true; ", f && (a += " if (schema" + n + " === undefined) " + l + " = true; else if (!Array.isArray(schema" + n + ")) " + l + " = false; else {"), a += " for (var " + F + " = 0; " + F + " < " + p + ".length; " + F + "++) { " + l + " = " + h + "[" + p + "[" + F + "]] !== undefined ", E && (a += " &&   Object.prototype.hasOwnProperty.call(" + h + ", " + p + "[" + F + "]) "), a += "; if (!" + l + ") break; } ", f && (a += "  }  "), a += "  if (!" + l + ") {   ", (A = A || []).push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { missingProperty: '" + C + "' } ", !1 !== e.opts.messages && (a += " , message: '", e.opts._errorDataPathProperty ? a += "is a required property" : a += "should have required property \\'" + C + "\\'", a += "' "), e.opts.verbose && (a += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), a += " } ") : a += " {} ";
                    var S = a;
                    a = A.pop(), !e.compositeRule && u ? e.async ? a += " throw new ValidationError([" + S + "]); " : a += " validate.errors = [" + S + "]; return false; " : a += " var err = " + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " } else { "
                } else {
                    a += " if ( ";
                    var x = d;
                    if (x)
                        for (var F = -1, _ = x.length - 1; F < _;) {
                            D = x[F += 1], F && (a += " || "), a += " ( ( " + (B = h + (I = e.util.getProperty(D))) + " === undefined ", E && (a += " || ! Object.prototype.hasOwnProperty.call(" + h + ", '" + e.util.escapeQuotes(D) + "') "), a += ") && (missing" + n + " = " + e.util.toQuotedString(e.opts.jsonPointers ? D : I) + ") ) "
                        }
                    a += ") {  ";
                    var A;
                    C = "' + " + (R = "missing" + n) + " + '";
                    e.opts._errorDataPathProperty && (e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(b, R, !0) : b + " + " + R), (A = A || []).push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { missingProperty: '" + C + "' } ", !1 !== e.opts.messages && (a += " , message: '", e.opts._errorDataPathProperty ? a += "is a required property" : a += "should have required property \\'" + C + "\\'", a += "' "), e.opts.verbose && (a += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), a += " } ") : a += " {} ";
                    S = a;
                    a = A.pop(), !e.compositeRule && u ? e.async ? a += " throw new ValidationError([" + S + "]); " : a += " validate.errors = [" + S + "]; return false; " : a += " var err = " + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " } else { "
                }
            else if (P) {
                f || (a += " var " + p + " = validate.schema" + i + "; ");
                var R;
                C = "' + " + (R = "schema" + n + "[" + (F = "i" + n) + "]") + " + '";
                e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(b, R, e.opts.jsonPointers)), f && (a += " if (" + p + " && !Array.isArray(" + p + ")) {  var err =   ", !1 !== e.createErrors ? (a += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { missingProperty: '" + C + "' } ", !1 !== e.opts.messages && (a += " , message: '", e.opts._errorDataPathProperty ? a += "is a required property" : a += "should have required property \\'" + C + "\\'", a += "' "), e.opts.verbose && (a += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), a += " } ") : a += " {} ", a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (" + p + " !== undefined) { "), a += " for (var " + F + " = 0; " + F + " < " + p + ".length; " + F + "++) { if (" + h + "[" + p + "[" + F + "]] === undefined ", E && (a += " || ! Object.prototype.hasOwnProperty.call(" + h + ", " + p + "[" + F + "]) "), a += ") {  var err =   ", !1 !== e.createErrors ? (a += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { missingProperty: '" + C + "' } ", !1 !== e.opts.messages && (a += " , message: '", e.opts._errorDataPathProperty ? a += "is a required property" : a += "should have required property \\'" + C + "\\'", a += "' "), e.opts.verbose && (a += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), a += " } ") : a += " {} ", a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", f && (a += "  }  ")
            } else {
                var k = d;
                if (k)
                    for (var D, O = -1, T = k.length - 1; O < T;) {
                        D = k[O += 1];
                        var I = e.util.getProperty(D),
                            B = (C = e.util.escapeQuotes(D), h + I);
                        e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(b, D, e.opts.jsonPointers)), a += " if ( " + B + " === undefined ", E && (a += " || ! Object.prototype.hasOwnProperty.call(" + h + ", '" + e.util.escapeQuotes(D) + "') "), a += ") {  var err =   ", !1 !== e.createErrors ? (a += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { missingProperty: '" + C + "' } ", !1 !== e.opts.messages && (a += " , message: '", e.opts._errorDataPathProperty ? a += "is a required property" : a += "should have required property \\'" + C + "\\'", a += "' "), e.opts.verbose && (a += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), a += " } ") : a += " {} ", a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } "
                    }
            }
            e.errorPath = b
        } else u && (a += " if (true) {");
        return a
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r) {
        var a, n = " ",
            o = e.level,
            s = e.dataLevel,
            i = e.schema[t],
            c = e.schemaPath + e.util.getProperty(t),
            u = e.errSchemaPath + "/" + t,
            h = !e.opts.allErrors,
            l = "data" + (s || ""),
            f = "valid" + o,
            p = e.opts.$data && i && i.$data;
        if (p ? (n += " var schema" + o + " = " + e.util.getData(i.$data, s, e.dataPathArr) + "; ", a = "schema" + o) : a = i, (i || p) && !1 !== e.opts.uniqueItems) {
            p && (n += " var " + f + "; if (" + a + " === false || " + a + " === undefined) " + f + " = true; else if (typeof " + a + " != 'boolean') " + f + " = false; else { "), n += " var i = " + l + ".length , " + f + " = true , j; if (i > 1) { ";
            var d = e.schema.items && e.schema.items.type,
                m = Array.isArray(d);
            if (!d || "object" == d || "array" == d || m && (d.indexOf("object") >= 0 || d.indexOf("array") >= 0)) n += " outer: for (;i--;) { for (j = i; j--;) { if (equal(" + l + "[i], " + l + "[j])) { " + f + " = false; break outer; } } } ";
            else {
                n += " var itemIndices = {}, item; for (;i--;) { var item = " + l + "[i]; ";
                var v = "checkDataType" + (m ? "s" : "");
                n += " if (" + e.util[v](d, "item", !0) + ") continue; ", m && (n += " if (typeof item == 'string') item = '\"' + item; "), n += " if (typeof itemIndices[item] == 'number') { " + f + " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } "
            }
            n += " } ", p && (n += "  }  "), n += " if (!" + f + ") {   ";
            var y = y || [];
            y.push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: 'uniqueItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { i: i, j: j } ", !1 !== e.opts.messages && (n += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "), e.opts.verbose && (n += " , schema:  ", n += p ? "validate.schema" + c : "" + i, n += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " "), n += " } ") : n += " {} ";
            var g = n;
            n = y.pop(), !e.compositeRule && h ? e.async ? n += " throw new ValidationError([" + g + "]); " : n += " validate.errors = [" + g + "]; return false; " : n += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += " } ", h && (n += " else { ")
        } else h && (n += " if (true) { ");
        return n
    }
}, function(e, t, r) {
    "use strict";
    var a = ["multipleOf", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "additionalItems", "maxItems", "minItems", "uniqueItems", "maxProperties", "minProperties", "required", "additionalProperties", "enum", "format", "const"];
    e.exports = function(e, t) {
        for (var r = 0; r < t.length; r++) {
            e = JSON.parse(JSON.stringify(e));
            var n, o = t[r].split("/"),
                s = e;
            for (n = 1; n < o.length; n++) s = s[o[n]];
            for (n = 0; n < a.length; n++) {
                var i = a[n],
                    c = s[i];
                c && (s[i] = {
                    anyOf: [c, {
                        $ref: "https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#"
                    }]
                })
            }
        }
        return e
    }
}, function(e, t, r) {
    "use strict";
    var a = r(28).MissingRef;
    e.exports = function e(t, r, n) {
        var o = this;
        if ("function" != typeof this._opts.loadSchema) throw new Error("options.loadSchema should be a function");
        "function" == typeof r && (n = r, r = void 0);
        var s = i(t).then(function() {
            var e = o._addSchema(t, void 0, r);
            return e.validate || function e(t) {
                try {
                    return o._compile(t)
                } catch (e) {
                    if (e instanceof a) return function n(e) {
                        var n = e.missingSchema;
                        if (u(n)) throw new Error("Schema " + n + " is loaded but " + e.missingRef + " cannot be resolved");
                        var s = o._loadingSchemas[n];
                        s || (s = o._loadingSchemas[n] = o._opts.loadSchema(n)).then(c, c);
                        return s.then(function(e) {
                            if (!u(n)) return i(e).then(function() {
                                u(n) || o.addSchema(e, n, void 0, r)
                            })
                        }).then(function() {
                            return function e(t) {
                                try {
                                    return o._compile(t)
                                } catch (e) {
                                    if (e instanceof a) return n(e);
                                    throw e
                                }
                                function n(a) {
                                    var n = a.missingSchema;
                                    if (u(n)) throw new Error("Schema " + n + " is loaded but " + a.missingRef + " cannot be resolved");
                                    var s = o._loadingSchemas[n];
                                    return s || (s = o._loadingSchemas[n] = o._opts.loadSchema(n)).then(c, c), s.then(function(e) {
                                        if (!u(n)) return i(e).then(function() {
                                            u(n) || o.addSchema(e, n, void 0, r)
                                        })
                                    }).then(function() {
                                        return e(t)
                                    });
                                    function c() {
                                        delete o._loadingSchemas[n]
                                    }
                                    function u(e) {
                                        return o._refs[e] || o._schemas[e]
                                    }
                                }
                            }(t)
                        });
                        function c() {
                            delete o._loadingSchemas[n]
                        }
                        function u(e) {
                            return o._refs[e] || o._schemas[e]
                        }
                    }(e);
                    throw e
                }
                function n(a) {
                    var n = a.missingSchema;
                    if (u(n)) throw new Error("Schema " + n + " is loaded but " + a.missingRef + " cannot be resolved");
                    var s = o._loadingSchemas[n];
                    return s || (s = o._loadingSchemas[n] = o._opts.loadSchema(n)).then(c, c), s.then(function(e) {
                        if (!u(n)) return i(e).then(function() {
                            u(n) || o.addSchema(e, n, void 0, r)
                        })
                    }).then(function() {
                        return e(t)
                    });
                    function c() {
                        delete o._loadingSchemas[n]
                    }
                    function u(e) {
                        return o._refs[e] || o._schemas[e]
                    }
                }
            }(e)
        });
        n && s.then(function(e) {
            n(null, e)
        }, n);
        return s;
        function i(t) {
            var r = t.$schema;
            return r && !o.getSchema(r) ? e.call(o, {
                $ref: r
            }, !0) : Promise.resolve()
        }
    }
}, function(e, t, r) {
    "use strict";
    var a = /^[a-z_$][a-z0-9_$-]*$/i,
        n = r(162);
    e.exports = {
        add: function(e, t) {
            var r = this.RULES;
            if (r.keywords[e]) throw new Error("Keyword " + e + " is already defined");
            if (!a.test(e)) throw new Error("Keyword " + e + " is not a valid identifier");
            if (t) {
                if (t.macro && void 0 !== t.valid) throw new Error('"valid" option cannot be used with macro keywords');
                var o = t.type;
                if (Array.isArray(o)) {
                    var s, i = o.length;
                    for (s = 0; s < i; s++) l(o[s]);
                    for (s = 0; s < i; s++) h(e, o[s], t)
                } else o && l(o), h(e, o, t);
                var c = !0 === t.$data && this._opts.$data;
                if (c && !t.validate) throw new Error('$data support: "validate" function is not defined');
                var u = t.metaSchema;
                u && (c && (u = {
                    anyOf: [u, {
                        $ref: "https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#"
                    }]
                }), t.validateSchema = this.compile(u, !0))
            }
            function h(e, t, a) {
                for (var o, s = 0; s < r.length; s++) {
                    var i = r[s];
                    if (i.type == t) {
                        o = i;
                        break
                    }
                }
                o || (o = {
                    type: t,
                    rules: []
                }, r.push(o));
                var c = {
                    keyword: e,
                    definition: a,
                    custom: !0,
                    code: n,
                    implements: a.implements
                };
                o.rules.push(c), r.custom[e] = c
            }
            function l(e) {
                if (!r.types[e]) throw new Error("Unknown type " + e)
            }
            return r.keywords[e] = r.all[e] = !0, this
        },
        get: function(e) {
            var t = this.RULES.custom[e];
            return t ? t.definition : this.RULES.keywords[e] || !1
        },
        remove: function(e) {
            var t = this.RULES;
            delete t.keywords[e], delete t.all[e], delete t.custom[e];
            for (var r = 0; r < t.length; r++)
                for (var a = t[r].rules, n = 0; n < a.length; n++)
                    if (a[n].keyword == e) {
                        a.splice(n, 1);
                        break
                    }
            return this
        }
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r) {
        var a, n, o = " ",
            s = e.level,
            i = e.dataLevel,
            c = e.schema[t],
            u = e.schemaPath + e.util.getProperty(t),
            h = e.errSchemaPath + "/" + t,
            l = !e.opts.allErrors,
            f = "data" + (i || ""),
            p = "valid" + s,
            d = "errs__" + s,
            m = e.opts.$data && c && c.$data;
        m ? (o += " var schema" + s + " = " + e.util.getData(c.$data, i, e.dataPathArr) + "; ", n = "schema" + s) : n = c;
        var v, y, g, w, b, P = "definition" + s,
            E = this.definition,
            C = "";
        if (m && E.$data) {
            b = "keywordValidate" + s;
            var S = E.validateSchema;
            o += " var " + P + " = RULES.custom['" + t + "'].definition; var " + b + " = " + P + ".validate;"
        } else {
            if (!(w = e.useCustomRule(this, c, e.schema, e))) return;
            n = "validate.schema" + u, b = w.code, v = E.compile, y = E.inline, g = E.macro
        }
        var x = b + ".errors",
            F = "i" + s,
            _ = "ruleErr" + s,
            A = E.async;
        if (A && !e.async) throw new Error("async keyword in sync schema");
        if (y || g || (o += x + " = null;"), o += "var " + d + " = errors;var " + p + ";", m && E.$data && (C += "}", o += " if (" + n + " === undefined) { " + p + " = true; } else { ", S && (C += "}", o += " " + p + " = " + P + ".validateSchema(" + n + "); if (" + p + ") { ")), y) E.statements ? o += " " + w.validate + " " : o += " " + p + " = " + w.validate + "; ";
        else if (g) {
            var R = e.util.copy(e);
            C = "";
            R.level++;
            var k = "valid" + R.level;
            R.schema = w.validate, R.schemaPath = "";
            var D = e.compositeRule;
            e.compositeRule = R.compositeRule = !0;
            var O = e.validate(R).replace(/validate\.schema/g, b);
            e.compositeRule = R.compositeRule = D, o += " " + O
        } else {
            (j = j || []).push(o), o = "", o += "  " + b + ".call( ", e.opts.passContext ? o += "this" : o += "self", v || !1 === E.schema ? o += " , " + f + " " : o += " , " + n + " , " + f + " , validate.schema" + e.schemaPath + " ", o += " , (dataPath || '')", '""' != e.errorPath && (o += " + " + e.errorPath);
            var T = i ? "data" + (i - 1 || "") : "parentData",
                I = i ? e.dataPathArr[i] : "parentDataProperty",
                B = o += " , " + T + " , " + I + " , rootData )  ";
            o = j.pop(), !1 === E.errors ? (o += " " + p + " = ", A && (o += "await "), o += B + "; ") : o += A ? " var " + (x = "customErrors" + s) + " = null; try { " + p + " = await " + B + "; } catch (e) { " + p + " = false; if (e instanceof ValidationError) " + x + " = e.errors; else throw e; } " : " " + x + " = null; " + p + " = " + B + "; "
        }
        if (E.modifying && (o += " if (" + T + ") " + f + " = " + T + "[" + I + "];"), o += "" + C, E.valid) l && (o += " if (true) { ");
        else {
            var j;
            o += " if ( ", void 0 === E.valid ? (o += " !", o += g ? "" + k : "" + p) : o += " " + !E.valid + " ", o += ") { ", a = this.keyword, (j = j || []).push(o), o = "", (j = j || []).push(o), o = "", !1 !== e.createErrors ? (o += " { keyword: '" + (a || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(h) + " , params: { keyword: '" + this.keyword + "' } ", !1 !== e.opts.messages && (o += " , message: 'should pass \"" + this.keyword + "\" keyword validation' "), e.opts.verbose && (o += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), o += " } ") : o += " {} ";
            var L = o;
            o = j.pop(), !e.compositeRule && l ? e.async ? o += " throw new ValidationError([" + L + "]); " : o += " validate.errors = [" + L + "]; return false; " : o += " var err = " + L + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
            var $ = o;
            o = j.pop(), y ? E.errors ? "full" != E.errors && (o += "  for (var " + F + "=" + d + "; " + F + "<errors; " + F + "++) { var " + _ + " = vErrors[" + F + "]; if (" + _ + ".dataPath === undefined) " + _ + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + _ + ".schemaPath === undefined) { " + _ + '.schemaPath = "' + h + '"; } ', e.opts.verbose && (o += " " + _ + ".schema = " + n + "; " + _ + ".data = " + f + "; "), o += " } ") : !1 === E.errors ? o += " " + $ + " " : (o += " if (" + d + " == errors) { " + $ + " } else {  for (var " + F + "=" + d + "; " + F + "<errors; " + F + "++) { var " + _ + " = vErrors[" + F + "]; if (" + _ + ".dataPath === undefined) " + _ + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + _ + ".schemaPath === undefined) { " + _ + '.schemaPath = "' + h + '"; } ', e.opts.verbose && (o += " " + _ + ".schema = " + n + "; " + _ + ".data = " + f + "; "), o += " } } ") : g ? (o += "   var err =   ", !1 !== e.createErrors ? (o += " { keyword: '" + (a || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(h) + " , params: { keyword: '" + this.keyword + "' } ", !1 !== e.opts.messages && (o += " , message: 'should pass \"" + this.keyword + "\" keyword validation' "), e.opts.verbose && (o += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), o += " } ") : o += " {} ", o += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && l && (e.async ? o += " throw new ValidationError(vErrors); " : o += " validate.errors = vErrors; return false; ")) : !1 === E.errors ? o += " " + $ + " " : (o += " if (Array.isArray(" + x + ")) { if (vErrors === null) vErrors = " + x + "; else vErrors = vErrors.concat(" + x + "); errors = vErrors.length;  for (var " + F + "=" + d + "; " + F + "<errors; " + F + "++) { var " + _ + " = vErrors[" + F + "]; if (" + _ + ".dataPath === undefined) " + _ + ".dataPath = (dataPath || '') + " + e.errorPath + ";  " + _ + '.schemaPath = "' + h + '";  ', e.opts.verbose && (o += " " + _ + ".schema = " + n + "; " + _ + ".data = " + f + "; "), o += " } } else { " + $ + " } "), o += " } ", l && (o += " else { ")
        }
        return o
    }
}, function(e) {
    e.exports = {
        $schema: "http://json-schema.org/draft-07/schema#",
        $id: "https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#",
        description: "Meta-schema for $data reference (JSON Schema extension proposal)",
        type: "object",
        required: ["$data"],
        properties: {
            $data: {
                type: "string",
                anyOf: [{
                    format: "relative-json-pointer"
                }, {
                    format: "json-pointer"
                }]
            }
        },
        additionalProperties: !1
    }
}, function(e) {
    e.exports = {
        $schema: "http://json-schema.org/draft-07/schema#",
        $id: "http://json-schema.org/draft-07/schema#",
        title: "Core schema meta-schema",
        definitions: {
            schemaArray: {
                type: "array",
                minItems: 1,
                items: {
                    $ref: "#"
                }
            },
            nonNegativeInteger: {
                type: "integer",
                minimum: 0
            },
            nonNegativeIntegerDefault0: {
                allOf: [{
                    $ref: "#/definitions/nonNegativeInteger"
                }, {
                    default: 0
                }]
            },
            simpleTypes: {
                enum: ["array", "boolean", "integer", "null", "number", "object", "string"]
            },
            stringArray: {
                type: "array",
                items: {
                    type: "string"
                },
                uniqueItems: !0,
                default: []
            }
        },
        type: ["object", "boolean"],
        properties: {
            $id: {
                type: "string",
                format: "uri-reference"
            },
            $schema: {
                type: "string",
                format: "uri"
            },
            $ref: {
                type: "string",
                format: "uri-reference"
            },
            $comment: {
                type: "string"
            },
            title: {
                type: "string"
            },
            description: {
                type: "string"
            },
            default: !0,
            readOnly: {
                type: "boolean",
                default: !1
            },
            examples: {
                type: "array",
                items: !0
            },
            multipleOf: {
                type: "number",
                exclusiveMinimum: 0
            },
            maximum: {
                type: "number"
            },
            exclusiveMaximum: {
                type: "number"
            },
            minimum: {
                type: "number"
            },
            exclusiveMinimum: {
                type: "number"
            },
            maxLength: {
                $ref: "#/definitions/nonNegativeInteger"
            },
            minLength: {
                $ref: "#/definitions/nonNegativeIntegerDefault0"
            },
            pattern: {
                type: "string",
                format: "regex"
            },
            additionalItems: {
                $ref: "#"
            },
            items: {
                anyOf: [{
                    $ref: "#"
                }, {
                    $ref: "#/definitions/schemaArray"
                }],
                default: !0
            },
            maxItems: {
                $ref: "#/definitions/nonNegativeInteger"
            },
            minItems: {
                $ref: "#/definitions/nonNegativeIntegerDefault0"
            },
            uniqueItems: {
                type: "boolean",
                default: !1
            },
            contains: {
                $ref: "#"
            },
            maxProperties: {
                $ref: "#/definitions/nonNegativeInteger"
            },
            minProperties: {
                $ref: "#/definitions/nonNegativeIntegerDefault0"
            },
            required: {
                $ref: "#/definitions/stringArray"
            },
            additionalProperties: {
                $ref: "#"
            },
            definitions: {
                type: "object",
                additionalProperties: {
                    $ref: "#"
                },
                default: {}
            },
            properties: {
                type: "object",
                additionalProperties: {
                    $ref: "#"
                },
                default: {}
            },
            patternProperties: {
                type: "object",
                additionalProperties: {
                    $ref: "#"
                },
                propertyNames: {
                    format: "regex"
                },
                default: {}
            },
            dependencies: {
                type: "object",
                additionalProperties: {
                    anyOf: [{
                        $ref: "#"
                    }, {
                        $ref: "#/definitions/stringArray"
                    }]
                }
            },
            propertyNames: {
                $ref: "#"
            },
            const: !0,
            enum: {
                type: "array",
                items: !0,
                minItems: 1,
                uniqueItems: !0
            },
            type: {
                anyOf: [{
                    $ref: "#/definitions/simpleTypes"
                }, {
                    type: "array",
                    items: {
                        $ref: "#/definitions/simpleTypes"
                    },
                    minItems: 1,
                    uniqueItems: !0
                }]
            },
            format: {
                type: "string"
            },
            contentMediaType: {
                type: "string"
            },
            contentEncoding: {
                type: "string"
            },
            if: {
                $ref: "#"
            },
            then: {
                $ref: "#"
            },
            else: {
                $ref: "#"
            },
            allOf: {
                $ref: "#/definitions/schemaArray"
            },
            anyOf: {
                $ref: "#/definitions/schemaArray"
            },
            oneOf: {
                $ref: "#/definitions/schemaArray"
            },
            not: {
                $ref: "#"
            }
        },
        default: !0
    }
}]);
