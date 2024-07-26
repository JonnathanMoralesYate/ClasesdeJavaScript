//cuando de click en boton de enviar cambie a enviado
  function envio() {
    let elemento = document.getElementById("cambio");
    elemento.textContent = "Enviado"; 
    }

// cambiar una parte especifica en html
    function manipularElemento() {
        let elemento = document.getElementById("elemento2");
        elemento.innerHTML = "<i>Texto Cambiado</i>";
    }

// Agrega un elemento 
   function nuevoElemento() {
        let elemento = document.getElementById("elemento3");
        let nuevoParrafo = document.createElement("p");
        nuevoParrafo.textContent = "Este es un nuevo parrafo";
        elemento.appendChild(nuevoParrafo);
   }

//Elimina un elemento
  function removerElemento(){
    let elemento = document.getElementById("elemento3");
    elemento.remove();
  }


// Eventos mause


document.getElementById("miBoton").addEventListener("click", function(){
    alert("!Has hecho un click");
});

document.getElementById("miParrafo").addEventListener("dblclick", function(){
    alert("!Has hecho doble click");
});



// Eventos teclado

document.getElementById("miInput").addEventListener("keydown", function(evento){
    alert("Tecla presionada: "+evento.key);
});

