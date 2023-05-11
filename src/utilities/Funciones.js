/* Crear Funciones (En en proyecto individual) y sus test
 tests:
*Funcion suma(numero1, numero2) 
  test1   -Suma correcta de dos numeros
  test2  -Si la funcion recibe algun dato que no sea numerico como parametro devolver mensaje de datos no validos

*Funcion filtrarNumeroMasAlto(arrayNumeros)
  test1   -Devuelve el numero mas alto del array
  test2  -El array tiene solo numeros

*Funcion primerLetraMayuscula(string)
  test1   -Solo puede recibir string
  test2  -Si recibe alguna dato que no sea string devolver mensaje de datos no validos
  test3  -Cada palabra del texto del string debe empezar con mayuscula ej : "Hola Soy Un Texto"

*Funcion cualEsMayor(numero1, numero2)
  test1   -Solo puede recibir numeros
  test2  -Si la funcion recibe algun dato que no sea numerico como parametro devolver mensaje de datos no validos
  test3  -Devuelve el numero mas alto entre numero 1 y 2  */

export function suma(numero1, numero2){
    if (typeof(numero1) !== 'number' || typeof(numero2) !== 'number'){
        return "Error: datos no validos"
    }else{
        return (numero1 + numero2)
    }
  }
export function filtrarNumeroMasAlto(arrayNumeros) {
    let dataValid=true
    if ( !Array.isArray(arrayNumeros)) {
      dataValid = false
    }
  
    if (arrayNumeros.length === 0) {
      dataValid = false
    }
  
 arrayNumeros.forEach( i => {
        if( typeof( i ) !== "number" ) {
          dataValid=false
          return ;
        }
    });
      
   if(dataValid) {
            let numeroMasAlto = arrayNumeros[0];
            arrayNumeros.forEach(element => {
                if(element > numeroMasAlto) {numeroMasAlto = element}
            });
        return numeroMasAlto;
    } else{
      return "Error: datos no validos"
    }
}
export function primerLetraMayuscula(cadena){
  let dataValid=true
  
  if(typeof(cadena) != 'string'){
    return "Error: datos no validos" 
  }
  
  let arraypalabra = cadena.split(' ')
  for(let i=0; i<arraypalabra.length;i++){
    let letra =  arraypalabra[i][0];
    if( letra !== letra.toUpperCase() ) {
        dataValid=false
    }
  }
  
return dataValid ? "OK" :  "Error: datos no validos"
}
export function cualEsMayor(numero1, numero2){
  if( typeof(numero1) != 'number' || typeof(numero2) != 'number' ){
    return "Error: datos no validos"
  }
  return numero1>numero2 ? numero1 : numero2
}
