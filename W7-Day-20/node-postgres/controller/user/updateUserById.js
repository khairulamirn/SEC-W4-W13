import pool from "../../database/connection.js";

const checkUserExistQuery = `
    SELECT * FROM users
    WHERE id = $1;
`;

const getUserDataQuery = `
    SELECT * FROM users
    WHERE id = $1;
`;

const updateUserQuery = `
    UPDATE users
    SET username = $1, email = $2, password = $3
    WHERE id = $4;
`;

async function updateUserById(req, res) {
    try {
        const { id } = req.params;
        const checkUserExistDb = await pool.query(checkUserExistQuery, [id]);
        // if row count is 0, user not found
        if (checkUserExistDb.rowCount === 0) {
            const dataNotFound = {
                message: `user with id: ${id} not found`,
            }
            return res.status(404).json(dataNotFound);
        }

        //  get existing user data 
        const getUserDataDb = await pool.query(getUserDataQuery, [id]);
        const existingUserData = getUserDataDb.rows[0];
        const existingUsername = existingUserData.username;
        const existingEmail = existingUserData.email;
        const existingPassword = existingUserData.password;

        //  get user input
        //  if data is not provided, use existing data
        const username = req.body.username || existingUsername;
        const email = req.body.email || existingEmail;
        const password = req.body.password || existingPassword;

        // if found update
        await pool.query(updateUserQuery, [username, email, password, id]);
        const dataFound = {
            message: `user with id: ${id} found and updated`,
        };
        
        return res.status(200).json(dataFound);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}

export default updateUserById;