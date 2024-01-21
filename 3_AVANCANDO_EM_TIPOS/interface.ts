// Aqui temos um dos tipos mais importantes do Typescript e muito usado.
// INTERFACES 
// Interaces tem a "mesma" funcionalidade do TYPE ALIAS, porém tem uma 
// forma mais prática e organizada de encapsular as tipagens ou tipos
// Basicamente você vai declarar um nome para a interface e dizer, 
// quais propriedades e os tipos de propriedades que ela terá
// Diferente do TYPE ALIAS, a interface tem um uso mais prático no código,
// pois caso seja necessário você poderá mudar o tipo de dado recebido
// através daquela propriedade, já TYPE ALIAS, NÃO!
interface Point {
  x: number;
  y: number;
  z: number;
}

function showCoords(obj: Point) { // Aqui temos uma parâmetro que está recebendo um tipo Point
// e o tipo Point recebe 3 tipos, sendo eles todos number
  console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}

const coordsObj:Point = { // Declarção de uma constante do tipo Point onde
// seus valores serão respectivos a interface e de acordo com oque os requisitos
// da tipagem pede.

  x: 20, // number
  y: 18, // number
  z: 55, // number
};

showCoords(coordsObj);

// RESUMIDAMENTE Interface nada mais é que uma forma de você encapsular TIPOS e atribuílos a outras variáveis ou outros conteúdos!