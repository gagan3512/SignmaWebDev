import fs from "fs/promises"

 let a = await fs.readFile("Gagan.txt");

console.log(a.toString());

let b = await fs.appendFile("gagan.txt","\n\n\n this is amazing promise");
console.log(a.toString() , b);