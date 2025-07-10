// 🚀 Array e loop for
// Considere esse array para realizar os próximos exercícios.

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

let oddCount = 0;

for (let index = 0; index <= numbers.length; index += 1) {
  if (numbers[index] % 2 === 1) {
    oddCount += 1;
  }
}

if (oddCount) {
  console.log(`A sequencia de números tem ${oddCount} números ímpares`);
} else {
  console.log(`Nenhum valor impar encontrado`);  
}
