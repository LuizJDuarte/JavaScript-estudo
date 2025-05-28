/* 

OPERADORES LÓGICOS
&& -> AND -> E -> TODAS AS EXPRESSÕES PRECISAM SER VERDADEIRAS PARA RETORNAR TRUE - ele retorna o primeiro valor false
|| -> OR -> OU -> UMA DAS EXPRESSÕES PRECISA SER VERDADEIRA PARA RETORNAR TRUE - ele retorna o primeiro valor true
!  -> NOT -> NÃO -> É UMA NEGAÇÃO DA EXPRESSÃO 

FALSY - avaliam como falso sempre 
0 
''""``
null/undefined
NaN
*/

console.log(true && true);

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';
console.log(corPadrao);