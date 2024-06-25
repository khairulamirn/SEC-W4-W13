import fs from "node:fs";
import path from "node:path";

function register(req, res) {
    const body = req.body;
    const username = body.username;
    const password = body.password;
    const confirmPassword = body.confirmPassword;
    const email = body.email;

    // 1. check validation for username, password, confirmPassword, email
    //  all fields are required
    // if any field empty, return error with status code 400

    if (!username || !password || !confirmPassword || !email) {
        return res.status(400).json({
            message: "All fields are required",
        });
    }

    // 2. check valid email with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) { // .test returns true or false
        return res.status(400).json({
            message: "Invalid email",
        });
    }

    // 3. check if password and confirmPassword match
    if (password !== confirmPassword) {
        return res.status(400).json({
            message: "Passwords and confirm password do not match",
        });
    }

    // standard convention for response data
    const resData = {
        message: "User registered successfully",
        data: {
            username,
            email,
        },
    };

    // save to a file in data folder file name users.json
    const userFilePath = path.join(process.cwd(), "data", "users.json");
    const usersData = fs.readFileSync(userFilePath, "utf-8");
    const users = JSON.parse(usersData);

    // check if user already exists
    // if yes, return error
    const userExists = users.find((user) => user.username === username);
    if (userExists) {
        return res.status(400).json({
            message: "User already exists",
        });
    }

    // add user to users array
    users.push({
        username,
        email,
    });

    // write to file
    fs.writeFileSync(userFilePath, JSON.stringify(users));

    return res.json(resData);
};

export default register;