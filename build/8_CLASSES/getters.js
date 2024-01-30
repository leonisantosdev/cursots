"use strict";
class Person3 {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
}
const lele3 = new Person3("Lele", "Doe");
console.log(lele3);
console.log(lele3.fullName);
