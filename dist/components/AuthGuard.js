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

// src/components/AuthGuard.tsx
var AuthGuard_exports = {};
__export(AuthGuard_exports, {
  default: () => AuthGuard_default
});
module.exports = __toCommonJS(AuthGuard_exports);
var import_router = require("next/router");
var import_react = require("next-auth/react");
var import_react2 = require("react");
var import_core = require("@mantine/core");
var import_react3 = __toESM(require("react"));
var AuthGuard = ({ children }) => {
  const { status, data } = (0, import_react.useSession)();
  const router = (0, import_router.useRouter)();
  (0, import_react2.useEffect)(() => {
    if (status === "unauthenticated") {
      if (router.pathname !== "/auth/signin")
        router.push("/auth/signin");
    }
  }, [status, data]);
  if (status === "loading")
    return /* @__PURE__ */ import_react3.default.createElement(import_core.Center, { sx: { width: "100vw", height: "100vh" } }, /* @__PURE__ */ import_react3.default.createElement(import_core.Loader, { size: "xl" }));
  if (status === "authenticated")
    return children;
};
var AuthGuard_default = AuthGuard;
