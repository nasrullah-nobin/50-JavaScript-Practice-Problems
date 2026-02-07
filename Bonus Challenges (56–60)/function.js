function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function division(num1, num2) {
  return num1 / num2;
}
function modulus(num1, num2) {
  return num1 % num2;
}
function calculator(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  }
if (operator === '-'){
    return subtract(a,b)
}
if(operator === '*'){
    return multiply(a,b)
}
if(operator === '/'){
    return division(a,b)
}
if(operator === '%'){
    return modulus(a,b)
}
else{
    return 'please write valid number'
}
}
console.log(calculator(3, 3, "%"));
console.log(calculator(3, 3, "+"));
console.log(calculator(3, 3, "-"));
console.log(calculator(3, 3, "*"));
console.log(calculator(3, 3, "/"));
