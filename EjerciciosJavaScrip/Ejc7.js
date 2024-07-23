/* 7. Se define la serie de Fibonacci como la serie que comienza con los dígitos 1 y 0 y va sumando progresivamente los dos últimos elementos de la serie, así:
0 1 1 2 3 5 8 13 21 34....... */

let a=0;
let b=1;
let c;
let num;

num = parseInt(prompt("Digite Un Numero"))
for(let i=0; i<=num; i++){

document.write(a+"<br>");

c=a+b;
a=b;
b=c;

}




