interface A {}

interface B extends A {}

interface Teste {
  showName(): string
}

type myType = B extends A ? number : string;

const someVar: myType = 5;
// const someVar2: myType = "Teste";

type myTypeB = Teste extends {showNumber(): number} ? string : boolean
