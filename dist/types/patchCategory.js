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

// src/types/patchCategory.ts
var patchCategory_exports = {};
__export(patchCategory_exports, {
  PatchCategorySchema: () => PatchCategorySchema
});
module.exports = __toCommonJS(patchCategory_exports);
var import_zod = require("zod");
var PatchCategorySchema = import_zod.z.object({
  id: import_zod.z.string().min(1, { message: "Id should have at least 1 letter" }),
  name: import_zod.z.string().min(2, { message: "Name should have at least 2 letters" })
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PatchCategorySchema
});
