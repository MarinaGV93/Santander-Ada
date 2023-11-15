//Metodos (funçoes. O que tem parenteses) de array

//Fatiamento. Pegar uma parte
let arr1 = [10, 15, 35, 54]
let arr2 = []

    //Pegar os 2 primeiros elementos. Passando o indice de inicio e final (menor que)
console.log(arr1.slice(0, 2));
   
    //Colocar 1 parametro pega do indice que colocou até o final
console.log(arr1.slice(2));

//Adicionar elementos
console.log('Antes de adicionar com push: ', arr2);
   
    //Adiciona no final
arr2.push(10, 20)
arr2.push(30)

console.log('Depois de adicionar com push: ', arr2);

console.log('Antes de adicionar com unshift: ', arr2);

    //Adiciona no começo
arr2.unshift(1)

console.log('Depois de adicionar com unshift: ', arr2);

//Remover elementos
console.log('Antes de remover com o pop: ', arr2);

    //Remove o ultimo elemento. Sempre retorna o elemento que removeu
arr2.pop()

let removido = arr2.pop()

console.log('Depois de remover com o pop: ', arr2);

console.log('O elemento removido foi ', removido);
   
    //Remover o primeiro elemento
console.log('Antes de remover com o shift: ', arr2);

arr2.shift()

console.log('Depois de remover com o shift: ', arr2);

//Concatenação
console.log('Array 1: ', arr1);
console.log('Array 2: ', arr2);

console.log(arr1.concat(arr2));

//Buscar elementos. Se retornar, é que não tem o elemento. Se tiver mais de 1 igual, sempre irá retornar o 1º
let indiceElemento = arr1.indexOf(35)

console.log(indiceElemento);

    //Para ver o ultimo elemento de duplicadas
let arr3 = [1, 2, 3, 3, 6, 3]
console.log(arr3.lastIndexOf(3));

    //Ver se o elemento esta no array
console.log(arr1.includes(10));

    //Inverter
console.log('Array normal: ', arr1);

let arrayInvertido = arr1.reverse()

console.log('Array invertido: ', arrayInvertido);
