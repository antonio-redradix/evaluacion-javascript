
# Ejercicio evaluación Javascript

La evaluación de Javascript consistirá en 3 ejercicios que medirán la habilidad del alumno a la hora de resolver problemas de diferente ámbito.

Los problemas 1 y 2 se realizarán en ficheros separados dentro de un mismo proyecto y se validará el correcto funcionamiento mediante tests en **Jest**. El problema 3 se evaluará observando el comportamiento de la página creada. El tercer problema debe ser compilado con **Webpack** y el uso de sintaxis ES6 será valorado positivamente.

Los alumnos deben realizar el ejercicio clonando este repositorio y partiendo de la plantilla incluida. Cada alumno publicará su solución en una rama que nombrará con el siguiente formato: **entrega_nombre-apellido1-apellido2**



## Ejercicio 1 - Clases, strings, estructuras de datos...

*Un cliente nos ha solicitado un programa para la gestión de butacas de cine. Actualmente, el cliente utiliza un sistema muy anticuado que representa sus butacas en forma de string y manipular los datos  resulta demasiado complicado. Necesita un programa que le permita tratar esa información de forma más cómoda.*

Crea una clase `MatrixParser`  que al ser instanciada reciba en su constructor una string que siga este formato:

 `"1 1 1|0 1 0|0 0 0"`

La string representa una matriz de 3x3 butacas
```text
1 1 1  // Fila 1
0 1 0  // Fila 2
0 0 0  // Fila 3
```
La clase debe tener los siguientes métodos
- `getMatrix()` devuelve los valores en forma de matriz.  Eg: `[[1, 1, 0], [0, 1, 0], [0, 0, 0]]`
- `getRow(num)` devuelve la fila especificada. Eg:  `parser.getRow(2)  //[0, 0, 0]`
-  `getTotal()` devuelve el total de butacas ocupadas. Eg:  `parser.getTotal()  //4 `

## Ejercicio 2 - Funciones, bucles...

*El mismo cliente nos ha solicitado una función para poder aplicar transformaciones fácilmente a todas las butacas de una fila cuando hay eventos especiales.*

Crea una función `applyAll` que reciba por parámetro un array de valores cualquiera y otra función `func`. 
- `func` es una función cualquiera que recibe un valor por parámetro y lo transforma. Eg: `(x) => x + 1`
- `applyAll` debe devolver un nuevo array con los mismos elementos tras aplicarles la función `func` a cada uno de ellos

## Ejercicio 3 - JS y HTML, control de flujo

*Una web de venta de globos nos ha solicitado la implementación de un minijuego en HTML5 para distraer a sus usuarios mientras esperan a que la pasarela de pago valide la compra de un producto .*

La evaluación se hará teniendo  en cuenta la cantidad de requisitos completados

-   Crea un div con un emoji de globo en su interior ( 🎈 ) **utilizando Javascript**
-   El globo ( 🎈 ) se hincha y deshincha con las flechas del teclado (arriba y abajo)
-   Al hincharse aumenta de tamaño y al deshincharse disminuye
-   No se puede deshinchar más allá del tamaño inicial
-   El globo ( 💥 ) explota al hacer click
-   El globo también explota al hincharse más de 7 veces
-   Al explotar, el globo no debe poder hincharse ni deshincharse
