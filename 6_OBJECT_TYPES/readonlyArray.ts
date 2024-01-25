let fruits: ReadonlyArray<string> = ["Maçã", "Banana", "Laranja"];

console.log(fruits);

fruits.forEach((item) => {
  console.log(`Fruta: ${item}`);
});

fruits.map((item) => {
  return `Fruta: ${item}`;
});
