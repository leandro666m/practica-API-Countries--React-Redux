
/* 
1-Tests con funciones mockeadas:
tests:
*Funcion devolverElDobleDelMasAlto(Array)  -  Depende de la función "filtrarNumeroMasAlto"
test1  -Devuelve el doble del numero mas alto del array
test2 -No puede devolver otro dato que no sea un numero
test3 -No puede recibir otro dato que no sea un Array

*Función convertirYverificarMayusculas(Texto) -  Depende de la función "primerLetraMayuscula"
test1  -Devuelve un mensaje positivo si es que todas la palabras del texto empiezan en mayuscula
test2 -Solo puede recibir un texto
test3 -Devuelve un mensaje de error si alguna palabra no empieza con mayuscula 

*Funcion sumarleAlNumeroMasAlto(numero1, numero2, numero3) - Depende de las funciones "cualEsMayor" y "suma"
test1 -Devuelve la suma del mayor de los dos primeros numeros mas el tercer numero
test2 -Todos los parametros deben ser numero sino devolver un mensaje de error  */

import { cualEsMayor, filtrarNumeroMasAlto, primerLetraMayuscula, suma } from "./Funciones";

export function  devolverElDobleDelMasAlto(arrayNumeros){
    let dataValid=true
    let devolucion

    if ( !Array.isArray(arrayNumeros) ) {
      dataValid = false
    }else{
        devolucion = filtrarNumeroMasAlto(arrayNumeros)
        if( typeof(devolucion) !== 'number'){
            dataValid = false
        }
    }

    if(dataValid){
        let resultado = devolucion * 2
        return resultado
    }else{
        return "Error: datos no validos"
    }
}
  
export function convertirYverificarMayusculas(texto){
    let dataValid=true 

    if( typeof(texto) != 'string'){
        dataValid = false 
      }else if( primerLetraMayuscula( texto ) !== 'OK'){
        dataValid = false
    }

    if(dataValid){
        return "OK"
    }else{
        return "Error: datos no validos"
    }

}

export function sumarleAlNumeroMasAlto(numero1, numero2, numero3) {
    let dataValid = true

    if (typeof(numero1) !== 'number' || typeof(numero2) !== 'number'|| typeof(numero3) !== 'number'){
        dataValid = false
    }
    
    if(dataValid){
        return suma( cualEsMayor(numero1, numero2) , numero3)
    }else{
        return "Error: datos no validos"
    }

}