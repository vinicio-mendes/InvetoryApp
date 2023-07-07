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

// src/queries/ProductQueries.ts
var ProductQueries_exports = {};
__export(ProductQueries_exports, {
  getProducts: () => getProducts,
  useDeleteProduct: () => useDeleteProduct,
  useGetProducts: () => useGetProducts,
  useGetProductsMutation: () => useGetProductsMutation,
  usePatchProdcuts: () => usePatchProdcuts,
  usePostProduct: () => usePostProduct
});
module.exports = __toCommonJS(ProductQueries_exports);
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
var postProduct = async (props) => {
  const response = await axios_default.post("product", props);
  return response?.data;
};
var deleteProduct = async (id) => {
  const response = await axios_default.delete(`product`, { params: { id } });
  return response?.data;
};
var patchProduct = async (props) => {
  const response = await axios_default.patch(`product`, props);
  return response?.data;
};
var useGetProducts = (params) => (0, import_react_query.useQuery)(["products"], () => getProducts(params), { enabled: true });
var useGetProductsMutation = () => (0, import_react_query.useMutation)(["products"], getProducts);
var usePostProduct = () => (0, import_react_query.useMutation)(["product"], postProduct);
var useDeleteProduct = () => (0, import_react_query.useMutation)(["product"], deleteProduct);
var usePatchProdcuts = () => (0, import_react_query.useMutation)(["product"], patchProduct);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getProducts,
  useDeleteProduct,
  useGetProducts,
  useGetProductsMutation,
  usePatchProdcuts,
  usePostProduct
});
