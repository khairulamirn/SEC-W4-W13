console.log(__dirname);
console.log(__filename);
console.log(process.cwd());


// this type of path will cause error in windows
// bcs of backslash
// const path = "C:\Users\user\Document\file.txt";
const htmlPath = './output/index.html';

// Path module 
const path = require('path');
const pathResolved = path.resolve(htmlPath);
console.log(pathResolved);