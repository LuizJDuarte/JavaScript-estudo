//const tresHoras = 60 * 60 * 3 * 1000;

//const data = new Date(2004, 3, 24); // ano, mês, dia, hora, min, sec, milesec
/*
const data = new Date('2019-04-24 0:0:0');


console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia da semana:', data.getDay()); // 0 - Domingo até 6 - Sábado
console.log(data.toString());   // Date(0) = 01/01/1970 Timestampo unix ou época unix
*/
function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}


function formataData(data){
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const minuto = zeroEsquerda(data.getMinutes());
    const segundo = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);