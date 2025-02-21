
// Ejercicios clase

/*const auto = {
    nombre: "kia",
    color: "azul",
    llantas: 4
}
const {nombre, color, llantas} = auto

auto.nombre = "toyota"

console.log(nombre)*/

/*** Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
 * 
Objeto de muestra:*/ 

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
// array
var keys = Object.keys(student);
var i = 0;
console.log("Propiedades de student:");
while (i < keys.length) {
    var key = keys[i];
    console.log(key + ": " + student[key]);
    i++;
}
/*** Verifica si la propiedad name se encuentra dentro del siguiente objeto: 
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };*/


console.log("¿La propiedad name se encuentra dentro del objeto?");

if (student.hasOwnProperty("name")) {
    console.log("La propiedad 'name' existe en el objeto.");
} else {
    console.log("La propiedad 'name' NO existe en el objeto.");
}

//Reto Campus

const libro = {
    titulo: "El diario de Ana Frank",
    tituloOriginalenNeerlandes: "Het Achterhuis",
    temas: "Segunda Guerra Mundial, Ocupación alemana de los Países Bajos",
    autor: "Ana Frank",
    genero: "Autobiografía",
    anio: "1947",
    estado:"disponible",
//Método
    describirLibro: function () {
return `Libro titulado ${this.titulo}, Titulo Original en Neerlandes ${this.tituloOriginalenNeerlandes}, Temas que aborda ${this.temas}, escrito por ${this.autor} en el año ${this.anio}, Genero ${this.genero} el estado es: ${this.estado}.`
    }
}

console.log(libro.describirLibro())

const cajaTexto = document.getElementById("infoLibro")

function imprimir () {
    cajaTexto.innerText = libro.describirLibro()
}

//Salida en Consola

/*
Libro titulado El diario de Ana Frank, Titulo Original en Neerlandes Het Achterhuis, 
Temas que aborda Segunda Guerra Mundial, Ocupación alemana de los Países Bajos, 
escrito por Ana Frank en el año 1947, Genero Autobiografía el estado es: disponible.
 */