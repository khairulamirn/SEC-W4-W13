const http = require('node:http');

const fs = require("node:fs");

// const html = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My resume</title>
// </head>
// <body>
//     <h1>my name is khairul</h1>
// </body>
// </html>`;


const indexHtml = fs.readFileSync('./index.html', 'utf-8');
// Create a local server to receive data from
const server = http.createServer(function(req, res){
    const url = req.url;
    console.log(url);
    res.writeHead(215, {"Content-Type": "text/html"});
    res.write(indexHtml);
    res.end();
});

// Listen server on port 8000
const PORT = 8000;
server.listen(PORT, function (){
    console.log('Server is running on ' + PORT);
});


// Exercise:
// host your html resume using node.js
// 1. home -> index.html = /
// 2. about -> about.html = /about
// 3. contact -> contact.html = /contact
// 4. 404 page = 404.html