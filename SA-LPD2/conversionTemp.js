/*Instrucciones:

Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
Debe imprimir ambos resultados por consola o por el DOM.
Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente: 45.
Grados Kelvin: 318.15
Grados Fahrenheit: 113. 14.
Grados Kelvin: 287.15
Grados Fahrenheit: 57.2
Entrada:
Salida
Entrada:
Salida
Pruébalo con los valores numéricos que se te ocurran.
Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub y adjuntar el link.

*/
const prompt = require("prompt-sync")();
function getInput() {
  let num = prompt("Ingrese la temperatura en grados Celsius: ");
  if (isNaN(num)) {
    console.log(
      "El sistema ha detectado que lo que has ingresado no es un número ¡Por favor vuelve a intentarlo!"
    );
    return getInput();
  } else {
    return Number(num);
  }
}
function convTemp(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  console.log(`La temperatura ${celsius}°C es igual a ${fahrenheit}°F`);
  let kelvin = celsius + 273.15;
  console.log(`La temperatura ${celsius}°C es igual a  ${kelvin} K`);
}
let num = getInput();
convTemp(num);
