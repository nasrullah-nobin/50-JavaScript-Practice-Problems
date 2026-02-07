const student={
    name: 'boshir',
    age:23,
    roll: 34,
    marks:{
        english: 56,
        math:76,
        bangla: 80,
        optionalTest:{
            ict: 89,
            'science': 55,
        }
    }
}
console.log(student['marks']['optionalTest']['science'])
