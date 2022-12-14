/*! jQuery Browser - v0.1.0 - 3/23/2012
 * https://github.com/jquery/jquery-browser
 * Copyright (c) 2012 John Resig; Licensed MIT */
/*
    THIS IS A STRIPPED VERSION OF THE ORIGINAL LIBRARY!
*/
/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-csstransforms3d-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes
 */
/*!
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
/*! Hammer.JS - v2.0.4 - 2015-10-30
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2015 Jorik Tangelder;
 * Licensed under the  license */
/*
 * @name wowBook
 *
 * @author Marcio Aguiar
 * @version 1.3.4
 * @requires jQuery v1.7.0+
 *
 * Copyright 2010 Marcio Aguiar. All rights reserved.
 *
 * To use this file you must to buy a license at http://codecanyon.net/user/maguiar01/portfolio
 *
 */
/*
 jQuery Browser - v0.1.0 - 3/23/2012
 https://github.com/jquery/jquery-browser
 Copyright (c) 2012 John Resig; Licensed MIT  jQuery hashchange event - v1.3 - 7/21/2010
 http://benalman.com/projects/jquery-hashchange-plugin/

 Copyright (c) 2010 "Cowboy" Ben Alman
 Dual licensed under the MIT and GPL licenses.
 http://benalman.com/about/license/
 Hammer.JS - v2.0.4 - 2015-10-30
 http://hammerjs.github.io/

 Copyright (c) 2015 Jorik Tangelder;
 Licensed under the  license  Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 Licensed under the MIT License (LICENSE.txt).

 Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 Thanks to: Seamus Leahy for adding deltaX and deltaY

 Version: 3.0.6

 Requires: 1.2.2+
*/
(function(e) {
    if (!e.browser) {
        var n = navigator.userAgent || "";
        e.uaMatch = function(e) {
            e = e.toLowerCase();
            e = /(edge)[ \/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(e) || [];
            return {
                browser: e[1] || "",
                version: e[2] || "0"
            }
        };
        n = e.uaMatch(n);
        e.browser = {};
        n.browser && (e.browser[n.browser] = !0, e.browser.version = n.version);
        e.browser.webkit && (e.browser.safari = !0)
    }
})(jQuery);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    easeOutCubic: function(e, n, v, r, q) {
        return r * ((n = n / q - 1) * n * n + 1) + v
    },
    easeOutExpo: function(e, n, v, r, q) {
        return n == q ? v + r : r * (-Math.pow(2, -10 * n / q) + 1) + v
    }
});
window.Modernizr = function(e, n, v) {
    function r(a, b) {
        for (var c in a)
            if (B[a[c]] !== v) return "pfx" == b ? a[c] : !0;
        return !1
    }

    function q(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.substr(1),
            e = (a + " " + C.join(d + " ") + d).split(" ");
        if ("string" === typeof b || "undefined" === typeof b) b = r(e, b);
        else a: {
            e = (a + " " + D.join(d + " ") + d).split(" "), a = e;
            for (var g in a)
                if (d = b[a[g]], d !== v) {
                    b = !1 === c ? a[g] : "function" === typeof d ? d.bind(c || b) : d;
                    break a
                }
            b = !1
        }
        return b
    }
    var l = {},
        z = n.documentElement,
        m = n.createElement("modernizr"),
        B = m.style;
    e = " -webkit- -moz- -o- -ms- ".split(" ");
    var C = ["Webkit", "Moz", "O", "ms"],
        D = ["webkit", "moz", "o", "ms"],
        m = {},
        F = [],
        a = F.slice,
        b, c = function(a, b, c, d) {
            var e, g, f = n.createElement("div"),
                h = n.body,
                k = h ? h : n.createElement("body");
            if (parseInt(c, 10))
                for (; c--;) {
                    var p = n.createElement("div");
                    p.id = d ? d[c] : "modernizr" + (c + 1);
                    f.appendChild(p)
                }
            return e = ["&#173;<style>", a, "</style>"].join(""), f.id = "modernizr", (h ? f : k).innerHTML += e, k.appendChild(f), h || (k.style.background = "", z.appendChild(k)), g = b(f, a), h ? f.parentNode.removeChild(f) : k.parentNode.removeChild(k), !!g
        },
        d = {}.hasOwnProperty,
        g;
    "undefined" === typeof d || "undefined" === typeof d.call ? g = function(a, b) {
        return b in a && "undefined" === typeof a.constructor.prototype[b]
    } : g = function(a, b) {
        return d.call(a, b)
    };
    Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if ("function" != typeof c) throw new TypeError;
        var d = a.call(arguments, 1),
            e = function() {
                if (this instanceof e) {
                    var g = function() {};
                    g.prototype = c.prototype;
                    var g = new g,
                        f = c.apply(g, d.concat(a.call(arguments)));
                    return Object(f) === f ? f : g
                }
                return c.apply(b,
                    d.concat(a.call(arguments)))
            };
        return e
    });
    (function(a, b) {
        var d = a.join(""),
            e = b.length;
        c(d, function(a, b) {
            for (var c = a.childNodes, d = {}; e--;) d[c[e].id] = c[e];
            l.csstransforms3d = 9 === (d.csstransforms3d && d.csstransforms3d.offsetLeft) && 3 === d.csstransforms3d.offsetHeight
        }, e, b)
    })([, ["@media (", e.join("transform-3d),("), "modernizr){#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join("")], [, "csstransforms3d"]);
    m.csstransforms3d = function() {
        var a = !!q("perspective");
        return a && "webkitPerspective" in z.style &&
            (a = l.csstransforms3d), a
    };
    for (var f in m) g(m, f) && (b = f.toLowerCase(), l[b] = m[f](), F.push((l[b] ? "" : "no-") + b));
    B.cssText = "";
    return m = null, l._version = "2.5.3", l._prefixes = e, l._domPrefixes = D, l._cssomPrefixes = C, l.testProp = function(a) {
        return r([a])
    }, l.testAllProps = q, l.testStyles = c, l.prefixed = function(a, b, c) {
        return b ? q(a, b, c) : q(a, "pfx")
    }, l
}(this, this.document);
(function(e, n, v) {
    function r(e) {
        e = e || location.href;
        return "#" + e.replace(/^[^#]*#?(.*)$/, "$1")
    }
    "$:nomunge";
    var q = document,
        l = e.event.special,
        z = q.documentMode,
        m = "onhashchange" in n && (z === v || 7 < z);
    e.fn.hashchange = function(e) {
        return e ? this.bind("hashchange", e) : this.trigger("hashchange")
    };
    e.fn.hashchange.delay = 50;
    l.hashchange = e.extend(l.hashchange, {
        setup: function() {
            if (m) return !1;
            e(B.start)
        },
        teardown: function() {
            if (m) return !1;
            e(B.stop)
        }
    });
    var B = function() {
        function l() {
            var b = r(),
                f = d(a);
            b !== a ? (c(a = b, f), e(n).trigger("hashchange")) :
                f !== a && (location.href = location.href.replace(/#.*/, "") + f);
            B = setTimeout(l, e.fn.hashchange.delay)
        }
        var z = {},
            B, a = r(),
            b = function(a) {
                return a
            },
            c = b,
            d = b;
        z.start = function() {
            B || l()
        };
        z.stop = function() {
            B && clearTimeout(B);
            B = v
        };
        e.browser.msie && !m && function() {
            var a, f;
            z.start = function() {
                a || (f = (f = e.fn.hashchange.src) && f + r(), a = e('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                    f || c(r());
                    l()
                }).attr("src", f || "javascript:0").insertAfter("body")[0].contentWindow, q.onpropertychange = function() {
                    try {
                        "title" ===
                        event.propertyName && (a.document.title = q.title)
                    } catch (h) {}
                })
            };
            z.stop = b;
            d = function() {
                return r(a.location.href)
            };
            c = function(b, c) {
                var d = a.document,
                    g = e.fn.hashchange.domain;
                b !== c && (d.title = q.title, d.open(), g && d.write('<script>document.domain="' + g + '"\x3c/script>'), d.close(), a.location.hash = b)
            }
        }();
        return z
    }()
})(jQuery, this);
try {
    (function(e, n, v, r) {
        function q(a, b, c) {
            return setTimeout(D(a, c), b)
        }

        function l(a, b, c) {
            return Array.isArray(a) ? (z(a, c[b], c), !0) : !1
        }

        function z(a, b, c) {
            var d;
            if (a)
                if (a.forEach) a.forEach(b, c);
                else if (a.length !== r)
                for (d = 0; d < a.length;) b.call(c, a[d], d, a), d++;
            else
                for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d, a)
        }

        function m(a, b, c) {
            for (var d = Object.keys(b), e = 0; e < d.length;) {
                if (!c || c && a[d[e]] === r) a[d[e]] = b[d[e]];
                e++
            }
            return a
        }

        function B(a, b) {
            return m(a, b, !0)
        }

        function C(a, b, c) {
            b = b.prototype;
            var d = a.prototype =
                Object.create(b);
            d.constructor = a;
            d._super = b;
            c && m(d, c)
        }

        function D(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        }

        function F(a, b) {
            return "function" == typeof a ? a.apply(b ? b[0] || r : r, b) : a
        }

        function a(a, b, c) {
            z(d(b), function(b) {
                a.addEventListener(b, c, !1)
            })
        }

        function b(a, b, c) {
            z(d(b), function(b) {
                a.removeEventListener(b, c, !1)
            })
        }

        function c(a, b) {
            for (; a;) {
                if (a == b) return !0;
                a = a.parentNode
            }
            return !1
        }

        function d(a) {
            return a.trim().split(/\s+/g)
        }

        function g(a, b, c) {
            if (a.indexOf && !c) return a.indexOf(b);
            for (var d = 0; d < a.length;) {
                if (c &&
                    a[d][c] == b || !c && a[d] === b) return d;
                d++
            }
            return -1
        }

        function f(a) {
            return Array.prototype.slice.call(a, 0)
        }

        function h(a, b, c) {
            for (var d = [], e = [], f = 0; f < a.length;) {
                var A = b ? a[f][b] : a[f];
                0 > g(e, A) && d.push(a[f]);
                e[f] = A;
                f++
            }
            c && (d = b ? d.sort(function(a, c) {
                return a[b] > c[b]
            }) : d.sort());
            return d
        }

        function k(a, b) {
            for (var c, d = b[0].toUpperCase() + b.slice(1), e = 0; e < fa.length;) {
                c = (c = fa[e]) ? c + d : b;
                if (c in a) return c;
                e++
            }
            return r
        }

        function p(a) {
            a = a.ownerDocument || a;
            return a.defaultView || a.parentWindow || e
        }

        function u(a, b) {
            var c = this;
            this.manager = a;
            this.callback = b;
            this.element = a.element;
            this.target = a.options.inputTarget;
            this.domHandler = function(b) {
                F(a.options.enable, [a]) && c.handler(b)
            };
            this.init()
        }

        function t(a) {
            var b = a.options.inputClass;
            return new(b ? b : qa ? S : ra ? L : ga ? T : M)(a, w)
        }

        function w(a, b, d) {
            var e = d.pointers.length,
                g = d.changedPointers.length;
            var f = b & 1 && 0 === e - g;
            d.isFirst = !!f;
            d.isFinal = !!(b & 12 && 0 === e - g);
            f && (a.session = {});
            d.eventType = b;
            b = a.session;
            e = d.pointers;
            g = e.length;
            b.firstInput || (b.firstInput = ca(d));
            1 < g && !b.firstMultiple ?
                b.firstMultiple = ca(d) : 1 === g && (b.firstMultiple = !1);
            f = b.firstInput;
            var A = (g = b.firstMultiple) ? g.center : f.center;
            var h = d.center = da(e);
            d.timeStamp = U();
            d.deltaTime = d.timeStamp - f.timeStamp;
            d.angle = V(A, h);
            d.distance = K(A, h);
            f = d.center;
            A = b.offsetDelta || {};
            var h = b.prevDelta || {},
                k = b.prevInput || {};
            if (1 === d.eventType || 4 === k.eventType) h = b.prevDelta = {
                x: k.deltaX || 0,
                y: k.deltaY || 0
            }, A = b.offsetDelta = {
                x: f.x,
                y: f.y
            };
            d.deltaX = h.x + (f.x - A.x);
            d.deltaY = h.y + (f.y - A.y);
            d.offsetDirection = ea(d.deltaX, d.deltaY);
            A = d.deltaTime;
            f = d.deltaX /
                A || 0;
            A = d.deltaY / A || 0;
            d.overallVelocityX = f;
            d.overallVelocityY = A;
            d.overallVelocity = I(f) > I(A) ? f : A;
            g ? (f = g.pointers, f = K(e[0], e[1], N) / K(f[0], f[1], N)) : f = 1;
            d.scale = f;
            g ? (g = g.pointers, e = V(e[1], e[0], N) + V(g[1], g[0], N)) : e = 0;
            d.rotation = e;
            d.maxPointers = b.prevInput ? d.pointers.length > b.prevInput.maxPointers ? d.pointers.length : b.prevInput.maxPointers : d.pointers.length;
            A = b.lastInterval || d;
            e = d.timeStamp - A.timeStamp;
            8 != d.eventType && (25 < e || A.velocity === r) ? (f = d.deltaX - A.deltaX, A = d.deltaY - A.deltaY, h = f / e || 0, k = A / e || 0, e = h, g =
                k, h = I(h) > I(k) ? h : k, f = ea(f, A), b.lastInterval = d) : (h = A.velocity, e = A.velocityX, g = A.velocityY, f = A.direction);
            d.velocity = h;
            d.velocityX = e;
            d.velocityY = g;
            d.direction = f;
            b = a.element;
            c(d.srcEvent.target, b) && (b = d.srcEvent.target);
            d.target = b;
            a.emit("hammer.input", d);
            a.recognize(d);
            a.session.prevInput = d
        }

        function ca(a) {
            for (var b = [], c = 0; c < a.pointers.length;) b[c] = {
                clientX: J(a.pointers[c].clientX),
                clientY: J(a.pointers[c].clientY)
            }, c++;
            return {
                timeStamp: U(),
                pointers: b,
                center: da(b),
                deltaX: a.deltaX,
                deltaY: a.deltaY
            }
        }

        function da(a) {
            var b =
                a.length;
            if (1 === b) return {
                x: J(a[0].clientX),
                y: J(a[0].clientY)
            };
            for (var c = 0, d = 0, e = 0; e < b;) c += a[e].clientX, d += a[e].clientY, e++;
            return {
                x: J(c / b),
                y: J(d / b)
            }
        }

        function ea(a, b) {
            return a === b ? 1 : I(a) >= I(b) ? 0 > a ? 2 : 4 : 0 > b ? 8 : 16
        }

        function K(a, b, c) {
            c || (c = ha);
            var d = b[c[0]] - a[c[0]];
            a = b[c[1]] - a[c[1]];
            return Math.sqrt(d * d + a * a)
        }

        function V(a, b, c) {
            c || (c = ha);
            return 180 * Math.atan2(b[c[1]] - a[c[1]], b[c[0]] - a[c[0]]) / Math.PI
        }

        function M() {
            this.evEl = sa;
            this.evWin = ta;
            this.allow = !0;
            this.pressed = !1;
            u.apply(this, arguments)
        }

        function S() {
            this.evEl =
                ia;
            this.evWin = ja;
            u.apply(this, arguments);
            this.store = this.manager.session.pointerEvents = []
        }

        function ka() {
            this.evTarget = "touchstart";
            this.evWin = "touchstart touchmove touchend touchcancel";
            this.started = !1;
            u.apply(this, arguments)
        }

        function L() {
            this.evTarget = ua;
            this.targetIds = {};
            u.apply(this, arguments)
        }

        function va(a, b) {
            var d = f(a.touches),
                e = this.targetIds;
            if (b & 3 && 1 === d.length) return e[d[0].identifier] = !0, [d, d];
            var g = f(a.changedTouches),
                A = [],
                k = this.target;
            var R = d.filter(function(a) {
                return c(a.target, k)
            });
            if (1 === b)
                for (d = 0; d < R.length;) e[R[d].identifier] = !0, d++;
            for (d = 0; d < g.length;) e[g[d].identifier] && A.push(g[d]), b & 12 && delete e[g[d].identifier], d++;
            if (A.length) return [h(R.concat(A), "identifier", !0), A]
        }

        function T() {
            u.apply(this, arguments);
            var a = D(this.handler, this);
            this.touch = new L(this.manager, a);
            this.mouse = new M(this.manager, a)
        }

        function W(a, b) {
            this.manager = a;
            this.set(b)
        }

        function wa(a) {
            if (-1 < a.indexOf("none")) return "none";
            var b = -1 < a.indexOf("pan-x"),
                c = -1 < a.indexOf("pan-y");
            return b && c ? "none" : b || c ? b ? "pan-x" :
                "pan-y" : -1 < a.indexOf("manipulation") ? "manipulation" : "auto"
        }

        function G(a) {
            a = m({}, a || {});
            this.id = xa++;
            this.manager = null;
            this.options = B(a, this.defaults);
            a = this.options.enable;
            this.options.enable = a === r ? !0 : a;
            this.state = 1;
            this.simultaneous = {};
            this.requireFail = []
        }

        function la(a) {
            return a & 16 ? "cancel" : a & 8 ? "end" : a & 4 ? "move" : a & 2 ? "start" : ""
        }

        function ma(a) {
            return 16 == a ? "down" : 8 == a ? "up" : 2 == a ? "left" : 4 == a ? "right" : ""
        }

        function O(a, b) {
            var c = b.manager;
            return c ? c.get(a) : a
        }

        function E() {
            G.apply(this, arguments)
        }

        function P() {
            E.apply(this,
                arguments);
            this.pY = this.pX = null
        }

        function X() {
            E.apply(this, arguments)
        }

        function Y() {
            G.apply(this, arguments);
            this._input = this._timer = null
        }

        function Z() {
            E.apply(this, arguments)
        }

        function aa() {
            E.apply(this, arguments)
        }

        function Q() {
            G.apply(this, arguments);
            this.pCenter = this.pTime = !1;
            this._input = this._timer = null;
            this.count = 0
        }

        function H(a, b) {
            b = b || {};
            var c = b.recognizers;
            b.recognizers = c === r ? H.defaults.preset : c;
            return new ba(a, b)
        }

        function ba(a, b) {
            b = b || {};
            this.options = B(b, H.defaults);
            this.options.inputTarget = this.options.inputTarget ||
                a;
            this.handlers = {};
            this.session = {};
            this.recognizers = [];
            this.element = a;
            this.input = t(this);
            this.touchAction = new W(this, this.options.touchAction);
            na(this, !0);
            z(b.recognizers, function(a) {
                var b = this.add(new a[0](a[1]));
                a[2] && b.recognizeWith(a[2]);
                a[3] && b.requireFailure(a[3])
            }, this)
        }

        function na(a, b) {
            var c = a.element;
            c.style && z(a.options.cssProps, function(a, d) {
                c.style[k(c.style, d)] = b ? a : ""
            })
        }

        function ya(a, b) {
            var c = n.createEvent("Event");
            c.initEvent(a, !0, !0);
            c.gesture = b;
            b.target.dispatchEvent(c)
        }
        var fa = " webkit moz MS ms o".split(" "),
            za = n.createElement("div"),
            J = Math.round,
            I = Math.abs,
            U = Date.now,
            xa = 1,
            Aa = /mobile|tablet|ip(ad|hone|od)|android/i,
            ga = "ontouchstart" in e,
            qa = k(e, "PointerEvent") !== r,
            ra = ga && Aa.test(navigator.userAgent),
            ha = ["x", "y"],
            N = ["clientX", "clientY"];
        u.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && a(this.element, this.evEl, this.domHandler);
                this.evTarget && a(this.target, this.evTarget, this.domHandler);
                this.evWin && a(p(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && b(this.element, this.evEl,
                    this.domHandler);
                this.evTarget && b(this.target, this.evTarget, this.domHandler);
                this.evWin && b(p(this.element), this.evWin, this.domHandler)
            }
        };
        var Ba = {
                mousedown: 1,
                mousemove: 2,
                mouseup: 4
            },
            sa = "mousedown",
            ta = "mousemove mouseup";
        C(M, u, {
            handler: function(a) {
                var b = Ba[a.type];
                b & 1 && 0 === a.button && (this.pressed = !0);
                b & 2 && 1 !== a.which && (b = 4);
                this.pressed && this.allow && (b & 4 && (this.pressed = !1), this.callback(this.manager, b, {
                    pointers: [a],
                    changedPointers: [a],
                    pointerType: "mouse",
                    srcEvent: a
                }))
            }
        });
        var Ca = {
                pointerdown: 1,
                pointermove: 2,
                pointerup: 4,
                pointercancel: 8,
                pointerout: 8
            },
            Da = {
                2: "touch",
                3: "pen",
                4: "mouse",
                5: "kinect"
            },
            ia = "pointerdown",
            ja = "pointermove pointerup pointercancel";
        e.MSPointerEvent && (ia = "MSPointerDown", ja = "MSPointerMove MSPointerUp MSPointerCancel");
        C(S, u, {
            handler: function(a) {
                var b = this.store,
                    c = !1,
                    d = a.type.toLowerCase().replace("ms", ""),
                    d = Ca[d],
                    e = Da[a.pointerType] || a.pointerType,
                    f = "touch" == e,
                    h = g(b, a.pointerId, "pointerId");
                d & 1 && (0 === a.button || f) ? 0 > h && (b.push(a), h = b.length - 1) : d & 12 && (c = !0);
                0 > h || (b[h] = a, this.callback(this.manager,
                    d, {
                        pointers: b,
                        changedPointers: [a],
                        pointerType: e,
                        srcEvent: a
                    }), c && b.splice(h, 1))
            }
        });
        var Ea = {
            touchstart: 1,
            touchmove: 2,
            touchend: 4,
            touchcancel: 8
        };
        C(ka, u, {
            handler: function(a) {
                var b = Ea[a.type];
                1 === b && (this.started = !0);
                if (this.started) {
                    var c = f(a.touches);
                    var d = f(a.changedTouches);
                    b & 12 && (c = h(c.concat(d), "identifier", !0));
                    c = [c, d];
                    b & 12 && 0 === c[0].length - c[1].length && (this.started = !1);
                    this.callback(this.manager, b, {
                        pointers: c[0],
                        changedPointers: c[1],
                        pointerType: "touch",
                        srcEvent: a
                    })
                }
            }
        });
        var Fa = {
                touchstart: 1,
                touchmove: 2,
                touchend: 4,
                touchcancel: 8
            },
            ua = "touchstart touchmove touchend touchcancel";
        C(L, u, {
            handler: function(a) {
                var b = Fa[a.type],
                    c = va.call(this, a, b);
                c && this.callback(this.manager, b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: "touch",
                    srcEvent: a
                })
            }
        });
        C(T, u, {
            handler: function(a, b, c) {
                var d = "mouse" == c.pointerType;
                if ("touch" == c.pointerType) this.mouse.allow = !1;
                else if (d && !this.mouse.allow) return;
                b & 12 && (this.mouse.allow = !0);
                this.callback(a, b, c)
            },
            destroy: function() {
                this.touch.destroy();
                this.mouse.destroy()
            }
        });
        var oa =
            k(za.style, "touchAction"),
            pa = oa !== r;
        W.prototype = {
            set: function(a) {
                "compute" == a && (a = this.compute());
                pa && this.manager.element.style && (this.manager.element.style[oa] = a);
                this.actions = a.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var a = [];
                z(this.manager.recognizers, function(b) {
                    F(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
                });
                return wa(a.join(" "))
            },
            preventDefaults: function(a) {
                if (!pa) {
                    var b = a.srcEvent,
                        c = a.offsetDirection;
                    if (this.manager.session.prevented) b.preventDefault();
                    else {
                        var d = this.actions,
                            e = -1 < d.indexOf("none"),
                            f = -1 < d.indexOf("pan-y"),
                            d = -1 < d.indexOf("pan-x");
                        if (e) {
                            var g = 2 > a.distance,
                                h = 250 > a.deltaTime;
                            if (1 === a.pointers.length && g && h) return
                        }
                        if (!d || !f)
                            if (e || f && c & 6 || d && c & 24) return this.preventSrc(b)
                    }
                }
            },
            preventSrc: function(a) {
                this.manager.session.prevented = !0;
                a.preventDefault()
            }
        };
        G.prototype = {
            defaults: {},
            set: function(a) {
                m(this.options, a);
                this.manager && this.manager.touchAction.update();
                return this
            },
            recognizeWith: function(a) {
                if (l(a, "recognizeWith", this)) return this;
                var b = this.simultaneous;
                a = O(a, this);
                b[a.id] || (b[a.id] = a, a.recognizeWith(this));
                return this
            },
            dropRecognizeWith: function(a) {
                if (l(a, "dropRecognizeWith", this)) return this;
                a = O(a, this);
                delete this.simultaneous[a.id];
                return this
            },
            requireFailure: function(a) {
                if (l(a, "requireFailure", this)) return this;
                var b = this.requireFail;
                a = O(a, this); - 1 === g(b, a) && (b.push(a), a.requireFailure(this));
                return this
            },
            dropRequireFailure: function(a) {
                if (l(a, "dropRequireFailure", this)) return this;
                a = O(a, this);
                a = g(this.requireFail, a); - 1 < a && this.requireFail.splice(a, 1);
                return this
            },
            hasRequireFailures: function() {
                return 0 < this.requireFail.length
            },
            canRecognizeWith: function(a) {
                return !!this.simultaneous[a.id]
            },
            emit: function(a) {
                function b(b) {
                    c.manager.emit(b, a)
                }
                var c = this,
                    d = this.state;
                8 > d && b(c.options.event + la(d));
                b(c.options.event);
                a.additionalEvent && b(a.additionalEvent);
                8 <= d && b(c.options.event + la(d))
            },
            tryEmit: function(a) {
                if (this.canEmit()) return this.emit(a);
                this.state = 32
            },
            canEmit: function() {
                for (var a = 0; a < this.requireFail.length;) {
                    if (!(this.requireFail[a].state &
                            33)) return !1;
                    a++
                }
                return !0
            },
            recognize: function(a) {
                a = m({}, a);
                F(this.options.enable, [this, a]) ? (this.state & 56 && (this.state = 1), this.state = this.process(a), this.state & 30 && this.tryEmit(a)) : (this.reset(), this.state = 32)
            },
            process: function(a) {},
            getTouchAction: function() {},
            reset: function() {}
        };
        C(E, G, {
            defaults: {
                pointers: 1
            },
            attrTest: function(a) {
                var b = this.options.pointers;
                return 0 === b || a.pointers.length === b
            },
            process: function(a) {
                var b = this.state,
                    c = a.eventType,
                    d = b & 6;
                a = this.attrTest(a);
                return d && (c & 8 || !a) ? b | 16 : d || a ?
                    c & 4 ? b | 8 : b & 2 ? b | 4 : 2 : 32
            }
        });
        C(P, E, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: 30
            },
            getTouchAction: function() {
                var a = this.options.direction,
                    b = [];
                a & 6 && b.push("pan-y");
                a & 24 && b.push("pan-x");
                return b
            },
            directionTest: function(a) {
                var b = this.options,
                    c = !0,
                    d = a.distance,
                    e = a.direction,
                    f = a.deltaX,
                    g = a.deltaY;
                e & b.direction || (b.direction & 6 ? (e = 0 === f ? 1 : 0 > f ? 2 : 4, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? 1 : 0 > g ? 8 : 16, c = g != this.pY, d = Math.abs(a.deltaY)));
                a.direction = e;
                return c && d > b.threshold && e & b.direction
            },
            attrTest: function(a) {
                return E.prototype.attrTest.call(this,
                    a) && (this.state & 2 || !(this.state & 2) && this.directionTest(a))
            },
            emit: function(a) {
                this.pX = a.deltaX;
                this.pY = a.deltaY;
                var b = ma(a.direction);
                b && (a.additionalEvent = this.options.event + b);
                this._super.emit.call(this, a)
            }
        });
        C(X, E, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return ["none"]
            },
            attrTest: function(a) {
                return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & 2)
            },
            emit: function(a) {
                1 !== a.scale && (a.additionalEvent = this.options.event + (1 >
                    a.scale ? "in" : "out"));
                this._super.emit.call(this, a)
            }
        });
        C(Y, G, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 500,
                threshold: 5
            },
            getTouchAction: function() {
                return ["auto"]
            },
            process: function(a) {
                var b = this.options,
                    c = a.pointers.length === b.pointers,
                    d = a.distance < b.threshold,
                    e = a.deltaTime > b.time;
                this._input = a;
                if (!d || !c || a.eventType & 12 && !e) this.reset();
                else if (a.eventType & 1) this.reset(), this._timer = q(function() {
                    this.state = 8;
                    this.tryEmit()
                }, b.time, this);
                else if (a.eventType & 4) return 8;
                return 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(a) {
                8 === this.state && (a && a.eventType & 4 ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = U(), this.manager.emit(this.options.event, this._input)))
            }
        });
        C(Z, E, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return ["none"]
            },
            attrTest: function(a) {
                return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & 2)
            }
        });
        C(aa, E, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .65,
                direction: 30,
                pointers: 1
            },
            getTouchAction: function() {
                return P.prototype.getTouchAction.call(this)
            },
            attrTest: function(a) {
                var b = this.options.direction;
                if (b & 30) var c = a.overallVelocity;
                else b & 6 ? c = a.overallVelocityX : b & 24 && (c = a.overallVelocityY);
                return this._super.attrTest.call(this, a) && b & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && I(c) > this.options.velocity && a.eventType & 4
            },
            emit: function(a) {
                var b = ma(a.offsetDirection);
                b && this.manager.emit(this.options.event + b, a);
                this.manager.emit(this.options.event, a)
            }
        });
        C(Q, G, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 2,
                posThreshold: 10
            },
            getTouchAction: function() {
                return ["manipulation"]
            },
            process: function(a) {
                var b = this.options,
                    c = a.pointers.length === b.pointers,
                    d = a.distance < b.threshold,
                    e = a.deltaTime < b.time;
                this.reset();
                if (a.eventType & 1 && 0 === this.count) return this.failTimeout();
                if (d && e && c) {
                    if (4 != a.eventType) return this.failTimeout();
                    c = this.pTime ? a.timeStamp - this.pTime < b.interval : !0;
                    d = !this.pCenter || K(this.pCenter, a.center) < b.posThreshold;
                    this.pTime = a.timeStamp;
                    this.pCenter = a.center;
                    this.count = d && c ?
                        this.count + 1 : 1;
                    this._input = a;
                    if (0 === this.count % b.taps) return this.hasRequireFailures() ? (this._timer = q(function() {
                        this.state = 8;
                        this.tryEmit()
                    }, b.interval, this), 2) : 8
                }
                return 32
            },
            failTimeout: function() {
                this._timer = q(function() {
                    this.state = 32
                }, this.options.interval, this);
                return 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        });
        H.VERSION = "2.0.4";
        H.defaults = {
            domEvents: !1,
            touchAction: "compute",
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [Z, {
                    enable: !1
                }],
                [X, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [aa, {
                    direction: 6
                }],
                [P, {
                        direction: 6
                    },
                    ["swipe"]
                ],
                [Q],
                [Q, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [Y]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        ba.prototype = {
            set: function(a) {
                m(this.options, a);
                a.touchAction && this.touchAction.update();
                a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init());
                return this
            },
            stop: function(a) {
                this.session.stopped = a ? 2 : 1
            },
            recognize: function(a) {
                var b = this.session;
                if (!b.stopped) {
                    this.touchAction.preventDefaults(a);
                    var c = this.recognizers,
                        d = b.curRecognizer;
                    if (!d || d && d.state & 8) d = b.curRecognizer = null;
                    for (var e = 0; e < c.length;) {
                        var f = c[e];
                        2 === b.stopped || d && f != d && !f.canRecognizeWith(d) ? f.reset() : f.recognize(a);
                        !d && f.state & 14 && (d = b.curRecognizer = f);
                        e++
                    }
                }
            },
            get: function(a) {
                if (a instanceof G) return a;
                for (var b = this.recognizers, c = 0; c < b.length; c++)
                    if (b[c].options.event == a) return b[c];
                return null
            },
            add: function(a) {
                if (l(a, "add", this)) return this;
                var b = this.get(a.options.event);
                b && this.remove(b);
                this.recognizers.push(a);
                a.manager = this;
                this.touchAction.update();
                return a
            },
            remove: function(a) {
                if (l(a, "remove", this)) return this;
                var b = this.recognizers;
                a = this.get(a);
                b.splice(g(b, a), 1);
                this.touchAction.update();
                return this
            },
            on: function(a, b) {
                var c = this.handlers;
                z(d(a), function(a) {
                    c[a] = c[a] || [];
                    c[a].push(b)
                });
                return this
            },
            off: function(a, b) {
                var c = this.handlers;
                z(d(a), function(a) {
                    b ? c[a].splice(g(c[a],
                        b), 1) : delete c[a]
                });
                return this
            },
            emit: function(a, b) {
                this.options.domEvents && ya(a, b);
                var c = this.handlers[a] && this.handlers[a].slice();
                if (c && c.length) {
                    b.type = a;
                    b.preventDefault = function() {
                        b.srcEvent.preventDefault()
                    };
                    for (var d = 0; d < c.length;) c[d](b), d++
                }
            },
            destroy: function() {
                this.element && na(this, !1);
                this.handlers = {};
                this.session = {};
                this.input.destroy();
                this.element = null
            }
        };
        m(H, {
            INPUT_START: 1,
            INPUT_MOVE: 2,
            INPUT_END: 4,
            INPUT_CANCEL: 8,
            STATE_POSSIBLE: 1,
            STATE_BEGAN: 2,
            STATE_CHANGED: 4,
            STATE_ENDED: 8,
            STATE_RECOGNIZED: 8,
            STATE_CANCELLED: 16,
            STATE_FAILED: 32,
            DIRECTION_NONE: 1,
            DIRECTION_LEFT: 2,
            DIRECTION_RIGHT: 4,
            DIRECTION_UP: 8,
            DIRECTION_DOWN: 16,
            DIRECTION_HORIZONTAL: 6,
            DIRECTION_VERTICAL: 24,
            DIRECTION_ALL: 30,
            Manager: ba,
            Input: u,
            TouchAction: W,
            TouchInput: L,
            MouseInput: M,
            PointerEventInput: S,
            TouchMouseInput: T,
            SingleTouchInput: ka,
            Recognizer: G,
            AttrRecognizer: E,
            Tap: Q,
            Pan: P,
            Swipe: aa,
            Pinch: X,
            Rotate: Z,
            Press: Y,
            on: a,
            off: b,
            each: z,
            merge: B,
            extend: m,
            inherit: C,
            bindFn: D,
            prefixed: k
        });
        "function" == typeof define && define.amd ? define(function() {
                return H
            }) :
            "undefined" != typeof module && module.exports ? module.exports = H : e[v] = H
    })(window, document, "Hammer")
} catch (e) {
    console && console.log && console.log(e)
}
(function(e) {
    function n(a, b) {
        a = e(a);
        var c = this;
        this.elem = a;
        this.id = a.attr("id");
        this.pages = [];
        this.opts = b;
        this.currentPage = null;
        this.pageWidth = b.width / 2;
        this.pageHeight = b.height;
        this.startPage = b.startPage;
        this.onShowPage = b.onShowPage;
        this.slideShow = b.slideShow;
        this.slideShowDelay = b.slideShowDelay;
        this.pauseOnHover = b.pauseOnHover;
        this.turnPageDuration = b.turnPageDuration;
        this.foldGradient = b.foldGradient;
        this.foldGradientThreshold = b.foldGradientThreshold;
        this.shadows = b.shadows;
        this.shadowThreshold = b.shadowThreshold;
        this.clipBoundaries = b.clipBoundaries;
        this.zoomLevel = 1;
        this.zoomMax = Math.max(b.zoomMax, 1);
        this.zoomMin = b.zoomMin;
        this.zoomBoundingBox = b.zoomBoundingBox;
        this.zoomStep = b.zoomStep;
        this.onZoom = b.onZoom;
        this.mouseWheel = b.mouseWheel;
        this.flipSound = b.flipSound;
        this.centeredWhenClosed = b.centeredWhenClosed;
        this.sectionDefinition = b.sections;
        this.rtl = !!b.rtl;
        this.closable = b.closable;
        e.wowBook.support.filters = "filters" in a[0];
        this.opts.toolbarContainerPosition && (this.opts.toolbarPosition = this.opts.toolbarContainerPosition);
        this.opts.toolbarLightboxPosition && (this.opts.toolbarPosition = this.opts.toolbarLightboxPosition);
        (this._isMobile = e.wowBook.utils.isMobile()) && this.mobileSetup();
        a.addClass("wowbook");
        "static" === a.css("position") && a.css("position", "relative");
        var d = a.children();
        if (d.length < b.pageCount) {
            for (var g = b.pageCount - d.length; g--;) a.append("<div />");
            d = a.children()
        }
        g = this.pagesContainer = this.origin = e("<div class='wowbook-origin'></div>").css({
            position: "absolute"
        }).appendTo(a);
        c.bookShadow = e("<div class='wowbook-book-shadow'></div>").appendTo(a).css({
            top: 0,
            position: "absolute",
            display: "none",
            zIndex: 0
        });
        this._controls = {};
        this.controllify(this.opts.controls);
        this.insertPages(d, !0);
        g.append("<div class='wowbook-shadow-clipper'><div class='wowbook-shadow-container'><div class='wowbook-shadow-internal'></div></div></div>");
        c.shadowContainer = e(".wowbook-shadow-container", g);
        c.internalShadow = e(".wowbook-shadow-internal", g);
        c.shadowClipper = e(".wowbook-shadow-clipper", g).css({
            display: "none"
        });
        c.foldShadow = e("<div class='wowbook-shadow-fold'></div>").appendTo(c.shadowContainer);
        c.foldGradientContainer = e("<div class='wowbook-fold-gradient-container'></div>").appendTo(c.shadowContainer);
        c.foldGradientElem = e("<div class='wowbook-fold-gradient'></div>").appendTo(c.foldGradientContainer);
        c.hardPageDropShadow = e("<div class='wowbook-hard-page-dropshadow'></div>").css({
            display: "none"
        }).appendTo(g);
        !e.support.opacity && e.wowBook.support.filters && e.wowBook.applyAlphaImageLoader(["wowbook-fold-gradient", "wowbook-fold-gradient-flipped", "wowbook-shadow-fold", "wowbook-shadow-fold-flipped"]);
        c.shadowContainer.css("position", "relative");
        this.leftHandle = e("<div class='wowbook-handle wowbook-left'></div>").data("corner", "l").appendTo(g);
        this.rightHandle = e("<div class='wowbook-handle wowbook-right'></div>").data("corner", "r").appendTo(g);
        Modernizr.csstransforms3d && (d = e("<div>").css("transform", "perspective(1px)"), this.perspectiveUnit = "none" != d.css("transform") ? "px" : "", d = null);
        e.browser.msie && e(".wowbook-handle", a).css({
            backgroundColor: "#fff",
            opacity: "0.01"
        });
        e(".wowbook-handle", g).bind("mousedown.wowbook",
            function(a) {
                return c.pageEdgeDragStart(a)
            });
        b.curl && e(".wowbook-handle", g).hover(function(a) {
            c.curlTimer || (c.curlTimer = setTimeout(function() {
                var b = a.target == c.leftHandle[0] ? c.leftPage() : c.rightPage();
                if (b) {
                    var d = b.offset();
                    c.curl(b, a.pageY - d.top > c.pageHeight * c.currentScale * c._cssZoom / 2)
                }
            }, 120))
        }, function() {
            c.curlTimer = clearTimeout(c.curlTimer);
            c.uncurl()
        });
        var f, h;
        e(".wowbook-handle", g).on("mousedown.wowbook", function() {
            f = e.now();
            h = e(this).data("corner")
        }).on("mouseup.wowbook", function() {
            var a = e(this).data("corner");
            if (!((new Date).getTime() - f > c.opts.handleClickDuration || a != h)) {
                c._cantStopAnimation || c.stopAnimation(!1);
                if ("r" === a) c[c.rtl ? "back" : "advance"]();
                if ("l" === a) c[c.rtl ? "advance" : "back"]();
                h = ""
            }
        });
        var k = !1;
        a.hover(function(a) {
            c.pauseOnHover && (k = c.slideShowTimer, c.stopSlideShow(!0))
        }, function() {
            c.pauseOnHover && k && c.startSlideShow()
        });
        this.clipBoundaries && (this.origin.wrap("<div class='wowbook-clipper'><div class='wowbook-inner-clipper'></div></div>"), e(".wowbook-inner-clipper", a).css({
            position: "absolute",
            width: "100%",
            overflow: "hidden"
        }), this.clipper = e(".wowbook-clipper", a).css({
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            overflow: "hidden",
            zIndex: 1
        }));
        a.wrapInner("<div class='wowbook-zoomwindow'><div class='wowbook-zoomcontent'></div></div>");
        this.zoomWindow = e(".wowbook-zoomwindow", a);
        this.zoomContent = e(".wowbook-zoomcontent", a);
        e.browser.ie8mode && this.zoomContent.wrapInner("<div class='IE8-zoom-helper'style='position:relative'></div>");
        this.zoomWindow.css({
            position: "absolute",
            top: 0
        });
        this.zoomContent.css({
            position: "absolute",
            left: 0,
            top: 0
        });
        this.zoomSetup();
        this.setDimensions(2 * b.coverWidth || b.width, b.coverHeight || b.height);
        this.opts.container && this.createContainer();
        this.singlePage(b.singlePage);
        b.responsiveSinglePage && this.responsiveSinglePage();
        b.scaleToFit && (this.scaleToFit(), this.responsive());
        this.fillToc();
        g = b.useTranslate3d;
        Modernizr.csstransforms3d && g && (e.wowBook.useTranslate3d = 1 == g || "mobile" == g && e.wowBook.utils.isMobile());
        b.useScale3d = b.useScale3d && Modernizr.csstransforms3d;
        if (b.deepLinking && this.getLocationHash()) {
            try {
                var p =
                    c.selectorToPage("#" + this.getLocationHash())
            } catch (u) {}
            void 0 === p && (p = c.locationHashToPage());
            "number" === typeof p && (c.startPage = p, b.moveToViewPort && !r(c.elem) && c.elem[0].scrollIntoView())
        }
        this.flipSound && (this.audio = this.createAudioPlayer());
        this.opts.keyboardNavigation && (p = e.wowBook.defaults.keyboardNavigation, this.rtl && this.opts.keyboardNavigation == p && (this.opts.keyboardNavigation = {
            back: p.advance,
            advance: p.back
        }), e(document).on("keydown.wowbook", function(a) {
            e(a.target).filter("input, textarea, select").length ||
                c.holdedPage || (a.which === c.opts.keyboardNavigation.back && c.back(), a.which === c.opts.keyboardNavigation.advance && c.advance())
        }));
        e(window).on("hashchange.wowbook", function() {
            var a = window.location.hash;
            if (a === c.locationHashSetTo) c.locationHashSetTo = void 0;
            else {
                var d = (a = "" === a && !c.locationEndsInHash()) ? c.startPage : c.locationHashToPage();
                "number" === typeof d && (c.gotoPage(d, !a), a || !b.moveToViewPort || r(c.elem) || c.elem[0].scrollIntoView())
            }
        });
        b.forceBasicPage && (this.foldPage = this.holdHardpage = this.foldPageBasic);
        e.wowBook.support.transform || (this.foldPage = this.foldPageBasic, e.wowBook.support.filters || (this.holdHardpage = this.foldPageBasic));
        this.mouseWheel && ("zoom" == c.mouseWheel && a.bind("mousemove.wowbook mouseenter.wowbook", function(a) {
            c._mousemoveEvent = a
        }), a.mousewheel(function(a, b) {
            if (c.mouseWheel) {
                if ("zoom" === c.mouseWheel) {
                    var d = c.elem.offset(),
                        e = c._mousemoveEvent,
                        f = e.pageX - d.left,
                        d = e.pageY - d.top;
                    0 < b && c.zoomIn({
                        x: f,
                        y: d
                    });
                    0 > b && c.zoomOut({
                        x: f,
                        y: d
                    })
                } else 0 < b && c.advance(), 0 > b && c.back();
                return !1
            }
        }));
        this.opts.touchEnabled &&
            this.touchSupport();
        b.toc && (this.createToc(), b.displayToc && this.showToc());
        this.opts.thumbnails && this.createThumbnails();
        this.setupFullscreen();
        b.loadingIndicator && (b.pdf || b.images || b.srcs) && this.elem.addClass("wowbook-loading");
        this.showPage(this.startPage, !1);
        1 != this.opts.zoomLevel && this.zoom(this.opts.zoomLevel, {
            duration: 0
        });
        this.opts.pdf && this.setPDF(this.opts.pdf);
        this.opts.lightbox && this.lightbox(this.opts.lightbox);
        this.toolbars = [];
        this.opts.toolbar && (this.createToolbar(this.opts.toolbar),
            this.opts.responsiveToolbar && (this.opts.lightbox || this.opts.container) && this.setupResponsiveToolbar());
        this.setStyle(this.opts.styles || this.opts.style);
        this.opts.navControls && this.createNavigationControls();
        this.showPage(this.startPage, !1);
        this.opts.container && (this.updateContainer(), b.scaleToFit && this.scaleToFit(), b.responsiveSinglePage && this.responsiveSinglePage());
        1 != this.opts.zoomLevel && this.zoom(this.opts.zoomLevel, {
            duration: 0
        });
        this.opts.strings && this.setStrings();
        this.callRAFCallback = function() {
            c.rafCallback()
        };
        window.raf(this.callRAFCallback);
        b.slideShow && this.startSlideShow()
    }

    function v(a, b) {
        var c = Math.cos(b),
            d = Math.sin(b);
        return {
            x: c * a.x - d * a.y,
            y: d * a.x + c * a.y
        }
    }

    function r(a) {
        var b = e(window).height(),
            c = a.offset(),
            d = e(window).scrollTop();
        return c.top > d && c.top + a.height() < d + b
    }

    function q(a, b, c) {
        var d;
        var g = d = 0;
        if (!e.wowBook.support.boxSizing) {
            var f;
            g = "none" == a.css("borderTopStyle") ? 0 : z[f = a.css("borderTopWidth")] || parseFloat(f);
            d = "none" == a.css("borderRightStyle") ? 0 : z[f = a.css("borderRightWidth")] || parseFloat(f);
            var h = "none" == a.css("borderBottomStyle") ? 0 : z[f = a.css("borderBottomWidth")] || parseFloat(f);
            var k = "none" == a.css("borderLeftStyle") ? 0 : z[f = a.css("borderLeftWidth")] || parseFloat(f);
            d = parseFloat(a.css("paddingLeft")) + parseFloat(a.css("paddingRight")) + k + d;
            g = parseFloat(a.css("paddingTop")) + parseFloat(a.css("paddingBottom")) + g + h
        }
        a.css("width", b - d);
        a.css("height", c - g)
    }
    e.wowBook = function(a) {
        return e(a).data("wowBook")
    };
    e.wowBook.version = "1.3.4";
    e.wowBook.support = {};
    e.fn.wowBook = function(a) {
        if ("string" === typeof a) {
            var b =
                Array.prototype.slice.call(arguments, 1);
            if ("options" === a || "prop" === a) {
                var c = e.wowBook(this[0]),
                    d = b[0];
                return 1 < b.length ? c[d] = b[1] : c[d]
            }
            return this.each(function() {
                var c = e.wowBook(this);
                c[a].apply(c, b)
            })
        }
        var g = e.extend({}, e.wowBook.defaults, a);
        return this.each(function() {
            if (e.wowBook(this)) console.log("Error: the following element cannot be used twice by wowBook plugin: ", this);
            else {
                var a = new n(this, g);
                e(this).data("wowBook", a)
            }
        })
    };
    n.prototype = {
        destroy: function() {
            this.callRAFCallback = e.noop;
            this.curlTimer =
                clearTimeout(this.curlTimer);
            this.stopSlideShow();
            e("*").add(document).add(window).off(".wowbook");
            this.destroyThumbnails();
            this.destroyToc();
            this.destroyToolbars();
            this.destroyLightbox();
            this.destroyContainer();
            this.stopAnimation(!1);
            this.clearLocationHash();
            this.elem.empty().removeData().off()
        },
        mobileSetup: function() {
            this.opts.hardPageShadow = !1
        },
        setDimensions: function(a, b) {
            this.zoomed && this.zoomReset(0);
            this.currentScale = 1;
            var c = this.elem,
                d = this.pageWidth;
            c.css({
                height: b,
                width: a
            });
            var g = c.parent(),
                f = g.css("display");
            0 <= f.indexOf("flex") && g.css("display", "block");
            var h = c.height();
            this.pageWidth = c.width() / 2;
            this.pageHeight = h;
            this._originalHeight || (this._originalHeight = this.pageHeight);
            this._originalWidth || (this._originalWidth = 2 * this.pageWidth);
            0 <= f.indexOf("flex") && g.css("display", f);
            g = this.origin.css({
                width: "100%",
                height: h
            });
            d && this.centeredWhenClosed && (f = parseFloat(g.css("left"), 10), g.css("left", f / (d / this.pageWidth)));
            this.bookShadow.css({
                width: a,
                height: b
            });
            this.setPagesDimension();
            this.positionBookShadow();
            this.shadowClipper.css({
                width: c.width(),
                height: h
            });
            this.hardPageDropShadow.css({
                width: this.pageWidth,
                height: this.pageHeight
            });
            this.opts.handleWidth && e(".wowbook-handle", g).css("width", this.opts.handleWidth);
            this.rightHandle.css("left", a - this.rightHandle.width());
            if (this.clipBoundaries || this._restoreClipBoundaries) d = Math.ceil(Math.sqrt(this.pageWidth * this.pageWidth + this.pageHeight * this.pageHeight)), d = [this.pageHeight - d, c.width(), d, 0], this.origin.css("top", -d[0]), e(".wowbook-inner-clipper", c).css({
                width: "100%",
                height: d[2] - d[0],
                top: d[0]
            }), this.clipper.css({
                width: "100%",
                height: h
            });
            this.zoomWindow.css({
                width: 2 * this.pageWidth,
                height: h
            });
            this.zoomContent.css({
                width: 2 * this.pageWidth,
                height: h
            });
            this.corners = {
                tl: [0, 0],
                bl: [0, this.pageHeight],
                tr: [this.pageWidth, 0],
                br: [this.pageWidth, this.pageHeight],
                l: [0, 0],
                r: [this.pageWidth, 0]
            };
            this.pdf && this.pdfResetPages();
            this.thumbnails && this.updateThumbnails()
        },
        setPagesDimension: function() {
            for (var a, b, c, d = 0, g = this.pages.length; d < g; d++) page = this.pages[d], b = page.isCover ? this.pageWidth :
                this.opts.pageWidth || this.pageWidth, c = page.isCover ? this.pageHeight : this.opts.pageHeight || this.pageHeight, page.pageWidth = b, page.pageHeight = c, page.css({
                    width: b,
                    height: c,
                    left: page.onLeft ? 0 : this.pageWidth
                }), a = e(".wowbook-page-content", page), q(a, b, c), this.setPageCorners(page);
            this.opts.gutterShadow && e(".wowbook-gutter-shadow", this.elem).css("height", c)
        },
        setPageCorners: function(a) {
            var b = 0 + a.pageWidth,
                c = 0 + a.pageHeight;
            a.corners = {
                tl: [0, 0],
                bl: [0, c],
                tr: [b, 0],
                br: [b, c],
                l: [0, 0],
                r: [b, 0]
            }
        },
        setPagePosition: function(a) {
            a.left =
                a.onLeft ? this.pageWidth - a.pageWidth : this.pageWidth;
            a.top = Math.floor((this.pageHeight - a.pageHeight) / 2);
            a.css({
                left: a.left,
                top: a.top
            })
        },
        scale: function(a) {
            if (e.wowBook.support.transform) {
                this.zoomed && this.zoom(1, 0, {
                    offset: {
                        dx: 0,
                        dy: 0
                    }
                });
                this.currentScale = a;
                var b = this.zoomContent;
                this.opts.zoomUsingTransform ? (b.css({
                    transform: "scale(" + a + ")",
                    transformOrigin: "0 0"
                }), this._cssZoom = 1) : (b.css("zoom", a), this._cssZoom = a * this.zoomLevel);
                this.elem.css({
                    height: this._originalHeight * a,
                    width: this._originalWidth * a
                });
                this.zoomWindow.css({
                    height: this._originalHeight * a,
                    width: this._originalWidth * a
                });
                this.resizeHandles();
                if (this.opts.onResize) this.opts.onResize(this);
                this.pdfDoc && this.pdfUpdateRender()
            }
        },
        scaleToFit: function(a, b) {
            var c = a;
            if (!e.isNumeric(a)) {
                var d = e(a || this.opts.scaleToFit);
                if (!d.length) throw "jQuery selector passed to wowbook.resize did not matched in any DOM element.";
                c = d.width();
                b = d.height()
            }
            this.opts.maxWidth && c > this.opts.maxWidth && (c = this.opts.maxWidth);
            this.opts.maxHeight && b > this.opts.maxHeight &&
                (b = this.opts.maxHeight);
            this._singlePage && (c *= 2);
            d = this._originalWidth / this._originalHeight;
            b * d <= c || (b = c / d);
            this.scale(b / this._originalHeight)
        },
        resize: function(a, b) {
            this.setDimensions(a, b);
            if (this.opts.onResize) this.opts.onResize(this)
        },
        responsive: function() {
            var a = this;
            this._reponsiveApplied = !0;
            e(window).on("resize.wowbook", function() {
                a.responsiveUpdater()
            })
        },
        responsiveUpdater: function() {
            this.opts.container && this.updateContainer();
            this.lightboxOn && this.centerLightbox();
            this.responsiveSinglePage();
            !0 !== this.opts.container || this.opts.containerHeight ? this.scaleToFit() : (this.scaleToFit(this.containerBook.width(), 1E4), this.containerBook.css("height", "auto"), this.updateContainer());
            if ((this.opts.container || this.lightboxOn) && this._singlePage) {
                var a = this.pageWidth * this.currentScale;
                this.elem.css("left", (this.opts.scaleToFit.width() - a) / 2)
            }
        },
        responsiveSinglePage: function(a) {
            if (a = void 0 != a ? a : this.opts.responsiveSinglePage) e.isFunction(a) || (a = function(a) {
                if (!this._isMobile) return !1;
                a = e(a.opts.scaleToFit);
                var b = a.width();
                return a.height() > b
            }), this.singlePage(this.opts.singlePage || a.call(this, this))
        },
        resizeHandles: function() {
            if (this.opts.responsiveHandleWidth) {
                var a = this.opts.responsiveHandleWidth / this.currentScale;
                e(".wowbook-handle").width(a);
                this.rightHandle.css("left", 2 * this.pageWidth - a)
            }
        },
        insertPages: function(a, b) {
            for (var c = 0, d = a.length; c < d; c++) this.insertPage(a[c], !0);
            this.updateBook(b)
        },
        insertPage: function(a, b) {
            if (this.isDoublePage(a)) this.insertDoublePage(a, b);
            else {
                a = e(a).addClass("wowbook-page-content");
                var c = e("<div class='wowbook-page'></div>").css({
                    width: this.pageWidth,
                    height: this.pageHeight,
                    display: "none",
                    position: "absolute"
                }).appendTo(this.pagesContainer).append(a);
                e.wowBook.support.boxSizing && a.css(e.wowBook.support.boxSizing, "border-box");
                q(a, this.pageWidth, this.pageHeight);
                c.hardPageSetByUser = a.hasClass("wowbook-hardpage");
                this.opts.gutterShadow && this.upsertGutterShadowInPage(c);
                this.pages.push(c);
                b || this.updateBook();
                return c
            }
        },
        insertDoublePage: function(a, b) {
            if (!this._insertingDoublePage) {
                this._insertingDoublePage = !0;
                var c = e(a),
                    d = c.clone().insertAfter(c);
                var g = c.add(d);
                c.css("left", 0);
                d.css("right", "100%");
                g.css({
                    width: "200%",
                    height: "100%",
                    position: "relative"
                });
                g.css(e.wowBook.support.boxSizing + "", "border-box").wrap("<div class='wowbook-double-page'></div>");
                c.parent().data("src", c.data("src"));
                d.parent().data("src", d.data("src"));
                c.parent().data("image", c.data("image"));
                d.parent().data("image", d.data("image"));
                if (this.rtl) {
                    var f = this.insertPage(d.parent(), !0);
                    g = this.insertPage(c.parent(), !0)
                } else g = this.insertPage(c.parent(), !0), f = this.insertPage(d.parent(), !0);
                g && (g.otherHalf = f);
                f && (f.otherHalf = g);
                e.wowBook.support.boxSizing || (q(c, 2 * this.pageWidth, this.pageHeight), q(d, 2 * this.pageWidth, this.pageHeight));
                b || this.updateBook();
                this._insertingDoublePage = !1
            }
        },
        isDoublePage: function(a) {
            a = e(a);
            return a.data("double") || a.is(this.opts.doublePages)
        },
        replaceNumberHolder: function(a, b) {
            if (void 0 == a) return a;
            b += "";
            return a.replace(/\{\{([^}]+)\}\}/g, function(a, d) {
                if (b.length < d.length) {
                    var c = d.replace(/./g, "0");
                    return (c + b).slice(-c.length)
                }
                return b
            })
        },
        loadPage: function(a) {
            "number" === typeof a && (a = this.pages[a]);
            if (a && !a.loaded && !a.loading && (a.src || a.image || a.cached || this.pdfDoc)) {
                if (a.cached) return this.finishPageLoading(a, a.cache);
                a.loading = !0;
                this.opts.loadingIndicator && a.addClass("wowbook-loading");
                var b = this;
                if (a.src) a.otherHalf && a.otherHalf.loading || e.get(a.src, function(c) {
                    b.finishPageLoading(a, c);
                    a.otherHalf && b.finishPageLoading(a.otherHalf, c)
                });
                else if (a.image) {
                    var c = new Image;
                    c.onload = function() {
                        b.finishPageLoading(a, this)
                    };
                    e(c).addClass("wowbook-lazy");
                    c.src = a.image
                } else this.pdfDoc && b.pdfLoadPage(a.pageIndex)
            }
        },
        finishPageLoading: function(a, b) {
            a.loading = !1;
            a.loaded = !0;
            var c = !a.cached;
            a.cached = !1;
            this.opts.loadingIndicator && (a.removeClass("wowbook-loading"), this.elem.removeClass("wowbook-loading"));
            var d = a.find(".wowbook-page-content");
            c && (a.image || a.src) && this.isDoublePage(d.children().first()) && (d = d.children().first());
            d.append(b);
            this.upsertNumberInPage(a);
            this.opts.gutterShadow && this.upsertGutterShadowInPage(a);
            if (this.opts.onLoadPage) this.opts.onLoadPage(this,
                a, a.pageIndex);
            this.pdfDoc && !this._onLoadPDFCalled && (c = this.opts.onLoadPDF || this.opts.onLoadPdf) && (c(this, a, a.pageIndex), this._onLoadPDFCalled = !0);
            this.updateThumbnail(a.pageIndex)
        },
        unloadPage: function(a) {
            "number" === typeof a && (a = this.pages[a]);
            if (a && a.loaded && !this.isPageToKeep(a) && (a.cache = a.find(".wowbook-page-content").html(), a.find(".wowbook-page-content").empty(), a.cached = !0, a.loaded = !1, this.pdfDoc && (a.cache = void 0, a.cached = !1, a.textLayer = null), this.opts.onUnloadPage)) this.opts.onUnloadPage(this,
                a, a.pageIndex)
        },
        isPageToKeep: function(a) {
            if (!this.opts.pagesToKeep) return !1;
            var b = a.find(".wowbook-page-content");
            return a.keep || b.data("keep") || b.is(this.opts.pagesToKeep)
        },
        selectPagesToUnload: function(a) {
            void 0 == a && (a = this.currentPage);
            var b = [],
                c = this.leftPageIndex(a);
            a = this.rightPageIndex(a);
            for (var d = this.pageBelow(c), e = this.pageBelow(a), f = this.backPage(c), h = this.backPage(a), f = f && f.pageIndex, h = h && h.pageIndex, k = 0, p = this.pages.length; k < p; k++) {
                var u = this.pages[k];
                u.loaded && k != c && k != a && k != d && k != e &&
                    k != f && k != h && !this.isPageToKeep(u) && b.push(k)
            }
            return b
        },
        loadedPages: function() {
            for (var a = [], b = 0, c = this.pages.length; b < c; b++) this.pages[b].loaded && a.push(b);
            return a
        },
        unloadUnusedPages: function(a) {
            var b = this.loadedPages();
            if (!(b.length <= this.opts.pagesInMemory)) {
                b = b.length - this.opts.pagesInMemory;
                a = this.selectPagesToUnload(a);
                for (var c = 0; c < b; c++) this.unloadPage(a[c])
            }
        },
        removePages: function(a, b) {
            arguments.length || (a = 0, b = -1);
            this.holdedPage && this.releasePage(this.holdedPage);
            var c = this.pages;
            b = (b || a) +
                1 || c.length;
            var d = c.slice(a, b),
                e = c.slice(b);
            c.length = 0 > a ? c.length + a : a;
            c.push.apply(c, e);
            for (var e = 0, f = d.length; e < f; e++) d[e].remove();
            this.updateBook();
            return c.length
        },
        updateBook: function(a) {
            this.doPageNumbering();
            this.findPagesType();
            this.positionBookShadow();
            var b = this.rtl && this.closable || !this.rtl && !this.closable,
                c = this.opts.pageWidth || this.opts.pageHeight;
            this.differentPageSizes = c;
            for (var d = 0, g = this.pages.length - 1; d <= g; d++) {
                var f = this.pages[d].toggleClass("wowbook-left", b).toggleClass("wowbook-right", !b).data({
                    pageIndex: d,
                    holded: !1
                });
                f.pageIndex = d;
                f.cover = !1;
                f.insideCover = !1;
                f.isCover = c && (0 == d || d == g || this.closable && 1 == d || d == g - 1 && !this.otherPage(g));
                var h = e(".wowbook-page-content", f);
                f.src = this.replaceNumberHolder(h.data("src") || this.opts.srcs, d);
                f.image = this.replaceNumberHolder(h.data("image") || this.opts.images, d);
                1 != f.loaded && (f.loaded = !f.src && !f.image && !f.cached);
                !f.loaded && this.opts.loadingIndicator && f.addClass("wowbook-loading");
                f.onLeft = b;
                f.onRight = !b;
                b = !b;
                f.thickness = this.opts.pageThickness;
                c && (f.thickness = f.isCover ? this.opts.pageThickness : "1px")
            }
            this.setCovers();
            this.setPagesDimension();
            this.findSections();
            this.opts.currentPageControlWidth || this.setCurrentPageControlWidth();
            a ? this.updateCurrentPageControl() : this.showPage(this.currentPage)
        },
        setCovers: function() {
            function a(a) {
                if (0 == a || a == b) {
                    var d = c.pages[a];
                    if (d) {
                        var e = c.backPage(a);
                        c.otherPage(a) ? e || (d.cover = !1, d.insideCover = !0) : (d.cover = !0, d.insideCover = !1, e && !e.cover && (e.insideCover = !0))
                    }
                }
            }
            var b = this.pages.length - 1,
                c = this;
            a(0);
            a(b);
            c.insideCoverLeft = null;
            c.insideCoverRight = null;
            for (var d = 0, e = this.pages.length - 1; d <= e; d++) c.pages[d].insideCover && (c.pages[d].onLeft ? c.insideCoverLeft = c.pages[d] : c.insideCoverRight = c.pages[d])
        },
        singlePage: function(a) {
            if (void 0 !== a) {
                (this._singlePage = !!a) ? this.clipBoundaries && (this.clipBoundaries = !1, this._restoreClipBoundaries = !0, this.clipper.css("overflow", "visible"), this.clipper.children(".wowbook-inner-clipper").css("overflow", "visible"), this.container && this.container.css("overflow", "hidden")):
                    this._restoreClipBoundaries && (this._restoreClipBoundaries = !1, this.clipBoundaries = !0, this.clipper.css("overflow", "hidden"), this.clipper.children(".wowbook-inner-clipper").css("overflow", "visible"));
                a = 0;
                var b = this.pageWidth;
                if (this._singlePage) a = this.pageIsOnTheRight(this.currentPage) ? -b : 0;
                else if (this.centeredWhenClosed) {
                    a = !!this.leftPage(this.currentPage);
                    var c = this.rightPage(this.currentPage);
                    a = a && c ? 0 : a ? b / 2 : -b / 2
                }
                this.origin.css("left", a);
                this.positionBookShadow()
            }
            return this._singlePage
        },
        doPageNumbering: function() {
            var a =
                this.opts;
            if (a.pageNumbers && this.pages.length) {
                var b = a.numberedPages,
                    a = this.pages.length - 1,
                    c = this.pageIsOnTheLeft(a);
                "all" == b && (b = [0, -1]);
                b || (b = this.closable ? [2, c ? -3 : -2] : [0, -1]);
                var d = b[0],
                    b = b[1];
                0 > d && (d = a + d + 1);
                0 > d && (d = 0);
                d > this.pages.length - 1 && (d = a);
                0 > b && (b = a + b + 1);
                0 > b && (b = 0);
                b > this.pages.length - 1 && (b = a);
                for (var g = this.opts.firstPageNumber, c = 0; c < a; c++) delete this.pages[c].number;
                for (c = 0; c < d; c++) e(".wowbook-page-number", this.pages[c]).remove();
                for (c = b + 1; c < a; c++) e(".wowbook-page-number", this.pages[c]).remove();
                for (c = d; c <= b; c++) this.pages[c].number = g, a = e(".wowbook-page-number", this.pages[c]), a.length || (a = e(".wowbook-page-content", this.pages[c]), a = e('<div class="wowbook-page-number"></div>').appendTo(a)), a.html(g++)
            }
        },
        upsertNumberInPage: function(a) {
            "number" === typeof a && (a = this.pages[a]);
            if (a.number || 0 === a.number) {
                var b = e(".wowbook-page-number", a);
                b.length || (content = e(".wowbook-page-content", a), b = e('<div class="wowbook-page-number"></div>').appendTo(content));
                b.html(a.number)
            }
        },
        upsertGutterShadowInPage: function(a) {
            "number" ===
            typeof a && (a = this.pages[a]);
            a.find(".wowbook-gutter-shadow").length || (a = a.find(".wowbook-page-content"), e("<div class='wowbook-gutter-shadow'>").css("height", this.pageHeight).appendTo(a))
        },
        findPagesType: function() {
            var a = this.opts,
                b = {},
                c;
            var d = a.hardPages || [];
            var e = !0 === d;
            if (!e)
                for (a.hardcovers && (d.push(0, -1), this.closable && d.push(1), this.otherPage(this.pages.length - 1) || d.push(-2)), a = 0, c = d.length; a < c; a++) {
                    var f = d[a];
                    0 > f && (f = this.pages.length + f);
                    0 <= f && f < this.pages.length && (b[f] = !0)
                }
            for (a = this.pages.length; a--;) d =
                e || b[a] || this.pages[a].hardPageSetByUser, this.pages[a].toggleClass("wowbook-hardpage", d).isHardPage = d
        },
        showPage: function(a, b) {
            0 > a && (a = 0);
            a > this.pages.length - 1 && (a = this.pages.length - 1);
            var c = this.leftPageIndex(a);
            var d = this.rightPageIndex(a),
                g = this.pageBelow(c),
                f = this.pageBelow(d),
                h = this.pageWidth,
                k = this.pages.length - 1;
            this.loadPage(c);
            this.loadPage(d);
            this.loadPage(g);
            this.loadPage(f);
            this.loadPage(this.backPage(c));
            this.loadPage(this.backPage(d));
            this.opts.pagesInMemory && this.unloadUnusedPages(a);
            for (var p = 0; p <= k; p++) {
                var u = this.pages[p].onLeft != this.rtl ? p : k - p;
                var t = p === g || p === c || p === d || p === f ? "block" : "none";
                this.pages[p].data("zIndex", u).css({
                    display: t,
                    left: this.pages[p].onLeft ? 0 : h,
                    top: 0,
                    zIndex: u
                });
                this.setPagePosition(this.pages[p])
            }
            this.differentPageSizes && (null !== g && this.insideCoverLeft.css("display", "block"), null !== f && this.insideCoverRight.css("display", "block"));
            g = 0 == a || !this.closable && 1 == a;
            k = a == k || a == this.otherPage(k);
            this.leftHandle.toggleClass("wowbook-disabled", !this.backPage(c));
            this.rightHandle.toggleClass("wowbook-disabled", !this.backPage(d));
            this.toggleControl("back", g);
            this.toggleControl("next", k);
            this.toggleControl("first", g);
            this.toggleControl("last", k);
            c = !this.pages.length;
            this.toggleControl("left", c || (this.rtl ? k : g));
            this.toggleControl("lastLeft", c || (this.rtl ? k : g));
            this.toggleControl("right", c || (this.rtl ? g : k));
            this.toggleControl("lastRight", c || (this.rtl ? g : k));
            (c = this.onShowPage) && e.isFunction(c) && !this.isOnPage(a) && (this.currentPage = a, c(this, this.pages[a], a), (d = this.otherPage(a)) &&
                c(this, this.pages[d], d));
            this.currentPage = a;
            this.pdf && this.pdfUpdateRender();
            this._controls.currentpage && this.updateCurrentPageControl();
            this._sliding || (c = this._singlePage && this.pageIsOnTheRight(a) ? -h : 0, this.origin.css("left", c), this.origin.css("transform", ""));
            this.centeredWhenClosed && !this._singlePage && (c = !!this.leftPage(a), d = this.rightPage(a), this.origin.css("left", c && d ? 0 : c ? h / 2 : -h / 2));
            this.positionBookShadow();
            !1 !== b && this.opts.updateBrowserURL && this.locationHashToPage() != a && (this.locationHashSetTo =
                window.location.hash = this.pageToLocationHash(a));
            this.showThumbnail()
        },
        slideX: function(a, b) {
            var c = parseFloat(this.origin.css("left")),
                d = a - c;
            this.origin.css("left", 0);
            var g = this;
            this._move = 0;
            this._sliding = !0;
            e(this).animate({
                _move: 1
            }, {
                duration: this.opts.turnPageDuration,
                easing: "easeOutCubic",
                complete: function() {
                    this._sliding = !1;
                    this.origin.css("transform", "");
                    this.origin.css("left", a);
                    this.positionBookShadow();
                    e.isFunction(b) && b()
                },
                step: function(a, b) {
                    g.translate(this.origin, c + a * d);
                    this.positionBookShadow()
                }
            })
        },
        holdPage: function(a, b, c, d, e) {
            "number" === typeof a && (a = this.pages[a]);
            if (a) {
                var f = a.pageIndex,
                    g = this.pages.length - 1,
                    k = !this.otherPage(g);
                if (!d) d = this.pageIsOnTheLeft(f) ? "l" : "r";
                else if (!this.corners[d] || (this.pageIsOnTheLeft(f) ? /r/ : /l/).test(d)) return;
                void 0 === e && (e = this.backPage(f));
                if (e) {
                    var p = e.pageIndex;
                    a.data("holded_info", [b, c, d]);
                    if (!this._singlePage && this.centeredWhenClosed && (0 === f || 0 === p || k && (p === g || f === g))) {
                        var u = 0,
                            t = !this.rtl,
                            w = this.pageWidth;
                        if (t ? 0 === f : f === g && k) {
                            var l = -w / 2;
                            var q = -w / 4;
                            var m =
                                0;
                            var z = -w / 2;
                            var n = -w;
                            var r = q;
                            var B = n;
                            var v = b
                        }
                        if (t ? f === g && k : 0 === f) l = w, q = 3 * w / 2, m = w / 2, z = 0, n = w, r = 2 * w, B = b, v = r;
                        if (t ? 0 === p : p === g && k) l = w / 2, q = f === (t ? g : 0) ? w : 3 * w / 2, m = f === (t ? g : 0) ? w / 2 : 0, z = -w / 2, n = l, r = 2 * w, B = b, v = r;
                        if (t ? p === g && k : 0 === p) l = f === (t ? 0 : g) ? 0 : -w / 2, q = w / 2, m = w / 2, z = f === (t ? 0 : g) ? -w / 2 : 0, n = -w, r = q, B = n, v = b;
                        if (b < l) {
                            u = m;
                            var C = B
                        }
                        b > q && (u = z, C = v);
                        b >= l && b <= q && (b = (b - l) / (q - l), u = m + b * (z - m), C = n + b * (r - n));
                        b = C;
                        this.origin.css("left", u);
                        this.positionBookShadow()
                    }
                    this.zoomed || "basic" == this.pageType(a) || "basic" == this.pageType(e) ? this.foldPageBasic(a,
                        b, c, d, e) : a.isHardPage || e.isHardPage ? this.holdHardpage(a, b, c, d, e) : this.foldPage(a, b, c, d, e);
                    if (!a.data("holded") && (a.addClass("wowbook-page-holded"), e.addClass("wowbook-page-holded"), a.data("holded", !0), this.holdedPage = a, this.holdedPageBack = e, this.shadows && this.shadowClipper.css("display", "block"), this.clipBoundaries && this.clipper.css("overflow", "visible"), this.positionBookShadow(), this.opts.onHoldPage)) this.opts.onHoldPage(this, f, a, e)
                }
            }
        },
        foldPage: function(a, b, c, d, e) {
            this._currentFlip || (this._currentFlip =
                this.foldPageStart(a, b, c, d, e));
            this._currentFlip.page == a && (this._currentFlip.x = b, this._currentFlip.y = c, this._currentFlip.page.data("holdedAt", {
                x: b,
                y: c
            }), this._currentFlip.corner = d, this.foldPageStyles(this._currentFlip))
        },
        foldPageStart: function(a, b, c, d, e) {
            var f = {};
            "number" === typeof a && (a = this.pages[a]);
            f.book = this;
            f.page = a;
            f.pageIndex = a.data("pageIndex");
            void 0 === e && (e = this.backPage(f.pageIndex));
            if (e && e.length) {
                f.back = e;
                f.pageContent = a.children().first();
                f.backContent = e.children().first();
                var g = f.page.pageWidth,
                    k = f.page.pageHeight;
                d || (d = "tl");
                if ("l" == d || "r" == d) {
                    var p = {
                        x: "l" == d ? 0 : g,
                        y: c
                    };
                    a.data("grabPoint", p);
                    f.grabPoint = p;
                    d = (c >= p.y ? "t" : "b") + d
                }
                f.page.data("holdedAt", {
                    x: b,
                    y: c
                });
                f.x = b;
                f.y = c;
                f.page.data("holdedCorner", d);
                f.corner = d;
                f.pageDiagonal = Math.sqrt(g * g + k * k);
                b = Math.ceil(f.pageDiagonal);
                b = "rect(-" + b + "px " + b + "px " + b + "px 0px)";
                f.page.css("clip", b);
                f.pageLeft = parseFloat(a.css("left"));
                e.css({
                    left: f.pageLeft + "px",
                    zIndex: 1E5,
                    clip: b
                });
                f.shadowHeight = 2 * Math.ceil(f.pageDiagonal);
                f.shadowTop = -(f.shadowHeight - k) /
                    2;
                this.shadowClipper.css({
                    top: f.page.top,
                    left: a.onLeft ? a.left : e.left,
                    width: 2 * g,
                    height: k
                });
                this.internalShadow.css({
                    display: "block",
                    height: f.shadowHeight
                });
                f.foldShadowWidth = this.foldShadow.width();
                this.foldShadow.css({
                    display: "block",
                    height: f.shadowHeight
                });
                this.foldGradientContainer.appendTo(f.backContent);
                f.foldGradientWidth = this.foldGradientElem.width();
                f.foldGradientHeight = 2 * Math.ceil(f.pageDiagonal);
                this.foldGradientElem.css("height", f.foldGradientHeight);
                this.foldGradientContainer.css({
                    position: "absolute",
                    width: f.foldGradientWidth,
                    height: f.foldGradientHeight,
                    top: 0,
                    left: 0,
                    display: "none"
                });
                f.foldGradientVisible = !1;
                return f
            }
        },
        foldPageStyles: function(a) {
            var b = a.page.pageWidth,
                c = a.page.pageHeight,
                d = b / 2,
                g = c / 2,
                f = e.wowBook.utils.translate,
                h = a.x,
                k = a.y,
                p = a.back,
                u = a.corner || "tl";
            if ("l" == u || "r" == u) {
                var t = a.page.data("grabPoint");
                t || (t = {
                    x: "l" == u ? 0 : b,
                    y: k
                }, page.data("grabPoint", t));
                u = (k >= t.y ? "t" : "b") + (this.pageIsOnTheLeft(a.pageIndex) ? "l" : "r");
                a.corner = u;
                a.page.data("holdedCorner", u);
                var w = h - t.x;
                var l = k - t.y;
                l = Math.atan2(l,
                    w);
                t = {
                    x: 0,
                    y: (k >= t.y ? 0 : c) - t.y
                };
                t = v(t, 2 * l);
                h = t.x + h;
                k = t.y + k
            }
            a.page.data("holdedAt", {
                x: h,
                y: k
            });
            a.page.data("holdedCorner", u);
            var t = a.page.corners[u],
                u = b - t[0],
                q = t[1];
            w = h - u;
            l = k - q;
            var m = Math.sqrt(w * w + l * l);
            m > b && (h = u + b * w / m, k = q + b * l / m);
            q = c - q;
            w = h - u;
            l = k - q;
            var m = Math.sqrt(w * w + l * l),
                n = a.pageDiagonal;
            m > n && (h = u + n * w / m, k = q + n * l / m);
            u = t[0];
            t = t[1];
            t == k && (k = t + .001);
            w = h - u;
            l = k - t;
            m = Math.sqrt(w * w + l * l);
            h = m / 2;
            l = Math.atan2(l, w);
            w = Math.tan(l);
            k = l;
            l = 180 * l / Math.PI;
            q = {
                x: u - d,
                y: g - t
            };
            n = v(q, k);
            m = n.x + h + d + .5;
            a.pageContent.css("transform",
                f(-m, 0) + " rotate(" + (-l).toFixed(7) + "deg)");
            a.page.css("transform", f((Math.cos(k) * m).toFixed(5), (Math.sin(k) * m).toFixed(5)) + " rotate(" + l.toFixed(7) + "deg)");
            n = this.calculateOpacity(h, b, this.shadowThreshold, 50);
            if (this.shadows && 0 < n) {
                var z = a.shadowTop;
                this.internalShadow.css({
                    transform: f(m + (a.page.onRight ? a.page.pageWidth : 0), z) + " rotate(" + l + "deg)",
                    transformOrigin: d - m + "px " + (g + (a.shadowHeight - c) / 2) + "px"
                });
                m -= a.foldShadowWidth;
                this.foldShadow.css({
                    transform: f(m + (a.page.onRight ? a.page.pageWidth : 0), z) + " rotate(" +
                        l + "deg)",
                    transformOrigin: d - m + "px " + (g + (a.shadowHeight - c) / 2) + "px"
                });
                this.shadowContainer.css({
                    opacity: n,
                    display: "block"
                })
            } else this.shadowContainer.css("display", "none");
            p.show();
            q.x = -q.x;
            n = v(q, -k);
            m = n.x - h + d - 1;
            c = {
                x: n.x - h,
                y: n.y + h * w
            };
            p = {
                x: n.x - h,
                y: n.y - h / (0 == w ? 1E-4 : w)
            };
            c = v(c, -k);
            p = v(p, -k);
            p = -(p.x + d);
            c = -(c.y - g);
            a.backContent.css("transform", f(-m, 0) + " rotate(" + l + "deg)");
            a.back.css("transform", f((u + p + Math.cos(k) * m).toFixed(5), (t - c + Math.sin(k) * m).toFixed(5)) + " rotate(" + l + "deg)");
            n = this.calculateOpacity(2 *
                h, 2 * b, this.foldGradientThreshold, 50);
            this.foldGradient && 0 < n ? (this.foldGradientContainer.css({
                opacity: n,
                display: "block",
                transform: f(b - u - a.foldGradientWidth / 2, t - a.foldGradientHeight / 2) + " rotate(" + -l + "deg)"
            }), this.foldGradientElem.css("transform", f(-h + a.foldGradientWidth / 2, 0)), a.foldGradientVisible || (this.foldGradientContainer.css("display", "block"), a.foldGradientVisible = !0)) : a.foldGradientVisible && (this.foldGradientContainer.css("display", "none"), a.foldGradientVisible = !1)
        },
        holdHardpage: function(a, b,
            c, d, e) {
            this._currentFlip || (this._currentFlip = this.flipHardPageStart(a, b, c, d, e));
            this._currentFlip.page == a && (this._currentFlip.x = b, this._currentFlip.y = c, this._currentFlip.page.data("holdedAt", {
                x: b,
                y: c
            }), this._currentFlip.corner = d, this.flipHardPageStyles(this._currentFlip))
        },
        flipHardPageStart: function(a, b, c, d, g) {
            this.clipBoundaries && this.clipper.children(".wowbook-inner-clipper").css("overflow", "visible");
            !this.border3D && this.opts.pageThickness && this.opts.use3d && Modernizr.csstransforms3d && (this.border3D =
                e('<div class="wowbook-3d-border">'), this.border3D.css("background", this.opts.pageEdgeColor));
            this.opts.hardPageShadow && !this.hardPageShadow && (this.hardPageShadow = e('<div class="wowbook-hard-page-shadow">'));
            var f = {};
            "number" === typeof a && (a = this.pages[a]);
            f.book = this;
            f.page = a;
            f.pageIndex = a.data("pageIndex");
            void 0 === g && (g = this.backPage(f.pageIndex));
            if (g && g.length) {
                f.back = g;
                var h = a.pageWidth;
                d || (d = "tl");
                a.data("holdedAt", {
                    x: b,
                    y: c
                });
                a.data("holdedCorner", d);
                a.css("zIndex", 1E5);
                g.css("zIndex", 1E5);
                this.opts.use3d && Modernizr.csstransforms3d && (a.css(Modernizr.prefixed("perspectiveOrigin"), "0 50%"), g.css(Modernizr.prefixed("perspectiveOrigin"), "0 50%"));
                b = a.onLeft ? h : 0;
                a.css("transformOrigin", b + "px 50%");
                g.css("transformOrigin", h - b + "px 50%");
                this.border3D && this.border3D.css("width", a.thickness);
                this.shadows && this.hardPageDropShadow.css({
                    display: "block",
                    width: a.pageWidth,
                    height: a.pageHeight,
                    top: a.top
                });
                return f
            }
        },
        flipHardPageStyles: function(a) {
            var b = a.page,
                c = a.back,
                d = a.x,
                g = a.y,
                f = this.pageIsOnTheRight(a.pageIndex),
                h = this.pageWidth,
                k = this.pageHeight;
            (a = a.corner) || (a = "tl");
            b.data("holdedAt", {
                x: d,
                y: g
            });
            b.data("holdedCorner", a);
            g = f ? h - d : d;
            a = f ? 0 : h;
            var p;
            0 > g && (g = 0);
            g = (p = g < h) ? b : c;
            (p ? c : b).css("display", "none");
            f = f != p;
            a = d - a;
            a > h && (a = h);
            a < -h && (a = -h);
            var l = -Math.sqrt(1600 * (1 - a * a / ((h + 15) * (h + 15))));
            p = Math.abs(a / h);
            l = 1 == p ? 0 : Math.atan2(l, a);
            if (this.opts.use3d && Modernizr.csstransforms3d) {
                var t = f ? -this._calculateAngleFromX(-a, h) : this._calculateAngleFromX(a, h);
                if (this.animating) {
                    var m = this._animationData;
                    if (this.curledPage || m.curled) m.curled = !0, m.angle || (l = {
                        from: t,
                        to: 0
                    }, m.angle = l, t = a + m.dx, l.to = f ? -this._calculateAngleFromX(-t, h) : this._calculateAngleFromX(t, h), Math.abs(a) == h && (l.from = 0), Math.abs(t) == h && (l.to = 0), l.delta = l.to - l.from), t = m.angle.from - m.angle.delta * (m.from.x - d) / m.dx
                }
                g.append(this.border3D);
                this.hardPageShadow && (g.append(this.hardPageShadow), this.hardPageShadow.css("opacity", 1 - p));
                g.css({
                    transform: "perspective(" + this.opts.perspective + this.perspectiveUnit + ") rotate3d(0, 1, 0, " + t + "deg)",
                    display: "block"
                })
            } else g.css({
                transform: "skewY(" +
                    l + "rad) scaleX(" + p + ")",
                display: "block"
            });
            !e.wowBook.support.transform && e.wowBook.support.filters && (g.css("filter", "progid:DXImageTransform.Microsoft.Matrix(" + ("M11=" + p + ", M12=0, M21=" + Math.tan(l) * p + ", M22=1") + ", sizingMethod='auto expand')"), g.css({
                marginTop: k - g.height(),
                marginLeft: f ? h - g.width() : 0
            }));
            this.shadows && this.hardPageDropShadow.css({
                left: f ? b.onLeft ? b.left : c.left : h,
                opacity: Math.abs(a) < h / 2 ? 0 : (Math.abs(a) - h / 2) / h * .8
            })
        },
        _calculateAngleFromX: function(a, b, c) {
            var d = 2 * b / 3;
            if (a > d) {
                var e = this._calculateAngleFromX(d,
                    b, c);
                return e + (a - d) / (b - d) * (0 - e)
            }
            c = c || this.opts.perspective;
            d = 180 / Math.PI;
            e = b * b;
            c *= c;
            var f = a * a;
            a = Math.acos((b * c * a - Math.sqrt(e * e * c * f + e * e * f * f - e * c * f * f)) / (e * c + e * f));
            return -a * d
        },
        foldPageBasic: function(a, b, c, d, e) {
            this._currentFlip || (this._currentFlip = this.foldPageBasicStart(a, b, c, d, e));
            this._currentFlip && this._currentFlip.page == a && (this._currentFlip.x = b, this._currentFlip.y = c, this._currentFlip.page.data("holdedAt", {
                x: b,
                y: c
            }), this._currentFlip.corner = d, this.foldPageBasicStyles(this._currentFlip))
        },
        foldPageBasicStart: function(a,
            b, c, d, e) {
            var f = {};
            "number" === typeof a && (a = this.pages[a]);
            f.book = this;
            f.page = a;
            f.pageIndex = a.data("pageIndex");
            void 0 === e && (e = this.backPage(f.pageIndex));
            if (e && e.length) {
                f.back = e;
                var g = a.pageHeight;
                d || (d = "tl");
                a.data("holdedAt", {
                    x: b,
                    y: c
                });
                a.data("holdedCorner", d);
                e.css("zIndex", 1E5);
                a.data("foldPageBasic", !0);
                f.foldGradientWidth = this.foldGradientElem.width();
                f.foldShadowWidth = this.foldShadow.width();
                this.internalShadow.css("display", "none");
                this.foldShadow.css({
                    display: "none",
                    height: g,
                    transform: "",
                    top: a.top
                }).toggleClass("wowbook-shadow-fold-flipped", a.onRight);
                this.shadowContainer.css("display", "block");
                b = e.children().first();
                this.foldGradientContainer.appendTo(b).css({
                    width: f.foldGradientWidth,
                    height: g,
                    top: 0,
                    transform: "",
                    zIndex: 1E9
                });
                this.foldGradientElem.css({
                    left: 0,
                    height: g
                }).toggleClass("wowbook-fold-gradient-flipped", a.onRight);
                return f
            }
        },
        foldPageBasicStyles: function(a) {
            var b = a.page;
            var c = a.back;
            x = a.x;
            y = a.y;
            var d = b.pageWidth,
                e = b.pageHeight,
                f = a.corner;
            f || (f = "tl");
            b.data("holdedAt", {
                x: x,
                y: y
            });
            b.data("holdedCorner", f);
            var h = (f = this.pageIsOnTheLeft(a.pageIndex)) ? x : d - x;
            0 > h && (h = 0);
            h > 2 * d && (h = 2 * d);
            var k = h / 2;
            if (f) {
                var p = "rect(-1000px " + d + "px " + e + "px " + k + "px)";
                e = "rect(-1000px " + d + "px " + e + "px " + (d - k) + "px)";
                h = b.left + (h - d)
            } else p = "rect(-1000px " + (d - k) + "px " + e + "px -1000px)", e = "rect(-1000px " + k + "px " + e + "px -1000px)", h = c.left + (d - h + d);
            b.css("clip", p);
            c.css({
                clip: e,
                left: h,
                display: "block"
            });
            p = this.calculateOpacity(2 * k, 2 * d, this.shadowThreshold, 50);
            this.shadows && 0 < p ? (b = f ? b.left + k - a.foldShadowWidth :
                c.left + d - k + d, this.shadowContainer.css("opacity", p), this.foldShadow.css({
                    left: b,
                    display: "block"
                })) : this.foldShadow.css("display", "none");
            p = this.calculateOpacity(2 * k, 2 * d, this.foldGradientThreshold, 50);
            this.foldGradient && 0 < p ? (b = f ? d - k : k - a.foldGradientWidth, this.foldGradientContainer.css({
                opacity: p,
                left: b,
                display: "block"
            })) : this.foldGradientContainer.css("display", "none")
        },
        stopAnimation: function(a) {
            arguments.length || (a = !0);
            e(this).stop(!0, a);
            this.animating = !1;
            this.currentFlip && (this.currentFlip.finished = !0)
        },
        flip: function(a, b, c, d) {
            d || (d = e.isPlainObject(a) ? a : {});
            d.from || (d.from = []);
            d.to || (d.to = []);
            var g = this;
            if (!g.animating) {
                g.animating = !0;
                c || (c = d.page || g.holdedPage);
                var f = c.data("holded_info");
                c.data("holdedAt");
                var h = d.corner || c.data("holdedCorner"),
                    k = e.easing[d.easing] || d.easing || function(a) {
                        return 1 == a ? 1 : -Math.pow(2, -10 * a) + 1
                    };
                a = {
                    page: c,
                    back: d.back || g.holdedPageBack || g.backPage(c.pageIndex),
                    initialX: void 0 != d.from[0] ? d.from[0] : f[0],
                    initialY: void 0 != d.from[1] ? d.from[1] : f[1],
                    finalX: void 0 != d.to[0] ?
                        d.to[0] : a,
                    finalY: void 0 != d.to[1] ? d.to[1] : b,
                    corner: h || f[2],
                    duration: d.duration,
                    complete: function() {
                        g.animating = !1;
                        e.isFunction(d.complete) && d.complete()
                    },
                    easing: k,
                    arc: d.arc,
                    dragging: d.dragging,
                    start: e.now(),
                    finished: !1
                };
                a.deltaX = a.finalX - a.initialX;
                a.deltaY = a.finalY - a.initialY;
                this._animationData = {
                    from: {
                        x: a.initialX,
                        y: a.initialY
                    },
                    to: {
                        x: a.finalX,
                        y: a.finalY
                    },
                    dx: a.deltaX
                };
                void 0 == a.duration && (a.duration = this.turnPageDuration * Math.abs(a.deltaX) / (2 * this.pageWidth));
                a.duration < this.opts.turnPageDurationMin &&
                    (a.duration = this.opts.turnPageDurationMin);
                !c.isHardPage && .4 < a.duration / this.turnPageDuration && this.playFlipSound();
                this.currentFlip = a
            }
        },
        rafCallback: function() {
            window.raf(this.callRAFCallback);
            this._zoomUpdateOnRAF();
            if (this.currentFlip && !this.currentFlip.finished) {
                var a = this.currentFlip,
                    b = (e.now() - a.start) / a.duration;
                1 <= b && (b = 1);
                a.x = a.initialX + a.deltaX * a.easing(b, a.duration * b, 0, 1, a.duration);
                a.y = a.initialY + a.deltaY * a.easing(b, a.duration * b, 0, 1, a.duration);
                a.arc && (a.y -= (.5 - Math.abs(.5 - a.easing(b, a.duration *
                    b, 0, 1))) * this.pageHeight / 10);
                a.dragging && (a.x = a.initialX + .2 * a.deltaX, a.y = a.initialY + .2 * a.deltaY, a.initialX = a.x, a.initialY = a.y, a.deltaX = a.finalX - a.initialX, a.deltaY = a.finalY - a.initialY, 1 > a.deltaX && 1 > a.deltaY && 1 == b);
                this.holdPage(a.page, a.x, a.y, a.corner, a.back);
                1 == b && (a.finished = !0, a.complete && a.complete())
            }
        },
        releasePages: function() {
            for (var a = 0, b = this.pages.length; a < b; a++) this.pages[a].data("holded") && this.releasePage(a)
        },
        releasePage: function(a, b, c, d) {
            "number" === typeof a && (a = this.pages[a]);
            var e = this,
                f = a.data("holdedAt"),
                h = a.data("holdedCorner");
            if (b && f) this.flip({
                from: [f.x, f.y],
                to: a.corners[h],
                page: a,
                easing: "linear",
                duration: d,
                complete: function() {
                    e.releasePage(a)
                }
            });
            else if (b = a.data("pageIndex"), void 0 === c && (c = this.holdedPageBack || this.backPage(b)), this.holdedPageBack = this.holdedPage = null, a.data({
                    holded_info: null,
                    holdedAt: null,
                    holdedCorner: null,
                    grabPoint: !1,
                    foldPageBasic: null,
                    holded: !1
                }), this.clipBoundaries && !this.zoomed && (this.clipper.css("overflow", "hidden"), this.clipper.children(".wowbook-inner-clipper").css("overflow",
                    "hidden")), this.shadowClipper.css("display", "none"), this.internalShadow.parent().hide(), this.foldGradientContainer.hide(), this.hardPageDropShadow.hide(), this.resetPage(a), c && c.length && (this.resetPage(c), c.hide()), this.foldShadow.removeClass("wowbook-shadow-fold-flipped").css({
                    transform: "",
                    left: ""
                }), this.foldGradientElem.removeClass("wowbook-fold-gradient-flipped").css("transform", ""), this.foldGradientContainer.css("transform", "").appendTo(this.pagesContainer), this.positionBookShadow(), this.opts.onReleasePage) this.opts.onReleasePage(this,
                b, a, c)
        },
        resetPage: function(a) {
            this._currentFlip = void 0;
            a.removeClass("wowbook-page-holded");
            this.resetCSS || (this.resetCSS = {
                transform: "",
                transformOrigin: "",
                clip: "auto",
                marginLeft: 0,
                marginTop: 0,
                filter: ""
            });
            var b = a.pageWidth,
                c = a.pageHeight;
            a.css(this.resetCSS).css({
                zIndex: a.data("zIndex"),
                width: b,
                height: c,
                left: a.onLeft ? 0 : this.pageWidth
            });
            this.setPagePosition(a);
            e.browser.msie && 9 > e.browser.version && a.attr("style", a.attr("style").replace(/clip\: [^;]+;/i, ""));
            a = e(".wowbook-page-content", a);
            a.css(this.resetCSS);
            q(a, b, c);
            this.hardPageShadow && this.hardPageShadow.hide()
        },
        gotoPage: function(a, b) {
            var c;
            if (!this.animating) {
                "string" === typeof a && "#" == a.charAt(0) && (a = this.selectorToPage(a));
                0 > a && (a = 0);
                a > this.pages.length - 1 && (a = this.pages.length - 1);
                if (this._singlePage) {
                    if (a == this.currentPage) return
                } else if (this.isOnPage(a)) return;
                if (!this.elem.is(":visible")) return this.showPage(a, b), a;
                this._cantStopAnimation = !0;
                var d = a < this.currentPage;
                var e = this.rtl ? a > this.currentPage : d;
                var f = this,
                    h = e ? f.leftPage() : f.rightPage();
                if (h) {
                    this.uncurl(!0);
                    if (e) {
                        var k = this.leftPage(a);
                        var p = this.rightPage(a)
                    } else k = this.rightPage(a), p = this.leftPage(a);
                    if (this.closable && this.differentPageSizes && h.isCover != p.isCover && h.pageIndex !== a) {
                        if (0 == h.pageIndex || 0 == p.pageIndex) this.showPage(1, !1);
                        else {
                            var l = this.pages.length - 1;
                            this.otherPage(l) || h.pageIndex != l && p.pageIndex != l || this.showPage(this.backPage(l).pageIndex, !1)
                        }
                        this.gotoPage(p.pageIndex)
                    } else {
                        var m = p && p.is(":visible");
                        if (d)
                            for (d = h.pageIndex - 1; 0 <= d; d--) this.pages[d].css("display",
                                "none");
                        else
                            for (d = h.pageIndex + 1, c = this.pages.length; d < c; d++) this.pages[d].css("display", "none");
                        k && (k.css("display", "block"), k.onLeft ? this.insideCoverLeft.css("display", "block") : this.insideCoverRight.css("display", "block"));
                        m && p.css("display", "block");
                        var q = a;
                        k = h.data("holdedAt");
                        m = h.data("holdedAt");
                        d = h.data("holdedCorner") || (e ? "tl" : "tr");
                        e ? (m = m || {
                            x: 0,
                            y: 0
                        }, e = 2 * f.pageWidth, c = "bl" != d ? 0 : h.pageHeight) : (m = m || {
                            x: h.pageWidth,
                            y: 0
                        }, e = -h.pageWidth, c = "br" != d ? 0 : h.pageHeight);
                        var n = "linear";
                        if (this.centeredWhenClosed &&
                            !this._singlePage && (h.isHardPage || p.isHardPage)) {
                            l = this.pages.length - 1;
                            var z = !this.rtl,
                                n = "easeOutCubic";
                            this.pageIsOnTheRight(this.currentPage) && !this.otherPage(this.currentPage) && (e += this.pageWidth / 2, a != (z ? l : 0) || this.otherPage(a) || (e += this.pageWidth / 2));
                            this.pageIsOnTheLeft(this.currentPage) && !this.otherPage(this.currentPage) && (e -= this.pageWidth / 2, a != (z ? 0 : l) || this.otherPage(a) || (e -= this.pageWidth / 2))
                        }
                        if (this._singlePage) {
                            if (this.isOnPage(a)) return this.animating = !0, this.slideX(this.pageIsOnTheLeft(a) ?
                                0 : -this.pageWidth,
                                function() {
                                    f._cantStopAnimation = !1;
                                    f.animating = !1;
                                    f.showPage(q, b)
                                }), a;
                            this.slideX(this.pageIsOnTheLeft(a) ? 0 : -this.pageWidth, function() {
                                f.showPage(q, b)
                            })
                        }
                        f.flip({
                            from: [m.x, m.y],
                            to: [e, c],
                            easing: n,
                            arc: !k,
                            page: h,
                            back: p,
                            corner: d,
                            complete: function() {
                                f._cantStopAnimation = !1;
                                f.releasePage(h, !1);
                                f.showPage(q, b)
                            }
                        });
                        return a
                    }
                }
            }
        },
        gotoDirection: function(a, b) {
            void 0 == b && (b = this.currentPage);
            "left" == a && (a = -1);
            "right" == a && (a = 1);
            var c = a * (this._singlePage ? 1 : 2);
            this.rtl && (c = -c);
            return this.gotoPage(b +
                c)
        },
        gotoLeft: function(a) {
            return this.gotoDirection("left", a)
        },
        gotoRight: function(a) {
            return this.gotoDirection("right", a)
        },
        gotoLastLeft: function(a) {
            return this.gotoPage(this.rtl ? this.pages.length : 0)
        },
        gotoLastRight: function(a) {
            return this.gotoPage(this.rtl ? 0 : this.pages.length)
        },
        back: function() {
            return this.gotoPage(this.currentPage - (this._singlePage ? 1 : 2))
        },
        advance: function() {
            return this.gotoPage(this.currentPage + (this._singlePage ? 1 : 2))
        },
        leftPage: function(a) {
            void 0 === a && (a = this.currentPage);
            return this.pages[this.leftPageIndex(a)] ||
                null
        },
        leftPageIndex: function(a) {
            if (null != a) {
                this.pageIsOnTheRight(a) && (a += this.rtl ? 1 : -1);
                if (0 > a || a > this.pages.length - 1) a = null;
                return a
            }
        },
        rightPage: function(a) {
            void 0 === a && (a = this.currentPage);
            return this.pages[this.rightPageIndex(a)] || null
        },
        rightPageIndex: function(a) {
            if (null != a) {
                this.pageIsOnTheLeft(a) && (a += this.rtl ? -1 : 1);
                if (0 > a || a > this.pages.length - 1) a = null;
                return a
            }
        },
        pageIsOnTheRight: function(a) {
            return !this.pageIsOnTheLeft(a)
        },
        pageIsOnTheLeft: function(a) {
            a = !(a % 2);
            this.closable && (a = !a);
            this.rtl &&
                (a = !a);
            return a
        },
        otherPage: function(a) {
            var b = this.pageIsOnTheLeft(a) ? 1 : -1;
            this.rtl && (b = -b);
            a += b;
            if (0 > a || a > this.pages.length - 1) a = null;
            return a
        },
        isOnPage: function(a) {
            return "number" === typeof a && (a === this.currentPage || a === this.otherPage(this.currentPage))
        },
        backPage: function(a) {
            if (!this.pages[a]) return null;
            var b = a % 2 ? 1 : -1;
            a += this.closable ? -b : b;
            return this.pages[a]
        },
        pageBelow: function(a) {
            a = parseInt(a, 10);
            if (a != a) return null;
            a += this.pageIsOnTheLeft(a) != this.rtl ? -2 : 2;
            if (0 > a || a > this.pages.length - 1) a = null;
            return a
        },
        pageType: function(a) {
            a = "number" === typeof a ? this.pages[a] : a;
            return a.isHardPage ? "hard" : a.find(".wowbook-page-content.wowbook-basic-page").length ? "basic" : "soft"
        },
        calculateOpacity: function(a, b, c, d) {
            if (a <= c || a >= b - c) return 0;
            if (a >= d && a <= b - d) return 1;
            a > d && (a = b - a);
            return (a - c) / (d - c)
        },
        startSlideShow: function() {
            this.slideShowRunning = !0;
            this.advanceAfterTimeout(this.slideShowDelay);
            this.toggleControl("slideshow", !0)
        },
        advanceAfterTimeout: function(a) {
            var b = this;
            this.slideShowTimer = setTimeout(function() {
                if (b.animating ||
                    b.holdedPage) b.advanceAfterTimeout(100);
                else {
                    var a = b.isOnPage(b.pages.length - 1);
                    b.opts.slideShowLoop && a ? b.gotoPage(0) : b.advance();
                    b.opts.slideShowLoop || !a ? b.advanceAfterTimeout(b.slideShowDelay + b.turnPageDuration) : b.stopSlideShow()
                }
            }, a)
        },
        stopSlideShow: function(a) {
            clearTimeout(this.slideShowTimer);
            this.slideShowTimer = void 0;
            this.slideShowRunning = !1;
            a || this.toggleControl("slideshow", !1)
        },
        toggleSlideShow: function() {
            this.slideShowRunning ? this.stopSlideShow() : this.startSlideShow()
        },
        findSections: function(a) {
            a &&
                (this.sectionDefinition = a);
            var b = this.sectionDefinition;
            a = [];
            if ("string" === typeof b) {
                var c = b;
                b = [];
                e(c, this.elem).each(function(a, c) {
                    b.push(["#" + c.id, e(c).html()])
                })
            }
            if (e.isArray(b)) {
                for (var d = 0, g = b.length; d < g; d++) {
                    c = b[d];
                    if ("string" === typeof c) try {
                        c = [c, e(c, this.elem).html()]
                    } catch (f) {
                        continue
                    }
                    try {
                        c[2] = this.selectorToPage(c[0])
                    } catch (f) {
                        continue
                    }
                    void 0 !== c[2] && a.push({
                        id: c[0],
                        title: c[1],
                        page: c[2]
                    })
                }
                a = a.sort(function(a, b) {
                    return a.page - b.page
                })
            }
            return this.sections = a
        },
        pageToSection: function(a) {
            for (var b =
                    this.sections, c, d = 0, e = b.length; d < e && !(b[d].page > a); d++) c = b[d];
            return c
        },
        currentSection: function() {
            return this.pageToSection(this.currentPage)
        },
        fillToc: function(a, b) {
            var c = e(a || this.opts.toc),
                d = "";
            if (0 !== c.length) {
                var g = this.sections;
                "undefined" === typeof b && (b = this.opts.tocTemplate);
                b || (d = c.is("UL, OL") ? "<li>" : "<div>", b = '<a href="${link}">${section}</a>');
                for (var f = 0, h = g.length; f < h; f++) {
                    var k = g[f];
                    k = b.replace(/\$\{link\}/g, "#" + this.id + "/" + k.id.substr(1)).replace(/\$\{section\}/g, k.title).replace(/\$\{page\}/g,
                        k.page);
                    e(k).appendTo(c).wrap(d)
                }
            }
        },
        createToc: function(a) {
            a = this.opts.toc || a || [];
            var b = this.tocContainer = e("<div class='wowbook-toc' style='display:none'>").prependTo(e(this.opts.tocParent || "body"));
            b.append("<h1><span class='wowbook-toc-header-text'>" + this.opts.tocHeader + "</span><button class='wowbook-close'>&#10005;</button></h1>");
            this.controllify({
                toc: b.find(".wowbook-close")
            });
            b = e("<ul class='wowbook-toc-items'>").appendTo(b);
            this.createTocItemList(a, b);
            b.on("click", ".wowbook-toc-item-toggle",
                function() {
                    e(this).parent().toggleClass("wowbook-collapsed")
                });
            this.setStyle(this.opts.styles || this.opts.style)
        },
        createTocItemList: function(a, b) {
            for (var c = this, d, g, f = 0, h = a.length; f < h; f++) {
                d = a[f];
                g = this.createTocItem(d[0], d[1]).appendTo(b);
                if (d[3]) g.find("a").on("click", {
                    dest: d[3]
                }, function(a) {
                    a.preventDefault();
                    c.pdfNavigateTo(a.data.dest)
                });
                if (d[2] && d[2].length) {
                    if (null === d[1] && null === d[3]) g.find("a").on("click", function(a) {
                        e(this).parent().find(".wowbook-toc-item-toggle").trigger("click");
                        a.preventDefault()
                    });
                    g.addClass("wowbook-collapsed");
                    e("<span class='wowbook-toc-item-toggle'></span>").prependTo(g);
                    g = e("<ul class='wowbook-toc-items'>").appendTo(g);
                    this.createTocItemList(d[2], g)
                }
            }
        },
        createTocItem: function(a, b) {
            var c = this.opts.tocItemTemplate || '<li class="wowbook-toc-item"><a href="${link}">${title}<span class="page">${page}</span></a></li>',
                d = "";
            e.isNumeric(b) && (d = b, b = this.pageToLocationHash(b));
            if (null === b || void 0 === b) b = "";
            c = c.replace(/\$\{link\}/g, b).replace(/\$\{title\}/g, a).replace(/\$\{page\}/g,
                d);
            return e(c)
        },
        destroyToc: function() {
            this.tocContainer && this.tocContainer.remove();
            this.tocContainer = null
        },
        showToc: function(a) {
            this.tocContainer && this.tocContainer.length || this.createToc();
            this.tocContainer.fadeIn(a)
        },
        hideToc: function(a) {
            this.tocContainer.fadeOut(a)
        },
        toggleToc: function(a) {
            e(this.tocContainer).is(":visible") ? this.hideToc(a) : this.showToc(a)
        },
        locationHashToPage: function(a, b) {
            void 0 === a && (a = window.location.hash);
            if (a == "#" + this.id + "/") return 0;
            a = a.slice(1).split("/");
            if (a[0] === this.id) {
                if (1 ===
                    a.length) return 0;
                var c = parseInt(a[1]);
                if (!isNaN(c)) return Math.max(c - 1, 0);
                c = this.selectorToPage("#" + a[1]);
                if (void 0 === c) return 0;
                isNaN(a[2]) || (c += Math.max(parseInt(a[2]) - 1, 0));
                return +c
            }
        },
        pageToLocationHash: function(a) {
            var b = "",
                c = a + 1;
            if (a = this.pageToSection(a)) b += "/" + a.id.replace("#", ""), c -= a.page;
            1 < c && (b += "/" + c);
            return "#" + this.id + (b || "/")
        },
        clearLocationHash: function() {
            (new RegExp("^#" + this.id + "/?")).exec(window.location.hash) && (window.location.hash = "")
        },
        selectorToPage: function(a) {
            a = e(a, this.elem).closest(".wowbook-page");
            if (a.length) return +a.data("pageIndex")
        },
        getLocationHash: function() {
            return window.location.hash.slice(1)
        },
        locationEndsInHash: function(a) {
            void 0 === a && (a = window.location.href);
            return a.lastIndexOf("#") == a.length - 1
        },
        zoomSetup: function() {
            this._zoomOffset = {
                dx: 0,
                dy: 0
            };
            this._cssZoom = this._cssZoom || 1;
            this.zoomLevel = 1;
            this.detectBestZoomMethod();
            this.zoomTouchSupport();
            this.toggleControl("zoomIn", this.zoomLevel == this.zoomMax);
            this.toggleControl("zoomOut", this.zoomLevel == this.zoomMin);
            this.toggleControl("zoomReset",
                1 == this.zoomLevel);
            if (this.opts.doubleClickToZoom) {
                var a = this;
                this.elem.on("dblclick", function(b) {
                    var c = a.elem.offset(),
                        d = b.pageX - c.left;
                    b = b.pageY - c.top;
                    a.zoomed ? a.zoomReset() : a.zoomIn(1, {
                        x: d,
                        y: b
                    })
                })
            }
        },
        _zoomUpdateOnRAF: function() {
            if (this._zoomDataRAF) {
                var a = e.extend({}, this._zoomDataRAF.options),
                    b = this._zoomDataRAF.options.offset;
                if (b) {
                    var c = this._zoomOffset;
                    var d = b.dx - c.dx;
                    var g = b.dy - c.dy;
                    a.offset = {
                        dx: c.dx + .2 * d,
                        dy: c.dy + .2 * g
                    }
                }
                c = this._zoomDataRAF.level || this.zoomLevel;
                c != this.zoomLevel && (c = this.zoomLevel +
                    .2 * (c - this.zoomLevel));
                a.transform = !0;
                this._zoom(c, a);
                b && 1 > Math.abs(d) && 1 > Math.abs(g) && 1 > Math.abs(this.zoomLevel - c) && (this._zoomDataRAF.callback && this._zoomDataRAF.callback.call(this), this._zoomDataRAF = null)
            }
        },
        _zoom: function(a, b) {
            b || (b = {});
            var c = void 0 != b.x ? b.x : this.pageWidth * this.currentScale,
                d = b.y || 0;
            this._zoomOffset = b.offset || this.zoomFocusOffset(a, c, d);
            this.zoomLevel = a;
            var c = b.transform || this.opts.zoomUsingTransform,
                g = a * this.currentScale,
                d = e.browser.ie7 ? 1 : c ? this._cssZoom : g,
                f = this.zoomWindow,
                h =
                this.zoomContent,
                k = e(this.zoomBoundingBox),
                p = k.outerWidth(),
                l = k.outerHeight(),
                m = f.offset();
            f.position();
            k = k[0] !== window ? k.offset() : {
                left: k.scrollLeft(),
                top: k.scrollTop()
            };
            f.css({
                width: p,
                height: l
            });
            p = k.left - m.left;
            m = k.top - m.top;
            p && (p += parseFloat(f.css("marginLeft")), f.css("marginLeft", p), h.marginLeft = p);
            m && (m += parseFloat(f.css("marginTop")), f.css("marginTop", m), h.marginTop = m);
            f = "";
            m = this._zoomOffset.dx / d;
            p = this._zoomOffset.dy / d;
            e.wowBook.support.transform && (m || p) ? f = e.wowBook.utils.translate(m, p) : h.css({
                left: m,
                top: p
            });
            c ? (g /= d, f += this.opts.useScale3d ? "scale3d(" + g + "," + g + ",1)" : "scale(" + g + ")") : (this._cssZoom = g, h.css("zoom", g), h.css("marginLeft", -h.marginLeft / d), h.css("marginTop", -h.marginTop / d));
            /* modificado */ (this._cssZoom = g, $("#canvas-wrapper").css("zoom", g), $("#canvas-wrapper").css("marginLeft", -h.marginLeft / d), $("#canvas-wrapper").css("marginTop", -h.marginTop / d));

            e.wowBook.support.transform && h.css("transform", f) && $("#canvas-wrapper").css("transform", f);

            1 !== this.zoomLevel ? this.zoomed || (h.css("marginLeft", -h.marginLeft / d),$("#canvas-wrapper").css("marginLeft", -h.marginLeft / d), $("#canvas-wrapper").css("marginTop", -h.marginTop / d), h.css("marginTop", -h.marginTop / d), c && $("#canvas-wrapper").css("transformOrigin", "0 0") && h.css("transformOrigin", "0 0"), this.elem.find("img").each(function() {
                var a = e(this);
                a.data("wowbook-draggable-before-zoom", a.attr("draggable"));
                a.attr("draggable", !1)
            })) : this.zoomFinished();
            this.zoomed = 1 !== a;
            h.toggleClass("wowbook-draggable", this.zoomed);
            this.toggleControl("zoomIn", this.zoomLevel == this.zoomMax);
            this.toggleControl("zoomOut", this.zoomLevel == this.zoomMin);
            this.toggleControl("zoomReset", 1 == this.zoomLevel)
        },
        zoom: function(a, b, c) {
            this.uncurl(!0);
            for (var d = 0, g = this.pages.length; d < g; d++)
                if (this.pages[d].data("holdedAt")) return;
            e.isPlainObject(b) && (c = b, b = c.duration);
            c || (c = {});
            if (a <= this.zoomMin && !c.resetting) return this.zoomReset(b, c);
            a > this.zoomMax &&
                (a = this.zoomMax);
            if (a !== this.zoomLevel || c.force)
                if (void 0 == b && (b = this.opts.zoomDuration), 0 == b) {
                    if (this._zoom(a, c), c.callback && c.callback.apply(this), this.pdf && this.pdfUpdateRender(), this.onZoom) this.onZoom(this)
                } else {
                    d = !this.opts.zoomUsingTransform && e.wowBook.support.transform;
                    this._zoomAnimating && (e(this).stop(), d && this.zoomContent.css("transform", ""));
                    this._zoomAnimating = this.zoomLevel;
                    var f = this,
                        g = c.x,
                        h = c.y || 0;
                    void 0 == g && (g = (this._singlePage ? this.pageWidth / 2 : this.pageWidth) * this.currentScale);
                    var k = {
                            x: g,
                            y: h,
                            offset: {
                                dx: 0,
                                dy: 0
                            }
                        },
                        l = e.extend({
                            dx: 0,
                            dy: 0
                        }, this._zoomOffset),
                        g = c.offset || this.zoomFocusOffset(a, g, h),
                        m = g.dx - l.dx,
                        q = g.dy - l.dy;
                    d && (k.transform = !0, this._isMobile && (this.leftPage() && this.leftPage().css("-webkit-transform", "translateZ(0)"), this.rightPage() && this.rightPage().css("-webkit-transform", "translateZ(0)")));
                    e(this).animate({
                        _zoomAnimating: a
                    }, {
                        duration: b,
                        easing: c.easing || this.opts.zoomEasing,
                        complete: function() {
                            f._zoomAnimating = !1;
                            f._zoom(a);
                            c.callback && c.callback.apply(this);
                            this.pdf &&
                                this.pdfUpdateRender();
                            if (f.onZoom) f.onZoom(f)
                        },
                        step: function(a, b) {
                            k.offset.dx = l.dx + m * b.pos;
                            k.offset.dy = l.dy + q * b.pos;
                            f._zoom(a, k)
                        }
                    })
                }
        },
        zoomFinished: function() {
            this.zoomWindow.css({
                overflow: "visible",
                width: this.zoomContent.width() * this.currentScale,
                height: this.zoomContent.height() * this.currentScale,
                marginLeft: 0,
                marginTop: 0
            });
            this.zoomContent.css({
                left: 0,
                top: 0,
                marginLeft: 0,
                marginTop: 0
            });
            this._zoomOffset = {
                dx: 0,
                dy: 0
            };
            this.elem.find("img").each(function() {
                var a = e(this);
                void 0 == a.data("wowbook-draggable-before-zoom") ?
                    a.removeAttr("draggable") : a.attr("draggable", a.data("wowbook-draggable-before-zoom"))
            })
        },
        zoomReset: function(a, b) {
            e.isPlainObject(a) && (b = a, a = b.duration);
            b || (b = {});
            this._zoomDataRAF = null;
            b.offset = {
                dx: 0,
                dy: 0
            };
            b.resetting = !0;
            b.force = !0;
            b.callback = function() {
                this.zoomContent.css({
                    left: 0,
                    top: 0
                });
                this.zoomed = !1
            };
            this.zoom(1, a, b)
        },
        zoomIn: function(a, b) {
            e.isPlainObject(a) && (b = a, a = void 0);
            this.zoom(this.zoomLevel + (a || this.zoomStep), b)
        },
        zoomOut: function(a, b) {
            e.isPlainObject(a) && (b = a, a = void 0);
            this.zoom(this.zoomLevel -
                (a || this.zoomStep), b)
        },
        zoomFocusOffset: function(a, b, c, d, g) {
            d || (d = this._zoomOffset || {
                dx: 0,
                dy: 0
            });
            d = e.extend({
                dx: 0,
                dy: 0
            }, d);
            var f = d.dx || 0,
                h = d.dy || 0;
            g = a / (g || this.zoomLevel);
            b -= f;
            c -= h;
            a = b * g;
            g *= c;
            d.dx = f - (a - b);
            d.dy = h - (g - c);
            return {
                dx: f - (a - b),
                dy: h - (g - c)
            }
        },
        zoomTouchSupport: function() {
            if (this.opts.touchEnabled) {
                if (e.browser.ie8mode || e.browser.ie7) return this.zoomDragSupportForIE();
                var a = this,
                    b, c, d;
                a._hammer = new Hammer(a.zoomContent[0], a.opts.touch);
                var g = a._hammer;
                g.on("panstart pinchstart", function(b) {
                    a.zoomContent.addClass("wowbook-dragging")
                });
                g.on("hammer.input", function(b) {
                    if (a.zoomContent.hasClass("wowbook-draggable") && (e(b.target).is("img") && "mousedown" == b.srcEvent.type && b.preventDefault(), b.isFinal && a.zoomContent.hasClass("wowbook-dragging"))) {
                        c = d = null;
                        a.zoomContent.removeClass("wowbook-dragging");
                        b = a.zoomLevel;
                        var f = a._zoomDataRAF,
                            g = f ? f.level : b;
                        g < a.zoomMin || g == a.zoomMin && (a._zoomOffset.dx || a._zoomOffset.dy) ? f ? f.callback = function() {
                            a.zoomReset()
                        } : a.zoomReset() : (a._zoom(b, {
                            force: !0,
                            offset: a._zoomOffset
                        }), a.pdf && a.pdfUpdateRender())
                    }
                });
                g.on("panstart panmove", function(b) {
                    a.zoomed && (b.preventDefault(), d = null, c || (c = {
                        offset: e.extend({}, a._zoomOffset),
                        pageX: b.center.x,
                        pageY: b.center.y
                    }), a._zoomDataRAF = {
                        level: a.zoomLevel,
                        options: {
                            force: !0,
                            offset: {
                                dx: c.offset.dx + (b.center.x - c.pageX),
                                dy: c.offset.dy + (b.center.y - c.pageY)
                            }
                        }
                    })
                });
                g.on("pinchmove pinchstart", function(f) {
                    f.preventDefault();
                    c = null;
                    var g = f.center.x,
                        k = f.center.y;
                    if (!d) {
                        if (a.currentFlip && !a.currentFlip.finished) return;
                        b = a.elem.offset();
                        d = {
                            level: a.zoomLevel,
                            pageX: g,
                            pageY: k,
                            x: g - (b.left -
                                e(window).scrollLeft()),
                            y: k - (b.top - e(window).scrollTop()),
                            offset: e.extend({}, a._zoomOffset),
                            useTransform: a.opts.zoomUsingTransform
                        }
                    }
                    f = d.level * f.scale;
                    f > a.zoomMax && (f = a.zoomMax);
                    var l = a.zoomFocusOffset(f, d.x, d.y, d.offset, d.level);
                    l.dx += g - d.pageX;
                    l.dy += k - d.pageY;
                    a._zoomDataRAF = {
                        level: f,
                        options: {
                            force: !0,
                            offset: l
                        }
                    }
                });
                a.opts.pinchToZoom && (g.get("pinch").set({
                    enable: !0
                }), g.get("pinch").recognizeWith("pan"));
                this.opts.doubleClickToZoom && (g.get("doubletap").set({
                    posThreshold: 50
                }), g.on("doubletap", function(b) {
                    b.preventDefault();
                    var c = a.elem.offset(),
                        d = b.center.x - c.left;
                    b = b.center.y - c.top;
                    a.zoomed ? a.zoomReset() : a.zoomIn(1, {
                        x: d,
                        y: b
                    })
                }))
            }
        },
        zoomDragSupportForIE: function() {
            var a = this,
                b, c = function(c) {
                    a._zoomDataRAF = {
                        level: a.zoomLevel,
                        options: {
                            force: !0,
                            offset: {
                                dx: b.offset.dx + (c.pageX - b.pageX),
                                dy: b.offset.dy + (c.pageY - b.pageY)
                            }
                        }
                    };
                    return !1
                },
                d = function(b) {
                    b = a.zoomLevel;
                    (b < a.zoomMin || b == a.zoomMin && (a._zoomOffset.dx || a._zoomOffset.dy)) && a.zoomReset();
                    e(document).unbind("mousemove.wowbook", c);
                    e(document).unbind("mouseup.wowbook", d)
                };
            a.zoomContent.bind("mousedown.wowbook", function(g) {
                if (a.zoomed) return b = {
                    offset: e.extend({}, a._zoomOffset),
                    pageX: g.pageX,
                    pageY: g.pageY
                }, e(document).bind("mousemove.wowbook", c).bind("mouseup.wowbook", d), !1
            })
        },
        detectBestZoomMethod: function(a, b, c) {
            if (void 0 != this.opts.zoomUsingTransform) return this.opts.zoomUsingTransform ? "transform" : "zoom";
            void 0 === a && (a = e.wowBook.support.transform);
            void 0 === c && (c = e.browser.ie8mode);
            a = e.browser.chrome || e.browser.webkit || e.browser.safari || e.browser.opera || c || !a;
            this.opts.zoomUsingTransform = !a;
            return a ? "zoom" : "transform"
        },
        setupFullscreen: function() {
            if (C) {
                var a = this,
                    b = "fullscreenerror mozfullscreenerror webkitfullscreenerror MSFullscreenError ";
                var c = "fullscreenchange mozfullscreenchange webkitfullscreenchange MSFullscreenChange ".replace(/ /g, ".wowbook ");
                b = b.replace(/ /g, ".wowbook ");
                this._fullscreenChangeHandler = function() {
                    var b = !!F();
                    e(a.opts.fullscreenElement).toggleClass("fullscreen wowbook-fullscreen-fix", b);
                    a.elem.toggleClass("fullscreen", b);
                    a.toggleControl("fullscreen", b);
                    a.elem.trigger("resize")
                };
                e(document).on(c, this._fullscreenChangeHandler);
                this._fullscreenErrorHandler = function() {
                    var b;
                    a.opts.onFullscreenError && (b = a.opts.onFullscreenError.apply(this, arguments));
                    !1 !== b && ("string" == typeof b ? alert(b) : a.opts.onFullscreenErrorMessage && alert(a.opts.onFullscreenErrorMessage))
                };
                e(document).on(b, this._fullscreenErrorHandler)
            } else e("html").addClass("no-fullscreen")
        },
        enterFullscreen: function(a) {
            a = e(a || this.opts.fullscreenElement)[0];
            C.call(a || B)
        },
        exitFullscreen: function() {
            D.call(m)
        },
        toggleFullscreen: function() {
            F() ?
                this.exitFullscreen() : this.enterFullscreen()
        },
        positionBookShadow: function() {
            var a = this.pages.length,
                b = !(!this.opts.bookShadow || !a || 3 > a && this.holdedPage);
            this.bookShadow.toggle(b);
            if (b) {
                var b = this.pageWidth,
                    c = this.holdedPageBack,
                    d = !!c && c.onRight && c.pageIndex == (this.rtl ? a - 1 : 0),
                    c = !!c && c.onLeft && c.pageIndex == (this.rtl ? 0 : a - 1),
                    a = !this.leftPage() || d,
                    c = !this.rightPage() || c,
                    d = a != c;
                if (a && c) this.bookShadow.hide();
                else {
                    var c = this.opts.zoomUsingTransform ? this.currentScale * this.zoomLevel : 1,
                        e = this.elem.is(":visible") ?
                        this.pagesContainer.position().left : parseFloat(this.pagesContainer.css("left")) || 0;
                    this.translate(this.bookShadow, (a ? b : 0) + e / c, 0);
                    this.bookShadow.css({
                        width: d ? b : 2 * b
                    })
                }
            }
        },
        playFlipSound: function() {
            if (this.flipSound) {
                var a = this.opts.onPlayFlipSound;
                e.isFunction(a) && !1 === a(this) || (this.audio || (this.audio = this.createAudioPlayer()), this.audio && this.audio.play && this.audio.play())
            }
        },
        toggleFlipSound: function(a) {
            arguments.length || (a = !this.flipSound);
            this.flipSound = a;
            this.toggleControl("flipSound", !a)
        },
        createAudioPlayer: function(a,
            b) {
            a || (a = this.opts.flipSoundPath);
            b || (b = this.opts.flipSoundFile);
            for (var c = [], d = 0, g = b.length; d < g; d++) c.push('<source src="' + a + b[d] + '">');
            return e("<audio preload>" + c.join("") + "</audio>")[0]
        },
        _untouch: function(a) {
            return a.originalEvent.touches && a.originalEvent.touches[0] || a
        },
        touchSupport: function() {
            var a = this;
            a.elem.bind("touchstart.wowbook", function(b) {
                var c = b.originalEvent.touches;
                1 < c.length || (a._touchStarted = {
                        x: c[0].pageX,
                        y: c[0].pageY,
                        timestamp: b.originalEvent.timeStamp,
                        inHandle: e(b.target).hasClass("wowbook-handle")
                    },
                    a._touchStarted.inHandle && a.pageEdgeDragStart(a._untouch(b)))
            });
            e(document).on("touchmove.wowbook", function(b) {
                if (a._touchStarted) {
                    var c = b.originalEvent.touches;
                    a._touchEnded = {
                        x: c[0].pageX,
                        y: c[0].pageY,
                        timestamp: b.originalEvent.timeStamp
                    };
                    if (a._touchStarted.inHandle) return a.pageEdgeDrag(a._untouch(b));
                    a.opts.allowDragBrowserPageZoom && 1 != document.documentElement.clientWidth / window.innerWidth || b.preventDefault()
                }
            });
            e(document).on("touchend.wowbook touchcancel.wowbook", function(b) {
                if (a._touchStarted) {
                    !a._touchEnded &&
                        e(b.target).hasClass("wowbook-handle") && (b = e(b.target).data("corner"), "r" === b && a.gotoRight(), "l" === b && a.gotoLeft());
                    b = a._touchStarted;
                    var c = a._touchEnded || a._touchStarted;
                    a._touchStarted = null;
                    a._touchEnded = null;
                    if (!a.zoomed) {
                        if (b.inHandle) return a.pageEdgeDragStop({
                            pageX: c.x
                        }), !1;
                        var d = c.x - b.x,
                            g = c.timestamp - b.timestamp;
                        if (!(20 > Math.abs(d) || g > a.opts.swipeDuration) && Math.abs(d) > Math.abs(c.y - b.y)) return 0 > d ? a.gotoRight() : a.gotoLeft(), !1
                    }
                }
            })
        },
        pageEdgeDragStart: function(a) {
            if (!this.zoomed) {
                if (this.animating &&
                    !this.curledPage || !e(a.target).hasClass("wowbook-handle")) return !1;
                var b = this,
                    c = b.origin.offset();
                this.opts.zoomUsingTransform || (c.left *= this.currentScale);
                b.elem.addClass("wowbook-unselectable");
                b.mouseDownAtLeft = (a.pageX - c.left) / this.currentScale < b.pageWidth;
                b.pageGrabbed = b.mouseDownAtLeft ? b.leftPage() : b.rightPage();
                if (!b.pageGrabbed) return !1;
                this.uncurl(!0);
                b.pageGrabbedOffset = b.pageGrabbed.offset();
                b._dragging = !0;
                this.opts.zoomUsingTransform && (b.pageGrabbedOffset.left /= this.currentScale, b.pageGrabbedOffset.top /=
                    this.currentScale);
                c = a.pageX / this.currentScale - this.pageGrabbedOffset.left;
                a = a.pageY / this.currentScale - this.pageGrabbedOffset.top;
                this.stopAnimation(!1);
                var d = b.mouseDownAtLeft ? "l" : "r";
                this.holdPage(this.pageGrabbed, c, a);
                this.flip(c, a, this.pageGrabbed, {
                    corner: d
                });
                e(document).bind("mousemove.wowbook", function(a) {
                    return b.pageEdgeDrag(a)
                }).bind("mouseup.wowbook", function(a) {
                    return b.pageEdgeDragStop(a)
                });
                return !1
            }
        },
        pageEdgeDrag: function(a) {
            if (!this._dragging) return !1;
            var b = a.pageX / this.currentScale -
                this.pageGrabbedOffset.left;
            a = a.pageY / this.currentScale - this.pageGrabbedOffset.top;
            var c = this.mouseDownAtLeft ? "l" : "r";
            this.stopAnimation(!1);
            this.flip(b, a, this.pageGrabbed, {
                corner: c,
                dragging: !0
            });
            return !1
        },
        pageEdgeDragStop: function(a) {
            if (!this._dragging) return !1;
            var b = this.origin.offset();
            this.opts.zoomUsingTransform || (b.left *= this.currentScale);
            var c = (a.pageX - b.left) / this.currentScale;
            a = (a.pageX - b.left) / this.currentScale < this.pageWidth;
            this.elem.removeClass("wowbook-unselectable");
            this._cantStopAnimation ||
                this.stopAnimation(!1);
            this._singlePage ? this.pageGrabbed.onLeft ? c > this.pageWidth / 2 ? this.pageGrabbed.pageIndex == this.currentPage ? this.rtl ? this.advance() : this.back() : (c = this.pageGrabbed.pageIndex + (this.rtl ? 1 : -1), this.gotoPage(c)) : this.releasePage(this.pageGrabbed, !0) : c < this.pageWidth + this.pageWidth / 2 ? this.pageGrabbed.pageIndex == this.currentPage ? this.rtl ? this.back() : this.advance() : (c = this.pageGrabbed.pageIndex + (this.rtl ? -1 : 1), this.gotoPage(c)) : this.releasePage(this.pageGrabbed, !0) : this.mouseDownAtLeft &&
                !a ? this.rtl ? this.advance() : this.back() : !this.mouseDownAtLeft && a ? this.rtl ? this.back() : this.advance() : this.releasePage(this.pageGrabbed, !0);
            this._dragging = !1;
            e(document).unbind("mousemove.wowbook mouseup.wowbook")
        },
        curl: function(a, b) {
            if (!(this.curledPage || this.holdedPage || this.zoomed)) {
                void 0 == a && (a = this.currentPage);
                if ("number" == typeof a || "string" == typeof a) a = this.pages[+a];
                if (a && !a.isCurled) {
                    a.isCurled = !0;
                    this.curledPage = a;
                    var c = this.pageIsOnTheLeft(a.pageIndex),
                        d = c ? 0 : this.pageWidth,
                        e = b ? this.pageHeight -
                        1 : 2;
                    this.flip({
                        from: [d, e],
                        to: [d + this.opts.curlSize * (c ? 1 : -1), e + this.opts.curlSize * (b ? -1 : 1)],
                        corner: (b ? "b" : "t") + (c ? "l" : "r"),
                        page: a,
                        duration: 400
                    })
                }
            }
        },
        uncurl: function(a, b) {
            if (this.curledPage) {
                1 == a && (b = !0, a = void 0);
                void 0 == a && (a = this.curledPage || this.currentPage);
                if ("number" == typeof a || "string" == typeof a) a = this.pages[+a];
                a.isCurled && (this.stopAnimation(!1), this.releasePage(a, !b, void 0, 400), a.isCurled = !1, this.curledPage = null)
            }
        },
        initThumbnails: function() {
            var a = this.opts;
            this.thumbnails = [];
            var b = this.thumbnailsContainer =
                e("<div class='wowbook-thumbnails'>").append("<div class='wowbook-wrapper'><a class='wowbook-back wowbook-button wowbook-control wowbook-control-back'/><div class='wowbook-clipper'><ul></ul></div><a class='wowbook-next wowbook-button wowbook-control wowbook-control-next' /></div>").css("display", "none").css("transform", "translateZ(0)").appendTo(e(a.thumbnailsParent));
            this.thumbnailsList = b.find("ul");
            this.thumbnailsClipper = b.find(".wowbook-clipper");
            a.thumbnailsContainerWidth && b.width(a.thumbnailsContainerWidth);
            a.thumbnailsContainerHeight && b.height(a.thumbnailsContainerHeight);
            var c = a.thumbnailsPosition;
            if ("left" == c || "right" == c) a.thumbnailsVertical = !0, "right" == c && b.css({
                position: "absolute",
                left: "auto",
                right: "0px"
            });
            if ("top" == c || "bottom" == c) a.thumbnailsVertical = !1, "bottom" == c && b.css({
                position: "absolute",
                top: "auto",
                bottom: "0px"
            });
            b.addClass(a.thumbnailsVertical ? "wowbook-vertical" : "wowbook-horizontal");
            b.toggleClass("wowbook-closable", this.closable);
            var d = this,
                g = a.thumbnailsVertical ? "height" : "width";
            this.thumbnailsBackButton =
                b.find(".wowbook-back.wowbook-button").click(function() {
                    d._moveThumbnailsList(d.thumbnailsClipper[g]())
                });
            this.thumbnailsNextButton = b.find(".wowbook-next.wowbook-button").click(function() {
                d._moveThumbnailsList(-d.thumbnailsClipper[g]())
            });
            this.thumbnailsClipper.css("transform", "translateZ(0)");
            0 == this.scrollBarWidth() && this.thumbnailsClipper.css("overflow", "auto")
        },
        destroyThumbnails: function() {
            this.thumbnailsContainer && this.thumbnailsContainer.remove();
            this.thumbnails = this._thumbnailsPos = this.thumbnailsContainer =
                null
        },
        scrollBarWidth: function() {
            var a = e("<div style='display: inline-block;position: absolute;left:-1000px;'>Hi!</div>").appendTo("body"),
                b = a.width();
            a.css("overflow", "scroll");
            var c = a.width();
            a.remove();
            return c - b
        },
        createThumbnails: function() {
            this.thumbnails || this.initThumbnails();
            var a = this.thumbnailConfig();
            this.thumbnails = [];
            this._customThumbnail = !1;
            for (var b = 0, c = this.pages.length; b < c; b++) {
                var d = this.createThumbnail(b, a);
                d.src && (this._customThumbnail = !0);
                this.thumbnailsList.append(d);
                this.thumbnails.push(d)
            }
            if (this.rtl)
                for (d =
                    this.thumbnailsList.children(), d.eq(0).addClass("wowbook-right").removeClass("wowbook-left"), b = 1, c = d.length; b < c; b += 2) d.eq(b).insertAfter(d.eq(b + 1));
            b = this.thumbnailsContainer;
            b.width() || b.width(2 * a.width);
            this.setStyle(this.opts.styles || this.opts.style)
        },
        thumbnailConfig: function() {
            var a = {},
                b = e('<div class="wowbook-thumbnail" style="display:none;position:absolute;line-height:0px;font-size:0px;">').prependTo(this.thumbnailsContainer),
                c = this.opts.thumbnailHeight || (2 >= b.height() ? 0 : b.height()),
                d = this.opts.thumbnailWidth ||
                b.width(),
                g = d / this.pageWidth || c / this.pageHeight || this.opts.thumbnailScale;
            b.remove();
            this.thumbnailScale = g;
            a.width = d || Math.floor(this.pageWidth * g);
            a.height = c || Math.floor(this.pageHeight * g);
            a.cloneCSS = {
                display: "block",
                left: 0,
                top: 0,
                position: "relative",
                transformOrigin: "0 0"
            };
            e.wowBook.support.transform ? a.cloneCSS.transform = "scale(" + g + ")" : a.cloneCSS.zoom = g;
            this.differentPageSizes && (b = this.opts.pageWidth ? g * this.pageWidth / this.opts.pageWidth : this.opts.pageHeight ? g * this.pageHeight / this.opts.pageHeight : this.opts.thumbnailScale,
                a.scaleInternalPage = e.wowBook.support.transform ? {
                    transform: "scale(" + b + ")"
                } : {
                    zoom: b
                });
            return a
        },
        createThumbnail: function(a, b) {
            var c = this.pages[a];
            if (c) {
                b || (b = this.thumbnailConfig());
                var d = e('<li class="wowbook-thumbnail"><div class="wowbook-overlay">').addClass(this.pageIsOnTheLeft(a) ? "wowbook-left" : "wowbook-right").css({
                        width: b.width,
                        height: b.height
                    }),
                    g = c.find(".wowbook-page-content");
                (g = g.data("thumb") || g.data("thumbnail")) ? (d.addClass("wowbook-thumbnail-custom"), d.src = g) : this.opts.thumbnailsSprite ?
                    d.css("background", 'url("' + this.opts.thumbnailsSprite + '") no-repeat 0px -' + a * b.height + "px") : this.opts.thumbnailsImages ? d.addClass("wowbook-thumbnail-custom") : (g = c.clone(), g.hasClass("wowbook-page-holded") && (this.resetPage(g), g.find(".wowbook-fold-gradient-container").remove()), g.css(b.cloneCSS), b.scaleInternalPage && !c.isCover && g.css(b.scaleInternalPage), d.prepend(g));
                var f = this;
                d.click(function() {
                    f.gotoPage(a);
                    f.hideThumbnails()
                });
                return d
            }
        },
        updateThumbnail: function(a, b) {
            if (this.thumbnails) {
                var c =
                    this.thumbnails[a];
                if (c) {
                    var d = this.createThumbnail(a, b);
                    if (d) {
                        c.width(d.width());
                        c.height(d.height());
                        if (!this.opts.thumbnailsSprite)
                            if (this.opts.thumbnailsImages || c.src) {
                                var e = c.src || this.thumbnailImageSrc(a);
                                if (c.loadedImage != e) {
                                    c.addClass("wowbook-loading");
                                    var f = new Image;
                                    f.onload = function() {
                                        c.removeClass("wowbook-loading");
                                        c.css("background-image", 'url("' + e + '")');
                                        c.loadedImage = e
                                    };
                                    f.src = e
                                }
                            } else this.pdfDoc ? this.pdfRenderThumbnail(a, c, b) : c.children(":not(.wowbook-overlay)").replaceWith(d.children(":not(.wowbook-overlay)"));
                        c.width(d.width());
                        c.height(d.height())
                    }
                }
            }
        },
        updateThumbnails: function() {
            if (this.thumbnails) {
                for (var a = this.thumbnailConfig(), b = 0, c = this.pages.length; b < c; b++) this.updateThumbnail(b, a);
                b = this.thumbnailsContainer;
                b.width() || b.width(2 * a.width);
                this.thumbnailsContainer.toggleClass("wowbook-closable", this.closable)
            } else this.createThumbnails()
        },
        thumbnailImageSrc: function(a) {
            if (!(0 > a || a > this.pages.length - 1)) return this.replaceNumberHolder(this.opts.thumbnailsImages, a)
        },
        _moveThumbnailsList: function(a, b) {
            var c =
                this.thumbnailsList.position()[this.opts.thumbnailsVertical ? "top" : "left"];
            this._setThumbnailsListPosition(c + a, b)
        },
        _setThumbnailsListPosition: function(a, b) {
            var c = this.opts.thumbnailsVertical,
                d = c ? "height" : "width",
                g = this.thumbnailsClipper[d](),
                d = -this.thumbnailsList[d]() + g;
            a < d && (a = d);
            0 < a && (a = 0);
            this.thumbnailsBackButton.toggleClass("wowbook-disabled", 0 == a || 0 < d);
            this.thumbnailsNextButton.toggleClass("wowbook-disabled", a == d || 0 < d);
            void 0 == b && (b = e.extend({}, this.opts.thumbnailsAnimOptions));
            var f = this;
            e.isNumeric(b) &&
                (b = {
                    duration: b
                });
            b.step = c ? function(a) {
                f.thumbnailsClipper.scrollTop(a)
            } : function(a) {
                f.thumbnailsClipper.scrollLeft(a)
            };
            b.complete = function() {
                (f.pdfDoc || f.opts.thumbnailsImages || f._customThumbnail) && f.updateVisibleThumbnails()
            };
            this._tb = this.thumbnailsClipper[c ? "scrollTop" : "scrollLeft"]();
            e(this).stop();
            e(this).animate({
                _tb: -a
            }, b)
        },
        updateVisibleThumbnails: function() {
            var a = this.opts.thumbnailsVertical,
                b = a ? "top" : "left",
                c = a ? "height" : "width";
            if (!this._thumbnailsPos)
                for (this._thumbnailsPos = [], a = 0; a < this.thumbnails.length; a++) this._thumbnailsPos[a] =
                    this.thumbnails[a].position()[b];
            for (var d = this._thumbnailsPos, b = -this.thumbnailsList.position()[b], c = b + this.thumbnailsClipper[c](), e, f, a = 0; a < this.thumbnails.length; a++) void 0 == e && d[a] > b && (e = a), void 0 == f && d[a] > c && (f = a);
            e || (e = 0);
            f || (f = this.thumbnails.length - 1);
            this.pdfDoc && (this.pdfCancelRenderThumbnail(0, e), this.pdfCancelRenderThumbnail(f, this.thumbnails.length));
            for (a = e - 2; a <= f; a++) this.updateThumbnail(a)
        },
        showThumbnail: function(a, b) {
            if (this.thumbnails && this.thumbnailsContainer.is(":visible")) {
                void 0 ==
                    a && (a = this.currentPage);
                0 < a && this.pageIsOnTheRight(a) && a--;
                var c = this.opts.thumbnailsVertical,
                    d = c ? "top" : "left",
                    e = c ? "height" : "width",
                    f = this.thumbnails[a],
                    h = this.thumbnailsClipper,
                    c = h[e]() / 2 - f[e]() / (c ? 2 : 1),
                    d = f.offset()[d] - h.offset()[d];
                this._moveThumbnailsList(c - d, b)
            }
        },
        showThumbnails: function(a) {
            this.thumbnails && this.thumbnails.length || this.createThumbnails();
            this.thumbnailsContainer.fadeIn(void 0 != a ? a : this.opts.thumbnailsAnimOptions);
            this.showThumbnail(void 0, 0)
        },
        hideThumbnails: function(a) {
            this.thumbnailsContainer.fadeOut(void 0 !=
                a ? a : this.opts.thumbnailsAnimOptions)
        },
        toggleThumbnails: function(a) {
            e(this.thumbnailsContainer).is(":visible") ? this.hideThumbnails(a) : this.showThumbnails(a)
        },
        setPDF: function(a) {
            this.pdf = a;
            this.pdfRenderQueue = [];
            this.pdfPageRendering = !1;
            this.opts.zoomUsingTransform = !0;
            this.zoomContent.css("zoom", 1);
            1 != this.currentScale && this.scale(this.currentScale);
            this.elem.addClass("wowbook-pdf");
            this.removePages();
            null == this.opts.pagesInMemory && (this.opts.pagesInMemory = 6);
            var b = this;
            this.pdfCSS_UNITS = 96 / 72;
            b.opts.pdfTextSelectable &&
                this.zoomContent.css("-webkit-user-select", "text");
            PDFJS.cMapPacked = this.opts.pdfcMapPacked;
            PDFJS.cMapUrl = this.opts.pdfcMapUrl;
            PDFJS.getDocument(a).then(function(a) {
                b.pdfDoc = a;
                b.currentPage = b.startPage;
                a.getPage(1).then(function(c) {
                    for (var d = 0; d < a.numPages; d++) b.insertPage("<div>", !0);
                    b.opts.pdfFind && b.pdfFindSetup();
                    b.pdfBuildLinkService();
                    b._pdfFindController && b._pdfFindController.resolveFirstPage();
                    b.opts.toc || b.pdfOutline();
                    b.updateBook(!0);
                    c = c.getViewport(1 * b.pdfCSS_UNITS * b.opts.pdfScale);
                    b.pdfHeight =
                        c.height;
                    b.pdfWidth = c.width;
                    b.pdfViewport = c;
                    b._originalHeight = null;
                    b._originalWidth = null;
                    b.setDimensions(2 * b.pdfWidth, b.pdfHeight);
                    1 != b.opts.zoomLevel && b.zoom(b.opts.zoomLevel, {
                        duration: 0
                    })
                })
            }, b.opts.onPDFLoadError || function(a) {
                e(b.pages[0] || b.elem).html(a.message);
                console && console.log && console.log(a)
            })
        },
        pdfBuildLinkService: function() {
            var a = this;
            this.pdfLinkService = {
                navigateTo: function() {
                    a.pdfNavigateTo.apply(a, arguments)
                },
                getDestinationHash: function(a) {
                    return this.getAnchorUrl("")
                },
                getAnchorUrl: function(a) {
                    return a
                }
            };
            return this._pdfLinkService
        },
        pdfResetPages: function() {
            this.updateBook(!0);
            for (var a = 0; a < this.pages.length; a++) this.unloadPage(this.pages[a]);
            a = this.opts.pdfUpdateRender;
            this.opts.pdfUpdateRender = !1;
            this._reponsiveApplied ? this.elem.trigger("resize") : this.opts.scaleToFit && this.scaleToFit();
            this.showPage(this.currentPage);
            this.opts.pdfUpdateRender = a;
            this.positionBookShadow()
        },
        pdfLoadPage: function(a, b) {
            var c = e("<canvas>");
            this.opts.pdfProgressiveRender && c.appendTo(this.pages[a].find(".wowbook-page-content"));
            this.pdfRenderPage(a, c[0], this.finishPageLoading)
        },
        pdfRenderPage: function(a, b, c, d, g) {
            if (this.pdfPageRendering) this.pdfQueueRenderPage(a, b, c, d, g);
            else {
                this.pdfPageRendering = !0;
                var f = this;
                this.pdfDoc.getPage(a + 1).then(function(h) {
                    d || (d = f.pdfFindScaleToFit());
                    var k = h.getViewport(d * f.pdfCSS_UNITS * f.opts.pdfScale),
                        l = f.pages[a],
                        m = !1,
                        q = !1;
                    if (f.opts.pdfUpdateRender && "thumb" != g) {
                        var n = f.currentScale * f.zoomLevel * f.opts.pdfPixelRatio,
                            k = l.pageWidth * n,
                            z = h.getViewport(1),
                            k = h.getViewport(k / z.width);
                        b ? e(b).addClass("wowbook-pdf-zoom-" +
                            n).css({
                            transform: "scale(" + 1 / n + ")",
                            "transform-origin": "0 0 0"
                        }) : (b = l.find(".wowbook-pdf-zoom-" + n), q = b.length, b.length || (b = e("<canvas>").addClass("wowbook-pdf-zoom-" + n), b.css({
                            transform: "scale(" + 1 / n + ")",
                            "transform-origin": "0 0 0"
                        }), m = !0), b = b[0])
                    }
                    q || (b.height = k.height, b.width = k.width);
                    n = {
                        canvasContext: b.getContext("2d"),
                        viewport: k
                    };
                    k = function() {
                        m && !e(b).parent().length && e(b).appendTo(l.find(".wowbook-page-content"));
                        c && c.call(f, f.pages[a], b);
                        if ("thumb" != g) {
                            l.find("canvas").not(b).remove();
                            if (!l.find(".wowbook-pdf-annotations").length) {
                                var d =
                                    e('<div class="wowbook-pdf-annotations">').appendTo(l.find(".wowbook-page-content"));
                                f.pdfAnnotations(h, f.pdfViewport, d)
                            }
                            f.opts.pdfTextSelectable && !l.textLayer && "thumb" != g && f.pdfTextLayer(h, a, f.pdfViewport)
                        }
                        f.pdfPageRendering = !1;
                        f.pdfDequeueRenderPage()
                    };
                    q ? k() : h.render(n).then(k, function() {})
                })
            }
        },
        pdfUpdateRender: function(a) {
            if (this.opts.pdfUpdateRender) {
                var b = this.pages[this.currentPage],
                    c = this.otherPage(this.currentPage);
                b && this.pdfRenderPage(b.pageIndex, void 0, a);
                void 0 != c && this.pdfRenderPage(c,
                    void 0, a)
            }
        },
        pdfAnnotations: function(a, b, c) {
            var d = this;
            a.getAnnotations().then(function(e) {
                b = b.clone({
                    dontFlip: !0
                });
                PDFJS.AnnotationLayer.render({
                    viewport: b,
                    div: c[0],
                    annotations: e,
                    page: a,
                    linkService: d.pdfLinkService
                });
                c.find("a").attr("target", "_blank")
            })
        },
        pdfTextLayer: function(a, b, c, d) {
            if (!d) {
                var g = this.pages[b];
                d = g.find(".wowbook-pdf-text");
                d.length || (d = e('<div class="wowbook-pdf-text">').appendTo(g.find(".wowbook-page-content")))
            }
            var f = new PDFJS.TextLayerBuilder({
                textLayerDiv: d[0],
                pageIndex: b,
                viewport: c,
                findController: this._pdfFindController
            });
            g.textLayer = f;
            a.getTextContent({
                normalizeWhitespace: !0
            }).then(function(a) {
                f.setTextContent(a);
                f.render(PDFJS.TextLayerBuilder.TEXT_LAYER_RENDER_DELAY)
            })
        },
        pdfNavigateTo: function(a) {
            var b = this;
            b.pagesRefMap || (b.pagesRefMap = {});
            var c = function(a) {
                var d = a instanceof Object ? b.pagesRefMap[a.num + " " + a.gen + " R"] : a + 1;
                d ? b.gotoPage(d - 1) : b.pdfDoc.getPageIndex(a).then(function(d) {
                    b.pagesRefMap[a.num + " " + a.gen + " R"] = d + 1;
                    c(a)
                })
            };
            ("string" == typeof a ? this.pdfDoc.getDestination(a) :
                Promise.resolve(a)).then(function(a) {
                a instanceof Array && c(a[0])
            })
        },
        pdfRenderThumbnail: function(a, b, c) {
            this.thumbnailsContainer.addClass("wowbook-pdf");
            if ((c = this.pages[a]) && !c.loading && !b.pdf && !b.rendering) {
                b.rendering = !0;
                var d = b.find("canvas");
                d.length || (d = e("<canvas>").appendTo(b.find(".wowbook-page-content")));
                d.css("transform", "");
                this.opts.pdfProgressiveRender || d.css("display", "none");
                b.find(".wowbook-page").css({
                    width: b.width(),
                    height: b.height(),
                    zoom: 1,
                    transform: "scale(1)"
                });
                this.pdfRenderPage(a,
                    d[0],
                    function(a, c) {
                        d.css("display", "block");
                        b.rendering = !1;
                        b.pdf = !0;
                        b.find(".wowbook-pdf-text, .wowbook-pdf-annotations").remove()
                    }, this.thumbnailScale * this.opts.pdfScale, "thumb")
            }
        },
        pdfCancelRenderThumbnail: function(a, b) {
            for (var c = this.pdfRenderQueue, d = 0; d < c.length;) {
                var e = c[d][0];
                e >= a && e <= b && "thumb" == c[d][4] ? (this.thumbnails[e].rendering = !1, c.splice(d, 1)) : d++
            }
        },
        pdfQueueRenderPage: function(a, b, c, d, e) {
            this.pdfRenderQueue.push([].slice.call(arguments))
        },
        pdfDequeueRenderPage: function() {
            var a = this.pdfRenderQueue.shift();
            a && this.pdfRenderPage.apply(this, a)
        },
        pdfFindScaleToFit: function() {
            var a = this.pageWidth,
                b = this.pageHeight,
                c = this.pdfWidth / this.pdfHeight;
            b * c > a && (b = a / c);
            return b / this.pdfHeight
        },
        pdfOutline: function() {
            var a = this;
            this.pdfDoc.getOutline().then(function(b) {
                function c(a) {
                    for (var b = [], d = 0, e = a.length; d < e; d++) {
                        var k = [];
                        k[0] = PDFJS.removeNullCharacters(a[d].title);
                        k[1] = a[d].url;
                        a[d].items && a[d].items.length && (k[2] = c(a[d].items));
                        k[3] = a[d].dest;
                        b.push(k)
                    }
                    return b
                }
                b && (a.opts.toc = c(b), a.opts.displayToc && a.showToc())
            })
        },
        pdfFindSetup: function() {
            this._pdfFindController || (this.opts.pdfTextSelectable = !0, this.createFindBar(), this.pdfCreateFindController(), this.setStrings())
        },
        pdfFind: function() {
            this.pdfSearch.apply(this, arguments)
        },
        pdfFindNext: function() {
            var a = Array.prototype.slice.call(arguments);
            a[3] = !1;
            a[4] = "again";
            this.pdfSearch.apply(this, a)
        },
        pdfFindPrevious: function() {
            var a = Array.prototype.slice.call(arguments);
            a[3] = !0;
            a[4] = "again";
            this.pdfSearch.apply(this, a)
        },
        createFindControl: function(a, b) {
            b || (b = this.opts);
            var c =
                this;
            e(a).addClass("wowbook-control-find").on("click.wowbook", function(a) {
                if (!e(a.target).closest(".wowbook-findbar").length) return c.toggleFindBar(), !1
            })
        },
        toggleFindBar: function(a) {
            a || (a = e(this._pdfFindBar));
            a.hasClass("wowbook-hidden") ? (a.css("opacity", 0).removeClass("wowbook-hidden"), r(a) || a.toggleClass("wowbook-up"), a.css("opacity", 1), a.find(".wowbook-find-text").focus()) : a.addClass("wowbook-hidden")
        },
        createFindBar: function() {
            var a = e('<div id="findbar" class="wowbook-findbar wowbook-hidden"><label style="display:none">Find: </label><div class="wowbook-find-text-container"><input class="wowbook-find-text" placeholder="Text to find"><span class="wowbook-find-count"></span></div><a title="Find the previous occurrence of the phrase" class="wowbook-find-previous wowbook-control-back"><i></i><span>Previous</span></a><a title="Find the next occurrence of the phrase" class="wowbook-find-next wowbook-control-next"><i></i><span>Next</span></a><label style="display:none"><input type="checkbox" class="wowbook-find-highlight-all" checked="1"> Highlight all</label><label><input type="checkbox" class="wowbook-find-match-case"> <span>Match case</span></label><a class="wowbook-close"><i></i></a></div>').appendTo(e(this.toolbars[0]).find(".wowbook-controls"));
            this._pdfFindBar = a;
            this.setFindBarEventHandlers(a);
            this.pdfFindBarMethods(a);
            return a
        },
        setFindBarEventHandlers: function(a) {
            var b = this,
                c = function(c) {
                    c = c.data || {};
                    var d = a.find(".wowbook-find-text").val(),
                        e = a.find(".wowbook-find-match-case").prop("checked"),
                        h = a.find(".wowbook-find-highlight-all").prop("checked");
                    b.pdfSearch(d, h, e, c.previous, c.next || c.previous ? "again" : "")
                };
            a.find(".wowbook-find-text").on("input", c);
            a.find(".wowbook-find-match-case, .wowbook-find-highlight-all").on("click", c);
            a.find(".wowbook-find-previous").on("click", {
                previous: !0
            }, c);
            a.find(".wowbook-find-next").on("click", {
                next: !0
            }, c);
            a.find(".wowbook-close").on("click", function() {
                b.toggleFindBar(a)
            });
            a.find(".wowbook-find-count").on("click", function() {
                a.find(".wowbook-find-text").focus()
            })
        },
        createContainer: function(a) {
            a = this.container = e("<div class='wowbook-container'>");
            var b = this.opts,
                c = e.wowBook.defaults;
            a.prependTo(this.elem.parent());
            this.containerBook = e("<div class='wowbook-book-container'>").appendTo(a).append(this.elem);
            this.containerToolbar = e("<div class='wowbook-toolbar-container'>").appendTo(a);
            b.containerWidth && a.css("width", b.containerWidth);
            b.containerHeight && a.css("height", b.containerHeight);
            b.containerBackground && a.css("background", b.containerBackground);
            b.containerPadding && this.containerBook.css("padding", b.containerPadding);
            b.thumbnailsParent == c.thumbnailsParent && (b.thumbnailsParent = a);
            b.tocParent == c.tocParent && (b.tocParent = a);
            b.fullscreenElement == c.fullscreenElement && (b.fullscreenElement = a);
            b.scaleToFit || (b.scaleToFit = this.containerBook);
            "window" != b.container && b.container != window ||
                a.addClass("wowbook-container-full");
            b.toolbar && (b.toolbarParent == c.toolbarParent && (b.toolbarParent = this.containerToolbar), this._isMobile && (b.toolbarPosition = "bottom"));
            this._isMobile && a.addClass("wowbook-mobile")
        },
        destroyContainer: function() {
            this.container && (this.container.replaceWith(this.elem), this.container = void 0)
        },
        updateContainer: function() {
            var a = this.opts;
            var b = 0;
            this.opts.responsiveToolbar && this.updateResponsiveToolbar();
            a.toolbarParent == this.containerToolbar && ((b = "top" == a.toolbarPosition) &&
                !this.containerToolbar.is(".wowbook-top") && this.containerToolbar.insertBefore(this.containerBook), !b && this.containerToolbar.is(".wowbook-top") && this.containerToolbar.insertAfter(this.containerBook), this.containerToolbar.toggleClass("wowbook-top", b), b = e(this.toolbars[0]).outerHeight(!0));
            b = this.container.height() - b;
            this.containerBook.outerHeight(b);
            if (!a.conteinerHeight) {
                this.elem.css("top", this.elem.css("top"));
                var c = this;
                setTimeout(function() {
                    c.elem.css("top", "")
                }, 0)
            }
            e.wowBook.support.transform ||
                this.elem.css("top", "auto");
            this.mobileToolbar && this.updateMobileToolbar()
        },
        lightbox: function(a) {
            this._lightboxElem = e("<div class='wowbook-lightbox'>").appendTo("body").addClass(this.opts.lightboxClass);
            this._lightboxBookContainer = e("<div class='wowbook-book-container'>").appendTo(this._lightboxElem);
            this._lightboxOverlay = this.opts.lightboxOverlay ? e("<div class='wowbook-lightbox-overlay'>").appendTo("body") : e();
            this.opts.thumbnailsParent = this._lightboxElem;
            this.opts.tocParent = this._lightboxElem;
            this.opts.fullscreenElement =
                this._lightboxElem;
            this.opts.lightboxResponsive && (this.opts.scaleToFit = this._lightboxBookContainer, this.responsive());
            this._isMobile && this._lightboxElem.addClass("wowbook-mobile");
            this.opts.lightboxBackground && this._lightboxElem.css("background", this.opts.lightboxBackground);
            this.opts.lightboxColor && this._lightboxElem.css("backgroundColor", this.opts.lightboxColor);
            this.opts.lightboxOverlayColor && this._lightboxOverlay.css("backgroundColor", this.opts.lightboxOverlayColor);
            this._lightboxElem.css({
                width: this.opts.lightboxWidth,
                height: this.opts.lightboxHeight
            });
            this.elem.appendTo(this._lightboxBookContainer);
            this.opts.toolbar && (this.opts.toolbarParent = this._lightboxElem, this._isMobile && (this.opts.toolbarPosition = "bottom"));
            var b = this;
            e(a).on("click.wowbook", function() {
                b.showLightbox()
            });
            e("<button class='wowbook-close'>\u2715</button>").appendTo(this._lightboxElem).on("click.wowbook", function() {
                b.hideLightbox()
            });
            e(document).on("keydown.wowbook.lightbox", function(a) {
                b.lightboxOn && (e(a.target).filter("input, textarea, select").length ||
                    27 === a.which && b.hideLightbox())
            })
        },
        destroyLightbox: function(a) {
            this.lightboxOn && this.hideLightbox();
            e(this._lightboxElem).remove();
            e(this._lightboxOverlay).remove()
        },
        showLightbox: function() {
            this.thumbnailsContainer && this.thumbnailsContainer.parent()[0] != this._lightboxElem && this.thumbnailsContainer.appendTo(this._lightboxElem);
            this.elem.parent()[0] != this._lightboxBookContainer && this.elem.appendTo(this._lightboxBookContainer);
            this.tocContainer && this.tocContainer.parent()[0] != this._lightboxElem && this.tocContainer.appendTo(this._lightboxElem);
            this.lightboxOn = !0;
            e("body").addClass("wowbook-lightbox-on");
            /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && e("html").addClass("wowbook-lightbox-ios");
            this._lightboxElem.fadeIn();
            this.centerLightbox();
            this.setCurrentPageControlWidth();
            this._lightboxOverlay.fadeIn();
            this.positionBookShadow();
            this.opts.responsiveToolbar && this.updateResponsiveToolbar();
            if (this.opts.toolbarParent == this._lightboxElem) {
                var a = e(this.toolbars[0]).outerHeight(!0),
                    b = "top" == this.opts.toolbarPosition ? "top" : "bottom";
                this._lightboxBookContainer.css(b, a);
                e(this.toolbars[0]).css(b, 0)
            }
            this.opts.lightboxResponsive && this.responsiveUpdater();
            this.mobileToolbar && this.updateMobileToolbar();
            this.opts.onShowLightbox && this.opts.onShowLightbox.call(this, this.pages[this.currentPage], this.currentPage)
        },
        hideLightbox: function() {
            this.lightboxOn = !1;
            this._lightboxElem.fadeOut();
            this._lightboxOverlay.fadeOut();
            e("body").removeClass("wowbook-lightbox-on");
            e("body").removeClass("wowbook-lightbox-ios");
            F() && this.exitFullscreen();
            this.opts.onHideLightbox &&
                this.opts.onHideLightbox.call(this, this.pages[this.currentPage], this.currentPage)
        },
        centerLightbox: function() {
            var a = e(window).width(),
                b = e(window).height();
            (e.browser.chrome || e.browser.webkit || e.browser.safari || e.browser.opera) && window.innerHeight > b && (b = window.innerHeight);
            this._lightboxElem.css("left", (a - this._lightboxElem.outerWidth()) / 2);
            this._lightboxElem.css("top", (b - this._lightboxElem.outerHeight()) / 2);
            this.opts.toolbarParent == this._lightboxElem && (this.opts.responsiveToolbar && this.updateResponsiveToolbar(),
                a = e(this.toolbars[0]).outerHeight(!0), this._lightboxBookContainer.css("height", this._lightboxElem.outerHeight() - a))
        },
        setStyle: function(a) {
            "string" == typeof a && (this._customCSSClass = a);
            e.isPlainObject(a) && (this._customCSSClass || (this._customCSSClass = this.generateCSSClassName()), a = this.generateCSSClass(a, this._customCSSClass), e("body").append("<style>" + a + "</style>"));
            a = this._customCSSClass;
            e(this.toolbars).addClass(a).find(".wowbook-controls").addClass(a).find(".wowbook-share-buttons").addClass(a);
            e(this.tocContainer).addClass(a);
            e(this.thumbnailsContainer).addClass(a);
            e(this.thumbnailsContainer).find(".wowbook-control").addClass(a);
            e(this.elem).find(".wowbook-page-number").addClass(a);
            e(this._lightboxElem).find(".wowbook-close").addClass(a);
            e(this._navControls).addClass(a)
        },
        generateCSSClassName: function() {
            e.wowBook.utils._cssClassCounter = (e.wowBook.utils._cssClassCounter || 0) + 1;
            return "wowbook-cs-" + e.wowBook.utils._cssClassCounter
        },
        generateCSSClass: function(a, b) {
            function c(a, b) {
                var c = [];
                c.push(a + " {");
                for (var d in b) c.push("\t" +
                    d + " : " + b[d] + " !important;");
                c.push("}");
                c = c.join("\n");
                g.push(c);
                return c
            }

            function d(a, b, d) {
                a[b] && (c(d, a[b]), delete a[b])
            }
            if (!a || !b) return "";
            a = e.extend({}, a);
            var g = [];
            a.hover && c("." + b + " .wowbook-close:hover", {
                color: a.hover.color
            });
            d(a, "hover", "." + b + " a:hover, ." + b + ".wowbook-control:hover");
            d(a, "active", "." + b + " a:active, ." + b + ".wowbook-control:active");
            d(a, "disabled", "." + b + " a.wowbook-disabled, ." + b + ".wowbook-control.wowbook-disabled");
            a.separator && (a.separator = a.separator.split(","), c("." + b + " a", {
                "border-color": a.separator[0],
                "box-shadow": "0 1px 0 " + (a.separator[1] || "transparent") + " inset"
            }), delete a.separator);
            c("." + b + ".wowbook-page-number", {
                background: "transparent"
            });
            a.pageNumber && (c("." + b + ".wowbook-page-number", {
                color: a.pageNumber
            }), delete a.pageNumber);
            c("." + b, a);
            return g.join("\n")
        },
        controllify: function(a) {
            var b = this;
            e(a.zoomIn || a.zoomin).on("click.wowbook", function() {
                b.zoomIn({});
                return !1
            });
            e(a.zoomOut || a.zoomout).on("click.wowbook", function() {
                b.zoomOut({});
                return !1
            });
            e(a.zoomReset ||
                a.zoomreset).on("click.wowbook", function() {
                b.zoomReset({});
                return !1
            });
            e(a.next).on("click.wowbook", function() {
                b.advance();
                return !1
            });
            e(a.back).on("click.wowbook", function() {
                b.back();
                return !1
            });
            e(a.first).on("click.wowbook", function() {
                b.gotoPage(0);
                return !1
            });
            e(a.last).on("click.wowbook", function() {
                b.gotoPage(b.pages.length - 1);
                return !1
            });
            e(a.left).on("click.wowbook", function() {
                b.gotoLeft();
                return !1
            });
            e(a.right).on("click.wowbook", function() {
                b.gotoRight();
                return !1
            });
            e(a.lastLeft || a.lastleft).on("click.wowbook",
                function() {
                    b.gotoLastLeft();
                    return !1
                });
            e(a.lastRight || a.lastright).on("click.wowbook", function() {
                b.gotoLastRight();
                return !1
            });
            e(a.slideShow || a.slideshow).on("click.wowbook", function() {
                b.toggleSlideShow();
                return !1
            });
            e(a.flipSound || a.flipsound).on("click.wowbook", function() {
                b.toggleFlipSound();
                return !1
            });
            e(a.thumbnails).on("click.wowbook", function() {
                b.toggleThumbnails();
                return !1
            });
            e(a.fullscreen).on("click.wowbook", function() {
                b.toggleFullscreen();
                return !1
            });
            e(a.toc).on("click.wowbook", function() {
                b.toggleToc();
                return !1
            });
            e(a.find).length && this.createFindControl(e(a.find));
            e(a.fullscreen).length && !C && e(a.fullscreen).hide();
            var c = this.opts.downloadURL || this.opts.downloadurl || this.opts.downloadUrl || this.opts.pdf;
            c && e(a.download).attr("href", c).attr("download", c);
            (c = this.opts.homeURL || this.opts.homeurl || this.opts.homeUrl) && e(a.home).attr("href", c);
            e(a.share).length && this.createShareControl(e(a.share));
            a.currentPage && this.createCurrentPageControl(a.currentPage);
            for (var c = "zoomIn zoomOut zoomReset left lastLeft right lastRight next back first last slideShow flipSound thumbnails fullscreen toc currentPage".split(" "),
                    d, g = 0, f = c.length; g < f; g++) d = c[g].toLowerCase(), this._controls[d] = e(this._controls[d]).add(a[c[g]] || a[d]);
            this.setStrings()
        },
        toggleControl: function(a, b) {
            (a = this._controls[a.toLowerCase()]) && e(a).toggleClass("wowbook-disabled", b)
        },
        createNavigationControls: function(a) {
            if (!this._isMobile || !this.opts.responsiveNavControls)
                if (a || (a = this.opts.navControls), "parent" === a && (a = this.elem.parent()), !0 === a && (a = this.containerBook || this._lightboxBookContainer), a) {
                    "string" == typeof a && (a = e(a));
                    var b = e("<button class='wowbook-nav wowbook-nav-left wowbook-disabled'><i></i></button>").appendTo(a);
                    a = e("<button class='wowbook-nav wowbook-nav-right wowbook-disabled'><i></i></button>").appendTo(a);
                    this.controllify({
                        left: b,
                        right: a
                    });
                    this._navControls = e(b).add(a);
                    this.opts.toolbarIcons && this._navControls.addClass("wowbook-" + this.opts.toolbarIcons)
                }
        },
        shareControlButtons: {
            twitter: ['<a href="http://twitter.com/share" target="_blank"><i class="fa-twitter"></i></a>', {
                text: "text",
                via: "via",
                url: "url"
            }],
            googleplus: ['<a href="https://plus.google.com/share" target="_blank" ><i class="fa-google-plus"></i></a>', {
                url: "url"
            }],
            facebook: ['<a href="http://www.facebook.com/sharer/sharer.php" target="_blank" ><i class="fa-facebook"></i></a>', {
                u: "url"
            }],
            stumbleupon: ['<a href="http://www.stumbleupon.com/submit" target="_blank"><i class="fa fa-stumbleupon"></i></a>', {
                url: "url",
                title: "title"
            }],
            reddit: ['<a href="http://reddit.com/submit" target="_blank"><i class="fa fa-reddit"></i></a>', {
                url: "url",
                title: "title"
            }],
            linkedin: ['<a href="http://www.linkedin.com/shareArticle" target="_blank"><i class="fa fa-linkedin"></i></a>', {
                url: "url",
                title: "title",
                summary: "summary",
                source: "source_url"
            }]
        },
        createShareControl: function(a, b) {
            b || (b = this.opts);
            for (var c = e.extend({}, this.shareControlButtons, b.shareButtons), d, g = b.share.split(/\s*,\s*|\s+/), f = e("<div class='wowbook-share-buttons wowbook-hidden'>"), h = 0, k = g.length; h < k; h++)(d = c[g[h]]) && e(d[0]).appendTo(f).addClass("wowbook-control wowbook-share-button").data("params", d[1]);
            var c = e(a).addClass("wowbook-control-share").append(f),
                l = this;
            c.on("click", function(a) {
                l.toggleShareButtons(a.target)
            });
            c.on("click", ".wowbook-share-button", function() {
                var a = l.opts.shareButtonCallback;
                if (!e.isFunction(a) || !1 !== a(l, this)) {
                    var a = e.extend({}, e(this).data("params")),
                        b = e.extend(e.wowBook.defaults.shareParams, l.opts.shareParams);
                    "_current_" == b.url && (b.url = window.location.href);
                    for (paramName in a) {
                        var c = a[paramName];
                        void 0 != b[c] ? a[paramName] = b[c] : delete a[paramName]
                    }
                    this.search = e.param(a);
                    window.open(this.href, "_blank");
                    l.toggleShareButtons(this);
                    return !1
                }
            })
        },
        toggleShareButtons: function(a) {
            a = e(a).closest(".wowbook-control-share");
            a = a.find(".wowbook-share-buttons");
            a.hasClass("wowbook-hidden") ? (a.css("opacity", 0).removeClass("wowbook-hidden"), r(a) || a.toggleClass("wowbook-up"), a.css("opacity", 1)) : a.addClass("wowbook-hidden")
        },
        createCurrentPageControl: function(a) {
            a = e(a);
            if (a.length) {
                a.append("<input class='wowbook-input-page' /><span class='wowbook-current-page'></span>");
                var b = this,
                    c = a.find(".wowbook-input-page"),
                    d = a.find(".wowbook-current-page");
                c.hide();
                a.on("click.wowbook", function() {
                    d.hide();
                    c.show().focus()
                });
                c.on("keypress.wowbook",
                    function(a) {
                        var b = "8,9,13,35,36,37,39".match(new RegExp(a.which));
                        !a.which || 49 <= a.which && 57 >= a.which || 48 == a.which && e(this).val() || b || a.preventDefault()
                    });
                c.on("focusin.wowbook", function() {
                    var a = b.currentPage + 1;
                    e(this).val(a).data("value", a).select()
                });
                c.on("focusout.wowbook", function() {
                    e(this).hide();
                    d.show()
                });
                c.on("change.wowbook", function() {
                    var a = e(this),
                        c = a.data("value"),
                        h = parseInt(this.value);
                    1 <= h && h <= b.pages.length ? b.gotoPage(h - 1) : a.val(c);
                    a.hide();
                    d.show()
                });
                this.setCurrentPageControlWidth(a)
            }
        },
        updateCurrentPageControl: function(a) {
            !a && this._controls && (a = this._controls.currentpage);
            if (a && a.length) {
                var b = this.currentPage + 1,
                    b = b + ("/" + this.pages.length);
                a.find(".wowbook-current-page").text(b);
                b = a.find(".wowbook-input-page");
                b.outerHeight() && b.css("top", (a.height() - b.outerHeight()) / 2)
            }
        },
        setCurrentPageControlWidth: function(a, b) {
            a || (a = this._controls && this._controls.currentpage);
            if (a && a.length) {
                2 > arguments.length && (b = this.opts.CurrentPageControlWidth);
                if (!b) {
                    var c = a.find(".wowbook-current-page"),
                        d = c.text(),
                        e = ("" + this.pages.length).replace(/./g, "0");
                    c.css("width", "auto");
                    c.css("visibility", "hidden").text(e + "/" + e);
                    b = c.width();
                    c.text(d).css("visibility", "visible").css("width", "100%");
                    c = a.find(".wowbook-input-page");
                    c.outerHeight() && c.css("top", (a.height() - c.outerHeight()) / 2)
                }
                a.width(b)
            }
        },
        setStrings: function(a) {
            function b(b, d) {
                var e = a[b];
                void 0 != e && c[d] && c[d].attr("title", e)
            }
            a || (a = this.opts.strings || {});
            a.tocHeader && (this.opts.tocHeader = a.tocHeader, this.tocContainer && this.tocContainer.find("h1 > .wowbook-toc-header-text").text(a.tocHeader));
            if (this._controls) {
                var c = this._controls;
                b("findToolTip", "find");
                if (this._pdfFindBar) {
                    var d = this._pdfFindBar;
                    d.find(".wowbook-find-text").attr("placeholder", a.findInputPlaceHolder);
                    d.find(".wowbook-find-previous").attr("title", a.findPreviousTooltip);
                    d.find(".wowbook-find-next").attr("title", a.findNextTooltip);
                    d.find(".wowbook-find-match-case").parent().find("span").text(a.findMatchCase)
                }
                b("lastLeftTooltip", "lastLeft");
                b("leftTooltip", "left");
                b("rightTooltip", "right");
                b("lastRightTooltip", "lastRight");
                b("firstTooltip", "first");
                b("backTooltip", "back");
                b("nextTooltip", "next");
                b("lastTooltip", "last");
                b("zoominTooltip", "zoomin");
                b("zoomoutTooltip", "zoomout");
                b("slideshowTooltip", "slideshow");
                b("flipsoundTooltip", "flipsound");
                b("fullscreenTooltip", "fullscreen");
                b("thumbnailsTooltip", "thumbnails");
                b("tocTooltip", "toc");
                b("downloadTooltip", "download");
                b("shareTooltip", "share")
            }
        },
        toolbarControls: {
            _default: "<a href='#'><i></i></a>",
            lastLeft: "<a><i></i></a>",
            left: "<a><i></i></a>",
            right: "<a><i></i></a>",
            lastRight: "<a><i></i></a>",
            first: "<a title='go to first page'><i></i></a>",
            back: "<a title='go back one page'><i></i></a>",
            next: "<a title='go foward one page'><i></i></a>",
            last: "<a title='go to last page'><i></i></a>",
            zoomin: "<a title='zoom in'><i></i></a>",
            zoomout: "<a title='zoom out'><i></i></a>",
            slideshow: "<a title='start slideshow'><i></i></a>",
            flipsound: "<a title='flip sound on/off'><i></i></a>",
            fullscreen: "<a title='fullscreen on/off'><i></i></a>",
            thumbnails: "<a title='thumbnails on/off'><i></i></a>",
            toc: "<a title='table of contents on/off'><i></i></a>",
            download: "<a title='download'><i></i></a>",
            home: "<a title=''><i></i></a>",
            find: "<a title=''><i></i></a>",
            share: "<a title='share'><i></i></a>",
            currentPage: "<span></span>"
        },
        createToolbar: function(a, b) {
            if (a && (b = e(b || this.opts.toolbarParent || this.elem.parent())) && b.length) {
                var c = e('<div class="wowbook-toolbar">'),
                    d = e('<div class="wowbook-controls">').appendTo(c);
                this.opts.toolbarIcons && c.addClass("wowbook-" + this.opts.toolbarIcons);
                a = a.split(/\s*,\s*/);
                for (var g = {}, f, h = 0; h < a.length; h += 1) f = this.createToolbarControl(a[h]), g[a[h]] = f, d.append(f);
                this.opts.removeStickyHoverStyle && (c.on("touchstart", ".wowbook-control", function() {
                    e(this).removeClass("remove-sticky-hover-style")
                }), c.on("touchend", ".wowbook-control", function() {
                    e(".remove-sticky-hover-style").removeClass("remove-sticky-hover-style");
                    e(this).addClass("remove-sticky-hover-style")
                }));
                b.prepend(c);
                this.controllify(g);
                this.toolbars.push(c[0]);
                this.setStyle(this.opts.styles || this.opts.style);
                return c
            }
        },
        destroyToolbars: function() {
            this.toolbars && e(this.toolbars).remove();
            this.toolbars = null
        },
        createToolbarControl: function(a) {
            this._avoidLoopControl || (this._avoidLoopControl = {});
            var b = a;
            if (e.isPlainObject(a)) {
                var c = a;
                a = e(this.toolbarControls._default);
                for (prop in c)
                    if (jQuery.isFunction(a[prop])) a[prop](c[prop]);
                    else a.attr(prop, c[prop])
            }
            if ("string" == typeof a)
                if ("<" == a.charAt(0)) a = e(a);
                else {
                    a = this.toolbarControls[a] || this.toolbarControls[a.toLowerCase()] || this.toolbarControls._default;
                    if (this._avoidLoopControl[b]) return "Error CreateToolbarControl in loop";
                    this._avoidLoopControl[b] = 1;
                    a = this.createToolbarControl(a);
                    this._avoidLoopControl[b] = 0;
                    a = e(a).addClass("wowbook-control-" + b)
                }
            a.addClass("wowbook-control");
            return a
        },
        setupMobileToolbar: function() {
            this.opts.toolbarPosition = "bottom";
            this.mobileToolbar = e(this.toolbars[0]);
            this.mobileToolbar.find(".wowbook-controls").css({
                position: "absolute",
                left: 0
            });
            this.createMobileToolbarToggle();
            this.slideDownMobileToolbar(0);
            this.updateMobileToolbar()
        },
        toolbarIsExpandable: function(a) {
            return 1.1 * a.height() < a.find(".wowbook-controls").height()
        },
        updateMobileToolbar: function() {
            this.mobileToolbarToggle.toggleClass("wowbook-collapsed", !this._mobileToolbarExpanded);
            this.mobileToolbarToggle.toggle(this.toolbarIsExpandable(this.mobileToolbar))
        },
        createMobileToolbarToggle: function() {
            this.mobileToolbarToggle = e("<a class='wowbook-control wowbook-control-toggle-toolbar'><i></i></a>").prependTo(this.mobileToolbar.find(".wowbook-controls"));
            var a = this;
            this.mobileToolbarToggle.on("click", function() {
                a.toogleMobileToolbar()
            });
            e(window).on("resize.wowbook",
                function() {
                    a.mobileToolbarToggle && a.mobileToolbar && a.updateMobileToolbar()
                })
        },
        slideUpMobileToolbar: function(a) {
            var b = this.mobileToolbar.find(".wowbook-controls"),
                c = this.mobileToolbar.children().height() - this.mobileToolbar.height();
            b.css({
                bottom: -c
            }).animate({
                bottom: 0
            }, a);
            this._mobileToolbarExpanded = !0;
            this.updateMobileToolbar()
        },
        slideDownMobileToolbar: function(a) {
            var b = this.mobileToolbar.find(".wowbook-controls"),
                c = this.mobileToolbar.children().height() - this.mobileToolbar.height();
            b.animate({
                bottom: -c
            }, {
                duration: a,
                complete: function() {
                    e(this).css("bottom", "")
                }
            });
            this._mobileToolbarExpanded = !1;
            this.updateMobileToolbar()
        },
        toogleMobileToolbar: function() {
            this._mobileToolbarExpanded ? this.slideDownMobileToolbar() : this.slideUpMobileToolbar()
        },
        setupResponsiveToolbar: function() {
            this.responsiveToolbar = e(this.toolbars[0]);
            this.createResponsiveToolbarToggle();
            this.updateResponsiveToolbar()
        },
        makeToolbarExpandable: function(a) {
            this._responsiveToolbarExpandable || (this._responsiveToolbarExpandable = !0, this._originalToolbarPosition ||
                (this._originalToolbarPosition = this.opts.toolbarPosition), this.opts.toolbarPosition = "bottom", this.responsiveToolbar.find(".wowbook-controls").css({
                    position: "absolute",
                    left: 0
                }), this.container && "hidden" != this.container.css("overflow") && (this.container.data("originalOverflow", this.container.css("overflow")), this.container.css("overflow", "hidden")), this.slideDownResponsiveToolbar(0))
        },
        unmakeToolbarExpandable: function() {
            this._responsiveToolbarExpandable && (this._responsiveToolbarExpandable = !1, this._originalToolbarPosition &&
                (this.opts.toolbarPosition = this._originalToolbarPosition), this.responsiveToolbar.find(".wowbook-controls").css({
                    bottom: "",
                    position: "",
                    left: ""
                }), this.container && this.container.data("originalOverflow") && (this.container.css("overflow", this.container.data("originalOverflow")), this.container.data("originalOverflow", "")))
        },
        updateResponsiveToolbar: function() {
            if (this.responsiveToolbar) {
                this.responsiveToolbar.toggleClass("wowbook-small", 480 > this.responsiveToolbar.width());
                var a = this.toolbarIsExpandable(this.responsiveToolbar);
                a ? this.makeToolbarExpandable() : this.unmakeToolbarExpandable();
                this.responsiveToolbar.toggleClass("wowbook-collapsable", a);
                this.responsiveToolbarToggle.toggleClass("wowbook-collapsed", !this._responsiveToolbarExpanded);
                this.responsiveToolbarToggle.toggle(a)
            }
        },
        createResponsiveToolbarToggle: function() {
            this.responsiveToolbarToggle = e("<a class='wowbook-control wowbook-control-toggle-toolbar'><i></i></a>").prependTo(this.responsiveToolbar.find(".wowbook-controls"));
            var a = this;
            this.responsiveToolbarToggle.on("click",
                function() {
                    a.toogleResponsiveToolbar()
                });
            e(window).on("resize.wowbook", function() {
                a.responsiveToolbarToggle && a.responsiveToolbar && a.updateResponsiveToolbar()
            })
        },
        slideUpResponsiveToolbar: function(a) {
            var b = this.responsiveToolbar.find(".wowbook-controls"),
                c = this.responsiveToolbar.children().height() - this.responsiveToolbar.height();
            b.css({
                bottom: -c
            }).animate({
                bottom: 0
            }, a);
            this._responsiveToolbarExpanded = !0;
            this.updateResponsiveToolbar()
        },
        slideDownResponsiveToolbar: function(a) {
            var b = this.responsiveToolbar.find(".wowbook-controls"),
                c = this.responsiveToolbar.children().height() - this.responsiveToolbar.height();
            b.animate({
                bottom: -c
            }, {
                duration: a,
                complete: function() {
                    e(this).css("bottom", "")
                }
            });
            this._responsiveToolbarExpanded = !1;
            this.updateResponsiveToolbar()
        },
        toogleResponsiveToolbar: function() {
            this._responsiveToolbarExpanded ? this.slideDownResponsiveToolbar() : this.slideUpResponsiveToolbar()
        },
        translate: function(a, b, c, d) {
            e.wowBook.support.transform && !1 !== d ? a.css("transform", e.wowBook.useTranslate3d ? "translate3d(" + (b || 0) + "px, " + (c || 0) +
                "px, 0px)" : "translate(" + (b || 0) + "px, " + (c || 0) + "px) ") : (void 0 !== b && a.css({
                left: b
            }), void 0 !== c && a.css({
                top: c
            }))
        }
    };
    e.wowBook.defaults = {
        width: 500,
        height: 300,
        pageWidth: void 0,
        pageHeight: void 0,
        coverWidth: void 0,
        coverHeight: void 0,
        startPage: 0,
        hardcovers: !1,
        hardPages: !1,
        closable: !0,
        centeredWhenClosed: !1,
        doublePages: ".double",
        container: !1,
        containerWidth: void 0,
        containerHeight: void 0,
        containerPadding: void 0,
        containerBackground: void 0,
        toolbarContainerPosition: "",
        rtl: !1,
        responsive: !1,
        scaleToFit: "",
        maxWidth: void 0,
        maxHeight: void 0,
        onResize: null,
        responsiveHandleWidth: void 0,
        singlePage: !1,
        responsiveSinglePage: !0,
        fullscreenElement: document.documentElement,
        onFullscreenError: null,
        onFullscreenErrorMessage: "Cannot enter fullscreen mode.",
        use3d: !0,
        perspective: 2E3,
        useTranslate3d: "mobile",
        useScale3d: !0,
        pageThickness: 0,
        pageEdgeColor: null,
        hardPageShadow: !0,
        style: null,
        bookShadow: !0,
        gutterShadow: !0,
        shadowThreshold: 20,
        shadows: !0,
        foldGradient: !0,
        foldGradientThreshold: 20,
        pageNumbers: !0,
        firstPageNumber: 1,
        numberedPages: !1,
        deepLinking: !0,
        updateBrowserURL: !0,
        moveToViewPort: !1,
        curl: !0,
        curlSize: 40,
        slideShow: !1,
        slideShowDelay: 1E3,
        slideShowLoop: !1,
        pauseOnHover: !0,
        touchEnabled: !0,
        swipeDuration: 200,
        mouseWheel: !1,
        handleWidth: !1,
        handleClickDuration: 300,
        turnPageDuration: 1E3,
        turnPageDurationMin: 300,
        forceBasicPage: !1,
        sections: ".wowbook-section",
        images: void 0,
        srcs: void 0,
        loadingIndicator: !0,
        pdf: null,
        pdfScale: 1,
        pdfProgressiveRender: !1,
        pdfTextSelectable: !1,
        pdfFind: !1,
        pdfUpdateRender: !0,
        onPDFLoadError: null,
        onLoadPdf: null,
        pdfPixelRatio: Math.min(window.devicePixelRatio ||
            1, 2),
        pdfcMapPacked: !0,
        pdfcMapUrl: "wow_book/cmaps/",
        zoomLevel: 1,
        zoomMax: 2,
        zoomMin: 1,
        zoomBoundingBox: window,
        zoomStep: .25,
        zoomDuration: 200,
        zoomEasing: "linear",
        onZoom: null,
        pinchToZoom: !0,
        doubleClickToZoom: !1,
        allowDragBrowserPageZoom: !1,
        flipSound: !0,
        flipSoundFile: ["page-flip.mp3", "page-flip.ogg"],
        flipSoundPath: "./wow_book/sound/",
        onPlayFlipSound: null,
        keyboardNavigation: {
            back: 37,
            advance: 39
        },
        clipBoundaries: !0,
        onShowPage: null,
        onHoldPage: null,
        onReleasePage: null,
        pagesInMemory: null,
        pagesToKeep: null,
        onLoadPage: null,
        onUnloadPage: null,
        lightbox: null,
        lightboxColor: null,
        lightboxOverlay: !1,
        lightboxOverlayColor: null,
        lightboxWidth: "100%",
        lightboxHeight: "100%",
        lightboxResponsive: !0,
        onShowLightbox: void 0,
        onHideLightbox: void 0,
        toc: void 0,
        tocParent: "body",
        tocHeader: "Table of contents",
        tocItemTemplate: void 0,
        toolbarLightboxPosition: "",
        displayToc: !1,
        controls: {},
        navControls: !1,
        responsiveNavControls: !0,
        downloadURL: null,
        homeURL: null,
        currentPageControlWidth: void 0,
        toolbar: !1,
        toolbarParent: "body",
        toolbarIcons: "fontawesome",
        responsiveToolbar: !0,
        toolbarPosition: "bottom",
        removeStickyHoverStyle: !0,
        share: "twitter, googleplus, facebook, stumbleupon, reddit, linkedin",
        shareParams: {
            url: "_current_",
            text: void 0,
            via: void 0,
            title: void 0,
            summary: void 0,
            source_url: void 0
        },
        thumbnails: !1,
        thumbnailsParent: "body",
        thumbnailScale: .2,
        thumbnailWidth: null,
        thumbnailHeight: null,
        thumbnailsPosition: null,
        thumbnailsVertical: !0,
        thumbnailsContainerWidth: null,
        thumbnailsContainerHeight: null,
        thumbnailsSprite: null,
        thumbnailsImages: null,
        thumbnailsAnimOptions: {}
    };
    e.wowBook.wowBookConstructor =
        n;
    window.raf = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(a) {
            window.setTimeout(a, 1E3 / 60)
        }
    }();
    e.browser.ie8mode = e.browser.msie && 8 == document.documentMode;
    e.browser.ie7 = e.browser.msie && (7 == e.browser.version || 7 == document.documentMode);
    var l = e.browser.msie && 9 > e.browser.version ? 1 : 0,
        z = {
            thin: 2 - l,
            medium: 4 - l,
            thick: 6 - l
        },
        m = window.document,
        B = m.documentElement,
        C = B.requestFullscreen || B.mozRequestFullScreen || B.msRequestFullscreen || B.webkitRequestFullscreen ||
        B.webkitRequestFullScreen,
        D = m.exitFullscreen || m.mozCancelFullScreen || m.msExitFullscreen || m.webkitExitFullscreen || m.webkitCancelFullScreen,
        F = function() {
            return m.fullscreenElement || m.mozFullScreenElement || m.msFullscreenElement || m.webkitFullscreenElement || m.webkitCurrentFullScreenElement
        };
    e.wowBook.utils = {
        translate: function(a, b, c) {
            return e.wowBook.useTranslate3d ? "translate3d(" + a + "px, " + b + "px, " + (c || 0) + "px) " : "translate(" + a + "px, " + b + "px) "
        },
        isMobile: function() {
            return 480 >= e(window).width() || 480 >= e(window).height()
        }
    }
})(jQuery);
(function(e) {
    function n(q) {
        var l = q || window.event,
            n = [].slice.call(arguments, 1),
            m = 0,
            r = 0;
        q = e.event.fix(l);
        q.type = "mousewheel";
        l.wheelDelta && (m = l.wheelDelta / 120);
        l.detail && (m = -l.detail / 3);
        var v = m;
        void 0 !== l.axis && l.axis === l.HORIZONTAL_AXIS && (v = 0, r = -1 * m);
        void 0 !== l.wheelDeltaY && (v = l.wheelDeltaY / 120);
        void 0 !== l.wheelDeltaX && (r = -1 * l.wheelDeltaX / 120);
        n.unshift(q, m, r, v);
        return (e.event.dispatch || e.event.handle).apply(this, n)
    }
    var v = ["DOMMouseScroll", "mousewheel"];
    if (e.event.fixHooks)
        for (var r = v.length; r;) e.event.fixHooks[v[--r]] =
            e.event.mouseHooks;
    e.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                for (var e = v.length; e;) this.addEventListener(v[--e], n, !1);
            else this.onmousewheel = n
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var e = v.length; e;) this.removeEventListener(v[--e], n, !1);
            else this.onmousewheel = null
        }
    };
    e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
})(jQuery);
(function(e) {
    function n(n) {
        if (n in v.style) return e.wowBook.support[n] = n;
        for (var l = r.length, q, m = n.charAt(0).toUpperCase() + n.substr(1); l--;)
            if (q = r[l] + m, q in v.style) return e.wowBook.support[n] = q
    }
    if (e.cssHooks) {
        var v = document.createElement("div"),
            r = ["O", "ms", "Webkit", "Moz"];
        n("transform");
        n("transformOrigin");
        n("boxSizing");
        n("zoom");
        e.wowBook.support.boxSizing && 8 > document.documentMode && (e.wowBook.support.boxSizing = !1);
        v = null;
        e.each(["transform", "transformOrigin"], function(n, l) {
            e.wowBook.support[l] &&
                e.wowBook.support[l] !== l && !e.cssHooks[l] && (e.cssHooks[l] = {
                    get: function(n, m, q) {
                        return e.css(n, e.wowBook.support[l])
                    },
                    set: function(n, m) {
                        n.style[e.wowBook.support[l]] = m
                    }
                })
        });
        e.wowBook.applyAlphaImageLoader = function(n) {
            var l, q, m = "",
                r = e("<div style='display:none'></div>").appendTo("body");
            var v = 0;
            for (q = n.length; v < q; v++) {
                var D = n[v];
                r.addClass(D);
                if (l = r.css("background-image").match(/^url\("(.*)"\)$/)) m += "." + D + "{background:none; filter : progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + l[1] + "', sizingMethod='scale'); } ",
                    r.removeClass(D)
            }
            e("body").append("<style>" + m + "</style>")
        }
    } else alert("jQuery 1.4.3+ is needed for this plugin to work")
})(jQuery);
/*! jQuery Browser - v0.1.0 - 3/23/2012
 * https://github.com/jquery/jquery-browser
 * Copyright (c) 2012 John Resig; Licensed MIT */
/*
    THIS IS A STRIPPED VERSION OF THE ORIGINAL LIBRARY!
*/
/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-csstransforms3d-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes
 */
/*!
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
/*! Hammer.JS - v2.0.4 - 2015-10-30
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2015 Jorik Tangelder;
 * Licensed under the  license */
/*
 * @name wowBook
 *
 * @author Marcio Aguiar
 * @version 1.3.4
 * @requires jQuery v1.7.0+
 *
 * Copyright 2010 Marcio Aguiar. All rights reserved.
 *
 * To use this file you must to buy a license at http://codecanyon.net/user/maguiar01/portfolio
 *
 */
/*
 jQuery Browser - v0.1.0 - 3/23/2012
 https://github.com/jquery/jquery-browser
 Copyright (c) 2012 John Resig; Licensed MIT  jQuery hashchange event - v1.3 - 7/21/2010
 http://benalman.com/projects/jquery-hashchange-plugin/

 Copyright (c) 2010 "Cowboy" Ben Alman
 Dual licensed under the MIT and GPL licenses.
 http://benalman.com/about/license/
 Hammer.JS - v2.0.4 - 2015-10-30
 http://hammerjs.github.io/

 Copyright (c) 2015 Jorik Tangelder;
 Licensed under the  license  Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 Licensed under the MIT License (LICENSE.txt).

 Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 Thanks to: Seamus Leahy for adding deltaX and deltaY

 Version: 3.0.6

 Requires: 1.2.2+
*/
(function(e) {
    if (!e.browser) {
        var n = navigator.userAgent || "";
        e.uaMatch = function(e) {
            e = e.toLowerCase();
            e = /(edge)[ \/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(e) || [];
            return {
                browser: e[1] || "",
                version: e[2] || "0"
            }
        };
        n = e.uaMatch(n);
        e.browser = {};
        n.browser && (e.browser[n.browser] = !0, e.browser.version = n.version);
        e.browser.webkit && (e.browser.safari = !0)
    }
})(jQuery);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    easeOutCubic: function(e, n, v, r, q) {
        return r * ((n = n / q - 1) * n * n + 1) + v
    },
    easeOutExpo: function(e, n, v, r, q) {
        return n == q ? v + r : r * (-Math.pow(2, -10 * n / q) + 1) + v
    }
});
window.Modernizr = function(e, n, v) {
    function r(a, b) {
        for (var c in a)
            if (B[a[c]] !== v) return "pfx" == b ? a[c] : !0;
        return !1
    }

    function q(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.substr(1),
            e = (a + " " + C.join(d + " ") + d).split(" ");
        if ("string" === typeof b || "undefined" === typeof b) b = r(e, b);
        else a: {
            e = (a + " " + D.join(d + " ") + d).split(" "), a = e;
            for (var g in a)
                if (d = b[a[g]], d !== v) {
                    b = !1 === c ? a[g] : "function" === typeof d ? d.bind(c || b) : d;
                    break a
                }
            b = !1
        }
        return b
    }
    var l = {},
        z = n.documentElement,
        m = n.createElement("modernizr"),
        B = m.style;
    e = " -webkit- -moz- -o- -ms- ".split(" ");
    var C = ["Webkit", "Moz", "O", "ms"],
        D = ["webkit", "moz", "o", "ms"],
        m = {},
        F = [],
        a = F.slice,
        b, c = function(a, b, c, d) {
            var e, g, f = n.createElement("div"),
                h = n.body,
                k = h ? h : n.createElement("body");
            if (parseInt(c, 10))
                for (; c--;) {
                    var p = n.createElement("div");
                    p.id = d ? d[c] : "modernizr" + (c + 1);
                    f.appendChild(p)
                }
            return e = ["&#173;<style>", a, "</style>"].join(""), f.id = "modernizr", (h ? f : k).innerHTML += e, k.appendChild(f), h || (k.style.background = "", z.appendChild(k)), g = b(f, a), h ? f.parentNode.removeChild(f) : k.parentNode.removeChild(k), !!g
        },
        d = {}.hasOwnProperty,
        g;
    "undefined" === typeof d || "undefined" === typeof d.call ? g = function(a, b) {
        return b in a && "undefined" === typeof a.constructor.prototype[b]
    } : g = function(a, b) {
        return d.call(a, b)
    };
    Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if ("function" != typeof c) throw new TypeError;
        var d = a.call(arguments, 1),
            e = function() {
                if (this instanceof e) {
                    var g = function() {};
                    g.prototype = c.prototype;
                    var g = new g,
                        f = c.apply(g, d.concat(a.call(arguments)));
                    return Object(f) === f ? f : g
                }
                return c.apply(b,
                    d.concat(a.call(arguments)))
            };
        return e
    });
    (function(a, b) {
        var d = a.join(""),
            e = b.length;
        c(d, function(a, b) {
            for (var c = a.childNodes, d = {}; e--;) d[c[e].id] = c[e];
            l.csstransforms3d = 9 === (d.csstransforms3d && d.csstransforms3d.offsetLeft) && 3 === d.csstransforms3d.offsetHeight
        }, e, b)
    })([, ["@media (", e.join("transform-3d),("), "modernizr){#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join("")], [, "csstransforms3d"]);
    m.csstransforms3d = function() {
        var a = !!q("perspective");
        return a && "webkitPerspective" in z.style &&
            (a = l.csstransforms3d), a
    };
    for (var f in m) g(m, f) && (b = f.toLowerCase(), l[b] = m[f](), F.push((l[b] ? "" : "no-") + b));
    B.cssText = "";
    return m = null, l._version = "2.5.3", l._prefixes = e, l._domPrefixes = D, l._cssomPrefixes = C, l.testProp = function(a) {
        return r([a])
    }, l.testAllProps = q, l.testStyles = c, l.prefixed = function(a, b, c) {
        return b ? q(a, b, c) : q(a, "pfx")
    }, l
}(this, this.document);
(function(e, n, v) {
    function r(e) {
        e = e || location.href;
        return "#" + e.replace(/^[^#]*#?(.*)$/, "$1")
    }
    "$:nomunge";
    var q = document,
        l = e.event.special,
        z = q.documentMode,
        m = "onhashchange" in n && (z === v || 7 < z);
    e.fn.hashchange = function(e) {
        return e ? this.bind("hashchange", e) : this.trigger("hashchange")
    };
    e.fn.hashchange.delay = 50;
    l.hashchange = e.extend(l.hashchange, {
        setup: function() {
            if (m) return !1;
            e(B.start)
        },
        teardown: function() {
            if (m) return !1;
            e(B.stop)
        }
    });
    var B = function() {
        function l() {
            var b = r(),
                f = d(a);
            b !== a ? (c(a = b, f), e(n).trigger("hashchange")) :
                f !== a && (location.href = location.href.replace(/#.*/, "") + f);
            B = setTimeout(l, e.fn.hashchange.delay)
        }
        var z = {},
            B, a = r(),
            b = function(a) {
                return a
            },
            c = b,
            d = b;
        z.start = function() {
            B || l()
        };
        z.stop = function() {
            B && clearTimeout(B);
            B = v
        };
        e.browser.msie && !m && function() {
            var a, f;
            z.start = function() {
                a || (f = (f = e.fn.hashchange.src) && f + r(), a = e('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                    f || c(r());
                    l()
                }).attr("src", f || "javascript:0").insertAfter("body")[0].contentWindow, q.onpropertychange = function() {
                    try {
                        "title" ===
                        event.propertyName && (a.document.title = q.title)
                    } catch (h) {}
                })
            };
            z.stop = b;
            d = function() {
                return r(a.location.href)
            };
            c = function(b, c) {
                var d = a.document,
                    g = e.fn.hashchange.domain;
                b !== c && (d.title = q.title, d.open(), g && d.write('<script>document.domain="' + g + '"\x3c/script>'), d.close(), a.location.hash = b)
            }
        }();
        return z
    }()
})(jQuery, this);
try {
    (function(e, n, v, r) {
        function q(a, b, c) {
            return setTimeout(D(a, c), b)
        }

        function l(a, b, c) {
            return Array.isArray(a) ? (z(a, c[b], c), !0) : !1
        }

        function z(a, b, c) {
            var d;
            if (a)
                if (a.forEach) a.forEach(b, c);
                else if (a.length !== r)
                for (d = 0; d < a.length;) b.call(c, a[d], d, a), d++;
            else
                for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d, a)
        }

        function m(a, b, c) {
            for (var d = Object.keys(b), e = 0; e < d.length;) {
                if (!c || c && a[d[e]] === r) a[d[e]] = b[d[e]];
                e++
            }
            return a
        }

        function B(a, b) {
            return m(a, b, !0)
        }

        function C(a, b, c) {
            b = b.prototype;
            var d = a.prototype =
                Object.create(b);
            d.constructor = a;
            d._super = b;
            c && m(d, c)
        }

        function D(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        }

        function F(a, b) {
            return "function" == typeof a ? a.apply(b ? b[0] || r : r, b) : a
        }

        function a(a, b, c) {
            z(d(b), function(b) {
                a.addEventListener(b, c, !1)
            })
        }

        function b(a, b, c) {
            z(d(b), function(b) {
                a.removeEventListener(b, c, !1)
            })
        }

        function c(a, b) {
            for (; a;) {
                if (a == b) return !0;
                a = a.parentNode
            }
            return !1
        }

        function d(a) {
            return a.trim().split(/\s+/g)
        }

        function g(a, b, c) {
            if (a.indexOf && !c) return a.indexOf(b);
            for (var d = 0; d < a.length;) {
                if (c &&
                    a[d][c] == b || !c && a[d] === b) return d;
                d++
            }
            return -1
        }

        function f(a) {
            return Array.prototype.slice.call(a, 0)
        }

        function h(a, b, c) {
            for (var d = [], e = [], f = 0; f < a.length;) {
                var A = b ? a[f][b] : a[f];
                0 > g(e, A) && d.push(a[f]);
                e[f] = A;
                f++
            }
            c && (d = b ? d.sort(function(a, c) {
                return a[b] > c[b]
            }) : d.sort());
            return d
        }

        function k(a, b) {
            for (var c, d = b[0].toUpperCase() + b.slice(1), e = 0; e < fa.length;) {
                c = (c = fa[e]) ? c + d : b;
                if (c in a) return c;
                e++
            }
            return r
        }

        function p(a) {
            a = a.ownerDocument || a;
            return a.defaultView || a.parentWindow || e
        }

        function u(a, b) {
            var c = this;
            this.manager = a;
            this.callback = b;
            this.element = a.element;
            this.target = a.options.inputTarget;
            this.domHandler = function(b) {
                F(a.options.enable, [a]) && c.handler(b)
            };
            this.init()
        }

        function t(a) {
            var b = a.options.inputClass;
            return new(b ? b : qa ? S : ra ? L : ga ? T : M)(a, w)
        }

        function w(a, b, d) {
            var e = d.pointers.length,
                g = d.changedPointers.length;
            var f = b & 1 && 0 === e - g;
            d.isFirst = !!f;
            d.isFinal = !!(b & 12 && 0 === e - g);
            f && (a.session = {});
            d.eventType = b;
            b = a.session;
            e = d.pointers;
            g = e.length;
            b.firstInput || (b.firstInput = ca(d));
            1 < g && !b.firstMultiple ?
                b.firstMultiple = ca(d) : 1 === g && (b.firstMultiple = !1);
            f = b.firstInput;
            var A = (g = b.firstMultiple) ? g.center : f.center;
            var h = d.center = da(e);
            d.timeStamp = U();
            d.deltaTime = d.timeStamp - f.timeStamp;
            d.angle = V(A, h);
            d.distance = K(A, h);
            f = d.center;
            A = b.offsetDelta || {};
            var h = b.prevDelta || {},
                k = b.prevInput || {};
            if (1 === d.eventType || 4 === k.eventType) h = b.prevDelta = {
                x: k.deltaX || 0,
                y: k.deltaY || 0
            }, A = b.offsetDelta = {
                x: f.x,
                y: f.y
            };
            d.deltaX = h.x + (f.x - A.x);
            d.deltaY = h.y + (f.y - A.y);
            d.offsetDirection = ea(d.deltaX, d.deltaY);
            A = d.deltaTime;
            f = d.deltaX /
                A || 0;
            A = d.deltaY / A || 0;
            d.overallVelocityX = f;
            d.overallVelocityY = A;
            d.overallVelocity = I(f) > I(A) ? f : A;
            g ? (f = g.pointers, f = K(e[0], e[1], N) / K(f[0], f[1], N)) : f = 1;
            d.scale = f;
            g ? (g = g.pointers, e = V(e[1], e[0], N) + V(g[1], g[0], N)) : e = 0;
            d.rotation = e;
            d.maxPointers = b.prevInput ? d.pointers.length > b.prevInput.maxPointers ? d.pointers.length : b.prevInput.maxPointers : d.pointers.length;
            A = b.lastInterval || d;
            e = d.timeStamp - A.timeStamp;
            8 != d.eventType && (25 < e || A.velocity === r) ? (f = d.deltaX - A.deltaX, A = d.deltaY - A.deltaY, h = f / e || 0, k = A / e || 0, e = h, g =
                k, h = I(h) > I(k) ? h : k, f = ea(f, A), b.lastInterval = d) : (h = A.velocity, e = A.velocityX, g = A.velocityY, f = A.direction);
            d.velocity = h;
            d.velocityX = e;
            d.velocityY = g;
            d.direction = f;
            b = a.element;
            c(d.srcEvent.target, b) && (b = d.srcEvent.target);
            d.target = b;
            a.emit("hammer.input", d);
            a.recognize(d);
            a.session.prevInput = d
        }

        function ca(a) {
            for (var b = [], c = 0; c < a.pointers.length;) b[c] = {
                clientX: J(a.pointers[c].clientX),
                clientY: J(a.pointers[c].clientY)
            }, c++;
            return {
                timeStamp: U(),
                pointers: b,
                center: da(b),
                deltaX: a.deltaX,
                deltaY: a.deltaY
            }
        }

        function da(a) {
            var b =
                a.length;
            if (1 === b) return {
                x: J(a[0].clientX),
                y: J(a[0].clientY)
            };
            for (var c = 0, d = 0, e = 0; e < b;) c += a[e].clientX, d += a[e].clientY, e++;
            return {
                x: J(c / b),
                y: J(d / b)
            }
        }

        function ea(a, b) {
            return a === b ? 1 : I(a) >= I(b) ? 0 > a ? 2 : 4 : 0 > b ? 8 : 16
        }

        function K(a, b, c) {
            c || (c = ha);
            var d = b[c[0]] - a[c[0]];
            a = b[c[1]] - a[c[1]];
            return Math.sqrt(d * d + a * a)
        }

        function V(a, b, c) {
            c || (c = ha);
            return 180 * Math.atan2(b[c[1]] - a[c[1]], b[c[0]] - a[c[0]]) / Math.PI
        }

        function M() {
            this.evEl = sa;
            this.evWin = ta;
            this.allow = !0;
            this.pressed = !1;
            u.apply(this, arguments)
        }

        function S() {
            this.evEl =
                ia;
            this.evWin = ja;
            u.apply(this, arguments);
            this.store = this.manager.session.pointerEvents = []
        }

        function ka() {
            this.evTarget = "touchstart";
            this.evWin = "touchstart touchmove touchend touchcancel";
            this.started = !1;
            u.apply(this, arguments)
        }

        function L() {
            this.evTarget = ua;
            this.targetIds = {};
            u.apply(this, arguments)
        }

        function va(a, b) {
            var d = f(a.touches),
                e = this.targetIds;
            if (b & 3 && 1 === d.length) return e[d[0].identifier] = !0, [d, d];
            var g = f(a.changedTouches),
                A = [],
                k = this.target;
            var R = d.filter(function(a) {
                return c(a.target, k)
            });
            if (1 === b)
                for (d = 0; d < R.length;) e[R[d].identifier] = !0, d++;
            for (d = 0; d < g.length;) e[g[d].identifier] && A.push(g[d]), b & 12 && delete e[g[d].identifier], d++;
            if (A.length) return [h(R.concat(A), "identifier", !0), A]
        }

        function T() {
            u.apply(this, arguments);
            var a = D(this.handler, this);
            this.touch = new L(this.manager, a);
            this.mouse = new M(this.manager, a)
        }

        function W(a, b) {
            this.manager = a;
            this.set(b)
        }

        function wa(a) {
            if (-1 < a.indexOf("none")) return "none";
            var b = -1 < a.indexOf("pan-x"),
                c = -1 < a.indexOf("pan-y");
            return b && c ? "none" : b || c ? b ? "pan-x" :
                "pan-y" : -1 < a.indexOf("manipulation") ? "manipulation" : "auto"
        }

        function G(a) {
            a = m({}, a || {});
            this.id = xa++;
            this.manager = null;
            this.options = B(a, this.defaults);
            a = this.options.enable;
            this.options.enable = a === r ? !0 : a;
            this.state = 1;
            this.simultaneous = {};
            this.requireFail = []
        }

        function la(a) {
            return a & 16 ? "cancel" : a & 8 ? "end" : a & 4 ? "move" : a & 2 ? "start" : ""
        }

        function ma(a) {
            return 16 == a ? "down" : 8 == a ? "up" : 2 == a ? "left" : 4 == a ? "right" : ""
        }

        function O(a, b) {
            var c = b.manager;
            return c ? c.get(a) : a
        }

        function E() {
            G.apply(this, arguments)
        }

        function P() {
            E.apply(this,
                arguments);
            this.pY = this.pX = null
        }

        function X() {
            E.apply(this, arguments)
        }

        function Y() {
            G.apply(this, arguments);
            this._input = this._timer = null
        }

        function Z() {
            E.apply(this, arguments)
        }

        function aa() {
            E.apply(this, arguments)
        }

        function Q() {
            G.apply(this, arguments);
            this.pCenter = this.pTime = !1;
            this._input = this._timer = null;
            this.count = 0
        }

        function H(a, b) {
            b = b || {};
            var c = b.recognizers;
            b.recognizers = c === r ? H.defaults.preset : c;
            return new ba(a, b)
        }

        function ba(a, b) {
            b = b || {};
            this.options = B(b, H.defaults);
            this.options.inputTarget = this.options.inputTarget ||
                a;
            this.handlers = {};
            this.session = {};
            this.recognizers = [];
            this.element = a;
            this.input = t(this);
            this.touchAction = new W(this, this.options.touchAction);
            na(this, !0);
            z(b.recognizers, function(a) {
                var b = this.add(new a[0](a[1]));
                a[2] && b.recognizeWith(a[2]);
                a[3] && b.requireFailure(a[3])
            }, this)
        }

        function na(a, b) {
            var c = a.element;
            c.style && z(a.options.cssProps, function(a, d) {
                c.style[k(c.style, d)] = b ? a : ""
            })
        }

        function ya(a, b) {
            var c = n.createEvent("Event");
            c.initEvent(a, !0, !0);
            c.gesture = b;
            b.target.dispatchEvent(c)
        }
        var fa = " webkit moz MS ms o".split(" "),
            za = n.createElement("div"),
            J = Math.round,
            I = Math.abs,
            U = Date.now,
            xa = 1,
            Aa = /mobile|tablet|ip(ad|hone|od)|android/i,
            ga = "ontouchstart" in e,
            qa = k(e, "PointerEvent") !== r,
            ra = ga && Aa.test(navigator.userAgent),
            ha = ["x", "y"],
            N = ["clientX", "clientY"];
        u.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && a(this.element, this.evEl, this.domHandler);
                this.evTarget && a(this.target, this.evTarget, this.domHandler);
                this.evWin && a(p(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && b(this.element, this.evEl,
                    this.domHandler);
                this.evTarget && b(this.target, this.evTarget, this.domHandler);
                this.evWin && b(p(this.element), this.evWin, this.domHandler)
            }
        };
        var Ba = {
                mousedown: 1,
                mousemove: 2,
                mouseup: 4
            },
            sa = "mousedown",
            ta = "mousemove mouseup";
        C(M, u, {
            handler: function(a) {
                var b = Ba[a.type];
                b & 1 && 0 === a.button && (this.pressed = !0);
                b & 2 && 1 !== a.which && (b = 4);
                this.pressed && this.allow && (b & 4 && (this.pressed = !1), this.callback(this.manager, b, {
                    pointers: [a],
                    changedPointers: [a],
                    pointerType: "mouse",
                    srcEvent: a
                }))
            }
        });
        var Ca = {
                pointerdown: 1,
                pointermove: 2,
                pointerup: 4,
                pointercancel: 8,
                pointerout: 8
            },
            Da = {
                2: "touch",
                3: "pen",
                4: "mouse",
                5: "kinect"
            },
            ia = "pointerdown",
            ja = "pointermove pointerup pointercancel";
        e.MSPointerEvent && (ia = "MSPointerDown", ja = "MSPointerMove MSPointerUp MSPointerCancel");
        C(S, u, {
            handler: function(a) {
                var b = this.store,
                    c = !1,
                    d = a.type.toLowerCase().replace("ms", ""),
                    d = Ca[d],
                    e = Da[a.pointerType] || a.pointerType,
                    f = "touch" == e,
                    h = g(b, a.pointerId, "pointerId");
                d & 1 && (0 === a.button || f) ? 0 > h && (b.push(a), h = b.length - 1) : d & 12 && (c = !0);
                0 > h || (b[h] = a, this.callback(this.manager,
                    d, {
                        pointers: b,
                        changedPointers: [a],
                        pointerType: e,
                        srcEvent: a
                    }), c && b.splice(h, 1))
            }
        });
        var Ea = {
            touchstart: 1,
            touchmove: 2,
            touchend: 4,
            touchcancel: 8
        };
        C(ka, u, {
            handler: function(a) {
                var b = Ea[a.type];
                1 === b && (this.started = !0);
                if (this.started) {
                    var c = f(a.touches);
                    var d = f(a.changedTouches);
                    b & 12 && (c = h(c.concat(d), "identifier", !0));
                    c = [c, d];
                    b & 12 && 0 === c[0].length - c[1].length && (this.started = !1);
                    this.callback(this.manager, b, {
                        pointers: c[0],
                        changedPointers: c[1],
                        pointerType: "touch",
                        srcEvent: a
                    })
                }
            }
        });
        var Fa = {
                touchstart: 1,
                touchmove: 2,
                touchend: 4,
                touchcancel: 8
            },
            ua = "touchstart touchmove touchend touchcancel";
        C(L, u, {
            handler: function(a) {
                var b = Fa[a.type],
                    c = va.call(this, a, b);
                c && this.callback(this.manager, b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: "touch",
                    srcEvent: a
                })
            }
        });
        C(T, u, {
            handler: function(a, b, c) {
                var d = "mouse" == c.pointerType;
                if ("touch" == c.pointerType) this.mouse.allow = !1;
                else if (d && !this.mouse.allow) return;
                b & 12 && (this.mouse.allow = !0);
                this.callback(a, b, c)
            },
            destroy: function() {
                this.touch.destroy();
                this.mouse.destroy()
            }
        });
        var oa =
            k(za.style, "touchAction"),
            pa = oa !== r;
        W.prototype = {
            set: function(a) {
                "compute" == a && (a = this.compute());
                pa && this.manager.element.style && (this.manager.element.style[oa] = a);
                this.actions = a.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var a = [];
                z(this.manager.recognizers, function(b) {
                    F(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
                });
                return wa(a.join(" "))
            },
            preventDefaults: function(a) {
                if (!pa) {
                    var b = a.srcEvent,
                        c = a.offsetDirection;
                    if (this.manager.session.prevented) b.preventDefault();
                    else {
                        var d = this.actions,
                            e = -1 < d.indexOf("none"),
                            f = -1 < d.indexOf("pan-y"),
                            d = -1 < d.indexOf("pan-x");
                        if (e) {
                            var g = 2 > a.distance,
                                h = 250 > a.deltaTime;
                            if (1 === a.pointers.length && g && h) return
                        }
                        if (!d || !f)
                            if (e || f && c & 6 || d && c & 24) return this.preventSrc(b)
                    }
                }
            },
            preventSrc: function(a) {
                this.manager.session.prevented = !0;
                a.preventDefault()
            }
        };
        G.prototype = {
            defaults: {},
            set: function(a) {
                m(this.options, a);
                this.manager && this.manager.touchAction.update();
                return this
            },
            recognizeWith: function(a) {
                if (l(a, "recognizeWith", this)) return this;
                var b = this.simultaneous;
                a = O(a, this);
                b[a.id] || (b[a.id] = a, a.recognizeWith(this));
                return this
            },
            dropRecognizeWith: function(a) {
                if (l(a, "dropRecognizeWith", this)) return this;
                a = O(a, this);
                delete this.simultaneous[a.id];
                return this
            },
            requireFailure: function(a) {
                if (l(a, "requireFailure", this)) return this;
                var b = this.requireFail;
                a = O(a, this); - 1 === g(b, a) && (b.push(a), a.requireFailure(this));
                return this
            },
            dropRequireFailure: function(a) {
                if (l(a, "dropRequireFailure", this)) return this;
                a = O(a, this);
                a = g(this.requireFail, a); - 1 < a && this.requireFail.splice(a, 1);
                return this
            },
            hasRequireFailures: function() {
                return 0 < this.requireFail.length
            },
            canRecognizeWith: function(a) {
                return !!this.simultaneous[a.id]
            },
            emit: function(a) {
                function b(b) {
                    c.manager.emit(b, a)
                }
                var c = this,
                    d = this.state;
                8 > d && b(c.options.event + la(d));
                b(c.options.event);
                a.additionalEvent && b(a.additionalEvent);
                8 <= d && b(c.options.event + la(d))
            },
            tryEmit: function(a) {
                if (this.canEmit()) return this.emit(a);
                this.state = 32
            },
            canEmit: function() {
                for (var a = 0; a < this.requireFail.length;) {
                    if (!(this.requireFail[a].state &
                            33)) return !1;
                    a++
                }
                return !0
            },
            recognize: function(a) {
                a = m({}, a);
                F(this.options.enable, [this, a]) ? (this.state & 56 && (this.state = 1), this.state = this.process(a), this.state & 30 && this.tryEmit(a)) : (this.reset(), this.state = 32)
            },
            process: function(a) {},
            getTouchAction: function() {},
            reset: function() {}
        };
        C(E, G, {
            defaults: {
                pointers: 1
            },
            attrTest: function(a) {
                var b = this.options.pointers;
                return 0 === b || a.pointers.length === b
            },
            process: function(a) {
                var b = this.state,
                    c = a.eventType,
                    d = b & 6;
                a = this.attrTest(a);
                return d && (c & 8 || !a) ? b | 16 : d || a ?
                    c & 4 ? b | 8 : b & 2 ? b | 4 : 2 : 32
            }
        });
        C(P, E, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: 30
            },
            getTouchAction: function() {
                var a = this.options.direction,
                    b = [];
                a & 6 && b.push("pan-y");
                a & 24 && b.push("pan-x");
                return b
            },
            directionTest: function(a) {
                var b = this.options,
                    c = !0,
                    d = a.distance,
                    e = a.direction,
                    f = a.deltaX,
                    g = a.deltaY;
                e & b.direction || (b.direction & 6 ? (e = 0 === f ? 1 : 0 > f ? 2 : 4, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? 1 : 0 > g ? 8 : 16, c = g != this.pY, d = Math.abs(a.deltaY)));
                a.direction = e;
                return c && d > b.threshold && e & b.direction
            },
            attrTest: function(a) {
                return E.prototype.attrTest.call(this,
                    a) && (this.state & 2 || !(this.state & 2) && this.directionTest(a))
            },
            emit: function(a) {
                this.pX = a.deltaX;
                this.pY = a.deltaY;
                var b = ma(a.direction);
                b && (a.additionalEvent = this.options.event + b);
                this._super.emit.call(this, a)
            }
        });
        C(X, E, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return ["none"]
            },
            attrTest: function(a) {
                return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & 2)
            },
            emit: function(a) {
                1 !== a.scale && (a.additionalEvent = this.options.event + (1 >
                    a.scale ? "in" : "out"));
                this._super.emit.call(this, a)
            }
        });
        C(Y, G, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 500,
                threshold: 5
            },
            getTouchAction: function() {
                return ["auto"]
            },
            process: function(a) {
                var b = this.options,
                    c = a.pointers.length === b.pointers,
                    d = a.distance < b.threshold,
                    e = a.deltaTime > b.time;
                this._input = a;
                if (!d || !c || a.eventType & 12 && !e) this.reset();
                else if (a.eventType & 1) this.reset(), this._timer = q(function() {
                    this.state = 8;
                    this.tryEmit()
                }, b.time, this);
                else if (a.eventType & 4) return 8;
                return 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(a) {
                8 === this.state && (a && a.eventType & 4 ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = U(), this.manager.emit(this.options.event, this._input)))
            }
        });
        C(Z, E, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return ["none"]
            },
            attrTest: function(a) {
                return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & 2)
            }
        });
        C(aa, E, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .65,
                direction: 30,
                pointers: 1
            },
            getTouchAction: function() {
                return P.prototype.getTouchAction.call(this)
            },
            attrTest: function(a) {
                var b = this.options.direction;
                if (b & 30) var c = a.overallVelocity;
                else b & 6 ? c = a.overallVelocityX : b & 24 && (c = a.overallVelocityY);
                return this._super.attrTest.call(this, a) && b & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && I(c) > this.options.velocity && a.eventType & 4
            },
            emit: function(a) {
                var b = ma(a.offsetDirection);
                b && this.manager.emit(this.options.event + b, a);
                this.manager.emit(this.options.event, a)
            }
        });
        C(Q, G, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 2,
                posThreshold: 10
            },
            getTouchAction: function() {
                return ["manipulation"]
            },
            process: function(a) {
                var b = this.options,
                    c = a.pointers.length === b.pointers,
                    d = a.distance < b.threshold,
                    e = a.deltaTime < b.time;
                this.reset();
                if (a.eventType & 1 && 0 === this.count) return this.failTimeout();
                if (d && e && c) {
                    if (4 != a.eventType) return this.failTimeout();
                    c = this.pTime ? a.timeStamp - this.pTime < b.interval : !0;
                    d = !this.pCenter || K(this.pCenter, a.center) < b.posThreshold;
                    this.pTime = a.timeStamp;
                    this.pCenter = a.center;
                    this.count = d && c ?
                        this.count + 1 : 1;
                    this._input = a;
                    if (0 === this.count % b.taps) return this.hasRequireFailures() ? (this._timer = q(function() {
                        this.state = 8;
                        this.tryEmit()
                    }, b.interval, this), 2) : 8
                }
                return 32
            },
            failTimeout: function() {
                this._timer = q(function() {
                    this.state = 32
                }, this.options.interval, this);
                return 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        });
        H.VERSION = "2.0.4";
        H.defaults = {
            domEvents: !1,
            touchAction: "compute",
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [Z, {
                    enable: !1
                }],
                [X, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [aa, {
                    direction: 6
                }],
                [P, {
                        direction: 6
                    },
                    ["swipe"]
                ],
                [Q],
                [Q, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [Y]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        ba.prototype = {
            set: function(a) {
                m(this.options, a);
                a.touchAction && this.touchAction.update();
                a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init());
                return this
            },
            stop: function(a) {
                this.session.stopped = a ? 2 : 1
            },
            recognize: function(a) {
                var b = this.session;
                if (!b.stopped) {
                    this.touchAction.preventDefaults(a);
                    var c = this.recognizers,
                        d = b.curRecognizer;
                    if (!d || d && d.state & 8) d = b.curRecognizer = null;
                    for (var e = 0; e < c.length;) {
                        var f = c[e];
                        2 === b.stopped || d && f != d && !f.canRecognizeWith(d) ? f.reset() : f.recognize(a);
                        !d && f.state & 14 && (d = b.curRecognizer = f);
                        e++
                    }
                }
            },
            get: function(a) {
                if (a instanceof G) return a;
                for (var b = this.recognizers, c = 0; c < b.length; c++)
                    if (b[c].options.event == a) return b[c];
                return null
            },
            add: function(a) {
                if (l(a, "add", this)) return this;
                var b = this.get(a.options.event);
                b && this.remove(b);
                this.recognizers.push(a);
                a.manager = this;
                this.touchAction.update();
                return a
            },
            remove: function(a) {
                if (l(a, "remove", this)) return this;
                var b = this.recognizers;
                a = this.get(a);
                b.splice(g(b, a), 1);
                this.touchAction.update();
                return this
            },
            on: function(a, b) {
                var c = this.handlers;
                z(d(a), function(a) {
                    c[a] = c[a] || [];
                    c[a].push(b)
                });
                return this
            },
            off: function(a, b) {
                var c = this.handlers;
                z(d(a), function(a) {
                    b ? c[a].splice(g(c[a],
                        b), 1) : delete c[a]
                });
                return this
            },
            emit: function(a, b) {
                this.options.domEvents && ya(a, b);
                var c = this.handlers[a] && this.handlers[a].slice();
                if (c && c.length) {
                    b.type = a;
                    b.preventDefault = function() {
                        b.srcEvent.preventDefault()
                    };
                    for (var d = 0; d < c.length;) c[d](b), d++
                }
            },
            destroy: function() {
                this.element && na(this, !1);
                this.handlers = {};
                this.session = {};
                this.input.destroy();
                this.element = null
            }
        };
        m(H, {
            INPUT_START: 1,
            INPUT_MOVE: 2,
            INPUT_END: 4,
            INPUT_CANCEL: 8,
            STATE_POSSIBLE: 1,
            STATE_BEGAN: 2,
            STATE_CHANGED: 4,
            STATE_ENDED: 8,
            STATE_RECOGNIZED: 8,
            STATE_CANCELLED: 16,
            STATE_FAILED: 32,
            DIRECTION_NONE: 1,
            DIRECTION_LEFT: 2,
            DIRECTION_RIGHT: 4,
            DIRECTION_UP: 8,
            DIRECTION_DOWN: 16,
            DIRECTION_HORIZONTAL: 6,
            DIRECTION_VERTICAL: 24,
            DIRECTION_ALL: 30,
            Manager: ba,
            Input: u,
            TouchAction: W,
            TouchInput: L,
            MouseInput: M,
            PointerEventInput: S,
            TouchMouseInput: T,
            SingleTouchInput: ka,
            Recognizer: G,
            AttrRecognizer: E,
            Tap: Q,
            Pan: P,
            Swipe: aa,
            Pinch: X,
            Rotate: Z,
            Press: Y,
            on: a,
            off: b,
            each: z,
            merge: B,
            extend: m,
            inherit: C,
            bindFn: D,
            prefixed: k
        });
        "function" == typeof define && define.amd ? define(function() {
                return H
            }) :
            "undefined" != typeof module && module.exports ? module.exports = H : e[v] = H
    })(window, document, "Hammer")
} catch (e) {
    console && console.log && console.log(e)
}
(function(e) {
    function n(a, b) {
        a = e(a);
        var c = this;
        this.elem = a;
        this.id = a.attr("id");
        this.pages = [];
        this.opts = b;
        this.currentPage = null;
        this.pageWidth = b.width / 2;
        this.pageHeight = b.height;
        this.startPage = b.startPage;
        this.onShowPage = b.onShowPage;
        this.slideShow = b.slideShow;
        this.slideShowDelay = b.slideShowDelay;
        this.pauseOnHover = b.pauseOnHover;
        this.turnPageDuration = b.turnPageDuration;
        this.foldGradient = b.foldGradient;
        this.foldGradientThreshold = b.foldGradientThreshold;
        this.shadows = b.shadows;
        this.shadowThreshold = b.shadowThreshold;
        this.clipBoundaries = b.clipBoundaries;
        this.zoomLevel = 1;
        this.zoomMax = Math.max(b.zoomMax, 1);
        this.zoomMin = b.zoomMin;
        this.zoomBoundingBox = b.zoomBoundingBox;
        this.zoomStep = b.zoomStep;
        this.onZoom = b.onZoom;
        this.mouseWheel = b.mouseWheel;
        this.flipSound = b.flipSound;
        this.centeredWhenClosed = b.centeredWhenClosed;
        this.sectionDefinition = b.sections;
        this.rtl = !!b.rtl;
        this.closable = b.closable;
        e.wowBook.support.filters = "filters" in a[0];
        this.opts.toolbarContainerPosition && (this.opts.toolbarPosition = this.opts.toolbarContainerPosition);
        this.opts.toolbarLightboxPosition && (this.opts.toolbarPosition = this.opts.toolbarLightboxPosition);
        (this._isMobile = e.wowBook.utils.isMobile()) && this.mobileSetup();
        a.addClass("wowbook");
        "static" === a.css("position") && a.css("position", "relative");
        var d = a.children();
        if (d.length < b.pageCount) {
            for (var g = b.pageCount - d.length; g--;) a.append("<div />");
            d = a.children()
        }
        g = this.pagesContainer = this.origin = e("<div class='wowbook-origin'></div>").css({
            position: "absolute"
        }).appendTo(a);
        c.bookShadow = e("<div class='wowbook-book-shadow'></div>").appendTo(a).css({
            top: 0,
            position: "absolute",
            display: "none",
            zIndex: 0
        });
        this._controls = {};
        this.controllify(this.opts.controls);
        this.insertPages(d, !0);
        g.append("<div class='wowbook-shadow-clipper'><div class='wowbook-shadow-container'><div class='wowbook-shadow-internal'></div></div></div>");
        c.shadowContainer = e(".wowbook-shadow-container", g);
        c.internalShadow = e(".wowbook-shadow-internal", g);
        c.shadowClipper = e(".wowbook-shadow-clipper", g).css({
            display: "none"
        });
        c.foldShadow = e("<div class='wowbook-shadow-fold'></div>").appendTo(c.shadowContainer);
        c.foldGradientContainer = e("<div class='wowbook-fold-gradient-container'></div>").appendTo(c.shadowContainer);
        c.foldGradientElem = e("<div class='wowbook-fold-gradient'></div>").appendTo(c.foldGradientContainer);
        c.hardPageDropShadow = e("<div class='wowbook-hard-page-dropshadow'></div>").css({
            display: "none"
        }).appendTo(g);
        !e.support.opacity && e.wowBook.support.filters && e.wowBook.applyAlphaImageLoader(["wowbook-fold-gradient", "wowbook-fold-gradient-flipped", "wowbook-shadow-fold", "wowbook-shadow-fold-flipped"]);
        c.shadowContainer.css("position", "relative");
        this.leftHandle = e("<div class='wowbook-handle wowbook-left'></div>").data("corner", "l").appendTo(g);
        this.rightHandle = e("<div class='wowbook-handle wowbook-right'></div>").data("corner", "r").appendTo(g);
        Modernizr.csstransforms3d && (d = e("<div>").css("transform", "perspective(1px)"), this.perspectiveUnit = "none" != d.css("transform") ? "px" : "", d = null);
        e.browser.msie && e(".wowbook-handle", a).css({
            backgroundColor: "#fff",
            opacity: "0.01"
        });
        e(".wowbook-handle", g).bind("mousedown.wowbook",
            function(a) {
                return c.pageEdgeDragStart(a)
            });
        b.curl && e(".wowbook-handle", g).hover(function(a) {
            c.curlTimer || (c.curlTimer = setTimeout(function() {
                var b = a.target == c.leftHandle[0] ? c.leftPage() : c.rightPage();
                if (b) {
                    var d = b.offset();
                    c.curl(b, a.pageY - d.top > c.pageHeight * c.currentScale * c._cssZoom / 2)
                }
            }, 120))
        }, function() {
            c.curlTimer = clearTimeout(c.curlTimer);
            c.uncurl()
        });
        var f, h;
        e(".wowbook-handle", g).on("mousedown.wowbook", function() {
            f = e.now();
            h = e(this).data("corner")
        }).on("mouseup.wowbook", function() {
            var a = e(this).data("corner");
            if (!((new Date).getTime() - f > c.opts.handleClickDuration || a != h)) {
                c._cantStopAnimation || c.stopAnimation(!1);
                if ("r" === a) c[c.rtl ? "back" : "advance"]();
                if ("l" === a) c[c.rtl ? "advance" : "back"]();
                h = ""
            }
        });
        var k = !1;
        a.hover(function(a) {
            c.pauseOnHover && (k = c.slideShowTimer, c.stopSlideShow(!0))
        }, function() {
            c.pauseOnHover && k && c.startSlideShow()
        });
        this.clipBoundaries && (this.origin.wrap("<div class='wowbook-clipper'><div class='wowbook-inner-clipper'></div></div>"), e(".wowbook-inner-clipper", a).css({
            position: "absolute",
            width: "100%",
            overflow: "hidden"
        }), this.clipper = e(".wowbook-clipper", a).css({
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            overflow: "hidden",
            zIndex: 1
        }));
        a.wrapInner("<div class='wowbook-zoomwindow'><div class='wowbook-zoomcontent'></div></div>");
        this.zoomWindow = e(".wowbook-zoomwindow", a);
        this.zoomContent = e(".wowbook-zoomcontent", a);
        e.browser.ie8mode && this.zoomContent.wrapInner("<div class='IE8-zoom-helper'style='position:relative'></div>");
        this.zoomWindow.css({
            position: "absolute",
            top: 0
        });
        this.zoomContent.css({
            position: "absolute",
            left: 0,
            top: 0
        });
        this.zoomSetup();
        this.setDimensions(2 * b.coverWidth || b.width, b.coverHeight || b.height);
        this.opts.container && this.createContainer();
        this.singlePage(b.singlePage);
        b.responsiveSinglePage && this.responsiveSinglePage();
        b.scaleToFit && (this.scaleToFit(), this.responsive());
        this.fillToc();
        g = b.useTranslate3d;
        Modernizr.csstransforms3d && g && (e.wowBook.useTranslate3d = 1 == g || "mobile" == g && e.wowBook.utils.isMobile());
        b.useScale3d = b.useScale3d && Modernizr.csstransforms3d;
        if (b.deepLinking && this.getLocationHash()) {
            try {
                var p =
                    c.selectorToPage("#" + this.getLocationHash())
            } catch (u) {}
            void 0 === p && (p = c.locationHashToPage());
            "number" === typeof p && (c.startPage = p, b.moveToViewPort && !r(c.elem) && c.elem[0].scrollIntoView())
        }
        this.flipSound && (this.audio = this.createAudioPlayer());
        this.opts.keyboardNavigation && (p = e.wowBook.defaults.keyboardNavigation, this.rtl && this.opts.keyboardNavigation == p && (this.opts.keyboardNavigation = {
            back: p.advance,
            advance: p.back
        }), e(document).on("keydown.wowbook", function(a) {
            e(a.target).filter("input, textarea, select").length ||
                c.holdedPage || (a.which === c.opts.keyboardNavigation.back && c.back(), a.which === c.opts.keyboardNavigation.advance && c.advance())
        }));
        e(window).on("hashchange.wowbook", function() {
            var a = window.location.hash;
            if (a === c.locationHashSetTo) c.locationHashSetTo = void 0;
            else {
                var d = (a = "" === a && !c.locationEndsInHash()) ? c.startPage : c.locationHashToPage();
                "number" === typeof d && (c.gotoPage(d, !a), a || !b.moveToViewPort || r(c.elem) || c.elem[0].scrollIntoView())
            }
        });
        b.forceBasicPage && (this.foldPage = this.holdHardpage = this.foldPageBasic);
        e.wowBook.support.transform || (this.foldPage = this.foldPageBasic, e.wowBook.support.filters || (this.holdHardpage = this.foldPageBasic));
        this.mouseWheel && ("zoom" == c.mouseWheel && a.bind("mousemove.wowbook mouseenter.wowbook", function(a) {
            c._mousemoveEvent = a
        }), a.mousewheel(function(a, b) {
            if (c.mouseWheel) {
                if ("zoom" === c.mouseWheel) {
                    var d = c.elem.offset(),
                        e = c._mousemoveEvent,
                        f = e.pageX - d.left,
                        d = e.pageY - d.top;
                    0 < b && c.zoomIn({
                        x: f,
                        y: d
                    });
                    0 > b && c.zoomOut({
                        x: f,
                        y: d
                    })
                } else 0 < b && c.advance(), 0 > b && c.back();
                return !1
            }
        }));
        this.opts.touchEnabled &&
            this.touchSupport();
        b.toc && (this.createToc(), b.displayToc && this.showToc());
        this.opts.thumbnails && this.createThumbnails();
        this.setupFullscreen();
        b.loadingIndicator && (b.pdf || b.images || b.srcs) && this.elem.addClass("wowbook-loading");
        this.showPage(this.startPage, !1);
        1 != this.opts.zoomLevel && this.zoom(this.opts.zoomLevel, {
            duration: 0
        });
        this.opts.pdf && this.setPDF(this.opts.pdf);
        this.opts.lightbox && this.lightbox(this.opts.lightbox);
        this.toolbars = [];
        this.opts.toolbar && (this.createToolbar(this.opts.toolbar),
            this.opts.responsiveToolbar && (this.opts.lightbox || this.opts.container) && this.setupResponsiveToolbar());
        this.setStyle(this.opts.styles || this.opts.style);
        this.opts.navControls && this.createNavigationControls();
        this.showPage(this.startPage, !1);
        this.opts.container && (this.updateContainer(), b.scaleToFit && this.scaleToFit(), b.responsiveSinglePage && this.responsiveSinglePage());
        1 != this.opts.zoomLevel && this.zoom(this.opts.zoomLevel, {
            duration: 0
        });
        this.opts.strings && this.setStrings();
        this.callRAFCallback = function() {
            c.rafCallback()
        };
        window.raf(this.callRAFCallback);
        b.slideShow && this.startSlideShow()
    }

    function v(a, b) {
        var c = Math.cos(b),
            d = Math.sin(b);
        return {
            x: c * a.x - d * a.y,
            y: d * a.x + c * a.y
        }
    }

    function r(a) {
        var b = e(window).height(),
            c = a.offset(),
            d = e(window).scrollTop();
        return c.top > d && c.top + a.height() < d + b
    }

    function q(a, b, c) {
        var d;
        var g = d = 0;
        if (!e.wowBook.support.boxSizing) {
            var f;
            g = "none" == a.css("borderTopStyle") ? 0 : z[f = a.css("borderTopWidth")] || parseFloat(f);
            d = "none" == a.css("borderRightStyle") ? 0 : z[f = a.css("borderRightWidth")] || parseFloat(f);
            var h = "none" == a.css("borderBottomStyle") ? 0 : z[f = a.css("borderBottomWidth")] || parseFloat(f);
            var k = "none" == a.css("borderLeftStyle") ? 0 : z[f = a.css("borderLeftWidth")] || parseFloat(f);
            d = parseFloat(a.css("paddingLeft")) + parseFloat(a.css("paddingRight")) + k + d;
            g = parseFloat(a.css("paddingTop")) + parseFloat(a.css("paddingBottom")) + g + h
        }
        a.css("width", b - d);
        a.css("height", c - g)
    }
    e.wowBook = function(a) {
        return e(a).data("wowBook")
    };
    e.wowBook.version = "1.3.4";
    e.wowBook.support = {};
    e.fn.wowBook = function(a) {
        if ("string" === typeof a) {
            var b =
                Array.prototype.slice.call(arguments, 1);
            if ("options" === a || "prop" === a) {
                var c = e.wowBook(this[0]),
                    d = b[0];
                return 1 < b.length ? c[d] = b[1] : c[d]
            }
            return this.each(function() {
                var c = e.wowBook(this);
                c[a].apply(c, b)
            })
        }
        var g = e.extend({}, e.wowBook.defaults, a);
        return this.each(function() {
            if (e.wowBook(this)) console.log("Error: the following element cannot be used twice by wowBook plugin: ", this);
            else {
                var a = new n(this, g);
                e(this).data("wowBook", a)
            }
        })
    };
    n.prototype = {
        destroy: function() {
            this.callRAFCallback = e.noop;
            this.curlTimer =
                clearTimeout(this.curlTimer);
            this.stopSlideShow();
            e("*").add(document).add(window).off(".wowbook");
            this.destroyThumbnails();
            this.destroyToc();
            this.destroyToolbars();
            this.destroyLightbox();
            this.destroyContainer();
            this.stopAnimation(!1);
            this.clearLocationHash();
            this.elem.empty().removeData().off()
        },
        mobileSetup: function() {
            this.opts.hardPageShadow = !1
        },
        setDimensions: function(a, b) {
            this.zoomed && this.zoomReset(0);
            this.currentScale = 1;
            var c = this.elem,
                d = this.pageWidth;
            c.css({
                height: b,
                width: a
            });
            var g = c.parent(),
                f = g.css("display");
            0 <= f.indexOf("flex") && g.css("display", "block");
            var h = c.height();
            this.pageWidth = c.width() / 2;
            this.pageHeight = h;
            this._originalHeight || (this._originalHeight = this.pageHeight);
            this._originalWidth || (this._originalWidth = 2 * this.pageWidth);
            0 <= f.indexOf("flex") && g.css("display", f);
            g = this.origin.css({
                width: "100%",
                height: h
            });
            d && this.centeredWhenClosed && (f = parseFloat(g.css("left"), 10), g.css("left", f / (d / this.pageWidth)));
            this.bookShadow.css({
                width: a,
                height: b
            });
            this.setPagesDimension();
            this.positionBookShadow();
            this.shadowClipper.css({
                width: c.width(),
                height: h
            });
            this.hardPageDropShadow.css({
                width: this.pageWidth,
                height: this.pageHeight
            });
            this.opts.handleWidth && e(".wowbook-handle", g).css("width", this.opts.handleWidth);
            this.rightHandle.css("left", a - this.rightHandle.width());
            if (this.clipBoundaries || this._restoreClipBoundaries) d = Math.ceil(Math.sqrt(this.pageWidth * this.pageWidth + this.pageHeight * this.pageHeight)), d = [this.pageHeight - d, c.width(), d, 0], this.origin.css("top", -d[0]), e(".wowbook-inner-clipper", c).css({
                width: "100%",
                height: d[2] - d[0],
                top: d[0]
            }), this.clipper.css({
                width: "100%",
                height: h
            });
            this.zoomWindow.css({
                width: 2 * this.pageWidth,
                height: h
            });
            this.zoomContent.css({
                width: 2 * this.pageWidth,
                height: h
            });
            this.corners = {
                tl: [0, 0],
                bl: [0, this.pageHeight],
                tr: [this.pageWidth, 0],
                br: [this.pageWidth, this.pageHeight],
                l: [0, 0],
                r: [this.pageWidth, 0]
            };
            this.pdf && this.pdfResetPages();
            this.thumbnails && this.updateThumbnails()
        },
        setPagesDimension: function() {
            for (var a, b, c, d = 0, g = this.pages.length; d < g; d++) page = this.pages[d], b = page.isCover ? this.pageWidth :
                this.opts.pageWidth || this.pageWidth, c = page.isCover ? this.pageHeight : this.opts.pageHeight || this.pageHeight, page.pageWidth = b, page.pageHeight = c, page.css({
                    width: b,
                    height: c,
                    left: page.onLeft ? 0 : this.pageWidth
                }), a = e(".wowbook-page-content", page), q(a, b, c), this.setPageCorners(page);
            this.opts.gutterShadow && e(".wowbook-gutter-shadow", this.elem).css("height", c)
        },
        setPageCorners: function(a) {
            var b = 0 + a.pageWidth,
                c = 0 + a.pageHeight;
            a.corners = {
                tl: [0, 0],
                bl: [0, c],
                tr: [b, 0],
                br: [b, c],
                l: [0, 0],
                r: [b, 0]
            }
        },
        setPagePosition: function(a) {
            a.left =
                a.onLeft ? this.pageWidth - a.pageWidth : this.pageWidth;
            a.top = Math.floor((this.pageHeight - a.pageHeight) / 2);
            a.css({
                left: a.left,
                top: a.top
            })
        },
        scale: function(a) {
            if (e.wowBook.support.transform) {
                this.zoomed && this.zoom(1, 0, {
                    offset: {
                        dx: 0,
                        dy: 0
                    }
                });
                this.currentScale = a;
                var b = this.zoomContent;
                this.opts.zoomUsingTransform ? (b.css({
                    transform: "scale(" + a + ")",
                    transformOrigin: "0 0"
                }), this._cssZoom = 1) : (b.css("zoom", a), this._cssZoom = a * this.zoomLevel);
                this.elem.css({
                    height: this._originalHeight * a,
                    width: this._originalWidth * a
                });
                this.zoomWindow.css({
                    height: this._originalHeight * a,
                    width: this._originalWidth * a
                });
                this.resizeHandles();
                if (this.opts.onResize) this.opts.onResize(this);
                this.pdfDoc && this.pdfUpdateRender()
            }
        },
        scaleToFit: function(a, b) {
            var c = a;
            if (!e.isNumeric(a)) {
                var d = e(a || this.opts.scaleToFit);
                if (!d.length) throw "jQuery selector passed to wowbook.resize did not matched in any DOM element.";
                c = d.width();
                b = d.height()
            }
            this.opts.maxWidth && c > this.opts.maxWidth && (c = this.opts.maxWidth);
            this.opts.maxHeight && b > this.opts.maxHeight &&
                (b = this.opts.maxHeight);
            this._singlePage && (c *= 2);
            d = this._originalWidth / this._originalHeight;
            b * d <= c || (b = c / d);
            this.scale(b / this._originalHeight)
        },
        resize: function(a, b) {
            this.setDimensions(a, b);
            if (this.opts.onResize) this.opts.onResize(this)
        },
        responsive: function() {
            var a = this;
            this._reponsiveApplied = !0;
            e(window).on("resize.wowbook", function() {
                a.responsiveUpdater()
            })
        },
        responsiveUpdater: function() {
            this.opts.container && this.updateContainer();
            this.lightboxOn && this.centerLightbox();
            this.responsiveSinglePage();
            !0 !== this.opts.container || this.opts.containerHeight ? this.scaleToFit() : (this.scaleToFit(this.containerBook.width(), 1E4), this.containerBook.css("height", "auto"), this.updateContainer());
            if ((this.opts.container || this.lightboxOn) && this._singlePage) {
                var a = this.pageWidth * this.currentScale;
                this.elem.css("left", (this.opts.scaleToFit.width() - a) / 2)
            }
        },
        responsiveSinglePage: function(a) {
            if (a = void 0 != a ? a : this.opts.responsiveSinglePage) e.isFunction(a) || (a = function(a) {
                if (!this._isMobile) return !1;
                a = e(a.opts.scaleToFit);
                var b = a.width();
                return a.height() > b
            }), this.singlePage(this.opts.singlePage || a.call(this, this))
        },
        resizeHandles: function() {
            if (this.opts.responsiveHandleWidth) {
                var a = this.opts.responsiveHandleWidth / this.currentScale;
                e(".wowbook-handle").width(a);
                this.rightHandle.css("left", 2 * this.pageWidth - a)
            }
        },
        insertPages: function(a, b) {
            for (var c = 0, d = a.length; c < d; c++) this.insertPage(a[c], !0);
            this.updateBook(b)
        },
        insertPage: function(a, b) {
            if (this.isDoublePage(a)) this.insertDoublePage(a, b);
            else {
                a = e(a).addClass("wowbook-page-content");
                var c = e("<div class='wowbook-page'></div>").css({
                    width: this.pageWidth,
                    height: this.pageHeight,
                    display: "none",
                    position: "absolute"
                }).appendTo(this.pagesContainer).append(a);
                e.wowBook.support.boxSizing && a.css(e.wowBook.support.boxSizing, "border-box");
                q(a, this.pageWidth, this.pageHeight);
                c.hardPageSetByUser = a.hasClass("wowbook-hardpage");
                this.opts.gutterShadow && this.upsertGutterShadowInPage(c);
                this.pages.push(c);
                b || this.updateBook();
                return c
            }
        },
        insertDoublePage: function(a, b) {
            if (!this._insertingDoublePage) {
                this._insertingDoublePage = !0;
                var c = e(a),
                    d = c.clone().insertAfter(c);
                var g = c.add(d);
                c.css("left", 0);
                d.css("right", "100%");
                g.css({
                    width: "200%",
                    height: "100%",
                    position: "relative"
                });
                g.css(e.wowBook.support.boxSizing + "", "border-box").wrap("<div class='wowbook-double-page'></div>");
                c.parent().data("src", c.data("src"));
                d.parent().data("src", d.data("src"));
                c.parent().data("image", c.data("image"));
                d.parent().data("image", d.data("image"));
                if (this.rtl) {
                    var f = this.insertPage(d.parent(), !0);
                    g = this.insertPage(c.parent(), !0)
                } else g = this.insertPage(c.parent(), !0), f = this.insertPage(d.parent(), !0);
                g && (g.otherHalf = f);
                f && (f.otherHalf = g);
                e.wowBook.support.boxSizing || (q(c, 2 * this.pageWidth, this.pageHeight), q(d, 2 * this.pageWidth, this.pageHeight));
                b || this.updateBook();
                this._insertingDoublePage = !1
            }
        },
        isDoublePage: function(a) {
            a = e(a);
            return a.data("double") || a.is(this.opts.doublePages)
        },
        replaceNumberHolder: function(a, b) {
            if (void 0 == a) return a;
            b += "";
            return a.replace(/\{\{([^}]+)\}\}/g, function(a, d) {
                if (b.length < d.length) {
                    var c = d.replace(/./g, "0");
                    return (c + b).slice(-c.length)
                }
                return b
            })
        },
        loadPage: function(a) {
            "number" === typeof a && (a = this.pages[a]);
            if (a && !a.loaded && !a.loading && (a.src || a.image || a.cached || this.pdfDoc)) {
                if (a.cached) return this.finishPageLoading(a, a.cache);
                a.loading = !0;
                this.opts.loadingIndicator && a.addClass("wowbook-loading");
                var b = this;
                if (a.src) a.otherHalf && a.otherHalf.loading || e.get(a.src, function(c) {
                    b.finishPageLoading(a, c);
                    a.otherHalf && b.finishPageLoading(a.otherHalf, c)
                });
                else if (a.image) {
                    var c = new Image;
                    c.onload = function() {
                        b.finishPageLoading(a, this)
                    };
                    e(c).addClass("wowbook-lazy");
                    c.src = a.image
                } else this.pdfDoc && b.pdfLoadPage(a.pageIndex)
            }
        },
        finishPageLoading: function(a, b) {
            a.loading = !1;
            a.loaded = !0;
            var c = !a.cached;
            a.cached = !1;
            this.opts.loadingIndicator && (a.removeClass("wowbook-loading"), this.elem.removeClass("wowbook-loading"));
            var d = a.find(".wowbook-page-content");
            c && (a.image || a.src) && this.isDoublePage(d.children().first()) && (d = d.children().first());
            d.append(b);
            this.upsertNumberInPage(a);
            this.opts.gutterShadow && this.upsertGutterShadowInPage(a);
            if (this.opts.onLoadPage) this.opts.onLoadPage(this,
                a, a.pageIndex);
            this.pdfDoc && !this._onLoadPDFCalled && (c = this.opts.onLoadPDF || this.opts.onLoadPdf) && (c(this, a, a.pageIndex), this._onLoadPDFCalled = !0);
            this.updateThumbnail(a.pageIndex)
        },
        unloadPage: function(a) {
            "number" === typeof a && (a = this.pages[a]);
            if (a && a.loaded && !this.isPageToKeep(a) && (a.cache = a.find(".wowbook-page-content").html(), a.find(".wowbook-page-content").empty(), a.cached = !0, a.loaded = !1, this.pdfDoc && (a.cache = void 0, a.cached = !1, a.textLayer = null), this.opts.onUnloadPage)) this.opts.onUnloadPage(this,
                a, a.pageIndex)
        },
        isPageToKeep: function(a) {
            if (!this.opts.pagesToKeep) return !1;
            var b = a.find(".wowbook-page-content");
            return a.keep || b.data("keep") || b.is(this.opts.pagesToKeep)
        },
        selectPagesToUnload: function(a) {
            void 0 == a && (a = this.currentPage);
            var b = [],
                c = this.leftPageIndex(a);
            a = this.rightPageIndex(a);
            for (var d = this.pageBelow(c), e = this.pageBelow(a), f = this.backPage(c), h = this.backPage(a), f = f && f.pageIndex, h = h && h.pageIndex, k = 0, p = this.pages.length; k < p; k++) {
                var u = this.pages[k];
                u.loaded && k != c && k != a && k != d && k != e &&
                    k != f && k != h && !this.isPageToKeep(u) && b.push(k)
            }
            return b
        },
        loadedPages: function() {
            for (var a = [], b = 0, c = this.pages.length; b < c; b++) this.pages[b].loaded && a.push(b);
            return a
        },
        unloadUnusedPages: function(a) {
            var b = this.loadedPages();
            if (!(b.length <= this.opts.pagesInMemory)) {
                b = b.length - this.opts.pagesInMemory;
                a = this.selectPagesToUnload(a);
                for (var c = 0; c < b; c++) this.unloadPage(a[c])
            }
        },
        removePages: function(a, b) {
            arguments.length || (a = 0, b = -1);
            this.holdedPage && this.releasePage(this.holdedPage);
            var c = this.pages;
            b = (b || a) +
                1 || c.length;
            var d = c.slice(a, b),
                e = c.slice(b);
            c.length = 0 > a ? c.length + a : a;
            c.push.apply(c, e);
            for (var e = 0, f = d.length; e < f; e++) d[e].remove();
            this.updateBook();
            return c.length
        },
        updateBook: function(a) {
            this.doPageNumbering();
            this.findPagesType();
            this.positionBookShadow();
            var b = this.rtl && this.closable || !this.rtl && !this.closable,
                c = this.opts.pageWidth || this.opts.pageHeight;
            this.differentPageSizes = c;
            for (var d = 0, g = this.pages.length - 1; d <= g; d++) {
                var f = this.pages[d].toggleClass("wowbook-left", b).toggleClass("wowbook-right", !b).data({
                    pageIndex: d,
                    holded: !1
                });
                f.pageIndex = d;
                f.cover = !1;
                f.insideCover = !1;
                f.isCover = c && (0 == d || d == g || this.closable && 1 == d || d == g - 1 && !this.otherPage(g));
                var h = e(".wowbook-page-content", f);
                f.src = this.replaceNumberHolder(h.data("src") || this.opts.srcs, d);
                f.image = this.replaceNumberHolder(h.data("image") || this.opts.images, d);
                1 != f.loaded && (f.loaded = !f.src && !f.image && !f.cached);
                !f.loaded && this.opts.loadingIndicator && f.addClass("wowbook-loading");
                f.onLeft = b;
                f.onRight = !b;
                b = !b;
                f.thickness = this.opts.pageThickness;
                c && (f.thickness = f.isCover ? this.opts.pageThickness : "1px")
            }
            this.setCovers();
            this.setPagesDimension();
            this.findSections();
            this.opts.currentPageControlWidth || this.setCurrentPageControlWidth();
            a ? this.updateCurrentPageControl() : this.showPage(this.currentPage)
        },
        setCovers: function() {
            function a(a) {
                if (0 == a || a == b) {
                    var d = c.pages[a];
                    if (d) {
                        var e = c.backPage(a);
                        c.otherPage(a) ? e || (d.cover = !1, d.insideCover = !0) : (d.cover = !0, d.insideCover = !1, e && !e.cover && (e.insideCover = !0))
                    }
                }
            }
            var b = this.pages.length - 1,
                c = this;
            a(0);
            a(b);
            c.insideCoverLeft = null;
            c.insideCoverRight = null;
            for (var d = 0, e = this.pages.length - 1; d <= e; d++) c.pages[d].insideCover && (c.pages[d].onLeft ? c.insideCoverLeft = c.pages[d] : c.insideCoverRight = c.pages[d])
        },
        singlePage: function(a) {
            if (void 0 !== a) {
                (this._singlePage = !!a) ? this.clipBoundaries && (this.clipBoundaries = !1, this._restoreClipBoundaries = !0, this.clipper.css("overflow", "visible"), this.clipper.children(".wowbook-inner-clipper").css("overflow", "visible"), this.container && this.container.css("overflow", "hidden")):
                    this._restoreClipBoundaries && (this._restoreClipBoundaries = !1, this.clipBoundaries = !0, this.clipper.css("overflow", "hidden"), this.clipper.children(".wowbook-inner-clipper").css("overflow", "visible"));
                a = 0;
                var b = this.pageWidth;
                if (this._singlePage) a = this.pageIsOnTheRight(this.currentPage) ? -b : 0;
                else if (this.centeredWhenClosed) {
                    a = !!this.leftPage(this.currentPage);
                    var c = this.rightPage(this.currentPage);
                    a = a && c ? 0 : a ? b / 2 : -b / 2
                }
                this.origin.css("left", a);
                this.positionBookShadow()
            }
            return this._singlePage
        },
        doPageNumbering: function() {
            var a =
                this.opts;
            if (a.pageNumbers && this.pages.length) {
                var b = a.numberedPages,
                    a = this.pages.length - 1,
                    c = this.pageIsOnTheLeft(a);
                "all" == b && (b = [0, -1]);
                b || (b = this.closable ? [2, c ? -3 : -2] : [0, -1]);
                var d = b[0],
                    b = b[1];
                0 > d && (d = a + d + 1);
                0 > d && (d = 0);
                d > this.pages.length - 1 && (d = a);
                0 > b && (b = a + b + 1);
                0 > b && (b = 0);
                b > this.pages.length - 1 && (b = a);
                for (var g = this.opts.firstPageNumber, c = 0; c < a; c++) delete this.pages[c].number;
                for (c = 0; c < d; c++) e(".wowbook-page-number", this.pages[c]).remove();
                for (c = b + 1; c < a; c++) e(".wowbook-page-number", this.pages[c]).remove();
                for (c = d; c <= b; c++) this.pages[c].number = g, a = e(".wowbook-page-number", this.pages[c]), a.length || (a = e(".wowbook-page-content", this.pages[c]), a = e('<div class="wowbook-page-number"></div>').appendTo(a)), a.html(g++)
            }
        },
        upsertNumberInPage: function(a) {
            "number" === typeof a && (a = this.pages[a]);
            if (a.number || 0 === a.number) {
                var b = e(".wowbook-page-number", a);
                b.length || (content = e(".wowbook-page-content", a), b = e('<div class="wowbook-page-number"></div>').appendTo(content));
                b.html(a.number)
            }
        },
        upsertGutterShadowInPage: function(a) {
            "number" ===
            typeof a && (a = this.pages[a]);
            a.find(".wowbook-gutter-shadow").length || (a = a.find(".wowbook-page-content"), e("<div class='wowbook-gutter-shadow'>").css("height", this.pageHeight).appendTo(a))
        },
        findPagesType: function() {
            var a = this.opts,
                b = {},
                c;
            var d = a.hardPages || [];
            var e = !0 === d;
            if (!e)
                for (a.hardcovers && (d.push(0, -1), this.closable && d.push(1), this.otherPage(this.pages.length - 1) || d.push(-2)), a = 0, c = d.length; a < c; a++) {
                    var f = d[a];
                    0 > f && (f = this.pages.length + f);
                    0 <= f && f < this.pages.length && (b[f] = !0)
                }
            for (a = this.pages.length; a--;) d =
                e || b[a] || this.pages[a].hardPageSetByUser, this.pages[a].toggleClass("wowbook-hardpage", d).isHardPage = d
        },
        showPage: function(a, b) {
            0 > a && (a = 0);
            a > this.pages.length - 1 && (a = this.pages.length - 1);
            var c = this.leftPageIndex(a);
            var d = this.rightPageIndex(a),
                g = this.pageBelow(c),
                f = this.pageBelow(d),
                h = this.pageWidth,
                k = this.pages.length - 1;
            this.loadPage(c);
            this.loadPage(d);
            this.loadPage(g);
            this.loadPage(f);
            this.loadPage(this.backPage(c));
            this.loadPage(this.backPage(d));
            this.opts.pagesInMemory && this.unloadUnusedPages(a);
            for (var p = 0; p <= k; p++) {
                var u = this.pages[p].onLeft != this.rtl ? p : k - p;
                var t = p === g || p === c || p === d || p === f ? "block" : "none";
                this.pages[p].data("zIndex", u).css({
                    display: t,
                    left: this.pages[p].onLeft ? 0 : h,
                    top: 0,
                    zIndex: u
                });
                this.setPagePosition(this.pages[p])
            }
            this.differentPageSizes && (null !== g && this.insideCoverLeft.css("display", "block"), null !== f && this.insideCoverRight.css("display", "block"));
            g = 0 == a || !this.closable && 1 == a;
            k = a == k || a == this.otherPage(k);
            this.leftHandle.toggleClass("wowbook-disabled", !this.backPage(c));
            this.rightHandle.toggleClass("wowbook-disabled", !this.backPage(d));
            this.toggleControl("back", g);
            this.toggleControl("next", k);
            this.toggleControl("first", g);
            this.toggleControl("last", k);
            c = !this.pages.length;
            this.toggleControl("left", c || (this.rtl ? k : g));
            this.toggleControl("lastLeft", c || (this.rtl ? k : g));
            this.toggleControl("right", c || (this.rtl ? g : k));
            this.toggleControl("lastRight", c || (this.rtl ? g : k));
            (c = this.onShowPage) && e.isFunction(c) && !this.isOnPage(a) && (this.currentPage = a, c(this, this.pages[a], a), (d = this.otherPage(a)) &&
                c(this, this.pages[d], d));
            this.currentPage = a;
            this.pdf && this.pdfUpdateRender();
            this._controls.currentpage && this.updateCurrentPageControl();
            this._sliding || (c = this._singlePage && this.pageIsOnTheRight(a) ? -h : 0, this.origin.css("left", c), this.origin.css("transform", ""));
            this.centeredWhenClosed && !this._singlePage && (c = !!this.leftPage(a), d = this.rightPage(a), this.origin.css("left", c && d ? 0 : c ? h / 2 : -h / 2));
            this.positionBookShadow();
            !1 !== b && this.opts.updateBrowserURL && this.locationHashToPage() != a && (this.locationHashSetTo =
                window.location.hash = this.pageToLocationHash(a));
            this.showThumbnail()
        },
        slideX: function(a, b) {
            var c = parseFloat(this.origin.css("left")),
                d = a - c;
            this.origin.css("left", 0);
            var g = this;
            this._move = 0;
            this._sliding = !0;
            e(this).animate({
                _move: 1
            }, {
                duration: this.opts.turnPageDuration,
                easing: "easeOutCubic",
                complete: function() {
                    this._sliding = !1;
                    this.origin.css("transform", "");
                    this.origin.css("left", a);
                    this.positionBookShadow();
                    e.isFunction(b) && b()
                },
                step: function(a, b) {
                    g.translate(this.origin, c + a * d);
                    this.positionBookShadow()
                }
            })
        },
        holdPage: function(a, b, c, d, e) {
            "number" === typeof a && (a = this.pages[a]);
            if (a) {
                var f = a.pageIndex,
                    g = this.pages.length - 1,
                    k = !this.otherPage(g);
                if (!d) d = this.pageIsOnTheLeft(f) ? "l" : "r";
                else if (!this.corners[d] || (this.pageIsOnTheLeft(f) ? /r/ : /l/).test(d)) return;
                void 0 === e && (e = this.backPage(f));
                if (e) {
                    var p = e.pageIndex;
                    a.data("holded_info", [b, c, d]);
                    if (!this._singlePage && this.centeredWhenClosed && (0 === f || 0 === p || k && (p === g || f === g))) {
                        var u = 0,
                            t = !this.rtl,
                            w = this.pageWidth;
                        if (t ? 0 === f : f === g && k) {
                            var l = -w / 2;
                            var q = -w / 4;
                            var m =
                                0;
                            var z = -w / 2;
                            var n = -w;
                            var r = q;
                            var B = n;
                            var v = b
                        }
                        if (t ? f === g && k : 0 === f) l = w, q = 3 * w / 2, m = w / 2, z = 0, n = w, r = 2 * w, B = b, v = r;
                        if (t ? 0 === p : p === g && k) l = w / 2, q = f === (t ? g : 0) ? w : 3 * w / 2, m = f === (t ? g : 0) ? w / 2 : 0, z = -w / 2, n = l, r = 2 * w, B = b, v = r;
                        if (t ? p === g && k : 0 === p) l = f === (t ? 0 : g) ? 0 : -w / 2, q = w / 2, m = w / 2, z = f === (t ? 0 : g) ? -w / 2 : 0, n = -w, r = q, B = n, v = b;
                        if (b < l) {
                            u = m;
                            var C = B
                        }
                        b > q && (u = z, C = v);
                        b >= l && b <= q && (b = (b - l) / (q - l), u = m + b * (z - m), C = n + b * (r - n));
                        b = C;
                        this.origin.css("left", u);
                        this.positionBookShadow()
                    }
                    this.zoomed || "basic" == this.pageType(a) || "basic" == this.pageType(e) ? this.foldPageBasic(a,
                        b, c, d, e) : a.isHardPage || e.isHardPage ? this.holdHardpage(a, b, c, d, e) : this.foldPage(a, b, c, d, e);
                    if (!a.data("holded") && (a.addClass("wowbook-page-holded"), e.addClass("wowbook-page-holded"), a.data("holded", !0), this.holdedPage = a, this.holdedPageBack = e, this.shadows && this.shadowClipper.css("display", "block"), this.clipBoundaries && this.clipper.css("overflow", "visible"), this.positionBookShadow(), this.opts.onHoldPage)) this.opts.onHoldPage(this, f, a, e)
                }
            }
        },
        foldPage: function(a, b, c, d, e) {
            this._currentFlip || (this._currentFlip =
                this.foldPageStart(a, b, c, d, e));
            this._currentFlip.page == a && (this._currentFlip.x = b, this._currentFlip.y = c, this._currentFlip.page.data("holdedAt", {
                x: b,
                y: c
            }), this._currentFlip.corner = d, this.foldPageStyles(this._currentFlip))
        },
        foldPageStart: function(a, b, c, d, e) {
            var f = {};
            "number" === typeof a && (a = this.pages[a]);
            f.book = this;
            f.page = a;
            f.pageIndex = a.data("pageIndex");
            void 0 === e && (e = this.backPage(f.pageIndex));
            if (e && e.length) {
                f.back = e;
                f.pageContent = a.children().first();
                f.backContent = e.children().first();
                var g = f.page.pageWidth,
                    k = f.page.pageHeight;
                d || (d = "tl");
                if ("l" == d || "r" == d) {
                    var p = {
                        x: "l" == d ? 0 : g,
                        y: c
                    };
                    a.data("grabPoint", p);
                    f.grabPoint = p;
                    d = (c >= p.y ? "t" : "b") + d
                }
                f.page.data("holdedAt", {
                    x: b,
                    y: c
                });
                f.x = b;
                f.y = c;
                f.page.data("holdedCorner", d);
                f.corner = d;
                f.pageDiagonal = Math.sqrt(g * g + k * k);
                b = Math.ceil(f.pageDiagonal);
                b = "rect(-" + b + "px " + b + "px " + b + "px 0px)";
                f.page.css("clip", b);
                f.pageLeft = parseFloat(a.css("left"));
                e.css({
                    left: f.pageLeft + "px",
                    zIndex: 1E5,
                    clip: b
                });
                f.shadowHeight = 2 * Math.ceil(f.pageDiagonal);
                f.shadowTop = -(f.shadowHeight - k) /
                    2;
                this.shadowClipper.css({
                    top: f.page.top,
                    left: a.onLeft ? a.left : e.left,
                    width: 2 * g,
                    height: k
                });
                this.internalShadow.css({
                    display: "block",
                    height: f.shadowHeight
                });
                f.foldShadowWidth = this.foldShadow.width();
                this.foldShadow.css({
                    display: "block",
                    height: f.shadowHeight
                });
                this.foldGradientContainer.appendTo(f.backContent);
                f.foldGradientWidth = this.foldGradientElem.width();
                f.foldGradientHeight = 2 * Math.ceil(f.pageDiagonal);
                this.foldGradientElem.css("height", f.foldGradientHeight);
                this.foldGradientContainer.css({
                    position: "absolute",
                    width: f.foldGradientWidth,
                    height: f.foldGradientHeight,
                    top: 0,
                    left: 0,
                    display: "none"
                });
                f.foldGradientVisible = !1;
                return f
            }
        },
        foldPageStyles: function(a) {
            var b = a.page.pageWidth,
                c = a.page.pageHeight,
                d = b / 2,
                g = c / 2,
                f = e.wowBook.utils.translate,
                h = a.x,
                k = a.y,
                p = a.back,
                u = a.corner || "tl";
            if ("l" == u || "r" == u) {
                var t = a.page.data("grabPoint");
                t || (t = {
                    x: "l" == u ? 0 : b,
                    y: k
                }, page.data("grabPoint", t));
                u = (k >= t.y ? "t" : "b") + (this.pageIsOnTheLeft(a.pageIndex) ? "l" : "r");
                a.corner = u;
                a.page.data("holdedCorner", u);
                var w = h - t.x;
                var l = k - t.y;
                l = Math.atan2(l,
                    w);
                t = {
                    x: 0,
                    y: (k >= t.y ? 0 : c) - t.y
                };
                t = v(t, 2 * l);
                h = t.x + h;
                k = t.y + k
            }
            a.page.data("holdedAt", {
                x: h,
                y: k
            });
            a.page.data("holdedCorner", u);
            var t = a.page.corners[u],
                u = b - t[0],
                q = t[1];
            w = h - u;
            l = k - q;
            var m = Math.sqrt(w * w + l * l);
            m > b && (h = u + b * w / m, k = q + b * l / m);
            q = c - q;
            w = h - u;
            l = k - q;
            var m = Math.sqrt(w * w + l * l),
                n = a.pageDiagonal;
            m > n && (h = u + n * w / m, k = q + n * l / m);
            u = t[0];
            t = t[1];
            t == k && (k = t + .001);
            w = h - u;
            l = k - t;
            m = Math.sqrt(w * w + l * l);
            h = m / 2;
            l = Math.atan2(l, w);
            w = Math.tan(l);
            k = l;
            l = 180 * l / Math.PI;
            q = {
                x: u - d,
                y: g - t
            };
            n = v(q, k);
            m = n.x + h + d + .5;
            a.pageContent.css("transform",
                f(-m, 0) + " rotate(" + (-l).toFixed(7) + "deg)");
            a.page.css("transform", f((Math.cos(k) * m).toFixed(5), (Math.sin(k) * m).toFixed(5)) + " rotate(" + l.toFixed(7) + "deg)");
            n = this.calculateOpacity(h, b, this.shadowThreshold, 50);
            if (this.shadows && 0 < n) {
                var z = a.shadowTop;
                this.internalShadow.css({
                    transform: f(m + (a.page.onRight ? a.page.pageWidth : 0), z) + " rotate(" + l + "deg)",
                    transformOrigin: d - m + "px " + (g + (a.shadowHeight - c) / 2) + "px"
                });
                m -= a.foldShadowWidth;
                this.foldShadow.css({
                    transform: f(m + (a.page.onRight ? a.page.pageWidth : 0), z) + " rotate(" +
                        l + "deg)",
                    transformOrigin: d - m + "px " + (g + (a.shadowHeight - c) / 2) + "px"
                });
                this.shadowContainer.css({
                    opacity: n,
                    display: "block"
                })
            } else this.shadowContainer.css("display", "none");
            p.show();
            q.x = -q.x;
            n = v(q, -k);
            m = n.x - h + d - 1;
            c = {
                x: n.x - h,
                y: n.y + h * w
            };
            p = {
                x: n.x - h,
                y: n.y - h / (0 == w ? 1E-4 : w)
            };
            c = v(c, -k);
            p = v(p, -k);
            p = -(p.x + d);
            c = -(c.y - g);
            a.backContent.css("transform", f(-m, 0) + " rotate(" + l + "deg)");
            a.back.css("transform", f((u + p + Math.cos(k) * m).toFixed(5), (t - c + Math.sin(k) * m).toFixed(5)) + " rotate(" + l + "deg)");
            n = this.calculateOpacity(2 *
                h, 2 * b, this.foldGradientThreshold, 50);
            this.foldGradient && 0 < n ? (this.foldGradientContainer.css({
                opacity: n,
                display: "block",
                transform: f(b - u - a.foldGradientWidth / 2, t - a.foldGradientHeight / 2) + " rotate(" + -l + "deg)"
            }), this.foldGradientElem.css("transform", f(-h + a.foldGradientWidth / 2, 0)), a.foldGradientVisible || (this.foldGradientContainer.css("display", "block"), a.foldGradientVisible = !0)) : a.foldGradientVisible && (this.foldGradientContainer.css("display", "none"), a.foldGradientVisible = !1)
        },
        holdHardpage: function(a, b,
            c, d, e) {
            this._currentFlip || (this._currentFlip = this.flipHardPageStart(a, b, c, d, e));
            this._currentFlip.page == a && (this._currentFlip.x = b, this._currentFlip.y = c, this._currentFlip.page.data("holdedAt", {
                x: b,
                y: c
            }), this._currentFlip.corner = d, this.flipHardPageStyles(this._currentFlip))
        },
        flipHardPageStart: function(a, b, c, d, g) {
            this.clipBoundaries && this.clipper.children(".wowbook-inner-clipper").css("overflow", "visible");
            !this.border3D && this.opts.pageThickness && this.opts.use3d && Modernizr.csstransforms3d && (this.border3D =
                e('<div class="wowbook-3d-border">'), this.border3D.css("background", this.opts.pageEdgeColor));
            this.opts.hardPageShadow && !this.hardPageShadow && (this.hardPageShadow = e('<div class="wowbook-hard-page-shadow">'));
            var f = {};
            "number" === typeof a && (a = this.pages[a]);
            f.book = this;
            f.page = a;
            f.pageIndex = a.data("pageIndex");
            void 0 === g && (g = this.backPage(f.pageIndex));
            if (g && g.length) {
                f.back = g;
                var h = a.pageWidth;
                d || (d = "tl");
                a.data("holdedAt", {
                    x: b,
                    y: c
                });
                a.data("holdedCorner", d);
                a.css("zIndex", 1E5);
                g.css("zIndex", 1E5);
                this.opts.use3d && Modernizr.csstransforms3d && (a.css(Modernizr.prefixed("perspectiveOrigin"), "0 50%"), g.css(Modernizr.prefixed("perspectiveOrigin"), "0 50%"));
                b = a.onLeft ? h : 0;
                a.css("transformOrigin", b + "px 50%");
                g.css("transformOrigin", h - b + "px 50%");
                this.border3D && this.border3D.css("width", a.thickness);
                this.shadows && this.hardPageDropShadow.css({
                    display: "block",
                    width: a.pageWidth,
                    height: a.pageHeight,
                    top: a.top
                });
                return f
            }
        },
        flipHardPageStyles: function(a) {
            var b = a.page,
                c = a.back,
                d = a.x,
                g = a.y,
                f = this.pageIsOnTheRight(a.pageIndex),
                h = this.pageWidth,
                k = this.pageHeight;
            (a = a.corner) || (a = "tl");
            b.data("holdedAt", {
                x: d,
                y: g
            });
            b.data("holdedCorner", a);
            g = f ? h - d : d;
            a = f ? 0 : h;
            var p;
            0 > g && (g = 0);
            g = (p = g < h) ? b : c;
            (p ? c : b).css("display", "none");
            f = f != p;
            a = d - a;
            a > h && (a = h);
            a < -h && (a = -h);
            var l = -Math.sqrt(1600 * (1 - a * a / ((h + 15) * (h + 15))));
            p = Math.abs(a / h);
            l = 1 == p ? 0 : Math.atan2(l, a);
            if (this.opts.use3d && Modernizr.csstransforms3d) {
                var t = f ? -this._calculateAngleFromX(-a, h) : this._calculateAngleFromX(a, h);
                if (this.animating) {
                    var m = this._animationData;
                    if (this.curledPage || m.curled) m.curled = !0, m.angle || (l = {
                        from: t,
                        to: 0
                    }, m.angle = l, t = a + m.dx, l.to = f ? -this._calculateAngleFromX(-t, h) : this._calculateAngleFromX(t, h), Math.abs(a) == h && (l.from = 0), Math.abs(t) == h && (l.to = 0), l.delta = l.to - l.from), t = m.angle.from - m.angle.delta * (m.from.x - d) / m.dx
                }
                g.append(this.border3D);
                this.hardPageShadow && (g.append(this.hardPageShadow), this.hardPageShadow.css("opacity", 1 - p));
                g.css({
                    transform: "perspective(" + this.opts.perspective + this.perspectiveUnit + ") rotate3d(0, 1, 0, " + t + "deg)",
                    display: "block"
                })
            } else g.css({
                transform: "skewY(" +
                    l + "rad) scaleX(" + p + ")",
                display: "block"
            });
            !e.wowBook.support.transform && e.wowBook.support.filters && (g.css("filter", "progid:DXImageTransform.Microsoft.Matrix(" + ("M11=" + p + ", M12=0, M21=" + Math.tan(l) * p + ", M22=1") + ", sizingMethod='auto expand')"), g.css({
                marginTop: k - g.height(),
                marginLeft: f ? h - g.width() : 0
            }));
            this.shadows && this.hardPageDropShadow.css({
                left: f ? b.onLeft ? b.left : c.left : h,
                opacity: Math.abs(a) < h / 2 ? 0 : (Math.abs(a) - h / 2) / h * .8
            })
        },
        _calculateAngleFromX: function(a, b, c) {
            var d = 2 * b / 3;
            if (a > d) {
                var e = this._calculateAngleFromX(d,
                    b, c);
                return e + (a - d) / (b - d) * (0 - e)
            }
            c = c || this.opts.perspective;
            d = 180 / Math.PI;
            e = b * b;
            c *= c;
            var f = a * a;
            a = Math.acos((b * c * a - Math.sqrt(e * e * c * f + e * e * f * f - e * c * f * f)) / (e * c + e * f));
            return -a * d
        },
        foldPageBasic: function(a, b, c, d, e) {
            this._currentFlip || (this._currentFlip = this.foldPageBasicStart(a, b, c, d, e));
            this._currentFlip && this._currentFlip.page == a && (this._currentFlip.x = b, this._currentFlip.y = c, this._currentFlip.page.data("holdedAt", {
                x: b,
                y: c
            }), this._currentFlip.corner = d, this.foldPageBasicStyles(this._currentFlip))
        },
        foldPageBasicStart: function(a,
            b, c, d, e) {
            var f = {};
            "number" === typeof a && (a = this.pages[a]);
            f.book = this;
            f.page = a;
            f.pageIndex = a.data("pageIndex");
            void 0 === e && (e = this.backPage(f.pageIndex));
            if (e && e.length) {
                f.back = e;
                var g = a.pageHeight;
                d || (d = "tl");
                a.data("holdedAt", {
                    x: b,
                    y: c
                });
                a.data("holdedCorner", d);
                e.css("zIndex", 1E5);
                a.data("foldPageBasic", !0);
                f.foldGradientWidth = this.foldGradientElem.width();
                f.foldShadowWidth = this.foldShadow.width();
                this.internalShadow.css("display", "none");
                this.foldShadow.css({
                    display: "none",
                    height: g,
                    transform: "",
                    top: a.top
                }).toggleClass("wowbook-shadow-fold-flipped", a.onRight);
                this.shadowContainer.css("display", "block");
                b = e.children().first();
                this.foldGradientContainer.appendTo(b).css({
                    width: f.foldGradientWidth,
                    height: g,
                    top: 0,
                    transform: "",
                    zIndex: 1E9
                });
                this.foldGradientElem.css({
                    left: 0,
                    height: g
                }).toggleClass("wowbook-fold-gradient-flipped", a.onRight);
                return f
            }
        },
        foldPageBasicStyles: function(a) {
            var b = a.page;
            var c = a.back;
            x = a.x;
            y = a.y;
            var d = b.pageWidth,
                e = b.pageHeight,
                f = a.corner;
            f || (f = "tl");
            b.data("holdedAt", {
                x: x,
                y: y
            });
            b.data("holdedCorner", f);
            var h = (f = this.pageIsOnTheLeft(a.pageIndex)) ? x : d - x;
            0 > h && (h = 0);
            h > 2 * d && (h = 2 * d);
            var k = h / 2;
            if (f) {
                var p = "rect(-1000px " + d + "px " + e + "px " + k + "px)";
                e = "rect(-1000px " + d + "px " + e + "px " + (d - k) + "px)";
                h = b.left + (h - d)
            } else p = "rect(-1000px " + (d - k) + "px " + e + "px -1000px)", e = "rect(-1000px " + k + "px " + e + "px -1000px)", h = c.left + (d - h + d);
            b.css("clip", p);
            c.css({
                clip: e,
                left: h,
                display: "block"
            });
            p = this.calculateOpacity(2 * k, 2 * d, this.shadowThreshold, 50);
            this.shadows && 0 < p ? (b = f ? b.left + k - a.foldShadowWidth :
                c.left + d - k + d, this.shadowContainer.css("opacity", p), this.foldShadow.css({
                    left: b,
                    display: "block"
                })) : this.foldShadow.css("display", "none");
            p = this.calculateOpacity(2 * k, 2 * d, this.foldGradientThreshold, 50);
            this.foldGradient && 0 < p ? (b = f ? d - k : k - a.foldGradientWidth, this.foldGradientContainer.css({
                opacity: p,
                left: b,
                display: "block"
            })) : this.foldGradientContainer.css("display", "none")
        },
        stopAnimation: function(a) {
            arguments.length || (a = !0);
            e(this).stop(!0, a);
            this.animating = !1;
            this.currentFlip && (this.currentFlip.finished = !0)
        },
        flip: function(a, b, c, d) {
            d || (d = e.isPlainObject(a) ? a : {});
            d.from || (d.from = []);
            d.to || (d.to = []);
            var g = this;
            if (!g.animating) {
                g.animating = !0;
                c || (c = d.page || g.holdedPage);
                var f = c.data("holded_info");
                c.data("holdedAt");
                var h = d.corner || c.data("holdedCorner"),
                    k = e.easing[d.easing] || d.easing || function(a) {
                        return 1 == a ? 1 : -Math.pow(2, -10 * a) + 1
                    };
                a = {
                    page: c,
                    back: d.back || g.holdedPageBack || g.backPage(c.pageIndex),
                    initialX: void 0 != d.from[0] ? d.from[0] : f[0],
                    initialY: void 0 != d.from[1] ? d.from[1] : f[1],
                    finalX: void 0 != d.to[0] ?
                        d.to[0] : a,
                    finalY: void 0 != d.to[1] ? d.to[1] : b,
                    corner: h || f[2],
                    duration: d.duration,
                    complete: function() {
                        g.animating = !1;
                        e.isFunction(d.complete) && d.complete()
                    },
                    easing: k,
                    arc: d.arc,
                    dragging: d.dragging,
                    start: e.now(),
                    finished: !1
                };
                a.deltaX = a.finalX - a.initialX;
                a.deltaY = a.finalY - a.initialY;
                this._animationData = {
                    from: {
                        x: a.initialX,
                        y: a.initialY
                    },
                    to: {
                        x: a.finalX,
                        y: a.finalY
                    },
                    dx: a.deltaX
                };
                void 0 == a.duration && (a.duration = this.turnPageDuration * Math.abs(a.deltaX) / (2 * this.pageWidth));
                a.duration < this.opts.turnPageDurationMin &&
                    (a.duration = this.opts.turnPageDurationMin);
                !c.isHardPage && .4 < a.duration / this.turnPageDuration && this.playFlipSound();
                this.currentFlip = a
            }
        },
        rafCallback: function() {
            window.raf(this.callRAFCallback);
            this._zoomUpdateOnRAF();
            if (this.currentFlip && !this.currentFlip.finished) {
                var a = this.currentFlip,
                    b = (e.now() - a.start) / a.duration;
                1 <= b && (b = 1);
                a.x = a.initialX + a.deltaX * a.easing(b, a.duration * b, 0, 1, a.duration);
                a.y = a.initialY + a.deltaY * a.easing(b, a.duration * b, 0, 1, a.duration);
                a.arc && (a.y -= (.5 - Math.abs(.5 - a.easing(b, a.duration *
                    b, 0, 1))) * this.pageHeight / 10);
                a.dragging && (a.x = a.initialX + .2 * a.deltaX, a.y = a.initialY + .2 * a.deltaY, a.initialX = a.x, a.initialY = a.y, a.deltaX = a.finalX - a.initialX, a.deltaY = a.finalY - a.initialY, 1 > a.deltaX && 1 > a.deltaY && 1 == b);
                this.holdPage(a.page, a.x, a.y, a.corner, a.back);
                1 == b && (a.finished = !0, a.complete && a.complete())
            }
        },
        releasePages: function() {
            for (var a = 0, b = this.pages.length; a < b; a++) this.pages[a].data("holded") && this.releasePage(a)
        },
        releasePage: function(a, b, c, d) {
            "number" === typeof a && (a = this.pages[a]);
            var e = this,
                f = a.data("holdedAt"),
                h = a.data("holdedCorner");
            if (b && f) this.flip({
                from: [f.x, f.y],
                to: a.corners[h],
                page: a,
                easing: "linear",
                duration: d,
                complete: function() {
                    e.releasePage(a)
                }
            });
            else if (b = a.data("pageIndex"), void 0 === c && (c = this.holdedPageBack || this.backPage(b)), this.holdedPageBack = this.holdedPage = null, a.data({
                    holded_info: null,
                    holdedAt: null,
                    holdedCorner: null,
                    grabPoint: !1,
                    foldPageBasic: null,
                    holded: !1
                }), this.clipBoundaries && !this.zoomed && (this.clipper.css("overflow", "hidden"), this.clipper.children(".wowbook-inner-clipper").css("overflow",
                    "hidden")), this.shadowClipper.css("display", "none"), this.internalShadow.parent().hide(), this.foldGradientContainer.hide(), this.hardPageDropShadow.hide(), this.resetPage(a), c && c.length && (this.resetPage(c), c.hide()), this.foldShadow.removeClass("wowbook-shadow-fold-flipped").css({
                    transform: "",
                    left: ""
                }), this.foldGradientElem.removeClass("wowbook-fold-gradient-flipped").css("transform", ""), this.foldGradientContainer.css("transform", "").appendTo(this.pagesContainer), this.positionBookShadow(), this.opts.onReleasePage) this.opts.onReleasePage(this,
                b, a, c)
        },
        resetPage: function(a) {
            this._currentFlip = void 0;
            a.removeClass("wowbook-page-holded");
            this.resetCSS || (this.resetCSS = {
                transform: "",
                transformOrigin: "",
                clip: "auto",
                marginLeft: 0,
                marginTop: 0,
                filter: ""
            });
            var b = a.pageWidth,
                c = a.pageHeight;
            a.css(this.resetCSS).css({
                zIndex: a.data("zIndex"),
                width: b,
                height: c,
                left: a.onLeft ? 0 : this.pageWidth
            });
            this.setPagePosition(a);
            e.browser.msie && 9 > e.browser.version && a.attr("style", a.attr("style").replace(/clip\: [^;]+;/i, ""));
            a = e(".wowbook-page-content", a);
            a.css(this.resetCSS);
            q(a, b, c);
            this.hardPageShadow && this.hardPageShadow.hide()
        },
        gotoPage: function(a, b) {
            var c;
            if (!this.animating) {
                "string" === typeof a && "#" == a.charAt(0) && (a = this.selectorToPage(a));
                0 > a && (a = 0);
                a > this.pages.length - 1 && (a = this.pages.length - 1);
                if (this._singlePage) {
                    if (a == this.currentPage) return
                } else if (this.isOnPage(a)) return;
                if (!this.elem.is(":visible")) return this.showPage(a, b), a;
                this._cantStopAnimation = !0;
                var d = a < this.currentPage;
                var e = this.rtl ? a > this.currentPage : d;
                var f = this,
                    h = e ? f.leftPage() : f.rightPage();
                if (h) {
                    this.uncurl(!0);
                    if (e) {
                        var k = this.leftPage(a);
                        var p = this.rightPage(a)
                    } else k = this.rightPage(a), p = this.leftPage(a);
                    if (this.closable && this.differentPageSizes && h.isCover != p.isCover && h.pageIndex !== a) {
                        if (0 == h.pageIndex || 0 == p.pageIndex) this.showPage(1, !1);
                        else {
                            var l = this.pages.length - 1;
                            this.otherPage(l) || h.pageIndex != l && p.pageIndex != l || this.showPage(this.backPage(l).pageIndex, !1)
                        }
                        this.gotoPage(p.pageIndex)
                    } else {
                        var m = p && p.is(":visible");
                        if (d)
                            for (d = h.pageIndex - 1; 0 <= d; d--) this.pages[d].css("display",
                                "none");
                        else
                            for (d = h.pageIndex + 1, c = this.pages.length; d < c; d++) this.pages[d].css("display", "none");
                        k && (k.css("display", "block"), k.onLeft ? this.insideCoverLeft.css("display", "block") : this.insideCoverRight.css("display", "block"));
                        m && p.css("display", "block");
                        var q = a;
                        k = h.data("holdedAt");
                        m = h.data("holdedAt");
                        d = h.data("holdedCorner") || (e ? "tl" : "tr");
                        e ? (m = m || {
                            x: 0,
                            y: 0
                        }, e = 2 * f.pageWidth, c = "bl" != d ? 0 : h.pageHeight) : (m = m || {
                            x: h.pageWidth,
                            y: 0
                        }, e = -h.pageWidth, c = "br" != d ? 0 : h.pageHeight);
                        var n = "linear";
                        if (this.centeredWhenClosed &&
                            !this._singlePage && (h.isHardPage || p.isHardPage)) {
                            l = this.pages.length - 1;
                            var z = !this.rtl,
                                n = "easeOutCubic";
                            this.pageIsOnTheRight(this.currentPage) && !this.otherPage(this.currentPage) && (e += this.pageWidth / 2, a != (z ? l : 0) || this.otherPage(a) || (e += this.pageWidth / 2));
                            this.pageIsOnTheLeft(this.currentPage) && !this.otherPage(this.currentPage) && (e -= this.pageWidth / 2, a != (z ? 0 : l) || this.otherPage(a) || (e -= this.pageWidth / 2))
                        }
                        if (this._singlePage) {
                            if (this.isOnPage(a)) return this.animating = !0, this.slideX(this.pageIsOnTheLeft(a) ?
                                0 : -this.pageWidth,
                                function() {
                                    f._cantStopAnimation = !1;
                                    f.animating = !1;
                                    f.showPage(q, b)
                                }), a;
                            this.slideX(this.pageIsOnTheLeft(a) ? 0 : -this.pageWidth, function() {
                                f.showPage(q, b)
                            })
                        }
                        f.flip({
                            from: [m.x, m.y],
                            to: [e, c],
                            easing: n,
                            arc: !k,
                            page: h,
                            back: p,
                            corner: d,
                            complete: function() {
                                f._cantStopAnimation = !1;
                                f.releasePage(h, !1);
                                f.showPage(q, b)
                            }
                        });
                        return a
                    }
                }
            }
        },
        gotoDirection: function(a, b) {
            void 0 == b && (b = this.currentPage);
            "left" == a && (a = -1);
            "right" == a && (a = 1);
            var c = a * (this._singlePage ? 1 : 2);
            this.rtl && (c = -c);
            return this.gotoPage(b +
                c)
        },
        gotoLeft: function(a) {
            return this.gotoDirection("left", a)
        },
        gotoRight: function(a) {
            return this.gotoDirection("right", a)
        },
        gotoLastLeft: function(a) {
            return this.gotoPage(this.rtl ? this.pages.length : 0)
        },
        gotoLastRight: function(a) {
            return this.gotoPage(this.rtl ? 0 : this.pages.length)
        },
        back: function() {
            return this.gotoPage(this.currentPage - (this._singlePage ? 1 : 2))
        },
        advance: function() {
            return this.gotoPage(this.currentPage + (this._singlePage ? 1 : 2))
        },
        leftPage: function(a) {
            void 0 === a && (a = this.currentPage);
            return this.pages[this.leftPageIndex(a)] ||
                null
        },
        leftPageIndex: function(a) {
            if (null != a) {
                this.pageIsOnTheRight(a) && (a += this.rtl ? 1 : -1);
                if (0 > a || a > this.pages.length - 1) a = null;
                return a
            }
        },
        rightPage: function(a) {
            void 0 === a && (a = this.currentPage);
            return this.pages[this.rightPageIndex(a)] || null
        },
        rightPageIndex: function(a) {
            if (null != a) {
                this.pageIsOnTheLeft(a) && (a += this.rtl ? -1 : 1);
                if (0 > a || a > this.pages.length - 1) a = null;
                return a
            }
        },
        pageIsOnTheRight: function(a) {
            return !this.pageIsOnTheLeft(a)
        },
        pageIsOnTheLeft: function(a) {
            a = !(a % 2);
            this.closable && (a = !a);
            this.rtl &&
                (a = !a);
            return a
        },
        otherPage: function(a) {
            var b = this.pageIsOnTheLeft(a) ? 1 : -1;
            this.rtl && (b = -b);
            a += b;
            if (0 > a || a > this.pages.length - 1) a = null;
            return a
        },
        isOnPage: function(a) {
            return "number" === typeof a && (a === this.currentPage || a === this.otherPage(this.currentPage))
        },
        backPage: function(a) {
            if (!this.pages[a]) return null;
            var b = a % 2 ? 1 : -1;
            a += this.closable ? -b : b;
            return this.pages[a]
        },
        pageBelow: function(a) {
            a = parseInt(a, 10);
            if (a != a) return null;
            a += this.pageIsOnTheLeft(a) != this.rtl ? -2 : 2;
            if (0 > a || a > this.pages.length - 1) a = null;
            return a
        },
        pageType: function(a) {
            a = "number" === typeof a ? this.pages[a] : a;
            return a.isHardPage ? "hard" : a.find(".wowbook-page-content.wowbook-basic-page").length ? "basic" : "soft"
        },
        calculateOpacity: function(a, b, c, d) {
            if (a <= c || a >= b - c) return 0;
            if (a >= d && a <= b - d) return 1;
            a > d && (a = b - a);
            return (a - c) / (d - c)
        },
        startSlideShow: function() {
            this.slideShowRunning = !0;
            this.advanceAfterTimeout(this.slideShowDelay);
            this.toggleControl("slideshow", !0)
        },
        advanceAfterTimeout: function(a) {
            var b = this;
            this.slideShowTimer = setTimeout(function() {
                if (b.animating ||
                    b.holdedPage) b.advanceAfterTimeout(100);
                else {
                    var a = b.isOnPage(b.pages.length - 1);
                    b.opts.slideShowLoop && a ? b.gotoPage(0) : b.advance();
                    b.opts.slideShowLoop || !a ? b.advanceAfterTimeout(b.slideShowDelay + b.turnPageDuration) : b.stopSlideShow()
                }
            }, a)
        },
        stopSlideShow: function(a) {
            clearTimeout(this.slideShowTimer);
            this.slideShowTimer = void 0;
            this.slideShowRunning = !1;
            a || this.toggleControl("slideshow", !1)
        },
        toggleSlideShow: function() {
            this.slideShowRunning ? this.stopSlideShow() : this.startSlideShow()
        },
        findSections: function(a) {
            a &&
                (this.sectionDefinition = a);
            var b = this.sectionDefinition;
            a = [];
            if ("string" === typeof b) {
                var c = b;
                b = [];
                e(c, this.elem).each(function(a, c) {
                    b.push(["#" + c.id, e(c).html()])
                })
            }
            if (e.isArray(b)) {
                for (var d = 0, g = b.length; d < g; d++) {
                    c = b[d];
                    if ("string" === typeof c) try {
                        c = [c, e(c, this.elem).html()]
                    } catch (f) {
                        continue
                    }
                    try {
                        c[2] = this.selectorToPage(c[0])
                    } catch (f) {
                        continue
                    }
                    void 0 !== c[2] && a.push({
                        id: c[0],
                        title: c[1],
                        page: c[2]
                    })
                }
                a = a.sort(function(a, b) {
                    return a.page - b.page
                })
            }
            return this.sections = a
        },
        pageToSection: function(a) {
            for (var b =
                    this.sections, c, d = 0, e = b.length; d < e && !(b[d].page > a); d++) c = b[d];
            return c
        },
        currentSection: function() {
            return this.pageToSection(this.currentPage)
        },
        fillToc: function(a, b) {
            var c = e(a || this.opts.toc),
                d = "";
            if (0 !== c.length) {
                var g = this.sections;
                "undefined" === typeof b && (b = this.opts.tocTemplate);
                b || (d = c.is("UL, OL") ? "<li>" : "<div>", b = '<a href="${link}">${section}</a>');
                for (var f = 0, h = g.length; f < h; f++) {
                    var k = g[f];
                    k = b.replace(/\$\{link\}/g, "#" + this.id + "/" + k.id.substr(1)).replace(/\$\{section\}/g, k.title).replace(/\$\{page\}/g,
                        k.page);
                    e(k).appendTo(c).wrap(d)
                }
            }
        },
        createToc: function(a) {
            a = this.opts.toc || a || [];
            var b = this.tocContainer = e("<div class='wowbook-toc' style='display:none'>").prependTo(e(this.opts.tocParent || "body"));
            b.append("<div class='centrar-encabezado'><img src='wow_book/icons/contenidos.png'/><h1><span class='wowbook-toc-header-text'>" + this.opts.tocHeader + "</span><button class='wowbook-close'>&#10005;</button></h1></div>");
            // b.append("<h1><span class='wowbook-toc-header-text'>" + this.opts.tocHeader + "</span><button class='wowbook-close'>&#10005;</button></h1>");
            this.controllify({
                toc: b.find(".wowbook-close")
            });
            b = e("<ul class='wowbook-toc-items'>").appendTo(b);
            this.createTocItemList(a, b);
            b.on("click", ".wowbook-toc-item-toggle",
                function() {
                    e(this).parent().toggleClass("wowbook-collapsed")
                });
            this.setStyle(this.opts.styles || this.opts.style)
        },
        createTocItemList: function(a, b) {
            for (var c = this, d, g, f = 0, h = a.length; f < h; f++) {
                d = a[f];
                g = this.createTocItem(d[0], d[1]).appendTo(b);
                if (d[3]) g.find("a").on("click", {
                    dest: d[3]
                }, function(a) {
                    a.preventDefault();
                    c.pdfNavigateTo(a.data.dest)
                });
                if (d[2] && d[2].length) {
                    if (null === d[1] && null === d[3]) g.find("a").on("click", function(a) {
                        e(this).parent().find(".wowbook-toc-item-toggle").trigger("click");
                        a.preventDefault()
                    });
                    g.addClass("wowbook-collapsed");
                    e("<span class='wowbook-toc-item-toggle'></span>").prependTo(g);
                    g = e("<ul class='wowbook-toc-items'>").appendTo(g);
                    this.createTocItemList(d[2], g)
                }
            }
        },
        createTocItem: function(a, b) {
            var c = this.opts.tocItemTemplate || '<li class="wowbook-toc-item"><a href="${link}">${title}<span class="page">${page}</span></a></li>',
                d = "";
            e.isNumeric(b) && (d = b, b = this.pageToLocationHash(b));
            if (null === b || void 0 === b) b = "";
            c = c.replace(/\$\{link\}/g, b).replace(/\$\{title\}/g, a).replace(/\$\{page\}/g,
                d);
            return e(c)
        },
        destroyToc: function() {
            this.tocContainer && this.tocContainer.remove();
            this.tocContainer = null
        },
        showToc: function(a) {
            this.tocContainer && this.tocContainer.length || this.createToc();
            this.tocContainer.fadeIn(a)
        },
        hideToc: function(a) {
            this.tocContainer.fadeOut(a)
        },
        toggleToc: function(a) {
            e(this.tocContainer).is(":visible") ? this.hideToc(a) : this.showToc(a)
        },
        locationHashToPage: function(a, b) {
            void 0 === a && (a = window.location.hash);
            if (a == "#" + this.id + "/") return 0;
            a = a.slice(1).split("/");
            if (a[0] === this.id) {
                if (1 ===
                    a.length) return 0;
                var c = parseInt(a[1]);
                if (!isNaN(c)) return Math.max(c - 1, 0);
                c = this.selectorToPage("#" + a[1]);
                if (void 0 === c) return 0;
                isNaN(a[2]) || (c += Math.max(parseInt(a[2]) - 1, 0));
                return +c
            }
        },
        pageToLocationHash: function(a) {
            var b = "",
                c = a + 1;
            if (a = this.pageToSection(a)) b += "/" + a.id.replace("#", ""), c -= a.page;
            1 < c && (b += "/" + c);
            return "#" + this.id + (b || "/")
        },
        clearLocationHash: function() {
            (new RegExp("^#" + this.id + "/?")).exec(window.location.hash) && (window.location.hash = "")
        },
        selectorToPage: function(a) {
            a = e(a, this.elem).closest(".wowbook-page");
            if (a.length) return +a.data("pageIndex")
        },
        getLocationHash: function() {
            return window.location.hash.slice(1)
        },
        locationEndsInHash: function(a) {
            void 0 === a && (a = window.location.href);
            return a.lastIndexOf("#") == a.length - 1
        },
        zoomSetup: function() {
            this._zoomOffset = {
                dx: 0,
                dy: 0
            };
            this._cssZoom = this._cssZoom || 1;
            this.zoomLevel = 1;
            this.detectBestZoomMethod();
            this.zoomTouchSupport();
            this.toggleControl("zoomIn", this.zoomLevel == this.zoomMax);
            this.toggleControl("zoomOut", this.zoomLevel == this.zoomMin);
            this.toggleControl("zoomReset",
                1 == this.zoomLevel);
            if (this.opts.doubleClickToZoom) {
                var a = this;
                this.elem.on("dblclick", function(b) {
                    var c = a.elem.offset(),
                        d = b.pageX - c.left;
                    b = b.pageY - c.top;
                    a.zoomed ? a.zoomReset() : a.zoomIn(1, {
                        x: d,
                        y: b
                    })
                })
            }
        },
        _zoomUpdateOnRAF: function() {
            if (this._zoomDataRAF) {
                var a = e.extend({}, this._zoomDataRAF.options),
                    b = this._zoomDataRAF.options.offset;
                if (b) {
                    var c = this._zoomOffset;
                    var d = b.dx - c.dx;
                    var g = b.dy - c.dy;
                    a.offset = {
                        dx: c.dx + .2 * d,
                        dy: c.dy + .2 * g
                    }
                }
                c = this._zoomDataRAF.level || this.zoomLevel;
                c != this.zoomLevel && (c = this.zoomLevel +
                    .2 * (c - this.zoomLevel));
                a.transform = !0;
                this._zoom(c, a);
                b && 1 > Math.abs(d) && 1 > Math.abs(g) && 1 > Math.abs(this.zoomLevel - c) && (this._zoomDataRAF.callback && this._zoomDataRAF.callback.call(this), this._zoomDataRAF = null)
            }
        },
        _zoom: function(a, b) {
            b || (b = {});
            var c = void 0 != b.x ? b.x : this.pageWidth * this.currentScale,
                d = b.y || 0;
            this._zoomOffset = b.offset || this.zoomFocusOffset(a, c, d);
            this.zoomLevel = a;
            var c = b.transform || this.opts.zoomUsingTransform,
                g = a * this.currentScale,
                d = e.browser.ie7 ? 1 : c ? this._cssZoom : g,
                f = this.zoomWindow,
                h =
                this.zoomContent,
                k = e(this.zoomBoundingBox),
                p = k.outerWidth(),
                l = k.outerHeight(),
                m = f.offset();
            f.position();
            k = k[0] !== window ? k.offset() : {
                left: k.scrollLeft(),
                top: k.scrollTop()
            };
            f.css({
                width: p,
                height: l
            });
            p = k.left - m.left;
            m = k.top - m.top;
            p && (p += parseFloat(f.css("marginLeft")), f.css("marginLeft", p), h.marginLeft = p);
            m && (m += parseFloat(f.css("marginTop")), f.css("marginTop", m), h.marginTop = m);
            f = "";
            m = this._zoomOffset.dx / d;
            p = this._zoomOffset.dy / d;
            e.wowBook.support.transform && (m || p) ? f = e.wowBook.utils.translate(m, p) : h.css({
                left: m,
                top: p
            });
            // $("#canvas-wrapper").css('transform',$($($(book).children()[0]).children()[0]).css('transform'));
            c ? (g /= d, f += this.opts.useScale3d ? "scale3d(" + g + "," + g + ",1)" : "scale(" + g + ")") : (this._cssZoom = g, h.css("zoom", g), h.css("marginLeft", -h.marginLeft / d), h.css("marginTop", -h.marginTop / d));
            ($("#canvas-wrapper").css("zoom", g), $("#canvas-wrapper").css("marginLeft", -h.marginLeft / d), $("#canvas-wrapper").css("marginTop", -h.marginTop / d));
            e.wowBook.support.transform && $("#canvas-wrapper").css("transform", f) && h.css("transform", f);
            // $("#canvas-wrapper").css('transform',"scale(" + g + ")");
            // $("#canvas-wrapper").css('zoom',g );
            // $("#canvas-wrapper").css('transform',$($($(book).children()[0]).children()[0]).css('transform'));
            // $("#canvas-wrapper").css("zoom", g);
            // $("#canvas-wrapper").css("left", -h.marginLeft / d);
            // $("#canvas-wrapper").css("top", -h.marginTop / d);
            // $("#canvas-wrapper").css("transformOrigin", "0 0");
            1 !== this.zoomLevel ? this.zoomed || (h.css("marginLeft", -h.marginLeft / d), h.css("marginTop", -h.marginTop / d), c && h.css("transformOrigin", "0 0"), this.elem.find("img").each(function() {
                var a = e(this);
                a.data("wowbook-draggable-before-zoom", a.attr("draggable"));
                a.attr("draggable", !1)
            })) : this.zoomFinished();
            this.zoomed = 1 !== a;
            h.toggleClass("wowbook-draggable", this.zoomed);
            this.toggleControl("zoomIn", this.zoomLevel == this.zoomMax);
            this.toggleControl("zoomOut", this.zoomLevel == this.zoomMin);
            this.toggleControl("zoomReset", 1 == this.zoomLevel);
            let transform = $($($(book).children()[0]).children()[0]).css('transform');
				    let values = transform .match(/-?[\d\.]+/g);
            let xv = values[4]*values[0];
            let yv = values[5]*values[0];

            // $("#canvas-wrapper").css('transform','translate('+xv+'px, '+yv+'px)');
            // $("#canvas-wrapper").css('transform',$($($(book).children()[0]).children()[0]).css('transform'));
            let left = parseFloat($(".wowbook-pdf").css("marginLeft")) * 1.1;
            // console.log(left);
            // $("#canvas-wrapper").css("marginLeft", left);
            // $("#canvas-wrapper").css("marginLeft", -h.marginLeft  / d);
        },
        zoom: function(a, b, c) {
            this.uncurl(!0);
            for (var d = 0, g = this.pages.length; d < g; d++)
                if (this.pages[d].data("holdedAt")) return;
            e.isPlainObject(b) && (c = b, b = c.duration);
            c || (c = {});
            if (a <= this.zoomMin && !c.resetting) return this.zoomReset(b, c);
            a > this.zoomMax &&
                (a = this.zoomMax);
            if (a !== this.zoomLevel || c.force)
                if (void 0 == b && (b = this.opts.zoomDuration), 0 == b) {
                    if (this._zoom(a, c), c.callback && c.callback.apply(this), this.pdf && this.pdfUpdateRender(), this.onZoom) this.onZoom(this)
                } else {
                    d = !this.opts.zoomUsingTransform && e.wowBook.support.transform;
                    this._zoomAnimating && (e(this).stop(), d && this.zoomContent.css("transform", ""));
                    this._zoomAnimating = this.zoomLevel;
                    var f = this,
                        g = c.x,
                        h = c.y || 0;
                    void 0 == g && (g = (this._singlePage ? this.pageWidth / 2 : this.pageWidth) * this.currentScale);
                    var k = {
                            x: g,
                            y: h,
                            offset: {
                                dx: 0,
                                dy: 0
                            }
                        },
                        l = e.extend({
                            dx: 0,
                            dy: 0
                        }, this._zoomOffset),
                        g = c.offset || this.zoomFocusOffset(a, g, h),
                        m = g.dx - l.dx,
                        q = g.dy - l.dy;
                    d && (k.transform = !0, this._isMobile && (this.leftPage() && this.leftPage().css("-webkit-transform", "translateZ(0)"), this.rightPage() && this.rightPage().css("-webkit-transform", "translateZ(0)")));
                    e(this).animate({
                        _zoomAnimating: a
                    }, {
                        duration: b,
                        easing: c.easing || this.opts.zoomEasing,
                        complete: function() {
                            f._zoomAnimating = !1;
                            f._zoom(a);
                            c.callback && c.callback.apply(this);
                            this.pdf &&
                                this.pdfUpdateRender();
                            if (f.onZoom) f.onZoom(f)
                        },
                        step: function(a, b) {
                            k.offset.dx = l.dx + m * b.pos;
                            k.offset.dy = l.dy + q * b.pos;
                            f._zoom(a, k)
                        }
                    })
                }
        },
        zoomFinished: function() {
            this.zoomWindow.css({
                overflow: "visible",
                width: this.zoomContent.width() * this.currentScale,
                height: this.zoomContent.height() * this.currentScale,
                marginLeft: 0,
                marginTop: 0
            });
            this.zoomContent.css({
                left: 0,
                top: 0,
                marginLeft: 0,
                marginTop: 0
            });
            this._zoomOffset = {
                dx: 0,
                dy: 0
            };
            this.elem.find("img").each(function() {
                var a = e(this);
                void 0 == a.data("wowbook-draggable-before-zoom") ?
                    a.removeAttr("draggable") : a.attr("draggable", a.data("wowbook-draggable-before-zoom"))
            })
        },
        zoomReset: function(a, b) {
            e.isPlainObject(a) && (b = a, a = b.duration);
            b || (b = {});
            this._zoomDataRAF = null;
            b.offset = {
                dx: 0,
                dy: 0
            };
            b.resetting = !0;
            b.force = !0;
            b.callback = function() {
                this.zoomContent.css({
                    left: 0,
                    top: 0
                });
                this.zoomed = !1
            };
            this.zoom(1, a, b)
        },
        zoomIn: function(a, b) {
            e.isPlainObject(a) && (b = a, a = void 0);
            this.zoom(this.zoomLevel + (a || this.zoomStep), b)
        },
        zoomOut: function(a, b) {
            e.isPlainObject(a) && (b = a, a = void 0);
            this.zoom(this.zoomLevel -
                (a || this.zoomStep), b)
        },
        zoomFocusOffset: function(a, b, c, d, g) {
            d || (d = this._zoomOffset || {
                dx: 0,
                dy: 0
            });
            d = e.extend({
                dx: 0,
                dy: 0
            }, d);
            var f = d.dx || 0,
                h = d.dy || 0;
            g = a / (g || this.zoomLevel);
            b -= f;
            c -= h;
            a = b * g;
            g *= c;
            d.dx = f - (a - b);
            d.dy = h - (g - c);
            return {
                dx: f - (a - b),
                dy: h - (g - c)
            }
        },
        zoomTouchSupport: function() {
            if (this.opts.touchEnabled) {
                if (e.browser.ie8mode || e.browser.ie7) return this.zoomDragSupportForIE();
                var a = this,
                    b, c, d;
                a._hammer = new Hammer(a.zoomContent[0], a.opts.touch);
                var g = a._hammer;
                g.on("panstart pinchstart", function(b) {
                    a.zoomContent.addClass("wowbook-dragging")
                });
                g.on("hammer.input", function(b) {
                    if (a.zoomContent.hasClass("wowbook-draggable") && (e(b.target).is("img") && "mousedown" == b.srcEvent.type && b.preventDefault(), b.isFinal && a.zoomContent.hasClass("wowbook-dragging"))) {
                        c = d = null;
                        a.zoomContent.removeClass("wowbook-dragging");
                        b = a.zoomLevel;
                        var f = a._zoomDataRAF,
                            g = f ? f.level : b;
                        g < a.zoomMin || g == a.zoomMin && (a._zoomOffset.dx || a._zoomOffset.dy) ? f ? f.callback = function() {
                            a.zoomReset()
                        } : a.zoomReset() : (a._zoom(b, {
                            force: !0,
                            offset: a._zoomOffset
                        }), a.pdf && a.pdfUpdateRender())
                    }
                });
                g.on("panstart panmove", function(b) {
                    a.zoomed && (b.preventDefault(), d = null, c || (c = {
                        offset: e.extend({}, a._zoomOffset),
                        pageX: b.center.x,
                        pageY: b.center.y
                    }), a._zoomDataRAF = {
                        level: a.zoomLevel,
                        options: {
                            force: !0,
                            offset: {
                                dx: c.offset.dx + (b.center.x - c.pageX),
                                dy: c.offset.dy + (b.center.y - c.pageY)
                            }
                        }
                    })
                });
                g.on("pinchmove pinchstart", function(f) {
                    f.preventDefault();
                    c = null;
                    var g = f.center.x,
                        k = f.center.y;
                    if (!d) {
                        if (a.currentFlip && !a.currentFlip.finished) return;
                        b = a.elem.offset();
                        d = {
                            level: a.zoomLevel,
                            pageX: g,
                            pageY: k,
                            x: g - (b.left -
                                e(window).scrollLeft()),
                            y: k - (b.top - e(window).scrollTop()),
                            offset: e.extend({}, a._zoomOffset),
                            useTransform: a.opts.zoomUsingTransform
                        }
                    }
                    f = d.level * f.scale;
                    f > a.zoomMax && (f = a.zoomMax);
                    var l = a.zoomFocusOffset(f, d.x, d.y, d.offset, d.level);
                    l.dx += g - d.pageX;
                    l.dy += k - d.pageY;
                    a._zoomDataRAF = {
                        level: f,
                        options: {
                            force: !0,
                            offset: l
                        }
                    }
                });
                a.opts.pinchToZoom && (g.get("pinch").set({
                    enable: !0
                }), g.get("pinch").recognizeWith("pan"));
                this.opts.doubleClickToZoom && (g.get("doubletap").set({
                    posThreshold: 50
                }), g.on("doubletap", function(b) {
                    b.preventDefault();
                    var c = a.elem.offset(),
                        d = b.center.x - c.left;
                    b = b.center.y - c.top;
                    a.zoomed ? a.zoomReset() : a.zoomIn(1, {
                        x: d,
                        y: b
                    })
                }))
            }
        },
        zoomDragSupportForIE: function() {
            var a = this,
                b, c = function(c) {
                    a._zoomDataRAF = {
                        level: a.zoomLevel,
                        options: {
                            force: !0,
                            offset: {
                                dx: b.offset.dx + (c.pageX - b.pageX),
                                dy: b.offset.dy + (c.pageY - b.pageY)
                            }
                        }
                    };
                    return !1
                },
                d = function(b) {
                    b = a.zoomLevel;
                    (b < a.zoomMin || b == a.zoomMin && (a._zoomOffset.dx || a._zoomOffset.dy)) && a.zoomReset();
                    e(document).unbind("mousemove.wowbook", c);
                    e(document).unbind("mouseup.wowbook", d)
                };
            a.zoomContent.bind("mousedown.wowbook", function(g) {
                if (a.zoomed) return b = {
                    offset: e.extend({}, a._zoomOffset),
                    pageX: g.pageX,
                    pageY: g.pageY
                }, e(document).bind("mousemove.wowbook", c).bind("mouseup.wowbook", d), !1
            })
        },
        detectBestZoomMethod: function(a, b, c) {
            if (void 0 != this.opts.zoomUsingTransform) return this.opts.zoomUsingTransform ? "transform" : "zoom";
            void 0 === a && (a = e.wowBook.support.transform);
            void 0 === c && (c = e.browser.ie8mode);
            a = e.browser.chrome || e.browser.webkit || e.browser.safari || e.browser.opera || c || !a;
            this.opts.zoomUsingTransform = !a;
            return a ? "zoom" : "transform"
        },
        setupFullscreen: function() {
            if (C) {
                var a = this,
                    b = "fullscreenerror mozfullscreenerror webkitfullscreenerror MSFullscreenError ";
                var c = "fullscreenchange mozfullscreenchange webkitfullscreenchange MSFullscreenChange ".replace(/ /g, ".wowbook ");
                b = b.replace(/ /g, ".wowbook ");
                this._fullscreenChangeHandler = function() {
                    var b = !!F();
                    e(a.opts.fullscreenElement).toggleClass("fullscreen wowbook-fullscreen-fix", b);
                    a.elem.toggleClass("fullscreen", b);
                    a.toggleControl("fullscreen", b);
                    a.elem.trigger("resize")
                };
                e(document).on(c, this._fullscreenChangeHandler);
                this._fullscreenErrorHandler = function() {
                    var b;
                    a.opts.onFullscreenError && (b = a.opts.onFullscreenError.apply(this, arguments));
                    !1 !== b && ("string" == typeof b ? alert(b) : a.opts.onFullscreenErrorMessage && alert(a.opts.onFullscreenErrorMessage))
                };
                e(document).on(b, this._fullscreenErrorHandler)
            } else e("html").addClass("no-fullscreen")
        },
        enterFullscreen: function(a) {
            a = e(a || this.opts.fullscreenElement)[0];
            C.call(a || B)
        },
        exitFullscreen: function() {
            D.call(m)
        },
        toggleFullscreen: function() {
            F() ?
                this.exitFullscreen() : this.enterFullscreen()
        },
        positionBookShadow: function() {
            var a = this.pages.length,
                b = !(!this.opts.bookShadow || !a || 3 > a && this.holdedPage);
            this.bookShadow.toggle(b);
            if (b) {
                var b = this.pageWidth,
                    c = this.holdedPageBack,
                    d = !!c && c.onRight && c.pageIndex == (this.rtl ? a - 1 : 0),
                    c = !!c && c.onLeft && c.pageIndex == (this.rtl ? 0 : a - 1),
                    a = !this.leftPage() || d,
                    c = !this.rightPage() || c,
                    d = a != c;
                if (a && c) this.bookShadow.hide();
                else {
                    var c = this.opts.zoomUsingTransform ? this.currentScale * this.zoomLevel : 1,
                        e = this.elem.is(":visible") ?
                        this.pagesContainer.position().left : parseFloat(this.pagesContainer.css("left")) || 0;
                    this.translate(this.bookShadow, (a ? b : 0) + e / c, 0);
                    this.bookShadow.css({
                        width: d ? b : 2 * b
                    })
                }
            }
        },
        playFlipSound: function() {
            if (this.flipSound) {
                var a = this.opts.onPlayFlipSound;
                e.isFunction(a) && !1 === a(this) || (this.audio || (this.audio = this.createAudioPlayer()), this.audio && this.audio.play && this.audio.play())
            }
        },
        toggleFlipSound: function(a) {
            arguments.length || (a = !this.flipSound);
            this.flipSound = a;
            this.toggleControl("flipSound", !a)
        },
        createAudioPlayer: function(a,
            b) {
            a || (a = this.opts.flipSoundPath);
            b || (b = this.opts.flipSoundFile);
            for (var c = [], d = 0, g = b.length; d < g; d++) c.push('<source src="' + a + b[d] + '">');
            return e("<audio preload>" + c.join("") + "</audio>")[0]
        },
        _untouch: function(a) {
            return a.originalEvent.touches && a.originalEvent.touches[0] || a
        },
        touchSupport: function() {
            var a = this;
            a.elem.bind("touchstart.wowbook", function(b) {
                var c = b.originalEvent.touches;
                1 < c.length || (a._touchStarted = {
                        x: c[0].pageX,
                        y: c[0].pageY,
                        timestamp: b.originalEvent.timeStamp,
                        inHandle: e(b.target).hasClass("wowbook-handle")
                    },
                    a._touchStarted.inHandle && a.pageEdgeDragStart(a._untouch(b)))
            });
            e(document).on("touchmove.wowbook", function(b) {
                if (a._touchStarted) {
                    var c = b.originalEvent.touches;
                    a._touchEnded = {
                        x: c[0].pageX,
                        y: c[0].pageY,
                        timestamp: b.originalEvent.timeStamp
                    };
                    if (a._touchStarted.inHandle) return a.pageEdgeDrag(a._untouch(b));
                    a.opts.allowDragBrowserPageZoom && 1 != document.documentElement.clientWidth / window.innerWidth || b.preventDefault()
                }
            });
            e(document).on("touchend.wowbook touchcancel.wowbook", function(b) {
                if (a._touchStarted) {
                    !a._touchEnded &&
                        e(b.target).hasClass("wowbook-handle") && (b = e(b.target).data("corner"), "r" === b && a.gotoRight(), "l" === b && a.gotoLeft());
                    b = a._touchStarted;
                    var c = a._touchEnded || a._touchStarted;
                    a._touchStarted = null;
                    a._touchEnded = null;
                    if (!a.zoomed) {
                        if (b.inHandle) return a.pageEdgeDragStop({
                            pageX: c.x
                        }), !1;
                        var d = c.x - b.x,
                            g = c.timestamp - b.timestamp;
                        if (!(20 > Math.abs(d) || g > a.opts.swipeDuration) && Math.abs(d) > Math.abs(c.y - b.y)) return 0 > d ? a.gotoRight() : a.gotoLeft(), !1
                    }
                }
            })
        },
        pageEdgeDragStart: function(a) {
            if (!this.zoomed) {
                if (this.animating &&
                    !this.curledPage || !e(a.target).hasClass("wowbook-handle")) return !1;
                var b = this,
                    c = b.origin.offset();
                this.opts.zoomUsingTransform || (c.left *= this.currentScale);
                b.elem.addClass("wowbook-unselectable");
                b.mouseDownAtLeft = (a.pageX - c.left) / this.currentScale < b.pageWidth;
                b.pageGrabbed = b.mouseDownAtLeft ? b.leftPage() : b.rightPage();
                if (!b.pageGrabbed) return !1;
                this.uncurl(!0);
                b.pageGrabbedOffset = b.pageGrabbed.offset();
                b._dragging = !0;
                this.opts.zoomUsingTransform && (b.pageGrabbedOffset.left /= this.currentScale, b.pageGrabbedOffset.top /=
                    this.currentScale);
                c = a.pageX / this.currentScale - this.pageGrabbedOffset.left;
                a = a.pageY / this.currentScale - this.pageGrabbedOffset.top;
                this.stopAnimation(!1);
                var d = b.mouseDownAtLeft ? "l" : "r";
                this.holdPage(this.pageGrabbed, c, a);
                this.flip(c, a, this.pageGrabbed, {
                    corner: d
                });
                e(document).bind("mousemove.wowbook", function(a) {
                    return b.pageEdgeDrag(a)
                }).bind("mouseup.wowbook", function(a) {
                    return b.pageEdgeDragStop(a)
                });
                return !1
            }
        },
        pageEdgeDrag: function(a) {
            if (!this._dragging) return !1;
            var b = a.pageX / this.currentScale -
                this.pageGrabbedOffset.left;
            a = a.pageY / this.currentScale - this.pageGrabbedOffset.top;
            var c = this.mouseDownAtLeft ? "l" : "r";
            this.stopAnimation(!1);
            this.flip(b, a, this.pageGrabbed, {
                corner: c,
                dragging: !0
            });
            return !1
        },
        pageEdgeDragStop: function(a) {
            if (!this._dragging) return !1;
            var b = this.origin.offset();
            this.opts.zoomUsingTransform || (b.left *= this.currentScale);
            var c = (a.pageX - b.left) / this.currentScale;
            a = (a.pageX - b.left) / this.currentScale < this.pageWidth;
            this.elem.removeClass("wowbook-unselectable");
            this._cantStopAnimation ||
                this.stopAnimation(!1);
            this._singlePage ? this.pageGrabbed.onLeft ? c > this.pageWidth / 2 ? this.pageGrabbed.pageIndex == this.currentPage ? this.rtl ? this.advance() : this.back() : (c = this.pageGrabbed.pageIndex + (this.rtl ? 1 : -1), this.gotoPage(c)) : this.releasePage(this.pageGrabbed, !0) : c < this.pageWidth + this.pageWidth / 2 ? this.pageGrabbed.pageIndex == this.currentPage ? this.rtl ? this.back() : this.advance() : (c = this.pageGrabbed.pageIndex + (this.rtl ? -1 : 1), this.gotoPage(c)) : this.releasePage(this.pageGrabbed, !0) : this.mouseDownAtLeft &&
                !a ? this.rtl ? this.advance() : this.back() : !this.mouseDownAtLeft && a ? this.rtl ? this.back() : this.advance() : this.releasePage(this.pageGrabbed, !0);
            this._dragging = !1;
            e(document).unbind("mousemove.wowbook mouseup.wowbook")
        },
        curl: function(a, b) {
            if (!(this.curledPage || this.holdedPage || this.zoomed)) {
                void 0 == a && (a = this.currentPage);
                if ("number" == typeof a || "string" == typeof a) a = this.pages[+a];
                if (a && !a.isCurled) {
                    a.isCurled = !0;
                    this.curledPage = a;
                    var c = this.pageIsOnTheLeft(a.pageIndex),
                        d = c ? 0 : this.pageWidth,
                        e = b ? this.pageHeight -
                        1 : 2;
                    this.flip({
                        from: [d, e],
                        to: [d + this.opts.curlSize * (c ? 1 : -1), e + this.opts.curlSize * (b ? -1 : 1)],
                        corner: (b ? "b" : "t") + (c ? "l" : "r"),
                        page: a,
                        duration: 400
                    })
                }
            }
        },
        uncurl: function(a, b) {
            if (this.curledPage) {
                1 == a && (b = !0, a = void 0);
                void 0 == a && (a = this.curledPage || this.currentPage);
                if ("number" == typeof a || "string" == typeof a) a = this.pages[+a];
                a.isCurled && (this.stopAnimation(!1), this.releasePage(a, !b, void 0, 400), a.isCurled = !1, this.curledPage = null)
            }
        },
        initThumbnails: function() {
            var a = this.opts;
            this.thumbnails = [];
            var b = this.thumbnailsContainer =
                e("<div class='wowbook-thumbnails'>").append("<div class='wowbook-wrapper'><a class='wowbook-back wowbook-button wowbook-control wowbook-control-back'/><div class='wowbook-clipper'><ul></ul></div><a class='wowbook-next wowbook-button wowbook-control wowbook-control-next' /></div>").css("display", "none").css("transform", "translateZ(0)").appendTo(e(a.thumbnailsParent));
            this.thumbnailsList = b.find("ul");
            this.thumbnailsClipper = b.find(".wowbook-clipper");
            a.thumbnailsContainerWidth && b.width(a.thumbnailsContainerWidth);
            a.thumbnailsContainerHeight && b.height(a.thumbnailsContainerHeight);
            var c = a.thumbnailsPosition;
            if ("left" == c || "right" == c) a.thumbnailsVertical = !0, "right" == c && b.css({
                position: "absolute",
                left: "auto",
                right: "0px"
            });
            if ("top" == c || "bottom" == c) a.thumbnailsVertical = !1, "bottom" == c && b.css({
                position: "absolute",
                top: "auto",
                bottom: "0px"
            });
            b.addClass(a.thumbnailsVertical ? "wowbook-vertical" : "wowbook-horizontal");
            b.toggleClass("wowbook-closable", this.closable);
            var d = this,
                g = a.thumbnailsVertical ? "height" : "width";
            this.thumbnailsBackButton =
                b.find(".wowbook-back.wowbook-button").click(function() {
                    d._moveThumbnailsList(d.thumbnailsClipper[g]())
                });
            this.thumbnailsNextButton = b.find(".wowbook-next.wowbook-button").click(function() {
                d._moveThumbnailsList(-d.thumbnailsClipper[g]())
            });
            this.thumbnailsClipper.css("transform", "translateZ(0)");
            0 == this.scrollBarWidth() && this.thumbnailsClipper.css("overflow", "auto")
        },
        destroyThumbnails: function() {
            this.thumbnailsContainer && this.thumbnailsContainer.remove();
            this.thumbnails = this._thumbnailsPos = this.thumbnailsContainer =
                null
        },
        scrollBarWidth: function() {
            var a = e("<div style='display: inline-block;position: absolute;left:-1000px;'>Hi!</div>").appendTo("body"),
                b = a.width();
            a.css("overflow", "scroll");
            var c = a.width();
            a.remove();
            return c - b
        },
        createThumbnails: function() {
            this.thumbnails || this.initThumbnails();
            var a = this.thumbnailConfig();
            this.thumbnails = [];
            this._customThumbnail = !1;
            for (var b = 0, c = this.pages.length; b < c; b++) {
                var d = this.createThumbnail(b, a);
                d.src && (this._customThumbnail = !0);
                this.thumbnailsList.append(d);
                this.thumbnails.push(d)
            }
            if (this.rtl)
                for (d =
                    this.thumbnailsList.children(), d.eq(0).addClass("wowbook-right").removeClass("wowbook-left"), b = 1, c = d.length; b < c; b += 2) d.eq(b).insertAfter(d.eq(b + 1));
            b = this.thumbnailsContainer;
            b.width() || b.width(2 * a.width);
            this.setStyle(this.opts.styles || this.opts.style)
        },
        thumbnailConfig: function() {
            var a = {},
                b = e('<div class="wowbook-thumbnail" style="display:none;position:absolute;line-height:0px;font-size:0px;">').prependTo(this.thumbnailsContainer),
                c = this.opts.thumbnailHeight || (2 >= b.height() ? 0 : b.height()),
                d = this.opts.thumbnailWidth ||
                b.width(),
                g = d / this.pageWidth || c / this.pageHeight || this.opts.thumbnailScale;
            b.remove();
            this.thumbnailScale = g;
            a.width = d || Math.floor(this.pageWidth * g);
            a.height = c || Math.floor(this.pageHeight * g);
            a.cloneCSS = {
                display: "block",
                left: 0,
                top: 0,
                position: "relative",
                transformOrigin: "0 0"
            };
            e.wowBook.support.transform ? a.cloneCSS.transform = "scale(" + g + ")" : a.cloneCSS.zoom = g;
            this.differentPageSizes && (b = this.opts.pageWidth ? g * this.pageWidth / this.opts.pageWidth : this.opts.pageHeight ? g * this.pageHeight / this.opts.pageHeight : this.opts.thumbnailScale,
                a.scaleInternalPage = e.wowBook.support.transform ? {
                    transform: "scale(" + b + ")"
                } : {
                    zoom: b
                });
            return a
        },
        createThumbnail: function(a, b) {
            var c = this.pages[a];
            if (c) {
                b || (b = this.thumbnailConfig());
                var d = e('<li class="wowbook-thumbnail"><div class="wowbook-overlay">').addClass(this.pageIsOnTheLeft(a) ? "wowbook-left" : "wowbook-right").css({
                        width: b.width,
                        height: b.height
                    }),
                    g = c.find(".wowbook-page-content");
                (g = g.data("thumb") || g.data("thumbnail")) ? (d.addClass("wowbook-thumbnail-custom"), d.src = g) : this.opts.thumbnailsSprite ?
                    d.css("background", 'url("' + this.opts.thumbnailsSprite + '") no-repeat 0px -' + a * b.height + "px") : this.opts.thumbnailsImages ? d.addClass("wowbook-thumbnail-custom") : (g = c.clone(), g.hasClass("wowbook-page-holded") && (this.resetPage(g), g.find(".wowbook-fold-gradient-container").remove()), g.css(b.cloneCSS), b.scaleInternalPage && !c.isCover && g.css(b.scaleInternalPage), d.prepend(g));
                var f = this;
                d.click(function() {
                    f.gotoPage(a);
                    f.hideThumbnails()
                });
                return d
            }
        },
        updateThumbnail: function(a, b) {
            if (this.thumbnails) {
                var c =
                    this.thumbnails[a];
                if (c) {
                    var d = this.createThumbnail(a, b);
                    if (d) {
                        c.width(d.width());
                        c.height(d.height());
                        if (!this.opts.thumbnailsSprite)
                            if (this.opts.thumbnailsImages || c.src) {
                                var e = c.src || this.thumbnailImageSrc(a);
                                if (c.loadedImage != e) {
                                    c.addClass("wowbook-loading");
                                    var f = new Image;
                                    f.onload = function() {
                                        c.removeClass("wowbook-loading");
                                        c.css("background-image", 'url("' + e + '")');
                                        c.loadedImage = e
                                    };
                                    f.src = e
                                }
                            } else this.pdfDoc ? this.pdfRenderThumbnail(a, c, b) : c.children(":not(.wowbook-overlay)").replaceWith(d.children(":not(.wowbook-overlay)"));
                        c.width(d.width());
                        c.height(d.height())
                    }
                }
            }
        },
        updateThumbnails: function() {
            if (this.thumbnails) {
                for (var a = this.thumbnailConfig(), b = 0, c = this.pages.length; b < c; b++) this.updateThumbnail(b, a);
                b = this.thumbnailsContainer;
                b.width() || b.width(2 * a.width);
                this.thumbnailsContainer.toggleClass("wowbook-closable", this.closable)
            } else this.createThumbnails()
        },
        thumbnailImageSrc: function(a) {
            if (!(0 > a || a > this.pages.length - 1)) return this.replaceNumberHolder(this.opts.thumbnailsImages, a)
        },
        _moveThumbnailsList: function(a, b) {
            var c =
                this.thumbnailsList.position()[this.opts.thumbnailsVertical ? "top" : "left"];
            this._setThumbnailsListPosition(c + a, b)
        },
        _setThumbnailsListPosition: function(a, b) {
            var c = this.opts.thumbnailsVertical,
                d = c ? "height" : "width",
                g = this.thumbnailsClipper[d](),
                d = -this.thumbnailsList[d]() + g;
            a < d && (a = d);
            0 < a && (a = 0);
            this.thumbnailsBackButton.toggleClass("wowbook-disabled", 0 == a || 0 < d);
            this.thumbnailsNextButton.toggleClass("wowbook-disabled", a == d || 0 < d);
            void 0 == b && (b = e.extend({}, this.opts.thumbnailsAnimOptions));
            var f = this;
            e.isNumeric(b) &&
                (b = {
                    duration: b
                });
            b.step = c ? function(a) {
                f.thumbnailsClipper.scrollTop(a)
            } : function(a) {
                f.thumbnailsClipper.scrollLeft(a)
            };
            b.complete = function() {
                (f.pdfDoc || f.opts.thumbnailsImages || f._customThumbnail) && f.updateVisibleThumbnails()
            };
            this._tb = this.thumbnailsClipper[c ? "scrollTop" : "scrollLeft"]();
            e(this).stop();
            e(this).animate({
                _tb: -a
            }, b)
        },
        updateVisibleThumbnails: function() {
            var a = this.opts.thumbnailsVertical,
                b = a ? "top" : "left",
                c = a ? "height" : "width";
            if (!this._thumbnailsPos)
                for (this._thumbnailsPos = [], a = 0; a < this.thumbnails.length; a++) this._thumbnailsPos[a] =
                    this.thumbnails[a].position()[b];
            for (var d = this._thumbnailsPos, b = -this.thumbnailsList.position()[b], c = b + this.thumbnailsClipper[c](), e, f, a = 0; a < this.thumbnails.length; a++) void 0 == e && d[a] > b && (e = a), void 0 == f && d[a] > c && (f = a);
            e || (e = 0);
            f || (f = this.thumbnails.length - 1);
            this.pdfDoc && (this.pdfCancelRenderThumbnail(0, e), this.pdfCancelRenderThumbnail(f, this.thumbnails.length));
            for (a = e - 2; a <= f; a++) this.updateThumbnail(a)
        },
        showThumbnail: function(a, b) {
            if (this.thumbnails && this.thumbnailsContainer.is(":visible")) {
                void 0 ==
                    a && (a = this.currentPage);
                0 < a && this.pageIsOnTheRight(a) && a--;
                var c = this.opts.thumbnailsVertical,
                    d = c ? "top" : "left",
                    e = c ? "height" : "width",
                    f = this.thumbnails[a],
                    h = this.thumbnailsClipper,
                    c = h[e]() / 2 - f[e]() / (c ? 2 : 1),
                    d = f.offset()[d] - h.offset()[d];
                this._moveThumbnailsList(c - d, b)
            }
        },
        showThumbnails: function(a) {
            this.thumbnails && this.thumbnails.length || this.createThumbnails();
            this.thumbnailsContainer.fadeIn(void 0 != a ? a : this.opts.thumbnailsAnimOptions);
            this.showThumbnail(void 0, 0)
        },
        hideThumbnails: function(a) {
            this.thumbnailsContainer.fadeOut(void 0 !=
                a ? a : this.opts.thumbnailsAnimOptions)
        },
        toggleThumbnails: function(a) {
            e(this.thumbnailsContainer).is(":visible") ? this.hideThumbnails(a) : this.showThumbnails(a)
        },
        setPDF: function(a) {
            this.pdf = a;
            this.pdfRenderQueue = [];
            this.pdfPageRendering = !1;
            this.opts.zoomUsingTransform = !0;
            this.zoomContent.css("zoom", 1);
            1 != this.currentScale && this.scale(this.currentScale);
            this.elem.addClass("wowbook-pdf");
            this.removePages();
            null == this.opts.pagesInMemory && (this.opts.pagesInMemory = 6);
            var b = this;
            this.pdfCSS_UNITS = 96 / 72;
            b.opts.pdfTextSelectable &&
                this.zoomContent.css("-webkit-user-select", "text");
            PDFJS.cMapPacked = this.opts.pdfcMapPacked;
            PDFJS.cMapUrl = this.opts.pdfcMapUrl;
            PDFJS.getDocument(a).then(function(a) {
                b.pdfDoc = a;
                b.currentPage = b.startPage;
                a.getPage(1).then(function(c) {
                    for (var d = 0; d < a.numPages; d++) b.insertPage("<div>", !0);
                    b.opts.pdfFind && b.pdfFindSetup();
                    b.pdfBuildLinkService();
                    b._pdfFindController && b._pdfFindController.resolveFirstPage();
                    b.opts.toc || b.pdfOutline();
                    b.updateBook(!0);
                    c = c.getViewport(1 * b.pdfCSS_UNITS * b.opts.pdfScale);
                    b.pdfHeight =
                        c.height;
                    b.pdfWidth = c.width;
                    b.pdfViewport = c;
                    b._originalHeight = null;
                    b._originalWidth = null;
                    b.setDimensions(2 * b.pdfWidth, b.pdfHeight);
                    1 != b.opts.zoomLevel && b.zoom(b.opts.zoomLevel, {
                        duration: 0
                    })
                })
            }, b.opts.onPDFLoadError || function(a) {
                e(b.pages[0] || b.elem).html(a.message);
                console && console.log && console.log(a)
            })
        },
        pdfBuildLinkService: function() {
            var a = this;
            this.pdfLinkService = {
                navigateTo: function() {
                    a.pdfNavigateTo.apply(a, arguments)
                },
                getDestinationHash: function(a) {
                    return this.getAnchorUrl("")
                },
                getAnchorUrl: function(a) {
                    return a
                }
            };
            return this._pdfLinkService
        },
        pdfResetPages: function() {
            this.updateBook(!0);
            for (var a = 0; a < this.pages.length; a++) this.unloadPage(this.pages[a]);
            a = this.opts.pdfUpdateRender;
            this.opts.pdfUpdateRender = !1;
            this._reponsiveApplied ? this.elem.trigger("resize") : this.opts.scaleToFit && this.scaleToFit();
            this.showPage(this.currentPage);
            this.opts.pdfUpdateRender = a;
            this.positionBookShadow()
        },
        pdfLoadPage: function(a, b) {
            var c = e("<canvas>");
            this.opts.pdfProgressiveRender && c.appendTo(this.pages[a].find(".wowbook-page-content"));
            this.pdfRenderPage(a, c[0], this.finishPageLoading)
        },
        pdfRenderPage: function(a, b, c, d, g) {
            if (this.pdfPageRendering) this.pdfQueueRenderPage(a, b, c, d, g);
            else {
                this.pdfPageRendering = !0;
                var f = this;
                this.pdfDoc.getPage(a + 1).then(function(h) {
                    d || (d = f.pdfFindScaleToFit());
                    var k = h.getViewport(d * f.pdfCSS_UNITS * f.opts.pdfScale),
                        l = f.pages[a],
                        m = !1,
                        q = !1;
                    if (f.opts.pdfUpdateRender && "thumb" != g) {
                        var n = f.currentScale * f.zoomLevel * f.opts.pdfPixelRatio,
                            k = l.pageWidth * n,
                            z = h.getViewport(1),
                            k = h.getViewport(k / z.width);
                        b ? e(b).addClass("wowbook-pdf-zoom-" +
                            n).css({
                            transform: "scale(" + 1 / n + ")",
                            "transform-origin": "0 0 0"
                        }) : (b = l.find(".wowbook-pdf-zoom-" + n), q = b.length, b.length || (b = e("<canvas>").addClass("wowbook-pdf-zoom-" + n), b.css({
                            transform: "scale(" + 1 / n + ")",
                            "transform-origin": "0 0 0"
                        }), m = !0), b = b[0])
                    }
                    q || (b.height = k.height, b.width = k.width);
                    n = {
                        canvasContext: b.getContext("2d"),
                        viewport: k
                    };
                    k = function() {
                        m && !e(b).parent().length && e(b).appendTo(l.find(".wowbook-page-content"));
                        c && c.call(f, f.pages[a], b);
                        if ("thumb" != g) {
                            l.find("canvas").not(b).remove();
                            if (!l.find(".wowbook-pdf-annotations").length) {
                                var d =
                                    e('<div class="wowbook-pdf-annotations">').appendTo(l.find(".wowbook-page-content"));
                                f.pdfAnnotations(h, f.pdfViewport, d)
                            }
                            f.opts.pdfTextSelectable && !l.textLayer && "thumb" != g && f.pdfTextLayer(h, a, f.pdfViewport)
                        }
                        f.pdfPageRendering = !1;
                        f.pdfDequeueRenderPage()
                    };
                    q ? k() : h.render(n).then(k, function() {})
                })
            }
        },
        pdfUpdateRender: function(a) {
            if (this.opts.pdfUpdateRender) {
                var b = this.pages[this.currentPage],
                    c = this.otherPage(this.currentPage);
                b && this.pdfRenderPage(b.pageIndex, void 0, a);
                void 0 != c && this.pdfRenderPage(c,
                    void 0, a)
            }
        },
        pdfAnnotations: function(a, b, c) {
            var d = this;
            a.getAnnotations().then(function(e) {
                b = b.clone({
                    dontFlip: !0
                });
                PDFJS.AnnotationLayer.render({
                    viewport: b,
                    div: c[0],
                    annotations: e,
                    page: a,
                    linkService: d.pdfLinkService
                });
                c.find("a").attr("target", "_blank")
            })
        },
        pdfTextLayer: function(a, b, c, d) {
            if (!d) {
                var g = this.pages[b];
                d = g.find(".wowbook-pdf-text");
                d.length || (d = e('<div class="wowbook-pdf-text">').appendTo(g.find(".wowbook-page-content")))
            }
            var f = new PDFJS.TextLayerBuilder({
                textLayerDiv: d[0],
                pageIndex: b,
                viewport: c,
                findController: this._pdfFindController
            });
            g.textLayer = f;
            a.getTextContent({
                normalizeWhitespace: !0
            }).then(function(a) {
                f.setTextContent(a);
                f.render(PDFJS.TextLayerBuilder.TEXT_LAYER_RENDER_DELAY)
            })
        },
        pdfNavigateTo: function(a) {
            var b = this;
            b.pagesRefMap || (b.pagesRefMap = {});
            var c = function(a) {
                var d = a instanceof Object ? b.pagesRefMap[a.num + " " + a.gen + " R"] : a + 1;
                d ? b.gotoPage(d - 1) : b.pdfDoc.getPageIndex(a).then(function(d) {
                    b.pagesRefMap[a.num + " " + a.gen + " R"] = d + 1;
                    c(a)
                })
            };
            ("string" == typeof a ? this.pdfDoc.getDestination(a) :
                Promise.resolve(a)).then(function(a) {
                a instanceof Array && c(a[0])
            })
        },
        pdfRenderThumbnail: function(a, b, c) {
            this.thumbnailsContainer.addClass("wowbook-pdf");
            if ((c = this.pages[a]) && !c.loading && !b.pdf && !b.rendering) {
                b.rendering = !0;
                var d = b.find("canvas");
                d.length || (d = e("<canvas>").appendTo(b.find(".wowbook-page-content")));
                d.css("transform", "");
                this.opts.pdfProgressiveRender || d.css("display", "none");
                b.find(".wowbook-page").css({
                    width: b.width(),
                    height: b.height(),
                    zoom: 1,
                    transform: "scale(1)"
                });
                this.pdfRenderPage(a,
                    d[0],
                    function(a, c) {
                        d.css("display", "block");
                        b.rendering = !1;
                        b.pdf = !0;
                        b.find(".wowbook-pdf-text, .wowbook-pdf-annotations").remove()
                    }, this.thumbnailScale * this.opts.pdfScale, "thumb")
            }
        },
        pdfCancelRenderThumbnail: function(a, b) {
            for (var c = this.pdfRenderQueue, d = 0; d < c.length;) {
                var e = c[d][0];
                e >= a && e <= b && "thumb" == c[d][4] ? (this.thumbnails[e].rendering = !1, c.splice(d, 1)) : d++
            }
        },
        pdfQueueRenderPage: function(a, b, c, d, e) {
            this.pdfRenderQueue.push([].slice.call(arguments))
        },
        pdfDequeueRenderPage: function() {
            var a = this.pdfRenderQueue.shift();
            a && this.pdfRenderPage.apply(this, a)
        },
        pdfFindScaleToFit: function() {
            var a = this.pageWidth,
                b = this.pageHeight,
                c = this.pdfWidth / this.pdfHeight;
            b * c > a && (b = a / c);
            return b / this.pdfHeight
        },
        pdfOutline: function() {
            var a = this;
            this.pdfDoc.getOutline().then(function(b) {
                function c(a) {
                    for (var b = [], d = 0, e = a.length; d < e; d++) {
                        var k = [];
                        k[0] = PDFJS.removeNullCharacters(a[d].title);
                        k[1] = a[d].url;
                        a[d].items && a[d].items.length && (k[2] = c(a[d].items));
                        k[3] = a[d].dest;
                        b.push(k)
                    }
                    return b
                }
                b && (a.opts.toc = c(b), a.opts.displayToc && a.showToc())
            })
        },
        pdfFindSetup: function() {
            this._pdfFindController || (this.opts.pdfTextSelectable = !0, this.createFindBar(), this.pdfCreateFindController(), this.setStrings())
        },
        pdfFind: function() {
            this.pdfSearch.apply(this, arguments)
        },
        pdfFindNext: function() {
            var a = Array.prototype.slice.call(arguments);
            a[3] = !1;
            a[4] = "again";
            this.pdfSearch.apply(this, a)
        },
        pdfFindPrevious: function() {
            var a = Array.prototype.slice.call(arguments);
            a[3] = !0;
            a[4] = "again";
            this.pdfSearch.apply(this, a)
        },
        createFindControl: function(a, b) {
            b || (b = this.opts);
            var c =
                this;
            e(a).addClass("wowbook-control-find").on("click.wowbook", function(a) {
                if (!e(a.target).closest(".wowbook-findbar").length) return c.toggleFindBar(), !1
            })
        },
        toggleFindBar: function(a) {
            a || (a = e(this._pdfFindBar));
            a.hasClass("wowbook-hidden") ? (a.css("opacity", 0).removeClass("wowbook-hidden"), r(a) || a.toggleClass("wowbook-up"), a.css("opacity", 1), a.find(".wowbook-find-text").focus()) : a.addClass("wowbook-hidden")
        },
        createFindBar: function() {
            var a = e('<div id="findbar" class="wowbook-findbar wowbook-hidden"><label style="display:none">Find: </label><div class="wowbook-find-text-container"><input class="wowbook-find-text" placeholder="Text to find"><span class="wowbook-find-count"></span></div><a title="Find the previous occurrence of the phrase" class="wowbook-find-previous wowbook-control-back"><i></i><span>Previous</span></a><a title="Find the next occurrence of the phrase" class="wowbook-find-next wowbook-control-next"><i></i><span>Next</span></a><label style="display:none"><input type="checkbox" class="wowbook-find-highlight-all" checked="1"> Highlight all</label><label><input type="checkbox" class="wowbook-find-match-case"> <span>Match case</span></label><a class="wowbook-close"><i></i></a></div>').appendTo(e(this.toolbars[0]).find(".wowbook-controls"));
            this._pdfFindBar = a;
            this.setFindBarEventHandlers(a);
            this.pdfFindBarMethods(a);
            return a
        },
        setFindBarEventHandlers: function(a) {
            var b = this,
                c = function(c) {
                    c = c.data || {};
                    var d = a.find(".wowbook-find-text").val(),
                        e = a.find(".wowbook-find-match-case").prop("checked"),
                        h = a.find(".wowbook-find-highlight-all").prop("checked");
                    b.pdfSearch(d, h, e, c.previous, c.next || c.previous ? "again" : "")
                };
            a.find(".wowbook-find-text").on("input", c);
            a.find(".wowbook-find-match-case, .wowbook-find-highlight-all").on("click", c);
            a.find(".wowbook-find-previous").on("click", {
                previous: !0
            }, c);
            a.find(".wowbook-find-next").on("click", {
                next: !0
            }, c);
            a.find(".wowbook-close").on("click", function() {
                b.toggleFindBar(a)
            });
            a.find(".wowbook-find-count").on("click", function() {
                a.find(".wowbook-find-text").focus()
            })
        },
        createContainer: function(a) {
            a = this.container = e("<div class='wowbook-container'>");
            var b = this.opts,
                c = e.wowBook.defaults;
            a.prependTo(this.elem.parent());
            this.containerBook = e("<div class='wowbook-book-container'>").appendTo(a).append(this.elem);
            this.containerToolbar = e("<div class='wowbook-toolbar-container'>").appendTo(a);
            b.containerWidth && a.css("width", b.containerWidth);
            b.containerHeight && a.css("height", b.containerHeight);
            b.containerBackground && a.css("background", b.containerBackground);
            b.containerPadding && this.containerBook.css("padding", b.containerPadding);
            b.thumbnailsParent == c.thumbnailsParent && (b.thumbnailsParent = a);
            b.tocParent == c.tocParent && (b.tocParent = a);
            b.fullscreenElement == c.fullscreenElement && (b.fullscreenElement = a);
            b.scaleToFit || (b.scaleToFit = this.containerBook);
            "window" != b.container && b.container != window ||
                a.addClass("wowbook-container-full");
            b.toolbar && (b.toolbarParent == c.toolbarParent && (b.toolbarParent = this.containerToolbar), this._isMobile && (b.toolbarPosition = "bottom"));
            this._isMobile && a.addClass("wowbook-mobile")
        },
        destroyContainer: function() {
            this.container && (this.container.replaceWith(this.elem), this.container = void 0)
        },
        updateContainer: function() {
            var a = this.opts;
            var b = 0;
            this.opts.responsiveToolbar && this.updateResponsiveToolbar();
            a.toolbarParent == this.containerToolbar && ((b = "top" == a.toolbarPosition) &&
                !this.containerToolbar.is(".wowbook-top") && this.containerToolbar.insertBefore(this.containerBook), !b && this.containerToolbar.is(".wowbook-top") && this.containerToolbar.insertAfter(this.containerBook), this.containerToolbar.toggleClass("wowbook-top", b), b = e(this.toolbars[0]).outerHeight(!0));
            b = this.container.height() - b;
            this.containerBook.outerHeight(b);
            if (!a.conteinerHeight) {
                this.elem.css("top", this.elem.css("top"));
                var c = this;
                setTimeout(function() {
                    c.elem.css("top", "")
                }, 0)
            }
            e.wowBook.support.transform ||
                this.elem.css("top", "auto");
            this.mobileToolbar && this.updateMobileToolbar()
        },
        lightbox: function(a) {
            this._lightboxElem = e("<div class='wowbook-lightbox'>").appendTo("body").addClass(this.opts.lightboxClass);
            this._lightboxBookContainer = e("<div class='wowbook-book-container'>").appendTo(this._lightboxElem);
            this._lightboxOverlay = this.opts.lightboxOverlay ? e("<div class='wowbook-lightbox-overlay'>").appendTo("body") : e();
            this.opts.thumbnailsParent = this._lightboxElem;
            this.opts.tocParent = this._lightboxElem;
            this.opts.fullscreenElement =
                this._lightboxElem;
            this.opts.lightboxResponsive && (this.opts.scaleToFit = this._lightboxBookContainer, this.responsive());
            this._isMobile && this._lightboxElem.addClass("wowbook-mobile");
            this.opts.lightboxBackground && this._lightboxElem.css("background", this.opts.lightboxBackground);
            this.opts.lightboxColor && this._lightboxElem.css("backgroundColor", this.opts.lightboxColor);
            this.opts.lightboxOverlayColor && this._lightboxOverlay.css("backgroundColor", this.opts.lightboxOverlayColor);
            this._lightboxElem.css({
                width: this.opts.lightboxWidth,
                height: this.opts.lightboxHeight
            });
            this.elem.appendTo(this._lightboxBookContainer);
            this.opts.toolbar && (this.opts.toolbarParent = this._lightboxElem, this._isMobile && (this.opts.toolbarPosition = "bottom"));
            var b = this;
            e(a).on("click.wowbook", function() {
                b.showLightbox()
            });
            e("<button class='wowbook-close'>\u2715</button>").appendTo(this._lightboxElem).on("click.wowbook", function() {
                b.hideLightbox()
            });
            e(document).on("keydown.wowbook.lightbox", function(a) {
                b.lightboxOn && (e(a.target).filter("input, textarea, select").length ||
                    27 === a.which && b.hideLightbox())
            })
        },
        destroyLightbox: function(a) {
            this.lightboxOn && this.hideLightbox();
            e(this._lightboxElem).remove();
            e(this._lightboxOverlay).remove()
        },
        showLightbox: function() {
            this.thumbnailsContainer && this.thumbnailsContainer.parent()[0] != this._lightboxElem && this.thumbnailsContainer.appendTo(this._lightboxElem);
            this.elem.parent()[0] != this._lightboxBookContainer && this.elem.appendTo(this._lightboxBookContainer);
            this.tocContainer && this.tocContainer.parent()[0] != this._lightboxElem && this.tocContainer.appendTo(this._lightboxElem);
            this.lightboxOn = !0;
            e("body").addClass("wowbook-lightbox-on");
            /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && e("html").addClass("wowbook-lightbox-ios");
            this._lightboxElem.fadeIn();
            this.centerLightbox();
            this.setCurrentPageControlWidth();
            this._lightboxOverlay.fadeIn();
            this.positionBookShadow();
            this.opts.responsiveToolbar && this.updateResponsiveToolbar();
            if (this.opts.toolbarParent == this._lightboxElem) {
                var a = e(this.toolbars[0]).outerHeight(!0),
                    b = "top" == this.opts.toolbarPosition ? "top" : "bottom";
                this._lightboxBookContainer.css(b, a);
                e(this.toolbars[0]).css(b, 0)
            }
            this.opts.lightboxResponsive && this.responsiveUpdater();
            this.mobileToolbar && this.updateMobileToolbar();
            this.opts.onShowLightbox && this.opts.onShowLightbox.call(this, this.pages[this.currentPage], this.currentPage)
        },
        hideLightbox: function() {
            this.lightboxOn = !1;
            this._lightboxElem.fadeOut();
            this._lightboxOverlay.fadeOut();
            e("body").removeClass("wowbook-lightbox-on");
            e("body").removeClass("wowbook-lightbox-ios");
            F() && this.exitFullscreen();
            this.opts.onHideLightbox &&
                this.opts.onHideLightbox.call(this, this.pages[this.currentPage], this.currentPage)
        },
        centerLightbox: function() {
            var a = e(window).width(),
                b = e(window).height();
            (e.browser.chrome || e.browser.webkit || e.browser.safari || e.browser.opera) && window.innerHeight > b && (b = window.innerHeight);
            this._lightboxElem.css("left", (a - this._lightboxElem.outerWidth()) / 2);
            this._lightboxElem.css("top", (b - this._lightboxElem.outerHeight()) / 2);
            this.opts.toolbarParent == this._lightboxElem && (this.opts.responsiveToolbar && this.updateResponsiveToolbar(),
                a = e(this.toolbars[0]).outerHeight(!0), this._lightboxBookContainer.css("height", this._lightboxElem.outerHeight() - a))
        },
        setStyle: function(a) {
            "string" == typeof a && (this._customCSSClass = a);
            e.isPlainObject(a) && (this._customCSSClass || (this._customCSSClass = this.generateCSSClassName()), a = this.generateCSSClass(a, this._customCSSClass), e("body").append("<style>" + a + "</style>"));
            a = this._customCSSClass;
            e(this.toolbars).addClass(a).find(".wowbook-controls").addClass(a).find(".wowbook-share-buttons").addClass(a);
            e(this.tocContainer).addClass(a);
            e(this.thumbnailsContainer).addClass(a);
            e(this.thumbnailsContainer).find(".wowbook-control").addClass(a);
            e(this.elem).find(".wowbook-page-number").addClass(a);
            e(this._lightboxElem).find(".wowbook-close").addClass(a);
            e(this._navControls).addClass(a)
        },
        generateCSSClassName: function() {
            e.wowBook.utils._cssClassCounter = (e.wowBook.utils._cssClassCounter || 0) + 1;
            return "wowbook-cs-" + e.wowBook.utils._cssClassCounter
        },
        generateCSSClass: function(a, b) {
            function c(a, b) {
                var c = [];
                c.push(a + " {");
                for (var d in b) c.push("\t" +
                    d + " : " + b[d] + " !important;");
                c.push("}");
                c = c.join("\n");
                g.push(c);
                return c
            }

            function d(a, b, d) {
                a[b] && (c(d, a[b]), delete a[b])
            }
            if (!a || !b) return "";
            a = e.extend({}, a);
            var g = [];
            a.hover && c("." + b + " .wowbook-close:hover", {
                color: a.hover.color
            });
            d(a, "hover", "." + b + " a:hover, ." + b + ".wowbook-control:hover");
            d(a, "active", "." + b + " a:active, ." + b + ".wowbook-control:active");
            d(a, "disabled", "." + b + " a.wowbook-disabled, ." + b + ".wowbook-control.wowbook-disabled");
            a.separator && (a.separator = a.separator.split(","), c("." + b + " a", {
                "border-color": a.separator[0],
                "box-shadow": "0 1px 0 " + (a.separator[1] || "transparent") + " inset"
            }), delete a.separator);
            c("." + b + ".wowbook-page-number", {
                background: "transparent"
            });
            a.pageNumber && (c("." + b + ".wowbook-page-number", {
                color: a.pageNumber
            }), delete a.pageNumber);
            c("." + b, a);
            return g.join("\n")
        },
        controllify: function(a) {
            var b = this;
            e(a.zoomIn || a.zoomin).on("click.wowbook", function() {
                b.zoomIn({});
                return !1
            });
            e(a.zoomOut || a.zoomout).on("click.wowbook", function() {
                b.zoomOut({});
                return !1
            });
            e(a.zoomReset ||
                a.zoomreset).on("click.wowbook", function() {
                b.zoomReset({});
                return !1
            });
            e(a.next).on("click.wowbook", function() {
                b.advance();
                return !1
            });
            e(a.back).on("click.wowbook", function() {
                b.back();
                return !1
            });
            e(a.first).on("click.wowbook", function() {
                b.gotoPage(0);
                return !1
            });
            e(a.last).on("click.wowbook", function() {
                b.gotoPage(b.pages.length - 1);
                return !1
            });
            e(a.left).on("click.wowbook", function() {
                b.gotoLeft();
                return !1
            });
            e(a.right).on("click.wowbook", function() {
                b.gotoRight();
                return !1
            });
            e(a.lastLeft || a.lastleft).on("click.wowbook",
                function() {
                    b.gotoLastLeft();
                    return !1
                });
            e(a.lastRight || a.lastright).on("click.wowbook", function() {
                b.gotoLastRight();
                return !1
            });
            e(a.slideShow || a.slideshow).on("click.wowbook", function() {
                b.toggleSlideShow();
                return !1
            });
            e(a.flipSound || a.flipsound).on("click.wowbook", function() {
                b.toggleFlipSound();
                return !1
            });
            e(a.thumbnails).on("click.wowbook", function() {
                b.toggleThumbnails();
                return !1
            });
            e(a.fullscreen).on("click.wowbook", function() {
                b.toggleFullscreen();
                return !1
            });
            e(a.toc).on("click.wowbook", function() {
                b.toggleToc();
                return !1
            });
            e(a.find).length && this.createFindControl(e(a.find));
            e(a.fullscreen).length && !C && e(a.fullscreen).hide();
            var c = this.opts.downloadURL || this.opts.downloadurl || this.opts.downloadUrl || this.opts.pdf;
            c && e(a.download).attr("href", c).attr("download", c);
            (c = this.opts.homeURL || this.opts.homeurl || this.opts.homeUrl) && e(a.home).attr("href", c);
            e(a.share).length && this.createShareControl(e(a.share));
            a.currentPage && this.createCurrentPageControl(a.currentPage);
            for (var c = "zoomIn zoomOut zoomReset left lastLeft right lastRight next back first last slideShow flipSound thumbnails fullscreen toc currentPage".split(" "),
                    d, g = 0, f = c.length; g < f; g++) d = c[g].toLowerCase(), this._controls[d] = e(this._controls[d]).add(a[c[g]] || a[d]);
            this.setStrings()
        },
        toggleControl: function(a, b) {
            (a = this._controls[a.toLowerCase()]) && e(a).toggleClass("wowbook-disabled", b)
        },
        createNavigationControls: function(a) {
            if (!this._isMobile || !this.opts.responsiveNavControls)
                if (a || (a = this.opts.navControls), "parent" === a && (a = this.elem.parent()), !0 === a && (a = this.containerBook || this._lightboxBookContainer), a) {
                    "string" == typeof a && (a = e(a));
                    var b = e("<button class='wowbook-nav wowbook-nav-left wowbook-disabled'><i></i></button>").appendTo(a);
                    a = e("<button class='wowbook-nav wowbook-nav-right wowbook-disabled'><i></i></button>").appendTo(a);
                    this.controllify({
                        left: b,
                        right: a
                    });
                    this._navControls = e(b).add(a);
                    this.opts.toolbarIcons && this._navControls.addClass("wowbook-" + this.opts.toolbarIcons)
                }
        },
        shareControlButtons: {
            twitter: ['<a href="http://twitter.com/share" target="_blank"><i class="fa-twitter"></i></a>', {
                text: "text",
                via: "via",
                url: "url"
            }],
            googleplus: ['<a href="https://plus.google.com/share" target="_blank" ><i class="fa-google-plus"></i></a>', {
                url: "url"
            }],
            facebook: ['<a href="http://www.facebook.com/sharer/sharer.php" target="_blank" ><i class="fa-facebook"></i></a>', {
                u: "url"
            }],
            stumbleupon: ['<a href="http://www.stumbleupon.com/submit" target="_blank"><i class="fa fa-stumbleupon"></i></a>', {
                url: "url",
                title: "title"
            }],
            reddit: ['<a href="http://reddit.com/submit" target="_blank"><i class="fa fa-reddit"></i></a>', {
                url: "url",
                title: "title"
            }],
            linkedin: ['<a href="http://www.linkedin.com/shareArticle" target="_blank"><i class="fa fa-linkedin"></i></a>', {
                url: "url",
                title: "title",
                summary: "summary",
                source: "source_url"
            }]
        },
        createShareControl: function(a, b) {
            b || (b = this.opts);
            for (var c = e.extend({}, this.shareControlButtons, b.shareButtons), d, g = b.share.split(/\s*,\s*|\s+/), f = e("<div class='wowbook-share-buttons wowbook-hidden'>"), h = 0, k = g.length; h < k; h++)(d = c[g[h]]) && e(d[0]).appendTo(f).addClass("wowbook-control wowbook-share-button").data("params", d[1]);
            var c = e(a).addClass("wowbook-control-share").append(f),
                l = this;
            c.on("click", function(a) {
                l.toggleShareButtons(a.target)
            });
            c.on("click", ".wowbook-share-button", function() {
                var a = l.opts.shareButtonCallback;
                if (!e.isFunction(a) || !1 !== a(l, this)) {
                    var a = e.extend({}, e(this).data("params")),
                        b = e.extend(e.wowBook.defaults.shareParams, l.opts.shareParams);
                    "_current_" == b.url && (b.url = window.location.href);
                    for (paramName in a) {
                        var c = a[paramName];
                        void 0 != b[c] ? a[paramName] = b[c] : delete a[paramName]
                    }
                    this.search = e.param(a);
                    window.open(this.href, "_blank");
                    l.toggleShareButtons(this);
                    return !1
                }
            })
        },
        toggleShareButtons: function(a) {
            a = e(a).closest(".wowbook-control-share");
            a = a.find(".wowbook-share-buttons");
            a.hasClass("wowbook-hidden") ? (a.css("opacity", 0).removeClass("wowbook-hidden"), r(a) || a.toggleClass("wowbook-up"), a.css("opacity", 1)) : a.addClass("wowbook-hidden")
        },
        createCurrentPageControl: function(a) {
            a = e(a);
            if (a.length) {
                a.append("<input class='wowbook-input-page' /><span class='wowbook-current-page'></span>");
                var b = this,
                    c = a.find(".wowbook-input-page"),
                    d = a.find(".wowbook-current-page");
                c.hide();
                a.on("click.wowbook", function() {
                    d.hide();
                    c.show().focus()
                });
                c.on("keypress.wowbook",
                    function(a) {
                        var b = "8,9,13,35,36,37,39".match(new RegExp(a.which));
                        !a.which || 49 <= a.which && 57 >= a.which || 48 == a.which && e(this).val() || b || a.preventDefault()
                    });
                c.on("focusin.wowbook", function() {
                    var a = b.currentPage + 1;
                    e(this).val(a).data("value", a).select()
                });
                c.on("focusout.wowbook", function() {
                    e(this).hide();
                    d.show()
                });
                c.on("change.wowbook", function() {
                    var a = e(this),
                        c = a.data("value"),
                        h = parseInt(this.value);
                    1 <= h && h <= b.pages.length ? b.gotoPage(h - 1) : a.val(c);
                    a.hide();
                    d.show()
                });
                this.setCurrentPageControlWidth(a)
            }
        },
        updateCurrentPageControl: function(a) {
            !a && this._controls && (a = this._controls.currentpage);
            if (a && a.length) {
                var b = this.currentPage + 1,
                    b = b + ("/" + this.pages.length);
                a.find(".wowbook-current-page").text(b);
                b = a.find(".wowbook-input-page");
                b.outerHeight() && b.css("top", (a.height() - b.outerHeight()) / 2)
            }
        },
        setCurrentPageControlWidth: function(a, b) {
            a || (a = this._controls && this._controls.currentpage);
            if (a && a.length) {
                2 > arguments.length && (b = this.opts.CurrentPageControlWidth);
                if (!b) {
                    var c = a.find(".wowbook-current-page"),
                        d = c.text(),
                        e = ("" + this.pages.length).replace(/./g, "0");
                    c.css("width", "auto");
                    c.css("visibility", "hidden").text(e + "/" + e);
                    b = c.width();
                    c.text(d).css("visibility", "visible").css("width", "100%");
                    c = a.find(".wowbook-input-page");
                    c.outerHeight() && c.css("top", (a.height() - c.outerHeight()) / 2)
                }
                a.width(b)
            }
        },
        setStrings: function(a) {
            function b(b, d) {
                var e = a[b];
                void 0 != e && c[d] && c[d].attr("title", e)
            }
            a || (a = this.opts.strings || {});
            a.tocHeader && (this.opts.tocHeader = a.tocHeader, this.tocContainer && this.tocContainer.find("h1 > .wowbook-toc-header-text").text(a.tocHeader));
            if (this._controls) {
                var c = this._controls;
                b("findToolTip", "find");
                if (this._pdfFindBar) {
                    var d = this._pdfFindBar;
                    d.find(".wowbook-find-text").attr("placeholder", a.findInputPlaceHolder);
                    d.find(".wowbook-find-previous").attr("title", a.findPreviousTooltip);
                    d.find(".wowbook-find-next").attr("title", a.findNextTooltip);
                    d.find(".wowbook-find-match-case").parent().find("span").text(a.findMatchCase)
                }
                b("lastLeftTooltip", "lastLeft");
                b("leftTooltip", "left");
                b("rightTooltip", "right");
                b("lastRightTooltip", "lastRight");
                b("firstTooltip", "first");
                b("backTooltip", "back");
                b("nextTooltip", "next");
                b("lastTooltip", "last");
                b("zoominTooltip", "zoomin");
                b("zoomoutTooltip", "zoomout");
                b("slideshowTooltip", "slideshow");
                b("flipsoundTooltip", "flipsound");
                b("fullscreenTooltip", "fullscreen");
                b("thumbnailsTooltip", "thumbnails");
                b("tocTooltip", "toc");
                b("downloadTooltip", "download");
                b("shareTooltip", "share");
            }
        },
        toolbarControls: {
            _default: "<a href='#'><i></i></a>",
            lastLeft: "<a><i></i></a>",
            left: "<a><i></i></a>",
            right: "<a><i></i></a>",
            lastRight: "<a><i></i></a>",
            first: "<a title='go to first page'><i></i></a>",
            back: "<a title='go back one page'><i></i></a>",
            next: "<a title='go foward one page'><i></i></a>",
            last: "<a title='go to last page'><i></i></a>",
            zoomin: "<a title='zoom in'><i></i></a>",
            zoomout: "<a title='zoom out'><i></i></a>",
            slideshow: "<a title='start slideshow'><i></i></a>",
            flipsound: "<a title='flip sound on/off'><i></i></a>",
            fullscreen: "<a title='fullscreen on/off'><i></i></a>",
            thumbnails: "<a title='thumbnails on/off'><i></i></a>",
            toc: "<a title='table of contents on/off'><i></i></a>",
            download: "<a title='download'><i></i></a>",
            home: "<a title=''><i></i></a>",
            find: "<a title='Buscar'><i></i></a>",
            share: "<a title='share'><i></i></a>",
            currentPage: "<span></span>"
        },
        createToolbar: function(a, b) {
            if (a && (b = e(b || this.opts.toolbarParent || this.elem.parent())) && b.length) {
                var c = e('<div class="wowbook-toolbar">'),
                    d = e('<div class="wowbook-controls">').appendTo(c);
                this.opts.toolbarIcons && c.addClass("wowbook-" + this.opts.toolbarIcons);
                a = a.split(/\s*,\s*/);
                for (var g = {}, f, h = 0; h < a.length; h += 1) f = this.createToolbarControl(a[h]), g[a[h]] = f, d.append(f);
                this.opts.removeStickyHoverStyle && (c.on("touchstart", ".wowbook-control", function() {
                    e(this).removeClass("remove-sticky-hover-style")
                }), c.on("touchend", ".wowbook-control", function() {
                    e(".remove-sticky-hover-style").removeClass("remove-sticky-hover-style");
                    e(this).addClass("remove-sticky-hover-style")
                }));
                b.prepend(c);
                this.controllify(g);
                this.toolbars.push(c[0]);
                this.setStyle(this.opts.styles || this.opts.style);
                return c
            }
        },
        destroyToolbars: function() {
            this.toolbars && e(this.toolbars).remove();
            this.toolbars = null
        },
        createToolbarControl: function(a) {
            this._avoidLoopControl || (this._avoidLoopControl = {});
            var b = a;
            if (e.isPlainObject(a)) {
                var c = a;
                a = e(this.toolbarControls._default);
                for (prop in c)
                    if (jQuery.isFunction(a[prop])) a[prop](c[prop]);
                    else a.attr(prop, c[prop])
            }
            if ("string" == typeof a)
                if ("<" == a.charAt(0)) a = e(a);
                else {
                    a = this.toolbarControls[a] || this.toolbarControls[a.toLowerCase()] || this.toolbarControls._default;
                    if (this._avoidLoopControl[b]) return "Error CreateToolbarControl in loop";
                    this._avoidLoopControl[b] = 1;
                    a = this.createToolbarControl(a);
                    this._avoidLoopControl[b] = 0;
                    a = e(a).addClass("wowbook-control-" + b)
                }
            a.addClass("wowbook-control");
            return a
        },
        setupMobileToolbar: function() {
            this.opts.toolbarPosition = "bottom";
            this.mobileToolbar = e(this.toolbars[0]);
            this.mobileToolbar.find(".wowbook-controls").css({
                position: "absolute",
                left: 0
            });
            this.createMobileToolbarToggle();
            this.slideDownMobileToolbar(0);
            this.updateMobileToolbar()
        },
        toolbarIsExpandable: function(a) {
            return 1.1 * a.height() < a.find(".wowbook-controls").height()
        },
        updateMobileToolbar: function() {
            this.mobileToolbarToggle.toggleClass("wowbook-collapsed", !this._mobileToolbarExpanded);
            this.mobileToolbarToggle.toggle(this.toolbarIsExpandable(this.mobileToolbar))
        },
        createMobileToolbarToggle: function() {
            this.mobileToolbarToggle = e("<a class='wowbook-control wowbook-control-toggle-toolbar'><i></i></a>").prependTo(this.mobileToolbar.find(".wowbook-controls"));
            var a = this;
            this.mobileToolbarToggle.on("click", function() {
                a.toogleMobileToolbar()
            });
            e(window).on("resize.wowbook",
                function() {
                    a.mobileToolbarToggle && a.mobileToolbar && a.updateMobileToolbar()
                })
        },
        slideUpMobileToolbar: function(a) {
            var b = this.mobileToolbar.find(".wowbook-controls"),
                c = this.mobileToolbar.children().height() - this.mobileToolbar.height();
            b.css({
                bottom: -c
            }).animate({
                bottom: 0
            }, a);
            this._mobileToolbarExpanded = !0;
            this.updateMobileToolbar()
        },
        slideDownMobileToolbar: function(a) {
            var b = this.mobileToolbar.find(".wowbook-controls"),
                c = this.mobileToolbar.children().height() - this.mobileToolbar.height();
            b.animate({
                bottom: -c
            }, {
                duration: a,
                complete: function() {
                    e(this).css("bottom", "")
                }
            });
            this._mobileToolbarExpanded = !1;
            this.updateMobileToolbar()
        },
        toogleMobileToolbar: function() {
            this._mobileToolbarExpanded ? this.slideDownMobileToolbar() : this.slideUpMobileToolbar()
        },
        setupResponsiveToolbar: function() {
            this.responsiveToolbar = e(this.toolbars[0]);
            this.createResponsiveToolbarToggle();
            this.updateResponsiveToolbar()
        },
        makeToolbarExpandable: function(a) {
            this._responsiveToolbarExpandable || (this._responsiveToolbarExpandable = !0, this._originalToolbarPosition ||
                (this._originalToolbarPosition = this.opts.toolbarPosition), this.opts.toolbarPosition = "bottom", this.responsiveToolbar.find(".wowbook-controls").css({
                    position: "absolute",
                    left: 0
                }), this.container && "hidden" != this.container.css("overflow") && (this.container.data("originalOverflow", this.container.css("overflow")), this.container.css("overflow", "hidden")), this.slideDownResponsiveToolbar(0))
        },
        unmakeToolbarExpandable: function() {
            this._responsiveToolbarExpandable && (this._responsiveToolbarExpandable = !1, this._originalToolbarPosition &&
                (this.opts.toolbarPosition = this._originalToolbarPosition), this.responsiveToolbar.find(".wowbook-controls").css({
                    bottom: "",
                    position: "",
                    left: ""
                }), this.container && this.container.data("originalOverflow") && (this.container.css("overflow", this.container.data("originalOverflow")), this.container.data("originalOverflow", "")))
        },
        updateResponsiveToolbar: function() {
            if (this.responsiveToolbar) {
                this.responsiveToolbar.toggleClass("wowbook-small", 480 > this.responsiveToolbar.width());
                var a = this.toolbarIsExpandable(this.responsiveToolbar);
                a ? this.makeToolbarExpandable() : this.unmakeToolbarExpandable();
                this.responsiveToolbar.toggleClass("wowbook-collapsable", a);
                this.responsiveToolbarToggle.toggleClass("wowbook-collapsed", !this._responsiveToolbarExpanded);
                this.responsiveToolbarToggle.toggle(a)
            }
        },
        createResponsiveToolbarToggle: function() {
            this.responsiveToolbarToggle = e("<a class='wowbook-control wowbook-control-toggle-toolbar'><i></i></a>").prependTo(this.responsiveToolbar.find(".wowbook-controls"));
            var a = this;
            this.responsiveToolbarToggle.on("click",
                function() {
                    a.toogleResponsiveToolbar()
                });
            e(window).on("resize.wowbook", function() {
                a.responsiveToolbarToggle && a.responsiveToolbar && a.updateResponsiveToolbar()
            })
        },
        slideUpResponsiveToolbar: function(a) {
            var b = this.responsiveToolbar.find(".wowbook-controls"),
                c = this.responsiveToolbar.children().height() - this.responsiveToolbar.height();
            b.css({
                bottom: -c
            }).animate({
                bottom: 0
            }, a);
            this._responsiveToolbarExpanded = !0;
            this.updateResponsiveToolbar()
        },
        slideDownResponsiveToolbar: function(a) {
            var b = this.responsiveToolbar.find(".wowbook-controls"),
                c = this.responsiveToolbar.children().height() - this.responsiveToolbar.height();
            b.animate({
                bottom: -c
            }, {
                duration: a,
                complete: function() {
                    e(this).css("bottom", "")
                }
            });
            this._responsiveToolbarExpanded = !1;
            this.updateResponsiveToolbar()
        },
        toogleResponsiveToolbar: function() {
            this._responsiveToolbarExpanded ? this.slideDownResponsiveToolbar() : this.slideUpResponsiveToolbar()
        },
        translate: function(a, b, c, d) {
            e.wowBook.support.transform && !1 !== d ? a.css("transform", e.wowBook.useTranslate3d ? "translate3d(" + (b || 0) + "px, " + (c || 0) +
                "px, 0px)" : "translate(" + (b || 0) + "px, " + (c || 0) + "px) ") : (void 0 !== b && a.css({
                left: b
            }), void 0 !== c && a.css({
                top: c
            }))
        }
    };
    e.wowBook.defaults = {
        width: 500,
        height: 300,
        pageWidth: void 0,
        pageHeight: void 0,
        coverWidth: void 0,
        coverHeight: void 0,
        startPage: 0,
        hardcovers: !1,
        hardPages: !1,
        closable: !0,
        centeredWhenClosed: !1,
        doublePages: ".double",
        container: !1,
        containerWidth: void 0,
        containerHeight: void 0,
        containerPadding: void 0,
        containerBackground: void 0,
        toolbarContainerPosition: "",
        rtl: !1,
        responsive: !1,
        scaleToFit: "",
        maxWidth: void 0,
        maxHeight: void 0,
        onResize: null,
        responsiveHandleWidth: void 0,
        singlePage: !1,
        responsiveSinglePage: !0,
        fullscreenElement: document.documentElement,
        onFullscreenError: null,
        onFullscreenErrorMessage: "Cannot enter fullscreen mode.",
        use3d: !0,
        perspective: 2E3,
        useTranslate3d: "mobile",
        useScale3d: !0,
        pageThickness: 0,
        pageEdgeColor: null,
        hardPageShadow: !0,
        style: null,
        bookShadow: !0,
        gutterShadow: !0,
        shadowThreshold: 20,
        shadows: !0,
        foldGradient: !0,
        foldGradientThreshold: 20,
        pageNumbers: !0,
        firstPageNumber: 1,
        numberedPages: !1,
        deepLinking: !0,
        updateBrowserURL: !0,
        moveToViewPort: !1,
        curl: !0,
        curlSize: 40,
        slideShow: !1,
        slideShowDelay: 1E3,
        slideShowLoop: !1,
        pauseOnHover: !0,
        touchEnabled: !0,
        swipeDuration: 200,
        mouseWheel: !1,
        handleWidth: !1,
        handleClickDuration: 300,
        turnPageDuration: 1E3,
        turnPageDurationMin: 300,
        forceBasicPage: !1,
        sections: ".wowbook-section",
        images: void 0,
        srcs: void 0,
        loadingIndicator: !0,
        pdf: null,
        pdfScale: 1,
        pdfProgressiveRender: !1,
        pdfTextSelectable: !1,
        pdfFind: !1,
        pdfUpdateRender: !0,
        onPDFLoadError: null,
        onLoadPdf: null,
        pdfPixelRatio: Math.min(window.devicePixelRatio ||
            1, 2),
        pdfcMapPacked: !0,
        pdfcMapUrl: "wow_book/cmaps/",
        zoomLevel: 1,
        zoomMax: 2,
        zoomMin: 1,
        zoomBoundingBox: window,
        zoomStep: .25,
        zoomDuration: 200,
        zoomEasing: "linear",
        onZoom: null,
        pinchToZoom: !0,
        doubleClickToZoom: !1,
        allowDragBrowserPageZoom: !1,
        flipSound: !0,
        flipSoundFile: ["page-flip.mp3", "page-flip.ogg"],
        flipSoundPath: "./wow_book/sound/",
        onPlayFlipSound: null,
        keyboardNavigation: {
            back: 37,
            advance: 39
        },
        clipBoundaries: !0,
        onShowPage: null,
        onHoldPage: null,
        onReleasePage: null,
        pagesInMemory: null,
        pagesToKeep: null,
        onLoadPage: null,
        onUnloadPage: null,
        lightbox: null,
        lightboxColor: null,
        lightboxOverlay: !1,
        lightboxOverlayColor: null,
        lightboxWidth: "100%",
        lightboxHeight: "100%",
        lightboxResponsive: !0,
        onShowLightbox: void 0,
        onHideLightbox: void 0,
        toc: void 0,
        tocParent: "body",
        tocHeader: "Table of contents",
        tocItemTemplate: void 0,
        toolbarLightboxPosition: "",
        displayToc: !1,
        controls: {},
        navControls: !1,
        responsiveNavControls: !0,
        downloadURL: null,
        homeURL: null,
        currentPageControlWidth: void 0,
        toolbar: !1,
        toolbarParent: "body",
        toolbarIcons: "fontawesome",
        responsiveToolbar: !0,
        toolbarPosition: "bottom",
        removeStickyHoverStyle: !0,
        share: "twitter, googleplus, facebook, stumbleupon, reddit, linkedin",
        shareParams: {
            url: "_current_",
            text: void 0,
            via: void 0,
            title: void 0,
            summary: void 0,
            source_url: void 0
        },
        thumbnails: !1,
        thumbnailsParent: "body",
        thumbnailScale: .2,
        thumbnailWidth: null,
        thumbnailHeight: null,
        thumbnailsPosition: null,
        thumbnailsVertical: !0,
        thumbnailsContainerWidth: null,
        thumbnailsContainerHeight: null,
        thumbnailsSprite: null,
        thumbnailsImages: null,
        thumbnailsAnimOptions: {}
    };
    e.wowBook.wowBookConstructor =
        n;
    window.raf = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(a) {
            window.setTimeout(a, 1E3 / 60)
        }
    }();
    e.browser.ie8mode = e.browser.msie && 8 == document.documentMode;
    e.browser.ie7 = e.browser.msie && (7 == e.browser.version || 7 == document.documentMode);
    var l = e.browser.msie && 9 > e.browser.version ? 1 : 0,
        z = {
            thin: 2 - l,
            medium: 4 - l,
            thick: 6 - l
        },
        m = window.document,
        B = m.documentElement,
        C = B.requestFullscreen || B.mozRequestFullScreen || B.msRequestFullscreen || B.webkitRequestFullscreen ||
        B.webkitRequestFullScreen,
        D = m.exitFullscreen || m.mozCancelFullScreen || m.msExitFullscreen || m.webkitExitFullscreen || m.webkitCancelFullScreen,
        F = function() {
            return m.fullscreenElement || m.mozFullScreenElement || m.msFullscreenElement || m.webkitFullscreenElement || m.webkitCurrentFullScreenElement
        };
    e.wowBook.utils = {
        translate: function(a, b, c) {
            return e.wowBook.useTranslate3d ? "translate3d(" + a + "px, " + b + "px, " + (c || 0) + "px) " : "translate(" + a + "px, " + b + "px) "
        },
        isMobile: function() {
            return 480 >= e(window).width() || 480 >= e(window).height()
        }
    }
})(jQuery);
(function(e) {
    function n(q) {
        var l = q || window.event,
            n = [].slice.call(arguments, 1),
            m = 0,
            r = 0;
        q = e.event.fix(l);
        q.type = "mousewheel";
        l.wheelDelta && (m = l.wheelDelta / 120);
        l.detail && (m = -l.detail / 3);
        var v = m;
        void 0 !== l.axis && l.axis === l.HORIZONTAL_AXIS && (v = 0, r = -1 * m);
        void 0 !== l.wheelDeltaY && (v = l.wheelDeltaY / 120);
        void 0 !== l.wheelDeltaX && (r = -1 * l.wheelDeltaX / 120);
        n.unshift(q, m, r, v);
        return (e.event.dispatch || e.event.handle).apply(this, n)
    }
    var v = ["DOMMouseScroll", "mousewheel"];
    if (e.event.fixHooks)
        for (var r = v.length; r;) e.event.fixHooks[v[--r]] =
            e.event.mouseHooks;
    e.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                for (var e = v.length; e;) this.addEventListener(v[--e], n, !1);
            else this.onmousewheel = n
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var e = v.length; e;) this.removeEventListener(v[--e], n, !1);
            else this.onmousewheel = null
        }
    };
    e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
})(jQuery);
(function(e) {
    function n(n) {
        if (n in v.style) return e.wowBook.support[n] = n;
        for (var l = r.length, q, m = n.charAt(0).toUpperCase() + n.substr(1); l--;)
            if (q = r[l] + m, q in v.style) return e.wowBook.support[n] = q
    }
    if (e.cssHooks) {
        var v = document.createElement("div"),
            r = ["O", "ms", "Webkit", "Moz"];
        n("transform");
        n("transformOrigin");
        n("boxSizing");
        n("zoom");
        e.wowBook.support.boxSizing && 8 > document.documentMode && (e.wowBook.support.boxSizing = !1);
        v = null;
        e.each(["transform", "transformOrigin"], function(n, l) {
            e.wowBook.support[l] &&
                e.wowBook.support[l] !== l && !e.cssHooks[l] && (e.cssHooks[l] = {
                    get: function(n, m, q) {
                        return e.css(n, e.wowBook.support[l])
                    },
                    set: function(n, m) {
                        n.style[e.wowBook.support[l]] = m
                    }
                })
        });
        e.wowBook.applyAlphaImageLoader = function(n) {
            var l, q, m = "",
                r = e("<div style='display:none'></div>").appendTo("body");
            var v = 0;
            for (q = n.length; v < q; v++) {
                var D = n[v];
                r.addClass(D);
                if (l = r.css("background-image").match(/^url\("(.*)"\)$/)) m += "." + D + "{background:none; filter : progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + l[1] + "', sizingMethod='scale'); } ",
                    r.removeClass(D)
            }
            e("body").append("<style>" + m + "</style>")
        }
    } else alert("jQuery 1.4.3+ is needed for this plugin to work")
})(jQuery);
