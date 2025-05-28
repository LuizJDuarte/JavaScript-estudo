// Desafios JS

//1) Verificador de Número Negativo, Positivo ou Zero: Escreva uma função que recebe um número como parâmetro e verifica se é negativo, positivo ou
// igual a zero. A função deve retornar uma string indicando o resultado.

function numberVerify(number){
    console.log(`O número escolhido foi: ${number}`);
    if(number > 0){
        console.log("Positivo! Seu número é maior que 0, portanto é um número positivo!");
    } else if( number < 0){
        console.log("Negativo! Seu número é menor que 0, portanto é um número negativo!");
    } else {
        console.log("Haha seu número é zero!");
    }
}

numberVerify(parseInt(prompt("Digite um número para saber se ele é positivo, negativo ou zero: ")));


//2) Desafio da Verificação de Elemento em um Array: Crie uma função que deve esperar receber 2 parâmetros, primeiro deve ser um array de números 
// e o segundo parâmetro é um numero que deseja conferir se esse numero existe dentro do array e com isso você deve mostrar o resultado se esse 
// numero que colocou existe dentro do seu array de números.


function numberArray(array, numero){
    let arrayF = array.find((item)=>{
        if(item === numero){
            console.log(`Em cheio! Na lista contém o número: ${item}`);
        }
    })
}

numberArray([1,2,3,4,5,6,7,8],1);


//3) Com base no array abaixo o desafio como você pode percorrer e encontrar o produto com Preço Igual a R$20 e o resultado deve mostrar apenas 
//o produto que tem o preço igual a R$20:​
const products = [
    { name: 'Maça', price: 2.5 },
    { name: 'Coca cola', price: 8 },
    { name: 'Guarana', price: 5 },
    { name: 'Chocolate', price: 20 }
  ];


function acharProdutoPreco(){
    let produtos = products;
    produtos.map((item)=>{
        if(item.price === 20){
            console.log(`Achamos o ${item.price}`);
        }
    })

}

acharProdutoPreco();



//3.1) Com o mesmo array de produtos acima como você pode Filtrar Produtos com Preço Menor que R$8 ?

function filtrarPrice(){
    let produtos = products.filter((item)=>item.price < 8);
    console.log(produtos);
}

filtrarPrice();