(function(g) {
    var window = this;
    /*
     SPDX-License-Identifier: Apache-2.0
    */
    /*

     Copyright 2017 Google LLC
     SPDX-License-Identifier: BSD-3-Clause
    */
    'use strict';
    var Gfb = function(a) {
            a.mutedAutoplay = !1;
            a.endSeconds = NaN;
            a.limitedPlaybackDurationInSeconds = NaN;
            g.hQ(a)
        },
        Hfb = function(a) {
            g.Yo(a);
            for (var b = 0; b < a.gg.length; b++) {
                var c = a.gg[b],
                    d = a.Xy[b];
                if (d !== c.version) return !0;
                if (!g.Vo(c) || c.Hl)
                    if (c.Hl || c.G_ !== g.$o)(c.f2(c) || Hfb(c)) && c.j2(c), c.Hl = !1, c.G_ = g.$o;
                if (d !== c.version) return !0
            }
            return !1
        },
        Ifb = function(a) {
            g.Yo(a);
            if (g.Vo(a))
                for (var b = 0; b < a.gg.length; b++) g.Wo(a.gg[b], a.pn[b]);
            a.gg.length = a.Xy.length = a.pn.length = 0;
            a.mj && (a.mj.length = a.bv.length = 0)
        },
        Jfb = function(a, b, c) {
            function d(f) {
                e.fA = f
            }
            var e = Object.create(g.e$a);
            c && (e.du = !0);
            e.Nm = a;
            e.schedule = b;
            a = {};
            e.CC = (a.notify = function() {
                return g.Wka(e)
            }, a.Ws = function() {
                if (e.Nm !== null) {
                    if (g.Qo) throw Error("Schedulers cannot synchronously execute watches while scheduling.");
                    e.Hl = !1;
                    if (!e.hG || Hfb(e)) {
                        e.hG = !0;
                        var f = g.Uo(e);
                        try {
                            e.fA(), e.fA = g.ap, e.Nm(d)
                        } finally {
                            g.Xo(e, f)
                        }
                    }
                }
            }, a.wna = function() {
                return e.fA()
            }, a.destroy = function() {
                if (e.Nm !== null || e.schedule !== null) Ifb(e), e.fA(), e.Nm = null, e.schedule = null, e.fA = g.ap
            }, a[g.Zo] = e, a);
            return e.CC
        },
        X3 = function(a, b) {
            a = g.Po(a);
            try {
                return b()
            } finally {
                g.Po(a)
            }
        },
        Kfb = function() {
            return {
                I: "svg",
                X: {
                    height: "100%",
                    version: "1.1",
                    viewBox: "0 0 110 26",
                    width: "100%"
                },
                V: [{
                    I: "path",
                    Ic: !0,
                    S: "ytp-svg-fill",
                    X: {
                        d: "M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"
                    }
                }]
            }
        },
        Lfb = function() {
            return {
                I: "svg",
                X: {
                    fill: "none",
                    height: "100%",
                    viewBox: "0 0 143 51",
                    width: "100%"
                },
                V: [{
                    I: "path",
                    X: {
                        d: "M58.37 41.39H62.79V27.23C62.79 23.03 62.69 18.69 62.43 13.59H62.93L63.69 16.89L68.67 41.39H73.17L78.07 16.89L78.89 13.59H79.37C79.15 18.45 79.03 22.89 79.03 27.23V41.39H83.45V8.79H75.95L73.41 20.81C72.35 25.85 71.51 32.01 71.01 35.19H70.73C70.33 31.95 69.49 25.81 68.41 20.85L65.81 8.79H58.37V41.39Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    X: {
                        d: "M91.45 41.73C93.91 41.73 95.83 40.59 97.17 38.13H97.35L97.69 41.39H101.43V17.73H96.47V36.61C95.91 37.67 94.81 38.29 93.73 38.29C92.33 38.29 91.89 37.17 91.89 35.13V17.73H86.93V35.43C86.93 39.49 88.19 41.73 91.45 41.73Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    X: {
                        d: "M110.79 41.89C115.15 41.89 117.75 39.83 117.75 35.65C117.75 31.79 115.93 30.39 111.85 27.47C109.67 25.91 108.39 25.09 108.39 22.95C108.39 21.47 109.27 20.61 110.89 20.61C112.69 20.61 113.33 21.81 113.33 25.29L117.45 25.07C117.77 19.57 115.71 17.23 110.97 17.23C106.57 17.23 104.17 19.27 104.17 23.45C104.17 27.25 105.97 28.83 108.93 31.03C111.89 33.23 113.55 34.53 113.55 36.23C113.55 37.75 112.51 38.61 111.01 38.61C109.13 38.61 108.11 36.97 108.29 34.41L104.21 34.49C103.51 39.25 105.89 41.89 110.79 41.89Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    X: {
                        d: "M122.5 14.59C124.22 14.59 125.04 13.99 125.04 11.59C125.04 9.33 124.16 8.65 122.5 8.65C120.84 8.65 119.94 9.27 119.94 11.59C119.94 13.99 120.82 14.59 122.5 14.59ZM120.2 41.39H125V17.73H120.2V41.39Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    X: {
                        d: "M134.95 41.79C137.31 41.79 138.63 41.49 139.71 40.47C141.31 39.01 141.97 36.63 141.85 33.11L137.41 32.87C137.41 36.87 136.81 38.45 135.03 38.45C133.13 38.45 132.77 36.45 132.77 31.97V27.21C132.77 22.41 133.23 20.51 135.07 20.51C136.67 20.51 137.29 22.01 137.29 26.47L141.65 26.15C141.97 22.93 141.59 20.29 140.09 18.83C139.01 17.77 137.37 17.29 135.15 17.29C129.65 17.29 127.75 20.73 127.75 28.03V31.17C127.75 38.47 129.23 41.79 134.95 41.79Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    X: {
                        "clip-rule": "evenodd",
                        d: "M24.99 49C29.74 49.00 34.38 47.59 38.32 44.95C42.27 42.32 45.35 38.57 47.17 34.18C48.98 29.80 49.46 24.97 48.53 20.32C47.61 15.66 45.32 11.38 41.97 8.03C38.61 4.67 34.33 2.38 29.68 1.46C25.02 .53 20.20 1.01 15.81 2.82C11.43 4.64 7.68 7.71 5.04 11.66C2.40 15.61 1 20.25 1 25C0.99 28.15 1.61 31.27 2.82 34.18C4.03 37.09 5.79 39.74 8.02 41.97C10.25 44.19 12.89 45.96 15.81 47.17C18.72 48.37 21.84 49 24.99 49ZM24.99 12.36C27.49 12.36 29.94 13.10 32.02 14.48C34.10 15.87 35.72 17.84 36.68 20.15C37.64 22.46 37.89 25.01 37.41 27.46C36.92 29.91 35.72 32.17 33.95 33.94C32.18 35.70 29.93 36.91 27.48 37.40C25.02 37.89 22.48 37.64 20.17 36.68C17.86 35.72 15.88 34.10 14.50 32.02C13.11 29.94 12.37 27.50 12.37 25C12.37 21.65 13.70 18.44 16.07 16.07C18.43 13.70 21.64 12.37 24.99 12.36ZM24.99 10.43C22.11 10.43 19.29 11.28 16.89 12.88C14.50 14.48 12.63 16.76 11.53 19.42C10.42 22.09 10.13 25.02 10.70 27.85C11.26 30.67 12.65 33.27 14.69 35.31C16.73 37.35 19.32 38.73 22.15 39.30C24.98 39.86 27.91 39.57 30.57 38.46C33.23 37.36 35.51 35.49 37.11 33.09C38.71 30.70 39.57 27.88 39.56 25C39.56 23.08 39.19 21.19 38.46 19.42C37.72 17.65 36.65 16.04 35.30 14.69C33.94 13.34 32.34 12.27 30.57 11.53C28.80 10.80 26.90 10.43 24.99 10.43ZM32.63 24.99L20.36 32.09V17.91L32.63 24.99Z",
                        fill: "white",
                        "fill-rule": "evenodd"
                    }
                }]
            }
        },
        Mfb = function() {},
        Y3 = function(a, b) {
            for (; a.length > b;) a.pop()
        },
        Nfb = function(a) {
            a = Array(a);
            Y3(a, 0);
            return a
        },
        Ofb = function(a, b, c) {
            if (c == null) a.removeAttribute(b);
            else {
                var d = b.lastIndexOf("xml:", 0) === 0 ? "http://www.w3.org/XML/1998/namespace" : b.lastIndexOf("xlink:", 0) === 0 ? "http://www.w3.org/1999/xlink" : null;
                d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)
            }
        },
        Qfb = function(a, b, c) {
            a = a.style;
            if (typeof c === "string") a.cssText = c;
            else {
                a.cssText = "";
                for (var d in c)
                    if (Pfb.call(c, d)) {
                        b = a;
                        var e = d,
                            f = c[d];
                        e.indexOf("-") >= 0 ? b.setProperty(e, f) : b[e] = f
                    }
            }
        },
        Rfb = function(a, b, c) {
            var d = typeof c;
            d === "object" || d === "function" ? a[b] = c : Ofb(a, b, c)
        },
        Sfb = function() {
            var a = new Mfb;
            a.__default = Rfb;
            a.style = Qfb;
            return a
        },
        Tfb = function(a, b, c, d) {
            (d[b] || d.__default)(a, b, c)
        },
        Ufb = function(a) {
            this.created = [];
            this.j = [];
            this.node = a
        },
        Vfb = function(a, b) {
            this.j = null;
            this.B = a;
            this.key = b;
            this.text = void 0
        },
        Wfb = function(a, b, c) {
            b = new Vfb(b, c);
            return a.__incrementalDOMData = b
        },
        Z3 = function(a, b) {
            if (a.__incrementalDOMData) return a.__incrementalDOMData;
            var c = a.nodeType === 1 ? a.localName : a.nodeName,
                d = a.nodeType === 1 ? a.getAttribute("key") : null;
            b = Wfb(a, c, a.nodeType === 1 ? d || b : null);
            if (a.nodeType === 1 && (a = a.attributes, c = a.length)) {
                d = b.j || (b.j = Nfb(c * 2));
                for (var e = 0, f = 0; e < c; e += 1, f += 2) {
                    var h = a[e],
                        l = h.value;
                    d[f] = h.name;
                    d[f + 1] = l
                }
            }
            return b
        },
        Xfb = function(a, b, c, d, e) {
            return b == c && d == e
        },
        c4 = function(a) {
            for (var b = $3, c = a4(); c !== a;) {
                var d = c.nextSibling;
                b.removeChild(c);
                b4.j.push(c);
                c = d
            }
        },
        a4 = function() {
            return d4 ? d4.nextSibling : $3.firstChild
        },
        Yfb = function(a, b) {
            d4 = a4();
            var c;
            a: {
                if (c = d4) {
                    do {
                        var d = c,
                            e = a,
                            f = b,
                            h = Z3(d, f);
                        if (e4(d, e, h.B, f, h.key)) break a
                    } while (b && (c = c.nextSibling))
                }
                c = null
            }
            c || (a === "#text" ? (a = f4.createTextNode(""), Wfb(a, "#text", null)) : (c = f4, d = $3, typeof a === "function" ? c = new a : c = (d = a === "svg" ? "http://www.w3.org/2000/svg" : a === "math" ? "http://www.w3.org/1998/Math/MathML" : d == null || Z3(d).B === "foreignObject" ? null : d.namespaceURI) ? c.createElementNS(d, a) : c.createElement(a), Wfb(c, a, b), a = c), b4.created.push(a), c = a);
            a = c;
            if (a !== d4) {
                if (g4.indexOf(a) >= 0)
                    for (b = $3, c = a.nextSibling,
                        d = d4; d !== null && d !== a;) e = d.nextSibling, b.insertBefore(d, c), d = e;
                else $3.insertBefore(a, d4);
                d4 = a
            }
        },
        Zfb = function(a, b) {
            Yfb(a, b);
            $3 = d4;
            d4 = null;
            return $3
        },
        agb = function(a, b) {
            b = b === void 0 ? {} : b;
            var c = b.matches === void 0 ? Xfb : b.matches;
            return function(d, e, f) {
                var h = b4,
                    l = f4,
                    m = g4,
                    n = h4,
                    p = d4,
                    q = $3,
                    r = e4;
                f4 = d.ownerDocument;
                b4 = new Ufb(d);
                e4 = c;
                h4 = [];
                d4 = null;
                var t = $3 = d.parentNode,
                    u, y = $fb.call(d);
                if ((u = y.nodeType === 11 || y.nodeType === 9 ? y.activeElement : null) && d.contains(u)) {
                    for (y = []; u !== t;) y.push(u), u = u.parentNode || (t ? u.host : null);
                    t = y
                } else t = [];
                g4 = t;
                try {
                    return a(d, e, f)
                } finally {
                    d = b4, i4 && d.j.length > 0 && i4(d.j), f4 = l, b4 = h, e4 = r, h4 = n, d4 = p, $3 = q, g4 = m
                }
            }
        },
        bgb = function(a, b, c, d) {
            j4.push(Tfb);
            j4.push(a);
            j4.push(b);
            j4.push(c);
            j4.push(d)
        },
        cgb = function(a) {
            Yfb("#text", null);
            var b = d4;
            var c = Z3(b);
            if (c.text !== a) {
                c = c.text = a;
                for (var d = 1; d < arguments.length; d += 1) c = (0, arguments[d])(c);
                b.data !== c && (b.data = c)
            }
        },
        l4 = function(a, b) {
            return [b === void 0 ? "unknown" : b,
                a, {
                    VE: k4.slice(),
                    CA: 3
                }
            ]
        },
        dgb = function(a) {
            var b = a.component;
            var c = a.debugInstance;
            a = a.Nm;
            var d, e = (d = b.tY) != null ? d : b.name;
            k4.push({
                name: c ? e + " (" + c + ")" : e,
                sB: !!b.sB
            });
            b = a();
            k4.pop();
            return b
        },
        m4 = function() {
            var a = k4[k4.length - 1];
            return a ? a.sB || !1 : !1
        },
        n4 = function(a, b) {
            b = b === void 0 ? {} : b;
            var c = k4.length;
            b.stack && (k4 = [].concat(g.x(b.stack)));
            try {
                return a()
            } catch (d) {
                throw egb(d), d;
            } finally {
                a = k4.length - c, a > 0 && k4.splice(-a)
            }
        },
        egb = function(a) {
            var b = k4;
            if (b.length !== 0 && !a.VE) {
                var c = b.slice(-20).reverse().map(function(d) {
                    return d.name
                }).join(" > ");
                c = a.message + "\n\nComponent stack: " + c;
                try {
                    a.VE = b.slice(), o4.S8 && (a.stack && (a.stack = a.stack.replace(a.message, c)), a.message = c)
                } catch (d) {}
            }
        },
        q4 = function(a) {
            var b = p4;
            if (b && b !== fgb && !b[ggb]) {
                var c = k4.slice();
                b.jF || (b.jF = []);
                b.jF.push(function() {
                    return void n4(function() {
                        return void a()
                    }, {
                        stack: c
                    })
                })
            }
        },
        igb = function(a) {
            var b = p4;
            b && !b.Ka && (q4(function() {
                return void hgb(a)
            }), a.parent = b)
        },
        jgb = function(a) {
            a.jF && (X3(g.f$a, function() {
                for (var b = g.v(a.jF), c = b.next(); !c.done; c = b.next()) c = c.value, c()
            }), a.jF.length = 0)
        },
        hgb = function(a) {
            if (!a.Ka) {
                a.Ka = !0;
                var b;
                (b = a[Symbol.dispose]) == null || b.call(a);
                delete a.parent;
                jgb(a)
            }
        },
        kgb = function(a) {
            if (o4.mD)
                for (var b = g.v(a), c = b.next(); !c.done; c = b.next()) {
                    c = c.value;
                    for (var d = [c]; c.parent !== void 0;) c = c.parent, a.has(c) && (a.delete(c), d.push(c));
                    for (; d.length > 0;) r4(d.pop())
                } else
                    for (b = g.v(a), c = b.next(); !c.done; c = b.next()) c = c.value, a.delete(c), r4(c)
        },
        lgb = function() {
            var a;
            g.J(function(b) {
                if (b.j == 1) return a = s4, s4 = new Set, g.G(b, Promise.resolve(), 2);
                kgb(a);
                g.va(b)
            })
        },
        mgb = function() {
            Ifb(this);
            t4.delete(this);
            s4.delete(this);
            hgb(this)
        },
        ngb = function(a) {
            a.Ka || t4.add(a)
        },
        ogb = function(a) {
            return g.J(function(b) {
                if (b.j == 1) return a.Ka ? b.return() : o4.mD ? (s4.add(a), b.Ga(0)) : g.G(b, Promise.resolve(), 3);
                r4(a);
                g.va(b)
            })
        },
        r4 = function(a) {
            if (a.ET !== null && !a.Ka) {
                if (g.Qo) throw Error("Schedulers cannot synchronously execute effects while scheduling.");
                a.Hl = !1;
                if (!a.hG || Hfb(a)) {
                    a.hG = !0;
                    pgb++;
                    jgb(a);
                    var b = p4;
                    p4 = a;
                    var c = g.Uo(a);
                    try {
                        n4(a.ET, {
                            stack: a.VE
                        })
                    } finally {
                        g.Xo(a, c), p4 = b
                    }
                }
            }
        },
        u4 = function(a, b) {
            var c = p4;
            p4 = a;
            try {
                return b()
            } finally {
                p4 = c
            }
        },
        qgb = function(a) {
            if (o4.mD)
                for (var b = g.v(a), c = b.next(); !c.done; c = b.next()) {
                    var d = c.value;
                    for (c = [d]; d.parent !== void 0;) d = d.parent, a.has(d) && (a.delete(d), c.push(d));
                    for (; c.length > 0;) d = void 0, (d = c.pop()) == null || d.Ws()
                } else
                    for (b = g.v(a), c = b.next(); !c.done; c = b.next()) c = c.value, a.delete(c), c.Ws()
        },
        rgb = function() {
            var a;
            g.J(function(b) {
                if (b.j == 1) return a = v4, v4 = new Set, g.G(b, Promise.resolve(), 2);
                qgb(a);
                g.va(b)
            })
        },
        sgb = function(a) {
            a.Ka || w4.add(a)
        },
        tgb = function(a) {
            return g.J(function(b) {
                if (b.j == 1) return a.Ka ? b.return() : o4.mD ? (v4.add(a), b.Ga(0)) : g.G(b, Promise.resolve(), 3);
                a.Ws();
                g.va(b)
            })
        },
        vgb = function(a, b, c) {
            function d() {
                return void n4(b, {
                    stack: e
                })
            }
            ugb++;
            var e = k4.slice(),
                f = Jfb(function() {
                    f.Ka || (pgb++, jgb(f), u4(f, d))
                }, function() {
                    return void a(f)
                }, c === void 0 ? !1 : c);
            f.A_ = !0;
            igb(f);
            f[Symbol.dispose] = function() {
                f.destroy();
                w4.delete(f);
                v4.delete(f)
            };
            return f
        },
        wgb = function(a, b, c, d, e) {
            o4.iV ? (ugb++, b = Object.create(b), b.VE = k4.slice(), b.ET = a, b.tY = e != null ? e : "[reaction]", igb(b), a = b) : a = vgb(c, a, d);
            return a
        },
        xgb = function(a) {
            o4.iV ? r4(a) : a.Ws()
        },
        ygb = function(a) {
            g.J(function(b) {
                if (b.j == 1) return o4.mD ? g.G(b, Promise.resolve(), 3) : (o4.iV ? ogb(a) : tgb(a), b.Ga(0));
                xgb(a);
                g.va(b)
            })
        },
        x4 = function(a) {
            var b = !!p4,
                c = {};
            (b === void 0 || b) && igb(c);
            u4(c, function() {
                return void a(c)
            });
            return function() {
                return void hgb(c)
            }
        },
        Agb = function(a) {
            a = wgb(a, zgb, tgb, !1);
            ygb(a)
        },
        Cgb = function(a, b) {
            a = wgb(a, Bgb, sgb, !1, b);
            xgb(a)
        },
        Egb = function(a, b) {
            a = wgb(a, Dgb, sgb, !0, b);
            xgb(a)
        },
        Hgb = function(a, b, c) {
            if (Object.hasOwnProperty.call(Fgb, a) && (a = Fgb[a], Object.hasOwnProperty.call(a, b) && (a = a[b], a instanceof Array))) {
                for (var d = null, e = !1, f = 0, h = a.length; f < h; ++f) {
                    var l = a[f],
                        m = l.Mi;
                    if (!m) return l.Ed;
                    d === null && (d = {});
                    m = Object.hasOwnProperty.call(d, m) ? d[m] : d[m] = c(m);
                    if (m === l.Vi) return l.Ed;
                    m == null && (e = !0)
                }
                if (e) return null
            }
            b = Ggb[b];
            return typeof b === "number" ? b : null
        },
        Jgb = function(a, b, c) {
            if (c === null || c === void 0) return c;
            var d = Hgb(a.tagName.toLowerCase(), b, function() {
                var h;
                (h = o4.handleError) == null || h.call.apply(h, [o4].concat(g.x(l4(Error("Contingent attribute/property lookups are not supported."), a.tagName.toLowerCase()))))
            });
            if (d === null) return c;
            d = Igb[d];
            var e;
            if ((e = d.Wu) == null ? 0 : e.call(d, c)) {
                if (d.Et) return d.Et(c);
                var f;
                (f = o4.handleError) == null || f.call.apply(f, [o4].concat(g.x(l4(Error("Value Handler's unwrap function does not exist."), a.tagName.toLowerCase()))))
            }
            return d.Qr ? d.Qr(a.tagName, b, String(c)) : c
        },
        Lgb = function(a) {
            function b(d, e, f) {
                g.Gl(d, Kgb);
                for (var h = Math.min(e.length - f, d.length), l = 0; l < h; l++)
                    if (d[l] !== Kgb(e[f + l])) return !1;
                return !0
            }
            a = String(a);
            for (var c = 0;
                (c = a.indexOf("<", c)) != -1;) {
                if (b("\x3c/script", a, c) || b("\x3c!--", a, c)) return "zSoyz";
                c += 1
            }
            return a
        },
        Kgb = function(a) {
            return "A" <= a && a <= "Z" ? a.toLowerCase() : a
        },
        y4 = function(a, b, c) {
            if (c === !1 && Mgb.has(b)) Ofb(a, b, null);
            else if (b !== "idomKey" && b !== "skip" && b !== "skipchildren" && b !== "children" && b !== "el") {
                if (b.startsWith("on"))
                    if (b[2] === ":") {
                        if (c === void 0 || c === null) {
                            var d;
                            (d = o4.handleError) == null || d.call.apply(d, [o4].concat(g.x(l4(Error("The " + b + " attribute was set to undefined or null. This is not supported and may lead to unexpected behavior if an event handler is being conditionally set."), a.tagName))));
                            a[b] = void 0;
                            return
                        }
                        if (typeof c !== "object" || c === null) throw Error("Expected " + b + " to be an EventHandler but its type was: " +
                            (typeof c + ". Event handlers must be created using useHandler."));
                        if (typeof c.eZ !== "function") throw Error("Expected the event handler for " + b + " to have a 'getFn' property but its keys were: " + (Object.keys(c) + ". Event handlers must be created using useHandler."));
                        var e = c.eZ(0),
                            f = b.slice(3);
                        if ((d = m4()) && a["on" + f] === void 0) a.addEventListener(f, e), q4(function() {
                            return void a.removeEventListener(f, e)
                        });
                        else if (d || !Ngb.includes(f)) a["on" + f] = e
                    } else {
                        Ogb(a, b, c);
                        return
                    }
                else if (b.startsWith("data-") && typeof c === "string") try {
                    c = Lgb(c)
                } catch (h) {
                    c = "zSoyz"
                }
                typeof c !== "function" || a._disposeEffects != null ? (o4.Q8 && (c = Jgb(a, b, c)), b === "style" ? Pgb(a, b, c) : b.startsWith("prop:") ? a[b.slice(5)] = c : Ogb(a, b, c)) : (a._signalProps || (a._signalProps = []), a._signalValues || (a._signalValues = []), a._signalProps.push(b))
            }
        },
        Qgb = function(a, b, c) {
            c = (c === void 0 ? {} : c).sB;
            if (b == null ? 0 : b.el) {
                var d = b.el;
                if (typeof d === "function") d(a);
                else {
                    var e;
                    (e = d.Bca) == null || e.call(d, a);
                    a._disposeRef || (a._disposeRef = function() {
                        var f;
                        (f = d.rda) == null || f.call(d);
                        delete a._disposeRef
                    }, c && q4(function() {
                        var f;
                        return void((f = a._disposeRef) == null ? void 0 : f.call(a))
                    }))
                }
            }
        },
        Rgb = function(a, b) {
            var c = g.Da.apply(2, arguments),
                d;
            b = (d = b) != null ? d : {};
            d = {};
            return d.type = a, d.props = b, d.children = c, d[z4] = !0, d
        },
        A4 = function(a) {
            return a.children
        },
        C4 = function(a, b) {
            var c = B4;
            B4 = a;
            try {
                return b()
            } finally {
                B4 = c
            }
        },
        D4 = function() {
            return document.createTextNode("")
        },
        E4 = function(a) {
            a = document.createTextNode(String(a));
            a._isSignalTextNode = !0;
            return a
        },
        F4 = function(a) {
            a = typeof a;
            return a === "string" || a === "number" || a === "boolean"
        },
        G4 = function(a) {
            return a instanceof g.kd || a instanceof g.nd || a instanceof g.wd || !1
        },
        Sgb = function(a, b) {
            a.parentElement && a.parentElement.replaceChild(b, a);
            return b
        },
        Tgb = function(a, b) {
            a.textContent !== String(b) && (a.textContent = String(b));
            return a
        },
        H4 = function(a, b) {
            var c = a[0].parentElement;
            if (c)
                if (a[0].previousSibling || a[a.length - 1].nextSibling) {
                    c.insertBefore(b, a[0]);
                    for (var d = a.length - 1; d >= 0; d--) c.removeChild(a[d])
                } else c.textContent = "", c.appendChild(b);
            return b
        },
        Ugb = function(a, b) {
            if (a[0].parentElement)
                for (var c = a[0].parentElement, d = b.length, e = a.length, f = d, h = 0, l = 0, m = a[e - 1].nextSibling, n = null; h < e || l < f;)
                    if (a[h] === b[l]) h++, l++;
                    else {
                        for (; a[e - 1] === b[f - 1];) e--, f--;
                        if (e === h)
                            for (var p = f < d ? l ? b[l - 1].nextSibling : b[f - l] : m; l < f;) c.insertBefore(b[l++], p);
                        else if (f === l)
                            for (; h < e;) p = a[h], n && n.has(p) || c.removeChild(p), h++;
                        else if (a[h] === b[f - 1] && b[l] === a[e - 1]) p = a[--e].nextSibling, c.insertBefore(b[l++], a[h++].nextSibling), c.insertBefore(b[--f], p), a[e] = b[f];
                        else {
                            if (!n)
                                for (n = new Map, p = l; p < f;) n.set(b[p], p++);
                            p = n.get(a[h]);
                            if (p == null) c.removeChild(a[h]), h++;
                            else if (l < p && p < f) {
                                for (var q = h, r = 1, t = void 0; ++q < e && q < f && (t = n.get(a[q])) != null && t === p +
                                    r;) r++;
                                if (r > p - l)
                                    for (q = a[h]; l < p;) c.insertBefore(b[l++], q);
                                else c.replaceChild(b[l++], a[h++])
                            } else h++
                        }
                    }
            return b
        },
        I4 = function(a) {
            return g.Sa(a) ? "nodeType" in a : !1
        },
        Xgb = function(a) {
            var b = {}.pna;
            var c = Vgb();
            (b ? Egb : Cgb)(function() {
                var d = c[0],
                    e = c.Mm,
                    f = C4(J4, a);
                d = Wgb(d, f, c);
                Array.isArray(d) || (c.Mm = [d]);
                f = c.Mm;
                if (e && (!Array.isArray(e) || e.length !== 0)) {
                    e = Array.isArray(e) ? e[0] : e;
                    var h = e[K4],
                        l = e._disposeEffects;
                    e._disposeEffects = void 0;
                    e = Array.isArray(f) ? f[0] : f;
                    e[K4] = h;
                    e[K4] && (e[K4].H0 = e === f ? 1 : f.length);
                    e._disposeEffects = l
                }
                c[0] = d
            });
            return c
        },
        Wgb = function(a, b, c) {
            for (; typeof b === "function";) b = b();
            if (b != null && b[z4]) {
                var d, e, f;
                (f = o4.handleError) == null || f.call.apply(f, [o4].concat(g.x(l4(Error("Encountered a VNode when only real nodes are expected. Tag name: " + ((d = b.type) == null ? void 0 : d.Pt)), (e = b.type) == null ? void 0 : e.Pt))))
            }
            if (a == null) return b == null ? D4() : F4(b) ? E4(b) : G4(b) ? E4(b.toString()) : I4(b) ? b : b.length === 0 ? D4() : L4(b, c);
            if (I4(a)) {
                if (b == null) return Sgb(a, D4());
                if (F4(b)) return Tgb(a, b);
                if (G4(b)) return Tgb(a, b.toString());
                if (I4(b)) return Sgb(a, b);
                if (b.length === 0) return Sgb(a, D4());
                b = L4(b, c);
                Ugb([a],
                    c.Mm);
                return b
            }
            a = M4(a);
            if (b == null) return H4(a, D4());
            if (F4(b)) return H4(a, E4(b));
            if (G4(b)) return H4(a, E4(b.toString()));
            if (I4(b)) return Ugb(a, [b])[0];
            if (b.length === 0) return H4(a, D4());
            b = L4(b, c);
            Ugb(a, c.Mm);
            return b
        },
        M4 = function(a, b, c) {
            return Ygb(a, b != null ? b : [], c === void 0 ? !1 : c)
        },
        L4 = function(a, b) {
            var c = M4(a, void 0, !0);
            if (c.length === 0) return D4();
            b.Mm = c;
            return a
        },
        Ygb = function(a, b, c, d, e) {
            b = b === void 0 ? [] : b;
            c = c === void 0 ? !1 : c;
            e = e === void 0 ? -1 : e;
            if (a == null) return b;
            F4(a) && (a = E4(a), d && c && (d[e] = a));
            G4(a) && (a = E4(a.toString()), d && c && (d[e] = a));
            if (I4(a)) return Zgb(b, a);
            if (Array.isArray(a)) {
                for (d = 0; d < a.length; d++) Ygb(a[d], b, c, a, d);
                return b
            }
            if (typeof a === "function") return a = Xgb(a)[0], d && c && (d[e] = a), Zgb(b, a);
            if (a != null && a[z4]) {
                var f = a;
                a = C4(J4, function() {
                    return B4.apply(null, [f.type, f.props].concat(g.x(f.children)))
                });
                return Ygb(a, b, c)
            }
            var h;
            (h = o4.handleError) == null || h.call.apply(h, [o4].concat(g.x(l4(Error("Unrecognized JSXResult type in flattening.")))));
            return b
        },
        Vgb = function(a) {
            var b = [];
            if (!a) return b.Mm = [], b;
            b[0] = L4(a, b);
            return b
        },
        Zgb = function(a, b) {
            Array.isArray(a) ? a.push(b) : a.appendChild(b);
            return a
        },
        $gb = function(a, b) {
            var c, d, e = x4(function(n) {
                d = n;
                c = C4(J4, function() {
                    return X3(g.g$a, function() {
                        return a(b)
                    })
                })
            });
            c != null && c.Mm || !Array.isArray(c) || (c = Vgb(c));
            var f = c != null && c.Mm ? c.Mm : c;
            var h = Array.isArray(f) ? f[0] : f;
            if (h) {
                var l, m = (l = b == null ? void 0 : b.idomKey) != null ? l : a;
                l = a.l4;
                h._disposeEffects = e;
                e = h[K4] || {};
                Object.assign(e, {
                    key: m,
                    props: l ? b : void 0,
                    H0: f !== h ? f.length : 1,
                    context: d,
                    G$: !!h[K4],
                    r3: c != null && c.Mm ? c : e.r3
                });
                h[K4] = e
            } else e();
            u4(d, function() {});
            return c
        },
        N4 = function(a) {
            this.props = a;
            this.C = !1
        },
        ahb = function() {
            if (m4()) throw Error("Reactive components are not allowed to use useState or other memoization based hooks.");
            return O4
        },
        P4 = function(a) {
            N4.call(this, a);
            var b = this;
            this.cB = [];
            this.D = 0;
            this.G = x4(function(c) {
                b.gK = c;
                q4(function() {
                    bhb(b, b.el)
                })
            })
        },
        bhb = function(a, b) {
            if (!a.C && b) {
                a.C = !0;
                try {
                    a.dK()
                } catch (e) {
                    var c, d;
                    (d = o4.handleError) == null || d.call.apply(d, [o4].concat(g.x(l4(e, (c = a.j) == null ? void 0 : c.Pt))))
                }
                Q4.dK(a);
                a.el = null;
                b.__instance && delete b.__instance
            }
        },
        chb = function(a, b) {
            a._disposeEffects == null && a._signalProps != null && (a._disposeEffects = x4(function() {
                Cgb(function() {
                    for (var c = a._signalProps, d = a._signalValues, e = 0; e < c.length; e++) {
                        var f = c[e],
                            h = b[f]();
                        d[e] !== h && (d[e] = h, y4(a, f, h))
                    }
                })
            }))
        },
        dhb = function(a, b) {
            a._disposeEffects = x4(function() {
                a._isSignalTextNode = !0;
                Cgb(function() {
                    var c = b();
                    c == null && (c = "");
                    var d = typeof c;
                    if (d === "object" || d === "function") throw Error("Invalid text node kind: " + d + ". Text nodes must be primitives like numbers, strings, or null, but an object type was passed. See go/cow-errors#invalid-text-nodes for more information.");
                    a.textContent = String(c)
                })
            })
        },
        ghb = function(a, b) {
            var c = g.Da.apply(2, arguments);
            b != null || (b = {});
            if (a === A4) return c;
            if (typeof a === "function") return dgb({
                component: a,
                debugInstance: b.debugInstance,
                Nm: function() {
                    c.length > 0 && (b.children = c.length === 1 ? c[0] : c);
                    var f = ehb(a, b);
                    return f === !1 ? fhb(a, b) : f
                }
            });
            var d = document.createElement(a),
                e;
            for (e in b) y4(d, e, b[e]);
            chb(d, b);
            M4(c, d);
            Qgb(d, b, {
                sB: !0
            });
            return d
        },
        ehb = function(a, b) {
            if (a.sB) return !1;
            b || (b = {});
            var c = new P4(b);
            c.B = a;
            var d = X3(g.g$a, function() {
                return c.iz(b)
            });
            if (!(d instanceof HTMLElement)) return d;
            d.__instance = c;
            c.el = d;
            c.j = a;
            a.Pt = d.tagName.toLowerCase();
            Q4.fF(c);
            return d
        },
        hhb = function(a) {
            if (a) {
                var b;
                (b = a._disposeRef) == null || b.call(a);
                var c;
                (c = a._disposeEffects) == null || c.call(a);
                a.__instance && a.__instance instanceof N4 && (b = a.__instance, bhb(b, a), b instanceof P4 && b.G());
                for (b = 0; b < a.childNodes.length; b++) hhb(a.childNodes[b])
            }
        },
        jhb = function(a) {
            ihb.push(a) === 1 && requestAnimationFrame(function() {
                setTimeout(function() {
                    var b = [].concat(g.x(ihb));
                    ihb = [];
                    b = g.v(b);
                    for (var c = b.next(); !c.done; c = b.next()) {
                        c = c.value;
                        try {
                            for (var d = 0; d < c.length; d++) hhb(c[d])
                        } catch (e) {
                            d = c = void 0, (d = (c = o4).handleError) == null || d.call.apply(d, [c].concat(g.x(l4(e))))
                        }
                    }
                })
            })
        },
        R4 = function(a, b) {
            return B4.apply(null, [a,
                b
            ].concat(g.x(g.Da.apply(2, arguments))))
        },
        khb = function(a) {
            var b = null,
                c;
            return {
                value: null,
                Bca: function(d) {
                    if (c && d !== c) {
                        var e;
                        (e = b) == null || e();
                        c._disposeRef = void 0
                    }
                    c = d;
                    b = a(d) || null
                },
                rda: function() {
                    var d;
                    (d = b) == null || d()
                }
            }
        },
        lhb = function(a) {
            var b = ahb();
            if (b == null) throw Error("A valid hook context was not found. Please ensure you are using components from TSX and not invoking the component function directly");
            var c = b.D++;
            b.cB || (b.cB = []);
            var d = b.cB;
            d[c] || (d[c] = {
                key: a,
                host: b
            });
            if (a !== d[c].key) {
                var e, f;
                a = ((e = b.j) == null ? void 0 : e.name) || ((f = b.B) == null ? void 0 : f.name);
                throw Error("Hook called out of order in " + a + ". Hooks must be invoked unconditionally and in the same order every render. This could happen if you conditionally invoke a hook.");
            }
            return d[c]
        },
        mhb = function(a, b) {
            return !a || a.length !== (b == null ? void 0 : b.length) || a.some(function(c, d) {
                return c !== b[d]
            })
        },
        nhb = function(a, b) {
            var c = lhb("onChange"),
                d = ahb();
            mhb(c.jh, b) && (c.jh = b, c.K1 = a, d.Vz || (d.Vz = []), d.Vz.push(c))
        },
        ohb = function(a) {
            Agb(function() {
                X3(null, a)
            })
        },
        S4 = function(a, b) {
            nhb(function() {
                return X3(null, a)
            }, b)
        },
        phb = function(a) {
            m4() ? ohb(function() {
                X3(null, a)
            }) : nhb(function() {
                return X3(null, a)
            }, [])
        },
        rhb = function(a) {
            var b = [].concat(g.x(a));
            a.length = 0;
            a = g.v(b);
            for (b = a.next(); !b.done; b = a.next()) {
                b = b.value;
                qhb(b);
                var c = b.K1;
                b.K1 = null;
                if (c = c == null ? void 0 : c()) b.J1 = c
            }
        },
        qhb = function(a) {
            var b = a.J1;
            a.J1 = null;
            b == null || b()
        },
        T4 = function(a) {
            var b = [];
            if (m4()) return a();
            var c = lhb("useMemoInternal");
            mhb(c.jh, b) && (c.jh = b, c.value = a());
            return c.value
        },
        U4 = function() {
            var a = T4(function() {
                return khb(function(b) {
                    a.value = b;
                    var c = X3(null, function() {});
                    return function() {
                        c == null || c();
                        a.value = null
                    }
                })
            });
            return a
        },
        shb = function(a) {
            var b = p4,
                c = k4.slice();
            return {
                eZ: function() {
                    return function(d) {
                        b.Ka || n4(function() {
                            return X3(null, function() {
                                return a(d)
                            })
                        }, {
                            stack: c
                        }) !== !0 && d.stopPropagation()
                    }
                }
            }
        },
        thb = function(a) {
            if (typeof a.children === "function") return a.children(), null;
            a = g.v(a.children);
            for (var b = a.next(); !b.done; b = a.next()) b = b.value, b();
            return null
        },
        vhb = function(a, b, c) {
            c = c === void 0 ? !1 : c;
            n4(function() {
                return uhb(a, b, c)
            })
        },
        uhb = function(a, b, c) {
            c = ((c === void 0 ? 0 : c) ? whb : xhb)(a, function() {
                V4(b)
            });
            return c === null ? a : c
        },
        V4 = function(a) {
            if (a !== void 0 && a !== null)
                if (Array.isArray(a)) {
                    a = g.v(a);
                    for (var b = a.next(); !b.done; b = a.next()) V4(b.value)
                } else if (a instanceof g.kd || a instanceof g.nd || a instanceof g.wd) cgb(a.toString());
            else if (I4(a)) {
                if (a4() !== a) throw Error("Encountered a real dom node where a vdom node was expected. Real dom nodes should only come from the reactive renderer, and they can't be passed in JSX expressions directly. Tag name: " + a.tagName);
                d4 = a4()
            } else {
                var c = typeof a;
                if (c === "boolean" || c === "number" || c === "string") cgb(a);
                else if (typeof a === "function") {
                    b = $3;
                    var d = a4();
                    if (!d ||
                        !d._isSignalTextNode) {
                        var e = b.insertBefore,
                            f = document.createTextNode("");
                        dhb(f, a);
                        e.call(b, f, d)
                    }
                    d4 = a4()
                } else {
                    if (typeof a.type === "string") {
                        a.Fr || Zfb(a.type, a.props.idomKey);
                        b = $3;
                        for (e in a.props) a.props[e] !== yhb && (f = a.props[e], c = h4, c.push(e), c.push(f));
                        e = o4.attributes;
                        e = e === void 0 ? zhb : e;
                        f = $3;
                        var h = Z3(f);
                        c = e;
                        e = h4;
                        h = h.j || (h.j = Nfb(e.length));
                        for (var l = !h.length || !1, m = 0; m < e.length; m += 2) {
                            var n = e[m];
                            if (l) h[m] = n;
                            else if (h[m] !== n) break;
                            var p = e[m + 1];
                            if (l || h[m + 1] !== p) h[m + 1] = p, bgb(f, n, p, c)
                        }
                        if (m < e.length || m < h.length) {
                            for (m =
                                l = m; m < h.length; m += 2) W4[h[m]] = h[m + 1];
                            for (m = l; m < e.length; m += 2) l = e[m], n = e[m + 1], W4[l] !== n && bgb(f, l, n, c), h[m] = l, h[m + 1] = n, delete W4[l];
                            Y3(h, e.length);
                            for (d in W4) bgb(f, d, void 0, c), delete W4[d]
                        }
                        d = Ahb;
                        Ahb = f = j4.length;
                        for (c = d; c < f; c += 5)(0, j4[c])(j4[c + 1], j4[c + 2], j4[c + 3], j4[c + 4]);
                        Ahb = d;
                        Y3(j4, d);
                        Y3(e, 0);
                        chb(b, a.props);
                        (a.props.skip || a.props.skipchildren) && $3.hasChildNodes() ? d4 = $3.lastChild : V4(a.children);
                        c4(null);
                        d4 = $3;
                        $3 = $3.parentNode;
                        a.Fr && (a.Fr = !1);
                        Qgb(b, a.props);
                        return b
                    }
                    if (a.type === A4) V4(a.children);
                    else if (!Bhb(a)) {
                        try {
                            Chb(a)
                        } catch (q) {
                            d =
                                q, (f = o4.handleError) == null || f.call.apply(f, [o4].concat(g.x(l4(d, (b = a.type) == null ? void 0 : b.Pt))))
                        }
                        a.Fr && (c4(null), d4 = $3, $3 = $3.parentNode, a.Fr = !1)
                    }
                }
            }
        },
        Dhb = function(a, b) {
            var c;
            ((c = a.prototype) == null ? void 0 : c.iz) === void 0 ? (b = new P4(b), b.B = a) : b = new a(b);
            b.j = a;
            b.HO = {
                jS: b.state,
                y_: !1
            };
            return b
        },
        Chb = function(a) {
            var b = a.type,
                c = b.Pt;
            if (b === thb) a.props.children = a.children, b(a.props);
            else {
                a.children.length > 0 && (a.props.children = a.children);
                var d;
                (d = a.props).idomKey || (d.idomKey = b);
                if (c) {
                    var e = Zfb(c, a.props.idomKey);
                    a.Fr = !0;
                    var f = e.__instance
                }
                f || (f = Dhb(b, a.props), f.props = null, e && (e.__instance = f, f.el = e));
                var h;
                c = ((h = f.HO) != null ? h : {
                    jS: f.state,
                    y_: !1
                }).jS;
                f.HO = void 0;
                b.D9 && (c = b.D9(a.props, c));
                f.props = a.props;
                f.state = c;
                h = function() {
                    var l = f;
                    Q4.OX(l);
                    var m = l.iz(l.props);
                    m ? (l.props.idomKey && (m.props.idomKey = l.props.idomKey), l = m) : l = void 0;
                    if (m = l)
                        if (m.Fr = a.Fr, l = V4(m), a.Fr = m.Fr, !b.Pt)
                            if (l) b.Pt = l.tagName.toLowerCase(), l.__instance = f, f.el = l;
                            else {
                                var n;
                                if ((n = f.cB) == null ? 0 : n.length) {
                                    var p;
                                    (p = o4.handleError) == null || p.call.apply(p, [o4].concat(g.x(l4(Error("A component used hooks, but failed to return a host element")))))
                                }
                            }
                    f.fF();
                    Q4.fF(f)
                };
                (c = f.B) ? dgb({
                    component: c,
                    debugInstance: f.props.debugInstance,
                    Nm: h
                }): h()
            }
        },
        Bhb = function(a) {
            var b = a.type;
            if (!b.sB) return !1;
            a.props.children = a.children.length > 1 ? a.children : a.children[0];
            var c, d = (c = a.props.idomKey) != null ? c : a.type,
                e;
            if (a4() && ((e = a4()[K4]) == null ? void 0 : e.key) === d) {
                d = a4();
                c = d[K4];
                if (!c) throw Error("Reactive data has been lost on node. Tag name: " + d.tagName);
                if (!b.l4) {
                    var f;
                    (f = c.Bqa) == null || f.call(c, a.props);
                    Ehb(c);
                    return !0
                }
                f = p4;
                b = b.l4(a.props, c.props, f !== null ? f : c.context, c.G$);
                f = Fhb(b);
                Ghb(a.props, c.props);
                f > 0 ? V4(b) : d4 = a4();
                return !0
            }
            if (Hhb.has(b.name) && a.props.allowIdomInterop !== Ihb) throw Error(b.name +
                " can not be called from a IDOM component. See go/cow-errors#control-flow-component-called-from-Idom-Component");
            (b = dgb({
                component: a.type,
                debugInstance: a.props.debugInstance,
                Nm: function() {
                    return fhb(a.type, a.props)
                }
            })) && Jhb(b);
            return !0
        },
        Fhb = function(a) {
            if (a) {
                if (Array.isArray(a)) {
                    var b = 0;
                    a = g.v(a);
                    for (var c = a.next(); !c.done; c = a.next())(c = c.value) && (b = c.type === A4 ? b + c.children.length : b + 1);
                    return b
                }
                if (a.type === A4) return a.children.length
            } else return 0;
            return 1
        },
        Ghb = function(a, b) {
            b && (b.children = a.children, b.P8 = a.P8, b.fallback = a.fallback)
        },
        Khb = function(a) {
            for (var b = 0; b < M4(a).length; b++) d4 = a4()
        },
        Ehb = function(a) {
            var b = Lhb();
            if (b) Khb(b);
            else
                for (var c = 0; c < a.H0; c++)(b = Lhb()) ? Khb(b) : d4 = a4()
        },
        Lhb = function() {
            var a;
            return (a = a4()[K4]) == null ? void 0 : a.r3
        },
        Jhb = function(a) {
            a = a != null && a.Mm ? a.Mm : a;
            a = Array.isArray(a) ? a : [a];
            a = g.v(a);
            for (var b = a.next(); !b.done; b = a.next()) $3.insertBefore(b.value, a4()), d4 = a4()
        },
        Mhb = function(a) {
            var b = ahb(),
                c = T4(function() {
                    return {
                        value: typeof a === "function" ? a() : a
                    }
                });
            return [c.value, function(d) {
                if (O4 !== null) {
                    var e;
                    (e = o4.handleError) == null || e.call.apply(e, [o4].concat(g.x(l4(Error("Can't set state during rendering")))))
                }
                c.value = typeof d === "function" ? d(c.value) : d;
                b.HO = {
                    jS: b.state,
                    y_: !0
                };
                u4(b.gK, function() {
                    C4(Rgb, function() {
                        if (b.el) {
                            var f, h = {},
                                l = (h.props = b.props, h.type = b.j, h.children = (f = b.props.children) != null ? f : [], h[z4] = !0, h);
                            try {
                                vhb(b.el, l, !0)
                            } catch (p) {
                                var m, n;
                                (n = o4.handleError) == null || n.call.apply(n, [o4].concat(g.x(l4(p, (m = b.j) == null ? void 0 : m.Pt))))
                            }
                        }
                    })
                })
            }]
        },
        Nhb =
        function() {
            return T4(function() {
                return {
                    value: null
                }
            })
        },
        Rhb = function(a) {
            var b = Ohb;
            Phb.push(a);
            Qhb || (b(function() {
                for (var c = g.v(Phb), d = c.next(); !d.done; d = c.next()) d = d.value, d();
                Phb.length = 0;
                Qhb = !1
            }), Qhb = !0)
        },
        Ohb = function(a) {
            Promise.resolve().then(a)
        },
        Shb = function(a) {
            a = g.v(Mhb(a));
            var b = a.next().value,
                c = a.next().value;
            return [b, function(d) {
                Rhb(function() {
                    c(d)
                })
            }]
        },
        Thb = function(a) {
            function b() {
                var l = a.J.md() ? "Hide more Shorts" : "Hide more videos";
                e(l)
            }
            var c = g.v(Mhb("Hide more videos")),
                d = c.next().value,
                e = c.next().value;
            S4(function() {
                var l = a.J;
                l.addEventListener("videodatachange", b);
                return function() {
                    l.removeEventListener("videodatachange", b)
                }
            }, [a.J]);
            var f = T4(function() {
                    return (new g.Qx(g.ky())).element
                }),
                h = U4();
            phb(function() {
                h.value.appendChild(f)
            });
            return R4("button", {
                class: "ytp-button ytp-collapse",
                "aria-label": d,
                "on:click": shb(function() {
                    a.action && a.action()
                })
            }, R4("div", {
                class: "ytp-collapse-icon",
                el: h,
                skip: !0
            }))
        },
        Uhb = function(a) {
            function b() {
                var h = a.J.md() ? "More Shorts" : "More videos";
                e(h)
            }
            var c = g.v(Shb("More videos")),
                d = c.next().value,
                e = c.next().value,
                f = U4();
            S4(function() {
                a.CC && (a.CC.value = f.value)
            }, [a.CC]);
            S4(function() {
                var h = a.J;
                h.addEventListener("videodatachange", b);
                return function() {
                    h.removeEventListener("videodatachange", b)
                }
            }, [a.J]);
            return R4("button", {
                el: f,
                class: "ytp-button ytp-expand",
                "on:click": shb(function() {
                    a.action && a.action()
                })
            }, d)
        },
        Vhb = function(a, b) {
            var c = Nhb();
            S4(function() {
                var d = new g.a1(a);
                d.B = !0;
                c.value = d;
                return function() {
                    var e;
                    (e = c.value) == null || e.dispose()
                }
            }, [a,
                b
            ]);
            return c
        },
        Whb = function(a) {
            function b(y) {
                a: {
                    var A = g.v([1,
                        16, 32
                    ]);
                    for (var C = A.next(); !C.done; C = A.next())
                        if (g.Z(y, C.value)) {
                            A = !0;
                            break a
                        }
                    A = !1
                }
                if (!A) {
                    var E;
                    (E = p.value) != null && E.suggestionData.length > 0 && h(g.Z(y, 4) && !g.Z(y, 2) && !g.Z(y, 1024))
                }
            }

            function c() {
                b(a.J.getPlayerStateObject())
            }

            function d(y) {
                b(y.state)
            }
            var e = g.v(Shb(!1)),
                f = e.next().value,
                h = e.next().value,
                l = g.v(Shb(!1));
            e = l.next().value;
            var m = l.next().value,
                n = U4(),
                p = Vhb(a.J, a.Pe),
                q = U4();
            l = Nhb();
            var r = Nhb();
            S4(function() {
                var y = a.J,
                    A = y.md() ? 157212 : 172777;
                r.value = new g.O;
                y.createClientVe(q.value, r.value, A);
                y.addEventListener("presentingplayerstatechange", d);
                y.addEventListener("videodatachange", c);
                A = y.U().controlsType === "0";
                g.xp(y.getRootNode(), "ytp-pause-overlay-controls-hidden", A);
                return function() {
                    y.removeEventListener("videodatachange", c);
                    y.removeEventListener("presentingplayerstatechange",
                        d);
                    var C;
                    (C = r.value) == null || C.dispose()
                }
            }, [a.J]);
            S4(function() {
                var y;
                (y = p.value) == null || y.Ja(n.value)
            }, [p]);
            var t = a.J;
            if (f)
                if (g.xp(t.getRootNode(), "ytp-expand-pause-overlay", !e), e) l.value.focus();
                else {
                    var u = p.value;
                    g.b1(u);
                    u.show();
                    q.value.focus()
                }
            q.value && t.logVisibility(q.value, f && !e);
            return R4("ytp-pause-overlay", {
                el: q,
                class: "ytp-pause-overlay",
                "aria-hidden": !f
            }, R4(Thb, {
                J: a.J,
                Pe: a.Pe,
                action: function() {
                    m(!0)
                }
            }), R4(Uhb, {
                J: a.J,
                Pe: a.Pe,
                action: function() {
                    m(!1)
                },
                CC: l
            }), R4("div", {
                el: n,
                skip: !0
            }))
        },
        Xhb = function(a) {
            g.U.call(this, {
                I: "div",
                S: "ytp-related-on-error-overlay"
            });
            var b = this;
            this.api = a;
            this.K = this.B = 0;
            this.G = new g.VE(this);
            this.j = [];
            this.suggestionData = [];
            this.columns = this.containerWidth = 0;
            this.title = new g.U({
                I: "h2",
                S: "ytp-related-title",
                va: "{{title}}"
            });
            this.previous = new g.U({
                I: "button",
                Ma: ["ytp-button", "ytp-previous"],
                X: {
                    "aria-label": "Show previous suggested videos"
                },
                V: [g.$x()]
            });
            this.qa = new g.$0(function(f) {
                b.suggestions.element.scrollLeft = -f
            });
            this.D = this.C = 0;
            this.N = !0;
            this.next = new g.U({
                I: "button",
                Ma: ["ytp-button", "ytp-next"],
                X: {
                    "aria-label": "Show more suggested videos"
                },
                V: [g.ay()]
            });
            g.P(this, this.G);
            a = a.U();
            this.api.L("embeds_web_enable_pause_overlay_rounding") && g.tp(this.element, "ytp-error-overlay-round-corners");
            this.Y = a.D;
            g.P(this, this.title);
            this.title.Ja(this.element);
            this.suggestions = new g.U({
                I: "div",
                S: "ytp-suggestions"
            });
            g.P(this, this.suggestions);
            this.suggestions.Ja(this.element);
            g.P(this, this.previous);
            this.previous.Ja(this.element);
            this.previous.listen("click", this.q5, this);
            g.P(this, this.qa);
            for (var c = {
                    gB: 0
                }; c.gB < 16; c = {
                    gB: c.gB
                }, c.gB++) {
                var d = new g.U({
                    I: "a",
                    S: "ytp-suggestion-link",
                    X: {
                        href: "{{link}}",
                        target: a.Y,
                        "aria-label": "{{aria_label}}"
                    },
                    V: [{
                        I: "div",
                        S: "ytp-suggestion-image",
                        V: [{
                            I: "div",
                            X: {
                                "data-is-live": "{{is_live}}"
                            },
                            S: "ytp-suggestion-duration",
                            va: "{{duration}}"
                        }]
                    }, {
                        I: "div",
                        S: "ytp-suggestion-title",
                        X: {
                            title: "{{hover_title}}"
                        },
                        va: "{{title}}"
                    }, {
                        I: "div",
                        S: "ytp-suggestion-author",
                        va: "{{views_or_author}}"
                    }]
                });
                g.P(this, d);
                d.Ja(this.suggestions.element);
                var e = d.Ea("ytp-suggestion-link");
                g.pm(e, "transitionDelay", c.gB / 20 + "s");
                this.G.T(e, "click", function(f) {
                    return function(h) {
                        var l = f.gB,
                            m = b.suggestionData[l],
                            n = m.sessionData;
                        g.QO(b.api.U()) && b.api.L("web_player_log_click_before_generating_ve_conversion_params") ? (b.api.logClick(b.j[l].element), l = m.Ml(), m = {}, g.LR(b.api, m, "emb_rel_err"), l = g.Yi(l, m), g.GS(l, b.api, h)) : g.FS(h, b.api, b.Y, n || void 0) && b.api.Gp(m.videoId, n, m.playlistId)
                    }
                }(c));
                this.j.push(d)
            }
            g.P(this, this.next);
            this.next.Ja(this.element);
            this.next.listen("click", this.p5, this);
            this.G.T(this.api, "videodatachange", this.onVideoDataChange);
            this.resize(this.api.qb().getPlayerSize());
            this.onVideoDataChange();
            this.show()
        },
        Yhb = function(a, b) {
            if (a.api.U().L("web_player_log_click_before_generating_ve_conversion_params"))
                for (var c = Math.floor(-a.C / (a.D + a.B)), d = Math.min(c + a.columns, a.suggestionData.length) - 1; c <= d; c++) a.api.logVisibility(a.j[c].element, b)
        },
        Zhb = function(a) {
            a.next.element.style.bottom =
                a.K + "px";
            a.previous.element.style.bottom = a.K + "px";
            var b = a.C,
                c = a.containerWidth - a.suggestionData.length * (a.D + a.B);
            g.xp(a.element, "ytp-scroll-min", b >= 0);
            g.xp(a.element, "ytp-scroll-max", b <= c)
        },
        $hb = function(a) {
            for (var b = 0; b < a.suggestionData.length; b++) {
                var c = a.suggestionData[b],
                    d = a.j[b],
                    e = c.shortViewCount ? c.shortViewCount : c.author,
                    f = c.Ml(),
                    h = a.api.U();
                if (g.QO(h) && !h.L("web_player_log_click_before_generating_ve_conversion_params")) {
                    var l = {};
                    g.qR(a.api, "addEmbedsConversionTrackingParams", [l]);
                    a.api.L("embeds_web_enable_referring_feature_deprecation") || g.fL(l, "emb_rel_err");
                    f = g.Yi(f, l)
                }
                d.element.style.display = "";
                l = d.Ea("ytp-suggestion-title");
                g.Bp.test(c.title) ? l.dir = "rtl" : g.j$a.test(c.title) && (l.dir = "ltr");
                l = d.Ea("ytp-suggestion-author");
                g.Bp.test(e) ? l.dir = "rtl" : g.j$a.test(e) && (l.dir = "ltr");
                d.update({
                    views_or_author: e,
                    duration: c.isLivePlayback ? "Live" : c.lengthSeconds ? g.fz(c.lengthSeconds) : "",
                    link: f,
                    hover_title: c.title,
                    title: c.title,
                    aria_label: c.ariaLabel || null,
                    is_live: c.isLivePlayback
                });
                e = d.Ea("ytp-suggestion-image");
                f = c.nh();
                e.style.backgroundImage = f ? "url(" + f + ")" : "";
                h.L("web_player_log_click_before_generating_ve_conversion_params") && (a.api.createServerVe(d.element, d), (c = (c = c.sessionData) && c.itct) && a.api.setTrackingParams(d.element, c))
            }
            for (; b < a.j.length; b++) a.j[b].element.style.display = "none";
            Zhb(a)
        },
        X4 = function(a) {
            g.IU.call(this, a);
            var b = this;
            this.j = null;
            var c = a.U(),
                d = {
                    target: c.Y
                },
                e = ["ytp-small-redirect"];
            c.C ? e.push("no-link") : (c = g.rP(c), d.href = c, d["aria-label"] = "Visit YouTube to search for more videos");
            var f = new g.U({
                I: "a",
                Ma: e,
                X: d,
                V: [{
                    I: "svg",
                    X: {
                        fill: "#fff",
                        height: "100%",
                        viewBox: "0 0 24 24",
                        width: "100%"
                    },
                    V: [{
                        I: "path",
                        X: {
                            d: "M0 0h24v24H0V0z",
                            fill: "none"
                        }
                    }, {
                        I: "path",
                        X: {
                            d: "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"
                        }
                    }]
                }]
            });
            f.Ja(this.element);
            a.createClientVe(f.element, this, 178053);
            this.T(f.element, "click", function(h) {
                aib(b, h, f.element)
            });
            g.P(this, f);
            a.U().C || (this.j = new Xhb(a), this.j.Ja(this.element), g.P(this, this.j));
            this.T(a, "videodatachange", function() {
                b.show()
            });
            this.resize(this.api.qb().getPlayerSize())
        },
        aib = function(a, b, c) {
            b.preventDefault();
            a.api.logClick(c);
            b = c.getAttribute("href");
            c = {};
            g.qR(a.api, "addEmbedsConversionTrackingParams", [c]);
            b = g.Fc(c) ? b : g.Yi(b, c);
            g.Pd(b)
        },
        bib = function(a, b) {
            a.Ea("ytp-error-content").style.paddingTop = "0px";
            var c = a.Ea("ytp-error-content"),
                d = c.clientHeight;
            a.j && a.j.resize(b, b.height - d);
            c.style.paddingTop = (b.height - (a.j ? a.j.element.clientHeight : 0)) / 2 - d / 2 + "px"
        },
        eib = function(a, b) {
            var c = a.api.U(),
                d;
            b.reason && (cib(b.reason) ? d = g.Yx(b.reason) : d = g.JU(g.Xx(b.reason)), a.Gd(d, "content"));
            var e;
            b.subreason && (cib(b.subreason) ? e = g.Yx(b.subreason) : e = g.JU(g.Xx(b.subreason)), a.Gd(e, "subreason"));
            if (b.proceedButton && b.proceedButton.buttonRenderer) {
                d = a.Ea("ytp-error-content-wrap-subreason");
                b = b.proceedButton.buttonRenderer;
                var f = g.le("A");
                if (b.text && b.text.simpleText && (e = b.text.simpleText, f.textContent = e, !dib(d, e) && (!c.C || c.embedsErrorLinks))) {
                    var h;
                    c = (h = g.R(b == null ? void 0 : b.navigationEndpoint, g.ry)) == null ?
                        void 0 : h.url;
                    var l;
                    h = (l = g.R(b == null ? void 0 : b.navigationEndpoint, g.ry)) == null ? void 0 : l.target;
                    c && (f.setAttribute("href", c), a.api.createClientVe(f, a, 178424), a.T(f, "click", function(m) {
                        aib(a, m, f)
                    }));
                    h && f.setAttribute("target", h);
                    l = g.le("DIV");
                    l.appendChild(f);
                    d.appendChild(l)
                }
            }
        },
        cib = function(a) {
            if (a.runs)
                for (var b = 0; b < a.runs.length; b++)
                    if (a.runs[b].navigationEndpoint) return !0;
            return !1
        },
        dib = function(a, b) {
            a = g.ce("A", a);
            for (var c = 0; c < a.length; c++)
                if (a[c].textContent === b) return !0;
            return !1
        },
        fib = function(a, b) {
            g.U.call(this, {
                I: "a",
                Ma: ["ytp-impression-link"],
                X: {
                    target: "{{target}}",
                    href: "{{url}}",
                    "aria-label": "Watch on YouTube"
                },
                V: [{
                    I: "div",
                    S: "ytp-impression-link-content",
                    X: {
                        "aria-hidden": "true"
                    },
                    V: [{
                        I: "div",
                        S: "ytp-impression-link-text",
                        va: "Watch on"
                    }, {
                        I: "div",
                        S: "ytp-impression-link-logo",
                        va: "{{logoSvg}}"
                    }]
                }]
            });
            this.api = a;
            this.Pe = b;
            this.updateValue("target", a.U().Y);
            this.T(a, "videodatachange", this.onVideoDataChange);
            this.T(this.api, "presentingplayerstatechange", this.Yk);
            this.T(this.api, "videoplayerreset", this.BV);
            this.T(this.element,
                "click", this.onClick);
            this.onVideoDataChange();
            this.BV()
        },
        gib = function(a) {
            var b = {};
            g.qR(a.api, "addEmbedsConversionTrackingParams", [b]);
            var c = a.api.getVideoUrl();
            a.api.L("embeds_web_enable_referring_feature_deprecation") || g.fL(b, "emb_imp_woyt");
            return c = g.Yi(c, b)
        },
        Y4 = function(a) {
            g.U.call(this, {
                I: "div",
                Ma: ["ytp-mobile-a11y-hidden-seek-button"],
                V: [{
                    I: "button",
                    Ma: ["ytp-mobile-a11y-hidden-seek-button-rewind", "ytp-button"],
                    X: {
                        "aria-label": "Rewind 10 seconds",
                        "aria-hidden": "false"
                    }
                }, {
                    I: "button",
                    Ma: ["ytp-mobile-a11y-hidden-seek-button-forward", "ytp-button"],
                    X: {
                        "aria-label": "Fast forward 10 seconds",
                        "aria-hidden": "false"
                    }
                }]
            });
            this.api = a;
            this.j = this.Ea("ytp-mobile-a11y-hidden-seek-button-rewind");
            this.forwardButton = this.Ea("ytp-mobile-a11y-hidden-seek-button-forward");
            this.api.createClientVe(this.j, this,
                141902);
            this.api.createClientVe(this.forwardButton, this, 141903);
            this.T(this.api, "presentingplayerstatechange", this.Yk);
            this.T(this.j, "click", this.B);
            this.T(this.forwardButton, "click", this.C);
            this.Yk()
        },
        Z4 = function(a) {
            g.U.call(this, {
                I: "div",
                S: "ytp-muted-autoplay-endscreen-overlay",
                V: [{
                    I: "div",
                    S: "ytp-muted-autoplay-end-panel",
                    V: [{
                        I: "button",
                        Ma: ["ytp-muted-autoplay-end-text", "ytp-button"],
                        va: "{{text}}"
                    }]
                }]
            });
            this.api = a;
            this.D = this.Ea("ytp-muted-autoplay-end-panel");
            this.B = !1;
            this.api.createClientVe(this.element, this, 52428);
            this.T(this.api, "presentingplayerstatechange", this.C);
            this.T(a, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
            this.listen("click", this.onClick);
            this.hide()
        },
        $4 = function(a) {
            var b = a.U();
            g.U.call(this, {
                I: "a",
                Ma: ["ytp-watermark", "yt-uix-sessionlink"],
                X: {
                    target: b.Y,
                    href: "{{url}}",
                    "aria-label": g.KD("Watch on $WEBSITE", {
                        WEBSITE: g.fP(b)
                    }),
                    "data-sessionlink": "feature=player-watermark"
                },
                va: "{{logoSvg}}"
            });
            this.api = a;
            this.j = null;
            this.B = !1;
            this.state = a.getPlayerStateObject();
            this.T(a, "videodatachange", this.onVideoDataChange);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            this.T(a, "appresize", this.pc);
            this.onVideoDataChange();
            this.Cd(this.state);
            this.pc(a.qb().getPlayerSize())
        },
        hib = function(a) {
            var b = a.api.getVideoData(),
                c = a.api.U().Hd && !g.Z(a.state, 2) && !g.iR(a.api.getVideoData(1));
            b.mutedAutoplay || g.Tx(a, c);
            a.api.logVisibility(a.element, c)
        },
        kib = function(a) {
            g.U.call(this, {
                I: "div",
                S: "ytp-muted-autoplay-overlay",
                V: [{
                    I: "div",
                    S: "ytp-muted-autoplay-bottom-buttons",
                    V: [{
                        I: "button",
                        Ma: ["ytp-muted-autoplay-equalizer", "ytp-button"],
                        X: {
                            "aria-label": "Muted playback indicator"
                        },
                        V: [{
                            I: "div",
                            Ma: ["ytp-muted-autoplay-equalizer-icon"],
                            V: [{
                                I: "svg",
                                X: {
                                    height: "100%",
                                    version: "1.1",
                                    viewBox: "-4 -4 24 24",
                                    width: "100%"
                                },
                                V: [{
                                    I: "g",
                                    X: {
                                        fill: "#fff"
                                    },
                                    V: [{
                                            I: "rect",
                                            S: "ytp-equalizer-bar-left",
                                            X: {
                                                height: "9",
                                                width: "4",
                                                x: "1",
                                                y: "7"
                                            }
                                        }, {
                                            I: "rect",
                                            S: "ytp-equalizer-bar-middle",
                                            X: {
                                                height: "14",
                                                width: "4",
                                                x: "6",
                                                y: "2"
                                            }
                                        },
                                        {
                                            I: "rect",
                                            S: "ytp-equalizer-bar-right",
                                            X: {
                                                height: "12",
                                                width: "4",
                                                x: "11",
                                                y: "4"
                                            }
                                        }
                                    ]
                                }]
                            }]
                        }]
                    }]
                }]
            });
            var b = this;
            this.api = a;
            this.bottomButtons = this.Ea("ytp-muted-autoplay-bottom-buttons");
            this.Ea("ytp-muted-autoplay-equalizer");
            this.C = new g.lp(this.F$, 4E3, this);
            this.B = !1;
            a.createClientVe(this.element, this, 39306);
            this.T(a, "presentingplayerstatechange", this.ON);
            this.T(a, "onMutedAutoplayStarts", function() {
                iib(b);
                b.ON();
                jib(b);
                b.B = !1
            });
            this.T(a, "onAutoplayBlocked", this.onAutoplayBlocked);
            this.listen("click", this.onClick);
            this.T(a, "onMutedAutoplayEnds", this.onMutedAutoplayEnds);
            this.hide();
            g.vR(a.app) && (iib(this), this.ON(), jib(this));
            g.P(this, this.C)
        },
        jib = function(a) {
            a.Jb && a.j && (a.j.show(), a.C.start())
        },
        iib = function(a) {
            a.watermark || (a.watermark = new $4(a.api), g.P(a, a.watermark), a.watermark.Ja(a.bottomButtons, 0), g.xp(a.watermark.element, "ytp-muted-autoplay-watermark", !0), a.j = new g.Ky(a.watermark, 0, !0, 100), g.P(a, a.j))
        },
        a5 = function(a) {
            g.U.call(this, {
                I: "div",
                S: "ytp-pause-overlay",
                X: {
                    tabIndex: "-1"
                }
            });
            var b = this;
            this.api = a;
            this.C = new g.VE(this);
            this.D = new g.Ky(this, 1E3, !1, 100, function() {
                b.j.B = !1
            }, function() {
                b.j.B = !0
            });
            this.B = !1;
            this.expandButton = new g.U({
                I: "button",
                Ma: ["ytp-button", "ytp-expand"],
                va: this.api.md() ? "More Shorts" : "More videos"
            });
            a.U().controlsType === "0" && g.tp(a.getRootNode(), "ytp-pause-overlay-controls-hidden");
            this.api.L("embeds_web_enable_pause_overlay_rounding") && g.tp(this.element, "ytp-pause-overlay-round-corners");
            g.P(this, this.C);
            g.P(this, this.D);
            var c = new g.U({
                I: "button",
                Ma: ["ytp-button", "ytp-collapse"],
                X: {
                    "aria-label": this.api.md() ? "Hide more Shorts" : "Hide more videos"
                },
                V: [{
                    I: "div",
                    S: "ytp-collapse-icon",
                    V: [g.ky()]
                }]
            });
            g.P(this, c);
            c.Ja(this.element);
            c.listen("click", this.G, this);
            g.P(this, this.expandButton);
            this.expandButton.Ja(this.element);
            this.expandButton.listen("click", this.K, this);
            this.j = new g.a1(a);
            g.P(this, this.j);
            this.j.B = !1;
            this.j.Ja(this.element);
            this.api.md() ? this.api.createClientVe(this.element, this, 157212) : this.api.createClientVe(this.element, this, 172777);
            this.C.T(this.api, "presentingplayerstatechange", this.Ta);
            this.C.T(this.api, "videodatachange", this.Ta);
            this.hide()
        },
        b5 = function(a) {
            g.U.call(this, {
                I: "div",
                Ma: ["ytp-player-content", "ytp-iv-player-content"],
                V: [{
                    I: "div",
                    S: "ytp-countdown-timer",
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
                            S: "ytp-svg-countdown-timer-ring",
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
                            I: "circle",
                            S: "ytp-svg-countdown-timer-background",
                            X: {
                                cx: "-36",
                                cy: "36",
                                "fill-opacity": "0",
                                r: "33.5",
                                stroke: "#FFFFFF",
                                "stroke-opacity": "0.3",
                                "stroke-width": "4",
                                transform: "rotate(-90)"
                            }
                        }]
                    }, {
                        I: "span",
                        S: "ytp-countdown-timer-time",
                        va: "{{duration}}"
                    }]
                }]
            });
            this.api = a;
            this.K = this.Ea("ytp-svg-countdown-timer-ring");
            this.j = null;
            this.D = this.C = 0;
            this.B = !1;
            this.G = 0;
            this.api.createClientVe(this.element, this, 159628)
        },
        mib = function(a) {
            a.j || (a.C = 5E3, a.D = (0, g.T)(), a.j = new g.kp(function() {
                lib(a)
            }, null), lib(a))
        },
        lib = function(a) {
            if (!a.B) {
                var b = Math.min((0, g.T)() - a.D, a.C);
                var c = a.C - b;
                b = a.C === 0 ? 0 : Math.max(c / a.C, 0);
                c = Math.round(c / 1E3);
                a.K.setAttribute("stroke-dashoffset", "" + -211 * (b + 1));
                a.updateValue("duration", c);
                b <= 0 && a.j ? c5(a) : a.j && a.j.start()
            }
        },
        c5 = function(a) {
            a.j && (a.j.dispose(), a.j = null, a.B = !1)
        },
        oib = function(a) {
            g.dU.call(this, a);
            this.J = a;
            this.j = new g.VE(this);
            this.B = null;
            this.N = !1;
            this.countdownTimer = null;
            this.Y = !1;
            nib(this);
            g.P(this, this.j);
            this.load()
        },
        qib = function(a) {
            var b = g.s8a(a.J);
            b !== a.Y && (a.Y = b, a.G && (a.G.dispose(), a.G = null), a.C && (a.C.dispose(), a.C = null), a.D && (a.D.dispose(), a.D = null), a.B && (a.B.stop(), a.B.dispose(), a.B = null), b && (b = g.AR(a.J), a.J.md() && (a.D = new g.U({
                    I: "div",
                    S: "ytp-pause-overlay-backdrop",
                    X: {
                        tabIndex: "-1"
                    }
                }), g.P(a, a.D), g.OR(a.J, a.D.element, 4), a.B = new g.Ky(a.D, 1E3, !1, 100), g.P(a, a.B), a.D.hide()), a.G = new g.U({
                    I: "div",
                    S: "ytp-pause-overlay-container",
                    X: {
                        tabIndex: "-1"
                    }
                }), g.P(a, a.G), a.J.L("embeds_web_enable_keto_pause_overlay") ? vhb(a.G.element, R4(Whb, {
                    J: a.J,
                    Pe: b
                })) :
                (a.C = new a5(a.J, b), g.P(a, a.C), a.C.Ja(a.G.element)), g.OR(a.J, a.G.element, 4), pib(a, a.J.getPlayerStateObject())))
        },
        pib = function(a, b) {
            a.B && (!g.Z(b, 4) && !g.Z(b, 2) || g.Z(b, 1024) ? a.B.hide() : a.B.show())
        },
        nib = function(a) {
            var b = a.J;
            a = !!b.md();
            g.xp(b.getRootNode(), "ytp-shorts-mode", a);
            if (b = b.getVideoData()) b.CY = a
        },
        d5 = function(a, b) {
            var c = a.J.U();
            a = {
                adSource: "EMBEDS_AD_SOURCE_YOUTUBE",
                breakType: a.J.getCurrentTime() === 0 ? "EMBEDS_AD_BREAK_TYPE_PRE_ROLL" : a.J.getPlayerState() === 0 ? "EMBEDS_AD_BREAK_TYPE_POST_ROLL" : "EMBEDS_AD_BREAK_TYPE_MID_ROLL",
                embedUrl: g.Bfa(a.J.U().loaderUrl),
                eventType: b,
                youtubeHost: g.Si(a.J.U().Fa) || ""
            };
            a.embeddedPlayerMode = c.Ia;
            g.Pt("embedsAdEvent", a)
        },
        ugb = 0,
        pgb = 0;
    var Ihb = Symbol("ALLOW_IDOM_INTEROP_SYMBOL");
    var ggb = Symbol("DISABLE_ON_CLEANUP");
    var Pfb = Object.prototype.hasOwnProperty;
    Mfb.prototype = Object.create(null);
    var zhb = Sfb();
    var i4 = null;
    var $fb = typeof Node !== "undefined" && Node.prototype.getRootNode || function() {
        for (var a = this, b = a; a;) b = a, a = a.parentNode;
        return b
    };
    var b4 = null,
        d4 = null,
        $3 = null,
        f4 = null,
        g4 = [],
        e4 = Xfb,
        h4 = [],
        xhb = function(a) {
            return agb(function(b, c, d) {
                $3 = d4 = b;
                d4 = null;
                c(d);
                c4(null);
                d4 = $3;
                $3 = $3.parentNode;
                return b
            }, a)
        }(),
        whb = function(a) {
            return agb(function(b, c, d) {
                var e = {
                    nextSibling: b
                };
                d4 = e;
                c(d);
                $3 && c4(b.nextSibling);
                return e === d4 ? null : d4
            }, a)
        }();
    var j4 = [],
        Ahb = 0;
    var W4 = new Mfb;
    var o4 = {
        attributes: Sfb(),
        handleError: function(a, b) {
            throw b;
        },
        Q8: !0,
        S8: !0,
        iV: g.E8a,
        s4: g.F8a,
        mD: g.G8a
    };
    var k4 = [];
    var e5 = {},
        fgb = (e5.A_ = !0, e5[Symbol.dispose] = function() {
            var a;
            (a = o4.handleError) == null || a.call.apply(a, [o4].concat(g.x(l4(Error("This owner cannot be disposed")))))
        }, e5.Ka = !1, e5);
    var p4 = null;
    var t4 = new Set,
        s4 = new Set,
        f5 = {},
        rib = Object.assign({}, {
            A_: !0
        }, g.bp, (f5.gg = void 0, f5.hG = !1, f5.ET = null, f5.CP = !0, f5.du = !1, f5[Symbol.dispose] = mgb, f5.VE = void 0, f5));
    var w4 = new Set,
        v4 = new Set;
    g.dla = function() {
        if (o4.s4) {
            var a = t4;
            t4 = new Set;
            kgb(a)
        } else kgb(t4);
        o4.s4 ? (a = w4, w4 = new Set, qgb(a)) : qgb(w4);
        o4.mD && (lgb(), rgb())
    };
    var zgb = Object.assign({}, rib, {
        XE: ogb,
        du: !1
    });
    var Bgb = Object.assign({}, rib, {
        XE: ngb,
        du: !1
    });
    var Dgb = Object.assign({}, rib, {
        XE: ngb,
        du: !0
    });
    var Mgb = new Set("allowfullscreen async autofocus autoplay checked controls default defer disabled formnovalidate hidden ismap itemscope jsshadow jsslot loop multiple muted novalidate open playsinline readonly required reversed scoped seamless selected spellcheck sortable typemustmatch".split(" "));
    var Ggb = {
            align: 1,
            alt: 1,
            "aria-activedescendant": 10,
            "aria-atomic": 1,
            "aria-autocomplete": 1,
            "aria-busy": 1,
            "aria-checked": 1,
            "aria-controls": 10,
            "aria-current": 1,
            "aria-describedby": 10,
            "aria-disabled": 1,
            "aria-dropeffect": 1,
            "aria-expanded": 1,
            "aria-haspopup": 1,
            "aria-hidden": 1,
            "aria-invalid": 1,
            "aria-label": 1,
            "aria-labelledby": 10,
            "aria-level": 1,
            "aria-live": 1,
            "aria-multiline": 1,
            "aria-multiselectable": 1,
            "aria-orientation": 1,
            "aria-owns": 10,
            "aria-posinset": 1,
            "aria-pressed": 1,
            "aria-readonly": 1,
            "aria-relevant": 1,
            "aria-required": 1,
            "aria-selected": 1,
            "aria-setsize": 1,
            "aria-sort": 1,
            "aria-valuemax": 1,
            "aria-valuemin": 1,
            "aria-valuenow": 1,
            "aria-valuetext": 1,
            async: 8,
            autocapitalize: 1,
            autocomplete: 1,
            autocorrect: 1,
            autofocus: 1,
            autoplay: 1,
            bgcolor: 1,
            border: 1,
            cellpadding: 1,
            cellspacing: 1,
            checked: 1,
            cite: 3,
            "class": 1,
            color: 1,
            cols: 1,
            colspan: 1,
            contenteditable: 1,
            controls: 1,
            datetime: 1,
            dir: 8,
            disabled: 1,
            download: 1,
            draggable: 1,
            enctype: 1,
            face: 1,
            "for": 10,
            formenctype: 1,
            frameborder: 1,
            height: 1,
            hidden: 1,
            href: 4,
            hreflang: 1,
            id: 10,
            ismap: 1,
            itemid: 1,
            itemprop: 1,
            itemref: 1,
            itemscope: 1,
            itemtype: 1,
            label: 1,
            lang: 1,
            list: 10,
            loading: 8,
            loop: 1,
            max: 1,
            maxlength: 1,
            media: 1,
            min: 1,
            minlength: 1,
            multiple: 1,
            muted: 1,
            name: 10,
            nonce: 1,
            open: 1,
            placeholder: 1,
            poster: 3,
            preload: 1,
            rel: 1,
            required: 1,
            reversed: 1,
            role: 1,
            rows: 1,
            rowspan: 1,
            selected: 1,
            shape: 1,
            size: 1,
            sizes: 1,
            slot: 1,
            span: 1,
            spellcheck: 1,
            src: 4,
            srcset: 12,
            start: 1,
            step: 1,
            style: 5,
            summary: 1,
            tabindex: 1,
            target: 8,
            title: 1,
            translate: 1,
            type: 1,
            valign: 1,
            value: 1,
            width: 1,
            wrap: 1
        },
        Fgb = {
            a: {
                href: [{
                    Ed: 3
                }]
            },
            area: {
                href: [{
                    Ed: 3
                }]
            },
            audio: {
                src: [{
                    Ed: 3
                }]
            },
            button: {
                formaction: [{
                    Ed: 3
                }],
                formmethod: [{
                    Ed: 1
                }]
            },
            form: {
                action: [{
                    Ed: 3
                }],
                method: [{
                    Ed: 1
                }]
            },
            iframe: {
                srcdoc: [{
                    Ed: 2
                }]
            },
            img: {
                src: [{
                    Ed: 3
                }],
                srcset: [{
                    Ed: 11
                }]
            },
            input: {
                accept: [{
                    Ed: 1
                }],
                formaction: [{
                    Ed: 3
                }],
                formmethod: [{
                    Ed: 1
                }],
                pattern: [{
                    Ed: 1
                }],
                readonly: [{
                    Ed: 1
                }],
                src: [{
                    Ed: 3
                }]
            },
            link: {
                href: [{
                    Ed: 3,
                    Mi: "rel",
                    Vi: "alternate"
                }, {
                    Ed: 3,
                    Mi: "rel",
                    Vi: "author"
                }, {
                    Ed: 3,
                    Mi: "rel",
                    Vi: "bookmark"
                }, {
                    Ed: 3,
                    Mi: "rel",
                    Vi: "canonical"
                }, {
                    Ed: 3,
                    Mi: "rel",
                    Vi: "cite"
                }, {
                    Ed: 3,
                    Mi: "rel",
                    Vi: "help"
                }, {
                    Ed: 3,
                    Mi: "rel",
                    Vi: "icon"
                }, {
                    Ed: 3,
                    Mi: "rel",
                    Vi: "license"
                }, {
                    Ed: 3,
                    Mi: "rel",
                    Vi: "next"
                }, {
                    Ed: 3,
                    Mi: "rel",
                    Vi: "prefetch"
                }, {
                    Ed: 3,
                    Mi: "rel",
                    Vi: "dns-prefetch"
                }, {
                    Ed: 3,
                    Mi: "rel",
                    Vi: "prerender"
                }, {
                    Ed: 3,
                    Mi: "rel",
                    Vi: "preconnect"
                }, {
                    Ed: 3,
                    Mi: "rel",
                    Vi: "preload"
                }, {
                    Ed: 3,
                    Mi: "rel",
                    Vi: "prev"
                }, {
                    Ed: 3,
                    Mi: "rel",
                    Vi: "search"
                }, {
                    Ed: 3,
                    Mi: "rel",
                    Vi: "subresource"
                }]
            },
            script: {
                defer: [{
                    Ed: 1
                }]
            },
            source: {
                src: [{
                    Ed: 3
                }],
                srcset: [{
                    Ed: 11
                }]
            },
            textarea: {
                readonly: [{
                    Ed: 1
                }]
            },
            video: {
                src: [{
                    Ed: 3
                }]
            }
        };
    var sib = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i,
        g5 = {},
        Igb = (g5[1] = {
            Qr: null,
            Wu: null,
            Et: null
        }, g5[2] = {
            Qr: function() {
                return g.td.toString()
            },
            Wu: function(a) {
                return a instanceof g.yd
            },
            Et: function(a) {
                return g.zd(a)
            }
        }, g5[3] = {
            Qr: function(a, b, c) {
                return sib.test(c) ? c : g.td.toString()
            },
            Wu: function(a) {
                return a instanceof g.nd
            },
            Et: function(a) {
                return g.qd(a)
            }
        }, g5[4] = {
            Qr: function() {
                return g.td.toString()
            },
            Wu: function(a) {
                return a instanceof g.kd
            },
            Et: function(a) {
                return g.ld(a)
            }
        }, g5[5] = {
            Qr: null,
            Wu: function(a) {
                return a instanceof g.wd
            },
            Et: function(a) {
                return a.toString()
            }
        }, g5[7] = {
            Qr: null,
            Wu: null,
            Et: null
        }, g5[8] = {
            Qr: null,
            Wu: null,
            Et: null
        }, g5[10] = {
            Qr: null,
            Wu: null,
            Et: null
        }, g5);
    var yhb = Symbol("ATTR_TAG_VALUE");
    RegExp.prototype.hasOwnProperty("sticky");
    var tib = Sfb(),
        Ogb = tib.__default,
        Pgb = tib.style,
        Ngb = ["focusin", "focusout"];
    var z4 = Symbol("IS_VNODE");
    var J4, B4 = Rgb;
    var K4 = Symbol("reactiveData");
    var fhb = $gb;
    var Q4 = {
        mna: function() {},
        Apa: function() {},
        qna: function() {},
        OX: function() {},
        nna: function() {},
        F8: function() {},
        fF: function() {},
        dK: function() {},
        G8: function() {}
    };
    N4.prototype.fF = function() {};
    N4.prototype.F8 = function() {};
    N4.prototype.dK = function() {};
    N4.prototype.G8 = function() {};
    var O4 = null;
    g.z(P4, N4);
    P4.prototype.iz = function(a) {
        var b = this,
            c = O4;
        O4 = this;
        this.D = 0;
        try {
            return n4(function() {
                return X3(g.g$a, function() {
                    return u4(b.gK, function() {
                        return b.B(a)
                    })
                })
            })
        } finally {
            O4 = c
        }
    };
    var ihb = [];
    (function() {
        var a = i4;
        i4 = function(b) {
            a == null || a(b);
            jhb(b)
        }
    })();
    J4 = ghb;
    (function(a) {
        var b = {},
            c;
        for (c in a) b = {
            W1: void 0,
            A0: void 0
        }, b.W1 = Q4[c], b.A0 = a[c], Q4[c] = function(d) {
            return function() {
                var e = g.Da.apply(0, arguments);
                d.W1.apply(null, g.x(e));
                d.A0.apply(null, g.x(e))
            }
        }(b)
    })({
        OX: function(a) {
            u4(a.gK, function() {
                var b;
                ((b = a.Vz) == null ? 0 : b.length) && rhb(a.Vz)
            })
        },
        fF: function(a) {
            u4(a.gK, function() {
                var b;
                ((b = a.Vz) == null ? 0 : b.length) && rhb(a.Vz)
            })
        },
        dK: function(a) {
            var b;
            ((b = a.cB) == null ? 0 : b.length) && a.cB.forEach(qhb)
        }
    });
    J4 = ghb;
    var Hhb = new Set(["For", "If", "Match", "Watch"]),
        uib = {},
        vib = (uib.__default = function() {
            return y4
        }, uib.style = function() {
            return y4
        }, uib),
        h5;
    for (h5 in vib) o4.attributes[h5] = vib[h5](o4.attributes[h5]);
    var Phb = [],
        Qhb = !1;
    g.z(Xhb, g.U);
    g.k = Xhb.prototype;
    g.k.hide = function() {
        this.N = !0;
        g.U.prototype.hide.call(this);
        Yhb(this, !1)
    };
    g.k.show = function() {
        this.N = !1;
        g.U.prototype.show.call(this);
        Yhb(this, !0)
    };
    g.k.isHidden = function() {
        return this.N
    };
    g.k.p5 = function() {
        this.scrollTo(this.C - this.containerWidth)
    };
    g.k.q5 = function() {
        this.scrollTo(this.C + this.containerWidth)
    };
    g.k.resize = function(a, b) {
        var c = this.api.U(),
            d = 16 / 9,
            e = a.width >= 650,
            f = a.width < 480 || a.height < 290,
            h = Math.min(this.suggestionData.length, this.j.length);
        if (Math.min(a.width, a.height) <= 150 || h === 0 || !c.zd) this.hide();
        else {
            var l;
            if (e) {
                var m = l = 28;
                this.B = 16
            } else this.B = m = l = 8;
            if (f) {
                var n = 6;
                e = 14;
                var p = 12;
                f = 24;
                c = 12
            } else n = 8, e = 18, p = 16, f = 36, c = 16;
            a = a.width - (48 + l + m);
            l = Math.ceil(a / 150);
            l = Math.min(3, l);
            m = a / l - this.B;
            var q = Math.floor(m / d);
            b && q + 100 > b && m > 50 && (q = Math.max(b, 50 / d), l = Math.ceil(a / (d * (q - 100) + this.B)), m = a / l - this.B,
                q = Math.floor(m / d));
            m < 50 || g.KR(this.api) ? this.hide() : this.show();
            for (b = 0; b < h; b++) {
                d = this.j[b];
                var r = d.Ea("ytp-suggestion-image");
                r.style.width = m + "px";
                r.style.height = q + "px";
                d.Ea("ytp-suggestion-title").style.width = m + "px";
                d.Ea("ytp-suggestion-author").style.width = m + "px";
                d = d.Ea("ytp-suggestion-duration");
                d.style.display = d && m < 100 ? "none" : ""
            }
            h = e + n + p + 4;
            this.K = h + c + (q - f) / 2;
            this.suggestions.element.style.height = q + h + "px";
            this.D = m;
            this.containerWidth = a;
            this.columns = l;
            this.C = 0;
            this.suggestions.element.scrollLeft = -0;
            Zhb(this)
        }
    };
    g.k.onVideoDataChange = function() {
        var a = this.api.getVideoData(),
            b = this.api.U();
        this.Y = a.Kf ? !1 : b.D;
        a.suggestions ? this.suggestionData = g.qn(a.suggestions, function(c) {
            return c && !c.playlistId
        }) : this.suggestionData.length = 0;
        $hb(this);
        a.Kf ? this.title.update({
            title: g.KD("More videos from $DNI_RELATED_CHANNEL", {
                DNI_RELATED_CHANNEL: a.author
            })
        }) : this.title.update({
            title: "More videos on YouTube"
        })
    };
    g.k.scrollTo = function(a) {
        a = g.Gd(a, this.containerWidth - this.suggestionData.length * (this.D + this.B), 0);
        this.qa.start(this.C, a, 1E3);
        this.C = a;
        Zhb(this);
        Yhb(this, !0)
    };
    g.z(X4, g.IU);
    X4.prototype.show = function() {
        g.IU.prototype.show.call(this);
        bib(this, this.api.qb().getPlayerSize())
    };
    X4.prototype.resize = function(a) {
        g.IU.prototype.resize.call(this, a);
        this.j && (bib(this, a), g.xp(this.element, "related-on-error-overlay-visible", !this.j.isHidden()))
    };
    X4.prototype.B = function(a) {
        g.IU.prototype.B.call(this, a);
        var b = this.api.getVideoData();
        if (b.vE || b.playerErrorMessageRenderer)(a = b.vE) ? eib(this, a) : b.playerErrorMessageRenderer && eib(this, b.playerErrorMessageRenderer);
        else {
            var c;
            a.Yn && (b.Tw ? cib(b.Tw) ? c = g.Yx(b.Tw) : c = g.JU(g.Xx(b.Tw)) : c = g.JU(a.Yn), this.Gd(c, "subreason"))
        }
    };
    g.z(fib, g.U);
    g.k = fib.prototype;
    g.k.onVideoDataChange = function() {
        var a = this.api.getVideoData(),
            b = Kfb(),
            c = 96714;
        g.jR(a) ? (b = Lfb(), c = 216165, g.tp(this.element, "ytp-music-impression-link")) : g.vp(this.element, "ytp-music-impression-link");
        this.updateValue("logoSvg", b);
        this.api.hasVe(this.element) && this.api.destroyVe(this.element);
        this.api.createClientVe(this.element, this, c)
    };
    g.k.Yk = function() {
        this.api.getPlayerStateObject().isCued() || (this.hide(), this.api.logVisibility(this.element, !1))
    };
    g.k.BV = function() {
        var a = this.api.getVideoData(),
            b = this.api.U(),
            c = this.api.getVideoData().Kf,
            d = b.Hd,
            e = !b.zd,
            f = this.Pe.Tg();
        b = b.C;
        d || f || c || e || b || this.api.md() || !a.videoId ? (this.hide(), this.api.logVisibility(this.element, !1)) : (a = gib(this), this.updateValue("url", a), this.show())
    };
    g.k.onClick = function(a) {
        this.api.L("web_player_log_click_before_generating_ve_conversion_params") && this.api.logClick(this.element);
        var b = gib(this);
        g.GS(b, this.api, a);
        this.api.L("web_player_log_click_before_generating_ve_conversion_params") || this.api.logClick(this.element)
    };
    g.k.show = function() {
        this.api.getPlayerStateObject().isCued() && (g.U.prototype.show.call(this), this.api.hasVe(this.element) && this.api.logVisibility(this.element, !0))
    };
    g.z(Y4, g.U);
    Y4.prototype.Yk = function() {
        var a = this.api.getPlayerStateObject();
        !this.api.Ph() || g.Z(a, 2) && g.HR(this.api) || g.Z(a, 64) ? (this.api.logVisibility(this.j, !1), this.api.logVisibility(this.forwardButton, !1), this.hide()) : (this.show(), this.api.logVisibility(this.j, !0), this.api.logVisibility(this.forwardButton, !0))
    };
    Y4.prototype.B = function() {
        this.api.seekBy(-10 * this.api.getPlaybackRate(), void 0, void 0, 83);
        this.api.logClick(this.j)
    };
    Y4.prototype.C = function() {
        this.api.seekBy(10 * this.api.getPlaybackRate(), void 0, void 0, 82);
        this.api.logClick(this.forwardButton)
    };
    g.z(Z4, g.U);
    Z4.prototype.C = function() {
        var a = this.api.getPlayerStateObject();
        this.api.getVideoData().mutedAutoplay && (g.Z(a, 2) && !this.Jb ? (this.show(), this.j || (this.j = new g.GU(this.api), g.P(this, this.j), this.j.Ja(this.D, 0), this.j.show()), a = this.api.getVideoData(), this.updateValue("text", a.RW), g.xp(this.element, "ytp-muted-autoplay-show-end-panel", !0), this.api.logVisibility(this.element, this.Jb), this.api.Bc("onMutedAutoplayEnds")) : this.hide())
    };
    Z4.prototype.onClick = function() {
        if (!this.B) {
            this.j && (this.j.xa(), this.j = null);
            g.xp(this.api.getRootNode(), "ytp-muted-autoplay", !1);
            var a = this.api.getVideoData(),
                b = this.api.getCurrentTime();
            Gfb(a);
            this.api.loadVideoById(a.videoId, b);
            this.api.JB();
            this.api.logClick(this.element);
            this.hide();
            this.B = !0
        }
    };
    Z4.prototype.onMutedAutoplayStarts = function() {
        this.B = !1;
        this.j && (this.j.xa(), this.j = null)
    };
    g.z($4, g.U);
    g.k = $4.prototype;
    g.k.onStateChange = function(a) {
        this.Cd(a.state)
    };
    g.k.Cd = function(a) {
        this.state !== a && (this.state = a);
        hib(this)
    };
    g.k.onVideoDataChange = function() {
        var a = this.api.U();
        a.C && g.tp(this.element, "ytp-no-hover");
        var b = this.api.getVideoData();
        b.videoId && !a.C ? (a = this.api.getVideoUrl(!0, !1, !1, !0), this.updateValue("url", a), this.j || (this.j = this.listen("click", this.onClick))) : this.j && (this.updateValue("url", null), this.Rc(this.j), this.j = null);
        a = Kfb();
        var c = 76758;
        g.jR(b) && (a = Lfb(), c = 216164);
        this.updateValue("logoSvg", a);
        this.api.hasVe(this.element) && this.api.destroyVe(this.element);
        this.api.createClientVe(this.element, this,
            c);
        hib(this)
    };
    g.k.onClick = function(a) {
        this.api.L("web_player_log_click_before_generating_ve_conversion_params") && this.api.logClick(this.element);
        var b = this.api.getVideoUrl(!g.gz(a), !1, !0, !0);
        if (this.api.L("web_player_log_click_before_generating_ve_conversion_params")) {
            var c = {};
            g.qR(this.api, "addEmbedsConversionTrackingParams", [c]);
            this.api.L("embeds_web_enable_referring_feature_deprecation") || g.fL(c, "emb_yt_watermark");
            b = g.Yi(b, c)
        }
        g.GS(b, this.api, a);
        this.api.L("web_player_log_click_before_generating_ve_conversion_params") ||
            this.api.logClick(this.element)
    };
    g.k.pc = function(a) {
        if ((a = a.width < 480) && !this.B || !a && this.B) {
            var b = new g.U(Kfb()),
                c = this.Ea("ytp-watermark");
            g.xp(c, "ytp-watermark-small", a);
            g.pe(c);
            b.Ja(c);
            this.B = a
        }
    };
    g.z(kib, g.U);
    g.k = kib.prototype;
    g.k.ON = function() {
        var a = this.api.getPlayerStateObject();
        !this.api.getVideoData().mutedAutoplay || g.Z(a, 2) ? this.hide() : this.Jb || (g.U.prototype.show.call(this), this.api.logVisibility(this.element, this.Jb))
    };
    g.k.F$ = function() {
        this.j && this.j.hide()
    };
    g.k.onAutoplayBlocked = function() {
        this.hide();
        Gfb(this.api.getVideoData())
    };
    g.k.onClick = function() {
        if (!this.B) {
            g.xp(this.api.getRootNode(), "ytp-muted-autoplay", !1);
            var a = this.api.getVideoData(),
                b = this.api.getCurrentTime();
            Gfb(a);
            this.api.loadVideoById(a.videoId, b);
            this.api.JB();
            this.api.logClick(this.element);
            this.api.Bc("onMutedAutoplayEnds");
            this.B = !0
        }
    };
    g.k.onMutedAutoplayEnds = function() {
        this.watermark && (this.watermark.xa(), this.watermark = null)
    };
    g.z(a5, g.U);
    a5.prototype.hide = function() {
        g.vp(this.api.getRootNode(), "ytp-expand-pause-overlay");
        g.U.prototype.hide.call(this)
    };
    a5.prototype.G = function() {
        this.B = !0;
        g.vp(this.api.getRootNode(), "ytp-expand-pause-overlay");
        this.api.md() && this.api.logVisibility(this.element, !1);
        this.expandButton.focus()
    };
    a5.prototype.K = function() {
        this.B = !1;
        g.tp(this.api.getRootNode(), "ytp-expand-pause-overlay");
        this.api.md() && this.api.logVisibility(this.element, !0);
        this.focus()
    };
    a5.prototype.Ta = function() {
        var a = this.api.getPlayerStateObject();
        g.Z(a, 1) || g.Z(a, 16) || g.Z(a, 32) || (!g.Z(a, 4) || g.Z(a, 2) || g.Z(a, 1024) ? (this.B || this.api.logVisibility(this.element, !1), this.D.hide()) : this.j.suggestionData.length > 0 && (this.B || (g.tp(this.api.getRootNode(), "ytp-expand-pause-overlay"), g.b1(this.j), this.j.show(), this.api.logVisibility(this.element, !0)), this.D.show()))
    };
    g.z(b5, g.U);
    b5.prototype.show = function() {
        g.U.prototype.show.call(this);
        this.api.logVisibility(this.element, !0)
    };
    b5.prototype.xa = function() {
        c5(this);
        g.U.prototype.xa.call(this)
    };
    g.z(oib, g.dU);
    g.k = oib.prototype;
    g.k.An = function() {
        return !1
    };
    g.k.create = function() {
        var a = this.J.U(),
            b = g.AR(this.J),
            c, d = (c = this.J.getVideoData()) == null ? void 0 : c.clientPlaybackNonce;
        d && g.xA({
            clientPlaybackNonce: d
        });
        a.bb && !a.disableOrganicUi && qib(this);
        this.Z = new kib(this.J);
        g.P(this, this.Z);
        g.OR(this.J, this.Z.element, 4);
        this.ra = new Z4(this.J);
        g.P(this, this.ra);
        g.OR(this.J, this.ra.element, 4);
        a.Hd && (this.watermark = new $4(this.J), g.P(this, this.watermark), g.OR(this.J, this.watermark.element, 8));
        b && !a.disableOrganicUi && (this.K = new fib(this.J, b), g.P(this, this.K), g.OR(this.J,
            this.K.element, 8), g.vR(this.J.app) && (this.onMutedAutoplayStarts(), this.K.hide()));
        a.B && (this.qa = new Y4(this.J), g.P(this, this.qa), g.OR(this.J, this.qa.element, 4));
        this.j.T(this.J, "appresize", this.pc);
        this.j.T(this.J, "presentingplayerstatechange", this.Yk);
        this.j.T(this.J, "videodatachange", this.onVideoDataChange);
        this.j.T(this.J, "videoplayerreset", this.onReset);
        this.j.T(this.J, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
        this.j.T(this.J, "onAdStart", this.onAdStart);
        this.j.T(this.J, "onAdComplete",
            this.onAdComplete);
        this.j.T(this.J, "onAdSkip", this.onAdSkip);
        this.j.T(this.J, "onAdStateChange", this.onAdStateChange);
        if (this.N = g.Ns(g.ZO(a))) this.countdownTimer = new b5(this.J), g.P(this, this.countdownTimer), g.OR(this.J, this.countdownTimer.element, 4), this.countdownTimer.hide(), this.j.T(this.J, g.zD("embeds"), this.onCueRangeEnter), this.j.T(this.J, g.AD("embeds"), this.onCueRangeExit);
        this.Hc(this.J.getPlayerStateObject());
        this.player.Ig("embed");
        var e, f;
        ((e = this.J.U().getWebPlayerContextConfig()) == null ?
            0 : (f = e.embedsHostFlags) == null ? 0 : f.allowOverridingVisitorDataPlayerVars) && (a = g.xr("IDENTITY_MEMENTO")) && this.J.qn("onMementoChange", a)
    };
    g.k.onCueRangeEnter = function(a) {
        a.getId() === "countdown timer" && this.countdownTimer && (this.countdownTimer.show(), mib(this.countdownTimer))
    };
    g.k.onCueRangeExit = function(a) {
        a.getId() === "countdown timer" && this.countdownTimer && (c5(this.countdownTimer), this.countdownTimer.hide())
    };
    g.k.pc = function() {
        var a = this.J.qb().getPlayerSize();
        this.Bg && this.Bg.resize(a)
    };
    g.k.onReset = function() {
        nib(this)
    };
    g.k.Yk = function(a) {
        this.Hc(a.state)
    };
    g.k.Hc = function(a) {
        g.Z(a, 128) ? (this.Bg || (this.Bg = new X4(this.J), g.P(this, this.Bg), g.OR(this.J, this.Bg.element, 4)), this.Bg.B(a.kh), this.Bg.show(), g.tp(this.J.getRootNode(), "ytp-embed-error")) : this.Bg && (this.Bg.dispose(), this.Bg = null, g.vp(this.J.getRootNode(), "ytp-embed-error"));
        if (this.countdownTimer && this.countdownTimer.j)
            if (g.Z(a, 64)) this.countdownTimer.hide(), c5(this.countdownTimer);
            else if (a.isPaused()) {
            var b = this.countdownTimer;
            b.B || (b.B = !0, b.G = (0, g.T)())
        } else a.isPlaying() && this.countdownTimer.B &&
            (b = this.countdownTimer, b.B && (b.D += (0, g.T)() - b.G, b.B = !1, lib(b)));
        pib(this, a)
    };
    g.k.onMutedAutoplayStarts = function() {
        this.J.getVideoData().mutedAutoplay && this.Z && g.xp(this.J.getRootNode(), "ytp-muted-autoplay", !0)
    };
    g.k.onVideoDataChange = function(a, b) {
        var c = this.GG !== b.videoId;
        a = !c && a === "dataloaded";
        var d = {
            isShortsModeEnabled: !!this.J.md()
        };
        g.Pt("embedsVideoDataDidChange", {
            clientPlaybackNonce: b.clientPlaybackNonce,
            isReload: a,
            runtimeEnabledFeatures: d
        });
        c && (this.GG = b.videoId, this.countdownTimer && (this.countdownTimer.show(), this.countdownTimer.hide()), this.N && (this.J.wf("embeds"), b.isAd() || b.limitedPlaybackDurationInSeconds < 5 || g.KR(this.J) || (b = Math.max((b.startSeconds + b.limitedPlaybackDurationInSeconds - 5) * 1E3, 0),
            b = new g.xD(b, b + 5E3, {
                id: "countdown timer",
                namespace: "embeds"
            }), this.J.rf([b]))), this.J.U().bb && !this.J.U().disableOrganicUi && (nib(this), qib(this)));
        this.J.U().C && this.C && this.C.detach()
    };
    g.k.onAdStart = function() {
        d5(this, "EMBEDS_AD_EVENT_TYPE_AD_STARTED")
    };
    g.k.onAdComplete = function() {
        d5(this, "EMBEDS_AD_EVENT_TYPE_AD_COMPLETED")
    };
    g.k.onAdSkip = function() {
        d5(this, "EMBEDS_AD_EVENT_TYPE_AD_SKIPPED")
    };
    g.k.onAdStateChange = function(a) {
        a === 2 && d5(this, "EMBEDS_AD_EVENT_TYPE_AD_PAUSED")
    };
    g.cU("embed", oib);
})(_yt_player);