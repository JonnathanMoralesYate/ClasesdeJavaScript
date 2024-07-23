/* 2. Leer un número entero y determinar si es primo.*/

let num;
let i=1;
let cont=0;

num = parseInt(prompt("Ingrese Un Numero"));

while(i<=num){
    if(num % i == 0){
        cont++;
    }
    i++;
}
if(cont == 2){
    alert("El Numero: "+num+ " es Primo");
}else{
    alert("El Numero: "+num+ " No es Primo");
}