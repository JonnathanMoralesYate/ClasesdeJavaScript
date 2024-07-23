/* 3.	Leer un número entero y determinar cuántos dígitos tiene.*/

let num;
let cont=0;

num = parseInt(prompt("Digite Un numero"));

while(num>0){

    num = Math.trunc(num/10); //funcion math.trunc obtine la division entera
    cont++;

}
alert("El numero Tiene: "+cont+" Digitos");