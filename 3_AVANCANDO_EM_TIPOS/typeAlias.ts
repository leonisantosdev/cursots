// Aqui temos uma tipagem diferente sendo ela o TYPE ALIAS,
// que básicamente simplifica nosso modo de uso do UNION TYPES
// sendo assim definimos com a numenclatura TYPE uma variável e
// atribuímos tipos a essa variável

type ID = string | number; // Declaração do type alias

function showID(id: ID) {
  // Aqui colocamos a variável ID para declararmos como se fosse um tipo STRING | NUMBER
  console.log(`ID: ${id}`);
}

showID(1);
showID("3");

// TYPE ALIAS É APENAS UMA FORMA RESUMIDA DE TRABALHARMOS COM 2 OU MAIS TIPOS DE VARIÁVEIS PARA O CÓDIGO
// NÃO FICAR TÃO EXTENSO E TER ALGO MAIS LIMPO/CLEAN CODE

// Diferenças de TYPE ALIAS x INTERFACE

interface Person {
  name: string,       // Nas interfaces conseguimos implementar novas propriedades usando
}                     // o mesmo nome de criação e passando a propriedade

interface Person {
  age: number
}

const somePerson: Person = {name: "John Doe", age: 22}
// const somePerso2n: Person = {name: "John Doe"}

type personType = {
  name: string        // No caso de TYPE ALIAS isso já não é possível pois este tipo de
}                     // tipagem se comporta igual a uma CONSTANTE e não pode ser atribuída nenhuma outra
                      // propriedade novamente

// type personType = {
//   age: 22
// }

/* 
-- RESUMO CURTO --

INTERFACES são "lets"
TYPE ALIAS são "constantes"

*/