// Ejercicio [1]: Escribe un bucle while que imprima los números del 1 al 5.

let i = 1; // Inicializamos la variable i con 1

while (i <= 5) { // La condición del bucle es seguir mientras i sea menor o igual a 5
  console.log(i);
  i++; // Por ultimo se ncrementamos i en 1 en cada iteración
}

// Ejercicio [2]: Escribe un "bucle" for que imprima los elementos de un array de nombres.

// Primero se define un array de nombres oh numeros en este caso nombres
let nombres = ['Ana', 'Luis', 'Carlos', 'Marta', 'Sofía'];

// Se realiza el "bucle" for para iterar sobre cada elemento del array
for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

// Ejercicio [3]: Usa "forEach" para imprimir los elementos de un array de números multiplicados por 2.

// Se define un array de números
let numeros = [1, 2, 3, 4, 5];

// Se usa el método "forEach" para iterar sobre cada elemento del array
numeros.forEach(function(numero) {
  console.log(numero * 2);
});

// Ejercicio [4]: Usa "map" para crear un nuevo array con los cuadrados de los números de un array dado.

let numerosV2 = [1, 2, 3, 4, 5];

// Se usa el método map para crear un nuevo array con los cuadrados de los números
let cuadrados = numeros.map(function(numeroV3) {
  return numeroV3 * numeroV3;
});

// Imprimimos el nuevo array
console.log(cuadrados); // [1, 4, 9, 16, 25]

// Ejercicio [5]: Usa "find" para encontrar el primer número mayor que 10 en un array de números.

let numerosV4 = [5, 8, 12, 18, 7, 10, 20];

// Se usa el método "find" para encontrar el primer número mayor que 10
let numeroMayorQueDiez = numerosV4.find(function(numeroV5) {
  return numeroV5 > 10;
});

// Imprimimo el resultado
console.log(numeroMayorQueDiez); // 12

// Ejercicio [6]: Usa "some" para verificar si hay algún número par en un array de números.

let numerosA = [5, 7, 9, 11, 13, 14];

// Se usa el método "some" para verificar si hay algún número par
let hayNumeroPar = numerosA.some(function(numeroB) {
  return numeroB % 2 === 0; // realizar la condición para verificar si el número es par
});

// Imprimimos el resultado
console.log(hayNumeroPar); // true

// Ejercicio [7]: Usa "filter" para crear un nuevo array con los números impares de un array dado.

let numerosC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Al realizar el método "filter" se tiene que crear un nuevo array con los números impares
let impares = numerosC.filter(function(numeroD) {
  return numeroD % 2 !== 0; // La condición para verificar si el número es impar
});

// Se imprime el nuevo array
console.log(impares); // [1, 3, 5, 7, 9]

// Ejercicio [8] (Extra): Combina "filter y map" para crear un nuevo array con los cuadrados de los números impares de un array dado.

let numerosE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Usare "filter" para filtrar los números impares y luego "map" para obtener sus cuadrados
let cuadradosImpares = numerosE.filter(function(numeroF) {
  return numeroF % 2 !== 0; // Se filtran los números impares
}).map(function(numeroF) {
  return numeroF * numeroF; // Y se Obtiene el cuadrado de cada número impar
});

// Imprimimos el nuevo array
console.log(cuadradosImpares); // [1, 9, 25, 49, 81]


















