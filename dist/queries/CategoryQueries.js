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

// src/queries/CategoryQueries.ts
var CategoryQueries_exports = {};
__export(CategoryQueries_exports, {
  useDeleteCategory: () => useDeleteCategory,
  useGetCategories: () => useGetCategories,
  useGetCategoriesId: () => useGetCategoriesId,
  usePatchCategory: () => usePatchCategory,
  usePostCategory: () => usePostCategory
});
module.exports = __toCommonJS(CategoryQueries_exports);
var import_react_query = require("@tanstack/react-query");

// src/config/axios.ts
var import_axios = __toESM(require("axios"));
var axios_default = import_axios.default.create({
  baseURL: "http://localhost:3000/api/",
  withCredentials: true
});

// src/queries/CategoryQueries.ts
var getCategories = async () => {
  const { data } = await axios_default.get("/categories");
  return data;
};
var getCategoriesId = async () => {
  const { data } = await axios_default.get("/categories/id");
  return data;
};
var postCategory = async (props) => {
  const { data } = await axios_default.post("/category", props);
  return data;
};
var deleteCategory = async (id) => {
  const { data } = await axios_default.delete(`/category`, { params: { id } });
  return data;
};
var patchCategory = async (props) => {
  const { data } = await axios_default.patch(`/category`, props);
  return data;
};
var useGetCategories = () => (0, import_react_query.useQuery)(["categories"], getCategories);
var useGetCategoriesId = () => (0, import_react_query.useQuery)(["categoriesId"], getCategoriesId);
var usePostCategory = () => (0, import_react_query.useMutation)(["category"], postCategory);
var useDeleteCategory = () => (0, import_react_query.useMutation)(["category"], deleteCategory);
var usePatchCategory = () => (0, import_react_query.useMutation)(["category"], patchCategory);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useDeleteCategory,
  useGetCategories,
  useGetCategoriesId,
  usePatchCategory,
  usePostCategory
});
