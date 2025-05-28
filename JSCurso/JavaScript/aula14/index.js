// 01234567 as posições do caracteres
let umaString = "Um \"Texto\"";
let stringLer = "Um texto";

console.log(umaString);
console.log(stringLer[4]);
console.log(stringLer.charAt(7));
console.log(stringLer.concat(' em dia.'));
console.log(stringLer+ ' em um belo dia.');
console.log(`${stringLer} em um lindo dia.`);
console.log(stringLer.indexOf('texto'));
console.log(stringLer.indexOf('o', 3));
console.log(stringLer.lastIndexOf('t', 7));
console.log(stringLer.match(/[a-z]/g));
console.log(stringLer.match(/[a-z]/));
console.log(stringLer.search(/[a-z]/));
console.log(stringLer.match(/[o]/));
console.log(stringLer.search(/[o]/));
console.log(stringLer.replace('Um' , 'Outra'));
console.log(stringLer.replace(/Um/ , 'Outra'));
console.log(stringLer.length);
console.log(stringLer.slice(3,8));