/* Aqui temos um método mais seguro quando queremos declarar algo como "any"
usando a tipagem UNION TYPES que significa definirmos 2 ou mais tipos especificos
para nossa variável, parãmetro etc... 
  Como pode ver abaixo o parâmetro BALANCE recebe uma tipagem de string ou number,
  podendo receber esses dois tipos de valores, assim podendo trabalhar com mais dados
  e ao mesmo tempo limitando os tipos de dados recebidos.

  DEVEMOS A TODO CUSTO TENTAR EVITAR USAR ANY, É UMA MÁ PRÁTICA E EVITA ERROS!!!
*/
function showBalance(balance: string | number) {
  console.log(`O saldo é de: ${balance}`)
}

showBalance(100)
showBalance('400')
//showBalance(true) erro!

// -- IMPORTANTE --
/* Quando usamos Union Types assim como em tipagem opcional, devemos validar os tipos
para que seja feita uma condicional dependendo do retorno da resposta. 
  Geralmente usado typeof para checar o tipo de dado recebido e trato-lo de forma correta!

 -- EXEMPLO --
*/

function showUserRole(role: boolean | string ) { // Básico de sempre, função com parâmetro tipado porém agora usando Union Types
  if(typeof role === 'boolean') { // Aqui está sendo feita a validação se o parâmetro retornado foi boolean, ele trata no IF com a condição
    return "Usupario não aprovado"; 
  } // CASO A CONDIÇÃO NÃO CAIA NO IF ESTE IF SERÁ IGNORADO TOTALMENTE, SE NÃO VICE E VERSA

  return `A função do usuário é ${role}` // Aqui está seguindo com a outra condição que seria caso não for um boolean ele aprenseta o retorno
  // da mensagem passando como resposta o que foi colocado no parâmetro da função e como nesta Union Types temos apenas dois tipos que é 
  // boolean ou string então obviamente a resposta irá ser uma STRING
  // OLHE O EXEMPLO ABAIXO
}

showUserRole(false)
showUserRole("Admin")