import { suma } from "../components/FuncionesTest";
import { filtrarNumeroMasAlto } from "../components/FuncionesTest";
import { primerLetraMayuscula } from "../components/FuncionesTest";
import { cualEsMayor } from "../components/FuncionesTest";

describe("FuncionesTest", () => {
    /* Funcion suma(numero1, numero2)  */
    test('Se espera que sume correctamente dos numeros = 4', () => { 
        let resp = suma( 2, 2 )
        expect( resp ).toBe( 4 )
        expect( typeof resp ).toBe( "number" )
    } )

    test('Si la funcion recibe algun dato que no sea numerico como parametro devolver mensaje de datos no validos', () => { 
        let resp = suma( 2, "hola" )
        expect(resp).toBe( "Error: datos no validos" )
    } )

    /* Funcion filtrarNumeroMasAlto(arrayNumeros) */
    test('Devuelve el numero mas alto del array', () => { 
        let resp = filtrarNumeroMasAlto( [2,4,5,7,9] )
        expect(resp).toBe( 9 )
        expect(typeof resp).toBe( 'number' )
    } )
    test('Si el parametro no es un numero devolver mensaje de datos no validos', () => { 
        let resp = filtrarNumeroMasAlto( [2,4,5,7,9,"hola"] )
        expect(resp).toBe( "Error: datos no validos" )
    } )

    /* Funcion primerLetraMayuscula(string) */
    test('Solo puede recibir string', () => { 
        let resp = primerLetraMayuscula( "Hola Soy Manco" )
        expect(resp).toBe( "OK" )
    } )
    test('Si el parametro no es un string devolver mensaje de datos no validos', () => { 
        let resp = primerLetraMayuscula( 2 )
        expect(resp).toBe( "Error: datos no validos" )
    } )

    /* Funcion cualEsMayor(numero1, numero2) */
    test('Solo puede recibir numeros', () => { 
        let resp = cualEsMayor( 9, 13 )
        expect(resp).toBe( 13 )
    } )
    test('Si el parametro no son 2 numeros devolver mensaje de datos no validos', () => { 
        let resp = cualEsMayor( "Hola" )
        expect(resp).toBe( "Error: datos no validos" )
    } )

} )