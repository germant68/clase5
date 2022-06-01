let persona = {
    nombre : "Carli",
    edad : 26,
    domicilio : "Calle Falsa 123"
}

let personaJSON = JSON.stringify(persona);

let personaOriginal = JSON.parse(personaJSON);

console.log(personaJSON);
console.log(personaOriginal);