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

// src/types/deleteDate.ts
var deleteDate_exports = {};
__export(deleteDate_exports, {
  DeleteDateSchema: () => DeleteDateSchema
});
module.exports = __toCommonJS(deleteDate_exports);
var import_zod = require("zod");
var DeleteDateSchema = import_zod.z.object({
  productId: import_zod.z.string().min(1, { message: "Id should have at least 1 letter" }),
  id: import_zod.z.string().min(1, { message: "Id should have at least 1 letter" })
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DeleteDateSchema
});
