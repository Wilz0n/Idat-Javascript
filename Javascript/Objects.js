// Objetos:

const persona = {
    nombre: 'pedro',
    edad: 40,
    ciudad: 'Peru'
};

// Creación de objetos:

const personaV1 = {
    nombre: 'Juan',
    edad: 30
};

const producto = new Object();
producto.nombre = 'Camisa';
producto.precio = 20;

// Acceder a los datos:

console.log(persona.nombre); // Aqui Accede al valor de la propiedad 'nombre'
console.log(producto['precio']); // Aqui Accede al valor de la propiedad 'precio'

// Agregar valores al objeto:

persona.profesion = 'Desarrollador';

// Eliminar valores:

delete persona.ciudad;

// Congelar, Sellar:

Object.freeze(persona); // Congela el objeto 'persona'
Object.seal(producto); // Sella el objeto 'producto'

// Unir objetos, Assign:

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = Object.assign({}, obj1, obj2);

// Spread operator:

const obj4 = { a: 1, b: 2 };
const obj5 = { ...obj1, c: 3 };

// This:

const persona = {
    nombre: 'Juan',
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
};
persona.saludar(); // Imprime 'Hola, mi nombre es Juan'