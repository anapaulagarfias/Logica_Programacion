/* 
Instrucciones:
Crear un programa en Java que realice lo siguiente:
Crear un diccionario Español-Inglés, que contenga al menos 20 palabras (con traducción).
Utiliza un objeto HashMap para almacenar los pares de palabras.
Debe solicitar al usuario una palabra en español e imprimir por consola la palabra en inglés.
Si la palabra escrita no se encuentra en el diccionario debe imprimir un mensaje por consola, diciendo que: “La palabra no se encuentra en el diccionario.”.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
gato
cat
Entradas: 
Salida:
Siempre y cuando la palabra se encuentre en el diccionario
Pruébalo con diferentes palabras.
Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub y adjunta el link.
*/

package com.generation;

import java.util.HashMap;
import java.util.Scanner;

public class Colecciones {

  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    HashMap<String, String> dictionary = new HashMap<>();

    dictionary.put("caminar", "Walk");
    dictionary.put("enseñar", "Teach");
    dictionary.put("telefono", "Cell-phone");
    dictionary.put("botella", "Bottle");
    dictionary.put("pajaro", "Bird");
    dictionary.put("mascota", "Pet");
    dictionary.put("silla", "Chair");
    dictionary.put("novio", "Boyfriend");
    dictionary.put("tio", "Uncle");
    dictionary.put("tia", "Aunt");
    dictionary.put("mama", "Mom");
    dictionary.put("piso", "Floor");
    dictionary.put("cafe", "Coffee");
    dictionary.put("rosa", "Pink");
    dictionary.put("chamarra", "Jacket");
    dictionary.put("oso", "Bear");
    dictionary.put("sonrisa", "Smile");
    dictionary.put("primo", "Cousin");
    dictionary.put("hija", "Daughter");
    dictionary.put("papa", "Dad");
    dictionary.put("camiseta", "T-shirt");
    dictionary.put("escritorio", "Desk");

    System.out.println("Bienvenido a tu traductor automático");
    System.out.println("Ingresa una palabra en español: ");
    String wordSpanish = in.nextLine();
    System.out.println(
      dictionary.containsKey(wordSpanish.toLowerCase())
        ? dictionary.get(wordSpanish.toLowerCase())
        : "Esta palabra no se encuentra en el diccionario."
    );
    in.close();
  }
}