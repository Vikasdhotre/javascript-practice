// With let, reassignment is allowed,
// but redeclaration in the same scope is not allowed.

// We can change the value of the variable,
// but we cannot declare the same variable again in the same scope.

let age = 25;

console.log("This is age:", age);

// Reassignment one thing is multiple times we can reassign the value or we can change the value
age = 30;

console.log("This is new age:", age);

age = 55;

console.log("This is updated age:", age);

// Redeclaration
// let age = 30; // ❌ Error: Identifier 'age' has already been declared

//Aur ek interesting concept next hum isi let.js mein test kar sakte hain: let ka block scope — 
// jahan same variable name nested { } ke andar allowed hota hai. Ye interview mein bahut common question hai. 🚀
// is case me Redeclaration allowed hai kyu dono alag place me hai ek global aur ek local

let vikasage = 25;
console.log("This is outside or globalvikasage:", vikasage);
{
    let vikasage = 30; // ✅ Allowed: Different block scope
    console.log("This is inside the block:", vikasage);
}

console.log("This is outside or globalvikasage after block:", vikasage); // Still 25