(function(g) {
    var window = this;
    'use strict';
    var Gdb = function(a, b, c) {
            var d;
            g.J(function(e) {
                switch (e.j) {
                    case 1:
                        var f = b;
                        a.W.L("web_player_pt_tt") ? (f = g.Hr(f).exp || "", f = f.includes("xpv") || f.includes("xpe")) : f = !1;
                        if (!f) {
                            e.Ga(2);
                            break
                        }
                        if (a.videoData.Lw) {
                            e.Ga(3);
                            break
                        }
                        g.wa(e, 4);
                        return g.G(e, a.D.promise, 6);
                    case 6:
                        g.xa(e, 3);
                        break;
                    case 4:
                        return g.ya(e), e.return();
                    case 3:
                        d = {
                            potc: "1",
                            pot: a.videoData.Lw
                        }, b = g.Ir(b, d);
                    case 2:
                        a.j = g.bs(b, c), g.va(e)
                }
            })
        },
        h3 = function(a) {
            a.isActive() || a.start()
        },
        Hdb = function(a, b) {
            return b ? a.captionsInitialState : "CAPTIONS_INITIAL_STATE_UNKNOWN"
        },
        Idb = function(a, b) {
            var c = new g.AP;
            c.languageCode = a.languageCode;
            c.languageName = a.languageName;
            c.name = a.name;
            c.displayName = a.displayName;
            c.kind = a.kind;
            c.isDefault = !1;
            c.j = a.j;
            c.isTranslateable = a.isTranslateable;
            c.vssId = a.vssId;
            c.url = a.url;
            c.translationLanguage = b;
            a.xtags && (c.xtags = a.xtags);
            a.captionId && (c.captionId = a.captionId);
            return c
        },
        Jdb = function(a, b) {
            var c, d, e;
            return g.J(function(f) {
                if (f.j == 1) return c = a + "|" + b, g.G(f, g.Eu(), 2);
                if (f.j != 3) {
                    d = f.B;
                    if (!d) throw g.au("gct");
                    return g.G(f, g.SP(d), 3)
                }
                e = f.B;
                return f.return(e.get("captions", c))
            })
        },
        Kdb = function(a, b, c) {
            Jdb(a, b).then(function(d) {
                d && c(d.trackData, new g.AP(d.metadata))
            })
        },
        Ndb = function(a) {
            if (!Ldb.test(a)) throw Error("'" + a + "' is not a valid hex color");
            a.length == 4 && (a = a.replace(Mdb, "#$1$1$2$2$3$3"));
            a = a.toLowerCase();
            a = parseInt(a.slice(1), 16);
            return [a >> 16, a >> 8 & 255, a & 255]
        },
        Odb = function() {
            return g.lt("yt-player-caption-display-settings")
        },
        i3 = function() {
            this.segments = []
        },
        Pdb = function(a, b) {
            var c = g.Eb(a.segments, b);
            c >= 0 || c < 0 && (-c - 1) % 2 === 1 || (c = -c - 1, c > 0 && b - a.segments[c - 1] === 1 && c < a.segments.length && a.segments[c] - b === 1 ? (g.ub(a.segments, c), g.ub(a.segments, c - 1)) : c > 0 && b - a.segments[c - 1] === 1 ? a.segments[c - 1] = b : c < a.segments.length && a.segments[c] - b === 1 ? a.segments[c] = b : (g.Cb(a.segments, c, 0, b), g.Cb(a.segments, c + 1, 0, b)))
        },
        Qdb = function(a, b, c, d, e, f) {
            g.O.call(this);
            this.policy = a;
            this.player = b;
            this.qa = c;
            this.Z = d;
            this.G = e;
            this.Y = f;
            this.D = new i3;
            this.K = -1;
            this.C = this.B = this.j = null;
            this.N = new g.lp(this.T_, 1E3, this);
            this.events = new g.VE(this);
            g.P(this, this.N);
            g.P(this, this.events);
            this.events.T(b, "SEEK_COMPLETE", this.fC);
            this.fC();
            this.T_()
        },
        Rdb = function(a) {
            return a.j && a.j.Rf ? a.j.Rf + a.player.Gc() < a.player.getCurrentTime() : !1
        },
        Sdb = function(a, b) {
            if (a.policy.CD && a.policy.lm && a.player.Eu()) {
                var c = g.gN(b, a.policy, {});
                c.set("pot", a.player.Eu());
                c = c.Fe()
            } else c = g.gN(b, a.policy, {}).Fe();
            var d = {
                format: "RAW",
                withCredentials: !0
            };
            if (a.policy.La) {
                d.method = "POST";
                var e = b.D;
                e && Object.keys(e).length > 0 ? d.postBody = g.JK(e, g.rL) : d.postBody = (0, g.UX)([120, 0])
            }
            a.G && (d.responseType = "arraybuffer");
            a.C = g.fs(c, d, 3, 100).then(function(f) {
                a: {
                    f = f.xhr;a.Ka();
                    if (a.B) {
                        var h = !(a.G ? f.response : f.responseText) || f.status >= 400,
                            l = g.MHa(f);
                        if (l) {
                            f = g.gN(a.B, a.policy, {});
                            a.B.Nl(f, l);
                            Sdb(a, a.B);
                            break a
                        }
                        h ? a.player.oa("capfail", {
                            status: f.status
                        }) : (a.player.Qi().Xi("fcb_r"),
                            l = a.B.ib[0].Pa, a.Z != null && a.K !== l && (h = a.B.ib[0], a.G ? a.Z(f.response, (h.startTime + a.player.Gc()) * 1E3) : a.Z(f.responseText, (h.startTime + a.player.Gc()) * 1E3), a.K = l))
                    }
                    a.B = null;a.C = null
                }
            }).Yl(function(f) {
                a.B = null;
                a.C = null;
                var h;
                a.player.oa("capfail", {
                    status: (h = f.xhr) == null ? void 0 : h.status
                })
            });
            a.B = b;
            Pdb(a.D, a.B.ib[0].Pa)
        },
        j3 = function(a, b) {
            g.gU.call(this, b.U());
            this.j = a;
            this.J = b;
            this.C = null;
            this.K = !1;
            this.N = g.TC(this.J.U()) && !this.j.isManifestless
        },
        Udb = function(a, b) {
            var c = [],
                d;
            for (d in a.j.j)
                if (a.j.j.hasOwnProperty(d)) {
                    var e = a.j.j[d];
                    if (g.rOa(e, b || null)) {
                        var f = e.info.id,
                            h = f,
                            l = "." + f,
                            m = "",
                            n = "",
                            p = "";
                        if (e = e.info.captionTrack) f = e.languageCode, h = e.displayName, l = e.vssId, m = e.kind, a.J.U().L("html5_expose_xtags_through_caption_track") && (n = e.xtags), p = e.id;
                        else {
                            e = f;
                            var q = g.Gbb.get(e);
                            q == null && (q = Tdb[e] || Tdb[e.replace(/-/g, "_")], g.Gbb.set(e, q));
                            h = q || h
                        }
                        c.push(new g.AP({
                            id: d,
                            languageCode: f,
                            languageName: h,
                            is_servable: !0,
                            is_default: !0,
                            is_translateable: !1,
                            vss_id: l,
                            kind: m,
                            xtags: n,
                            captionId: p
                        }))
                    }
                }
            return c
        },
        Vdb = function(a, b) {
            return b != null && b in a.j.j ? a.j.j[b] : null
        },
        Wdb = function(a, b, c) {
            var d = [],
                e;
            for (e in a.j.j)
                if (a.j.j.hasOwnProperty(e)) {
                    var f = a.j.j[e];
                    if (g.rOa(f, c || null)) {
                        var h = f.info.captionTrack;
                        h && h.languageCode === b && d.push(f)
                    }
                }
            return d.length ? d[0] : null
        },
        Xdb = function() {
            var a = void 0;
            a = a === void 0 ? {} : a;
            var b = "suggest_correction" in g.Tbb ? g.Tbb.suggest_correction : "Edit caption";
            b = b || "";
            var c = {},
                d;
            for (d in a) {
                c = {
                    CG: c.CG
                };
                c.CG = d;
                var e = function(f) {
                    return function() {
                        return String(a[f.CG])
                    }
                }(c);
                b = b.replace(new RegExp("\\$\\{" + c.CG + "\\}", "gi"), e);
                b = b.replace(new RegExp("\\$" + c.CG, "gi"), e)
            }
            return b
        },
        k3 = function(a, b, c, d, e, f, h, l, m, n) {
            var p = n.isInline() && !0,
                q = {};
            Object.assign(q, b);
            Object.assign(q, a.params);
            Object.assign(q, c);
            var r = {};
            Object.assign(r, b.Se);
            a.params.Se && Object.assign(r, a.params.Se);
            Object.assign(r, c.Se);
            p && (q.windowOpacity = .6, r.backgroundOpacity = 0);
            q.Se = r;
            var t = q.Wi === 1,
                u = [{
                    I: "span",
                    S: "captions-text",
                    X: {
                        style: "word-wrap: normal; display: block;"
                    }
                }],
                y, A, C;
            (n = l.kb("caption_edit_on_hover") && ((y = n.getVideoData().getPlayerResponse()) == null ? void 0 : (A = y.captions) == null ? void 0 : (C = A.playerCaptionsTracklistRenderer) == null ? void 0 : C.openTranscriptCommand)) &&
            u.unshift({
                I: "button",
                S: "caption-edit",
                X: {
                    tabindex: "0",
                    "aria-label": Xdb()
                },
                V: [{
                    I: "svg",
                    X: {
                        fill: "#e3e3e3",
                        height: "100%",
                        viewBox: "5 5 38 38",
                        width: "100%"
                    },
                    V: [{
                        I: "path",
                        X: {
                            d: "M9 39h2.2l24.25-24.25-1.1-1.1-1.1-1.1L9 36.8Zm-3 3v-6.4L35.4 6.2q.85-.85 2.12-.82 1.27.02 2.12.87L41.8 8.4q.85.85.85 2.1t-.85 2.1L12.4 42Zm33.5-31.55L37.45 8.4Zm-4.05 4.3-1.1-1.1-1.1-1.1 2.2 2.2Z"
                        }
                    }]
                }]
            });
            g.U.call(this, {
                I: "div",
                S: "caption-window",
                X: {
                    id: "caption-window-" + a.id,
                    dir: t ? "rtl" : "ltr",
                    tabindex: "0",
                    lang: q.lang
                },
                V: u
            });
            var E =
                this;
            this.K = [];
            this.Ia = !1;
            this.B = a;
            this.Na = this.La = null;
            this.playerWidth = f;
            this.playerHeight = h;
            this.N = null;
            this.maxWidth = f * .96;
            this.maxHeight = h * .96;
            this.j = q;
            this.Pc = c;
            this.ra = b;
            this.D = this.Ea("captions-text");
            this.Tb = this.D.style.getPropertyValue("box-decoration-break") !== "" || this.D.style.getPropertyValue("-webkit-box-decoration-break") !== "";
            this.Va = Ydb(d, e, f, h);
            this.Ac = m;
            n && (this.G = this.Ea("caption-edit"), this.T(this.G, "click", function() {
                E.Ac()
            }));
            this.type = 0;
            this.bb = this.Va * Zdb(r);
            this.Kb = p;
            a = new g.BT(this.element, !0);
            g.P(this, a);
            a.subscribe("dragstart", this.p7, this);
            a.subscribe("dragmove", this.o7, this);
            a.subscribe("dragend", this.n7, this);
            this.rb = this.fb = this.Bb = this.wb = 0;
            a = "";
            this.j.windowOpacity && (a = Ndb(this.j.windowColor), a = "rgba(" + a[0] + "," + a[1] + "," + a[2] + "," + this.j.windowOpacity + ")");
            b = {
                "background-color": a,
                display: this.j.isVisible === !1 ? "none" : "",
                "text-align": $db[this.j.textAlign]
            };
            this.Tb && (b["border-radius"] = a ? this.bb / 8 + "px" : "");
            (this.C =
                this.B.params.Wi === 2 || this.B.params.Wi === 3) && aeb(this, this.element);
            g.pm(this.element, b);
            if (p) {
                var H;
                (H = this.element.parentElement) == null || H.style.setProperty("--caption-window-color", a)
            }
            switch (this.j.Im) {
                case 0:
                case 1:
                case 2:
                    g.tp(this.element, "ytp-caption-window-top");
                    break;
                case 6:
                case 7:
                case 8:
                    g.tp(this.element, "ytp-caption-window-bottom")
            }
            this.Xa = l.kb("html5_deprecate_arial_unicode_ms")
        },
        aeb = function(a, b) {
            var c = "vertical-rl";
            a.j.OU === 1 && (c = "vertical-lr");
            g.rm && (c = c === "vertical-lr" ? "tb-lr" : "tb-rl");
            g.pm(b, "-o-writing-mode", c);
            g.pm(b, "-webkit-writing-mode", c);
            g.pm(b, "writing-mode", c);
            g.pm(b, "text-orientation", "upright");
            g.tp(b, "ytp-vertical-caption");
            a.B.params.Wi === 3 && (g.pm(b, "text-orientation", ""), g.pm(b, "transform", "rotate(180deg)"))
        },
        Zdb = function(a) {
            var b = 1 + .25 * (a.fontSizeIncrement || 0);
            if (a.offset === 0 || a.offset === 2) b *= .8;
            return b
        },
        beb = function(a, b) {
            var c = {},
                d = b.background ? b.background : a.j.Se.background;
            if (b.backgroundOpacity != null || b.background) {
                var e = b.backgroundOpacity != null ? b.backgroundOpacity : a.j.Se.backgroundOpacity;
                d = Ndb(d);
                c.background = "rgba(" + d[0] + "," + d[1] + "," + d[2] + "," + e + ")";
                a.Tb && (c["box-decoration-break"] = "clone", c["border-radius"] = a.bb / 8 + "px")
            }
            if (b.fontSizeIncrement != null || b.offset != null) c["font-size"] = a.Va * Zdb(b) + "px";
            d = 1;
            e = b.color || a.j.Se.color;
            if (b.color || b.textOpacity != null) e = Ndb(e), d = b.textOpacity == null ? a.j.Se.textOpacity : b.textOpacity, e = "rgba(" + e[0] + "," + e[1] + "," + e[2] + "," + d + ")",
                c.color = e, c.fill = e;
            var f = b.charEdgeStyle;
            f === 0 && (f = void 0);
            if (f) {
                e = "rgba(34, 34, 34, " + d + ")";
                var h = "rgba(204, 204, 204, " + d + ")";
                b.pP && (h = e = b.pP);
                var l = a.Va / 16 / 2,
                    m = Math.max(l, 1),
                    n = Math.max(2 * l, 1),
                    p = Math.max(3 * l, 1),
                    q = Math.max(5 * l, 1);
                d = [];
                switch (f) {
                    case 4:
                        for (; p <= q; p += l) d.push(n + "px " + n + "px " + p + "px " + e);
                        break;
                    case 1:
                        n = window.devicePixelRatio >= 2 ? .5 : 1;
                        for (f = m; f <= p; f += n) d.push(f + "px " + f + "px " + e);
                        break;
                    case 2:
                        d.push(m + "px " + m + "px " + h);
                        d.push("-" + m + "px -" + m + "px " + e);
                        break;
                    case 3:
                        for (p = 0; p < 5; p++) d.push("0 0 " +
                            n + "px " + e)
                }
                c["text-shadow"] = d.join(", ")
            }
            e = "";
            switch (b.fontFamily) {
                case 1:
                    e = '"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';
                    break;
                case 2:
                    e = '"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif';
                    break;
                case 3:
                    e = '"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';
                    break;
                case 5:
                    e = '"Comic Sans MS", Impact, Handlee, fantasy';
                    break;
                case 6:
                    e = '"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';
                    break;
                case 7:
                    e = g.ts() ?
                        '"Carrois Gothic SC", sans-serif-smallcaps' : a.Xa ? 'Arial, Helvetica, Verdana, "Marcellus SC", sans-serif' : '"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif';
                    break;
                case 0:
                case 4:
                    e = a.Xa ? '"YouTube Noto", Roboto, Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif' : '"YouTube Noto", Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif'
            }
            e && (c["font-family"] = e);
            e = b.offset;
            e == null && (e = a.j.Se.offset);
            switch (e) {
                case 0:
                    c["vertical-align"] = "sub";
                    break;
                case 2:
                    c["vertical-align"] = "super"
            }
            b.fontFamily === 7 && (c["font-variant"] = "small-caps");
            b.bold && (c["font-weight"] = "bold");
            b.italic && (c["font-style"] = "italic");
            b.underline && (c["text-decoration"] = "underline");
            b.E$ && (c.visibility = "hidden");
            b.a_ === 1 && a.C && (c["text-combine-upright"] = "all", c["text-orientation"] = "mixed", e = g.mP || g.Zt, a.B.params.Wi === 3 ? c.transform = e ? "rotate(90deg)" : "rotate(180deg)" : e && (c.transform = "rotate(-90deg)"));
            if (b.vp === 1 || b.vp === 2 || b.vp === 3 || b.vp === 4 || b.vp === 5)
                if (g.mP) c["font-weight"] =
                    "bold";
                else switch (c["text-emphasis-style"] = "filled circle", c["text-emphasis-color"] = "currentcolor", c["webkit-text-emphasis"] = "filled circle", b.vp) {
                    case 4:
                    case 3:
                        c["text-emphasis-position"] = "under left";
                        c["webkit-text-emphasis-position"] = "under left";
                        break;
                    case 5:
                    case 2:
                        c["text-emphasis-position"] = "over right", c["webkit-text-emphasis-position"] = "over right"
                }
            return c
        },
        l3 = function(a) {
            a = a.split("px");
            return a.length > 0 ? (a = Number(a[0])) ? a : 0 : 0
        },
        ceb = function(a) {
            a.N = g.le("SPAN");
            g.pm(a.N, {
                display: "block"
            });
            g.tp(a.N, "caption-visual-line");
            a.D.appendChild(a.N)
        },
        deb = function(a, b) {
            var c = g.le("SPAN");
            g.pm(c, {
                display: "inline-block",
                "white-space": "pre-wrap"
            });
            g.pm(c, beb(a, b));
            c.classList.add("ytp-caption-segment");
            a.N.appendChild(c);
            c.previousElementSibling && (g.pm(c.previousElementSibling, {
                "border-top-right-radius": "0",
                "border-bottom-right-radius": "0"
            }), g.pm(c, {
                "border-top-left-radius": "0",
                "border-bottom-left-radius": "0"
            }));
            return c
        },
        eeb = function(a, b, c) {
            a.Ia = a.Ia || !!c;
            var d = {};
            Object.assign(d, a.j.Se);
            Object.assign(d, c || b.j);
            Object.assign(d, a.Pc.Se);
            (c = !a.N) && ceb(a);
            for (var e = a.La && a.Na && g.Hc(d, a.Na) ? a.La : deb(a, d), f = typeof b.text === "string", h = f ? b.text.split("\n") : [b.text], l = 0; l < h.length; l++) {
                var m = l > 0 || !b.append,
                    n = h[l];
                m && !c ? (ceb(a), e = deb(a, d)) : m && c && (c = !1);
                n && (e.appendChild(f ? g.me(n) : n), f || n.tagName !== "RUBY" || n.childElementCount !== 4 || g.mP || !g.sm(n.children[2], "text-emphasis") || (m = a.C ? "padding-right" : "padding-top", g.sm(n.children[2], "text-emphasis-position") && (m =
                    a.C ? "padding-left" : "padding-bottom"), g.pc ? g.pm(e, m, "1em") : g.pm(e, m, "0.5em")))
            }
            a.Na = d;
            a.La = e;
            a.K.push(b)
        },
        Ydb = function(a, b, c, d) {
            var e = b / 360 * 16;
            b >= a && (a = 640, d > c * 1.3 && (a = 480), e = c / a * 16);
            return e
        },
        geb = function() {
            this.C = this.time = this.mode = this.B = 0;
            this.D = new feb(this);
            this.G = new feb(this);
            this.j = [];
            this.clear()
        },
        ieb = function(a, b, c) {
            if (a === 255 && b === 255 || !a && !b) return {
                ex: a,
                Ut: b,
                result: 0
            };
            a = heb[a];
            b = heb[b];
            if (a & 128) {
                var d;
                if (d = !(b & 128)) d = b, d = c.me() && c.Ut === d;
                if (d) return {
                    ex: a,
                    Ut: b,
                    result: 1
                }
            } else if (b & 128 && 1 <= a && a <= 31) return {
                ex: a,
                Ut: b,
                result: 2
            };
            return {
                ex: a,
                Ut: b,
                result: 3
            }
        },
        keb = function(a, b, c, d) {
            b === 255 && c === 255 || !b && !c ? (++a.C === 45 && a.reset(), a.D.B.clear(), a.G.B.clear()) : (a.C = 0, jeb(a.D, b, c, d))
        },
        leb = function(a, b) {
            a.j.sort(function(e, f) {
                var h = e.time - f.time;
                return h === 0 ? e.order - f.order : h
            });
            for (var c = g.v(a.j), d = c.next(); !d.done; d = c.next()) d = d.value, a.time = d.time, d.type === 0 ? keb(a, d.XX, d.YX, b) : d.type === 1 && a.B & 496 && jeb(a.G, d.XX, d.YX, b);
            a.j.length = 0
        },
        m3 = function() {
            this.type = 0
        },
        n3 = function() {
            this.state = this.Ut = this.ex = 0
        },
        meb = function() {
            this.timestamp = this.j = 0
        },
        o3 = function(a) {
            this.D = a;
            this.B = [];
            this.j = this.col = this.row = 0;
            this.style = new m3;
            for (a = this.C = 0; a <= 15; a++) {
                this.B[a] = [];
                for (var b = 0; b <= 32; b++) this.B[a][b] = new meb
            }
        },
        p3 = function(a, b) {
            if (a.style.type === 3) {
                for (var c = 0, d = 0, e = a.D.time + 0, f = "", h = "", l = e, m = 1; m <= 15; ++m) {
                    for (var n = !1, p = d ? d : 1; p <= 32; ++p) {
                        var q = a.B[m][p];
                        if (q.j !== 0) {
                            c === 0 && (c = m, d = p);
                            n = String.fromCharCode(q.j);
                            var r = q.timestamp;
                            r < e && (e = r);
                            q.timestamp = l;
                            h && (f += h, h = "");
                            f += n;
                            n = !0
                        }
                        if ((q.j === 0 || p === 32) && n) {
                            h = "\n";
                            break
                        } else if (d && !n) break
                    }
                    if (c && !n) break
                }
                f && b.D(c, d, e, l, f)
            } else
                for (d = c = 0, f = e = a.D.time + 0, h = 1; h <= 15; ++h)
                    for (l = "", m = 1; m <= 32; ++m)
                        if (p = a.B[h][m], q = p.j, q !== 0 && (c === 0 && (c = h, d = m), n = String.fromCharCode(q), r = p.timestamp, r <= e && (e = r), l += n, p.reset()), m === 32 || q === 0) l && b.D(c, d, e, f, l), e = f, l = "", d = c = 0
        },
        Ieb = function(a, b) {
            switch (a) {
                case 0:
                    return neb[(b & 127) - 32];
                case 1:
                    return oeb[b & 15];
                case 2:
                    return Geb[b & 31];
                case 3:
                    return Heb[b & 31]
            }
            return 0
        },
        q3 = function(a) {
            return a.B[a.row][a.col]
        },
        r3 = function(a, b, c) {
            b >= 2 && a.col > 1 && (--a.col, q3(a).j = 0);
            var d = q3(a);
            d.timestamp = a.D.time + 0;
            d.j = Ieb(b, c);
            a.col < 32 && a.col++
        },
        Jeb = function(a, b, c, d) {
            for (var e = 0; e < d; e++)
                for (var f = 0; f <= 32; f++) {
                    var h = a.B[b + e][f],
                        l = a.B[c + e][f];
                    h.j = l.j;
                    h.timestamp = l.timestamp
                }
        },
        s3 = function(a, b, c) {
            for (var d = 0; d < c; d++)
                for (var e = 0; e <= 32; e++) a.B[b + d][e].reset()
        },
        Keb = function(a) {
            a.row = a.j > 0 ? a.j : 1;
            a.col = 1;
            s3(a, 0, 15)
        },
        Leb = function(a) {
            this.C = a;
            this.G = 0;
            this.style = new m3;
            this.K = new o3(this.C);
            this.N = new o3(this.C);
            this.text = new o3(this.C);
            this.B = this.K;
            this.D = this.N;
            this.j = this.B
        },
        Meb = function(a, b, c) {
            var d = a.B,
                e = !1;
            switch (a.style.get()) {
                case 4:
                case 1:
                case 2:
                    a.style.get() === 4 && d.j > 0 || (p3(d, c), Keb(a.B), Keb(a.D), d.row = 15, d.j = b, e = !0)
            }
            a.style.set(3);
            a.j = d;
            a.j.style = a.style;
            a.C.mode = 1 << d.C;
            e ? d.col = 1 : d.j !== b && (d.j > b ? (p3(d, c), s3(d, d.row - d.j, b)) : d.row < b && (b = d.j), d.j = b)
        },
        Neb = function(a) {
            a.style.set(1);
            a.j = a.D;
            a.j.j = 0;
            a.j.style = a.style;
            a.C.mode = 1 << a.j.C
        },
        Oeb = function(a) {
            a.style.set(4);
            a.j = a.text;
            a.j.style = a.style;
            a.C.mode = 1 << a.j.C
        },
        feb = function(a) {
            this.j = a;
            this.G = 0;
            this.C = new Leb(this.j);
            this.K = new Leb(this.j);
            this.B = new n3;
            this.D = this.C
        },
        jeb = function(a, b, c, d) {
            a.B.update();
            b = ieb(b, c, a.B);
            switch (b.result) {
                case 0:
                    return;
                case 1:
                case 2:
                    return
            }
            var e = b.ex;
            c = b.Ut;
            if (32 <= e || !e) a.j.mode & a.j.B && (b = e, b & 128 && (b = 127), c & 128 && (c = 127), a = a.D.j, b & 96 && r3(a, 0, b), c & 96 && r3(a, 0, c), b !== 0 && c !== 0 && a.style.type === 3 && p3(a, d));
            else if (e & 16) a: if (!a.B.matches(e, c) && (b = a.B, b.ex = e, b.Ut = c, b.state = 2, b = e & 8 ? a.K : a.C, a.D = b, a.j.mode = 1 << (a.G << 2) + (b.G << 1) + (b.style.type === 4 ? 1 : 0), (a.j.mode | 1 << (a.G << 2) + (b.G << 1) + (b.style.type !== 4 ? 1 : 0)) & a.j.B))
                if (c & 64) {
                    d = [11, 11, 1, 2, 3, 4, 12, 13, 14, 15, 5, 6, 7, 8, 9, 10][(e & 7) << 1 | c >> 5 & 1];
                    a = c & 16 ? ((c & 14) >> 1) * 4 : 0;
                    c = b.j;
                    switch (b.style.get()) {
                        case 4:
                            d = c.row;
                            break;
                        case 3:
                            if (d !== c.row) {
                                if (d < c.j && (d = c.j, d === c.row)) break;
                                var f = 1 + c.row - c.j,
                                    h = 1 + d - c.j;
                                Jeb(c, h, f, c.j);
                                b = f;
                                e = c.j;
                                h < f ? (f = h + e - f, f > 0 && (b += f, e -= f)) : (f = f + e - h, f > 0 && (e -= f));
                                s3(c, b, e)
                            }
                    }
                    c.row = d;
                    c.col = a + 1
                } else switch (e & 7) {
                    case 1:
                        switch (c & 112) {
                            case 32:
                                r3(b.j, 0, 32);
                                break a;
                            case 48:
                                c === 57 ? (d = b.j, q3(d).j = 0, d.col < 32 && d.col++) : r3(b.j, 1, c & 15)
                        }
                        break;
                    case 2:
                        c & 32 && r3(b.j, 2, c & 31);
                        break;
                    case 3:
                        c & 32 && r3(b.j, 3, c & 31);
                        break;
                    case 4:
                    case 5:
                        if (32 <= c && c <= 47) switch (c) {
                            case 32:
                                Neb(b);
                                break;
                            case 33:
                                d = b.j;
                                d.col > 1 && (--d.col, q3(d).j = 0);
                                break;
                            case 36:
                                d = b.j;
                                b = q3(d);
                                for (a = 0; a <= 15; a++)
                                    for (c = 0; c <= 32; c++)
                                        if (d.B[a][c] === b) {
                                            for (; c <= 32; c++) d.B[a][c].reset();
                                            break
                                        }
                                break;
                            case 37:
                                Meb(b, 2, d);
                                break;
                            case 38:
                                Meb(b, 3, d);
                                break;
                            case 39:
                                Meb(b, 4, d);
                                break;
                            case 40:
                                r3(b.j, 0, 32);
                                break;
                            case 41:
                                b.style.set(2);
                                b.j = b.B;
                                b.j.j = 0;
                                b.j.style = b.style;
                                b.C.mode = 1 << b.j.C;
                                break;
                            case 42:
                                d = b.text;
                                d.j = 15;
                                d.style.set(4);
                                Keb(d);
                                Oeb(b);
                                break;
                            case 43:
                                Oeb(b);
                                break;
                            case 44:
                                a = b.B;
                                switch (b.style.get()) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        p3(a,
                                            d)
                                }
                                s3(a, 0, 15);
                                break;
                            case 45:
                                b: {
                                    a = b.j;
                                    switch (b.style.get()) {
                                        default:
                                            case 2:
                                            case 1:
                                            break b;
                                        case 4:
                                                if (a.row < 15) {
                                                ++a.row;
                                                a.col = 1;
                                                break b
                                            }break;
                                        case 3:
                                    }
                                    a.j < 2 && (a.j = 2, a.row < a.j && (a.row = a.j));b = a.row - a.j + 1;p3(a, d);Jeb(a, b, b + 1, a.j - 1);s3(a, a.row, 1)
                                }
                                break;
                            case 46:
                                s3(b.D, 0, 15);
                                break;
                            case 47:
                                p3(b.B, d), b.D.updateTime(b.C.time + 0), d = b.D, b.D = b.B, b.B = d, Neb(b)
                        }
                        break;
                    case 7:
                        switch (c) {
                            case 33:
                            case 34:
                            case 35:
                                d = b.j, (d.col += c & 3) > 32 && (d.col = 32)
                        }
                }
        },
        Peb = function() {},
        t3 = function(a, b, c, d, e, f, h) {
            f = f === void 0 ? !1 : f;
            h = h === void 0 ? null : h;
            g.xD.call(this, a, a + b, {
                priority: c,
                namespace: "captions"
            });
            this.windowId = d;
            this.text = e;
            this.append = f;
            this.j = h
        },
        Reb = function(a, b, c, d, e, f, h) {
            var l = f[0],
                m = h[l.getAttribute("p")];
            if (m.jg === 1) {
                var n = f[1],
                    p = f[2];
                f = f[3];
                l.getAttribute("t");
                n.getAttribute("t");
                p.getAttribute("t");
                f.getAttribute("t");
                l.getAttribute("p");
                n.getAttribute("p");
                f.getAttribute("p");
                h = h[p.getAttribute("p")];
                l = Qeb(l.textContent, n.textContent, p.textContent, f.textContent, h);
                return new t3(a, b, e, c, l, d, m)
            }
            switch (m.jg) {
                case 9:
                case 10:
                    m.vp = 1;
                    break;
                case 11:
                    m.vp = 2;
                    break;
                case 12:
                    m.vp = 3;
                    break;
                case 13:
                    m.vp = 4;
                    break;
                case 14:
                    m.vp = 5
            }
            return new t3(a, b, e, c, l.textContent || "", d, m)
        },
        Qeb = function(a, b, c, d, e) {
            var f = g.ts(),
                h =
                f ? g.le("DIV") : g.le("RUBY"),
                l = g.le("SPAN");
            l.textContent = a;
            h.appendChild(l);
            a = f ? g.le("DIV") : g.le("RP");
            a.textContent = b;
            h.appendChild(a);
            b = f ? g.le("DIV") : g.le("RT");
            b.textContent = c;
            h.appendChild(b);
            c = e.jg;
            if (c === 10 || c === 11 || c === 12 || c === 13 || c === 14)
                if (g.pm(b, "text-emphasis-style", "filled circle"), g.pm(b, "text-emphasis-color", "currentcolor"), g.pm(b, "webkit-text-emphasis", "filled circle"), e.jg === 11 || e.jg === 13) g.pm(b, "webkit-text-emphasis-position", "under left"), g.pm(b, "text-emphasis-position", "under left");
            c = !0;
            if (e.jg === 4 || e.jg === 7 || e.jg === 12 ||
                e.jg === 14) g.pm(h, "ruby-position", "over"), g.pm(h, "-webkit-ruby-position", "before");
            else if (e.jg === 5 || e.jg === 6 || e.jg === 11 || e.jg === 13) g.pm(h, "ruby-position", "under"), g.pm(h, "-webkit-ruby-position", "after"), c = !1;
            e = f ? g.le("DIV") : g.le("RP");
            e.textContent = d;
            h.appendChild(e);
            f && (d = c, g.pm(h, {
                display: "inline-block",
                position: "relative"
            }), f = h.firstElementChild.nextElementSibling, g.pm(f, "display", "none"), f = f.nextElementSibling, g.pm(f, {
                "font-size": "0.5em",
                "line-height": "1.2em",
                "text-align": "center",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                width: "400%"
            }), g.pm(h.lastElementChild, "display", "none"), d ? (g.pm(h, "padding-top", "0.6em"), g.pm(f, "top", "0")) : (g.pm(h, "padding-bottom", "0.6em"), g.pm(f, "bottom", "0")));
            return h
        },
        u3 = function() {
            g.O.apply(this, arguments)
        },
        v3 = function(a, b, c, d, e) {
            g.xD.call(this, a, a + b, {
                priority: c,
                namespace: "captions"
            });
            this.id = d;
            this.params = e;
            this.j = []
        },
        Seb = function(a) {
            var b = "_" + w3++;
            return new v3(0, 0x8000000000000, 0, b, a)
        },
        x3 = function(a) {
            u3.call(this);
            this.C = a;
            this.pens = {};
            this.N = {};
            this.Z = {};
            this.D = "_" + w3++;
            this.K = {};
            this.B = this.j = null;
            this.G = !0
        },
        y3 = function(a, b) {
            a = a.getAttribute(b);
            if (a != null) return Number(a)
        },
        z3 = function(a, b) {
            a = a.getAttribute(b);
            if (a != null) return a === "1"
        },
        A3 = function(a, b) {
            a = y3(a, b);
            return a !== void 0 ? a : null
        },
        C3 = function(a, b) {
            a = a.getAttribute(b);
            if (a != null) return B3.test(a), a
        },
        Teb = function(a, b) {
            var c = {},
                d = b.getAttribute("ws");
            Object.assign(c, d ? a.Z[d] : a.C);
            a = A3(b, "mh");
            a != null && (c.TB = a);
            a = A3(b, "ju");
            a != null && (c.textAlign = a);
            a = A3(b, "pd");
            a != null && (c.Wi = a);
            a = A3(b, "sd");
            a != null && (c.OU = a);
            a = C3(b, "wfc");
            a != null && (c.windowColor = a);
            b = y3(b, "wfo");
            b !== void 0 && (c.windowOpacity = b / 255);
            return c
        },
        Ueb = function(a, b) {
            var c = {},
                d = b.getAttribute("wp");
            d && Object.assign(c, a.N[d]);
            a = A3(b, "ap");
            a != null && (c.Im = a);
            a = y3(b, "cc");
            a != null && (c.Yt = a);
            a = y3(b, "ah");
            a != null && (c.Tk = a);
            a = y3(b, "rc");
            a != null && (c.Vs = a);
            b = y3(b, "av");
            b != null && (c.xp = b);
            return c
        },
        Veb = function(a, b, c, d) {
            var e = {};
            Object.assign(e, Ueb(a, b));
            Object.assign(e, Teb(a, b));
            d ? g.Hc(e, a.C) ? (d = a.D, e = a.C) : d = "_" + w3++ : d = b.getAttribute("id") || "_" + w3++;
            a = y3(b, "t") + c;
            b = y3(b, "d") || 0x8000000000000;
            if (e.Wi === 2 || e.Wi === 3) c = e.Vs, e.Vs = e.Yt, e.Yt = c;
            return new v3(a, b, 0, d, e)
        },
        D3 = function(a) {
            u3.call(this);
            this.G = a;
            this.j = new Map;
            this.C = new Map;
            this.D = new Map;
            this.B = new Map
        },
        E3 = function(a) {
            a = g.Gd(Math.round(a), 0, 16777215).toString(16).toUpperCase();
            return "#000000".substr(0, 7 - a.length) + a
        },
        Web = function(a, b, c, d, e) {
            d === 0 && (d = 0x8000000000000);
            var f = {};
            b.wpWinPosId && Object.assign(f, a.C.get(b.wpWinPosId));
            b.wsWinStyleId && Object.assign(f, a.D.get(b.wsWinStyleId));
            a = b.rcRowCount;
            a !== void 0 && (f.Vs = a);
            b = b.ccColCount;
            b !== void 0 && (f.Yt = b);
            if (f.Wi === 2 || f.Wi === 3) b = f.Vs, f.Vs = f.Yt, f.Yt = b;
            return new v3(c, d, 0, e, f)
        },
        F3 = function(a, b, c, d) {
            g.gU.call(this, a);
            this.videoData = b;
            this.audioTrack = c;
            this.Ua = d;
            this.G = b.Iw
        },
        G3 = function(a, b, c, d, e, f, h, l, m, n) {
            k3.call(this, a, b, c, d, e, f, h, l, m, n);
            this.type = 1
        },
        H3 = function(a, b, c) {
            this.trackData = a;
            this.K = c;
            this.version = this.G = this.C = this.byteOffset = 0;
            this.j = new DataView(this.trackData);
            this.B = []
        },
        I3 = function(a) {
            var b = a.byteOffset;
            a.byteOffset += 1;
            return a.j.getUint8(b)
        },
        J3 = function(a) {
            var b = a.byteOffset;
            a.byteOffset += 4;
            return a.j.getUint32(b)
        },
        K3 = function(a, b) {
            u3.call(this);
            this.B = a;
            this.C = b;
            this.track = this.C.languageName === "CC3" ? 4 : 0;
            this.j = new geb;
            this.j.B = 1 << this.track
        },
        Yeb = function(a) {
            if (typeof a === "string") return !1;
            a = new H3(a, 8, 0);
            return Xeb(a)
        },
        Xeb = function(a) {
            if (!(a.byteOffset < a.j.byteLength) || J3(a) !== 1380139777) return !1;
            a.version = I3(a);
            if (a.version > 1) return !1;
            I3(a);
            I3(a);
            I3(a);
            return !0
        },
        L3 = function(a, b, c, d, e, f, h, l, m, n) {
            k3.call(this, a, b, c, d, e, f, h, l, m, n);
            var p = this;
            this.type = 2;
            this.Ca = [];
            this.qa = this.Y = this.Ra = 0;
            this.Fa = NaN;
            this.Sb = 0;
            this.vc = null;
            this.Wa = new g.lp(this.Gca, 433, this);
            this.G && (n.createClientVe(this.G, this, 167342), this.T(this.G, "click", function() {
                n.logClick(p.G)
            }), a = new g.BT(this.element, !0), g.P(this, a), a.subscribe("hoverstart", function() {
                n.logVisibility(p.G, !0)
            }, this));
            g.tp(this.element, "ytp-caption-window-rollup");
            g.P(this, this.Wa);
            g.pm(this.element, "overflow", "hidden")
        },
        Zeb = function(a, b) {
            if (!b) return "";
            a.C && a.B.params.OU !== 1 && (b *= -1);
            return "translate" + (a.C ? "X" : "Y") + "(" + b + "px)"
        },
        $eb = function(a) {
            a.Ca = Array.from(document.getElementsByClassName("caption-visual-line"));
            for (var b = a.B.params.Vs, c = 0, d = 0, e = a.Ca.length - 1; c < b && e > -1;) {
                var f = a.Ca[e];
                d += a.C ? f.offsetWidth : f.offsetHeight;
                c++;
                e--
            }
            a.Y = d;
            b = Math;
            c = b.max;
            isNaN(a.Fa) && ((d = a.j.Yt) ? (e = g.le("SPAN"), g.ue(e, "\u2013".repeat(d)), g.pm(e, beb(a, a.j.Se)), a.D.appendChild(e), a.Fa = e.offsetWidth, a.D.removeChild(e)) : a.Fa = 0);
            d = a.D;
            a.qa = c.call(b, a.Fa, a.Sb, (a.C ? d.offsetHeight : d.offsetWidth) + 1)
        },
        afb = function(a, b) {
            $eb(a);
            var c = a.Ca.reduce(function(f, h) {
                return (a.C ? h.offsetWidth : h.offsetHeight) + f
            }, 0);
            c = a.Y - c;
            if (c !== a.Ra) {
                var d = c > 0 && a.Ra === 0,
                    e = c < a.Ra;
                b || isNaN(c) || d || !e || (g.tp(a.element, "ytp-rollup-mode"), g.mp(a.Wa));
                g.pm(a.D, "transform", Zeb(a, c));
                a.Ra = c
            }
            $eb(a)
        },
        M3 = function() {
            u3.call(this)
        },
        bfb = function(a, b, c, d, e, f, h, l, m) {
            switch (h.tagName) {
                case "b":
                    l.bold = !0;
                    break;
                case "i":
                    l.italic = !0;
                    break;
                case "u":
                    l.underline = !0
            }
            for (var n = 0; n < h.childNodes.length; n++) {
                var p = h.childNodes[n];
                if (p.nodeType === 3) p = new t3(b, c, d, e.id, p.nodeValue, f || n > 0, g.Fc(l) ? void 0 : l), m.push(p), e.j.push(p);
                else {
                    var q = {};
                    Object.assign(q, l);
                    bfb(a, b, c, d, e, !0, p, q, m)
                }
            }
        },
        cfb = function(a) {
            var b = a.split(":");
            a = 0;
            b = g.v(b);
            for (var c = b.next(); !c.done; c = b.next()) a = a * 60 + Number(c.value);
            return a * 1E3
        },
        dfb = function(a, b, c, d) {
            d = Object.assign({
                TB: 0
            }, d);
            return new v3(a, b, c, "_" + w3++, d)
        },
        N3 = function(a, b) {
            g.O.call(this);
            this.J = a;
            this.W = b;
            this.j = null;
            this.B = this.J.TA()
        },
        efb = function(a) {
            if (typeof a === "string" || Yeb(a)) return a;
            var b = new DataView(a);
            if (b.byteLength <= 8 || b.getUint32(4) !== 1718909296) return "";
            b = g.kM(b, 0, 1835295092);
            if (!b || !b.size) return "";
            a = new Uint8Array(a, b.dataOffset, b.size - (b.dataOffset - b.offset));
            return g.nK(a)
        },
        gfb = function(a, b, c) {
            if (typeof b === "string" || Yeb(b)) return [{
                trackData: b,
                IU: c
            }];
            var d = new DataView(b);
            if (d.byteLength <= 8 || d.getUint32(4) !== 1718909296) return [];
            var e = g.JDa(d);
            if (a.B && e) {
                var f = g.BDa(e),
                    h = g.CDa(e);
                e = e.tj;
                f && e && a.B.OI(e, f, h)
            }
            a = g.tM(d, 1835295092);
            if (!a || !a.length || !a[0].size) return [];
            f = [];
            for (h = 0; h < a.length; h++) e = a[h], e = new Uint8Array(b, e.dataOffset, e.size - (e.dataOffset - e.offset)), e = g.nK(e), f.push({
                trackData: e,
                IU: c + h * 1E3
            });
            ffb(d, f, c);
            return f = f.filter(function(l) {
                return !!l.trackData
            })
        },
        ffb = function(a, b, c) {
            var d = g.kM(a, 0, 1836476516),
                e = 9E4;
            d && (e = g.lM(d) || 9E4);
            d = 0;
            for (var f = g.tM(a, 1836019558), h = 0; h < f.length; h++) {
                var l = f[h];
                h < b.length && (l = g.kM(a, l.dataOffset, 1953653094)) && (l = g.kM(a, l.dataOffset, 1952867444)) && (l = g.rM(l) / e * 1E3, h === 0 && (d = l), b[h].IU = l - d + c || c * h * 1E3)
            }
        },
        hfb = function(a, b, c, d, e) {
            if (!Yeb(c)) throw Error("Invalid binary caption track data");
            a.j || (a.j = new K3(e, b));
            return a.j.Yo(c, d)
        },
        ifb = function(a, b, c) {
            a.j || (a.j = new M3);
            a = a.j.Yo(b, c);
            Math.random() < .01 && g.mx(Error("Deprecated subtitles format in web player: WebVTT"));
            return a
        },
        kfb = function(a, b, c, d) {
            if (c[0] === "{") try {
                return a.j || (a.j = new D3(jfb(b))), a.j.Yo(c, d)
            } catch (f) {
                return g.lx(f), []
            }
            var e = g.Z0(c);
            if (!e || !e.firstChild) throw a = Error("Invalid caption track data"), a.params = c, a;
            if (e.firstChild.tagName === "timedtext") {
                if (Number(e.firstChild.getAttribute("format")) === 3) return a.j || (a.j = new x3(jfb(b), a.W)), a.j.Yo(e, d);
                a = Error("Unsupported subtitles format in web player (Format2)");
                a.params = c;
                throw a;
            }
            if (e.firstChild.tagName === "transcript") throw a = Error("Unsupported subtitles format in web player (Format1)"), a.params = c, a;
            a = Error("Invalid caption track data");
            a.params = c;
            throw a;
        },
        jfb = function(a) {
            var b = {};
            if (a = g.DP(a)) b.lang = a, g.k$a.test(a) && (b.Wi = 1);
            return b
        },
        O3 = function(a) {
            g.dU.call(this, a);
            var b = this;
            this.J = a;
            this.W = this.J.U();
            this.videoData = this.J.getVideoData();
            this.wb = this.J.qb();
            var c;
            this.fb = (c = this.J.getVideoData(1)) == null ? void 0 : g.rQ(c);
            this.C = {
                Se: {}
            };
            this.G = {
                Se: {}
            };
            this.Ia = [];
            this.Ca = {};
            this.Va = {};
            this.Z = !1;
            this.Sb = g.fR(this.videoData);
            this.Xa = g.sOa(this.videoData, this.J);
            this.Kb = !!this.videoData.captionTracks.length;
            this.Tb = !!this.videoData.qf;
            this.Wa = this.W.controlsType === "3";
            this.j = this.N = this.Y = this.Ra = this.rb = null;
            this.bb = new N3(this.J, this.W);
            this.B = null;
            this.qa = new g.VE(this);
            this.K = new g.U({
                I: "div",
                S: "ytp-caption-window-container",
                X: {
                    id: "ytp-caption-window-container"
                }
            });
            this.ra = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: 1,
                height: 1
            };
            c = null;
            var d = g.Wp("yt-html5-player-modules::subtitlesModuleData");
            d && (c = new g.Np(d));
            this.storage = c;
            var e;
            this.Ob = !((e = a.Me()) == null || !e.FI());
            this.D = lfb(this);
            this.Fa = !this.D && this.Wa && this.Ob && this.Xa;
            g.P(this, this.bb);
            this.D ? this.Na = this.La = null : (this.La = new g.kp(this.aV, void 0, this), g.P(this, this.La), this.Na = new g.lp(this.hea, 2E3, this), g.P(this,
                this.Na));
            g.P(this, this.qa);
            g.OR(this.player, this.K.element, 4);
            g.P(this, this.K);
            this.qa.T(a, "contentPoTokenReady", this.iH);
            this.D || this.qa.T(a, "resize", this.cV);
            (this.Bb = g.VO(this.W) && !g.Us() && !this.J.isFullscreen() && !this.D && !this.Fa) && this.qa.T(a, "resize", this.Qba);
            this.qa.T(a, "onPlaybackAudioChange", this.cba);
            this.qa.T(a, g.zD("captions"), function(f) {
                b.onCueRangeEnter(f)
            });
            this.qa.T(a, g.AD("captions"), function(f) {
                b.onCueRangeExit(f)
            });
            this.fb && this.qa.T(a, "videodatachange", function(f, h) {
                b.onVideoDataChange(f, h)
            });
            mfb(this, Odb() || {});
            this.player.Bc("onCaptionsModuleAvailable")
        },
        pfb = function(a) {
            if (a.W.wb === 1 || a.videoData.CD === 1 || g.MQ(a.videoData, "yt:cc") === "alwayson") return !0;
            if (a.videoData.captionTracks.length) var b = a.getAudioTrack().B;
            if (a.W.wb === 2) {
                if (g.jP(a.W)) var c = nfb(a);
                else if (a.storage) try {
                    c = a.storage.get("module-enabled")
                } catch (e) {
                    a.storage.remove("module-enabled")
                } else c = null;
                if (c != null) return !!c
            }
            c = Hdb(a.player.getAudioTrack(), g.jP(a.W));
            var d = g.MQ(a.videoData, "yt:cc");
            if (ofb(a) === void 0) {
                if (c === "CAPTIONS_INITIAL_STATE_ON_RECOMMENDED") return d ? d === "on" : !0;
                if (c === "CAPTIONS_INITIAL_STATE_OFF_RECOMMENDED") return d === "on"
            } else return d === "on";
            return b === "ON" || g.MQ(a.videoData,
                "yt:cc") === "on"
        },
        P3 = function(a, b) {
            if (a.B && (b === void 0 || !b) || !a.videoData.captionTracks.length) return !1;
            a = a.getAudioTrack();
            return !!a.j || a.B === "FORCED_ON"
        },
        ofb = function(a) {
            var b = void 0,
                c = g.tt(g.rt(), 65);
            if (g.jP(a.W) && c != null) {
                if (nfb(a) != null) return !1;
                b = !c
            }
            return b
        },
        qfb = function(a) {
            var b;
            a.Sb ? b = new F3(a.W, a.videoData, a.getAudioTrack(), a.player) : a.Xa ? b = new j3(a.videoData.j, a.player) : a.Kb ? b = new g.hU(a.W, a.videoData, a.getAudioTrack()) : b = new g.lU(a.W, a.videoData.qf, a.videoData.videoId, g.JLa(a.videoData), a.videoData.In, a.videoData.eventId);
            return b
        },
        R3 = function(a, b) {
            if (a.j) {
                if (a.N && a.N.D) return a.N.D;
                g.ZQ(a.videoData) && (b = !0);
                b || (b = a.Tb ? !1 : a.Kb ? !1 : !0);
                b = b || rfb(a);
                b = g.eU(a.j.B, b);
                var c = null;
                if (g.jP(a.W)) {
                    var d = a.J.isInline() ? void 0 : g.lt("yt-player-caption-sticky-language");
                    for (var e = [d, a.videoData.captionsLanguagePreference, a.W.captionsLanguagePreference, g.MQ(a.videoData, "yt:cc_default_lang")], f = !1, h = 0; h < e.length; h++) {
                        var l = e[h];
                        if (l) {
                            f = !0;
                            for (var m = 0; m < b.length; m++)
                                if (g.DP(b[m]) === l) return b[m];
                            for (m = 0; m < b.length; m++)
                                if (g.DP(b[m]).split("-")[0] === l.split("-")[0]) return b[m]
                        }
                    }
                    if (f && a.j && (e = a.j.G,
                            e.length))
                        for (e = g.v(e), f = e.next(); !f.done; f = e.next())
                            if (f = f.value, f.languageCode === d) {
                                c = f;
                                break
                            }
                } else
                    for (d = [a.videoData.captionsLanguagePreference, a.W.captionsLanguagePreference, g.MQ(a.videoData, "yt:cc_default_lang")], e = 0; e < d.length; e++)
                        for (f = 0; f < b.length; f++)
                            if (g.DP(b[f]) === d[e]) return b[f];
                d = null;
                a.N && a.N.C && (d = a.N.C);
                d || (d = b.find(function(n) {
                    return n.isDefault
                }) || null);
                d || (d = b[0] || Q3(a));
                d && c && g.DP(d).split("-")[0] !== c.languageCode.split("-")[0] && (d = Idb(d, c));
                return d
            }
            return null
        },
        Q3 = function(a) {
            return a.N && a.N.j
        },
        S3 = function(a) {
            var b = Q3(a);
            return !!b && a.B === b
        },
        sfb = function(a) {
            var b = Hdb(a.player.getAudioTrack(), g.jP(a.W)),
                c;
            b === "CAPTIONS_INITIAL_STATE_ON_REQUIRED" ? c = R3(a, a.Z) : b === "CAPTIONS_INITIAL_STATE_OFF_REQUIRED" && P3(a) ? c = Q3(a) : ofb(a) || a.Z || pfb(a) ? c = R3(a, a.Z) : P3(a) && (c = Q3(a));
            if (a.D || a.Fa) {
                var d = g.eU(a.j.B, !0);
                b = [];
                for (var e = 0; e < d.length; e++) {
                    var f = d[e],
                        h = g.le("TRACK");
                    h.setAttribute("kind", "subtitles");
                    h.setAttribute("label", g.BP(f));
                    h.setAttribute("srclang", g.DP(f));
                    h.setAttribute("id", f.toString());
                    a.Fa || h.setAttribute("src", a.j.Ix(f, "vtt"));
                    f === c && h.setAttribute("default", "1");
                    b.push(h)
                }
                c = a.J.Me();
                c.HE(b);
                c =
                    c.Lb();
                a.Ob && a.qa.T(c.textTracks, "change", a.oda)
            } else !a.B && c && (a.W.L("html5_report_caption_format_intent") && a.rj(c ? c.vssId : "", "s"), T3(a, c)), a.player.Bc("onCaptionsTrackListChanged"), a.player.qn("onApiChange")
        },
        tfb = function(a, b) {
            var c = a.J.Me().Lb().textTracks;
            a = a.B.toString();
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                e.id === a && (b ? e.mode !== "showing" && (e.mode = "showing") : e.mode === "showing" && (e.mode = "disabled"))
            }
        },
        T3 = function(a, b, c) {
            a.loaded && a.unload();
            c != null && (a.Z = c, a.Z && (g.jP(a.W) ? U3(a, !!b) : V3(a, !!b)));
            a.W.L("html5_report_caption_format_change") && (c = a.B, a.Z ? c ? a.Zj(b, !!b, "m") : b && a.Zj(b, !0, "m") : !c && b && a.Zj(b, !0, "s"));
            a.B = b;
            P3(a) && (a.B = Q3(a));
            var d;
            ufb(a, (d = a.B) != null ? d : void 0);
            a.load()
        },
        wfb = function(a, b) {
            if (b instanceof v3) {
                var c = a.Ca[b.id];
                c && c.B !== b && (c.dispose(), delete a.Ca[b.id], c = null);
                c || (c = vfb(a, b)) && (a.Ca[b.id] = c)
            } else c = b.windowId, a.Va[c] || (a.Va[c] = []), a.Va[c].push(b)
        },
        vfb = function(a, b) {
            var c = xfb(a);
            if (!c) return null;
            var d = a.B ? g.DP(a.B) : null;
            d && g.k$a.test(d) && (b.params.Wi = 1);
            var e = a.wb.getPlayerSize();
            d = e.height * a.ra.height;
            e = e.width * a.ra.width;
            a.W.playerStyle !== "google-live" || a.C.isDefault || Object.assign(b.params, a.C);
            switch (b.params.TB != null ? b.params.TB : b.j.length > 1 ? 1 : 0) {
                case 1:
                    return new G3(b, a.C, a.G, c.width, c.height, e, d, a.W.experiments, a.wO.bind(a), a.J);
                case 2:
                    return new L3(b, a.C, a.G, c.width, c.height, e, d, a.W.experiments, a.wO.bind(a), a.J);
                default:
                    return new k3(b, a.C, a.G, c.width, c.height, e,
                        d, a.W.experiments, a.wO.bind(a), a.J)
            }
        },
        mfb = function(a, b, c) {
            c = c === void 0 ? !1 : c;
            var d = W3.Se;
            a.C = {};
            Object.assign(a.C, W3);
            a.C.Se = {};
            Object.assign(a.C.Se, d);
            a.G = {
                Se: {}
            };
            var e = b.backgroundOverride ? a.G : a.C,
                f = b.background || d.background;
            B3.test(f);
            e.Se.background = f;
            e = b.colorOverride ? a.G : a.C;
            f = b.color || d.color;
            B3.test(f);
            e.Se.color = f;
            e = b.windowColorOverride ? a.G : a.C;
            f = b.windowColor || W3.windowColor;
            B3.test(f);
            e.windowColor = f;
            e = b.backgroundOpacityOverride ? a.G : a.C;
            f = b.backgroundOpacity;
            f == null && (f = d.backgroundOpacity);
            e.Se.backgroundOpacity = f;
            e = b.fontSizeIncrementOverride ? a.G : a.C;
            f = b.fontSizeIncrement;
            f == null && (f = d.fontSizeIncrement);
            e.Se.fontSizeIncrement = f;
            f = b.fontStyleOverride ? a.G : a.C;
            e = b.fontStyle;
            e == null && (e = d.bold && d.italic ? 3 : d.bold ? 1 : d.italic ? 2 : 0);
            f = f.Se;
            switch (e) {
                case 1:
                    f.bold = !0;
                    delete f.italic;
                    break;
                case 2:
                    delete f.bold;
                    f.italic = !0;
                    break;
                case 3:
                    f.bold = !0;
                    f.italic = !0;
                    break;
                default:
                    delete f.bold, delete f.italic
            }
            e = b.textOpacityOverride ? a.G : a.C;
            f = b.textOpacity;
            f == null && (f = d.textOpacity);
            e.Se.textOpacity = f;
            e = b.windowOpacityOverride ? a.G : a.C;
            f = b.windowOpacity;
            f == null && (f = W3.windowOpacity);
            e.windowOpacity =
                f;
            e = b.charEdgeStyleOverride ? a.G : a.C;
            f = b.charEdgeStyle;
            f == null && (f = d.charEdgeStyle);
            e.Se.charEdgeStyle = f;
            e = b.fontFamilyOverride ? a.G : a.C;
            f = b.fontFamily;
            f == null && (f = d.fontFamily);
            e.Se.fontFamily = f;
            a.loaded && a.cV();
            c && g.kt("yt-player-caption-display-settings", b, 2592E3)
        },
        zfb = function(a, b, c) {
            b && !a.Y ? (b = Seb({
                Wi: 0,
                lang: "en-GB"
            }), a.Y = [b, new t3(b.start, b.end - b.start, 0, b.id, c != null ? c : "Captions look like this")], a.player.rf(a.Y)) : !b && a.Y && (yfb(a, a.Y), a.Y = null)
        },
        yfb = function(a, b) {
            a.player.pp(b);
            b = g.v(b);
            for (var c = b.next(); !c.done; c = b.next()) g.vb(a.Ia, c.value);
            h3(a.La)
        },
        ufb = function(a, b) {
            a.W.L("html5_modify_caption_vss_logging") && (a.videoData.rE = b)
        },
        xfb = function(a) {
            var b = a.wb.getVideoContentRect(!0).height,
                c = a.wb.getVideoContentRect(!0).width;
            if (!b || !c) return null;
            b *= a.ra.height;
            c *= a.ra.width;
            return {
                width: c,
                height: b
            }
        },
        V3 = function(a, b) {
            if (a.storage) try {
                a.storage.set("module-enabled", b)
            } catch (c) {}
        },
        U3 = function(a, b) {
            a.J.isInline() || g.kt("yt-player-sticky-caption", b, 2592E3)
        },
        nfb = function(a) {
            if (!a.J.isInline()) return g.lt("yt-player-sticky-caption")
        },
        lfb = function(a) {
            var b, c = !((b = a.J.Me()) == null || !b.DI());
            return a.Wa && c && !a.Xa
        },
        rfb = function(a) {
            return a.W.L("web_deprecate_always_includes_asr_setting") && g.jP(a.W) ? !0 : !!g.tt(g.rt(), 66)
        };
    g.VW.prototype.JF = g.da(51, function(a) {
        var b = 2;
        this.K.has(a) ? b = 0 : g.FUa(this, a) && (b = 1);
        return b
    });
    g.sZ.prototype.JF = g.da(50, function(a) {
        return this.hd.JF(a)
    });
    g.VW.prototype.OI = g.da(49, function(a, b, c) {
        this.La.set(a, {
            mu: b,
            Xz: c
        })
    });
    g.sZ.prototype.OI = g.da(48, function(a, b, c) {
        this.hd.OI(a, b, c)
    });
    g.gU.prototype.wT = g.da(47, function() {
        return !1
    });
    g.gU.prototype.ev = g.da(46, function() {});
    g.hU.prototype.ev = g.da(45, function(a, b, c) {
        var d = this;
        this.Ka();
        b = this.Ix(a, b);
        this.Dt();
        Gdb(this, b, {
            format: "RAW",
            onSuccess: function(e) {
                d.j = null;
                c(e.responseText, a)
            },
            withCredentials: !0
        })
    });
    g.lU.prototype.ev = g.da(44, function(a, b, c) {
        var d = this;
        this.Ka();
        b = this.Ix(a, b);
        this.Dt();
        this.j = g.bs(b, {
            format: "RAW",
            onSuccess: function(e) {
                d.j = null;
                c(e.responseText, a)
            },
            withCredentials: !0
        })
    });
    g.KT.prototype.jA = g.da(43, function() {
        for (var a = g.de(document, "track", void 0, this.j), b = 0; b < a.length; b++) g.re(a[b])
    });
    g.zW.prototype.jA = g.da(42, function() {
        this.mediaElement.jA()
    });
    g.KT.prototype.FI = g.da(41, function() {
        return !(!this.j.textTracks || !this.j.textTracks.addEventListener)
    });
    g.zW.prototype.FI = g.da(40, function() {
        return this.mediaElement.FI()
    });
    g.KT.prototype.DI = g.da(39, function() {
        return !!this.j.textTracks
    });
    g.zW.prototype.DI = g.da(38, function() {
        return this.mediaElement.DI()
    });
    g.KT.prototype.HE = g.da(37, function(a) {
        for (var b = 0; b < a.length; b++) this.j.appendChild(a[b])
    });
    g.zW.prototype.HE = g.da(36, function(a) {
        this.mediaElement.HE(a)
    });
    g.GR.prototype.rj = g.da(34, function(a, b) {
        var c = g.xR(this.app);
        c && c.rj(a, b)
    });
    g.IZ.prototype.rj = g.da(33, function(a, b) {
        a = [a, b];
        g.HZ(this, g.dJ(this.provider), "cfi", a)
    });
    g.WZ.prototype.rj = g.da(32, function(a, b) {
        this.qoe && this.qoe.rj(a, b)
    });
    g.r_.prototype.rj = g.da(31, function(a, b) {
        this.dc().rj(a, b)
    });
    g.GR.prototype.Zj = g.da(30, function(a, b, c) {
        var d = g.xR(this.app);
        d && d.Zj(a, b, c)
    });
    g.IZ.prototype.Zj = g.da(29, function(a, b, c) {
        if (this.Ra === "" || c !== "s") b = [a, b, this.Ra, c], g.HZ(this, g.dJ(this.provider), "cfs", b), this.Ra = a
    });
    g.WZ.prototype.Zj = g.da(28, function(a, b, c) {
        this.qoe && this.qoe.Zj(a, b, c)
    });
    g.r_.prototype.Zj = g.da(27, function(a, b, c) {
        this.dc().Zj(a, b, c)
    });
    g.nZ.prototype.ZF = g.da(18, function() {
        return this.K
    });
    g.C_.prototype.ZF = g.da(17, function() {
        var a;
        return ((a = g.xR(this)) == null ? void 0 : a.TA()) || null
    });
    g.GR.prototype.TA = g.da(16, function() {
        return this.app.ZF()
    });
    g.r_.prototype.TA = g.da(15, function() {
        var a;
        return ((a = this.ya) == null ? void 0 : a.ZF()) || null
    });
    g.XL.prototype.RK = g.da(1, function(a) {
        return (a = this.jo(a)) ? a.j : 0
    });
    g.xN.prototype.RK = g.da(0, function() {
        return 0
    });
    var Mdb = /#(.)(.)(.)/,
        Ldb = /^#(?:[0-9a-f]{3}){1,2}$/i,
        Tdb = {
            aa: "Afar",
            ab: "Abkhazian",
            ace: "Acehnese",
            ach: "Acoli",
            ada: "Adangme",
            ady: "Adyghe",
            ae: "Avestan",
            aeb: "Tunisian Arabic",
            af: "Afrikaans",
            afh: "Afrihili",
            agq: "Aghem",
            ain: "Ainu",
            ak: "Akan",
            akk: "Akkadian",
            akz: "Alabama",
            ale: "Aleut",
            aln: "Gheg Albanian",
            alt: "Southern Altai",
            am: "Amharic",
            an: "Aragonese",
            ang: "Old English",
            anp: "Angika",
            ar: "Arabic",
            ar_001: "Arabic (world)",
            arc: "Aramaic",
            arn: "Mapuche",
            aro: "Araona",
            arp: "Arapaho",
            arq: "Algerian Arabic",
            ars: "Najdi Arabic",
            arw: "Arawak",
            ary: "Moroccan Arabic",
            arz: "Egyptian Arabic",
            as: "Assamese",
            asa: "Asu",
            ase: "American Sign Language",
            ast: "Asturian",
            av: "Avaric",
            avk: "Kotava",
            awa: "Awadhi",
            ay: "Aymara",
            az: "Azerbaijani",
            az_Cyrl: "Azerbaijani (Cyrillic)",
            az_Latn: "Azerbaijani (Latin)",
            ba: "Bashkir",
            bal: "Baluchi",
            ban: "Balinese",
            bar: "Bavarian",
            bas: "Basaa",
            bax: "Bamun",
            bbc: "Batak Toba",
            bbj: "Ghomala",
            be: "Belarusian",
            bej: "Beja",
            bem: "Bemba",
            bew: "Betawi",
            bez: "Bena",
            bfd: "Bafut",
            bfq: "Badaga",
            bg: "Bulgarian",
            bgc: "Haryanvi",
            bgn: "Western Balochi",
            bho: "Bhojpuri",
            bi: "Bislama",
            bik: "Bikol",
            bin: "Bini",
            bjn: "Banjar",
            bkm: "Kom",
            bla: "Siksik\u00e1",
            blo: "Anii",
            bm: "Bambara",
            bn: "Bangla",
            bo: "Tibetan",
            bpy: "Bishnupriya",
            bqi: "Bakhtiari",
            br: "Breton",
            bra: "Braj",
            brh: "Brahui",
            brx: "Bodo",
            bs: "Bosnian",
            bs_Cyrl: "Bosnian (Cyrillic)",
            bs_Latn: "Bosnian (Latin)",
            bss: "Akoose",
            bua: "Buriat",
            bug: "Buginese",
            bum: "Bulu",
            byn: "Blin",
            byv: "Medumba",
            ca: "Catalan",
            cad: "Caddo",
            car: "Carib",
            cay: "Cayuga",
            cch: "Atsam",
            ccp: "Chakma",
            ce: "Chechen",
            ceb: "Cebuano",
            cgg: "Chiga",
            ch: "Chamorro",
            chb: "Chibcha",
            chg: "Chagatai",
            chk: "Chuukese",
            chm: "Mari",
            chn: "Chinook Jargon",
            cho: "Choctaw",
            chp: "Chipewyan",
            chr: "Cherokee",
            chy: "Cheyenne",
            ckb: "Central Kurdish",
            co: "Corsican",
            cop: "Coptic",
            cps: "Capiznon",
            cr: "Cree",
            crh: "Crimean Tatar",
            cs: "Czech",
            csb: "Kashubian",
            csw: "Swampy Cree",
            cu: "Church Slavic",
            cv: "Chuvash",
            cy: "Welsh",
            da: "Danish",
            dak: "Dakota",
            dar: "Dargwa",
            dav: "Taita",
            de: "German",
            de_AT: "German (Austria)",
            de_CH: "German (Switzerland)",
            del: "Delaware",
            den: "Slave",
            dgr: "Dogrib",
            din: "Dinka",
            dje: "Zarma",
            doi: "Dogri",
            dsb: "Lower Sorbian",
            dua: "Duala",
            dum: "Middle Dutch",
            dv: "Divehi",
            dyo: "Jola-Fonyi",
            dyu: "Dyula",
            dz: "Dzongkha",
            dzg: "Dazaga",
            ebu: "Embu",
            ee: "Ewe",
            efi: "Efik",
            egy: "Ancient Egyptian",
            eka: "Ekajuk",
            el: "Greek",
            elx: "Elamite",
            en: "English",
            en_AU: "English (Australia)",
            en_CA: "English (Canada)",
            en_GB: "English (United Kingdom)",
            en_US: "English (United States)",
            enm: "Middle English",
            eo: "Esperanto",
            es: "Spanish",
            es_419: "Spanish (Latin America)",
            es_ES: "Spanish (Spain)",
            es_MX: "Spanish (Mexico)",
            et: "Estonian",
            eu: "Basque",
            ewo: "Ewondo",
            fa: "Persian",
            fa_AF: "Persian (Afghanistan)",
            fan: "Fang",
            fat: "Fanti",
            ff: "Fula",
            ff_Adlm: "Fula (Adlam)",
            ff_Latn: "Fula (Latin)",
            fi: "Finnish",
            fil: "Filipino",
            fj: "Fijian",
            fo: "Faroese",
            fon: "Fon",
            fr: "French",
            fr_CA: "French (Canada)",
            fr_CH: "French (Switzerland)",
            frm: "Middle French",
            fro: "Old French",
            frr: "Northern Frisian",
            frs: "Eastern Frisian",
            fur: "Friulian",
            fy: "Western Frisian",
            ga: "Irish",
            gaa: "Ga",
            gay: "Gayo",
            gba: "Gbaya",
            gd: "Scottish Gaelic",
            gez: "Geez",
            gil: "Gilbertese",
            gl: "Galician",
            gmh: "Middle High German",
            gn: "Guarani",
            goh: "Old High German",
            gon: "Gondi",
            gor: "Gorontalo",
            got: "Gothic",
            grb: "Grebo",
            grc: "Ancient Greek",
            gsw: "Swiss German",
            gu: "Gujarati",
            guz: "Gusii",
            gv: "Manx",
            gwi: "Gwich\u02bcin",
            ha: "Hausa",
            hai: "Haida",
            haw: "Hawaiian",
            he: "Hebrew",
            hi: "Hindi",
            hi_Latn: "Hindi (Latin)",
            hil: "Hiligaynon",
            hit: "Hittite",
            hmn: "Hmong",
            ho: "Hiri Motu",
            hr: "Croatian",
            hsb: "Upper Sorbian",
            ht: "Haitian Creole",
            hu: "Hungarian",
            hup: "Hupa",
            hy: "Armenian",
            hz: "Herero",
            ia: "Interlingua",
            iba: "Iban",
            ibb: "Ibibio",
            id: "Indonesian",
            ie: "Interlingue",
            ig: "Igbo",
            ii: "Sichuan Yi",
            ik: "Inupiaq",
            ilo: "Iloko",
            "in": "Indonesian",
            inh: "Ingush",
            io: "Ido",
            is: "Icelandic",
            it: "Italian",
            iu: "Inuktitut",
            iw: "Hebrew",
            ja: "Japanese",
            jbo: "Lojban",
            jgo: "Ngomba",
            jmc: "Machame",
            jpr: "Judeo-Persian",
            jrb: "Judeo-Arabic",
            jv: "Javanese",
            ka: "Georgian",
            kaa: "Kara-Kalpak",
            kab: "Kabyle",
            kac: "Kachin",
            kaj: "Jju",
            kam: "Kamba",
            kaw: "Kawi",
            kbd: "Kabardian",
            kbl: "Kanembu",
            kcg: "Tyap",
            kde: "Makonde",
            kea: "Kabuverdianu",
            kfo: "Koro",
            kg: "Kongo",
            kgp: "Kaingang",
            kha: "Khasi",
            kho: "Khotanese",
            khq: "Koyra Chiini",
            ki: "Kikuyu",
            kj: "Kuanyama",
            kk: "Kazakh",
            kkj: "Kako",
            kl: "Kalaallisut",
            kln: "Kalenjin",
            km: "Khmer",
            kmb: "Kimbundu",
            kn: "Kannada",
            ko: "Korean",
            kok: "Konkani",
            kos: "Kosraean",
            kpe: "Kpelle",
            kr: "Kanuri",
            krc: "Karachay-Balkar",
            krl: "Karelian",
            kru: "Kurukh",
            ks: "Kashmiri",
            ks_Arab: "Kashmiri (Arabic)",
            ks_Deva: "Kashmiri (Devanagari)",
            ksb: "Shambala",
            ksf: "Bafia",
            ksh: "Colognian",
            ku: "Kurdish",
            kum: "Kumyk",
            kut: "Kutenai",
            kv: "Komi",
            kw: "Cornish",
            kxv: "Kuvi",
            kxv_Deva: "Kuvi (Devanagari)",
            kxv_Latn: "Kuvi (Latin)",
            kxv_Orya: "Kuvi (Odia)",
            kxv_Telu: "Kuvi (Telugu)",
            ky: "Kyrgyz",
            la: "Latin",
            lad: "Ladino",
            lag: "Langi",
            lah: "Western Panjabi",
            lam: "Lamba",
            lb: "Luxembourgish",
            lez: "Lezghian",
            lg: "Ganda",
            li: "Limburgish",
            lij: "Ligurian",
            lkt: "Lakota",
            lmo: "Lombard",
            ln: "Lingala",
            lo: "Lao",
            lol: "Mongo",
            loz: "Lozi",
            lrc: "Northern Luri",
            lt: "Lithuanian",
            lu: "Luba-Katanga",
            lua: "Luba-Lulua",
            lui: "Luiseno",
            lun: "Lunda",
            luo: "Luo",
            lus: "Mizo",
            luy: "Luyia",
            lv: "Latvian",
            mad: "Madurese",
            maf: "Mafa",
            mag: "Magahi",
            mai: "Maithili",
            mak: "Makasar",
            man: "Mandingo",
            mas: "Masai",
            mde: "Maba",
            mdf: "Moksha",
            mdr: "Mandar",
            men: "Mende",
            mer: "Meru",
            mfe: "Morisyen",
            mg: "Malagasy",
            mga: "Middle Irish",
            mgh: "Makhuwa-Meetto",
            mgo: "Meta\u02bc",
            mh: "Marshallese",
            mi: "M\u0101ori",
            mic: "Mi'kmaw",
            min: "Minangkabau",
            mk: "Macedonian",
            ml: "Malayalam",
            mn: "Mongolian",
            mnc: "Manchu",
            mni: "Manipuri",
            mni_Beng: "Manipuri (Bangla)",
            mo: "Romanian",
            moh: "Mohawk",
            mos: "Mossi",
            mr: "Marathi",
            ms: "Malay",
            mt: "Maltese",
            mua: "Mundang",
            mul: "Multiple languages",
            mus: "Muscogee",
            mwl: "Mirandese",
            mwr: "Marwari",
            my: "Burmese",
            mye: "Myene",
            myv: "Erzya",
            mzn: "Mazanderani",
            na: "Nauru",
            nap: "Neapolitan",
            naq: "Nama",
            nb: "Norwegian Bokm\u00e5l",
            nd: "North Ndebele",
            nds: "Low German",
            nds_NL: "Low German (Netherlands)",
            ne: "Nepali",
            "new": "Newari",
            ng: "Ndonga",
            nia: "Nias",
            niu: "Niuean",
            nl: "Dutch",
            nl_BE: "Dutch (Belgium)",
            nmg: "Kwasio",
            nn: "Norwegian Nynorsk",
            nnh: "Ngiemboon",
            no: "Norwegian",
            nog: "Nogai",
            non: "Old Norse",
            nqo: "N\u2019Ko",
            nr: "South Ndebele",
            nso: "Northern Sotho",
            nus: "Nuer",
            nv: "Navajo",
            nwc: "Classical Newari",
            ny: "Nyanja",
            nym: "Nyamwezi",
            nyn: "Nyankole",
            nyo: "Nyoro",
            nzi: "Nzima",
            oc: "Occitan",
            oj: "Ojibwa",
            om: "Oromo",
            or: "Odia",
            os: "Ossetic",
            osa: "Osage",
            ota: "Ottoman Turkish",
            pa: "Punjabi",
            pa_Arab: "Punjabi (Arabic)",
            pa_Guru: "Punjabi (Gurmukhi)",
            pag: "Pangasinan",
            pal: "Pahlavi",
            pam: "Pampanga",
            pap: "Papiamento",
            pau: "Palauan",
            pcm: "Nigerian Pidgin",
            peo: "Old Persian",
            phn: "Phoenician",
            pi: "Pali",
            pl: "Polish",
            pon: "Pohnpeian",
            prg: "Prussian",
            pro: "Old Proven\u00e7al",
            ps: "Pashto",
            pt: "Portuguese",
            pt_BR: "Portuguese (Brazil)",
            pt_PT: "Portuguese (Portugal)",
            qu: "Quechua",
            raj: "Rajasthani",
            rap: "Rapanui",
            rar: "Rarotongan",
            rm: "Romansh",
            rn: "Rundi",
            ro: "Romanian",
            ro_MD: "Romanian (Moldova)",
            rof: "Rombo",
            rom: "Romany",
            ru: "Russian",
            rup: "Aromanian",
            rw: "Kinyarwanda",
            rwk: "Rwa",
            sa: "Sanskrit",
            sad: "Sandawe",
            sah: "Yakut",
            sam: "Samaritan Aramaic",
            saq: "Samburu",
            sas: "Sasak",
            sat: "Santali",
            sat_Olck: "Santali (Ol Chiki)",
            sba: "Ngambay",
            sbp: "Sangu",
            sc: "Sardinian",
            scn: "Sicilian",
            sco: "Scots",
            sd: "Sindhi",
            sd_Arab: "Sindhi (Arabic)",
            sd_Deva: "Sindhi (Devanagari)",
            se: "Northern Sami",
            see: "Seneca",
            seh: "Sena",
            sel: "Selkup",
            ses: "Koyraboro Senni",
            sg: "Sango",
            sga: "Old Irish",
            sh: "Serbo-Croatian",
            shi: "Tachelhit",
            shi_Latn: "Tachelhit (Latin)",
            shi_Tfng: "Tachelhit (Tifinagh)",
            shn: "Shan",
            shu: "Chadian Arabic",
            si: "Sinhala",
            sid: "Sidamo",
            sk: "Slovak",
            sl: "Slovenian",
            sm: "Samoan",
            sma: "Southern Sami",
            smj: "Lule Sami",
            smn: "Inari Sami",
            sms: "Skolt Sami",
            sn: "Shona",
            snk: "Soninke",
            so: "Somali",
            sog: "Sogdien",
            sq: "Albanian",
            sr: "Serbian",
            sr_Cyrl: "Serbian (Cyrillic)",
            sr_Latn: "Serbian (Latin)",
            srn: "Sranan Tongo",
            srr: "Serer",
            ss: "Swati",
            ssy: "Saho",
            st: "Southern Sotho",
            su: "Sundanese",
            su_Latn: "Sundanese (Latin)",
            suk: "Sukuma",
            sus: "Susu",
            sux: "Sumerian",
            sv: "Swedish",
            sw: "Swahili",
            sw_CD: "Swahili (Congo - Kinshasa)",
            swb: "Comorian",
            syc: "Classical Syriac",
            syr: "Syriac",
            szl: "Silesian",
            ta: "Tamil",
            te: "Telugu",
            tem: "Timne",
            teo: "Teso",
            ter: "Tereno",
            tet: "Tetum",
            tg: "Tajik",
            th: "Thai",
            ti: "Tigrinya",
            tig: "Tigre",
            tiv: "Tiv",
            tk: "Turkmen",
            tkl: "Tokelau",
            tl: "Tagalog",
            tlh: "Klingon",
            tli: "Tlingit",
            tmh: "Tamashek",
            tn: "Tswana",
            to: "Tongan",
            tog: "Nyasa Tonga",
            tok: "Toki Pona",
            tpi: "Tok Pisin",
            tr: "Turkish",
            trv: "Taroko",
            ts: "Tsonga",
            tsi: "Tsimshian",
            tt: "Tatar",
            tum: "Tumbuka",
            tvl: "Tuvalu",
            tw: "Twi",
            twq: "Tasawaq",
            ty: "Tahitian",
            tyv: "Tuvinian",
            tzm: "Central Atlas Tamazight",
            udm: "Udmurt",
            ug: "Uyghur",
            uga: "Ugaritic",
            uk: "Ukrainian",
            umb: "Umbundu",
            ur: "Urdu",
            uz: "Uzbek",
            uz_Arab: "Uzbek (Arabic)",
            uz_Cyrl: "Uzbek (Cyrillic)",
            uz_Latn: "Uzbek (Latin)",
            vai: "Vai",
            vai_Latn: "Vai (Latin)",
            vai_Vaii: "Vai (Vai)",
            ve: "Venda",
            vec: "Venetian",
            vi: "Vietnamese",
            vmw: "Makhuwa",
            vo: "Volap\u00fck",
            vot: "Votic",
            vun: "Vunjo",
            wa: "Walloon",
            wae: "Walser",
            wal: "Wolaytta",
            war: "Waray",
            was: "Washo",
            wo: "Wolof",
            xal: "Kalmyk",
            xh: "Xhosa",
            xnr: "Kangri",
            xog: "Soga",
            yao: "Yao",
            yap: "Yapese",
            yav: "Yangben",
            ybb: "Yemba",
            yi: "Yiddish",
            yo: "Yoruba",
            yrl: "Nheengatu",
            yue: "Cantonese",
            yue_Hans: "Cantonese (Simplified)",
            yue_Hant: "Cantonese (Traditional)",
            za: "Zhuang",
            zap: "Zapotec",
            zbl: "Blissymbols",
            zen: "Zenaga",
            zgh: "Standard Moroccan Tamazight",
            zh: "Chinese",
            zh_Hans: "Chinese (Simplified)",
            zh_Hant: "Chinese (Traditional)",
            zh_TW: "Chinese (Taiwan)",
            zu: "Zulu",
            zun: "Zuni",
            zxx: "No linguistic content",
            zza: "Zaza"
        };
    i3.prototype.contains = function(a) {
        a = g.Eb(this.segments, a);
        return a >= 0 || a < 0 && (-a - 1) % 2 === 1
    };
    i3.prototype.length = function() {
        return this.segments.length / 2
    };
    g.z(Qdb, g.O);
    g.k = Qdb.prototype;
    g.k.xa = function() {
        g.O.prototype.xa.call(this);
        this.C && this.C.cancel()
    };
    g.k.fC = function() {
        this.seekTo(this.player.getCurrentTime())
    };
    g.k.seekTo = function(a) {
        a -= this.player.Gc();
        var b = this.j;
        this.j = g.pb(this.qa.Yr(a).ib);
        b !== this.j && this.Y && this.Y()
    };
    g.k.reset = function() {
        this.D = new i3;
        this.K = -1;
        this.C && (this.C.cancel(), this.C = null)
    };
    g.k.T_ = function() {
        this.Ka();
        var a;
        if (a = this.j != null) a = this.j, a = a.j.Nt(a);
        if (a && !this.C && !(this.j && this.j.startTime - this.player.getCurrentTime() > 30)) {
            a = this.j;
            a = a.j.XD(a);
            var b = a.ib[0],
                c;
            if ((c = this.player.getVideoData()) == null ? 0 : c.enableServerStitchedDai)
                if (c = this.player.TA()) {
                    var d = b.j.info.id,
                        e = b.Pa,
                        f = a.ib[0].bf;
                    if (this.policy.La) {
                        if (c = c.UK(f, e, d, 3)) a.D = c
                    } else if (d = c.JA(f, e, d, 3))
                        if (c = c.JF(e), c === 0) d && (a.j = new g.PL(d));
                        else if (c === 2) {
                        this.N.start();
                        Rdb(this) && this.seekTo(this.player.getCurrentTime());
                        return
                    }
                }
            b.j.index.Eo(b.Pa) ? (this.D.contains(a.ib[0].Pa) || Sdb(this, a), this.j = g.pb(a.ib)) : Rdb(this) && this.seekTo(this.player.getCurrentTime())
        }
        this.N.start()
    };
    g.z(j3, g.gU);
    g.k = j3.prototype;
    g.k.ev = function(a, b, c) {
        var d = this;
        this.Dt();
        b = Vdb(this, a.getId());
        b || (b = a.languageCode, b = this.j.isManifestless ? Wdb(this, b, "386") : Wdb(this, b));
        if (b) {
            var e = (b.index.RK(b.index.po()) - b.index.getStartTime(b.index.po())) * 1E3,
                f = new g.nOa(this.W),
                h = function() {
                    d.C && d.C.reset();
                    d.K = !0
                };
            this.W.L("html5_keep_caption_data_after_seek") && (h = null);
            this.C = new Qdb(f, this.J, b, function(l, m) {
                c(l, a, m, e)
            }, this.N || g.iF(b.info), h)
        }
    };
    g.k.wT = function() {
        var a = this.K;
        this.K = !1;
        return a
    };
    g.k.FB = function(a) {
        var b = this.N ? [new g.AP({
            id: "rawcc",
            languageCode: "rawcc",
            languageName: "CC1",
            is_servable: !0,
            is_default: !0,
            is_translateable: !1,
            vss_id: ".en"
        }), new g.AP({
            id: "rawcc",
            languageCode: "rawcc",
            languageName: "CC3",
            is_servable: !0,
            is_default: !0,
            is_translateable: !1,
            vss_id: ".en"
        })] : this.j.isManifestless ? Udb(this, "386") : Udb(this);
        b = g.v(b);
        for (var c = b.next(); !c.done; c = b.next()) g.fU(this.B, c.value);
        a()
    };
    g.k.Dt = function() {
        this.C && (this.C.dispose(), this.C = null)
    };
    g.k.Ix = function() {
        return ""
    };
    var B3 = /^#(?:[0-9a-f]{3}){1,2}$/i;
    var $db = ["left", "right", "center", "justify"];
    g.z(k3, g.U);
    g.k = k3.prototype;
    g.k.p7 = function(a, b) {
        this.fb = a;
        this.rb = b;
        var c = g.Em(this.element, this.element.parentElement);
        this.wb = a - c.x;
        this.Bb = b - c.y
    };
    g.k.o7 = function(a, b) {
        if (a !== this.fb || b !== this.rb) {
            g.sp(this.element, "ytp-dragging") || g.tp(this.element, "ytp-dragging");
            var c = g.Gm(this.element);
            a = a - this.wb - .02 * this.playerWidth;
            var d = b - this.Bb - .02 * this.playerHeight,
                e = (a + c.width / 2) / this.maxWidth * 3;
            e = Math.floor(g.Gd(e, 0, 2));
            var f = (d + c.height / 2) / this.maxHeight * 3;
            f = Math.floor(g.Gd(f, 0, 2));
            b = e + f * 3;
            a = (a + e / 2 * c.width) / this.maxWidth;
            a = g.Gd(a, 0, 1) * 100;
            c = (d + f / 2 * c.height) / this.maxHeight;
            c = g.Gd(c, 0, 1) * 100;
            this.B.params.Im = b;
            this.B.params.xp = c;
            this.B.params.Tk =
                a;
            this.B.params.isDefault = !1;
            this.j.Im = b;
            this.j.xp = c;
            this.j.Tk = a;
            this.j.isDefault = !1;
            this.ra.Im = b;
            this.ra.xp = c;
            this.ra.Tk = a;
            this.ra.isDefault = !1;
            this.E2()
        }
    };
    g.k.n7 = function() {
        g.vp(this.element, "ytp-dragging")
    };
    g.k.E2 = function() {
        this.XC(this.K)
    };
    g.k.getType = function() {
        return this.type
    };
    g.k.XC = function(a) {
        var b = this.Kb ? 0 : Math.min(this.gZ(), this.maxWidth),
            c = this.fZ(),
            d = this.Kb;
        if (d) {
            var e = getComputedStyle(this.D.parentNode);
            e = l3(e.borderLeftWidth) + l3(e.borderRightWidth) + l3(e.paddingLeft) + l3(e.paddingRight)
        } else e = 0;
        var f = e;
        e = "";
        this.B.params.Wi === 3 && (e = "rotate(180deg)");
        var h = d ? "calc(96% - " + f + "px)" : "96%";
        g.pm(this.element, {
            top: 0,
            left: 0,
            right: "",
            bottom: "",
            width: b ? b + "px" : "",
            height: c ? c + "px" : "",
            "max-width": h,
            "max-height": h,
            margin: "",
            transform: ""
        });
        this.VO(a);
        e = {
            transform: e,
            top: "",
            left: "",
            width: b ? b + "px" : "",
            height: c ? c + "px" : "",
            "max-width": "",
            "max-height": ""
        };
        var l = this.j.Tk * .96 + 2;
        h = this.j.Im;
        switch (h) {
            case 0:
            case 3:
            case 6:
                (d = this.j.Se.fontSizeIncrement) && d > 0 && this.j.Wi !== 2 && this.j.Wi !== 3 && (l = Math.max(l / (1 + d * 2), 2));
                e.left = l + "%";
                break;
            case 1:
            case 4:
            case 7:
                e.left = l + "%";
                l = this.D.offsetWidth;
                b || l ? (b = b || l + 1, e.width = b + "px", e["margin-left"] = d ? b / -2 - f / 2 + "px" : b / -2 + "px") : e.transform += " translateX(-50%)";
                break;
            case 2:
            case 5:
            case 8:
                e.right = 100 - l + "%"
        }
        d = this.j.xp * .96 + 2;
        switch (h) {
            case 0:
            case 1:
            case 2:
                e.top =
                    d + "%";
                break;
            case 3:
            case 4:
            case 5:
                e.top = d + "%";
                (c = c || this.element.clientHeight) ? (e.height = c + "px", e["margin-top"] = c / -2 + "px") : e.transform += " translateY(-50%)";
                break;
            case 6:
            case 7:
            case 8:
                e.bottom = 100 - d + "%"
        }
        g.pm(this.element, e);
        if (this.G) {
            c = this.D.offsetHeight;
            d = 1;
            for (b = 0; b < a.length; b++) e = a[b], typeof e.text === "string" && (d += e.text.split("\n").length - 1, e.append || b === 0 || d++);
            c /= d;
            this.G.style.height = c + "px";
            this.G.style.width = c + "px";
            this.element.style.paddingLeft = c + 5 + "px";
            this.element.style.paddingRight = c +
                5 + "px";
            a = Number(this.element.style.marginLeft.replace("px", "")) - c - 5;
            c = Number(this.element.style.marginRight.replace("px", "")) - c - 5;
            this.element.style.marginLeft = a + "px";
            this.element.style.marginRight = c + "px"
        }
    };
    g.k.VO = function(a) {
        var b;
        for (b = 0; b < a.length && a[b] === this.K[b]; b++);
        if (this.Ia || this.K.length > b) b = 0, this.Ia = !1, this.K = [], this.N = this.Na = this.La = null, g.pe(this.D);
        for (; b < a.length; b++) eeb(this, a[b])
    };
    g.k.gZ = function() {
        return 0
    };
    g.k.fZ = function() {
        return 0
    };
    g.k.toString = function() {
        return g.U.prototype.toString.call(this)
    };
    geb.prototype.clear = function() {
        this.C = this.time = this.mode = 0;
        this.j = [];
        this.reset()
    };
    geb.prototype.reset = function() {
        this.mode = 0;
        this.D.reset(0);
        this.G.reset(1)
    };
    var heb = [128, 1, 2, 131, 4, 133, 134, 7, 8, 137, 138, 11, 140, 13, 14, 143, 16, 145, 146, 19, 148, 21, 22, 151, 152, 25, 26, 155, 28, 157, 158, 31, 32, 161, 162, 35, 164, 37, 38, 167, 168, 41, 42, 171, 44, 173, 174, 47, 176, 49, 50, 179, 52, 181, 182, 55, 56, 185, 186, 59, 188, 61, 62, 191, 64, 193, 194, 67, 196, 69, 70, 199, 200, 73, 74, 203, 76, 205, 206, 79, 208, 81, 82, 211, 84, 213, 214, 87, 88, 217, 218, 91, 220, 93, 94, 223, 224, 97, 98, 227, 100, 229, 230, 103, 104, 233, 234, 107, 236, 109, 110, 239, 112, 241, 242, 115, 244, 117, 118, 247, 248, 121, 122, 251, 124, 253, 254, 127, 0, 129, 130, 3, 132, 5, 6, 135, 136, 9, 10, 139,
        12, 141, 142, 15, 144, 17, 18, 147, 20, 149, 150, 23, 24, 153, 154, 27, 156, 29, 30, 159, 160, 33, 34, 163, 36, 165, 166, 39, 40, 169, 170, 43, 172, 45, 46, 175, 48, 177, 178, 51, 180, 53, 54, 183, 184, 57, 58, 187, 60, 189, 190, 63, 192, 65, 66, 195, 68, 197, 198, 71, 72, 201, 202, 75, 204, 77, 78, 207, 80, 209, 210, 83, 212, 85, 86, 215, 216, 89, 90, 219, 92, 221, 222, 95, 96, 225, 226, 99, 228, 101, 102, 231, 232, 105, 106, 235, 108, 237, 238, 111, 240, 113, 114, 243, 116, 245, 246, 119, 120, 249, 250, 123, 252, 125, 126, 255
    ];
    m3.prototype.set = function(a) {
        this.type = a
    };
    m3.prototype.get = function() {
        return this.type
    };
    n3.prototype.clear = function() {
        this.state = 0
    };
    n3.prototype.update = function() {
        this.state = this.state === 2 ? 1 : 0
    };
    n3.prototype.me = function() {
        return this.state !== 0
    };
    n3.prototype.matches = function(a, b) {
        return this.me() && a === this.ex && b === this.Ut
    };
    meb.prototype.reset = function() {
        this.timestamp = this.j = 0
    };
    o3.prototype.updateTime = function(a) {
        for (var b = 1; b <= 15; ++b)
            for (var c = 1; c <= 32; ++c) this.B[b][c].timestamp = a
    };
    o3.prototype.debugString = function() {
        for (var a = "\n", b = 1; b <= 15; ++b) {
            for (var c = 1; c <= 32; ++c) {
                var d = this.B[b][c];
                a = d.j === 0 ? a + "_" : a + String.fromCharCode(d.j)
            }
            a += "\n"
        }
        return a
    };
    o3.prototype.reset = function(a) {
        for (var b = 0; b <= 15; b++)
            for (var c = 0; c <= 32; c++) this.B[b][c].reset();
        this.C = a;
        this.j = 0;
        this.col = this.row = 1
    };
    var neb = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 225, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 233, 93, 237, 243, 250, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 231, 247, 209, 241, 9632],
        oeb = [174, 176, 189, 191, 8482, 162, 163, 9834, 224, 32, 232, 226, 234, 238, 244, 251],
        Geb = [193, 201, 211, 218, 220, 252, 8216, 161, 42, 39, 9473, 169, 8480, 183, 8220, 8221, 192, 194, 199, 200, 202, 203, 235,
            206, 207, 239, 212, 217, 249, 219, 171, 187
        ],
        Heb = [195, 227, 205, 204, 236, 210, 242, 213, 245, 123, 125, 92, 94, 95, 124, 126, 196, 228, 214, 246, 223, 165, 164, 9475, 197, 229, 216, 248, 9487, 9491, 9495, 9499];
    Leb.prototype.reset = function(a, b) {
        this.G = b;
        this.style.set(2);
        this.B = this.K;
        this.D = this.N;
        this.j = this.B;
        var c = (a << 2) + (b << 1);
        this.K.reset(c);
        this.N.reset(c);
        this.text.reset((a << 2) + (b << 1) + 1)
    };
    feb.prototype.reset = function(a) {
        this.G = a;
        this.B.clear();
        this.D = this.C;
        this.C.reset(a, 0);
        this.K.reset(a, 1)
    };
    Peb.prototype.D = function() {};
    g.z(t3, g.xD);
    t3.prototype.toString = function() {
        return g.xD.prototype.toString.call(this)
    };
    g.z(u3, g.O);
    u3.prototype.Yo = function() {
        return []
    };
    u3.prototype.reset = function() {};
    g.z(v3, g.xD);
    v3.prototype.toString = function() {
        return g.xD.prototype.toString.call(this)
    };
    var w3 = 0;
    g.z(x3, u3);
    x3.prototype.reset = function() {
        this.K = {};
        this.B = this.j = null;
        this.G = !0
    };
    x3.prototype.Yo = function(a, b) {
        a = a.firstChild;
        a.getAttribute("format");
        b = b || 0;
        Number.isFinite(b);
        a = Array.from(a.childNodes);
        a = g.v(a);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value, c.nodeType === 1) switch (c.tagName) {
                case "head":
                    var d = c;
                    break;
                case "body":
                    var e = c
            }
        if (d)
            for (d = Array.from(d.childNodes), d = g.v(d), a = d.next(); !a.done; a = d.next())
                if (a = a.value, a.nodeType === 1) switch (a.tagName) {
                    case "pen":
                        c = a.getAttribute("id");
                        var f = this.pens,
                            h = {},
                            l = a.getAttribute("p");
                        l && Object.assign(h, this.pens[l]);
                        l = z3(a, "b");
                        l != null && (h.bold = l);
                        l = z3(a, "i");
                        l != null && (h.italic = l);
                        l = z3(a, "u");
                        l != null && (h.underline = l);
                        l = A3(a, "et");
                        l != null && (h.charEdgeStyle = l);
                        l = A3(a, "of");
                        l != null && (h.offset = l);
                        l = C3(a, "bc");
                        l != null && (h.background = l);
                        l = C3(a, "ec");
                        l != null && (h.pP = l);
                        l = C3(a, "fc");
                        l != null && (h.color = l);
                        l = A3(a, "fs");
                        l != null && l !== 0 && (h.fontFamily = l);
                        l = y3(a, "sz");
                        l !== void 0 && (h.fontSizeIncrement = l / 100 - 1);
                        l = y3(a, "bo");
                        l !== void 0 && (h.backgroundOpacity = l / 255);
                        l = y3(a, "fo");
                        l !== void 0 && (h.textOpacity = l / 255);
                        l = A3(a, "rb");
                        l != null && l !== 10 &&
                            l !== 0 && (h.jg = l > 10 ? l - 1 : l);
                        a = A3(a, "hg");
                        a != null && (h.a_ = a);
                        f[c] = h;
                        break;
                    case "ws":
                        c = a.getAttribute("id");
                        this.Z[c] = Teb(this, a);
                        break;
                    case "wp":
                        c = a.getAttribute("id"), this.N[c] = Ueb(this, a)
                }
        if (e) {
            d = [];
            e = Array.from(e.childNodes);
            e = g.v(e);
            for (a = e.next(); !a.done; a = e.next())
                if (a = a.value, a.nodeType === 1) switch (a.tagName) {
                    case "w":
                        this.j = Veb(this, a, b, !1);
                        (a = this.K[this.j.id]) && a.end > this.j.start && (a.end = this.j.start);
                        this.K[this.j.id] = this.j;
                        d.push(this.j);
                        break;
                    case "p":
                        var m = a;
                        l = b;
                        c = [];
                        f = m.getAttribute("w") ||
                            this.D;
                        h = !!z3(m, "a");
                        l = (y3(m, "t") || 0) + l;
                        var n = y3(m, "d") || 5E3;
                        h || (!this.G && this.B && this.B.windowId === f && this.B.end > l && (this.B.end = l), this.B && this.B.text === "\n" && (this.B.text = ""));
                        var p = h ? 6 : 5,
                            q = m.getAttribute("p");
                        q = q ? this.pens[q] : null;
                        var r = Array.from(m.childNodes);
                        r.length && (this.G = m.getAttribute("d") != null);
                        for (m = 0; m < r.length; m++) {
                            var t = r[m],
                                u = void 0;
                            m > 0 && (h = !0);
                            var y = void 0;
                            t.nodeType === 1 && (y = t);
                            if (y && y.tagName === "s") {
                                if ((t = (t = y.getAttribute("p")) ? this.pens[t] : null) && t.jg && (t.jg === 1 ? (t = r.slice(m,
                                        m + 4), t.length === 4 && (u = Reb(l, n, f, h, p, t, this.pens), m += 3)) : u = Reb(l, n, f, h, p, [y], this.pens)), !u) {
                                    var A = y;
                                    u = l;
                                    y = n;
                                    t = f;
                                    var C = h,
                                        E = p,
                                        H = A.textContent ? A.textContent : "",
                                        M = A.getAttribute("p");
                                    M = M ? this.pens[M] : null;
                                    A = y3(A, "t") || 0;
                                    u = new t3(u + A, y - A, E, t, H, C, M)
                                }
                            } else u = new t3(l, n, p, f, t.textContent || "", h, q);
                            c.push(u);
                            this.B = u
                        }
                        if (c.length > 0)
                            for (c[0].windowId === this.D && (this.j = Veb(this, a, b, !0), d.push(this.j)), a = g.v(c), c = a.next(); !c.done; c = a.next()) c = c.value, c.windowId = this.j.id, this.j.j.push(c), d.push(c)
                }
            b = d
        } else b = [];
        return b
    };
    var Afb = new Map([
        [9, 1],
        [10, 1],
        [11, 2],
        [12, 3],
        [13, 4],
        [14, 5]
    ]);
    g.z(D3, u3);
    D3.prototype.reset = function() {
        this.B.clear()
    };
    D3.prototype.Yo = function(a, b) {
        var c = JSON.parse(a);
        if (!c) return [];
        if (c.pens) {
            a = 0;
            for (var d = g.v(c.pens), e = d.next(); !e.done; e = d.next()) {
                e = e.value;
                var f = {},
                    h = e.pParentId;
                h && Object.assign(f, this.j.get(h));
                e.bAttr && (f.bold = !0);
                e.iAttr && (f.italic = !0);
                e.uAttr && (f.underline = !0);
                h = e.ofOffset;
                h != null && (f.offset = h);
                e.szPenSize !== void 0 && (f.fontSizeIncrement = e.szPenSize / 100 - 1);
                h = e.etEdgeType;
                h != null && (f.charEdgeStyle = h);
                e.ecEdgeColor !== void 0 && (f.pP = E3(e.ecEdgeColor));
                h = e.fsFontStyle;
                h != null && h !== 0 && (f.fontFamily =
                    h);
                e.fcForeColor !== void 0 && (f.color = E3(e.fcForeColor));
                e.foForeAlpha !== void 0 && (f.textOpacity = e.foForeAlpha / 255);
                e.bcBackColor !== void 0 && (f.background = E3(e.bcBackColor));
                e.boBackAlpha !== void 0 && (f.backgroundOpacity = e.boBackAlpha / 255);
                (h = e.rbRuby) && h !== 10 && (f.jg = h > 10 ? h - 1 : h, f.vp = Afb.get(f.jg));
                e.hgHorizGroup && (f.a_ = e.hgHorizGroup);
                this.j.set(a++, f)
            }
        }
        if (c.wsWinStyles)
            for (a = 0, d = g.v(c.wsWinStyles), e = d.next(); !e.done; e = d.next()) e = e.value, f = {}, (h = e.wsParentId) ? Object.assign(f, this.D.get(h)) : Object.assign(f,
                this.G), e.mhModeHint !== void 0 && (f.TB = e.mhModeHint), e.juJustifCode !== void 0 && (f.textAlign = e.juJustifCode), e.pdPrintDir !== void 0 && (f.Wi = e.pdPrintDir), e.sdScrollDir !== void 0 && (f.OU = e.sdScrollDir), e.wfcWinFillColor !== void 0 && (f.windowColor = E3(e.wfcWinFillColor)), e.wfoWinFillAlpha !== void 0 && (f.windowOpacity = e.wfoWinFillAlpha / 255), this.D.set(a++, f);
        if (c.wpWinPositions)
            for (a = 0, d = g.v(c.wpWinPositions), e = d.next(); !e.done; e = d.next()) e = e.value, f = {}, (h = e.wpParentId) && Object.assign(f, this.C.get(h)), e.ahHorPos !==
                void 0 && (f.Tk = e.ahHorPos), e.apPoint !== void 0 && (f.Im = e.apPoint), e.avVerPos !== void 0 && (f.xp = e.avVerPos), e.ccCols !== void 0 && (f.Yt = e.ccCols), e.rcRows !== void 0 && (f.Vs = e.rcRows), this.C.set(a++, f);
        if (c.events) {
            a = [];
            c = g.v(c.events);
            for (d = c.next(); !d.done; d = c.next()) {
                var l = d.value;
                e = (l.tStartMs || 0) + b;
                f = l.dDurationMs || 0;
                if (l.id) h = String(l.id), d = Web(this, l, e, f, h), a.push(d), this.B.set(h, d);
                else {
                    l.wWinId ? h = l.wWinId.toString() : (h = "_" + w3++, d = Web(this, l, e, f, h), a.push(d), this.B.set(h, d));
                    d = a;
                    var m = l;
                    f === 0 && (f = 5E3);
                    l = this.B.get(h);
                    var n = !!m.aAppend,
                        p = n ? 6 : 5,
                        q = m.segs,
                        r = null;
                    m.pPenId && (r = this.j.get(m.pPenId));
                    for (m = 0; m < q.length; m++) {
                        var t = q[m],
                            u = t.utf8;
                        if (u) {
                            var y = t.tOffsetMs || 0,
                                A = null;
                            t.pPenId && (A = this.j.get(t.pPenId));
                            if ((l.params.TB != null ? l.params.TB : l.j.length > 1 ? 1 : 0) === 2 && n && u === "\n") continue;
                            t = null;
                            var C = [],
                                E;
                            if (E = A && A.jg === 1) {
                                E = q;
                                var H = m;
                                if (H + 3 >= E.length || !E[H + 1].pPenId || !E[H + 2].pPenId || !E[H + 3].pPenId) E = !1;
                                else {
                                    var M = E[H + 1].pPenId;
                                    (M = this.j.get(M)) && M.jg && M.jg === 2 ? (M = E[H + 2].pPenId, M = this.j.get(M), !M || !M.jg ||
                                        M.jg < 3 ? E = !1 : (M = E[H + 3].pPenId, E = (M = this.j.get(M)) && M.jg && M.jg === 2 ? !0 : !1)) : E = !1
                                }
                            }
                            if (E) y = q[m + 1].utf8, t = q[m + 3].utf8, E = q[m + 2].utf8, H = this.j.get(q[m + 2].pPenId), u = Qeb(u, y, E, t, H), t = new t3(e, f, p, h, u, n, A), m += 3;
                            else {
                                if (u.indexOf("<") > -1) {
                                    var N = void 0;
                                    C = A;
                                    E = r;
                                    H = e;
                                    M = f;
                                    var Q = y,
                                        ca = p,
                                        ha = n,
                                        oa = [],
                                        Y = g.Z0("<html>" + u + "</html>");
                                    if (!Y.getElementsByTagName("parsererror").length && ((N = Y.firstChild) == null ? 0 : N.childNodes.length))
                                        for (N = g.v(Y.firstChild.childNodes), Y = N.next(); !Y.done; Y = N.next()) {
                                            Y = Y.value;
                                            var S = void 0,
                                                W = void 0,
                                                w = (W = (S = Y.textContent) == null ? void 0 : S.replace(/\n/g, "")) != null ? W : "";
                                            if (Y.nodeType !== 3 || w && w.match(/^ *$/) == null) {
                                                S = {};
                                                Object.assign(S, C || E);
                                                W = void 0;
                                                switch ((W = Y) == null ? void 0 : W.tagName) {
                                                    case "b":
                                                        S.bold = !0;
                                                        break;
                                                    case "i":
                                                        S.italic = !0;
                                                        break;
                                                    case "u":
                                                        S.underline = !0
                                                }
                                                oa.push(new t3(H + Q, M - Q, ca, l.id, w, ha, S))
                                            }
                                        }
                                    C = oa
                                }
                                C.length || (C = [new t3(e + y, f - y, p, l.id, u, n, A || r)])
                            }
                            if (C.length)
                                for (n = g.v(C), A = n.next(); !A.done; A = n.next()) A = A.value, d.push(A), l.j.push(A);
                            else t && (d.push(t), l.j.push(t))
                        }
                        n = !0
                    }
                }
            }
            b = a
        } else b = [];
        return b
    };
    g.z(F3, g.gU);
    F3.prototype.ev = function(a, b, c) {
        Kdb(this.videoData.videoId, a.vssId, c)
    };
    F3.prototype.FB = function(a) {
        if (this.audioTrack)
            for (var b = g.v(this.audioTrack.captionTracks), c = b.next(); !c.done; c = b.next()) g.fU(this.B, c.value);
        a()
    };
    g.z(G3, k3);
    G3.prototype.VO = function(a) {
        var b = this.B.j;
        k3.prototype.VO.call(this, a);
        for (a = a.length; a < b.length; a++) {
            var c = b[a];
            if (f && c.j === e) var d = f;
            else {
                d = {};
                Object.assign(d, c.j);
                Object.assign(d, Bfb);
                var e = c.j;
                var f = d
            }
            eeb(this, c, d)
        }
    };
    var Bfb = {
        E$: !0
    };
    g.z(H3, Peb);
    H3.prototype.D = function(a, b, c, d, e) {
        if (c < d) {
            var f = "_" + w3++;
            c = c / 1E3 - this.K;
            d = d / 1E3 - this.K;
            a = new v3(c, d - c, 5, f, {
                textAlign: 0,
                Im: 0,
                Tk: b * 2.5,
                xp: a * 5.33
            });
            e = new t3(c, d - c, 5, f, e);
            this.B.push(a);
            this.B.push(e)
        }
    };
    g.z(K3, u3);
    K3.prototype.Yo = function(a) {
        a = new H3(a, a.byteLength, this.B);
        if (Xeb(a)) {
            for (; a.byteOffset < a.j.byteLength;)
                for (a.version === 0 ? a.C = J3(a) * (1E3 / 45) : a.version === 1 && (a.C = J3(a) * 4294967296 + J3(a)), a.G = I3(a); a.G > 0; a.G--) {
                    var b = I3(a),
                        c = I3(a),
                        d = I3(a);
                    b & 4 && (b & 3) === this.track && (this.track === 0 || this.track === 1) && (b = this.j, b.j.push({
                        time: a.C,
                        type: this.track,
                        XX: c,
                        YX: d,
                        order: b.j.length
                    }))
                }
            leb(this.j, a);
            return a.B
        }
        return []
    };
    K3.prototype.reset = function() {
        this.j.clear()
    };
    g.z(L3, k3);
    g.k = L3.prototype;
    g.k.E2 = function() {
        g.np(this.Wa)
    };
    g.k.Gca = function() {
        g.vp(this.element, "ytp-rollup-mode");
        this.XC(this.vc, !0)
    };
    g.k.fZ = function() {
        return this.C ? this.qa : this.Y
    };
    g.k.gZ = function() {
        return this.C ? this.Y : this.qa
    };
    g.k.XC = function(a, b) {
        this.vc = a;
        if (this.B.params.Vs) {
            for (var c = 0, d = 0; d < this.K.length && c < a.length; d++) this.K[d] === a[c] && c++;
            c > 0 && c < a.length && (a = this.K.concat(a.slice(c)));
            this.Sb = this.qa;
            this.Y = this.qa = 0;
            k3.prototype.XC.call(this, a);
            afb(this, b)
        }
        k3.prototype.XC.call(this, a)
    };
    g.z(M3, u3);
    M3.prototype.Yo = function(a, b) {
        var c = [];
        a = a.split(Cfb);
        for (var d = 1; d < a.length; d++) {
            var e = a[d],
                f = b;
            if (e !== "" && !Dfb.test(e)) {
                var h = Efb.exec(e);
                if (h && h.length >= 4) {
                    var l = cfb(h[1]),
                        m = cfb(h[2]) - l;
                    l += f;
                    var n = (h = h[3]) ? h.split(" ") : [];
                    h = {};
                    var p = null;
                    var q = "";
                    var r = null,
                        t = "";
                    n = g.v(n);
                    for (var u = n.next(); !u.done; u = n.next())
                        if (u = u.value.split(":"), u.length === 2) {
                            var y = u[1];
                            switch (u[0]) {
                                case "line":
                                    u = y.split(",");
                                    u[0].endsWith("%") && (p = u[0], h.xp = Number.parseInt(p, 10), u.length === 2 && (q = u[1].trim()));
                                    break;
                                case "position":
                                    u =
                                        y.split(",");
                                    r = u[0];
                                    h.Tk = Number.parseInt(r, 10);
                                    u.length === 2 && (t = u[1].trim());
                                    break;
                                case "align":
                                    switch (y) {
                                        case "start":
                                            h.textAlign = 0;
                                            break;
                                        case "middle":
                                            h.textAlign = 2;
                                            break;
                                        case "end":
                                            h.textAlign = 1
                                    }
                            }
                        }
                    p || q || (q = "end");
                    if (!r) switch (h.textAlign) {
                        case 0:
                            h.Tk = 0;
                            break;
                        case 1:
                            h.Tk = 100;
                            break;
                        case 2:
                            h.Tk = 50
                    }
                    if (h.textAlign != null) {
                        p = 0;
                        switch (q) {
                            case "center":
                                p += 3;
                                break;
                            case "end":
                                p += 6;
                                break;
                            default:
                                p += 0
                        }
                        switch (t) {
                            case "line-left":
                                p += 0;
                                break;
                            case "center":
                                p += 1;
                                break;
                            case "line-right":
                                p += 2;
                                break;
                            default:
                                switch (h.textAlign) {
                                    case 0:
                                        p +=
                                            0;
                                        break;
                                    case 2:
                                        p += 1;
                                        break;
                                    case 1:
                                        p += 2
                                }
                        }
                        q = p < 0 || p > 8 ? 7 : p;
                        h.Im = q
                    }
                    e = e.substring(Efb.lastIndex).replace(/[\x01-\x09\x0b-\x1f]/g, "");
                    t = h;
                    h = e;
                    e = {};
                    if (h.indexOf("<") < 0 && h.indexOf("&") < 0) f = dfb(l, m, 5, t), m = new t3(l, m, 5, f.id, h, !1, g.Fc(e) ? void 0 : e), c.push(f), c.push(m), f.j.push(m);
                    else
                        for (q = h.split(Ffb), q.length === 1 ? (h = 5, t = dfb(l, m, h, t)) : (p = h = 6, t = Object.assign({
                                Yt: 32
                            }, t), t = new v3(l, m, p, "_" + w3++, t)), c.push(t), p = l, r = 0; r < q.length; r++) n = q[r], r % 2 === 0 ? (u = g.Z0("<html>" + n + "</html>"), u.getElementsByTagName("parsererror").length ?
                            (y = u.createElement("span"), y.appendChild(u.createTextNode(n))) : y = u.firstChild, bfb(this, p, m - (p - l), h, t, r > 0, y, e, c)) : p = cfb(n) + f
                }
                Efb.lastIndex = 0
            }
        }
        return c
    };
    var Dfb = /^NOTE/,
        Cfb = /(?:\r\n|\r|\n){2,}/,
        Efb = RegExp("^((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})[\\t ]+--\x3e[\\t ]+((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})(?:[\\t ]*)(.*)(?:\\r\\n|\\r|\\n)", "gm"),
        Ffb = RegExp("<((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})>");
    g.AW.oL(M3, {
        Yo: "wvppt"
    });
    g.z(N3, g.O);
    N3.prototype.Yo = function(a, b, c, d) {
        c = c || 0;
        d = d || 0;
        if (this.B && a) {
            a: {
                var e = d,
                    f = gfb(this, a, c),
                    h = [];
                try {
                    for (var l = g.v(f), m = l.next(); !m.done; m = l.next()) {
                        var n = m.value,
                            p = n.trackData,
                            q = n.IU;
                        h = typeof p !== "string" ? h.concat(hfb(this, b, p, q, e)) : p.substring(0, 6) === "WEBVTT" ? h.concat(ifb(this, p, q)) : h.concat(kfb(this, b, p, q))
                    }
                    var r = h;
                    break a
                } catch (t) {
                    g.lx(t);
                    this.clear();
                    r = [];
                    break a
                }
                r = void 0
            }
            if (r.length !== 0) return r
        }
        a = efb(a);
        if (!a) return [];
        try {
            return typeof a !== "string" ? hfb(this, b, a, c, d) : a.substring(0, 6) === "WEBVTT" ?
                ifb(this, a, c) : kfb(this, b, a, c)
        } catch (t) {
            return g.lx(t), this.clear(), []
        }
    };
    N3.prototype.clear = function() {
        this.j && this.j.dispose();
        this.j = null
    };
    N3.prototype.reset = function() {
        this.j && this.j.reset()
    };
    N3.prototype.xa = function() {
        g.O.prototype.xa.call(this);
        this.clear()
    };
    var W3 = {
        windowColor: "#080808",
        windowOpacity: 0,
        textAlign: 2,
        Im: 7,
        Tk: 50,
        xp: 100,
        isDefault: !0,
        Se: {
            background: "#080808",
            backgroundOpacity: .75,
            charEdgeStyle: 0,
            color: "#fff",
            fontFamily: 4,
            fontSizeIncrement: 0,
            textOpacity: 1,
            offset: 1
        }
    };
    g.z(O3, g.dU);
    g.k = O3.prototype;
    g.k.xa = function() {
        if (this.D || this.Fa) {
            var a = this.J.Me();
            a && !a.Ka() && a.jA()
        } else zfb(this, !1);
        g.dU.prototype.xa.call(this)
    };
    g.k.wU = function() {
        return this.W.L("html5_honor_caption_availabilities_in_audio_track") && !this.Xa
    };
    g.k.Pv = function() {
        if (this.Wa) return this.D || this.Fa;
        var a = this.getAudioTrack();
        if (this.wU()) {
            if (!a.captionTracks.length) return !1;
            if (!this.j) return !0
        }
        a = Hdb(a, g.jP(this.W));
        return a === "CAPTIONS_INITIAL_STATE_ON_REQUIRED" ? !0 : a === "CAPTIONS_INITIAL_STATE_OFF_REQUIRED" ? P3(this) : ofb(this) || P3(this) ? !0 : pfb(this)
    };
    g.k.load = function() {
        var a = this;
        g.dU.prototype.load.call(this);
        this.N = this.getAudioTrack();
        this.j ? this.B && (this.bb.clear(), this.D ? tfb(this, !0) : this.player.getPresentingPlayerType() !== 3 && this.j.ev(this.B, "json3", function(b, c, d, e) {
            if (b) {
                var f;
                ufb(a, (f = a.B) != null ? f : void 0);
                a.j.wT() && (a.Ia = [], a.J.wf("captions"), h3(a.La), a.bb.reset());
                if (a.videoData.wb) {
                    var h;
                    d = ((h = d) != null ? h : 0) + a.videoData.wb
                }
                b = a.bb.Yo(b, c, d, e);
                if (a.fb)
                    for (c = g.v(b), e = c.next(); !e.done; e = c.next()) e = e.value, e.B = a.videoData.clientPlaybackNonce,
                        e.uh = a.videoData.wb;
                c = !a.W.L("html5_keep_caption_data_after_seek") && a.Xa;
                a.player.rf(b, void 0, c);
                !a.Z || a.Fa || S3(a) || !a.W.Cm || g.VC(a.W) || g.XO(a.W) || g.oz(a.W) || a.W.La === "shortspage" || a.player.isInline() || (g.op(a.Na), b = Seb({
                    Im: 0,
                    Tk: 5,
                    xp: 5,
                    Vs: 2,
                    textAlign: 0,
                    Wi: 0,
                    lang: "en-GB"
                }), a.Ra = [b], c = ["Click ", " for settings"], a.rb || (e = new g.Qx(g.jy()), g.P(a, e), a.rb = e.element), e = b.end - b.start, (f = g.BP(a.B)) && a.Ra.push(new t3(b.start, e, 0, b.id, f)), a.Ra.push(new t3(b.start, e, 0, b.id, c[0]), new t3(b.start, e, 0, b.id, a.rb, !0),
                    new t3(b.start, e, 0, b.id, c[1], !0)), a.player.rf(a.Ra), g.mp(a.Na));
                !a.Z || a.Fa || S3(a) || (g.jP(a.W) ? U3(a, !0) : V3(a, !0), a.N && (a.N.D = a.B), a.player.Dp());
                a.Z = !1
            }
        }), this.D || this.Fa || S3(this) || this.player.Bc("captionschanged", g.CP(this.B))) : (this.j = qfb(this), g.P(this, this.j), this.j.FB(function() {
            sfb(a)
        }))
    };
    g.k.unload = function() {
        this.D && this.B ? tfb(this, !1) : (this.Na && g.op(this.Na), this.player.wf("captions"), this.Ia = [], this.j && this.j.Dt(), this.bb.clear(), this.Y && this.player.rf(this.Y), this.cV());
        g.dU.prototype.unload.call(this);
        this.player.Dp();
        this.player.Bc("captionschanged", {})
    };
    g.k.create = function() {
        this.Pv() && this.load();
        var a;
        a: {
            var b, c, d;
            if (this.W.L("web_player_nitrate_promo_tooltip") && ((b = this.videoData.getPlayerResponse()) == null ? 0 : (c = b.captions) == null ? 0 : (d = c.playerCaptionsTracklistRenderer) == null ? 0 : d.enableTouchCaptionsNitrate)) {
                var e, f;
                if (b = (a = this.videoData.getPlayerResponse()) == null ? void 0 : (e = a.captions) == null ? void 0 : (f = e.playerCaptionsTracklistRenderer) == null ? void 0 : f.captionTracks)
                    for (a = g.v(b), e = a.next(); !e.done; e = a.next())
                        if (e = e.value, e.kind === "asr" && e.languageCode ===
                            "en") {
                            a = !0;
                            break a
                        }
            }
            a = !1
        }
        a && this.J.publish("showpromotooltip", this.K.element)
    };
    g.k.oda = function() {
        for (var a = this.J.Me().Lb().textTracks, b = null, c = 0; c < a.length; c++)
            if (a[c].mode === "showing") a: {
                b = g.eU(this.j.B, !0);
                for (var d = 0; d < b.length; d++)
                    if (b[d].toString() === a[c].id) {
                        b = b[d];
                        break a
                    }
                b = null
            }(this.loaded ? this.B : null) !== b && T3(this, b, !0)
    };
    g.k.Lfa = function() {
        !this.B && this.D || this.unload()
    };
    g.k.onCueRangeEnter = function(a) {
        this.Ia.push(a);
        h3(this.La)
    };
    g.k.onCueRangeExit = function(a) {
        g.vb(this.Ia, a);
        this.j instanceof j3 && this.j.N && this.player.pp([a]);
        h3(this.La)
    };
    g.k.getCaptionWindowContainerId = function() {
        return this.K.element.id
    };
    g.k.hea = function() {
        yfb(this, this.Ra);
        this.Ra = null
    };
    g.k.aV = function() {
        var a = this;
        if (!this.Bb || !this.D) {
            this.La.stop();
            g.eba(this.Va);
            this.Ia.sort(g.yD);
            var b = this.Ia;
            if (this.Y) {
                var c = g.qn(b, function(f) {
                    return this.Y.indexOf(f) === -1
                }, this);
                c.length && (b = c)
            }
            b = g.v(b);
            for (c = b.next(); !c.done; c = b.next()) wfb(this, c.value);
            b = g.v(Object.entries(this.Ca));
            var d = b.next();
            for (c = {}; !d.done; c = {
                    hB: void 0,
                    Up: void 0
                }, d = b.next()) {
                var e = g.v(d.value);
                d = e.next().value;
                e = e.next().value;
                c.hB = d;
                c.Up = e;
                this.Va[c.hB] ? (c.Up.element.parentNode || (c.Up instanceof L3 || c.Up instanceof G3 || g.xc(this.Ca, function(f) {
                    return function(h, l) {
                        l !== f.hB && h.B.params.Im === f.Up.B.params.Im && h.B.params.Tk === f.Up.B.params.Tk && h.B.params.xp === f.Up.B.params.xp && (h.dispose(), delete a.Ca[l]);
                        return l === f.hB
                    }
                }(c), this), this.K.element.appendChild(c.Up.element)), c.Up.XC(this.Va[c.hB])) : (c.Up.dispose(), delete this.Ca[c.hB])
            }
        }
    };
    g.k.oea = function() {
        mfb(this, {}, !0);
        this.player.Bc("captionssettingschanged")
    };
    g.k.Q9 = function() {
        var a = W3.Se;
        a = {
            background: a.background,
            backgroundOpacity: a.backgroundOpacity,
            charEdgeStyle: a.charEdgeStyle,
            color: a.color,
            fontFamily: a.fontFamily,
            fontSizeIncrement: a.fontSizeIncrement,
            fontStyle: a.bold && a.italic ? 3 : a.bold ? 1 : a.italic ? 2 : 0,
            textOpacity: a.textOpacity,
            windowColor: W3.windowColor,
            windowOpacity: W3.windowOpacity
        };
        var b = Odb() || {};
        b.background != null && (a.background = b.background);
        b.backgroundOverride != null && (a.backgroundOverride = b.backgroundOverride);
        b.backgroundOpacity != null && (a.backgroundOpacity =
            b.backgroundOpacity);
        b.backgroundOpacityOverride != null && (a.backgroundOpacityOverride = b.backgroundOpacityOverride);
        b.charEdgeStyle != null && (a.charEdgeStyle = b.charEdgeStyle);
        b.charEdgeStyleOverride != null && (a.charEdgeStyleOverride = b.charEdgeStyleOverride);
        b.color != null && (a.color = b.color);
        b.colorOverride != null && (a.colorOverride = b.colorOverride);
        b.fontFamily != null && (a.fontFamily = b.fontFamily);
        b.fontFamilyOverride != null && (a.fontFamilyOverride = b.fontFamilyOverride);
        b.fontSizeIncrement != null && (a.fontSizeIncrement =
            b.fontSizeIncrement);
        b.fontSizeIncrementOverride != null && (a.fontSizeIncrementOverride = b.fontSizeIncrementOverride);
        b.fontStyle != null && (a.fontStyle = b.fontStyle);
        b.fontStyleOverride != null && (a.fontStyleOverride = b.fontStyleOverride);
        b.textOpacity != null && (a.textOpacity = b.textOpacity);
        b.textOpacityOverride != null && (a.textOpacityOverride = b.textOpacityOverride);
        b.windowColor != null && (a.windowColor = b.windowColor);
        b.windowColorOverride != null && (a.windowColorOverride = b.windowColorOverride);
        b.windowOpacity != null &&
            (a.windowOpacity = b.windowOpacity);
        b.windowOpacityOverride != null && (a.windowOpacityOverride = b.windowOpacityOverride);
        return a
    };
    g.k.n4 = function(a, b) {
        var c = {};
        Object.assign(c, Odb());
        Object.assign(c, a);
        mfb(this, c, b);
        this.player.Bc("captionssettingschanged")
    };
    g.k.cV = function() {
        !this.D && this.loaded && (g.tc(this.Ca, function(a, b) {
            a.dispose();
            delete this.Ca[b]
        }, this), this.aV())
    };
    g.k.ai = function(a, b) {
        switch (a) {
            case "fontSize":
                if (isNaN(b)) break;
                var c = g.Gd(b, -2, 4);
                this.n4({
                    fontSizeIncrement: c
                });
                return c;
            case "reload":
                b && !this.D && T3(this, this.B, !0);
                break;
            case "stickyLoading":
                b !== void 0 && this.W.N && (g.jP(this.W) ? U3(this, !!b) : V3(this, !!b));
                break;
            case "track":
                if (!this.j) return {};
                if (b) {
                    this.W.L("html5_report_caption_format_intent") && this.rj(g.Fc(b) ? "" : b.vss_id, "m");
                    if (this.D) break;
                    if (!g.Sa(b)) break;
                    if (g.Fc(b)) {
                        T3(this, null, !0);
                        break
                    }
                    a = g.eU(this.j.B, !0);
                    for (var d = 0; d < a.length; d++) {
                        var e =
                            a[d];
                        e.languageCode !== b.languageCode || c && (e.languageName !== b.languageName || (e.captionId || "") !== (b.captionId || "") || g.BP(e) !== b.displayName) || (c = b.translationLanguage ? Idb(e, b.translationLanguage) : e)
                    }
                    this.DN(b.position);
                    !c || c === this.B && this.loaded || (b = g.lL(), a = g.DP(c), b.length && a === b[b.length - 1] || (b.push(a), g.kt("yt-player-caption-language-preferences", b)), g.jP(this.W) && !this.J.isInline() && g.kt("yt-player-caption-sticky-language", a, 2592E3), T3(this, c, !0))
                } else return this.loaded && this.B && !S3(this) ? g.CP(this.B) : {};
                return "";
            case "tracklist":
                return this.j ? g.Gl(g.eU(this.j.B, !(!b || !b.includeAsr)), function(f) {
                    return g.CP(f)
                }) : [];
            case "translationLanguages":
                return this.j ? this.j.G.map(function(f) {
                    return Object.assign({}, f)
                }) : [];
            case "sampleSubtitles":
                this.D || b === void 0 || zfb(this, !!b);
                break;
            case "sampleSubtitlesCustomized":
                this.D || zfb(this, !!b, b);
                break;
            case "recommendedTranslationLanguages":
                return g.lL();
            case "defaultTranslationSourceTrackIndices":
                return this.j ? this.j.Z : []
        }
    };
    g.k.getOptions = function() {
        var a = "reload fontSize track tracklist translationLanguages sampleSubtitle".split(" ");
        this.W.N && a.push("stickyLoading");
        return a
    };
    g.k.Zr = function() {
        var a = this.B;
        if (this.W.L("html5_cue_ranges_based_caption_vss") && !this.J.cL("captions")) return {};
        if (this.W.L("html5_modify_caption_vss_logging")) {
            var b;
            return (a = (b = this.videoData.rE) != null ? b : null) ? {
                cc: g.WJa(a)
            } : {}
        }
        return a ? (b = a.vssId, a.translationLanguage && b && (b = "t" + b + "." + g.DP(a)), {
            cc: b
        }) : {}
    };
    g.k.xfa = function() {
        this.isSubtitlesOn() ? (this.W.L("html5_report_caption_format_intent") && this.rj("", "m"), g.jP(this.W) ? U3(this, !1) : V3(this, !1), ufb(this), this.W.L("html5_report_caption_format_change") ? T3(this, null, !0) : (this.unload(), P3(this, !0) && T3(this, Q3(this), !1))) : this.M3()
    };
    g.k.M3 = function() {
        if (this.W.L("html5_report_caption_format_intent")) {
            var a = S3(this) || !this.B ? R3(this, !0) : this.B;
            this.rj(a ? a.vssId : "", "m")
        }
        this.isSubtitlesOn() || T3(this, S3(this) || !this.B ? R3(this, !0) : this.B, !0)
    };
    g.k.isSubtitlesOn = function() {
        return !!this.loaded && !!this.B && !S3(this)
    };
    g.k.iH = function() {
        this.j && this.j.iH()
    };
    g.k.cba = function() {
        var a = S3(this);
        P3(this, a) ? T3(this, this.getAudioTrack().j, !1) : this.videoData.captionTracks.length && (this.loaded && this.unload(), this.wU() && (this.Z = !1, this.B = null, this.j && (this.j.dispose(), this.j = null)), this.Pv() && (a ? T3(this, R3(this), !1) : this.load()))
    };
    g.k.DN = function(a) {
        a && (this.ra = {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left,
            width: 1 - a.left - a.right,
            height: 1 - a.top - a.bottom
        }, this.K.element.style.top = this.ra.top * 100 + "%", this.K.element.style.left = this.ra.left * 100 + "%", this.K.element.style.width = this.ra.width * 100 + "%", this.K.element.style.height = this.ra.height * 100 + "%", this.K.element.style.position = "absolute", a = xfb(this)) && (this.K.element.style.width = a.width + "px", this.K.element.style.height = a.height + "px")
    };
    g.k.onVideoDataChange = function(a, b) {
        a === "newdata" && (this.videoData = b, this.loaded && this.unload(), this.Z = !1, this.B = null, this.j && (this.j.dispose(), this.j = null, this.player.Bc("captionschanged", {})), this.Pv() && this.load())
    };
    g.k.getAudioTrack = function() {
        return this.fb && this.player.getPresentingPlayerType() === 2 ? this.videoData.zl : this.player.getAudioTrack()
    };
    g.k.Qba = function() {
        var a = this.J.Me();
        a && !a.Ka() && a.jA();
        this.J.isFullscreen() ? (this.D = this.Wa = !0, this.loaded && sfb(this)) : (this.Wa = this.W.controlsType === "3", this.D = lfb(this));
        T3(this, this.B)
    };
    g.k.wO = function() {
        var a, b, c, d = (a = this.videoData.getPlayerResponse()) == null ? void 0 : (b = a.captions) == null ? void 0 : (c = b.playerCaptionsTracklistRenderer) == null ? void 0 : c.openTranscriptCommand;
        d && this.player.gb("innertubeCommand", d)
    };
    g.k.Zj = function(a, b, c) {
        var d = /&|,|:|;|(\n)|(\s)|(\/)|(\\)/gm,
            e = "";
        a && (e = a.vssId, e = e.replace(d, ""));
        var f = "";
        a && a.getId() && (f = a.getId() || "", f = f.replace(d, ""));
        a && a.getXtags() && (a = a.getXtags(), a = a.replace(d, ""), f = f.concat(";" + a));
        this.J.Zj(b ? e : "", b ? f : "", c)
    };
    g.k.rj = function(a, b) {
        a = (a || "").replace(/&|,|:|;|(\n)|(\s)|(\/)|(\\)/gm, "");
        this.J.rj(a, b)
    };
    g.AW.oL(O3, {
        aV: "smucd"
    });
    g.cU("captions", O3);
})(_yt_player);