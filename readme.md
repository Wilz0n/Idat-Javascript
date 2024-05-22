### Tarea-Idat-JS-forEach y map


- Explicar y dar ejemplo de for. 

- Explicar forEach y map, diferencias y usos.

- Array Methods explicar cada uno y dar ejemplo

- No olvidar agregar readme.md con resumen

## for
El bucle `for` permite iterar sobre elementos de un array o ejecutar un bloque de código a un número determinado de veces.

### Ejemplo:
```javascript
for (let i = 0; i < 5; i++) {
    console.log("Iteración número: " + i);
}
```

### forEach
`forEach` ejecuta una función en cada elemento del array y no devuelve un nuevo array.

### Ejemplo:

```let numeros = [1, 2, 3, 4];
numeros.forEach(function(numero) {
    console.log(numero * 2);
});
```
## map
`map`: ejecuta una función en cada elemento del array y devuelve un nuevo array con los resultados.

### Ejemplo:

```let numeros = [1, 2, 3, 4];
let dobles = numeros.map(function(numero) {
    return numero * 2;
});
console.log(dobles);
```

# Métodos de Array
`push()`
- Agrega elementos al final del array.

### Ejemplo:

```
let frutas = ["manzana", "plátano"];
frutas.push("naranja");
```
`pop()`
- Elimina el último elemento del array.

### Ejemplo:

```
let frutas = ["manzana", "plátano", "naranja"];
let ultimaFruta = frutas.pop();
```

`shift()`
- Elimina el primer elemento del array.

### Ejemplo:

```
let frutas = ["manzana", "plátano", "naranja"];
let primeraFruta = frutas.shift();
```