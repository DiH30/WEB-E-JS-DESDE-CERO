
//1.
const charLength = document.querySelector("#charLength")
const lengthRange = document.querySelector("#lengthRange")

lengthRange.addEventListener("change", function (e) {
    charLength.textContent = e.currentTarget.value
})

//2.

const passwordOutput = document.querySelector("#passwordOutput");
const generateButton = document.querySelector("#generateButton");
const copyButton = document.querySelector("#copyButton");
const message = document.querySelector("#message");

//5. Generar arrays para letters, numbers symbols

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const symbols = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
    '-', '_', '=', '+', '[', ']', '{', '}', ';', ':',
    "'", '"', ',', '<', '.', '>', '/', '?', '\\', '|', '`', '~'
  ];

//6. Crear un objeto "utils" para crear las funciones que generen los números aleatorios.

//Ingresas todas las funciones que tengan una tarea especifica, mas organización.

const utils = {
    generateRandomBetween: function (min, max){
        return Math.floor( Math.random()* (max - min + 1) + min) //establecer el rango
    },
    //Arranca el método
    getCharsFromArray:function(array, num){
      let chars = ""
      for (let i = 0; i < num; i++) {
        const randNumber = utils.generateRandomBetween(0, array.length-1)
        
        if( typeof array[randNumber] === "string"){
            randNumber % 2 === 0 ? chars += array[randNumber].toLowerCase() : chars
            += array[randNumber].toUpperCase()
        }else{
            chars += array[randNumber]
        }
      }//cada vuelta va a estar generando un valor diferente
      return chars
    }
}



//-3. Evento y la función del botón generate

function generatePassword (){

//4. Capturar elementos que condicionan la password
    const passLength = lengthRange.value
    const includeNumbers = document.querySelector("#numbers").checked
    const includeSymbols = document.querySelector("#symbols").checked

//7. Guardar la contraseña generada

let tempPassword =""

//Si el check number es true
if(includeNumbers){
    tempPassword += utils.getCharsFromArray(numbers, utils.generateRandomBetween(3, passLength/3))
}//+= tomar lo que ya tiene y empieza a tomar mas cosas

    if(includeSymbols){
        tempPassword += utils.getCharsFromArray(symbols, utils.generateRandomBetween(3, passLength/3))//numero de veces que se va a ejecutar
    }//+= tomar lo que ya tiene y empieza a tomar mas cosas

//8. Añadir letras a la temPassword
    tempPassword += utils.getCharsFromArray(letters, passLength - tempPassword.length)

//9. Para imprimir en pantalla una contraseña que alterne el orden de números, letras y símbolos.


    //console.log(tempPassword, passLength-tempPassword.length)
    
    console.log( tempPassword.split("").sort( () => Math.random - 0.5).join("") ) 

    passwordOutput.value = tempPassword.split("").sort( () => Math.random() - 0.5 ).join("")
    
    // .split() Separa los elementos en un array 
    //.sort() Analiza lo que hay dentro de un array, si el primer elemento es menor que el segundo da un valor negativo, recorre todod el array y compara.
    //.join() convierte a string
    
}


generateButton.addEventListener("click", generatePassword)


//10. Función para copiar la contraseña

function copiarPassword() {
    
    if( passwordOutput.value === "") return //Si es vacio se acaba la función 

    const psCopy = passwordOutput.value
    // Usamos el API del portapapeles para copiar el texto
    navigator.clipboard.writeText(psCopy)
    .then(() => {
            // Se muestra el mensaje en la página
            message.style.display = "block"; // Lo hacemos visible
            setTimeout(() => {
                message.style.display = "none"; // Lo ocultamos después de 2 segundos
            }, 2000); // El mensaje desaparece después de 2 segundos
    })
    .catch(err => {
        console.error("Error al copiar al portapapeles: ", err);
    });

}
// Añadimos el evento de clic al botón
copyButton.addEventListener("click",copiarPassword)

//[V4-D1P>1P
//+91)0,
//_7-"uFq5-N7s6-6"B
