//Laço condicional

const numero_sorteado = 5 //Ou sortear com o Math

//Ler dados com a biblioteca
/*
Instalando somente no projeto:
npm install readline-sync
Instalando no pc todo:
npm install -g readline-sync
*/

//Importando a biblioteca

const input = require(readline - sync)

//Sempre lê como um texto por padrão
let n = Number(input.question("Qual número você escolhe?"))

console.log(n, typeof n)

/*Não sabe quantas vezes vai acontecer. Ele continua na repetição até que (enquanto) a condição seja verdadeira. Loop infinito
 */
 while (n !== numero_sorteado){
      console.log('Você errou o número, tente novamente')
 
  //Escrever outro número
  n = Number(input.question("Qual número você escolhe?"))
 }
 
 console.log('Você acertou o número')