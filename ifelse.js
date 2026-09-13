// if else Jab hume true aur false dono situations handle karni ho, tab if...else use karte hain.

let age = 20;
//age = 15;

if (age >= 18) {
    console.log("hi i am line no 6 your eligible to vote");// 20 >= 18 → true
} else {
    console.log("hi i am line no 8 your not eligible to vote");
}

//else if 
//Agar multiple conditions check karni ho to hum else if ka use karte hain.

let marks = 15;

if (marks >= 90) {
    console.log("hi i am line no 17 your grade is A+");
}else if (marks >= 75) {
    console.log("hi i am line no 20 your grade is B");
} else if (marks >= 50) {
    console.log("hi i am line no 23 your grade is C");
}else if (marks >= 35) {
    console.log("hi i am line no 26 your grade is D");
} else {
    console.log("hi i am line no 29 your result is fail");
}

//Example 1 — Login testing

let loginSuccessful = true;
//loginSuccessful = false;

if (loginSuccessful) {
    console.log("hi i am line no 36 your login is successful");         
}else {
    console.log("hi i am line no 39 your login is not successful");
}
//console.log("hi i am line no 41 your login is not successful");

//Example 2 — HTTP status code

let StatusCode = 200;

if (StatusCode == 200) {
    console.log("API test passed successfully");
}else if (StatusCode == 404) {
    console.log("API test failed");
}

//Example 3 — Page title validation
//Automation mein aise conditions ka concept assertions/validations ke saath closely related hai.

let actualTitle = "Amazon";
let expectedTitle = "Amazon";

if (actualTitle === expectedTitle) {
    console.log("this is line no 57 Page title validation is passed");
}else {
    console.log("this is line no 59 Page title validation is failed");
}