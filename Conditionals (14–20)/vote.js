const age = 20;
console.log(age > 18 ? "tumi voter" : "tumi shishu");

let check;
if (10 > 100) {
  check = true;
} else {
  check = false;
}
console.log(check);

const marks= 5;

if(marks <0 || marks > 100){
    console.log('Invalid')
}
else if(marks >= 90){
    console.log('A')
}
else if(marks >= 80){
    console.log('B')
}
else if(marks >= 70){
    console.log('C')
}
else if(marks >= 60){
    console.log('D')
}
else if (marks >= 40){
    console.log('E')
}
else{
    console.log('F')
}