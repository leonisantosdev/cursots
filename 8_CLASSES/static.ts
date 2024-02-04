class StaticMembers {
  static prop = "Teste static"

  static staticMethod() {
    console.log("Este é um método estático!")
  }
}

console.log(StaticMembers.prop)
StaticMembers.staticMethod()