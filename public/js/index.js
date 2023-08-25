/* menu hamburguesa */


let menuToggle = document.getElementById('menu-toggle');
let menu = document.getElementById('navigation');
let CloseButton = document.getElementById('close-toggle');



var isMenuOpen = false;

menuToggle.addEventListener('click', function() {
    if (!isMenuOpen) {
        menuToggle.style.display= 'none';
        CloseButton.style.display= 'block';
        menu.style.right = '0';
        isMenuOpen = true;
    }
});

CloseButton.addEventListener('click', function(){
    if (isMenuOpen){
        menuToggle.style.display= 'block';
        CloseButton.style.display= 'none';
        menu.style.right ='-40%'
        isMenuOpen = false;
    }
});





 /* Efecto de play */
 
 
// Obtener referencias a los elementos HTML
const playButton = document.getElementById("playButton");
const audioPlayer = document.getElementById("audioPlayer");

// Variable para controlar el estado de reproducción
let isPlaying = false;

// Agregar un controlador de eventos para el clic en el botón de reproducción
playButton.addEventListener("click", function () {
    if (!isPlaying) {
        // Si no se está reproduciendo, inicia la reproducción
        audioPlayer.play();
        isPlaying = true;
        // Cambiar el ícono a pausa
        playButton.classList.remove("fa-play");
        playButton.classList.add("fa-pause");
    } else {
        // Si se está reproduciendo, detén la reproducción
        audioPlayer.pause();
        isPlaying = false;
        // Cambiar el ícono a reproducir
        playButton.classList.remove("fa-pause");
        playButton.classList.add("fa-play");
    }
});

playButton.addEventListener("click", function(event) {
    event.preventDefault();
});

