console.log("tutorial on conditionals!");

let age = 5;

let grace = 2; // age ** grace => age to the power grace 
if(age == 18){
    console.log("You can drive");
}
else if(age ==0 ){
    console.log("are u kiddin?");
}
else{
    console.log("You can't drive!")
}
//ternary operator 

let a =9;
let b=3;

let c = a-b ? a>b:b-a;
console.log(c);