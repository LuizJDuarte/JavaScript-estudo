/*
012345678901234567890123
Luiz Jose Mendoca Duarte

const nome = prompt('Digite seu nome completo:');
const letrasNome1 = nome.split(' ',nome.length);
const letrasNome2 = letrasNome1[0]+letrasNome1[1]+letrasNome1[2]+letrasNome1[3];
const letrasDoNome = letrasNome2.length;
const segundaLetra = nome.slice(1,2);
const primeiroIndex = nome.indexOf('e',0);
const ultimoIndex = nome.lastIndexOf('e',nome.length);
const ultimasLetras = nome.slice(-3,24);
const palavrasNome = ` ${letrasNome1[0]} , ${letrasNome1[1]} , ${letrasNome1[2]} e ${letrasNome1[3]}`;
const maiNome = nome.toUpperCase();
const menNome = nome.toLowerCase();

window.document.body.innerHTML += `Seu nome é: ${nome}<br />`;
window.document.body.innerHTML += `Seu nome tem ${letrasDoNome} letras <br />`;
window.document.body.innerHTML += `A segunda letra do seu nome é: ${segundaLetra} <br />`;
window.document.body.innerHTML += `Qual o primeiro índice da letra 'e' do seu nome? ${primeiroIndex}<br />`;
window.document.body.innerHTML += `Qual o último índice da letra 'e' do seu nome? ${ultimoIndex}<br />`;
window.document.body.innerHTML += `As últimas 3 letras do seu nome são: ${ultimasLetras}<br />`;
window.document.body.innerHTML += `As palavras do seu nome são: ${palavrasNome}<br />`;
window.document.body.innerHTML += `Seu nome com letras maiúsculas: ${maiNome} <br />`;
window.document.body.innerHTML += `Seu nome com letras minúsculas: ${menNome} <br />`;
window.document.body.innerHTML += `Fim! <br />`;
*/

const nome = prompt('Digite seu nome completo:');

window.document.body.innerHTML += `Seu nome é: ${nome}<br />`;
window.document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
window.document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br />`;
window.document.body.innerHTML += `Qual o primeiro índice da letra 'e' do seu nome? ${nome.indexOf('e')}<br />`;
window.document.body.innerHTML += `Qual o último índice da letra 'e' do seu nome? ${nome.lastIndexOf('e')}<br />`;
window.document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)}<br />`;
window.document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}<br />`;
window.document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} <br />`;
window.document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()} <br />`;
window.document.body.innerHTML += `Fim! <br />`;

