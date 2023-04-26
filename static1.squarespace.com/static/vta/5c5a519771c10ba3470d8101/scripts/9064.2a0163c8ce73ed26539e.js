"use strict";
(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [9064], {
        22358: function(t, e, r) {
            r.d(e, {
                Z: function() {
                    return v
                }
            });
            var n = r(19920),
                i = r(53659);

            function o(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? o(Object(r), !0).forEach((function(e) {
                        a(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function a(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function u(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var c = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.defaultProps = {
                        isEnabled: !0,
                        interval: 3e3,
                        callback: i.Z
                    }, this.props = s(s({}, this.defaultProps), e), this.timeout = null, this.onTimeout = this.onTimeout.bind(this)
                }
                var e, r, n;
                return e = t, (r = [{
                    key: "start",
                    value: function() {
                        var t = this.props,
                            e = t.isEnabled,
                            r = t.interval;
                        e && (this.timeout = setTimeout(this.onTimeout, r))
                    }
                }, {
                    key: "cancel",
                    value: function() {
                        clearTimeout(this.timeout)
                    }
                }, {
                    key: "onTimeout",
                    value: function() {
                        (0, this.props.callback)()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        clearTimeout(this.timeout)
                    }
                }]) && u(e.prototype, r), n && u(e, n), t
            }();

            function p(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? p(Object(r), !0).forEach((function(e) {
                        d(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function h(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function d(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var f = 39,
                g = 37,
                v = function() {
                    function t(e) {
                        var r = this;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), d(this, "getLastScrollableSlideIndex", (function() {
                            return r.props.numSlides - r.props.slideColumnCount
                        })), d(this, "setIndex", (function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                i = e.skipModulus,
                                o = e.isInstant,
                                s = r.props,
                                a = s.transitionDuration,
                                u = s.isInfinite,
                                c = s.onStartProgress,
                                p = s.shouldStopNavAtEnds,
                                l = r.len,
                                h = t;
                            if (!u && p) {
                                var d = r.getLastScrollableSlideIndex() || l - 1;
                                if (h < 0) return r.pos.current = 0, void(r.pos.target = 0);
                                if (h > d) return r.pos.current = d, void(r.pos.target = d)
                            }
                            if (!i || !u) {
                                var f = (t % l + l) % l || 0;
                                h = f, r.pos.target = (r.pos.target % l + l) % l || 0, r.pos.current = (r.pos.current % l + l) % l || 0
                            }
                            if (h !== r.pos.target || o) {
                                if (r.isTransitioning = !0, r.refreshAutoplayState(), r.pos.target = t, r.tween && r.tween.destroy(), c(r.pos.target), o) return r.setProgress(r.pos.target), void r.onTransitionComplete();
                                r.tween = new n.Z({
                                    duration: .001 * a,
                                    from: r.pos.current,
                                    to: r.pos.target,
                                    onUpdate: r.setProgress,
                                    onComplete: r.onTransitionComplete
                                })
                            }
                        })), d(this, "setOffsetIndex", (function(t, e) {
                            var n = r.props,
                                i = n.isInfinite,
                                o = n.shouldStopNavAtEnds,
                                s = Math.round(r.pos.target + t);
                            !i && !o && (s < 0 ? s = r.len - 1 : s > r.len - 1 && (s = 0)), r.setIndex(s, l(l({}, e), {}, {
                                skipModulus: !0
                            }))
                        })), d(this, "previousIndex", (function(t) {
                            return r.setOffsetIndex(-1, t)
                        })), d(this, "nextIndex", (function(t) {
                            return r.setOffsetIndex(1, t)
                        })), d(this, "onItemOver", (function() {
                            r.isItemOver = !0, r.refreshAutoplayState()
                        })), d(this, "onItemOut", (function() {
                            r.isItemOver = !1, r.refreshAutoplayState()
                        })), d(this, "onTransitionComplete", (function() {
                            r.isTransitioning = !1, r.refreshAutoplayState()
                        })), d(this, "refreshAutoplayState", (function() {
                            r.isTransitioning || r.isItemOver ? r.autoplay.cancel() : r.autoplay.start()
                        })), d(this, "setProgress", (function(t) {
                            r.updateProgressValue(t)
                        })), d(this, "onKeyDown", (function(t) {
                            if (t.keyCode === f) return r.nextIndex(), void t.preventDefault();
                            t.keyCode === g && (r.previousIndex(), t.preventDefault())
                        })), d(this, "updateProgressValue", (function(t) {
                            var e = r.props.onProgress,
                                n = r.len,
                                i = (t % n + n) % n || 0;
                            r.pos.current = t, e(i)
                        })), d(this, "onAutoplay", (function() {
                            r.nextIndex()
                        })), this.defaultProps = {
                            nodes: {
                                focus: document.createElement("div"),
                                drag: document.createElement("div")
                            },
                            isAutoplay: !1,
                            autoplayInterval: 3e3,
                            isInfinite: !0,
                            numSlides: 0,
                            slideColumnCount: 1,
                            transitionDuration: 600,
                            onProgress: i.Z,
                            onStartProgress: i.Z,
                            onEnterViewport: i.Z,
                            onLeaveViewport: i.Z,
                            onFocusChange: i.Z,
                            shouldStopNavAtEnds: !1
                        }, this.props = l(l({}, this.defaultProps), e);
                        var o = this.props.numSlides;
                        this.len = o, this.pos = {
                            target: 0,
                            current: 0
                        }, this.isTransitioning = !1, this.isItemOver = !1, this.interaction = null, this.autoplay = null, this.bindListeners()
                    }
                    var e, r, o;
                    return e = t, (r = [{
                        key: "update",
                        value: function(t) {
                            this.unbindListeners(), this.props = l(l({}, this.props), t);
                            var e = this.props.numSlides;
                            this.len = e, this.bindListeners()
                        }
                    }, {
                        key: "bindListeners",
                        value: function() {
                            var t = this.props,
                                e = t.isAutoplay,
                                r = t.autoplayInterval,
                                n = this.props.nodes.focus;
                            n.setAttribute("tabindex", "0"), n.addEventListener("keydown", this.onKeyDown), this.autoplay = new c({
                                isEnabled: e,
                                interval: r,
                                callback: this.onAutoplay
                            })
                        }
                    }, {
                        key: "unbindListeners",
                        value: function() {
                            var t = this.props.nodes.focus;
                            t && t.removeEventListener("keydown", this.onKeyDown), this.observer && t && this.observer.remove(t), this.autoplay.destroy()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.unbindListeners(), this.tween && (this.tween.destroy(), delete this.tween), this.interaction && (this.interaction.destroy(), delete this.interaction), delete this.props.nodes
                        }
                    }]) && h(e.prototype, r), o && h(e, o), t
                }()
        },
        58200: function(t, e, r) {
            r.d(e, {
                Z: function() {
                    return d
                }
            });
            r(92338);
            var n = r(53659),
                i = r(9319),
                o = r(71355);

            function s(t) {
                return function(t) {
                    if (Array.isArray(t)) return a(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return a(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return a(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function u(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(r), !0).forEach((function(e) {
                        p(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function p(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function l(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var h = 100,
                d = function() {
                    function t(e) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.defaultProps = {
                            regionWidth: 800,
                            regionHeight: 600,
                            maxWidth: 800,
                            maxHeight: 600,
                            spacing: {
                                value: 100,
                                unit: "%"
                            },
                            items: [],
                            isInfinite: !1,
                            onCloneItem: n.Z,
                            slideshowGutterWidth: 0,
                            onRedraw: n.Z
                        }, this.props = c(c({}, this.defaultProps), e);
                        var r = this.props,
                            o = r.regionWidth,
                            s = r.regionHeight,
                            a = r.maxWidth,
                            u = r.maxHeight;
                        this.progress = 0, this.dimensions = {
                            regionWidth: o,
                            regionHeight: s,
                            maxWidth: (0, i.Z)(a, h, o),
                            maxHeight: (0, i.Z)(u, h, s)
                        }, this.items = [], this.totalWidth = 0, this.setSize = this.setSize.bind(this), this.redraw(), this.refresh()
                    }
                    var e, r, a;
                    return e = t, r = [{
                        key: "setSize",
                        value: function(t) {
                            this.dimensions = c(c({}, this.dimensions), t);
                            var e = this.dimensions,
                                r = e.regionWidth,
                                n = e.regionHeight,
                                o = e.maxWidth,
                                s = e.maxHeight;
                            this.dimensions.maxWidth = (0, i.Z)(o, h, r), this.dimensions.maxHeight = (0, i.Z)(s, h, n), this.redraw(), this.refresh()
                        }
                    }, {
                        key: "setProgress",
                        value: function(t) {
                            this.progress = t, this.refresh()
                        }
                    }, {
                        key: "update",
                        value: function(t) {
                            this.props = c(c({}, this.props), t), this.redraw(), this.refresh()
                        }
                    }, {
                        key: "redraw",
                        value: function() {
                            var t = this.props,
                                e = t.items,
                                r = t.isInfinite,
                                n = t.onRedraw,
                                i = this.dimensions.regionWidth,
                                o = e.length;
                            if (this.items = [], o) {
                                var a = this.getItems(e),
                                    u = a.totalWidth;
                                if (this.items = a.items, r) {
                                    for (var c = a.minSpacing * o; u + c < 1.5 * i && u > 0 && i > 0;) {
                                        var p;
                                        a = this.getItems(e, {
                                            startOffset: u,
                                            isClone: !0
                                        }), (p = this.items).push.apply(p, s(a.items)), u = a.totalWidth
                                    }
                                    n()
                                }
                                this.totalWidth = u, this.lerps = this.createLerps(this.items, u)
                            }
                        }
                    }, {
                        key: "getItems",
                        value: function(t) {
                            var e = this,
                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = r.startOffset,
                                i = void 0 === n ? 0 : n,
                                o = r.isClone,
                                s = this.props.onCloneItem,
                                a = Number.MAX_VALUE,
                                u = i,
                                c = t.map((function(t, r) {
                                    var n = e.getItemData(t, u);
                                    return u += n.width, a = Math.min(a, n.spacing), o && s(r), n
                                }));
                            return {
                                items: c,
                                totalWidth: u,
                                minSpacing: a
                            }
                        }
                    }, {
                        key: "getItemData",
                        value: function(t, e) {
                            var r = this.dimensions.regionHeight,
                                n = this.getContentSize(t),
                                i = n.width,
                                o = n.height;
                            return {
                                localX: e,
                                x: e,
                                y: .5 * r - .5 * o,
                                proximity: 0,
                                inViewport: !1,
                                width: i,
                                height: o,
                                spacing: this.getContentSpacing(i)
                            }
                        }
                    }, {
                        key: "getContentSize",
                        value: function(t) {
                            return {
                                width: t.width,
                                height: this.dimensions.maxHeight
                            }
                        }
                    }, {
                        key: "getContentSpacing",
                        value: function(t) {
                            var e = this.props.spacing,
                                r = this.dimensions.regionWidth;
                            return "%" === e.unit ? Math.round(e.value / 100 * r) : "vw" === e.unit ? Math.round(e.value / 100 * window.innerWidth) : "vh" === e.unit ? Math.round(e.value / 100 * window.innerHeight) : "vmin" === e.unit ? Math.round(e.value / 100 * Math.min(window.innerWidth, window.innerHeight)) : "vmax" === e.unit ? Math.round(e.value / 100 * Math.max(window.innerWidth, window.innerHeight)) : Math.round(e.value)
                        }
                    }, {
                        key: "createLerps",
                        value: function(t, e) {
                            var r = this.props.isInfinite,
                                n = {
                                    index: t.map((function(t, e) {
                                        return e
                                    })),
                                    position: t.map((function(t) {
                                        return t.localX + .5 * t.width
                                    })),
                                    spacing: t.map((function(t) {
                                        return t.spacing
                                    }))
                                };
                            return r && (n.index.push(n.index.length), n.position.push(e + .5 * t[0].width), n.spacing.push(t[0].spacing)), n
                        }
                    }, {
                        key: "refresh",
                        value: function() {
                            var t = this.props.isInfinite,
                                e = this.dimensions.regionWidth,
                                r = this.items.length;
                            if (r)
                                for (var n = (0, o.Gs)(this.progress, this.lerps.index), i = (0, o.zo)(n, this.lerps.index, this.lerps.position, this.progress), s = (0, o.zo)(n, this.lerps.index, this.lerps.spacing, this.progress), a = this.items[0].width / 2, u = 0, c = r; u < c; u += 1) {
                                    var p = this.items[u],
                                        l = a + p.localX - (i + this.progress * s),
                                        h = l + p.width < -this.props.slideshowGutterWidth,
                                        d = l >= e,
                                        f = u - this.progress;
                                    t && h ? (f += r, l += this.totalWidth + s * r) : t && d && (f -= r, l -= this.totalWidth + s * r);
                                    var g = l + p.width >= -this.props.slideshowGutterWidth && l < e;
                                    p.x = g ? l : -9999, p.inViewport = g, p.proximity = f, a += s
                                }
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            delete this.dimensions, delete this.items
                        }
                    }], r && l(e.prototype, r), a && l(e, a), t
                }()
        },
        1681: function(t, e, r) {
            r.d(e, {
                Z: function() {
                    return u
                }
            });
            var n = r(53659),
                i = r(8477);

            function o(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? o(Object(r), !0).forEach((function(e) {
                        a(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function a(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var u = function t(e, r) {
                var o = this;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), a(this, "bindListeners", (function() {
                    o.dragContainerNode.addEventListener("mousedown", o.onDragStart), o.dragContainerNode.addEventListener("mouseup", o.onDragEnd), o.dragContainerNode.addEventListener("mouseleave", o.onDragEnd), i.T && o.addTouchListeners()
                })), a(this, "unbindListeners", (function() {
                    o.dragContainerNode.removeEventListener("mousedown", o.onDragStart), o.dragContainerNode.removeEventListener("mouseup", o.onDragEnd), o.dragContainerNode.removeEventListener("mouseleave", o.onDragEnd), i.T && o.removeTouchListeners()
                })), a(this, "addTouchListeners", (function() {
                    o.dragContainerNode.addEventListener("touchstart", o.onDragStart, {
                        passive: !0
                    }), o.dragContainerNode.addEventListener("touchend", o.onDragEnd), o.dragContainerNode.addEventListener("touchcancel", o.onDragEnd), o.dragContainerNode.addEventListener("touchmove", o.onDragMove)
                })), a(this, "removeTouchListeners", (function() {
                    o.dragContainerNode.removeEventListener("touchstart", o.onDragStart, {
                        passive: !0
                    }), o.dragContainerNode.removeEventListener("touchend", o.onDragEnd), o.dragContainerNode.removeEventListener("touchcancel", o.onDragEnd), o.dragContainerNode.removeEventListener("touchmove", o.onDragMove)
                })), a(this, "onDragStart", (function(t) {
                    var e = !!t.target.closest("button, a"),
                        r = "number" == typeof t.button && 0 !== t.button;
                    if (!(e || r)) {
                        !!t.targetTouches || o.dragContainerNode.addEventListener("mousemove", o.onDragMove);
                        var n = (0, i.RR)(t),
                            s = n.clientX,
                            a = n.clientY;
                        o.isDragging = !0, o.dragStartX = s, o.dragStartY = a, o.slideProgressAtDragStart = o.props.behaviors.pos.current, o.dragDirectionX = 0, o.dragAxis = null, o.hasUserCommittedToDirection = !1, o.dragContainerNode.style.cursor = "grabbing"
                    }
                })), a(this, "onDragMove", (function(t) {
                    if (o.isDragging) {
                        var e = (0, i.RR)(t),
                            r = e.clientX,
                            n = e.clientY,
                            s = !!t.targetTouches,
                            a = r - o.dragStartX,
                            u = n - o.dragStartY;
                        if (!(r === o.previousDragPositionX && n === o.previousDragPositionY))
                            if (o.previousDragPositionX = r, o.previousDragPositionY = n, s && (o.dragAxis = o.determineDragAxis({
                                    currentDragAxis: o.dragAxis,
                                    absoluteDragDistanceX: Math.abs(a),
                                    absoluteDragDistanceY: Math.abs(u)
                                }), "horizontal" !== o.dragAxis)) o.dragDirectionX = 0;
                            else {
                                t.preventDefault();
                                var c = o.props.slideshowProps.slideDimensions.width,
                                    p = o.slideProgressAtDragStart - a / c;
                                o.dragDirectionX = o.getHorizontalDragDirection({
                                    nextProgress: p,
                                    currentProgress: o.props.slideshowProps.progress,
                                    dragDistanceX: a,
                                    currentDragDirection: o.dragDirectionX
                                }), o.props.slideshowProps.progress = p, o.props.behaviors.setIndex(o.props.slideshowProps.progress, {
                                    isInstant: !0,
                                    skipModulus: !0
                                }), o.props.slideshowProps.progressIndex = Math.floor(.5 + o.props.slideshowProps.progress + .49 * o.dragDirectionX)
                            }
                    }
                })), a(this, "onDragEnd", (function(t) {
                    if (o.isDragging) {
                        o.isDragging = !1, o.dragContainerNode.style.removeProperty("cursor"), !!t.targetTouches || o.dragContainerNode.removeEventListener("mousemove", o.onDragMove);
                        var e = o.props.slideshowProps.progress !== ~~o.props.slideshowProps.progress,
                            r = "horizontal" !== o.dragAxis && e;
                        ("horizontal" === o.dragAxis || r) && o.props.behaviors.setIndex(o.props.slideshowProps.progressIndex, {
                            skipModulus: !0
                        }), o.props.slideshowProps.progress = o.props.slideshowProps.progressIndex, o.props.slideshowProps.targetSlideIndex = o.props.slideshowProps.progressIndex, o.props.callback()
                    }
                })), a(this, "determineDragAxis", (function(t) {
                    var e = t.currentDragAxis,
                        r = t.absoluteDragDistanceX,
                        n = t.absoluteDragDistanceY;
                    return o.hasUserCommittedToDirection ? e : (o.hasUserCommittedToDirection = r > o.minDragDistance || n > o.minDragDistance, r > 2 * n ? "horizontal" : "vertical")
                })), a(this, "getHorizontalDragDirection", (function(t) {
                    var e = t.nextProgress,
                        r = t.currentProgress,
                        n = t.dragDistanceX,
                        i = t.currentDragDirection,
                        s = e - r,
                        a = s ? s / Math.abs(s) : i;
                    return Math.abs(n) <= o.minDragDistance && (a = 0), a
                })), a(this, "destroy", (function() {
                    o.unbindListeners()
                })), this.dragContainerNode = e, this.defaultProps = {
                    slideshowProps: {
                        slideDimensions: {
                            width: 100,
                            height: 100
                        },
                        totalSlideCount: 0,
                        progress: 0,
                        progressIndex: 0,
                        targetSlideIndex: 0
                    },
                    behaviors: {},
                    callback: n.Z
                }, this.props = s(s({}, this.defaultProps), r), this.isDragging = !1, this.dragStartX = 0, this.slideProgressAtDragStart = 0, this.dragAxis = null, this.hasUserCommittedToDirection = !1, this.minDragDistance = 15, this.bindListeners()
            }
        },
        19920: function(t, e, r) {
            r.d(e, {
                Z: function() {
                    return f
                }
            });
            var n = r(45301),
                i = r(71355),
                o = r(53659);

            function s(t) {
                return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, s(t)
            }

            function a(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function u(t, e) {
                return u = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, u(t, e)
            }

            function c(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = h(t);
                    if (e) {
                        var i = h(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return p(this, r)
                }
            }

            function p(t, e) {
                return !e || "object" !== s(e) && "function" != typeof e ? l(t) : e
            }

            function l(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function h(t) {
                return h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, h(t)
            }

            function d(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var f = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && u(t, e)
                }(s, t);
                var e, r, n, o = c(s);

                function s(t) {
                    var e;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), d(l(e = o.call(this, t)), "tick", (function() {
                        var t = e.props,
                            r = t.ease,
                            n = t.from,
                            o = t.to,
                            s = t.duration,
                            a = t.onUpdate,
                            u = t.onComplete,
                            c = Date.now() - e.lastUpdate;
                        e.lastUpdate += c, e.time = (e.lastUpdate - e.startTime) / 1e3, e.time > s && (e.time = s), a((0, i.t7)(n, o, r(e.time / s))), e.time >= s ? u(o) : requestAnimationFrame(e.tick)
                    }));
                    var r = e.props.autoStart;
                    return e.state = {
                        isActive: !1
                    }, e.startTime = null, e.lastUpdate = null, e.frame = null, r && e.start(), e
                }
                return e = s, (r = [{
                    key: "start",
                    value: function() {
                        this.state.isActive || (this.setState({
                            isActive: !0
                        }), this.startTime = Date.now(), this.lastUpdate = this.startTime, this.frame = requestAnimationFrame(this.tick))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        cancelAnimationFrame(this.frame)
                    }
                }]) && a(e.prototype, r), n && a(e, n), s
            }(n.Z);
            d(f, "defaultProps", {
                autoStart: !0,
                ease: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                    return -r * (t /= n) * (t - 2) + e
                },
                duration: 1,
                from: 0,
                to: 0,
                onUpdate: o.Z,
                onComplete: o.Z
            })
        },
        9319: function(t, e) {
            e.Z = function(t, e, r) {
                return t < e ? e : t > r ? r : t
            }
        },
        71355: function(t, e, r) {
            r.d(e, {
                Gs: function() {
                    return i
                },
                t7: function() {
                    return n
                },
                xA: function() {
                    return o
                },
                zo: function() {
                    return s
                }
            });
            var n = function(t, e, r) {
                    return t * (1 - r) + e * r
                },
                i = function(t, e) {
                    var r;
                    for (r = 1; r < e.length - 1 && !(e[r] >= t); ++r);
                    return r - 1
                },
                o = function(t, e, r) {
                    var n = i(r, t),
                        o = t[n],
                        s = t[n + 1],
                        a = e[n];
                    return (r - o) / (s - o) * (e[n + 1] - a) + a
                },
                s = function(t, e, r, n) {
                    var i = e[t],
                        o = e[t + 1],
                        s = r[t],
                        a = r[t + 1],
                        u = (n - i) / (o - i);
                    return 1 === r.length ? s : u * (a - s) + s
                }
        }
    }
]);