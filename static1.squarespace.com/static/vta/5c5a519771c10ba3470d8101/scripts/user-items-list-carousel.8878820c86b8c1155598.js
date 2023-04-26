"use strict";
(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [8971], {
        35604: function(e, t, i) {
            i.r(t), i.d(t, {
                UserItemsListCarousel: function() {
                    return _
                }
            });
            i(92338);
            var o = i(6370),
                r = i(45301),
                n = i(92651),
                s = i(42379),
                l = i(62766),
                a = i(19157),
                d = i(1678),
                u = i(22358),
                c = i(1681),
                h = i(58200);

            function p(e) {
                return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, p(e)
            }

            function m(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, o)
                }
                return i
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(i), !0).forEach((function(t) {
                        C(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : m(Object(i)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }

            function S(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var o = t[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function v(e, t) {
                return v = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, v(e, t)
            }

            function w(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var i, o = b(e);
                    if (t) {
                        var r = b(this).constructor;
                        i = Reflect.construct(o, arguments, r)
                    } else i = o.apply(this, arguments);
                    return y(this, i)
                }
            }

            function y(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? g(e) : t
            }

            function g(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function b(e) {
                return b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, b(e)
            }

            function C(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }
            var A = 0,
                B = 20,
                I = "px",
                x = 576,
                _ = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && v(e, t)
                    }(m, e);
                    var t, i, r, p = w(m);

                    function m(e) {
                        var t;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, m), C(g(t = p.call(this)), "getResponsiveSpaceBetweenSlides", (function(e) {
                            var t = e.spaceValue,
                                i = e.spaceUnit;
                            return window.innerWidth < x && (t = B, i = I), {
                                value: t,
                                unit: i
                            }
                        })), C(g(t), "getStateFromDOM", (function() {
                            var e = JSON.parse(t.node.dataset.currentContext),
                                i = Object.assign({}, e);
                            return i.userItems.forEach((function(e) {
                                e.image && (e.imageId = e.image.id, delete e.image)
                            })), i
                        })), C(g(t), "loadImage", (function(e) {
                            e && (e.onload = function() {
                                e.dataset.loaded = !0
                            }, n.Z.loadLazy(e, {
                                load: !0,
                                useAdvancedPositioning: !0
                            }))
                        })), C(g(t), "updateRef", (function() {
                            var e = t.props,
                                i = e.itemSelector,
                                o = e.imageSelector,
                                r = e.contentSelector,
                                n = e.mediaSelector,
                                s = e.mediaInnerSelector,
                                l = e.slidesContainerSelector,
                                a = e.arrowLeftWrapperSelector,
                                d = e.arrowRightWrapperSelector,
                                u = e.arrowsBottomSelector,
                                c = e.parentSectionSelector,
                                h = e.listWrapperSelector,
                                p = e.itemTitleSelector,
                                m = e.itemDescriptionSelector,
                                f = e.itemButtonSelector,
                                S = e.itemButtonContainerSelector,
                                v = e.listTitleSelector,
                                w = e.listButtonWrapperSelector,
                                y = e.listButtonSelector;
                            return {
                                layoutContainer: t.node,
                                userItems: Array.from(t.node.querySelectorAll(i)),
                                images: Array.from(t.node.querySelectorAll(o)),
                                contentContainers: Array.from(t.node.querySelectorAll(r)),
                                mediaContainers: Array.from(t.node.querySelectorAll(n)),
                                mediaInnerContainers: Array.from(t.node.querySelectorAll(s)),
                                slidesContainer: t.node.querySelector(l),
                                arrowLeftWrapper: t.node.querySelector(a),
                                arrowRightWrapper: t.node.querySelector(d),
                                arrowsBottom: t.node.querySelector(u),
                                parentNode: t.node.closest(c),
                                listWrapperElement: t.node.closest(h),
                                itemTitles: Array.from(t.node.querySelectorAll(p)),
                                itemDescriptions: Array.from(t.node.querySelectorAll(m)),
                                itemButtons: Array.from(t.node.querySelectorAll(f)),
                                itemButtonContainers: Array.from(t.node.querySelectorAll(S)),
                                listTitleElement: t.node.parentElement.querySelector(v),
                                listButtonWrapper: t.node.parentElement.querySelector(w),
                                listButtonElement: t.node.parentElement.querySelector(y)
                            }
                        })), C(g(t), "updateRefCloneItems", (function() {
                            t.ref = t.updateRef()
                        })), C(g(t), "handleArrowVisibility", (function() {
                            if (!t.isInfiniteEnabled && "arrows" === t.navigationControls) {
                                if (t.slideshowProps.totalSlideCount <= t.getSlideColumnCount()) return t.hideArrow(t.previousBtn), void t.hideArrow(t.nextBtn);
                                t.slideshowProps.targetSlideIndex <= 0 ? t.hideArrow(t.previousBtn) : t.showArrow(t.previousBtn), t.slideshowProps.targetSlideIndex >= t.behaviors.getLastScrollableSlideIndex() ? t.hideArrow(t.nextBtn) : t.showArrow(t.nextBtn)
                            }
                        })), C(g(t), "onResize", (function() {
                            var e = t.getSlideColumnCount();
                            t.removeClones(), t.slideshowNodes = t.buildItems(t.slides), t.list.props.items = t.slideshowNodes, t.loadImages(t.ref.images), t.list.props.slideshowGutterWidth = t.getSlideshowGutterWidth(), t.list.props.slideColumnCount = e, t.behaviors && (t.behaviors.props.slideColumnCount = e), t.list.props.spacing = t.getResponsiveSpaceBetweenSlides({
                                spaceValue: t.spaceBetweenSlidesValue,
                                spaceUnit: t.spaceBetweenSlidesUnit
                            }), t.list.setSize(t.getSlideshowDimensions()), t.updatePositions(), t.slideshowProps.targetSlideIndex = t.slideshowProps.progressIndex, t.handleArrowVisibility()
                        })), C(g(t), "removeClones", (function() {
                            t.slidesContainer.innerHTML = "";
                            var e = new DocumentFragment;
                            t.slides.forEach((function(t) {
                                e.appendChild(t)
                            })), t.slidesContainer.appendChild(e)
                        })), C(g(t), "onClickNavPrevious", (function() {
                            t.behaviors.previousIndex()
                        })), C(g(t), "onClickNavNext", (function() {
                            t.behaviors.nextIndex()
                        })), C(g(t), "onProgress", (function(e) {
                            t.slideshowProps.progressIndex = (.5 + e << 0) % t.slideshowProps.totalSlideCount, t.list.setProgress(e), t.updatePositions()
                        })), C(g(t), "onStartProgress", (function(e) {
                            if (t.slideshowProps.targetSlideIndex = e, t.handleArrowVisibility(), !t.dragBehaviors.isDragging) {
                                var i = t.slideshowNodes.length,
                                    o = Math.round((e + i) % i);
                                t.updateAriaContainer({
                                    currentSlideIndex: o
                                })
                            }
                        })), C(g(t), "onCloneItem", (function(e) {
                            var i = t.slideshowNodes[e],
                                o = i.node.parentNode,
                                r = i.node.cloneNode(!0);
                            r.querySelectorAll("h1, h2, h3, h4, h5, p, [data-animation-role]").forEach((function(e) {
                                (0, l.D)(e), e.classList.remove(a.q)
                            })), (0, l.D)(r);
                            var n = r.querySelector(t.nodeSelectors.slideshowItemImage);
                            r.dataset.originalItemIndex = i.index, o.appendChild(r), t.slideshowNodes.push(f(f({}, i), {}, {
                                node: r,
                                imageNode: n,
                                isImageLoadAdded: !1,
                                inViewport: null
                            })), t.loadImage(n)
                        })), t.node = e, t.shouldShowAdjacentSlides = "true" === e.getAttribute("data-show-adjacent-slides"), t.isInfiniteEnabled = "true" === e.getAttribute("data-is-infinite-enabled"), t.spaceBetweenSlidesValue = Number(e.getAttribute("data-space-between-slides-value")), t.spaceBetweenSlidesUnit = e.getAttribute("data-space-between-slides-unit"), t.maxColumns = e.getAttribute("data-max-columns"), t.navigationControls = e.getAttribute("data-navigation-controls"), t.nodeSelectors = {
                            slideshowWidthConstrainer: ".user-items-list-carousel__gutter",
                            slidesContainer: ".user-items-list-carousel__slides",
                            slide: ".user-items-list-carousel__slide",
                            slideshowItemImage: ".user-items-list-carousel__media",
                            previousBtn: ".user-items-list-carousel__arrow-button--left",
                            nextBtn: ".user-items-list-carousel__arrow-button--right",
                            previousBtnMobile: ".mobile-arrow-button--left",
                            nextBtnMobile: ".mobile-arrow-button--right"
                        }, t.classNames = {
                            isSlideshowInitialized: "user-items-list-carousel__slides--initialized",
                            isArrowHidden: "user-items-list-carousel__arrow-button--hidden"
                        };
                        var i = t.props,
                            o = i.unorderedListSelector,
                            r = i.itemSelector,
                            s = i.imageSelector,
                            d = i.contentSelector,
                            u = i.mediaSelector,
                            c = i.mediaInnerSelector,
                            h = i.slidesContainerSelector,
                            S = i.arrowLeftWrapperSelector,
                            v = i.arrowRightWrapperSelector,
                            w = i.parentSectionSelector,
                            y = i.itemTitleSelector,
                            b = i.itemDescriptionSelector,
                            _ = i.itemButtonSelector,
                            k = i.itemButtonContainerSelector,
                            W = i.listWrapperSelector,
                            P = i.listTitleSelector,
                            q = i.listButtonWrapperSelector,
                            N = i.listButtonSelector,
                            E = i.arrowsBottomSelector;
                        return t.ref = {
                            unorderedList: t.node.querySelector(o),
                            layoutContainer: t.node,
                            userItems: Array.from(t.node.querySelectorAll(r)),
                            images: Array.from(t.node.querySelectorAll(s)),
                            contentContainers: Array.from(t.node.querySelectorAll(d)),
                            mediaContainers: Array.from(t.node.querySelectorAll(u)),
                            mediaInnerContainers: Array.from(t.node.querySelectorAll(c)),
                            slidesContainer: t.node.querySelector(h),
                            arrowLeftWrapper: t.node.querySelector(S),
                            arrowRightWrapper: t.node.querySelector(v),
                            arrowsBottom: t.node.querySelector(E),
                            itemTitles: Array.from(t.node.querySelectorAll(y)),
                            itemDescriptions: Array.from(t.node.querySelectorAll(b)),
                            itemButtons: Array.from(t.node.querySelectorAll(_)),
                            itemButtonContainers: Array.from(t.node.querySelectorAll(k)),
                            parentNode: t.node.closest(w),
                            listWrapperElement: t.node.closest(W),
                            listTitleElement: t.node.parentElement.querySelector(P),
                            listButtonWrapper: t.node.parentElement.querySelector(q),
                            listButtonElement: t.node.parentElement.querySelector(N)
                        }, t.sectionId = t.node.dataset.sectionId, t.state = t.getStateFromDOM(), t.initializeSlideshowDom(), t.initializeSlideshowBehaviors(), t.initializeSlideshowProperties(), t.initializeDragBehaviors(), t.initializeSlideshow(), t.behaviors.setIndex(A, {
                            isInstant: !0
                        }), t
                    }
                    return t = m, (i = [{
                        key: "loadImages",
                        value: function(e) {
                            e.forEach(this.loadImage)
                        }
                    }, {
                        key: "addAriaContainer",
                        value: function(e) {
                            var t = e.targetElement,
                                i = document.createElement("div");
                            i.setAttribute("aria-live", "polite"), i.setAttribute("aria-atomic", "true"), i.setAttribute("style", "position: absolute; pointer-events: none; opacity: 0;"), t.appendChild(i), this.ariaContainer = i
                        }
                    }, {
                        key: "updateAriaContainer",
                        value: function(e) {
                            var t = e.currentSlideIndex,
                                i = this.slideshowNodes.length;
                            this.ariaContainer.innerHTML = "Item ".concat(t + 1, " of ").concat(i)
                        }
                    }, {
                        key: "initializeSlideshowDom",
                        value: function() {
                            this.loadImages(this.ref.images), this.slideshowWidthConstrainer = this.node.querySelector(this.nodeSelectors.slideshowWidthConstrainer), this.slidesContainer = this.node.querySelector(this.nodeSelectors.slidesContainer), this.previousBtn = this.node.querySelector(this.nodeSelectors.previousBtn), this.nextBtn = this.node.querySelector(this.nodeSelectors.nextBtn), this.previousBtnMobile = this.node.querySelector(this.nodeSelectors.previousBtnMobile), this.nextBtnMobile = this.node.querySelector(this.nodeSelectors.nextBtnMobile), this.slides = Array.from(this.node.querySelectorAll(this.nodeSelectors.slide)), this.slideshowNodes = this.buildItems(this.slides), this.addAriaContainer({
                                targetElement: this.slideshowWidthConstrainer
                            })
                        }
                    }, {
                        key: "initializeSlideshowBehaviors",
                        value: function() {
                            this.behaviors = new u.Z({
                                nodes: {
                                    focus: this.slideshowWidthConstrainer
                                },
                                numSlides: this.slideshowNodes.length,
                                slideColumnCount: this.getSlideColumnCount(),
                                isAutoplay: !1,
                                autoplayInterval: 3e3,
                                isInfinite: this.isInfiniteEnabled,
                                transitionDuration: 250,
                                onProgress: this.onProgress,
                                onStartProgress: this.onStartProgress,
                                shouldStopNavAtEnds: !0
                            }), this.list = new h.Z(f(f({
                                items: this.slideshowNodes
                            }, this.getSlideshowDimensions()), {}, {
                                spacing: this.getResponsiveSpaceBetweenSlides({
                                    spaceValue: this.spaceBetweenSlidesValue,
                                    spaceUnit: this.spaceBetweenSlidesUnit
                                }),
                                isInfinite: this.isInfiniteEnabled,
                                onCloneItem: this.onCloneItem,
                                slideshowGutterWidth: this.getSlideshowGutterWidth(),
                                onRedraw: this.updateRefCloneItems
                            }))
                        }
                    }, {
                        key: "destroySlideshow",
                        value: function() {
                            this.behaviors && this.behaviors.destroy(), this.list && this.list.destroy()
                        }
                    }, {
                        key: "initializeSlideshowProperties",
                        value: function() {
                            this.slideshowProps = {
                                slideDimensions: this.list.props.items[0],
                                totalSlideCount: this.slideshowNodes.length,
                                progress: 0,
                                progressIndex: 0,
                                targetSlideIndex: 0
                            }
                        }
                    }, {
                        key: "initializeDragBehaviors",
                        value: function() {
                            var e = this.node.querySelector(this.nodeSelectors.slideshowWidthConstrainer);
                            this.dragBehaviors = new c.Z(e, {
                                slideshowProps: this.slideshowProps,
                                behaviors: this.behaviors,
                                callback: this.handleArrowVisibility
                            })
                        }
                    }, {
                        key: "initializeSlideshow",
                        value: function() {
                            this.updatePositions(), this.slidesContainer.classList.add(this.classNames.isSlideshowInitialized), this.bindListeners(), this.handleArrowVisibility(), this.updateAriaContainer({
                                currentSlideIndex: 0
                            })
                        }
                    }, {
                        key: "hideArrow",
                        value: function(e) {
                            e && (e.classList.add(this.classNames.isArrowHidden), e.setAttribute("tabindex", "-1"), e.setAttribute("data-override-initial-global-animation", ""))
                        }
                    }, {
                        key: "showArrow",
                        value: function(e) {
                            e && (e.classList.remove(this.classNames.isArrowHidden), e.setAttribute("tabindex", "0"), e.removeAttribute("data-override-initial-global-animation"))
                        }
                    }, {
                        key: "getSlideColumnCount",
                        value: function() {
                            var e = this,
                                t = window.innerWidth,
                                i = 1;
                            return Object.values({
                                "breakpoint-up-sm": {
                                    minScreenWidth: 576,
                                    columnsWeHaveRoomFor: 2
                                },
                                "breakpoint-up-lg": {
                                    minScreenWidth: 992,
                                    columnsWeHaveRoomFor: 3
                                },
                                "breakpoint-up-xxl": {
                                    minScreenWidth: 1200,
                                    columnsWeHaveRoomFor: 4
                                }
                            }).forEach((function(o) {
                                t >= o.minScreenWidth && (i = Math.min(o.columnsWeHaveRoomFor, e.maxColumns))
                            })), i
                        }
                    }, {
                        key: "getSlideshowGutterWidth",
                        value: function() {
                            var e = this.slidesContainer.getBoundingClientRect();
                            return this.slidesContainer.offsetWidth / e.width * (e.x - this.slideshowWidthConstrainer.getBoundingClientRect().x)
                        }
                    }, {
                        key: "bindListeners",
                        value: function() {
                            var e, t, i, r;
                            "none" !== this.state.options.navigationControls && (null === (i = this.previousBtn) || void 0 === i || i.addEventListener("click", this.onClickNavPrevious), null === (r = this.nextBtn) || void 0 === r || r.addEventListener("click", this.onClickNavNext)), null === (e = this.previousBtnMobile) || void 0 === e || e.addEventListener("click", this.onClickNavPrevious), null === (t = this.nextBtnMobile) || void 0 === t || t.addEventListener("click", this.onClickNavNext), this.onResize = (0, s.Z)(this.onResize, d.FY), o.Z.on(this.onResize)
                        }
                    }, {
                        key: "unbindListeners",
                        value: function() {
                            var e, t, i, r;
                            "none" !== this.state.options.navigationControls && (null === (i = this.previousBtn) || void 0 === i || i.removeEventListener("click", this.onClickNavPrevious), null === (r = this.nextBtn) || void 0 === r || r.removeEventListener("click", this.onClickNavNext)), null === (e = this.previousBtnMobile) || void 0 === e || e.removeEventListener("click", this.onClickNavPrevious), null === (t = this.nextBtnMobile) || void 0 === t || t.removeEventListener("click", this.onClickNavNext), o.Z.off(this.onResize)
                        }
                    }, {
                        key: "getSlideshowDimensions",
                        value: function() {
                            var e = this.slideshowWidthConstrainer.offsetWidth,
                                t = this.slideshowWidthConstrainer.offsetHeight;
                            return {
                                regionWidth: e,
                                regionHeight: t,
                                maxWidth: e,
                                maxHeight: t
                            }
                        }
                    }, {
                        key: "setItemIndex",
                        value: function(e) {
                            for (var t = 0; t < e.length; t++) e[t].length && A !== t && (A = t, this.behaviors.setIndex(A))
                        }
                    }, {
                        key: "buildItems",
                        value: function(e) {
                            var t = this;
                            return e.map((function(e, i) {
                                return {
                                    width: e.offsetWidth,
                                    height: e.offsetHeight,
                                    index: i,
                                    node: e,
                                    imageNode: e.querySelector(t.nodeSelectors.slideshowItemImage),
                                    isImageLoadAdded: !1,
                                    inViewport: null
                                }
                            }))
                        }
                    }, {
                        key: "updatePositions",
                        value: function() {
                            for (var e = [], t = 0, i = this.slideshowNodes.length; t < i; t += 1) {
                                var o = this.slideshowNodes[t],
                                    r = this.list.items[t],
                                    n = !r.inViewport,
                                    s = o.inViewport !== r.inViewport;
                                n ? o.node.setAttribute("aria-hidden", !0) : (o.node.removeAttribute("aria-hidden"), e.push(o.node)), (o.inViewport || s) && (o.node.style.transform = "translate3d(" + r.x + "px, 0, 0)", o.inViewport = r.inViewport)
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.behaviors && (this.behaviors.destroy(), delete this.behaviors), this.dragBehaviors && (this.dragBehaviors.destroy(), delete this.dragBehaviors), this.unbindListeners()
                        }
                    }]) && S(t.prototype, i), r && S(t, r), m
                }(r.Z);
            C(_, "defaultProps", {
                unorderedListSelector: ".user-items-list-carousel__slides",
                itemSelector: ".list-item",
                imageSelector: "img",
                contentSelector: ".list-item-content",
                mediaSelector: ".user-items-list-carousel__media-container",
                mediaInnerSelector: ".user-items-list-carousel__media-inner",
                itemTitleSelector: ".list-item-content__title",
                itemDescriptionSelector: ".list-item-content__description",
                itemButtonContainerSelector: ".list-item-content__button-container",
                itemButtonSelector: ".list-item-content__button",
                slidesContainerSelector: ".user-items-list-carousel__slides",
                arrowLeftWrapperSelector: ".user-items-list-carousel__arrow-wrapper--left",
                arrowRightWrapperSelector: ".user-items-list-carousel__arrow-wrapper--right",
                arrowContainerSelector: ".user-items-list-carousel__arrow-container",
                arrowPositionerSelector: ".user-items-list-carousel__arrow-positioner",
                parentSectionSelector: ".user-items-list-section",
                listWrapperSelector: ".user-items-list",
                hideElementClass: "list-item-content--hidden",
                listTitleSelector: ".list-section-title",
                listButtonWrapperSelector: ".list-section-button-container",
                listButtonSelector: ".list-section-button",
                arrowsBottomSelector: ".arrows-bottom-wrapper"
            }), t.default = function(e) {
                return new _(e)
            }
        }
    }
]);