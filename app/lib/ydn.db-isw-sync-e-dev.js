(function (name, definition, context) {if (typeof context['module'] !== 'undefined' && context['module']['exports']) {context['module']['exports'] = definition.apply(context);}else if (typeof context['define'] !== 'undefined' && context['define'] === 'function' && context['define']['amd']) {define(name, [], definition);}else {context[name] = definition();}})('ydn', function () {var l, aa = aa || {}, q = this;
function u(a) {
  return void 0 !== a;
}
function ba() {
}
function ca(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function v(a) {
  return "array" == ca(a);
}
function w(a) {
  var b = ca(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function x(a) {
  return "string" == typeof a;
}
function da(a) {
  return "boolean" == typeof a;
}
function A(a) {
  return "number" == typeof a;
}
function C(a) {
  return "function" == ca(a);
}
function D(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
var ea = "closure_uid_" + (1E9 * Math.random() >>> 0), fa = 0;
function ga(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function ha(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}
function E(a, b, c) {
  E = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ga : ha;
  return E.apply(null, arguments);
}
var ia = Date.now || function() {
  return+new Date;
};
function ja(a, b) {
  var c = a.split("."), d = q;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for (var e;c.length && (e = c.shift());) {
    !c.length && u(b) ? d[e] = b : d[e] ? d = d[e] : d = d[e] = {};
  }
}
function G(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.q = b.prototype;
  a.prototype = new c;
  a.kd = function(a, c, f) {
    return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
}
;function ka(a) {
  a.prototype.then = a.prototype.then;
  a.prototype.$goog_Thenable = !0;
}
function la(a) {
  if (!a) {
    return!1;
  }
  try {
    return!!a.$goog_Thenable;
  } catch (b) {
    return!1;
  }
}
;function ma(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, ma);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
}
G(ma, Error);
ma.prototype.name = "CustomError";
function na(a) {
  return/^[\s\xa0]*$/.test(a);
}
function oa(a) {
  for (var b = 0;1 > b;b++) {
    if ('"' == a.charAt(0) && '"' == a.charAt(a.length - 1)) {
      return a.substring(1, a.length - 1);
    }
  }
  return a;
}
var pa = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"}, qa = {"'":"\\'"};
function ra(a) {
  a = String(a);
  if (a.quote) {
    return a.quote();
  }
  for (var b = ['"'], c = 0;c < a.length;c++) {
    var d = a.charAt(c), e = d.charCodeAt(0), f = c + 1, g;
    if (!(g = pa[d])) {
      if (!(31 < e && 127 > e)) {
        if (d in qa) {
          d = qa[d];
        } else {
          if (d in pa) {
            d = qa[d] = pa[d];
          } else {
            e = d;
            g = d.charCodeAt(0);
            if (31 < g && 127 > g) {
              e = d;
            } else {
              if (256 > g) {
                if (e = "\\x", 16 > g || 256 < g) {
                  e += "0";
                }
              } else {
                e = "\\u", 4096 > g && (e += "0");
              }
              e += g.toString(16).toUpperCase();
            }
            d = qa[d] = e;
          }
        }
      }
      g = d;
    }
    b[f] = g;
  }
  b.push('"');
  return b.join("");
}
function sa(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
;function ta(a) {
  q.setTimeout(function() {
    throw a;
  }, 0);
}
var ua;
function va() {
  if (q.Promise && q.Promise.resolve) {
    var a = q.Promise.resolve();
    return function(b) {
      a.then(function() {
        try {
          b();
        } catch (a) {
          ta(a);
        }
      });
    };
  }
  var b = q.MessageChannel;
  "undefined" === typeof b && "undefined" !== typeof window && window.postMessage && window.addEventListener && (b = function() {
    var a = document.createElement("iframe");
    a.style.display = "none";
    a.src = "";
    document.documentElement.appendChild(a);
    var b = a.contentWindow, a = b.document;
    a.open();
    a.write("");
    a.close();
    var c = "callImmediate" + Math.random(), d = b.location.protocol + "//" + b.location.host, a = E(function(a) {
      if (a.origin == d || a.data == c) {
        this.port1.onmessage();
      }
    }, this);
    b.addEventListener("message", a, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      b.postMessage(c, d);
    }};
  });
  if ("undefined" !== typeof b) {
    var c = new b, d = {}, e = d;
    c.port1.onmessage = function() {
      d = d.next;
      var a = d.kc;
      d.kc = null;
      a();
    };
    return function(a) {
      e.next = {kc:a};
      e = e.next;
      c.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function(a) {
    var b = document.createElement("script");
    b.onreadystatechange = function() {
      b.onreadystatechange = null;
      b.parentNode.removeChild(b);
      b = null;
      a();
      a = null;
    };
    document.documentElement.appendChild(b);
  } : function(a) {
    q.setTimeout(a, 0);
  };
}
;function wa(a, b) {
  if (!xa) {
    var c = ya;
    C(q.setImmediate) ? q.setImmediate(c) : (ua || (ua = va()), ua(c));
    xa = !0;
  }
  za.push(new Aa(a, b));
}
var xa = !1, za = [];
function ya() {
  for (;za.length;) {
    var a = za;
    za = [];
    for (var b = 0;b < a.length;b++) {
      var c = a[b];
      try {
        c.a.call(c.b);
      } catch (d) {
        ta(d);
      }
    }
  }
  xa = !1;
}
function Aa(a, b) {
  this.a = a;
  this.b = b;
}
;function Ca(a, b) {
  this.b = Da;
  this.f = void 0;
  this.a = this.c = null;
  this.d = this.e = !1;
  try {
    var c = this;
    a.call(b, function(a) {
      Ea(c, Ga, a);
    }, function(a) {
      Ea(c, Ha, a);
    });
  } catch (d) {
    Ea(this, Ha, d);
  }
}
var Da = 0, Ga = 2, Ha = 3;
Ca.prototype.then = function(a, b, c) {
  return Ia(this, C(a) ? a : null, C(b) ? b : null, c);
};
ka(Ca);
function Ja(a) {
  a.b == Da && wa(function() {
    var a = new Ka(void 0);
    La(this, a);
  }, a);
}
function La(a, b) {
  if (a.b == Da) {
    if (a.c) {
      var c = a.c;
      if (c.a) {
        for (var d = 0, e = -1, f = 0, g;g = c.a[f];f++) {
          if (g = g.$a) {
            if (d++, g == a && (e = f), 0 <= e && 1 < d) {
              break;
            }
          }
        }
        0 <= e && (c.b == Da && 1 == d ? La(c, b) : (d = c.a.splice(e, 1)[0], Ma(c, d, Ha, b)));
      }
    } else {
      Ea(a, Ha, b);
    }
  }
}
function Na(a, b) {
  a.a && a.a.length || a.b != Ga && a.b != Ha || Oa(a);
  a.a || (a.a = []);
  a.a.push(b);
}
function Ia(a, b, c, d) {
  var e = {$a:null, qc:null, sc:null};
  e.$a = new Ca(function(a, g) {
    e.qc = b ? function(c) {
      try {
        var e = b.call(d, c);
        a(e);
      } catch (m) {
        g(m);
      }
    } : a;
    e.sc = c ? function(b) {
      try {
        var e = c.call(d, b);
        !u(e) && b instanceof Ka ? g(b) : a(e);
      } catch (m) {
        g(m);
      }
    } : g;
  });
  e.$a.c = a;
  Na(a, e);
  return e.$a;
}
Ca.prototype.g = function(a) {
  this.b = Da;
  Ea(this, Ga, a);
};
Ca.prototype.h = function(a) {
  this.b = Da;
  Ea(this, Ha, a);
};
function Ea(a, b, c) {
  if (a.b == Da) {
    if (a == c) {
      b = Ha, c = new TypeError("Promise cannot resolve to itself");
    } else {
      if (la(c)) {
        a.b = 1;
        c.then(a.g, a.h, a);
        return;
      }
      if (D(c)) {
        try {
          var d = c.then;
          if (C(d)) {
            Pa(a, c, d);
            return;
          }
        } catch (e) {
          b = Ha, c = e;
        }
      }
    }
    a.f = c;
    a.b = b;
    Oa(a);
    b != Ha || c instanceof Ka || Qa(a, c);
  }
}
function Pa(a, b, c) {
  function d(b) {
    f || (f = !0, a.h(b));
  }
  function e(b) {
    f || (f = !0, a.g(b));
  }
  a.b = 1;
  var f = !1;
  try {
    c.call(b, e, d);
  } catch (g) {
    d(g);
  }
}
function Oa(a) {
  a.e || (a.e = !0, wa(a.m, a));
}
Ca.prototype.m = function() {
  for (;this.a && this.a.length;) {
    var a = this.a;
    this.a = [];
    for (var b = 0;b < a.length;b++) {
      Ma(this, a[b], this.b, this.f);
    }
  }
  this.e = !1;
};
function Ma(a, b, c, d) {
  if (c == Ga) {
    b.qc(d);
  } else {
    for (;a && a.d;a = a.c) {
      a.d = !1;
    }
    b.sc(d);
  }
}
function Qa(a, b) {
  a.d = !0;
  wa(function() {
    a.d && Ra.call(null, b);
  });
}
var Ra = ta;
function Ka(a) {
  ma.call(this, a);
}
G(Ka, ma);
Ka.prototype.name = "cancel";
var H = Array.prototype, Sa = H.indexOf ? function(a, b, c) {
  return H.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (x(a)) {
    return x(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
}, Ta = H.forEach ? function(a, b, c) {
  H.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = x(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
}, Ua = H.map ? function(a, b, c) {
  return H.map.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = Array(d), f = x(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && (e[g] = b.call(c, f[g], g, a));
  }
  return e;
}, Va = H.some ? function(a, b, c) {
  return H.some.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = x(a) ? a.split("") : a, f = 0;f < d;f++) {
    if (f in e && b.call(c, e[f], f, a)) {
      return!0;
    }
  }
  return!1;
}, Wa = H.every ? function(a, b, c) {
  return H.every.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = x(a) ? a.split("") : a, f = 0;f < d;f++) {
    if (f in e && !b.call(c, e[f], f, a)) {
      return!1;
    }
  }
  return!0;
};
function Xa(a, b) {
  var c = Ya(a, b, void 0);
  return 0 > c ? null : x(a) ? a.charAt(c) : a[c];
}
function Ya(a, b, c) {
  for (var d = a.length, e = x(a) ? a.split("") : a, f = 0;f < d;f++) {
    if (f in e && b.call(c, e[f], f, a)) {
      return f;
    }
  }
  return-1;
}
function Za(a) {
  if (!v(a)) {
    for (var b = a.length - 1;0 <= b;b--) {
      delete a[b];
    }
  }
  a.length = 0;
}
function $a(a, b) {
  var c = Sa(a, b), d;
  (d = 0 <= c) && H.splice.call(a, c, 1);
  return d;
}
function ab(a) {
  return H.concat.apply(H, arguments);
}
function cb(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
}
function db(a, b) {
  for (var c = 1;c < arguments.length;c++) {
    var d = arguments[c], e;
    if (v(d) || (e = w(d)) && Object.prototype.hasOwnProperty.call(d, "callee")) {
      a.push.apply(a, d);
    } else {
      if (e) {
        for (var f = a.length, g = d.length, h = 0;h < g;h++) {
          a[f + h] = d[h];
        }
      } else {
        a.push(d);
      }
    }
  }
}
function eb(a, b, c, d) {
  H.splice.apply(a, fb(arguments, 1));
}
function fb(a, b, c) {
  return 2 >= arguments.length ? H.slice.call(a, b) : H.slice.call(a, b, c);
}
function gb(a, b) {
  if (!w(a) || !w(b) || a.length != b.length) {
    return!1;
  }
  for (var c = a.length, d = hb, e = 0;e < c;e++) {
    if (!d(a[e], b[e])) {
      return!1;
    }
  }
  return!0;
}
function ib(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
function hb(a, b) {
  return a === b;
}
function jb(a, b) {
  var c;
  c = kb || ib;
  for (var d = 0, e = a.length, f;d < e;) {
    var g = d + e >> 1, h;
    h = c(b, a[g]);
    0 < h ? d = g + 1 : (e = g, f = !h);
  }
  c = f ? d : ~d;
  0 > c && eb(a, -(c + 1), 0, b);
}
;/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function I(a, b) {
  this.h = [];
  this.O = b || null;
  this.b = this.c = !1;
  this.d = void 0;
  this.ja = this.D = this.m = !1;
  this.f = 0;
  this.g = null;
  this.J = 0;
}
l = I.prototype;
l.bb = function(a, b) {
  this.m = !1;
  lb(this, a, b);
};
function lb(a, b, c) {
  a.c = !0;
  a.d = c;
  a.b = !b;
  a.Nb();
}
function mb(a) {
  if (a.c) {
    if (!a.ja) {
      throw new nb;
    }
    a.ja = !1;
  }
}
l.l = function(a) {
  mb(this);
  lb(this, !0, a);
};
l.j = function(a) {
  mb(this);
  lb(this, !1, a);
};
l.W = function(a, b) {
  return J(this, a, null, b);
};
l.Ib = function(a, b) {
  return J(this, null, a, b);
};
l.K = function(a, b) {
  return J(this, a, a, b);
};
function J(a, b, c, d) {
  a.h.push([b, c, d]);
  a.c && a.Nb();
  return a;
}
l.then = function(a, b, c) {
  var d, e, f = new Ca(function(a, b) {
    d = a;
    e = b;
  });
  J(this, d, function(a) {
    e(a);
  });
  return f.then(a, b, c);
};
ka(I);
function ob(a) {
  return Va(a.h, function(a) {
    return C(a[1]);
  });
}
I.prototype.Nb = function() {
  this.f && this.c && ob(this) && (pb(this.f), this.f = 0);
  this.g && (this.g.J--, delete this.g);
  for (var a = this.d, b = !1, c = !1;this.h.length && !this.m;) {
    var d = this.h.shift(), e = d[0], f = d[1], d = d[2];
    if (e = this.b ? f : e) {
      try {
        var g = e.call(d || this.O, a);
        u(g) && (this.b = this.b && (g == a || g instanceof Error), this.d = a = g);
        la(a) && (this.m = c = !0);
      } catch (h) {
        a = h, this.b = !0, ob(this) || (b = !0);
      }
    }
  }
  this.d = a;
  c && (c = E(this.bb, this, !0), g = E(this.bb, this, !1), a instanceof I ? (J(a, c, g), a.D = !0) : a.then(c, g));
  b && (a = new qb(a), rb[a.kb] = a, this.f = a.kb);
};
function sb(a) {
  var b = new I;
  b.l(a);
  return b;
}
function nb() {
  ma.call(this);
}
G(nb, ma);
nb.prototype.message = "Deferred has already fired";
nb.prototype.name = "AlreadyCalledError";
function qb(a) {
  this.kb = q.setTimeout(E(this.b, this), 0);
  this.a = a;
}
qb.prototype.b = function() {
  delete rb[this.kb];
  throw this.a;
};
var rb = {};
function pb(a) {
  var b = rb[a];
  b && (q.clearTimeout(b.kb), delete rb[a]);
}
;function K(a) {
  ma.call(this, a);
  this.name = "ydn.error.ArgumentException";
}
G(K, ma);
function tb(a) {
  ma.call(this, a);
  this.name = "ydn.error.NotSupportedException";
}
G(tb, ma);
function vb(a) {
  ma.call(this, a);
  this.name = "ydn.error.NotImplementedException";
}
G(vb, ma);
function wb(a) {
  ma.call(this, a);
  this.name = "ydn.error.InvalidOperationException";
}
G(wb, ma);
function xb(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, xb) : this.stack = Error().stack || "";
  a && (this.message = String(a));
  this.name = "ydn.error.InternalError";
}
G(xb, Error);
xb.prototype.name = "ydn.error.InternalError";
function yb(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = a[d];
  }
  return b;
}
function zb(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = d;
  }
  return b;
}
function Ab(a, b) {
  for (var c = w(b), d = c ? b : arguments, c = c ? 0 : 1;c < d.length && (a = a[d[c]], u(a));c++) {
  }
  return a;
}
var Bb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Cb(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < Bb.length;f++) {
      c = Bb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
;function Db(a) {
  if ("function" == typeof a.C) {
    return a.C();
  }
  if (x(a)) {
    return a.split("");
  }
  if (w(a)) {
    for (var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d]);
    }
    return b;
  }
  return yb(a);
}
function Eb(a, b) {
  if ("function" == typeof a.forEach) {
    a.forEach(b, void 0);
  } else {
    if (w(a) || x(a)) {
      Ta(a, b, void 0);
    } else {
      var c;
      if ("function" == typeof a.H) {
        c = a.H();
      } else {
        if ("function" != typeof a.C) {
          if (w(a) || x(a)) {
            c = [];
            for (var d = a.length, e = 0;e < d;e++) {
              c.push(e);
            }
          } else {
            c = zb(a);
          }
        } else {
          c = void 0;
        }
      }
      for (var d = Db(a), e = d.length, f = 0;f < e;f++) {
        b.call(void 0, d[f], c && c[f], a);
      }
    }
  }
}
;var Fb = "StopIteration" in q ? q.StopIteration : Error("StopIteration");
function Gb() {
}
Gb.prototype.next = function() {
  throw Fb;
};
Gb.prototype.Ga = function() {
  return this;
};
function Hb(a) {
  if (a instanceof Gb) {
    return a;
  }
  if ("function" == typeof a.Ga) {
    return a.Ga(!1);
  }
  if (w(a)) {
    var b = 0, c = new Gb;
    c.next = function() {
      for (;;) {
        if (b >= a.length) {
          throw Fb;
        }
        if (b in a) {
          return a[b++];
        }
        b++;
      }
    };
    return c;
  }
  throw Error("Not implemented");
}
function Ib(a, b) {
  if (w(a)) {
    try {
      Ta(a, b, void 0);
    } catch (c) {
      if (c !== Fb) {
        throw c;
      }
    }
  } else {
    a = Hb(a);
    try {
      for (;;) {
        b.call(void 0, a.next(), void 0, a);
      }
    } catch (d) {
      if (d !== Fb) {
        throw d;
      }
    }
  }
}
;function Jb(a, b) {
  this.b = {};
  this.a = [];
  this.d = this.c = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var d = 0;d < c;d += 2) {
      Kb(this, arguments[d], arguments[d + 1]);
    }
  } else {
    if (a) {
      a instanceof Jb ? (c = a.H(), d = a.C()) : (c = zb(a), d = yb(a));
      for (var e = 0;e < c.length;e++) {
        Kb(this, c[e], d[e]);
      }
    }
  }
}
l = Jb.prototype;
l.t = function() {
  return this.c;
};
l.C = function() {
  Lb(this);
  for (var a = [], b = 0;b < this.a.length;b++) {
    a.push(this.b[this.a[b]]);
  }
  return a;
};
l.H = function() {
  Lb(this);
  return this.a.concat();
};
l.ca = function() {
  return 0 == this.c;
};
l.clear = function() {
  this.b = {};
  this.d = this.c = this.a.length = 0;
};
function Mb(a, b) {
  return Nb(a.b, b) ? (delete a.b[b], a.c--, a.d++, a.a.length > 2 * a.c && Lb(a), !0) : !1;
}
function Lb(a) {
  if (a.c != a.a.length) {
    for (var b = 0, c = 0;b < a.a.length;) {
      var d = a.a[b];
      Nb(a.b, d) && (a.a[c++] = d);
      b++;
    }
    a.a.length = c;
  }
  if (a.c != a.a.length) {
    for (var e = {}, c = b = 0;b < a.a.length;) {
      d = a.a[b], Nb(e, d) || (a.a[c++] = d, e[d] = 1), b++;
    }
    a.a.length = c;
  }
}
l.get = function(a, b) {
  return Nb(this.b, a) ? this.b[a] : b;
};
function Kb(a, b, c) {
  Nb(a.b, b) || (a.c++, a.a.push(b), a.d++);
  a.b[b] = c;
}
l.forEach = function(a, b) {
  for (var c = this.H(), d = 0;d < c.length;d++) {
    var e = c[d], f = this.get(e);
    a.call(b, f, e, this);
  }
};
l.clone = function() {
  return new Jb(this);
};
l.Ga = function(a) {
  Lb(this);
  var b = 0, c = this.a, d = this.b, e = this.d, f = this, g = new Gb;
  g.next = function() {
    for (;;) {
      if (e != f.d) {
        throw Error("The map has changed since the iterator was created");
      }
      if (b >= c.length) {
        throw Fb;
      }
      var g = c[b++];
      return a ? g : d[g];
    }
  };
  return g;
};
function Nb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
;function Ob(a) {
  this.a = new Jb;
  if (a) {
    a = Db(a);
    for (var b = a.length, c = 0;c < b;c++) {
      this.add(a[c]);
    }
  }
}
function Pb(a) {
  var b = typeof a;
  return "object" == b && a || "function" == b ? "o" + (a[ea] || (a[ea] = ++fa)) : b.substr(0, 1) + a;
}
l = Ob.prototype;
l.t = function() {
  return this.a.t();
};
l.add = function(a) {
  Kb(this.a, Pb(a), a);
};
l.pa = function(a) {
  return Mb(this.a, Pb(a));
};
l.clear = function() {
  this.a.clear();
};
l.ca = function() {
  return this.a.ca();
};
l.contains = function(a) {
  a = Pb(a);
  return Nb(this.a.b, a);
};
l.C = function() {
  return this.a.C();
};
l.clone = function() {
  return new Ob(this);
};
l.Ga = function() {
  return this.a.Ga(!1);
};
var Qb;
a: {
  var Rb = q.navigator;
  if (Rb) {
    var Sb = Rb.userAgent;
    if (Sb) {
      Qb = Sb;
      break a;
    }
  }
  Qb = "";
}
function Tb(a) {
  return-1 != Qb.indexOf(a);
}
;function Ub() {
  return q.navigator || null;
}
var Vb = Tb("Opera") || Tb("OPR"), Wb = Tb("Trident") || Tb("MSIE"), Xb = Tb("Gecko") && -1 == Qb.toLowerCase().indexOf("webkit") && !(Tb("Trident") || Tb("MSIE")), Yb = -1 != Qb.toLowerCase().indexOf("webkit");
Yb && Tb("Mobile");
var Zb, $b = Ub();
Zb = $b && $b.platform || "";
Zb.indexOf("Mac");
Zb.indexOf("Win");
Zb.indexOf("Linux");
Ub() && (Ub().appVersion || "").indexOf("X11");
var ac = Qb;
ac && ac.indexOf("Android");
ac && ac.indexOf("iPhone");
ac && ac.indexOf("iPad");
function bc() {
  var a = q.document;
  return a ? a.documentMode : void 0;
}
var cc = function() {
  var a = "", b;
  if (Vb && q.opera) {
    return a = q.opera.version, C(a) ? a() : a;
  }
  Xb ? b = /rv\:([^\);]+)(\)|;)/ : Wb ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Yb && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(Qb)) ? a[1] : "");
  return Wb && (b = bc(), b > parseFloat(a)) ? String(b) : a;
}(), dc = {};
function ec(a) {
  var b;
  if (!(b = dc[a])) {
    b = 0;
    for (var c = String(cc).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var g = c[f] || "", h = d[f] || "", k = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var n = k.exec(g) || ["", "", ""], p = m.exec(h) || ["", "", ""];
        if (0 == n[0].length && 0 == p[0].length) {
          break;
        }
        b = sa(0 == n[1].length ? 0 : parseInt(n[1], 10), 0 == p[1].length ? 0 : parseInt(p[1], 10)) || sa(0 == n[2].length, 0 == p[2].length) || sa(n[2], p[2]);
      } while (0 == b);
    }
    b = dc[a] = 0 <= b;
  }
  return b;
}
var fc = q.document, gc = fc && Wb ? bc() || ("CSS1Compat" == fc.compatMode ? parseInt(cc, 10) : 5) : void 0;
function hc() {
}
function ic() {
}
function jc() {
}
;function kc() {
}
function mc() {
}
;function nc(a, b) {
  I.call(this, 0, b);
  this.e = [];
}
G(nc, I);
nc.prototype.Ba = function(a, b) {
  this.e.push([a, b]);
  return this;
};
function oc(a, b) {
  for (var c = 0;c < a.e.length;c++) {
    a.e[c][0].call(a.e[c][1], b);
  }
}
nc.prototype.l = function(a) {
  this.e.length = 0;
  nc.q.l.call(this, a);
};
nc.prototype.j = function(a) {
  this.e.length = 0;
  nc.q.j.call(this, a);
};
nc.prototype.Oa = function() {
  return this;
};
var pc = {READ_ONLY:"readonly", READ_WRITE:"readwrite", VERSION_CHANGE:"versionchange"}, qc = q.IDBRequest && "LOADING" in q.IDBRequest ? q.IDBTransaction : q.webkitIDBRequest && "LOADING" in q.webkitIDBRequest && 1 === q.webkitIDBTransaction.READ_WRITE ? q.webkitIDBTransaction : pc, rc = qc.READ_ONLY, L = qc.READ_WRITE, sc = qc.VERSION_CHANGE, tc = q.indexedDB || q.mozIndexedDB || q.webkitIndexedDB || q.moz_indexedDB || q.msIndexedDB;
I.prototype.done = I.prototype.W;
I.prototype.fail = I.prototype.Ib;
I.prototype.always = I.prototype.K;
nc.prototype.then = nc.prototype.then;
function uc(a, b) {
  var c, d;
  2 == arguments.length && x(arguments[1]) ? (c = !0, d = arguments[1].split(".")) : d = (c = w(b)) ? b : arguments;
  for (c = c ? 0 : 1;c < d.length && (a = a[d[c]], u(a));c++) {
  }
  return a;
}
function vc(a, b, c) {
  if (a) {
    if (-1 == b.indexOf(".")) {
      a[b] = c;
    } else {
      b = b.split(".");
      for (var d = b.pop(), e;e = b.shift();) {
        D(a[e]) || (a[e] = {}), a = a[e];
      }
      a[d] = c;
    }
  }
}
var wc = {};
function xc(a) {
  a = [a];
  for (var b = new yc, c = 0, d, e;void 0 !== (e = a.pop());) {
    0 === c % 4 && 12 < c + 4 && (b.write(c), c = 0);
    d = typeof e;
    if (e instanceof Array) {
      if (c += 4, 0 < e.length) {
        a.push(wc);
        for (d = e.length;d--;) {
          a.push(e[d]);
        }
        continue;
      } else {
        b.write(c);
      }
    } else {
      if ("number" === d) {
        c += 1, b.write(c), zc(b, e);
      } else {
        if (e instanceof Date) {
          c += 2, b.write(c), zc(b, e.valueOf());
        } else {
          if ("string" === d) {
            c += 3;
            b.write(c);
            c = b;
            for (d = 0;d < e.length;d++) {
              var f = e.charCodeAt(d);
              126 >= f ? c.write(f + 1) : 16510 >= f ? (f -= 127, c.write(128 | f >> 8, f & 255)) : c.write(192 | f >> 10, f >> 2 | 255, (f | 3) << 6);
            }
            c.write(0);
          } else {
            if (e === wc) {
              b.write(0);
            } else {
              return "";
            }
          }
        }
      }
    }
    c = 0;
  }
  return b.trim().toString();
}
function Ac(a) {
  for (var b = [], c = b, d = [], e, f, g = new Bc(a);null != Cc(g);) {
    if (0 === g.a) {
      c = d.pop();
    } else {
      if (null === g.a) {
        break;
      }
      do {
        e = g.a / 4 | 0;
        a = g.a % 4;
        for (var h = 0;h < e;h++) {
          f = [], c.push(f), d.push(c), c = f;
        }
        if (0 === a && 12 < g.a + 4) {
          Cc(g);
        } else {
          break;
        }
      } while (1);
      1 === a ? c.push(Dc(g)) : 2 === a ? c.push(new Date(Dc(g))) : 3 === a ? c.push(Ec(g)) : 0 === a && (c = d.pop());
    }
  }
  return b[0];
}
function zc(a, b) {
  var c, d, e;
  c = b;
  var f = e = d = 0;
  if (0 !== c) {
    if (isFinite(c)) {
      0 > c && (d = 1, c = -c);
      f = 0;
      if (2.2250738585072014E-308 <= c) {
        for (e = c;1 > e;) {
          f--, e *= 2;
        }
        for (;2 <= e;) {
          f++, e /= 2;
        }
        e = f + 1023;
      }
      f = e ? Math.floor(4503599627370496 * (c / Math.pow(2, f) - 1)) : Math.floor(c / 4.9E-324);
    } else {
      e = 2047, isNaN(c) ? f = 0x8000000000000 : -Infinity === c && (d = 1);
    }
  }
  c = d;
  d = e;
  e = f;
  c && (e = 0xfffffffffffff - e, d = 2047 - d);
  a.write((c ? 0 : 128) | d >> 4);
  a.write((d & 15) << 4 | 0 | e / 281474976710656);
  e %= 281474976710656;
  c = 0 | e / 4294967296;
  a.write(c >> 8, c & 255);
  e %= 4294967296;
  c = 0 | e / 65536;
  a.write(c >> 8, c & 255);
  c = e % 65536;
  a.write(c >> 8, c & 255);
}
function Dc(a) {
  var b = Cc(a) | 0, c = b >> 7 ? !1 : !0, d = c ? -1 : 1, e = (b & 127) << 4, b = Cc(a) | 0, e = e + (b >> 4);
  c && (e = 2047 - e);
  for (var b = [c ? 15 - (b & 15) : b & 15], f = 6;f--;) {
    b.push(c ? 255 - (Cc(a) | 0) : Cc(a) | 0);
  }
  a = 0;
  for (f = 7;f--;) {
    a = a / 256 + b[f];
  }
  a /= 16;
  return 0 === a && 0 === e ? 0 : (a + 1) * Math.pow(2, e - 1023) * d;
}
function Ec(a) {
  for (var b = [], c = 0, d = 0, e = 0, f, g;;) {
    f = Cc(a);
    if (0 === f || null == f) {
      break;
    }
    0 === c ? (g = f >> 6, 2 > g && !isNaN(f) ? b.push(String.fromCharCode(f - 1)) : (c = g, d = f << 10, e++)) : 2 === c ? (b.push(String.fromCharCode(d + f + 127)), c = d = e = 0) : 2 === e ? (d += f << 2, e++) : (b.push(String.fromCharCode(d | f >> 6)), c = d = e = 0);
  }
  return b.join("");
}
function Bc(a) {
  this.a = null;
  this.b = a;
  this.c = this.b.length - 1;
  this.index = -1;
}
function Cc(a) {
  return a.a = a.index < a.c ? parseInt(a.b[++a.index] + a.b[++a.index], 16) : null;
}
function yc() {
  this.a = [];
  this.b = void 0;
}
yc.prototype.write = function(a) {
  for (var b = 0;b < arguments.length;b++) {
    this.b = arguments[b].toString(16), this.a.push(2 === this.b.length ? this.b : this.b = "0" + this.b);
  }
};
yc.prototype.trim = function() {
  for (var a = this.a.length;"00" === this.a[--a];) {
  }
  this.a.length = ++a;
  return this;
};
yc.prototype.toString = function() {
  return this.a.length ? this.a.join("") : "";
};
function Fc(a, b) {
  var c = xc(a), d = xc(b);
  return c > d ? 1 : c == d ? 0 : -1;
}
;function Gc(a, b, c) {
  nc.call(this, 0, c);
  this.r = a;
  this.e = [];
  this.p = [];
  this.ka = [];
  this.a = null;
  this.Da = "";
  this.N = 0;
}
G(Gc, nc);
l = Gc.prototype;
l.Da = "";
l.logger = null;
function Hc(a, b, c) {
  a.a = b;
  a.Da = c;
  if (b) {
    for (c = 0;c < a.p.length;c++) {
      a.p[c][0].call(a.p[c][1], b);
    }
    a.p.length = 0;
  }
}
function Ic(a) {
  var b = new Gc(a.r);
  a.N++;
  Hc(b, a.a, a.Da + "C" + a.N);
  return b;
}
l.Ka = function() {
  return this.r;
};
l.Ac = function() {
  return!!this.a;
};
l.abort = function() {
  if (this.a) {
    if (C(this.a.abort)) {
      this.a.abort();
    } else {
      if (C(this.a.executeSql)) {
        this.a.executeSql("ABORT", [], function() {
        }, function() {
          return!0;
        });
      } else {
        throw new tb;
      }
    }
  } else {
    throw new Jc("");
  }
};
function M(a, b, c) {
  var d = a.ka.shift();
  c = !!c;
  d ? d[0].call(d[1], b, c, function(b, c) {
    M(a, b, c);
  }) : c ? a.j(b) : a.l(b);
}
function Kc(a, b, c) {
  a.ka.push([b, c]);
}
function N(a, b, c) {
  a.a ? b.call(c, a.a) : a.p.push([b, c]);
}
l.l = function(a) {
  Gc.q.l.call(this, a);
};
l.j = function(a) {
  Gc.q.j.call(this, a);
};
function Lc(a) {
  var b = "";
  a.Da && (b = a.a ? "*" : "", b = "[" + a.Da + b + "]");
  return a.r + b;
}
function Mc(a, b) {
  var c = new Gc(a);
  M(c, b);
  return c;
}
l.toString = function() {
  return "Request:" + Lc(this);
};
l.Nb = function() {
  this.f && this.c && ob(this) && (pb(this.f), this.f = 0);
  this.g && (this.g.J--, delete this.g);
  for (var a = this.d, b = !1;this.h.length && !this.m;) {
    var c = this.h.shift(), d = c[0], e = c[1], c = c[2];
    if (d = this.b ? e : d) {
      d = d.call(c || this.O, a), u(d) && (this.b = this.b && (d == a || d instanceof Error), this.d = a = d), la(a) && (this.m = b = !0);
    }
  }
  this.d = a;
  b && (b = E(this.bb, this, !0), d = E(this.bb, this, !1), a instanceof I ? (J(a, b, d), a.D = !0) : a.then(b, d));
};
l.toJSON = function() {
  var a = (this.Da || "").match(/B(\d+)T(\d+)(?:Q(\d+?))?(?:R(\d+))?/) || [];
  return{method:this.r ? this.r.split(":") : [], branchNo:parseFloat(a[1]), transactionNo:parseFloat(a[2]), queueNo:parseFloat(a[3]), requestNo:parseFloat(a[4])};
};
var Nc = tc && tc.cmp ? E(tc.cmp, tc) : Fc, Oc = [];
function Pc() {
  0 != Qc && (Rc[this[ea] || (this[ea] = ++fa)] = this);
}
var Qc = 0, Rc = {};
Pc.prototype.g = !1;
Pc.prototype.ma = function() {
  if (!this.g && (this.g = !0, this.I(), 0 != Qc)) {
    var a = this[ea] || (this[ea] = ++fa);
    delete Rc[a];
  }
};
Pc.prototype.I = function() {
  if (this.Ba) {
    for (;this.Ba.length;) {
      this.Ba.shift()();
    }
  }
};
function Sc(a, b) {
  this.type = a;
  this.a = this.target = b;
  this.tc = !0;
}
Sc.prototype.ma = function() {
};
Sc.prototype.preventDefault = function() {
  this.tc = !1;
};
function Tc(a, b) {
  Sc.call(this, a, b);
}
G(Tc, Sc);
Tc.prototype.i = function() {
  return this.b;
};
function Uc(a, b, c, d, e) {
  Sc.call(this, a, b);
  this.version = c;
  this.xc = d;
  this.pc = e;
}
G(Uc, Tc);
l = Uc.prototype;
l.name = "ReadyEvent";
l.version = NaN;
l.xc = NaN;
l.pc = null;
l.$c = function() {
  return this.version;
};
l.Ec = function() {
  return this.xc;
};
l.Dc = function() {
  return this.pc;
};
function Vc(a, b, c) {
  Sc.call(this, c || "error", a);
  this.error = b;
}
G(Vc, Tc);
Vc.prototype.toString = function() {
  return this.name + ":" + (this.error ? this.error : "");
};
Vc.prototype.name = "ErrorEvent";
Vc.prototype.error = null;
Vc.prototype.c = function() {
  return this.error;
};
function Wc(a, b) {
  Vc.call(this, a, b, "fail");
}
G(Wc, Vc);
Wc.prototype.name = "FailEvent";
function Xc(a, b, c, d, e) {
  Sc.call(this, a, b);
  this.b = c;
  this.key = d;
  this.value = e;
}
G(Xc, Tc);
Xc.prototype.name = "RecordEvent";
Xc.prototype.c = function() {
  return this.key;
};
Xc.prototype.A = function() {
  return this.value;
};
function Yc(a, b, c, d, e) {
  Sc.call(this, a, b);
  this.b = c;
  this.keys = d;
  this.U = e;
}
G(Yc, Tc);
Yc.prototype.name = "StoreEvent";
Yc.prototype.H = function() {
  return this.keys;
};
Yc.prototype.C = function() {
  return this.U;
};
function P(a, b, c) {
  var d;
  if (D(a)) {
    d = a.store, b = a.id, null != a.parent && (c = new P(a.parent));
  } else {
    if (u(b)) {
      d = a;
    } else {
      if (d = a.lastIndexOf("^|"), b = a, 0 < d && (b = a.substr(d), c = new P(a.substring(0, d))), b = b.split("^:"), d = b[0], b = b[1], !u(b)) {
        throw Error("Invalid key value: " + a);
      }
    }
  }
  this.a = d;
  this.id = b;
  this.parent = c || null;
}
l = P.prototype;
l.toJSON = function() {
  var a = {store:this.a, id:this.id};
  this.parent && (a.parent = this.parent.toJSON());
  return a;
};
l.valueOf = function() {
  return(this.parent ? this.parent.valueOf() + "^|" : "") + this.a + "^:" + this.id;
};
l.toString = function() {
  return this.valueOf().replace("^|", "|").replace("^:", ":");
};
l.i = function() {
  return this.a;
};
l.o = function() {
  return this.id;
};
function Zc(a) {
  return v(a.id) ? a.id.join("^|") : a.id instanceof Date ? +a.id : a.id;
}
l.Xc = function() {
  return this.parent;
};
function $c(a) {
  return A(a) || x(a) || v(a) && Wa(a, $c) || a instanceof Date;
}
function ad(a) {
  if (w(a)) {
    for (var b = [], c = 0, d = a.length;c < d;c++) {
      b[c] = a[c];
    }
    return b;
  }
  return a;
}
;function Q(a, b, c, d) {
  this.lower = a;
  this.upper = b;
  this.lowerOpen = !!c;
  this.upperOpen = !!d;
}
Q.prototype.lower = void 0;
Q.prototype.upper = void 0;
Q.prototype.toJSON = function() {
  var a;
  a = this || {};
  return{lower:a.lower, upper:a.upper, lowerOpen:a.lowerOpen, upperOpen:a.upperOpen};
};
function bd(a) {
  return cd(a);
}
Q.only = function(a) {
  return new Q(a, a, !1, !1);
};
Q.bound = function(a, b, c, d) {
  return new Q(a, b, c, d);
};
Q.upperBound = function(a, b) {
  return new Q(void 0, a, void 0, !!b);
};
Q.lowerBound = function(a, b) {
  return new Q(a, void 0, !!b, void 0);
};
function dd(a) {
  var b;
  if (v(a)) {
    b = cb(a), b.push("\uffff");
  } else {
    if (x(a)) {
      b = a + "\uffff";
    } else {
      if (A(a)) {
        b = a + 2.220460492503131E-16, a -= 2.220460492503131E-16;
      } else {
        return Q.only(a);
      }
    }
  }
  return Q.bound(a, b, !1, !0);
}
function cd(a) {
  return null != a ? null != a.upper && null != a.lower ? ed.bound(a.lower, a.upper, !!a.lowerOpen, !!a.upperOpen) : null != a.upper ? ed.upperBound(a.upper, a.upperOpen) : null != a.lower ? ed.lowerBound(a.lower, a.lowerOpen) : null : null;
}
function fd(a, b, c, d, e) {
  if (c) {
    if (c.lowerOpen || c.upperOpen || null == c.lower || null == c.upper || 0 !== Nc(c.lower, c.upper)) {
      if (null != c.lower) {
        var f = c.lowerOpen ? " > " : " >= ";
        d.push(a + f + "?");
        e.push(gd(c.lower, b));
      }
      null != c.upper && (f = c.upperOpen ? " < " : " <= ", d.push(a + f + "?"), e.push(gd(c.upper, b)));
    } else {
      d.push(a + " = ?"), e.push(gd(c.lower, b));
    }
  }
}
function hd(a, b, c, d) {
  var e, f, g, h;
  if ("starts" == a || "^" == a) {
    return dd(b);
  }
  if ("<" == a || "<=" == a) {
    e = b, g = "<" == a;
  } else {
    if (">" == a || ">=" == a) {
      f = b, h = ">" == a;
    } else {
      if ("=" == a || "==" == a) {
        e = f = b;
      } else {
        throw new K("invalid op: " + a);
      }
    }
  }
  if ("<" == c || "<=" == c) {
    e = d, g = "<" == c;
  } else {
    if (">" == c || ">=" == c) {
      f = d, h = ">" == c;
    } else {
      if (u(c)) {
        throw new K("invalid op2: " + c);
      }
    }
  }
  return Q.bound(f, e, h, g);
}
var ed = q.IDBKeyRange || q.webkitIDBKeyRange || Q;
function id(a, b, c, d, e, f) {
  u(e) || (e = v(a) ? a.join(", ") : a);
  if (null != a && !x(a) && !w(a)) {
    throw new K("index keyPath for " + e + " must be a string or array, but " + a + " is " + typeof a);
  }
  !u(a) && u(e) && (a = e);
  this.keyPath = a;
  this.f = w(this.keyPath);
  this.a = e;
  this.type = jd(b);
  if (u(b)) {
    if (!u(this.type)) {
      throw new K("type invalid in index: " + this.a);
    }
    if (v(this.keyPath)) {
      throw new K('composite key for store "' + this.a + '" must not specified type');
    }
  }
  this.unique = !!c;
  this.multiEntry = !!d;
  this.g = x(this.type) ? this.type : kd;
  this.e = x(e) ? e : v(a) ? this.keyPath.join(",") : a;
  this.c = ra(this.e);
  this.b = this.f ? null : this.keyPath.split(".");
  this.d = f || null;
}
function ld(a, b) {
  if (null != b) {
    if (w(a.keyPath)) {
      for (var c = [], d = 0, e = a.keyPath.length;d < e;d++) {
        var f = uc(b, a.keyPath[d]);
        c[d] = f;
      }
      return c;
    }
    return uc(b, a.keyPath);
  }
}
function md(a, b, c) {
  for (var d = 0;d < a.b.length;d++) {
    d == a.b.length - 1 ? b[a.b[d]] = c : D(b[a.b[d]]) || (b[a.b[d]] = {});
  }
}
var kd = "TEXT";
function gd(a, b) {
  if ("DATE" == b) {
    if (a instanceof Date) {
      return+a;
    }
  } else {
    return null != b ? a : xc(a);
  }
}
function nd(a, b) {
  return "DATE" == b ? new Date(a) : u(b) ? a : Ac(a);
}
var od = ["BLOB", "DATE", "INTEGER", "NUMERIC", kd];
function jd(a) {
  if (x(a)) {
    return a = Sa(od, a), od[a];
  }
}
id.prototype.getName = function() {
  return this.a;
};
id.prototype.toJSON = function() {
  return{name:this.a, keyPath:this.keyPath, type:this.type, unique:this.unique, multiEntry:this.multiEntry};
};
id.prototype.clone = function() {
  var a = v(this.keyPath) ? cb(this.keyPath) : this.keyPath;
  return new id(a, this.type, this.unique, this.multiEntry, this.a, this.d);
};
function pd(a, b) {
  return null != a || null != b ? null != a ? null != b ? w(a) && w(b) ? gb(a, b) ? null : "expect: " + a + ", but: " + b : qd(a, b) ? null : "expect: " + a + ", but: " + b : "keyPath: " + a + " no longer defined" : "newly define " + b : null;
}
id.prototype.hint = function(a) {
  if (!a) {
    return this;
  }
  var b = v(this.keyPath) ? cb(this.keyPath) : this.keyPath, c = this.type;
  u(a.type) || "TEXT" != c || (c = void 0);
  return new id(b, c, this.unique, this.multiEntry, a.a);
};
function rd(a, b) {
  a.d = b;
}
;function sd(a, b, c, d, e, f, g, h) {
  if (!x(a)) {
    throw new K("store name must be a string");
  }
  this.e = a;
  this.keyPath = u(b) ? b : null;
  this.m = w(this.keyPath);
  if (null !== this.keyPath && !x(this.keyPath) && !this.m) {
    throw new K("keyPath must be a string or array");
  }
  this.c = !!c;
  var k;
  if (null != d) {
    k = jd(d);
    if (!u(k)) {
      throw new K('type "' + d + '" for primary key in store "' + this.e + '" is invalid.');
    }
    if (this.m) {
      throw new K('composite key for store "' + this.e + '" must not specified type');
    }
  }
  this.type = null != k ? k : this.c ? "INTEGER" : void 0;
  this.f = x(this.keyPath) ? this.keyPath.split(".") : [];
  this.a = e || [];
  this.la = !!f;
  this.wa = !!g;
  this.r = x(this.type) ? this.type : kd;
  this.g = v(this.keyPath) ? this.keyPath.join(",") : x(this.keyPath) ? this.keyPath : "_ROWID_";
  this.d = ra(this.g);
  this.p = !!h;
  this.h = [];
}
l = sd.prototype;
l.la = !1;
l.wa = !1;
l.toJSON = function() {
  for (var a = [], b = 0;b < this.a.length;b++) {
    a.push(this.a[b].toJSON());
  }
  return{name:this.e, keyPath:this.keyPath, autoIncrement:this.c, type:this.type, indexes:a};
};
function td(a) {
  var b = [], c = a.indexes || [];
  if (v(c)) {
    for (var d = 0;d < c.length;d++) {
      var e;
      e = c[d];
      e = new id(e.keyPath, e.type, e.unique, e.multiEntry, e.name, e.generator);
      u(e.keyPath) && e.keyPath === a.keyPath || b.push(e);
    }
  }
  return new sd(a.name, a.keyPath, a.autoIncrement, "undefined" === a.type || "null" === a.type ? void 0 : a.type, b, a.dispatchEvents, a.fixed, a.encrypted);
}
function ud(a, b, c, d, e, f, g) {
  a = vd(a, b, c, d, e, f, g);
  b = "";
  0 != c && (b += "SELECT " + a.select);
  b += " FROM " + a.Ja;
  a.F && (b += " WHERE " + a.F);
  a.group && (b += " GROUP BY " + a.group);
  a.sa && (b += " ORDER BY " + a.sa);
  return b;
}
function vd(a, b, c, d, e, f, g) {
  var h = {select:"", Ja:"", F:"", group:"", sa:""}, k = a.g, m = a.d, n = null;
  d !== k && x(d) && (n = wd(a, d));
  var p = !!n, r = d || k, s = ra(r), t = p ? n.type : a.type, y = p && n.multiEntry;
  h.Ja = xd(a);
  6 === c ? h.select = "COUNT(" + m + ")" : 3 === c || 1 === c || 2 === c ? (h.select = m, null != d && d != k && (h.select += ", " + s)) : h.select = "*";
  d = g ? "DISTINCT " : "";
  k = [];
  y ? (y = ra("ydn.db.me:" + a.getName() + ":" + n.getName()), h.select = 6 === c ? "COUNT(" + d + y + "." + s + ")" : 3 === c || 1 === c || 2 === c ? "DISTINCT " + xd(a) + "." + m + ", " + y + "." + s + " AS " + r : "DISTINCT " + xd(a) + ".*, " + y + "." + s + " AS " + r, h.Ja = y + " INNER JOIN " + xd(a) + " USING (" + m + ")", null != e && (fd(y + "." + s, t, e, k, b), 0 < k.length && (h.F = h.F ? h.F + (" AND " + k.join(" AND ")) : k.join(" AND ")))) : null != e && (fd(s, t, e, k, b), 0 < k.length && 
  (h.F = h.F ? h.F + (" AND " + k.join(" AND ")) : k.join(" AND ")));
  p && !n.unique && g && (h.group = s);
  a = f ? "DESC" : "ASC";
  h.sa = s + " " + a;
  p && (h.sa += ", " + m + " " + a);
  return h;
}
function yd(a, b, c, d, e, f, g, h) {
  var k, m, n, p;
  null != e ? (k = e.lower, m = e.upper, n = e.lowerOpen, p = e.upperOpen, f ? null != m ? (e = Nc(h, m), -1 == e ? (m = h, p = !0) : 0 == e && (p = !0)) : (m = h, p = !0) : null != k ? (e = Nc(h, k), 1 == e ? (k = h, n = !0) : 0 == e && (n = !0)) : (k = h, n = !0)) : f ? (m = h, p = !0) : (k = h, n = !0);
  e = new Q(k, m, !!n, !!p);
  d = d ? wd(a, d) : null;
  b = vd(a, c, b, d ? d.e : a.g, e, f, g);
  b = "SELECT " + b.select + " FROM " + b.Ja + (b.F ? " WHERE " + b.F : "") + (b.group ? " GROUP BY " + b.group : "") + " ORDER BY " + b.sa;
  d && (b += ", " + a.d + (f ? "DESC" : "ASC"));
  return b;
}
function zd(a, b, c, d, e, f, g, h, k) {
  var m = wd(a, d), n = m.e;
  d = m.c;
  var p = a.d, r;
  r = (h ? " <" : " >") + " ";
  m = gd(f, m.type);
  g = gd(g, a.type);
  var s = "";
  e ? (a = vd(a, c, b, n, e, h, k), a.F += " AND ", s = d + r + "?", c.push(m)) : (e = h ? Q.upperBound(f, !0) : Q.lowerBound(f, !0), a = vd(a, c, b, n, e, h, k), s = a.F, a.F = "");
  a.F += "(" + s + " OR (" + d + " = ? AND " + p + r + "?))";
  c.push(m);
  c.push(g);
  return "SELECT " + a.select + " FROM " + a.Ja + " WHERE " + a.F + (a.group ? " GROUP BY " + a.group : "") + " ORDER BY " + a.sa;
}
l.clone = function() {
  return td(this.toJSON());
};
l.index = function(a) {
  return this.a[a] || null;
};
function wd(a, b) {
  return Xa(a.a, function(a) {
    return a.getName() == b;
  });
}
function Ad(a, b) {
  for (var c = 0;c < a.a.length;c++) {
    if (!pd(a.a[c].keyPath, b)) {
      return a.a[c];
    }
  }
  return null;
}
function Bd(a, b) {
  return b === a.keyPath ? !0 : Va(a.a, function(a) {
    return a.getName() == b;
  });
}
function xd(a) {
  return ra(a.e);
}
function Cd(a, b) {
  if (!b) {
    return a;
  }
  var c = a.c, d = v(a.keyPath) ? cb(a.keyPath) : a.keyPath, e = a.type, f = Ua(a.a, function(a) {
    return a.clone();
  });
  u(b.type) || "TEXT" != e || (e = void 0);
  v(b.keyPath) && x(d) && d == b.keyPath.join(",") && (d = cb(b.keyPath));
  for (var g = 0, h = b.a.length;g < h;g++) {
    if (b.a[g].f) {
      for (var k = b.a[g].getName(), m = f.length - 1;0 <= m;m--) {
        if (0 <= k.indexOf(f[m].getName())) {
          f[m] = b.a[g].clone();
          break;
        }
      }
    }
  }
  for (g = 0;g < f.length;g++) {
    (h = wd(b, f[g].getName())) && (f[g] = f[g].hint(h));
  }
  return new sd(b.e, d, c, e, f);
}
l.getName = function() {
  return this.e;
};
function Dd(a) {
  return!!a.keyPath;
}
function Ed(a, b, c) {
  if (b) {
    if (!a.keyPath && null != c) {
      return c;
    }
    if (a.m) {
      c = [];
      for (var d = 0;d < a.keyPath.length;d++) {
        c.push(uc(b, a.keyPath[d]));
      }
      return c;
    }
    if (a.keyPath) {
      return Ab(b, a.f);
    }
  }
}
function Fd(a, b, c) {
  for (var d = 0;d < a.f.length;d++) {
    var e = a.f[d];
    if (d == a.f.length - 1) {
      b[e] = c;
      break;
    }
    u(b[e]) || (b[e] = {});
    b = b[e];
  }
}
function Gd(a, b, c) {
  var d = [], e = [];
  c = u(c) ? c : Ed(a, b);
  u(c) && (e.push(a.d), d.push(gd(c, a.type)));
  for (var f = 0;f < a.a.length;f++) {
    var g = a.a[f];
    if (!g.multiEntry && g.getName() !== a.keyPath && "_default_" != g.getName()) {
      var h = ld(g, b);
      null != h && (d.push(gd(h, g.type)), e.push(g.c));
    }
  }
  a.wa ? a.wa && !a.keyPath && 0 == a.a.length && (x(b) && -1 == b.indexOf(";base64,") ? d.push(b) : d.push(R(b)), e.push("_default_")) : (d.push(R(b)), e.push("_default_"));
  a = [];
  for (f = d.length - 1;0 <= f;f--) {
    a[f] = "?";
  }
  return{Cc:e, Pc:a, U:d, key:c};
}
function Hd(a, b) {
  if (!b) {
    return "missing store: " + a.e;
  }
  if (a.e != b.e) {
    return "store name, expect: " + a.e + ", but: " + b.e;
  }
  var c = pd(a.keyPath, b.keyPath);
  if (c) {
    return "keyPath, " + c;
  }
  if (u(a.c) && u(b.c) && a.c != b.c) {
    return "autoIncrement, expect:  " + a.c + ", but: " + b.c;
  }
  if (a.a.length != b.a.length) {
    return "indexes length, expect:  " + a.a.length + ", but: " + b.a.length;
  }
  if (u(a.type) && u(b.type) && (w(a.type) ? !gb(a.type, b.type) : a.type != b.type)) {
    return "data type, expect:  " + a.type + ", but: " + b.type;
  }
  for (c = 0;c < a.a.length;c++) {
    var d = wd(b, a.a[c].getName()), e;
    e = a.a[c];
    if (d) {
      if (e.a != d.a) {
        e = "name, expect: " + e.a + ", but: " + d.a;
      } else {
        var f = pd(e.keyPath, d.keyPath);
        e = f ? "keyPath, " + f : null != e.unique && null != d.unique && e.unique != d.unique ? "unique, expect: " + e.unique + ", but: " + d.unique : null != e.multiEntry && null != d.multiEntry && e.multiEntry != d.multiEntry ? "multiEntry, expect: " + e.multiEntry + ", but: " + d.multiEntry : u(e.type) && u(d.type) && (w(e.type) ? !gb(e.type, d.type) : e.type != d.type) ? "data type, expect: " + e.type + ", but: " + d.type : "";
      }
    } else {
      e = "no index for " + e.a;
    }
    if (0 < e.length) {
      return'index "' + a.a[c].getName() + '" ' + e;
    }
  }
  return "";
}
function Id(a, b) {
  if (b) {
    for (var c = 0;c < a.a.length;c++) {
      var d = a.a[c], e = b;
      if (d.d) {
        var f = d.d(e), g = typeof f;
        if ("string" == g || "number" == g || f instanceof Date || v(f)) {
          for (g = 0;g < d.b.length - 1;g++) {
            D(e[d.b[g]]) || (e[d.b[g]] = {});
          }
          e[d.b[d.b.length - 1]] = f;
        }
      }
    }
  }
}
function Jd(a, b) {
  a.h.push(b);
}
function Kd(a, b, c, d, e) {
  for (var f = 0;f < a.h.length;f++) {
    d !== f && a.h[f].call(e, b, c);
  }
}
;function Ld(a) {
  return eval("(" + a + ")");
}
function Md() {
}
function Nd(a, b, c) {
  switch(typeof b) {
    case "string":
      Od(b, c);
      break;
    case "number":
      c.push(isFinite(b) && !isNaN(b) ? b : "null");
      break;
    case "boolean":
      c.push(b);
      break;
    case "undefined":
      c.push("null");
      break;
    case "object":
      if (null == b) {
        c.push("null");
        break;
      }
      if (v(b)) {
        var d = b.length;
        c.push("[");
        for (var e = "", f = 0;f < d;f++) {
          c.push(e), Nd(a, b[f], c), e = ",";
        }
        c.push("]");
        break;
      }
      c.push("{");
      d = "";
      for (e in b) {
        Object.prototype.hasOwnProperty.call(b, e) && (f = b[e], "function" != typeof f && (c.push(d), Od(e, c), c.push(":"), Nd(a, f, c), d = ","));
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      throw Error("Unknown type: " + typeof b);;
  }
}
var Pd = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Qd = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Od(a, b) {
  b.push('"', a.replace(Qd, function(a) {
    if (a in Pd) {
      return Pd[a];
    }
    var b = a.charCodeAt(0), e = "\\u";
    16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
    return Pd[a] = e + b.toString(16);
  }), '"');
}
;function Rd(a) {
  return!x(a) || na(a) ? {} : "undefined" == typeof q.JSON ? Ld(a) : JSON.parse(a);
}
function Sd(a) {
  var b;
  try {
    b = R(a);
  } catch (c) {
    b = "";
  }
  return b ? b.substr(0, 70) + (70 < b.length ? "..." : "") : "";
}
function R(a) {
  if ("undefined" == typeof q.JSON) {
    var b = [];
    Nd(new Md, a, b);
    a = b.join("");
  } else {
    a = JSON.stringify(a, void 0, void 0);
  }
  return a;
}
;function Td(a, b, c) {
  this.b = a;
  this.a = b;
  this.c = c || 1;
}
Td.prototype.i = function() {
  return this.b;
};
function Ud(a, b, c, d) {
  this.name = a;
  this.b = b;
  this.c = c || "";
  this.d = d || null;
  this.a = null;
}
Ud.prototype.getName = function() {
  return this.name;
};
Ud.prototype.count = function() {
  return this.b.length;
};
Ud.prototype.index = function(a) {
  return this.b[a];
};
function Vd(a, b, c) {
  return Xa(a.b, function(a) {
    return a.i() == b && a.a == c;
  });
}
function Wd(a) {
  if (!v(a.sources)) {
    throw new K("indexes require for full text search index " + a.name + ", but " + a.sources + " of type " + typeof a.sources + " found.");
  }
  var b = a.sources.map(function(a) {
    return new Td(a.storeName, a.keyPath, a.weight);
  });
  return new Ud(a.name, b, a.lang);
}
;function Xd(a, b) {
  var c, d, e = b;
  if (D(a)) {
    d = a;
    c = d.version;
    for (var e = [], f = d.stores || [], g = 0;g < f.length;g++) {
      var h = td(f[g]);
      e.push(h);
    }
  } else {
    x(a) ? c = 0 == a.length ? void 0 : parseFloat(a) : A(a) && (c = a);
  }
  if (u(c)) {
    if (!A(c) || 0 > c) {
      throw new K("Invalid version: " + c + " (" + a + ")");
    }
    isNaN(c) && (c = void 0);
  }
  if (u(b) && (!v(b) || 0 < b.length && !(b[0] instanceof sd))) {
    throw new K("stores");
  }
  this.version = c;
  this.b = !u(this.version);
  this.stores = e || [];
  c = [];
  if (d && d.fullTextCatalogs) {
    for (g = 0;g < d.fullTextCatalogs.length;g++) {
      e = Wd(d.fullTextCatalogs[g]), c[g] = e, S(this, e.getName()) || (f = [new id("k", kd), new id("v", kd)], e = new sd(e.getName(), "id", !1, void 0, f, !1, !1, !1), this.stores.push(e));
    }
  }
  this.c = c;
}
Xd.prototype.toJSON = function() {
  var a = Ua(this.stores, function(a) {
    return a.toJSON();
  }), b = {};
  b.stores = a;
  u(this.version) && (b.version = this.version);
  return b;
};
Xd.prototype.b = !1;
Xd.prototype.a = function() {
  return!1;
};
function Yd(a) {
  return Ua(a.stores, function(a) {
    return a.getName();
  });
}
Xd.prototype.count = function() {
  return this.stores.length;
};
function S(a, b) {
  return Xa(a.stores, function(a) {
    return a.getName() == b;
  });
}
function Zd(a, b) {
  return Va(a.stores, function(a) {
    return a.getName() == b;
  });
}
function $d(a, b, c, d) {
  if (!b || a.stores.length != b.stores.length) {
    return "Number of store: " + a.stores.length + " vs " + b.stores.length;
  }
  for (var e = 0;e < a.stores.length;e++) {
    var f = S(b, a.stores[e].getName());
    if (f) {
      c && (f = Cd(f, a.stores[e]));
      if (d) {
        for (var g = f, h = a.stores[e], k = 0;k < h.a.length;k++) {
          var m = h.a[k];
          Bd(g, m.getName()) || "BLOB" != m.type || (m = new id(m.keyPath, m.type, m.unique, m.multiEntry, m.getName()), g.a.push(m));
        }
      }
      f = Hd(a.stores[e], f);
      if (0 < f.length) {
        return'store: "' + a.stores[e].getName() + '" ' + f;
      }
    } else {
      return'missing object store "' + a.stores[e].getName() + '"';
    }
  }
  return "";
}
function ae(a, b) {
  return Xa(a.c, function(a) {
    return a.getName() == b;
  });
}
;function be(a, b) {
  Xd.call(this, a, b);
}
G(be, Xd);
be.prototype.a = function() {
  return!0;
};
function ce(a, b) {
  a.stores.push(b);
}
;function de(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, de) : this.stack = Error().stack || "";
  a && (this.message = String(a));
  this.name = "ydn.error.ArgumentException";
}
G(de, Error);
G(de, Error);
function ee(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, ee) : this.stack = Error().stack || "";
  a && (this.message = String(a));
  this.name = "ydn.error.NotImplementedException";
}
G(ee, Error);
function fe(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, fe) : this.stack = Error().stack || "";
  a && (this.message = String(a));
  this.name = "ydn.error.InternalError";
}
G(fe, Error);
fe.prototype.name = "ydn.InternalError";
function ge(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, ge) : this.stack = Error().stack || "";
  a && (this.message = String(a));
  this.name = "ydn.error.ConstraintError";
}
G(ge, Error);
ge.prototype.name = "ydn.error.ConstraintError";
G(de, Error);
function he(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, he) : this.stack = Error().stack || "";
  a && (this.message = String(a));
  this.name = "ydn.error.InvalidOperationError";
}
G(he, Error);
function ie(a) {
  return Rd(R(a));
}
function qd(a, b) {
  var c;
  c = c || {};
  if (null != a && null != b) {
    if (w(a) && w(b)) {
      if (a.length != b.length) {
        return!1;
      }
      for (var d = 0;d < a.length;d++) {
        if (-1 == Xa(b, function(b) {
          return qd(b, a[d]);
        })) {
          return!1;
        }
      }
      return!0;
    }
    if (w(a)) {
      return 1 == a.length && qd(a[0], b);
    }
    if (w(b)) {
      return 1 == b.length && qd(b[0], a);
    }
    if (D(a) && D(a)) {
      for (var e in a) {
        if (a.hasOwnProperty(e) && !c[e]) {
          var f = qd(a[e], b[e]);
          if (!f) {
            return!1;
          }
        }
      }
      for (e in b) {
        if (b.hasOwnProperty(e) && !c[e] && (f = qd(a[e], b[e]), !f)) {
          return!1;
        }
      }
      return!0;
    }
    return a === b;
  }
  return!1;
}
;/*
 Copyright 2012 YDN Authors, Yathit. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");.
*/
function T(a, b, c) {
  var d = c || {};
  this.D = d.mechanisms || je;
  this.p = d.size;
  this.J = u(d.connectionTimeout) ? d.connectionTimeout : 6E4;
  this.b = null;
  this.f = [];
  this.nb = !1;
  var e;
  if (b instanceof Xd) {
    e = b;
  } else {
    if (D(b)) {
      d.autoSchema || !u(b.stores) ? e = new be(b) : e = new Xd(b);
      var f = b.stores ? b.stores.length : 0;
      for (c = 0;c < f;c++) {
        var g = S(e, b.stores[c].name);
        b.stores[c].Sync && this.ic(g, b.stores[c].Sync);
      }
    } else {
      e = new be;
    }
  }
  this.uc(d.Encryption);
  this.c = e;
  for (c = 0;c < this.c.count();c++) {
    (this.c.stores[c] || null).p && this.gc(this.c.stores[c] || null);
  }
  u(a) && this.m(a);
  this.g = null;
  this.e = new I;
}
T.prototype.logger = null;
T.prototype.N = function(a) {
  if (u(a)) {
    var b = function(b) {
      a(b.toJSON());
      a = void 0;
    };
    if (this.b) {
      this.b.V(b);
    } else {
      var c = this;
      this.transaction(function(a) {
        c.b.V(b, a);
      }, null, rc);
    }
  }
  return this.c ? this.c.toJSON() : null;
};
T.prototype.m = function(a) {
  if (this.b) {
    throw new wb("Already connected with " + this.h);
  }
  this.h = a;
  ke(this);
};
T.prototype.getName = function() {
  return this.h;
};
var je = "indexeddb sqlite websql localstorage sessionstorage userdata memory".split(" ");
l = T.prototype;
l.Mb = function() {
  return null;
};
function ke(a) {
  function b(b, e) {
    b ? (a.oc = NaN, d.Va = function(b) {
      a.Q(new Vc(a, b));
    }, d.Db = function(b) {
      a.Q(new Wc(a, b));
      a.b = null;
    }, d.ub = function(b) {
      a.Q(b);
    }, setTimeout(function() {
      le(a, e);
      me(a);
    }, 10), c.l(e)) : (setTimeout(function() {
      le(a, new Wc(a, e));
      if (a.f) {
        for (var b;b = a.f.shift();) {
          b.R && b.R("error", e);
        }
      }
    }, 10), c.j(e));
  }
  for (var c = new I, d = null, e = a.D, f = 0;f < e.length;f++) {
    var g = e[f].toLowerCase();
    if (d = a.Mb(g)) {
      d = a.Mb(g);
      break;
    }
  }
  null === d ? (e = new ge("No storage mechanism found."), b(!1, new Wc(a, e))) : J(d.Ea(a.h, a.c), function(a) {
    this.b = d;
    b(!0, new Uc("ready", this, parseFloat(d.ec()), parseFloat(a), null));
  }, function(a) {
    b(!1, a);
  }, a);
}
l.Eb = function() {
  if (this.b) {
    return this.b.Ua();
  }
};
l.tb = function(a, b) {
  this.e.K(a, b);
};
function le(a, b) {
  setTimeout(function() {
    a.c.b && a.e.c || (b instanceof Vc ? a.e.j(b.error) : a.e.l(), a.Q(b));
  }, 4);
}
function ne(a) {
  return!!a.b && a.b.Cb();
}
l.close = function() {
  this.b && (this.b.close(), this.b = null);
};
l.Zc = function() {
  return this.b ? this.b.cc() : null;
};
l.oc = NaN;
function me(a) {
  var b = a.f.shift();
  b && a.transaction(b.fb, b.Nc, b.mode, b.R);
  a.oc = ia();
}
l.nb = !1;
l.transaction = function(a, b, c, d) {
  var e = b;
  x(b) ? e = [b] : null != b || (e = null);
  if (this.b && this.b.Cb() && !this.nb) {
    var f = this, g = u(c) ? c : rc;
    g == sc && (this.nb = !0);
    this.b.eb(function(b) {
      a(b);
      a = null;
    }, e, g, function(a, b) {
      C(d) && (d(a, b), d = void 0);
      g == sc && (f.nb = !1);
      me(f);
    });
  } else {
    this.f.push({fb:a, Nc:e, mode:c, R:d});
  }
};
l.ic = function(a) {
  a.getName();
};
l.gc = function(a) {
  a.getName();
};
l.uc = function() {
  return!1;
};
l.hc = function(a) {
  a.getName();
};
l.Q = function() {
};
T.prototype.close = T.prototype.close;
T.prototype.getType = T.prototype.Eb;
T.prototype.getName = T.prototype.getName;
T.prototype.getSchema = T.prototype.N;
T.prototype.onReady = T.prototype.tb;
T.prototype.setName = T.prototype.m;
T.prototype.transaction = T.prototype.transaction;
T.prototype.db = T.prototype.Zc;
ja("ydn.db.version", "1.0.4");
ja("ydn.db.cmp", Nc);
ja("ydn.db.deleteDatabase", function(a, b) {
  for (var c, d = 0;d < Oc.length;d++) {
    var e = Oc[d](a, b);
    e && (c = e);
  }
  return c || Mc("vc", null);
});
Uc.prototype.name = Uc.prototype.name;
Uc.prototype.getVersion = Uc.prototype.$c;
Uc.prototype.getOldVersion = Uc.prototype.Ec;
Uc.prototype.getOldSchema = Uc.prototype.Dc;
Vc.prototype.getError = Vc.prototype.c;
Gc.prototype.abort = Gc.prototype.abort;
Gc.prototype.canAbort = Gc.prototype.Ac;
nc.prototype.progress = nc.prototype.Ba;
nc.prototype.promise = nc.prototype.Oa;
function oe(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, oe) : this.stack = Error().stack || "";
  a && (this.message = String(a));
  this.name = "ConstraintError";
}
G(oe, Error);
oe.prototype.name = "ConstraintError";
function pe(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, pe) : this.stack = Error().stack || "";
  a && (this.message = String(a));
  this.name = "ydn.db.VersionError";
}
G(pe, Error);
pe.prototype.name = "ydn.db.VersionError";
function Jc(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, Jc) : this.stack = Error().stack || "";
  a && (this.message = String(a));
  this.name = "InvalidStateError";
}
G(Jc, Error);
function qe(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, qe) : this.stack = Error().stack || "";
  a && (this.message = String(a));
  this.name = "NotFoundError";
}
G(qe, Error);
qe.prototype.name = "NotFoundError";
function re(a, b) {
  Error.captureStackTrace ? Error.captureStackTrace(this, re) : this.stack = Error().stack || "";
  b && (this.message = String(b));
  this.message += " :" + a.message + " [" + a.code + "]";
  this.name = "SQLError";
}
G(re, Error);
function se(a, b) {
  Error.captureStackTrace ? Error.captureStackTrace(this, se) : this.stack = Error().stack || "";
  b && (this.message = String(b));
  this.message += " :" + a.message;
  this.name = "SecurityError";
}
G(se, Error);
function te(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, te) : this.stack = Error().stack || "";
  a && (this.message = String(a));
  this.name = "ydn.db.TimeoutError";
}
G(te, Error);
function ue(a, b) {
  this.a = b;
}
ue.prototype.logger = null;
function ve(a) {
  this.d = a;
  this.a = null;
  this.b = 0;
}
ve.prototype.logger = null;
ve.prototype.T = null;
function we(a) {
  return!!a.a && !a.c;
}
ve.prototype.R = null;
function xe(a, b, c, d, e, f) {
  this.J = a;
  this.N = b;
  this.a = this.d = 0;
  this.D = d;
  this.r = e;
  this.f = c || ye;
  this.h = f || 0;
}
xe.prototype.logger = null;
xe.prototype.type = function() {
  return this.J.Eb();
};
xe.prototype.n = function() {
  return this.J;
};
xe.prototype.fa = function() {
  return "B" + this.N + "T" + this.d;
};
var ye = "single";
function ze(a) {
  if (a) {
    if (C(a.abort)) {
      a.abort();
    } else {
      if (C(a.executeSql)) {
        a.executeSql("ABORT", [], null, function() {
          return!0;
        });
      } else {
        throw new tb;
      }
    }
  } else {
    throw new Jc("No active transaction");
  }
}
;function Ae(a, b, c, d, e, f) {
  xe.call(this, a, b, c, d, e, f);
  this.c = [];
  this.e = [];
  this.g = null;
  this.b = new ve(b);
  this.m = f || 0;
  this.p = !1;
}
G(Ae, xe);
l = Ae.prototype;
l.logger = null;
function Be(a, b, c) {
  if ("multi" == a.f) {
    a: {
      if (a = a.b, !a.T || !a.mode || c != a.mode && (a.mode != L || c != rc) || b.length > a.T.length) {
        b = !1;
      } else {
        for (c = 0;c < b.length;c++) {
          if (-1 == a.T.indexOf(b[c])) {
            b = !1;
            break a;
          }
        }
        b = !0;
      }
    }
  } else {
    if ("repeat" == a.f) {
      a: {
        if (a = a.b, a.T && a.mode && c == a.mode && a.T.length == b.length) {
          for (c = 0;c < b.length;c++) {
            if (-1 == a.T.indexOf(b[c])) {
              b = !1;
              break a;
            }
          }
          b = !0;
        } else {
          b = !1;
        }
      }
    } else {
      b = "all" == a.f ? !0 : !1;
    }
  }
  return b;
}
function Ce(a) {
  var b = 0 < a.c.length ? a.c[0].T : null, c = 0 < a.c.length ? a.c[0].mode : null;
  return null != b && null != c ? Be(a, b, c) : !1;
}
l.abort = function() {
  ze(this.g);
};
l.ta = function(a, b, c, d) {
  var e = x(b) ? [b] : b, f = u(c) ? c : rc, g = this;
  if (this.b.a || !ne(this.n()) && this.p) {
    this.c.push({fb:a, T:b, mode:f, R:d});
  } else {
    d && this.e.push(d);
    if (this.m && this.d >= this.m) {
      throw new wb("Exceed maximum number of transactions of " + this.m);
    }
    this.p = !0;
    this.n().transaction(function(c) {
      var d = g.b;
      d.a = c;
      d.c = !1;
      d.T = b;
      d.mode = f;
      d.b++;
      d.R = null;
      R(b);
      a(g);
      for (a = null;Ce(g);) {
        c = g.c.shift(), c.R && g.e.push(c.R), c.fb();
      }
    }, e, f, function(a, b) {
      var c = g.b;
      c.a && (c.a = null, c.T = null, c.mode = null, C(c.R) && c.R(a, b), c.R = null);
      for (c = 0;c < g.e.length;c++) {
        (0,g.e[c])(a, b);
      }
      g.e.length = 0;
      (c = g.c.shift()) && g.ta(c.fb, c.T, c.mode, c.R);
      g.a = 0;
    });
  }
};
l.fa = function() {
  var a = this.b;
  return "B" + a.d + "T" + a.b;
};
l.request = function(a, b, c, d) {
  function e(a, b) {
    f.a = null;
    d && d(a, b);
  }
  var f = new Gc(a);
  a = c || rc;
  var g = this;
  we(this.b) && Be(this, b, a) ? (b = this.b.a, this.a++, Hc(f, b, this.fa() + "R" + this.a), this.e.push(e)) : g.ta(function() {
    var a = g.b.a;
    g.a++;
    Hc(f, a, g.fa() + "R" + g.a);
  }, b, a, e);
  return f;
};
l.Fa = function(a, b, c, d, e) {
  d = d || rc;
  var f = this, g;
  if (we(f.b) && Be(this, c, d)) {
    var h = f.b.a;
    f.a++;
    g = f.fa() + "R" + f.a;
    b(h, g, function(b, c) {
      f.g = h;
      c ? a.j(b) : a.l(b);
      f.g = null;
    });
    b = null;
  } else {
    f.ta(function() {
      var c = f.b.a;
      f.a++;
      g = f.fa() + "R" + f.a;
      b(c, g, function(b, d) {
        f.g = c;
        d ? a.j(b) : a.l(b);
        f.g = null;
      });
      b = null;
    }, c, d, e);
  }
};
l.getName = function() {
  return this.n().getName();
};
function De(a, b) {
  Ae.call(this, a, b);
}
G(De, Ae);
De.prototype.logger = null;
De.prototype.request = function(a, b, c) {
  var d, e, f, g = De.q.request.call(this, a, b, c, function(a, b) {
    g.a = null;
    if (d) {
      "complete" != a && (f = !0, e = b), d(e, f);
    } else {
      var c = new te;
      M(g, c, !0);
    }
  });
  Kc(g, function(a, b, c) {
    f = b;
    e = a;
    d = c;
  });
  return g;
};
De.prototype.Fa = function(a, b, c, d, e) {
  var f, g, h = new I;
  J(h, function(a) {
    g = !1;
    f = a;
  }, function(a) {
    g = !0;
    f = a;
  });
  De.q.Fa.call(this, h, b, c, d, function(b, c) {
    if ("complete" != b) {
      a.j(c);
    } else {
      if (!0 === g) {
        a.j(f);
      } else {
        if (!1 === g) {
          a.l(f);
        } else {
          var d = new te;
          a.j(d);
        }
      }
    }
    e && (e(b, c), e = void 0);
  });
};
function Ee(a, b, c, d) {
  this.d = a;
  this.b = b;
  this.a = c;
  this.P = d;
  this.c = null;
}
Ee.prototype.logger = null;
Ee.prototype.e = function() {
  return this.a.d;
};
Ee.prototype.abort = function() {
  this.a.abort();
};
function V(a) {
  if (!a.c) {
    var b;
    b = a.d;
    var c = b.Eb();
    if ("indexeddb" == c) {
      b = new Fe(0, b.c);
    } else {
      if ("websql" == c || "sqlite" == c) {
        b = new Ge(0, b.c);
      } else {
        if ("memory" == c || "localstorage" == c || "sessionstorage" == c) {
          b = new He(0, b.c);
        } else {
          throw new xb("No executor for " + c);
        }
      }
    }
    a.c = b;
  }
  return a.c;
}
Ee.prototype.n = function() {
  return this.d;
};
function Ie(a, b) {
  var c = a.n(), d = b instanceof sd ? b : td(b), e = S(c.c, b.name);
  if (0 == Hd(d, e).length) {
    sb(!1);
  } else {
    if (c.c instanceof be) {
      ce(c.c, d), c.b ? (c.b.close(), c.b = null, ke(c)) : sb(!1);
    } else {
      throw new ge("");
    }
  }
}
;function W(a, b, c, d) {
  Ee.call(this, a, b, c, d);
}
G(W, Ee);
l = W.prototype;
l.logger = null;
l.count = function(a, b, c, d) {
  var e, f, g, h;
  if (null != a) {
    if (v(a)) {
      if (u(c) || u(b)) {
        throw new K("too many arguments.");
      }
      f = a;
      for (var k = 0;k < f.length;k++) {
        if (!Zd(this.b, f[k])) {
          throw new K('store name "' + f[k] + '" at ' + k + " not found.");
        }
      }
      mc("countStores: " + R(f));
      e = this.a.request("d", f);
      N(e, function() {
        V(this).cb(e, f);
      }, this);
    } else {
      if (x(a)) {
        k = S(this.b, a);
        if (!k) {
          throw new K('store name "' + a + '" not found.');
        }
        f = [a];
        if (x(b)) {
          g = b, D(c) ? h = cd(c) : h = null;
        } else {
          if (D(b) || null == b) {
            if (D(b)) {
              h = cd(b);
            } else {
              if (null != b) {
                throw new K("key range must be  an object but found " + Sd(b) + " of type " + typeof b);
              }
              h = null;
            }
          } else {
            throw new K('invalid second argument for count "' + Sd(c) + '" of type ' + typeof b);
          }
        }
        mc("countKeyRange: " + a + " " + (g ? g : "") + R(h));
        e = this.a.request("d", f);
        Kd(k, e, arguments);
        N(e, function() {
          V(this).Lb(e, f[0], h, g, !!d);
        }, this);
      } else {
        throw new K("Invalid store name or store names.");
      }
    }
  } else {
    k = Yd(this.b), e = this.a.request("d", k), Kc(e, function(a, b, c) {
      if (b) {
        c(a, !0);
      } else {
        for (var d = b = 0;d < a.length;d++) {
          b += a[d];
        }
        c(b, !1);
      }
    }, this), N(e, function() {
      V(this).cb(e, f);
    }, this);
  }
  return e;
};
l.get = function(a, b) {
  var c = this, d;
  if (a instanceof P) {
    var e = a, f = e.i(), g = S(this.b, f);
    if (!g) {
      if (this.b.a()) {
        if (ne(this.n())) {
          return Mc("e", void 0);
        }
        d = new Gc("e");
        this.n().tb(function() {
          J(c.get(a, b), function(a) {
            d.l(a);
          }, function(a) {
            d.j(a);
          });
        });
        return d;
      }
      throw new K("Store: " + f + " not found.");
    }
    var h = e.o();
    d = this.a.request("ek", [f]);
    Kd(g, d, arguments, void 0, this);
    N(d, function() {
      V(this).hb(d, f, h);
    }, this);
  } else {
    if (x(a) && u(b)) {
      var k = a, g = S(this.b, k);
      if (!g) {
        if (this.b.a()) {
          if (ne(this.n())) {
            return Mc("e", void 0);
          }
          d = new Gc("e");
          this.n().tb(function() {
            J(c.get(a, b), function(a) {
              d.l(a);
            }, function(a) {
              d.j(a);
            });
          });
          return d;
        }
        throw new K('Store name "' + k + '" not found.');
      }
      var m = b;
      d = this.a.request("e", [k]);
      Kd(g, d, arguments, void 0, this);
      N(d, function() {
        V(this).hb(d, k, m);
      }, this);
    } else {
      throw new K("get require valid input arguments.");
    }
  }
  return d;
};
l.keys = function(a, b, c, d, e, f, g) {
  var h, k, m = null, n = !1, p = !1, r = a, s = S(this.b, r);
  if (this.b.a() && !s) {
    return Mc("g", []);
  }
  var t;
  if (x(b)) {
    var y = b, m = cd(c);
    if (A(d)) {
      h = d;
    } else {
      if (u(d)) {
        throw new K("limit must be a number");
      }
      h = 100;
    }
    if (A(e)) {
      k = e;
    } else {
      if (u(e)) {
        throw new K("offset must be a number");
      }
      k = 0;
    }
    if (u(f)) {
      if (da(f)) {
        n = f;
      } else {
        throw new K("reverse must be a boolean");
      }
    }
    if (u(g)) {
      if (da(g)) {
        p = g;
      } else {
        throw new K("unique must be a boolean");
      }
    }
    t = this.a.request("i", [r]);
    Kd(s, t, arguments);
    N(t, function() {
      V(this).list(t, 2, r, y, m, h, k, n, p);
    }, this);
  } else {
    D(b) ? m = cd(b) : m = null;
    if (A(c)) {
      h = c;
    } else {
      if (u(c)) {
        throw new K("limit must be a number");
      }
      h = 100;
    }
    if (A(d)) {
      k = d;
    } else {
      if (u(d)) {
        throw new K("offset must be a number");
      }
      k = 0;
    }
    if (u(e)) {
      if (da(e)) {
        n = e;
      } else {
        throw new K("reverse must be a boolean");
      }
    }
    t = this.a.request("g", [r]);
    Kd(s, t, arguments);
    N(t, function() {
      V(this).list(t, 2, r, null, m, h, k, n, !1);
    }, this);
  }
  return t;
};
l.U = function(a, b, c, d, e, f, g) {
  var h = this, k, m, n, p = !1, r = !1;
  if (x(a)) {
    var s = a, t = S(this.b, s);
    if (!t) {
      if (this.b.a()) {
        if (ne(this.n())) {
          return Mc("s", []);
        }
        k = new Gc("s");
        this.n().tb(function() {
          J(h.U(a, b, c, d, e, f), function(a) {
            k.l(a);
          }, function(a) {
            k.j(a);
          });
        });
        return k;
      }
      throw new qe(s);
    }
    if (v(b)) {
      var y = b;
      k = this.a.request("v", [s]);
      Kd(t, k, arguments, void 0, this);
      N(k, function() {
        V(this).Ub(k, s, y);
      }, this);
    } else {
      if (x(b)) {
        var z = b, B = cd(c);
        if (u(d)) {
          if (A(d)) {
            m = d;
          } else {
            throw new K("limit must be a number.");
          }
        } else {
          m = 100;
        }
        if (u(e)) {
          if (A(e)) {
            n = e;
          } else {
            throw new K("offset must be a number.");
          }
        } else {
          n = 0;
        }
        if (da(f)) {
          p = f;
        } else {
          if (u(f)) {
            throw new K("reverse must be a boolean, but " + f);
          }
        }
        if (u(g)) {
          if (da(g)) {
            r = g;
          } else {
            throw new K("unique must be a boolean");
          }
        }
        k = this.a.request("u", [s]);
        Kd(t, k, arguments);
        N(k, function() {
          V(this).list(k, 4, s, z, B, m, n, p, r);
        }, this);
      } else {
        B = null;
        D(b) && (B = cd(b));
        if (u(c)) {
          if (A(c)) {
            m = c;
          } else {
            throw new K("limit must be a number, but " + c + " is " + typeof c);
          }
        } else {
          m = 100;
        }
        if (u(d)) {
          if (A(d)) {
            n = d;
          } else {
            throw new K("offset must be a number, but " + d + " is " + typeof d);
          }
        } else {
          n = 0;
        }
        if (u(e)) {
          if (da(e)) {
            p = e;
          } else {
            throw new K("reverse must be a boolean, but " + e + " is " + typeof e);
          }
        }
        k = this.a.request("s", [s]);
        Kd(t, k, arguments);
        N(k, function() {
          V(this).list(k, 4, s, null, B, m, n, p, !1);
        }, this);
      }
    }
  } else {
    if (v(a)) {
      if (a[0] instanceof P) {
        for (var t = [], F = a, O = 0;O < F.length;O++) {
          var U = F[O].i();
          if (!Zd(this.b, U)) {
            if (this.b.a()) {
              return t = [], t[F.length - 1] = void 0, Mc("e", t);
            }
            throw new K("Store: " + U + " not found.");
          }
          0 <= Sa(t, U) || t.push(U);
        }
        mc("listByKeys: " + R(t) + " " + F.length + " keys");
        k = this.a.request("w", t);
        N(k, function() {
          V(this).pb(k, F);
        }, this);
      } else {
        throw new K("first argumentmust be array of ydn.db.Key, but " + a[0] + " of " + typeof a[0] + " found.");
      }
    } else {
      throw new K("first argument " + a + " is invalid.");
    }
  }
  return k;
};
l.list = function(a, b, c, d, e, f, g, h, k) {
  if (!S(this.b, b)) {
    if (this.b.a()) {
      return Mc("e", []);
    }
    throw new qe(b);
  }
  var m, n = cd(d), p = 100;
  if (A(e)) {
    p = e;
  } else {
    if (null != e) {
      throw new K('limit must be a number but "' + e + '" of type ' + typeof e + " found.");
    }
  }
  var r = 0;
  if (A(f)) {
    r = f;
  } else {
    if (null != f) {
      throw new K('offset must be a number but "' + f + '" of type ' + typeof f + " found.");
    }
  }
  var s = !1;
  if (da(g)) {
    s = g;
  } else {
    if (null != g) {
      throw new K('reverse must be a boolean but "' + g + '" of type ' + typeof g + " found.");
    }
  }
  var t = !1;
  if (da(h)) {
    t = h;
  } else {
    if (null != h) {
      throw new K('unique must be a boolean but "' + h + '" of type ' + typeof h + " found.");
    }
  }
  if (r && k && u(k[0])) {
    throw new K("offset must not given when initial cursor position is defined");
  }
  m = this.a.request("u", [b]);
  N(m, function() {
    V(this).list(m, a, b, c || null, n, p, r, s, t, k);
  }, this);
  return m;
};
l.add = function(a, b, c) {
  var d = x(a) ? a : D(a) ? a.name : void 0;
  if (!x(d)) {
    throw new K("store name " + d + " must be a string, but " + typeof d);
  }
  var e = S(this.b, d);
  if (!e) {
    if (!this.b.a()) {
      throw new K('store name "' + d + '" not found.');
    }
    e = td(D(a) ? a : {name:d});
    Ie(this, e);
  } else {
    if (this.b.a() && D(a) && (a = td(a), a = Hd(e, a))) {
      throw new tb(a);
    }
  }
  var f;
  if (!e) {
    throw new K('store name "' + d + '" not found.');
  }
  if (x(e.keyPath) && u(c)) {
    throw new K("key must not be provided while the store uses in-line key.");
  }
  if (!e.keyPath && !e.c && !u(c)) {
    throw new K("out-of-line key must be provided.");
  }
  if (v(b)) {
    for (a = 0;a < b.length;a++) {
      Id(e, b[a]);
    }
    f = this.a.request("b", [d], L);
    N(f, function() {
      V(this).Z(f, !1, !1, d, b, c);
    }, this);
    e.la && f.W(function(a) {
      a = new Yc("created", this.n(), e.getName(), a, b);
      this.n().Q(a);
    }, this);
  } else {
    if (D(b)) {
      Ed(e, b, c), Id(e, b), f = this.a.request("a", [d], L), N(f, function() {
        V(this).Z(f, !1, !0, d, [b], [c]);
      }, this), e.la && f.W(function(a) {
        a = new Xc("created", this.n(), e.getName(), a, b);
        this.n().Q(a);
      }, this);
    } else {
      throw new K("record must be an object or array list of objects, but " + b + " of type " + typeof b + " found.");
    }
  }
  return f;
};
function Je(a, b) {
  var c = x(b) ? b : D(b) ? b.name : void 0;
  if (!x(c)) {
    throw new K("store name must be a string");
  }
  var d = S(a.b, c);
  if (!d) {
    if (!a.b.a()) {
      throw new qe(c);
    }
    d = td(D(b) ? b : {name:c});
    Ie(a, d);
  } else {
    if (a.b.a() && D(b)) {
      var e = td(b);
      if (e = Hd(d, e)) {
        throw new tb(e);
      }
    }
  }
  if (!d) {
    throw new qe(c);
  }
  return d;
}
l.load = function(a, b, c) {
  var d = c || ",", e = Je(this, a).getName();
  a = this.a.request("i3", [e]);
  var f = this;
  this.a.Fa(a, function(a, c, k) {
    V(f).Zb(a, c, k, e, b, d);
  }, [e], L);
  return a;
};
function Ke(a, b) {
  var c = Le(b), d = a.a.request("qb", c, rc);
  N(d, function() {
    var a = V(this);
    Me(b, function(c, g, h, k) {
      var m = Ic(d);
      a.list(m, 4, c, g, cd(h), 100, 0, !1, !1);
      m.K(function(a) {
        var c = null;
        a instanceof Array || (c = a, a = []);
        for (var e = 0;e < a.length;e++) {
          var f;
          f = a[e];
          var g = f.id, g = x(g) ? Ac(g) : g, h = g[3];
          (f = 1 == this.type && h != this.value ? null : new Ne(this, g[0], g[2], g[1], h, f.k, f.loc)) && b.d.push(f);
        }
        b.c--;
        a = 0 == b.c ? !1 : b.b[b.b.length - 1].g === this.g ? !0 : null;
        !0 === a ? oc(d, b) : !1 === a && d.l(b.e());
        if (c) {
          throw c;
        }
      }, k);
    });
  }, a);
  return d;
}
l.put = function(a, b, c) {
  var d, e = this;
  if (a instanceof P) {
    var f = a, g = f.i(), h = S(this.b, g);
    if (!h) {
      throw new K('store "' + g + '" not found.');
    }
    if (h.keyPath) {
      var k = Ed(h, b);
      if (null != k) {
        if (0 != Nc(k, f.o())) {
          throw new K("Inline key must be " + f + " but " + k + " found.");
        }
      } else {
        Fd(h, b, f.o());
      }
      return this.put(g, b);
    }
    return this.put(g, b, f.o());
  }
  if (v(a)) {
    for (var m = a, n = b, f = [], g = 0, h = m.length;g < h;g++) {
      k = m[g].i();
      -1 == Sa(f, k) && f.push(k);
      var p = S(this.b, k);
      if (!p) {
        throw new K('store "' + k + '" not found.');
      }
      p.keyPath && Fd(p, n[g], m[g].o());
    }
    mc("putByKeys: to " + R(f) + " " + n.length + " objects");
    for (g = 0;g < n.length;g++) {
      Id(p, n[g]);
    }
    d = this.a.request("l", f, L);
    Kd(p, d, arguments);
    N(d, function() {
      V(e).wb(d, n, m);
    }, this);
  } else {
    if (x(a) || D(a)) {
      var p = Je(this, a), r = p.getName();
      if (p.keyPath && u(c)) {
        throw new K("key must not be provided while the store uses in-line key.");
      }
      if (!p.keyPath && !p.c && !u(c)) {
        throw new K("out-of-line key must be provided.");
      }
      if (v(b)) {
        for (var s = b, t = c, g = 0;g < s.length;g++) {
          Id(p, s[g]);
        }
        d = this.a.request("k", [r], L);
        Kd(p, d, arguments);
        N(d, function() {
          V(this).Z(d, !0, !1, r, s, t);
        }, this);
        p.la && d.W(function(a) {
          a = new Yc("updated", this.n(), r, a, s);
          this.n().Q(a);
        }, this);
      } else {
        if (D(b)) {
          var y = b, z = c;
          if (u(q.Blob) && y instanceof Blob && p.wa && !p.keyPath && 0 == p.a.length && Yb) {
            d = new Gc("j"), f = new FileReader, f.onload = function(a) {
              var b = a.target.result, c = e.a.request("j", [r], L);
              Kd(p, c, [r, y, z]);
              N(c, function() {
                V(e).Z(c, !0, !0, r, [b], [z]);
              }, this);
              J(c, function(a) {
                d.l(a);
              }, function(a) {
                d.j(a);
              });
            }, f.onerror = function(a) {
              d.j(a);
            }, f.onabort = function(a) {
              d.j(a);
            }, f.readAsDataURL(y);
          } else {
            Id(p, y);
            d = this.a.request("j", [r], L);
            var B = [r, y, z];
            Kd(p, d, B);
            N(d, function() {
              var a = u(z) ? [B[2]] : void 0;
              V(e).Z(d, !0, !0, r, [B[1]], a);
            }, this);
          }
          p.la && d.W(function(a) {
            a = new Xc("updated", this.n(), r, a, y);
            this.n().Q(a);
          }, this);
        } else {
          throw new K("put record value must be Object or array of Objects");
        }
      }
    } else {
      throw new K("the first argument of put must be store name, store schema or array of keys.");
    }
  }
  return d;
};
function Oe(a, b, c, d) {
  var e = a.P, f, g;
  if (x(b)) {
    for (var h = S(a.b, b), k = 0;k < c.length;k++) {
      Id(h, c[k]);
    }
    f = [b];
  } else {
    g = b;
    f = [];
    for (var k = 0, m = g.length;k < m;k++) {
      var n = g[k].i(), h = S(a.b, n);
      -1 == Sa(f, n) && f.push(n);
      Id(h, c[k]);
    }
  }
  var p;
  x(b) ? (h = S(a.b, b), p = e.request("k", f, L), N(p, function() {
    V(this).Z(p, !0, !1, b, c, d);
  }, a)) : (p = e.request("l", f, L), N(p, function() {
    V(this).wb(p, c, g);
  }, a));
  return p;
}
function Pe(a, b) {
  for (var c = [], d = 0, e = b.length;d < e;d++) {
    var f = b[d].i();
    -1 == Sa(c, f) && c.push(f);
  }
  var g = a.P.request("o", c, L);
  N(g, function() {
    V(this).yb(g, b);
  }, a);
  return g;
}
function Qe(a, b, c) {
  var d = a.P.request("n", [b], L);
  N(d, function() {
    V(this).Na(d, b, c || null);
  }, a);
  return d;
}
function Re(a, b, c, d, e, f, g) {
  f = f || 100;
  var h, k = g || 0, m = cd(d);
  x(c) ? (h = a.P.request("u", [b]), N(h, function() {
    V(this).list(h, 4, b, c, m, f, k, e, !1);
  }, a)) : (h = a.P.request("s", [b]), N(h, function() {
    V(this).list(h, 4, b, null, m, f, k, e, !1);
  }, a));
  return h;
}
function Se(a, b) {
  var c = [], d = b.length;
  if (0 == d) {
    return Mc("g", []);
  }
  for (var e = 0;e < d;e++) {
    var f = b[e].i();
    -1 == Sa(c, f) && c.push(f);
  }
  var g = a.P.request("g", c);
  N(g, function() {
    V(a).pb(g, b);
  }, a);
  return g;
}
function Te(a, b, c, d, e, f, g, h) {
  var k;
  e = e || 100;
  x(c) ? (k = a.P.request("i", [b]), N(k, function() {
    V(this).list(k, 2, b, c, d, e, f, g, h);
  }, a)) : (k = a.P.request("g", [b]), N(k, function() {
    V(this).list(k, 2, b, null, d, e, f, g, h);
  }, a));
  return k;
}
l.clear = function(a, b) {
  var c;
  if (x(a)) {
    var d = S(this.b, a);
    if (!d) {
      throw new K('store name "' + a + '" not found.');
    }
    if (D(b)) {
      var e = cd(b);
      if (null === e) {
        throw new K("clear method requires a valid non-null KeyRange object.");
      }
      mc("clearByKeyRange: " + a + ":" + R(e));
      c = this.a.request("c", [a], L);
      Kd(d, c, [a, e]);
      N(c, function() {
        V(this).Jb(c, a, e);
      }, this);
    } else {
      if (u(b)) {
        throw new K("clear method requires a valid KeyRange object as second argument, but found " + b + " of type " + typeof b);
      }
      c = this.a.request("c", [a], L);
      N(c, function() {
        V(this).ab(c, [a]);
      }, this);
    }
  } else {
    if (!u(a) || v(a) && x(a[0])) {
      var f = a || Yd(this.b);
      mc("clearByStores: " + R(f));
      c = this.a.request("c", f, L);
      N(c, function() {
        V(this).ab(c, f);
      }, this);
    } else {
      throw new K('first argument "' + a + '" is invalid.');
    }
  }
  return c;
};
l.Fb = function(a, b, c) {
  var d;
  if (x(a)) {
    var e = S(this.b, a);
    if (!e) {
      throw new K('store name "' + a + '" not found.');
    }
    if (u(c)) {
      if (x(b)) {
        var f = wd(e, b);
        if (!f) {
          throw new K("index: " + b + " not found in " + a);
        }
        if (D(c) || null === c) {
          var g = cd(c);
          mc("removeByIndexKeyRange: " + a + ":" + f.getName() + " " + a);
          d = this.a.request("p", [a], L);
          N(d, function() {
            V(this).$b(d, a, f.getName(), g);
          }, this);
        } else {
          throw new K("key range " + c + ' is invalid type "' + typeof c + '".');
        }
      } else {
        throw new K('index name "' + b + '" must be a string, but ' + typeof b + " found.");
      }
    } else {
      if (x(b) || A(b) || w(b) || b instanceof Date) {
        d = this.a.request("m", [a], L);
        var h = [a, b];
        Kd(e, d, h);
        N(d, function() {
          V(this).xb(d, a, h[1]);
        }, this);
        e.la && d.W(function(c) {
          c = 1 == c ? b : void 0;
          c = new Xc("deleted", this.n(), a, c, void 0);
          this.n().Q(c);
        }, this);
      } else {
        if (D(b)) {
          g = cd(b), mc("removeByKeyRange: " + a + ":" + R(g)), d = this.a.request("n", [a], L), Kd(e, d, [a, g]), N(d, function() {
            V(this).Na(d, a, g);
          }, this), e.la && d.W(function(b) {
            var c = [];
            c.length = b;
            b = new Yc("deleted", this.n(), a, c, void 0);
            this.n().Q(b);
          }, this);
        } else {
          throw new K('Invalid key or key range "' + b + '" of type ' + typeof b);
        }
      }
    }
  } else {
    if (a instanceof P) {
      var k = a.i(), e = S(this.b, k);
      d = this.a.request("m", [k], L);
      var m = [k, a.o()];
      Kd(e, d, m);
      N(d, function() {
        V(this).xb(d, k, m[1]);
      }, this);
    } else {
      if (v(a)) {
        c = [];
        for (var e = 0, n = a.length;e < n;e++) {
          var p = a[e].i();
          -1 == Sa(c, p) && c.push(p);
        }
        if (1 > c.length) {
          throw new K('at least one valid key required in key list "' + Sd(a) + '"');
        }
        d = this.a.request("o", c, L);
        N(d, function() {
          V(this).yb(d, a);
        }, this);
      } else {
        throw new K('first argument requires store name, key (ydn.db.Key) or list of keys (array) , but "' + Sd(a) + '" (' + ca(a) + ") found.");
      }
    }
  }
  return d;
};
function Ue(a, b, c, d) {
  this.d = a;
  this.a = cb(c);
  this.b = d;
  this.c = [];
}
Ue.prototype.d = null;
function Ve(a, b, c) {
  if (a.d) {
    c && a.c.push(c), b(a.d);
  } else {
    throw new xb("tx committed on ParallelTxExecutor");
  }
}
;function We(a, b, c, d, e, f) {
  xe.call(this, a, b, c, d, e, f);
  this.c = this.b = null;
}
G(We, xe);
l = We.prototype;
l.logger = null;
l.abort = function() {
  ze(this.c);
};
l.yc = function(a, b) {
  var c;
  if ("multi" == this.f) {
    a: {
      if (c = this.b, !c.a || !c.b || b != c.b && (c.b != L || b != rc) || a.length > c.a.length) {
        c = !1;
      } else {
        for (var d = 0;d < a.length;d++) {
          if (-1 == c.a.indexOf(a[d])) {
            c = !1;
            break a;
          }
        }
        c = !0;
      }
    }
  } else {
    if ("repeat" == this.f) {
      a: {
        if (c = this.b, c.a && c.b && b == c.b && c.a.length == a.length) {
          for (d = 0;d < a.length;d++) {
            if (-1 == c.a.indexOf(a[d])) {
              c = !1;
              break a;
            }
          }
          c = !0;
        } else {
          c = !1;
        }
      }
    } else {
      c = "all" == this.f ? !0 : !1;
    }
  }
  return c;
};
l.ta = function(a, b, c, d) {
  function e(c) {
    h.d++;
    k = new Ue(c, 0, b, g);
    R(b);
    h.b = k;
    Ve(h.b, a, d);
  }
  function f(a, b) {
    if (k) {
      for (var c = k, d = 0;d < c.c.length;d++) {
        c.c[d](a, b);
      }
      c.c.length = 0;
      c.d = null;
      c.a = null;
      c.c = null;
    }
    h.a = 0;
  }
  this.D && (b = this.D);
  this.r && (c = this.r);
  var g = u(c) ? c : rc, h = this, k;
  if (this.b && this.b.d && this.yc(b, g)) {
    Ve(this.b, a, d);
  } else {
    if (this.h && this.d >= this.h) {
      throw new wb("Exceed maximum number of transactions of " + this.h);
    }
    this.n().transaction(e, b, g, f);
  }
};
l.request = function(a, b, c, d) {
  var e = new Gc(a), f = this;
  this.ta(function(a) {
    f.a++;
    Hc(e, a, f.fa() + "R" + f.a);
  }, b, c || rc, function(a, b) {
    e.a = null;
    d && d(a, b);
  });
  return e;
};
l.Fa = function(a, b, c, d, e) {
  var f = this, g;
  this.ta(function(c) {
    f.a++;
    g = f.fa() + "R" + f.a;
    b(c, g, function(b, d) {
      f.c = c;
      g = f.fa() + "R" + f.a;
      d ? a.j(b) : a.l(b);
      f.c = null;
    });
    b = null;
  }, c, d, e);
};
function Xe(a, b) {
  We.call(this, a, b, ye);
}
G(Xe, We);
Xe.prototype.logger = null;
Xe.prototype.yc = function() {
  return!1;
};
Xe.prototype.request = function(a, b, c) {
  var d, e, f, g = Xe.q.request.call(this, a, b, c, function(a, b) {
    g.a = null;
    if (d) {
      "complete" != a && (f = !0, e = b), d(e, f);
    } else {
      var c = new te;
      M(g, c, !0);
    }
  });
  Kc(g, function(a, b, c) {
    f = b;
    e = a;
    d = c;
  });
  return g;
};
Xe.prototype.Fa = function(a, b, c, d, e) {
  var f, g, h = new I;
  J(h, function(a) {
    g = !1;
    f = a;
  }, function(a) {
    g = !0;
    f = a;
  });
  Xe.q.Fa.call(this, h, b, c, d, function(b, c) {
    if ("complete" != b) {
      a.j(c);
    } else {
      if (!0 === g) {
        a.j(f);
      } else {
        if (!1 === g) {
          a.l(f);
        } else {
          var d = new te;
          a.j(d);
        }
      }
    }
    e && (e(b, c), e = void 0);
  });
};
function Ye(a, b, c) {
  T.call(this, a, b, c);
  this.ya = 0;
  a = !0;
  b = ye;
  c && (u(c.isSerial) && (a = !!c.isSerial), c.policy && (b = c.policy));
  c = Ze(this, b, a);
  this.P = Ze(this, "atomic", !1);
  this.a = this.sb(c, this.P);
}
G(Ye, T);
l = Ye.prototype;
l.ya = 0;
l.zc = function(a, b, c, d, e, f) {
  a = a || ye;
  var g;
  "readonly" == d ? g = rc : "readwrite" == d && (g = L);
  a = Ze(this, a, b, c, g, e);
  return this.sb(a, f ? null : this.P);
};
l.sb = function(a, b) {
  return new Ee(this, this.c, a, b);
};
function Ze(a, b, c, d, e, f) {
  if (c) {
    if ("multi" == b || "repeat" == b || "all" == b || b == ye) {
      return new Ae(a, a.ya++, b, d, e, f);
    }
    if ("atomic" == b) {
      return new De(a, a.ya++);
    }
    throw new K('Invalid requestType "' + b + '"');
  }
  if ("multi" == b || "repeat" == b || "all" == b || b == ye) {
    return new We(a, a.ya++, b, d, e, f);
  }
  if ("atomic" == b) {
    return new Xe(a, a.ya++);
  }
  throw new K('Invalid requestType "' + b + '"');
}
l.Mc = function(a, b, c) {
  this.ya++;
  b = b || Yd(this.c);
  var d = rc;
  if (c) {
    if ("readwrite" == c) {
      d = L;
    } else {
      if ("readonly" != c) {
        throw new K('Invalid transaction mode "' + c + '"');
      }
    }
  }
  var e = Ze(this, "all", !1, b, d, 1), f = this.sb(e, this.P), g = new Gc("q");
  e.ta(function(b) {
    Hc(g, b, e.fa() + "R0");
    a(f);
  }, b, d, function(a) {
    g.a = null;
    M(g, e.d, "complete" !== a);
  });
  return g;
};
l.ad = function() {
  return this.a ? this.a.a.d : NaN;
};
function X(a, b, c) {
  Ye.call(this, a, b, c);
  a = this.c;
  for (b = 0;b < a.c.length;b++) {
    c = a.c[b];
    var d = S(a, c.getName());
    if (d) {
      if (!Bd(d, "k")) {
        throw new K('full text index store "' + d.getName() + '" must have "keyword" index');
      }
      if (!Bd(d, "v")) {
        throw new K('full text index store "' + d.getName() + '" must have "keyword" index');
      }
      if ("id" != d.keyPath) {
        throw new K('full text index store "' + d.getName() + '" must use "id" as key path.');
      }
    } else {
      throw new K('full text index store "' + c.getName() + '" required.');
    }
    for (d = 0;d < c.count();d++) {
      var e = c.index(d), f = S(a, e.i());
      if (f) {
        this.hc(f, c);
      } else {
        throw new K('full text source store "' + e.i() + '" does not exist for full text index "' + c.getName() + '"');
      }
    }
  }
}
G(X, Ye);
l = X.prototype;
l.sb = function(a, b) {
  return new W(this, this.c, a, b);
};
l.add = function(a, b, c) {
  return this.a.add(a, b, c);
};
l.count = function(a, b, c, d) {
  return this.a.count(a, b, c, d);
};
l.get = function(a, b) {
  return this.a.get(a, b);
};
l.keys = function(a, b, c, d, e, f, g) {
  return this.a.keys(a, b, c, d, e, f, g);
};
l.U = function(a, b, c, d, e, f) {
  return this.a.U(a, b, c, d, e, f);
};
l.list = function(a, b, c, d, e, f, g, h, k) {
  return this.a.list(a, b, c, d, e, f, g, h, k);
};
l.load = function(a, b, c) {
  return this.a.load(a, b, c);
};
l.put = function(a, b, c) {
  return this.a.put(a, b, c);
};
l.clear = function(a, b, c) {
  return this.a.clear(a, b, c);
};
l.Fb = function(a, b, c) {
  return this.a.Fb(a, b, c);
};
function Fe(a, b) {
  this.a = b;
}
G(Fe, ue);
l = Fe.prototype;
l.logger = null;
l.cb = function(a, b) {
  function c(e) {
    var f = a.a.objectStore(b[e]).count();
    f.onsuccess = function(f) {
      d[e] = f.target.result;
      e++;
      e == b.length ? M(a, d) : c(e);
    };
    f.onerror = function(b) {
      b.preventDefault();
      M(a, f.error, !0);
    };
  }
  var d = [];
  0 == b.length ? M(a, []) : c(0);
};
l.Z = function(a, b, c, d, e, f) {
  function g(d) {
    if (null == e[d]) {
      if (k++, k == e.length) {
        M(a, h, m);
      } else {
        var r = d + 10;
        r < e.length && g(r);
      }
    }
    var s, r = e[d];
    s = f && null != f[d] ? b ? n.put(r, f[d]) : n.add(r, f[d]) : b ? n.put(r) : n.add(r);
    s.onsuccess = function(b) {
      k++;
      h[d] = b.target.result;
      k == e.length ? M(a, c ? h[0] : h, m) : (b = d + 10, b < e.length && g(b));
    };
    s.onerror = function(b) {
      k++;
      var f = s.error;
      Sd(e[d]);
      h[d] = f;
      m = !0;
      b.preventDefault();
      k == e.length ? M(a, c ? h[0] : h, m) : (b = d + 10, b < e.length && g(b));
    };
  }
  var h = [], k = 0, m = !1, n = a.a.objectStore(d);
  if (0 < e.length) {
    for (d = 0;10 > d && d < e.length;d++) {
      g(d);
    }
  } else {
    M(a, []);
  }
};
l.wb = function(a, b, c) {
  function d(h) {
    var m = c[h], n = m.i(), n = a.a.objectStore(n), p;
    p = null === n.keyPath ? n.put(b[h], m.o()) : n.put(b[h]);
    p.onsuccess = function(c) {
      f++;
      e[h] = c.target.result;
      f == b.length ? M(a, e, g) : (c = h + 10, c < b.length && d(c));
    };
    p.onerror = function(c) {
      f++;
      e[h] = p.error;
      g = !0;
      c.preventDefault();
      f == b.length ? M(a, e, g) : (c = h + 10, c < b.length && d(c));
    };
  }
  var e = [], f = 0, g = !1;
  if (0 < b.length) {
    for (var h = 0;10 > h && h < b.length;h++) {
      d(h);
    }
  } else {
    M(a, e, g);
  }
};
l.Zb = function(a, b, c, d, e, f) {
  function g() {
    var a = {}, b = e.indexOf("\n", m), d = !1, y;
    -1 == b ? (d = !0, y = e.substring(m)) : (y = e.substring(m, b), m = b + 1);
    b = y.split(f);
    for (y = 0;y < n.length;y++) {
      var z = b[y];
      p[y] && (p[y] == kd ? z = oa(z) : "INTEGER" == p[y] ? z = parseInt(z, 10) : "NUMERIC" == p[y] && (z = parseFloat(z)));
      a[n[y]] = z;
    }
    var B = h.put(a);
    B.onsuccess = function(a) {
      k.push(a.target.result);
      d ? c(k) : g();
    };
    B.onerror = function(a) {
      a.preventDefault();
      c(B.error, !0);
    };
  }
  b = S(this.a, d);
  var h = a.objectStore(d), k = [], m = e.indexOf("\n"), n = e.substr(0, m).split(f), p = [];
  for (a = 0;a < n.length;a++) {
    (d = wd(b, n[a])) ? p[a] = d.type : n[a] == b.keyPath && (p[a] = b.type);
  }
  m++;
  g();
};
l.xb = function(a, b, c) {
  var d = a.a.objectStore(b).openCursor(ed.only(c));
  d.onsuccess = function(b) {
    if (b = b.target.result) {
      var c = b["delete"]();
      c.onsuccess = function() {
        M(a, 1);
      };
      c.onerror = function() {
        M(a, c.error, !0);
      };
    } else {
      M(a, 0);
    }
  };
  d.onerror = function(b) {
    b.preventDefault();
    M(a, d.error, !0);
  };
};
l.yb = function(a, b) {
  function c(h) {
    h++;
    if (h >= b.length) {
      0 < g.length ? M(a, g, !0) : M(a, d);
    } else {
      b[h].i() != e && (e = b[h].i(), f = a.a.objectStore(e));
      var k = f["delete"](b[h].o());
      k.onsuccess = function() {
        d++;
        c(h);
      };
      k.onerror = function(a) {
        a.preventDefault();
        g[h] = k.error;
        c(h);
      };
    }
  }
  var d = 0, e, f, g = [];
  c(-1);
};
l.Na = function(a, b, c) {
  var d = a.a.objectStore(b), e = d.count(c);
  e.onsuccess = function(b) {
    var e = b.target.result, h = d["delete"](c);
    h.onsuccess = function() {
      M(a, e);
    };
    h.onerror = function() {
      M(a, h.error, !0);
    };
  };
  e.onerror = function(b) {
    b.preventDefault();
    M(a, e.error, !0);
  };
};
l.Jb = function(a, b, c) {
  var d = a.a.objectStore(b)["delete"](c);
  d.onsuccess = function() {
    M(a, void 0);
  };
  d.onerror = function(b) {
    b.preventDefault();
    M(a, d.error, !0);
  };
};
l.$b = function(a, b, c, d) {
  var e = [], f = a.a.objectStore(b).index(c).openCursor(d), g = 0;
  f.onsuccess = function(b) {
    var c = b.target.result;
    if (c) {
      var d = c["delete"]();
      d.onsuccess = function() {
        g++;
        c["continue"]();
      };
      d.onerror = function(a) {
        e.push(d.error);
        a.preventDefault();
        c["continue"]();
      };
    } else {
      0 < e.length ? M(a, e, !0) : M(a, g);
    }
  };
  f.onerror = function(b) {
    b.preventDefault();
    M(a, f.error, !0);
  };
};
l.ab = function(a, b) {
  for (var c = b.length, d = 0, e = 0;e < c;e++) {
    var f = a.a.objectStore(b[e]).clear();
    f.onsuccess = function() {
      d++;
      d == c && M(a, d);
    };
    f.onerror = function(b) {
      d++;
      b.preventDefault();
      d == c && M(a, f.error, !0);
    };
  }
};
l.hb = function(a, b, c) {
  var d = a.a.objectStore(b), e = d.get(c);
  e.onsuccess = function(b) {
    var c = b.target.result;
    if (!d.keyPath && 0 == d.indexNames.length && Yb && x(c) && 0 <= c.indexOf(";base64,")) {
      '"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substr(1, c.length - 2));
      c = c.split(";base64,");
      b = c[0].split(":")[1];
      for (var c = window.atob(c[1]), e = c.length, k = new Uint8Array(e), m = 0;m < e;++m) {
        k[m] = c.charCodeAt(m);
      }
      M(a, new Blob([k.buffer], {type:b}));
    } else {
      M(a, b.target.result);
    }
  };
  e.onerror = function(b) {
    b.preventDefault();
    M(a, e.error, !0);
  };
};
l.Ub = function(a, b, c) {
  function d(b) {
    if (null == c[b]) {
      if (f++, e[b] = void 0, f == h) {
        M(a, e);
      } else {
        var m = b + 10;
        m < h && d(m);
      }
    }
    var n;
    n = g.get(c[b]);
    n.onsuccess = function(c) {
      f++;
      e[b] = c.target.result;
      f == h ? M(a, e) : (c = b + 10, c < h && d(c));
    };
    n.onerror = function(b) {
      f++;
      b.preventDefault();
      M(a, n.error, !0);
    };
  }
  var e = [];
  e.length = c.length;
  var f = 0, g = a.a.objectStore(b), h = c.length;
  if (0 < h) {
    for (b = 0;10 > b && b < h;b++) {
      d(b);
    }
  } else {
    M(a, []);
  }
};
l.pb = function(a, b) {
  function c(f) {
    var h = b[f], k = a.a.objectStore(h.i()).get(h.o());
    k.onsuccess = function(h) {
      e++;
      d[f] = h.target.result;
      e == b.length ? M(a, d) : (h = f + 10, h < b.length && c(h));
    };
    k.onerror = function(b) {
      e++;
      b.preventDefault();
      M(a, k.error, !0);
    };
  }
  var d = [];
  d.length = b.length;
  var e = 0;
  if (0 < b.length) {
    for (var f = 0;10 > f && f < b.length;f++) {
      c(f);
    }
  } else {
    M(a, []);
  }
};
l.Lb = function(a, b, c, d) {
  b = a.a.objectStore(b);
  c && R(c);
  var e;
  null != d ? (d = b.index(d), e = null != c ? d.count(c) : d.count()) : e = null != c ? b.count(c) : b.count();
  e.onsuccess = function(b) {
    M(a, b.target.result);
  };
  e.onerror = function(b) {
    b.preventDefault();
    M(a, e.error, !0);
  };
};
l.list = function(a, b, c, d, e, f, g, h, k, m) {
  var n = [], p = a.a.objectStore(c), r = h ? k ? "prevunique" : "prev" : k ? "nextunique" : "next";
  c = Lc(a) + " " + b + " " + c + (d ? ":" + d : "") + (e ? R(e) : "");
  h && (c += " reverse");
  k && (c += " unique");
  if (m && u(m[0])) {
    k = d ? !u(m[1]) : !0;
    var s = m[0], t = e ? e.lower : void 0, y = e ? e.upper : void 0, z = e ? !!e.lowerOpen : !1;
    e = e ? !!e.upperOpen : !1;
    e = bd(h ? new Q(t, s, z, k) : new Q(s, y, k, e));
    c += " starting from " + R(m[0]);
    u(m[1]) && (c += ", " + R(m[1]));
  }
  var B;
  B = 1 == b || 2 == b || 3 == b ? d ? p.index(d).openKeyCursor(e, r) : p.openCursor(e, r) : d ? p.index(d).openCursor(e, r) : p.openCursor(e, r);
  var F = !1;
  B.onsuccess = function(c) {
    if (c = c.target.result) {
      if (!F) {
        if (0 < g) {
          F = !0;
          c.advance(g);
          return;
        }
        if (m && d && u(m[0])) {
          if (u(m[1])) {
            var e = tc.cmp(c.key, m[0]), k = h ? -1 : 1;
            if (0 == e) {
              e = tc.cmp(c.primaryKey, m[1]);
              if (0 == e) {
                F = !0;
                c["continue"]();
                return;
              }
              if (e == k) {
                F = !0;
              } else {
                c["continue"]();
                return;
              }
            } else {
              F = !0;
            }
          } else {
            F = !0;
          }
        } else {
          F = !0;
        }
      }
      1 == b ? n.push(c.key) : 2 == b ? n.push(c.primaryKey) : 3 == b ? (k = {}, d && (k[d] = c.key), p.keyPath ? k[p.keyPath] = c.primaryKey : k._ROWID_ = c.primaryKey, n.push(k)) : 4 == b ? n.push(c.value) : n.push([c.key, c.primaryKey, c.value]);
      if (n.length < f) {
        c["continue"]();
      } else {
        m && (m[0] = ad(c.key), m[1] = ad(c.primaryKey)), M(a, n);
      }
    } else {
      m && (m[0] = void 0, m[1] = void 0), M(a, n);
    }
  };
  B.onerror = function(b) {
    b.preventDefault();
    M(a, B.error, !0);
  };
};
function $e(a, b, c) {
  a = ["ydn.db", a];
  u(b) && (a.push(b), u(c) && (a.push(c), u(void 0) && a.push(xc(void 0))));
  return a.join("^|");
}
;function Y(a, b) {
  this.key = a;
  this.a = b;
}
Y.prototype.S = function() {
  return this.a;
};
function af(a, b) {
  var c = Nc(a.key, b.key);
  return 0 === c ? null != a.a ? null != b.a ? Nc(a.a, b.a) : 1 : null != b.a ? -1 : 0 : c;
}
;function bf(a) {
  this.X = a || cf;
}
function cf(a, b) {
  return String(a) < String(b) ? -1 : String(a) > String(b) ? 1 : 0;
}
l = bf.prototype;
l.G = null;
l.X = null;
l.ea = null;
l.da = null;
l.add = function(a) {
  if (null == this.G) {
    return this.da = this.ea = this.G = new df(a), !0;
  }
  var b = null;
  ef(this, function(c) {
    var d = null, e = this.X(c.value, a);
    0 < e ? (d = c.left, null == c.left && (b = new df(a, c), c.left = b, c == this.ea && (this.ea = b))) : 0 > e && (d = c.right, null == c.right && (b = new df(a, c), c.right = b, c == this.da && (this.da = b)));
    return d;
  });
  b && (ef(this, function(a) {
    a.count++;
    return a.parent;
  }, b.parent), ff(this, b.parent));
  return!!b;
};
l.pa = function(a) {
  var b = null;
  ef(this, function(c) {
    var d = null, e = this.X(c.value, a);
    0 < e ? d = c.left : 0 > e ? d = c.right : (b = c.value, gf(this, c));
    return d;
  });
  return b;
};
l.clear = function() {
  this.da = this.ea = this.G = null;
};
l.contains = function(a) {
  var b = !1;
  ef(this, function(c) {
    var d = null, e = this.X(c.value, a);
    0 < e ? d = c.left : 0 > e ? d = c.right : b = !0;
    return d;
  });
  return b;
};
l.indexOf = function(a) {
  var b = -1, c = 0;
  ef(this, function(d) {
    var e = this.X(d.value, a);
    if (0 < e) {
      return d.left;
    }
    d.left && (c += d.left.count);
    if (0 > e) {
      return c++, d.right;
    }
    b = c;
    return null;
  });
  return b;
};
l.t = function() {
  return this.G ? this.G.count : 0;
};
l.C = function() {
  var a = [];
  hf(this, function(b) {
    a.push(b);
  });
  return a;
};
function hf(a, b) {
  if (a.G) {
    var c, d = c = jf(a);
    for (c = c.left ? c.left : c;null != d;) {
      if (null != d.left && d.left != c && d.right != c) {
        d = d.left;
      } else {
        if (d.right != c && b(d.value)) {
          break;
        }
        var e = d, d = null != d.right && d.right != c ? d.right : d.parent;
        c = e;
      }
    }
  }
}
function ef(a, b, c) {
  for (c = c ? c : a.G;c && null != c;) {
    c = b.call(a, c);
  }
}
function ff(a, b) {
  ef(a, function(a) {
    var b = a.left ? a.left.height : 0, e = a.right ? a.right.height : 0;
    1 < b - e ? (a.left.right && (!a.left.left || a.left.left.height < a.left.right.height) && kf(this, a.left), lf(this, a)) : 1 < e - b && (a.right.left && (!a.right.right || a.right.right.height < a.right.left.height) && lf(this, a.right), kf(this, a));
    b = a.left ? a.left.height : 0;
    e = a.right ? a.right.height : 0;
    a.height = Math.max(b, e) + 1;
    return a.parent;
  }, b);
}
function kf(a, b) {
  mf(b) ? (b.parent.left = b.right, b.right.parent = b.parent) : nf(b) ? (b.parent.right = b.right, b.right.parent = b.parent) : (a.G = b.right, a.G.parent = null);
  var c = b.right;
  b.right = b.right.left;
  null != b.right && (b.right.parent = b);
  c.left = b;
  b.parent = c;
  c.count = b.count;
  b.count -= (c.right ? c.right.count : 0) + 1;
}
function lf(a, b) {
  mf(b) ? (b.parent.left = b.left, b.left.parent = b.parent) : nf(b) ? (b.parent.right = b.left, b.left.parent = b.parent) : (a.G = b.left, a.G.parent = null);
  var c = b.left;
  b.left = b.left.right;
  null != b.left && (b.left.parent = b);
  c.right = b;
  b.parent = c;
  c.count = b.count;
  b.count -= (c.left ? c.left.count : 0) + 1;
}
function gf(a, b) {
  if (null != b.left || null != b.right) {
    var c = null, d;
    if (null != b.left) {
      d = of(a, b.left);
      ef(a, function(a) {
        a.count--;
        return a.parent;
      }, d);
      if (d != b.left) {
        if (d.parent.right = d.left) {
          d.left.parent = d.parent;
        }
        d.left = b.left;
        d.left.parent = d;
        c = d.parent;
      }
      d.parent = b.parent;
      d.right = b.right;
      d.right && (d.right.parent = d);
      b == a.da && (a.da = d);
    } else {
      d = jf(a, b.right);
      ef(a, function(a) {
        a.count--;
        return a.parent;
      }, d);
      if (d != b.right) {
        if (d.parent.left = d.right) {
          d.right.parent = d.parent;
        }
        d.right = b.right;
        d.right.parent = d;
        c = d.parent;
      }
      d.parent = b.parent;
      d.left = b.left;
      d.left && (d.left.parent = d);
      b == a.ea && (a.ea = d);
    }
    d.count = b.count;
    mf(b) ? b.parent.left = d : nf(b) ? b.parent.right = d : a.G = d;
    ff(a, c ? c : d);
  } else {
    ef(a, function(a) {
      a.count--;
      return a.parent;
    }, b.parent), mf(b) ? (b.parent.left = null, b == a.ea && (a.ea = b.parent), ff(a, b.parent)) : nf(b) ? (b.parent.right = null, b == a.da && (a.da = b.parent), ff(a, b.parent)) : a.clear();
  }
}
function jf(a, b) {
  if (!b) {
    return a.ea;
  }
  var c = b;
  ef(a, function(a) {
    var b = null;
    a.left && (b = c = a.left);
    return b;
  }, b);
  return c;
}
function of(a, b) {
  if (!b) {
    return a.da;
  }
  var c = b;
  ef(a, function(a) {
    var b = null;
    a.right && (b = c = a.right);
    return b;
  }, b);
  return c;
}
function df(a, b) {
  this.value = a;
  this.parent = b ? b : null;
  this.count = 1;
}
df.prototype.left = null;
df.prototype.right = null;
df.prototype.height = 1;
function nf(a) {
  return!!a.parent && a.parent.right == a;
}
function mf(a) {
  return!!a.parent && a.parent.left == a;
}
;function pf(a) {
  this.X = a || cf;
}
G(pf, bf);
function qf(a, b, c) {
  if (a.G) {
    var d;
    if (c instanceof df) {
      d = c;
    } else {
      if (c) {
        if (ef(a, function(a) {
          var b = null;
          0 < this.X(a.value, c) ? (b = a.left, d = a) : 0 > this.X(a.value, c) ? b = a.right : d = a;
          return b;
        }), !d) {
          return;
        }
      } else {
        d = jf(a);
      }
    }
    a = d;
    for (var e = d.left ? d.left : d;null != a;) {
      if (null != a.left && a.left != e && a.right != e) {
        a = a.left;
      } else {
        if (a.right != e && b(a)) {
          return;
        }
        var f = a;
        a = null != a.right && a.right != e ? a.right : a.parent;
        e = f;
      }
    }
    b(null);
  }
}
function rf(a, b, c) {
  if (a.G) {
    var d;
    if (c instanceof df) {
      d = c;
    } else {
      if (c) {
        if (ef(a, E(function(a) {
          var b = null;
          0 < this.X(a.value, c) ? b = a.left : (0 > this.X(a.value, c) && (b = a.right), d = a);
          return b;
        }, a)), !d) {
          return;
        }
      } else {
        d = of(a);
      }
    }
    a = d;
    for (var e = d.right ? d.right : d;null != a;) {
      if (null != a.right && a.right != e && a.left != e) {
        a = a.right;
      } else {
        if (a.left != e && b(a)) {
          return;
        }
        var f = a;
        a = null != a.left && a.left != e ? a.left : a.parent;
        e = f;
      }
    }
    b(null);
  }
}
;function sf(a, b, c) {
  this.e = a;
  this.storage = b;
  this.b = c;
  this.a = {};
  a = this.b.keyPath;
  this.c = v(a) ? a.join(",") : a || "_ROWID_";
  this.a[this.c] = null;
  this.d = $e(this.e, this.b.getName(), this.c) + "^|";
}
function tf(a, b) {
  var c = b || a.c;
  if (!a.a[c]) {
    a.a[c] = new pf(af);
    for (var d = a.storage.length, e = 0;e < d;e++) {
      var f = a.storage.key(e);
      if (null !== f && 0 == f.lastIndexOf(a.d, 0)) {
        var g = Ac(f.substr(a.d.length));
        if (c == a.c) {
          a.a[c].add(new Y(g));
        } else {
          var h = a.storage.getItem(f);
          if (null !== h) {
            if (f = wd(a.b, c), h = Rd(h), h = ld(f, h), f.multiEntry) {
              if (v(h)) {
                for (f = 0;f < h.length;f++) {
                  a.a[c].add(new Y(h[f], g));
                }
              }
            } else {
              a.a[c].add(new Y(h, g));
            }
          }
        }
      }
    }
  }
  return a.a[c];
}
function uf(a, b, c) {
  for (var d in a.a) {
    var e = a.a[d];
    if (e) {
      if (d == a.c) {
        e.pa(new Y(b));
      } else {
        var f = wd(a.b, d), f = uc(c, f.keyPath);
        e.pa(new Y(b, f));
      }
    }
  }
}
function vf(a) {
  for (var b in a.a) {
    var c = a.a[b];
    c && c.clear();
  }
  a.a = {};
}
function wf(a, b, c, d) {
  if (null == b && (a.b.keyPath && (b = Ed(a.b, c)), a.b.c && null == b)) {
    b = a.d + xc(void 0);
    var e = Rd(a.storage.getItem(b));
    e.key_count || (e.key_count = 0);
    e.key_count++;
    a.storage.setItem(b, R(e));
    b = e.key_count;
  }
  d && (d = null !== a.storage.getItem(a.d + xc(b)));
  if (d) {
    return null;
  }
  a.storage.setItem(a.d + xc(b), R(c));
  d = b;
  for (var f in a.a) {
    if (e = a.a[f]) {
      if (f == a.c) {
        e.add(new Y(d));
      } else {
        var g = wd(a.b, f), g = uc(c, g.keyPath);
        null != g && e.add(new Y(d, g));
      }
    }
  }
  return b;
}
function xf(a, b) {
  var c = a.d + xc(b), d = a.storage.getItem(c);
  if (null === d) {
    return 0;
  }
  a.storage.removeItem(c);
  c = Rd(d);
  uf(a, b, c);
  return 1;
}
sf.prototype.clear = function() {
  vf(this);
  yf(this);
};
function zf(a, b) {
  var c = a.storage.getItem(a.d + xc(b)), d = void 0;
  if (null !== c) {
    for (var d = Rd(c), c = 0, e = a.b.a.length;c < e;c++) {
      var f = a.b.index(c);
      if ("DATE" == f.type) {
        var g = ld(f, d);
        g && md(f, d, new Date(g));
      }
    }
  }
  return d;
}
sf.prototype.getName = function() {
  return this.b.getName();
};
function Af(a, b, c) {
  b = b || a.c;
  a = tf(a, b);
  var d = null, e = null, f = 0, g = !1, h = !1;
  null != c && (null != c.lower && (d = new Y(c.lower)), null != c.upper && (e = new Y(c.upper)), g = c.lowerOpen, h = c.upperOpen);
  qf(a, function(a) {
    if (null != a && (a = a.value, !g || null == d || 0 != Nc(a.key, d.key))) {
      if (null != e && (a = Nc(a.key, e.key), 1 === a || 0 === a && h)) {
        return!0;
      }
      f++;
    }
  }, d);
  return f;
}
function yf(a, b) {
  var c = tf(a, a.c), d = null, e = null, f = 0, g = [], h = [], k = !1, m = !1;
  null != b && (null != b.lower && (d = new Y(b.lower)), null != b.upper && (e = new Y(b.upper)), k = b.lowerOpen, m = b.upperOpen);
  qf(c, function(b) {
    if (null != b && (b = b.value, !k || null == d || 0 != af(b, d))) {
      if (null != e) {
        var c = af(b, e);
        if (1 === c || 0 === c && m) {
          return!0;
        }
      }
      var c = a.d + xc(b.key), r = a.storage.getItem(c);
      null !== r && (a.storage.removeItem(c), f++, 10 > g.length && (g.push(b.key), h.push(Rd(r))));
    }
  }, d);
  if (10 > g.length) {
    for (c = 0;c < g.length;c++) {
      uf(a, g[c], h[c]);
    }
  } else {
    vf(a);
  }
  return f;
}
function Bf(a, b, c, d, e, f, g, h, k) {
  function m(c) {
    if (c && (z++, !(z < g))) {
      var d = c.value;
      if (e) {
        if (F && null != y && (c = r ? af(d, y) : Nc(d.key, y.key), 0 == c)) {
          return;
        }
        if (null != t && (c = r ? af(d, t) : Nc(d.key, t.key), -1 == c || 0 == c && B)) {
          return k && (k[0] = void 0, k[1] = void 0), !0;
        }
      } else {
        if (B && null != t && (c = r ? af(d, t) : Nc(d.key, t.key), 0 == c)) {
          return;
        }
        if (null != y && (c = r ? af(d, y) : Nc(d.key, y.key), 1 == c || 0 == c && F)) {
          return k && (k[0] = void 0, k[1] = void 0), !0;
        }
      }
      c = d.key;
      if (!h || !s || null == p || 0 != Nc(p, c)) {
        d = s ? d.S() : c;
        if (2 == b) {
          n.push(d);
        } else {
          if (1 == b) {
            n.push(c);
          } else {
            if (3 == b) {
              n.push([c, d]);
            } else {
              if (4 == b) {
                var m = zf(a, d);
                n.push(m);
              } else {
                n.push([c, d, zf(a, d)]);
              }
            }
          }
        }
        k && (k[0] = c, k[1] = d);
      }
      p = c;
      if (u(f) && n.length >= f) {
        return!0;
      }
    }
  }
  var n = [], p, r = !!k && null != k[0];
  c = c || a.c;
  var s = c != a.c;
  c = tf(a, c);
  var t = null, y = null;
  u(g) || (g = 0);
  var z = -1, B = !1, F = !1;
  null != d && (null != d.lower && (t = s && e ? new Y(d.lower, "\uffff") : new Y(d.lower)), null != d.upper && (y = s && !e ? new Y(d.upper, "\uffff") : new Y(d.upper)), B = !!d.lowerOpen, F = !!d.upperOpen);
  if (r) {
    e ? F = !0 : B = !0;
    d = k[0];
    var O = u(k[1]) ? k[1] : "\uffff";
    e ? y = s ? new Y(d, O) : new Y(d) : t = s ? new Y(d, O) : new Y(d);
  }
  e ? rf(c, m, y) : qf(c, m, t);
  return n;
}
sf.prototype.H = function(a, b, c, d, e) {
  return Bf(this, 2, a, b, c, d, e);
};
function Cf() {
  this.clear();
}
l = Cf.prototype;
l.Kb = function() {
  return this;
};
l.setItem = function(a, b) {
  u(this.a[a]) || (this.keys.push(a.toString()), this.length = this.keys.length);
  this.a[a] = b;
};
l.getItem = function(a) {
  return u(this.a[a]) ? this.a[a] : null;
};
l.removeItem = function(a) {
  delete this.a[a];
  $a(this.keys, a.toString());
  this.length = this.keys.length;
};
l.length = 0;
l.key = function(a) {
  a = this.keys[a];
  return u(a) ? this.a[a] : null;
};
l.clear = function() {
  this.a = {};
  this.keys = [];
  this.length = 0;
};
function Df(a) {
  this.f = a || new Cf;
  this.e = {};
}
function Ef(a, b) {
  var c = S(a.a, b);
  if (c) {
    a.e[b] || (a.e[b] = new sf(a.d, a.c, c));
  } else {
    throw new xb('store name "' + b + '" not found.');
  }
  return a.e[b];
}
Df.prototype.V = function(a) {
  var b = this;
  setTimeout(function() {
    var c = $e(b.d), c = b.c.getItem(c), c = new Xd(c);
    a(c);
  }, 10);
};
function Ff(a, b) {
  this.b = a;
  this.a = b;
}
Ff.prototype.n = function(a, b) {
  var c = this.b;
  setTimeout(function() {
    a.call(b, c);
  }, 4);
  var d = this;
  return function() {
    d.a("complete", null);
    d.a = null;
    d.b = null;
  };
};
function He(a, b) {
  this.a = b;
}
G(He, ue);
l = He.prototype;
l.logger = null;
l.wb = function(a, b, c) {
  this.Z(a, !0, !1, null, b, c);
};
l.Z = function(a, b, c, d, e, f) {
  var g = a.a.n(function(h) {
    var k;
    if (c) {
      k = Ef(h, d), h = f ? f[0] : void 0, h = wf(k, h, e[0], !b), null != h ? M(a, h) : (k = new oe(""), M(a, k, !0));
    } else {
      for (var m = d, n = [], p = !1, r = f || {}, s = 0;s < e.length;s++) {
        var t;
        d ? t = r[s] : (m = f[s], t = m.o(), m = m.i());
        k && k.getName() == m || (k = Ef(h, m));
        t = wf(k, t, e[s], !b);
        null != t ? n.push(t) : (p = !0, n.push(new oe));
      }
      M(a, n, p);
    }
    g();
    g = null;
  }, this);
};
l.Zb = function() {
  throw new vb("putData");
};
l.hb = function(a, b, c) {
  var d = a.a.n(function(e) {
    e = zf(Ef(e, b), c);
    M(a, e);
    d();
    d = null;
  }, this);
};
function Gf(a, b, c, d) {
  var e = b.a.n(function(a) {
    for (var g = [], h = c, k, m = 0;m < d.length;m++) {
      var n = d[m];
      n instanceof P && (h = n, n = h.o(), h = h.i());
      k && k.getName() == h || (k = Ef(a, h));
      n = zf(k, n);
      g[m] = n;
    }
    M(b, g, !1);
    e();
    e = null;
  }, a);
}
l.Ub = function(a, b, c) {
  Gf(this, a, b, c);
};
l.pb = function(a, b) {
  Gf(this, a, null, b);
};
l.xb = function(a, b, c) {
  var d = a.a.n(function(e) {
    e = xf(Ef(e, b), c);
    M(a, e);
    d();
    d = null;
  }, this);
};
l.yb = function(a, b) {
  var c, d = 0, e = a.a.n(function(f) {
    for (var g = 0;g < b.length;g++) {
      var h = b[g].i(), k = b[g].o();
      c && c.getName() == h || (c = Ef(f, h));
      d += xf(c, k);
    }
    M(a, d);
    e();
    e = null;
  }, this);
};
l.Jb = function(a, b, c) {
  this.Na(a, b, c);
};
l.Na = function(a, b, c) {
  c && R(c);
  var d = a.a.n(function(e) {
    e = yf(Ef(e, b), c);
    M(a, e);
    d();
    d = null;
  }, this);
};
l.$b = function(a, b, c, d) {
  d && R(d);
  var e = a.a.n(function(f) {
    f = Ef(f, b);
    for (var g = f.H(c, d), h = g.length, k = 0;k < h;k++) {
      xf(f, g[k]);
    }
    M(a, h);
    e();
    e = null;
  }, this);
};
l.ab = function(a, b) {
  var c = a.a.n(function(d) {
    for (var e = 0;e < b.length;e++) {
      Ef(d, b[e]).clear();
    }
    M(a, b.length);
    c();
    c = null;
  }, this);
};
l.cb = function(a, b) {
  var c = a.a.n(function(d) {
    for (var e = [], f = 0;f < b.length;f++) {
      var g = Ef(d, b[f]);
      e.push(Af(g));
    }
    M(a, e);
    c();
    c = null;
  }, this);
};
l.Lb = function(a, b, c, d) {
  var e = a.a.n(function(f) {
    f = Af(Ef(f, b), d, c);
    M(a, f);
    e();
    e = null;
  }, this);
};
l.list = function(a, b, c, d, e, f, g, h, k, m) {
  e && Sd(e);
  var n = a.a.n(function(p) {
    p = Bf(Ef(p, c), b, d, e, h, f, g, k, m);
    M(a, p);
    n();
    n = null;
  }, this);
};
function Ge(a, b) {
  this.a = b;
}
G(Ge, ue);
l = Ge.prototype;
l.logger = null;
function Hf(a, b) {
  if (b.wa && !b.keyPath && 0 == b.a.length && a._default_) {
    var c = a._default_;
    if (-1 == c.indexOf(";base64,")) {
      return Rd(c);
    }
    '"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substr(1, c.length - 2));
    for (var d = c.split(";base64,"), c = d[0].split(":")[1], d = window.atob(d[1]), e = d.length, f = new Uint8Array(e), g = 0;g < e;++g) {
      f[g] = d.charCodeAt(g);
    }
    return new Blob([f.buffer], {type:c});
  }
  c = a._default_ ? Rd(a._default_) : {};
  null != b.keyPath && (d = nd(a[b.keyPath], b.type), null != d && Fd(b, c, d));
  for (d = 0;d < b.a.length;d++) {
    e = b.index(d), f = e.e, "_default_" == f || e.f || e.multiEntry || "DATE" != e.type && !b.wa || (f = nd(a[f], e.type), u(f) && md(e, c, f));
  }
  return c;
}
l.Zb = function() {
  throw new vb("putData");
};
l.Z = function(a, b, c, d, e, f) {
  function g(b, d) {
    if (null == e[b]) {
      if (n++, n == e.length) {
        M(a, m, p);
      } else {
        var t = b + 2;
        t < e.length && g(t, d);
      }
    }
    var y;
    y = u(f) ? Gd(h, e[b], f[b]) : Gd(h, e[b]);
    t = k + xd(h) + " (" + y.Cc.join(", ") + ") VALUES (" + y.Pc.join(", ") + ");";
    d.executeSql(t, y.U, function(f, t) {
      function F(a, b) {
        var c = "ydn.db.me:" + h.getName() + ":" + a.getName(), c = k + ra(c) + " (" + h.d + ", " + a.c + ") VALUES (?, ?)", e = [gd(O, h.type), gd(b, a.type)];
        d.executeSql(c, e, function() {
        }, function() {
          return!1;
        });
      }
      n++;
      var O = u(y.key) ? y.key : t.insertId;
      1 > t.rowsAffected && (p = !0, O = new oe(O + " no-op"));
      for (var U = 0, Ba = h.a.length;U < Ba;U++) {
        var lc = h.index(U);
        if (lc.multiEntry) {
          for (var Fa = uc(e[b], lc.keyPath), bb = (Fa ? Fa.length : 0) || 0, ub = 0;ub < bb;ub++) {
            F(lc, Fa[ub]);
          }
        }
      }
      c ? M(a, O) : (m[b] = O, n == e.length ? M(a, m, p) : (U = b + 2, U < e.length && g(U, f)));
    }, function(d, f) {
      n++;
      p = !0;
      6 == f.code && (f.name = "ConstraintError");
      if (c) {
        M(a, f, !0);
      } else {
        if (m[b] = f, n == e.length) {
          M(a, m, p);
        } else {
          var h = b + 2;
          h < e.length && g(h, d);
        }
      }
      return!1;
    });
  }
  b = !b;
  var h = S(this.a, d), k = b ? "INSERT INTO " : "INSERT OR REPLACE INTO ";
  d = a.a;
  var m = [], n = 0, p = !1;
  if (0 < e.length) {
    for (b = 0;2 > b && b < e.length;b++) {
      g(b, d);
    }
  } else {
    M(a, []);
  }
};
l.wb = function(a, b, c) {
  if (0 == c.length) {
    M(a, []);
  } else {
    for (var d = [], e = 0, f = 0, g = this, h = function(h, k) {
      for (var m = [], n = Dd(S(g.a, h)), p = n ? void 0 : [], r = 0;r < k.length;r++) {
        m.push(b[k[r]]), n || p.push(c[k[r]].o());
      }
      n = Ic(a);
      J(n, function(b) {
        for (var c = 0;c < k.length;c++) {
          d[k[c]] = b[c];
        }
        e++;
        e == f && M(a, d);
      }, function() {
        e++;
        e == f && M(a, d, !0);
      });
      g.Z(n, !1, !1, h, m, p);
    }, k = "", m = [], n = [], p = 0;p < c.length;p++) {
      var r = c[p].i(), s = c[p].o();
      r != k ? (f++, 0 < m.length && h(k, m), m = [p], n = [s], k = r) : (m.push(p), n.push(s));
    }
    0 < m.length && h(k, m);
  }
};
l.hb = function(a, b, c) {
  var d = a.a, e = S(this.a, b);
  b = e.d;
  c = [gd(c, e.type)];
  b = "SELECT * FROM " + xd(e) + " WHERE " + b + " = ?";
  d.executeSql(b, c, function(b, c) {
    if (0 < c.rows.length) {
      var d = c.rows.item(0);
      null != d ? (d = Hf(d, e), M(a, d)) : M(a, void 0);
    } else {
      M(a, void 0);
    }
  }, function(b, c) {
    M(a, c, !0);
    return!1;
  });
};
l.Ub = function(a, b, c) {
  function d(b, e) {
    var n = h.d, p = [gd(c[b], h.type)], n = "SELECT * FROM " + xd(h) + " WHERE " + n + " = ?";
    e.executeSql(n, p, function(e, m) {
      g++;
      if (0 < m.rows.length) {
        var n = m.rows.item(0);
        null != n && (f[b] = Hf(n, h));
      } else {
        f[b] = void 0;
      }
      g == c.length ? M(a, f) : (n = b + 10, n < c.length && d(n, e));
    }, function(e) {
      g++;
      if (g == c.length) {
        M(a, f);
      } else {
        var h = b + 10;
        h < c.length && d(h, e);
      }
      return!1;
    });
  }
  var e = a.a, f = [], g = 0, h = S(this.a, b);
  if (0 < c.length) {
    for (b = 0;10 > b && b < c.length;b++) {
      d(b, e);
    }
  } else {
    M(a, []);
  }
};
l.pb = function(a, b) {
  function c(d, h) {
    var n = b[d], p = n.i(), r = S(e.a, p), p = Zc(n), n = r.d, p = [gd(p, r.type)], n = "SELECT * FROM " + xd(r) + " WHERE " + n + " = ?";
    h.executeSql(n, p, function(e, h) {
      g++;
      if (0 < h.rows.length) {
        var m = h.rows.item(0);
        null != m && (f[d] = Hf(m, r));
      } else {
        f[d] = void 0;
      }
      g == b.length ? M(a, f) : (m = d + 10, m < b.length && c(m, e));
    }, function(b, c) {
      M(a, c, !0);
      return!1;
    });
  }
  var d = a.a, e = this, f = [], g = 0;
  if (0 < b.length) {
    for (var h = 0;10 > h && h < b.length;h++) {
      c(h, d);
    }
  } else {
    M(a, []);
  }
};
l.ab = function(a, b) {
  function c(d, g) {
    function h(a) {
      a = "ydn.db.me:" + k.getName() + ":" + a.getName();
      a = "DELETE FROM  " + ra(a);
      g.executeSql(a, []);
    }
    var k = S(e.a, b[d]), m = "DELETE FROM  " + xd(k);
    g.executeSql(m, [], function(e) {
      d == b.length - 1 ? M(a, b.length) : c(d + 1, e);
    }, function(b, c) {
      M(a, c, !0);
      return!1;
    });
    for (var m = 0, n = k.a.length;m < n;m++) {
      var p = k.index(m);
      p.multiEntry && h(p);
    }
  }
  var d = a.a, e = this;
  0 < b.length ? c(0, d) : M(a, 0);
};
l.yb = function(a, b) {
  function c(h) {
    if (h >= b.length) {
      M(a, f, g);
    } else {
      var k = S(e.a, b[h].i()), m = gd(b[h].o(), k.type), n = " WHERE " + k.d + " = ?", p = "DELETE FROM " + xd(k) + n;
      d.executeSql(p, [m], function() {
        f++;
        c(h);
      }, function() {
        g = !0;
        c(h);
        return!1;
      });
      h++;
      for (var p = function(a) {
        a = "ydn.db.me:" + k.getName() + ":" + a.getName();
        a = "DELETE FROM  " + ra(a) + n;
        d.executeSql(a, [m]);
      }, r = 0, s = k.a.length;r < s;r++) {
        var t = k.index(r);
        t.multiEntry && p(t);
      }
    }
  }
  var d = a.a, e = this, f = 0, g = !1;
  c(0);
};
l.xb = function(a, b, c) {
  function d(a) {
    a = "ydn.db.me:" + f.getName() + ":" + a.getName();
    a = "DELETE FROM  " + ra(a) + h;
    e.executeSql(a, [g]);
  }
  var e = a.a, f = S(this.a, b), g = gd(c, f.type), h = " WHERE " + f.d + " = ?";
  b = "DELETE FROM " + xd(f) + h;
  e.executeSql(b, [g], function(b, c) {
    M(a, c.rowsAffected);
  }, function(b, c) {
    M(a, c, !0);
    return!1;
  });
  b = 0;
  for (c = f.a.length;b < c;b++) {
    var k = f.index(b);
    k.multiEntry && d(k);
  }
};
l.Jb = function(a, b, c) {
  If(this, a, b, void 0, c);
};
l.Na = function(a, b, c) {
  If(this, a, b, void 0, c);
};
l.$b = function(a, b, c, d) {
  If(this, a, b, c, d);
};
function If(a, b, c, d, e) {
  function f(a) {
    a = "ydn.db.me:" + h.getName() + ":" + a.getName();
    a = "DELETE FROM  " + ra(a) + m;
    g.executeSql(a, k);
  }
  var g = b.a, h = S(a.a, c);
  a = "DELETE FROM " + xd(h);
  c = [];
  var k = [], m = "";
  null != e && (u(d) ? (d = wd(h, d), fd(d.c, d.type, e, k, c)) : fd(h.d, h.type, e, k, c), m = " WHERE " + k.join(" AND "));
  g.executeSql(a + m, c, function(a, c) {
    M(b, c.rowsAffected);
  }, function(a, c) {
    M(b, c, !0);
    return!1;
  });
  e = 0;
  for (d = h.a.length;e < d;e++) {
    a = h.index(e), a.multiEntry && f(a);
  }
}
l.cb = function(a, b) {
  function c(f) {
    var g = "SELECT COUNT(*) FROM " + ra(b[f]);
    d.executeSql(g, [], function(d, g) {
      var m = g.rows.item(0);
      e[f] = parseInt(m["COUNT(*)"], 10);
      f++;
      f == b.length ? M(a, e) : c(f);
    }, function(b, c) {
      M(a, c, !0);
      return!1;
    });
  }
  var d = a.a, e = [];
  0 == b.length ? M(a, 0) : c(0);
};
l.Lb = function(a, b, c, d, e) {
  var f = [];
  b = ud(S(this.a, b), f, 6, d, c, !1, e);
  a.a.executeSql(b, f, function(b, c) {
    var d;
    a: {
      if (d = c.rows.item(0)) {
        for (var e in d) {
          if (d.hasOwnProperty(e)) {
            d = d[e];
            break a;
          }
        }
      }
      d = void 0;
    }
    M(a, d);
  }, function(b, c) {
    M(a, c, !0);
    return!1;
  });
};
l.list = function(a, b, c, d, e, f, g, h, k, m) {
  var n = [], p = S(this.a, c), r = p.g, s = p.type, t = s, y = null != d && d !== r ? wd(p, d) : null, z = d || r;
  y && (t = y.type);
  c = [];
  if (m && u(m[0])) {
    var B = m[0];
    y && u(m[1]) ? (d = m[1], e = zd(p, b, c, y.getName(), e, B, d, h, k)) : e = yd(p, b, c, d, e, h, k, B);
  } else {
    e = ud(p, c, b, z, e, h, k);
  }
  A(f) && (e += " LIMIT " + f);
  A(g) && (e += " OFFSET " + g);
  R(c);
  a.a.executeSql(e, c, function(c, d) {
    for (var e = d.rows.length, f, g = 0;g < e;g++) {
      f = d.rows.item(g), 2 == b ? n[g] = nd(f[r], s) : 1 == b ? n[g] = nd(f[z], t) : 3 == b ? n[g] = [nd(f[z], t), nd(f[r], s)] : null != f && (n[g] = Hf(f, p));
    }
    m && f && (m[0] = nd(f[z], t), m[1] = nd(f[r], s));
    M(a, n);
  }, function(b, c) {
    M(a, c, !0);
    return!1;
  });
};
function Jf(a, b) {
  this.u = null;
  this.Pa = b || NaN;
}
l = Jf.prototype;
l.Ea = function(a, b) {
  function c(a, c) {
    for (var d = 0;d < b.stores.length;d++) {
      Kf(a, c, b.stores[d]);
    }
    for (var e = a.objectStoreNames, f = e.length, d = 0;d < f;d++) {
      Zd(b, e[d]) || a.deleteObjectStore(e[d]);
    }
  }
  function d(a, b) {
    f.c || (u(b) ? (e.u = null, f.j(b)) : (e.u = a, e.u.onabort = function(a) {
      e.Va(a.target.error);
    }, e.u.onerror = function(a) {
      e.Va(a.target.error);
    }, e.u.onversionchange = function(a) {
      if (e.u && (e.u.onabort = null, e.u.onblocked = null, e.u.onerror = null, e.u.onversionchange = null, e.ub(a), !a.defaultPrevented)) {
        e.u.close();
        e.u = null;
        var b = Error();
        b.name = a.type;
        e.Db(b);
      }
    }, f.l(parseFloat(g))));
  }
  var e = this, f = new I, g = void 0, h = b.version, k;
  k = u(h) ? tc.open(a, h) : tc.open(a);
  k.onsuccess = function(f) {
    var h = f.target.result;
    u(g) || (g = h.version);
    if (b.b) {
      e.V(function(e) {
        if (b instanceof be) {
          for (var f = 0;f < e.stores.length;f++) {
            Zd(b, e.stores[f].getName()) || ce(b, e.stores[f].clone());
          }
        }
        if (0 < $d(b, e, !1, !0).length) {
          if (e = A(h.version) ? h.version + 1 : 1, "IDBOpenDBRequest" in q) {
            h.close();
            var g = tc.open(a, e);
            g.onupgradeneeded = function(a) {
              c(a.target.result, g.transaction);
            };
            g.onsuccess = function(a) {
              d(a.target.result);
            };
            g.onerror = function() {
              d(null);
            };
          } else {
            var k = h.setVersion(e + "");
            k.a = function(a) {
              d(null, a);
            };
            k.onsuccess = function() {
              k.transaction.oncomplete = m;
              c(h, k.transaction);
            };
            var m = function() {
              var b = tc.open(a);
              b.onsuccess = function(a) {
                d(a.target.result);
              };
              b.onerror = function() {
                d(null);
              };
            };
            null != k.transaction && (k.transaction.oncomplete = m);
          }
        } else {
          d(h);
        }
      }, void 0, h);
    } else {
      if (b.version > h.version) {
        var k = h.setVersion(b.version);
        k.a = function(a) {
          d(null, a);
        };
        k.onsuccess = function() {
          c(h, k.transaction);
        };
      } else {
        e.V(function(a) {
          a = $d(b, a, !1, !0);
          0 < a.length ? d(null, new ge("different schema: " + a)) : d(h);
        }, void 0, h);
      }
    }
  };
  k.onupgradeneeded = function(a) {
    a = a.target.result;
    g = NaN;
    c(a, k.transaction);
  };
  k.onerror = function(a) {
    d(null, a);
  };
  k.onblocked = function(a) {
    d(null, a);
  };
  A(this.Pa) && !isNaN(this.Pa) && setTimeout(function() {
    "done" != k.readyState && d(null, new te("connection timeout after " + e.Pa));
  }, this.Pa);
  return f;
};
l.Pa = 18E4;
l.Db = function() {
};
l.Va = function() {
};
l.ub = function() {
};
l.Ua = function() {
  return "indexeddb";
};
l.cc = function() {
  return this.u || null;
};
l.Cb = function() {
  return!!this.u;
};
l.logger = null;
l.u = null;
l.ec = function() {
  return this.u ? parseFloat(this.u.version) : void 0;
};
l.V = function(a, b, c) {
  c = c || this.u;
  if (u(b)) {
    if (null === b) {
      if (0 == c.objectStoreNames.length) {
        a(new Xd(c.version));
        return;
      }
      throw new fe;
    }
    c = b.db;
  } else {
    b = [];
    for (var d = c.objectStoreNames.length - 1;0 <= d;d--) {
      b[d] = c.objectStoreNames[d];
    }
    if (0 == b.length) {
      a(new Xd(c.version));
      return;
    }
    b = c.transaction(b, rc);
  }
  for (var e = c.objectStoreNames, f = [], g = e.length, d = 0;d < g;d++) {
    for (var h = b.objectStore(e[d]), k = [], m = 0, n = h.indexNames.length;m < n;m++) {
      var p = h.index(h.indexNames[m]);
      k[m] = new id(p.keyPath, void 0, p.unique, p.multiEntry, p.name);
    }
    f[d] = new sd(h.name, h.keyPath, h.autoIncrement, void 0, k);
  }
  b = new Xd(c.version, f);
  a(b);
};
function Kf(a, b, c) {
  function d() {
    var b = {autoIncrement:!!c.c};
    null != c.keyPath && (b.keyPath = c.keyPath);
    return a.createObjectStore(c.getName(), b);
  }
  hc("Creating Object Store for " + c.getName() + " keyPath: " + c.keyPath);
  if (a.objectStoreNames.contains(c.getName())) {
    b = b.objectStore(c.getName());
    pd(c.keyPath || "", b.keyPath || "") ? (a.deleteObjectStore(c.getName()), hc("store: " + c.getName() + " deleted due to keyPath change."), b = d()) : da(b.autoIncrement) && da(c.c) && b.autoIncrement != c.c && (a.deleteObjectStore(c.getName()), hc("store: " + c.getName() + " deleted due to autoIncrement change."), b = d());
    for (var e = b.indexNames, f = 0;f < c.a.length;f++) {
      var g = c.index(f);
      !e.contains(g.getName()) && g.d && (b.clear(), hc("store: " + c.getName() + " cleared since generator index need re-indexing."));
    }
    for (var h = 0, k = 0, m = 0, f = 0;f < c.a.length;f++) {
      var g = c.index(f), n = !1;
      if (e.contains(g.getName())) {
        var p = b.index(g.getName()), r = null != p.unique && null != g.unique && p.unique != g.unique, s = null != p.multiEntry && null != g.multiEntry && p.multiEntry != g.multiEntry, p = null != p.keyPath && null != g.keyPath && !!pd(p.keyPath, g.keyPath);
        if (r || s || p) {
          b.deleteIndex(g.getName()), n = !0, h--, m++;
        }
      } else {
        "BLOB" != g.type && (n = !0);
      }
      n && (g.unique || g.multiEntry ? (n = {unique:g.unique, multiEntry:g.multiEntry}, b.createIndex(g.getName(), g.keyPath, n)) : b.createIndex(g.getName(), g.keyPath), h++);
    }
    for (f = 0;f < e.length;f++) {
      Bd(c, e[f]) || (b.deleteIndex(e[f]), k++);
    }
  } else {
    for (b = d(), f = 0;f < c.a.length;f++) {
      g = c.index(f), "BLOB" != g.type && (g.unique || g.multiEntry ? (n = {unique:g.unique, multiEntry:g.multiEntry}, b.createIndex(g.getName(), g.keyPath, n)) : b.createIndex(g.getName(), g.keyPath));
    }
  }
}
l.eb = function(a, b, c, d) {
  var e = this.u;
  if (!b) {
    b = [];
    for (var f = e.objectStoreNames.length - 1;0 <= f;f--) {
      b[f] = e.objectStoreNames[f];
    }
  }
  0 == b.length ? a(null) : (b = e.transaction(b, c), b.oncomplete = function(a) {
    d("complete", a);
  }, b.onabort = function(a) {
    d("abort", a);
  }, a(b), a = null);
};
l.close = function() {
  this.u.close();
};
Oc.push(function(a, b) {
  if (!tc || b && "indexeddb" != b) {
    return null;
  }
  var c = tc.deleteDatabase(a), d = new Gc("vc");
  c.onblocked = function(a) {
    oc(d, a);
  };
  c.onerror = function(a) {
    d.j(a);
  };
  c.onsuccess = function(a) {
    d.l(a);
  };
  return d;
});
function Lf(a) {
  Df.call(this, a);
  this.b = NaN;
}
G(Lf, Df);
l = Lf.prototype;
l.logger = null;
l.ec = function() {
  return this.b;
};
l.Ea = function(a, b) {
  function c(a, b) {
    setTimeout(function() {
      b ? d.j(b) : d.l(a);
    }, 10);
  }
  var d = new I;
  this.c = this.f.Kb(a);
  this.d = a;
  this.a = b;
  var e = $e(this.d);
  this.b = NaN;
  var f = Rd(this.c.getItem(e));
  u(f.version) && !A(f.version) && (f.version = NaN);
  if (f) {
    if (f = new Xd(f), $d(this.a, f, !1, !1)) {
      if (!this.a.b && !isNaN(f.version) && this.a.version > f.version) {
        c(NaN, new pe(""));
      } else {
        var g = this.a.version;
        this.b = u(g) ? g : f.version + 1;
        for (g = 0;g < this.a.count();g++) {
          var h = this.a.stores[g] || null
        }
        if (this.a instanceof be) {
          for (g = 0;g < f.count();g++) {
            h = f.stores[g] || null, ce(this.a, h);
          }
        }
        g = this.a.toJSON();
        g.version = this.b || NaN;
        this.c.setItem(e, R(g));
        c(f.version || NaN);
      }
    } else {
      for (g = 0;g < this.a.count();g++) {
        h = this.a.stores[g] || null;
      }
      this.b = f.version || NaN;
      c(this.b);
    }
  } else {
    f = b.toJSON(), this.b = 1, f.version = this.b, this.c.setItem(e, R(f)), c(NaN);
  }
  return d;
};
l.Cb = function() {
  return!!this.d;
};
l.cc = function() {
  return this.c || null;
};
l.Db = function() {
};
l.Va = function() {
};
l.ub = function() {
};
l.Ua = function() {
  return "memory";
};
l.close = function() {
};
l.eb = function(a, b, c, d) {
  a(new Ff(this, function(a, b) {
    d(a, b);
  }));
};
function Mf() {
  Lf.call(this, this);
}
G(Mf, Lf);
Mf.prototype.Kb = function() {
  return window.localStorage;
};
Mf.prototype.Ua = function() {
  return "localstorage";
};
Oc.push(function(a, b) {
  if (!b || "localstorage" == b) {
    var c = new Mf, d = new be;
    c.Ea(a, d);
    c.V(function(a) {
      for (var b = 0;b < a.stores.length;b++) {
        Ef(c, a.stores[b].getName()).clear();
      }
    });
  }
});
function Nf() {
  Lf.call(this, this);
}
G(Nf, Lf);
Nf.prototype.Kb = function() {
  return window.sessionStorage;
};
Nf.prototype.Ua = function() {
  return "sessionstorage";
};
Oc.push(function(a, b) {
  if (!b || "sessionstorage" == b) {
    var c = new Nf, d = new be;
    c.Ea(a, d);
    c.V(function(a) {
      for (var b = 0;b < a.stores.length;b++) {
        Ef(c, a.stores[b].getName()).clear();
      }
    });
  }
});
function Of(a, b) {
  this.a = u(a) ? a : 4194304;
  this.b = b || "websql";
}
l = Of.prototype;
l.Ea = function(a, b) {
  function c(a, b) {
    var c = a.version ? parseInt(a.version, 10) : 0, f = !1, g = 0;
    a.changeVersion(a.version, (b.b ? isNaN(c) ? 1 : c + 1 : b.version) + "", function(c) {
      e.V(function(a) {
        f = !0;
        for (var d = 0;d < b.count();d++) {
          var e = S(a, (b.stores[d] || null).getName()), e = e ? Cd(e, b.stores[d] || null) : null;
          Pf(c, b.stores[d] || null, function(a) {
            a && g++;
          }, e);
        }
        for (d = 0;d < a.count();d++) {
          e = a.stores[d] || null, Zd(b, e.getName()) || (b instanceof be ? ce(b, e) : (e = "DROP TABLE " + xd(e), c.executeSql(e, [], function() {
          }, function(a, b) {
            throw b;
          })));
        }
      }, c, a);
    }, function(a) {
      throw a;
    }, function() {
      f && d(a);
    });
  }
  function d(a, b) {
    u(b) ? (e.M = null, g.j(b)) : (e.M = a, g.l(parseFloat(f)));
  }
  var e = this, f = NaN, g = new I, h = null;
  try {
    "sqlite" == this.b ? q.sqlitePlugin ? (h = q.sqlitePlugin.openDatabase(a, "", a, this.a), h.readTransaction || (h.readTransaction = h.transaction), h.changeVersion = function(a, b, c, d, e) {
      h.transaction(c, d, e);
    }) : (h = null, this.ob = Error("sqlitePlugin not found.")) : h = q.openDatabase(a, "", a, this.a);
  } catch (k) {
    if ("SECURITY_ERR" == k.name) {
      h = null, this.ob = new se(k);
    } else {
      throw k;
    }
  }
  h ? (f = h.version || "", null != b.version && b.version == h.version ? d(h) : this.V(function(a) {
    $d(b, a, !0, !1) ? c(h, b) : d(h);
  }, null, h)) : d(null, this.ob);
  return g;
};
l.Ua = function() {
  return this.b;
};
l.ob = null;
l.M = null;
l.cc = function() {
  return this.M || null;
};
l.logger = null;
l.Db = function() {
};
l.Va = function() {
};
function Qf(a) {
  var b = a.r, c = "CREATE TABLE IF NOT EXISTS " + xd(a) + " (", d = a.d, c = c + (d + " " + b + " PRIMARY KEY ");
  a.c && (c += " AUTOINCREMENT ");
  if (!a.wa || !a.keyPath && 0 == a.a.length) {
    c += " ,_default_ BLOB";
  }
  for (var e = [], f = [d], g = 0, h = a.a.length;g < h;g++) {
    var k = a.index(g), m = "";
    if (k.multiEntry) {
      var m = "ydn.db.me:" + a.getName() + ":" + k.getName(), n = k.unique ? " UNIQUE " : "", k = "CREATE TABLE IF NOT EXISTS " + ra(m) + " (" + d + " " + b + ", " + k.c + " " + k.g + n + ")";
      e.push(k);
    } else {
      k.unique && (m = " UNIQUE "), n = k.keyPath, "BLOB" != k.type && x(n) && (n = "CREATE " + m + " INDEX IF NOT EXISTS " + ra(a.getName() + "-" + k.getName()) + " ON " + xd(a) + " (" + k.c + ")", e.push(n)), n = k.c, -1 == f.indexOf(n) && (c += ", " + n + " " + k.g + m, f.push(n));
    }
  }
  e.unshift(c + ")");
  return e;
}
l.ec = function() {
  return this.M ? parseFloat(this.M.version) : void 0;
};
l.V = function(a, b, c) {
  function d(a, b) {
    throw b;
  }
  function e(b, c) {
    if (c && c.rows) {
      for (var d = 0;d < c.rows.length;d++) {
        var e = c.rows.item(d);
        if ("__WebKitDatabaseInfoTable__" != e.name && "sqlite_sequence" != e.name && "table" == e.type) {
          var f = "sql" in e ? e.sql : void 0, s = f.substr(f.indexOf("("), f.lastIndexOf(")")).match(/(?:"[^"]*"|[^,])+/g), t = void 0, y, f = [], z = !1, B = !1, F = 0;
          for (;F < s.length;F++) {
            var O = s[F].match(/\w+|"[^"]+"/g), U = Ua(O, function(a) {
              return a.toUpperCase();
            }), Ba = oa(O[0]), O = jd(U[1]);
            if (-1 != U.indexOf("PRIMARY") && -1 != U.indexOf("KEY")) {
              y = O;
              if (x(Ba) && !na(Ba) && "_ROWID_" != Ba) {
                var lc = Ba.split(","), t = Ba;
                1 < lc.length && (t = lc, y = void 0);
              }
              -1 != U.indexOf("AUTOINCREMENT") && (z = !0);
            } else {
              if ("_ROWID_" != Ba) {
                if ("_default_" == Ba) {
                  B = !0;
                } else {
                  var Fa = "UNIQUE" == U[2];
                  0 == Ba.lastIndexOf(e.tbl_name + "-", 0) && (Ba = Ba.substr(e.tbl_name.length + 1));
                  U = new id(Ba, O, Fa);
                  f.push(U);
                }
              }
            }
          }
          if (0 == e.name.lastIndexOf("ydn.db.me:", 0)) {
            var bb = e.name.split(":");
            if (3 <= bb.length) {
              var ub = bb[1], t = new id(bb[2], O, Fa, !0), s = Ya(f, function(a) {
                return a.getName() == bb[2];
              });
              0 <= s ? f[s] = t : f.push(t);
              s = Ya(h, function(a) {
                return a.getName() === ub;
              });
              0 <= s ? (F = h[s], h[s] = new sd(F.getName(), F.keyPath, z, y, f, void 0, !B)) : h.push(new sd(ub, void 0, !1, void 0, [t]));
              kc('multi entry index "' + t.getName() + '" found in ' + ub + (-1 == s ? "*" : ""));
            }
          } else {
            F = Ya(h, function(a) {
              return a.getName() === e.name;
            }), 0 <= F ? (s = h[F].index(0), f.push(s), h[F] = new sd(e.name, t, z, y, f, void 0, !B)) : (f = new sd(e.name, t, z, y, f, void 0, !B), h.push(f));
          }
        }
      }
      d = new Xd(g, h);
      a(d);
    }
  }
  var f = this, g = (c = c || this.M) && c.version ? parseFloat(c.version) : void 0, g = isNaN(g) ? void 0 : g, h = [];
  b ? b.executeSql("SELECT * FROM sqlite_master", [], e, d) : c.readTransaction(function(b) {
    f.V(a, b, c);
  }, function(a) {
    throw a;
  }, e);
};
function Pf(a, b, c, d) {
  function e(b) {
    a.executeSql(b, [], function() {
      f++;
      f == g.length && (c(!0), c = null);
    }, function(a, b) {
      f++;
      f == g.length && (c(!1), c = null);
      throw new re(b, '"');
    });
  }
  var f = 0, g = Qf(b), h = "Create";
  if (d) {
    d = Hd(b, d);
    if (0 == d.length) {
      kc("same table " + b.getName() + " exists.");
      c(!0);
      c = null;
      return;
    }
    h = "Modify";
    ic("table: " + b.getName() + " has changed by " + d + " ALTER TABLE cannot run in WebSql, dropping old table.");
    g.unshift("DROP TABLE IF EXISTS " + ra(b.getName()));
  }
  kc(h + " table: " + b.getName() + ": " + g.join(";"));
  for (b = 0;b < g.length;b++) {
    e(g[b]);
  }
}
l.Cb = function() {
  return!!this.M;
};
l.close = function() {
  this.M = null;
};
l.eb = function(a, b, c, d) {
  function e(a) {
    d("abort", a);
  }
  function f() {
    d("complete", {type:"complete"});
  }
  function g(b) {
    a(b);
  }
  null === this.M && (a(null), d("abort", this.ob));
  c == rc ? this.M.readTransaction(g, e, f) : c == sc ? this.M.changeVersion(this.M.version, this.M.version + 1 + "", g, e, f) : this.M.transaction(g, e, f);
};
Oc.push(function(a, b) {
  if (C(q.openDatabase) && (!b || "websql" == b)) {
    var c = new Of, d = new be, d = c.Ea(a, d), e = function() {
    };
    d.W(function() {
      c.eb(function(a) {
        a.executeSql('SELECT * FROM sqlite_master WHERE type = "table"', [], function(b, c) {
          if (c && c.rows) {
            for (var d = c.rows.length, e = 0, n = 0;n < d;n++) {
              var p = c.rows.item(n);
              "__WebKitDatabaseInfoTable__" != p.name && "sqlite_sequence" != p.name && (e++, a.executeSql("DROP TABLE " + p.name));
            }
          }
        }, function(a, b) {
          throw b;
        });
      }, [], L, e);
    });
    d.Ib(function() {
    });
  }
});
Of.prototype.ub = function() {
};
/*
 Copyright 2012 YDN Authors, Yathit. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");.
*/
Ye.prototype.Mb = function(a) {
  return "indexeddb" == a && tc ? new Jf(0, this.J) : "websql" == a && C(q.openDatabase) ? new Of(this.p) : "sqlite" == a && q.sqlitePlugin ? new Of(this.p, "sqlite") : "localstorage" == a && window.localStorage ? new Mf : "sessionstorage" == a && window.sessionStorage ? new Nf : "memory" == a ? new Lf : null;
};
/*
 Copyright 2012 YDN Authors, Yathit. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");.
*/
Ye.prototype.branch = Ye.prototype.zc;
Ye.prototype.getTxNo = Ye.prototype.ad;
Ee.prototype.getTxNo = Ee.prototype.e;
Ye.prototype.run = Ye.prototype.Mc;
X.prototype.branch = X.prototype.zc;
X.prototype.add = X.prototype.add;
X.prototype.get = X.prototype.get;
X.prototype.keys = X.prototype.keys;
X.prototype.values = X.prototype.U;
X.prototype.put = X.prototype.put;
X.prototype.clear = X.prototype.clear;
X.prototype.remove = X.prototype.Fb;
X.prototype.count = X.prototype.count;
W.prototype.add = W.prototype.add;
W.prototype.get = W.prototype.get;
W.prototype.keys = W.prototype.keys;
W.prototype.values = W.prototype.U;
W.prototype.put = W.prototype.put;
W.prototype.clear = W.prototype.clear;
W.prototype.remove = W.prototype.Fb;
W.prototype.count = W.prototype.count;
ja("ydn.db.Key", P);
P.prototype.id = P.prototype.o;
P.prototype.parent = P.prototype.Xc;
P.prototype.storeName = P.prototype.i;
ja("ydn.db.KeyRange", Q);
Q.upperBound = Q.upperBound;
Q.lowerBound = Q.lowerBound;
Q.bound = Q.bound;
Q.only = Q.only;
Q.starts = dd;
Tc.prototype.store_name = Tc.prototype.b;
Tc.prototype.getStoreName = Tc.prototype.i;
Xc.prototype.name = Xc.prototype.name;
Xc.prototype.getKey = Xc.prototype.c;
Xc.prototype.getValue = Xc.prototype.A;
Yc.prototype.name = Yc.prototype.name;
Yc.prototype.getKeys = Yc.prototype.H;
Yc.prototype.getValues = Yc.prototype.C;
var Rf = !Wb || Wb && 9 <= gc, Sf = Wb && !ec("9");
!Yb || ec("528");
Xb && ec("1.9b") || Wb && ec("8") || Vb && ec("9.5") || Yb && ec("528");
Xb && !ec("8") || Wb && ec("9");
function Tf(a) {
  Tf[" "](a);
  return a;
}
Tf[" "] = ba;
function Uf(a, b) {
  Sc.call(this, a ? a.type : "");
  this.a = this.target = null;
  this.clientY = this.clientX = 0;
  this.b = null;
  if (a) {
    this.type = a.type;
    this.target = a.target || a.srcElement;
    this.a = b;
    var c = a.relatedTarget;
    if (c && Xb) {
      try {
        Tf(c.nodeName);
      } catch (d) {
      }
    }
    this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
    this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
    this.b = a;
    a.defaultPrevented && this.preventDefault();
  }
}
G(Uf, Sc);
Uf.prototype.preventDefault = function() {
  Uf.q.preventDefault.call(this);
  var a = this.b;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Sf) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var Vf = "closure_listenable_" + (1E6 * Math.random() | 0);
function Wf(a) {
  return!(!a || !a[Vf]);
}
var Xf = 0;
function Yf(a, b, c, d, e) {
  this.qa = a;
  this.a = null;
  this.src = b;
  this.type = c;
  this.Za = !!d;
  this.mb = e;
  this.key = ++Xf;
  this.Aa = this.Ya = !1;
}
function Zf(a) {
  a.Aa = !0;
  a.qa = null;
  a.a = null;
  a.src = null;
  a.mb = null;
}
;function $f(a) {
  this.src = a;
  this.a = {};
  this.b = 0;
}
$f.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.a[f];
  a || (a = this.a[f] = [], this.b++);
  var g = ag(a, b, d, e);
  -1 < g ? (b = a[g], c || (b.Ya = !1)) : (b = new Yf(b, this.src, f, !!d, e), b.Ya = c, a.push(b));
  return b;
};
function bg(a, b) {
  var c = b.type;
  if (!(c in a.a)) {
    return!1;
  }
  var d = $a(a.a[c], b);
  d && (Zf(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
  return d;
}
function cg(a, b, c, d, e) {
  a = a.a[b.toString()];
  b = -1;
  a && (b = ag(a, c, d, e));
  return-1 < b ? a[b] : null;
}
function ag(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.Aa && f.qa == b && f.Za == !!c && f.mb == d) {
      return e;
    }
  }
  return-1;
}
;var dg = "closure_lm_" + (1E6 * Math.random() | 0), eg = {}, fg = 0;
function gg(a, b, c, d, e) {
  if (v(b)) {
    for (var f = 0;f < b.length;f++) {
      gg(a, b[f], c, d, e);
    }
    return null;
  }
  c = hg(c);
  return Wf(a) ? a.Wb(b, c, d, e) : ig(a, b, c, !1, d, e);
}
function ig(a, b, c, d, e, f) {
  if (!b) {
    throw Error("Invalid event type");
  }
  var g = !!e, h = jg(a);
  h || (a[dg] = h = new $f(a));
  c = h.add(b, c, d, e, f);
  if (c.a) {
    return c;
  }
  d = kg();
  c.a = d;
  d.src = a;
  d.qa = c;
  a.addEventListener ? a.addEventListener(b.toString(), d, g) : a.attachEvent(lg(b.toString()), d);
  fg++;
  return c;
}
function kg() {
  var a = mg, b = Rf ? function(c) {
    return a.call(b.src, b.qa, c);
  } : function(c) {
    c = a.call(b.src, b.qa, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function ng(a, b, c, d, e) {
  if (v(b)) {
    for (var f = 0;f < b.length;f++) {
      ng(a, b[f], c, d, e);
    }
  } else {
    c = hg(c), Wf(a) ? a.$.add(String(b), c, !0, d, e) : ig(a, b, c, !0, d, e);
  }
}
function og(a, b, c, d, e) {
  if (v(b)) {
    for (var f = 0;f < b.length;f++) {
      og(a, b[f], c, d, e);
    }
  } else {
    c = hg(c), Wf(a) ? a.Ra(b, c, d, e) : a && (a = jg(a)) && (b = cg(a, b, c, !!d, e)) && pg(b);
  }
}
function pg(a) {
  if (A(a) || !a || a.Aa) {
    return!1;
  }
  var b = a.src;
  if (Wf(b)) {
    return bg(b.$, a);
  }
  var c = a.type, d = a.a;
  b.removeEventListener ? b.removeEventListener(c, d, a.Za) : b.detachEvent && b.detachEvent(lg(c), d);
  fg--;
  (c = jg(b)) ? (bg(c, a), 0 == c.b && (c.src = null, b[dg] = null)) : Zf(a);
  return!0;
}
function lg(a) {
  return a in eg ? eg[a] : eg[a] = "on" + a;
}
function qg(a, b, c, d) {
  var e = 1;
  if (a = jg(a)) {
    if (b = a.a[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.Za == c && !f.Aa && (e &= !1 !== rg(f, d));
      }
    }
  }
  return Boolean(e);
}
function rg(a, b) {
  var c = a.qa, d = a.mb || a.src;
  a.Ya && pg(a);
  return c.call(d, b);
}
function mg(a, b) {
  if (a.Aa) {
    return!0;
  }
  if (!Rf) {
    var c;
    if (!(c = b)) {
      a: {
        c = ["window", "event"];
        for (var d = q, e;e = c.shift();) {
          if (null != d[e]) {
            d = d[e];
          } else {
            c = null;
            break a;
          }
        }
        c = d;
      }
    }
    e = c;
    c = new Uf(e, this);
    d = !0;
    if (!(0 > e.keyCode || void 0 != e.returnValue)) {
      a: {
        var f = !1;
        if (0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a;
          } catch (g) {
            f = !0;
          }
        }
        if (f || void 0 == e.returnValue) {
          e.returnValue = !0;
        }
      }
      e = [];
      for (f = c.a;f;f = f.parentNode) {
        e.push(f);
      }
      for (var f = a.type, h = e.length - 1;0 <= h;h--) {
        c.a = e[h], d &= qg(e[h], f, !0, c);
      }
      for (h = 0;h < e.length;h++) {
        c.a = e[h], d &= qg(e[h], f, !1, c);
      }
    }
    return d;
  }
  return rg(a, new Uf(b, this));
}
function jg(a) {
  a = a[dg];
  return a instanceof $f ? a : null;
}
var sg = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function hg(a) {
  return C(a) ? a : a[sg] || (a[sg] = function(b) {
    return a.handleEvent(b);
  });
}
;function tg() {
  Pc.call(this);
  this.$ = new $f(this);
  this.Oa = this;
  this.ja = null;
}
G(tg, Pc);
tg.prototype[Vf] = !0;
l = tg.prototype;
l.addEventListener = function(a, b, c, d) {
  gg(this, a, b, c, d);
};
l.removeEventListener = function(a, b, c, d) {
  og(this, a, b, c, d);
};
function ug(a, b) {
  var c, d = a.ja;
  if (d) {
    for (c = [];d;d = d.ja) {
      c.push(d);
    }
  }
  var d = a.Oa, e = b, f = e.type || e;
  if (x(e)) {
    e = new Sc(e, d);
  } else {
    if (e instanceof Sc) {
      e.target = e.target || d;
    } else {
      var g = e, e = new Sc(f, d);
      Cb(e, g);
    }
  }
  var g = !0, h;
  if (c) {
    for (var k = c.length - 1;0 <= k;k--) {
      h = e.a = c[k], g = vg(h, f, !0, e) && g;
    }
  }
  h = e.a = d;
  g = vg(h, f, !0, e) && g;
  g = vg(h, f, !1, e) && g;
  if (c) {
    for (k = 0;k < c.length;k++) {
      h = e.a = c[k], g = vg(h, f, !1, e) && g;
    }
  }
}
l.I = function() {
  tg.q.I.call(this);
  if (this.$) {
    var a = this.$, b = 0, c;
    for (c in a.a) {
      for (var d = a.a[c], e = 0;e < d.length;e++) {
        ++b, Zf(d[e]);
      }
      delete a.a[c];
      a.b--;
    }
  }
  this.ja = null;
};
l.Wb = function(a, b, c, d) {
  return this.$.add(String(a), b, !1, c, d);
};
l.Ra = function(a, b, c, d) {
  var e;
  e = this.$;
  a = String(a).toString();
  if (a in e.a) {
    var f = e.a[a];
    b = ag(f, b, c, d);
    -1 < b ? (Zf(f[b]), H.splice.call(f, b, 1), 0 == f.length && (delete e.a[a], e.b--), e = !0) : e = !1;
  } else {
    e = !1;
  }
  return e;
};
function vg(a, b, c, d) {
  b = a.$.a[String(b)];
  if (!b) {
    return!0;
  }
  b = b.concat();
  for (var e = !0, f = 0;f < b.length;++f) {
    var g = b[f];
    if (g && !g.Aa && g.Za == c) {
      var h = g.qa, k = g.mb || g.src;
      g.Ya && bg(a.$, g);
      e = !1 !== h.call(k, d) && e;
    }
  }
  return e && !1 != d.tc;
}
;function wg(a, b, c) {
  if (C(a)) {
    c && (a = E(a, c));
  } else {
    if (a && "function" == typeof a.handleEvent) {
      a = E(a.handleEvent, a);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < b ? -1 : q.setTimeout(a, b || 0);
}
;function xg(a) {
  Pc.call(this);
  this.b = a;
  this.a = {};
}
G(xg, Pc);
var yg = [];
xg.prototype.Wb = function(a, b, c, d) {
  v(b) || (b && (yg[0] = b.toString()), b = yg);
  for (var e = 0;e < b.length;e++) {
    var f = gg(a, b[e], c || this.handleEvent, d || !1, this.b || this);
    if (!f) {
      break;
    }
    this.a[f.key] = f;
  }
  return this;
};
xg.prototype.Ra = function(a, b, c, d, e) {
  if (v(b)) {
    for (var f = 0;f < b.length;f++) {
      this.Ra(a, b[f], c, d, e);
    }
  } else {
    c = c || this.handleEvent, e = e || this.b || this, c = hg(c), d = !!d, b = Wf(a) ? cg(a.$, String(b), c, d, e) : a ? (a = jg(a)) ? cg(a, b, c, d, e) : null : null, b && (pg(b), delete this.a[b.key]);
  }
  return this;
};
xg.prototype.I = function() {
  xg.q.I.call(this);
  var a = this.a, b = pg, c;
  for (c in a) {
    b.call(void 0, a[c], c, a);
  }
  this.a = {};
};
xg.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function zg() {
}
zg.prototype.a = null;
function Ag(a) {
  var b;
  (b = a.a) || (b = {}, Bg(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
  return b;
}
;var Cg;
function Dg() {
}
G(Dg, zg);
function Eg(a) {
  return(a = Bg(a)) ? new ActiveXObject(a) : new XMLHttpRequest;
}
function Bg(a) {
  if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.b = d;
      } catch (e) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return a.b;
}
Cg = new Dg;
var Fg = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
function Gg(a) {
  if (Hg) {
    Hg = !1;
    var b = q.location;
    if (b) {
      var c = b.href;
      if (c && (c = (c = Gg(c)[3] || null) && decodeURIComponent(c)) && c != b.hostname) {
        throw Hg = !0, Error();
      }
    }
  }
  return a.match(Fg);
}
var Hg = Yb;
function Ig(a) {
  tg.call(this);
  this.headers = new Jb;
  this.D = a || null;
  this.b = !1;
  this.r = this.a = null;
  this.O = "";
  this.d = 0;
  this.m = "";
  this.c = this.N = this.h = this.J = !1;
  this.f = 0;
  this.p = null;
  this.e = Jg;
  this.ka = this.Ab = !1;
}
G(Ig, tg);
var Jg = "", Kg = /^https?$/i, Lg = ["POST", "PUT"];
l = Ig.prototype;
l.nc = function() {
  return this.e;
};
l.send = function(a, b, c, d) {
  if (this.a) {
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.O + "; newUri=" + a);
  }
  b = b ? b.toUpperCase() : "GET";
  this.O = a;
  this.m = "";
  this.d = 0;
  this.J = !1;
  this.b = !0;
  this.a = this.D ? Eg(this.D) : Eg(Cg);
  this.r = this.D ? Ag(this.D) : Ag(Cg);
  this.a.onreadystatechange = E(this.rc, this);
  try {
    this.N = !0, this.a.open(b, String(a), !0), this.N = !1;
  } catch (e) {
    Mg(this, e);
    return;
  }
  a = c || "";
  var f = this.headers.clone();
  d && Eb(d, function(a, b) {
    Kb(f, b, a);
  });
  d = Xa(f.H(), Ng);
  c = q.FormData && a instanceof q.FormData;
  !(0 <= Sa(Lg, b)) || d || c || Kb(f, "Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  f.forEach(function(a, b) {
    this.a.setRequestHeader(b, a);
  }, this);
  this.e && (this.a.responseType = this.e);
  "withCredentials" in this.a && (this.a.withCredentials = this.Ab);
  try {
    Og(this), 0 < this.f && ((this.ka = Pg(this.a)) ? (this.a.timeout = this.f, this.a.ontimeout = E(this.vc, this)) : this.p = wg(this.vc, this.f, this)), this.h = !0, this.a.send(a), this.h = !1;
  } catch (g) {
    Mg(this, g);
  }
};
function Pg(a) {
  return Wb && ec(9) && A(a.timeout) && u(a.ontimeout);
}
function Ng(a) {
  return "content-type" == a.toLowerCase();
}
l.vc = function() {
  "undefined" != typeof aa && this.a && (this.m = "Timed out after " + this.f + "ms, aborting", this.d = 8, ug(this, "timeout"), this.abort(8));
};
function Mg(a, b) {
  a.b = !1;
  a.a && (a.c = !0, a.a.abort(), a.c = !1);
  a.m = b;
  a.d = 5;
  Qg(a);
  Rg(a);
}
function Qg(a) {
  a.J || (a.J = !0, ug(a, "complete"), ug(a, "error"));
}
l.abort = function(a) {
  this.a && this.b && (this.b = !1, this.c = !0, this.a.abort(), this.c = !1, this.d = a || 7, ug(this, "complete"), ug(this, "abort"), Rg(this));
};
l.I = function() {
  this.a && (this.b && (this.b = !1, this.c = !0, this.a.abort(), this.c = !1), Rg(this, !0));
  Ig.q.I.call(this);
};
l.rc = function() {
  this.g || (this.N || this.h || this.c ? Sg(this) : this.Lc());
};
l.Lc = function() {
  Sg(this);
};
function Sg(a) {
  if (a.b && "undefined" != typeof aa && (!a.r[1] || 4 != Tg(a) || 2 != Ug(a))) {
    if (a.h && 4 == Tg(a)) {
      wg(a.rc, 0, a);
    } else {
      if (ug(a, "readystatechange"), 4 == Tg(a)) {
        a.b = !1;
        try {
          Vg(a) ? (ug(a, "complete"), ug(a, "success")) : (a.d = 6, a.m = Wg(a) + " [" + Ug(a) + "]", Qg(a));
        } finally {
          Rg(a);
        }
      }
    }
  }
}
function Rg(a, b) {
  if (a.a) {
    Og(a);
    var c = a.a, d = a.r[0] ? ba : null;
    a.a = null;
    a.r = null;
    b || ug(a, "ready");
    try {
      c.onreadystatechange = d;
    } catch (e) {
    }
  }
}
function Og(a) {
  a.a && a.ka && (a.a.ontimeout = null);
  A(a.p) && (q.clearTimeout(a.p), a.p = null);
}
function Vg(a) {
  var b = Ug(a), c;
  a: {
    switch(b) {
      case 200:
      ;
      case 201:
      ;
      case 202:
      ;
      case 204:
      ;
      case 206:
      ;
      case 304:
      ;
      case 1223:
        c = !0;
        break a;
      default:
        c = !1;
    }
  }
  if (!c) {
    if (b = 0 === b) {
      a = Gg(String(a.O))[1] || null, !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1)), b = !Kg.test(a ? a.toLowerCase() : "");
    }
    c = b;
  }
  return c;
}
function Tg(a) {
  return a.a ? a.a.readyState : 0;
}
function Ug(a) {
  try {
    return 2 < Tg(a) ? a.a.status : -1;
  } catch (b) {
    return-1;
  }
}
function Wg(a) {
  try {
    return 2 < Tg(a) ? a.a.statusText : "";
  } catch (b) {
    return "";
  }
}
function Xg(a) {
  try {
    if (!a.a) {
      return null;
    }
    if ("response" in a.a) {
      return a.a.response;
    }
    switch(a.e) {
      case Jg:
      ;
      case "text":
        return a.a.responseText;
      case "arraybuffer":
        if ("mozResponseArrayBuffer" in a.a) {
          return a.a.mozResponseArrayBuffer;
        }
      ;
    }
    return null;
  } catch (b) {
    return null;
  }
}
;function Yg() {
  this.b = [];
  this.a = [];
}
function Zg(a) {
  0 == a.b.length && (a.b = a.a, a.b.reverse(), a.a = []);
  return a.b.pop();
}
l = Yg.prototype;
l.t = function() {
  return this.b.length + this.a.length;
};
l.ca = function() {
  return 0 == this.b.length && 0 == this.a.length;
};
l.clear = function() {
  this.b = [];
  this.a = [];
};
l.contains = function(a) {
  return 0 <= Sa(this.b, a) || 0 <= Sa(this.a, a);
};
l.C = function() {
  for (var a = [], b = this.b.length - 1;0 <= b;--b) {
    a.push(this.b[b]);
  }
  for (var c = this.a.length, b = 0;b < c;++b) {
    a.push(this.a[b]);
  }
  return a;
};
function $g(a, b) {
  Pc.call(this);
  this.f = a || 0;
  this.c = b || 10;
  if (this.f > this.c) {
    throw Error(ah);
  }
  this.a = new Yg;
  this.b = new Ob;
  this.e = null;
  this.Wa();
}
G($g, Pc);
var ah = "[goog.structs.Pool] Min can not be greater than max";
l = $g.prototype;
l.lb = function() {
  var a = ia();
  if (!(null != this.e && 0 > a - this.e)) {
    for (var b;0 < this.a.t() && (b = Zg(this.a), !this.Yb(b));) {
      this.Wa();
    }
    !b && this.t() < this.c && (b = this.Rb());
    b && (this.e = a, this.b.add(b));
    return b;
  }
};
l.Ha = function(a) {
  this.b.pa(a);
  this.Yb(a) && this.t() < this.c ? this.a.a.push(a) : bh(a);
};
l.Wa = function() {
  for (var a = this.a;this.t() < this.f;) {
    var b = this.Rb();
    a.a.push(b);
  }
  for (;this.t() > this.c && 0 < this.a.t();) {
    bh(Zg(a));
  }
};
l.Rb = function() {
  return{};
};
function bh(a) {
  if ("function" == typeof a.ma) {
    a.ma();
  } else {
    for (var b in a) {
      a[b] = null;
    }
  }
}
l.Yb = function(a) {
  return "function" == typeof a.Bc ? a.Bc() : !0;
};
l.contains = function(a) {
  return this.a.contains(a) || this.b.contains(a);
};
l.t = function() {
  return this.a.t() + this.b.t();
};
l.ca = function() {
  return this.a.ca() && this.b.ca();
};
l.I = function() {
  $g.q.I.call(this);
  if (0 < this.b.t()) {
    throw Error("[goog.structs.Pool] Objects not released");
  }
  delete this.b;
  for (var a = this.a;!a.ca();) {
    bh(Zg(a));
  }
  delete this.a;
};
function ch(a, b) {
  this.a = a;
  this.b = b;
}
ch.prototype.A = function() {
  return this.b;
};
ch.prototype.clone = function() {
  return new ch(this.a, this.b);
};
function dh(a) {
  this.a = [];
  if (a) {
    a: {
      var b, c;
      if (a instanceof dh) {
        if (b = a.H(), c = a.C(), 0 >= a.t()) {
          a = this.a;
          for (var d = 0;d < b.length;d++) {
            a.push(new ch(b[d], c[d]));
          }
          break a;
        }
      } else {
        b = zb(a), c = yb(a);
      }
      for (d = 0;d < b.length;d++) {
        eh(this, b[d], c[d]);
      }
    }
  }
}
function eh(a, b, c) {
  var d = a.a;
  d.push(new ch(b, c));
  b = d.length - 1;
  a = a.a;
  for (c = a[b];0 < b;) {
    if (d = b - 1 >> 1, a[d].a > c.a) {
      a[b] = a[d], b = d;
    } else {
      break;
    }
  }
  a[b] = c;
}
l = dh.prototype;
l.C = function() {
  for (var a = this.a, b = [], c = a.length, d = 0;d < c;d++) {
    b.push(a[d].A());
  }
  return b;
};
l.H = function() {
  for (var a = this.a, b = [], c = a.length, d = 0;d < c;d++) {
    b.push(a[d].a);
  }
  return b;
};
l.clone = function() {
  return new dh(this);
};
l.t = function() {
  return this.a.length;
};
l.ca = function() {
  return 0 == this.a.length;
};
l.clear = function() {
  Za(this.a);
};
function fh() {
  dh.call(this);
}
G(fh, dh);
function gh(a, b) {
  this.d = new fh;
  $g.call(this, a, b);
}
G(gh, $g);
l = gh.prototype;
l.lb = function(a, b) {
  if (!a) {
    return gh.q.lb.call(this);
  }
  eh(this.d, u(b) ? b : 100, a);
  this.Sb();
};
l.Sb = function() {
  for (var a = this.d;0 < a.t();) {
    var b = this.lb();
    if (b) {
      var c;
      var d = a, e = d.a, f = e.length;
      c = e[0];
      if (0 >= f) {
        c = void 0;
      } else {
        if (1 == f) {
          Za(e);
        } else {
          e[0] = e.pop();
          for (var e = 0, d = d.a, f = d.length, g = d[e];e < f >> 1;) {
            var h = 2 * e + 1, k = 2 * e + 2, h = k < f && d[k].a < d[h].a ? k : h;
            if (d[h].a > g.a) {
              break;
            }
            d[e] = d[h];
            e = h;
          }
          d[e] = g;
        }
        c = c.A();
      }
      c.apply(this, [b]);
    } else {
      break;
    }
  }
};
l.Ha = function(a) {
  gh.q.Ha.call(this, a);
  this.Sb();
};
l.Wa = function() {
  gh.q.Wa.call(this);
  this.Sb();
};
l.I = function() {
  gh.q.I.call(this);
  q.clearTimeout(void 0);
  this.d.clear();
  this.d = null;
};
function hh(a, b, c) {
  gh.call(this, b, c);
  this.h = a;
}
G(hh, gh);
hh.prototype.Rb = function() {
  var a = new Ig, b = this.h;
  b && b.forEach(function(b, d) {
    Kb(a.headers, d, b);
  });
  return a;
};
hh.prototype.Yb = function(a) {
  return!a.g && !a.a;
};
function ih(a, b, c, d, e) {
  tg.call(this);
  this.d = u(a) ? a : 1;
  this.e = u(e) ? Math.max(0, e) : 0;
  this.b = new hh(b, c, d);
  this.a = new Jb;
  this.c = new xg(this);
}
G(ih, tg);
var jh = "ready complete success error abort timeout".split(" ");
l = ih.prototype;
l.send = function(a, b, c, d, e, f, g, h, k, m) {
  if (this.a.get(a)) {
    throw Error("[goog.net.XhrManager] ID in use");
  }
  b = new kh(b, E(this.Hc, this, a), c, d, e, g, u(h) ? h : this.d, k, m);
  Kb(this.a, a, b);
  a = E(this.Gc, this, a);
  this.b.lb(a, f);
  return b;
};
l.abort = function(a, b) {
  var c = this.a.get(a);
  if (c) {
    var d = c.Sa;
    c.fc = !0;
    b && (d && (this.c.Ra(d, jh, c.ac), ng(d, "ready", function() {
      var a = this.b;
      a.b.pa(d) && a.Ha(d);
    }, !1, this)), Mb(this.a, a));
    d && d.abort();
  }
};
l.Gc = function(a, b) {
  var c = this.a.get(a);
  c && !c.Sa ? (this.c.Wb(b, jh, c.ac), b.f = Math.max(0, this.e), b.e = c.nc(), c.Sa = b, c.Sa.Ab = c.Ab, ug(this, new lh("ready", this, a, b)), mh(this, a, b), c.fc && b.abort()) : (c = this.b, c.b.pa(b) && c.Ha(b));
};
l.Hc = function(a, b) {
  var c = b.target;
  switch(b.type) {
    case "ready":
      mh(this, a, c);
      break;
    case "complete":
      a: {
        var d = this.a.get(a);
        if (7 == c.d || Vg(c) || d.Xa > d.Qb) {
          if (ug(this, new lh("complete", this, a, c)), d && (d.mc = !0, d.lc)) {
            c = d.lc.call(c, b);
            break a;
          }
        }
        c = null;
      }
      return c;
    case "success":
      ug(this, new lh("success", this, a, c));
      break;
    case "timeout":
    ;
    case "error":
      d = this.a.get(a);
      d.Xa > d.Qb && ug(this, new lh("error", this, a, c));
      break;
    case "abort":
      ug(this, new lh("abort", this, a, c));
  }
  return null;
};
function mh(a, b, c) {
  var d = a.a.get(b);
  !d || d.mc || d.Xa > d.Qb ? (d && (a.c.Ra(c, jh, d.ac), Mb(a.a, b)), a = a.b, a.b.pa(c) && a.Ha(c)) : (d.Xa++, c.send(d.Qc, d.Ka(), d.ib(), d.jb()));
}
l.I = function() {
  ih.q.I.call(this);
  this.b.ma();
  this.b = null;
  this.c.ma();
  this.c = null;
  this.a.clear();
  this.a = null;
};
function lh(a, b, c, d) {
  Sc.call(this, a, b);
  this.id = c;
  this.Sa = d;
}
G(lh, Sc);
function kh(a, b, c, d, e, f, g, h, k) {
  this.Ab = !!k;
  this.Qc = a;
  this.c = c || "GET";
  this.a = d;
  this.b = e || null;
  this.Qb = u(g) ? g : 1;
  this.Xa = 0;
  this.fc = this.mc = !1;
  this.ac = b;
  this.lc = f;
  this.d = h || Jg;
  this.Sa = null;
}
kh.prototype.Ka = function() {
  return this.c;
};
kh.prototype.ib = function() {
  return this.a;
};
kh.prototype.jb = function() {
  return this.b;
};
kh.prototype.nc = function() {
  return this.d;
};
function nh() {
  this.a = ia();
}
new nh;
nh.prototype.get = function() {
  return this.a;
};
!Xb && !Wb || Wb && Wb && 9 <= gc || Xb && ec("1.9.1");
Wb && ec("9");
function oh(a, b) {
  var c;
  if (a instanceof oh) {
    this.oa = u(b) ? b : a.oa, ph(this, a.Ca), this.zb = a.zb, this.Ia = a.Ia, qh(this, a.vb), this.xa = a.xa, rh(this, a.a.clone()), this.gb = a.gb;
  } else {
    if (a && (c = Gg(String(a)))) {
      this.oa = !!b;
      ph(this, c[1] || "", !0);
      var d = c[2] || "";
      this.zb = d ? decodeURIComponent(d) : "";
      this.Ia = (d = c[3] || "") ? decodeURIComponent(d) : "";
      qh(this, c[4]);
      this.xa = (d = c[5] || "") ? decodeURIComponent(d) : "";
      rh(this, c[6] || "", !0);
      this.gb = (c = c[7] || "") ? decodeURIComponent(c) : "";
    } else {
      this.oa = !!b, this.a = new sh(null, 0, this.oa);
    }
  }
}
l = oh.prototype;
l.Ca = "";
l.zb = "";
l.Ia = "";
l.vb = null;
l.xa = "";
l.gb = "";
l.oa = !1;
l.toString = function() {
  var a = [], b = this.Ca;
  b && a.push(th(b, uh), ":");
  if (b = this.Ia) {
    a.push("//");
    var c = this.zb;
    c && a.push(th(c, uh), "@");
    a.push(encodeURIComponent(String(b)));
    b = this.vb;
    null != b && a.push(":", String(b));
  }
  if (b = this.xa) {
    this.Ia && "/" != b.charAt(0) && a.push("/"), a.push(th(b, "/" == b.charAt(0) ? vh : wh));
  }
  (b = this.a.toString()) && a.push("?", b);
  (b = this.gb) && a.push("#", th(b, xh));
  return a.join("");
};
l.clone = function() {
  return new oh(this);
};
function ph(a, b, c) {
  a.Ca = c ? b ? decodeURIComponent(b) : "" : b;
  a.Ca && (a.Ca = a.Ca.replace(/:$/, ""));
}
function qh(a, b) {
  if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b) {
      throw Error("Bad port number " + b);
    }
    a.vb = b;
  } else {
    a.vb = null;
  }
}
function rh(a, b, c) {
  b instanceof sh ? (a.a = b, yh(a.a, a.oa)) : (c || (b = th(b, zh)), a.a = new sh(b, 0, a.oa));
}
function Ah(a, b, c) {
  a = a.a;
  Dh(a);
  a.a = null;
  b = Eh(a, b);
  Fh(a, b) && (a.L -= a.s.get(b).length);
  Kb(a.s, b, [c]);
  a.L++;
}
function th(a, b) {
  return x(a) ? encodeURI(a).replace(b, Gh) : null;
}
function Gh(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}
var uh = /[#\/\?@]/g, wh = /[\#\?:]/g, vh = /[\#\?]/g, zh = /[\#\?@]/g, xh = /#/g;
function sh(a, b, c) {
  this.a = a || null;
  this.b = !!c;
}
function Dh(a) {
  if (!a.s && (a.s = new Jb, a.L = 0, a.a)) {
    for (var b = a.a.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = null, f = null;
      0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = Eh(a, e);
      a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "");
    }
  }
}
l = sh.prototype;
l.s = null;
l.L = null;
l.t = function() {
  Dh(this);
  return this.L;
};
l.add = function(a, b) {
  Dh(this);
  this.a = null;
  a = Eh(this, a);
  var c = this.s.get(a);
  c || Kb(this.s, a, c = []);
  c.push(b);
  this.L++;
  return this;
};
function Hh(a, b) {
  Dh(a);
  b = Eh(a, b);
  Nb(a.s.b, b) && (a.a = null, a.L -= a.s.get(b).length, Mb(a.s, b));
}
l.clear = function() {
  this.s = this.a = null;
  this.L = 0;
};
l.ca = function() {
  Dh(this);
  return 0 == this.L;
};
function Fh(a, b) {
  Dh(a);
  b = Eh(a, b);
  return Nb(a.s.b, b);
}
l.H = function() {
  Dh(this);
  for (var a = this.s.C(), b = this.s.H(), c = [], d = 0;d < b.length;d++) {
    for (var e = a[d], f = 0;f < e.length;f++) {
      c.push(b[d]);
    }
  }
  return c;
};
l.C = function(a) {
  Dh(this);
  var b = [];
  if (x(a)) {
    Fh(this, a) && (b = ab(b, this.s.get(Eh(this, a))));
  } else {
    a = this.s.C();
    for (var c = 0;c < a.length;c++) {
      b = ab(b, a[c]);
    }
  }
  return b;
};
l.get = function(a, b) {
  var c = a ? this.C(a) : [];
  return 0 < c.length ? String(c[0]) : b;
};
l.toString = function() {
  if (this.a) {
    return this.a;
  }
  if (!this.s) {
    return "";
  }
  for (var a = [], b = this.s.H(), c = 0;c < b.length;c++) {
    for (var d = b[c], e = encodeURIComponent(String(d)), d = this.C(d), f = 0;f < d.length;f++) {
      var g = e;
      "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
      a.push(g);
    }
  }
  return this.a = a.join("&");
};
l.clone = function() {
  var a = new sh;
  a.a = this.a;
  this.s && (a.s = this.s.clone(), a.L = this.L);
  return a;
};
function Eh(a, b) {
  var c = String(b);
  a.b && (c = c.toLowerCase());
  return c;
}
function yh(a, b) {
  b && !a.b && (Dh(a), a.a = null, a.s.forEach(function(a, b) {
    var e = b.toLowerCase();
    b != e && (Hh(this, b), Hh(this, e), 0 < a.length && (this.a = null, Kb(this.s, Eh(this, e), cb(a)), this.L += a.length));
  }, a));
  a.b = b;
}
;var Ih;
function Jh() {
  Ih || (Ih = new ih);
  return Ih;
}
function Kh(a, b, c) {
  x(a) ? this.za = a : (this.za = null, this.status = a, this.body = b, this.headers = c || {});
}
function Lh(a) {
  if (a.za) {
    var b = Rd(a.za);
    b.gapiRequest && (b = b.gapiRequest.data);
    a.status = b.status;
    a.headers = b.headers;
    a.body = b.body;
    a.za = null;
  }
}
function Z(a) {
  Lh(a);
  return a.status;
}
function Mh(a) {
  Lh(a);
  return a.body;
}
Kh.prototype.jb = function() {
  Lh(this);
  return this.headers;
};
function Nh(a) {
  var b;
  Lh(a);
  Lh(a);
  "application/json" == a.headers["content-type"] ? b = !0 : (b = a.body, b = x(b) && !na(b) ? /^[\],:{}\s]*$/.test(b.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")) : !1);
  return b && x(a.body) ? JSON.parse(a.body) : a.body;
}
function Oh(a) {
  return a instanceof Kh ? a : x(a) ? new Kh(a) : new Kh(a.status, a.body, a.headers);
}
function Ph(a, b, c, d) {
  this.path = a;
  this.method = b ? b.toUpperCase() : "GET";
  this.params = c || {};
  this.headers = d || {};
  this.body = void 0;
}
;function Qh(a, b) {
  this.b = a;
  this.data = b;
  this.a = !1;
}
Qh.prototype.data = null;
Qh.prototype.preventDefault = function() {
  this.a = !0;
};
function Rh(a, b, c, d) {
  Sc.call(this, a, b);
  this.status = c;
  this.d = d;
}
G(Rh, Sc);
Rh.prototype.status = NaN;
Rh.prototype.e = function() {
  return this.status;
};
Rh.prototype.Y = function() {
  return this.d.Y();
};
function Sh(a, b, c) {
  Rh.call(this, "conflict", a, b, c.b);
  this.b = c;
}
G(Sh, Rh);
Sh.prototype.c = function() {
  return this.b.data;
};
function Th(a, b) {
  this.a = a;
  if (b) {
    throw new tb("optional key paths");
  }
}
var Uh = {ed:"key", bd:"date", fd:"modified", dd:"expires", cd:"etag", hd:"updated", jd:"uri", NEXT:"next"};
Th.prototype.A = function(a, b) {
  return b && this.a[a] ? uc(b, this.a[a]) : void 0;
};
function Vh(a, b, c, d) {
  a.a[b] && vc(c, a.a[b], d);
}
;function Wh(a, b, c, d) {
  this.key = a;
  this.b = (this.b = d ? b[d] : b) || {};
  this.a = c;
}
function Xh(a) {
  return null != a.key ? a.key : a.a.A("key", a.b);
}
function Yh(a) {
  return a.a.A("updated", a.b);
}
function Zh(a) {
  return a.a.A("etag", a.b);
}
function $h(a) {
  var b = {}, c = Zh(a);
  c && 1 < c.length ? b["if-none-match"] = c : (a = Yh(a)) && (b["if-modified-since"] = a);
  return b;
}
Wh.prototype.toJSON = function() {
  var a = {};
  Vh(this.a, "key", a, Xh(this));
  var b = this.a.A("date", this.b);
  b && Vh(this.a, "date", a, b);
  (b = this.a.A("expires", this.b)) && Vh(this.a, "expires", a, b);
  (b = Yh(this)) && Vh(this.a, "updated", a, b);
  (b = Zh(this)) && Vh(this.a, "etag", a, b);
  return a;
};
function ai(a, b, c) {
  b.expires && Vh(c, "expires", b, (new Date(b.expires)).getTime());
  b["last-updated"] && Vh(c, "updated", b, (new Date(b["last-updated"])).getTime());
  b.etag && Vh(c, "etag", b, (new Date(b.etag)).getTime());
  Vh(c, "date", b, NaN);
  Wh.call(this, a, b, c);
}
G(ai, Wh);
function bi(a, b, c) {
  this.a = a;
  this.f = c || null;
  this.c = this.b = null;
  this.key = b;
}
l = bi.prototype;
l.logger = null;
l.Y = function() {
  if (this.c && this.a.m && this.d) {
    var a = this.a.p;
    this.a.N || delete this.c[a];
  }
  return this.c || null;
};
l.A = function() {
  return this.f;
};
l.o = function() {
  return this.key;
};
l.Gb = function() {
  return this.a.Tb(this.o());
};
function ci(a, b) {
  var c = a.o();
  return new ai(c, b.jb(), a.a.h);
}
l.Pb = function(a, b) {
  if (a) {
    return a;
  }
  Lh(b);
  if (200 <= b.status && 400 > b.status) {
    return Nh(b);
  }
  try {
    return Nh(b);
  } catch (c) {
    var d = Mh(b);
    return D(d) ? d : {body:d};
  }
};
l.save = function(a) {
  var b = this.o();
  if (a && !this.a.m) {
    return ia(), di(this.a, [this.d.toJSON()]);
  }
  var c = this.c;
  if (a && !c) {
    return sb();
  }
  a = void 0;
  null != this.d && (ia(), a = [this.d.toJSON()]);
  return ei(this.a, [c], a, [b]);
};
l.ua = function(a, b) {
  if (this.a.D && D(this.b)) {
    a.call(b, 304), a = null;
  } else {
    var c = this;
    fi(this, function(d) {
      if (d) {
        var e = d.a.A("expires", d.b);
        if (e && e > ia()) {
          a.call(b, 304);
          a = null;
          return;
        }
      }
      e = c.Gb();
      d = c.ra(e, "GET", d);
      this.a.w().request(d).execute(function(d, e) {
        c.d = ci(c, e);
        c.c = c.Pb(d, e);
        a.call(b, Z(e));
        a = null;
      });
    }, this);
  }
};
l.ra = function(a, b, c, d) {
  a = new Ph(a, b);
  if (c) {
    var e;
    "POST" == a.method || "PUT" == a.method || "DELETE" == a.method ? (e = {}, (b = Yh(c)) && (e["if-unmodified-since"] = b), (c = Zh(c)) && 1 < c.length && (e["if-match"] = c), c = e) : c = $h(c);
    e = c;
    a.headers ? Cb(a.headers, e) : a.headers = e;
  }
  a.body = D(d) ? JSON.stringify(d) : d;
  Sd(e);
  return a;
};
function gi(a, b, c) {
  fi(a, function(a) {
    var e = this.A();
    a = this.ra(this.Gb(), "PUT", a, e);
    this.a.w().request(a).execute(function(a, d) {
      this.d = ci(this, d);
      this.c = a;
      b && (b.call(c, Z(d)), b = null);
    }, this);
  }, a);
}
function fi(a, b, c) {
  a.e ? b.call(c, a.e) : hi(a.a, a.o(), function(d) {
    a.e = d;
    b.call(c, d);
  });
}
l.load = function(a, b) {
  if (this.b && this.e) {
    a && (a.call(b, this.b, this.e), a = void 0);
  } else {
    var c = this.o();
    this.a.load(c, function(c, e) {
      this.b = c;
      var f = this.a.p;
      this.b && f && this.b[f] && (this.e = new Wh(this.key, this.b, this.a.h, f), this.a.N || delete this.b[f]);
      this.b = c;
      this.e = e;
      a && (a.call(b, c), a = void 0);
    }, this);
  }
};
function ii(a, b) {
  var c = a.Gb(), d = a.a.w();
  fi(a, function(a) {
    a = this.ra(c, "DELETE", a);
    d.request(a).execute(function(a, c) {
      Z(c);
      b.call(this, Z(c));
    }, this);
  }, a);
}
;function ji(a, b, c) {
  this.storage = a;
  this.d = b;
  this.a = b.getName();
  this.D = !!c.immutable;
  this.c = c.baseUri;
  this.ha = c.metaStoreName || this.a;
  this.p = c.metaDataName;
  this.m = this.ha == this.a;
  a = c.Options || {};
  this.Ba = a.delimiter || "";
  this.f = a.prefix || "";
  this.N = !!c.keepMeta;
  this.J = c.prefetch || A(c.prefetchRefractoryPeriod) ? "full" : null;
  this.ja = A(c.prefetchRefractoryPeriod) ? c.prefetchRefractoryPeriod : 5E3;
  this.b = ki(c.transport);
  this.h = new Th(this.ba(), c.metaData);
  this.g = null;
  this.r = NaN;
}
l = ji.prototype;
l.ba = function() {
  var a = {}, b;
  for (b in Uh) {
    a[b] = b;
  }
  return a;
};
l.i = function() {
  return this.a;
};
l.logger = null;
l.aa = function() {
  return this.c;
};
l.w = function() {
  this.b || (this.b = new li);
  return this.b;
};
function di(a, b) {
  return Oe(a.storage.a, a.ha, b).Ib(function(a) {
    throw a;
  });
}
function mi(a, b, c) {
  a.d.keyPath && null == Ed(a.d, b) && null != c && vc(b, a.d.keyPath, c);
}
function ei(a, b, c, d) {
  d = a.d.keyPath ? void 0 : d;
  if (c) {
    if (a.m) {
      for (g = 0;g < b.length;g++) {
        null != c[g] && Cb(b[g], c[g]);
      }
      return Oe(a.storage.a, a.a, b, d);
    }
    if (b) {
      for (var e = [], f = b.concat(c), g = 0;g < b.length;g++) {
        var h = a.d.keyPath ? NaN : d[g];
        e.push(new P(a.a, h));
      }
      for (g = 0;g < c.length;g++) {
        e.push(new P(a.ha, NaN));
      }
      return Oe(a.storage.a, e, f);
    }
    return Oe(a.storage.a, a.ha, c);
  }
  for (g = 0;g < b.length;g++) {
    h = d ? d[g] : void 0, mi(a, b[g], h);
  }
  return Oe(a.storage.a, a.a, b, d);
}
function ni(a, b) {
  var c = [new P(a.a, b)];
  a.m || c.push(new P(a.ha, b));
  return Pe(a.storage.a, c);
}
l.Tb = function(a) {
  return this.aa() + a;
};
l.add = function(a, b, c) {
  null != c ? mi(this, b, c) : this.d.keyPath && (c = Ed(this.d, b));
  var d = this.B(c, b);
  gi(d, function(a) {
    201 != a && 200 != a || d.save(!0);
  });
};
function hi(a, b, c) {
  var d = new P(a.ha, b);
  J(oi(a, [d]), function(a) {
    c.call(void 0, new Wh(b, a[0], this.h, this.p));
  }, function() {
    c.call(void 0, null);
  }, a);
}
l.qb = function(a, b) {
  var c = a.map(function(a) {
    return new P(this.ha, a);
  });
  J(oi(this, c), function(c) {
    for (var e = [], f = 0;f < a.length;f++) {
      e[f] = new Wh(a[f], c[f], this.h, this.p);
    }
    b(e);
  }, function() {
    b([]);
  }, this);
};
l.load = function(a, b, c) {
  var d = this.ha, e = this.i(), e = [new P(e, a)];
  this.m || e.push(new P(d, a));
  J(oi(this, e), function(d) {
    var e = d[0];
    b.call(c, e, new Wh(a, this.m ? e : d[1], this.h, this.p));
  }, function() {
    b.call(c, null, null);
  }, this);
};
function oi(a, b) {
  return Se(a.storage.a, b);
}
l.get = function(a, b) {
  this.r || this.na();
  Kc(a, function(c, d, e) {
    if (d) {
      e(c, d);
    } else {
      oc(a, c);
      var f = u(c);
      if (f && this.D) {
        e(c);
      } else {
        var g = this.B(b, c);
        g.ua(function(a) {
          if (304 == a) {
            if (e(c), !f) {
              throw new xb(g + " not modified, but not exist in server");
            }
          } else {
            if (200 == a) {
              g.save().K(function() {
                e(g.Y());
              });
            } else {
              if (404 == a) {
                ni(g.a, g.o()).K(function() {
                  e(g.Y());
                });
              } else {
                throw e(g.Y()), new wb("Invalid HTTP respond " + a + " for GET " + b);
              }
            }
          }
        }, this);
      }
    }
  }, this);
};
function pi(a, b, c, d, e, f) {
  var g = a.logger, h = d.length + e.length + f.length + 0;
  if (0 == h) {
    b(c);
  } else {
    for (var k = !1, m = function() {
      h--;
      0 == h && (b(c, k), b = null);
    }, n = 0;n < d.length;n++) {
      var p = a.B(d[n]);
      p.index = n;
      p.ua(function(a) {
        200 == a ? (g.a("A new " + this + " received from server"), J(this.save(), function() {
          c[this.index] = this.Y();
          m();
        }, function() {
          k = !0;
          m();
        }, this)) : 304 == a ? J(this.save(!0), function() {
          g.a(this + " expires date updated");
          m();
        }, function() {
          k = !0;
          m();
        }, this) : (g.b("Invalid status " + a + " for fetching " + this), m());
      }, p);
    }
    for (n = 0;n < e.length;n++) {
      p = a.B(e[n]), p.index = n, p.load(function() {
        this.ua(function(a) {
          200 == a ? (g.a(this + " updated from server"), J(this.save(), function() {
            c[this.index] = this.Y();
            m();
          }, function() {
            k = !0;
            m();
          }, this)) : (g.b("Invalid status " + a + " for fetching " + this), m());
        });
      });
    }
    for (n = 0;n < f.length;n++) {
      p = a.B(f[n]), p.index = n, J(ni(p.a, p.o()), function() {
        c[this.index] = new Qh(p, null);
        m();
      }, function() {
        k = !0;
        m();
      }, p);
    }
  }
}
function qi(a, b, c) {
  Kc(b, function(a, e, f) {
    if (e) {
      f(a, e);
    } else {
      if (Wa(a, function(a) {
        return u(a);
      }) && this.D) {
        f(a);
      } else {
        oc(b, a);
        var g = a.length;
        for (e = 0;e < c.length;e++) {
          if (this.D && u(a[e])) {
            g--, 0 == g && f(a);
          } else {
            var h = this.B(c[e], a[e]);
            h.index = e;
            h.ua(function(b) {
              200 == b ? (a[this.index] = this.Y(), this.save()) : 404 == b && (a[this.index] = void 0);
              g--;
              0 == g && f(a);
            }, h);
          }
        }
      }
    }
  }, a);
}
l.B = function(a, b) {
  return new bi(this, a, b);
};
l.count = function(a) {
  return a;
};
l.Vb = function() {
  throw new tb;
};
l.U = function(a, b, c) {
  ri(this) ? Kc(a, function(d, e, f) {
    oc(a, d);
    e ? f(d, e) : si(this, function(a) {
      a ? J(Re(this.storage.a, this.a, null, null, !1, b, c), function(a) {
        f(a);
      }, function(a) {
        f(a, !0);
      }, this) : f(d);
    }, function() {
      f(d);
    }, this);
  }, this) : this.Vb(a, b, c);
};
l.keys = function(a, b, c, d, e, f, g) {
  Kc(a, function(h, k, m) {
    oc(a, h);
    k ? m(h, k) : si(this, function(a) {
      a ? J(Te(this.storage.a, this.a, b, c, d, e, f, g), function(a) {
        m(a);
      }, function(a) {
        m(a, !0);
      }, this) : m(h);
    }, function() {
      m(h);
    }, this);
  }, this);
};
l.Ob = function() {
};
l.put = function(a, b, c) {
  c = u(c) ? c : this.d.keyPath ? Ed(this.d, b) : null;
  var d = this.B(c, b);
  N(a, function() {
    d.load();
  }, this);
  Kc(a, function(c, f, g) {
    oc(a, c);
    gi(d, function(c) {
      409 == c ? d.ua(function() {
        var c = new Qh(d, b);
        oc(a, c);
        c.a ? g(null, f) : g(void 0, f);
      }) : 200 == c || 201 == c ? (d.save(!0), g(b, f)) : g(null, f);
    }, this);
  }, this);
};
function ti(a, b, c) {
  var d = a.B(c);
  d.load(function() {
    Kc(b, function(c, f, g) {
      ii(d, function(f) {
        if (409 == f) {
          f = new Qh(d, null);
          oc(b, f);
          var k = new Sh(a.storage, 409, f);
          a.storage.Q(k);
        } else {
          200 != f && oc(b, k);
        }
        g(c);
      });
    });
  });
}
l.na = function() {
  var a = new I;
  J(Re(this.storage.a, this.a, "updated.$t", null, !0, 1), function(b) {
    var c = {};
    if (b = b[0]) {
      b = Ab(b, "updated", "$t"), b = (new Date(1 + +new Date(b))).toISOString(), c["updated-min"] = b;
    }
    var d = this, c = new Ph(this.aa(), "GET", c);
    d.w().request(c).execute(function(b, c) {
      if (200 == Z(c)) {
        if (!b) {
          var g = Mh(c);
          x(g) && (b = JSON.parse(g));
        }
        g = (g = (b.feed || b).entry) ? v(g) ? g : [g] : [];
        0 < g.length ? ei(d, g).K(function() {
          a.l(!0);
        }) : a.l(!1);
      } else {
        302 == Z(c) ? a.l() : (g = d + ": Invalid response status " + Z(c) + " on prefetching", a.j(Error(g)));
      }
    });
  }, function(b) {
    a.j(b);
  }, this);
  return a;
};
function ri(a) {
  return a.J ? a.r ? ia() - a.r > a.ja : !0 : !1;
}
function si(a, b, c, d) {
  ri(a) ? a.g ? J(a.g, b, c, d) : (a.g = a.na(), a.r = ia(), J(a.g, b, c, d), J(a.g, function() {
    this.g = null;
  }, function(a) {
    this.g = null;
    throw a;
  }, a)) : b.call(d, !1);
}
;function ui(a, b, c) {
  ji.call(this, a, b, c);
}
G(ui, ji);
ui.prototype.logger = null;
ui.prototype.o = function(a) {
  return a.key;
};
function vi(a) {
  this.data = a;
}
vi.prototype.o = function() {
  return this.data.id.$t;
};
vi.prototype.ib = function() {
  return this.data.content || null;
};
function wi(a, b, c) {
  bi.call(this, a, b, c);
}
G(wi, bi);
wi.prototype.logger = null;
wi.prototype.getName = function() {
  return this.a.f + this.key;
};
wi.prototype.ra = function(a, b, c, d) {
  b = wi.q.ra.call(this, a, b, c, d);
  if ("PUT" == b.method || "POST" == b.method) {
    c = (new oh(a)).xa.substr(1);
    if (1 > c.length) {
      throw new wb("invalid url " + a);
    }
    b.headers.Key = c;
    a = b.headers["Content-Type"] || "application/json";
    d instanceof File ? a = d.type : x(d) && (a = /<*DOCTYPE html/i.test(d) ? "text/html" : "text/plain");
    b.headers.ContentType = a;
  }
  return b;
};
function xi(a) {
  this.data = a;
}
G(xi, vi);
function yi(a, b) {
  if (b && !a) {
    throw Error("Can't create document with namespace and no root tag");
  }
  if (document.implementation && document.implementation.createDocument) {
    return document.implementation.createDocument(b || "", a || "", null);
  }
  if ("undefined" != typeof ActiveXObject) {
    var c = zi();
    if (c) {
      return a && c.appendChild(c.createNode(1, a, b || "")), c;
    }
  }
  throw Error("Your browser does not support creating new documents");
}
function Ai(a) {
  if ("undefined" != typeof DOMParser) {
    return(new DOMParser).parseFromString(a, "application/xml");
  }
  if ("undefined" != typeof ActiveXObject) {
    var b = zi();
    b.loadXML(a);
    return b;
  }
  throw Error("Your browser does not support loading xml documents");
}
function Bi(a) {
  if ("undefined" != typeof XMLSerializer) {
    return(new XMLSerializer).serializeToString(a);
  }
  if (a = a.xml) {
    return a;
  }
  throw Error("Your browser does not support serializing XML documents");
}
function zi() {
  var a = new ActiveXObject("MSXML2.DOMDocument");
  if (a) {
    a.resolveExternals = !1;
    a.validateOnParse = !1;
    try {
      a.setProperty("ProhibitDTD", !0), a.setProperty("MaxXMLSize", 2048), a.setProperty("MaxElementDepth", 256);
    } catch (b) {
    }
  }
  return a;
}
;var Ci, Di;
Di = Ci = !1;
var Ei = Qb;
Ei && (-1 != Ei.indexOf("Firefox") ? Ci = !0 : -1 != Ei.indexOf("Camino") || -1 != Ei.indexOf("iPhone") || -1 != Ei.indexOf("iPod") || -1 != Ei.indexOf("iPad") || (-1 != Ei.indexOf("Chrome") ? Di = !0 : -1 != Ei.indexOf("Android") || Ei.indexOf("Safari")));
var Fi = Ci, Gi = Di;
var Hi = {atom:"http://www.w3.org/2005/Atom", ydn:"http://www.yathit.com/2012/ydn", app:"http://www.w3.org/2007/app", openSearch:"http://a9.com/-/spec/opensearch/1.1/", gAcl:"http://schemas.google.com/acl/2007", sites:"http://schemas.google.com/sites/2008", gs:"http://schemas.google.com/spreadsheets/2006", dc:"http://purl.org/dc/terms", batch:"http://schemas.google.com/gdata/batch", gd:"http://schemas.google.com/g/2005", gContact:"http://schemas.google.com/contact/2008", thr:"http://purl.org/syndication/thread/1.0", 
xhtml:"http://www.w3.org/1999/xhtml"};
function Ii(a, b, c) {
  c = !!c;
  if (a.getName() != b.getName()) {
    return!1;
  }
  var d = Ji(a), e = Ji(b);
  if (!c && d.length != e.length || c && e.length > d.length) {
    return!1;
  }
  for (d = 0;d < e.length;d++) {
    if (Ki(a, e[d]) != Ki(b, e[d])) {
      return!1;
    }
  }
  d = Li(a);
  e = Li(b);
  if (!c && d.length != e.length || c && e.length > d.length) {
    return!1;
  }
  if (0 == d.length || 0 == d.length) {
    return a.data.$t === b.data.$t;
  }
  for (d = 0;d < e.length;d++) {
    var f = Mi(a, e[d]), g = Mi(b, e[d]);
    if (!c && f.length != g.length || c && g.length > f.length) {
      return!1;
    }
    for (var h = 0;h < g.length;h++) {
      if (-1 == Ya(f, function(a) {
        return Ii(a, g[h], c);
      })) {
        return!1;
      }
    }
  }
  return!0;
}
;function Ni(a, b, c) {
  if (u(b)) {
    Oi(this, b), u(c) || (c = a[b]);
  } else {
    for (var d in a) {
      if (a.hasOwnProperty(d) && D(a[d]) && x(a[d].xmlns)) {
        this.Hb = [d].xmlns;
        Oi(this, d);
        c = a[d];
        break;
      }
    }
  }
  this.data = c;
  this.parent = a;
}
l = Ni.prototype;
l.Hb = "http://www.w3.org/2005/Atom";
function Oi(a, b) {
  var c = b.split(":");
  1 < c.length && (a.Hb = Hi[c[0]] || Hi.xhtml || Ni.prototype.Hb, b = c[1]);
  a.a = b;
}
l.toString = function() {
  return "JsonElement:" + this.a;
};
l.getName = function() {
  return this.a;
};
function Pi(a, b) {
  for (var c in a.data) {
    a.data.hasOwnProperty(c) && D(a.data[c]) && delete a.data[c];
  }
  a.data.$t = b;
}
function Ki(a, b) {
  b = b.replace(/:/, "$");
  return a.data[b];
}
l.setAttribute = function(a, b) {
  a = a.replace(/:/, "$");
  this.data[a] = b;
};
l.removeAttribute = function(a) {
  a = a.replace(/:/, "$");
  delete this.data[a];
};
function Ji(a) {
  var b = [], c;
  for (c in a.data) {
    a.data.hasOwnProperty(c) && x(a.data[c]) && "$t" != c && b.push(c);
  }
  return b;
}
function Mi(a, b) {
  u(void 0) ? b = "undefined$" + b : u(b) && (b = b.replace(/:/, "$"));
  var c = [];
  if (u(b)) {
    var d = a.data[b];
    if (v(d)) {
      for (var e = 0;e < d.length;e++) {
        c.push(new Ni(a.data, b, d[e]));
      }
    } else {
      D(d) && c.push(new Ni(a.data, b, d));
    }
  } else {
    for (d in a.data) {
      if (v(a.data[d])) {
        for (e = 0;e < a.data[d].length;e++) {
          c.push(new Ni(a.data, d, a.data[d][e]));
        }
      } else {
        D(a.data[d]) && c.push(new Ni(a.data, d, a.data[d]));
      }
    }
  }
  return c;
}
function Li(a) {
  var b = [], c;
  for (c in a.data) {
    D(a.data[c]) && b.push(c.replace("$", ":"));
  }
  return b;
}
l.removeChild = function(a) {
  if (a.parent != this.data) {
    throw Error("NOT_FOUND_ERR: JSON:DOM Exception 8: " + a + " not in " + this);
  }
  var b = a.getName();
  v(this.data[b]) ? $a(this.data[b], a.data) : delete this.data[b];
};
function Qi(a, b, c, d, e, f) {
  var g = !1;
  d = d || {};
  var h = u(c), k = !0 === c || !h, m = !1 === c, n = Ji(a), p = Ji(b);
  if (!h) {
    for (var r = 0;r < n.length;r++) {
      u(f) && !f[n[r].replace("$", ":")] || 0 <= Sa(p, n[r]) || (a.removeAttribute(n[r]), g = !0);
    }
  }
  for (r = 0;r < p.length;r++) {
    var s = Ki(b, p[r]);
    if (!u(f) || f[p[r].replace("$", ":")]) {
      0 <= Sa(n, p[r]) ? m || s == Ki(a, p[r]) || (a.setAttribute(p[r], s), g = !0) : (a.setAttribute(p[r], s), g = !0);
    }
  }
  if (0 == Ri(b) && k && (f = a.data.$t, m = b.data.$t, u(m) && f != m)) {
    return Pi(a, m), !0;
  }
  if (!h) {
    for (var t in a.data) {
      e && !e[t.replace("$", ":")] || !D(a.data[t]) || D(b.data[t]) || (delete a.data[t], g = !0);
    }
  }
  t = Li(b);
  for (f = 0;f < t.length;f++) {
    if (m = t[f], !e || !0 == e[m]) {
      var y = Mi(b, m), n = Mi(a, m), z = m.replace(":", "$");
      if (1 == y.length) {
        0 == n.length ? (a.data[z] = ie(y[0].data), g = !0) : 1 == n.length ? d[m] ? k && !Ii(n[0], y[0], !0) && (v(a.data[z]) || (a.data[z] = [a.data[z]]), a.data[z].push(ie(y[0].data)), g = !0) : g = Qi(n[0], y[0], c) || g : h ? (m = Ya(n, function(a) {
          return Ii(a, y[0], !0);
        }), -1 == m && k && (a.data[z].push(ie(y[0].data)), g = !0)) : (a.data[z] = ie(y[0].data), g = !0);
      } else {
        if (!v(a.data[z])) {
          if (k) {
            a.data[z] = ie(b.data[z]), g = !0;
          } else {
            if (h) {
              var n = ie(b.data[z]), B = a, m = Ya(n, function(a) {
                return qd(B.data[z], a);
              });
              -1 == m && (n.push(a.data[z]), a.data[z] = n, g = !0);
            }
          }
        } else {
          if (k) {
            for (n.length > y.length && (a.data[z].splice(y.length, n.length - y.length), g = !0), r = 0;r < y.length;r++) {
              u(n[r]) ? qd(n[r].data, y[r].data) || (a.data[z][r] = ie(y[r].data), g = !0) : (a.data[z][r] = ie(y[r].data), g = !0);
            }
          } else {
            if (h) {
              for (r = 0;r < b.data[z].length;r++) {
                m = Ya(a.data[z], function(a) {
                  return qd(b.data[z][r], a);
                }), -1 == m && (a.data[z].push(ie(b.data[z][r])), g = !0);
              }
            }
          }
        }
      }
    }
  }
  return g;
}
l.Xb = function(a, b, c, d, e) {
  u(b) || (b = !1);
  return Qi(this, a, b, c, d, e);
};
l.toJSON = function() {
  return{data:this.data, tagName:this.a};
};
function Si(a) {
  function b(a, g) {
    d(g, a);
    var h, k;
    for (k in a) {
      if (a.hasOwnProperty(k) && !x(a[k])) {
        if (x(a[k].$t) && "xhtml" == a[k].type) {
          h = c(k);
          d(h, a[k]);
          var m = Ai(a[k].$t);
          e.importNode(m.documentElement, !0);
          h.appendChild(m.documentElement);
          g.appendChild(h);
        } else {
          if (x(a[k].$t)) {
            h = c(k), h.textContent = a[k].$t, d(h, a[k]), g.appendChild(h);
          } else {
            if (v(a[k]) && a[k][0] && x(a[k][0].$t)) {
              for (m = 0;m < a[k].length;m++) {
                h = c(k), h.textContent = a[k][m].$t, d(h, a[k][m]), g.appendChild(h);
              }
            } else {
              if (v(a[k])) {
                for (m = 0;m < a[k].length;m++) {
                  h = c(k), g.appendChild(h), b(a[k][m], h);
                }
              } else {
                D(a[k]) && (h = c(k), g.appendChild(h), b(a[k], h));
              }
            }
          }
        }
      }
    }
  }
  function c(a) {
    return e.createElement(a.replace("$", ":"));
  }
  function d(a, b) {
    for (var c in b) {
      b.hasOwnProperty(c) && "$t" != c && x(b[c]) && a.setAttribute(c.replace("$", ":"), b[c]);
    }
  }
  var e = yi(a.getName(), a.Hb);
  b(a.data, e.documentElement);
  return Bi(e.documentElement);
}
function Ri(a) {
  function b(a) {
    var b = 0, c;
    for (c in a) {
      a.hasOwnProperty(c) && (v(a[c]) ? b += a[c].length : D(a[c]) && b++);
    }
    return b;
  }
  var c;
  u(void 0) ? c = "undefined$" + c : u(c) && (c = c.replace(/:/, "$"));
  return u(c) ? v(a.data[c]) ? a.data[c].length : D(a.data[c]) ? b(a.data[c]) : 0 : b(a.data);
}
l.clone = function(a) {
  var b = {};
  if (u(a)) {
    for (var c in this.data) {
      var d = c.replace("$", ":");
      x(this.data[c]) ? b[c] = this.data[c] : !0 == a[d] && (b[c] = ie(this.data[c]));
    }
  } else {
    b = ie(this.data);
  }
  return new Ni(null, this.a, b);
};
function Ti(a) {
  var b;
  if (u(a.id)) {
    b = a.id.$t;
  } else {
    if (u(a.batch$id)) {
      b = a.batch$id.$t;
    } else {
      if (u(a.a)) {
        b = a.a.$t;
      } else {
        throw new de("id or batch:id required.");
      }
    }
  }
  this.id = b;
  this.data = a;
}
G(Ti, xi);
l = Ti.prototype;
l.logger = null;
l.o = function() {
  return this.id;
};
l.Ic = ["id", "batch$id", "link", "category"];
l.ib = vi.prototype.ib;
function Ui(a, b) {
  if (b) {
    a.data.status = "" == b ? void 0 : b;
  } else {
    var c = a.data;
    c.status && (c.status = b);
  }
}
function Vi(a) {
  a = a.data;
  a = u(a.gd$deleted) ? "gd:deleted" : (a = a.status) ? a : "";
  return a;
}
l.Xb = function(a) {
  if (a.data.updated.$t >= this.data.updated.$t && "gd:deleted" == Vi(a)) {
    if ("gd:deleted" == Vi(this) || "delete" == Vi(this)) {
      return!1;
    }
    Ui(this, "delete");
    return!0;
  }
  var b = !1, c;
  for (c in a.data) {
    if (a.data.hasOwnProperty(c) && D(a.data[c]) && !(0 <= Sa(this.Ic, c))) {
      var d;
      d = c;
      var e = a.data[c];
      qd(this.data[d], e) ? d = !1 : (this.data[d] = ie(e), d = !0);
      d && (b = !0);
    }
  }
  b && (a = Vi(this), "delete" == a ? this.logger.b(this + " marked for deletion. Cannot mark modify flag.") : "committed" == a ? this.logger.d(this + " already committed. All changes must wait until updated from the server.") : Ui(this, "modified"));
  return b;
};
function Wi(a, b, c) {
  bi.call(this, a, b, c);
}
G(Wi, bi);
Wi.prototype.Gb = function() {
  return this.key;
};
Wi.prototype.ra = function(a, b, c, d) {
  a = Wi.q.ra.call(this, a, b, c, d);
  this.a.wc(a.method) && q.gapi && q.gapi.auth && (b = gapi.auth.getToken()) && b.access_token && (a.headers.Authorization = b.token_type + " " + b.access_token);
  if ("GET" == a.method) {
    a.params.alt = "json";
  } else {
    if ("PUT" == a.method || "POST" == a.method) {
      var e = new Ti(d);
      b = new Ni(null, "entry", e.data);
      c = !1;
      b.xmlns || (b.xmlns = "http://www.w3.org/2005/Atom", c = !0);
      d = ["atom"];
      for (var f in e.data) {
        if (e = f.match(/^(\w+)\$\w+/)) {
          e = e[1], e in Hi && (0 <= Sa(d, e) || d.push(e));
        }
      }
      f = Si(b);
      c && delete b.xmlns;
      b = f.indexOf(" ");
      for (c = 0;c < d.length;c++) {
        e = d[c], e = (0 == c ? "xmlns" : "xmlns:" + e) + '="' + Hi[e] + '"', -1 == f.indexOf(e) && (f = f.substring(0, b + 1) + e + " " + f.substr(b + 1));
      }
      a.body = f;
      a.headers["Content-Type"] = "application/atom+xml";
    }
  }
  return a;
};
Wi.prototype.Pb = function(a, b) {
  a = Wi.q.Pb.call(this, a, b);
  a.feed && (a = a.feed);
  a.entry && (a = a.entry);
  return a;
};
function Xi(a, b, c) {
  ji.call(this, a, b, c);
  a = c.Options;
  this.e = a.kind;
  this.version = a.version;
  this.O = a.maxResults;
}
G(Xi, ui);
l = Xi.prototype;
l.version = null;
l.logger = null;
l.B = function(a, b) {
  return new Wi(this, a, b);
};
l.ba = function() {
  var a = Xi.q.ba.call(this);
  a.key = ["id", "$t"];
  a.etag = "gd$etag";
  a.updated = ["updated", "$t"];
  return a;
};
l.aa = function() {
  return "https://www.googleapis.com/" + this.e + "/";
};
l.wc = function() {
  return!1;
};
l.o = function(a) {
  return a ? a.id ? a.id.$t : "" : "";
};
function Yi(a, b, c) {
  b = new Ph(c || a.aa(), "GET", b);
  var d = new I;
  a.w().request(b).execute(function(b, f) {
    if (200 == Z(f)) {
      if (!b) {
        var g = Mh(f);
        x(g) && (b = JSON.parse(g));
      }
      var g = b.feed || b, h = g.entry, h = h ? v(h) ? h : [h] : [];
      0 < h.length && ei(a, h);
      for (var h = null, g = g.link, g = v(g) ? g : [g], k = 0;k < g.length;k++) {
        "next" == g[k].rel && (h = g[k].href);
      }
      h ? (g = Yi(a, {}, h), J(g, d.l, d.j, d)) : d.l(!!c);
    } else {
      302 == Z(f) ? d.l() : (g = a + ": Invalid response status " + Z(f) + " on prefetching", d.j(Error(g)));
    }
  });
  return d;
}
l.na = function() {
  var a = new I;
  Re(this.storage.a, this.a, "updated.$t", null, !0, 1).W(function(b) {
    var c = {alt:"json", kind:this.e};
    this.O && (c["max-results"] = this.O);
    if (b = b[0]) {
      b = Ab(b, "updated", "$t"), b = (new Date(1 + +new Date(b))).toISOString(), c["updated-min"] = b;
    }
    c = Yi(this, c);
    J(c, a.l, a.j, a);
  }, this);
  return a;
};
l.count = function(a) {
  var b = Ad(this.d, "updated.$t");
  if (!b) {
    return a;
  }
  var c = Ic(a);
  J(a, function(a) {
    oc(c, a);
    J(Re(this.storage.a, this.a, b.getName(), null, !1, 1), function(b) {
      var f = {alt:"json"};
      if (b = v(b) ? b[0] : b) {
        b = Ab(b, "updated", "$t"), b = (new Date(1 + +new Date(b))).toISOString(), f["updated-min"] = b;
      }
      f = new Ph(this.aa(), "GET", f);
      this.w().request(f).execute(function(b, e) {
        if (200 == Z(e)) {
          if (!b) {
            var f = Mh(e);
            x(f) && (b = JSON.parse(f));
          }
          f = Ab(b.feed, "openSearch$totalResults");
          c.l(a + parseFloat(f || 0));
        } else {
          Z(e);
        }
      });
    }, function(a) {
      c.j(a);
    }, this);
  }, function(a) {
    c.j(a);
  }, this);
  return c;
};
function Zi(a, b, c) {
  bi.call(this, a, b, c);
}
G(Zi, Wi);
function $i(a, b, c) {
  Xi.call(this, a, b, c);
  this.c = this.c.substr(27);
  this.ia = c.Options.prefix;
}
G($i, Xi);
$i.prototype.w = function() {
  this.b || (this.b = new aj(gapi.client));
  return this.b;
};
$i.prototype.B = function(a, b) {
  return new Zi(this, a, b);
};
$i.prototype.aa = function() {
  return this.c + this.ia;
};
$i.prototype.na = function() {
  var a = new I;
  J(Re(this.storage.a, this.a, "updated", null, !0, 1), function(b) {
    var c = {alt:"json"};
    if (b = b[0]) {
      b = Ab(b, "updated"), b = (new Date(1 + +new Date(b))).toISOString(), c.updatedMin = b;
    }
    var d = this, c = new Ph(this.aa(), "GET", c);
    d.w().request(c).execute(function(b, c) {
      if (b) {
        var g = b.items || [];
        0 < g.length ? ei(d, g).K(function() {
          a.l(!0);
        }) : a.l(!1);
      } else {
        302 == Z(c) ? a.l() : (g = d + ": Invalid response status " + Z(c) + " on prefetching", a.j(Error(g)));
      }
    });
  }, function(b) {
    a.j(b);
  }, this);
  return a;
};
function bj(a, b) {
  if (!u(q.AWS)) {
    throw new wb("AWS JS SDK not loaded");
  }
  this.b = a;
  this.region = b;
  this.a = null;
}
bj.prototype.request = function(a) {
  return new cj(this, a);
};
function dj(a) {
  var b = {params:{Bucket:a.b, region:a.region}};
  if (!a.b) {
    throw new K("bucket name required");
  }
  a.a || (a.a = new AWS.S3(b));
  return a.a;
}
function cj(a, b) {
  this.parent = a;
  this.a = b;
}
function ej(a, b, c, d, e) {
  var f = NaN, g = {};
  a = dj(a.parent)[b](c);
  a.on("complete", function(a) {
    a.httpResponse && (f = a.httpResponse.statusCode, x(f) && (f = parseInt(f, 10)), g = a.httpResponse.headers);
    a.error && (f || (f = 400));
  });
  a.send(function(a, b) {
    var c = new Kh(f, b, g);
    a ? d.call(e, null, c) : d.call(e, b, c);
  });
}
cj.prototype.execute = function(a, b) {
  var c;
  c = (new oh(this.a.path)).xa;
  c = "/" == c.charAt(0) ? c.substr(1) : c;
  var d = this.a.headers || {};
  c && (d.Key = c);
  if (c) {
    if ("GET" == this.a.method) {
      ej(this, "getObject", d, a, b);
    } else {
      if ("PUT" == this.a.method) {
        ej(this, "putObject", d, a, b);
      } else {
        throw new tb("HTTP method " + this.a.method);
      }
    }
  }
};
function fj(a, b) {
  this.a = a;
  this.c = gj(this, "Prefix")[0];
  this.b = b.type;
}
fj.prototype.t = function() {
  return this.a.documentElement.getElementsByTagName("Contents").length;
};
fj.prototype.keys = function() {
  var a = gj(this, "Key");
  if (this.c) {
    var b = this.c.length, a = a.map(function(a) {
      return a.substr(b);
    });
    "INTEGER" == this.b ? a = a.map(function(a) {
      return parseInt(a, 10);
    }) : "NUMERIC" == this.b && (a = a.map(function(a) {
      return parseFloat(a);
    }));
  }
  return a;
};
function gj(a, b) {
  for (var c = [], d = a.a.documentElement.getElementsByTagName(b), e = d.length, f = 0;f < e;f++) {
    c[f] = d[f].textContent;
  }
  return c;
}
function hj(a) {
  return gj(a, "LastModified").map(function(a) {
    return(new Date(Date.parse(a))).toGMTString();
  });
}
function ij(a) {
  var b = a.a.documentElement.getElementsByTagName("NextMarker");
  return 1 == b.length ? b[0].textContent : "true" == a.a.documentElement.getElementsByTagName("IsTruncated")[0].textContent && (a = a.a.documentElement.firstElementChild.lastElementChild) && "Contents" == a.tagName ? a.getElementsByTagName("Key")[0] : null;
}
;function jj(a, b, c) {
  ji.call(this, a, b, c);
  this.e = c.Options.bucket;
  if (!x(this.e) || na(this.e)) {
    throw new K("bucket name required.");
  }
  this.c || (this.c = "https://" + this.e + ".s3.amazonaws.com/");
  if (!0 === b.c) {
    throw new K('S3 object store "' + b.getName() + '" must not set autoIncrement to true.');
  }
}
G(jj, ji);
l = jj.prototype;
l.logger = null;
l.w = function() {
  this.b || (this.b = new bj(this.e));
  return this.b;
};
l.Tb = function(a) {
  return this.c + this.f + a;
};
l.B = function(a, b) {
  return new wi(this, a, b);
};
l.Vb = function(a, b) {
  var c = this;
  Kc(a, function(d, e, f) {
    oc(a, d);
    c.qb(d, function(a) {
      var e = {}, k = a[0] ? Xh(a[0]) : null;
      null != k && (e.marker = k);
      0 < c.f.length && (e.prefix = c.f);
      0 < b && (e["max-keys"] = b);
      e = new Ph(c.c, "GET", e);
      c.w().request(e).execute(function(b, e) {
        if (200 == Z(e)) {
          for (var h = Mh(e), h = h instanceof Document ? h : Ai(h), k = new fj(h, c.d), h = k.keys(), k = hj(k), s = [], t = [], y = [], z = 0, B = 0;z <= a.length && B < h.length;) {
            var F = a[z] ? Xh(a[z]) : null, O = h[B];
            if (z == a.length) {
              t.push(O), B++;
            } else {
              var U = F ? Nc(F, O) : -1;
              0 == U ? ((O = Yh(a[z])) && k[B] && O != k[B] && k[B] > O && y.push(F), z++, B++) : 1 == U ? (s.push(F), z++) : (t.push(O), B++);
            }
          }
          pi(c, f, d, t, y, s);
        } else {
          Z(e);
        }
      });
    });
  }, this);
};
function kj(a, b) {
  function c(f) {
    null != f && (d.marker = f);
    e.request(new Ph(a.c, "GET", d)).execute(function(d, e) {
      if (200 == Z(e)) {
        var f = Mh(e), f = f instanceof Document ? f : Ai(f), f = new fj(f, a.d), m = ij(f), f = f.keys(), n = f.length;
        if (0 == n) {
          b([]), b = null;
        } else {
          for (var p = 0, r = 0;r < n;r++) {
            a.B(f[r]).ua(function() {
              p++;
              p == n && (m ? c(m) : b && (b([this.Y()]), b = null));
            });
          }
        }
      } else {
        ic("Invalid response status " + Z(e));
      }
    });
  }
  var d = {};
  0 < a.f.length && (d.prefix = a.f);
  var e = a.w();
  c();
  a.O = !0;
}
function lj(a, b) {
  a.O || Kc(b, function(a, b, e) {
    u(a[0]) ? e(a) : kj(this, e);
  }, a);
}
;function mj(a, b, c) {
  bi.call(this, a, b, c);
}
G(mj, wi);
mj.prototype.logger = null;
function nj(a, b, c) {
  jj.call(this, a, b, c);
  this.c = "https://" + this.e + ".storage.googleapis.com/";
}
G(nj, jj);
nj.prototype.logger = null;
nj.prototype.w = function() {
  this.b || (this.b = new li);
  return this.b;
};
nj.prototype.B = function(a, b) {
  return new mj(this, a, b);
};
function oj(a, b, c, d) {
  this.b = u(b) ? b : Jh();
  this.a = "sr" + pj++;
  this.e = c || 0;
  this.d = !!d;
  this.c = a;
}
var pj = 0;
oj.prototype.o = function() {
  return this.a;
};
oj.prototype.execute = function(a, b) {
  var c = this.c, d = new oh(c.path), e;
  for (e in c.params) {
    Ah(d, e, c.params[e]);
  }
  this.b.send(this.a, d.toString(), c.method, c.body, c.headers, void 0, function(c) {
    c = c.target;
    for (var d = (c.a && 4 == Tg(c) ? c.a.getAllResponseHeaders() : "").split("\n"), e = {}, k = 0;k < d.length;k++) {
      var m = d[k].indexOf(":");
      0 < m && (e[d[k].substr(0, m).toLowerCase()] = d[k].substr(m + 1).trim());
    }
    d = k = Xg(c);
    if (e["content-type"] && /json/.test(e["content-type"])) {
      if (D(k)) {
        d = k;
      } else {
        if (x(k)) {
          try {
            d = Rd(k);
          } catch (n) {
            d = k;
          }
        }
      }
    }
    c = new Kh(Ug(c), k, e, Wg(c));
    a && (a.call(b, d, c), a = null);
  }, this.e, void 0, this.d);
  this.b = null;
};
function li(a, b, c) {
  this.c = u(a) ? a : Jh();
  this.a = b;
  this.b = c;
}
li.prototype.request = function(a) {
  if (this.a) {
    a.headers || (a.headers = {});
    for (var b in this.a) {
      a.headers[b] = this.a[b];
    }
  }
  this.b && (a.path = this.b + a.path);
  return new oj(a, this.c);
};
function aj(a, b) {
  this.a = a;
  this.b = !!b;
}
aj.prototype.request = function(a) {
  var b = {path:a.path, method:a.method, headers:a.headers, params:a.params, body:a.body};
  this.b && (b.callback = function(a, e) {
    var f = c;
    f.b && (f.b(a, Oh(e)), f.b = null);
    f.a = {Kc:a, za:e};
    b.callback = null;
  });
  a = this.a.request(b);
  var c = new qj(a);
  return c;
};
function qj(a) {
  this.c = a || null;
}
qj.prototype.execute = function(a) {
  this.c ? (this.c.execute(function(b, c) {
    a(b, Oh(c));
  }), this.c = null) : this.a ? (a(this.a.Kc, Oh(this.a.za)), this.a = null) : this.b = a;
};
function ki(a) {
  if (a) {
    if (a instanceof li) {
      return a;
    }
    if (C(a)) {
      return new aj({request:function(b) {
        a(b);
      }}, !0);
    }
    if ("request" in a) {
      return new aj(a);
    }
    throw new K(a + " is not a valid HTTP Client");
  }
  return null;
}
;function rj(a, b, c) {
  bi.call(this, a, b, c);
}
G(rj, mj);
rj.prototype.logger = null;
rj.prototype.ua = function(a) {
  var b = this.a, c = this;
  fi(this, function(d) {
    var e = {method:"GET", path:"storage/v1/b/" + b.e + "/o/" + encodeURIComponent(c.getName())};
    d && (e.headers = $h(d));
    gapi.client.request(e).execute(function(d, e) {
      var h = Oh(e);
      c.d = new ai(c.o(), h.jb(), b.h);
      d ? c.c = d : (c.d = null, c.c = null);
      a.call(c, 200);
    }, e);
  });
};
function sj(a, b, c) {
  nj.call(this, a, b, c);
}
G(sj, nj);
l = sj.prototype;
l.logger = null;
l.ba = function() {
  var a = sj.q.ba.call(this);
  a.key = "name";
  return a;
};
l.w = function() {
  if (!this.b) {
    if (u(q.gapi)) {
      this.b = new aj(gapi.client);
    } else {
      throw new wb("gapi not loaded");
    }
  }
  return sj.q.w.call(this);
};
l.B = function(a, b) {
  return new rj(this, a, b);
};
l.na = function() {
  var a = new I;
  J(Te(this.storage.a, this.a, null, null, 1, 0, !0, !1), function(b) {
    var c = {bucket:this.e};
    (b = b[0]) && (c.marker = b);
    var d = this;
    if (!q.gapi || q.gapi.client) {
      throw Error("gapi lib not loaded");
    }
    gapi.client.load("storage", "v1", function() {
      var b = gapi.client.storage.objects.list({bucket:d.e});
      this.ia && (c.prefix = this.ia);
      b.execute(function(b, c) {
        if (b && !b.error) {
          var e = b.items || [];
          0 < e.length ? ei(d, null, e).K(function() {
            a.l(!0);
          }) : a.l(!1);
        } else {
          a.j(Error(d + ": " + c));
        }
      });
    });
  }, function(b) {
    a.j(b);
  }, this);
  return a;
};
function tj(a, b, c) {
  nj.call(this, a, b, c);
  this.J = "full";
}
G(tj, nj);
l = tj.prototype;
l.logger = null;
l.ba = function() {
  var a = tj.q.ba.call(this);
  a.key = "name";
  return a;
};
l.w = function() {
  !this.b && gapi && (this.b = new aj(gapi.client));
  return tj.q.w.call(this);
};
l.B = function(a, b) {
  return new rj(this, a, b);
};
l.na = function() {
  var a = new I;
  if (!q.gapi || !q.gapi.client) {
    throw Error("gapi lib not loaded");
  }
  var b = this;
  gapi.client.load("storage", "v1", function() {
    function c(e) {
      e && (d.pageToken = e);
      gapi.client.storage.objects.list(d).execute(function(e, g) {
        if (e && !e.error) {
          var h = e.items || [];
          e.nextPageToken ? (ei(b, h), c(e.nextPageToken)) : 0 < h.length ? ei(b, h).K(function() {
            a.l(!0);
          }) : a.l(!!d.pageToken);
        } else {
          a.j(Error(b + ": " + g));
        }
      });
    }
    var d = {bucket:b.e};
    this.ia && (d.prefix = this.ia);
    c();
  });
  return a;
};
l.qb = function(a, b) {
  if (0 == a.length) {
    b([]);
  } else {
    var c = this.i(), d = Ua(a, function(a) {
      return new P(c, a);
    });
    J(oi(this, d), function(d) {
      for (var f = [], g = 0;g < a.length;g++) {
        f[g] = new Wh(a[g], d[g], this.h, c);
      }
      b(f);
    }, function() {
      b([]);
    }, this);
  }
};
function uj(a, b, c) {
  ji.call(this, a, b, c);
}
G(uj, ji);
uj.prototype.Tb = function(a) {
  return this.c + this.f + this.a + this.Ba + a;
};
uj.prototype.logger = null;
uj.prototype.Vb = function(a) {
  function b(a, b) {
    var c = new Ph(e);
    d.w().request(c).execute(function(c) {
      if (200 == c.status) {
        var e = (c.response instanceof Object ? c.response : Rd(c.responseText)).items;
        c = Ua(e, function(a) {
          return a.id;
        });
        for (var e = Ua(e, function(a) {
          return a.updated;
        }), h = [], p = [], r = [], s = 0, t = 0;s <= a.length && t < c.length;) {
          var y = Xh(a[s]), z = c[t];
          if (s == a.length) {
            p.push(z), t++;
          } else {
            var B = Nc(y, z);
            0 == B ? ((z = Yh(a[s])) && e[t] && z != e[t] && new Date(e[t]) > z && r.push(y), s++, t++) : 1 == B ? (h.push(y), s++) : (p.push(z), t++);
          }
        }
        pi(d, function() {
        }, b, p, r, h);
      }
    });
  }
  var c = new nc, d = this, e = this.c + this.f + this.a;
  a.W(function(a) {
    oc(c, a);
    this.qb(a, function(c) {
      b(c, a);
    });
  }, this);
};
function vj(a, b, c) {
  ji.call(this, a, b, c);
}
G(vj, ui);
function wj(a, b, c) {
  bi.call(this, a, b, c);
}
G(wj, wi);
wj.prototype.logger = null;
function xj(a, b, c) {
  jj.call(this, a, b, c);
  this.ia = c.Options.prefix;
  if ("Key" != b.keyPath) {
    throw new K('s3-meta store "' + b.getName() + '" must use inline key with keyPath "Key"');
  }
  this.J = "meta";
}
G(xj, jj);
l = xj.prototype;
l.logger = null;
l.ba = function() {
  var a = xj.q.ba.call(this);
  a.key = "Key";
  a.modified = "LastModified";
  a.etag = "ETag";
  return a;
};
l.B = function(a, b) {
  return new wj(this, a, b);
};
l.na = function() {
  function a(f) {
    f && (e.marker = f);
    c.listObjects(e).send(function(c, f) {
      if (c) {
        var k = d + ": " + Sd(c);
        b.j(c instanceof Error ? c : Error(k));
      } else {
        k = f.Contents || [], f.IsTruncated ? (ei(d, k), a(k[k.length - 1].Key + "\uffff")) : 0 < k.length ? ei(d, k).K(function() {
          b.l(!0);
        }) : b.l(!!e.marker);
      }
    });
  }
  var b = new I, c = dj(this.w()), d = this, e = {};
  this.ia && (e.prefix = this.ia);
  a();
  return b;
};
l.qb = function() {
  throw new wb("loading meta data should not be necessary");
};
function yj(a, b, c) {
  bi.call(this, a, b, c);
}
G(yj, Wi);
function zj(a, b, c) {
  Xi.call(this, a, b, c);
  a = c.Options;
  this.Oa = a.domain;
  this.ka = a.siteName;
  if (a = wd(b, "sites$parent")) {
    rd(a, function(a) {
      for (var b = a.link || [], c = 0;c < b.length;c++) {
        if ("http://schemas.google.com/sites/2008#parent" == b[c].rel) {
          return b[c].href;
        }
      }
      return a.id.$t.replace(/\w+$/, "0");
    }), jc("index sites$parent in " + b.getName() + " has set a generator.");
  }
  if (a = wd(b, "alternate")) {
    rd(a, function(a) {
      a = a.link || [];
      for (var b = 0;b < a.length;b++) {
        if ("alternate" == a[b].rel) {
          return a[b].href;
        }
      }
    }), jc("index alternate in " + b.getName() + " has set a generator.");
  }
}
G(zj, Xi);
zj.prototype.B = function(a, b) {
  return new yj(this, a, b);
};
zj.prototype.aa = function() {
  return "https://sites.google.com/feeds/content/" + this.Oa + "/" + this.ka + "/";
};
zj.prototype.wc = function(a) {
  return "GET" != a;
};
function Aj(a, b, c, d) {
  var e = {alt:"json", kind:a.e};
  "sites$parent" == c ? (c = d.match(/\w+$/)[0], e.parent = c) : "alternate" == c && (c = d.replace(/https:\/\/sites.google.com\/a\/[^\/]+\/[^\/]+/, ""), e.path = c);
  var f = {}, g = a.aa();
  Kc(b, function(c, k, m) {
    oc(b, c);
    if (k = c[0]) {
      k = Ab(k, "updated", "$t"), k = (new Date(1 + +new Date(k))).toISOString(), e["updated-min"] = k;
    }
    k = new Ph(g, "GET", e, f);
    a.w().request(k).execute(function(b, e) {
      if (200 == Z(e)) {
        if (!b) {
          var f = Mh(e);
          x(f) && (b = JSON.parse(f));
        }
        var g = (f = (b.feed || b).entry) ? v(f) ? f : [f] : [];
        0 < g.length ? ei(a, g).K(function() {
          m(g);
        }) : m(c);
      } else {
        302 == Z(e) ? m(c) : (f = a + ": Invalid response status " + Z(e) + " for querying pageName: " + d, m(Error(f), !0));
      }
    });
  }, a);
}
zj.prototype.Ob = function(a, b, c) {
  if (ri(this)) {
    Kc(a, function(d, e, f) {
      oc(a, d);
      si(this, function(a) {
        !0 === a ? J(Re(this.storage.a, this.a, b, Q.only(c), !1, 0), function(a) {
          f(a);
        }, function(a) {
          f(a, !0);
        }, this) : f(d);
      }, function(a) {
        f(a, !0);
      }, this);
    }, this);
  } else {
    return "alternate" == b || "alternate" == b ? Aj(this, a, b, c) : zj.q.Ob.call(this, a, b, c);
  }
};
sd.prototype.b = null;
X.prototype.ic = function(a, b) {
  var c = b.format;
  if ("gdata-sites" == c) {
    a.b = new zj(this, a, b);
  } else {
    if ("gdata" == c) {
      a.b = new Xi(this, a, b);
    } else {
      if ("gdata-json" == c) {
        a.b = new $i(this, a, b);
      } else {
        if ("odata" == c) {
          a.b = new vj(this, a, b);
        } else {
          if ("s3" == c) {
            a.b = new jj(this, a, b);
          } else {
            if ("s3-meta" == c) {
              a.b = new xj(this, a, b);
            } else {
              if ("gcs" == c) {
                a.b = new nj(this, a, b);
              } else {
                if ("gcs-json" == c) {
                  a.b = new sj(this, a, b);
                } else {
                  if ("gcs-meta" == c) {
                    a.b = new tj(this, a, b);
                  } else {
                    if ("atom" == c) {
                      a.b = new ui(this, a, b);
                    } else {
                      if ("json" == c) {
                        a.b = new uj(this, a, b);
                      } else {
                        if ("rest" == c) {
                          a.b = new ji(this, a, b);
                        } else {
                          throw new tb("Sync format: " + c);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  Jd(a, function(b, c) {
    var f = b.Ka();
    if (!(this instanceof Ee) || this.P) {
      if (!window.navigator || !u(window.navigator.onLine) || window.navigator.onLine) {
        if ("a" == f) {
          f = c[1], a.b.add(b, f);
        } else {
          if ("d" == f) {
            c[1] || c[2] || a.b.count(b);
          } else {
            if ("j" == f) {
              var f = c[1], g = c[2];
              a.b.put(b, f, g);
            } else {
              if ("n" == f) {
                g = c[1], ti(a.b, b, g);
              } else {
                if ("u" == f) {
                  var f = c[1], g = c[2], h = c[3], k = c[4], m = c[5];
                  !h && !m && g && null != g.lower && null != g.upper && 0 == Nc(g.lower, g.upper) && a.b.Ob(b, f, g.lower);
                } else {
                  if ("g" == f) {
                    g = c[1], k = c[2], h = c[3], m = c[4], a.b.keys(b, null, g, k, h, m, !1);
                  } else {
                    if ("i" == f) {
                      f = c[1], g = c[2], k = c[3], h = c[4], m = c[5], a.b.keys(b, f, g, k, h, m, c[6]);
                    } else {
                      if ("s" == f) {
                        g = c[1], k = c[2], h = c[3], m = c[4], g || m ? g && g.lower && x(g.lower) && g.lower == g.upper || !g && m && 1 == k && h && lj(a.b, b) : a.b.U(b, k, h);
                      } else {
                        if ("" != f) {
                          if ("e" == f) {
                            g = c[1], a.b.get(b, g);
                          } else {
                            if ("v" == f) {
                              qi(a.b, b, c[1]);
                            } else {
                              throw Error(f);
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });
};
function Bj(a, b, c) {
  X.call(this, a, b, c);
}
G(Bj, X);
ja("ydn.db.Storage", Bj);
Rh.prototype.getStatus = Rh.prototype.e;
Rh.prototype.getClientValue = Rh.prototype.c;
Rh.prototype.getServerValue = Rh.prototype.Y;
function Cj(a, b) {
  Pc.call(this);
  this.d = b;
  this.b = [];
  if (a > this.d) {
    throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
  }
  for (var c = 0;c < a;c++) {
    this.b.push(this.a());
  }
}
G(Cj, Pc);
Cj.prototype.a = function() {
  return{};
};
Cj.prototype.c = function(a) {
  if (D(a)) {
    if (C(a.ma)) {
      a.ma();
    } else {
      for (var b in a) {
        delete a[b];
      }
    }
  }
};
Cj.prototype.I = function() {
  Cj.q.I.call(this);
  for (var a = this.b;a.length;) {
    this.c(a.pop());
  }
  delete this.b;
};
function Dj() {
  this.a = [];
  this.c = new Jb;
  this.d = new Jb;
  this.f = 1;
  this.e = new Cj(0, 4E3);
  this.e.a = function() {
    return new Ej;
  };
  this.g = new Cj(0, 50);
  this.g.a = function() {
    return new Fj;
  };
  var a = this;
  this.b = new Cj(0, 2E3);
  this.b.a = function() {
    return String(a.f++);
  };
  this.b.c = function() {
  };
}
function Fj() {
  this.time = this.count = 0;
}
Fj.prototype.toString = function() {
  var a = [];
  a.push(this.type, " ", this.count, " (", Math.round(10 * this.time) / 10, " ms)");
  return a.join("");
};
function Ej() {
}
function Gj(a, b, c) {
  var d = [];
  -1 == b ? d.push("    ") : d.push(Hj(a.b - b));
  d.push(" ", Ij(a.b - 0));
  0 == a.a ? d.push(" Start        ") : 1 == a.a ? (d.push(" Done "), d.push(Hj(a.e - a.startTime), " ms ")) : d.push(" Comment      ");
  d.push(c, a);
  0 < a.d && d.push("[VarAlloc ", a.d, "] ");
  return d.join("");
}
Ej.prototype.toString = function() {
  return null == this.type ? this.c : "[" + this.type + "] " + this.c;
};
Dj.prototype.toString = function() {
  for (var a = [], b = -1, c = [], d = 0;d < this.a.length;d++) {
    var e = this.a[d];
    1 == e.a && c.pop();
    a.push(" ", Gj(e, b, c.join("")));
    b = e.b;
    a.push("\n");
    0 == e.a && c.push("|  ");
  }
  if (0 != this.c.t()) {
    var f = ia();
    a.push(" Unstopped timers:\n");
    Ib(this.c, function(b) {
      a.push("  ", b, " (", f - b.startTime, " ms, started at ", Ij(b.startTime), ")\n");
    });
  }
  b = this.d.H();
  for (d = 0;d < b.length;d++) {
    c = this.d.get(b[d]), 1 < c.count && a.push(" TOTAL ", c, "\n");
  }
  a.push("Total tracers created ", 0, "\n", "Total comments created ", 0, "\n", "Overhead start: ", 0, " ms\n", "Overhead end: ", 0, " ms\n", "Overhead comment: ", 0, " ms\n");
  return a.join("");
};
function Hj(a) {
  a = Math.round(a);
  var b = "";
  1E3 > a && (b = " ");
  100 > a && (b = "  ");
  10 > a && (b = "   ");
  return b + a;
}
function Ij(a) {
  a = Math.round(a);
  return String(100 + a / 1E3 % 60).substring(1, 3) + "." + String(1E3 + a % 1E3).substring(1, 4);
}
new Dj;
/*
 Copyright 2012 YDN Authors, Yathit. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");.
*/
function Jj(a) {
  a.g || (a.g = new tg);
  return a.g;
}
Ye.prototype.addEventListener = function(a, b, c, d) {
  "ready" == a ? ng(Jj(this), a, b, c, d) : gg(Jj(this), a, b, c, d);
};
Ye.prototype.removeEventListener = function(a, b, c, d) {
  og(Jj(this), a, b, c, d);
};
Ye.prototype.Q = function(a) {
  ug(Jj(this), a);
};
Ye.prototype.addEventListener = Ye.prototype.addEventListener;
Ye.prototype.removeEventListener = Ye.prototype.removeEventListener;
function Kj(a, b, c, d) {
  if (u(b)) {
    var e = a.f;
    b = (v(b) ? Ad(e, b) : wd(e, b)).getName();
    a.a = b;
  }
  a.b = x(a.a);
  a.h = 0;
  a.m = !1;
  a.reverse = "prev" == c || "prevunique" == c;
  a.unique = "nextunique" == c || "prevunique" == c;
  a.c = d;
  a.p = void 0;
  a.e = void 0;
  a.r = void 0;
}
;function Lj() {
}
;function $(a, b, c, d, e, f, g) {
  this.e = a;
  this.b = b;
  this.g = g;
  this.r = !!this.b;
  this.c = u(f) ? f : !!x(this.b);
  a = "next";
  d && e ? a = "prevunique" : d ? a = "prev" : e && (a = "nextunique");
  this.f = a;
  this.a = cd(c);
  this.d = Mj;
  this.p = NaN;
}
G($, Lj);
$.prototype.c = !0;
function Nj(a, b, c) {
  if (3 < arguments.length) {
    throw new K("too many argument");
  }
  $.call(this, a, void 0, b, c, void 0, !0);
}
G(Nj, $);
function Oj(a, b, c, d, e) {
  if (!x(b)) {
    throw new K("index name must be string");
  }
  $.call(this, a, b, c, d, e, !0);
}
G(Oj, $);
function Pj(a, b, c) {
  if (3 < arguments.length) {
    throw new K("too many argument");
  }
  $.call(this, a, void 0, b, c, void 0, !1);
}
G(Pj, $);
function Qj(a, b, c, d, e) {
  if (!x(b)) {
    throw new K("index name must be string");
  }
  $.call(this, a, b, c, d, e, !1);
}
G(Qj, $);
var Mj = "init";
l = $.prototype;
l.logger = null;
l.i = function() {
  return this.e;
};
l.Rc = function() {
  return this.b;
};
l.Tc = function() {
  return this.a ? this.a instanceof ed ? this.a : ed.bound(this.a.lower, this.a.upper, this.a.lowerOpen, this.a.upperOpen) : null;
};
l.Uc = function() {
  return this.c;
};
l.Jc = function() {
  return this.r;
};
l.clone = function() {
  var a = new $(this.e, this.b, this.a, this.La(), this.Bb(), this.c, this.g);
  a.p = this.p;
  return a;
};
l.unique = function(a) {
  return new $(this.e, this.b, this.a, this.La(), a, this.c, this.g);
};
l.Wc = function(a, b) {
  var c = new $(this.e, this.b, this.a, this.La(), this.Bb(), this.c, this.g);
  c.h = a;
  c.m = b;
  c.d = "rest";
  return c;
};
l.reverse = function() {
  return new $(this.e, this.b, this.a, !this.La(), this.Bb(), this.c, this.g);
};
l.La = function() {
  return "prev" === this.f || "prevunique" === this.f;
};
l.Bb = function() {
  return "nextunique" === this.f || "prevunique" === this.f;
};
l.Fc = function() {
  return this.d;
};
l.load = function(a) {
  a = a[0];
  Kj(a, this.g || this.b, this.f, this.c);
  this.d = "busy";
  var b = this;
  a.d = function(a, d, e) {
    b.h = d;
    b.m = e;
    b.d = a ? "rest" : "done";
  };
  a.openCursor(this.h, this.m);
  return a;
};
l.Sc = function() {
  return this.h;
};
l.S = function() {
  return this.m;
};
l.Vc = function(a, b, c) {
  a = a || Mj;
  "busy" != this.d && (this.h = b, this.m = c, this.d = a);
};
l.stores = function() {
  return[this.e];
};
function Rj(a, b, c, d) {
  if ("transaction" in a) {
    this.g = a, this.d = this.e = null;
  } else {
    if ("objectStore" in a) {
      this.g = null, this.e = a.db, this.d = a;
    } else {
      throw new de("storage instance require.");
    }
  }
  this.h = b;
  this.m = c;
  this.p = d;
  this.b = [];
  this.a = 0;
  this.c = !1;
}
Rj.prototype.logger = null;
Rj.prototype.c = !1;
function Sj(a, b) {
  a.a++;
  b.onsuccess = function(b) {
    if (b = b.target.result) {
      if (C(a.p)) {
        var d = b.value;
        a.p(b.primaryKey, null != a.m ? d[a.m] : d);
      }
      if (b && 0 < a.b.length) {
        b["continue"](a.b.shift());
      } else {
        a.a--, 0 == a.a && a.ga && a.ga();
      }
    }
  };
  b.onerror = function() {
    a.a--;
    0 == a.a && a.ga && a.ga();
  };
}
function Tj(a, b) {
  0 == a.b.length && 0 == a.a ? b() : a.ga = b;
}
function Uj(a) {
  if (!a.c) {
    var b = function() {
      a.d = null;
    }, c = function(b) {
      var c = a.b.shift();
      b = b.objectStore(a.h);
      Sj(a, b.openCursor(c));
    };
    if (a.d) {
      c(a.d);
    } else {
      if (a.e) {
        a.f = a.e.transaction([a.h], rc), a.f.oncomplete = function() {
          b();
        }, a.f.onerror = function() {
          b();
        }, a.f.onabort = function() {
          b();
        };
      } else {
        if (a.g) {
          a.c = !0, a.g.transaction(function(b) {
            a.c = !1;
            c(b);
          }, [a.h], rc, b);
        } else {
          throw new fe("");
        }
      }
    }
  }
}
;function Vj(a, b, c) {
  if (a && a instanceof T) {
    this.Ta = a;
  } else {
    if (a && a.db) {
      if (this.Ta = null, a.db) {
        this.va = new Rj(a, this.c, this.d, E(this.ga, this));
      } else {
        throw new K("Invalid IndexedDB Transaction.");
      }
    }
  }
  if (!x(b)) {
    throw new K("a store name required.");
  }
  this.c = b;
  if (u(c) && !x(c)) {
    throw new K("projection index name must be a string.");
  }
  this.d = c;
  this.va = null;
  this.b = [];
  this.a = [];
  this.Ma = !1;
}
l = Vj.prototype;
l.logger = null;
l.Ta = null;
l.bc = null;
l.va = null;
l.Oc = function(a) {
  this.bc = a;
};
function Wj(a) {
  var b = 0 < a.a.length;
  if (b && !a.Ma && C(a.bc)) {
    var c = function() {
      Wj(a);
    }, d = a.b.shift(), e = a.a.shift(), b = 0 < a.a.length, c = a.bc(d, e, b ? c : null);
    b && !c && Wj(a);
  }
}
l.Ma = !1;
l.Yc = function(a) {
  if (this.va) {
    this.Ma = !0;
    var b = this;
    Tj(this.va, function() {
      a(b.b, b.a);
      b.b = [];
      b.a = [];
      b.Ma = !1;
    });
  } else {
    a(this.b, this.a), this.b = [], this.a = [];
  }
};
l.ga = function(a, b) {
  this.b.push(a);
  this.a.push(b);
  Wj(this);
};
l.push = function(a, b) {
  if (this.Ma) {
    throw new he("");
  }
  if (2 <= arguments.length) {
    this.ga(a, b);
  } else {
    if (!this.va) {
      if (!this.Ta) {
        throw new he("Database connection is not setup.");
      }
      var c = this.Ta.Eb();
      if (c) {
        if ("indexeddb" === c) {
          this.va = new Rj(this.Ta, this.c, this.d, E(this.ga, this));
        } else {
          throw new ee(c);
        }
      } else {
        throw new he("Database is not connected.");
      }
    }
    c = this.va;
    c.b.push(a);
    Uj(c);
  }
};
l.i = function() {
  return this.c;
};
function Xj() {
}
Xj.prototype.logger = null;
ja("ydn.db.Iterator", $);
ja("ydn.db.KeyIterator", Nj);
ja("ydn.db.ValueIterator", Pj);
ja("ydn.db.IndexIterator", Oj);
ja("ydn.db.IndexValueIterator", Qj);
$.prototype.getState = $.prototype.Fc;
$.prototype.getKeyRange = $.prototype.Tc;
$.prototype.getIndexName = $.prototype.Rc;
$.prototype.getStoreName = $.prototype.i;
$.prototype.isReversed = $.prototype.La;
$.prototype.isUnique = $.prototype.Bb;
$.prototype.isKeyIterator = $.prototype.Uc;
$.prototype.isIndexIterator = $.prototype.Jc;
$.prototype.getPrimaryKey = $.prototype.S;
$.prototype.getKey = $.prototype.Sc;
$.prototype.resume = $.prototype.Wc;
$.prototype.reset = $.prototype.Vc;
$.prototype.reverse = $.prototype.reverse;
Nj.where = function(a, b, c, d, e) {
  return new Nj(a, hd(b, c, d, e));
};
Pj.where = function(a, b, c, d, e) {
  return new Pj(a, hd(b, c, d, e));
};
Oj.where = function(a, b, c, d, e, f) {
  return new Oj(a, b, hd(c, d, e, f));
};
Qj.where = function(a, b, c, d, e, f) {
  return new Qj(a, b, hd(c, d, e, f));
};
ja("ydn.db.Streamer", Vj);
Vj.prototype.push = Vj.prototype.push;
Vj.prototype.collect = Vj.prototype.Yc;
Vj.prototype.setSink = Vj.prototype.Oc;
function Yj() {
}
G(Yj, Xj);
function Zj() {
}
G(Zj, Xj);
function ak() {
}
G(ak, Xj);
ak.prototype.logger = null;
ja("ydn.db.algo.NestedLoop", Yj);
ja("ydn.db.algo.ZigzagMerge", ak);
ja("ydn.db.algo.SortedMerge", Zj);
function bk(a) {
  this.b = a || [];
}
bk.prototype.a = function(a) {
  return-1 == this.b.indexOf(a) ? a : null;
};
function ck() {
}
ck.prototype.a = function(a) {
  var b = {ational:"ate", tional:"tion", enci:"ence", anci:"ance", izer:"ize", bli:"ble", alli:"al", entli:"ent", eli:"e", ousli:"ous", ization:"ize", ation:"ate", ator:"ate", alism:"al", iveness:"ive", fulness:"ful", ousness:"ous", aliti:"al", iviti:"ive", biliti:"ble", logi:"log"}, c = {icate:"ic", ative:"", alize:"al", iciti:"ic", ical:"ic", ful:"", ness:""};
  a = a.toLowerCase();
  var d, e, f = a;
  if (3 > a.length) {
    return a;
  }
  var g, h;
  a = a.substr(0, 1);
  "y" == a && (f = a.toUpperCase() + f.substr(1));
  g = /^(.+?)(ss|i)es$/;
  e = /^(.+?)([^s])s$/;
  g.test(f) ? f = f.replace(g, "$1$2") : e.test(f) && (f = f.replace(e, "$1$2"));
  g = /^(.+?)eed$/;
  e = /^(.+?)(ed|ing)$/;
  g.test(f) ? (e = g.exec(f), g = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*/, g.test(e[1]) && (g = /.$/, f = f.replace(g, ""))) : e.test(f) && (e = e.exec(f), d = e[1], e = /^([^aeiou][^aeiouy]*)?[aeiouy]/, e.test(d) && (f = d, e = /(at|bl|iz)$/, h = /([^aeiouylsz])\1$/, d = /^[^aeiou][^aeiouy]*[aeiouy][^aeiouwxy]$/, e.test(f) ? f += "e" : h.test(f) ? (g = /.$/, f = f.replace(g, "")) : d.test(f) && (f += "e")));
  g = /^(.+?)y$/;
  g.test(f) && (e = g.exec(f), d = e[1], g = /^([^aeiou][^aeiouy]*)?[aeiouy]/, g.test(d) && (f = d + "i"));
  g = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;
  g.test(f) && (e = g.exec(f), d = e[1], e = e[2], g = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*/, g.test(d) && (f = d + b[e]));
  g = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;
  g.test(f) && (e = g.exec(f), d = e[1], e = e[2], g = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*/, g.test(d) && (f = d + c[e]));
  g = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
  e = /^(.+?)(s|t)(ion)$/;
  g.test(f) ? (e = g.exec(f), d = e[1], g = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/, g.test(d) && (f = d)) : e.test(f) && (e = e.exec(f), d = e[1] + e[2], e = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/, e.test(d) && (f = d));
  g = /^(.+?)e$/;
  g.test(f) && (e = g.exec(f), d = e[1], g = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/, e = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$/, h = /^[^aeiou][^aeiouy]*[aeiouy][^aeiouwxy]$/, g.test(d) || e.test(d) && !h.test(d)) && (f = d);
  g = /ll$/;
  e = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/;
  g.test(f) && e.test(f) && (g = /.$/, f = f.replace(g, ""));
  "y" == a && (f = a.toLowerCase() + f.substr(1));
  return f;
};
function dk(a) {
  this.b = a;
}
dk.prototype.a = function(a) {
  a = a.toLowerCase();
  a = a.replace(/([^c])\1/g, "$1");
  a = function(a) {
    return a.match(/^(kn|gn|pn|ae|wr)/) ? a.substr(1, a.length - 1) : a;
  }(a);
  a = a.replace(/mb$/, "m");
  a = a.replace(/ck/g, "k");
  a = function(a) {
    a = a.replace(/([^s]|^)(c)(h)/g, "$1x$3").trim();
    a = a.replace(/cia/g, "xia");
    a = a.replace(/c(i|e|y)/g, "s$1");
    return a = a.replace(/c/g, "k");
  }(a);
  a = function(a) {
    a = a.replace(/d(ge|gy|gi)/g, "j$1");
    return a = a.replace(/d/g, "t");
  }(a);
  a = function(a) {
    a = a.replace(/gh(^$|[^aeiou])/g, "h$1");
    return a = a.replace(/g(n|ned)$/g, "$1");
  }(a);
  a = function(a) {
    a = a.replace(/([^g]|^)(g)(i|e|y)/g, "$1j$3");
    a = a.replace(/gg/g, "g");
    return a = a.replace(/g/g, "k");
  }(a);
  a = a.replace(/([aeiou])h([^aeiou])/g, "$1$2");
  a = a.replace(/ph/g, "f");
  a = a.replace(/q/g, "k");
  a = a.replace(/s(h|io|ia)/g, "x$1");
  a = function(a) {
    a = a.replace(/^x/, "s");
    return a = a.replace(/x/g, "ks");
  }(a);
  a = function(a) {
    a = a.replace(/t(ia|io)/g, "x$1");
    return a = a.replace(/th/, "0");
  }(a);
  a = a.replace(/tch/g, "ch");
  a = a.replace(/v/g, "f");
  a = a.replace(/^wh/, "w");
  a = a.replace(/w([^aeiou]|$)/g, "$1");
  a = a.replace(/y([^aeiou]|$)/g, "$1");
  a = a.replace(/z/, "s");
  a = a.charAt(0) + a.substr(1, a.length).replace(/[aeiou]/g, "");
  a.length >= this.b && (a = a.substring(0, this.b));
  return a = a.toUpperCase();
};
var ek = new dk(32), fk = new ck, gk = new bk("a a's able about above according accordingly across actually after afterwards again against ain't all allow allows almost alone along already also although always am among amongst an and another any anybody anyhow anyone anything anyway anyways anywhere apart appear appreciate appropriate are aren't around as aside ask asking associated at available away awfully b be became because become becomes becoming been before beforehand behind being believe below beside besides best better between beyond both brief but by c c'mon c's came can can't cannot cant cause causes certain certainly changes clearly co com come comes concerning consequently consider considering contain containing contains corresponding could couldn't course currently d definitely described despite did didn't different do does doesn't doing don't done down downwards during e each edu eg eight either else elsewhere enough entirely especially et etc even ever every everybody everyone everything everywhere ex exactly example except f far few fifth first five followed following follows for former formerly forth four from further furthermore g get gets getting given gives go goes going gone got gotten greetings h had hadn't happens hardly has hasn't have haven't having he he's hello help hence her here here's hereafter hereby herein hereupon hers herself hi him himself his hither hopefully how howbeit however i i'd i'll i'm i've ie if ignored immediate in inasmuch inc indeed indicate indicated indicates inner insofar instead into inward is isn't it it'd it'll it's its itself j just k keep keeps kept know knows known l last lately later latter latterly least less lest let let's like liked likely little look looking looks ltd m mainly many may maybe me mean meanwhile merely might more moreover most mostly much must my myself n name namely nd near nearly necessary need needs neither never nevertheless new next nine no nobody non none noone nor normally not nothing novel now nowhere o obviously of off often oh ok okay old on once one ones only onto or other others otherwise ought our ours ourselves out outside over overall own p particular particularly per perhaps placed please plus possible presumably probably provides q que quite qv r rather rd re really reasonably regarding regardless regards relatively respectively right s said same saw say saying says second secondly see seeing seem seemed seeming seems seen self selves sensible sent serious seriously seven several shall she should shouldn't since six so some somebody somehow someone something sometime sometimes somewhat somewhere soon sorry specified specify specifying still sub such sup sure t t's take taken tell tends th than thank thanks thanx that that's thats the their theirs them themselves then thence there there's thereafter thereby therefore therein theres thereupon these they they'd they'll they're they've think third this thorough thoroughly those though three through throughout thru thus to together too took toward towards tried tries truly try trying twice two u un under unfortunately unless unlikely until unto up upon us use used useful uses using usually uucp v value various very via viz vs w want wants was wasn't way we we'd we'll we're we've welcome well went were weren't what what's whatever when whence whenever where where's whereafter whereas whereby wherein whereupon wherever whether which while whither who who's whoever whole whom whose why will willing wish with within without won't wonder would wouldn't x y yes yet you you'd you'll you're you've your yours yourself yourselves z zero".split(" "));
function hk(a) {
  this.data = a;
  this.a = 0;
}
hk.prototype.next = function(a) {
  for (var b = this.a, c = this.data[b], c = 1, d = 0;0 <= b && b < this.data.length;) {
    c = this.data[b];
    if (c instanceof Array) {
      if (a < c[0]) {
        c = -1;
      } else {
        if (a > c[1]) {
          c = 1;
        } else {
          return this.a = b, !0;
        }
      }
    } else {
      if (c == a) {
        return this.a = b, !0;
      }
      c = a < c ? -1 : 1;
    }
    if (0 == d) {
      d = c;
    } else {
      if (d != c) {
        break;
      }
    }
    b += c;
    if (b > this.data.length || 0 > b) {
      break;
    }
  }
  return!1;
};
function ik(a, b) {
  for (var c = 0, d = 0, e = a.length, f = 0;f < e;++f) {
    a: {
      var d = a.charCodeAt(f), g = new hk(categ_letters_numbers_data);
      if (A(d)) {
        d = g.next(d);
      } else {
        for (var h = 0, k = d.length;h < k;++h) {
          if (!1 === g.next(d[h])) {
            d = !1;
            break a;
          }
        }
        d = !0;
      }
    }
    d || ((d = f - c) && b(c, d), c = f + 1);
  }
  (d = e - c) && b(c, d);
}
;function jk(a, b) {
  this.d = b;
  this.value = a;
}
jk.prototype.A = function() {
  return this.value;
};
jk.prototype.b = function() {
  return 1;
};
var kk = Gi || Fi;
jk.prototype.o = function() {
  return this.value;
};
function lk(a, b, c, d, e, f) {
  jk.call(this, d, e);
  this.f = a;
  this.c = b;
  this.e = c;
  this.rb = f || [];
}
G(lk, jk);
lk.prototype.Qa = function() {
  return{k:this.d, v:this.value.toLowerCase(), id:this.o(), loc:this.rb};
};
lk.prototype.o = function() {
  var a = [this.f, this.e, this.c, this.value];
  return kk ? a : xc(a);
};
lk.prototype.i = function() {
  return this.f;
};
lk.prototype.S = function() {
  return this.e;
};
function mk(a, b, c, d, e) {
  jk.call(this, b, c);
  this.g = d;
  this.a = e;
  this.type = a;
  this.jc = 1;
}
G(mk, jk);
mk.prototype.b = function() {
  return this.a * this.type * this.jc;
};
mk.prototype.o = function() {
  return this.value + "|" + this.g;
};
function nk(a, b) {
  lk.call(this, b.i(), b.c, b.S(), b.A(), b.d, []);
  this.h = a;
  this.a = [b];
}
G(nk, lk);
nk.prototype.count = function() {
  return this.a.length;
};
nk.prototype.Xb = function(a) {
  a = a.a[0];
  for (var b = 0;b < this.a.length;b++) {
    if (this.a[b].c == a.c && this.a[b].value == a.value) {
      return;
    }
  }
  this.a.push(a);
};
nk.prototype.b = function() {
  for (var a = 0, b = 0;b < this.a.length;b++) {
    var c = this.a[b], d = Vd(this.h, c.i(), c.c), c = c.b(), a = a + c * d.c
  }
  return a;
};
function kb(a, b) {
  var c = a.b(), d = b.b();
  return c <= d ? 1 : -1;
}
nk.prototype.Qa = function() {
  for (var a = {value:this.value, primaryKey:this.e, storeName:this.f, score:this.b(), tokens:[]}, b = 0;b < this.a.length;b++) {
    a.tokens[b] = this.a[b].Qa();
  }
  return a;
};
function ok(a) {
  var b = [], c;
  a = a.split(/\s+/);
  for (var d = 0;d < a.length;d++) {
    c = a[d];
    for (var e = c.length - 1, f = Array(e), g = 0;g < e;g++) {
      f[g] = c.substring(g, g + 2);
    }
    c = f;
    b.push.apply(b, c);
  }
  return b;
}
;function Ne(a, b, c, d, e, f, g) {
  lk.call(this, b, c, d, e, f, g);
  this.a = a;
}
G(Ne, lk);
Ne.prototype.b = function() {
  var a, b = this.value;
  a = ok(this.a.value.toLowerCase().replace(/^\s+|\s+$/g, ""));
  var b = ok(b.toLowerCase().replace(/^\s+|\s+$/g, "")), c = 0, d = a.length + b.length, e, f, g, h;
  for (e = 0;e < a.length;e++) {
    for (g = a[e], f = 0;f < b.length;f++) {
      if (h = b[f], g == h) {
        c++;
        delete b[f];
        break;
      }
    }
  }
  a = 2 * c / d;
  b = Math.log(this.rb.length + 1);
  c = this.a.b();
  return b * a * c;
};
Ne.prototype.Qa = function() {
  return{keyPath:this.c, value:this.value, loc:this.rb.slice()};
};
function pk(a, b) {
  this.a = a;
  this.b = b;
  this.d = [];
  this.c = 0;
}
function Me(a, b) {
  for (var c, d, e = a.a.getName(), f = 0;f < a.b.length;f++) {
    var g = a.b[f], h = g.type;
    .4 == h || .6 == h ? (d = "v", c = g.A().toLowerCase(), c = dd(c)) : (d = "v", c = g.A().toLowerCase(), c = Q.only(c));
    b(e, d, c, g);
    a.c++;
    .6 == h && (d = "k", c = g.d, c = Q.only(c), b(e, d, c, g), a.c++);
  }
}
function Le(a) {
  for (var b = [a.a.getName()], c = 0;c < a.a.count();c++) {
    var d = a.a.index(c).i();
    -1 == b.indexOf(d) && b.push(d);
  }
  return b;
}
pk.prototype.e = function() {
  for (var a = [], b = [], c = 0;c < this.d.length;c++) {
    var d = this.d[c];
    if (0 == d.a.type) {
      -1 == Ya(b, function(a) {
        return a.S() == d.S() && a.i() == d.i();
      }) && b.push(d);
    } else {
      var e = new nk(this.a, d), f = Ya(a, function(a) {
        return a.S() == e.S() && a.i() == e.i();
      });
      if (0 <= f) {
        var g = a[f];
        H.splice.call(a, f, 1);
        g.Xb(e);
        e = g;
      }
      jb(a, e);
    }
  }
  for (f = 0;f < b.length;f++) {
    for (g = b[f], c = a.length - 1;0 <= c;--c) {
      var h = a[c];
      if (g.S() == h.S() && g.i() == h.i()) {
        a.splice(f, 1);
        break;
      }
    }
  }
  return a.map(function(a) {
    return a.Qa();
  });
};
function qk(a) {
  this.a = a;
  if ("en" == a.c) {
    a = a.d || ["stop", "stemmer", "metaphone"];
    for (var b = [], c = 0;c < a.length;c++) {
      "metaphone" == a[c] ? b.push(ek) : "stemmer" == a[c] ? b.push(fk) : "stop" == a[c] && b.push(gk);
    }
    a = b;
  } else {
    a = [];
  }
  this.b = a;
}
function rk(a, b) {
  for (var c = 0;c < a.b.length;c++) {
    var d = a.b[c].a(b);
    if (d) {
      b = d;
    } else {
      return null;
    }
  }
  return b;
}
function sk(a, b) {
  var c = [], d = [];
  ik(b, function(a, e) {
    c.push(b.substr(a, e));
    d.push(a);
  });
  for (var e = [], f = 0;f < c.length;f++) {
    e[f] = rk(a, c[f]);
  }
  for (var g = [], h = 0, f = 0;f < c.length;f++) {
    var k = c[f], m = e[f], n = "*" == b.charAt(d[f] + k.length), p = n ? d[f] + k.length + 1 : d[f] + k.length, p = '"' == b.charAt(d[f] - 1) && '"' == b.charAt(p), r = "-" == b.charAt(p ? d[f] - 2 : d[f] - 1), s = .8;
    n ? s = .4 : p ? s = 1 : r ? s = 0 : null != m && (s = .6);
    k = new mk(s, k, m, d[f], 1 / (f + 2));
    g.push(k);
    h += k.b();
  }
  for (f = 0;f < g.length;++f) {
    g[f].jc = 1 / h;
  }
  return g;
}
function tk(a, b, c, d) {
  var e = [], f = [];
  ik(b, function(a, c) {
    e.push(b.substr(a, c));
    f.push(a);
  });
  for (var g = [], h = 0;h < e.length;h++) {
    g[h] = rk(a, e[h]);
  }
  a = c.i();
  c = c.a;
  for (var k = [], h = 0;h < e.length;h++) {
    var m = e[h], n = g[h];
    if (null != n) {
      var p = Xa(k, function(a) {
        return a.A() == m;
      });
      p || (p = new lk(a, c, d, m, n), k.push(p));
      p.rb.push(f[h]);
    }
  }
  return k;
}
function uk(a, b, c, d) {
  for (var e = [], f = 0;f < a.a.count();f++) {
    var g = a.a.index(f);
    if (g.i() == b) {
      var h = uc(d, g.a);
      x(h) && (e = e.concat(tk(a, h, g, c)));
    }
  }
  return e;
}
;X.prototype.hc = function(a, b) {
  var c = this;
  b.a = new qk(b);
  Jd(a, function(d, e) {
    function f(e) {
      var f = a.getName();
      $c(e) && Kc(d, function(a, g, h) {
        if (g) {
          h(a, g);
        } else {
          oc(d, a);
          var k = bd(Q.bound([f, e], [f, e, "\uffff"])), y = b.getName();
          Qe(c.a, y, k).K(function() {
            h(a, g);
          });
        }
      });
    }
    function g(b) {
      var e = a.getName();
      Kc(d, function(a, f, g) {
        f ? g(a, f) : (oc(d, a), b && (b = bd(Q.bound([e, b.lower], [e, b.upper, "\uffff"]))), Qe(c.a, e, b).K(function() {
          g(a, f);
        }));
      });
    }
    function h(e, f) {
      var g = a.getName();
      Kc(d, function(a, h, k) {
        oc(d, a);
        if (h) {
          k(a, h);
        } else {
          var y = b.getName();
          v(a) || (a = [a]);
          for (var z = 0;z < a.length;z++) {
            var B = a[z];
            if ($c(B)) {
              if (f) {
                var F = bd(Q.bound([g, B], [g, B, "\uffff"]));
                Qe(c.a, y, F);
              }
              B = uk(b.a, g, B, e[z]).map(function(a) {
                return a.Qa();
              });
              B = Oe(c.a, y, B);
              z == a.length - 1 && B.K(function() {
                k(a, h);
              });
            }
          }
        }
      });
    }
    var k = d.Ka();
    "j" == k ? h([e[1]], !0) : "k" == k ? h(e[1], !0) : "a" == k ? h([e[1]], !1) : "b" == k ? h(e[1], !1) : "n" == k || "c" == k ? g(e[1]) : "m" == k && f(e[1]);
  });
};
X.prototype.O = function(a, b) {
  var c = ae(this.c, a);
  if (!c) {
    throw new K('full text index catalog "' + a + '" not found.');
  }
  var c = c.a, d = sk(c, b), c = 0 == d.length ? null : new pk(c.a, d);
  return c ? Ke(this.a, c) : (this.logger.c('query "' + b + '" contains only noise and search is ignored'), Mc("qb", null));
};
X.prototype.search = X.prototype.O;
pk.prototype.collect = pk.prototype.e;
function vk(a) {
  this.f = a;
  this.b = this.f.length / 4;
  this.d = this.b + 6;
  this.c = [[], [], [], []];
  this.e = [[], [], [], []];
  this.a = Array(4 * (this.d + 1));
  for (a = 0;a < this.b;a++) {
    this.a[a] = [this.f[4 * a], this.f[4 * a + 1], this.f[4 * a + 2], this.f[4 * a + 3]];
  }
  var b = Array(4);
  for (a = this.b;a < 4 * (this.d + 1);a++) {
    b[0] = this.a[a - 1][0];
    b[1] = this.a[a - 1][1];
    b[2] = this.a[a - 1][2];
    b[3] = this.a[a - 1][3];
    if (0 == a % this.b) {
      var c = b, d = c[0];
      c[0] = c[1];
      c[1] = c[2];
      c[2] = c[3];
      c[3] = d;
      wk(b);
      b[0] ^= xk[a / this.b][0];
      b[1] ^= xk[a / this.b][1];
      b[2] ^= xk[a / this.b][2];
      b[3] ^= xk[a / this.b][3];
    } else {
      6 < this.b && 4 == a % this.b && wk(b);
    }
    this.a[a] = Array(4);
    this.a[a][0] = this.a[a - this.b][0] ^ b[0];
    this.a[a][1] = this.a[a - this.b][1] ^ b[1];
    this.a[a][2] = this.a[a - this.b][2] ^ b[2];
    this.a[a][3] = this.a[a - this.b][3] ^ b[3];
  }
}
function yk(a, b) {
  for (var c, d = 0;4 > d;d++) {
    for (var e = 0;4 > e;e++) {
      c = 4 * e + d, c = b[c], a.c[d][e] = c;
    }
  }
}
function zk(a) {
  for (var b = [], c = 0;4 > c;c++) {
    for (var d = 0;4 > d;d++) {
      b[4 * d + c] = a.c[c][d];
    }
  }
  return b;
}
function Ak(a, b) {
  for (var c = 0;4 > c;c++) {
    for (var d = 0;4 > d;d++) {
      a.c[c][d] ^= a.a[4 * b + d][c];
    }
  }
}
function Bk(a, b) {
  for (var c = 0;4 > c;c++) {
    for (var d = 0;4 > d;d++) {
      a.c[c][d] = b[a.c[c][d]];
    }
  }
}
function Ck(a) {
  for (var b = 1;4 > b;b++) {
    for (var c = 0;4 > c;c++) {
      a.e[b][c] = a.c[b][c];
    }
  }
  for (b = 1;4 > b;b++) {
    for (c = 0;4 > c;c++) {
      a.c[b][c] = a.e[b][(c + b) % 4];
    }
  }
}
function Dk(a) {
  for (var b = 1;4 > b;b++) {
    for (var c = 0;4 > c;c++) {
      a.e[b][(c + b) % 4] = a.c[b][c];
    }
  }
  for (b = 1;4 > b;b++) {
    for (c = 0;4 > c;c++) {
      a.c[b][c] = a.e[b][c];
    }
  }
}
function wk(a) {
  a[0] = Ek[a[0]];
  a[1] = Ek[a[1]];
  a[2] = Ek[a[2]];
  a[3] = Ek[a[3]];
}
var Ek = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 
80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 
87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22], Fk = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 
104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 
75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125], xk = [[0, 0, 0, 0], [1, 0, 0, 0], [2, 0, 0, 0], [4, 0, 0, 0], [8, 0, 0, 0], [16, 0, 0, 0], [32, 0, 0, 0], [64, 0, 0, 0], [128, 0, 0, 0], [27, 0, 0, 0], 
[54, 0, 0, 0]], Gk = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194, 196, 198, 200, 202, 204, 206, 208, 210, 212, 
214, 216, 218, 220, 222, 224, 226, 228, 230, 232, 234, 236, 238, 240, 242, 244, 246, 248, 250, 252, 254, 27, 25, 31, 29, 19, 17, 23, 21, 11, 9, 15, 13, 3, 1, 7, 5, 59, 57, 63, 61, 51, 49, 55, 53, 43, 41, 47, 45, 35, 33, 39, 37, 91, 89, 95, 93, 83, 81, 87, 85, 75, 73, 79, 77, 67, 65, 71, 69, 123, 121, 127, 125, 115, 113, 119, 117, 107, 105, 111, 109, 99, 97, 103, 101, 155, 153, 159, 157, 147, 145, 151, 149, 139, 137, 143, 141, 131, 129, 135, 133, 187, 185, 191, 189, 179, 177, 183, 181, 171, 169, 175, 
173, 163, 161, 167, 165, 219, 217, 223, 221, 211, 209, 215, 213, 203, 201, 207, 205, 195, 193, 199, 197, 251, 249, 255, 253, 243, 241, 247, 245, 235, 233, 239, 237, 227, 225, 231, 229], Hk = [0, 3, 6, 5, 12, 15, 10, 9, 24, 27, 30, 29, 20, 23, 18, 17, 48, 51, 54, 53, 60, 63, 58, 57, 40, 43, 46, 45, 36, 39, 34, 33, 96, 99, 102, 101, 108, 111, 106, 105, 120, 123, 126, 125, 116, 119, 114, 113, 80, 83, 86, 85, 92, 95, 90, 89, 72, 75, 78, 77, 68, 71, 66, 65, 192, 195, 198, 197, 204, 207, 202, 201, 216, 
219, 222, 221, 212, 215, 210, 209, 240, 243, 246, 245, 252, 255, 250, 249, 232, 235, 238, 237, 228, 231, 226, 225, 160, 163, 166, 165, 172, 175, 170, 169, 184, 187, 190, 189, 180, 183, 178, 177, 144, 147, 150, 149, 156, 159, 154, 153, 136, 139, 142, 141, 132, 135, 130, 129, 155, 152, 157, 158, 151, 148, 145, 146, 131, 128, 133, 134, 143, 140, 137, 138, 171, 168, 173, 174, 167, 164, 161, 162, 179, 176, 181, 182, 191, 188, 185, 186, 251, 248, 253, 254, 247, 244, 241, 242, 227, 224, 229, 230, 239, 236, 
233, 234, 203, 200, 205, 206, 199, 196, 193, 194, 211, 208, 213, 214, 223, 220, 217, 218, 91, 88, 93, 94, 87, 84, 81, 82, 67, 64, 69, 70, 79, 76, 73, 74, 107, 104, 109, 110, 103, 100, 97, 98, 115, 112, 117, 118, 127, 124, 121, 122, 59, 56, 61, 62, 55, 52, 49, 50, 35, 32, 37, 38, 47, 44, 41, 42, 11, 8, 13, 14, 7, 4, 1, 2, 19, 16, 21, 22, 31, 28, 25, 26], Ik = [0, 9, 18, 27, 36, 45, 54, 63, 72, 65, 90, 83, 108, 101, 126, 119, 144, 153, 130, 139, 180, 189, 166, 175, 216, 209, 202, 195, 252, 245, 238, 
231, 59, 50, 41, 32, 31, 22, 13, 4, 115, 122, 97, 104, 87, 94, 69, 76, 171, 162, 185, 176, 143, 134, 157, 148, 227, 234, 241, 248, 199, 206, 213, 220, 118, 127, 100, 109, 82, 91, 64, 73, 62, 55, 44, 37, 26, 19, 8, 1, 230, 239, 244, 253, 194, 203, 208, 217, 174, 167, 188, 181, 138, 131, 152, 145, 77, 68, 95, 86, 105, 96, 123, 114, 5, 12, 23, 30, 33, 40, 51, 58, 221, 212, 207, 198, 249, 240, 235, 226, 149, 156, 135, 142, 177, 184, 163, 170, 236, 229, 254, 247, 200, 193, 218, 211, 164, 173, 182, 191, 
128, 137, 146, 155, 124, 117, 110, 103, 88, 81, 74, 67, 52, 61, 38, 47, 16, 25, 2, 11, 215, 222, 197, 204, 243, 250, 225, 232, 159, 150, 141, 132, 187, 178, 169, 160, 71, 78, 85, 92, 99, 106, 113, 120, 15, 6, 29, 20, 43, 34, 57, 48, 154, 147, 136, 129, 190, 183, 172, 165, 210, 219, 192, 201, 246, 255, 228, 237, 10, 3, 24, 17, 46, 39, 60, 53, 66, 75, 80, 89, 102, 111, 116, 125, 161, 168, 179, 186, 133, 140, 151, 158, 233, 224, 251, 242, 205, 196, 223, 214, 49, 56, 35, 42, 21, 28, 7, 14, 121, 112, 
107, 98, 93, 84, 79, 70], Jk = [0, 11, 22, 29, 44, 39, 58, 49, 88, 83, 78, 69, 116, 127, 98, 105, 176, 187, 166, 173, 156, 151, 138, 129, 232, 227, 254, 245, 196, 207, 210, 217, 123, 112, 109, 102, 87, 92, 65, 74, 35, 40, 53, 62, 15, 4, 25, 18, 203, 192, 221, 214, 231, 236, 241, 250, 147, 152, 133, 142, 191, 180, 169, 162, 246, 253, 224, 235, 218, 209, 204, 199, 174, 165, 184, 179, 130, 137, 148, 159, 70, 77, 80, 91, 106, 97, 124, 119, 30, 21, 8, 3, 50, 57, 36, 47, 141, 134, 155, 144, 161, 170, 183, 
188, 213, 222, 195, 200, 249, 242, 239, 228, 61, 54, 43, 32, 17, 26, 7, 12, 101, 110, 115, 120, 73, 66, 95, 84, 247, 252, 225, 234, 219, 208, 205, 198, 175, 164, 185, 178, 131, 136, 149, 158, 71, 76, 81, 90, 107, 96, 125, 118, 31, 20, 9, 2, 51, 56, 37, 46, 140, 135, 154, 145, 160, 171, 182, 189, 212, 223, 194, 201, 248, 243, 238, 229, 60, 55, 42, 33, 16, 27, 6, 13, 100, 111, 114, 121, 72, 67, 94, 85, 1, 10, 23, 28, 45, 38, 59, 48, 89, 82, 79, 68, 117, 126, 99, 104, 177, 186, 167, 172, 157, 150, 139, 
128, 233, 226, 255, 244, 197, 206, 211, 216, 122, 113, 108, 103, 86, 93, 64, 75, 34, 41, 52, 63, 14, 5, 24, 19, 202, 193, 220, 215, 230, 237, 240, 251, 146, 153, 132, 143, 190, 181, 168, 163], Kk = [0, 13, 26, 23, 52, 57, 46, 35, 104, 101, 114, 127, 92, 81, 70, 75, 208, 221, 202, 199, 228, 233, 254, 243, 184, 181, 162, 175, 140, 129, 150, 155, 187, 182, 161, 172, 143, 130, 149, 152, 211, 222, 201, 196, 231, 234, 253, 240, 107, 102, 113, 124, 95, 82, 69, 72, 3, 14, 25, 20, 55, 58, 45, 32, 109, 96, 
119, 122, 89, 84, 67, 78, 5, 8, 31, 18, 49, 60, 43, 38, 189, 176, 167, 170, 137, 132, 147, 158, 213, 216, 207, 194, 225, 236, 251, 246, 214, 219, 204, 193, 226, 239, 248, 245, 190, 179, 164, 169, 138, 135, 144, 157, 6, 11, 28, 17, 50, 63, 40, 37, 110, 99, 116, 121, 90, 87, 64, 77, 218, 215, 192, 205, 238, 227, 244, 249, 178, 191, 168, 165, 134, 139, 156, 145, 10, 7, 16, 29, 62, 51, 36, 41, 98, 111, 120, 117, 86, 91, 76, 65, 97, 108, 123, 118, 85, 88, 79, 66, 9, 4, 19, 30, 61, 48, 39, 42, 177, 188, 
171, 166, 133, 136, 159, 146, 217, 212, 195, 206, 237, 224, 247, 250, 183, 186, 173, 160, 131, 142, 153, 148, 223, 210, 197, 200, 235, 230, 241, 252, 103, 106, 125, 112, 83, 94, 73, 68, 15, 2, 21, 24, 59, 54, 33, 44, 12, 1, 22, 27, 56, 53, 34, 47, 100, 105, 126, 115, 80, 93, 74, 71, 220, 209, 198, 203, 232, 229, 242, 255, 180, 185, 174, 163, 128, 141, 154, 151], Lk = [0, 14, 28, 18, 56, 54, 36, 42, 112, 126, 108, 98, 72, 70, 84, 90, 224, 238, 252, 242, 216, 214, 196, 202, 144, 158, 140, 130, 168, 
166, 180, 186, 219, 213, 199, 201, 227, 237, 255, 241, 171, 165, 183, 185, 147, 157, 143, 129, 59, 53, 39, 41, 3, 13, 31, 17, 75, 69, 87, 89, 115, 125, 111, 97, 173, 163, 177, 191, 149, 155, 137, 135, 221, 211, 193, 207, 229, 235, 249, 247, 77, 67, 81, 95, 117, 123, 105, 103, 61, 51, 33, 47, 5, 11, 25, 23, 118, 120, 106, 100, 78, 64, 82, 92, 6, 8, 26, 20, 62, 48, 34, 44, 150, 152, 138, 132, 174, 160, 178, 188, 230, 232, 250, 244, 222, 208, 194, 204, 65, 79, 93, 83, 121, 119, 101, 107, 49, 63, 45, 
35, 9, 7, 21, 27, 161, 175, 189, 179, 153, 151, 133, 139, 209, 223, 205, 195, 233, 231, 245, 251, 154, 148, 134, 136, 162, 172, 190, 176, 234, 228, 246, 248, 210, 220, 206, 192, 122, 116, 102, 104, 66, 76, 94, 80, 10, 4, 22, 24, 50, 60, 46, 32, 236, 226, 240, 254, 212, 218, 200, 198, 156, 146, 128, 142, 164, 170, 184, 182, 12, 2, 16, 30, 52, 58, 40, 38, 124, 114, 96, 110, 68, 74, 88, 86, 55, 57, 43, 37, 15, 1, 19, 29, 71, 73, 91, 85, 127, 113, 99, 109, 215, 217, 203, 197, 239, 225, 243, 253, 167, 
169, 187, 181, 159, 145, 131, 141];
function Mk(a) {
  for (var b = [], c = 0, d = 0;d < a.length;d++) {
    for (var e = a.charCodeAt(d);255 < e;) {
      b[c++] = e & 255, e >>= 8;
    }
    b[c++] = e;
  }
  return b;
}
function Nk(a, b) {
  for (var c = [], d = 0;d < a.length;d++) {
    c.push(a[d] ^ b[d]);
  }
  return c;
}
;function Ok(a) {
  this.a = a;
}
;function Pk() {
  this.b = -1;
}
;function Qk(a, b) {
  this.b = -1;
  this.b = Rk;
  this.d = q.Uint8Array ? new Uint8Array(this.b) : Array(this.b);
  this.e = this.c = 0;
  this.a = [];
  this.g = a;
  this.f = b;
  this.h = q.Int32Array ? new Int32Array(64) : Array(64);
  u(Sk) || (q.Int32Array ? Sk = new Int32Array(Tk) : Sk = Tk);
  this.e = this.c = 0;
  this.a = q.Int32Array ? new Int32Array(this.f) : cb(this.f);
}
var Sk;
G(Qk, Pk);
for (var Rk = 64, Uk = Rk - 1, Vk = [], Wk = 0;Wk < Uk;Wk++) {
  Vk[Wk] = 0;
}
var Xk = ab(128, Vk);
function Yk(a) {
  for (var b = a.d, c = a.h, d = 0, e = 0;e < b.length;) {
    c[d++] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3], e = 4 * d;
  }
  for (b = 16;64 > b;b++) {
    var e = c[b - 15] | 0, d = c[b - 2] | 0, f = (c[b - 16] | 0) + ((e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) | 0, g = (c[b - 7] | 0) + ((d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10) | 0;
    c[b] = f + g | 0;
  }
  for (var d = a.a[0] | 0, e = a.a[1] | 0, h = a.a[2] | 0, k = a.a[3] | 0, m = a.a[4] | 0, n = a.a[5] | 0, p = a.a[6] | 0, f = a.a[7] | 0, b = 0;64 > b;b++) {
    var r = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) + (d & e ^ d & h ^ e & h) | 0, g = m & n ^ ~m & p, f = f + ((m >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^ (m >>> 25 | m << 7)) | 0, g = g + (Sk[b] | 0) | 0, g = f + (g + (c[b] | 0) | 0) | 0, f = p, p = n, n = m, m = k + g | 0, k = h, h = e, e = d, d = g + r | 0
  }
  a.a[0] = a.a[0] + d | 0;
  a.a[1] = a.a[1] + e | 0;
  a.a[2] = a.a[2] + h | 0;
  a.a[3] = a.a[3] + k | 0;
  a.a[4] = a.a[4] + m | 0;
  a.a[5] = a.a[5] + n | 0;
  a.a[6] = a.a[6] + p | 0;
  a.a[7] = a.a[7] + f | 0;
}
function Zk(a, b, c) {
  u(c) || (c = b.length);
  var d = 0, e = a.c;
  if (x(b)) {
    for (;d < c;) {
      a.d[e++] = b.charCodeAt(d++), e == a.b && (Yk(a), e = 0);
    }
  } else {
    if (v(b)) {
      for (;d < c;) {
        var f = b[d++];
        if (!("number" == typeof f && 0 <= f && 255 >= f && f == (f | 0))) {
          throw Error("message must be a byte array");
        }
        a.d[e++] = f;
        e == a.b && (Yk(a), e = 0);
      }
    } else {
      throw Error("message must be string or array");
    }
  }
  a.c = e;
  a.e += c;
}
function $k(a) {
  var b = [], c = 8 * a.e;
  56 > a.c ? Zk(a, Xk, 56 - a.c) : Zk(a, Xk, a.b - (a.c - 56));
  for (var d = 63;56 <= d;d--) {
    a.d[d] = c & 255, c /= 256;
  }
  Yk(a);
  for (d = c = 0;d < a.g;d++) {
    for (var e = 24;0 <= e;e -= 8) {
      b[c++] = a.a[d] >> e & 255;
    }
  }
  return b;
}
var Tk = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 
3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
function al() {
  Qk.call(this, 8, bl);
}
G(al, Qk);
var bl = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
function cl() {
  this.c = [];
  this.b = this.a = 0;
}
;var dl = null, el = null;
function fl(a, b, c, d, e) {
  this.c = a;
  this.d = Mk(b);
  this.e = c;
  this.a = !!d;
  this.b = e || "aes-cbc";
}
fl.prototype.logger = null;
function gl(a, b) {
  var c = new al;
  Zk(c, Mk(b));
  Zk(c, a.d);
  c = $k(c);
  if (!w(c)) {
    throw Error("encodeByteArray takes an array as a parameter");
  }
  if (!dl) {
    dl = {};
    el = {};
    for (var d = 0;65 > d;d++) {
      dl[d] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(d), el[d] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(d);
    }
  }
  for (var d = el, e = [], f = 0;f < c.length;f += 3) {
    var g = c[f], h = f + 1 < c.length, k = h ? c[f + 1] : 0, m = f + 2 < c.length, n = m ? c[f + 2] : 0, p = g >> 2, g = (g & 3) << 4 | k >> 4, k = (k & 15) << 2 | n >> 6, n = n & 63;
    m || (n = 64, h || (k = 64));
    e.push(d[p], d[g], d[k], d[n]);
  }
  return e.join("");
}
function hl(a, b, c, d, e) {
  var f = new al;
  Zk(f, Mk(c));
  Zk(f, b);
  Zk(f, a.d);
  c = $k(f);
  d = Mk(d);
  if ("rc4" == a.b) {
    b = new cl;
    var g;
    g || (g = c.length);
    e = b.c;
    for (a = 0;256 > a;++a) {
      e[a] = a;
    }
    for (a = f = 0;256 > a;++a) {
      var f = f + e[a] + c[a % g] & 255, h = e[a];
      e[a] = e[f];
      e[f] = h;
    }
    b.a = 0;
    b.b = 0;
    c = b.a;
    g = b.b;
    e = b.c;
    for (a = 0;1536 > a;++a) {
      c = c + 1 & 255, g = g + e[c] & 255, f = e[c], e[c] = e[g], e[g] = f;
    }
    b.a = c;
    b.b = g;
    c = d;
    var k;
    k || (k = c.length);
    g = b.a;
    e = b.b;
    a = b.c;
    for (f = 0;f < k;++f) {
      g = g + 1 & 255, e = e + a[g] & 255, h = a[g], a[g] = a[e], a[e] = h, c[f] ^= a[a[g] + a[e] & 255];
    }
    b.a = g;
    b.b = e;
  } else {
    k = b.length - d.length % b.length;
    for (g = 0;g < k;g++) {
      d.push(10);
    }
    k = new vk(c);
    k = new Ok(k);
    if (e) {
      for (c = [], g = 0, e = b;g < d.length;) {
        b = fb(d, g, g + 16);
        a = k.a;
        yk(a, b);
        Ak(a, a.d);
        for (f = 1;f < a.d;++f) {
          Dk(a);
          Bk(a, Fk);
          Ak(a, a.d - f);
          for (var h = a.c, m = a.e[0], n = 0;4 > n;n++) {
            m[0] = h[0][n], m[1] = h[1][n], m[2] = h[2][n], m[3] = h[3][n], h[0][n] = Lk[m[0]] ^ Jk[m[1]] ^ Kk[m[2]] ^ Ik[m[3]], h[1][n] = Ik[m[0]] ^ Lk[m[1]] ^ Jk[m[2]] ^ Kk[m[3]], h[2][n] = Kk[m[0]] ^ Ik[m[1]] ^ Lk[m[2]] ^ Jk[m[3]], h[3][n] = Jk[m[0]] ^ Kk[m[1]] ^ Ik[m[2]] ^ Lk[m[3]];
          }
        }
        Dk(a);
        Bk(a, Fk);
        Ak(a, 0);
        e = Nk(e, zk(a));
        db(c, e);
        e = b;
        g += 16;
      }
    } else {
      for (c = [], g = b, b = 0;b < d.length;b += 16) {
        e = Nk(fb(d, b, b + 16), g);
        g = k.a;
        yk(g, e);
        Ak(g, 0);
        for (e = 1;e < g.d;++e) {
          Bk(g, Ek);
          Ck(g);
          a = g.c;
          f = g.e[0];
          for (h = 0;4 > h;h++) {
            f[0] = a[0][h], f[1] = a[1][h], f[2] = a[2][h], f[3] = a[3][h], a[0][h] = Gk[f[0]] ^ Hk[f[1]] ^ f[2] ^ f[3], a[1][h] = f[0] ^ Gk[f[1]] ^ Hk[f[2]] ^ f[3], a[2][h] = f[0] ^ f[1] ^ Gk[f[2]] ^ Hk[f[3]], a[3][h] = Hk[f[0]] ^ f[1] ^ f[2] ^ Gk[f[3]];
          }
          Ak(g, e);
        }
        Bk(g, Ek);
        Ck(g);
        Ak(g, g.d);
        g = zk(g);
        db(c, g);
      }
    }
    d = c;
  }
  if (8192 > d.length) {
    d = String.fromCharCode.apply(null, d);
  } else {
    k = "";
    for (b = 0;b < d.length;b += 8192) {
      k += String.fromCharCode.apply(null, fb(d, b, b + 8192));
    }
    d = k;
  }
  return d;
}
function il(a, b) {
  return a.a ? gl(a, b) : b;
}
function jl(a, b, c) {
  for (var d, e = gl(a, b), f = [], g = 0;16 > g;++g) {
    f[g] = 256 * Math.random() | 0;
  }
  c = hl(a, f, e, R(c));
  g = {};
  g.salt = f;
  g.data = c;
  u(d) || (d = a.e);
  d && (g.expiration = d + ia());
  g.creation = ia();
  g["key-name"] = a.c;
  return a.a ? [e, g] : [b, g];
}
;X.prototype.gc = function(a) {
  var b = this;
  Jd(a, function(a, d) {
    var e = a.Ka();
    if ("a" == e || "j" == e) {
      var e = b.d[0], f = d[2], g = d[1];
      x(f) && (e = jl(e, f, g), d[2] = e[0], d[1] = e[1]);
    } else {
      if ("e" == e) {
        var h = d[0], k = d[1];
        Kc(a, function(a, c, d) {
          if (u(a)) {
            d(a, c);
          } else {
            for (var e = [], f = 0;f < b.d.length;f++) {
              e.push(new P(h, il(b.d[f], k)));
            }
            J(Se(b.a, e), function(a) {
              for (var c = 0;c < a.length;++c) {
                if (null != a[c]) {
                  try {
                    var f;
                    a: {
                      var g = b.d[c], h = e[c].o(), k = a[c];
                      if (k) {
                        var m = h;
                        g.a || (m = gl(g, h));
                        if (k["key-name"] == g.c) {
                          var n = k.salt, s = k.data;
                          if (!x(s) || !v(n) || !n.length) {
                            throw "Storage: Invalid value was encountered";
                          }
                          var Fa = hl(g, n, m, s, !0);
                          try {
                            if ("rc4" != g.b) {
                              var bb = Fa.lastIndexOf(String.fromCharCode(10));
                              32 >= Fa.length - bb && (Fa = Fa.substr(0, bb));
                            }
                            k.data = Rd(Fa);
                          } catch (ub) {
                            throw "Storage: The value could not be decrypted";
                          }
                          var Bh = k.creation, Ch = k.expiration;
                          f = Ch && Ch < ia() || Bh && Bh > ia() ? void 0 : k.data;
                          break a;
                        }
                      }
                      f = void 0;
                    }
                    if (null != f) {
                      d(f);
                      return;
                    }
                  } catch (kl) {
                  }
                }
              }
              d(void 0);
            }, function() {
              d(a, c);
            });
          }
        });
      } else {
        "m" == e && (h = d[0], k = d[1], x(k) && (d[1] = gl(b.d[0], k)));
      }
    }
  });
};
X.prototype.uc = function(a) {
  if (!a) {
    return!1;
  }
  this.d = [];
  this.r = [];
  var b = !1, c = a.expiration, d = a.secrets, e = !!a.encryptKey;
  a = a.method;
  for (var f = 0;f < d.length;f++) {
    b = d[f], this.r.push(b.name), this.d.push(new fl(b.name, b.key, c, e, a)), b = !0;
  }
  return b;
};
 
var categ_letters_numbers_data=[[48,57],[65,90],[97,122],170,[178,179],181,[185,186],[188,190],[192,214],[216,246],[248,705],[710,721],[736,740],748
	,750,[880,884],[886,887],[890,893],902,[904,906],908,[910,929],[931,1013],[1015,1153],[1162,1319],[1329,1366],1369
	,[1377,1415],[1488,1514],[1520,1522],[1568,1610],[1632,1641],[1646,1647],[1649,1747],1749,[1765,1766],[1774,1788],1791
	,1808,[1810,1839],[1869,1957],1969,[1984,2026],[2036,2037],2042,[2048,2069],2074,2084,2088,[2112,2136],2208,[2210,2220]
	,[2308,2361],2365,2384,[2392,2401],[2406,2415],[2417,2423],[2425,2431],[2437,2444],[2447,2448],[2451,2472],[2474,2480]
	,2482,[2486,2489],2493,2510,[2524,2525],[2527,2529],[2534,2545],[2548,2553],[2565,2570],[2575,2576],[2579,2600]
	,[2602,2608],[2610,2611],[2613,2614],[2616,2617],[2649,2652],2654,[2662,2671],[2674,2676],[2693,2701],[2703,2705]
	,[2707,2728],[2730,2736],[2738,2739],[2741,2745],2749,2768,[2784,2785],[2790,2799],[2821,2828],[2831,2832],[2835,2856]
	,[2858,2864],[2866,2867],[2869,2873],2877,[2908,2909],[2911,2913],[2918,2927],[2929,2935],2947,[2949,2954],[2958,2960]
	,[2962,2965],[2969,2970],2972,[2974,2975],[2979,2980],[2984,2986],[2990,3001],3024,[3046,3058],[3077,3084],[3086,3088]
	,[3090,3112],[3114,3123],[3125,3129],3133,[3160,3161],[3168,3169],[3174,3183],[3192,3198],[3205,3212],[3214,3216]
	,[3218,3240],[3242,3251],[3253,3257],3261,3294,[3296,3297],[3302,3311],[3313,3314],[3333,3340],[3342,3344],[3346,3386]
	,3389,3406,[3424,3425],[3430,3445],[3450,3455],[3461,3478],[3482,3505],[3507,3515],3517,[3520,3526],[3585,3632]
	,[3634,3635],[3648,3654],[3664,3673],[3713,3714],3716,[3719,3720],3722,3725,[3732,3735],[3737,3743],[3745,3747],3749
	,3751,[3754,3755],[3757,3760],[3762,3763],3773,[3776,3780],3782,[3792,3801],[3804,3807],3840,[3872,3891],[3904,3911]
	,[3913,3948],[3976,3980],[4096,4138],[4159,4169],[4176,4181],[4186,4189],4193,[4197,4198],[4206,4208],[4213,4225],4238
	,[4240,4249],[4256,4293],4295,4301,[4304,4346],[4348,4680],[4682,4685],[4688,4694],4696,[4698,4701],[4704,4744]
	,[4746,4749],[4752,4784],[4786,4789],[4792,4798],4800,[4802,4805],[4808,4822],[4824,4880],[4882,4885],[4888,4954]
	,[4969,4988],[4992,5007],[5024,5108],[5121,5740],[5743,5759],[5761,5786],[5792,5866],[5870,5872],[5888,5900]
	,[5902,5905],[5920,5937],[5952,5969],[5984,5996],[5998,6000],[6016,6067],6103,6108,[6112,6121],[6128,6137],[6160,6169]
	,[6176,6263],[6272,6312],6314,[6320,6389],[6400,6428],[6470,6509],[6512,6516],[6528,6571],[6593,6599],[6608,6618]
	,[6656,6678],[6688,6740],[6784,6793],[6800,6809],6823,[6917,6963],[6981,6987],[6992,7001],[7043,7072],[7086,7141]
	,[7168,7203],[7232,7241],[7245,7293],[7401,7404],[7406,7409],[7413,7414],[7424,7615],[7680,7957],[7960,7965]
	,[7968,8005],[8008,8013],[8016,8023],8025,8027,8029,[8031,8061],[8064,8116],[8118,8124],8126,[8130,8132],[8134,8140]
	,[8144,8147],[8150,8155],[8160,8172],[8178,8180],[8182,8188],[8304,8305],[8308,8313],[8319,8329],[8336,8348],8450,8455
	,[8458,8467],8469,[8473,8477],8484,8486,8488,[8490,8493],[8495,8505],[8508,8511],[8517,8521],8526,[8528,8585]
	,[9312,9371],[9450,9471],[10102,10131],[11264,11310],[11312,11358],[11360,11492],[11499,11502],[11506,11507],11517
	,[11520,11557],11559,11565,[11568,11623],11631,[11648,11670],[11680,11686],[11688,11694],[11696,11702],[11704,11710]
	,[11712,11718],[11720,11726],[11728,11734],[11736,11742],11823,[12293,12295],[12321,12329],[12337,12341],[12344,12348]
	,[12353,12438],[12445,12447],[12449,12538],[12540,12543],[12549,12589],[12593,12686],[12690,12693],[12704,12730]
	,[12784,12799],[12832,12841],[12872,12879],[12881,12895],[12928,12937],[12977,12991],13312,19893,19968,40908
	,[40960,42124],[42192,42237],[42240,42508],[42512,42539],[42560,42606],[42623,42647],[42656,42735],[42775,42783]
	,[42786,42888],[42891,42894],[42896,42899],[42912,42922],[43000,43009],[43011,43013],[43015,43018],[43020,43042]
	,[43056,43061],[43072,43123],[43138,43187],[43216,43225],[43250,43255],43259,[43264,43301],[43312,43334],[43360,43388]
	,[43396,43442],[43471,43481],[43520,43560],[43584,43586],[43588,43595],[43600,43609],[43616,43638],43642,[43648,43695]
	,43697,[43701,43702],[43705,43709],43712,43714,[43739,43741],[43744,43754],[43762,43764],[43777,43782],[43785,43790]
	,[43793,43798],[43808,43814],[43816,43822],[43968,44002],[44016,44025],44032,55203,[55216,55238],[55243,55291]
	,[63744,64109],[64112,64217],[64256,64262],[64275,64279],64285,[64287,64296],[64298,64310],[64312,64316],64318
	,[64320,64321],[64323,64324],[64326,64433],[64467,64829],[64848,64911],[64914,64967],[65008,65019],[65136,65140]
	,[65142,65276],[65296,65305],[65313,65338],[65345,65370],[65382,65470],[65474,65479],[65482,65487],[65490,65495]
	,[65498,65500],[65536,65547],[65549,65574],[65576,65594],[65596,65597],[65599,65613],[65616,65629],[65664,65786]
	,[65799,65843],[65856,65912],65930,[66176,66204],[66208,66256],[66304,66334],[66336,66339],[66352,66378],[66432,66461]
	,[66464,66499],[66504,66511],[66513,66517],[66560,66717],[66720,66729],[67584,67589],67592,[67594,67637],[67639,67640]
	,67644,[67647,67669],[67672,67679],[67840,67867],[67872,67897],[67968,68023],[68030,68031],68096,[68112,68115]
	,[68117,68119],[68121,68147],[68160,68167],[68192,68222],[68352,68405],[68416,68437],[68440,68466],[68472,68479]
	,[68608,68680],[69216,69246],[69635,69687],[69714,69743],[69763,69807],[69840,69864],[69872,69881],[69891,69926]
	,[69942,69951],[70019,70066],[70081,70084],[70096,70105],[71296,71338],[71360,71369],[73728,74606],[74752,74850]
	,[77824,78894],[92160,92728],[93952,94020],94032,[94099,94111],[110592,110593],[119648,119665],[119808,119892]
	,[119894,119964],[119966,119967],119970,[119973,119974],[119977,119980],[119982,119993],119995,[119997,120003]
	,[120005,120069],[120071,120074],[120077,120084],[120086,120092],[120094,120121],[120123,120126],[120128,120132],120134
	,[120138,120144],[120146,120485],[120488,120512],[120514,120538],[120540,120570],[120572,120596],[120598,120628]
	,[120630,120654],[120656,120686],[120688,120712],[120714,120744],[120746,120770],[120772,120779],[120782,120831]
	,[126464,126467],[126469,126495],[126497,126498],126500,126503,[126505,126514],[126516,126519],126521,126523,126530
	,126535,126537,126539,[126541,126543],[126545,126546],126548,126551,126553,126555,126557,126559,[126561,126562],126564
	,[126567,126570],[126572,126578],[126580,126583],[126585,126588],126590,[126592,126601],[126603,126619],[126625,126627]
	,[126629,126633],[126635,126651],[127232,127242],131072,173782,173824,177972,177984,178205,[194560,195101]];
;

//# sourceMappingURL=ydn.db-isw-sync-e-dev.js.map
return ydn;}, (this || {}));
            