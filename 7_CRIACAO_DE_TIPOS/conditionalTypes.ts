// Criação de uma interface vazia
interface A {}

// Criação de uma interface 'B' que vai receber as propriedades
// da interface 'A'
interface B extends A {}

// Criação de uma interface com um método
interface Teste {
  showName(): string;
}

// Aqui está sendo criado um tipo novo que vai ser criado a partir de uma
// condição ternária, se for cria um tipo 'number' e se for false cria um
// tipo 'string'
type myType = B extends A ? number : string;

const someVar: myType = 5;
// const someVar2: myType = "Teste";

type myTypeB = Teste extends { showNumber(): number } ? string : boolean;
