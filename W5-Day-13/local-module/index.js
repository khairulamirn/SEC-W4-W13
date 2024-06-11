const animals = require("./animals.js");
console.log(animals);

const birthYear = 2003;
const firstName = 'Khairul';
const lastName = 'Lamin';
const age = new Date().getFullYear() - birthYear;

console.log(`Hello, my name is ${firstName} ${lastName} and I am ${age} born on ${birthYear}.`);

console.log(animals.wildAnimals, animals.farmAnimals);