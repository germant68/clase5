//const contador = require("./contador"); //./ significa desde aqui

//contador(5) //consumimos la funcion que creamos en contador
let fs = require("fs"); //requerimos el modulo nativo de node
// todos los recursos del modulo estan almacenados en esta variable
//console.log(fs);

// fs.readFile('mensaje.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

let datos = fs.readFileSync(__dirname + "/mensaje.txt", "utf-8") //indica donde queda el archivo

console.log(datos);

let moment = require("moment");

//contador(5);

//console.log("Hola como vamos..")
console.log(moment().format("MM DD YY"));
