"use strict";
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showPrice() {
        return `Short: ${this.price}`;
    }
    get showQty() {
        return `Quantidade: ${this.qty}`;
    }
}
const newShirt = new ParameterProperties("Camisa", 5, 19.99);
console.log(newShirt.name);
console.log(newShirt.showPrice);
console.log(newShirt.showQty);
