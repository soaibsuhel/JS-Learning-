// JSON.stringify() --> JS object to JSON String
// JSON.parse() -->  JSON String to JS Object

var person1 = {
    "name": "Rahim",
    "age": 25,
    "hometown": "Dhaka",
    "married": false
};

 
 var person1_json = JSON.stringify(person1);
 
console.log(person1_json);
var person1_obj = JSON.parse(person1_json);

console.log(person1_obj);