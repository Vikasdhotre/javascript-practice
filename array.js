// defination of array is 
// Array is a data structure that can hold multiple values at once.
// Array is a collection of similar or different types of data values stored in a single variable.
// Array ek data structure hai jisme hum multiple values ko ek single variable mein store kar sakte hain.
// Array can hold values of different data types like numbers, strings, objects, etc.
// Array can be created using array literal or array constructor.
// Array can be accessed using index, which starts from 0.
// array can be iterated using loops like for, for...of, for...in, while, do...while, etc.
// array can be modified using methods like push, pop, shift, unshift, splice, slice, etc.

//Without array: it will take lots of variables to store multiple values, which is not efficient and not scalable.
// let browser1 = "Chrome";
// let browser2 = "Firefox";
// let browser3 = "Edge";

// with array 
// let browsers = ["Chrome", "Firefox", "Edge", "Safari"];
//one variable can hold multiple values, which is efficient and scalable.

// arraayk can hold maultiple datatypes like numbers, strings, objects, etc.
//let mixedArray = [1, "Hello", true, {name: "John", age: 30}, [1, 2, 3]];

// array indexing starts from 0, so first element is at index 0, second element is at index 1, and so on.

// agar hame koi value ko replace tab ham ye use karrenge
// 1 replace
let browsers = ["Chrome", "Firefox", "Edge", "Safari"];
browsers[1] = "Opera"; 
console.log(browsers); // Output: ["Chrome", "Opera", "Edge", "Safari"]

// 2 how find length of array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // Output: 5

//SDET real-time example
//Suppose tumhe different browsers par test execute karna hai:
let browser = ["Chrome", "Firefox", "Edge", "Safari"];
console.log("Total browsers to test on: " + browsers.length); // Output: 4

//using loops

for (browser of browsers) {
    console.log("Executing test cases on: " + browser);
}

//push method
// definition: push method is used to add one or more elements to the end of an array and returns the new length of the array.
let fruits = ["Apple", "Banana", "Mango"];
fruits.push("Orange");
console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange"]



