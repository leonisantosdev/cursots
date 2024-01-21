const firtsName = "Lele"; // Em typescript mesmo que não declaremos o tipo da variável na sua criação
// o typescript entende sua tipagem pelo valor e já implementa isto automaticamente na variável.
// -- IMPORTANTE -- 
// Variáveis criadas com CONST que são variáveis que não podem mudar, "não recebem" tipagem ao 
// tentar visualizar passando o mouse por cima pois seu valor é sempre fixo já que é uma constante!
const anotherName = 4; 
const x = false;

function greeting(name: string) { // ( name: string ) função com requisito que só aceitará paraâmetros do tipo string
  console.log("Olá", name)
}

greeting(firtsName); // Variável do tipo STRING sendo passada para o parâmetro que tem como requisito
// um parâmetro do tipo string

// Essas duas funções abaixo que estão sendo passados os parâmetros de number e boolean estão dando erro
// pois a função agora só aceitará parâmetros do tipo string.

// -------------------------------------------------------------- //

// greeting(anotherName) 
// greeting(x)