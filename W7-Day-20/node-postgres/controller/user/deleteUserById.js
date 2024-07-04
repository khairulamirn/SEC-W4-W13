import pool from "../../database/connection.js";

const query = `
DELETE FROM users 
WHERE id = $1;
`;

async function deleteUserById(req, res) {
    try {
        const userId = req.params.id;
        const resDb = await pool.query(query, [userId]);
        // check row count to see if user exists
        if (resDb.rowCount === 0) {
            const dataNotFound = {
                message: `user with id: ${userId} not found`,
            };
            return res.status(404).json(dataNotFound); // if not found stop here
        }
        const dataFound = {
            message: `deleted user with id: ${userId}`,
        };
        return res.status(200).json(dataFound); // else return data
    } catch (error) { // catch error
        console.error(error.message);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

export default deleteUserById;