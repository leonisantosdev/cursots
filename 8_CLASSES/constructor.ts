// Constructor são funções que irão criar
// propriedades de uma classe.
class NewUser {
  name
  age

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const joao2 = new NewUser("João", 22)

console.log(joao2)

// const pedro = new NewUser("Pedro")