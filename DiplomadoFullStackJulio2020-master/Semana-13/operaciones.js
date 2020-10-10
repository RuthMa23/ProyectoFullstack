const readline = require('readline-sync');

/*************************************************
 * 
 */
const Operaciones = {}
var a;
var b;

function suma(a, b) {
    a = readline.question('dame el primer numero');
    b = readline.question('dame el segundo numero');

    var resultado = parseFloat(a) + parseFloat(b);
    console.log('El resultado de la suma es ', resultado);
}

module.exports = Operaciones;
Operaciones.suma = suma;

function resta(a, b) {
    a = readline.question('dame el primer numero');
    b = readline.question('dame el segundo numero');

    var resultado = parseFloat(a) - parseFloat(b);
    console.log('El resultado de la resta es ', resultado);
}

module.exports = Operaciones;
Operaciones.resta = resta;

function multiplicacion(a, b) {
    a = readline.question('dame el primer numero');
    b = readline.question('dame el segundo numero');

    var resultado = parseFloat(a) * parseFloat(b);
    console.log('El resultado de la multiplicacion es ', resultado);
}

module.exports = Operaciones;
Operaciones.multiplicacion = multiplicacion;

function division(a, b) {
    a = readline.question('dame el primer numero');
    b = readline.question('dame el segundo numero');

    var resultado = parseFloat(a) / parseFloat(b);
    console.log('El resultado de la division es ', resultado);
}

module.exports = Operaciones;
Operaciones.division = division;