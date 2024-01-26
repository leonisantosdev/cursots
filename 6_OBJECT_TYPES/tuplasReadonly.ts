// Aqui temos as tuplas porém como READONLY, que faz com que
// o array fiquem apenas em modo de 'LEITURA' e que possamos controlar
// a quantidade de elementos e o tipo desses elementos, acredito que seja
// a maneira mais segura para declaração de um array que não gerará erros.
function showNumbers(numbers: readonly [number, number]) {
  /// numbers[0] = 10;
  console.log(numbers[0]);
  console.log(numbers[1]);
}

showNumbers([1, 2]);
