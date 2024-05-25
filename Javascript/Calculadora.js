 // Ingresar el Primer numero para realizar la operacion
 let num1 = parseFloat(prompt("Ingrese el primer número:"));

 // Ingresa el Segundo numero para realizar la operacion
 let num2 = parseFloat(prompt("Ingrese el segundo número:"));

 // Ingresa la operación a realizar segun decision del usuario
 let operacion = prompt("Ingrese la operación a realizar (+, -, *, /, %):");

 let resultado;

 // Estructura condicional para realizar la operación correspondiente
 if (operacion === "+") {
   resultado = num1 + num2;
 } else if (operacion === "-") {
   resultado = num1 - num2;
 } else if (operacion === "*") {
   resultado = num1 * num2;
 } else if (operacion === "/") {
   // Verificacion si el segundo número no es cero para evitar división por cero
   if (num2 !== 0) {
     resultado = num1 / num2;
   } else {
     resultado = "Error: División por cero";
   }
 } else if (operacion === "%") {
   resultado = num1 % num2;
 } else {
   resultado = "Operación no válida";
 }

 // Muestra el resultado de la operación
 alert("El resultado es: " + resultado);11