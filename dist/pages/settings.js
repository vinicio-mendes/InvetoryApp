"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/pages/settings.tsx
var settings_exports = {};
__export(settings_exports, {
  default: () => settings_default
});
module.exports = __toCommonJS(settings_exports);
var import_core = require("@mantine/core");
var import_react3 = require("next-auth/react");
var import_react4 = require("react");

// node_modules/react-icons/lib/esm/iconBase.js
var import_react2 = __toESM(require("react"));

// node_modules/react-icons/lib/esm/iconContext.js
var import_react = __toESM(require("react"));
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react.default.createContext && import_react.default.createContext(DefaultContext);

// node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return import_react2.default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react2.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react2.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react2.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react2.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// node_modules/react-icons/fi/index.esm.js
function FiSettings(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "circle", "attr": { "cx": "12", "cy": "12", "r": "3" } }, { "tag": "path", "attr": { "d": "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" } }] })(props);
}

// src/queries/AccountQueries.ts
var import_react_query = require("@tanstack/react-query");

// src/config/axios.ts
var import_axios = __toESM(require("axios"));
var axios_default = import_axios.default.create({
  baseURL: "http://localhost:3000/api/",
  withCredentials: true
});

// src/queries/AccountQueries.ts
var delAccount = async () => {
  const { data } = await axios_default.delete("/me");
  return data;
};
var useDelAccount = () => (0, import_react_query.useMutation)(["me"], delAccount);

// src/pages/settings.tsx
var getWordInitials = (word) => {
  const bits = word.trim().split(" ");
  return bits.map((bit) => bit.charAt(0)).join("").toUpperCase();
};
var settings = () => {
  const [deleteModal, setDeleteModal] = (0, import_react4.useState)(false);
  const { data: session } = (0, import_react3.useSession)();
  const { mutate: delAcc, isLoading: delAccLoading } = useDelAccount();
  return /* @__PURE__ */ React.createElement("div", { style: { height: "100%", display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement(import_core.Group, { align: "center", mb: "3rem" }, /* @__PURE__ */ React.createElement(import_core.Title, { size: "1.5rem", weight: "500" }, "Configura\xE7\xF5es"), /* @__PURE__ */ React.createElement(import_core.ThemeIcon, { variant: "light", color: "orange", size: "md" }, /* @__PURE__ */ React.createElement(FiSettings, { size: 22 }))), /* @__PURE__ */ React.createElement(import_core.Box, { sx: { height: "100%" } }, /* @__PURE__ */ React.createElement(import_core.Stack, { align: "center", sx: { height: "100%" } }, /* @__PURE__ */ React.createElement(import_core.Text, { align: "center" }, `Voce est\xE1 logado como:`), /* @__PURE__ */ React.createElement(
    import_core.Text,
    {
      weight: 600,
      sx: { textDecoration: "underline" }
    },
    `${session?.user?.email}`
  ), /* @__PURE__ */ React.createElement(
    import_core.Avatar,
    {
      src: session?.user?.image,
      radius: "xl",
      color: "blue",
      variant: "light",
      size: "lg"
    },
    `${getWordInitials(session?.user?.name ?? "")}`
  ), /* @__PURE__ */ React.createElement(import_core.Group, { align: "center", sx: { justifyContent: "center" } }, /* @__PURE__ */ React.createElement(import_core.Button, { onClick: () => (0, import_react3.signOut)(), sx: { width: "180px" } }, "Sair"), /* @__PURE__ */ React.createElement(
    import_core.Button,
    {
      color: "red",
      sx: { width: "180px" },
      onClick: () => setDeleteModal(true)
    },
    "Apagar minha conta"
  )))), /* @__PURE__ */ React.createElement(
    import_core.Modal,
    {
      opened: deleteModal,
      onClose: () => setDeleteModal(false),
      centered: true
    },
    /* @__PURE__ */ React.createElement(import_core.LoadingOverlay, { visible: delAccLoading }),
    /* @__PURE__ */ React.createElement(
      import_core.Group,
      {
        align: "center",
        mb: "2rem",
        mt: "2rem",
        sx: { justifyContent: "center" }
      },
      /* @__PURE__ */ React.createElement(import_core.Title, { size: "1.5rem", weight: "500" }, "Account Deletion"),
      /* @__PURE__ */ React.createElement(import_core.ThemeIcon, { variant: "light", color: "orange", size: "md" }, /* @__PURE__ */ React.createElement(FiSettings, { size: 22 }))
    ),
    /* @__PURE__ */ React.createElement(import_core.Box, { sx: { height: "100%" } }, /* @__PURE__ */ React.createElement(import_core.Stack, { align: "center", sx: { height: "100%" } }, /* @__PURE__ */ React.createElement(
      import_core.Text,
      {
        align: "center",
        color: "red",
        weight: "500"
      },
      `Are you sure you want to delete your account?`
    ), /* @__PURE__ */ React.createElement(import_core.Group, { align: "center", sx: { justifyContent: "center" } }, /* @__PURE__ */ React.createElement(
      import_core.Button,
      {
        onClick: () => setDeleteModal(false),
        sx: { width: "180px" }
      },
      "Cancelar"
    ), /* @__PURE__ */ React.createElement(
      import_core.Button,
      {
        color: "red",
        sx: { width: "180px" },
        onClick: () => delAcc(void 0, {
          onError: () => {
            setDeleteModal(false);
            window.location.reload();
          }
        }),
        disabled: delAccLoading
      },
      "Deletar minha conta"
    ))))
  ));
};
settings.requireAuth = true;
var settings_default = settings;
