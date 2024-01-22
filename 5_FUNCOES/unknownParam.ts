/* Aqui temos uma função que tem seu parâmetro tipado
como 'UNKNOWN'(desconhecido), esta tipagem faz com que
possamos passar qualquer valor para o parâmetro mas 
antes de manipularmos seu valor precisamos tratarmos qual
o tipo de parâmetro estará sendo passado por ele.
*/
function doSomething(x: unknown) {
  if(Array.isArray(x)) { // Aqui estamos verificando se o parâmetro vai ser um Array ou não
    console.log(x[0]); // Aqui estamos dizendo que se ele for um array, então estaremos verificando o index 0 do array.
  // CASO NÃO VERIFICARMOS, NÃO PODEREMOS USAR PROPRIEDADES RESPECTIVAS A AQUELE TIPO
  } else if(typeof x === 'number') {
    console.log("X é um number!")
  }
}

doSomething("1");
doSomething(5);
