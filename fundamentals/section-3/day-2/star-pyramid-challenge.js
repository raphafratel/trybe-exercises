// Desafio da pirâmide de asteriscos
// Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5

// *
// **
// ***
// ****
// *****

let n = 6;

if (n > 1) {
  for (let i = 0; i < n; i += 1){
    let line = '';
    for (let index = 0; index < i; index += 1) { // Basta trocar o parametro de parada de "n" para "i"
      line += '*';    
    }
    console.log(line);
  }
}