//Nesses códigos abaixo estudamos o básico da Linguagem JavaScript com alguns comandos e funcionalidades

/* Utilizando Prompt Documente.write função if e else

let nome = prompt("Qual seu nome?");
let sobrenome = prompt("Qual seu sobrenome?");
let url = prompt("Manda uma imagem em link:");

console.log(`O meu nome é ${nome} ${sobrenome}!`);

document.write(`<h1> Bem vindo ao projeto, ${nome} ${sobrenome}! </h1>`);

document.write(` <img src='${url}' alt='foto do são paulo ou aleatoria' > `); //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOHVd7r1J351P1RqGeWWzpq2W3hhTMU82N_8HncvLc1yKX0Sk3um-Epc7XBorcRrjhlAc&usqp=CAU


var area = document.getElementById('area'); //usado para acessar o id area e depois escrever dentro dele

function entrar(){
    var nome = prompt("Digite seu nome");

    if(nome === '' || nome === null){
        alert("Algo deu errado...");
        area.innerHTML = "Clique o botão para acessar...";

    }else{
        area.innerHTML = `Bem vindo ${nome}! <br>`;

        let botaoSair = document.createElement("button");
        botaoSair.innerHTML = "Sair da conta";
        botaoSair.onclick = sair;
        area.appendChild(botaoSair);
    }    
}

function sair(){
    alert("até mais");
    area.innerHTML = "Você saiu!";
}

function mediaAluno(nota1, nota2){
    var media = (nota1 + nota2)/2;

    if(media >= 7){
        console.log("Aluno aprovado!");
        alert("Aluno aprovado!");
    } else if (media < 7){
        console.log("Aluno reprovado!");
        alert("Aluno reprovado!");
    }

}
//mediaAluno(8,7);

function aluno(nome, curso){
    var mensagem = `Seja bem vindo ${nome}! Ao curso de ${curso}.`;
    console.log(mensagem);
    alert(mensagem);
}
*/
/*  Utilizando Arrays e comandos 

//aluno("Luiz","Ciência da computação");

var lista = ["Luiz", "Raquel", "José"];
// lista[0] => "Luiz" ; 
// lista.length => 3 ; 

//lista.indexOf("José") => 2
//lista.indexOf("Lucas123"); => -1 não existe/não encontradp

//lista.push("Melo") => adiciona mais um item na lista

//lista.shift(); => retira o primeiro item no caso seria o "Luiz"
//lista.pop(); => faz a mesma coisa, só que com o último da lista, no caso "Melo"

//lista.join(;); => separa toda a lista pelo que foi marcado dentro do () 

*/

/* Utilizando o For for 

    for( x = 0; x < 10; x++){
    document.write(` <br> O valor é ${x} `)
    }
 
 */

/* Utilizando o While 

var y = 0;

while(y < 11){
    document.write(` <br> O valor é ${y}`);
    y++;
}
*/

/* Utilizando Switch case

    function pedir(){
    var valor = prompt("Digite um valor:");

    switch(Number(valor)){ //Conversão de string para number
        case 1:
            alert("Você escolheu suco!");
            break;

        case 2:
            alert("Você escolheu refrigerante!");
            break;

        case 3:
            alert("Você escolheu cerveja!");
            break;

        case 4:
            alert("Você escolheu agua!");
            break;

        default:
            alert("Você não selecionou! Selecione uma opção!");
            break;
        }
    }
*/

/* Condicionais comparação operador ternário 
    // == somente comparando 2 valores independente se for string
    // === compara o valor e o tipo das variaveis 
    //ex:

    var valor = 21;

    if(valor == 20){
        alert(`O valor é igual a ${valor}`);
    }else{
        alert(`O valor é diferente de 20`);
    }


    var nome = "Luiz";

    if(nome === "Luiz"){
        alert(`Bem vindo ${nome}!`)
    }


    //operador ternário => condição ?(se/if) o que vai executar :(else) o que vai executar
    //ex:
    
    var valor = 11;

    valor === 10 ? alert("Igual a 10!") : alert("Diferente de 10!")
*/

/* Data Date tudo feito no console do inspecionar 

    var data = new Date();

    data

    data.getHours();

    console.log(`${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`);

    var datanova = new Date("March 10, 2023");

    datanova

    datanova.getDate();

    datanova.getMonth(); //numero do mes menos 1

    datanova.getDay(); //dia da semana

    datanova.getFullYear();

    datanova.getDate()+"/"+(datanova.getMonth()+1)+"/"+datanova.getFullYear();

    //pegar dia da semana nome

    var dias = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabádo'];

    dias

    dias[datanova.getDay()];
*/


function calcular(event){
    event.preventDefault();

    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value; 
    var resposta = document.getElementById('resultado');

    Number(peso); 
    Number(altura);

    var resultadoIMC = (peso)/(altura**2);

    if(resultadoIMC >=30 ){
        resposta.innerHTML = ` <p> Seu resultado foi ${resultadoIMC.toFixed(2)} <br/>Você está acima do peso!</p> `;
    }
    else if (resultadoIMC <= 25 && resultadoIMC >= 29.99){
        resposta.innerHTML = ` <p> Seu resultado foi ${resultadoIMC.toFixed(2)} <br/>Você está com sobrepeso!</p> `;
    }
    else if(resultadoIMC >= 18.5 && resultadoIMC >= 24.99){
        resposta.innerHTML = ` <p> Seu resultado foi ${resultadoIMC.toFixed(2)} <br/>Você está com o peso normal!</p> `;
    }
    else if( resultadoIMC < 18.5){
        resposta.innerHTML = ` <p> Seu resultado foi ${resultadoIMC.toFixed(2)} <br/>Você está com baixo peso!</p> `;
    }

    resposta.classList.remove("hide");

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
}
