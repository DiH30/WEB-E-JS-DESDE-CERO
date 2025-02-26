

const addButton = document.querySelector("#addButton")

let e = false

function agregarCarrito () {
    
    console.log( addButton.classList )
    console.log( Array.from(addButton.classList) ) //convertir estructuras en arrays
    console.log([...addButton.classList]);

   /*addButton.classList.add("btn-green")
   addButton.classList.remove("btn-blue")
   addButton.textContent = "Agregado 😉"*/


   addButton.classList.toggle("bnt-green")


   if(e){
    addButton.textContent = "Add"
    e = false
   }else{
    addButton.textContent = "Agregado"
    e = true
   }

}

addButton.addEventListener("click, agregarCarrito")