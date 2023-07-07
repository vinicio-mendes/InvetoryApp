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

// src/pages/_document.tsx
var document_exports = {};
__export(document_exports, {
  default: () => _Document
});
module.exports = __toCommonJS(document_exports);
var import_next = require("@mantine/next");
var import_document = __toESM(require("next/document"));
var getInitialProps = (0, import_next.createGetInitialProps)();
var _Document = class extends import_document.default {
  render() {
    return /* @__PURE__ */ React.createElement(import_document.Html, null, /* @__PURE__ */ React.createElement(import_document.Head, null, /* @__PURE__ */ React.createElement("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }), /* @__PURE__ */ React.createElement("link", { rel: "preconnect", href: "https://fonts.gstatic.com" }), /* @__PURE__ */ React.createElement(
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap",
        rel: "stylesheet"
      }
    )), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_document.Main, null), /* @__PURE__ */ React.createElement(import_document.NextScript, null)));
  }
};
_Document.getInitialProps = getInitialProps;
