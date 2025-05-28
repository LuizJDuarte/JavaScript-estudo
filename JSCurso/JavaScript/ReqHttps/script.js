
let listElement = document.querySelector("#app");

let posts = [];

function nutriApp(){

    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
    .then((r)=> r.json())
    .then((json) => {
        posts = json;

        posts.map((item)=>{
            let liElement = document.createElement("li");
            let titleElement = document.createElement("strong");
            let imgElement = document.createElement("img");
            let descriptionElement = document.createElement("a");

            let titleText = document.createTextNode(item.titulo);
            imgElement.setAttribute("src",item.capa); //or imgElement.src = item.capa;
            let descriptionText = document.createTextNode(item.subtitulo);

            titleElement.appendChild(titleText);
            descriptionElement.appendChild(descriptionText);

            liElement.appendChild(titleElement);
            liElement.appendChild(descriptionElement);
            liElement.appendChild(imgElement);

            listElement.appendChild(liElement)

        });

    })    
    .catch(()=>{
            console.log("ERROOOOOR");
    })
}

nutriApp();