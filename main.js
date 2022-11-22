
function playSom(idElementeAudio) {
    document.querySelector(idElementeAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = playSom;
    contador++
}

