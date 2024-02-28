class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    showInformation() {
        return `${this.brand} - ${this.model} - ${this.year}`;
    }
}

let jetta = new Vehicle("Volkswagen", "jetta", 2020);
let fusca = new Vehicle("Volkswagen", "fusca", 1967);
console.log(jetta.showInformation());
console.log(fusca.showInformation());