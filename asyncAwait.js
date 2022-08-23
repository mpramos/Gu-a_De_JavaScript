//? La declaración de función async define una función asíncrona que devuelve un objeto, lo cual permite a un programa correr una función sin congelar todo la compilación.
//? Dada que la finalidad de las funciones async/await es simplificar el comportamiento del uso síncrono de promesas, se hace más fácil escribir promesas.
//? 🔏 La estructura se compone por las palabras reservadas async y await:
//? La palabra async antes de la función, hace que la función devuelva una promesa.
//? La palabra await se utiliza dentro de las funciones async, lo que hace que el programa espere hasta que la variable(promesa) se resuelva para continuar.

async function saludar(nombre) {
    return new Promise(function (resolve,reject) {
        setTimeout(() => {
            console.log(`Hola ${nombre} cómo estás`)
            resolve()
        }, 3000);
    })
} 
async function hablar() {
    return new Promise(function (resolve,reject) {
        setTimeout(() => {
            console.log('bla bla bla')
            resolve()
        }, 2000);
    })
} 
async function despedirse(nombre) {
    return new Promise(function (resolve,reject) {
        setTimeout(() => {
            console.log(`Adiós ${nombre} nos vemos en la próxima`);
            resolve()
        }, 1000);
    })
} 
async function principal() {
    let saluda= await saludar('maria')
    let hablaa= await hablar()
    let despedida= await despedirse('maria')
}
principal()