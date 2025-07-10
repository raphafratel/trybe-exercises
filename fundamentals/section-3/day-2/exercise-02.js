// 🚀 Array e loop for
// Considere esse array para realizar os próximos exercícios.

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// 2. Some todos os valores contidos no array e imprima o resultado.
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum = sum + numbers[index];
}
console.log(sum);
