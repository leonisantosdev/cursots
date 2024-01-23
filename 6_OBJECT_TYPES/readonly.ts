// Aqui temos uma interface readonly, onde sua funcionalidade
// faz com que a propriedade não possa mudar após criação, 
// fazendo com que a propriedade da interface se torne uma
// "Constante", no exemplo abaixo você verá isso:
interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: "Vw",
  wheels: 4, // Declarando o número 4 para a propriedade readonly
};

console.log(fusca);
// fusca.wheels = 5;  // Tentando atribuir um novo valor, mas isso gerará erro
