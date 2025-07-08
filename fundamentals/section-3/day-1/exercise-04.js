// 🚀 Exercício 4
// Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

// 👀 Dica: para os ângulos serem de um triângulo válido, a soma dos três ângulos deve ser 180 graus. Um ângulo será considerado inválido se não tiver um valor positivo.

let angulo1 = 100;
let angulo2 = 60;
let angulo3 = 20;

if (!angulo1 || !angulo2 || !angulo3){
  console.log();  
}

if (angulo1 + angulo2 + angulo3 === 180) {
  console.log('Triangulo válido');
} else if (angulo1 + angulo2 + angulo3 !== 180) {
  console.log('Triangulo inválido');  
} 
