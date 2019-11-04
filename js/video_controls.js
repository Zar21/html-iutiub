let number = 1
theVideo = document.querySelector("#play-video");

// detecta cuando se termina el video y reproduce el siguiente
theVideo.addEventListener("ended", changeVideo);

function playVideo() {
    theVideo.play();
}

function pauseVideo() {
    theVideo.pause();
}

function stopVideo() {
    theVideo.currentTime = 0;
    theVideo.pause();
}

function rewindVideo() {
    theVideo.currentTime = 0;
}

function avanceSeconds() {
    theVideo.currentTime = theVideo.currentTime + 10;
}

function rewindSeconds() {
    theVideo.currentTime = theVideo.currentTime - 10;
}
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
