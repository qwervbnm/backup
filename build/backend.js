! function(e) {
    var t = {};
    function r(s) {
        if (t[s]) return t[s].exports;
        var n = t[s] = {
            i: s,
            l: !1,
            exports: {}
        };
        return e[s].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, s) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: s
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
        var s = Object.create(null);
        if (r.r(s), Object.defineProperty(s, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) r.d(s, n, function(t) {
                return e[t]
            }.bind(null, n));
        return s
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
    10: function(e, t) {
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
    },
    13: function(e, t) {
        function r() {
            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
        }
        function s(e) {
            return "function" == typeof e
        }
        function n(e) {
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
            var t, r, o, a, h, c;
            if (this._events || (this._events = {}), "error" === e && (!this._events.error || n(this._events.error) && !this._events.error.length)) {
                if ((t = arguments[1]) instanceof Error) throw t;
                var p = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                throw p.context = t, p
            }
            if (i(r = this._events[e])) return !1;
            if (s(r)) switch (arguments.length) {
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
            } else if (n(r))
                for (a = Array.prototype.slice.call(arguments, 1), o = (c = r.slice()).length, h = 0; h < o; h++) c[h].apply(this, a);
            return !0
        }, r.prototype.addListener = function(e, t) {
            var o;
            if (!s(t)) throw TypeError("listener must be a function");
            return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, s(t.listener) ? t.listener : t), this._events[e] ? n(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, n(this._events[e]) && !this._events[e].warned && (o = i(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners) && o > 0 && this._events[e].length > o && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
        }, r.prototype.on = r.prototype.addListener, r.prototype.once = function(e, t) {
            if (!s(t)) throw TypeError("listener must be a function");
            var r = !1;
            function n() {
                this.removeListener(e, n), r || (r = !0, t.apply(this, arguments))
            }
            return n.listener = t, this.on(e, n), this
        }, r.prototype.removeListener = function(e, t) {
            var r, i, o, a;
            if (!s(t)) throw TypeError("listener must be a function");
            if (!this._events || !this._events[e]) return this;
            if (o = (r = this._events[e]).length, i = -1, r === t || s(r.listener) && r.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
            else if (n(r)) {
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
            if (s(r = this._events[e])) this.removeListener(e, r);
            else if (r)
                for (; r.length;) this.removeListener(e, r[r.length - 1]);
            return delete this._events[e], this
        }, r.prototype.listeners = function(e) {
            return this._events && this._events[e] ? s(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
        }, r.prototype.listenerCount = function(e) {
            if (this._events) {
                var t = this._events[e];
                if (s(t)) return 1;
                if (t) return t.length
            }
            return 0
        }, r.listenerCount = function(e, t) {
            return e.listenerCount(t)
        }
    },
    37: function(e, t, r) {
        var s = r(38),
            n = r(41),
            i = r(42),
            o = r(43);
        async function a(e) {
            return new Promise(t => setTimeout(() => t(), e))
        }
        function h(e) {
            console.log("setup backend"), n({
                setting: e
            });
            var t = new o;
            t.install(), t.on("data", e => {
                window.postMessage({
                    source: "geetest_data",
                    data: e
                }, "*")
            });
            var r = new s({
                setting: e
            });
            r.install(), r.on("got", () => {
                !async function() {
                    if (!document.title_src)
                        for (document.title_src = document.title, document.title = "[新箱子验证] " + document.title;;) {
                            if (!document.hidden) {
                                document.title = document.title_src, delete document.title_src;
                                break
                            }
                            await a(1e3)
                        }
                }(), window.postMessage({
                    source: "treasure_got"
                }, "*")
            }), r.on("got_res", e => {
                window.postMessage({
                    source: "treasure_got_res",
                    data: e
                }, "*")
            }), r.on("miss", () => {
                e.ghoulEnabled && e.autoClose && r.noTs && window.close()
            }), r.on("barrage", e => {}), r.on("dy_login", e => {
                window.postMessage({
                    source: "dy_login",
                    data: e
                }, "*")
            }), new i({
                setting: e
            }).install(), window.addEventListener("message", t => {
                t.source === window && t.data && "sync" === t.data.source && e.autoClose && r.noTs && window.close()
            })
        }
        window.postMessage({
            source: "backend_installed"
        }, "*"), window.addEventListener("message", e => {
            e.source === window && e.data && "setting" === e.data.source && h(e.data.data)
        })
    },
    38: function(e, t, r) {
        var {
            EventEmitter: s
        } = r(13), n = r(39), i = r(40);
        async function o(e) {
            return new Promise(t => setTimeout(() => t(), e))
        }
        e.exports = class extends s {
            constructor(e) {
                var t = e.setting;
                super(), this.setting = t, this.state = "IDLE", this.pendingBox = new n((e, t) => e.surplusTime < t.surplusTime), this.noTs = !0, this.muteService = null
            }
            handlePendingBoxes(e) {
                if (e && e instanceof Array ? e.forEach(e => this.pendingBox.add(e)) : e && this.pendingBox.add(e), !this.pendingBox.isEmpty() && "IDLE" === this.state) {
                    this.noTs = !1, this.state = "WAITING";
                    var {
                        delayRange: t
                    } = this.setting, r = Math.max(t[1] - t[0], 0) * Math.random() + t[0], s = this.pendingBox.poll(), n = this.setting.rocketOnly ? 102 : 0, i = s.treasureType >= n ? Math.max(1e3 * s.surplusTime - Date.now() + (this.setting.timeDelta || 0) + r + 5, 0) : 1;
                    setTimeout(() => this.handleTimeupBox(s), i)
                }
                this.pendingBox.isEmpty() && "IDLE" === this.state && (this.noTs = !0)
            }
            handleTimeupBox(e) {
                if ("WAITING" === this.state) {
                    var t = this.setting.rocketOnly ? 102 : 0;
                    e.treasureType >= t ? (console.log("picking"), PlayerAsideApp.container.registry.store.dispatch({
                        type: "DRAW_TREASURE",
                        payload: {
                            data: e,
                            type: "init"
                        }
                    })) : (console.log("pass"), this.state = "IDLE", this.handlePendingBoxes())
                }
            }
            async showGeeTestPanel() {
                for (var e = "INIT";;) {
                    if ("INIT" === e) {
                        var t = document.getElementsByClassName("geetest_radar_tip");
                        t && t.length > 0 && (t[0].onmouseenter && t[0].onmouseenter(), t[0].click && t[0].click(), e = "GEE")
                    } else if ("GEE" === e) {
                        var r = document.getElementsByClassName("geetest_popup_box");
                        r && r.length > 0 && (r[0].style.width = "347px", e = "WAIT")
                    } else if ("WAIT" === e) {
                        var s = document.getElementsByClassName("geetest_popup_box");
                        if (!s || s.length <= 0) break
                    }
                    await o(200)
                }
            }
            getMuteService() {
                return this.muteService || (this.muteService = window.webpackJsonp([], null, ["6cb3"]).a.prototype.muteService), this.muteService
            }
            handleBarrages(e, t) {
                try {
                    this.setting.blockEnterBarrage && (e = e.filter(e => "userEnter-barrage" !== e.barrageName)), e.forEach(e => {
                        var {
                            senderId: t,
                            senderNick: r,
                            userLevel: s,
                            hasCard: n,
                            fansMedal: i,
                            barrageContent: o,
                            uniqueIdentifier: a
                        } = e;
                        o && this.emit("barrage", {
                            senderId: t,
                            senderNick: r,
                            userLevel: s,
                            hasCard: n,
                            fansMedal: i,
                            barrageContent: o,
                            uniqueIdentifier: a
                        })
                    })
                } catch (e) {
                    console.log("err:", e)
                }
                return e
            }
            dyLogin() {
                try {
                    this.emit("dy_login", {
                        dyUid: window.socketProxy.info.user.userName
                    })
                } catch (e) {}
            }
            install() {
                var e = this;
                i.hook([{
                    name: "1c14",
                    path: ["a", "prototype", ["mapping", "dataMap", "showDrawTips", "drawTreasure"]],
                    hooks: {
                        mapping(t, r, s) {
                            e.dyLogin();
                            var n = t.call(this, r, s);
                            return e.setting.ghoulEnabled && (n.destroyTime -= n.delayTime, n.surplusTime -= n.delayTime, n.delayTime = 1), n
                        },
                        dataMap(t, r, s) {
                            var n = t.call(this, r, s);
                            return e.setting.ghoulEnabled && e.handlePendingBoxes(n), n
                        },
                        showDrawTips(t, r) {
                            return "WAITING" === e.state && 0 !== parseInt(r.code, 10) ? (e.state = "IDLE", e.handlePendingBoxes(), e.emit("miss")) : "GEE_SHOW" === e.state && 0 !== parseInt(r.code, 10) ? (e.state = "IDLE", e.handlePendingBoxes()) : 0 === parseInt(r.code, 10) && (e.state = "IDLE", e.handlePendingBoxes(), e.emit("got_res", r)), t.call(this, r)
                        },
                        drawTreasure(t, r, s) {
                            return "GEE_SHOW" === e.state && "check" === s && (e.state = "GEE_CHECKING"), t.call(this, r, s)
                        }
                    }
                }, {
                    name: "9408",
                    path: ["a", "WrappedComponent", "prototype", ["componentWillReceiveProps"]],
                    hooks: {
                        componentWillReceiveProps(t, r) {
                            var {
                                treasureDrawResult: s
                            } = r;
                            if ("WAITING" === e.state && s && s.data && s.data.geetest) {
                                e.emit("got");
                                var {
                                    autoOpenBox: n
                                } = e.setting;
                                n && e.showGeeTestPanel(), e.state = "GEE_SHOW"
                            }
                            return t.call(this, r)
                        }
                    }
                }, {
                    name: "94084",
                    path: ["a", "WrappedComponent", "prototype", ["componentWillReceiveProps"]],
                    hooks: {
                        componentWillReceiveProps(t, r) {
                            var {
                                treasureDrawResult: s
                            } = r;
                            if ("WAITING" === e.state && s && s.data && s.data.geetest) {
                                e.emit("got");
                                var {
                                    autoOpenBox: n
                                } = e.setting;
                                n && e.showGeeTestPanel(), e.state = "GEE_SHOW"
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
                }, {
                    name: "7914",
                    path: ["a", "create"],
                    hooks: {
                        create(t, r) {
                            var s = t.call(this, r),
                                n = s.push;
                            return s.push = ((t, r) => {
                                t = e.handleBarrages(t, r), n.call(s, t, r)
                            }), s
                        }
                    }
                }])
            }
        }
    },
    39: function(e, t, r) {
        "use strict";
        (function(e) {
            var t = function(e, t) {
                return e < t
            };
            function s(e) {
                if (!(this instanceof s)) return new s(e);
                this.array = [], this.size = 0, this.compare = e || t
            }
            s.prototype.clone = function() {
                var e = new s(this.compare);
                e.size = this.size;
                for (var t = 0; t < this.size; t++) e.array.push(this.array[t]);
                return e
            }, s.prototype.add = function(e) {
                var t, r, s = this.size;
                for (this.array[this.size] = e, this.size += 1; s > 0 && (t = s - 1 >> 1, r = this.array[t], this.compare(e, r));) this.array[s] = r, s = t;
                this.array[s] = e
            }, s.prototype.heapify = function(e) {
                var t;
                for (this.array = e, this.size = e.length, t = this.size >> 1; t >= 0; t--) this._percolateDown(t)
            }, s.prototype._percolateUp = function(e, t) {
                for (var r, s, n = this.array[e]; e > 0 && (r = e - 1 >> 1, s = this.array[r], t || this.compare(n, s));) this.array[e] = s, e = r;
                this.array[e] = n
            }, s.prototype._percolateDown = function(e) {
                for (var t, r, s, n = this.size, i = this.size >>> 1, o = this.array[e]; e < i && (r = (t = 1 + (e << 1)) + 1, s = this.array[t], r < n && this.compare(this.array[r], s) && (t = r, s = this.array[r]), this.compare(s, o));) this.array[e] = s, e = t;
                this.array[e] = o
            }, s.prototype._removeAt = function(e) {
                if (!(e > this.size - 1 || e < 0)) return this._percolateUp(e, !0), this.poll()
            }, s.prototype.remove = function(e) {
                for (var t = 0; t < this.size; t++)
                    if (!this.compare(this.array[t], e) && !this.compare(e, this.array[t])) return this._removeAt(t), !0;
                return !1
            }, s.prototype._batchRemove = function(e, t) {
                var r = new Array(t || this.size),
                    s = 0;
                if ("function" == typeof e && this.size)
                    for (var n = 0; n < this.size && s < r.length;) e(this.array[n]) ? (r[s] = this._removeAt(n), s++, n >>= 1) : n++;
                return r.length = s, r
            }, s.prototype.removeOne = function(e) {
                var t = this._batchRemove(e, 1);
                return t.length > 0 ? t[0] : void 0
            }, s.prototype.removeMany = function(e, t) {
                return this._batchRemove(e, t)
            }, s.prototype.peek = function() {
                if (0 != this.size) return this.array[0]
            }, s.prototype.poll = function() {
                if (0 != this.size) {
                    var e = this.array[0];
                    return this.size > 1 ? (this.array[0] = this.array[--this.size], this._percolateDown(0)) : this.size -= 1, e
                }
            }, s.prototype.replaceTop = function(e) {
                if (0 != this.size) {
                    var t = this.array[0];
                    return this.array[0] = e, this._percolateDown(0), t
                }
            }, s.prototype.trim = function() {
                this.array = this.array.slice(0, this.size)
            }, s.prototype.isEmpty = function() {
                return 0 === this.size
            }, s.prototype.forEach = function(e) {
                if (!this.isEmpty() && "function" == typeof e)
                    for (var t = 0, r = this.clone(); !r.isEmpty();) e(r.poll(), t++)
            }, s.prototype.kSmallest = function(e) {
                if (0 == this.size) return [];
                var t = this.compare,
                    r = this.array,
                    n = new s(function(e, s) {
                        return t(r[e], r[s])
                    });
                e = Math.min(this.size, e);
                var i = new Array(e),
                    o = 0;
                for (n.add(0); o < e;) {
                    var a = n.poll();
                    i[o++] = this.array[a];
                    var h = 1 + (a << 1),
                        c = h + 1;
                    h < this.size && n.add(h), c < this.size && n.add(c)
                }
                return i
            };
            r.c[r.s] === e && function() {
                var e = new s(function(e, t) {
                    return e < t
                });
                for (e.add(1), e.add(0), e.add(5), e.add(4), e.add(3); !e.isEmpty();) console.log(e.poll())
            }(), e.exports = s
        }).call(this, r(10)(e))
    },
    40: function(e, t) {
        async function r(e) {
            return new Promise(t => setTimeout(() => t(), e))
        }
        function s(e, t) {
            var {
                name: r,
                path: s,
                hooks: n
            } = t;
            Object.defineProperty(e, r, {
                get: () => e[`_${r}`],
                set: t => {
                    var i = t.exports;
                    Object.defineProperty(t, "exports", {
                        get: () => t._exports,
                        set: e => {
                            ! function e(t, r, s) {
                                if (!(r.length <= 0)) {
                                    var n = r.shift();
                                    if ("prototype" === n) {
                                        n = r.shift();
                                        var i = r.length,
                                            o = [];
                                        n instanceof Array || (n = [].push(n)), n.forEach(e => o[e] = t.prototype[e]);
                                        var a = {};
                                        n.forEach(n => {
                                            a[n] = {
                                                get: () => i > 0 ? t.prototype[`_${n}`] : function(...e) {
                                                    return s[n].call(this, t.prototype[`_${n}`], ...e)
                                                },
                                                set: i => {
                                                    e(i, r, s), t.prototype[`_${n}`] = i
                                                }
                                            }
                                        }), Object.defineProperties(t.prototype, a), n.forEach(e => t.prototype[e] = o[e])
                                    } else {
                                        var h = r.length,
                                            c = t[n];
                                        Object.defineProperty(t, n, {
                                            get: () => h > 0 ? t[`_${n}`] : function(...e) {
                                                return s[n].call(this, t[`_${n}`], ...e)
                                            },
                                            set: i => {
                                                e(i, r, s), t[`_${n}`] = i
                                            }
                                        }), c && (t[n] = c)
                                    }
                                }
                            }(e, s, n), t._exports = e
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
                                [t]: (t, r, s) => {
                                    e(s.c)
                                }
                            };
                        window.webpackJsonp([], r, [t])
                    })
                }();
                e.forEach(e => {
                    s(t, e)
                })
            }
        }
    },
    41: function(e, t) {
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
    42: function(e, t) {
        async function r(e) {
            return new Promise(t => setTimeout(() => t(), e))
        }
        e.exports = class {
            constructor(e) {
                var t = e.setting;
                this.setting = t, this.aid = null, this.state = "IDLE"
            }
            async waitForSocketStream() {
                for (;;) {
                    if (window.socketProxy && window.socketProxy.socketStream) return;
                    await r(2e3)
                }
            }
            getAnswerFromBarrage() {
                var e = {
                    A: 0,
                    B: 0,
                    C: 0
                };
                return document.getElementsByClassName("Barrage-main")[0].innerText.toUpperCase().replace(/[^ABC]/g, "").split("").map(t => ++e[t]), Object.entries(e).sort((e, t) => t[1] - e[1])[0][0].charCodeAt(0) - "A".charCodeAt(0)
            }
            async answerProblem(e) {
                var {
                    room: t,
                    user: r
                } = window.socketProxy.info, s = {
                    type: "compqaq",
                    acid: "act_comdt",
                    qid: e,
                    aid: this.aid,
                    rid: t.roomId,
                    uid: r.userName
                };
                window.socketProxy.sendMessage(s), setTimeout(() => this.state = "IDLE", 5e3)
            }
            async getAnswer(e) {
                this.state = "WORK", await r(1e3 * parseInt(.8 * e, 10)), this.aid = this.getAnswerFromBarrage()
            }
            problemHandler(e) {
                var {
                    res: t,
                    qid: r,
                    cd: s
                } = e;
                0 === parseInt(t, 10) && r ? this.answerProblem(r) : this.getAnswer(parseInt(s, 10))
            }
            autoRefresh() {
                var e = 1e3 * parseInt(this.setting.autoRefreshFreq, 10);
                e && setTimeout(() => "IDLE" === this.state && window.location.reload(), e)
            }
            async install() {
                var {
                    setting: e
                } = this;
                e.autoAnswerEnabled && (await this.waitForSocketStream(), window.socketProxy.socketStream.subscribe("compqs", this.problemHandler.bind(this)), this.autoRefresh())
            }
        }
    },
    43: function(e, t, r) {
        var {
            EventEmitter: s
        } = r(13);
        e.exports = class extends s {
            constructor() {
                super(), this.src = "", this.pos = []
            }
            onmousedown(e) {
                var {
                    target: t,
                    offsetX: r,
                    offsetY: s
                } = e, {
                    className: n,
                    currentSrc: i
                } = t;
                "geetest_item_img" === n ? (0 === this.pos.length && (this.src = i), this.src !== i && (this.src = i, this.pos = []), this.pos.push({
                    x: r,
                    y: s
                })) : "geetest_commit_tip" === n && this.pos.length > 0 && this.emit("data", {
                    pos: this.pos,
                    src: this.src
                })
            }
            install() {
                window.onmousedown = this.onmousedown.bind(this)
            }
        }
    }
});
