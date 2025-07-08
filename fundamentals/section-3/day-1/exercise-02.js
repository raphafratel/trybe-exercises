// Exercício 2
// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

let num1 = 20;
let num2 = 10;

if (num1 > num2) {
  console.log(`O número ${num1} é maior do que o número ${num2}`);
} else if (num2 === num1) {
  console.log(`O número ${num2} é maior do que o número ${num1}`);
} else {
  console.log(`O número ${num2} é maior do que o número ${num1}`);
}