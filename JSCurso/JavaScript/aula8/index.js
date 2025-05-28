/*
Luiz José Duarte tem 20 anos , pesa 67 kg
tem 1.83 de altura e seu IMC é de 20.227025721531216
Luiz José nasceu em 2003
*/
const nome = 'Luiz José';
const sobrenome = 'Duarte';
const idade = 20;
const peso = 67;
const alturaEmM = 1.83;
let IMC;
let anoDeNascimento;

IMC = peso / (alturaEmM ** 2);
const anoAtual = 2023;
anoDeNascimento = anoAtual - idade;

console.log(nome, sobrenome, 'tem', idade , 'anos , pesa', peso ,'kg' );
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${IMC}`);
console.log(nome+ ' nasceu em '+ anoDeNascimento+'.');

// TESTE - console.log(`Luiz que tem ${idade} anos, aproximadamente ${peso}kg e ${1.83}m de altura.`);
