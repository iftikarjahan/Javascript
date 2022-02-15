/*
A very beautiful thing about javascript arrays is that we dont have to tell about the data type of the array
*/

let cars=[1,2,3,'Audi','BMW',true];
console.log(cars);


//Methods of an array
//pop
cars.pop();
console.log(cars);

//push
cars.push(11);
console.log(cars);

//unshift->adds element at the starting index
cars.unshift("lllll");
console.log(cars);


//shift->removes 0th elemnt of the array
cars.shift();
console.log(cars);

console.log(cars.length);


//2D arrays
let arr2d=[
    [1,2,3,4],
    [5,6,7,8],
    ["a",true],
    [23,43]
]

console.table(arr2d);
console.log(arr2d);