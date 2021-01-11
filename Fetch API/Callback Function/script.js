 // Callback Function 

// setTimeout(function(){
//     console.log("Hello World!");
// }, 5000);

// let persons = [
//     {firstName: "Suhel", lastName: "Rana"},
//     {firstName: "Soaib", lastName: "Hosen"}
// ]

// function createPerson(person) {
//    setTimeout(function() {
//        persons.push(person);
//    }, 4000); 
// }

// function getPerson() {
//     setTimeout(function(){
//         let output = '';
//         persons.forEach(function(person){
//             output += `<li>${person.firstName} ${person.lastName}</li>`
//         }); 
//         document.getElementById('output').innerHTML = output;
//     }, 1000);
// }

let persons = [
    {firstName: " Suhel", lastName: "Rana"},
    {firstName: "Soaib", lastName: "hosen"}
]

function createPerson(person, callback) {
   setTimeout(function() {
       persons.push(person);
       callback();
   }, 2000); 
}

function getPerson() {
    setTimeout(function(){
        let output = '';
        persons.forEach(function(person){
            output += `<li>${person.firstName} ${person.lastName}</li>`
        }); 
        document.getElementById('output').innerHTML = output;
    }, 500);
}

createPerson({firstName:"Simi", lastName: "Khatun"}, getPerson);


 