// A tupla é um tipo de array onde iremos dizer exatamente a
// quantidade de elementos e os tipos desses elementos, isto é
// muito bom pois torna nosso código muito seguro e faz com que
// saibamos exatamente quais valores estarão sendo passar pelo array
// e também fica muito mais fácil a manipulação.
type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];
// const myNumberArray2:fiveNumbers = [1, 2, 3, 4, 5, 6] // Aqui teremos um erro pois o array só aceita numbers
// e eles precisam ter até 4 elementos.

// const myNumberArray3:fiveNumbers = [1, "string", true, 4, 5] // Gerará um erro pois o array só aceita numbers

console.log(myNumberArray);
