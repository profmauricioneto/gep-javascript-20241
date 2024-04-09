var ages = [32, 33, 16, 40];
function checkAdult(age) {
return age >= 18;
}

let adults = ages.filter(checkAdult);
console.log(adults);