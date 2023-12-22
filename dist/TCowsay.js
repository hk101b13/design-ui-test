import { jsx, jsxs } from "react/jsx-runtime";
function TCowsay(props) {
  return /* @__PURE__ */ jsx("div", { style: { height: "100%", width: "100%" }, children: /* @__PURE__ */ jsxs("pre", { style: { fontFamily: "Arial", height: "100%", width: "100%" }, children: [
    /* @__PURE__ */ jsx("div", { className: "MonoFont", children: `( ${props.content || "hello"} )` }),
    /* @__PURE__ */ jsx("div", { className: "MonoFont", children: "     \\" }),
    /* @__PURE__ */ jsx("div", { className: "MonoFont", children: "      ^__^" }),
    /* @__PURE__ */ jsx("div", { className: "MonoFont", children: "      (oo)\\________" }),
    /* @__PURE__ */ jsx("div", { className: "MonoFont", children: "      (__)\\         )^" }),
    /* @__PURE__ */ jsx("div", { className: "MonoFont", children: "          ||------w|" }),
    /* @__PURE__ */ jsx("div", { className: "MonoFont", children: "          ||      ||" })
  ] }) });
}
export {
  TCowsay
};
