/* 4. Leer un número entero y determinar a cuánto es igual a la suma de sus dígitos.*/

let num;
let cont=0;

num = parseInt(prompt("Digite Un numero"));

while(num>0){

    num = Math.trunc(num/10); //funcion math.trunc obtine la division entera
    cont++;
    alert(+Math.trunc(num/10))

}
alert("El numero Tiene: "+cont+" Digitos");