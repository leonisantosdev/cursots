"use strict";
function getSomeKey(obj, key) {
    return `A chave ${key.toString()} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: "2TB",
    ram: "32GB",
};
console.log(getSomeKey(server, "ram"));
