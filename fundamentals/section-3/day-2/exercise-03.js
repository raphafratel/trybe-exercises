// 🚀 Array e loop for
// Considere esse array para realizar os próximos exercícios.

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 3. Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

let sum = 0;
let average = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum = sum + numbers[index];
}
average =  sum / numbers.length
console.log(average);