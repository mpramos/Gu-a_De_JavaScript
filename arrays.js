//! Uso del constructor Array
const arrayContructor=Array();
console.log(arrayContructor)
//! Uso de los corchetes[]
const arrayCorchetes=[];
console.log(arrayCorchetes)
//! Creación de arrays con valores
var numeros=[0,1,2,3,4,5]//numbers
const frutas=['banana','manzana','piña','mango']// array de strings
console.log(numeros)
console.log(frutas)
const arr=[
    'Nombre',
    250,
    true,
    {pais:'Bolivia',ciudad:'Cochabamba'},
    {skills:['HTML','CSS','JS']}
]
console.log(arr)
//! MÉTODOS DE lOS ARRAYS
//? SPLIT
let js='JavaScript'
const ArrayJs=js.split('')
console.log(ArrayJs)
let compañiaString='Facebook,Google,Microsoft,Apple,Amazon'
const compañias=compañiaString.split(',')
console.log(compañias)
let texto='Hola a todos hoy estaremos viendo los metodos de los arrays'
var palabras=texto.split(' ')
console.log(palabras)
//! Acceso a elementos del array mediante índice

const frutitas=['banana','naranja','manzana','limón']
let primeraFrutita=frutitas[0]
console.log(primeraFrutita)
let segundaFrutita=frutitas[1]
console.log(segundaFrutita)
console.log('el tamaño del array de las frutitas es: '+ frutitas.length)

//? Modificación del elemento del array
const numbers=[1,2,3,4,5]
numbers[0]=10;
numbers[1]=20
console.log(numbers)

//!Metodos para manipular una matriz o array

//? Array(Constructor)
const arreglito=Array();
console.log(arreglito)
const arreglitoVacio=Array(8).fill(4);
console.log(arreglitoVacio)
//? concat
//? length
const primeraLista=[1,2,3]
const segundaLista=[4,5,6]
const tercerLista=primeraLista.concat(segundaLista)
console.log(tercerLista)
console.log(primeraLista.length)
console.log()
//IndexOf
const numeritos=[1,2,3,4,5,7,8,5]
console.log(numeritos.indexOf(5))
console.log(numeritos.indexOf(3))
console.log(numeritos.indexOf(9))
//? lastIndexOf
console.log('Last IndexOf',numeritos.lastIndexOf(0))

//Includes
const numeritos1=[1,2,3,4,5]
console.log('includes ',numeritos1.includes(0))
//? .isArray
const numerito2=[1,2,3,4,5]
console.log('IsArray? ',Array.isArray(numerito2) )
const numerito3=3
console.log('IsArray? ', Array.isArray(numerito3))
//? JOIN
const numerito4=[1,2,3,4,5]
console.log(numerito4.join())
const nombres=['Maria','Juana','Elias']
console.log(nombres.join(''))
console.log(nombres.join(' '))
console.log(nombres.join(', '))
console.log(nombres.join('#'))
//Slice
//? posición inicial y la posicion final, pero no incluye la posición final
const numeritos5=[2,3,4,4,5]
console.log(numeritos5.slice(3,5))
//Push
const arreglito1=['item1','item2','item3']
console.log('arreglito1 ',arreglito1)
arreglito1.push('new item')
console.log('arreglito1 ',arreglito1)
// pop
console.log('eliminando con pop ', arreglito1.pop())
console.log('usando el pop ',arreglito1)

// shift
const numeritos6=[2,4,4,5,5,6]
console.log(numeritos6)
numeritos6.shift()
console.log(numeritos6)
// unshift
numeritos6.unshift(9)
console.log(numeritos6)
// reverse
const numeritos7=[2,4,4,5,6,7]
numeritos7.reverse()
console.log(numeritos7)
// sort
numeritos7.sort()
console.log('sort ',numeritos7)
// METODOS DE LOS ARRAYS
//! map
[1,2,4]
[1,4,16]
var numeros=[1,2,4]
var dobles=numeros.map((numero)=>numero*numero)
console.log(numeros)
console.log(dobles)
// filter
var palabras=['espejo','limite','invierno','color']
var resultado=palabras.filter(function (palabrita) {
    if(palabrita.length>=6){
        return palabrita
    }
})
var palabras=['espejo','limite','invierno','color']
var resultado=palabras.filter((palabrita)=>palabrita.length>=6)
console.log(resultado);




