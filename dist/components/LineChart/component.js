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

// src/components/LineChart/component.tsx
var component_exports = {};
__export(component_exports, {
  LineChart: () => LineChart
});
module.exports = __toCommonJS(component_exports);
var import_luxon = require("luxon");
var import_dynamic = __toESM(require("next/dynamic"));
var import_react = require("react");
var Chart = (0, import_dynamic.default)(() => import("react-apexcharts"), { ssr: false });
var LineChart = ({
  product,
  colorsScheme
}) => {
  const [stockValues, setStockValues] = (0, import_react.useState)(
    product?.date.map((date) => date.stock) ?? []
  );
  const [dates, setDates] = (0, import_react.useState)(
    product?.date.map((date) => date?.date) ?? []
  );
  (0, import_react.useMemo)(() => {
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
  const [state, setState] = (0, import_react.useState)(schema);
  (0, import_react.useMemo)(() => {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LineChart
});
