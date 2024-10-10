
//Ejercicio No 1
let num = 8;

function parImpar(numero) {
  if(numero % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }
}

let resultado = parImpar(num);
console.log("Ejercicio 1 : El número "+num+" es "+resultado);


//Ejercicio No 2

function comparar(a,b) {
  if(a>b){
      console.log("Ejercicio 2 :  "+a+" es mayor que "+b)
  }
  if(a<b){
      console.log("Ejercicio 2 :  "+a+" es menor que "+b )
  }
  if(a===b)  {
      console.log("Ejercicio 2 : ambos valores son iguales")
  }
  return 
}
let comparado = comparar(5, 5);


//Ejercicio No 3


function multiploCinco( resultado){
  if (numero % 5){
      console.log("Ejercicio 3 : "+numero+" no es multiplo de 5")
  }
  else {
      console.log("Ejercicio 3 : "+numero+"  es multiplo de 5" )

  }
}
let numero = (36)
let multiplo = multiploCinco(numero);

//Ejercicio No 4

let i = 0;
let numE4 = (16)
console.log("Ejercicio 4 : ")
function contador(resultado){
    while (i < numE4) {
     console.log(i++);
    
    }
}

let resultante = contador(i)
console.log(numE4) 

//Ejercicio No 5

console.log("Ejercicio 5 :")

function repetirPalabra(palabra, veces){
  for (let i = 0; i < veces; i++) {
      console.log(palabra);
  }
  
}

repetirPalabra("hoy",8);

//Ejercicio No 6

console.log("Ejercicio 6 :")
const a = ["Estoy", "muy", "bien",242]

function ejercicio6(array){
    for (let i = 0; i< a.length; i++){
        
            console.log(a[i])
    }
}
ejercicio6(a)

//Ejercicio No 7 

console.log("Ejercicio 7 :")
const b = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55,]

function ejercicio7(saltarN){
    for (let i = 0; i< b.length; i++){
        if(i !== 4){
            console.log(b[i])
        }
    }
}
ejercicio7(b)

//Ejercicio No 8 

console.log("Ejercicio 8 :")
let n =(8) 
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function ejercicio8(n, numeros){
    for(let i = 0 ; i < numeros.length; i++){
        console.log(numeros[i]*n)
    }

}
ejercicio8(n, numeros);


