// Exercise:
// host your html resume using node.js
// 1. home -> index.html = /
// 2. about -> about.html = /about
// 3. contact -> contact.html = /contact
// 4. 404 page = 404.html

const fs = require("node:fs"); // Import the HTTP module
const http = require("node:http"); // Import the File System module

// function for handling index.html file 
function indexHtml (res) {
    fs.readFile("./index.html", "utf-8", (err, data) => {
        if (err) {
            res.writeHead(500, {"Content-Type": "text/error"}); // (Internal Server Error)
            return res.end("Error loading index.html");
        } else {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        };
    });
};

// function for handling about.html file 
function aboutHtml (res) {
    fs.readFile("./about.html", "utf-8", (err, data) => {
        if (err) {
            res.writeHead(500, {"Content-Type": "text/error"});
            return res.end("Error loading about.html");
        } else {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        };
    });
};

// function for handling contact.html file 
function contactHtml (res) {
    fs.readFile("./contact.html", "utf-8", (err, data) => {
        if (err) {
            res.writeHead(500, {"Content-Type": "text/error"});
            return res.end("Error loading contact.html");
        } else {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        };
    });
};

// function handling CSS Request (/style.css)
function styleCss (res) {
    fs.readFile("./style.css", "utf-8", (err, data) => {
        if (err) {
            res.writeHead(503, {"Content-Type": "style/error"});
            return res.end("Error loading style.css");
        } else {
            res.writeHead(200, {"Content-Type": "text/css"});
            res.write(data);
            res.end();
        };
    });
};

// function handling Image Request (/mypicture.jpg)
function imageRequest (res) {
    fs.readFile("./mypicture.jpg", (err, data) => {
        if (err) {
            res.writeHead(505, {"Content-Type": "image/error"});
            return res.end("Image not found");
        } else {
            res.writeHead(200, {"Content-Type": "image/jpeg"});
            res.write(data);
            res.end();
        };
    });
};

// Create an HTPP server
const server = http.createServer((req, res) => { 
    const url = req.url; // Get the URL from the request
    console.log(url); // Log the URL to the console for debugging purposes

    // checks the requested URL and serves the appropriate content.
    if (req.url === "/") {
        indexHtml(res); 
    } else if (req.url === "/style.css") {
        styleCss(res); 
    } else if (req.url === "/mypicture.jpg") {
        imageRequest(res);
    } else if (req.url === "/about") {
        aboutHtml(res);
    } else if (req.url === "/contact") {
        contactHtml(res);
    } else {
        // Handle other requests (404 Not Found)
        res.writeHead(404);
        res.end("File not found"); 
    };
});

// Listen server on port 8080
const PORT = 8080;
server.listen(PORT, () => console.log(`Server is running on ${PORT}`)); 