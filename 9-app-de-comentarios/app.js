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


    inputComment.value = ""
}

//5. Crear función para imprimir comentario
    let printComment = (array) => {

        boxComments.innerHTML = "";

        array.forEach( item => {
        
            const {id, date, comment, user} = item;

        //console.log(item.comment, item.date)

        // Añadir cada comentario a la lista junto con un botón de eliminar

        boxComments.innerHTML += `
        <li id="comment-${id}">
           ${comment} 😊 User: ${user} 📆 Fecha: ${date}
           <button class="eliminar" data-id="${id}">Eliminar</button>
         </li>
        `;
      });
    }


// Eliminar comentario
boxComments.addEventListener("click", (event) => {
    if (event.target.classList.contains("eliminar")) {
        const button = event.target;
        const commentId = button.getAttribute("data-id"); // Obtener el id del comentario a eliminar

        // Filtrar el array de comentarios y eliminar el comentario con el id correspondiente
        const updatedComments = comments.filter(comment => comment.id != commentId);

        // Actualizar el array de comentarios con los comentarios filtrados
        comments.length = 0; // Limpiar el array original
        comments.push(...updatedComments);

        // Llamar a printComment para actualizar la vista
        printComment(comments);
    }
});

btnComment.addEventListener("click", comentar);