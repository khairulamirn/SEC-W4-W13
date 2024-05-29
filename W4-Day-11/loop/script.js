console.log("javascriptloaded");

//  LOOP INTRODUCTION IN JAVASCRIPT
// iteration one loop
// must have a starting point, a condition, adn an increment or decrement

//   FOR LOOP 
// for (initialization/starting point; condition/breaking point/ datatype boolean; increment/decrement) {}
for (let i = 0; i < 100  ; i++) {
    // loop scope
    if (i % 2 === 0) {
       console.log(i);
    }
    // console log only even number
}

// fizzbuzz 

for (let i = 0; i <= 15  ; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}