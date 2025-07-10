// 🚀 Array e loop for
// Considere esse array para realizar os próximos exercícios.

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 5. Utilizando for, descubra o maior valor contido no array e imprima-o.

let highestValue = 0;

for (let index = 0; index<= numbers.length; index += 1) {
  if (numbers[index] > highestValue) {
    highestValue = numbers[index]
  }
}

console.log(`O maior valor é ${highestValue}`);


