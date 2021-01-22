//Object Destructing

let person = {
    firstName: "suhel",
    lastName: "fahim",
    dob: "01-12-21"
}

//let fname = person.firstName,
//lname = person.lestName,
//let{ firstName ,astName, dob} = person;
//consol.log(fname,lastName,dob);

function display({ firstName, lastName, dob}) {
    console.log(firstName, lastName, dob);

}

display(person);