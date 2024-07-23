/* 1. Leer un entero y mostrar si es par o impar.*/

let num=0;

num = parseInt(prompt("Ingrese un Numero"));

if(num % 2 == 0){
    alert("El Numero: "+num+" es Par");
}else{
    alert("El Numero: "+num+" es Impar");
}