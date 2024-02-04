class PrivateClass {
  private name = "Private";

  showName() {
    return this.name;
  }

  private privateMethod() {
    console.log("Método privado");
  }

  showPrivateMethod() {
    this.privateMethod()
  }
}

const pObj = new PrivateClass();
//console.log(pObj.name)
console.log(pObj.showName());

//console.log(pObj.privateMethod());
console.log(pObj.showPrivateMethod())

// class TestingPrivate extends PrivateClass {
//   myMethod() {
//     this.privateMethod()
//   }
// }