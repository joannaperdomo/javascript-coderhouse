const quizContenedor = document.getElementById('quiz');
const botonEnviar = document.getElementById("enviar");
let kanjisMostradosEnElExamen = [];

// Conseguir un kanji aleatorio
const kanjiRandomnizer = async () => {
    // Llamada para obtener lista de kanjis
    const resp = await fetch('https://kanjiapi.dev/v1/kanji/grade-1');
    const listaDeKanjis = await resp.json();
    let randomkanji = listaDeKanjis[Math.floor(Math.random() * listaDeKanjis.length)];
    return randomkanji;
 }

 // Conseguir opciones de otras respuestas para el examen
const getRandomOption = async (kanji) => {
    const resp = await fetch(`https://kanjiapi.dev/v1/kanji/${kanji}`);
    const json = await resp.json();
    return json.kun_readings[0];
}

const getKanji = async () => {
    // Obtener kanji aleatorio de la lista
    let kanjiAleatorio = await kanjiRandomnizer();
    // Revisar que ese kanji no haya salido
    while (kanjisMostradosEnElExamen.includes(kanjiAleatorio)){
        kanjiAleatorio = kanjiRandomnizer();
    }
    // Llamada para obtener data de ese kanji aleatorio
    let KanjiAleatorioResp = await fetch(`https://kanjiapi.dev/v1/kanji/${kanjiAleatorio}`)
    let kanjiAleatorioRespData = await KanjiAleatorioResp.json();
    // Objeto del Kanji
    let objetoKanji = {
        kanji: kanjiAleatorioRespData.kanji,
        respuesta: kanjiAleatorioRespData.kun_readings[0]
    }
    // Empujar kanji a la lista de los kanjis ya mostrados durante el test
    kanjisMostradosEnElExamen.push(objetoKanji);
    // Generar opciones
    crearQuiz(objetoKanji);
};

async function crearQuiz (obj) {
    // Añadir kanji al quiz contenedor
    const opciones = [
        obj.respuesta,
        await getRandomOption(await kanjiRandomnizer()),
        await getRandomOption(await kanjiRandomnizer()),
        await getRandomOption(await kanjiRandomnizer()),
    ];
    const radioButtons = [];
    for(let i = 0; i < opciones.length; i++){
        radioButtons.push(
            `<label>
            <input type="radio" name="question" class="radio-button-quiz" value="${opciones[i]}">
            ${opciones[i]}
            </label><br>`
        )
    }
    let resultadoHTML = radioButtons.join(" ");
    quizContenedor.innerHTML = `
    <h2>${obj.kanji}</h2><br>
    ${resultadoHTML}`;
};

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
                pregunta:kanjisMostradosEnElExamen[kanjisMostradosEnElExamen.length - 1].kanji,
                respuesta:elemento[i].value
            }
            console.log(obj);
            respuestasDelUsuario.push(obj);
            contadordeopciones++;
        }
    };
    contadordeopciones == 0? enviarAlertaNoRespuestaSeleccionada():pasarASiguientePregunta();

};

// Respuesta de sweet alert si el usuario no marcó ninguna opción
function enviarAlertaNoRespuestaSeleccionada(){
    swal({
        title: "¡Error!",
        text: "No seleccionaste ninguna opción",
        icon:"error",
        button: "Regresar",
        closeOnEsc: true
    });
};

// Condicion para pasar a la siguiente pregunta o terminar el quiz
function pasarASiguientePregunta (){
    if (kanjisMostradosEnElExamen.length < 10){
        getKanji()
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
    let incrementoBarra = 100/10;
    barraProgreso = barraProgreso + incrementoBarra;
    barra.style = `width: ${barraProgreso}%;`;
};

getKanji();

// PROCESAR PREGUNTAS Y MOSTRAR RESULTADO FINAL

function empezarDeNuevoElExamen(){
    let contenedor = document.getElementById('nivelacion-contenedor');
    let boton = document.createElement('a');
    boton.className = 'btn btn-light'
    boton.innerHTML = 'Empezar de nuevo';
    boton.href = "nivelacion.html";
    contenedor.append(boton)
    
}

let respuestasAcertadas = [];

function mostrarResultados(){
    // Recorrer cada respuesta del usuario para verificarla con la respuesta correcta
    respuestasDelUsuario.forEach(respuesta => {
       let preguntaBase = kanjisMostradosEnElExamen.find((el) => el.kanji == respuesta.pregunta);
       // Contar respuestas 
        preguntaBase.respuesta == respuesta.respuesta && 
       respuestasAcertadas.push(preguntaBase.kanji);
    });
    // Crear botón de reload
    empezarDeNuevoElExamen();
    // Mensaje al usuario
    quizContenedor.innerHTML = `Has acertado ${respuestasAcertadas.length} de 10.`;
};