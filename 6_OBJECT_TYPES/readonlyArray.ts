// Aqui temos uma array onde básicamente dizemos que ele vai
// ser apenas de LEITURA, quer dizer que não poderemos colocar
// nem tirar seus valores, apenas alterar os já existentes caso necessário.
let fruits: ReadonlyArray<string> = ["Maçã", "Banana", "Laranja"];

console.log(fruits);

fruits.forEach((item) => {
  console.log(`Fruta: ${item}`);
});

fruits.map((item) => {
  return `Fruta: ${item}`;
});
