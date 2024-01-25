// Aqui estamos básicamente falando de forma resumida que estaremos,
// tipando as propriedades e os valores da interface, dizendo que
// apenas aceitaremos propriedades como 'STRING' e valores como
// 'NUMBER', isso indica uma maior segurança ao código pois agora
// sabemos exatamente quais valores irão passar pela interface antes
// de ser declarada a uma função ou parâmetro de uma função.
interface CoordObject {
  [index: string]: number;
}

let coords: CoordObject = {
  // Tipando o objeto com a interface, dizendo que
  // as propriedades desse objeto terão que seguir as regras da interface declarada acima.
  x: 10,
};

coords.y = 15;
console.log(coords);

// coords.z = "teste"; // Tentantiva de declaração de 'STRING' no valor
// de uma propriedade que só aceita 'NUMBER' e isso gerará em um erro!
