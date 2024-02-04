abstract class AbstractClass {
  abstract showName(): void;
}

//const newObj = new AbstractClass()

class AbstractExample extends AbstractClass {
  name: string

  constructor(name: string) {
    super();
    this.name = name
  }

  showName(): void {
      console.log(`O nome é: ${this.name}`)
  }
}

const newAbstractObject = new AbstractExample("Josias")

newAbstractObject.showName()