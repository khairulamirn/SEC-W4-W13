-- POSTGRES SQL QUERIES
-- there is no undo or redo in database

-- query time now 
SELECT NOW();

-- check for current database
SELECT current_database();

-- check for current user
SELECT current_user;

-- ---------------------------------------------------------
-- DATA DEFINITION LANGUAGE (DDL)
-- ---------------------------------------------------------
-- create users table with id, username, email, and password
-- id is a serial type, primary key
-- username and email are unique
CREATE TABLE users (
    id serial PRIMARY KEY, -- the function of primary key is to make sure that each row has a unique value
    username varchar(255) UNIQUE, -- 255 is the max length of character
    email varchar(255) UNIQUE,
    password varchar(255),
    created_at timestamp DEFAULT NOW()
);

-- create user table with id uuid
-- uuid is a universally unique identifier
-- example of uuid is 5b1b9b9a-0a0a-0a0a-0a0a-0a0a0a0a0a0a
CREATE TABLE users_uuid (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    username varchar(255) UNIQUE,
    email varchar(255) UNIQUE,
    password varchar(255),
    created_at timestamp DEFAULT NOW()
);

-- before running the above query, you need to install the uuid-ossp extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- delete users table
DROP TABLE users;

-- alter users table, add a new column date_of_birth
ALTER TABLE users ADD COLUMN date_of_birth date;

-- update username column to full_name
ALTER TABLE users RENAME COLUMN username TO full_name;


-- ---------------------------------------------------------
-- DATA MANIPULATION LANGUAGE (DML)
-- ---------------------------------------------------------
-- insert a new user
INSERT INTO users (username, email, password)
VALUES('zahinzul', 'zahinzul@mail.com', 'abcd5678');

-- list all users
SELECT * FROM users;

-- list all user only id, username, and email
SELECT id, username, email FROM users;

-- list users with spcific parameter
SELECT * FROM users WHERE email = 'zahinzul@mail.com';
SELECT * FROM users WHERE id = 1;

-- update username of user with id 1
UPDATE users SET username = 'zahin' WHERE id = 1;

-- update created_at
UPDATE users SET created_at = NOW();

-- delete user with id 1
DELETE FROM users WHERE id = 1;

-- delete users rows and reset the serial id
-- TRUNCATE is used to delete all rows
-- RESTART IDENTITY is used to reset the serial id
TRUNCATE users RESTART IDENTITY;

-- count the number of users
SELECT COUNT(*) FROM users;

-- count the number of users which created_at is greater than 2021-01-01
SELECT COUNT(*) FROM users WHERE created_at > '2021-01-01';



-- ---------------------------------------------------------
-- ASSSIGNMENT
-- ---------------------------------------------------------
-- create a table todos with id, name, is_completes, created_by, created_at
-- found out the creation of relationship between table users and todos
-- create DML queries to insert, update, delete, and select data from todos table