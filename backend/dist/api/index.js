"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = exports.prismaClient = void 0;
const express_1 = __importDefault(require("express"));
const secrets_1 = require("../src/secrets");
const routes_1 = __importDefault(require("../src/routes"));
const postgres_1 = require("@vercel/postgres");
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const database = postgres_1.db;
exports.database = database;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', routes_1.default);
exports.prismaClient = new client_1.PrismaClient({
    log: ['query']
});
app.listen(secrets_1.PORT, () => {
    console.log('Servidor rodando em http://localhost:3000/api/user/user');
});
