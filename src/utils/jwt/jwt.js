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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = exports.getExpiryDate = exports.refreshToken = exports.verifyToken = exports.generateToken = void 0;
exports.generateJti = generateJti;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const fs_1 = __importDefault(require("fs"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const privateKey = fs_1.default.readFileSync("private_key.pem", "utf8");
const publicKey = fs_1.default.readFileSync("public_key.pem", "utf8");
function generateJti() {
    return Math.random().toString(36).substring(7) + Date.now();
}
const generateToken = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Payload = {
            userId: user.id,
            userName: user.userName,
            password: user.password,
            aud: "authentication",
            scope: "read:messages",
            jti: generateJti(),
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
        };
        const accessToken = yield jsonwebtoken_1.default.sign(Payload, privateKey, {
            algorithm: "RS256",
        });
        const refreshToken = jsonwebtoken_1.default.sign({ userId: user.id }, privateKey, {
            algorithm: "RS256",
            expiresIn: "30d",
        });
        return { accessToken, refreshToken };
    }
    catch (error) {
        console.error("Error generating token:", error);
        throw error;
    }
});
exports.generateToken = generateToken;
const verifyToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const decoded = yield jsonwebtoken_1.default.verify(token, publicKey, {
            algorithms: ["RS256"],
        });
        return decoded;
    }
    catch (error) {
        console.error("Error verifying token:", error);
        throw error;
    }
});
exports.verifyToken = verifyToken;
const refreshToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) { }
});
exports.refreshToken = refreshToken;
const getExpiryDate = () => {
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 30); // Add 30 days
    return expiresAt;
};
exports.getExpiryDate = getExpiryDate;
const hashPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        return hashedPassword;
    }
    catch (error) {
        throw error;
    }
});
exports.hashPassword = hashPassword;
