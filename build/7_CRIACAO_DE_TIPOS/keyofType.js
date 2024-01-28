"use strict";
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: "Lele",
    age: 24,
    hasDriverLicense: true,
};
console.log(showCharName(myChar, "name"));
