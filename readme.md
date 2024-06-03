# Ejercicio (DOM)

## TAREA

### Crea una pagina que contenga componentes que tengan interacción con el usuario. Asi mismo crear un Readme explicando lo usaste en tu pagina.
### Referencia de lo menciono en tutoria:
``` ° Documento
  - getElementById()
  - querySelector() (usando selectores)
° Modificar elemento
  - .textContent (Abarca el contenido del texto)
  - .innerHTML (Agrega etiquetas)
° Modificar estilo
  - .style.propiedad ()
  - agregar un atributo => .classList.add('card','card-red')
  - quitar atributo => .classList.remove('card')
  - si existe la quita y si no la crea => .classList.toggle('prueba')
° Mover entre elementos "DOM traversing"
  - usando "querySelector()" => menu.children[0] => posición del hijo
  - usando "querySelector()" => enlace.parentElement => posición del padre
° Crear elementos => .createElement('p')
° Eventos
  - .addEventListener(evento,function(){});
  - CallBack => .addEventListener(evento,(e) => { e.target });
        usando una función "function addCard(e){ console.log(e.target)}" =>  .addEventListener('click', addCard);
   ```


   # Interacción con el Usuario

## Funcionalidades

### Obtener Elementos
- **getElementById()**: Se utiliza para obtener elementos por su ID.
    ```javascript
    const mainTitle = document.getElementById('main-title');
    ```

- **querySelector()**: Se utiliza para seleccionar elementos usando selectores CSS.
    ```javascript
    const description = document.querySelector('.description');
    ```

### Modificador de Elementos
- **.textContent**: Modifica el contenido del texto de un elemento.
    ```javascript
    mainTitle.textContent = 'Título Cambiado';
    ```

- **.innerHTML**: Modifica el contenido HTML interno de un elemento.
    ```javascript
    newParagraph.innerHTML = 'Este es un <strong>nuevo</strong> párrafo.';
    ```

### Modificar Estilo
- **.style.propiedad**: Modifica una propiedad de estilo de un elemento.
    ```javascript
    description.style.color = 'blue';
    ```

- **classList.add()**: Agrega una o más clases a un elemento.
    ```javascript
    newParagraph.classList.add('card');
    ```

- **classList.remove()**: Quita una clase de un elemento.
    ```javascript
    description.classList.remove('card');
    ```

- **classList.toggle()**: Alterna una clase en un elemento.
    ```javascript
    description.classList.toggle('card-red');
    ```

### DOM Traversing
- **children**: Navegar a los hijos de un elemento.
    ```javascript
    console.log(content.children[0]);
    ```

- **parentElement**: Navegar al padre de un elemento.
    ```javascript
    console.log(description.parentElement);
    ```

### Crear Elementos
- **createElement('p')**: Crea un nuevo elemento de párrafo.
    ```javascript
    const newParagraph = document.createElement('p');
    ```

### Eventos
- **addEventListener(evento, function)**: Agrega un oyente de eventos a un elemento.
    ```javascript
    changeTitleButton.addEventListener('click', () => {
        mainTitle.textContent = 'Título Cambiado';
    });
    ```

- **addEventListener(evento, callback)**: Usando una función de devolución de llamada.
    ```javascript
    addParagraphButton.addEventListener('click', (e) => {
        console.log(e.target);
    });

    function addCard(e) {
        console.log(e.target);
    }
    toggleStyleButton.addEventListener('click', addCard);
    ```
