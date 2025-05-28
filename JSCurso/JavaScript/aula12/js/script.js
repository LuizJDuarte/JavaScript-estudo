/*
##### Resposta do Exercício #####

let num1 = prompt('Digite o primeiro número:');
let num2 = prompt('Digite o segundo número:');

num1 = Number(num1);
num2 = Number(num2);

let conta = num1 + num2;
alert('o resultado foi: ' + conta);

ou

let num1 = prompt('Digite o primeiro número:');
let num2 = prompt('Digite o segundo número:');

num1 = Number(num1);
num2 = Number(num2);

alert(`o resultado foi: ${num1 + num2}`);

### Abaixo uma solução diferente ###
*/
let num1 = prompt('Digite o primeiro número:');
let num2 = prompt('Digite o segundo número:');

num1 = Number(num1);
num2 = Number(num2);

let conta = confirm('os números selecionados foram: '+ num1 + ' e ' + num2);

if(conta == true){
    let valor = num1 + num2;
    alert('o resultado da conta é: '+ valor)
}
