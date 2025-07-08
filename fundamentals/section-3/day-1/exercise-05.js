// Exercício 5
// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

// Atenção ⚠️: não sabe o que é switch/case? Reveja a aula pois pode ter passado despercebido ☺️. Caso queira se aventurar na aprendizagem do switch/case através da documentação, tem um link muito bom te esperando na lição de Recursos Adicionais. Por fim, você terá mais oportunidades de sedimentar o conhecimento sobre a estrutura condicional switch/case ao longo da formação! Agora, só queremos dar visibilidade que existem outras ferramentas para fazer operações condicionais, ok?

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
// ⭐️ Desafio extra, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais. Uma dica é pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

// Exemplo: Bispo -> Diagonais.

const chessPiece = "king";

switch (chessPiece.toLocaleLowerCase()) {
  case "pawn" || "peao":
    console.log("Peão -> Para frente, uma casa de cada vez");        
    break;
  case "knight" || "cavaleiro":
    console.log("Cavaleiro -> Em L (amdam 2 caasas em uma direção e mais 1 casa em outra)");    
    break;
  case "bishop" || "bispo":
    console.log("Bispo -> Na diagonal, quantas casas quiser");    
    break;
  case "rook" || "torre":
    console.log("Torre -> Na horizontal ou na vertical quantas casas quiser");    
    break;
  case "queen" || "rainha":
    console.log("Rainha -> Quantas casas quiser e em qualquer direção ");    
    break;
  case "king" || "rei":
    console.log("Rei -> Uma casa de cada vez em qualquer direção");    
    break;
  default:
    console.log("Peça inválida");    
    break;
}