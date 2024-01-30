// Aqui temos os getters que são formas de retornar
// propriedades de um objeto porém podemos modifica-las
// neste retorno.
class Person3 {
  name
  surname

  constructor(name: string, surname: string) {
    this.name = name
    this.surname  = surname
  }

  get fullName() {
    return `${this.name} ${this.surname}`
  }
}

const lele3 = new Person3("Lele", "Doe")
console.log(lele3)
console.log(lele3.fullName)