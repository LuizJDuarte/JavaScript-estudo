
//Desconstrução

let pessoa = {
    nome: "Luiz",
    sobrenome: "Duarte",
    cargo: "Front end",
    empresa: "Prime",
};

//console.log(pessoa.nome);
//console.log(pessoa.cargo);

//let sobrenome = "Mendonça";

//const {nome, sobrenome:sobrenomeTeste , cargo, empresa} = pessoa; //descontrução //Bom para renomear algo que está dentro de um objeto ou array

//console.log(nome);
//console.log(sobrenome); //Depois de renomeado na desconstrucao(não renomeia o objeto em si)
//console.log(sobrenomeTeste);
//console.log(empresa);
//console.log(pessoa.sobrenome);

let nomes = ["Matheus", "Lucas", "Henrique"];
//console.log(nomes[0]);

// let { 0:matheus , 1:lucas , 2:henrique} = nomes;
// console.log(matheus);
// console.log(henrique);

let [primeironome, segundonome] = nomes;

console.log(primeironome);
console.log(segundonome);