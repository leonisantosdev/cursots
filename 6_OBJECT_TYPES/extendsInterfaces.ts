// Esta parte de código é a mesma coisa que as classes,
// para não ficar repetindo explicações vou resumir para que
// entenda de maneira simples, básicamente está sendo criado
// uma interface Human com propriedades e logo depois sendo
// criada outra interface que HERDARÁ essas propriedades da
// primeira interface e ainda terá novas.
// É isto, simples e básico
interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superpowers: string[];
}

const lele: Human = {
  name: "Lele",
  age: 24,
};

console.log(lele);

const goku: SuperHuman = {
  name: "Goku",
  age: 25,
  superpowers: ["Kamehameha", "Genki Dama"],
};

console.log(goku);
