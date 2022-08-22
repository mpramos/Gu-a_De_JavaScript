//! Desestructuraciones y la difusión
//!Desestructuracion de arrays
var number=[1,2,3] // numbers
// console.log(number)
var [numerito1, numerito3,numerito2 ]=number
console.log(numerito1,numerito3,numerito2)
var names=['Esteysi','Alan','Aldomar','Carmen','Juan Diego','Mayra']//strings
var [primeraPersona,SegundaPersona]=names
console.log(primeraPersona,SegundaPersona)
const ConstantesCientificas=[2.72,3.14,9.81]
let [e,pi,gravedad]=ConstantesCientificas
console.log(e,pi,gravedad)
var fullStack=[
    ['HTML','CSS','JAVASCRIPT','REACT'],
    ['NODE','EXPRESS','MONGODB']
]
var [frontend,backend]=fullStack
console.log(frontend,backend);
var number=[1,2,3]
var [numero1, ,numero3]=number
console.log(numero1,numero3)
var names=['Esteysi','Alan','Aldomar','Carmen','Juan Diego','Mayra']//strings
var [,segundaPersona,TerceraPersona,CuartaPersona,QuintaPersona,sextaPersona]=names
console.log(segundaPersona,TerceraPersona,CuartaPersona,QuintaPersona,sextaPersona)
// spread(...)
var numeros=[1,2,3,4,5,6,7,8,9,10]
var [num1,num2,num3, ...rest]=numeros
console.log(num1,num2,num3);
console.log(rest)
//! Desestructuracion durante la diteración
var paises=[['Bolivia','La Paz'],['Argentina','Buenos Aires']]
for(var[pais,ciudad]of paises){
console.log(pais,ciudad)
}
var fullStack=[
    ['HTML','CSS','JAVASCRIPT','REACT'],
    ['NODE','EXPRESS','MONGODB']
]
for(var [primero,segundo,tercero]of fullStack){
    console.log(primero,segundo,tercero)
}
//!Desestructuracion de objetos
var rectangulo={
    ancho:20,
    alto:10,
    area:20
}
var {ancho,alto}=rectangulo
console.log(ancho,alto)
//! Cambio de nombre durante la desestructuracion
var rectangulo={
    ancho:20,
    alto:10,
    area:20
}
var {ancho: w,alto:h,area:a}=rectangulo
console.log(w,h,a);
//! Operador de spread para copiar arreglos
var pares=[0,2,4,6,8,10]
var NumerosPares=[...pares]
console.log(NumerosPares)
var impares=[1,3,5,7,9]
var NumerosImpares=[...impares]
console.log(NumerosImpares);
var TodosLosNumeros=[...NumerosPares,...NumerosImpares]
console.log(TodosLosNumeros);

var frontend=['HTML','CSS','JAVASCRIPT','REACT']
var backend=['NODE','EXPRESS','MONGODB']
var fullStack=[...frontend,...backend]
console.log(fullStack );
//!Operador de propagacion
var user={
    name:'Carlos',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
}
var copiedUser={...user}
console.log(copiedUser);
//!Modificar o cambiar el objeto mientras se copia
var user={
    name:'Carlos',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
}
var copiedUser={...user,title:'instructor'}
console.log(copiedUser);
//! Operador de propagacion con funcion de flecha
const SumaTodosLosNumeros=(...args)=>{
    console.log(args);
}
SumaTodosLosNumeros(1,2,3,4)