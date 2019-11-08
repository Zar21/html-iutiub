let number = 1
theVideo = document.querySelector("#play-video");

// detecta cuando se termina el video y reproduce el siguiente
theVideo.addEventListener("ended", changeVideo);

// reproduccir un video
function playVideo() {
    theVideo.play();
}

// pausar un video
function pauseVideo() {
    theVideo.pause();
}

// detener un video y reiniciar sin autoreproducir
function stopVideo() {
    theVideo.currentTime = 0;
    theVideo.pause();
}

// hacer retroceder el video hasta el principio
function rewindVideo() {
    theVideo.currentTime = 0;
}

// avanza el video 10 segundos
function avanceSeconds() {
    theVideo.currentTime = theVideo.currentTime + 10;
}

// hace retroceder el video 10 segundos
function rewindSeconds() {
    theVideo.currentTime = theVideo.currentTime - 10;
}

// funcion que cambia de video al siguiente o al anterior dependiendo del parametro(refactorizacion de dos funciones en una)
// p = previous
// n = next (default)
function changeVideo(param = "n") {
    let source = document.getElementById('videosource');
    // si param es p de previous, se resta para poner el video anterior, si no se suma, de esta forma se reducen dos funciones iguales a una optimizando el codigo javascript
    (param == "p") ? number-- : number++;

    if (number < 4 && number > 0){ 
        source.src = "multimedia/video/movie_clip"+ number +".mp4";
        theVideo.load();
        playVideo();
    } else {
        pauseVideo();
    }
}
