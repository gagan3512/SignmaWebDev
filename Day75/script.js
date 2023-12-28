console.log("Harrat is a hacker ");
console.log("Rohan is hecker");


setTimeout(() => {
    console.log("I am inside settimeout");
},0);

setTimeout(() => {
    console.log("I am inside settimeout2");
},0);

console.log("The end");

const fn = () => {
  console.log("nothing");
}


const callback = (arg,fn) => {
    console.log(arg);
    fn();


}


const loadScript = (src,callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Gagan",fn);
    document.head.append(sc);

}


loadScript("",callback);