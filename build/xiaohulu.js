! function(e) {
    var t = {};
    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
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
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) r.d(n, o, function(t) {
                return e[t]
            }.bind(null, o));
        return n
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 37)
}({
    37: function(e, t) {
        var r = chrome.runtime.connect({
            name: "xiaohulu"
        });
        r.onMessage.addListener(e => {
            var {
                type: t
            } = e;
            if ("enable" === t) {
                var n = function() {
                    var e = [];
                    return document.querySelectorAll("a[rel=noreferrer]").forEach(t => {
                        var r = t.getAttribute("href");
                        if (r.startsWith("http://www.douyu.com") || r.startsWith("https://www.douyu.com")) try {
                            var n = t.children[0].children[1].children[0].children[1].textContent,
                                o = t.children[0].children[1].children[1].children[1].textContent;
                            e.push({
                                url: r,
                                startTime: n,
                                surplusTime: o
                            })
                        } catch (e) {}
                    }), e
                }();
                console.log("data:", n), r.postMessage({
                    type: "update_rooms",
                    data: n
                })
            }
        })
    }
});
