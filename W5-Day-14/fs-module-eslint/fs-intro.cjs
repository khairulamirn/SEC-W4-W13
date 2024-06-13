// const crypto = require('crypto');

// const randomNumber = crypto.randomInt(0, 100);
// console.log(randomNumber);

const fs = require('fs');

const names = ['John', 'Jane', 'Doe', 'Smith'];
const rayaGreeting = 
    'Selamat Hari Raya Aidilfitri! Maaf zahir dan batin kepada [[NAME]].';

const content = 
    'Hello world, this is a note produced by the core-module fs in node.js';

fs.writeFile('./output/text-node.txt', content, function(error) {
    if (error) {
        console.error('Error writing file');
    } else {
        console.log('File written successfully');
    }
});

fs.readFile('./input/text-node.txt', 'utf-8', function(error) {
    if (error) {
        console.error('Error reading file');
    } else {
        console.log(data);
    };
});

// rayaGreetings generator 
for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const greeting = rayaGreeting.replace("[[NAME]]", name);
    console.log(greeting);

    // write to file
    fs.writeFile(`./output/${name}-raya-greetings`, greeting, function(error) {
        if (error) {
            console.error('Error writing file');
        } else {
            console.log(`Raya greetingfor for ${name} written successfully`);
        };
    });
};