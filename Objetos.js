//!Creación de un objeto vacío
// const persona={}
// console.log(persona)
//! Creación de una objeción con valores
const persona={
    PrimerNombre:'José',//string
    SegundoNombre:'Maria',//string
    edad:30,//number
    pais:"Argentina",//string
    ciudad:"Buenos Aires",//string
    skills:[
        'HTML',
        'CSS',
        'JAVASCRIPT',
        'REACT',
        'NODE',
        'MONGODB'
    ],
    obtenerNombreCompleto:function() {
        return `${this.PrimerNombre} ${this.SegundoNombre}`
    }
}
console.log('persona',persona)
//! Obtencion de valores de un objeto
console.log('obteniendo el primer nombre ',persona.PrimerNombre)
console.log('obteniendo los nombres a partir de la funcion Obtener ',persona.obtenerNombreCompleto())
//! Obtención de claves de objetos mediante Object.keys()
const keys=Object.keys(persona)
console.log(keys)
//! Object,values para obtener los valores
const valores=Object.values(persona)
console.log('valores')
console.log(valores)
//! valores y las propiedades
const entradas= Object.entries(persona)
console.log(entradas)
