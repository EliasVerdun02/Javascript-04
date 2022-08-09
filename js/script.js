//Declaracion de variables
let alumnos = []

class Alumno{
    constructor(nombre,notas,promedio,estado){
        this.nombre = nombre
        this.notas = notas
        this.promedio = promedio
        this.estado = estado
    }

    mensaje(){
        return `Mi estado es: ${this.estado}`
    }
}

//Declaracion de funciones
const promediar =(notas)=> {
    let notasTotales = 0
    for(let nota of notas){
        notasTotales += nota
    }
    return notasTotales / 3
}

const mostrar = ()=>{
    for(alumno of alumnos){
        console.log(`
         Alumno: ${alumno.nombre} 
         Notas: ${alumno.notas.join(', ')} 
         Promedio Final: ${alumno.promedio}
         Estado: ${alumno.estado}`)
    }
}

const aprobacion =(promedioFinal)=>{
    let estado
    if(promedioFinal >= 7){
        estado = 'Aprobado'
    } else {
        estado = 'Desaprobado'
    }
    
    return estado
    
}


//Comienzo del programa
const empezar =()=>{
    alert('A continuacion vamos a exhibir el promedio final de nuestros alumnos. Por favor ingresar su Nombre y sus 3 notas correspondientes')

    for(let i = 0; i < 3;i++){
    
    let apellido = prompt(`Porfavor ingresar Nombre del Alumno n°${i + 1}`)

    let notas = []
    for(let i = 0; i < 3; i++){
        let nota = parseInt(prompt(`${apellido} digame la nota de la evaluacion N°${i + 1}`))
        notas.push(nota)
    }

    let promedio = parseInt(promediar(notas).toFixed(2))
    let estado = aprobacion(promedio)

    alumnos.push(new Alumno(apellido,notas,promedio,estado))
    
    }
}




