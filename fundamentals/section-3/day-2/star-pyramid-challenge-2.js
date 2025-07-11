/*
Desafio dos asteriscos, parte 2
Agora, inverta o lado do triângulo. Por exemplo:

Copiar
n = 5

    *
   **
  ***
 ****
*****
De olho na dica 👀: Esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisa de uma lógica para imprimir espaços vazios também.
*/

let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n - 1;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};