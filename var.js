var a = 10;
var a = 50;
console.log("Var a:", a); // var allows redeclaration

if (a > 30) {
    var a = "i am new value";
    console.log("Var a:", a);
}
console.log("Var a after if block:", a); // var is function-scoped