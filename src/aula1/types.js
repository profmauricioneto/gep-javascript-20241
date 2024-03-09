var a = "teste";
console.log(typeof a); // string
console.log(typeof 95.8); //number
console.log(typeof 5); // number
console.log(typeof false); // boolean
console.log(typeof true); //boolean
console.log(typeof null); // object
var b;
console.log(typeof b); //undefined
console.log(typeof c);
var d = "olá";
console.log("valor de D: " + typeof d);
d = 5;
console.log("valor atual de D: " + typeof d);

if (true) {
    let x = "Hello from true in the IF";
    console.log(x);
}
// console.log(x);

let i;
for (i = 0; i < 10; i++) {
    console.log(i);
}
console.log("value i = " + i);