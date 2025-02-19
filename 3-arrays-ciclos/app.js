
// Arrays con objetos que contienen el nombre, color y calorías de cada fruta 

let frutas = [
    {
        nombre: "manzana",
        color: "verde",
        calorías: 52 
    },
    {
        nombre: "fresa",
        color: "rojo",
        calorías: 32 
    },
    {
        nombre: "papaya",
        color: "naranja",
        calorías: 35 
    },
    {
        nombre: "manzana",
        color: "verde",
        calorías: 52
    },
    {
        nombre: "uva",
        color: "morado",
        calorías: 70 
    },
    
    {
        nombre: "plátano",
        color: "amarillo",
        calorías: 88 
    },

    {
        nombre: "mandarina",
        color: "naranja",
        calorías: 53 
    },
    {
        nombre: "plátano",
        color: "amarillo",
        calorías: 88 
    },
    {
        nombre: "fresa",
        color: "rojo",
        calorías: 32 
    },
    {
        nombre: "plátano",
        color: "amarillo",
        calorías: 88 
    }

];

let contadorFrutas = {};

// Ciclo para contar las frutas en el arreglo 

for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];

// Si la fruta ya existe en el objeto, se incrementa el contador 
if (contadorFrutas[fruta.nombre]) {
    contadorFrutas[fruta.nombre].cantidad++;
} else {
// Si la fruta no existe, se inicializa con la cantidad 1 y su información
contadorFrutas[fruta.nombre] = {
    cantidad: 1,
    color: fruta.color,
    calorías: fruta.calorías

};
}
      
}

for (let fruta in contadorFrutas){
console.log(`${fruta}:`);
console.log(` Cantidad: ${contadorFrutas[fruta].cantidad}`);
console.log(` Color: ${contadorFrutas[fruta].color}`);
console.log(` Calorías: ${contadorFrutas[fruta].calorías} kcal por 100 g`);
}
    
// Salida en consola:

/* manzana:
 Cantidad: 2
 Color: verde
 Calorías: 52 kcal por 100 g
fresa:
 Cantidad: 2
 Color: rojo
 Calorías: 32 kcal por 100 g
papaya:
 Cantidad: 1
 Color: naranja
 Calorías: 35 kcal por 100 g
uva:
 Cantidad: 1
 Color: morado
 Calorías: 70 kcal por 100 g
plátano:
 Cantidad: 3
 Color: amarillo
 Calorías: 88 kcal por 100 g
mandarina:
 Cantidad: 1
 Color: naranja
 Calorías: 53 kcal por 100 g
*/



// Ejemplos clase
// Una pregunta de cultura general

/* let capital = prompt("¿Cuál es la capital del Colombia?").toLowerCase()
 */
/* while( capital != "bogota" ){

    console.log("Respuesta equivocada 🙄")
    capital = prompt("¿Cuál es la capital del Colombia?")

} */

// Expresión regular  para eliminar Diacriticos    
//console.log( "bogotá".normalize('NFD').replace(/[\u0300-\u036f]/g,"") )

//Tabla de multiplicar del 7

/*let num =1 

while( num <= 10){
    console.log( `7x${num}=${7*num}`)
    console.log( "7x" + num + "=" + (7*num) )
    num ++ //Variable de control
}*/

//Ciclo for
//Ejemplo de la tabla del 9

/*for(let i = 0; i <=10; i++){
    console.log( `9x${i}=${9*i}` )
}*/


//Arrays

/* let colores = ["rojo","red","blue","azul","orange","naranja","Verde"]
let contador = 0;

//console.log(colores[colores.length-1])
for (let i = 0; i < colores.length; i++) {
    //const element = colores[i];
    console.log(`${i+1}. ${colores[i]}`) 
    contador++
}

console.log(contador) */

//Array de objetos de frutas

/*let frutas = [
    {
        nombre: "manzana",
        color: "verde"
    },
    {
        nombre: "fresa",
        color: "rojo"
    },
    {
        nombre: "mora",
        color: "verde"
    },
    {
        nombre: "limón",
        color: "verde"
    }
]

let msj = ""

for (let i = 0; i < frutas.length; i++) {
    const element = frutas[i];
    //console.log(`${i+1}. ${element.nombre}`)

    if( element.color === "verde" ){
        
        msj += element.nombre + "🐢 <br>"
    }
    
}

document.write("Las frutas verdes son: " + msj)*/


    


