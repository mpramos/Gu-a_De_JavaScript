//! Multi-line sin Template Literals
//*El salto de línea es con \n, en este caso es una línea simple que no se puede escalar a simple vista, si la línea se
//* hace más grande no se puede saltar renglón para los saltos de línea.
const saludo1="Hola, \n mi nombre es Maria";
console.log(saludo1)
//! Multi-line con template literals
//*Con los caracteres `` se puede ingresar un texto y cada salto de línea es un enter.
const saludo2=`Hola,
mi nombre es Maria`
console.log('Usando literals :',saludo2)
//! Expresiones sin Template Literals
//* le quita legibilidad
const nombre = 'Maria'
const saludo3='Hola, \n ' + 'mi nombre es ' + nombre
console.log('saludo3 '+ saludo3);
//! Expresiones con Template Literals
//*Podemos mezclar un dato dinámico o tambien dicho una expresión dentro
//* de una template literals dentro de un simbolo de dólar
const nombre1='Maria'
const saludo4=`Hola,
Mi nombre es ${nombre1}`
console.log('saludo4', saludo4);
//! HTML Template
//* Es un html template se pueden alterar variables como en un template literals
//* dentro de los tags, esto es muy usado en react
function userTemplate(user) {
    return `
    <article class="user">
        <img src="${user.avatar}" alt="${user.name}">
        <p>${user.username}</p>
    </article>
    `
}
//! Tagged Template
//* El llamado de la función se pasa como template literal
function UserTemplate(strings, value) {
    return `<p>${strings[0]}<strong>${value}</strong></p>`
}
UserTemplate`username:${'Maria'}`
//!Template literals + expresiones ft React
//* Una utilidad de template literals es implementarlo en clases 
//* dentro de tags para react
function SubmitButton({
    processing,error,children,disabled
}) {
    return (
        <Button
            fullWidth
            fontWeight={500}
            /*👉*/ className={`SubmitButton ${error ? 'SubmitButton--error':''}`}
            type="submit"
            disabled={processing || disabled}
        >
            {processing ? 'Procesando Pago...': children}
        </Button>
    )
} 
//! Tagged Template ft React Styled Components
//* En el mundo real, al implementar la librería styled
//* components sobre react se asignan los estilos mediante tagged template.
import React from 'react'
import styled from 'styled-components'
/*👉*/const NavigationSocialStyled=styled.div`
display:flex;
padding:0 1em;
justify-content:space-between;
margin:100px 0 20px;
a{
    display:inline-flex;
    align-items:center;
}
svg{
    vertical-align:middle
}
@media screen and (min-width:1024px){
    display:none;
}
`
//! ********************************************************
//! EJEMPLOS


const Nombre = 'Rafael'
console.log(`mi Nombre es ${Nombre}`)
console.log(`mi edad es ${32}`)
console.log(`Este es el ${'Curso de javascript para react'}`)
console.log(`Mi Nombre es ${x = 'Maria'}`)
console.log(`Mi Nombre es ${(function name() {return 'Mari'})()}`)
console.log(`Mi Nombre es ${(function () {return 'Rafita'})()}`)
console.log(`Mi Nombre es ${( () => {return 'Maria Soriano'})()}`)
//? Tenemos un truco para los casos con if
//? Los ifs son una estructura de control es por eso que debemos 
//? trabajar con expresiones
//*console.log(`Mi Nombre es ${if (true) {console.log('Mari')}}`)
//? 👇 Aplicando un ternario
console.log(`Mi Nombre es ${true && 'Maria'}`)
console.log(`Mi Nombre es ${true ? 'Mari true': 'Mari false'}`)
console.log(`Mi lista es ${['a', 'b', 'c'].map(letra => `${letra}-styled` )}`)






