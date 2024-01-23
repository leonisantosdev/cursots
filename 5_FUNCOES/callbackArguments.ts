// Aqui como todos já sabemos, temos uma simples função com
// um parâmetro tipado com string e o retorno é uma string
// como sabemos se existe um retorno, certamente dentro da função
// haverá a palavra 'return' que fará com que a função retorno algo
// no caso uma STRING.
function greeting(name: string): string {
  return `Olá ${name}`; // palavra chave 'return' retornando a frase `Olá, ${name}`
}

/* Aqui temos uma função que está recebendo como parâmetro uma outra função
e o retorno é uma string e logo após o segundo parâmetro é apenas uma string.

Para entender melhor, o primeiro parâmetro da função abaixo, é uma função q 
requisita uma função q tem como parâmetros uma string e um retorno de string.
*/
function preGreeting(f: (name: string) => string, userName: string) {
  console.log("Preaprando a função!"); 

  const greet = f(userName); // Aqui a variável está recebendo a função que
  // está no primeiro parâmetro da função 'preGreetin()' e dentro dela o 
  // parâmetro passado é o segundo parâmetro da função 'preGreeting()'.
  //  Podemos dizer que a função 'preGreeting()', tem como parâmetro uma 
  // função de callback, onde o seu parâmetro tem como requisito uma string que
  // será recebida por ela mesmo.
  console.log(greet)
}


preGreeting(greeting, "Lele");
preGreeting(greeting, "João"); 