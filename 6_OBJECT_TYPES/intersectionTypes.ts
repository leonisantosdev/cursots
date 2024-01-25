// Resumidamente não tem muito oque explicar mas,
// intersection types é para quando você quer criar
// um novo tipo junto duas propriedades de outros e
// apenas atribuir valores e nada mais.
//  Diferente de interfaces que você cria uma nova
// a partir de extends e atribui novas propriedades.
interface Character {
  name: string;
}

interface Gun {
  type: string;
  caliber: number;
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
  name: "Arnold",
  type: "Shotgun",
  caliber: 12,
};

console.log(arnold);
console.log(arnold.caliber);

// RESUMINDO SERVE PARA UNIR DUAS INTERFACES DANDO A SEMELHANÇA DO USO DE
// UMA HERANÇA KK
