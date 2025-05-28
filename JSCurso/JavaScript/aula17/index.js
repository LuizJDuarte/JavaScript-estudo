const alunos = ['Luiz' , 'Maria' , 'João'];
console.log(alunos[1]);

alunos[0] = 'Luizz';    //altera o item

console.log(alunos[0]);     
console.log(alunos.length); //tamanho array

alunos.push('Raquel');  //adiciona no final
console.log(alunos);

alunos.unshift('Luiz'); //adiciona no inicio
console.log(alunos);

const removido = alunos.pop();//tira o ultimo elemento
console.log(removido);
console.log(alunos);

const removido2 = alunos.shift();//tira o primeiro elemento
console.log(removido);
console.log(alunos);

delete alunos[0];       //deleta e torna o elemento vazio
console.log(alunos);

alunos.push('Luquel');
alunos.push('Raluiz');
alunos.push('Raluquel');

console.log(alunos.slice(3, 6)); //fatia do elemento 3 até o 5