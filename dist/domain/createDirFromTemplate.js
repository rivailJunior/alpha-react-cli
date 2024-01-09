"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyFolder = void 0;
const fs = require("fs");
const path = require("path");
const constants_1 = require("../constants");
function copyFolder(folderPath) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fs.cpSync(path.resolve(constants_1.ROOT_DIR_LOCATION + "/src/template"), folderPath, {
            recursive: true,
        });
    });
}
exports.copyFolder = copyFolder;
//# sourceMappingURL=createDirFromTemplate.js.map