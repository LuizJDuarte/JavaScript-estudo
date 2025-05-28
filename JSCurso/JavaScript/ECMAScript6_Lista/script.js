// Questão 1 
// Crie uma lista de produtos

//  A lista produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado Exiba essa lista no console quando abrir o index.html.
//  Mostre no console quantos produtos tem nessa lista.
//  Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.
//  Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse produto na sua lista exiba um console falando que este produto existe e mostre tambem o nome deste produto caso não exista mostre uma mensagem avisão que o produto não foi encontrado.
//  Remova o segundo item da sua lista.


// let lista = ["Computador","Telefone","Mouse","Teclado"];

// console.log(lista);
// console.log("Essa lista contém "+ lista.length + " produtos.");

// let remover = lista.filter((item, posicao)=>{
//     if(item === "Mouse"){
//         lista.splice(posicao, 1);
//     }
// });

// console.log(lista);

// let busca = lista.find((item, posicao)=>{
//     if (item === "Computador"){
//         console.log(`O item: ${item} existe! E está localizado na posição: ${posicao}`);
//     } else {
//         console.log("Produto não encontrado!");
//     }
// });

// console.log(busca);

// lista.splice(1, 1);
// console.log(lista);

//Questão 2 
// Crie uma lista de apenas numeros 1,3,5,7,0,9​

//  Ordene essa lista do menor para o maior.
//  Retire o primeiro numero desta lista.
//  Inverta toda ordem da sua lista por exemplo: [1,3,5,7,9] para [9,7,5,3,1]


// let numeros = [1,3,5,7,0,9];

// numeros.sort();
// console.log(numeros);

// numeros.shift();
// console.log(numeros);

// numeros.reverse();
// console.log(numeros);


// ================================================================================================================

//Questão 3

// Crie uma string que contenha o dia de hoje, exemplo: 
// let hoje = '20/07/2019';
//  Separe essa data em variaveis dia onde contenha apenas o dia, mes onde contenha apenas o mes, e ano onde contenha apenas o ano.

//          0123456789   
let hoje = '20/07/2019';

let dia = hoje.slice(0,2);
console.log(dia);

let mes = hoje.slice(3,5);
console.log(mes);

let ano = hoje.slice(6);
console.log(ano);