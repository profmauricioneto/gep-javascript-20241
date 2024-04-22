let languages = ["JavaScript", "Python", "C", "Java", "Rust"];
let [lang1, lang2, ...otherlanguages] = languages;
console.log(lang1);
console.log(lang2);
console.log(otherlanguages.length);
console.log(otherlanguages);

// object

let user = {
    name: "Maurício Neto",
    weight: 93,
    height: 1.61,
    occupation: "professor"
};

// let {name, weight, height, occupation} = user;
let {name, ...otherAttributes} = user;
console.log(name);
console.log(otherAttributes);

let product = {
    title: "video game"
};
let {price = 400, quantity = 3, title} = product;
console.log(title);
console.log(price);
console.log(quantity);
console.log(product);