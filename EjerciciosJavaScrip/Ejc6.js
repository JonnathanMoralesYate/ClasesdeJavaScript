/* 6. Leer números hasta que digiten 0 y determinar a cuanto es igual el promedio entero de los números primos leídos.*/

let num;
let j=1;
let k=0;
let cont=0;
let suma=0;
let prom=0;



do{

    num = parseInt(prompt("Ingrese Un Numero o Cero para salir"));

//if(num>0){

    var i=1;
    while(i<=num){

    if(num % i == 0){
        cont++;
        //alert(+cont)
    }
    i++;
    }

    if(cont == 2){
        //alert("El Numero: "+num+ " es Primo");  
        suma=suma + num;
        alert("suma:"+suma);
        k++;
        alert("k:"+k)
    }
cont=0;
//}
}while(num !== 0)

prom=suma/k;
alert("El promedio de los Numeros Primos es: "+prom)
