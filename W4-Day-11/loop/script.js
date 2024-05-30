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


// ASSESSMENT LOOP

// 1. fizzbuzz (easiest)
// if the number is divisible by 3, console log fizz
// if the number is divisible by 5, console log buzz
// if the number is divisible by 3 and 5, console log fizzbuzz
// else console log the number
// example: 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz
for (let i = 0; i < 100; i++) {
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
  
  // 2. straight triangle pattern (easy)
  // *
  // **
  // ***
  // ****
  // *****
  for (let i = 0; i < 100; i++) {
    let star = "*"; 
    if (i < 10) {
      console.log(star.repeat(i));
    }
  }
  // console.log("*");
  // console.log("**");
  // console.log("***");
  // console.log("****");
  // console.log("*****");
  // console.log("******");
  
  // 3. reverse triangle pattern (moderate)
  // *****
  // ****
  // ***
  // **
  // *
  for (let i = 0; i < 100; i++) {
    let star = "*"; 
    if (i < 10) {
      console.log(star.repeat(10 - i));
    }
  }
  
  // console.log("*****");
  // console.log("****");
  // console.log("***");
  // console.log("**");
  // console.log("*");
  
  // 4. christmas tree pattern (hard)
  //     *
  //    ***
  //   *****
  //  *******
  // *********
// solution ChatGPT
  for (let i = 0; i < 100; i++) {
    let star = "*"; 
    if (i < 10) {
        let space = " ".repeat(10 - i - 1); // Calculate leading spaces
        console.log(space + star.repeat(i * 2 + 1) + space);
    }
}

// solution 3 (https://www.geeksforgeeks.org/javascript-program-to-print-pyramid-star-pattern/)
  let n = 5; 
for (let i = 1; i <= n; i++) { 
    let str = "* "; 
    let space = '  '; 
    console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
}
  // 5. diamond pattern (hard)
  //     *
  //    ***
  //   *****
  //  *******
  // *********
  //  *******
  //   *****
  //    ***
  //     *

  // solution ChatGPT
  for (let i = 0; i < 100; i++) {
    let star = "*"
    if (i < 7) {
      // Upper half of the diamond
      let space = " ".repeat(7 - i - 1);
      console.log(space + star.repeat(i * 2 + 1) + space);
    } else if (i < 14) {
      // Lower half of the diamond
      let space = " ".repeat(i - 7);
      console.log(space + star.repeat((13 - i) * 2 + 1) + space);
    }
  }
