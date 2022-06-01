//Callbacks
//cuando compartimos un contacto por wsp estamos compartiendo como s fuera un msj
//pero no sabemos cuando el otro va a usar el contacto que le pasamos para ponerse en contacto

//Es una funcion que se pasa como parametro de otra funcion
//Es la funcion q recibe a ese parametro la q se encarga de ejecutar la funcion cuanod la necesite

// function funcionPadre (function () {
//     //sentencias de codigo
// })

// //funcionPadre esta recibiendo como parametro una funcion que no tiene nombre, una funcion anonima
// //eso es un callback, pero no todas tienen que ser anonimas, pueden estar definidas antes de ser pasadas como parametro

// //definicion
// function vaComoParametro () {
//     return "Soy un callback";
// }

//ejecucion
// funcionPadre (vaComoParametro);
//soy un callback
//Al momento que se pasa como parametro, no se debe ejecutar, no debe llevar parentesis
//ya q funcion padre es quien va a saber cuando se va a ejecutar

// //sumar
// let sumar = (n1, n2) => n1 + n2;

// //restar
// let restar = (n1, n2)  => n1 - n2;


//operacion matematica
// let operacionMatematica = (n1, n2, operacion) => operacion(n1, n2);
// operacionMatematica(3, 4, )

//opcion 1
//operacionMatematica(34, 56, sumar)

//opcion 2
//

//vamos a definir la funcion operacionMatematica, que lleva dos parametros y un callback
//el nombre del parametros es cualquier funcion que definas previamente o una funcion anonima q definas en ese momento

let sumar = (numero1, numero2) => numero1 + numero2;
let restar = (numero1, numero2) => numero1 - numero2;
let multiplicar = (numero1, numero2) => numero1 * numero2;
let dividir = (numero1, numero2) => numero1 / numero2;

let calculadora = (numero1, numero2, operacion) => operacion(numero1, numero2);

console.log(calculadora(18, 3, restar));

// se usan cuando dependemos de una funcion para utilizar otra