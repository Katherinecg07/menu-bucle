console.log("Tienda PetShop");
console.log("==============");
console.log("1. Comprar");
console.log("2. Ver carrito");
console.log("3. Anular compra");
console.log("4. Pagar");
console.log("5. Salir");

const readline = require("readline");
const { promisify } = require("util");

const captura = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pregunta = promisify(captura.question).bind(captura);

let opcionUsuario = "";
let volverAPreguntar = true; //Variable tipo boolean

captura.question("Ingrese su nombre: ", async (respuesta) => {
  console.log("Hola " + respuesta + " ingrese una opción del menú: ");

  while(volverAPreguntar) { // Mientras volverAPreguntar sea verdadero
    
    
    var opcionSel = await pregunta("OPCION: ");
    
    //  captura.question("OPCION: ", (opcionSel) => { // Esperar respuesta del usuario

        console.log("Haz seleccionado la opción: " + opcionSel);
    
        if ( ["1", "2", "3", "4", "5"].includes(opcionSel) ) {
          console.log("Opción correcta.");
          opcionUsuario = opcionSel;
          volverAPreguntar = false;
        } else {
          console.clear(); //limpiar la consola
          console.log("Opción no válida.");
          volverAPreguntar = true;
        }
        
     // });
  }
});
