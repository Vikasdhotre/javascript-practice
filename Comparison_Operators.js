// Comparison Operators

// defination of comparison operators isaka use do values ko compare karne ke liye hota hai.
//Result hamesha true ya false hota hai.

//  important operators
// >     greater than
// <     less than
// >=    greater than or equal
// <=    less than or equal
// ==    loose equality
// ===   strict equality
// !=    loose inequality
// !==   strict inequality

// basic example of comparison operators

let age = 25;
console.log(age > 18); // true    greater than  
console.log(age < 18); // false   less than
console.log(age >= 18); // true   greater than or equal
console.log(age <= 18); // false  less than or equal
console.log(age == 25); // true   loose equality
console.log(age === 25);// true   strict equality
console.log(age != 25); // false  loose inequality
console.log(age !== 25);// false  strict inequality

// Real-time testing example
let actualStatusCode = 200;

if (actualStatusCode === 200) {
    console.log("API test passed successfully");
}else{
    console.log("API test failed");
}

console.log(200 == "200");   // true
console.log(200 === "200");  // false

// == → value compare karta hai, type conversion kar sakta hai.

// === → value and type dono compare karta hai.

