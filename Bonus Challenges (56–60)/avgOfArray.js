function avgOfArray(array) {
  if (array.length === 0) return null;
  let sum = 0;
  for (const arr of array) {
    sum += arr;
  }
  return sum / array.length;
}
console.log(avgOfArray([2, 43, 24, 5]));

function uniqueValue(array) {
  let newArray = [];
  for (const arr of array) {
    if (!newArray.includes(arr)) {
      newArray.push(arr);
    }
  }
  return newArray;
}
console.log(uniqueValue([1, 1, 3, 3, 5, 5]));


const arr = [23,23,45,45];
const unique = [...new Set(arr)];
console.log(unique);

