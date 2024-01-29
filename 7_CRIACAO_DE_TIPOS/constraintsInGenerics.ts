// Constraints ajudam a limitar os tipos aceitos em um genérico
//  fazendo com que possamos manipular dados de uma forma mais 
//  organizada.
// No exemplo abaixo passamos um objeto com as propriedades
//  'name' com e valor de tipagem 'string' e então basicamente estamos 
//  dizendo que nosso tipo genérico 'T' aceitará qualquer tipo de dado 
//  desde que tenha um 'name' do tipo 'string'.
// Caso contrário gerará um erro.
function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é: ${obj.name}`;
}

const myObj = { name: "Porta", color: "Branca" }; // Contém a propriedade name: string
const otherObject = { name: "Carro", wheels: 4, engine: 1.0 }; // Contém a propriedade name: string
const thirdObj = { price: 19.99, category: "Roupas" }; // Erro pois não contém a propriedade obrigatória

console.log(showProductName(myObj));
console.log(showProductName(otherObject));
// console.log(showProductName(thirdObj));
