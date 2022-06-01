//Metodos de arrays

//map
//se ejecuta como un array dado y recibe como parametro un call back
//el callback recorre uno a uno los elementos del array dado, tomando 
//como parametro cada uno de estos elementos y se encarga de retornar un array nuev

let notas = [10, 4, 5, 8, 9, 4];

let notasHastaEl100 = notas.map(function(numero){
    return numero * 10;
})
// console.log(notasHastaEl100);

//que sucede dentro del call back?
// esa logica la implementas vos en funcion de lo que estes queriendo hacer
// por ej. si queres multiplicar por dos todos los numeros del array
//el nuevo array va a tener el resultado de cada numero multiplicado por dos

//filter
//filtra los elementos de un array dependiendo la logica que implementes
//recorrera el array dado, tomara cada uno de los elementos de este, y va a devolver
//solo los elementos que cumplan con la condicion definida

let notasAprobadas = notas.filter(function(numero){
return numero >=7;
});
console.log(notasAprobadas);

//se ejecuta sobre un array y recibe como parametro un callback y dentro de este
//pondremos la condiciones necesarias para filtrar

// let mayores = edades.filter(function (unaEdad){ 
// return unaEdad >= 18;

// })

//reduce
// tmb se ejecuta sobre un array dado, recibe como parametro un callback
// y este callback recorre uno a uno los elementos del array
// Tiene como finalidad reducir a la mas minima expresion el array dado,
//retornando como resultado un unico valor

let sumarNotas = notas.reduce(function(estado, numero){
return estado + numero;
})
console.log(sumarNotas);

//el callback recibe ahora dos parametros, el primero sera el acumulador
//y el segundo sera el elemento actual

// let numeros = [5, 71, 16];
// let resultado = numeros.reduce(function (acumulador, numero) {
//     return acumulador + numero;
// }

// );

// console.log(resultado);


//foreach
//iterar sobre un array dado
//recibe como parametro un callback q va a reccorrer el array dado
//no devuelve nada

notas.forEach(function(valor, indice){
console.log("En la posicion" + indice + "tengo el valor" + valor);
})
