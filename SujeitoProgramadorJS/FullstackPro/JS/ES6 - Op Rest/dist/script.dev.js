"use strict";

// Rest operator
// function convidados(...nomes){
//     console.log("Seja Bem vindo!");
//     console.log(nomes);
// }
// convidados("Luiz", "Raquel", "Malu");
function sorteador() {
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }

  //Bom pra quando vocÊ não sabe quantos parametros vai recever nessa função
  var numeroGerado = Math.floor(Math.random() * numeros.length); //Math.floor pra numero inteiro e math random pra definir um numero aleatorio, tem que fazer * o tamanho da lista

  console.log(numeros[numeroGerado]);
}

sorteador(1, 3, 8, 9238891, 342, 837, 982);