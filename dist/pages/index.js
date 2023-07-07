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

// src/pages/index.tsx
var pages_exports = {};
__export(pages_exports, {
  default: () => pages_default
});
module.exports = __toCommonJS(pages_exports);
var import_core = require("@mantine/core");
var import_head = __toESM(require("next/head"));

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

// node_modules/react-icons/ai/index.esm.js
function AiOutlineHome(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 1024 1024" }, "child": [{ "tag": "path", "attr": { "d": "M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" } }] })(props);
}

// src/components/LineChart/component.tsx
var import_luxon = require("luxon");
var import_dynamic = __toESM(require("next/dynamic"));
var import_react3 = require("react");
var Chart = (0, import_dynamic.default)(() => import("react-apexcharts"), { ssr: false });
var LineChart = ({
  product,
  colorsScheme
}) => {
  const [stockValues, setStockValues] = (0, import_react3.useState)(
    product?.date.map((date) => date.stock) ?? []
  );
  const [dates, setDates] = (0, import_react3.useState)(
    product?.date.map((date) => date?.date) ?? []
  );
  (0, import_react3.useMemo)(() => {
    setStockValues(product?.date.map((date) => date.stock) ?? []);
    setDates(
      product?.date.map(
        (date) => import_luxon.DateTime.fromISO(date?.date).toISO()
      ) ?? []
    );
  }, [product]);
  const schema = {
    series: [
      {
        name: "Invetory",
        data: stockValues
      }
    ],
    options: {
      chart: {
        height: 350,
        type: "line"
      },
      forecastDataPoints: {
        count: 1
      },
      stroke: {
        width: 5,
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: dates,
        tickAmount: dates.length,
        labels: {
          formatter: function(value, timestamp, opts) {
            return opts.dateFormatter(new Date(timestamp), "dd MMM");
          }
        }
      },
      title: {
        text: `Invent\xE1rio de ${product?.name}`,
        align: "left",
        style: {
          fontSize: "16px",
          color: colorsScheme === "dark" ? "#c1c2c5" : "#000000"
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          gradientToColors: [
            "#202a34",
            "#105675",
            "#177ba9",
            "#1c98ce",
            "#22bcff"
          ]
        }
      },
      yaxis: {
        min: Math.min(...stockValues) - 10,
        max: Math.max(...stockValues) + 10
      }
    }
  };
  const [state, setState] = (0, import_react3.useState)(schema);
  (0, import_react3.useMemo)(() => {
    setState(schema);
  }, [product, colorsScheme]);
  return /* @__PURE__ */ React.createElement("div", { className: "mixed-chart" }, typeof window !== "undefined" && /* @__PURE__ */ React.createElement(
    Chart,
    {
      options: state.options,
      series: state.series,
      type: "line",
      height: "350"
    }
  ));
};

// src/queries/ProductQueries.ts
var import_react_query = require("@tanstack/react-query");

// src/config/axios.ts
var import_axios = __toESM(require("axios"));
var axios_default = import_axios.default.create({
  baseURL: "http://localhost:3000/api/",
  withCredentials: true
});

// src/queries/ProductQueries.ts
var getProducts = async (params) => {
  const response = await axios_default.get("products", { params });
  return response?.data;
};
var useGetProducts = (params) => (0, import_react_query.useQuery)(["products"], () => getProducts(params), { enabled: true });

// src/pages/index.tsx
var Home = () => {
  const {
    data: products,
    isLoading: productsLoading,
    refetch,
    isRefetching: productsRefetching
  } = useGetProducts({
    take: "3",
    dates: "20"
  });
  const { colorScheme } = (0, import_core.useMantineColorScheme)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_head.default, null, /* @__PURE__ */ React.createElement("title", null, "Fornecedores Hortifruti Higien\xF3polis"), /* @__PURE__ */ React.createElement("meta", { name: "description", content: "Home Page" }), /* @__PURE__ */ React.createElement("link", { rel: "icon", href: "/favicon.ico" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_core.Group, { align: "center", mb: "3rem" }, /* @__PURE__ */ React.createElement(import_core.Title, { size: "1.5rem", weight: "500" }, "\xDAltimos produtos atualizados"), /* @__PURE__ */ React.createElement(import_core.ThemeIcon, { variant: "light", color: "blue", size: "md" }, /* @__PURE__ */ React.createElement(AiOutlineHome, { size: 22 }))), !productsLoading && products && !productsRefetching && /* @__PURE__ */ React.createElement(
    import_core.Box,
    {
      sx: {
        maxWidth: "90%"
      }
    },
    products?.map((product) => {
      return /* @__PURE__ */ React.createElement(LineChart, { product, colorsScheme: colorScheme });
    })
  )));
};
Home.requireAuth = true;
var pages_default = Home;
