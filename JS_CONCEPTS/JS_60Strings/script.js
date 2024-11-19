console.log("this is strings tutorial!");
let a = "harry!";
//0 based indexing in strings

console.log(a[3]);
a[3]='x';
console.log(a[3]);

console.log(a.length); //.length is use for size of string/array
//strings in javascript are immutable! => that is they can't be changed once made!

let real_name = "maximal";
let friend = "spike";

console.log(`his name is ${real_name} and his friend's name is ${friend}`);//template literal
//${variable} => is called string interpolation
 

let b = "shivam"
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);

console.log(b.slice(1,5));//1->4 are included and 5 excluded
