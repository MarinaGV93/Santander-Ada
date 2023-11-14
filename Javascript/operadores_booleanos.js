const n = 10

// Igualdade
console.log(n == 20);
// Igualdade com conteudo e tipo
console.log(n === '20');

// Desigualdade
console.log(n != 20);
// Desigualdade com conteudo e tipo
console.log(n !== '20');

// Maior que
console.log(n > 20);

// Maior ou igual
console.log(n >= 20);

// Menor que
console.log(n < 20);

// Menor ou igual
console.log(n <= 20);

// Conjunções lógicas
// AND
let idade = 30
let maior = true

const maiorIdade = idade >= 18 && maior === true

console.log('Maior de idade? ', maiorIdade);

// OU
const votoFacultativo = idade < 18 || idade >= 70

// NOT
const gostandoCurso = false

console.log(!gostandoCurso);