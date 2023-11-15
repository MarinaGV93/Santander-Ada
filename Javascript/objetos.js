   //Acessa por uma chave

//Criar
let pessoa = {
    nome: 'Marina',
    idade: 30
}

//Acessar 1 elemento
console.log(pessoa.nome);
//console.log(pessoa['nome']);
console.log(pessoa.idade);
//console.log(pessoa['idade']);

//Adicionar elemento
pessoa.altura = 1.49
console.log(pessoa);

//Substituir elemento
pessoa.nome = 'Mah'

//Remover uma chave
delete pessoa.altura
console.log(pessoa);

//Percorrer objetos
    //For in
for (let chave in pessoa) {
    console.log(chave);
}