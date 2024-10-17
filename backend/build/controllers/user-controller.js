"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllUsers = void 0;
const secrets_1 = require("../secrets");
// Ajuste o caminho conforme necessário
const findAllUsers = async (req, res) => {
    const { email } = req.query;
    try {
        let result;
        if (email) {
            result = await secrets_1.database.query(`
                SELECT name, email 
                FROM users 
                WHERE email = $1
            `, [email]);
        }
        else {
            result = await secrets_1.database.query(`
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
};
exports.findAllUsers = findAllUsers;
