import pool from "../../database/connection.js";

const query = `
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3)
    RETURNING id, username, email;
`;

async function registerUser (req, res) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    try {
        const resDb = await pool.query(query, [username, email, password]);
        const userDb = resDb.rows[0];
        const data = {
            status: "success",
            message: "User registered successfully",
            data: { 
                userId: userDb.id, 
                username: userDb.username, 
                email: userDb.email
            },
        }
        res.status(200).json(data);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ 
            message: "Internal server error",
            error: error.message
         });
    }
}

export default registerUser;