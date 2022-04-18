const quizContenedor = document.getElementById('quiz');
let kanjisMostradosEnElExamen = [];

function kanjiRandomnizer (arr) {
    let randomkanji = arr[Math.floor(Math.random() * arr.length)];
    return randomkanji;
 }

const getRandomOption = () => {
    fetch(`https://kanjiapi.dev/v1/kanji/${kanji}`)
        .then((resp) => resp.json())
        .then((data) => {
            let kanjidata = data.kun_readings[0];
            console.log(kanjidata);
            opciones.push(kanjidata);
        })
}

const getKanji = async () => {
    // Llamada para obtener lista de kanjis
    const resp = await fetch('https://kanjiapi.dev/v1/kanji/grade-1');
    const listaDeKanjis = await resp.json();
    // Obtener kanji aleatorio de la lista
    let kanjiAleatorio = kanjiRandomnizer(listaDeKanjis);
    // Revisar que ese kanji no haya salido
    while (kanjisMostradosEnElExamen.includes(kanjiAleatorio)){
        kanjiAleatorio = kanjiRandomnizer(listaDeKanjis);
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

function crearQuiz(obj){
    // Añadir kanji al quiz contenedor
    const opciones = [
        obj.respuesta,

    ]
    const radioButtons = [];
    for(let i = 0; i < opciones.length; i++){
        radioButtons.push(
            `<label>
            <input type="radio" name="question" class="radio-button-quiz" value="${i}">
            ${opciones[i]}
            </label><br>`
        )
    }
    let resultadoHTML = radioButtons.join(" ");
    quizContenedor.innerHTML = `
    <h2>${obj.kanji}</h2><br>
    ${resultadoHTML}`;
    }
