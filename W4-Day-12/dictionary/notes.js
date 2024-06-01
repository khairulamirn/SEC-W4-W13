//  API -application programming interface

// promise in JavaScript

// 3 states of promise
// 1. Pending: initial state, neither fulfilled nor rejected 
// 2. Fulfilled: meaning that the operation completed successfully 
// 3. Rejected: meaning that the operation failed

// handling promise
// 1.then() method - to handle the resolved promise
// 2. catch() method - to handle the rejected promise

const testValue = "Hello World";
const testPromise = new Promise ((resolve, reject) => {
    if (testValue === "Hello World") {
        resolve("Success");
    } else {
        reject("Failed");
    }
});


// IMPORTANT: mostly used in API calls
testPromise
    .then(function (value) {
      console.log(value);
    })
    .catch(function (error) {
      console.log(error);
});