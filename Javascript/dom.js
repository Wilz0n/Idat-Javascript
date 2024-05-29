// getElements

// Document

let doc = document;
// "document" vendria a representar el documento HTML la cual viene a ser la interfaz que permite interactuar con el contenido de la página web.
console.log(doc);

// document.head

let headElement = document.head;
// "document.head" asigna el elemento <head> del documento HTML. Ahora headElement contiene una referencia al elemento <head>.
console.log(headElement);

// document.body "Cambiar desde aqui"

let bodyElement = document.body;
// "document.body" hace referencia al elemento <body>. Permite acceder y manipular su contenido.
console.log(bodyElement);

// getElementById

const header = document.getElementById('header');
// "document.getElementById('header')"" busca y selecciona un elemento en el documento HTML que tiene el atributo id 'header'.
console.log(header);

// querySelector

const mainTitle = document.querySelector('.title');
// "document.querySelector('.title')" busca y selecciona el primer elemento del documento HTML que coincide con el selector CSS especificado.
console.log(mainTitle);

// querySelectorAll

const navLinks = document.querySelectorAll('nav a');
// "querySelectorAll" selecciona todos los elementos <a> que se encuentran dentro de un elemento <nav>. Devuelve una lista de todos los elementos que coinciden con el selector.
console.log(navLinks);

// textContent

const headerTitle = document.getElementById('header-title');
headerTitle.textContent = 'Nuevo Título del Encabezado';
// "textContent" es una propiedad que te permite modificar el texto dentro de un elemento.
console.log(headerTitle.textContent);

// innerHTML

headerTitle.innerHTML = `<span>Título con HTML</span>`;
// "innerHTML" te permite acceder al contenido HTML dentro de un elemento y agregar o modificar dicho contenido.
console.log(headerTitle.innerHTML);

// property style

headerTitle.style.color = 'blue';
// Usa estilos en JavaScript para cambiar el color del texto del elemento con el id "header-title" a azul.
console.log(headerTitle.style.color);

// property classList.add

headerTitle.classList.add('highlight', 'large-text');
// Añade las clases "highlight" y "large-text" al elemento con el id "header-title".
console.log(headerTitle.classList);


// property classList.remove

headerTitle.classList.remove('highlight');
// Elimina la clase "highlight" del elemento con el id "header-title".
console.log(headerTitle.classList);

// parentElement

const listItem = document.querySelector('ul li');
console.log(listItem.parentElement.parentElement);
// "parentElement" accede al elemento padre del elemento actual. Aquí se accede al elemento abuelo de "listItem".

// nextElementSibling

const firstItem = document.getElementById('item1');
const nextItem = firstItem.nextElementSibling;
// "nextElementSibling" accede al siguiente elemento hermano del elemento actual.
console.log(nextItem);

// children

const nav = document.querySelector('nav');
console.log(nav.children[0].children[1]);
// "children" te da acceso a los elementos secundarios directos de un elemento HTML.

// Crear elementos:

const newParagraph = document.createElement('p');
const contentContainer = document.getElementById('content');
// Crea un nuevo elemento "<p>"" y lo asigna a la variable "newParagraph". Luego, selecciona el elemento con id "content".

// Agregar contenido

newParagraph.textContent = 'Este párrafo fue creado con createElement.';
// Agrega contenido textual al nuevo elemento "<p>"".

// Agregar atributos (Opcional)

newParagraph.classList.add('text-primary', 'mb-3');
 newParagraph.setAttribute('id', 'new-paragraph');
// Añade clases y atributos al nuevo elemento "<p>".

// Renderizar elemento

contentContainer.appendChild(newParagraph);
// Agrega el nuevo elemento "<p>" al contenedor con id "content".
console.log(newParagraph);













