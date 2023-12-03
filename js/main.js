// Ejercicio 2:
document.addEventListener("DOMContentLoaded", function() {
    console.log("Contenido del DOM cargado");
    
// Ejercicio 3:
const msg = document.getElementById('origen').value = `<p>Este contenido <strong> está listo</strong><br>para ser editado y pasarlo abajo. </p>`;


// Ejercicio 4:
let e = document.getElementsByTagName("input");
let bo = document.getElementsByTagName("button");

let eNum = "";
function habilitar() {
    for (let index = 0; index < e.length; index++) {
        e[index].disabled = false;
    }
    return eNum;
}
habilitar();

function habilitar2() {
    for (let index = 0; index < bo.length; index++) {
        bo[index].disabled = false;
    }
    return eNum;
}
habilitar2();

// Ejercicio 5:
let one = document.getElementById("btn-reemplazar");
one.addEventListener("click", reemplazar); 
function reemplazar() {
    document.getElementById('destino').innerHTML =`${msg}`;
}


let allClass = document.getElementsByClassName("btn-agregar");
let classNum = "";
function forClass() {
    for (let i = 0; i < allClass.length; i++) {
        switch (i) {
            case 0:
                // console.log("1")
                addEventListener("click", Agregar); 
                function Agregar() {
                    document.getElementById('destino').innerHTML =`${msg}`;
                }
                break;
            case 1:
                // console.log("2")
                addEventListener("click", Agregar5veces); 
                function Agregar5veces() {
                    document.getElementById('destino').innerHTML =`${msg.repeat(5)}`;
                }
                break; 
            case 2:
                //  console.log("3")
                addEventListener("click", Agregar10veces); 
                function Agregar10veces() {
                   document.getElementById('destino').innerHTML =`${msg.repeat(10)}`;
                }
                break; 
                case 3:
                //  console.log("4")
                addEventListener("click", AgregarNveces); 
                function AgregarNveces() {
                   n = prompt("Cuantas veces agregar?");
                   document.getElementById('destino').innerHTML =`${msg.repeat(n)}`;
                }
                break; 
            default:
                break;
        }
    }
    return classNum;
}
forClass();







}
);