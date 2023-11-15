/* Define a funçao.
Enviar parametros, como receber o nome de uma pessoa
Pode colocar um parametrp padrao
*/
function saudacao(nome, curso = 'Javascript') {
    console.log(`Olá ${nome}, seja bem vindo(a) ao curso ${curso}!`);
}

//Chamar a função com o parametro
saudacao('Marina')

//Retornar um valor na funçao. Pode usar em outro momento
function soma(n1, n2){
    return n1 + n2;
    //Sempre acaba a funçao no return, menos com estruturas condicionais
}
    //Guardar o retorno
let res = soma(1, 2)

console.log(res);