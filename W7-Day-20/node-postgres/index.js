import express  from 'express';
import healthController from './controller/health.js';
import createUserTable from './models/user.js';
import createTodoTable from './models/todo.js';
import db from './database/init.js';
import registerUser from './controller/user/register.js';
import listAllUsers from './controller/user/listAll.js';
import deleteUserById from './controller/user/deleteUserById.js';
import updateUserById from './controller/user/updateUserById.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  database connection and table creation 
db().then(() => {
    createUserTable();
    createTodoTable();
});

app.get('/health', healthController.getHealth);
app.post('/health', healthController.postHealth);

// routes
app.post('/register', registerUser);
app.get('/users', listAllUsers);
app.delete('/users/:id', deleteUserById);
app.put('/users/:id', updateUserById);

app.listen(PORT, () => 
    console.log(`Running on: http://localhost:${PORT}`)
);
