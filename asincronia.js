//* JavaSript corre una tarea a la vez y a eso se le denomina asincronismo
// La asincronía de JavaScript consiste en delegar algunas tareas para que las ejecute el navegador, una vez esas tareas están terminadas entran en otra estructura llamada Callback queue. En el Callback queue la segundaa que entra, es la primera en salir. 

setTimeout(()=>console.log('Hola a todos'),2000)