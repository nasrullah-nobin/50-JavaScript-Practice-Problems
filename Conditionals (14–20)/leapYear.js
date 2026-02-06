function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}
console.log(leapYear(2000));
console.log(leapYear(1900));
console.log(leapYear(2026));
console.log(leapYear(2028));
