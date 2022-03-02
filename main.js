// Variables usuario

let curso = prompt("¿Cuál idioma quieres estudiar? Escribe \n1 para japonés \n2 para chino \n3 para coreano");
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

// Función para escoger el curso

function inscripcion (idioma, tiempo) {

    if (idioma == "1" || "2" || "3")
    {
        switch (idioma){
            case "1":
                idioma = japones;
                break;
            case "2":
                idioma = chino;
                break;
            case "3":
                idioma = coreano;
                break;
            default:
                alert("Opción no válida. Inténtalo de nuevo")             
        }

        costoTotal = idioma.costoMensual * tiempo;
        horario = idioma.horario;
        
       return alert(`Tu curso de ${idioma.idioma} tendrá un costo de $${costoTotal}. Estás inscrito en este horario: ${horario}`)

    } else {
        alert("Ingresaste un número incorrecto. Intenta de nuevo.")
    }
    
}

inscripcion(curso,meses);



