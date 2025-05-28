// ? :
/*
const pontuacaoUsuario = 10000;

if ( pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
}   else {
    console.log('Usuário normal');
}                                   
*/
// (condicao) ? 'Valor para verdadeiro' : 'valor para falso';

const pontuacaoUsuario = 999;
//                                   Condição   Valor verdadeiro     Valor falso     
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);
