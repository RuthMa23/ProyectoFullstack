const readline = require('readline-sync');

function pedirNombre() {
    let nombre = readline.question('Escribe tu Nombre');
    console.log('Hola', nombre);


}
exports.pedirNombre = pedirNombre;