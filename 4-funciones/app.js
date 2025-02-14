

console.table(["apples", "onranges", "bananas"])


//Declarar función

let result = suma(4,2)

console.log( suma(4,2) )

function suma ( n1, n2 ){
    let total = n1 + n2;
    return `El total de la suma es: ${total}`
}

//console.log( suma(4,2) ) // 4 toma el lugar de n1 y 2 toma el lugar de n2

/*let result = suma(4,2)

console.log( suma(4,2) )*/

//hoisting
//scope

let cajaDeFrutas = []

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
mostrarFrutas(cajaDeFrutas)

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


