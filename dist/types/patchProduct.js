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

// src/types/patchProduct.ts
var patchProduct_exports = {};
__export(patchProduct_exports, {
  patchProductSchema: () => patchProductSchema
});
module.exports = __toCommonJS(patchProduct_exports);
var import_zod = require("zod");
var patchProductSchema = import_zod.z.object({
  id: import_zod.z.string().min(1, { message: "Id should have at least 1 letter" }),
  name: import_zod.z.string().min(1, { message: "Name is required" }).optional(),
  description: import_zod.z.string().min(1, { message: "Description is required" }).optional(),
  price: import_zod.z.number().min(0, { message: "Price should be greater than 0" }).optional(),
  Date: import_zod.z.object({
    date: import_zod.z.date().optional(),
    stock: import_zod.z.number().optional()
  }).optional(),
  categoryId: import_zod.z.string().min(0, { message: "ID is required" }).optional()
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  patchProductSchema
});
