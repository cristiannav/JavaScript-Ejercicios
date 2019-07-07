var num1 = prompt("Ingrese un numero: ");
var num2 = prompt("Ingrese otro numero: ");

var confirmar = confirm("Esta seguro de los numeros?");

while(confirmar == false){
  var num1 = prompt("Ingrese un numero: ");
  var num2 = prompt("Ingrese otro numero: ");
  confirmar = confirm("Esta seguro de los numeros?");
}

if(num1 > num2){
  alert("El numero mas grande es: " + num1);
}
else if(num2 > num1){
  alert("El numero mas grande es: " + num2);
}
