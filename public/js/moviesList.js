/* "Micro desafío - Paso 2" */

var body = document.querySelector("body");
var h1 = document.querySelector("h1");

var modoOscuro = window.confirm("¿Desea modo oscuro?");

/* ///body/// */
if(modoOscuro === true){
    body.style.backgroundColor = "#333333"
    body.classList.add("fondoMoviesList")
}

/* ///h1/// */
h1.innerText += "LISTADO DE PELÍCULAS";
h1.style.color = "white";
h1.style.backgroundColor = "teal";
h1.style.padding = "20px";

