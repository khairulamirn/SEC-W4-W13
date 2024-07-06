import pg from 'pg';
import createUserTable from '../models/user.js';
import createTodoTable from '../models/todo.js';
import dotenv from 'dotenv';
const { Client } = pg

// import * as dotenv from 'dotenv';
// load .env file
dotenv.config();
 
const database = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

async function testConnectionAndLog() {
    try {
        await database.connect();
        const queryTime = await database.query("SELECT NOW()");
        const databaseName = await database.query("SELECT current_database()");
        const currentTime = queryTime.rows[0].now;
        const currentDatabase = databaseName.rows[0].current_database;
        console.log(`Connected to database: ${databaseName.rows[0].current_database} at ${queryTime.rows[0].now}`);
        await createUserTable();
        await createTodoTable();
    } catch (error) {
        console.log('Failed to connect to database');
    }
};

testConnectionAndLog();

export default database;