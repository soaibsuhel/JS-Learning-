//Spread Oparetor...

let str = "Suhelrana";
let newStr = [...str];

// console.log(newStr);

let fruit1 = ["apple", "Pine-Apple", "Mango"];
let fruit2 = ["Orange", "Grape"];
let newFruit = "Jackfruit";

let newArr  = [...fruit1, ...fruit2,  newFruit];

//console.log(newArr);
//Spread on Object (ES8)

let person = {
    fname: "suhel",
    lname: "rana"
}
    let newPerson = {...person, dob: "15-04-1998"}

    console.log(newPerson);
