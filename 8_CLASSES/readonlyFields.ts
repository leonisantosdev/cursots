// Readonly em classes atua como em qualquer outra
// função ou objeto, básicamente as propriedade declarada
// somente poderá ser alterada na sua criação e após isso
// o seu valor passará a ser somente de leitura e não poderá
// mais ser alterado em nenhuma parte do código.
class Car {
  name;
  readonly doors = 4; // Criação da propriedade doors readonly

  constructor(name: string) {
    this.name = name;
  }
}

// Qualquer outro valor de alguma propriedade da classe Car poderá ser
// alterada menos a doors que neste caso é 'READONLY'

const uno = new Car("Uno");
console.log(uno);
console.log(uno.doors);

console.log((uno.name = "Uno 2.0"));
