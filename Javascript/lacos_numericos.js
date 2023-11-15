const input = require('readline-sync')

//Acumulador
    //Variavel que acumula os valores e leva para frente a partir de operações
let acumulador = 0

acumulador += 10 //10
//acumulador = acumulador + 10

acumulador -= 2 //8
//acumulador = acumulador - 2

acumulador++ //Soma 1 = 9

console.log(acumulador);

//Estrutura controlada. Sabe quantas vezes quer repetir
    //Começa de 0 ate quando for menor que 10, sempre soma +1
for (let i = 0; i < 10; i++) {
    console.log('Repetindo 1');
}

//Subitraindo 1
for (let j = 12; j > 0; j--) {
    console.log('Repetindo 1');
}

//Tirar média de 3 notas

let nota
let soma = 0

for (let k = 1; k <= 3; k++) {

    //Use crase para usar uma variável no meio da string
    nota = Number(input.question(`Informe a nota ${k} do aluno: `))

    //Média
    soma = soma + nota
}

console.log(`A média do aluno é ${soma/3}`);