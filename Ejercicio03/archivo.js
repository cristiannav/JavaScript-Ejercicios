console.log("esto es un archivo externo");

window.onload = function(mensaje){
  var mensaje ="Hello world";
  alert(mensaje);
};

var nombre = prompt("Cual es tu nombre?");

alert("Bienvenido " + nombre);

var mayor = confirm("Eres mayor de edad?");

if(mayor == false){
  window.location = 'http://www.google.com';
}

console.log(location.href);

var boton = document.getElementById("back");
boton.onclick = function(){
  history.back();
};

var boton2 = document.getElementById("next");
boton2.onclick = function(){
  history.forward();
};
