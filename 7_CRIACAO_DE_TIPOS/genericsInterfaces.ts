interface MyObject<T, U, O> {
  name: string,
  wheels: T,
  engine: U,
  color: O
}

type Car2 = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar:Car2 = {name: "Fusca", wheels: 4, engine: 1.0, color: "Branco"}
const myPen:Pen = {name: "Fusca", wheels: false, engine: false, color: "Azul"}