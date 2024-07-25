/* 4. Leer un número entero y determinar a cuánto es igual a la suma de sus dígitos.*/
// toString() Convierte un numero entero en cadena
//parseInt() Converte un carácter a un número entero  
let num;
let sum=0;


num = prompt("Digite Un numero");
toString(num)

for(var i=0; i< num.length; i++){
    sum+= parseInt(+num[i]);
}
alert(+num+" La suma de sus digitos: "+sum)