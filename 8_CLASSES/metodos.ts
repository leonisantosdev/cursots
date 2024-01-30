// Aqui temos os métodos que são como funções de uma classe.
// Podemos criá-los junto das classes e os objetos podem utiliza-los e
// é uma maneira de adicionar funcionalidades as classes.
class Dwarf {
  name

  constructor(name: string) {
    this.name = name;
  }

  greeting() {
    console.log("Hey Stranger!")
  }
}

const jimmy = new Dwarf("Jimmy");

console.log(jimmy.greeting())