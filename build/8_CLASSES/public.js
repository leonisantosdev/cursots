"use strict";
class D {
    constructor() {
        this.x = 10;
    }
}
class E extends D {
}
const cInstance = new D();
console.log(cInstance.x);
const dInstance = new D();
console.log(dInstance.x);
