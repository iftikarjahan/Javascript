// In JS we can declare variable in three ways
// var let const

//varuiable declaration
var a; //here we dont need to specify the data type

//variable initialisation
a=10;

//print statement
//console.log(a);


a="hello";
console.log(a);

// type off operator->tells us the type of data stored in a variable
console.log(typeof a);

str="How are you? \nI am fine.";
//console.log(str);

str2=`hello world
I am really happy`;
//console.log(str2);


var a=500;
console.log(`Half of ${a} is ${a/2}`);

//****************reinitialisation is allowed in var but redeclaration is not allowed************************


//***************let->var and let both function the same way,but let has a block scope and var has aglobal scopre******************************/

//loops
var a=10;

for(var i=1;i<=a;i++){
    if(i%2==0){
        console.log(`Number ${i} is even`);
    }
}


//****************const->cannot be redeclared as well as reinitialised************************** */
const z=10;
console.log(a);
z=100;  //error