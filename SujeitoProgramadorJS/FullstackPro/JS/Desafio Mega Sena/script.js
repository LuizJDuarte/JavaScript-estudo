
function NumberRandom(numero){
    if(numero >= 6 && numero <=9){
        var listaNumeros = [];
        for(let i = 0;i < numero; i++){
            const min = Math.ceil(1);
            const max = Math.floor(60);
            var numberRandom = Math.floor(Math.random() * (max - min + 1) + min);
            if(listaNumeros.includes(numberRandom) === true){
                i--;
            } else {
                listaNumeros.push(numberRandom);
            }
            console.log(listaNumeros);
        }
        console.log(listaNumeros);
    }
    else{
        console.log("Os números que podem ser ultilizados são entre 6 e 9!");     
    }
}


NumberRandom(9);



