async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    })
}


// IIFE function 
// (async function main() {
//     let a = await sleep();
//     console.log(a);
//     let b = await sleep();
//     console.log(b);

// })()


// (async function main() {
//     // let x , y = [1, 5]
//     // console.log(x , y);

//     // Destructuring 
//     let [x , y, ...rest] = [1, 5, 7, 8, 3, 4];
//     console.log(x , y, rest);


// })()

function sum(a,b,c){
    return a+b+c;
}

//Pull out specific things from object
(async function main() {
    


    
    let obj = {
        a:1,
        b:2,
        c:3
    }

    let {a,b} = obj;
    console.log(a, b);

    let arr = [1,4,6];
    console.log(sum(arr[0],arr[1],arr[2]));
    //SPREAD OPERATOR - SO BASICALLY IT WILL SPREAD THE ARRAY BY VALUES
    console.log(sum(...arr));


})()


