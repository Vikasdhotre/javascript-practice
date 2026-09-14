// defination of a function that takes an array as an argument
//Loop ka use kisi block of code ko repeatedly execute karne ke liye hota hai jab 
// tak given condition satisfy hoti hai.

for (let i = 1; i<=10; i++) {
    console.log(i); 
}

// Loop ka benefit yahi hai ki repetitive work automatically handle ho jata hai.

//SDET example
//Suppose 5 test cases execute karne hain:
//Real automation mein isi concept ko test data, multiple records, elements, API responses, etc. ke saath use karoge.

for (let i = 1; i <= 5; i++) {
    console.log("Executing test case number:" + i);
}

//Basic syntax
// for (initialization; condition; increment/decrement) {
//     // code to execute
// }

// flow of execution
//Initialization → Condition → Body → Increment/Decrement → Condition → ... → Stop


// 2 while loop
// defination Jab tak condition true hai, while loop repeatedly execute hota hai.
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}