/*
Desafio dos asteriscos, parte 3
Agora, crie um triagulo equilatero:

Copiar
n = 6

  *
 ***
*****
*/

let n = 6;

if (n > 1) {
  for (let i = 0; i < n; i += 1){
    let line = '';
    for (let index = 0; index < i; index += 1) {
        if ( index < n - i - 1){
          line += ' ';    
        } else {
          line += '*';    
      }
    }
    console.log(line);
  }
}