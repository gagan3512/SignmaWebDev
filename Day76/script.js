// async function getData(){
//     // Simulate getting data from a server
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(455);
//         },3500);
//     })
// }

// settle means resolve or reject
// resolve means promise has settled succesfully
// reject means promise has not settles succesfully



async function getData(){
    // Simulate getting data from a server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data);
}
async function main(){ 

// Asynch await
console.log("Loading modules");

console.log("Do something else");

console.log("Load data");

let data = await getData();

console.log(data);
console.log("process data");
console.log("Data 2");

}

main();



























// console.log("Loading modules");
// console.log("Do something else");
// console.log("Load data");
// let data = getData();
// //1 st approach
// data.then((v)=>{
//     console.log(data);
//     console.log("process data");
//     console.log("task 2 ");
// })