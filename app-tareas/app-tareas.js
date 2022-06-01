

// let fs = require("fs");
// let datos = fs.readFileSync(__dirname + "/tareas.json", "utf-8");
// console.log(datos);

// let datosArray = JSON.parse(datos);
// console.log(datosArray);



// let accion = process.argv[2]

// console.log(accion["node", "app-tareas.js", "listar"]);

// const archivo = require('./funcionesDeTareas');

const funcionesDeTareas = require ('./funcionesdeTareas')
let proceso = process.argv[2]
switch (proceso) {
    case 'listar':
    let tareas = funcionesDeTareas.leerArchivo()
    console.log("Listado de tareas \n-------------------")
    tareas.forEach((element, index) => {
        console.log(index+1+ ". " + element.titulo +" - "+element.estado);
        
    });
    break;
    case undefined:
        console.log("Atencion tiene que pasar una acciòn \nLas acciones disponibles son: listar");
        break;
        default:
            console.log("No entiendo que quieres hacer");


}