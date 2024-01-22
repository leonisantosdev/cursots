/* Aqui temos um parâmetro muito útil porém simples, o Default
este parâmetro faz com que básicamente caso não seja passado
um valor para um parâmetro, ele ja terá um valor por padrão, assim
evitando erros.
*/
function somaDefault(n: number, m = 10) { // Caso o segundo parâmetro não seja colocado pelo usuário, o seu valor por padrão já vai ser 10.
  return n + m;
}

console.log(somaDefault(10)) // Soma de 10 + 10, pois o segundo valor ja é padrão
console.log(somaDefault(10, 20)) // Aqui a respossta será 30, pois quando colocamos
// um parâmetro no lugar do default, substituímos o seu valor padrão pelo qual 
// estamos colocando.