"use strict";
(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [9647], {
        55096: function(e, n, t) {
            t.r(n);
            var a = t(73020),
                o = t(81267);
            n.default = function(e) {
                (0, o.Z)().then((function() {
                    var n = (0, a.a)(window, "Y.Squarespace.Singletons.ShoppingCart", null);
                    n && (n.on("item-added", (function(n) {
                        e.classList.remove("hidden")
                    })), n.after("load", (function(n) {
                        n.target.get("totalQuantity") > 0 && e.classList.remove("hidden")
                    })))
                }))
            }
        }
    }
]);