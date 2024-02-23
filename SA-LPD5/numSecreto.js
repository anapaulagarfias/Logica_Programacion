/*
Instrucciones:
Crear un programa en Javascript que realice lo siguiente:
Debe pedirle al usuario que intente adivinar el número secreto por prompt o por input, dicho número será del 1 al 100.
Si el usuario no adivina el número secreto, debe mostrar un mensaje por consola o DOM diciendo: “Ups, el número secreto es incorrecto, vuelve a intentarlo. ” y 
volver a solicitarle que ingrese un número.
Si el usuario adivina el número secreto debe de mostrar un mensaje por consola o DOM diciendo: “Felicidades, adivinaste el número secreto”. Además debe imprimir 
por consola o DOM la lista de números introducidos antes de adivinar el número secreto.
El número secreto puede ser introducido manualmente o generar un número aleatorio, pero recuerda que debe ser del 1 al 100.
Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub y adjuntar el link.
Puedes implementar un tipo de ayuda para que el usuario se guíe en caso de que el número introducido sea menor o mayor al número secreto.
*/

const prompt = require("prompt-sync")();

function getInput() {
  let num = prompt("Adivina el número secreto del 1 al 100: ");
  if (isNaN(num)) {
    console.log(
      "El sistema ha detectado que lo que has ingresado no es un número ¡Por favor vuelve a intentarlo!"
    );
    return getInput();
  } else {
    return Number(num);
  }
}

function numSecreto(num) {
  let numP = Math.floor(Math.random() * 100);
  if (num !== numP) {
    console.log(
      "Ups, el número secreto es incorrecto. El número es: " +
        numP +
        ". Vuelve a intentarlo."
    );
    return true;
  } else {
    console.log("Felicidades, adivinaste el número secreto");
    return false;
  }
}

let num = getInput();

while (numSecreto(num)) {
  num = getInput();
}
