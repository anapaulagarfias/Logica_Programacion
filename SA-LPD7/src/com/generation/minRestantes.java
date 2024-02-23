/* 
Instrucciones:
Crear un programa en Java que realice lo siguiente:
Debe solicitar al usuario un día de la semana (de lunes a viernes).
Debe solicitar al usuario una hora (horas y minutos).
Debe calcular cuantos minutos faltan para el fin de semana. Se considera que el fin de semana comienza el viernes a las 15:00 hrs.
Debe mostrar el resultado por consola.
Debe ser capaz de identificar si los datos de entrada son válidos (día de la semana válido, hora válida, minutos válidos), en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
lunes
14
30
Faltan 5730 minutos para el fin de semana.
Entradas: Lunes, 14:30 hrs
Salida:
Pruébalo con las combinaciones que se te ocurran.
Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub y adjuntar el link
Sugerencias:

Puedes escribir tu código directamente en tu clase Main.
Para ayudarte puedes desarrollar un algoritmo y el pseudocódigo.
*/


package com.generation;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class minRestantes {
    public static void main(String[] args) {
		String[] diasSemana = {"lunes", "martes", "miercoles", "jueves", "viernes"};
        List<String> listaDiasSemana = Arrays.asList(diasSemana);
        String diaSemana;
        int hora;
        int minutos;

        do {
        	Scanner myScanner = new Scanner(System.in);
            System.out.print("Ingrese el día de la semana: ");
            diaSemana = myScanner.next().toLowerCase();
            // Se verifica la validez
            if (!listaDiasSemana.contains(diaSemana)) {
                System.out.println("Error: Día de la semana no válido. Inténtalo de nuevo.");
                continue;
            }
            // Se solicita la hora
            System.out.print("Ingrese la hora (0-23): ");
            hora = myScanner.nextInt();
            // Se verifica la validez
            if (hora < 0 || hora > 23) {
                System.out.println("Error: Hora no válida. Inténtalo de nuevo.");
                continue;
            }
            System.out.print("Ingrese los minutos (0-59): ");
            minutos = myScanner.nextInt();
            if (minutos < 0 || minutos > 59) {
                System.out.println("Error: Minutos no válidos. Inténtalo de nuevo.");
                continue;
            }
            boolean finDeSemana = false;
            int horas = 0;
            int dia = 0;
			if(diaSemana.equals("lunes") && hora <= 15) {
            	dia = 4;
            	horas = 14-hora;
            }
            else if(diaSemana.equals("lunes") && hora > 15) {
            	dia = 3;
            	horas = 24-(hora-14);
            }
            else if(diaSemana.equals("martes") && hora <= 15) {
            	dia = 3;
            	horas = 14-hora;
            }
            else if(diaSemana.equals("martes") && hora > 15) {
            	dia = 2;
            	horas = 24-(hora-14);
            }
            else if(diaSemana.equals("miercoles") && hora <= 15)  {
            	dia = 2;
            	horas = 14-hora;
            }
            else if(diaSemana.equals("miercoles") && hora > 15) {
            	dia = 1;
            	horas = 24-(hora-14);
            }
            else if(diaSemana.equals("jueves") && hora <= 15) {
            	dia = 1;
            	horas = 14-hora;
            }
            else if(diaSemana.equals("jueves") && hora > 15) {
            	dia = 0;
            	horas = 24-(hora-14);
            }
            else if(diaSemana.equals("viernes") && hora <= 15) {
            	dia = 0;
            	horas = 14-hora;
            }
            else {
            	System.out.println("Es fin de semana");
            	finDeSemana = true;
            }
            if(!finDeSemana) {
            	int minutosFinDeSemana = (dia * 24 * 60) + (horas * 60) + (60-minutos); 
            System.out.printf("Faltan %d minutos para el fin de semana.\n",minutosFinDeSemana);
            }
            myScanner.close();
            break;
  
        } while (true);
	}
}
