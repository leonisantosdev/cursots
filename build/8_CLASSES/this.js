"use strict";
class Truck2 {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`);
    }
}
const volvo = new Truck2("Volvo", 400);
const scania = new Truck2("Scania", 500);
volvo.showDetails();
scania.showDetails();
