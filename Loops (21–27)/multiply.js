let multiply = 3;
for (let i = 1; i <= 10; i++) {
  console.log(multiply, "x", i, "=", multiply * i);
}

function multiplication(num) {
  for (let i = 1; i <= 10; i++) {
    // console.log(num, "x", i, "=", num * i);
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
multiplication(5);
