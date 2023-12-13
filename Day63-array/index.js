let arr = [1,2,3,4,5];

console.log(arr);
console.log("arr length : " + arr.length);
console.log(arr[0]);

// array return undefined if the element is not present. Arrays are immutable.
console.log(arr[10]);

//Strings are immutable that we can not change the string once the value is given to some element.


console.log(arr.toString());
console.log(arr.join(" and "));

a=[1,2,3,4,5,6];
//this functrion will give us the last element
a.pop();
console.log(a)

a.push(100);
a.push("gagan");
console.log(a);

a.shift(); //shift is pop brother
console.log(a);

a.unshift("Jack") // unshift is push brother
console.log(a);

delete a[6];
console.log(a);