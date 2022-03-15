// Constructor de salones

function Clases(nivel, salon,horario,costoMensual, codigo){
    this.nivel = nivel;
    this.salon = salon;
    this.horario = horario;
    this.costoMensual = costoMensual;
    this.codigo = codigo;
    this.alumnos = [];    
};

// Variables cursos

const cursos = [
    clase11 = new Clases("Principiante", "Tokyo", "Lunes y Miércoles 4:00 pm - 6:00 pm", 1500,11),
    clase12 = new Clases("Principiante", "Kyoto", "Lunes a Viernes 8:00 am - 10:00 am", 1900,12),
    clase13 = new Clases("Principiante", "Hokkaido", "Sábados de 8:00 am - 12:00 m", 1300,13),
    clase21 = new Clases("Intermedio", "Hokkaido", "Lunes y Miércoles 4:00 pm - 6:00 pm", 1500,21),
    clase22 = new Clases("Intermedio", "Tokyo", "Lunes a Viernes 8:00 am - 10:00 am", 1900,22),
    clase23 = new Clases("Intermedio", "Kyoto", "Sábados de 8:00 am - 12:00 m", 1300,23),
    clase31 = new Clases("Avanzado", "Kyoto", "Lunes y Miércoles 4:00 pm - 6:00 pm", 1500,31),
    clase32 = new Clases("Avanzado", "Hokkaido", "Lunes a Viernes 8:00 am - 10:00 am", 1900,32),
    clase33 = new Clases("Avanzado", "Tokyo", "Sábados de 8:00 am - 12:00 m", 1300,33),
];

// Variables usuario

/* let nombre = prompt('¿Cuál es tu nombre?');
let apellido = prompt('¿Cuál es tu apellido?');
let edad = prompt('¿Cuál es tu edad?');
let nivel = parseInt(prompt("¿Qué nivel vas a cursar? Escribe \n 1 para Principante \n 2 para Intermedio \n 3 para avanzados")); 
let modalidad = prompt("¿Cuál horario quieres cursar? Escribe \n 1 para Semanales \n 2 para intensivos \n 3 para sabatinos");
 */
// Array con alumnos inscritos

const todosLosAlumnos = [];


// Constructor de alumnos inscritos

function Alumno(nombre, apellido, edad, curso){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = parseInt(edad);
    this.curso = curso;
    this.numeroEstudiante = 0; 
    if(todosLosAlumnos.length == 0) {
        this.numeroEstudiante = 100;
    } else {
        this.numeroEstudiante = todosLosAlumnos.length + 100;
    }
};


// Función para inscribirse en el curso

function inscripcion (nombre, apellido, edad, nivel, modalidad) {
    let clase = parseInt("" + nivel + modalidad);
    curso = cursos.find(curso => curso.codigo === clase);
    todosLosAlumnos.push(new Alumno(nombre, apellido, edad, curso));
    
   return alert(`¡Felicidades, ${nombre} ${apellido}! Ya eres parte de nuestra escuela. Tu curso de japonés ${curso.nivel} tendrá un costo de $${curso.costoMensual}. Estás inscrito en este horario: ${curso.horario}`)
}

inscripcion(nombre, apellido, edad, nivel, modalidad);