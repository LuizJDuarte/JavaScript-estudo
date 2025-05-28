/*
### Solução que eu fiz ###

let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

let aux;
aux = varA;
varA = varB;
varB = varC;
varC = aux;

console.log(varA, varB, varC);

### Abaixo outra solução ###
*/

let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

[varA , varB , varC] = [varB , varC ,varA];

console.log(varA, varB, varC);

let x = 10;
let y = 9;
let z = 8;

[x, y, z] = [z, y, x];

console.log(x, y ,z);