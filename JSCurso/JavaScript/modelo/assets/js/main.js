function imcCalculo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function receberEventoForm (evento) {
        evento.preventDefault();

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        
        Number(altura.value);
        Number(peso.value);

        let IMC = peso.value/((altura.value*altura.value));

        IMC = IMC.toFixed(1); 

        let Mensagem = '';

        if(IMC<18.5){
            Mensagem = 'Abaixo do peso';
        } else if(IMC>= 18.5 || IMC<=24,9){
            Mensagem = 'Peso normal';
        } else if(IMC>= 25 || IMC<=29.9){
            Mensagem = 'Sobrepeso';
        } else if(IMC>= 30 || IMC<=34.9){
            Mensagem = 'Obesidade grau 1';
        } else if(IMC>= 35 || IMC<=39.9){
            Mensagem = 'Obesidade grau 2';
        } else if(IMC>40){
            Mensagem = 'Obesidade grau 3';
        }



        resultado.innerHTML = `<p>Seu IMC é ${IMC} (${Mensagem})</p>`; 

        console.log(pessoas);

        pessoas.push({
            peso: peso.value,
            altura: altura.value,
        });
    }

    form.addEventListener('submit', receberEventoForm);
}

imcCalculo();