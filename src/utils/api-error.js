"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
const status_code_1 = require("./const/status-code");
const http_acception_1 = require("./http-acception");
class ApiError extends http_acception_1.HttpException {
    constructor(message = "Unexpected error accurred.", statusCode = status_code_1.StatusCode.InternalServerError) {
        super(message, statusCode);
        Object.setPrototypeOf(this, ApiError.prototype);
    }
}
exports.ApiError = ApiError;
