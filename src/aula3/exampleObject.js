let person = {};
person.name = "mauricio"
person.surname = "maumneto"
person.isValid = true;

console.log(person);

for (key in person) {
    console.log(key + " = " + person[key]);
}