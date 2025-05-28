// MAP = PERCORRER TODO UM ARRAY
// let lista = ["Luiz","Raquel","Malu","Pyke"];
// lista.map((item, index) => {
//     console.log(`Passando: ${item}`); // o item passado da lista
//     console.log(`${index}`); // a posição desse item passado na lista
// });
// REDUCE = o reduce busca reduzir um array
// let numeros = [5, 10, 2, 3];
// let total = numeros.reduce((acumulador, numero,indice, original)=>{
//     console.log(`${acumulador} - total até o momento
//                  ${numero} - valor atual 
//                  ${indice} - indice atual
//                  ${original} - array original`);
//     return acumulador += numero;
// });
// console.log(`Total:${total}`);
// FIND = FAZER BUSCA EM UMA LISTA
// let listagem = [5, 4, "Luiz", "5", 3];
// let busca = listagem.find((item)=>{
//     if(item === "Luiz"){
//         return console.log("Encontrei o Luiz!");
//     }
//     else{
//         return console.log("Não é o Luiz!");
//     }    
// });
// console.log(busca);
// FILTER = FILTRAR PALAVRAS ou CONDIÇÕES
// let palavras = ["Raquel","Luiz","Roberta","Pyke","Malu"];
// let resultado = palavras.filter((item)=>{
//     return item.length <= 4;
// });
// console.log(resultado);
// DESAFIO 
// 1 - ​Crie uma lista de produtos
// 1.1 - A lista produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado Exiba essa lista no console quando abrir o index.html.
// let produtos = ["Computador","Telefone","Mouse","Teclado"];
// let todos = produtos.reduce((a,b,c,lista)=>{
//     return lista;
// });
// console.log(todos);
// 1.2 -  Mostre no console quantos produtos tem nessa lista.
// let produtos = ["Computador","Telefone","Mouse","Teclado"];
// let totalProdutos = produtos.length;
// console.log(totalProdutos);
// 1.3 -  Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.
// let produtos = ["Computador","Telefone","Mouse","Teclado"];
// let mouse = produtos.filter((item)=>{
//     if(item != "Mouse"){
//         return item;
//     }
// });
// console.log(mouse);
// 1.4 - Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse produto na sua lista exiba um console falando que este produto existe e mostre tambem o nome deste produto caso não exista mostre uma mensagem avisão que o produto não foi encontrado.
// let produtos = ["Computador","Telefone","Mouse","Teclado"];
// let busca = produtos.find((item)=>{
//     if(item === "Telefone"){
//         return console.log(`Produto ${item} encontrado!`);
//     }
//     else {
//         return console.log(`Produto não encontrado!`);
//     }
// });
// 1.5 -  Remova o segundo item da sua lista.
// let produtos = ["Computador","Telefone","Mouse","Teclado"];
// let tirar = produtos.filter((item)=>{
//     if(item != produtos[1]){
//         return item;
//     }
// });
// console.log(tirar);  
// 2 - Crie uma lista de apenas numeros 1,3,5,7,0,9​
// 2.1 -  Ordene essa lista do menor para o maior.
// 2.2 -  Retire o primeiro numero desta lista.
// 2.3 -  Inverta toda ordem da sua lista por exemplo: [1,3,5,7,9] para [9,7,5,3,1]
// let lista = [1,3,5,7,0,9];
// var lista2 = lista.sort();
// console.log(lista2);
// var removido = lista2.shift();
// console.log(removido);
// var listaFinal = lista2.reverse();
// console.log(listaFinal);
//3 - Crie uma string que contenha o dia de hoje, exemplo: 
// let hoje = '20/07/2019';
// Separe essa data em variaveis dia onde contenha apenas o dia, mes onde contenha apenas o mes, e ano onde contenha apenas o ano.
// let hoje = '20/07/2019';
// let [dia, mes, ano] = hoje.split("/");
// console.log(`Dia: ${dia} Mes: ${mes} Ano: ${ano}`);
"use strict";