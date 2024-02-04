"use strict";
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("John");
console.log(pessoa);
