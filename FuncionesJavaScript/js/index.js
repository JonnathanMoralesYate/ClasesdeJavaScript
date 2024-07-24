
function deClare(){
    alert("Hola Declarado")
}

function retorno(num1, num2){
    let resta = num1 - num2;
    return (resta);
}

function mostrar(){
    let num1 = prompt("Digite el primer numero");
    let num2 = prompt("Digite el segundo numero");

   let mostrar = retorno(num1,num2);
   alert("Resta = "+mostrar)
 }

 const saludar = () => {
    alert("Hola, Mundo!");
 }

 const sumar = (num1, num2) => {
    let suma = num1 + num2;
    return (suma);
 }

 const mostrarSum = () => {
    let num1 = parseInt(prompt("Digite el Primer Numero"));
    let num2 = parseInt(prompt("Digite el Segundo Numero"));

    let mostrarSum = sumar (num1, num2);
    alert("suma = "+mostrarSum)
 }

 function cambio() {
    let elemento = document.getElementById("miElemento"); // miElemento nombre de id de la etiqueta

        let clase1 = elemento.classList;
        console.log("Hola"+ clase1);

        if(clase1 == "oldClase"){
            elemento.classList.add("newClase");
        }else{
            elemento.classList.remove("newClase");
            elemento.classList.add("oldClase");
        }
    
 }

 function estilo() {
     let elementos = document.getElementsByClassName("miClase1"); //miClase1 nombre de clase de la etiqueta
     for(var i = 0; i < elementos.length; i++){
        elementos[i].style.fontSize = "35px"; //style para cambiar propiedades de css
     }
 }

 function cambiarTexto() {
    const parrafos = document.getElementsByTagName("p"); // p nombre de etiqueta 
    for(var i = 0; i < parrafos.length; i++){
        parrafos[i].textContent = "Texto Cambio"; //textContent para cambiar contenido
    }
 }