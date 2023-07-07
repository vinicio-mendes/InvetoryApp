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

// src/types/getProducts.ts
var getProducts_exports = {};
__export(getProducts_exports, {
  getProducts: () => getProducts
});
module.exports = __toCommonJS(getProducts_exports);
var import_zod = require("zod");
var getProducts = import_zod.z.object({
  skip: import_zod.z.string().optional(),
  take: import_zod.z.string().optional(),
  priceFrom: import_zod.z.string().optional(),
  priceTo: import_zod.z.string().optional(),
  category: import_zod.z.string().optional(),
  stockFrom: import_zod.z.string().optional(),
  stockTo: import_zod.z.string().optional(),
  dates: import_zod.z.string().optional()
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getProducts
});
