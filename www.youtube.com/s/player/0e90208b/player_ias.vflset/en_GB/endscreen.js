(function(g) {
    var window = this;
    'use strict';
    var wib = function(a, b) {
            a.gb("onAutonavCoundownStarted", b)
        },
        i5 = function(a, b, c) {
            g.xp(a.element, "ytp-suggestion-set", !!b.videoId);
            var d = b.playlistId;
            c = b.nh(c ? c : "mqdefault.jpg");
            var e = null,
                f = null;
            b instanceof g.LP && (b.lengthText ? (e = b.lengthText || null, f = b.qy || null) : b.lengthSeconds && (e = g.fz(b.lengthSeconds), f = g.fz(b.lengthSeconds, !0)));
            var h = !!d;
            d = h && g.JP(d).type === "RD";
            var l = b instanceof g.LP ? b.isLivePlayback : null,
                m = b instanceof g.LP ? b.isUpcoming : null,
                n = b.author,
                p = b.shortViewCount,
                q = b.publishedTimeText,
                r = [],
                t = [];
            n && r.push(n);
            p && (r.push(p), t.push(p));
            q && t.push(q);
            c = {
                title: b.title,
                author: n,
                author_and_views: r.join(" \u2022 "),
                aria_label: b.ariaLabel ||
                    g.KD("Watch $TITLE", {
                        TITLE: b.title
                    }),
                duration: e,
                timestamp: f,
                url: b.Ml(),
                is_live: l,
                is_upcoming: m,
                is_list: h,
                is_mix: d,
                background: c ? "background-image: url(" + c + ")" : "",
                views_and_publish_time: t.join(" \u2022 "),
                autoplayAlternativeHeader: b.Tt
            };
            b instanceof g.KP && (c.playlist_length = b.playlistLength);
            a.update(c)
        },
        j5 = function(a) {
            var b = a.U(),
                c = b.D;
            g.U.call(this, {
                I: "a",
                S: "ytp-autonav-suggestion-card",
                X: {
                    href: "{{url}}",
                    target: c ? b.Y : "",
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}",
                    "data-is-upcoming": "{{is_upcoming}}"
                },
                V: [{
                    I: "div",
                    Ma: ["ytp-autonav-endscreen-upnext-thumbnail", "ytp-autonav-thumbnail-small"],
                    X: {
                        style: "{{background}}"
                    },
                    V: [{
                        I: "div",
                        X: {
                            "aria-label": "{{timestamp}}"
                        },
                        Ma: ["ytp-autonav-timestamp"],
                        va: "{{duration}}"
                    }, {
                        I: "div",
                        Ma: ["ytp-autonav-live-stamp"],
                        va: "Live"
                    }, {
                        I: "div",
                        Ma: ["ytp-autonav-upcoming-stamp"],
                        va: "Upcoming"
                    }, {
                        I: "div",
                        S: "ytp-autonav-list-overlay",
                        V: [{
                            I: "div",
                            S: "ytp-autonav-mix-text",
                            va: "Mix"
                        }, {
                            I: "div",
                            S: "ytp-autonav-mix-icon"
                        }]
                    }]
                }, {
                    I: "div",
                    Ma: ["ytp-autonav-endscreen-upnext-title", "ytp-autonav-title-card"],
                    va: "{{title}}"
                }, {
                    I: "div",
                    Ma: ["ytp-autonav-endscreen-upnext-author", "ytp-autonav-author-card"],
                    va: "{{author}}"
                }, {
                    I: "div",
                    Ma: ["ytp-autonav-endscreen-upnext-author", "ytp-autonav-view-and-date-card"],
                    va: "{{views_and_publish_time}}"
                }]
            });
            this.J = a;
            this.suggestion =
                null;
            this.j = c;
            this.listen("click", this.onClick);
            this.listen("keypress", this.onKeyPress)
        },
        k5 = function(a, b) {
            b = b === void 0 ? !1 : b;
            g.U.call(this, {
                I: "div",
                S: "ytp-autonav-endscreen-countdown-overlay"
            });
            var c = this;
            this.K = b;
            this.cancelCommand = this.G = void 0;
            this.C = 0;
            this.container = new g.U({
                I: "div",
                S: "ytp-autonav-endscreen-countdown-container"
            });
            g.P(this, this.container);
            this.container.Ja(this.element);
            b = a.U();
            var d = b.D;
            this.J = a;
            this.suggestion = null;
            this.onVideoDataChange("newdata", this.J.getVideoData());
            this.T(a, "videodatachange", this.onVideoDataChange);
            this.j = new g.U({
                I: "div",
                S: "ytp-autonav-endscreen-upnext-container",
                X: {
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}",
                    "data-is-upcoming": "{{is_upcoming}}"
                },
                V: [{
                    I: "div",
                    S: "ytp-autonav-endscreen-upnext-header"
                }, {
                    I: "div",
                    S: "ytp-autonav-endscreen-upnext-alternative-header",
                    va: "{{autoplayAlternativeHeader}}"
                }, {
                    I: "a",
                    S: "ytp-autonav-endscreen-link-container",
                    X: {
                        href: "{{url}}",
                        target: d ? b.Y : ""
                    },
                    V: [{
                        I: "div",
                        S: "ytp-autonav-endscreen-upnext-thumbnail",
                        X: {
                            style: "{{background}}"
                        },
                        V: [{
                            I: "div",
                            X: {
                                "aria-label": "{{timestamp}}"
                            },
                            Ma: ["ytp-autonav-timestamp"],
                            va: "{{duration}}"
                        }, {
                            I: "div",
                            Ma: ["ytp-autonav-live-stamp"],
                            va: "Live"
                        }, {
                            I: "div",
                            Ma: ["ytp-autonav-upcoming-stamp"],
                            va: "Upcoming"
                        }]
                    }, {
                        I: "div",
                        S: "ytp-autonav-endscreen-video-info",
                        V: [{
                            I: "div",
                            S: "ytp-autonav-endscreen-premium-badge"
                        }, {
                            I: "div",
                            S: "ytp-autonav-endscreen-upnext-title",
                            va: "{{title}}"
                        }, {
                            I: "div",
                            S: "ytp-autonav-endscreen-upnext-author",
                            va: "{{author}}"
                        }, {
                            I: "div",
                            S: "ytp-autonav-view-and-date",
                            va: "{{views_and_publish_time}}"
                        }, {
                            I: "div",
                            S: "ytp-autonav-author-and-view",
                            va: "{{author_and_views}}"
                        }]
                    }]
                }]
            });
            g.P(this, this.j);
            this.j.Ja(this.container.element);
            d || this.T(this.j.Ea("ytp-autonav-endscreen-link-container"), "click", this.EV);
            this.J.createClientVe(this.container.element, this, 115127);
            this.J.createClientVe(this.j.Ea("ytp-autonav-endscreen-link-container"), this, 115128);
            this.overlay = new g.U({
                I: "div",
                S: "ytp-autonav-overlay"
            });
            g.P(this, this.overlay);
            this.overlay.Ja(this.container.element);
            this.B = new g.U({
                I: "div",
                S: "ytp-autonav-endscreen-button-container"
            });
            g.P(this, this.B);
            this.B.Ja(this.container.element);
            this.cancelButton = new g.U({
                I: "button",
                Ma: ["ytp-autonav-endscreen-upnext-button", "ytp-autonav-endscreen-upnext-cancel-button", b.L("web_modern_buttons") ? "ytp-autonav-endscreen-upnext-button-rounded" : ""],
                X: {
                    "aria-label": "Cancel auto-play"
                },
                va: "Cancel"
            });
            g.P(this, this.cancelButton);
            this.cancelButton.Ja(this.B.element);
            this.cancelButton.listen("click", this.s5, this);
            this.J.createClientVe(this.cancelButton.element, this, 115129);
            this.playButton = new g.U({
                I: "a",
                Ma: ["ytp-autonav-endscreen-upnext-button", "ytp-autonav-endscreen-upnext-play-button",
                    b.L("web_modern_buttons") ? "ytp-autonav-endscreen-upnext-button-rounded" : ""
                ],
                X: {
                    href: "{{url}}",
                    role: "button",
                    "aria-label": "Play next video"
                },
                va: "Play now"
            });
            g.P(this, this.playButton);
            this.playButton.Ja(this.B.element);
            this.playButton.listen("click", this.EV, this);
            this.J.L("web_player_autonav_next_button_renderer") ? (this.J.createServerVe(this.playButton.element, this.playButton, !0), (b = this.J.getVideoData()) && xib(this, b)) : this.J.createClientVe(this.playButton.element, this, 115130);
            this.D = new g.lp(function() {
                    yib(c)
                },
                500);
            g.P(this, this.D);
            this.CV();
            this.T(a, "autonavvisibility", this.CV);
            this.J.L("web_autonav_color_transition") && (this.T(a, "autonavchange", this.r5), this.T(a, "onAutonavCoundownStarted", this.dba))
        },
        l5 = function(a) {
            var b = a.J.Ao(!0, a.J.isFullscreen());
            g.xp(a.container.element, "ytp-autonav-endscreen-small-mode", a.Tg(b));
            g.xp(a.container.element, "ytp-autonav-endscreen-is-premium", !!a.suggestion && !!a.suggestion.kN);
            g.xp(a.J.getRootNode(), "ytp-autonav-endscreen-cancelled-state", !a.J.If());
            g.xp(a.J.getRootNode(), "countdown-running", a.Pl());
            g.xp(a.container.element, "ytp-player-content", a.J.If());
            g.pm(a.overlay.element, {
                width: b.width + "px"
            });
            if (!a.Pl()) {
                a.J.If() ? zib(a, Math.round(Aib(a) / 1E3)) : zib(a);
                b = !!a.suggestion && !!a.suggestion.Tt;
                var c = a.J.If() || !b;
                g.xp(a.container.element, "ytp-autonav-endscreen-upnext-alternative-header-only", !c && b);
                g.xp(a.container.element, "ytp-autonav-endscreen-upnext-no-alternative-header", c && !b);
                g.Tx(a.B, a.J.If());
                g.xp(a.element, "ytp-enable-w2w-color-transitions", Bib(a))
            }
        },
        yib = function(a) {
            var b = Aib(a),
                c = Math,
                d = c.min;
            var e = a.C ? Date.now() - a.C : 0;
            c = d.call(c, e, b);
            zib(a, Math.ceil((b - c) / 1E3));
            b - c <= 500 && a.Pl() ? a.select(!0) : a.Pl() && a.D.start()
        },
        Aib = function(a) {
            if (a.J.isFullscreen()) {
                var b;
                a = (b = a.J.getVideoData()) == null ? void 0 : b.jE;
                return a === -1 || a === void 0 ? 8E3 : a
            }
            return a.J.wu() >= 0 ? a.J.wu() : g.HC(a.J.U().experiments, "autoplay_time") || 1E4
        },
        xib = function(a, b) {
            a.J.L("web_player_autonav_next_button_renderer");
            b = b.R4;
            a.G = b == null ? void 0 : b.navigationEndpoint;
            b = b == null ? void 0 : b.trackingParams;
            a.playButton && b && a.J.setTrackingParams(a.playButton.element, b)
        },
        Bib = function(a) {
            var b;
            return !((b = a.J.getVideoData()) == null || !b.watchToWatchTransitionRenderer)
        },
        zib = function(a, b) {
            b = b === void 0 ? -1 : b;
            a = a.j.Ea("ytp-autonav-endscreen-upnext-header");
            g.pe(a);
            if (b >= 0) {
                b = String(b);
                var c = "Up next in $SECONDS".match(RegExp("\\$SECONDS", "gi"))[0],
                    d = "Up next in $SECONDS".indexOf(c);
                if (d >= 0) {
                    a.appendChild(g.me("Up next in $SECONDS".slice(0, d)));
                    var e = g.le("span");
                    g.rp(e, "ytp-autonav-endscreen-upnext-header-countdown-number");
                    g.ue(e, b);
                    a.appendChild(e);
                    a.appendChild(g.me("Up next in $SECONDS".slice(d + c.length)));
                    return
                }
            }
            g.ue(a, "Up next")
        },
        m5 = function(a, b) {
            g.U.call(this, {
                I: "div",
                Ma: ["html5-endscreen", "ytp-player-content", b || "base-endscreen"]
            });
            this.created = !1;
            this.player = a
        },
        n5 = function(a) {
            g.U.call(this, {
                I: "div",
                Ma: ["ytp-upnext", "ytp-player-content"],
                X: {
                    "aria-label": "{{aria_label}}"
                },
                V: [{
                    I: "div",
                    S: "ytp-cued-thumbnail-overlay-image",
                    X: {
                        style: "{{background}}"
                    }
                }, {
                    I: "span",
                    S: "ytp-upnext-top",
                    V: [{
                        I: "span",
                        S: "ytp-upnext-header",
                        va: "Up Next"
                    }, {
                        I: "span",
                        S: "ytp-upnext-title",
                        va: "{{title}}"
                    }, {
                        I: "span",
                        S: "ytp-upnext-author",
                        va: "{{author}}"
                    }]
                }, {
                    I: "a",
                    S: "ytp-upnext-autoplay-icon",
                    X: {
                        role: "button",
                        href: "{{url}}",
                        "aria-label": "Play next video"
                    },
                    V: [{
                        I: "svg",
                        X: {
                            height: "100%",
                            version: "1.1",
                            viewBox: "0 0 72 72",
                            width: "100%"
                        },
                        V: [{
                            I: "circle",
                            S: "ytp-svg-autoplay-circle",
                            X: {
                                cx: "36",
                                cy: "36",
                                fill: "#fff",
                                "fill-opacity": "0.3",
                                r: "31.5"
                            }
                        }, {
                            I: "circle",
                            S: "ytp-svg-autoplay-ring",
                            X: {
                                cx: "-36",
                                cy: "36",
                                "fill-opacity": "0",
                                r: "33.5",
                                stroke: "#FFFFFF",
                                "stroke-dasharray": "211",
                                "stroke-dashoffset": "-211",
                                "stroke-width": "4",
                                transform: "rotate(-90)"
                            }
                        }, {
                            I: "path",
                            S: "ytp-svg-fill",
                            X: {
                                d: "M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"
                            }
                        }]
                    }]
                }, {
                    I: "span",
                    S: "ytp-upnext-bottom",
                    V: [{
                        I: "span",
                        S: "ytp-upnext-cancel"
                    }, {
                        I: "span",
                        S: "ytp-upnext-paused",
                        va: "Auto-play is paused"
                    }]
                }]
            });
            this.api = a;
            this.cancelButton = null;
            this.G = this.Ea("ytp-svg-autoplay-ring");
            this.C = this.notification = this.j = this.suggestion = null;
            this.D = new g.lp(this.VJ, 5E3, this);
            this.B = 0;
            var b = this.Ea("ytp-upnext-cancel");
            this.cancelButton = new g.U({
                I: "button",
                Ma: ["ytp-upnext-cancel-button", "ytp-button"],
                X: {
                    tabindex: "0",
                    "aria-label": "Cancel auto-play"
                },
                va: "Cancel"
            });
            g.P(this, this.cancelButton);
            this.cancelButton.listen("click", this.t5, this);
            this.cancelButton.Ja(b);
            this.cancelButton && this.api.createClientVe(this.cancelButton.element,
                this, 115129);
            g.P(this, this.D);
            this.api.createClientVe(this.element, this, 18788);
            b = this.Ea("ytp-upnext-autoplay-icon");
            this.T(b, "click", this.u5);
            this.api.createClientVe(b, this, 115130);
            this.FV();
            this.T(a, "autonavvisibility", this.FV);
            this.T(a, "mdxnowautoplaying", this.Sba);
            this.T(a, "mdxautoplaycanceled", this.Tba);
            g.xp(this.element, "ytp-upnext-mobile", this.api.U().B)
        },
        Cib = function(a, b) {
            if (b) return b;
            if (a.api.isFullscreen()) {
                var c;
                a = (c = a.api.getVideoData()) == null ? void 0 : c.jE;
                return a === -1 || a === void 0 ? 8E3 : a
            }
            return a.api.wu() >= 0 ? a.api.wu() : g.HC(a.api.U().experiments, "autoplay_time") || 1E4
        },
        Dib = function(a, b) {
            b = Cib(a, b);
            var c = Math,
                d = c.min;
            var e = (0, g.T)() - a.B;
            c = d.call(c, e, b);
            b = b === 0 ? 1 : Math.min(c / b, 1);
            a.G.setAttribute("stroke-dashoffset", "" + -211 * (b + 1));
            b >= 1 && a.Pl() && a.api.getPresentingPlayerType() !== 3 ? a.select(!0) : a.Pl() && a.j.start()
        },
        o5 = function(a) {
            m5.call(this, a, "autonav-endscreen");
            this.overlay = this.videoData = null;
            this.table = new g.U({
                I: "div",
                S: "ytp-suggestion-panel",
                V: [{
                    I: "div",
                    Ma: ["ytp-autonav-endscreen-upnext-header", "ytp-autonav-endscreen-more-videos"],
                    va: "More videos"
                }]
            });
            this.N = new g.U({
                I: "div",
                S: "ytp-suggestions-container"
            });
            this.videos = [];
            this.C = null;
            this.G = this.K = !1;
            this.B = new k5(this.player);
            g.P(this, this.B);
            this.B.Ja(this.element);
            a.getVideoData().Yf ? this.j = this.B : (this.j = new n5(a), g.OR(this.player, this.j.element, 4), g.P(this, this.j));
            this.overlay = new g.U({
                I: "div",
                S: "ytp-autonav-overlay-cancelled-state"
            });
            g.P(this, this.overlay);
            this.overlay.Ja(this.element);
            this.D = new g.VE(this);
            g.P(this, this.D);
            g.P(this, this.table);
            this.table.Ja(this.element);
            this.table.show();
            g.P(this, this.N);
            this.N.Ja(this.table.element);
            this.hide()
        },
        p5 = function(a) {
            var b = a.If();
            b !== a.G && (a.G = b, a.player.publish("autonavvisibility"), a.G ? (a.B !== a.j && a.B.hide(), a.table.hide()) : (a.B !== a.j && a.B.show(), a.table.show()))
        },
        q5 = function(a, b) {
            g.U.call(this, {
                I: "button",
                Ma: ["ytp-watch-on-youtube-button", "ytp-button"],
                va: "{{content}}"
            });
            this.J = a;
            this.buttonType = this.buttonType = b;
            this.b3();
            this.buttonType === 2 && g.tp(this.element, "ytp-continue-watching-button");
            this.listen("click", this.onClick);
            this.listen("videodatachange", this.b3);
            g.Tx(this, !0)
        },
        r5 = function(a, b) {
            m5.call(this, a, "embeds-lite-endscreen");
            this.J = a;
            this.Pe = b;
            this.J.createClientVe(this.element, this, 156943);
            this.watchButton = new q5(a, 2);
            g.P(this, this.watchButton);
            this.watchButton.Ja(this.element);
            this.hide()
        },
        Eib = function(a) {
            m5.call(this, a, "subscribecard-endscreen");
            this.j = new g.U({
                I: "div",
                S: "ytp-subscribe-card",
                V: [{
                    I: "img",
                    S: "ytp-author-image",
                    X: {
                        src: "{{profilePicture}}"
                    }
                }, {
                    I: "div",
                    S: "ytp-subscribe-card-right",
                    V: [{
                        I: "div",
                        S: "ytp-author-name",
                        va: "{{author}}"
                    }, {
                        I: "div",
                        S: "html5-subscribe-button-container"
                    }]
                }]
            });
            g.P(this, this.j);
            this.j.Ja(this.element);
            var b = a.getVideoData();
            this.subscribeButton = new g.VU("Subscribe", null, "Unsubscribe", null, !0, !1, b.im, b.subscribed, "trailer-endscreen", null, a, !1);
            g.P(this, this.subscribeButton);
            this.subscribeButton.Ja(this.j.Ea("html5-subscribe-button-container"));
            this.T(a, "videodatachange", this.Ta);
            this.Ta();
            this.hide()
        },
        s5 = function(a) {
            var b = a.U(),
                c = g.RE || g.OO ? {
                    style: "will-change: opacity"
                } : void 0,
                d = b.D,
                e = ["ytp-videowall-still"];
            b.B && e.push("ytp-videowall-show-text");
            g.U.call(this, {
                I: "a",
                Ma: e,
                X: {
                    href: "{{url}}",
                    target: d ? b.Y : "",
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}"
                },
                V: [{
                    I: "div",
                    S: "ytp-videowall-still-image",
                    X: {
                        style: "{{background}}"
                    }
                }, {
                    I: "span",
                    S: "ytp-videowall-still-info",
                    X: {
                        "aria-hidden": "true"
                    },
                    V: [{
                        I: "span",
                        S: "ytp-videowall-still-info-bg",
                        V: [{
                            I: "span",
                            S: "ytp-videowall-still-info-content",
                            X: c,
                            V: [{
                                    I: "span",
                                    S: "ytp-videowall-still-info-title",
                                    va: "{{title}}"
                                },
                                {
                                    I: "span",
                                    S: "ytp-videowall-still-info-author",
                                    va: "{{author_and_views}}"
                                }, {
                                    I: "span",
                                    S: "ytp-videowall-still-info-live",
                                    va: "Live"
                                }, {
                                    I: "span",
                                    S: "ytp-videowall-still-info-duration",
                                    va: "{{duration}}"
                                }
                            ]
                        }]
                    }]
                }, {
                    I: "span",
                    Ma: ["ytp-videowall-still-listlabel-regular", "ytp-videowall-still-listlabel"],
                    X: {
                        "aria-hidden": "true"
                    },
                    V: [{
                        I: "span",
                        S: "ytp-videowall-still-listlabel-icon"
                    }, "Playlist", {
                        I: "span",
                        S: "ytp-videowall-still-listlabel-length",
                        V: [" (", {
                            I: "span",
                            va: "{{playlist_length}}"
                        }, ")"]
                    }]
                }, {
                    I: "span",
                    Ma: ["ytp-videowall-still-listlabel-mix",
                        "ytp-videowall-still-listlabel"
                    ],
                    X: {
                        "aria-hidden": "true"
                    },
                    V: [{
                        I: "span",
                        S: "ytp-videowall-still-listlabel-mix-icon"
                    }, "Mix", {
                        I: "span",
                        S: "ytp-videowall-still-listlabel-length",
                        va: " (50+)"
                    }]
                }]
            });
            this.suggestion = null;
            this.B = d;
            this.api = a;
            this.j = new g.VE(this);
            g.P(this, this.j);
            this.listen("click", this.onClick);
            this.listen("keypress", this.onKeyPress);
            this.j.T(a, "videodatachange", this.onVideoDataChange);
            a.createServerVe(this.element, this);
            this.onVideoDataChange()
        },
        t5 = function(a) {
            m5.call(this, a, "videowall-endscreen");
            var b = this;
            this.J = a;
            this.C = 0;
            this.stills = [];
            this.D = this.videoData = null;
            this.G = this.N = !1;
            this.Y = null;
            this.B = new g.VE(this);
            g.P(this, this.B);
            this.K = new g.lp(function() {
                g.tp(b.element, "ytp-show-tiles")
            }, 0);
            g.P(this, this.K);
            var c = new g.U({
                I: "button",
                Ma: ["ytp-button", "ytp-endscreen-previous"],
                X: {
                    "aria-label": "Previous"
                },
                V: [g.$x()]
            });
            g.P(this, c);
            c.Ja(this.element);
            c.listen("click", this.y5, this);
            this.table = new g.Qx({
                I: "div",
                S: "ytp-endscreen-content"
            });
            g.P(this, this.table);
            this.table.Ja(this.element);
            c = new g.U({
                I: "button",
                Ma: ["ytp-button", "ytp-endscreen-next"],
                X: {
                    "aria-label": "Next"
                },
                V: [g.ay()]
            });
            g.P(this, c);
            c.Ja(this.element);
            c.listen("click", this.x5, this);
            a.getVideoData().Yf ? this.j = new k5(a, !0) : this.j =
                new n5(a);
            g.P(this, this.j);
            g.OR(this.player, this.j.element, 4);
            a.createClientVe(this.element, this, 158789);
            this.hide()
        },
        u5 = function(a) {
            return g.PR(a.player) && a.KE() && !a.D
        },
        v5 = function(a) {
            var b = a.If();
            b !== a.N && (a.N = b, a.player.publish("autonavvisibility"))
        },
        w5 = function(a) {
            m5.call(this, a, "watch-again-on-youtube-endscreen");
            this.watchButton = new q5(a, 1);
            g.P(this, this.watchButton);
            this.watchButton.Ja(this.element);
            g.s8a(a) && (this.j = new g.a1(a), g.P(this, this.j), this.B = new g.U({
                I: "div",
                Ma: ["ytp-watch-again-on-youtube-endscreen-more-videos-container"],
                X: {
                    tabIndex: "-1"
                },
                V: [this.j]
            }), g.P(this, this.B), this.j.Ja(this.B.element), this.B.Ja(this.element));
            a.createClientVe(this.element, this, 156914);
            this.hide()
        },
        Iib = function(a) {
            g.dU.call(this, a);
            var b = this;
            this.endScreen = null;
            this.B = this.j = this.C = this.D = !1;
            this.listeners = new g.VE(this);
            g.P(this, this.listeners);
            var c = a.U(),
                d = a.getVideoData();
            d = d && d.limitedPlaybackDurationInSeconds !== 0;
            g.Ns(g.ZO(c)) && d && !g.KR(a) ? (this.B = !0, this.endScreen = new r5(a, g.AR(a))) : a.md() ? this.endScreen = new w5(a) : Fib(a) ? (this.D = !0, Gib(this), this.j ? this.endScreen = new o5(a) : this.endScreen = new t5(a)) : c.Ng ? this.endScreen = new Eib(a) : this.endScreen = new m5(a);
            g.P(this, this.endScreen);
            g.OR(a, this.endScreen.element, 4);
            Hib(this);
            this.listeners.T(a, "videodatachange", this.onVideoDataChange, this);
            this.listeners.T(a, g.zD("endscreen"), function(e) {
                b.onCueRangeEnter(e)
            });
            this.listeners.T(a, g.AD("endscreen"), function(e) {
                b.onCueRangeExit(e)
            })
        },
        Gib = function(a) {
            var b = a.player.getVideoData();
            if (!b || a.j === b.pm && a.C === b.Yf) return !1;
            a.j = b.pm;
            a.C = b.Yf;
            return !0
        },
        Fib = function(a) {
            a = a.U();
            return a.zd && !a.Ng
        },
        Hib = function(a) {
            a.player.wf("endscreen");
            var b = a.player.getVideoData();
            b = new g.xD(Math.max((b.lengthSeconds - 10) * 1E3, 0), 0x8000000000000, {
                id: "preload",
                namespace: "endscreen"
            });
            var c = new g.xD(0x8000000000000, 0x8000000000000, {
                id: "load",
                priority: 8,
                namespace: "endscreen"
            });
            a.player.rf([b, c])
        };
    g.GR.prototype.wu = g.da(14, function() {
        return this.app.wu()
    });
    g.C_.prototype.wu = g.da(13, function() {
        return this.getVideoData().C_
    });
    g.CR.prototype.gt = g.da(12, function(a) {
        this.Pi().gt(a)
    });
    g.jV.prototype.gt = g.da(11, function(a) {
        this.j !== a && (this.j = a, this.Ta())
    });
    g.qW.prototype.gt = g.da(10, function(a) {
        this.overflowButton && this.overflowButton.gt(a)
    });
    g.CR.prototype.jt = g.da(9, function(a) {
        this.Pi().jt(a)
    });
    g.oV.prototype.jt = g.da(8, function(a) {
        this.j !== a && (this.j = a, this.Ta())
    });
    g.qW.prototype.jt = g.da(7, function(a) {
        this.shareButton && this.shareButton.jt(a)
    });
    g.CR.prototype.TC = g.da(6, function(a) {
        this.Pi().TC(a)
    });
    g.OU.prototype.TC = g.da(5, function(a) {
        this.gT !== a && (this.gT = a, this.rr())
    });
    g.CR.prototype.SC = g.da(4, function(a) {
        this.Pi().SC(a)
    });
    g.qW.prototype.SC = g.da(3, function(a) {
        this.fT !== a && (this.fT = a, this.qr())
    });
    g.z(j5, g.U);
    j5.prototype.select = function() {
        this.J.Gp(this.suggestion.videoId, this.suggestion.sessionData, this.suggestion.playlistId, void 0, void 0, this.suggestion.qF || void 0) && this.J.logClick(this.element)
    };
    j5.prototype.onClick = function(a) {
        g.FS(a, this.J, this.j, this.suggestion.sessionData || void 0) && this.select()
    };
    j5.prototype.onKeyPress = function(a) {
        switch (a.keyCode) {
            case 13:
            case 32:
                a.defaultPrevented || (this.select(), a.preventDefault())
        }
    };
    g.z(k5, g.U);
    g.k = k5.prototype;
    g.k.dJ = function(a) {
        this.suggestion !== a && (this.suggestion = a, i5(this.j, a), this.playButton.updateValue("url", this.suggestion.Ml()), l5(this))
    };
    g.k.Pl = function() {
        return this.C > 0
    };
    g.k.bD = function() {
        this.Pl() || (this.C = Date.now(), yib(this), wib(this.J, Aib(this)), g.xp(this.J.getRootNode(), "countdown-running", this.Pl()))
    };
    g.k.Ty = function() {
        this.Yq();
        yib(this);
        var a = this.j.Ea("ytp-autonav-endscreen-upnext-header");
        a && g.ue(a, "Up next")
    };
    g.k.Yq = function() {
        this.Pl() && (this.D.stop(), this.C = 0)
    };
    g.k.select = function(a) {
        this.J.nextVideo(!1, a === void 0 ? !1 : a);
        this.Yq()
    };
    g.k.EV = function(a) {
        g.FS(a, this.J) && (a.currentTarget === this.playButton.element ? this.J.logClick(this.playButton.element) : a.currentTarget === this.j.Ea("ytp-autonav-endscreen-link-container") && (a = this.j.Ea("ytp-autonav-endscreen-link-container"), this.J.logVisibility(a, !0), this.J.logClick(a)), this.J.L("web_player_autonav_next_button_renderer") && this.G ? (this.J.gb("innertubeCommand", this.G), this.Yq()) : this.select())
    };
    g.k.s5 = function() {
        this.J.logClick(this.cancelButton.element);
        g.IR(this.J, !0);
        this.cancelCommand && this.J.gb("innertubeCommand", this.cancelCommand)
    };
    g.k.onVideoDataChange = function(a, b) {
        this.J.L("web_player_autonav_next_button_renderer") && xib(this, b);
        var c;
        this.cancelCommand = (c = b.hga) == null ? void 0 : c.command
    };
    g.k.dba = function(a) {
        if (Bib(this)) {
            var b = this.J.getVideoData().watchToWatchTransitionRenderer,
                c = b == null ? void 0 : b.fromColorPaletteDark;
            b = b == null ? void 0 : b.toColorPaletteDark;
            if (c && b) {
                var d = this.element;
                d.style.setProperty("--w2w-start-background-color", g.qz(c.surgeColor));
                d.style.setProperty("--w2w-start-primary-text-color", g.qz(c.primaryTitleColor));
                d.style.setProperty("--w2w-start-secondary-text-color", g.qz(c.secondaryTitleColor));
                d.style.setProperty("--w2w-end-background-color", g.qz(b.surgeColor));
                d.style.setProperty("--w2w-end-primary-text-color", g.qz(b.primaryTitleColor));
                d.style.setProperty("--w2w-end-secondary-text-color", g.qz(b.secondaryTitleColor));
                d.style.setProperty("--w2w-animation-duration", a + "ms")
            }
            g.xp(this.element, "ytp-w2w-animate", !0)
        }
    };
    g.k.r5 = function(a) {
        this.J.L("web_autonav_color_transition") && a !== 2 && g.xp(this.element, "ytp-w2w-animate", !1)
    };
    g.k.CV = function() {
        var a = this.J.If();
        this.K && this.Jb !== a && g.Tx(this, a);
        l5(this);
        this.J.logVisibility(this.container.element, a);
        this.J.logVisibility(this.cancelButton.element, a);
        this.J.logVisibility(this.j.Ea("ytp-autonav-endscreen-link-container"), a);
        this.J.logVisibility(this.playButton.element, a)
    };
    g.k.Tg = function(a) {
        return a.width < 400 || a.height < 459
    };
    g.z(m5, g.U);
    g.k = m5.prototype;
    g.k.create = function() {
        this.created = !0
    };
    g.k.destroy = function() {
        this.created = !1
    };
    g.k.KE = function() {
        return !1
    };
    g.k.If = function() {
        return !1
    };
    g.k.B_ = function() {
        return !1
    };
    g.z(n5, g.U);
    g.k = n5.prototype;
    g.k.VJ = function() {
        this.notification && (this.D.stop(), this.Rc(this.C), this.C = null, this.notification.close(), this.notification = null)
    };
    g.k.dJ = function(a) {
        this.suggestion = a;
        i5(this, a, "hqdefault.jpg")
    };
    g.k.FV = function() {
        g.Tx(this, this.api.If());
        this.api.logVisibility(this.element, this.api.If());
        this.api.logVisibility(this.Ea("ytp-upnext-autoplay-icon"), this.api.If());
        this.cancelButton && this.api.logVisibility(this.cancelButton.element, this.api.If())
    };
    g.k.bca = function() {
        window.focus();
        this.VJ()
    };
    g.k.bD = function(a) {
        var b = this;
        this.Pl() || (g.Pv("a11y-announce", "Up Next " + this.suggestion.title), this.B = (0, g.T)(), this.j = new g.lp(function() {
            Dib(b, a)
        }, 25), Dib(this, a), wib(this.api, Cib(this, a)));
        g.vp(this.element, "ytp-upnext-autoplay-paused")
    };
    g.k.hide = function() {
        g.U.prototype.hide.call(this)
    };
    g.k.Pl = function() {
        return !!this.j
    };
    g.k.Ty = function() {
        this.Yq();
        this.B = (0, g.T)();
        Dib(this);
        g.tp(this.element, "ytp-upnext-autoplay-paused")
    };
    g.k.Yq = function() {
        this.Pl() && (this.j.dispose(), this.j = null)
    };
    g.k.select = function(a) {
        a = a === void 0 ? !1 : a;
        if (this.api.U().L("autonav_notifications") && a && window.Notification && typeof document.hasFocus === "function") {
            var b = Notification.permission;
            b === "default" ? Notification.requestPermission() : b !== "granted" || document.hasFocus() || (this.VJ(), this.notification = new Notification("Up Next", {
                body: this.suggestion.title,
                icon: this.suggestion.nh()
            }), this.C = this.T(this.notification, "click", this.bca), this.D.start())
        }
        this.Yq();
        this.api.nextVideo(!1, a)
    };
    g.k.u5 = function(a) {
        !g.te(this.cancelButton.element, a.target) && g.FS(a, this.api) && (this.api.If() && this.api.logClick(this.Ea("ytp-upnext-autoplay-icon")), this.select())
    };
    g.k.t5 = function() {
        this.api.If() && this.cancelButton && this.api.logClick(this.cancelButton.element);
        g.IR(this.api, !0)
    };
    g.k.Sba = function(a) {
        this.api.getPresentingPlayerType();
        this.show();
        this.bD(a)
    };
    g.k.Tba = function() {
        this.api.getPresentingPlayerType();
        this.Yq();
        this.hide()
    };
    g.k.xa = function() {
        this.Yq();
        this.VJ();
        g.U.prototype.xa.call(this)
    };
    g.z(o5, m5);
    g.k = o5.prototype;
    g.k.create = function() {
        m5.prototype.create.call(this);
        this.D.T(this.player, "appresize", this.MD);
        this.D.T(this.player, "onVideoAreaChange", this.MD);
        this.D.T(this.player, "videodatachange", this.onVideoDataChange);
        this.D.T(this.player, "autonavchange", this.GV);
        this.D.T(this.player, "onAutonavCancelled", this.v5);
        this.onVideoDataChange()
    };
    g.k.show = function() {
        m5.prototype.show.call(this);
        (this.K || this.C && this.C !== this.videoData.clientPlaybackNonce) && g.IR(this.player, !1);
        g.PR(this.player) && this.KE() && !this.C ? (p5(this), this.videoData.autonavState === 2 ? this.player.getVisibilityState() === 3 ? this.j.select(!0) : this.j.bD() : this.videoData.autonavState === 3 && this.j.Ty()) : (g.IR(this.player, !0), p5(this));
        this.MD()
    };
    g.k.hide = function() {
        m5.prototype.hide.call(this);
        this.j.Ty();
        p5(this)
    };
    g.k.MD = function() {
        var a = this.player.Ao(!0, this.player.isFullscreen());
        p5(this);
        l5(this.B);
        g.xp(this.element, "ytp-autonav-cancelled-small-mode", this.Tg(a));
        g.xp(this.element, "ytp-autonav-cancelled-tiny-mode", this.tL(a));
        g.xp(this.element, "ytp-autonav-cancelled-mini-mode", a.width <= 400 || a.height <= 360);
        this.overlay && g.pm(this.overlay.element, {
            width: a.width + "px"
        });
        if (!this.G)
            for (a = 0; a < this.videos.length; a++) g.xp(this.videos[a].element, "ytp-suggestion-card-with-margin", a % 2 === 1)
    };
    g.k.onVideoDataChange = function() {
        var a = this.player.getVideoData();
        if (this.videoData !== a && a) {
            this.videoData = a;
            if ((a = this.videoData.suggestions) && a.length || this.player.L("web_player_autonav_empty_suggestions_fix")) {
                var b = g.vQ(this.videoData);
                b && (this.j.dJ(b), this.j !== this.B && this.B.dJ(b))
            }
            if (a && a.length)
                for (b = 0; b < Jib.length; ++b) {
                    var c = Jib[b];
                    if (a && a[c]) {
                        this.videos[b] = new j5(this.player);
                        var d = this.videos[b];
                        c = a[c];
                        d.suggestion !== c && (d.suggestion = c, i5(d, c));
                        g.P(this, this.videos[b]);
                        this.videos[b].Ja(this.N.element)
                    }
                }
            this.MD()
        }
    };
    g.k.GV = function(a) {
        a === 1 ? (this.K = !1, this.C = this.videoData.clientPlaybackNonce, this.j.Yq(), this.Jb && this.MD()) : (this.K = !0, this.If() && (a === 2 ? this.j.bD() : a === 3 && this.j.Ty()))
    };
    g.k.v5 = function(a) {
        a ? this.GV(1) : (this.C = null, this.K = !1)
    };
    g.k.KE = function() {
        return this.videoData.autonavState !== 1
    };
    g.k.Tg = function(a) {
        return (a.width < 910 || a.height < 459) && !this.tL(a) && !(a.width <= 400 || a.height <= 360)
    };
    g.k.tL = function(a) {
        return a.width < 800 && !(a.width <= 400 || a.height <= 360)
    };
    g.k.If = function() {
        return this.Jb && g.PR(this.player) && this.KE() && !this.C
    };
    var Jib = [1, 3, 2, 4];
    g.z(q5, g.U);
    g.k = q5.prototype;
    g.k.b3 = function() {
        switch (this.buttonType) {
            case 1:
                var a = "Watch again on YouTube";
                var b = 156915;
                break;
            case 2:
                a = "Continue watching on YouTube";
                b = 156942;
                break;
            default:
                a = "Continue watching on YouTube", b = 156942
        }
        this.update({
            content: a
        });
        this.J.hasVe(this.element) && this.J.destroyVe(this.element);
        this.J.createClientVe(this.element, this, b)
    };
    g.k.onClick = function(a) {
        this.J.L("web_player_log_click_before_generating_ve_conversion_params") && this.J.logClick(this.element);
        g.GS(this.getVideoUrl(), this.J, a);
        this.J.L("web_player_log_click_before_generating_ve_conversion_params") || this.J.logClick(this.element)
    };
    g.k.getVideoUrl = function() {
        var a = !0;
        switch (this.buttonType) {
            case 1:
                a = !0;
                break;
            case 2:
                a = !1
        }
        a = this.J.getVideoUrl(a, !1, !1, !0);
        var b = this.J.U();
        if (g.QO(b)) {
            var c = {};
            g.QO(b) && g.qR(this.J, "addEmbedsConversionTrackingParams", [c]);
            if (!this.J.L("embeds_web_enable_referring_feature_deprecation")) {
                a: {
                    switch (this.buttonType) {
                        case 2:
                            b = "emb_ytp_continue_watching";
                            break a
                    }
                    b = "emb_ytp_watch_again"
                }
                g.fL(c, b)
            }
            a = g.Yi(a, c)
        }
        return a
    };
    g.k.logVisibility = function() {
        this.J.logVisibility(this.element, this.Jb && this.Z)
    };
    g.k.show = function() {
        g.U.prototype.show.call(this);
        this.logVisibility()
    };
    g.k.hide = function() {
        g.U.prototype.hide.call(this);
        this.logVisibility()
    };
    g.k.Oc = function(a) {
        g.U.prototype.Oc.call(this, a);
        this.logVisibility()
    };
    g.z(r5, m5);
    r5.prototype.show = function() {
        this.player.getPlayerState() !== 3 && (m5.prototype.show.call(this), this.Pe.SC(!0), this.Pe.jt(!0), this.J.U().nf || this.Pe.gt(!0), this.J.logVisibility(this.element, !0), this.watchButton.Oc(!0))
    };
    r5.prototype.hide = function() {
        m5.prototype.hide.call(this);
        this.Pe.SC(!1);
        this.Pe.jt(!1);
        this.Pe.gt(!1);
        this.J.logVisibility(this.element, !1);
        this.watchButton.Oc(!1)
    };
    g.z(Eib, m5);
    Eib.prototype.Ta = function() {
        var a = this.player.getVideoData();
        this.j.update({
            profilePicture: a.profilePicture,
            author: a.author
        });
        this.subscribeButton.channelId = a.im;
        var b = this.subscribeButton;
        a.subscribed ? b.j() : b.B()
    };
    g.z(s5, g.U);
    s5.prototype.select = function() {
        this.api.Gp(this.suggestion.videoId, this.suggestion.sessionData, this.suggestion.playlistId, void 0, void 0, this.suggestion.qF || void 0) && this.api.logClick(this.element)
    };
    s5.prototype.onClick = function(a) {
        if (g.QO(this.api.U()) && this.api.L("web_player_log_click_before_generating_ve_conversion_params")) {
            this.api.logClick(this.element);
            var b = this.suggestion.Ml(),
                c = {};
            g.LR(this.api, c, "emb_rel_end");
            b = g.Yi(b, c);
            g.GS(b, this.api, a)
        } else g.FS(a, this.api, this.B, this.suggestion.sessionData || void 0) && this.select()
    };
    s5.prototype.onKeyPress = function(a) {
        switch (a.keyCode) {
            case 13:
            case 32:
                a.defaultPrevented || (this.select(), a.preventDefault())
        }
    };
    s5.prototype.onVideoDataChange = function() {
        var a = this.api.getVideoData(),
            b = this.api.U();
        this.B = a.Kf ? !1 : b.D
    };
    g.z(t5, m5);
    g.k = t5.prototype;
    g.k.create = function() {
        m5.prototype.create.call(this);
        var a = this.player.getVideoData();
        a && (this.videoData = a);
        this.Ar();
        this.B.T(this.player, "appresize", this.Ar);
        this.B.T(this.player, "onVideoAreaChange", this.Ar);
        this.B.T(this.player, "videodatachange", this.onVideoDataChange);
        this.B.T(this.player, "autonavchange", this.PN);
        this.B.T(this.player, "onAutonavCancelled", this.w5);
        a = this.videoData.autonavState;
        a !== this.Y && this.PN(a);
        this.B.T(this.element, "transitionend", this.pda)
    };
    g.k.destroy = function() {
        g.ft(this.B);
        g.ib(this.stills);
        this.stills = [];
        m5.prototype.destroy.call(this);
        g.vp(this.element, "ytp-show-tiles");
        this.K.stop();
        this.Y = this.videoData.autonavState
    };
    g.k.KE = function() {
        return this.videoData.autonavState !== 1
    };
    g.k.show = function() {
        var a = this.Jb;
        m5.prototype.show.call(this);
        g.vp(this.element, "ytp-show-tiles");
        this.player.U().B ? g.np(this.K) : this.K.start();
        (this.G || this.D && this.D !== this.videoData.clientPlaybackNonce) && g.IR(this.player, !1);
        u5(this) ? (v5(this), this.videoData.autonavState === 2 ? this.player.getVisibilityState() === 3 ? this.j.select(!0) : this.j.bD() : this.videoData.autonavState === 3 && this.j.Ty()) : (g.IR(this.player, !0), v5(this));
        a !== this.Jb && this.player.logVisibility(this.element, !0)
    };
    g.k.hide = function() {
        var a = this.Jb;
        m5.prototype.hide.call(this);
        this.j.Ty();
        v5(this);
        a !== this.Jb && this.player.logVisibility(this.element, !1)
    };
    g.k.pda = function(a) {
        a.target === this.element && this.Ar()
    };
    g.k.Ar = function() {
        var a, b, c, d;
        var e = ((a = this.videoData) == null ? 0 : (b = a.suggestions) == null ? 0 : b.length) ? (c = this.videoData) == null ? void 0 : c.suggestions : [(d = this.videoData) == null ? void 0 : g.vQ(d)];
        if (e.length) {
            g.tp(this.element, "ytp-endscreen-paginate");
            var f = this.J.Ao(!0, this.J.isFullscreen());
            if (a = g.AR(this.J)) a = a.Nh() ? 48 : 32, f.width -= a * 2;
            var h = f.width / f.height;
            d = 96 / 54;
            b = a = 2;
            var l = Math.max(f.width / 96, 2),
                m = Math.max(f.height / 54, 2);
            c = e.length;
            var n = Math.pow(2, 2);
            var p = c * n + (Math.pow(2, 2) - n);
            p += Math.pow(2, 2) -
                n;
            for (p -= n; p > 0 && (a < l || b < m);) {
                var q = a / 2,
                    r = b / 2,
                    t = a <= l - 2 && p >= r * n,
                    u = b <= m - 2 && p >= q * n;
                if ((q + 1) / r * d / h > h / (q / (r + 1) * d) && u) p -= q * n, b += 2;
                else if (t) p -= r * n, a += 2;
                else if (u) p -= q * n, b += 2;
                else break
            }
            d = !1;
            p >= 3 * n && c * n - p <= 6 && (b >= 4 || a >= 4) && (d = !0);
            n = a * 96;
            p = b * 54;
            h = n / p < h ? f.height / p : f.width / n;
            h = Math.min(h, 2);
            n = Math.floor(Math.min(f.width, n * h));
            p = Math.floor(Math.min(f.height, p * h));
            f = this.table.element;
            f.ariaLive = "polite";
            g.Fm(f, n, p);
            g.pm(f, {
                marginLeft: n / -2 + "px",
                marginTop: p / -2 + "px"
            });
            this.j.dJ(g.vQ(this.videoData));
            this.j instanceof
            k5 && l5(this.j);
            g.xp(this.element, "ytp-endscreen-takeover", u5(this));
            v5(this);
            n += 4;
            p += 4;
            h = 0;
            f.ariaBusy = "true";
            for (l = 0; l < a; l++)
                for (m = 0; m < b; m++)
                    if (q = h, t = 0, d && l >= a - 2 && m >= b - 2 ? t = 1 : m % 2 === 0 && l % 2 === 0 && (m < 2 && l < 2 ? m === 0 && l === 0 && (t = 2) : t = 2), q = g.Hd(q + this.C, c), t !== 0) {
                        r = this.stills[h];
                        r || (r = new s5(this.player), this.stills[h] = r, f.appendChild(r.element));
                        u = Math.floor(p * m / b);
                        var y = Math.floor(n * l / a),
                            A = Math.floor(p * (m + t) / b) - u - 4,
                            C = Math.floor(n * (l + t) / a) - y - 4;
                        g.wm(r.element, y, u);
                        g.Fm(r.element, C, A);
                        g.pm(r.element, "transitionDelay",
                            (m + l) / 20 + "s");
                        g.xp(r.element, "ytp-videowall-still-mini", t === 1);
                        g.xp(r.element, "ytp-videowall-still-large", t > 2);
                        t = Math.max(C, A);
                        g.xp(r.element, "ytp-videowall-still-round-large", t >= 256);
                        g.xp(r.element, "ytp-videowall-still-round-medium", t > 96 && t < 256);
                        g.xp(r.element, "ytp-videowall-still-round-small", t <= 96);
                        q = e[q];
                        r.suggestion !== q && (r.suggestion = q, t = r.api.U(), u = g.sp(r.element, "ytp-videowall-still-large") ? "hqdefault.jpg" : "mqdefault.jpg", i5(r, q, u), g.QO(t) && !r.api.L("web_player_log_click_before_generating_ve_conversion_params") &&
                            (t = q.Ml(), u = {}, g.qR(r.api, "addEmbedsConversionTrackingParams", [u]), r.api.L("embeds_web_enable_referring_feature_deprecation") || g.fL(u, "emb_rel_end"), t = g.Yi(t, u), r.updateValue("url", t)), (q = (q = q.sessionData) && q.itct) && r.api.setTrackingParams(r.element, q));
                        h++
                    }
            f.ariaBusy = "false";
            g.xp(this.element, "ytp-endscreen-paginate", h < c);
            for (e = this.stills.length - 1; e >= h; e--) a = this.stills[e], g.re(a.element), g.gb(a);
            this.stills.length = h
        }
    };
    g.k.onVideoDataChange = function() {
        var a = this.player.getVideoData(1);
        this.videoData !== a && (a != null && g.vQ(a) ? (this.C = 0, this.videoData = a, this.Ar()) : this.player.oa("missg", {
            vid: (a == null ? void 0 : a.videoId) || "",
            cpn: (a == null ? void 0 : a.clientPlaybackNonce) || ""
        }))
    };
    g.k.x5 = function() {
        this.C += this.stills.length;
        this.Ar()
    };
    g.k.y5 = function() {
        this.C -= this.stills.length;
        this.Ar()
    };
    g.k.B_ = function() {
        return this.j.Pl()
    };
    g.k.PN = function(a) {
        a === 1 ? (this.G = !1, this.D = this.videoData.clientPlaybackNonce, this.j.Yq(), this.Jb && this.Ar()) : (this.G = !0, this.Jb && u5(this) && (a === 2 ? this.j.bD() : a === 3 && this.j.Ty()))
    };
    g.k.w5 = function(a) {
        if (a) {
            for (a = 0; a < this.stills.length; a++) this.J.logVisibility(this.stills[a].element, !0);
            this.PN(1)
        } else this.D = null, this.G = !1;
        this.Ar()
    };
    g.k.If = function() {
        return this.Jb && u5(this)
    };
    g.z(w5, m5);
    w5.prototype.show = function() {
        if (this.player.getPlayerState() !== 3) {
            m5.prototype.show.call(this);
            var a = this.B;
            if (a) {
                var b = this.j.suggestionData.length > 0;
                g.xp(this.element, "ytp-shorts-branded-ui", b);
                b ? a.show() : a.hide()
            }
            var c;
            (c = g.AR(this.player)) == null || c.TC(!0);
            this.player.logVisibility(this.element, !0);
            this.watchButton.Oc(!0)
        }
    };
    w5.prototype.hide = function() {
        m5.prototype.hide.call(this);
        var a;
        (a = g.AR(this.player)) == null || a.TC(!1);
        this.player.logVisibility(this.element, !1);
        this.watchButton.Oc(!1)
    };
    g.z(Iib, g.dU);
    g.k = Iib.prototype;
    g.k.Pv = function() {
        var a = this.player.getVideoData(),
            b = a.mutedAutoplay;
        if ((this.player.md() || this.B) && !b) return !0;
        var c;
        var d = !!((a == null ? 0 : g.vQ(a)) || (a == null ? 0 : (c = a.suggestions) == null ? 0 : c.length));
        d = !Fib(this.player) || d;
        a = a.nk;
        c = this.player.EF();
        return d && !a && !c && !b
    };
    g.k.If = function() {
        return this.endScreen.If()
    };
    g.k.O$ = function() {
        return this.If() ? this.endScreen.B_() : !1
    };
    g.k.xa = function() {
        this.player.wf("endscreen");
        g.dU.prototype.xa.call(this)
    };
    g.k.load = function() {
        var a = this.player.getVideoData();
        var b = a.transitionEndpointAtEndOfStream;
        if (b && b.videoId) {
            var c = this.player.Cb().Ke.get("heartbeat"),
                d = g.vQ(a);
            !d || b.videoId !== d.videoId || a.bX ? (this.player.Gp(b.videoId, void 0, void 0, !0, !0, b), c && c.AL("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END", "HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"), a = !0) : a = !1
        } else a = !1;
        a || (g.dU.prototype.load.call(this), this.endScreen.show())
    };
    g.k.unload = function() {
        g.dU.prototype.unload.call(this);
        this.endScreen.hide();
        this.endScreen.destroy()
    };
    g.k.onCueRangeEnter = function(a) {
        this.Pv() && (this.endScreen.created || this.endScreen.create(), a.getId() === "load" && this.load())
    };
    g.k.onCueRangeExit = function(a) {
        a.getId() === "load" && this.loaded && this.unload()
    };
    g.k.onVideoDataChange = function() {
        Hib(this);
        this.D && Gib(this) && (this.endScreen && (this.endScreen.hide(), this.endScreen.created && this.endScreen.destroy(), this.endScreen.dispose()), this.j ? this.endScreen = new o5(this.player) : this.endScreen = new t5(this.player), g.P(this, this.endScreen), g.OR(this.player, this.endScreen.element, 4))
    };
    g.cU("endscreen", Iib);
})(_yt_player);