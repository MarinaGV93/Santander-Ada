 //Guardar inúmeras informações
    //Pode colocar com tipos diferentes
    let arr = ['Marina', 30, 1.49, true]
    console.log(arr);
    
    //Imprimir 1º elemento usando o índice, que sempre começa com 0
    console.log('Primeiro elemento: ', arr[0]);
    
    //Obter o tamanho
    
    console.log('Tamanho do array: ', arr.length);
    
    //For para percorrer o array e imprimir os elementos
    for (let i = 0; i < array.length; i++) {
        console.log(arr[i]);
    }
    
    //OU
    
    //For of. Percorre fora do array. A cada iteração, pegar 1 elemento (variavel) do array
    for (let elem of arr) {
        console.log(elem);
    }
    
    //OU
    
    //For in. Percorre dentro do array. A cada iteração, pega o indice do array
    for (let indice in arr) {
        console.log(indice, arr[indice]);
    }