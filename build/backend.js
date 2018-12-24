! function(e) {
    var t = {};
    function s(r) {
        if (t[r]) return t[r].exports;
        var n = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }
    s.m = e, s.c = t, s.d = function(e, t, r) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, s.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function(e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (s.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) s.d(r, n, function(t) {
                return e[t]
            }.bind(null, n));
        return r
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "", s(s.s = 70)
}({
    10: function(e, t) {
        function s() {
            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
        }
        function r(e) {
            return "function" == typeof e
        }
        function n(e) {
            return "object" == typeof e && null !== e
        }
        function i(e) {
            return void 0 === e
        }
        e.exports = s, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._maxListeners = void 0, s.defaultMaxListeners = 10, s.prototype.setMaxListeners = function(e) {
            if (! function(e) {
                    return "number" == typeof e
                }(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
            return this._maxListeners = e, this
        }, s.prototype.emit = function(e) {
            var t, s, o, a, h, c;
            if (this._events || (this._events = {}), "error" === e && (!this._events.error || n(this._events.error) && !this._events.error.length)) {
                if ((t = arguments[1]) instanceof Error) throw t;
                var u = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                throw u.context = t, u
            }
            if (i(s = this._events[e])) return !1;
            if (r(s)) switch (arguments.length) {
                case 1:
                    s.call(this);
                    break;
                case 2:
                    s.call(this, arguments[1]);
                    break;
                case 3:
                    s.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    a = Array.prototype.slice.call(arguments, 1), s.apply(this, a)
            } else if (n(s))
                for (a = Array.prototype.slice.call(arguments, 1), o = (c = s.slice()).length, h = 0; h < o; h++) c[h].apply(this, a);
            return !0
        }, s.prototype.addListener = function(e, t) {
            var o;
            if (!r(t)) throw TypeError("listener must be a function");
            return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, r(t.listener) ? t.listener : t), this._events[e] ? n(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, n(this._events[e]) && !this._events[e].warned && (o = i(this._maxListeners) ? s.defaultMaxListeners : this._maxListeners) && o > 0 && this._events[e].length > o && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
        }, s.prototype.on = s.prototype.addListener, s.prototype.once = function(e, t) {
            if (!r(t)) throw TypeError("listener must be a function");
            var s = !1;
            function n() {
                this.removeListener(e, n), s || (s = !0, t.apply(this, arguments))
            }
            return n.listener = t, this.on(e, n), this
        }, s.prototype.removeListener = function(e, t) {
            var s, i, o, a;
            if (!r(t)) throw TypeError("listener must be a function");
            if (!this._events || !this._events[e]) return this;
            if (o = (s = this._events[e]).length, i = -1, s === t || r(s.listener) && s.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
            else if (n(s)) {
                for (a = o; a-- > 0;)
                    if (s[a] === t || s[a].listener && s[a].listener === t) {
                        i = a;
                        break
                    }
                if (i < 0) return this;
                1 === s.length ? (s.length = 0, delete this._events[e]) : s.splice(i, 1), this._events.removeListener && this.emit("removeListener", e, t)
            }
            return this
        }, s.prototype.removeAllListeners = function(e) {
            var t, s;
            if (!this._events) return this;
            if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
            if (0 === arguments.length) {
                for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                return this.removeAllListeners("removeListener"), this._events = {}, this
            }
            if (r(s = this._events[e])) this.removeListener(e, s);
            else if (s)
                for (; s.length;) this.removeListener(e, s[s.length - 1]);
            return delete this._events[e], this
        }, s.prototype.listeners = function(e) {
            return this._events && this._events[e] ? r(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
        }, s.prototype.listenerCount = function(e) {
            if (this._events) {
                var t = this._events[e];
                if (r(t)) return 1;
                if (t) return t.length
            }
            return 0
        }, s.listenerCount = function(e, t) {
            return e.listenerCount(t)
        }
    },
    19: function(e, t) {
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
    70: function(e, t, s) {
        var r = s(71),
            n = s(74),
            i = s(75),
            o = s(76);
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
            var s = new i({
                setting: e
            });
            s.install();
            var h = new r({
                setting: e
            });
            h.install(), h.on("got", () => {
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
            }), h.on("got_res", e => {
                window.postMessage({
                    source: "treasure_got_res",
                    data: e
                }, "*")
            }), h.on("miss", () => {
                e.ghoulEnabled && e.autoClose && h.noTs && window.close()
            }), h.on("barrage", e => {
                s.barrageHandler(e)
            }), h.on("dy_login", e => {
                window.postMessage({
                    source: "dy_login",
                    data: e
                }, "*")
            }), "pro" === e.ghoulMode && e.ghoulEnabled && document.location.href.startsWith("https://www.douyu.com/99999") && window.postMessage({
                source: "pro_tab"
            }, "*"), window.addEventListener("message", t => {
                t.source === window && t.data && "sync" === t.data.source ? "normal" === e.ghoulMode && e.autoClose && h.noTs && window.close() : t.source === window && t.data && "tsbox" === t.data.source && "pro" === e.ghoulMode && e.ghoulEnabled && h.handlePendingBoxes(t.data.data)
            }), async function() {
                for (;;) {
                    try {
                        if (PlayerAsideApp && PlayerAsideApp.container.registry.store.getState().medalListMsgData) {
                            var {
                                medalListMsgData: e
                            } = PlayerAsideApp.container.registry.store.getState();
                            if (e.medalList && e.medalList.length > 0) {
                                window.postMessage({
                                    source: "fans_medal_list",
                                    data: e.medalList
                                }, "*");
                                break
                            }
                        }
                    } catch (e) {}
                    await a(1e3)
                }
            }()
        }
        window.postMessage({
            source: "backend_installed"
        }, "*"), window.addEventListener("message", e => {
            e.source === window && e.data && "setting" === e.data.source && h(e.data.data)
        })
    },
    71: function(e, t, s) {
        var {
            EventEmitter: r
        } = s(10), n = s(72), i = s(73);
        async function o(e) {
            return new Promise(t => setTimeout(() => t(), e))
        }
        e.exports = class extends r {
            constructor(e) {
                var t = e.setting;
                super(), this.setting = t, this.state = "IDLE", this.pendingBox = new n((e, t) => e.surplusTime < t.surplusTime), this.noTs = !0, this.muteService = null
            }
            handlePendingBoxes(e) {
                if (e && e instanceof Array ? e.forEach(e => this.pendingBox.add(e)) : e && this.pendingBox.add(e), !this.pendingBox.isEmpty() && "IDLE" === this.state) {
                    this.noTs = !1, this.state = "WAITING";
                    var {
                        delayRange: t
                    } = this.setting, s = Math.max(t[1] - t[0], 0) * Math.random() + t[0], r = this.pendingBox.poll(), n = this.setting.rocketOnly ? 102 : 0, i = r.treasureType >= n ? Math.max(1e3 * r.surplusTime - Date.now() - (this.setting.timeDelta || 0) + s + 5, 0) : 1;
                    setTimeout(() => this.handleTimeupBox(r), i)
                }
                this.pendingBox.isEmpty() && "IDLE" === this.state && (this.noTs = !0)
            }
            handleTimeupBox(e) {
                if ("WAITING" === this.state) {
                    var t = parseInt((Date.now() + this.setting.timeDelta) / 1e3, 10);
                    if (e.surplusTime + 1 < t) return this.state = "IDLE", void this.handlePendingBoxes();
                    var s = this.setting.rocketOnly ? 102 : 0;
                    e.treasureType >= s ? (console.log("picking", e), PlayerAsideApp.container.registry.store.dispatch({
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
                        var s = document.getElementsByClassName("geetest_popup_box");
                        s && s.length > 0 && (s[0].style.width = "347px", e = "WAIT")
                    } else if ("WAIT" === e) {
                        var r = document.getElementsByClassName("geetest_popup_box");
                        if (!r || r.length <= 0) break
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
                            senderNick: s,
                            userLevel: r,
                            hasCard: n,
                            fansMedal: i,
                            barrageContent: o,
                            uniqueIdentifier: a
                        } = e;
                        o && this.emit("barrage", {
                            senderId: t,
                            senderNick: s,
                            userLevel: r,
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
            getUid() {
                if (!this.uid)
                    for (var e of document.cookie.split(";"))
                        if (e.indexOf("acf_uid") >= 0) {
                            this.uid = e.split("=")[1];
                            break
                        }
                return this.uid
            }
            install() {
                var e = this;
                i.hook([{
                    name: "1c14",
                    path: ["a", "prototype", ["mapping", "dataMap", "showDrawTips", "drawTreasure", "drawTreasureRequest"]],
                    hooks: {
                        mapping(t, s, r) {
                            e.dyLogin();
                            var n = t.call(this, s, r);
                            return e.setting.ghoulEnabled && (n.destroyTime -= n.delayTime, n.surplusTime -= n.delayTime, n.delayTime = 1), n
                        },
                        dataMap(t, s, r) {
                            var n = t.call(this, s, r);
                            return e.setting.ghoulEnabled && e.handlePendingBoxes(n), n
                        },
                        showDrawTips(t, s) {
                            return "WAITING" === e.state && 0 !== parseInt(s.code, 10) ? (e.state = "IDLE", e.handlePendingBoxes(), e.emit("miss")) : "GEE_SHOW" === e.state && 0 !== parseInt(s.code, 10) ? (e.state = "IDLE", e.handlePendingBoxes()) : 0 === parseInt(s.code, 10) ? (e.state = "IDLE", e.handlePendingBoxes(), e.emit("got_res", s)) : -1 === parseInt(s.code, 10) ? (e.state = "IDLE", e.handlePendingBoxes()) : console.log("missing case", s), t.call(this, s)
                        },
                        drawTreasure(t, s, r) {
                            return "GEE_SHOW" === e.state && "check" === r && (e.state = "GEE_CHECKING"), t.call(this, s, r)
                        },
                        drawTreasureRequest(e, t) {
                            var s = t.payload || {},
                                {
                                    type: r,
                                    data: n
                                } = s,
                                i = this.global.get("douyuDid"),
                                o = {};
                            return "init" === r ? (this.config.treasureId = n.treasureId, this.config.roomId = n.roomId, o = {
                                room_id: n.roomId,
                                device_id: i,
                                packerid: n.treasureId || 0,
                                version: 1
                            }, this.config.isGeeChecking = !0) : (o = Object.assign({}, {
                                room_id: this.config.roomId,
                                device_id: i,
                                packerid: this.config.treasureId || 0,
                                version: 1
                            }, n), this.config.isGeeChecking = !1), window.webpackJsonp([], null, ["e55c"]).httpClient.post(String, "/member/task/redPacketReceive", o, {
                                headers: {
                                    "content-type": "application/x-www-form-urlencoded"
                                }
                            })
                        }
                    }
                }, {
                    name: "9408",
                    path: ["a", "WrappedComponent", "prototype", ["componentWillReceiveProps"]],
                    hooks: {
                        componentWillReceiveProps(t, s) {
                            var {
                                treasureDrawResult: r
                            } = s;
                            if ("WAITING" === e.state && r && r.data && r.data.geetest) {
                                e.emit("got");
                                var {
                                    autoOpenBox: n
                                } = e.setting;
                                n && e.showGeeTestPanel(), e.state = "GEE_SHOW"
                            }
                            return t.call(this, s)
                        }
                    }
                }, {
                    name: "94084",
                    path: ["a", "WrappedComponent", "prototype", ["componentWillReceiveProps"]],
                    hooks: {
                        componentWillReceiveProps(t, s) {
                            var {
                                treasureDrawResult: r
                            } = s;
                            if ("WAITING" === e.state && r && r.data && r.data.geetest) {
                                e.emit("got");
                                var {
                                    autoOpenBox: n
                                } = e.setting;
                                n && e.showGeeTestPanel(), e.state = "GEE_SHOW"
                            }
                            return t.call(this, s)
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
                                var s = document.getElementsByClassName("AnchorLevelTip-tipBarNum")[0];
                                s.appendChild(document.createTextNode(", ")), s.appendChild(document.createTextNode(t.$ROOM.levelInfo.experience))
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
                        create(t, s) {
                            var r = t.call(this, s),
                                n = r.push;
                            return r.push = ((t, s) => {
                                t = e.handleBarrages(t, s), n.call(r, t, s)
                            }), r
                        }
                    }
                }])
            }
        }
    },
    72: function(e, t, s) {
        "use strict";
        (function(e) {
            var t = function(e, t) {
                return e < t
            };
            function r(e) {
                if (!(this instanceof r)) return new r(e);
                this.array = [], this.size = 0, this.compare = e || t
            }
            r.prototype.clone = function() {
                var e = new r(this.compare);
                e.size = this.size;
                for (var t = 0; t < this.size; t++) e.array.push(this.array[t]);
                return e
            }, r.prototype.add = function(e) {
                var t, s, r = this.size;
                for (this.array[this.size] = e, this.size += 1; r > 0 && (t = r - 1 >> 1, s = this.array[t], this.compare(e, s));) this.array[r] = s, r = t;
                this.array[r] = e
            }, r.prototype.heapify = function(e) {
                var t;
                for (this.array = e, this.size = e.length, t = this.size >> 1; t >= 0; t--) this._percolateDown(t)
            }, r.prototype._percolateUp = function(e, t) {
                for (var s, r, n = this.array[e]; e > 0 && (s = e - 1 >> 1, r = this.array[s], t || this.compare(n, r));) this.array[e] = r, e = s;
                this.array[e] = n
            }, r.prototype._percolateDown = function(e) {
                for (var t, s, r, n = this.size, i = this.size >>> 1, o = this.array[e]; e < i && (s = (t = 1 + (e << 1)) + 1, r = this.array[t], s < n && this.compare(this.array[s], r) && (t = s, r = this.array[s]), this.compare(r, o));) this.array[e] = r, e = t;
                this.array[e] = o
            }, r.prototype._removeAt = function(e) {
                if (!(e > this.size - 1 || e < 0)) return this._percolateUp(e, !0), this.poll()
            }, r.prototype.remove = function(e) {
                for (var t = 0; t < this.size; t++)
                    if (!this.compare(this.array[t], e) && !this.compare(e, this.array[t])) return this._removeAt(t), !0;
                return !1
            }, r.prototype._batchRemove = function(e, t) {
                var s = new Array(t || this.size),
                    r = 0;
                if ("function" == typeof e && this.size)
                    for (var n = 0; n < this.size && r < s.length;) e(this.array[n]) ? (s[r] = this._removeAt(n), r++, n >>= 1) : n++;
                return s.length = r, s
            }, r.prototype.removeOne = function(e) {
                var t = this._batchRemove(e, 1);
                return t.length > 0 ? t[0] : void 0
            }, r.prototype.removeMany = function(e, t) {
                return this._batchRemove(e, t)
            }, r.prototype.peek = function() {
                if (0 != this.size) return this.array[0]
            }, r.prototype.poll = function() {
                if (0 != this.size) {
                    var e = this.array[0];
                    return this.size > 1 ? (this.array[0] = this.array[--this.size], this._percolateDown(0)) : this.size -= 1, e
                }
            }, r.prototype.replaceTop = function(e) {
                if (0 != this.size) {
                    var t = this.array[0];
                    return this.array[0] = e, this._percolateDown(0), t
                }
            }, r.prototype.trim = function() {
                this.array = this.array.slice(0, this.size)
            }, r.prototype.isEmpty = function() {
                return 0 === this.size
            }, r.prototype.forEach = function(e) {
                if (!this.isEmpty() && "function" == typeof e)
                    for (var t = 0, s = this.clone(); !s.isEmpty();) e(s.poll(), t++)
            }, r.prototype.kSmallest = function(e) {
                if (0 == this.size) return [];
                var t = this.compare,
                    s = this.array,
                    n = new r(function(e, r) {
                        return t(s[e], s[r])
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
            s.c[s.s] === e && function() {
                var e = new r(function(e, t) {
                    return e < t
                });
                for (e.add(1), e.add(0), e.add(5), e.add(4), e.add(3); !e.isEmpty();) console.log(e.poll())
            }(), e.exports = r
        }).call(this, s(19)(e))
    },
    73: function(e, t) {
        async function s(e) {
            return new Promise(t => setTimeout(() => t(), e))
        }
        function r(e, t) {
            var {
                name: s,
                path: r,
                hooks: n
            } = t;
            Object.defineProperty(e, s, {
                get: () => e[`_${s}`],
                set: t => {
                    var i = t.exports;
                    Object.defineProperty(t, "exports", {
                        get: () => t._exports,
                        set: e => {
                            ! function e(t, s, r) {
                                if (!(s.length <= 0)) {
                                    var n = s.shift();
                                    if ("prototype" === n) {
                                        n = s.shift();
                                        var i = s.length,
                                            o = [];
                                        n instanceof Array || (n = [].push(n)), n.forEach(e => o[e] = t.prototype[e]);
                                        var a = {};
                                        n.forEach(n => {
                                            a[n] = {
                                                get: () => i > 0 ? t.prototype[`_${n}`] : function(...e) {
                                                    return r[n].call(this, t.prototype[`_${n}`], ...e)
                                                },
                                                set: i => {
                                                    e(i, s, r), t.prototype[`_${n}`] = i
                                                }
                                            }
                                        }), Object.defineProperties(t.prototype, a), n.forEach(e => t.prototype[e] = o[e])
                                    } else {
                                        var h = s.length,
                                            c = t[n];
                                        Object.defineProperty(t, n, {
                                            get: () => h > 0 ? t[`_${n}`] : function(...e) {
                                                return r[n].call(this, t[`_${n}`], ...e)
                                            },
                                            set: i => {
                                                e(i, s, r), t[`_${n}`] = i
                                            }
                                        }), c && (t[n] = c)
                                    }
                                }
                            }(e, r, n), t._exports = e
                        }
                    }), t.exports = i, e[`_${s}`] = t
                }
            })
        }
        e.exports = {
            hook: async function(e) {
                var t = await async function() {
                    for (; !window.webpackJsonp;) await s(333);
                    return new Promise(e => {
                        var t = "fakeModule",
                            s = {
                                [t]: (t, s, r) => {
                                    e(r.c)
                                }
                            };
                        window.webpackJsonp([], s, [t])
                    })
                }();
                e.forEach(e => {
                    r(t, e)
                })
            }
        }
    },
    74: function(e, t) {
        e.exports = (e => {
            var t = e.setting,
                {
                    minimalism: s
                } = t;
            s && Object.defineProperty(window, "SHARK_LOADER_CONFIG", {
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
    75: function(e, t) {
        async function s(e) {
            return new Promise(t => setTimeout(() => t(), e))
        }
        e.exports = class {
            constructor(e) {
                var t = e.setting;
                this.setting = t, this.state = "IDLE", this.statistic = {
                    A: 0,
                    B: 0,
                    C: 0
                }, this.uid = null
            }
            async waitForSocketStream() {
                for (;;) {
                    if (window.socketProxy && window.socketProxy.socketStream) return;
                    await s(2e3)
                }
            }
            getUid() {
                if (!this.uid)
                    for (var e of document.cookie.split(";"))
                        if (e.indexOf("acf_uid") >= 0) {
                            this.uid = e.split("=")[1];
                            break
                        }
                return this.uid
            }
            async answerProblem(e) {
                var t = Object.entries(this.statistic).sort((e, t) => t[1] - e[1])[0][0],
                    {
                        room: s
                    } = window.socketProxy.info,
                    r = {
                        type: "compqaq",
                        acid: "act_comdt",
                        qid: e,
                        aid: t.charCodeAt(0) - "A".charCodeAt(0),
                        rid: s.roomId,
                        uid: this.getUid()
                    };
                window.socketProxy.sendMessage(r), setTimeout(() => this.state = "IDLE", 5e3)
            }
            reset() {
                this.statistic.A = 0, this.statistic.B = 0, this.statistic.C = 0
            }
            async getAnswer(e) {
                this.state = "WORK", this.reset()
            }
            problemHandler(e) {
                var {
                    res: t,
                    qid: s,
                    cd: r
                } = e;
                0 === parseInt(t, 10) && s ? this.answerProblem(s) : this.getAnswer(parseInt(r, 10))
            }
            autoRefresh() {
                var e = 1e3 * parseInt(this.setting.autoRefreshFreq, 10);
                if (e) {
                    var t = () => {
                        "IDLE" === this.state ? window.location.reload() : setTimeout(t, this.autoRefresh)
                    };
                    setTimeout(t, e)
                }
            }
            barrageHandler(e) {
                "WORK" === this.state && e.barrageContent.toUpperCase().split("").forEach(e => {
                    "A" !== e && "B" !== e && "C" !== e || ++this.statistic[e]
                })
            }
            async install() {
                window.getUid = this.getUid.bind(this);
                var {
                    setting: e
                } = this;
                e.autoAnswerEnabled && (await this.waitForSocketStream(), window.socketProxy.socketStream.subscribe("compqs", this.problemHandler.bind(this)), this.autoRefresh())
            }
        }
    },
    76: function(e, t, s) {
        var {
            EventEmitter: r
        } = s(10);
        e.exports = class extends r {
            constructor() {
                super(), this.src = "", this.pos = []
            }
            onmousedown(e) {
                var {
                    target: t,
                    offsetX: s,
                    offsetY: r
                } = e, {
                    className: n,
                    currentSrc: i
                } = t;
                "geetest_item_img" === n ? (0 === this.pos.length && (this.src = i), this.src !== i && (this.src = i, this.pos = []), this.pos.push({
                    x: s,
                    y: r
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
