const myClass = class<T> {
  name

  constructor(name: T) {
    this.name = name
  }
}

const pessoa = new myClass("John")
console.log(pessoa)