const data = new Date();
const texto = document.getElementById('texto');



function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function dataAjustada(data){
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const minuto = zeroEsquerda(data.getMinutes());

    return `${dia} de ${mes} de ${ano} ${hora}:${minuto}`;
}

function listaInsertion(arr){

    for(let i = 0; i < arr.length ; i++ ){
        let aux = arr[i];
        let j = i - 1;
        while(j>=0 && aux < arr[j]){
            arr[j + 1] = arr[j];
            j-= 1;
        }
        arr[j + 1] = aux;
    }
    return arr;
}

const dataAjustadaH = dataAjustada(data);
texto.innerHTML += `<h1>${dataAjustadaH}</h1>`;
//console.log(dataAjustadaH);

let arr = [82828, 2, 342, 9, 3721831831]; 
const usarOrdenador = listaInsertion(arr);
texto.innerHTML += `<h2>Array ordenado: [${usarOrdenador}]</h2>`;