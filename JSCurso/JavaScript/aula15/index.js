// IEEE 754-2008
let num = 15938;    //number   
let num2 = 2.5;     //number
let num3 = 234.848999999; //number

console.log(num.toString()+num2); // o num vai virar string
console.log(num.toString(2));     // Vai virar numero binario 
console.log(num3.toFixed(3));     // Coloca em 2 casas decimais e arredonda
console.log(Number.isInteger(num)); 

let temp = num * 'ola';
console.log(Number.isNaN(temp));

let num5 = 0.7;
let num6 = 0.1;

num5 += num6; //0.8
num5 += num6; //0.9
num5 += num6; //1.0

num5 = parseFloat(num5.toFixed(2));
console.log(num5);
console.log(Number.isInteger(num5));