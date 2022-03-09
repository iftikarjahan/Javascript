// Javascript object are always in key value pairs
// Everything in Javascript is an object
// In javascript, we can access the properties using dot notation and square baracket notation
let obj={};
// console.log(obj);

let person={
    //key: value
    // if the keys are numbers, then its better to use bracket notation
    name: "Iftikar",
    age: 21,
    height: 168,
    gender: "male",
    phone: 8016322922
};

//accessing the properties using dot notation
console.log(person.name);
//accessing the properties using square bracket notation
console.log(person["name"]);

let captainAmerica={
    firstName:"Salman",
    lastName:"Khan",
    friends:["Sarukh Khan","Akshay Kumar","Amir Khan"],
    isAvenger:true,
    //nestingOfObject
    address:{
        city:"Mumbai",
        state:"Assam",
        roomNo:5
    },
    //addingFunctionToObjects
    displayName: function(){
        console.log(`Name of the actor is ${this.firstName} ${this.lastName} and he lives in ${this.address.city}`);
    }

};

console.log(captainAmerica);
console.log(captainAmerica.address.state);

//functions inside the objects are called methods
captainAmerica.displayName();

//looping through an object
for(let ppp in captainAmerica){
    // the in keyword refers to the individual key in the object
    console.log(ppp);
    //if i need the value of the key, we would use the bracket notation
    console.log(captainAmerica[ppp]);
}
delete captainAmerica.lastName;
console.log(captainAmerica);
