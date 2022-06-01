//Un string es un objeto, que trae particularidades. 
//Los meetodos son funciones que pertenecen a un objeto

//.length
// devueve la longitud de una cadena de texto

let mensaje = "Gran dia para practicar JavaScript";
console.log(mensaje.length);

//.indexOf
//Se ejecuta sobre un string dado y recibe como parametro una cadena de texto
// y sera buscada dentro del string que ejecuta el metodo
// el valor de retorno es en el indice que empieza la palabra
// si no se encontro lo q se buscaba retorna -1

console.log(mensaje.indexOf("dia"));

//.slice 
//toma una porcion determinada de una cadena de texto
//se necesitan dos parametros numericos, el indice dond queres comenzar a tomar la porcion de texto
//y el indice donde queres cortar, este ultimo es opcional

console.log(mensaje.slice(0, 24));
console.log(mensaje);

//.trim
//no recibe parameros. Elimina los espacios en blanco que no estan en el medio

console.log(mensaje.trim());

//.split
// convertir un string en un array
// pasar como parametro el delimitador a traves del cual queres cortar

console.log(mensaje.split(" "));

//replace
// reemplaza una porcion de texto dentro de un string
// 2 parametros, la porcion que queres reemplazar y la porcion que queres ingresar

let reemplazoFastFast = "Racing Club Campeon"
console.log(reemplazoFastFast.replace("Campeon", "Avellaneda"));


function reemplazoFastFast(frase, palabraDelTexto, palabraReemplazar){
    let frase = frase
    return frase.replace(palabraDelTexto, palabraReemplazar)
  }
  reemplazoFastFast