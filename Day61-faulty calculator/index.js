/*
Create a faulty calculator using javascript

This faulty cal does follwoing:
1. It takes two number as input from the user
2. It performs wrong operation as floows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operaion 10% of the times

*/

let random = Math.random();
let a = prompt("Enter first number");
let b = prompt("Enter second number");
let c = prompt("Enter operations");

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}



if(random > 0.1){
    //perform correct calculation
    alert(`The result is ${eval (`${a} ${c} ${b}`)}`)

}
else{
    //perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval (`${a} ${c} ${b}`)}`)




}