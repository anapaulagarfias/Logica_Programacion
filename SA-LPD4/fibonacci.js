/*
Instrucciones:
Crear un programa en Javascript que realice lo siguiente:
3
0, 1, 1.
10
0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
Debe solicitar al usuario un número por prompt o por input y guardarlo.
Debe imprimir la serie de fibonacci dependiendo del número recibido, es decir, si el programa recibe un 8, debe mostrar 8 números de la serie de Fibonacci.
Debe imprimir el resultado por consola o por el DOM.
Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
Prueba tu programa con las siguientes combinaciones para asegurarte que funcione correctamente:
Entrada: 
Salida: 
Entrada: 
Salida: 
Pruébalo con los números que se te ocurran.
*/

const prompt = require("prompt-sync")();

function getInput() {
  let num = prompt("Ingrese un número: ");
  if (isNaN(num)) {
    console.log(
      "El sistema ha detectado que lo que has ingresado no es un número ¡Por favor vuelve a intentarlo!"
    );
    return getInput();
  } else {
    return Number(num);
  }
}
function fibonacci(n) {
  let a = 0,
    b = 1,
    c;
  while (n--) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
  }
  return a;
}
let num = getInput();
console.log(`El número ${num} en la posición Fibonacci es ${fibonacci(num)}`);
