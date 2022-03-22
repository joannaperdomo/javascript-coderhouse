// Constructor de salones

function Clases(nivel, salon,modalidad, horario,hora, costoMensual, codigo){
    this.nivel = nivel;
    this.salon = salon;
    this.modalidad = modalidad;
    this.horario = horario;
    this.hora = hora;
    this.costoMensual = costoMensual;
    this.codigo = codigo;
    this.alumnos = [];    
};

// Variables cursos

const cursos = [
    clase11 = new Clases("Principiante", "Tokyo", "Semanal", "Lunes y Miércoles", "4:00 pm - 6:00 pm", 1500,11),
    clase12 = new Clases("Principiante", "Kyoto","Intensivo",  "Lunes a Viernes", "8:00 am - 10:00 am", 1900,12),
    clase13 = new Clases("Principiante", "Hokkaido","Sabatino", "Sábados", "8:00 am - 12:00 m", 1300,13),
    clase21 = new Clases("Intermedio", "Hokkaido","Semanal", "Lunes y Miércoles", "4:00 pm - 6:00 pm", 1500,21),
    clase22 = new Clases("Intermedio", "Tokyo","Intensivo", "Lunes a Viernes", "8:00 am - 10:00 am", 1900,22),
    clase23 = new Clases("Intermedio", "Kyoto","Sabatino", "Sábados", "8:00 am - 12:00 m", 1300,23),
    clase31 = new Clases("Avanzado", "Kyoto","Semanal", "Lunes y Miércoles", "4:00 pm - 6:00 pm", 1500,31),
    clase32 = new Clases("Avanzado", "Hokkaido","Intensivo", "Lunes a Viernes", "8:00 am - 10:00 am", 1900,32),
    clase33 = new Clases("Avanzado", "Tokyo","Sabatino", "Sábados", "8:00 am - 12:00 m", 1300,33),
];

// LOOP PARA AÑADIR CLASES AL HTML

const salones = document.getElementsByClassName("salon");

for (let i = 0; i < salones.length; i++){
    salones[i].innerHTML = `${cursos[i].horario} <br/> ${cursos[i].hora} <br/> Salón ${cursos[i].salon}`;
}

// Array con alumnos inscritos

const todosLosAlumnos = [];

// Constructor de alumnos inscritos

function Alumno(nombre, apellido, email, curso){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.curso = curso;
    this.numeroEstudiante = 0; 
    if(todosLosAlumnos.length == 0) {
        this.numeroEstudiante = 100;
    } else {
        this.numeroEstudiante = todosLosAlumnos.length + 100;
    }
};

// Data de usuario (del formulario)
const formulario = document.getElementById("formulario");
const nombreU = document.getElementById("nombre");
const apellidoU = document.getElementById("apellido");
const emailU = document.getElementById("email");
let modalidadU = "";
let nivelU = "";

// Data de los radio buttons
let botonSeleccionado = document.querySelectorAll(".radio2");

botonSeleccionado[0].addEventListener('change', enviarData);
botonSeleccionado[1].addEventListener('change', enviarData);
botonSeleccionado[2].addEventListener('change', enviarData);
botonSeleccionado[3].addEventListener('change', enviarData);
botonSeleccionado[4].addEventListener('change', enviarData);
botonSeleccionado[5].addEventListener('change', enviarData);


function enviarData (e){
    let opcion = e.target.name;
    switch (opcion) {
        case 'escoger-modalidad':
            modalidadU = e.target.nextElementSibling.innerText;
            break;
        case 'escoger-nivel':
            nivelU = e.target.nextElementSibling.innerText;
    }
 };


// Elementos para inscripción exitosa 
const inscripcionExitosa = document.getElementById("inscripcion-exitosa");

// Funcion para enviar formulario
formulario.addEventListener("submit", enviarFormulario);


// Función enviar formulario e inscribir al alumno

function enviarFormulario (e){
    e.preventDefault();
    //crear objeto
    let curso = cursos.find((el) => el.nivel == nivelU && el.modalidad == modalidadU);
    // crear y añadir alumno al array de estudiantes
    todosLosAlumnos.push(new Alumno(nombreU.value, apellidoU.value, emailU.value, curso));
    // Mensaje de inscripción exitosa
    inscripcionExitosa.innerText = `¡Felicidades, ${nombreU.value} ${apellidoU.value}! Ya eres parte de nuestra escuela. Tu curso de japonés ${curso.nivel} tendrá un costo de $${curso.costoMensual}. Estás inscrito en este horario: ${curso.horario} ${curso.hora}`;
}