let a = prompt("Enter first number");
let b = prompt("Enter second number");

if(isNaN(a) || isNaN(b)){ 
    throw SyntaxError("Sorry this is not allowed");
} 
let sum = parseInt(a)+parseInt(b);

try {
    console.log("The sum is ", sum*x);
} catch (error) {
    console.log("bhai tu code dekh glt kara hai");
}finally{
    console.log("the files are now closed and db connction is loosed");
}
