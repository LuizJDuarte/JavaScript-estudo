/*const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Duarte',
    idade: 21
}

console.log(pessoa1.nome,pessoa1.sobrenome);
*/

/*function criaPessoa(nome , sobrenome , idade){
    return {
        nome,
        sobrenome,
        idade
    }
}

const pessoa1 = criaPessoa('Luiz','Duarte', 20);
const pessoa2 = criaPessoa('Raquel','Melo', 19);
console.log(pessoa1.nome,pessoa1.sobrenome);
*/

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Duarte',
    idade: 20,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está dizendo oi...`);
    }
};

pessoa1.fala();