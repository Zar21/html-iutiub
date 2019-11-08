// se obtienen los videos de localstorage
var videos = JSON.parse(window.localStorage.getItem("videos"));
// se obtiene el elemento video
theVideo = document.querySelector("#play-video");
// se obtiene el elemento source de video
let source = document.getElementById('videosource');
let video_number = 0; // indice de la posicion del array de videos extraid de localstorage
let first = true; // boolean para comprovar si es la primera vez

// se quita el eventlistener del archivo video_controls.js, ya que se reutilizan los controles, pero el evento no
theVideo.removeEventListener("ended", changeVideo);
// se añade el nuevo eventlistener, con funcionalidad de lista de reproduccion
theVideo.addEventListener("ended", nextVideoOfLS);


if (videos && videos.length > 0) { // si existen videos en la lista(localstorage)
    // se ponen la ruta del primer video de localstorage
    source.src = "multimedia/video/"+videos[video_number]+".mp4";
    theVideo.load(); // se carga
} else { // si no hay videos en la lista
    theVideo.classList.add("hidden"); // se oculta el elemento video
    document.getElementsByClassName("video-buttons")[0].classList.add("hidden"); // se ocultan los controles
}

// funcion para pasar al siguiente video de la lista
function nextVideoOfLS() {
    video_number++; // incremento del numero
    if (video_number < videos.length) { // si no es el ultimo video
        source.src = "multimedia/video/"+videos[video_number]+".mp4"; // se pasa al siguiente
        theVideo.load();
        if (!first) theVideo.play(); // si no es el primer video, se autoreproduce 
        first = false;
    } else if (video_number >= videos.length) { // si es el ultimo video(o superior)
        video_number = videos.length-1; // se desace el incremento, y no se pasa al siguiente video
    }
}
// funcion para cambiar al video anterior
function previousVideo() {
    if (video_number > 0) { // si no es el primer video
        video_number -= 2; // se restan 2 al contador(se restan 2, porque despues en nextVideo se sumara uno, asi quedara video number con -1)
        nextVideoOfLS(); // se llama a la funcion next, que pondra el video anterior
    } 
}