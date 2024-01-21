// Neste exemplo aqui temos uma função que tem como dois parâmetros um OBJETO
// de nome coord com as propriedades x e y de tipagem number.
// Como sabemos que o typescript é fortemente tipado certamente,
// esses parâmetros só irão aceitar objetos que contenham duas propriedades
// do tipo NUMBER e de nome x e y na ordem correta que está sendo pedido
// Qualquer outro valor passado sendo, number, boolean, string, array ou até
// mesmo um outro objeto sem os requisitos, irá dar erro
function passCordinates(coord: { x: number; y: number }) {
  console.log("X Cordenadas: " + coord.x);
  console.log("Y Cordenadas: " + coord.y);
}

// Objeto sendo criado e colocado dentro de uma variável para que
// seja passado como parâmetro para a função seguindo a ordem correta
// de argumento no formato { x: valor e y: valor }
const objCoord = { x: 329, y: 84.2 };

// chamada da função e passagem da variável que contém o objeto
passCordinates(objCoord);
// Para deixar mais claro caso a função tenha como parâmetro sendo recebido um OBJETO com duas propriedades
// com nome valor A e valor B no exemplo sendo x e y, qualquer parâmetro que será passado como resultado para
// essa função deverá além de ser um objeto como requisito também deverá respeitar o NOME CORRETO das propriedades
// exatamendo como foi passado no parâmetro no momento da criação da função!
// -- EXEMPLO --

function example(exe: { name1: string; name2: string }) {
  console.log(`
  Olá ${exe.name1} e ${exe.name2}
  `);
}

// Note que o nome da propriedade desse objeto é exatamente igual ao nome dos
// parâmetros criado na função, pois para ser passado como um parâmetro de resposta
// precisa além de seguir os requisitos de tipagem da função, também deve respeitar
// o nome das propriedades desse parâmetro!
const exampleNames = { name1: "Joãozinho", name2: "Mariazinha" };

console.log(example(exampleNames)); // Viu? Deu certo!
