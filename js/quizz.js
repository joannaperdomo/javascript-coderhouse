

// Funciones para el quiz

let contadordeRespuestas = 0;

function crearQuiz(){
    // variable para guardar preguntas
    const opciones = [];
    for (opcion in preguntas[contadordeRespuestas].answers){
        opciones.push(
            `<label>
            <input type="radio" name="question" value="${opcion}">
            ${preguntas[contadordeRespuestas].answers[opcion]}
            </label><br>`
        )
    }
    resultadoHTML = opciones.join(" ");
    quizContenedor.innerHTML = `
    <h2>${preguntas[contadordeRespuestas].question}</h2><br>
    ${resultadoHTML}`;
};

// Get elements
const quizContenedor = document.getElementById("quiz");
const botonEnviar = document.getElementById("enviar");


// Array con preguntas y respuestas
const preguntas = [
    {
        question: "はじめまして、わたし　の　なまえ　________  モニカ　です。",
        answers: {
            1: "が",
            2: "を",
            3: "は"
        },
        respuesta: 3
    },
    {
        question: "日__語 は　おもしろい　です。",
        answers: {
            1: "本",
            2: "体",
            3: "休"
        },
        respuesta: 1
    },
    {
        question: "日__語 は　おもしろい　です。",
        answers: {
            1: "本",
            2: "体",
            3: "休"
        },
        respuesta: 1
    },
    {
        question: "日__語 は　おもしろい　です。",
        answers: {
            1: "本",
            2: "体",
            3: "休"
        },
        respuesta: 1
    },
    {
        question: "日__語 は　おもしろい　です。",
        answers: {
            1: "本",
            2: "体",
            3: "休"
        },
        respuesta: 1
    },
    {
        question: "日__語 は　おもしろい　です。",
        answers: {
            1: "本",
            2: "体",
            3: "休"
        },
        respuesta: 1
    },
    {
        question: "日__語 は　おもしろい　です。",
        answers: {
            1: "本",
            2: "体",
            3: "休"
        },
        respuesta: 1
    },
    {
        question: "日__語 は　おもしろい　です。",
        answers: {
            1: "本",
            2: "体",
            3: "休"
        },
        respuesta: 1
    },
    {
        question: "日__語 は　おもしろい　です。",
        answers: {
            1: "本",
            2: "体",
            3: "休"
        },
        respuesta: 1
    },
    {
        question: "日__語 は　おもしろい　です。",
        answers: {
            1: "本",
            2: "体",
            3: "休"
        },
        respuesta: 1
    }
];

// Mostrar el quiz

crearQuiz();

// Añadir respuestas y pasar a la siguiente pregunta

const respuestasDelUsuario = [];

botonEnviar.onclick = () => {
    const elemento = document.getElementsByName("question");
    for (i = 0; i < elemento.length; i++){
        if(elemento[i].checked){
            const obj = {pregunta:preguntas[contadordeRespuestas].question,respuesta:elemento[i].value}
            respuestasDelUsuario.push(obj);
        }
    };
    if (contadordeRespuestas < preguntas.length - 1){
        contadordeRespuestas++
        crearQuiz()
    } else {
        botonEnviar.remove();
        mostrarResultados()
    }
};

// Funcion para mostrar los resultados

let respuestasAcertadas = [];

function mostrarResultados(){

    respuestasDelUsuario.forEach(respuesta => {
       let preguntaBase = preguntas.find((el) => el.question == respuesta.pregunta);
        if (preguntaBase.respuesta == respuesta.respuesta){
            respuestasAcertadas.push("prueba");
        }
    });

    quizContenedor.innerText = `Has acertado ${respuestasAcertadas.length} de ${preguntas.length}`

};



