/* Aqui temos as classes, podemos dizer que classes são formas
de organizarmos propriedades e valores designando um "TÍTULO",
como podemos ver abaixo, temos a classe 'User' e suas propriedades
são, 'name', 'age' e 'favoriteColor', isto significa que a classe 
User pode ser usada para designar caracteristas de uma pessoa, um carro,
um objeto, pois todos essas coisas possuem essas propriedades em comum!
*/
class User { // Declaração da classe User
  name; // declarando que na classe User haverá um 'name'
  age;
  favoriteColor;

  constructor(name: string, age: number, favoriteColor: string) { // tipando parâmetros que serão passados as propriedades dessa classe
    this.name = name; // Propriedades da classe User
    this.age = age;
    this.favoriteColor = favoriteColor;
  }
}
/* Também existem modos de herdarmos propriedades de uma classe e
para isso podemos usar a "função" 'extends' após a declarção do "TÍTULO"
da nossa classe e logo após passamos a classe que estamos herdando
estas propriedades e métodos!
-- EXEMPLO --
class nomeDaClasse extends classeHerdada
*/
class SuperUser extends User { // Aqui estamos herdando a classe User, assim "copiando" suas propriedades e métodos
  constructor(name: string, age: number, favoriteColor: string) { // Aqui estamos declarando os mesmos parâmetros
    // que a classe User tem pois estamos herdando suas propriedades e métodos!
    super(name, age, favoriteColor); // Para herdar declaramos um função com nome SUPER e dentro passamos os nomes
    // das propriedades e métodos
  }
}

const john = new User("John", 22, "Red"); // Criação de um objeto que tem como requisito os parâmetros de User
const paul = new SuperUser("Paul", 30, "Black"); // Criação de um objeto que tem como os requisitos os parâmetros de SuperUser
// que está sendo herdado de User assim tendo as suas caracteristicas e outros a mais casso necessário

console.log(john);
console.log(paul);

/* Logo abaixo temos um modo de verificarmos de qual tipo
de instancia é aquele objeto, por exemplo, acima declaramos
duas classes e uma delas está sendo herdada da caracteristica da outra
porém queremos dizer que uma delas é uma classe um pouco mais prioritária
assim sendo, verificamos sua instancia e logo após exebimos um console
para o tipo de cada uma.

Básicamente estamos perguntando se os objetos criados logo acima, estão vindo
de 'User' ou 'SuperUser' e dependendo de qual está vindo, a tratativa será
diferente para cada um deles, assim fazendo com que possamos colocar requisitos
para diferentes tipos de objetos e suas instanciações.
*/
function userGreeting(user: object) { // Aqui estamos definindo o tipo de parâmetro que será um objeto, no caso
  // os dois criado logo acim, john e paul
  if (user instanceof SuperUser) { // Aqui estamos definindo que algo vai acontecer SE o objeto for uma instancia de SuperUser
    console.log(`Olá, ${user.name} deseja ver os dados do sistema?`);
  } else if (user instanceof User) {  // Aqui estamos definindo que algo vai acontecer SE o objeto for uma instancia de User
    console.log(`Olá, ${user.name}`);
  }
}

userGreeting(john);
userGreeting(paul);