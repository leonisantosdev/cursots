// Aqui temos keys que básicamente são utilizados para dizer
// que algum parâmetro de uma função é a chave de um objeto no 
// caso uma propriedade.
function getSomeKey<T, K extends keyof T>(obj: T, key: K) { // Aqui estamos dizendo que o que for passado
  // para dentro do parâmetro 'K' tem que ser uma propriedade do parâmetro 'T' que seria um objeto
  return `A chave ${key.toString()} está presente no objeto e tem o valor de ${obj[key]}`;
}

const server = {
  hd: "2TB",
  ram: "32GB",
};

console.log(getSomeKey(server, "ram")); // Passando para a função o objeto criado e o nome
// da propriedade(CHAVE(KEY)) que está presente no objeto.

// console.log(getSomeKey(server, 'teste')) // Caso esta chave seja passada e não esteja presente
// retornará um erro como neste console.log(getSomeKey(server, 'teste'))
