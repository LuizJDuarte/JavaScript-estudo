function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    /*form.onsubmit = function (event) {
        event.preventDefault();
        alert(1);
        console.log('Foi enviado.');
    };*/
   
    const pessoas = [];

    function receberEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobernome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        resultado.innerHTML += `<p>${nome.value} ${sobernome.value}`+` ${peso.value} ${altura.value}</p>`; 

        console.log(pessoas);

        pessoas.push({
            nome: nome.value,
            sobernome: sobernome.value,
            peso: peso.value,
            altura: altura.value,
        });

        /*evento.preventDefault();
        console.log(`Form não foi enviado ${contador}`);
        contador++;*/
    }

    form.addEventListener('submit', receberEventoForm);
}

meuEscopo();