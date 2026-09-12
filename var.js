var a = 10;
var a = 60;
console.log("Var a:", a); // var allows redeclaration

if (a > 30) {
    var a = "i am new value";
    console.log("Var a:", a);
}
console.log("Var a after if block:", a); // var is function-scoped
a = "this new msg added";
console.log("Var a after reassignment:", a); // var allows reassignment

// Additional var practice

var name = "Vikas";
var age = 25;

console.log("Name:", name);
console.log("Age:", age);