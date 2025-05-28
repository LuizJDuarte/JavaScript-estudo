// Lista 2 - ECMAScript 

//Questão 1
//​1) Verificador de Número Negativo, Positivo ou Zero: Escreva uma função que recebe um número como parâmetro 
// e verifica se é negativo, positivo ou igual a zero. A função deve retornar uma string indicando o resultado.

// function isPositive(numero){
//     if (numero < 0){
//         return console.log("Seu número é negativo!");
//     } else if ( numero > 0 ){
//         return console.log("Seu número é positivo!");
//     } else {
//         return console.log("Seu número é zero!");
//     }
// }

// isPositive();

// ==============================================================================================================

//Questão 2 
//2) Desafio da Verificação de Elemento em um Array: Crie uma função que deve esperar receber 2 parâmetros,
//  primeiro deve ser um array de números e o segundo parâmetro é um numero que deseja conferir se esse numero 
// existe dentro do array e com isso você deve mostrar o resultado se esse numero que colocou existe dentro do 
// seu array de números. 


// function findNumber(lista, number){
//         if (lista.includes(number)){
//             console.log("Numero achado!")
//         } else {
//             console.log("Numero nn achado!!");
//         }
// }

// findNumber([2,54,21,3,78],9)

// =================================================================================================================== 

//Questão 3 
//3) Com base no array abaixo o desafio como você pode percorrer e encontrar o produto com Preço Igual a R$20
//  e o resultado deve mostrar apenas o produto que tem o preço igual a R$20:

// const products = [ { name: 'Maça', price: 2.5 }, { name: 'Coca cola', price: 8 }, { name: 'Guarana', price: 5 }, { name: 'Chocolate', price: 20 } ];

// products.find((valor)=>{
//     if(valor.price === 20){
//         console.log(`O produto com o valor 20 é o ${valor.name}`);
//     }
// });


//Questão 3.1
//​3.1) Com o mesmo array de produtos acima como você pode Filtrar Produtos com Preço Menor que R$8 ?

// products.filter((preco)=>{
//     if(preco.price < 8){
//         console.log(`O produto: ${preco.name} tem o preço menor que 8.`)
//     }
// });


//==============================================================================================================

//Questão MEGA SENA

// function megaSena(numero){
//     let numeros = [];
//     if(numero < 6 || numero > 9){
//         console.log("Somente números de 6 a 9!");
//         return [];
//     } else {
//         for(let i = 0; i < numero; i++){
//             min = Math.ceil(1);
//             max = Math.floor(60);
//             numeroAleatorio = Math.floor(Math.random() * (max - min) + min);
//             if(!numeros.includes(numeroAleatorio)){
//                 numeros.push(numeroAleatorio);
//             } else {
//                 i--;
//             }
//         }
//         numeros.sort();
//         return numeros;
//     }
// }

// const resultadoMega = megaSena(7);
// console.log(resultadoMega);


//=================================================================================================

// function bubbleSort(array){
//     for(let i = 1; i <= array.length; i++){
//         for(let j = 0; j <= array.length - 1; j++){
//             if (array[j-1] > array[j]){
//                 let aux = array[j-1];
//                 array[j-1] = array[j];
//                 array[j] = aux;
//             }
//         }
//     }
//     console.log(array);
// }

// bubbleSort([5,4,3,2,1]);

//=================================================================================================

// function insertionSort(array){
//     for (let j = 1; j < array.length; j++){
//         let chave = array[j];
//         let i = j - 1;
//         while (i > -1 && chave < array[i]){
//             array[i + 1] = array[i];
//             i--;
//         }
//         array[i + 1] = chave;
//     }
//     console.log(array);
// }

// insertionSort([5,4,3,2,1]);