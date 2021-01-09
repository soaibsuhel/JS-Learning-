//string
//number
//object.(JSON.Object)
//arry
//boolean
//null

//Doesn't Support Undefined,date,function
var person = {
    name: "Suhel",  //string
    age: 23,          //number
    hometown:"Dhaka",
    madied: false,     //Boollean
    dob: "1998-15-04",   
    test_null: null,   //null
    greet: function() {            //function
        console.log(`Hello ${this.name}`)
    }
}

var person_json = JSON.stringify(person);
console.log(person_json);