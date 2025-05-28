'use strict';

let area = document.getElementById('area');


function entrar (){
    let nome = prompt("Digite seu nome:");

    if(nome === '' || nome === null){
        alert("Opa, parece que você não inseriu seu nome...")
        area.innerHTML = "Clique no botão 'Acessar'...";
    } else {
        area.innerHTML = "Bem vindo(a) " + nome +"!<br>";
        
        let botaoSair = document.createElement("button");
        let botaoAdicionar = document.createElement("button");

        botaoSair.innerHTML = "Sair";
        botaoAdicionar.innerHTML = "Adicionar";

        botaoSair.onclick = sair;
        botaoAdicionar.onclick = adicionar;
        // setInterval(adicionar, 5000); //Vai gerar quadrado pra sempre
        setTimeout(adicionar, 3000);

        area.appendChild(botaoSair);
        area.appendChild(botaoAdicionar);
    }
}

function sair (){
    alert("teste");
    area.innerHTML = "Você saiu!";
}

function adicionar() {
    let divCreate = document.createElement("div");

    divCreate.style.width = '40px';
    divCreate.style.height = '40px';
    divCreate.style.backgroundColor = 'red';
    
    area.appendChild(divCreate);
}

