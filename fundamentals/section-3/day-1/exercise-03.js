// Exercício 3
// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

let num1 = 10;
let num2 = 20;
let num3 = 30;



if (num1 > num2 && num1 > num3) {
  console.log(`O número ${num1} é maior do que o número ${num2} e ${num3}`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`O número ${num2} é maior do que o número ${num1} e ${num3}`);
} else if(num3 > num2 && num3 > num1){
  console.log(`O número ${num3} é maior do que o número ${num1} e ${num2}`);
} else {
  console.log("Existem números iguais");  
}