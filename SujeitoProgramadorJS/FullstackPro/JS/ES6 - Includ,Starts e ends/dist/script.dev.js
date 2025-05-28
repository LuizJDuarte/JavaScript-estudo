"use strict";

//Includes 
//let nome = prompt("Qual seu nome?");
var listas = ["João", "Raquel", "Malu", "José"];
listas.push(nome);
console.log(listas);

if (listas.includes("Luiz")) {
  console.log("".concat(nome, " est\xE1 na lista"));
} else {
  console.log("Não está na lista!");
} //StartsWith


var nome = "Puiz";

if (nome.startsWith("L")) {
  console.log("Seu nome começa com L");
} else {
  console.log("Seu nome NÃO começa com L");
} //EndsWith


var nom = "Raquel";

if (nom.endsWith("l")) {
  console.log("Seu nome termina com l");
} else {
  console.log("Seu nome NÃO termina com l");
}