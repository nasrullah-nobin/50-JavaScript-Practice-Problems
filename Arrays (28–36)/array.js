const array = [1, 32, 43, 56, 76, 543, 32, 57];
console.log(array);
console.log(array.length);
console.log(array[0], array[7]);
let sum = 0;
let largeNum = array[0];
for (const arr of array) {
  sum += arr;
  if (arr % 2 == 0) {
    console.log(arr);
  }
  if (arr > largeNum) {
    largeNum = arr;
  }
}
console.log(largeNum);
console.log(sum);
console.log(array.reverse());

const arr = [1, 32, 43, 56, 76, 543, 32, 57];
arr.sort();
console.log(arr);
arr.sort((a, b) => b - a);
console.log(arr);
arr.sort((a, b) => a - b);
console.log(arr);

const array1 = [1, 32, 43, 43, 76, 43, 32, 57];
let nonDuplicate = [];
for (const arr of array1) {
  if (!nonDuplicate.includes(arr)) {
    nonDuplicate.push(arr);
  }
}
console.log(nonDuplicate);
