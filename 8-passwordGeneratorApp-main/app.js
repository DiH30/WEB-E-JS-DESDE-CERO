
//1.
const charLength = document.querySelector("#charLength")
const lengthRange = document.querySelector("#lengthRange")

lengthRange.addEventListener("change", function(e){
    charLength.textContent = e.currentTarget.value
    

})

//2.

const passwordOutput = document.querySelector("#passwordOutput")
const generateButton = document.querySelector("#generateButton")
const coppyButton = document.querySelector("#coppyButton")

//5.

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const symbols = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
    '-', '_', '=', '+', '[', ']', '{', '}', ';', ':',
    "'", '"', ',', '<', '.', '>', '/', '?', '\\', '|', '`', '~'
  ];

//6. Crear un objeto "utils" para crear las funciones que generen los números aleatorios.

//Metes todas las funciones que tengan una tarea especifica, mas organización
const utils = {
    generateRandomBetween: function (min, max){
        return Math.floor( Math.random()* (max - min + 1) + min) //establecer el rango
    },
    //Arranca el método
    getCharsFromArray:function(array, num){
      let chars =""
      for (let i = 0; i < num; i++) {
        const randNumber = utils.generateRandomBetween(0, array.
            length-1)
        chars += array[randNumber]
      }//cada vuelta va a estar generando un valor diferente
      return chars
    }
}



//3. Evento y la función del botón generate

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
        tempPassword += utils.getCharsFromArray(symbols, utils.generateRandomBetween(3, passLength/3))
    }//+= tomar lo que ya tiene y empieza a tomar mas cosas
        console.log(tempPassword)
    passwordOutput.value = tempPassword
}

generateButton.addEventListener("click", generatePassword)