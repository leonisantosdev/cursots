// tipagem de váriavel do tipo string em TS
const firstName: string = "Lele";

console.log(firstName.toUpperCase()); // Função para colocar caracteres de uma variável do tipo string em MAIÚSCULAS.toUpperCase()

/* Agora diferente dos exemplos no arquivo numbers.ts, você pode ver que estamos associando uma propriedade
a variável de tipo string e usando uma função para colocar os caracteres dessa variável em letras maiúsculas, e como
a variável é do tipo string a função neste caso irá funcionar 

EXEMPLO DA FUNÇÃO ACIMA:
console.log(firstName.toUpperCase());
*/

let lastName: string = "Souza"; // Declaração da variável de tipo string
let fullName: string; // Declaração da variável de tipo string porém sem inicializa-la; 

// VARIÁVEIS NÃO INICIALIZADAS RETORNAM UNDEFINED!!!!

fullName =  firstName + " " + lastName; // Aqui estamos declarando a variável fullName que até então era do tipo STRING porém
// estava indefinida devido a não ter nenhum valor dentro, logo após fizemos a junção de duas variáveis do tipo string sendo assim
// string = string + " " + string; <== ISSO ESTÁ CORRETO E IRÁ FUNCIONAR pois os tipos são iguais e combinam.

// Como eu havia dito antes, você pode reatribuir variáveis, desde que elas sejam do mesmo TIPO e desde que sejam LET!!!!!!!!!

console.log(typeof fullName + " = " + typeof firstName + " + " + typeof lastName) /* Abra o strings.js na web ou 
navegador como preferir chamar e você entenderá um pouco mais sobre oque quis dizer que tipos iguais podem ser
reatribuidos a variáveis do mesmo tipo 

ABRA O INSPECIONAR NO SEU NAVEGADOR E OLHE A ABA CONSOLE!!
*/

console.log(fullName); // Nome completo juntando as variáveis de tipo string