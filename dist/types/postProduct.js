"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/types/postProduct.ts
var postProduct_exports = {};
__export(postProduct_exports, {
  postProductSchema: () => postProductSchema
});
module.exports = __toCommonJS(postProduct_exports);
var import_zod = require("zod");
var postProductSchema = import_zod.z.object({
  name: import_zod.z.string().min(1, { message: "Name is required" }),
  price: import_zod.z.number().min(0, { message: "Price must be greater than 0" }),
  description: import_zod.z.string().min(1, { message: "Description is required" }),
  categoryId: import_zod.z.string().min(1, { message: "Category is required" })
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  postProductSchema
});
