// Aqui temos a heranças e super, básicamente
// iremos usar o método 'SUPER' para herdar
// as propriedades da classe 'PAI' sendo, no caso
// abaixo temos a classe pai Machine e a classe
// KillerMachine que está herdando as propriedades
// de Machine através do método 'SUPER' assim não precisando
// reescrever toda vez as mesmas propriedades tudo de novo.

class Machine { // Criação da classe Machine
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const trator = new Machine("Trator");

class KillerMachine extends Machine { // Criando a classe KillerMachine e herdando suas propriedades
  guns;

  constructor(name: string, guns: number) {
    super(name); // Método 'SUPER' que está herdando a propriedade 'name' de Machine
    this.guns = guns;
  }
}

const destroyer = new KillerMachine("Destroyer", 4);

console.log(trator)
console.log(destroyer)