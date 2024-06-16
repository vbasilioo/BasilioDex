"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var baseUrl = process.env['BASE_URL'];
var imageUrl = process.env['IMAGE_URL'];
if (!baseUrl || !imageUrl) {
    throw new Error('BASE_URL and IMAGE_URL must be set in .env file');
}
var environment = "export const environment = {\n    production: false,\n    baseUrl: '".concat(baseUrl, "',\n    imageUrl: '").concat(imageUrl, "'\n};");
(0, fs_1.writeFileSync)('./src/environments/environment.ts', environment);
