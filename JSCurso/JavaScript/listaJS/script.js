
let elementoLista = document.querySelector('#app ul');
let elementoinput = document.querySelector('#app input');
let elementoBotão = document.querySelector('#app button');

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [] ;

function renderTarefas(){
    elementoLista.innerHTML = "";

    tarefas.map((todo)=>{
        let elementoLi = document.createElement("li");
        let textoTarefa = document.createTextNode(todo);
        let linkDelete = document.createElement("a");
        let textoLinkDelete = document.createTextNode(" Excluir");
        let posicao = tarefas.indexOf(todo);

        linkDelete.setAttribute("href" , "#")
        linkDelete.appendChild(textoLinkDelete);
        linkDelete.setAttribute("onclick", `deletarTarefa(${posicao})`);
        elementoLi.appendChild(textoTarefa);
        elementoLi.appendChild(linkDelete);
        elementoLista.appendChild(elementoLi);
    })
}

renderTarefas();

function adicionar(){
    if(elementoinput.value === ''){
        alert("Digite algo!");
        return false;
    }else {
        let novaTarefa = elementoinput.value;
        tarefas.push(novaTarefa);
        elementoinput.value = '';
        console.log(tarefas);
        renderTarefas();
        salvarDados();
    }


}

elementoBotão.onclick = adicionar;

function deletarTarefa(posicao){
    tarefas.splice(posicao, 1);
    renderTarefas();
    salvarDados();
}

function salvarDados(){
    localStorage.setItem("@listaTarefas",JSON.stringify(tarefas));
}