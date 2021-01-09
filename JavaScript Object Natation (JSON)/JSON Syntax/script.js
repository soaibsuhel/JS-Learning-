var student = {
name: "Suhel",
age: 23,
hometown: "Dhaka"
};

var student_json = JSON.stringify(student);

console.log(student_json);


//convart javaScript

var student_new = JSON.parse(student_json);
console.log(student_new);