/* Type of Guard é um tipo de validação para gerar uma segurança a mais
no seu código, caso a função respectiva a ele tenha mais de um retorno
de tipo de valor.
  Faz verificações para cada tipo e os trata conforme necessitado, para
que quando retornado do client não gere nenhum erro ou bug.
*/

function sum(number1: number | string, number2: number | string) {

  if (typeof number1 === "string" && typeof number2 === "string") { // condicionando para caso a resposta seja duas strings, ele pega os valores e o converte para um número que pode também aceitar pontos flutuantes.
    console.log(parseFloat(number1) + parseFloat(number2));
  } else if (typeof number1 === "number" && typeof number2 === "number") { // condicionando para que caso o retorno seja dois números apenas faça a soma dos valores.
    console.log(number1 + number2);
  } else {
    console.log("Impossível realizar esta operação!"); // condição caso uma resposta diferente dos dois casos anteriores foi retornada fazendo com que o client/usuário seja obrigado a respeitar um tipo de valor aceitável
  }
}

sum("2", "24") // trata a resposta com a primeira opção do IF
sum(22, 18) // trata a resposta com a segunda opção do IF
sum("10", 3) // trata a resposta com a terceira opção do IF
