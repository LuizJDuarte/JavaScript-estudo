"use strict";

var listElement = document.querySelector("#app");
var posts = [];

function nutriApp() {
  fetch("https://sujeitoprogramador.com/rn-api/?api=posts").then(function (r) {
    return r.json();
  }).then(function (json) {
    posts = json;
    posts.map(function (item) {
      var liElement = document.createElement("li");
      var titleElement = document.createElement("strong");
      var imgElement = document.createElement("img");
      var descriptionElement = document.createElement("a");
      var titleText = document.createTextNode(item.titulo);
      titleElement.appendChild(titleText);
      liElement.appendChild(titleElement);
      imgElement.src = item.capa;
      liElement.appendChild(imgElement);
      var descriptionText = document.createTextNode(item.subtitulo);
      descriptionElement.appendChild(descriptionText);
      liElement.appendChild(descriptionElement);
      listElement.appendChild(liElement);
    });
  })["catch"](function () {
    console.log("Deu algum erro");
  });
}

nutriApp();