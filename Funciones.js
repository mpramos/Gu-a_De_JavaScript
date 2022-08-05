//!declaración
//!expresión
//!funciones anonimas
//! funcion de flecha

//! Declaracion de funciones
// function NombreDeLaFuncion() {
//     // bloque de codigo
// }
// NombreDeLaFuncion()
//! Función sin parámetro y retorno
function cuadrado() {
    let num=2;
    let sq= num*num;
    console.log(sq)
}
cuadrado()
//! Funcion valor devuelto
function ImprimirElNombreCompleto() {
    let primerNombre="Maria"
    let segundNombre="Paola"
    let espacio=' '
    let imprimirTodoElNombre= primerNombre +espacio+ segundNombre
    return imprimirTodoElNombre
}
console.log(ImprimirElNombreCompleto())
//!Funcion con parametro
function areaDeUnCirculo(r) {
    let area=Math.PI*r*r
    return area
}
console.log(areaDeUnCirculo(10))
//!Funcion con dos parámetros
function sumaDeDosNumeros(numero1,numero2) {
    let sum=numero1+numero2;
    return sum
}
console.log(sumaDeDosNumeros(10,20))
//!Funcion con muchos parámetros
function SumaDeValoresArray(arr) {
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
        sum=sum + arr[i]
    }
    return sum;
}
const numeros=[1,2,3,4,5]
console.log(SumaDeValoresArray(numeros))
//!Funcion con un numero ilimitado de parámetros
function sumaTodosLosNumeros() {
    console.log(arguments)
}
sumaTodosLosNumeros(1,2,3,4,5,6)

function sumaTodoslosNumeros() {
    let sum=0;
    for (let i = 0; i < arguments.length; i++) {
        sum=arguments[i]+ sum
    }
    return sum
}
console.log(sumaTodoslosNumeros(1,2,3,4))
//! Funcion de flecha
const sumaTodoslosnumeros=(...args)=>{
    console.log(args)
}
sumaTodoslosnumeros(1,2,3,4)
const sumaTodosLosNUMEROS=(...args)=>{
    let sum=0;
    for(const element of args){
          sum=sum+element
    }
    return sum
}
console.log(sumaTodosLosNUMEROS(1,2,3,4))//10
//! Función anónima
const FuncionAninima=function() {
    console.log('Soy una funcion anonima')
}
FuncionAninima()

const cuadrado=function(n) {
    return n*n
}
console.log(cuadrado(2))
//! Funciones de invocación automatica
(function(n) {
    console.log(n*n)
})(4)
let cuadradoDeUnNumero=(function(n) {
    return n*n
})(10)
console.log(cuadradoDeUnNumero)
//! Funcion de flecha
function c(n) {
    return n*n
}
console.log(c(2))
const cuadradito=n=>n*n
console.log(cuadradito(4))
//!Funcion con parámetros predeterminados
function MostrarNombre(PrimerNombre='Jose',SegundNombre='Maria') {
    // let mensaje= nombre + ' Hola como estás?'
    let mensaje= `Mi primer Nombres es : ${PrimerNombre} y mi segundo Nombre es ${SegundNombre}`
    return mensaje
}
console.log(MostrarNombre())
console.log(MostrarNombre('Andrea'))
//* TODO apply,call, bind 

