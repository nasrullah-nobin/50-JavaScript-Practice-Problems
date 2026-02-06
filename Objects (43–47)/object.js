const student = {
  name: "sodor Uddin",
  age: 14,
  id: 432,
  father: "rohmot",
  mother: "sokela",
};
console.log(Object.keys(student),Object.values(student));
console.log(Object.keys(student).includes('mother'));
for(const [key,value]of Object.entries(student)){
    console.log(key,':', value)
}
console.log('father' in student)
for(const key in student){
    console.log(key,student[key])
}