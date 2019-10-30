//let number = 1
theVideo = document.querySelector("#play-video");

// detecta cuando se termina el video y reproduce el siguiente
theVideo.addEventListener("ended", nextVideo);

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
function nextVideo() {      
    let source = document.getElementById('videosource');
    number++;
    if (number > 3) number = 1;
    source.src = "movie_clip"+ number +".mp4";
    theVideo.load();
    theVideo.play();
}

function previousVideo() {
    let source = document.getElementById('videosource');
    number--;
    if (number == 0) number = 3;
    source.src = "movie_clip"+ number +".mp4";
    theVideo.load();
    theVideo.play();
}