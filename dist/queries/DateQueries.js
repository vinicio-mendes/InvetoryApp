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

// src/queries/DateQueries.ts
var DateQueries_exports = {};
__export(DateQueries_exports, {
  useDeleteDate: () => useDeleteDate,
  usePostDate: () => usePostDate
});
module.exports = __toCommonJS(DateQueries_exports);
var import_react_query = require("@tanstack/react-query");

// src/config/axios.ts
var import_axios = __toESM(require("axios"));
var axios_default = import_axios.default.create({
  baseURL: "http://localhost:3000/api/",
  withCredentials: true
});

// src/queries/DateQueries.ts
var postDate = async (props) => {
  const response = await axios_default.post("date", props);
  return response.data;
};
var deleteDate = async ({
  productId,
  id
}) => {
  const response = await axios_default.delete(`date`, { data: { productId, id } });
  return response.data;
};
var usePostDate = () => (0, import_react_query.useMutation)(["postDate"], postDate);
var useDeleteDate = () => (0, import_react_query.useMutation)(["deleteDate"], deleteDate);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useDeleteDate,
  usePostDate
});
