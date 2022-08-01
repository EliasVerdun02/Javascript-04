//Declaracion de variables
let apellido
let notas
let texto = 'Promedios Finales:'

//Declaracion de funciones
const promediar =(notas)=> notas/3

const aprobacion = () =>{

    let promedioFinal = promediar(notas).toFixed(2)

    if(promedioFinal >= 7){
        return `El alumno ${apellido} Aprobó con: ${promedioFinal}`
    } else if(promedioFinal < 7) {
        return `El alumno ${apellido} Desaprobo con: ${promedioFinal}`
    } else {
        return `Ingresaste mal un dato`
    }
}

const mostrar = ()=>{
    console.log(texto)
}

//Comienzo del programa
const empezar =()=>{
    alert('A continuacion vamos a exhibir el promedio final de nuestros alumnos. Por favor ingresar apellido y sus 3 notas correspondientes')

    for(let i = 0;i < 3;i++){
    
    apellido = prompt(`Porfavor ingresar apellido del Alumno n°${i + 1}`)

    notas = 0
    for(let i = 0; i < 3; i++){
        let nota = parseInt(prompt(`${apellido} digame la nota de la evaluacion N°${i + 1}`))
        notas += nota
    }

    texto += ` ${aprobacion(notas)}`
}
}



