let audios = JSON.parse(localStorage.getItem("audios")); //audios guardados en localstorage
let source = document.getElementById("audiosource"); 
let theAudio = document.querySelector("#play-audio");
let first = true; //variable para comprobar si acabas de entrar y asi evitar que se reproduzca automaticamente el audio
let current; //en current guardaremos el numero del audio que estamos escuchando
if (audios && audios.length > 0) { //comprobamos si tenemos algun audio en el reproductor
    current = -1; //inicializamos el current a -1 ya que la funcion audioEnded simpre suma +1 a current al entrar y el primer audio se encuentra en la posicio 0 de la array
    theAudio.addEventListener('ended', audioEnded, false); //este listener comprobara si el audio ha acabado para pasar al sigiente
    audioEnded();
}
else { //en caso de no tener audios en el reproductor se oculta la etiqueta audio
    theAudio.classList.add("hidden");
}

function audioEnded() { //funcion que se ejecuta para activar el siguiente audio
    current++
    if (current < audios.length) {
        source.src = "multimedia/audio/"+audios[current]+".mp3";
        theAudio.load();
        if (!first) theAudio.play();
        first = false;
    }
    else if (current >= audios.length) { //este else if controla el current en caso de forzar al boton de siguiente a pulsarse muchas veces
        current = audios.length-1;
    }
}

function previousAudio() {
    if (current > 0) { //este if controla que no bajemos del primer video
        current -= 2; //se le restan 2 ya que al entrar a audioEnded se le sumara 1
        audioEnded();
    } 
}