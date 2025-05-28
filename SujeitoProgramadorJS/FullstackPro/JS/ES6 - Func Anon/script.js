// Funções anonimas

/*
 () => {}

 1 - Os parenteses: são por onde recebemos os argumentos (assim como nas funções tradicionais)   
 2 - seta "=>": responsável pelo nome arrow 
 3 - E as chaves: o bloco de código que representa o corpo da função
*/

// function somar(a, b){
//     let total = a + b;
//     return console.log(total);
// }

// somar(10,15);



let subtrair = (valor1, valor2) => {
    let total = valor1 + valor2;
    return console.log(total);
};
subtrair(20, 40);

//subtrair(parseInt(prompt("Digite o número 1:")),parseInt(prompt("Digite o número 2:")));


let lista = [2, 3, 4, 5, 14, 19];

lista.map((item)=>{
    if(item === 14){//Exemplo de implementação com array function e map
        console.log(item);
    }
    
})