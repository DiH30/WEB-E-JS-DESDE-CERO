// Proyecto Intro al DOM en JavaScript

//1. Captura de elemntos en variables
/* const parrafo = document.getElementById("txt") */

//2. Creación de funciones

/* let modificar = () => {
    parrafo.innerText = "JavaScript DOM"
    parrafo.style.color = "tomato"
    parrafo.style.fontSize = "2rem"
    parrafo.style.textDecoration = "underline"
    parrafo.style.fontStyle = "italic"
} */

//Captura de elementos por tag
/* const listaElements = document.getElementsByTagName("li")*/

//const listaElements = document.getElementsByClassName("list")

const inputComment = document.getElementById("inputComentario");
const btnComment = document.getElementsByTagName("button")[0];
const boxComments = document.getElementsByClassName("comentarios")[0];



let comentar = (event) => {
    event.preventDefault(); //Previene que se atualice el sitio al dar click en comentar

if (inputComment.value.trim() !== "") {
    const fecha = new Date().toLocaleString();
    const comentario = `
    <li>
    ${inputComment.value}
    <span> (${fecha})</span>
    <button class="eliminar">Eliminar</button>
    </li>
    `;

    boxComments.innerHTML += comentario;
    inputComment.value = "";   
}      
};

btnComment.addEventListener("click",comentar);

// Agregar evento para eliminar comentarios

boxComments.addEventListener("click", (event) => {
    if (event.target.classList.contains("eliminar")){
        const li = event.target.parentNode;
        li.remove();
    }
});



//function saludame () {}

/*let saludame = ()c => {
 alert("Hola mundo")
}*/
