class Vehicle {
    constructor(a, b, c) {
        this.make = a;
        this.model = b;
        this.year = c;
    }
    honk() {
        return "Beep.";
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

class Car extends Vehicle {
    constructor (a,b,c) {
        super(a,b,c);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor (a,b,c) {
        super(a,b,c);
        this.numWheels = 2;
    }
    revEngine() {
        return "VROOM!!!";
    }
}

class Garage {
    constructor(a) {
        this.vehicles = [];
        this.capacity = a;
    }
    add(vehicle) {
    if (!(vehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
    }
    if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
    }
    this.vehicles.push(vehicle);
    return "Vehicle added!";
}
}