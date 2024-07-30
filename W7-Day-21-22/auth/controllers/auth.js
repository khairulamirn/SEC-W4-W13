import database from "../database/connection.js"; // connect to database
import bycrypt from "bcrypt"; // hash password 
import jwt from "jsonwebtoken"; //token
import dotenv from "dotenv";

dotenv.config();

// register user in database
async function registerUser(req, res) {
    const insertUserSQL = 
    "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *"; // sql query
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    // check all fields are not empty
    if (!username || !email || !password || !confirmPassword) {
        return res.status(400).json({
            message: "All fields are required",
        });
    }

    // check if password and confirmPassword match
    if (password !== confirmPassword) {
        return res.status(400).json({
            message: "Passwords do not match",
        });
    }

    // check valid email using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({"message": "Invalid email"});
    } 

    // convert password to hash using bcrypt
    // genSaltSync(10) generates a random salt of 10 rounds
    // 10 rounds of 2^10 iterations is 1024
    // every increment of the rounds doubles the time it takes to hash the password
    const salt = bycrypt.genSaltSync(10);
    const hashedPassword = bycrypt.hashSync(password, salt);

    // after all the data are valid, then insert into database
    // store the hashed password in database
    try {
        const resDb = await database.query(insertUserSQL, [
            username,
            email,
            hashedPassword,
        ]);
        const userId = resDb.rows[0].id;
        const resData = {
            message: "User registered successfully",
            data : {
                userId, // userId: userId same so can be just userId
                username,
                email,
            },
        };
        return res.status(200).json(resData);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
}   

// login user in database
async function loginUser(req, res) {
    const selectUserSQL = "SELECT * FROM users WHERE email = $1";
    const email = req.body.email;
    const password = req.body.password;

    // check all fields are present 
    if (!email || !password) {
        return res.status(400).json({
            message: "All fields are required",
        });
    }

    // check valid email using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({"message": "Invalid email"});
    }

    // get user from database using email 
    try {
        const resDb = await database.query(selectUserSQL, [email]);
        if (resDb.rows.length === 0) {
            // why we are not using not found error?
            // for security reasons, we don't want to tell the user if the email is not found
            // we want to keep the error message generic and not give away any information
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }
        const user = resDb.rows[0];
        const dbPassword = user.password;

        // compare password with hashed password in database
        const isPasswordMatch = bycrypt.compareSync(password, dbPassword);

        console.log(password);
        console.log(dbPassword);
        console.log(isPasswordMatch);

        // if password does not match, return error
        if (!isPasswordMatch) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        // create token jwt and send it to user
        // tokenData not include password or any sensitive information
        // this is an encoded token which can be decoded by anyone
        const tokenData = {
            id: user.id,
            username: user.username,
            email: user.email,
        };

        // const configJWT = {
        //     expiresIn: "1h",
        // };

        const token = jwt.sign(tokenData, process.env.JWT_SECRET);

        const resData = {
            message : "User logged in successfully",
            token
        };
        return res.status(200).json(resData);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
}

const authController = {
    registerUser,
    loginUser,
};

export default authController;