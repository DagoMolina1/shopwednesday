/*--------------------------------------*/
//Controlando etiquetas (23 - 02 - 2022)
//1. crear una variable para guardar una etiqueta
let etiquetaTitulo = document.getElementById("titulo")
console.log(etiquetaTitulo)

//2. como modificar el texto de una etiqueta
etiquetaTitulo.textContent="Rojos vos no existis"

let etiquetaMenu = document.getElementById("menu")
console.log(etiquetaMenu)
etiquetaMenu.textContent="menu"

let etiquetaFotomal = document.getElementById("fotomal")
etiquetaFotomal.src="img/DVNvD9LW0AAkTU8.jpg"

//Cambiar el estilo de la etiqueta
etiquetaTitulo.classList.add("text-center")