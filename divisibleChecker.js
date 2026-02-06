function divisibleChecker(number) {
  return number % 3 === 0 && number % 5 === 0
    ? `${number} is divisible by both 3 and 5`
    : `${number} is not divisible by both 3 and 5`;
}
console.log(divisibleChecker(15));
