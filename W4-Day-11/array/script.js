console.log("javascript loaded");

// 1. ARRAY INTRODUCTION IN JAVASCRIPT

// array represents by square brackets []
const emptyBasket = [] // empty basket or empty array

// we can fill the array with some ELEMENTS

// array with 5 string elements 
// each element is separated by comma 
const stringElements = ["apple", "banana", "orange", "mango", "grape"];

// array with 5 number elements 
const numberElements = [10, 20, 30, 40, 50];

const nazimBasket = ["apple", "banana", "orange", "mango", "grape"];
console.log(nazimBasket);

// 2. ARRAY INDEX 
// array index starts from 0
// to determine the value of the element in the array by its index
console.log(nazimBasket[0]);

// 3. ARRAY LENGTH
//  in array we have a property called length (return number of elements in array) 
console.log(nazimBasket.length);

// 4. ARRAY METHODS 
// method is a function that belongs to an object (array is an object)

// (MUTATION METHOD)
// 4.1 PUSH METHOD (add at last element)
console.log(nazimBasket);
// add an element to end of the array, add kiwi
nazimBasket.push("kiwi");
console.log(nazimBasket);

// 4.2 POP METHOD (remove last element)
nazimBasket.pop();
console.log(nazimBasket);

// 4.3 UNSHIFT METHOD 
// add lemon to the beginning of the array 
nazimBasket.unshift("lemon");
console.log(nazimBasket);

// 4.4 SHIFT METHOD 
// remove first element in the array 

// 4.5 SPLICE METHOD 
// remove the element by its index
// splice method take 2 arguments 
// first argument is the index of elements to be removed
// second argument is the number how much to be removed
nazimBasket.splice(2,1);
console.log(nazimBasket);

// NON-MUTATING METHOD
// 4.6 SLICE METHOD 
// slice take 2 arguments
// first argument is the index of elements to be removed
// second argument is the ending index (exclusive) to remove
// slice method returns a new array
const newBasket = nazimBasket.slice(1, 3);
console.log(nazimBasket);
console.log(newBasket);