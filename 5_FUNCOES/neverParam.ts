// A tipagem 'NEVER' serve para indicarmos erros básicamente,
// ou tratarmos nosso código com mais especificidade.
// Mas em resumo o never tem a mesma funcionalidade que o VOID
function showErrorMessage(msg: string): never {
  throw new Error(msg);
}

showErrorMessage("Algum erro!");
