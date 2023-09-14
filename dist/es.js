import { openBlock as a, createElementBlock as r, normalizeClass as u, renderSlot as _, createTextVNode as i } from "vue";
const d = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, s] of e)
    n[o] = s;
  return n;
}, p = {
  name: "VueButton",
  props: {
    btnClass: {
      type: String,
      default: "vue-button"
    }
  },
  methods: {
    onClick() {
      this.$emit("on-click");
    }
  }
};
function f(t, e, n, o, s, c) {
  return a(), r("button", {
    class: u(n.btnClass),
    onClick: e[0] || (e[0] = (...l) => c.onClick && c.onClick(...l))
  }, [
    _(t.$slots, "default", {}, () => [
      i(" this is button ")
    ], !0)
  ], 2);
}
const m = /* @__PURE__ */ d(p, [["render", f], ["__scopeId", "data-v-afe28694"]]), v = {
  install: (t) => {
    t.component("vue-button", m);
  }
};
export {
  v as default
};
