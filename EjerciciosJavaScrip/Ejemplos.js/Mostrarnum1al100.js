/* 1. Mostrar los numeros del 1 al 100.*/

let i=1;

while(i<=100){ //ciclo while(condicion), el ciclo se repite hasta que se cumple la condicion 
    alert(i);
    /*document.write(i);*/ // imprime en una sola linea
    /*document.write(i+"<br>");*/ // el <br> es salto de linea
    i++;
}



/* El caracter \n, es el usado en javascript, para realizar el sato de línea, mientras que el <br>, es el usado en HTML

Al querer hacer un document.write, lo que estas haciendo es escribir HTML, para lo cual, debes usar "<br>".

Otra cosa sería que quisieras usar un alert, para lo cual si deberías usar el \n.

Solo debes pensar en donde vas a representar el texto, para saber que caracter usar */