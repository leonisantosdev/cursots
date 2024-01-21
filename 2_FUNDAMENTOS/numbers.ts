// tipagem de váriavel do tipo number em TS
let x: number = 30;
console.log(x);

// x = "Teste"; Erro ao tentar redeclarar a variável para um tipo string,
// pois ela aceita somente o tipo a qual foi tipada, number!

x = 16;

console.log(x) 
console.log(typeof x) // typeof é geralmente usado para retornar o TIPO de algum conteúdo, sendo variáveis, funções, objetos etc...

const y: number = 15.832732; // pontos flutuantes também servem como tipo number já que o typescript não diferencia
// os tipos de cada conteúdo, numbers podem tanto servir para inteiros quanto para números com ponto flutuante ou 
// casas decimais

console.log(y)
console.log(typeof y) 
console.log(y.toPrecision(3)) // função para determinar o número preciso de casas decimais após a vírgula, o typescript
// é muito usado também pelo fator de ter uma sensibilidade maior de interações com conteúdos tipados, assim sendo mais 
// fácil acessar a propriedades daquele tipo sendo, propriedades de Y que foi tipada como number => y.toPrecision(3)

// POR EXEMPLO:
// console.log(y.toUpperCase()) função para colocar uma string em letras maiúsculas, isto daria um erro pois a variável
// y está tipada como um number então respectivamente ela só aceitará funções que servem para tipos numbers 

// Assim fazendo com que o tipo de x e y sejam do mesmo tipo number e podendo trabalhar apenas com números sendo eles
// inteiros ou decimais

// RESUMO: variáveis do tipo number, só aceitarão funções respectivas para o tipo NUMBER