import { cualEsMayor, filtrarNumeroMasAlto, primerLetraMayuscula, suma } from '../utilities/Funciones'
import { convertirYverificarMayusculas, devolverElDobleDelMasAlto, sumarleAlNumeroMasAlto } from '../utilities/FuncionesMockeadas'

jest.mock( '../utilities/Funciones.js')

describe("FuncionesTest", () => {
    // Funcion devolverElDobleDelMasAlto(Array)  
    test('Devuelve el doble del numero mas alto del array', () => {        
        filtrarNumeroMasAlto.mockReturnValueOnce( 9 )
        let resp = devolverElDobleDelMasAlto( [2,4,5,7,9] )
        expect(resp).toBe(18)
    } )
    test('Devuelve el doble del numero mas alto del array, en caso de error devolver mensaje Error: datos no validos', () => {        
        filtrarNumeroMasAlto.mockReturnValueOnce( "Error: datos no validos" )
        let resp = devolverElDobleDelMasAlto( [2,4,5,7,9,"hola"] )
        expect(resp).toBe( "Error: datos no validos" )
    } )
    test('No puede devolver otro dato que no sea un numero', () => {        
        filtrarNumeroMasAlto.mockReturnValueOnce( 9 )
        let resp = devolverElDobleDelMasAlto( [2,4,5,7,9] )
        expect( typeof resp ).toBe( "number" )
    } )
    test('No puede recibir otro dato que no sea un Array', () => {        
        //filtrarNumeroMasAlto.mockReturnValueOnce(  )
        let resp = devolverElDobleDelMasAlto( "Hola" )
        expect(resp).toBe( "Error: datos no validos" )
    } )

     // Funcion convertirYverificarMayusculas(texto)
     test('Devuelve un mensaje positivo si es que todas la palabras del texto empiezan en mayuscula', () => {
        primerLetraMayuscula.mockReturnValueOnce( "OK" )
        let resp = convertirYverificarMayusculas( "Hola Mundo" )
        expect(resp).toBe( "OK" )
    } )
    test('Solo puede recibir un texto', () => { 
        //primerLetraMayuscula.mockReturnValueOnce( "OK" )
        let resp = convertirYverificarMayusculas( 1234 )
        expect(resp).toBe( "Error: datos no validos" )
    } )
    test('Devuelve un mensaje de error si alguna palabra no empieza con mayuscula' , () => { 
        primerLetraMayuscula.mockReturnValueOnce( "Error: datos no validos" )
        let resp = convertirYverificarMayusculas( "Hola mundo" )
        expect(resp).toBe( "Error: datos no validos" )
    } )

//Funcion sumarleAlNumeroMasAlto(numero1, numero2, numero3)
    test('Devuelve la suma del mayor de los dos primeros numeros mas el tercer numero', () => { 
        cualEsMayor.mockReturnValueOnce( 3 )
        suma.mockReturnValueOnce( 7 )

        let resp = sumarleAlNumeroMasAlto( 2,3,4)
        expect( resp ).toBe( 7 )
        expect( typeof resp ).toBe( "number" )
    } )
    test('Todos los parametros deben ser numero sino devolver un mensaje de error (3er param)', () => { 
        cualEsMayor.mockReturnValueOnce( 3 )
        suma.mockReturnValueOnce( "Error: datos no validos" )

        let resp = sumarleAlNumeroMasAlto( 2,3, "A")
        expect(resp).toBe( "Error: datos no validos" )
    } )
    test('Todos los parametros deben ser numero sino devolver un mensaje de error (1er o 2do param)', () => { 
        cualEsMayor.mockReturnValueOnce( "Error: datos no validos" )
        suma.mockReturnValueOnce( "Error: datos no validos" )

        let resp = sumarleAlNumeroMasAlto( 2,"A", 4)
        expect(resp).toBe( "Error: datos no validos" )
    } )

}
)