// Também podemos criar interfaces com tipos genéricos
// onde podemos passar como valor para a propriedade o nosso
// genérico sem tipagem nenhuma fazendo com que na criação
// do objeto seja apenas obrigatório a propriedade 'name' do tipo
// 'string' e as outras propriedades restante podemos determinar
// conforme a necessidade.
interface MyObject<T, U, O> {
  name: string, // Declaraçõo da propriedade com valor fixo
  wheels: T, // Declarando o genérico sem tipagem para a propriedade
  engine: U,
  color: O
}

type Car2 = MyObject<number, number, string> // Aqui estamos tipando a variável com a interface e
// passando os tipos para os genéricos
type Pen = MyObject<boolean, boolean, string>

const myCar:Car2 = {name: "Fusca", wheels: 4, engine: 1.0, color: "Branco"}
const myPen:Pen = {name: "Fusca", wheels: false, engine: false, color: "Azul"}

// Este tipo de tipagem é muito boa, pois assim sempre que quisermos criar um novo objeto com tipagens
// diferentes podemos, pois os genéricos só são tipados no momento da criação da váriavel e dps passados 
// ao objeto como um tipo.