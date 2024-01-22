"use strict";
function showErrorMessage(msg) {
    throw new Error(msg);
}
showErrorMessage("Algum erro!");
