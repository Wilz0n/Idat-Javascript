// for vendria a ser para iterar sobre arrays u otros objetos iterables

for (inicialización; condición; actualización) {
    // Código para ejecutar en cada iteración
}

// ejemplo

for (let i = 0; i < 5; i++) {
    console.log("Iteración número: " + i);
}
// al ponerlo en el console
// Iteración número: 0
// Iteración número: 1
// Iteración número: 2
// Iteración número: 3
// Iteración número: 4

// forEach vendria ser un método de los arrays que se ejecuta una función dada en cada elemento del array.

let numeros = [1, 2, 3, 4];
numeros.forEach(function(numero) {
    console.log(numero * 2);
});
// al ponerlo en el console
// 2
// 4
// 6
// 8

// Map tambien es un metodo de los arrays que tambien puede ejecutar una funcion en cada elemnto del array pero devuelve un nuevo array con los resultados de esa funcion

let numerosV1 = [1, 2, 3, 4];
let dobles = numerosV1.map(function(numeroo) {
    return numeroo * 2;
});
console.log(dobles);
// al ponerlo en el console: [2, 4, 6, 8]

// Ejemplos de Array Methods: y ejemplos de cada uno


//1. push()Agrega uno o más elementos al final de un array y devuelve la nueva longitud del array.

let animales = ["perro", "gatos"];
frutas.push("loro");
console.log(animales);
// Salida: ["perro, gatos, loro"]

//2. pop()Elimina el último elemento de un array y lo devuelve.

let frutas = ["manzana", "plátano", "naranja"];
let ultimaFruta = frutas.pop();
console.log(ultimaFruta);
// Salida: "naranja"
console.log(frutas);
// Salida: ["manzana", "plátano"]


//3. shift()Elimina el primer elemento de un array y lo devuelve.

let maquina = ["taladro", "martillo", "pala"];
let primeraMaquina = maquina.shift();
console.log(primeraMaquina);
// Salida: "taladro"
console.log(maquina);
// Salida: ["martillo", "pala"]