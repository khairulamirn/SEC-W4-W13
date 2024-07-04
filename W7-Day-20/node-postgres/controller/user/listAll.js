import pool from "../../database/connection.js";

const query = `
SELECT id, username, email FROM users;
`;

async function listAllUsers(req,res) {
    try {
        const resDb = await pool.query(query);
        const userDb = resDb.rows;
        const message =userDb.length === 0 ? "No user found" : `${userDb.length} users found`; // true ? trueValue : falseValue
        const data = {
            message,
            data: userDb,
        }

        return res.status(200).json(data); 
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ 
            message: "Internal server error", 
            error: error.message
        });
    }
};

export default listAllUsers;