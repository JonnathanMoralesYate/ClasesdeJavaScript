/* 1. Leer un entero y mostrar todos los múltiplos de 5 comprendidos entre 1 y el número leído.*/

let num=0;

num = parseInt(prompt("Digite un Numero"));

for(let i=0; i<=num; i++){
    if(i == 0){
        alert("Multiplos de Cinco : "+1+" del numero: "+num)
    }else if(num % 5 == 0){
        alert("Multiplos de Cinco : "+i+" del numero: "+num);
        
    }
}