// var → changeable, function scoped, redeclarable
var age = 20;
age = 25;       // works ✅
var age = 50;   // redeclare also works ✅
console.log(age); // 50

// const → not changeable, block scoped
const price = 30;
// price = 35;   // ❌ Error: Assignment to constant variable
// const price = 40; // ❌ Error: Redeclaration not allowed
console.log(price); // 30

// let → changeable, block scoped, cannot redeclare in same scope
let name = "sumit saha";
name = "sorif muhammad"; // works ✅
// let name = "new name"; // ❌ Error: Redeclaration not allowed
console.log(name); // "sorif muhammad"
