//function statement
function sayHello(param){
    console.log("Hello",param);
}

//functionIncocation->function can be invoked using any parameter
// sayHello(10);
// console.log("...............................");
// sayHello("Hello");
// console.log("...............................");
// sayHello([1,2,3,4,5]);
// console.log("...............................");
// sayHello({name:"Iftikar",
//             age:16
// })
// console.log("...............................");

//in javascript, in majority of the cases if we dont pass the value, we get undefined
sayHello();
//similary,if we dont retun any value from a function, we will get undefined
let rval=sayHello("papa");
console.log(rval);

/* In Javascript, functions are treated as first class citizens->a fancy way of saying that functions can be treated as variables
just like a value of a variable can be assigned to another variable, similarly the function defination can also be assigned
to another variable
*/

/*
A function that does not have any name is called an anonymous function
*/ 

let papa=function(){
    /*
    Here we can also use the concept of anonymous function i.e. we dont require any name of the function
    */ 
    console.log("I am a function received in a variable named papa");
}

papa();

/*
IIFE->Immediately Invoked Function Expression
in iife,the function is immediately called when it is defined
*/

(function fn(){
    console.log("I am an IIFE and I dont need to be called, i am called within the line itself");
})();


/*
Arrow Function->used to shorten syntax, used in react and in this keyword
*/ 
let sqvalue=function squarer(x){
    return x*x;
}

console.log(sqvalue(5));
