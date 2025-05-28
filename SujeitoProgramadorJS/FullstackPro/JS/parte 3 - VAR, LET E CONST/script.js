/*
VAR
Consegue ser acessada globalmente, isso dá benefícios e malefícios 
EX Negativo: Você consegue acessar aquele dado interno da função de fora dela e pode altera-la

LET 
Consegue ser acessado apenas dentro do escopo que ele é criado, dentro do bloco {  }
Ex Positivo: Eu faço uma função que define os cargos, logo algo de fora não vai conseguir alterar aquela variável 


CONST
Também é acessado apenas no escopo que é criado dentro do blobo { }, porém após criada não conseguimos mais altera-la 
Nunca pode criar uma váriavel constante sem um valor
Ex: 

///////////////////////////////////////

OBJETOS 





let pessoa = {
    nome: "Matheus",
    idade: 20,
    altura: 1.84,
    cargo: "Programador Mobile"
};

console.log(pessoa); //Acessa o objeto inteiro 
console.log(pessoa.nome); //Acessa o nome
pessoa.nome = "Luiz";//Alterei o nome
console.log(pessoa); 


let usuarios = [
    {nome : "Raquel" , cargo: "Backend" , status: "ATIVO"},
    {nome: "Luiz", cargo: "Mobile", status: "ATIVO"},
    {nome: "Luquel", cargo: "Frontend", status: "ATIVO"}
];

console.log(usuarios);
console.log(usuarios[0]);

//////////////////////////////

TEMPLATE STRINGS S2

let nome = "Raquel";
let sobrenome = "Melo";
let idade = 20;

let mensagem = `Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos de idade.`;

console.log(mensagem);
 */

