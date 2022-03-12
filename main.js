// Variables usuario
/*     let nombre = prompt('¿Cuál es tu nombre?');
    let apellido = prompt('¿Cuál es tu apellido?');
    let edad = prompt('¿Cuál es tu edad?');
    let curso = parseInt(prompt("¿Cuál idioma quieres estudiar? Escribe \n1 para japonés \n2 para chino \n3 para coreano"));
    let meses = parseInt(prompt("¿Por cuántos meses quieres estudiar?")); */


// Array con inscritos

const todosLosAlumnos = [];

// Constructor de salones

function Clases(salon,horario,costoMensual, codigo){
    this.salon = salon;
    this.horario = horario;
    this.costoMensual = costoMensual;
    this.codigo = codigo;
    this.alumnos = [];    
};

// Variables cursos
const todosLosSalones = [
    let japo = new Clases("Tokyo", "Sábados de 8 a 12m", 1500),


]



// Constructor de alumnos inscritos

function Alumno(nombre, apellido, edad, idioma, tiempo){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = parseInt(edad);
    this.idioma = idioma;
    this.tiempo = tiempo;
    this.numeroEstudiante = 0; 
    if(todosLosAlumnos.length == 0) {
        this.numeroEstudiante = 100;
    } else {
        this.numeroEstudiante = todosLosAlumnos.length + 100;
    }
};


// Función para inscribirse en el curso

function inscripcion (nombre, apellido, edad, idioma, tiempo,numeroEstudiante) {
    switch (idioma){
        case 1:
            idioma = japones;
            let nuevoalumno = new Alumno(nombre, apellido, edad, idioma,tiempo)
            japones.alumnos.push(nuevoalumno)
            todosLosAlumnos.push(numeroEstudiante)
            break;
        case 2:
            idioma = chino;
            alumnosChino.push(new Alumno(nombre, apellido, edad, idioma,tiempo))
            todosLosAlumnos.push()
            break;
        case 3:
            idioma = coreano;
            alumnosCoreano.push(new Alumno(nombre, apellido, edad, idioma,tiempo))
            todosLosAlumnos.push()
            break;
        default:
            alert("Opción no válida. Inténtalo de nuevo") 
    }

    costoTotal = idioma.costoMensual * tiempo;
    horario = idioma.horario;
    
   return alert(`¡Felicidades, ${nombre} ${apellido}! Ya eres parte de nuestra escuela. Tu curso de ${idioma.idioma} tendrá un costo de $${costoTotal}. Estás inscrito en este horario: ${horario}`)
}

inscripcion(nombre, apellido, edad, curso, meses);