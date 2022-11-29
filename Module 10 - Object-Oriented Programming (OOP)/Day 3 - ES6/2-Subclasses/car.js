// TODO: Import the parent class
const Vehicle = require("./vehicle")

// TODO: Create a `Car` class that extends the `Vehicle` class
class Car extends Vehicle {
  constructor(id, color, passengers) {
    super(id, 4, "beep!")
    this.color = color
    this.passengers = passengers
  }
  useHorn() {
    console.log(this.sound)
  }
  checkPassengers() {
    if (this.passengers < 4) {
      const space = 4 - this.passengers
      console.log(`There’s room for ${space}!`)
    } else {
      console.log("Sorry, there’s no more room!")
    }
  }
}

const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const car = new Car(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengers();
