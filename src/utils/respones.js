"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorResponse = exports.SuccessResponse = void 0;
class SuccessResponse {
    constructor(code, message, result) {
        this.code = code;
        this.message = message;
        this.result = result;
    }
    serializeSuccess() {
        return {
            code: this.code,
            message: this.message,
            result: this.result,
        };
    }
}
exports.SuccessResponse = SuccessResponse;
class ErrorResponse {
    constructor(code, message) {
        this.code = code;
        this.message = message;
        this.result = null;
    }
    serializeError() {
        return {
            code: this.code,
            message: this.message,
            result: this.result,
        };
    }
}
exports.ErrorResponse = ErrorResponse;
