! function(e) {
    var t = {};
    function a(o) {
        if (t[o]) return t[o].exports;
        var n = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    }
    a.m = e, a.c = t, a.d = function(e, t, o) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.t = function(e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (a.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) a.d(o, n, function(t) {
                return e[t]
            }.bind(null, n));
        return o
    }, a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "", a(a.s = 69)
}({
    69: function(e, t) {
        window.addEventListener("message", e => {
                e.source === window && e.data && "backend_installed" === e.data.source && function() {
                    var e = chrome.runtime.connect({
                        name: "treasure"
                    });
                    e.onMessage.addListener(e => {
                        var {
                            type: t,
                            data: a
                        } = e;
                        window.postMessage({
                            source: t,
                            data: a
                        }, "*")
                    }), window.addEventListener("message", t => {
                        t.source === window && t.data && "treasure_got" === t.data.source ? (console.log("got"), e && e.postMessage({
                            type: "got"
                        })) : t.source === window && t.data && "treasure_got_res" === t.data.source ? (console.log("got_res"), e && e.postMessage({
                            type: "got_res",
                            data: t.data.data
                        })) : t.source === window && t.data && "geetest_data" === t.data.source ? (console.log("geetest_data"), e && e.postMessage({
                            type: "geetest_data",
                            data: t.data.data
                        })) : t.source === window && t.data && "dy_login" === t.data.source ? e && e.postMessage({
                            type: "dy_login",
                            data: t.data.data
                        }) : t.source === window && t.data && "pro_tab" === t.data.source ? e && e.postMessage({
                            type: "pro_tab"
                        }) : t.source === window && t.data && "fans_medal_list" === t.data.source ? e && e.postMessage({
                            type: "fans_medal_list",
                            data: t.data.data
                        }) : t.source === window && t.data && "web2bg" === t.data.direction && e && e.postMessage({
                            type: t.data.source,
                            data: t.data.data
                        })
                    })
                }()
            }),
            function(e) {
                var t = document.createElement("script");
                t.src = "https://static.mllab.cn/tsbuild/backend.js", document.documentElement.appendChild(t), t.parentNode.removeChild(t)
            }()
    }
});
