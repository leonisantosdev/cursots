"use strict";
class Base {
    someMethod() {
        console.log("Alguma coisa!");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("Testando alguma outra coisa!");
    }
}
const myObject = new Nova();
myObject.someMethod();
