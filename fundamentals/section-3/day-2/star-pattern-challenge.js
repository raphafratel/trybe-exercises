// Desafio dos asteriscos
// Escreva um algoritmo que, dado um valor n, sendo n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n. Por exemplo:

// n = 5

// *****
// *****
// *****
// *****
// *****

/*
let n = 6;

if (n > 1) {
  for (let i = 0; i < n; i += 1){
    let line = '';
    for (let index = 0; index < n; index += 1) {
      line += '*';    
    }
    console.log(line);
  }
}
*/


// refatorado
let n = 10;

if (n > 1) {
  for (let i = 0; i < n; i += 1){
    console.log("*".repeat(n));
  }
}