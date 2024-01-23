"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é RS${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponivel!");
    }
}
const leggs = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
};
showProductDetails(leggs);
