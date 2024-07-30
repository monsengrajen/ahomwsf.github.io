google.maps.__gjsload__('search', function(_) {
    var Toa = function() {},
        fC = function(a) {
            this.setValues(a);
            _.ok("search_impl")
        },
        Voa = function(a) {
            let b = _.mm,
                c = -1;
            a.tiles.forEach(e => {
                e.zoom > c && (b = e.bi, c = e.zoom)
            });
            if (c === -1) return [];
            const d = [];
            a.Xt().forEach(e => {
                e.a && e.a.length >= 2 && d.push(new Uoa(e, b, c))
            });
            return d
        },
        Woa = function(a) {
            const b = [];
            a.data.forEach(c => {
                b.push(...Voa(c))
            });
            return b
        };
    _.Ja(Toa, _.Sk);
    var Xoa = {
            ["1"]: {}
        },
        Uoa = class {
            constructor(a, b, c) {
                this.xp = b;
                this.zoom = c;
                this.bounds = this.anchor = null;
                this.Eg = Xoa;
                this.source = a;
                this.featureId = this.source.id || "0";
                this.infoWindowOffset = (this.source.io || []).length === 2 ? new google.maps.Point(this.source.io[0], this.source.io[1]) : null
            }
            getAnchor() {
                if (!this.anchor) {
                    const a = 1 << this.zoom;
                    this.anchor = _.Ym(new _.nn((this.xp.x * 256 + this.source.a[0]) / a, (this.xp.y * 256 + this.source.a[1]) / a)).toJSON()
                }
                return this.anchor
            }
            getCompleteBounds() {
                return this.getBounds().reduce((a,
                    b) => {
                    a.extendByBounds(b);
                    return a
                }, _.bn(0, 0, 0, 0))
            }
            getBounds() {
                if (this.bounds === null) {
                    this.bounds = [];
                    const a = this.source.bb || [];
                    if (a.length % 4 === 0)
                        for (let b = 0; b < a.length; b += 4) {
                            const c = this.bounds[this.bounds.length - 1],
                                d = _.bn(a[b], a[b + 1], a[b + 2], a[b + 3]);
                            c && c.equals(d) || this.bounds.push(d)
                        }
                }
                return [...this.bounds]
            }
            getExtendedContent(a) {
                if (this.Eg === Xoa) try {
                    this.Eg = this.source.c ? JSON.parse(this.source.c) : {}
                } catch (b) {
                    this.Eg = {}
                }
                return this.Eg[a] ? ? {}
            }
            getFeatureName() {
                return this.getExtendedContent("1") ? .title ? ?
                    null
            }
            isTransitStation() {
                return this.getExtendedContent("1") ? .is_transit_station ? ? !1
            }
        };
    var Yoa = new WeakSet;
    _.Ja(fC, Toa);
    fC.prototype.changed = function() {
        const a = this;
        var b = this.get("map");
        let c = null;
        b && (c = b.__gm, b = c.get("blockingLayerCount") || 0, c.set("blockingLayerCount", b + 1), c.set("disableLabelingHysteresis", this.get("disableLabelingHysteresis")), c.set("tilePrefetchEnabled", this.get("tilePrefetchEnabled")));
        _.ok("search_impl").then(d => {
            d.WE(a);
            c && (d = c.get("blockingLayerCount") || 0, c.set("blockingLayerCount", d - 1))
        })
    };
    fC.enableFeatureMapEventsRasterOnly = function(a) {
        if (_.Un[15]) {
            var b = a.__gm.Yg;
            if (!Yoa.has(a)) {
                Yoa.add(a);
                var c = [],
                    d = (f, g) => {
                        f = Voa(f);
                        f.length && _.Ok(a, g, f)
                    },
                    e = () => {
                        for (; c.length > 0;) c.pop().remove();
                        b.forEach(f => {
                            if (f = f.data) c.push(_.Ak(f, "insert", g => d(g, "addfeatures"))), c.push(_.Ak(f, "remove", g => d(g, "removefeatures")))
                        })
                    };
                b.addListener("insert_at", e);
                b.addListener("remove_at", e);
                b.addListener("set_at", e);
                e()
            }(() => {
                const f = [];
                b.forEach(g => {
                    f.push(...Woa(g))
                });
                f.length && _.Ok(a, "addfeatures", f)
            })()
        }
    };
    _.Ha("module$contents$mapsapi$onionLayers$search$googleLayer_GoogleLayer.enableFeatureMapEventsRasterOnly", fC.enableFeatureMapEventsRasterOnly);
    _.zl(fC.prototype, {
        map: _.lr
    });
    _.ua.google.maps.search = {
        GoogleLayer: fC
    };
    _.pk("search", {});
});