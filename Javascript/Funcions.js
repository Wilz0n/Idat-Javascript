// Funciones:

function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}

// Invocación de función:

saludar('Juan'); // Aqui esta llamando a la función 'saludar' con el argumento 'Juan'

// Comunicación entre funciones:

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

const resultado = sumar(5, 3);
console.log(resultado); // Imprime 8

// Declaración de función:

function multiplicar(a, b) {
    return a * b;
}

const resultadoV2 = multiplicar(4, 2);
console.log(resultadoV2); // Imprime 8