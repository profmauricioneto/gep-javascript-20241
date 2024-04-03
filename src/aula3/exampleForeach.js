let sum = 0;
const sequence = [1, 2, 3, 4];
sequence.forEach(sumFunction);
function sumFunction(item) {
   sum += item;
}

console.log(sum);


let percorrer = function(item) {
    console.log(item);
}

sequence.forEach(percorrer);

let newValues = [];
let multiplicarpor2 = function(item) {
    newValues.push(item*2);
}
sequence.forEach(multiplicarpor2);
console.log(newValues);