const express = require('express');
const path = require('path');

const app = express();
const PORT = 8880;

app.use(express.static('public'));

// routes home
app.get("/", function(req, res){
    // set header to html
    const homePage = path.join(__dirname, "views", "index.html");
    res.setHeader("Content-Type", "text/html");
    res.sendFile(homePage);
});

// about
app.get("/about", function(req, res){
    const homePage = path.join(__dirname, "views", "about.html");
    res.setHeader("Content-Type", "text/html");
    res.sendFile(homePage);
});

// projects-skills
app.get("/projects-skills", function(req, res){
    const projectsSkillsPage = path.join(__dirname, "views", "projects-skills.html");
    res.setHeader("Content-Type", "text/html");
    res.sendFile(projectsSkillsPage);
});

// contact
app.get("/contact", function(req,res) {
    const contactPage = path.join(__dirname, "views", "contact.html");
    res.setHeader("Content-Type", "text/html");
    res.sendFile(contactPage);
});

// not found
// MUST BE THE LAST ROUTE
app.get("*", function(req,res) {
    const notFoundPage = path.join(__dirname, "views", "404.html");
    res.setHeader("Content-Type", "text/html");
    res.sendFile(notFoundPage);
});

// listen on port 8880
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));