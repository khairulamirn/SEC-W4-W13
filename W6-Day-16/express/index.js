import express from 'express';
import helloWorld from './controller/hello-world.js';
import helloUser from './controller/hello-user.js';
import helloUserAge from './controller/hello-user-age.js';
import helloAdmin from './controller/hello-admin.js';
import register from './controller/register.js';

const app = express();
const PORT = 8080;

// middleware 
// the purpose of middleware is to transform the req and res object into something else.
// it parses the incoming request with JSON and populates the req.body property.
//  commonly used in API calls
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// function expression
app.get("/", helloWorld);

// params starts with colon :
app.get("/hello/admin", helloAdmin);
app.get("/hello/:name", helloUser);
app.get("/hello/:name/:dob", helloUserAge);

// register a user
app.post("/register", register);

app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`));