const express = require('express');
// const fs = require('node:fs');
const path = require("path");


const app = express();
const PORT = 8080;

// middleware
app.use(express.static("public"));

// file path
// const homePage = path.join(__dirname, "views", "index.html");
// const aboutPage = path.join(__dirname, "views", "about.html");
// const notFoundPage = path.join(__dirname, "views", "404.html");

// files html
// const homePage = fs.readFileSync(homePage, "utf-8");
// const aboutPage = fs.readFileSync(aboutPage, "utf-8");
// const notFoundPage = fs.readFileSync(notFoundPage, "utf-8");

// routes
// HTTP methods - GET, POST, PUT, DELETE 
app.get("/", function(req, res){
    // set header to html
    const homePage = path.join(__dirname, "views", "index.html");
    res.setHeader("Content-Type", "text/html");
    res.sendFile(homePage);
});

app.get("/about", function(req,res) {
    const aboutPage = path.join(__dirname, "views", "about.html");
    res.setHeader("Content-Type", "text/html");
    res.sendFile(aboutPage);
});

// not found
// MUST BE THE LAST ROUTE
app.get("*", function(req,res) {
    const notFoundPage = path.join(__dirname, "views", "404.html");
    res.setHeader("Content-Type", "text/html");
    res.sendFile(notFoundPage);
});

app.listen(PORT, function() {
    console.log(`Server is running on ${PORT}`);
});

// final portfolio presentetion
// 1. create a new project node js express
// 2. create a new folder views - index.html, about.html, contact.html, 404.html
// 3. create a new folder public - css, js, images
// 4. setup a node js express server to serve the portfolio with routes