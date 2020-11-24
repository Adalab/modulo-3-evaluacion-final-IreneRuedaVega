![Adalab](https://beta.adalab.es/resources/images/adalab-logo-155x61-bg-white.png)

# Módulo 3 - Evaluación-final

Alumna: Irene Rueda Vega

Promoción Kizzy

## Buscador de personajes de Rick y Morty

![Alt Text](https://media1.tenor.com/images/e7b32eb644dec3625e6b112ad0930864/tenor.gif?itemid=15652366)

Este es el ejercicio que se pide en la evaluación final del Módulo 3 de React de Adalab.

El ejercicio consiste en desarrollar una página web con un listado de personajes de Rick and Morty, que podemos filtrar por el nombre del personaje. Se ha utilizado React para realizarlo.

El ejercicio tiene distintos hitos:

1. **Listado de personajes**

En primer lugar, realizar una web con el listado de personajes de Rick and Morty. Para eso, hemos utilizado el servicio de https://rickandmortyapi.com/documentation/#get-all-characters que nos devuelve información sobre los primeros 20 personajes de la serie. Sobre cada uno, teniamos que pintar al menos: •Foto •Nombre •Especie.

2. **Filtrado de personajes**

Cuando tenia ya el listado de personajes en pantalla, la segunda parte consistió en poder buscarlos por nombre. Para eso, añadimos un <input> a la interfaz, de forma que al ir escribiendo un nombre queden en la interfaz solo los personajes cuyo nombre contiene las letras escritas. En el pantallazo de arriba, al escribir 'Ric' aparecen personajes cuyo nombre completo contiene esas letras en ese orden.

3. **Componentes del listado de personajes**

El listado debía tener los siguientes componentes como mínimo:

- Componente para los filtros.
- Componente para el listado.
- Componente para la tarjeta de cada personaje del listado.
- Componente para el detalle de cada personaje.

4. **Detalle de personajes**

Una funcionalidad que tiene la página es la siguiente: al hacer clic sobre la tarjeta de un personaje, su información aparecerá a pantalla completa. Para hacer esto he usado rutas y React router. En la pantalla de detalle aparecerá además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está vivo o muerto.

5. **Detalles de calidad**

- El campo de texto recubierto por una etiqueta <form />
- Si estando en el campo de filtrado pulsamos intro se debía impedir que el navegador navegue o cambie la ruta sin querer.
- Si se busca por un texto por ejemplo "XXX" y no hay ningún personaje que coincida con dicho texto se debía mostrar un mensaje del tipo "No hay ningún personaje que coincida con la palabra XXX".
- El filtro debe filtrar independientemente de que la usuaria introduzca el texto en mayúsuclas o minúsculas.
- Al entrar en el detalle de un personaje y a continuación pulsar atrás, el campo de texto debe mostrar el texto que tenía anteriormente.

5. **BONUS**

- Mostrar la especie y si un personaje está muerto con un icono.
- Usar algún sistema de grid para pintar el listado de personajes.
- Que funcione bien el responsive en dispositivos pequeños.
- Que la URL del detalle de personajes sea compatible, es decir, que si visitamos esa URL directamente en el navegador se vea el detalle del personaje.
- En el caso de que el usuario navegue a una URL inexistente debemos mostrar un mensaje del tipo "El personaje que buscas no existe".
- Ordenar el listado de personajes alfabéticamente por nombre.

## Tecnologías utilizadas para realizar este proyecto

- HTML
- CSS3, SASS
- JavaScript
- React, React Router
- Visual Studio Code
