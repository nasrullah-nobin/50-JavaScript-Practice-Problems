function addition(num1, num2) {
  return num1 + num2;
}
function evenOddChecker(number) {
  return number % 2 === 0 ? "even" : "odd";
}
console.log(evenOddChecker(5));

function arraySum(array) {
  let sum = 0;
  for (const arr of array) {
    sum += arr;
  }
  return sum;
}
console.log(arraySum([2, 22, 54, 65, 46, 46, 96]));
//build in method
function strReverse(str) {
  return str.split(" ").reverse().join(" ");
}
// console.log(strReverse("hello World"));
// console.log(strReverse("i am learning Web dev"));

function strReverse1(str) {
  let reverse = "";
  for (const ch of str) {
    reverse = ch + reverse;
  }
  return reverse;
}
// console.log(strReverse1("i am learning Web dev"));

function strReverse2(str) {
  let reverse = "";
  for (let i = 0; i < str.length; i++) {
    reverse = str[i] + reverse;
  }
  return reverse;
}
console.log(strReverse2("i am learning Web dev"));
function strReverse3(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}
console.log(strReverse3("i am learning Web dev"));

function leapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(leapYear(2026));

function largestNumber(array) {
  if (array.length === 0) return null;
  let largest = array[0];
  for (const arr of array) {
    if (arr > largest) {
      largest = arr;
    }
  }
  return largest;
}
console.log(largestNumber([1, 3, 53, 67, 460, 43, 2, 46, 90]));

function inchToFeet(inch) {
  return inch / 12;
}
console.log(inchToFeet(5));

function calculator(num1,num2,operator){
if(operator === '+') return num1 + num2;
if(operator === '-') return num1 - num2;
if(operator === '*') return num1 * num2;
if(operator === '/') return num2 !==0? num1 / num2: 'Cannot divide by zero';
return 'invalid operator'
}
console.log(calculator(5,0,'/'))