function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é: ${obj.name}`;
}

const myObj = { name: "Porta", color: "Branca" };
const otherObject = { name: "Carro", wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.99, category: "Roupas" };

console.log(showProductName(myObj));
console.log(showProductName(otherObject));
// console.log(showProductName(thirdObj));
