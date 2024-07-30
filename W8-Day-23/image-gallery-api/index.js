import express from "express";
import healthController from "./controllers/health.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT ||3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// static for images folder
app.use(express.static('public'));

app.get('/', healthController.getHealth);
app.get('/', healthController.postHealth);

app.listen(PORT, () => {
    const name = process.env.npm_package_name;
    const version = process.env.npm_package_version;
    console.log(`Running ${name} version ${version} on port ${PORT}`);
});