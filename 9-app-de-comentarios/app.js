// Proyecto DOM en JavaScript

const inputComment = document.getElementById("inputComentario");
const btnComment = document.getElementsByTagName("button")[0];
const boxComments = document.getElementsByClassName("comentarios")[0];

const comments = []
let i = 0

let comentar = (event) => {
    event.preventDefault() //Previene que se actualice el sitio al dar click en comentar

    //1. Crear instancia de Date y guardar en variable
    const fecha = new Date();
    //2. Ejecutar método toLocaleString() para obtener formato de fecha actual
    const hoy = fecha.toLocaleString();

    //3. Creamos el objeto con la info del comentario 
    const comment = {
        id: i++,
        date: hoy,
        comment: inputComment.value,
        user: "Diana"
    }
    //4. Añadir objeto comment al array comments
    comments.push(comment)

    //6. Llamar a la función printComment y pasar array comments como argumento
    printComment(comments)


    imputComment.value = ""
}

//5. Crear función para imprimir comentario
    let printComment = (array) => {

        boxComments.innerHTML = ""

        array.forEach( item => {
        
            const {date, comment, user} = item

        //console.log(item.comment, item.date)

        boxComments.innerHTML += `
        <li>${comment} 😊 User: ${user} 📆 Fecha: ${date}</li>
        `
      });
    }

        
btnComment.addEventListener("click", comentar)