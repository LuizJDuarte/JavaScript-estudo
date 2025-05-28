/*
Aritméticos:
+ : adição ou contatenação
- : subtração
/ : divisão
* : multiplicação
** : potenciação
% : resto da divisão

Precedência:
() > ** > * / % > + - 
*/

const num1 = 5;
const num2 = 2;
let conta = num1 & num2;
console.log(conta);


let contador = 0;
contador++;
contador++;
console.log(contador , contador++ , ++contador);

let contador2 = 10;
contador2--;
--contador2;
console.log(contador2, contador2-- , --contador2);

let contador3 = 0;
contador3 += 3;
console.log(contador3);

// NaN - Not a Number 
const num3 = 10;
const num4 = parseInt('5');
const num5 = parseFloat('5.8');
const num6 = Number('4.3');

console.log(num3 + num4);
console.log(num3 + num5);
console.log(num3 + num6);
console.log(num5 + num6);