"use strict";
function sumAll(...numbers) {
    return numbers.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 5, 20, 33, 50, 100));
