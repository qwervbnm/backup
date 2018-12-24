! function(e) {
    var t = {};
    function r(n) {
        if (t[n]) return t[n].exports;
        var s = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(s.exports, s, s.exports, r), s.l = !0, s.exports
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
            for (var s in e) r.d(n, s, function(t) {
                return e[t]
            }.bind(null, s));
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
    }, r.p = "", r(r.s = 28)
}({
    28: function(e, t, r) {
        var n = r(29),
            s = r(33);
        async function i(e) {
            return new Promise(t => setTimeout(() => t(), e))
        }
        function o(e) {
            console.log("setup backend"), s({
                setting: e
            });
            var t = new n({
                setting: e
            });
            t.install(), t.on("got", () => {
                !async function() {
                    if (!document.title_src)
                        for (document.title_src = document.title, document.title = "[新箱子验证] " + document.title;;) {
                            if (!document.hidden) {
                                document.title = document.title_src, delete document.title_src;
                                break
                            }
                            await i(1e3)
                        }
                }(), window.postMessage({
                    source: "treasure_got"
                }, "*")
            }), t.on("got_res", e => {
                window.postMessage({
                    source: "treasure_got_res",
                    data: e
                }, "*")
            }), t.on("miss", () => {
                e.ghoulEnabled && e.autoClose && t.noTs && window.close()
            }), t.on("barrage", e => {}), window.addEventListener("message", r => {
                r.source === window && r.data && "sync" === r.data.source && e.autoClose && t.noTs && window.close()
            })
        }
        window.postMessage({
            source: "backend_installed"
        }, "*"), window.addEventListener("message", e => {
            e.source === window && e.data && "setting" === e.data.source && o(e.data.data)
        })
    },
    29: function(e, t, r) {
        var {
            EventEmitter: n
        } = r(30), s = r(31), i = r(32);
        async function o(e) {
            return new Promise(t => setTimeout(() => t(), e))
        }
        e.exports = class extends n {
            constructor(e) {
                var t = e.setting;
                super(), this.setting = t, this.state = "IDLE", this.pendingBox = new s((e, t) => e.surplusTime < t.surplusTime), this.noTs = !0, this.muteService = null
            }
            handlePendingBoxes(e) {
                if (e && e instanceof Array ? e.forEach(e => this.pendingBox.add(e)) : e && this.pendingBox.add(e), !this.pendingBox.isEmpty() && "IDLE" === this.state) {
                    this.noTs = !1, this.state = "WAITING";
                    var {
                        delayRange: t
                    } = this.setting, r = Math.max(t[1] - t[0], 0) * Math.random() + t[0], n = this.pendingBox.poll();
                    setTimeout(() => this.handleTimeupBox(n), Math.max(1e3 * n.surplusTime - Date.now() + r + 5, 0))
                }
                this.pendingBox.isEmpty() && "IDLE" === this.state && (this.noTs = !0)
            }
            handleTimeupBox(e) {
                "WAITING" === this.state && (console.log("picking"), PlayerAsideApp.container.registry.store.dispatch({
                    type: "DRAW_TREASURE",
                    payload: {
                        data: e,
                        type: "init"
                    }
                }))
            }
            async showGeeTestPanel() {
                for (var e = "INIT";;) {
                    if ("INIT" === e) {
                        var t = document.getElementsByClassName("geetest_radar_tip");
                        t && t.length > 0 && (t[0].click && t[0].click(), e = "GEE")
                    } else if ("GEE" === e) {
                        var r = document.getElementsByClassName("geetest_popup_box");
                        r && r.length > 0 && (r[0].style.width = "347px", e = "WAIT")
                    } else if ("WAIT" === e) {
                        var n = document.getElementsByClassName("geetest_popup_box");
                        if (!n || n.length <= 0) break
                    }
                    await o(200)
                }
            }
            getMuteService() {
                return this.muteService || (this.muteService = window.webpackJsonp([], null, ["6cb3"]).a.prototype.muteService), this.muteService
            }
            handleBarrages(e, t) {
                try {
                    e.forEach(e => {
                        var {
                            senderId: t,
                            senderNick: r,
                            userLevel: n,
                            hasCard: s,
                            fansMedal: i,
                            barrageContent: o,
                            uniqueIdentifier: a
                        } = e;
                        o && this.emit("barrage", {
                            senderId: t,
                            senderNick: r,
                            userLevel: n,
                            hasCard: s,
                            fansMedal: i,
                            barrageContent: o,
                            uniqueIdentifier: a
                        })
                    })
                } catch (e) {
                    console.log("err:", e)
                }
            }
            install() {
                var e = this;
                i.hook([{
                    name: "1c14",
                    path: ["a", "prototype", ["mapping", "dataMap", "showDrawTips", "drawTreasure"]],
                    hooks: {
                        mapping(t, r, n) {
                            var s = t.call(this, r, n);
                            return e.setting.ghoulEnabled && (s.destroyTime -= s.delayTime, s.surplusTime -= s.delayTime, s.delayTime = 1), s
                        },
                        dataMap(t, r, n) {
                            var s = t.call(this, r, n);
                            return e.setting.ghoulEnabled && e.handlePendingBoxes(s), s
                        },
                        showDrawTips(t, r) {
                            return "WAITING" === e.state && 0 !== parseInt(r.code, 10) ? (e.state = "IDLE", e.handlePendingBoxes(), e.emit("miss")) : "GEE_SHOW" === e.state && 0 !== parseInt(r.code, 10) ? (e.state = "IDLE", e.handlePendingBoxes()) : 0 === parseInt(r.code, 10) && (e.state = "IDLE", e.handlePendingBoxes(), e.emit("got_res", r)), t.call(this, r)
                        },
                        drawTreasure(t, r, n) {
                            return "GEE_SHOW" === e.state && "check" === n && (e.state = "GEE_CHECKING"), t.call(this, r, n)
                        }
                    }
                }, {
                    name: "9408",
                    path: ["a", "WrappedComponent", "prototype", ["componentWillReceiveProps"]],
                    hooks: {
                        componentWillReceiveProps(t, r) {
                            var {
                                treasureDrawResult: n
                            } = r;
                            if ("WAITING" === e.state && n && n.data && n.data.geetest) {
                                e.emit("got");
                                var {
                                    autoOpenBox: s
                                } = e.setting;
                                s && e.showGeeTestPanel(), e.state = "GEE_SHOW"
                            }
                            return t.call(this, r)
                        }
                    }
                }, {
                    name: "b33f",
                    path: ["a", "prototype", ["render"]],
                    hooks: {
                        render(t) {
                            return e.setting.blockEnterEffect && (this.state.isRender = !1), t.call(this)
                        }
                    }
                }, {
                    name: "9ce9",
                    path: ["a", "prototype", ["init"]],
                    hooks: {
                        init(e, t) {
                            try {
                                var r = document.getElementsByClassName("AnchorLevelTip-tipBarNum")[0];
                                r.appendChild(document.createTextNode(", ")), r.appendChild(document.createTextNode(t.$ROOM.levelInfo.experience))
                            } catch (e) {
                                console.log("err:", e)
                            }
                            return e.call(this, t)
                        }
                    }
                }, {
                    name: "597a",
                    path: ["a", "WrappedComponent", "prototype", ["render"]],
                    hooks: {
                        render(e) {
                            try {
                                this.props.ownerFansRank > 0 && (this.props.ownerFansRank = -this.props.ownerFansRank)
                            } catch (e) {
                                console.log("err:", e)
                            }
                            return e.call(this)
                        }
                    }
                }, {
                    name: "fd73",
                    path: ["a", "WrappedComponent", "prototype", ["render"]],
                    hooks: {
                        render(e) {
                            return e.call(this)
                        }
                    }
                }])
            }
        }
    },
    30: function(e, t) {
        function r() {
            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
        }
        function n(e) {
            return "function" == typeof e
        }
        function s(e) {
            return "object" == typeof e && null !== e
        }
        function i(e) {
            return void 0 === e
        }
        e.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._maxListeners = void 0, r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function(e) {
            if (! function(e) {
                    return "number" == typeof e
                }(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
            return this._maxListeners = e, this
        }, r.prototype.emit = function(e) {
            var t, r, o, a, p, h;
            if (this._events || (this._events = {}), "error" === e && (!this._events.error || s(this._events.error) && !this._events.error.length)) {
                if ((t = arguments[1]) instanceof Error) throw t;
                var u = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                throw u.context = t, u
            }
            if (i(r = this._events[e])) return !1;
            if (n(r)) switch (arguments.length) {
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
                    a = Array.prototype.slice.call(arguments, 1), r.apply(this, a)
            } else if (s(r))
                for (a = Array.prototype.slice.call(arguments, 1), o = (h = r.slice()).length, p = 0; p < o; p++) h[p].apply(this, a);
            return !0
        }, r.prototype.addListener = function(e, t) {
            var o;
            if (!n(t)) throw TypeError("listener must be a function");
            return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, n(t.listener) ? t.listener : t), this._events[e] ? s(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, s(this._events[e]) && !this._events[e].warned && (o = i(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners) && o > 0 && this._events[e].length > o && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
        }, r.prototype.on = r.prototype.addListener, r.prototype.once = function(e, t) {
            if (!n(t)) throw TypeError("listener must be a function");
            var r = !1;
            function s() {
                this.removeListener(e, s), r || (r = !0, t.apply(this, arguments))
            }
            return s.listener = t, this.on(e, s), this
        }, r.prototype.removeListener = function(e, t) {
            var r, i, o, a;
            if (!n(t)) throw TypeError("listener must be a function");
            if (!this._events || !this._events[e]) return this;
            if (o = (r = this._events[e]).length, i = -1, r === t || n(r.listener) && r.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
            else if (s(r)) {
                for (a = o; a-- > 0;)
                    if (r[a] === t || r[a].listener && r[a].listener === t) {
                        i = a;
                        break
                    }
                if (i < 0) return this;
                1 === r.length ? (r.length = 0, delete this._events[e]) : r.splice(i, 1), this._events.removeListener && this.emit("removeListener", e, t)
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
            if (n(r = this._events[e])) this.removeListener(e, r);
            else if (r)
                for (; r.length;) this.removeListener(e, r[r.length - 1]);
            return delete this._events[e], this
        }, r.prototype.listeners = function(e) {
            return this._events && this._events[e] ? n(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
        }, r.prototype.listenerCount = function(e) {
            if (this._events) {
                var t = this._events[e];
                if (n(t)) return 1;
                if (t) return t.length
            }
            return 0
        }, r.listenerCount = function(e, t) {
            return e.listenerCount(t)
        }
    },
    31: function(e, t, r) {
        "use strict";
        (function(e) {
            var t = function(e, t) {
                return e < t
            };
            function n(e) {
                if (!(this instanceof n)) return new n(e);
                this.array = [], this.size = 0, this.compare = e || t
            }
            n.prototype.clone = function() {
                var e = new n(this.compare);
                e.size = this.size;
                for (var t = 0; t < this.size; t++) e.array.push(this.array[t]);
                return e
            }, n.prototype.add = function(e) {
                var t, r, n = this.size;
                for (this.array[this.size] = e, this.size += 1; n > 0 && (t = n - 1 >> 1, r = this.array[t], this.compare(e, r));) this.array[n] = r, n = t;
                this.array[n] = e
            }, n.prototype.heapify = function(e) {
                var t;
                for (this.array = e, this.size = e.length, t = this.size >> 1; t >= 0; t--) this._percolateDown(t)
            }, n.prototype._percolateUp = function(e, t) {
                for (var r, n, s = this.array[e]; e > 0 && (r = e - 1 >> 1, n = this.array[r], t || this.compare(s, n));) this.array[e] = n, e = r;
                this.array[e] = s
            }, n.prototype._percolateDown = function(e) {
                for (var t, r, n, s = this.size, i = this.size >>> 1, o = this.array[e]; e < i && (r = (t = 1 + (e << 1)) + 1, n = this.array[t], r < s && this.compare(this.array[r], n) && (t = r, n = this.array[r]), this.compare(n, o));) this.array[e] = n, e = t;
                this.array[e] = o
            }, n.prototype._removeAt = function(e) {
                if (!(e > this.size - 1 || e < 0)) return this._percolateUp(e, !0), this.poll()
            }, n.prototype.remove = function(e) {
                for (var t = 0; t < this.size; t++)
                    if (!this.compare(this.array[t], e) && !this.compare(e, this.array[t])) return this._removeAt(t), !0;
                return !1
            }, n.prototype._batchRemove = function(e, t) {
                var r = new Array(t || this.size),
                    n = 0;
                if ("function" == typeof e && this.size)
                    for (var s = 0; s < this.size && n < r.length;) e(this.array[s]) ? (r[n] = this._removeAt(s), n++, s >>= 1) : s++;
                return r.length = n, r
            }, n.prototype.removeOne = function(e) {
                var t = this._batchRemove(e, 1);
                return t.length > 0 ? t[0] : void 0
            }, n.prototype.removeMany = function(e, t) {
                return this._batchRemove(e, t)
            }, n.prototype.peek = function() {
                if (0 != this.size) return this.array[0]
            }, n.prototype.poll = function() {
                if (0 != this.size) {
                    var e = this.array[0];
                    return this.size > 1 ? (this.array[0] = this.array[--this.size], this._percolateDown(0)) : this.size -= 1, e
                }
            }, n.prototype.replaceTop = function(e) {
                if (0 != this.size) {
                    var t = this.array[0];
                    return this.array[0] = e, this._percolateDown(0), t
                }
            }, n.prototype.trim = function() {
                this.array = this.array.slice(0, this.size)
            }, n.prototype.isEmpty = function() {
                return 0 === this.size
            }, n.prototype.forEach = function(e) {
                if (!this.isEmpty() && "function" == typeof e)
                    for (var t = 0, r = this.clone(); !r.isEmpty();) e(r.poll(), t++)
            }, n.prototype.kSmallest = function(e) {
                if (0 == this.size) return [];
                var t = this.compare,
                    r = this.array,
                    s = new n(function(e, n) {
                        return t(r[e], r[n])
                    });
                e = Math.min(this.size, e);
                var i = new Array(e),
                    o = 0;
                for (s.add(0); o < e;) {
                    var a = s.poll();
                    i[o++] = this.array[a];
                    var p = 1 + (a << 1),
                        h = p + 1;
                    p < this.size && s.add(p), h < this.size && s.add(h)
                }
                return i
            };
            r.c[r.s] === e && function() {
                var e = new n(function(e, t) {
                    return e < t
                });
                for (e.add(1), e.add(0), e.add(5), e.add(4), e.add(3); !e.isEmpty();) console.log(e.poll())
            }(), e.exports = n
        }).call(this, r(8)(e))
    },
    32: function(e, t) {
        async function r(e) {
            return new Promise(t => setTimeout(() => t(), e))
        }
        function n(e, t) {
            var {
                name: r,
                path: n,
                hooks: s
            } = t;
            Object.defineProperty(e, r, {
                get: () => e[`_${r}`],
                set: t => {
                    var i = t.exports;
                    Object.defineProperty(t, "exports", {
                        get: () => t._exports,
                        set: e => {
                            ! function e(t, r, n) {
                                if (!(r.length <= 0)) {
                                    var s = r.shift();
                                    if ("prototype" === s) {
                                        s = r.shift();
                                        var i = r.length,
                                            o = [];
                                        s instanceof Array || (s = [].push(s)), s.forEach(e => o[e] = t.prototype[e]);
                                        var a = {};
                                        s.forEach(s => {
                                            a[s] = {
                                                get: () => i > 0 ? t.prototype[`_${s}`] : function(...e) {
                                                    return n[s].call(this, t.prototype[`_${s}`], ...e)
                                                },
                                                set: i => {
                                                    e(i, r, n), t.prototype[`_${s}`] = i
                                                }
                                            }
                                        }), Object.defineProperties(t.prototype, a), s.forEach(e => t.prototype[e] = o[e])
                                    } else {
                                        var p = r.length,
                                            h = t[s];
                                        Object.defineProperty(t, s, {
                                            get: () => p > 0 ? t[`_${s}`] : function(...e) {
                                                return n[s].call(this, t[`_${s}`], ...e)
                                            },
                                            set: i => {
                                                e(i, r, n), t[`_${s}`] = i
                                            }
                                        }), h && (t[s] = h)
                                    }
                                }
                            }(e, n, s), t._exports = e
                        }
                    }), t.exports = i, e[`_${r}`] = t
                }
            })
        }
        e.exports = {
            hook: async function(e) {
                var t = await async function() {
                    for (; !window.webpackJsonp;) await r(333);
                    return new Promise(e => {
                        var t = "fakeModule",
                            r = {
                                [t]: (t, r, n) => {
                                    e(n.c)
                                }
                            };
                        window.webpackJsonp([], r, [t])
                    })
                }();
                e.forEach(e => {
                    n(t, e)
                })
            }
        }
    },
    33: function(e, t) {
        e.exports = (e => {
            var t = e.setting,
                {
                    minimalism: r
                } = t;
            r && Object.defineProperty(window, "SHARK_LOADER_CONFIG", {
                get: () => window._SHARK_LOADER_CONFIG,
                set: e => {
                    e = {
                        P0: [{
                            name: "vendor",
                            url: ["https://sta-op.douyucdn.cn/front-publish/live-master/lib/vendor-room_ec0828f.js"]
                        }],
                        P1: [{
                            name: "sdk",
                            url: ["https://sta-op.douyucdn.cn/front-publish/live-master/lib/sdk-room_f50223a.js"]
                        }],
                        P2: [{
                            name: "page",
                            url: ["https://sta-op.douyucdn.cn/front-publish/live-master/js/room/page_8a8550f.js"]
                        }],
                        P3: [{
                            name: "player",
                            url: ["https://sta-op.douyucdn.cn/front-publish/live-master/js/room/player_8a8550f.js"]
                        }],
                        P4: [{
                            name: "common",
                            url: ["https://sta-op.douyucdn.cn/front-publish/live-master/js/room/common_8a8550f.js"]
                        }],
                        T0: [{
                            name: "login",
                            url: ["https://sta-op.douyucdn.cn/front-publish/live-master/js/room/login_d236533.js"]
                        }],
                        T3: [{
                            name: "playerAside",
                            url: ["https://sta-op.douyucdn.cn/front-publish/live-master/js/room/playerAside_3b54694.js"]
                        }],
                        Tasync: [{
                            name: "menu",
                            url: ["https://sta-op.douyucdn.cn/front-publish/live-master/js/room/menu_b854873.js"]
                        }, {
                            name: "superMenu",
                            url: ["https://sta-op.douyucdn.cn/front-publish/live-master/js/room/superMenu_5972533.js"]
                        }, {
                            name: "kingGlorySummerComponent",
                            url: ["https://sta-op.douyucdn.cn/front-publish/live-master/js/room/kingGlorySummerComponent_bb867b6.js"]
                        }, {
                            name: "accountSecurity",
                            url: ["https://sta-op.douyucdn.cn/front-publish/live-master/js/room/accountSecurity_e46f0f2.js"]
                        }, {
                            name: "pubgInfoComponent",
                            url: ["https://sta-op.douyucdn.cn/front-publish/live-master/js/room/pubgInfoComponent_91cb9bc.js"]
                        }, {
                            name: "actAnnual10",
                            url: ["https://sta-op.douyucdn.cn/front-publish/live-master/js/room/actAnnual10_5575719.js"]
                        }, {
                            name: "wzryAnchor1811",
                            url: ["https://sta-op.douyucdn.cn/front-publish/live-master/js/room/wzryAnchor1811_2340928.js"]
                        }]
                    }, window._SHARK_LOADER_CONFIG = e
                }
            })
        })
    },
    8: function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }), e.webpackPolyfill = 1), e
        }
    }
});
