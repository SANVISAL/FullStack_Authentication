"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpException = void 0;
class HttpException extends Error {
    constructor(message, statusCode) {
        super(message);
        this._statusCode = statusCode;
        this.name = this.constructor.name;
        // Set the prototype explicitly to ensure instanceof works correctly
        Object.setPrototypeOf(this, HttpException.prototype);
    }
    serializeError() {
        return {
            statusCode: this._statusCode,
            message: this.message,
            name: this.name,
        };
    }
    getStatusCode() {
        return this._statusCode;
    }
    getMessage() {
        return this.message;
    }
    getName() {
        return this.name;
    }
}
exports.HttpException = HttpException;
