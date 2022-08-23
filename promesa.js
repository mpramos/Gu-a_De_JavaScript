//! Una promesa es una forma de manejar operaciones asincrónicas en JavaScript. Permite a los controladores con una acción asincrónica el valor de éxito eventual o la razón de falla. Esto permite que los métodos asincrónicos devuelvan valores como los métodos sincrónicos: en lugar de devolver inmediatamente el valor final, el método asincrónico devuelve una promesa de proporcionar el valor en algún momento en el futuro.

//! Una promesa se encuentra en uno de estos estados:

//! pendiente: estado inicial, ni cumplido ni rechazado.
//! cumplido: lo que significa que la operación se completó con éxito.
//! rechazado: lo que significa que la operación falló.
//! Una promesa pendiente puede cumplirse con un valor o rechazarse con una razón (error). Cuando se produce cualquiera de estas opciones, se llama a los controladores asociados puestos en cola por el método then de una promesa. (Si la promesa ya se ha cumplido o rechazado cuando se adjunta un controlador correspondiente, se llamará al controlador, por lo que no hay ninguna condición de carrera entre una operación asincrónica que se completa y sus controladores que se adjuntan).

//! A medida que los métodos Promise.prototype.then() y Promise.prototype.catch() devuelven promesas, se pueden encadenar.
// pendiente , cumplido, rechazado

const promise = new Promise(function (resolve, reject) {
    if(false){
        resolve('la promesa se ejecutó satisfactoriamente')
    }
    else{
        reject('la promesa no se pudo ejecutar satisfactoriamente')
    }
})
promise
.then((results)=>console.log(results))
.catch((error)=>console.log(error))
.finally(()=>console.log('final'))

const edad=14;
const EdadParaVotar= new Promise(
    function (resolve,reject) {
        if(edad>=18){
            resolve(`Con ${edad} años Tienes la edad suficiente para votar`)
        }else{
            reject(`Con ${edad} años tú no puedes votar`)
        }
    }
)
EdadParaVotar
.then((results)=>console.log(results))
.catch((error)=>console.log(error))
.finally(()=>console.log('final'))