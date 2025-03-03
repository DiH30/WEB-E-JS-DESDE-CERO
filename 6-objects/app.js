

//RETO CAMPUS

var imagen = document.getElementById("libroImagen");
imagen.style.border = "10px solid #34C759";
imagen.style.borderRadius = "0px";
imagen.style.width = "150px";  // nuevo ancho
imagen.style.height = "200px"; // nueva altura

var imagen2 = document.getElementById("libroImagen2");
imagen2.style.border = "10px solid #4F6D7A";
imagen2.style.borderRadius = "0px";
imagen2.style.width = "150px";  // nuevo ancho
imagen2.style.height = "200px"; // nueva altura

const libro = {
    titulo: "El diario de Ana Frank",
    tituloOriginalenNeerlandes: "Het Achterhuis",
    temas: "Segunda Guerra Mundial, Ocupación alemana de los Países Bajos",
    autor: "Ana Frank",
    genero: "Autobiografía",
    anio: "1947",
    estado:"Prestado",
//Método
    describirLibro: function () {
return `Libro titulado ${this.titulo}, Titulo Original en Neerlandes ${this.tituloOriginalenNeerlandes}, Temas que aborda: ${this.temas}, escrito por: ${this.autor} publicado en el año ${this.anio}, Genero ${this.genero} el estado es: ${this.estado}.`
    }
}

const libro2 = {
    titulo: "El Principito",
    tituloOriginal: "Le Petit Prince",
    temas: "El amor, la amistad, la soledad, el sentido de la vida, la pérdida, la inocencia, la responsabilidad, y la crítica social",
    autor: "Antoine de Saint-Exupéry",
    genero: "Literatura infantil, novela corta",
    anio: "1943",
    estado:"Prestado",

//Método
    describirLibro2: function () {
return `Libro titulado ${this.titulo}, Titulo Original ${this.tituloOriginal}, Temas que aborda: ${this.temas}, escrito por: ${this.autor} publicado en el año ${this.anio}, Genero ${this.genero} el estado es: ${this.estado}.`
    }
}
console.log(libro.describirLibro())

function imprimirLibro1 () {
    const cajaTexto1 = document.getElementById("infoLibro")
    cajaTexto1.innerText = libro.describirLibro()
}
console.log(libro2.describirLibro2())

function imprimirLibro2 () {
    const cajaTexto2 = document.getElementById("infoLibro2")
    cajaTexto2.innerText = libro2.describirLibro2()
}


/**
 *Libro titulado El diario de Ana Frank, Titulo Original en Neerlandes Het Achterhuis, 
 Temas que aborda: Segunda Guerra Mundial, Ocupación alemana de los Países Bajos, 
 escrito por: Ana Frank publicado en el año 1947, Genero Autobiografía el estado es: Prestado.
 */
/***
 * Libro titulado El Principito, Titulo Original Le Petit Prince, 
  Temas que aborda: El amor, la amistad, la soledad, el sentido de la vida, la pérdida, la inocencia, la responsabilidad, y la crítica social, 
  escrito por: Antoine de Saint-Exupéry publicado en el año 1943, Genero Literatura infantil, novela corta el estado es: Prestado.
 */

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

/*var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};*/
// array
/*var keys = Object.keys(student);
var i = 0;
console.log("Propiedades de student:");
while (i < keys.length) {
    var key = keys[i];
    console.log(key + ": " + student[key]);
    i++;
}*/
/*** Verifica si la propiedad name se encuentra dentro del siguiente objeto: 
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };*/


/*console.log("¿La propiedad name se encuentra dentro del objeto?");

if (student.hasOwnProperty("name")) {
    console.log("La propiedad 'name' existe en el objeto.");
} else {
    console.log("La propiedad 'name' NO existe en el objeto.");
}*/
