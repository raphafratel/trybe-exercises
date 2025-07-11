// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

// O fatorial é representado pelo sinal !
// Exemplo de 4 fatorial:
// 4! = 4 x 3 x 2 x 1 = 24

// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

/* let numToFactorial = 20;
let factorialResult = 0;

for (let index = numToFactorial ; index >= 2; index -= 1 ) {
  if (numToFactorial === index) {
    factorialResult = numToFactorial * (index-1);
  } else {
  factorialResult = factorialResult * (index-1);
  }
}

console.log(factorialResult);
*/

// refatorado

let numToFactorial = 10;
let factorialResult = 1;

for (let index = numToFactorial; index >= 1; index -= 1) {
  factorialResult *= index;
}

console.log(factorialResult);
