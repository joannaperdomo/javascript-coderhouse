

// Funciones para el quiz
function crearQuiz(){
    // variable para guardar preguntas
    const output = [];

    // para cada pregunta
    preguntas.forEach((preguntaActual, numeroPregunta) => {
        const respuestas = [];

        for(opcion in preguntaActual.answers){
            respuestas.push(
                `${opcion}: ${preguntaActual.answers[opcion]}`
            );
        };

        output.push(
            console.log(
                `${preguntaActual.question} \n
                ${respuestas.join(" ")}
                `)
            )
        }
    )
};

function mostrarResultados(){};

// Get elements
const quizContenedor = document.getElementById("quiz");
const resultadosContenedor = document.getElementById("resultados");
const botonEnviar = document.getElementById("enviar");

// Array con preguntas y respuestas
const preguntas = [
    {
        question: "Test",
        answers: {
            1: "uno",
            2: "dos",
            3: "tres"
        },
        respuesta: 2
    },
    {
        question: "Test2",
        answers: {
            1: "uno",
            2: "dos",
            3: "tres"
        },
        respuesta: 1
    }
];

// Mostrar el quiz
crearQuiz();

// Mostrar resultados al presionar boton
botonEnviar.onclick(mostrarResultados());




