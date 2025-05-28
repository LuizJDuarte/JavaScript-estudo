
// setInterval = fica executando aquilo no intervalo de tempo dito

function acao(){
    document.write(`Executando... <br/>`);
}

/*
var timer = setInterval(() => {
    document.write("Executando... <br/>")
}, 100000); //Tempo em milisegundos
*/
//clearInterval(timer); para parar o setInterval 

// setTimeout = executar aquilo apos tanto tempo uma vez só 

setTimeout(() =>{
    alert(`Já se passaram os 5 segundos`);
}, 5000); 

setTimeout(() =>{
    alert(`Já se passaram os 5 segundos`);
}, 6000); 