// codigo que va a contar de 1 a 10

function contador(valor){
    for(let i = 1; i <= valor; i++){ //un ciclo repetitivo que va a iniciar en 1. Y ese valor i lo va a contar hasta que sea igual o menor al valor que yo le paso y lo va a hacer de uno en uno 
    console.log("Estoy contando " + i);
}
}
module.exports = contador; // desdde cualquier programa puedo llamar este modulo
//contador(5); //llamo a la funcion y le paso un valor para ver si funciona