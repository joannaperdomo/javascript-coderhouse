// Funciones para el quiz

let contadordeRespuestas = 0;

function crearQuiz(){
    // variable para generar las preguntas con sus opciones
    const opciones = [];
    for (opcion in preguntas[contadordeRespuestas].answers){
        opciones.push(
            `<label>
            <input type="radio" name="question" class="radio-button-quiz" value="${opcion}">
            ${preguntas[contadordeRespuestas].answers[opcion]}
            </label><br>`
        )
    }
    let resultadoHTML = opciones.join(" ");
    quizContenedor.innerHTML = `
    <h2>${preguntas[contadordeRespuestas].question}</h2><br>
    ${resultadoHTML}`;
};

// Get elements
const quizContenedor = document.getElementById("quiz");
const botonEnviar = document.getElementById("enviar");
let resultadosGuardados = JSON.parse(localStorage.getItem("resultados"));



// Array con preguntas y respuestas
const preguntas = [
    {
        question: "はじめまして、わたし　の　なまえ　________  モニカ　です。",
        answers: {
            1: "が",
            2: "を",
            3: "は"
        },
        respuesta: 3,
        valor: 1
    },
    {
        question: "日__語 は　おもしろい　です。",
        answers: {
            1: "本",
            2: "体",
            3: "休"
        },
        respuesta: 1,
        valor: 1
    },
    {
        question: "山田さんは毎日学校＿＿来ます。",
        answers: {
            1: "に",
            2: "へ",
            3: "で"
        },
        respuesta: 2,
        valor: 2
    },
    {
        question: "今日は六＿＿にともだちに会います。",
        answers: {
            1: "時",
            2: "侍",
            3: "待"
        },
        respuesta: 1,
        valor: 2
    },
    {
        question: "昨日はラメんを＿＿＿＿＿。",
        answers: {
            1: "食べます",    
            2: "食べたい",
            3: "食べました"
        },
        respuesta: 3,
        valor: 3
    },
    {
        question: "どの国に＿＿ことがありますか。",
        answers: {
            1: "行く",    
            2: "行った",
            3: "行けば"
        },
        respuesta: 2,
        valor: 3
    }
];

// Revisar si el usuario ya ha presentado el quiz o no
resultadosGuardados? mostrarResultadoObtenido() : crearQuiz();


// Cambiar el color del boton al seleccionar pregunta

quizContenedor.addEventListener('change', () => {botonEnviar.style.backgroundColor = "#141430"; botonEnviar.style.color = "white";});


// Añadir respuestas y pasar a la siguiente pregunta

const respuestasDelUsuario = [];

botonEnviar.onclick = () => {
    const elemento = document.getElementsByName("question");
    let contadordeopciones = 0;
    // Loop para encontrar la opcion seleccionada
    for (i = 0; i < elemento.length; i++){
        if(elemento[i].checked){
            const obj = {
                pregunta:preguntas[contadordeRespuestas].question,
                respuesta:elemento[i].value
            }
            respuestasDelUsuario.push(obj);
            contadordeopciones++;
        }
    };
    contadordeopciones == 0? console.log("falto respuestas"):pasarASiguientePregunta();

};

// Condicion para pasar a la siguiente pregunta o terminar el quiz
function pasarASiguientePregunta (){
    if (contadordeRespuestas < preguntas.length - 1){
        contadordeRespuestas++
        crearQuiz()
    } else {
        botonEnviar.remove();
        mostrarResultados()
    }
    // Actualizar progreso de la barra
    actualizarBarraDeProgreso();
    // Regresar el botón a su estilo original
    botonEnviar.style.backgroundColor = "";
    botonEnviar.style.color = "";
};

let barraProgreso = 0;

function actualizarBarraDeProgreso(){
    const barra = document.getElementById("quiz-progress-bar");
    let incrementoBarra = 100/preguntas.length;
    barraProgreso = barraProgreso + incrementoBarra;
    barra.style = `width: ${barraProgreso}%;`;
};

// Funcion para mostrar los resultados

let respuestasAcertadas = [];

// Mostrar resultados si el usuario ya había presentado el examen
function mostrarResultadoObtenido (){
    botonEnviar.remove();
    quizContenedor.innerHTML = `Ya has presentado esta prueba. Acertaste ${resultadosGuardados.aciertos} preguntas de ${preguntas.length}. Te recomendamos que te inscribas en el <b>${calcularNivelRecomendado(resultadosGuardados.notaFinal)}</b>.`;
    crearBotonDeInscripcion();
};

// Crear boton de inscripcion
function crearBotonDeInscripcion(){
    let contenedor = document.getElementById('nivelacion-contenedor');
    let boton = document.createElement('a');
    boton.className = 'btn btn-light'
    boton.innerHTML = 'Inscribirme';
    boton.href = "../index.html#seccion-inscripcion";
    contenedor.append(boton)
    
}

// Sumar el valor de las respuestas para calcular la nota final
function calcularNotaFinal(...aciertos) {
	return aciertos.reduce((acc, n) => acc + n,0);
};

function calcularNivelRecomendado(notaFinal){
    return notaFinal > 4 ? notaFinal > 8 ? 
    'Nivel Avanzado':
    'Nivel Intermedio':
    'Nivel Principiante';    
};

function mostrarResultados(){
    // Recorrer cada respuesta del usuario para verificarla con la respuesta correcta
    respuestasDelUsuario.forEach(respuesta => {
       let preguntaBase = preguntas.find((el) => el.question == respuesta.pregunta);
       // Contar respuestas 
       preguntaBase.respuesta == respuesta.respuesta && 
       respuestasAcertadas.push(preguntaBase.valor);
    });

    // Mensaje al usuario
    let notaFinal = calcularNotaFinal(...respuestasAcertadas);
    quizContenedor.innerHTML = `Has acertado ${respuestasAcertadas.length} de ${preguntas.length}. 
    Te recomendamos que te inscribas en el <b>${calcularNivelRecomendado(notaFinal)}</b>.`;

    // Guardar resultado en local storage
    const resultadoFinal = {aciertos: respuestasAcertadas.length, notaFinal: notaFinal};
    const resultadoFinalEnJSON = JSON.stringify(resultadoFinal);
    localStorage.setItem("resultados", resultadoFinalEnJSON);
};


