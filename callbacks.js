//* Una función callback es aquella que es pasada como argumento a otra función para que sea "llamada de nuevo" (call back) en un momento posterior. Una función que acepta otras funciones como argumentos es llamada función de orden-superior (High-Order), y contiene la lógica para determinar cuándo se ejecuta la función callback. Es la combinación de estas dos la que nos permite ampliar nuestra funcionalidad.
function soyAsincrona(callback) {
    setTimeout(() => {
        console.log("Hola soy un setTimeout")
        callback()
    }, 2000);
}
console.log("Primera Ejecuión")
soyAsincrona(function () {
    console.log("Terminando ejecución")
})
