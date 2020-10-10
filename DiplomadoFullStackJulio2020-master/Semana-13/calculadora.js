const readline = require('readline-sync');

const nombre = require('./Nombre.js');
nombre.pedirNombre();
const math = require('./Operaciones');

console.log("TIENES LAS SIGUIENTES OPERACIONES");
console.log('Suma = a');
console.log('Resta = b');
console.log('Multiplicacion = c');
console.log('Division = d');

var opcion = readline.question('Que operacion deseas realizar');

if (opcion === 'a') {
    math.suma();
}
if (opcion === 'b') {
    math.resta();
}
if (opcion === 'c') {
    math.multiplicacion();
}
if (opcion === 'd') {
    math.division();
}