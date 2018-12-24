! function(e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
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
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 44)
}([, function(e, t, n) {
    "use strict";
    var r = n(15),
        o = n(49),
        a = Object.prototype.toString;
    function s(e) {
        return "[object Array]" === a.call(e)
    }
    function i(e) {
        return null !== e && "object" == typeof e
    }
    function u(e) {
        return "[object Function]" === a.call(e)
    }
    function c(e, t) {
        if (null !== e && void 0 !== e)
            if ("object" != typeof e && (e = [e]), s(e))
                for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
            else
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
    }
    e.exports = {
        isArray: s,
        isArrayBuffer: function(e) {
            return "[object ArrayBuffer]" === a.call(e)
        },
        isBuffer: o,
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
            return "[object Date]" === a.call(e)
        },
        isFile: function(e) {
            return "[object File]" === a.call(e)
        },
        isBlob: function(e) {
            return "[object Blob]" === a.call(e)
        },
        isFunction: u,
        isStream: function(e) {
            return i(e) && u(e.pipe)
        },
        isURLSearchParams: function(e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        },
        isStandardBrowserEnv: function() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
        },
        forEach: c,
        merge: function e() {
            var t = {};
            function n(n, r) {
                "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = n
            }
            for (var r = 0, o = arguments.length; r < o; r++) c(arguments[r], n);
            return t
        },
        extend: function(e, t, n) {
            return c(t, function(t, o) {
                e[o] = n && "function" == typeof t ? r(t, n) : t
            }), e
        },
        trim: function(e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}, , , , , , , , function(e, t) {
    var n, r, o = e.exports = {};
    function a() {
        throw new Error("setTimeout has not been defined")
    }
    function s() {
        throw new Error("clearTimeout has not been defined")
    }
    function i(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === a || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : a
        } catch (e) {
            n = a
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (e) {
            r = s
        }
    }();
    var u, c = [],
        f = !1,
        l = -1;
    function p() {
        f && u && (f = !1, u.length ? c = u.concat(c) : l = -1, c.length && d())
    }
    function d() {
        if (!f) {
            var e = i(p);
            f = !0;
            for (var t = c.length; t;) {
                for (u = c, c = []; ++l < t;) u && u[l].run();
                l = -1, t = c.length
            }
            u = null, f = !1,
                function(e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
        }
    }
    function h(e, t) {
        this.fun = e, this.array = t
    }
    function m() {}
    o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new h(e, t)), 1 !== c.length || f || i(d)
    }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function(e) {
        return []
    }, o.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function() {
        return "/"
    }, o.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function() {
        return 0
    }
}, , function(e, t, n) {
    "use strict";
    (function(t) {
        var r = n(1),
            o = n(51),
            a = {
                "Content-Type": "application/x-www-form-urlencoded"
            };
        function s(e, t) {
            !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }
        var i = {
            adapter: function() {
                var e;
                return "undefined" != typeof XMLHttpRequest ? e = n(16) : void 0 !== t && (e = n(16)), e
            }(),
            transformRequest: [function(e, t) {
                return o(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
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
        r.forEach(["delete", "get", "head"], function(e) {
            i.headers[e] = {}
        }), r.forEach(["post", "put", "patch"], function(e) {
            i.headers[e] = r.merge(a)
        }), e.exports = i
    }).call(this, n(9))
}, , , function(e, t, n) {
    var r = n(47),
        o = "https://api.mllab.cn/dy";
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
            t ? r.post(o + "/geetest", Object.assign({}, e, {
                dyUid: t
            })) : this.cachedGeetest.push(e)
        }
        async ver(e) {
            try {
                var t = await r.get(o + "/ver", {
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
                var e = await r.get("http://api.m.taobao.com/rest/api3.do", {
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
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return function() {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
            return e.apply(t, n)
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(1),
        o = n(52),
        a = n(54),
        s = n(55),
        i = n(56),
        u = n(17),
        c = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(57);
    e.exports = function(e) {
        return new Promise(function(t, f) {
            var l = e.data,
                p = e.headers;
            r.isFormData(l) && delete p["Content-Type"];
            var d = new XMLHttpRequest,
                h = "onreadystatechange",
                m = !1;
            if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in d || i(e.url) || (d = new window.XDomainRequest, h = "onload", m = !0, d.onprogress = function() {}, d.ontimeout = function() {}), e.auth) {
                var w = e.auth.username || "",
                    g = e.auth.password || "";
                p.Authorization = "Basic " + c(w + ":" + g)
            }
            if (d.open(e.method.toUpperCase(), a(e.url, e.params, e.paramsSerializer), !0), d.timeout = e.timeout, d[h] = function() {
                    if (d && (4 === d.readyState || m) && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
                        var n = "getAllResponseHeaders" in d ? s(d.getAllResponseHeaders()) : null,
                            r = {
                                data: e.responseType && "text" !== e.responseType ? d.response : d.responseText,
                                status: 1223 === d.status ? 204 : d.status,
                                statusText: 1223 === d.status ? "No Content" : d.statusText,
                                headers: n,
                                config: e,
                                request: d
                            };
                        o(t, f, r), d = null
                    }
                }, d.onerror = function() {
                    f(u("Network Error", e, null, d)), d = null
                }, d.ontimeout = function() {
                    f(u("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", d)), d = null
                }, r.isStandardBrowserEnv()) {
                var y = n(58),
                    v = (e.withCredentials || i(e.url)) && e.xsrfCookieName ? y.read(e.xsrfCookieName) : void 0;
                v && (p[e.xsrfHeaderName] = v)
            }
            if ("setRequestHeader" in d && r.forEach(p, function(e, t) {
                    void 0 === l && "content-type" === t.toLowerCase() ? delete p[t] : d.setRequestHeader(t, e)
                }), e.withCredentials && (d.withCredentials = !0), e.responseType) try {
                d.responseType = e.responseType
            } catch (t) {
                if ("json" !== e.responseType) throw t
            }
            "function" == typeof e.onDownloadProgress && d.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && d.upload && d.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) {
                d && (d.abort(), f(e), d = null)
            }), void 0 === l && (l = null), d.send(l)
        })
    }
}, function(e, t, n) {
    "use strict";
    var r = n(53);
    e.exports = function(e, t, n, o, a) {
        var s = new Error(e);
        return r(s, t, n, o, a)
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return !(!e || !e.__CANCEL__)
    }
}, function(e, t, n) {
    "use strict";
    function r(e) {
        this.message = e
    }
    r.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, r.prototype.__CANCEL__ = !0, e.exports = r
}, , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    var r = n(45),
        o = n(46),
        a = n(14),
        s = n(66);
    window.localStorage.setting = function() {
        if (window.localStorage.setting) {
            var e = JSON.parse(window.localStorage.setting);
            return !!(e && e.setting && e.setting.hasOwnProperty("ghoulEnabled") && e.setting.hasOwnProperty("vol") && e.setting.hasOwnProperty("blockLiveStream") && e.setting.hasOwnProperty("delayRange") && e.setting.hasOwnProperty("autoClose") && e.setting.hasOwnProperty("autoDrive") && e.setting.hasOwnProperty("minimalism") && e.setting.hasOwnProperty("autoOpenBox") && e.setting.hasOwnProperty("blockEnterEffect") && e.setting.hasOwnProperty("autoAnswerEnabled") && e.setting.hasOwnProperty("autoRefreshFreq") && e.setting.hasOwnProperty("blockEnterBarrage") && e.setting.hasOwnProperty("previewClassName") && e.setting.hasOwnProperty("rocketOnly") && e.setting.hasOwnProperty("netTimeSync")) && window.localStorage.setting
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
            netTimeSync: !0
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
    });
    var i = new r,
        u = new o;
    chrome.webRequest.onBeforeRequest.addListener(e => {
        var {
            setting: t
        } = JSON.parse(window.localStorage.setting);
        return {
            cancel: "https://www.douyu.com" === e.initiator && (e.url.endsWith(".m4s") || e.url.endsWith(".wsv?type=3") || -1 !== e.url.indexOf(".flv")) && t.ghoulEnabled && t.blockLiveStream
        }
    }, {
        urls: ["<all_urls>"]
    }, ["blocking"]), chrome.webRequest.onBeforeRequest.addListener(function() {
        return {
            cancel: !0
        }
    }, {
        urls: ["*://pubads.g.doubleclick.net/*", "*://staticlive.douyucdn.cn/common/simplayer/assets/gameAdversion.swf?*", "*://staticlive.douyucdn.cn/common/simplayer/assets/videoAd.swf?*"]
    }, ["blocking"]);
    var c = null;
    chrome.runtime.onConnect.addListener(e => {
        var {
            setting: t
        } = window.localStorage;
        "treasure" === e.name ? (t && new Promise(e => {
            c ? e(c) : a.standardTime().then(t => {
                c = t - Date.now() + 20, e(c)
            }).catch(t => e(t))
        }).then(() => {
            var n = JSON.parse(t).setting;
            n.netTimeSync && c && (n.timeDelta = c), e.postMessage({
                type: "setting",
                data: n
            })
        }), e.onMessage.addListener(t => {
            var {
                type: n,
                data: r
            } = t;
            if ("got" === n) {
                var {
                    setting: o
                } = JSON.parse(window.localStorage.setting) || {};
                s.playAudio(chrome.extension.getURL("assets/ding.wav"), o.vol / 100)
            } else if ("got_res" === n) {
                u.upload(r);
                var {
                    stat: i
                } = JSON.parse(window.localStorage.stat) || {}, c = function() {
                    var e = new Date;
                    return `${e.getFullYear()}${e.getMonth()}${e.getDate()}`
                }();
                i.day !== c && function(e, t) {
                    e.day = t, e.box = 0, e.zan = 0, e.wen = 0, e.song = 0, e.silver = 0
                }(i, c), ++i.box;
                var {
                    award_type: f,
                    silver: l,
                    prop_count: p,
                    prop_id: d,
                    prop_name: h
                } = r;
                "1" === f ? i.silver += parseInt(l, 10) : "2" === f ? "赞" === h ? i.zan += parseInt(p, 10) : "稳" === h ? i.wen += parseInt(p, 10) : "怂" === h ? i.song += parseInt(p, 10) : console.log("unknown prop_name:", r) : console.log("unknown award_type:", r), window.localStorage.stat = JSON.stringify({
                    stat: i
                }), e.postMessage({
                    type: "sync"
                })
            } else "geetest_data" === n ? u.update(r) : "dy_login" === n && a.dyLogin(r)
        })) : "xiaohulu" === e.name && JSON.parse(t).setting.autoDrive && (e.postMessage({
            type: "enable"
        }), e.onMessage.addListener(e => {
            var {
                type: t,
                data: n
            } = e, {
                setting: r
            } = JSON.parse(window.localStorage.setting) || {};
            "update_rooms" === t && r.autoDrive && i.update(n)
        }))
    }), window.checkUpdate = async function(e) {
        var t = await a.ver(e);
        return !(!t || 0 !== t.code) && t.data
    }
}, function(e, t) {
    async function n(e) {
        return new Promise(t => setTimeout(() => t(), e))
    }
    e.exports = class {
        constructor() {
            this.state = "IDLE"
        }
        update(e) {
            var {
                state: t
            } = this;
            "IDLE" === t && (this.state = "DRIVING", this.drive(e))
        }
        async drive(e) {
            for (var t = new Set, r = new Set; e.length > 0;) {
                var o = e.shift();
                if (!t.has(o.url)) {
                    for (console.log(r.size); r.size >= 1;) console.log(">=1"), await n(1e3);
                    r.add(o.url), chrome.tabs.create({
                        url: o.url,
                        selected: !1
                    }), await n(333)
                }
            }
            this.state = "DRIVING"
        }
    }
}, function(e, t, n) {
    var r = n(14);
    e.exports = class {
        constructor() {
            this.data = null
        }
        update(e) {
            this.data = e
        }
        upload(e) {
            var t = parseInt(e.award_type, 10) || -1,
                n = parseInt(e.prop_id, 10) || -1,
                o = parseInt(e.prop_count, 10) || 0,
                a = parseInt(e.silver, 10) || -1,
                s = parseInt(e.silver_balance, 10) || -1;
            this.data && (r.uploadGeetest(Object.assign({}, this.data, {
                ts: {
                    awardType: t,
                    propId: n,
                    propCount: o,
                    silver: a,
                    silverBalance: s
                }
            })), this.data = null)
        }
    }
}, function(e, t, n) {
    e.exports = n(48)
}, function(e, t, n) {
    "use strict";
    var r = n(1),
        o = n(15),
        a = n(50),
        s = n(11);
    function i(e) {
        var t = new a(e),
            n = o(a.prototype.request, t);
        return r.extend(n, a.prototype, t), r.extend(n, t), n
    }
    var u = i(s);
    u.Axios = a, u.create = function(e) {
        return i(r.merge(s, e))
    }, u.Cancel = n(19), u.CancelToken = n(64), u.isCancel = n(18), u.all = function(e) {
        return Promise.all(e)
    }, u.spread = n(65), e.exports = u, e.exports.default = u
}, function(e, t) {
    function n(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    e.exports = function(e) {
        return null != e && (n(e) || function(e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
        }(e) || !!e._isBuffer)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(11),
        o = n(1),
        a = n(59),
        s = n(60);
    function i(e) {
        this.defaults = e, this.interceptors = {
            request: new a,
            response: new a
        }
    }
    i.prototype.request = function(e) {
        "string" == typeof e && (e = o.merge({
            url: arguments[0]
        }, arguments[1])), (e = o.merge(r, {
            method: "get"
        }, this.defaults, e)).method = e.method.toLowerCase();
        var t = [s, void 0],
            n = Promise.resolve(e);
        for (this.interceptors.request.forEach(function(e) {
                t.unshift(e.fulfilled, e.rejected)
            }), this.interceptors.response.forEach(function(e) {
                t.push(e.fulfilled, e.rejected)
            }); t.length;) n = n.then(t.shift(), t.shift());
        return n
    }, o.forEach(["delete", "get", "head", "options"], function(e) {
        i.prototype[e] = function(t, n) {
            return this.request(o.merge(n || {}, {
                method: e,
                url: t
            }))
        }
    }), o.forEach(["post", "put", "patch"], function(e) {
        i.prototype[e] = function(t, n, r) {
            return this.request(o.merge(r || {}, {
                method: e,
                url: t,
                data: n
            }))
        }
    }), e.exports = i
}, function(e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = function(e, t) {
        r.forEach(e, function(n, r) {
            r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
        })
    }
}, function(e, t, n) {
    "use strict";
    var r = n(17);
    e.exports = function(e, t, n) {
        var o = n.config.validateStatus;
        n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n, r, o) {
        return e.config = t, n && (e.code = n), e.request = r, e.response = o, e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(1);
    function o(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    e.exports = function(e, t, n) {
        if (!t) return e;
        var a;
        if (n) a = n(t);
        else if (r.isURLSearchParams(t)) a = t.toString();
        else {
            var s = [];
            r.forEach(t, function(e, t) {
                null !== e && void 0 !== e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, function(e) {
                    r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), s.push(o(t) + "=" + o(e))
                }))
            }), a = s.join("&")
        }
        return a && (e += (-1 === e.indexOf("?") ? "?" : "&") + a), e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(1),
        o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function(e) {
        var t, n, a, s = {};
        return e ? (r.forEach(e.split("\n"), function(e) {
            if (a = e.indexOf(":"), t = r.trim(e.substr(0, a)).toLowerCase(), n = r.trim(e.substr(a + 1)), t) {
                if (s[t] && o.indexOf(t) >= 0) return;
                s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([n]) : s[t] ? s[t] + ", " + n : n
            }
        }), s) : s
    }
}, function(e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = r.isStandardBrowserEnv() ? function() {
        var e, t = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");
        function o(e) {
            var r = e;
            return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
            }
        }
        return e = o(window.location.href),
            function(t) {
                var n = r.isString(t) ? o(t) : t;
                return n.protocol === e.protocol && n.host === e.host
            }
    }() : function() {
        return !0
    }
}, function(e, t, n) {
    "use strict";
    var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function o() {
        this.message = "String contains an invalid character"
    }
    o.prototype = new Error, o.prototype.code = 5, o.prototype.name = "InvalidCharacterError", e.exports = function(e) {
        for (var t, n, a = String(e), s = "", i = 0, u = r; a.charAt(0 | i) || (u = "=", i % 1); s += u.charAt(63 & t >> 8 - i % 1 * 8)) {
            if ((n = a.charCodeAt(i += .75)) > 255) throw new o;
            t = t << 8 | n
        }
        return s
    }
}, function(e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = r.isStandardBrowserEnv() ? {
        write: function(e, t, n, o, a, s) {
            var i = [];
            i.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), r.isString(o) && i.push("path=" + o), r.isString(a) && i.push("domain=" + a), !0 === s && i.push("secure"), document.cookie = i.join("; ")
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
}, function(e, t, n) {
    "use strict";
    var r = n(1);
    function o() {
        this.handlers = []
    }
    o.prototype.use = function(e, t) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t
        }), this.handlers.length - 1
    }, o.prototype.eject = function(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }, o.prototype.forEach = function(e) {
        r.forEach(this.handlers, function(t) {
            null !== t && e(t)
        })
    }, e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = n(1),
        o = n(61),
        a = n(18),
        s = n(11),
        i = n(62),
        u = n(63);
    function c(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }
    e.exports = function(e) {
        return c(e), e.baseURL && !i(e.url) && (e.url = u(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
            delete e.headers[t]
        }), (e.adapter || s.adapter)(e).then(function(t) {
            return c(e), t.data = o(t.data, t.headers, e.transformResponse), t
        }, function(t) {
            return a(t) || (c(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
        })
    }
}, function(e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = function(e, t, n) {
        return r.forEach(n, function(n) {
            e = n(e, t)
        }), e
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(19);
    function o(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function(e) {
            t = e
        });
        var n = this;
        e(function(e) {
            n.reason || (n.reason = new r(e), t(n.reason))
        })
    }
    o.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason
    }, o.source = function() {
        var e;
        return {
            token: new o(function(t) {
                e = t
            }),
            cancel: e
        }
    }, e.exports = o
}, function(e, t, n) {
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
                var n = new Audio;
                n.src = e, n.volume = t, n.play()
            }
        }
    }
}]);
