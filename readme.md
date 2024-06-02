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