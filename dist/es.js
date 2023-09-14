import { openBlock as s, createElementBlock as _, createElementVNode as r, renderSlot as u, createTextVNode as a } from "vue";
const l = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, c] of o)
    e[n] = c;
  return e;
}, d = {
  name: "VueButton"
}, p = { class: "lv-button" };
function i(t, o, e, n, c, v) {
  return s(), _("div", null, [
    r("button", p, [
      u(t.$slots, "default", {}, () => [
        a(" this is button ")
      ], !0)
    ])
  ]);
}
const f = /* @__PURE__ */ l(d, [["render", i], ["__scopeId", "data-v-bc06568f"]]), b = {
  install: (t) => {
    t.component("vue-button", f);
  }
};
export {
  b as default
};
