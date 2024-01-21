"use strict";
function sum(number1, number2) {
    if (typeof number1 === "string" && typeof number2 === "string") {
        console.log(parseFloat(number1) + parseFloat(number2));
    }
    else if (typeof number1 === "number" && typeof number2 === "number") {
        console.log(number1 + number2);
    }
    else {
        console.log("Impossível realizar esta operação!");
    }
}
sum("2", "24");
sum(22, 18);
sum("10", 3);
