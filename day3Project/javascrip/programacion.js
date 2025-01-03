let timeLeft = 180;

function reiniciar() {
    location.reload();
}

function listo() {
    if (document.getElementById("respuesta1").value == "nilo" && 
        document.getElementById("respuesta2").value == "1939" && 
        document.getElementById("respuesta3").value == "jupiter" && 
        document.getElementById("respuesta4").value == "miguel de cervantes" && 
        document.getElementById("respuesta5").value == "11") {
        alert("Todas las respuestas son correctas");
    } else {
        alert("Alguna respuesta es incorrecta");
        reproducirAudio();
    }
}

// Función para formatear el tiempo en minutos y segundos
function formatoTiempo() {
    let min = Math.floor(timeLeft / 60);
    let sec = timeLeft % 60;
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

// Función para actualizar el tiempo en el elemento del DOM
function actualizadorTiempo() {
    const timerElement = document.getElementById("tiempo");
    timerElement.textContent = formatoTiempo();
}

// Función para iniciar el temporizador
function iniciarTiempo() {
    actualizadorTiempo();

    // Configura el intervalo para actualizar el tiempo cada segundo
    const intervaloTiempo = setInterval(() => {
        timeLeft--;
        actualizadorTiempo();
        if (timeLeft == 0) {
            clearInterval(intervaloTiempo);
            alert("Se acabó el tiempo");
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function(){
    iniciarTiempo();
});