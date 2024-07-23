/* 6. Leer números hasta que digiten 0 y determinar a cuanto es igual el promedio entero de los números primos leídos.*/

let num;
let i=1;
let j=1;
let k=0;
let cont=0;
let suma=0;
let prom=0;



do{

    num = parseInt(prompt("Ingrese Un Numero"));
        

}while(num !== 0)

prom=suma/k;
alert("El promedio de los Numeros Primos es: "+prom)
