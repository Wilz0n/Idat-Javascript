// variables booleanas
let esSoleado = true;
let estaLloviendo = false;
let esVerano = true;

//booleanos en condicionales
if (esSoleado) {
    console.log("¡Hace sol! Es un buen día para salir.");
} else {
    console.log("No hace sol. Tal vez sea mejor quedarse adentro.");
}

if (estaLloviendo) {
    console.log("Está lloviendo. Lleva un paraguas contigo.");
} else {
    console.log("No está lloviendo. Puedes salir sin paraguas.");
}

// booleanos con otros tipos de datos para identificar el correcto
let temperatura = 28;
let esCaluroso = temperatura > 25;

if (esCaluroso && esVerano) {
    console.log("Hace calor y es verano. ¡Ideal para ir a la playa!");
} else if (esCaluroso && !esVerano) {
    console.log("Hace calor pero no es verano. Aún así, refrescarse es una buena idea.");
} else {
    console.log("No hace tanto calor o no es verano. No es tan urgente refrescarse.");
}