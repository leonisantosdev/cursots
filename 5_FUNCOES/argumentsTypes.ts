// Aqui estamos passando uma tipagem genérica para uma função que
// passa como parâmetro um array do tipo genérico que é o qual criamos.
//  Agora para chamarmos a função basta apenas passarmos como parâmetro
// um array com qualquer tipo dentro, já que a tipagem foi no genérico 
// e não no valor dentro dele.
//  Mas ainda assim podemos tipar os valores de dentro do array genérico
// na chamada da função como mostra o exemplo abaixo.
function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [5, 6]));
console.log(mergeArrays<number | string>([1, 2, 3], ["Teste", "Tesanndo"]));
