! function (l, n) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = n();
    else if ("function" == typeof define && define.amd) define([], n);
    else {
       var u = n();
       for (var t in u)("object" == typeof exports ? exports : l)[t] = u[t]
    }
 }(self, (function () {
    return function () {
       var l = {
             9634: function (l, n, u) {
                (function () {
                   function l(l, n) {
                      var u, t = l.split("."),
                         e = F;
                      t[0] in e || !e.execScript || e.execScript("var " + t[0]);
                      for (; t.length && (u = t.shift());) t.length || void 0 === n ? e = e[u] ? e[u] : e[u] = {} : e[u] = n
                   }
 
                   function n(l, n) {
                      function u() {}
                      u.prototype = n.prototype, l.M = n.prototype, l.prototype = new u, l.prototype.constructor = l, l.N = function (l, u, t) {
                         for (var e = Array(arguments.length - 2), r = 2; r < arguments.length; r++) e[r - 2] = arguments[r];
                         return n.prototype[u].apply(l, e)
                      }
                   }
 
                   function u(l, n) {
                      null != l && this.a.apply(this, arguments)
                   }
 
                   function t(l) {
                      l.b = ""
                   }
 
                   function e(l, n) {
                      return l > n ? 1 : l < n ? -1 : 0
                   }
 
                   function r(l, n) {
                      this.b = l, this.a = {};
                      for (var u = 0; u < n.length; u++) {
                         var t = n[u];
                         this.a[t.b] = t
                      }
                   }
 
                   function i(l) {
                      return l = function (l) {
                            var n, u = [],
                               t = 0;
                            for (n in l) u[t++] = l[n];
                            return u
                         }(l.a),
                         function (l, n) {
                            l.sort(function (l, n) {
                               return l.b - n.b
                            } || e)
                         }(l), l
                   }
 
                   function d(l, n) {
                      switch (this.b = l, this.g = !!n.v, this.a = n.c, this.i = n.type, this.h = !1, this.a) {
                         case K:
                         case Y:
                         case J:
                         case L:
                         case H:
                         case U:
                         case O:
                            this.h = !0
                      }
                      this.f = n.defaultValue
                   }
 
                   function a() {
                      this.a = {}, this.f = this.j().a, this.b = this.g = null
                   }
 
                   function o(l, n) {
                      for (var u = i(l.j()), t = 0; t < u.length; t++) {
                         var e = (d = u[t]).b;
                         if (null != n.a[e]) {
                            l.b && delete l.b[d.b];
                            var r = 11 == d.a || 10 == d.a;
                            if (d.g)
                               for (var d = f(n, e) || [], a = 0; a < d.length; a++) {
                                  var s = l,
                                     c = e,
                                     p = r ? d[a].clone() : d[a];
                                  s.a[c] || (s.a[c] = []), s.a[c].push(p), s.b && delete s.b[c]
                               } else d = f(n, e), r ? (r = f(l, e)) ? o(r, d) : h(l, e, d.clone()) : h(l, e, d)
                         }
                      }
                   }
 
                   function f(l, n) {
                      var u = l.a[n];
                      if (null == u) return null;
                      if (l.g) {
                         if (!(n in l.b)) {
                            var t = l.g,
                               e = l.f[n];
                            if (null != u)
                               if (e.g) {
                                  for (var r = [], i = 0; i < u.length; i++) r[i] = t.b(e, u[i]);
                                  u = r
                               } else u = t.b(e, u);
                            return l.b[n] = u
                         }
                         return l.b[n]
                      }
                      return u
                   }
 
                   function s(l, n, u) {
                      var t = f(l, n);
                      return l.f[n].g ? t[u || 0] : t
                   }
 
                   function c(l, n) {
                      var u;
                      if (null != l.a[n]) u = s(l, n, void 0);
                      else l: {
                         if (void 0 === (u = l.f[n]).f) {
                            var t = u.i;
                            if (t === Boolean) u.f = !1;
                            else if (t === Number) u.f = 0;
                            else {
                               if (t !== String) {
                                  u = new t;
                                  break l
                               }
                               u.f = u.h ? "0" : ""
                            }
                         }
                         u = u.f
                      }
                      return u
                   }
 
                   function p(l, n) {
                      return l.f[n].g ? null != l.a[n] ? l.a[n].length : 0 : null != l.a[n] ? 1 : 0
                   }
 
                   function h(l, n, u) {
                      l.a[n] = u, l.b && (l.b[n] = u)
                   }
 
                   function g(l, n) {
                      var u, t = [];
                      for (u in n) 0 != u && t.push(new d(u, n[u]));
                      return new r(l, t)
                   }
 
                   function b() {
                      a.call(this)
                   }
 
                   function m() {
                      a.call(this)
                   }
 
                   function y() {
                      a.call(this)
                   }
 
                   function v() {}
 
                   function S() {}
 
                   function _() {}
 
                   function w() {
                      this.a = {}
                   }
 
                   function x(l) {
                      return 0 == l.length || ul.test(l)
                   }
 
                   function A(l, n) {
                      if (null == n) return null;
                      n = n.toUpperCase();
                      var u = l.a[n];
                      if (null == u) {
                         if (null == (u = Q[n])) return null;
                         u = (new _).a(y.j(), u), l.a[n] = u
                      }
                      return u
                   }
 
                   function j(l) {
                      return null == (l = z[l]) ? "ZZ" : l[0]
                   }
 
                   function M(l) {
                      this.H = RegExp("â€ˆ"), this.C = "", this.m = new u, this.w = "", this.i = new u, this.u = new u, this.l = !0, this.A = this.o = this.F = !1, this.G = w.b(), this.s = 0, this.b = new u, this.B = !1, this.h = "", this.a = new u, this.f = [], this.D = l, this.J = this.g = B(this, this.D)
                   }
 
                   function B(l, n) {
                      var u;
                      if (null != n && isNaN(n) && n.toUpperCase() in Q) {
                         if (null == (u = A(l.G, n))) throw Error("Invalid region code: " + n);
                         u = c(u, 10)
                      } else u = 0;
                      return null != (u = A(l.G, j(u))) ? u : tl
                   }
 
                   function C(l) {
                      for (var n = l.f.length, u = 0; u < n; ++u) {
                         var e, r = l.f[u],
                            i = c(r, 1);
                         if (l.w == i) return !1;
                         e = l;
                         var d = c(o = r, 1);
                         if (-1 != d.indexOf("|")) e = !1;
                         else {
                            var a;
                            d = (d = d.replace(el, "\\d")).replace(rl, "\\d"), t(e.m), a = e;
                            var o = c(o, 2),
                               f = "999999999999999".match(d)[0];
                            0 < (a = f.length < a.a.b.length ? "" : (a = f.replace(new RegExp(d, "g"), o)).replace(RegExp("9", "g"), "â€ˆ")).length ? (e.m.a(a), e = !0) : e = !1
                         }
                         if (e) return l.w = i, l.B = dl.test(s(r, 4)), l.s = 0, !0
                      }
                      return l.l = !1
                   }
 
                   function N(l, n) {
                      for (var u = [], t = n.length - 3, e = l.f.length, r = 0; r < e; ++r) {
                         var i = l.f[r];
                         0 == p(i, 3) ? u.push(l.f[r]) : (i = s(i, 3, Math.min(t, p(i, 3) - 1)), 0 == n.search(i) && u.push(l.f[r]))
                      }
                      l.f = u
                   }
 
                   function D(l) {
                      return l.l = !0, l.A = !1, l.f = [], l.s = 0, t(l.m), l.w = "", I(l)
                   }
 
                   function G(l) {
                      for (var n = l.a.toString(), u = l.f.length, t = 0; t < u; ++t) {
                         var e = l.f[t],
                            r = c(e, 1);
                         if (new RegExp("^(?:" + r + ")$").test(n)) return l.B = dl.test(s(e, 4)), T(l, n = n.replace(new RegExp(r, "g"), s(e, 2)))
                      }
                      return ""
                   }
 
                   function T(l, n) {
                      var u = l.b.b.length;
                      return l.B && 0 < u && " " != l.b.toString().charAt(u - 1) ? l.b + " " + n : l.b + n
                   }
 
                   function I(l) {
                      var n = l.a.toString();
                      if (3 <= n.length) {
                         for (var u = l.o && 0 == l.h.length && 0 < p(l.g, 20) ? f(l.g, 20) || [] : f(l.g, 19) || [], t = u.length, e = 0; e < t; ++e) {
                            var r = u[e];
                            0 < l.h.length && x(c(r, 4)) && !s(r, 6) && null == r.a[5] || (0 != l.h.length || l.o || x(c(r, 4)) || s(r, 6)) && il.test(c(r, 2)) && l.f.push(r)
                         }
                         return N(l, n), 0 < (n = G(l)).length ? n : C(l) ? P(l) : l.i.toString()
                      }
                      return T(l, n)
                   }
 
                   function P(l) {
                      var n = l.a.toString(),
                         u = n.length;
                      if (0 < u) {
                         for (var t = "", e = 0; e < u; e++) t = E(l, n.charAt(e));
                         return l.l ? T(l, t) : l.i.toString()
                      }
                      return l.b.toString()
                   }
 
                   function V(l) {
                      var n, u = l.a.toString(),
                         e = 0;
                      return (n = 1 == s(l.g, 10) && ("1" == (n = l.a.toString()).charAt(0) && "0" != n.charAt(1) && "1" != n.charAt(1))) ? (e = 1, l.b.a("1").a(" "), l.o = !0) : null != l.g.a[15] && (n = new RegExp("^(?:" + s(l.g, 15) + ")"), null != (n = u.match(n)) && null != n[0] && 0 < n[0].length && (l.o = !0, e = n[0].length, l.b.a(u.substring(0, e)))), t(l.a), l.a.a(u.substring(e)), u.substring(0, e)
                   }
 
                   function $(l) {
                      var n = l.u.toString(),
                         u = new RegExp("^(?:\\+|" + s(l.g, 11) + ")");
                      return null != (u = n.match(u)) && null != u[0] && 0 < u[0].length && (l.o = !0, u = u[0].length, t(l.a), l.a.a(n.substring(u)), t(l.b), l.b.a(n.substring(0, u)), "+" != n.charAt(0) && l.b.a(" "), !0)
                   }
 
                   function R(l) {
                      if (0 == l.a.b.length) return !1;
                      var n, e = new u;
                      l: {
                         if (0 != (n = l.a.toString()).length && "0" != n.charAt(0))
                            for (var r, i = n.length, d = 1; 3 >= d && d <= i; ++d)
                               if ((r = parseInt(n.substring(0, d), 10)) in z) {
                                  e.a(n.substring(d)), n = r;
                                  break l
                               } n = 0
                      }
                      return 0 != n && (t(l.a), l.a.a(e.toString()), "001" == (e = j(n)) ? l.g = A(l.G, "" + n) : e != l.D && (l.g = B(l, e)), l.b.a("" + n).a(" "), l.h = "", !0)
                   }
 
                   function E(l, n) {
                      if (0 <= (e = l.m.toString()).substring(l.s).search(l.H)) {
                         var u = e.search(l.H),
                            e = e.replace(l.H, n);
                         return t(l.m), l.m.a(e), l.s = u, e.substring(0, l.s + 1)
                      }
                      return 1 == l.f.length && (l.l = !1), l.w = "", l.i.toString()
                   }
                   var F = this;
                   u.prototype.b = "", u.prototype.set = function (l) {
                      this.b = "" + l
                   }, u.prototype.a = function (l, n, u) {
                      if (this.b += String(l), null != n)
                         for (var t = 1; t < arguments.length; t++) this.b += arguments[t];
                      return this
                   }, u.prototype.toString = function () {
                      return this.b
                   };
                   var O = 1,
                      U = 2,
                      K = 3,
                      Y = 4,
                      J = 6,
                      L = 16,
                      H = 18;
                   a.prototype.set = function (l, n) {
                      h(this, l.b, n)
                   }, a.prototype.clone = function () {
                      var l = new this.constructor;
                      return l != this && (l.a = {}, l.b && (l.b = {}), o(l, this)), l
                   }, n(b, a);
                   var q = null;
                   n(m, a);
                   var X = null;
                   n(y, a);
                   var k = null;
                   b.prototype.j = function () {
                      var l = q;
                      return l || (q = l = g(b, {
                         0: {
                            name: "NumberFormat",
                            I: "i18n.phonenumbers.NumberFormat"
                         },
                         1: {
                            name: "pattern",
                            required: !0,
                            c: 9,
                            type: String
                         },
                         2: {
                            name: "format",
                            required: !0,
                            c: 9,
                            type: String
                         },
                         3: {
                            name: "leading_digits_pattern",
                            v: !0,
                            c: 9,
                            type: String
                         },
                         4: {
                            name: "national_prefix_formatting_rule",
                            c: 9,
                            type: String
                         },
                         6: {
                            name: "national_prefix_optional_when_formatting",
                            c: 8,
                            defaultValue: !1,
                            type: Boolean
                         },
                         5: {
                            name: "domestic_carrier_code_formatting_rule",
                            c: 9,
                            type: String
                         }
                      })), l
                   }, b.j = b.prototype.j, m.prototype.j = function () {
                      var l = X;
                      return l || (X = l = g(m, {
                         0: {
                            name: "PhoneNumberDesc",
                            I: "i18n.phonenumbers.PhoneNumberDesc"
                         },
                         2: {
                            name: "national_number_pattern",
                            c: 9,
                            type: String
                         },
                         9: {
                            name: "possible_length",
                            v: !0,
                            c: 5,
                            type: Number
                         },
                         10: {
                            name: "possible_length_local_only",
                            v: !0,
                            c: 5,
                            type: Number
                         },
                         6: {
                            name: "example_number",
                            c: 9,
                            type: String
                         }
                      })), l
                   }, m.j = m.prototype.j, y.prototype.j = function () {
                      var l = k;
                      return l || (k = l = g(y, {
                         0: {
                            name: "PhoneMetadata",
                            I: "i18n.phonenumbers.PhoneMetadata"
                         },
                         1: {
                            name: "general_desc",
                            c: 11,
                            type: m
                         },
                         2: {
                            name: "fixed_line",
                            c: 11,
                            type: m
                         },
                         3: {
                            name: "mobile",
                            c: 11,
                            type: m
                         },
                         4: {
                            name: "toll_free",
                            c: 11,
                            type: m
                         },
                         5: {
                            name: "premium_rate",
                            c: 11,
                            type: m
                         },
                         6: {
                            name: "shared_cost",
                            c: 11,
                            type: m
                         },
                         7: {
                            name: "personal_number",
                            c: 11,
                            type: m
                         },
                         8: {
                            name: "voip",
                            c: 11,
                            type: m
                         },
                         21: {
                            name: "pager",
                            c: 11,
                            type: m
                         },
                         25: {
                            name: "uan",
                            c: 11,
                            type: m
                         },
                         27: {
                            name: "emergency",
                            c: 11,
                            type: m
                         },
                         28: {
                            name: "voicemail",
                            c: 11,
                            type: m
                         },
                         29: {
                            name: "short_code",
                            c: 11,
                            type: m
                         },
                         30: {
                            name: "standard_rate",
                            c: 11,
                            type: m
                         },
                         31: {
                            name: "carrier_specific",
                            c: 11,
                            type: m
                         },
                         33: {
                            name: "sms_services",
                            c: 11,
                            type: m
                         },
                         24: {
                            name: "no_international_dialling",
                            c: 11,
                            type: m
                         },
                         9: {
                            name: "id",
                            required: !0,
                            c: 9,
                            type: String
                         },
                         10: {
                            name: "country_code",
                            c: 5,
                            type: Number
                         },
                         11: {
                            name: "international_prefix",
                            c: 9,
                            type: String
                         },
                         17: {
                            name: "preferred_international_prefix",
                            c: 9,
                            type: String
                         },
                         12: {
                            name: "national_prefix",
                            c: 9,
                            type: String
                         },
                         13: {
                            name: "preferred_extn_prefix",
                            c: 9,
                            type: String
                         },
                         15: {
                            name: "national_prefix_for_parsing",
                            c: 9,
                            type: String
                         },
                         16: {
                            name: "national_prefix_transform_rule",
                            c: 9,
                            type: String
                         },
                         18: {
                            name: "same_mobile_and_fixed_line_pattern",
                            c: 8,
                            defaultValue: !1,
                            type: Boolean
                         },
                         19: {
                            name: "number_format",
                            v: !0,
                            c: 11,
                            type: b
                         },
                         20: {
                            name: "intl_number_format",
                            v: !0,
                            c: 11,
                            type: b
                         },
                         22: {
                            name: "main_country_for_code",
                            c: 8,
                            defaultValue: !1,
                            type: Boolean
                         },
                         23: {
                            name: "leading_digits",
                            c: 9,
                            type: String
                         },
                         26: {
                            name: "leading_zero_possible",
                            c: 8,
                            defaultValue: !1,
                            type: Boolean
                         }
                      })), l
                   }, y.j = y.prototype.j, v.prototype.a = function (l) {
                      throw new l.b, Error("Unimplemented")
                   }, v.prototype.b = function (l, n) {
                      if (11 == l.a || 10 == l.a) return n instanceof a ? n : this.a(l.i.prototype.j(), n);
                      if (14 == l.a) {
                         if ("string" == typeof n && Z.test(n)) {
                            var u = Number(n);
                            if (0 < u) return u
                         }
                         return n
                      }
                      if (!l.h) return n;
                      if ((u = l.i) === String) {
                         if ("number" == typeof n) return String(n)
                      } else if (u === Number && "string" == typeof n && ("Infinity" === n || "-Infinity" === n || "NaN" === n || Z.test(n))) return Number(n);
                      return n
                   };
                   var Z = /^-?[0-9]+$/;
                   n(S, v), S.prototype.a = function (l, n) {
                      var u = new l.b;
                      return u.g = this, u.a = n, u.b = {}, u
                   }, n(_, S), _.prototype.b = function (l, n) {
                      return 8 == l.a ? !!n : v.prototype.b.apply(this, arguments)
                   }, _.prototype.a = function (l, n) {
                      return _.M.a.call(this, l, n)
                   };
                   var z = {
                         1: "US AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI".split(" ")
                      },
                      Q = {
                         AG: [null, [null, null, "(?:268|[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10],
                               [7]
                            ],
                            [null, null, "268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}", null, null, null, "2684601234", null, null, null, [7]],
                            [null, null, "268(?:464|7(?:1[3-9]|2\\d|3[246]|64|[78][0-689]))\\d{4}", null, null, null, "2684641234", null, null, null, [7]],
                            [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                            [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                            [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                            [null, null, "26848[01]\\d{4}", null, null, null, "2684801234", null, null, null, [7]], "AG", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, "26840[69]\\d{4}", null, null, null, "2684061234", null, null, null, [7]], null, "268", [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
                         ],
                         AI: [null, [null, null, "(?:264|[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10],
                               [7]
                            ],
                            [null, null, "2644(?:6[12]|9[78])\\d{4}", null, null, null, "2644612345", null, null, null, [7]],
                            [null, null, "264(?:235|476|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}", null, null, null, "2642351234", null, null, null, [7]],
                            [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                            [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                            [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]], "AI", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "264", [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
                         ],
                         AS: [null, [null, null, "(?:[58]\\d\\d|684|900)\\d{7}", null, null, null, null, null, null, [10],
                               [7]
                            ],
                            [null, null, "6846(?:22|33|44|55|77|88|9[19])\\d{4}", null, null, null, "6846221234", null, null, null, [7]],
                            [null, null, "684(?:2(?:5[2468]|72)|7(?:3[13]|70))\\d{4}", null, null, null, "6847331234", null, null, null, [7]],
                            [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                            [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                            [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]], "AS", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "684", [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
                         ],
                         BB: [null, [null, null, "(?:246|[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10],
                               [7]
                            ],
                            [null, null, "246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7[35]7|9(?:1[89]|63))\\d{4}", null, null, null, "2464123456", null, null, null, [7]],
                            [null, null, "246(?:2(?:[356]\\d|4[0-57-9]|8[0-79])|45\\d|69[5-7]|8(?:[2-5]\\d|83))\\d{4}", null, null, null, "2462501234", null, null, null, [7]],
                            [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                            [null, null, "(?:246976|900[2-9]\\d\\d)\\d{4}", null, null, null, "9002123456", null, null, null, [7]],
                            [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                            [null, null, "24631\\d{5}", null, null, null, "2463101234", null, null, null, [7]], "BB", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "246", [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, "246(?:292|367|4(?:1[7-9]|3[01]|44|67)|7(?:36|53))\\d{4}", null, null, null, "2464301234", null, null, null, [7]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
                         ],
                         BM: [null, [null, null, "(?:441|[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10],
                               [7]
                            ],
                            [null, null, "441(?:2(?:02|23|[3479]\\d|61)|[46]\\d\\d|5(?:4\\d|60|89)|824)\\d{4}", null, null, null, "4412345678", null, null, null, [7]],
                            [null, null, "441(?:[37]\\d|5[0-39])\\d{5}", null, null, null, "4413701234", null, null, null, [7]],
                            [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                            [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                            [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]], "BM", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "441", [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
                         ],
                         BS: [null, [null, null, "(?:242|[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10],
                               [7]
                            ],
                            [null, null, "242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[347]|8[0-4]|9[2-467])|461|502|6(?:0[1-4]|12|2[013]|[45]0|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}", null, null, null, "2423456789", null, null, null, [7]],
                            [null, null, "242(?:3(?:5[79]|7[56]|95)|4(?:[23][1-9]|4[1-35-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-46-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\\d|[89]9))\\d{4}", null, null, null, "2423591234", null, null, null, [7]],
                            [null, null, "(?:242300|8(?:00|33|44|55|66|77|88)[2-9]\\d\\d)\\d{4}", null, null, null, "8002123456", null, null, null, [7]],
                            [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                            [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]], "BS", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "242", [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, "242225[0-46-9]\\d{3}", null, null, null, "2422250123"], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
                         ],
                         CA: [null, [null, null, "(?:[2-8]\\d|90)\\d{8}", null, null, null, null, null, null, [10],
                               [7]
                            ],
                            [null, null, "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", null, null, null, "5062345678", null, null, null, [7]],
                            [null, null, "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", null, null, null, "5062345678", null, null, null, [7]],
                            [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                            [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                            [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, "(?:5(?:00|2[12]|33|44|66|77|88)|622)[2-9]\\d{6}", null, null, null, "5002345678"],
                            [null, null, "600[2-9]\\d{6}", null, null, null, "6002012345"], "CA", 1, "011", "1", null, null, "1", null, null, 1, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
                         ],
                         DM: [null, [null, null, "(?:[58]\\d\\d|767|900)\\d{7}", null, null, null, null, null, null, [10],
                               [7]
                            ],
                            [null, null, "767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4]|70[1-3])\\d{4}", null, null, null, "7674201234", null, null, null, [7]],
                            [null, null, "767(?:2(?:[2-4689]5|7[5-7])|31[5-7]|61[1-7])\\d{4}", null, null, null, "7672251234", null, null, null, [7]],
                            [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                            [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                            [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]], "DM", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "767", [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
                         ],
                         DO: [null, [null, null, "(?:[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10],
                               [7]
                            ],
                            [null, null, "8(?:[04]9[2-9]\\d\\d|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d\\d|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9])))\\d{4}", null, null, null, "8092345678", null, null, null, [7]],
                            [null, null, "8[024]9[2-9]\\d{6}", null, null, null, "8092345678", null, null, null, [7]],
                            [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                            [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                            [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]], "DO", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "8[024]9", [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
                         ],
                         GD: [null, [null, null, "(?:473|[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10],
                               [7]
                            ],
                            [null, null, "473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}", null, null, null, "4732691234", null, null, null, [7]],
                            [null, null, "473(?:4(?:0[2-79]|1[04-9]|2[0-5]|58)|5(?:2[01]|3[3-8])|901)\\d{4}", null, null, null, "4734031234", null, null, null, [7]],
                            [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                            [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                            [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]], "GD", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "473", [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
                         ],
                         GU: [null, [null, null, "(?:[58]\\d\\d|671|900)\\d{7}", null, null, null, null, null, null, [10],
                               [7]
                            ],
                            [null, null, "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}", null, null, null, "6713001234", null, null, null, [7]],
                            [null, null, "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}", null, null, null, "6713001234", null, null, null, [7]],
                            [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                            [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                            [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]], "GU", 1, "011", "1", null, null, "1", null, null, 1, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "671", [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
                         ],
                         JM: [null, [null, null, "(?:[58]\\d\\d|658|900)\\d{7}", null, null, null, null, null, null, [10],
                               [7]
                            ],
                            [null, null, "(?:658[2-9]\\d\\d|876(?:5(?:0[12]|1[0-468]|2[35]|63)|6(?:0[1-3579]|1[0237-9]|[23]\\d|40|5[06]|6[2-589]|7[05]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468])))\\d{4}", null, null, null, "8765230123", null, null, null, [7]],
                            [null, null, "876(?:(?:2[14-9]|[348]\\d)\\d|5(?:0[3-9]|[2-57-9]\\d|6[0-24-9])|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579]))\\d{4}", null, null, null, "8762101234", null, null, null, [7]],
                            [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                            [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                            [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]], "JM", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "658|876", [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
                         ],
                         KN: [null, [null, null, "(?:[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10],
                               [7]
                            ],
                            [null, null, "869(?:2(?:29|36)|302|4(?:6[015-9]|70))\\d{4}", null, null, null, "8692361234", null, null, null, [7]],
                            [null, null, "869(?:5(?:5[6-8]|6[5-7])|66\\d|76[02-7])\\d{4}", null, null, null, "8697652917", null, null, null, [7]],
                            [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                            [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                            [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]], "KN", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "869", [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
                         ],
                         KY: [null, [null, null, "(?:345|[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10],
                               [7]
                            ],
                            [null, null, "345(?:2(?:22|44)|444|6(?:23|38|40)|7(?:4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}", null, null, null, "3452221234", null, null, null, [7]],
                            [null, null, "345(?:32[1-9]|5(?:1[67]|2[5-79]|4[6-9]|50|76)|649|9(?:1[67]|2[2-9]|3[689]))\\d{4}", null, null, null, "3453231234", null, null, null, [7]],
                            [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002345678"],
                            [null, null, "(?:345976|900[2-9]\\d\\d)\\d{4}", null, null, null, "9002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]], "KY", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, "345849\\d{4}", null, null, null, "3458491234"], null, "345", [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
                         ],
                         LC: [null, [null, null, "(?:[58]\\d\\d|758|900)\\d{7}", null, null, null, null, null, null, [10],
                               [7]
                            ],
                            [null, null, "758(?:4(?:30|5\\d|6[2-9]|8[0-2])|57[0-2]|638)\\d{4}", null, null, null, "7584305678", null, null, null, [7]],
                            [null, null, "758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2\\d|3[01]))\\d{4}", null, null, null, "7582845678", null, null, null, [7]],
                            [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                            [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                            [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]], "LC", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "758", [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
                         ],
                         MP: [null, [null, null, "(?:[58]\\d\\d|(?:67|90)0)\\d{7}", null, null, null, null, null, null, [10],
                               [7]
                            ],
                            [null, null, "670(?:2(?:3[3-7]|56|8[5-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}", null, null, null, "6702345678", null, null, null, [7]],
                            [null, null, "670(?:2(?:3[3-7]|56|8[5-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}", null, null, null, "6702345678", null, null, null, [7]],
                            [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                            [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                            [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]], "MP", 1, "011", "1", null, null, "1", null, null, 1, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "670", [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
                         ],
                         MS: [null, [null, null, "(?:(?:[58]\\d\\d|900)\\d\\d|66449)\\d{5}", null, null, null, null, null, null, [10],
                               [7]
                            ],
                            [null, null, "664491\\d{4}", null, null, null, "6644912345", null, null, null, [7]],
                            [null, null, "66449[2-6]\\d{4}", null, null, null, "6644923456", null, null, null, [7]],
                            [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                            [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                            [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]], "MS", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "664", [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
                         ],
                         PR: [null, [null, null, "(?:[589]\\d\\d|787)\\d{7}", null, null, null, null, null, null, [10],
                               [7]
                            ],
                            [null, null, "(?:787|939)[2-9]\\d{6}", null, null, null, "7872345678", null, null, null, [7]],
                            [null, null, "(?:787|939)[2-9]\\d{6}", null, null, null, "7872345678", null, null, null, [7]],
                            [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002345678"],
                            [null, null, "900[2-9]\\d{6}", null, null, null, "9002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]], "PR", 1, "011", "1", null, null, "1", null, null, 1, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "787|939", [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
                         ],
                         SX: [null, [null, null, "(?:(?:[58]\\d\\d|900)\\d|7215)\\d{6}", null, null, null, null, null, null, [10],
                               [7]
                            ],
                            [null, null, "7215(?:4[2-8]|8[239]|9[056])\\d{4}", null, null, null, "7215425678", null, null, null, [7]],
                            [null, null, "7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}", null, null, null, "7215205678", null, null, null, [7]],
                            [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                            [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                            [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]], "SX", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "721", [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
                         ],
                         TC: [null, [null, null, "(?:[58]\\d\\d|649|900)\\d{7}", null, null, null, null, null, null, [10],
                               [7]
                            ],
                            [null, null, "649(?:712|9(?:4\\d|50))\\d{4}", null, null, null, "6497121234", null, null, null, [7]],
                            [null, null, "649(?:2(?:3[129]|4[1-7])|3(?:3[1-389]|4[1-8])|4[34][1-3])\\d{4}", null, null, null, "6492311234", null, null, null, [7]],
                            [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002345678"],
                            [null, null, "900[2-9]\\d{6}", null, null, null, "9002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                            [null, null, "64971[01]\\d{4}", null, null, null, "6497101234", null, null, null, [7]], "TC", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "649", [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
                         ],
                         TT: [null, [null, null, "(?:[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10],
                               [7]
                            ],
                            [null, null, "868(?:2(?:01|[23]\\d)|6(?:0[7-9]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}", null, null, null, "8682211234", null, null, null, [7]],
                            [null, null, "868(?:2(?:6[6-9]|[7-9]\\d)|[37](?:0[1-9]|1[02-9]|[2-9]\\d)|4[6-9]\\d|6(?:20|78|8\\d))\\d{4}", null, null, null, "8682911234", null, null, null, [7]],
                            [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002345678"],
                            [null, null, "900[2-9]\\d{6}", null, null, null, "9002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]], "TT", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "868", [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "868619\\d{4}", null, null, null, "8686191234", null, null, null, [7]]
                         ],
                         US: [null, [null, null, "[2-9]\\d{9}", null, null, null, null, null, null, [10],
                               [7]
                            ],
                            [null, null, "(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[017]|6[0-279]|78|8[0-2])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}", null, null, null, "2015550123", null, null, null, [7]],
                            [null, null, "(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[017]|6[0-279]|78|8[0-2])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}", null, null, null, "2015550123", null, null, null, [7]],
                            [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002345678"],
                            [null, null, "900[2-9]\\d{6}", null, null, null, "9002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]], "US", 1, "011", "1", null, null, "1", null, null, 1, [
                               [null, "(\\d{3})(\\d{4})", "$1-$2", ["[2-9]"]],
                               [null, "(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], null, null, 1]
                            ],
                            [
                               [null, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-9]"]]
                            ],
                            [null, null, null, null, null, null, null, null, null, [-1]], 1, null, [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, "710[2-9]\\d{6}", null, null, null, "7102123456"], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
                         ],
                         VC: [null, [null, null, "(?:[58]\\d\\d|784|900)\\d{7}", null, null, null, null, null, null, [10],
                               [7]
                            ],
                            [null, null, "784(?:266|3(?:6[6-9]|7\\d|8[0-24-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}", null, null, null, "7842661234", null, null, null, [7]],
                            [null, null, "784(?:4(?:3[0-5]|5[45]|89|9[0-8])|5(?:2[6-9]|3[0-4]))\\d{4}", null, null, null, "7844301234", null, null, null, [7]],
                            [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002345678"],
                            [null, null, "900[2-9]\\d{6}", null, null, null, "9002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]], "VC", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "784", [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
                         ],
                         VG: [null, [null, null, "(?:284|[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10],
                               [7]
                            ],
                            [null, null, "284(?:(?:229|774|8(?:52|6[459]))\\d|4(?:22\\d|9(?:[45]\\d|6[0-5])))\\d{3}", null, null, null, "2842291234", null, null, null, [7]],
                            [null, null, "284(?:(?:3(?:0[0-3]|4[0-7]|68|9[34])|54[0-57])\\d|4(?:(?:4[0-6]|68)\\d|9(?:6[6-9]|9\\d)))\\d{3}", null, null, null, "2843001234", null, null, null, [7]],
                            [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002345678"],
                            [null, null, "900[2-9]\\d{6}", null, null, null, "9002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]], "VG", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "284", [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
                         ],
                         VI: [null, [null, null, "(?:(?:34|90)0|[58]\\d\\d)\\d{7}", null, null, null, null, null, null, [10],
                               [7]
                            ],
                            [null, null, "340(?:2(?:01|2[06-8]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-57-9]|27|7\\d)|884|998)\\d{4}", null, null, null, "3406421234", null, null, null, [7]],
                            [null, null, "340(?:2(?:01|2[06-8]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-57-9]|27|7\\d)|884|998)\\d{4}", null, null, null, "3406421234", null, null, null, [7]],
                            [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002345678"],
                            [null, null, "900[2-9]\\d{6}", null, null, null, "9002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                            [null, null, null, null, null, null, null, null, null, [-1]], "VI", 1, "011", "1", null, null, "1", null, null, 1, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "340", [null, null, null, null, null, null, null, null, null, [-1]],
                            [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
                         ]
                      };
                   w.b = function () {
                      return w.a ? w.a : w.a = new w
                   };
                   var W = {
                         0: "0",
                         1: "1",
                         2: "2",
                         3: "3",
                         4: "4",
                         5: "5",
                         6: "6",
                         7: "7",
                         8: "8",
                         9: "9",
                         "ï¼": "0",
                         "ï¼‘": "1",
                         "ï¼’": "2",
                         "ï¼“": "3",
                         "ï¼”": "4",
                         "ï¼•": "5",
                         "ï¼–": "6",
                         "ï¼—": "7",
                         "ï¼˜": "8",
                         "ï¼™": "9",
                         "Ù ": "0",
                         "Ù¡": "1",
                         "Ù¢": "2",
                         "Ù£": "3",
                         "Ù¤": "4",
                         "Ù¥": "5",
                         "Ù¦": "6",
                         "Ù§": "7",
                         "Ù¨": "8",
                         "Ù©": "9",
                         "Û°": "0",
                         "Û±": "1",
                         "Û²": "2",
                         "Û³": "3",
                         "Û´": "4",
                         "Ûµ": "5",
                         "Û¶": "6",
                         "Û·": "7",
                         "Û¸": "8",
                         "Û¹": "9"
                      },
                      ll = RegExp("[+ï¼‹]+"),
                      nl = RegExp("([0-9ï¼-ï¼™Ù -Ù©Û°-Û¹])"),
                      ul = /^\(?\$1\)?$/,
                      tl = new y;
                   h(tl, 11, "NA");
                   var el = /\[([^\[\]])*\]/g,
                      rl = /\d(?=[^,}][^,}])/g,
                      il = RegExp("^[-xâ€-â€•âˆ’ãƒ¼ï¼-ï¼ Â Â­â€‹â ã€€()ï¼ˆï¼‰ï¼»ï¼½.\\[\\]/~â“âˆ¼ï½ž]*(\\$\\d[-xâ€-â€•âˆ’ãƒ¼ï¼-ï¼ Â Â­â€‹â ã€€()ï¼ˆï¼‰ï¼»ï¼½.\\[\\]/~â“âˆ¼ï½ž]*)+$"),
                      dl = /[- ]/;
                   M.prototype.K = function () {
                      this.C = "", t(this.i), t(this.u), t(this.m), this.s = 0, this.w = "", t(this.b), this.h = "", t(this.a), this.l = !0, this.A = this.o = this.F = !1, this.f = [], this.B = !1, this.g != this.J && (this.g = B(this, this.D))
                   }, M.prototype.L = function (l) {
                      return this.C = function (l, n) {
                         l.i.a(n);
                         var u, e = n;
                         if (nl.test(e) || 1 == l.i.b.length && ll.test(e) ? ("+" == (e = n) ? (u = e, l.u.a(e)) : (u = W[e], l.u.a(u), l.a.a(u)), n = u) : (l.l = !1, l.F = !0), !l.l) {
                            if (!l.F)
                               if ($(l)) {
                                  if (R(l)) return D(l)
                               } else if (0 < l.h.length && (e = l.a.toString(), t(l.a), l.a.a(l.h), l.a.a(e), u = (e = l.b.toString()).lastIndexOf(l.h), t(l.b), l.b.a(e.substring(0, u))), l.h != V(l)) return l.b.a(" "), D(l);
                            return l.i.toString()
                         }
                         switch (l.u.b.length) {
                            case 0:
                            case 1:
                            case 2:
                               return l.i.toString();
                            case 3:
                               if (!$(l)) return l.h = V(l), I(l);
                               l.A = !0;
                            default:
                               return l.A ? (R(l) && (l.A = !1), l.b.toString() + l.a.toString()) : 0 < l.f.length ? (e = E(l, n), 0 < (u = G(l)).length ? u : (N(l, l.a.toString()), C(l) ? P(l) : l.l ? T(l, e) : l.i.toString())) : I(l)
                         }
                      }(this, l)
                   }, l("Cleave.AsYouTypeFormatter", M), l("Cleave.AsYouTypeFormatter.prototype.inputDigit", M.prototype.L), l("Cleave.AsYouTypeFormatter.prototype.clear", M.prototype.K)
                }).call("object" == typeof u.g && u.g ? u.g : window)
             }
          },
          n = {};
 
       function u(t) {
          var e = n[t];
          if (void 0 !== e) return e.exports;
          var r = n[t] = {
             exports: {}
          };
          return l[t](r, r.exports, u), r.exports
       }
       u.n = function (l) {
          var n = l && l.__esModule ? function () {
             return l.default
          } : function () {
             return l
          };
          return u.d(n, {
             a: n
          }), n
       }, u.d = function (l, n) {
          for (var t in n) u.o(n, t) && !u.o(l, t) && Object.defineProperty(l, t, {
             enumerable: !0,
             get: n[t]
          })
       }, u.g = function () {
          if ("object" == typeof globalThis) return globalThis;
          try {
             return this || new Function("return this")()
          } catch (l) {
             if ("object" == typeof window) return window
          }
       }(), u.o = function (l, n) {
          return Object.prototype.hasOwnProperty.call(l, n)
       }, u.r = function (l) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(l, Symbol.toStringTag, {
             value: "Module"
          }), Object.defineProperty(l, "__esModule", {
             value: !0
          })
       };
       var t = {};
       return function () {
          "use strict";
          u.r(t), u.d(t, {
             phone: function () {
                return l
             }
          });
          var l = u(9634)
       }(), t
    }()
 }));