"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = exports.JWT_SECRET = exports.PORT = void 0;
const postgres_1 = require("@vercel/postgres");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '.env' });
exports.PORT = process.env.PORT;
exports.JWT_SECRET = process.env.JWT_SECRET;
const dbConfig = {
    connectionString: process.env.POSTGRES_URL
};
exports.database = (0, postgres_1.createPool)(dbConfig);
