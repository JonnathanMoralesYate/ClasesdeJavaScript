/* 1. Leer un entero y mostrar todos los múltiplos de 5 comprendidos entre 1 y el número leído.*/

let num=0;

num = parseInt(prompt("Digite un Numero"));

for(let i=1;i<=num;i++){
    if(num % 10 == 5){
        alert("Multiplos: "+i);
    }
}
