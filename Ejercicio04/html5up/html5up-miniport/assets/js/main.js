/*SELECTORES*/

/*EJercicio 01*/

window.onload = function(){

  var titular = document.getElementById('titular');

  titular.style.display = "none";


/*Ejecrcicio 02 */



  var lechuza = document.querySelector('#lechuza');

  lechuza.style.filter = "grayscale(100%)";



/*Ejercicio 03 */



  var inputs = document.querySelectorAll("input").forEach(

    function(inputs){
      inputs.style.background = "red";

    });



/*DOM SELECTORES Y ATRIBUTOS */

/* Ejercicio 01 */



  var copyright = document.getElementById('copyright').attributes;


/*Ejercicio 02 */

var twitter = document.querySelector(".fa-twitter");

var twitt = twitter.getAttribute("href");



/*Ejercicio 03 */


var facebook = document.querySelector(".fa-facebook");

var face = facebook.getAttribute("href");


/*Ejercicio 04 */

var youtube = document.querySelector(".fa-youtube");

var yout = youtube.setAttribute("href", "http://www.youtube.com");

var youtu = youtube.getAttribute("href");

/*Ejercicio 05 */

var formulario = document.querySelector(".formulario");

var form = formulario.hasAttribute("action");

/*Ejercicio 06 */

var form2 = formulario.removeAttribute("url");

var form3 = formulario.setAttribute("action", "http://www.digitalhouse.com");


/*Ejercicio 07 */

var subtitulo = document.querySelector("h2");

subtitulo.style.color = "red";


/* Ejercicio 08 */


var iconos = document.querySelectorAll(".icon").forEach(

  function(iconos){
    iconos.style.color = "blue";
});
};



/*ELEMENTOS*/

/*EJercicio 01*/


var boton = document.createElement("button");

var value = document.createTextNode("Boton");

boton.appendChild(value);

var contenedor = document.getElementById('cont');

var boton2 = contenedor.appendChild(boton);

var abracadabra = document.getElementById("abracadabra");

abracadabra.setAttribute("onclick", "myFuncion()");

boton2.setAttribute("onclick", "myFuncion2()");

function myFuncion(){
  lechuza.style.display = "none";
};

function myFuncion2(){
  lechuza.style.display = "block";
}


/*Ejecrcicio 02*/


var top = document.getElementById("top").textContent = "Parte Superior";

var work = document.getElementById("work").textContent = "Trabajo";

var portfolio = document.getElementById("portfolio").textContent = "Portafolio";

var contact = document.getElementById("contact").textContent = "Contacto";


/*Ejecrcicio 03*/

var caja1 = document.getElementById("caja1");

var h3 = caja1.querySelector("h3");

var a = h3.querySelector("a");

var titulo = a.innerHTML = "Titulo caja1";

var p = caja1.querySelector("p");

var descripcion = p.innerHTML = "Descripcion de caja1";

var link = a.setAttribute("href", "http://wwww.google.com");


/*Ejecrcicio 04*/

var social = document.querySelector(".social");

var li = social.getElementsByTagName("li")[3].parentNode;

var referencia = li.getElementsByTagName("li")[3];

var remove = li.removeChild(referencia);
