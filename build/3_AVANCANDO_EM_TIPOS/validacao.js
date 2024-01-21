"use strict";
function optionalProps(person) {
    if (!person.lastName) {
        console.log(`
    Olá ${person.name} 
    Idade: ${person.age}
    `);
    }
    else {
        console.log(`
    Olá ${person.name} ${person.lastName}
    Idade: ${person.age}
    `);
    }
}
const joao = { name: "João", lastName: "Souza", age: 17 };
const maria = { name: "Maria", age: 24 };
console.log(optionalProps(joao));
console.log(optionalProps(maria));
