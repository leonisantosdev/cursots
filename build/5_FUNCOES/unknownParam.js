"use strict";
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === 'number') {
        console.log("X é um number!");
    }
}
doSomething("1");
doSomething(5);
