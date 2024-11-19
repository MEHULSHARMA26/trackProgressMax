console.log("tutorial of loops!");

//loop construct => helps in repeating 

// for(let i=1;i<=100;i++){
//     console.log("printing for " + i + "th time");
// }

//classical for loop
// for in loop => loops through the keys of an object/arrays => object ki keys de dega
// for of loop=> loops through the values of an arrays/string
// while loop 
// do-while loop

let obj ={
    name:"maximal",
    role:"programmer",
    company:"wiresafe"
}
for (let key in obj) {
    console.log(obj[key]);
    //key => key
    //obj[key]=> value associated with that object
}

let arr = [12,23,34,34,45,56,67,89];
for (const iterator of arr) {
    console.log(iterator);
}