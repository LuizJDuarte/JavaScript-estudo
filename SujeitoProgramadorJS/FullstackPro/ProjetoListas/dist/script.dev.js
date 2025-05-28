"use strict";

var listElement = document.querySelector("#app ul"); // Seleciona a ul e cria uma variavel que referencia ele 

var inputElement = document.querySelector("#app input"); // Seleciona o input e cria uma variavel que referencia ele     

var buttonElement = document.querySelector("#app button"); // Seleciona o button e uma variavel que referencia ele 

var tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || []; //Basicamente aqui temos a lista que usaremos para armazenar as tarefas // Att: Agora a lista contém os dados do local storage ou não caso estejam vazias ou não tenham nada armazenado nelas

function renderTarefas() {
  //Renderizar as tarefas (adicionar visualmente)
  listElement.innerHTML = ""; //"Apagando" tudp que tem no elemento li                 

  tarefas.map(function (tarefa) {
    //Passa o elemento que foi passado
    var liElement = document.createElement("li"); //Cria um elemento li     

    var tarefasTexto = document.createTextNode(tarefa); //Criar um texto, o texto usado será que está sendo passado 

    var linkElement = document.createElement("a"); //Cria elemento a para excluir

    linkElement.setAttribute("href", "#"); //Bota dentro do atributo o href e coloca pra não referenciar pra nenhum lugar

    var linkText = document.createTextNode("Excluir"); //Cria o texto "Excluir" para incluir em algum lugar

    linkElement.appendChild(linkText); //Insere o excluir dentro da tag a

    var posicao = tarefas.indexOf(tarefa); //Pegar posição da tarefa passada e armazenar na variavel posicao 

    linkElement.setAttribute("onclick", "deletarTarefa(".concat(posicao, ")")); //Cria dentro do a um onclick e dentro dele referencia o deletar tarefa (que pega a posiçao do item a ser excluido); ou seja quando clicar vai executar a função de executar tarefas que deleta tarefas

    liElement.appendChild(tarefasTexto); //adicionar elemento filho na nossa li(texto da tarefa)

    liElement.appendChild(linkElement); //adiciona link element dentro do li

    listElement.appendChild(liElement); //adicionando a li dentro da ul 
  });
}

renderTarefas(); //Toda vez que abre a página ele renderiza pra caso tenha algo salvo no local storage

function adicionarLista() {
  //Aqui temos uma função para adicionar os itens a lista
  if (inputElement.value === '') {
    //Inicialmente verificamos se os itens podem ser adicionados
    alert("Você precisa digitar algo!"); //Caso o usuário não digite nada aparece um aviso
  } else {
    //Caso ela não esteja vazia ele pega o valor do input
    var novaTarafa = inputElement.value; //Cria uma nova variável e armazena o valor do input 

    tarefas.push(novaTarafa); //Usa push na lista tarefas em relação ao valor do input que foi adicionado ao nova tarefa, sendo assim adiciona o valor no fim da lista

    inputElement.value = ''; //Deixa o valor atual do input como vazio para que um próximo valor seja inserido posteriormente                                                                                                                                        

    renderTarefas(); //Executa a função render tarefas    

    salvarDados(); //Salva sempre os dados apos renderizar as tarefas
  }
}

buttonElement.onclick = adicionarLista; //Quando clica no elemento butão aí executa essa função

function deletarTarefa(posicao) {
  //Função deletar tarefas
  tarefas.splice(posicao, 1); //Excluir tarefa da posição e o 1 signifuca que é só um elemento                                   

  renderTarefas(); //Renderiza os dados já salvos

  salvarDados(); //Ele renderiza novamente os itens apos a exclusão
}

function salvarDados() {
  //Funçãi de salvar os dados no local storage 
  localStorage.setItem("@listaTarefas", JSON.stringify(tarefas)); //JSON.stringify convertendo a lista para um srting para salvar no local storage

  renderTarefas(); //Renderiza os dados já salvos 
}