function saudacao(nome){
    return `Bom dia ${nome}!`
}

const variavel = saudacao('Luiz');
console.log(variavel);
//saudacao('Raquel');

console.log('/////////////////////////');

function soma(x = 0 , y = 0){
    const resultado = x + y;
    return resultado;
}

const resultado = soma(2,2);

console.log(resultado);
console.log(soma(1,2));
console.log(soma(3,2));
console.log(soma());

//função anônima ou função dentro de uma variável 

console.log('/////////////////////////');
const raiz = function(n) {
    return n ** 0.5;
};

console.log(raiz(9));

//or arrow function 

console.log('/////////////////////////');
const raiz2 = (n) => n ** 0.5;

console.log(raiz(9));