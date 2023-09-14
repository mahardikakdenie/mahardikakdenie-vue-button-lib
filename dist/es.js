function en(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const P = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, tn = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], ht = () => {
}, nn = /^on[^a-z]/, rn = (e) => nn.test(e), R = Object.assign, on = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, sn = Object.prototype.hasOwnProperty, m = (e, t) => sn.call(e, t), h = Array.isArray, Y = (e) => Ne(e) === "[object Map]", cn = (e) => Ne(e) === "[object Set]", N = (e) => typeof e == "function", C = (e) => typeof e == "string", Fe = (e) => typeof e == "symbol", S = (e) => e !== null && typeof e == "object", ln = (e) => S(e) && N(e.then) && N(e.catch), un = Object.prototype.toString, Ne = (e) => un.call(e), _t = (e) => Ne(e).slice(8, -1), an = (e) => Ne(e) === "[object Object]", Ae = (e) => C(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, fn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, pn = fn(
  (e) => e.charAt(0).toUpperCase() + e.slice(1)
), _e = (e, t) => !Object.is(e, t), dn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
};
let Xe;
const xe = () => Xe || (Xe = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function je(e) {
  if (h(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = C(o) ? mn(o) : je(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else {
    if (C(e))
      return e;
    if (S(e))
      return e;
  }
}
const hn = /;(?![^(]*\))/g, _n = /:([^]+)/, gn = /\/\*[^]*?\*\//g;
function mn(e) {
  const t = {};
  return e.replace(gn, "").split(hn).forEach((n) => {
    if (n) {
      const o = n.split(_n);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function ze(e) {
  let t = "";
  if (C(e))
    t = e;
  else if (h(e))
    for (let n = 0; n < e.length; n++) {
      const o = ze(e[n]);
      o && (t += o + " ");
    }
  else if (S(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Ze(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let gt;
function En(e, t = gt) {
  t && t.active && t.effects.push(e);
}
function wn() {
  return gt;
}
const ye = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, mt = (e) => (e.w & j) > 0, Et = (e) => (e.n & j) > 0, Nn = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= j;
}, bn = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      mt(r) && !Et(r) ? r.delete(e) : t[n++] = r, r.w &= ~j, r.n &= ~j;
    }
    t.length = n;
  }
}, Ie = /* @__PURE__ */ new WeakMap();
let k = 0, j = 1;
const Re = 30;
let b;
const H = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), $e = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class On {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, En(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = b, n = W;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = b, b = this, W = !0, j = 1 << ++k, k <= Re ? Nn(this) : ke(this), this.fn();
    } finally {
      k <= Re && bn(this), j = 1 << --k, b = this.parent, W = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    b === this ? this.deferStop = !0 : this.active && (ke(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function ke(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let W = !0;
const wt = [];
function Nt() {
  wt.push(W), W = !1;
}
function bt() {
  const e = wt.pop();
  W = e === void 0 ? !0 : e;
}
function V(e, t, n) {
  if (W && b) {
    let o = Ie.get(e);
    o || Ie.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = ye());
    const s = process.env.NODE_ENV !== "production" ? { effect: b, target: e, type: t, key: n } : void 0;
    Sn(r, s);
  }
}
function Sn(e, t) {
  let n = !1;
  k <= Re ? Et(e) || (e.n |= j, n = !mt(e)) : n = !e.has(b), n && (e.add(b), b.deps.push(e), process.env.NODE_ENV !== "production" && b.onTrack && b.onTrack(
    R(
      {
        effect: b
      },
      t
    )
  ));
}
function z(e, t, n, o, r, s) {
  const i = Ie.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && h(e)) {
    const a = Number(o);
    i.forEach((d, l) => {
      (l === "length" || l >= a) && c.push(d);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        h(e) ? Ae(n) && c.push(i.get("length")) : (c.push(i.get(H)), Y(e) && c.push(i.get($e)));
        break;
      case "delete":
        h(e) || (c.push(i.get(H)), Y(e) && c.push(i.get($e)));
        break;
      case "set":
        Y(e) && c.push(i.get(H));
        break;
    }
  const u = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0;
  if (c.length === 1)
    c[0] && (process.env.NODE_ENV !== "production" ? se(c[0], u) : se(c[0]));
  else {
    const a = [];
    for (const d of c)
      d && a.push(...d);
    process.env.NODE_ENV !== "production" ? se(ye(a), u) : se(ye(a));
  }
}
function se(e, t) {
  const n = h(e) ? e : [...e];
  for (const o of n)
    o.computed && et(o, t);
  for (const o of n)
    o.computed || et(o, t);
}
function et(e, t) {
  (e !== b || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(R({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const Vn = /* @__PURE__ */ en("__proto__,__v_isRef,__isVue"), Ot = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Fe)
), vn = /* @__PURE__ */ Ke(), xn = /* @__PURE__ */ Ke(!0), yn = /* @__PURE__ */ Ke(!0, !0), tt = /* @__PURE__ */ In();
function In() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = p(this);
      for (let s = 0, i = this.length; s < i; s++)
        V(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(p)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Nt();
      const o = p(this)[t].apply(this, n);
      return bt(), o;
    };
  }), e;
}
function Rn(e) {
  const t = p(this);
  return V(t, "has", e), t.hasOwnProperty(e);
}
function Ke(e = !1, t = !1) {
  return function(o, r, s) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && s === (e ? t ? yt : xt : t ? Jn : vt).get(o))
      return o;
    const i = h(o);
    if (!e) {
      if (i && m(tt, r))
        return Reflect.get(tt, r, s);
      if (r === "hasOwnProperty")
        return Rn;
    }
    const c = Reflect.get(o, r, s);
    return (Fe(r) ? Ot.has(r) : Vn(r)) || (e || V(o, "get", r), t) ? c : O(c) ? i && Ae(r) ? c : c.value : S(c) ? e ? Rt(c) : It(c) : c;
  };
}
const $n = /* @__PURE__ */ Dn();
function Dn(e = !1) {
  return function(n, o, r, s) {
    let i = n[o];
    if (q(i) && O(i) && !O(r))
      return !1;
    if (!e && (!De(r) && !q(r) && (i = p(i), r = p(r)), !h(n) && O(i) && !O(r)))
      return i.value = r, !0;
    const c = h(n) && Ae(o) ? Number(o) < n.length : m(n, o), u = Reflect.set(n, o, r, s);
    return n === p(s) && (c ? _e(r, i) && z(n, "set", o, r, i) : z(n, "add", o, r)), u;
  };
}
function Cn(e, t) {
  const n = m(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && z(e, "delete", t, void 0, o), r;
}
function Tn(e, t) {
  const n = Reflect.has(e, t);
  return (!Fe(t) || !Ot.has(t)) && V(e, "has", t), n;
}
function Pn(e) {
  return V(e, "iterate", h(e) ? "length" : H), Reflect.ownKeys(e);
}
const Mn = {
  get: vn,
  set: $n,
  deleteProperty: Cn,
  has: Tn,
  ownKeys: Pn
}, St = {
  get: xn,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && Ze(
      `Set operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && Ze(
      `Delete operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  }
}, Fn = /* @__PURE__ */ R(
  {},
  St,
  {
    get: yn
  }
), He = (e) => e, be = (e) => Reflect.getPrototypeOf(e);
function ie(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = p(e), s = p(t);
  n || (t !== s && V(r, "get", t), V(r, "get", s));
  const { has: i } = be(r), c = o ? He : n ? Je : Be;
  if (i.call(r, t))
    return c(e.get(t));
  if (i.call(r, s))
    return c(e.get(s));
  e !== r && e.get(t);
}
function ce(e, t = !1) {
  const n = this.__v_raw, o = p(n), r = p(e);
  return t || (e !== r && V(o, "has", e), V(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function le(e, t = !1) {
  return e = e.__v_raw, !t && V(p(e), "iterate", H), Reflect.get(e, "size", e);
}
function nt(e) {
  e = p(e);
  const t = p(this);
  return be(t).has.call(t, e) || (t.add(e), z(t, "add", e, e)), this;
}
function rt(e, t) {
  t = p(t);
  const n = p(this), { has: o, get: r } = be(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && Vt(n, o, e) : (e = p(e), s = o.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), s ? _e(t, i) && z(n, "set", e, t, i) : z(n, "add", e, t), this;
}
function ot(e) {
  const t = p(this), { has: n, get: o } = be(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && Vt(t, n, e) : (e = p(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, i = t.delete(e);
  return r && z(t, "delete", e, void 0, s), i;
}
function st() {
  const e = p(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? Y(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && z(e, "clear", void 0, void 0, n), o;
}
function ue(e, t) {
  return function(o, r) {
    const s = this, i = s.__v_raw, c = p(i), u = t ? He : e ? Je : Be;
    return !e && V(c, "iterate", H), i.forEach((a, d) => o.call(r, u(a), u(d), s));
  };
}
function ae(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = p(r), i = Y(s), c = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, a = r[e](...o), d = n ? He : t ? Je : Be;
    return !t && V(
      s,
      "iterate",
      u ? $e : H
    ), {
      // iterator protocol
      next() {
        const { value: l, done: f } = a.next();
        return f ? { value: l, done: f } : {
          value: c ? [d(l[0]), d(l[1])] : d(l),
          done: f
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function M(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${pn(e)} operation ${n}failed: target is readonly.`,
        p(this)
      );
    }
    return e === "delete" ? !1 : this;
  };
}
function An() {
  const e = {
    get(s) {
      return ie(this, s);
    },
    get size() {
      return le(this);
    },
    has: ce,
    add: nt,
    set: rt,
    delete: ot,
    clear: st,
    forEach: ue(!1, !1)
  }, t = {
    get(s) {
      return ie(this, s, !1, !0);
    },
    get size() {
      return le(this);
    },
    has: ce,
    add: nt,
    set: rt,
    delete: ot,
    clear: st,
    forEach: ue(!1, !0)
  }, n = {
    get(s) {
      return ie(this, s, !0);
    },
    get size() {
      return le(this, !0);
    },
    has(s) {
      return ce.call(this, s, !0);
    },
    add: M("add"),
    set: M("set"),
    delete: M("delete"),
    clear: M("clear"),
    forEach: ue(!0, !1)
  }, o = {
    get(s) {
      return ie(this, s, !0, !0);
    },
    get size() {
      return le(this, !0);
    },
    has(s) {
      return ce.call(this, s, !0);
    },
    add: M("add"),
    set: M("set"),
    delete: M("delete"),
    clear: M("clear"),
    forEach: ue(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = ae(
      s,
      !1,
      !1
    ), n[s] = ae(
      s,
      !0,
      !1
    ), t[s] = ae(
      s,
      !1,
      !0
    ), o[s] = ae(
      s,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    o
  ];
}
const [
  jn,
  zn,
  Kn,
  Hn
] = /* @__PURE__ */ An();
function We(e, t) {
  const n = t ? e ? Hn : Kn : e ? zn : jn;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    m(n, r) && r in o ? n : o,
    r,
    s
  );
}
const Wn = {
  get: /* @__PURE__ */ We(!1, !1)
}, Un = {
  get: /* @__PURE__ */ We(!0, !1)
}, Bn = {
  get: /* @__PURE__ */ We(!0, !0)
};
function Vt(e, t, n) {
  const o = p(n);
  if (o !== n && t.call(e, o)) {
    const r = _t(e);
    console.warn(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const vt = /* @__PURE__ */ new WeakMap(), Jn = /* @__PURE__ */ new WeakMap(), xt = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakMap();
function qn(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Gn(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : qn(_t(e));
}
function It(e) {
  return q(e) ? e : Ue(
    e,
    !1,
    Mn,
    Wn,
    vt
  );
}
function Rt(e) {
  return Ue(
    e,
    !0,
    St,
    Un,
    xt
  );
}
function fe(e) {
  return Ue(
    e,
    !0,
    Fn,
    Bn,
    yt
  );
}
function Ue(e, t, n, o, r) {
  if (!S(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const i = Gn(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? o : n
  );
  return r.set(e, c), c;
}
function U(e) {
  return q(e) ? U(e.__v_raw) : !!(e && e.__v_isReactive);
}
function q(e) {
  return !!(e && e.__v_isReadonly);
}
function De(e) {
  return !!(e && e.__v_isShallow);
}
function Ce(e) {
  return U(e) || q(e);
}
function p(e) {
  const t = e && e.__v_raw;
  return t ? p(t) : e;
}
function Ln(e) {
  return dn(e, "__v_skip", !0), e;
}
const Be = (e) => S(e) ? It(e) : e, Je = (e) => S(e) ? Rt(e) : e;
function O(e) {
  return !!(e && e.__v_isRef === !0);
}
function Yn(e) {
  return O(e) ? e.value : e;
}
const Qn = {
  get: (e, t, n) => Yn(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return O(r) && !O(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Xn(e) {
  return U(e) ? e : new Proxy(e, Qn);
}
const B = [];
function Zn(e) {
  B.push(e);
}
function kn() {
  B.pop();
}
function E(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  Nt();
  const n = B.length ? B[B.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = er();
  if (o)
    J(
      o,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        r.map(
          ({ vnode: s }) => `at <${Qt(n, s.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...tr(r)), console.warn(...s);
  }
  bt();
}
function er() {
  let e = B[B.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function tr(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...nr(n));
  }), t;
}
function nr({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${Qt(
    e.component,
    e.type,
    o
  )}`, s = ">" + n;
  return e.props ? [r, ...rr(e.props), s] : [r + s];
}
function rr(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...$t(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function $t(e, t, n) {
  return C(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : O(t) ? (t = $t(e, p(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : N(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = p(t), n ? t : [`${e}=`, t]);
}
const Dt = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function J(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (s) {
    Ct(s, t, n);
  }
  return r;
}
function Te(e, t, n, o) {
  if (N(e)) {
    const s = J(e, t, n, o);
    return s && ln(s) && s.catch((i) => {
      Ct(i, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(Te(e[s], t, n, o));
  return r;
}
function Ct(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, c = process.env.NODE_ENV !== "production" ? Dt[n] : n;
    for (; s; ) {
      const a = s.ec;
      if (a) {
        for (let d = 0; d < a.length; d++)
          if (a[d](e, i, c) === !1)
            return;
      }
      s = s.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      J(
        u,
        null,
        10,
        [e, i, c]
      );
      return;
    }
  }
  or(e, n, r, o);
}
function or(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = Dt[t];
    if (n && Zn(n), E(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && kn(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let ge = !1, Pe = !1;
const $ = [];
let A = 0;
const Q = [];
let T = null, F = 0;
const Tt = /* @__PURE__ */ Promise.resolve();
let qe = null;
const sr = 100;
function ir(e) {
  const t = qe || Tt;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function cr(e) {
  let t = A + 1, n = $.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    re($[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function Ge(e) {
  (!$.length || !$.includes(
    e,
    ge && e.allowRecurse ? A + 1 : A
  )) && (e.id == null ? $.push(e) : $.splice(cr(e.id), 0, e), Pt());
}
function Pt() {
  !ge && !Pe && (Pe = !0, qe = Tt.then(Ft));
}
function Mt(e) {
  h(e) ? Q.push(...e) : (!T || !T.includes(
    e,
    e.allowRecurse ? F + 1 : F
  )) && Q.push(e), Pt();
}
function lr(e) {
  if (Q.length) {
    const t = [...new Set(Q)];
    if (Q.length = 0, T) {
      T.push(...t);
      return;
    }
    for (T = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), T.sort((n, o) => re(n) - re(o)), F = 0; F < T.length; F++)
      process.env.NODE_ENV !== "production" && At(e, T[F]) || T[F]();
    T = null, F = 0;
  }
}
const re = (e) => e.id == null ? 1 / 0 : e.id, ur = (e, t) => {
  const n = re(e) - re(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Ft(e) {
  Pe = !1, ge = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), $.sort(ur);
  const t = process.env.NODE_ENV !== "production" ? (n) => At(e, n) : ht;
  try {
    for (A = 0; A < $.length; A++) {
      const n = $[A];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        J(n, null, 14);
      }
    }
  } finally {
    A = 0, $.length = 0, lr(e), ge = !1, qe = null, ($.length || Q.length) && Ft(e);
  }
}
function At(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > sr) {
      const o = t.ownerInstance, r = o && Yt(o.type);
      return E(
        `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const Z = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (xe().__VUE_HMR_RUNTIME__ = {
  createRecord: Se(ar),
  rerender: Se(fr),
  reload: Se(pr)
});
const me = /* @__PURE__ */ new Map();
function ar(e, t) {
  return me.has(e) ? !1 : (me.set(e, {
    initialDef: te(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function te(e) {
  return Xt(e) ? e.__vccOpts : e;
}
function fr(e, t) {
  const n = me.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, te(o.type).render = t), o.renderCache = [], o.update();
  }));
}
function pr(e, t) {
  const n = me.get(e);
  if (!n)
    return;
  t = te(t), it(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = te(r.type);
    Z.has(s) || (s !== n.initialDef && it(s, t), Z.add(s)), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (Z.add(s), r.ceReload(t.styles), Z.delete(s)) : r.parent ? Ge(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Mt(() => {
    for (const r of o)
      Z.delete(
        te(r.type)
      );
  });
}
function it(e, t) {
  R(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Se(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let I = null, dr = null;
const hr = (e) => e.__isSuspense;
function _r(e, t) {
  t && t.pendingBranch ? h(e) ? t.effects.push(...e) : t.effects.push(e) : Mt(e);
}
const pe = {};
function gr(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: i } = P) {
  var c;
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && E(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && E(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const u = (g) => {
    E(
      "Invalid watch source: ",
      g,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, a = wn() === ((c = X) == null ? void 0 : c.scope) ? X : null;
  let d, l = !1, f = !1;
  if (O(e) ? (d = () => e.value, l = De(e)) : U(e) ? (d = () => e, o = !0) : h(e) ? (f = !0, l = e.some((g) => U(g) || De(g)), d = () => e.map((g) => {
    if (O(g))
      return g.value;
    if (U(g))
      return L(g);
    if (N(g))
      return J(g, a, 2);
    process.env.NODE_ENV !== "production" && u(g);
  })) : N(e) ? t ? d = () => J(e, a, 2) : d = () => {
    if (!(a && a.isUnmounted))
      return _ && _(), Te(
        e,
        a,
        3,
        [v]
      );
  } : (d = ht, process.env.NODE_ENV !== "production" && u(e)), t && o) {
    const g = d;
    d = () => L(g());
  }
  let _, v = (g) => {
    _ = y.onStop = () => {
      J(g, a, 4);
    };
  }, x = f ? new Array(e.length).fill(pe) : pe;
  const K = () => {
    if (y.active)
      if (t) {
        const g = y.run();
        (o || l || (f ? g.some(
          (Zt, kt) => _e(Zt, x[kt])
        ) : _e(g, x))) && (_ && _(), Te(t, a, 3, [
          g,
          // pass undefined as the old value when it's changed for the first time
          x === pe ? void 0 : f && x[0] === pe ? [] : x,
          v
        ]), x = g);
      } else
        y.run();
  };
  K.allowRecurse = !!t;
  let oe;
  r === "sync" ? oe = K : r === "post" ? oe = () => ft(K, a && a.suspense) : (K.pre = !0, a && (K.id = a.uid), oe = () => Ge(K));
  const y = new On(d, oe);
  return process.env.NODE_ENV !== "production" && (y.onTrack = s, y.onTrigger = i), t ? n ? K() : x = y.run() : r === "post" ? ft(
    y.run.bind(y),
    a && a.suspense
  ) : y.run(), () => {
    y.stop(), a && a.scope && on(a.scope.effects, y);
  };
}
function mr(e, t, n) {
  const o = this.proxy, r = C(e) ? e.includes(".") ? Er(o, e) : () => o[e] : e.bind(o, o);
  let s;
  N(t) ? s = t : (s = t.handler, n = t);
  const i = X;
  dt(this);
  const c = gr(r, s.bind(o), n);
  return i ? dt(i) : Fr(), c;
}
function Er(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function L(e, t) {
  if (!S(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), O(e))
    L(e.value, t);
  else if (h(e))
    for (let n = 0; n < e.length; n++)
      L(e[n], t);
  else if (cn(e) || Y(e))
    e.forEach((n) => {
      L(n, t);
    });
  else if (an(e))
    for (const n in e)
      L(e[n], t);
  return e;
}
const wr = (e) => !!e.type.__asyncLoader, Nr = Symbol.for("v-ndc");
function br(e, t, n = {}, o, r) {
  if (I.isCE || I.parent && wr(I.parent) && I.parent.isCE)
    return t !== "default" && (n.name = t), Le("slot", n, o && o());
  let s = e[t];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (E(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), s = () => []), s && s._c && (s._d = !1), Kt();
  const i = s && jt(s(n)), c = Cr(
    Oe,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      i && i.key || `_${t}`
    },
    i || (o ? o() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !r && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), s && s._c && (s._d = !0), c;
}
function jt(e) {
  return e.some((t) => Wt(t) ? !(t.type === zt || t.type === Oe && !jt(t.children)) : !0) ? e : null;
}
const Me = (e) => e ? Ar(e) ? jr(e) || e.proxy : Me(e.parent) : null, ne = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ R(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? fe(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? fe(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? fe(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? fe(e.refs) : e.refs,
    $parent: (e) => Me(e.parent),
    $root: (e) => Me(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Vr(e),
    $forceUpdate: (e) => e.f || (e.f = () => Ge(e.update)),
    $nextTick: (e) => e.n || (e.n = ir.bind(e.proxy)),
    $watch: (e) => mr.bind(e)
  })
), Or = (e) => e === "_" || e === "$", Ve = (e, t) => e !== P && !e.__isScriptSetup && m(e, t), Sr = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: c, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let a;
    if (t[0] !== "$") {
      const _ = i[t];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (Ve(o, t))
          return i[t] = 1, o[t];
        if (r !== P && m(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && m(a, t)
        )
          return i[t] = 3, s[t];
        if (n !== P && m(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const d = ne[t];
    let l, f;
    if (d)
      return t === "$attrs" ? (V(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && V(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (l = c.__cssModules) && (l = l[t])
    )
      return l;
    if (n !== P && m(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      f = u.config.globalProperties, m(f, t)
    )
      return f[t];
    process.env.NODE_ENV !== "production" && I && (!C(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== P && Or(t[0]) && m(r, t) ? E(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === I && E(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return Ve(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && m(r, t) ? (E(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== P && m(o, t) ? (o[t] = n, !0) : m(e.props, t) ? (process.env.NODE_ENV !== "production" && E(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && E(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s }
  }, i) {
    let c;
    return !!n[i] || e !== P && m(e, i) || Ve(t, i) || (c = s[0]) && m(c, i) || m(o, i) || m(ne, i) || m(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : m(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Sr.ownKeys = (e) => (E(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function ct(e) {
  return h(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Vr(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = s.get(t);
  let u;
  return c ? u = c : !r.length && !n && !o ? u = t : (u = {}, r.length && r.forEach(
    (a) => Ee(u, a, i, !0)
  ), Ee(u, t, i)), S(t) && s.set(t, u), u;
}
function Ee(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && Ee(e, s, n, !0), r && r.forEach(
    (i) => Ee(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && E(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = vr[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const vr = {
  data: lt,
  props: at,
  emits: at,
  // objects
  methods: ee,
  computed: ee,
  // lifecycle
  beforeCreate: w,
  created: w,
  beforeMount: w,
  mounted: w,
  beforeUpdate: w,
  updated: w,
  beforeDestroy: w,
  beforeUnmount: w,
  destroyed: w,
  unmounted: w,
  activated: w,
  deactivated: w,
  errorCaptured: w,
  serverPrefetch: w,
  // assets
  components: ee,
  directives: ee,
  // watch
  watch: yr,
  // provide / inject
  provide: lt,
  inject: xr
};
function lt(e, t) {
  return t ? e ? function() {
    return R(
      N(e) ? e.call(this, this) : e,
      N(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function xr(e, t) {
  return ee(ut(e), ut(t));
}
function ut(e) {
  if (h(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function w(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ee(e, t) {
  return e ? R(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function at(e, t) {
  return e ? h(e) && h(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : R(
    /* @__PURE__ */ Object.create(null),
    ct(e),
    ct(t ?? {})
  ) : t;
}
function yr(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = R(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = w(e[o], t[o]);
  return n;
}
const ft = _r, Ir = (e) => e.__isTeleport, Oe = Symbol.for("v-fgt"), Rr = Symbol.for("v-txt"), zt = Symbol.for("v-cmt"), de = [];
let D = null;
function Kt(e = !1) {
  de.push(D = e ? null : []);
}
function $r() {
  de.pop(), D = de[de.length - 1] || null;
}
function Ht(e) {
  return e.dynamicChildren = D || tn, $r(), D && D.push(e), e;
}
function Dr(e, t, n, o, r, s) {
  return Ht(
    Jt(
      e,
      t,
      n,
      o,
      r,
      s,
      !0
      /* isBlock */
    )
  );
}
function Cr(e, t, n, o, r) {
  return Ht(
    Le(
      e,
      t,
      n,
      o,
      r,
      !0
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function Wt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Tr = (...e) => qt(
  ...e
), Ut = "__vInternal", Bt = ({ key: e }) => e ?? null, he = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? C(e) || O(e) || N(e) ? { i: I, r: e, k: t, f: !!n } : e : null);
function Jt(e, t = null, n = null, o = 0, r = null, s = e === Oe ? 0 : 1, i = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Bt(t),
    ref: t && he(t),
    scopeId: dr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: I
  };
  return c ? (Ye(u, n), s & 128 && e.normalize(u)) : n && (u.shapeFlag |= C(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && E("VNode created with invalid key (NaN). VNode type:", u.type), // avoid a block node from tracking itself
  !i && // has current parent block
  D && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && D.push(u), u;
}
const Le = process.env.NODE_ENV !== "production" ? Tr : qt;
function qt(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === Nr) && (process.env.NODE_ENV !== "production" && !e && E(`Invalid vnode type when creating vnode: ${e}.`), e = zt), Wt(e)) {
    const c = we(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ye(c, n), !s && D && (c.shapeFlag & 6 ? D[D.indexOf(e)] = c : D.push(c)), c.patchFlag |= -2, c;
  }
  if (Xt(e) && (e = e.__vccOpts), t) {
    t = Pr(t);
    let { class: c, style: u } = t;
    c && !C(c) && (t.class = ze(c)), S(u) && (Ce(u) && !h(u) && (u = R({}, u)), t.style = je(u));
  }
  const i = C(e) ? 1 : hr(e) ? 128 : Ir(e) ? 64 : S(e) ? 4 : N(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Ce(e) && (e = p(e), E(
    "Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Jt(
    e,
    t,
    n,
    o,
    r,
    i,
    s,
    !0
  );
}
function Pr(e) {
  return e ? Ce(e) || Ut in e ? R({}, e) : e : null;
}
function we(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: i } = e, c = t ? Mr(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Bt(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? h(r) ? r.concat(he(t)) : [r, he(t)] : he(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && h(i) ? i.map(Gt) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Oe ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && we(e.ssContent),
    ssFallback: e.ssFallback && we(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Gt(e) {
  const t = we(e);
  return h(e.children) && (t.children = e.children.map(Gt)), t;
}
function Lt(e = " ", t = 0) {
  return Le(Rr, null, e, t);
}
function Ye(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (h(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ye(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Ut in t) ? t._ctx = I : r === 3 && I && (I.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    N(t) ? (t = { default: t, _ctx: I }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Lt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Mr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = ze([t.class, o.class]));
      else if (r === "style")
        t.style = je([t.style, o.style]);
      else if (rn(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(h(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
let X = null, Qe, G, pt = "__VUE_INSTANCE_SETTERS__";
(G = xe()[pt]) || (G = xe()[pt] = []), G.push((e) => X = e), Qe = (e) => {
  G.length > 1 ? G.forEach((t) => t(e)) : G[0](e);
};
const dt = (e) => {
  Qe(e), e.scope.on();
}, Fr = () => {
  X && X.scope.off(), Qe(null);
};
function Ar(e) {
  return e.vnode.shapeFlag & 4;
}
function jr(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Xn(Ln(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in ne)
          return ne[n](e);
      },
      has(t, n) {
        return n in t || n in ne;
      }
    }));
}
const zr = /(?:^|[-_])(\w)/g, Kr = (e) => e.replace(zr, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Yt(e, t = !0) {
  return N(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Qt(e, t, n = !1) {
  let o = Yt(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    o = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return o ? Kr(o) : n ? "App" : "Anonymous";
}
function Xt(e) {
  return N(e) && "__vccOpts" in e;
}
function ve(e) {
  return !!(e && e.__v_isShallow);
}
function Hr() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, r = {
    header(l) {
      return S(l) ? l.__isVue ? ["div", e, "VueInstance"] : O(l) ? [
        "div",
        {},
        ["span", e, d(l)],
        "<",
        c(l.value),
        ">"
      ] : U(l) ? [
        "div",
        {},
        ["span", e, ve(l) ? "ShallowReactive" : "Reactive"],
        "<",
        c(l),
        `>${q(l) ? " (readonly)" : ""}`
      ] : q(l) ? [
        "div",
        {},
        ["span", e, ve(l) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(l),
        ">"
      ] : null : null;
    },
    hasBody(l) {
      return l && l.__isVue;
    },
    body(l) {
      if (l && l.__isVue)
        return [
          "div",
          {},
          ...s(l.$)
        ];
    }
  };
  function s(l) {
    const f = [];
    l.type.props && l.props && f.push(i("props", p(l.props))), l.setupState !== P && f.push(i("setup", l.setupState)), l.data !== P && f.push(i("data", p(l.data)));
    const _ = u(l, "computed");
    _ && f.push(i("computed", _));
    const v = u(l, "inject");
    return v && f.push(i("injected", v)), f.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: l }]
    ]), f;
  }
  function i(l, f) {
    return f = R({}, f), Object.keys(f).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        l
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(f).map((_) => [
          "div",
          {},
          ["span", o, _ + ": "],
          c(f[_], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(l, f = !0) {
    return typeof l == "number" ? ["span", t, l] : typeof l == "string" ? ["span", n, JSON.stringify(l)] : typeof l == "boolean" ? ["span", o, l] : S(l) ? ["object", { object: f ? p(l) : l }] : ["span", n, String(l)];
  }
  function u(l, f) {
    const _ = l.type;
    if (N(_))
      return;
    const v = {};
    for (const x in l.ctx)
      a(_, x, f) && (v[x] = l.ctx[x]);
    return v;
  }
  function a(l, f, _) {
    const v = l[_];
    if (h(v) && v.includes(f) || S(v) && f in v || l.extends && a(l.extends, f, _) || l.mixins && l.mixins.some((x) => a(x, f, _)))
      return !0;
  }
  function d(l) {
    return ve(l) ? "ShallowRef" : l.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
function Wr() {
  Hr();
}
process.env.NODE_ENV !== "production" && Wr();
const Ur = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Br = {}, Jr = { class: "lv-button" };
function qr(e, t, n, o, r, s) {
  return Kt(), Dr("button", Jr, [
    br(e.$slots, "default", {}, () => [
      Lt(" this is button ")
    ], !0)
  ]);
}
const Gr = /* @__PURE__ */ Ur(Br, [["render", qr], ["__scopeId", "data-v-14d868c1"]]), Yr = {
  intall: (e, t) => {
    console.log("🚀 ~ file: index.js:5 ~ options:", t), e.component("vue-button", Gr);
  }
};
export {
  Yr as default
};
