var a="7"+1;   //Here 1 is converted to a string and then concatenated with 7
var b=1+"7";  //->"1"+"7"=17
console.log(a);
console.log(b);

console.log("5"-1);   //5-1=4

//In Javascript, null and undefined are almost the same but the is exception in few cases
console.log(null*5);  //0->null with number is converted to 0
console.log(null*"5"); //here string 5 can be conveted to number so we get 0
console.log(null*"ajnaj");  //nan
console.log(undefined*5);  //nan
console.log(undefined*"dded");  //nan
console.log("ten"*4);  //nan
console.log("10"*4);//here 10 can be converted to a number so 40