// Array criada do tipo ANY que é aceita qualquer tipo de dado;
// SYNTAXE BASE DO JAVASCRIPT
const arrayAny: any = [1, "String", true, [], {}]; /* Tipagens do tipo any
// devem ser evitadas a todo custo, pois tipar algo com any é a mesma coisa
// que não tipar e um código não tipado é um código BUGADO! */

// A SOMENTE DOIS CASOS QUE O TIPO ANY PODE SER ENVOLVIDO

// 1- UM ARRAY ONDE QUEREMOS DIVERSOS TIPOS DE DADOS
// 2- UM CÓDIGO ESPECÍFICO ONDE SABEMOS QUE O TIPO ANY NÃO AFETARÁ NO DESENVOLVIMENTO FUTURO

console.log(arrayAny);
