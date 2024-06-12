const http = require('node:http');

const fs = require("node:fs");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My resume</title>
</head>
<body>
    <h1>my name is khairul</h1>
</body>
</html>`;

// Create a local server to receive data from
const server = http.createServer(function(req, res){
    res.writeHead(215);
    res.write(html);
    res.end();
});

// Listen server on port 8000
const PORT = 8000;
server.listen(PORT, function (){
    console.log('Server is running on ' + PORT);
});

// host html resume using node.js 