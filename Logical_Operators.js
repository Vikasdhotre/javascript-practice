//Logical_Operators

// Definition
//Logical operators ka use multiple conditions ko combine karne ke liye hota hai.

// &&  AND
// ||  OR
// !   NOT

// && —> AND
//Dono conditions true honi chahiye.

// login testing example
let usernameValid = true;
let passwordValid = true;

if (usernameValid && passwordValid) {
    console.log("login test passed successfully");
}else {
    console.log("login test failed");
}

//usernameValid = true;
//passwordValid = false;
//to login fail hoga.


// || —> OR example 2
// Kisi bhi ek condition true ho to result true hoga.
// Api testing example
let statusCode = 200;

// Yahan 200 ya 201 dono acceptable hain.
if(statusCode === 200 || statusCode === 201) {
    console.log("API test passed successfully");
}else {
    console.log("API test failed");
}

//! — NOT
//Boolean ko reverse karta hai.
let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("User is not logged in");
}
// false → !false → true

// testing example
let errorMessageDisplayed = false;

if (!errorMessageDisplayed) {
    console.log("Error message is not displayed");
}

// 3️⃣ Nested if

//Definition
//Jab ek if statement ke andar doosra if statement ho, use nested if kehte hain.

// real time login testing example
let loginSuccessful = true;
let isAdmin = true;

if (loginSuccessful) {

    console.log("Login successful");

    if (isAdmin) {
        console.log("Admin dashboard should be displayed");
    }

}

//Real automation mein

//Login successful hone ke baad hi dashboard/admin functionality check karna useful ho sakta hai.
// Lekin bahut zyada nested if code ko difficult bana sakta hai.

// 4️⃣ Truthy / Falsy
// Ye JavaScript ka very important concept hai. 🔥

// Definition
// JavaScript mein kuch values condition ke context mein automatically true behave karti hain (truthy) aur kuch false behave karti hain (falsy).

// Important falsy values
// false
// 0
// ""
// null
// undefined
// NaN

// example of truthy and falsy values
let username = "";

if (username) {
    console.log("Username is available");
} else {
    console.log("Username is empty");
}

//5️⃣ Ternary Operator
//Definition
//Ternary operator if/else ka short form hai, jab sirf do possible outcomes hon.
let StatusCode = 200;

let result = statusCode === 200 ? "PASS" : "FAIL";

console.log("API Test:", result);