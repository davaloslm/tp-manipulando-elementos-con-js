/* Micro desafío - Paso 1: */

var body = document.querySelector("body");
var main = document.querySelector("main");
var h2 = document.querySelector("h2");
var a = document.querySelector("a");
var p = document.querySelectorAll("p");

/* ///prompt/// */
var userName = window.prompt("Ingrese su nombre");

if(userName === null || userName === ""){
    userName = "Invitado"
}

/* ///main/// */
main.style.display = "block";
var fondo = window.confirm("¿Desea colocar un fondo de pantalla?");

/* ///body/// */
if(fondo === true){
    body.classList.add("fondo")
}

/* ///h2/// */
h2.innerText += userName;
h2.style.textTransform = "uppercase"

/* ///a/// */
a.style.color = "#E51B3E"

/* ///p/// */
for ( i = 0; i < p.length; i++) {
    if (i % 2 === 0) {
        p[i].classList.add("destacadoPar")
    } else {
        p[i].classList.add("destacadoImpar")
    }
    
}

