"use strict";
function passCordinates(coord) {
    console.log("X Cordenadas: " + coord.x);
    console.log("Y Cordenadas: " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCordinates(objCoord);
function example(exe) {
    console.log(`
  Olá ${exe.name1} e ${exe.name2}
  `);
}
const exampleNames = { name1: "Joãozinho", name2: "Mariazinha" };
console.log(example(exampleNames));
