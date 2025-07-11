// Desafio de inverter palavra
// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.

// De olho na dica 👀: Pesquise sobre os seguintes métodos: split(), reverse() e join();

let word = 'tryber';
let reversedWord = '';

/*
reversedWord = word.split('').reverse().join('');
*/

// sem uso de métodos

for (let index = word.length - 1; index >= 0; index -= 1) {
  reversedWord += word[index];
};

console.log(reversedWord);