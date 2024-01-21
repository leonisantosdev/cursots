// Declaração de uma função que recebe dois parâmetros com tipagem de NUMBER
// isso significa que ao chamar a função, os parâmetros que poderão ser passados
// terão que ser somente números. Qualquer parâmetro de outra tipagem ocorrerá em
// ERRO
function soma(a: number, b: number) { // A tipagem do parãmetro é feita na própria função mesmo
  console.log(a + b)
}

soma(5, 4)

// soma("a", "b"); <== // Assim como todos os outros arquivos já criados e mostrados,
// a função SOMA() contendo dois parâmetros númericos como requisito não aceitará 
// nenhum outro tipo ocorrendo um erro exatamente igual nesta função comentada.
