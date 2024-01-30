"use strict";
class Car {
    constructor(name) {
        this.doors = 4;
        this.name = name;
    }
}
const uno = new Car("Uno");
console.log(uno);
console.log(uno.doors);
console.log((uno.name = "Uno 2.0"));
