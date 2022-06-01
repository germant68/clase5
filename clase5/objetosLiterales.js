//Objetos literales
// se crea una varable, seguida de llaves, dentro de las llaves
// escribimos claves y valores
// la clave siempre va acompañada de dos puntos
// y el valor de una coma (,)
//las claves y valores son propiedades
//para acceder a una propiedad, la dot notation

// let curso = {
//     cantidadAlumnos : 52,
//     docentes : ["Nacho", "Javier"],
//     horario : "de 19 a 21",
//     notificaciones : function(){
//         return "El horario de la cursada es " + this.horario
//     }
// }

// console.log(curso.notificaciones());

//metodos
//funciones q se asignan como valor a una clave y que buscan hacer algo mas 
// alla de tener un simple dato

//this, hace referencia al objeto que esta invcando

//constructor
//si quiero tener varios objetos literales que conserven la misma estructura

let curso = {
    cantidadAlumnos : 52,
    docentes : ["Nacho", "Javier"],
    horario : "de 19 a 21",
    notificaciones : function(){
        return "El horario de la cursada es " + this.horario
    }
}
function Cursos (cantidadAlumnos, docentes, horario) {
    this.cantidadAlumnos = cantidadAlumnos;
    this.docentes = docentes;
    this.horario = horario;

}

let cursoProgramacion = new Cursos(50, ["Javier", "German"], "de 19 a 21")
console.log(cursoProgramacion);

function Auto(marca, modelo) {
    this.marca = marca;
    this.modelo = modeloM
};

let miAuto = new Auto("Ford", "Falcon");
let miOtroAuto = new Auto("Chevrolet", "Celta");

