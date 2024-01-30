// Uma palavra reservada que serve para referenciar
// ao próprio objeto em sí ou seja, conseguimos acessar
// suas propriedades.
class Truck2 {
  model
  hp

  constructor(model: string, hp: number) {
    this.model = model
    this.hp = hp
  }

  showDetails() {
    console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`) // Aqui está sendo criada
    // uma método da classe Truck2 que mostra no console uma mensagem e os parâmetros passados no momento da criação do 
    // objeto serão referenciados na chamada do método pois está sendo chamado a própria propriedade como referência.
  }
}

const volvo = new Truck2("Volvo", 400)
const scania = new Truck2("Scania", 500)

volvo.showDetails()
scania.showDetails()