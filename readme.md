# Ejercicio (DOM)

![Dom-tarea](./img/MicrosoftTeams-image.png)

## Explicacion de codgio de DOM:
#### - Este proyecto muestra cómo manipular el Documento Objeto Modelo (DOM) utilizando JavaScript. A través de ejemplos prácticos, se ilustran diversos métodos y propiedades para acceder y modificar elementos HTML.

## Contenidos
### Estructura del Documento:
- document: Representa el documento HTML completo.
- document.head: Accede al elemento <head> del documento.
- document.body: Accede al elemento <body> del documento.
### Selección de Elementos:

#### getElementById: Selecciona un elemento por su atributo id.

``` const header = document.getElementById('header'); ```

### querySelector: Selecciona el primer elemento que coincide con un selector CSS.

``` const mainTitle = document.querySelector('.title'); ```

### querySelectorAll: Selecciona todos los elementos que coinciden con un selector CSS.

``` const navLinks = document.querySelectorAll('nav a'); ```

### textContent: Modifica el texto dentro de un elemento.

``` headerTitle.textContent = 'Nuevo Título del Encabezado'; ```

### innerHTML: Modifica el contenido HTML dentro de un elemento.

``` headerTitle.innerHTML = `<span>Título con HTML</span>`; ```

### style: Cambia estilos CSS directamente desde JavaScript.

``` headerTitle.style.color = 'blue'; ```

### classList.add: Añade una o más clases a un elemento.

``` headerTitle.classList.add('highlight', 'large-text'); ```

### classList.remove: Elimina una o más clases de un elemento.

``` headerTitle.classList.remove('highlight'); ```

## Navegación en el DOM

- ### parentElement: Accede al elemento padre.


``` console.log(listItem.parentElement.parentElement); ```

- ### nextElementSibling: Accede al siguiente elemento hermano.


``` const nextItem = firstItem.nextElementSibling; ```

- ### children: Accede a los elementos hijos directos.

``` console.log(nav.children[0].children[1]); ```

- ### createElement: Crea un nuevo elemento HTML.

``` const newParagraph = document.createElement('p'); ```

- ### appendChild: Añade un elemento hijo al DOM.

``` contentContainer.appendChild(newParagraph); ``` 