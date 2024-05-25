// 1. Crear un objeto persona con propiedades básicas
let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
  };
  
  // 2. Acceder y mostrar propiedades del objeto
  console.log("Nombre:", persona.nombre);
  console.log("Edad:", persona.edad);
  console.log("Ciudad:", persona.ciudad);
  
  // 3. Añadir un objeto añidado dentro de persona
  persona.direccion = {
    calle: "Calle Principal",
    numero: 123,
    codigoPostal: "28001"
  };
  
  // 4. Agregar y eliminar propiedades del objeto
  persona.trabajo = "Ingeniero";
  delete persona.ciudad;
  
  // 5. Usar la destructuración para acceder a propiedades
  const { nombre, edad, direccion } = persona;
  console.log("Nombre:", nombre);
  console.log("Edad:", edad);
  console.log("Dirección:", direccion.calle, direccion.numero, direccion.codigoPostal);
  
  // 6. Congelar el objeto para evitar cambios
  Object.freeze(persona);
  
  // 7. Sellar el objeto para permitir modificaciones pero no agregar ni eliminar propiedades
  Object.seal(persona);
  
  // 8. Unir dos objetos usando Object.assign y el operador spread
  let infoAdicional = { hobby: "Pintar", idioma: "Inglés" };
  let personaCompleta = Object.assign({}, persona, infoAdicional);
  console.log("Persona completa:", personaCompleta);
  
  // 9. Usar "this" dentro de un método del objeto
  
  // (ES5)
  persona.saludar = function() {
    return "Hola, soy " + this.nombre + " y tengo " + this.edad + " años.";
  };
  console.log(persona.saludar());

  // (ES6)
  persona.saludar = () => {
    return `Hola, soy ${persona.nombre} y tengo ${persona.edad} años.`;
  };
  console.log(persona.saludar());

  // 10. Recorrer el objeto usando Object.keys, Object.values y Object.entries
  console.log("Propiedades:", Object.keys(persona));
  console.log("Valores:", Object.values(persona));
  console.log("Entradas:", Object.entries(persona));
  
  // 11. Funciones con parámetros y con devolución (return)
  persona.cambiarNombre = function(nuevoNombre) {
    this.nombre = nuevoNombre;
  };
  persona.cambiarEdad = function(nuevaEdad) {
    this.edad = nuevaEdad;
  };
  console.log("Nombre antes del cambio:", persona.nombre);
  persona.cambiarNombre("Pedro");
  console.log("Nombre después del cambio:", persona.nombre);
  
  console.log("Edad antes del cambio:", persona.edad);
  persona.cambiarEdad(35);
  console.log("Edad después del cambio:", persona.edad);
  