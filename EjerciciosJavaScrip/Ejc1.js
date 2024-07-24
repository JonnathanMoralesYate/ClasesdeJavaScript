/* 1. Leer un entero y mostrar todos los múltiplos de 5 comprendidos entre 1 y el número leído.*/

let num=0;

num=prompt("Digite Un  Numero:");

if(num>4){
   
    for(var i=1;i<=num;i++){
        
        if(i % 5 === 0){
            alert("Multiplos: "+i);
        }
    }
}else{
    alert("El Numero Ingresado No tiene Multiplos de 5 ")
}
