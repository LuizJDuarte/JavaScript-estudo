
//Includes 

//let nome = prompt("Qual seu nome?");

let listas = ["João","Raquel","Malu","José"];
listas.push(nome);
console.log(listas);



if(listas.includes("Luiz")){
    console.log(`${nome} está na lista`);
} else{
    console.log("Não está na lista!");
}


//StartsWith

let nome = "Puiz";

if(nome.startsWith("L")){
    console.log("Seu nome começa com L");
}else{
    console.log("Seu nome NÃO começa com L");
}

//EndsWith

let nom = "Raquel";

if(nom.endsWith("l")){
    console.log("Seu nome termina com l");
}else{
    console.log("Seu nome NÃO termina com l");
}
