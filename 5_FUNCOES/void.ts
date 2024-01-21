// Aqui temos uma função que apenas seu RETORNO está
// sendo tipado, oque indica que a função retorna VOID
// no caso ela não retorna nada, é uma função VAZIA.
//  Funções void apenas fazem algo e não retornam nenhum valor.

function withoutReturn():void { // Tipando o retorno da função como Void
  console.log("Esta função não retorna nada!") // Apenas um console.log() que apresentar uma mensagem no terminal

  // return 1 // Caso você tente retornar algo ele vai dar erro, pois VOID não retorna nada
  // e a função esta tipada como VOID.
}

withoutReturn() // Chamada da função withoutReturn()
