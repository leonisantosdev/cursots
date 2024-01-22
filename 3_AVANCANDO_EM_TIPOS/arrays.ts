// Declaração de variável do tipo array numérico em TS
let numbers: number[] = [1, 2, 3,]; /* Os arrays em typescripts também devem ser tipados
informando qual conteúdo terá dentro, podendo colocar mais tipos se necessário */

numbers.push(4); // Exemplo de uma função de um ARRAY do TIPO NUMBER
// numbers.push(true) <== // A mesma função agora porém esta dando erro já que o tipo de dado passado para ela
// não é um número.

console.log(numbers[2]);

const nomes: string[] = ["João", "Maria", "Paulo"];

// nomes.push(4) <== // Mesmo erro que a função push pois o array NOMES requer uma string
// para que possa ser empurrada para dentro dela, qualquer outro tipo de variável ou
// valor que tente colocar irá dar erro!

// VARIÁVEIS DE UM TIPO SÓ ACEITAM AQUELE MESMO TIPO!