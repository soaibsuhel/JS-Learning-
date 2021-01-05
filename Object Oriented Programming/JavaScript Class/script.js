class Person{
    constructor(fname,lname,birthday){
        this.firstname = fname;
        this.lastname = lname;
        this.dob = birthday;
    }

    calculateAge(){
     let birthday = new Date(this.dob);   
     let diff = Date.now() -  birthday.getTime();
     let ageDate = new Date(diff);
     return Math.abs(ageDate.getUTCFullYear() - 1970);   
    }
    
}

let Person1 = new Person("suhel", "rana", "04-15-1998");
let Person2 = new Person("mohian", "supto", "12-10-1997");
let Person3 = new Person("imdad", "imdadul", "11-04-1999");


console.log(Person1.calculateAge());
console.log(Person2.calculateAge());
console.log(Person3.calculateAge());