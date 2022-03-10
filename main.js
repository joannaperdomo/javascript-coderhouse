// Variables usuario
    let nombre = prompt('¿Cuál es tu nombre?');
    let apellido = prompt('¿Cuál es tu apellido?');
    let edad = prompt('¿Cuál es tu edad?');
    let curso = parseInt(prompt("¿Cuál idioma quieres estudiar? Escribe \n1 para japonés \n2 para chino \n3 para coreano"));
    let meses = parseInt(prompt("¿Por cuántos meses quieres estudiar?"));


// Variables cursos de idiomas
const japones = {
    horario: "Sábados de 8 a 12m",
    idioma: "Japonés",
    costoMensual: 1500
}
const chino = {
    horario: "Lunes y miércoles de 4 a 6 p.m.",
    idioma: "Chino",
    costoMensual: 1200
}
const coreano = {
    horario: "Martes y jueves de 10 a 12m",
    idioma: "Coreano",
    costoMensual: 2500
}

// Array con inscritos

const alumnosJapones = [];
const alumnosChino = [];
const alumnosCoreano = [];

// Constructor de alumnos inscritos

function Alumno(nombre, apellido, edad, idioma, tiempo){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = parseInt(edad);
    this.idioma = idioma;
    this.tiempo = tiempo;
}


// Función para inscribirse en el curso

function inscripcion (nombre, apellido, edad, idioma, tiempo) {
    switch (idioma){
        case 1:
            idioma = japones;
            alumnosJapones.push(new Alumno(nombre, apellido, edad, idioma,tiempo))
            break;
        case 2:
            idioma = chino;
            alumnosChino.push(new Alumno(nombre, apellido, edad, idioma,tiempo))
            break;
        case 3:
            idioma = coreano;
            alumnosCoreano.push(new Alumno(nombre, apellido, edad, idioma,tiempo))
            break;
        default:
            alert("Opción no válida. Inténtalo de nuevo") 
    }

    costoTotal = idioma.costoMensual * tiempo;
    horario = idioma.horario;
    
   return alert(`¡Felicidades, ${nombre} ${apellido}! Ya eres parte de nuestra escuela. Tu curso de ${idioma.idioma} tendrá un costo de $${costoTotal}. Estás inscrito en este horario: ${horario}`)
}

inscripcion(nombre, apellido, edad, curso, meses);



