Instrucciones

Los módulos son archivos separados que contienen código y datos. Puedes elegir importar todo o especificar qué importar.

Hoy, escribirán código que utiliza módulos.

Las clases, objetos y funciones de cada una de estas tareas se importarán en index.js. ¡DEBEN tener nombres específicos!


TAREAS

1. María está calculando el costo de los pagos mensuales. Por cada transacción hay una tarifa de $3 y un interés del 1% (0.01).
    - Dado un monto de transacción de entrada, exporta una función que devuelva el valor de lo que ella debería pagar.
        - Esta función debe poder tomar un número como entrada y devolver un número como salida.

2. Ed quisiera una forma de ingresar los nombres de tres de sus amigos.
    - Exporta una clase que tome 3 argumentos para construir un objeto con 3 propiedades.
        - Las 3 propiedades en el constructor deben llamarse nombre1, nombre2 y nombre3.

3. Ed quisiera una forma de calcular una edad a partir de una fecha de nacimiento dada.
    - Exporta una función que tome 3 argumentos - un año, un mes y un día - y luego devuelva una edad precisa.
        - Por ejemplo, calculadoraEdad(2000, 12, 25) debe devolver la edad de alguien nacido el día de Navidad de 2000.

4. Ed quisiera una forma de calcular las edades de sus amigos.
    - Exporta una clase que devuelva una cadena que contenga el nombre y la edad de un amigo dado. Debe:
        - Tomar 4 argumentos - un nombre, un año, un mes y un día - y construir un objeto con esas 4 propiedades.
        - Tener un método público llamado retornarEdad() que devuelva la siguiente cadena: ¡<nombre> tiene <edad> años hoy!


TAREAS EXTRA

¡Si han completado las tareas anteriores, intenten las siguientes tareas extra!

5. Una profesora quiere crear una rúbrica para calificar a los estudiantes según una puntuación de 0 a 11.
    - Un estudiante aprueba si tiene una puntuación mayor o igual a 5. Exporta una función que devuelva "Aprobado" o "Reprobado".

6. La profesora también quiere marcar a los estudiantes que obtengan una puntuación alta de 9 o más.
    - Extiende la función para que devuelva "Excelente" para puntuaciones mayores a 8.

7. La profesora también quiere marcar a los estudiantes que obtengan una puntuación perfecta de 11.
    - Extiende la función para que devuelva "Perfecto" para una puntuación de 11.


# Instructions

Modules are separate files for containing code and data. You can choose to import everything, or specify what to import.

**Today, you will be writing code that uses modules!**

The classes, objects, and functions for each of these tasks will be imported into `index.js`. **They must have specific names!**


## Tasks

1. Maria is calculating the cost of monthly payments. For every transaction there is a $3 fee and a 1% (0.01) interest fee. 
    * Given an input transaction amount, export a function that returns the value of what she should be paying.
        * This function should be able to take a number as input, and return a number as output.

3. Ed would like a way to input the names of three of his friends.
    * Export a class that will take 3 arguments to construct an object with 3 properties.
        * The 3 properties in the constructor should be called `name1`, `name2`, and `name3`.

4. Ed would like a way to calculate an age from a given birth date.
    * Export a function that will take 3 arguments - a **year**, a **month**, and a **day** - then return an accurate age.
        * For example, `ageCalculator(2000, 12, 25)` should return the age of someone born on Christmas Day, 2000.

5. Ed would like a way to calculate the ages of his friends.
    * Export a class that will return a string containing a given friend's name and age. It should:
        * Take 4 arguments - a **name**, a **year**, a **month**, and a **day** - and construct an object with those 4 properties.
        * Have a public method named `returnAge()` that will return the following string: `<name> is <age> today!`

## Extra Tasks

If you have completed the above tasks, try the following extra tasks!

5. A teacher wants to create a rubric for grading students based on a score from 0 to 11.
    * A student passes if they have a score greater than or equal to 5. Export a function that returns "Pass" or "Fail".

6. A teacher also wants to mark students who get a high score of 9 or more.
    * Extend the function so that it returns "Excellent" for scores greater than 8.

7. A teacher also wants to mark students who get a perfect score of 11.
    * Extend the function so that it returns "Perfect" for a score of 11.