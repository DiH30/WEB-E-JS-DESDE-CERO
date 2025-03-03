
//1.
const charLength = document.querySelector("#charLength")
const lengthRange = document.querySelector("#lengthRange")

lengthRange.addEventListener("change", function (e) {
    charLength.textContent = e.currentTarget.value;
});

//2.

const passwordOutput = document.querySelector("#passwordOutput");
const generateButton = document.querySelector("#generateButton");
const copyButton = document.querySelector("#copyButton");
const message = document.querySelector("#message");

//5. Generar arrays para letters, numbers, symbols

const lettersLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const lettersUppercase = lettersLowercase.map(letter => letter.toUpperCase()); // Generar las letras mayúsculas
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
    getCharsFromArray: function (array, num){
      let chars = ""
      for (let i = 0; i < num; i++) {
        const randNumber = utils.generateRandomBetween(0, array.length - 1);
        chars += array[randNumber];
        
    }
    return chars;
}
};  

//3. Evento y la función del botón generate

function generatePassword (){

//4. Capturar elementos que condicionan la password
    const passLength = lengthRange.value;  
    const includeUppercaseLetters = document.querySelector("#uppercase").checked; 
    const includeLowercaseLetters = document.querySelector("#lowercase").checked; // Agregado para minúsculas
    const includeNumbers = document.querySelector("#numbers").checked
    const includeSymbols = document.querySelector("#symbols").checked
   
//7. Guardar la contraseña generada

let tempPassword =""

// Calcular cuántos caracteres de cada tipo se necesitan
let selectedTypes = 0;

if (includeNumbers) selectedTypes++;
if (includeSymbols) selectedTypes++;
if (includeUppercaseLetters) selectedTypes++;
if (includeLowercaseLetters) selectedTypes++;
// Asegurarse de no exceder la longitud total de la contraseña
const charsPerType = Math.floor(passLength / selectedTypes); // Dividir la longitud entre los tipos seleccionados

// Verificar que al menos un carácter de cada tipo sea añadido si está seleccionado
if (includeNumbers) {
    tempPassword += utils.getCharsFromArray(numbers, charsPerType); 
}
if (includeSymbols) {
    tempPassword += utils.getCharsFromArray(symbols, charsPerType); 
}
if (includeUppercaseLetters) {
    tempPassword += utils.getCharsFromArray(lettersUppercase, charsPerType); 
}
if (includeLowercaseLetters) {
    tempPassword += utils.getCharsFromArray(lettersLowercase, charsPerType); 
}

// Si la longitud de la contraseña aún no es la deseada, añadir más caracteres aleatorios
let remainingLength = passLength - tempPassword.length;

// Añadir caracteres adicionales aleatorios si es necesario
if (remainingLength > 0) {
    let possibleChars = [];

    if (includeLowercaseLetters) possibleChars = possibleChars.concat(lettersLowercase);
    if (includeUppercaseLetters) possibleChars = possibleChars.concat(lettersUppercase);
    if (includeNumbers) possibleChars = possibleChars.concat(numbers);
    if (includeSymbols) possibleChars = possibleChars.concat(symbols);

    tempPassword += utils.getCharsFromArray(possibleChars, remainingLength);
}

//8. Mezclar el resultado aleatoriamente
    
    tempPassword = tempPassword.split("").sort(() => Math.random() - 0.5 ).join("");

    console.log( tempPassword.split("").sort( () => Math.random - 0.5).join("") ) 
    
    //console.log(tempPassword, passLength-tempPassword.length)

//9. Mostrar la contraseña generada 
    
    passwordOutput.value = tempPassword;

    // .split() Separa los elementos en un array 
    //.sort() Analiza lo que hay dentro de un array, si el primer elemento es menor que el segundo da un valor negativo, recorre todod el array y compara.
    //.join() convierte a string
    
}


generateButton.addEventListener("click", generatePassword);


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

//Character Length 0
//
//Character Length 2
// 4i 
//Character Length 11
// L/O45\ve;[k 
//Character Length 20
// 4Bs7Tm22cJ^rLOe?3!%/
