// Ejercicio 2:
document.addEventListener("DOMContentLoaded", function() {
    console.log("Contenido del DOM cargado");
    
// Ejercicio 3:
const msg = document.getElementById('origen').value = `<p>Este contenido <strong> está listo</strong><br>para ser editado y pasarlo abajo. </p>`;

// Ejercicio 4:
let e = document.getElementsByTagName("input");
let bo = document.getElementsByTagName("button")[0];

let click = document.getElementById('origen');

click.addEventListener ("click", function(a){
    habilitar(e,bo);
})


function habilitar(e, bo) {
    for (let i = 0; i < e.length; i++) {
        e[i].disabled =false
    }
    bo.disabled =false
}

// Ejercicio 5:
let one = document.getElementById("btn-reemplazar");
one.addEventListener("click", reemplazar); 
function reemplazar() {
    document.getElementById('destino').innerHTML =`${msg}`;
    document.getElementById("origen").value = "";
}

let arrayAgregar = document.getElementsByClassName("btn-agregar");

function forClass() {
    for (let i = 0; i < arrayAgregar.length; i++) {
        arrayAgregar[i].addEventListener("click", function(event) {
            switch (i) {
                case 0:
                    document.getElementById('destino').innerHTML = `${msg.repeat(1)}`;
                    break;
                case 1:
                    document.getElementById('destino').innerHTML = `${msg.repeat(5)}`;
                    break;
                case 2:
                    document.getElementById('destino').innerHTML = `${msg.repeat(10)}`;
                    break;
                case 3:
                    let n = prompt("¿Cuántas veces quieres agregar el texto?");
                    if (n !== null) {
                        document.getElementById('destino').innerHTML = `${msg.repeat(parseInt(n))}`;
                    }
                    break;
                default:
                    break;
            }
        });
    }
}
forClass();

// botonVaciar = document.querySelector(".btn-vaciar");

// botonVaciar.addEventListener("click", function()) {
//     let contenidoDiv = document.getElementById("destino");
//     contenidoDiv.innerHTML = "";
// }


















}
);
