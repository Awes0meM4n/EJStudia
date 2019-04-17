# Examen JavaScript - ¡E**JS**tudia!

La prueba consiste en completar un juego inacabado que pretende **concienciar sobre la importancia del estudio constante y responsable** como clave para la superación de estudios de cierta dificultad.

Puede descargar los recursos necesarios que contienen:
1. `index.html`: Página web con la que se trabajará durante la prueba. El resto de archivos no deben modificarse. Cualquier modificación será descartada y no se tendrá en cuenta como resultado de la prueba. En ella sólo será necesario usar código JavaScript (JS).
1. Carpeta `recursos` conteniendo:
   1. `estilo.css`: Archivo con las reglas de estilo del juego.
   1. `coche.gif`: Archivo con el sprite animado de un hombre en vehículo.
   1. `gauge.min.js`: Archivo con el código para la aguja de estudio.
   1. `no-tocar.js`: Archivo con el código de la clase `Estudiante` y la creación de la aguja de estudio.
1. `Prototipo.png`: Imagen del resultado esperado.
1. `README.MD`: Estas instrucciones.

El estado de implementación actual es:
1. Aguja de nivel de estudio operativa
1. `body` completado
1. Variable `horasDeClase` con valor `1000` (valor para completar el curso)

A partir de aquí se pide:
1. Instanciar un objeto de la clase `Estudiante` y asignarlo a la variable `estudiante`.
1. Completar la función `pintarJuego()` para añadir las siguientes funcionalidades:
   1. Mostrar el nivel de **estudio actual** (valor de `estudiante.estudio`) en el display que aparece justo debajo de la aguja (ahora mismo sólo aparece `m/h`: `m`inutos de estudio por `h`ora de clase)
   1. Desplazar la capa con `class="estudianteWrapper"` igual al `%` de clases recibidas (`estudiante.horasDeClase`) del total (variable global `horasDeClase`). Se usará la propiedad de margen izquierdo de la citada capa para crear el efecto de desplazamiento. No debe superar el valor de `95%` por motivos de estilo.
1. Implementar la función `checkAgobio()` que:
   1. Devolverá `false` en caso de que el **estudio actual** sea mayor de `120 m/h` o menor de `20 m/h`. En otro caso devolverá `true`.
   1. Mostrará en pantalla el mensaje `¡Te has quemado!` si el estudio es excesivo o `¡Te ha pillado el toro!` si es escaso.
1. Implementar la función `actualizarJuego()` para que *pinte el juego* si el agobio es correcto y se continua en el curso o que llame a la función de fin del juego. Esta función de actualización se llamará periódicamente cada `100ms`.
1. Añadir los *listener*s para que:
   1. Mientras se pulsa la *[barra espaciadora]*, el `estudiante` apriete los codos (`estudiante.apretarLosCodos()`).
   1. En caso contrario se relajará (`estudiante.relajarse()`).
   1. Cada *listener* se añadirá por JS (no usar HTML) y de dos formas distintas.
1. Durante el juego se debe registrar el nivel de **estudio actual** cada segundo. Esos valores se almacenarán en una variable de su elección. No olvide registrar también el valor al final del juego aunque no coincida con la lectura periódica. Los valores registrados se usarán, entre otras cosas, para ser pintados en la gráfica *Gráfico de estudio*. El eje `x` representará las horas de clase recibidas `estudiante.horasDeClase` hasta el momento del registro y el eje `y` el nivel de **estudio actual** en el momento del registro.
1. Implementar la función `finDelCurso` que finalice el juego de tal modo que:
   1. El juego debe finalizar con un **estudio actual** reseteado a un valor de `0`.
   1. El último mensaje mostrado (`alert`) debe ser el de fin del juego. El texto será `¡Has terminado el curso!`*[salto de línea]*`Tu media de estudio fue: `*[media con dos decimales]*` m/h`. La media es el promedio de los valores de **estudio actual** registrados periódicamente.
   1. Cancele el registro periódico, pero almacene el valor final.
   1. Los eventos de teclado deben anularse.
   1. El juego no volverá a pintarse tras pintar el estado final.
   1. Muestre la gráfica con los registros de estudio guardados. Utilice para ello la capa con `id` igual a `grafica` (se encuentra al final del `body`). Esta capa está inicialmente oculta por la clase `CSS` que usa (`oculto`). Desocúltela eliminándo sólo esa clase y rellénela con la gráfica. Puede implementar la gráfica completamente, aunque **se permite y recomienda utilizar una librería** de su elección para hacerlo.
