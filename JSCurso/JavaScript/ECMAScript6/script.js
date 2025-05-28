// let pessoa = {
//     nome: "Luiz",
//     sobrenome: "Duarte",
//     empresa: "Nutes",
//     cargo: "Engenheiro de software"
// };

// //Desconstruir um Objeto
// let nome = "Raquel";

// const { nome:nomePessoa, sobrenome, cargo, empresa} = pessoa;

// console.log(nomePessoa);
// console.log(sobrenome);
// console.log(cargo);
// console.log(empresa);

//======================================================

//Desconstruir um Array
// let nomes = ["Luiz", "Raquel" , "Pyke" , "Malu"];

//Forma 1
// let {0:primeiro , 2:cachorro} = nomes;

// console.log(primeiro);
// console.log(cachorro);

//Forma 2
// let [primeironome, segundonome] = nomes;

// console.log(primeironome);
// console.log(segundonome);

//===============================

//Operador Spread 


// let primeiros = [1 , 2, 3];

// let numeros = [...primeiros, 4, 5, 6, 7, 8];

// console.log(numeros);

// let pessoa1 = {
//     nome: "Luiz",
//     sobrenome: "José"
// };

// let novaPessoa1 = {
//     ...pessoa1,
//     idade: 21
// };

// console.log(novaPessoa1);

// function novoUsuario(info){
//     let dados = {
//         ...info,
//         status: "ATIVO",
//         inicio: "20/02/25"
//     }
//     console.log(dados)
// }

// novoUsuario({ nome:"Luiz", sobrenome:"Duarte", cargo:"DEV" });


//=========================================

// Rest Operator

// function convidados(...nomes){
//     console.log("SEJAM BEM VINDOS CONVIDADOS");
//     console.log(nomes);

// }
// convidados("Luiz", "Raquel", "Pyke");

// function sorteador(...numeros){
//     let numeroSorteio = Math.floor(Math.random() * numeros.length);
//     console.log(numeroSorteio);
//     console.log(numeros[numeroSorteio]);

// }
// sorteador(1, 3, 8, 2, 9, 18);

//====================================

// Operações com Arrays 

// MAP 

// let lista = ["Luiz","Raquel","Pyke","Malu"];

// let mapList = lista.map((item, posicao)=>{
//     console.log(`O item: ${item} está na posição: ${posicao}`);
// });


// Reduce 

// let lista = [1 ,5, 4];

// let reducePrint = lista.reduce((acumulador, numero, posicao, array)=>{
//     console.log(`O valor está em: ${acumulador}`);
//     console.log(`O próximo valor é: ${numero} e está na posição: ${posicao}`);
//     console.log(`O array original é: ${array}`)
//     console.log("===========================================");

//     return acumulador += numero;
// });

// console.log(reducePrint);


// Find 

// let lista = ["Luiz","Malu","Raquel","Pyke","Roberta","Juliano"];

// let busca = lista.find((item)=>{
//     return item === "Pyke";
// });

// console.log(busca);


// Filter

// let lista = ["Luiz","Malu","Raquel","Pyke","Roberta","Juliano"];

// let filtro = lista.filter((item) =>{

//     return item.length <= 5;
// });

// console.log(filtro);


// ===================================================================================================

// Arrow function ou função anônima



// let soma = (a, b) => {console.log(a + b)}

// soma(10, 2);


// ========================================================================================================

// Includes , StartsWith e EndsWith 


// let lista = ["Raquel","Pyke","Malu","Roberta","Luiz","Jose"];
// let nome = "Loi";

// if(lista.includes(nome)){
//     console.log("VAMOOOOOO");
// } else {
//     console.log("NAAAAAAAAAAM");
// }

// if(nome.startsWith("L")){
//     console.log("Seu nome começa com L");
// } else {
//     console.log("Seu nome não começa com L");
// }

// if(nome.endsWith("uel")){
//     console.log("Seu nome termina com uel");
// } else {
//     console.log("Seu nome não termina com uel");
// }

