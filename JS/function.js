// Function Defination
function getReady(param1,parm2){

}


// Function Invokation->during function invocation, the parameters becomes the arguments
// getReady(argument1,argument2);


function add(a,b){
    console.log(a+b);
}

// Functions are treated as first class citizen in javascript
//This implies that its the most important thing in javascript
// functions can be returned
// functions can be passed as parameters and arguments
//
//Function Expression-> In function expression, we can receive a function in a variable and can invoke it using that variable
//Syntax:
// let variable_name=function(){
//     do something
// }
// invoking a function Expression
// variable_name();


//Thsi is known as function invocation
var sayHi=function(){
    console.log("Hello I am a function expression");
}

sayHi();


//IIFE->Immediately Invoke function expression
//Here we are immediately invoking a function because 
var ans=(function (a,b){
    console.log(a+b);
})(20,40);