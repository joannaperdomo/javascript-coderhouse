


// Variables usuario


/*     let nombre = prompt('¿Cuál es tu nombre?');
    let apellido = prompt('¿Cuál es tu apellido?');
    let edad = prompt('¿Cuál es tu edad?');
    let curso = parseInt(prompt("¿Cuál idioma quieres estudiar? Escribe \n1 para japonés \n2 para chino \n3 para coreano"));
    let meses = parseInt(prompt("¿Por cuántos meses quieres estudiar?")); */


// Array con inscritos

const todosLosAlumnos = [];

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
    clase110010 = new Clases("Principiante", "Tokyo", "Lunes y Miércoles 4:00 pm - 6:00 pm", 1500,110010),
    clase100101 = new Clases("Principiante", "Kyoto", "Lunes a Viernes 8:00 am - 10:00 am", 1900,110011),
    clase100102 = new Clases("Principiante", "Hokkaido", "Sábados de 8:00 am - 12:00 m", 1300,110012),
    clase100103 = new Clases("Intermedio", "Hokkaido", "Lunes y Miércoles 4:00 pm - 6:00 pm", 1500,110013),
    clase100104 = new Clases("Intermedio", "Tokyo", "Lunes a Viernes 8:00 am - 10:00 am", 1900,110014),
    clase100105 = new Clases("Intermedio", "Kyoto", "Sábados de 8:00 am - 12:00 m", 1300,110015),
    clase100106 = new Clases("Avanzado", "Kyoto", "Lunes y Miércoles 4:00 pm - 6:00 pm", 1500,110016),
    clase100107 = new Clases("Avanzado", "Hokkaido", "Lunes a Viernes 8:00 am - 10:00 am", 1900,110017),
    clase100108 = new Clases("Avanzado", "Tokyo", "Sábados de 8:00 am - 12:00 m", 1300,1100108),

];




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

function inscripcion (nombre, apellido, edad, clase) {
    curso = cursos.find(curso => curso.codigo === clase);
    todosLosAlumnos.push(new Alumno(nombre, apellido, edad, curso));
    
   return alert(`¡Felicidades, ${nombre} ${apellido}! Ya eres parte de nuestra escuela. Tu curso de japonés ${curso.nivel} tendrá un costo de $${curso.costoMensual}. Estás inscrito en este horario: ${curso.horario}`)
}

inscripcion(nombre, apellido, edad, clase);