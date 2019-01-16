class Garage {
    constructor(location, name, totalEmployees, founded) {
        this.location = location;
        this.name = name;
        this.totalEmployees = totalEmployees;
        this.founded = founded;
    }

    getCar() {
        const newCar = new Car(color, make, model, year);
        console.log(newCar);
    }

}

function Car(color, make, model, year) {
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year
    console.log(`The ${this.make} ${this.model} is ${this.color} and was made in ${this.year}.`);

}

const color = prompt("What color is the car?");
const make = prompt("What is the car make?");
const model = prompt("What is the car model?");
const year = prompt("What is the car year?");

const garage = new Garage('London', 'The Garage', 4, 1980);
garage.getCar();



console.log(garage);