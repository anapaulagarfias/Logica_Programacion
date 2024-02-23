/*Instrucciones:

Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
Entradas: 
4, 4, 2.
Salida:
4, 4, 2.
2, 4, 4
Pruébalo con las combinaciones de números que se te ocurran

*/
const prompt = require("prompt-sync")();
let num1 = parseInt(prompt("Ingresa el primer número: "));
let num2 = parseInt(prompt("Ingresa el segundo número: "));
let num3 = parseInt(prompt("Ingresa el tercer número: "));
numMayor = 0;
numCentro = 0;
numMenor = 0;

if (num1 === num2 && num2 === num3) {
  console.log(
    "Los numeros: " + num1 + ", " + num2 + " y " + num3 + " son iguales"
  );
}
if (num1 >= num2 && num1 >= num3) {
  numMayor = num1;
  numCentro = num2 > num3 ? num2 : num3;
  numMenor = num3 > num2 ? num2 : num3;
} else if (num2 >= num1 && num2 >= num3) {
  numMayor = num2;
  numCentro = num1 > num3 ? num1 : num3;
  numMenor = num3 > num1 ? num1 : num3;
} else num3 >= num1 && num3 >= num2;
numMayor = num3;
numCentro = num1 > num2 ? num1 : num2;
numMenor = num2 > num1 ? num1 : num2;

console.log(
  "Odernados de mayor a menor: " +
    numMayor +
    ", " +
    numCentro +
    ", y " +
    numMenor
);
