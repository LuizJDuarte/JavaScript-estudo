/*
Primitivos (imutáveis): - string, number, boolean, undefined, null(big int, symbol) - Valores Copiados

Referência (mutável): - array, object, function - Passados por referências
*/

let a = [1 , 2, 3, 4];
let b = a;
console.log(a, b);

a.push(5);
console.log(a, b);

b.pop();
console.log(a , b);

console.log('________________________________________________________');

const a1 = {
    nome: 'Luiz',
    sobrenome: 'Duarte'
};

const b1 = a1;

b1.nome = 'Raquel';
console.log(a1);
console.log(b1);

