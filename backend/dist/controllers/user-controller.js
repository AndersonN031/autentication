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
exports.findAllUsers = void 0;
const secrets_1 = require("../secrets");
// Ajuste o caminho conforme necessário
const findAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.query;
    try {
        let result;
        if (email) {
            result = yield secrets_1.database.query(`
                SELECT name, email 
                FROM users 
                WHERE email = $1
            `, [email]);
        }
        else {
            result = yield secrets_1.database.query(`
                SELECT name, email 
                FROM users
            `);
        }
        res.json(result.rows);
    }
    catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.findAllUsers = findAllUsers;
