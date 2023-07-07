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

// src/components/PageLayout.tsx
var PageLayout_exports = {};
__export(PageLayout_exports, {
  default: () => PageLayout_default
});
module.exports = __toCommonJS(PageLayout_exports);
var import_core2 = require("@mantine/core");
var import_react5 = require("next-auth/react");
var import_react6 = require("react");

// src/components/Navbar.tsx
var import_core = require("@mantine/core");
var import_react3 = require("next-auth/react");
var import_link = __toESM(require("next/link"));
var import_router = require("next/router");
var import_react4 = __toESM(require("react"));

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
function GenIcon(data2) {
  return function(props) {
    return import_react2.default.createElement(IconBase, __assign({
      attr: __assign({}, data2.attr)
    }, props), Tree2Element(data2.child));
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

// node_modules/react-icons/ai/index.esm.js
function AiOutlineHome(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 1024 1024" }, "child": [{ "tag": "path", "attr": { "d": "M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" } }] })(props);
}

// node_modules/react-icons/bi/index.esm.js
function BiCategory(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" } }] })(props);
}

// node_modules/react-icons/bs/index.esm.js
function BsBox(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" } }] })(props);
}

// node_modules/react-icons/fi/index.esm.js
function FiSettings(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "circle", "attr": { "cx": "12", "cy": "12", "r": "3" } }, { "tag": "path", "attr": { "d": "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" } }] })(props);
}

// node_modules/react-icons/go/index.esm.js
function GoArchive(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 14 16" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M13 2H1v2h12V2zM0 4a1 1 0 0 0 1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v2zm2 1h10v9H2V5zm2 3h6V7H4v1z" } }] })(props);
}

// node_modules/react-icons/im/index.esm.js
function ImSun(props) {
  return GenIcon({ "tag": "svg", "attr": { "version": "1.1", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M8 13c0.552 0 1 0.448 1 1v1c0 0.552-0.448 1-1 1s-1-0.448-1-1v-1c0-0.552 0.448-1 1-1zM8 3c-0.552 0-1-0.448-1-1v-1c0-0.552 0.448-1 1-1s1 0.448 1 1v1c0 0.552-0.448 1-1 1zM15 7c0.552 0 1 0.448 1 1s-0.448 1-1 1h-1c-0.552 0-1-0.448-1-1s0.448-1 1-1h1zM3 8c0 0.552-0.448 1-1 1h-1c-0.552 0-1-0.448-1-1s0.448-1 1-1h1c0.552 0 1 0.448 1 1zM12.95 11.536l0.707 0.707c0.39 0.39 0.39 1.024 0 1.414s-1.024 0.39-1.414 0l-0.707-0.707c-0.39-0.39-0.39-1.024 0-1.414s1.024-0.39 1.414 0zM3.050 4.464l-0.707-0.707c-0.391-0.391-0.391-1.024 0-1.414s1.024-0.391 1.414 0l0.707 0.707c0.391 0.391 0.391 1.024 0 1.414s-1.024 0.391-1.414 0zM12.95 4.464c-0.39 0.391-1.024 0.391-1.414 0s-0.39-1.024 0-1.414l0.707-0.707c0.39-0.391 1.024-0.391 1.414 0s0.39 1.024 0 1.414l-0.707 0.707zM3.050 11.536c0.39-0.39 1.024-0.39 1.414 0s0.391 1.024 0 1.414l-0.707 0.707c-0.391 0.39-1.024 0.39-1.414 0s-0.391-1.024 0-1.414l0.707-0.707z" } }, { "tag": "path", "attr": { "d": "M8 4c-2.209 0-4 1.791-4 4s1.791 4 4 4c2.209 0 4-1.791 4-4s-1.791-4-4-4zM8 10.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z" } }] })(props);
}
function ImIcoMoon(props) {
  return GenIcon({ "tag": "svg", "attr": { "version": "1.1", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M4.055 8c0-1.022 0.829-1.851 1.851-1.851s1.851 0.829 1.851 1.851c0 1.022-0.829 1.851-1.851 1.851s-1.851-0.829-1.851-1.851zM8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM5.928 14.989c-2.406-1.4-4.023-4.005-4.023-6.989s1.617-5.589 4.023-6.989c2.406 1.399 4.025 4.005 4.025 6.989s-1.618 5.589-4.025 6.989z" } }] })(props);
}

// node_modules/react-icons/md/index.esm.js
function MdKeyboardArrowLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0V0z" } }, { "tag": "path", "attr": { "d": "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" } }] })(props);
}
function MdKeyboardArrowRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0V0z" } }, { "tag": "path", "attr": { "d": "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" } }] })(props);
}

// node_modules/react-icons/tb/index.esm.js
function TbClipboardList(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "strokeWidth": "2", "stroke": "currentColor", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "desc", "attr": {}, "child": [] }, { "tag": "path", "attr": { "stroke": "none", "d": "M0 0h24v24H0z", "fill": "none" } }, { "tag": "path", "attr": { "d": "M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" } }, { "tag": "rect", "attr": { "x": "9", "y": "3", "width": "6", "height": "4", "rx": "2" } }, { "tag": "line", "attr": { "x1": "9", "y1": "12", "x2": "9.01", "y2": "12" } }, { "tag": "line", "attr": { "x1": "13", "y1": "12", "x2": "15", "y2": "12" } }, { "tag": "line", "attr": { "x1": "9", "y1": "16", "x2": "9.01", "y2": "16" } }, { "tag": "line", "attr": { "x1": "13", "y1": "16", "x2": "15", "y2": "16" } }] })(props);
}

// src/components/Navbar.tsx
var getWordInitials = (word) => {
  const bits = word.trim().split(" ");
  return bits.map((bit) => bit.charAt(0)).join("").toUpperCase();
};
var MainLink = ({ icon, color, label, pageLink }) => {
  const router = (0, import_router.useRouter)();
  return /* @__PURE__ */ import_react4.default.createElement(import_link.default, { href: pageLink, passHref: true }, /* @__PURE__ */ import_react4.default.createElement(
    import_core.UnstyledButton,
    {
      sx: (theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
        backgroundColor: router.pathname === pageLink ? theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0] : "transparent",
        "&:hover": {
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
        }
      })
    },
    /* @__PURE__ */ import_react4.default.createElement(import_core.Group, null, /* @__PURE__ */ import_react4.default.createElement(import_core.ThemeIcon, { color, variant: "light" }, icon), /* @__PURE__ */ import_react4.default.createElement(import_core.Text, { size: "sm" }, label))
  ));
};
var data = [
  {
    icon: /* @__PURE__ */ import_react4.default.createElement(AiOutlineHome, { size: 18 }),
    color: "blue",
    label: "Home",
    pageLink: "/"
  },
  {
    icon: /* @__PURE__ */ import_react4.default.createElement(BiCategory, { size: 18 }),
    color: "teal",
    label: "Categorias",
    pageLink: "/categories"
  },
  {
    icon: /* @__PURE__ */ import_react4.default.createElement(BsBox, { size: 16 }),
    color: "violet",
    label: "Invent\xE1rio",
    pageLink: "/inventory"
  },
  {
    icon: /* @__PURE__ */ import_react4.default.createElement(TbClipboardList, { size: 20 }),
    color: "grape",
    label: "Produtos",
    pageLink: "/products"
  },
  {
    icon: /* @__PURE__ */ import_react4.default.createElement(FiSettings, { size: 16 }),
    color: "orange",
    label: "Configura\xE7\xF5es",
    pageLink: "/settings"
  }
];
var Brand = () => {
  const { colorScheme, toggleColorScheme } = (0, import_core.useMantineColorScheme)();
  return /* @__PURE__ */ import_react4.default.createElement(
    import_core.Box,
    {
      sx: (theme) => ({
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.lg,
        borderBottom: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`
      })
    },
    /* @__PURE__ */ import_react4.default.createElement(import_core.Group, { position: "apart", align: "center" }, /* @__PURE__ */ import_react4.default.createElement(import_core.Group, null, /* @__PURE__ */ import_react4.default.createElement(
      import_core.ThemeIcon,
      {
        variant: "gradient",
        gradient: { from: "indigo", to: "cyan" },
        size: "lg",
        radius: "lg"
      },
      /* @__PURE__ */ import_react4.default.createElement(GoArchive, { size: 18 })
    ), /* @__PURE__ */ import_react4.default.createElement(import_core.Title, { size: "1.2rem", weight: 400, sx: { fontStyle: "italic" } }, "Invent\xE1rio")), /* @__PURE__ */ import_react4.default.createElement(
      import_core.ActionIcon,
      {
        variant: "default",
        onClick: () => toggleColorScheme(),
        size: 30
      },
      colorScheme === "dark" ? /* @__PURE__ */ import_react4.default.createElement(ImSun, { size: 18 }) : /* @__PURE__ */ import_react4.default.createElement(ImIcoMoon, { size: 18 })
    ))
  );
};
var User = () => {
  const theme = (0, import_core.useMantineTheme)();
  const { data: session } = (0, import_react3.useSession)();
  const router = (0, import_router.useRouter)();
  return /* @__PURE__ */ import_react4.default.createElement(import_link.default, { passHref: true, href: router.pathname === "/configura\xE7\xF5es" ? "/" : "/configura\xE7\xF5es" }, /* @__PURE__ */ import_react4.default.createElement(
    import_core.Box,
    {
      sx: {
        paddingTop: theme.spacing.sm,
        borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`
      }
    },
    /* @__PURE__ */ import_react4.default.createElement(
      import_core.UnstyledButton,
      {
        sx: {
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          "&:hover": {
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
          }
        }
      },
      /* @__PURE__ */ import_react4.default.createElement(import_core.Group, null, /* @__PURE__ */ import_react4.default.createElement(
        import_core.Avatar,
        {
          src: session?.user?.image,
          radius: "xl",
          color: "blue",
          variant: "light"
        },
        `${getWordInitials(session?.user?.name ?? "")}`
      ), /* @__PURE__ */ import_react4.default.createElement(import_core.Box, { sx: { flex: 1 } }, /* @__PURE__ */ import_react4.default.createElement(import_core.Text, { size: "sm", weight: 500 }, session?.user?.name), /* @__PURE__ */ import_react4.default.createElement(import_core.Text, { color: "dimmed", size: "xs" }, session?.user?.email)), router.pathname === "/settings" ? /* @__PURE__ */ import_react4.default.createElement(MdKeyboardArrowLeft, { size: 18 }) : /* @__PURE__ */ import_react4.default.createElement(MdKeyboardArrowRight, { size: 18 }))
    )
  ));
};
var Nav = ({
  opened,
  hiddenBreakpoint
}) => {
  return /* @__PURE__ */ import_react4.default.createElement(
    import_core.Navbar,
    {
      p: "xs",
      width: { sm: 300, lg: 300 },
      hiddenBreakpoint,
      hidden: !opened
    },
    /* @__PURE__ */ import_react4.default.createElement(import_core.Navbar.Section, { mt: "xs" }, /* @__PURE__ */ import_react4.default.createElement(Brand, null)),
    /* @__PURE__ */ import_react4.default.createElement(import_core.Navbar.Section, { grow: true, mt: "md", component: import_core.ScrollArea }, data.map((link, index) => /* @__PURE__ */ import_react4.default.createElement(MainLink, { ...link, key: link.label }))),
    /* @__PURE__ */ import_react4.default.createElement(import_core.Navbar.Section, null, /* @__PURE__ */ import_react4.default.createElement(User, null))
  );
};
var Navbar_default = Nav;

// src/components/PageLayout.tsx
var PageLayout = ({ children }) => {
  const theme = (0, import_core2.useMantineTheme)();
  const [opened, setOpened] = (0, import_react6.useState)(false);
  const { status } = (0, import_react5.useSession)();
  return /* @__PURE__ */ React.createElement(
    import_core2.AppShell,
    {
      styles: {
        main: {
          background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]
        }
      },
      navbarOffsetBreakpoint: "sm",
      navbar: /* @__PURE__ */ React.createElement(Navbar_default, { opened, hiddenBreakpoint: "sm" }),
      header: /* @__PURE__ */ React.createElement(import_core2.Header, { height: 70, p: "md" }, /* @__PURE__ */ React.createElement(
        "div",
        {
          style: { display: "flex", alignItems: "center", height: "100%" }
        },
        /* @__PURE__ */ React.createElement(import_core2.MediaQuery, { largerThan: "sm", styles: { display: "none" } }, /* @__PURE__ */ React.createElement(
          import_core2.Burger,
          {
            opened,
            onClick: () => setOpened((o) => !o),
            size: "sm",
            color: theme.colors.gray[6],
            mr: "xl"
          }
        )),
        /* @__PURE__ */ React.createElement(import_core2.Text, null, "Fornecedores Hortifruti Higien\xF3polis")
      ))
    },
    children
  );
};
var PageLayout_default = PageLayout;
