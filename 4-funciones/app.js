
//RETO CAMPUS 🔥📚

//Seguimiento de Libros


let librosLeidos = [];

function agregarLibro (){

    let libro = prompt("Añade un libro (escribe 'salir' para terminar)");

// Mientras no se escriba 'salir', agregamos libros

while (libro !== "salir") {
    if (libro) {
      librosLeidos.push(libro); // Agregar libro si no está vacío
    }
    libro = prompt("Añade un libro (escribe 'salir' para terminar)");
  }
}
// Función para mostrar los libros leídos 

function mostrarLibrosLeidos (array){
    for (let i = 0; i < array.length; i++) {
        document.write(`<h1>${i + 1}.- ${array[i]} </h1>`);
      }
} 
agregarLibro();

mostrarLibrosLeidos(librosLeidos);

// Array donde se almacenarán los libros que he leído

/*let librosLeidos = [];

// Función para agregar un libro al array de librosLeidos

function agregarLibro(libro) {

 librosLeidos.push(libro)
 return libro

}

// Función para mostrar todos los libros leídos

function mostrarLibrosLeidos (array){

    for (let i = 0; i < array.length; i++) {
        document.write(`<h1>${i + 1}.- ${array[i]} </h1>`);
    }
}

agregarLibro("El Principito");
agregarLibro("El diario de Ana Frank");
agregarLibro("La biblia");
agregarLibro("Quien se ha llevado mi queso");
agregarLibro("El monje que vendió su ferrari");
agregarLibro("El jarrón azul");
mostrarLibrosLeidos(librosLeidos);*/




//Ejercicios clase

/*console.table(["apples", "onranges", "bananas"])*/


//Declarar función
/*let result = suma(4,2)
console.log( suma(4,2) )
function suma ( n1, n2 ){
    let total = n1 + n2;
    return `El total de la suma es: ${total}`
}*/

//console.log( suma(4,2) ) // 4 toma el lugar de n1 y 2 toma el lugar de n2

/*let result = suma(4,2)

console.log( suma(4,2) )*/

//hoisting
//scope

/*let cajaDeFrutas = []
function agregarFruta (fruta){
    cajaDeFrutas.push(fruta)
    return fruta
}
function mostrarFrutas (array){

    for (let i = 0; i < array.length; i++) {
        document.write(`<h1>${i + 1}.- ${array[i]} </h1>`);
    }
}
agregarFruta("piña")
agregarFruta("manzana")
agregarFruta("aguacate")
agregarFruta("mora")
mostrarFrutas(cajaDeFrutas)*/


//Declarar Funciones, añadir elementos arrays


/*let cajaDeFrutas = []

function agregarFruta (){

let fruta = prompt("añade una fruta")

    while( fruta != "salir" ){
        cajaDeFrutas.push(fruta)
        fruta = prompt("añade una fruta")
    }

}
function mostrarFrutas (array){
    for (let i = 0; i < array.length; i++) {
        document.write(`<h1>${i + 1}.- ${array[i]} </h1>`);
      }
}*/

/*let car = {
    color: "red",
    marca: "Audi",
    ruedas: 4,
    acelerar: function (){
        console.log("Ruuuuun 🔥")
    }
}*/


