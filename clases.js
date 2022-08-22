class Animal{
    constructor(nombre,edad,color,tipo,hábitat){
        this.nombre=nombre,
        this.edad=edad,
        this.color=color,
        this.tipo=tipo,
        this.hábitat=hábitat
    }
}

const perro=new Animal('bobbie','4','negro','tipoX','Terrestre')
constle.log(perro.color)






class Persona{
    constructor(
        primerNombre,
        segundoNombre,
        edad,
        pais, 
        ciudad){
        this.primerNombre=primerNombre,
        this.segundoNombre=segundoNombre,
        this.edad=edad,
        this.pais=pais,
        this.ciudad=ciudad,
        this.puntaje=0; //number
        this.habilidad=[] // strings

    }
    getNombreCompleto(){
        const NombreCompleto= `${this.primerNombre} ${this.segundoNombre}`
        return NombreCompleto
    }
    /* Obtener el puntaje */
    get ObtenerPuntaje(){
        return this.puntaje
    }
    /* Setear el puntaje */
   

    set CambiarPuntaje(puntaje){
       
        this.puntaje += puntaje
    }
    get ObtenerHabilidades(){
        return this.habilidad
    }
    set setHabilidades(habilidad){
        this.habilidad.push(habilidad)
    }

}
const persona1 = new Persona('ana','mullisaca',30,'Bolivia','La Paz');
const persona2 = new Persona('anita','mullisaca',26,'Bolivia','La Paz');
console.log(persona1.ObtenerPuntaje);
persona1.CambiarPuntaje=1
console.log(persona1.ObtenerPuntaje);
console.log(persona1.ObtenerHabilidades);
persona1.setHabilidades='HTML'
persona1.setHabilidades='CSS'
persona1.setHabilidades='JavaScript'
console.log(persona1.habilidad);





console.log(persona1.puntaje)
console.log(persona2.puntaje)
console.log(persona1.habilidad)
console.log(persona2.habilidad)
class Curso{
    #titulo="JavaScript"
    // inscribir=(nombre)=>this.nombre=nombre
    #bienvenida(){
        console.log("Bienvenidos al curso "+ this.#titulo)
    }
    constructor(titulo,color="amarillo"){
        this.titulo= titulo,
        this.color=color
        this.#bienvenida()
    }
}
let javaScript= new Curso();
console.log(javaScript);
/* clase padre */
class Human{
    especie="Humano"
}
/* clase hijo */
class admin extends Human{}
let Admin=new admin()
console.log(Admin.especie)
class User{
   get nombre(){
        return this._nombre
   }
   set nombre(nombre){
    this._nombre=nombre
   }
}
let user = new User();

user.nombre="Paulina"
console.log(user.nombre);

class Administrador extends User{
    constructor(nombre){
        super(nombre)
    }
   saludar(){
    super.saludar()
    console.log("Hola soy admin")
   }
}
let persona3=new Administrador("Javier")
console.log(persona3.saludar())
console.log(persona3.nombre)
//! Encapsulacion





