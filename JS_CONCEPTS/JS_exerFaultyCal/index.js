
/* Create a faulty calculator using JS

This calculator does following:

1. It takes 2 numbers as input from the user
2. It performs wrong operations as follows:
    + --> -
    * --> +
    - --> /
    / --> **

    It performs wrong operations 10% of the time

*/

let a = prompt("enter first number!");
let b = prompt("enter second number!");

let op = prompt("enter operation you want to perform!");

let ran = Math.random();
ran = ran *100;

if(ran >=0 && ran <10){
    if(op == '+'){
        let c = a - b;
    }
    else if(op=='*'){
        let c = a + b;
    }
    else if(op=='-'){
        let c = a / b;
    }
    else if(op=='/'){
        let c=a**b;
    }
}
else{
   
}
console.log(ran);
