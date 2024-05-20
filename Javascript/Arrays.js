// Array de objetos:

const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Pedro', edad: 35 }
];
console.log(personas[0].nombre); // Imprime 'Juan'

// Programación Imperativa:

const numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]); // Imprime [1, 2, 3, 4, 5]
}

// Programación Declarativa:

const numerosv1 = [1, 2, 3, 4, 5];
const numerosV1Duplicados = numerosV1.map(numerosV1 => numerosV1 * 2);
console.log(numerosV1Duplicados); // Imprime [2, 4, 6, 8, 10]

//Mutabilidad:

const colores = ['rojo', 'verde', 'azul'];
colores.push('amarillo'); // Agrega un nuevo color al final del array
console.log(colores); // Imprime ['rojo', 'verde', 'azul', 'amarillo']

// Inmutabilidad:

const numerosV2 = [1, 2, 3, 4, 5];
const numerosV2Duplicados = numerosV2.map(numerosV2 => numerosV2 * 2);
console.log(numerosV2Duplicados); // Imprime [2, 4, 6, 8, 10]
console.log(numerosV2); // El array sigue siendo [1, 2, 3, 4, 5]