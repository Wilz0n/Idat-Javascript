const username = 'Javier-Bernal';
const password = '43252';
const email = 'Javier-Bernal@example.com';

// if y else: Este codigo permite ejecutar el código si la condición es verdadera y el otro código es segun su condición es falsa.

if (username === 'Javier-Bernal') {
    console.log("Estás logeado");
} else {
    console.log("No estás logeado");
}

if (password === '123456') {
    console.log("Contraseña correcta");
} else {
    console.log("Contraseña incorrecta");
}

// else if: Se utiliza para verificar condiciones. 

if (username === 'Javier-Bernal') {
    console.log("Estás ingresando");
} else if (email) {
    console.log("Estás ingresado");
} else {
    console.log("No estás logrado ingresar");
}
