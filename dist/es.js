import { defineComponent as Ut, h as ft, resolveComponent as j, openBlock as m, createElementBlock as y, createVNode as R, createElementVNode as ot, normalizeClass as it, toDisplayString as W, createCommentVNode as I, pushScopeId as Kt, popScopeId as Gt, Fragment as P, mergeProps as Jt, createBlock as K, createTextVNode as dt, renderSlot as ht, withCtx as Wt } from "vue";
const E = /^[a-z0-9]+(-[a-z0-9]+)*$/, z = (t, n, e, i = "") => {
  const o = t.split(":");
  if (t.slice(0, 1) === "@") {
    if (o.length < 2 || o.length > 3)
      return null;
    i = o.shift().slice(1);
  }
  if (o.length > 3 || !o.length)
    return null;
  if (o.length > 1) {
    const c = o.pop(), l = o.pop(), a = {
      // Allow provider without '@': "provider:prefix:name"
      provider: o.length > 0 ? o[0] : i,
      prefix: l,
      name: c
    };
    return n && !O(a) ? null : a;
  }
  const s = o[0], r = s.split("-");
  if (r.length > 1) {
    const c = {
      provider: i,
      prefix: r.shift(),
      name: r.join("-")
    };
    return n && !O(c) ? null : c;
  }
  if (e && i === "") {
    const c = {
      provider: i,
      prefix: "",
      name: s
    };
    return n && !O(c, e) ? null : c;
  }
  return null;
}, O = (t, n) => t ? !!((t.provider === "" || t.provider.match(E)) && (n && t.prefix === "" || t.prefix.match(E)) && t.name.match(E)) : !1, Pt = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), V = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), H = Object.freeze({
  ...Pt,
  ...V
}), X = Object.freeze({
  ...H,
  body: "",
  hidden: !1
});
function Xt(t, n) {
  const e = {};
  !t.hFlip != !n.hFlip && (e.hFlip = !0), !t.vFlip != !n.vFlip && (e.vFlip = !0);
  const i = ((t.rotate || 0) + (n.rotate || 0)) % 4;
  return i && (e.rotate = i), e;
}
function pt(t, n) {
  const e = Xt(t, n);
  for (const i in X)
    i in V ? i in t && !(i in e) && (e[i] = V[i]) : i in n ? e[i] = n[i] : i in t && (e[i] = t[i]);
  return e;
}
function Yt(t, n) {
  const e = t.icons, i = t.aliases || /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  function s(r) {
    if (e[r])
      return o[r] = [];
    if (!(r in o)) {
      o[r] = null;
      const c = i[r] && i[r].parent, l = c && s(c);
      l && (o[r] = [c].concat(l));
    }
    return o[r];
  }
  return (n || Object.keys(e).concat(Object.keys(i))).forEach(s), o;
}
function Zt(t, n, e) {
  const i = t.icons, o = t.aliases || /* @__PURE__ */ Object.create(null);
  let s = {};
  function r(c) {
    s = pt(
      i[c] || o[c],
      s
    );
  }
  return r(n), e.forEach(r), pt(t, s);
}
function Tt(t, n) {
  const e = [];
  if (typeof t != "object" || typeof t.icons != "object")
    return e;
  t.not_found instanceof Array && t.not_found.forEach((o) => {
    n(o, null), e.push(o);
  });
  const i = Yt(t);
  for (const o in i) {
    const s = i[o];
    s && (n(o, Zt(t, o, s)), e.push(o));
  }
  return e;
}
const $t = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Pt
};
function G(t, n) {
  for (const e in n)
    if (e in t && typeof t[e] != typeof n[e])
      return !1;
  return !0;
}
function jt(t) {
  if (typeof t != "object" || t === null)
    return null;
  const n = t;
  if (typeof n.prefix != "string" || !t.icons || typeof t.icons != "object" || !G(t, $t))
    return null;
  const e = n.icons;
  for (const o in e) {
    const s = e[o];
    if (!o.match(E) || typeof s.body != "string" || !G(
      s,
      X
    ))
      return null;
  }
  const i = n.aliases || /* @__PURE__ */ Object.create(null);
  for (const o in i) {
    const s = i[o], r = s.parent;
    if (!o.match(E) || typeof r != "string" || !e[r] && !i[r] || !G(
      s,
      X
    ))
      return null;
  }
  return n;
}
const gt = /* @__PURE__ */ Object.create(null);
function te(t, n) {
  return {
    provider: t,
    prefix: n,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function k(t, n) {
  const e = gt[t] || (gt[t] = /* @__PURE__ */ Object.create(null));
  return e[n] || (e[n] = te(t, n));
}
function st(t, n) {
  return jt(n) ? Tt(n, (e, i) => {
    i ? t.icons[e] = i : t.missing.add(e);
  }) : [];
}
function ee(t, n, e) {
  try {
    if (typeof e.body == "string")
      return t.icons[n] = { ...e }, !0;
  } catch {
  }
  return !1;
}
let M = !1;
function Et(t) {
  return typeof t == "boolean" && (M = t), M;
}
function ne(t) {
  const n = typeof t == "string" ? z(t, !0, M) : t;
  if (n) {
    const e = k(n.provider, n.prefix), i = n.name;
    return e.icons[i] || (e.missing.has(i) ? null : void 0);
  }
}
function oe(t, n) {
  const e = z(t, !0, M);
  if (!e)
    return !1;
  const i = k(e.provider, e.prefix);
  return ee(i, e.name, n);
}
function ie(t, n) {
  if (typeof t != "object")
    return !1;
  if (typeof n != "string" && (n = t.provider || ""), M && !n && !t.prefix) {
    let o = !1;
    return jt(t) && (t.prefix = "", Tt(t, (s, r) => {
      r && oe(s, r) && (o = !0);
    })), o;
  }
  const e = t.prefix;
  if (!O({
    provider: n,
    prefix: e,
    name: "a"
  }))
    return !1;
  const i = k(n, e);
  return !!st(i, t);
}
const Mt = Object.freeze({
  width: null,
  height: null
}), At = Object.freeze({
  // Dimensions
  ...Mt,
  // Transformations
  ...V
}), se = /(-?[0-9.]*[0-9]+[0-9.]*)/g, re = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function mt(t, n, e) {
  if (n === 1)
    return t;
  if (e = e || 100, typeof t == "number")
    return Math.ceil(t * n * e) / e;
  if (typeof t != "string")
    return t;
  const i = t.split(se);
  if (i === null || !i.length)
    return t;
  const o = [];
  let s = i.shift(), r = re.test(s);
  for (; ; ) {
    if (r) {
      const c = parseFloat(s);
      isNaN(c) ? o.push(s) : o.push(Math.ceil(c * n * e) / e);
    } else
      o.push(s);
    if (s = i.shift(), s === void 0)
      return o.join("");
    r = !r;
  }
}
const ce = (t) => t === "unset" || t === "undefined" || t === "none";
function le(t, n) {
  const e = {
    ...H,
    ...t
  }, i = {
    ...At,
    ...n
  }, o = {
    left: e.left,
    top: e.top,
    width: e.width,
    height: e.height
  };
  let s = e.body;
  [e, i].forEach((w) => {
    const h = [], f = w.hFlip, S = w.vFlip;
    let x = w.rotate;
    f ? S ? x += 2 : (h.push(
      "translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"
    ), h.push("scale(-1 1)"), o.top = o.left = 0) : S && (h.push(
      "translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"
    ), h.push("scale(1 -1)"), o.top = o.left = 0);
    let _;
    switch (x < 0 && (x -= Math.floor(x / 4) * 4), x = x % 4, x) {
      case 1:
        _ = o.height / 2 + o.top, h.unshift(
          "rotate(90 " + _.toString() + " " + _.toString() + ")"
        );
        break;
      case 2:
        h.unshift(
          "rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")"
        );
        break;
      case 3:
        _ = o.width / 2 + o.left, h.unshift(
          "rotate(-90 " + _.toString() + " " + _.toString() + ")"
        );
        break;
    }
    x % 2 === 1 && (o.left !== o.top && (_ = o.left, o.left = o.top, o.top = _), o.width !== o.height && (_ = o.width, o.width = o.height, o.height = _)), h.length && (s = '<g transform="' + h.join(" ") + '">' + s + "</g>");
  });
  const r = i.width, c = i.height, l = o.width, a = o.height;
  let u, d;
  r === null ? (d = c === null ? "1em" : c === "auto" ? a : c, u = mt(d, l / a)) : (u = r === "auto" ? l : r, d = c === null ? mt(u, a / l) : c === "auto" ? a : c);
  const g = {}, b = (w, h) => {
    ce(h) || (g[w] = h.toString());
  };
  return b("width", u), b("height", d), g.viewBox = o.left.toString() + " " + o.top.toString() + " " + l.toString() + " " + a.toString(), {
    attributes: g,
    body: s
  };
}
const ae = /\sid="(\S+)"/g, ue = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let fe = 0;
function de(t, n = ue) {
  const e = [];
  let i;
  for (; i = ae.exec(t); )
    e.push(i[1]);
  if (!e.length)
    return t;
  const o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return e.forEach((s) => {
    const r = typeof n == "function" ? n(s) : n + (fe++).toString(), c = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    t = t.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + c + ')([")]|\\.[a-z])', "g"),
      "$1" + r + o + "$3"
    );
  }), t = t.replace(new RegExp(o, "g"), ""), t;
}
const Y = /* @__PURE__ */ Object.create(null);
function he(t, n) {
  Y[t] = n;
}
function Z(t) {
  return Y[t] || Y[""];
}
function rt(t) {
  let n;
  if (typeof t.resources == "string")
    n = [t.resources];
  else if (n = t.resources, !(n instanceof Array) || !n.length)
    return null;
  return {
    // API hosts
    resources: n,
    // Root path
    path: t.path || "/",
    // URL length limit
    maxURL: t.maxURL || 500,
    // Timeout before next host is used.
    rotate: t.rotate || 750,
    // Timeout before failing query.
    timeout: t.timeout || 5e3,
    // Randomise default API end point.
    random: t.random === !0,
    // Start index
    index: t.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: t.dataAfterTimeout !== !1
  };
}
const ct = /* @__PURE__ */ Object.create(null), T = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], D = [];
for (; T.length > 0; )
  T.length === 1 || Math.random() > 0.5 ? D.push(T.shift()) : D.push(T.pop());
ct[""] = rt({
  resources: ["https://api.iconify.design"].concat(D)
});
function pe(t, n) {
  const e = rt(n);
  return e === null ? !1 : (ct[t] = e, !0);
}
function lt(t) {
  return ct[t];
}
const ge = () => {
  let t;
  try {
    if (t = fetch, typeof t == "function")
      return t;
  } catch {
  }
};
let yt = ge();
function me(t, n) {
  const e = lt(t);
  if (!e)
    return 0;
  let i;
  if (!e.maxURL)
    i = 0;
  else {
    let o = 0;
    e.resources.forEach((r) => {
      o = Math.max(o, r.length);
    });
    const s = n + ".json?icons=";
    i = e.maxURL - o - e.path.length - s.length;
  }
  return i;
}
function ye(t) {
  return t === 404;
}
const be = (t, n, e) => {
  const i = [], o = me(t, n), s = "icons";
  let r = {
    type: s,
    provider: t,
    prefix: n,
    icons: []
  }, c = 0;
  return e.forEach((l, a) => {
    c += l.length + 1, c >= o && a > 0 && (i.push(r), r = {
      type: s,
      provider: t,
      prefix: n,
      icons: []
    }, c = l.length), r.icons.push(l);
  }), i.push(r), i;
};
function xe(t) {
  if (typeof t == "string") {
    const n = lt(t);
    if (n)
      return n.path;
  }
  return "/";
}
const _e = (t, n, e) => {
  if (!yt) {
    e("abort", 424);
    return;
  }
  let i = xe(n.provider);
  switch (n.type) {
    case "icons": {
      const s = n.prefix, c = n.icons.join(","), l = new URLSearchParams({
        icons: c
      });
      i += s + ".json?" + l.toString();
      break;
    }
    case "custom": {
      const s = n.uri;
      i += s.slice(0, 1) === "/" ? s.slice(1) : s;
      break;
    }
    default:
      e("abort", 400);
      return;
  }
  let o = 503;
  yt(t + i).then((s) => {
    const r = s.status;
    if (r !== 200) {
      setTimeout(() => {
        e(ye(r) ? "abort" : "next", r);
      });
      return;
    }
    return o = 501, s.json();
  }).then((s) => {
    if (typeof s != "object" || s === null) {
      setTimeout(() => {
        s === 404 ? e("abort", s) : e("next", o);
      });
      return;
    }
    setTimeout(() => {
      e("success", s);
    });
  }).catch(() => {
    e("next", o);
  });
}, Ie = {
  prepare: be,
  send: _e
};
function we(t) {
  const n = {
    loaded: [],
    missing: [],
    pending: []
  }, e = /* @__PURE__ */ Object.create(null);
  t.sort((o, s) => o.provider !== s.provider ? o.provider.localeCompare(s.provider) : o.prefix !== s.prefix ? o.prefix.localeCompare(s.prefix) : o.name.localeCompare(s.name));
  let i = {
    provider: "",
    prefix: "",
    name: ""
  };
  return t.forEach((o) => {
    if (i.name === o.name && i.prefix === o.prefix && i.provider === o.provider)
      return;
    i = o;
    const s = o.provider, r = o.prefix, c = o.name, l = e[s] || (e[s] = /* @__PURE__ */ Object.create(null)), a = l[r] || (l[r] = k(s, r));
    let u;
    c in a.icons ? u = n.loaded : r === "" || a.missing.has(c) ? u = n.missing : u = n.pending;
    const d = {
      provider: s,
      prefix: r,
      name: c
    };
    u.push(d);
  }), n;
}
function Ft(t, n) {
  t.forEach((e) => {
    const i = e.loaderCallbacks;
    i && (e.loaderCallbacks = i.filter((o) => o.id !== n));
  });
}
function ve(t) {
  t.pendingCallbacksFlag || (t.pendingCallbacksFlag = !0, setTimeout(() => {
    t.pendingCallbacksFlag = !1;
    const n = t.loaderCallbacks ? t.loaderCallbacks.slice(0) : [];
    if (!n.length)
      return;
    let e = !1;
    const i = t.provider, o = t.prefix;
    n.forEach((s) => {
      const r = s.icons, c = r.pending.length;
      r.pending = r.pending.filter((l) => {
        if (l.prefix !== o)
          return !0;
        const a = l.name;
        if (t.icons[a])
          r.loaded.push({
            provider: i,
            prefix: o,
            name: a
          });
        else if (t.missing.has(a))
          r.missing.push({
            provider: i,
            prefix: o,
            name: a
          });
        else
          return e = !0, !0;
        return !1;
      }), r.pending.length !== c && (e || Ft([t], s.id), s.callback(
        r.loaded.slice(0),
        r.missing.slice(0),
        r.pending.slice(0),
        s.abort
      ));
    });
  }));
}
let Se = 0;
function Ce(t, n, e) {
  const i = Se++, o = Ft.bind(null, e, i);
  if (!n.pending.length)
    return o;
  const s = {
    id: i,
    icons: n,
    callback: t,
    abort: o
  };
  return e.forEach((r) => {
    (r.loaderCallbacks || (r.loaderCallbacks = [])).push(s);
  }), o;
}
function ke(t, n = !0, e = !1) {
  const i = [];
  return t.forEach((o) => {
    const s = typeof o == "string" ? z(o, n, e) : o;
    s && i.push(s);
  }), i;
}
var Le = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function Pe(t, n, e, i) {
  const o = t.resources.length, s = t.random ? Math.floor(Math.random() * o) : t.index;
  let r;
  if (t.random) {
    let p = t.resources.slice(0);
    for (r = []; p.length > 1; ) {
      const v = Math.floor(Math.random() * p.length);
      r.push(p[v]), p = p.slice(0, v).concat(p.slice(v + 1));
    }
    r = r.concat(p);
  } else
    r = t.resources.slice(s).concat(t.resources.slice(0, s));
  const c = Date.now();
  let l = "pending", a = 0, u, d = null, g = [], b = [];
  typeof i == "function" && b.push(i);
  function w() {
    d && (clearTimeout(d), d = null);
  }
  function h() {
    l === "pending" && (l = "aborted"), w(), g.forEach((p) => {
      p.status === "pending" && (p.status = "aborted");
    }), g = [];
  }
  function f(p, v) {
    v && (b = []), typeof p == "function" && b.push(p);
  }
  function S() {
    return {
      startTime: c,
      payload: n,
      status: l,
      queriesSent: a,
      queriesPending: g.length,
      subscribe: f,
      abort: h
    };
  }
  function x() {
    l = "failed", b.forEach((p) => {
      p(void 0, u);
    });
  }
  function _() {
    g.forEach((p) => {
      p.status === "pending" && (p.status = "aborted");
    }), g = [];
  }
  function qt(p, v, L) {
    const F = v !== "success";
    switch (g = g.filter((C) => C !== p), l) {
      case "pending":
        break;
      case "failed":
        if (F || !t.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (v === "abort") {
      u = L, x();
      return;
    }
    if (F) {
      u = L, g.length || (r.length ? U() : x());
      return;
    }
    if (w(), _(), !t.random) {
      const C = t.resources.indexOf(p.resource);
      C !== -1 && C !== t.index && (t.index = C);
    }
    l = "completed", b.forEach((C) => {
      C(L);
    });
  }
  function U() {
    if (l !== "pending")
      return;
    w();
    const p = r.shift();
    if (p === void 0) {
      if (g.length) {
        d = setTimeout(() => {
          w(), l === "pending" && (_(), x());
        }, t.timeout);
        return;
      }
      x();
      return;
    }
    const v = {
      status: "pending",
      resource: p,
      callback: (L, F) => {
        qt(v, L, F);
      }
    };
    g.push(v), a++, d = setTimeout(U, t.rotate), e(p, n, v.callback);
  }
  return setTimeout(U), S;
}
function Bt(t) {
  const n = {
    ...Le,
    ...t
  };
  let e = [];
  function i() {
    e = e.filter((c) => c().status === "pending");
  }
  function o(c, l, a) {
    const u = Pe(
      n,
      c,
      l,
      (d, g) => {
        i(), a && a(d, g);
      }
    );
    return e.push(u), u;
  }
  function s(c) {
    return e.find((l) => c(l)) || null;
  }
  return {
    query: o,
    find: s,
    setIndex: (c) => {
      n.index = c;
    },
    getIndex: () => n.index,
    cleanup: i
  };
}
function bt() {
}
const J = /* @__PURE__ */ Object.create(null);
function Te(t) {
  if (!J[t]) {
    const n = lt(t);
    if (!n)
      return;
    const e = Bt(n), i = {
      config: n,
      redundancy: e
    };
    J[t] = i;
  }
  return J[t];
}
function je(t, n, e) {
  let i, o;
  if (typeof t == "string") {
    const s = Z(t);
    if (!s)
      return e(void 0, 424), bt;
    o = s.send;
    const r = Te(t);
    r && (i = r.redundancy);
  } else {
    const s = rt(t);
    if (s) {
      i = Bt(s);
      const r = t.resources ? t.resources[0] : "", c = Z(r);
      c && (o = c.send);
    }
  }
  return !i || !o ? (e(void 0, 424), bt) : i.query(n, o, e)().abort;
}
const xt = "iconify2", A = "iconify", Ot = A + "-count", _t = A + "-version", Dt = 36e5, Ee = 168;
function $(t, n) {
  try {
    return t.getItem(n);
  } catch {
  }
}
function at(t, n, e) {
  try {
    return t.setItem(n, e), !0;
  } catch {
  }
}
function It(t, n) {
  try {
    t.removeItem(n);
  } catch {
  }
}
function tt(t, n) {
  return at(t, Ot, n.toString());
}
function et(t) {
  return parseInt($(t, Ot)) || 0;
}
const Q = {
  local: !0,
  session: !0
}, Nt = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let ut = !1;
function Me(t) {
  ut = t;
}
let B = typeof window > "u" ? {} : window;
function Rt(t) {
  const n = t + "Storage";
  try {
    if (B && B[n] && typeof B[n].length == "number")
      return B[n];
  } catch {
  }
  Q[t] = !1;
}
function Vt(t, n) {
  const e = Rt(t);
  if (!e)
    return;
  const i = $(e, _t);
  if (i !== xt) {
    if (i) {
      const c = et(e);
      for (let l = 0; l < c; l++)
        It(e, A + l.toString());
    }
    at(e, _t, xt), tt(e, 0);
    return;
  }
  const o = Math.floor(Date.now() / Dt) - Ee, s = (c) => {
    const l = A + c.toString(), a = $(e, l);
    if (typeof a == "string") {
      try {
        const u = JSON.parse(a);
        if (typeof u == "object" && typeof u.cached == "number" && u.cached > o && typeof u.provider == "string" && typeof u.data == "object" && typeof u.data.prefix == "string" && // Valid item: run callback
        n(u, c))
          return !0;
      } catch {
      }
      It(e, l);
    }
  };
  let r = et(e);
  for (let c = r - 1; c >= 0; c--)
    s(c) || (c === r - 1 ? (r--, tt(e, r)) : Nt[t].add(c));
}
function zt() {
  if (!ut) {
    Me(!0);
    for (const t in Q)
      Vt(t, (n) => {
        const e = n.data, i = n.provider, o = e.prefix, s = k(
          i,
          o
        );
        if (!st(s, e).length)
          return !1;
        const r = e.lastModified || -1;
        return s.lastModifiedCached = s.lastModifiedCached ? Math.min(s.lastModifiedCached, r) : r, !0;
      });
  }
}
function Ae(t, n) {
  const e = t.lastModifiedCached;
  if (
    // Matches or newer
    e && e >= n
  )
    return e === n;
  if (t.lastModifiedCached = n, e)
    for (const i in Q)
      Vt(i, (o) => {
        const s = o.data;
        return o.provider !== t.provider || s.prefix !== t.prefix || s.lastModified === n;
      });
  return !0;
}
function Fe(t, n) {
  ut || zt();
  function e(i) {
    let o;
    if (!Q[i] || !(o = Rt(i)))
      return;
    const s = Nt[i];
    let r;
    if (s.size)
      s.delete(r = Array.from(s).shift());
    else if (r = et(o), !tt(o, r + 1))
      return;
    const c = {
      cached: Math.floor(Date.now() / Dt),
      provider: t.provider,
      data: n
    };
    return at(
      o,
      A + r.toString(),
      JSON.stringify(c)
    );
  }
  n.lastModified && !Ae(t, n.lastModified) || Object.keys(n.icons).length && (n.not_found && (n = Object.assign({}, n), delete n.not_found), e("local") || e("session"));
}
function wt() {
}
function Be(t) {
  t.iconsLoaderFlag || (t.iconsLoaderFlag = !0, setTimeout(() => {
    t.iconsLoaderFlag = !1, ve(t);
  }));
}
function Oe(t, n) {
  t.iconsToLoad ? t.iconsToLoad = t.iconsToLoad.concat(n).sort() : t.iconsToLoad = n, t.iconsQueueFlag || (t.iconsQueueFlag = !0, setTimeout(() => {
    t.iconsQueueFlag = !1;
    const { provider: e, prefix: i } = t, o = t.iconsToLoad;
    delete t.iconsToLoad;
    let s;
    if (!o || !(s = Z(e)))
      return;
    s.prepare(e, i, o).forEach((c) => {
      je(e, c, (l) => {
        if (typeof l != "object")
          c.icons.forEach((a) => {
            t.missing.add(a);
          });
        else
          try {
            const a = st(
              t,
              l
            );
            if (!a.length)
              return;
            const u = t.pendingIcons;
            u && a.forEach((d) => {
              u.delete(d);
            }), Fe(t, l);
          } catch (a) {
            console.error(a);
          }
        Be(t);
      });
    });
  }));
}
const De = (t, n) => {
  const e = ke(t, !0, Et()), i = we(e);
  if (!i.pending.length) {
    let l = !0;
    return n && setTimeout(() => {
      l && n(
        i.loaded,
        i.missing,
        i.pending,
        wt
      );
    }), () => {
      l = !1;
    };
  }
  const o = /* @__PURE__ */ Object.create(null), s = [];
  let r, c;
  return i.pending.forEach((l) => {
    const { provider: a, prefix: u } = l;
    if (u === c && a === r)
      return;
    r = a, c = u, s.push(k(a, u));
    const d = o[a] || (o[a] = /* @__PURE__ */ Object.create(null));
    d[u] || (d[u] = []);
  }), i.pending.forEach((l) => {
    const { provider: a, prefix: u, name: d } = l, g = k(a, u), b = g.pendingIcons || (g.pendingIcons = /* @__PURE__ */ new Set());
    b.has(d) || (b.add(d), o[a][u].push(d));
  }), s.forEach((l) => {
    const { provider: a, prefix: u } = l;
    o[a][u].length && Oe(l, o[a][u]);
  }), n ? Ce(n, i, s) : wt;
};
function Ne(t, n) {
  const e = {
    ...t
  };
  for (const i in n) {
    const o = n[i], s = typeof o;
    i in Mt ? (o === null || o && (s === "string" || s === "number")) && (e[i] = o) : s === typeof e[i] && (e[i] = i === "rotate" ? o % 4 : o);
  }
  return e;
}
const Re = /[\s,]+/;
function Ve(t, n) {
  n.split(Re).forEach((e) => {
    switch (e.trim()) {
      case "horizontal":
        t.hFlip = !0;
        break;
      case "vertical":
        t.vFlip = !0;
        break;
    }
  });
}
function ze(t, n = 0) {
  const e = t.replace(/^-?[0-9.]*/, "");
  function i(o) {
    for (; o < 0; )
      o += 4;
    return o % 4;
  }
  if (e === "") {
    const o = parseInt(t);
    return isNaN(o) ? 0 : i(o);
  } else if (e !== t) {
    let o = 0;
    switch (e) {
      case "%":
        o = 25;
        break;
      case "deg":
        o = 90;
    }
    if (o) {
      let s = parseFloat(t.slice(0, t.length - e.length));
      return isNaN(s) ? 0 : (s = s / o, s % 1 === 0 ? i(s) : 0);
    }
  }
  return n;
}
function He(t, n) {
  let e = t.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const i in n)
    e += " " + i + '="' + n[i] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + e + ">" + t + "</svg>";
}
function Qe(t) {
  return t.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function qe(t) {
  return "data:image/svg+xml," + Qe(t);
}
function Ue(t) {
  return 'url("' + qe(t) + '")';
}
const vt = {
  ...At,
  inline: !1
}, Ke = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Ge = {
  display: "inline-block"
}, nt = {
  backgroundColor: "currentColor"
}, Ht = {
  backgroundColor: "transparent"
}, St = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, Ct = {
  webkitMask: nt,
  mask: nt,
  background: Ht
};
for (const t in Ct) {
  const n = Ct[t];
  for (const e in St)
    n[t + e] = St[e];
}
const N = {};
["horizontal", "vertical"].forEach((t) => {
  const n = t.slice(0, 1) + "Flip";
  N[t + "-flip"] = n, N[t.slice(0, 1) + "-flip"] = n, N[t + "Flip"] = n;
});
function kt(t) {
  return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
}
const Lt = (t, n) => {
  const e = Ne(vt, n), i = { ...Ke }, o = n.mode || "svg", s = {}, r = n.style, c = typeof r == "object" && !(r instanceof Array) ? r : {};
  for (let h in n) {
    const f = n[h];
    if (f !== void 0)
      switch (h) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          e[h] = f === !0 || f === "true" || f === 1;
          break;
        case "flip":
          typeof f == "string" && Ve(e, f);
          break;
        case "color":
          s.color = f;
          break;
        case "rotate":
          typeof f == "string" ? e[h] = ze(f) : typeof f == "number" && (e[h] = f);
          break;
        case "ariaHidden":
        case "aria-hidden":
          f !== !0 && f !== "true" && delete i["aria-hidden"];
          break;
        default: {
          const S = N[h];
          S ? (f === !0 || f === "true" || f === 1) && (e[S] = !0) : vt[h] === void 0 && (i[h] = f);
        }
      }
  }
  const l = le(t, e), a = l.attributes;
  if (e.inline && (s.verticalAlign = "-0.125em"), o === "svg") {
    i.style = {
      ...s,
      ...c
    }, Object.assign(i, a);
    let h = 0, f = n.id;
    return typeof f == "string" && (f = f.replace(/-/g, "_")), i.innerHTML = de(l.body, f ? () => f + "ID" + h++ : "iconifyVue"), ft("svg", i);
  }
  const { body: u, width: d, height: g } = t, b = o === "mask" || (o === "bg" ? !1 : u.indexOf("currentColor") !== -1), w = He(u, {
    ...a,
    width: d + "",
    height: g + ""
  });
  return i.style = {
    ...s,
    "--svg": Ue(w),
    width: kt(a.width),
    height: kt(a.height),
    ...Ge,
    ...b ? nt : Ht,
    ...c
  }, ft("span", i);
};
Et(!0);
he("", Ie);
if (typeof document < "u" && typeof window < "u") {
  zt();
  const t = window;
  if (t.IconifyPreload !== void 0) {
    const n = t.IconifyPreload, e = "Invalid IconifyPreload syntax.";
    typeof n == "object" && n !== null && (n instanceof Array ? n : [n]).forEach((i) => {
      try {
        // Check if item is an object and not null/array
        (typeof i != "object" || i === null || i instanceof Array || // Check for 'icons' and 'prefix'
        typeof i.icons != "object" || typeof i.prefix != "string" || // Add icon set
        !ie(i)) && console.error(e);
      } catch {
        console.error(e);
      }
    });
  }
  if (t.IconifyProviders !== void 0) {
    const n = t.IconifyProviders;
    if (typeof n == "object" && n !== null)
      for (let e in n) {
        const i = "IconifyProviders[" + e + "] is invalid.";
        try {
          const o = n[e];
          if (typeof o != "object" || !o || o.resources === void 0)
            continue;
          pe(e, o) || console.error(i);
        } catch {
          console.error(i);
        }
      }
  }
}
const Je = {
  ...H,
  body: ""
}, We = Ut({
  // Do not inherit other attributes: it is handled by render()
  inheritAttrs: !1,
  // Set initial data
  data() {
    return {
      // Mounted status
      iconMounted: !1,
      // Callback counter to trigger re-render
      counter: 0
    };
  },
  mounted() {
    this._name = "", this._loadingIcon = null, this.iconMounted = !0;
  },
  unmounted() {
    this.abortLoading();
  },
  methods: {
    abortLoading() {
      this._loadingIcon && (this._loadingIcon.abort(), this._loadingIcon = null);
    },
    // Get data for icon to render or null
    getIcon(t, n) {
      if (typeof t == "object" && t !== null && typeof t.body == "string")
        return this._name = "", this.abortLoading(), {
          data: t
        };
      let e;
      if (typeof t != "string" || (e = z(t, !1, !0)) === null)
        return this.abortLoading(), null;
      const i = ne(e);
      if (!i)
        return (!this._loadingIcon || this._loadingIcon.name !== t) && (this.abortLoading(), this._name = "", i !== null && (this._loadingIcon = {
          name: t,
          abort: De([e], () => {
            this.counter++;
          })
        })), null;
      this.abortLoading(), this._name !== t && (this._name = t, n && n(t));
      const o = ["iconify"];
      return e.prefix !== "" && o.push("iconify--" + e.prefix), e.provider !== "" && o.push("iconify--" + e.provider), { data: i, classes: o };
    }
  },
  // Render icon
  render() {
    this.counter;
    const t = this.$attrs, n = this.iconMounted ? this.getIcon(t.icon, t.onLoad) : null;
    if (!n)
      return Lt(Je, t);
    let e = t;
    return n.classes && (e = {
      ...t,
      class: (typeof t.class == "string" ? t.class + " " : "") + n.classes.join(" ")
    }), Lt({
      ...H,
      ...n.data
    }, e);
  }
}), q = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [i, o] of n)
    e[i] = o;
  return e;
}, Xe = {
  name: "IconComponent",
  components: {
    Icon: We
  },
  props: {
    icon: {
      type: String,
      default: "heroicons-outline:home"
    }
  }
};
function Ye(t, n, e, i, o, s) {
  const r = j("icon", !0);
  return m(), y("span", null, [
    R(r, { icon: e.icon }, null, 8, ["icon"])
  ]);
}
const Ze = /* @__PURE__ */ q(Xe, [["render", Ye]]);
const $e = {
  name: "BtnIcon",
  components: {
    Icon: Ze
  },
  props: {
    isIconPositionRight: {
      type: Boolean,
      default: !1
    },
    isIconPositionLeft: {
      type: Boolean,
      default: !1
    },
    text: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: "heroicons-outline:home"
    },
    iconClass: {
      type: String,
      default: ""
    }
  }
}, tn = {
  key: 0,
  class: "btn-text"
}, en = ["dir"], nn = { key: 0 };
function on(t, n, e, i, o, s) {
  const r = j("icon");
  return e.icon ? (m(), y("span", tn, [
    ot("span", {
      class: it([
        e.iconClass,
        {
          "icon-position-right": e.isIconPositionRight,
          "icon-position-left": e.isIconPositionLeft && e.text
        }
      ]),
      dir: e.isIconPositionRight ? "right" : "left"
    }, [
      R(r, { icon: e.icon }, null, 8, ["icon"])
    ], 10, en),
    e.text ? (m(), y("span", nn, W(e.text), 1)) : I("", !0)
  ])) : I("", !0);
}
const sn = /* @__PURE__ */ q($e, [["render", on], ["__scopeId", "data-v-49170746"]]);
const rn = {
  name: "ButtonLoading",
  props: {
    loadingClass: {
      type: String,
      default: ""
    }
  }
}, Qt = (t) => (Kt("data-v-c4fc6a45"), t = t(), Gt(), t), cn = /* @__PURE__ */ Qt(() => /* @__PURE__ */ ot("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1)), ln = /* @__PURE__ */ Qt(() => /* @__PURE__ */ ot("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1)), an = [
  cn,
  ln
];
function un(t, n, e, i, o, s) {
  return m(), y("svg", {
    class: it(["animate-spin ltr:-ml-1 ltr:mr-3 rtl:-mr-1 rtl:ml-3 h-5 w-5", e.loadingClass]),
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, an, 2);
}
const fn = /* @__PURE__ */ q(rn, [["render", un], ["__scopeId", "data-v-c4fc6a45"]]);
const dn = {
  name: "VueButton",
  components: {
    BtnIcon: sn,
    BtnLoading: fn
  },
  props: {
    btnClass: {
      type: String,
      default: "vue-button"
    },
    isDisabled: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    },
    isDiv: {
      type: Boolean,
      default: !1
    },
    isLink: {
      type: Boolean,
      default: !1
    },
    iconPosition: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: "This is Button Text"
    },
    iconClass: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    loadingClass: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: ""
    }
  },
  computed: {
    iconPositionRight() {
      return this.iconPosition === "right";
    },
    iconPositionLeft() {
      return this.iconPosition === "left";
    },
    isButtonDefault() {
      return !this.isDiv && !this.isLink;
    },
    isContentAvailable() {
      return !this.isLoading && !this.$slots.default;
    },
    hasContentAndNotLoading() {
      return this.$slots.default && !this.isLoading;
    },
    isLinkEnabled() {
      return this.isLink && this.link;
    }
  },
  methods: {
    onClick() {
      this.$emit("on-click");
    }
  }
}, hn = ["disabled"], pn = { key: 1 }, gn = { key: 2 }, mn = { key: 1 }, yn = { key: 2 };
function bn(t, n, e, i, o, s) {
  const r = j("btn-icon"), c = j("btn-loading"), l = j("router-link");
  return m(), y(P, null, [
    s.isButtonDefault ? (m(), y("button", Jt({
      key: 0,
      class: [[e.btnClass, {
        "pointer-events-none": e.isLoading,
        "btn-disabled": e.isDisabled
      }], "btn-default"],
      disabled: e.isDisabled
    }, t.$attrs, {
      onClick: n[0] || (n[0] = (...a) => s.onClick && s.onClick(...a))
    }), [
      s.isContentAvailable ? (m(), y(P, { key: 0 }, [
        e.icon ? (m(), K(r, {
          key: 0,
          isIconPositionLeft: s.iconPositionLeft,
          isIconPositionRight: s.iconPositionRight,
          text: e.text,
          icon: e.icon,
          iconClass: e.iconClass
        }, null, 8, ["isIconPositionLeft", "isIconPositionRight", "text", "icon", "iconClass"])) : I("", !0),
        !e.icon && e.text ? (m(), y("span", pn, W(e.text), 1)) : I("", !0)
      ], 64)) : I("", !0),
      e.isLoading ? (m(), y(P, { key: 1 }, [
        R(c, { loadingClass: e.loadingClass }, null, 8, ["loadingClass"]),
        dt(" Loading ... ")
      ], 64)) : I("", !0),
      s.hasContentAndNotLoading ? (m(), y("div", gn, [
        ht(t.$slots, "default", {}, void 0, !0)
      ])) : I("", !0)
    ], 16, hn)) : I("", !0),
    s.isLinkEnabled ? (m(), K(l, {
      key: 1,
      to: e.link,
      class: it([[e.btnClass, {
        "pointer-events-none": e.isLoading,
        "btn-disabled": e.isDisabled
      }], "btn-default"])
    }, {
      default: Wt(() => [
        s.isContentAvailable ? (m(), y(P, { key: 0 }, [
          e.icon ? (m(), K(r, {
            key: 0,
            isIconPositionLeft: s.iconPositionLeft,
            isIconPositionRight: s.iconPositionRight,
            text: e.text,
            icon: e.icon,
            iconClass: e.iconClass
          }, null, 8, ["isIconPositionLeft", "isIconPositionRight", "text", "icon", "iconClass"])) : e.text && !e.icon ? (m(), y("span", mn, W(e.text), 1)) : I("", !0)
        ], 64)) : I("", !0),
        e.isLoading ? (m(), y(P, { key: 1 }, [
          R(c, { loadingClass: e.loadingClass }, null, 8, ["loadingClass"]),
          dt(" Loading ... ")
        ], 64)) : I("", !0),
        s.hasContentAndNotLoading ? (m(), y("div", yn, [
          ht(t.$slots, "default", {}, void 0, !0)
        ])) : I("", !0)
      ]),
      _: 3
    }, 8, ["to", "class"])) : I("", !0)
  ], 64);
}
const xn = /* @__PURE__ */ q(dn, [["render", bn], ["__scopeId", "data-v-1022a4d6"]]), In = {
  install: (t) => {
    t.component("vue-button", xn);
  }
};
export {
  In as default
};
