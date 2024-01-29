// Generics são tipos próprios criados por nós mesmos.
//  Podendo tipar com qualquer tipo ou criar nossas próprias
// regras dentro deste tipo.
function showData<T>(arg: T): string { // Tipando o tipo genérico 'T' com nada, isto
  // indica que ele será um "ANY" já que aceitará qualquer tipo.
  return `O dado é: ${arg}`; // Retornando o valor passado ao parâmetro que está
  // tipado com o genérico 'T'.
}

showData(5); // number
showData("Testando o generic"); // string
showData(true); // boolean
showData([]); // array
showData(["Teste", 2]); // array com string e number
showData({}); // objeto
