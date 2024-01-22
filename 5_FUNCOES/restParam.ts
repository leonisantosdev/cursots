/* Aqui temos uma função que recebe como parãmetro array de números,
básicamente o rest parametros faz com que os valores passados para o
parâmetro sejam colocados dentro de um array e somados na função 'reduce'.
*/
function sumAll(...numbers: number[]) { // Tipando o rest param
  return numbers.reduce((number, sum) => sum + number) // Tratando o rest com os valores passados no parâmetro
}

console.log(sumAll(1, 2, 3, 5, 20, 33, 50, 100)) // Os valores passados dentro da função são jogados em um array e somados retornado seu valor total.