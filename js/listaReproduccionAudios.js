let audios = localStorage.getItem("audios");
let theAudio = document.querySelector("#play-audio");
if (audios.length > 0) {

}
else {
    theAudio.classList.add("hidden");
}