// Coerção (conversão)

// Explícita (Manual)
const n = 10
console.log(n, typeof n);

const paraString = String(n)
console.log(paraString, typeof paraString);

const paraNumero = Number(n)
console.log(paraNumero, typeof paraNumero);
// OU
console.log(Number('1234432'));

// Para float
console.log(parseFloat('12.54561'));

// Para int
console.log(parseInt('15.2'));

// Para Boolean
console.log(Boolean(2653625));
console.log(Boolean(0));

console.clear()

// Implicita (Automatica)

// Concatena quando esta somando. Converte tudo em string
console.log(10 + '1');

// Quando for outras operações, entende que é número
console.log(10 - '1');
console.log(10 * '2');
console.log(10 / '1');

let num = 1 + '1' //11

num = num - 1 //10

console.log(num);

console.clear()

console.log(2 + 3 + 4 + '5'); //95

console.log('5' + 2 + 3 + 4); //5234

console.log('10' - '4' - '3' - 2 + '5'); //15