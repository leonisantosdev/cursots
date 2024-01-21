// Declaração de uma função onde recebe os parâmetros sendo strings
// e o seu retorno obviamente também será uma STRING
// repare que ao ter uma tipagem de retorno, você adiciona uma segurança
// a mais no seu código dizendo exatamente qual tipo de valor a função deve
// retornar
function greeting(name: string): string {
  return `Olá ${name}`;
}

console.log(greeting("Lele"));
// console.log(greeting(123));

const numberReturn: number = setTimeout(function () {
  const sallary: number = 1000;
  console.log(sallary)
}, 2000);
