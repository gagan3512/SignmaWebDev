let array = [1,13,5,7,11];
// let newArr = [];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     newArr.push(element**2)
    
// }

//With the help of map we can write this full code in 1 line
let newArr = array.map((e,index,arr)=>{
    return e**2;

})

// Filter

console.log(" new Array is " + newArr);
