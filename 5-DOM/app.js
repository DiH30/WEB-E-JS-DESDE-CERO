
//function saludame () {}

/*let saludame = () => {
 alert("Hola mundo")
}*/

//1. Captura de elemntos en variables
/*const parrafo = document.getElementById("txt")

//2. Creación de funciones

let modificar = () => {
    parrafo.innerText = "JavaScript DOM"
    parrafo.style.color = "tomato"
    parrafo.style.fontSize = "2rem"
    parrafo.style.textDecoration = "underline"
    parrafo.style.fontStyle = "italic"
}

//Captura de elementos por tag
const listaElements = document.getElementsByTagName("li")*/

const inputComment = document.getElementById("inputComentario")
const btnComment = document.getElementsByTagName("button")[0]
const boxComments = document.getElementsByClassName("comentarios")[0]

let comentar = (event) => {
    event.preventDefault() //Previene que se actualice el sitio al dar click en comentar
    console.log(inputComment.value)
    //console.log(event)
    boxComments.innerHTML += `<li>${inputComment.value}</li>`
    inputComment.value =""

}

btnComment.addEventListener("click",comentar)