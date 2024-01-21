// Veja só aqui agora, temos uma função que em seus parâmetros está requisitando
// um objeto com 3 propriedades e uma delas sendo OPCIONAL, e o que seria isto?
// Quando declaramoms que uma propriedade em um parâmetro é OPCIONAL colocando uma
// interrogação(?) antes dos dois pontos (:), falamos com que essa propriedade
// possa a ser uma opção a ser declarada na chamada do resultado ou não!

// -- IMPORTANTE -- 

// LEMBRANDO QUE: 
// Não colocar o valor de uma propriedade opcional faz com que ela retorne UNDEFINED
// assim resultando em um valor indefinido e podendo gerar erros ou bugs. Geralmente
// e de maneira correta, devemos TRATAR props(propriedades de um objeto) que sejam opcionais
// e o tratamento dessas props opcionais chamam-se de -- VALIDAÇÃO DE PROPS --
function optionalProps(person: { name: string, lastName?: string, age: number}) {  
  /* Aqui se você seguiu os exemplos anteriores de maneira correta poderá ver
  que temos uma VALIDAÇÃO de um IF & ELSE onde a propriedades lastname?: é 
  opcional e se ela for false então o lastname não será atribuído,
  mas se for true ela será atribuída, olhe o exemplo abaixo! */
  if(!person.lastName) { 
    // Aqui estamos tirando a propriedade lastname?:
    console.log(`
    Olá ${person.name} 
    Idade: ${person.age}
    `);
  } else {
    // Aqui estmos colocando a propriedade lastname?:
    console.log(`
    Olá ${person.name} ${person.lastName}
    Idade: ${person.age}
    `);
  }
}

// ESTA MANEIRA DE VALIDAR É APENAS UM EXEMPLO BÁSICO, SENDO ASSIM VALIDAÇÕES LEVAM A UMA MAIOR
// "COMPLEXIDADE" E SEGURANÇA AO CÓDIGO

/* LEMBRANDO QUE, VALIDAÇÕES SÃO IMPORTANTES PARA EVITAR BUGS E ERROS FUTUROS E TAMBÉM É UMA BOA PRÁTICA */

const joao = { name: "João", lastName: "Souza", age: 17 }; // lastname?: true
const maria = { name: "Maria",  age: 24 }; // lastname?: false

console.log(optionalProps(joao));
console.log(optionalProps(maria));
