! function(e) {
    var t = {};
    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(o, r, function(t) {
                return e[t]
            }.bind(null, r));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 27)
}({
    27: function(e, t) {
        window.addEventListener("message", e => {
                e.source === window && e.data && "backend_installed" === e.data.source && function() {
                    var e = chrome.runtime.connect({
                        name: "treasure"
                    });
                    e.onMessage.addListener(e => {
                        var {
                            type: t,
                            data: n
                        } = e;
                        if ("setting" === t) {
                            var {
                                ghoulEnabled: o,
                                blockLiveStream: r
                            } = n;
                            if (o && r) {
                                var a = document.getElementById("js-player-video");
                                a ? a.parentNode.removeChild(a) : window.addEventListener("load", () => {
                                    var e = document.getElementById("js-player-video");
                                    e && e.parentNode.removeChild(e)
                                })
                            }
                            window.postMessage({
                                source: "setting",
                                data: n
                            }, "*")
                        } else "sync" === t && window.postMessage({
                            source: "sync"
                        }, "*")
                    }), window.addEventListener("message", t => {
                        t.source === window && t.data && "treasure_got" === t.data.source ? (console.log("got"), e && e.postMessage({
                            type: "got"
                        })) : t.source === window && t.data && "treasure_got_res" === t.data.source && (console.log("got_res"), e && e.postMessage({
                            type: "got_res",
                            data: t.data.data
                        }))
                    })
                }()
            }),
            function(e) {
                var t = document.createElement("script");
                t.src = chrome.extension.getURL("build/backend.js"), document.documentElement.appendChild(t), t.parentNode.removeChild(t)
            }()
    }
});
