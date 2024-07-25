/* 5. Leer un número entero y determinar cuál es el mayor de sus dígitos.*/
// toString() Convierte un numero entero en cadena
//parseInt() Converte un carácter a un número entero

let num;
let dig=0;
let may=0;


num = prompt("Digite Un numero");
toString(num)

for(var i=0; i< num.length; i++){
    dig= parseInt(+num[i]);
    if(dig > may){ //Comparamos cada dígito con el valor actual de mayor y actualizamos mayor si el dígito actual es más grande.
        may=dig;
    }
}
alert(+num+" El digito mayor es: "+may)