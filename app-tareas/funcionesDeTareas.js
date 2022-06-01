const fs = require('fs');

let archivoDeTareas = {
leerArchivo: function(){
let tareas = fs.readFileSync('tareas.json', 'utf-8');
return JSON.parse(tareas);
}
}
module.exports = archivoDeTareas;