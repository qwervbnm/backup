! function(e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var a = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
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
            for (var a in e) n.d(r, a, function(t) {
                return e[t]
            }.bind(null, a));
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
    }, n.p = "", n(n.s = 35)
}({
    35: function(e, t, n) {
        var r = n(36),
            a = n(37);
        window.localStorage.setting = function() {
            if (window.localStorage.setting) {
                var e = JSON.parse(window.localStorage.setting);
                return !!(e && e.setting && e.setting.hasOwnProperty("ghoulEnabled") && e.setting.hasOwnProperty("vol") && e.setting.hasOwnProperty("blockLiveStream") && e.setting.hasOwnProperty("delayRange") && e.setting.hasOwnProperty("autoClose") && e.setting.hasOwnProperty("autoDrive") && e.setting.hasOwnProperty("minimalism") && e.setting.hasOwnProperty("autoOpenBox") && e.setting.hasOwnProperty("blockEnterEffect") && e.setting.hasOwnProperty("autoAnswerEnabled") && e.setting.hasOwnProperty("autoAnswerMode") && e.setting.hasOwnProperty("blockEnterBarrage") && e.setting.hasOwnProperty("previewClassName") && e.setting.hasOwnProperty("rocketOnly")) && window.localStorage.setting
            }
            return !1
        }() || JSON.stringify({
            setting: {
                ghoulEnabled: !0,
                vol: 60,
                blockLiveStream: !1,
                delayRange: [50, 800],
                autoClose: !1,
                autoDrive: !1,
                minimalism: !1,
                autoOpenBox: !0,
                blockEnterEffect: !1,
                autoAnswerEnabled: !1,
                autoAnswerMode: "smart",
                blockEnterBarrage: !1,
                previewClassName: "answerPreview-43abcd",
                rocketOnly: !1
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
        var o = new r;
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
        }, ["blocking"]), chrome.runtime.onConnect.addListener(e => {
            var {
                setting: t
            } = window.localStorage;
            "treasure" === e.name ? (t && e.postMessage({
                type: "setting",
                data: JSON.parse(t).setting
            }), e.onMessage.addListener(t => {
                var {
                    type: n,
                    data: r
                } = t;
                if ("got" === n) {
                    var {
                        setting: o
                    } = JSON.parse(window.localStorage.setting) || {};
                    a.playAudio(chrome.extension.getURL("assets/ding.wav"), o.vol / 100)
                } else if ("got_res" === n) {
                    var {
                        stat: s
                    } = JSON.parse(window.localStorage.stat) || {}, i = function() {
                        var e = new Date;
                        return `${e.getFullYear()}${e.getMonth()}${e.getDate()}`
                    }();
                    s.day !== i && function(e, t) {
                        e.day = t, e.box = 0, e.zan = 0, e.wen = 0, e.song = 0, e.silver = 0
                    }(s, i), ++s.box;
                    var {
                        award_type: l,
                        silver: u,
                        prop_count: c,
                        prop_id: d,
                        prop_name: g
                    } = r;
                    "1" === l ? s.silver += parseInt(u, 10) : "2" === l ? "赞" === g ? s.zan += parseInt(c, 10) : "稳" === g ? s.wen += parseInt(c, 10) : "怂" === g ? s.song += parseInt(c, 10) : console.log("unknown prop_name:", r) : console.log("unknown award_type:", r), window.localStorage.stat = JSON.stringify({
                        stat: s
                    }), e.postMessage({
                        type: "sync"
                    })
                }
            })) : "xiaohulu" === e.name && JSON.parse(t).setting.autoDrive && (e.postMessage({
                type: "enable"
            }), e.onMessage.addListener(e => {
                var {
                    type: t,
                    data: n
                } = e, {
                    setting: r
                } = JSON.parse(window.localStorage.setting) || {};
                "update_rooms" === t && r.autoDrive && o.update(n)
            }))
        })
    },
    36: function(e, t) {
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
                    var a = e.shift();
                    if (!t.has(a.url)) {
                        for (console.log(r.size); r.size >= 1;) console.log(">=1"), await n(1e3);
                        r.add(a.url), chrome.tabs.create({
                            url: a.url,
                            selected: !1
                        }), await n(333)
                    }
                }
                this.state = "DRIVING"
            }
        }
    },
    37: function(e, t) {
        e.exports = {
            playAudio: function(e, t) {
                if (t > 0) {
                    var n = new Audio;
                    n.src = e, n.volume = t, n.play()
                }
            }
        }
    }
});
