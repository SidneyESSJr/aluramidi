
function playSom(idElementeAudio) {
    const elemento = document.querySelector(idElementeAudio);
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log("Elemento não localizado ou seletor invalido!")
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach((tecla) => {
    tecla.onclick = () => playSom(`#som_${tecla.classList[1]}`);
    tecla.onkeydown = (event) => {
        if (event.key === 'Enter' || event.code === "Space")
            tecla.classList.add('ativa');
        tecla.onkeyup = () => tecla.classList.remove('ativa');
    }
});


