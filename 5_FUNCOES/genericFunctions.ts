// Aqui temos uma função que recebe um parâmetro genérico,
// este parâmetro tem o nome de T e sua syntaxe é <T>,
// logo em seguida tipamos o como um array, podendo ser de,
// strings, numbers, boolean.
function firstElement<T>(arr: T[]): T {
  return arr[0]; // Aqui estamos indicando que sempre retornaremos o primeiro valor
  // do index do array, no caso o T[0].
}

console.log(firstElement([1, 2, 3])); // Aqui estamos declaran uma array de numbers, e o valor que será retornado vai ser o 1, pois seu index é o primeiro da lista.
console.log(firstElement(["a", "b", "c"]));
// console.log(firstElement("lista"));

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2
  }
}

const newObject = mergeObjects({name: "Lele"}, {age: 30, job: "Programmer"})

console.log(newObject)