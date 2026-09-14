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

// example of while loop in real automation testing 
//Jab tak condition true hai, while loop repeatedly execute hota hai.

let retryCount = 1;
while (retryCount <= 3) {
    console.log("Retrying to execute the test case, attempt number: " + retryCount);
    retryCount++;
}

//3 do while loop
//do...while mein code kam se kam ek baar execute hota hi hai, uske baad condition check hoti hai.

let j = 10;
do {
    console.log("value of j:", j);
    j++;
}while (j <= 5);

// testing usage Kisi operation ko at least once perform karna ho, phir condition check karni ho.


// 4 for...of loop
// for...of ka use iterable values jaise arrays aur strings ke individual values ko iterate karne ke liye hota hai.

let browsers = ["Chrome", "Firefox", "Edge", "Safari"];
for (let browser of browsers) {
    console.log("Testing on browser: " + browser);
}

//Cross-browser testing mein: use hota hai
let browser = ["Chrome", "Firefox", "Edge", "Safari"];
for (let browser of browsers) {
    console.log("Running test cases on: " + browser);
}

// 5 for...in loop
//for...in ka use object ki keys/properties ko iterate karne ke liye hota hai.
//API response/object ke fields inspect karne mein useful ho sakta hai.

let user = {
    name: "Vikas D",
    role: "SDET",
    experience: 5
};
 for (let key in user) {
    console.log(key + ": " + user[key]);
}

//6 break loop ko immediately stop kar deta hai.
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // loop ko stop kar do
    }
    console.log(i);
}

//Testing usage
//Suppose multiple test cases execute kar rahe ho aur critical failure mil gaya:

for (let testCase = 1; testCase <= 10; testCase++) {
    if (testCase === 5) {
        console.log("Critical failure in test case 5. Stopping further execution.");
        break; // loop ko stop kar do   
    }
    console.log("Executing test case number: " + testCase);
}
