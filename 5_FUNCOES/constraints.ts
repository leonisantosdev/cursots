// Aqui temos uma função com um tipo genérico, onde poderemos definir o nome
// do nosso tipo, sendo ele próprio nosso (genérico) e atribuir tipagem a este
// tipo.
// Basicamente dizemos que o parâmetro desta função é do tipo 'T' e o tipo 'T' tem
// uma tipagem de 'number' ou 'string' estamos definindo seu valor de retorno como 'T'.
function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T; // Aqui temos a criação de uma variável sendo tipada com o genérico
  // 'T' pois o retorno da função deve ser 'T' e quando retornarmos a variável ela precisa
  // estar tipada de acordo com o requisito.

  if (+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }

  return biggest;
}

// Básicamente está função retorna o maior número passado entre os dois parâmetros
// de acordo com a tipagem genérica.

console.log(biggestNumber(2, 3));
console.log(biggestNumber("4", "5"));
