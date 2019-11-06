let audios = JSON.parse(localStorage.getItem("audios"));
let source = document.getElementById("audiosource");
let theAudio = document.querySelector("#play-audio");
let first = true;
let current;
if (audios && audios.length > 0) {
    current = -1;
    theAudio.addEventListener('ended', audioEnded, false);
    audioEnded();
}
else {
    theAudio.classList.add("hidden");
}

function audioEnded() {
    current++
    if (current < audios.length) {
        source.src = "multimedia/audio/"+audios[current]+".mp3";
        theAudio.load();
        if (!first) theAudio.play();
        first = false;
    }
    else if (current >= audios.length) {
        current = audios.length-1;
    }
}

function previousAudio() {
    if (current > 0) {
        current -= 2;
        audioEnded();
    } 
}