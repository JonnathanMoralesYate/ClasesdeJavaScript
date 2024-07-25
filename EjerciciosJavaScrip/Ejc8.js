/* 8.	Escribir un arreglo de frutas y mostrar: 
Mostrar el arreglo
Cuantas hay en el arreglo
Agregar una fruta al final.
Agregar una fruta al inicio.
Eliminar la última fruta.
Mostrar el índice de una de las frutas.*/


let i;
let cont=0;
let cont1=0;
let cont2=0;
let cont3=0;
let ter;
let frutas = [];
let NuevaFrutaFinal;
let NuevaFrutaInicio;

do{
    
    i = prompt("Ingrese el Nombre Fruta");
    frutas.push(i); // metodo push para ingresar datos el array
    ter = prompt("Digite fin para terminar");

}while(ter != "fin")


for(i of frutas){

    document.write(i+"<br>"); //Imprime en pantalla el array de fruta
    cont++;
    
}
document.write("El arreglo Tiene: "+cont+" Frutas"+"<br>"); // Muestra cuantas frutas hay en el arreglo

NuevaFrutaFinal = prompt("Ingrese nombre de una fruta para agrgar al final"); // Agrega un fruta al final del arreglo
frutas.push(NuevaFrutaFinal);



for(i of frutas){

    document.write(i+"<br>"); //Imprime en pantalla el array de fruta
    cont1++;
    
}
document.write("El arreglo con la nueva fruta al final Tiene: "+cont1+" Frutas"+"<br>"); 


NuevaFrutaInicio = prompt("Ingrese nombre de una fruta para agrgar al Inicio"); // Agrega un fruta al Inicio del arreglo
frutas.unshift(NuevaFrutaInicio);



for(i of frutas){

    document.write(i+"<br>"); //Imprime en pantalla el array de fruta
    cont2++;
    
}
document.write("El arreglo con la nueva fruta al Inicio Tiene: "+cont2+" Frutas"+"<br>");


prompt("Elimina la ultima fruta"); 
let borraultimaposiicion= frutas.pop(); // elimina el ultimo elemento del array

for(i of frutas){

    document.write(i+"<br>"); //Imprime en pantalla el array de fruta
    cont3++;
    
}
document.write("El arreglo con la nueva fruta al Inicio Tiene: "+cont3+" Frutas"+"<br>");

let lee = prompt("digite el nombre de la fruta a buscar");
let mostrar=frutas.indexOf(lee);

document.write("La fruta se encuentra en indice: "+mostrar);
















// Crear un Array
// let frutas = ["Manzana", "Banana"];
// console.log(frutas.length);

// Acceder a un elemento de Array mediante su índice
// let primero = frutas[0];
// // Manzana

// let ultimo = frutas[frutas.length - 1];
// // Banana

// Recorrer un Array
// frutas.forEach(function (elemento, indice, array) {
//   console.log(elemento, indice);
// });
// // Manzana 0
// // Banana 1

// Añadir un elemento al final de un Array
// let nuevaLongitud = frutas.push("Naranja"); // Añade "Naranja" al final
// // ["Manzana", "Banana", "Naranja"]

// Eliminar el último elemento de un Array
// let ultimo = frutas.pop(); // Elimina "Naranja" del final
// // ["Manzana", "Banana"]

// Añadir un elemento al principio de un Array
// let nuevaLongitud = frutas.unshift("Fresa"); // Añade "Fresa" al inicio
// // ["Fresa" ,"Manzana", "Banana"]

// Eliminar el primer elemento de un Array
// let primero = frutas.shift(); // Elimina "Fresa" del inicio
// // ["Manzana", "Banana"]

// Encontrar el índice de un elemento del Array
// frutas.push("Fresa");
// // ["Manzana", "Banana", "Fresa"]

// let pos = frutas.indexOf("Banana"); // (pos) es la posición para abreviar
// // 1